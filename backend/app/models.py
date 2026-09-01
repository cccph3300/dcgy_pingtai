from datetime import date, datetime
from decimal import Decimal, ROUND_HALF_UP

from sqlalchemy import Date, DateTime, ForeignKey, Numeric, String, UniqueConstraint, func
from sqlalchemy.orm import Mapped, mapped_column, relationship

from app.database import Base


Money = Numeric(12, 2, asdecimal=True)
Quantity = Numeric(12, 2, asdecimal=True)


class TimestampMixin:
    created_at: Mapped[datetime] = mapped_column(DateTime(timezone=True), server_default=func.now())
    updated_at: Mapped[datetime] = mapped_column(DateTime(timezone=True), server_default=func.now(), onupdate=func.now())


class User(TimestampMixin, Base):
    __tablename__ = "users"

    id: Mapped[int] = mapped_column(primary_key=True)
    username: Mapped[str] = mapped_column(String(64), unique=True, index=True)
    password_hash: Mapped[str] = mapped_column(String(255))
    nickname: Mapped[str] = mapped_column(String(64), default="超市配送")
    phone: Mapped[str] = mapped_column(String(32), default="")
    avatar: Mapped[str | None] = mapped_column(String(255), nullable=True)

    products: Mapped[list["Product"]] = relationship(back_populates="user")
    orders: Mapped[list["Order"]] = relationship(back_populates="user")
    withdrawals: Mapped[list["Withdrawal"]] = relationship(back_populates="user")


class Product(TimestampMixin, Base):
    __tablename__ = "products"

    id: Mapped[int] = mapped_column(primary_key=True)
    user_id: Mapped[int] = mapped_column(ForeignKey("users.id"), index=True)
    name: Mapped[str] = mapped_column(String(80))
    net_weight: Mapped[Decimal] = mapped_column(Quantity, default=Decimal("0.00"))
    gross_weight: Mapped[Decimal] = mapped_column(Quantity, default=Decimal("0.00"))
    cost: Mapped[Decimal] = mapped_column(Money, default=Decimal("0.00"))
    status: Mapped[str] = mapped_column(String(16), default="active")

    user: Mapped["User"] = relationship(back_populates="products")
    supermarkets: Mapped[list["ProductSupermarket"]] = relationship(
        back_populates="product", cascade="all, delete-orphan"
    )


class ProductSupermarket(TimestampMixin, Base):
    __tablename__ = "product_supermarkets"
    __table_args__ = (UniqueConstraint("product_id", "supermarket", name="uq_product_supermarket"),)

    id: Mapped[int] = mapped_column(primary_key=True)
    product_id: Mapped[int] = mapped_column(ForeignKey("products.id", ondelete="CASCADE"), index=True)
    supermarket: Mapped[str] = mapped_column(String(32), index=True)
    sale_price: Mapped[Decimal] = mapped_column(Money)
    commission_price: Mapped[Decimal] = mapped_column(Money)
    enabled: Mapped[bool] = mapped_column(default=True)

    product: Mapped["Product"] = relationship(back_populates="supermarkets")


class DailyPriceOverride(TimestampMixin, Base):
    __tablename__ = "daily_price_overrides"
    __table_args__ = (UniqueConstraint("user_id", "product_id", "supermarket", "override_date", name="uq_daily_price_override"),)

    id: Mapped[int] = mapped_column(primary_key=True)
    user_id: Mapped[int] = mapped_column(ForeignKey("users.id"), index=True)
    product_id: Mapped[int] = mapped_column(ForeignKey("products.id", ondelete="CASCADE"), index=True)
    supermarket: Mapped[str] = mapped_column(String(32), index=True)
    override_date: Mapped[date] = mapped_column(Date, index=True)
    sale_price: Mapped[Decimal] = mapped_column(Money)

    user: Mapped["User"] = relationship()
    product: Mapped["Product"] = relationship()


class Order(TimestampMixin, Base):
    __tablename__ = "orders"
    __table_args__ = (UniqueConstraint("user_id", "order_date", "supermarket", name="uq_order_user_date_market"),)

    id: Mapped[int] = mapped_column(primary_key=True)
    user_id: Mapped[int] = mapped_column(ForeignKey("users.id"), index=True)
    order_date: Mapped[date] = mapped_column(Date, index=True)
    supermarket: Mapped[str] = mapped_column(String(32), index=True)
    total_amount: Mapped[Decimal] = mapped_column(Money, default=Decimal("0.00"))
    total_profit: Mapped[Decimal] = mapped_column(Money, default=Decimal("0.00"))
    status: Mapped[str] = mapped_column(String(16), default="saved")

    user: Mapped["User"] = relationship(back_populates="orders")
    vehicles: Mapped[list["OrderVehicle"]] = relationship(back_populates="order", cascade="all, delete-orphan")
    adjustments: Mapped[list["OrderAdjustment"]] = relationship(back_populates="order", cascade="all, delete-orphan")

    @property
    def total_commission(self) -> Decimal:
        total = sum(
            (item.commission_price * item.quantity for vehicle in self.vehicles for item in vehicle.items),
            Decimal("0.00"),
        )
        return Decimal(total).quantize(Decimal("0.01"), rounding=ROUND_HALF_UP)


class OrderVehicle(TimestampMixin, Base):
    __tablename__ = "order_vehicles"

    id: Mapped[int] = mapped_column(primary_key=True)
    order_id: Mapped[int] = mapped_column(ForeignKey("orders.id", ondelete="CASCADE"), index=True)
    vehicle_no: Mapped[str] = mapped_column(String(32))
    period: Mapped[str] = mapped_column(String(16), index=True)

    order: Mapped["Order"] = relationship(back_populates="vehicles")
    items: Mapped[list["OrderItem"]] = relationship(back_populates="vehicle", cascade="all, delete-orphan")


class OrderItem(TimestampMixin, Base):
    __tablename__ = "order_items"

    id: Mapped[int] = mapped_column(primary_key=True)
    vehicle_id: Mapped[int] = mapped_column(ForeignKey("order_vehicles.id", ondelete="CASCADE"), index=True)
    product_id: Mapped[int | None] = mapped_column(ForeignKey("products.id"), nullable=True)
    product_name_snapshot: Mapped[str] = mapped_column(String(80))
    quantity: Mapped[Decimal] = mapped_column(Quantity)
    unit_price: Mapped[Decimal] = mapped_column(Money)
    commission_price: Mapped[Decimal] = mapped_column(Money)
    cost_snapshot: Mapped[Decimal] = mapped_column(Money, default=Decimal("0.00"))
    unit_profit: Mapped[Decimal] = mapped_column(Money)
    total_amount: Mapped[Decimal] = mapped_column(Money)
    total_profit: Mapped[Decimal] = mapped_column(Money)

    vehicle: Mapped["OrderVehicle"] = relationship(back_populates="items")
    product: Mapped["Product"] = relationship()


class OrderAdjustment(TimestampMixin, Base):
    __tablename__ = "order_adjustments"

    id: Mapped[int] = mapped_column(primary_key=True)
    order_id: Mapped[int] = mapped_column(ForeignKey("orders.id", ondelete="CASCADE"), index=True)
    name: Mapped[str] = mapped_column(String(80))
    type: Mapped[str] = mapped_column(String(16))
    amount: Mapped[Decimal] = mapped_column(Money)

    order: Mapped["Order"] = relationship(back_populates="adjustments")


class Withdrawal(TimestampMixin, Base):
    __tablename__ = "withdrawals"

    id: Mapped[int] = mapped_column(primary_key=True)
    user_id: Mapped[int] = mapped_column(ForeignKey("users.id"), index=True)
    amount: Mapped[Decimal] = mapped_column(Money)
    status: Mapped[str] = mapped_column(String(16), default="success")
    account_type: Mapped[str] = mapped_column(String(32), default="微信")
    account_mask: Mapped[str] = mapped_column(String(64), default="")

    user: Mapped["User"] = relationship(back_populates="withdrawals")
