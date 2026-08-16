from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from sqlalchemy import inspect, select, text
from sqlalchemy.orm import Session, joinedload

from app.config import get_settings
from app.database import Base, engine
from app.models import Order, OrderVehicle, User
from app.routers import auth, orders, products, statistics, withdrawals
from app.security import get_password_hash
from app.services import recalculate_order_totals


settings = get_settings()
app = FastAPI(
    title=settings.app_name,
    docs_url=f"{settings.api_prefix}/docs",
    openapi_url=f"{settings.api_prefix}/openapi.json",
)

app.add_middleware(
    CORSMiddleware,
    allow_origins=settings.cors_origin_list,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.on_event("startup")
def startup() -> None:
    if settings.environment == "development" and settings.database_url.startswith("sqlite"):
        Base.metadata.create_all(bind=engine)
        ensure_sqlite_development_columns()
    ensure_default_user()
    refresh_order_totals()


def ensure_default_user() -> None:
    with Session(engine) as db:
        exists = db.scalar(select(User).where(User.username == settings.default_admin_username))
        if exists:
            return
        user = User(
            username=settings.default_admin_username,
            password_hash=get_password_hash(settings.default_admin_password),
            nickname=settings.default_admin_nickname,
            phone=settings.default_admin_phone,
        )
        db.add(user)
        db.commit()


def ensure_sqlite_development_columns() -> None:
    inspector = inspect(engine)
    if "products" not in inspector.get_table_names():
        return
    columns = {column["name"] for column in inspector.get_columns("products")}
    with engine.begin() as connection:
        if "net_weight" not in columns:
            connection.execute(text("ALTER TABLE products ADD COLUMN net_weight NUMERIC(12, 2) NOT NULL DEFAULT 0.00"))
        if "gross_weight" not in columns:
            connection.execute(text("ALTER TABLE products ADD COLUMN gross_weight NUMERIC(12, 2) NOT NULL DEFAULT 0.00"))


def refresh_order_totals() -> None:
    with Session(engine) as db:
        orders_to_refresh = db.scalars(
            select(Order).options(joinedload(Order.vehicles).joinedload(OrderVehicle.items), joinedload(Order.adjustments))
        ).unique().all()
        for order in orders_to_refresh:
            recalculate_order_totals(order)
        db.commit()


@app.get("/")
def root() -> dict[str, str]:
    return {"message": settings.app_name}


app.include_router(auth.router, prefix=settings.api_prefix)
app.include_router(products.router, prefix=settings.api_prefix)
app.include_router(orders.router, prefix=settings.api_prefix)
app.include_router(statistics.router, prefix=settings.api_prefix)
app.include_router(withdrawals.router, prefix=settings.api_prefix)
