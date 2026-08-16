import { defineStore } from 'pinia'

import { listProducts } from '@/api/products'
import type { Product, Supermarket } from '@/types'

export const useProductStore = defineStore('products', {
  state: () => ({
    products: [] as Product[],
    loading: false,
  }),
  getters: {
    activeForMarket: (state) => (market: Supermarket) =>
      state.products.filter((product) => product.supermarkets.some((item) => item.supermarket === market && item.enabled)),
  },
  actions: {
    async fetchProducts() {
      this.loading = true
      try {
        this.products = await listProducts()
      } finally {
        this.loading = false
      }
    },
  },
})
