"""补齐抽佣字段

Revision ID: 0003_ensure_commission_fields
Revises: 0002_product_weight_info
Create Date: 2026-08-17 00:00:00
"""

from collections.abc import Sequence

import sqlalchemy as sa
from alembic import op


revision: str = "0003_ensure_commission_fields"
down_revision: str | None = "0002_product_weight_info"
branch_labels: str | Sequence[str] | None = None
depends_on: str | Sequence[str] | None = None


def has_column(table_name: str, column_name: str) -> bool:
    inspector = sa.inspect(op.get_bind())
    return any(column["name"] == column_name for column in inspector.get_columns(table_name))


def upgrade() -> None:
    if not has_column("product_supermarkets", "commission_price"):
        op.add_column(
            "product_supermarkets",
            sa.Column("commission_price", sa.Numeric(12, 2), nullable=False, server_default="0.00"),
        )

    if not has_column("order_items", "commission_price"):
        op.add_column(
            "order_items",
            sa.Column("commission_price", sa.Numeric(12, 2), nullable=False, server_default="0.00"),
        )


def downgrade() -> None:
    if has_column("order_items", "commission_price"):
        op.drop_column("order_items", "commission_price")

    if has_column("product_supermarkets", "commission_price"):
        op.drop_column("product_supermarkets", "commission_price")
