from __future__ import annotations

import argparse
import json
from http.server import BaseHTTPRequestHandler, ThreadingHTTPServer
from pathlib import Path
from typing import Any, Callable
from urllib.error import HTTPError, URLError
from urllib.parse import urlencode, urlparse
from urllib.request import Request, urlopen


BASE_URL = "https://banguo-gateway.banguo.xianlink.cn"
CLIENT_ID = "u1zazpc5jartv40ufucgteoquttqziu3"
APP_ID = "wxdfad8c82da70105d"
ROOT = Path(__file__).resolve().parent
ALLOW_MUTATIONS = False


def clean_params(params: dict[str, Any] | None) -> dict[str, Any]:
    result: dict[str, Any] = {}
    for key, value in (params or {}).items():
        if value is None:
            continue
        if isinstance(value, str) and value.strip() == "":
            continue
        result[key] = value
    return result


def remote_call(
    method: str,
    endpoint: str,
    params: dict[str, Any] | None = None,
    token: str | None = None,
) -> dict[str, Any]:
    method = method.upper()
    data = clean_params(params)
    query = f"?{urlencode(data)}" if method == "GET" and data else ""
    body = json.dumps(data, ensure_ascii=False).encode("utf-8") if method != "GET" else None
    url = f"{BASE_URL.rstrip('/')}/{endpoint.lstrip('/')}{query}"
    headers = {
        "Accept": "application/json",
        "Clientid": CLIENT_ID,
        "User-Agent": "Mozilla/5.0 BangguoSupplierRealDemo",
    }
    if method != "GET":
        headers["Content-Type"] = "application/json; charset=utf-8"
    if token:
        headers["Authorization"] = token if token.startswith("Bearer ") else f"Bearer {token}"

    request = Request(url, data=body, headers=headers, method=method)
    try:
        with urlopen(request, timeout=30) as response:
            text = response.read().decode("utf-8")
    except HTTPError as error:
        detail = error.read().decode("utf-8", errors="ignore")
        raise RuntimeError(f"远端接口 HTTP {error.code}: {detail[:300]}") from error
    except URLError as error:
        raise RuntimeError(f"无法连接远端接口：{error.reason}") from error
    except TimeoutError as error:
        raise RuntimeError("远端接口超时") from error

    try:
        payload = json.loads(text)
    except json.JSONDecodeError as error:
        raise RuntimeError(f"远端接口返回非 JSON：{text[:120]}") from error
    if not isinstance(payload, dict):
        raise RuntimeError("远端接口返回格式异常")

    code = payload.get("code")
    if code not in (None, 0, 200):
        message = payload.get("msg") or payload.get("message") or "远端接口返回失败"
        raise RuntimeError(str(message))
    return payload


def data_of(payload: dict[str, Any]) -> Any:
    return payload.get("data") if "data" in payload else payload


def rows_of(value: Any) -> list[dict[str, Any]]:
    if isinstance(value, dict):
        for key in ("rows", "records", "list", "content"):
            rows = value.get(key)
            if isinstance(rows, list):
                return [row for row in rows if isinstance(row, dict)]
    if isinstance(value, list):
        return [row for row in value if isinstance(row, dict)]
    return []


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


def extract_token(value: Any) -> str:
    if not isinstance(value, dict):
        return ""
    login_vo = value.get("loginVo") if isinstance(value.get("loginVo"), dict) else value
    return str(
        login_vo.get("access_token")
        or login_vo.get("accessToken")
        or login_vo.get("token")
        or ""
    )


def normalize_auth(payload: dict[str, Any]) -> dict[str, Any]:
    data = data_of(payload)
    result = data if isinstance(data, dict) else {}
    return {
        "raw": payload,
        "authKey": result.get("authKey") or "",
        "binding": result.get("binding"),
        "loginVo": result.get("loginVo") if isinstance(result.get("loginVo"), dict) else None,
        "token": extract_token(result),
    }


def check_auth(payload: dict[str, Any]) -> dict[str, Any]:
    code = str(payload.get("code") or "").strip()
    if not code:
        raise RuntimeError("缺少 wx.login 返回的 code")
    body = {
        "clientid": CLIENT_ID,
        "grantType": "wxmini",
        "code": code,
        "qrToken": payload.get("qrToken"),
        "invitationCode": payload.get("invitationCode"),
    }
    return normalize_auth(remote_call("POST", "/auth/wx/auth", body))


def binding_login(payload: dict[str, Any]) -> dict[str, Any]:
    code = str(payload.get("code") or "").strip()
    if not code:
        raise RuntimeError("缺少新的 wx.login code")
    body = {
        "clientid": CLIENT_ID,
        "grantType": "wxmini",
        "code": code,
        "qrToken": payload.get("qrToken"),
        "invitationCode": payload.get("invitationCode"),
    }
    return normalize_auth(remote_call("POST", "/auth/wx/binding/login", body))


def phone_login(payload: dict[str, Any]) -> dict[str, Any]:
    phone_code = str(payload.get("code") or "").strip()
    auth_key = str(payload.get("authKey") or "").strip()
    if not phone_code:
        raise RuntimeError("缺少 getPhoneNumber 返回的 code")
    if not auth_key:
        raise RuntimeError("缺少 /auth/wx/auth 返回的 authKey")
    body = {
        "clientid": CLIENT_ID,
        "grantType": "wxmini",
        "code": phone_code,
        "authKey": auth_key,
        "qrToken": payload.get("qrToken"),
        "invitationCode": payload.get("invitationCode"),
    }
    return normalize_auth(remote_call("POST", "/auth/wx/login", body))


def qr_scanned(payload: dict[str, Any]) -> dict[str, Any]:
    qr_token = str(payload.get("qrToken") or "").strip()
    if not qr_token:
        raise RuntimeError("缺少 qrToken")
    return {"raw": remote_call("POST", "/auth/wx/qr/scanned", {"qrToken": qr_token})}


def token_from(payload: dict[str, Any]) -> str:
    token = str(payload.get("token") or "").strip()
    if not token:
        raise RuntimeError("请先填写 access_token")
    return token


def get_context(payload: dict[str, Any]) -> dict[str, Any]:
    token = token_from(payload)
    result: dict[str, Any] = {"appId": APP_ID, "baseUrl": BASE_URL, "clientid": CLIENT_ID}

    # 小程序启动后会先刷新权限和用户信息，这里保持同样顺序。
    result["perms"] = data_of(remote_call("GET", "/system/user/refresh/perms", token=token))
    result["user"] = data_of(remote_call("GET", "/system/user/getInfo", token=token))

    supplier_list_payload = remote_call("GET", "/basic/sup/supplier/getList", token=token)
    supplier_list = rows_of(data_of(supplier_list_payload))
    result["supplierList"] = supplier_list

    current_supplier = data_of(remote_call("GET", "/basic/sup/supplier/get", token=token))
    if not isinstance(current_supplier, dict):
        current_supplier = supplier_list[0] if supplier_list else {}
    result["currentSupplier"] = current_supplier

    warehouse_payload = remote_call("GET", "/basic/sup/white/regionWh/selectList", token=token)
    warehouse_list = rows_of(data_of(warehouse_payload))
    result["warehouseList"] = warehouse_list

    warehouse_region_wh_id = pick(warehouse_list[0], ["regionWhId", "id", "value"]) if warehouse_list else ""
    region_wh_id = (
        payload.get("regionWhId")
        or pick(current_supplier, ["regionWhId", "currentRegionWhId", "defaultRegionWhId", "provideRegionWhId"])
        or warehouse_region_wh_id
    )
    result["regionWhId"] = region_wh_id
    if region_wh_id:
        result["saleDate"] = data_of(remote_call("GET", f"/basic/admin/regionWh/getSaleDate/{region_wh_id}", token=token))
    return result


def delivery_status_text(status: Any, diff_status: Any = None) -> str:
    status_num = to_int(status)
    diff_num = to_int(diff_status)
    if diff_num:
        return {3: "有差异", 4: "已处理", 5: "忽略差异"}.get(diff_num, "差异")
    return {
        1: "待装车",
        2: "装车中",
        3: "已装车",
        4: "已取消",
        5: "已完成",
        6: "待送货",
    }.get(status_num, f"状态{status}" if status not in (None, "") else "-")


def normalize_delivery(row: dict[str, Any]) -> dict[str, Any]:
    goods = row.get("goodsList") if isinstance(row.get("goodsList"), list) else []
    return {
        "id": str(pick(row, ["id", "deliveryId"])),
        "deliveryNo": str(pick(row, ["deliveryNo", "no", "code"])),
        "supplierName": str(pick(row, ["supplierName", "provideSupplierName"])),
        "regionWhName": str(pick(row, ["regionWhName", "provideRegionWhName", "warehouseName"])),
        "saleDate": str(pick(row, ["saleDate", "departureDate"])),
        "status": row.get("status"),
        "statusText": delivery_status_text(row.get("status"), row.get("diffStatus")),
        "statusTime": str(pick(row, ["statusTime", "updateTime", "createTime"])),
        "totalDeliveryQuantity": pick(row, ["totalDeliveryQuantity", "alreadyDeliveryQuantity", "actualQuantity"]),
        "totalEntruckQuantity": pick(row, ["totalEntruckQuantity", "entruckQuantity"]),
        "goodsSummary": [
            {
                "goodsName": str(pick(item, ["goodsName", "skuName", "spuName", "productName"])),
                "actualQuantity": pick(item, ["actualQuantity", "alreadyDeliveryQuantity", "deliveryQuantity"]),
                "imageUrl": pick(item, ["mainPic", "imageUrl", "picUrl"]),
            }
            for item in goods[:6]
            if isinstance(item, dict)
        ],
        "raw": row,
    }


def delivery_list(payload: dict[str, Any], base: bool = False) -> dict[str, Any]:
    token = token_from(payload)
    region_wh_id = payload.get("regionWhId")
    params = {
        "pageNum": payload.get("pageNum") or 1,
        "pageSize": payload.get("pageSize") or 20,
        "deliveryNo": payload.get("deliveryNo"),
        "saleDate": payload.get("saleDate") if not base else None,
        "departureDate": payload.get("departureDate") if base else None,
        "statusList": payload.get("statusList"),
        "diffStatus": payload.get("diffStatus"),
    }
    if base:
        params["provideRegionWhId"] = region_wh_id
        params["sceneType"] = payload.get("sceneType") or 1
    else:
        params["regionWhId"] = region_wh_id

    remote = remote_call("POST", "/order/sup/delivery/page", params, token)
    data = data_of(remote)
    normalized = [normalize_delivery(row) for row in rows_of(data)]
    total = data.get("total") if isinstance(data, dict) else len(normalized)
    return {"rows": normalized, "total": total, "raw": remote}


def delivery_info(payload: dict[str, Any]) -> dict[str, Any]:
    token = token_from(payload)
    delivery_id = str(payload.get("deliveryId") or payload.get("id") or "").strip()
    if not delivery_id:
        raise RuntimeError("缺少 deliveryId")
    remote = remote_call("GET", f"/order/sup/delivery/info/{delivery_id}", token=token)
    return {"data": data_of(remote), "raw": remote}


def delivery_print_info(payload: dict[str, Any]) -> dict[str, Any]:
    token = token_from(payload)
    ids = payload.get("deliveryIdList")
    if isinstance(ids, str):
        ids = [int(part) for part in ids.split(",") if part.strip().isdigit()]
    if not ids:
        raise RuntimeError("缺少 deliveryIdList")
    body = {"deliveryIdList": ids}
    if payload.get("sceneType"):
        body["sceneType"] = payload.get("sceneType")
    remote = remote_call("POST", "/order/sup/delivery/getDeliveryGoodsOrderLabelList", body, token)
    return {"data": data_of(remote), "raw": remote}


def dry_run_mutation(endpoint: str, payload: dict[str, Any]) -> dict[str, Any]:
    if not ALLOW_MUTATIONS:
        return {"dryRun": True, "endpoint": endpoint, "body": payload}
    token = token_from(payload)
    body = {key: value for key, value in payload.items() if key != "token"}
    method, path = endpoint.split(" ", 1)
    return {"dryRun": False, "raw": remote_call(method, path, body, token)}


def parse_body(handler: BaseHTTPRequestHandler) -> dict[str, Any]:
    length = int(handler.headers.get("Content-Length") or "0")
    raw = handler.rfile.read(length).decode("utf-8")
    payload = json.loads(raw or "{}")
    if not isinstance(payload, dict):
        raise RuntimeError("请求体必须是 JSON 对象")
    return payload


class DemoHandler(BaseHTTPRequestHandler):
    server_version = "BangguoSupplierRealDemo/2.0"

    def do_GET(self) -> None:
        parsed = urlparse(self.path)
        if parsed.path not in {"/", "/index.html"}:
            self.send_error(404)
            return
        html = (ROOT / "index.html").read_bytes()
        self.send_response(200)
        self.send_header("Content-Type", "text/html; charset=utf-8")
        self.send_header("Content-Length", str(len(html)))
        self.end_headers()
        self.wfile.write(html)

    def do_POST(self) -> None:
        routes: dict[str, Callable[[dict[str, Any]], dict[str, Any]]] = {
            "/api/check-auth": check_auth,
            "/api/binding-login": binding_login,
            "/api/phone-login": phone_login,
            "/api/qr-scanned": qr_scanned,
            "/api/context": get_context,
            "/api/delivery/list": lambda body: delivery_list(body, base=False),
            "/api/delivery/base-list": lambda body: delivery_list(body, base=True),
            "/api/delivery/info": delivery_info,
            "/api/delivery/print-info": delivery_print_info,
            "/api/delivery/cancel": lambda body: dry_run_mutation("POST /order/sup/delivery/cancel", body),
            "/api/delivery/record-print": lambda body: dry_run_mutation("POST /order/sup/delivery/print", body),
        }
        parsed = urlparse(self.path)
        action = routes.get(parsed.path)
        if action is None:
            self.send_error(404)
            return
        self.handle_json(lambda: action(parse_body(self)))

    def do_OPTIONS(self) -> None:
        self.send_response(204)
        self.send_header("Access-Control-Allow-Origin", "*")
        self.send_header("Access-Control-Allow-Methods", "GET,POST,OPTIONS")
        self.send_header("Access-Control-Allow-Headers", "Content-Type,Authorization")
        self.end_headers()

    def handle_json(self, fn: Callable[[], dict[str, Any]]) -> None:
        try:
            self.send_json(200, fn())
        except Exception as error:
            self.send_json(400, {"detail": str(error)})

    def send_json(self, status: int, payload: dict[str, Any]) -> None:
        data = json.dumps(payload, ensure_ascii=False).encode("utf-8")
        self.send_response(status)
        self.send_header("Content-Type", "application/json; charset=utf-8")
        self.send_header("Access-Control-Allow-Origin", "*")
        self.send_header("Content-Length", str(len(data)))
        self.end_headers()
        self.wfile.write(data)

    def log_message(self, fmt: str, *args: Any) -> None:
        print(f"[DEMO] {self.address_string()} {fmt % args}")


def main() -> None:
    global ALLOW_MUTATIONS
    parser = argparse.ArgumentParser(description="般果供应商真实接口 DEMO")
    parser.add_argument("--host", default="127.0.0.1")
    parser.add_argument("--port", type=int, default=8776)
    parser.add_argument("--allow-mutations", action="store_true", help="允许真实写操作")
    args = parser.parse_args()
    ALLOW_MUTATIONS = args.allow_mutations
    server = ThreadingHTTPServer((args.host, args.port), DemoHandler)
    mode = "允许真实写操作" if ALLOW_MUTATIONS else "写操作 dry-run"
    print(f"般果供应商 DEMO 已启动：http://{args.host}:{args.port}（{mode}）")
    server.serve_forever()


if __name__ == "__main__":
    main()
