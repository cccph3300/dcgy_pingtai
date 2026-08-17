from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy import select
from sqlalchemy.orm import Session

from app.database import get_db
from app.deps import get_current_user
from app.models import User, Withdrawal
from app.schemas import WithdrawalIn, WithdrawalOut
from app.services import money, statistics_query


router = APIRouter(prefix="/withdrawals", tags=["提现"])


@router.get("", response_model=list[WithdrawalOut])
def list_withdrawals(db: Session = Depends(get_db), user: User = Depends(get_current_user)) -> list[Withdrawal]:
    return list(
        db.scalars(select(Withdrawal).where(Withdrawal.user_id == user.id).order_by(Withdrawal.created_at.desc())).all()
    )


@router.post("", response_model=WithdrawalOut)
def create_withdrawal(
    payload: WithdrawalIn, db: Session = Depends(get_db), user: User = Depends(get_current_user)
) -> Withdrawal:
    _, _, _, _, available_amount = statistics_query(db, user)
    amount = money(payload.amount)
    if amount <= 0:
        raise HTTPException(status_code=400, detail="提现金额必须大于 0")
    if available_amount <= 0:
        raise HTTPException(status_code=400, detail="当前没有可提现金额")
    if amount > available_amount:
        raise HTTPException(status_code=400, detail="提现金额不能超过未提现金额")
    withdrawal = Withdrawal(
        user_id=user.id,
        amount=amount,
        status=payload.status,
        account_type=payload.account_type,
        account_mask=payload.account_mask,
    )
    db.add(withdrawal)
    db.commit()
    db.refresh(withdrawal)
    return withdrawal


@router.delete("/{withdrawal_id}")
def delete_withdrawal(
    withdrawal_id: int, db: Session = Depends(get_db), user: User = Depends(get_current_user)
) -> dict[str, str]:
    withdrawal = db.scalar(select(Withdrawal).where(Withdrawal.id == withdrawal_id, Withdrawal.user_id == user.id))
    if withdrawal is None:
        raise HTTPException(status_code=404, detail="提现记录不存在")
    db.delete(withdrawal)
    db.commit()
    return {"message": "删除成功"}
