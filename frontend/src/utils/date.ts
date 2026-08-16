export function todayISO() {
  const now = new Date()
  return toISODate(now)
}

export function toISODate(date: Date) {
  const year = date.getFullYear()
  const month = `${date.getMonth() + 1}`.padStart(2, '0')
  const day = `${date.getDate()}`.padStart(2, '0')
  return `${year}-${month}-${day}`
}

export function monthStartISO() {
  const now = new Date()
  return toISODate(new Date(now.getFullYear(), now.getMonth(), 1))
}

export function displayDate(input: string) {
  const date = new Date(`${input}T00:00:00`)
  const weekdays = ['星期日', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六']
  return `${date.getFullYear()}年${date.getMonth() + 1}月${date.getDate()}日 ${weekdays[date.getDay()]}`
}

export function displayDateOnly(input: string) {
  const date = new Date(`${input}T00:00:00`)
  return `${date.getFullYear()}年${date.getMonth() + 1}月${date.getDate()}日`
}
