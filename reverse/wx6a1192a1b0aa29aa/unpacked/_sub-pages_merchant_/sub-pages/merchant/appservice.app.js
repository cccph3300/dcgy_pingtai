/*v0.5vv_20211229_syb_scopedata*/global.__wcc_version__='v0.5vv_20211229_syb_scopedata';global.__wcc_version_info__={"customComponents":true,"fixZeroRpx":true,"propValueDeepCopy":false};
var $gwxc
var $gaic={}
$gwx2=function(_,_v,_n,_p,_s,_wp,_wl,$gwn,$gwl,$gwh,wh,$gstack,$gwrt,gra,grb,TestTest,wfor,_ca,_da,_r,_rz,_o,_oz,_1,_1z,_2,_2z,_m,_mz,nv_getDate,nv_getRegExp,nv_console,nv_parseInt,nv_parseFloat,nv_isNaN,nv_isFinite,nv_decodeURI,nv_decodeURIComponent,nv_encodeURI,nv_encodeURIComponent,$gdc,nv_JSON,_af,_gv,_ai,_grp,_gd,_gapi,$ixc,_ic,_w,_ev,_tsd){return function(path,global){
if(typeof global==='undefined'){if (typeof __GWX_GLOBAL__==='undefined')global={};else global=__GWX_GLOBAL__;}if(typeof __WXML_GLOBAL__ === 'undefined') {__WXML_GLOBAL__={};
}__WXML_GLOBAL__.modules = __WXML_GLOBAL__.modules || {};
if (typeof $gwx === 'function') $gwx('init', global);
var e_={}
if(typeof(global.entrys)==='undefined')global.entrys={};e_=global.entrys;
var d_={}
if(typeof(global.defines)==='undefined')global.defines={};d_=global.defines;
var f_={}
if(typeof(global.modules)==='undefined')global.modules={};f_=global.modules || {};
var p_={}
__WXML_GLOBAL__.ops_cached = __WXML_GLOBAL__.ops_cached || {}
__WXML_GLOBAL__.ops_set = __WXML_GLOBAL__.ops_set || {};
__WXML_GLOBAL__.ops_init = __WXML_GLOBAL__.ops_init || {};
var z=__WXML_GLOBAL__.ops_set.$gwx2 || [];
__WXML_GLOBAL__.ops_set.$gwx2=z;
__WXML_GLOBAL__.ops_init.$gwx2=true;
var nv_require=function(){var nnm={};var nom={};return function(n){if(n[0]==='p'&&n[1]==='_'&&f_[n.slice(2)])return f_[n.slice(2)];return function(){if(!nnm[n]) return undefined;try{if(!nom[n])nom[n]=nnm[n]();return nom[n];}catch(e){e.message=e.message.replace(/nv_/g,'');var tmp = e.stack.substring(0,e.stack.lastIndexOf(n));e.stack = tmp.substring(0,tmp.lastIndexOf('\n'));e.stack = e.stack.replace(/\snv_/g,' ');e.stack = $gstack(e.stack);e.stack += '\n    at ' + n.substring(2);console.error(e);}
}}}()
var x=[];if(path&&e_[path]){
return function(env,dd,global){$gwxc=0;var root={"tag":"wx-page"};root.children=[]
;g="$gwx2";var main=e_[path].f
if (typeof global==="undefined")global={};global.f=$gdc(f_[path],"",1);
try{
main(env,{},root,global);
_tsd(root)
}catch(err){
console.log(err)
}
;g="";
return root;
}
}
}
}(__g.a,__g.b,__g.c,__g.d,__g.e,__g.f,__g.g,__g.h,__g.i,__g.j,__g.k,__g.l,__g.m,__g.n,__g.o,__g.p,__g.q,__g.r,__g.s,__g.t,__g.u,__g.v,__g.w,__g.x,__g.y,__g.z,__g.A,__g.B,__g.C,__g.D,__g.E,__g.F,__g.G,__g.H,__g.I,__g.J,__g.K,__g.L,__g.M,__g.N,__g.O,__g.P,__g.Q,__g.R,__g.S,__g.T,__g.U,__g.V,__g.W,__g.X,__g.Y,__g.Z,__g.aa);if(__vd_version_info__.delayedGwx||true)$gwx2();;__wxRoute = undefined;__wxRouteBegin = undefined;__wxAppCurrentFile__=undefined;define("sub-pages/merchant/common/vendor.js",function(require,module,exports,window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){
(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["sub-pages/merchant/common/vendor"],{

/***/ 162:
/*!*************************************************************!*\
  !*** E:/project/yhlc-v1.0/agent-uniapp/api/supplierBill.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ 4);
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.exportPdf = exportPdf;
exports.getAsset = getAsset;
exports.getDayDetail = getDayDetail;
exports.getDayItems = getDayItems;
exports.getDayList = getDayList;
exports.getMonthDetail = getMonthDetail;
exports.getMonthList = getMonthList;
exports.getProductOrders = getProductOrders;
exports.getRecentFlows = getRecentFlows;
exports.getSubtypeItems = getSubtypeItems;
exports.getTodayDeductionItems = getTodayDeductionItems;
exports.getTodayProductAgg = getTodayProductAgg;
exports.getTodayProductOrders = getTodayProductOrders;
exports.getWithdrawList = getWithdrawList;
var _defineProperty2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/defineProperty */ 11));
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0, _defineProperty2.default)(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
/**
 * 供应商账单 V2 相关接口
 * baseUrl 已含 /prod-api，路径不要再加 prod-api 前缀
 * 后端路由前缀：/app/supplierBill
 */

/**
 * 我的账户资产状况
 * GET /app/supplierBill/asset
 * 返回：余额/今日收益/待结算/可提现/提现待审核/提现已完成
 *
 * @param {Vue} vm
 */
function getAsset(vm) {
  var token = vm.$store && vm.$store.state ? vm.$store.state.token : '';
  return vm.request('get', 'app/supplierBill/asset', token, null);
}

/**
 * 近 N 笔流水（我的页面"查看更多"用）
 * GET /app/supplierBill/recentFlows?limit=
 *
 * @param {Vue} vm
 * @param {number} [limit] 默认 4
 */
function getRecentFlows(vm, limit) {
  var token = vm.$store && vm.$store.state ? vm.$store.state.token : '';
  var q = {
    limit: limit != null ? limit : 4
  };
  return vm.request('get', 'app/supplierBill/recentFlows', token, q);
}

/**
 * 月账单列表（近10条分页）
 * GET /app/supplierBill/monthList
 *
 * @param {Vue} vm
 * @param {object} [params] pageNum、pageSize 等
 */
function getMonthList(vm) {
  var params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var token = vm.$store && vm.$store.state ? vm.$store.state.token : '';
  var q = _objectSpread({
    pageNum: params.pageNum != null ? params.pageNum : 1,
    pageSize: params.pageSize != null ? params.pageSize : 10
  }, params);
  return vm.request('get', 'app/supplierBill/monthList', token, q);
}

/**
 * 月账单详情（含明细行）
 * GET /app/supplierBill/monthDetail/{billId}
 *
 * @param {Vue} vm
 * @param {string|number} billId
 */
function getMonthDetail(vm, billId) {
  var token = vm.$store && vm.$store.state ? vm.$store.state.token : '';
  var id = encodeURIComponent(String(billId == null ? '' : billId).trim());
  return vm.request('get', "app/supplierBill/monthDetail/".concat(id), token, null);
}

/**
 * 日账单列表（按日期范围分页）
 * GET /app/supplierBill/dayList?startDate=&endDate=
 *
 * @param {Vue} vm
 * @param {object} [params] startDate、endDate（YYYY-MM-DD）、pageNum、pageSize
 */
function getDayList(vm) {
  var params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var token = vm.$store && vm.$store.state ? vm.$store.state.token : '';
  var q = _objectSpread({
    pageNum: params.pageNum != null ? params.pageNum : 1,
    pageSize: params.pageSize != null ? params.pageSize : 10
  }, params);
  return vm.request('get', 'app/supplierBill/dayList', token, q);
}

/**
 * 日账单详情（含明细行 + 商品聚合）
 * GET /app/supplierBill/dayDetail/{billDate}
 *
 * @param {Vue} vm
 * @param {string} billDate YYYY-MM-DD
 */
function getDayDetail(vm, billDate) {
  var token = vm.$store && vm.$store.state ? vm.$store.state.token : '';
  var date = encodeURIComponent(String(billDate == null ? '' : billDate).trim());
  return vm.request('get', "app/supplierBill/dayDetail/".concat(date), token, null);
}

/**
 * 日账单明细按筛选 + 商品搜索
 * GET /app/supplierBill/dayItems
 *
 * @param {Vue} vm
 * @param {object} [params] billDate、itemTypes（SALES/REFUND/DEDUCTION 可数组）、productName、pageNum、pageSize
 */
function getDayItems(vm) {
  var params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var token = vm.$store && vm.$store.state ? vm.$store.state.token : '';
  var q = _objectSpread({
    pageNum: params.pageNum != null ? params.pageNum : 1,
    pageSize: params.pageSize != null ? params.pageSize : 50
  }, params);
  return vm.request('get', 'app/supplierBill/dayItems', token, q);
}

/**
 * 某账单下某商品的所有订单列表
 * GET /app/supplierBill/productOrders
 *
 * @param {Vue} vm
 * @param {object} [params] billId、productId、pageNum、pageSize
 */
function getProductOrders(vm) {
  var params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var token = vm.$store && vm.$store.state ? vm.$store.state.token : '';
  var q = _objectSpread({
    pageNum: params.pageNum != null ? params.pageNum : 1,
    pageSize: params.pageSize != null ? params.pageSize : 20
  }, params);
  return vm.request('get', 'app/supplierBill/productOrders', token, q);
}

/**
 * 子类型明细列表（点击 REFUND/DEDUCTION 聚合行进入）
 * GET /app/supplierBill/subtypeItems
 *
 * @param {Vue} vm
 * @param {object} params billId、itemType(REFUND/DEDUCTION)、subtype、pageNum、pageSize
 */
function getSubtypeItems(vm) {
  var params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var token = vm.$store && vm.$store.state ? vm.$store.state.token : '';
  var q = {
    pageNum: params.pageNum != null ? params.pageNum : 1,
    pageSize: params.pageSize != null ? params.pageSize : 20,
    billId: params.billId,
    itemType: params.itemType
  };
  // subtype 仅在非空时加：空 = 返回该 itemType 全部流水（用于一类页虚拟行点击进入）。
  // 不能无条件 subtype: params.subtype，否则 undefined 被 uni.request GET 序列化成字面量 "undefined"，
  // 后端按 flowName.equals("undefined") 过滤 -> 永远空 -> "暂无明细"（富源7/8 case）。
  if (params.subtype) q.subtype = params.subtype;
  // productId 仅在非空时加：点击日账单详情页某商品行进入时携带，按商品过滤流水
  if (params.productId) q.productId = params.productId;
  return vm.request('get', 'app/supplierBill/subtypeItems', token, q);
}

/**
 * 今日流水按商品聚合（B端账单明细页"今日流水" tab 顶部展示）
 * GET /app/supplierBill/todayProductAgg?billDate=yyyy-MM-dd
 * 返回：{ totalAmount, totalOrderCount, items:[{productId, productName, productImage, quantity, amount, orderCount}] }
 *
 * @param {Vue} vm
 * @param {string} billDate YYYY-MM-DD，为空默认今日
 */
function getTodayProductAgg(vm, billDate) {
  var token = vm.$store && vm.$store.state ? vm.$store.state.token : '';
  var q = {};
  if (billDate) q.billDate = billDate;
  return vm.request('get', 'app/supplierBill/todayProductAgg', token, q);
}

/**
 * 今日某商品关联订单列表（点击今日流水商品卡进入）
 * GET /app/supplierBill/todayProductOrders?billDate=&productId=
 *
 * @param {Vue} vm
 * @param {object} params billDate(YYYY-MM-DD)、productId、pageNum、pageSize
 */
function getTodayProductOrders(vm) {
  var params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var token = vm.$store && vm.$store.state ? vm.$store.state.token : '';
  var q = {
    pageNum: params.pageNum != null ? params.pageNum : 1,
    pageSize: params.pageSize != null ? params.pageSize : 20,
    billDate: params.billDate,
    productId: params.productId
  };
  return vm.request('get', 'app/supplierBill/todayProductOrders', token, q);
}

/**
 * 今日某费用类型加扣款明细列表（点击今日加扣款区块某行进入）
 * GET /app/supplierBill/todayDeductionItems?billDate=&feeType=
 *
 * @param {Vue} vm
 * @param {object} params billDate(YYYY-MM-DD，为空默认今日)、feeType(7/8/9/10)、pageNum、pageSize
 */
function getTodayDeductionItems(vm) {
  var params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var token = vm.$store && vm.$store.state ? vm.$store.state.token : '';
  var q = {
    pageNum: params.pageNum != null ? params.pageNum : 1,
    pageSize: params.pageSize != null ? params.pageSize : 20,
    feeType: params.feeType
  };
  if (params.billDate) q.billDate = params.billDate;
  return vm.request('get', 'app/supplierBill/todayDeductionItems', token, q);
}

/**
 * 当前登录供应商的提现记录分页（账单明细页"提现记录" tab 用）
 * GET /app/supplierBill/withdrawList
 * 返回 TableDataInfo<SupplierWithdrawVo>：rows[{withdrawNo, applyAmount, status, bank, bankInfo, payTime, payOrderNo, auditAdmin, auditRemark, applyTime, ...}]
 * 状态：1=待审核 2=审核通过 3=审核驳回 4=已打款
 *
 * @param {Vue} vm
 * @param {object} [params] pageNum、pageSize
 */
function getWithdrawList(vm) {
  var params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var token = vm.$store && vm.$store.state ? vm.$store.state.token : '';
  var q = {
    pageNum: params.pageNum != null ? params.pageNum : 1,
    pageSize: params.pageSize != null ? params.pageSize : 20
  };
  return vm.request('get', 'app/supplierBill/withdrawList', token, q);
}

/**
 * 导出账单 PDF
 * GET /app/supplierBill/exportPdf/{billId}
 * 返回 PDF 文件流（responseType 由调用方处理）
 *
 * @param {Vue} vm
 * @param {string|number} billId
 */
function exportPdf(vm, billId) {
  var token = vm.$store && vm.$store.state ? vm.$store.state.token : '';
  var id = encodeURIComponent(String(billId == null ? '' : billId).trim());
  return vm.request('get', "app/supplierBill/exportPdf/".concat(id), token, null);
}

/***/ })

}]);
//# sourceMappingURL=../../../../.sourcemap/mp-weixin/sub-pages/merchant/common/vendor.js.map
},{isPage:false,isComponent:false,currentFile:'sub-pages/merchant/common/vendor.js'});