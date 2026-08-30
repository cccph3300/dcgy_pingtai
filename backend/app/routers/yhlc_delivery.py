from datetime import date
from typing import Any

import httpx
from fastapi import APIRouter, Depends, HTTPException
from pydantic import BaseModel, Field

from app.config import get_settings
from app.deps import get_current_user
from app.models import User


router = APIRouter(prefix="/yhlc-delivery", tags=["昱禾联仓送货单"])


class YhlcLoginPayload(BaseModel):
    username: str = Field(min_length=1)
    password: str = Field(min_length=1)
    code: str = Field(min_length=1)
    uuid: str = Field(min_length=1)


class YhlcDeliveryQuery(BaseModel):
    token: str = Field(min_length=1)
    delivery_date: date | None = None
    supplier_name: str | None = None
    product_name: str | None = None
    only_pending: bool = True


class YhlcCaptchaOut(BaseModel):
    img: str
    uuid: str


class YhlcLoginOut(BaseModel):
    token: str
    user: dict[str, Any] = Field(default_factory=dict)


class DeliveryItemOut(BaseModel):
    order_id: str
    order_no: str
    product_name: str
    quantity: float
    car_no: str
    pz_no: str
    supplier_name: str
    delivery_status: int | None = None
    check_status: int | None = None


class DeliveryOrderOut(BaseModel):
    order_id: str
    order_no: str
    supplier_name: str
    create_time: str
    update_time: str
    items: list[DeliveryItemOut]


class YhlcDeliveryResult(BaseModel):
    delivery_date: date
    orders: list[DeliveryOrderOut]
    items: list[DeliveryItemOut]


def _pick(row: dict[str, Any], keys: list[str]) -> Any:
    for key in keys:
        value = row.get(key)
        if value is not None and str(value).strip() != "":
            return value
    return ""


def _to_int(value: Any) -> int | None:
    try:
        return int(value)
    except (TypeError, ValueError):
        return None


def _to_float(value: Any) -> float:
    try:
        return float(value)
    except (TypeError, ValueError):
        return 0.0


def _date_part(value: Any) -> str:
    if value is None:
        return ""
    text = str(value).strip().replace("/", "-")
    if not text:
        return ""
    return text.split("T", 1)[0].split(" ", 1)[0]


def _rows(payload: dict[str, Any]) -> list[dict[str, Any]]:
    rows = payload.get("rows")
    if isinstance(rows, list):
        return [row for row in rows if isinstance(row, dict)]
    data = payload.get("data")
    if isinstance(data, list):
        return [row for row in data if isinstance(row, dict)]
    if isinstance(data, dict) and isinstance(data.get("rows"), list):
        return [row for row in data["rows"] if isinstance(row, dict)]
    return []


def _normalize_item(order: dict[str, Any], row: dict[str, Any]) -> DeliveryItemOut:
    brand = str(_pick(row, ["productBrand", "brand"])).strip()
    name = str(_pick(row, ["productName", "goodsName", "name", "title"])).strip()
    product_name = " ".join(part for part in [brand, name] if part).strip() or "-"
    order_id = str(_pick(order, ["id", "supplierOrderId"])).strip()
    order_no = str(_pick(order, ["supplierOrderNo", "orderNo", "batchNo"])).strip()
    supplier_name = str(_pick(row, ["supplierName"]) or _pick(order, ["supplierName"])).strip()
    return DeliveryItemOut(
        order_id=order_id,
        order_no=order_no,
        product_name=product_name,
        quantity=_to_float(_pick(row, ["deliverNum", "quantity", "actualQuantity", "checkQuantity", "lineQuantity", "num"])),
        car_no=str(_pick(row, ["carNo", "lineNo"])).strip() or "-",
        pz_no=str(_pick(row, ["pzNo", "pzNO", "pz_no", "pzno"])).strip() or "-",
        supplier_name=supplier_name,
        delivery_status=_to_int(row.get("deliveryStatus")),
        check_status=_to_int(row.get("checkStatus")),
    )


async def _request_yhlc(
    client: httpx.AsyncClient,
    method: str,
    endpoint: str,
    params: dict[str, Any] | None = None,
    token: str | None = None,
) -> dict[str, Any]:
    headers = {"Accept": "application/json", "User-Agent": "Mozilla/5.0 dcgy-yhlc-delivery"}
    if token:
        headers["Authorization"] = f"Bearer {token}"
    response = await client.request(method, endpoint, params=params if method == "GET" else None, json=params if method != "GET" else None, headers=headers)
    if response.status_code in {401, 403}:
        raise HTTPException(status_code=400, detail="昱禾联仓 token 已失效或无权限")
    if response.status_code >= 400:
        raise HTTPException(status_code=502, detail=f"昱禾联仓接口请求失败：HTTP {response.status_code}")
    data = response.json()
    if not isinstance(data, dict):
        raise HTTPException(status_code=502, detail="昱禾联仓接口返回格式异常")
    code = _to_int(data.get("code"))
    if code is not None and code != 200:
        raise HTTPException(status_code=502, detail=str(data.get("msg") or "昱禾联仓接口返回失败"))
    return data


def _base_url() -> str:
    return get_settings().yhlc_base_url.rstrip("/")


@router.get("/captcha", response_model=YhlcCaptchaOut)
async def get_yhlc_captcha(user: User = Depends(get_current_user)) -> YhlcCaptchaOut:
    del user
    async with httpx.AsyncClient(base_url=_base_url(), timeout=20.0) as client:
        payload = await _request_yhlc(client, "GET", "captchaImage")
    data = payload.get("data")
    if not isinstance(data, dict):
        raise HTTPException(status_code=502, detail="验证码接口返回格式异常")
    return YhlcCaptchaOut(img=str(data.get("img") or ""), uuid=str(data.get("uuid") or ""))


@router.post("/login", response_model=YhlcLoginOut)
async def login_yhlc_account(payload: YhlcLoginPayload, user: User = Depends(get_current_user)) -> YhlcLoginOut:
    del user
    async with httpx.AsyncClient(base_url=_base_url(), timeout=20.0) as client:
        result = await _request_yhlc(
            client,
            "POST",
            "login",
            {"username": payload.username, "password": payload.password, "ip": "", "code": payload.code, "uuid": payload.uuid},
        )
    data = result.get("data")
    user_data = data if isinstance(data, dict) else {}
    token = str(user_data.get("token") or user_data.get("accessToken") or result.get("token") or "")
    if not token:
        raise HTTPException(status_code=502, detail=str(result.get("msg") or "登录成功但未返回 token"))
    return YhlcLoginOut(token=token, user=user_data)


@router.post("/today", response_model=YhlcDeliveryResult)
async def get_today_delivery_items(payload: YhlcDeliveryQuery, user: User = Depends(get_current_user)) -> YhlcDeliveryResult:
    del user
    target_date = payload.delivery_date or date.today()
    target_date_text = target_date.isoformat()

    orders: list[dict[str, Any]] = []
    async with httpx.AsyncClient(base_url=_base_url(), timeout=20.0) as client:
        for page_num in range(1, 11):
            params: dict[str, Any] = {"pageNum": page_num, "pageSize": 100, "bizType": "SHIP"}
            if payload.supplier_name:
                params["supplierName"] = payload.supplier_name.strip()
            if payload.product_name:
                params["productName"] = payload.product_name.strip()
            batch_payload = await _request_yhlc(client, "GET", "order/batch/list", params, payload.token)
            batch_rows = _rows(batch_payload)
            for row in batch_rows:
                row_date = _date_part(row.get("updateTime") or row.get("createTime"))
                if row_date == target_date_text:
                    orders.append(row)
            total = _to_int(batch_payload.get("total")) or 0
            if page_num * 100 >= total or len(batch_rows) < 100:
                break

        result_orders: list[DeliveryOrderOut] = []
        flat_items: list[DeliveryItemOut] = []
        for order in orders:
            order_id = str(_pick(order, ["id", "supplierOrderId"])).strip()
            if not order_id:
                continue
            detail_payload = await _request_yhlc(
                client,
                "GET",
                "order/batchRef/list",
                {"pageNum": 1, "pageSize": 999, "batchId": order_id},
                payload.token,
            )
            normalized = [_normalize_item(order, row) for row in _rows(detail_payload)]
            if payload.only_pending:
                normalized = [item for item in normalized if item.delivery_status not in {1, 2}]
            if not normalized:
                continue
            flat_items.extend(normalized)
            result_orders.append(
                DeliveryOrderOut(
                    order_id=order_id,
                    order_no=str(_pick(order, ["supplierOrderNo", "orderNo", "batchNo"])).strip(),
                    supplier_name=str(_pick(order, ["supplierName"])).strip(),
                    create_time=str(order.get("createTime") or ""),
                    update_time=str(order.get("updateTime") or ""),
                    items=normalized,
                )
            )

    return YhlcDeliveryResult(delivery_date=target_date, orders=result_orders, items=flat_items)
