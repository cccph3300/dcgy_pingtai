import router from '@/router'

const baseURL = import.meta.env.VITE_API_BASE_URL || '/api'

export class ApiError extends Error {
  status: number

  constructor(message: string, status: number) {
    super(message)
    this.status = status
  }
}

export function getToken() {
  return localStorage.getItem('dcgy_token')
}

export function setToken(token: string) {
  localStorage.setItem('dcgy_token', token)
}

export function clearToken() {
  localStorage.removeItem('dcgy_token')
}

function formatApiDetail(detail: unknown): string {
  if (typeof detail === 'string') return detail
  if (Array.isArray(detail)) {
    return detail
      .map((item) => {
        if (typeof item === 'string') return item
        if (!item || typeof item !== 'object') return ''
        const source = item as { msg?: unknown; loc?: unknown }
        const location = Array.isArray(source.loc) ? source.loc.filter((part) => typeof part === 'string' || typeof part === 'number').join('.') : ''
        const message = typeof source.msg === 'string' ? source.msg : ''
        return [location, message].filter(Boolean).join('：')
      })
      .filter(Boolean)
      .join('；')
  }
  return ''
}

export async function request<T>(path: string, options: RequestInit = {}): Promise<T> {
  const token = getToken()
  const headers = new Headers(options.headers)
  headers.set('Content-Type', 'application/json')
  if (token) headers.set('Authorization', `Bearer ${token}`)

  let response: Response
  try {
    response = await fetch(`${baseURL}${path}`, { ...options, headers })
  } catch {
    throw new ApiError('网络连接失败，请检查网络', 0)
  }

  if (response.status === 401) {
    clearToken()
    await router.push('/login')
    throw new ApiError('登录已失效，请重新登录', 401)
  }

  if (!response.ok) {
    const data = await response.json().catch(() => ({ detail: '请求失败' }))
    throw new ApiError(formatApiDetail(data.detail) || '请求失败', response.status)
  }

  if (response.status === 204) return undefined as T
  return response.json() as Promise<T>
}
