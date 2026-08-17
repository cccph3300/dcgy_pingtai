import { defineStore } from 'pinia'

import { getOrdersByDate, saveOrder } from '@/api/orders'
import type { OrderDetail, Period, Supermarket, VehicleDraft } from '@/types'
import { todayISO } from '@/utils/date'
import { quantity as formatQuantity, toNumber } from '@/utils/money'

const markets: Supermarket[] = ['supermarket_1', 'supermarket_2']
const periods: Period[] = ['morning', 'noon', 'evening']

function blankVehicle(period: Period): VehicleDraft {
  return {
    id: crypto.randomUUID(),
    period,
    vehicle_no: '',
    checked: false,
    items: [{ product_id: '', quantity: '' }],
  }
}

function emptyMarketDraft() {
  return Object.fromEntries(periods.map((period) => [period, [blankVehicle(period)]])) as Record<Period, VehicleDraft[]>
}

function quantityInput(value: string | number | undefined | null) {
  const parsed = Math.round(toNumber(value))
  return parsed > 0 ? String(parsed) : ''
}

function normalizeDraftQuantities(drafts: Record<Supermarket, Record<Period, VehicleDraft[]>>) {
  for (const market of markets) {
    for (const period of periods) {
      drafts[market][period].forEach((vehicle) => {
        vehicle.items.forEach((item) => {
          item.quantity = quantityInput(item.quantity)
        })
      })
    }
  }
}

function storageKey(date: string) {
  return `dcgy_order_draft_${date}`
}

function loadedKey(date: string) {
  return `dcgy_order_loaded_${date}`
}

function emptyLoadedPeriods() {
  return Object.fromEntries(markets.map((market) => [market, Object.fromEntries(periods.map((period) => [period, false]))])) as Record<
    Supermarket,
    Record<Period, boolean>
  >
}

export const useOrderStore = defineStore('orders', {
  state: () => ({
    currentDate: todayISO(),
    currentSupermarket: 'supermarket_1' as Supermarket,
    drafts: Object.fromEntries(markets.map((market) => [market, emptyMarketDraft()])) as Record<
      Supermarket,
      Record<Period, VehicleDraft[]>
    >,
    loadedPeriods: emptyLoadedPeriods(),
    savedOrders: [] as OrderDetail[],
  }),
  getters: {
    currentDraft(state) {
      return state.drafts[state.currentSupermarket]
    },
  },
  actions: {
    loadLocalDraft() {
      const raw = localStorage.getItem(storageKey(this.currentDate))
      if (raw) {
        this.drafts = JSON.parse(raw)
        normalizeDraftQuantities(this.drafts)
      }
      this.loadLoadedPeriods()
    },
    persistLocalDraft() {
      localStorage.setItem(storageKey(this.currentDate), JSON.stringify(this.drafts))
    },
    loadLoadedPeriods() {
      const raw = localStorage.getItem(loadedKey(this.currentDate))
      this.loadedPeriods = raw ? JSON.parse(raw) : emptyLoadedPeriods()
    },
    persistLoadedPeriods() {
      localStorage.setItem(loadedKey(this.currentDate), JSON.stringify(this.loadedPeriods))
    },
    setDate(date: string) {
      this.currentDate = date
      this.drafts = Object.fromEntries(markets.map((market) => [market, emptyMarketDraft()])) as Record<
        Supermarket,
        Record<Period, VehicleDraft[]>
      >
      this.loadedPeriods = emptyLoadedPeriods()
      this.loadLocalDraft()
    },
    isPeriodLoaded(period: Period) {
      return Boolean(this.loadedPeriods[this.currentSupermarket]?.[period])
    },
    markPeriodLoaded(period: Period) {
      this.loadedPeriods[this.currentSupermarket][period] = true
      this.drafts[this.currentSupermarket][period].forEach((vehicle) => {
        vehicle.checked = true
      })
      this.persistLocalDraft()
      this.persistLoadedPeriods()
    },
    unlockCurrentMarket() {
      this.loadedPeriods[this.currentSupermarket] = Object.fromEntries(periods.map((period) => [period, false])) as Record<Period, boolean>
      this.persistLoadedPeriods()
    },
    addVehicle(period: Period) {
      if (this.isPeriodLoaded(period)) return
      this.drafts[this.currentSupermarket][period].push(blankVehicle(period))
      this.persistLocalDraft()
    },
    addItem(vehicle: VehicleDraft) {
      if (this.isPeriodLoaded(vehicle.period)) return
      vehicle.items.push({ product_id: '', quantity: '' })
      this.persistLocalDraft()
    },
    toggleVehicleChecked(vehicle: VehicleDraft) {
      if (this.isPeriodLoaded(vehicle.period)) return
      vehicle.checked = !vehicle.checked
      this.persistLocalDraft()
    },
    removeVehicle(period: Period, vehicleId: string) {
      if (this.isPeriodLoaded(period)) return
      const list = this.drafts[this.currentSupermarket][period]
      this.drafts[this.currentSupermarket][period] = list.length > 1 ? list.filter((item) => item.id !== vehicleId) : [blankVehicle(period)]
      this.persistLocalDraft()
    },
    removeItem(vehicle: VehicleDraft, index: number) {
      if (this.isPeriodLoaded(vehicle.period)) return
      vehicle.items = vehicle.items.length > 1 ? vehicle.items.filter((_, itemIndex) => itemIndex !== index) : [{ product_id: '', quantity: '' }]
      this.persistLocalDraft()
    },
    async fetchDateOrders() {
      this.savedOrders = await getOrdersByDate(this.currentDate)
      for (const order of this.savedOrders) {
        const marketDraft = emptyMarketDraft()
        const currentMarketDraft = this.drafts[order.supermarket]
        for (const vehicle of order.vehicles) {
          const target = marketDraft[vehicle.period as Period]
          const previous = currentMarketDraft?.[vehicle.period as Period]?.find((item) => item.vehicle_no === vehicle.vehicle_no)
          target.push({
            id: crypto.randomUUID(),
            period: vehicle.period as Period,
            vehicle_no: vehicle.vehicle_no,
            checked: Boolean(previous?.checked),
            items: vehicle.items.map((item) => ({ product_id: item.product_id || '', quantity: formatQuantity(item.quantity) })),
          })
        }
        for (const period of periods) {
          marketDraft[period] = marketDraft[period].filter((vehicle) => vehicle.vehicle_no || vehicle.items.some((item) => item.product_id))
          if (!marketDraft[period].length) marketDraft[period] = [blankVehicle(period)]
        }
        this.drafts[order.supermarket] = marketDraft
      }
      this.persistLocalDraft()
    },
    async saveCurrent() {
      const vehicles = Object.values(this.drafts[this.currentSupermarket]).flat()
      const order = await saveOrder(this.currentDate, this.currentSupermarket, vehicles)
      this.savedOrders = this.savedOrders.filter((item) => item.supermarket !== order.supermarket).concat(order)
      this.persistLocalDraft()
      return order
    },
  },
})
