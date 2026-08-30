<template>
  <AppShell>
    <TopBar title="订单详情" :subtitle="displayDateOnly(date)" back />
    <section v-if="orders.length" class="detail-total card top-total">
      <div>
        <span>总金额</span>
        <strong>{{ currency(grandTotal.amount) }}</strong>
      </div>
      <div>
        <span>总抽佣</span>
        <strong>{{ currency(grandTotal.commission) }}</strong>
      </div>
      <div>
        <span>收入金额</span>
        <strong>{{ currency(grandTotal.income) }}</strong>
      </div>
      <div>
        <span>总利润</span>
        <strong class="money-red">{{ currency(grandTotal.profit) }}</strong>
      </div>
    </section>
    <div v-if="orders.length > 1" class="market-tabs">
      <button
        v-for="order in orderedOrders"
        :key="order.id"
        class="market-tab"
        :class="{ active: selectedOrderId === order.id }"
        type="button"
        @click="selectOrder(order.id)"
      >
        <strong>{{ marketName(order.supermarket) }}</strong>
        <span>
          <small>总金额</small>
          <b>{{ currency(order.total_amount) }}</b>
        </span>
        <span>
          <small>总抽佣</small>
          <b>{{ currency(orderCommission(order)) }}</b>
        </span>
        <span>
          <small>收入金额</small>
          <b>{{ currency(orderIncome(order)) }}</b>
        </span>
        <span>
          <small>总利润</small>
          <b class="money-red">{{ currency(order.total_profit) }}</b>
        </span>
      </button>
    </div>
    <EmptyState v-if="!orders.length" text="当天暂无订单" />
    <section v-if="selectedOrder" class="detail-card card">
      <div class="section-title">
        <h2>{{ marketName(selectedOrder.supermarket) }}</h2>
        <button v-if="canEditDetail && !isEditingSelected" class="ghost-button edit-button" type="button" @click="startEditingSelected">
          编辑
        </button>
      </div>
      <div v-if="detailError" class="toast">{{ detailError }}</div>
      <template v-if="!isEditingSelected">
        <div class="detail-table">
          <div class="detail-head">
            <span>名称</span>
            <span>件数</span>
            <span>金额(元)</span>
            <span>利润(元)</span>
            <span>抽佣(元)</span>
          </div>
          <div v-for="item in aggregate(selectedOrder)" :key="item.name" class="detail-row">
            <span>{{ item.name }}</span>
            <span>{{ item.quantity }}</span>
            <span>{{ item.amount }}</span>
            <span>{{ item.profit }}</span>
            <span>{{ item.commission }}</span>
          </div>
          <div class="detail-row total">
            <strong>商品合计</strong>
            <strong>{{ productTotals(selectedOrder).quantity }}</strong>
            <strong>{{ productTotals(selectedOrder).amount }}</strong>
            <strong>{{ productTotals(selectedOrder).profit }}</strong>
            <strong>{{ productTotals(selectedOrder).commission }}</strong>
          </div>
        </div>

        <h3>车号明细</h3>
        <section v-for="group in groupedVehicles" :key="group.vehicle_no" class="vehicle-block">
          <button class="vehicle-header" type="button" @click="toggleVehicle(group.vehicle_no)">
            <strong>{{ group.vehicle_no }}</strong>
            <span>{{ group.periods.map(periodName).join(' / ') }}</span>
            <small>{{ vehicleGroupSummary(group).quantity }} 件 / {{ currency(vehicleGroupSummary(group).amount) }}</small>
            <ChevronDown :class="{ open: expandedVehicles.has(group.vehicle_no) }" :size="18" />
          </button>
          <template v-if="expandedVehicles.has(group.vehicle_no)">
            <div v-for="item in vehicleGroupItems(group)" :key="item.name" class="vehicle-item">
              <span>{{ item.name }}</span>
              <span>{{ item.quantity }} 件</span>
              <span>{{ currency(item.amount) }}</span>
              <span class="money-red">{{ currency(item.profit) }}</span>
            </div>
          </template>
        </section>
      </template>

      <template v-else>
        <section v-for="period in periodDefs" :key="period.key" class="edit-period">
          <div class="edit-period-title" :class="period.key">
            <h3>{{ period.label }}</h3>
            <button class="add-period-line" type="button" @click="addEditVehicle(period.key)">
              <PlusCircle :size="16" />
              添加车号
            </button>
          </div>
          <div class="edit-table">
            <div class="edit-head">
              <span>车号</span>
              <span>货物</span>
              <span>件数</span>
            </div>
            <template v-for="vehicle in editDraft[period.key]" :key="vehicle.id">
              <div
                v-for="(item, index) in vehicle.items"
                :key="`${vehicle.id}-${index}`"
                class="swipe-row"
                :class="{
                  'delete-open': openedDetailSwipeRow === rowKey(vehicle.id, index),
                  'move-open': openedDetailMoveSwipeRow === rowKey(vehicle.id, index),
                }"
                @touchstart.passive="startDetailSwipe(rowKey(vehicle.id, index), $event)"
                @touchend.passive="endDetailSwipe(rowKey(vehicle.id, index), index === 0, $event)"
              >
                <button class="swipe-move" v-if="index === 0" type="button" @click="openEditVehicleMove(period.key, vehicle)">
                  移动
                </button>
                <div class="edit-row" @click="closeDetailSwipeRows">
                  <div
                    class="vehicle-cell"
                    :class="{ empty: index !== 0, moving: movingEditVehicle?.vehicleId === vehicle.id }"
                  >
                    <template v-if="index === 0">
                      <button
                        v-if="editingDetailVehicleId !== vehicle.id"
                        class="vehicle-number"
                        type="button"
                        @click.stop="startDetailVehicleEdit(vehicle.id)"
                        @contextmenu.prevent
                      >
                        {{ vehicle.vehicle_no || '车号' }}
                      </button>
                      <input
                        v-else
                        v-model="vehicle.vehicle_no"
                        class="cell-input vehicle-input"
                        placeholder="车号"
                        @blur="finishDetailVehicleEdit"
                        @keydown.enter.prevent="finishDetailVehicleEdit"
                      />
                    </template>
                  </div>
                  <button class="product-picker-button" type="button" @click="openProductPicker(item)">
                    {{ productName(item.product_id) || '货物' }}
                  </button>
                  <label class="quantity-cell">
                    <input
                      v-model="item.quantity"
                      class="cell-input quantity-input"
                      type="number"
                      inputmode="numeric"
                      step="1"
                      min="0"
                      placeholder="0"
                      @input="normalizeQuantity(item)"
                    />
                  </label>
                  <div class="item-detail-row">
                    <span class="number-cell">金额 {{ previewItem(item).amount }}</span>
                    <span class="number-cell blue">利润 {{ previewItem(item).profit }}</span>
                    <button class="small-plus" type="button" title="给当前车号添加货物" @click="addEditItem(vehicle)">
                      <Plus :size="16" />
                    </button>
                  </div>
                </div>
                <button class="swipe-delete" type="button" @click="askRemoveEditItem(period.key, vehicle, index)">删除</button>
              </div>
            </template>
          </div>
        </section>
        <div class="detail-actions">
          <button class="ghost-button" type="button" :disabled="savingDetail" @click="cancelDetailEdit">取消</button>
          <button class="primary-button" type="button" :disabled="savingDetail" @click="saveDetailEdit">
            {{ savingDetail ? '保存中' : '保存修改' }}
          </button>
        </div>
      </template>

      <h3>备注 / 费用调整</h3>
      <div class="adjust-head">
        <span>名称</span>
        <span>+/-</span>
        <span>金额(元)</span>
        <span>操作</span>
      </div>
      <div v-for="(adjustment, index) in selectedOrder.adjustments" :key="index" class="adjust-row">
        <input v-model="adjustment.name" class="field" placeholder="请输入名称" />
        <select v-model="adjustment.type" class="select-field">
          <option value="plus">+</option>
          <option value="minus">-</option>
        </select>
        <input v-model="adjustment.amount" class="field" type="number" inputmode="decimal" placeholder="0.00" />
        <button class="icon-button danger" @click="selectedOrder.adjustments.splice(index, 1)">
          <Trash2 :size="17" />
        </button>
      </div>
      <button class="add-note" type="button" @click="selectedOrder.adjustments.push({ name: '', type: 'plus', amount: '0.00' })">
        + 添加备注
      </button>
      <button class="ghost-button save-adjust" type="button" @click="saveAdjustments(selectedOrder)">保存调整</button>
    </section>

    <div v-if="pendingDeleteEditItem" class="confirm-mask" @click.self="pendingDeleteEditItem = null">
      <section class="confirm-panel card">
        <h3>确认删除</h3>
        <p>确定删除「{{ pendingDeleteEditItem.productName }}」吗？如果该车号没有货物了，会自动删除这一条车号。</p>
        <div class="confirm-actions">
          <button class="ghost-button" type="button" @click="pendingDeleteEditItem = null">取消</button>
          <button class="danger-button" type="button" @click="confirmRemoveEditItem">确认删除</button>
        </div>
      </section>
    </div>

    <div v-if="movingEditVehicle" class="move-mask" @click.self="movingEditVehicle = null">
      <section class="move-panel card">
        <h3>移动车号 {{ movingEditVehicle.vehicleNo || '未填写' }}</h3>
        <div class="move-targets">
          <button
            v-for="period in periodDefs"
            :key="period.key"
            type="button"
            :class="period.key"
            :disabled="period.key === movingEditVehicle.from"
            @click="moveEditVehicleToPeriod(period.key)"
          >
            {{ period.label }}
          </button>
        </div>
        <button class="ghost-button" type="button" @click="movingEditVehicle = null">取消</button>
      </section>
    </div>

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
          <small>售价 {{ marketInfo(product)?.sale_price }} / 成本 {{ product.cost }} / 净果 {{ product.net_weight }} / 毛重 {{ product.gross_weight }}</small>
        </button>
        <EmptyState v-if="!filteredPickerProducts.length" text="没有匹配的货物" />
      </section>
    </div>
  </AppShell>
</template>

<script setup lang="ts">
import { ChevronDown, Plus, PlusCircle, Trash2 } from 'lucide-vue-next'
import { computed, onMounted, ref } from 'vue'
import { useRoute } from 'vue-router'

import { getOrdersByDate, saveOrder, updateAdjustments } from '@/api/orders'
import AppShell from '@/components/AppShell.vue'
import EmptyState from '@/components/EmptyState.vue'
import TopBar from '@/components/TopBar.vue'
import { useProductStore } from '@/stores/products'
import type { OrderDetail, OrderItemInput, OrderVehicle, Period, Product, Supermarket, VehicleDraft } from '@/types'
import { displayDateOnly, todayISO } from '@/utils/date'
import { marketName } from '@/utils/market'
import { currency, money, quantity as formatQuantity, toNumber } from '@/utils/money'

const route = useRoute()
const productStore = useProductStore()
const date = String(route.params.date)
const orders = ref<OrderDetail[]>([])
const selectedOrderId = ref<number | null>(null)
const expandedVehicles = ref(new Set<string>())
const editingOrderId = ref<number | null>(null)
const savingDetail = ref(false)
const detailError = ref('')
const pickingItem = ref<OrderItemInput | null>(null)
const productKeyword = ref('')
const pendingDeleteEditItem = ref<{ period: Period; vehicleId: string; itemIndex: number; productName: string } | null>(null)
const openedDetailSwipeRow = ref('')
const openedDetailMoveSwipeRow = ref('')
const detailSwipeStartX = ref<Record<string, number>>({})
const movingEditVehicle = ref<{ from: Period; vehicleId: string; vehicleNo: string } | null>(null)
const editingDetailVehicleId = ref('')

const periodDefs: { key: Period; label: string }[] = [
  { key: 'morning', label: '早' },
  { key: 'noon', label: '中' },
  { key: 'evening', label: '晚' },
]

const editDraft = ref(emptyEditDraft())

onMounted(async () => {
  await Promise.all([load(), productStore.fetchProducts()])
})

async function load() {
  orders.value = await getOrdersByDate(date)
  selectedOrderId.value = orderedOrders.value[0]?.id ?? null
}

function blankVehicle(period: Period): VehicleDraft {
  return {
    id: crypto.randomUUID(),
    period,
    vehicle_no: '',
    items: [{ product_id: '', quantity: '' }],
  }
}

function emptyEditDraft() {
  return Object.fromEntries(periodDefs.map((period) => [period.key, [blankVehicle(period.key)]])) as Record<Period, VehicleDraft[]>
}

function orderToDraft(order: OrderDetail) {
  const draft = emptyEditDraft()
  for (const vehicle of order.vehicles) {
    const period = vehicle.period as Period
    draft[period].push({
      id: crypto.randomUUID(),
      period,
      vehicle_no: vehicle.vehicle_no,
      items: vehicle.items.length
        ? vehicle.items.map((item) => ({ product_id: item.product_id || '', quantity: formatQuantity(item.quantity) }))
        : [{ product_id: '', quantity: '' }],
    })
  }
  for (const period of periodDefs) {
    draft[period.key] = draft[period.key].filter((vehicle) => vehicle.vehicle_no || vehicle.items.some((item) => item.product_id))
    if (!draft[period.key].length) draft[period.key] = [blankVehicle(period.key)]
  }
  return draft
}

function periodName(period: string) {
  const names: Record<string, string> = {
    morning: '早',
    noon: '中',
    evening: '晚',
  }
  return names[period] || period
}

const orderedOrders = computed(() => [...orders.value].sort((a, b) => a.supermarket.localeCompare(b.supermarket)))

const selectedOrder = computed(() => orderedOrders.value.find((order) => order.id === selectedOrderId.value) || orderedOrders.value[0])

const canEditDetail = computed(() => date !== todayISO() || selectedMarketHasLoaded())

const isEditingSelected = computed(() => Boolean(selectedOrder.value && editingOrderId.value === selectedOrder.value.id))

const marketProducts = computed(() => {
  if (!selectedOrder.value) return []
  return productStore.activeForMarket(selectedOrder.value.supermarket)
})

const groupedVehicles = computed(() => {
  if (!selectedOrder.value) return []
  const map = new Map<string, { vehicle_no: string; periods: Period[]; vehicles: OrderVehicle[] }>()
  const periodOrder: Period[] = ['morning', 'noon', 'evening']
  for (const vehicle of selectedOrder.value.vehicles) {
    const key = vehicle.vehicle_no || '未填写车号'
    const current = map.get(key) || { vehicle_no: key, periods: [], vehicles: [] }
    const period = vehicle.period as Period
    if (!current.periods.includes(period)) current.periods.push(period)
    current.vehicles.push(vehicle)
    map.set(key, current)
  }
  return [...map.values()].map((group) => ({
    ...group,
    periods: group.periods.sort((a, b) => periodOrder.indexOf(a) - periodOrder.indexOf(b)),
    vehicles: group.vehicles.sort((a, b) => periodOrder.indexOf(a.period as Period) - periodOrder.indexOf(b.period as Period)),
  })).sort((a, b) => {
    const aPeriod = Math.min(...a.periods.map((period) => periodOrder.indexOf(period)))
    const bPeriod = Math.min(...b.periods.map((period) => periodOrder.indexOf(period)))
    if (aPeriod !== bPeriod) return aPeriod - bPeriod
    return a.vehicle_no.localeCompare(b.vehicle_no, 'zh-Hans-CN', { numeric: true, sensitivity: 'base' })
  })
})

function toggleVehicle(vehicleNo: string) {
  const next = new Set(expandedVehicles.value)
  if (next.has(vehicleNo)) next.delete(vehicleNo)
  else next.add(vehicleNo)
  expandedVehicles.value = next
}

function vehicleGroupSummary(group: { vehicles: OrderVehicle[] }) {
  const items = group.vehicles.flatMap((vehicle) => vehicle.items)
  return {
    quantity: formatQuantity(items.reduce((sum, item) => sum + toNumber(item.quantity), 0)),
    amount: items.reduce((sum, item) => sum + toNumber(item.total_amount), 0),
  }
}

function vehicleGroupItems(group: { vehicles: OrderVehicle[] }) {
  const map = new Map<string, { name: string; quantity: number; amount: number; profit: number }>()
  for (const vehicle of group.vehicles) {
    for (const item of vehicle.items) {
      const current = map.get(item.product_name_snapshot) || {
        name: item.product_name_snapshot,
        quantity: 0,
        amount: 0,
        profit: 0,
      }
      current.quantity += toNumber(item.quantity)
      current.amount += toNumber(item.total_amount)
      current.profit += toNumber(item.total_profit)
      map.set(item.product_name_snapshot, current)
    }
  }
  return [...map.values()].map((item) => ({
    name: item.name,
    quantity: formatQuantity(item.quantity),
    amount: item.amount,
    profit: item.profit,
  }))
}

function aggregate(order: OrderDetail) {
  const map = new Map<string, { name: string; quantity: number; amount: number; profit: number; commission: number }>()
  for (const vehicle of order.vehicles) {
    for (const item of vehicle.items) {
      const current = map.get(item.product_name_snapshot) || {
        name: item.product_name_snapshot,
        quantity: 0,
        amount: 0,
        profit: 0,
        commission: 0,
      }
      current.quantity += toNumber(item.quantity)
      current.amount += toNumber(item.total_amount)
      current.profit += toNumber(item.total_profit)
      current.commission += toNumber(item.commission_price) * toNumber(item.quantity)
      map.set(item.product_name_snapshot, current)
    }
  }
  return [...map.values()].map((item) => ({
    name: item.name,
    quantity: formatQuantity(item.quantity),
    amount: money(item.amount),
    profit: money(item.profit),
    commission: money(item.commission),
  }))
}

function productTotals(order: OrderDetail) {
  const items = order.vehicles.flatMap((vehicle) => vehicle.items)
  return {
    quantity: formatQuantity(items.reduce((sum, item) => sum + toNumber(item.quantity), 0)),
    amount: money(items.reduce((sum, item) => sum + toNumber(item.total_amount), 0)),
    profit: money(items.reduce((sum, item) => sum + toNumber(item.total_profit), 0)),
    commission: money(items.reduce((sum, item) => sum + toNumber(item.commission_price) * toNumber(item.quantity), 0)),
  }
}

function orderCommission(order: OrderDetail) {
  return order.vehicles.reduce(
    (sum, vehicle) => sum + vehicle.items.reduce((itemSum, item) => itemSum + toNumber(item.commission_price) * toNumber(item.quantity), 0),
    0,
  )
}

const grandTotal = computed(() => ({
  amount: orders.value.reduce((sum, order) => sum + toNumber(order.total_amount), 0),
  income: orders.value.reduce((sum, order) => sum + orderIncome(order), 0),
  profit: orders.value.reduce((sum, order) => sum + toNumber(order.total_profit), 0),
  commission: orders.value.reduce((sum, order) => sum + orderCommission(order), 0),
}))

function orderIncome(order: OrderDetail) {
  return toNumber(order.total_amount) - orderCommission(order)
}

async function saveAdjustments(order: OrderDetail) {
  const cleaned = order.adjustments.filter((item) => item.name.trim())
  const updated = await updateAdjustments(order.id, cleaned)
  const index = orders.value.findIndex((item) => item.id === updated.id)
  if (index >= 0) orders.value[index] = updated
}

function selectOrder(orderId: number) {
  selectedOrderId.value = orderId
  cancelDetailEdit()
}

function startEditingSelected() {
  if (!selectedOrder.value) return
  detailError.value = ''
  editDraft.value = orderToDraft(selectedOrder.value)
  editingOrderId.value = selectedOrder.value.id
}

function cancelDetailEdit() {
  editingOrderId.value = null
  detailError.value = ''
  closeProductPicker()
}

function addEditVehicle(period: Period) {
  editDraft.value[period].push(blankVehicle(period))
}

function addEditItem(vehicle: VehicleDraft) {
  vehicle.items.push({ product_id: '', quantity: '' })
}

function removeEditVehicle(period: Period, vehicleId: string) {
  const list = editDraft.value[period]
  editDraft.value[period] = list.length > 1 ? list.filter((vehicle) => vehicle.id !== vehicleId) : [blankVehicle(period)]
}

function startDetailVehicleEdit(vehicleId: string) {
  if (openedDetailSwipeRow.value.startsWith(`${vehicleId}-`) || openedDetailMoveSwipeRow.value.startsWith(`${vehicleId}-`)) return
  editingDetailVehicleId.value = vehicleId
}

function finishDetailVehicleEdit() {
  editingDetailVehicleId.value = ''
}

function rowKey(vehicleId: string, itemIndex: number) {
  return `${vehicleId}-${itemIndex}`
}

function startDetailSwipe(key: string, event: TouchEvent) {
  detailSwipeStartX.value[key] = event.changedTouches[0]?.clientX || 0
}

function closeDetailSwipeRows() {
  openedDetailSwipeRow.value = ''
  openedDetailMoveSwipeRow.value = ''
}

function endDetailSwipe(key: string, canMove: boolean, event: TouchEvent) {
  const startX = detailSwipeStartX.value[key]
  const endX = event.changedTouches[0]?.clientX || 0
  const distance = endX - startX
  const isDeleteOpen = openedDetailSwipeRow.value === key
  const isMoveOpen = openedDetailMoveSwipeRow.value === key
  if (distance < -36) {
    if (isMoveOpen) {
      closeDetailSwipeRows()
      return
    }
    openedDetailSwipeRow.value = key
    openedDetailMoveSwipeRow.value = ''
    return
  }
  if (distance > 36 && canMove) {
    if (isDeleteOpen) {
      closeDetailSwipeRows()
      return
    }
    openedDetailMoveSwipeRow.value = key
    openedDetailSwipeRow.value = ''
    return
  }
  if (distance > 36 && !canMove && openedDetailSwipeRow.value === key) openedDetailSwipeRow.value = ''
}

function openEditVehicleMove(period: Period, vehicle: VehicleDraft) {
  movingEditVehicle.value = { from: period, vehicleId: vehicle.id, vehicleNo: vehicle.vehicle_no }
  closeDetailSwipeRows()
}

function moveEditVehicleToPeriod(targetPeriod: Period) {
  const moving = movingEditVehicle.value
  if (!moving || targetPeriod === moving.from) {
    movingEditVehicle.value = null
    return
  }
  const sourceList = editDraft.value[moving.from]
  const sourceIndex = sourceList.findIndex((vehicle) => vehicle.id === moving.vehicleId)
  if (sourceIndex < 0) {
    movingEditVehicle.value = null
    return
  }
  const [vehicle] = sourceList.splice(sourceIndex, 1)
  vehicle.period = targetPeriod
  const targetList = editDraft.value[targetPeriod]
  const onlyBlankTarget = targetList.length === 1 && !targetList[0].vehicle_no && !targetList[0].items.some((item) => item.product_id || item.quantity)
  if (onlyBlankTarget) targetList.splice(0, 1, vehicle)
  else targetList.push(vehicle)
  if (!sourceList.length) sourceList.push(blankVehicle(moving.from))
  movingEditVehicle.value = null
  closeDetailSwipeRows()
}

function askRemoveEditItem(period: Period, vehicle: VehicleDraft, itemIndex: number) {
  const item = vehicle.items[itemIndex]
  pendingDeleteEditItem.value = {
    period,
    vehicleId: vehicle.id,
    itemIndex,
    productName: productName(item.product_id) || '未选择货物',
  }
}

function confirmRemoveEditItem() {
  const target = pendingDeleteEditItem.value
  if (!target) return
  const vehicle = editDraft.value[target.period].find((item) => item.id === target.vehicleId)
  if (vehicle) {
    if (vehicle.items.length > 1) {
      vehicle.items.splice(target.itemIndex, 1)
    } else {
      removeEditVehicle(target.period, target.vehicleId)
    }
  }
  closeDetailSwipeRows()
  pendingDeleteEditItem.value = null
}

function findProduct(productId: number | ''): Product | undefined {
  if (!productId) return undefined
  return productStore.products.find((product) => product.id === Number(productId))
}

function productName(productId: number | '') {
  return findProduct(productId)?.name || ''
}

function marketInfo(product: Product) {
  return product.supermarkets.find((entry) => entry.supermarket === selectedOrder.value?.supermarket)
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
  if (toNumber(pickingItem.value.quantity) <= 0) pickingItem.value.quantity = '1'
  closeProductPicker()
}

function normalizeQuantity(item: OrderItemInput) {
  const value = Math.max(0, Math.round(toNumber(item.quantity)))
  item.quantity = value ? String(value) : ''
}

function previewItem(item: OrderItemInput) {
  const product = findProduct(item.product_id)
  const market = selectedOrder.value ? product?.supermarkets.find((entry) => entry.supermarket === selectedOrder.value?.supermarket) : undefined
  if (!product || !market) return { amount: '0.00', profit: '0.00' }
  const quantity = toNumber(item.quantity)
  const unitProfit = toNumber(market.sale_price) - toNumber(product.cost) - toNumber(market.commission_price)
  return {
    amount: money(quantity * (toNumber(market.sale_price) - toNumber(market.commission_price))),
    profit: money(quantity * unitProfit),
  }
}

async function saveDetailEdit() {
  if (!selectedOrder.value) return
  savingDetail.value = true
  detailError.value = ''
  try {
    const updated = await saveOrder(date, selectedOrder.value.supermarket, Object.values(editDraft.value).flat())
    const index = orders.value.findIndex((order) => order.id === updated.id || order.supermarket === updated.supermarket)
    if (index >= 0) orders.value[index] = updated
    else orders.value.push(updated)
    selectedOrderId.value = updated.id
    editingOrderId.value = null
  } catch (err) {
    detailError.value = err instanceof Error ? err.message : '保存修改失败'
  } finally {
    savingDetail.value = false
  }
}

function selectedMarketHasLoaded() {
  if (!selectedOrder.value) return false
  const raw = localStorage.getItem(`dcgy_order_loaded_${date}`)
  if (!raw) return false
  try {
    const loaded = JSON.parse(raw) as Record<string, Record<string, boolean>>
    return Object.values(loaded[selectedOrder.value.supermarket] || {}).some(Boolean)
  } catch {
    return false
  }
}
</script>

<style scoped>
.detail-card {
  margin-bottom: 12px;
  padding: 14px;
}

.top-total {
  margin-bottom: 10px;
  border-color: rgba(0, 113, 227, 0.35);
}

.market-tabs {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 8px;
  margin-bottom: 12px;
}

.market-tab {
  display: grid;
  gap: 6px;
  min-width: 0;
  min-height: 118px;
  padding: 10px;
  color: var(--text);
  text-align: left;
  background: #fff;
  border: 1px solid var(--line);
  border-radius: 12px;
  transition: background 0.18s ease, border-color 0.18s ease, box-shadow 0.18s ease, opacity 0.18s ease;
}

.market-tab.active {
  background: linear-gradient(180deg, rgba(0, 113, 227, 0.16), rgba(0, 113, 227, 0.06));
  border-color: var(--accent);
  border-width: 2px;
  box-shadow: 0 8px 22px rgba(0, 113, 227, 0.18);
}

.market-tab:not(.active) {
  opacity: 0.72;
}

.market-tab strong {
  color: var(--accent);
  font-size: 15px;
  text-align: center;
}

.market-tab.active strong {
  justify-self: center;
  min-width: 78px;
  padding: 4px 12px;
  color: #fff;
  background: var(--accent);
  border-radius: 999px;
}

.market-tab span {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 6px;
  min-width: 0;
  font-size: 12px;
}

.market-tab small {
  color: var(--muted);
}

.market-tab b {
  overflow: hidden;
  min-width: 0;
  font-size: 13px;
  text-align: right;
  text-overflow: ellipsis;
  white-space: nowrap;
}

h2,
h3 {
  margin: 0 0 10px;
  font-size: 17px;
}

.section-title {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
  margin-bottom: 8px;
}

.section-title h2 {
  margin: 0;
}

.edit-button {
  min-height: 38px;
  padding: 0 14px;
}

h3 {
  margin-top: 18px;
}

.detail-head,
.detail-row {
  display: grid;
  grid-template-columns: 1.2fr 0.6fr 0.9fr 0.9fr 0.9fr;
  align-items: center;
  min-height: 34px;
  gap: 6px;
  font-size: 13px;
}

.detail-head {
  font-weight: 700;
}

.detail-row {
  border-top: 1px solid var(--line);
}

.total {
  font-weight: 700;
}

.vehicle-block {
  margin-bottom: 10px;
  overflow: hidden;
  border: 1px solid var(--line);
  border-radius: 14px;
}

.vehicle-header {
  display: grid;
  grid-template-columns: 1fr 36px 1.2fr 22px;
  align-items: center;
  width: 100%;
  min-height: 40px;
  padding: 0 10px;
  color: var(--text);
  text-align: left;
  background: rgba(0, 113, 227, 0.07);
}

.vehicle-header span {
  color: var(--accent);
  font-weight: 700;
}

.vehicle-header small {
  color: var(--muted);
  text-align: right;
}

.vehicle-header svg {
  justify-self: end;
  color: var(--muted);
  transition: transform 0.2s ease;
}

.vehicle-header svg.open {
  transform: rotate(180deg);
}

.vehicle-item {
  display: grid;
  grid-template-columns: 1.1fr 0.8fr 1fr 1fr;
  align-items: center;
  min-height: 36px;
  gap: 6px;
  padding: 0 10px;
  font-size: 13px;
  border-top: 1px solid var(--line);
}

.edit-period {
  margin-top: 12px;
  overflow: hidden;
  border: 1px solid var(--line);
  border-radius: 14px;
}

.edit-period-title {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
  padding: 8px 10px;
}

.edit-period-title h3 {
  margin: 0;
}

.edit-period-title.morning {
  background: var(--morning-bg);
}

.edit-period-title.noon {
  background: var(--noon-bg);
}

.edit-period-title.evening {
  background: var(--evening-bg);
}

.add-period-line {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-height: 34px;
  gap: 4px;
  padding: 0 10px;
  color: var(--accent);
  font-size: 13px;
  font-weight: 700;
  background: rgba(0, 113, 227, 0.08);
  border-radius: 10px;
}

.edit-table {
  padding: 8px;
}

.edit-head,
.edit-row {
  display: grid;
  grid-template-columns: 92px minmax(0, 1fr) 58px;
  grid-template-areas:
    "vehicle product quantity"
    "vehicle detail detail";
  align-items: center;
  column-gap: 6px;
  row-gap: 3px;
}

.edit-head {
  min-height: 30px;
  font-size: 12px;
  font-weight: 700;
  color: var(--text);
  text-align: left;
}

.edit-head {
  grid-template-areas: "vehicle product quantity";
}

.edit-head span:nth-child(1) {
  grid-area: vehicle;
}

.edit-head span:nth-child(2) {
  grid-area: product;
}

.edit-head span:nth-child(3) {
  grid-area: quantity;
  text-align: center;
}

.swipe-row {
  position: relative;
  overflow: hidden;
  border-top: 1px solid var(--line);
  touch-action: pan-y;
}

.swipe-row .edit-row {
  position: relative;
  z-index: 1;
  width: 100%;
  background: var(--surface);
  transition: transform 0.18s ease;
}

.swipe-row.delete-open .edit-row {
  transform: translateX(-72px);
}

.swipe-row.move-open .edit-row {
  transform: translateX(72px);
}

.swipe-move,
.swipe-delete {
  position: absolute;
  top: 0;
  bottom: 0;
  z-index: 0;
  width: 72px;
  color: #fff;
  font-size: 13px;
  font-weight: 800;
  background: var(--danger);
  transition: right 0.18s ease;
}

.swipe-move {
  left: -72px;
  background: var(--accent);
  transition: left 0.18s ease;
}

.swipe-delete {
  right: -72px;
}

.swipe-row.move-open .swipe-move {
  left: 0;
}

.swipe-row.delete-open .swipe-delete {
  right: 0;
}

.edit-row {
  min-height: 52px;
  padding: 5px 6px;
}

.cell-input {
  width: 100%;
  min-height: 30px;
  padding: 0 6px;
  font-size: 12px;
  text-align: center;
  color: var(--text);
  background: #fff;
  border: 1px solid var(--line);
  border-radius: 9px;
  outline: none;
}

.vehicle-cell {
  grid-area: vehicle;
  display: flex;
  align-items: center;
  min-width: 0;
  min-height: 36px;
}

.vehicle-cell.empty {
  display: none;
}

.vehicle-cell.moving .vehicle-input {
  border-color: rgba(0, 113, 227, 0.55);
  box-shadow: 0 0 0 3px rgba(0, 113, 227, 0.12);
}

.vehicle-cell.moving .vehicle-number {
  border-color: rgba(0, 113, 227, 0.55);
  box-shadow: 0 0 0 3px rgba(0, 113, 227, 0.12);
}

.vehicle-number {
  width: 100%;
  min-height: 32px;
  padding: 0 6px;
  color: #111;
  font-size: 15px;
  font-weight: 800;
  text-align: center;
  background: #fff;
  border: 1px solid var(--line);
  border-radius: 9px;
  user-select: none;
  -webkit-user-select: none;
  -webkit-touch-callout: none;
}

.vehicle-input {
  color: #111;
  font-size: 15px;
  font-weight: 800;
}

.product-picker-button {
  grid-area: product;
  width: 100%;
  min-height: 30px;
  padding: 4px 8px;
  overflow-wrap: anywhere;
  color: var(--text);
  font-size: 12px;
  font-weight: 700;
  line-height: 1.35;
  text-align: left;
  white-space: normal;
  background: #fff;
  border: 1px solid var(--line);
  border-radius: 10px;
}

.quantity-cell {
  grid-area: quantity;
  display: block;
  min-width: 0;
}

.quantity-input {
  font-size: 14px;
  font-weight: 700;
}

.item-detail-row {
  grid-area: detail;
  display: grid;
  grid-template-columns: minmax(0, 1fr) minmax(0, 1fr) 30px;
  align-items: center;
  gap: 4px;
  min-height: 22px;
}

.number-cell {
  overflow: hidden;
  min-height: 24px;
  padding: 0 2px;
  color: var(--text);
  font-size: 11px;
  line-height: 24px;
  text-align: left;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.blue {
  color: var(--accent);
}

.sub-vehicle {
  min-height: 34px;
}

.small-plus {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 26px;
  color: var(--accent);
  background: rgba(0, 113, 227, 0.08);
  border-radius: 9px;
}

.detail-actions {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 8px;
  margin-top: 12px;
}

.confirm-mask {
  position: fixed;
  inset: 0;
  z-index: 40;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 18px;
  background: rgba(0, 0, 0, 0.46);
}

.confirm-panel {
  display: grid;
  width: min(100%, 360px);
  gap: 12px;
  padding: 18px;
  background: #fff;
  border-color: rgba(29, 29, 31, 0.16);
  box-shadow: 0 16px 46px rgba(0, 0, 0, 0.22);
}

.confirm-panel h3,
.confirm-panel p {
  margin: 0;
}

.confirm-panel p {
  color: var(--text);
  font-size: 14px;
  line-height: 1.6;
}

.confirm-actions {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 10px;
}

.move-mask {
  position: fixed;
  inset: 0;
  z-index: 42;
  display: flex;
  align-items: flex-end;
  justify-content: center;
  padding: 16px;
  background: rgba(0, 0, 0, 0.42);
}

.move-panel {
  display: grid;
  width: min(100%, 380px);
  gap: 12px;
  padding: 16px;
  background: #fff;
  border-color: rgba(29, 29, 31, 0.16);
  box-shadow: 0 16px 46px rgba(0, 0, 0, 0.22);
}

.move-panel h3 {
  margin: 0;
  font-size: 16px;
}

.move-targets {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 8px;
}

.move-targets button {
  min-height: 44px;
  color: var(--text);
  font-weight: 800;
  border-radius: 12px;
}

.move-targets .morning {
  background: var(--morning-bg);
}

.move-targets .noon {
  background: var(--noon-bg);
}

.move-targets .evening {
  background: var(--evening-bg);
}

.move-targets button:disabled {
  color: var(--muted);
  opacity: 0.55;
}

.detail-actions button {
  width: 100%;
}

.adjust-head,
.adjust-row {
  display: grid;
  grid-template-columns: 1.2fr 62px 1fr 44px;
  align-items: center;
  gap: 6px;
  min-height: 44px;
}

.adjust-head {
  font-size: 13px;
  font-weight: 700;
}

.danger {
  color: var(--danger);
}

.add-note {
  min-height: 40px;
  color: var(--accent);
  background: transparent;
}

.save-adjust {
  width: 100%;
}

.detail-total {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  padding: 14px;
  text-align: center;
}

.detail-total div {
  display: grid;
  gap: 8px;
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
  .edit-head,
  .edit-row {
    grid-template-columns: 84px minmax(0, 1fr) 52px;
    column-gap: 5px;
  }

  .item-detail-row {
    grid-template-columns: minmax(0, 1fr) minmax(0, 1fr) 28px;
  }

  .cell-input,
  .number-cell,
  .product-picker-button {
    font-size: 11px;
  }
}
</style>
