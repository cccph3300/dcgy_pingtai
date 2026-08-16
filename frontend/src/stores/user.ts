import { defineStore } from 'pinia'

import { getMe, login as loginApi } from '@/api/auth'
import { clearToken, getToken } from '@/api/client'
import type { User } from '@/types'

export const useUserStore = defineStore('user', {
  state: () => ({
    user: null as User | null,
    loading: false,
  }),
  getters: {
    isAuthed: () => Boolean(getToken()),
  },
  actions: {
    async login(username: string, password: string) {
      await loginApi(username, password)
      await this.fetchMe()
    },
    async fetchMe() {
      if (!getToken()) return
      this.loading = true
      try {
        this.user = await getMe()
      } finally {
        this.loading = false
      }
    },
    logout() {
      clearToken()
      this.user = null
    },
  },
})
