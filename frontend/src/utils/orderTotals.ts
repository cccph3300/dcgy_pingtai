import type { Adjustment, OrderDetail, OrderItem } from '@/types'
import { toNumber } from '@/utils/money'

function adjustmentAmount(adjustments: Adjustment[] = []) {
  return adjustments.reduce((sum, item) => {
    const amount = toNumber(item.amount)
    return item.type === 'minus' ? sum - amount : sum + amount
  }, 0)
}

export function orderItemSaleAmount(item: OrderItem) {
  return toNumber(item.unit_price) * toNumber(item.quantity)
}

export function orderCommission(order: OrderDetail) {
  return order.vehicles.reduce(
    (sum, vehicle) => sum + vehicle.items.reduce((itemSum, item) => itemSum + toNumber(item.commission_price) * toNumber(item.quantity), 0),
    0,
  )
}

export function orderGrossAmount(order: OrderDetail) {
  const productAmount = order.vehicles.reduce(
    (sum, vehicle) => sum + vehicle.items.reduce((itemSum, item) => itemSum + orderItemSaleAmount(item), 0),
    0,
  )
  return productAmount + adjustmentAmount(order.adjustments)
}

export function orderIncomeAmount(order: OrderDetail) {
  return orderGrossAmount(order) - orderCommission(order)
}
