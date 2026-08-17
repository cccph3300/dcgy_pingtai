<template>
  <AppShell>
    <section class="profile-hero">
      <div class="avatar">
        <UserRound :size="56" />
      </div>
      <h1>超市配送</h1>
      <p>{{ maskPhone(userStore.user?.phone || '') }}</p>
    </section>

    <section class="profile-stats">
      <span>总计金额</span>
      <strong>{{ currency(total.total_amount) }}</strong>
      <div class="today-grid">
        <div>
          <span>今日金额</span>
          <b>{{ currency(today.total_amount) }}</b>
        </div>
        <div>
          <span>今日利润</span>
          <b class="money-red">{{ currency(today.total_profit) }}</b>
        </div>
        <div>
          <span>今日抽佣</span>
          <b>{{ currency(today.total_commission) }}</b>
        </div>
      </div>
      <div class="withdraw-grid">
        <div>
          <span>已提现金额</span>
          <b>{{ currency(total.withdrawn_amount) }}</b>
        </div>
        <div>
          <span>未提现金额</span>
          <b>{{ currency(total.available_withdrawal_amount) }}</b>
        </div>
      </div>
      <div class="profit-grid">
        <div>
          <span>总利润</span>
          <strong class="money-red">{{ currency(total.total_profit) }}</strong>
        </div>
        <div>
          <span>总计抽佣</span>
          <strong>{{ currency(total.total_commission) }}</strong>
        </div>
      </div>
    </section>

    <section class="menu-card card">
      <RouterLink to="/withdrawals"><WalletCards :size="20" /> 提现记录 <ChevronRight :size="18" /></RouterLink>
      <RouterLink to="/settings"><Settings :size="20" /> 设置 <ChevronRight :size="18" /></RouterLink>
    </section>
  </AppShell>
</template>

<script setup lang="ts">
import { ChevronRight, Settings, UserRound, WalletCards } from 'lucide-vue-next'
import { onMounted, ref } from 'vue'

import { getStatistics } from '@/api/statistics'
import AppShell from '@/components/AppShell.vue'
import { useUserStore } from '@/stores/user'
import { todayISO } from '@/utils/date'
import { currency, maskPhone } from '@/utils/money'

const userStore = useUserStore()
const total = ref({
  total_amount: '0.00',
  total_profit: '0.00',
  total_commission: '0.00',
  withdrawn_amount: '0.00',
  available_withdrawal_amount: '0.00',
})
const today = ref({
  total_amount: '0.00',
  total_profit: '0.00',
  total_commission: '0.00',
  withdrawn_amount: '0.00',
  available_withdrawal_amount: '0.00',
})

onMounted(async () => {
  await userStore.fetchMe()
  const date = todayISO()
  ;[total.value, today.value] = await Promise.all([getStatistics(), getStatistics(date, date)])
})
</script>

<style scoped>
.profile-hero {
  margin: -12px -12px 0;
  padding: calc(42px + env(safe-area-inset-top)) 20px 26px;
  color: white;
  text-align: center;
  background: linear-gradient(180deg, #3498ff, #0071e3);
}

.avatar {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 92px;
  height: 92px;
  color: var(--accent);
  background: rgba(255, 255, 255, 0.92);
  border-radius: 50%;
}

h1 {
  margin: 12px 0 4px;
  font-size: 22px;
}

p {
  margin: 0;
}

.profile-stats {
  display: grid;
  gap: 10px;
  padding: 22px 0 28px;
  text-align: center;
}

.profile-stats span {
  color: var(--text);
}

.profile-stats strong {
  font-size: 30px;
  font-weight: 500;
}

.profile-stats b {
  font-size: 22px;
  font-weight: 500;
}

.today-grid,
.withdraw-grid {
  display: grid;
  gap: 8px;
  padding: 0 12px;
}

.today-grid {
  grid-template-columns: repeat(3, 1fr);
}

.withdraw-grid {
  grid-template-columns: 1fr 1fr;
}

.today-grid div,
.withdraw-grid div,
.profit-grid div {
  display: grid;
  gap: 6px;
  padding: 12px 8px;
  background: var(--surface);
  border: 1px solid var(--line);
  border-radius: 16px;
}

.today-grid b {
  font-size: 18px;
}

.profit-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 8px;
  padding: 0 12px;
}

.profit-grid strong {
  font-size: 22px;
  font-weight: 500;
}

.menu-card {
  overflow: hidden;
}

.menu-card a {
  display: grid;
  grid-template-columns: 28px 1fr 24px;
  align-items: center;
  min-height: 58px;
  padding: 0 16px;
  color: var(--text);
  border-bottom: 1px solid var(--line);
}

.menu-card a:last-child {
  border-bottom: 0;
}

.menu-card svg:first-child {
  color: var(--accent);
}
</style>
