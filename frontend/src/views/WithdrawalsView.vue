<template>
  <AppShell>
    <TopBar title="提现记录" back />
    <section class="amount-card card">
      <div>
        <span>已提现金额</span>
        <strong>{{ currency(stats.withdrawn_amount) }}</strong>
      </div>
      <div>
        <span>未提现金额</span>
        <strong class="money-red">{{ currency(stats.available_withdrawal_amount) }}</strong>
      </div>
    </section>
    <section class="quick-add card">
      <input
        v-model="amount"
        class="field"
        type="number"
        inputmode="decimal"
        min="0"
        :max="stats.available_withdrawal_amount"
        placeholder="提现金额"
        @input="clampAmount"
      />
      <button class="primary-button" :disabled="!canWithdraw" @click="add">记录提现</button>
    </section>
    <div v-if="message" class="toast">{{ message }}</div>
    <EmptyState v-if="!records.length" text="暂无提现记录" />
    <section v-for="record in records" :key="record.id" class="withdrawal-card card">
      <header>
        <strong>{{ currency(record.amount) }}</strong>
        <span :class="record.status">{{ record.status === 'success' ? '提现成功' : '提现失败' }}</span>
      </header>
      <p>{{ new Date(record.created_at).toLocaleString() }}</p>
      <footer>
        <span>提现到：{{ record.account_type }} {{ record.account_mask }}</span>
        <button type="button" @click="remove(record)">删除</button>
      </footer>
    </section>
  </AppShell>
</template>

<script setup lang="ts">
import { computed, onMounted, ref } from 'vue'

import { createWithdrawal, deleteWithdrawal, listWithdrawals } from '@/api/withdrawals'
import { getStatistics } from '@/api/statistics'
import AppShell from '@/components/AppShell.vue'
import EmptyState from '@/components/EmptyState.vue'
import TopBar from '@/components/TopBar.vue'
import { useUserStore } from '@/stores/user'
import type { Withdrawal } from '@/types'
import { currency, maskPhone, money, toNumber } from '@/utils/money'

const records = ref<Withdrawal[]>([])
const amount = ref('')
const message = ref('')
const stats = ref({ total_amount: '0.00', total_profit: '0.00', withdrawn_amount: '0.00', available_withdrawal_amount: '0.00' })
const userStore = useUserStore()
const canWithdraw = computed(() => {
  const inputAmount = toNumber(amount.value)
  const available = toNumber(stats.value.available_withdrawal_amount)
  return available > 0 && inputAmount > 0 && inputAmount <= available
})

onMounted(load)

async function load() {
  ;[records.value, stats.value] = await Promise.all([listWithdrawals(), getStatistics()])
  clampAmount()
}

function clampAmount() {
  if (!amount.value) return
  const available = toNumber(stats.value.available_withdrawal_amount)
  const inputAmount = toNumber(amount.value)
  if (available <= 0) {
    amount.value = ''
    return
  }
  if (inputAmount > available) amount.value = money(available)
}

async function add() {
  message.value = ''
  clampAmount()
  const inputAmount = toNumber(amount.value)
  const available = toNumber(stats.value.available_withdrawal_amount)
  if (available <= 0) {
    message.value = '当前没有可提现金额'
    return
  }
  if (inputAmount <= 0) {
    message.value = '请输入提现金额'
    return
  }
  if (inputAmount > available) {
    message.value = '提现金额不能超过未提现金额'
    return
  }
  await userStore.fetchMe()
  try {
    await createWithdrawal({
      amount: amount.value,
      status: 'success',
      account_type: '微信',
      account_mask: maskPhone(userStore.user?.phone || ''),
    })
    amount.value = ''
    await load()
  } catch (err) {
    message.value = err instanceof Error ? err.message : '提现失败'
  }
}

async function remove(record: Withdrawal) {
  if (!window.confirm(`确定删除这条提现记录 ${currency(record.amount)} 吗？`)) return
  await deleteWithdrawal(record.id)
  await load()
}
</script>

<style scoped>
.amount-card {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 8px;
  margin-bottom: 12px;
  padding: 14px;
  text-align: center;
}

.amount-card div {
  display: grid;
  gap: 8px;
}

.amount-card span {
  color: var(--muted);
  font-size: 13px;
}

.quick-add {
  display: grid;
  grid-template-columns: 1fr 104px;
  gap: 8px;
  margin-bottom: 12px;
  padding: 10px;
}

.withdrawal-card {
  margin-bottom: 10px;
  padding: 16px;
}

header {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

header strong {
  font-size: 20px;
}

.success {
  color: var(--success);
}

.failed {
  color: var(--danger);
}

p {
  margin: 9px 0 0;
  color: var(--muted);
  font-size: 14px;
}

footer {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
  margin-top: 9px;
  color: var(--muted);
  font-size: 14px;
}

footer button {
  min-width: 52px;
  min-height: 36px;
  color: var(--danger);
  background: rgba(215, 0, 21, 0.08);
  border-radius: 10px;
}
</style>
