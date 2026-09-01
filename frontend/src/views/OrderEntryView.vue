<template>
  <AppShell>
    <div class="entry-sticky">
      <TopBar :title="displayDate(store.currentDate)">
        <template #right>
          <div class="topbar-actions">
            <button class="refresh-button" type="button" title="刷新同步" :disabled="refreshing" @click="refreshOrders">
              <RefreshCw :size="18" :class="{ spinning: refreshing }" />
            </button>
            <input v-model="store.currentDate" class="date-input" type="date" @change="changeDate" />
          </div>
        </template>
      </TopBar>

      <div class="segmented">
        <button :class="{ active: store.currentSupermarket === 'supermarket_1' }" @click="switchMarket('supermarket_1')">般果</button>
        <button :class="{ active: store.currentSupermarket === 'supermarket_2' }" @click="switchMarket('supermarket_2')">昱禾</button>
      </div>
    </div>

    <div v-if="error" class="toast">{{ error }}</div>

    <section v-if="store.currentSupermarket === 'supermarket_2'" class="yhlc-delivery-card card">
      <button class="yhlc-delivery-toggle" type="button" @click="toggleYhlcPanel">
        <span>
          <strong>昱禾送货单</strong>
          <small>{{ yhlcPanelSummary }}</small>
        </span>
        <ChevronDown :size="18" :class="{ expanded: yhlcExpanded }" />
      </button>

      <div v-if="yhlcExpanded" class="yhlc-delivery-body">
        <div class="yhlc-login-grid">
          <label>
            账号
            <input v-model.trim="yhlcUsername" class="field" autocomplete="username" placeholder="手机号或账号" />
          </label>
          <label>
            密码
            <input v-model="yhlcPassword" class="field" type="password" autocomplete="current-password" placeholder="登录密码" />
          </label>
          <label>
            验证码
            <div class="yhlc-captcha-line">
              <input v-model.trim="yhlcCaptchaCode" class="field" maxlength="8" placeholder="验证码" />
              <button class="yhlc-captcha-image" type="button" :disabled="yhlcCaptchaLoading" @click="() => loadYhlcCaptcha()">
                <img v-if="yhlcCaptchaImage" :src="yhlcCaptchaImage" alt="验证码" />
                <RefreshCw v-else :size="16" :class="{ spinning: yhlcCaptchaLoading }" />
              </button>
            </div>
          </label>
          <button class="ghost-button yhlc-login-button" type="button" :disabled="yhlcLoginLoading" @click="loginYhlc">
            {{ yhlcLoginLoading ? '登录中' : '登录获取 token' }}
          </button>
          <button class="ghost-button yhlc-save-button" type="button" @click="saveYhlcSession">
            {{ yhlcSessionSaved ? '保存成功' : '保存账号、密码、token' }}
          </button>
        </div>

        <div class="yhlc-query-grid">
          <label>
            token
            <input v-model.trim="yhlcToken" class="field" type="text" autocomplete="off" placeholder="登录后自动填入" />
          </label>
          <label>
            查询日期
            <input v-model="yhlcDeliveryDate" class="field" type="date" />
          </label>
          <label>
            商品
            <input v-model.trim="yhlcProductName" class="field" placeholder="可选" />
          </label>
          <label class="yhlc-check-line"><input v-model="yhlcOnlyPending" type="checkbox" /> 只看待发货</label>
          <button class="primary-button yhlc-fetch-button" type="button" :disabled="yhlcDeliveryLoading" @click="loadYhlcDelivery">
            {{ yhlcFetchButtonText }}
          </button>
        </div>

        <div v-if="yhlcError" class="yhlc-error" role="alert">{{ yhlcError }}</div>
        <div v-if="yhlcSessionSaved" class="yhlc-success">账号、密码和 token 已保存到本机</div>
        <div v-if="yhlcNotice" class="yhlc-success">{{ yhlcNotice }}</div>

        <div v-if="yhlcResult" class="yhlc-stats">
          <div><span>送货单</span><strong>{{ yhlcResult.orders.length }}</strong></div>
          <div><span>商品行</span><strong>{{ yhlcResult.items.length }}</strong></div>
          <div><span>总数量</span><strong>{{ yhlcTotalQuantity }}</strong></div>
        </div>

        <EmptyState v-if="yhlcResult && !yhlcOrderGroups.length" :text="yhlcEmptyText" />

        <div v-for="group in yhlcOrderGroups" :key="group.supplier_name" class="yhlc-order">
          <div class="yhlc-order-title">
            <strong>{{ group.supplier_name || '未命名供应商' }}</strong>
            <span>{{ group.orders.length }}张单</span>
          </div>
          <div class="yhlc-table">
            <div class="yhlc-table-head">
              <span>商品名称</span>
              <span>状态</span>
              <span>数量</span>
              <span>车位</span>
              <span>拍子</span>
            </div>
            <template v-for="(order, orderIndex) in group.orders" :key="order.order_id">
              <template v-for="(item, itemIndex) in order.items" :key="`${order.order_id}-${itemIndex}`">
                <div
                  class="yhlc-table-row"
                  :class="{ expanded: expandedYhlcItemKey === yhlcItemKey(order.order_id, itemIndex) }"
                  role="button"
                  tabindex="0"
                  @click="toggleYhlcItem(order.order_id, itemIndex, item)"
                  @keydown.enter.prevent="toggleYhlcItem(order.order_id, itemIndex, item)"
                >
                  <strong>{{ item.product_name }}</strong>
                  <span>
                    <mark class="yhlc-import-status" :class="{ imported: isYhlcItemImported(item, yhlcItemKey(order.order_id, itemIndex)) }">
                      {{ yhlcImportStatusText(item, yhlcItemKey(order.order_id, itemIndex)) }}
                    </mark>
                  </span>
                  <span>{{ formatYhlcQuantity(item.quantity) }}</span>
                  <span>{{ item.car_no }}</span>
                  <span>{{ item.pz_no }}</span>
                </div>
                <div v-if="expandedYhlcItemKey === yhlcItemKey(order.order_id, itemIndex)" class="yhlc-match-panel">
                  <label>
                    匹配库存
                    <button class="yhlc-inventory-picker-button" type="button" @click="openYhlcInventoryPicker(item, yhlcItemKey(order.order_id, itemIndex))">
                      {{ selectedYhlcProductName(yhlcItemKey(order.order_id, itemIndex)) || '选择库存商品' }}
                    </button>
                  </label>
                  <div class="yhlc-import-targets">
                    <button
                      v-for="period in periodDefs"
                      :key="period.key"
                      type="button"
                      :class="period.key"
                      :disabled="store.isPeriodLoaded(period.key)"
                      @click="openYhlcImportConfirm(item, yhlcItemKey(order.order_id, itemIndex), period.key)"
                    >
                      导入{{ yhlcImportPeriodLabel(period.key) }}
                    </button>
                  </div>
                </div>
              </template>
              <div v-if="orderIndex < group.orders.length - 1" class="yhlc-order-separator" aria-hidden="true"></div>
            </template>
          </div>
        </div>
      </div>
    </section>

    <section v-for="period in periodDefs" :key="period.key" class="period-section card" :class="{ loaded: store.isPeriodLoaded(period.key) }">
      <div class="period-title" :class="period.key">
        <h2>{{ period.label }}</h2>
        <input
          v-if="editingVehicleHint === period.key"
          v-model="vehicleHintDraft"
          class="vehicle-hint-input"
          :disabled="store.isPeriodLoaded(period.key)"
          @blur="finishEditVehicleHint(period.key)"
          @keydown.enter.prevent="finishEditVehicleHint(period.key)"
          @keydown.esc.prevent="cancelEditVehicleHint"
        />
        <span
          v-else
          class="vehicle-hint"
          :class="{ disabled: store.isPeriodLoaded(period.key) }"
          :title="store.isPeriodLoaded(period.key) ? '车辆备注' : '车辆备注，双击编辑'"
          @dblclick="startEditVehicleHint(period.key)"
        >
          {{ vehicleHint(period.key) }}
        </span>
        <button
          class="loaded-button"
          type="button"
          :disabled="saving || autoSaving || store.isPeriodLoaded(period.key)"
          @click="markLoaded(period.key)"
        >
          {{ store.isPeriodLoaded(period.key) ? '已装车' : '装车成功' }}
        </button>
      </div>
      <div class="order-table">
        <div class="table-head">
          <span>车号</span>
          <span>货物</span>
          <span>件数</span>
        </div>
        <template v-for="vehicle in sortedVehicles(period.key)" :key="vehicle.id">
          <section class="vehicle-group">
          <div
            v-for="(item, index) in vehicle.items"
            :key="`${vehicle.id}-${index}`"
            class="swipe-row"
            :class="{
              'delete-open': openedSwipeRow === rowKey(vehicle.id, index),
              'move-open': openedMoveSwipeRow === rowKey(vehicle.id, index),
            }"
            @touchstart.passive="startSwipe(period.key, rowKey(vehicle.id, index), $event)"
            @touchend.passive="endSwipe(period.key, rowKey(vehicle.id, index), index === 0, $event)"
          >
            <button
              v-if="index === 0 && !store.isPeriodLoaded(period.key)"
              class="swipe-move"
              type="button"
              @click="openVehicleMove(period.key, vehicle)"
            >
              移动
            </button>
            <div class="table-row" :class="{ first: index === 0, last: index === vehicle.items.length - 1 }" @click="closeSwipeRows">
              <div
                class="vehicle-cell"
                :class="{ empty: index !== 0, moving: movingVehicle?.vehicleId === vehicle.id }"
              >
                <template v-if="index === 0">
                  <button
                    class="check-button"
                    type="button"
                    :class="{ checked: isVehicleChecked(period.key, vehicle) }"
                    :aria-label="store.isPeriodLoaded(period.key) ? '已装车' : isVehicleChecked(period.key, vehicle) ? '取消勾选车号' : '勾选车号'"
                    :disabled="store.isPeriodLoaded(period.key)"
                    @click="store.toggleVehicleChecked(vehicle)"
                  >
                    <Check v-if="isVehicleChecked(period.key, vehicle)" :size="16" />
                  </button>
                  <button
                    v-if="editingVehicleId !== vehicle.id"
                    class="vehicle-number"
                    type="button"
                    :disabled="store.isPeriodLoaded(period.key)"
                    @click.stop="startVehicleEdit(vehicle.id)"
                    @contextmenu.prevent
                  >
                    {{ vehicle.vehicle_no || '车号' }}
                  </button>
                  <input
                    v-else
                    v-model="vehicle.vehicle_no"
                    class="cell-input vehicle-input"
                    placeholder="车号"
                    :disabled="store.isPeriodLoaded(period.key)"
                    @blur="finishVehicleEdit"
                    @keydown.enter.prevent="finishVehicleEdit"
                    @input="store.persistLocalDraft"
                  />
                </template>
              </div>
              <button
                class="product-picker-button"
                type="button"
                :disabled="store.isPeriodLoaded(period.key)"
                @click="openProductPicker(item)"
              >
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
                  :disabled="store.isPeriodLoaded(period.key)"
                  @input="normalizeQuantity(item)"
                />
              </label>
              <div class="item-detail-row">
                <span class="number-cell">金额 {{ previewItem(item).amount }}</span>
                <span class="number-cell">利润 {{ previewItem(item).profit }}</span>
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
            </div>
            <button
              v-if="!store.isPeriodLoaded(period.key)"
              class="swipe-delete"
              type="button"
              @click="askRemoveItem(period.key, vehicle, index)"
            >
              删除
            </button>
          </div>
          </section>
        </template>
        <button
          v-if="!store.isPeriodLoaded(period.key)"
          class="add-line"
          type="button"
          @click="store.addVehicle(period.key)"
        >
          <Plus :size="16" />
          添加一条
        </button>
      </div>
      <div v-if="store.isPeriodLoaded(period.key)" class="loaded-tip">已装车成功，如需修改请到订单详情编辑。</div>
    </section>

    <div class="save-bar card">
      <div>
        <span>收入金额：</span>
        <strong>{{ currency(totalIncome) }}</strong>
      </div>
      <div>
        <span>总抽佣：</span>
        <strong>{{ currency(totalCommission) }}</strong>
      </div>
      <div>
        <span>总利润：</span>
        <strong class="money-red">{{ currency(totalProfit) }}</strong>
      </div>
      <button class="primary-button" type="button" :disabled="saving || autoSaving" @click="save">
        {{ autoSaving ? '自动保存中' : saving ? '保存中' : '保存' }}
      </button>
    </div>
    <div class="save-bar-spacer" aria-hidden="true"></div>

    <div v-if="pendingDeleteItem" class="confirm-mask" @click.self="pendingDeleteItem = null">
      <section class="confirm-panel card">
        <h3>确认删除</h3>
        <p>确定删除「{{ pendingDeleteItem.productName }}」吗？如果该车号没有货物了，会自动删除这一条车号。</p>
        <div class="confirm-actions">
          <button class="ghost-button" type="button" @click="pendingDeleteItem = null">取消</button>
          <button class="danger-button" type="button" @click="confirmRemoveItem">确认删除</button>
        </div>
      </section>
    </div>

    <div v-if="movingVehicle" class="move-mask" @click.self="movingVehicle = null">
      <section class="move-panel card">
        <h3>移动车号 {{ movingVehicle.vehicleNo || '未填写' }}</h3>
        <div class="move-targets">
          <button
            v-for="period in periodDefs"
            :key="period.key"
            type="button"
            :class="period.key"
            :disabled="period.key === movingVehicle.from"
            @click="moveVehicleToPeriod(period.key)"
          >
            {{ period.label }}
          </button>
        </div>
        <button class="ghost-button" type="button" @click="movingVehicle = null">取消</button>
      </section>
    </div>

    <div v-if="pendingYhlcImport" class="confirm-mask" @click.self="pendingYhlcImport = null">
      <section class="confirm-panel card">
        <h3>确认导入</h3>
        <p>
          确认把「{{ pendingYhlcImport.productName }}」{{ pendingYhlcImport.quantity }} 件导入到{{
            yhlcImportPeriodLabel(pendingYhlcImport.period)
          }}，车位 {{ pendingYhlcImport.item.car_no }}，拍子 {{ pendingYhlcImport.item.pz_no }}？
        </p>
        <div class="confirm-actions">
          <button class="ghost-button" type="button" @click="pendingYhlcImport = null">取消</button>
          <button class="primary-button" type="button" @click="confirmYhlcImport">确认导入</button>
        </div>
      </section>
    </div>

    <div v-if="yhlcInventoryPicker" class="picker-mask" @click.self="closeYhlcInventoryPicker">
      <section class="picker-panel card">
        <header>
          <strong>匹配库存</strong>
          <button type="button" @click="closeYhlcInventoryPicker">取消</button>
        </header>
        <input v-model="yhlcInventoryPickerKeyword" class="field" placeholder="搜索库存名称" autofocus />
        <button
          v-for="product in filteredYhlcPickerProducts"
          :key="product.id"
          class="picker-option"
          type="button"
          @click="selectYhlcInventoryProduct(product)"
        >
          <span>{{ product.name }}</span>
          <small>
            售价 {{ marketInfo(product)?.sale_price }} / 成本 {{ product.cost }} / 净果 {{ product.net_weight }} / 毛重 {{ product.gross_weight }}
          </small>
        </button>
        <EmptyState v-if="!filteredYhlcPickerProducts.length" text="没有匹配的库存" />
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
          <small>
            售价 {{ marketInfo(product)?.sale_price }} / 成本 {{ product.cost }} / 净果 {{ product.net_weight }} / 毛重 {{ product.gross_weight }}
          </small>
        </button>
        <EmptyState v-if="!filteredPickerProducts.length" text="没有匹配的货物" />
      </section>
    </div>
  </AppShell>
</template>

<script setup lang="ts">
import { Check, ChevronDown, Plus, RefreshCw } from 'lucide-vue-next'
import { computed, onBeforeUnmount, onMounted, watch } from 'vue'
import { ref } from 'vue'
import { useRoute } from 'vue-router'

import { getTodayYhlcDelivery, getYhlcCaptcha, loginYhlcAccount, type YhlcDeliveryItem, type YhlcDeliveryResult } from '@/api/yhlcDelivery'
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
const autoSaving = ref(false)
const refreshing = ref(false)
const hydrating = ref(true)
const error = ref('')
const pickingItem = ref<OrderItemInput | null>(null)
const productKeyword = ref('')
const pendingDeleteItem = ref<{ period: Period; vehicleId: string; itemIndex: number; productName: string } | null>(null)
const editingVehicleHint = ref<Period | null>(null)
const vehicleHintDraft = ref('')
const openedSwipeRow = ref('')
const openedMoveSwipeRow = ref('')
const swipeStartX = ref<Record<string, number>>({})
const movingVehicle = ref<{ from: Period; vehicleId: string; vehicleNo: string } | null>(null)
const editingVehicleId = ref('')
const frozenVehicleOrder = ref<Partial<Record<Period, string[]>>>({})
const yhlcExpanded = ref(false)
const yhlcUsername = ref('')
const yhlcPassword = ref('')
const yhlcCaptchaCode = ref('')
const yhlcCaptchaUuid = ref('')
const yhlcCaptchaImage = ref('')
const yhlcToken = ref('')
const yhlcProductName = ref('')
const yhlcDeliveryDate = ref('')
const yhlcOnlyPending = ref(true)
const yhlcCaptchaLoading = ref(false)
const yhlcLoginLoading = ref(false)
const yhlcDeliveryLoading = ref(false)
const yhlcError = ref('')
const yhlcSessionSaved = ref(false)
const yhlcNotice = ref('')
const yhlcResult = ref<YhlcDeliveryResult | null>(null)
const yhlcDeliveryCacheHit = ref(false)
const expandedYhlcItemKey = ref('')
const selectedYhlcProductIds = ref<Record<string, number | ''>>({})
const yhlcInventoryPicker = ref<{ item: YhlcDeliveryItem; key: string } | null>(null)
const yhlcInventoryPickerKeyword = ref('')
const pendingYhlcImport = ref<{
  item: YhlcDeliveryItem
  key: string
  period: Period
  productId: number
  productName: string
  vehicleNo: string
  quantity: string
} | null>(null)

const periodDefs: { key: Period; label: string }[] = [
  { key: 'morning', label: '早' },
  { key: 'noon', label: '中' },
  { key: 'evening', label: '晚' },
]

const defaultVehicleHints: Record<Period, string> = {
  morning: '2 / 12 / 30',
  noon: '除 2 / 5 / 12 / 13 / 14 / 30 外',
  evening: '5 / 13 / 14',
}

const markets: Supermarket[] = ['supermarket_1', 'supermarket_2']

function emptyVehicleHints() {
  return Object.fromEntries(markets.map((market) => [market, { ...defaultVehicleHints }])) as Record<
    Supermarket,
    Record<Period, string>
  >
}

const vehicleHints = ref<Record<Supermarket, Record<Period, string>>>(emptyVehicleHints())

const draft = computed(() => store.drafts[store.currentSupermarket])
const marketProducts = computed(() => productStore.activeForMarket(store.currentSupermarket))
const yhlcOrders = computed(() => yhlcResult.value?.orders ?? [])
const yhlcOrderGroups = computed(() => {
  const groups = new Map<string, { supplier_name: string; orders: typeof yhlcOrders.value }>()
  for (const order of yhlcOrders.value) {
    const supplierName = order.supplier_name || '未命名供应商'
    const group = groups.get(supplierName)
    if (group) group.orders.push(order)
    else groups.set(supplierName, { supplier_name: supplierName, orders: [order] })
  }
  return [...groups.values()]
})
const yhlcTotalQuantity = computed(() => formatYhlcQuantity((yhlcResult.value?.items ?? []).reduce((sum, item) => sum + item.quantity, 0)))
const yhlcEmptyText = computed(() => (yhlcOnlyPending.value ? '暂无当日待送货商品' : '暂无当日送货单商品'))
const yhlcPanelSummary = computed(() => {
  if (yhlcDeliveryLoading.value) return '正在获取'
  if (yhlcResult.value) return `${yhlcResult.value.orders.length}张单 / ${yhlcResult.value.items.length}项${yhlcDeliveryCacheHit.value ? '（已保存）' : ''}`
  return '点击展开'
})
const yhlcFetchButtonText = computed(() => {
  if (yhlcDeliveryLoading.value) return '获取中'
  return yhlcDeliveryCacheHit.value ? '重新获取送货单' : '获取当日送货单'
})
const filteredYhlcPickerProducts = computed(() => {
  const picker = yhlcInventoryPicker.value
  if (!picker) return []
  const keyword = yhlcInventoryPickerKeyword.value.trim()
  const normalizedKeyword = normalizedYhlcName(keyword)
  return yhlcInventoryOptions(picker.item).filter((product) => !normalizedKeyword || normalizedYhlcName(product.name).includes(normalizedKeyword))
})
let autoSaveTimer: ReturnType<typeof setTimeout> | null = null
let autoSaveSequence = 0
let yhlcSavedTimer: ReturnType<typeof setTimeout> | null = null
let yhlcNoticeTimer: ReturnType<typeof setTimeout> | null = null
let yhlcErrorTimer: ReturnType<typeof setTimeout> | null = null

onMounted(async () => {
  loadVehicleHints()
  loadYhlcSession()
  const queryDate = typeof route.query.date === 'string' ? route.query.date : ''
  const queryMarket = route.query.market === 'supermarket_1' || route.query.market === 'supermarket_2' ? route.query.market : ''
  if (queryDate) store.setDate(queryDate)
  else store.loadLocalDraft()
  yhlcDeliveryDate.value = store.currentDate
  loadYhlcDeliveryCache()
  if (queryMarket) store.currentSupermarket = queryMarket
  if (route.query.edit === '1') store.unlockCurrentMarket()
  await Promise.all([productStore.fetchProducts(), store.fetchDateOrders().catch(() => undefined)])
  hydrating.value = false
})

onBeforeUnmount(() => {
  store.persistLocalDraft()
  clearAutoSaveTimer()
  if (yhlcSavedTimer) clearTimeout(yhlcSavedTimer)
  if (yhlcNoticeTimer) clearTimeout(yhlcNoticeTimer)
  if (yhlcErrorTimer) clearTimeout(yhlcErrorTimer)
})

watch(
  () => store.currentSupermarket,
  () => store.persistLocalDraft(),
)

watch(
  () => store.drafts,
  () => scheduleAutoSave(),
  { deep: true, flush: 'sync' },
)

watch(
  () => [yhlcDeliveryDate.value, yhlcProductName.value, yhlcOnlyPending.value] as const,
  () => loadYhlcDeliveryCache(),
)

function switchMarket(market: Supermarket) {
  store.currentSupermarket = market
}

function yhlcUsernameKey() {
  return 'dcgy_yhlc_username'
}

function yhlcTokenKey() {
  return 'dcgy_yhlc_token'
}

function yhlcPasswordKey() {
  return 'dcgy_yhlc_password'
}

function yhlcDeliveryCacheKey() {
  const date = yhlcDeliveryDate.value || store.currentDate
  const productName = yhlcProductName.value.trim() || 'all'
  const pending = yhlcOnlyPending.value ? 'pending' : 'all'
  return `dcgy_yhlc_delivery_${date}_${pending}_${productName}`
}

function isYhlcDeliveryResult(value: unknown): value is YhlcDeliveryResult {
  if (!value || typeof value !== 'object') return false
  const result = value as Partial<YhlcDeliveryResult>
  return typeof result.delivery_date === 'string' && Array.isArray(result.orders) && Array.isArray(result.items)
}

function loadYhlcDeliveryCache() {
  const raw = localStorage.getItem(yhlcDeliveryCacheKey())
  if (!raw) {
    yhlcResult.value = null
    yhlcDeliveryCacheHit.value = false
    expandedYhlcItemKey.value = ''
    return
  }
  try {
    const cached = JSON.parse(raw)
    if (!isYhlcDeliveryResult(cached)) throw new Error('缓存格式异常')
    yhlcResult.value = cached
    yhlcDeliveryCacheHit.value = true
    expandedYhlcItemKey.value = ''
  } catch {
    localStorage.removeItem(yhlcDeliveryCacheKey())
    yhlcResult.value = null
    yhlcDeliveryCacheHit.value = false
  }
}

function saveYhlcDeliveryCache(result: YhlcDeliveryResult) {
  localStorage.setItem(yhlcDeliveryCacheKey(), JSON.stringify(result))
  yhlcDeliveryCacheHit.value = true
}

function loadYhlcSession() {
  yhlcUsername.value = localStorage.getItem(yhlcUsernameKey()) || ''
  yhlcPassword.value = localStorage.getItem(yhlcPasswordKey()) || ''
  yhlcToken.value = localStorage.getItem(yhlcTokenKey()) || ''
}

function saveYhlcSession() {
  const entries = [
    [yhlcUsernameKey(), yhlcUsername.value],
    [yhlcPasswordKey(), yhlcPassword.value],
    [yhlcTokenKey(), yhlcToken.value],
  ]
  for (const [key, value] of entries) {
    if (value) localStorage.setItem(key, value)
    else localStorage.removeItem(key)
  }
  yhlcSessionSaved.value = true
  if (yhlcSavedTimer) clearTimeout(yhlcSavedTimer)
  yhlcSavedTimer = setTimeout(() => {
    yhlcSessionSaved.value = false
  }, 3000)
}

function toggleYhlcPanel() {
  yhlcExpanded.value = !yhlcExpanded.value
}

function clearYhlcError() {
  if (yhlcErrorTimer) clearTimeout(yhlcErrorTimer)
  yhlcErrorTimer = null
  yhlcError.value = ''
}

function setYhlcError(message: string) {
  if (yhlcErrorTimer) clearTimeout(yhlcErrorTimer)
  yhlcError.value = message
  yhlcErrorTimer = setTimeout(() => {
    yhlcError.value = ''
    yhlcErrorTimer = null
  }, 500)
}

async function loadYhlcCaptcha(clearError = true) {
  yhlcCaptchaLoading.value = true
  if (clearError) clearYhlcError()
  yhlcNotice.value = ''
  try {
    const captcha = await getYhlcCaptcha()
    yhlcCaptchaUuid.value = captcha.uuid
    // 昱禾验证码接口返回的是 PNG 的 Base64 数据，使用准确 MIME 类型以保证浏览器可正常解码。
    yhlcCaptchaImage.value = `data:image/png;base64,${captcha.img}`
    yhlcCaptchaCode.value = ''
  } catch (err) {
    setYhlcError(err instanceof Error ? err.message : '获取验证码失败')
  } finally {
    yhlcCaptchaLoading.value = false
  }
}

async function loginYhlc() {
  if (!yhlcUsername.value || !yhlcPassword.value) {
    setYhlcError('请先填写昱禾账号和密码')
    return
  }
  if (!yhlcCaptchaCode.value || !yhlcCaptchaUuid.value) {
    setYhlcError('请先点击验证码刷新按钮，再填写验证码')
    return
  }
  yhlcLoginLoading.value = true
  clearYhlcError()
  yhlcNotice.value = ''
  try {
    const result = await loginYhlcAccount({
      username: yhlcUsername.value,
      password: yhlcPassword.value,
      code: yhlcCaptchaCode.value,
      uuid: yhlcCaptchaUuid.value,
    })
    yhlcToken.value = result.token
  } catch (err) {
    setYhlcError(err instanceof Error ? err.message : '昱禾登录失败')
  } finally {
    yhlcLoginLoading.value = false
  }
}

async function loadYhlcDelivery() {
  if (!yhlcToken.value) {
    setYhlcError('请先登录获取 token')
    return
  }
  yhlcDeliveryLoading.value = true
  clearYhlcError()
  yhlcNotice.value = ''
  try {
    const result = await getTodayYhlcDelivery({
      token: yhlcToken.value,
      delivery_date: yhlcDeliveryDate.value || store.currentDate,
      product_name: yhlcProductName.value || undefined,
      only_pending: yhlcOnlyPending.value,
    })
    yhlcResult.value = result
    saveYhlcDeliveryCache(result)
    yhlcNotice.value = '送货单已获取并保存到本机'
  } catch (err) {
    setYhlcError(err instanceof Error ? err.message : '获取昱禾送货单失败')
  } finally {
    yhlcDeliveryLoading.value = false
  }
}

function formatYhlcQuantity(value: number) {
  return Number.isInteger(value) ? `${value}` : value.toFixed(2).replace(/\.?0+$/, '')
}

function yhlcImportPeriodLabel(period: Period) {
  return period === 'noon' ? '午' : periodLabel(period)
}

function yhlcItemKey(orderId: string, itemIndex: number) {
  return `${orderId}-${itemIndex}`
}

function normalizedYhlcName(value: string) {
  return value.toLowerCase().replace(/[^a-z0-9\u4e00-\u9fa5]+/g, '')
}

function yhlcDefaultInventoryKeyword(item: YhlcDeliveryItem) {
  const normalized = item.product_name.trim().replace(/\s+/g, '')
  return Array.from(normalized).slice(0, 2).join('')
}

function yhlcMatchScore(item: YhlcDeliveryItem, product: Product) {
  const source = normalizedYhlcName(item.product_name)
  const target = normalizedYhlcName(product.name)
  if (!source || !target) return 0
  if (source === target) return 100
  if (source.includes(target) || target.includes(source)) return 80 + Math.min(source.length, target.length)
  const sourceChars = new Set(source)
  const hits = [...new Set(target)].filter((char) => sourceChars.has(char)).length
  return hits >= Math.min(3, target.length) ? hits : 0
}

function yhlcInventoryOptions(item: YhlcDeliveryItem) {
  return [...marketProducts.value].sort((left, right) => {
    const scoreDiff = yhlcMatchScore(item, right) - yhlcMatchScore(item, left)
    if (scoreDiff) return scoreDiff
    return left.name.localeCompare(right.name, 'zh-Hans-CN', { numeric: true, sensitivity: 'base' })
  })
}

function selectedYhlcProductName(key: string) {
  const productId = selectedYhlcProductIds.value[key]
  return productId ? findProduct(productId)?.name || '' : ''
}

function openYhlcInventoryPicker(item: YhlcDeliveryItem, key: string) {
  yhlcInventoryPicker.value = { item, key }
  yhlcInventoryPickerKeyword.value = yhlcDefaultInventoryKeyword(item)
}

function closeYhlcInventoryPicker() {
  yhlcInventoryPicker.value = null
  yhlcInventoryPickerKeyword.value = ''
}

function selectYhlcInventoryProduct(product: Product) {
  if (!yhlcInventoryPicker.value) return
  selectedYhlcProductIds.value[yhlcInventoryPicker.value.key] = product.id
  closeYhlcInventoryPicker()
}

function toggleYhlcItem(orderId: string, itemIndex: number, item: YhlcDeliveryItem) {
  const key = yhlcItemKey(orderId, itemIndex)
  if (expandedYhlcItemKey.value === key) {
    expandedYhlcItemKey.value = ''
    return
  }
  if (!(key in selectedYhlcProductIds.value)) selectedYhlcProductIds.value[key] = ''
  expandedYhlcItemKey.value = key
}

function createVehicleDraft(period: Period, vehicleNo: string): VehicleDraft {
  return {
    id: crypto.randomUUID(),
    period,
    vehicle_no: vehicleNo,
    checked: false,
    items: [{ product_id: '', quantity: '' }],
  }
}

function isBlankVehicle(vehicle: VehicleDraft) {
  return !vehicle.vehicle_no.trim() && !vehicle.items.some((item) => item.product_id || item.quantity)
}

function yhlcSourceText(value: string) {
  return value.trim() || '-'
}

function yhlcImportSource(item: YhlcDeliveryItem, productId: number) {
  return {
    car_no: yhlcSourceText(item.car_no),
    pz_no: yhlcSourceText(item.pz_no),
    quantity: String(Math.max(1, Math.round(item.quantity))),
    product_id: productId,
  }
}

function yhlcImportVehicleNo(item: YhlcDeliveryItem) {
  return yhlcSourceText(item.car_no)
}

function hasDuplicateYhlcImport(item: YhlcDeliveryItem, productId: number, period: Period) {
  const source = yhlcImportSource(item, productId)
  const vehicleNo = yhlcImportVehicleNo(item)
  return draft.value[period].some((vehicle) =>
    vehicle.items.some((entry) => {
      if (Number(entry.product_id) !== productId || String(Math.max(1, Math.round(toNumber(entry.quantity)))) !== source.quantity) return false
      if (!entry.yhlc_import) return vehicle.vehicle_no.trim() === vehicleNo
      return (
        entry.yhlc_import.car_no === source.car_no &&
        entry.yhlc_import.pz_no === source.pz_no &&
        entry.yhlc_import.quantity === source.quantity &&
        Number(entry.yhlc_import.product_id) === productId
      )
    }),
  )
}

function isMatchingYhlcImport(item: YhlcDeliveryItem, productId: number, vehicle: VehicleDraft, entry: OrderItemInput) {
  const source = {
    car_no: yhlcSourceText(item.car_no),
    pz_no: yhlcSourceText(item.pz_no),
    quantity: String(Math.max(1, Math.round(item.quantity))),
  }
  if (entry.yhlc_import) {
    const sameProduct = !productId || Number(entry.yhlc_import.product_id) === productId
    return (
      sameProduct &&
      entry.yhlc_import.car_no === source.car_no &&
      entry.yhlc_import.pz_no === source.pz_no &&
      entry.yhlc_import.quantity === source.quantity
    )
  }
  return (
    Boolean(productId) &&
    Number(entry.product_id) === productId &&
    vehicle.vehicle_no.trim() === yhlcImportVehicleNo(item) &&
    String(Math.max(1, Math.round(toNumber(entry.quantity)))) === source.quantity
  )
}

function isYhlcItemImported(item: YhlcDeliveryItem, key: string) {
  const productId = Number(selectedYhlcProductIds.value[key] || 0)
  return periodDefs.some((period) =>
    draft.value[period.key].some((vehicle) => vehicle.items.some((entry) => isMatchingYhlcImport(item, productId, vehicle, entry))),
  )
}

function yhlcImportStatusText(item: YhlcDeliveryItem, key: string) {
  return isYhlcItemImported(item, key) ? '已导入' : '未导入'
}

function openYhlcImportConfirm(item: YhlcDeliveryItem, key: string, period: Period) {
  if (store.isPeriodLoaded(period)) return
  const productId = Number(selectedYhlcProductIds.value[key])
  if (!productId) {
    openYhlcInventoryPicker(item, key)
    return
  }
  const vehicleNo = yhlcImportVehicleNo(item)
  if (!vehicleNo || vehicleNo === '-') {
    setYhlcError('该商品没有车位号，无法导入到车号')
    return
  }
  if (hasDuplicateYhlcImport(item, productId, period)) {
    setYhlcError('导入失败：该时段已有车位、拍子、数量、商品都相同的记录')
    return
  }
  pendingYhlcImport.value = {
    item,
    key,
    period,
    productId,
    productName: findProduct(productId)?.name || item.product_name,
    vehicleNo,
    quantity: yhlcImportSource(item, productId).quantity,
  }
  clearYhlcError()
  yhlcNotice.value = ''
}

function confirmYhlcImport() {
  const pending = pendingYhlcImport.value
  if (!pending) return
  const { item, period, productId, vehicleNo } = pending
  if (hasDuplicateYhlcImport(item, productId, period)) {
    setYhlcError('导入失败：该时段已有车位、拍子、数量、商品都相同的记录')
    pendingYhlcImport.value = null
    return
  }
  const vehicles = draft.value[period]
  let vehicle = vehicles.find((entry) => entry.vehicle_no.trim() === vehicleNo)
  if (!vehicle) {
    const blankIndex = vehicles.findIndex(isBlankVehicle)
    if (blankIndex >= 0) {
      vehicle = vehicles[blankIndex]
      vehicle.vehicle_no = vehicleNo
    } else {
      vehicle = createVehicleDraft(period, vehicleNo)
      vehicles.push(vehicle)
    }
  }
  const blankItem = vehicle.items.find((entry) => !entry.product_id && !entry.quantity)
  const targetItem = blankItem || { product_id: '', quantity: '' }
  targetItem.product_id = productId
  targetItem.quantity = pending.quantity
  targetItem.yhlc_import = yhlcImportSource(item, productId)
  if (!blankItem) vehicle.items.push(targetItem)
  clearYhlcError()
  yhlcNotice.value = `已导入到${yhlcImportPeriodLabel(period)} ${vehicleNo}`
  pendingYhlcImport.value = null
  if (yhlcNoticeTimer) clearTimeout(yhlcNoticeTimer)
  yhlcNoticeTimer = setTimeout(() => {
    yhlcNotice.value = ''
  }, 2500)
  store.persistLocalDraft()
}

async function changeDate() {
  hydrating.value = true
  error.value = ''
  store.setDate(store.currentDate)
  await store.fetchDateOrders().catch(() => undefined)
  hydrating.value = false
}

async function refreshOrders() {
  clearAutoSaveTimer()
  refreshing.value = true
  error.value = ''
  closeSwipeRows()
  try {
    await store.fetchDateOrders({ preserveLocalDraft: false })
  } catch (err) {
    error.value = err instanceof Error ? err.message : '刷新同步失败'
  } finally {
    refreshing.value = false
  }
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

function vehicleHint(period: Period) {
  return `车辆 ${vehicleHints.value[store.currentSupermarket][period]}`
}

function vehicleHintsKey() {
  return 'dcgy_vehicle_hints'
}

function loadVehicleHints() {
  const raw = localStorage.getItem(vehicleHintsKey())
  if (!raw) return
  try {
    vehicleHints.value = normalizeVehicleHints(JSON.parse(raw))
  } catch {
    vehicleHints.value = emptyVehicleHints()
  }
}

function persistVehicleHints() {
  localStorage.setItem(vehicleHintsKey(), JSON.stringify(vehicleHints.value))
}

function clearAutoSaveTimer() {
  if (!autoSaveTimer) return
  clearTimeout(autoSaveTimer)
  autoSaveTimer = null
}

function hasSyncableDraft() {
  return Object.values(draft.value)
    .flat()
    .some((vehicle) => vehicle.vehicle_no.trim() || vehicle.items.some((item) => item.product_id && Number(item.quantity) > 0))
}

function scheduleAutoSave() {
  if (hydrating.value || refreshing.value || saving.value) return
  store.persistLocalDraft()
  error.value = ''
  clearAutoSaveTimer()
  autoSaveTimer = setTimeout(() => {
    void autoSave()
  }, 800)
}

async function autoSave() {
  clearAutoSaveTimer()
  if (!hasSyncableDraft() || saving.value || refreshing.value) return
  const sequence = ++autoSaveSequence
  autoSaving.value = true
  error.value = ''
  try {
    await store.saveCurrent()
  } catch (err) {
    // 自动保存失败不打扰录入，草稿已经先写入本地。
  } finally {
    if (sequence === autoSaveSequence) autoSaving.value = false
  }
}

function periodLabel(period: Period) {
  return periodDefs.find((item) => item.key === period)?.label || period
}

function compareVehicleNo(left: string, right: string) {
  const leftNo = left.trim()
  const rightNo = right.trim()
  if (!leftNo && !rightNo) return 0
  if (!leftNo) return 1
  if (!rightNo) return -1
  return leftNo.localeCompare(rightNo, 'zh-Hans-CN', { numeric: true, sensitivity: 'base' })
}

function sortVehiclesByNo(vehicles: VehicleDraft[]) {
  return [...vehicles].sort((left, right) => compareVehicleNo(left.vehicle_no, right.vehicle_no))
}

function sortedVehicles(period: Period) {
  const frozenOrder = frozenVehicleOrder.value[period]
  if (frozenOrder?.includes(editingVehicleId.value)) {
    const orderIndex = new Map(frozenOrder.map((id, index) => [id, index]))
    return [...draft.value[period]].sort((left, right) => {
      const leftIndex = orderIndex.get(left.id)
      const rightIndex = orderIndex.get(right.id)
      if (leftIndex !== undefined && rightIndex !== undefined) return leftIndex - rightIndex
      if (leftIndex !== undefined) return -1
      if (rightIndex !== undefined) return 1
      return compareVehicleNo(left.vehicle_no, right.vehicle_no)
    })
  }
  return sortVehiclesByNo(draft.value[period])
}

function draftIssueMessages(targetPeriod?: Period) {
  const messages: string[] = []
  const targetPeriods = targetPeriod ? periodDefs.filter((item) => item.key === targetPeriod) : periodDefs
  for (const period of targetPeriods) {
    sortedVehicles(period.key).forEach((vehicle, vehicleIndex) => {
      const vehicleNo = vehicle.vehicle_no.trim()
      const hasItemInput = vehicle.items.some((item) => item.product_id || item.quantity)
      if (!vehicleNo && hasItemInput) messages.push(`${period.label} 第${vehicleIndex + 1}条：车号未填`)
      if (vehicleNo && !vehicle.items.some((item) => item.product_id)) messages.push(`${period.label} 第${vehicleIndex + 1}条：货物未填`)
      vehicle.items.forEach((item, itemIndex) => {
        const rowText = vehicle.items.length > 1 ? `${period.label} 第${vehicleIndex + 1}条第${itemIndex + 1}个货物` : `${period.label} 第${vehicleIndex + 1}条`
        if (!item.product_id && item.quantity) messages.push(`${rowText}：货物未填`)
        if (item.product_id && toNumber(item.quantity) <= 0) messages.push(`${rowText}：件数未填`)
      })
    })
  }
  return Array.from(new Set(messages))
}

function isPeriodHintMap(value: unknown): value is Partial<Record<Period, string>> {
  if (!value || typeof value !== 'object') return false
  const source = value as Partial<Record<Period, unknown>>
  return ['morning', 'noon', 'evening'].some((period) => typeof source[period as Period] === 'string')
}

function normalizeVehicleHints(value: unknown) {
  const normalized = emptyVehicleHints()
  if (isPeriodHintMap(value)) {
    for (const market of markets) normalized[market] = { ...defaultVehicleHints, ...value }
    return normalized
  }
  if (!value || typeof value !== 'object') return normalized
  const source = value as Partial<Record<Supermarket, unknown>>
  for (const market of markets) {
    if (isPeriodHintMap(source[market])) normalized[market] = { ...defaultVehicleHints, ...source[market] }
  }
  return normalized
}

function startEditVehicleHint(period: Period) {
  if (store.isPeriodLoaded(period)) return
  editingVehicleHint.value = period
  vehicleHintDraft.value = vehicleHints.value[store.currentSupermarket][period]
}

function cancelEditVehicleHint() {
  editingVehicleHint.value = null
  vehicleHintDraft.value = ''
}

function finishEditVehicleHint(period: Period) {
  const value = vehicleHintDraft.value.trim()
  vehicleHints.value[store.currentSupermarket][period] = value || defaultVehicleHints[period]
  persistVehicleHints()
  cancelEditVehicleHint()
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
  store.persistLocalDraft()
  closeProductPicker()
}

function normalizeQuantity(item: OrderItemInput) {
  const value = Math.max(0, Math.round(toNumber(item.quantity)))
  item.quantity = value ? String(value) : ''
  store.persistLocalDraft()
}

function rowKey(vehicleId: string, itemIndex: number) {
  return `${vehicleId}-${itemIndex}`
}

function startSwipe(period: Period, key: string, event: TouchEvent) {
  if (store.isPeriodLoaded(period)) {
    closeSwipeRows()
    return
  }
  swipeStartX.value[key] = event.changedTouches[0]?.clientX || 0
}

function closeSwipeRows() {
  openedSwipeRow.value = ''
  openedMoveSwipeRow.value = ''
}

function endSwipe(period: Period, key: string, canMove: boolean, event: TouchEvent) {
  if (store.isPeriodLoaded(period)) {
    closeSwipeRows()
    return
  }
  const startX = swipeStartX.value[key]
  const endX = event.changedTouches[0]?.clientX || 0
  const distance = endX - startX
  const isDeleteOpen = openedSwipeRow.value === key
  const isMoveOpen = openedMoveSwipeRow.value === key
  if (distance < -36) {
    if (isMoveOpen) {
      closeSwipeRows()
      return
    }
    openedSwipeRow.value = key
    openedMoveSwipeRow.value = ''
    return
  }
  if (distance > 36 && canMove) {
    if (isDeleteOpen) {
      closeSwipeRows()
      return
    }
    openedMoveSwipeRow.value = key
    openedSwipeRow.value = ''
    return
  }
  if (distance > 36 && !canMove && openedSwipeRow.value === key) openedSwipeRow.value = ''
}

function startVehicleEdit(vehicleId: string) {
  if (openedSwipeRow.value.startsWith(`${vehicleId}-`) || openedMoveSwipeRow.value.startsWith(`${vehicleId}-`)) return
  const vehicle = Object.values(draft.value).flat().find((item) => item.id === vehicleId)
  if (vehicle) frozenVehicleOrder.value[vehicle.period] = sortVehiclesByNo(draft.value[vehicle.period]).map((item) => item.id)
  editingVehicleId.value = vehicleId
}

function finishVehicleEdit() {
  editingVehicleId.value = ''
  frozenVehicleOrder.value = {}
  store.persistLocalDraft()
}

function openVehicleMove(period: Period, vehicle: VehicleDraft) {
  if (store.isPeriodLoaded(period)) return
  movingVehicle.value = { from: period, vehicleId: vehicle.id, vehicleNo: vehicle.vehicle_no }
  closeSwipeRows()
}

function moveVehicleToPeriod(targetPeriod: Period) {
  const moving = movingVehicle.value
  if (!moving || targetPeriod === moving.from || store.isPeriodLoaded(targetPeriod)) {
    movingVehicle.value = null
    return
  }
  const sourceList = draft.value[moving.from]
  const sourceIndex = sourceList.findIndex((vehicle) => vehicle.id === moving.vehicleId)
  if (sourceIndex < 0) {
    movingVehicle.value = null
    return
  }
  const [vehicle] = sourceList.splice(sourceIndex, 1)
  vehicle.period = targetPeriod
  const targetList = draft.value[targetPeriod]
  const onlyBlankTarget = targetList.length === 1 && !targetList[0].vehicle_no && !targetList[0].items.some((item) => item.product_id || item.quantity)
  if (onlyBlankTarget) targetList.splice(0, 1, vehicle)
  else targetList.push(vehicle)
  if (!sourceList.length) store.addVehicle(moving.from)
  store.persistLocalDraft()
  movingVehicle.value = null
  closeSwipeRows()
}

function isVehicleChecked(period: Period, vehicle: VehicleDraft) {
  return store.isPeriodLoaded(period) || Boolean(vehicle.checked)
}

function previewItem(item: OrderItemInput) {
  const product = findProduct(item.product_id)
  const market = product?.supermarkets.find((entry) => entry.supermarket === store.currentSupermarket)
  if (!product || !market) return { amount: '0.00', profit: '0.00', commission: '0.00' }
  const quantity = toNumber(item.quantity)
  const unitProfit = toNumber(market.sale_price) - toNumber(product.cost) - toNumber(market.commission_price)
  return {
    amount: money(quantity * toNumber(market.sale_price)),
    profit: money(quantity * unitProfit),
    commission: money(quantity * toNumber(market.commission_price)),
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

const totalCommission = computed(() =>
  Object.values(draft.value)
    .flat()
    .flatMap((vehicle) => vehicle.items)
    .reduce((sum, item) => sum + toNumber(previewItem(item).commission), 0),
)

const totalIncome = computed(() => totalAmount.value - totalCommission.value)

function askRemoveItem(period: Period, vehicle: VehicleDraft, itemIndex: number) {
  if (store.isPeriodLoaded(period)) return
  const item = vehicle.items[itemIndex]
  pendingDeleteItem.value = {
    period,
    vehicleId: vehicle.id,
    itemIndex,
    productName: productName(item.product_id) || '未选择货物',
  }
}

function confirmRemoveItem() {
  const target = pendingDeleteItem.value
  if (!target) return
  const vehicle = draft.value[target.period].find((item) => item.id === target.vehicleId)
  if (vehicle) {
    if (vehicle.items.length > 1) store.removeItem(vehicle, target.itemIndex)
    else store.removeVehicle(target.period, target.vehicleId)
  }
  closeSwipeRows()
  pendingDeleteItem.value = null
}

async function markLoaded(period: Period) {
  if (store.isPeriodLoaded(period)) return
  clearAutoSaveTimer()
  const issues = draftIssueMessages(period)
  if (issues.length) {
    error.value = `${periodLabel(period)}装车失败：${issues.join('；')}`
    return
  }
  saving.value = true
  error.value = ''
  try {
    await store.saveCurrent()
    store.markPeriodLoaded(period)
    closeSwipeRows()
  } catch (err) {
    error.value = err instanceof Error ? err.message : '装车保存失败'
  } finally {
    saving.value = false
  }
}

async function save() {
  clearAutoSaveTimer()
  const issues = draftIssueMessages()
  if (issues.length) {
    error.value = `保存失败：${issues.join('；')}`
    return
  }
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
.entry-sticky {
  position: sticky;
  top: 0;
  z-index: 20;
  margin: calc(-12px - env(safe-area-inset-top)) -12px 10px;
  padding: calc(12px + env(safe-area-inset-top)) 12px 8px;
  background: #fbfbfd;
  border-bottom: 1px solid var(--line);
}

.topbar-actions {
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 4px;
}

.refresh-button {
  display: inline-flex;
  width: 36px;
  height: 36px;
  align-items: center;
  justify-content: center;
  border: 0;
  border-radius: 8px;
  background: #eef6ff;
  color: var(--primary);
}

.refresh-button:disabled {
  opacity: 0.65;
}

.spinning {
  animation: spin 0.8s linear infinite;
}

@keyframes spin {
  to {
    transform: rotate(360deg);
  }
}

.date-input {
  width: 44px;
  height: 44px;
  opacity: 0.01;
}

.yhlc-delivery-card {
  margin-top: 12px;
  overflow: hidden;
}

.yhlc-delivery-toggle {
  display: grid;
  grid-template-columns: minmax(0, 1fr) 28px;
  align-items: center;
  width: 100%;
  min-height: 48px;
  gap: 8px;
  padding: 9px 12px;
  color: var(--text);
  text-align: left;
  background: #fff;
}

.yhlc-delivery-toggle span {
  display: grid;
  min-width: 0;
  gap: 2px;
}

.yhlc-delivery-toggle strong {
  font-size: 15px;
}

.yhlc-delivery-toggle small {
  overflow: hidden;
  color: var(--muted);
  font-size: 12px;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.yhlc-delivery-toggle svg {
  justify-self: center;
  color: var(--accent);
  transition: transform 0.18s ease;
}

.yhlc-delivery-toggle svg.expanded {
  transform: rotate(180deg);
}

.yhlc-delivery-body {
  display: grid;
  gap: 10px;
  padding: 12px;
  border-top: 1px solid var(--line);
}

.yhlc-login-grid,
.yhlc-query-grid {
  display: grid;
  grid-template-columns: minmax(0, 1fr) minmax(0, 1fr);
  gap: 8px;
}

.yhlc-login-grid label,
.yhlc-query-grid label {
  display: grid;
  gap: 5px;
  color: var(--muted);
  font-size: 12px;
}

.yhlc-captcha-line {
  display: grid;
  grid-template-columns: minmax(0, 1fr) 92px;
  gap: 6px;
}

.yhlc-captcha-image {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-height: 42px;
  padding: 0;
  background: #fff;
  border: 1px solid var(--line);
  border-radius: 10px;
}

.yhlc-captcha-image img {
  width: 90px;
  height: 38px;
  object-fit: contain;
}

.yhlc-login-button,
.yhlc-fetch-button,
.yhlc-save-button {
  align-self: end;
  min-height: 42px;
  padding: 0 10px;
}

.yhlc-save-button,
.yhlc-fetch-button {
  grid-column: 1 / -1;
  justify-self: center;
  width: min(100%, 260px);
}

.yhlc-check-line {
  display: flex !important;
  min-height: 42px;
  align-items: center;
  gap: 7px;
  color: var(--text) !important;
}

.yhlc-check-line input {
  width: 16px;
  height: 16px;
}

.yhlc-error {
  position: fixed;
  top: 50%;
  left: 50%;
  z-index: 80;
  width: min(calc(100vw - 48px), 360px);
  padding: 12px 14px;
  color: #fff;
  font-size: 13px;
  font-weight: 700;
  line-height: 1.45;
  text-align: center;
  background: rgba(29, 29, 31, 0.88);
  border: 1px solid rgba(255, 255, 255, 0.12);
  border-radius: 10px;
  box-shadow: 0 12px 34px rgba(0, 0, 0, 0.24);
  transform: translate(-50%, -50%);
  pointer-events: none;
}

.yhlc-success {
  padding: 9px 10px;
  color: #087443;
  font-size: 12px;
  font-weight: 700;
  background: #edf9f1;
  border: 1px solid rgba(8, 116, 67, 0.22);
  border-radius: 10px;
}

.yhlc-stats {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 7px;
}

.yhlc-stats div {
  padding: 8px 6px;
  text-align: center;
  background: #f7f9fc;
  border: 1px solid var(--line);
  border-radius: 8px;
}

.yhlc-stats span {
  display: block;
  margin-bottom: 3px;
  color: var(--muted);
  font-size: 11px;
}

.yhlc-stats strong {
  font-size: 16px;
}

.yhlc-order {
  overflow: hidden;
  background: #f7f9fc;
  border: 1px solid var(--line);
  border-radius: 10px;
}

.yhlc-order-title {
  display: grid;
  grid-template-columns: minmax(0, 1fr) auto;
  gap: 8px;
  align-items: center;
  padding: 9px 10px;
  border-bottom: 1px solid var(--line);
}

.yhlc-order-title strong,
.yhlc-order-title span {
  min-width: 0;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.yhlc-order-title strong {
  font-size: 13px;
}

.yhlc-order-title span {
  color: var(--muted);
  font-size: 11px;
}

.yhlc-table {
  display: grid;
}

.yhlc-table-head,
.yhlc-table-row {
  display: grid;
  grid-template-columns: minmax(0, 1fr) 60px 44px 44px 44px;
  align-items: center;
  gap: 6px;
  min-height: 34px;
  padding: 0 10px;
}

.yhlc-table-head {
  color: var(--muted);
  font-size: 11px;
  font-weight: 700;
  background: rgba(255, 255, 255, 0.76);
}

.yhlc-table-row {
  border-top: 1px dashed rgba(29, 29, 31, 0.1);
  font-size: 12px;
  cursor: pointer;
}

.yhlc-table-row.expanded {
  background: #eef6ff;
}

.yhlc-table-row strong {
  min-width: 0;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.yhlc-table-head span:not(:first-child),
.yhlc-table-row span {
  text-align: center;
}

.yhlc-import-status {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 56px;
  min-height: 22px;
  padding: 0 4px;
  color: #8a5200;
  font-size: 11px;
  font-weight: 800;
  background: #fff4df;
  border-radius: 6px;
}

.yhlc-import-status.imported {
  color: #087443;
  background: #e6f8ee;
}

.yhlc-match-panel {
  display: grid;
  gap: 8px;
  padding: 10px;
  background: #fff;
  border-top: 1px solid rgba(29, 29, 31, 0.1);
}

.yhlc-match-panel label {
  display: grid;
  gap: 5px;
  color: var(--muted);
  font-size: 12px;
}

.yhlc-inventory-picker-button {
  min-height: 34px;
  padding: 0 10px;
  overflow: hidden;
  color: var(--accent);
  font-size: 12px;
  font-weight: 700;
  text-align: left;
  text-overflow: ellipsis;
  white-space: nowrap;
  background: #fff;
  border: 1px solid var(--line);
  border-radius: 8px;
}

.yhlc-import-targets {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 7px;
}

.yhlc-import-targets button {
  min-height: 34px;
  color: #fff;
  font-weight: 800;
  border-radius: 8px;
}

.yhlc-import-targets button:disabled {
  opacity: 0.45;
}

.yhlc-import-targets .morning {
  background: #0a7a52;
}

.yhlc-import-targets .noon {
  background: #b26a00;
}

.yhlc-import-targets .evening {
  background: #5d5fef;
}

.yhlc-order-separator {
  height: 1px;
  margin: 8px 10px;
  background: repeating-linear-gradient(90deg, rgba(29, 29, 31, 0.24) 0 8px, transparent 8px 14px);
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

.vehicle-hint {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-width: 0;
  min-height: 32px;
  padding: 0 4px;
  flex: 1;
  overflow: hidden;
  font-size: 12px;
  font-weight: 600;
  color: var(--muted);
  text-align: center;
  text-overflow: ellipsis;
  white-space: nowrap;
  background: transparent;
  cursor: default;
}

.vehicle-hint-input {
  flex: 1;
  min-width: 0;
  min-height: 32px;
  padding: 0 8px;
  color: var(--text);
  font-size: 12px;
  text-align: center;
  background: #fff;
  border: 1px solid var(--line);
  border-radius: 8px;
  outline: none;
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
  display: grid;
  gap: 5px;
  padding: 8px;
}

.table-head,
.table-row {
  display: grid;
  grid-template-columns: 92px minmax(0, 1fr) 58px;
  grid-template-areas:
    "vehicle product quantity"
    "vehicle detail detail";
  align-items: center;
  column-gap: 6px;
  row-gap: 3px;
}

.table-head {
  min-height: 24px;
  grid-template-columns: 92px minmax(0, 1fr) 58px;
  grid-template-areas: "vehicle product quantity";
  font-size: 12px;
  font-weight: 700;
  color: var(--muted);
  text-align: left;
}

.table-head span:nth-child(1) {
  grid-area: vehicle;
}

.table-head span:nth-child(2) {
  grid-area: product;
}

.table-head span:nth-child(3) {
  grid-area: quantity;
  text-align: center;
}

.vehicle-group {
  overflow: hidden;
  background: rgba(247, 247, 249, 0.92);
  border: 1px solid var(--line);
  border-radius: 12px;
}

.swipe-row {
  position: relative;
  overflow: hidden;
  border-top: 1px dashed rgba(29, 29, 31, 0.1);
  touch-action: pan-y;
}

.swipe-row:first-child {
  border-top: 0;
}

.swipe-row .table-row {
  position: relative;
  z-index: 1;
  width: 100%;
  background: rgba(247, 247, 249, 0.98);
  transition: transform 0.18s ease;
}

.swipe-row.delete-open .table-row {
  transform: translateX(-72px);
}

.swipe-row.move-open .table-row {
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

.table-row {
  min-height: 52px;
  padding: 5px 6px;
}

.table-row.first {
  border-top: 0;
}

.vehicle-cell {
  grid-area: vehicle;
  display: flex;
  align-items: center;
  gap: 6px;
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
  min-height: 32px;
  min-width: 0;
  color: #111;
  font-size: 15px;
  font-weight: 800;
}

.item-detail-row {
  grid-area: detail;
  display: grid;
  grid-template-columns: minmax(0, 1fr) minmax(0, 1fr) 30px;
  align-items: center;
  gap: 4px;
  min-height: 22px;
}

.quantity-cell {
  grid-area: quantity;
  display: block;
  min-width: 0;
}

.quantity-input {
  min-height: 30px;
  font-size: 14px;
  font-weight: 700;
}

.cell-input {
  width: 100%;
  min-height: 26px;
  padding: 0 6px;
  font-size: 12px;
  text-align: center;
  color: var(--text);
  background: #fff;
  border: 1px solid var(--line);
  border-radius: 9px;
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
  background: transparent;
  border: 0;
  border-radius: 0;
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
  flex: 0 0 26px;
  align-items: center;
  justify-content: center;
  width: 26px;
  height: 26px;
  min-width: 26px;
  min-height: 26px;
  padding: 0;
  aspect-ratio: 1 / 1;
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
  width: 100%;
  height: 26px;
  color: var(--accent);
  background: rgba(0, 113, 227, 0.08);
  border-radius: 9px;
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
  grid-template-columns: repeat(3, minmax(0, 1fr)) 76px;
  align-items: center;
  gap: 6px;
  width: calc(100% - 24px);
  max-width: 656px;
  margin: 0 auto;
  padding: 8px;
  font-size: 11px;
}

.save-bar div {
  display: flex;
  flex-direction: column;
  gap: 2px;
  min-width: 0;
}

.save-bar strong,
.save-bar span {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.save-bar-spacer {
  height: 78px;
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
  .yhlc-login-grid,
  .yhlc-query-grid {
    grid-template-columns: 1fr;
  }

  .yhlc-table-head,
  .yhlc-table-row {
    grid-template-columns: minmax(0, 1fr) 52px 32px 32px 32px;
    padding: 0 8px;
  }

  .yhlc-import-status {
    width: 50px;
    font-size: 10px;
  }

  .table-head,
  .table-row {
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

  .period-title {
    gap: 6px;
  }

  .vehicle-hint {
    font-size: 11px;
  }
}
</style>
