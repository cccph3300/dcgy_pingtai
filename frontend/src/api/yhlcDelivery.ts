import { request } from './client'

export interface YhlcCaptcha {
  img: string
  uuid: string
}

export interface YhlcLoginResult {
  token: string
  user: Record<string, unknown>
}

export interface YhlcDeliveryQuery {
  token: string
  delivery_date?: string
  supplier_name?: string
  product_name?: string
  only_pending: boolean
}

export interface YhlcDeliveryItem {
  order_id: string
  order_no: string
  product_name: string
  quantity: number
  car_no: string
  pz_no: string
  supplier_name: string
  delivery_status: number | null
  check_status: number | null
}

export interface YhlcDeliveryOrder {
  order_id: string
  order_no: string
  supplier_name: string
  create_time: string
  update_time: string
  items: YhlcDeliveryItem[]
}

export interface YhlcDeliveryResult {
  delivery_date: string
  orders: YhlcDeliveryOrder[]
  items: YhlcDeliveryItem[]
}

export function getYhlcCaptcha() {
  return request<YhlcCaptcha>('/yhlc-delivery/captcha')
}

export function loginYhlcAccount(payload: { username: string; password: string; code: string; uuid: string }) {
  return request<YhlcLoginResult>('/yhlc-delivery/login', {
    method: 'POST',
    body: JSON.stringify(payload),
  })
}

export function getTodayYhlcDelivery(payload: YhlcDeliveryQuery) {
  return request<YhlcDeliveryResult>('/yhlc-delivery/today', {
    method: 'POST',
    body: JSON.stringify(payload),
  })
}
