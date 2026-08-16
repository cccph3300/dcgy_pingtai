<template>
  <main class="app-shell">
    <section class="page-content">
      <slot />
    </section>
    <nav class="tabbar">
      <RouterLink v-for="tab in tabs" :key="tab.path" class="tabbar-item" :to="tab.path">
        <component :is="tab.icon" :size="21" />
        <span>{{ tab.label }}</span>
      </RouterLink>
    </nav>
  </main>
</template>

<script setup lang="ts">
import { Boxes, ClipboardList, FileText, UserRound } from 'lucide-vue-next'

const tabs = [
  { label: '点单', path: '/', icon: ClipboardList },
  { label: '订单', path: '/orders', icon: FileText },
  { label: '库存', path: '/inventory', icon: Boxes },
  { label: '我的', path: '/profile', icon: UserRound },
]
</script>
