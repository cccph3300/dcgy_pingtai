# Android APK 打包说明

这个目录是一个轻量 Android WebView 包壳，用于把 `frontend/dist` 打进 APK。

- App 内置前端静态资源。
- 接口地址由 `frontend/.env.production` 控制，当前为 `https://dongchenggy.cn/api`。
- 生成 APK 前请先执行 `frontend` 的生产构建。
