<template>
  <AppShell>
    <TopBar title="库存" />
    <section class="inventory-toolbar">
      <input v-model="keyword" class="field" placeholder="搜索库存名称" />
      <button class="primary-button" type="button" @click="startCreate">
        <Plus :size="16" /> 添加库存
      </button>
    </section>

    <section v-if="editing" class="edit-panel card">
      <div class="edit-head">
        <button type="button" @click="editing = null">取消</button>
        <strong>{{ editing.id ? '编辑库存' : '添加库存' }}</strong>
        <button type="button" @click="save">保存</button>
      </div>
      <div class="form-grid">
        <label>名称 <input v-model="editing.name" class="field" /></label>
        <label>每件成本（元） <input v-model="editing.cost" class="field" type="number" inputmode="decimal" /></label>
        <label>净果 <input v-model="editing.net_weight" class="field" type="number" inputmode="decimal" /></label>
        <label>毛重 <input v-model="editing.gross_weight" class="field" type="number" inputmode="decimal" /></label>
      </div>
      <div class="market-checks">
        <label><input v-model="enabledMarkets" type="checkbox" value="supermarket_1" /> 般果</label>
        <label><input v-model="enabledMarkets" type="checkbox" value="supermarket_2" /> 昱禾</label>
      </div>
      <section v-for="market in enabledMarkets" :key="market" class="market-edit">
        <h3>{{ marketName(market) }}</h3>
        <div class="form-grid">
          <label>售卖价（元/件） <input v-model="marketForm[market].sale_price" class="field" type="number" inputmode="decimal" /></label>
          <label>抽佣价（元/件） <input v-model="marketForm[market].commission_price" class="field" type="number" inputmode="decimal" /></label>
        </div>
      </section>
    </section>

    <EmptyState v-if="!filtered.length && !editing" text="暂无库存商品" />
    <section v-for="product in pagedProducts" :key="product.id" class="product-card card">
      <div>
        <h2>{{ product.name }}</h2>
        <p class="product-meta">成本：{{ product.cost }}　净果：{{ product.net_weight }}　毛重：{{ product.gross_weight }}</p>
        <p>{{ product.supermarkets.map((item) => `${marketName(item.supermarket)} 售价${item.sale_price} 抽佣${item.commission_price}`).join(' / ') }}</p>
      </div>
      <div class="product-actions">
        <button class="ghost-button" type="button" @click="startEdit(product)">编辑</button>
        <button class="danger-button" type="button" :disabled="deletingProductId === product.id" @click="remove(product)">
          {{ deletingProductId === product.id ? '删除中' : '删除' }}
        </button>
      </div>
    </section>
    <section v-if="totalPages > 1 && !editing" class="pagination card">
      <button type="button" :disabled="page === 1" @click="page -= 1">上一页</button>
      <span>{{ page }} / {{ totalPages }}</span>
      <button type="button" :disabled="page === totalPages" @click="page += 1">下一页</button>
    </section>
  </AppShell>
</template>

<script setup lang="ts">
import { Plus } from 'lucide-vue-next'
import { computed, onMounted, reactive, ref, watch } from 'vue'

import { ApiError } from '@/api/client'
import { createProduct, deleteProduct, updateProduct } from '@/api/products'
import AppShell from '@/components/AppShell.vue'
import EmptyState from '@/components/EmptyState.vue'
import TopBar from '@/components/TopBar.vue'
import { useProductStore } from '@/stores/products'
import type { Product, ProductMarket, Supermarket } from '@/types'
import { marketName } from '@/utils/market'

const productStore = useProductStore()
const keyword = ref('')
const page = ref(1)
const pageSize = 3
const deletingProductId = ref<number | null>(null)
const editing = ref<{ id?: number; name: string; net_weight: string; gross_weight: string; cost: string } | null>(null)
const enabledMarkets = ref<Supermarket[]>([])
const marketForm = reactive<Record<Supermarket, ProductMarket>>({
  supermarket_1: { supermarket: 'supermarket_1', sale_price: '0.00', commission_price: '0.00', enabled: true },
  supermarket_2: { supermarket: 'supermarket_2', sale_price: '0.00', commission_price: '0.00', enabled: true },
})

onMounted(productStore.fetchProducts)

const filtered = computed(() => productStore.products.filter((product) => product.name.includes(keyword.value.trim())))
const totalPages = computed(() => Math.max(1, Math.ceil(filtered.value.length / pageSize)))
const pagedProducts = computed(() => filtered.value.slice((page.value - 1) * pageSize, page.value * pageSize))

watch([keyword, () => productStore.products.length], () => {
  page.value = 1
})

watch(totalPages, (value) => {
  if (page.value > value) page.value = value
})

function startCreate() {
  editing.value = { name: '', net_weight: '0.00', gross_weight: '0.00', cost: '0.00' }
  enabledMarkets.value = ['supermarket_1']
  marketForm.supermarket_1 = { supermarket: 'supermarket_1', sale_price: '0.00', commission_price: '0.00', enabled: true }
  marketForm.supermarket_2 = { supermarket: 'supermarket_2', sale_price: '0.00', commission_price: '0.00', enabled: true }
}

function startEdit(product: Product) {
  editing.value = {
    id: product.id,
    name: product.name,
    net_weight: product.net_weight,
    gross_weight: product.gross_weight,
    cost: product.cost,
  }
  enabledMarkets.value = product.supermarkets.filter((item) => item.enabled).map((item) => item.supermarket)
  for (const market of ['supermarket_1', 'supermarket_2'] as Supermarket[]) {
    const current = product.supermarkets.find((item) => item.supermarket === market)
    marketForm[market] = current
      ? { ...current, enabled: true }
      : { supermarket: market, sale_price: '0.00', commission_price: '0.00', enabled: true }
  }
}

async function save() {
  if (!editing.value) return
  const payload = {
    name: editing.value.name,
    net_weight: editing.value.net_weight,
    gross_weight: editing.value.gross_weight,
    cost: editing.value.cost,
    supermarkets: enabledMarkets.value.map((market) => ({ ...marketForm[market], supermarket: market, enabled: true })),
  }
  if (editing.value.id) await updateProduct(editing.value.id, payload)
  else await createProduct(payload)
  editing.value = null
  await productStore.fetchProducts()
}

async function remove(product: Product) {
  if (!window.confirm(`确定删除「${product.name}」吗？`)) return
  deletingProductId.value = product.id
  try {
    await deleteProduct(product.id)
    await productStore.fetchProducts()
  } catch (error) {
    const message = error instanceof ApiError ? error.message : '删除失败，请稍后重试'
    window.alert(message)
  } finally {
    deletingProductId.value = null
  }
}
</script>

<style scoped>
.inventory-toolbar {
  display: grid;
  grid-template-columns: 1fr 116px;
  gap: 8px;
  margin-bottom: 12px;
}

.primary-button {
  gap: 4px;
  padding: 0 10px;
}

.edit-panel {
  display: grid;
  gap: 14px;
  margin-bottom: 14px;
  padding: 14px;
}

.edit-head {
  display: grid;
  grid-template-columns: 60px 1fr 60px;
  align-items: center;
  text-align: center;
}

.edit-head button {
  min-height: 40px;
  color: var(--accent);
  background: transparent;
}

label {
  display: grid;
  gap: 6px;
  font-size: 14px;
  color: var(--muted);
}

.form-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 10px;
}

.market-checks {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 8px;
}

.market-checks label {
  display: flex;
  min-height: 44px;
  align-items: center;
  gap: 8px;
  color: var(--text);
}

.market-edit {
  display: grid;
  gap: 10px;
  padding-top: 10px;
  border-top: 1px solid var(--line);
}

h3,
h2 {
  margin: 0;
}

.product-card {
  display: grid;
  grid-template-columns: 1fr 88px;
  gap: 10px;
  margin-bottom: 10px;
  padding: 14px;
}

.product-card p {
  margin: 7px 0 0;
  color: var(--muted);
  font-size: 13px;
  line-height: 1.4;
}

.product-meta {
  white-space: nowrap;
}

.product-actions {
  display: grid;
  align-content: center;
  gap: 8px;
}

.pagination {
  display: grid;
  grid-template-columns: 88px 1fr 88px;
  align-items: center;
  gap: 8px;
  margin-top: 12px;
  padding: 10px;
  text-align: center;
}

.pagination button {
  min-height: 40px;
  color: var(--accent);
  background: rgba(0, 113, 227, 0.08);
  border-radius: 12px;
  font-weight: 700;
}

.pagination button:disabled {
  color: var(--muted);
  background: rgba(134, 134, 139, 0.1);
}
</style>
