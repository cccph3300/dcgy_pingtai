<template>
  <main class="login-page">
    <section class="login-card card">
      <div class="login-avatar">
        <UserRound :size="52" />
      </div>
      <h1>超市配送</h1>
      <p>超市配送管理系统</p>
      <form @submit.prevent="submit">
        <input v-model="username" class="field" placeholder="账号" autocomplete="username" />
        <input v-model="password" class="field" placeholder="密码" type="password" autocomplete="current-password" />
        <button class="primary-button" type="submit" :disabled="loading">{{ loading ? '登录中' : '登录' }}</button>
      </form>
      <div v-if="error" class="toast">{{ error }}</div>
    </section>
  </main>
</template>

<script setup lang="ts">
import { UserRound } from 'lucide-vue-next'
import { ref } from 'vue'
import { useRouter } from 'vue-router'

import { useUserStore } from '@/stores/user'

const router = useRouter()
const userStore = useUserStore()
const username = ref('admin')
const password = ref('admin123456')
const loading = ref(false)
const error = ref('')

async function submit() {
  loading.value = true
  error.value = ''
  try {
    await userStore.login(username.value, password.value)
    await router.push('/')
  } catch (err) {
    error.value = err instanceof Error ? err.message : '登录失败'
  } finally {
    loading.value = false
  }
}
</script>

<style scoped>
.login-page {
  display: grid;
  min-height: 100vh;
  padding: 24px;
  place-items: center;
  background: linear-gradient(180deg, #eaf3ff 0%, #f5f5f7 42%);
}

.login-card {
  width: min(100%, 390px);
  padding: 28px 20px;
  text-align: center;
}

.login-avatar {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 88px;
  height: 88px;
  color: var(--accent);
  background: rgba(0, 113, 227, 0.1);
  border-radius: 50%;
}

h1 {
  margin: 14px 0 4px;
  font-size: 28px;
}

p {
  margin: 0 0 22px;
  color: var(--muted);
}

form {
  display: grid;
  gap: 12px;
}
</style>
