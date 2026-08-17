import { request } from './client'

export function getStatistics(startDate?: string, endDate?: string) {
  const params = new URLSearchParams()
  if (startDate) params.set('start_date', startDate)
  if (endDate) params.set('end_date', endDate)
  return request<{
    total_amount: string
    total_profit: string
    total_commission: string
    withdrawn_amount: string
    available_withdrawal_amount: string
  }>(`/statistics${params.toString() ? `?${params}` : ''}`)
}
