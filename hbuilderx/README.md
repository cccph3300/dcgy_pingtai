# HBuilderX 安卓本地资源打包说明

本项目主体是 Vue 3 + Vite。安卓包采用“本地静态资源 + 远程服务器 API”的方式：

1. 在 `frontend/.env.production` 写入你的服务器接口地址，例如：

   ```env
   VITE_API_BASE_URL=https://你的域名/api
   ```

2. 执行前端构建：

   ```bash
   cd frontend
   npm install
   npm run build
   ```

3. 在 HBuilderX 中创建普通 5+ App 项目。

4. 将 `frontend/dist/` 目录中的文件复制到 HBuilderX 项目的 `www/` 目录。

5. HBuilderX 发行时选择“原生 App-云打包”或本地打包，安装到安卓手机即可。

注意：

- APK 内置的是前端静态资源，业务数据仍保存到服务器 MySQL。
- 前端更新后需要重新执行 `npm run build` 并重新打包 APK。
- API 地址必须是手机能访问的公网或局域网服务器地址，不能写 `localhost`。
