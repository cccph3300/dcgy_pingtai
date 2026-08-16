import { request } from './client'
import type { Withdrawal } from '@/types'

export function listWithdrawals() {
  return request<Withdrawal[]>('/withdrawals')
}

export function createWithdrawal(payload: { amount: string; status: 'success' | 'failed'; account_type: string; account_mask: string }) {
  return request<Withdrawal>('/withdrawals', { method: 'POST', body: JSON.stringify(payload) })
}

export function deleteWithdrawal(id: number) {
  return request<{ message: string }>(`/withdrawals/${id}`, { method: 'DELETE' })
}
