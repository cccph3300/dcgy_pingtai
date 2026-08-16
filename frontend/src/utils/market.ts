import type { Supermarket } from '@/types'

export function marketName(market: Supermarket) {
  return market === 'supermarket_1' ? '般果' : '昱禾'
}
