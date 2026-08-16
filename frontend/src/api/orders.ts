import { request } from './client'
import type { Adjustment, DaySummary, OrderDetail, Supermarket, VehicleDraft } from '@/types'

export function saveOrder(order_date: string, supermarket: Supermarket, vehicles: VehicleDraft[]) {
  const payload = {
    order_date,
    supermarket,
    vehicles: vehicles
      .filter((vehicle) => vehicle.vehicle_no.trim() && vehicle.items.some((item) => item.product_id && Number(item.quantity) > 0))
      .map((vehicle) => ({
        vehicle_no: vehicle.vehicle_no.trim(),
        period: vehicle.period,
        items: vehicle.items
          .filter((item) => item.product_id && Number(item.quantity) > 0)
          .map((item) => ({ product_id: Number(item.product_id), quantity: item.quantity })),
      })),
  }
  return request<OrderDetail>('/orders', { method: 'POST', body: JSON.stringify(payload) })
}

export function listOrders(startDate: string, endDate: string) {
  return request<DaySummary[]>(`/orders?start_date=${startDate}&end_date=${endDate}`)
}

export function getOrdersByDate(date: string) {
  return request<OrderDetail[]>(`/orders/${date}`)
}

export function updateAdjustments(orderId: number, adjustments: Adjustment[]) {
  return request<OrderDetail>(`/orders/${orderId}/adjustments`, {
    method: 'PUT',
    body: JSON.stringify({ adjustments }),
  })
}
