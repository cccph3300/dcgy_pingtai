from datetime import date, datetime
from decimal import Decimal

from pydantic import BaseModel, ConfigDict, Field, field_validator


class ApiModel(BaseModel):
    model_config = ConfigDict(from_attributes=True)


class TokenOut(ApiModel):
    access_token: str
    token_type: str = "bearer"


class LoginIn(ApiModel):
    username: str
    password: str


class UserOut(ApiModel):
    id: int
    username: str
    nickname: str
    phone: str
    avatar: str | None = None


class ProductSupermarketIn(ApiModel):
    supermarket: str
    sale_price: Decimal = Field(ge=0)
    commission_price: Decimal = Field(ge=0)
    enabled: bool = True

    @field_validator("supermarket")
    @classmethod
    def validate_supermarket(cls, value: str) -> str:
        if value not in {"supermarket_1", "supermarket_2"}:
            raise ValueError("超市参数无效")
        return value


class ProductSupermarketOut(ProductSupermarketIn):
    id: int


class ProductIn(ApiModel):
    name: str = Field(min_length=1, max_length=80)
    net_weight: Decimal = Field(default=Decimal("0.00"), ge=0)
    gross_weight: Decimal = Field(default=Decimal("0.00"), ge=0)
    cost: Decimal = Field(ge=0)
    supermarkets: list[ProductSupermarketIn] = Field(default_factory=list)


class ProductOut(ApiModel):
    id: int
    name: str
    net_weight: Decimal
    gross_weight: Decimal
    cost: Decimal
    status: str
    supermarkets: list[ProductSupermarketOut] = Field(default_factory=list)


class OrderItemIn(ApiModel):
    product_id: int
    quantity: Decimal = Field(gt=0)


class OrderVehicleIn(ApiModel):
    vehicle_no: str = Field(min_length=1, max_length=32)
    period: str
    items: list[OrderItemIn] = Field(default_factory=list)

    @field_validator("period")
    @classmethod
    def validate_period(cls, value: str) -> str:
        if value not in {"morning", "noon", "evening"}:
            raise ValueError("时段参数无效")
        return value


class OrderSaveIn(ApiModel):
    order_date: date
    supermarket: str
    vehicles: list[OrderVehicleIn] = Field(default_factory=list)

    @field_validator("supermarket")
    @classmethod
    def validate_supermarket(cls, value: str) -> str:
        if value not in {"supermarket_1", "supermarket_2"}:
            raise ValueError("超市参数无效")
        return value


class AdjustmentIn(ApiModel):
    name: str = Field(min_length=1, max_length=80)
    type: str
    amount: Decimal = Field(ge=0)

    @field_validator("type")
    @classmethod
    def validate_type(cls, value: str) -> str:
        if value not in {"plus", "minus"}:
            raise ValueError("调整类型无效")
        return value


class OrderAdjustmentsUpdateIn(ApiModel):
    adjustments: list[AdjustmentIn] = Field(default_factory=list)


class OrderItemOut(ApiModel):
    id: int
    product_id: int | None
    product_name_snapshot: str
    quantity: Decimal
    unit_price: Decimal
    commission_price: Decimal
    cost_snapshot: Decimal
    unit_profit: Decimal
    total_amount: Decimal
    total_profit: Decimal


class OrderVehicleOut(ApiModel):
    id: int
    vehicle_no: str
    period: str
    items: list[OrderItemOut] = Field(default_factory=list)


class AdjustmentOut(ApiModel):
    id: int
    name: str
    type: str
    amount: Decimal


class OrderOut(ApiModel):
    id: int
    order_date: date
    supermarket: str
    total_amount: Decimal
    total_profit: Decimal
    total_commission: Decimal
    status: str


class OrderDetailOut(OrderOut):
    vehicles: list[OrderVehicleOut] = Field(default_factory=list)
    adjustments: list[AdjustmentOut] = Field(default_factory=list)


class DayOrderSummary(ApiModel):
    date: date
    orders: list[OrderOut]
    total_amount: Decimal
    total_profit: Decimal
    total_commission: Decimal


class StatisticsOut(ApiModel):
    total_amount: Decimal
    total_profit: Decimal
    total_commission: Decimal = Decimal("0.00")
    withdrawn_amount: Decimal = Decimal("0.00")
    available_withdrawal_amount: Decimal = Decimal("0.00")


class WithdrawalIn(ApiModel):
    amount: Decimal = Field(gt=0)
    status: str = "success"
    account_type: str = "微信"
    account_mask: str

    @field_validator("status")
    @classmethod
    def validate_status(cls, value: str) -> str:
        if value not in {"success", "failed"}:
            raise ValueError("提现状态无效")
        return value


class WithdrawalOut(ApiModel):
    id: int
    amount: Decimal
    status: str
    account_type: str
    account_mask: str
    created_at: datetime
