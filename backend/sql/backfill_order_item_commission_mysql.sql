-- 回填历史订单抽佣快照（兼容 MySQL 5.7 / 8.0）
-- 执行前请先在 phpMyAdmin 中选中正确数据库，或先执行 USE 你的数据库名;

SET @schema_name = DATABASE();

SET @sql = (
  SELECT IF(
    COUNT(*) = 0,
    'ALTER TABLE product_supermarkets ADD COLUMN commission_price DECIMAL(12, 2) NOT NULL DEFAULT 0.00',
    'SELECT ''product_supermarkets.commission_price 已存在'' AS message'
  )
  FROM information_schema.COLUMNS
  WHERE TABLE_SCHEMA = @schema_name
    AND TABLE_NAME = 'product_supermarkets'
    AND COLUMN_NAME = 'commission_price'
);
PREPARE stmt FROM @sql;
EXECUTE stmt;
DEALLOCATE PREPARE stmt;

SET @sql = (
  SELECT IF(
    COUNT(*) = 0,
    'ALTER TABLE order_items ADD COLUMN commission_price DECIMAL(12, 2) NOT NULL DEFAULT 0.00',
    'SELECT ''order_items.commission_price 已存在'' AS message'
  )
  FROM information_schema.COLUMNS
  WHERE TABLE_SCHEMA = @schema_name
    AND TABLE_NAME = 'order_items'
    AND COLUMN_NAME = 'commission_price'
);
PREPARE stmt FROM @sql;
EXECUTE stmt;
DEALLOCATE PREPARE stmt;

UPDATE order_items oi
JOIN order_vehicles ov ON oi.vehicle_id = ov.id
JOIN orders o ON ov.order_id = o.id
JOIN product_supermarkets ps
  ON ps.product_id = oi.product_id
 AND ps.supermarket = o.supermarket
SET oi.commission_price = ps.commission_price
WHERE oi.product_id IS NOT NULL
  AND (oi.commission_price IS NULL OR oi.commission_price = 0)
  AND ps.commission_price IS NOT NULL;

SELECT
  COUNT(*) AS order_item_count,
  COALESCE(SUM(oi.commission_price * oi.quantity), 0) AS total_commission
FROM order_items oi;
