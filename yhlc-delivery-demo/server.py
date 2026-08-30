from __future__ import annotations

import argparse
import json
from datetime import date
from http.server import BaseHTTPRequestHandler, ThreadingHTTPServer
from pathlib import Path
from typing import Any
from urllib.error import HTTPError, URLError
from urllib.parse import urlencode
from urllib.request import Request, urlopen


BASE_URL = "https://admin.dgyhlc.com/prod-api"
ROOT = Path(__file__).resolve().parent


def pick(row: dict[str, Any], keys: list[str]) -> Any:
    for key in keys:
        value = row.get(key)
        if value is not None and str(value).strip() != "":
            return value
    return ""


def to_int(value: Any) -> int | None:
    try:
        return int(value)
    except (TypeError, ValueError):
        return None


def to_float(value: Any) -> float:
    try:
        return float(value)
    except (TypeError, ValueError):
        return 0.0


def date_part(value: Any) -> str:
    if value is None:
        return ""
    text = str(value).strip().replace("/", "-")
    if not text:
        return ""
    return text.split("T", 1)[0].split(" ", 1)[0]


def rows(payload: dict[str, Any]) -> list[dict[str, Any]]:
    raw_rows = payload.get("rows")
    if isinstance(raw_rows, list):
        return [row for row in raw_rows if isinstance(row, dict)]
    data = payload.get("data")
    if isinstance(data, list):
        return [row for row in data if isinstance(row, dict)]
    if isinstance(data, dict) and isinstance(data.get("rows"), list):
        return [row for row in data["rows"] if isinstance(row, dict)]
    return []


def request_yhlc(method: str, endpoint: str, token: str | None = None, params: dict[str, Any] | None = None) -> dict[str, Any]:
    method = method.upper()
    params = params or {}
    query = f"?{urlencode(params)}" if method == "GET" and params else ""
    body = json.dumps(params, ensure_ascii=False).encode("utf-8") if method != "GET" else None
    url = f"{BASE_URL.rstrip('/')}/{endpoint.lstrip('/')}{query}"
    headers = {
        "Accept": "application/json",
        "User-Agent": "Mozilla/5.0 yhlc-delivery-demo",
    }
    if method != "GET":
        headers["Content-Type"] = "application/json"
    if token:
        headers["Authorization"] = f"Bearer {token}"
    request = Request(
        url,
        data=body,
        headers=headers,
        method=method,
    )
    try:
        with urlopen(request, timeout=20) as response:
            payload = json.loads(response.read().decode("utf-8"))
    except HTTPError as error:
        if error.code in {401, 403}:
            raise RuntimeError("昱禾联仓 token 已失效或无权限") from error
        raise RuntimeError(f"昱禾联仓接口请求失败：HTTP {error.code}") from error
    except URLError as error:
        raise RuntimeError(f"无法连接昱禾联仓接口：{error.reason}") from error
    except json.JSONDecodeError as error:
        raise RuntimeError("昱禾联仓接口返回的不是 JSON") from error

    if not isinstance(payload, dict):
        raise RuntimeError("昱禾联仓接口返回格式异常")
    code = to_int(payload.get("code"))
    if code is not None and code != 200:
        raise RuntimeError(str(payload.get("msg") or "昱禾联仓接口返回失败"))
    return payload


def get_captcha() -> dict[str, Any]:
    payload = request_yhlc("GET", "captchaImage")
    data = payload.get("data")
    if not isinstance(data, dict):
        raise RuntimeError("验证码接口返回格式异常")
    return {
        "img": data.get("img") or "",
        "uuid": data.get("uuid") or "",
    }


def login_account(payload: dict[str, Any]) -> dict[str, Any]:
    username = str(payload.get("username") or "").strip()
    password = str(payload.get("password") or "").strip()
    code = str(payload.get("code") or "").strip()
    uuid = str(payload.get("uuid") or "").strip()
    if not username:
        raise RuntimeError("请填写账号")
    if not password:
        raise RuntimeError("请填写密码")
    if not code or not uuid:
        raise RuntimeError("请先填写验证码")

    login_payload = request_yhlc(
        "POST",
        "login",
        params={"username": username, "password": password, "ip": "", "code": code, "uuid": uuid},
    )
    data = login_payload.get("data")
    token = ""
    if isinstance(data, dict):
        token = str(data.get("token") or data.get("accessToken") or "")
    token = token or str(login_payload.get("token") or "")
    if not token:
        raise RuntimeError(str(login_payload.get("msg") or "登录成功但未返回 token"))
    return {
        "token": token,
        "user": data if isinstance(data, dict) else {},
    }


def normalize_item(order: dict[str, Any], row: dict[str, Any]) -> dict[str, Any]:
    brand = str(pick(row, ["productBrand", "brand"])).strip()
    name = str(pick(row, ["productName", "goodsName", "name", "title"])).strip()
    product_name = " ".join(part for part in [brand, name] if part).strip() or "-"
    return {
        "order_id": str(pick(order, ["id", "supplierOrderId"])).strip(),
        "order_no": str(pick(order, ["supplierOrderNo", "orderNo", "batchNo"])).strip(),
        "supplier_name": str(pick(row, ["supplierName"]) or pick(order, ["supplierName"])).strip(),
        "product_name": product_name,
        "quantity": to_float(pick(row, ["deliverNum", "quantity", "actualQuantity", "checkQuantity", "lineQuantity", "num"])),
        "car_no": str(pick(row, ["carNo", "lineNo"])).strip() or "-",
        "pz_no": str(pick(row, ["pzNo", "pzNO", "pz_no", "pzno"])).strip() or "-",
        "delivery_status": to_int(row.get("deliveryStatus")),
        "check_status": to_int(row.get("checkStatus")),
    }


def get_today_delivery(payload: dict[str, Any]) -> dict[str, Any]:
    token = str(payload.get("token") or "").strip()
    if not token:
        raise RuntimeError("请先填写昱禾联仓小程序 token")

    target_date = str(payload.get("delivery_date") or date.today().isoformat()).strip()
    supplier_name = str(payload.get("supplier_name") or "").strip()
    product_name = str(payload.get("product_name") or "").strip()
    only_pending = bool(payload.get("only_pending", True))

    matched_orders: list[dict[str, Any]] = []
    for page_num in range(1, 11):
        params: dict[str, Any] = {"pageNum": page_num, "pageSize": 100, "bizType": "SHIP"}
        if supplier_name:
            params["supplierName"] = supplier_name
        if product_name:
            params["productName"] = product_name

        batch_payload = request_yhlc("GET", "order/batch/list", token, params)
        batch_rows = rows(batch_payload)
        for row in batch_rows:
            row_date = date_part(row.get("updateTime") or row.get("createTime"))
            if row_date == target_date:
                matched_orders.append(row)

        total = to_int(batch_payload.get("total")) or 0
        if page_num * 100 >= total or len(batch_rows) < 100:
            break

    result_orders: list[dict[str, Any]] = []
    flat_items: list[dict[str, Any]] = []
    for order in matched_orders:
        order_id = str(pick(order, ["id", "supplierOrderId"])).strip()
        if not order_id:
            continue
        detail_payload = request_yhlc("GET", "order/batchRef/list", token, {"pageNum": 1, "pageSize": 999, "batchId": order_id})
        items = [normalize_item(order, row) for row in rows(detail_payload)]
        if only_pending:
            items = [item for item in items if item["delivery_status"] not in {1, 2}]
        if not items:
            continue
        flat_items.extend(items)
        result_orders.append(
            {
                "order_id": order_id,
                "order_no": str(pick(order, ["supplierOrderNo", "orderNo", "batchNo"])).strip(),
                "supplier_name": str(pick(order, ["supplierName"])).strip(),
                "create_time": str(order.get("createTime") or ""),
                "update_time": str(order.get("updateTime") or ""),
                "items": items,
            }
        )

    return {"delivery_date": target_date, "orders": result_orders, "items": flat_items}


class DemoHandler(BaseHTTPRequestHandler):
    server_version = "YhlcDeliveryDemo/1.0"

    def do_GET(self) -> None:
        if self.path == "/api/captcha":
            try:
                self.send_json(200, get_captcha())
            except Exception as error:
                self.send_json(400, {"detail": str(error)})
            return
        if self.path not in {"/", "/index.html"}:
            self.send_error(404)
            return
        html = (ROOT / "index.html").read_bytes()
        self.send_response(200)
        self.send_header("Content-Type", "text/html; charset=utf-8")
        self.send_header("Content-Length", str(len(html)))
        self.end_headers()
        self.wfile.write(html)

    def do_POST(self) -> None:
        if self.path not in {"/api/today", "/api/login"}:
            self.send_error(404)
            return
        try:
            length = int(self.headers.get("Content-Length") or "0")
            body = self.rfile.read(length).decode("utf-8")
            payload = json.loads(body or "{}")
            if not isinstance(payload, dict):
                raise RuntimeError("请求参数格式错误")
            if self.path == "/api/login":
                self.send_json(200, login_account(payload))
            else:
                self.send_json(200, get_today_delivery(payload))
        except Exception as error:
            self.send_json(400, {"detail": str(error)})

    def log_message(self, fmt: str, *args: Any) -> None:
        print(f"[DEMO] {self.address_string()} {fmt % args}")

    def send_json(self, status: int, payload: dict[str, Any]) -> None:
        data = json.dumps(payload, ensure_ascii=False).encode("utf-8")
        self.send_response(status)
        self.send_header("Content-Type", "application/json; charset=utf-8")
        self.send_header("Content-Length", str(len(data)))
        self.end_headers()
        self.wfile.write(data)


def main() -> None:
    parser = argparse.ArgumentParser(description="昱禾联仓当日送货单本地 DEMO")
    parser.add_argument("--host", default="127.0.0.1")
    parser.add_argument("--port", type=int, default=8765)
    args = parser.parse_args()

    server = ThreadingHTTPServer((args.host, args.port), DemoHandler)
    print(f"本地 DEMO 已启动：http://{args.host}:{args.port}")
    server.serve_forever()


if __name__ == "__main__":
    main()
