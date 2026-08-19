"""回填历史订单抽佣快照

Revision ID: 0004_backfill_order_item_commission
Revises: 0003_ensure_commission_fields
Create Date: 2026-08-17 00:00:00
"""

from collections.abc import Sequence

from alembic import op


revision: str = "0004_backfill_order_item_commission"
down_revision: str | None = "0003_ensure_commission_fields"
branch_labels: str | Sequence[str] | None = None
depends_on: str | Sequence[str] | None = None


def upgrade() -> None:
    bind = op.get_bind()
    if bind.dialect.name == "mysql":
        op.execute(
            """
            UPDATE order_items oi
            JOIN order_vehicles ov ON oi.vehicle_id = ov.id
            JOIN orders o ON ov.order_id = o.id
            JOIN product_supermarkets ps
              ON ps.product_id = oi.product_id
             AND ps.supermarket = o.supermarket
            SET oi.commission_price = ps.commission_price
            WHERE oi.product_id IS NOT NULL
              AND (oi.commission_price IS NULL OR oi.commission_price = 0)
              AND ps.commission_price IS NOT NULL
            """
        )
        return

    op.execute(
        """
        UPDATE order_items
           SET commission_price = (
               SELECT ps.commission_price
                 FROM order_vehicles ov
                 JOIN orders o ON ov.order_id = o.id
                 JOIN product_supermarkets ps
                   ON ps.product_id = order_items.product_id
                  AND ps.supermarket = o.supermarket
                WHERE ov.id = order_items.vehicle_id
                LIMIT 1
           )
         WHERE product_id IS NOT NULL
           AND (commission_price IS NULL OR commission_price = 0)
           AND EXISTS (
               SELECT 1
                 FROM order_vehicles ov
                 JOIN orders o ON ov.order_id = o.id
                 JOIN product_supermarkets ps
                   ON ps.product_id = order_items.product_id
                  AND ps.supermarket = o.supermarket
                WHERE ov.id = order_items.vehicle_id
           )
        """
    )


def downgrade() -> None:
    pass
