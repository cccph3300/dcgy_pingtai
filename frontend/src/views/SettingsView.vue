<template>
  <AppShell>
    <TopBar title="设置" back />
    <section class="card settings-card">
      <p>当前利润规则</p>
      <strong>件数 ×（售价 - 每件成本 - 抽佣价）</strong>
      <p>库存不记录件数，历史订单保留商品快照。</p>
    </section>
    <button class="danger-button logout" type="button" @click="logout">退出登录</button>
  </AppShell>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'

import AppShell from '@/components/AppShell.vue'
import TopBar from '@/components/TopBar.vue'
import { useUserStore } from '@/stores/user'

const router = useRouter()
const userStore = useUserStore()

async function logout() {
  userStore.logout()
  await router.push('/login')
}
</script>

<style scoped>
.settings-card {
  display: grid;
  gap: 8px;
  padding: 16px;
}

p {
  margin: 0;
  color: var(--muted);
}

.logout {
  width: 100%;
  margin-top: 14px;
}
</style>
