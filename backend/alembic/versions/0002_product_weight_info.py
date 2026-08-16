"""添加库存净果毛重字段

Revision ID: 0002_product_weight_info
Revises: 0001_initial
Create Date: 2026-08-17 00:00:00
"""

from collections.abc import Sequence

import sqlalchemy as sa
from alembic import op


revision: str = "0002_product_weight_info"
down_revision: str | None = "0001_initial"
branch_labels: str | Sequence[str] | None = None
depends_on: str | Sequence[str] | None = None


def upgrade() -> None:
    op.add_column("products", sa.Column("net_weight", sa.Numeric(12, 2), nullable=False, server_default="0.00"))
    op.add_column("products", sa.Column("gross_weight", sa.Numeric(12, 2), nullable=False, server_default="0.00"))


def downgrade() -> None:
    op.drop_column("products", "gross_weight")
    op.drop_column("products", "net_weight")
