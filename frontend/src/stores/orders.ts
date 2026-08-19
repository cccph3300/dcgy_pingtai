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
    if (!drafts[market]) drafts[market] = emptyMarketDraft()
    for (const period of periods) {
      if (!drafts[market]?.[period]) drafts[market][period] = [blankVehicle(period)]
      drafts[market][period].forEach((vehicle) => {
        if (!vehicle.items.length) vehicle.items = [{ product_id: '', quantity: '' }]
        vehicle.items.forEach((item) => {
          item.quantity = quantityInput(item.quantity)
        })
      })
    }
  }
}

function hasItemInput(vehicle: VehicleDraft) {
  return vehicle.items.some((item) => item.product_id || item.quantity)
}

function hasVehicleInput(vehicle: VehicleDraft) {
  return Boolean(vehicle.vehicle_no.trim()) || hasItemInput(vehicle)
}

function sameItems(left: VehicleDraft, right: VehicleDraft) {
  const leftItems = left.items.filter((item) => item.product_id || item.quantity)
  const rightItems = right.items.filter((item) => item.product_id || item.quantity)
  if (leftItems.length !== rightItems.length) return false
  return leftItems.every((item, index) => {
    const other = rightItems[index]
    return String(item.product_id) === String(other.product_id) && quantityInput(item.quantity) === quantityInput(other.quantity)
  })
}

function mergePeriodDraft(remoteList: VehicleDraft[], localList: VehicleDraft[] | undefined, period: Period) {
  const locals = localList || []
  const remoteByVehicleNo = new Map<string, VehicleDraft>()
  for (const vehicle of remoteList) {
    const vehicleNo = vehicle.vehicle_no.trim()
    if (vehicleNo) remoteByVehicleNo.set(vehicleNo, vehicle)
  }
  const localKeys = new Set<string>()
  const merged: VehicleDraft[] = []
  for (const local of locals) {
    const key = local.vehicle_no.trim()
    if (!hasVehicleInput(local)) continue
    if (key) localKeys.add(key)
    const remote = key ? remoteByVehicleNo.get(key) : undefined
    if (!remote) {
      merged.push(local)
      continue
    }
    if (hasItemInput(local) && !sameItems(local, remote)) merged.push({ ...local, checked: Boolean(local.checked) })
    else merged.push({ ...remote, checked: Boolean(local.checked) })
  }
  for (const remote of remoteList) {
    const key = remote.vehicle_no.trim()
    if (key && localKeys.has(key)) continue
    merged.push(remote)
  }
  return merged.length ? merged : [blankVehicle(period)]
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
        try {
          this.drafts = JSON.parse(raw)
          normalizeDraftQuantities(this.drafts)
        } catch {
          this.drafts = Object.fromEntries(markets.map((market) => [market, emptyMarketDraft()])) as Record<
            Supermarket,
            Record<Period, VehicleDraft[]>
          >
        }
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
    async fetchDateOrders(options: { preserveLocalDraft?: boolean } = {}) {
      const preserveLocalDraft = options.preserveLocalDraft ?? true
      this.savedOrders = await getOrdersByDate(this.currentDate)
      const remoteDrafts = Object.fromEntries(markets.map((market) => [market, emptyMarketDraft()])) as Record<
        Supermarket,
        Record<Period, VehicleDraft[]>
      >
      for (const order of this.savedOrders) {
        const marketDraft = remoteDrafts[order.supermarket]
        const currentMarketDraft = this.drafts[order.supermarket]
        for (const vehicle of order.vehicles) {
          const target = marketDraft[vehicle.period as Period]
          const previous = currentMarketDraft?.[vehicle.period as Period]?.find((item) => item.vehicle_no === vehicle.vehicle_no)
          target.push({
            id: crypto.randomUUID(),
            period: vehicle.period as Period,
            vehicle_no: vehicle.vehicle_no,
            checked: Boolean(previous?.checked),
            items: vehicle.items.length
              ? vehicle.items.map((item) => ({ product_id: item.product_id || '', quantity: formatQuantity(item.quantity) }))
              : [{ product_id: '', quantity: '' }],
          })
        }
        for (const period of periods) {
          marketDraft[period] = marketDraft[period].filter((vehicle) => vehicle.vehicle_no || vehicle.items.some((item) => item.product_id))
          marketDraft[period] = preserveLocalDraft
            ? mergePeriodDraft(marketDraft[period], currentMarketDraft?.[period], period)
            : marketDraft[period].length
              ? marketDraft[period]
              : [blankVehicle(period)]
        }
      }
      if (preserveLocalDraft) {
        for (const market of markets) {
          if (this.savedOrders.some((order) => order.supermarket === market)) continue
          for (const period of periods) remoteDrafts[market][period] = mergePeriodDraft([], this.drafts[market]?.[period], period)
        }
      }
      this.drafts = remoteDrafts
      if (!preserveLocalDraft) {
        this.loadedPeriods = emptyLoadedPeriods()
        this.persistLoadedPeriods()
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
