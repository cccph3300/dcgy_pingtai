from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy import select
from sqlalchemy.orm import Session, joinedload

from app.database import get_db
from app.deps import get_current_user
from app.models import Product, User
from app.schemas import ProductIn, ProductOut
from app.services import upsert_product


router = APIRouter(prefix="/products", tags=["库存"])


@router.get("", response_model=list[ProductOut])
def list_products(db: Session = Depends(get_db), user: User = Depends(get_current_user)) -> list[Product]:
    return list(
        db.scalars(
            select(Product)
            .options(joinedload(Product.supermarkets))
            .where(Product.user_id == user.id, Product.status == "active")
            .order_by(Product.created_at.desc())
        )
        .unique()
        .all()
    )


@router.post("", response_model=ProductOut)
def create_product(payload: ProductIn, db: Session = Depends(get_db), user: User = Depends(get_current_user)) -> Product:
    product = upsert_product(db, user, payload)
    db.commit()
    db.refresh(product)
    return product


@router.put("/{product_id}", response_model=ProductOut)
def update_product(
    product_id: int, payload: ProductIn, db: Session = Depends(get_db), user: User = Depends(get_current_user)
) -> Product:
    product = db.execute(
        select(Product).options(joinedload(Product.supermarkets)).where(Product.id == product_id, Product.user_id == user.id)
    ).unique().scalar_one_or_none()
    if product is None or product.status == "deleted":
        raise HTTPException(status_code=404, detail="商品不存在")
    upsert_product(db, user, payload, product)
    db.commit()
    db.refresh(product)
    return product


@router.delete("/{product_id}")
def delete_product(product_id: int, db: Session = Depends(get_db), user: User = Depends(get_current_user)) -> dict[str, str]:
    product = db.scalar(select(Product).where(Product.id == product_id, Product.user_id == user.id))
    if product is None or product.status == "deleted":
        raise HTTPException(status_code=404, detail="商品不存在")
    product.status = "deleted"
    db.commit()
    return {"message": "删除成功"}
