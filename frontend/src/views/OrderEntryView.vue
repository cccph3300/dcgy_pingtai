<template>
  <AppShell>
    <TopBar title="点单">
      <template #right>
        <input v-model="store.currentDate" class="date-input" type="date" @change="changeDate" />
      </template>
    </TopBar>

    <div class="entry-date">{{ displayDate(store.currentDate) }}</div>
    <div class="segmented">
      <button :class="{ active: store.currentSupermarket === 'supermarket_1' }" @click="switchMarket('supermarket_1')">般果</button>
      <button :class="{ active: store.currentSupermarket === 'supermarket_2' }" @click="switchMarket('supermarket_2')">昱禾</button>
    </div>

    <div v-if="error" class="toast">{{ error }}</div>

    <section v-for="period in periodDefs" :key="period.key" class="period-section card" :class="{ loaded: store.isPeriodLoaded(period.key) }">
      <div class="period-title" :class="period.key">
        <h2>{{ period.label }}</h2>
        <button
          class="loaded-button"
          type="button"
          :disabled="saving || store.isPeriodLoaded(period.key)"
          @click="markLoaded(period.key)"
        >
          {{ store.isPeriodLoaded(period.key) ? '已装车' : '装车成功' }}
        </button>
      </div>
      <div class="order-table">
        <div class="table-head">
          <span></span>
          <span>车号</span>
          <span>货物</span>
          <span>件数</span>
          <span>金额</span>
          <span>利润</span>
          <span>操作</span>
        </div>
        <template v-for="vehicle in draft[period.key]" :key="vehicle.id">
          <div v-for="(item, index) in vehicle.items" :key="`${vehicle.id}-${index}`" class="table-row">
            <button
              v-if="index === 0"
              class="check-button"
              type="button"
              :class="{ checked: isVehicleChecked(period.key, vehicle) }"
              :aria-label="store.isPeriodLoaded(period.key) ? '已装车' : isVehicleChecked(period.key, vehicle) ? '取消勾选车号' : '勾选车号'"
              :disabled="store.isPeriodLoaded(period.key)"
              @click="store.toggleVehicleChecked(vehicle)"
            >
              <Check v-if="isVehicleChecked(period.key, vehicle)" :size="16" />
            </button>
            <span v-else class="sub-check"></span>
            <input
              v-if="index === 0"
              v-model="vehicle.vehicle_no"
              class="cell-input"
              placeholder="车号"
              :disabled="store.isPeriodLoaded(period.key)"
              @input="store.persistLocalDraft"
            />
            <span v-else class="sub-vehicle"></span>
            <button
              class="product-picker-button"
              type="button"
              :disabled="store.isPeriodLoaded(period.key)"
              @click="openProductPicker(item)"
            >
              {{ productName(item.product_id) || '货物' }}
            </button>
            <input
              v-model="item.quantity"
              class="cell-input"
              type="number"
              inputmode="numeric"
              step="1"
              min="0"
              placeholder="件数"
              :disabled="store.isPeriodLoaded(period.key)"
              @input="normalizeQuantity(item)"
            />
            <span class="number-cell">{{ previewItem(item).amount }}</span>
            <span class="number-cell blue">{{ previewItem(item).profit }}</span>
            <button
              class="small-plus"
              type="button"
              title="给当前车号添加货物"
              :disabled="store.isPeriodLoaded(period.key)"
              @click="store.addItem(vehicle)"
            >
              <Plus :size="16" />
            </button>
          </div>
          <button
            v-if="(vehicle.vehicle_no || vehicle.items.some((item) => item.product_id)) && !store.isPeriodLoaded(period.key)"
            class="delete-line"
            type="button"
            @click="removeVehicle(period.key, vehicle.id)"
          >
            删除车号
          </button>
        </template>
      </div>
      <button v-if="!store.isPeriodLoaded(period.key)" class="add-line" type="button" @click="store.addVehicle(period.key)">
        <PlusCircle :size="16" /> 添加一条
      </button>
      <div v-else class="loaded-tip">已装车成功，如需修改请到订单详情编辑。</div>
    </section>

    <div class="save-bar card">
      <div>
        <span>总金额：</span>
        <strong class="money-red">{{ currency(totalAmount) }}</strong>
      </div>
      <div>
        <span>总利润：</span>
        <strong class="money-red">{{ currency(totalProfit) }}</strong>
      </div>
      <button class="primary-button" type="button" :disabled="saving" @click="save">{{ saving ? '保存中' : '保存' }}</button>
    </div>
    <div class="save-bar-spacer" aria-hidden="true"></div>

    <div v-if="pickingItem" class="picker-mask" @click.self="closeProductPicker">
      <section class="picker-panel card">
        <header>
          <strong>选择货物</strong>
          <button type="button" @click="closeProductPicker">取消</button>
        </header>
        <input v-model="productKeyword" class="field" placeholder="搜索货物名称" autofocus />
        <button
          v-for="product in filteredPickerProducts"
          :key="product.id"
          class="picker-option"
          type="button"
          @click="selectProduct(product.id)"
        >
          <span>{{ product.name }}</span>
          <small>售价 {{ marketInfo(product)?.sale_price }} / 成本 {{ product.cost }}</small>
        </button>
        <EmptyState v-if="!filteredPickerProducts.length" text="没有匹配的货物" />
      </section>
    </div>
  </AppShell>
</template>

<script setup lang="ts">
import { Check, Plus, PlusCircle } from 'lucide-vue-next'
import { computed, onMounted, watch } from 'vue'
import { ref } from 'vue'
import { useRoute } from 'vue-router'

import AppShell from '@/components/AppShell.vue'
import EmptyState from '@/components/EmptyState.vue'
import TopBar from '@/components/TopBar.vue'
import { useOrderStore } from '@/stores/orders'
import { useProductStore } from '@/stores/products'
import type { OrderItemInput, Period, Product, Supermarket, VehicleDraft } from '@/types'
import { displayDate } from '@/utils/date'
import { currency, money, toNumber } from '@/utils/money'

const store = useOrderStore()
const productStore = useProductStore()
const route = useRoute()
const saving = ref(false)
const error = ref('')
const pickingItem = ref<OrderItemInput | null>(null)
const productKeyword = ref('')

const periodDefs: { key: Period; label: string }[] = [
  { key: 'morning', label: '早' },
  { key: 'noon', label: '中' },
  { key: 'evening', label: '晚' },
]

const draft = computed(() => store.drafts[store.currentSupermarket])
const marketProducts = computed(() => productStore.activeForMarket(store.currentSupermarket))

onMounted(async () => {
  const queryDate = typeof route.query.date === 'string' ? route.query.date : ''
  const queryMarket = route.query.market === 'supermarket_1' || route.query.market === 'supermarket_2' ? route.query.market : ''
  if (queryDate) store.setDate(queryDate)
  else store.loadLocalDraft()
  if (queryMarket) store.currentSupermarket = queryMarket
  if (route.query.edit === '1') store.unlockCurrentMarket()
  await Promise.all([productStore.fetchProducts(), store.fetchDateOrders().catch(() => undefined)])
})

watch(
  () => store.currentSupermarket,
  () => store.persistLocalDraft(),
)

function switchMarket(market: Supermarket) {
  store.currentSupermarket = market
}

async function changeDate() {
  store.setDate(store.currentDate)
  await store.fetchDateOrders().catch(() => undefined)
}

function findProduct(productId: number | ''): Product | undefined {
  if (!productId) return undefined
  return productStore.products.find((product) => product.id === Number(productId))
}

function productName(productId: number | '') {
  return findProduct(productId)?.name || ''
}

function marketInfo(product: Product) {
  return product.supermarkets.find((entry) => entry.supermarket === store.currentSupermarket)
}

const filteredPickerProducts = computed(() => {
  const keyword = productKeyword.value.trim()
  return marketProducts.value.filter((product) => !keyword || product.name.includes(keyword))
})

function openProductPicker(item: OrderItemInput) {
  pickingItem.value = item
  productKeyword.value = productName(item.product_id)
}

function closeProductPicker() {
  pickingItem.value = null
  productKeyword.value = ''
}

function selectProduct(productId: number) {
  if (!pickingItem.value) return
  pickingItem.value.product_id = productId
  store.persistLocalDraft()
  closeProductPicker()
}

function normalizeQuantity(item: OrderItemInput) {
  const value = Math.max(0, Math.round(toNumber(item.quantity)))
  item.quantity = value ? String(value) : ''
  store.persistLocalDraft()
}

function isVehicleChecked(period: Period, vehicle: VehicleDraft) {
  return store.isPeriodLoaded(period) || Boolean(vehicle.checked)
}

function previewItem(item: OrderItemInput) {
  const product = findProduct(item.product_id)
  const market = product?.supermarkets.find((entry) => entry.supermarket === store.currentSupermarket)
  if (!product || !market) return { amount: '0.00', profit: '0.00' }
  const quantity = toNumber(item.quantity)
  const unitProfit = toNumber(market.sale_price) - toNumber(product.cost) - toNumber(market.commission_price)
  return {
    amount: money(quantity * toNumber(market.sale_price)),
    profit: money(quantity * unitProfit),
  }
}

const totalAmount = computed(() =>
  Object.values(draft.value)
    .flat()
    .flatMap((vehicle) => vehicle.items)
    .reduce((sum, item) => sum + toNumber(previewItem(item).amount), 0),
)

const totalProfit = computed(() =>
  Object.values(draft.value)
    .flat()
    .flatMap((vehicle) => vehicle.items)
    .reduce((sum, item) => sum + toNumber(previewItem(item).profit), 0),
)

function removeVehicle(period: Period, vehicleId: string) {
  if (store.isPeriodLoaded(period)) return
  if (window.confirm('确定删除这个车号吗？')) store.removeVehicle(period, vehicleId)
}

async function markLoaded(period: Period) {
  if (store.isPeriodLoaded(period)) return
  saving.value = true
  error.value = ''
  try {
    await store.saveCurrent()
    store.markPeriodLoaded(period)
  } catch (err) {
    error.value = err instanceof Error ? err.message : '装车保存失败'
  } finally {
    saving.value = false
  }
}

async function save() {
  saving.value = true
  error.value = ''
  try {
    await store.saveCurrent()
    window.alert('保存成功')
  } catch (err) {
    error.value = err instanceof Error ? err.message : '保存失败'
  } finally {
    saving.value = false
  }
}
</script>

<style scoped>
.entry-date {
  margin: 4px 0 10px;
  text-align: center;
  font-size: 16px;
  font-weight: 600;
}

.date-input {
  width: 44px;
  height: 44px;
  opacity: 0.01;
}

.period-section {
  margin-top: 12px;
  overflow: hidden;
}

.period-title {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
  padding: 8px 12px;
}

.period-title h2 {
  margin: 0;
  font-size: 17px;
}

.period-title.morning {
  background: var(--morning-bg);
}

.period-title.noon {
  background: var(--noon-bg);
}

.period-title.evening {
  background: var(--evening-bg);
}

.loaded-button {
  min-width: 88px;
  min-height: 36px;
  padding: 0 12px;
  color: white;
  font-size: 13px;
  font-weight: 700;
  background: var(--accent);
  border-radius: 12px;
}

.loaded-button:disabled {
  color: var(--success);
  background: rgba(34, 160, 107, 0.1);
}

.period-section.loaded {
  border-color: rgba(34, 160, 107, 0.28);
}

.order-table {
  padding: 8px;
}

.table-head,
.table-row {
  display: grid;
  grid-template-columns: 30px 1fr 1fr 0.68fr 0.78fr 0.78fr 36px;
  align-items: center;
  gap: 4px;
}

.table-head {
  min-height: 30px;
  font-size: 12px;
  font-weight: 700;
  color: var(--text);
  text-align: center;
}

.table-row {
  min-height: 42px;
  border-top: 1px solid var(--line);
}

.cell-input {
  width: 100%;
  min-height: 34px;
  padding: 0 4px;
  font-size: 12px;
  text-align: center;
  background: transparent;
  border: 0;
  outline: none;
}

.cell-input:disabled,
.product-picker-button:disabled,
.small-plus:disabled,
.check-button:disabled {
  color: var(--muted);
  cursor: not-allowed;
  opacity: 0.72;
}

.product-picker-button {
  width: 100%;
  min-height: 34px;
  padding: 0 4px;
  overflow: hidden;
  color: var(--text);
  font-size: 12px;
  text-align: center;
  text-overflow: ellipsis;
  white-space: nowrap;
  background: transparent;
}

.number-cell {
  overflow: hidden;
  font-size: 12px;
  text-align: center;
  text-overflow: ellipsis;
}

.blue {
  color: var(--accent);
}

.sub-vehicle {
  min-height: 34px;
}

.sub-check {
  min-height: 34px;
}

.check-button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 26px;
  height: 26px;
  justify-self: center;
  color: white;
  background: transparent;
  border: 2px solid rgba(0, 113, 227, 0.44);
  border-radius: 50%;
}

.check-button.checked {
  background: var(--accent);
  border-color: var(--accent);
}

.small-plus {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 36px;
  height: 36px;
  color: var(--accent);
  background: transparent;
}

.delete-line,
.add-line {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  min-height: 38px;
  gap: 4px;
  color: var(--accent);
  background: transparent;
  border-top: 1px solid var(--line);
}

.delete-line {
  min-height: 30px;
  font-size: 12px;
  color: var(--danger);
}

.loaded-tip {
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 38px;
  color: var(--success);
  font-size: 13px;
  font-weight: 600;
  border-top: 1px solid var(--line);
}

.save-bar {
  position: fixed;
  right: 12px;
  bottom: calc(64px + env(safe-area-inset-bottom) + 8px);
  left: 12px;
  z-index: 9;
  display: grid;
  grid-template-columns: 1fr 1fr 88px;
  align-items: center;
  gap: 8px;
  width: calc(100% - 24px);
  max-width: 656px;
  margin: 0 auto;
  padding: 10px;
  font-size: 14px;
}

.save-bar div {
  display: flex;
  flex-direction: column;
  gap: 2px;
}

.save-bar-spacer {
  height: 78px;
}

.picker-mask {
  position: fixed;
  inset: 0;
  z-index: 30;
  display: flex;
  align-items: flex-end;
  justify-content: center;
  padding: 12px;
  background: rgba(0, 0, 0, 0.28);
}

.picker-panel {
  display: grid;
  width: min(100%, 680px);
  max-height: 72vh;
  gap: 8px;
  padding: 14px;
  overflow: auto;
}

.picker-panel header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  min-height: 38px;
}

.picker-panel header button {
  min-width: 52px;
  min-height: 36px;
  color: var(--accent);
  background: transparent;
}

.picker-option {
  display: grid;
  gap: 4px;
  min-height: 52px;
  padding: 8px 10px;
  color: var(--text);
  text-align: left;
  background: #fff;
  border: 1px solid var(--line);
  border-radius: 12px;
}

.picker-option small {
  color: var(--muted);
}

@media (max-width: 380px) {
  .table-head,
  .table-row {
    grid-template-columns: 28px 0.9fr 0.9fr 0.6fr 0.72fr 0.72fr 32px;
    gap: 2px;
  }

  .cell-input,
  .number-cell {
    font-size: 11px;
  }
}
</style>
