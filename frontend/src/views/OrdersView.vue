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

    <section class="stats-grid">
      <div class="card stat-card">
        <span>总金额</span>
        <strong>{{ currency(stats.total_amount) }}</strong>
      </div>
      <div class="card stat-card">
        <span>总抽佣</span>
        <strong>{{ currency(stats.total_commission) }}</strong>
      </div>
      <div class="card stat-card">
        <span>总利润</span>
        <strong class="money-red">{{ currency(stats.total_profit) }}</strong>
      </div>
    </section>

    <EmptyState v-if="!days.length" text="暂无订单" />
    <section v-for="day in days" :key="day.date" class="day-card card" @click="$router.push(`/orders/${day.date}`)">
      <h2>{{ day.date }}</h2>
      <div class="market-summary" v-for="order in orderedMarkets(day.orders)" :key="order.supermarket">
        <strong>{{ marketName(order.supermarket) }}</strong>
        <span>金额：{{ currency(order.total_amount) }}</span>
        <span>利润：{{ currency(order.total_profit) }}</span>
        <span>抽佣：{{ currency(order.total_commission) }}</span>
      </div>
      <footer>
        <span>总金额：{{ currency(day.total_amount) }}</span>
        <span class="money-red">总利润：{{ currency(day.total_profit) }}</span>
        <span>总抽佣：{{ currency(day.total_commission) }}</span>
        <ChevronRight :size="18" />
      </footer>
    </section>
  </AppShell>
</template>

<script setup lang="ts">
import { ChevronRight } from 'lucide-vue-next'
import { onMounted, ref } from 'vue'

import { listOrders } from '@/api/orders'
import { getStatistics } from '@/api/statistics'
import AppShell from '@/components/AppShell.vue'
import EmptyState from '@/components/EmptyState.vue'
import TopBar from '@/components/TopBar.vue'
import type { DaySummary, OrderDetail, Supermarket } from '@/types'
import { monthStartISO, todayISO } from '@/utils/date'
import { marketName } from '@/utils/market'
import { currency } from '@/utils/money'

const startDate = ref(monthStartISO())
const endDate = ref(todayISO())
const days = ref<DaySummary[]>([])
const stats = ref({ total_amount: '0.00', total_profit: '0.00', total_commission: '0.00' })

onMounted(load)

async function load() {
  const [summary, statistic] = await Promise.all([listOrders(startDate.value, endDate.value), getStatistics(startDate.value, endDate.value)])
  days.value = summary
  stats.value = statistic
}

function orderedMarkets(orders: OrderDetail[]) {
  return [...orders].sort((a, b) => a.supermarket.localeCompare(b.supermarket))
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

.stats-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 8px;
  margin: 10px 0;
}

.stat-card {
  padding: 16px;
  text-align: center;
}

.stat-card span {
  display: block;
  margin-bottom: 8px;
  color: var(--muted);
}

.stat-card strong {
  font-size: 19px;
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
  grid-template-columns: 72px 1fr 1fr;
  min-height: 34px;
  align-items: center;
  gap: 6px;
  font-size: 14px;
}

.market-summary span:last-child {
  grid-column: 2 / -1;
}

footer {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 24px;
  align-items: center;
  margin-top: 10px;
  padding-top: 10px;
  border-top: 1px solid var(--line);
  font-weight: 600;
  font-size: 13px;
}
</style>
