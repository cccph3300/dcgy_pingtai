from datetime import date

from fastapi import APIRouter, Depends, Query
from sqlalchemy import select
from sqlalchemy.orm import Session, joinedload

from app.database import get_db
from app.deps import get_current_user
from app.models import DailyPriceOverride, Product, User
from app.schemas import DailyPriceOverrideIn, DailyPriceOverrideOut
from app.services import delete_daily_price_override, list_daily_price_overrides, upsert_daily_price_override


router = APIRouter(prefix="/daily-price-overrides", tags=["今日降价"])


@router.get("", response_model=list[DailyPriceOverrideOut])
def get_daily_price_overrides(
    target_date: date = Query(..., alias="date"),
    db: Session = Depends(get_db),
    user: User = Depends(get_current_user),
) -> list[DailyPriceOverride]:
    return list_daily_price_overrides(db, user, target_date)


@router.post("", response_model=DailyPriceOverrideOut)
def create_or_update_daily_price_override(
    payload: DailyPriceOverrideIn, db: Session = Depends(get_db), user: User = Depends(get_current_user)
) -> DailyPriceOverride:
    override = upsert_daily_price_override(db, user, payload)
    db.commit()
    db.refresh(override)
    return override


@router.delete("/{override_id}")
def remove_daily_price_override(
    override_id: int, db: Session = Depends(get_db), user: User = Depends(get_current_user)
) -> dict[str, str]:
    delete_daily_price_override(db, user, override_id)
    db.commit()
    return {"message": "删除成功"}
