# 昱禾联仓集采物联通小程序逆向摘要

- AppID：wx6a1192a1b0aa29aa
- 入口页：pages/login/index.html
- 页面数量：51
- 已识别静态接口数量：90
- 生产接口根地址：https://admin.dgyhlc.com/prod-api
- 测试接口根地址：https://dev.dgyhlc.com/prod-api
- 本地开发根地址：http://localhost:8585

## 分包

- sub-pages/auth/
- sub-pages/rider/
- sub-pages/merchant/
- sub-pages/supply/
- sub-pages/after-sale/
- sub-pages/warehouse/
- sub-pages/product/
- sub-pages/printer/

## 接口分组数量

- app: 14
- captchaImage: 1
- getInfo: 1
- login: 1
- order: 33
- product: 10
- rider: 8
- storage: 12
- supplier: 1
- system: 9

## 高频业务入口

- 登录/账号：login、getInfo、captchaImage、rider/wxLogin/*
- 商户/订单：order/storeOrder/*、order/dailySummary/*
- 供应商：supplier/app/add、storage/supplierInfo/*、storage/stock/*
- 商品：product/storeCategory/*、product/storeProduct/*、product/audit/*
- 账单：app/supplierBill/*
- 仓库/拣货：system/allocation*、system/orderPick/*、system/pickItem/*

## 生成文件

- routes.json：页面路由与标题
- api-endpoints.json：静态识别接口、方法、出现位置
- decrypted/：解密后的标准 wxapkg
- unpacked/：拆包后的文件

