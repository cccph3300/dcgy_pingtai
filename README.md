# 东成果业入账订单管理系统

这是一个移动端优先的个人业务系统，用于点单、订单统计、库存商品、提现记录管理。

## 技术栈

- 前端：Vue 3、Vite、Pinia、Vue Router
- 后端：Python FastAPI、SQLAlchemy 2.x、Pydantic
- 数据库：MySQL，金额字段统一使用 `DECIMAL(12,2)`
- 部署：Docker Compose、Nginx、Alembic
- 安卓：HBuilderX 本地静态资源打包，接口访问服务器 `/api`

## 核心业务规则

- 库存不录入件数，不做库存扣减，只维护商品名称、每件成本、上架超市、售价、抽佣价。
- 利润由后端最终计算：`点单件数 × (售价 - 每件成本 - 抽佣价)`。
- 点单页车号右侧的 `+` 只给当前车号新增货物，不新增车号。
- 新增车号只能点击每个时段底部的“添加一条”。
- 历史订单保存商品名称、售价、成本、抽佣、金额、利润快照；删除或修改库存不影响历史订单。
- 备注 / 费用调整只影响订单金额，不影响利润。

## 本地开发

后端：

```bash
cd backend
python -m venv .venv
.venv\Scripts\activate
pip install -r requirements.txt
uvicorn app.main:app --reload
```

默认开发环境使用 `sqlite:///./dev.db`，启动后会创建默认账号：

- 账号：`admin`
- 密码：`admin123456`

前端：

```bash
cd frontend
npm install
npm run dev
```

访问 Vite 输出的地址，开发代理会将 `/api` 转发到 `http://localhost:8000`。

## 服务器部署

1. 复制环境变量：

   ```bash
   cp .env.example .env
   ```

2. 修改 `.env` 中的数据库密码、`JWT_SECRET`、默认管理员密码。

3. 启动：

   ```bash
   docker compose up -d --build
   ```

4. 访问服务器 IP 或域名。

API 文档地址：

```text
http://你的服务器/api/docs
```

## 数据库迁移

生产环境容器启动时会执行：

```bash
alembic upgrade head
```

手动执行：

```bash
cd backend
alembic upgrade head
```

不要在生产环境删除或重建数据库；迁移用于演进表结构。

## HBuilderX 安卓打包

详见 [hbuilderx/README.md](hbuilderx/README.md)。

关键点：

- `VITE_API_BASE_URL` 写你的服务器 API 地址，例如 `https://example.com/api`。
- 执行 `npm run build` 后，把 `frontend/dist/` 放进 HBuilderX 项目的 `www/`。
- APK 只内置前端，核心数据仍保存到服务器 MySQL。
