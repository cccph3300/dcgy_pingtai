import { request } from './client'
import type { Product, ProductMarket } from '@/types'

export interface ProductPayload {
  id?: number
  name: string
  net_weight: string
  gross_weight: string
  cost: string
  supermarkets: ProductMarket[]
}

export function listProducts() {
  return request<Product[]>('/products')
}

export function createProduct(payload: ProductPayload) {
  return request<Product>('/products', { method: 'POST', body: JSON.stringify(payload) })
}

export function updateProduct(id: number, payload: ProductPayload) {
  return request<Product>(`/products/${id}`, { method: 'PUT', body: JSON.stringify(payload) })
}

export function deleteProduct(id: number) {
  return request<{ message: string }>(`/products/${id}`, { method: 'DELETE' })
}
