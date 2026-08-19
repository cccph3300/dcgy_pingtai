-- 诊断 2026-08-17 总抽佣为 0 的原因（只读查询）
-- 执行前请先在 phpMyAdmin 中选中正确数据库，或先执行 USE 你的数据库名;

-- 1. 看订单明细里的抽佣快照，这是页面总抽佣的直接来源。
SELECT
  o.id AS order_id,
  o.order_date,
  o.supermarket,
  ov.vehicle_no,
  oi.id AS order_item_id,
  oi.product_id,
  oi.product_name_snapshot,
  oi.quantity,
  oi.unit_price,
  oi.commission_price AS order_item_commission_price,
  oi.commission_price * oi.quantity AS line_commission
FROM orders o
JOIN order_vehicles ov ON ov.order_id = o.id
JOIN order_items oi ON oi.vehicle_id = ov.id
WHERE o.order_date = '2026-08-17'
ORDER BY o.supermarket, ov.vehicle_no, oi.id;

-- 2. 看这一天按订单明细实际算出来的总抽佣。
SELECT
  o.order_date,
  o.supermarket,
  COALESCE(SUM(oi.commission_price * oi.quantity), 0) AS total_commission
FROM orders o
JOIN order_vehicles ov ON ov.order_id = o.id
JOIN order_items oi ON oi.vehicle_id = ov.id
WHERE o.order_date = '2026-08-17'
GROUP BY o.order_date, o.supermarket;

-- 3. 看库存表中对应商品、对应超市的抽佣价是否有值。
SELECT
  o.order_date,
  o.supermarket AS order_supermarket,
  oi.product_id,
  oi.product_name_snapshot,
  ps.supermarket AS product_supermarket,
  ps.sale_price,
  ps.commission_price AS product_commission_price,
  ps.enabled
FROM orders o
JOIN order_vehicles ov ON ov.order_id = o.id
JOIN order_items oi ON oi.vehicle_id = ov.id
LEFT JOIN product_supermarkets ps
  ON ps.product_id = oi.product_id
 AND ps.supermarket = o.supermarket
WHERE o.order_date = '2026-08-17'
ORDER BY o.supermarket, oi.product_id;

-- 4. 找出没有匹配到库存抽佣价的订单明细。
SELECT
  o.id AS order_id,
  o.order_date,
  o.supermarket,
  oi.id AS order_item_id,
  oi.product_id,
  oi.product_name_snapshot
FROM orders o
JOIN order_vehicles ov ON ov.order_id = o.id
JOIN order_items oi ON oi.vehicle_id = ov.id
LEFT JOIN product_supermarkets ps
  ON ps.product_id = oi.product_id
 AND ps.supermarket = o.supermarket
WHERE o.order_date = '2026-08-17'
  AND ps.id IS NULL;
