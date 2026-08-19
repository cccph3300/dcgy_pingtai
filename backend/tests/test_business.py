from datetime import date
from decimal import Decimal

import pytest
from fastapi.testclient import TestClient

from app.database import Base, get_db
from app.main import app
from app.models import User
from app.security import get_password_hash
from sqlalchemy import create_engine
from sqlalchemy.orm import Session, sessionmaker
from sqlalchemy.pool import StaticPool


@pytest.fixture()
def client():
    engine = create_engine(
        "sqlite://",
        connect_args={"check_same_thread": False},
        poolclass=StaticPool,
    )
    TestingSessionLocal = sessionmaker(bind=engine, autoflush=False, autocommit=False, expire_on_commit=False)
    Base.metadata.create_all(bind=engine)
    with Session(engine) as db:
        db.add(
            User(
                username="admin",
                password_hash=get_password_hash("admin123456"),
                nickname="东成果业",
                phone="18000002319",
            )
        )
        db.commit()

    def override_db():
        db = TestingSessionLocal()
        try:
            yield db
        finally:
            db.close()

    app.dependency_overrides[get_db] = override_db
    with TestClient(app) as test_client:
        yield test_client
    app.dependency_overrides.clear()


def auth_headers(client: TestClient) -> dict[str, str]:
    response = client.post("/api/auth/login", json={"username": "admin", "password": "admin123456"})
    assert response.status_code == 200
    token = response.json()["access_token"]
    return {"Authorization": f"Bearer {token}"}


def create_product(client: TestClient, headers: dict[str, str]) -> int:
    response = client.post(
        "/api/products",
        headers=headers,
        json={
            "name": "苹果",
            "net_weight": "15.00",
            "gross_weight": "20.00",
            "cost": "3.00",
            "supermarkets": [
                {"supermarket": "supermarket_1", "sale_price": "5.50", "commission_price": "0.50", "enabled": True}
            ],
        },
    )
    assert response.status_code == 200
    return response.json()["id"]


def test_order_profit_and_vehicle_children(client: TestClient):
    headers = auth_headers(client)
    product_id = create_product(client, headers)
    response = client.post(
        "/api/orders",
        headers=headers,
        json={
            "order_date": "2026-08-16",
            "supermarket": "supermarket_1",
            "vehicles": [
                {
                    "vehicle_no": "粤A12345",
                    "period": "morning",
                    "items": [
                        {"product_id": product_id, "quantity": "20"},
                        {"product_id": product_id, "quantity": "30"},
                        {"product_id": product_id, "quantity": "10"},
                    ],
                },
                {"vehicle_no": "粤B67890", "period": "morning", "items": [{"product_id": product_id, "quantity": "5"}]},
            ],
        },
    )
    assert response.status_code == 200, response.text
    data = response.json()
    assert data["total_amount"] == "325.00"
    assert data["total_commission"] == "32.50"
    assert data["total_profit"] == "130.00"
    assert len(data["vehicles"]) == 2
    assert len(data["vehicles"][0]["items"]) == 3
    assert data["vehicles"][0]["vehicle_no"] == "粤A12345"

    days = client.get("/api/orders", headers=headers).json()
    assert days[0]["total_commission"] == "32.50"
    assert days[0]["orders"][0]["total_commission"] == "32.50"

    detail = client.get("/api/orders/2026-08-16", headers=headers).json()
    assert detail[0]["total_commission"] == "32.50"

    stats = client.get("/api/statistics", headers=headers).json()
    assert stats["total_commission"] == "32.50"


def test_adjustments_change_amount_and_profit(client: TestClient):
    headers = auth_headers(client)
    product_id = create_product(client, headers)
    order = client.post(
        "/api/orders",
        headers=headers,
        json={
            "order_date": "2026-08-16",
            "supermarket": "supermarket_1",
            "vehicles": [{"vehicle_no": "粤A12345", "period": "morning", "items": [{"product_id": product_id, "quantity": "20"}]}],
        },
    ).json()
    response = client.put(
        f"/api/orders/{order['id']}/adjustments",
        headers=headers,
        json={"adjustments": [{"name": "运费", "type": "minus", "amount": "10"}, {"name": "补贴", "type": "plus", "amount": "20"}]},
    )
    assert response.status_code == 200
    data = response.json()
    assert data["total_amount"] == "110.00"
    assert data["total_profit"] == "50.00"


def test_product_soft_delete_keeps_order_snapshot(client: TestClient):
    headers = auth_headers(client)
    product_id = create_product(client, headers)
    order = client.post(
        "/api/orders",
        headers=headers,
        json={
            "order_date": "2026-08-16",
            "supermarket": "supermarket_1",
            "vehicles": [{"vehicle_no": "粤A12345", "period": "morning", "items": [{"product_id": product_id, "quantity": "1"}]}],
        },
    ).json()
    assert client.delete(f"/api/products/{product_id}", headers=headers).status_code == 200
    assert client.delete(f"/api/products/{product_id}", headers=headers).status_code == 200
    products = client.get("/api/products", headers=headers).json()
    assert products == []
    detail = client.get(f"/api/orders/{order['id']}/detail", headers=headers).json()
    assert detail["vehicles"][0]["items"][0]["product_name_snapshot"] == "苹果"


def test_withdrawal_requires_available_amount(client: TestClient):
    headers = auth_headers(client)
    no_money = client.post(
        "/api/withdrawals",
        headers=headers,
        json={"amount": "1.00", "status": "success", "account_type": "微信", "account_mask": "180****2319"},
    )
    assert no_money.status_code == 400

    product_id = create_product(client, headers)
    client.post(
        "/api/orders",
        headers=headers,
        json={
            "order_date": "2026-08-16",
            "supermarket": "supermarket_1",
            "vehicles": [{"vehicle_no": "粤A12345", "period": "morning", "items": [{"product_id": product_id, "quantity": "20"}]}],
        },
    )
    too_much = client.post(
        "/api/withdrawals",
        headers=headers,
        json={"amount": "111.00", "status": "success", "account_type": "微信", "account_mask": "180****2319"},
    )
    assert too_much.status_code == 400

    over_income = client.post(
        "/api/withdrawals",
        headers=headers,
        json={"amount": "91.00", "status": "success", "account_type": "微信", "account_mask": "180****2319"},
    )
    assert over_income.status_code == 400

    ok = client.post(
        "/api/withdrawals",
        headers=headers,
        json={"amount": "50.00", "status": "success", "account_type": "微信", "account_mask": "180****2319"},
    )
    assert ok.status_code == 200
    stats = client.get("/api/statistics", headers=headers).json()
    assert stats["withdrawn_amount"] == "50.00"
    assert stats["available_withdrawal_amount"] == "40.00"

    deleted = client.delete(f"/api/withdrawals/{ok.json()['id']}", headers=headers)
    assert deleted.status_code == 200
    stats_after_delete = client.get("/api/statistics", headers=headers).json()
    assert stats_after_delete["withdrawn_amount"] == "0.00"
    assert stats_after_delete["available_withdrawal_amount"] == "90.00"
