"""初始化业务表

Revision ID: 0001_initial
Revises:
Create Date: 2026-08-16 00:00:00
"""

from collections.abc import Sequence

import sqlalchemy as sa
from alembic import op


revision: str = "0001_initial"
down_revision: str | None = None
branch_labels: str | Sequence[str] | None = None
depends_on: str | Sequence[str] | None = None


def timestamps() -> list[sa.Column]:
    return [
        sa.Column("created_at", sa.DateTime(timezone=True), server_default=sa.func.now(), nullable=False),
        sa.Column("updated_at", sa.DateTime(timezone=True), server_default=sa.func.now(), nullable=False),
    ]


def upgrade() -> None:
    op.create_table(
        "users",
        sa.Column("id", sa.Integer(), primary_key=True),
        sa.Column("username", sa.String(64), nullable=False),
        sa.Column("password_hash", sa.String(255), nullable=False),
        sa.Column("nickname", sa.String(64), nullable=False),
        sa.Column("phone", sa.String(32), nullable=False),
        sa.Column("avatar", sa.String(255), nullable=True),
        *timestamps(),
    )
    op.create_index("ix_users_username", "users", ["username"], unique=True)

    op.create_table(
        "products",
        sa.Column("id", sa.Integer(), primary_key=True),
        sa.Column("user_id", sa.Integer(), sa.ForeignKey("users.id"), nullable=False),
        sa.Column("name", sa.String(80), nullable=False),
        sa.Column("cost", sa.Numeric(12, 2), nullable=False),
        sa.Column("status", sa.String(16), nullable=False),
        *timestamps(),
    )
    op.create_index("ix_products_user_id", "products", ["user_id"])

    op.create_table(
        "product_supermarkets",
        sa.Column("id", sa.Integer(), primary_key=True),
        sa.Column("product_id", sa.Integer(), sa.ForeignKey("products.id", ondelete="CASCADE"), nullable=False),
        sa.Column("supermarket", sa.String(32), nullable=False),
        sa.Column("sale_price", sa.Numeric(12, 2), nullable=False),
        sa.Column("commission_price", sa.Numeric(12, 2), nullable=False),
        sa.Column("enabled", sa.Boolean(), nullable=False),
        *timestamps(),
        sa.UniqueConstraint("product_id", "supermarket", name="uq_product_supermarket"),
    )
    op.create_index("ix_product_supermarkets_product_id", "product_supermarkets", ["product_id"])
    op.create_index("ix_product_supermarkets_supermarket", "product_supermarkets", ["supermarket"])

    op.create_table(
        "orders",
        sa.Column("id", sa.Integer(), primary_key=True),
        sa.Column("user_id", sa.Integer(), sa.ForeignKey("users.id"), nullable=False),
        sa.Column("order_date", sa.Date(), nullable=False),
        sa.Column("supermarket", sa.String(32), nullable=False),
        sa.Column("total_amount", sa.Numeric(12, 2), nullable=False),
        sa.Column("total_profit", sa.Numeric(12, 2), nullable=False),
        sa.Column("status", sa.String(16), nullable=False),
        *timestamps(),
        sa.UniqueConstraint("user_id", "order_date", "supermarket", name="uq_order_user_date_market"),
    )
    op.create_index("ix_orders_user_id", "orders", ["user_id"])
    op.create_index("ix_orders_order_date", "orders", ["order_date"])
    op.create_index("ix_orders_supermarket", "orders", ["supermarket"])

    op.create_table(
        "order_vehicles",
        sa.Column("id", sa.Integer(), primary_key=True),
        sa.Column("order_id", sa.Integer(), sa.ForeignKey("orders.id", ondelete="CASCADE"), nullable=False),
        sa.Column("vehicle_no", sa.String(32), nullable=False),
        sa.Column("period", sa.String(16), nullable=False),
        *timestamps(),
    )
    op.create_index("ix_order_vehicles_order_id", "order_vehicles", ["order_id"])
    op.create_index("ix_order_vehicles_period", "order_vehicles", ["period"])

    op.create_table(
        "order_items",
        sa.Column("id", sa.Integer(), primary_key=True),
        sa.Column("vehicle_id", sa.Integer(), sa.ForeignKey("order_vehicles.id", ondelete="CASCADE"), nullable=False),
        sa.Column("product_id", sa.Integer(), sa.ForeignKey("products.id"), nullable=True),
        sa.Column("product_name_snapshot", sa.String(80), nullable=False),
        sa.Column("quantity", sa.Numeric(12, 2), nullable=False),
        sa.Column("unit_price", sa.Numeric(12, 2), nullable=False),
        sa.Column("commission_price", sa.Numeric(12, 2), nullable=False),
        sa.Column("cost_snapshot", sa.Numeric(12, 2), nullable=False),
        sa.Column("unit_profit", sa.Numeric(12, 2), nullable=False),
        sa.Column("total_amount", sa.Numeric(12, 2), nullable=False),
        sa.Column("total_profit", sa.Numeric(12, 2), nullable=False),
        *timestamps(),
    )
    op.create_index("ix_order_items_vehicle_id", "order_items", ["vehicle_id"])

    op.create_table(
        "order_adjustments",
        sa.Column("id", sa.Integer(), primary_key=True),
        sa.Column("order_id", sa.Integer(), sa.ForeignKey("orders.id", ondelete="CASCADE"), nullable=False),
        sa.Column("name", sa.String(80), nullable=False),
        sa.Column("type", sa.String(16), nullable=False),
        sa.Column("amount", sa.Numeric(12, 2), nullable=False),
        *timestamps(),
    )
    op.create_index("ix_order_adjustments_order_id", "order_adjustments", ["order_id"])

    op.create_table(
        "withdrawals",
        sa.Column("id", sa.Integer(), primary_key=True),
        sa.Column("user_id", sa.Integer(), sa.ForeignKey("users.id"), nullable=False),
        sa.Column("amount", sa.Numeric(12, 2), nullable=False),
        sa.Column("status", sa.String(16), nullable=False),
        sa.Column("account_type", sa.String(32), nullable=False),
        sa.Column("account_mask", sa.String(64), nullable=False),
        *timestamps(),
    )
    op.create_index("ix_withdrawals_user_id", "withdrawals", ["user_id"])


def downgrade() -> None:
    op.drop_table("withdrawals")
    op.drop_table("order_adjustments")
    op.drop_table("order_items")
    op.drop_table("order_vehicles")
    op.drop_table("orders")
    op.drop_table("product_supermarkets")
    op.drop_table("products")
    op.drop_index("ix_users_username", table_name="users")
    op.drop_table("users")
