# 般果供应商逆向摘要

小程序名称：般果供应商

AppID：`wxdfad8c82da70105d`

已确认包路径：

- `C:\Users\ccc\AppData\Roaming\Tencent\xwechat\radium\users\cb6686b37a79d42f9da2bc2844230b8a\applet\packages\wxdfad8c82da70105d\264\__APP__.wxapkg`
- `C:\Users\ccc\AppData\Roaming\Tencent\xwechat\radium\users\cb6686b37a79d42f9da2bc2844230b8a\applet\packages\wxdfad8c82da70105d\264\_package-supplyGoods_.wxapkg`
- `C:\Users\ccc\AppData\Roaming\Tencent\xwechat\radium\users\cb6686b37a79d42f9da2bc2844230b8a\applet\packages\wxdfad8c82da70105d\264\_package-system_.wxapkg`

解包关键特征：`webpackChunkbanguo_supplier_uniapp`

接口根地址：`https://banguo-gateway.banguo.xianlink.cn`

固定客户端 ID：`u1zazpc5jartv40ufucgteoquttqziu3`

固定请求头：

```text
Clientid: u1zazpc5jartv40ufucgteoquttqziu3
Authorization: Bearer <access_token>
```

登录接口：

- `POST /auth/wx/auth`
- `POST /auth/wx/binding/login`
- `POST /auth/wx/login`
- `POST /auth/wx/qr/scanned`

登录固定请求体：

```json
{
  "clientid": "u1zazpc5jartv40ufucgteoquttqziu3",
  "grantType": "wxmini"
}
```

登录流程：

1. 调用小程序 `wx.login` 获取 `code`。
2. 调用 `POST /auth/wx/auth`，参数为 `code`、可选 `qrToken`、可选 `invitationCode`。
3. 如果返回 `binding=true`，再用新的 `wx.login code` 调 `POST /auth/wx/binding/login`。
4. 如果返回 `binding=false`，用手机号授权 `getPhoneNumber detail.code` 和 `authKey` 调 `POST /auth/wx/login`。
5. token 字段位于 `loginVo.access_token`。

上下文接口：

- `GET /system/user/refresh/perms`
- `GET /system/user/getInfo`
- `GET /basic/sup/supplier/getList`
- `GET /basic/sup/supplier/get`
- `GET /basic/sup/white/regionWh/selectList`
- `GET /basic/admin/regionWh/getSaleDate/{regionWhId}`

送货单接口：

- `POST /order/sup/delivery/page`：普通送货单，带 `regionWhId`。
- `POST /order/sup/delivery/page`：基采送货单，带 `provideRegionWhId` 和 `sceneType`。
- `GET /order/sup/delivery/info/{deliveryId}`：送货单详情。
- `POST /order/sup/delivery/getDeliveryGoodsOrderLabelList`：标签打印数据。
- `POST /order/sup/delivery/isPrint`：查询打印时间。
- `POST /order/sup/delivery/print`：记录打印时间。
- `POST /order/sup/delivery/cancel`：取消送货单。

本地 DEMO：

```text
E:\project\dcgy_pingtai\bangguo-supplier-demo
http://127.0.0.1:8776
```
