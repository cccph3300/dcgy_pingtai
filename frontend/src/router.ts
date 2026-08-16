import { createRouter, createWebHashHistory } from 'vue-router'

import { getToken } from '@/api/client'

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    { path: '/login', component: () => import('@/views/LoginView.vue'), meta: { public: true } },
    { path: '/', component: () => import('@/views/OrderEntryView.vue') },
    { path: '/orders', component: () => import('@/views/OrdersView.vue') },
    { path: '/orders/:date', component: () => import('@/views/OrderDetailView.vue') },
    { path: '/inventory', component: () => import('@/views/InventoryView.vue') },
    { path: '/profile', component: () => import('@/views/ProfileView.vue') },
    { path: '/withdrawals', component: () => import('@/views/WithdrawalsView.vue') },
    { path: '/settings', component: () => import('@/views/SettingsView.vue') },
  ],
})

router.beforeEach((to) => {
  if (!to.meta.public && !getToken()) return '/login'
})

export default router
