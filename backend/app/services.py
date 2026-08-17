from collections import defaultdict
from datetime import date
from decimal import Decimal, ROUND_HALF_UP

from fastapi import HTTPException
from sqlalchemy import and_, delete, func, select
from sqlalchemy.orm import Session, joinedload

from app.models import (
    Order,
    OrderAdjustment,
    OrderItem,
    OrderVehicle,
    Product,
    ProductSupermarket,
    User,
    Withdrawal,
)
from app.schemas import AdjustmentIn, OrderSaveIn, ProductIn


CENT = Decimal("0.01")


def money(value: Decimal) -> Decimal:
    return Decimal(value).quantize(CENT, rounding=ROUND_HALF_UP)


def calculate_unit_profit(sale_price: Decimal, cost: Decimal, commission_price: Decimal) -> Decimal:
    return money(sale_price - cost - commission_price)


def apply_adjustments(product_amount: Decimal, adjustments: list[OrderAdjustment]) -> Decimal:
    total = money(product_amount)
    for adjustment in adjustments:
        if adjustment.type == "plus":
            total += adjustment.amount
        else:
            total -= adjustment.amount
    return money(total)


def recalculate_order_totals(order: Order) -> None:
    product_amount = sum((item.total_amount for vehicle in order.vehicles for item in vehicle.items), Decimal("0.00"))
    product_profit = sum((item.total_profit for vehicle in order.vehicles for item in vehicle.items), Decimal("0.00"))
    order.total_amount = apply_adjustments(product_amount, order.adjustments)
    order.total_profit = apply_adjustments(product_profit, order.adjustments)


def calculate_order_commission(order: Order) -> Decimal:
    total = sum(
        (item.commission_price * item.quantity for vehicle in order.vehicles for item in vehicle.items),
        Decimal("0.00"),
    )
    return money(total)


def order_out(order: Order) -> dict:
    return {
        "id": order.id,
        "order_date": order.order_date,
        "supermarket": order.supermarket,
        "total_amount": money(order.total_amount),
        "total_profit": money(order.total_profit),
        "total_commission": calculate_order_commission(order),
        "status": order.status,
    }


def order_detail_out(order: Order) -> dict:
    return {**order_out(order), "vehicles": order.vehicles, "adjustments": order.adjustments}


def upsert_product(db: Session, user: User, payload: ProductIn, product: Product | None = None) -> Product:
    if product is None:
        existing = db.scalar(
            select(Product).where(Product.user_id == user.id, Product.name == payload.name, Product.status != "deleted")
        )
        if existing:
            raise HTTPException(status_code=409, detail="商品名称已存在")
        product = Product(user_id=user.id)
        db.add(product)
    else:
        existing = db.scalar(
            select(Product).where(
                Product.user_id == user.id,
                Product.name == payload.name,
                Product.status != "deleted",
                Product.id != product.id,
            )
        )
        if existing:
            raise HTTPException(status_code=409, detail="商品名称已存在")
    product.name = payload.name
    product.net_weight = money(payload.net_weight)
    product.gross_weight = money(payload.gross_weight)
    product.cost = money(payload.cost)
    product.status = "active"
    incoming = {item.supermarket: item for item in payload.supermarkets}
    product.supermarkets = [item for item in product.supermarkets if item.supermarket in incoming]
    current = {item.supermarket: item for item in product.supermarkets}
    for item in payload.supermarkets:
        market = current.get(item.supermarket)
        if market is None:
            market = ProductSupermarket(supermarket=item.supermarket)
            product.supermarkets.append(market)
        market.sale_price = money(item.sale_price)
        market.commission_price = money(item.commission_price)
        market.enabled = item.enabled
    return product


def save_order(db: Session, user: User, payload: OrderSaveIn) -> Order:
    order = db.execute(
        select(Order)
        .options(joinedload(Order.adjustments), joinedload(Order.vehicles).joinedload(OrderVehicle.items))
        .where(
            Order.user_id == user.id,
            Order.order_date == payload.order_date,
            Order.supermarket == payload.supermarket,
        )
    ).unique().scalar_one_or_none()
    if order is None:
        order = Order(user_id=user.id, order_date=payload.order_date, supermarket=payload.supermarket)
        db.add(order)
        db.flush()
    else:
        db.execute(delete(OrderVehicle).where(OrderVehicle.order_id == order.id))
        db.flush()
        order.vehicles = []

    for vehicle_payload in payload.vehicles:
        vehicle = OrderVehicle(order_id=order.id, vehicle_no=vehicle_payload.vehicle_no, period=vehicle_payload.period)
        db.add(vehicle)
        db.flush()
        for item_payload in vehicle_payload.items:
            product, market = get_orderable_product(db, user, item_payload.product_id, payload.supermarket)
            quantity = money(item_payload.quantity)
            unit_profit = calculate_unit_profit(market.sale_price, product.cost, market.commission_price)
            total_amount = money(quantity * (market.sale_price - market.commission_price))
            total_profit = money(quantity * unit_profit)
            db.add(
                OrderItem(
                    vehicle_id=vehicle.id,
                    product_id=product.id,
                    product_name_snapshot=product.name,
                    quantity=quantity,
                    unit_price=market.sale_price,
                    commission_price=market.commission_price,
                    cost_snapshot=product.cost,
                    unit_profit=unit_profit,
                    total_amount=total_amount,
                    total_profit=total_profit,
                )
            )

    db.flush()
    db.refresh(order)
    recalculate_order_totals(order)
    db.flush()
    db.refresh(order)
    return order


def get_orderable_product(db: Session, user: User, product_id: int, supermarket: str) -> tuple[Product, ProductSupermarket]:
    product = db.execute(
        select(Product)
        .options(joinedload(Product.supermarkets))
        .where(Product.id == product_id, Product.user_id == user.id, Product.status == "active")
    ).unique().scalar_one_or_none()
    if product is None:
        raise HTTPException(status_code=400, detail=f"商品不存在或已删除：{product_id}")
    market = next((item for item in product.supermarkets if item.supermarket == supermarket and item.enabled), None)
    if market is None:
        raise HTTPException(status_code=400, detail=f"商品未上架当前超市：{product.name}")
    return product, market


def update_adjustments(db: Session, user: User, order_id: int, adjustments: list[AdjustmentIn]) -> Order:
    order = db.execute(
        select(Order)
        .options(joinedload(Order.vehicles).joinedload(OrderVehicle.items), joinedload(Order.adjustments))
        .where(Order.id == order_id, Order.user_id == user.id)
    ).unique().scalar_one_or_none()
    if order is None:
        raise HTTPException(status_code=404, detail="订单不存在")
    db.execute(delete(OrderAdjustment).where(OrderAdjustment.order_id == order.id))
    db.flush()
    order.adjustments = []
    for item in adjustments:
        order.adjustments.append(OrderAdjustment(name=item.name, type=item.type, amount=money(item.amount)))
    db.flush()
    recalculate_order_totals(order)
    db.flush()
    db.refresh(order)
    return order


def summarize_days(orders: list[Order]) -> list[dict]:
    grouped: dict[date, list[Order]] = defaultdict(list)
    for order in orders:
        grouped[order.order_date].append(order)
    result = []
    for day in sorted(grouped.keys(), reverse=True):
        day_orders = grouped[day]
        order_summaries = [order_out(order) for order in day_orders]
        result.append(
            {
                "date": day,
                "orders": order_summaries,
                "total_amount": money(sum((item.total_amount for item in day_orders), Decimal("0.00"))),
                "total_profit": money(sum((item.total_profit for item in day_orders), Decimal("0.00"))),
                "total_commission": money(sum((item["total_commission"] for item in order_summaries), Decimal("0.00"))),
            }
        )
    return result


def statistics_query(
    db: Session, user: User, start_date: date | None = None, end_date: date | None = None
) -> tuple[Decimal, Decimal, Decimal, Decimal, Decimal]:
    conditions = [Order.user_id == user.id]
    if start_date:
        conditions.append(Order.order_date >= start_date)
    if end_date:
        conditions.append(Order.order_date <= end_date)
    row = db.execute(
        select(func.coalesce(func.sum(Order.total_amount), 0), func.coalesce(func.sum(Order.total_profit), 0)).where(
            and_(*conditions)
        )
    ).one()
    total_amount = money(Decimal(row[0]))
    total_profit = money(Decimal(row[1]))
    commission_row = db.execute(
        select(func.coalesce(func.sum(OrderItem.commission_price * OrderItem.quantity), 0))
        .join(OrderVehicle, OrderItem.vehicle_id == OrderVehicle.id)
        .join(Order, OrderVehicle.order_id == Order.id)
        .where(and_(*conditions))
    ).one()
    total_commission = money(Decimal(commission_row[0]))
    withdrawn = db.scalar(
        select(func.coalesce(func.sum(Withdrawal.amount), 0)).where(
            Withdrawal.user_id == user.id,
            Withdrawal.status == "success",
        )
    )
    withdrawn_amount = money(Decimal(withdrawn or 0))
    available_amount = money(total_amount - withdrawn_amount)
    if available_amount < Decimal("0.00"):
        available_amount = Decimal("0.00")
    return total_amount, total_profit, total_commission, withdrawn_amount, available_amount
