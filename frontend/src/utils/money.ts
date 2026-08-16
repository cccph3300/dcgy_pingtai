export function toNumber(value: string | number | undefined | null) {
  const parsed = Number(value ?? 0)
  return Number.isFinite(parsed) ? parsed : 0
}

export function money(value: string | number | undefined | null) {
  return toNumber(value).toFixed(2)
}

export function currency(value: string | number | undefined | null) {
  return `¥${money(value)}`
}

export function quantity(value: string | number | undefined | null) {
  return String(Math.round(toNumber(value)))
}

export function maskPhone(phone: string) {
  if (!phone || phone.length < 7) return phone
  return `${phone.slice(0, 3)}****${phone.slice(-4)}`
}
