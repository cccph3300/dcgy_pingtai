import fs from 'node:fs';
import path from 'node:path';

const inputPath = process.argv[2];
if (!inputPath) {
  console.error('用法：node tools/extract-delivery-print-items.mjs <order-batchRef-list-response.json>');
  process.exit(1);
}

function pick(row, keys) {
  for (const key of keys) {
    const value = row?.[key];
    if (value != null && String(value).trim() !== '') {
      return value;
    }
  }
  return '';
}

function getRows(payload) {
  if (Array.isArray(payload)) {
    return payload;
  }
  if (Array.isArray(payload?.rows)) {
    return payload.rows;
  }
  if (Array.isArray(payload?.data?.rows)) {
    return payload.data.rows;
  }
  if (Array.isArray(payload?.data)) {
    return payload.data;
  }
  return [];
}

function normalizeItem(row) {
  const productBrand = String(pick(row, ['productBrand', 'brand'])).trim();
  const productName = String(pick(row, ['productName', 'goodsName', 'name', 'title'])).trim();
  const fullName = [productBrand, productName].filter(Boolean).join(' ');

  return {
    productName: fullName || productName || '-',
    quantity: pick(row, ['deliverNum', 'quantity', 'actualQuantity', 'checkQuantity', 'lineQuantity', 'num']) || 0,
    carNo: pick(row, ['carNo', 'lineNo']) || '-',
    pzNo: pick(row, ['pzNo', 'pzNO', 'pz_no', 'pzno']) || '-',
    deliveryStatus: pick(row, ['deliveryStatus']),
    checkStatus: pick(row, ['checkStatus']),
  };
}

const resolvedInput = path.resolve(inputPath);
const payload = JSON.parse(fs.readFileSync(resolvedInput, 'utf8'));
const rows = getRows(payload);
const items = rows.map(normalizeItem);

console.log(JSON.stringify(items, null, 2));
