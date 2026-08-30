# 般果供应商真实接口 DEMO

这是微信小程序“般果供应商”的逆向 DEMO，来源包为 `wxdfad8c82da70105d`，不要和昱禾小程序混用。

## 启动

```bash
python server.py --port 8776
```

打开：

```text
http://127.0.0.1:8776
```

## 登录链路

接口根地址：

```text
https://banguo-gateway.banguo.xianlink.cn
```

固定请求头：

```text
Clientid: u1zazpc5jartv40ufucgteoquttqziu3
Authorization: Bearer <access_token>
```

固定请求体字段：

```json
{
  "clientid": "u1zazpc5jartv40ufucgteoquttqziu3",
  "grantType": "wxmini"
}
```

接口：

- `POST /auth/wx/auth`：参数为 `code`、可选 `qrToken`、可选 `invitationCode`。这里的 `code` 是小程序 `wx.login` 返回值。
- `POST /auth/wx/binding/login`：已绑定账号时，参数为新的 `wx.login code`，返回 `loginVo.access_token`。
- `POST /auth/wx/login`：未绑定账号时，参数为手机号授权 `getPhoneNumber detail.code` 和 `/auth/wx/auth` 返回的 `authKey`，返回 `loginVo.access_token`。
- `POST /auth/wx/qr/scanned`：扫码场景通知接口，参数为 `qrToken`。

普通浏览器不能生成 `wx.login code` 或手机号授权 `code`。如果已经从小程序环境或抓包拿到了 `access_token`，可以直接粘贴 token 初始化上下文并查询送货单。

## 上下文接口

拿到 token 后，小程序会初始化用户、供应商和仓库：

- `GET /system/user/refresh/perms`
- `GET /system/user/getInfo`
- `GET /basic/sup/supplier/getList`
- `GET /basic/sup/supplier/get`
- `GET /basic/sup/white/regionWh/selectList`
- `GET /basic/admin/regionWh/getSaleDate/{regionWhId}`

送货单查询必须带仓库上下文。普通送货单使用 `regionWhId`，基采送货单使用 `provideRegionWhId`。

## 送货单接口

- 普通送货单：`POST /order/sup/delivery/page`
- 基采送货单：`POST /order/sup/delivery/page`，额外带 `sceneType` 和 `provideRegionWhId`
- 送货单详情：`GET /order/sup/delivery/info/{deliveryId}`
- 标签打印数据：`POST /order/sup/delivery/getDeliveryGoodsOrderLabelList`
- 查询是否打印过：`POST /order/sup/delivery/isPrint`
- 记录打印时间：`POST /order/sup/delivery/print`
- 取消送货单：`POST /order/sup/delivery/cancel`

DEMO 默认不执行会修改线上业务数据的接口，写接口会返回 dry-run 请求体。只有使用 `--allow-mutations` 启动时才会真实提交。
