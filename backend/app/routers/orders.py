from datetime import date

from fastapi import APIRouter, Depends, HTTPException, Query
from sqlalchemy import and_, select
from sqlalchemy.orm import Session, joinedload

from app.database import get_db
from app.deps import get_current_user
from app.models import Order, OrderVehicle, User
from app.schemas import DayOrderSummary, OrderAdjustmentsUpdateIn, OrderDetailOut, OrderOut, OrderSaveIn
from app.services import save_order, summarize_days, update_adjustments


router = APIRouter(prefix="/orders", tags=["订单"])


@router.get("", response_model=list[DayOrderSummary])
def list_orders(
    start_date: date | None = Query(default=None),
    end_date: date | None = Query(default=None),
    db: Session = Depends(get_db),
    user: User = Depends(get_current_user),
) -> list[dict]:
    conditions = [Order.user_id == user.id]
    if start_date:
        conditions.append(Order.order_date >= start_date)
    if end_date:
        conditions.append(Order.order_date <= end_date)
    orders = list(
        db.scalars(
            select(Order)
            .options(joinedload(Order.vehicles).joinedload(OrderVehicle.items))
            .where(and_(*conditions))
            .order_by(Order.order_date.desc())
        )
        .unique()
        .all()
    )
    return summarize_days(orders)


@router.get("/{order_date}", response_model=list[OrderDetailOut])
def get_orders_by_date(order_date: date, db: Session = Depends(get_db), user: User = Depends(get_current_user)) -> list[Order]:
    return list(
        db.scalars(
            select(Order)
            .options(joinedload(Order.vehicles).joinedload(OrderVehicle.items), joinedload(Order.adjustments))
            .where(Order.user_id == user.id, Order.order_date == order_date)
            .order_by(Order.supermarket)
        )
        .unique()
        .all()
    )


@router.post("", response_model=OrderDetailOut)
def create_or_replace_order(
    payload: OrderSaveIn, db: Session = Depends(get_db), user: User = Depends(get_current_user)
) -> Order:
    order = save_order(db, user, payload)
    db.commit()
    db.refresh(order)
    return order


@router.put("/{order_id}", response_model=OrderDetailOut)
def replace_order(
    order_id: int, payload: OrderSaveIn, db: Session = Depends(get_db), user: User = Depends(get_current_user)
) -> Order:
    existing = db.scalar(select(Order).where(Order.id == order_id, Order.user_id == user.id))
    if existing is None:
        raise HTTPException(status_code=404, detail="订单不存在")
    payload.order_date = existing.order_date
    payload.supermarket = existing.supermarket
    order = save_order(db, user, payload)
    db.commit()
    db.refresh(order)
    return order


@router.get("/{order_id}/detail", response_model=OrderDetailOut)
def get_order_detail(order_id: int, db: Session = Depends(get_db), user: User = Depends(get_current_user)) -> Order:
    order = db.execute(
        select(Order)
        .options(joinedload(Order.vehicles).joinedload(OrderVehicle.items), joinedload(Order.adjustments))
        .where(Order.id == order_id, Order.user_id == user.id)
    ).unique().scalar_one_or_none()
    if order is None:
        raise HTTPException(status_code=404, detail="订单不存在")
    return order


@router.put("/{order_id}/adjustments", response_model=OrderDetailOut)
def update_order_adjustments(
    order_id: int,
    payload: OrderAdjustmentsUpdateIn,
    db: Session = Depends(get_db),
    user: User = Depends(get_current_user),
) -> Order:
    order = update_adjustments(db, user, order_id, payload.adjustments)
    db.commit()
    db.refresh(order)
    return order
