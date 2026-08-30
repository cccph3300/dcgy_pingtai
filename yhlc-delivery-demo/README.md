# 昱禾联仓送货单本地 DEMO

这是一个独立 DEMO，不接入原来的前端、后端和数据库。

## 启动

```bash
python server.py --port 8765
```

然后打开：

```text
http://127.0.0.1:8765
```

## 使用

1. 填写账号、密码和验证码。
2. 点击“登录获取 token”。
3. 日期默认当天，也可以手动选择。
4. 可按供应商、商品名称筛选。
5. 点击“获取当日送货单”。

页面会展示商品名称、数量、车位号、拍子号。

## 数据接口

- 列表：`GET https://admin.dgyhlc.com/prod-api/order/batch/list`
- 明细：`GET https://admin.dgyhlc.com/prod-api/order/batchRef/list`

账号密码和 token 只在本地 DEMO 服务请求接口时使用，不会写入原系统后端。
