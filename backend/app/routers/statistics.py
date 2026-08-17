from datetime import date

from fastapi import APIRouter, Depends, Query
from sqlalchemy.orm import Session

from app.database import get_db
from app.deps import get_current_user
from app.models import User
from app.schemas import StatisticsOut
from app.services import statistics_query


router = APIRouter(prefix="/statistics", tags=["统计"])


@router.get("", response_model=StatisticsOut)
def get_statistics(
    start_date: date | None = Query(default=None),
    end_date: date | None = Query(default=None),
    db: Session = Depends(get_db),
    user: User = Depends(get_current_user),
) -> StatisticsOut:
    total_amount, total_profit, total_commission, withdrawn_amount, available_amount = statistics_query(db, user, start_date, end_date)
    return StatisticsOut(
        total_amount=total_amount,
        total_profit=total_profit,
        total_commission=total_commission,
        withdrawn_amount=withdrawn_amount,
        available_withdrawal_amount=available_amount,
    )
