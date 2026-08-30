# 送货单打印数据链路

## 结论

送货单打印页没有单独的“打印数据”接口。它使用送货单明细接口：

```http
GET https://admin.dgyhlc.com/prod-api/order/batchRef/list
Authorization: Bearer <token>
```

请求参数：

```json
{
  "pageNum": 1,
  "pageSize": 999,
  "batchId": "<supplierOrderId>"
}
```

其中 `supplierOrderId` 来自送货单列表接口 `order/batch/list` 返回行的 `id`，进入详情页时作为 URL 参数传入。

## 上游列表

送货单列表接口：

```http
GET /order/batch/list
```

常见参数：

```json
{
  "pageNum": 1,
  "pageSize": 10,
  "bizType": "<业务类型>",
  "supplierId": "<供应商ID，可选>",
  "supplierName": "<供应商名称，可选>",
  "productName": "<商品名称，可选>",
  "checkStatus": 0
}
```

列表页进入详情页：

```text
/sub-pages/supply/supplier-order-detail
  ?supplierOrderId=<id>
  &supplierOrderNo=<orderNo>
  &summaryId=<summaryId>
  &supplierId=<supplierId>
  &supplierName=<supplierName>
  &batchListInStockStatus=<inStockStatus>
```

详情页点击“打印标签”时，会把选中的明细行写入本地缓存：

```json
{
  "supplierOrderId": "<supplierOrderId>",
  "supplierOrderNo": "<supplierOrderNo>",
  "supplierName": "<supplierName>",
  "batchListInStockStatus": "<inStockStatus>",
  "batchListRawStatus": "<status>",
  "rows": ["<order/batchRef/list 返回的明细行>"]
}
```

然后跳转：

```text
/sub-pages/supply/supplier-order-print-label?cacheKey=<缓存键>
```

如果没有缓存键，打印页会自己请求 `order/batchRef/list`。

## 打印标签实际使用字段

`buildSupplierCpclLabel(row, { supplierName })` 生成 CPCL 标签时主要读取：

```json
{
  "carNo": "车号，兜底 lineNo",
  "lineNo": "车号兜底",
  "storeName": "城市仓/门店名，兜底 store、storeNm",
  "store": "城市仓/门店名兜底",
  "storeNm": "城市仓/门店名兜底",
  "supplierName": "供应商名",
  "consignee": "客户名称",
  "productBrand": "商品品牌，兜底 brand",
  "brand": "商品品牌兜底",
  "productName": "商品名，兜底 goodsName、name、title",
  "goodsName": "商品名兜底",
  "name": "商品名兜底",
  "title": "商品名兜底",
  "productNo": "商品编号，兜底 barCode、barcode、productId、serialNo",
  "barCode": "商品编号兜底",
  "barcode": "商品编号兜底",
  "productId": "商品编号兜底",
  "serialNo": "商品编号兜底",
  "netWeight": "毛重",
  "weight": "净重",
  "pzNo": "拍子号，兜底 pzNO、pz_no、pzno",
  "pzNO": "拍子号兜底",
  "pz_no": "拍子号兜底",
  "pzno": "拍子号兜底"
}
```

## 你要的四个字段

从 `GET /order/batchRef/list` 的每一条 `rows[]` 明细里取：

```json
{
  "商品名称": "productBrand + productName，兜底 goodsName、name、title",
  "数量": "deliverNum，兜底 quantity、actualQuantity、checkQuantity、lineQuantity、num",
  "车位号": "carNo，兜底 lineNo",
  "拍子号": "pzNo，兜底 pzNO、pz_no、pzno"
}
```

如果只要“待发货”的商品，按 `deliveryStatus` 过滤：

```text
deliveryStatus 不是 1 且不是 2 时，页面显示为“待发货”
```

如果只要“质检通过”的商品，按 `checkStatus === 1` 过滤。

打印份数取值：

```text
deliverNum -> quantity -> actualQuantity -> checkQuantity -> lineQuantity -> num
```

## 页面展示还会使用的字段

```json
{
  "image": "商品图，兜底 productImage、pic、mainPic、sliderImage、cover",
  "productImage": "商品图兜底",
  "pic": "商品图兜底",
  "mainPic": "商品图兜底",
  "sliderImage": "商品图兜底",
  "cover": "商品图兜底",
  "productSpec": "规格，兜底 productBrand",
  "levelName": "品级文案",
  "gradeName": "品级文案兜底",
  "level": "品级兜底",
  "productLevel": "品级兜底",
  "deliveryStatus": "发货状态",
  "checkStatus": "质检状态",
  "unqualifiedReason": "不合格原因",
  "actualQuantity": "实装数量",
  "checkQuantity": "质检数量",
  "inStockTime": "入库时间",
  "deliveryTime": "发货时间",
  "updateTime": "更新时间",
  "checkTime": "质检时间",
  "createTime": "创建时间",
  "operateUser": "质检人"
}
```

## 相关源码位置

- 打印页：`unpacked/_sub-pages_supply_/sub-pages/supply/chunk_10.appservice.js`
- 详情页传打印缓存：`unpacked/_sub-pages_supply_/sub-pages/supply/chunk_9.appservice.js`
- 列表页传 `supplierOrderId`：`unpacked/_sub-pages_supply_/sub-pages/supply/chunk_8.appservice.js`
- CPCL 标签生成：`unpacked/_sub-pages_supply_/sub-pages/supply/appservice.app.js`
