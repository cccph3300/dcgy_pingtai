export type Supermarket = 'supermarket_1' | 'supermarket_2'
export type Period = 'morning' | 'noon' | 'evening'
export type AdjustmentType = 'plus' | 'minus'

export interface User {
  id: number
  username: string
  nickname: string
  phone: string
  avatar?: string | null
}

export interface ProductMarket {
  id?: number
  supermarket: Supermarket
  sale_price: string
  commission_price: string
  enabled: boolean
}

export interface Product {
  id: number
  name: string
  net_weight: string
  gross_weight: string
  cost: string
  status: string
  supermarkets: ProductMarket[]
}

export interface OrderItemInput {
  product_id: number | ''
  quantity: string
}

export interface VehicleDraft {
  id: string
  vehicle_no: string
  period: Period
  checked?: boolean
  items: OrderItemInput[]
}

export interface OrderItem {
  id: number
  product_id: number | null
  product_name_snapshot: string
  quantity: string
  unit_price: string
  commission_price: string
  cost_snapshot: string
  unit_profit: string
  total_amount: string
  total_profit: string
}

export interface OrderVehicle {
  id: number
  vehicle_no: string
  period: Period
  items: OrderItem[]
}

export interface Adjustment {
  id?: number
  name: string
  type: AdjustmentType
  amount: string
}

export interface OrderDetail {
  id: number
  order_date: string
  supermarket: Supermarket
  total_amount: string
  total_profit: string
  status: string
  vehicles: OrderVehicle[]
  adjustments: Adjustment[]
}

export interface DaySummary {
  date: string
  orders: OrderDetail[]
  total_amount: string
  total_profit: string
}

export interface Withdrawal {
  id: number
  amount: string
  status: 'success' | 'failed'
  account_type: string
  account_mask: string
  created_at: string
}
