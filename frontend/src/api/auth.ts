import { request, setToken } from './client'
import type { User } from '@/types'

export async function login(username: string, password: string) {
  const data = await request<{ access_token: string }>('/auth/login', {
    method: 'POST',
    body: JSON.stringify({ username, password }),
  })
  setToken(data.access_token)
  return data
}

export function getMe() {
  return request<User>('/auth/me')
}
