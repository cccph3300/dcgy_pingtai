"""新增今日降价表

Revision ID: 0005_daily_price_overrides
Revises: 0004_backfill_order_item_commission
Create Date: 2026-09-01 00:00:00
"""

from collections.abc import Sequence

import sqlalchemy as sa
from alembic import op


revision: str = "0005_daily_price_overrides"
down_revision: str | None = "0004_backfill_order_item_commission"
branch_labels: str | Sequence[str] | None = None
depends_on: str | Sequence[str] | None = None


def timestamps() -> list[sa.Column]:
    return [
        sa.Column("created_at", sa.DateTime(timezone=True), server_default=sa.func.now(), nullable=False),
        sa.Column("updated_at", sa.DateTime(timezone=True), server_default=sa.func.now(), nullable=False),
    ]


def upgrade() -> None:
    op.create_table(
        "daily_price_overrides",
        sa.Column("id", sa.Integer(), primary_key=True),
        sa.Column("user_id", sa.Integer(), sa.ForeignKey("users.id"), nullable=False),
        sa.Column("product_id", sa.Integer(), sa.ForeignKey("products.id", ondelete="CASCADE"), nullable=False),
        sa.Column("supermarket", sa.String(32), nullable=False),
        sa.Column("override_date", sa.Date(), nullable=False),
        sa.Column("sale_price", sa.Numeric(12, 2), nullable=False),
        *timestamps(),
        sa.UniqueConstraint("user_id", "product_id", "supermarket", "override_date", name="uq_daily_price_override"),
    )
    op.create_index("ix_daily_price_overrides_user_id", "daily_price_overrides", ["user_id"])
    op.create_index("ix_daily_price_overrides_product_id", "daily_price_overrides", ["product_id"])
    op.create_index("ix_daily_price_overrides_supermarket", "daily_price_overrides", ["supermarket"])
    op.create_index("ix_daily_price_overrides_override_date", "daily_price_overrides", ["override_date"])


def downgrade() -> None:
    op.drop_index("ix_daily_price_overrides_override_date", table_name="daily_price_overrides")
    op.drop_index("ix_daily_price_overrides_supermarket", table_name="daily_price_overrides")
    op.drop_index("ix_daily_price_overrides_product_id", table_name="daily_price_overrides")
    op.drop_index("ix_daily_price_overrides_user_id", table_name="daily_price_overrides")
    op.drop_table("daily_price_overrides")
