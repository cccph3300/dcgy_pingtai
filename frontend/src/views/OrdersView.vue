<template>
  <AppShell>
    <div class="orders-sticky">
      <TopBar title="订单" />
      <section class="filter-card card">
        <input v-model="startDate" class="field" type="date" @change="load" />
        <span>~</span>
        <input v-model="endDate" class="field" type="date" @change="load" />
      </section>
    </div>

    <button class="stats-toggle card" type="button" @click="statsExpanded = !statsExpanded">
      <span><BarChart3 :size="18" />统计</span>
      <ChevronDown :size="18" :class="{ expanded: statsExpanded }" />
    </button>

    <section v-if="statsExpanded" class="stats-panel card">
      <div class="stats-grid">
        <div class="stat-card">
          <span>总金额</span>
          <strong>{{ currency(stats.total_amount) }}</strong>
        </div>
        <div class="stat-card">
          <span>收入金额</span>
          <strong>{{ currency(incomeAmount(stats.total_amount, stats.total_commission)) }}</strong>
        </div>
        <div class="stat-card">
          <span>总抽佣</span>
          <strong>{{ currency(stats.total_commission) }}</strong>
        </div>
        <div class="stat-card">
          <span>总利润</span>
          <strong class="money-red">{{ currency(stats.total_profit) }}</strong>
        </div>
      </div>
      <div class="product-total-section">
        <h3>货物总计</h3>
        <div v-if="productTotals.length" class="product-total-list">
          <div v-for="item in productTotals" :key="item.name" class="product-total-row">
            <span>{{ item.name }}</span>
            <strong>{{ formatQuantity(item.quantity) }}件</strong>
          </div>
        </div>
        <EmptyState v-else text="暂无货物统计" />
      </div>
    </section>

    <EmptyState v-if="!days.length" text="暂无订单" />
    <section v-for="day in days" :key="day.date" class="day-card card" @click="$router.push(`/orders/${day.date}`)">
      <h2>{{ day.date }}</h2>
      <div class="market-summary" v-for="order in orderedMarkets(day.orders)" :key="order.supermarket">
        <strong>{{ marketName(order.supermarket) }}</strong>
        <span>金额：{{ currency(order.total_amount) }}</span>
        <span class="income-text">收入：{{ currency(incomeAmount(order.total_amount, order.total_commission)) }}</span>
        <span>抽佣：{{ currency(order.total_commission) }}</span>
        <span class="money-red">利润：{{ currency(order.total_profit) }}</span>
      </div>
      <footer>
        <span>总金额：{{ currency(day.total_amount) }}</span>
        <span>收入：{{ currency(incomeAmount(day.total_amount, day.total_commission)) }}</span>
        <span>总抽佣：{{ currency(day.total_commission) }}</span>
        <span class="money-red">总利润：{{ currency(day.total_profit) }}</span>
        <ChevronRight :size="18" />
      </footer>
    </section>
  </AppShell>
</template>

<script setup lang="ts">
import { BarChart3, ChevronDown, ChevronRight } from 'lucide-vue-next'
import { computed, onMounted, ref } from 'vue'

import { getOrdersByDate, listOrders } from '@/api/orders'
import { getStatistics } from '@/api/statistics'
import AppShell from '@/components/AppShell.vue'
import EmptyState from '@/components/EmptyState.vue'
import TopBar from '@/components/TopBar.vue'
import type { DaySummary, OrderDetail, Supermarket } from '@/types'
import { monthStartISO, todayISO } from '@/utils/date'
import { marketName } from '@/utils/market'
import { currency, money, quantity as formatQuantity, toNumber } from '@/utils/money'
import { orderCommission, orderGrossAmount } from '@/utils/orderTotals'

const startDate = ref(monthStartISO())
const endDate = ref(todayISO())
const days = ref<DaySummary[]>([])
const detailOrders = ref<OrderDetail[]>([])
const stats = ref({ total_amount: '0.00', total_profit: '0.00', total_commission: '0.00' })
const statsExpanded = ref(false)

onMounted(load)

async function load() {
  const [summary, statistic] = await Promise.all([listOrders(startDate.value, endDate.value), getStatistics(startDate.value, endDate.value)])
  const detailsByDate = await Promise.all(summary.map((day) => getOrdersByDate(day.date)))
  const fixedDays = withDetailCommissions(summary, detailsByDate)
  days.value = fixedDays
  detailOrders.value = detailsByDate.flat()
  const allDetails = detailsByDate.flat()
  stats.value = {
    ...statistic,
    total_amount: money(allDetails.reduce((sum, order) => sum + orderGrossAmount(order), 0)),
    total_profit: money(allDetails.reduce((sum, order) => sum + toNumber(order.total_profit), 0)),
    total_commission: money(fixedDays.reduce((sum, day) => sum + toNumber(day.total_commission), 0)),
  }
}

const productTotals = computed(() => {
  const totals = new Map<string, number>()
  for (const order of detailOrders.value) {
    for (const vehicle of order.vehicles) {
      for (const item of vehicle.items) {
        const name = item.product_name_snapshot || '未命名货物'
        totals.set(name, (totals.get(name) || 0) + toNumber(item.quantity))
      }
    }
  }
  return Array.from(totals, ([name, quantity]) => ({ name, quantity })).sort(
    (a, b) => b.quantity - a.quantity || a.name.localeCompare(b.name, 'zh-Hans-CN'),
  )
})

function orderedMarkets(orders: OrderDetail[]) {
  return [...orders].sort((a, b) => a.supermarket.localeCompare(b.supermarket))
}

function withDetailCommissions(summary: DaySummary[], detailsByDate: OrderDetail[][]) {
  if (!summary.length) return summary
  return summary.map((day, index) => {
    const detailOrders = detailsByDate[index]
    const detailByMarket = new Map(detailOrders.map((order) => [order.supermarket, order]))
    const orders = day.orders.map((order) => ({
      ...order,
      total_amount: money(detailByMarket.get(order.supermarket) ? orderGrossAmount(detailByMarket.get(order.supermarket)!) : toNumber(order.total_amount)),
      total_profit: money(detailByMarket.get(order.supermarket) ? toNumber(detailByMarket.get(order.supermarket)!.total_profit) : toNumber(order.total_profit)),
      total_commission: money(detailByMarket.get(order.supermarket) ? orderCommission(detailByMarket.get(order.supermarket)!) : toNumber(order.total_commission)),
    }))
    return {
      ...day,
      orders,
      total_amount: money(orders.reduce((sum, order) => sum + toNumber(order.total_amount), 0)),
      total_commission: money(orders.reduce((sum, order) => sum + toNumber(order.total_commission), 0)),
      total_profit: money(orders.reduce((sum, order) => sum + toNumber(order.total_profit), 0)),
    }
  })
}

function incomeAmount(totalAmount: string | number, totalCommission: string | number) {
  return toNumber(totalAmount) - toNumber(totalCommission)
}
</script>

<style scoped>
.orders-sticky {
  position: sticky;
  top: 0;
  z-index: 20;
  margin: calc(-12px - env(safe-area-inset-top)) -12px 10px;
  padding: calc(12px + env(safe-area-inset-top)) 12px 8px;
  background: #fbfbfd;
  border-bottom: 1px solid var(--line);
}

.filter-card {
  display: grid;
  grid-template-columns: 1fr 20px 1fr;
  align-items: center;
  gap: 8px;
  padding: 10px;
  text-align: center;
}

.stats-toggle {
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  margin: 10px 0;
  padding: 12px 14px;
  border: 1px solid var(--line);
  color: var(--text);
  font-weight: 700;
}

.stats-toggle span {
  display: inline-flex;
  align-items: center;
  gap: 6px;
}

.stats-toggle svg:last-child {
  transition: transform 0.2s ease;
}

.stats-toggle svg.expanded {
  transform: rotate(180deg);
}

.stats-panel {
  margin: 10px 0;
  padding: 12px;
}

.stats-grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 8px;
}

.stat-card {
  padding: 11px 10px;
  border: 1px solid var(--line);
  border-radius: 8px;
  background: #f7f9fc;
  text-align: center;
}

.stat-card span {
  display: block;
  margin-bottom: 5px;
  color: var(--muted);
  font-size: 12px;
}

.stat-card strong {
  font-size: 17px;
}

.product-total-section {
  margin-top: 12px;
  padding-top: 12px;
  border-top: 1px solid var(--line);
}

.product-total-section h3 {
  margin: 0 0 10px;
  font-size: 15px;
}

.product-total-list {
  display: grid;
  gap: 8px;
}

.product-total-row {
  display: grid;
  grid-template-columns: minmax(0, 1fr) auto;
  align-items: center;
  gap: 12px;
  padding: 8px 10px;
  border-radius: 8px;
  background: #fbfcff;
  font-size: 14px;
}

.product-total-row span {
  min-width: 0;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.product-total-row strong {
  color: var(--primary);
}

.day-card {
  margin-bottom: 12px;
  padding: 14px;
}

.day-card h2 {
  margin: 0 0 12px;
  font-size: 18px;
}

.market-summary {
  display: grid;
  grid-template-columns: 44px minmax(0, 1fr) minmax(0, 1fr);
  grid-template-areas:
    "name amount income"
    "name commission profit";
  min-height: 48px;
  align-items: center;
  column-gap: 10px;
  row-gap: 4px;
  font-size: 14px;
}

.market-summary strong {
  grid-area: name;
}

.market-summary span {
  min-width: 0;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.market-summary span:nth-of-type(1) {
  grid-area: amount;
}

.market-summary span:nth-of-type(2) {
  grid-area: income;
}

.market-summary span:nth-of-type(3) {
  grid-area: commission;
}

.market-summary span:nth-of-type(4) {
  grid-area: profit;
}

.income-text {
  font-weight: 700;
}

footer {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr)) 24px;
  align-items: center;
  margin-top: 10px;
  padding-top: 10px;
  border-top: 1px solid var(--line);
  font-weight: 600;
  font-size: 13px;
}
</style>
