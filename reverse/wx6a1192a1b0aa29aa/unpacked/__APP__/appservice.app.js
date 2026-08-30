var __wxAppData=__wxAppData||{};var __wxRoute=__wxRoute||"";var __wxRouteBegin=__wxRouteBegin||"";var __wxAppCode__=__wxAppCode__||{};var global=global||{};var __WXML_GLOBAL__=__WXML_GLOBAL__||{entrys:{},defines:{},modules:{},ops:[],wxs_nf_init:undefined,total_ops:0};var __wxAppCurrentFile__=__wxAppCurrentFile__||"";var Component=Component||function(){};var definePlugin=definePlugin||function(){};var requirePlugin=requirePlugin||function(){};var Behavior=Behavior||function(){};var __vd_version_info__=__vd_version_info__||{};var __GWX_GLOBAL__=__GWX_GLOBAL__||{};
/*v0.5vv_20211229_syb_scopedata*/global.__wcc_version__='v0.5vv_20211229_syb_scopedata';global.__wcc_version_info__={"customComponents":true,"fixZeroRpx":true,"propValueDeepCopy":false};
var $gwxc
var $gaic={}
$gwx=function(_,_v,_n,_p,_s,_wp,_wl,$gwn,$gwl,$gwh,wh,$gstack,$gwrt,gra,grb,TestTest,wfor,_ca,_da,_r,_rz,_o,_oz,_1,_1z,_2,_2z,_m,_mz,nv_getDate,nv_getRegExp,nv_console,nv_parseInt,nv_parseFloat,nv_isNaN,nv_isFinite,nv_decodeURI,nv_decodeURIComponent,nv_encodeURI,nv_encodeURIComponent,$gdc,nv_JSON,_af,_gv,_ai,_grp,_gd,_gapi,$ixc,_ic,_w,_ev,_tsd){return function(path,global){
if(typeof global==='undefined'){if (typeof __GWX_GLOBAL__==='undefined')global={};else global=__GWX_GLOBAL__;}if(typeof __WXML_GLOBAL__ === 'undefined') {__WXML_GLOBAL__={};
}__WXML_GLOBAL__.modules = __WXML_GLOBAL__.modules || {};
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
var z=__WXML_GLOBAL__.ops_set.$gwx || [];
__WXML_GLOBAL__.ops_set.$gwx=z;
__WXML_GLOBAL__.ops_init.$gwx=true;
var nv_require=function(){var nnm={};var nom={};return function(n){if(n[0]==='p'&&n[1]==='_'&&f_[n.slice(2)])return f_[n.slice(2)];return function(){if(!nnm[n]) return undefined;try{if(!nom[n])nom[n]=nnm[n]();return nom[n];}catch(e){e.message=e.message.replace(/nv_/g,'');var tmp = e.stack.substring(0,e.stack.lastIndexOf(n));e.stack = tmp.substring(0,tmp.lastIndexOf('\n'));e.stack = e.stack.replace(/\snv_/g,' ');e.stack = $gstack(e.stack);e.stack += '\n    at ' + n.substring(2);console.error(e);}
}}}()
var x=[];if(path&&e_[path]){
return function(env,dd,global){$gwxc=0;var root={"tag":"wx-page"};root.children=[]
;g="$gwx";var main=e_[path].f
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
}(__g.a,__g.b,__g.c,__g.d,__g.e,__g.f,__g.g,__g.h,__g.i,__g.j,__g.k,__g.l,__g.m,__g.n,__g.o,__g.p,__g.q,__g.r,__g.s,__g.t,__g.u,__g.v,__g.w,__g.x,__g.y,__g.z,__g.A,__g.B,__g.C,__g.D,__g.E,__g.F,__g.G,__g.H,__g.I,__g.J,__g.K,__g.L,__g.M,__g.N,__g.O,__g.P,__g.Q,__g.R,__g.S,__g.T,__g.U,__g.V,__g.W,__g.X,__g.Y,__g.Z,__g.aa);if(__vd_version_info__.delayedGwx||true)$gwx();;__wxRoute = undefined;__wxRouteBegin = undefined;__wxAppCurrentFile__=undefined;define("common/main.js",function(require,module,exports,window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){
(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["common/main"],{

/***/ 0:
/*!*************************************************!*\
  !*** E:/project/yhlc-v1.0/agent-uniapp/main.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(wx, uni, createApp) {

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ 4);
var _typeof = __webpack_require__(/*! @babel/runtime/helpers/typeof */ 13);
var _defineProperty2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/defineProperty */ 11));
__webpack_require__(/*! uni-pages */ 30);
var _vue = _interopRequireDefault(__webpack_require__(/*! vue */ 25));
var _App = _interopRequireDefault(__webpack_require__(/*! ./App */ 31));
var _store = _interopRequireDefault(__webpack_require__(/*! ./store */ 40));
var config = _interopRequireWildcard(__webpack_require__(/*! ./config */ 41));
var _routes = __webpack_require__(/*! ./utils/routes.js */ 42);
var _logCapture = _interopRequireDefault(__webpack_require__(/*! @/utils/logCapture.js */ 43));
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0, _defineProperty2.default)(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
// @ts-ignore
wx.__webpack_require_UNI_MP_PLUGIN__ = __webpack_require__;
var PrivacyAuthPopup = function PrivacyAuthPopup() {
  __webpack_require__.e(/*! require.ensure | components/privacy-auth-popup */ "components/privacy-auth-popup").then((function () {
    return resolve(__webpack_require__(/*! @/components/privacy-auth-popup.vue */ 485));
  }).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
};
var baseUrl = config.def().baseUrl;
_vue.default.config.productionTip = false;

// 全局注册隐私授权弹窗组件（含真实 agreePrivacyAuthorization 按钮），
// 各页面直接使用 <privacy-auth-popup /> 即可
_vue.default.component('PrivacyAuthPopup', PrivacyAuthPopup);

// logCapture：start() 后才真正写日志，未启动时 mixin 调用是空操作，性能可忽略
// 1) actionMixin 在每个组件 mounted 时包装 on/handle/tap/click/submit 开头的方法
// 2) onShow/onHide 钩子记录页面进入/离开
// 3) restore() 在启动时尝试从 storage 恢复上次的抓包,保证 H5 刷新 / 小程序冷启动 / App 后台回收后不中断
try {
  _logCapture.default.restore();
} catch (e) {}
_vue.default.mixin(_logCapture.default.actionMixin());
_vue.default.mixin({
  onShow: function onShow() {
    try {
      if (!_logCapture.default.isCapturing()) return;
      var route = this.$mp && this.$mp.page && this.$mp.page.route || '';
      if (!route) return;
      var opt = this.$mp && this.$mp.page && this.$mp.page.options || {};
      var qs = '';
      try {
        qs = JSON.stringify(opt);
      } catch (e) {}
      console.info('[page] onShow ' + route + (qs && qs !== '{}' ? '?' + qs : ''));
    } catch (e) {}
  },
  onHide: function onHide() {
    try {
      if (!_logCapture.default.isCapturing()) return;
      var route = this.$mp && this.$mp.page && this.$mp.page.route || '';
      if (!route) return;
      console.info('[page] onHide ' + route);
    } catch (e) {}
  }
});
_vue.default.prototype.request = function (method, endpoint, token) {
  var data = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};
  var netWork = '';
  uni.getNetworkType({
    success: function success(res) {
      netWork = res.networkType;
    }
  });
  if (netWork === 'none') {
    uni.showToast({
      title: '当前无网络',
      icon: 'none',
      duration: 1500
    });
    return;
  }
  return new Promise(function (resolve, reject) {
    var methodLower = String(method || '').toLowerCase();
    var content = 'application/x-www-form-urlencoded; charset=UTF-8';
    if (methodLower === 'post' || methodLower === 'put') {
      content = 'application/json;charset=UTF-8';
    }
    var header = {
      'Content-Type': content
    };
    if (token) {
      header['Authorization'] = 'Bearer ' + token;
    }
    /** 小程序下 PUT/POST 的 data 为数组时，部分端序列化异常，需用 JSON 字符串作 body */
    var requestData = data;
    if ((methodLower === 'post' || methodLower === 'put') && Array.isArray(data)) {
      requestData = JSON.stringify(data);
    }
    uni.request({
      url: baseUrl + "/" + endpoint,
      method: method,
      data: requestData,
      header: header,
      success: function success(res) {
        if (res.data.code === 200) {
          resolve(res.data);
        } else if (res.data.code === 401) {
          var pages = getCurrentPages();
          var curPath = "/".concat(pages[pages.length - 1].route); // 当前页
          var loginPath = _routes.PAGE_LAUNCH;
          _store.default.commit('logout');
          if (curPath === loginPath) {
            resolve(res.data);
          } else {
            uni.redirectTo({
              url: loginPath
            });
          }
        } else if (res.data.code === 500 && res.data.msg === '用户类型不正确') {
          // 特殊处理用户类型不正确的情况，不弹窗，直接返回错误
          reject(res.data);
        } else {
          // 其他错误情况仍然弹窗提示
          uni.showToast({
            title: res.data.msg,
            icon: 'none',
            duration: 1500
          });
          reject(res.data);
        }
      },
      fail: function fail(err) {
        uni.showToast({
          title: '请稍后再试',
          icon: 'none'
        });
        reject(err);
      }
    });
  });
};
_vue.default.prototype.dateFtt = function (fmt, date) {
  var o = {
    "M+": date.getMonth() + 1,
    //月份
    "d+": date.getDate(),
    //日
    "h+": date.getHours(),
    //小时
    "m+": date.getMinutes(),
    //分
    "s+": date.getSeconds(),
    //秒
    "q+": Math.floor((date.getMonth() + 3) / 3),
    //季度
    "S": date.getMilliseconds() //毫秒
  };

  if (/(y+)/.test(fmt)) fmt = fmt.replace(RegExp.$1, (date.getFullYear() + "").substr(4 - RegExp.$1.length));
  for (var k in o) {
    if (new RegExp("(" + k + ")").test(fmt)) fmt = fmt.replace(RegExp.$1, RegExp.$1.length == 1 ? o[k] : ("00" + o[k]).substr(("" + o[k]).length));
  }
  return fmt;
};
_App.default.mpType = 'app';
var app = new _vue.default(_objectSpread({
  store: _store.default
}, _App.default));
createApp(app).$mount();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/wx.js */ 1)["default"], __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 2)["default"], __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 2)["createApp"]))

/***/ }),

/***/ 31:
/*!*************************************************!*\
  !*** E:/project/yhlc-v1.0/agent-uniapp/App.vue ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./App.vue?vue&type=script&lang=js& */ 32);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _App_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./App.vue?vue&type=style&index=0&lang=scss& */ 37);
/* harmony import */ var _D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 39);
var render, staticRenderFns, recyclableRender, components
var renderjs





/* normalize component */

var component = Object(_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"],
  render,
  staticRenderFns,
  false,
  null,
  null,
  null,
  false,
  components,
  renderjs
)

component.options.__file = "App.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 32:
/*!**************************************************************************!*\
  !*** E:/project/yhlc-v1.0/agent-uniapp/App.vue?vue&type=script&lang=js& ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--13-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./App.vue?vue&type=script&lang=js& */ 33);
/* harmony import */ var _D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 33:
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--13-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!E:/project/yhlc-v1.0/agent-uniapp/App.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(wx, uni) {

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ 4);
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _defineProperty2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/defineProperty */ 11));
var _vuex = __webpack_require__(/*! vuex */ 34);
var _privacy = __webpack_require__(/*! @/utils/privacy.js */ 35);
var _updateManager = __webpack_require__(/*! @/utils/updateManager.js */ 36);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0, _defineProperty2.default)(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
// 根据 onNeedPrivacyAuthorization 回调里实际触发的接口名，给出对应的隐私提示文案。
// 参考: https://developers.weixin.qq.com/miniprogram/dev/framework/user-privacy/
function buildPrivacyContent(eventInfo) {
  var name = String(eventInfo && eventInfo.privacyInterfaceName || '').toLowerCase();
  // 蓝牙 / 附近设备
  if (name.indexOf('bluetooth') >= 0 || name === 'openbluetoothadapter' || name === 'getbluetoothdevices' || name === 'getconnectedbluetoothdevices' || name === 'startbluetoothdevicesdiscovery' || name === 'stopbluetoothdevicesdiscovery' || name === 'listenbeaconupdate') {
    return '使用蓝牙打印功能需要获取附近设备信息，是否同意？';
  }
  // 相册 / 相机
  if (name === 'chooseimage' || name === 'choosemedia' || name === 'choosevideo' || name === 'choosemessagefile' || name === 'getimageinfo' || name === 'saveimagetophotosalbum' || name === 'savevideotophotosalbum') {
    return '上传图片/视频需要访问你的相册和相机，是否同意？';
  }
  // 位置
  if (name === 'getlocation' || name === 'chooselocation' || name === 'getfuzzylocation') {
    return '需要获取你的地理位置信息，是否同意？';
  }
  // 录音 / 麦克风
  if (name === 'startrecord' || name === 'getrecordermanager') {
    return '需要使用麦克风进行录音，是否同意？';
  }
  // 通讯录
  if (name === 'choosecontact' || name === 'addphonecontact') {
    return '需要访问你的通讯录联系人，是否同意？';
  }
  // 文件 / 相册写入
  if (name === 'savedfilestodisk' || name === 'savedirectory') {
    return '需要保存文件到你的相册或本地，是否同意？';
  }
  // 兜底
  return '为了继续使用该功能，需要你同意《隐私保护指引》，是否同意？';
}
var _default = {
  onLaunch: function onLaunch() {
    console.log('App Launch');
    this.loadSession();
    this.initPrivacyHandler();
    (0, _updateManager.checkAppUpdate)({
      silent: true
    });
  },
  onShow: function onShow() {
    console.log('App Show');
    (0, _updateManager.checkAppUpdate)({
      silent: true
    });
  },
  onHide: function onHide() {
    console.log('App Hide');
  },
  methods: _objectSpread(_objectSpread({}, (0, _vuex.mapMutations)(['loadSession'])), {}, {
    initPrivacyHandler: function initPrivacyHandler() {
      if (typeof wx !== 'undefined' && wx.onNeedPrivacyAuthorization) {
        wx.onNeedPrivacyAuthorization(function (resolve, eventInfo) {
          var content = buildPrivacyContent(eventInfo);
          // 优先交给当前页面挂载的 PrivacyAuthPopup 组件处理（含真实 agree 按钮，
          // 微信基础库才会校验通过并记录授权）
          if ((0, _privacy.showPrivacyAuthPopup)({
            resolve: resolve,
            content: content
          })) return;
          // 兜底：当前页面未挂载 PrivacyAuthPopup 时，用 showModal 放行本次调用。
          // 注意：showModal 的"同意"不会被微信记录为正式授权，仅避免接口卡死；
          // 真正的授权记录依赖登录/注册页的 PrivacyAuthPopup。
          uni.showModal({
            title: '隐私提示',
            content: content,
            confirmText: '同意',
            cancelText: '拒绝',
            success: function success(res) {
              if (res.confirm) {
                resolve({
                  event: 'agree'
                });
              } else {
                resolve({
                  event: 'disagree'
                });
              }
            },
            fail: function fail() {
              resolve({
                event: 'disagree'
              });
            }
          });
        });
      }
    }
  })
};
exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/wx.js */ 1)["default"], __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 2)["default"]))

/***/ }),

/***/ 37:
/*!***********************************************************************************!*\
  !*** E:/project/yhlc-v1.0/agent-uniapp/App.vue?vue&type=style&index=0&lang=scss& ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_App_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/mini-css-extract-plugin/dist/loader.js??ref--8-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--8-oneOf-1-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-2!./node_modules/postcss-loader/src??ref--8-oneOf-1-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/sass-loader/dist/cjs.js??ref--8-oneOf-1-4!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-5!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./App.vue?vue&type=style&index=0&lang=scss& */ 38);
/* harmony import */ var _D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_App_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_App_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_App_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_App_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_App_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 38:
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js??ref--8-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--8-oneOf-1-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-2!./node_modules/postcss-loader/src??ref--8-oneOf-1-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/sass-loader/dist/cjs.js??ref--8-oneOf-1-4!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-5!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!E:/project/yhlc-v1.0/agent-uniapp/App.vue?vue&type=style&index=0&lang=scss& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
    if(false) { var cssReload; }
  

/***/ })

},[[0,"common/runtime","common/vendor"]]]);
//# sourceMappingURL=../../.sourcemap/mp-weixin/common/main.js.map
},{isPage:false,isComponent:false,currentFile:'common/main.js'});;__wxRoute = undefined;__wxRouteBegin = undefined;__wxAppCurrentFile__=undefined;define("common/runtime.js",function(require,module,exports,window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){

  !function(){try{var a=Function("return this")();a&&!a.Math&&(Object.assign(a,{isFinite:isFinite,Array:Array,Date:Date,Error:Error,Function:Function,Math:Math,Object:Object,RegExp:RegExp,String:String,TypeError:TypeError,setTimeout:setTimeout,clearTimeout:clearTimeout,setInterval:setInterval,clearInterval:clearInterval}),"undefined"!=typeof Reflect&&(a.Reflect=Reflect))}catch(a){}}();
  /******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(Object.prototype.hasOwnProperty.call(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded CSS chunks
/******/ 	var installedCssChunks = {
/******/ 		"common/runtime": 0
/******/ 	}
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"common/runtime": 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
/******/
/******/ 	// script path function
/******/ 	function jsonpScriptSrc(chunkId) {
/******/ 		return __webpack_require__.p + "" + chunkId + ".js"
/******/ 	}
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/ 	// This file contains only the entry chunk.
/******/ 	// The chunk loading function for additional chunks
/******/ 	__webpack_require__.e = function requireEnsure(chunkId) {
/******/ 		var promises = [];
/******/
/******/
/******/
/******/
/******/ 		// JSONP chunk loading for javascript
/******/
/******/ 		var installedChunkData = installedChunks[chunkId];
/******/ 		if(installedChunkData !== 0) { // 0 means "already installed".
/******/
/******/ 			// a Promise means "currently loading".
/******/ 			if(installedChunkData) {
/******/ 				promises.push(installedChunkData[2]);
/******/ 			} else {
/******/ 				// setup Promise in chunk cache
/******/ 				var promise = new Promise(function(resolve, reject) {
/******/ 					installedChunkData = installedChunks[chunkId] = [resolve, reject];
/******/ 				});
/******/ 				promises.push(installedChunkData[2] = promise);
/******/
/******/ 				// start chunk loading
/******/ 				var script = document.createElement('script');
/******/ 				var onScriptComplete;
/******/
/******/ 				script.charset = 'utf-8';
/******/ 				script.timeout = 120;
/******/ 				if (__webpack_require__.nc) {
/******/ 					script.setAttribute("nonce", __webpack_require__.nc);
/******/ 				}
/******/ 				script.src = jsonpScriptSrc(chunkId);
/******/
/******/ 				// create error before stack unwound to get useful stacktrace later
/******/ 				var error = new Error();
/******/ 				onScriptComplete = function (event) {
/******/ 					// avoid mem leaks in IE.
/******/ 					script.onerror = script.onload = null;
/******/ 					clearTimeout(timeout);
/******/ 					var chunk = installedChunks[chunkId];
/******/ 					if(chunk !== 0) {
/******/ 						if(chunk) {
/******/ 							var errorType = event && (event.type === 'load' ? 'missing' : event.type);
/******/ 							var realSrc = event && event.target && event.target.src;
/******/ 							error.message = 'Loading chunk ' + chunkId + ' failed.\n(' + errorType + ': ' + realSrc + ')';
/******/ 							error.name = 'ChunkLoadError';
/******/ 							error.type = errorType;
/******/ 							error.request = realSrc;
/******/ 							chunk[1](error);
/******/ 						}
/******/ 						installedChunks[chunkId] = undefined;
/******/ 					}
/******/ 				};
/******/ 				var timeout = setTimeout(function(){
/******/ 					onScriptComplete({ type: 'timeout', target: script });
/******/ 				}, 120000);
/******/ 				script.onerror = script.onload = onScriptComplete;
/******/ 				document.head.appendChild(script);
/******/ 			}
/******/ 		}
/******/ 		return Promise.all(promises);
/******/ 	};
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/ 	// on error function for async loading
/******/ 	__webpack_require__.oe = function(err) { console.error(err); throw err; };
/******/
/******/ 	var jsonpArray = global["webpackJsonp"] = global["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// run deferred modules from other chunks
/******/ 	checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ([]);
//# sourceMappingURL=../../.sourcemap/mp-weixin/common/runtime.js.map
  
},{isPage:false,isComponent:false,currentFile:'common/runtime.js'});;__wxRoute = undefined;__wxRouteBegin = undefined;__wxAppCurrentFile__=undefined;define("common/vendor.js",function(require,module,exports,window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){
(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["common/vendor"],{

/***/ 1:
/*!*********************************************************!*\
  !*** ./node_modules/@dcloudio/uni-mp-weixin/dist/wx.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var objectKeys = ['qy', 'env', 'error', 'version', 'lanDebug', 'cloud', 'serviceMarket', 'router', 'worklet', '__webpack_require_UNI_MP_PLUGIN__'];
var singlePageDisableKey = ['lanDebug', 'router', 'worklet'];
var target = typeof globalThis !== 'undefined' ? globalThis : function () {
  return this;
}();
var key = ['w', 'x'].join('');
var oldWx = target[key];
var launchOption = oldWx.getLaunchOptionsSync ? oldWx.getLaunchOptionsSync() : null;
function isWxKey(key) {
  if (launchOption && launchOption.scene === 1154 && singlePageDisableKey.includes(key)) {
    return false;
  }
  return objectKeys.indexOf(key) > -1 || typeof oldWx[key] === 'function';
}
function initWx() {
  var newWx = {};
  for (var _key in oldWx) {
    if (isWxKey(_key)) {
      // TODO wrapper function
      newWx[_key] = oldWx[_key];
    }
  }
  return newWx;
}
target[key] = initWx();
if (!target[key].canIUse('getAppBaseInfo')) {
  target[key].getAppBaseInfo = target[key].getSystemInfoSync;
}
if (!target[key].canIUse('getWindowInfo')) {
  target[key].getWindowInfo = target[key].getSystemInfoSync;
}
if (!target[key].canIUse('getDeviceInfo')) {
  target[key].getDeviceInfo = target[key].getSystemInfoSync;
}
var _default = target[key];
exports.default = _default;

/***/ }),

/***/ 10:
/*!****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/nonIterableRest.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
module.exports = _nonIterableRest, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ 108:
/*!********************************************************************!*\
  !*** E:/project/yhlc-v1.0/agent-uniapp/utils/printer/bluetooth.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(uni) {

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ 4);
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _regenerator = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/regenerator */ 58));
var _typeof2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/typeof */ 13));
var _asyncToGenerator2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ 60));
var services_uuid1 = '0000EEE0-0000-1000-8000-00805F9B34FB';
var services_uuid2 = '0000FF00-0000-1000-8000-00805F9B34FB';
var services_uuid3 = '49535343-FE7D-4AE5-8FA9-9FAFD205E455';
var STORAGE_KEYS = {
  profile: 'printer_profile',
  connected: 'printer_connected'
};
function isMpWeixin() {
  return true;
}

/**
 * 打印机蓝牙分包平台（ios / android）
 * 鸿蒙版微信 systemInfo.platform 多为 harmonyos，蓝牙栈按 Android 处理
 * @param {object} sys uni.getSystemInfo / getSystemInfoSync 返回值
 * @returns {'ios'|'android'}
 */
function resolveBlePrintPlatform() {
  var sys = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var platform = String(sys.platform || '').toLowerCase();
  var osName = String(sys.osName || '').toLowerCase();
  var system = String(sys.system || '').toLowerCase();
  if (platform === 'ios' || osName.includes('ios') || system.includes('ios')) {
    return 'ios';
  }
  if (platform === 'android' || platform === 'harmonyos' || platform === 'openharmony' || osName.includes('harmony') || osName.includes('android') || system.includes('harmony') || system.includes('android')) {
    return 'android';
  }
  return 'android';
}

/** 鸿蒙版微信：MTU 协商可能成功但 >20B 写入会失败，需固定 20 字节分包 */
function isHarmonyBlePlatform() {
  var sys = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var platform = String(sys.platform || '').toLowerCase();
  var osName = String(sys.osName || '').toLowerCase();
  var system = String(sys.system || '').toLowerCase();
  return platform === 'harmonyos' || platform === 'openharmony' || osName.includes('harmony') || system.includes('harmony');
}
function getProfile() {
  return uni.getStorageSync(STORAGE_KEYS.profile) || null;
}
function saveProfile(profile) {
  uni.setStorageSync(STORAGE_KEYS.profile, profile || {});
}
function clearProfile() {
  uni.removeStorageSync(STORAGE_KEYS.profile);
  setConnected(false);
}
function setConnected(connected) {
  uni.setStorageSync(STORAGE_KEYS.connected, !!connected);
}
function isConnected() {
  return !!uni.getStorageSync(STORAGE_KEYS.connected);
}
var _mtu = 20;
function getMtu() {
  return _mtu;
}
function downgradeMtu(value) {
  _mtu = Math.max(20, value);
}

/**
 * 协商 BLE MTU（仅 Android/HarmonyOS 有效，iOS 固定 20 字节）
 * 必须在连接建立后调用，建议延迟 200ms 以避免过早协商失败
 */
function negotiateMtu(_x) {
  return _negotiateMtu.apply(this, arguments);
}
function _negotiateMtu() {
  _negotiateMtu = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee(deviceId) {
    var sys, platform, candidates, _loop, _i, _candidates, _ret;
    return _regenerator.default.wrap(function _callee$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            sys = uni.getSystemInfoSync();
            platform = resolveBlePrintPlatform(sys);
            if (!(platform === 'ios' || isHarmonyBlePlatform(sys))) {
              _context2.next = 5;
              break;
            }
            _mtu = 20;
            return _context2.abrupt("return", 20);
          case 5:
            if (!(typeof uni.setBLEMTU !== 'function')) {
              _context2.next = 8;
              break;
            }
            _mtu = 20;
            return _context2.abrupt("return", 20);
          case 8:
            // 从小到大尝试；鸿蒙上 512 可能搞崩连接，先试 128 更安全
            candidates = [128, 247, 512];
            _loop = /*#__PURE__*/_regenerator.default.mark(function _loop() {
              var target, res, negotiated;
              return _regenerator.default.wrap(function _loop$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      target = _candidates[_i];
                      _context.prev = 1;
                      _context.next = 4;
                      return new Promise(function (r) {
                        return setTimeout(r, 200);
                      });
                    case 4:
                      _context.next = 6;
                      return toPromise(function (resolve, reject) {
                        uni.setBLEMTU({
                          deviceId: deviceId,
                          mtu: target,
                          success: function success(r) {
                            return resolve(r);
                          },
                          fail: function fail(err) {
                            return reject(err);
                          }
                        });
                      });
                    case 6:
                      res = _context.sent;
                      negotiated = Math.min(res.mtu || target, target);
                      _mtu = Math.max(20, negotiated - 3);
                      console.log("[BLE] MTU negotiated: ".concat(negotiated, " (target=").concat(target, "), effective payload: ").concat(_mtu));
                      return _context.abrupt("return", {
                        v: _mtu
                      });
                    case 13:
                      _context.prev = 13;
                      _context.t0 = _context["catch"](1);
                      console.warn("[BLE] MTU ".concat(target, " failed:"), _context.t0 && (_context.t0.errMsg || _context.t0.message));
                    case 16:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _loop, null, [[1, 13]]);
            });
            _i = 0, _candidates = candidates;
          case 11:
            if (!(_i < _candidates.length)) {
              _context2.next = 19;
              break;
            }
            return _context2.delegateYield(_loop(), "t0", 13);
          case 13:
            _ret = _context2.t0;
            if (!((0, _typeof2.default)(_ret) === "object")) {
              _context2.next = 16;
              break;
            }
            return _context2.abrupt("return", _ret.v);
          case 16:
            _i++;
            _context2.next = 11;
            break;
          case 19:
            console.warn('[BLE] all MTU negotiation attempts failed, fallback to 20');
            _mtu = 20;
            return _context2.abrupt("return", 20);
          case 22:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee);
  }));
  return _negotiateMtu.apply(this, arguments);
}
var stateWatcherInited = false;
function initConnectionWatcher() {
  if (stateWatcherInited || !isMpWeixin() || !uni.onBLEConnectionStateChange) return;
  stateWatcherInited = true;
  uni.onBLEConnectionStateChange(function (res) {
    var current = getProfile() || {};
    if (!current.deviceId) {
      setConnected(false);
      return;
    }
    // 只处理当前绑定打印机，避免其他蓝牙设备影响状态
    if (String(res.deviceId || '') === String(current.deviceId || '')) {
      setConnected(!!res.connected);
    }
  });
}
function toPromise(fn) {
  return new Promise(function (resolve, reject) {
    fn(resolve, reject);
  });
}

/**
 * 将微信 BLE 错误转为可读提示（含隐私授权、蓝牙未开等常见场景）
 * @see https://developers.weixin.qq.com/miniprogram/dev/framework/user-privacy/PrivacyAuthorize.html
 */
function formatBleError(err) {
  var fallback = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '蓝牙操作失败';
  var msg = String(err && err.errMsg || err && err.message || fallback);
  var code = err && (err.errCode != null ? err.errCode : err.errno);
  if (/privacy api banned/i.test(msg)) {
    return new Error('小程序蓝牙权限未开通：请在管理后台《用户隐私保护指引》声明「访问你的蓝牙」并重新提审发布');
  }
  if (/api scope is not declared/i.test(msg)) {
    return new Error('小程序未声明蓝牙隐私类型，请在管理后台补充「访问你的蓝牙」（约5分钟后生效）');
  }
  if (/auth deny|not agree|privacy/i.test(msg) && !/privacy api banned/i.test(msg)) {
    return new Error('请先同意小程序隐私协议后再使用蓝牙功能');
  }
  if (/bluetooth adapter not available|10001/i.test(msg) || code === 10001) {
    return new Error('请开启手机蓝牙后重试');
  }
  if (/not init|10000/i.test(msg) || code === 10000) {
    return new Error('蓝牙未初始化，请返回重新搜索打印机');
  }
  if (/no connection|10006/i.test(msg) || code === 10006) {
    return new Error('打印机连接已断开，请重新连接');
  }
  if (/system not support|10009/i.test(msg) || code === 10009) {
    return new Error('当前系统不支持蓝牙，请更换设备或升级微信');
  }
  return err instanceof Error ? err : new Error(msg || fallback);
}
function isAndroidLikeBlePlatform() {
  var sys = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return resolveBlePrintPlatform(sys) === 'android';
}
function markLocationError(message, type, cause) {
  var err = new Error(message);
  if (type === 'denied') err.__bleLocationDenied = true;
  if (type === 'off') err.__bleLocationOff = true;
  if (cause) err.cause = cause;
  return err;
}

/**
 * Android / 鸿蒙 BLE 扫描前请求定位授权（系统要求，iOS 无需）
 */
function ensureLocationForBleScan() {
  return _ensureLocationForBleScan.apply(this, arguments);
}
function _ensureLocationForBleScan() {
  _ensureLocationForBleScan = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee2() {
    var sys, setting, auth, msg;
    return _regenerator.default.wrap(function _callee2$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            if (isMpWeixin()) {
              _context3.next = 2;
              break;
            }
            return _context3.abrupt("return", true);
          case 2:
            sys = uni.getSystemInfoSync();
            if (isAndroidLikeBlePlatform(sys)) {
              _context3.next = 5;
              break;
            }
            return _context3.abrupt("return", true);
          case 5:
            _context3.next = 7;
            return toPromise(function (resolve, reject) {
              uni.getSetting({
                success: resolve,
                fail: reject
              });
            }).catch(function () {
              return {};
            });
          case 7:
            setting = _context3.sent;
            auth = setting.authSetting && setting.authSetting['scope.userLocation'];
            if (!(auth === false)) {
              _context3.next = 11;
              break;
            }
            throw markLocationError('定位权限未开启，无法搜索蓝牙设备。请在设置中允许微信及本小程序使用定位。', 'denied');
          case 11:
            if (!(auth !== true && typeof uni.authorize === 'function')) {
              _context3.next = 20;
              break;
            }
            _context3.prev = 12;
            _context3.next = 15;
            return toPromise(function (resolve, reject) {
              uni.authorize({
                scope: 'scope.userLocation',
                success: resolve,
                fail: reject
              });
            });
          case 15:
            _context3.next = 20;
            break;
          case 17:
            _context3.prev = 17;
            _context3.t0 = _context3["catch"](12);
            throw markLocationError('定位权限未开启，无法搜索蓝牙设备。请在设置中允许微信及本小程序使用定位。', 'denied', _context3.t0);
          case 20:
            if (!(typeof uni.getLocation !== 'function')) {
              _context3.next = 22;
              break;
            }
            return _context3.abrupt("return", true);
          case 22:
            _context3.prev = 22;
            _context3.next = 25;
            return toPromise(function (resolve, reject) {
              uni.getLocation({
                type: 'wgs84',
                isHighAccuracy: false,
                success: resolve,
                fail: reject
              });
            });
          case 25:
            _context3.next = 35;
            break;
          case 27:
            _context3.prev = 27;
            _context3.t1 = _context3["catch"](22);
            msg = String(_context3.t1 && _context3.t1.errMsg || '');
            if (!/auth deny|permission|1509008|location permission|denied/i.test(msg)) {
              _context3.next = 32;
              break;
            }
            throw markLocationError('定位权限被拒绝，无法搜索蓝牙设备。请允许微信及本小程序使用定位权限。', 'denied', _context3.t1);
          case 32:
            if (!/location service|switch|1509009|unavailable/i.test(msg)) {
              _context3.next = 34;
              break;
            }
            throw markLocationError('手机定位开关未打开，无法搜索蓝牙设备。请在系统设置中开启定位后再试。', 'off', _context3.t1);
          case 34:
            throw markLocationError('获取定位失败，无法搜索蓝牙设备。请确认定位开关已开且已授权微信使用定位。', 'denied', _context3.t1);
          case 35:
            return _context3.abrupt("return", true);
          case 36:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee2, null, [[12, 17], [22, 27]]);
  }));
  return _ensureLocationForBleScan.apply(this, arguments);
}
function isDiscoveryLocationError(err, formatted) {
  if (err && (err.__bleLocationDenied || err.__bleLocationOff)) return true;
  var msg = String(err && err.errMsg || formatted && formatted.message || err && err.message || '');
  var errno = err && err.errno;
  return errno === 1509008 || errno === 1509009 || /location permission|定位权限|定位开关|location service/i.test(msg);
}

/**
 * startBluetoothDevicesDiscovery 失败时的可读提示
 */
function formatDiscoveryError(err) {
  var fallback = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '搜索蓝牙设备失败';
  var msg = String(err && err.errMsg || err && err.message || fallback);
  var errCode = err && err.errCode != null ? err.errCode : null;
  var errno = err && err.errno != null ? err.errno : null;
  if (err && err.__bleLocationDenied) {
    return err instanceof Error ? err : new Error(String(err.message || msg));
  }
  if (err && err.__bleLocationOff) {
    return err instanceof Error ? err : new Error(String(err.message || msg));
  }
  if (errno === 1509008 || /location permission is denied/i.test(msg)) {
    return new Error('定位权限被拒绝，无法搜索蓝牙设备。请在手机设置中开启定位，并允许微信使用定位权限。');
  }
  if (errno === 1509009 || /location service|location switch off/i.test(msg)) {
    return new Error('手机定位开关未打开，无法搜索蓝牙设备。请在系统设置中开启定位后再试。');
  }
  if (errCode === 10001 || /not available|10001/i.test(msg)) {
    return new Error('请开启手机蓝牙后重试');
  }
  if (errCode === 10000 || /not init|10000/i.test(msg)) {
    return new Error('蓝牙未初始化，请返回重新点击搜索');
  }
  if (errCode === -1 || errno === -1) {
    if (/already connect|is discovering|discovering/i.test(msg)) {
      return new Error('蓝牙正在连接或扫描中，请稍候再试');
    }
    if (/location/i.test(msg)) {
      return new Error('定位权限不足，无法搜索蓝牙设备。请开启定位权限后重试。');
    }
    return new Error('蓝牙适配器忙（可能已有连接或正在扫描），请断开后重试');
  }
  if (errCode === 10008 || /system error|10008/i.test(msg)) {
    return new Error('系统蓝牙异常，请关闭并重新打开手机蓝牙后再试');
  }
  if (errCode === 10012 || /operate time out|10012/i.test(msg)) {
    return new Error('蓝牙搜索超时，请重试');
  }
  if (errCode === 10009 || /system not support|10009/i.test(msg)) {
    return new Error('当前系统不支持蓝牙，请更换设备或升级微信');
  }
  var common = formatBleError(err, fallback);
  if (common.message && common.message !== msg && common.message !== fallback) {
    return common;
  }
  var detail = [];
  if (errCode != null) detail.push("errCode=".concat(errCode));
  if (errno != null) detail.push("errno=".concat(errno));
  var tail = detail.length ? "\uFF08".concat(detail.join('，'), "\uFF09") : '';
  var brief = msg.replace(/^startBluetoothDevicesDiscovery:fail:?/i, '').trim();
  if (brief && brief !== fallback && !detail.length) {
    return new Error("".concat(fallback, "\uFF1A").concat(brief));
  }
  return new Error("".concat(fallback).concat(tail));
}
function isPrivacyRejectError(err) {
  var msg = String(err && err.errMsg || err && err.message || '');
  var code = err && (err.errCode != null ? err.errCode : err.errno);
  return /privacy|auth deny|not agree|disagree|104|103|112/i.test(msg) || code === 103 || code === 104 || code === 112;
}
function isPrivacyBannedError(err) {
  var msg = String(err && err.errMsg || err && err.message || '');
  return /privacy api banned|api scope is not declared/i.test(msg);
}
function isPrivacyRelatedError(err) {
  return isPrivacyRejectError(err) || isPrivacyBannedError(err);
}
function getPrivacySetting() {
  if (!isMpWeixin() || typeof uni.getPrivacySetting !== 'function') {
    return Promise.resolve({
      needAuthorization: false
    });
  }
  return toPromise(function (resolve, reject) {
    uni.getPrivacySetting({
      success: function success(res) {
        return resolve(res || {});
      },
      fail: function fail(err) {
        return reject(err);
      }
    });
  });
}
function openPrivacyContract() {
  if (typeof uni.openPrivacyContract !== 'function') {
    return Promise.resolve(false);
  }
  return toPromise(function (resolve, reject) {
    uni.openPrivacyContract({
      success: function success() {
        return resolve(true);
      },
      fail: function fail(err) {
        return reject(err);
      }
    });
  });
}

/** 隐私未弹窗 / 用户拒绝时，弹出说明并引导查看协议、重试授权 */
function showPrivacyAuthModal(content) {
  return new Promise(function (resolve) {
    uni.showModal({
      title: '需要同意隐私协议',
      content: content || '使用蓝牙打印机需同意《隐私保护指引》中的「访问你的蓝牙」。若未弹出授权窗，请点「查看并重试」。',
      confirmText: '查看并重试',
      cancelText: '取消',
      showCancel: true,
      success: function success(res) {
        return resolve(!!(res && res.confirm));
      }
    });
  });
}
function requestPrivacyAuthorizeOnce() {
  return toPromise(function (resolve, reject) {
    uni.requirePrivacyAuthorize({
      success: function success() {
        return resolve(true);
      },
      fail: function fail(err) {
        return reject(err);
      }
    });
  });
}

/**
 * 调用蓝牙隐私接口前授权；未弹窗或用户拒绝时弹出说明并引导重试
 * @see https://developers.weixin.qq.com/miniprogram/dev/framework/user-privacy/PrivacyAuthorize.html
 */
function ensurePrivacyAuthorizedWithPrompt() {
  return _ensurePrivacyAuthorizedWithPrompt.apply(this, arguments);
}
function _ensurePrivacyAuthorizedWithPrompt() {
  _ensurePrivacyAuthorizedWithPrompt = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee3() {
    var setting, formatted, hint, confirmed, retryFormatted;
    return _regenerator.default.wrap(function _callee3$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            if (isMpWeixin()) {
              _context4.next = 2;
              break;
            }
            return _context4.abrupt("return", true);
          case 2:
            if (!(typeof uni.requirePrivacyAuthorize !== 'function')) {
              _context4.next = 4;
              break;
            }
            return _context4.abrupt("return", true);
          case 4:
            _context4.next = 6;
            return getPrivacySetting().catch(function () {
              return {};
            });
          case 6:
            setting = _context4.sent;
            if (!(setting && setting.needAuthorization === false)) {
              _context4.next = 9;
              break;
            }
            return _context4.abrupt("return", true);
          case 9:
            _context4.prev = 9;
            _context4.next = 12;
            return requestPrivacyAuthorizeOnce();
          case 12:
            return _context4.abrupt("return", true);
          case 15:
            _context4.prev = 15;
            _context4.t0 = _context4["catch"](9);
            formatted = formatBleError(_context4.t0, '隐私授权失败');
            if (!isPrivacyBannedError(_context4.t0)) {
              _context4.next = 22;
              break;
            }
            _context4.next = 21;
            return showPrivacyAuthModal(formatted.message);
          case 21:
            throw formatted;
          case 22:
            hint = isPrivacyRejectError(_context4.t0) ? '您拒绝了隐私授权，无法使用蓝牙。请查看协议并同意后重试。' : '未检测到隐私授权（可能未弹出授权窗）。请查看协议并同意后重试。';
            _context4.next = 25;
            return showPrivacyAuthModal("".concat(hint, "\n\n").concat(formatted.message));
          case 25:
            confirmed = _context4.sent;
            if (confirmed) {
              _context4.next = 28;
              break;
            }
            throw formatted;
          case 28:
            _context4.next = 30;
            return openPrivacyContract().catch(function () {});
          case 30:
            _context4.prev = 30;
            _context4.next = 33;
            return requestPrivacyAuthorizeOnce();
          case 33:
            return _context4.abrupt("return", true);
          case 36:
            _context4.prev = 36;
            _context4.t1 = _context4["catch"](30);
            retryFormatted = formatBleError(_context4.t1, '仍未获得隐私授权。请删除小程序后重新进入，或在微信中清除授权后再试。');
            _context4.next = 41;
            return showPrivacyAuthModal(retryFormatted.message);
          case 41:
            throw retryFormatted;
          case 42:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee3, null, [[9, 15], [30, 36]]);
  }));
  return _ensurePrivacyAuthorizedWithPrompt.apply(this, arguments);
}
function ensurePrivacyAuthorized() {
  return ensurePrivacyAuthorizedWithPrompt();
}
function openAdapter() {
  return _openAdapter.apply(this, arguments);
}
function _openAdapter() {
  _openAdapter = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee4() {
    var formatted, confirmed;
    return _regenerator.default.wrap(function _callee4$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            _context5.next = 2;
            return ensurePrivacyAuthorizedWithPrompt();
          case 2:
            _context5.prev = 2;
            _context5.next = 5;
            return toPromise(function (resolve, reject) {
              uni.openBluetoothAdapter({
                success: function success() {
                  return resolve(true);
                },
                fail: function fail(err) {
                  return reject(err);
                }
              });
            });
          case 5:
            return _context5.abrupt("return", _context5.sent);
          case 8:
            _context5.prev = 8;
            _context5.t0 = _context5["catch"](2);
            formatted = formatBleError(_context5.t0, '蓝牙初始化失败');
            if (!isPrivacyRelatedError(_context5.t0)) {
              _context5.next = 29;
              break;
            }
            _context5.next = 14;
            return showPrivacyAuthModal(formatted.message);
          case 14:
            confirmed = _context5.sent;
            if (!confirmed) {
              _context5.next = 29;
              break;
            }
            _context5.next = 18;
            return openPrivacyContract().catch(function () {});
          case 18:
            _context5.prev = 18;
            _context5.next = 21;
            return ensurePrivacyAuthorizedWithPrompt();
          case 21:
            _context5.next = 23;
            return toPromise(function (resolve, reject) {
              uni.openBluetoothAdapter({
                success: function success() {
                  return resolve(true);
                },
                fail: function fail(e) {
                  return reject(formatBleError(e, '蓝牙初始化失败'));
                }
              });
            });
          case 23:
            return _context5.abrupt("return", _context5.sent);
          case 26:
            _context5.prev = 26;
            _context5.t1 = _context5["catch"](18);
            throw _context5.t1 instanceof Error ? _context5.t1 : formatted;
          case 29:
            throw formatted;
          case 30:
          case "end":
            return _context5.stop();
        }
      }
    }, _callee4, null, [[2, 8], [18, 26]]);
  }));
  return _openAdapter.apply(this, arguments);
}
function createConnection(deviceId) {
  return toPromise(function (resolve, reject) {
    uni.createBLEConnection({
      deviceId: deviceId,
      success: function success() {
        return resolve(true);
      },
      fail: function fail(err) {
        return reject(err);
      }
    });
  });
}
function closeConnection(deviceId) {
  return toPromise(function (resolve) {
    uni.closeBLEConnection({
      deviceId: deviceId,
      complete: function complete() {
        return resolve(true);
      }
    });
  });
}
function getServices(deviceId) {
  return toPromise(function (resolve, reject) {
    uni.getBLEDeviceServices({
      deviceId: deviceId,
      success: function success(res) {
        return resolve(res.services || []);
      },
      fail: function fail(err) {
        return reject(err);
      }
    });
  });
}
function getCharacteristics(deviceId, serviceId) {
  return toPromise(function (resolve, reject) {
    uni.getBLEDeviceCharacteristics({
      deviceId: deviceId,
      serviceId: serviceId,
      success: function success(res) {
        return resolve(res.characteristics || []);
      },
      fail: function fail(err) {
        return reject(err);
      }
    });
  });
}
function pickServiceId(services) {
  for (var i = 0; i < services.length; i++) {
    var id = String(services[i].uuid || '').toUpperCase();
    if (id.indexOf(services_uuid1) !== -1 || id.indexOf(services_uuid2) !== -1 || id.indexOf(services_uuid3) !== -1) {
      return services[i].uuid;
    }
  }
  return '';
}
function pickCharacteristicIds(characteristics) {
  var writeId = '';
  var readId = '';
  var notifyId = '';
  var writeNoResponse = false;
  for (var i = 0; i < characteristics.length; i++) {
    var c = characteristics[i];
    var props = c.properties || {};
    if (props.write || props.writeNoResponse) {
      writeId = c.uuid;
      writeNoResponse = !!props.writeNoResponse && !props.write;
    }
    if (props.read) readId = c.uuid;
    if (props.notify) notifyId = c.uuid;
  }
  return {
    writeId: writeId,
    readId: readId,
    notifyId: notifyId,
    writeNoResponse: writeNoResponse
  };
}
function connectAndPrepare(_x2) {
  return _connectAndPrepare.apply(this, arguments);
}
function _connectAndPrepare() {
  _connectAndPrepare = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee5(deviceId) {
    var services, serviceId, chars, ids, profile;
    return _regenerator.default.wrap(function _callee5$(_context6) {
      while (1) {
        switch (_context6.prev = _context6.next) {
          case 0:
            _context6.next = 2;
            return openAdapter();
          case 2:
            _context6.next = 4;
            return closeConnection(deviceId).catch(function () {});
          case 4:
            _context6.next = 6;
            return createConnection(deviceId);
          case 6:
            _context6.next = 8;
            return new Promise(function (r) {
              return setTimeout(r, 300);
            });
          case 8:
            _context6.next = 10;
            return negotiateMtu(deviceId).catch(function () {});
          case 10:
            _context6.next = 12;
            return getServices(deviceId);
          case 12:
            services = _context6.sent;
            serviceId = pickServiceId(services);
            if (serviceId) {
              _context6.next = 16;
              break;
            }
            throw new Error('未找到打印机主服务');
          case 16:
            _context6.next = 18;
            return getCharacteristics(deviceId, serviceId);
          case 18:
            chars = _context6.sent;
            ids = pickCharacteristicIds(chars);
            if (ids.writeId) {
              _context6.next = 22;
              break;
            }
            throw new Error('未找到可写特征');
          case 22:
            profile = {
              deviceId: deviceId,
              serviceId: serviceId,
              writeId: ids.writeId,
              readId: ids.readId || '',
              notifyId: ids.notifyId || '',
              writeNoResponse: !!ids.writeNoResponse
            };
            saveProfile(profile);
            setConnected(true);
            return _context6.abrupt("return", profile);
          case 26:
          case "end":
            return _context6.stop();
        }
      }
    }, _callee5);
  }));
  return _connectAndPrepare.apply(this, arguments);
}
function autoReconnect() {
  return _autoReconnect.apply(this, arguments);
}
function _autoReconnect() {
  _autoReconnect = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee6() {
    var profile, alive, next;
    return _regenerator.default.wrap(function _callee6$(_context7) {
      while (1) {
        switch (_context7.prev = _context7.next) {
          case 0:
            if (isMpWeixin()) {
              _context7.next = 2;
              break;
            }
            return _context7.abrupt("return", {
              ok: false,
              reason: 'not_weixin'
            });
          case 2:
            profile = getProfile();
            if (!(!profile || !profile.deviceId)) {
              _context7.next = 5;
              break;
            }
            return _context7.abrupt("return", {
              ok: false,
              reason: 'no_profile'
            });
          case 5:
            _context7.prev = 5;
            _context7.next = 8;
            return checkConnection(profile);
          case 8:
            alive = _context7.sent;
            if (!alive) {
              _context7.next = 11;
              break;
            }
            return _context7.abrupt("return", {
              ok: true,
              profile: profile
            });
          case 11:
            _context7.next = 13;
            return connectAndPrepare(profile.deviceId);
          case 13:
            next = _context7.sent;
            return _context7.abrupt("return", {
              ok: true,
              profile: next
            });
          case 17:
            _context7.prev = 17;
            _context7.t0 = _context7["catch"](5);
            setConnected(false);
            return _context7.abrupt("return", {
              ok: false,
              reason: 'connect_failed',
              error: _context7.t0
            });
          case 21:
          case "end":
            return _context7.stop();
        }
      }
    }, _callee6, null, [[5, 17]]);
  }));
  return _autoReconnect.apply(this, arguments);
}
function checkConnection(_x3) {
  return _checkConnection.apply(this, arguments);
}
function _checkConnection() {
  _checkConnection = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee7(profileInput) {
    var profile, connected, devices, services;
    return _regenerator.default.wrap(function _callee7$(_context8) {
      while (1) {
        switch (_context8.prev = _context8.next) {
          case 0:
            if (isMpWeixin()) {
              _context8.next = 2;
              break;
            }
            return _context8.abrupt("return", false);
          case 2:
            profile = profileInput || getProfile() || {};
            if (profile.deviceId) {
              _context8.next = 6;
              break;
            }
            setConnected(false);
            return _context8.abrupt("return", false);
          case 6:
            _context8.prev = 6;
            _context8.next = 9;
            return openAdapter();
          case 9:
            _context8.next = 15;
            break;
          case 11:
            _context8.prev = 11;
            _context8.t0 = _context8["catch"](6);
            setConnected(false);
            return _context8.abrupt("return", false);
          case 15:
            connected = false;
            _context8.prev = 16;
            _context8.next = 19;
            return toPromise(function (resolve, reject) {
              uni.getConnectedBluetoothDevices({
                services: [],
                success: function success(res) {
                  return resolve(res && res.devices || []);
                },
                fail: reject
              });
            });
          case 19:
            devices = _context8.sent;
            connected = (devices || []).some(function (d) {
              return String(d && d.deviceId || '') === String(profile.deviceId || '');
            });
            _context8.next = 26;
            break;
          case 23:
            _context8.prev = 23;
            _context8.t1 = _context8["catch"](16);
            connected = false;
          case 26:
            if (connected) {
              _context8.next = 37;
              break;
            }
            _context8.prev = 27;
            _context8.next = 30;
            return getServices(profile.deviceId);
          case 30:
            services = _context8.sent;
            connected = Array.isArray(services) && services.length > 0;
            _context8.next = 37;
            break;
          case 34:
            _context8.prev = 34;
            _context8.t2 = _context8["catch"](27);
            connected = false;
          case 37:
            setConnected(connected);
            return _context8.abrupt("return", connected);
          case 39:
          case "end":
            return _context8.stop();
        }
      }
    }, _callee7, null, [[6, 11], [16, 23], [27, 34]]);
  }));
  return _checkConnection.apply(this, arguments);
}
initConnectionWatcher();
var _default = {
  STORAGE_KEYS: STORAGE_KEYS,
  isMpWeixin: isMpWeixin,
  resolveBlePrintPlatform: resolveBlePrintPlatform,
  isHarmonyBlePlatform: isHarmonyBlePlatform,
  formatBleError: formatBleError,
  formatDiscoveryError: formatDiscoveryError,
  isDiscoveryLocationError: isDiscoveryLocationError,
  ensureLocationForBleScan: ensureLocationForBleScan,
  isPrivacyRelatedError: isPrivacyRelatedError,
  ensurePrivacyAuthorized: ensurePrivacyAuthorized,
  ensurePrivacyAuthorizedWithPrompt: ensurePrivacyAuthorizedWithPrompt,
  showPrivacyAuthModal: showPrivacyAuthModal,
  getProfile: getProfile,
  saveProfile: saveProfile,
  clearProfile: clearProfile,
  setConnected: setConnected,
  isConnected: isConnected,
  openAdapter: openAdapter,
  createConnection: createConnection,
  closeConnection: closeConnection,
  connectAndPrepare: connectAndPrepare,
  autoReconnect: autoReconnect,
  checkConnection: checkConnection,
  initConnectionWatcher: initConnectionWatcher,
  negotiateMtu: negotiateMtu,
  getMtu: getMtu,
  downgradeMtu: downgradeMtu
};
exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 2)["default"]))

/***/ }),

/***/ 11:
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/defineProperty.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var toPropertyKey = __webpack_require__(/*! ./toPropertyKey.js */ 12);
function _defineProperty(obj, key, value) {
  key = toPropertyKey(key);
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }
  return obj;
}
module.exports = _defineProperty, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ 12:
/*!**************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/toPropertyKey.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__(/*! ./typeof.js */ 13)["default"];
var toPrimitive = __webpack_require__(/*! ./toPrimitive.js */ 14);
function toPropertyKey(t) {
  var i = toPrimitive(t, "string");
  return "symbol" == _typeof(i) ? i : i + "";
}
module.exports = toPropertyKey, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ 13:
/*!*******************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/typeof.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _typeof(o) {
  "@babel/helpers - typeof";

  return (module.exports = _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) {
    return typeof o;
  } : function (o) {
    return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
  }, module.exports.__esModule = true, module.exports["default"] = module.exports), _typeof(o);
}
module.exports = _typeof, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ 14:
/*!************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/toPrimitive.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__(/*! ./typeof.js */ 13)["default"];
function toPrimitive(t, r) {
  if ("object" != _typeof(t) || !t) return t;
  var e = t[Symbol.toPrimitive];
  if (void 0 !== e) {
    var i = e.call(t, r || "default");
    if ("object" != _typeof(i)) return i;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return ("string" === r ? String : Number)(t);
}
module.exports = toPrimitive, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ 141:
/*!***********************************************************!*\
  !*** E:/project/yhlc-v1.0/agent-uniapp/api/storeOrder.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(uni) {

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ 4);
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.buildDetailListFromStoreProductList = buildDetailListFromStoreProductList;
exports.completePickupStoreOrder = completePickupStoreOrder;
exports.createLackGoods = createLackGoods;
exports.createMultiGoods = createMultiGoods;
exports.getAfterSaleLossList = getAfterSaleLossList;
exports.getCityWarehouseDashboard = getCityWarehouseDashboard;
exports.getDailySummaryList = getDailySummaryList;
exports.getDailySummarySkuInfo = getDailySummarySkuInfo;
exports.getFreezeFlowList = getFreezeFlowList;
exports.getLackGoodsList = getLackGoodsList;
exports.getLackGoodsOrderProducts = getLackGoodsOrderProducts;
exports.getMultiGoodsList = getMultiGoodsList;
exports.getMultiGoodsMatchProduct = getMultiGoodsMatchProduct;
exports.getMultiGoodsSupplierProducts = getMultiGoodsSupplierProducts;
exports.getPriceDiffList = getPriceDiffList;
exports.getStoreOrderById = getStoreOrderById;
exports.getStoreOrderList = getStoreOrderList;
exports.getSupplierAccountFlowList = getSupplierAccountFlowList;
exports.listAuditWarehouseOptionsMultiGoods = listAuditWarehouseOptionsMultiGoods;
exports.platformAuditMultiGoods = platformAuditMultiGoods;
exports.postLackGoodsAgree = postLackGoodsAgree;
exports.postLackGoodsAppeal = postLackGoodsAppeal;
exports.postOrderBatch = postOrderBatch;
exports.postOrderBatchForStoreOrder = postOrderBatchForStoreOrder;
exports.recordSellResultMultiGoods = recordSellResultMultiGoods;
exports.revealStoreOrderPhone = revealStoreOrderPhone;
exports.startStockingSequential = startStockingSequential;
exports.supplierConfirmMultiGoods = supplierConfirmMultiGoods;
exports.warehouseConfirmMultiGoods = warehouseConfirmMultiGoods;
var _regenerator = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/regenerator */ 58));
var _asyncToGenerator2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ 60));
var _defineProperty2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/defineProperty */ 11));
var _typeof2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/typeof */ 13));
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0, _defineProperty2.default)(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
/**
 * 门店订单相关接口
 * baseUrl 已含 /prod-api，路径不要再加 prod-api 前缀
 */

/**
 * 订单列表（如待送货 orderStatus=14）
 * GET /order/storeOrder/list
 *
 * @param {Vue} vm
 * @param {object} [params] pageNum、pageSize、orderStatus、keyword、startTime、endTime（可为 YYYY-MM-DD HH:mm:ss）等
 */
function getStoreOrderList(vm) {
  var params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var token = vm.$store && vm.$store.state ? vm.$store.state.token : '';
  var raw = params && (0, _typeof2.default)(params) === 'object' ? params : {};
  var p = _objectSpread({}, raw);
  if (Object.prototype.hasOwnProperty.call(p, 'startTime') && p.startTime != null) {
    p.startTime = String(p.startTime).trim();
  }
  if (Object.prototype.hasOwnProperty.call(p, 'endTime') && p.endTime != null) {
    p.endTime = String(p.endTime).trim();
  }
  return vm.request('get', 'order/storeOrder/list', token, p);
}

/**
 * 城市仓数据看板（单日）
 * GET /order/storeOrder/cityWarehouseDashboard
 *
 * @param {Vue} vm
 * @param {object} [params] statDate（YYYY-MM-DD）
 */
function getCityWarehouseDashboard(vm) {
  var params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var token = vm.$store && vm.$store.state ? vm.$store.state.token : '';
  return vm.request('get', 'order/storeOrder/cityWarehouseDashboard', token, params || {});
}

/**
 * 待送货汇总列表
 * GET /order/dailySummary/list
 *
 * @param {Vue} vm
 * @param {object} [params] pageNum、pageSize 等
 */
function getDailySummaryList(vm) {
  var params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var token = vm.$store && vm.$store.state ? vm.$store.state.token : '';
  return vm.request('get', 'order/dailySummary/list', token, params || {});
}

/**
 * 待送货汇总下商品列表
 * POST /order/dailySummary/skuInfo
 *
 * @param {Vue} vm
 * @param {object} [params] supplierId、deliveryDate、id、summaryStatus
 */
function getDailySummarySkuInfo(vm) {
  var params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var token = vm.$store && vm.$store.state ? vm.$store.state.token : '';
  return vm.request('post', 'order/dailySummary/skuInfo', token, params || {});
}

/**
 * 批量发货（送货批次）
 * POST /order/batch
 *
 * @param {Vue} vm
 * @param {object} body batchNo、detailList、orderIds、summaryId、supplierId、supplierName
 */
function postOrderBatch(vm) {
  var body = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var token = vm.$store && vm.$store.state ? vm.$store.state.token : '';
  return vm.request('post', 'order/batch', token, body || {});
}

/**
 * 完成取货 / 核销（扫码核销）
 * GET /order/storeOrder/completePickup?id=&verifyCode=
 */
function completePickupStoreOrder(vm) {
  var params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var token = vm.$store && vm.$store.state ? vm.$store.state.token : '';
  var id = String(params.id != null ? params.id : '').trim();
  var verifyCode = String(params.verifyCode != null ? params.verifyCode : '').trim();
  return vm.request('get', 'order/storeOrder/completePickup', token, {
    id: id,
    verifyCode: verifyCode
  });
}

/**
 * GET /order/storeOrder/{id} 门店订单详情（含 productList）
 */
function getStoreOrderById(vm, id) {
  var token = vm.$store && vm.$store.state ? vm.$store.state.token : '';
  var sid = encodeURIComponent(String(id == null ? '' : id).trim());
  return vm.request('get', "order/storeOrder/".concat(sid), token, {});
}

/**
 * GET /order/storeOrder/revealPhone?orderNo= 反查客户明文手机号
 * 用于脱敏号 150****1111 拨号前反查
 *
 * @param {Vue} vm
 * @param {string} orderNo YH 开头的订单号
 */
function revealStoreOrderPhone(vm, orderNo) {
  var token = vm.$store && vm.$store.state ? vm.$store.state.token : '';
  return vm.request('get', 'order/storeOrder/revealPhone', token, {
    orderNo: orderNo
  });
}

/**
 * 将订单详情的 productList 转为 order/batch 的 detailList（按条码归组）
 */
function buildDetailListFromStoreProductList(productList) {
  var list = Array.isArray(productList) ? productList : [];
  var byBar = new Map();
  for (var i = 0; i < list.length; i++) {
    var p = list[i] || {};
    var lineId = String(p.id || p.orderItemId || p.itemId || p.unique || '').trim();
    if (!lineId) continue;
    var bar = String(p.barCode || p.barcode || p.productNo || p.barCodeNo || '').trim() || "_line_".concat(lineId);
    if (!byBar.has(bar)) byBar.set(bar, []);
    byBar.get(bar).push(p);
  }
  var detailList = [];
  byBar.forEach(function (rows, barKey) {
    var rs = rows || [];
    var fromRow = String(rs[0] && (rs[0].barCode || rs[0].barcode || rs[0].productNo || rs[0].barCodeNo) || '').trim();
    var keyStr = String(barKey);
    var barCode = fromRow || (keyStr.startsWith('_line_') ? keyStr.slice(6) : keyStr) || String(rs[0] && rs[0].id || '');
    var items = rs.map(function (p) {
      var qty = Number(p.num != null ? p.num : p.quantity != null ? p.quantity : p.amount) || 0;
      return {
        id: String(p.id || p.orderItemId || p.itemId || p.unique || '').trim(),
        actualQuantity: qty,
        shippedQty: Number(p.shippedQty) || 0
      };
    });
    var deliverNum = items.reduce(function (s, it) {
      return s + (Number(it.actualQuantity) || 0);
    }, 0);
    var quantity = deliverNum;
    detailList.push({
      barCode: barCode,
      deliverNum: deliverNum,
      quantity: quantity,
      items: items
    });
  });
  return detailList;
}

/**
 * 商家「开始配货」：原 GET startStocking → POST order/batch
 *
 * @param {Vue} vm
 * @param {object|string|number} orderRowOrId 列表行（可有 productList）或订单 id
 */
function postOrderBatchForStoreOrder(_x, _x2) {
  return _postOrderBatchForStoreOrder.apply(this, arguments);
}
/**
 * @deprecated 请改用 postOrderBatch；保留为兼容：逐单 POST order/batch
 */
function _postOrderBatchForStoreOrder() {
  _postOrderBatchForStoreOrder = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee(vm, orderRowOrId) {
    var id, order, res, summaryId, supplierId, supplierName, detailList;
    return _regenerator.default.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            id = String(orderRowOrId && (0, _typeof2.default)(orderRowOrId) === 'object' ? orderRowOrId.id : orderRowOrId).trim();
            if (id) {
              _context.next = 3;
              break;
            }
            return _context.abrupt("return", Promise.reject({
              msg: '缺少订单 id'
            }));
          case 3:
            order = orderRowOrId && (0, _typeof2.default)(orderRowOrId) === 'object' && Array.isArray(orderRowOrId.productList) && orderRowOrId.productList.length > 0 ? orderRowOrId : null;
            if (order) {
              _context.next = 9;
              break;
            }
            _context.next = 7;
            return getStoreOrderById(vm, id);
          case 7:
            res = _context.sent;
            order = res && res.data || {};
          case 9:
            summaryId = String(order.summaryId || order.dailySummaryId || '').trim();
            supplierId = String(order.supplierId || '').trim();
            supplierName = String(order.supplierName || '').trim();
            detailList = buildDetailListFromStoreProductList(order.productList);
            if (detailList.length) {
              _context.next = 16;
              break;
            }
            uni.showToast({
              title: '订单商品明细为空，无法配货',
              icon: 'none'
            });
            return _context.abrupt("return", Promise.reject({
              msg: 'empty productList'
            }));
          case 16:
            return _context.abrupt("return", postOrderBatch(vm, {
              batchNo: "BATCH_".concat(Date.now()),
              orderIds: [id],
              summaryId: summaryId,
              supplierId: supplierId,
              supplierName: supplierName,
              detailList: detailList
            }));
          case 17:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _postOrderBatchForStoreOrder.apply(this, arguments);
}
function startStockingSequential(_x3, _x4) {
  return _startStockingSequential.apply(this, arguments);
}
/**
 * 结算单 / 供应商账户流水列表
 * GET /order/supplierAccountFlow/list
 *
 * @param {Vue} vm
 * @param {object} [params] pageNum、pageSize、flowNo、bizNo、flowType、beginTime、endTime 等（以后端为准）
 */
function _startStockingSequential() {
  _startStockingSequential = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee2(vm, ids) {
    var list, i;
    return _regenerator.default.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            list = Array.isArray(ids) ? ids : [];
            i = 0;
          case 2:
            if (!(i < list.length)) {
              _context2.next = 8;
              break;
            }
            _context2.next = 5;
            return postOrderBatchForStoreOrder(vm, list[i]);
          case 5:
            i++;
            _context2.next = 2;
            break;
          case 8:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));
  return _startStockingSequential.apply(this, arguments);
}
function getSupplierAccountFlowList(vm) {
  var params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var token = vm.$store && vm.$store.state ? vm.$store.state.token : '';
  return vm.request('get', 'order/supplierAccountFlow/list', token, params || {});
}

/**
 * 冻结流水列表（用于今日收益）
 * GET /order/freezeFlow/list
 *
 * @param {Vue} vm
 * @param {object} [params] pageNum、pageSize、beginTime、endTime 等（以后端为准）
 */
function getFreezeFlowList(vm) {
  var params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var token = vm.$store && vm.$store.state ? vm.$store.state.token : '';
  var q = _objectSpread({
    pageNum: params.pageNum != null ? params.pageNum : 1,
    pageSize: params.pageSize != null ? params.pageSize : 50
  }, params);
  return vm.request('get', 'order/freezeFlow/list', token, q);
}

/**
 * 少货单列表
 * GET /order/lackGoods/list
 *
 * @param {Vue} vm
 * @param {object} [params] pageNum、pageSize、flowStatus（0~4，可选）、orderNo（可选，以后端为准）
 */
function getLackGoodsList(vm) {
  var params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var token = vm.$store && vm.$store.state ? vm.$store.state.token : '';
  return vm.request('get', 'order/lackGoods/list', token, params || {});
}

/**
 * 少货单提交申诉
 * POST /order/lackGoods/appeal
 *
 * @param {Vue} vm
 * @param {object} body lackId、appealVideo（JSON 数组字符串）、appealPic（JSON 数组字符串）、appealRemark
 */
function postLackGoodsAppeal(vm) {
  var body = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var token = vm.$store && vm.$store.state ? vm.$store.state.token : '';
  return vm.request('post', 'order/lackGoods/appeal', token, body || {});
}

/**
 * 少货单同意（进入采购审核）
 * POST /order/lackGoods/agree
 *
 * @param {Vue} vm
 * @param {object} body lackId
 */
function postLackGoodsAgree(vm) {
  var body = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var token = vm.$store && vm.$store.state ? vm.$store.state.token : '';
  return vm.request('post', 'order/lackGoods/agree', token, body || {});
}

/**
 * 按调拨单号查询可创建少货单的缺货商品（与后台「查商品」一致）
 * GET /order/lackGoods/orderProducts
 *
 * @param {Vue} vm
 * @param {object} params allocationNo
 */
function getLackGoodsOrderProducts(vm) {
  var params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var token = vm.$store && vm.$store.state ? vm.$store.state.token : '';
  return vm.request('get', 'order/lackGoods/orderProducts', token, params || {});
}

/**
 * 新增少货单
 * POST /order/lackGoods
 *
 * @param {Vue} vm
 * @param {object} body allocationNo、selectedItems（orderItemId、productId、goodsSku、planNum、lackNum、image、lackReason）
 */
function createLackGoods(vm) {
  var body = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var token = vm.$store && vm.$store.state ? vm.$store.state.token : '';
  return vm.request('post', 'order/lackGoods', token, body || {});
}

/**
 * 多货单列表
 * GET /order/multiGoods/list
 *
 * @param {Vue} vm
 * @param {object} [params] pageNum、pageSize、flowStatus（0 待审核确认 1 待城市仓确认 2 待代卖录入 3 已结案，可选）、goodsName（可选，与搜索框一致时传）
 */
function getMultiGoodsList(vm) {
  var params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var token = vm.$store && vm.$store.state ? vm.$store.state.token : '';
  return vm.request('get', 'order/multiGoods/list', token, params || {});
}

/**
 * 多货单：按商品编码/条码匹配商品与城市仓（与后台「匹配」一致）
 * GET /order/multiGoods/matchProduct
 *
 * @param {Vue} vm
 * @param {object} params code（productNo / barCode）
 */
function getMultiGoodsMatchProduct(vm) {
  var params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var token = vm.$store && vm.$store.state ? vm.$store.state.token : '';
  return vm.request('get', 'order/multiGoods/matchProduct', token, params || {});
}

/**
 * 多货单：当前供应商可选商品（与后台供应商「选择商品」一致）
 * GET /order/multiGoods/supplierProducts
 *
 * @param {Vue} vm
 * @param {object} [params] keyword 可选
 */
function getMultiGoodsSupplierProducts(vm) {
  var params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var token = vm.$store && vm.$store.state ? vm.$store.state.token : '';
  return vm.request('get', 'order/multiGoods/supplierProducts', token, params || {});
}

/**
 * 新增多货单
 * POST /order/multiGoods
 *
 * @param {Vue} vm
 * @param {object} body 与 PC 表单字段一致（applyType 1 供应商 2 城市仓 等）
 */
function createMultiGoods(vm) {
  var body = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var token = vm.$store && vm.$store.state ? vm.$store.state.token : '';
  return vm.request('post', 'order/multiGoods', token, body || {});
}

/**
 * 多货单：供应商确认
 * POST /order/multiGoods/supplierConfirm
 */
function supplierConfirmMultiGoods(vm) {
  var body = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var token = vm.$store && vm.$store.state ? vm.$store.state.token : '';
  return vm.request('post', 'order/multiGoods/supplierConfirm', token, body || {});
}

/**
 * 多货单：总仓审核
 * POST /order/multiGoods/platformAudit
 */
function platformAuditMultiGoods(vm) {
  var body = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var token = vm.$store && vm.$store.state ? vm.$store.state.token : '';
  return vm.request('post', 'order/multiGoods/platformAudit', token, body || {});
}

/**
 * 多货单：城市仓确认
 * POST /order/multiGoods/warehouseConfirm
 */
function warehouseConfirmMultiGoods(vm) {
  var body = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var token = vm.$store && vm.$store.state ? vm.$store.state.token : '';
  return vm.request('post', 'order/multiGoods/warehouseConfirm', token, body || {});
}

/**
 * 多货单：录入代卖结果
 * POST /order/multiGoods/recordSellResult
 */
function recordSellResultMultiGoods(vm) {
  var body = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var token = vm.$store && vm.$store.state ? vm.$store.state.token : '';
  return vm.request('post', 'order/multiGoods/recordSellResult', token, body || {});
}

/**
 * 多货单：总仓审核可选城市仓
 * GET /order/multiGoods/auditWarehouseOptions
 */
function listAuditWarehouseOptionsMultiGoods(vm) {
  var params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var token = vm.$store && vm.$store.state ? vm.$store.state.token : '';
  return vm.request('get', 'order/multiGoods/auditWarehouseOptions', token, params || {});
}

/**
 * 售后报损（售后单）列表
 * GET /order/afterSaleLoss/list
 *
 * @param {Vue} vm
 * @param {object} [params] pageNum、pageSize 等
 */
function getAfterSaleLossList(vm) {
  var params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var token = vm.$store && vm.$store.state ? vm.$store.state.token : '';
  return vm.request('get', 'order/afterSaleLoss/list', token, params || {});
}

/**
 * 差额退款单（价差退款）列表
 * GET /order/priceDiff/list
 *
 * @param {Vue} vm
 * @param {object} [params] pageNum、pageSize、refundStatus（0 待退款 1 已退款 2 退款失败，可选）等（以后端为准）
 */
function getPriceDiffList(vm) {
  var params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var token = vm.$store && vm.$store.state ? vm.$store.state.token : '';
  return vm.request('get', 'order/priceDiff/list', token, params || {});
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 2)["default"]))

/***/ }),

/***/ 142:
/*!***************************************************************!*\
  !*** E:/project/yhlc-v1.0/agent-uniapp/utils/userRoleKeys.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(uni) {

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ 4);
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SUPPLIER_ROLE_KEY = exports.PROCUREMENT_ROLE_KEY = exports.CITY_WAREHOUSE_ROLE_KEY = exports.ADMIN_ROLE_KEY = void 0;
exports.collectAllUserRoleKeys = collectAllUserRoleKeys;
exports.collectUserRoleKeysFromInfo = collectUserRoleKeysFromInfo;
exports.hasAdminRole = hasAdminRole;
exports.hasCityWarehouseRole = hasCityWarehouseRole;
exports.hasProcurementRole = hasProcurementRole;
exports.hasSupplierRole = hasSupplierRole;
var _typeof2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/typeof */ 13));
/** 与 store/index.js 中 __key_member 一致 */
var USER_INFO_STORAGE_KEY = 'usemall_userInfo';

/** 城市仓角色 roleKey，可新增少货/多货单 */
var CITY_WAREHOUSE_ROLE_KEY = '11num';

/** 供应商角色 roleKey（与后台 gys 一致，多货单发起方式与总仓不同） */
exports.CITY_WAREHOUSE_ROLE_KEY = CITY_WAREHOUSE_ROLE_KEY;
var SUPPLIER_ROLE_KEY = 'gys';

/** 采购员角色 roleKey（与后台 cg 一致，如供货商品审核列表） */
exports.SUPPLIER_ROLE_KEY = SUPPLIER_ROLE_KEY;
var PROCUREMENT_ROLE_KEY = 'cg';

/** 管理员角色 roleKey（与后台 admin 一致） */
exports.PROCUREMENT_ROLE_KEY = PROCUREMENT_ROLE_KEY;
var ADMIN_ROLE_KEY = 'admin';
exports.ADMIN_ROLE_KEY = ADMIN_ROLE_KEY;
function pushRoleKey(arr, val) {
  var key = String(val || '').trim();
  if (key) arr.push(key);
}

/**
 * 从单份用户信息对象中收集 roleKey（兼容顶层 roles、user.roles、sysUser.roles / roleList，及对象上的 roleKey、role_key）。
 * @param {object} info
 * @returns {string[]}
 */
function collectUserRoleKeysFromInfo(info) {
  var roleKeys = [];
  if (!info || (0, _typeof2.default)(info) !== 'object') return roleKeys;
  pushRoleKey(roleKeys, info.roleKey);
  var rolesList = [];
  if (Array.isArray(info.roles)) rolesList.push(info.roles);
  var u = info.user;
  if (u && (0, _typeof2.default)(u) === 'object' && Array.isArray(u.roles)) rolesList.push(u.roles);
  var su = info.sysUser;
  if (su && (0, _typeof2.default)(su) === 'object' && Array.isArray(su.roles)) rolesList.push(su.roles);
  if (su && (0, _typeof2.default)(su) === 'object' && Array.isArray(su.roleList)) rolesList.push(su.roleList);
  for (var i = 0; i < rolesList.length; i++) {
    var roles = rolesList[i];
    if (!Array.isArray(roles)) continue;
    for (var j = 0; j < roles.length; j++) {
      var r = roles[j];
      if (typeof r === 'string') pushRoleKey(roleKeys, r);else if (r && (0, _typeof2.default)(r) === 'object') {
        pushRoleKey(roleKeys, r.roleKey);
        pushRoleKey(roleKeys, r.role_key);
      }
    }
  }
  return roleKeys;
}

/**
 * 合并 Vuex 中的 userInfo 与本地缓存再收集角色（避免二者不一致导致「新增」不显示）。
 * @param {object} storeUserInfo
 * @returns {string[]}
 */
function collectAllUserRoleKeys(storeUserInfo) {
  var fromStore = collectUserRoleKeysFromInfo(storeUserInfo || {});
  var fromCache = [];
  try {
    fromCache = collectUserRoleKeysFromInfo(uni.getStorageSync(USER_INFO_STORAGE_KEY) || {});
  } catch (e) {
    fromCache = [];
  }
  return fromStore.concat(fromCache);
}
function hasCityWarehouseRole(storeUserInfo) {
  return collectAllUserRoleKeys(storeUserInfo).some(function (k) {
    return k === CITY_WAREHOUSE_ROLE_KEY;
  });
}
function hasSupplierRole(storeUserInfo) {
  return collectAllUserRoleKeys(storeUserInfo).some(function (k) {
    return k === SUPPLIER_ROLE_KEY;
  });
}

/** 采购员（与 pages/home isPurchaser 口径一致，合并本地缓存角色） */
function hasProcurementRole(storeUserInfo) {
  return collectAllUserRoleKeys(storeUserInfo).some(function (k) {
    return String(k).toLowerCase() === PROCUREMENT_ROLE_KEY;
  });
}

/** 管理员（合并本地缓存角色，与 hasProcurementRole 口径一致） */
function hasAdminRole(storeUserInfo) {
  return collectAllUserRoleKeys(storeUserInfo).some(function (k) {
    return String(k).toLowerCase() === ADMIN_ROLE_KEY;
  });
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 2)["default"]))

/***/ }),

/***/ 15:
/*!**********************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/construct.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var setPrototypeOf = __webpack_require__(/*! ./setPrototypeOf.js */ 16);
var isNativeReflectConstruct = __webpack_require__(/*! ./isNativeReflectConstruct.js */ 17);
function _construct(t, e, r) {
  if (isNativeReflectConstruct()) return Reflect.construct.apply(null, arguments);
  var o = [null];
  o.push.apply(o, e);
  var p = new (t.bind.apply(t, o))();
  return r && setPrototypeOf(p, r.prototype), p;
}
module.exports = _construct, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ 151:
/*!****************************************************************************!*\
  !*** E:/project/yhlc-v1.0/agent-uniapp/utils/printer/PrinterHelperCpcl.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ 4);
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _classCallCheck2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ 23));
var _createClass2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/createClass */ 24));
var printerHelper = /*#__PURE__*/function (_tnirP$split$reverse$, _parWdroW$split$rever, _gnidocnE$split$rever, _trobA$split$reverse$, _LCPCtxeTegapedoCtnir, _tnuoC$split$reverse$, _edocraB$split$revers, _daeHRQtnirP$split$re, _RQtnirP$split$revers, _FDPtnirP$split$re, _LCPCpamtiBtnirp$spli, _pSteS$split$reverse$, _peeB$split$reverse$j, _tiaW$split$reverse$j, _flteS$split$reverse$, _dloBteS$split$revers, _yrtnuoC$split$revers) {
  function printerHelper() {
    (0, _classCallCheck2.default)(this, printerHelper);
    this["data"] = "".split("").reverse().join("");
    this["text"] = "TEXT";
    this["text90"] = "TEXT90";
    this["text180"] = "081TXET".split("").reverse().join("");
    this["text270"] = "072TXET".split("").reverse().join("");
    this["center"] = "RETNEC".split("").reverse().join("");
    this["left"] = "TFEL".split("").reverse().join("");
    this["right"] = "RIGHT";
    this['barcode'] = "BARCODE";
    this["vbarcode"] = "EDOCRABV".split("").reverse().join("");
  }
  (0, _createClass2.default)(printerHelper, [{
    key: 'PrintAreaSize',
    value: function PrintAreaSize(_0x20e206, _0x1521c0, _0x5a41fb, _0x580685, _0x32ac22) {
      return this['data'] += '!\x20' + _0x20e206 + '\x20' + _0x1521c0 + '\x20' + _0x5a41fb + '\x20' + _0x580685 + '\x20' + _0x32ac22 + '\x0d\x0a';
    }
  }, {
    key: _tnirP$split$reverse$,
    value: function value() {
      return this['data'] += "\n\rTNIRP".split("").reverse().join("");
    }
  }, {
    key: _parWdroW$split$rever,
    value: function value() {
      return this["data"] += '\x0d\x0a';
    }
  }, {
    key: _gnidocnE$split$rever,
    value: function value(_0x5caee2) {}
  }, {
    key: "Form",
    value: function Form() {
      return this["data"] += 'FORM\x0d\x0a';
    }
  }, {
    key: "Note",
    value: function Note(_0x55e6f9) {
      return this["data"] += ';' + _0x55e6f9 + "\n\r".split("").reverse().join("");
    }
  }, {
    key: _trobA$split$reverse$,
    value: function value() {
      return this["data"] += 'ABORT\x0d\x0a';
    }
  }, {
    key: 'Text',
    value: function Text(_0x2c5068, _0x584c79, _0xc8a9ec, _0xba1946, _0x1bd659, _0x390be8) {
      return this["data"] += _0x2c5068 + '\x20' + _0x584c79 + '\x20' + _0xc8a9ec + '\x20' + _0xba1946 + '\x20' + _0x1bd659 + '\x20' + _0x390be8 + '\x0d\x0a';
    }
  }, {
    key: "PrintTextCPCL",
    value: function PrintTextCPCL(_0x370fce, _0xdf8ac1, _0x448c35, _0x550293, _0xc98122, _0x292353) {}
  }, {
    key: _LCPCtxeTegapedoCtnir,
    value: function value(_0xc4e53c, _0x7abb38, _0xdb9621, _0x20b178, _0x16a430, _0x5c91fc) {}
  }, {
    key: _tnuoC$split$reverse$,
    value: function value(_0x30f0ac) {
      return this["data"] += 'COUNT\x20' + _0x30f0ac + '\x0d\x0a';
    }
  }, {
    key: 'SetMag',
    value: function SetMag(_0x17b725, _0xb22081) {
      return this["data"] += 'SETMAG\x20' + _0x17b725 + '\x20' + _0xb22081 + '\x20\x0d\x0a';
    }
  }, {
    key: 'Align',
    value: function Align(_0x443746) {
      return this["data"] += _0x443746 + '\x0d\x0a';
    }
  }, {
    key: _edocraB$split$revers,
    value: function value(_0x417a73, _0x274a9c, _0x4f8928, _0x2e20fd, _0x16bb0f, _0x1b066c, _0x51ab99, _0x66b630) {
      return this["data"] += _0x417a73 + '\x20' + _0x274a9c + '\x20' + _0x4f8928 + '\x20' + _0x2e20fd + '\x20' + _0x16bb0f + '\x20' + _0x1b066c + '\x20' + _0x51ab99 + '\x20' + _0x66b630 + '\x0d\x0a';
    }
  }, {
    key: _daeHRQtnirP$split$re,
    value: function value(_0x22e18a) {
      var _0xfdb784 = "";
      if (_0x22e18a > (0x800f3 ^ 0x800f3) && _0x22e18a < (0x81b13 ^ 0x81b3b)) {
        if (_0x22e18a < (0xbfc4a ^ 0xbfc40)) {
          qrCodeData = '1B\x201C\x2026\x2020\x2056\x2031\x2020\x2073\x2065\x2074\x2076\x2061\x206C\x2020\x2022\x2071\x2072\x205F\x2076\x2065\x2072\x2073\x2069\x206F\x206E\x2022\x2020\x2022\x2030\x20' + ((0x1f41f ^ 0x1f401) + _0x22e18a) + '\x2022\x200D\x200A';
        } else {
          var _0x31af68 = strToCode(_0x22e18a["toString"]())["toString"]()['replace'](/,/g, '\x20');
          qrCodeData = '1B\x201C\x2026\x2020\x2056\x2031\x2020\x2073\x2065\x2074\x2076\x2061\x206C\x2020\x2022\x2071\x2072\x205F\x2076\x2065\x2072\x2073\x2069\x206F\x206E\x2022\x2020\x2022\x20' + _0x31af68 + '\x2022\x200D\x200A';
        }
      }
      return this['data'] += qrCodeData;
    }
  }, {
    key: _RQtnirP$split$revers,
    value: function value(_0x1e429e, _0x2d200f, _0x45b876) {
      var _0x2ad999 = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0x60afa ^ 0x60afb;
      var _0x33808f = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 0xc4b17 ^ 0xc4b11;
      var _0x4e3b35 = arguments.length > 5 ? arguments[5] : undefined;
      return this['data'] += _0x1e429e + '\x20QR\x20' + _0x2d200f + '\x20' + _0x45b876 + '\x20M\x20' + _0x2ad999 + '\x20U\x20' + _0x33808f + '\x0d\x0a\x20MA,' + _0x4e3b35 + "\n\rRQDNE \n\r".split("").reverse().join("");
    }
  }, {
    key: _FDPtnirP$split$re,
    value: function value(_0x1db8f1, _0x3786c9, _0xb7a7d6) {
      var _0x37ab5c = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0xe96ad ^ 0xe96af;
      var _0x1c10d4 = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 0xdabe7 ^ 0xdabe1;
      var _0x1e1f33 = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : 0xae725 ^ 0xae726;
      var _0x5da3a3 = arguments.length > 6 && arguments[6] !== undefined ? arguments[6] : 0x3a1de ^ 0x3a1df;
      var _0x3e2026 = arguments.length > 7 ? arguments[7] : undefined;
      return this["data"] += _0x1db8f1 + " 714-FDP ".split("").reverse().join("") + _0x3786c9 + '\x20' + _0xb7a7d6 + '\x20XD\x20' + _0x37ab5c + '\x20YD\x20' + _0x1c10d4 + " C ".split("").reverse().join("") + _0x1e1f33 + " S ".split("").reverse().join("") + _0x5da3a3 + " \n\r".split("").reverse().join("") + _0x3e2026 + '\x0d\x0a\x20ENDPDF\x0d\x0a';
    }
  }, {
    key: 'Box',
    value: function Box(_0x16ede0, _0x311495, _0x185a45, _0x136ea2, _0x473fa3) {
      return this['data'] += 'BOX\x20' + _0x16ede0 + '\x20' + _0x311495 + '\x20' + _0x185a45 + '\x20' + _0x136ea2 + '\x20' + _0x473fa3 + "\n\r".split("").reverse().join("");
    }
  }, {
    key: "Line",
    value: function Line(_0x1f44fb, _0x487696, _0x18fed3, _0x1199ee, _0x5aa42b) {
      return this["data"] += " ENIL".split("").reverse().join("") + _0x1f44fb + '\x20' + _0x487696 + '\x20' + _0x18fed3 + '\x20' + _0x1199ee + '\x20' + _0x5aa42b + '\x0d\x0a';
    }
  }, {
    key: 'InverseLine',
    value: function InverseLine(_0x5719f9, _0x5d8e72, _0x4e1ce0, _0x4e6357, _0x59635e) {
      return this["data"] += 'INVERSE-LINE\x20' + _0x5719f9 + '\x20' + _0x5d8e72 + '\x20' + _0x4e1ce0 + '\x20' + _0x4e6357 + '\x20' + _0x59635e + '\x0d\x0a';
    }
  }, {
    key: _LCPCpamtiBtnirp$spli,
    value: function value(_0xd43b04, _0x190873, _0x2f351f, _0x3a8f2b, _0x373cc2, _0x46883a) {}
  }, {
    key: 'Contrast',
    value: function Contrast(_0x89987) {
      return this['data'] += 'CONTRAST\x20' + _0x89987 + "\n\r".split("").reverse().join("");
    }
  }, {
    key: 'Speed',
    value: function Speed(_0x469994) {
      return this['data'] += 'SPEED\x20' + _0x469994 + "\n\r".split("").reverse().join("");
    }
  }, {
    key: _pSteS$split$reverse$,
    value: function value(_0x2830df) {
      return this['data'] += 'SETSP\x20' + _0x2830df + "\n\r".split("").reverse().join("");
    }
  }, {
    key: 'Prefeed',
    value: function Prefeed(_0xddfde8) {
      return this['data'] += 'PREFEED\x20' + _0xddfde8 + '\x0d\x0a';
    }
  }, {
    key: 'Postfeed',
    value: function Postfeed(_0x2c2d41) {
      return this["data"] += 'POSTFEED\x20' + _0x2c2d41 + "\n\r".split("").reverse().join("");
    }
  }, {
    key: _peeB$split$reverse$j,
    value: function value(_0xd52909) {
      return this['data'] += " PEEB".split("").reverse().join("") + _0xd52909 + '\x0d\x0a';
    }
  }, {
    key: 'Underline',
    value: function Underline(_0x4d7aad) {}
  }, {
    key: _tiaW$split$reverse$j,
    value: function value(_0x130cbb) {
      return this['data'] += 'WAIT\x20' + _0x130cbb + "\n\r".split("").reverse().join("");
    }
  }, {
    key: 'PageWidth',
    value: function PageWidth(_0x337af3) {
      return this['data'] += 'PW\x20' + _0x337af3 + '\x0d\x0a';
    }
  }, {
    key: _flteS$split$reverse$,
    value: function value(_0x40111d) {
      return this['data'] += 'SETLF\x20' + _0x40111d + "\n\r".split("").reverse().join("");
    }
  }, {
    key: 'Setlp',
    value: function Setlp(_0x18abc0, _0x510414, _0x418cb5) {
      return this['data'] += " PLTES".split("").reverse().join("") + _0x18abc0 + '\x20' + _0x510414 + '\x20' + _0x418cb5 + '\x0d\x0a';
    }
  }, {
    key: _dloBteS$split$revers,
    value: function value(_0x592305) {
      return this['data'] += " DLOBTES".split("").reverse().join("") + _0x592305 + '\x0d\x0a';
    }
  }, {
    key: "PoPrint",
    value: function PoPrint() {
      return this['data'] += 'ROTATE\x20180\x0d\x0a';
    }
  }, {
    key: _yrtnuoC$split$revers,
    value: function value(_0x52be0b) {
      return this['data'] += 'COUNTRY\x20' + _0x52be0b + '\x0d\x0a';
    }
  }, {
    key: "RowSetX",
    value: function RowSetX(_0x473c35) {
      return this['data'] += 'RX\x20' + _0x473c35 + '\x0d\x0a';
    }
  }, {
    key: 'PrintImg',
    value: function PrintImg(_0x4ec7bf, _0x48dae1, _0x34b886, _0x2651bf, _0x1ee155) {
      return this['data'] += 'EG\x20' + _0x4ec7bf + '\x20' + _0x48dae1 + '\x20' + _0x34b886 + '\x20' + _0x2651bf + '\x20\x0d\x0a\x20' + _0x1ee155 + '\x20\x0d\x0a';
    }
  }]);
  return printerHelper;
}("tnirP".split("").reverse().join(""), "parWdroW".split("").reverse().join(""), "gnidocnE".split("").reverse().join(""), "trobA".split("").reverse().join(""), "LCPCtxeTegapedoCtnirP".split("").reverse().join(""), "tnuoC".split("").reverse().join(""), "edocraB".split("").reverse().join(""), "daeHRQtnirP".split("").reverse().join(""), "RQtnirP".split("").reverse().join(""), "714FDPtnirP".split("").reverse().join(""), "LCPCpamtiBtnirp".split("").reverse().join(""), "pSteS".split("").reverse().join(""), "peeB".split("").reverse().join(""), "tiaW".split("").reverse().join(""), "flteS".split("").reverse().join(""), "dloBteS".split("").reverse().join(""), "yrtnuoC".split("").reverse().join(""));
var PrinterHelper = new printerHelper();
var _default = PrinterHelper;
exports.default = _default;

/***/ }),

/***/ 152:
/*!***************************************************************!*\
  !*** E:/project/yhlc-v1.0/agent-uniapp/utils/printer/util.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ 4);
var _gbk = _interopRequireDefault(__webpack_require__(/*! ./gbk.min */ 153));
var formatTime = function formatTime(_0x2aaf4e) {
  var _0x201eb1 = _0x2aaf4e["getFullYear"]();
  var _0x181c91 = _0x2aaf4e["getMonth"]() + (0x1f27b ^ 0x1f27a);
  var _0x4684aa = _0x2aaf4e["getDate"]();
  var _0x57f014 = _0x2aaf4e["getHours"]();
  var _0x173841 = _0x2aaf4e["getMinutes"]();
  var _0x296400 = _0x2aaf4e["getSeconds"]();
  return [_0x201eb1, _0x181c91, _0x4684aa]["map"](formatNumber)["join"]("/") + '\x20' + [_0x57f014, _0x173841, _0x296400]["map"](formatNumber)['join'](':');
};
var formatNumber = function formatNumber(_0x333c9d) {
  _0x333c9d = _0x333c9d["toString"]();
  return _0x333c9d[0xb745c ^ 0xb745d] ? _0x333c9d : '0' + _0x333c9d;
};
function hexStringToBuff(_0x572470) {
  return new Uint8Array(_gbk.default["encode"](_0x572470))['buffer'];
}
function isCN(_0x225546) {
  if (/^[\u3220-\uFA29]+$/["test"](_0x225546)) {
    return !![];
  } else {
    return ![];
  }
}
function hexStringToArrayBuffer(_0xf72f69) {
  var _0x57cec5 = new ArrayBuffer(_0xf72f69["length"] / (0x73b9f ^ 0x73b9d) + (0x97d22 ^ 0x97d23));
  var _0x1d9f98 = new DataView(_0x57cec5);
  for (var _0x5eb1a2 = 0x7d83c ^ 0x7d83c; _0x5eb1a2 < _0xf72f69['length'] / (0xe1a24 ^ 0xe1a26); _0x5eb1a2++) {
    var _0x35dab6 = parseInt(_0xf72f69[_0x5eb1a2 * (0x6677d ^ 0x6677f)] + _0xf72f69[_0x5eb1a2 * (0xda4b0 ^ 0xda4b2) + (0xb9b30 ^ 0xb9b31)], 0x8c0ca ^ 0x8c0da);
    _0x1d9f98['setUint8'](_0x5eb1a2, _0x35dab6);
  }
  _0x1d9f98['setUint8'](_0xf72f69['length'] / (0x67c4d ^ 0x67c4f), 0xf1a7b ^ 0xf1a71);
  return _0x57cec5;
}
function subString(_0x2bd86f) {
  var _0x5c58a7 = [];
  if (_0x2bd86f["length"] > (0x41608 ^ 0x41600)) {
    for (var _0x7f153c = 0x0; _0x7f153c * (0x28ee4 ^ 0x28eec) < _0x2bd86f['length']; _0x7f153c++) {
      var _0x25da12 = _0x2bd86f['substring'](_0x7f153c * (0xc3f92 ^ 0xc3f9a), (0xab542 ^ 0xab54a) * _0x7f153c + (0xdae15 ^ 0xdae1d));
      _0x5c58a7["push"](_0x25da12);
    }
    return _0x5c58a7;
  } else {
    return _0x2bd86f;
  }
}
function hexStringToArrayBufferstr(_0x280280) {
  var _0x5e0436 = "".split("").reverse().join("");
  for (var _0x134c04 = 0x0; _0x134c04 < _0x280280["length"]; _0x134c04++) {
    if (_0x5e0436 === "".split("").reverse().join("")) {
      _0x5e0436 = _0x280280['charCodeAt'](_0x134c04)['toString'](0x10);
    } else {
      _0x5e0436 += "," + _0x280280["charCodeAt"](_0x134c04)['toString'](0xb59b3 ^ 0xb59a3);
    }
  }
  _0x5e0436 += ',' + "a0x0".split("").reverse().join("");
  console['log'](_0x5e0436);
  return new Uint8Array(_0x5e0436["match"](/[\da-f]{2}/gi)['map'](function (_0x8f1a9d) {
    return parseInt(_0x8f1a9d, 0x40005 ^ 0x40015);
  }))['buffer'];
}
function send0X0A() {
  var _0x55f04d = new ArrayBuffer(0x1);
  var _0x232974 = new DataView(_0x55f04d);
  _0x232974["setUint8"](0x0, 0xa);
  return _0x55f04d;
}
var convertToMonoImage = function convertToMonoImage(_0x175a1f, _0x650c1c) {
  var _0x2c0cb9 = _0x175a1f['width'];
  var _0x3d6e29 = _0x175a1f["height"];
  var _0x5a5940 = _0x175a1f['data'];
  var _0x457248 = 0xbe;
  var _0xb8a2df = 0x0,
    _0x38b79e = 0xb5f22 ^ 0xb5f22;
  var _0x51bf92 = 0x0,
    _0x364e4a = 0x0;
  var _0x526d98 = 0x0;
  var _0x8f1e25 = [[0x2, 0x82, 0x22, 0xa2, 0xa, 0x8a, 0x2a, 0xaa], [0xc2, 0x42, 0xe2, 0xdec0d ^ 0xdec6f, 0xca, 0x4a, 0xea, 0x6a], [0xccd18 ^ 0xccd2a, 0xb2, 0x12, 0x92, 0xe1cb6 ^ 0xe1c8c, 0xba, 0x1a, 0x9a], [0x41331 ^ 0x413c3, 0x72, 0x4887c ^ 0x488ae, 0x52, 0xfa, 0x7a, 0xda, 0x5a], [0xe, 0x8e, 0x2e, 0xae, 0x6, 0x86, 0x63660 ^ 0x63646, 0x93049 ^ 0x930ef], [0x721e7 ^ 0x72129, 0x41aa5 ^ 0x41aeb, 0xee, 0x6e, 0xc00ba ^ 0xc007c, 0x46, 0xe6, 0x4e4fd ^ 0x4e49b], [0xd9483 ^ 0xd94bd, 0xae4dd ^ 0xae463, 0xe4195 ^ 0xe418b, 0x2889b ^ 0x28805, 0x36, 0xb6, 0x3f88f ^ 0x3f899, 0x96], [0xfe, 0x7e, 0xde, 0x5e, 0xf6, 0x76, 0x44d19 ^ 0x44dcf, 0x56]];
  var _0x4db3c0 = new Array((_0x2c0cb9 + 0x7 >> 0x3) * _0x3d6e29);
  var _0xe1f567, _0x342d47;
  for (_0xb8a2df = 0x0; _0xb8a2df < _0x3d6e29; _0xb8a2df++) {
    for (_0x38b79e = 0x50e3f ^ 0x50e3f; _0x38b79e < _0x2c0cb9;) {
      _0xe1f567 = _0x38b79e & (0xd5353 ^ 0xd5354);
      if ((0x40f51 ^ 0x40f51) == _0x650c1c) {
        _0x457248 = _0x8f1e25[_0xb8a2df & (0xbf674 ^ 0xbf673)][_0xe1f567];
      }
      _0x342d47 = _0x5a5940[_0x51bf92++] * 0.29891 + _0x5a5940[_0x51bf92++] * 0.58661 + _0x5a5940[_0x51bf92++] * 0.11448;
      _0x51bf92++;
      if (_0x342d47 < _0x457248) {
        _0x526d98 |= 0x80 >> _0xe1f567;
      }
      _0x38b79e++;
      if (_0xe1f567 == (0xad3e4 ^ 0xad3e3) || _0x38b79e == _0x2c0cb9) {
        _0x4db3c0[_0x364e4a++] = _0x526d98;
        _0x526d98 = 0x0;
      }
    }
  }
  return _0x4db3c0;
};
module['exports'] = {
  'hexStringToArrayBuffer': hexStringToArrayBuffer,
  "convertToMonoImage": convertToMonoImage,
  'hexStringToBuff': hexStringToBuff,
  'send0X0A': send0X0A
};

/***/ }),

/***/ 153:
/*!******************************************************************!*\
  !*** E:/project/yhlc-v1.0/agent-uniapp/utils/printer/gbk.min.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;var _typeof = __webpack_require__(/*! @babel/runtime/helpers/typeof */ 13);
/*!
 * gbk.js v0.3.0
 * Homepage https://github.com/cnwhy/GBK.js
 * License MIT
 */

(function (global, factory) {
  ( false ? undefined : _typeof(exports)) === 'object' && typeof module !== 'undefined' ? module.exports = factory() :  true ? !(__WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) :
				__WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : undefined;
})(this, function () {
  'use strict';

  var GBK = function GBK(gbk_us) {
    var arr_index = 0x8140; //33088;
    var gbk = {
      decode: function decode(arr) {
        var str = "";
        for (var n = 0, max = arr.length; n < max; n++) {
          var code = arr[n] & 0xff;
          if (code > 0x80 && n + 1 < max) {
            var code1 = arr[n + 1] & 0xff;
            if (code1 >= 0x40) {
              code = gbk_us[(code << 8 | code1) - arr_index];
              n++;
            }
          }
          str += String.fromCharCode(code);
        }
        return str;
      },
      encode: function encode(str) {
        str += '';
        var gbk = [];
        var wh = '?'.charCodeAt(0); //gbk中没有的字符的替换符
        for (var i = 0; i < str.length; i++) {
          var charcode = str.charCodeAt(i);
          if (charcode < 0x80) gbk.push(charcode);else {
            var gcode = gbk_us.indexOf(charcode);
            if (~gcode) {
              gcode += arr_index;
              gbk.push(0xFF & gcode >> 8, 0xFF & gcode);
            } else {
              gbk.push(wh);
            }
          }
        }
        return gbk;
      }
    };
    return gbk;
  };
  var gbk = GBK;
  var URI = function URI(GBK) {
    var passChars = '!\'()*-._~';
    var otherPassChars = '#$&+,/:;=?@';
    function getModue(passChars) {
      var passBits = passChars.split('').sort();
      var isPass = function isPass(s) {
        return ~passChars.indexOf(s) || /[0-9a-zA-Z]/.test(s);
      };
      return {
        encode: function encode(str) {
          return (str + '').replace(/./g, function (v) {
            if (isPass(v)) return v;
            var bitArr = GBK.encode(v);
            for (var i = 0; i < bitArr.length; i++) {
              bitArr[i] = '%' + ('0' + bitArr[i].toString(16)).substr(-2).toUpperCase();
            }
            return bitArr.join('');
          });
        },
        decode: function decode(enstr) {
          enstr = String(enstr);
          var outStr = '';
          for (var i = 0; i < enstr.length; i++) {
            var char = enstr.charAt(i);
            if (char === '%' && i + 2 < enstr.length) {
              var code1 = parseInt(enstr.substr(i + 1, 2), 16);
              if (!isNaN(code1)) {
                var _i = i + 2;
                if (code1 > 0x80) {
                  var code2;
                  if (enstr.charAt(_i + 1) === '%') {
                    code2 = parseInt(enstr.substr(_i + 2, 2), 16);
                    _i += 3;
                  } else {
                    code2 = enstr.charCodeAt(_i + 1);
                    _i += 1;
                  }
                  if (code2 >= 0x40) {
                    i = _i;
                    outStr += GBK.decode([code1, code2]);
                    continue;
                  }
                } else {
                  i += 2;
                  outStr += String.fromCharCode(code1);
                  continue;
                }
              }
            }
            outStr += char;
          }
          return outStr;
        }
      };
    }
    var URIComponent = getModue(passChars);
    var URI = getModue(passChars + otherPassChars);
    return {
      encodeURI: URI.encode,
      decodeURI: URI.decode,
      encodeURIComponent: URIComponent.encode,
      decodeURIComponent: URIComponent.decode
    };
  };
  var src = function src(gbk_us) {
    var gbk$$1 = gbk(gbk_us);
    gbk$$1.URI = URI(gbk$$1);
    return gbk$$1;
  };

  // 多进制转换后的数字还原函数 构建时会替换占位符
  var Fn_Hex_decode = function decode() {
    var n = 0,
      str = arguments[0];
    for (var i = 0, w = str.length; i < w; i++) {
      var code = str.charCodeAt(i);
      if (code < 38 || code > 126) return NaN;
      n += (code - 38) * Math.pow(89, w - i - 1);
    }
    return n;
  };

  // 解压Unicode编码字符串函数 构建时会替换占位符
  var Fn_unzip = function unZip() {
    return arguments[0].replace(/\x23(\d+)\x24/g, function (a, b) {
      return Array(+b + 4).join("#");
    }).replace(/[\x26-\x7e]\x25[\x26-\x7e]/g, function (a) {
      var b = a.substr(0, 1).charCodeAt(0),
        e = a.substr(2).charCodeAt(0),
        str = String.fromCharCode(b);
      while (b++ < e) {
        str += String.fromCharCode(b);
      }
      return str;
    }).replace(/\x23/g, "###").replace(/([\x26-\x7e]{2})\x21([\x26-\x7e\x23]+)(?:\x20|$)/g, function (all, hd, dt) {
      return dt.replace(/./g, function (a) {
        if (a != "#") {
          return hd + a;
        } else {
          return a;
        }
      });
    }).match(/.../g);
  };
  function gbkArray(gbkArr) {
    var data = [];
    for (var i = 0x81, k = 0; i <= 0xfe; i++) {
      if (data.length > 0) {
        data.length += 0x40 + 1;
      }
      for (var j = 0x40; j <= 0xfe; j++) {
        if (j == 0x7f || 0xa1 <= i && i <= 0xa7 && j <= 0xa0 || 0xaa <= i && i <= 0xaf && j >= 0xa1 || 0xf8 <= i && j >= 0xa1) {
          data.push(undefined);
          continue;
        }
        var hex = gbkArr[k++];
        var key = Fn_Hex_decode(hex);
        data.push(key ? key : undefined);
      }
    }
    return data;
  }
  var GBK$1 = function () {
    // 生成按GBk编码顺数排列的编码映射数组  构建时会替换 zipData 的占位符
    var gbk_us = gbkArray(Fn_unzip("(T!HJ%LUX]e%gilotuwy{} (U!)-%/137>BDGHO%RTUW%\\_a%jl%rtw} (V!*+-0%27>C%EHJ%MP%R\\`cdfn%ptvz{} (W!()*,/3%579;=%CFGM%QWX\\^cdg%ilnprtvy%} (X!&')%.468CDHJLMOPSTWY%\\_b%dg%ilnprtuwxz%|~ (Y!'(*+-469%=?%GI%KO%RT%V[%_bdikmnptuy{}~ (Z!&')+%-/%;>@ACE%GKMNPR%TW[_%ikmo%rt%vy%{} ([!'(%+-%024%;=%BD%LO%QSTX%[]^`%ce%y{} (\\!()+%/1%7:%LN%SU%WY%cf%im%prt%xz%~ (]!&'%*-%/1%68%EG%cgloqs%uwx|%~ (^!')%-/02356;>FJKOPRSVWZ%]_`dfi%kmor%vyz (_!'+%-124%68;=@ACE%MOQRUVX%]_adegjqwx|~ (`!&)*-%/689;%=?%ADFIKLNOVX^%cehilmoq%uwyz|%~ (a!'),%/124%=?AD%HJ%PRSU%[]e%ho%qu%~ (b!()*,%.024%79;%=?A%FH%KM%WY%`c%ei%loq%tvy%| (c!'*+-.1346%8:%<>%GKLOQSUZ%\\_cghjltwy{| (d!(,/1%4679=>@D%JLMOQRTVWZ]`%ce%km%pr%tvy%} (e!+,-/0279%;>?DQW[%]_bdhqu%wy (f!&().47:;>ACEFHIKMP%SU^a%egikm%tx}~ (g!)*,.02%58<>BCGI%MPY[]`%bdeginpuv (h!(*-2%6=>A%CF%KMPRT%WZ\\%`deg%ln%qswxz{} (i!&+-%/1%469;>@AD%HJ%MP%TV%Y[\\abdh%mrsvx~ (j!&,%.0235%7:;>@%FH%PRTVXZ\\_%cf%hjkn%puw%{~ (k!').04578;=?%CFI%NQRTW%^`acdg%ilmo%ru%wz|~ (l!&(*%,.%9=%ACDHIK%OQS%U[%^`%ce%hk%ru%{~ (m!&')%79%CE%KM%PR%^`%hjkmnqxz%~ (n!&(*+./2%478<%>ACG%WYZ\\%^`%cgmnp%txy{} (o!&'%)+,.5%9;<EFHJOQS%UWX[%]`%dj%mp%tw%} (p!&'%)/2469%;=?%AC%KN%TVWZ[]`aefhk%mo%vxz%} (q!&'(,-/024%69%;=?%AC%EG%IK%NPSTV%Z\\%`b%eg%tv%| (r!&'(*+-%/1%57%<>%BE%UWZ\\^%`b%il%ps%ux%~ (s!&)%:<%?A%CE%OQ%SU%bd%ilnpqstvwy%~ (t!&')+,.%246%9=>ACDF%ILNRVXY[\\ac%fiklprsvxy (u!&(%,.013%?BDG%IK%MRVXY[%^abeg%jl%ostyz}~ (v!'(%,.013%9;%=@%CIJMOR%VXZ[]%_a%lnp%rtv~ (w!&(%+-/%24%689<=?A%CE%KNPR%VX%Z\\%`bcf%oq%tv%|~ (x!&'(*+-%5:;=%@B%SU%[^%km%svxy{%~ (y!&(),%1346%:<>@B%DF%HKMNPQSU%Y[%qs%~ (z!()%ACEFH%OQ%_bfnpqwx{}~ ({!&)+-%023569=ADEG%IKMV^%`c%fhinq%swxz (|!&'%)+%-/2%:>@ADEG%KMO%U[\\^`acefi%lnpquwy|%~ (}!&(+-%02%578:%<HIKLQRW%Y[%]_%bdgil%ruw%} (~!'(%*,/%35%7:;>?AI%MP%TVZ%\\^`be%hjlnoq%vx%} )&!&'%+-%356:<>?ABD%MO%TWX[%`b%fhj%mopr%vx{}~ )'!&)%-/%69%@BCG%QSTVX%bdghj%mo%{}~ )(!&'%9;%=?%WY%eg%mo%{} ))!'(+,2458=>@%DGHLOQ%SUVZ[_f%mp%twxz%~ )*!()-%025%:<%BE%IKLNOR%`dfhmp%rtwx{%} )+!(.137%:>%BD%HJP%SU%^a%fjkm%pr%} ),!&(%02568%:B%DFI%KMOQSVWY%[^%aehikmo%uxz%|~ )-!&'%358=%@B%DGIKLORSVX%Z\\^a%cgjq%suwxz~ ).!&(%+-%2467:%?AC%FI%MRSUVY^%`e%gijmnpqstwz{}~ )/!&()+,.9%;=>BCEIJLPQT%V^%`b%fh%loprv%|~ )0!'(*,-/%1457%:>?GJKMNPWY%[^%acdg%jlnp%ruwz{}~ )1!')*.035%79:=%DG%IL%PR%TVWY[^a%ejqruwx{%~ )2!&)%,.1%37%;=%@B%EHILO%QS%eg%nprtvwy%{}~ )3!&'%*,%/1%47%=?%BDF%XZ[]%ac%jl%txy{%~ )4!&'%+-%24%68%<>A%EHJ%Z\\%ik%su%z|~ )5!/058%:<?B%EGIK%NQRT%X^`%bfklq%suvx%~ )6!'(+4578:;=>@D%FH%KN%SW\\_%afijlmp%su%wy%{} )7!(*+-59;?GHJKNTUZ\\_b%ejm%pt%wyz|%~ )8!&(%*-78:=%?ABD%ILMO%RUXY[b%eg%nqu%wy{%} )9!'(*%-014%79;%>CEIK%MOQ%WY\\^cgijmnqsuw%{} ):!&')%+02%46%<>AC%GJKM%PRTVX%[]bce%ilmpqt%y|~ );!()%+-%/14%9;%?ABDFHIOQ%WY[%]_%ce%lnp%rt%} )<!()%.035%=@ADEG%JL%PR%UWX\\^%acfhj%lnpqs%y|~ )=!'(%*-%13%579;%SU%\\^%eg%km%xz%~ )>!'(+%.2578;%?ABEFHIKM%ORSUWZ%\\_`b%eh%jlnpqs%~ )?!&'(*%,/%146%8:<?@BDEHJLNPS%Z\\]`%bdi%lorsu%wz%~ )@!&'(*,-34;%>ABD%HJMNP%RTVY%[_%ac%egj%mor%uwy{| )A!'(%+-/024%:=>@AHIK%NPRSUWY%]a%cehik%mo%qsuvx%{}~ )B!&')%,/%35%=@%DF%JL%OQ%TV%oqu%|~ )C!&(%-/34689;?%EJLMO%QTV%XZ\\^%ceglnpqt%wyz|} )D!&)*,/0279:<%@BG%IKLPQSVY[]%`beghjkmoq%tv%y{~ )E!'+%-0258:=>@E%LNQ%Za%cgkmopr%tvwyz~ )F!()%/14%79@CEGHK%OQ%SU%[^%dg%imnrz~ )G!'),0%9DF%MOR%Z\\^a%hj%ln%pr%{}~ )H!&*%-/2357%@BD%IKMO%RTUWXZ\\%`bce%nps%uw%y|~ )I!&'(*%,.%2479;%FI%KM%TVWY%[]%`b%dfhik%{}~ )J!'(*+.01346%9;<>?A%EIJL%NPRTY%[]%befhil%uxy{}~ )K!&()+,.%02%68%?ACEG%IK%PR%TW%bd%gi%rtv%~ )L!&(%36%;=?%DFH%KMO%QS%Y\\%`bce%ln%twy%} )M!&'(*%46%<>?A%CE%GI%QSV%Z\\%ce%lnq%~ )N!&'%~ )O!&'%178:%CE%HJM%OQ%TVWZ\\]_%jl%sz{}~ )P!&'%136%9>AEG%JMNP%RU%Y[%bd%koq%wy|} )Q!&'%*,.018:<%@B%IL%NP%RTV%XZ%\\^%dh%lnrw|%~ )R!'*,2%48:=>@%CEFJ%LOR%VX%Z]_%aijl%nr%vxz|~ )S!&(%*-.2589;<?@C%FHJ%LNPVZ]^b%ehn%qt%vy{%} )T!&'-%/1249;<>ABGINTUWXZ[]%_bd%fh%kmqrt%y{}~ )U!()+,02%46;<>@EHLQ%TWY[]^`acdg%il%oqru%wy%} )V!&')*-.02359%=?EHOPSTVWYZ\\%ad%fk%mp%su%xz}~ )W!&),-/1%479:<>%@BDG%NP%SUY\\]_bcefhilp%rtvxz{} )X!&'(*,%36%=@%CFHJKM%OQ%[]^`%nq%suxy{%~ )Y!&)%/1%35689;<>@AC%FHKMPQTV%X[%^`%bd%fhjnpqs%u{ )Z!&)%24%79%@B%DFGI%MO%QU%^`%bd%gkmoqstv%|~ )[!&'%+.%024%=?%ACE%GI%KM%RU%WY[%]_ac%ik%mpqu%~ )\\!&'(*%-/%35%?ABDEG%LNP%UW%]`%jlo%z}~ )]!&'%DF%MP%VX%hj%ln%~ )^!&()+%8:%EIL%ORT%VX\\%_a%cf%hj%lnrsuvy%~ )_!&'%,246%8<@AF%IKM%Y\\^%`b%eglpr%xz|%~ )`!'(%14%8:;=@D%NP%W[%^`%mo%rtvx%~ )a!&'%+-/%359%=?%AD%GIKLN%SU%Y[%^`%ce%gj%nq%wy%{}~ )b!&'%)+-%/1%9;%DF%JM%VX%[]_%df%oq%|~ )c!&'%:<%EGIK%MP%RXZ\\^%dg%il%oq%suvxz|~ )d!()*-/%25689;%=@%BGHJ%NQSUVX%ce%psv%xz )e!&'%,1%35%8;=?%BDFG 'W!,-. &(+&.'&-~&'u'W!/1 ')>.<V')!@PBCFG 'W!@A4%;BC<= &'~&(!Kk '/!J;< '.!~| '/!>= '.u'/!K. '0`'/!94 '1t'0T'/!?Bu`\\Q1t '0!)* '/!xy2IH ';!*( &'}')!\\] '+{.;U&'q.>!&' ')Z&'t',5':!GF '9!eiha`;:ML ')e'-!XVWY 'W?'-!67%?#3$ '6!-.%@ '5!rs%~ '6!&'%, '5!^_%g## ']!67%?## '-!&'%1## .;!RST .>+.;!VW%~ .<!&'%U .>)'W!mn%~ 'X!&'%f#8$t%~ 'Y!&'%p#5$ &0!=>%MO%U#5$]%mo%u#4$ .9!89<=BC@AD%G##>?:;4#67#6$ &1!cd%hTi%~ &2!&'%)#12$*%/K0%I#10$ &.!()7 ')!=?O_ '+}',('-!\\]%_ '/!)37fz{ '0z'8!CD%ft%~ '9!&'%)-%/VW|%~ ':!&J '0P'W!>IJ#8$ &(!uU &+7&(T&).&(]&)6&(\\&)F&(a&+9&(`&)h&(g&+;&(f&*-&(n&+=&(m&+!?ACE &(!p^ &,a-Qc&)!_c -Qd&,q#1$'Z!&'%J#18$ 'W!MN%U '^`'a!@AN%PSv 'b!'*+. .93.>!(*# ',@']G#'):#0$'Yv'X!no 'Y!wx 'W2'X!pq .9!LM%UW%Z\\%ik%n -R!*+%6 'W3#10$'7!LM%~ '8!&'%>#12$ )e!HIKN%SVWabei%lnp%uw%y{%~ )f!'+%-23679%;@BCEFHIM%PS%_abdf%ik%rt%~ )g!(*%79%=?@BDFGIJL%OQ%TV%XZ[]%bdfgkn%prsv%y{}~ )h!&'(,-/3%9;%>@B%EGIK%MO%RT%cehil%or%z}~ )i!&'%)+,/13579:?%CE%HJ%\\^`eh%tvwy%} )j!'(%,.13%57%9;<>@%JLN%UY%hj%~ )k!&')%1357;=%CF%IKN%TV%Y[%bdfhj%mqstv%z|} )l!'+1369:<>%ACDFGJM%PR%UZ%ad%fh%npr%tw%{}~ )m!&()+%.0%2479<?@BFJ%NQZ[^_c%ejopr%uw{}~ )n!'(*%,047%:=>@%CEFHIMOQ%TVX%Z\\%_aeg%ilnrswyz|} )o!()+%-/346%=@%EGI%MOQ%TV%\\^%`b%iklnq%suw{|~ )p!&()+-.013%<>%FHILN%WYZ\\ (iC*r5(pM)89(gy(h[(gk)p*)o>*A;)s|*9E)ui)cO*s5*ux)R/({@(Z*)7s)B.(~d*4~)F{*42)@K)pg(_l)>Q)a|*2'*Jb(\\0(u2)4?)\\@*9t)8])5n(eJ(f+)|s(^7)mH))<)7>*Yr*ua)6M*2O(o@*t|*0J)cV)oo)E[)op);L(XR*W~)7F)z6)?3)hN);2)66*8L*xa)Dd)cf)61)76(Wo)k9(cY(a_*.d*b,))v)G`)Jk*6R*.k)HS)vH*E'*oR([d*U/*:L*4b(bm*L>(a&)p!]`bdelnrsu%wy%} )q!&'%-035%7:;=?@BCEFJLN%X[%^ac%egj%lnp%ty{}~ )r!&)+%-/%69%@C *B**t=(Yf(qR*{F({T)6!th )BK*V+++A)b})DT)um)12(c!`& *^r*4P*Wv*mT(Z=)e4(t-)1k)`B*K0(tz*:])Cj)}<)&|*/8)l*)TJ*[[*`!0t +3')Q4*cF)}()-`)v**@.*A<)Q!596 ))I)*v)nD*q<)>X),G).P*_0(s@*7;*a^*rQ*v?*_J*/W*X,)5](YH(e5(cm*_!9:< *a,)F:)-N*6j*JF+,1)3Y(`E)nu)-P)?.)\\_)Z'({u);N(^!A| )EP(T_)yA*{Q)_5)r!DE%GKNPQT%_a%ch%jm%rvwz%~ )s!&'%,/12469;%=?@BD%HJLN%Z\\%df%hk%or )mi)*e)gu*=C)<Z)7R*mh)T7(ci(b+):n*mu)~O(Wj))c*8V*5A*6\\)Wn)Sx*~=)8f(ck(hL*JC(pj(TS))K)Ow*'H*bn)/H)=:)f/*KF)D5)5i*W{)rS*Zw*eB)-M*=?*@y*z>(dx*E0)PD)1!mh )^Z*:;*8Q(Vg)SU*Bu)<z*)0)Ks)C7*;^(dK)}j(Y0(^X)UG(}G*[b):1(e&*;!AK )Eq)v7);C(|=(~@))6*TK)70)F'*V,):_)9r*G2*{`*T{*/a*nL(V;*q_*y+)@U)f))s!tvx}~ )t!&')*,.%18%=?@C%EHJNPSU%WY]_`cdf%hjkrtv%y{}~ )u!&')+-/04%8:%EK%RT%WY%_ (nv(|{)*'*p'([V*3}(d8)>Y)lB(i*(ZQ*Y,)6G*mQ)C[(ky)[T))*(f9)^m*^P)62)<Q)9[)-_)[n*bz*7\\*_A(|v)AX).|)S7*r>*Y(*JJ)<>)yh(pX)Lv)5,(fL(UE)z*)1i)[j*T>)6B*`V*~U)y\\(e`)n?)7k(c()Rg*_p),X*~:*2q+3k(Xj(}?*Xd*1T)?G)_?(]j(^~*D_)&Z({W)7'*d@)lq*ZZ)z?)2()~4(V[*/9)rl(TW*7f(`7(_m)M5(d^*[|*n^*sl)YY*rZ)J))u!`abdfgklnp%ruyz|~ )v!')+%28%;=%@BCE%GI%KO%RT%VY%[]%jl%np%tvxy{|~ )w!&'%*,%.0%6 )tu(\\&)se):o*N`(t*):B)(~){E)Ie(W[*8Y(j8(Tx)mR){])*!Qy *q>(`5(f=)^e)9.*n~(oe)@n)Ig*d[(hY)W=*.I*IY)5O*/1)mY*;=)vD*si*_/)2o)kM*T1)Ov(`T*XP)O3*3G*>{(n-(bn(Vb(Ta(_D*(G*d_*&i(YL*[t*&C){b);m)&g(\\**51)nL*(i)W6*1o)D6(zh(|V)vN)<[):r)9b)8<*ns);3*_O)}h)nt)5o(tM(fJ)P2([z)5P))n)P?(Vw*X7*Ji)-i*`f)w!78%<>%GI%MO%]_%cgil%oqt%|~ )x!&)*2457:%=?A%GJL%PSTW%Z\\%_a%c )/R*2s)7/(U&(cd*b~)9p*4J)@/)R5(X()1n)W+*TB),v*Ef)-7)82(^&*;v)G=(_s)8t*[=(ZB(~G)xH(|Z(`J)zZ)1<*a2)pp).B)-{)ov*[a)^J)om)}])s8(_f*ar(qU(X0)Z3*_{)>G)}/)e0)VG*1n(yJ)6x)++(nl*?3)}@))e),\\*`J*/U*y')9:)Y_)ut)_;(^D*uF(p5)l2(W~)l5)+-)1f(u-)Vc)Px)ue(eY*sr(_!>t )9A(eg*mF*Tg*Ys)cW)u{*G_*_~*Tq(e=)x!de%jl%wy%~ )y!&'%*,%047:<=?@BDF%HKLNOQ%VX%Z]`bdfi%oqrtvwy|} )z!&'%)+.%24578:; (TG)q/(eK*m<*xV+2S*o.({Q*S_(T!hb (^x*>m)47(ai)F>(Xy)0D(_.)Ts(^()6Y)?9*rW*UQ*`O)m|*c*)rJ)Q2)dO)eX*T_(qf)r`*XL)DA*oA*3w)+<)Wk(u_)|\\)s{*o<)Pn)?O*/O(q7(]v*qn(|W(s((f,*[g)>a*x_(my*mP)q>*`y)9?(gq(t!@` (o~*\\N)Cs*ZH*8U(`[)1p(qF*F@)&;+0<(YM*x}*Sv(w@)0O(d:)6?*a.*c/*{T)0B*2B(]d*2i(|r*{J)U-(Uy)z!<>@AC%QS%UWY]_%df%oq%uw%~ ){!&'%57%9;A%DHKMO%RT%VYZ_%adgh *X0(e.*0B)}c(WK(U<*qO)T*)h1*C6))N)lg*21)L')t3*mE*-4(_T)_h(e**_e*:q*X))dt*{B)T0(o-*9z)?[*4.)5[*r((uu(W:*S|*.T)>9*=U*uI(iZ*ye*4)(c9*Ta(e}*4>)+5)Sf*X9*9s*d.(f-)Q{(_y*.Q(oB)`C)S,*(9(tq(W8)/1)2K*(Z(Tv(|_)E7*FD)&C*ne*yU)mS)`&*`Z(^{*/^*Sz(to(_W(X=(f*(tQ)>r*4(({,)69)7,*^z)*4)R&)}:(WJ(Ya)CK){!ijmo%qt%xz%~ )|!&'%+-%79%BDEG%JNOQT%Y[]%ehikm%ortvy%{} )}!&'*%,.0135%7;=A )Uj)VM)x`*K6),T)l()6]*^o(Yx*eW)?I*5!Z| )+2*5{*Xt(a0*MY*XK(t3([\\(Vl*qk)cT*6K*Wx(|**S`*r:(uT*/[(g;(ld(kU*TI)>4)JQ*mL)po)Xz)*a)kn)D+)E])|l*3z*Xv)2F)y>)>]*Xc(^T(`4*mU*/y*3x*.L(~C)Wy)DE*&;)o}+&I*6a*0|*),):}*oQ)z^(fN(h7)O^):`)4}+04*4w)m=(a3*uT*>e)Fo*F&*qP*s1*nF(Tp(ea*.s)Fl*Z-*2K)C2)+0*1H)}!CDFH%KMOQS%XZ\\^abgikmprsuw%~ )~!&'(*+./13578:<%?A%GIJL%NQS%VY%[^%`i%kmnp%rt%{}~ *&&(pL*2u)Gq))-)>6(a`)0F+4-(X}*\\H(^8({b),P))1)Re)7[*Wz(^=*m\\(bf)SM*:M)eC(p,)Di*X-(tE*_-*=*(g@)~H(Wk)Sk(zt(vE+2X(eA*Ee*~r*UB*3~)>@*x^(n6*sd(`H)k2(`j(|?)7l*L.(UC)7:)/\\)H{(^?({O(^l*N<)~\\*{[*08)1o)^'*X/(]n)*n*`S)ix*N>(ni)tz)-6+42*qI*^R+'T*TE)oj)Fu)Eh*Z8*X5(`W*^t)Yr)HN*n_*bs(n9)E(*K~*_X(gs*&!'*%-/%246%:=>@%BD%FI%KM%OQRT%XZ%]_a%hj%lopr%wy%~ *'!&')%.124%@B%GK +&)(zy)Us)R-(V9({j*~Q*d7)3v*b5*v{(f/)VX(|0(_p(j**0=*2&)<i)8^)@:)43)0f)`3)R!^P (tU)DR*8J(sT(l|*Uu)QK*bc(uJ*2M(eT)Ue(fy(j=*<3*=2)Fk)y6(g7(X7(ee)pk*V;*qQ)Sa)V[*Xk*L<+0[*X:(l-+1o)my)-l)eL)0A(hN(V<)LG*J?)0+*^Z(go)_Z*Dm+06)U&({F),U*.<(j)(Y8)fG(f@(dP(ZI(ek(g'(U;)//)ib(su*>u*4e*G])e<*(z)XG*'!LM%UW%{~ *(!&'%*.%8:%@CDFI%KPQSV%Y[%]_`d%hjk ),d*DB(h~)6g(V&)SX)5S*9x(h)(c])fQ)Yi)l8(`,(b~*TA)KF)-n)/2)W8(o2)O4)gi)G-*_i*/T)8s)0|(hv)n5*Um)`>)VF({])*j*;g)2s+1b)v}*G@*'0)oy(_c)1v)`u)A3)*;)0&*Tr)^K)86*^s).H)0;*Eo(ms)Pz)0m)35(cX)1`)AV*X?)yu(WU)_k)RN*Sp*TV*.r*;y)@X(wu+'Z)UM)WA*UL)U7(WT)^F*<s)52)1Q*tQ*X')xI(_n(nz(q+)Cx)lu)z\\)yg)~P*(!opr%tvy{~ *)!&'%+/12458%>@%EG%NPQS%`b%vxz%} **!&'(*%,.%4 *3i*{:*`1)\\M*Sb+/q(v`*/!*J (ef)Df)HY*^{*'V*sc(e')/W)mb)Ry(d)(y2*.A)85(_S*55))9*@7)6C(^L(zs(WI)x>(`\\)18)UJ({!{y *S!^m )@+).W*r;(u`*/(*.D(kP)EC(t_(XU({m(aa*;o*xj*X>)l/*mq(Zw)z[(W2)EB*~H(y*)P5)pj(o=(|t)}N*qC)`w(^H*4-*97(uE*/E*;<)HA)Ex)v4)uS)7M)8r)~;(Yv(a+(_B*;e)KQ*g=*ZC*X1*N;*o/)~h(W1**!56%km%tv%~ *+!&'%= ([<*8P(`k*{D)WZ)Xv)VJ),7(\\s(vP(|d)UB)Rf)m**?<)GB(t|*So(c/*dE*rC*AH)I:)w+)`O*4z(V8*bP)UC*~N(v{(mQ):d*nJ)sy(Y.*5E)eM*NL*{O*/u*.x(a@)>T*dI*^!im (eH){\\):L)9])ox)yp*J5*r,)5F(al*9I)G.)DU)9/)rR)|Z)TV*.m*N](vD)5.*Bo*9l)lI(ZO(V_)mI*TO(}O))F)}_)?F*eL(V^)Tz*M2*)~*o'(VY*U3*_l*u^)A;)xR*_b)_n)Ut*+!>?%JL%RT%~ *,!&'%F (}B(as*;[(^.*:|)rB)Af++l(V@)1J*(!nc *.i(V)*R|)A_*xh*uD(r[)>g*o])-h)mm*uA)|!LK (_3)_1){^):I){<*.:)gP*w&(U2)^S(UJ*d&(d_)>L)@0*7!u~ (g9(}6)m>*v2)7B)eE)ma(}J*~C*=-(}E(g+)sw(U+)S\\*37)7<)9&))0(^C*Z!+l *o0(Yz(eB)1g)_.(a()8a+0:(w:(ZV)qw(d-*.|)<2)>&)6L)9P(ZD)cS*NC(_&*S}*.w(o**=/*mZ(^g(ex)&N*,!GH%~ *-!&'%-/%35%9;%P (YS)|P)UV*bg*~Y(iy(gA(cp(gZ),=):H)JF(_b)36(_}(q[(b@(o1)tB)qK)+M)3E*)7)5w)6Z(V6)^p*29)7a)_f*uK(oZ*:I)E{)Hv)vX*xw)yI(sr(g^(eL)W~(]p(`U({Y*Tb*43(i<(p0)0L(o4(f1){@)0)(zd)9_)6c(e@)6&({~)E;(h?){e*:T*dK)+)*Ki(t^(p8)7x*Z6*4s(o:)~2(Y2).v({t)OP(c0)}d)e.)Fy)t4)qv)@@(_((U|)pm(~k){k*?&(tt+'Y([W*-!QR%tv%~ *.!&'%46%8HNUVp~ */!-:KQ_xz|%~ *0!&'%)+.%7:; *{])2N)Xt(oG)@O)8W(n,)7V)6,)+i*qc(of)73(j'*Fc*5u*_4(i_*<m)DJ*XV*@5(x,)FB)7P*&P*q`(^<)\\)*U;):\\*NB)4G*/G)_D)Y})hf)Jc)eh)+`*bT)CU)Uf)8o(at)d'*27(XN(vY*d>)_[)V@(b:(U=*t;*on*A})vM**-(]F(ou)<o*3h*(+)T?)Hr)J-(_*(dN)H))dF+1l*&S)ed)y3)ZR)hg)D3*eG++X)wf*<E*;i(el)FJ(U*(d?(ar)ts(d<(`C([_(Xm(YY*0!>AC%FHK%OS%UWX[]%`b%eghj%qsuw%{}~ *1!&'(*+/12457%=@B%FIJMOQ%SU%XZ\\^%befh%mqr )n-)|8*(B)SS*sS(a\\)j2(h;(Yr*31*<n*_o*oq)+_)/N)VB))`)>V*5c*nX)/})_>*.]*(^(_<)G[*(a*96(Tj*^p*eJ)An(VB*Ti)<V*3'(\\X)m;)bE(|C*_N)[L(Us)</*od)+l)?;(`1*KG)_J(ad)ez)i;)D|)vz*tZ(Tz*bA+,9)Vn(_N*XA(ez)78)gl*=T*t:+3p*mv(Wq*1)(_?)^P*rk(~Y*xf(eC(Vx)Y4)hj)K*)uG*{d)lV(`2)no)U=)F&(^9+4,*3((gD)}P)|,*1!svwy%|~ *2!(*%03%58=%@DEGIPQS%UWYZa%fhjoprtvwz{}~ *3!&+%.02%468%EH%MO%Z *r|(og)7L*r=)JK(vx):a*&5)ZN*rA*9m(cq*xe)+&)^d)9k(cs*DC++5+11)uh*tv*Z=*XB+0v)[D)xU)-9*r<)5J*~>(er*n7(Y,)?g(}!jf */V*DE)R6)-o)gA)Y|*/@)&9)8,(zz)Y~(d+(U^)9X)lb)6d*^X(Wa(Ve)ST*.P*Sw*>'*HJ*0?*`s*n})~d*~k*K}*>G)Tp*~P*.v(uU+1Y)gU)t6*Dv*~!6L (kb(et(pU(U]+1D(ce*_Y*54)ry*{g*F0)Yy*@k)C:)30)Zj*3![^_begj%oqrtv{ *4!'*%,0479:<=?IK%OS%Y\\cdfgjry{} *5!&)%,.%02367@BDF%HJ%VXY[^%`bd%hj *U4*9Y*;@)q2)Qs).d*<y)f>*:s*nt)Q;)si*my(c~*:p(^^)*,*V>*X8(U5)ge)E&)G_*dJ*tM)a4)SO)qI(xT*oB)Q/*0v)@p(|.(v-(x\\*q!7F (W'*=o*?J)Mp)px*o1)f.)H'(zo)qo*dn*uL*)3*`/*U'),b*'|)yP*N?)Sz*F^({})*1)HJ)q`*/6(^a(]r(b1(wD*/F*uM*:E):.)rk*Bv)yJ)X+)+/(uf*@i)^H)Qq)7))pX)>J)1/*qL)@W*H/+/s*nG(ej(g(*U7);~*5!kl%prtx%z} *6!()*-%13%68:<%>ADEG%JSU%Y[]%`bd%iklp%tvwy{}~ *7!&'%+-%25%8=>@%BDF%L )<&*C^)L>*6n)vk);o+'l)6|)Ci*<g(s'+1v)SY)Z_(|<*rB*To)c})E\\)71)d&(V=(v:)Q-(rk)BE)*D(bG)2|)Cf)q.)rM)d,)ze)7i(h<(fT*mS*b)(w7*.M)Qv(U0(uC*2F(tn(cf)l4*s[(m_)81*5<)0U*qH)Vy(ff*{V(^Q(yR*5((u{*tW(ZZ)T:(}A)7I(XB(cN*6M*`>)YR*A*)72)*c)vA)<b)93)/'(w3*dS+/o(}D)8`*2x({4(ig*o!KN )V()1()El)eJ(_P({8*7!MN%[]%_abdg%kn%svx| *8!'(%+./135%:=@D%GINRZ\\]_%cefhjl%np%wy{%~ *9!'(%.0 )7Q)T3)cy)60*ma*.W*5>)UO(^h),A(uA(ak)/D(u@)B-*DD)mC)8;)4[*)F*T^(h8)O9+/u)Pm*B{(fY([M)SR(ic*Y[)cJ))])/G)i>)77)9J)cj)-|)X4)U:)=T)[>)pq)vS)q<)lQ(`>(e8(U@)+4)?c*2`*4Z)6^(g1(`B)_0*Jk*Yx)T6(f|*4^(q**Ky*XT*r`*cz(XK)SI(jW)p_)te)6k)_{)[t)-Q*@D)H[)uX*&Y*6z)CI+0F)8x)v3(oR)tG*t})6!<n (aI)i=)Q7*9!12%48<%?BCGHJL%NPSWZ%]abegijny|} *:!()*-.01347>DGHKPU%XZ%\\^`acdfhj%nxy{~ *;!'(+-.2%;>?CEGLPR (i]*5i)mV)pG(cH)n)(\\y(}F*S)*&)([&)ce*~a*y_)ZA)k8)x9)<4)s3)7f*xq*X+(gl*35(U?(oM*:g*=p)*b(_`)kL*T((}T(oD)TQ*xg(wa)ti+'\\*_|*(E(`p)5m*nT(VZ*<B*>k*=L*?c(p^)Cr(n?)A^)Ub*U<)Bt)]E)C])OL)FI)56(v/(TI(_7)ZE)E^)S=(^B)HL(tm)Oy)lc)&a*5;+3<)?y)w!rk *~[*Xw(~.(UK(W<(f3(tw)tA(lV)Qt*_U),@)S+)T8*Sh)9H*;!STVWYZ]_%chj%nrw *<!,-%256:%@CDF%IK%MP%SUVY[]%ch%kqwz{~ *=!&')+,.013%68:<%>AE%GI%KN%P )0I)U9)d:)6)*m!Ax (cR*_R)~9(Vs*U1(Uk+1r*m!df (`g)[B*aB)UA*U?(qB)'F)O!2[ )E6(f_*6&*0t(rq*A6),w)6e)Ld*o:)>m)0])G?)s5(UA(Y1))/*v*)<Y*1g)&@(YX){S(_z*:r(TZ)/a){I*mY(Y>(VF)y^)i<(bL*:')=&)y5(|;)S/*u=*^e)R)(Zn(d5)WO)<{)Ad)R7)1E*xW*T[)*u)iD){=)yC(T^*b7)hd)RI(mo*cx)Ss*Y2(cI*Ea)C0*\\K(}M*~;)Wj*=!QRV%Z]%_a%cehj%msu%z|%~ *>!()%-3%:<%AC%EH%OQ%Z\\%`bg%jln%rtx%z|~ *?!(*,- (e3(wQ+3w*YJ(dq(nD*y.)D(*do)Sw(^4)mn)7])dq(`R(a^*/{)^o)o*(d*+0A)K-)uJ*s]*K^*13)`_)b:(^U)E_)k:(sc)=l(mL*Sf*{K)63*.o)1y)_o(sk(V!UN ).X*vy(W6*Sa(_v(uW*.E)5p(Va)@.)5**;M*?z*;x*Gv)ad)YN({p*.l(^c):()E`*3f*;N*IL(]7({1(uO*_B(U`)Rd(^1*LQ*^Y*q}*AI)if*nj*q?)VI*:S),n)<?)Tg*>2*6@++w(r6*X[(TO(dw*?!./%24%7;>@%GIKLN%QS%_abdf%hlmoqstv%y|} *@!&'*,-/%469:<?%CE%GI%SUVX%Z (WY)>^)G+(js(Tm):s*~d)6.(y+)ig*99)VL)Ho(\\e*<J)t7)C~(`S)SG*.K(\\9(i^)a.)}o)AB)h+*:Y)D.(}v(`:)aM*JI*q9*rK)<r*Xa*7,(i})R\\)5c*/o(rj(W_(i?*XO)A<(TP(|x*Kx)G|)8_)z,)_i*9T(bb*w/(|o(h:*b;*.g(u/*XJ*Eb*8!,- *Xf);J(|b)2x)V,)wh*S{)tl)l0(g&(Ws*\\G)W;(w;*._)x/)S6({X(x8)kp*4B)2u)Wa(so)k!u{ )d7(cV*/4*@![\\%ce%hjl%npqs%vxz%~ *A!&'%),%5=%AC%FJ%TVWY%\\^%bd%fh%prt%w{|~ *B!&' )qA)pt(a**4`(n_))P(tW)eZ)?_)Xp*T;(}=*De(cP)t()7h)@?(VT*yf*Dt({U*T*(eO)sp(Xa(}S*~@(v?),L)wd(sj(T\\)F2(Ux)7W*P[*`U(b')@x(j|(lZ*`:(Vi(Xo*eE*{E)Qo))J)/u({[*N@*T9)>1)5g*{k({?(|])9@(i'(e4)nq(^I*A+)E.)H4)PC)6U*^}(e1*82)Vt)m3(US*XN({')ao*BU)B!(p *0Z*FB+1k+2e(}c)Cm*`()FD)DD)5))|C(r])+L)>k)Zp*B!(),.%46%@C%IK%MOQ%SW%\\^`%fh%np%twxz|%~ *C!&'(*%02%57%E )0.(`Q*2C);Z*JN)l&))M)FF)7^*t`(e))c[*Te)R;)rH)z-(f2)s:*xZ*8<*TX)u1)CR)_C)?Q)<B(k})/O)y9(eU(Tc)P4*3c(|X(k*(mp(W!uw *{G));)Dc*2n)/4*xb*`9({B*Sy*TY):{*8x)=2(kD*:=*d9(Y`*)w*`W*(O(\\q(r))YG({v*T-*3`*dL*?M)~R*Dq*s!(, */&+&D)uj(~-)zv*`z*sD)x0(zi)8p)|x*@))H.(hX*/j)hq*)y*n[)5\\(q}(Vj({:(uF(r,*C!FGI%KM%QS%]_%bd%suw%~ *D!&'%+-%/1%@FGI%MO%QS%UW%^ )g')8/*[@*Z]*4R*:B)6o(eM)TE*d2(tP)/3)Rw(o0);P*X*)nv)Z((o>)MD)n;)[S*U8*Tl(oI)QO*Jp)v6)9Z(eV)_/)Rk(r0);0(q3)Ha*6m(hb*)-(ZH*\\V)Vo*YF)_m)9G)V>)Yl*/'*=g)Fv*`;)V{*rl*Se(t})d>*C1*6P)m`*PR)H0(`n*Zp*nk):/*xx*[9(iu(X5)C=(l})1U)V8(`](}N(tO)WE(rC)l-)kr)0E*84*5q)7{)DF*_s)qz*ZA*X4*mt))^(d;(f0)_E*D!acdf%lw%} *E!)*%-/1%69%=@AFHIMNR%TV%Z\\%^`cghmnp%ruwx{%~ *F!'(%*,%.17%9<%?ACF%HMNP%SVX )RG),4([3(VA)+C)8K*8g*`R)G**dB)sA(ei*n6)-H)|R)GP)8V)}f*.y)n&([N)6X(tZ*`G(_k)y;){G(n:)-v*`L)U~(}e(n[(em(]y)X>(mw)9`*xs*6Q*FW*LV*`8(e{(}t*79)7@)5t*5\\+0,*r6*~!8F )IU(ur)7=(i7)8'(gr*Et)U8(vw)k<*Jz)O|(t<*UW),l)Xo)gc*x](T~)_y({C)us)8N)AJ)p/)1K({R(wd(TM*6')Rq)gE(V5)Dn*09)-d)@C)CY).c(uQ(vu*F![]_abfh%jl%oqrtuwxz%|~ *G!&)%/3468%;=%?AC%HJKO%VXZ%\\^`%ch%jmoprsuw%{}~ *H!&(%.0%4 )(n).9(d'*vx*_n)Fx(n0(i()1_(U')[3*/5*:5*=q(vH(W!Ze (}C*.F)Ch*@r(fw)lL*4G(i{+'g(X/)Ww*Tw(|g)3>(cz)nj)Ws*D~)?)*qJ*.S(f?)zR*)a*q=(k(*1P)kD)8.*FY)VD){c)5-)?C(cv):@)S1))3(f`*m[(U9)Rh*TP(}P)@)*9c)H((f!B8 )Q+)Ox(V()8S(cW*8>(WH(Y7(oA)5&*tB)AT)d.(bg(ab)0x*TS)@])ai)Du*MR)u.)t2)A`(l)(f<*n{)d?*H!5679:>@%BDF%IKLNOQ%UW%Y\\%`d%jl%oq%tv%y{%} *I!&'%/1%46%9;%@B%IKN%QS%WZ )yx)0H))T)0b*6o(t;)1\\)aT)_q)YB)RW)dE)MH*K2))u(UM(xu(j<*n=)Tl*)R*s6)5+*.`)ru*Dr(c2*tb*_')Aw)&4(Y))eY(TQ(d\\(t5(ep)98*o)(]m(Vm++P*.>(gc*W}*J2*8W*qA)V1),c(y5)A.*r_)gj)fA(du*6L*{Z*10({a*r!mF *.Y)q8(dX*ow*{n)~l*Lp)XI(UN*1c)x6*TJ)1s(gx(V?*xY))?)L~(\\M(en*Ul*>1)u9*tH(`d(h@(m8*nZ)V+({l)Vi)AC*I![\\%hj%oqrt%vx%z}~ *J!&'%),%13468%>DEHKMOQ%TV%Z^adeghjl%oq%su%y{%~ *K!&(*%/ (|m(zm)FT*3s(iq)|~)>C)I|(V/)OY*G7*uv(c^)80);@*b0)?>*4E*Tt(^e)H1(d.*I0)4=)Sr)TP*U-(}V*BP*9v*nf)O5*_,)?R)/-).N(Yj*I|)@h*67)f<)1z(^@(`+(on)-F*b(*J**df)*g)D4)/Y(vG(]i(_i*4|(bp)S'*sa)aZ(WL(Yw*1-)C{(je*nb)y8*Jt*.}(rw)5(*tD*DN(k_*x[)-t*Su*?u*d+(e6)@6)*~)lY)0=**l(xA*/!+. *^S(jG({Z)1,)?m)g>*K!13%57%;=%@B%EHILMO%RT%VX[\\_%cefkln%twz%| *L!&')+%-/%57%;=@%DH%LN%PR%UX%[]%_ac *`A)oU)qi*.t*u_*BA(zv){:*t.*Iw(b3)a_).5)@5*TF(|Y*~9))))PB)Rb*S!jl *`B*_V(dA)7&+/!v} (fD(Tq*:+)cw*E7)&i*J7)VR*sb(g|(V.*Ss)`2(gh*qX)_a)WC)pi(Tk)tI*FT(~U),3*Nz*x|*q])^i)Sm(tj)9a)q|*J+)ZS*9:(qa)bL(dB)tO*s^(hS)-J)`Y({k*T~*~V)P<(tT+0&)y_)DM)6/(XQ)mE*0r)T`*r))R.(W+)mv(^G)Fj)Z}*a_*6B(uc)i~*L!de%lnoq%~ *M!&'%03%8:%MO%QSUWXZ%t );M(},*aD){W*U.(vN(gW*7y*<+*MT*26)IX(l<*2l)cU*eI(_)(UL*xU)9N(T`(eS)C1*5v(tB)VU(TF(sx(cJ):5*nK(Y&(WE*JA*xp(t]*a6)ys(V~*4t)m5)S0({S(v\\)-A)I-*Du(ZJ)):(UF)sq(Vy*9A)6T)@\\*ap(}~(VS)-]*7?*`p*3a)mO(V:*KY)26)P~).Q(U6)pc)Y:*TG*Sk*T!n5 ),?*22*1[*.h*;J*<'(mu)Pp*w,*r*(vo(e|*nP)W5({|*{C(}>),R*s-*M!uv%~ *N!&'%:=GM%OQ%SUWY%\\^a%df%hj%ln%y{%~ *O!&')%> (d&*:_)LN(x6+0g)+**/i*<u*>!./ *;|*G0*__*Xb)pa)-U*xv)uH)@i(h1)7O(XE*7<)ml)+N*sj*ZX*F;(g:)TH)V/)R?)0X(b/)k~)*l(WS)0y).r(}))l.*b4*ms)d~)Sg)X)*cv)CG(e!(P (X3*eD*TU(d~)*k*_S)W.(U{)p[)JU*DR)2A*8&(X;(Yg*`v++0)20)W!g^ *r{(Uu(wL*t,(TT(~+)y1({>*TQ*1L)gC(pi*9R*bG(e^*a&(j[)&=).,)2/)OD)e]*46*PQ*O!?@%^`%hj%~ *P!&'%@B%H )Up(|1*KZ*xd*Uv*~7+0*)WT(^p(]h(p-*J_(dU):S*_&(n)(f\\(nB)fR)Y(*/Y*_m*:?)2f)/Z*rX)C.*.@*Y!1j *mX(~_*(T)CF)1&*qT*2N(U~*bm(bh*r^(]f*_a*As*d1)AE*w.(ze(c,)tm)D')Fp(gt)^Y({g*^g(^Y(nd(g\\)=f)Ar*X!^C *5:*>v*aL*)6(_r*CH)E/)@2)\\.*E?*[v(lX*`X)ot)^Q)b\\*W|)7S(`3)TR*X<)/@(rv)3\\)C<*X`)5j(jS)Wm)Ck*^Q*P!IJ%PS%Z\\%~ *Q!&'%R *n;*qG)qh)F8)Jw(g6(U:)_:*T,);^)?-({<){J(Zj(|F)sI)QA*PA*(H)Sl)ph)?K*_()''(}Z*D,)F;(co)54)|F)XL*/>)L<)|M)-T)Zr),])9D)VK)D;(TN))X*X&(Vk*4D)o&*s9)7E)@v)6A)Sj*Xu)a7*0Q(]k*3d(eI*aM)6[(hD*F2*_**2;*nq*@o*_j)UU)h.)?A)q_)kZ)t\\*7t*Ww*m;(Y/)Dz)m]*T.*tK)8@*oH*r+*?i)84)r()-e)e\\(Uv)/F)>o)7Y)Ou)>:*Q!ST%uw%~ *R!&'%;=%[ ))o)mk*bW*S~*9d)E))>*(f5*FZ)ss*4&*5-)RH(U8*.a*3))q4)I5)PO)6*(Zl(Xf(n|)7q)Ot*Ye(eG)@1*.R).b)8+)9o*7!lm *0V))d)&,(`P)Aj)ya)z9*X()^t)mx)Yv)Si){X(Ts)p^).k*mR*JU*.b)yE*4C*eH(W!-R *8?(fl))&)U.*T0*(U*^^*3u))b(g=)pJ({P)A,*~n)hA)F]*Ev)Co)f=*T!\\? *`H)|f)_])a>)7.)s7(kx(U(*>a)E}(aj*E[*X.*nR)}e*R!\\]%{}~ *S!&'(*%\\inx *T!+4Nm *U)(X1)T=)x.*~E)6V)cH)7g(TY)tK*^V)<]*XZ*&()GC)*s*KJ(uS)<K(sm)d{)I6*o&*`5*XX(oC*/A*Tj(_9)8Z)7C(cb)G&)i**:o*cy(i=)r')^W)UF(^E(gS*XD(vs)Yc)Vg(zl**)(Vh*(-)Yk(z`*7c)WW(zg+&t)HV*Zx({N*/=)/m*.O*b?*Xp(tu):,)yW*YZ(ca)?q)x'*T)*r1*.^*mn*-u(k{*d])C>*0R(|h*aT)@q)).(X2)Ej([1(X>(o3)+=#2$*U!CD%KM%PSUVX%_a%df%kn%tw%} *V!&'%)-%3568%:=?%EG%IK%_ (Uz(TR(]e(TV),<(cT(T[(V,(Td+'J(z|(lW(Tn)y2(U,(b}(U4(tS)cY(c})Qp(mt*4h*{l)Q3)re+2\\(T|(V3+2U(U!IV (V'*9O(zk(ie(kV(VX(d!CSY[d *uP*X](c)(eR(c!5=M *X\\(c!ur (_!u{ (`!(GMYZfx{v *?`(a!>CBQT (^N*0<(V!OW]V|u (W&(Vr(W!V.] (XF(W!0`bDf (X!@I )>3(X!<? *V!`a%~ *W!&'%f (X!A9 (W!mx (X!XVskeq`] (Y3(X^(Y5(Xv(Y!oqsNcleZh (Z!(Y| (Y|(Z!\\?^].L<UX ([U(Zs([,(Z!x~ ([!CR|~ (\\!'8T (]+(\\!kjdl (]!,0 (Vq)RD(X!:G (YW+43)RM*'}(^:))E+1g*{m(^M(t:(b!au *O((bx(_^(t?(]z(V4(]{(VG*JL*K)(VI*5?*KW)xQ(zD*I:*1G(^!w} (_!0/ *W!gh%uy *X!QRW_eh%jlnoqrx%~ *Y!&')*-%03%79:<%EG%IK%WY]^`bdg%iln%qtwy%{ (_:(^!bnq *S!]cdgqrt *T!&'/326%8:<=@CDHLMRTWZ]`cdfhkpsuvx%z} *U&*T|*U!(*%,02569:=>@A (cx(d0*q!lqp *r'*qy*r!328?JU]bhj~ *s!*4M *a!vz|x *b!2':9<@ *Y|*Z!&'*.%03%57;<>%@BDJL%RT%VY[\\^%ac%jnor%vy{~ *[!'()+%-01348:;A%EH%MO%Z\\]_`cf *b!>6UKDVJMYlhb]aqu *c!+1OKP^\\fps (`'(th(a!cmn (b&(hQ(b!8>X (e<)be)s[),1(_!ho +'G(dl),>)lW))7(o/(p!3+ (rV(s!;DP (n!ehfoujk (o?(n!w~ (o!LhNi_^KPYV (p!7. (oo(p!<Y1> (ov(p!*_bdc\\B~y (q)(p!ng *[!hjl%prsuw%y{}~ *\\!&'%*-%/1%79;%FIJLMO%UW%ik%~ *]!&' (q!<>. (pw(q!1OJuQ (r!=DYarX *{}+2^)4t*9!@DFVQoKUX^`r *:!&, *9w*:!68Q *9!_~u *:!9:/ *9!p{hqf *:!2< *9k*:!OweR}uJb@FziA *;!&/ *:t*;!)* *:!NC *;!1fpq *:v*<N*;!QIF *<W*;!sDd\\XtU,uBOH{z *]!()%~ *^!&'%. *;!}0~ *<!(&)*l4op\\fOXA8re9t7TZdvx} *=!dH; (q8*=!{n@`9 *>!&B *=!ti7Brf[\\M( *<|*>0*=!SD *>!f[dc} *?!89+:) *>!FPs *?!'=? *>!;w *?!r~ *@!(> *?n*@+*?!{pk *@8*?!RjeH *@!=;d )kc*A7*@H*A8*@w*A9*^!/0%OTjv| *_!.1%35%8;=%@C%FHIK%MPQTWZ%^`cghkqrtx} *`!')*,%.2%467?@DFKMP *A!U: *@!WT *A!XGgc]y )s0*A!Bqz *B!JN-5 *Ax*B!TB+_]Vyg *C!)LtRvc *D0),!;E (t!bg *2m(t{(u'(t~(bw(}!'*19 )5h)6!-b~ )7!4DAX )83)7`)8!J\\T )9e):U)9!)2Fl )8~)9!dB )8z)9!ft ):!QW?^ )9|):!=- );X)9!~v );!KG ):!jz );&):k);!,'d )<1);s)<C*`!QT[%]_%dh%loqruwx{}~ *a!'(%+-3%589;%@CEFH%KN%RU%[]`c%fhik%oqsuwy{}~ *b!&*+-%/138=BCEF )<!'deFgm} )=!+86]y )>)),H).])ko),N(cn(e!NZFEXosc (f!OV%XZG (e~(f![]'6 (g!-? (f!{uh (g!EF/ (f!zj (g!H{Xm_}RQ~ (h&(fv(gN(h'(g!fjw (h!+,. (g!TUO (h/(gz(h!0m9rOfEtuacy| (i`(j!/U (i!Bf:N8I5 *b!HILNOQ%SXZ%\\^%`d%fi%koprtv%y{%} *c!&'%),%.02%EG%JL%NQ%[]_%eg%oq (i!0On%p,)U (j!+r (i|(j!QY( (iz(j?(iw(j!v1 (it(k&(j!]^49 (k!1> (ji(kf(jq(k!23 (jt(k-(j!}d (k!6,9: (j!lm (k!/<+ *^~(k!eOSHkjEGnt (l!F'E (ks(l!;PGJ:BtR_Yijs (m!(Dilrv (n!1'5;@FEX ))!Wa\\Yy )*!*+ *c!rtu~ *d!'(%*,-/034:%<?AGN%PT%XZ\\^bcg%mp%ux%} *e!&'+%.1%46%ACFKM%VX%` )*!&3CJMP (~!8&9<B4DE=FHaNiXW]Omcp~ )&7(~w)&!8UVzy )'()&!wqYn )'!R8.7fUiWeEDcn| )(!:> *U~)(!Xf )-!W[fkmpy} ).!'38@G *J@)-E)d!ruy|} )e!/-:9>T[U^`cm_of *e!ab%~ *f!&'%g )eg)f!*&4 )ev)f!10(5L8?KDc`js )g!&)8 *8;(tK*yn(t!J( *{!8<%AILRUY\\_befh%j )*o)+')*z)+!,;6OKTI *XS)+!hgq~ ),'*73).!OTaZ )/5).y)/6).!lo )/!078 ).!ux )/!*KgXMA?[]<qS )0!QRTS )/t*f!hi%~ *g!&'%<>%VX%p )0!CVos )1-)0!v\\ket )1!l;1]XFZ4 )2!GM<J )1t)2!'5Rq )3!Czbu )4!,Ij ).h*sP*q!8:@BDEKMRSUWY%\\^ad%fhi (Tr)c])51)R!<[cQ )S!Q3>B: )R!op{} )S!4W~ )T))S[)T!LMF, )S`)T!5+O@C )S_)T!(DS *g!qr%vx%~ *h!&'%79%y )U5)T!|a )U!?D )T!\\Ync )U!'I*1 )To)U!KNP/ )V4)Uk)V!AC )UZ)V!67 )U!X\\x_ )Wd)V!jh )W!(X )Vb)W!*[0' )V|)W`)VN)WV)VQ)Wu)X!_?\\ )YJ)X!PwDE )W!|o )X5)Y!wI0x )Zl)Y!z=?USOoLg'Z7 )[!H,- )Z!cT8nu )[!1Z )Z!iHh )[!osr^Xb` )\\^*h!z{%~ *i!&'%TV%~ *j!&') )\\!V4FCOn{km| )]!NWOmi )^!*9 ({!7;LJ\\o )l,*~h);:(|!BL *L\\(|N*[<*Qv*_!Gdfv *`&*_!uzw *`+*_y*`!=<C^IENYmneg| *a!01/G7A: )BP*a!S\\agbj )-!4;:< (}@(gV(}!U^ ({((}!hk *1K),!gfj *9;),y+'S(}s(u!NPZvwp *j!*+%LN%~ *k!&'%.0%2 (ud(v>(u!xkq (v!F& (u|(v!K2yzQ|WLm (w'(v}(w!MO,>.[ (x)(w!epW} (x7*4p(x!l]9< (y!'T (xt(y!;= (xz(y!ILZ?OAEr (z!'&BGP (|!sz (z!ju ({*(z!acr *~!?ABDIGJKORTZ\\]`be%gijlmoq *.!9;=?BC *k!34%:<%~ *l!&'%: *.!GJXZ%\\cefjnquz{ */!),/023N7;<?B%DHILMPRSXZ]\\`b%hk%np%tv )*i)l|)(|)l;*at)g!HKh\\Y )h0)g|)h2)g!qmz )h!*)F: *x\\)h!kJH? )gt)h!Sp )i!2c.-0864 *l!;<%IK%vx%~ *m!&'%7DIKz *n!)-.4@Uvz )h!|{ )i!Id_]a )j&)iu)j!-K=/06:MWX?V )k()ji*v!|}~ )D!18C-N )E1)D!lOX} )E3)DZ)E!4*9 )D!p\\a )E|)F<)Ed)F=)E!u< )F?)E!eAf?i )F3)E!ODn )FA)EM)F!0ef )G!:;(< )Fw)G!>] )FP)G!/@ )Ft)GA)F!sq}|\\ )H6)G!iNQmE )HC)J=)H})I!GH )Hz*o!(4>DILV[aouvx%~ *p!&(%s )IL)Hq)I!3) )J&)Hd)I8)J@)Ia)J/)Ij)J!,S:OgG )I\\)KB)J!VW )KD)J!X52Hjv )K1)J!z| )K!J'7@U )Jd)KV)J\\)Ku)LL)Kc)L!45 )M))Kh)L!a[ )Md)L!mxR )M!R= )L!ZEu )M!@UTm[o )f!Je )P!:;@=KLFSTZc *^!UW[%]_`bacdfhklnqu *p!tu%~ *q!&'%6;NVbgjmor%xz%|~ *r!&-%0479@DEG%IL%PR%TVY[\\ac%gin%z} *s!&' *^!wxy *_!)+ *\\j)5!'37;>=A@H *7`)k!EJUegi )>/)@!789Sb )DW)@!L^I )^`)C5)@!f}z )A&)@~*2<)A!OD1?FQGgt| )B!>4Urs} )C'*X!236;=@EFHIGMUY *N!AD%FH%K )d!3d )c{)d!+4CDIPRTW )7r)8C)9h*s!)+.%02378:%CE%LNOQRTUWX\\_`eghmnpqs%|~ *t!&'%+/%24%689<>%ACFGIN%PT%VXY[%_acd );E)=,*2:)Q!JS]UYegfmux%z )R!(0+19 )>!0Pf )c!kptN *DV(`0*3!|yp *4@)CH*4!A5/18;k%n_FH]Q[ )CN*4!aouxq *5!89 *4v*5')CS*5=*Ue*5!aIWC]sw~ *6!F+,C2;NO?9 (q~(xw*6!ZTc )Ym*6!u| *7E)Cd*7!C4 *t!ef%moprsuw%{~ *u!&'(*%<?@BCEGHJNOQ%SU%]`b%fh%oq%uwy%{~ *v!'()+%/ *7:*6x)O!6IKUXk *y!XYZ\\`a )Pl),})P{*Nm)?2+3=)?!5^hfenptx )^![wqx )_!=B9-3jL )`!9<?XZ )a!C,8 )`n)aB)`s)a!HJh )b!*, )a!xp )b!WK^p )c!;F )^G)`A)a6)b0)5!ZY_de )w!ejps )x!,- )w})x!+3(1@8KV[kx )y+).!\\[ *v!01346%<>@BCEG%wz *w!'(%+-0%G )/n)0!63@ )/s)0!2< )1+)2!-4 )3!+wk )4!@F{ *3!]\\ )SA)TK)WF)t!+-5>LMF )?M)t!bQRn%pTqZaX^ )u!*I23 )t[)u,)t|)u!(Fwovcx} )v!&5<(W\\Lou )w/)vw)w!=NH^ +4.+2!>@A )q!1DM9GHZbYmfux )r!78.*AO *w!HI%~ *x!&'%N )r!ILftdgsx )s!-.>CK )l!7=KHEXov )m'*0!@IG *Oi*0!P\\Yaif )p!f~ *Ii*m!89:>=?@BCGJHM%OVW^]`_bcegi%moprw{%~ *n!&'(*%,/%13258%:<>?ABD *x!OP%Tknruy *y!*/%TVW[]^b%dg%mp%~ *z!&'%5 *n!CEHIM%OQSVWY]\\`acdg%il%pruw%y| *o!+,*-2357%9=?@C6E%GJMOPS%UW%Z\\_`^bce%mpr%t; )s!uz *sf)y!Me[c~ )'A)y!{z )z!=3 *z!67%:<=?%[]%~ *{!&'(+%79;HMNPSWX^ )z!XVp +1m*{z){6)oz)p!',2= )k!46 )l)+/!prx%| +0!)(-/.01589;=%@BCEHLNQ%SUZ]%chdj )m!68:DAPGWX\\hUTgfzq )n!.31/62N<GJ[KPWbUpc`d *{!aco%y{|~ *|!&'%u )nf)o.)n!mk )o2)n!x{ )o!1'50 )n~)o!?PFNH]a *1Y)|S){!>?FLN[lfrnsy *J!BGP[]` *K!'K<ANgShjv *L!F( *Km*L**Ku*L!ME?G6`Wbm *M!9N )m/*4i)p!KM )sj*2!HJLRVX[%]_^gAky| *3!*/FN *MV*x!X`c *|!vw%~ *}!&'%| *x!ilmotz{~ *y!&(),- *D!AH`bsnpo *E!C(&G8B>E.DQ_PiKULJdjO *F!+34/5 *Ek*FU*Ey*F6*E!zsl *F!EI:JLOKe}`gp\\ *G!'1 *F!vsky *G!(k *Fd*G!fgdIY5Wt<LeMBN| *H!?8b *}!}~ *~!&'%5<MSWX^_cps%y|%~ +&!&*,.%0457%;>%ACE%HJ%OQS%VX%[]_a%ikm%su%w *HV*G!qn *H!=' *Gl*H!;u<EC[cMaPZkzp~ *I!MJ5ARXps */w*0!*,- *80)|!gjupq )}))|w)}?)||)}![L>-BE498GR2lnY )~0)}!`qt )~!)6 )}v)~!-,KabsgXc@eW]fo *&3)~|*&!.?<GHLn`^qxm +&!xz%~ +'!&(%*,%68%:<%FHIK%RU%X^b%dfhjkm%~ +(!&'%: *'!(3/AJI *7!wz{}e *I{*8!ABCMOHKX[ST^dikoz *9!&/ *J!\\cf *K!]d *M1*1!,.6>?A *(,)>D*(!AMLNRblmqw|}xu *)!.? *95)B?*1!N]dtpux} *2)*)O**u*+!KS *-:*.5+1!VR *Xs*Y!+;8X *X!gm *U!RT *c!w}{| *d8+(!;<%~ +)!&'%A *d!65D=CQRFHM`Ydaevw~ *e!()*0/5 *U`+0u*Y_*Z!9S *[!N^ *Y!\\fcak}~ *Z!(, *Y!uv *Z)*Ym*Z!:EF1GI2WKbkmz|q} *[!/5.*2&>67FG?ekqdiz *\\!+0,8: *V!*4<7JF )?=*N!PXTV +)!BC%~ +*!&'%H *N!_ei *O_*R<*u>*t!-73JELSRnqt *u)+3!loq%vx +2!CPR *s!VYZko )sM*s}*g!Ww *h8*iU*j(*k/*jM*l!Jw ++!369%< )zB++!?BD%FHINOR%WY%]_abd%kn%qx%{~ +,&+*!IJ%~ ++!&'%/12478=>@CGJ%MQ^`cmr%v|} +,!,-56;<'%+.%02%478:= *u!gp|} *v!&A=5DF *~!{z +&(+0O+&!'+-2163<=B +'!][_a`ei *yo*z!;\\ *{!*) +&!PRW`\\l^jy +'!'+7; +1![\\ *-.+0!y~ +1!&)0 *k;+1!;=y%{~} +2!'.,*/4gqt~| +3!)*0 +,!>?%~ +-!&'%~ +.!&'%~ +/!&'%ntw~ +0!'+237DGI%KMPTV%Y\\efik%twxz%} +1!'(*%/2%:<>%CE%QS%UWXZ]%ac%fh%jnpqs%uwx| +2!&()+-0%35%=?BD%OQTVWY%[]_%dfh%prsu%{} +3!&(+%/1%;>%jmny%~ +4!&'%+/%14%8 .*f.+!Zv .,!oy .-!;<%>@BCGN%PRSV%X -R!XY%~ -S!&'%N"));
    var gbk = src(gbk_us);
    return gbk;
  }();
  var gbk_build = GBK$1;
  return gbk_build;
});

/***/ }),

/***/ 16:
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/setPrototypeOf.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _setPrototypeOf(o, p) {
  module.exports = _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  }, module.exports.__esModule = true, module.exports["default"] = module.exports;
  return _setPrototypeOf(o, p);
}
module.exports = _setPrototypeOf, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ 17:
/*!*************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/isNativeReflectConstruct.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _isNativeReflectConstruct() {
  try {
    var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
  } catch (t) {}
  return (module.exports = _isNativeReflectConstruct = function _isNativeReflectConstruct() {
    return !!t;
  }, module.exports.__esModule = true, module.exports["default"] = module.exports)();
}
module.exports = _isNativeReflectConstruct, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ 18:
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/toConsumableArray.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var arrayWithoutHoles = __webpack_require__(/*! ./arrayWithoutHoles.js */ 19);
var iterableToArray = __webpack_require__(/*! ./iterableToArray.js */ 20);
var unsupportedIterableToArray = __webpack_require__(/*! ./unsupportedIterableToArray.js */ 8);
var nonIterableSpread = __webpack_require__(/*! ./nonIterableSpread.js */ 21);
function _toConsumableArray(arr) {
  return arrayWithoutHoles(arr) || iterableToArray(arr) || unsupportedIterableToArray(arr) || nonIterableSpread();
}
module.exports = _toConsumableArray, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ 19:
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/arrayWithoutHoles.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var arrayLikeToArray = __webpack_require__(/*! ./arrayLikeToArray.js */ 9);
function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) return arrayLikeToArray(arr);
}
module.exports = _arrayWithoutHoles, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ 2:
/*!************************************************************!*\
  !*** ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(wx, global) {

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ 4);
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createApp = createApp;
exports.createComponent = createComponent;
exports.createPage = createPage;
exports.createPlugin = createPlugin;
exports.createSubpackageApp = createSubpackageApp;
exports.default = void 0;
var _slicedToArray2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ 5));
var _defineProperty2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/defineProperty */ 11));
var _construct2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/construct */ 15));
var _toConsumableArray2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/toConsumableArray */ 18));
var _typeof2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/typeof */ 13));
var _uniI18n = __webpack_require__(/*! @dcloudio/uni-i18n */ 22);
var _vue = _interopRequireDefault(__webpack_require__(/*! vue */ 25));
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0, _defineProperty2.default)(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
var realAtob;
var b64 = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';
var b64re = /^(?:[A-Za-z\d+/]{4})*?(?:[A-Za-z\d+/]{2}(?:==)?|[A-Za-z\d+/]{3}=?)?$/;
if (typeof atob !== 'function') {
  realAtob = function realAtob(str) {
    str = String(str).replace(/[\t\n\f\r ]+/g, '');
    if (!b64re.test(str)) {
      throw new Error("Failed to execute 'atob' on 'Window': The string to be decoded is not correctly encoded.");
    }

    // Adding the padding if missing, for semplicity
    str += '=='.slice(2 - (str.length & 3));
    var bitmap;
    var result = '';
    var r1;
    var r2;
    var i = 0;
    for (; i < str.length;) {
      bitmap = b64.indexOf(str.charAt(i++)) << 18 | b64.indexOf(str.charAt(i++)) << 12 | (r1 = b64.indexOf(str.charAt(i++))) << 6 | (r2 = b64.indexOf(str.charAt(i++)));
      result += r1 === 64 ? String.fromCharCode(bitmap >> 16 & 255) : r2 === 64 ? String.fromCharCode(bitmap >> 16 & 255, bitmap >> 8 & 255) : String.fromCharCode(bitmap >> 16 & 255, bitmap >> 8 & 255, bitmap & 255);
    }
    return result;
  };
} else {
  // 注意atob只能在全局对象上调用，例如：`const Base64 = {atob};Base64.atob('xxxx')`是错误的用法
  realAtob = atob;
}
function b64DecodeUnicode(str) {
  return decodeURIComponent(realAtob(str).split('').map(function (c) {
    return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
  }).join(''));
}
function getCurrentUserInfo() {
  var token = wx.getStorageSync('uni_id_token') || '';
  var tokenArr = token.split('.');
  if (!token || tokenArr.length !== 3) {
    return {
      uid: null,
      role: [],
      permission: [],
      tokenExpired: 0
    };
  }
  var userInfo;
  try {
    userInfo = JSON.parse(b64DecodeUnicode(tokenArr[1]));
  } catch (error) {
    throw new Error('获取当前用户信息出错，详细错误信息为：' + error.message);
  }
  userInfo.tokenExpired = userInfo.exp * 1000;
  delete userInfo.exp;
  delete userInfo.iat;
  return userInfo;
}
function uniIdMixin(Vue) {
  Vue.prototype.uniIDHasRole = function (roleId) {
    var _getCurrentUserInfo = getCurrentUserInfo(),
      role = _getCurrentUserInfo.role;
    return role.indexOf(roleId) > -1;
  };
  Vue.prototype.uniIDHasPermission = function (permissionId) {
    var _getCurrentUserInfo2 = getCurrentUserInfo(),
      permission = _getCurrentUserInfo2.permission;
    return this.uniIDHasRole('admin') || permission.indexOf(permissionId) > -1;
  };
  Vue.prototype.uniIDTokenValid = function () {
    var _getCurrentUserInfo3 = getCurrentUserInfo(),
      tokenExpired = _getCurrentUserInfo3.tokenExpired;
    return tokenExpired > Date.now();
  };
}
var _toString = Object.prototype.toString;
var hasOwnProperty = Object.prototype.hasOwnProperty;
function isFn(fn) {
  return typeof fn === 'function';
}
function isStr(str) {
  return typeof str === 'string';
}
function isObject(obj) {
  return obj !== null && (0, _typeof2.default)(obj) === 'object';
}
function isPlainObject(obj) {
  return _toString.call(obj) === '[object Object]';
}
function hasOwn(obj, key) {
  return hasOwnProperty.call(obj, key);
}
function noop() {}

/**
 * Create a cached version of a pure function.
 */
function cached(fn) {
  var cache = Object.create(null);
  return function cachedFn(str) {
    var hit = cache[str];
    return hit || (cache[str] = fn(str));
  };
}

/**
 * Camelize a hyphen-delimited string.
 */
var camelizeRE = /-(\w)/g;
var camelize = cached(function (str) {
  return str.replace(camelizeRE, function (_, c) {
    return c ? c.toUpperCase() : '';
  });
});
function sortObject(obj) {
  var sortObj = {};
  if (isPlainObject(obj)) {
    Object.keys(obj).sort().forEach(function (key) {
      sortObj[key] = obj[key];
    });
  }
  return !Object.keys(sortObj) ? obj : sortObj;
}
var HOOKS = ['invoke', 'success', 'fail', 'complete', 'returnValue'];
var globalInterceptors = {};
var scopedInterceptors = {};
function mergeHook(parentVal, childVal) {
  var res = childVal ? parentVal ? parentVal.concat(childVal) : Array.isArray(childVal) ? childVal : [childVal] : parentVal;
  return res ? dedupeHooks(res) : res;
}
function dedupeHooks(hooks) {
  var res = [];
  for (var i = 0; i < hooks.length; i++) {
    if (res.indexOf(hooks[i]) === -1) {
      res.push(hooks[i]);
    }
  }
  return res;
}
function removeHook(hooks, hook) {
  var index = hooks.indexOf(hook);
  if (index !== -1) {
    hooks.splice(index, 1);
  }
}
function mergeInterceptorHook(interceptor, option) {
  Object.keys(option).forEach(function (hook) {
    if (HOOKS.indexOf(hook) !== -1 && isFn(option[hook])) {
      interceptor[hook] = mergeHook(interceptor[hook], option[hook]);
    }
  });
}
function removeInterceptorHook(interceptor, option) {
  if (!interceptor || !option) {
    return;
  }
  Object.keys(option).forEach(function (hook) {
    if (HOOKS.indexOf(hook) !== -1 && isFn(option[hook])) {
      removeHook(interceptor[hook], option[hook]);
    }
  });
}
function addInterceptor(method, option) {
  if (typeof method === 'string' && isPlainObject(option)) {
    mergeInterceptorHook(scopedInterceptors[method] || (scopedInterceptors[method] = {}), option);
  } else if (isPlainObject(method)) {
    mergeInterceptorHook(globalInterceptors, method);
  }
}
function removeInterceptor(method, option) {
  if (typeof method === 'string') {
    if (isPlainObject(option)) {
      removeInterceptorHook(scopedInterceptors[method], option);
    } else {
      delete scopedInterceptors[method];
    }
  } else if (isPlainObject(method)) {
    removeInterceptorHook(globalInterceptors, method);
  }
}
function wrapperHook(hook, params) {
  return function (data) {
    return hook(data, params) || data;
  };
}
function isPromise(obj) {
  return !!obj && ((0, _typeof2.default)(obj) === 'object' || typeof obj === 'function') && typeof obj.then === 'function';
}
function queue(hooks, data, params) {
  var promise = false;
  for (var i = 0; i < hooks.length; i++) {
    var hook = hooks[i];
    if (promise) {
      promise = Promise.resolve(wrapperHook(hook, params));
    } else {
      var res = hook(data, params);
      if (isPromise(res)) {
        promise = Promise.resolve(res);
      }
      if (res === false) {
        return {
          then: function then() {}
        };
      }
    }
  }
  return promise || {
    then: function then(callback) {
      return callback(data);
    }
  };
}
function wrapperOptions(interceptor) {
  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  ['success', 'fail', 'complete'].forEach(function (name) {
    if (Array.isArray(interceptor[name])) {
      var oldCallback = options[name];
      options[name] = function callbackInterceptor(res) {
        queue(interceptor[name], res, options).then(function (res) {
          /* eslint-disable no-mixed-operators */
          return isFn(oldCallback) && oldCallback(res) || res;
        });
      };
    }
  });
  return options;
}
function wrapperReturnValue(method, returnValue) {
  var returnValueHooks = [];
  if (Array.isArray(globalInterceptors.returnValue)) {
    returnValueHooks.push.apply(returnValueHooks, (0, _toConsumableArray2.default)(globalInterceptors.returnValue));
  }
  var interceptor = scopedInterceptors[method];
  if (interceptor && Array.isArray(interceptor.returnValue)) {
    returnValueHooks.push.apply(returnValueHooks, (0, _toConsumableArray2.default)(interceptor.returnValue));
  }
  returnValueHooks.forEach(function (hook) {
    returnValue = hook(returnValue) || returnValue;
  });
  return returnValue;
}
function getApiInterceptorHooks(method) {
  var interceptor = Object.create(null);
  Object.keys(globalInterceptors).forEach(function (hook) {
    if (hook !== 'returnValue') {
      interceptor[hook] = globalInterceptors[hook].slice();
    }
  });
  var scopedInterceptor = scopedInterceptors[method];
  if (scopedInterceptor) {
    Object.keys(scopedInterceptor).forEach(function (hook) {
      if (hook !== 'returnValue') {
        interceptor[hook] = (interceptor[hook] || []).concat(scopedInterceptor[hook]);
      }
    });
  }
  return interceptor;
}
function invokeApi(method, api, options) {
  for (var _len = arguments.length, params = new Array(_len > 3 ? _len - 3 : 0), _key = 3; _key < _len; _key++) {
    params[_key - 3] = arguments[_key];
  }
  var interceptor = getApiInterceptorHooks(method);
  if (interceptor && Object.keys(interceptor).length) {
    if (Array.isArray(interceptor.invoke)) {
      var res = queue(interceptor.invoke, options);
      return res.then(function (options) {
        // 重新访问 getApiInterceptorHooks, 允许 invoke 中再次调用 addInterceptor,removeInterceptor
        return api.apply(void 0, [wrapperOptions(getApiInterceptorHooks(method), options)].concat(params));
      });
    } else {
      return api.apply(void 0, [wrapperOptions(interceptor, options)].concat(params));
    }
  }
  return api.apply(void 0, [options].concat(params));
}
var promiseInterceptor = {
  returnValue: function returnValue(res) {
    if (!isPromise(res)) {
      return res;
    }
    return new Promise(function (resolve, reject) {
      res.then(function (res) {
        if (!res) {
          resolve(res);
          return;
        }
        if (res[0]) {
          reject(res[0]);
        } else {
          resolve(res[1]);
        }
      });
    });
  }
};
var SYNC_API_RE = /^\$|__f__|Window$|WindowStyle$|sendHostEvent|sendNativeEvent|restoreGlobal|requireGlobal|getCurrentSubNVue|getMenuButtonBoundingClientRect|^report|interceptors|Interceptor$|getSubNVueById|requireNativePlugin|rpx2px|upx2px|hideKeyboard|canIUse|^create|Sync$|Manager$|base64ToArrayBuffer|arrayBufferToBase64|getLocale|setLocale|invokePushCallback|getWindowInfo|getDeviceInfo|getAppBaseInfo|getSystemSetting|getAppAuthorizeSetting|initUTS|requireUTS|registerUTS|getFacialRecognitionMetaInfo/;
var CONTEXT_API_RE = /^create|Manager$/;

// Context例外情况
var CONTEXT_API_RE_EXC = ['createBLEConnection'];

// 同步例外情况
var ASYNC_API = ['createBLEConnection', 'createPushMessage'];
var CALLBACK_API_RE = /^on|^off/;
function isContextApi(name) {
  return CONTEXT_API_RE.test(name) && CONTEXT_API_RE_EXC.indexOf(name) === -1;
}
function isSyncApi(name) {
  return SYNC_API_RE.test(name) && ASYNC_API.indexOf(name) === -1;
}
function isCallbackApi(name) {
  return CALLBACK_API_RE.test(name) && name !== 'onPush';
}
function handlePromise(promise) {
  return promise.then(function (data) {
    return [null, data];
  }).catch(function (err) {
    return [err];
  });
}
function shouldPromise(name) {
  if (isContextApi(name) || isSyncApi(name) || isCallbackApi(name)) {
    return false;
  }
  return true;
}

/* eslint-disable no-extend-native */
if (!Promise.prototype.finally) {
  Promise.prototype.finally = function (callback) {
    var promise = this.constructor;
    return this.then(function (value) {
      return promise.resolve(callback()).then(function () {
        return value;
      });
    }, function (reason) {
      return promise.resolve(callback()).then(function () {
        throw reason;
      });
    });
  };
}
function promisify(name, api) {
  if (!shouldPromise(name) || !isFn(api)) {
    return api;
  }
  return function promiseApi() {
    var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    for (var _len2 = arguments.length, params = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
      params[_key2 - 1] = arguments[_key2];
    }
    if (isFn(options.success) || isFn(options.fail) || isFn(options.complete)) {
      return wrapperReturnValue(name, invokeApi.apply(void 0, [name, api, Object.assign({}, options)].concat(params)));
    }
    return wrapperReturnValue(name, handlePromise(new Promise(function (resolve, reject) {
      invokeApi.apply(void 0, [name, api, Object.assign({}, options, {
        success: resolve,
        fail: reject
      })].concat(params));
    })));
  };
}
var EPS = 1e-4;
var BASE_DEVICE_WIDTH = 750;
var isIOS = false;
var deviceWidth = 0;
var deviceDPR = 0;
function checkDeviceWidth() {
  var windowWidth, pixelRatio, platform;
  {
    var windowInfo = typeof wx.getWindowInfo === 'function' && wx.getWindowInfo() ? wx.getWindowInfo() : wx.getSystemInfoSync();
    var deviceInfo = typeof wx.getDeviceInfo === 'function' && wx.getDeviceInfo() ? wx.getDeviceInfo() : wx.getSystemInfoSync();
    windowWidth = windowInfo.windowWidth;
    pixelRatio = windowInfo.pixelRatio;
    platform = deviceInfo.platform;
  }
  deviceWidth = windowWidth;
  deviceDPR = pixelRatio;
  isIOS = platform === 'ios';
}
function upx2px(number, newDeviceWidth) {
  if (deviceWidth === 0) {
    checkDeviceWidth();
  }
  number = Number(number);
  if (number === 0) {
    return 0;
  }
  var result = number / BASE_DEVICE_WIDTH * (newDeviceWidth || deviceWidth);
  if (result < 0) {
    result = -result;
  }
  result = Math.floor(result + EPS);
  if (result === 0) {
    if (deviceDPR === 1 || !isIOS) {
      result = 1;
    } else {
      result = 0.5;
    }
  }
  return number < 0 ? -result : result;
}
var LOCALE_ZH_HANS = 'zh-Hans';
var LOCALE_ZH_HANT = 'zh-Hant';
var LOCALE_EN = 'en';
var LOCALE_FR = 'fr';
var LOCALE_ES = 'es';
var messages = {};
function getLocaleLanguage() {
  var localeLanguage = '';
  {
    var appBaseInfo = typeof wx.getAppBaseInfo === 'function' && wx.getAppBaseInfo() ? wx.getAppBaseInfo() : wx.getSystemInfoSync();
    var language = appBaseInfo && appBaseInfo.language ? appBaseInfo.language : LOCALE_EN;
    localeLanguage = normalizeLocale(language) || LOCALE_EN;
  }
  return localeLanguage;
}
var locale;
{
  locale = getLocaleLanguage();
}
function initI18nMessages() {
  if (!isEnableLocale()) {
    return;
  }
  var localeKeys = Object.keys(__uniConfig.locales);
  if (localeKeys.length) {
    localeKeys.forEach(function (locale) {
      var curMessages = messages[locale];
      var userMessages = __uniConfig.locales[locale];
      if (curMessages) {
        Object.assign(curMessages, userMessages);
      } else {
        messages[locale] = userMessages;
      }
    });
  }
}
initI18nMessages();
var i18n = (0, _uniI18n.initVueI18n)(locale, {});
var t = i18n.t;
var i18nMixin = i18n.mixin = {
  beforeCreate: function beforeCreate() {
    var _this = this;
    var unwatch = i18n.i18n.watchLocale(function () {
      _this.$forceUpdate();
    });
    this.$once('hook:beforeDestroy', function () {
      unwatch();
    });
  },
  methods: {
    $$t: function $$t(key, values) {
      return t(key, values);
    }
  }
};
var setLocale = i18n.setLocale;
var getLocale = i18n.getLocale;
function initAppLocale(Vue, appVm, locale) {
  var state = Vue.observable({
    locale: locale || i18n.getLocale()
  });
  var localeWatchers = [];
  appVm.$watchLocale = function (fn) {
    localeWatchers.push(fn);
  };
  Object.defineProperty(appVm, '$locale', {
    get: function get() {
      return state.locale;
    },
    set: function set(v) {
      state.locale = v;
      localeWatchers.forEach(function (watch) {
        return watch(v);
      });
    }
  });
}
function isEnableLocale() {
  return typeof __uniConfig !== 'undefined' && __uniConfig.locales && !!Object.keys(__uniConfig.locales).length;
}
function include(str, parts) {
  return !!parts.find(function (part) {
    return str.indexOf(part) !== -1;
  });
}
function startsWith(str, parts) {
  return parts.find(function (part) {
    return str.indexOf(part) === 0;
  });
}
function normalizeLocale(locale, messages) {
  if (!locale) {
    return;
  }
  locale = locale.trim().replace(/_/g, '-');
  if (messages && messages[locale]) {
    return locale;
  }
  locale = locale.toLowerCase();
  if (locale === 'chinese') {
    // 支付宝
    return LOCALE_ZH_HANS;
  }
  if (locale.indexOf('zh') === 0) {
    if (locale.indexOf('-hans') > -1) {
      return LOCALE_ZH_HANS;
    }
    if (locale.indexOf('-hant') > -1) {
      return LOCALE_ZH_HANT;
    }
    if (include(locale, ['-tw', '-hk', '-mo', '-cht'])) {
      return LOCALE_ZH_HANT;
    }
    return LOCALE_ZH_HANS;
  }
  var lang = startsWith(locale, [LOCALE_EN, LOCALE_FR, LOCALE_ES]);
  if (lang) {
    return lang;
  }
}
// export function initI18n() {
//   const localeKeys = Object.keys(__uniConfig.locales || {})
//   if (localeKeys.length) {
//     localeKeys.forEach((locale) =>
//       i18n.add(locale, __uniConfig.locales[locale])
//     )
//   }
// }

function getLocale$1() {
  // 优先使用 $locale
  if (isFn(getApp)) {
    var app = getApp({
      allowDefault: true
    });
    if (app && app.$vm) {
      return app.$vm.$locale;
    }
  }
  return getLocaleLanguage();
}
function setLocale$1(locale) {
  var app = isFn(getApp) ? getApp() : false;
  if (!app) {
    return false;
  }
  var oldLocale = app.$vm.$locale;
  if (oldLocale !== locale) {
    app.$vm.$locale = locale;
    onLocaleChangeCallbacks.forEach(function (fn) {
      return fn({
        locale: locale
      });
    });
    return true;
  }
  return false;
}
var onLocaleChangeCallbacks = [];
function onLocaleChange(fn) {
  if (onLocaleChangeCallbacks.indexOf(fn) === -1) {
    onLocaleChangeCallbacks.push(fn);
  }
}
if (typeof global !== 'undefined') {
  global.getLocale = getLocale$1;
}
var interceptors = {
  promiseInterceptor: promiseInterceptor
};
var baseApi = /*#__PURE__*/Object.freeze({
  __proto__: null,
  upx2px: upx2px,
  rpx2px: upx2px,
  getLocale: getLocale$1,
  setLocale: setLocale$1,
  onLocaleChange: onLocaleChange,
  addInterceptor: addInterceptor,
  removeInterceptor: removeInterceptor,
  interceptors: interceptors
});
function findExistsPageIndex(url) {
  var pages = getCurrentPages();
  var len = pages.length;
  while (len--) {
    var page = pages[len];
    if (page.$page && page.$page.fullPath === url) {
      return len;
    }
  }
  return -1;
}
var redirectTo = {
  name: function name(fromArgs) {
    if (fromArgs.exists === 'back' && fromArgs.delta) {
      return 'navigateBack';
    }
    return 'redirectTo';
  },
  args: function args(fromArgs) {
    if (fromArgs.exists === 'back' && fromArgs.url) {
      var existsPageIndex = findExistsPageIndex(fromArgs.url);
      if (existsPageIndex !== -1) {
        var delta = getCurrentPages().length - 1 - existsPageIndex;
        if (delta > 0) {
          fromArgs.delta = delta;
        }
      }
    }
  }
};
var previewImage = {
  args: function args(fromArgs) {
    var currentIndex = parseInt(fromArgs.current);
    if (isNaN(currentIndex)) {
      return;
    }
    var urls = fromArgs.urls;
    if (!Array.isArray(urls)) {
      return;
    }
    var len = urls.length;
    if (!len) {
      return;
    }
    if (currentIndex < 0) {
      currentIndex = 0;
    } else if (currentIndex >= len) {
      currentIndex = len - 1;
    }
    if (currentIndex > 0) {
      fromArgs.current = urls[currentIndex];
      fromArgs.urls = urls.filter(function (item, index) {
        return index < currentIndex ? item !== urls[currentIndex] : true;
      });
    } else {
      fromArgs.current = urls[0];
    }
    return {
      indicator: false,
      loop: false
    };
  }
};
var UUID_KEY = '__DC_STAT_UUID';
var deviceId;
function useDeviceId(result) {
  deviceId = deviceId || wx.getStorageSync(UUID_KEY);
  if (!deviceId) {
    deviceId = Date.now() + '' + Math.floor(Math.random() * 1e7);
    wx.setStorage({
      key: UUID_KEY,
      data: deviceId
    });
  }
  result.deviceId = deviceId;
}
function addSafeAreaInsets(result) {
  if (result.safeArea) {
    var safeArea = result.safeArea;
    result.safeAreaInsets = {
      top: safeArea.top,
      left: safeArea.left,
      right: result.windowWidth - safeArea.right,
      bottom: result.screenHeight - safeArea.bottom
    };
  }
}
function getOSInfo(system, platform) {
  var osName = '';
  var osVersion = '';
  if (platform && "mp-weixin" === 'mp-baidu') {
    osName = platform;
    osVersion = system;
  } else {
    osName = system.split(' ')[0] || platform;
    osVersion = system.split(' ')[1] || '';
  }
  osName = osName.toLocaleLowerCase();
  switch (osName) {
    case 'harmony': // alipay
    case 'ohos': // weixin
    case 'openharmony':
      // feishu
      osName = 'harmonyos';
      break;
    case 'iphone os':
      // alipay
      osName = 'ios';
      break;
    case 'mac': // weixin qq
    case 'darwin':
      // feishu
      osName = 'macos';
      break;
    case 'windows_nt':
      // feishu
      osName = 'windows';
      break;
  }
  return {
    osName: osName,
    osVersion: osVersion
  };
}
function populateParameters(result) {
  var _result$brand = result.brand,
    brand = _result$brand === void 0 ? '' : _result$brand,
    _result$model = result.model,
    model = _result$model === void 0 ? '' : _result$model,
    _result$system = result.system,
    system = _result$system === void 0 ? '' : _result$system,
    _result$language = result.language,
    language = _result$language === void 0 ? '' : _result$language,
    theme = result.theme,
    version = result.version,
    platform = result.platform,
    fontSizeSetting = result.fontSizeSetting,
    SDKVersion = result.SDKVersion,
    pixelRatio = result.pixelRatio,
    deviceOrientation = result.deviceOrientation;
  // const isQuickApp = "mp-weixin".indexOf('quickapp-webview') !== -1

  var extraParam = {};

  // osName osVersion
  var _getOSInfo = getOSInfo(system, platform),
    osName = _getOSInfo.osName,
    osVersion = _getOSInfo.osVersion;
  var hostVersion = version;

  // deviceType
  var deviceType = getGetDeviceType(result, model);

  // deviceModel
  var deviceBrand = getDeviceBrand(brand);

  // hostName
  var _hostName = getHostName(result);

  // deviceOrientation
  var _deviceOrientation = deviceOrientation; // 仅 微信 百度 支持

  // devicePixelRatio
  var _devicePixelRatio = pixelRatio;

  // SDKVersion
  var _SDKVersion = SDKVersion;

  // hostLanguage
  var hostLanguage = (language || '').replace(/_/g, '-');

  // wx.getAccountInfoSync

  var parameters = {
    appId: "__UNI__588991F",
    appName: "昱禾联仓集采物联通",
    appVersion: "1.0.0",
    appVersionCode: "100",
    appLanguage: getAppLanguage(hostLanguage),
    uniCompileVersion: "5.07",
    uniCompilerVersion: "5.07",
    uniRuntimeVersion: "5.07",
    uniPlatform: undefined || "mp-weixin",
    deviceBrand: deviceBrand,
    deviceModel: model,
    deviceType: deviceType,
    devicePixelRatio: _devicePixelRatio,
    deviceOrientation: _deviceOrientation,
    osName: osName.toLocaleLowerCase(),
    osVersion: osVersion,
    hostTheme: theme,
    hostVersion: hostVersion,
    hostLanguage: hostLanguage,
    hostName: _hostName,
    hostSDKVersion: _SDKVersion,
    hostFontSizeSetting: fontSizeSetting,
    windowTop: 0,
    windowBottom: 0,
    // TODO
    osLanguage: undefined,
    osTheme: undefined,
    ua: undefined,
    hostPackageName: undefined,
    browserName: undefined,
    browserVersion: undefined,
    isUniAppX: false
  };
  Object.assign(result, parameters, extraParam);
}
function getGetDeviceType(result, model) {
  var deviceType = result.deviceType || 'phone';
  {
    var deviceTypeMaps = {
      ipad: 'pad',
      windows: 'pc',
      mac: 'pc'
    };
    var deviceTypeMapsKeys = Object.keys(deviceTypeMaps);
    var _model = model.toLocaleLowerCase();
    for (var index = 0; index < deviceTypeMapsKeys.length; index++) {
      var _m = deviceTypeMapsKeys[index];
      if (_model.indexOf(_m) !== -1) {
        deviceType = deviceTypeMaps[_m];
        break;
      }
    }
  }
  return deviceType;
}
function getDeviceBrand(brand) {
  var deviceBrand = brand;
  if (deviceBrand) {
    deviceBrand = brand.toLocaleLowerCase();
  }
  return deviceBrand;
}
function getAppLanguage(defaultLanguage) {
  return getLocale$1 ? getLocale$1() : defaultLanguage;
}
function getHostName(result) {
  var _platform = 'WeChat';
  var _hostName = result.hostName || _platform; // mp-jd
  {
    if (result.environment) {
      _hostName = result.environment;
    } else if (result.host && result.host.env) {
      _hostName = result.host.env;
    }
  }
  return _hostName;
}
var getSystemInfo = {
  returnValue: function returnValue(result) {
    useDeviceId(result);
    addSafeAreaInsets(result);
    populateParameters(result);
  }
};
var showActionSheet = {
  args: function args(fromArgs) {
    if ((0, _typeof2.default)(fromArgs) === 'object') {
      fromArgs.alertText = fromArgs.title;
    }
  }
};
var getAppBaseInfo = {
  returnValue: function returnValue(result) {
    var _result = result,
      version = _result.version,
      language = _result.language,
      SDKVersion = _result.SDKVersion,
      theme = _result.theme;
    var _hostName = getHostName(result);
    var hostLanguage = (language || '').replace('_', '-');
    result = sortObject(Object.assign(result, {
      appId: "__UNI__588991F",
      appName: "昱禾联仓集采物联通",
      appVersion: "1.0.0",
      appVersionCode: "100",
      appLanguage: getAppLanguage(hostLanguage),
      hostVersion: version,
      hostLanguage: hostLanguage,
      hostName: _hostName,
      hostSDKVersion: SDKVersion,
      hostTheme: theme,
      isUniAppX: false,
      uniPlatform: undefined || "mp-weixin",
      uniCompileVersion: "5.07",
      uniCompilerVersion: "5.07",
      uniRuntimeVersion: "5.07"
    }));
  }
};
var getDeviceInfo = {
  returnValue: function returnValue(result) {
    var _result2 = result,
      brand = _result2.brand,
      model = _result2.model,
      _result2$system = _result2.system,
      system = _result2$system === void 0 ? '' : _result2$system,
      _result2$platform = _result2.platform,
      platform = _result2$platform === void 0 ? '' : _result2$platform;
    var deviceType = getGetDeviceType(result, model);
    var deviceBrand = getDeviceBrand(brand);
    useDeviceId(result);
    var _getOSInfo2 = getOSInfo(system, platform),
      osName = _getOSInfo2.osName,
      osVersion = _getOSInfo2.osVersion;
    result = sortObject(Object.assign(result, {
      deviceType: deviceType,
      deviceBrand: deviceBrand,
      deviceModel: model,
      osName: osName,
      osVersion: osVersion
    }));
  }
};
var getWindowInfo = {
  returnValue: function returnValue(result) {
    addSafeAreaInsets(result);
    result = sortObject(Object.assign(result, {
      windowTop: 0,
      windowBottom: 0
    }));
  }
};
var getAppAuthorizeSetting = {
  returnValue: function returnValue(result) {
    var locationReducedAccuracy = result.locationReducedAccuracy;
    result.locationAccuracy = 'unsupported';
    if (locationReducedAccuracy === true) {
      result.locationAccuracy = 'reduced';
    } else if (locationReducedAccuracy === false) {
      result.locationAccuracy = 'full';
    }
  }
};

// import navigateTo from 'uni-helpers/navigate-to'

var compressImage = {
  args: function args(fromArgs) {
    // https://developers.weixin.qq.com/community/develop/doc/000c08940c865011298e0a43256800?highLine=compressHeight
    if (fromArgs.compressedHeight && !fromArgs.compressHeight) {
      fromArgs.compressHeight = fromArgs.compressedHeight;
    }
    if (fromArgs.compressedWidth && !fromArgs.compressWidth) {
      fromArgs.compressWidth = fromArgs.compressedWidth;
    }
  }
};
var protocols = {
  redirectTo: redirectTo,
  // navigateTo,  // 由于在微信开发者工具的页面参数，会显示__id__参数，因此暂时关闭mp-weixin对于navigateTo的AOP
  previewImage: previewImage,
  getSystemInfo: getSystemInfo,
  getSystemInfoSync: getSystemInfo,
  showActionSheet: showActionSheet,
  getAppBaseInfo: getAppBaseInfo,
  getDeviceInfo: getDeviceInfo,
  getWindowInfo: getWindowInfo,
  getAppAuthorizeSetting: getAppAuthorizeSetting,
  compressImage: compressImage
};
var todos = ['vibrate', 'preloadPage', 'unPreloadPage', 'loadSubPackage'];
var canIUses = [];
var CALLBACKS = ['success', 'fail', 'cancel', 'complete'];
function processCallback(methodName, method, returnValue) {
  return function (res) {
    return method(processReturnValue(methodName, res, returnValue));
  };
}
function processArgs(methodName, fromArgs) {
  var argsOption = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
  var returnValue = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};
  var keepFromArgs = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : false;
  if (isPlainObject(fromArgs)) {
    // 一般 api 的参数解析
    var toArgs = keepFromArgs === true ? fromArgs : {}; // returnValue 为 false 时，说明是格式化返回值，直接在返回值对象上修改赋值
    if (isFn(argsOption)) {
      argsOption = argsOption(fromArgs, toArgs) || {};
    }
    for (var key in fromArgs) {
      if (hasOwn(argsOption, key)) {
        var keyOption = argsOption[key];
        if (isFn(keyOption)) {
          keyOption = keyOption(fromArgs[key], fromArgs, toArgs);
        }
        if (!keyOption) {
          // 不支持的参数
          console.warn("The '".concat(methodName, "' method of platform '\u5FAE\u4FE1\u5C0F\u7A0B\u5E8F' does not support option '").concat(key, "'"));
        } else if (isStr(keyOption)) {
          // 重写参数 key
          toArgs[keyOption] = fromArgs[key];
        } else if (isPlainObject(keyOption)) {
          // {name:newName,value:value}可重新指定参数 key:value
          toArgs[keyOption.name ? keyOption.name : key] = keyOption.value;
        }
      } else if (CALLBACKS.indexOf(key) !== -1) {
        if (isFn(fromArgs[key])) {
          toArgs[key] = processCallback(methodName, fromArgs[key], returnValue);
        }
      } else {
        if (!keepFromArgs) {
          toArgs[key] = fromArgs[key];
        }
      }
    }
    return toArgs;
  } else if (isFn(fromArgs)) {
    fromArgs = processCallback(methodName, fromArgs, returnValue);
  }
  return fromArgs;
}
function processReturnValue(methodName, res, returnValue) {
  var keepReturnValue = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
  if (isFn(protocols.returnValue)) {
    // 处理通用 returnValue
    res = protocols.returnValue(methodName, res);
  }
  return processArgs(methodName, res, returnValue, {}, keepReturnValue);
}
function wrapper(methodName, method) {
  if (hasOwn(protocols, methodName)) {
    var protocol = protocols[methodName];
    if (!protocol) {
      // 暂不支持的 api
      return function () {
        console.error("Platform '\u5FAE\u4FE1\u5C0F\u7A0B\u5E8F' does not support '".concat(methodName, "'."));
      };
    }
    return function (arg1, arg2) {
      // 目前 api 最多两个参数
      var options = protocol;
      if (isFn(protocol)) {
        options = protocol(arg1);
      }
      arg1 = processArgs(methodName, arg1, options.args, options.returnValue);
      var args = [arg1];
      if (typeof arg2 !== 'undefined') {
        args.push(arg2);
      }
      if (isFn(options.name)) {
        methodName = options.name(arg1);
      } else if (isStr(options.name)) {
        methodName = options.name;
      }
      var returnValue = wx[methodName].apply(wx, args);
      if (isSyncApi(methodName)) {
        // 同步 api
        return processReturnValue(methodName, returnValue, options.returnValue, isContextApi(methodName));
      }
      return returnValue;
    };
  }
  return method;
}
var todoApis = Object.create(null);
var TODOS = ['onTabBarMidButtonTap', 'subscribePush', 'unsubscribePush', 'onPush', 'offPush', 'share'];
function createTodoApi(name) {
  return function todoApi(_ref) {
    var fail = _ref.fail,
      complete = _ref.complete;
    var res = {
      errMsg: "".concat(name, ":fail method '").concat(name, "' not supported")
    };
    isFn(fail) && fail(res);
    isFn(complete) && complete(res);
  };
}
TODOS.forEach(function (name) {
  todoApis[name] = createTodoApi(name);
});
var providers = {
  oauth: ['weixin'],
  share: ['weixin'],
  payment: ['wxpay'],
  push: ['weixin']
};
function getProvider(_ref2) {
  var service = _ref2.service,
    success = _ref2.success,
    fail = _ref2.fail,
    complete = _ref2.complete;
  var res = false;
  if (providers[service]) {
    res = {
      errMsg: 'getProvider:ok',
      service: service,
      provider: providers[service]
    };
    isFn(success) && success(res);
  } else {
    res = {
      errMsg: 'getProvider:fail service not found'
    };
    isFn(fail) && fail(res);
  }
  isFn(complete) && complete(res);
}
var extraApi = /*#__PURE__*/Object.freeze({
  __proto__: null,
  getProvider: getProvider
});
var getEmitter = function () {
  var Emitter;
  return function getUniEmitter() {
    if (!Emitter) {
      Emitter = new _vue.default();
    }
    return Emitter;
  };
}();
function apply(ctx, method, args) {
  return ctx[method].apply(ctx, args);
}
function $on() {
  return apply(getEmitter(), '$on', Array.prototype.slice.call(arguments));
}
function $off() {
  return apply(getEmitter(), '$off', Array.prototype.slice.call(arguments));
}
function $once() {
  return apply(getEmitter(), '$once', Array.prototype.slice.call(arguments));
}
function $emit() {
  return apply(getEmitter(), '$emit', Array.prototype.slice.call(arguments));
}
var eventApi = /*#__PURE__*/Object.freeze({
  __proto__: null,
  $on: $on,
  $off: $off,
  $once: $once,
  $emit: $emit
});

/**
 * 框架内 try-catch
 */
/**
 * 开发者 try-catch
 */
function tryCatch(fn) {
  return function () {
    try {
      return fn.apply(fn, arguments);
    } catch (e) {
      // TODO
      console.error(e);
    }
  };
}
function getApiCallbacks(params) {
  var apiCallbacks = {};
  for (var name in params) {
    var param = params[name];
    if (isFn(param)) {
      apiCallbacks[name] = tryCatch(param);
      delete params[name];
    }
  }
  return apiCallbacks;
}
var cid;
var cidErrMsg;
var enabled;
function normalizePushMessage(message) {
  try {
    return JSON.parse(message);
  } catch (e) {}
  return message;
}
function invokePushCallback(args) {
  if (args.type === 'enabled') {
    enabled = true;
  } else if (args.type === 'clientId') {
    cid = args.cid;
    cidErrMsg = args.errMsg;
    invokeGetPushCidCallbacks(cid, args.errMsg);
  } else if (args.type === 'pushMsg') {
    var message = {
      type: 'receive',
      data: normalizePushMessage(args.message)
    };
    for (var i = 0; i < onPushMessageCallbacks.length; i++) {
      var callback = onPushMessageCallbacks[i];
      callback(message);
      // 该消息已被阻止
      if (message.stopped) {
        break;
      }
    }
  } else if (args.type === 'click') {
    onPushMessageCallbacks.forEach(function (callback) {
      callback({
        type: 'click',
        data: normalizePushMessage(args.message)
      });
    });
  }
}
var getPushCidCallbacks = [];
function invokeGetPushCidCallbacks(cid, errMsg) {
  getPushCidCallbacks.forEach(function (callback) {
    callback(cid, errMsg);
  });
  getPushCidCallbacks.length = 0;
}
function getPushClientId(args) {
  if (!isPlainObject(args)) {
    args = {};
  }
  var _getApiCallbacks = getApiCallbacks(args),
    success = _getApiCallbacks.success,
    fail = _getApiCallbacks.fail,
    complete = _getApiCallbacks.complete;
  var hasSuccess = isFn(success);
  var hasFail = isFn(fail);
  var hasComplete = isFn(complete);
  Promise.resolve().then(function () {
    if (typeof enabled === 'undefined') {
      enabled = false;
      cid = '';
      cidErrMsg = 'uniPush is not enabled';
    }
    getPushCidCallbacks.push(function (cid, errMsg) {
      var res;
      if (cid) {
        res = {
          errMsg: 'getPushClientId:ok',
          cid: cid
        };
        hasSuccess && success(res);
      } else {
        res = {
          errMsg: 'getPushClientId:fail' + (errMsg ? ' ' + errMsg : '')
        };
        hasFail && fail(res);
      }
      hasComplete && complete(res);
    });
    if (typeof cid !== 'undefined') {
      invokeGetPushCidCallbacks(cid, cidErrMsg);
    }
  });
}
var onPushMessageCallbacks = [];
// 不使用 defineOnApi 实现，是因为 defineOnApi 依赖 UniServiceJSBridge ，该对象目前在小程序上未提供，故简单实现
var onPushMessage = function onPushMessage(fn) {
  if (onPushMessageCallbacks.indexOf(fn) === -1) {
    onPushMessageCallbacks.push(fn);
  }
};
var offPushMessage = function offPushMessage(fn) {
  if (!fn) {
    onPushMessageCallbacks.length = 0;
  } else {
    var index = onPushMessageCallbacks.indexOf(fn);
    if (index > -1) {
      onPushMessageCallbacks.splice(index, 1);
    }
  }
};
function __f__(type) {
  for (var _len3 = arguments.length, args = new Array(_len3 > 1 ? _len3 - 1 : 0), _key3 = 1; _key3 < _len3; _key3++) {
    args[_key3 - 1] = arguments[_key3];
  }
  console[type].apply(console, args);
}
var baseInfo = wx.getAppBaseInfo && wx.getAppBaseInfo();
if (!baseInfo) {
  baseInfo = wx.getSystemInfoSync();
}
var host = baseInfo ? baseInfo.host : null;
var shareVideoMessage = host && host.env === 'SAAASDK' ? wx.miniapp.shareVideoMessage : wx.shareVideoMessage;
var api = /*#__PURE__*/Object.freeze({
  __proto__: null,
  shareVideoMessage: shareVideoMessage,
  getPushClientId: getPushClientId,
  onPushMessage: onPushMessage,
  offPushMessage: offPushMessage,
  invokePushCallback: invokePushCallback,
  __f__: __f__
});
var mocks = ['__route__', '__wxExparserNodeId__', '__wxWebviewId__'];
function findVmByVueId(vm, vuePid) {
  var $children = vm.$children;
  // 优先查找直属(反向查找:https://github.com/dcloudio/uni-app/issues/1200)
  for (var i = $children.length - 1; i >= 0; i--) {
    var childVm = $children[i];
    if (childVm.$scope._$vueId === vuePid) {
      return childVm;
    }
  }
  // 反向递归查找
  var parentVm;
  for (var _i = $children.length - 1; _i >= 0; _i--) {
    parentVm = findVmByVueId($children[_i], vuePid);
    if (parentVm) {
      return parentVm;
    }
  }
}
function initBehavior(options) {
  return Behavior(options);
}
function isPage() {
  return !!this.route;
}
function initRelation(detail) {
  this.triggerEvent('__l', detail);
}
function selectAllComponents(mpInstance, selector, $refs) {
  var components = mpInstance.selectAllComponents(selector) || [];
  components.forEach(function (component) {
    var ref = component.dataset.ref;
    $refs[ref] = component.$vm || toSkip(component);
    {
      if (component.dataset.vueGeneric === 'scoped') {
        component.selectAllComponents('.scoped-ref').forEach(function (scopedComponent) {
          selectAllComponents(scopedComponent, selector, $refs);
        });
      }
    }
  });
}
function syncRefs(refs, newRefs) {
  var oldKeys = (0, _construct2.default)(Set, (0, _toConsumableArray2.default)(Object.keys(refs)));
  var newKeys = Object.keys(newRefs);
  newKeys.forEach(function (key) {
    var oldValue = refs[key];
    var newValue = newRefs[key];
    if (Array.isArray(oldValue) && Array.isArray(newValue) && oldValue.length === newValue.length && newValue.every(function (value) {
      return oldValue.includes(value);
    })) {
      return;
    }
    refs[key] = newValue;
    oldKeys.delete(key);
  });
  oldKeys.forEach(function (key) {
    delete refs[key];
  });
  return refs;
}
function initRefs(vm) {
  var mpInstance = vm.$scope;
  var refs = {};
  Object.defineProperty(vm, '$refs', {
    get: function get() {
      var $refs = {};
      selectAllComponents(mpInstance, '.vue-ref', $refs);
      // TODO 暂不考虑 for 中的 scoped
      var forComponents = mpInstance.selectAllComponents('.vue-ref-in-for') || [];
      forComponents.forEach(function (component) {
        var ref = component.dataset.ref;
        if (!$refs[ref]) {
          $refs[ref] = [];
        }
        $refs[ref].push(component.$vm || toSkip(component));
      });
      return syncRefs(refs, $refs);
    }
  });
}
function handleLink(event) {
  var _ref3 = event.detail || event.value,
    vuePid = _ref3.vuePid,
    vueOptions = _ref3.vueOptions; // detail 是微信,value 是百度(dipatch)

  var parentVm;
  if (vuePid) {
    parentVm = findVmByVueId(this.$vm, vuePid);
  }
  if (!parentVm) {
    parentVm = this.$vm;
  }
  vueOptions.parent = parentVm;
}
function markMPComponent(component) {
  // 在 Vue 中标记为小程序组件
  var IS_MP = '__v_isMPComponent';
  Object.defineProperty(component, IS_MP, {
    configurable: true,
    enumerable: false,
    value: true
  });
  return component;
}
function toSkip(obj) {
  var OB = '__ob__';
  var SKIP = '__v_skip';
  if (isObject(obj) && Object.isExtensible(obj)) {
    // 避免被 @vue/composition-api 观测
    Object.defineProperty(obj, OB, {
      configurable: true,
      enumerable: false,
      value: (0, _defineProperty2.default)({}, SKIP, true)
    });
  }
  return obj;
}
var WORKLET_RE = /_(.*)_worklet_factory_/;
function initWorkletMethods(mpMethods, vueMethods) {
  if (vueMethods) {
    Object.keys(vueMethods).forEach(function (name) {
      var matches = name.match(WORKLET_RE);
      if (matches) {
        var workletName = matches[1];
        mpMethods[name] = vueMethods[name];
        mpMethods[workletName] = vueMethods[workletName];
      }
    });
  }
}
var MPPage = Page;
var MPComponent = Component;
var customizeRE = /:/g;
var customize = cached(function (str) {
  return camelize(str.replace(customizeRE, '-'));
});
function initTriggerEvent(mpInstance) {
  var oldTriggerEvent = mpInstance.triggerEvent;
  var newTriggerEvent = function newTriggerEvent(event) {
    for (var _len4 = arguments.length, args = new Array(_len4 > 1 ? _len4 - 1 : 0), _key4 = 1; _key4 < _len4; _key4++) {
      args[_key4 - 1] = arguments[_key4];
    }
    // 事件名统一转驼峰格式，仅处理：当前组件为 vue 组件、当前组件为 vue 组件子组件
    if (this.$vm || this.dataset && this.dataset.comType) {
      event = customize(event);
    } else {
      // 针对微信/QQ小程序单独补充驼峰格式事件，以兼容历史项目
      var newEvent = customize(event);
      if (newEvent !== event) {
        oldTriggerEvent.apply(this, [newEvent].concat(args));
      }
    }
    return oldTriggerEvent.apply(this, [event].concat(args));
  };
  try {
    // 京东小程序 triggerEvent 为只读
    mpInstance.triggerEvent = newTriggerEvent;
  } catch (error) {
    mpInstance._triggerEvent = newTriggerEvent;
  }
}
function initHook(name, options, isComponent) {
  var oldHook = options[name];
  options[name] = function () {
    markMPComponent(this);
    initTriggerEvent(this);
    if (oldHook) {
      for (var _len5 = arguments.length, args = new Array(_len5), _key5 = 0; _key5 < _len5; _key5++) {
        args[_key5] = arguments[_key5];
      }
      return oldHook.apply(this, args);
    }
  };
}
if (!MPPage.__$wrappered) {
  MPPage.__$wrappered = true;
  Page = function Page() {
    var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    initHook('onLoad', options);
    return MPPage(options);
  };
  Page.after = MPPage.after;
  Component = function Component() {
    var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    initHook('created', options);
    return MPComponent(options);
  };
}
var PAGE_EVENT_HOOKS = ['onPullDownRefresh', 'onReachBottom', 'onAddToFavorites', 'onShareTimeline', 'onShareAppMessage', 'onPageScroll', 'onResize', 'onTabItemTap'];
function initMocks(vm, mocks) {
  var mpInstance = vm.$mp[vm.mpType];
  mocks.forEach(function (mock) {
    if (hasOwn(mpInstance, mock)) {
      vm[mock] = mpInstance[mock];
    }
  });
}
function hasHook(hook, vueOptions) {
  if (!vueOptions) {
    return true;
  }
  if (_vue.default.options && Array.isArray(_vue.default.options[hook])) {
    return true;
  }
  vueOptions = vueOptions.default || vueOptions;
  if (isFn(vueOptions)) {
    if (isFn(vueOptions.extendOptions[hook])) {
      return true;
    }
    if (vueOptions.super && vueOptions.super.options && Array.isArray(vueOptions.super.options[hook])) {
      return true;
    }
    return false;
  }
  if (isFn(vueOptions[hook]) || Array.isArray(vueOptions[hook])) {
    return true;
  }
  var mixins = vueOptions.mixins;
  if (Array.isArray(mixins)) {
    return !!mixins.find(function (mixin) {
      return hasHook(hook, mixin);
    });
  }
}
function initHooks(mpOptions, hooks, vueOptions) {
  hooks.forEach(function (hook) {
    if (hasHook(hook, vueOptions)) {
      mpOptions[hook] = function (args) {
        return this.$vm && this.$vm.__call_hook(hook, args);
      };
    }
  });
}
function initUnknownHooks(mpOptions, vueOptions) {
  var excludes = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];
  findHooks(vueOptions).forEach(function (hook) {
    return initHook$1(mpOptions, hook, excludes);
  });
}
function findHooks(vueOptions) {
  var hooks = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
  if (vueOptions) {
    Object.keys(vueOptions).forEach(function (name) {
      if (name.indexOf('on') === 0 && isFn(vueOptions[name])) {
        hooks.push(name);
      }
    });
  }
  return hooks;
}
function initHook$1(mpOptions, hook, excludes) {
  if (excludes.indexOf(hook) === -1 && !hasOwn(mpOptions, hook)) {
    mpOptions[hook] = function (args) {
      return this.$vm && this.$vm.__call_hook(hook, args);
    };
  }
}
function initVueComponent(Vue, vueOptions) {
  vueOptions = vueOptions.default || vueOptions;
  var VueComponent;
  if (isFn(vueOptions)) {
    VueComponent = vueOptions;
  } else {
    VueComponent = Vue.extend(vueOptions);
  }
  vueOptions = VueComponent.options;
  return [VueComponent, vueOptions];
}
function initSlots(vm, vueSlots) {
  if (Array.isArray(vueSlots) && vueSlots.length) {
    var $slots = Object.create(null);
    vueSlots.forEach(function (slotName) {
      $slots[slotName] = true;
    });
    vm.$scopedSlots = vm.$slots = $slots;
  }
}
function initVueIds(vueIds, mpInstance) {
  vueIds = (vueIds || '').split(',');
  var len = vueIds.length;
  if (len === 1) {
    mpInstance._$vueId = vueIds[0];
  } else if (len === 2) {
    mpInstance._$vueId = vueIds[0];
    mpInstance._$vuePid = vueIds[1];
  }
}
function initData(vueOptions, context) {
  var data = vueOptions.data || {};
  var methods = vueOptions.methods || {};
  if (typeof data === 'function') {
    try {
      data = data.call(context); // 支持 Vue.prototype 上挂的数据
    } catch (e) {
      if (Object({"NODE_ENV":"development","VUE_APP_DARK_MODE":"false","VUE_APP_NAME":"昱禾联仓集采物联通","VUE_APP_PLATFORM":"mp-weixin","BASE_URL":"/"}).VUE_APP_DEBUG) {
        console.warn('根据 Vue 的 data 函数初始化小程序 data 失败，请尽量确保 data 函数中不访问 vm 对象，否则可能影响首次数据渲染速度。', data);
      }
    }
  } else {
    try {
      // 对 data 格式化
      data = JSON.parse(JSON.stringify(data));
    } catch (e) {}
  }
  if (!isPlainObject(data)) {
    data = {};
  }
  Object.keys(methods).forEach(function (methodName) {
    if (context.__lifecycle_hooks__.indexOf(methodName) === -1 && !hasOwn(data, methodName)) {
      data[methodName] = methods[methodName];
    }
  });
  return data;
}
var PROP_TYPES = [String, Number, Boolean, Object, Array, null];
function createObserver(name) {
  return function observer(newVal, oldVal) {
    if (this.$vm) {
      this.$vm[name] = newVal; // 为了触发其他非 render watcher
    }
  };
}

function initBehaviors(vueOptions, initBehavior) {
  var vueBehaviors = vueOptions.behaviors;
  var vueExtends = vueOptions.extends;
  var vueMixins = vueOptions.mixins;
  var vueProps = vueOptions.props;
  if (!vueProps) {
    vueOptions.props = vueProps = [];
  }
  var behaviors = [];
  if (Array.isArray(vueBehaviors)) {
    vueBehaviors.forEach(function (behavior) {
      behaviors.push(behavior.replace('uni://', "wx".concat("://")));
      if (behavior === 'uni://form-field') {
        if (Array.isArray(vueProps)) {
          vueProps.push('name');
          vueProps.push('value');
        } else {
          vueProps.name = {
            type: String,
            default: ''
          };
          vueProps.value = {
            type: [String, Number, Boolean, Array, Object, Date],
            default: ''
          };
        }
      }
    });
  }
  if (isPlainObject(vueExtends) && vueExtends.props) {
    behaviors.push(initBehavior({
      properties: initProperties(vueExtends.props, true)
    }));
  }
  if (Array.isArray(vueMixins)) {
    vueMixins.forEach(function (vueMixin) {
      if (isPlainObject(vueMixin) && vueMixin.props) {
        behaviors.push(initBehavior({
          properties: initProperties(vueMixin.props, true)
        }));
      }
    });
  }
  return behaviors;
}
function parsePropType(key, type, defaultValue, file) {
  // [String]=>String
  if (Array.isArray(type) && type.length === 1) {
    return type[0];
  }
  return type;
}
function initProperties(props) {
  var isBehavior = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
  var file = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '';
  var options = arguments.length > 3 ? arguments[3] : undefined;
  var properties = {};
  if (!isBehavior) {
    properties.vueId = {
      type: String,
      value: ''
    };
    {
      if (options.virtualHost) {
        properties.virtualHostStyle = {
          type: null,
          value: ''
        };
        properties.virtualHostClass = {
          type: null,
          value: ''
        };
      }
    }
    // scopedSlotsCompiler auto
    properties.scopedSlotsCompiler = {
      type: String,
      value: ''
    };
    properties.vueSlots = {
      // 小程序不能直接定义 $slots 的 props，所以通过 vueSlots 转换到 $slots
      type: null,
      value: [],
      observer: function observer(newVal, oldVal) {
        var $slots = Object.create(null);
        newVal.forEach(function (slotName) {
          $slots[slotName] = true;
        });
        this.setData({
          $slots: $slots
        });
      }
    };
  }
  if (Array.isArray(props)) {
    // ['title']
    props.forEach(function (key) {
      properties[key] = {
        type: null,
        observer: createObserver(key)
      };
    });
  } else if (isPlainObject(props)) {
    // {title:{type:String,default:''},content:String}
    Object.keys(props).forEach(function (key) {
      var opts = props[key];
      if (isPlainObject(opts)) {
        // title:{type:String,default:''}
        var value = opts.default;
        if (isFn(value)) {
          value = value();
        }
        opts.type = parsePropType(key, opts.type);
        properties[key] = {
          type: PROP_TYPES.indexOf(opts.type) !== -1 ? opts.type : null,
          value: value,
          observer: createObserver(key)
        };
      } else {
        // content:String
        var type = parsePropType(key, opts);
        properties[key] = {
          type: PROP_TYPES.indexOf(type) !== -1 ? type : null,
          observer: createObserver(key)
        };
      }
    });
  }
  return properties;
}
function wrapper$1(event) {
  // TODO 又得兼容 mpvue 的 mp 对象
  try {
    event.mp = JSON.parse(JSON.stringify(event));
  } catch (e) {}
  event.stopPropagation = noop;
  event.preventDefault = noop;
  event.target = event.target || {};
  if (!hasOwn(event, 'detail')) {
    event.detail = {};
  }
  if (hasOwn(event, 'markerId')) {
    event.detail = (0, _typeof2.default)(event.detail) === 'object' ? event.detail : {};
    event.detail.markerId = event.markerId;
  }
  if (isPlainObject(event.detail)) {
    event.target = Object.assign({}, event.target, event.detail);
  }
  return event;
}
function getExtraValue(vm, dataPathsArray) {
  var context = vm;
  dataPathsArray.forEach(function (dataPathArray) {
    var dataPath = dataPathArray[0];
    var value = dataPathArray[2];
    if (dataPath || typeof value !== 'undefined') {
      // ['','',index,'disable']
      var propPath = dataPathArray[1];
      var valuePath = dataPathArray[3];
      var vFor;
      if (Number.isInteger(dataPath)) {
        vFor = dataPath;
      } else if (!dataPath) {
        vFor = context;
      } else if (typeof dataPath === 'string' && dataPath) {
        if (dataPath.indexOf('#s#') === 0) {
          vFor = dataPath.substr(3);
        } else {
          vFor = vm.__get_value(dataPath, context);
        }
      }
      if (Number.isInteger(vFor)) {
        context = value;
      } else if (!propPath) {
        context = vFor[value];
      } else {
        if (Array.isArray(vFor)) {
          context = vFor.find(function (vForItem) {
            return vm.__get_value(propPath, vForItem) === value;
          });
        } else if (isPlainObject(vFor)) {
          context = Object.keys(vFor).find(function (vForKey) {
            return vm.__get_value(propPath, vFor[vForKey]) === value;
          });
        } else {
          console.error('v-for 暂不支持循环数据：', vFor);
        }
      }
      if (valuePath) {
        context = vm.__get_value(valuePath, context);
      }
    }
  });
  return context;
}
function processEventExtra(vm, extra, event, __args__) {
  var extraObj = {};
  if (Array.isArray(extra) && extra.length) {
    /**
     *[
     *    ['data.items', 'data.id', item.data.id],
     *    ['metas', 'id', meta.id]
     *],
     *[
     *    ['data.items', 'data.id', item.data.id],
     *    ['metas', 'id', meta.id]
     *],
     *'test'
     */
    extra.forEach(function (dataPath, index) {
      if (typeof dataPath === 'string') {
        if (!dataPath) {
          // model,prop.sync
          extraObj['$' + index] = vm;
        } else {
          if (dataPath === '$event') {
            // $event
            extraObj['$' + index] = event;
          } else if (dataPath === 'arguments') {
            extraObj['$' + index] = event.detail ? event.detail.__args__ || __args__ : __args__;
          } else if (dataPath.indexOf('$event.') === 0) {
            // $event.target.value
            extraObj['$' + index] = vm.__get_value(dataPath.replace('$event.', ''), event);
          } else {
            extraObj['$' + index] = vm.__get_value(dataPath);
          }
        }
      } else {
        extraObj['$' + index] = getExtraValue(vm, dataPath);
      }
    });
  }
  return extraObj;
}
function getObjByArray(arr) {
  var obj = {};
  for (var i = 1; i < arr.length; i++) {
    var element = arr[i];
    obj[element[0]] = element[1];
  }
  return obj;
}
function processEventArgs(vm, event) {
  var args = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];
  var extra = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : [];
  var isCustom = arguments.length > 4 ? arguments[4] : undefined;
  var methodName = arguments.length > 5 ? arguments[5] : undefined;
  var isCustomMPEvent = false; // wxcomponent 组件，传递原始 event 对象

  // fixed 用户直接触发 mpInstance.triggerEvent
  var __args__ = isPlainObject(event.detail) ? event.detail.__args__ || [event.detail] : [event.detail];
  if (isCustom) {
    // 自定义事件
    isCustomMPEvent = event.currentTarget && event.currentTarget.dataset && event.currentTarget.dataset.comType === 'wx';
    if (!args.length) {
      // 无参数，直接传入 event 或 detail 数组
      if (isCustomMPEvent) {
        return [event];
      }
      return __args__;
    }
  }
  var extraObj = processEventExtra(vm, extra, event, __args__);
  var ret = [];
  args.forEach(function (arg) {
    if (arg === '$event') {
      if (methodName === '__set_model' && !isCustom) {
        // input v-model value
        ret.push(event.target.value);
      } else {
        if (isCustom && !isCustomMPEvent) {
          ret.push(__args__[0]);
        } else {
          // wxcomponent 组件或内置组件
          ret.push(event);
        }
      }
    } else {
      if (Array.isArray(arg) && arg[0] === 'o') {
        ret.push(getObjByArray(arg));
      } else if (typeof arg === 'string' && hasOwn(extraObj, arg)) {
        ret.push(extraObj[arg]);
      } else {
        ret.push(arg);
      }
    }
  });
  return ret;
}
var ONCE = '~';
var CUSTOM = '^';
function isMatchEventType(eventType, optType) {
  return eventType === optType || optType === 'regionchange' && (eventType === 'begin' || eventType === 'end');
}
function getContextVm(vm) {
  var $parent = vm.$parent;
  // 父组件是 scoped slots 或者其他自定义组件时继续查找
  while ($parent && $parent.$parent && ($parent.$options.generic || $parent.$parent.$options.generic || $parent.$scope._$vuePid)) {
    $parent = $parent.$parent;
  }
  return $parent && $parent.$parent;
}
function handleEvent(event) {
  var _this2 = this;
  event = wrapper$1(event);

  // [['tap',[['handle',[1,2,a]],['handle1',[1,2,a]]]]]
  var dataset = (event.currentTarget || event.target).dataset;
  if (!dataset) {
    return console.warn('事件信息不存在');
  }
  var eventOpts = dataset.eventOpts || dataset['event-opts']; // 支付宝 web-view 组件 dataset 非驼峰
  if (!eventOpts) {
    return console.warn('事件信息不存在');
  }

  // [['handle',[1,2,a]],['handle1',[1,2,a]]]
  var eventType = event.type;
  var ret = [];
  eventOpts.forEach(function (eventOpt) {
    var type = eventOpt[0];
    var eventsArray = eventOpt[1];
    var isCustom = type.charAt(0) === CUSTOM;
    type = isCustom ? type.slice(1) : type;
    var isOnce = type.charAt(0) === ONCE;
    type = isOnce ? type.slice(1) : type;
    if (eventsArray && isMatchEventType(eventType, type)) {
      eventsArray.forEach(function (eventArray) {
        var methodName = eventArray[0];
        if (methodName) {
          var handlerCtx = _this2.$vm;
          if (handlerCtx.$options.generic) {
            // mp-weixin,mp-toutiao 抽象节点模拟 scoped slots
            handlerCtx = getContextVm(handlerCtx) || handlerCtx;
          }
          if (methodName === '$emit') {
            handlerCtx.$emit.apply(handlerCtx, processEventArgs(_this2.$vm, event, eventArray[1], eventArray[2], isCustom, methodName));
            return;
          }
          var handler = handlerCtx[methodName];
          if (!isFn(handler)) {
            var _type = _this2.$vm.mpType === 'page' ? 'Page' : 'Component';
            var path = _this2.route || _this2.is;
            throw new Error("".concat(_type, " \"").concat(path, "\" does not have a method \"").concat(methodName, "\""));
          }
          if (isOnce) {
            if (handler.once) {
              return;
            }
            handler.once = true;
          }
          var params = processEventArgs(_this2.$vm, event, eventArray[1], eventArray[2], isCustom, methodName);
          params = Array.isArray(params) ? params : [];
          // 参数尾部增加原始事件对象用于复杂表达式内获取额外数据
          if (/=\s*\S+\.eventParams\s*\|\|\s*\S+\[['"]event-params['"]\]/.test(handler.toString())) {
            // eslint-disable-next-line no-sparse-arrays
            params = params.concat([,,,,,,,,,, event]);
          }
          ret.push(handler.apply(handlerCtx, params));
        }
      });
    }
  });
  if (eventType === 'input' && ret.length === 1 && typeof ret[0] !== 'undefined') {
    return ret[0];
  }
}
var eventChannels = {};
function getEventChannel(id) {
  var eventChannel = eventChannels[id];
  delete eventChannels[id];
  return eventChannel;
}
var hooks = ['onShow', 'onHide', 'onError', 'onPageNotFound', 'onThemeChange', 'onUnhandledRejection'];
function initEventChannel() {
  _vue.default.prototype.getOpenerEventChannel = function () {
    // 微信小程序使用自身getOpenerEventChannel
    {
      return this.$scope.getOpenerEventChannel();
    }
  };
  var callHook = _vue.default.prototype.__call_hook;
  _vue.default.prototype.__call_hook = function (hook, args) {
    if (hook === 'onLoad' && args && args.__id__) {
      this.__eventChannel__ = getEventChannel(args.__id__);
      delete args.__id__;
    }
    return callHook.call(this, hook, args);
  };
}
function initScopedSlotsParams() {
  var center = {};
  var parents = {};
  function currentId(fn) {
    var vueIds = this.$options.propsData.vueId;
    if (vueIds) {
      var vueId = vueIds.split(',')[0];
      fn(vueId);
    }
  }
  _vue.default.prototype.$hasSSP = function (vueId) {
    var slot = center[vueId];
    if (!slot) {
      parents[vueId] = this;
      this.$on('hook:destroyed', function () {
        delete parents[vueId];
      });
    }
    return slot;
  };
  _vue.default.prototype.$getSSP = function (vueId, name, needAll) {
    var slot = center[vueId];
    if (slot) {
      var params = slot[name] || [];
      if (needAll) {
        return params;
      }
      return params[0];
    }
  };
  _vue.default.prototype.$setSSP = function (name, value) {
    var index = 0;
    currentId.call(this, function (vueId) {
      var slot = center[vueId];
      var params = slot[name] = slot[name] || [];
      params.push(value);
      index = params.length - 1;
    });
    return index;
  };
  _vue.default.prototype.$initSSP = function () {
    currentId.call(this, function (vueId) {
      center[vueId] = {};
    });
  };
  _vue.default.prototype.$callSSP = function () {
    currentId.call(this, function (vueId) {
      if (parents[vueId]) {
        parents[vueId].$forceUpdate();
      }
    });
  };
  _vue.default.mixin({
    destroyed: function destroyed() {
      var propsData = this.$options.propsData;
      var vueId = propsData && propsData.vueId;
      if (vueId) {
        delete center[vueId];
        delete parents[vueId];
      }
    }
  });
}
function parseBaseApp(vm, _ref4) {
  var mocks = _ref4.mocks,
    initRefs = _ref4.initRefs;
  initEventChannel();
  {
    initScopedSlotsParams();
  }
  if (vm.$options.store) {
    _vue.default.prototype.$store = vm.$options.store;
  }
  uniIdMixin(_vue.default);
  _vue.default.prototype.mpHost = "mp-weixin";
  _vue.default.mixin({
    beforeCreate: function beforeCreate() {
      if (!this.$options.mpType) {
        return;
      }
      this.mpType = this.$options.mpType;
      this.$mp = (0, _defineProperty2.default)({
        data: {}
      }, this.mpType, this.$options.mpInstance);
      this.$scope = this.$options.mpInstance;
      delete this.$options.mpType;
      delete this.$options.mpInstance;
      if (this.mpType === 'page' && typeof getApp === 'function') {
        // hack vue-i18n
        var app = getApp();
        if (app.$vm && app.$vm.$i18n) {
          this._i18n = app.$vm.$i18n;
        }
      }
      if (this.mpType !== 'app') {
        initRefs(this);
        initMocks(this, mocks);
      }
    }
  });
  var appOptions = {
    onLaunch: function onLaunch(args) {
      if (this.$vm) {
        // 已经初始化过了，主要是为了百度，百度 onShow 在 onLaunch 之前
        return;
      }
      {
        if (wx.canIUse && !wx.canIUse('nextTick')) {
          // 事实 上2.2.3 即可，简单使用 2.3.0 的 nextTick 判断
          console.error('当前微信基础库版本过低，请将 微信开发者工具-详情-项目设置-调试基础库版本 更换为`2.3.0`以上');
        }
      }
      this.$vm = vm;
      this.$vm.$mp = {
        app: this
      };
      this.$vm.$scope = this;
      // vm 上也挂载 globalData
      this.$vm.globalData = this.globalData;
      this.$vm._isMounted = true;
      this.$vm.__call_hook('mounted', args);
      this.$vm.__call_hook('onLaunch', args);
    }
  };

  // 兼容旧版本 globalData
  appOptions.globalData = vm.$options.globalData || {};
  // 将 methods 中的方法挂在 getApp() 中
  var methods = vm.$options.methods;
  if (methods) {
    Object.keys(methods).forEach(function (name) {
      appOptions[name] = methods[name];
    });
  }
  initAppLocale(_vue.default, vm, getLocaleLanguage$1());
  initHooks(appOptions, hooks);
  initUnknownHooks(appOptions, vm.$options);
  return appOptions;
}
function getLocaleLanguage$1() {
  var localeLanguage = '';
  {
    var appBaseInfo = wx.getAppBaseInfo();
    var language = appBaseInfo && appBaseInfo.language ? appBaseInfo.language : LOCALE_EN;
    localeLanguage = normalizeLocale(language) || LOCALE_EN;
  }
  return localeLanguage;
}
function parseApp(vm) {
  return parseBaseApp(vm, {
    mocks: mocks,
    initRefs: initRefs
  });
}
function createApp(vm) {
  App(parseApp(vm));
  return vm;
}
var encodeReserveRE = /[!'()*]/g;
var encodeReserveReplacer = function encodeReserveReplacer(c) {
  return '%' + c.charCodeAt(0).toString(16);
};
var commaRE = /%2C/g;

// fixed encodeURIComponent which is more conformant to RFC3986:
// - escapes [!'()*]
// - preserve commas
var encode = function encode(str) {
  return encodeURIComponent(str).replace(encodeReserveRE, encodeReserveReplacer).replace(commaRE, ',');
};
function stringifyQuery(obj) {
  var encodeStr = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : encode;
  var res = obj ? Object.keys(obj).map(function (key) {
    var val = obj[key];
    if (val === undefined) {
      return '';
    }
    if (val === null) {
      return encodeStr(key);
    }
    if (Array.isArray(val)) {
      var result = [];
      val.forEach(function (val2) {
        if (val2 === undefined) {
          return;
        }
        if (val2 === null) {
          result.push(encodeStr(key));
        } else {
          result.push(encodeStr(key) + '=' + encodeStr(val2));
        }
      });
      return result.join('&');
    }
    return encodeStr(key) + '=' + encodeStr(val);
  }).filter(function (x) {
    return x.length > 0;
  }).join('&') : null;
  return res ? "?".concat(res) : '';
}
function parseBaseComponent(vueComponentOptions) {
  var _ref5 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
    isPage = _ref5.isPage,
    initRelation = _ref5.initRelation;
  var needVueOptions = arguments.length > 2 ? arguments[2] : undefined;
  var _initVueComponent = initVueComponent(_vue.default, vueComponentOptions),
    _initVueComponent2 = (0, _slicedToArray2.default)(_initVueComponent, 2),
    VueComponent = _initVueComponent2[0],
    vueOptions = _initVueComponent2[1];
  var options = _objectSpread({
    multipleSlots: true,
    // styleIsolation: 'apply-shared',
    addGlobalClass: true
  }, vueOptions.options || {});
  {
    // 微信 multipleSlots 部分情况有 bug，导致内容顺序错乱 如 u-list，提供覆盖选项
    if (vueOptions['mp-weixin'] && vueOptions['mp-weixin'].options) {
      Object.assign(options, vueOptions['mp-weixin'].options);
    }
  }
  var componentOptions = {
    options: options,
    data: initData(vueOptions, _vue.default.prototype),
    behaviors: initBehaviors(vueOptions, initBehavior),
    properties: initProperties(vueOptions.props, false, vueOptions.__file, options),
    lifetimes: {
      attached: function attached() {
        var properties = this.properties;
        var options = {
          mpType: isPage.call(this) ? 'page' : 'component',
          mpInstance: this,
          propsData: properties
        };
        initVueIds(properties.vueId, this);

        // 处理父子关系
        initRelation.call(this, {
          vuePid: this._$vuePid,
          vueOptions: options
        });

        // 初始化 vue 实例
        this.$vm = new VueComponent(options);

        // 处理$slots,$scopedSlots（暂不支持动态变化$slots）
        initSlots(this.$vm, properties.vueSlots);

        // 触发首次 setData
        this.$vm.$mount();
      },
      ready: function ready() {
        // 当组件 props 默认值为 true，初始化时传入 false 会导致 created,ready 触发, 但 attached 不触发
        // https://developers.weixin.qq.com/community/develop/doc/00066ae2844cc0f8eb883e2a557800
        if (this.$vm) {
          this.$vm._isMounted = true;
          this.$vm.__call_hook('mounted');
          this.$vm.__call_hook('onReady');
        }
      },
      detached: function detached() {
        this.$vm && this.$vm.$destroy();
      }
    },
    pageLifetimes: {
      show: function show(args) {
        this.$vm && this.$vm.__call_hook('onPageShow', args);
      },
      hide: function hide() {
        this.$vm && this.$vm.__call_hook('onPageHide');
      },
      resize: function resize(size) {
        this.$vm && this.$vm.__call_hook('onPageResize', size);
      }
    },
    methods: {
      __l: handleLink,
      __e: handleEvent
    }
  };
  // externalClasses
  if (vueOptions.externalClasses) {
    componentOptions.externalClasses = vueOptions.externalClasses;
  }
  if (Array.isArray(vueOptions.wxsCallMethods)) {
    vueOptions.wxsCallMethods.forEach(function (callMethod) {
      componentOptions.methods[callMethod] = function (args) {
        return this.$vm[callMethod](args);
      };
    });
  }
  if (needVueOptions) {
    return [componentOptions, vueOptions, VueComponent];
  }
  if (isPage) {
    return componentOptions;
  }
  return [componentOptions, VueComponent];
}
function parseComponent(vueComponentOptions, needVueOptions) {
  return parseBaseComponent(vueComponentOptions, {
    isPage: isPage,
    initRelation: initRelation
  }, needVueOptions);
}
var hooks$1 = ['onShow', 'onHide', 'onUnload'];
hooks$1.push.apply(hooks$1, PAGE_EVENT_HOOKS);
function parseBasePage(vuePageOptions) {
  var _parseComponent = parseComponent(vuePageOptions, true),
    _parseComponent2 = (0, _slicedToArray2.default)(_parseComponent, 2),
    pageOptions = _parseComponent2[0],
    vueOptions = _parseComponent2[1];
  initHooks(pageOptions.methods, hooks$1, vueOptions);
  pageOptions.methods.onLoad = function (query) {
    this.options = query;
    var copyQuery = Object.assign({}, query);
    delete copyQuery.__id__;
    this.$page = {
      fullPath: '/' + (this.route || this.is) + stringifyQuery(copyQuery)
    };
    this.$vm.$mp.query = query; // 兼容 mpvue
    this.$vm.__call_hook('onLoad', query);
  };
  {
    initUnknownHooks(pageOptions.methods, vuePageOptions, ['onReady']);
  }
  {
    initWorkletMethods(pageOptions.methods, vueOptions.methods);
  }
  return pageOptions;
}
function parsePage(vuePageOptions) {
  return parseBasePage(vuePageOptions);
}
function createPage(vuePageOptions) {
  {
    return Component(parsePage(vuePageOptions));
  }
}
function createComponent(vueOptions) {
  {
    return Component(parseComponent(vueOptions));
  }
}
function createSubpackageApp(vm) {
  var appOptions = parseApp(vm);
  var app = getApp({
    allowDefault: true
  });
  vm.$scope = app;
  var globalData = app.globalData;
  if (globalData) {
    Object.keys(appOptions.globalData).forEach(function (name) {
      if (!hasOwn(globalData, name)) {
        globalData[name] = appOptions.globalData[name];
      }
    });
  }
  Object.keys(appOptions).forEach(function (name) {
    if (!hasOwn(app, name)) {
      app[name] = appOptions[name];
    }
  });
  if (isFn(appOptions.onShow) && wx.onAppShow) {
    wx.onAppShow(function () {
      for (var _len6 = arguments.length, args = new Array(_len6), _key6 = 0; _key6 < _len6; _key6++) {
        args[_key6] = arguments[_key6];
      }
      vm.__call_hook('onShow', args);
    });
  }
  if (isFn(appOptions.onHide) && wx.onAppHide) {
    wx.onAppHide(function () {
      for (var _len7 = arguments.length, args = new Array(_len7), _key7 = 0; _key7 < _len7; _key7++) {
        args[_key7] = arguments[_key7];
      }
      vm.__call_hook('onHide', args);
    });
  }
  if (isFn(appOptions.onLaunch)) {
    var args = wx.getLaunchOptionsSync && wx.getLaunchOptionsSync();
    vm.__call_hook('onLaunch', args);
  }
  return vm;
}
function createPlugin(vm) {
  var appOptions = parseApp(vm);
  if (isFn(appOptions.onShow) && wx.onAppShow) {
    wx.onAppShow(function () {
      for (var _len8 = arguments.length, args = new Array(_len8), _key8 = 0; _key8 < _len8; _key8++) {
        args[_key8] = arguments[_key8];
      }
      vm.__call_hook('onShow', args);
    });
  }
  if (isFn(appOptions.onHide) && wx.onAppHide) {
    wx.onAppHide(function () {
      for (var _len9 = arguments.length, args = new Array(_len9), _key9 = 0; _key9 < _len9; _key9++) {
        args[_key9] = arguments[_key9];
      }
      vm.__call_hook('onHide', args);
    });
  }
  if (isFn(appOptions.onLaunch)) {
    var args = wx.getLaunchOptionsSync && wx.getLaunchOptionsSync();
    vm.__call_hook('onLaunch', args);
  }
  return vm;
}
todos.forEach(function (todoApi) {
  protocols[todoApi] = false;
});
canIUses.forEach(function (canIUseApi) {
  var apiName = protocols[canIUseApi] && protocols[canIUseApi].name ? protocols[canIUseApi].name : canIUseApi;
  if (!wx.canIUse(apiName)) {
    protocols[canIUseApi] = false;
  }
});
var uni = {};
if (typeof Proxy !== 'undefined' && "mp-weixin" !== 'app-plus') {
  uni = new Proxy({}, {
    get: function get(target, name) {
      if (hasOwn(target, name)) {
        return target[name];
      }
      if (baseApi[name]) {
        return baseApi[name];
      }
      if (api[name]) {
        return promisify(name, api[name]);
      }
      {
        if (extraApi[name]) {
          return promisify(name, extraApi[name]);
        }
        if (todoApis[name]) {
          return promisify(name, todoApis[name]);
        }
      }
      if (eventApi[name]) {
        return eventApi[name];
      }
      return promisify(name, wrapper(name, wx[name]));
    },
    set: function set(target, name, value) {
      target[name] = value;
      return true;
    }
  });
} else {
  Object.keys(baseApi).forEach(function (name) {
    uni[name] = baseApi[name];
  });
  {
    Object.keys(todoApis).forEach(function (name) {
      uni[name] = promisify(name, todoApis[name]);
    });
    Object.keys(extraApi).forEach(function (name) {
      uni[name] = promisify(name, extraApi[name]);
    });
  }
  Object.keys(eventApi).forEach(function (name) {
    uni[name] = eventApi[name];
  });
  Object.keys(api).forEach(function (name) {
    uni[name] = promisify(name, api[name]);
  });
  Object.keys(wx).forEach(function (name) {
    if (hasOwn(wx, name) || hasOwn(protocols, name)) {
      uni[name] = promisify(name, wrapper(name, wx[name]));
    }
  });
}
wx.createApp = createApp;
wx.createPage = createPage;
wx.createComponent = createComponent;
wx.createSubpackageApp = createSubpackageApp;
wx.createPlugin = createPlugin;
var uni$1 = uni;
var _default = uni$1;
exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/wx.js */ 1)["default"], __webpack_require__(/*! ./../../../webpack/buildin/global.js */ 3)))

/***/ }),

/***/ 20:
/*!****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/iterableToArray.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _iterableToArray(iter) {
  if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}
module.exports = _iterableToArray, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ 21:
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/nonIterableSpread.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
module.exports = _nonIterableSpread, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ 22:
/*!*************************************************************!*\
  !*** ./node_modules/@dcloudio/uni-i18n/dist/uni-i18n.es.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(uni, global) {

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ 4);
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.LOCALE_ZH_HANT = exports.LOCALE_ZH_HANS = exports.LOCALE_FR = exports.LOCALE_ES = exports.LOCALE_EN = exports.I18n = exports.Formatter = void 0;
exports.compileI18nJsonStr = compileI18nJsonStr;
exports.hasI18nJson = hasI18nJson;
exports.initVueI18n = initVueI18n;
exports.isI18nStr = isI18nStr;
exports.isString = void 0;
exports.normalizeLocale = normalizeLocale;
exports.parseI18nJson = parseI18nJson;
exports.resolveLocale = resolveLocale;
var _slicedToArray2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ 5));
var _classCallCheck2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ 23));
var _createClass2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/createClass */ 24));
var _typeof2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/typeof */ 13));
var isObject = function isObject(val) {
  return val !== null && (0, _typeof2.default)(val) === 'object';
};
var defaultDelimiters = ['{', '}'];
var BaseFormatter = /*#__PURE__*/function () {
  function BaseFormatter() {
    (0, _classCallCheck2.default)(this, BaseFormatter);
    this._caches = Object.create(null);
  }
  (0, _createClass2.default)(BaseFormatter, [{
    key: "interpolate",
    value: function interpolate(message, values) {
      var delimiters = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : defaultDelimiters;
      if (!values) {
        return [message];
      }
      var tokens = this._caches[message];
      if (!tokens) {
        tokens = parse(message, delimiters);
        this._caches[message] = tokens;
      }
      return compile(tokens, values);
    }
  }]);
  return BaseFormatter;
}();
exports.Formatter = BaseFormatter;
var RE_TOKEN_LIST_VALUE = /^(?:\d)+/;
var RE_TOKEN_NAMED_VALUE = /^(?:\w)+/;
function parse(format, _ref) {
  var _ref2 = (0, _slicedToArray2.default)(_ref, 2),
    startDelimiter = _ref2[0],
    endDelimiter = _ref2[1];
  var tokens = [];
  var position = 0;
  var text = '';
  while (position < format.length) {
    var char = format[position++];
    if (char === startDelimiter) {
      if (text) {
        tokens.push({
          type: 'text',
          value: text
        });
      }
      text = '';
      var sub = '';
      char = format[position++];
      while (char !== undefined && char !== endDelimiter) {
        sub += char;
        char = format[position++];
      }
      var isClosed = char === endDelimiter;
      var type = RE_TOKEN_LIST_VALUE.test(sub) ? 'list' : isClosed && RE_TOKEN_NAMED_VALUE.test(sub) ? 'named' : 'unknown';
      tokens.push({
        value: sub,
        type: type
      });
    }
    //  else if (char === '%') {
    //   // when found rails i18n syntax, skip text capture
    //   if (format[position] !== '{') {
    //     text += char
    //   }
    // }
    else {
      text += char;
    }
  }
  text && tokens.push({
    type: 'text',
    value: text
  });
  return tokens;
}
function compile(tokens, values) {
  var compiled = [];
  var index = 0;
  var mode = Array.isArray(values) ? 'list' : isObject(values) ? 'named' : 'unknown';
  if (mode === 'unknown') {
    return compiled;
  }
  while (index < tokens.length) {
    var token = tokens[index];
    switch (token.type) {
      case 'text':
        compiled.push(token.value);
        break;
      case 'list':
        compiled.push(values[parseInt(token.value, 10)]);
        break;
      case 'named':
        if (mode === 'named') {
          compiled.push(values[token.value]);
        } else {
          if (true) {
            console.warn("Type of token '".concat(token.type, "' and format of value '").concat(mode, "' don't match!"));
          }
        }
        break;
      case 'unknown':
        if (true) {
          console.warn("Detect 'unknown' type of token!");
        }
        break;
    }
    index++;
  }
  return compiled;
}
var LOCALE_ZH_HANS = 'zh-Hans';
exports.LOCALE_ZH_HANS = LOCALE_ZH_HANS;
var LOCALE_ZH_HANT = 'zh-Hant';
exports.LOCALE_ZH_HANT = LOCALE_ZH_HANT;
var LOCALE_EN = 'en';
exports.LOCALE_EN = LOCALE_EN;
var LOCALE_FR = 'fr';
exports.LOCALE_FR = LOCALE_FR;
var LOCALE_ES = 'es';
exports.LOCALE_ES = LOCALE_ES;
var hasOwnProperty = Object.prototype.hasOwnProperty;
var hasOwn = function hasOwn(val, key) {
  return hasOwnProperty.call(val, key);
};
var defaultFormatter = new BaseFormatter();
function include(str, parts) {
  return !!parts.find(function (part) {
    return str.indexOf(part) !== -1;
  });
}
function startsWith(str, parts) {
  return parts.find(function (part) {
    return str.indexOf(part) === 0;
  });
}
function normalizeLocale(locale, messages) {
  if (!locale) {
    return;
  }
  locale = locale.trim().replace(/_/g, '-');
  if (messages && messages[locale]) {
    return locale;
  }
  locale = locale.toLowerCase();
  if (locale === 'chinese') {
    // 支付宝
    return LOCALE_ZH_HANS;
  }
  if (locale.indexOf('zh') === 0) {
    if (locale.indexOf('-hans') > -1) {
      return LOCALE_ZH_HANS;
    }
    if (locale.indexOf('-hant') > -1) {
      return LOCALE_ZH_HANT;
    }
    if (include(locale, ['-tw', '-hk', '-mo', '-cht'])) {
      return LOCALE_ZH_HANT;
    }
    return LOCALE_ZH_HANS;
  }
  var locales = [LOCALE_EN, LOCALE_FR, LOCALE_ES];
  if (messages && Object.keys(messages).length > 0) {
    locales = Object.keys(messages);
  }
  var lang = startsWith(locale, locales);
  if (lang) {
    return lang;
  }
}
var I18n = /*#__PURE__*/function () {
  function I18n(_ref3) {
    var locale = _ref3.locale,
      fallbackLocale = _ref3.fallbackLocale,
      messages = _ref3.messages,
      watcher = _ref3.watcher,
      formater = _ref3.formater;
    (0, _classCallCheck2.default)(this, I18n);
    this.locale = LOCALE_EN;
    this.fallbackLocale = LOCALE_EN;
    this.message = {};
    this.messages = {};
    this.watchers = [];
    if (fallbackLocale) {
      this.fallbackLocale = fallbackLocale;
    }
    this.formater = formater || defaultFormatter;
    this.messages = messages || {};
    this.setLocale(locale || LOCALE_EN);
    if (watcher) {
      this.watchLocale(watcher);
    }
  }
  (0, _createClass2.default)(I18n, [{
    key: "setLocale",
    value: function setLocale(locale) {
      var _this = this;
      var oldLocale = this.locale;
      this.locale = normalizeLocale(locale, this.messages) || this.fallbackLocale;
      if (!this.messages[this.locale]) {
        // 可能初始化时不存在
        this.messages[this.locale] = {};
      }
      this.message = this.messages[this.locale];
      // 仅发生变化时，通知
      if (oldLocale !== this.locale) {
        this.watchers.forEach(function (watcher) {
          watcher(_this.locale, oldLocale);
        });
      }
    }
  }, {
    key: "getLocale",
    value: function getLocale() {
      return this.locale;
    }
  }, {
    key: "watchLocale",
    value: function watchLocale(fn) {
      var _this2 = this;
      var index = this.watchers.push(fn) - 1;
      return function () {
        _this2.watchers.splice(index, 1);
      };
    }
  }, {
    key: "add",
    value: function add(locale, message) {
      var override = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
      var curMessages = this.messages[locale];
      if (curMessages) {
        if (override) {
          Object.assign(curMessages, message);
        } else {
          Object.keys(message).forEach(function (key) {
            if (!hasOwn(curMessages, key)) {
              curMessages[key] = message[key];
            }
          });
        }
      } else {
        this.messages[locale] = message;
      }
    }
  }, {
    key: "f",
    value: function f(message, values, delimiters) {
      return this.formater.interpolate(message, values, delimiters).join('');
    }
  }, {
    key: "t",
    value: function t(key, locale, values) {
      var message = this.message;
      if (typeof locale === 'string') {
        locale = normalizeLocale(locale, this.messages);
        locale && (message = this.messages[locale]);
      } else {
        values = locale;
      }
      if (!hasOwn(message, key)) {
        console.warn("Cannot translate the value of keypath ".concat(key, ". Use the value of keypath as default."));
        return key;
      }
      return this.formater.interpolate(message[key], values).join('');
    }
  }]);
  return I18n;
}();
exports.I18n = I18n;
function watchAppLocale(appVm, i18n) {
  // 需要保证 watch 的触发在组件渲染之前
  if (appVm.$watchLocale) {
    // vue2
    appVm.$watchLocale(function (newLocale) {
      i18n.setLocale(newLocale);
    });
  } else {
    appVm.$watch(function () {
      return appVm.$locale;
    }, function (newLocale) {
      i18n.setLocale(newLocale);
    });
  }
}
function getDefaultLocale() {
  if (typeof uni !== 'undefined' && uni.getLocale) {
    return uni.getLocale();
  }
  // 小程序平台，uni 和 uni-i18n 互相引用，导致访问不到 uni，故在 global 上挂了 getLocale
  if (typeof global !== 'undefined' && global.getLocale) {
    return global.getLocale();
  }
  return LOCALE_EN;
}
function initVueI18n(locale) {
  var messages = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var fallbackLocale = arguments.length > 2 ? arguments[2] : undefined;
  var watcher = arguments.length > 3 ? arguments[3] : undefined;
  // 兼容旧版本入参
  if (typeof locale !== 'string') {
    var _ref4 = [messages, locale];
    locale = _ref4[0];
    messages = _ref4[1];
  }
  if (typeof locale !== 'string') {
    // 因为小程序平台，uni-i18n 和 uni 互相引用，导致此时访问 uni 时，为 undefined
    locale = getDefaultLocale();
  }
  if (typeof fallbackLocale !== 'string') {
    fallbackLocale = typeof __uniConfig !== 'undefined' && __uniConfig.fallbackLocale || LOCALE_EN;
  }
  var i18n = new I18n({
    locale: locale,
    fallbackLocale: fallbackLocale,
    messages: messages,
    watcher: watcher
  });
  var _t = function t(key, values) {
    if (typeof getApp !== 'function') {
      // app view
      /* eslint-disable no-func-assign */
      _t = function t(key, values) {
        return i18n.t(key, values);
      };
    } else {
      var isWatchedAppLocale = false;
      _t = function t(key, values) {
        var appVm = getApp().$vm;
        // 可能$vm还不存在，比如在支付宝小程序中，组件定义较早，在props的default里使用了t()函数（如uni-goods-nav），此时app还未初始化
        // options: {
        // 	type: Array,
        // 	default () {
        // 		return [{
        // 			icon: 'shop',
        // 			text: t("uni-goods-nav.options.shop"),
        // 		}, {
        // 			icon: 'cart',
        // 			text: t("uni-goods-nav.options.cart")
        // 		}]
        // 	}
        // },
        if (appVm) {
          // 触发响应式
          appVm.$locale;
          if (!isWatchedAppLocale) {
            isWatchedAppLocale = true;
            watchAppLocale(appVm, i18n);
          }
        }
        return i18n.t(key, values);
      };
    }
    return _t(key, values);
  };
  return {
    i18n: i18n,
    f: function f(message, values, delimiters) {
      return i18n.f(message, values, delimiters);
    },
    t: function t(key, values) {
      return _t(key, values);
    },
    add: function add(locale, message) {
      var override = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
      return i18n.add(locale, message, override);
    },
    watch: function watch(fn) {
      return i18n.watchLocale(fn);
    },
    getLocale: function getLocale() {
      return i18n.getLocale();
    },
    setLocale: function setLocale(newLocale) {
      return i18n.setLocale(newLocale);
    }
  };
}
var isString = function isString(val) {
  return typeof val === 'string';
};
exports.isString = isString;
var formater;
function hasI18nJson(jsonObj, delimiters) {
  if (!formater) {
    formater = new BaseFormatter();
  }
  return walkJsonObj(jsonObj, function (jsonObj, key) {
    var value = jsonObj[key];
    if (isString(value)) {
      if (isI18nStr(value, delimiters)) {
        return true;
      }
    } else {
      return hasI18nJson(value, delimiters);
    }
  });
}
function parseI18nJson(jsonObj, values, delimiters) {
  if (!formater) {
    formater = new BaseFormatter();
  }
  walkJsonObj(jsonObj, function (jsonObj, key) {
    var value = jsonObj[key];
    if (isString(value)) {
      if (isI18nStr(value, delimiters)) {
        jsonObj[key] = compileStr(value, values, delimiters);
      }
    } else {
      parseI18nJson(value, values, delimiters);
    }
  });
  return jsonObj;
}
function compileI18nJsonStr(jsonStr, _ref5) {
  var locale = _ref5.locale,
    locales = _ref5.locales,
    delimiters = _ref5.delimiters;
  if (!isI18nStr(jsonStr, delimiters)) {
    return jsonStr;
  }
  if (!formater) {
    formater = new BaseFormatter();
  }
  var localeValues = [];
  Object.keys(locales).forEach(function (name) {
    if (name !== locale) {
      localeValues.push({
        locale: name,
        values: locales[name]
      });
    }
  });
  localeValues.unshift({
    locale: locale,
    values: locales[locale]
  });
  try {
    return JSON.stringify(compileJsonObj(JSON.parse(jsonStr), localeValues, delimiters), null, 2);
  } catch (e) {}
  return jsonStr;
}
function isI18nStr(value, delimiters) {
  return value.indexOf(delimiters[0]) > -1;
}
function compileStr(value, values, delimiters) {
  return formater.interpolate(value, values, delimiters).join('');
}
function compileValue(jsonObj, key, localeValues, delimiters) {
  var value = jsonObj[key];
  if (isString(value)) {
    // 存在国际化
    if (isI18nStr(value, delimiters)) {
      jsonObj[key] = compileStr(value, localeValues[0].values, delimiters);
      if (localeValues.length > 1) {
        // 格式化国际化语言
        var valueLocales = jsonObj[key + 'Locales'] = {};
        localeValues.forEach(function (localValue) {
          valueLocales[localValue.locale] = compileStr(value, localValue.values, delimiters);
        });
      }
    }
  } else {
    compileJsonObj(value, localeValues, delimiters);
  }
}
function compileJsonObj(jsonObj, localeValues, delimiters) {
  walkJsonObj(jsonObj, function (jsonObj, key) {
    compileValue(jsonObj, key, localeValues, delimiters);
  });
  return jsonObj;
}
function walkJsonObj(jsonObj, walk) {
  if (Array.isArray(jsonObj)) {
    for (var i = 0; i < jsonObj.length; i++) {
      if (walk(jsonObj, i)) {
        return true;
      }
    }
  } else if (isObject(jsonObj)) {
    for (var key in jsonObj) {
      if (walk(jsonObj, key)) {
        return true;
      }
    }
  }
  return false;
}
function resolveLocale(locales) {
  return function (locale) {
    if (!locale) {
      return locale;
    }
    locale = normalizeLocale(locale) || locale;
    return resolveLocaleChain(locale).find(function (locale) {
      return locales.indexOf(locale) > -1;
    });
  };
}
function resolveLocaleChain(locale) {
  var chain = [];
  var tokens = locale.split('-');
  while (tokens.length) {
    chain.push(tokens.join('-'));
    tokens.pop();
  }
  return chain;
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 2)["default"], __webpack_require__(/*! ./../../../webpack/buildin/global.js */ 3)))

/***/ }),

/***/ 23:
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/classCallCheck.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}
module.exports = _classCallCheck, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ 24:
/*!************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/createClass.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var toPropertyKey = __webpack_require__(/*! ./toPropertyKey.js */ 12);
function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, toPropertyKey(descriptor.key), descriptor);
  }
}
function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  Object.defineProperty(Constructor, "prototype", {
    writable: false
  });
  return Constructor;
}
module.exports = _createClass, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ 25:
/*!******************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/mp-vue/dist/mp.runtime.esm.js ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(global, Buffer) {/*!
 * Vue.js v2.6.11
 * (c) 2014-2025 Evan You
 * Released under the MIT License.
 */
/*  */

var emptyObject = Object.freeze({});

// These helpers produce better VM code in JS engines due to their
// explicitness and function inlining.
function isUndef (v) {
  return v === undefined || v === null
}

function isDef (v) {
  return v !== undefined && v !== null
}

function isTrue (v) {
  return v === true
}

function isFalse (v) {
  return v === false
}

/**
 * Check if value is primitive.
 */
function isPrimitive (value) {
  return (
    typeof value === 'string' ||
    typeof value === 'number' ||
    // $flow-disable-line
    typeof value === 'symbol' ||
    typeof value === 'boolean'
  )
}

/**
 * Quick object check - this is primarily used to tell
 * Objects from primitive values when we know the value
 * is a JSON-compliant type.
 */
function isObject (obj) {
  return obj !== null && typeof obj === 'object'
}

/**
 * Get the raw type string of a value, e.g., [object Object].
 */
var _toString = Object.prototype.toString;

function toRawType (value) {
  return _toString.call(value).slice(8, -1)
}

/**
 * Strict object type check. Only returns true
 * for plain JavaScript objects.
 */
function isPlainObject (obj) {
  return _toString.call(obj) === '[object Object]'
}

function isRegExp (v) {
  return _toString.call(v) === '[object RegExp]'
}

/**
 * Check if val is a valid array index.
 */
function isValidArrayIndex (val) {
  var n = parseFloat(String(val));
  return n >= 0 && Math.floor(n) === n && isFinite(val)
}

function isPromise (val) {
  return (
    isDef(val) &&
    typeof val.then === 'function' &&
    typeof val.catch === 'function'
  )
}

/**
 * Convert a value to a string that is actually rendered.
 */
function toString (val) {
  return val == null
    ? ''
    : Array.isArray(val) || (isPlainObject(val) && val.toString === _toString)
      ? JSON.stringify(val, null, 2)
      : String(val)
}

/**
 * Convert an input value to a number for persistence.
 * If the conversion fails, return original string.
 */
function toNumber (val) {
  var n = parseFloat(val);
  return isNaN(n) ? val : n
}

/**
 * Make a map and return a function for checking if a key
 * is in that map.
 */
function makeMap (
  str,
  expectsLowerCase
) {
  var map = Object.create(null);
  var list = str.split(',');
  for (var i = 0; i < list.length; i++) {
    map[list[i]] = true;
  }
  return expectsLowerCase
    ? function (val) { return map[val.toLowerCase()]; }
    : function (val) { return map[val]; }
}

/**
 * Check if a tag is a built-in tag.
 */
var isBuiltInTag = makeMap('slot,component', true);

/**
 * Check if an attribute is a reserved attribute.
 */
var isReservedAttribute = makeMap('key,ref,slot,slot-scope,is');

/**
 * Remove an item from an array.
 */
function remove (arr, item) {
  if (arr.length) {
    var index = arr.indexOf(item);
    if (index > -1) {
      return arr.splice(index, 1)
    }
  }
}

/**
 * Check whether an object has the property.
 */
var hasOwnProperty = Object.prototype.hasOwnProperty;
function hasOwn (obj, key) {
  return hasOwnProperty.call(obj, key)
}

/**
 * Create a cached version of a pure function.
 */
function cached (fn) {
  var cache = Object.create(null);
  return (function cachedFn (str) {
    var hit = cache[str];
    return hit || (cache[str] = fn(str))
  })
}

/**
 * Camelize a hyphen-delimited string.
 */
var camelizeRE = /-(\w)/g;
var camelize = cached(function (str) {
  return str.replace(camelizeRE, function (_, c) { return c ? c.toUpperCase() : ''; })
});

/**
 * Capitalize a string.
 */
var capitalize = cached(function (str) {
  return str.charAt(0).toUpperCase() + str.slice(1)
});

/**
 * Hyphenate a camelCase string.
 */
var hyphenateRE = /\B([A-Z])/g;
var hyphenate = cached(function (str) {
  return str.replace(hyphenateRE, '-$1').toLowerCase()
});

/**
 * Simple bind polyfill for environments that do not support it,
 * e.g., PhantomJS 1.x. Technically, we don't need this anymore
 * since native bind is now performant enough in most browsers.
 * But removing it would mean breaking code that was able to run in
 * PhantomJS 1.x, so this must be kept for backward compatibility.
 */

/* istanbul ignore next */
function polyfillBind (fn, ctx) {
  function boundFn (a) {
    var l = arguments.length;
    return l
      ? l > 1
        ? fn.apply(ctx, arguments)
        : fn.call(ctx, a)
      : fn.call(ctx)
  }

  boundFn._length = fn.length;
  return boundFn
}

function nativeBind (fn, ctx) {
  return fn.bind(ctx)
}

var bind = Function.prototype.bind
  ? nativeBind
  : polyfillBind;

/**
 * Convert an Array-like object to a real Array.
 */
function toArray (list, start) {
  start = start || 0;
  var i = list.length - start;
  var ret = new Array(i);
  while (i--) {
    ret[i] = list[i + start];
  }
  return ret
}

/**
 * Mix properties into target object.
 */
function extend (to, _from) {
  for (var key in _from) {
    to[key] = _from[key];
  }
  return to
}

/**
 * Merge an Array of Objects into a single Object.
 */
function toObject (arr) {
  var res = {};
  for (var i = 0; i < arr.length; i++) {
    if (arr[i]) {
      extend(res, arr[i]);
    }
  }
  return res
}

/* eslint-disable no-unused-vars */

/**
 * Perform no operation.
 * Stubbing args to make Flow happy without leaving useless transpiled code
 * with ...rest (https://flow.org/blog/2017/05/07/Strict-Function-Call-Arity/).
 */
function noop (a, b, c) {}

/**
 * Always return false.
 */
var no = function (a, b, c) { return false; };

/* eslint-enable no-unused-vars */

/**
 * Return the same value.
 */
var identity = function (_) { return _; };

/**
 * Check if two values are loosely equal - that is,
 * if they are plain objects, do they have the same shape?
 */
function looseEqual (a, b) {
  if (a === b) { return true }
  var isObjectA = isObject(a);
  var isObjectB = isObject(b);
  if (isObjectA && isObjectB) {
    try {
      var isArrayA = Array.isArray(a);
      var isArrayB = Array.isArray(b);
      if (isArrayA && isArrayB) {
        return a.length === b.length && a.every(function (e, i) {
          return looseEqual(e, b[i])
        })
      } else if (a instanceof Date && b instanceof Date) {
        return a.getTime() === b.getTime()
      } else if (!isArrayA && !isArrayB) {
        var keysA = Object.keys(a);
        var keysB = Object.keys(b);
        return keysA.length === keysB.length && keysA.every(function (key) {
          return looseEqual(a[key], b[key])
        })
      } else {
        /* istanbul ignore next */
        return false
      }
    } catch (e) {
      /* istanbul ignore next */
      return false
    }
  } else if (!isObjectA && !isObjectB) {
    return String(a) === String(b)
  } else {
    return false
  }
}

/**
 * Return the first index at which a loosely equal value can be
 * found in the array (if value is a plain object, the array must
 * contain an object of the same shape), or -1 if it is not present.
 */
function looseIndexOf (arr, val) {
  for (var i = 0; i < arr.length; i++) {
    if (looseEqual(arr[i], val)) { return i }
  }
  return -1
}

/**
 * Ensure a function is called only once.
 */
function once (fn) {
  var called = false;
  return function () {
    if (!called) {
      called = true;
      fn.apply(this, arguments);
    }
  }
}

var ASSET_TYPES = [
  'component',
  'directive',
  'filter'
];

var LIFECYCLE_HOOKS = [
  'beforeCreate',
  'created',
  'beforeMount',
  'mounted',
  'beforeUpdate',
  'updated',
  'beforeDestroy',
  'destroyed',
  'activated',
  'deactivated',
  'errorCaptured',
  'serverPrefetch'
];

/*  */



var config = ({
  /**
   * Option merge strategies (used in core/util/options)
   */
  // $flow-disable-line
  optionMergeStrategies: Object.create(null),

  /**
   * Whether to suppress warnings.
   */
  silent: false,

  /**
   * Show production mode tip message on boot?
   */
  productionTip: "development" !== 'production',

  /**
   * Whether to enable devtools
   */
  devtools: "development" !== 'production',

  /**
   * Whether to record perf
   */
  performance: false,

  /**
   * Error handler for watcher errors
   */
  errorHandler: null,

  /**
   * Warn handler for watcher warns
   */
  warnHandler: null,

  /**
   * Ignore certain custom elements
   */
  ignoredElements: [],

  /**
   * Custom user key aliases for v-on
   */
  // $flow-disable-line
  keyCodes: Object.create(null),

  /**
   * Check if a tag is reserved so that it cannot be registered as a
   * component. This is platform-dependent and may be overwritten.
   */
  isReservedTag: no,

  /**
   * Check if an attribute is reserved so that it cannot be used as a component
   * prop. This is platform-dependent and may be overwritten.
   */
  isReservedAttr: no,

  /**
   * Check if a tag is an unknown element.
   * Platform-dependent.
   */
  isUnknownElement: no,

  /**
   * Get the namespace of an element
   */
  getTagNamespace: noop,

  /**
   * Parse the real tag name for the specific platform.
   */
  parsePlatformTagName: identity,

  /**
   * Check if an attribute must be bound using property, e.g. value
   * Platform-dependent.
   */
  mustUseProp: no,

  /**
   * Perform updates asynchronously. Intended to be used by Vue Test Utils
   * This will significantly reduce performance if set to false.
   */
  async: true,

  /**
   * Exposed for legacy reasons
   */
  _lifecycleHooks: LIFECYCLE_HOOKS
});

/*  */

/**
 * unicode letters used for parsing html tags, component names and property paths.
 * using https://www.w3.org/TR/html53/semantics-scripting.html#potentialcustomelementname
 * skipping \u10000-\uEFFFF due to it freezing up PhantomJS
 */
var unicodeRegExp = /a-zA-Z\u00B7\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u037D\u037F-\u1FFF\u200C-\u200D\u203F-\u2040\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD/;

/**
 * Check if a string starts with $ or _
 */
function isReserved (str) {
  var c = (str + '').charCodeAt(0);
  return c === 0x24 || c === 0x5F
}

/**
 * Define a property.
 */
function def (obj, key, val, enumerable) {
  Object.defineProperty(obj, key, {
    value: val,
    enumerable: !!enumerable,
    writable: true,
    configurable: true
  });
}

/**
 * Parse simple path.
 */
var bailRE = new RegExp(("[^" + (unicodeRegExp.source) + ".$_\\d]"));
function parsePath (path) {
  if (bailRE.test(path)) {
    return
  }
  var segments = path.split('.');
  return function (obj) {
    for (var i = 0; i < segments.length; i++) {
      if (!obj) { return }
      obj = obj[segments[i]];
    }
    return obj
  }
}

/*  */

// can we use __proto__?
var hasProto = '__proto__' in {};

// Browser environment sniffing
var inBrowser = typeof window !== 'undefined';
var inWeex = typeof WXEnvironment !== 'undefined' && !!WXEnvironment.platform;
var weexPlatform = inWeex && WXEnvironment.platform.toLowerCase();
var UA = inBrowser && window.navigator && window.navigator.userAgent && window.navigator.userAgent.toLowerCase();
var isIE = UA && /msie|trident/.test(UA);
var isIE9 = UA && UA.indexOf('msie 9.0') > 0;
var isEdge = UA && UA.indexOf('edge/') > 0;
var isAndroid = (UA && UA.indexOf('android') > 0) || (weexPlatform === 'android');
var isIOS = (UA && /iphone|ipad|ipod|ios/.test(UA)) || (weexPlatform === 'ios');
var isChrome = UA && /chrome\/\d+/.test(UA) && !isEdge;
var isPhantomJS = UA && /phantomjs/.test(UA);
var isFF = UA && UA.match(/firefox\/(\d+)/);

// Firefox has a "watch" function on Object.prototype...
var nativeWatch = ({}).watch;
if (inBrowser) {
  try {
    var opts = {};
    Object.defineProperty(opts, 'passive', ({
      get: function get () {
      }
    })); // https://github.com/facebook/flow/issues/285
    window.addEventListener('test-passive', null, opts);
  } catch (e) {}
}

// this needs to be lazy-evaled because vue may be required before
// vue-server-renderer can set VUE_ENV
var _isServer;
var isServerRendering = function () {
  if (_isServer === undefined) {
    /* istanbul ignore if */
    if (!inBrowser && !inWeex && typeof global !== 'undefined') {
      // detect presence of vue-server-renderer and avoid
      // Webpack shimming the process
      _isServer = global['process'] && global['process'].env.VUE_ENV === 'server';
    } else {
      _isServer = false;
    }
  }
  return _isServer
};

// detect devtools
var devtools = inBrowser && window.__VUE_DEVTOOLS_GLOBAL_HOOK__;

/* istanbul ignore next */
function isNative (Ctor) {
  return typeof Ctor === 'function' && /native code/.test(Ctor.toString())
}

var hasSymbol =
  typeof Symbol !== 'undefined' && isNative(Symbol) &&
  typeof Reflect !== 'undefined' && isNative(Reflect.ownKeys);

var _Set;
/* istanbul ignore if */ // $flow-disable-line
if (typeof Set !== 'undefined' && isNative(Set)) {
  // use native Set when available.
  _Set = Set;
} else {
  // a non-standard Set polyfill that only works with primitive keys.
  _Set = /*@__PURE__*/(function () {
    function Set () {
      this.set = Object.create(null);
    }
    Set.prototype.has = function has (key) {
      return this.set[key] === true
    };
    Set.prototype.add = function add (key) {
      this.set[key] = true;
    };
    Set.prototype.clear = function clear () {
      this.set = Object.create(null);
    };

    return Set;
  }());
}

/*  */

var warn = noop;
var tip = noop;
var generateComponentTrace = (noop); // work around flow check
var formatComponentName = (noop);

if (true) {
  var hasConsole = typeof console !== 'undefined';
  var classifyRE = /(?:^|[-_])(\w)/g;
  var classify = function (str) { return str
    .replace(classifyRE, function (c) { return c.toUpperCase(); })
    .replace(/[-_]/g, ''); };

  warn = function (msg, vm) {
    var trace = vm ? generateComponentTrace(vm) : '';

    if (config.warnHandler) {
      config.warnHandler.call(null, msg, vm, trace);
    } else if (hasConsole && (!config.silent)) {
      console.error(("[Vue warn]: " + msg + trace));
    }
  };

  tip = function (msg, vm) {
    if (hasConsole && (!config.silent)) {
      console.warn("[Vue tip]: " + msg + (
        vm ? generateComponentTrace(vm) : ''
      ));
    }
  };

  formatComponentName = function (vm, includeFile) {
    if (vm.$root === vm) {
      if (vm.$options && vm.$options.__file) { // fixed by xxxxxx
        return ('') + vm.$options.__file
      }
      return '<Root>'
    }
    var options = typeof vm === 'function' && vm.cid != null
      ? vm.options
      : vm._isVue
        ? vm.$options || vm.constructor.options
        : vm;
    var name = options.name || options._componentTag;
    var file = options.__file;
    if (!name && file) {
      var match = file.match(/([^/\\]+)\.vue$/);
      name = match && match[1];
    }

    return (
      (name ? ("<" + (classify(name)) + ">") : "<Anonymous>") +
      (file && includeFile !== false ? (" at " + file) : '')
    )
  };

  var repeat = function (str, n) {
    var res = '';
    while (n) {
      if (n % 2 === 1) { res += str; }
      if (n > 1) { str += str; }
      n >>= 1;
    }
    return res
  };

  generateComponentTrace = function (vm) {
    if (vm._isVue && vm.$parent) {
      var tree = [];
      var currentRecursiveSequence = 0;
      while (vm && vm.$options.name !== 'PageBody') {
        if (tree.length > 0) {
          var last = tree[tree.length - 1];
          if (last.constructor === vm.constructor) {
            currentRecursiveSequence++;
            vm = vm.$parent;
            continue
          } else if (currentRecursiveSequence > 0) {
            tree[tree.length - 1] = [last, currentRecursiveSequence];
            currentRecursiveSequence = 0;
          }
        }
        !vm.$options.isReserved && tree.push(vm);
        vm = vm.$parent;
      }
      return '\n\nfound in\n\n' + tree
        .map(function (vm, i) { return ("" + (i === 0 ? '---> ' : repeat(' ', 5 + i * 2)) + (Array.isArray(vm)
            ? ((formatComponentName(vm[0])) + "... (" + (vm[1]) + " recursive calls)")
            : formatComponentName(vm))); })
        .join('\n')
    } else {
      return ("\n\n(found in " + (formatComponentName(vm)) + ")")
    }
  };
}

/*  */

var uid = 0;

/**
 * A dep is an observable that can have multiple
 * directives subscribing to it.
 */
var Dep = function Dep () {
  this.id = uid++;
  this.subs = [];
};

Dep.prototype.addSub = function addSub (sub) {
  this.subs.push(sub);
};

Dep.prototype.removeSub = function removeSub (sub) {
  remove(this.subs, sub);
};

Dep.prototype.depend = function depend () {
  if (Dep.SharedObject.target) {
    Dep.SharedObject.target.addDep(this);
  }
};

Dep.prototype.notify = function notify () {
  // stabilize the subscriber list first
  var subs = this.subs.slice();
  if ( true && !config.async) {
    // subs aren't sorted in scheduler if not running async
    // we need to sort them now to make sure they fire in correct
    // order
    subs.sort(function (a, b) { return a.id - b.id; });
  }
  for (var i = 0, l = subs.length; i < l; i++) {
    subs[i].update();
  }
};

// The current target watcher being evaluated.
// This is globally unique because only one watcher
// can be evaluated at a time.
// fixed by xxxxxx (nvue shared vuex)
/* eslint-disable no-undef */
Dep.SharedObject = {};
Dep.SharedObject.target = null;
Dep.SharedObject.targetStack = [];

function pushTarget (target) {
  Dep.SharedObject.targetStack.push(target);
  Dep.SharedObject.target = target;
  Dep.target = target;
}

function popTarget () {
  Dep.SharedObject.targetStack.pop();
  Dep.SharedObject.target = Dep.SharedObject.targetStack[Dep.SharedObject.targetStack.length - 1];
  Dep.target = Dep.SharedObject.target;
}

/*  */

var VNode = function VNode (
  tag,
  data,
  children,
  text,
  elm,
  context,
  componentOptions,
  asyncFactory
) {
  this.tag = tag;
  this.data = data;
  this.children = children;
  this.text = text;
  this.elm = elm;
  this.ns = undefined;
  this.context = context;
  this.fnContext = undefined;
  this.fnOptions = undefined;
  this.fnScopeId = undefined;
  this.key = data && data.key;
  this.componentOptions = componentOptions;
  this.componentInstance = undefined;
  this.parent = undefined;
  this.raw = false;
  this.isStatic = false;
  this.isRootInsert = true;
  this.isComment = false;
  this.isCloned = false;
  this.isOnce = false;
  this.asyncFactory = asyncFactory;
  this.asyncMeta = undefined;
  this.isAsyncPlaceholder = false;
};

var prototypeAccessors = { child: { configurable: true } };

// DEPRECATED: alias for componentInstance for backwards compat.
/* istanbul ignore next */
prototypeAccessors.child.get = function () {
  return this.componentInstance
};

Object.defineProperties( VNode.prototype, prototypeAccessors );

var createEmptyVNode = function (text) {
  if ( text === void 0 ) text = '';

  var node = new VNode();
  node.text = text;
  node.isComment = true;
  return node
};

function createTextVNode (val) {
  return new VNode(undefined, undefined, undefined, String(val))
}

// optimized shallow clone
// used for static nodes and slot nodes because they may be reused across
// multiple renders, cloning them avoids errors when DOM manipulations rely
// on their elm reference.
function cloneVNode (vnode) {
  var cloned = new VNode(
    vnode.tag,
    vnode.data,
    // #7975
    // clone children array to avoid mutating original in case of cloning
    // a child.
    vnode.children && vnode.children.slice(),
    vnode.text,
    vnode.elm,
    vnode.context,
    vnode.componentOptions,
    vnode.asyncFactory
  );
  cloned.ns = vnode.ns;
  cloned.isStatic = vnode.isStatic;
  cloned.key = vnode.key;
  cloned.isComment = vnode.isComment;
  cloned.fnContext = vnode.fnContext;
  cloned.fnOptions = vnode.fnOptions;
  cloned.fnScopeId = vnode.fnScopeId;
  cloned.asyncMeta = vnode.asyncMeta;
  cloned.isCloned = true;
  return cloned
}

/*
 * not type checking this file because flow doesn't play well with
 * dynamically accessing methods on Array prototype
 */

var arrayProto = Array.prototype;
var arrayMethods = Object.create(arrayProto);

var methodsToPatch = [
  'push',
  'pop',
  'shift',
  'unshift',
  'splice',
  'sort',
  'reverse'
];

/**
 * Intercept mutating methods and emit events
 */
methodsToPatch.forEach(function (method) {
  // cache original method
  var original = arrayProto[method];
  def(arrayMethods, method, function mutator () {
    var args = [], len = arguments.length;
    while ( len-- ) args[ len ] = arguments[ len ];

    var result = original.apply(this, args);
    var ob = this.__ob__;
    var inserted;
    switch (method) {
      case 'push':
      case 'unshift':
        inserted = args;
        break
      case 'splice':
        inserted = args.slice(2);
        break
    }
    if (inserted) { ob.observeArray(inserted); }
    // notify change
    ob.dep.notify();
    return result
  });
});

/*  */

var arrayKeys = Object.getOwnPropertyNames(arrayMethods);

/**
 * In some cases we may want to disable observation inside a component's
 * update computation.
 */
var shouldObserve = true;

function toggleObserving (value) {
  shouldObserve = value;
}

/**
 * Observer class that is attached to each observed
 * object. Once attached, the observer converts the target
 * object's property keys into getter/setters that
 * collect dependencies and dispatch updates.
 */
var Observer = function Observer (value) {
  this.value = value;
  this.dep = new Dep();
  this.vmCount = 0;
  def(value, '__ob__', this);
  if (Array.isArray(value)) {
    if (hasProto) {
      {// fixed by xxxxxx 微信小程序使用 plugins 之后，数组方法被直接挂载到了数组对象上，需要执行 copyAugment 逻辑
        if(value.push !== value.__proto__.push){
          copyAugment(value, arrayMethods, arrayKeys);
        } else {
          protoAugment(value, arrayMethods);
        }
      }
    } else {
      copyAugment(value, arrayMethods, arrayKeys);
    }
    this.observeArray(value);
  } else {
    this.walk(value);
  }
};

/**
 * Walk through all properties and convert them into
 * getter/setters. This method should only be called when
 * value type is Object.
 */
Observer.prototype.walk = function walk (obj) {
  var keys = Object.keys(obj);
  for (var i = 0; i < keys.length; i++) {
    defineReactive$$1(obj, keys[i]);
  }
};

/**
 * Observe a list of Array items.
 */
Observer.prototype.observeArray = function observeArray (items) {
  for (var i = 0, l = items.length; i < l; i++) {
    observe(items[i]);
  }
};

// helpers

/**
 * Augment a target Object or Array by intercepting
 * the prototype chain using __proto__
 */
function protoAugment (target, src) {
  /* eslint-disable no-proto */
  target.__proto__ = src;
  /* eslint-enable no-proto */
}

/**
 * Augment a target Object or Array by defining
 * hidden properties.
 */
/* istanbul ignore next */
function copyAugment (target, src, keys) {
  for (var i = 0, l = keys.length; i < l; i++) {
    var key = keys[i];
    def(target, key, src[key]);
  }
}

/**
 * Attempt to create an observer instance for a value,
 * returns the new observer if successfully observed,
 * or the existing observer if the value already has one.
 */
function observe (value, asRootData) {
  if (!isObject(value) || value instanceof VNode) {
    return
  }
  var ob;
  if (hasOwn(value, '__ob__') && value.__ob__ instanceof Observer) {
    ob = value.__ob__;
  } else if (
    shouldObserve &&
    !isServerRendering() &&
    (Array.isArray(value) || isPlainObject(value)) &&
    Object.isExtensible(value) &&
    !value._isVue &&
    !value.__v_isMPComponent
  ) {
    ob = new Observer(value);
  }
  if (asRootData && ob) {
    ob.vmCount++;
  }
  return ob
}

/**
 * Define a reactive property on an Object.
 */
function defineReactive$$1 (
  obj,
  key,
  val,
  customSetter,
  shallow
) {
  var dep = new Dep();

  var property = Object.getOwnPropertyDescriptor(obj, key);
  if (property && property.configurable === false) {
    return
  }

  // cater for pre-defined getter/setters
  var getter = property && property.get;
  var setter = property && property.set;
  if ((!getter || setter) && arguments.length === 2) {
    val = obj[key];
  }

  var childOb = !shallow && observe(val);
  Object.defineProperty(obj, key, {
    enumerable: true,
    configurable: true,
    get: function reactiveGetter () {
      var value = getter ? getter.call(obj) : val;
      if (Dep.SharedObject.target) { // fixed by xxxxxx
        dep.depend();
        if (childOb) {
          childOb.dep.depend();
          if (Array.isArray(value)) {
            dependArray(value);
          }
        }
      }
      return value
    },
    set: function reactiveSetter (newVal) {
      var value = getter ? getter.call(obj) : val;
      /* eslint-disable no-self-compare */
      if (newVal === value || (newVal !== newVal && value !== value)) {
        return
      }
      /* eslint-enable no-self-compare */
      if ( true && customSetter) {
        customSetter();
      }
      // #7981: for accessor properties without setter
      if (getter && !setter) { return }
      if (setter) {
        setter.call(obj, newVal);
      } else {
        val = newVal;
      }
      childOb = !shallow && observe(newVal);
      dep.notify();
    }
  });
}

/**
 * Set a property on an object. Adds the new property and
 * triggers change notification if the property doesn't
 * already exist.
 */
function set (target, key, val) {
  if ( true &&
    (isUndef(target) || isPrimitive(target))
  ) {
    warn(("Cannot set reactive property on undefined, null, or primitive value: " + ((target))));
  }
  if (Array.isArray(target) && isValidArrayIndex(key)) {
    target.length = Math.max(target.length, key);
    target.splice(key, 1, val);
    return val
  }
  if (key in target && !(key in Object.prototype)) {
    target[key] = val;
    return val
  }
  var ob = (target).__ob__;
  if (target._isVue || (ob && ob.vmCount)) {
     true && warn(
      'Avoid adding reactive properties to a Vue instance or its root $data ' +
      'at runtime - declare it upfront in the data option.'
    );
    return val
  }
  if (!ob) {
    target[key] = val;
    return val
  }
  defineReactive$$1(ob.value, key, val);
  ob.dep.notify();
  return val
}

/**
 * Delete a property and trigger change if necessary.
 */
function del (target, key) {
  if ( true &&
    (isUndef(target) || isPrimitive(target))
  ) {
    warn(("Cannot delete reactive property on undefined, null, or primitive value: " + ((target))));
  }
  if (Array.isArray(target) && isValidArrayIndex(key)) {
    target.splice(key, 1);
    return
  }
  var ob = (target).__ob__;
  if (target._isVue || (ob && ob.vmCount)) {
     true && warn(
      'Avoid deleting properties on a Vue instance or its root $data ' +
      '- just set it to null.'
    );
    return
  }
  if (!hasOwn(target, key)) {
    return
  }
  delete target[key];
  if (!ob) {
    return
  }
  ob.dep.notify();
}

/**
 * Collect dependencies on array elements when the array is touched, since
 * we cannot intercept array element access like property getters.
 */
function dependArray (value) {
  for (var e = (void 0), i = 0, l = value.length; i < l; i++) {
    e = value[i];
    e && e.__ob__ && e.__ob__.dep.depend();
    if (Array.isArray(e)) {
      dependArray(e);
    }
  }
}

/*  */

/**
 * Option overwriting strategies are functions that handle
 * how to merge a parent option value and a child option
 * value into the final value.
 */
var strats = config.optionMergeStrategies;

/**
 * Options with restrictions
 */
if (true) {
  strats.el = strats.propsData = function (parent, child, vm, key) {
    if (!vm) {
      warn(
        "option \"" + key + "\" can only be used during instance " +
        'creation with the `new` keyword.'
      );
    }
    return defaultStrat(parent, child)
  };
}

/**
 * Helper that recursively merges two data objects together.
 */
function mergeData (to, from) {
  if (!from) { return to }
  var key, toVal, fromVal;

  var keys = hasSymbol
    ? Reflect.ownKeys(from)
    : Object.keys(from);

  for (var i = 0; i < keys.length; i++) {
    key = keys[i];
    // in case the object is already observed...
    if (key === '__ob__') { continue }
    toVal = to[key];
    fromVal = from[key];
    if (!hasOwn(to, key)) {
      set(to, key, fromVal);
    } else if (
      toVal !== fromVal &&
      isPlainObject(toVal) &&
      isPlainObject(fromVal)
    ) {
      mergeData(toVal, fromVal);
    }
  }
  return to
}

/**
 * Data
 */
function mergeDataOrFn (
  parentVal,
  childVal,
  vm
) {
  if (!vm) {
    // in a Vue.extend merge, both should be functions
    if (!childVal) {
      return parentVal
    }
    if (!parentVal) {
      return childVal
    }
    // when parentVal & childVal are both present,
    // we need to return a function that returns the
    // merged result of both functions... no need to
    // check if parentVal is a function here because
    // it has to be a function to pass previous merges.
    return function mergedDataFn () {
      return mergeData(
        typeof childVal === 'function' ? childVal.call(this, this) : childVal,
        typeof parentVal === 'function' ? parentVal.call(this, this) : parentVal
      )
    }
  } else {
    return function mergedInstanceDataFn () {
      // instance merge
      var instanceData = typeof childVal === 'function'
        ? childVal.call(vm, vm)
        : childVal;
      var defaultData = typeof parentVal === 'function'
        ? parentVal.call(vm, vm)
        : parentVal;
      if (instanceData) {
        return mergeData(instanceData, defaultData)
      } else {
        return defaultData
      }
    }
  }
}

strats.data = function (
  parentVal,
  childVal,
  vm
) {
  if (!vm) {
    if (childVal && typeof childVal !== 'function') {
       true && warn(
        'The "data" option should be a function ' +
        'that returns a per-instance value in component ' +
        'definitions.',
        vm
      );

      return parentVal
    }
    return mergeDataOrFn(parentVal, childVal)
  }

  return mergeDataOrFn(parentVal, childVal, vm)
};

/**
 * Hooks and props are merged as arrays.
 */
function mergeHook (
  parentVal,
  childVal
) {
  var res = childVal
    ? parentVal
      ? parentVal.concat(childVal)
      : Array.isArray(childVal)
        ? childVal
        : [childVal]
    : parentVal;
  return res
    ? dedupeHooks(res)
    : res
}

function dedupeHooks (hooks) {
  var res = [];
  for (var i = 0; i < hooks.length; i++) {
    if (res.indexOf(hooks[i]) === -1) {
      res.push(hooks[i]);
    }
  }
  return res
}

LIFECYCLE_HOOKS.forEach(function (hook) {
  strats[hook] = mergeHook;
});

/**
 * Assets
 *
 * When a vm is present (instance creation), we need to do
 * a three-way merge between constructor options, instance
 * options and parent options.
 */
function mergeAssets (
  parentVal,
  childVal,
  vm,
  key
) {
  var res = Object.create(parentVal || null);
  if (childVal) {
     true && assertObjectType(key, childVal, vm);
    return extend(res, childVal)
  } else {
    return res
  }
}

ASSET_TYPES.forEach(function (type) {
  strats[type + 's'] = mergeAssets;
});

/**
 * Watchers.
 *
 * Watchers hashes should not overwrite one
 * another, so we merge them as arrays.
 */
strats.watch = function (
  parentVal,
  childVal,
  vm,
  key
) {
  // work around Firefox's Object.prototype.watch...
  if (parentVal === nativeWatch) { parentVal = undefined; }
  if (childVal === nativeWatch) { childVal = undefined; }
  /* istanbul ignore if */
  if (!childVal) { return Object.create(parentVal || null) }
  if (true) {
    assertObjectType(key, childVal, vm);
  }
  if (!parentVal) { return childVal }
  var ret = {};
  extend(ret, parentVal);
  for (var key$1 in childVal) {
    var parent = ret[key$1];
    var child = childVal[key$1];
    if (parent && !Array.isArray(parent)) {
      parent = [parent];
    }
    ret[key$1] = parent
      ? parent.concat(child)
      : Array.isArray(child) ? child : [child];
  }
  return ret
};

/**
 * Other object hashes.
 */
strats.props =
strats.methods =
strats.inject =
strats.computed = function (
  parentVal,
  childVal,
  vm,
  key
) {
  if (childVal && "development" !== 'production') {
    assertObjectType(key, childVal, vm);
  }
  if (!parentVal) { return childVal }
  var ret = Object.create(null);
  extend(ret, parentVal);
  if (childVal) { extend(ret, childVal); }
  return ret
};
strats.provide = mergeDataOrFn;

/**
 * Default strategy.
 */
var defaultStrat = function (parentVal, childVal) {
  return childVal === undefined
    ? parentVal
    : childVal
};

/**
 * Validate component names
 */
function checkComponents (options) {
  for (var key in options.components) {
    validateComponentName(key);
  }
}

function validateComponentName (name) {
  if (!new RegExp(("^[a-zA-Z][\\-\\.0-9_" + (unicodeRegExp.source) + "]*$")).test(name)) {
    warn(
      'Invalid component name: "' + name + '". Component names ' +
      'should conform to valid custom element name in html5 specification.'
    );
  }
  if (isBuiltInTag(name) || config.isReservedTag(name)) {
    warn(
      'Do not use built-in or reserved HTML elements as component ' +
      'id: ' + name
    );
  }
}

/**
 * Ensure all props option syntax are normalized into the
 * Object-based format.
 */
function normalizeProps (options, vm) {
  var props = options.props;
  if (!props) { return }
  var res = {};
  var i, val, name;
  if (Array.isArray(props)) {
    i = props.length;
    while (i--) {
      val = props[i];
      if (typeof val === 'string') {
        name = camelize(val);
        res[name] = { type: null };
      } else if (true) {
        warn('props must be strings when using array syntax.');
      }
    }
  } else if (isPlainObject(props)) {
    for (var key in props) {
      val = props[key];
      name = camelize(key);
      res[name] = isPlainObject(val)
        ? val
        : { type: val };
    }
  } else if (true) {
    warn(
      "Invalid value for option \"props\": expected an Array or an Object, " +
      "but got " + (toRawType(props)) + ".",
      vm
    );
  }
  options.props = res;
}

/**
 * Normalize all injections into Object-based format
 */
function normalizeInject (options, vm) {
  var inject = options.inject;
  if (!inject) { return }
  var normalized = options.inject = {};
  if (Array.isArray(inject)) {
    for (var i = 0; i < inject.length; i++) {
      normalized[inject[i]] = { from: inject[i] };
    }
  } else if (isPlainObject(inject)) {
    for (var key in inject) {
      var val = inject[key];
      normalized[key] = isPlainObject(val)
        ? extend({ from: key }, val)
        : { from: val };
    }
  } else if (true) {
    warn(
      "Invalid value for option \"inject\": expected an Array or an Object, " +
      "but got " + (toRawType(inject)) + ".",
      vm
    );
  }
}

/**
 * Normalize raw function directives into object format.
 */
function normalizeDirectives (options) {
  var dirs = options.directives;
  if (dirs) {
    for (var key in dirs) {
      var def$$1 = dirs[key];
      if (typeof def$$1 === 'function') {
        dirs[key] = { bind: def$$1, update: def$$1 };
      }
    }
  }
}

function assertObjectType (name, value, vm) {
  if (!isPlainObject(value)) {
    warn(
      "Invalid value for option \"" + name + "\": expected an Object, " +
      "but got " + (toRawType(value)) + ".",
      vm
    );
  }
}

/**
 * Merge two option objects into a new one.
 * Core utility used in both instantiation and inheritance.
 */
function mergeOptions (
  parent,
  child,
  vm
) {
  if (true) {
    checkComponents(child);
  }

  if (typeof child === 'function') {
    child = child.options;
  }

  normalizeProps(child, vm);
  normalizeInject(child, vm);
  normalizeDirectives(child);

  // Apply extends and mixins on the child options,
  // but only if it is a raw options object that isn't
  // the result of another mergeOptions call.
  // Only merged options has the _base property.
  if (!child._base) {
    if (child.extends) {
      parent = mergeOptions(parent, child.extends, vm);
    }
    if (child.mixins) {
      for (var i = 0, l = child.mixins.length; i < l; i++) {
        parent = mergeOptions(parent, child.mixins[i], vm);
      }
    }
  }

  var options = {};
  var key;
  for (key in parent) {
    mergeField(key);
  }
  for (key in child) {
    if (!hasOwn(parent, key)) {
      mergeField(key);
    }
  }
  function mergeField (key) {
    var strat = strats[key] || defaultStrat;
    options[key] = strat(parent[key], child[key], vm, key);
  }
  return options
}

/**
 * Resolve an asset.
 * This function is used because child instances need access
 * to assets defined in its ancestor chain.
 */
function resolveAsset (
  options,
  type,
  id,
  warnMissing
) {
  /* istanbul ignore if */
  if (typeof id !== 'string') {
    return
  }
  var assets = options[type];
  // check local registration variations first
  if (hasOwn(assets, id)) { return assets[id] }
  var camelizedId = camelize(id);
  if (hasOwn(assets, camelizedId)) { return assets[camelizedId] }
  var PascalCaseId = capitalize(camelizedId);
  if (hasOwn(assets, PascalCaseId)) { return assets[PascalCaseId] }
  // fallback to prototype chain
  var res = assets[id] || assets[camelizedId] || assets[PascalCaseId];
  if ( true && warnMissing && !res) {
    warn(
      'Failed to resolve ' + type.slice(0, -1) + ': ' + id,
      options
    );
  }
  return res
}

/*  */



function validateProp (
  key,
  propOptions,
  propsData,
  vm
) {
  var prop = propOptions[key];
  var absent = !hasOwn(propsData, key);
  var value = propsData[key];
  // boolean casting
  var booleanIndex = getTypeIndex(Boolean, prop.type);
  if (booleanIndex > -1) {
    if (absent && !hasOwn(prop, 'default')) {
      value = false;
    } else if (value === '' || value === hyphenate(key)) {
      // only cast empty string / same name to boolean if
      // boolean has higher priority
      var stringIndex = getTypeIndex(String, prop.type);
      if (stringIndex < 0 || booleanIndex < stringIndex) {
        value = true;
      }
    }
  }
  // check default value
  if (value === undefined) {
    value = getPropDefaultValue(vm, prop, key);
    // since the default value is a fresh copy,
    // make sure to observe it.
    var prevShouldObserve = shouldObserve;
    toggleObserving(true);
    observe(value);
    toggleObserving(prevShouldObserve);
  }
  if (
    true
  ) {
    assertProp(prop, key, value, vm, absent);
  }
  return value
}

/**
 * Get the default value of a prop.
 */
function getPropDefaultValue (vm, prop, key) {
  // no default, return undefined
  if (!hasOwn(prop, 'default')) {
    return undefined
  }
  var def = prop.default;
  // warn against non-factory defaults for Object & Array
  if ( true && isObject(def)) {
    warn(
      'Invalid default value for prop "' + key + '": ' +
      'Props with type Object/Array must use a factory function ' +
      'to return the default value.',
      vm
    );
  }
  // the raw prop value was also undefined from previous render,
  // return previous default value to avoid unnecessary watcher trigger
  if (vm && vm.$options.propsData &&
    vm.$options.propsData[key] === undefined &&
    vm._props[key] !== undefined
  ) {
    return vm._props[key]
  }
  // call factory function for non-Function types
  // a value is Function if its prototype is function even across different execution context
  return typeof def === 'function' && getType(prop.type) !== 'Function'
    ? def.call(vm)
    : def
}

/**
 * Assert whether a prop is valid.
 */
function assertProp (
  prop,
  name,
  value,
  vm,
  absent
) {
  if (prop.required && absent) {
    warn(
      'Missing required prop: "' + name + '"',
      vm
    );
    return
  }
  if (value == null && !prop.required) {
    return
  }
  var type = prop.type;
  var valid = !type || type === true;
  var expectedTypes = [];
  if (type) {
    if (!Array.isArray(type)) {
      type = [type];
    }
    for (var i = 0; i < type.length && !valid; i++) {
      var assertedType = assertType(value, type[i]);
      expectedTypes.push(assertedType.expectedType || '');
      valid = assertedType.valid;
    }
  }

  if (!valid) {
    warn(
      getInvalidTypeMessage(name, value, expectedTypes),
      vm
    );
    return
  }
  var validator = prop.validator;
  if (validator) {
    if (!validator(value)) {
      warn(
        'Invalid prop: custom validator check failed for prop "' + name + '".',
        vm
      );
    }
  }
}

var simpleCheckRE = /^(String|Number|Boolean|Function|Symbol)$/;

function assertType (value, type) {
  var valid;
  var expectedType = getType(type);
  if (simpleCheckRE.test(expectedType)) {
    var t = typeof value;
    valid = t === expectedType.toLowerCase();
    // for primitive wrapper objects
    if (!valid && t === 'object') {
      valid = value instanceof type;
    }
  } else if (expectedType === 'Object') {
    valid = isPlainObject(value);
  } else if (expectedType === 'Array') {
    valid = Array.isArray(value);
  } else {
    valid = value instanceof type;
  }
  return {
    valid: valid,
    expectedType: expectedType
  }
}

/**
 * Use function string name to check built-in types,
 * because a simple equality check will fail when running
 * across different vms / iframes.
 */
function getType (fn) {
  var match = fn && fn.toString().match(/^\s*function (\w+)/);
  return match ? match[1] : ''
}

function isSameType (a, b) {
  return getType(a) === getType(b)
}

function getTypeIndex (type, expectedTypes) {
  if (!Array.isArray(expectedTypes)) {
    return isSameType(expectedTypes, type) ? 0 : -1
  }
  for (var i = 0, len = expectedTypes.length; i < len; i++) {
    if (isSameType(expectedTypes[i], type)) {
      return i
    }
  }
  return -1
}

function getInvalidTypeMessage (name, value, expectedTypes) {
  var message = "Invalid prop: type check failed for prop \"" + name + "\"." +
    " Expected " + (expectedTypes.map(capitalize).join(', '));
  var expectedType = expectedTypes[0];
  var receivedType = toRawType(value);
  var expectedValue = styleValue(value, expectedType);
  var receivedValue = styleValue(value, receivedType);
  // check if we need to specify expected value
  if (expectedTypes.length === 1 &&
      isExplicable(expectedType) &&
      !isBoolean(expectedType, receivedType)) {
    message += " with value " + expectedValue;
  }
  message += ", got " + receivedType + " ";
  // check if we need to specify received value
  if (isExplicable(receivedType)) {
    message += "with value " + receivedValue + ".";
  }
  return message
}

function styleValue (value, type) {
  if (type === 'String') {
    return ("\"" + value + "\"")
  } else if (type === 'Number') {
    return ("" + (Number(value)))
  } else {
    return ("" + value)
  }
}

function isExplicable (value) {
  var explicitTypes = ['string', 'number', 'boolean'];
  return explicitTypes.some(function (elem) { return value.toLowerCase() === elem; })
}

function isBoolean () {
  var args = [], len = arguments.length;
  while ( len-- ) args[ len ] = arguments[ len ];

  return args.some(function (elem) { return elem.toLowerCase() === 'boolean'; })
}

/*  */

function handleError (err, vm, info) {
  // Deactivate deps tracking while processing error handler to avoid possible infinite rendering.
  // See: https://github.com/vuejs/vuex/issues/1505
  pushTarget();
  try {
    if (vm) {
      var cur = vm;
      while ((cur = cur.$parent)) {
        var hooks = cur.$options.errorCaptured;
        if (hooks) {
          for (var i = 0; i < hooks.length; i++) {
            try {
              var capture = hooks[i].call(cur, err, vm, info) === false;
              if (capture) { return }
            } catch (e) {
              globalHandleError(e, cur, 'errorCaptured hook');
            }
          }
        }
      }
    }
    globalHandleError(err, vm, info);
  } finally {
    popTarget();
  }
}

function invokeWithErrorHandling (
  handler,
  context,
  args,
  vm,
  info
) {
  var res;
  try {
    res = args ? handler.apply(context, args) : handler.call(context);
    if (res && !res._isVue && isPromise(res) && !res._handled) {
      res.catch(function (e) { return handleError(e, vm, info + " (Promise/async)"); });
      // issue #9511
      // avoid catch triggering multiple times when nested calls
      res._handled = true;
    }
  } catch (e) {
    handleError(e, vm, info);
  }
  return res
}

function globalHandleError (err, vm, info) {
  if (config.errorHandler) {
    try {
      return config.errorHandler.call(null, err, vm, info)
    } catch (e) {
      // if the user intentionally throws the original error in the handler,
      // do not log it twice
      if (e !== err) {
        logError(e, null, 'config.errorHandler');
      }
    }
  }
  logError(err, vm, info);
}

function logError (err, vm, info) {
  if (true) {
    warn(("Error in " + info + ": \"" + (err.toString()) + "\""), vm);
  }
  /* istanbul ignore else */
  if ((inBrowser || inWeex) && typeof console !== 'undefined') {
    console.error(err);
  } else {
    throw err
  }
}

/*  */

var callbacks = [];
var pending = false;

function flushCallbacks () {
  pending = false;
  var copies = callbacks.slice(0);
  callbacks.length = 0;
  for (var i = 0; i < copies.length; i++) {
    copies[i]();
  }
}

// Here we have async deferring wrappers using microtasks.
// In 2.5 we used (macro) tasks (in combination with microtasks).
// However, it has subtle problems when state is changed right before repaint
// (e.g. #6813, out-in transitions).
// Also, using (macro) tasks in event handler would cause some weird behaviors
// that cannot be circumvented (e.g. #7109, #7153, #7546, #7834, #8109).
// So we now use microtasks everywhere, again.
// A major drawback of this tradeoff is that there are some scenarios
// where microtasks have too high a priority and fire in between supposedly
// sequential events (e.g. #4521, #6690, which have workarounds)
// or even between bubbling of the same event (#6566).
var timerFunc;

// The nextTick behavior leverages the microtask queue, which can be accessed
// via either native Promise.then or MutationObserver.
// MutationObserver has wider support, however it is seriously bugged in
// UIWebView in iOS >= 9.3.3 when triggered in touch event handlers. It
// completely stops working after triggering a few times... so, if native
// Promise is available, we will use it:
/* istanbul ignore next, $flow-disable-line */
if (typeof Promise !== 'undefined' && isNative(Promise)) {
  var p = Promise.resolve();
  timerFunc = function () {
    p.then(flushCallbacks);
    // In problematic UIWebViews, Promise.then doesn't completely break, but
    // it can get stuck in a weird state where callbacks are pushed into the
    // microtask queue but the queue isn't being flushed, until the browser
    // needs to do some other work, e.g. handle a timer. Therefore we can
    // "force" the microtask queue to be flushed by adding an empty timer.
    if (isIOS) { setTimeout(noop); }
  };
} else if (!isIE && typeof MutationObserver !== 'undefined' && (
  isNative(MutationObserver) ||
  // PhantomJS and iOS 7.x
  MutationObserver.toString() === '[object MutationObserverConstructor]'
)) {
  // Use MutationObserver where native Promise is not available,
  // e.g. PhantomJS, iOS7, Android 4.4
  // (#6466 MutationObserver is unreliable in IE11)
  var counter = 1;
  var observer = new MutationObserver(flushCallbacks);
  var textNode = document.createTextNode(String(counter));
  observer.observe(textNode, {
    characterData: true
  });
  timerFunc = function () {
    counter = (counter + 1) % 2;
    textNode.data = String(counter);
  };
} else if (typeof setImmediate !== 'undefined' && isNative(setImmediate)) {
  // Fallback to setImmediate.
  // Technically it leverages the (macro) task queue,
  // but it is still a better choice than setTimeout.
  timerFunc = function () {
    setImmediate(flushCallbacks);
  };
} else {
  // Fallback to setTimeout.
  timerFunc = function () {
    setTimeout(flushCallbacks, 0);
  };
}

function nextTick (cb, ctx) {
  var _resolve;
  callbacks.push(function () {
    if (cb) {
      try {
        cb.call(ctx);
      } catch (e) {
        handleError(e, ctx, 'nextTick');
      }
    } else if (_resolve) {
      _resolve(ctx);
    }
  });
  if (!pending) {
    pending = true;
    timerFunc();
  }
  // $flow-disable-line
  if (!cb && typeof Promise !== 'undefined') {
    return new Promise(function (resolve) {
      _resolve = resolve;
    })
  }
}

/*  */

/* not type checking this file because flow doesn't play well with Proxy */

var initProxy;

if (true) {
  var allowedGlobals = makeMap(
    'Infinity,undefined,NaN,isFinite,isNaN,' +
    'parseFloat,parseInt,decodeURI,decodeURIComponent,encodeURI,encodeURIComponent,' +
    'Math,Number,Date,Array,Object,Boolean,String,RegExp,Map,Set,JSON,Intl,' +
    'require' // for Webpack/Browserify
  );

  var warnNonPresent = function (target, key) {
    warn(
      "Property or method \"" + key + "\" is not defined on the instance but " +
      'referenced during render. Make sure that this property is reactive, ' +
      'either in the data option, or for class-based components, by ' +
      'initializing the property. ' +
      'See: https://vuejs.org/v2/guide/reactivity.html#Declaring-Reactive-Properties.',
      target
    );
  };

  var warnReservedPrefix = function (target, key) {
    warn(
      "Property \"" + key + "\" must be accessed with \"$data." + key + "\" because " +
      'properties starting with "$" or "_" are not proxied in the Vue instance to ' +
      'prevent conflicts with Vue internals. ' +
      'See: https://vuejs.org/v2/api/#data',
      target
    );
  };

  var hasProxy =
    typeof Proxy !== 'undefined' && isNative(Proxy);

  if (hasProxy) {
    var isBuiltInModifier = makeMap('stop,prevent,self,ctrl,shift,alt,meta,exact');
    config.keyCodes = new Proxy(config.keyCodes, {
      set: function set (target, key, value) {
        if (isBuiltInModifier(key)) {
          warn(("Avoid overwriting built-in modifier in config.keyCodes: ." + key));
          return false
        } else {
          target[key] = value;
          return true
        }
      }
    });
  }

  var hasHandler = {
    has: function has (target, key) {
      var has = key in target;
      var isAllowed = allowedGlobals(key) ||
        (typeof key === 'string' && key.charAt(0) === '_' && !(key in target.$data));
      if (!has && !isAllowed) {
        if (key in target.$data) { warnReservedPrefix(target, key); }
        else { warnNonPresent(target, key); }
      }
      return has || !isAllowed
    }
  };

  var getHandler = {
    get: function get (target, key) {
      if (typeof key === 'string' && !(key in target)) {
        if (key in target.$data) { warnReservedPrefix(target, key); }
        else { warnNonPresent(target, key); }
      }
      return target[key]
    }
  };

  initProxy = function initProxy (vm) {
    if (hasProxy) {
      // determine which proxy handler to use
      var options = vm.$options;
      var handlers = options.render && options.render._withStripped
        ? getHandler
        : hasHandler;
      vm._renderProxy = new Proxy(vm, handlers);
    } else {
      vm._renderProxy = vm;
    }
  };
}

/*  */

var seenObjects = new _Set();

/**
 * Recursively traverse an object to evoke all converted
 * getters, so that every nested property inside the object
 * is collected as a "deep" dependency.
 */
function traverse (val) {
  _traverse(val, seenObjects);
  seenObjects.clear();
}

function _traverse (val, seen) {
  var i, keys;
  var isA = Array.isArray(val);
  if ((!isA && !isObject(val)) || Object.isFrozen(val) || val instanceof VNode) {
    return
  }
  if (val.__ob__) {
    var depId = val.__ob__.dep.id;
    if (seen.has(depId)) {
      return
    }
    seen.add(depId);
  }
  if (isA) {
    i = val.length;
    while (i--) { _traverse(val[i], seen); }
  } else {
    keys = Object.keys(val);
    i = keys.length;
    while (i--) { _traverse(val[keys[i]], seen); }
  }
}

var mark;
var measure;

if (true) {
  var perf = inBrowser && window.performance;
  /* istanbul ignore if */
  if (
    perf &&
    perf.mark &&
    perf.measure &&
    perf.clearMarks &&
    perf.clearMeasures
  ) {
    mark = function (tag) { return perf.mark(tag); };
    measure = function (name, startTag, endTag) {
      perf.measure(name, startTag, endTag);
      perf.clearMarks(startTag);
      perf.clearMarks(endTag);
      // perf.clearMeasures(name)
    };
  }
}

/*  */

var normalizeEvent = cached(function (name) {
  var passive = name.charAt(0) === '&';
  name = passive ? name.slice(1) : name;
  var once$$1 = name.charAt(0) === '~'; // Prefixed last, checked first
  name = once$$1 ? name.slice(1) : name;
  var capture = name.charAt(0) === '!';
  name = capture ? name.slice(1) : name;
  return {
    name: name,
    once: once$$1,
    capture: capture,
    passive: passive
  }
});

function createFnInvoker (fns, vm) {
  function invoker () {
    var arguments$1 = arguments;

    var fns = invoker.fns;
    if (Array.isArray(fns)) {
      var cloned = fns.slice();
      for (var i = 0; i < cloned.length; i++) {
        invokeWithErrorHandling(cloned[i], null, arguments$1, vm, "v-on handler");
      }
    } else {
      // return handler return value for single handlers
      return invokeWithErrorHandling(fns, null, arguments, vm, "v-on handler")
    }
  }
  invoker.fns = fns;
  return invoker
}

function updateListeners (
  on,
  oldOn,
  add,
  remove$$1,
  createOnceHandler,
  vm
) {
  var name, def$$1, cur, old, event;
  for (name in on) {
    def$$1 = cur = on[name];
    old = oldOn[name];
    event = normalizeEvent(name);
    if (isUndef(cur)) {
       true && warn(
        "Invalid handler for event \"" + (event.name) + "\": got " + String(cur),
        vm
      );
    } else if (isUndef(old)) {
      if (isUndef(cur.fns)) {
        cur = on[name] = createFnInvoker(cur, vm);
      }
      if (isTrue(event.once)) {
        cur = on[name] = createOnceHandler(event.name, cur, event.capture);
      }
      add(event.name, cur, event.capture, event.passive, event.params);
    } else if (cur !== old) {
      old.fns = cur;
      on[name] = old;
    }
  }
  for (name in oldOn) {
    if (isUndef(on[name])) {
      event = normalizeEvent(name);
      remove$$1(event.name, oldOn[name], event.capture);
    }
  }
}

/*  */

/*  */

// fixed by xxxxxx (mp properties)
function extractPropertiesFromVNodeData(data, Ctor, res, context) {
  var propOptions = Ctor.options.mpOptions && Ctor.options.mpOptions.properties;
  if (isUndef(propOptions)) {
    return res
  }
  var externalClasses = Ctor.options.mpOptions.externalClasses || [];
  var attrs = data.attrs;
  var props = data.props;
  if (isDef(attrs) || isDef(props)) {
    for (var key in propOptions) {
      var altKey = hyphenate(key);
      var result = checkProp(res, props, key, altKey, true) ||
          checkProp(res, attrs, key, altKey, false);
      // externalClass
      if (
        result &&
        res[key] &&
        externalClasses.indexOf(altKey) !== -1 &&
        context[camelize(res[key])]
      ) {
        // 赋值 externalClass 真正的值(模板里 externalClass 的值可能是字符串)
        res[key] = context[camelize(res[key])];
      }
    }
  }
  return res
}

function extractPropsFromVNodeData (
  data,
  Ctor,
  tag,
  context// fixed by xxxxxx
) {
  // we are only extracting raw values here.
  // validation and default values are handled in the child
  // component itself.
  var propOptions = Ctor.options.props;
  if (isUndef(propOptions)) {
    // fixed by xxxxxx
    return extractPropertiesFromVNodeData(data, Ctor, {}, context)
  }
  var res = {};
  var attrs = data.attrs;
  var props = data.props;
  if (isDef(attrs) || isDef(props)) {
    for (var key in propOptions) {
      var altKey = hyphenate(key);
      if (true) {
        var keyInLowerCase = key.toLowerCase();
        if (
          key !== keyInLowerCase &&
          attrs && hasOwn(attrs, keyInLowerCase)
        ) {
          tip(
            "Prop \"" + keyInLowerCase + "\" is passed to component " +
            (formatComponentName(tag || Ctor)) + ", but the declared prop name is" +
            " \"" + key + "\". " +
            "Note that HTML attributes are case-insensitive and camelCased " +
            "props need to use their kebab-case equivalents when using in-DOM " +
            "templates. You should probably use \"" + altKey + "\" instead of \"" + key + "\"."
          );
        }
      }
      checkProp(res, props, key, altKey, true) ||
      checkProp(res, attrs, key, altKey, false);
    }
  }
  // fixed by xxxxxx
  return extractPropertiesFromVNodeData(data, Ctor, res, context)
}

function checkProp (
  res,
  hash,
  key,
  altKey,
  preserve
) {
  if (isDef(hash)) {
    if (hasOwn(hash, key)) {
      res[key] = hash[key];
      if (!preserve) {
        delete hash[key];
      }
      return true
    } else if (hasOwn(hash, altKey)) {
      res[key] = hash[altKey];
      if (!preserve) {
        delete hash[altKey];
      }
      return true
    }
  }
  return false
}

/*  */

// The template compiler attempts to minimize the need for normalization by
// statically analyzing the template at compile time.
//
// For plain HTML markup, normalization can be completely skipped because the
// generated render function is guaranteed to return Array<VNode>. There are
// two cases where extra normalization is needed:

// 1. When the children contains components - because a functional component
// may return an Array instead of a single root. In this case, just a simple
// normalization is needed - if any child is an Array, we flatten the whole
// thing with Array.prototype.concat. It is guaranteed to be only 1-level deep
// because functional components already normalize their own children.
function simpleNormalizeChildren (children) {
  for (var i = 0; i < children.length; i++) {
    if (Array.isArray(children[i])) {
      return Array.prototype.concat.apply([], children)
    }
  }
  return children
}

// 2. When the children contains constructs that always generated nested Arrays,
// e.g. <template>, <slot>, v-for, or when the children is provided by user
// with hand-written render functions / JSX. In such cases a full normalization
// is needed to cater to all possible types of children values.
function normalizeChildren (children) {
  return isPrimitive(children)
    ? [createTextVNode(children)]
    : Array.isArray(children)
      ? normalizeArrayChildren(children)
      : undefined
}

function isTextNode (node) {
  return isDef(node) && isDef(node.text) && isFalse(node.isComment)
}

function normalizeArrayChildren (children, nestedIndex) {
  var res = [];
  var i, c, lastIndex, last;
  for (i = 0; i < children.length; i++) {
    c = children[i];
    if (isUndef(c) || typeof c === 'boolean') { continue }
    lastIndex = res.length - 1;
    last = res[lastIndex];
    //  nested
    if (Array.isArray(c)) {
      if (c.length > 0) {
        c = normalizeArrayChildren(c, ((nestedIndex || '') + "_" + i));
        // merge adjacent text nodes
        if (isTextNode(c[0]) && isTextNode(last)) {
          res[lastIndex] = createTextVNode(last.text + (c[0]).text);
          c.shift();
        }
        res.push.apply(res, c);
      }
    } else if (isPrimitive(c)) {
      if (isTextNode(last)) {
        // merge adjacent text nodes
        // this is necessary for SSR hydration because text nodes are
        // essentially merged when rendered to HTML strings
        res[lastIndex] = createTextVNode(last.text + c);
      } else if (c !== '') {
        // convert primitive to vnode
        res.push(createTextVNode(c));
      }
    } else {
      if (isTextNode(c) && isTextNode(last)) {
        // merge adjacent text nodes
        res[lastIndex] = createTextVNode(last.text + c.text);
      } else {
        // default key for nested array children (likely generated by v-for)
        if (isTrue(children._isVList) &&
          isDef(c.tag) &&
          isUndef(c.key) &&
          isDef(nestedIndex)) {
          c.key = "__vlist" + nestedIndex + "_" + i + "__";
        }
        res.push(c);
      }
    }
  }
  return res
}

/*  */

function initProvide (vm) {
  var provide = vm.$options.provide;
  if (provide) {
    vm._provided = typeof provide === 'function'
      ? provide.call(vm)
      : provide;
  }
}

function initInjections (vm) {
  var result = resolveInject(vm.$options.inject, vm);
  if (result) {
    toggleObserving(false);
    Object.keys(result).forEach(function (key) {
      /* istanbul ignore else */
      if (true) {
        defineReactive$$1(vm, key, result[key], function () {
          warn(
            "Avoid mutating an injected value directly since the changes will be " +
            "overwritten whenever the provided component re-renders. " +
            "injection being mutated: \"" + key + "\"",
            vm
          );
        });
      } else {}
    });
    toggleObserving(true);
  }
}

function resolveInject (inject, vm) {
  if (inject) {
    // inject is :any because flow is not smart enough to figure out cached
    var result = Object.create(null);
    var keys = hasSymbol
      ? Reflect.ownKeys(inject)
      : Object.keys(inject);

    for (var i = 0; i < keys.length; i++) {
      var key = keys[i];
      // #6574 in case the inject object is observed...
      if (key === '__ob__') { continue }
      var provideKey = inject[key].from;
      var source = vm;
      while (source) {
        if (source._provided && hasOwn(source._provided, provideKey)) {
          result[key] = source._provided[provideKey];
          break
        }
        source = source.$parent;
      }
      if (!source) {
        if ('default' in inject[key]) {
          var provideDefault = inject[key].default;
          result[key] = typeof provideDefault === 'function'
            ? provideDefault.call(vm)
            : provideDefault;
        } else if (true) {
          warn(("Injection \"" + key + "\" not found"), vm);
        }
      }
    }
    return result
  }
}

/*  */



/**
 * Runtime helper for resolving raw children VNodes into a slot object.
 */
function resolveSlots (
  children,
  context
) {
  if (!children || !children.length) {
    return {}
  }
  var slots = {};
  for (var i = 0, l = children.length; i < l; i++) {
    var child = children[i];
    var data = child.data;
    // remove slot attribute if the node is resolved as a Vue slot node
    if (data && data.attrs && data.attrs.slot) {
      delete data.attrs.slot;
    }
    // named slots should only be respected if the vnode was rendered in the
    // same context.
    if ((child.context === context || child.fnContext === context) &&
      data && data.slot != null
    ) {
      var name = data.slot;
      var slot = (slots[name] || (slots[name] = []));
      if (child.tag === 'template') {
        slot.push.apply(slot, child.children || []);
      } else {
        slot.push(child);
      }
    } else {
      // fixed by xxxxxx 临时 hack 掉 uni-app 中的异步 name slot page
      if(child.asyncMeta && child.asyncMeta.data && child.asyncMeta.data.slot === 'page'){
        (slots['page'] || (slots['page'] = [])).push(child);
      }else{
        (slots.default || (slots.default = [])).push(child);
      }
    }
  }
  // ignore slots that contains only whitespace
  for (var name$1 in slots) {
    if (slots[name$1].every(isWhitespace)) {
      delete slots[name$1];
    }
  }
  return slots
}

function isWhitespace (node) {
  return (node.isComment && !node.asyncFactory) || node.text === ' '
}

/*  */

function normalizeScopedSlots (
  slots,
  normalSlots,
  prevSlots
) {
  var res;
  var hasNormalSlots = Object.keys(normalSlots).length > 0;
  var isStable = slots ? !!slots.$stable : !hasNormalSlots;
  var key = slots && slots.$key;
  if (!slots) {
    res = {};
  } else if (slots._normalized) {
    // fast path 1: child component re-render only, parent did not change
    return slots._normalized
  } else if (
    isStable &&
    prevSlots &&
    prevSlots !== emptyObject &&
    key === prevSlots.$key &&
    !hasNormalSlots &&
    !prevSlots.$hasNormal
  ) {
    // fast path 2: stable scoped slots w/ no normal slots to proxy,
    // only need to normalize once
    return prevSlots
  } else {
    res = {};
    for (var key$1 in slots) {
      if (slots[key$1] && key$1[0] !== '$') {
        res[key$1] = normalizeScopedSlot(normalSlots, key$1, slots[key$1]);
      }
    }
  }
  // expose normal slots on scopedSlots
  for (var key$2 in normalSlots) {
    if (!(key$2 in res)) {
      res[key$2] = proxyNormalSlot(normalSlots, key$2);
    }
  }
  // avoriaz seems to mock a non-extensible $scopedSlots object
  // and when that is passed down this would cause an error
  if (slots && Object.isExtensible(slots)) {
    (slots)._normalized = res;
  }
  def(res, '$stable', isStable);
  def(res, '$key', key);
  def(res, '$hasNormal', hasNormalSlots);
  return res
}

function normalizeScopedSlot(normalSlots, key, fn) {
  var normalized = function () {
    var res = arguments.length ? fn.apply(null, arguments) : fn({});
    res = res && typeof res === 'object' && !Array.isArray(res)
      ? [res] // single vnode
      : normalizeChildren(res);
    return res && (
      res.length === 0 ||
      (res.length === 1 && res[0].isComment) // #9658
    ) ? undefined
      : res
  };
  // this is a slot using the new v-slot syntax without scope. although it is
  // compiled as a scoped slot, render fn users would expect it to be present
  // on this.$slots because the usage is semantically a normal slot.
  if (fn.proxy) {
    Object.defineProperty(normalSlots, key, {
      get: normalized,
      enumerable: true,
      configurable: true
    });
  }
  return normalized
}

function proxyNormalSlot(slots, key) {
  return function () { return slots[key]; }
}

/*  */

/**
 * Runtime helper for rendering v-for lists.
 */
function renderList (
  val,
  render
) {
  var ret, i, l, keys, key;
  if (Array.isArray(val) || typeof val === 'string') {
    ret = new Array(val.length);
    for (i = 0, l = val.length; i < l; i++) {
      ret[i] = render(val[i], i, i, i); // fixed by xxxxxx
    }
  } else if (typeof val === 'number') {
    ret = new Array(val);
    for (i = 0; i < val; i++) {
      ret[i] = render(i + 1, i, i, i); // fixed by xxxxxx
    }
  } else if (isObject(val)) {
    if (hasSymbol && val[Symbol.iterator]) {
      ret = [];
      var iterator = val[Symbol.iterator]();
      var result = iterator.next();
      while (!result.done) {
        ret.push(render(result.value, ret.length, i, i++)); // fixed by xxxxxx
        result = iterator.next();
      }
    } else {
      keys = Object.keys(val);
      ret = new Array(keys.length);
      for (i = 0, l = keys.length; i < l; i++) {
        key = keys[i];
        ret[i] = render(val[key], key, i, i); // fixed by xxxxxx
      }
    }
  }
  if (!isDef(ret)) {
    ret = [];
  }
  (ret)._isVList = true;
  return ret
}

/*  */

/**
 * Runtime helper for rendering <slot>
 */
function renderSlot (
  name,
  fallback,
  props,
  bindObject,
  slotVm
) {
  var scopedSlotFn = this.$scopedSlots[name];
  var nodes;
  if (scopedSlotFn) { // scoped slot
    props = props || {};
    if (bindObject) {
      if ( true && !isObject(bindObject)) {
        warn(
          'slot v-bind without argument expects an Object',
          this
        );
      }
      props = extend(extend({}, bindObject), props);
    }
    // fixed by xxxxxx app-plus scopedSlot
    nodes = scopedSlotFn(props, slotVm || this, props._i) || fallback;
  } else {
    nodes = this.$slots[name] || fallback;
  }

  var target = props && props.slot;
  if (target) {
    return this.$createElement('template', { slot: target }, nodes)
  } else {
    return nodes
  }
}

/*  */

/**
 * Runtime helper for resolving filters
 */
function resolveFilter (id) {
  return resolveAsset(this.$options, 'filters', id, true) || identity
}

/*  */

function isKeyNotMatch (expect, actual) {
  if (Array.isArray(expect)) {
    return expect.indexOf(actual) === -1
  } else {
    return expect !== actual
  }
}

/**
 * Runtime helper for checking keyCodes from config.
 * exposed as Vue.prototype._k
 * passing in eventKeyName as last argument separately for backwards compat
 */
function checkKeyCodes (
  eventKeyCode,
  key,
  builtInKeyCode,
  eventKeyName,
  builtInKeyName
) {
  var mappedKeyCode = config.keyCodes[key] || builtInKeyCode;
  if (builtInKeyName && eventKeyName && !config.keyCodes[key]) {
    return isKeyNotMatch(builtInKeyName, eventKeyName)
  } else if (mappedKeyCode) {
    return isKeyNotMatch(mappedKeyCode, eventKeyCode)
  } else if (eventKeyName) {
    return hyphenate(eventKeyName) !== key
  }
}

/*  */

/**
 * Runtime helper for merging v-bind="object" into a VNode's data.
 */
function bindObjectProps (
  data,
  tag,
  value,
  asProp,
  isSync
) {
  if (value) {
    if (!isObject(value)) {
       true && warn(
        'v-bind without argument expects an Object or Array value',
        this
      );
    } else {
      if (Array.isArray(value)) {
        value = toObject(value);
      }
      var hash;
      var loop = function ( key ) {
        if (
          key === 'class' ||
          key === 'style' ||
          isReservedAttribute(key)
        ) {
          hash = data;
        } else {
          var type = data.attrs && data.attrs.type;
          hash = asProp || config.mustUseProp(tag, type, key)
            ? data.domProps || (data.domProps = {})
            : data.attrs || (data.attrs = {});
        }
        var camelizedKey = camelize(key);
        var hyphenatedKey = hyphenate(key);
        if (!(camelizedKey in hash) && !(hyphenatedKey in hash)) {
          hash[key] = value[key];

          if (isSync) {
            var on = data.on || (data.on = {});
            on[("update:" + key)] = function ($event) {
              value[key] = $event;
            };
          }
        }
      };

      for (var key in value) loop( key );
    }
  }
  return data
}

/*  */

/**
 * Runtime helper for rendering static trees.
 */
function renderStatic (
  index,
  isInFor
) {
  var cached = this._staticTrees || (this._staticTrees = []);
  var tree = cached[index];
  // if has already-rendered static tree and not inside v-for,
  // we can reuse the same tree.
  if (tree && !isInFor) {
    return tree
  }
  // otherwise, render a fresh tree.
  tree = cached[index] = this.$options.staticRenderFns[index].call(
    this._renderProxy,
    null,
    this // for render fns generated for functional component templates
  );
  markStatic(tree, ("__static__" + index), false);
  return tree
}

/**
 * Runtime helper for v-once.
 * Effectively it means marking the node as static with a unique key.
 */
function markOnce (
  tree,
  index,
  key
) {
  markStatic(tree, ("__once__" + index + (key ? ("_" + key) : "")), true);
  return tree
}

function markStatic (
  tree,
  key,
  isOnce
) {
  if (Array.isArray(tree)) {
    for (var i = 0; i < tree.length; i++) {
      if (tree[i] && typeof tree[i] !== 'string') {
        markStaticNode(tree[i], (key + "_" + i), isOnce);
      }
    }
  } else {
    markStaticNode(tree, key, isOnce);
  }
}

function markStaticNode (node, key, isOnce) {
  node.isStatic = true;
  node.key = key;
  node.isOnce = isOnce;
}

/*  */

function bindObjectListeners (data, value) {
  if (value) {
    if (!isPlainObject(value)) {
       true && warn(
        'v-on without argument expects an Object value',
        this
      );
    } else {
      var on = data.on = data.on ? extend({}, data.on) : {};
      for (var key in value) {
        var existing = on[key];
        var ours = value[key];
        on[key] = existing ? [].concat(existing, ours) : ours;
      }
    }
  }
  return data
}

/*  */

function resolveScopedSlots (
  fns, // see flow/vnode
  res,
  // the following are added in 2.6
  hasDynamicKeys,
  contentHashKey
) {
  res = res || { $stable: !hasDynamicKeys };
  for (var i = 0; i < fns.length; i++) {
    var slot = fns[i];
    if (Array.isArray(slot)) {
      resolveScopedSlots(slot, res, hasDynamicKeys);
    } else if (slot) {
      // marker for reverse proxying v-slot without scope on this.$slots
      if (slot.proxy) {
        slot.fn.proxy = true;
      }
      res[slot.key] = slot.fn;
    }
  }
  if (contentHashKey) {
    (res).$key = contentHashKey;
  }
  return res
}

/*  */

function bindDynamicKeys (baseObj, values) {
  for (var i = 0; i < values.length; i += 2) {
    var key = values[i];
    if (typeof key === 'string' && key) {
      baseObj[values[i]] = values[i + 1];
    } else if ( true && key !== '' && key !== null) {
      // null is a special value for explicitly removing a binding
      warn(
        ("Invalid value for dynamic directive argument (expected string or null): " + key),
        this
      );
    }
  }
  return baseObj
}

// helper to dynamically append modifier runtime markers to event names.
// ensure only append when value is already string, otherwise it will be cast
// to string and cause the type check to miss.
function prependModifier (value, symbol) {
  return typeof value === 'string' ? symbol + value : value
}

/*  */

function installRenderHelpers (target) {
  target._o = markOnce;
  target._n = toNumber;
  target._s = toString;
  target._l = renderList;
  target._t = renderSlot;
  target._q = looseEqual;
  target._i = looseIndexOf;
  target._m = renderStatic;
  target._f = resolveFilter;
  target._k = checkKeyCodes;
  target._b = bindObjectProps;
  target._v = createTextVNode;
  target._e = createEmptyVNode;
  target._u = resolveScopedSlots;
  target._g = bindObjectListeners;
  target._d = bindDynamicKeys;
  target._p = prependModifier;
}

/*  */

function FunctionalRenderContext (
  data,
  props,
  children,
  parent,
  Ctor
) {
  var this$1 = this;

  var options = Ctor.options;
  // ensure the createElement function in functional components
  // gets a unique context - this is necessary for correct named slot check
  var contextVm;
  if (hasOwn(parent, '_uid')) {
    contextVm = Object.create(parent);
    // $flow-disable-line
    contextVm._original = parent;
  } else {
    // the context vm passed in is a functional context as well.
    // in this case we want to make sure we are able to get a hold to the
    // real context instance.
    contextVm = parent;
    // $flow-disable-line
    parent = parent._original;
  }
  var isCompiled = isTrue(options._compiled);
  var needNormalization = !isCompiled;

  this.data = data;
  this.props = props;
  this.children = children;
  this.parent = parent;
  this.listeners = data.on || emptyObject;
  this.injections = resolveInject(options.inject, parent);
  this.slots = function () {
    if (!this$1.$slots) {
      normalizeScopedSlots(
        data.scopedSlots,
        this$1.$slots = resolveSlots(children, parent)
      );
    }
    return this$1.$slots
  };

  Object.defineProperty(this, 'scopedSlots', ({
    enumerable: true,
    get: function get () {
      return normalizeScopedSlots(data.scopedSlots, this.slots())
    }
  }));

  // support for compiled functional template
  if (isCompiled) {
    // exposing $options for renderStatic()
    this.$options = options;
    // pre-resolve slots for renderSlot()
    this.$slots = this.slots();
    this.$scopedSlots = normalizeScopedSlots(data.scopedSlots, this.$slots);
  }

  if (options._scopeId) {
    this._c = function (a, b, c, d) {
      var vnode = createElement(contextVm, a, b, c, d, needNormalization);
      if (vnode && !Array.isArray(vnode)) {
        vnode.fnScopeId = options._scopeId;
        vnode.fnContext = parent;
      }
      return vnode
    };
  } else {
    this._c = function (a, b, c, d) { return createElement(contextVm, a, b, c, d, needNormalization); };
  }
}

installRenderHelpers(FunctionalRenderContext.prototype);

function createFunctionalComponent (
  Ctor,
  propsData,
  data,
  contextVm,
  children
) {
  var options = Ctor.options;
  var props = {};
  var propOptions = options.props;
  if (isDef(propOptions)) {
    for (var key in propOptions) {
      props[key] = validateProp(key, propOptions, propsData || emptyObject);
    }
  } else {
    if (isDef(data.attrs)) { mergeProps(props, data.attrs); }
    if (isDef(data.props)) { mergeProps(props, data.props); }
  }

  var renderContext = new FunctionalRenderContext(
    data,
    props,
    children,
    contextVm,
    Ctor
  );

  var vnode = options.render.call(null, renderContext._c, renderContext);

  if (vnode instanceof VNode) {
    return cloneAndMarkFunctionalResult(vnode, data, renderContext.parent, options, renderContext)
  } else if (Array.isArray(vnode)) {
    var vnodes = normalizeChildren(vnode) || [];
    var res = new Array(vnodes.length);
    for (var i = 0; i < vnodes.length; i++) {
      res[i] = cloneAndMarkFunctionalResult(vnodes[i], data, renderContext.parent, options, renderContext);
    }
    return res
  }
}

function cloneAndMarkFunctionalResult (vnode, data, contextVm, options, renderContext) {
  // #7817 clone node before setting fnContext, otherwise if the node is reused
  // (e.g. it was from a cached normal slot) the fnContext causes named slots
  // that should not be matched to match.
  var clone = cloneVNode(vnode);
  clone.fnContext = contextVm;
  clone.fnOptions = options;
  if (true) {
    (clone.devtoolsMeta = clone.devtoolsMeta || {}).renderContext = renderContext;
  }
  if (data.slot) {
    (clone.data || (clone.data = {})).slot = data.slot;
  }
  return clone
}

function mergeProps (to, from) {
  for (var key in from) {
    to[camelize(key)] = from[key];
  }
}

/*  */

/*  */

/*  */

/*  */

// inline hooks to be invoked on component VNodes during patch
var componentVNodeHooks = {
  init: function init (vnode, hydrating) {
    if (
      vnode.componentInstance &&
      !vnode.componentInstance._isDestroyed &&
      vnode.data.keepAlive
    ) {
      // kept-alive components, treat as a patch
      var mountedNode = vnode; // work around flow
      componentVNodeHooks.prepatch(mountedNode, mountedNode);
    } else {
      var child = vnode.componentInstance = createComponentInstanceForVnode(
        vnode,
        activeInstance
      );
      child.$mount(hydrating ? vnode.elm : undefined, hydrating);
    }
  },

  prepatch: function prepatch (oldVnode, vnode) {
    var options = vnode.componentOptions;
    var child = vnode.componentInstance = oldVnode.componentInstance;
    updateChildComponent(
      child,
      options.propsData, // updated props
      options.listeners, // updated listeners
      vnode, // new parent vnode
      options.children // new children
    );
  },

  insert: function insert (vnode) {
    var context = vnode.context;
    var componentInstance = vnode.componentInstance;
    if (!componentInstance._isMounted) {
      callHook(componentInstance, 'onServiceCreated');
      callHook(componentInstance, 'onServiceAttached');
      componentInstance._isMounted = true;
      callHook(componentInstance, 'mounted');
    }
    if (vnode.data.keepAlive) {
      if (context._isMounted) {
        // vue-router#1212
        // During updates, a kept-alive component's child components may
        // change, so directly walking the tree here may call activated hooks
        // on incorrect children. Instead we push them into a queue which will
        // be processed after the whole patch process ended.
        queueActivatedComponent(componentInstance);
      } else {
        activateChildComponent(componentInstance, true /* direct */);
      }
    }
  },

  destroy: function destroy (vnode) {
    var componentInstance = vnode.componentInstance;
    if (!componentInstance._isDestroyed) {
      if (!vnode.data.keepAlive) {
        componentInstance.$destroy();
      } else {
        deactivateChildComponent(componentInstance, true /* direct */);
      }
    }
  }
};

var hooksToMerge = Object.keys(componentVNodeHooks);

function createComponent (
  Ctor,
  data,
  context,
  children,
  tag
) {
  if (isUndef(Ctor)) {
    return
  }

  var baseCtor = context.$options._base;

  // plain options object: turn it into a constructor
  if (isObject(Ctor)) {
    Ctor = baseCtor.extend(Ctor);
  }

  // if at this stage it's not a constructor or an async component factory,
  // reject.
  if (typeof Ctor !== 'function') {
    if (true) {
      warn(("Invalid Component definition: " + (String(Ctor))), context);
    }
    return
  }

  // async component
  var asyncFactory;
  if (isUndef(Ctor.cid)) {
    asyncFactory = Ctor;
    Ctor = resolveAsyncComponent(asyncFactory, baseCtor);
    if (Ctor === undefined) {
      // return a placeholder node for async component, which is rendered
      // as a comment node but preserves all the raw information for the node.
      // the information will be used for async server-rendering and hydration.
      return createAsyncPlaceholder(
        asyncFactory,
        data,
        context,
        children,
        tag
      )
    }
  }

  data = data || {};

  // resolve constructor options in case global mixins are applied after
  // component constructor creation
  resolveConstructorOptions(Ctor);

  // transform component v-model data into props & events
  if (isDef(data.model)) {
    transformModel(Ctor.options, data);
  }

  // extract props
  var propsData = extractPropsFromVNodeData(data, Ctor, tag, context); // fixed by xxxxxx

  // functional component
  if (isTrue(Ctor.options.functional)) {
    return createFunctionalComponent(Ctor, propsData, data, context, children)
  }

  // extract listeners, since these needs to be treated as
  // child component listeners instead of DOM listeners
  var listeners = data.on;
  // replace with listeners with .native modifier
  // so it gets processed during parent component patch.
  data.on = data.nativeOn;

  if (isTrue(Ctor.options.abstract)) {
    // abstract components do not keep anything
    // other than props & listeners & slot

    // work around flow
    var slot = data.slot;
    data = {};
    if (slot) {
      data.slot = slot;
    }
  }

  // install component management hooks onto the placeholder node
  installComponentHooks(data);

  // return a placeholder vnode
  var name = Ctor.options.name || tag;
  var vnode = new VNode(
    ("vue-component-" + (Ctor.cid) + (name ? ("-" + name) : '')),
    data, undefined, undefined, undefined, context,
    { Ctor: Ctor, propsData: propsData, listeners: listeners, tag: tag, children: children },
    asyncFactory
  );

  return vnode
}

function createComponentInstanceForVnode (
  vnode, // we know it's MountedComponentVNode but flow doesn't
  parent // activeInstance in lifecycle state
) {
  var options = {
    _isComponent: true,
    _parentVnode: vnode,
    parent: parent
  };
  // check inline-template render functions
  var inlineTemplate = vnode.data.inlineTemplate;
  if (isDef(inlineTemplate)) {
    options.render = inlineTemplate.render;
    options.staticRenderFns = inlineTemplate.staticRenderFns;
  }
  return new vnode.componentOptions.Ctor(options)
}

function installComponentHooks (data) {
  var hooks = data.hook || (data.hook = {});
  for (var i = 0; i < hooksToMerge.length; i++) {
    var key = hooksToMerge[i];
    var existing = hooks[key];
    var toMerge = componentVNodeHooks[key];
    if (existing !== toMerge && !(existing && existing._merged)) {
      hooks[key] = existing ? mergeHook$1(toMerge, existing) : toMerge;
    }
  }
}

function mergeHook$1 (f1, f2) {
  var merged = function (a, b) {
    // flow complains about extra args which is why we use any
    f1(a, b);
    f2(a, b);
  };
  merged._merged = true;
  return merged
}

// transform component v-model info (value and callback) into
// prop and event handler respectively.
function transformModel (options, data) {
  var prop = (options.model && options.model.prop) || 'value';
  var event = (options.model && options.model.event) || 'input'
  ;(data.attrs || (data.attrs = {}))[prop] = data.model.value;
  var on = data.on || (data.on = {});
  var existing = on[event];
  var callback = data.model.callback;
  if (isDef(existing)) {
    if (
      Array.isArray(existing)
        ? existing.indexOf(callback) === -1
        : existing !== callback
    ) {
      on[event] = [callback].concat(existing);
    }
  } else {
    on[event] = callback;
  }
}

/*  */

var SIMPLE_NORMALIZE = 1;
var ALWAYS_NORMALIZE = 2;

// wrapper function for providing a more flexible interface
// without getting yelled at by flow
function createElement (
  context,
  tag,
  data,
  children,
  normalizationType,
  alwaysNormalize
) {
  if (Array.isArray(data) || isPrimitive(data)) {
    normalizationType = children;
    children = data;
    data = undefined;
  }
  if (isTrue(alwaysNormalize)) {
    normalizationType = ALWAYS_NORMALIZE;
  }
  return _createElement(context, tag, data, children, normalizationType)
}

function _createElement (
  context,
  tag,
  data,
  children,
  normalizationType
) {
  if (isDef(data) && isDef((data).__ob__)) {
     true && warn(
      "Avoid using observed data object as vnode data: " + (JSON.stringify(data)) + "\n" +
      'Always create fresh vnode data objects in each render!',
      context
    );
    return createEmptyVNode()
  }
  // object syntax in v-bind
  if (isDef(data) && isDef(data.is)) {
    tag = data.is;
  }
  if (!tag) {
    // in case of component :is set to falsy value
    return createEmptyVNode()
  }
  // warn against non-primitive key
  if ( true &&
    isDef(data) && isDef(data.key) && !isPrimitive(data.key)
  ) {
    {
      warn(
        'Avoid using non-primitive value as key, ' +
        'use string/number value instead.',
        context
      );
    }
  }
  // support single function children as default scoped slot
  if (Array.isArray(children) &&
    typeof children[0] === 'function'
  ) {
    data = data || {};
    data.scopedSlots = { default: children[0] };
    children.length = 0;
  }
  if (normalizationType === ALWAYS_NORMALIZE) {
    children = normalizeChildren(children);
  } else if (normalizationType === SIMPLE_NORMALIZE) {
    children = simpleNormalizeChildren(children);
  }
  var vnode, ns;
  if (typeof tag === 'string') {
    var Ctor;
    ns = (context.$vnode && context.$vnode.ns) || config.getTagNamespace(tag);
    if (config.isReservedTag(tag)) {
      // platform built-in elements
      if ( true && isDef(data) && isDef(data.nativeOn)) {
        warn(
          ("The .native modifier for v-on is only valid on components but it was used on <" + tag + ">."),
          context
        );
      }
      vnode = new VNode(
        config.parsePlatformTagName(tag), data, children,
        undefined, undefined, context
      );
    } else if ((!data || !data.pre) && isDef(Ctor = resolveAsset(context.$options, 'components', tag))) {
      // component
      vnode = createComponent(Ctor, data, context, children, tag);
    } else {
      // unknown or unlisted namespaced elements
      // check at runtime because it may get assigned a namespace when its
      // parent normalizes children
      vnode = new VNode(
        tag, data, children,
        undefined, undefined, context
      );
    }
  } else {
    // direct component options / constructor
    vnode = createComponent(tag, data, context, children);
  }
  if (Array.isArray(vnode)) {
    return vnode
  } else if (isDef(vnode)) {
    if (isDef(ns)) { applyNS(vnode, ns); }
    if (isDef(data)) { registerDeepBindings(data); }
    return vnode
  } else {
    return createEmptyVNode()
  }
}

function applyNS (vnode, ns, force) {
  vnode.ns = ns;
  if (vnode.tag === 'foreignObject') {
    // use default namespace inside foreignObject
    ns = undefined;
    force = true;
  }
  if (isDef(vnode.children)) {
    for (var i = 0, l = vnode.children.length; i < l; i++) {
      var child = vnode.children[i];
      if (isDef(child.tag) && (
        isUndef(child.ns) || (isTrue(force) && child.tag !== 'svg'))) {
        applyNS(child, ns, force);
      }
    }
  }
}

// ref #5318
// necessary to ensure parent re-render when deep bindings like :style and
// :class are used on slot nodes
function registerDeepBindings (data) {
  if (isObject(data.style)) {
    traverse(data.style);
  }
  if (isObject(data.class)) {
    traverse(data.class);
  }
}

/*  */

function initRender (vm) {
  vm._vnode = null; // the root of the child tree
  vm._staticTrees = null; // v-once cached trees
  var options = vm.$options;
  var parentVnode = vm.$vnode = options._parentVnode; // the placeholder node in parent tree
  var renderContext = parentVnode && parentVnode.context;
  vm.$slots = resolveSlots(options._renderChildren, renderContext);
  vm.$scopedSlots = emptyObject;
  // bind the createElement fn to this instance
  // so that we get proper render context inside it.
  // args order: tag, data, children, normalizationType, alwaysNormalize
  // internal version is used by render functions compiled from templates
  vm._c = function (a, b, c, d) { return createElement(vm, a, b, c, d, false); };
  // normalization is always applied for the public version, used in
  // user-written render functions.
  vm.$createElement = function (a, b, c, d) { return createElement(vm, a, b, c, d, true); };

  // $attrs & $listeners are exposed for easier HOC creation.
  // they need to be reactive so that HOCs using them are always updated
  var parentData = parentVnode && parentVnode.data;

  /* istanbul ignore else */
  if (true) {
    defineReactive$$1(vm, '$attrs', parentData && parentData.attrs || emptyObject, function () {
      !isUpdatingChildComponent && warn("$attrs is readonly.", vm);
    }, true);
    defineReactive$$1(vm, '$listeners', options._parentListeners || emptyObject, function () {
      !isUpdatingChildComponent && warn("$listeners is readonly.", vm);
    }, true);
  } else {}
}

var currentRenderingInstance = null;

function renderMixin (Vue) {
  // install runtime convenience helpers
  installRenderHelpers(Vue.prototype);

  Vue.prototype.$nextTick = function (fn) {
    return nextTick(fn, this)
  };

  Vue.prototype._render = function () {
    var vm = this;
    var ref = vm.$options;
    var render = ref.render;
    var _parentVnode = ref._parentVnode;

    if (_parentVnode) {
      vm.$scopedSlots = normalizeScopedSlots(
        _parentVnode.data.scopedSlots,
        vm.$slots,
        vm.$scopedSlots
      );
    }

    // set parent vnode. this allows render functions to have access
    // to the data on the placeholder node.
    vm.$vnode = _parentVnode;
    // render self
    var vnode;
    try {
      // There's no need to maintain a stack because all render fns are called
      // separately from one another. Nested component's render fns are called
      // when parent component is patched.
      currentRenderingInstance = vm;
      vnode = render.call(vm._renderProxy, vm.$createElement);
    } catch (e) {
      handleError(e, vm, "render");
      // return error render result,
      // or previous vnode to prevent render error causing blank component
      /* istanbul ignore else */
      if ( true && vm.$options.renderError) {
        try {
          vnode = vm.$options.renderError.call(vm._renderProxy, vm.$createElement, e);
        } catch (e) {
          handleError(e, vm, "renderError");
          vnode = vm._vnode;
        }
      } else {
        vnode = vm._vnode;
      }
    } finally {
      currentRenderingInstance = null;
    }
    // if the returned array contains only a single node, allow it
    if (Array.isArray(vnode) && vnode.length === 1) {
      vnode = vnode[0];
    }
    // return empty vnode in case the render function errored out
    if (!(vnode instanceof VNode)) {
      if ( true && Array.isArray(vnode)) {
        warn(
          'Multiple root nodes returned from render function. Render function ' +
          'should return a single root node.',
          vm
        );
      }
      vnode = createEmptyVNode();
    }
    // set parent
    vnode.parent = _parentVnode;
    return vnode
  };
}

/*  */

function ensureCtor (comp, base) {
  if (
    comp.__esModule ||
    (hasSymbol && comp[Symbol.toStringTag] === 'Module')
  ) {
    comp = comp.default;
  }
  return isObject(comp)
    ? base.extend(comp)
    : comp
}

function createAsyncPlaceholder (
  factory,
  data,
  context,
  children,
  tag
) {
  var node = createEmptyVNode();
  node.asyncFactory = factory;
  node.asyncMeta = { data: data, context: context, children: children, tag: tag };
  return node
}

function resolveAsyncComponent (
  factory,
  baseCtor
) {
  if (isTrue(factory.error) && isDef(factory.errorComp)) {
    return factory.errorComp
  }

  if (isDef(factory.resolved)) {
    return factory.resolved
  }

  var owner = currentRenderingInstance;
  if (owner && isDef(factory.owners) && factory.owners.indexOf(owner) === -1) {
    // already pending
    factory.owners.push(owner);
  }

  if (isTrue(factory.loading) && isDef(factory.loadingComp)) {
    return factory.loadingComp
  }

  if (owner && !isDef(factory.owners)) {
    var owners = factory.owners = [owner];
    var sync = true;
    var timerLoading = null;
    var timerTimeout = null

    ;(owner).$on('hook:destroyed', function () { return remove(owners, owner); });

    var forceRender = function (renderCompleted) {
      for (var i = 0, l = owners.length; i < l; i++) {
        (owners[i]).$forceUpdate();
      }

      if (renderCompleted) {
        owners.length = 0;
        if (timerLoading !== null) {
          clearTimeout(timerLoading);
          timerLoading = null;
        }
        if (timerTimeout !== null) {
          clearTimeout(timerTimeout);
          timerTimeout = null;
        }
      }
    };

    var resolve = once(function (res) {
      // cache resolved
      factory.resolved = ensureCtor(res, baseCtor);
      // invoke callbacks only if this is not a synchronous resolve
      // (async resolves are shimmed as synchronous during SSR)
      if (!sync) {
        forceRender(true);
      } else {
        owners.length = 0;
      }
    });

    var reject = once(function (reason) {
       true && warn(
        "Failed to resolve async component: " + (String(factory)) +
        (reason ? ("\nReason: " + reason) : '')
      );
      if (isDef(factory.errorComp)) {
        factory.error = true;
        forceRender(true);
      }
    });

    var res = factory(resolve, reject);

    if (isObject(res)) {
      if (isPromise(res)) {
        // () => Promise
        if (isUndef(factory.resolved)) {
          res.then(resolve, reject);
        }
      } else if (isPromise(res.component)) {
        res.component.then(resolve, reject);

        if (isDef(res.error)) {
          factory.errorComp = ensureCtor(res.error, baseCtor);
        }

        if (isDef(res.loading)) {
          factory.loadingComp = ensureCtor(res.loading, baseCtor);
          if (res.delay === 0) {
            factory.loading = true;
          } else {
            timerLoading = setTimeout(function () {
              timerLoading = null;
              if (isUndef(factory.resolved) && isUndef(factory.error)) {
                factory.loading = true;
                forceRender(false);
              }
            }, res.delay || 200);
          }
        }

        if (isDef(res.timeout)) {
          timerTimeout = setTimeout(function () {
            timerTimeout = null;
            if (isUndef(factory.resolved)) {
              reject(
                 true
                  ? ("timeout (" + (res.timeout) + "ms)")
                  : undefined
              );
            }
          }, res.timeout);
        }
      }
    }

    sync = false;
    // return in case resolved synchronously
    return factory.loading
      ? factory.loadingComp
      : factory.resolved
  }
}

/*  */

function isAsyncPlaceholder (node) {
  return node.isComment && node.asyncFactory
}

/*  */

function getFirstComponentChild (children) {
  if (Array.isArray(children)) {
    for (var i = 0; i < children.length; i++) {
      var c = children[i];
      if (isDef(c) && (isDef(c.componentOptions) || isAsyncPlaceholder(c))) {
        return c
      }
    }
  }
}

/*  */

/*  */

function initEvents (vm) {
  vm._events = Object.create(null);
  vm._hasHookEvent = false;
  // init parent attached events
  var listeners = vm.$options._parentListeners;
  if (listeners) {
    updateComponentListeners(vm, listeners);
  }
}

var target;

function add (event, fn) {
  target.$on(event, fn);
}

function remove$1 (event, fn) {
  target.$off(event, fn);
}

function createOnceHandler (event, fn) {
  var _target = target;
  return function onceHandler () {
    var res = fn.apply(null, arguments);
    if (res !== null) {
      _target.$off(event, onceHandler);
    }
  }
}

function updateComponentListeners (
  vm,
  listeners,
  oldListeners
) {
  target = vm;
  updateListeners(listeners, oldListeners || {}, add, remove$1, createOnceHandler, vm);
  target = undefined;
}

function eventsMixin (Vue) {
  var hookRE = /^hook:/;
  Vue.prototype.$on = function (event, fn) {
    var vm = this;
    if (Array.isArray(event)) {
      for (var i = 0, l = event.length; i < l; i++) {
        vm.$on(event[i], fn);
      }
    } else {
      (vm._events[event] || (vm._events[event] = [])).push(fn);
      // optimize hook:event cost by using a boolean flag marked at registration
      // instead of a hash lookup
      if (hookRE.test(event)) {
        vm._hasHookEvent = true;
      }
    }
    return vm
  };

  Vue.prototype.$once = function (event, fn) {
    var vm = this;
    function on () {
      vm.$off(event, on);
      fn.apply(vm, arguments);
    }
    on.fn = fn;
    vm.$on(event, on);
    return vm
  };

  Vue.prototype.$off = function (event, fn) {
    var vm = this;
    // all
    if (!arguments.length) {
      vm._events = Object.create(null);
      return vm
    }
    // array of events
    if (Array.isArray(event)) {
      for (var i$1 = 0, l = event.length; i$1 < l; i$1++) {
        vm.$off(event[i$1], fn);
      }
      return vm
    }
    // specific event
    var cbs = vm._events[event];
    if (!cbs) {
      return vm
    }
    if (!fn) {
      vm._events[event] = null;
      return vm
    }
    // specific handler
    var cb;
    var i = cbs.length;
    while (i--) {
      cb = cbs[i];
      if (cb === fn || cb.fn === fn) {
        cbs.splice(i, 1);
        break
      }
    }
    return vm
  };

  Vue.prototype.$emit = function (event) {
    var vm = this;
    if (true) {
      var lowerCaseEvent = event.toLowerCase();
      if (lowerCaseEvent !== event && vm._events[lowerCaseEvent]) {
        tip(
          "Event \"" + lowerCaseEvent + "\" is emitted in component " +
          (formatComponentName(vm)) + " but the handler is registered for \"" + event + "\". " +
          "Note that HTML attributes are case-insensitive and you cannot use " +
          "v-on to listen to camelCase events when using in-DOM templates. " +
          "You should probably use \"" + (hyphenate(event)) + "\" instead of \"" + event + "\"."
        );
      }
    }
    var cbs = vm._events[event];
    if (cbs) {
      cbs = cbs.length > 1 ? toArray(cbs) : cbs;
      var args = toArray(arguments, 1);
      var info = "event handler for \"" + event + "\"";
      for (var i = 0, l = cbs.length; i < l; i++) {
        invokeWithErrorHandling(cbs[i], vm, args, vm, info);
      }
    }
    return vm
  };
}

/*  */

var activeInstance = null;
var isUpdatingChildComponent = false;

function setActiveInstance(vm) {
  var prevActiveInstance = activeInstance;
  activeInstance = vm;
  return function () {
    activeInstance = prevActiveInstance;
  }
}

function initLifecycle (vm) {
  var options = vm.$options;

  // locate first non-abstract parent
  var parent = options.parent;
  if (parent && !options.abstract) {
    while (parent.$options.abstract && parent.$parent) {
      parent = parent.$parent;
    }
    parent.$children.push(vm);
  }

  vm.$parent = parent;
  vm.$root = parent ? parent.$root : vm;

  vm.$children = [];
  vm.$refs = {};

  vm._watcher = null;
  vm._inactive = null;
  vm._directInactive = false;
  vm._isMounted = false;
  vm._isDestroyed = false;
  vm._isBeingDestroyed = false;
}

function lifecycleMixin (Vue) {
  Vue.prototype._update = function (vnode, hydrating) {
    var vm = this;
    var prevEl = vm.$el;
    var prevVnode = vm._vnode;
    var restoreActiveInstance = setActiveInstance(vm);
    vm._vnode = vnode;
    // Vue.prototype.__patch__ is injected in entry points
    // based on the rendering backend used.
    if (!prevVnode) {
      // initial render
      vm.$el = vm.__patch__(vm.$el, vnode, hydrating, false /* removeOnly */);
    } else {
      // updates
      vm.$el = vm.__patch__(prevVnode, vnode);
    }
    restoreActiveInstance();
    // update __vue__ reference
    if (prevEl) {
      prevEl.__vue__ = null;
    }
    if (vm.$el) {
      vm.$el.__vue__ = vm;
    }
    // if parent is an HOC, update its $el as well
    if (vm.$vnode && vm.$parent && vm.$vnode === vm.$parent._vnode) {
      vm.$parent.$el = vm.$el;
    }
    // updated hook is called by the scheduler to ensure that children are
    // updated in a parent's updated hook.
  };

  Vue.prototype.$forceUpdate = function () {
    var vm = this;
    if (vm._watcher) {
      vm._watcher.update();
    }
  };

  Vue.prototype.$destroy = function () {
    var vm = this;
    if (vm._isBeingDestroyed) {
      return
    }
    callHook(vm, 'beforeDestroy');
    vm._isBeingDestroyed = true;
    // remove self from parent
    var parent = vm.$parent;
    if (parent && !parent._isBeingDestroyed && !vm.$options.abstract) {
      remove(parent.$children, vm);
    }
    // teardown watchers
    if (vm._watcher) {
      vm._watcher.teardown();
    }
    var i = vm._watchers.length;
    while (i--) {
      vm._watchers[i].teardown();
    }
    // remove reference from data ob
    // frozen object may not have observer.
    if (vm._data.__ob__) {
      vm._data.__ob__.vmCount--;
    }
    // call the last hook...
    vm._isDestroyed = true;
    // invoke destroy hooks on current rendered tree
    vm.__patch__(vm._vnode, null);
    // fire destroyed hook
    callHook(vm, 'destroyed');
    // turn off all instance listeners.
    vm.$off();
    // remove __vue__ reference
    if (vm.$el) {
      vm.$el.__vue__ = null;
    }
    // release circular reference (#6759)
    if (vm.$vnode) {
      vm.$vnode.parent = null;
    }
  };
}

function updateChildComponent (
  vm,
  propsData,
  listeners,
  parentVnode,
  renderChildren
) {
  if (true) {
    isUpdatingChildComponent = true;
  }

  // determine whether component has slot children
  // we need to do this before overwriting $options._renderChildren.

  // check if there are dynamic scopedSlots (hand-written or compiled but with
  // dynamic slot names). Static scoped slots compiled from template has the
  // "$stable" marker.
  var newScopedSlots = parentVnode.data.scopedSlots;
  var oldScopedSlots = vm.$scopedSlots;
  var hasDynamicScopedSlot = !!(
    (newScopedSlots && !newScopedSlots.$stable) ||
    (oldScopedSlots !== emptyObject && !oldScopedSlots.$stable) ||
    (newScopedSlots && vm.$scopedSlots.$key !== newScopedSlots.$key)
  );

  // Any static slot children from the parent may have changed during parent's
  // update. Dynamic scoped slots may also have changed. In such cases, a forced
  // update is necessary to ensure correctness.
  var needsForceUpdate = !!(
    renderChildren ||               // has new static slots
    vm.$options._renderChildren ||  // has old static slots
    hasDynamicScopedSlot
  );

  vm.$options._parentVnode = parentVnode;
  vm.$vnode = parentVnode; // update vm's placeholder node without re-render

  if (vm._vnode) { // update child tree's parent
    vm._vnode.parent = parentVnode;
  }
  vm.$options._renderChildren = renderChildren;

  // update $attrs and $listeners hash
  // these are also reactive so they may trigger child update if the child
  // used them during render
  vm.$attrs = parentVnode.data.attrs || emptyObject;
  vm.$listeners = listeners || emptyObject;

  // update props
  if (propsData && vm.$options.props) {
    toggleObserving(false);
    var props = vm._props;
    var propKeys = vm.$options._propKeys || [];
    for (var i = 0; i < propKeys.length; i++) {
      var key = propKeys[i];
      var propOptions = vm.$options.props; // wtf flow?
      props[key] = validateProp(key, propOptions, propsData, vm);
    }
    toggleObserving(true);
    // keep a copy of raw propsData
    vm.$options.propsData = propsData;
  }
  
  // fixed by xxxxxx update properties(mp runtime)
  vm._$updateProperties && vm._$updateProperties(vm);
  
  // update listeners
  listeners = listeners || emptyObject;
  var oldListeners = vm.$options._parentListeners;
  vm.$options._parentListeners = listeners;
  updateComponentListeners(vm, listeners, oldListeners);

  // resolve slots + force update if has children
  if (needsForceUpdate) {
    vm.$slots = resolveSlots(renderChildren, parentVnode.context);
    vm.$forceUpdate();
  }

  if (true) {
    isUpdatingChildComponent = false;
  }
}

function isInInactiveTree (vm) {
  while (vm && (vm = vm.$parent)) {
    if (vm._inactive) { return true }
  }
  return false
}

function activateChildComponent (vm, direct) {
  if (direct) {
    vm._directInactive = false;
    if (isInInactiveTree(vm)) {
      return
    }
  } else if (vm._directInactive) {
    return
  }
  if (vm._inactive || vm._inactive === null) {
    vm._inactive = false;
    for (var i = 0; i < vm.$children.length; i++) {
      activateChildComponent(vm.$children[i]);
    }
    callHook(vm, 'activated');
  }
}

function deactivateChildComponent (vm, direct) {
  if (direct) {
    vm._directInactive = true;
    if (isInInactiveTree(vm)) {
      return
    }
  }
  if (!vm._inactive) {
    vm._inactive = true;
    for (var i = 0; i < vm.$children.length; i++) {
      deactivateChildComponent(vm.$children[i]);
    }
    callHook(vm, 'deactivated');
  }
}

function callHook (vm, hook) {
  // #7573 disable dep collection when invoking lifecycle hooks
  pushTarget();
  var handlers = vm.$options[hook];
  var info = hook + " hook";
  if (handlers) {
    for (var i = 0, j = handlers.length; i < j; i++) {
      invokeWithErrorHandling(handlers[i], vm, null, vm, info);
    }
  }
  if (vm._hasHookEvent) {
    vm.$emit('hook:' + hook);
  }
  popTarget();
}

/*  */

var MAX_UPDATE_COUNT = 100;

var queue = [];
var activatedChildren = [];
var has = {};
var circular = {};
var waiting = false;
var flushing = false;
var index = 0;

/**
 * Reset the scheduler's state.
 */
function resetSchedulerState () {
  index = queue.length = activatedChildren.length = 0;
  has = {};
  if (true) {
    circular = {};
  }
  waiting = flushing = false;
}

// Async edge case #6566 requires saving the timestamp when event listeners are
// attached. However, calling performance.now() has a perf overhead especially
// if the page has thousands of event listeners. Instead, we take a timestamp
// every time the scheduler flushes and use that for all event listeners
// attached during that flush.
var currentFlushTimestamp = 0;

// Async edge case fix requires storing an event listener's attach timestamp.
var getNow = Date.now;

// Determine what event timestamp the browser is using. Annoyingly, the
// timestamp can either be hi-res (relative to page load) or low-res
// (relative to UNIX epoch), so in order to compare time we have to use the
// same timestamp type when saving the flush timestamp.
// All IE versions use low-res event timestamps, and have problematic clock
// implementations (#9632)
if (inBrowser && !isIE) {
  var performance = window.performance;
  if (
    performance &&
    typeof performance.now === 'function' &&
    getNow() > document.createEvent('Event').timeStamp
  ) {
    // if the event timestamp, although evaluated AFTER the Date.now(), is
    // smaller than it, it means the event is using a hi-res timestamp,
    // and we need to use the hi-res version for event listener timestamps as
    // well.
    getNow = function () { return performance.now(); };
  }
}

/**
 * Flush both queues and run the watchers.
 */
function flushSchedulerQueue () {
  currentFlushTimestamp = getNow();
  flushing = true;
  var watcher, id;

  // Sort queue before flush.
  // This ensures that:
  // 1. Components are updated from parent to child. (because parent is always
  //    created before the child)
  // 2. A component's user watchers are run before its render watcher (because
  //    user watchers are created before the render watcher)
  // 3. If a component is destroyed during a parent component's watcher run,
  //    its watchers can be skipped.
  queue.sort(function (a, b) { return a.id - b.id; });

  // do not cache length because more watchers might be pushed
  // as we run existing watchers
  for (index = 0; index < queue.length; index++) {
    watcher = queue[index];
    if (watcher.before) {
      watcher.before();
    }
    id = watcher.id;
    has[id] = null;
    watcher.run();
    // in dev build, check and stop circular updates.
    if ( true && has[id] != null) {
      circular[id] = (circular[id] || 0) + 1;
      if (circular[id] > MAX_UPDATE_COUNT) {
        warn(
          'You may have an infinite update loop ' + (
            watcher.user
              ? ("in watcher with expression \"" + (watcher.expression) + "\"")
              : "in a component render function."
          ),
          watcher.vm
        );
        break
      }
    }
  }

  // keep copies of post queues before resetting state
  var activatedQueue = activatedChildren.slice();
  var updatedQueue = queue.slice();

  resetSchedulerState();

  // call component updated and activated hooks
  callActivatedHooks(activatedQueue);
  callUpdatedHooks(updatedQueue);

  // devtool hook
  /* istanbul ignore if */
  if (devtools && config.devtools) {
    devtools.emit('flush');
  }
}

function callUpdatedHooks (queue) {
  var i = queue.length;
  while (i--) {
    var watcher = queue[i];
    var vm = watcher.vm;
    if (vm._watcher === watcher && vm._isMounted && !vm._isDestroyed) {
      callHook(vm, 'updated');
    }
  }
}

/**
 * Queue a kept-alive component that was activated during patch.
 * The queue will be processed after the entire tree has been patched.
 */
function queueActivatedComponent (vm) {
  // setting _inactive to false here so that a render function can
  // rely on checking whether it's in an inactive tree (e.g. router-view)
  vm._inactive = false;
  activatedChildren.push(vm);
}

function callActivatedHooks (queue) {
  for (var i = 0; i < queue.length; i++) {
    queue[i]._inactive = true;
    activateChildComponent(queue[i], true /* true */);
  }
}

/**
 * Push a watcher into the watcher queue.
 * Jobs with duplicate IDs will be skipped unless it's
 * pushed when the queue is being flushed.
 */
function queueWatcher (watcher) {
  var id = watcher.id;
  if (has[id] == null) {
    has[id] = true;
    if (!flushing) {
      queue.push(watcher);
    } else {
      // if already flushing, splice the watcher based on its id
      // if already past its id, it will be run next immediately.
      var i = queue.length - 1;
      while (i > index && queue[i].id > watcher.id) {
        i--;
      }
      queue.splice(i + 1, 0, watcher);
    }
    // queue the flush
    if (!waiting) {
      waiting = true;

      if ( true && !config.async) {
        flushSchedulerQueue();
        return
      }
      nextTick(flushSchedulerQueue);
    }
  }
}

/*  */



var uid$2 = 0;

/**
 * A watcher parses an expression, collects dependencies,
 * and fires callback when the expression value changes.
 * This is used for both the $watch() api and directives.
 */
var Watcher = function Watcher (
  vm,
  expOrFn,
  cb,
  options,
  isRenderWatcher
) {
  this.vm = vm;
  if (isRenderWatcher) {
    vm._watcher = this;
  }
  vm._watchers.push(this);
  // options
  if (options) {
    this.deep = !!options.deep;
    this.user = !!options.user;
    this.lazy = !!options.lazy;
    this.sync = !!options.sync;
    this.before = options.before;
  } else {
    this.deep = this.user = this.lazy = this.sync = false;
  }
  this.cb = cb;
  this.id = ++uid$2; // uid for batching
  this.active = true;
  this.dirty = this.lazy; // for lazy watchers
  this.deps = [];
  this.newDeps = [];
  this.depIds = new _Set();
  this.newDepIds = new _Set();
  this.expression =  true
    ? expOrFn.toString()
    : undefined;
  // parse expression for getter
  if (typeof expOrFn === 'function') {
    this.getter = expOrFn;
  } else {
    this.getter = parsePath(expOrFn);
    if (!this.getter) {
      this.getter = noop;
       true && warn(
        "Failed watching path: \"" + expOrFn + "\" " +
        'Watcher only accepts simple dot-delimited paths. ' +
        'For full control, use a function instead.',
        vm
      );
    }
  }
  this.value = this.lazy
    ? undefined
    : this.get();
};

/**
 * Evaluate the getter, and re-collect dependencies.
 */
Watcher.prototype.get = function get () {
  pushTarget(this);
  var value;
  var vm = this.vm;
  try {
    value = this.getter.call(vm, vm);
  } catch (e) {
    if (this.user) {
      handleError(e, vm, ("getter for watcher \"" + (this.expression) + "\""));
    } else {
      throw e
    }
  } finally {
    // "touch" every property so they are all tracked as
    // dependencies for deep watching
    if (this.deep) {
      traverse(value);
    }
    popTarget();
    this.cleanupDeps();
  }
  return value
};

/**
 * Add a dependency to this directive.
 */
Watcher.prototype.addDep = function addDep (dep) {
  var id = dep.id;
  if (!this.newDepIds.has(id)) {
    this.newDepIds.add(id);
    this.newDeps.push(dep);
    if (!this.depIds.has(id)) {
      dep.addSub(this);
    }
  }
};

/**
 * Clean up for dependency collection.
 */
Watcher.prototype.cleanupDeps = function cleanupDeps () {
  var i = this.deps.length;
  while (i--) {
    var dep = this.deps[i];
    if (!this.newDepIds.has(dep.id)) {
      dep.removeSub(this);
    }
  }
  var tmp = this.depIds;
  this.depIds = this.newDepIds;
  this.newDepIds = tmp;
  this.newDepIds.clear();
  tmp = this.deps;
  this.deps = this.newDeps;
  this.newDeps = tmp;
  this.newDeps.length = 0;
};

/**
 * Subscriber interface.
 * Will be called when a dependency changes.
 */
Watcher.prototype.update = function update () {
  /* istanbul ignore else */
  if (this.lazy) {
    this.dirty = true;
  } else if (this.sync) {
    this.run();
  } else {
    queueWatcher(this);
  }
};

/**
 * Scheduler job interface.
 * Will be called by the scheduler.
 */
Watcher.prototype.run = function run () {
  if (this.active) {
    var value = this.get();
    if (
      value !== this.value ||
      // Deep watchers and watchers on Object/Arrays should fire even
      // when the value is the same, because the value may
      // have mutated.
      isObject(value) ||
      this.deep
    ) {
      // set new value
      var oldValue = this.value;
      this.value = value;
      if (this.user) {
        try {
          this.cb.call(this.vm, value, oldValue);
        } catch (e) {
          handleError(e, this.vm, ("callback for watcher \"" + (this.expression) + "\""));
        }
      } else {
        this.cb.call(this.vm, value, oldValue);
      }
    }
  }
};

/**
 * Evaluate the value of the watcher.
 * This only gets called for lazy watchers.
 */
Watcher.prototype.evaluate = function evaluate () {
  this.value = this.get();
  this.dirty = false;
};

/**
 * Depend on all deps collected by this watcher.
 */
Watcher.prototype.depend = function depend () {
  var i = this.deps.length;
  while (i--) {
    this.deps[i].depend();
  }
};

/**
 * Remove self from all dependencies' subscriber list.
 */
Watcher.prototype.teardown = function teardown () {
  if (this.active) {
    // remove self from vm's watcher list
    // this is a somewhat expensive operation so we skip it
    // if the vm is being destroyed.
    if (!this.vm._isBeingDestroyed) {
      remove(this.vm._watchers, this);
    }
    var i = this.deps.length;
    while (i--) {
      this.deps[i].removeSub(this);
    }
    this.active = false;
  }
};

/*  */

var sharedPropertyDefinition = {
  enumerable: true,
  configurable: true,
  get: noop,
  set: noop
};

function proxy (target, sourceKey, key) {
  sharedPropertyDefinition.get = function proxyGetter () {
    return this[sourceKey][key]
  };
  sharedPropertyDefinition.set = function proxySetter (val) {
    this[sourceKey][key] = val;
  };
  Object.defineProperty(target, key, sharedPropertyDefinition);
}

function initState (vm) {
  vm._watchers = [];
  var opts = vm.$options;
  if (opts.props) { initProps(vm, opts.props); }
  if (opts.methods) { initMethods(vm, opts.methods); }
  if (opts.data) {
    initData(vm);
  } else {
    observe(vm._data = {}, true /* asRootData */);
  }
  if (opts.computed) { initComputed(vm, opts.computed); }
  if (opts.watch && opts.watch !== nativeWatch) {
    initWatch(vm, opts.watch);
  }
}

function initProps (vm, propsOptions) {
  var propsData = vm.$options.propsData || {};
  var props = vm._props = {};
  // cache prop keys so that future props updates can iterate using Array
  // instead of dynamic object key enumeration.
  var keys = vm.$options._propKeys = [];
  var isRoot = !vm.$parent;
  // root instance props should be converted
  if (!isRoot) {
    toggleObserving(false);
  }
  var loop = function ( key ) {
    keys.push(key);
    var value = validateProp(key, propsOptions, propsData, vm);
    /* istanbul ignore else */
    if (true) {
      var hyphenatedKey = hyphenate(key);
      if (isReservedAttribute(hyphenatedKey) ||
          config.isReservedAttr(hyphenatedKey)) {
        warn(
          ("\"" + hyphenatedKey + "\" is a reserved attribute and cannot be used as component prop."),
          vm
        );
      }
      defineReactive$$1(props, key, value, function () {
        if (!isRoot && !isUpdatingChildComponent) {
          {
            if(vm.mpHost === 'mp-baidu' || vm.mpHost === 'mp-kuaishou' || vm.mpHost === 'mp-xhs'){//百度、快手、小红书 observer 在 setData callback 之后触发，直接忽略该 warn
                return
            }
            //fixed by xxxxxx __next_tick_pending,uni://form-field 时不告警
            if(
                key === 'value' && 
                Array.isArray(vm.$options.behaviors) &&
                vm.$options.behaviors.indexOf('uni://form-field') !== -1
              ){
              return
            }
            if(vm._getFormData){
              return
            }
            var $parent = vm.$parent;
            while($parent){
              if($parent.__next_tick_pending){
                return  
              }
              $parent = $parent.$parent;
            }
          }
          warn(
            "Avoid mutating a prop directly since the value will be " +
            "overwritten whenever the parent component re-renders. " +
            "Instead, use a data or computed property based on the prop's " +
            "value. Prop being mutated: \"" + key + "\"",
            vm
          );
        }
      });
    } else {}
    // static props are already proxied on the component's prototype
    // during Vue.extend(). We only need to proxy props defined at
    // instantiation here.
    if (!(key in vm)) {
      proxy(vm, "_props", key);
    }
  };

  for (var key in propsOptions) loop( key );
  toggleObserving(true);
}

function initData (vm) {
  var data = vm.$options.data;
  data = vm._data = typeof data === 'function'
    ? getData(data, vm)
    : data || {};
  if (!isPlainObject(data)) {
    data = {};
     true && warn(
      'data functions should return an object:\n' +
      'https://vuejs.org/v2/guide/components.html#data-Must-Be-a-Function',
      vm
    );
  }
  // proxy data on instance
  var keys = Object.keys(data);
  var props = vm.$options.props;
  var methods = vm.$options.methods;
  var i = keys.length;
  while (i--) {
    var key = keys[i];
    if (true) {
      if (methods && hasOwn(methods, key)) {
        warn(
          ("Method \"" + key + "\" has already been defined as a data property."),
          vm
        );
      }
    }
    if (props && hasOwn(props, key)) {
       true && warn(
        "The data property \"" + key + "\" is already declared as a prop. " +
        "Use prop default value instead.",
        vm
      );
    } else if (!isReserved(key)) {
      proxy(vm, "_data", key);
    }
  }
  // observe data
  observe(data, true /* asRootData */);
}

function getData (data, vm) {
  // #7573 disable dep collection when invoking data getters
  pushTarget();
  try {
    return data.call(vm, vm)
  } catch (e) {
    handleError(e, vm, "data()");
    return {}
  } finally {
    popTarget();
  }
}

var computedWatcherOptions = { lazy: true };

function initComputed (vm, computed) {
  // $flow-disable-line
  var watchers = vm._computedWatchers = Object.create(null);
  // computed properties are just getters during SSR
  var isSSR = isServerRendering();

  for (var key in computed) {
    var userDef = computed[key];
    var getter = typeof userDef === 'function' ? userDef : userDef.get;
    if ( true && getter == null) {
      warn(
        ("Getter is missing for computed property \"" + key + "\"."),
        vm
      );
    }

    if (!isSSR) {
      // create internal watcher for the computed property.
      watchers[key] = new Watcher(
        vm,
        getter || noop,
        noop,
        computedWatcherOptions
      );
    }

    // component-defined computed properties are already defined on the
    // component prototype. We only need to define computed properties defined
    // at instantiation here.
    if (!(key in vm)) {
      defineComputed(vm, key, userDef);
    } else if (true) {
      if (key in vm.$data) {
        warn(("The computed property \"" + key + "\" is already defined in data."), vm);
      } else if (vm.$options.props && key in vm.$options.props) {
        warn(("The computed property \"" + key + "\" is already defined as a prop."), vm);
      }
    }
  }
}

function defineComputed (
  target,
  key,
  userDef
) {
  var shouldCache = !isServerRendering();
  if (typeof userDef === 'function') {
    sharedPropertyDefinition.get = shouldCache
      ? createComputedGetter(key)
      : createGetterInvoker(userDef);
    sharedPropertyDefinition.set = noop;
  } else {
    sharedPropertyDefinition.get = userDef.get
      ? shouldCache && userDef.cache !== false
        ? createComputedGetter(key)
        : createGetterInvoker(userDef.get)
      : noop;
    sharedPropertyDefinition.set = userDef.set || noop;
  }
  if ( true &&
      sharedPropertyDefinition.set === noop) {
    sharedPropertyDefinition.set = function () {
      warn(
        ("Computed property \"" + key + "\" was assigned to but it has no setter."),
        this
      );
    };
  }
  Object.defineProperty(target, key, sharedPropertyDefinition);
}

function createComputedGetter (key) {
  return function computedGetter () {
    var watcher = this._computedWatchers && this._computedWatchers[key];
    if (watcher) {
      if (watcher.dirty) {
        watcher.evaluate();
      }
      if (Dep.SharedObject.target) {// fixed by xxxxxx
        watcher.depend();
      }
      return watcher.value
    }
  }
}

function createGetterInvoker(fn) {
  return function computedGetter () {
    return fn.call(this, this)
  }
}

function initMethods (vm, methods) {
  var props = vm.$options.props;
  for (var key in methods) {
    if (true) {
      if (typeof methods[key] !== 'function') {
        warn(
          "Method \"" + key + "\" has type \"" + (typeof methods[key]) + "\" in the component definition. " +
          "Did you reference the function correctly?",
          vm
        );
      }
      if (props && hasOwn(props, key)) {
        warn(
          ("Method \"" + key + "\" has already been defined as a prop."),
          vm
        );
      }
      if ((key in vm) && isReserved(key)) {
        warn(
          "Method \"" + key + "\" conflicts with an existing Vue instance method. " +
          "Avoid defining component methods that start with _ or $."
        );
      }
    }
    vm[key] = typeof methods[key] !== 'function' ? noop : bind(methods[key], vm);
  }
}

function initWatch (vm, watch) {
  for (var key in watch) {
    var handler = watch[key];
    if (Array.isArray(handler)) {
      for (var i = 0; i < handler.length; i++) {
        createWatcher(vm, key, handler[i]);
      }
    } else {
      createWatcher(vm, key, handler);
    }
  }
}

function createWatcher (
  vm,
  expOrFn,
  handler,
  options
) {
  if (isPlainObject(handler)) {
    options = handler;
    handler = handler.handler;
  }
  if (typeof handler === 'string') {
    handler = vm[handler];
  }
  return vm.$watch(expOrFn, handler, options)
}

function stateMixin (Vue) {
  // flow somehow has problems with directly declared definition object
  // when using Object.defineProperty, so we have to procedurally build up
  // the object here.
  var dataDef = {};
  dataDef.get = function () { return this._data };
  var propsDef = {};
  propsDef.get = function () { return this._props };
  if (true) {
    dataDef.set = function () {
      warn(
        'Avoid replacing instance root $data. ' +
        'Use nested data properties instead.',
        this
      );
    };
    propsDef.set = function () {
      warn("$props is readonly.", this);
    };
  }
  Object.defineProperty(Vue.prototype, '$data', dataDef);
  Object.defineProperty(Vue.prototype, '$props', propsDef);

  Vue.prototype.$set = set;
  Vue.prototype.$delete = del;

  Vue.prototype.$watch = function (
    expOrFn,
    cb,
    options
  ) {
    var vm = this;
    if (isPlainObject(cb)) {
      return createWatcher(vm, expOrFn, cb, options)
    }
    options = options || {};
    options.user = true;
    var watcher = new Watcher(vm, expOrFn, cb, options);
    if (options.immediate) {
      try {
        cb.call(vm, watcher.value);
      } catch (error) {
        handleError(error, vm, ("callback for immediate watcher \"" + (watcher.expression) + "\""));
      }
    }
    return function unwatchFn () {
      watcher.teardown();
    }
  };
}

/*  */

var uid$3 = 0;

function initMixin (Vue) {
  Vue.prototype._init = function (options) {
    var vm = this;
    // a uid
    vm._uid = uid$3++;

    var startTag, endTag;
    /* istanbul ignore if */
    if ( true && config.performance && mark) {
      startTag = "vue-perf-start:" + (vm._uid);
      endTag = "vue-perf-end:" + (vm._uid);
      mark(startTag);
    }

    // a flag to avoid this being observed
    vm._isVue = true;
    // merge options
    if (options && options._isComponent) {
      // optimize internal component instantiation
      // since dynamic options merging is pretty slow, and none of the
      // internal component options needs special treatment.
      initInternalComponent(vm, options);
    } else {
      vm.$options = mergeOptions(
        resolveConstructorOptions(vm.constructor),
        options || {},
        vm
      );
    }
    /* istanbul ignore else */
    if (true) {
      initProxy(vm);
    } else {}
    // expose real self
    vm._self = vm;
    initLifecycle(vm);
    initEvents(vm);
    initRender(vm);
    callHook(vm, 'beforeCreate');
    !vm._$fallback && initInjections(vm); // resolve injections before data/props  
    initState(vm);
    !vm._$fallback && initProvide(vm); // resolve provide after data/props
    !vm._$fallback && callHook(vm, 'created');      

    /* istanbul ignore if */
    if ( true && config.performance && mark) {
      vm._name = formatComponentName(vm, false);
      mark(endTag);
      measure(("vue " + (vm._name) + " init"), startTag, endTag);
    }

    if (vm.$options.el) {
      vm.$mount(vm.$options.el);
    }
  };
}

function initInternalComponent (vm, options) {
  var opts = vm.$options = Object.create(vm.constructor.options);
  // doing this because it's faster than dynamic enumeration.
  var parentVnode = options._parentVnode;
  opts.parent = options.parent;
  opts._parentVnode = parentVnode;

  var vnodeComponentOptions = parentVnode.componentOptions;
  opts.propsData = vnodeComponentOptions.propsData;
  opts._parentListeners = vnodeComponentOptions.listeners;
  opts._renderChildren = vnodeComponentOptions.children;
  opts._componentTag = vnodeComponentOptions.tag;

  if (options.render) {
    opts.render = options.render;
    opts.staticRenderFns = options.staticRenderFns;
  }
}

function resolveConstructorOptions (Ctor) {
  var options = Ctor.options;
  if (Ctor.super) {
    var superOptions = resolveConstructorOptions(Ctor.super);
    var cachedSuperOptions = Ctor.superOptions;
    if (superOptions !== cachedSuperOptions) {
      // super option changed,
      // need to resolve new options.
      Ctor.superOptions = superOptions;
      // check if there are any late-modified/attached options (#4976)
      var modifiedOptions = resolveModifiedOptions(Ctor);
      // update base extend options
      if (modifiedOptions) {
        extend(Ctor.extendOptions, modifiedOptions);
      }
      options = Ctor.options = mergeOptions(superOptions, Ctor.extendOptions);
      if (options.name) {
        options.components[options.name] = Ctor;
      }
    }
  }
  return options
}

function resolveModifiedOptions (Ctor) {
  var modified;
  var latest = Ctor.options;
  var sealed = Ctor.sealedOptions;
  for (var key in latest) {
    if (latest[key] !== sealed[key]) {
      if (!modified) { modified = {}; }
      modified[key] = latest[key];
    }
  }
  return modified
}

function Vue (options) {
  if ( true &&
    !(this instanceof Vue)
  ) {
    warn('Vue is a constructor and should be called with the `new` keyword');
  }
  this._init(options);
}

initMixin(Vue);
stateMixin(Vue);
eventsMixin(Vue);
lifecycleMixin(Vue);
renderMixin(Vue);

/*  */

function initUse (Vue) {
  Vue.use = function (plugin) {
    var installedPlugins = (this._installedPlugins || (this._installedPlugins = []));
    if (installedPlugins.indexOf(plugin) > -1) {
      return this
    }

    // additional parameters
    var args = toArray(arguments, 1);
    args.unshift(this);
    if (typeof plugin.install === 'function') {
      plugin.install.apply(plugin, args);
    } else if (typeof plugin === 'function') {
      plugin.apply(null, args);
    }
    installedPlugins.push(plugin);
    return this
  };
}

/*  */

function initMixin$1 (Vue) {
  Vue.mixin = function (mixin) {
    this.options = mergeOptions(this.options, mixin);
    return this
  };
}

/*  */

function initExtend (Vue) {
  /**
   * Each instance constructor, including Vue, has a unique
   * cid. This enables us to create wrapped "child
   * constructors" for prototypal inheritance and cache them.
   */
  Vue.cid = 0;
  var cid = 1;

  /**
   * Class inheritance
   */
  Vue.extend = function (extendOptions) {
    extendOptions = extendOptions || {};
    var Super = this;
    var SuperId = Super.cid;
    var cachedCtors = extendOptions._Ctor || (extendOptions._Ctor = {});
    if (cachedCtors[SuperId]) {
      return cachedCtors[SuperId]
    }

    var name = extendOptions.name || Super.options.name;
    if ( true && name) {
      validateComponentName(name);
    }

    var Sub = function VueComponent (options) {
      this._init(options);
    };
    Sub.prototype = Object.create(Super.prototype);
    Sub.prototype.constructor = Sub;
    Sub.cid = cid++;
    Sub.options = mergeOptions(
      Super.options,
      extendOptions
    );
    Sub['super'] = Super;

    // For props and computed properties, we define the proxy getters on
    // the Vue instances at extension time, on the extended prototype. This
    // avoids Object.defineProperty calls for each instance created.
    if (Sub.options.props) {
      initProps$1(Sub);
    }
    if (Sub.options.computed) {
      initComputed$1(Sub);
    }

    // allow further extension/mixin/plugin usage
    Sub.extend = Super.extend;
    Sub.mixin = Super.mixin;
    Sub.use = Super.use;

    // create asset registers, so extended classes
    // can have their private assets too.
    ASSET_TYPES.forEach(function (type) {
      Sub[type] = Super[type];
    });
    // enable recursive self-lookup
    if (name) {
      Sub.options.components[name] = Sub;
    }

    // keep a reference to the super options at extension time.
    // later at instantiation we can check if Super's options have
    // been updated.
    Sub.superOptions = Super.options;
    Sub.extendOptions = extendOptions;
    Sub.sealedOptions = extend({}, Sub.options);

    // cache constructor
    cachedCtors[SuperId] = Sub;
    return Sub
  };
}

function initProps$1 (Comp) {
  var props = Comp.options.props;
  for (var key in props) {
    proxy(Comp.prototype, "_props", key);
  }
}

function initComputed$1 (Comp) {
  var computed = Comp.options.computed;
  for (var key in computed) {
    defineComputed(Comp.prototype, key, computed[key]);
  }
}

/*  */

function initAssetRegisters (Vue) {
  /**
   * Create asset registration methods.
   */
  ASSET_TYPES.forEach(function (type) {
    Vue[type] = function (
      id,
      definition
    ) {
      if (!definition) {
        return this.options[type + 's'][id]
      } else {
        /* istanbul ignore if */
        if ( true && type === 'component') {
          validateComponentName(id);
        }
        if (type === 'component' && isPlainObject(definition)) {
          definition.name = definition.name || id;
          definition = this.options._base.extend(definition);
        }
        if (type === 'directive' && typeof definition === 'function') {
          definition = { bind: definition, update: definition };
        }
        this.options[type + 's'][id] = definition;
        return definition
      }
    };
  });
}

/*  */



function getComponentName (opts) {
  return opts && (opts.Ctor.options.name || opts.tag)
}

function matches (pattern, name) {
  if (Array.isArray(pattern)) {
    return pattern.indexOf(name) > -1
  } else if (typeof pattern === 'string') {
    return pattern.split(',').indexOf(name) > -1
  } else if (isRegExp(pattern)) {
    return pattern.test(name)
  }
  /* istanbul ignore next */
  return false
}

function pruneCache (keepAliveInstance, filter) {
  var cache = keepAliveInstance.cache;
  var keys = keepAliveInstance.keys;
  var _vnode = keepAliveInstance._vnode;
  for (var key in cache) {
    var cachedNode = cache[key];
    if (cachedNode) {
      var name = getComponentName(cachedNode.componentOptions);
      if (name && !filter(name)) {
        pruneCacheEntry(cache, key, keys, _vnode);
      }
    }
  }
}

function pruneCacheEntry (
  cache,
  key,
  keys,
  current
) {
  var cached$$1 = cache[key];
  if (cached$$1 && (!current || cached$$1.tag !== current.tag)) {
    cached$$1.componentInstance.$destroy();
  }
  cache[key] = null;
  remove(keys, key);
}

var patternTypes = [String, RegExp, Array];

var KeepAlive = {
  name: 'keep-alive',
  abstract: true,

  props: {
    include: patternTypes,
    exclude: patternTypes,
    max: [String, Number]
  },

  created: function created () {
    this.cache = Object.create(null);
    this.keys = [];
  },

  destroyed: function destroyed () {
    for (var key in this.cache) {
      pruneCacheEntry(this.cache, key, this.keys);
    }
  },

  mounted: function mounted () {
    var this$1 = this;

    this.$watch('include', function (val) {
      pruneCache(this$1, function (name) { return matches(val, name); });
    });
    this.$watch('exclude', function (val) {
      pruneCache(this$1, function (name) { return !matches(val, name); });
    });
  },

  render: function render () {
    var slot = this.$slots.default;
    var vnode = getFirstComponentChild(slot);
    var componentOptions = vnode && vnode.componentOptions;
    if (componentOptions) {
      // check pattern
      var name = getComponentName(componentOptions);
      var ref = this;
      var include = ref.include;
      var exclude = ref.exclude;
      if (
        // not included
        (include && (!name || !matches(include, name))) ||
        // excluded
        (exclude && name && matches(exclude, name))
      ) {
        return vnode
      }

      var ref$1 = this;
      var cache = ref$1.cache;
      var keys = ref$1.keys;
      var key = vnode.key == null
        // same constructor may get registered as different local components
        // so cid alone is not enough (#3269)
        ? componentOptions.Ctor.cid + (componentOptions.tag ? ("::" + (componentOptions.tag)) : '')
        : vnode.key;
      if (cache[key]) {
        vnode.componentInstance = cache[key].componentInstance;
        // make current key freshest
        remove(keys, key);
        keys.push(key);
      } else {
        cache[key] = vnode;
        keys.push(key);
        // prune oldest entry
        if (this.max && keys.length > parseInt(this.max)) {
          pruneCacheEntry(cache, keys[0], keys, this._vnode);
        }
      }

      vnode.data.keepAlive = true;
    }
    return vnode || (slot && slot[0])
  }
};

var builtInComponents = {
  KeepAlive: KeepAlive
};

/*  */

function initGlobalAPI (Vue) {
  // config
  var configDef = {};
  configDef.get = function () { return config; };
  if (true) {
    configDef.set = function () {
      warn(
        'Do not replace the Vue.config object, set individual fields instead.'
      );
    };
  }
  Object.defineProperty(Vue, 'config', configDef);

  // exposed util methods.
  // NOTE: these are not considered part of the public API - avoid relying on
  // them unless you are aware of the risk.
  Vue.util = {
    warn: warn,
    extend: extend,
    mergeOptions: mergeOptions,
    defineReactive: defineReactive$$1
  };

  Vue.set = set;
  Vue.delete = del;
  Vue.nextTick = nextTick;

  // 2.6 explicit observable API
  Vue.observable = function (obj) {
    observe(obj);
    return obj
  };

  Vue.options = Object.create(null);
  ASSET_TYPES.forEach(function (type) {
    Vue.options[type + 's'] = Object.create(null);
  });

  // this is used to identify the "base" constructor to extend all plain-object
  // components with in Weex's multi-instance scenarios.
  Vue.options._base = Vue;

  extend(Vue.options.components, builtInComponents);

  initUse(Vue);
  initMixin$1(Vue);
  initExtend(Vue);
  initAssetRegisters(Vue);
}

initGlobalAPI(Vue);

Object.defineProperty(Vue.prototype, '$isServer', {
  get: isServerRendering
});

Object.defineProperty(Vue.prototype, '$ssrContext', {
  get: function get () {
    /* istanbul ignore next */
    return this.$vnode && this.$vnode.ssrContext
  }
});

// expose FunctionalRenderContext for ssr runtime helper installation
Object.defineProperty(Vue, 'FunctionalRenderContext', {
  value: FunctionalRenderContext
});

Vue.version = '2.6.11';

/**
 * https://raw.githubusercontent.com/Tencent/westore/master/packages/westore/utils/diff.js
 */
var ARRAYTYPE = '[object Array]';
var OBJECTTYPE = '[object Object]';
var NULLTYPE = '[object Null]';
var UNDEFINEDTYPE = '[object Undefined]';
// const FUNCTIONTYPE = '[object Function]'

function diff(current, pre) {
    var result = {};
    syncKeys(current, pre);
    _diff(current, pre, '', result);
    return result
}

function syncKeys(current, pre) {
    if (current === pre) { return }
    var rootCurrentType = type(current);
    var rootPreType = type(pre);
    if (rootCurrentType == OBJECTTYPE && rootPreType == OBJECTTYPE) {
        if(Object.keys(current).length >= Object.keys(pre).length){
            for (var key in pre) {
                var currentValue = current[key];
                if (currentValue === undefined) {
                    current[key] = null;
                } else {
                    syncKeys(currentValue, pre[key]);
                }
            }
        }
    } else if (rootCurrentType == ARRAYTYPE && rootPreType == ARRAYTYPE) {
        if (current.length >= pre.length) {
            pre.forEach(function (item, index) {
                syncKeys(current[index], item);
            });
        }
    }
}

function nullOrUndefined(currentType, preType) {
    if(
        (currentType === NULLTYPE || currentType === UNDEFINEDTYPE) && 
        (preType === NULLTYPE || preType === UNDEFINEDTYPE)
    ) {
        return false
    }
    return true
}

function _diff(current, pre, path, result) {
    if (current === pre) { return }
    var rootCurrentType = type(current);
    var rootPreType = type(pre);
    if (rootCurrentType == OBJECTTYPE) {
        if (rootPreType != OBJECTTYPE || Object.keys(current).length < Object.keys(pre).length) {
            setResult(result, path, current);
        } else {
            var loop = function ( key ) {
                var currentValue = current[key];
                var preValue = pre[key];
                var currentType = type(currentValue);
                var preType = type(preValue);
                if (currentType != ARRAYTYPE && currentType != OBJECTTYPE) {
                    if (currentValue !== pre[key] && nullOrUndefined(currentType, preType)) {
                        setResult(result, (path == '' ? '' : path + ".") + key, currentValue);
                    }
                } else if (currentType == ARRAYTYPE) {
                    if (preType != ARRAYTYPE) {
                        setResult(result, (path == '' ? '' : path + ".") + key, currentValue);
                    } else {
                        if (currentValue.length < preValue.length) {
                            setResult(result, (path == '' ? '' : path + ".") + key, currentValue);
                        } else {
                            currentValue.forEach(function (item, index) {
                                _diff(item, preValue[index], (path == '' ? '' : path + ".") + key + '[' + index + ']', result);
                            });
                        }
                    }
                } else if (currentType == OBJECTTYPE) {
                    if (preType != OBJECTTYPE || Object.keys(currentValue).length < Object.keys(preValue).length) {
                        setResult(result, (path == '' ? '' : path + ".") + key, currentValue);
                    } else {
                        for (var subKey in currentValue) {
                            _diff(currentValue[subKey], preValue[subKey], (path == '' ? '' : path + ".") + key + '.' + subKey, result);
                        }
                    }
                }
            };

            for (var key in current) loop( key );
        }
    } else if (rootCurrentType == ARRAYTYPE) {
        if (rootPreType != ARRAYTYPE) {
            setResult(result, path, current);
        } else {
            if (current.length < pre.length) {
                setResult(result, path, current);
            } else {
                current.forEach(function (item, index) {
                    _diff(item, pre[index], path + '[' + index + ']', result);
                });
            }
        }
    } else {
        setResult(result, path, current);
    }
}

function setResult(result, k, v) {
    // if (type(v) != FUNCTIONTYPE) {
        result[k] = v;
    // }
}

function type(obj) {
    return Object.prototype.toString.call(obj)
}

/**
 * rfdc v1.4.1
 * David Mark Clements <david.clements@nearform.com>
 * Really Fast Deep Clone
 * [npm](https://www.npmjs.com/package/rfdc) [homePage](https://github.com/davidmarkclements/rfdc.git)
 */

/**
 * @typedef {{proto?: boolean; circles?: boolean; reviver: (key: string, value: any) => any; constructorHandlers?: any[];}} Options
 */

function copyBuffer(cur) {
  if (cur instanceof Buffer) {
    return Buffer.from(cur)
  }

  return new cur.constructor(cur.buffer.slice(), cur.byteOffset, cur.length)
}

/**
 *
 * @param {Options} opts
 * @returns {(o: any) => any}
 */
function rfdc(opts) {
  opts = opts || {};
  if (opts.circles) { return rfdcCircles(opts) }

  var constructorHandlers = new Map();
  constructorHandlers.set(Date, function (o) { return new Date(o); });
  constructorHandlers.set(Map, function (o, fn) { return new Map(cloneArray(Array.from(o), fn)); });
  constructorHandlers.set(Set, function (o, fn) { return new Set(cloneArray(Array.from(o), fn)); });
  if (opts.constructorHandlers) {
    opts.constructorHandlers.forEach(function (handler) {
      constructorHandlers.set(handler[0], handler[1]);
    });
  }

  var handler = null;

  return opts.proto ? cloneProto : clone

  function cloneArray(a, fn) {
    var keys = Object.keys(a);
    var a2 = new Array(keys.length);
    for (var i = 0; i < keys.length; i++) {
      var k = keys[i];
      var cur = a[k];
      if (typeof cur !== 'object' || cur === null) {
        a2[k] = cur;
      } else if (cur.constructor !== Object && (handler = constructorHandlers.get(cur.constructor))) {
        a2[k] = handler(cur, fn);
      } else if (ArrayBuffer.isView(cur)) {
        a2[k] = copyBuffer(cur);
      } else {
        a2[k] = fn(cur);
      }
    }
    return a2
  }

  function clone(o) {
    if (typeof o !== 'object' || o === null) { return o }
    if (Array.isArray(o)) { return cloneArray(o, clone) }
    if (o.constructor !== Object && (handler = constructorHandlers.get(o.constructor))) {
      return handler(o, clone)
    }
    var o2 = {};
    for (var k in o) {
      if (Object.hasOwnProperty.call(o, k) === false) { continue }
      var cur = o[k];
      if (typeof cur !== 'object' || cur === null) {
        o2[k] = cur;
      } else if (cur.constructor !== Object && (handler = constructorHandlers.get(cur.constructor))) {
        o2[k] = handler(cur, clone);
      } else if (ArrayBuffer.isView(cur)) {
        o2[k] = copyBuffer(cur);
      } else {
        o2[k] = clone(opts.reviver ? opts.reviver(k, cur) : cur);
      }
    }
    return o2
  }

  function cloneProto(o) {
    if (typeof o !== 'object' || o === null) { return o }
    if (Array.isArray(o)) { return cloneArray(o, cloneProto) }
    if (o.constructor !== Object && (handler = constructorHandlers.get(o.constructor))) {
      return handler(o, cloneProto)
    }
    var o2 = {};
    for (var k in o) {
      var cur = o[k];
      if (typeof cur !== 'object' || cur === null) {
        o2[k] = cur;
      } else if (cur.constructor !== Object && (handler = constructorHandlers.get(cur.constructor))) {
        o2[k] = handler(cur, cloneProto);
      } else if (ArrayBuffer.isView(cur)) {
        o2[k] = copyBuffer(cur);
      } else {
        o2[k] = cloneProto(opts.reviver ? opts.reviver(k, cur) : cur);
      }
    }
    return o2
  }
}

function rfdcCircles(opts) {
  var refs = [];
  var refsNew = [];

  var constructorHandlers = new Map();
  constructorHandlers.set(Date, function (o) { return new Date(o); });
  constructorHandlers.set(Map, function (o, fn) { return new Map(cloneArray(Array.from(o), fn)); });
  constructorHandlers.set(Set, function (o, fn) { return new Set(cloneArray(Array.from(o), fn)); });
  if (opts.constructorHandlers) {
    opts.constructorHandlers.forEach(function (handler) {
      constructorHandlers.set(handler[0], handler[1]);
    });
  }

  var handler = null;
  return opts.proto ? cloneProto : clone

  function cloneArray(a, fn) {
    var keys = Object.keys(a);
    var a2 = new Array(keys.length);
    for (var i = 0; i < keys.length; i++) {
      var k = keys[i];
      var cur = a[k];
      if (typeof cur !== 'object' || cur === null) {
        a2[k] = cur;
      } else if (cur.constructor !== Object && (handler = constructorHandlers.get(cur.constructor))) {
        a2[k] = handler(cur, fn);
      } else if (ArrayBuffer.isView(cur)) {
        a2[k] = copyBuffer(cur);
      } else {
        var index = refs.indexOf(cur);
        if (index !== -1) {
          a2[k] = refsNew[index];
        } else {
          a2[k] = fn(cur);
        }
      }
    }
    return a2
  }

  function clone(o) {
    if (typeof o !== 'object' || o === null) { return o }
    if (Array.isArray(o)) { return cloneArray(o, clone) }
    if (o.constructor !== Object && (handler = constructorHandlers.get(o.constructor))) {
      return handler(o, clone)
    }
    var o2 = {};
    refs.push(o);
    refsNew.push(o2);
    for (var k in o) {
      if (Object.hasOwnProperty.call(o, k) === false) { continue }
      var cur = o[k];
      if (typeof cur !== 'object' || cur === null) {
        o2[k] = cur;
      } else if (cur.constructor !== Object && (handler = constructorHandlers.get(cur.constructor))) {
        o2[k] = handler(cur, clone);
      } else if (ArrayBuffer.isView(cur)) {
        o2[k] = copyBuffer(cur);
      } else {
        var i = refs.indexOf(cur);
        if (i !== -1) {
          o2[k] = refsNew[i];
        } else {
          o2[k] = clone(opts.reviver ? opts.reviver(k, cur) : cur);
        }
      }
    }
    refs.pop();
    refsNew.pop();
    return o2
  }

  function cloneProto(o) {
    if (typeof o !== 'object' || o === null) { return o }
    if (Array.isArray(o)) { return cloneArray(o, cloneProto) }
    if (o.constructor !== Object && (handler = constructorHandlers.get(o.constructor))) {
      return handler(o, cloneProto)
    }
    var o2 = {};
    refs.push(o);
    refsNew.push(o2);
    for (var k in o) {
      var cur = o[k];
      if (typeof cur !== 'object' || cur === null) {
        o2[k] = cur;
      } else if (cur.constructor !== Object && (handler = constructorHandlers.get(cur.constructor))) {
        o2[k] = handler(cur, cloneProto);
      } else if (ArrayBuffer.isView(cur)) {
        o2[k] = copyBuffer(cur);
      } else {
        var i = refs.indexOf(cur);
        if (i !== -1) {
          o2[k] = refsNew[i];
        } else {
          o2[k] = cloneProto(opts.reviver ? opts.reviver(k, cur) : cur);
        }
      }
    }
    refs.pop();
    refsNew.pop();
    return o2
  }
}

/*  */

function flushCallbacks$1(vm) {
    if (vm.__next_tick_callbacks && vm.__next_tick_callbacks.length) {
        if (Object({"NODE_ENV":"development","VUE_APP_DARK_MODE":"false","VUE_APP_NAME":"昱禾联仓集采物联通","VUE_APP_PLATFORM":"mp-weixin","BASE_URL":"/"}).VUE_APP_DEBUG) {
            var mpInstance = vm.$scope;
            console.log('[' + (+new Date) + '][' + (mpInstance.is || mpInstance.route) + '][' + vm._uid +
                ']:flushCallbacks[' + vm.__next_tick_callbacks.length + ']');
        }
        var copies = vm.__next_tick_callbacks.slice(0);
        vm.__next_tick_callbacks.length = 0;
        for (var i = 0; i < copies.length; i++) {
            copies[i]();
        }
    }
}

function hasRenderWatcher(vm) {
    return queue.find(function (watcher) { return vm._watcher === watcher; })
}

function nextTick$1(vm, cb) {
    //1.nextTick 之前 已 setData 且 setData 还未回调完成
    //2.nextTick 之前存在 render watcher
    if (!vm.__next_tick_pending && !hasRenderWatcher(vm)) {
        if(Object({"NODE_ENV":"development","VUE_APP_DARK_MODE":"false","VUE_APP_NAME":"昱禾联仓集采物联通","VUE_APP_PLATFORM":"mp-weixin","BASE_URL":"/"}).VUE_APP_DEBUG){
            var mpInstance = vm.$scope;
            console.log('[' + (+new Date) + '][' + (mpInstance.is || mpInstance.route) + '][' + vm._uid +
                ']:nextVueTick');
        }
        return nextTick(cb, vm)
    }else{
        if(Object({"NODE_ENV":"development","VUE_APP_DARK_MODE":"false","VUE_APP_NAME":"昱禾联仓集采物联通","VUE_APP_PLATFORM":"mp-weixin","BASE_URL":"/"}).VUE_APP_DEBUG){
            var mpInstance$1 = vm.$scope;
            console.log('[' + (+new Date) + '][' + (mpInstance$1.is || mpInstance$1.route) + '][' + vm._uid +
                ']:nextMPTick');
        }
    }
    var _resolve;
    if (!vm.__next_tick_callbacks) {
        vm.__next_tick_callbacks = [];
    }
    vm.__next_tick_callbacks.push(function () {
        if (cb) {
            try {
                cb.call(vm);
            } catch (e) {
                handleError(e, vm, 'nextTick');
            }
        } else if (_resolve) {
            _resolve(vm);
        }
    });
    // $flow-disable-line
    if (!cb && typeof Promise !== 'undefined') {
        return new Promise(function (resolve) {
            _resolve = resolve;
        })
    }
}

/*  */

function clearInstance(key, value) {
  // 简易去除 Vue 和小程序组件实例
  if (value) {
    if (value._isVue || value.__v_isMPComponent) {
      return {}
    }
  }
  return value
}

var cloneDeepCircles = rfdc({ circles: true, reviver: clearInstance });

function cloneWithData(vm) {
  // 确保当前 vm 所有数据被同步
  var ret = Object.create(null);
  var dataKeys = [].concat(
    Object.keys(vm._data || {}),
    Object.keys(vm._computedWatchers || {}));

  dataKeys.reduce(function(ret, key) {
    ret[key] = vm[key];
    return ret
  }, ret);

  // vue-composition-api
  var compositionApiState = vm.__composition_api_state__ || vm.__secret_vfa_state__;
  var rawBindings = compositionApiState && compositionApiState.rawBindings;
  if (rawBindings) {
    Object.keys(rawBindings).forEach(function (key) {
      ret[key] = vm[key];
    });
  }

  //TODO 需要把无用数据处理掉，比如 list=>l0 则 list 需要移除，否则多传输一份数据
  Object.assign(ret, vm.$mp.data || {});
  if (
    Array.isArray(vm.$options.behaviors) &&
    vm.$options.behaviors.indexOf('uni://form-field') !== -1
  ) { //form-field
    ret['name'] = vm.name;
    ret['value'] = vm.value;
  }

  return cloneDeepCircles(ret)
}

var patch = function(oldVnode, vnode) {
  var this$1 = this;

  if (vnode === null) { //destroy
    return
  }
  if (this.mpType === 'page' || this.mpType === 'component') {
    var mpInstance = this.$scope;
    var data = Object.create(null);
    try {
      data = cloneWithData(this);
    } catch (err) {
      console.error(err);
    }
    data.__webviewId__ = mpInstance.data.__webviewId__;
    var mpData = Object.create(null);
    Object.keys(data).forEach(function (key) { //仅同步 data 中有的数据
      mpData[key] = mpInstance.data[key];
    });
    var diffData = this.$shouldDiffData === false ? data : diff(data, mpData);
    if (Object.keys(diffData).length) {
      if (Object({"NODE_ENV":"development","VUE_APP_DARK_MODE":"false","VUE_APP_NAME":"昱禾联仓集采物联通","VUE_APP_PLATFORM":"mp-weixin","BASE_URL":"/"}).VUE_APP_DEBUG) {
        console.log('[' + (+new Date) + '][' + (mpInstance.is || mpInstance.route) + '][' + this._uid +
          ']差量更新',
          JSON.stringify(diffData));
      }
      this.__next_tick_pending = true;
      mpInstance.setData(diffData, function () {
        this$1.__next_tick_pending = false;
        flushCallbacks$1(this$1);
      });
    } else {
      flushCallbacks$1(this);
    }
  }
};

/*  */

function createEmptyRender() {

}

function mountComponent$1(
  vm,
  el,
  hydrating
) {
  if (!vm.mpType) {//main.js 中的 new Vue
    return vm
  }
  if (vm.mpType === 'app') {
    vm.$options.render = createEmptyRender;
  }
  if (!vm.$options.render) {
    vm.$options.render = createEmptyRender;
    if (true) {
      /* istanbul ignore if */
      if ((vm.$options.template && vm.$options.template.charAt(0) !== '#') ||
        vm.$options.el || el) {
        warn(
          'You are using the runtime-only build of Vue where the template ' +
          'compiler is not available. Either pre-compile the templates into ' +
          'render functions, or use the compiler-included build.',
          vm
        );
      } else {
        warn(
          'Failed to mount component: template or render function not defined.',
          vm
        );
      }
    }
  }
  
  !vm._$fallback && callHook(vm, 'beforeMount');

  var updateComponent = function () {
    vm._update(vm._render(), hydrating);
  };

  // we set this to vm._watcher inside the watcher's constructor
  // since the watcher's initial patch may call $forceUpdate (e.g. inside child
  // component's mounted hook), which relies on vm._watcher being already defined
  new Watcher(vm, updateComponent, noop, {
    before: function before() {
      if (vm._isMounted && !vm._isDestroyed) {
        callHook(vm, 'beforeUpdate');
      }
    }
  }, true /* isRenderWatcher */);
  hydrating = false;
  return vm
}

/*  */

function renderClass (
  staticClass,
  dynamicClass
) {
  if (isDef(staticClass) || isDef(dynamicClass)) {
    return concat(staticClass, stringifyClass(dynamicClass))
  }
  /* istanbul ignore next */
  return ''
}

function concat (a, b) {
  return a ? b ? (a + ' ' + b) : a : (b || '')
}

function stringifyClass (value) {
  if (Array.isArray(value)) {
    return stringifyArray(value)
  }
  if (isObject(value)) {
    return stringifyObject(value)
  }
  if (typeof value === 'string') {
    return value
  }
  /* istanbul ignore next */
  return ''
}

function stringifyArray (value) {
  var res = '';
  var stringified;
  for (var i = 0, l = value.length; i < l; i++) {
    if (isDef(stringified = stringifyClass(value[i])) && stringified !== '') {
      if (res) { res += ' '; }
      res += stringified;
    }
  }
  return res
}

function stringifyObject (value) {
  var res = '';
  for (var key in value) {
    if (value[key]) {
      if (res) { res += ' '; }
      res += key;
    }
  }
  return res
}

/*  */

var parseStyleText = cached(function (cssText) {
  var res = {};
  var listDelimiter = /;(?![^(]*\))/g;
  var propertyDelimiter = /:(.+)/;
  cssText.split(listDelimiter).forEach(function (item) {
    if (item) {
      var tmp = item.split(propertyDelimiter);
      tmp.length > 1 && (res[tmp[0].trim()] = tmp[1].trim());
    }
  });
  return res
});

// normalize possible array / string values into Object
function normalizeStyleBinding (bindingStyle) {
  if (Array.isArray(bindingStyle)) {
    return toObject(bindingStyle)
  }
  if (typeof bindingStyle === 'string') {
    return parseStyleText(bindingStyle)
  }
  return bindingStyle
}

/*  */

var MP_METHODS = ['createSelectorQuery', 'createIntersectionObserver', 'selectAllComponents', 'selectComponent'];

function getTarget(obj, path) {
  var parts = path.split('.');
  var key = parts[0];
  if (key.indexOf('__$n') === 0) { //number index
    key = parseInt(key.replace('__$n', ''));
  }
  if (parts.length === 1) {
    return obj[key]
  }
  return getTarget(obj[key], parts.slice(1).join('.'))
}

function internalMixin(Vue) {

  Vue.config.errorHandler = function(err, vm, info) {
    Vue.util.warn(("Error in " + info + ": \"" + (err.toString()) + "\""), vm);
    console.error(err);
    /* eslint-disable no-undef */
    var app = typeof getApp === 'function' && getApp();
    if (app && app.onError) {
      app.onError(err);
    }
  };

  var oldEmit = Vue.prototype.$emit;

  Vue.prototype.$emit = function(event) {
    if (this.$scope && event) {
      var triggerEvent = this.$scope['_triggerEvent'] || this.$scope['triggerEvent'];
      if (triggerEvent) {
        try {
          triggerEvent.call(this.$scope, event, {
            __args__: toArray(arguments, 1)
          });
        } catch (error) {

        }
      }
    }
    return oldEmit.apply(this, arguments)
  };

  Vue.prototype.$nextTick = function(fn) {
    return nextTick$1(this, fn)
  };

  MP_METHODS.forEach(function (method) {
    Vue.prototype[method] = function(args) {
      if (this.$scope && this.$scope[method]) {
        return this.$scope[method](args)
      }
      // mp-alipay
      if (typeof my === 'undefined') {
        return
      }
      if (method === 'createSelectorQuery') {
        /* eslint-disable no-undef */
        return my.createSelectorQuery(args)
      } else if (method === 'createIntersectionObserver') {
        /* eslint-disable no-undef */
        return my.createIntersectionObserver(args)
      }
      // TODO mp-alipay 暂不支持 selectAllComponents,selectComponent
    };
  });

  Vue.prototype.__init_provide = initProvide;

  Vue.prototype.__init_injections = initInjections;

  Vue.prototype.__call_hook = function(hook, args) {
    var vm = this;
    // #7573 disable dep collection when invoking lifecycle hooks
    pushTarget();
    var handlers = vm.$options[hook];
    var info = hook + " hook";
    var ret;
    if (handlers) {
      for (var i = 0, j = handlers.length; i < j; i++) {
        ret = invokeWithErrorHandling(handlers[i], vm, args ? [args] : null, vm, info);
      }
    }
    if (vm._hasHookEvent) {
      vm.$emit('hook:' + hook, args);
    }
    popTarget();
    return ret
  };

  Vue.prototype.__set_model = function(target, key, value, modifiers) {
    if (Array.isArray(modifiers)) {
      if (modifiers.indexOf('trim') !== -1) {
        value = value.trim();
      }
      if (modifiers.indexOf('number') !== -1) {
        value = this._n(value);
      }
    }
    if (!target) {
      target = this;
    }
    // 解决动态属性添加
    Vue.set(target, key, value);
  };

  Vue.prototype.__set_sync = function(target, key, value) {
    if (!target) {
      target = this;
    }
    // 解决动态属性添加
    Vue.set(target, key, value);
  };

  Vue.prototype.__get_orig = function(item) {
    if (isPlainObject(item)) {
      return item['$orig'] || item
    }
    return item
  };

  Vue.prototype.__get_value = function(dataPath, target) {
    return getTarget(target || this, dataPath)
  };


  Vue.prototype.__get_class = function(dynamicClass, staticClass) {
    return renderClass(staticClass, dynamicClass)
  };

  Vue.prototype.__get_style = function(dynamicStyle, staticStyle) {
    if (!dynamicStyle && !staticStyle) {
      return ''
    }
    var dynamicStyleObj = normalizeStyleBinding(dynamicStyle);
    var styleObj = staticStyle ? extend(staticStyle, dynamicStyleObj) : dynamicStyleObj;
    return Object.keys(styleObj).map(function (name) { return ((hyphenate(name)) + ":" + (styleObj[name])); }).join(';')
  };

  Vue.prototype.__map = function(val, iteratee) {
    //TODO 暂不考虑 string
    var ret, i, l, keys, key;
    if (Array.isArray(val)) {
      ret = new Array(val.length);
      for (i = 0, l = val.length; i < l; i++) {
        ret[i] = iteratee(val[i], i);
      }
      return ret
    } else if (isObject(val)) {
      keys = Object.keys(val);
      ret = Object.create(null);
      for (i = 0, l = keys.length; i < l; i++) {
        key = keys[i];
        ret[key] = iteratee(val[key], key, i);
      }
      return ret
    } else if (typeof val === 'number') {
      ret = new Array(val);
      for (i = 0, l = val; i < l; i++) {
        // 第一个参数暂时仍和小程序一致
        ret[i] = iteratee(i, i);
      }
      return ret
    }
    return []
  };

}

/*  */

var LIFECYCLE_HOOKS$1 = [
    //App
    'onLaunch',
    'onShow',
    'onHide',
    'onUniNViewMessage',
    'onPageNotFound',
    'onThemeChange',
    'onError',
    'onUnhandledRejection',
    //Page
    'onInit',
    'onLoad',
    // 'onShow',
    'onReady',
    // 'onHide',
    'onUnload',
    'onPullDownRefresh',
    'onReachBottom',
    'onTabItemTap',
    'onAddToFavorites',
    'onShareTimeline',
    'onShareAppMessage',
    'onResize',
    'onPageScroll',
    'onNavigationBarButtonTap',
    'onBackPress',
    'onNavigationBarSearchInputChanged',
    'onNavigationBarSearchInputConfirmed',
    'onNavigationBarSearchInputClicked',
    'onUploadDouyinVideo',
    'onNFCReadMessage',
    //Component
    // 'onReady', // 兼容旧版本，应该移除该事件
    'onPageShow',
    'onPageHide',
    'onPageResize'
];
function lifecycleMixin$1(Vue) {

    //fixed vue-class-component
    var oldExtend = Vue.extend;
    Vue.extend = function(extendOptions) {
        extendOptions = extendOptions || {};

        var methods = extendOptions.methods;
        if (methods) {
            Object.keys(methods).forEach(function (methodName) {
                if (LIFECYCLE_HOOKS$1.indexOf(methodName)!==-1) {
                    extendOptions[methodName] = methods[methodName];
                    delete methods[methodName];
                }
            });
        }

        return oldExtend.call(this, extendOptions)
    };

    var strategies = Vue.config.optionMergeStrategies;
    var mergeHook = strategies.created;
    LIFECYCLE_HOOKS$1.forEach(function (hook) {
        strategies[hook] = mergeHook;
    });

    Vue.prototype.__lifecycle_hooks__ = LIFECYCLE_HOOKS$1;
}

/*  */

// install platform patch function
Vue.prototype.__patch__ = patch;

// public mount method
Vue.prototype.$mount = function(
    el ,
    hydrating 
) {
    return mountComponent$1(this, el, hydrating)
};

lifecycleMixin$1(Vue);
internalMixin(Vue);

/*  */

/* harmony default export */ __webpack_exports__["default"] = (Vue);

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../webpack/buildin/global.js */ 3), __webpack_require__(/*! ./../../../../../buffer/index.js */ 26).Buffer))

/***/ }),

/***/ 26:
/*!**************************************!*\
  !*** ./node_modules/buffer/index.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {/*!
 * The buffer module from node.js, for the browser.
 *
 * @author   Feross Aboukhadijeh <http://feross.org>
 * @license  MIT
 */
/* eslint-disable no-proto */



var base64 = __webpack_require__(/*! base64-js */ 27)
var ieee754 = __webpack_require__(/*! ieee754 */ 28)
var isArray = __webpack_require__(/*! isarray */ 29)

exports.Buffer = Buffer
exports.SlowBuffer = SlowBuffer
exports.INSPECT_MAX_BYTES = 50

/**
 * If `Buffer.TYPED_ARRAY_SUPPORT`:
 *   === true    Use Uint8Array implementation (fastest)
 *   === false   Use Object implementation (most compatible, even IE6)
 *
 * Browsers that support typed arrays are IE 10+, Firefox 4+, Chrome 7+, Safari 5.1+,
 * Opera 11.6+, iOS 4.2+.
 *
 * Due to various browser bugs, sometimes the Object implementation will be used even
 * when the browser supports typed arrays.
 *
 * Note:
 *
 *   - Firefox 4-29 lacks support for adding new properties to `Uint8Array` instances,
 *     See: https://bugzilla.mozilla.org/show_bug.cgi?id=695438.
 *
 *   - Chrome 9-10 is missing the `TypedArray.prototype.subarray` function.
 *
 *   - IE10 has a broken `TypedArray.prototype.subarray` function which returns arrays of
 *     incorrect length in some situations.

 * We detect these buggy browsers and set `Buffer.TYPED_ARRAY_SUPPORT` to `false` so they
 * get the Object implementation, which is slower but behaves correctly.
 */
Buffer.TYPED_ARRAY_SUPPORT = global.TYPED_ARRAY_SUPPORT !== undefined
  ? global.TYPED_ARRAY_SUPPORT
  : typedArraySupport()

/*
 * Export kMaxLength after typed array support is determined.
 */
exports.kMaxLength = kMaxLength()

function typedArraySupport () {
  try {
    var arr = new Uint8Array(1)
    arr.__proto__ = {__proto__: Uint8Array.prototype, foo: function () { return 42 }}
    return arr.foo() === 42 && // typed array instances can be augmented
        typeof arr.subarray === 'function' && // chrome 9-10 lack `subarray`
        arr.subarray(1, 1).byteLength === 0 // ie10 has broken `subarray`
  } catch (e) {
    return false
  }
}

function kMaxLength () {
  return Buffer.TYPED_ARRAY_SUPPORT
    ? 0x7fffffff
    : 0x3fffffff
}

function createBuffer (that, length) {
  if (kMaxLength() < length) {
    throw new RangeError('Invalid typed array length')
  }
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    // Return an augmented `Uint8Array` instance, for best performance
    that = new Uint8Array(length)
    that.__proto__ = Buffer.prototype
  } else {
    // Fallback: Return an object instance of the Buffer class
    if (that === null) {
      that = new Buffer(length)
    }
    that.length = length
  }

  return that
}

/**
 * The Buffer constructor returns instances of `Uint8Array` that have their
 * prototype changed to `Buffer.prototype`. Furthermore, `Buffer` is a subclass of
 * `Uint8Array`, so the returned instances will have all the node `Buffer` methods
 * and the `Uint8Array` methods. Square bracket notation works as expected -- it
 * returns a single octet.
 *
 * The `Uint8Array` prototype remains unmodified.
 */

function Buffer (arg, encodingOrOffset, length) {
  if (!Buffer.TYPED_ARRAY_SUPPORT && !(this instanceof Buffer)) {
    return new Buffer(arg, encodingOrOffset, length)
  }

  // Common case.
  if (typeof arg === 'number') {
    if (typeof encodingOrOffset === 'string') {
      throw new Error(
        'If encoding is specified then the first argument must be a string'
      )
    }
    return allocUnsafe(this, arg)
  }
  return from(this, arg, encodingOrOffset, length)
}

Buffer.poolSize = 8192 // not used by this implementation

// TODO: Legacy, not needed anymore. Remove in next major version.
Buffer._augment = function (arr) {
  arr.__proto__ = Buffer.prototype
  return arr
}

function from (that, value, encodingOrOffset, length) {
  if (typeof value === 'number') {
    throw new TypeError('"value" argument must not be a number')
  }

  if (typeof ArrayBuffer !== 'undefined' && value instanceof ArrayBuffer) {
    return fromArrayBuffer(that, value, encodingOrOffset, length)
  }

  if (typeof value === 'string') {
    return fromString(that, value, encodingOrOffset)
  }

  return fromObject(that, value)
}

/**
 * Functionally equivalent to Buffer(arg, encoding) but throws a TypeError
 * if value is a number.
 * Buffer.from(str[, encoding])
 * Buffer.from(array)
 * Buffer.from(buffer)
 * Buffer.from(arrayBuffer[, byteOffset[, length]])
 **/
Buffer.from = function (value, encodingOrOffset, length) {
  return from(null, value, encodingOrOffset, length)
}

if (Buffer.TYPED_ARRAY_SUPPORT) {
  Buffer.prototype.__proto__ = Uint8Array.prototype
  Buffer.__proto__ = Uint8Array
  if (typeof Symbol !== 'undefined' && Symbol.species &&
      Buffer[Symbol.species] === Buffer) {
    // Fix subarray() in ES2016. See: https://github.com/feross/buffer/pull/97
    Object.defineProperty(Buffer, Symbol.species, {
      value: null,
      configurable: true
    })
  }
}

function assertSize (size) {
  if (typeof size !== 'number') {
    throw new TypeError('"size" argument must be a number')
  } else if (size < 0) {
    throw new RangeError('"size" argument must not be negative')
  }
}

function alloc (that, size, fill, encoding) {
  assertSize(size)
  if (size <= 0) {
    return createBuffer(that, size)
  }
  if (fill !== undefined) {
    // Only pay attention to encoding if it's a string. This
    // prevents accidentally sending in a number that would
    // be interpretted as a start offset.
    return typeof encoding === 'string'
      ? createBuffer(that, size).fill(fill, encoding)
      : createBuffer(that, size).fill(fill)
  }
  return createBuffer(that, size)
}

/**
 * Creates a new filled Buffer instance.
 * alloc(size[, fill[, encoding]])
 **/
Buffer.alloc = function (size, fill, encoding) {
  return alloc(null, size, fill, encoding)
}

function allocUnsafe (that, size) {
  assertSize(size)
  that = createBuffer(that, size < 0 ? 0 : checked(size) | 0)
  if (!Buffer.TYPED_ARRAY_SUPPORT) {
    for (var i = 0; i < size; ++i) {
      that[i] = 0
    }
  }
  return that
}

/**
 * Equivalent to Buffer(num), by default creates a non-zero-filled Buffer instance.
 * */
Buffer.allocUnsafe = function (size) {
  return allocUnsafe(null, size)
}
/**
 * Equivalent to SlowBuffer(num), by default creates a non-zero-filled Buffer instance.
 */
Buffer.allocUnsafeSlow = function (size) {
  return allocUnsafe(null, size)
}

function fromString (that, string, encoding) {
  if (typeof encoding !== 'string' || encoding === '') {
    encoding = 'utf8'
  }

  if (!Buffer.isEncoding(encoding)) {
    throw new TypeError('"encoding" must be a valid string encoding')
  }

  var length = byteLength(string, encoding) | 0
  that = createBuffer(that, length)

  var actual = that.write(string, encoding)

  if (actual !== length) {
    // Writing a hex string, for example, that contains invalid characters will
    // cause everything after the first invalid character to be ignored. (e.g.
    // 'abxxcd' will be treated as 'ab')
    that = that.slice(0, actual)
  }

  return that
}

function fromArrayLike (that, array) {
  var length = array.length < 0 ? 0 : checked(array.length) | 0
  that = createBuffer(that, length)
  for (var i = 0; i < length; i += 1) {
    that[i] = array[i] & 255
  }
  return that
}

function fromArrayBuffer (that, array, byteOffset, length) {
  array.byteLength // this throws if `array` is not a valid ArrayBuffer

  if (byteOffset < 0 || array.byteLength < byteOffset) {
    throw new RangeError('\'offset\' is out of bounds')
  }

  if (array.byteLength < byteOffset + (length || 0)) {
    throw new RangeError('\'length\' is out of bounds')
  }

  if (byteOffset === undefined && length === undefined) {
    array = new Uint8Array(array)
  } else if (length === undefined) {
    array = new Uint8Array(array, byteOffset)
  } else {
    array = new Uint8Array(array, byteOffset, length)
  }

  if (Buffer.TYPED_ARRAY_SUPPORT) {
    // Return an augmented `Uint8Array` instance, for best performance
    that = array
    that.__proto__ = Buffer.prototype
  } else {
    // Fallback: Return an object instance of the Buffer class
    that = fromArrayLike(that, array)
  }
  return that
}

function fromObject (that, obj) {
  if (Buffer.isBuffer(obj)) {
    var len = checked(obj.length) | 0
    that = createBuffer(that, len)

    if (that.length === 0) {
      return that
    }

    obj.copy(that, 0, 0, len)
    return that
  }

  if (obj) {
    if ((typeof ArrayBuffer !== 'undefined' &&
        obj.buffer instanceof ArrayBuffer) || 'length' in obj) {
      if (typeof obj.length !== 'number' || isnan(obj.length)) {
        return createBuffer(that, 0)
      }
      return fromArrayLike(that, obj)
    }

    if (obj.type === 'Buffer' && isArray(obj.data)) {
      return fromArrayLike(that, obj.data)
    }
  }

  throw new TypeError('First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object.')
}

function checked (length) {
  // Note: cannot use `length < kMaxLength()` here because that fails when
  // length is NaN (which is otherwise coerced to zero.)
  if (length >= kMaxLength()) {
    throw new RangeError('Attempt to allocate Buffer larger than maximum ' +
                         'size: 0x' + kMaxLength().toString(16) + ' bytes')
  }
  return length | 0
}

function SlowBuffer (length) {
  if (+length != length) { // eslint-disable-line eqeqeq
    length = 0
  }
  return Buffer.alloc(+length)
}

Buffer.isBuffer = function isBuffer (b) {
  return !!(b != null && b._isBuffer)
}

Buffer.compare = function compare (a, b) {
  if (!Buffer.isBuffer(a) || !Buffer.isBuffer(b)) {
    throw new TypeError('Arguments must be Buffers')
  }

  if (a === b) return 0

  var x = a.length
  var y = b.length

  for (var i = 0, len = Math.min(x, y); i < len; ++i) {
    if (a[i] !== b[i]) {
      x = a[i]
      y = b[i]
      break
    }
  }

  if (x < y) return -1
  if (y < x) return 1
  return 0
}

Buffer.isEncoding = function isEncoding (encoding) {
  switch (String(encoding).toLowerCase()) {
    case 'hex':
    case 'utf8':
    case 'utf-8':
    case 'ascii':
    case 'latin1':
    case 'binary':
    case 'base64':
    case 'ucs2':
    case 'ucs-2':
    case 'utf16le':
    case 'utf-16le':
      return true
    default:
      return false
  }
}

Buffer.concat = function concat (list, length) {
  if (!isArray(list)) {
    throw new TypeError('"list" argument must be an Array of Buffers')
  }

  if (list.length === 0) {
    return Buffer.alloc(0)
  }

  var i
  if (length === undefined) {
    length = 0
    for (i = 0; i < list.length; ++i) {
      length += list[i].length
    }
  }

  var buffer = Buffer.allocUnsafe(length)
  var pos = 0
  for (i = 0; i < list.length; ++i) {
    var buf = list[i]
    if (!Buffer.isBuffer(buf)) {
      throw new TypeError('"list" argument must be an Array of Buffers')
    }
    buf.copy(buffer, pos)
    pos += buf.length
  }
  return buffer
}

function byteLength (string, encoding) {
  if (Buffer.isBuffer(string)) {
    return string.length
  }
  if (typeof ArrayBuffer !== 'undefined' && typeof ArrayBuffer.isView === 'function' &&
      (ArrayBuffer.isView(string) || string instanceof ArrayBuffer)) {
    return string.byteLength
  }
  if (typeof string !== 'string') {
    string = '' + string
  }

  var len = string.length
  if (len === 0) return 0

  // Use a for loop to avoid recursion
  var loweredCase = false
  for (;;) {
    switch (encoding) {
      case 'ascii':
      case 'latin1':
      case 'binary':
        return len
      case 'utf8':
      case 'utf-8':
      case undefined:
        return utf8ToBytes(string).length
      case 'ucs2':
      case 'ucs-2':
      case 'utf16le':
      case 'utf-16le':
        return len * 2
      case 'hex':
        return len >>> 1
      case 'base64':
        return base64ToBytes(string).length
      default:
        if (loweredCase) return utf8ToBytes(string).length // assume utf8
        encoding = ('' + encoding).toLowerCase()
        loweredCase = true
    }
  }
}
Buffer.byteLength = byteLength

function slowToString (encoding, start, end) {
  var loweredCase = false

  // No need to verify that "this.length <= MAX_UINT32" since it's a read-only
  // property of a typed array.

  // This behaves neither like String nor Uint8Array in that we set start/end
  // to their upper/lower bounds if the value passed is out of range.
  // undefined is handled specially as per ECMA-262 6th Edition,
  // Section 13.3.3.7 Runtime Semantics: KeyedBindingInitialization.
  if (start === undefined || start < 0) {
    start = 0
  }
  // Return early if start > this.length. Done here to prevent potential uint32
  // coercion fail below.
  if (start > this.length) {
    return ''
  }

  if (end === undefined || end > this.length) {
    end = this.length
  }

  if (end <= 0) {
    return ''
  }

  // Force coersion to uint32. This will also coerce falsey/NaN values to 0.
  end >>>= 0
  start >>>= 0

  if (end <= start) {
    return ''
  }

  if (!encoding) encoding = 'utf8'

  while (true) {
    switch (encoding) {
      case 'hex':
        return hexSlice(this, start, end)

      case 'utf8':
      case 'utf-8':
        return utf8Slice(this, start, end)

      case 'ascii':
        return asciiSlice(this, start, end)

      case 'latin1':
      case 'binary':
        return latin1Slice(this, start, end)

      case 'base64':
        return base64Slice(this, start, end)

      case 'ucs2':
      case 'ucs-2':
      case 'utf16le':
      case 'utf-16le':
        return utf16leSlice(this, start, end)

      default:
        if (loweredCase) throw new TypeError('Unknown encoding: ' + encoding)
        encoding = (encoding + '').toLowerCase()
        loweredCase = true
    }
  }
}

// The property is used by `Buffer.isBuffer` and `is-buffer` (in Safari 5-7) to detect
// Buffer instances.
Buffer.prototype._isBuffer = true

function swap (b, n, m) {
  var i = b[n]
  b[n] = b[m]
  b[m] = i
}

Buffer.prototype.swap16 = function swap16 () {
  var len = this.length
  if (len % 2 !== 0) {
    throw new RangeError('Buffer size must be a multiple of 16-bits')
  }
  for (var i = 0; i < len; i += 2) {
    swap(this, i, i + 1)
  }
  return this
}

Buffer.prototype.swap32 = function swap32 () {
  var len = this.length
  if (len % 4 !== 0) {
    throw new RangeError('Buffer size must be a multiple of 32-bits')
  }
  for (var i = 0; i < len; i += 4) {
    swap(this, i, i + 3)
    swap(this, i + 1, i + 2)
  }
  return this
}

Buffer.prototype.swap64 = function swap64 () {
  var len = this.length
  if (len % 8 !== 0) {
    throw new RangeError('Buffer size must be a multiple of 64-bits')
  }
  for (var i = 0; i < len; i += 8) {
    swap(this, i, i + 7)
    swap(this, i + 1, i + 6)
    swap(this, i + 2, i + 5)
    swap(this, i + 3, i + 4)
  }
  return this
}

Buffer.prototype.toString = function toString () {
  var length = this.length | 0
  if (length === 0) return ''
  if (arguments.length === 0) return utf8Slice(this, 0, length)
  return slowToString.apply(this, arguments)
}

Buffer.prototype.equals = function equals (b) {
  if (!Buffer.isBuffer(b)) throw new TypeError('Argument must be a Buffer')
  if (this === b) return true
  return Buffer.compare(this, b) === 0
}

Buffer.prototype.inspect = function inspect () {
  var str = ''
  var max = exports.INSPECT_MAX_BYTES
  if (this.length > 0) {
    str = this.toString('hex', 0, max).match(/.{2}/g).join(' ')
    if (this.length > max) str += ' ... '
  }
  return '<Buffer ' + str + '>'
}

Buffer.prototype.compare = function compare (target, start, end, thisStart, thisEnd) {
  if (!Buffer.isBuffer(target)) {
    throw new TypeError('Argument must be a Buffer')
  }

  if (start === undefined) {
    start = 0
  }
  if (end === undefined) {
    end = target ? target.length : 0
  }
  if (thisStart === undefined) {
    thisStart = 0
  }
  if (thisEnd === undefined) {
    thisEnd = this.length
  }

  if (start < 0 || end > target.length || thisStart < 0 || thisEnd > this.length) {
    throw new RangeError('out of range index')
  }

  if (thisStart >= thisEnd && start >= end) {
    return 0
  }
  if (thisStart >= thisEnd) {
    return -1
  }
  if (start >= end) {
    return 1
  }

  start >>>= 0
  end >>>= 0
  thisStart >>>= 0
  thisEnd >>>= 0

  if (this === target) return 0

  var x = thisEnd - thisStart
  var y = end - start
  var len = Math.min(x, y)

  var thisCopy = this.slice(thisStart, thisEnd)
  var targetCopy = target.slice(start, end)

  for (var i = 0; i < len; ++i) {
    if (thisCopy[i] !== targetCopy[i]) {
      x = thisCopy[i]
      y = targetCopy[i]
      break
    }
  }

  if (x < y) return -1
  if (y < x) return 1
  return 0
}

// Finds either the first index of `val` in `buffer` at offset >= `byteOffset`,
// OR the last index of `val` in `buffer` at offset <= `byteOffset`.
//
// Arguments:
// - buffer - a Buffer to search
// - val - a string, Buffer, or number
// - byteOffset - an index into `buffer`; will be clamped to an int32
// - encoding - an optional encoding, relevant is val is a string
// - dir - true for indexOf, false for lastIndexOf
function bidirectionalIndexOf (buffer, val, byteOffset, encoding, dir) {
  // Empty buffer means no match
  if (buffer.length === 0) return -1

  // Normalize byteOffset
  if (typeof byteOffset === 'string') {
    encoding = byteOffset
    byteOffset = 0
  } else if (byteOffset > 0x7fffffff) {
    byteOffset = 0x7fffffff
  } else if (byteOffset < -0x80000000) {
    byteOffset = -0x80000000
  }
  byteOffset = +byteOffset  // Coerce to Number.
  if (isNaN(byteOffset)) {
    // byteOffset: it it's undefined, null, NaN, "foo", etc, search whole buffer
    byteOffset = dir ? 0 : (buffer.length - 1)
  }

  // Normalize byteOffset: negative offsets start from the end of the buffer
  if (byteOffset < 0) byteOffset = buffer.length + byteOffset
  if (byteOffset >= buffer.length) {
    if (dir) return -1
    else byteOffset = buffer.length - 1
  } else if (byteOffset < 0) {
    if (dir) byteOffset = 0
    else return -1
  }

  // Normalize val
  if (typeof val === 'string') {
    val = Buffer.from(val, encoding)
  }

  // Finally, search either indexOf (if dir is true) or lastIndexOf
  if (Buffer.isBuffer(val)) {
    // Special case: looking for empty string/buffer always fails
    if (val.length === 0) {
      return -1
    }
    return arrayIndexOf(buffer, val, byteOffset, encoding, dir)
  } else if (typeof val === 'number') {
    val = val & 0xFF // Search for a byte value [0-255]
    if (Buffer.TYPED_ARRAY_SUPPORT &&
        typeof Uint8Array.prototype.indexOf === 'function') {
      if (dir) {
        return Uint8Array.prototype.indexOf.call(buffer, val, byteOffset)
      } else {
        return Uint8Array.prototype.lastIndexOf.call(buffer, val, byteOffset)
      }
    }
    return arrayIndexOf(buffer, [ val ], byteOffset, encoding, dir)
  }

  throw new TypeError('val must be string, number or Buffer')
}

function arrayIndexOf (arr, val, byteOffset, encoding, dir) {
  var indexSize = 1
  var arrLength = arr.length
  var valLength = val.length

  if (encoding !== undefined) {
    encoding = String(encoding).toLowerCase()
    if (encoding === 'ucs2' || encoding === 'ucs-2' ||
        encoding === 'utf16le' || encoding === 'utf-16le') {
      if (arr.length < 2 || val.length < 2) {
        return -1
      }
      indexSize = 2
      arrLength /= 2
      valLength /= 2
      byteOffset /= 2
    }
  }

  function read (buf, i) {
    if (indexSize === 1) {
      return buf[i]
    } else {
      return buf.readUInt16BE(i * indexSize)
    }
  }

  var i
  if (dir) {
    var foundIndex = -1
    for (i = byteOffset; i < arrLength; i++) {
      if (read(arr, i) === read(val, foundIndex === -1 ? 0 : i - foundIndex)) {
        if (foundIndex === -1) foundIndex = i
        if (i - foundIndex + 1 === valLength) return foundIndex * indexSize
      } else {
        if (foundIndex !== -1) i -= i - foundIndex
        foundIndex = -1
      }
    }
  } else {
    if (byteOffset + valLength > arrLength) byteOffset = arrLength - valLength
    for (i = byteOffset; i >= 0; i--) {
      var found = true
      for (var j = 0; j < valLength; j++) {
        if (read(arr, i + j) !== read(val, j)) {
          found = false
          break
        }
      }
      if (found) return i
    }
  }

  return -1
}

Buffer.prototype.includes = function includes (val, byteOffset, encoding) {
  return this.indexOf(val, byteOffset, encoding) !== -1
}

Buffer.prototype.indexOf = function indexOf (val, byteOffset, encoding) {
  return bidirectionalIndexOf(this, val, byteOffset, encoding, true)
}

Buffer.prototype.lastIndexOf = function lastIndexOf (val, byteOffset, encoding) {
  return bidirectionalIndexOf(this, val, byteOffset, encoding, false)
}

function hexWrite (buf, string, offset, length) {
  offset = Number(offset) || 0
  var remaining = buf.length - offset
  if (!length) {
    length = remaining
  } else {
    length = Number(length)
    if (length > remaining) {
      length = remaining
    }
  }

  // must be an even number of digits
  var strLen = string.length
  if (strLen % 2 !== 0) throw new TypeError('Invalid hex string')

  if (length > strLen / 2) {
    length = strLen / 2
  }
  for (var i = 0; i < length; ++i) {
    var parsed = parseInt(string.substr(i * 2, 2), 16)
    if (isNaN(parsed)) return i
    buf[offset + i] = parsed
  }
  return i
}

function utf8Write (buf, string, offset, length) {
  return blitBuffer(utf8ToBytes(string, buf.length - offset), buf, offset, length)
}

function asciiWrite (buf, string, offset, length) {
  return blitBuffer(asciiToBytes(string), buf, offset, length)
}

function latin1Write (buf, string, offset, length) {
  return asciiWrite(buf, string, offset, length)
}

function base64Write (buf, string, offset, length) {
  return blitBuffer(base64ToBytes(string), buf, offset, length)
}

function ucs2Write (buf, string, offset, length) {
  return blitBuffer(utf16leToBytes(string, buf.length - offset), buf, offset, length)
}

Buffer.prototype.write = function write (string, offset, length, encoding) {
  // Buffer#write(string)
  if (offset === undefined) {
    encoding = 'utf8'
    length = this.length
    offset = 0
  // Buffer#write(string, encoding)
  } else if (length === undefined && typeof offset === 'string') {
    encoding = offset
    length = this.length
    offset = 0
  // Buffer#write(string, offset[, length][, encoding])
  } else if (isFinite(offset)) {
    offset = offset | 0
    if (isFinite(length)) {
      length = length | 0
      if (encoding === undefined) encoding = 'utf8'
    } else {
      encoding = length
      length = undefined
    }
  // legacy write(string, encoding, offset, length) - remove in v0.13
  } else {
    throw new Error(
      'Buffer.write(string, encoding, offset[, length]) is no longer supported'
    )
  }

  var remaining = this.length - offset
  if (length === undefined || length > remaining) length = remaining

  if ((string.length > 0 && (length < 0 || offset < 0)) || offset > this.length) {
    throw new RangeError('Attempt to write outside buffer bounds')
  }

  if (!encoding) encoding = 'utf8'

  var loweredCase = false
  for (;;) {
    switch (encoding) {
      case 'hex':
        return hexWrite(this, string, offset, length)

      case 'utf8':
      case 'utf-8':
        return utf8Write(this, string, offset, length)

      case 'ascii':
        return asciiWrite(this, string, offset, length)

      case 'latin1':
      case 'binary':
        return latin1Write(this, string, offset, length)

      case 'base64':
        // Warning: maxLength not taken into account in base64Write
        return base64Write(this, string, offset, length)

      case 'ucs2':
      case 'ucs-2':
      case 'utf16le':
      case 'utf-16le':
        return ucs2Write(this, string, offset, length)

      default:
        if (loweredCase) throw new TypeError('Unknown encoding: ' + encoding)
        encoding = ('' + encoding).toLowerCase()
        loweredCase = true
    }
  }
}

Buffer.prototype.toJSON = function toJSON () {
  return {
    type: 'Buffer',
    data: Array.prototype.slice.call(this._arr || this, 0)
  }
}

function base64Slice (buf, start, end) {
  if (start === 0 && end === buf.length) {
    return base64.fromByteArray(buf)
  } else {
    return base64.fromByteArray(buf.slice(start, end))
  }
}

function utf8Slice (buf, start, end) {
  end = Math.min(buf.length, end)
  var res = []

  var i = start
  while (i < end) {
    var firstByte = buf[i]
    var codePoint = null
    var bytesPerSequence = (firstByte > 0xEF) ? 4
      : (firstByte > 0xDF) ? 3
      : (firstByte > 0xBF) ? 2
      : 1

    if (i + bytesPerSequence <= end) {
      var secondByte, thirdByte, fourthByte, tempCodePoint

      switch (bytesPerSequence) {
        case 1:
          if (firstByte < 0x80) {
            codePoint = firstByte
          }
          break
        case 2:
          secondByte = buf[i + 1]
          if ((secondByte & 0xC0) === 0x80) {
            tempCodePoint = (firstByte & 0x1F) << 0x6 | (secondByte & 0x3F)
            if (tempCodePoint > 0x7F) {
              codePoint = tempCodePoint
            }
          }
          break
        case 3:
          secondByte = buf[i + 1]
          thirdByte = buf[i + 2]
          if ((secondByte & 0xC0) === 0x80 && (thirdByte & 0xC0) === 0x80) {
            tempCodePoint = (firstByte & 0xF) << 0xC | (secondByte & 0x3F) << 0x6 | (thirdByte & 0x3F)
            if (tempCodePoint > 0x7FF && (tempCodePoint < 0xD800 || tempCodePoint > 0xDFFF)) {
              codePoint = tempCodePoint
            }
          }
          break
        case 4:
          secondByte = buf[i + 1]
          thirdByte = buf[i + 2]
          fourthByte = buf[i + 3]
          if ((secondByte & 0xC0) === 0x80 && (thirdByte & 0xC0) === 0x80 && (fourthByte & 0xC0) === 0x80) {
            tempCodePoint = (firstByte & 0xF) << 0x12 | (secondByte & 0x3F) << 0xC | (thirdByte & 0x3F) << 0x6 | (fourthByte & 0x3F)
            if (tempCodePoint > 0xFFFF && tempCodePoint < 0x110000) {
              codePoint = tempCodePoint
            }
          }
      }
    }

    if (codePoint === null) {
      // we did not generate a valid codePoint so insert a
      // replacement char (U+FFFD) and advance only 1 byte
      codePoint = 0xFFFD
      bytesPerSequence = 1
    } else if (codePoint > 0xFFFF) {
      // encode to utf16 (surrogate pair dance)
      codePoint -= 0x10000
      res.push(codePoint >>> 10 & 0x3FF | 0xD800)
      codePoint = 0xDC00 | codePoint & 0x3FF
    }

    res.push(codePoint)
    i += bytesPerSequence
  }

  return decodeCodePointsArray(res)
}

// Based on http://stackoverflow.com/a/22747272/680742, the browser with
// the lowest limit is Chrome, with 0x10000 args.
// We go 1 magnitude less, for safety
var MAX_ARGUMENTS_LENGTH = 0x1000

function decodeCodePointsArray (codePoints) {
  var len = codePoints.length
  if (len <= MAX_ARGUMENTS_LENGTH) {
    return String.fromCharCode.apply(String, codePoints) // avoid extra slice()
  }

  // Decode in chunks to avoid "call stack size exceeded".
  var res = ''
  var i = 0
  while (i < len) {
    res += String.fromCharCode.apply(
      String,
      codePoints.slice(i, i += MAX_ARGUMENTS_LENGTH)
    )
  }
  return res
}

function asciiSlice (buf, start, end) {
  var ret = ''
  end = Math.min(buf.length, end)

  for (var i = start; i < end; ++i) {
    ret += String.fromCharCode(buf[i] & 0x7F)
  }
  return ret
}

function latin1Slice (buf, start, end) {
  var ret = ''
  end = Math.min(buf.length, end)

  for (var i = start; i < end; ++i) {
    ret += String.fromCharCode(buf[i])
  }
  return ret
}

function hexSlice (buf, start, end) {
  var len = buf.length

  if (!start || start < 0) start = 0
  if (!end || end < 0 || end > len) end = len

  var out = ''
  for (var i = start; i < end; ++i) {
    out += toHex(buf[i])
  }
  return out
}

function utf16leSlice (buf, start, end) {
  var bytes = buf.slice(start, end)
  var res = ''
  for (var i = 0; i < bytes.length; i += 2) {
    res += String.fromCharCode(bytes[i] + bytes[i + 1] * 256)
  }
  return res
}

Buffer.prototype.slice = function slice (start, end) {
  var len = this.length
  start = ~~start
  end = end === undefined ? len : ~~end

  if (start < 0) {
    start += len
    if (start < 0) start = 0
  } else if (start > len) {
    start = len
  }

  if (end < 0) {
    end += len
    if (end < 0) end = 0
  } else if (end > len) {
    end = len
  }

  if (end < start) end = start

  var newBuf
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    newBuf = this.subarray(start, end)
    newBuf.__proto__ = Buffer.prototype
  } else {
    var sliceLen = end - start
    newBuf = new Buffer(sliceLen, undefined)
    for (var i = 0; i < sliceLen; ++i) {
      newBuf[i] = this[i + start]
    }
  }

  return newBuf
}

/*
 * Need to make sure that buffer isn't trying to write out of bounds.
 */
function checkOffset (offset, ext, length) {
  if ((offset % 1) !== 0 || offset < 0) throw new RangeError('offset is not uint')
  if (offset + ext > length) throw new RangeError('Trying to access beyond buffer length')
}

Buffer.prototype.readUIntLE = function readUIntLE (offset, byteLength, noAssert) {
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) checkOffset(offset, byteLength, this.length)

  var val = this[offset]
  var mul = 1
  var i = 0
  while (++i < byteLength && (mul *= 0x100)) {
    val += this[offset + i] * mul
  }

  return val
}

Buffer.prototype.readUIntBE = function readUIntBE (offset, byteLength, noAssert) {
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) {
    checkOffset(offset, byteLength, this.length)
  }

  var val = this[offset + --byteLength]
  var mul = 1
  while (byteLength > 0 && (mul *= 0x100)) {
    val += this[offset + --byteLength] * mul
  }

  return val
}

Buffer.prototype.readUInt8 = function readUInt8 (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 1, this.length)
  return this[offset]
}

Buffer.prototype.readUInt16LE = function readUInt16LE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 2, this.length)
  return this[offset] | (this[offset + 1] << 8)
}

Buffer.prototype.readUInt16BE = function readUInt16BE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 2, this.length)
  return (this[offset] << 8) | this[offset + 1]
}

Buffer.prototype.readUInt32LE = function readUInt32LE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)

  return ((this[offset]) |
      (this[offset + 1] << 8) |
      (this[offset + 2] << 16)) +
      (this[offset + 3] * 0x1000000)
}

Buffer.prototype.readUInt32BE = function readUInt32BE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)

  return (this[offset] * 0x1000000) +
    ((this[offset + 1] << 16) |
    (this[offset + 2] << 8) |
    this[offset + 3])
}

Buffer.prototype.readIntLE = function readIntLE (offset, byteLength, noAssert) {
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) checkOffset(offset, byteLength, this.length)

  var val = this[offset]
  var mul = 1
  var i = 0
  while (++i < byteLength && (mul *= 0x100)) {
    val += this[offset + i] * mul
  }
  mul *= 0x80

  if (val >= mul) val -= Math.pow(2, 8 * byteLength)

  return val
}

Buffer.prototype.readIntBE = function readIntBE (offset, byteLength, noAssert) {
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) checkOffset(offset, byteLength, this.length)

  var i = byteLength
  var mul = 1
  var val = this[offset + --i]
  while (i > 0 && (mul *= 0x100)) {
    val += this[offset + --i] * mul
  }
  mul *= 0x80

  if (val >= mul) val -= Math.pow(2, 8 * byteLength)

  return val
}

Buffer.prototype.readInt8 = function readInt8 (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 1, this.length)
  if (!(this[offset] & 0x80)) return (this[offset])
  return ((0xff - this[offset] + 1) * -1)
}

Buffer.prototype.readInt16LE = function readInt16LE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 2, this.length)
  var val = this[offset] | (this[offset + 1] << 8)
  return (val & 0x8000) ? val | 0xFFFF0000 : val
}

Buffer.prototype.readInt16BE = function readInt16BE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 2, this.length)
  var val = this[offset + 1] | (this[offset] << 8)
  return (val & 0x8000) ? val | 0xFFFF0000 : val
}

Buffer.prototype.readInt32LE = function readInt32LE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)

  return (this[offset]) |
    (this[offset + 1] << 8) |
    (this[offset + 2] << 16) |
    (this[offset + 3] << 24)
}

Buffer.prototype.readInt32BE = function readInt32BE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)

  return (this[offset] << 24) |
    (this[offset + 1] << 16) |
    (this[offset + 2] << 8) |
    (this[offset + 3])
}

Buffer.prototype.readFloatLE = function readFloatLE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)
  return ieee754.read(this, offset, true, 23, 4)
}

Buffer.prototype.readFloatBE = function readFloatBE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)
  return ieee754.read(this, offset, false, 23, 4)
}

Buffer.prototype.readDoubleLE = function readDoubleLE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 8, this.length)
  return ieee754.read(this, offset, true, 52, 8)
}

Buffer.prototype.readDoubleBE = function readDoubleBE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 8, this.length)
  return ieee754.read(this, offset, false, 52, 8)
}

function checkInt (buf, value, offset, ext, max, min) {
  if (!Buffer.isBuffer(buf)) throw new TypeError('"buffer" argument must be a Buffer instance')
  if (value > max || value < min) throw new RangeError('"value" argument is out of bounds')
  if (offset + ext > buf.length) throw new RangeError('Index out of range')
}

Buffer.prototype.writeUIntLE = function writeUIntLE (value, offset, byteLength, noAssert) {
  value = +value
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) {
    var maxBytes = Math.pow(2, 8 * byteLength) - 1
    checkInt(this, value, offset, byteLength, maxBytes, 0)
  }

  var mul = 1
  var i = 0
  this[offset] = value & 0xFF
  while (++i < byteLength && (mul *= 0x100)) {
    this[offset + i] = (value / mul) & 0xFF
  }

  return offset + byteLength
}

Buffer.prototype.writeUIntBE = function writeUIntBE (value, offset, byteLength, noAssert) {
  value = +value
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) {
    var maxBytes = Math.pow(2, 8 * byteLength) - 1
    checkInt(this, value, offset, byteLength, maxBytes, 0)
  }

  var i = byteLength - 1
  var mul = 1
  this[offset + i] = value & 0xFF
  while (--i >= 0 && (mul *= 0x100)) {
    this[offset + i] = (value / mul) & 0xFF
  }

  return offset + byteLength
}

Buffer.prototype.writeUInt8 = function writeUInt8 (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 1, 0xff, 0)
  if (!Buffer.TYPED_ARRAY_SUPPORT) value = Math.floor(value)
  this[offset] = (value & 0xff)
  return offset + 1
}

function objectWriteUInt16 (buf, value, offset, littleEndian) {
  if (value < 0) value = 0xffff + value + 1
  for (var i = 0, j = Math.min(buf.length - offset, 2); i < j; ++i) {
    buf[offset + i] = (value & (0xff << (8 * (littleEndian ? i : 1 - i)))) >>>
      (littleEndian ? i : 1 - i) * 8
  }
}

Buffer.prototype.writeUInt16LE = function writeUInt16LE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 2, 0xffff, 0)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value & 0xff)
    this[offset + 1] = (value >>> 8)
  } else {
    objectWriteUInt16(this, value, offset, true)
  }
  return offset + 2
}

Buffer.prototype.writeUInt16BE = function writeUInt16BE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 2, 0xffff, 0)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value >>> 8)
    this[offset + 1] = (value & 0xff)
  } else {
    objectWriteUInt16(this, value, offset, false)
  }
  return offset + 2
}

function objectWriteUInt32 (buf, value, offset, littleEndian) {
  if (value < 0) value = 0xffffffff + value + 1
  for (var i = 0, j = Math.min(buf.length - offset, 4); i < j; ++i) {
    buf[offset + i] = (value >>> (littleEndian ? i : 3 - i) * 8) & 0xff
  }
}

Buffer.prototype.writeUInt32LE = function writeUInt32LE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 4, 0xffffffff, 0)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset + 3] = (value >>> 24)
    this[offset + 2] = (value >>> 16)
    this[offset + 1] = (value >>> 8)
    this[offset] = (value & 0xff)
  } else {
    objectWriteUInt32(this, value, offset, true)
  }
  return offset + 4
}

Buffer.prototype.writeUInt32BE = function writeUInt32BE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 4, 0xffffffff, 0)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value >>> 24)
    this[offset + 1] = (value >>> 16)
    this[offset + 2] = (value >>> 8)
    this[offset + 3] = (value & 0xff)
  } else {
    objectWriteUInt32(this, value, offset, false)
  }
  return offset + 4
}

Buffer.prototype.writeIntLE = function writeIntLE (value, offset, byteLength, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) {
    var limit = Math.pow(2, 8 * byteLength - 1)

    checkInt(this, value, offset, byteLength, limit - 1, -limit)
  }

  var i = 0
  var mul = 1
  var sub = 0
  this[offset] = value & 0xFF
  while (++i < byteLength && (mul *= 0x100)) {
    if (value < 0 && sub === 0 && this[offset + i - 1] !== 0) {
      sub = 1
    }
    this[offset + i] = ((value / mul) >> 0) - sub & 0xFF
  }

  return offset + byteLength
}

Buffer.prototype.writeIntBE = function writeIntBE (value, offset, byteLength, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) {
    var limit = Math.pow(2, 8 * byteLength - 1)

    checkInt(this, value, offset, byteLength, limit - 1, -limit)
  }

  var i = byteLength - 1
  var mul = 1
  var sub = 0
  this[offset + i] = value & 0xFF
  while (--i >= 0 && (mul *= 0x100)) {
    if (value < 0 && sub === 0 && this[offset + i + 1] !== 0) {
      sub = 1
    }
    this[offset + i] = ((value / mul) >> 0) - sub & 0xFF
  }

  return offset + byteLength
}

Buffer.prototype.writeInt8 = function writeInt8 (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 1, 0x7f, -0x80)
  if (!Buffer.TYPED_ARRAY_SUPPORT) value = Math.floor(value)
  if (value < 0) value = 0xff + value + 1
  this[offset] = (value & 0xff)
  return offset + 1
}

Buffer.prototype.writeInt16LE = function writeInt16LE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 2, 0x7fff, -0x8000)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value & 0xff)
    this[offset + 1] = (value >>> 8)
  } else {
    objectWriteUInt16(this, value, offset, true)
  }
  return offset + 2
}

Buffer.prototype.writeInt16BE = function writeInt16BE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 2, 0x7fff, -0x8000)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value >>> 8)
    this[offset + 1] = (value & 0xff)
  } else {
    objectWriteUInt16(this, value, offset, false)
  }
  return offset + 2
}

Buffer.prototype.writeInt32LE = function writeInt32LE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 4, 0x7fffffff, -0x80000000)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value & 0xff)
    this[offset + 1] = (value >>> 8)
    this[offset + 2] = (value >>> 16)
    this[offset + 3] = (value >>> 24)
  } else {
    objectWriteUInt32(this, value, offset, true)
  }
  return offset + 4
}

Buffer.prototype.writeInt32BE = function writeInt32BE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 4, 0x7fffffff, -0x80000000)
  if (value < 0) value = 0xffffffff + value + 1
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value >>> 24)
    this[offset + 1] = (value >>> 16)
    this[offset + 2] = (value >>> 8)
    this[offset + 3] = (value & 0xff)
  } else {
    objectWriteUInt32(this, value, offset, false)
  }
  return offset + 4
}

function checkIEEE754 (buf, value, offset, ext, max, min) {
  if (offset + ext > buf.length) throw new RangeError('Index out of range')
  if (offset < 0) throw new RangeError('Index out of range')
}

function writeFloat (buf, value, offset, littleEndian, noAssert) {
  if (!noAssert) {
    checkIEEE754(buf, value, offset, 4, 3.4028234663852886e+38, -3.4028234663852886e+38)
  }
  ieee754.write(buf, value, offset, littleEndian, 23, 4)
  return offset + 4
}

Buffer.prototype.writeFloatLE = function writeFloatLE (value, offset, noAssert) {
  return writeFloat(this, value, offset, true, noAssert)
}

Buffer.prototype.writeFloatBE = function writeFloatBE (value, offset, noAssert) {
  return writeFloat(this, value, offset, false, noAssert)
}

function writeDouble (buf, value, offset, littleEndian, noAssert) {
  if (!noAssert) {
    checkIEEE754(buf, value, offset, 8, 1.7976931348623157E+308, -1.7976931348623157E+308)
  }
  ieee754.write(buf, value, offset, littleEndian, 52, 8)
  return offset + 8
}

Buffer.prototype.writeDoubleLE = function writeDoubleLE (value, offset, noAssert) {
  return writeDouble(this, value, offset, true, noAssert)
}

Buffer.prototype.writeDoubleBE = function writeDoubleBE (value, offset, noAssert) {
  return writeDouble(this, value, offset, false, noAssert)
}

// copy(targetBuffer, targetStart=0, sourceStart=0, sourceEnd=buffer.length)
Buffer.prototype.copy = function copy (target, targetStart, start, end) {
  if (!start) start = 0
  if (!end && end !== 0) end = this.length
  if (targetStart >= target.length) targetStart = target.length
  if (!targetStart) targetStart = 0
  if (end > 0 && end < start) end = start

  // Copy 0 bytes; we're done
  if (end === start) return 0
  if (target.length === 0 || this.length === 0) return 0

  // Fatal error conditions
  if (targetStart < 0) {
    throw new RangeError('targetStart out of bounds')
  }
  if (start < 0 || start >= this.length) throw new RangeError('sourceStart out of bounds')
  if (end < 0) throw new RangeError('sourceEnd out of bounds')

  // Are we oob?
  if (end > this.length) end = this.length
  if (target.length - targetStart < end - start) {
    end = target.length - targetStart + start
  }

  var len = end - start
  var i

  if (this === target && start < targetStart && targetStart < end) {
    // descending copy from end
    for (i = len - 1; i >= 0; --i) {
      target[i + targetStart] = this[i + start]
    }
  } else if (len < 1000 || !Buffer.TYPED_ARRAY_SUPPORT) {
    // ascending copy from start
    for (i = 0; i < len; ++i) {
      target[i + targetStart] = this[i + start]
    }
  } else {
    Uint8Array.prototype.set.call(
      target,
      this.subarray(start, start + len),
      targetStart
    )
  }

  return len
}

// Usage:
//    buffer.fill(number[, offset[, end]])
//    buffer.fill(buffer[, offset[, end]])
//    buffer.fill(string[, offset[, end]][, encoding])
Buffer.prototype.fill = function fill (val, start, end, encoding) {
  // Handle string cases:
  if (typeof val === 'string') {
    if (typeof start === 'string') {
      encoding = start
      start = 0
      end = this.length
    } else if (typeof end === 'string') {
      encoding = end
      end = this.length
    }
    if (val.length === 1) {
      var code = val.charCodeAt(0)
      if (code < 256) {
        val = code
      }
    }
    if (encoding !== undefined && typeof encoding !== 'string') {
      throw new TypeError('encoding must be a string')
    }
    if (typeof encoding === 'string' && !Buffer.isEncoding(encoding)) {
      throw new TypeError('Unknown encoding: ' + encoding)
    }
  } else if (typeof val === 'number') {
    val = val & 255
  }

  // Invalid ranges are not set to a default, so can range check early.
  if (start < 0 || this.length < start || this.length < end) {
    throw new RangeError('Out of range index')
  }

  if (end <= start) {
    return this
  }

  start = start >>> 0
  end = end === undefined ? this.length : end >>> 0

  if (!val) val = 0

  var i
  if (typeof val === 'number') {
    for (i = start; i < end; ++i) {
      this[i] = val
    }
  } else {
    var bytes = Buffer.isBuffer(val)
      ? val
      : utf8ToBytes(new Buffer(val, encoding).toString())
    var len = bytes.length
    for (i = 0; i < end - start; ++i) {
      this[i + start] = bytes[i % len]
    }
  }

  return this
}

// HELPER FUNCTIONS
// ================

var INVALID_BASE64_RE = /[^+\/0-9A-Za-z-_]/g

function base64clean (str) {
  // Node strips out invalid characters like \n and \t from the string, base64-js does not
  str = stringtrim(str).replace(INVALID_BASE64_RE, '')
  // Node converts strings with length < 2 to ''
  if (str.length < 2) return ''
  // Node allows for non-padded base64 strings (missing trailing ===), base64-js does not
  while (str.length % 4 !== 0) {
    str = str + '='
  }
  return str
}

function stringtrim (str) {
  if (str.trim) return str.trim()
  return str.replace(/^\s+|\s+$/g, '')
}

function toHex (n) {
  if (n < 16) return '0' + n.toString(16)
  return n.toString(16)
}

function utf8ToBytes (string, units) {
  units = units || Infinity
  var codePoint
  var length = string.length
  var leadSurrogate = null
  var bytes = []

  for (var i = 0; i < length; ++i) {
    codePoint = string.charCodeAt(i)

    // is surrogate component
    if (codePoint > 0xD7FF && codePoint < 0xE000) {
      // last char was a lead
      if (!leadSurrogate) {
        // no lead yet
        if (codePoint > 0xDBFF) {
          // unexpected trail
          if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
          continue
        } else if (i + 1 === length) {
          // unpaired lead
          if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
          continue
        }

        // valid lead
        leadSurrogate = codePoint

        continue
      }

      // 2 leads in a row
      if (codePoint < 0xDC00) {
        if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
        leadSurrogate = codePoint
        continue
      }

      // valid surrogate pair
      codePoint = (leadSurrogate - 0xD800 << 10 | codePoint - 0xDC00) + 0x10000
    } else if (leadSurrogate) {
      // valid bmp char, but last char was a lead
      if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
    }

    leadSurrogate = null

    // encode utf8
    if (codePoint < 0x80) {
      if ((units -= 1) < 0) break
      bytes.push(codePoint)
    } else if (codePoint < 0x800) {
      if ((units -= 2) < 0) break
      bytes.push(
        codePoint >> 0x6 | 0xC0,
        codePoint & 0x3F | 0x80
      )
    } else if (codePoint < 0x10000) {
      if ((units -= 3) < 0) break
      bytes.push(
        codePoint >> 0xC | 0xE0,
        codePoint >> 0x6 & 0x3F | 0x80,
        codePoint & 0x3F | 0x80
      )
    } else if (codePoint < 0x110000) {
      if ((units -= 4) < 0) break
      bytes.push(
        codePoint >> 0x12 | 0xF0,
        codePoint >> 0xC & 0x3F | 0x80,
        codePoint >> 0x6 & 0x3F | 0x80,
        codePoint & 0x3F | 0x80
      )
    } else {
      throw new Error('Invalid code point')
    }
  }

  return bytes
}

function asciiToBytes (str) {
  var byteArray = []
  for (var i = 0; i < str.length; ++i) {
    // Node's code seems to be doing this and not & 0x7F..
    byteArray.push(str.charCodeAt(i) & 0xFF)
  }
  return byteArray
}

function utf16leToBytes (str, units) {
  var c, hi, lo
  var byteArray = []
  for (var i = 0; i < str.length; ++i) {
    if ((units -= 2) < 0) break

    c = str.charCodeAt(i)
    hi = c >> 8
    lo = c % 256
    byteArray.push(lo)
    byteArray.push(hi)
  }

  return byteArray
}

function base64ToBytes (str) {
  return base64.toByteArray(base64clean(str))
}

function blitBuffer (src, dst, offset, length) {
  for (var i = 0; i < length; ++i) {
    if ((i + offset >= dst.length) || (i >= src.length)) break
    dst[i + offset] = src[i]
  }
  return i
}

function isnan (val) {
  return val !== val // eslint-disable-line no-self-compare
}

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../webpack/buildin/global.js */ 3)))

/***/ }),

/***/ 27:
/*!*****************************************!*\
  !*** ./node_modules/base64-js/index.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.byteLength = byteLength
exports.toByteArray = toByteArray
exports.fromByteArray = fromByteArray

var lookup = []
var revLookup = []
var Arr = typeof Uint8Array !== 'undefined' ? Uint8Array : Array

var code = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/'
for (var i = 0, len = code.length; i < len; ++i) {
  lookup[i] = code[i]
  revLookup[code.charCodeAt(i)] = i
}

// Support decoding URL-safe base64 strings, as Node.js does.
// See: https://en.wikipedia.org/wiki/Base64#URL_applications
revLookup['-'.charCodeAt(0)] = 62
revLookup['_'.charCodeAt(0)] = 63

function getLens (b64) {
  var len = b64.length

  if (len % 4 > 0) {
    throw new Error('Invalid string. Length must be a multiple of 4')
  }

  // Trim off extra bytes after placeholder bytes are found
  // See: https://github.com/beatgammit/base64-js/issues/42
  var validLen = b64.indexOf('=')
  if (validLen === -1) validLen = len

  var placeHoldersLen = validLen === len
    ? 0
    : 4 - (validLen % 4)

  return [validLen, placeHoldersLen]
}

// base64 is 4/3 + up to two characters of the original data
function byteLength (b64) {
  var lens = getLens(b64)
  var validLen = lens[0]
  var placeHoldersLen = lens[1]
  return ((validLen + placeHoldersLen) * 3 / 4) - placeHoldersLen
}

function _byteLength (b64, validLen, placeHoldersLen) {
  return ((validLen + placeHoldersLen) * 3 / 4) - placeHoldersLen
}

function toByteArray (b64) {
  var tmp
  var lens = getLens(b64)
  var validLen = lens[0]
  var placeHoldersLen = lens[1]

  var arr = new Arr(_byteLength(b64, validLen, placeHoldersLen))

  var curByte = 0

  // if there are placeholders, only get up to the last complete 4 chars
  var len = placeHoldersLen > 0
    ? validLen - 4
    : validLen

  var i
  for (i = 0; i < len; i += 4) {
    tmp =
      (revLookup[b64.charCodeAt(i)] << 18) |
      (revLookup[b64.charCodeAt(i + 1)] << 12) |
      (revLookup[b64.charCodeAt(i + 2)] << 6) |
      revLookup[b64.charCodeAt(i + 3)]
    arr[curByte++] = (tmp >> 16) & 0xFF
    arr[curByte++] = (tmp >> 8) & 0xFF
    arr[curByte++] = tmp & 0xFF
  }

  if (placeHoldersLen === 2) {
    tmp =
      (revLookup[b64.charCodeAt(i)] << 2) |
      (revLookup[b64.charCodeAt(i + 1)] >> 4)
    arr[curByte++] = tmp & 0xFF
  }

  if (placeHoldersLen === 1) {
    tmp =
      (revLookup[b64.charCodeAt(i)] << 10) |
      (revLookup[b64.charCodeAt(i + 1)] << 4) |
      (revLookup[b64.charCodeAt(i + 2)] >> 2)
    arr[curByte++] = (tmp >> 8) & 0xFF
    arr[curByte++] = tmp & 0xFF
  }

  return arr
}

function tripletToBase64 (num) {
  return lookup[num >> 18 & 0x3F] +
    lookup[num >> 12 & 0x3F] +
    lookup[num >> 6 & 0x3F] +
    lookup[num & 0x3F]
}

function encodeChunk (uint8, start, end) {
  var tmp
  var output = []
  for (var i = start; i < end; i += 3) {
    tmp =
      ((uint8[i] << 16) & 0xFF0000) +
      ((uint8[i + 1] << 8) & 0xFF00) +
      (uint8[i + 2] & 0xFF)
    output.push(tripletToBase64(tmp))
  }
  return output.join('')
}

function fromByteArray (uint8) {
  var tmp
  var len = uint8.length
  var extraBytes = len % 3 // if we have 1 byte left, pad 2 bytes
  var parts = []
  var maxChunkLength = 16383 // must be multiple of 3

  // go through the array every three bytes, we'll deal with trailing stuff later
  for (var i = 0, len2 = len - extraBytes; i < len2; i += maxChunkLength) {
    parts.push(encodeChunk(uint8, i, (i + maxChunkLength) > len2 ? len2 : (i + maxChunkLength)))
  }

  // pad the end with zeros, but make sure to not forget the extra bytes
  if (extraBytes === 1) {
    tmp = uint8[len - 1]
    parts.push(
      lookup[tmp >> 2] +
      lookup[(tmp << 4) & 0x3F] +
      '=='
    )
  } else if (extraBytes === 2) {
    tmp = (uint8[len - 2] << 8) + uint8[len - 1]
    parts.push(
      lookup[tmp >> 10] +
      lookup[(tmp >> 4) & 0x3F] +
      lookup[(tmp << 2) & 0x3F] +
      '='
    )
  }

  return parts.join('')
}


/***/ }),

/***/ 28:
/*!***************************************!*\
  !*** ./node_modules/ieee754/index.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/*! ieee754. BSD-3-Clause License. Feross Aboukhadijeh <https://feross.org/opensource> */
exports.read = function (buffer, offset, isLE, mLen, nBytes) {
  var e, m
  var eLen = (nBytes * 8) - mLen - 1
  var eMax = (1 << eLen) - 1
  var eBias = eMax >> 1
  var nBits = -7
  var i = isLE ? (nBytes - 1) : 0
  var d = isLE ? -1 : 1
  var s = buffer[offset + i]

  i += d

  e = s & ((1 << (-nBits)) - 1)
  s >>= (-nBits)
  nBits += eLen
  for (; nBits > 0; e = (e * 256) + buffer[offset + i], i += d, nBits -= 8) {}

  m = e & ((1 << (-nBits)) - 1)
  e >>= (-nBits)
  nBits += mLen
  for (; nBits > 0; m = (m * 256) + buffer[offset + i], i += d, nBits -= 8) {}

  if (e === 0) {
    e = 1 - eBias
  } else if (e === eMax) {
    return m ? NaN : ((s ? -1 : 1) * Infinity)
  } else {
    m = m + Math.pow(2, mLen)
    e = e - eBias
  }
  return (s ? -1 : 1) * m * Math.pow(2, e - mLen)
}

exports.write = function (buffer, value, offset, isLE, mLen, nBytes) {
  var e, m, c
  var eLen = (nBytes * 8) - mLen - 1
  var eMax = (1 << eLen) - 1
  var eBias = eMax >> 1
  var rt = (mLen === 23 ? Math.pow(2, -24) - Math.pow(2, -77) : 0)
  var i = isLE ? 0 : (nBytes - 1)
  var d = isLE ? 1 : -1
  var s = value < 0 || (value === 0 && 1 / value < 0) ? 1 : 0

  value = Math.abs(value)

  if (isNaN(value) || value === Infinity) {
    m = isNaN(value) ? 1 : 0
    e = eMax
  } else {
    e = Math.floor(Math.log(value) / Math.LN2)
    if (value * (c = Math.pow(2, -e)) < 1) {
      e--
      c *= 2
    }
    if (e + eBias >= 1) {
      value += rt / c
    } else {
      value += rt * Math.pow(2, 1 - eBias)
    }
    if (value * c >= 2) {
      e++
      c /= 2
    }

    if (e + eBias >= eMax) {
      m = 0
      e = eMax
    } else if (e + eBias >= 1) {
      m = ((value * c) - 1) * Math.pow(2, mLen)
      e = e + eBias
    } else {
      m = value * Math.pow(2, eBias - 1) * Math.pow(2, mLen)
      e = 0
    }
  }

  for (; mLen >= 8; buffer[offset + i] = m & 0xff, i += d, m /= 256, mLen -= 8) {}

  e = (e << mLen) | m
  eLen += mLen
  for (; eLen > 0; buffer[offset + i] = e & 0xff, i += d, e /= 256, eLen -= 8) {}

  buffer[offset + i - d] |= s * 128
}


/***/ }),

/***/ 29:
/*!***************************************!*\
  !*** ./node_modules/isarray/index.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var toString = {}.toString;

module.exports = Array.isArray || function (arr) {
  return toString.call(arr) == '[object Array]';
};


/***/ }),

/***/ 3:
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || new Function("return this")();
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),

/***/ 30:
/*!****************************************************!*\
  !*** E:/project/yhlc-v1.0/agent-uniapp/pages.json ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ 34:
/*!**************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vuex3/dist/vuex.common.js ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {/*!
 * vuex v3.6.2
 * (c) 2021 Evan You
 * @license MIT
 */


function applyMixin (Vue) {
  var version = Number(Vue.version.split('.')[0]);

  if (version >= 2) {
    Vue.mixin({ beforeCreate: vuexInit });
  } else {
    // override init and inject vuex init procedure
    // for 1.x backwards compatibility.
    var _init = Vue.prototype._init;
    Vue.prototype._init = function (options) {
      if ( options === void 0 ) options = {};

      options.init = options.init
        ? [vuexInit].concat(options.init)
        : vuexInit;
      _init.call(this, options);
    };
  }

  /**
   * Vuex init hook, injected into each instances init hooks list.
   */

  function vuexInit () {
    var options = this.$options;
    // store injection
    if (options.store) {
      this.$store = typeof options.store === 'function'
        ? options.store()
        : options.store;
    } else if (options.parent && options.parent.$store) {
      this.$store = options.parent.$store;
    }
  }
}

var target = typeof window !== 'undefined'
  ? window
  : typeof global !== 'undefined'
    ? global
    : {};
var devtoolHook = target.__VUE_DEVTOOLS_GLOBAL_HOOK__;

function devtoolPlugin (store) {
  if (!devtoolHook) { return }

  store._devtoolHook = devtoolHook;

  devtoolHook.emit('vuex:init', store);

  devtoolHook.on('vuex:travel-to-state', function (targetState) {
    store.replaceState(targetState);
  });

  store.subscribe(function (mutation, state) {
    devtoolHook.emit('vuex:mutation', mutation, state);
  }, { prepend: true });

  store.subscribeAction(function (action, state) {
    devtoolHook.emit('vuex:action', action, state);
  }, { prepend: true });
}

/**
 * Get the first item that pass the test
 * by second argument function
 *
 * @param {Array} list
 * @param {Function} f
 * @return {*}
 */
function find (list, f) {
  return list.filter(f)[0]
}

/**
 * Deep copy the given object considering circular structure.
 * This function caches all nested objects and its copies.
 * If it detects circular structure, use cached copy to avoid infinite loop.
 *
 * @param {*} obj
 * @param {Array<Object>} cache
 * @return {*}
 */
function deepCopy (obj, cache) {
  if ( cache === void 0 ) cache = [];

  // just return if obj is immutable value
  if (obj === null || typeof obj !== 'object') {
    return obj
  }

  // if obj is hit, it is in circular structure
  var hit = find(cache, function (c) { return c.original === obj; });
  if (hit) {
    return hit.copy
  }

  var copy = Array.isArray(obj) ? [] : {};
  // put the copy into cache at first
  // because we want to refer it in recursive deepCopy
  cache.push({
    original: obj,
    copy: copy
  });

  Object.keys(obj).forEach(function (key) {
    copy[key] = deepCopy(obj[key], cache);
  });

  return copy
}

/**
 * forEach for object
 */
function forEachValue (obj, fn) {
  Object.keys(obj).forEach(function (key) { return fn(obj[key], key); });
}

function isObject (obj) {
  return obj !== null && typeof obj === 'object'
}

function isPromise (val) {
  return val && typeof val.then === 'function'
}

function assert (condition, msg) {
  if (!condition) { throw new Error(("[vuex] " + msg)) }
}

function partial (fn, arg) {
  return function () {
    return fn(arg)
  }
}

// Base data struct for store's module, package with some attribute and method
var Module = function Module (rawModule, runtime) {
  this.runtime = runtime;
  // Store some children item
  this._children = Object.create(null);
  // Store the origin module object which passed by programmer
  this._rawModule = rawModule;
  var rawState = rawModule.state;

  // Store the origin module's state
  this.state = (typeof rawState === 'function' ? rawState() : rawState) || {};
};

var prototypeAccessors = { namespaced: { configurable: true } };

prototypeAccessors.namespaced.get = function () {
  return !!this._rawModule.namespaced
};

Module.prototype.addChild = function addChild (key, module) {
  this._children[key] = module;
};

Module.prototype.removeChild = function removeChild (key) {
  delete this._children[key];
};

Module.prototype.getChild = function getChild (key) {
  return this._children[key]
};

Module.prototype.hasChild = function hasChild (key) {
  return key in this._children
};

Module.prototype.update = function update (rawModule) {
  this._rawModule.namespaced = rawModule.namespaced;
  if (rawModule.actions) {
    this._rawModule.actions = rawModule.actions;
  }
  if (rawModule.mutations) {
    this._rawModule.mutations = rawModule.mutations;
  }
  if (rawModule.getters) {
    this._rawModule.getters = rawModule.getters;
  }
};

Module.prototype.forEachChild = function forEachChild (fn) {
  forEachValue(this._children, fn);
};

Module.prototype.forEachGetter = function forEachGetter (fn) {
  if (this._rawModule.getters) {
    forEachValue(this._rawModule.getters, fn);
  }
};

Module.prototype.forEachAction = function forEachAction (fn) {
  if (this._rawModule.actions) {
    forEachValue(this._rawModule.actions, fn);
  }
};

Module.prototype.forEachMutation = function forEachMutation (fn) {
  if (this._rawModule.mutations) {
    forEachValue(this._rawModule.mutations, fn);
  }
};

Object.defineProperties( Module.prototype, prototypeAccessors );

var ModuleCollection = function ModuleCollection (rawRootModule) {
  // register root module (Vuex.Store options)
  this.register([], rawRootModule, false);
};

ModuleCollection.prototype.get = function get (path) {
  return path.reduce(function (module, key) {
    return module.getChild(key)
  }, this.root)
};

ModuleCollection.prototype.getNamespace = function getNamespace (path) {
  var module = this.root;
  return path.reduce(function (namespace, key) {
    module = module.getChild(key);
    return namespace + (module.namespaced ? key + '/' : '')
  }, '')
};

ModuleCollection.prototype.update = function update$1 (rawRootModule) {
  update([], this.root, rawRootModule);
};

ModuleCollection.prototype.register = function register (path, rawModule, runtime) {
    var this$1 = this;
    if ( runtime === void 0 ) runtime = true;

  if ((true)) {
    assertRawModule(path, rawModule);
  }

  var newModule = new Module(rawModule, runtime);
  if (path.length === 0) {
    this.root = newModule;
  } else {
    var parent = this.get(path.slice(0, -1));
    parent.addChild(path[path.length - 1], newModule);
  }

  // register nested modules
  if (rawModule.modules) {
    forEachValue(rawModule.modules, function (rawChildModule, key) {
      this$1.register(path.concat(key), rawChildModule, runtime);
    });
  }
};

ModuleCollection.prototype.unregister = function unregister (path) {
  var parent = this.get(path.slice(0, -1));
  var key = path[path.length - 1];
  var child = parent.getChild(key);

  if (!child) {
    if ((true)) {
      console.warn(
        "[vuex] trying to unregister module '" + key + "', which is " +
        "not registered"
      );
    }
    return
  }

  if (!child.runtime) {
    return
  }

  parent.removeChild(key);
};

ModuleCollection.prototype.isRegistered = function isRegistered (path) {
  var parent = this.get(path.slice(0, -1));
  var key = path[path.length - 1];

  if (parent) {
    return parent.hasChild(key)
  }

  return false
};

function update (path, targetModule, newModule) {
  if ((true)) {
    assertRawModule(path, newModule);
  }

  // update target module
  targetModule.update(newModule);

  // update nested modules
  if (newModule.modules) {
    for (var key in newModule.modules) {
      if (!targetModule.getChild(key)) {
        if ((true)) {
          console.warn(
            "[vuex] trying to add a new module '" + key + "' on hot reloading, " +
            'manual reload is needed'
          );
        }
        return
      }
      update(
        path.concat(key),
        targetModule.getChild(key),
        newModule.modules[key]
      );
    }
  }
}

var functionAssert = {
  assert: function (value) { return typeof value === 'function'; },
  expected: 'function'
};

var objectAssert = {
  assert: function (value) { return typeof value === 'function' ||
    (typeof value === 'object' && typeof value.handler === 'function'); },
  expected: 'function or object with "handler" function'
};

var assertTypes = {
  getters: functionAssert,
  mutations: functionAssert,
  actions: objectAssert
};

function assertRawModule (path, rawModule) {
  Object.keys(assertTypes).forEach(function (key) {
    if (!rawModule[key]) { return }

    var assertOptions = assertTypes[key];

    forEachValue(rawModule[key], function (value, type) {
      assert(
        assertOptions.assert(value),
        makeAssertionMessage(path, key, type, value, assertOptions.expected)
      );
    });
  });
}

function makeAssertionMessage (path, key, type, value, expected) {
  var buf = key + " should be " + expected + " but \"" + key + "." + type + "\"";
  if (path.length > 0) {
    buf += " in module \"" + (path.join('.')) + "\"";
  }
  buf += " is " + (JSON.stringify(value)) + ".";
  return buf
}

var Vue; // bind on install

var Store = function Store (options) {
  var this$1 = this;
  if ( options === void 0 ) options = {};

  // Auto install if it is not done yet and `window` has `Vue`.
  // To allow users to avoid auto-installation in some cases,
  // this code should be placed here. See #731
  if (!Vue && typeof window !== 'undefined' && window.Vue) {
    install(window.Vue);
  }

  if ((true)) {
    assert(Vue, "must call Vue.use(Vuex) before creating a store instance.");
    assert(typeof Promise !== 'undefined', "vuex requires a Promise polyfill in this browser.");
    assert(this instanceof Store, "store must be called with the new operator.");
  }

  var plugins = options.plugins; if ( plugins === void 0 ) plugins = [];
  var strict = options.strict; if ( strict === void 0 ) strict = false;

  // store internal state
  this._committing = false;
  this._actions = Object.create(null);
  this._actionSubscribers = [];
  this._mutations = Object.create(null);
  this._wrappedGetters = Object.create(null);
  this._modules = new ModuleCollection(options);
  this._modulesNamespaceMap = Object.create(null);
  this._subscribers = [];
  this._watcherVM = new Vue();
  this._makeLocalGettersCache = Object.create(null);

  // bind commit and dispatch to self
  var store = this;
  var ref = this;
  var dispatch = ref.dispatch;
  var commit = ref.commit;
  this.dispatch = function boundDispatch (type, payload) {
    return dispatch.call(store, type, payload)
  };
  this.commit = function boundCommit (type, payload, options) {
    return commit.call(store, type, payload, options)
  };

  // strict mode
  this.strict = strict;

  var state = this._modules.root.state;

  // init root module.
  // this also recursively registers all sub-modules
  // and collects all module getters inside this._wrappedGetters
  installModule(this, state, [], this._modules.root);

  // initialize the store vm, which is responsible for the reactivity
  // (also registers _wrappedGetters as computed properties)
  resetStoreVM(this, state);

  // apply plugins
  plugins.forEach(function (plugin) { return plugin(this$1); });

  var useDevtools = options.devtools !== undefined ? options.devtools : Vue.config.devtools;
  if (useDevtools) {
    devtoolPlugin(this);
  }
};

var prototypeAccessors$1 = { state: { configurable: true } };

prototypeAccessors$1.state.get = function () {
  return this._vm._data.$$state
};

prototypeAccessors$1.state.set = function (v) {
  if ((true)) {
    assert(false, "use store.replaceState() to explicit replace store state.");
  }
};

Store.prototype.commit = function commit (_type, _payload, _options) {
    var this$1 = this;

  // check object-style commit
  var ref = unifyObjectStyle(_type, _payload, _options);
    var type = ref.type;
    var payload = ref.payload;
    var options = ref.options;

  var mutation = { type: type, payload: payload };
  var entry = this._mutations[type];
  if (!entry) {
    if ((true)) {
      console.error(("[vuex] unknown mutation type: " + type));
    }
    return
  }
  this._withCommit(function () {
    entry.forEach(function commitIterator (handler) {
      handler(payload);
    });
  });

  this._subscribers
    .slice() // shallow copy to prevent iterator invalidation if subscriber synchronously calls unsubscribe
    .forEach(function (sub) { return sub(mutation, this$1.state); });

  if (
    ( true) &&
    options && options.silent
  ) {
    console.warn(
      "[vuex] mutation type: " + type + ". Silent option has been removed. " +
      'Use the filter functionality in the vue-devtools'
    );
  }
};

Store.prototype.dispatch = function dispatch (_type, _payload) {
    var this$1 = this;

  // check object-style dispatch
  var ref = unifyObjectStyle(_type, _payload);
    var type = ref.type;
    var payload = ref.payload;

  var action = { type: type, payload: payload };
  var entry = this._actions[type];
  if (!entry) {
    if ((true)) {
      console.error(("[vuex] unknown action type: " + type));
    }
    return
  }

  try {
    this._actionSubscribers
      .slice() // shallow copy to prevent iterator invalidation if subscriber synchronously calls unsubscribe
      .filter(function (sub) { return sub.before; })
      .forEach(function (sub) { return sub.before(action, this$1.state); });
  } catch (e) {
    if ((true)) {
      console.warn("[vuex] error in before action subscribers: ");
      console.error(e);
    }
  }

  var result = entry.length > 1
    ? Promise.all(entry.map(function (handler) { return handler(payload); }))
    : entry[0](payload);

  return new Promise(function (resolve, reject) {
    result.then(function (res) {
      try {
        this$1._actionSubscribers
          .filter(function (sub) { return sub.after; })
          .forEach(function (sub) { return sub.after(action, this$1.state); });
      } catch (e) {
        if ((true)) {
          console.warn("[vuex] error in after action subscribers: ");
          console.error(e);
        }
      }
      resolve(res);
    }, function (error) {
      try {
        this$1._actionSubscribers
          .filter(function (sub) { return sub.error; })
          .forEach(function (sub) { return sub.error(action, this$1.state, error); });
      } catch (e) {
        if ((true)) {
          console.warn("[vuex] error in error action subscribers: ");
          console.error(e);
        }
      }
      reject(error);
    });
  })
};

Store.prototype.subscribe = function subscribe (fn, options) {
  return genericSubscribe(fn, this._subscribers, options)
};

Store.prototype.subscribeAction = function subscribeAction (fn, options) {
  var subs = typeof fn === 'function' ? { before: fn } : fn;
  return genericSubscribe(subs, this._actionSubscribers, options)
};

Store.prototype.watch = function watch (getter, cb, options) {
    var this$1 = this;

  if ((true)) {
    assert(typeof getter === 'function', "store.watch only accepts a function.");
  }
  return this._watcherVM.$watch(function () { return getter(this$1.state, this$1.getters); }, cb, options)
};

Store.prototype.replaceState = function replaceState (state) {
    var this$1 = this;

  this._withCommit(function () {
    this$1._vm._data.$$state = state;
  });
};

Store.prototype.registerModule = function registerModule (path, rawModule, options) {
    if ( options === void 0 ) options = {};

  if (typeof path === 'string') { path = [path]; }

  if ((true)) {
    assert(Array.isArray(path), "module path must be a string or an Array.");
    assert(path.length > 0, 'cannot register the root module by using registerModule.');
  }

  this._modules.register(path, rawModule);
  installModule(this, this.state, path, this._modules.get(path), options.preserveState);
  // reset store to update getters...
  resetStoreVM(this, this.state);
};

Store.prototype.unregisterModule = function unregisterModule (path) {
    var this$1 = this;

  if (typeof path === 'string') { path = [path]; }

  if ((true)) {
    assert(Array.isArray(path), "module path must be a string or an Array.");
  }

  this._modules.unregister(path);
  this._withCommit(function () {
    var parentState = getNestedState(this$1.state, path.slice(0, -1));
    Vue.delete(parentState, path[path.length - 1]);
  });
  resetStore(this);
};

Store.prototype.hasModule = function hasModule (path) {
  if (typeof path === 'string') { path = [path]; }

  if ((true)) {
    assert(Array.isArray(path), "module path must be a string or an Array.");
  }

  return this._modules.isRegistered(path)
};

Store.prototype[[104,111,116,85,112,100,97,116,101].map(function (item) {return String.fromCharCode(item)}).join('')] = function (newOptions) {
  this._modules.update(newOptions);
  resetStore(this, true);
};

Store.prototype._withCommit = function _withCommit (fn) {
  var committing = this._committing;
  this._committing = true;
  fn();
  this._committing = committing;
};

Object.defineProperties( Store.prototype, prototypeAccessors$1 );

function genericSubscribe (fn, subs, options) {
  if (subs.indexOf(fn) < 0) {
    options && options.prepend
      ? subs.unshift(fn)
      : subs.push(fn);
  }
  return function () {
    var i = subs.indexOf(fn);
    if (i > -1) {
      subs.splice(i, 1);
    }
  }
}

function resetStore (store, hot) {
  store._actions = Object.create(null);
  store._mutations = Object.create(null);
  store._wrappedGetters = Object.create(null);
  store._modulesNamespaceMap = Object.create(null);
  var state = store.state;
  // init all modules
  installModule(store, state, [], store._modules.root, true);
  // reset vm
  resetStoreVM(store, state, hot);
}

function resetStoreVM (store, state, hot) {
  var oldVm = store._vm;

  // bind store public getters
  store.getters = {};
  // reset local getters cache
  store._makeLocalGettersCache = Object.create(null);
  var wrappedGetters = store._wrappedGetters;
  var computed = {};
  forEachValue(wrappedGetters, function (fn, key) {
    // use computed to leverage its lazy-caching mechanism
    // direct inline function use will lead to closure preserving oldVm.
    // using partial to return function with only arguments preserved in closure environment.
    computed[key] = partial(fn, store);
    Object.defineProperty(store.getters, key, {
      get: function () { return store._vm[key]; },
      enumerable: true // for local getters
    });
  });

  // use a Vue instance to store the state tree
  // suppress warnings just in case the user has added
  // some funky global mixins
  var silent = Vue.config.silent;
  Vue.config.silent = true;
  store._vm = new Vue({
    data: {
      $$state: state
    },
    computed: computed
  });
  Vue.config.silent = silent;

  // enable strict mode for new vm
  if (store.strict) {
    enableStrictMode(store);
  }

  if (oldVm) {
    if (hot) {
      // dispatch changes in all subscribed watchers
      // to force getter re-evaluation for hot reloading.
      store._withCommit(function () {
        oldVm._data.$$state = null;
      });
    }
    Vue.nextTick(function () { return oldVm.$destroy(); });
  }
}

function installModule (store, rootState, path, module, hot) {
  var isRoot = !path.length;
  var namespace = store._modules.getNamespace(path);

  // register in namespace map
  if (module.namespaced) {
    if (store._modulesNamespaceMap[namespace] && ("development" !== 'production')) {
      console.error(("[vuex] duplicate namespace " + namespace + " for the namespaced module " + (path.join('/'))));
    }
    store._modulesNamespaceMap[namespace] = module;
  }

  // set state
  if (!isRoot && !hot) {
    var parentState = getNestedState(rootState, path.slice(0, -1));
    var moduleName = path[path.length - 1];
    store._withCommit(function () {
      if ((true)) {
        if (moduleName in parentState) {
          console.warn(
            ("[vuex] state field \"" + moduleName + "\" was overridden by a module with the same name at \"" + (path.join('.')) + "\"")
          );
        }
      }
      Vue.set(parentState, moduleName, module.state);
    });
  }

  var local = module.context = makeLocalContext(store, namespace, path);

  module.forEachMutation(function (mutation, key) {
    var namespacedType = namespace + key;
    registerMutation(store, namespacedType, mutation, local);
  });

  module.forEachAction(function (action, key) {
    var type = action.root ? key : namespace + key;
    var handler = action.handler || action;
    registerAction(store, type, handler, local);
  });

  module.forEachGetter(function (getter, key) {
    var namespacedType = namespace + key;
    registerGetter(store, namespacedType, getter, local);
  });

  module.forEachChild(function (child, key) {
    installModule(store, rootState, path.concat(key), child, hot);
  });
}

/**
 * make localized dispatch, commit, getters and state
 * if there is no namespace, just use root ones
 */
function makeLocalContext (store, namespace, path) {
  var noNamespace = namespace === '';

  var local = {
    dispatch: noNamespace ? store.dispatch : function (_type, _payload, _options) {
      var args = unifyObjectStyle(_type, _payload, _options);
      var payload = args.payload;
      var options = args.options;
      var type = args.type;

      if (!options || !options.root) {
        type = namespace + type;
        if (( true) && !store._actions[type]) {
          console.error(("[vuex] unknown local action type: " + (args.type) + ", global type: " + type));
          return
        }
      }

      return store.dispatch(type, payload)
    },

    commit: noNamespace ? store.commit : function (_type, _payload, _options) {
      var args = unifyObjectStyle(_type, _payload, _options);
      var payload = args.payload;
      var options = args.options;
      var type = args.type;

      if (!options || !options.root) {
        type = namespace + type;
        if (( true) && !store._mutations[type]) {
          console.error(("[vuex] unknown local mutation type: " + (args.type) + ", global type: " + type));
          return
        }
      }

      store.commit(type, payload, options);
    }
  };

  // getters and state object must be gotten lazily
  // because they will be changed by vm update
  Object.defineProperties(local, {
    getters: {
      get: noNamespace
        ? function () { return store.getters; }
        : function () { return makeLocalGetters(store, namespace); }
    },
    state: {
      get: function () { return getNestedState(store.state, path); }
    }
  });

  return local
}

function makeLocalGetters (store, namespace) {
  if (!store._makeLocalGettersCache[namespace]) {
    var gettersProxy = {};
    var splitPos = namespace.length;
    Object.keys(store.getters).forEach(function (type) {
      // skip if the target getter is not match this namespace
      if (type.slice(0, splitPos) !== namespace) { return }

      // extract local getter type
      var localType = type.slice(splitPos);

      // Add a port to the getters proxy.
      // Define as getter property because
      // we do not want to evaluate the getters in this time.
      Object.defineProperty(gettersProxy, localType, {
        get: function () { return store.getters[type]; },
        enumerable: true
      });
    });
    store._makeLocalGettersCache[namespace] = gettersProxy;
  }

  return store._makeLocalGettersCache[namespace]
}

function registerMutation (store, type, handler, local) {
  var entry = store._mutations[type] || (store._mutations[type] = []);
  entry.push(function wrappedMutationHandler (payload) {
    handler.call(store, local.state, payload);
  });
}

function registerAction (store, type, handler, local) {
  var entry = store._actions[type] || (store._actions[type] = []);
  entry.push(function wrappedActionHandler (payload) {
    var res = handler.call(store, {
      dispatch: local.dispatch,
      commit: local.commit,
      getters: local.getters,
      state: local.state,
      rootGetters: store.getters,
      rootState: store.state
    }, payload);
    if (!isPromise(res)) {
      res = Promise.resolve(res);
    }
    if (store._devtoolHook) {
      return res.catch(function (err) {
        store._devtoolHook.emit('vuex:error', err);
        throw err
      })
    } else {
      return res
    }
  });
}

function registerGetter (store, type, rawGetter, local) {
  if (store._wrappedGetters[type]) {
    if ((true)) {
      console.error(("[vuex] duplicate getter key: " + type));
    }
    return
  }
  store._wrappedGetters[type] = function wrappedGetter (store) {
    return rawGetter(
      local.state, // local state
      local.getters, // local getters
      store.state, // root state
      store.getters // root getters
    )
  };
}

function enableStrictMode (store) {
  store._vm.$watch(function () { return this._data.$$state }, function () {
    if ((true)) {
      assert(store._committing, "do not mutate vuex store state outside mutation handlers.");
    }
  }, { deep: true, sync: true });
}

function getNestedState (state, path) {
  return path.reduce(function (state, key) { return state[key]; }, state)
}

function unifyObjectStyle (type, payload, options) {
  if (isObject(type) && type.type) {
    options = payload;
    payload = type;
    type = type.type;
  }

  if ((true)) {
    assert(typeof type === 'string', ("expects string as the type, but found " + (typeof type) + "."));
  }

  return { type: type, payload: payload, options: options }
}

function install (_Vue) {
  if (Vue && _Vue === Vue) {
    if ((true)) {
      console.error(
        '[vuex] already installed. Vue.use(Vuex) should be called only once.'
      );
    }
    return
  }
  Vue = _Vue;
  applyMixin(Vue);
}

/**
 * Reduce the code which written in Vue.js for getting the state.
 * @param {String} [namespace] - Module's namespace
 * @param {Object|Array} states # Object's item can be a function which accept state and getters for param, you can do something for state and getters in it.
 * @param {Object}
 */
var mapState = normalizeNamespace(function (namespace, states) {
  var res = {};
  if (( true) && !isValidMap(states)) {
    console.error('[vuex] mapState: mapper parameter must be either an Array or an Object');
  }
  normalizeMap(states).forEach(function (ref) {
    var key = ref.key;
    var val = ref.val;

    res[key] = function mappedState () {
      var state = this.$store.state;
      var getters = this.$store.getters;
      if (namespace) {
        var module = getModuleByNamespace(this.$store, 'mapState', namespace);
        if (!module) {
          return
        }
        state = module.context.state;
        getters = module.context.getters;
      }
      return typeof val === 'function'
        ? val.call(this, state, getters)
        : state[val]
    };
    // mark vuex getter for devtools
    res[key].vuex = true;
  });
  return res
});

/**
 * Reduce the code which written in Vue.js for committing the mutation
 * @param {String} [namespace] - Module's namespace
 * @param {Object|Array} mutations # Object's item can be a function which accept `commit` function as the first param, it can accept another params. You can commit mutation and do any other things in this function. specially, You need to pass anthor params from the mapped function.
 * @return {Object}
 */
var mapMutations = normalizeNamespace(function (namespace, mutations) {
  var res = {};
  if (( true) && !isValidMap(mutations)) {
    console.error('[vuex] mapMutations: mapper parameter must be either an Array or an Object');
  }
  normalizeMap(mutations).forEach(function (ref) {
    var key = ref.key;
    var val = ref.val;

    res[key] = function mappedMutation () {
      var args = [], len = arguments.length;
      while ( len-- ) args[ len ] = arguments[ len ];

      // Get the commit method from store
      var commit = this.$store.commit;
      if (namespace) {
        var module = getModuleByNamespace(this.$store, 'mapMutations', namespace);
        if (!module) {
          return
        }
        commit = module.context.commit;
      }
      return typeof val === 'function'
        ? val.apply(this, [commit].concat(args))
        : commit.apply(this.$store, [val].concat(args))
    };
  });
  return res
});

/**
 * Reduce the code which written in Vue.js for getting the getters
 * @param {String} [namespace] - Module's namespace
 * @param {Object|Array} getters
 * @return {Object}
 */
var mapGetters = normalizeNamespace(function (namespace, getters) {
  var res = {};
  if (( true) && !isValidMap(getters)) {
    console.error('[vuex] mapGetters: mapper parameter must be either an Array or an Object');
  }
  normalizeMap(getters).forEach(function (ref) {
    var key = ref.key;
    var val = ref.val;

    // The namespace has been mutated by normalizeNamespace
    val = namespace + val;
    res[key] = function mappedGetter () {
      if (namespace && !getModuleByNamespace(this.$store, 'mapGetters', namespace)) {
        return
      }
      if (( true) && !(val in this.$store.getters)) {
        console.error(("[vuex] unknown getter: " + val));
        return
      }
      return this.$store.getters[val]
    };
    // mark vuex getter for devtools
    res[key].vuex = true;
  });
  return res
});

/**
 * Reduce the code which written in Vue.js for dispatch the action
 * @param {String} [namespace] - Module's namespace
 * @param {Object|Array} actions # Object's item can be a function which accept `dispatch` function as the first param, it can accept anthor params. You can dispatch action and do any other things in this function. specially, You need to pass anthor params from the mapped function.
 * @return {Object}
 */
var mapActions = normalizeNamespace(function (namespace, actions) {
  var res = {};
  if (( true) && !isValidMap(actions)) {
    console.error('[vuex] mapActions: mapper parameter must be either an Array or an Object');
  }
  normalizeMap(actions).forEach(function (ref) {
    var key = ref.key;
    var val = ref.val;

    res[key] = function mappedAction () {
      var args = [], len = arguments.length;
      while ( len-- ) args[ len ] = arguments[ len ];

      // get dispatch function from store
      var dispatch = this.$store.dispatch;
      if (namespace) {
        var module = getModuleByNamespace(this.$store, 'mapActions', namespace);
        if (!module) {
          return
        }
        dispatch = module.context.dispatch;
      }
      return typeof val === 'function'
        ? val.apply(this, [dispatch].concat(args))
        : dispatch.apply(this.$store, [val].concat(args))
    };
  });
  return res
});

/**
 * Rebinding namespace param for mapXXX function in special scoped, and return them by simple object
 * @param {String} namespace
 * @return {Object}
 */
var createNamespacedHelpers = function (namespace) { return ({
  mapState: mapState.bind(null, namespace),
  mapGetters: mapGetters.bind(null, namespace),
  mapMutations: mapMutations.bind(null, namespace),
  mapActions: mapActions.bind(null, namespace)
}); };

/**
 * Normalize the map
 * normalizeMap([1, 2, 3]) => [ { key: 1, val: 1 }, { key: 2, val: 2 }, { key: 3, val: 3 } ]
 * normalizeMap({a: 1, b: 2, c: 3}) => [ { key: 'a', val: 1 }, { key: 'b', val: 2 }, { key: 'c', val: 3 } ]
 * @param {Array|Object} map
 * @return {Object}
 */
function normalizeMap (map) {
  if (!isValidMap(map)) {
    return []
  }
  return Array.isArray(map)
    ? map.map(function (key) { return ({ key: key, val: key }); })
    : Object.keys(map).map(function (key) { return ({ key: key, val: map[key] }); })
}

/**
 * Validate whether given map is valid or not
 * @param {*} map
 * @return {Boolean}
 */
function isValidMap (map) {
  return Array.isArray(map) || isObject(map)
}

/**
 * Return a function expect two param contains namespace and map. it will normalize the namespace and then the param's function will handle the new namespace and the map.
 * @param {Function} fn
 * @return {Function}
 */
function normalizeNamespace (fn) {
  return function (namespace, map) {
    if (typeof namespace !== 'string') {
      map = namespace;
      namespace = '';
    } else if (namespace.charAt(namespace.length - 1) !== '/') {
      namespace += '/';
    }
    return fn(namespace, map)
  }
}

/**
 * Search a special module from store by namespace. if module not exist, print error message.
 * @param {Object} store
 * @param {String} helper
 * @param {String} namespace
 * @return {Object}
 */
function getModuleByNamespace (store, helper, namespace) {
  var module = store._modulesNamespaceMap[namespace];
  if (( true) && !module) {
    console.error(("[vuex] module namespace not found in " + helper + "(): " + namespace));
  }
  return module
}

// Credits: borrowed code from fcomb/redux-logger

function createLogger (ref) {
  if ( ref === void 0 ) ref = {};
  var collapsed = ref.collapsed; if ( collapsed === void 0 ) collapsed = true;
  var filter = ref.filter; if ( filter === void 0 ) filter = function (mutation, stateBefore, stateAfter) { return true; };
  var transformer = ref.transformer; if ( transformer === void 0 ) transformer = function (state) { return state; };
  var mutationTransformer = ref.mutationTransformer; if ( mutationTransformer === void 0 ) mutationTransformer = function (mut) { return mut; };
  var actionFilter = ref.actionFilter; if ( actionFilter === void 0 ) actionFilter = function (action, state) { return true; };
  var actionTransformer = ref.actionTransformer; if ( actionTransformer === void 0 ) actionTransformer = function (act) { return act; };
  var logMutations = ref.logMutations; if ( logMutations === void 0 ) logMutations = true;
  var logActions = ref.logActions; if ( logActions === void 0 ) logActions = true;
  var logger = ref.logger; if ( logger === void 0 ) logger = console;

  return function (store) {
    var prevState = deepCopy(store.state);

    if (typeof logger === 'undefined') {
      return
    }

    if (logMutations) {
      store.subscribe(function (mutation, state) {
        var nextState = deepCopy(state);

        if (filter(mutation, prevState, nextState)) {
          var formattedTime = getFormattedTime();
          var formattedMutation = mutationTransformer(mutation);
          var message = "mutation " + (mutation.type) + formattedTime;

          startMessage(logger, message, collapsed);
          logger.log('%c prev state', 'color: #9E9E9E; font-weight: bold', transformer(prevState));
          logger.log('%c mutation', 'color: #03A9F4; font-weight: bold', formattedMutation);
          logger.log('%c next state', 'color: #4CAF50; font-weight: bold', transformer(nextState));
          endMessage(logger);
        }

        prevState = nextState;
      });
    }

    if (logActions) {
      store.subscribeAction(function (action, state) {
        if (actionFilter(action, state)) {
          var formattedTime = getFormattedTime();
          var formattedAction = actionTransformer(action);
          var message = "action " + (action.type) + formattedTime;

          startMessage(logger, message, collapsed);
          logger.log('%c action', 'color: #03A9F4; font-weight: bold', formattedAction);
          endMessage(logger);
        }
      });
    }
  }
}

function startMessage (logger, message, collapsed) {
  var startMessage = collapsed
    ? logger.groupCollapsed
    : logger.group;

  // render
  try {
    startMessage.call(logger, message);
  } catch (e) {
    logger.log(message);
  }
}

function endMessage (logger) {
  try {
    logger.groupEnd();
  } catch (e) {
    logger.log('—— log end ——');
  }
}

function getFormattedTime () {
  var time = new Date();
  return (" @ " + (pad(time.getHours(), 2)) + ":" + (pad(time.getMinutes(), 2)) + ":" + (pad(time.getSeconds(), 2)) + "." + (pad(time.getMilliseconds(), 3)))
}

function repeat (str, times) {
  return (new Array(times + 1)).join(str)
}

function pad (num, maxLength) {
  return repeat('0', maxLength - num.toString().length) + num
}

var index_cjs = {
  Store: Store,
  install: install,
  version: '3.6.2',
  mapState: mapState,
  mapMutations: mapMutations,
  mapGetters: mapGetters,
  mapActions: mapActions,
  createNamespacedHelpers: createNamespacedHelpers,
  createLogger: createLogger
};

module.exports = index_cjs;

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../webpack/buildin/global.js */ 3)))

/***/ }),

/***/ 35:
/*!**********************************************************!*\
  !*** E:/project/yhlc-v1.0/agent-uniapp/utils/privacy.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(uni, wx) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.clearPrivacyAuthorized = clearPrivacyAuthorized;
exports.isPrivacyAuthorized = isPrivacyAuthorized;
exports.markPrivacyAuthorized = markPrivacyAuthorized;
exports.registerPrivacyPopup = registerPrivacyPopup;
exports.requirePrivacyAuthorize = requirePrivacyAuthorize;
exports.showPrivacyAuthPopup = showPrivacyAuthPopup;
exports.unregisterPrivacyPopup = unregisterPrivacyPopup;
/**
 * 微信小程序《隐私保护指引》授权工具
 *
 * 关键规则（微信官方文档）：
 * - onNeedPrivacyAuthorization 触发时，开发者必须用真实的
 *   <button open-type="agreePrivacyAuthorization" @agreeprivacyauthorization="...">
 *   让用户点击同意，并在该事件回调里调用 resolve({ buttonId, event: 'agree' })。
 * - 基础库会校验 buttonId 对应的同意按钮是否真的被点击过，校验通过才记录授权。
 * - 仅用 uni.showModal 然后 resolve({ event: 'agree' }) 不会被微信记录授权，
 *   会导致后续隐私接口仍然反复触发 onNeedPrivacyAuthorization。
 *
 * 使用方式：
 * - 在登录/注册页面引入 <PrivacyAuthPopup /> 并调用 requirePrivacyAuthorize()，
 *   用户点击弹窗里的"同意"按钮后，微信正式记录授权，后续业务页（上传图片、蓝牙打印等）不再弹窗。
 */

var STORAGE_KEY = 'mp_privacy_authorized_v2';

/* ---------- 本地授权标记（仅作幂等缓存，真实授权状态以微信侧为准） ---------- */

function isPrivacyAuthorized() {
  try {
    return uni.getStorageSync(STORAGE_KEY) === true;
  } catch (e) {
    return false;
  }
}
function markPrivacyAuthorized() {
  try {
    uni.setStorageSync(STORAGE_KEY, true);
  } catch (e) {
    // noop
  }
}
function clearPrivacyAuthorized() {
  try {
    uni.removeStorageSync(STORAGE_KEY);
  } catch (e) {
    // noop
  }
}

/* ---------- 隐私弹窗组件总线 ---------- */
// App.vue 的 onNeedPrivacyAuthorization 触发时，优先把 resolve 交给当前页面挂载的
// PrivacyAuthPopup 组件（含真实 agree 按钮），由它完成授权；没有挂载时才退回 showModal。

var _popupVM = null;

/** PrivacyAuthPopup 组件 mounted 时调用，注册自身为当前可用弹窗 */
function registerPrivacyPopup(vm) {
  _popupVM = vm;
}

/** PrivacyAuthPopup 组件 beforeDestroy 时调用，解绑自身 */
function unregisterPrivacyPopup(vm) {
  if (_popupVM === vm) _popupVM = null;
}

/**
 * 由 App.vue 调用：尝试用已挂载的 PrivacyAuthPopup 弹窗处理 onNeedPrivacyAuthorization。
 * @returns {boolean} true=已交给弹窗组件处理，false=当前页面没有挂载 PrivacyAuthPopup
 */
function showPrivacyAuthPopup(_ref) {
  var resolve = _ref.resolve,
    content = _ref.content;
  if (_popupVM && typeof _popupVM.show === 'function') {
    _popupVM.show({
      resolve: resolve,
      content: content
    });
    return true;
  }
  return false;
}

/* ---------- 主动发起隐私授权 ---------- */

/**
 * 主动向微信发起隐私授权请求。
 *
 * - 微信小程序：调用 wx.requirePrivacyAuthorize；若用户尚未同意，会触发全局
 *   onNeedPrivacyAuthorization（由 App.vue 交给 PrivacyAuthPopup 弹窗处理）。
 *   用户在弹窗点击真实"同意"按钮后，微信记录授权，success 回调触发。
 * - 其他端：直接 resolve(true)。
 * - 已本地标记授权时跳过调用，避免登录时重复请求（微信侧已授权时也会立即 success）。
 *
 * @param {boolean} force 是否强制重新请求（忽略本地缓存）
 * @returns {Promise<boolean>} true=已获得授权，false=用户拒绝或调用失败
 */
function requirePrivacyAuthorize() {
  var force = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
  if (!force && isPrivacyAuthorized()) return Promise.resolve(true);
  return new Promise(function (resolve) {
    var api = null;
    if (typeof wx !== 'undefined' && typeof wx.requirePrivacyAuthorize === 'function') {
      api = wx.requirePrivacyAuthorize;
    }
    if (!api) {
      markPrivacyAuthorized();
      resolve(true);
      return;
    }
    api({
      success: function success() {
        markPrivacyAuthorized();
        resolve(true);
      },
      fail: function fail() {
        resolve(false);
      }
    });
  });
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 2)["default"], __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/wx.js */ 1)["default"]))

/***/ }),

/***/ 36:
/*!****************************************************************!*\
  !*** E:/project/yhlc-v1.0/agent-uniapp/utils/updateManager.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(uni) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.checkAppUpdate = checkAppUpdate;
/**
 * 小程序版本更新管理
 * @param {object} options
 * @param {boolean} options.silent true=自动检测不打扰用户；false=手动按钮需明确反馈
 *
 * 微信小程序版本更新由平台侧驱动，开发者只能被动监听：
 * - 用户每次启动小程序（冷启动+热启动），微信自动对比本地包与平台最新包，有新版则后台静默下载。
 * - 通过 uni.getUpdateManager() 注册三个回调：onCheckForUpdate / onUpdateReady / onUpdateFailed。
 * - 调用 applyUpdate() 重启小程序应用已下载的新版本包。
 * - 点击按钮不会触发新的检查，只能读最近一次启动的检测结果。
 *
 * 回调接口是覆盖语义（设置监听器，非追加），重复注册安全，每次调用都重新注册以保证 silent 策略最新。
 */
function checkAppUpdate() {
  var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var _options$silent = options.silent,
    silent = _options$silent === void 0 ? true : _options$silent;
  if (typeof uni === 'undefined' || typeof uni.canIUse !== 'function' || !uni.canIUse('getUpdateManager')) {
    if (!silent) {
      uni.showToast({
        title: '当前微信版本过低，请升级微信后重试',
        icon: 'none'
      });
    }
    return;
  }
  var updateManager;
  try {
    updateManager = uni.getUpdateManager();
  } catch (e) {
    if (!silent) {
      uni.showToast({
        title: '当前已是最新版本',
        icon: 'none'
      });
    }
    return;
  }
  if (!updateManager) {
    if (!silent) {
      uni.showToast({
        title: '当前已是最新版本',
        icon: 'none'
      });
    }
    return;
  }
  updateManager.onCheckForUpdate(function (res) {
    var hasUpdate = !!(res && res.hasUpdate);
    if (silent) return;
    if (hasUpdate) {
      uni.showToast({
        title: '正在后台下载新版本...',
        icon: 'none',
        duration: 2000
      });
    } else {
      uni.showToast({
        title: '当前已是最新版本',
        icon: 'none'
      });
    }
  });
  updateManager.onUpdateReady(function () {
    uni.showModal({
      title: '更新提示',
      content: '新版本已经准备好，是否重启应用？',
      confirmText: '立即重启',
      cancelText: '稍后再说',
      success: function success(r) {
        if (r && r.confirm) {
          try {
            updateManager.applyUpdate();
          } catch (e) {}
        }
      }
    });
  });
  updateManager.onUpdateFailed(function () {
    uni.showModal({
      title: '更新提示',
      content: '新版本下载失败，请稍后重试或清除缓存重新打开',
      showCancel: false,
      confirmText: '我知道了'
    });
  });
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 2)["default"]))

/***/ }),

/***/ 39:
/*!**********************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js ***!
  \**********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return normalizeComponent; });
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent (
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier, /* server only */
  shadowMode, /* vue-cli only */
  components, // fixed by xxxxxx auto components
  renderjs // fixed by xxxxxx renderjs
) {
  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // fixed by xxxxxx auto components
  if (components) {
    if (!options.components) {
      options.components = {}
    }
    var hasOwn = Object.prototype.hasOwnProperty
    for (var name in components) {
      if (hasOwn.call(components, name) && !hasOwn.call(options.components, name)) {
        options.components[name] = components[name]
      }
    }
  }
  // fixed by xxxxxx renderjs
  if (renderjs) {
    if(typeof renderjs.beforeCreate === 'function'){
			renderjs.beforeCreate = [renderjs.beforeCreate]
		}
    (renderjs.beforeCreate || (renderjs.beforeCreate = [])).unshift(function() {
      this[renderjs.__module] = this
    });
    (options.mixins || (options.mixins = [])).push(renderjs)
  }

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () { injectStyles.call(this, this.$root.$options.shadowRoot) }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functioal component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}


/***/ }),

/***/ 4:
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/interopRequireDefault.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}
module.exports = _interopRequireDefault, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ 40:
/*!********************************************************!*\
  !*** E:/project/yhlc-v1.0/agent-uniapp/store/index.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(uni) {

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ 4);
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _vue = _interopRequireDefault(__webpack_require__(/*! vue */ 25));
var _vuex = _interopRequireDefault(__webpack_require__(/*! vuex */ 34));
_vue.default.use(_vuex.default);
var store = new _vuex.default.Store({
  state: {
    userInfo: {},
    // 用户信息
    __key_member: 'usemall_userInfo',
    // 用户信息缓存keyName
    token: '',
    // token 令牌
    __key_token: 'uni_id_token' // token缓存keyName
  },

  mutations: {
    // 保存用户数据
    saveUserInfo: function saveUserInfo(state, data) {
      state.userInfo = Object.assign(state.userInfo, data);
      console.log('newUserInfo', state.userInfo);
      uni.setStorage({
        key: state.__key_member,
        data: state.userInfo
      });
    },
    // 登出
    logout: function logout(state, data) {
      state.hasLogin = false;
      state.userInfo = {};
      state.token = '';
      uni.removeStorageSync(state.__key_member);
      uni.removeStorageSync(state.__key_token);
    },
    // 缓存token数据
    sessionToken: function sessionToken(state, token) {
      state.token = token;
      uni.setStorage({
        key: state.__key_token,
        data: state.token
      });
      state.islogin = true;
    },
    // 从缓存中加载数据保存至store
    loadSession: function loadSession(state) {
      if (uni.getStorageSync(state.__key_member)) state.userInfo = uni.getStorageSync(state.__key_member);
      if (uni.getStorageSync(state.__key_token)) state.token = uni.getStorageSync(state.__key_token);
      if (state.token) state.islogin = true;
    }
  }
});
var _default = store;
exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 2)["default"]))

/***/ }),

/***/ 41:
/*!*********************************************************!*\
  !*** E:/project/yhlc-v1.0/agent-uniapp/config/index.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CURRENT_ENV = void 0;
exports.def = def;
// ========== 环境开关 ==========
// HBuilderX 运行时无法自动区分 dev/test，需要切到测试环境时把 CURRENT_ENV 改成 'test'
// 本地开发改回 'dev'；正式发布改 'prod'
var CURRENT_ENV = 'prod';
exports.CURRENT_ENV = CURRENT_ENV;
var dev = {
  // 本地开发: 直连本机后端 (kxmall-admin 端口 8585)
  // 注意: 微信开发者工具需勾选"不校验合法域名"才能访问 http://localhost
  baseUrl: 'http://localhost:8585',
  // 测试服 114.132.233.87 → dev 域名（打包上传测试机）
  // baseUrl: 'https://dev.dgyhlc.com/prod-api',
  // 已发布生产仍用: https://admin.dgyhlc.com/prod-api
  h5Appid: 'wx6a1192a1b0aa29aa'
  // debug: true
};

var test = {
  // 测试环境后端
  baseUrl: 'https://dev.dgyhlc.com/prod-api',
  h5Appid: 'wx6a1192a1b0aa29aa'
};
var prod = {
  // 生产环境
  baseUrl: 'https://admin.dgyhlc.com/prod-api',
  h5Appid: 'wx6a1192a1b0aa29aa'
};
var configs = {
  dev: dev,
  test: test,
  prod: prod
};
function def() {
  return configs[CURRENT_ENV] || dev;
}

/***/ }),

/***/ 42:
/*!*********************************************************!*\
  !*** E:/project/yhlc-v1.0/agent-uniapp/utils/routes.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.WAREHOUSE_TRANSFER_DETAIL = exports.WAREHOUSE_TRANSFER = exports.WAREHOUSE_STORE_ORDER_LIST = exports.WAREHOUSE_STORE_ORDER_DETAIL = exports.WAREHOUSE_PICKING_DETAIL = exports.WAREHOUSE_PICKING = exports.WAREHOUSE_INVENTORY = exports.WAREHOUSE_INBOUND = exports.SUPPLY_SUPPLIER_ORDER_PRINT = exports.SUPPLY_SUPPLIER_ORDER_DETAIL = exports.SUPPLY_SUPPLIER_ORDER = exports.SUPPLY_NO_DELIVERY = exports.SUPPLY_INDEX = exports.SUPPLY_GOODS_UPLOAD = exports.SUPPLY_GOODS_SEARCH = exports.SUPPLY_GOODS_REAPPLY_UPLOAD = exports.SUPPLY_GOODS_REAPPLY = exports.SUPPLY_GOODS = exports.SUPPLY_DELIVERY_LIST = exports.RIDER_WALLET_WITHDRAW_DETAIL = exports.RIDER_WALLET_WITHDRAW = exports.RIDER_WALLET_TRANSACTION_LIST = exports.RIDER_WALLET_DETAIL = exports.RIDER_TAB_URLS = exports.RIDER_PROFILE_EDIT = exports.RIDER_ORDER = exports.RIDER_INCOME = exports.PRODUCT_MANAGE = exports.PRINTER_TEST = exports.PRINTER_CONNECT = exports.PAGE_RIDER_USER = exports.PAGE_RIDER_TASK = exports.PAGE_LAUNCH = exports.MERCHANT_VERIFICATION = exports.MERCHANT_USER = exports.MERCHANT_TASK = exports.MERCHANT_TAB_URLS = exports.MERCHANT_ORDER = exports.MERCHANT_HOME = exports.MERCHANT_DASHBOARD = exports.MERCHANT_CITY_DASHBOARD = exports.MERCHANT_CHANGE_PASSWORD = exports.AUTH_REGISTER = exports.AUTH_PRIVACY = exports.AUTH_MERCHANT = exports.AUTH_LOGIN = exports.AFTER_SALE_SETTLEMENT = exports.AFTER_SALE_LESS_GOODS = exports.AFTER_SALE_EXCESS_GOODS = exports.AFTER_SALE_DIFF_REFUND = exports.AFTER_SALE_DAMAGE_AUDIT = exports.AFTER_SALE_DAMAGE = void 0;
/**
 * 小程序页面路径常量（主包 + 各业务分包）
 * 分包后跳转请使用绝对路径，避免相对路径跨分包失效
 */

/** 主包 */
var PAGE_LAUNCH = '/pages/login/index';
exports.PAGE_LAUNCH = PAGE_LAUNCH;
var PAGE_RIDER_TASK = '/sub-pages/rider/task/task';
exports.PAGE_RIDER_TASK = PAGE_RIDER_TASK;
var PAGE_RIDER_USER = '/sub-pages/rider/user/user';

/** 认证分包 sub-pages/auth */
exports.PAGE_RIDER_USER = PAGE_RIDER_USER;
var AUTH_LOGIN = '/sub-pages/auth/login';
exports.AUTH_LOGIN = AUTH_LOGIN;
var AUTH_MERCHANT = '/sub-pages/auth/merchant';
exports.AUTH_MERCHANT = AUTH_MERCHANT;
var AUTH_REGISTER = '/sub-pages/auth/register';
exports.AUTH_REGISTER = AUTH_REGISTER;
var AUTH_PRIVACY = '/sub-pages/auth/privacy-policy';

/** 骑手分包 sub-pages/rider */
exports.AUTH_PRIVACY = AUTH_PRIVACY;
var RIDER_ORDER = '/sub-pages/rider/order/order';
exports.RIDER_ORDER = RIDER_ORDER;
var RIDER_INCOME = '/sub-pages/rider/income/income';
exports.RIDER_INCOME = RIDER_INCOME;
var RIDER_WALLET_DETAIL = '/sub-pages/rider/wallet/detail';
exports.RIDER_WALLET_DETAIL = RIDER_WALLET_DETAIL;
var RIDER_WALLET_TRANSACTION_LIST = '/sub-pages/rider/wallet/transaction-list';
exports.RIDER_WALLET_TRANSACTION_LIST = RIDER_WALLET_TRANSACTION_LIST;
var RIDER_WALLET_WITHDRAW = '/sub-pages/rider/wallet/withdraw';
exports.RIDER_WALLET_WITHDRAW = RIDER_WALLET_WITHDRAW;
var RIDER_WALLET_WITHDRAW_DETAIL = '/sub-pages/rider/wallet/withdraw-detail';
exports.RIDER_WALLET_WITHDRAW_DETAIL = RIDER_WALLET_WITHDRAW_DETAIL;
var RIDER_PROFILE_EDIT = '/sub-pages/rider/profile/edit';

/** 商家工作台分包 sub-pages/merchant */
exports.RIDER_PROFILE_EDIT = RIDER_PROFILE_EDIT;
var MERCHANT_DASHBOARD = '/sub-pages/merchant/dashboard/index';
exports.MERCHANT_DASHBOARD = MERCHANT_DASHBOARD;
var MERCHANT_HOME = '/sub-pages/merchant/home/index';
exports.MERCHANT_HOME = MERCHANT_HOME;
var MERCHANT_USER = '/sub-pages/merchant/user/user1';
exports.MERCHANT_USER = MERCHANT_USER;
var MERCHANT_CITY_DASHBOARD = '/sub-pages/merchant/user/city-warehouse-dashboard';
exports.MERCHANT_CITY_DASHBOARD = MERCHANT_CITY_DASHBOARD;
var MERCHANT_TASK = '/sub-pages/merchant/task/task1';
exports.MERCHANT_TASK = MERCHANT_TASK;
var MERCHANT_ORDER = '/sub-pages/merchant/order/order1';
exports.MERCHANT_ORDER = MERCHANT_ORDER;
var MERCHANT_VERIFICATION = '/sub-pages/merchant/verification/index';
exports.MERCHANT_VERIFICATION = MERCHANT_VERIFICATION;
var MERCHANT_CHANGE_PASSWORD = '/sub-pages/merchant/user/change-password';

/** 供货分包 sub-pages/supply */
exports.MERCHANT_CHANGE_PASSWORD = MERCHANT_CHANGE_PASSWORD;
var SUPPLY_INDEX = '/sub-pages/supply/index';
exports.SUPPLY_INDEX = SUPPLY_INDEX;
var SUPPLY_GOODS_SEARCH = '/sub-pages/supply/goods-search';
exports.SUPPLY_GOODS_SEARCH = SUPPLY_GOODS_SEARCH;
var SUPPLY_GOODS_UPLOAD = '/sub-pages/supply/supplier-goods-upload';
exports.SUPPLY_GOODS_UPLOAD = SUPPLY_GOODS_UPLOAD;
var SUPPLY_GOODS_REAPPLY = '/sub-pages/supply/supplier-goods-reapply';
exports.SUPPLY_GOODS_REAPPLY = SUPPLY_GOODS_REAPPLY;
var SUPPLY_GOODS = '/sub-pages/supply/goods';
exports.SUPPLY_GOODS = SUPPLY_GOODS;
var SUPPLY_GOODS_REAPPLY_UPLOAD = '/sub-pages/supply/goods-reapply-upload';
exports.SUPPLY_GOODS_REAPPLY_UPLOAD = SUPPLY_GOODS_REAPPLY_UPLOAD;
var SUPPLY_DELIVERY_LIST = '/sub-pages/supply/delivery-list';
exports.SUPPLY_DELIVERY_LIST = SUPPLY_DELIVERY_LIST;
var SUPPLY_SUPPLIER_ORDER = '/sub-pages/supply/supplier-order';
exports.SUPPLY_SUPPLIER_ORDER = SUPPLY_SUPPLIER_ORDER;
var SUPPLY_SUPPLIER_ORDER_DETAIL = '/sub-pages/supply/supplier-order-detail';
exports.SUPPLY_SUPPLIER_ORDER_DETAIL = SUPPLY_SUPPLIER_ORDER_DETAIL;
var SUPPLY_SUPPLIER_ORDER_PRINT = '/sub-pages/supply/supplier-order-print-label';
exports.SUPPLY_SUPPLIER_ORDER_PRINT = SUPPLY_SUPPLIER_ORDER_PRINT;
var SUPPLY_NO_DELIVERY = '/sub-pages/supply/no-delivery';

/** 结算售后分包 sub-pages/after-sale */
exports.SUPPLY_NO_DELIVERY = SUPPLY_NO_DELIVERY;
var AFTER_SALE_LESS_GOODS = '/sub-pages/after-sale/less-goods';
exports.AFTER_SALE_LESS_GOODS = AFTER_SALE_LESS_GOODS;
var AFTER_SALE_EXCESS_GOODS = '/sub-pages/after-sale/excess-goods';
exports.AFTER_SALE_EXCESS_GOODS = AFTER_SALE_EXCESS_GOODS;
var AFTER_SALE_DAMAGE = '/sub-pages/after-sale/damage-report';
exports.AFTER_SALE_DAMAGE = AFTER_SALE_DAMAGE;
var AFTER_SALE_DAMAGE_AUDIT = '/sub-pages/after-sale/damage-report-supplier-audit';
exports.AFTER_SALE_DAMAGE_AUDIT = AFTER_SALE_DAMAGE_AUDIT;
var AFTER_SALE_DIFF_REFUND = '/sub-pages/after-sale/diff-refund';
exports.AFTER_SALE_DIFF_REFUND = AFTER_SALE_DIFF_REFUND;
var AFTER_SALE_SETTLEMENT = '/sub-pages/after-sale/settlement-order';

/** 仓储发货分包 sub-pages/warehouse */
exports.AFTER_SALE_SETTLEMENT = AFTER_SALE_SETTLEMENT;
var WAREHOUSE_INBOUND = '/sub-pages/warehouse/city-warehouse-inbound';
exports.WAREHOUSE_INBOUND = WAREHOUSE_INBOUND;
var WAREHOUSE_TRANSFER = '/sub-pages/warehouse/transfer-order';
exports.WAREHOUSE_TRANSFER = WAREHOUSE_TRANSFER;
var WAREHOUSE_TRANSFER_DETAIL = '/sub-pages/warehouse/transfer-order-detail';
exports.WAREHOUSE_TRANSFER_DETAIL = WAREHOUSE_TRANSFER_DETAIL;
var WAREHOUSE_PICKING = '/sub-pages/warehouse/picking-order';
exports.WAREHOUSE_PICKING = WAREHOUSE_PICKING;
var WAREHOUSE_PICKING_DETAIL = '/sub-pages/warehouse/picking-order-detail';
exports.WAREHOUSE_PICKING_DETAIL = WAREHOUSE_PICKING_DETAIL;
var WAREHOUSE_STORE_ORDER_LIST = '/sub-pages/warehouse/store-order-list';
exports.WAREHOUSE_STORE_ORDER_LIST = WAREHOUSE_STORE_ORDER_LIST;
var WAREHOUSE_STORE_ORDER_DETAIL = '/sub-pages/warehouse/store-order-detail';
exports.WAREHOUSE_STORE_ORDER_DETAIL = WAREHOUSE_STORE_ORDER_DETAIL;
var WAREHOUSE_INVENTORY = '/sub-pages/warehouse/inventory';

/** 商品管理分包 */
exports.WAREHOUSE_INVENTORY = WAREHOUSE_INVENTORY;
var PRODUCT_MANAGE = '/sub-pages/product/product1';

/** 打印分包 */
exports.PRODUCT_MANAGE = PRODUCT_MANAGE;
var PRINTER_CONNECT = '/sub-pages/printer/connect/index';
exports.PRINTER_CONNECT = PRINTER_CONNECT;
var PRINTER_TEST = '/sub-pages/printer/test/index';

/** 骑手 Tab 栏：首页 / 我的 */
exports.PRINTER_TEST = PRINTER_TEST;
var RIDER_TAB_URLS = [PAGE_RIDER_TASK, PAGE_RIDER_USER];

/** 商家 Tab 栏顺序：看板 / 作业 / 我的 */
exports.RIDER_TAB_URLS = RIDER_TAB_URLS;
var MERCHANT_TAB_URLS = [MERCHANT_DASHBOARD, MERCHANT_HOME, MERCHANT_USER];
exports.MERCHANT_TAB_URLS = MERCHANT_TAB_URLS;

/***/ }),

/***/ 43:
/*!*************************************************************!*\
  !*** E:/project/yhlc-v1.0/agent-uniapp/utils/logCapture.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(uni) {

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ 4);
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _typeof2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/typeof */ 13));
/**
 * 运行时日志抓包工具（B端 agent-uniapp）
 *
 * 用法：
 *   import logCapture from '@/utils/logCapture.js'
 *   logCapture.start()
 *   ... 用户操作 ...
 *   logCapture.stop()
 *   const { logs, startAt, endAt } = logCapture.snapshot()
 *
 * 仅在 start() 后才会拦截 console.* / uni.request；stop() 还原原函数。
 * 仅内存存储：上限 5000 条 / 5MB，超限按 FIFO 丢弃。
 */

var MAX_ENTRIES = 5000;
var MAX_BYTES = 5 * 1024 * 1024;
var RESP_PREVIEW_LIMIT = 500;

// === 持久化 ===
// 小程序 storage 单 key 上限 1MB,所以持久化时只存最后 PERSIST_MAX_BYTES 字节的尾部 logs;
// 5MB 内存窗口可视化,但跨页面/刷新/冷启动后只能保住最近的 ~800KB
var STORAGE_KEY = 'lc_state_v1';
var PERSIST_MAX_BYTES = 800 * 1024;
var PERSIST_THROTTLE_MS = 1500;
var _persistTimer = null;
var _persistDirty = false;
var state = {
  capturing: false,
  startAt: 0,
  endAt: 0,
  logs: [],
  approxBytes: 0,
  justRestored: false,
  originals: {
    log: null,
    info: null,
    warn: null,
    error: null,
    debug: null,
    uniRequest: null,
    navigateTo: null,
    redirectTo: null,
    switchTab: null,
    reLaunch: null,
    navigateBack: null,
    onError: null,
    onUnhandledRejection: null,
    errorHandlers: [],
    rejectionHandlers: []
  }
};
function safeStringify(value) {
  try {
    if (value === undefined) return 'undefined';
    if (value === null) return 'null';
    if (typeof value === 'string') return value;
    if (typeof value === 'number' || typeof value === 'boolean') return String(value);
    if (value instanceof Error) {
      return value.stack || value.name + ': ' + value.message;
    }
    var seen = new WeakSet();
    return JSON.stringify(value, function (k, v) {
      if ((0, _typeof2.default)(v) === 'object' && v !== null) {
        if (seen.has(v)) return '[Circular]';
        seen.add(v);
      }
      if (typeof v === 'function') return '[Function]';
      if (typeof v === 'undefined') return 'undefined';
      return v;
    });
  } catch (e) {
    try {
      return String(value);
    } catch (_) {
      return '[Unserializable]';
    }
  }
}
function pushEntry(entry) {
  var size = 0;
  try {
    size = JSON.stringify(entry).length;
  } catch (e) {
    size = 200;
  }
  state.logs.push(entry);
  state.approxBytes += size;
  while (state.logs.length > MAX_ENTRIES || state.approxBytes > MAX_BYTES) {
    var dropped = state.logs.shift();
    if (!dropped) break;
    try {
      state.approxBytes -= JSON.stringify(dropped).length;
    } catch (e) {
      state.approxBytes -= 200;
    }
    if (state.approxBytes < 0) state.approxBytes = 0;
  }
  schedulePersist();
}

// 节流写入 storage：实际持久化在 PERSIST_THROTTLE_MS 后触发
function schedulePersist() {
  _persistDirty = true;
  if (_persistTimer) return;
  _persistTimer = setTimeout(function () {
    _persistTimer = null;
    if (_persistDirty) {
      _persistDirty = false;
      try {
        persistNow();
      } catch (e) {}
    }
  }, PERSIST_THROTTLE_MS);
}
function persistNow() {
  if (typeof uni === 'undefined' || !uni || typeof uni.setStorageSync !== 'function') return;
  // 只保留尾部 PERSIST_MAX_BYTES 字节,避免 5MB 内存 logs 撑爆 storage 写入
  var tailLogs = state.logs;
  if (state.approxBytes > PERSIST_MAX_BYTES) {
    var acc = 0;
    var tail = [];
    for (var i = state.logs.length - 1; i >= 0; i--) {
      var s = 200;
      try {
        s = JSON.stringify(state.logs[i]).length;
      } catch (e) {}
      if (acc + s > PERSIST_MAX_BYTES) break;
      acc += s;
      tail.unshift(state.logs[i]);
    }
    tail.unshift({
      t: Date.now(),
      kind: 'meta',
      msg: '[logCapture] persisted-tail (older entries truncated)'
    });
    tailLogs = tail;
  }
  try {
    uni.setStorageSync(STORAGE_KEY, {
      v: 1,
      capturing: state.capturing,
      startAt: state.startAt,
      endAt: state.endAt,
      logs: tailLogs,
      approxBytes: state.approxBytes
    });
  } catch (e) {
    // storage 配额超限等错误吞掉,不影响主流程
  }
}
function clearPersist() {
  if (typeof uni === 'undefined' || !uni || typeof uni.removeStorageSync !== 'function') return;
  try {
    uni.removeStorageSync(STORAGE_KEY);
  } catch (e) {}
}
function recordConsole(level, args) {
  var parts = [];
  for (var i = 0; i < args.length; i++) {
    parts.push(safeStringify(args[i]));
  }
  pushEntry({
    t: Date.now(),
    kind: 'console',
    level: level,
    msg: parts.join(' ')
  });
}
function patchConsole() {
  state.originals.log = console.log;
  state.originals.info = console.info;
  state.originals.warn = console.warn;
  state.originals.error = console.error;
  state.originals.debug = console.debug;
  console.log = function () {
    if (state.capturing) {
      try {
        recordConsole('log', arguments);
      } catch (e) {}
    }
    return state.originals.log.apply(console, arguments);
  };
  console.info = function () {
    if (state.capturing) {
      try {
        recordConsole('info', arguments);
      } catch (e) {}
    }
    return state.originals.info.apply(console, arguments);
  };
  console.warn = function () {
    if (state.capturing) {
      try {
        recordConsole('warn', arguments);
      } catch (e) {}
    }
    return state.originals.warn.apply(console, arguments);
  };
  console.error = function () {
    if (state.capturing) {
      try {
        recordConsole('error', arguments);
      } catch (e) {}
    }
    return state.originals.error.apply(console, arguments);
  };
  if (typeof state.originals.debug === 'function') {
    console.debug = function () {
      if (state.capturing) {
        try {
          recordConsole('debug', arguments);
        } catch (e) {}
      }
      return state.originals.debug.apply(console, arguments);
    };
  }
}
function unpatchConsole() {
  if (state.originals.log) console.log = state.originals.log;
  if (state.originals.info) console.info = state.originals.info;
  if (state.originals.warn) console.warn = state.originals.warn;
  if (state.originals.error) console.error = state.originals.error;
  if (state.originals.debug) console.debug = state.originals.debug;
  state.originals.log = null;
  state.originals.info = null;
  state.originals.warn = null;
  state.originals.error = null;
  state.originals.debug = null;
}
function truncate(str, limit) {
  if (!str) return '';
  if (str.length <= limit) return str;
  return str.substring(0, limit) + '...[truncated]';
}
function summarizeResponseBody(data) {
  if (data === undefined || data === null) return '';
  if (typeof data === 'string') return truncate(data, RESP_PREVIEW_LIMIT);
  return truncate(safeStringify(data), RESP_PREVIEW_LIMIT);
}
function patchUniRequest() {
  if (typeof uni === 'undefined' || !uni || typeof uni.request !== 'function') {
    return;
  }
  state.originals.uniRequest = uni.request;
  var original = state.originals.uniRequest;
  uni.request = function (options) {
    if (!state.capturing || !options || (0, _typeof2.default)(options) !== 'object') {
      return original.call(uni, options);
    }
    var startTs = Date.now();
    var url = options.url;
    var method = (options.method || 'GET').toUpperCase();
    var dataPreview = '';
    try {
      dataPreview = truncate(safeStringify(options.data), RESP_PREVIEW_LIMIT);
    } catch (e) {
      dataPreview = '';
    }
    var userSuccess = options.success;
    var userFail = options.fail;
    var userComplete = options.complete;
    var wrapped = Object.assign({}, options, {
      success: function success(res) {
        try {
          pushEntry({
            t: startTs,
            kind: 'request',
            url: url,
            method: method,
            data: dataPreview,
            statusCode: res ? res.statusCode : null,
            costMs: Date.now() - startTs,
            ok: true,
            respPreview: res ? summarizeResponseBody(res.data) : ''
          });
        } catch (e) {}
        if (typeof userSuccess === 'function') return userSuccess(res);
      },
      fail: function fail(err) {
        try {
          pushEntry({
            t: startTs,
            kind: 'request',
            url: url,
            method: method,
            data: dataPreview,
            statusCode: null,
            costMs: Date.now() - startTs,
            ok: false,
            error: err && (err.errMsg || err.message) || safeStringify(err)
          });
        } catch (e) {}
        if (typeof userFail === 'function') return userFail(err);
      },
      complete: userComplete
    });
    return original.call(uni, wrapped);
  };
}
function unpatchUniRequest() {
  if (state.originals.uniRequest && typeof uni !== 'undefined') {
    uni.request = state.originals.uniRequest;
  }
  state.originals.uniRequest = null;
}

// === 路由跳转拦截：覆盖 navigateTo/redirectTo/switchTab/reLaunch/navigateBack ===
function patchRouting() {
  if (typeof uni === 'undefined' || !uni) return;
  var wrap = function wrap(name) {
    var original = uni[name];
    if (typeof original !== 'function') return;
    state.originals[name] = original;
    uni[name] = function (options) {
      if (state.capturing) {
        try {
          var dest = '';
          if (name === 'navigateBack') {
            var delta = options && options.delta ? options.delta : 1;
            dest = 'back delta=' + delta;
          } else {
            dest = options && options.url || '';
          }
          pushEntry({
            t: Date.now(),
            kind: 'route',
            api: name,
            to: dest
          });
        } catch (e) {}
      }
      return original.call(uni, options);
    };
  };
  wrap('navigateTo');
  wrap('redirectTo');
  wrap('switchTab');
  wrap('reLaunch');
  wrap('navigateBack');
}
function unpatchRouting() {
  if (typeof uni === 'undefined' || !uni) return;
  ['navigateTo', 'redirectTo', 'switchTab', 'reLaunch', 'navigateBack'].forEach(function (name) {
    if (state.originals[name]) {
      uni[name] = state.originals[name];
      state.originals[name] = null;
    }
  });
}

// === 全局 JS 错误 / Promise unhandled rejection ===
function patchErrors() {
  if (typeof uni === 'undefined' || !uni) return;
  if (typeof uni.onError === 'function') {
    var h = function h(err) {
      if (state.capturing) {
        try {
          var msg = err && (err.stack || err.message) ? err.stack || err.message : safeStringify(err);
          pushEntry({
            t: Date.now(),
            kind: 'error',
            msg: String(msg).substring(0, 2000)
          });
        } catch (e) {}
      }
    };
    state.originals.errorHandlers.push(h);
    try {
      uni.onError(h);
    } catch (e) {}
  }
  if (typeof uni.onUnhandledRejection === 'function') {
    var _h = function _h(res) {
      if (state.capturing) {
        try {
          var reason = res && res.reason;
          var msg = reason && (reason.stack || reason.message) ? reason.stack || reason.message : safeStringify(reason);
          pushEntry({
            t: Date.now(),
            kind: 'unhandled-rejection',
            msg: String(msg).substring(0, 2000)
          });
        } catch (e) {}
      }
    };
    state.originals.rejectionHandlers.push(_h);
    try {
      uni.onUnhandledRejection(_h);
    } catch (e) {}
  }
}
function unpatchErrors() {
  if (typeof uni === 'undefined' || !uni) return;
  if (typeof uni.offError === 'function') {
    state.originals.errorHandlers.forEach(function (h) {
      try {
        uni.offError(h);
      } catch (e) {}
    });
  }
  if (typeof uni.offUnhandledRejection === 'function') {
    state.originals.rejectionHandlers.forEach(function (h) {
      try {
        uni.offUnhandledRejection(h);
      } catch (e) {}
    });
  }
  state.originals.errorHandlers = [];
  state.originals.rejectionHandlers = [];
}

// === Vue mixin：包装组件 methods 中 on/handle/tap/click/submit 开头的 handler ===
// 由调用方在 main.js 里 Vue.mixin(logCapture.actionMixin()) 安装一次。
function actionMixin() {
  return {
    mounted: function mounted() {
      var _this = this;
      if (!this.$options || !this.$options.methods) return;
      var route = this.$mp && this.$mp.page && this.$mp.page.route || this.$route && this.$route.path || '';
      var compName = this.$options.name || this.$mp && this.$mp.page && this.$mp.page.route || 'Anon';
      var methods = this.$options.methods;
      Object.keys(methods).forEach(function (key) {
        if (!/^(on|handle|tap|click|submit)/i.test(key)) return;
        var fn = _this[key];
        if (typeof fn !== 'function' || fn.__lcWrapped) return;
        var wrapped = function wrapped() {
          try {
            if (state.capturing) {
              var argPreview = '';
              try {
                argPreview = truncate(safeStringify(Array.prototype.slice.call(arguments)), 200);
              } catch (e) {}
              pushEntry({
                t: Date.now(),
                kind: 'action',
                route: route,
                comp: compName,
                method: key,
                args: argPreview
              });
            }
          } catch (e) {}
          return fn.apply(this, arguments);
        };
        wrapped.__lcWrapped = true;
        _this[key] = wrapped;
      });
    }
  };
}
function start() {
  if (state.capturing) return;
  state.logs = [];
  state.approxBytes = 0;
  state.startAt = Date.now();
  state.endAt = 0;
  state.capturing = true;
  try {
    patchConsole();
    patchUniRequest();
    patchRouting();
    patchErrors();
  } catch (e) {
    state.capturing = false;
    throw e;
  }
  pushEntry({
    t: state.startAt,
    kind: 'meta',
    msg: '[logCapture] start'
  });
  try {
    persistNow();
  } catch (e) {}
}
function stop() {
  if (!state.capturing) return;
  state.endAt = Date.now();
  pushEntry({
    t: state.endAt,
    kind: 'meta',
    msg: '[logCapture] stop'
  });
  state.capturing = false;
  try {
    unpatchConsole();
  } catch (e) {}
  try {
    unpatchUniRequest();
  } catch (e) {}
  try {
    unpatchRouting();
  } catch (e) {}
  try {
    unpatchErrors();
  } catch (e) {}
  try {
    persistNow();
  } catch (e) {}
}

// 从 storage 恢复 state。在 main.js 启动时调用一次,确保 H5 刷新 / 小程序冷启动 /
// App 长时间后台后被系统回收再唤醒,能继续之前的抓包(logs 续上,hook 重新挂)
function restore() {
  if (typeof uni === 'undefined' || !uni || typeof uni.getStorageSync !== 'function') return false;
  var saved = null;
  try {
    saved = uni.getStorageSync(STORAGE_KEY);
  } catch (e) {
    return false;
  }
  if (!saved || (0, _typeof2.default)(saved) !== 'object') return false;
  state.startAt = saved.startAt || 0;
  state.endAt = saved.endAt || 0;
  state.logs = Array.isArray(saved.logs) ? saved.logs : [];
  state.approxBytes = typeof saved.approxBytes === 'number' ? saved.approxBytes : 0;
  if (saved.capturing) {
    state.capturing = true;
    try {
      patchConsole();
      patchUniRequest();
      patchRouting();
      patchErrors();
    } catch (e) {
      state.capturing = false;
    }
    state.justRestored = true;
    pushEntry({
      t: Date.now(),
      kind: 'meta',
      msg: '[logCapture] restored after refresh/cold-start'
    });
  }
  return true;
}
function wasRestored() {
  return state.justRestored;
}
function ackRestored() {
  state.justRestored = false;
}
function isCapturing() {
  return state.capturing;
}
function getLogs() {
  return state.logs.slice();
}
function size() {
  return state.logs.length;
}
function approxBytes() {
  return state.approxBytes;
}
function snapshot() {
  return {
    startAt: state.startAt,
    endAt: state.endAt || Date.now(),
    logs: state.logs.slice()
  };
}
function clear() {
  state.logs = [];
  state.approxBytes = 0;
  state.startAt = 0;
  state.endAt = 0;
  try {
    clearPersist();
  } catch (e) {}
}
var _default = {
  start: start,
  stop: stop,
  isCapturing: isCapturing,
  getLogs: getLogs,
  size: size,
  approxBytes: approxBytes,
  snapshot: snapshot,
  clear: clear,
  restore: restore,
  wasRestored: wasRestored,
  ackRestored: ackRestored,
  actionMixin: actionMixin
};
exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 2)["default"]))

/***/ }),

/***/ 5:
/*!**************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/slicedToArray.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var arrayWithHoles = __webpack_require__(/*! ./arrayWithHoles.js */ 6);
var iterableToArrayLimit = __webpack_require__(/*! ./iterableToArrayLimit.js */ 7);
var unsupportedIterableToArray = __webpack_require__(/*! ./unsupportedIterableToArray.js */ 8);
var nonIterableRest = __webpack_require__(/*! ./nonIterableRest.js */ 10);
function _slicedToArray(arr, i) {
  return arrayWithHoles(arr) || iterableToArrayLimit(arr, i) || unsupportedIterableToArray(arr, i) || nonIterableRest();
}
module.exports = _slicedToArray, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ 525:
/*!*********************************************************************************************************!*\
  !*** E:/project/yhlc-v1.0/agent-uniapp/uni_modules/uni-icons/components/uni-icons/uniicons_file_vue.js ***!
  \*********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.fontData = void 0;
var fontData = [{
  "font_class": "arrow-down",
  "unicode": "\uE6BE"
}, {
  "font_class": "arrow-left",
  "unicode": "\uE6BC"
}, {
  "font_class": "arrow-right",
  "unicode": "\uE6BB"
}, {
  "font_class": "arrow-up",
  "unicode": "\uE6BD"
}, {
  "font_class": "auth",
  "unicode": "\uE6AB"
}, {
  "font_class": "auth-filled",
  "unicode": "\uE6CC"
}, {
  "font_class": "back",
  "unicode": "\uE6B9"
}, {
  "font_class": "bars",
  "unicode": "\uE627"
}, {
  "font_class": "calendar",
  "unicode": "\uE6A0"
}, {
  "font_class": "calendar-filled",
  "unicode": "\uE6C0"
}, {
  "font_class": "camera",
  "unicode": "\uE65A"
}, {
  "font_class": "camera-filled",
  "unicode": "\uE658"
}, {
  "font_class": "cart",
  "unicode": "\uE631"
}, {
  "font_class": "cart-filled",
  "unicode": "\uE6D0"
}, {
  "font_class": "chat",
  "unicode": "\uE65D"
}, {
  "font_class": "chat-filled",
  "unicode": "\uE659"
}, {
  "font_class": "chatboxes",
  "unicode": "\uE696"
}, {
  "font_class": "chatboxes-filled",
  "unicode": "\uE692"
}, {
  "font_class": "chatbubble",
  "unicode": "\uE697"
}, {
  "font_class": "chatbubble-filled",
  "unicode": "\uE694"
}, {
  "font_class": "checkbox",
  "unicode": "\uE62B"
}, {
  "font_class": "checkbox-filled",
  "unicode": "\uE62C"
}, {
  "font_class": "checkmarkempty",
  "unicode": "\uE65C"
}, {
  "font_class": "circle",
  "unicode": "\uE65B"
}, {
  "font_class": "circle-filled",
  "unicode": "\uE65E"
}, {
  "font_class": "clear",
  "unicode": "\uE66D"
}, {
  "font_class": "close",
  "unicode": "\uE673"
}, {
  "font_class": "closeempty",
  "unicode": "\uE66C"
}, {
  "font_class": "cloud-download",
  "unicode": "\uE647"
}, {
  "font_class": "cloud-download-filled",
  "unicode": "\uE646"
}, {
  "font_class": "cloud-upload",
  "unicode": "\uE645"
}, {
  "font_class": "cloud-upload-filled",
  "unicode": "\uE648"
}, {
  "font_class": "color",
  "unicode": "\uE6CF"
}, {
  "font_class": "color-filled",
  "unicode": "\uE6C9"
}, {
  "font_class": "compose",
  "unicode": "\uE67F"
}, {
  "font_class": "contact",
  "unicode": "\uE693"
}, {
  "font_class": "contact-filled",
  "unicode": "\uE695"
}, {
  "font_class": "down",
  "unicode": "\uE6B8"
}, {
  "font_class": "bottom",
  "unicode": "\uE6B8"
}, {
  "font_class": "download",
  "unicode": "\uE68D"
}, {
  "font_class": "download-filled",
  "unicode": "\uE681"
}, {
  "font_class": "email",
  "unicode": "\uE69E"
}, {
  "font_class": "email-filled",
  "unicode": "\uE69A"
}, {
  "font_class": "eye",
  "unicode": "\uE651"
}, {
  "font_class": "eye-filled",
  "unicode": "\uE66A"
}, {
  "font_class": "eye-slash",
  "unicode": "\uE6B3"
}, {
  "font_class": "eye-slash-filled",
  "unicode": "\uE6B4"
}, {
  "font_class": "fire",
  "unicode": "\uE6A1"
}, {
  "font_class": "fire-filled",
  "unicode": "\uE6C5"
}, {
  "font_class": "flag",
  "unicode": "\uE65F"
}, {
  "font_class": "flag-filled",
  "unicode": "\uE660"
}, {
  "font_class": "folder-add",
  "unicode": "\uE6A9"
}, {
  "font_class": "folder-add-filled",
  "unicode": "\uE6C8"
}, {
  "font_class": "font",
  "unicode": "\uE6A3"
}, {
  "font_class": "forward",
  "unicode": "\uE6BA"
}, {
  "font_class": "gear",
  "unicode": "\uE664"
}, {
  "font_class": "gear-filled",
  "unicode": "\uE661"
}, {
  "font_class": "gift",
  "unicode": "\uE6A4"
}, {
  "font_class": "gift-filled",
  "unicode": "\uE6C4"
}, {
  "font_class": "hand-down",
  "unicode": "\uE63D"
}, {
  "font_class": "hand-down-filled",
  "unicode": "\uE63C"
}, {
  "font_class": "hand-up",
  "unicode": "\uE63F"
}, {
  "font_class": "hand-up-filled",
  "unicode": "\uE63E"
}, {
  "font_class": "headphones",
  "unicode": "\uE630"
}, {
  "font_class": "heart",
  "unicode": "\uE639"
}, {
  "font_class": "heart-filled",
  "unicode": "\uE641"
}, {
  "font_class": "help",
  "unicode": "\uE679"
}, {
  "font_class": "help-filled",
  "unicode": "\uE674"
}, {
  "font_class": "home",
  "unicode": "\uE662"
}, {
  "font_class": "home-filled",
  "unicode": "\uE663"
}, {
  "font_class": "image",
  "unicode": "\uE670"
}, {
  "font_class": "image-filled",
  "unicode": "\uE678"
}, {
  "font_class": "images",
  "unicode": "\uE650"
}, {
  "font_class": "images-filled",
  "unicode": "\uE64B"
}, {
  "font_class": "info",
  "unicode": "\uE669"
}, {
  "font_class": "info-filled",
  "unicode": "\uE649"
}, {
  "font_class": "left",
  "unicode": "\uE6B7"
}, {
  "font_class": "link",
  "unicode": "\uE6A5"
}, {
  "font_class": "list",
  "unicode": "\uE644"
}, {
  "font_class": "location",
  "unicode": "\uE6AE"
}, {
  "font_class": "location-filled",
  "unicode": "\uE6AF"
}, {
  "font_class": "locked",
  "unicode": "\uE66B"
}, {
  "font_class": "locked-filled",
  "unicode": "\uE668"
}, {
  "font_class": "loop",
  "unicode": "\uE633"
}, {
  "font_class": "mail-open",
  "unicode": "\uE643"
}, {
  "font_class": "mail-open-filled",
  "unicode": "\uE63A"
}, {
  "font_class": "map",
  "unicode": "\uE667"
}, {
  "font_class": "map-filled",
  "unicode": "\uE666"
}, {
  "font_class": "map-pin",
  "unicode": "\uE6AD"
}, {
  "font_class": "map-pin-ellipse",
  "unicode": "\uE6AC"
}, {
  "font_class": "medal",
  "unicode": "\uE6A2"
}, {
  "font_class": "medal-filled",
  "unicode": "\uE6C3"
}, {
  "font_class": "mic",
  "unicode": "\uE671"
}, {
  "font_class": "mic-filled",
  "unicode": "\uE677"
}, {
  "font_class": "micoff",
  "unicode": "\uE67E"
}, {
  "font_class": "micoff-filled",
  "unicode": "\uE6B0"
}, {
  "font_class": "minus",
  "unicode": "\uE66F"
}, {
  "font_class": "minus-filled",
  "unicode": "\uE67D"
}, {
  "font_class": "more",
  "unicode": "\uE64D"
}, {
  "font_class": "more-filled",
  "unicode": "\uE64E"
}, {
  "font_class": "navigate",
  "unicode": "\uE66E"
}, {
  "font_class": "navigate-filled",
  "unicode": "\uE67A"
}, {
  "font_class": "notification",
  "unicode": "\uE6A6"
}, {
  "font_class": "notification-filled",
  "unicode": "\uE6C1"
}, {
  "font_class": "paperclip",
  "unicode": "\uE652"
}, {
  "font_class": "paperplane",
  "unicode": "\uE672"
}, {
  "font_class": "paperplane-filled",
  "unicode": "\uE675"
}, {
  "font_class": "person",
  "unicode": "\uE699"
}, {
  "font_class": "person-filled",
  "unicode": "\uE69D"
}, {
  "font_class": "personadd",
  "unicode": "\uE69F"
}, {
  "font_class": "personadd-filled",
  "unicode": "\uE698"
}, {
  "font_class": "personadd-filled-copy",
  "unicode": "\uE6D1"
}, {
  "font_class": "phone",
  "unicode": "\uE69C"
}, {
  "font_class": "phone-filled",
  "unicode": "\uE69B"
}, {
  "font_class": "plus",
  "unicode": "\uE676"
}, {
  "font_class": "plus-filled",
  "unicode": "\uE6C7"
}, {
  "font_class": "plusempty",
  "unicode": "\uE67B"
}, {
  "font_class": "pulldown",
  "unicode": "\uE632"
}, {
  "font_class": "pyq",
  "unicode": "\uE682"
}, {
  "font_class": "qq",
  "unicode": "\uE680"
}, {
  "font_class": "redo",
  "unicode": "\uE64A"
}, {
  "font_class": "redo-filled",
  "unicode": "\uE655"
}, {
  "font_class": "refresh",
  "unicode": "\uE657"
}, {
  "font_class": "refresh-filled",
  "unicode": "\uE656"
}, {
  "font_class": "refreshempty",
  "unicode": "\uE6BF"
}, {
  "font_class": "reload",
  "unicode": "\uE6B2"
}, {
  "font_class": "right",
  "unicode": "\uE6B5"
}, {
  "font_class": "scan",
  "unicode": "\uE62A"
}, {
  "font_class": "search",
  "unicode": "\uE654"
}, {
  "font_class": "settings",
  "unicode": "\uE653"
}, {
  "font_class": "settings-filled",
  "unicode": "\uE6CE"
}, {
  "font_class": "shop",
  "unicode": "\uE62F"
}, {
  "font_class": "shop-filled",
  "unicode": "\uE6CD"
}, {
  "font_class": "smallcircle",
  "unicode": "\uE67C"
}, {
  "font_class": "smallcircle-filled",
  "unicode": "\uE665"
}, {
  "font_class": "sound",
  "unicode": "\uE684"
}, {
  "font_class": "sound-filled",
  "unicode": "\uE686"
}, {
  "font_class": "spinner-cycle",
  "unicode": "\uE68A"
}, {
  "font_class": "staff",
  "unicode": "\uE6A7"
}, {
  "font_class": "staff-filled",
  "unicode": "\uE6CB"
}, {
  "font_class": "star",
  "unicode": "\uE688"
}, {
  "font_class": "star-filled",
  "unicode": "\uE68F"
}, {
  "font_class": "starhalf",
  "unicode": "\uE683"
}, {
  "font_class": "trash",
  "unicode": "\uE687"
}, {
  "font_class": "trash-filled",
  "unicode": "\uE685"
}, {
  "font_class": "tune",
  "unicode": "\uE6AA"
}, {
  "font_class": "tune-filled",
  "unicode": "\uE6CA"
}, {
  "font_class": "undo",
  "unicode": "\uE64F"
}, {
  "font_class": "undo-filled",
  "unicode": "\uE64C"
}, {
  "font_class": "up",
  "unicode": "\uE6B6"
}, {
  "font_class": "top",
  "unicode": "\uE6B6"
}, {
  "font_class": "upload",
  "unicode": "\uE690"
}, {
  "font_class": "upload-filled",
  "unicode": "\uE68E"
}, {
  "font_class": "videocam",
  "unicode": "\uE68C"
}, {
  "font_class": "videocam-filled",
  "unicode": "\uE689"
}, {
  "font_class": "vip",
  "unicode": "\uE6A8"
}, {
  "font_class": "vip-filled",
  "unicode": "\uE6C6"
}, {
  "font_class": "wallet",
  "unicode": "\uE6B1"
}, {
  "font_class": "wallet-filled",
  "unicode": "\uE6C2"
}, {
  "font_class": "weibo",
  "unicode": "\uE68B"
}, {
  "font_class": "weixin",
  "unicode": "\uE691"
}];

// export const fontData = JSON.parse<IconsDataItem>(fontDataJson)
exports.fontData = fontData;

/***/ }),

/***/ 561:
/*!**********************************************************************************************************************!*\
  !*** E:/project/yhlc-v1.0/agent-uniapp/uni_modules/uni-datetime-picker/components/uni-datetime-picker/i18n/index.js ***!
  \**********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ 4);
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _en = _interopRequireDefault(__webpack_require__(/*! ./en.json */ 562));
var _zhHans = _interopRequireDefault(__webpack_require__(/*! ./zh-Hans.json */ 563));
var _zhHant = _interopRequireDefault(__webpack_require__(/*! ./zh-Hant.json */ 564));
var _default = {
  en: _en.default,
  'zh-Hans': _zhHans.default,
  'zh-Hant': _zhHant.default
};
exports.default = _default;

/***/ }),

/***/ 562:
/*!*********************************************************************************************************************!*\
  !*** E:/project/yhlc-v1.0/agent-uniapp/uni_modules/uni-datetime-picker/components/uni-datetime-picker/i18n/en.json ***!
  \*********************************************************************************************************************/
/*! exports provided: uni-datetime-picker.selectDate, uni-datetime-picker.selectTime, uni-datetime-picker.selectDateTime, uni-datetime-picker.startDate, uni-datetime-picker.endDate, uni-datetime-picker.startTime, uni-datetime-picker.endTime, uni-datetime-picker.ok, uni-datetime-picker.clear, uni-datetime-picker.cancel, uni-datetime-picker.year, uni-datetime-picker.month, uni-calender.MON, uni-calender.TUE, uni-calender.WED, uni-calender.THU, uni-calender.FRI, uni-calender.SAT, uni-calender.SUN, uni-calender.confirm, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"uni-datetime-picker.selectDate\":\"select date\",\"uni-datetime-picker.selectTime\":\"select time\",\"uni-datetime-picker.selectDateTime\":\"select date and time\",\"uni-datetime-picker.startDate\":\"start date\",\"uni-datetime-picker.endDate\":\"end date\",\"uni-datetime-picker.startTime\":\"start time\",\"uni-datetime-picker.endTime\":\"end time\",\"uni-datetime-picker.ok\":\"ok\",\"uni-datetime-picker.clear\":\"clear\",\"uni-datetime-picker.cancel\":\"cancel\",\"uni-datetime-picker.year\":\"-\",\"uni-datetime-picker.month\":\"\",\"uni-calender.MON\":\"MON\",\"uni-calender.TUE\":\"TUE\",\"uni-calender.WED\":\"WED\",\"uni-calender.THU\":\"THU\",\"uni-calender.FRI\":\"FRI\",\"uni-calender.SAT\":\"SAT\",\"uni-calender.SUN\":\"SUN\",\"uni-calender.confirm\":\"confirm\"}");

/***/ }),

/***/ 563:
/*!**************************************************************************************************************************!*\
  !*** E:/project/yhlc-v1.0/agent-uniapp/uni_modules/uni-datetime-picker/components/uni-datetime-picker/i18n/zh-Hans.json ***!
  \**************************************************************************************************************************/
/*! exports provided: uni-datetime-picker.selectDate, uni-datetime-picker.selectTime, uni-datetime-picker.selectDateTime, uni-datetime-picker.startDate, uni-datetime-picker.endDate, uni-datetime-picker.startTime, uni-datetime-picker.endTime, uni-datetime-picker.ok, uni-datetime-picker.clear, uni-datetime-picker.cancel, uni-datetime-picker.year, uni-datetime-picker.month, uni-calender.SUN, uni-calender.MON, uni-calender.TUE, uni-calender.WED, uni-calender.THU, uni-calender.FRI, uni-calender.SAT, uni-calender.confirm, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"uni-datetime-picker.selectDate\":\"选择日期\",\"uni-datetime-picker.selectTime\":\"选择时间\",\"uni-datetime-picker.selectDateTime\":\"选择日期时间\",\"uni-datetime-picker.startDate\":\"开始日期\",\"uni-datetime-picker.endDate\":\"结束日期\",\"uni-datetime-picker.startTime\":\"开始时间\",\"uni-datetime-picker.endTime\":\"结束时间\",\"uni-datetime-picker.ok\":\"确定\",\"uni-datetime-picker.clear\":\"清除\",\"uni-datetime-picker.cancel\":\"取消\",\"uni-datetime-picker.year\":\"年\",\"uni-datetime-picker.month\":\"月\",\"uni-calender.SUN\":\"日\",\"uni-calender.MON\":\"一\",\"uni-calender.TUE\":\"二\",\"uni-calender.WED\":\"三\",\"uni-calender.THU\":\"四\",\"uni-calender.FRI\":\"五\",\"uni-calender.SAT\":\"六\",\"uni-calender.confirm\":\"确认\"}");

/***/ }),

/***/ 564:
/*!**************************************************************************************************************************!*\
  !*** E:/project/yhlc-v1.0/agent-uniapp/uni_modules/uni-datetime-picker/components/uni-datetime-picker/i18n/zh-Hant.json ***!
  \**************************************************************************************************************************/
/*! exports provided: uni-datetime-picker.selectDate, uni-datetime-picker.selectTime, uni-datetime-picker.selectDateTime, uni-datetime-picker.startDate, uni-datetime-picker.endDate, uni-datetime-picker.startTime, uni-datetime-picker.endTime, uni-datetime-picker.ok, uni-datetime-picker.clear, uni-datetime-picker.cancel, uni-datetime-picker.year, uni-datetime-picker.month, uni-calender.SUN, uni-calender.MON, uni-calender.TUE, uni-calender.WED, uni-calender.THU, uni-calender.FRI, uni-calender.SAT, uni-calender.confirm, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"uni-datetime-picker.selectDate\":\"選擇日期\",\"uni-datetime-picker.selectTime\":\"選擇時間\",\"uni-datetime-picker.selectDateTime\":\"選擇日期時間\",\"uni-datetime-picker.startDate\":\"開始日期\",\"uni-datetime-picker.endDate\":\"結束日期\",\"uni-datetime-picker.startTime\":\"開始时间\",\"uni-datetime-picker.endTime\":\"結束时间\",\"uni-datetime-picker.ok\":\"確定\",\"uni-datetime-picker.clear\":\"清除\",\"uni-datetime-picker.cancel\":\"取消\",\"uni-datetime-picker.year\":\"年\",\"uni-datetime-picker.month\":\"月\",\"uni-calender.SUN\":\"日\",\"uni-calender.MON\":\"一\",\"uni-calender.TUE\":\"二\",\"uni-calender.WED\":\"三\",\"uni-calender.THU\":\"四\",\"uni-calender.FRI\":\"五\",\"uni-calender.SAT\":\"六\",\"uni-calender.confirm\":\"確認\"}");

/***/ }),

/***/ 565:
/*!****************************************************************************************************************!*\
  !*** E:/project/yhlc-v1.0/agent-uniapp/uni_modules/uni-datetime-picker/components/uni-datetime-picker/util.js ***!
  \****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ 4);
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Calendar = void 0;
exports.addZero = addZero;
exports.checkDate = checkDate;
exports.dateCompare = dateCompare;
exports.fixIosDateFormat = fixIosDateFormat;
exports.getDate = getDate;
exports.getDateTime = getDateTime;
exports.getDefaultSecond = getDefaultSecond;
exports.getTime = getTime;
var _toConsumableArray2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/toConsumableArray */ 18));
var _classCallCheck2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ 23));
var _createClass2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/createClass */ 24));
var Calendar = /*#__PURE__*/function () {
  function Calendar() {
    var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
      selected = _ref.selected,
      startDate = _ref.startDate,
      endDate = _ref.endDate,
      range = _ref.range;
    (0, _classCallCheck2.default)(this, Calendar);
    // 当前日期
    this.date = this.getDateObj(new Date()); // 当前初入日期
    // 打点信息
    this.selected = selected || [];
    // 起始时间
    this.startDate = startDate;
    // 终止时间
    this.endDate = endDate;
    // 是否范围选择
    this.range = range;
    // 多选状态
    this.cleanMultipleStatus();
    // 每周日期
    this.weeks = {};
    this.lastHover = false;
  }
  /**
   * 设置日期
   * @param {Object} date
   */
  (0, _createClass2.default)(Calendar, [{
    key: "setDate",
    value: function setDate(date) {
      var selectDate = this.getDateObj(date);
      this.getWeeks(selectDate.fullDate);
    }

    /**
     * 清理多选状态
     */
  }, {
    key: "cleanMultipleStatus",
    value: function cleanMultipleStatus() {
      this.multipleStatus = {
        before: '',
        after: '',
        data: []
      };
    }
  }, {
    key: "setStartDate",
    value: function setStartDate(startDate) {
      this.startDate = startDate;
    }
  }, {
    key: "setEndDate",
    value: function setEndDate(endDate) {
      this.endDate = endDate;
    }
  }, {
    key: "getPreMonthObj",
    value: function getPreMonthObj(date) {
      date = fixIosDateFormat(date);
      date = new Date(date);
      var oldMonth = date.getMonth();
      date.setMonth(oldMonth - 1);
      var newMonth = date.getMonth();
      if (oldMonth !== 0 && newMonth - oldMonth === 0) {
        date.setMonth(newMonth - 1);
      }
      return this.getDateObj(date);
    }
  }, {
    key: "getNextMonthObj",
    value: function getNextMonthObj(date) {
      date = fixIosDateFormat(date);
      date = new Date(date);
      var oldMonth = date.getMonth();
      date.setMonth(oldMonth + 1);
      var newMonth = date.getMonth();
      if (newMonth - oldMonth > 1) {
        date.setMonth(newMonth - 1);
      }
      return this.getDateObj(date);
    }

    /**
     * 获取指定格式Date对象
     */
  }, {
    key: "getDateObj",
    value: function getDateObj(date) {
      date = fixIosDateFormat(date);
      date = new Date(date);
      return {
        fullDate: getDate(date),
        year: date.getFullYear(),
        month: addZero(date.getMonth() + 1),
        date: addZero(date.getDate()),
        day: date.getDay()
      };
    }

    /**
     * 获取上一个月日期集合
     */
  }, {
    key: "getPreMonthDays",
    value: function getPreMonthDays(amount, dateObj) {
      var result = [];
      for (var i = amount - 1; i >= 0; i--) {
        var month = dateObj.month - 1;
        result.push({
          date: new Date(dateObj.year, month, -i).getDate(),
          month: month,
          disable: true
        });
      }
      return result;
    }
    /**
     * 获取本月日期集合
     */
  }, {
    key: "getCurrentMonthDays",
    value: function getCurrentMonthDays(amount, dateObj) {
      var _this = this;
      var result = [];
      var fullDate = this.date.fullDate;
      var _loop = function _loop(i) {
        var currentDate = "".concat(dateObj.year, "-").concat(dateObj.month, "-").concat(addZero(i));
        var isToday = fullDate === currentDate;
        // 获取打点信息
        var info = _this.selected && _this.selected.find(function (item) {
          if (_this.dateEqual(currentDate, item.date)) {
            return item;
          }
        });

        // 日期禁用
        var disableBefore = true;
        var disableAfter = true;
        if (_this.startDate) {
          disableBefore = dateCompare(_this.startDate, currentDate);
        }
        if (_this.endDate) {
          disableAfter = dateCompare(currentDate, _this.endDate);
        }
        var multiples = _this.multipleStatus.data;
        var multiplesStatus = -1;
        if (_this.range && multiples) {
          multiplesStatus = multiples.findIndex(function (item) {
            return _this.dateEqual(item, currentDate);
          });
        }
        var checked = multiplesStatus !== -1;
        result.push({
          fullDate: currentDate,
          year: dateObj.year,
          date: i,
          multiple: _this.range ? checked : false,
          beforeMultiple: _this.isLogicBefore(currentDate, _this.multipleStatus.before, _this.multipleStatus.after),
          afterMultiple: _this.isLogicAfter(currentDate, _this.multipleStatus.before, _this.multipleStatus.after),
          month: dateObj.month,
          disable: _this.startDate && !dateCompare(_this.startDate, currentDate) || _this.endDate && !dateCompare(currentDate, _this.endDate),
          isToday: isToday,
          userChecked: false,
          extraInfo: info
        });
      };
      for (var i = 1; i <= amount; i++) {
        _loop(i);
      }
      return result;
    }
    /**
     * 获取下一个月日期集合
     */
  }, {
    key: "_getNextMonthDays",
    value: function _getNextMonthDays(amount, dateObj) {
      var result = [];
      var month = dateObj.month + 1;
      for (var i = 1; i <= amount; i++) {
        result.push({
          date: i,
          month: month,
          disable: true
        });
      }
      return result;
    }

    /**
     * 获取当前日期详情
     * @param {Object} date
     */
  }, {
    key: "getInfo",
    value: function getInfo(date) {
      var _this2 = this;
      if (!date) {
        date = new Date();
      }
      var res = this.calendar.find(function (item) {
        return item.fullDate === _this2.getDateObj(date).fullDate;
      });
      return res ? res : this.getDateObj(date);
    }

    /**
     * 比较时间是否相等
     */
  }, {
    key: "dateEqual",
    value: function dateEqual(before, after) {
      before = new Date(fixIosDateFormat(before));
      after = new Date(fixIosDateFormat(after));
      return before.valueOf() === after.valueOf();
    }

    /**
     *  比较真实起始日期
     */
  }, {
    key: "isLogicBefore",
    value: function isLogicBefore(currentDate, before, after) {
      var logicBefore = before;
      if (before && after) {
        logicBefore = dateCompare(before, after) ? before : after;
      }
      return this.dateEqual(logicBefore, currentDate);
    }
  }, {
    key: "isLogicAfter",
    value: function isLogicAfter(currentDate, before, after) {
      var logicAfter = after;
      if (before && after) {
        logicAfter = dateCompare(before, after) ? after : before;
      }
      return this.dateEqual(logicAfter, currentDate);
    }

    /**
     * 获取日期范围内所有日期
     * @param {Object} begin
     * @param {Object} end
     */
  }, {
    key: "geDateAll",
    value: function geDateAll(begin, end) {
      var arr = [];
      var ab = begin.split('-');
      var ae = end.split('-');
      var db = new Date();
      db.setFullYear(ab[0], ab[1] - 1, ab[2]);
      var de = new Date();
      de.setFullYear(ae[0], ae[1] - 1, ae[2]);
      var unixDb = db.getTime() - 24 * 60 * 60 * 1000;
      var unixDe = de.getTime() - 24 * 60 * 60 * 1000;
      for (var k = unixDb; k <= unixDe;) {
        k = k + 24 * 60 * 60 * 1000;
        arr.push(this.getDateObj(new Date(parseInt(k))).fullDate);
      }
      return arr;
    }

    /**
     *  获取多选状态
     */
  }, {
    key: "setMultiple",
    value: function setMultiple(fullDate) {
      if (!this.range) return;
      var _this$multipleStatus = this.multipleStatus,
        before = _this$multipleStatus.before,
        after = _this$multipleStatus.after;
      if (before && after) {
        if (!this.lastHover) {
          this.lastHover = true;
          return;
        }
        this.multipleStatus.before = fullDate;
        this.multipleStatus.after = '';
        this.multipleStatus.data = [];
        this.multipleStatus.fulldate = '';
        this.lastHover = false;
      } else {
        if (!before) {
          this.multipleStatus.before = fullDate;
          this.multipleStatus.after = undefined;
          this.lastHover = false;
        } else {
          this.multipleStatus.after = fullDate;
          if (dateCompare(this.multipleStatus.before, this.multipleStatus.after)) {
            this.multipleStatus.data = this.geDateAll(this.multipleStatus.before, this.multipleStatus.after);
          } else {
            this.multipleStatus.data = this.geDateAll(this.multipleStatus.after, this.multipleStatus.before);
          }
          this.lastHover = true;
        }
      }
      this.getWeeks(fullDate);
    }

    /**
     *  鼠标 hover 更新多选状态
     */
  }, {
    key: "setHoverMultiple",
    value: function setHoverMultiple(fullDate) {
      //抖音小程序点击会触发hover事件，需要避免一下

      if (!this.range || this.lastHover) return;
      var before = this.multipleStatus.before;
      if (!before) {
        this.multipleStatus.before = fullDate;
      } else {
        this.multipleStatus.after = fullDate;
        if (dateCompare(this.multipleStatus.before, this.multipleStatus.after)) {
          this.multipleStatus.data = this.geDateAll(this.multipleStatus.before, this.multipleStatus.after);
        } else {
          this.multipleStatus.data = this.geDateAll(this.multipleStatus.after, this.multipleStatus.before);
        }
      }
      this.getWeeks(fullDate);
    }

    /**
     * 更新默认值多选状态
     */
  }, {
    key: "setDefaultMultiple",
    value: function setDefaultMultiple(before, after) {
      this.multipleStatus.before = before;
      this.multipleStatus.after = after;
      if (before && after) {
        if (dateCompare(before, after)) {
          this.multipleStatus.data = this.geDateAll(before, after);
          this.getWeeks(after);
        } else {
          this.multipleStatus.data = this.geDateAll(after, before);
          this.getWeeks(before);
        }
      }
    }

    /**
     * 获取每周数据
     * @param {Object} dateData
     */
  }, {
    key: "getWeeks",
    value: function getWeeks(dateData) {
      var _this$getDateObj = this.getDateObj(dateData),
        year = _this$getDateObj.year,
        month = _this$getDateObj.month;
      var preMonthDayAmount = new Date(year, month - 1, 1).getDay();
      var preMonthDays = this.getPreMonthDays(preMonthDayAmount, this.getDateObj(dateData));
      var currentMonthDayAmount = new Date(year, month, 0).getDate();
      var currentMonthDays = this.getCurrentMonthDays(currentMonthDayAmount, this.getDateObj(dateData));
      var nextMonthDayAmount = 42 - preMonthDayAmount - currentMonthDayAmount;
      var nextMonthDays = this._getNextMonthDays(nextMonthDayAmount, this.getDateObj(dateData));
      var calendarDays = [].concat((0, _toConsumableArray2.default)(preMonthDays), (0, _toConsumableArray2.default)(currentMonthDays), (0, _toConsumableArray2.default)(nextMonthDays));
      var weeks = new Array(6);
      for (var i = 0; i < calendarDays.length; i++) {
        var index = Math.floor(i / 7);
        if (!weeks[index]) {
          weeks[index] = new Array(7);
        }
        weeks[index][i % 7] = calendarDays[i];
      }
      this.calendar = calendarDays;
      this.weeks = weeks;
    }
  }]);
  return Calendar;
}();
exports.Calendar = Calendar;
function getDateTime(date, hideSecond) {
  return "".concat(getDate(date), " ").concat(getTime(date, hideSecond));
}
function getDate(date) {
  date = fixIosDateFormat(date);
  date = new Date(date);
  var year = date.getFullYear();
  var month = date.getMonth() + 1;
  var day = date.getDate();
  return "".concat(year, "-").concat(addZero(month), "-").concat(addZero(day));
}
function getTime(date, hideSecond) {
  date = fixIosDateFormat(date);
  date = new Date(date);
  var hour = date.getHours();
  var minute = date.getMinutes();
  var second = date.getSeconds();
  return hideSecond ? "".concat(addZero(hour), ":").concat(addZero(minute)) : "".concat(addZero(hour), ":").concat(addZero(minute), ":").concat(addZero(second));
}
function addZero(num) {
  if (num < 10) {
    num = "0".concat(num);
  }
  return num;
}
function getDefaultSecond(hideSecond) {
  return hideSecond ? '00:00' : '00:00:00';
}
function dateCompare(startDate, endDate) {
  startDate = new Date(fixIosDateFormat(typeof startDate === 'string' ? startDate.trim() : startDate));
  endDate = new Date(fixIosDateFormat(typeof endDate === 'string' ? endDate.trim() : endDate));
  return startDate <= endDate;
}
function checkDate(date) {
  var dateReg = /((19|20)\d{2})(-|\/)\d{1,2}(-|\/)\d{1,2}/g;
  return date.match(dateReg);
}
//ios低版本15及以下，无法匹配 没有 ’秒‘ 时的情况，所以需要在末尾 秒 加上 问号
var dateTimeReg = /^\d{4}-(0?[1-9]|1[012])-(0?[1-9]|[12][0-9]|3[01])( [0-5]?[0-9]:[0-5]?[0-9](:[0-5]?[0-9])?)?$/;
function fixIosDateFormat(value) {
  if (typeof value === 'string' && dateTimeReg.test(value)) {
    value = value.replace(/-/g, '/');
  }
  return value;
}

/***/ }),

/***/ 58:
/*!************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/@babel/runtime/regenerator/index.js ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// TODO(Babel 8): Remove this file.

var runtime = __webpack_require__(/*! @babel/runtime/helpers/regeneratorRuntime */ 59)();
module.exports = runtime;

/***/ }),

/***/ 580:
/*!************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/uni-cloud/dist/index.js ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global, uni, wx) {

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ 4);
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.uniCloud = exports.default = exports.UniCloudError = void 0;
var _regenerator = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/regenerator */ 58));
var _assertThisInitialized2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/assertThisInitialized */ 581));
var _slicedToArray2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ 5));
var _typeof2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/typeof */ 13));
var _toConsumableArray2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/toConsumableArray */ 18));
var _asyncToGenerator2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ 60));
var _defineProperty2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/defineProperty */ 11));
var _inherits2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/inherits */ 582));
var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ 583));
var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ 584));
var _wrapNativeSuper2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/wrapNativeSuper */ 585));
var _classCallCheck2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ 23));
var _createClass2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/createClass */ 24));
var _pages = _interopRequireDefault(__webpack_require__(/*! @/pages.json */ 587));
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e35) { throw _e35; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e36) { didErr = true; err = _e36; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0, _defineProperty2.default)(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2.default)(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2.default)(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2.default)(this, result); }; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
"undefined" != typeof globalThis ? globalThis : "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self && self;
function t(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
function n(e, t, n) {
  return e(n = {
    path: t,
    exports: {},
    require: function require(e, t) {
      return function () {
        throw new Error("Dynamic requires are not currently supported by @rollup/plugin-commonjs");
      }(null == t && n.path);
    }
  }, n.exports), n.exports;
}
var s = n(function (e, t) {
    var n;
    e.exports = (n = n || function (e, t) {
      var n = Object.create || function () {
          function e() {}
          return function (t) {
            var n;
            return e.prototype = t, n = new e(), e.prototype = null, n;
          };
        }(),
        s = {},
        r = s.lib = {},
        i = r.Base = {
          extend: function extend(e) {
            var t = n(this);
            return e && t.mixIn(e), t.hasOwnProperty("init") && this.init !== t.init || (t.init = function () {
              t.$super.init.apply(this, arguments);
            }), t.init.prototype = t, t.$super = this, t;
          },
          create: function create() {
            var e = this.extend();
            return e.init.apply(e, arguments), e;
          },
          init: function init() {},
          mixIn: function mixIn(e) {
            for (var t in e) {
              e.hasOwnProperty(t) && (this[t] = e[t]);
            }
            e.hasOwnProperty("toString") && (this.toString = e.toString);
          },
          clone: function clone() {
            return this.init.prototype.extend(this);
          }
        },
        o = r.WordArray = i.extend({
          init: function init(e, n) {
            e = this.words = e || [], this.sigBytes = n != t ? n : 4 * e.length;
          },
          toString: function toString(e) {
            return (e || c).stringify(this);
          },
          concat: function concat(e) {
            var t = this.words,
              n = e.words,
              s = this.sigBytes,
              r = e.sigBytes;
            if (this.clamp(), s % 4) for (var i = 0; i < r; i++) {
              var o = n[i >>> 2] >>> 24 - i % 4 * 8 & 255;
              t[s + i >>> 2] |= o << 24 - (s + i) % 4 * 8;
            } else for (i = 0; i < r; i += 4) {
              t[s + i >>> 2] = n[i >>> 2];
            }
            return this.sigBytes += r, this;
          },
          clamp: function clamp() {
            var t = this.words,
              n = this.sigBytes;
            t[n >>> 2] &= 4294967295 << 32 - n % 4 * 8, t.length = e.ceil(n / 4);
          },
          clone: function clone() {
            var e = i.clone.call(this);
            return e.words = this.words.slice(0), e;
          },
          random: function random(t) {
            for (var n, s = [], r = function r(t) {
                t = t;
                var n = 987654321,
                  s = 4294967295;
                return function () {
                  var r = ((n = 36969 * (65535 & n) + (n >> 16) & s) << 16) + (t = 18e3 * (65535 & t) + (t >> 16) & s) & s;
                  return r /= 4294967296, (r += .5) * (e.random() > .5 ? 1 : -1);
                };
              }, i = 0; i < t; i += 4) {
              var a = r(4294967296 * (n || e.random()));
              n = 987654071 * a(), s.push(4294967296 * a() | 0);
            }
            return new o.init(s, t);
          }
        }),
        a = s.enc = {},
        c = a.Hex = {
          stringify: function stringify(e) {
            for (var t = e.words, n = e.sigBytes, s = [], r = 0; r < n; r++) {
              var i = t[r >>> 2] >>> 24 - r % 4 * 8 & 255;
              s.push((i >>> 4).toString(16)), s.push((15 & i).toString(16));
            }
            return s.join("");
          },
          parse: function parse(e) {
            for (var t = e.length, n = [], s = 0; s < t; s += 2) {
              n[s >>> 3] |= parseInt(e.substr(s, 2), 16) << 24 - s % 8 * 4;
            }
            return new o.init(n, t / 2);
          }
        },
        u = a.Latin1 = {
          stringify: function stringify(e) {
            for (var t = e.words, n = e.sigBytes, s = [], r = 0; r < n; r++) {
              var i = t[r >>> 2] >>> 24 - r % 4 * 8 & 255;
              s.push(String.fromCharCode(i));
            }
            return s.join("");
          },
          parse: function parse(e) {
            for (var t = e.length, n = [], s = 0; s < t; s++) {
              n[s >>> 2] |= (255 & e.charCodeAt(s)) << 24 - s % 4 * 8;
            }
            return new o.init(n, t);
          }
        },
        l = a.Utf8 = {
          stringify: function stringify(e) {
            try {
              return decodeURIComponent(escape(u.stringify(e)));
            } catch (e) {
              throw new Error("Malformed UTF-8 data");
            }
          },
          parse: function parse(e) {
            return u.parse(unescape(encodeURIComponent(e)));
          }
        },
        h = r.BufferedBlockAlgorithm = i.extend({
          reset: function reset() {
            this._data = new o.init(), this._nDataBytes = 0;
          },
          _append: function _append(e) {
            "string" == typeof e && (e = l.parse(e)), this._data.concat(e), this._nDataBytes += e.sigBytes;
          },
          _process: function _process(t) {
            var n = this._data,
              s = n.words,
              r = n.sigBytes,
              i = this.blockSize,
              a = r / (4 * i),
              c = (a = t ? e.ceil(a) : e.max((0 | a) - this._minBufferSize, 0)) * i,
              u = e.min(4 * c, r);
            if (c) {
              for (var l = 0; l < c; l += i) {
                this._doProcessBlock(s, l);
              }
              var h = s.splice(0, c);
              n.sigBytes -= u;
            }
            return new o.init(h, u);
          },
          clone: function clone() {
            var e = i.clone.call(this);
            return e._data = this._data.clone(), e;
          },
          _minBufferSize: 0
        });
      r.Hasher = h.extend({
        cfg: i.extend(),
        init: function init(e) {
          this.cfg = this.cfg.extend(e), this.reset();
        },
        reset: function reset() {
          h.reset.call(this), this._doReset();
        },
        update: function update(e) {
          return this._append(e), this._process(), this;
        },
        finalize: function finalize(e) {
          return e && this._append(e), this._doFinalize();
        },
        blockSize: 16,
        _createHelper: function _createHelper(e) {
          return function (t, n) {
            return new e.init(n).finalize(t);
          };
        },
        _createHmacHelper: function _createHmacHelper(e) {
          return function (t, n) {
            return new d.HMAC.init(e, n).finalize(t);
          };
        }
      });
      var d = s.algo = {};
      return s;
    }(Math), n);
  }),
  r = s,
  i = (n(function (e, t) {
    var n;
    e.exports = (n = r, function (e) {
      var t = n,
        s = t.lib,
        r = s.WordArray,
        i = s.Hasher,
        o = t.algo,
        a = [];
      !function () {
        for (var t = 0; t < 64; t++) {
          a[t] = 4294967296 * e.abs(e.sin(t + 1)) | 0;
        }
      }();
      var c = o.MD5 = i.extend({
        _doReset: function _doReset() {
          this._hash = new r.init([1732584193, 4023233417, 2562383102, 271733878]);
        },
        _doProcessBlock: function _doProcessBlock(e, t) {
          for (var n = 0; n < 16; n++) {
            var s = t + n,
              r = e[s];
            e[s] = 16711935 & (r << 8 | r >>> 24) | 4278255360 & (r << 24 | r >>> 8);
          }
          var i = this._hash.words,
            o = e[t + 0],
            c = e[t + 1],
            p = e[t + 2],
            f = e[t + 3],
            g = e[t + 4],
            m = e[t + 5],
            y = e[t + 6],
            _ = e[t + 7],
            w = e[t + 8],
            v = e[t + 9],
            I = e[t + 10],
            S = e[t + 11],
            b = e[t + 12],
            k = e[t + 13],
            A = e[t + 14],
            T = e[t + 15],
            C = i[0],
            P = i[1],
            O = i[2],
            E = i[3];
          C = u(C, P, O, E, o, 7, a[0]), E = u(E, C, P, O, c, 12, a[1]), O = u(O, E, C, P, p, 17, a[2]), P = u(P, O, E, C, f, 22, a[3]), C = u(C, P, O, E, g, 7, a[4]), E = u(E, C, P, O, m, 12, a[5]), O = u(O, E, C, P, y, 17, a[6]), P = u(P, O, E, C, _, 22, a[7]), C = u(C, P, O, E, w, 7, a[8]), E = u(E, C, P, O, v, 12, a[9]), O = u(O, E, C, P, I, 17, a[10]), P = u(P, O, E, C, S, 22, a[11]), C = u(C, P, O, E, b, 7, a[12]), E = u(E, C, P, O, k, 12, a[13]), O = u(O, E, C, P, A, 17, a[14]), C = l(C, P = u(P, O, E, C, T, 22, a[15]), O, E, c, 5, a[16]), E = l(E, C, P, O, y, 9, a[17]), O = l(O, E, C, P, S, 14, a[18]), P = l(P, O, E, C, o, 20, a[19]), C = l(C, P, O, E, m, 5, a[20]), E = l(E, C, P, O, I, 9, a[21]), O = l(O, E, C, P, T, 14, a[22]), P = l(P, O, E, C, g, 20, a[23]), C = l(C, P, O, E, v, 5, a[24]), E = l(E, C, P, O, A, 9, a[25]), O = l(O, E, C, P, f, 14, a[26]), P = l(P, O, E, C, w, 20, a[27]), C = l(C, P, O, E, k, 5, a[28]), E = l(E, C, P, O, p, 9, a[29]), O = l(O, E, C, P, _, 14, a[30]), C = h(C, P = l(P, O, E, C, b, 20, a[31]), O, E, m, 4, a[32]), E = h(E, C, P, O, w, 11, a[33]), O = h(O, E, C, P, S, 16, a[34]), P = h(P, O, E, C, A, 23, a[35]), C = h(C, P, O, E, c, 4, a[36]), E = h(E, C, P, O, g, 11, a[37]), O = h(O, E, C, P, _, 16, a[38]), P = h(P, O, E, C, I, 23, a[39]), C = h(C, P, O, E, k, 4, a[40]), E = h(E, C, P, O, o, 11, a[41]), O = h(O, E, C, P, f, 16, a[42]), P = h(P, O, E, C, y, 23, a[43]), C = h(C, P, O, E, v, 4, a[44]), E = h(E, C, P, O, b, 11, a[45]), O = h(O, E, C, P, T, 16, a[46]), C = d(C, P = h(P, O, E, C, p, 23, a[47]), O, E, o, 6, a[48]), E = d(E, C, P, O, _, 10, a[49]), O = d(O, E, C, P, A, 15, a[50]), P = d(P, O, E, C, m, 21, a[51]), C = d(C, P, O, E, b, 6, a[52]), E = d(E, C, P, O, f, 10, a[53]), O = d(O, E, C, P, I, 15, a[54]), P = d(P, O, E, C, c, 21, a[55]), C = d(C, P, O, E, w, 6, a[56]), E = d(E, C, P, O, T, 10, a[57]), O = d(O, E, C, P, y, 15, a[58]), P = d(P, O, E, C, k, 21, a[59]), C = d(C, P, O, E, g, 6, a[60]), E = d(E, C, P, O, S, 10, a[61]), O = d(O, E, C, P, p, 15, a[62]), P = d(P, O, E, C, v, 21, a[63]), i[0] = i[0] + C | 0, i[1] = i[1] + P | 0, i[2] = i[2] + O | 0, i[3] = i[3] + E | 0;
        },
        _doFinalize: function _doFinalize() {
          var t = this._data,
            n = t.words,
            s = 8 * this._nDataBytes,
            r = 8 * t.sigBytes;
          n[r >>> 5] |= 128 << 24 - r % 32;
          var i = e.floor(s / 4294967296),
            o = s;
          n[15 + (r + 64 >>> 9 << 4)] = 16711935 & (i << 8 | i >>> 24) | 4278255360 & (i << 24 | i >>> 8), n[14 + (r + 64 >>> 9 << 4)] = 16711935 & (o << 8 | o >>> 24) | 4278255360 & (o << 24 | o >>> 8), t.sigBytes = 4 * (n.length + 1), this._process();
          for (var a = this._hash, c = a.words, u = 0; u < 4; u++) {
            var l = c[u];
            c[u] = 16711935 & (l << 8 | l >>> 24) | 4278255360 & (l << 24 | l >>> 8);
          }
          return a;
        },
        clone: function clone() {
          var e = i.clone.call(this);
          return e._hash = this._hash.clone(), e;
        }
      });
      function u(e, t, n, s, r, i, o) {
        var a = e + (t & n | ~t & s) + r + o;
        return (a << i | a >>> 32 - i) + t;
      }
      function l(e, t, n, s, r, i, o) {
        var a = e + (t & s | n & ~s) + r + o;
        return (a << i | a >>> 32 - i) + t;
      }
      function h(e, t, n, s, r, i, o) {
        var a = e + (t ^ n ^ s) + r + o;
        return (a << i | a >>> 32 - i) + t;
      }
      function d(e, t, n, s, r, i, o) {
        var a = e + (n ^ (t | ~s)) + r + o;
        return (a << i | a >>> 32 - i) + t;
      }
      t.MD5 = i._createHelper(c), t.HmacMD5 = i._createHmacHelper(c);
    }(Math), n.MD5);
  }), n(function (e, t) {
    var n;
    e.exports = (n = r, void function () {
      var e = n,
        t = e.lib.Base,
        s = e.enc.Utf8;
      e.algo.HMAC = t.extend({
        init: function init(e, t) {
          e = this._hasher = new e.init(), "string" == typeof t && (t = s.parse(t));
          var n = e.blockSize,
            r = 4 * n;
          t.sigBytes > r && (t = e.finalize(t)), t.clamp();
          for (var i = this._oKey = t.clone(), o = this._iKey = t.clone(), a = i.words, c = o.words, u = 0; u < n; u++) {
            a[u] ^= 1549556828, c[u] ^= 909522486;
          }
          i.sigBytes = o.sigBytes = r, this.reset();
        },
        reset: function reset() {
          var e = this._hasher;
          e.reset(), e.update(this._iKey);
        },
        update: function update(e) {
          return this._hasher.update(e), this;
        },
        finalize: function finalize(e) {
          var t = this._hasher,
            n = t.finalize(e);
          return t.reset(), t.finalize(this._oKey.clone().concat(n));
        }
      });
    }());
  }), n(function (e, t) {
    e.exports = r.HmacMD5;
  })),
  o = n(function (e, t) {
    e.exports = r.enc.Utf8;
  }),
  a = n(function (e, t) {
    var n;
    e.exports = (n = r, function () {
      var e = n,
        t = e.lib.WordArray;
      function s(e, n, s) {
        for (var r = [], i = 0, o = 0; o < n; o++) {
          if (o % 4) {
            var a = s[e.charCodeAt(o - 1)] << o % 4 * 2,
              c = s[e.charCodeAt(o)] >>> 6 - o % 4 * 2;
            r[i >>> 2] |= (a | c) << 24 - i % 4 * 8, i++;
          }
        }
        return t.create(r, i);
      }
      e.enc.Base64 = {
        stringify: function stringify(e) {
          var t = e.words,
            n = e.sigBytes,
            s = this._map;
          e.clamp();
          for (var r = [], i = 0; i < n; i += 3) {
            for (var o = (t[i >>> 2] >>> 24 - i % 4 * 8 & 255) << 16 | (t[i + 1 >>> 2] >>> 24 - (i + 1) % 4 * 8 & 255) << 8 | t[i + 2 >>> 2] >>> 24 - (i + 2) % 4 * 8 & 255, a = 0; a < 4 && i + .75 * a < n; a++) {
              r.push(s.charAt(o >>> 6 * (3 - a) & 63));
            }
          }
          var c = s.charAt(64);
          if (c) for (; r.length % 4;) {
            r.push(c);
          }
          return r.join("");
        },
        parse: function parse(e) {
          var t = e.length,
            n = this._map,
            r = this._reverseMap;
          if (!r) {
            r = this._reverseMap = [];
            for (var i = 0; i < n.length; i++) {
              r[n.charCodeAt(i)] = i;
            }
          }
          var o = n.charAt(64);
          if (o) {
            var a = e.indexOf(o);
            -1 !== a && (t = a);
          }
          return s(e, t, r);
        },
        _map: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/="
      };
    }(), n.enc.Base64);
  });
var c = "FUNCTION",
  u = "OBJECT",
  l = "CLIENT_DB",
  h = "pending",
  d = "fulfilled",
  p = "rejected";
function f(e) {
  return Object.prototype.toString.call(e).slice(8, -1).toLowerCase();
}
function g(e) {
  return "object" === f(e);
}
function m(e) {
  return "function" == typeof e;
}
function y(e) {
  return function () {
    try {
      return e.apply(e, arguments);
    } catch (e) {
      console.error(e);
    }
  };
}
var _ = "REJECTED",
  w = "NOT_PENDING";
var v = /*#__PURE__*/function () {
  function v() {
    var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
      e = _ref.createPromise,
      _ref$retryRule = _ref.retryRule,
      t = _ref$retryRule === void 0 ? _ : _ref$retryRule;
    (0, _classCallCheck2.default)(this, v);
    this.createPromise = e, this.status = null, this.promise = null, this.retryRule = t;
  }
  (0, _createClass2.default)(v, [{
    key: "needRetry",
    get: function get() {
      if (!this.status) return !0;
      switch (this.retryRule) {
        case _:
          return this.status === p;
        case w:
          return this.status !== h;
      }
    }
  }, {
    key: "exec",
    value: function exec() {
      var _this = this;
      return this.needRetry ? (this.status = h, this.promise = this.createPromise().then(function (e) {
        return _this.status = d, Promise.resolve(e);
      }, function (e) {
        return _this.status = p, Promise.reject(e);
      }), this.promise) : this.promise;
    }
  }]);
  return v;
}();
function I(e) {
  return e && "string" == typeof e ? JSON.parse(e) : e;
}
var S = "development" === "development",
  b = "mp-weixin",
  k = "true" === undefined || !0 === undefined,
  A = I([]),
  T = "h5" === b ? "web" : "app-plus" === b || "app-harmony" === b ? "app" : b,
  C = I(undefined),
  P = I([]) || [],
  O = true;
var E = "";
try {
  E = (__webpack_require__(/*! uni-stat-config */ 588).default || __webpack_require__(/*! uni-stat-config */ 588)).appid;
} catch (e) {}
var x,
  L = {};
function U(e) {
  var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var n, s;
  return n = L, s = e, Object.prototype.hasOwnProperty.call(n, s) || (L[e] = t), L[e];
}
function R() {
  return x || (x = function () {
    if ("undefined" != typeof globalThis) return globalThis;
    if ("undefined" != typeof self) return self;
    if ("undefined" != typeof window) return window;
    function e() {
      return this;
    }
    return void 0 !== e() ? e() : new Function("return this")();
  }(), x);
}
"app" === T && (L = uni._globalUniCloudObj ? uni._globalUniCloudObj : uni._globalUniCloudObj = {});
var N = ["invoke", "success", "fail", "complete"],
  D = U("_globalUniCloudInterceptor");
function M(e, t) {
  D[e] || (D[e] = {}), g(t) && Object.keys(t).forEach(function (n) {
    N.indexOf(n) > -1 && function (e, t, n) {
      var s = D[e][t];
      s || (s = D[e][t] = []), -1 === s.indexOf(n) && m(n) && s.push(n);
    }(e, n, t[n]);
  });
}
function q(e, t) {
  D[e] || (D[e] = {}), g(t) ? Object.keys(t).forEach(function (n) {
    N.indexOf(n) > -1 && function (e, t, n) {
      var s = D[e][t];
      if (!s) return;
      var r = s.indexOf(n);
      r > -1 && s.splice(r, 1);
    }(e, n, t[n]);
  }) : delete D[e];
}
function F(e, t) {
  return e && 0 !== e.length ? e.reduce(function (e, n) {
    return e.then(function () {
      return n(t);
    });
  }, Promise.resolve()) : Promise.resolve();
}
function K(e, t) {
  return D[e] && D[e][t] || [];
}
function j(e) {
  M("callObject", e);
}
var $ = U("_globalUniCloudListener"),
  B = "response",
  W = "needLogin",
  H = "refreshToken",
  J = "failover",
  z = "clientdb",
  V = "cloudfunction",
  G = "cloudobject";
function Q(e) {
  return $[e] || ($[e] = []), $[e];
}
function Y(e, t) {
  var n = Q(e);
  n.includes(t) || n.push(t);
}
function X(e, t) {
  var n = Q(e),
    s = n.indexOf(t);
  -1 !== s && n.splice(s, 1);
}
function Z(e, t) {
  var n = Q(e);
  for (var _e2 = 0; _e2 < n.length; _e2++) {
    (0, n[_e2])(t);
  }
}
var ee,
  te = !1;
function ne() {
  return ee || (ee = new Promise(function (e) {
    te && e(), function t() {
      if ("function" == typeof getCurrentPages) {
        var _t2 = getCurrentPages();
        _t2 && _t2[0] && (te = !0, e());
      }
      te || setTimeout(function () {
        t();
      }, 30);
    }();
  }), ee);
}
function se(e) {
  var t = {};
  for (var _n2 in e) {
    var _s2 = e[_n2];
    m(_s2) && (t[_n2] = y(_s2));
  }
  return t;
}
var re = /*#__PURE__*/function (_Error) {
  (0, _inherits2.default)(re, _Error);
  var _super = _createSuper(re);
  function re(e) {
    var _this2;
    (0, _classCallCheck2.default)(this, re);
    var t = e.message || e.errMsg || "unknown system error";
    _this2 = _super.call(this, t), _this2.errMsg = t, _this2.code = _this2.errCode = e.code || e.errCode || "SYSTEM_ERROR", _this2.errSubject = _this2.subject = e.subject || e.errSubject, _this2.cause = e.cause, _this2.requestId = e.requestId;
    return _this2;
  }
  (0, _createClass2.default)(re, [{
    key: "toJson",
    value: function toJson() {
      var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
      if (!(e >= 10)) return e++, {
        errCode: this.errCode,
        errMsg: this.errMsg,
        errSubject: this.errSubject,
        cause: this.cause && this.cause.toJson ? this.cause.toJson(e) : this.cause
      };
    }
  }]);
  return re;
}( /*#__PURE__*/(0, _wrapNativeSuper2.default)(Error));
exports.UniCloudError = re;
var ie = {
  request: function request(e) {
    return uni.request(e);
  },
  uploadFile: function uploadFile(e) {
    return uni.uploadFile(e);
  },
  setStorageSync: function setStorageSync(e, t) {
    return uni.setStorageSync(e, t);
  },
  getStorageSync: function getStorageSync(e) {
    return uni.getStorageSync(e);
  },
  removeStorageSync: function removeStorageSync(e) {
    return uni.removeStorageSync(e);
  },
  clearStorageSync: function clearStorageSync() {
    return uni.clearStorageSync();
  },
  connectSocket: function connectSocket(e) {
    return uni.connectSocket(e);
  }
};
function oe() {
  return {
    token: ie.getStorageSync("uni_id_token") || ie.getStorageSync("uniIdToken"),
    tokenExpired: ie.getStorageSync("uni_id_token_expired")
  };
}
function ae() {
  var _ref2 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
    e = _ref2.token,
    t = _ref2.tokenExpired;
  e && ie.setStorageSync("uni_id_token", e), t && ie.setStorageSync("uni_id_token_expired", t);
}
var ce, ue;
function le() {
  return ce || (ce = "mp-weixin" === T && wx.canIUse("getAppBaseInfo") && wx.canIUse("getDeviceInfo") ? _objectSpread(_objectSpread({}, uni.getAppBaseInfo()), uni.getDeviceInfo()) : uni.getSystemInfoSync()), ce;
}
function he() {
  var e, t;
  try {
    if (uni.getLaunchOptionsSync) {
      if (uni.getLaunchOptionsSync.toString().indexOf("not yet implemented") > -1) return;
      var _uni$getLaunchOptions = uni.getLaunchOptionsSync(),
        _n3 = _uni$getLaunchOptions.scene,
        _s3 = _uni$getLaunchOptions.channel;
      e = _s3, t = _n3;
    }
  } catch (e) {}
  return {
    channel: e,
    scene: t
  };
}
var de = {};
function pe() {
  var e = uni.getLocale && uni.getLocale() || "en";
  if (ue) return _objectSpread(_objectSpread(_objectSpread({}, de), ue), {}, {
    locale: e,
    LOCALE: e
  });
  var t = le(),
    n = t.deviceId,
    s = t.osName,
    r = t.uniPlatform,
    i = t.appId,
    o = ["appId", "appLanguage", "appName", "appVersion", "appVersionCode", "appWgtVersion", "browserName", "browserVersion", "deviceBrand", "deviceId", "deviceModel", "deviceType", "osName", "osVersion", "romName", "romVersion", "ua", "hostName", "hostVersion", "uniPlatform", "uniRuntimeVersion", "uniRuntimeVersionCode", "uniCompilerVersion", "uniCompilerVersionCode"];
  for (var _e3 in t) {
    Object.hasOwnProperty.call(t, _e3) && -1 === o.indexOf(_e3) && delete t[_e3];
  }
  return ue = _objectSpread(_objectSpread({
    PLATFORM: r,
    OS: s,
    APPID: i,
    DEVICEID: n
  }, he()), t), _objectSpread(_objectSpread(_objectSpread({}, de), ue), {}, {
    locale: e,
    LOCALE: e
  });
}
var fe = {
  sign: function sign(e, t) {
    var n = "";
    return Object.keys(e).sort().forEach(function (t) {
      e[t] && (n = n + "&" + t + "=" + e[t]);
    }), n = n.slice(1), i(n, t).toString();
  },
  wrappedRequest: function wrappedRequest(e, t) {
    return new Promise(function (n, s) {
      t(Object.assign(e, {
        complete: function complete(e) {
          e || (e = {}), S && "web" === T && e.errMsg && 0 === e.errMsg.indexOf("request:fail") && console.warn("发布H5，需要在uniCloud后台操作，绑定安全域名，否则会因为跨域问题而无法访问。教程参考：https://uniapp.dcloud.io/uniCloud/quickstart?id=useinh5");
          var t = e.data && e.data.header && e.data.header["x-serverless-request-id"] || e.header && e.header["request-id"];
          if (!e.statusCode || e.statusCode >= 400) {
            var _n4 = e.data && e.data.error && e.data.error.code || "SYS_ERR",
              _r = e.data && e.data.error && e.data.error.message || e.errMsg || "request:fail";
            return s(new re({
              code: _n4,
              message: _r,
              requestId: t
            }));
          }
          var r = e.data;
          if (r.error) return s(new re({
            code: r.error.code,
            message: r.error.message,
            requestId: t
          }));
          r.result = r.data, r.requestId = t, delete r.data, n(r);
        }
      }));
    });
  },
  toBase64: function toBase64(e) {
    return a.stringify(o.parse(e));
  }
};
var ge = /*#__PURE__*/function () {
  function ge(e) {
    var _this3 = this;
    (0, _classCallCheck2.default)(this, ge);
    ["spaceId", "clientSecret"].forEach(function (t) {
      if (!Object.prototype.hasOwnProperty.call(e, t)) throw new Error("".concat(t, " required"));
    }), this.config = Object.assign({}, {
      endpoint: 0 === e.spaceId.indexOf("mp-") ? "https://api.next.bspapp.com" : "https://api.bspapp.com"
    }, e), this.config.provider = "aliyun", this.config.requestUrl = this.config.endpoint + "/client", this.config.envType = this.config.envType || "public", this.config.accessTokenKey = "access_token_" + this.config.spaceId, this.adapter = ie, this._getAccessTokenPromiseHub = new v({
      createPromise: function createPromise() {
        return _this3.requestAuth(_this3.setupRequest({
          method: "serverless.auth.user.anonymousAuthorize",
          params: "{}"
        }, "auth")).then(function (e) {
          if (!e.result || !e.result.accessToken) throw new re({
            code: "AUTH_FAILED",
            message: "获取accessToken失败"
          });
          _this3.setAccessToken(e.result.accessToken);
        });
      },
      retryRule: w
    });
  }
  (0, _createClass2.default)(ge, [{
    key: "hasAccessToken",
    get: function get() {
      return !!this.accessToken;
    }
  }, {
    key: "setAccessToken",
    value: function setAccessToken(e) {
      this.accessToken = e;
    }
  }, {
    key: "requestWrapped",
    value: function requestWrapped(e) {
      return fe.wrappedRequest(e, this.adapter.request);
    }
  }, {
    key: "requestAuth",
    value: function requestAuth(e) {
      return this.requestWrapped(e);
    }
  }, {
    key: "request",
    value: function request(e, t) {
      var _this4 = this;
      return Promise.resolve().then(function () {
        return _this4.hasAccessToken ? t ? _this4.requestWrapped(e) : _this4.requestWrapped(e).catch(function (t) {
          return new Promise(function (e, n) {
            !t || "GATEWAY_INVALID_TOKEN" !== t.code && "InvalidParameter.InvalidToken" !== t.code ? n(t) : e();
          }).then(function () {
            return _this4.getAccessToken();
          }).then(function () {
            var t = _this4.rebuildRequest(e);
            return _this4.request(t, !0);
          });
        }) : _this4.getAccessToken().then(function () {
          var t = _this4.rebuildRequest(e);
          return _this4.request(t, !0);
        });
      });
    }
  }, {
    key: "rebuildRequest",
    value: function rebuildRequest(e) {
      var t = Object.assign({}, e);
      return t.data.token = this.accessToken, t.header["x-basement-token"] = this.accessToken, t.header["x-serverless-sign"] = fe.sign(t.data, this.config.clientSecret), t;
    }
  }, {
    key: "setupRequest",
    value: function setupRequest(e, t) {
      var n = Object.assign({}, e, {
          spaceId: this.config.spaceId,
          timestamp: Date.now()
        }),
        s = {
          "Content-Type": "application/json"
        };
      return "auth" !== t && (n.token = this.accessToken, s["x-basement-token"] = this.accessToken), s["x-serverless-sign"] = fe.sign(n, this.config.clientSecret), {
        url: this.config.requestUrl,
        method: "POST",
        data: n,
        dataType: "json",
        header: s
      };
    }
  }, {
    key: "getAccessToken",
    value: function getAccessToken() {
      return this._getAccessTokenPromiseHub.exec();
    }
  }, {
    key: "authorize",
    value: function () {
      var _authorize = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee() {
        return _regenerator.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return this.getAccessToken();
              case 2:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));
      function authorize() {
        return _authorize.apply(this, arguments);
      }
      return authorize;
    }()
  }, {
    key: "callFunction",
    value: function callFunction(e) {
      var t = {
        method: "serverless.function.runtime.invoke",
        params: JSON.stringify({
          functionTarget: e.name,
          functionArgs: e.data || {}
        })
      };
      return this.request(_objectSpread(_objectSpread({}, this.setupRequest(t)), {}, {
        timeout: e.timeout
      }));
    }
  }, {
    key: "getOSSUploadOptionsFromPath",
    value: function getOSSUploadOptionsFromPath(e) {
      var t = {
        method: "serverless.file.resource.generateProximalSign",
        params: JSON.stringify(e)
      };
      return this.request(this.setupRequest(t));
    }
  }, {
    key: "uploadFileToOSS",
    value: function uploadFileToOSS(_ref3) {
      var _this5 = this;
      var e = _ref3.url,
        t = _ref3.formData,
        n = _ref3.name,
        s = _ref3.filePath,
        r = _ref3.fileType,
        i = _ref3.onUploadProgress;
      return new Promise(function (o, a) {
        var c = _this5.adapter.uploadFile({
          url: e,
          formData: t,
          name: n,
          filePath: s,
          fileType: r,
          header: {
            "X-OSS-server-side-encrpytion": "AES256"
          },
          success: function success(e) {
            e && e.statusCode < 400 ? o(e) : a(new re({
              code: "UPLOAD_FAILED",
              message: "文件上传失败"
            }));
          },
          fail: function fail(e) {
            a(new re({
              code: e.code || "UPLOAD_FAILED",
              message: e.message || e.errMsg || "文件上传失败"
            }));
          }
        });
        "function" == typeof i && c && "function" == typeof c.onProgressUpdate && c.onProgressUpdate(function (e) {
          i({
            loaded: e.totalBytesSent,
            total: e.totalBytesExpectedToSend
          });
        });
      });
    }
  }, {
    key: "reportOSSUpload",
    value: function reportOSSUpload(e) {
      var t = {
        method: "serverless.file.resource.report",
        params: JSON.stringify(e)
      };
      return this.request(this.setupRequest(t));
    }
  }, {
    key: "uploadFile",
    value: function () {
      var _uploadFile = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee2(_ref4) {
        var e, t, _ref4$fileType, n, _ref4$cloudPathAsReal, s, r, i, o, a, c, u, l, h, d, p, g, m, y, _, _e4, w;
        return _regenerator.default.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                e = _ref4.filePath, t = _ref4.cloudPath, _ref4$fileType = _ref4.fileType, n = _ref4$fileType === void 0 ? "image" : _ref4$fileType, _ref4$cloudPathAsReal = _ref4.cloudPathAsRealPath, s = _ref4$cloudPathAsReal === void 0 ? !1 : _ref4$cloudPathAsReal, r = _ref4.onUploadProgress, i = _ref4.config;
                if (!("string" !== f(t))) {
                  _context2.next = 3;
                  break;
                }
                throw new re({
                  code: "INVALID_PARAM",
                  message: "cloudPath必须为字符串类型"
                });
              case 3:
                if (t = t.trim()) {
                  _context2.next = 5;
                  break;
                }
                throw new re({
                  code: "INVALID_PARAM",
                  message: "cloudPath不可为空"
                });
              case 5:
                if (!/:\/\//.test(t)) {
                  _context2.next = 7;
                  break;
                }
                throw new re({
                  code: "INVALID_PARAM",
                  message: "cloudPath不合法"
                });
              case 7:
                o = i && i.envType || this.config.envType;
                if (!(s && ("/" !== t[0] && (t = "/" + t), t.indexOf("\\") > -1))) {
                  _context2.next = 10;
                  break;
                }
                throw new re({
                  code: "INVALID_PARAM",
                  message: "使用cloudPath作为路径时，cloudPath不可包含“\\”"
                });
              case 10:
                _context2.next = 12;
                return this.getOSSUploadOptionsFromPath({
                  env: o,
                  filename: s ? t.split("/").pop() : t,
                  fileId: s ? t : void 0
                });
              case 12:
                a = _context2.sent.result;
                c = "https://" + a.cdnDomain + "/" + a.ossPath;
                u = a.securityToken;
                l = a.accessKeyId;
                h = a.signature;
                d = a.host;
                p = a.ossPath;
                g = a.id;
                m = a.policy;
                y = a.ossCallbackUrl;
                _ = {
                  "Cache-Control": "max-age=2592000",
                  "Content-Disposition": "attachment",
                  OSSAccessKeyId: l,
                  Signature: h,
                  host: d,
                  id: g,
                  key: p,
                  policy: m,
                  success_action_status: 200
                };
                if (u && (_["x-oss-security-token"] = u), y) {
                  _e4 = JSON.stringify({
                    callbackUrl: y,
                    callbackBody: JSON.stringify({
                      fileId: g,
                      spaceId: this.config.spaceId
                    }),
                    callbackBodyType: "application/json"
                  });
                  _.callback = fe.toBase64(_e4);
                }
                w = {
                  url: "https://" + a.host,
                  formData: _,
                  fileName: "file",
                  name: "file",
                  filePath: e,
                  fileType: n
                };
                _context2.next = 27;
                return this.uploadFileToOSS(Object.assign({}, w, {
                  onUploadProgress: r
                }));
              case 27:
                if (!y) {
                  _context2.next = 29;
                  break;
                }
                return _context2.abrupt("return", {
                  success: !0,
                  filePath: e,
                  fileID: c
                });
              case 29:
                _context2.next = 31;
                return this.reportOSSUpload({
                  id: g
                });
              case 31:
                if (!_context2.sent.success) {
                  _context2.next = 33;
                  break;
                }
                return _context2.abrupt("return", {
                  success: !0,
                  filePath: e,
                  fileID: c
                });
              case 33:
                throw new re({
                  code: "UPLOAD_FAILED",
                  message: "文件上传失败"
                });
              case 34:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));
      function uploadFile(_x) {
        return _uploadFile.apply(this, arguments);
      }
      return uploadFile;
    }()
  }, {
    key: "getTempFileURL",
    value: function getTempFileURL() {
      var _this6 = this;
      var _ref5 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
        e = _ref5.fileList;
      return new Promise(function (t, n) {
        Array.isArray(e) && 0 !== e.length || n(new re({
          code: "INVALID_PARAM",
          message: "fileList的元素必须是非空的字符串"
        })), _this6.getFileInfo({
          fileList: e
        }).then(function (n) {
          t({
            fileList: e.map(function (e, t) {
              var s = n.fileList[t];
              return {
                fileID: e,
                tempFileURL: s && s.url || e
              };
            })
          });
        });
      });
    }
  }, {
    key: "getFileInfo",
    value: function () {
      var _getFileInfo = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee3() {
        var _ref6,
          e,
          t,
          _args3 = arguments;
        return _regenerator.default.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _ref6 = _args3.length > 0 && _args3[0] !== undefined ? _args3[0] : {}, e = _ref6.fileList;
                if (!(!Array.isArray(e) || 0 === e.length)) {
                  _context3.next = 3;
                  break;
                }
                throw new re({
                  code: "INVALID_PARAM",
                  message: "fileList的元素必须是非空的字符串"
                });
              case 3:
                t = {
                  method: "serverless.file.resource.info",
                  params: JSON.stringify({
                    id: e.map(function (e) {
                      return e.split("?")[0];
                    }).join(",")
                  })
                };
                _context3.next = 6;
                return this.request(this.setupRequest(t));
              case 6:
                _context3.t0 = _context3.sent.result;
                return _context3.abrupt("return", {
                  fileList: _context3.t0
                });
              case 8:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));
      function getFileInfo() {
        return _getFileInfo.apply(this, arguments);
      }
      return getFileInfo;
    }()
  }]);
  return ge;
}();
var me = {
  init: function init(e) {
    var t = new ge(e),
      n = {
        signInAnonymously: function signInAnonymously() {
          return t.authorize();
        },
        getLoginState: function getLoginState() {
          return Promise.resolve(!1);
        }
      };
    return t.auth = function () {
      return n;
    }, t.customAuth = t.auth, t;
  }
};
var ye = "undefined" != typeof location && "http:" === location.protocol ? "http:" : "https:";
var _e;
!function (e) {
  e.local = "local", e.none = "none", e.session = "session";
}(_e || (_e = {}));
var we = function we() {},
  ve = n(function (e, t) {
    var n;
    e.exports = (n = r, function (e) {
      var t = n,
        s = t.lib,
        r = s.WordArray,
        i = s.Hasher,
        o = t.algo,
        a = [],
        c = [];
      !function () {
        function t(t) {
          for (var n = e.sqrt(t), s = 2; s <= n; s++) {
            if (!(t % s)) return !1;
          }
          return !0;
        }
        function n(e) {
          return 4294967296 * (e - (0 | e)) | 0;
        }
        for (var s = 2, r = 0; r < 64;) {
          t(s) && (r < 8 && (a[r] = n(e.pow(s, .5))), c[r] = n(e.pow(s, 1 / 3)), r++), s++;
        }
      }();
      var u = [],
        l = o.SHA256 = i.extend({
          _doReset: function _doReset() {
            this._hash = new r.init(a.slice(0));
          },
          _doProcessBlock: function _doProcessBlock(e, t) {
            for (var n = this._hash.words, s = n[0], r = n[1], i = n[2], o = n[3], a = n[4], l = n[5], h = n[6], d = n[7], p = 0; p < 64; p++) {
              if (p < 16) u[p] = 0 | e[t + p];else {
                var f = u[p - 15],
                  g = (f << 25 | f >>> 7) ^ (f << 14 | f >>> 18) ^ f >>> 3,
                  m = u[p - 2],
                  y = (m << 15 | m >>> 17) ^ (m << 13 | m >>> 19) ^ m >>> 10;
                u[p] = g + u[p - 7] + y + u[p - 16];
              }
              var _ = s & r ^ s & i ^ r & i,
                w = (s << 30 | s >>> 2) ^ (s << 19 | s >>> 13) ^ (s << 10 | s >>> 22),
                v = d + ((a << 26 | a >>> 6) ^ (a << 21 | a >>> 11) ^ (a << 7 | a >>> 25)) + (a & l ^ ~a & h) + c[p] + u[p];
              d = h, h = l, l = a, a = o + v | 0, o = i, i = r, r = s, s = v + (w + _) | 0;
            }
            n[0] = n[0] + s | 0, n[1] = n[1] + r | 0, n[2] = n[2] + i | 0, n[3] = n[3] + o | 0, n[4] = n[4] + a | 0, n[5] = n[5] + l | 0, n[6] = n[6] + h | 0, n[7] = n[7] + d | 0;
          },
          _doFinalize: function _doFinalize() {
            var t = this._data,
              n = t.words,
              s = 8 * this._nDataBytes,
              r = 8 * t.sigBytes;
            return n[r >>> 5] |= 128 << 24 - r % 32, n[14 + (r + 64 >>> 9 << 4)] = e.floor(s / 4294967296), n[15 + (r + 64 >>> 9 << 4)] = s, t.sigBytes = 4 * n.length, this._process(), this._hash;
          },
          clone: function clone() {
            var e = i.clone.call(this);
            return e._hash = this._hash.clone(), e;
          }
        });
      t.SHA256 = i._createHelper(l), t.HmacSHA256 = i._createHmacHelper(l);
    }(Math), n.SHA256);
  }),
  Ie = ve,
  Se = n(function (e, t) {
    e.exports = r.HmacSHA256;
  });
var be = function be() {
  var e;
  if (!Promise) {
    e = function e() {}, e.promise = {};
    var _t3 = function _t3() {
      throw new re({
        message: 'Your Node runtime does support ES6 Promises. Set "global.Promise" to your preferred implementation of promises.'
      });
    };
    return Object.defineProperty(e.promise, "then", {
      get: _t3
    }), Object.defineProperty(e.promise, "catch", {
      get: _t3
    }), e;
  }
  var t = new Promise(function (t, n) {
    e = function e(_e5, s) {
      return _e5 ? n(_e5) : t(s);
    };
  });
  return e.promise = t, e;
};
function ke(e) {
  return void 0 === e;
}
function Ae(e) {
  return "[object Null]" === Object.prototype.toString.call(e);
}
function Te() {
  var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "";
  return e.replace(/([\s\S]+)\s+(请前往云开发AI小助手查看问题：.*)/, "$1");
}
function Ce() {
  var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 32;
  var t = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",
    n = t.length;
  var s = "";
  for (var _r2 = 0; _r2 < e; _r2++) {
    s += t.charAt(Math.floor(Math.random() * n));
  }
  return s;
}
var Pe;
function Oe(e) {
  var t = (n = e, "[object Array]" === Object.prototype.toString.call(n) ? e : [e]);
  var n;
  var _iterator = _createForOfIteratorHelper(t),
    _step;
  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var _e6 = _step.value;
      var _t4 = _e6.isMatch,
        _n5 = _e6.genAdapter,
        _s4 = _e6.runtime;
      if (_t4()) return {
        adapter: _n5(),
        runtime: _s4
      };
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }
}
!function (e) {
  e.WEB = "web", e.WX_MP = "wx_mp";
}(Pe || (Pe = {}));
var Ee = {
    adapter: null,
    runtime: void 0
  },
  xe = ["anonymousUuidKey"];
var Le = /*#__PURE__*/function (_we) {
  (0, _inherits2.default)(Le, _we);
  var _super2 = _createSuper(Le);
  function Le() {
    var _this7;
    (0, _classCallCheck2.default)(this, Le);
    _this7 = _super2.call(this), Ee.adapter.root.tcbObject || (Ee.adapter.root.tcbObject = {});
    return _this7;
  }
  (0, _createClass2.default)(Le, [{
    key: "setItem",
    value: function setItem(e, t) {
      Ee.adapter.root.tcbObject[e] = t;
    }
  }, {
    key: "getItem",
    value: function getItem(e) {
      return Ee.adapter.root.tcbObject[e];
    }
  }, {
    key: "removeItem",
    value: function removeItem(e) {
      delete Ee.adapter.root.tcbObject[e];
    }
  }, {
    key: "clear",
    value: function clear() {
      delete Ee.adapter.root.tcbObject;
    }
  }]);
  return Le;
}(we);
function Ue(e, t) {
  switch (e) {
    case "local":
      return t.localStorage || new Le();
    case "none":
      return new Le();
    default:
      return t.sessionStorage || new Le();
  }
}
var Re = /*#__PURE__*/function () {
  function Re(e) {
    (0, _classCallCheck2.default)(this, Re);
    if (!this._storage) {
      this._persistence = Ee.adapter.primaryStorage || e.persistence, this._storage = Ue(this._persistence, Ee.adapter);
      var _t5 = "access_token_".concat(e.env),
        _n6 = "access_token_expire_".concat(e.env),
        _s5 = "refresh_token_".concat(e.env),
        _r3 = "anonymous_uuid_".concat(e.env),
        _i = "login_type_".concat(e.env),
        _o = "device_id",
        _a = "token_type_".concat(e.env),
        _c = "user_info_".concat(e.env);
      this.keys = {
        accessTokenKey: _t5,
        accessTokenExpireKey: _n6,
        refreshTokenKey: _s5,
        anonymousUuidKey: _r3,
        loginTypeKey: _i,
        userInfoKey: _c,
        deviceIdKey: _o,
        tokenTypeKey: _a
      };
    }
  }
  (0, _createClass2.default)(Re, [{
    key: "updatePersistence",
    value: function updatePersistence(e) {
      if (e === this._persistence) return;
      var t = "local" === this._persistence;
      this._persistence = e;
      var n = Ue(e, Ee.adapter);
      for (var _e7 in this.keys) {
        var _s6 = this.keys[_e7];
        if (t && xe.includes(_e7)) continue;
        var _r4 = this._storage.getItem(_s6);
        ke(_r4) || Ae(_r4) || (n.setItem(_s6, _r4), this._storage.removeItem(_s6));
      }
      this._storage = n;
    }
  }, {
    key: "setStore",
    value: function setStore(e, t, n) {
      if (!this._storage) return;
      var s = {
          version: n || "localCachev1",
          content: t
        },
        r = JSON.stringify(s);
      try {
        this._storage.setItem(e, r);
      } catch (e) {
        throw e;
      }
    }
  }, {
    key: "getStore",
    value: function getStore(e, t) {
      try {
        if (!this._storage) return;
      } catch (e) {
        return "";
      }
      t = t || "localCachev1";
      var n = this._storage.getItem(e);
      if (!n) return "";
      if (n.indexOf(t) >= 0) {
        return JSON.parse(n).content;
      }
      return "";
    }
  }, {
    key: "removeStore",
    value: function removeStore(e) {
      this._storage.removeItem(e);
    }
  }]);
  return Re;
}();
var Ne = {},
  De = {};
function Me(e) {
  return Ne[e];
}
var qe = /*#__PURE__*/(0, _createClass2.default)(function qe(e, t) {
  (0, _classCallCheck2.default)(this, qe);
  this.data = t || null, this.name = e;
});
var Fe = /*#__PURE__*/function (_qe) {
  (0, _inherits2.default)(Fe, _qe);
  var _super3 = _createSuper(Fe);
  function Fe(e, t) {
    var _this8;
    (0, _classCallCheck2.default)(this, Fe);
    _this8 = _super3.call(this, "error", {
      error: e,
      data: t
    }), _this8.error = e;
    return _this8;
  }
  return (0, _createClass2.default)(Fe);
}(qe);
var Ke = new ( /*#__PURE__*/function () {
  function _class() {
    (0, _classCallCheck2.default)(this, _class);
    this._listeners = {};
  }
  (0, _createClass2.default)(_class, [{
    key: "on",
    value: function on(e, t) {
      return function (e, t, n) {
        n[e] = n[e] || [], n[e].push(t);
      }(e, t, this._listeners), this;
    }
  }, {
    key: "off",
    value: function off(e, t) {
      return function (e, t, n) {
        if (n && n[e]) {
          var _s7 = n[e].indexOf(t);
          -1 !== _s7 && n[e].splice(_s7, 1);
        }
      }(e, t, this._listeners), this;
    }
  }, {
    key: "fire",
    value: function fire(e, t) {
      if (e instanceof Fe) return console.error(e.error), this;
      var n = "string" == typeof e ? new qe(e, t || {}) : e;
      var s = n.name;
      if (this._listens(s)) {
        n.target = this;
        var _e8 = this._listeners[s] ? (0, _toConsumableArray2.default)(this._listeners[s]) : [];
        var _iterator2 = _createForOfIteratorHelper(_e8),
          _step2;
        try {
          for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
            var _t6 = _step2.value;
            _t6.call(this, n);
          }
        } catch (err) {
          _iterator2.e(err);
        } finally {
          _iterator2.f();
        }
      }
      return this;
    }
  }, {
    key: "_listens",
    value: function _listens(e) {
      return this._listeners[e] && this._listeners[e].length > 0;
    }
  }]);
  return _class;
}())();
function je(e, t) {
  Ke.on(e, t);
}
function $e(e) {
  var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  Ke.fire(e, t);
}
function Be(e, t) {
  Ke.off(e, t);
}
var We = "loginStateChanged",
  He = "loginStateExpire",
  Je = "loginTypeChanged",
  ze = "anonymousConverted",
  Ve = "refreshAccessToken";
var Ge;
!function (e) {
  e.ANONYMOUS = "ANONYMOUS", e.WECHAT = "WECHAT", e.WECHAT_PUBLIC = "WECHAT-PUBLIC", e.WECHAT_OPEN = "WECHAT-OPEN", e.CUSTOM = "CUSTOM", e.EMAIL = "EMAIL", e.USERNAME = "USERNAME", e.NULL = "NULL";
}(Ge || (Ge = {}));
var Qe = /*#__PURE__*/function () {
  function Qe() {
    (0, _classCallCheck2.default)(this, Qe);
    this._fnPromiseMap = new Map();
  }
  (0, _createClass2.default)(Qe, [{
    key: "run",
    value: function () {
      var _run = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee5(e, t) {
        var _this9 = this;
        var n;
        return _regenerator.default.wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                n = this._fnPromiseMap.get(e);
                return _context5.abrupt("return", (n || (n = new Promise( /*#__PURE__*/function () {
                  var _ref7 = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee4(n, s) {
                    var _s8;
                    return _regenerator.default.wrap(function _callee4$(_context4) {
                      while (1) {
                        switch (_context4.prev = _context4.next) {
                          case 0:
                            _context4.prev = 0;
                            _context4.next = 3;
                            return _this9._runIdlePromise();
                          case 3:
                            _s8 = t();
                            _context4.t0 = n;
                            _context4.next = 7;
                            return _s8;
                          case 7:
                            _context4.t1 = _context4.sent;
                            (0, _context4.t0)(_context4.t1);
                            _context4.next = 14;
                            break;
                          case 11:
                            _context4.prev = 11;
                            _context4.t2 = _context4["catch"](0);
                            s(_context4.t2);
                          case 14:
                            _context4.prev = 14;
                            _this9._fnPromiseMap.delete(e);
                            return _context4.finish(14);
                          case 17:
                          case "end":
                            return _context4.stop();
                        }
                      }
                    }, _callee4, null, [[0, 11, 14, 17]]);
                  }));
                  return function (_x4, _x5) {
                    return _ref7.apply(this, arguments);
                  };
                }()), this._fnPromiseMap.set(e, n)), n));
              case 2:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5, this);
      }));
      function run(_x2, _x3) {
        return _run.apply(this, arguments);
      }
      return run;
    }()
  }, {
    key: "_runIdlePromise",
    value: function _runIdlePromise() {
      return Promise.resolve();
    }
  }]);
  return Qe;
}();
var Ye = /*#__PURE__*/function () {
  function Ye(e) {
    (0, _classCallCheck2.default)(this, Ye);
    this._singlePromise = new Qe(), this._cache = Me(e.env), this._baseURL = "https://".concat(e.env, ".ap-shanghai.tcb-api.tencentcloudapi.com"), this._reqClass = new Ee.adapter.reqClass({
      timeout: e.timeout,
      timeoutMsg: "\u8BF7\u6C42\u5728".concat(e.timeout / 1e3, "s\u5185\u672A\u5B8C\u6210\uFF0C\u5DF2\u4E2D\u65AD"),
      restrictedMethods: ["post"]
    });
  }
  (0, _createClass2.default)(Ye, [{
    key: "_getDeviceId",
    value: function _getDeviceId() {
      if (this._deviceID) return this._deviceID;
      var e = this._cache.keys.deviceIdKey;
      var t = this._cache.getStore(e);
      return "string" == typeof t && t.length >= 16 && t.length <= 48 || (t = Ce(), this._cache.setStore(e, t)), this._deviceID = t, t;
    }
  }, {
    key: "_request",
    value: function () {
      var _request2 = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee6(e, t) {
        var n,
          s,
          _e9,
          _t7,
          _n7,
          _args6 = arguments;
        return _regenerator.default.wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                n = _args6.length > 2 && _args6[2] !== undefined ? _args6[2] : {};
                s = {
                  "x-request-id": Ce(),
                  "x-device-id": this._getDeviceId()
                };
                if (!n.withAccessToken) {
                  _context6.next = 9;
                  break;
                }
                _e9 = this._cache.keys.tokenTypeKey;
                _context6.next = 6;
                return this.getAccessToken();
              case 6:
                _t7 = _context6.sent;
                _n7 = this._cache.getStore(_e9);
                s.authorization = "".concat(_n7, " ").concat(_t7);
              case 9:
                return _context6.abrupt("return", this._reqClass["get" === n.method ? "get" : "post"]({
                  url: "".concat(this._baseURL).concat(e),
                  data: t,
                  headers: s
                }));
              case 10:
              case "end":
                return _context6.stop();
            }
          }
        }, _callee6, this);
      }));
      function _request(_x6, _x7) {
        return _request2.apply(this, arguments);
      }
      return _request;
    }()
  }, {
    key: "_fetchAccessToken",
    value: function () {
      var _fetchAccessToken2 = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee8() {
        var _this10 = this;
        var _this$_cache$keys, e, t, n, s, r, i, o, a, c;
        return _regenerator.default.wrap(function _callee8$(_context8) {
          while (1) {
            switch (_context8.prev = _context8.next) {
              case 0:
                _this$_cache$keys = this._cache.keys, e = _this$_cache$keys.loginTypeKey, t = _this$_cache$keys.accessTokenKey, n = _this$_cache$keys.accessTokenExpireKey, s = _this$_cache$keys.tokenTypeKey, r = this._cache.getStore(e);
                if (!(r && r !== Ge.ANONYMOUS)) {
                  _context8.next = 3;
                  break;
                }
                throw new re({
                  code: "INVALID_OPERATION",
                  message: "非匿名登录不支持刷新 access token"
                });
              case 3:
                _context8.next = 5;
                return this._singlePromise.run("fetchAccessToken", /*#__PURE__*/(0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee7() {
                  return _regenerator.default.wrap(function _callee7$(_context7) {
                    while (1) {
                      switch (_context7.prev = _context7.next) {
                        case 0:
                          _context7.next = 2;
                          return _this10._request("/auth/v1/signin/anonymously", {}, {
                            method: "post"
                          });
                        case 2:
                          return _context7.abrupt("return", _context7.sent.data);
                        case 3:
                        case "end":
                          return _context7.stop();
                      }
                    }
                  }, _callee7);
                })));
              case 5:
                i = _context8.sent;
                o = i.access_token;
                a = i.expires_in;
                c = i.token_type;
                return _context8.abrupt("return", (this._cache.setStore(s, c), this._cache.setStore(t, o), this._cache.setStore(n, Date.now() + 1e3 * a), o));
              case 10:
              case "end":
                return _context8.stop();
            }
          }
        }, _callee8, this);
      }));
      function _fetchAccessToken() {
        return _fetchAccessToken2.apply(this, arguments);
      }
      return _fetchAccessToken;
    }()
  }, {
    key: "isAccessTokenExpired",
    value: function isAccessTokenExpired(e, t) {
      var n = !0;
      return e && t && (n = t < Date.now()), n;
    }
  }, {
    key: "getAccessToken",
    value: function () {
      var _getAccessToken = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee9() {
        var _this$_cache$keys2, e, t, n, s;
        return _regenerator.default.wrap(function _callee9$(_context9) {
          while (1) {
            switch (_context9.prev = _context9.next) {
              case 0:
                _this$_cache$keys2 = this._cache.keys, e = _this$_cache$keys2.accessTokenKey, t = _this$_cache$keys2.accessTokenExpireKey, n = this._cache.getStore(e), s = this._cache.getStore(t);
                return _context9.abrupt("return", this.isAccessTokenExpired(n, s) ? this._fetchAccessToken() : n);
              case 2:
              case "end":
                return _context9.stop();
            }
          }
        }, _callee9, this);
      }));
      function getAccessToken() {
        return _getAccessToken.apply(this, arguments);
      }
      return getAccessToken;
    }()
  }, {
    key: "refreshAccessToken",
    value: function () {
      var _refreshAccessToken = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee10() {
        var _this$_cache$keys3, e, t, n;
        return _regenerator.default.wrap(function _callee10$(_context10) {
          while (1) {
            switch (_context10.prev = _context10.next) {
              case 0:
                _this$_cache$keys3 = this._cache.keys, e = _this$_cache$keys3.accessTokenKey, t = _this$_cache$keys3.accessTokenExpireKey, n = _this$_cache$keys3.loginTypeKey;
                return _context10.abrupt("return", (this._cache.removeStore(e), this._cache.removeStore(t), this._cache.setStore(n, Ge.ANONYMOUS), this.getAccessToken()));
              case 2:
              case "end":
                return _context10.stop();
            }
          }
        }, _callee10, this);
      }));
      function refreshAccessToken() {
        return _refreshAccessToken.apply(this, arguments);
      }
      return refreshAccessToken;
    }()
  }, {
    key: "getUserInfo",
    value: function () {
      var _getUserInfo = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee12() {
        var _this11 = this;
        return _regenerator.default.wrap(function _callee12$(_context12) {
          while (1) {
            switch (_context12.prev = _context12.next) {
              case 0:
                return _context12.abrupt("return", this._singlePromise.run("getUserInfo", /*#__PURE__*/(0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee11() {
                  return _regenerator.default.wrap(function _callee11$(_context11) {
                    while (1) {
                      switch (_context11.prev = _context11.next) {
                        case 0:
                          _context11.next = 2;
                          return _this11._request("/auth/v1/user/me", {}, {
                            withAccessToken: !0,
                            method: "get"
                          });
                        case 2:
                          return _context11.abrupt("return", _context11.sent.data);
                        case 3:
                        case "end":
                          return _context11.stop();
                      }
                    }
                  }, _callee11);
                }))));
              case 1:
              case "end":
                return _context12.stop();
            }
          }
        }, _callee12, this);
      }));
      function getUserInfo() {
        return _getUserInfo.apply(this, arguments);
      }
      return getUserInfo;
    }()
  }]);
  return Ye;
}();
var Xe = ["auth.getJwt", "auth.logout", "auth.signInWithTicket", "auth.signInAnonymously", "auth.signIn", "auth.fetchAccessTokenWithRefreshToken", "auth.signUpWithEmailAndPassword", "auth.activateEndUserMail", "auth.sendPasswordResetEmail", "auth.resetPasswordWithToken", "auth.isUsernameRegistered"],
  Ze = {
    "X-SDK-Version": "1.3.5"
  };
function et(e, t, n) {
  var s = e[t];
  e[t] = function (t) {
    var r = {},
      i = {};
    n.forEach(function (n) {
      var _n$call = n.call(e, t),
        s = _n$call.data,
        o = _n$call.headers;
      Object.assign(r, s), Object.assign(i, o);
    });
    var o = t.data;
    return o && function () {
      var e;
      if (e = o, "[object FormData]" !== Object.prototype.toString.call(e)) t.data = _objectSpread(_objectSpread({}, o), r);else for (var _e10 in r) {
        o.append(_e10, r[_e10]);
      }
    }(), t.headers = _objectSpread(_objectSpread({}, t.headers || {}), i), s.call(e, t);
  };
}
function tt() {
  var e = Math.random().toString(16).slice(2);
  return {
    data: {
      seqId: e
    },
    headers: _objectSpread(_objectSpread({}, Ze), {}, {
      "x-seqid": e
    })
  };
}
var nt = /*#__PURE__*/function () {
  function nt() {
    var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    (0, _classCallCheck2.default)(this, nt);
    var t;
    this.config = e, this._reqClass = new Ee.adapter.reqClass({
      timeout: this.config.timeout,
      timeoutMsg: "\u8BF7\u6C42\u5728".concat(this.config.timeout / 1e3, "s\u5185\u672A\u5B8C\u6210\uFF0C\u5DF2\u4E2D\u65AD"),
      restrictedMethods: ["post"]
    }), this._cache = Me(this.config.env), this._localCache = (t = this.config.env, De[t]), this.oauth = new Ye(this.config), et(this._reqClass, "post", [tt]), et(this._reqClass, "upload", [tt]), et(this._reqClass, "download", [tt]);
  }
  (0, _createClass2.default)(nt, [{
    key: "post",
    value: function () {
      var _post = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee13(e) {
        return _regenerator.default.wrap(function _callee13$(_context13) {
          while (1) {
            switch (_context13.prev = _context13.next) {
              case 0:
                _context13.next = 2;
                return this._reqClass.post(e);
              case 2:
                return _context13.abrupt("return", _context13.sent);
              case 3:
              case "end":
                return _context13.stop();
            }
          }
        }, _callee13, this);
      }));
      function post(_x8) {
        return _post.apply(this, arguments);
      }
      return post;
    }()
  }, {
    key: "upload",
    value: function () {
      var _upload = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee14(e) {
        return _regenerator.default.wrap(function _callee14$(_context14) {
          while (1) {
            switch (_context14.prev = _context14.next) {
              case 0:
                _context14.next = 2;
                return this._reqClass.upload(e);
              case 2:
                return _context14.abrupt("return", _context14.sent);
              case 3:
              case "end":
                return _context14.stop();
            }
          }
        }, _callee14, this);
      }));
      function upload(_x9) {
        return _upload.apply(this, arguments);
      }
      return upload;
    }()
  }, {
    key: "download",
    value: function () {
      var _download = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee15(e) {
        return _regenerator.default.wrap(function _callee15$(_context15) {
          while (1) {
            switch (_context15.prev = _context15.next) {
              case 0:
                _context15.next = 2;
                return this._reqClass.download(e);
              case 2:
                return _context15.abrupt("return", _context15.sent);
              case 3:
              case "end":
                return _context15.stop();
            }
          }
        }, _callee15, this);
      }));
      function download(_x10) {
        return _download.apply(this, arguments);
      }
      return download;
    }()
  }, {
    key: "refreshAccessToken",
    value: function () {
      var _refreshAccessToken2 = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee16() {
        var e, t;
        return _regenerator.default.wrap(function _callee16$(_context16) {
          while (1) {
            switch (_context16.prev = _context16.next) {
              case 0:
                this._refreshAccessTokenPromise || (this._refreshAccessTokenPromise = this._refreshAccessToken());
                _context16.prev = 1;
                _context16.next = 4;
                return this._refreshAccessTokenPromise;
              case 4:
                e = _context16.sent;
                _context16.next = 10;
                break;
              case 7:
                _context16.prev = 7;
                _context16.t0 = _context16["catch"](1);
                t = _context16.t0;
              case 10:
                if (!(this._refreshAccessTokenPromise = null, this._shouldRefreshAccessTokenHook = null, t)) {
                  _context16.next = 12;
                  break;
                }
                throw t;
              case 12:
                return _context16.abrupt("return", e);
              case 13:
              case "end":
                return _context16.stop();
            }
          }
        }, _callee16, this, [[1, 7]]);
      }));
      function refreshAccessToken() {
        return _refreshAccessToken2.apply(this, arguments);
      }
      return refreshAccessToken;
    }()
  }, {
    key: "_refreshAccessToken",
    value: function () {
      var _refreshAccessToken3 = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee17() {
        var _this$_cache$keys4, e, t, n, s, r, i, o, a, _e11, _e12, _t8, _s9;
        return _regenerator.default.wrap(function _callee17$(_context17) {
          while (1) {
            switch (_context17.prev = _context17.next) {
              case 0:
                _this$_cache$keys4 = this._cache.keys, e = _this$_cache$keys4.accessTokenKey, t = _this$_cache$keys4.accessTokenExpireKey, n = _this$_cache$keys4.refreshTokenKey, s = _this$_cache$keys4.loginTypeKey, r = _this$_cache$keys4.anonymousUuidKey;
                this._cache.removeStore(e), this._cache.removeStore(t);
                i = this._cache.getStore(n);
                if (i) {
                  _context17.next = 5;
                  break;
                }
                throw new re({
                  message: "未登录CloudBase"
                });
              case 5:
                o = {
                  refresh_token: i
                };
                _context17.next = 8;
                return this.request("auth.fetchAccessTokenWithRefreshToken", o);
              case 8:
                a = _context17.sent;
                if (!a.data.code) {
                  _context17.next = 21;
                  break;
                }
                _e11 = a.data.code;
                if (!("SIGN_PARAM_INVALID" === _e11 || "REFRESH_TOKEN_EXPIRED" === _e11 || "INVALID_REFRESH_TOKEN" === _e11)) {
                  _context17.next = 20;
                  break;
                }
                if (!(this._cache.getStore(s) === Ge.ANONYMOUS && "INVALID_REFRESH_TOKEN" === _e11)) {
                  _context17.next = 19;
                  break;
                }
                _e12 = this._cache.getStore(r);
                _t8 = this._cache.getStore(n);
                _context17.next = 17;
                return this.send("auth.signInAnonymously", {
                  anonymous_uuid: _e12,
                  refresh_token: _t8
                });
              case 17:
                _s9 = _context17.sent;
                return _context17.abrupt("return", (this.setRefreshToken(_s9.refresh_token), this._refreshAccessToken()));
              case 19:
                $e(He), this._cache.removeStore(n);
              case 20:
                throw new re({
                  code: a.data.code,
                  message: "\u5237\u65B0access token\u5931\u8D25\uFF1A".concat(a.data.code)
                });
              case 21:
                if (!a.data.access_token) {
                  _context17.next = 23;
                  break;
                }
                return _context17.abrupt("return", ($e(Ve), this._cache.setStore(e, a.data.access_token), this._cache.setStore(t, a.data.access_token_expire + Date.now()), {
                  accessToken: a.data.access_token,
                  accessTokenExpire: a.data.access_token_expire
                }));
              case 23:
                a.data.refresh_token && (this._cache.removeStore(n), this._cache.setStore(n, a.data.refresh_token), this._refreshAccessToken());
              case 24:
              case "end":
                return _context17.stop();
            }
          }
        }, _callee17, this);
      }));
      function _refreshAccessToken() {
        return _refreshAccessToken3.apply(this, arguments);
      }
      return _refreshAccessToken;
    }()
  }, {
    key: "getAccessToken",
    value: function () {
      var _getAccessToken2 = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee18() {
        var _this$_cache$keys5, e, t, n, s, r, i;
        return _regenerator.default.wrap(function _callee18$(_context18) {
          while (1) {
            switch (_context18.prev = _context18.next) {
              case 0:
                _this$_cache$keys5 = this._cache.keys, e = _this$_cache$keys5.accessTokenKey, t = _this$_cache$keys5.accessTokenExpireKey, n = _this$_cache$keys5.refreshTokenKey;
                if (this._cache.getStore(n)) {
                  _context18.next = 3;
                  break;
                }
                throw new re({
                  message: "refresh token不存在，登录状态异常"
                });
              case 3:
                s = this._cache.getStore(e), r = this._cache.getStore(t), i = !0;
                _context18.t0 = this._shouldRefreshAccessTokenHook;
                if (!_context18.t0) {
                  _context18.next = 9;
                  break;
                }
                _context18.next = 8;
                return this._shouldRefreshAccessTokenHook(s, r);
              case 8:
                _context18.t0 = !_context18.sent;
              case 9:
                _context18.t1 = _context18.t0;
                if (!_context18.t1) {
                  _context18.next = 12;
                  break;
                }
                i = !1;
              case 12:
                return _context18.abrupt("return", (!s || !r || r < Date.now()) && i ? this.refreshAccessToken() : {
                  accessToken: s,
                  accessTokenExpire: r
                });
              case 13:
              case "end":
                return _context18.stop();
            }
          }
        }, _callee18, this);
      }));
      function getAccessToken() {
        return _getAccessToken2.apply(this, arguments);
      }
      return getAccessToken;
    }()
  }, {
    key: "request",
    value: function () {
      var _request3 = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee19(e, t, n) {
        var s, r, i, o, _e13, _e14, a, c, u, l, h, d, p, f, g;
        return _regenerator.default.wrap(function _callee19$(_context19) {
          while (1) {
            switch (_context19.prev = _context19.next) {
              case 0:
                s = "x-tcb-trace_".concat(this.config.env);
                r = "application/x-www-form-urlencoded";
                i = _objectSpread({
                  action: e,
                  env: this.config.env,
                  dataVersion: "2019-08-16"
                }, t);
                _context19.t0 = -1 === Xe.indexOf(e);
                if (!_context19.t0) {
                  _context19.next = 9;
                  break;
                }
                this._cache.keys;
                _context19.next = 8;
                return this.oauth.getAccessToken();
              case 8:
                i.access_token = _context19.sent;
              case 9:
                if (!("storage.uploadFile" === e)) {
                  _context19.next = 15;
                  break;
                }
                o = new FormData();
                for (_e13 in o) {
                  o.hasOwnProperty(_e13) && void 0 !== o[_e13] && o.append(_e13, i[_e13]);
                }
                r = "multipart/form-data";
                _context19.next = 17;
                break;
              case 15:
                r = "application/json", o = {};
                for (_e14 in i) {
                  void 0 !== i[_e14] && (o[_e14] = i[_e14]);
                }
              case 17:
                a = {
                  headers: {
                    "content-type": r
                  }
                };
                n && n.timeout && (a.timeout = n.timeout), n && n.onUploadProgress && (a.onUploadProgress = n.onUploadProgress);
                c = this._localCache.getStore(s);
                c && (a.headers["X-TCB-Trace"] = c);
                u = t.parse, l = t.inQuery, h = t.search;
                d = {
                  env: this.config.env
                };
                u && (d.parse = !0), l && (d = _objectSpread(_objectSpread({}, l), d));
                p = function (e, t) {
                  var n = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
                  var s = /\?/.test(t);
                  var r = "";
                  for (var _e15 in n) {
                    "" === r ? !s && (t += "?") : r += "&", r += "".concat(_e15, "=").concat(encodeURIComponent(n[_e15]));
                  }
                  return /^http(s)?\:\/\//.test(t += r) ? t : "".concat(e).concat(t);
                }(ye, "//tcb-api.tencentcloudapi.com/web", d);
                h && (p += h);
                _context19.next = 28;
                return this.post(_objectSpread({
                  url: p,
                  data: o
                }, a));
              case 28:
                f = _context19.sent;
                g = f.header && f.header["x-tcb-trace"];
                if (!(g && this._localCache.setStore(s, g), 200 !== Number(f.status) && 200 !== Number(f.statusCode) || !f.data)) {
                  _context19.next = 32;
                  break;
                }
                throw new re({
                  code: "NETWORK_ERROR",
                  message: "network request error"
                });
              case 32:
                return _context19.abrupt("return", f);
              case 33:
              case "end":
                return _context19.stop();
            }
          }
        }, _callee19, this);
      }));
      function request(_x11, _x12, _x13) {
        return _request3.apply(this, arguments);
      }
      return request;
    }()
  }, {
    key: "send",
    value: function () {
      var _send = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee20(e) {
        var t,
          n,
          s,
          _s10,
          _args20 = arguments;
        return _regenerator.default.wrap(function _callee20$(_context20) {
          while (1) {
            switch (_context20.prev = _context20.next) {
              case 0:
                t = _args20.length > 1 && _args20[1] !== undefined ? _args20[1] : {};
                n = _args20.length > 2 && _args20[2] !== undefined ? _args20[2] : {};
                _context20.next = 4;
                return this.request(e, t, _objectSpread(_objectSpread({}, n), {}, {
                  onUploadProgress: t.onUploadProgress
                }));
              case 4:
                s = _context20.sent;
                if (!(("ACCESS_TOKEN_DISABLED" === s.data.code || "ACCESS_TOKEN_EXPIRED" === s.data.code) && -1 === Xe.indexOf(e))) {
                  _context20.next = 14;
                  break;
                }
                _context20.next = 8;
                return this.oauth.refreshAccessToken();
              case 8:
                _context20.next = 10;
                return this.request(e, t, _objectSpread(_objectSpread({}, n), {}, {
                  onUploadProgress: t.onUploadProgress
                }));
              case 10:
                _s10 = _context20.sent;
                if (!_s10.data.code) {
                  _context20.next = 13;
                  break;
                }
                throw new re({
                  code: _s10.data.code,
                  message: Te(_s10.data.message)
                });
              case 13:
                return _context20.abrupt("return", _s10.data);
              case 14:
                if (!s.data.code) {
                  _context20.next = 16;
                  break;
                }
                throw new re({
                  code: s.data.code,
                  message: Te(s.data.message)
                });
              case 16:
                return _context20.abrupt("return", s.data);
              case 17:
              case "end":
                return _context20.stop();
            }
          }
        }, _callee20, this);
      }));
      function send(_x14) {
        return _send.apply(this, arguments);
      }
      return send;
    }()
  }, {
    key: "setRefreshToken",
    value: function setRefreshToken(e) {
      var _this$_cache$keys6 = this._cache.keys,
        t = _this$_cache$keys6.accessTokenKey,
        n = _this$_cache$keys6.accessTokenExpireKey,
        s = _this$_cache$keys6.refreshTokenKey;
      this._cache.removeStore(t), this._cache.removeStore(n), this._cache.setStore(s, e);
    }
  }]);
  return nt;
}();
var st = {};
function rt(e) {
  return st[e];
}
var it = /*#__PURE__*/function () {
  function it(e) {
    (0, _classCallCheck2.default)(this, it);
    this.config = e, this._cache = Me(e.env), this._request = rt(e.env);
  }
  (0, _createClass2.default)(it, [{
    key: "setRefreshToken",
    value: function setRefreshToken(e) {
      var _this$_cache$keys7 = this._cache.keys,
        t = _this$_cache$keys7.accessTokenKey,
        n = _this$_cache$keys7.accessTokenExpireKey,
        s = _this$_cache$keys7.refreshTokenKey;
      this._cache.removeStore(t), this._cache.removeStore(n), this._cache.setStore(s, e);
    }
  }, {
    key: "setAccessToken",
    value: function setAccessToken(e, t) {
      var _this$_cache$keys8 = this._cache.keys,
        n = _this$_cache$keys8.accessTokenKey,
        s = _this$_cache$keys8.accessTokenExpireKey;
      this._cache.setStore(n, e), this._cache.setStore(s, t);
    }
  }, {
    key: "refreshUserInfo",
    value: function () {
      var _refreshUserInfo = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee21() {
        var _yield$this$_request$, e;
        return _regenerator.default.wrap(function _callee21$(_context21) {
          while (1) {
            switch (_context21.prev = _context21.next) {
              case 0:
                _context21.next = 2;
                return this._request.send("auth.getUserInfo", {});
              case 2:
                _yield$this$_request$ = _context21.sent;
                e = _yield$this$_request$.data;
                return _context21.abrupt("return", (this.setLocalUserInfo(e), e));
              case 5:
              case "end":
                return _context21.stop();
            }
          }
        }, _callee21, this);
      }));
      function refreshUserInfo() {
        return _refreshUserInfo.apply(this, arguments);
      }
      return refreshUserInfo;
    }()
  }, {
    key: "setLocalUserInfo",
    value: function setLocalUserInfo(e) {
      var t = this._cache.keys.userInfoKey;
      this._cache.setStore(t, e);
    }
  }]);
  return it;
}();
var ot = /*#__PURE__*/function () {
  function ot(e) {
    (0, _classCallCheck2.default)(this, ot);
    if (!e) throw new re({
      code: "PARAM_ERROR",
      message: "envId is not defined"
    });
    this._envId = e, this._cache = Me(this._envId), this._request = rt(this._envId), this.setUserInfo();
  }
  (0, _createClass2.default)(ot, [{
    key: "linkWithTicket",
    value: function linkWithTicket(e) {
      if ("string" != typeof e) throw new re({
        code: "PARAM_ERROR",
        message: "ticket must be string"
      });
      return this._request.send("auth.linkWithTicket", {
        ticket: e
      });
    }
  }, {
    key: "linkWithRedirect",
    value: function linkWithRedirect(e) {
      e.signInWithRedirect();
    }
  }, {
    key: "updatePassword",
    value: function updatePassword(e, t) {
      return this._request.send("auth.updatePassword", {
        oldPassword: t,
        newPassword: e
      });
    }
  }, {
    key: "updateEmail",
    value: function updateEmail(e) {
      return this._request.send("auth.updateEmail", {
        newEmail: e
      });
    }
  }, {
    key: "updateUsername",
    value: function updateUsername(e) {
      if ("string" != typeof e) throw new re({
        code: "PARAM_ERROR",
        message: "username must be a string"
      });
      return this._request.send("auth.updateUsername", {
        username: e
      });
    }
  }, {
    key: "getLinkedUidList",
    value: function () {
      var _getLinkedUidList = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee22() {
        var _yield$this$_request$2, e, t, n;
        return _regenerator.default.wrap(function _callee22$(_context22) {
          while (1) {
            switch (_context22.prev = _context22.next) {
              case 0:
                _context22.next = 2;
                return this._request.send("auth.getLinkedUidList", {});
              case 2:
                _yield$this$_request$2 = _context22.sent;
                e = _yield$this$_request$2.data;
                t = !1;
                n = e.users;
                return _context22.abrupt("return", (n.forEach(function (e) {
                  e.wxOpenId && e.wxPublicId && (t = !0);
                }), {
                  users: n,
                  hasPrimaryUid: t
                }));
              case 7:
              case "end":
                return _context22.stop();
            }
          }
        }, _callee22, this);
      }));
      function getLinkedUidList() {
        return _getLinkedUidList.apply(this, arguments);
      }
      return getLinkedUidList;
    }()
  }, {
    key: "setPrimaryUid",
    value: function setPrimaryUid(e) {
      return this._request.send("auth.setPrimaryUid", {
        uid: e
      });
    }
  }, {
    key: "unlink",
    value: function unlink(e) {
      return this._request.send("auth.unlink", {
        platform: e
      });
    }
  }, {
    key: "update",
    value: function () {
      var _update = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee23(e) {
        var t, n, s, r, i, o, _yield$this$_request$3, a;
        return _regenerator.default.wrap(function _callee23$(_context23) {
          while (1) {
            switch (_context23.prev = _context23.next) {
              case 0:
                t = e.nickName;
                n = e.gender;
                s = e.avatarUrl;
                r = e.province;
                i = e.country;
                o = e.city;
                _context23.next = 8;
                return this._request.send("auth.updateUserInfo", {
                  nickName: t,
                  gender: n,
                  avatarUrl: s,
                  province: r,
                  country: i,
                  city: o
                });
              case 8:
                _yield$this$_request$3 = _context23.sent;
                a = _yield$this$_request$3.data;
                this.setLocalUserInfo(a);
              case 11:
              case "end":
                return _context23.stop();
            }
          }
        }, _callee23, this);
      }));
      function update(_x15) {
        return _update.apply(this, arguments);
      }
      return update;
    }()
  }, {
    key: "refresh",
    value: function () {
      var _refresh = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee24() {
        var e;
        return _regenerator.default.wrap(function _callee24$(_context24) {
          while (1) {
            switch (_context24.prev = _context24.next) {
              case 0:
                _context24.next = 2;
                return this._request.oauth.getUserInfo();
              case 2:
                e = _context24.sent;
                return _context24.abrupt("return", (this.setLocalUserInfo(e), e));
              case 4:
              case "end":
                return _context24.stop();
            }
          }
        }, _callee24, this);
      }));
      function refresh() {
        return _refresh.apply(this, arguments);
      }
      return refresh;
    }()
  }, {
    key: "setUserInfo",
    value: function setUserInfo() {
      var _this12 = this;
      var e = this._cache.keys.userInfoKey,
        t = this._cache.getStore(e);
      ["uid", "loginType", "openid", "wxOpenId", "wxPublicId", "unionId", "qqMiniOpenId", "email", "hasPassword", "customUserId", "nickName", "gender", "avatarUrl"].forEach(function (e) {
        _this12[e] = t[e];
      }), this.location = {
        country: t.country,
        province: t.province,
        city: t.city
      };
    }
  }, {
    key: "setLocalUserInfo",
    value: function setLocalUserInfo(e) {
      var t = this._cache.keys.userInfoKey;
      this._cache.setStore(t, e), this.setUserInfo();
    }
  }]);
  return ot;
}();
var at = /*#__PURE__*/function () {
  function at(e) {
    (0, _classCallCheck2.default)(this, at);
    if (!e) throw new re({
      code: "PARAM_ERROR",
      message: "envId is not defined"
    });
    this._cache = Me(e);
    var _this$_cache$keys9 = this._cache.keys,
      t = _this$_cache$keys9.refreshTokenKey,
      n = _this$_cache$keys9.accessTokenKey,
      s = _this$_cache$keys9.accessTokenExpireKey,
      r = this._cache.getStore(t),
      i = this._cache.getStore(n),
      o = this._cache.getStore(s);
    this.credential = {
      refreshToken: r,
      accessToken: i,
      accessTokenExpire: o
    }, this.user = new ot(e);
  }
  (0, _createClass2.default)(at, [{
    key: "isAnonymousAuth",
    get: function get() {
      return this.loginType === Ge.ANONYMOUS;
    }
  }, {
    key: "isCustomAuth",
    get: function get() {
      return this.loginType === Ge.CUSTOM;
    }
  }, {
    key: "isWeixinAuth",
    get: function get() {
      return this.loginType === Ge.WECHAT || this.loginType === Ge.WECHAT_OPEN || this.loginType === Ge.WECHAT_PUBLIC;
    }
  }, {
    key: "loginType",
    get: function get() {
      return this._cache.getStore(this._cache.keys.loginTypeKey);
    }
  }]);
  return at;
}();
var ct = /*#__PURE__*/function (_it) {
  (0, _inherits2.default)(ct, _it);
  var _super4 = _createSuper(ct);
  function ct() {
    (0, _classCallCheck2.default)(this, ct);
    return _super4.apply(this, arguments);
  }
  (0, _createClass2.default)(ct, [{
    key: "signIn",
    value: function () {
      var _signIn = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee25() {
        var e;
        return _regenerator.default.wrap(function _callee25$(_context25) {
          while (1) {
            switch (_context25.prev = _context25.next) {
              case 0:
                this._cache.updatePersistence("local");
                _context25.next = 3;
                return this._request.oauth.getAccessToken();
              case 3:
                $e(We);
                $e(Je, {
                  env: this.config.env,
                  loginType: Ge.ANONYMOUS,
                  persistence: "local"
                });
                e = new at(this.config.env);
                _context25.next = 8;
                return e.user.refresh();
              case 8:
                return _context25.abrupt("return", e);
              case 9:
              case "end":
                return _context25.stop();
            }
          }
        }, _callee25, this);
      }));
      function signIn() {
        return _signIn.apply(this, arguments);
      }
      return signIn;
    }()
  }, {
    key: "linkAndRetrieveDataWithTicket",
    value: function () {
      var _linkAndRetrieveDataWithTicket = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee26(e) {
        var _this$_cache$keys10, t, n, s, r, i;
        return _regenerator.default.wrap(function _callee26$(_context26) {
          while (1) {
            switch (_context26.prev = _context26.next) {
              case 0:
                _this$_cache$keys10 = this._cache.keys;
                t = _this$_cache$keys10.anonymousUuidKey;
                n = _this$_cache$keys10.refreshTokenKey;
                s = this._cache.getStore(t);
                r = this._cache.getStore(n);
                _context26.next = 7;
                return this._request.send("auth.linkAndRetrieveDataWithTicket", {
                  anonymous_uuid: s,
                  refresh_token: r,
                  ticket: e
                });
              case 7:
                i = _context26.sent;
                if (!i.refresh_token) {
                  _context26.next = 16;
                  break;
                }
                this._clearAnonymousUUID();
                this.setRefreshToken(i.refresh_token);
                _context26.next = 13;
                return this._request.refreshAccessToken();
              case 13:
                $e(ze, {
                  env: this.config.env
                });
                $e(Je, {
                  loginType: Ge.CUSTOM,
                  persistence: "local"
                });
                return _context26.abrupt("return", {
                  credential: {
                    refreshToken: i.refresh_token
                  }
                });
              case 16:
                throw new re({
                  message: "匿名转化失败"
                });
              case 17:
              case "end":
                return _context26.stop();
            }
          }
        }, _callee26, this);
      }));
      function linkAndRetrieveDataWithTicket(_x16) {
        return _linkAndRetrieveDataWithTicket.apply(this, arguments);
      }
      return linkAndRetrieveDataWithTicket;
    }()
  }, {
    key: "_setAnonymousUUID",
    value: function _setAnonymousUUID(e) {
      var _this$_cache$keys11 = this._cache.keys,
        t = _this$_cache$keys11.anonymousUuidKey,
        n = _this$_cache$keys11.loginTypeKey;
      this._cache.removeStore(t), this._cache.setStore(t, e), this._cache.setStore(n, Ge.ANONYMOUS);
    }
  }, {
    key: "_clearAnonymousUUID",
    value: function _clearAnonymousUUID() {
      this._cache.removeStore(this._cache.keys.anonymousUuidKey);
    }
  }]);
  return ct;
}(it);
var ut = /*#__PURE__*/function (_it2) {
  (0, _inherits2.default)(ut, _it2);
  var _super5 = _createSuper(ut);
  function ut() {
    (0, _classCallCheck2.default)(this, ut);
    return _super5.apply(this, arguments);
  }
  (0, _createClass2.default)(ut, [{
    key: "signIn",
    value: function () {
      var _signIn2 = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee27(e) {
        var t, n;
        return _regenerator.default.wrap(function _callee27$(_context27) {
          while (1) {
            switch (_context27.prev = _context27.next) {
              case 0:
                if (!("string" != typeof e)) {
                  _context27.next = 2;
                  break;
                }
                throw new re({
                  code: "PARAM_ERROR",
                  message: "ticket must be a string"
                });
              case 2:
                t = this._cache.keys.refreshTokenKey;
                _context27.next = 5;
                return this._request.send("auth.signInWithTicket", {
                  ticket: e,
                  refresh_token: this._cache.getStore(t) || ""
                });
              case 5:
                n = _context27.sent;
                if (!n.refresh_token) {
                  _context27.next = 15;
                  break;
                }
                this.setRefreshToken(n.refresh_token);
                _context27.next = 10;
                return this._request.refreshAccessToken();
              case 10:
                $e(We);
                $e(Je, {
                  env: this.config.env,
                  loginType: Ge.CUSTOM,
                  persistence: this.config.persistence
                });
                _context27.next = 14;
                return this.refreshUserInfo();
              case 14:
                return _context27.abrupt("return", new at(this.config.env));
              case 15:
                throw new re({
                  message: "自定义登录失败"
                });
              case 16:
              case "end":
                return _context27.stop();
            }
          }
        }, _callee27, this);
      }));
      function signIn(_x17) {
        return _signIn2.apply(this, arguments);
      }
      return signIn;
    }()
  }]);
  return ut;
}(it);
var lt = /*#__PURE__*/function (_it3) {
  (0, _inherits2.default)(lt, _it3);
  var _super6 = _createSuper(lt);
  function lt() {
    (0, _classCallCheck2.default)(this, lt);
    return _super6.apply(this, arguments);
  }
  (0, _createClass2.default)(lt, [{
    key: "signIn",
    value: function () {
      var _signIn3 = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee28(e, t) {
        var n, s, r, i, o;
        return _regenerator.default.wrap(function _callee28$(_context28) {
          while (1) {
            switch (_context28.prev = _context28.next) {
              case 0:
                if (!("string" != typeof e)) {
                  _context28.next = 2;
                  break;
                }
                throw new re({
                  code: "PARAM_ERROR",
                  message: "email must be a string"
                });
              case 2:
                n = this._cache.keys.refreshTokenKey;
                _context28.next = 5;
                return this._request.send("auth.signIn", {
                  loginType: "EMAIL",
                  email: e,
                  password: t,
                  refresh_token: this._cache.getStore(n) || ""
                });
              case 5:
                s = _context28.sent;
                r = s.refresh_token;
                i = s.access_token;
                o = s.access_token_expire;
                if (!r) {
                  _context28.next = 22;
                  break;
                }
                this.setRefreshToken(r);
                if (!(i && o)) {
                  _context28.next = 15;
                  break;
                }
                this.setAccessToken(i, o);
                _context28.next = 17;
                break;
              case 15:
                _context28.next = 17;
                return this._request.refreshAccessToken();
              case 17:
                _context28.next = 19;
                return this.refreshUserInfo();
              case 19:
                $e(We);
                $e(Je, {
                  env: this.config.env,
                  loginType: Ge.EMAIL,
                  persistence: this.config.persistence
                });
                return _context28.abrupt("return", new at(this.config.env));
              case 22:
                throw s.code ? new re({
                  code: s.code,
                  message: "\u90AE\u7BB1\u767B\u5F55\u5931\u8D25: ".concat(s.message)
                }) : new re({
                  message: "邮箱登录失败"
                });
              case 23:
              case "end":
                return _context28.stop();
            }
          }
        }, _callee28, this);
      }));
      function signIn(_x18, _x19) {
        return _signIn3.apply(this, arguments);
      }
      return signIn;
    }()
  }, {
    key: "activate",
    value: function () {
      var _activate = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee29(e) {
        return _regenerator.default.wrap(function _callee29$(_context29) {
          while (1) {
            switch (_context29.prev = _context29.next) {
              case 0:
                return _context29.abrupt("return", this._request.send("auth.activateEndUserMail", {
                  token: e
                }));
              case 1:
              case "end":
                return _context29.stop();
            }
          }
        }, _callee29, this);
      }));
      function activate(_x20) {
        return _activate.apply(this, arguments);
      }
      return activate;
    }()
  }, {
    key: "resetPasswordWithToken",
    value: function () {
      var _resetPasswordWithToken = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee30(e, t) {
        return _regenerator.default.wrap(function _callee30$(_context30) {
          while (1) {
            switch (_context30.prev = _context30.next) {
              case 0:
                return _context30.abrupt("return", this._request.send("auth.resetPasswordWithToken", {
                  token: e,
                  newPassword: t
                }));
              case 1:
              case "end":
                return _context30.stop();
            }
          }
        }, _callee30, this);
      }));
      function resetPasswordWithToken(_x21, _x22) {
        return _resetPasswordWithToken.apply(this, arguments);
      }
      return resetPasswordWithToken;
    }()
  }]);
  return lt;
}(it);
var ht = /*#__PURE__*/function (_it4) {
  (0, _inherits2.default)(ht, _it4);
  var _super7 = _createSuper(ht);
  function ht() {
    (0, _classCallCheck2.default)(this, ht);
    return _super7.apply(this, arguments);
  }
  (0, _createClass2.default)(ht, [{
    key: "signIn",
    value: function () {
      var _signIn4 = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee31(e, t) {
        var n, s, r, i, o;
        return _regenerator.default.wrap(function _callee31$(_context31) {
          while (1) {
            switch (_context31.prev = _context31.next) {
              case 0:
                if (!("string" != typeof e)) {
                  _context31.next = 2;
                  break;
                }
                throw new re({
                  code: "PARAM_ERROR",
                  message: "username must be a string"
                });
              case 2:
                "string" != typeof t && (t = "", console.warn("password is empty"));
                n = this._cache.keys.refreshTokenKey;
                _context31.next = 6;
                return this._request.send("auth.signIn", {
                  loginType: Ge.USERNAME,
                  username: e,
                  password: t,
                  refresh_token: this._cache.getStore(n) || ""
                });
              case 6:
                s = _context31.sent;
                r = s.refresh_token;
                i = s.access_token_expire;
                o = s.access_token;
                if (!r) {
                  _context31.next = 23;
                  break;
                }
                this.setRefreshToken(r);
                if (!(o && i)) {
                  _context31.next = 16;
                  break;
                }
                this.setAccessToken(o, i);
                _context31.next = 18;
                break;
              case 16:
                _context31.next = 18;
                return this._request.refreshAccessToken();
              case 18:
                _context31.next = 20;
                return this.refreshUserInfo();
              case 20:
                $e(We);
                $e(Je, {
                  env: this.config.env,
                  loginType: Ge.USERNAME,
                  persistence: this.config.persistence
                });
                return _context31.abrupt("return", new at(this.config.env));
              case 23:
                throw s.code ? new re({
                  code: s.code,
                  message: "\u7528\u6237\u540D\u5BC6\u7801\u767B\u5F55\u5931\u8D25: ".concat(s.message)
                }) : new re({
                  message: "用户名密码登录失败"
                });
              case 24:
              case "end":
                return _context31.stop();
            }
          }
        }, _callee31, this);
      }));
      function signIn(_x23, _x24) {
        return _signIn4.apply(this, arguments);
      }
      return signIn;
    }()
  }]);
  return ht;
}(it);
var dt = /*#__PURE__*/function () {
  function dt(e) {
    (0, _classCallCheck2.default)(this, dt);
    this.config = e, this._cache = Me(e.env), this._request = rt(e.env), this._onAnonymousConverted = this._onAnonymousConverted.bind(this), this._onLoginTypeChanged = this._onLoginTypeChanged.bind(this), je(Je, this._onLoginTypeChanged);
  }
  (0, _createClass2.default)(dt, [{
    key: "currentUser",
    get: function get() {
      var e = this.hasLoginState();
      return e && e.user || null;
    }
  }, {
    key: "loginType",
    get: function get() {
      return this._cache.getStore(this._cache.keys.loginTypeKey);
    }
  }, {
    key: "anonymousAuthProvider",
    value: function anonymousAuthProvider() {
      return new ct(this.config);
    }
  }, {
    key: "customAuthProvider",
    value: function customAuthProvider() {
      return new ut(this.config);
    }
  }, {
    key: "emailAuthProvider",
    value: function emailAuthProvider() {
      return new lt(this.config);
    }
  }, {
    key: "usernameAuthProvider",
    value: function usernameAuthProvider() {
      return new ht(this.config);
    }
  }, {
    key: "signInAnonymously",
    value: function () {
      var _signInAnonymously = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee32() {
        return _regenerator.default.wrap(function _callee32$(_context32) {
          while (1) {
            switch (_context32.prev = _context32.next) {
              case 0:
                return _context32.abrupt("return", new ct(this.config).signIn());
              case 1:
              case "end":
                return _context32.stop();
            }
          }
        }, _callee32, this);
      }));
      function signInAnonymously() {
        return _signInAnonymously.apply(this, arguments);
      }
      return signInAnonymously;
    }()
  }, {
    key: "signInWithEmailAndPassword",
    value: function () {
      var _signInWithEmailAndPassword = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee33(e, t) {
        return _regenerator.default.wrap(function _callee33$(_context33) {
          while (1) {
            switch (_context33.prev = _context33.next) {
              case 0:
                return _context33.abrupt("return", new lt(this.config).signIn(e, t));
              case 1:
              case "end":
                return _context33.stop();
            }
          }
        }, _callee33, this);
      }));
      function signInWithEmailAndPassword(_x25, _x26) {
        return _signInWithEmailAndPassword.apply(this, arguments);
      }
      return signInWithEmailAndPassword;
    }()
  }, {
    key: "signInWithUsernameAndPassword",
    value: function signInWithUsernameAndPassword(e, t) {
      return new ht(this.config).signIn(e, t);
    }
  }, {
    key: "linkAndRetrieveDataWithTicket",
    value: function () {
      var _linkAndRetrieveDataWithTicket2 = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee34(e) {
        return _regenerator.default.wrap(function _callee34$(_context34) {
          while (1) {
            switch (_context34.prev = _context34.next) {
              case 0:
                this._anonymousAuthProvider || (this._anonymousAuthProvider = new ct(this.config)), je(ze, this._onAnonymousConverted);
                _context34.next = 3;
                return this._anonymousAuthProvider.linkAndRetrieveDataWithTicket(e);
              case 3:
                return _context34.abrupt("return", _context34.sent);
              case 4:
              case "end":
                return _context34.stop();
            }
          }
        }, _callee34, this);
      }));
      function linkAndRetrieveDataWithTicket(_x27) {
        return _linkAndRetrieveDataWithTicket2.apply(this, arguments);
      }
      return linkAndRetrieveDataWithTicket;
    }()
  }, {
    key: "signOut",
    value: function () {
      var _signOut = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee35() {
        var _this$_cache$keys12, e, t, n, s, r;
        return _regenerator.default.wrap(function _callee35$(_context35) {
          while (1) {
            switch (_context35.prev = _context35.next) {
              case 0:
                if (!(this.loginType === Ge.ANONYMOUS)) {
                  _context35.next = 2;
                  break;
                }
                throw new re({
                  message: "匿名用户不支持登出操作"
                });
              case 2:
                _this$_cache$keys12 = this._cache.keys, e = _this$_cache$keys12.refreshTokenKey, t = _this$_cache$keys12.accessTokenKey, n = _this$_cache$keys12.accessTokenExpireKey, s = this._cache.getStore(e);
                if (s) {
                  _context35.next = 5;
                  break;
                }
                return _context35.abrupt("return");
              case 5:
                _context35.next = 7;
                return this._request.send("auth.logout", {
                  refresh_token: s
                });
              case 7:
                r = _context35.sent;
                return _context35.abrupt("return", (this._cache.removeStore(e), this._cache.removeStore(t), this._cache.removeStore(n), $e(We), $e(Je, {
                  env: this.config.env,
                  loginType: Ge.NULL,
                  persistence: this.config.persistence
                }), r));
              case 9:
              case "end":
                return _context35.stop();
            }
          }
        }, _callee35, this);
      }));
      function signOut() {
        return _signOut.apply(this, arguments);
      }
      return signOut;
    }()
  }, {
    key: "signUpWithEmailAndPassword",
    value: function () {
      var _signUpWithEmailAndPassword = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee36(e, t) {
        return _regenerator.default.wrap(function _callee36$(_context36) {
          while (1) {
            switch (_context36.prev = _context36.next) {
              case 0:
                return _context36.abrupt("return", this._request.send("auth.signUpWithEmailAndPassword", {
                  email: e,
                  password: t
                }));
              case 1:
              case "end":
                return _context36.stop();
            }
          }
        }, _callee36, this);
      }));
      function signUpWithEmailAndPassword(_x28, _x29) {
        return _signUpWithEmailAndPassword.apply(this, arguments);
      }
      return signUpWithEmailAndPassword;
    }()
  }, {
    key: "sendPasswordResetEmail",
    value: function () {
      var _sendPasswordResetEmail = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee37(e) {
        return _regenerator.default.wrap(function _callee37$(_context37) {
          while (1) {
            switch (_context37.prev = _context37.next) {
              case 0:
                return _context37.abrupt("return", this._request.send("auth.sendPasswordResetEmail", {
                  email: e
                }));
              case 1:
              case "end":
                return _context37.stop();
            }
          }
        }, _callee37, this);
      }));
      function sendPasswordResetEmail(_x30) {
        return _sendPasswordResetEmail.apply(this, arguments);
      }
      return sendPasswordResetEmail;
    }()
  }, {
    key: "onLoginStateChanged",
    value: function onLoginStateChanged(e) {
      var _this13 = this;
      je(We, function () {
        var t = _this13.hasLoginState();
        e.call(_this13, t);
      });
      var t = this.hasLoginState();
      e.call(this, t);
    }
  }, {
    key: "onLoginStateExpired",
    value: function onLoginStateExpired(e) {
      je(He, e.bind(this));
    }
  }, {
    key: "onAccessTokenRefreshed",
    value: function onAccessTokenRefreshed(e) {
      je(Ve, e.bind(this));
    }
  }, {
    key: "onAnonymousConverted",
    value: function onAnonymousConverted(e) {
      je(ze, e.bind(this));
    }
  }, {
    key: "onLoginTypeChanged",
    value: function onLoginTypeChanged(e) {
      var _this14 = this;
      je(Je, function () {
        var t = _this14.hasLoginState();
        e.call(_this14, t);
      });
    }
  }, {
    key: "getAccessToken",
    value: function () {
      var _getAccessToken3 = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee38() {
        return _regenerator.default.wrap(function _callee38$(_context38) {
          while (1) {
            switch (_context38.prev = _context38.next) {
              case 0:
                _context38.next = 2;
                return this._request.getAccessToken();
              case 2:
                _context38.t0 = _context38.sent.accessToken;
                _context38.t1 = this.config.env;
                return _context38.abrupt("return", {
                  accessToken: _context38.t0,
                  env: _context38.t1
                });
              case 5:
              case "end":
                return _context38.stop();
            }
          }
        }, _callee38, this);
      }));
      function getAccessToken() {
        return _getAccessToken3.apply(this, arguments);
      }
      return getAccessToken;
    }()
  }, {
    key: "hasLoginState",
    value: function hasLoginState() {
      var _this$_cache$keys13 = this._cache.keys,
        e = _this$_cache$keys13.accessTokenKey,
        t = _this$_cache$keys13.accessTokenExpireKey,
        n = this._cache.getStore(e),
        s = this._cache.getStore(t);
      return this._request.oauth.isAccessTokenExpired(n, s) ? null : new at(this.config.env);
    }
  }, {
    key: "isUsernameRegistered",
    value: function () {
      var _isUsernameRegistered = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee39(e) {
        var _yield$this$_request$4, t;
        return _regenerator.default.wrap(function _callee39$(_context39) {
          while (1) {
            switch (_context39.prev = _context39.next) {
              case 0:
                if (!("string" != typeof e)) {
                  _context39.next = 2;
                  break;
                }
                throw new re({
                  code: "PARAM_ERROR",
                  message: "username must be a string"
                });
              case 2:
                _context39.next = 4;
                return this._request.send("auth.isUsernameRegistered", {
                  username: e
                });
              case 4:
                _yield$this$_request$4 = _context39.sent;
                t = _yield$this$_request$4.data;
                return _context39.abrupt("return", t && t.isRegistered);
              case 7:
              case "end":
                return _context39.stop();
            }
          }
        }, _callee39, this);
      }));
      function isUsernameRegistered(_x31) {
        return _isUsernameRegistered.apply(this, arguments);
      }
      return isUsernameRegistered;
    }()
  }, {
    key: "getLoginState",
    value: function getLoginState() {
      return Promise.resolve(this.hasLoginState());
    }
  }, {
    key: "signInWithTicket",
    value: function () {
      var _signInWithTicket = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee40(e) {
        return _regenerator.default.wrap(function _callee40$(_context40) {
          while (1) {
            switch (_context40.prev = _context40.next) {
              case 0:
                return _context40.abrupt("return", new ut(this.config).signIn(e));
              case 1:
              case "end":
                return _context40.stop();
            }
          }
        }, _callee40, this);
      }));
      function signInWithTicket(_x32) {
        return _signInWithTicket.apply(this, arguments);
      }
      return signInWithTicket;
    }()
  }, {
    key: "shouldRefreshAccessToken",
    value: function shouldRefreshAccessToken(e) {
      this._request._shouldRefreshAccessTokenHook = e.bind(this);
    }
  }, {
    key: "getUserInfo",
    value: function getUserInfo() {
      return this._request.send("auth.getUserInfo", {}).then(function (e) {
        return e.code ? e : _objectSpread(_objectSpread({}, e.data), {}, {
          requestId: e.seqId
        });
      });
    }
  }, {
    key: "getAuthHeader",
    value: function getAuthHeader() {
      var _this$_cache$keys14 = this._cache.keys,
        e = _this$_cache$keys14.refreshTokenKey,
        t = _this$_cache$keys14.accessTokenKey,
        n = this._cache.getStore(e);
      return {
        "x-cloudbase-credentials": this._cache.getStore(t) + "/@@/" + n
      };
    }
  }, {
    key: "_onAnonymousConverted",
    value: function _onAnonymousConverted(e) {
      var t = e.data.env;
      t === this.config.env && this._cache.updatePersistence(this.config.persistence);
    }
  }, {
    key: "_onLoginTypeChanged",
    value: function _onLoginTypeChanged(e) {
      var _e$data = e.data,
        t = _e$data.loginType,
        n = _e$data.persistence,
        s = _e$data.env;
      s === this.config.env && (this._cache.updatePersistence(n), this._cache.setStore(this._cache.keys.loginTypeKey, t));
    }
  }]);
  return dt;
}();
var pt = function pt(e, t) {
    t = t || be();
    var n = rt(this.config.env),
      s = e.cloudPath,
      r = e.filePath,
      i = e.onUploadProgress,
      _e$fileType = e.fileType,
      o = _e$fileType === void 0 ? "image" : _e$fileType;
    return n.send("storage.getUploadMetadata", {
      path: s
    }).then(function (e) {
      var _e$data2 = e.data,
        a = _e$data2.url,
        c = _e$data2.authorization,
        u = _e$data2.token,
        l = _e$data2.fileId,
        h = _e$data2.cosFileId,
        d = e.requestId,
        p = {
          key: s,
          signature: c,
          "x-cos-meta-fileid": h,
          success_action_status: "201",
          "x-cos-security-token": u
        };
      n.upload({
        url: a,
        data: p,
        file: r,
        name: s,
        fileType: o,
        onUploadProgress: i
      }).then(function (e) {
        201 === e.statusCode ? t(null, {
          fileID: l,
          requestId: d
        }) : t(new re({
          code: "STORAGE_REQUEST_FAIL",
          message: "STORAGE_REQUEST_FAIL: ".concat(e.data)
        }));
      }).catch(function (e) {
        t(e);
      });
    }).catch(function (e) {
      t(e);
    }), t.promise;
  },
  ft = function ft(e, t) {
    t = t || be();
    var n = rt(this.config.env),
      s = e.cloudPath;
    return n.send("storage.getUploadMetadata", {
      path: s
    }).then(function (e) {
      t(null, e);
    }).catch(function (e) {
      t(e);
    }), t.promise;
  },
  gt = function gt(_ref10, t) {
    var e = _ref10.fileList;
    if (t = t || be(), !e || !Array.isArray(e)) return {
      code: "INVALID_PARAM",
      message: "fileList必须是非空的数组"
    };
    var _iterator3 = _createForOfIteratorHelper(e),
      _step3;
    try {
      for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
        var _t9 = _step3.value;
        if (!_t9 || "string" != typeof _t9) return {
          code: "INVALID_PARAM",
          message: "fileList的元素必须是非空的字符串"
        };
      }
    } catch (err) {
      _iterator3.e(err);
    } finally {
      _iterator3.f();
    }
    var n = {
      fileid_list: e
    };
    return rt(this.config.env).send("storage.batchDeleteFile", n).then(function (e) {
      e.code ? t(null, e) : t(null, {
        fileList: e.data.delete_list,
        requestId: e.requestId
      });
    }).catch(function (e) {
      t(e);
    }), t.promise;
  },
  mt = function mt(_ref11, t) {
    var e = _ref11.fileList;
    t = t || be(), e && Array.isArray(e) || t(null, {
      code: "INVALID_PARAM",
      message: "fileList必须是非空的数组"
    });
    var n = [];
    var _iterator4 = _createForOfIteratorHelper(e),
      _step4;
    try {
      for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
        var _s11 = _step4.value;
        "object" == (0, _typeof2.default)(_s11) ? (_s11.hasOwnProperty("fileID") && _s11.hasOwnProperty("maxAge") || t(null, {
          code: "INVALID_PARAM",
          message: "fileList的元素必须是包含fileID和maxAge的对象"
        }), n.push({
          fileid: _s11.fileID,
          max_age: _s11.maxAge
        })) : "string" == typeof _s11 ? n.push({
          fileid: _s11
        }) : t(null, {
          code: "INVALID_PARAM",
          message: "fileList的元素必须是字符串"
        });
      }
    } catch (err) {
      _iterator4.e(err);
    } finally {
      _iterator4.f();
    }
    var s = {
      file_list: n
    };
    return rt(this.config.env).send("storage.batchGetDownloadUrl", s).then(function (e) {
      e.code ? t(null, e) : t(null, {
        fileList: e.data.download_list,
        requestId: e.requestId
      });
    }).catch(function (e) {
      t(e);
    }), t.promise;
  },
  yt = /*#__PURE__*/function () {
    var _ref13 = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee41(_ref12, t) {
      var e, n, s, r;
      return _regenerator.default.wrap(function _callee41$(_context41) {
        while (1) {
          switch (_context41.prev = _context41.next) {
            case 0:
              e = _ref12.fileID;
              _context41.next = 3;
              return mt.call(this, {
                fileList: [{
                  fileID: e,
                  maxAge: 600
                }]
              });
            case 3:
              n = _context41.sent.fileList[0];
              if (!("SUCCESS" !== n.code)) {
                _context41.next = 6;
                break;
              }
              return _context41.abrupt("return", t ? t(n) : new Promise(function (e) {
                e(n);
              }));
            case 6:
              s = rt(this.config.env);
              r = n.download_url;
              if (!(r = encodeURI(r), !t)) {
                _context41.next = 10;
                break;
              }
              return _context41.abrupt("return", s.download({
                url: r
              }));
            case 10:
              _context41.t0 = t;
              _context41.next = 13;
              return s.download({
                url: r
              });
            case 13:
              _context41.t1 = _context41.sent;
              (0, _context41.t0)(_context41.t1);
            case 15:
            case "end":
              return _context41.stop();
          }
        }
      }, _callee41, this);
    }));
    return function yt(_x33, _x34) {
      return _ref13.apply(this, arguments);
    };
  }(),
  _t = function _t(_ref14, o) {
    var e = _ref14.name,
      t = _ref14.data,
      n = _ref14.query,
      s = _ref14.parse,
      r = _ref14.search,
      i = _ref14.timeout;
    var a = o || be();
    var c;
    try {
      c = t ? JSON.stringify(t) : "";
    } catch (e) {
      return Promise.reject(e);
    }
    if (!e) return Promise.reject(new re({
      code: "PARAM_ERROR",
      message: "函数名不能为空"
    }));
    var u = {
      inQuery: n,
      parse: s,
      search: r,
      function_name: e,
      request_data: c
    };
    return rt(this.config.env).send("functions.invokeFunction", u, {
      timeout: i
    }).then(function (e) {
      if (e.code) a(null, e);else {
        var _t10 = e.data.response_data;
        if (s) a(null, {
          result: _t10,
          requestId: e.requestId
        });else try {
          _t10 = JSON.parse(e.data.response_data), a(null, {
            result: _t10,
            requestId: e.requestId
          });
        } catch (e) {
          a(new re({
            message: "response data must be json"
          }));
        }
      }
      return a.promise;
    }).catch(function (e) {
      a(e);
    }), a.promise;
  },
  wt = {
    timeout: 15e3,
    persistence: "session"
  },
  vt = {};
var It = /*#__PURE__*/function () {
  function It(e) {
    (0, _classCallCheck2.default)(this, It);
    this.config = e || this.config, this.authObj = void 0;
  }
  (0, _createClass2.default)(It, [{
    key: "init",
    value: function init(e) {
      switch (Ee.adapter || (this.requestClient = new Ee.adapter.reqClass({
        timeout: e.timeout || 5e3,
        timeoutMsg: "\u8BF7\u6C42\u5728".concat((e.timeout || 5e3) / 1e3, "s\u5185\u672A\u5B8C\u6210\uFF0C\u5DF2\u4E2D\u65AD")
      })), this.config = _objectSpread(_objectSpread({}, wt), e), !0) {
        case this.config.timeout > 6e5:
          console.warn("timeout大于可配置上限[10分钟]，已重置为上限数值"), this.config.timeout = 6e5;
          break;
        case this.config.timeout < 100:
          console.warn("timeout小于可配置下限[100ms]，已重置为下限数值"), this.config.timeout = 100;
      }
      return new It(this.config);
    }
  }, {
    key: "auth",
    value: function auth() {
      var _ref15 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
        e = _ref15.persistence;
      if (this.authObj) return this.authObj;
      var t = e || Ee.adapter.primaryStorage || wt.persistence;
      var n;
      return t !== this.config.persistence && (this.config.persistence = t), function (e) {
        var t = e.env;
        Ne[t] = new Re(e), De[t] = new Re(_objectSpread(_objectSpread({}, e), {}, {
          persistence: "local"
        }));
      }(this.config), n = this.config, st[n.env] = new nt(n), this.authObj = new dt(this.config), this.authObj;
    }
  }, {
    key: "on",
    value: function on(e, t) {
      return je.apply(this, [e, t]);
    }
  }, {
    key: "off",
    value: function off(e, t) {
      return Be.apply(this, [e, t]);
    }
  }, {
    key: "callFunction",
    value: function callFunction(e, t) {
      return _t.apply(this, [e, t]);
    }
  }, {
    key: "deleteFile",
    value: function deleteFile(e, t) {
      return gt.apply(this, [e, t]);
    }
  }, {
    key: "getTempFileURL",
    value: function getTempFileURL(e, t) {
      return mt.apply(this, [e, t]);
    }
  }, {
    key: "downloadFile",
    value: function downloadFile(e, t) {
      return yt.apply(this, [e, t]);
    }
  }, {
    key: "uploadFile",
    value: function uploadFile(e, t) {
      return pt.apply(this, [e, t]);
    }
  }, {
    key: "getUploadMetadata",
    value: function getUploadMetadata(e, t) {
      return ft.apply(this, [e, t]);
    }
  }, {
    key: "registerExtension",
    value: function registerExtension(e) {
      vt[e.name] = e;
    }
  }, {
    key: "invokeExtension",
    value: function () {
      var _invokeExtension = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee42(e, t) {
        var n;
        return _regenerator.default.wrap(function _callee42$(_context42) {
          while (1) {
            switch (_context42.prev = _context42.next) {
              case 0:
                n = vt[e];
                if (n) {
                  _context42.next = 3;
                  break;
                }
                throw new re({
                  message: "\u6269\u5C55".concat(e, " \u5FC5\u987B\u5148\u6CE8\u518C")
                });
              case 3:
                _context42.next = 5;
                return n.invoke(t, this);
              case 5:
                return _context42.abrupt("return", _context42.sent);
              case 6:
              case "end":
                return _context42.stop();
            }
          }
        }, _callee42, this);
      }));
      function invokeExtension(_x35, _x36) {
        return _invokeExtension.apply(this, arguments);
      }
      return invokeExtension;
    }()
  }, {
    key: "useAdapters",
    value: function useAdapters(e) {
      var _ref16 = Oe(e) || {},
        t = _ref16.adapter,
        n = _ref16.runtime;
      t && (Ee.adapter = t), n && (Ee.runtime = n);
    }
  }]);
  return It;
}();
var St = new It();
function bt(e, t, n) {
  void 0 === n && (n = {});
  var s = /\?/.test(t),
    r = "";
  for (var i in n) {
    "" === r ? !s && (t += "?") : r += "&", r += i + "=" + encodeURIComponent(n[i]);
  }
  return /^http(s)?:\/\//.test(t += r) ? t : "" + e + t;
}
var kt = /*#__PURE__*/function () {
  function kt() {
    (0, _classCallCheck2.default)(this, kt);
  }
  (0, _createClass2.default)(kt, [{
    key: "get",
    value: function get(e) {
      var t = e.url,
        n = e.data,
        s = e.headers,
        r = e.timeout;
      return new Promise(function (e, i) {
        ie.request({
          url: bt("https:", t),
          data: n,
          method: "GET",
          header: s,
          timeout: r,
          success: function success(t) {
            e(t);
          },
          fail: function fail(e) {
            i(e);
          }
        });
      });
    }
  }, {
    key: "post",
    value: function post(e) {
      var t = e.url,
        n = e.data,
        s = e.headers,
        r = e.timeout;
      return new Promise(function (e, i) {
        ie.request({
          url: bt("https:", t),
          data: n,
          method: "POST",
          header: s,
          timeout: r,
          success: function success(t) {
            e(t);
          },
          fail: function fail(e) {
            i(e);
          }
        });
      });
    }
  }, {
    key: "upload",
    value: function upload(e) {
      return new Promise(function (t, n) {
        var s = e.url,
          r = e.file,
          i = e.data,
          o = e.headers,
          a = e.fileType,
          c = ie.uploadFile({
            url: bt("https:", s),
            name: "file",
            formData: Object.assign({}, i),
            filePath: r,
            fileType: a,
            header: o,
            success: function success(e) {
              var n = {
                statusCode: e.statusCode,
                data: e.data || {}
              };
              200 === e.statusCode && i.success_action_status && (n.statusCode = parseInt(i.success_action_status, 10)), t(n);
            },
            fail: function fail(e) {
              n(new Error(e.errMsg || "uploadFile:fail"));
            }
          });
        "function" == typeof e.onUploadProgress && c && "function" == typeof c.onProgressUpdate && c.onProgressUpdate(function (t) {
          e.onUploadProgress({
            loaded: t.totalBytesSent,
            total: t.totalBytesExpectedToSend
          });
        });
      });
    }
  }]);
  return kt;
}();
var At = {
  setItem: function setItem(e, t) {
    ie.setStorageSync(e, t);
  },
  getItem: function getItem(e) {
    return ie.getStorageSync(e);
  },
  removeItem: function removeItem(e) {
    ie.removeStorageSync(e);
  },
  clear: function clear() {
    ie.clearStorageSync();
  }
};
var Tt = {
  genAdapter: function genAdapter() {
    return {
      root: {},
      reqClass: kt,
      localStorage: At,
      primaryStorage: "local"
    };
  },
  isMatch: function isMatch() {
    return !0;
  },
  runtime: "uni_app"
};
St.useAdapters(Tt);
var Ct = St,
  Pt = Ct.init;
Ct.init = function (e) {
  e.env = e.spaceId;
  var t = Pt.call(this, e);
  t.config.provider = "tencent", t.config.spaceId = e.spaceId;
  var n = t.auth;
  return t.auth = function (e) {
    var t = n.call(this, e);
    return ["linkAndRetrieveDataWithTicket", "signInAnonymously", "signOut", "getAccessToken", "getLoginState", "signInWithTicket", "getUserInfo"].forEach(function (e) {
      var n;
      t[e] = (n = t[e], function (e) {
        e = e || {};
        var _se = se(e),
          t = _se.success,
          s = _se.fail,
          r = _se.complete;
        if (!(t || s || r)) return n.call(this, e);
        n.call(this, e).then(function (e) {
          t && t(e), r && r(e);
        }, function (e) {
          s && s(e), r && r(e);
        });
      }).bind(t);
    }), t;
  }, t.customAuth = t.auth, t;
};
var Ot = Ct;
function Et(_x37, _x38) {
  return _Et.apply(this, arguments);
}
function _Et() {
  _Et = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee68(e, t) {
    var n, _e31, s;
    return _regenerator.default.wrap(function _callee68$(_context68) {
      while (1) {
        switch (_context68.prev = _context68.next) {
          case 0:
            n = "http://".concat(e, ":").concat(t, "/system/ping");
            _context68.prev = 1;
            _context68.next = 4;
            return s = {
              url: n,
              timeout: 500
            }, new Promise(function (e, t) {
              ie.request(_objectSpread(_objectSpread({}, s), {}, {
                success: function success(t) {
                  e(t);
                },
                fail: function fail(e) {
                  t(e);
                }
              }));
            });
          case 4:
            _e31 = _context68.sent;
            return _context68.abrupt("return", !(!_e31.data || 0 !== _e31.data.code));
          case 8:
            _context68.prev = 8;
            _context68.t0 = _context68["catch"](1);
            return _context68.abrupt("return", !1);
          case 11:
          case "end":
            return _context68.stop();
        }
      }
    }, _callee68, null, [[1, 8]]);
  }));
  return _Et.apply(this, arguments);
}
function xt(_x39, _x40) {
  return _xt.apply(this, arguments);
}
function _xt() {
  _xt = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee69(e, t) {
    var n, s, _r11;
    return _regenerator.default.wrap(function _callee69$(_context69) {
      while (1) {
        switch (_context69.prev = _context69.next) {
          case 0:
            s = 0;
          case 1:
            if (!(s < e.length)) {
              _context69.next = 11;
              break;
            }
            _r11 = e[s];
            _context69.next = 5;
            return Et(_r11, t);
          case 5:
            if (!_context69.sent) {
              _context69.next = 8;
              break;
            }
            n = _r11;
            return _context69.abrupt("break", 11);
          case 8:
            s++;
            _context69.next = 1;
            break;
          case 11:
            return _context69.abrupt("return", {
              address: n,
              port: t
            });
          case 12:
          case "end":
            return _context69.stop();
        }
      }
    }, _callee69);
  }));
  return _xt.apply(this, arguments);
}
var Lt = {
  "serverless.file.resource.generateProximalSign": "storage/generate-proximal-sign",
  "serverless.file.resource.report": "storage/report",
  "serverless.file.resource.delete": "storage/delete",
  "serverless.file.resource.getTempFileURL": "storage/get-temp-file-url"
};
var Ut = /*#__PURE__*/function () {
  function Ut(e) {
    (0, _classCallCheck2.default)(this, Ut);
    if (["spaceId", "clientSecret"].forEach(function (t) {
      if (!Object.prototype.hasOwnProperty.call(e, t)) throw new Error("".concat(t, " required"));
    }), !e.endpoint) throw new Error("集群空间未配置ApiEndpoint，配置后需要重新关联服务空间后生效");
    this.config = Object.assign({}, e), this.config.provider = "dcloud", this.config.requestUrl = this.config.endpoint + "/client", this.config.envType = this.config.envType || "public", this.adapter = ie;
  }
  (0, _createClass2.default)(Ut, [{
    key: "request",
    value: function () {
      var _request4 = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee43(e) {
        var _this15 = this;
        var t,
          n,
          _args43 = arguments;
        return _regenerator.default.wrap(function _callee43$(_context43) {
          while (1) {
            switch (_context43.prev = _context43.next) {
              case 0:
                t = _args43.length > 1 && _args43[1] !== undefined ? _args43[1] : !0;
                n = S && t;
                if (!n) {
                  _context43.next = 8;
                  break;
                }
                _context43.next = 5;
                return this.setupLocalRequest(e);
              case 5:
                _context43.t0 = _context43.sent;
                _context43.next = 9;
                break;
              case 8:
                _context43.t0 = this.setupRequest(e);
              case 9:
                e = _context43.t0;
                return _context43.abrupt("return", Promise.resolve().then(function () {
                  return n ? _this15.requestLocal(e) : fe.wrappedRequest(e, _this15.adapter.request);
                }));
              case 11:
              case "end":
                return _context43.stop();
            }
          }
        }, _callee43, this);
      }));
      function request(_x41) {
        return _request4.apply(this, arguments);
      }
      return request;
    }()
  }, {
    key: "requestLocal",
    value: function requestLocal(e) {
      var _this16 = this;
      return new Promise(function (t, n) {
        _this16.adapter.request(Object.assign(e, {
          complete: function complete(e) {
            if (e || (e = {}), !e.statusCode || e.statusCode >= 400) {
              var _t11 = e.data && e.data.code || "SYS_ERR",
                _s12 = e.data && e.data.message || "request:fail";
              return n(new re({
                code: _t11,
                message: _s12
              }));
            }
            t({
              success: !0,
              result: e.data
            });
          }
        }));
      });
    }
  }, {
    key: "setupRequest",
    value: function setupRequest(e) {
      var t = Object.assign({}, e, {
          spaceId: this.config.spaceId,
          timestamp: Date.now()
        }),
        n = {
          "Content-Type": "application/json"
        };
      n["x-serverless-sign"] = fe.sign(t, this.config.clientSecret);
      var s = pe();
      n["x-client-info"] = encodeURIComponent(JSON.stringify(s));
      var _oe = oe(),
        r = _oe.token;
      return n["x-client-token"] = r, {
        url: this.config.requestUrl,
        method: "POST",
        data: t,
        dataType: "json",
        header: JSON.parse(JSON.stringify(n))
      };
    }
  }, {
    key: "setupLocalRequest",
    value: function () {
      var _setupLocalRequest = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee44(e) {
        var t, _oe2, n, s, _ref17, r, i, _yield$xt, o;
        return _regenerator.default.wrap(function _callee44$(_context44) {
          while (1) {
            switch (_context44.prev = _context44.next) {
              case 0:
                t = pe();
                _oe2 = oe();
                n = _oe2.token;
                s = Object.assign({}, e, {
                  spaceId: this.config.spaceId,
                  timestamp: Date.now(),
                  clientInfo: t,
                  token: n
                });
                _ref17 = this.__dev__ && this.__dev__.debugInfo || {};
                r = _ref17.address;
                i = _ref17.servePort;
                _context44.next = 9;
                return xt(r, i);
              case 9:
                _yield$xt = _context44.sent;
                o = _yield$xt.address;
                return _context44.abrupt("return", {
                  url: "http://".concat(o, ":").concat(i, "/").concat(Lt[e.method]),
                  method: "POST",
                  data: s,
                  dataType: "json",
                  header: JSON.parse(JSON.stringify({
                    "Content-Type": "application/json"
                  }))
                });
              case 12:
              case "end":
                return _context44.stop();
            }
          }
        }, _callee44, this);
      }));
      function setupLocalRequest(_x42) {
        return _setupLocalRequest.apply(this, arguments);
      }
      return setupLocalRequest;
    }()
  }, {
    key: "callFunction",
    value: function callFunction(e) {
      var t = {
        method: "serverless.function.runtime.invoke",
        params: JSON.stringify({
          functionTarget: e.name,
          functionArgs: e.data || {}
        })
      };
      return this.request(t, !1);
    }
  }, {
    key: "getUploadFileOptions",
    value: function getUploadFileOptions(e) {
      var t = {
        method: "serverless.file.resource.generateProximalSign",
        params: JSON.stringify(e)
      };
      return this.request(t);
    }
  }, {
    key: "reportUploadFile",
    value: function reportUploadFile(e) {
      var t = {
        method: "serverless.file.resource.report",
        params: JSON.stringify(e)
      };
      return this.request(t);
    }
  }, {
    key: "uploadFile",
    value: function uploadFile(_ref18) {
      var _this17 = this;
      var e = _ref18.filePath,
        t = _ref18.cloudPath,
        _ref18$fileType = _ref18.fileType,
        n = _ref18$fileType === void 0 ? "image" : _ref18$fileType,
        s = _ref18.onUploadProgress;
      if (!t) throw new re({
        code: "CLOUDPATH_REQUIRED",
        message: "cloudPath不可为空"
      });
      var r;
      return this.getUploadFileOptions({
        cloudPath: t
      }).then(function (t) {
        var _t$result = t.result,
          i = _t$result.url,
          o = _t$result.formData,
          a = _t$result.name;
        return r = t.result.fileUrl, new Promise(function (t, r) {
          var c = _this17.adapter.uploadFile({
            url: i,
            formData: o,
            name: a,
            filePath: e,
            fileType: n,
            success: function success(e) {
              e && e.statusCode < 400 ? t(e) : r(new re({
                code: "UPLOAD_FAILED",
                message: "文件上传失败"
              }));
            },
            fail: function fail(e) {
              r(new re({
                code: e.code || "UPLOAD_FAILED",
                message: e.message || e.errMsg || "文件上传失败"
              }));
            }
          });
          "function" == typeof s && c && "function" == typeof c.onProgressUpdate && c.onProgressUpdate(function (e) {
            s({
              loaded: e.totalBytesSent,
              total: e.totalBytesExpectedToSend
            });
          });
        });
      }).then(function () {
        return _this17.reportUploadFile({
          cloudPath: t
        });
      }).then(function (t) {
        return new Promise(function (n, s) {
          t.success ? n({
            success: !0,
            filePath: e,
            fileID: r
          }) : s(new re({
            code: "UPLOAD_FAILED",
            message: "文件上传失败"
          }));
        });
      });
    }
  }, {
    key: "deleteFile",
    value: function deleteFile(_ref19) {
      var e = _ref19.fileList;
      var t = {
        method: "serverless.file.resource.delete",
        params: JSON.stringify({
          fileList: e
        })
      };
      return this.request(t).then(function (e) {
        if (e.success) return e.result;
        throw new re({
          code: "DELETE_FILE_FAILED",
          message: "删除文件失败"
        });
      });
    }
  }, {
    key: "getTempFileURL",
    value: function getTempFileURL() {
      var _ref20 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
        e = _ref20.fileList,
        t = _ref20.maxAge;
      if (!Array.isArray(e) || 0 === e.length) throw new re({
        code: "INVALID_PARAM",
        message: "fileList的元素必须是非空的字符串"
      });
      var n = {
        method: "serverless.file.resource.getTempFileURL",
        params: JSON.stringify({
          fileList: e,
          maxAge: t
        })
      };
      return this.request(n).then(function (e) {
        if (e.success) return {
          fileList: e.result.fileList.map(function (e) {
            return {
              fileID: e.fileID,
              tempFileURL: e.tempFileURL
            };
          })
        };
        throw new re({
          code: "GET_TEMP_FILE_URL_FAILED",
          message: "获取临时文件链接失败"
        });
      });
    }
  }]);
  return Ut;
}();
var Rt = {
    init: function init(e) {
      var t = new Ut(e),
        n = {
          signInAnonymously: function signInAnonymously() {
            return Promise.resolve();
          },
          getLoginState: function getLoginState() {
            return Promise.resolve(!1);
          }
        };
      return t.auth = function () {
        return n;
      }, t.customAuth = t.auth, t;
    }
  },
  Nt = n(function (e, t) {
    e.exports = r.enc.Hex;
  });
function Dt() {
  return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function (e) {
    var t = 16 * Math.random() | 0;
    return ("x" === e ? t : 3 & t | 8).toString(16);
  });
}
function Mt() {
  var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "";
  var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var n = t.data,
    s = t.functionName,
    r = t.method,
    i = t.headers,
    _t$signHeaderKeys = t.signHeaderKeys,
    o = _t$signHeaderKeys === void 0 ? [] : _t$signHeaderKeys,
    a = t.config,
    c = String(Date.now()),
    u = Dt(),
    l = Object.assign({}, i, {
      "x-from-app-id": a.spaceAppId,
      "x-from-env-id": a.spaceId,
      "x-to-env-id": a.spaceId,
      "x-from-instance-id": c,
      "x-from-function-name": s,
      "x-client-timestamp": c,
      "x-alipay-source": "client",
      "x-request-id": u,
      "x-alipay-callid": u,
      "x-trace-id": u
    }),
    h = ["x-from-app-id", "x-from-env-id", "x-to-env-id", "x-from-instance-id", "x-from-function-name", "x-client-timestamp"].concat(o),
    _ref21 = e.split("?") || [],
    _ref22 = (0, _slicedToArray2.default)(_ref21, 2),
    _ref22$ = _ref22[0],
    d = _ref22$ === void 0 ? "" : _ref22$,
    _ref22$2 = _ref22[1],
    p = _ref22$2 === void 0 ? "" : _ref22$2,
    f = function (e) {
      var t = e.signedHeaders.join(";"),
        n = e.signedHeaders.map(function (t) {
          return "".concat(t.toLowerCase(), ":").concat(e.headers[t], "\n");
        }).join(""),
        s = Ie(e.body).toString(Nt),
        r = "".concat(e.method.toUpperCase(), "\n").concat(e.path, "\n").concat(e.query, "\n").concat(n, "\n").concat(t, "\n").concat(s, "\n"),
        i = Ie(r).toString(Nt),
        o = "HMAC-SHA256\n".concat(e.timestamp, "\n").concat(i, "\n"),
        a = Se(o, e.secretKey).toString(Nt);
      return "HMAC-SHA256 Credential=".concat(e.secretId, ", SignedHeaders=").concat(t, ", Signature=").concat(a);
    }({
      path: d,
      query: p,
      method: r,
      headers: l,
      timestamp: c,
      body: JSON.stringify(n),
      secretId: a.accessKey,
      secretKey: a.secretKey,
      signedHeaders: h.sort()
    });
  return {
    url: "".concat(a.endpoint).concat(e),
    headers: Object.assign({}, l, {
      Authorization: f
    })
  };
}
function qt(_ref23) {
  var e = _ref23.url,
    t = _ref23.data,
    _ref23$method = _ref23.method,
    n = _ref23$method === void 0 ? "POST" : _ref23$method,
    _ref23$headers = _ref23.headers,
    s = _ref23$headers === void 0 ? {} : _ref23$headers,
    r = _ref23.timeout;
  return new Promise(function (i, o) {
    ie.request({
      url: e,
      method: n,
      data: "object" == (0, _typeof2.default)(t) ? JSON.stringify(t) : t,
      header: s,
      dataType: "json",
      timeout: r,
      complete: function complete() {
        var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
        var t = s["x-trace-id"] || "";
        if (!e.statusCode || e.statusCode >= 400) {
          var _ref24 = e.data || {},
            _n8 = _ref24.message,
            _s13 = _ref24.errMsg,
            _r5 = _ref24.trace_id;
          return o(new re({
            code: "SYS_ERR",
            message: _n8 || _s13 || "request:fail",
            requestId: _r5 || t
          }));
        }
        i({
          status: e.statusCode,
          data: e.data,
          headers: e.header,
          requestId: t
        });
      }
    });
  });
}
function Ft(e, t) {
  var n = e.path,
    s = e.data,
    _e$method = e.method,
    r = _e$method === void 0 ? "GET" : _e$method,
    _Mt = Mt(n, {
      functionName: "",
      data: s,
      method: r,
      headers: {
        "x-alipay-cloud-mode": "oss",
        "x-data-api-type": "oss",
        "x-expire-timestamp": String(Date.now() + 6e4)
      },
      signHeaderKeys: ["x-data-api-type", "x-expire-timestamp"],
      config: t
    }),
    i = _Mt.url,
    o = _Mt.headers;
  return qt({
    url: i,
    data: s,
    method: r,
    headers: o
  }).then(function (e) {
    var t = e.data || {};
    if (!t.success) throw new re({
      code: e.errCode,
      message: e.errMsg,
      requestId: e.requestId
    });
    return t.data || {};
  }).catch(function (e) {
    throw new re({
      code: e.errCode,
      message: e.errMsg,
      requestId: e.requestId
    });
  });
}
function Kt() {
  var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "";
  var t = e.trim().replace(/^cloud:\/\//, ""),
    n = t.indexOf("/");
  if (n <= 0) throw new re({
    code: "INVALID_PARAM",
    message: "fileID不合法"
  });
  var s = t.substring(0, n),
    r = t.substring(n + 1);
  return s !== this.config.spaceId && console.warn("file ".concat(e, " does not belong to env ").concat(this.config.spaceId)), r;
}
function jt() {
  var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "";
  return "cloud://".concat(this.config.spaceId, "/").concat(e.replace(/^\/+/, ""));
}
var $t = /*#__PURE__*/function () {
  function $t(e) {
    (0, _classCallCheck2.default)(this, $t);
    this.config = e;
  }
  (0, _createClass2.default)($t, [{
    key: "signedURL",
    value: function signedURL(e) {
      var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      var n = "/ws/function/".concat(e),
        s = this.config.wsEndpoint.replace(/^ws(s)?:\/\//, ""),
        r = Object.assign({}, t, {
          accessKeyId: this.config.accessKey,
          signatureNonce: Dt(),
          timestamp: "" + Date.now()
        }),
        i = [n, ["accessKeyId", "authorization", "signatureNonce", "timestamp"].sort().map(function (e) {
          return r[e] ? "".concat(e, "=").concat(r[e]) : null;
        }).filter(Boolean).join("&"), "host:".concat(s)].join("\n"),
        o = ["HMAC-SHA256", Ie(i).toString(Nt)].join("\n"),
        a = Se(o, this.config.secretKey).toString(Nt),
        c = Object.keys(r).map(function (e) {
          return "".concat(e, "=").concat(encodeURIComponent(r[e]));
        }).join("&");
      return "".concat(this.config.wsEndpoint).concat(n, "?").concat(c, "&signature=").concat(a);
    }
  }]);
  return $t;
}();
var Bt = /*#__PURE__*/function () {
  function Bt(e) {
    (0, _classCallCheck2.default)(this, Bt);
    this.config = e;
  }
  (0, _createClass2.default)(Bt, [{
    key: "signedURL",
    value: function signedURL(e) {
      var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      var n = "/ws/sse/function/".concat(e),
        s = this.config.endpoint.replace(/^http(s)?:\/\//, ""),
        r = Object.assign({}, t, {
          accessKeyId: this.config.accessKey,
          signatureNonce: Dt(),
          timestamp: "" + Date.now()
        }),
        i = ["accessKeyId", "authorization", "signatureNonce", "timestamp"].sort().map(function (e) {
          return r[e] ? "".concat(e, "=").concat(r[e]) : null;
        }).filter(Boolean).join("&"),
        o = [n.replace("/ws", ""), i, "host:".concat(s)].join("\n"),
        a = ["HMAC-SHA256", Ie(o).toString(Nt)].join("\n"),
        c = Se(a, this.config.secretKey).toString(Nt),
        u = Object.keys(r).map(function (e) {
          return "".concat(e, "=").concat(encodeURIComponent(r[e]));
        }).join("&");
      return "".concat(this.config.endpoint).concat(n, "?").concat(u, "&signature=").concat(c);
    }
  }]);
  return Bt;
}();
var Wt = /*#__PURE__*/function () {
  function Wt(e) {
    (0, _classCallCheck2.default)(this, Wt);
    if (["spaceId", "spaceAppId", "accessKey", "secretKey"].forEach(function (t) {
      if (!Object.prototype.hasOwnProperty.call(e, t)) throw new Error("".concat(t, " required"));
    }), e.endpoint) {
      if ("string" != typeof e.endpoint) throw new Error("endpoint must be string");
      if (!/^https:\/\//.test(e.endpoint)) throw new Error("endpoint must start with https://");
      e.endpoint = e.endpoint.replace(/\/$/, "");
    }
    this.config = Object.assign({}, e, {
      endpoint: e.endpoint || "https://".concat(e.spaceId, ".api-hz.cloudbasefunction.cn"),
      wsEndpoint: e.wsEndpoint || "wss://".concat(e.spaceId, ".api-hz.cloudbasefunction.cn")
    }), this._websocket = new $t(this.config), this._sse = new Bt(this.config);
  }
  (0, _createClass2.default)(Wt, [{
    key: "callFunction",
    value: function callFunction(e) {
      return function (e, t) {
        var n = e.name,
          s = e.data,
          _e$async = e.async,
          r = _e$async === void 0 ? !1 : _e$async,
          i = e.timeout,
          o = "POST",
          a = {
            "x-to-function-name": n
          };
        r && (a["x-function-invoke-type"] = "async");
        var _Mt2 = Mt("/functions/invokeFunction", {
            functionName: n,
            data: s,
            method: o,
            headers: a,
            signHeaderKeys: ["x-to-function-name"],
            config: t
          }),
          c = _Mt2.url,
          u = _Mt2.headers;
        return qt({
          url: c,
          data: s,
          method: o,
          headers: u,
          timeout: i
        }).then(function (e) {
          var t = 0;
          if (r) {
            var _n9 = e.data || {};
            t = "200" === _n9.errCode ? 0 : _n9.errCode, e.data = _n9.data || {}, e.errMsg = _n9.errMsg;
          }
          if (0 !== t) throw new re({
            code: t,
            message: e.errMsg,
            requestId: e.requestId
          });
          return {
            errCode: t,
            success: 0 === t,
            requestId: e.requestId,
            result: e.data
          };
        }).catch(function (e) {
          throw new re({
            code: e.errCode,
            message: e.errMsg,
            requestId: e.requestId
          });
        });
      }(e, this.config);
    }
  }, {
    key: "uploadFileToOSS",
    value: function uploadFileToOSS(_ref25) {
      var e = _ref25.url,
        t = _ref25.filePath,
        n = _ref25.fileType,
        s = _ref25.formData,
        r = _ref25.onUploadProgress;
      return new Promise(function (i, o) {
        var a = ie.uploadFile({
          url: e,
          filePath: t,
          fileType: n,
          formData: s,
          name: "file",
          success: function success(e) {
            e && e.statusCode < 400 ? i(e) : o(new re({
              code: "UPLOAD_FAILED",
              message: "文件上传失败"
            }));
          },
          fail: function fail(e) {
            o(new re({
              code: e.code || "UPLOAD_FAILED",
              message: e.message || e.errMsg || "文件上传失败"
            }));
          }
        });
        "function" == typeof r && a && "function" == typeof a.onProgressUpdate && a.onProgressUpdate(function (e) {
          r({
            loaded: e.totalBytesSent,
            total: e.totalBytesExpectedToSend
          });
        });
      });
    }
  }, {
    key: "uploadFile",
    value: function () {
      var _uploadFile2 = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee45(_ref26) {
        var e, _ref26$cloudPath, t, _ref26$fileType, n, s, r, i, o, a, c;
        return _regenerator.default.wrap(function _callee45$(_context45) {
          while (1) {
            switch (_context45.prev = _context45.next) {
              case 0:
                e = _ref26.filePath, _ref26$cloudPath = _ref26.cloudPath, t = _ref26$cloudPath === void 0 ? "" : _ref26$cloudPath, _ref26$fileType = _ref26.fileType, n = _ref26$fileType === void 0 ? "image" : _ref26$fileType, s = _ref26.onUploadProgress;
                if (!("string" !== f(t))) {
                  _context45.next = 3;
                  break;
                }
                throw new re({
                  code: "INVALID_PARAM",
                  message: "cloudPath必须为字符串类型"
                });
              case 3:
                if (t = t.trim()) {
                  _context45.next = 5;
                  break;
                }
                throw new re({
                  code: "INVALID_PARAM",
                  message: "cloudPath不可为空"
                });
              case 5:
                if (!/:\/\//.test(t)) {
                  _context45.next = 7;
                  break;
                }
                throw new re({
                  code: "INVALID_PARAM",
                  message: "cloudPath不合法"
                });
              case 7:
                _context45.next = 9;
                return Ft({
                  path: "/".concat(t.replace(/^\//, ""), "?post_url")
                }, this.config);
              case 9:
                r = _context45.sent;
                i = r.file_id;
                o = r.upload_url;
                a = r.form_data;
                c = a && a.reduce(function (e, t) {
                  return e[t.key] = t.value, e;
                }, {});
                return _context45.abrupt("return", this.uploadFileToOSS({
                  url: o,
                  filePath: e,
                  fileType: n,
                  formData: c,
                  onUploadProgress: s
                }).then(function () {
                  return {
                    fileID: i
                  };
                }));
              case 15:
              case "end":
                return _context45.stop();
            }
          }
        }, _callee45, this);
      }));
      function uploadFile(_x43) {
        return _uploadFile2.apply(this, arguments);
      }
      return uploadFile;
    }()
  }, {
    key: "getTempFileURL",
    value: function () {
      var _getTempFileURL = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee46(_ref27) {
        var _this18 = this;
        var e;
        return _regenerator.default.wrap(function _callee46$(_context46) {
          while (1) {
            switch (_context46.prev = _context46.next) {
              case 0:
                e = _ref27.fileList;
                return _context46.abrupt("return", new Promise(function (t, n) {
                  (!e || e.length < 0) && t({
                    code: "INVALID_PARAM",
                    message: "fileList不能为空数组"
                  }), e.length > 50 && t({
                    code: "INVALID_PARAM",
                    message: "fileList数组长度不能超过50"
                  });
                  var s = [];
                  var _iterator5 = _createForOfIteratorHelper(e),
                    _step5;
                  try {
                    for (_iterator5.s(); !(_step5 = _iterator5.n()).done;) {
                      var _n10 = _step5.value;
                      var _e16 = void 0;
                      "string" !== f(_n10) && t({
                        code: "INVALID_PARAM",
                        message: "fileList的元素必须是非空的字符串"
                      });
                      try {
                        _e16 = Kt.call(_this18, _n10);
                      } catch (t) {
                        console.warn(t.errCode, t.errMsg), _e16 = _n10;
                      }
                      s.push({
                        file_id: _e16,
                        expire: 600
                      });
                    }
                  } catch (err) {
                    _iterator5.e(err);
                  } finally {
                    _iterator5.f();
                  }
                  Ft({
                    path: "/?download_url",
                    data: {
                      file_list: s
                    },
                    method: "POST"
                  }, _this18.config).then(function (e) {
                    var _e$file_list = e.file_list,
                      n = _e$file_list === void 0 ? [] : _e$file_list;
                    t({
                      fileList: n.map(function (e) {
                        return {
                          fileID: jt.call(_this18, e.file_id),
                          tempFileURL: e.download_url
                        };
                      })
                    });
                  }).catch(function (e) {
                    return n(e);
                  });
                }));
              case 2:
              case "end":
                return _context46.stop();
            }
          }
        }, _callee46);
      }));
      function getTempFileURL(_x44) {
        return _getTempFileURL.apply(this, arguments);
      }
      return getTempFileURL;
    }()
  }, {
    key: "connectWebSocket",
    value: function () {
      var _connectWebSocket = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee47(e) {
        var t, n;
        return _regenerator.default.wrap(function _callee47$(_context47) {
          while (1) {
            switch (_context47.prev = _context47.next) {
              case 0:
                t = e.name, n = e.query;
                return _context47.abrupt("return", ie.connectSocket({
                  url: this._websocket.signedURL(t, n),
                  complete: function complete() {}
                }));
              case 2:
              case "end":
                return _context47.stop();
            }
          }
        }, _callee47, this);
      }));
      function connectWebSocket(_x45) {
        return _connectWebSocket.apply(this, arguments);
      }
      return connectWebSocket;
    }()
  }, {
    key: "requestSSE",
    value: function requestSSE(e) {
      var t = e.name,
        n = e.data;
      return ie.request({
        method: "POST",
        url: this._sse.signedURL(t),
        data: n,
        header: {
          "content-type": "application/json"
        },
        dataType: "json"
      });
    }
  }]);
  return Wt;
}();
var Ht = {
  init: function init(e) {
    e.provider = "alipay";
    var t = new Wt(e);
    return t.auth = function () {
      return {
        signInAnonymously: function signInAnonymously() {
          return Promise.resolve();
        },
        getLoginState: function getLoginState() {
          return Promise.resolve(!0);
        }
      };
    }, t;
  }
};
function Jt(_ref28) {
  var e = _ref28.data;
  var t;
  t = pe();
  var n = JSON.parse(JSON.stringify(e || {}));
  if (Object.assign(n, {
    clientInfo: t
  }), !n.uniIdToken) {
    var _oe3 = oe(),
      _e17 = _oe3.token;
    _e17 && (n.uniIdToken = _e17);
  }
  return n;
}
var zt = {
  enable: !1,
  interval: 0,
  space: {}
};
var Vt = null,
  Gt = 0,
  Qt = !1;
function Yt() {
  return Array.isArray(P) && P.length ? P[0] : {};
}
function Xt(e) {
  return "".concat(e, "_").concat(Yt().spaceId || "default");
}
function Zt() {
  if (Vt) return Vt;
  try {
    var e = ie.getStorageSync(Xt("UNICLOUD_FAILOVER_CONFIG"));
    if (g(e)) return Vt = e, e;
  } catch (e) {}
  return null;
}
function en(e) {
  Gt = e;
  try {
    ie.setStorageSync(Xt("UNICLOUD_FAILOVER_LAST_REQUEST"), e);
  } catch (e) {}
}
function tn(e) {
  if (null === e || e < 0) return !1;
  if (0 === e) return !0;
  var t = function () {
    if (Gt) return Gt;
    try {
      var _e18 = ie.getStorageSync(Xt("UNICLOUD_FAILOVER_LAST_REQUEST"));
      if (_e18 && "number" == typeof _e18) return Gt = _e18, _e18;
    } catch (e) {}
    return 0;
  }();
  if (!t) return !0;
  return Date.now() - t >= e;
}
function nn() {
  return _nn.apply(this, arguments);
}
function _nn() {
  _nn = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee70() {
    var e, t, _e32, n, s, _s$enable, _r12, _s$interval, _i5, _s$space, _o4, _a3, _c3, _u;
    return _regenerator.default.wrap(function _callee70$(_context70) {
      while (1) {
        switch (_context70.prev = _context70.next) {
          case 0:
            e = Yt(), t = e.failoverEndpoint;
            if (t) {
              _context70.next = 3;
              break;
            }
            return _context70.abrupt("return", null);
          case 3:
            if (!Qt) {
              _context70.next = 5;
              break;
            }
            return _context70.abrupt("return", Zt());
          case 5:
            Qt = !0;
            _context70.prev = 6;
            _e32 = "".concat(t, "/.unicloud/failover-cfg.json");
            _context70.next = 10;
            return ie.request({
              url: _e32,
              method: "GET",
              dataType: "json",
              timeout: 5e3
            });
          case 10:
            n = _context70.sent;
            if (!(en(Date.now()), 200 !== n.statusCode || !g(n.data))) {
              _context70.next = 13;
              break;
            }
            return _context70.abrupt("return", null);
          case 13:
            s = _objectSpread(_objectSpread({}, zt), n.data), _s$enable = s.enable, _r12 = _s$enable === void 0 ? !1 : _s$enable, _s$interval = s.interval, _i5 = _s$interval === void 0 ? 0 : _s$interval, _s$space = s.space, _o4 = _s$space === void 0 ? {} : _s$space, _a3 = Zt(), _c3 = _a3 && _a3.enable, _u = function (e, t) {
              if (!e) return t.enable;
              if (e.enable !== t.enable) return !0;
              if (e.interval !== t.interval) return !0;
              if (t._lastModifiedAt && e._lastModifiedAt !== t._lastModifiedAt) return !0;
              if (JSON.stringify(e.space) !== JSON.stringify(t.space)) return !0;
              return !1;
            }(_a3, s);
            return _context70.abrupt("return", (function (e) {
              try {
                Vt = e, e && e.enable ? ie.setStorageSync(Xt("UNICLOUD_FAILOVER_CONFIG"), e) : (ie.removeStorageSync(Xt("UNICLOUD_FAILOVER_CONFIG")), ie.removeStorageSync(Xt("UNICLOUD_FAILOVER_LAST_REQUEST")));
              } catch (e) {}
            }({
              enable: _r12,
              interval: _i5,
              space: _o4,
              _lastModifiedAt: n.data._lastModifiedAt || Date.now()
            }), _u && Z(J, {
              isEnabled: _r12,
              hasStatusChanged: _c3 !== _r12,
              failoverSpace: _o4
            }), s));
          case 17:
            _context70.prev = 17;
            _context70.t0 = _context70["catch"](6);
            return _context70.abrupt("return", Zt());
          case 20:
            _context70.prev = 20;
            Qt = !1;
            return _context70.finish(20);
          case 23:
          case "end":
            return _context70.stop();
        }
      }
    }, _callee70, null, [[6, 17, 20, 23]]);
  }));
  return _nn.apply(this, arguments);
}
function sn() {
  return _sn.apply(this, arguments);
}
function _sn() {
  _sn = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee71() {
    var _this31 = this;
    var e,
      _this$__dev__,
      t,
      n,
      s,
      r,
      i,
      o,
      a,
      _args10 = arguments;
    return _regenerator.default.wrap(function _callee71$(_context71) {
      while (1) {
        switch (_context71.prev = _context71.next) {
          case 0:
            e = _args10.length > 0 && _args10[0] !== undefined ? _args10[0] : {};
            _context71.next = 3;
            return this.__dev__.initLocalNetwork();
          case 3:
            _this$__dev__ = this.__dev__, t = _this$__dev__.localAddress, n = _this$__dev__.localPort, s = Yt(), r = {
              aliyun: "aliyun",
              tencent: "tcb",
              alipay: "alipay",
              dcloud: "dcloud"
            }[s.provider], i = s.spaceId, o = "http://".concat(t, ":").concat(n, "/system/check-function"), a = "http://".concat(t, ":").concat(n, "/cloudfunctions/").concat(e.name);
            return _context71.abrupt("return", new Promise(function (t, n) {
              ie.request({
                method: "POST",
                url: o,
                data: {
                  name: e.name,
                  platform: T,
                  provider: r,
                  spaceId: i
                },
                timeout: 3e3,
                success: function success(e) {
                  t(e);
                },
                fail: function fail() {
                  t({
                    data: {
                      code: "NETWORK_ERROR",
                      message: "连接本地调试服务失败，请检查客户端是否和主机在同一局域网下，自动切换为已部署的云函数。"
                    }
                  });
                }
              });
            }).then(function () {
              var _ref68 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
                e = _ref68.data;
              var _ref69 = e || {},
                t = _ref69.code,
                n = _ref69.message;
              return {
                code: 0 === t ? 0 : t || "SYS_ERR",
                message: n || "SYS_ERR"
              };
            }).then(function (_ref70) {
              var t = _ref70.code,
                n = _ref70.message;
              if (0 !== t) {
                switch (t) {
                  case "MODULE_ENCRYPTED":
                    console.error("\u6B64\u4E91\u51FD\u6570\uFF08".concat(e.name, "\uFF09\u4F9D\u8D56\u52A0\u5BC6\u516C\u5171\u6A21\u5757\u4E0D\u53EF\u672C\u5730\u8C03\u8BD5\uFF0C\u81EA\u52A8\u5207\u6362\u4E3A\u4E91\u7AEF\u5DF2\u90E8\u7F72\u7684\u4E91\u51FD\u6570"));
                    break;
                  case "FUNCTION_ENCRYPTED":
                    console.error("\u6B64\u4E91\u51FD\u6570\uFF08".concat(e.name, "\uFF09\u5DF2\u52A0\u5BC6\u4E0D\u53EF\u672C\u5730\u8C03\u8BD5\uFF0C\u81EA\u52A8\u5207\u6362\u4E3A\u4E91\u7AEF\u5DF2\u90E8\u7F72\u7684\u4E91\u51FD\u6570"));
                    break;
                  case "ACTION_ENCRYPTED":
                    console.error(n || "需要访问加密的uni-clientDB-action，自动切换为云端环境");
                    break;
                  case "NETWORK_ERROR":
                    console.error(n || "连接本地调试服务失败，请检查客户端是否和主机在同一局域网下");
                    break;
                  case "SWITCH_TO_CLOUD":
                    break;
                  default:
                    {
                      var _e33 = "\u68C0\u6D4B\u672C\u5730\u8C03\u8BD5\u670D\u52A1\u51FA\u73B0\u9519\u8BEF\uFF1A".concat(n, "\uFF0C\u8BF7\u68C0\u67E5\u7F51\u7EDC\u73AF\u5883\u6216\u91CD\u542F\u5BA2\u6237\u7AEF\u518D\u8BD5");
                      throw console.error(_e33), new Error(_e33);
                    }
                }
                return _this31._callCloudFunction(e);
              }
              return new Promise(function (t, n) {
                var s = Jt.call(_this31, {
                  data: e.data
                });
                ie.request({
                  method: "POST",
                  url: a,
                  data: {
                    provider: r,
                    platform: T,
                    param: s
                  },
                  timeout: e.timeout,
                  success: function success() {
                    var _ref71 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
                      e = _ref71.statusCode,
                      s = _ref71.data;
                    return !e || e >= 400 ? n(new re({
                      code: s.code || "SYS_ERR",
                      message: s.message || "request:fail"
                    })) : t({
                      result: s
                    });
                  },
                  fail: function fail(e) {
                    n(new re({
                      code: e.code || e.errCode || "SYS_ERR",
                      message: e.message || e.errMsg || "request:fail"
                    }));
                  }
                });
              });
            }));
          case 5:
          case "end":
            return _context71.stop();
        }
      }
    }, _callee71, this);
  }));
  return _sn.apply(this, arguments);
}
var rn = [{
  rule: /fc_function_not_found|FUNCTION_NOT_FOUND/,
  content: "，云函数[{functionName}]在云端不存在，请检查此云函数名称是否正确以及该云函数是否已上传到服务空间",
  mode: "append"
}];
var on = /[\\^$.*+?()[\]{}|]/g,
  an = RegExp(on.source);
function cn(e, t, n) {
  return e.replace(new RegExp((s = t) && an.test(s) ? s.replace(on, "\\$&") : s, "g"), n);
  var s;
}
var un = "none",
  ln = "request",
  hn = "response",
  dn = "both",
  pn = {
    code: 2e4,
    message: "System error"
  },
  fn = {
    code: 20101,
    message: "Invalid client"
  },
  gn = {
    code: 20102,
    message: "Get encrypt key failed"
  },
  mn = {
    10001: "Secure network is not supported on current playground or unimpsdk",
    10003: "Config missing in current app. If the problem pesist, please contact DCloud.",
    10009: "Encrypt payload failed",
    10010: "Decrypt response failed"
  };
function yn(e) {
  var _ref29 = e || {},
    t = _ref29.errSubject,
    n = _ref29.subject,
    s = _ref29.errCode,
    r = _ref29.errMsg,
    i = _ref29.code,
    o = _ref29.message,
    a = _ref29.cause;
  return new re({
    subject: t || n || "uni-secure-network",
    code: s || i || pn.code,
    message: r || o,
    cause: a
  });
}
var _n = /*#__PURE__*/function () {
  function _n() {
    var _ref30 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
      e = _ref30.secretType,
      t = _ref30.uniCloudIns;
    (0, _classCallCheck2.default)(this, _n);
    this.clientType = "", this.secretType = e || un, this.uniCloudIns = t;
    var _this$uniCloudIns$con = this.uniCloudIns.config,
      n = _this$uniCloudIns$con.provider,
      s = _this$uniCloudIns$con.spaceId;
    var r;
    this.provider = n, this.spaceId = s, this.scopedGlobalCache = (r = this.uniCloudIns, U("_globalUniCloudSecureNetworkCache__{spaceId}".replace("{spaceId}", r.config.spaceId)));
  }
  (0, _createClass2.default)(_n, [{
    key: "getSystemInfo",
    value: function getSystemInfo() {
      return this._systemInfo || (this._systemInfo = le()), this._systemInfo;
    }
  }, {
    key: "appId",
    get: function get() {
      return this.getSystemInfo().appId;
    }
  }, {
    key: "deviceId",
    get: function get() {
      return this.getSystemInfo().deviceId;
    }
  }, {
    key: "encryptData",
    value: function () {
      var _encryptData = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee48(e) {
        return _regenerator.default.wrap(function _callee48$(_context48) {
          while (1) {
            switch (_context48.prev = _context48.next) {
              case 0:
                return _context48.abrupt("return", this.secretType === un ? e : this.platformEncryptData(e));
              case 1:
              case "end":
                return _context48.stop();
            }
          }
        }, _callee48, this);
      }));
      function encryptData(_x46) {
        return _encryptData.apply(this, arguments);
      }
      return encryptData;
    }()
  }, {
    key: "decryptResult",
    value: function () {
      var _decryptResult = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee49(e) {
        var _ref31, t, n, s;
        return _regenerator.default.wrap(function _callee49$(_context49) {
          while (1) {
            switch (_context49.prev = _context49.next) {
              case 0:
                if (!(this.secretType === un)) {
                  _context49.next = 2;
                  break;
                }
                return _context49.abrupt("return", e);
              case 2:
                _ref31 = e || {}, t = _ref31.errCode, n = _ref31.errMsg, s = _ref31.content;
                return _context49.abrupt("return", t || !s ? e : this.secretType === ln ? s : this.platformDecryptResult(e));
              case 4:
              case "end":
                return _context49.stop();
            }
          }
        }, _callee49, this);
      }));
      function decryptResult(_x47) {
        return _decryptResult.apply(this, arguments);
      }
      return decryptResult;
    }()
  }, {
    key: "wrapVerifyClientCallFunction",
    value: function wrapVerifyClientCallFunction(e) {
      var t = this;
      return /*#__PURE__*/(0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee50() {
        var _ref33,
          n,
          _ref33$data,
          s,
          r,
          _args50 = arguments;
        return _regenerator.default.wrap(function _callee50$(_context50) {
          while (1) {
            switch (_context50.prev = _context50.next) {
              case 0:
                _ref33 = _args50.length > 0 && _args50[0] !== undefined ? _args50[0] : {}, n = _ref33.name, _ref33$data = _ref33.data, s = _ref33$data === void 0 ? {} : _ref33$data;
                _context50.next = 3;
                return t.prepare();
              case 3:
                _context50.next = 5;
                return t.platformGetSignOption();
              case 5:
                (s = JSON.parse(JSON.stringify(s)))._uniCloudOptions = _context50.sent;
                _context50.next = 8;
                return e({
                  name: n,
                  data: s
                });
              case 8:
                r = _context50.sent;
                _context50.t0 = t.isClientKeyNotFound(r);
                if (!_context50.t0) {
                  _context50.next = 19;
                  break;
                }
                _context50.next = 13;
                return t.prepare({
                  forceUpdate: !0
                });
              case 13:
                _context50.next = 15;
                return t.platformGetSignOption();
              case 15:
                s._uniCloudOptions = _context50.sent;
                _context50.next = 18;
                return e({
                  name: n,
                  data: s
                });
              case 18:
                r = _context50.sent;
              case 19:
                return _context50.abrupt("return", r);
              case 20:
              case "end":
                return _context50.stop();
            }
          }
        }, _callee50);
      }));
    }
  }, {
    key: "wrapEncryptDataCallFunction",
    value: function wrapEncryptDataCallFunction(e) {
      var t = this;
      return /*#__PURE__*/(0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee51() {
        var _ref35,
          n,
          _ref35$data,
          s,
          r,
          i,
          _r6,
          _args51 = arguments;
        return _regenerator.default.wrap(function _callee51$(_context51) {
          while (1) {
            switch (_context51.prev = _context51.next) {
              case 0:
                _ref35 = _args51.length > 0 && _args51[0] !== undefined ? _args51[0] : {}, n = _ref35.name, _ref35$data = _ref35.data, s = _ref35$data === void 0 ? {} : _ref35$data;
                _context51.next = 3;
                return t.prepare();
              case 3:
                _context51.next = 5;
                return t.encryptData(s);
              case 5:
                r = _context51.sent;
                _context51.next = 8;
                return e({
                  name: n,
                  data: r
                });
              case 8:
                i = _context51.sent;
                if (!t.isClientKeyNotFound(i)) {
                  _context51.next = 18;
                  break;
                }
                _context51.next = 12;
                return t.prepare({
                  forceUpdate: !0
                });
              case 12:
                _context51.next = 14;
                return t.encryptData(s);
              case 14:
                _r6 = _context51.sent;
                _context51.next = 17;
                return e({
                  name: n,
                  data: _r6
                });
              case 17:
                i = _context51.sent;
              case 18:
                _context51.next = 20;
                return t.decryptResult(i.result);
              case 20:
                i.result = _context51.sent;
                return _context51.abrupt("return", i);
              case 22:
              case "end":
                return _context51.stop();
            }
          }
        }, _callee51);
      }));
    }
  }]);
  return _n;
}();
/*! MIT License. Copyright 2015-2018 Richard Moore <me@ricmoo.com>. See LICENSE.txt. */
function wn(e) {
  return parseInt(e) === e;
}
function vn(e) {
  if (!wn(e.length)) return !1;
  for (var t = 0; t < e.length; t++) {
    if (!wn(e[t]) || e[t] < 0 || e[t] > 255) return !1;
  }
  return !0;
}
function In(e, t) {
  if (e.buffer && "Uint8Array" === e.name) return t && (e = e.slice ? e.slice() : Array.prototype.slice.call(e)), e;
  if (Array.isArray(e)) {
    if (!vn(e)) throw new Error("Array contains invalid value: " + e);
    return new Uint8Array(e);
  }
  if (wn(e.length) && vn(e)) return new Uint8Array(e);
  throw new Error("unsupported array-like object");
}
function Sn(e) {
  return new Uint8Array(e);
}
function bn(e, t, n, s, r) {
  null == s && null == r || (e = e.slice ? e.slice(s, r) : Array.prototype.slice.call(e, s, r)), t.set(e, n);
}
var kn,
  An = {
    toBytes: function toBytes(e) {
      var t = [],
        n = 0;
      for (e = encodeURI(e); n < e.length;) {
        var s = e.charCodeAt(n++);
        37 === s ? (t.push(parseInt(e.substr(n, 2), 16)), n += 2) : t.push(s);
      }
      return In(t);
    },
    fromBytes: function fromBytes(e) {
      for (var t = [], n = 0; n < e.length;) {
        var s = e[n];
        s < 128 ? (t.push(String.fromCharCode(s)), n++) : s > 191 && s < 224 ? (t.push(String.fromCharCode((31 & s) << 6 | 63 & e[n + 1])), n += 2) : (t.push(String.fromCharCode((15 & s) << 12 | (63 & e[n + 1]) << 6 | 63 & e[n + 2])), n += 3);
      }
      return t.join("");
    }
  },
  Tn = (kn = "0123456789abcdef", {
    toBytes: function toBytes(e) {
      for (var t = [], n = 0; n < e.length; n += 2) {
        t.push(parseInt(e.substr(n, 2), 16));
      }
      return t;
    },
    fromBytes: function fromBytes(e) {
      for (var t = [], n = 0; n < e.length; n++) {
        var s = e[n];
        t.push(kn[(240 & s) >> 4] + kn[15 & s]);
      }
      return t.join("");
    }
  }),
  Cn = {
    16: 10,
    24: 12,
    32: 14
  },
  Pn = [1, 2, 4, 8, 16, 32, 64, 128, 27, 54, 108, 216, 171, 77, 154, 47, 94, 188, 99, 198, 151, 53, 106, 212, 179, 125, 250, 239, 197, 145],
  On = [99, 124, 119, 123, 242, 107, 111, 197, 48, 1, 103, 43, 254, 215, 171, 118, 202, 130, 201, 125, 250, 89, 71, 240, 173, 212, 162, 175, 156, 164, 114, 192, 183, 253, 147, 38, 54, 63, 247, 204, 52, 165, 229, 241, 113, 216, 49, 21, 4, 199, 35, 195, 24, 150, 5, 154, 7, 18, 128, 226, 235, 39, 178, 117, 9, 131, 44, 26, 27, 110, 90, 160, 82, 59, 214, 179, 41, 227, 47, 132, 83, 209, 0, 237, 32, 252, 177, 91, 106, 203, 190, 57, 74, 76, 88, 207, 208, 239, 170, 251, 67, 77, 51, 133, 69, 249, 2, 127, 80, 60, 159, 168, 81, 163, 64, 143, 146, 157, 56, 245, 188, 182, 218, 33, 16, 255, 243, 210, 205, 12, 19, 236, 95, 151, 68, 23, 196, 167, 126, 61, 100, 93, 25, 115, 96, 129, 79, 220, 34, 42, 144, 136, 70, 238, 184, 20, 222, 94, 11, 219, 224, 50, 58, 10, 73, 6, 36, 92, 194, 211, 172, 98, 145, 149, 228, 121, 231, 200, 55, 109, 141, 213, 78, 169, 108, 86, 244, 234, 101, 122, 174, 8, 186, 120, 37, 46, 28, 166, 180, 198, 232, 221, 116, 31, 75, 189, 139, 138, 112, 62, 181, 102, 72, 3, 246, 14, 97, 53, 87, 185, 134, 193, 29, 158, 225, 248, 152, 17, 105, 217, 142, 148, 155, 30, 135, 233, 206, 85, 40, 223, 140, 161, 137, 13, 191, 230, 66, 104, 65, 153, 45, 15, 176, 84, 187, 22],
  En = [82, 9, 106, 213, 48, 54, 165, 56, 191, 64, 163, 158, 129, 243, 215, 251, 124, 227, 57, 130, 155, 47, 255, 135, 52, 142, 67, 68, 196, 222, 233, 203, 84, 123, 148, 50, 166, 194, 35, 61, 238, 76, 149, 11, 66, 250, 195, 78, 8, 46, 161, 102, 40, 217, 36, 178, 118, 91, 162, 73, 109, 139, 209, 37, 114, 248, 246, 100, 134, 104, 152, 22, 212, 164, 92, 204, 93, 101, 182, 146, 108, 112, 72, 80, 253, 237, 185, 218, 94, 21, 70, 87, 167, 141, 157, 132, 144, 216, 171, 0, 140, 188, 211, 10, 247, 228, 88, 5, 184, 179, 69, 6, 208, 44, 30, 143, 202, 63, 15, 2, 193, 175, 189, 3, 1, 19, 138, 107, 58, 145, 17, 65, 79, 103, 220, 234, 151, 242, 207, 206, 240, 180, 230, 115, 150, 172, 116, 34, 231, 173, 53, 133, 226, 249, 55, 232, 28, 117, 223, 110, 71, 241, 26, 113, 29, 41, 197, 137, 111, 183, 98, 14, 170, 24, 190, 27, 252, 86, 62, 75, 198, 210, 121, 32, 154, 219, 192, 254, 120, 205, 90, 244, 31, 221, 168, 51, 136, 7, 199, 49, 177, 18, 16, 89, 39, 128, 236, 95, 96, 81, 127, 169, 25, 181, 74, 13, 45, 229, 122, 159, 147, 201, 156, 239, 160, 224, 59, 77, 174, 42, 245, 176, 200, 235, 187, 60, 131, 83, 153, 97, 23, 43, 4, 126, 186, 119, 214, 38, 225, 105, 20, 99, 85, 33, 12, 125],
  xn = [3328402341, 4168907908, 4000806809, 4135287693, 4294111757, 3597364157, 3731845041, 2445657428, 1613770832, 33620227, 3462883241, 1445669757, 3892248089, 3050821474, 1303096294, 3967186586, 2412431941, 528646813, 2311702848, 4202528135, 4026202645, 2992200171, 2387036105, 4226871307, 1101901292, 3017069671, 1604494077, 1169141738, 597466303, 1403299063, 3832705686, 2613100635, 1974974402, 3791519004, 1033081774, 1277568618, 1815492186, 2118074177, 4126668546, 2211236943, 1748251740, 1369810420, 3521504564, 4193382664, 3799085459, 2883115123, 1647391059, 706024767, 134480908, 2512897874, 1176707941, 2646852446, 806885416, 932615841, 168101135, 798661301, 235341577, 605164086, 461406363, 3756188221, 3454790438, 1311188841, 2142417613, 3933566367, 302582043, 495158174, 1479289972, 874125870, 907746093, 3698224818, 3025820398, 1537253627, 2756858614, 1983593293, 3084310113, 2108928974, 1378429307, 3722699582, 1580150641, 327451799, 2790478837, 3117535592, 0, 3253595436, 1075847264, 3825007647, 2041688520, 3059440621, 3563743934, 2378943302, 1740553945, 1916352843, 2487896798, 2555137236, 2958579944, 2244988746, 3151024235, 3320835882, 1336584933, 3992714006, 2252555205, 2588757463, 1714631509, 293963156, 2319795663, 3925473552, 67240454, 4269768577, 2689618160, 2017213508, 631218106, 1269344483, 2723238387, 1571005438, 2151694528, 93294474, 1066570413, 563977660, 1882732616, 4059428100, 1673313503, 2008463041, 2950355573, 1109467491, 537923632, 3858759450, 4260623118, 3218264685, 2177748300, 403442708, 638784309, 3287084079, 3193921505, 899127202, 2286175436, 773265209, 2479146071, 1437050866, 4236148354, 2050833735, 3362022572, 3126681063, 840505643, 3866325909, 3227541664, 427917720, 2655997905, 2749160575, 1143087718, 1412049534, 999329963, 193497219, 2353415882, 3354324521, 1807268051, 672404540, 2816401017, 3160301282, 369822493, 2916866934, 3688947771, 1681011286, 1949973070, 336202270, 2454276571, 201721354, 1210328172, 3093060836, 2680341085, 3184776046, 1135389935, 3294782118, 965841320, 831886756, 3554993207, 4068047243, 3588745010, 2345191491, 1849112409, 3664604599, 26054028, 2983581028, 2622377682, 1235855840, 3630984372, 2891339514, 4092916743, 3488279077, 3395642799, 4101667470, 1202630377, 268961816, 1874508501, 4034427016, 1243948399, 1546530418, 941366308, 1470539505, 1941222599, 2546386513, 3421038627, 2715671932, 3899946140, 1042226977, 2521517021, 1639824860, 227249030, 260737669, 3765465232, 2084453954, 1907733956, 3429263018, 2420656344, 100860677, 4160157185, 470683154, 3261161891, 1781871967, 2924959737, 1773779408, 394692241, 2579611992, 974986535, 664706745, 3655459128, 3958962195, 731420851, 571543859, 3530123707, 2849626480, 126783113, 865375399, 765172662, 1008606754, 361203602, 3387549984, 2278477385, 2857719295, 1344809080, 2782912378, 59542671, 1503764984, 160008576, 437062935, 1707065306, 3622233649, 2218934982, 3496503480, 2185314755, 697932208, 1512910199, 504303377, 2075177163, 2824099068, 1841019862, 739644986],
  Ln = [2781242211, 2230877308, 2582542199, 2381740923, 234877682, 3184946027, 2984144751, 1418839493, 1348481072, 50462977, 2848876391, 2102799147, 434634494, 1656084439, 3863849899, 2599188086, 1167051466, 2636087938, 1082771913, 2281340285, 368048890, 3954334041, 3381544775, 201060592, 3963727277, 1739838676, 4250903202, 3930435503, 3206782108, 4149453988, 2531553906, 1536934080, 3262494647, 484572669, 2923271059, 1783375398, 1517041206, 1098792767, 49674231, 1334037708, 1550332980, 4098991525, 886171109, 150598129, 2481090929, 1940642008, 1398944049, 1059722517, 201851908, 1385547719, 1699095331, 1587397571, 674240536, 2704774806, 252314885, 3039795866, 151914247, 908333586, 2602270848, 1038082786, 651029483, 1766729511, 3447698098, 2682942837, 454166793, 2652734339, 1951935532, 775166490, 758520603, 3000790638, 4004797018, 4217086112, 4137964114, 1299594043, 1639438038, 3464344499, 2068982057, 1054729187, 1901997871, 2534638724, 4121318227, 1757008337, 0, 750906861, 1614815264, 535035132, 3363418545, 3988151131, 3201591914, 1183697867, 3647454910, 1265776953, 3734260298, 3566750796, 3903871064, 1250283471, 1807470800, 717615087, 3847203498, 384695291, 3313910595, 3617213773, 1432761139, 2484176261, 3481945413, 283769337, 100925954, 2180939647, 4037038160, 1148730428, 3123027871, 3813386408, 4087501137, 4267549603, 3229630528, 2315620239, 2906624658, 3156319645, 1215313976, 82966005, 3747855548, 3245848246, 1974459098, 1665278241, 807407632, 451280895, 251524083, 1841287890, 1283575245, 337120268, 891687699, 801369324, 3787349855, 2721421207, 3431482436, 959321879, 1469301956, 4065699751, 2197585534, 1199193405, 2898814052, 3887750493, 724703513, 2514908019, 2696962144, 2551808385, 3516813135, 2141445340, 1715741218, 2119445034, 2872807568, 2198571144, 3398190662, 700968686, 3547052216, 1009259540, 2041044702, 3803995742, 487983883, 1991105499, 1004265696, 1449407026, 1316239930, 504629770, 3683797321, 168560134, 1816667172, 3837287516, 1570751170, 1857934291, 4014189740, 2797888098, 2822345105, 2754712981, 936633572, 2347923833, 852879335, 1133234376, 1500395319, 3084545389, 2348912013, 1689376213, 3533459022, 3762923945, 3034082412, 4205598294, 133428468, 634383082, 2949277029, 2398386810, 3913789102, 403703816, 3580869306, 2297460856, 1867130149, 1918643758, 607656988, 4049053350, 3346248884, 1368901318, 600565992, 2090982877, 2632479860, 557719327, 3717614411, 3697393085, 2249034635, 2232388234, 2430627952, 1115438654, 3295786421, 2865522278, 3633334344, 84280067, 33027830, 303828494, 2747425121, 1600795957, 4188952407, 3496589753, 2434238086, 1486471617, 658119965, 3106381470, 953803233, 334231800, 3005978776, 857870609, 3151128937, 1890179545, 2298973838, 2805175444, 3056442267, 574365214, 2450884487, 550103529, 1233637070, 4289353045, 2018519080, 2057691103, 2399374476, 4166623649, 2148108681, 387583245, 3664101311, 836232934, 3330556482, 3100665960, 3280093505, 2955516313, 2002398509, 287182607, 3413881008, 4238890068, 3597515707, 975967766],
  Un = [1671808611, 2089089148, 2006576759, 2072901243, 4061003762, 1807603307, 1873927791, 3310653893, 810573872, 16974337, 1739181671, 729634347, 4263110654, 3613570519, 2883997099, 1989864566, 3393556426, 2191335298, 3376449993, 2106063485, 4195741690, 1508618841, 1204391495, 4027317232, 2917941677, 3563566036, 2734514082, 2951366063, 2629772188, 2767672228, 1922491506, 3227229120, 3082974647, 4246528509, 2477669779, 644500518, 911895606, 1061256767, 4144166391, 3427763148, 878471220, 2784252325, 3845444069, 4043897329, 1905517169, 3631459288, 827548209, 356461077, 67897348, 3344078279, 593839651, 3277757891, 405286936, 2527147926, 84871685, 2595565466, 118033927, 305538066, 2157648768, 3795705826, 3945188843, 661212711, 2999812018, 1973414517, 152769033, 2208177539, 745822252, 439235610, 455947803, 1857215598, 1525593178, 2700827552, 1391895634, 994932283, 3596728278, 3016654259, 695947817, 3812548067, 795958831, 2224493444, 1408607827, 3513301457, 0, 3979133421, 543178784, 4229948412, 2982705585, 1542305371, 1790891114, 3410398667, 3201918910, 961245753, 1256100938, 1289001036, 1491644504, 3477767631, 3496721360, 4012557807, 2867154858, 4212583931, 1137018435, 1305975373, 861234739, 2241073541, 1171229253, 4178635257, 33948674, 2139225727, 1357946960, 1011120188, 2679776671, 2833468328, 1374921297, 2751356323, 1086357568, 2408187279, 2460827538, 2646352285, 944271416, 4110742005, 3168756668, 3066132406, 3665145818, 560153121, 271589392, 4279952895, 4077846003, 3530407890, 3444343245, 202643468, 322250259, 3962553324, 1608629855, 2543990167, 1154254916, 389623319, 3294073796, 2817676711, 2122513534, 1028094525, 1689045092, 1575467613, 422261273, 1939203699, 1621147744, 2174228865, 1339137615, 3699352540, 577127458, 712922154, 2427141008, 2290289544, 1187679302, 3995715566, 3100863416, 339486740, 3732514782, 1591917662, 186455563, 3681988059, 3762019296, 844522546, 978220090, 169743370, 1239126601, 101321734, 611076132, 1558493276, 3260915650, 3547250131, 2901361580, 1655096418, 2443721105, 2510565781, 3828863972, 2039214713, 3878868455, 3359869896, 928607799, 1840765549, 2374762893, 3580146133, 1322425422, 2850048425, 1823791212, 1459268694, 4094161908, 3928346602, 1706019429, 2056189050, 2934523822, 135794696, 3134549946, 2022240376, 628050469, 779246638, 472135708, 2800834470, 3032970164, 3327236038, 3894660072, 3715932637, 1956440180, 522272287, 1272813131, 3185336765, 2340818315, 2323976074, 1888542832, 1044544574, 3049550261, 1722469478, 1222152264, 50660867, 4127324150, 236067854, 1638122081, 895445557, 1475980887, 3117443513, 2257655686, 3243809217, 489110045, 2662934430, 3778599393, 4162055160, 2561878936, 288563729, 1773916777, 3648039385, 2391345038, 2493985684, 2612407707, 505560094, 2274497927, 3911240169, 3460925390, 1442818645, 678973480, 3749357023, 2358182796, 2717407649, 2306869641, 219617805, 3218761151, 3862026214, 1120306242, 1756942440, 1103331905, 2578459033, 762796589, 252780047, 2966125488, 1425844308, 3151392187, 372911126],
  Rn = [1667474886, 2088535288, 2004326894, 2071694838, 4075949567, 1802223062, 1869591006, 3318043793, 808472672, 16843522, 1734846926, 724270422, 4278065639, 3621216949, 2880169549, 1987484396, 3402253711, 2189597983, 3385409673, 2105378810, 4210693615, 1499065266, 1195886990, 4042263547, 2913856577, 3570689971, 2728590687, 2947541573, 2627518243, 2762274643, 1920112356, 3233831835, 3082273397, 4261223649, 2475929149, 640051788, 909531756, 1061110142, 4160160501, 3435941763, 875846760, 2779116625, 3857003729, 4059105529, 1903268834, 3638064043, 825316194, 353713962, 67374088, 3351728789, 589522246, 3284360861, 404236336, 2526454071, 84217610, 2593830191, 117901582, 303183396, 2155911963, 3806477791, 3958056653, 656894286, 2998062463, 1970642922, 151591698, 2206440989, 741110872, 437923380, 454765878, 1852748508, 1515908788, 2694904667, 1381168804, 993742198, 3604373943, 3014905469, 690584402, 3823320797, 791638366, 2223281939, 1398011302, 3520161977, 0, 3991743681, 538992704, 4244381667, 2981218425, 1532751286, 1785380564, 3419096717, 3200178535, 960056178, 1246420628, 1280103576, 1482221744, 3486468741, 3503319995, 4025428677, 2863326543, 4227536621, 1128514950, 1296947098, 859002214, 2240123921, 1162203018, 4193849577, 33687044, 2139062782, 1347481760, 1010582648, 2678045221, 2829640523, 1364325282, 2745433693, 1077985408, 2408548869, 2459086143, 2644360225, 943212656, 4126475505, 3166494563, 3065430391, 3671750063, 555836226, 269496352, 4294908645, 4092792573, 3537006015, 3452783745, 202118168, 320025894, 3974901699, 1600119230, 2543297077, 1145359496, 387397934, 3301201811, 2812801621, 2122220284, 1027426170, 1684319432, 1566435258, 421079858, 1936954854, 1616945344, 2172753945, 1330631070, 3705438115, 572679748, 707427924, 2425400123, 2290647819, 1179044492, 4008585671, 3099120491, 336870440, 3739122087, 1583276732, 185277718, 3688593069, 3772791771, 842159716, 976899700, 168435220, 1229577106, 101059084, 606366792, 1549591736, 3267517855, 3553849021, 2897014595, 1650632388, 2442242105, 2509612081, 3840161747, 2038008818, 3890688725, 3368567691, 926374254, 1835907034, 2374863873, 3587531953, 1313788572, 2846482505, 1819063512, 1448540844, 4109633523, 3941213647, 1701162954, 2054852340, 2930698567, 134748176, 3132806511, 2021165296, 623210314, 774795868, 471606328, 2795958615, 3031746419, 3334885783, 3907527627, 3722280097, 1953799400, 522133822, 1263263126, 3183336545, 2341176845, 2324333839, 1886425312, 1044267644, 3048588401, 1718004428, 1212733584, 50529542, 4143317495, 235803164, 1633788866, 892690282, 1465383342, 3115962473, 2256965911, 3250673817, 488449850, 2661202215, 3789633753, 4177007595, 2560144171, 286339874, 1768537042, 3654906025, 2391705863, 2492770099, 2610673197, 505291324, 2273808917, 3924369609, 3469625735, 1431699370, 673740880, 3755965093, 2358021891, 2711746649, 2307489801, 218961690, 3217021541, 3873845719, 1111672452, 1751693520, 1094828930, 2576986153, 757954394, 252645662, 2964376443, 1414855848, 3149649517, 370555436],
  Nn = [1374988112, 2118214995, 437757123, 975658646, 1001089995, 530400753, 2902087851, 1273168787, 540080725, 2910219766, 2295101073, 4110568485, 1340463100, 3307916247, 641025152, 3043140495, 3736164937, 632953703, 1172967064, 1576976609, 3274667266, 2169303058, 2370213795, 1809054150, 59727847, 361929877, 3211623147, 2505202138, 3569255213, 1484005843, 1239443753, 2395588676, 1975683434, 4102977912, 2572697195, 666464733, 3202437046, 4035489047, 3374361702, 2110667444, 1675577880, 3843699074, 2538681184, 1649639237, 2976151520, 3144396420, 4269907996, 4178062228, 1883793496, 2403728665, 2497604743, 1383856311, 2876494627, 1917518562, 3810496343, 1716890410, 3001755655, 800440835, 2261089178, 3543599269, 807962610, 599762354, 33778362, 3977675356, 2328828971, 2809771154, 4077384432, 1315562145, 1708848333, 101039829, 3509871135, 3299278474, 875451293, 2733856160, 92987698, 2767645557, 193195065, 1080094634, 1584504582, 3178106961, 1042385657, 2531067453, 3711829422, 1306967366, 2438237621, 1908694277, 67556463, 1615861247, 429456164, 3602770327, 2302690252, 1742315127, 2968011453, 126454664, 3877198648, 2043211483, 2709260871, 2084704233, 4169408201, 0, 159417987, 841739592, 504459436, 1817866830, 4245618683, 260388950, 1034867998, 908933415, 168810852, 1750902305, 2606453969, 607530554, 202008497, 2472011535, 3035535058, 463180190, 2160117071, 1641816226, 1517767529, 470948374, 3801332234, 3231722213, 1008918595, 303765277, 235474187, 4069246893, 766945465, 337553864, 1475418501, 2943682380, 4003061179, 2743034109, 4144047775, 1551037884, 1147550661, 1543208500, 2336434550, 3408119516, 3069049960, 3102011747, 3610369226, 1113818384, 328671808, 2227573024, 2236228733, 3535486456, 2935566865, 3341394285, 496906059, 3702665459, 226906860, 2009195472, 733156972, 2842737049, 294930682, 1206477858, 2835123396, 2700099354, 1451044056, 573804783, 2269728455, 3644379585, 2362090238, 2564033334, 2801107407, 2776292904, 3669462566, 1068351396, 742039012, 1350078989, 1784663195, 1417561698, 4136440770, 2430122216, 775550814, 2193862645, 2673705150, 1775276924, 1876241833, 3475313331, 3366754619, 270040487, 3902563182, 3678124923, 3441850377, 1851332852, 3969562369, 2203032232, 3868552805, 2868897406, 566021896, 4011190502, 3135740889, 1248802510, 3936291284, 699432150, 832877231, 708780849, 3332740144, 899835584, 1951317047, 4236429990, 3767586992, 866637845, 4043610186, 1106041591, 2144161806, 395441711, 1984812685, 1139781709, 3433712980, 3835036895, 2664543715, 1282050075, 3240894392, 1181045119, 2640243204, 25965917, 4203181171, 4211818798, 3009879386, 2463879762, 3910161971, 1842759443, 2597806476, 933301370, 1509430414, 3943906441, 3467192302, 3076639029, 3776767469, 2051518780, 2631065433, 1441952575, 404016761, 1942435775, 1408749034, 1610459739, 3745345300, 2017778566, 3400528769, 3110650942, 941896748, 3265478751, 371049330, 3168937228, 675039627, 4279080257, 967311729, 135050206, 3635733660, 1683407248, 2076935265, 3576870512, 1215061108, 3501741890],
  Dn = [1347548327, 1400783205, 3273267108, 2520393566, 3409685355, 4045380933, 2880240216, 2471224067, 1428173050, 4138563181, 2441661558, 636813900, 4233094615, 3620022987, 2149987652, 2411029155, 1239331162, 1730525723, 2554718734, 3781033664, 46346101, 310463728, 2743944855, 3328955385, 3875770207, 2501218972, 3955191162, 3667219033, 768917123, 3545789473, 692707433, 1150208456, 1786102409, 2029293177, 1805211710, 3710368113, 3065962831, 401639597, 1724457132, 3028143674, 409198410, 2196052529, 1620529459, 1164071807, 3769721975, 2226875310, 486441376, 2499348523, 1483753576, 428819965, 2274680428, 3075636216, 598438867, 3799141122, 1474502543, 711349675, 129166120, 53458370, 2592523643, 2782082824, 4063242375, 2988687269, 3120694122, 1559041666, 730517276, 2460449204, 4042459122, 2706270690, 3446004468, 3573941694, 533804130, 2328143614, 2637442643, 2695033685, 839224033, 1973745387, 957055980, 2856345839, 106852767, 1371368976, 4181598602, 1033297158, 2933734917, 1179510461, 3046200461, 91341917, 1862534868, 4284502037, 605657339, 2547432937, 3431546947, 2003294622, 3182487618, 2282195339, 954669403, 3682191598, 1201765386, 3917234703, 3388507166, 0, 2198438022, 1211247597, 2887651696, 1315723890, 4227665663, 1443857720, 507358933, 657861945, 1678381017, 560487590, 3516619604, 975451694, 2970356327, 261314535, 3535072918, 2652609425, 1333838021, 2724322336, 1767536459, 370938394, 182621114, 3854606378, 1128014560, 487725847, 185469197, 2918353863, 3106780840, 3356761769, 2237133081, 1286567175, 3152976349, 4255350624, 2683765030, 3160175349, 3309594171, 878443390, 1988838185, 3704300486, 1756818940, 1673061617, 3403100636, 272786309, 1075025698, 545572369, 2105887268, 4174560061, 296679730, 1841768865, 1260232239, 4091327024, 3960309330, 3497509347, 1814803222, 2578018489, 4195456072, 575138148, 3299409036, 446754879, 3629546796, 4011996048, 3347532110, 3252238545, 4270639778, 915985419, 3483825537, 681933534, 651868046, 2755636671, 3828103837, 223377554, 2607439820, 1649704518, 3270937875, 3901806776, 1580087799, 4118987695, 3198115200, 2087309459, 2842678573, 3016697106, 1003007129, 2802849917, 1860738147, 2077965243, 164439672, 4100872472, 32283319, 2827177882, 1709610350, 2125135846, 136428751, 3874428392, 3652904859, 3460984630, 3572145929, 3593056380, 2939266226, 824852259, 818324884, 3224740454, 930369212, 2801566410, 2967507152, 355706840, 1257309336, 4148292826, 243256656, 790073846, 2373340630, 1296297904, 1422699085, 3756299780, 3818836405, 457992840, 3099667487, 2135319889, 77422314, 1560382517, 1945798516, 788204353, 1521706781, 1385356242, 870912086, 325965383, 2358957921, 2050466060, 2388260884, 2313884476, 4006521127, 901210569, 3990953189, 1014646705, 1503449823, 1062597235, 2031621326, 3212035895, 3931371469, 1533017514, 350174575, 2256028891, 2177544179, 1052338372, 741876788, 1606591296, 1914052035, 213705253, 2334669897, 1107234197, 1899603969, 3725069491, 2631447780, 2422494913, 1635502980, 1893020342, 1950903388, 1120974935],
  Mn = [2807058932, 1699970625, 2764249623, 1586903591, 1808481195, 1173430173, 1487645946, 59984867, 4199882800, 1844882806, 1989249228, 1277555970, 3623636965, 3419915562, 1149249077, 2744104290, 1514790577, 459744698, 244860394, 3235995134, 1963115311, 4027744588, 2544078150, 4190530515, 1608975247, 2627016082, 2062270317, 1507497298, 2200818878, 567498868, 1764313568, 3359936201, 2305455554, 2037970062, 1047239e3, 1910319033, 1337376481, 2904027272, 2892417312, 984907214, 1243112415, 830661914, 861968209, 2135253587, 2011214180, 2927934315, 2686254721, 731183368, 1750626376, 4246310725, 1820824798, 4172763771, 3542330227, 48394827, 2404901663, 2871682645, 671593195, 3254988725, 2073724613, 145085239, 2280796200, 2779915199, 1790575107, 2187128086, 472615631, 3029510009, 4075877127, 3802222185, 4107101658, 3201631749, 1646252340, 4270507174, 1402811438, 1436590835, 3778151818, 3950355702, 3963161475, 4020912224, 2667994737, 273792366, 2331590177, 104699613, 95345982, 3175501286, 2377486676, 1560637892, 3564045318, 369057872, 4213447064, 3919042237, 1137477952, 2658625497, 1119727848, 2340947849, 1530455833, 4007360968, 172466556, 266959938, 516552836, 0, 2256734592, 3980931627, 1890328081, 1917742170, 4294704398, 945164165, 3575528878, 958871085, 3647212047, 2787207260, 1423022939, 775562294, 1739656202, 3876557655, 2530391278, 2443058075, 3310321856, 547512796, 1265195639, 437656594, 3121275539, 719700128, 3762502690, 387781147, 218828297, 3350065803, 2830708150, 2848461854, 428169201, 122466165, 3720081049, 1627235199, 648017665, 4122762354, 1002783846, 2117360635, 695634755, 3336358691, 4234721005, 4049844452, 3704280881, 2232435299, 574624663, 287343814, 612205898, 1039717051, 840019705, 2708326185, 793451934, 821288114, 1391201670, 3822090177, 376187827, 3113855344, 1224348052, 1679968233, 2361698556, 1058709744, 752375421, 2431590963, 1321699145, 3519142200, 2734591178, 188127444, 2177869557, 3727205754, 2384911031, 3215212461, 2648976442, 2450346104, 3432737375, 1180849278, 331544205, 3102249176, 4150144569, 2952102595, 2159976285, 2474404304, 766078933, 313773861, 2570832044, 2108100632, 1668212892, 3145456443, 2013908262, 418672217, 3070356634, 2594734927, 1852171925, 3867060991, 3473416636, 3907448597, 2614737639, 919489135, 164948639, 2094410160, 2997825956, 590424639, 2486224549, 1723872674, 3157750862, 3399941250, 3501252752, 3625268135, 2555048196, 3673637356, 1343127501, 4130281361, 3599595085, 2957853679, 1297403050, 81781910, 3051593425, 2283490410, 532201772, 1367295589, 3926170974, 895287692, 1953757831, 1093597963, 492483431, 3528626907, 1446242576, 1192455638, 1636604631, 209336225, 344873464, 1015671571, 669961897, 3375740769, 3857572124, 2973530695, 3747192018, 1933530610, 3464042516, 935293895, 3454686199, 2858115069, 1863638845, 3683022916, 4085369519, 3292445032, 875313188, 1080017571, 3279033885, 621591778, 1233856572, 2504130317, 24197544, 3017672716, 3835484340, 3247465558, 2220981195, 3060847922, 1551124588, 1463996600],
  qn = [4104605777, 1097159550, 396673818, 660510266, 2875968315, 2638606623, 4200115116, 3808662347, 821712160, 1986918061, 3430322568, 38544885, 3856137295, 718002117, 893681702, 1654886325, 2975484382, 3122358053, 3926825029, 4274053469, 796197571, 1290801793, 1184342925, 3556361835, 2405426947, 2459735317, 1836772287, 1381620373, 3196267988, 1948373848, 3764988233, 3385345166, 3263785589, 2390325492, 1480485785, 3111247143, 3780097726, 2293045232, 548169417, 3459953789, 3746175075, 439452389, 1362321559, 1400849762, 1685577905, 1806599355, 2174754046, 137073913, 1214797936, 1174215055, 3731654548, 2079897426, 1943217067, 1258480242, 529487843, 1437280870, 3945269170, 3049390895, 3313212038, 923313619, 679998e3, 3215307299, 57326082, 377642221, 3474729866, 2041877159, 133361907, 1776460110, 3673476453, 96392454, 878845905, 2801699524, 777231668, 4082475170, 2330014213, 4142626212, 2213296395, 1626319424, 1906247262, 1846563261, 562755902, 3708173718, 1040559837, 3871163981, 1418573201, 3294430577, 114585348, 1343618912, 2566595609, 3186202582, 1078185097, 3651041127, 3896688048, 2307622919, 425408743, 3371096953, 2081048481, 1108339068, 2216610296, 0, 2156299017, 736970802, 292596766, 1517440620, 251657213, 2235061775, 2933202493, 758720310, 265905162, 1554391400, 1532285339, 908999204, 174567692, 1474760595, 4002861748, 2610011675, 3234156416, 3693126241, 2001430874, 303699484, 2478443234, 2687165888, 585122620, 454499602, 151849742, 2345119218, 3064510765, 514443284, 4044981591, 1963412655, 2581445614, 2137062819, 19308535, 1928707164, 1715193156, 4219352155, 1126790795, 600235211, 3992742070, 3841024952, 836553431, 1669664834, 2535604243, 3323011204, 1243905413, 3141400786, 4180808110, 698445255, 2653899549, 2989552604, 2253581325, 3252932727, 3004591147, 1891211689, 2487810577, 3915653703, 4237083816, 4030667424, 2100090966, 865136418, 1229899655, 953270745, 3399679628, 3557504664, 4118925222, 2061379749, 3079546586, 2915017791, 983426092, 2022837584, 1607244650, 2118541908, 2366882550, 3635996816, 972512814, 3283088770, 1568718495, 3499326569, 3576539503, 621982671, 2895723464, 410887952, 2623762152, 1002142683, 645401037, 1494807662, 2595684844, 1335535747, 2507040230, 4293295786, 3167684641, 367585007, 3885750714, 1865862730, 2668221674, 2960971305, 2763173681, 1059270954, 2777952454, 2724642869, 1320957812, 2194319100, 2429595872, 2815956275, 77089521, 3973773121, 3444575871, 2448830231, 1305906550, 4021308739, 2857194700, 2516901860, 3518358430, 1787304780, 740276417, 1699839814, 1592394909, 2352307457, 2272556026, 188821243, 1729977011, 3687994002, 274084841, 3594982253, 3613494426, 2701949495, 4162096729, 322734571, 2837966542, 1640576439, 484830689, 1202797690, 3537852828, 4067639125, 349075736, 3342319475, 4157467219, 4255800159, 1030690015, 1155237496, 2951971274, 1757691577, 607398968, 2738905026, 499347990, 3794078908, 1011452712, 227885567, 2818666809, 213114376, 3034881240, 1455525988, 3414450555, 850817237, 1817998408, 3092726480],
  Fn = [0, 235474187, 470948374, 303765277, 941896748, 908933415, 607530554, 708780849, 1883793496, 2118214995, 1817866830, 1649639237, 1215061108, 1181045119, 1417561698, 1517767529, 3767586992, 4003061179, 4236429990, 4069246893, 3635733660, 3602770327, 3299278474, 3400528769, 2430122216, 2664543715, 2362090238, 2193862645, 2835123396, 2801107407, 3035535058, 3135740889, 3678124923, 3576870512, 3341394285, 3374361702, 3810496343, 3977675356, 4279080257, 4043610186, 2876494627, 2776292904, 3076639029, 3110650942, 2472011535, 2640243204, 2403728665, 2169303058, 1001089995, 899835584, 666464733, 699432150, 59727847, 226906860, 530400753, 294930682, 1273168787, 1172967064, 1475418501, 1509430414, 1942435775, 2110667444, 1876241833, 1641816226, 2910219766, 2743034109, 2976151520, 3211623147, 2505202138, 2606453969, 2302690252, 2269728455, 3711829422, 3543599269, 3240894392, 3475313331, 3843699074, 3943906441, 4178062228, 4144047775, 1306967366, 1139781709, 1374988112, 1610459739, 1975683434, 2076935265, 1775276924, 1742315127, 1034867998, 866637845, 566021896, 800440835, 92987698, 193195065, 429456164, 395441711, 1984812685, 2017778566, 1784663195, 1683407248, 1315562145, 1080094634, 1383856311, 1551037884, 101039829, 135050206, 437757123, 337553864, 1042385657, 807962610, 573804783, 742039012, 2531067453, 2564033334, 2328828971, 2227573024, 2935566865, 2700099354, 3001755655, 3168937228, 3868552805, 3902563182, 4203181171, 4102977912, 3736164937, 3501741890, 3265478751, 3433712980, 1106041591, 1340463100, 1576976609, 1408749034, 2043211483, 2009195472, 1708848333, 1809054150, 832877231, 1068351396, 766945465, 599762354, 159417987, 126454664, 361929877, 463180190, 2709260871, 2943682380, 3178106961, 3009879386, 2572697195, 2538681184, 2236228733, 2336434550, 3509871135, 3745345300, 3441850377, 3274667266, 3910161971, 3877198648, 4110568485, 4211818798, 2597806476, 2497604743, 2261089178, 2295101073, 2733856160, 2902087851, 3202437046, 2968011453, 3936291284, 3835036895, 4136440770, 4169408201, 3535486456, 3702665459, 3467192302, 3231722213, 2051518780, 1951317047, 1716890410, 1750902305, 1113818384, 1282050075, 1584504582, 1350078989, 168810852, 67556463, 371049330, 404016761, 841739592, 1008918595, 775550814, 540080725, 3969562369, 3801332234, 4035489047, 4269907996, 3569255213, 3669462566, 3366754619, 3332740144, 2631065433, 2463879762, 2160117071, 2395588676, 2767645557, 2868897406, 3102011747, 3069049960, 202008497, 33778362, 270040487, 504459436, 875451293, 975658646, 675039627, 641025152, 2084704233, 1917518562, 1615861247, 1851332852, 1147550661, 1248802510, 1484005843, 1451044056, 933301370, 967311729, 733156972, 632953703, 260388950, 25965917, 328671808, 496906059, 1206477858, 1239443753, 1543208500, 1441952575, 2144161806, 1908694277, 1675577880, 1842759443, 3610369226, 3644379585, 3408119516, 3307916247, 4011190502, 3776767469, 4077384432, 4245618683, 2809771154, 2842737049, 3144396420, 3043140495, 2673705150, 2438237621, 2203032232, 2370213795],
  Kn = [0, 185469197, 370938394, 487725847, 741876788, 657861945, 975451694, 824852259, 1483753576, 1400783205, 1315723890, 1164071807, 1950903388, 2135319889, 1649704518, 1767536459, 2967507152, 3152976349, 2801566410, 2918353863, 2631447780, 2547432937, 2328143614, 2177544179, 3901806776, 3818836405, 4270639778, 4118987695, 3299409036, 3483825537, 3535072918, 3652904859, 2077965243, 1893020342, 1841768865, 1724457132, 1474502543, 1559041666, 1107234197, 1257309336, 598438867, 681933534, 901210569, 1052338372, 261314535, 77422314, 428819965, 310463728, 3409685355, 3224740454, 3710368113, 3593056380, 3875770207, 3960309330, 4045380933, 4195456072, 2471224067, 2554718734, 2237133081, 2388260884, 3212035895, 3028143674, 2842678573, 2724322336, 4138563181, 4255350624, 3769721975, 3955191162, 3667219033, 3516619604, 3431546947, 3347532110, 2933734917, 2782082824, 3099667487, 3016697106, 2196052529, 2313884476, 2499348523, 2683765030, 1179510461, 1296297904, 1347548327, 1533017514, 1786102409, 1635502980, 2087309459, 2003294622, 507358933, 355706840, 136428751, 53458370, 839224033, 957055980, 605657339, 790073846, 2373340630, 2256028891, 2607439820, 2422494913, 2706270690, 2856345839, 3075636216, 3160175349, 3573941694, 3725069491, 3273267108, 3356761769, 4181598602, 4063242375, 4011996048, 3828103837, 1033297158, 915985419, 730517276, 545572369, 296679730, 446754879, 129166120, 213705253, 1709610350, 1860738147, 1945798516, 2029293177, 1239331162, 1120974935, 1606591296, 1422699085, 4148292826, 4233094615, 3781033664, 3931371469, 3682191598, 3497509347, 3446004468, 3328955385, 2939266226, 2755636671, 3106780840, 2988687269, 2198438022, 2282195339, 2501218972, 2652609425, 1201765386, 1286567175, 1371368976, 1521706781, 1805211710, 1620529459, 2105887268, 1988838185, 533804130, 350174575, 164439672, 46346101, 870912086, 954669403, 636813900, 788204353, 2358957921, 2274680428, 2592523643, 2441661558, 2695033685, 2880240216, 3065962831, 3182487618, 3572145929, 3756299780, 3270937875, 3388507166, 4174560061, 4091327024, 4006521127, 3854606378, 1014646705, 930369212, 711349675, 560487590, 272786309, 457992840, 106852767, 223377554, 1678381017, 1862534868, 1914052035, 2031621326, 1211247597, 1128014560, 1580087799, 1428173050, 32283319, 182621114, 401639597, 486441376, 768917123, 651868046, 1003007129, 818324884, 1503449823, 1385356242, 1333838021, 1150208456, 1973745387, 2125135846, 1673061617, 1756818940, 2970356327, 3120694122, 2802849917, 2887651696, 2637442643, 2520393566, 2334669897, 2149987652, 3917234703, 3799141122, 4284502037, 4100872472, 3309594171, 3460984630, 3545789473, 3629546796, 2050466060, 1899603969, 1814803222, 1730525723, 1443857720, 1560382517, 1075025698, 1260232239, 575138148, 692707433, 878443390, 1062597235, 243256656, 91341917, 409198410, 325965383, 3403100636, 3252238545, 3704300486, 3620022987, 3874428392, 3990953189, 4042459122, 4227665663, 2460449204, 2578018489, 2226875310, 2411029155, 3198115200, 3046200461, 2827177882, 2743944855],
  jn = [0, 218828297, 437656594, 387781147, 875313188, 958871085, 775562294, 590424639, 1750626376, 1699970625, 1917742170, 2135253587, 1551124588, 1367295589, 1180849278, 1265195639, 3501252752, 3720081049, 3399941250, 3350065803, 3835484340, 3919042237, 4270507174, 4085369519, 3102249176, 3051593425, 2734591178, 2952102595, 2361698556, 2177869557, 2530391278, 2614737639, 3145456443, 3060847922, 2708326185, 2892417312, 2404901663, 2187128086, 2504130317, 2555048196, 3542330227, 3727205754, 3375740769, 3292445032, 3876557655, 3926170974, 4246310725, 4027744588, 1808481195, 1723872674, 1910319033, 2094410160, 1608975247, 1391201670, 1173430173, 1224348052, 59984867, 244860394, 428169201, 344873464, 935293895, 984907214, 766078933, 547512796, 1844882806, 1627235199, 2011214180, 2062270317, 1507497298, 1423022939, 1137477952, 1321699145, 95345982, 145085239, 532201772, 313773861, 830661914, 1015671571, 731183368, 648017665, 3175501286, 2957853679, 2807058932, 2858115069, 2305455554, 2220981195, 2474404304, 2658625497, 3575528878, 3625268135, 3473416636, 3254988725, 3778151818, 3963161475, 4213447064, 4130281361, 3599595085, 3683022916, 3432737375, 3247465558, 3802222185, 4020912224, 4172763771, 4122762354, 3201631749, 3017672716, 2764249623, 2848461854, 2331590177, 2280796200, 2431590963, 2648976442, 104699613, 188127444, 472615631, 287343814, 840019705, 1058709744, 671593195, 621591778, 1852171925, 1668212892, 1953757831, 2037970062, 1514790577, 1463996600, 1080017571, 1297403050, 3673637356, 3623636965, 3235995134, 3454686199, 4007360968, 3822090177, 4107101658, 4190530515, 2997825956, 3215212461, 2830708150, 2779915199, 2256734592, 2340947849, 2627016082, 2443058075, 172466556, 122466165, 273792366, 492483431, 1047239e3, 861968209, 612205898, 695634755, 1646252340, 1863638845, 2013908262, 1963115311, 1446242576, 1530455833, 1277555970, 1093597963, 1636604631, 1820824798, 2073724613, 1989249228, 1436590835, 1487645946, 1337376481, 1119727848, 164948639, 81781910, 331544205, 516552836, 1039717051, 821288114, 669961897, 719700128, 2973530695, 3157750862, 2871682645, 2787207260, 2232435299, 2283490410, 2667994737, 2450346104, 3647212047, 3564045318, 3279033885, 3464042516, 3980931627, 3762502690, 4150144569, 4199882800, 3070356634, 3121275539, 2904027272, 2686254721, 2200818878, 2384911031, 2570832044, 2486224549, 3747192018, 3528626907, 3310321856, 3359936201, 3950355702, 3867060991, 4049844452, 4234721005, 1739656202, 1790575107, 2108100632, 1890328081, 1402811438, 1586903591, 1233856572, 1149249077, 266959938, 48394827, 369057872, 418672217, 1002783846, 919489135, 567498868, 752375421, 209336225, 24197544, 376187827, 459744698, 945164165, 895287692, 574624663, 793451934, 1679968233, 1764313568, 2117360635, 1933530610, 1343127501, 1560637892, 1243112415, 1192455638, 3704280881, 3519142200, 3336358691, 3419915562, 3907448597, 3857572124, 4075877127, 4294704398, 3029510009, 3113855344, 2927934315, 2744104290, 2159976285, 2377486676, 2594734927, 2544078150],
  $n = [0, 151849742, 303699484, 454499602, 607398968, 758720310, 908999204, 1059270954, 1214797936, 1097159550, 1517440620, 1400849762, 1817998408, 1699839814, 2118541908, 2001430874, 2429595872, 2581445614, 2194319100, 2345119218, 3034881240, 3186202582, 2801699524, 2951971274, 3635996816, 3518358430, 3399679628, 3283088770, 4237083816, 4118925222, 4002861748, 3885750714, 1002142683, 850817237, 698445255, 548169417, 529487843, 377642221, 227885567, 77089521, 1943217067, 2061379749, 1640576439, 1757691577, 1474760595, 1592394909, 1174215055, 1290801793, 2875968315, 2724642869, 3111247143, 2960971305, 2405426947, 2253581325, 2638606623, 2487810577, 3808662347, 3926825029, 4044981591, 4162096729, 3342319475, 3459953789, 3576539503, 3693126241, 1986918061, 2137062819, 1685577905, 1836772287, 1381620373, 1532285339, 1078185097, 1229899655, 1040559837, 923313619, 740276417, 621982671, 439452389, 322734571, 137073913, 19308535, 3871163981, 4021308739, 4104605777, 4255800159, 3263785589, 3414450555, 3499326569, 3651041127, 2933202493, 2815956275, 3167684641, 3049390895, 2330014213, 2213296395, 2566595609, 2448830231, 1305906550, 1155237496, 1607244650, 1455525988, 1776460110, 1626319424, 2079897426, 1928707164, 96392454, 213114376, 396673818, 514443284, 562755902, 679998e3, 865136418, 983426092, 3708173718, 3557504664, 3474729866, 3323011204, 4180808110, 4030667424, 3945269170, 3794078908, 2507040230, 2623762152, 2272556026, 2390325492, 2975484382, 3092726480, 2738905026, 2857194700, 3973773121, 3856137295, 4274053469, 4157467219, 3371096953, 3252932727, 3673476453, 3556361835, 2763173681, 2915017791, 3064510765, 3215307299, 2156299017, 2307622919, 2459735317, 2610011675, 2081048481, 1963412655, 1846563261, 1729977011, 1480485785, 1362321559, 1243905413, 1126790795, 878845905, 1030690015, 645401037, 796197571, 274084841, 425408743, 38544885, 188821243, 3613494426, 3731654548, 3313212038, 3430322568, 4082475170, 4200115116, 3780097726, 3896688048, 2668221674, 2516901860, 2366882550, 2216610296, 3141400786, 2989552604, 2837966542, 2687165888, 1202797690, 1320957812, 1437280870, 1554391400, 1669664834, 1787304780, 1906247262, 2022837584, 265905162, 114585348, 499347990, 349075736, 736970802, 585122620, 972512814, 821712160, 2595684844, 2478443234, 2293045232, 2174754046, 3196267988, 3079546586, 2895723464, 2777952454, 3537852828, 3687994002, 3234156416, 3385345166, 4142626212, 4293295786, 3841024952, 3992742070, 174567692, 57326082, 410887952, 292596766, 777231668, 660510266, 1011452712, 893681702, 1108339068, 1258480242, 1343618912, 1494807662, 1715193156, 1865862730, 1948373848, 2100090966, 2701949495, 2818666809, 3004591147, 3122358053, 2235061775, 2352307457, 2535604243, 2653899549, 3915653703, 3764988233, 4219352155, 4067639125, 3444575871, 3294430577, 3746175075, 3594982253, 836553431, 953270745, 600235211, 718002117, 367585007, 484830689, 133361907, 251657213, 2041877159, 1891211689, 1806599355, 1654886325, 1568718495, 1418573201, 1335535747, 1184342925];
function Bn(e) {
  for (var t = [], n = 0; n < e.length; n += 4) {
    t.push(e[n] << 24 | e[n + 1] << 16 | e[n + 2] << 8 | e[n + 3]);
  }
  return t;
}
var Wn = /*#__PURE__*/function () {
  function Wn(e) {
    (0, _classCallCheck2.default)(this, Wn);
    if (!(this instanceof Wn)) throw Error("AES must be instanitated with `new`");
    Object.defineProperty(this, "key", {
      value: In(e, !0)
    }), this._prepare();
  }
  (0, _createClass2.default)(Wn, [{
    key: "_prepare",
    value: function _prepare() {
      var e = Cn[this.key.length];
      if (null == e) throw new Error("invalid key size (must be 16, 24 or 32 bytes)");
      this._Ke = [], this._Kd = [];
      for (var t = 0; t <= e; t++) {
        this._Ke.push([0, 0, 0, 0]), this._Kd.push([0, 0, 0, 0]);
      }
      var n,
        s = 4 * (e + 1),
        r = this.key.length / 4,
        i = Bn(this.key);
      for (t = 0; t < r; t++) {
        n = t >> 2, this._Ke[n][t % 4] = i[t], this._Kd[e - n][t % 4] = i[t];
      }
      for (var o, a = 0, c = r; c < s;) {
        if (o = i[r - 1], i[0] ^= On[o >> 16 & 255] << 24 ^ On[o >> 8 & 255] << 16 ^ On[255 & o] << 8 ^ On[o >> 24 & 255] ^ Pn[a] << 24, a += 1, 8 != r) for (t = 1; t < r; t++) {
          i[t] ^= i[t - 1];
        } else {
          for (t = 1; t < r / 2; t++) {
            i[t] ^= i[t - 1];
          }
          o = i[r / 2 - 1], i[r / 2] ^= On[255 & o] ^ On[o >> 8 & 255] << 8 ^ On[o >> 16 & 255] << 16 ^ On[o >> 24 & 255] << 24;
          for (t = r / 2 + 1; t < r; t++) {
            i[t] ^= i[t - 1];
          }
        }
        for (t = 0; t < r && c < s;) {
          u = c >> 2, l = c % 4, this._Ke[u][l] = i[t], this._Kd[e - u][l] = i[t++], c++;
        }
      }
      for (var u = 1; u < e; u++) {
        for (var l = 0; l < 4; l++) {
          o = this._Kd[u][l], this._Kd[u][l] = Fn[o >> 24 & 255] ^ Kn[o >> 16 & 255] ^ jn[o >> 8 & 255] ^ $n[255 & o];
        }
      }
    }
  }, {
    key: "encrypt",
    value: function encrypt(e) {
      if (16 != e.length) throw new Error("invalid plaintext size (must be 16 bytes)");
      for (var t = this._Ke.length - 1, n = [0, 0, 0, 0], s = Bn(e), r = 0; r < 4; r++) {
        s[r] ^= this._Ke[0][r];
      }
      for (var i = 1; i < t; i++) {
        for (r = 0; r < 4; r++) {
          n[r] = xn[s[r] >> 24 & 255] ^ Ln[s[(r + 1) % 4] >> 16 & 255] ^ Un[s[(r + 2) % 4] >> 8 & 255] ^ Rn[255 & s[(r + 3) % 4]] ^ this._Ke[i][r];
        }
        s = n.slice();
      }
      var o,
        a = Sn(16);
      for (r = 0; r < 4; r++) {
        o = this._Ke[t][r], a[4 * r] = 255 & (On[s[r] >> 24 & 255] ^ o >> 24), a[4 * r + 1] = 255 & (On[s[(r + 1) % 4] >> 16 & 255] ^ o >> 16), a[4 * r + 2] = 255 & (On[s[(r + 2) % 4] >> 8 & 255] ^ o >> 8), a[4 * r + 3] = 255 & (On[255 & s[(r + 3) % 4]] ^ o);
      }
      return a;
    }
  }, {
    key: "decrypt",
    value: function decrypt(e) {
      if (16 != e.length) throw new Error("invalid ciphertext size (must be 16 bytes)");
      for (var t = this._Kd.length - 1, n = [0, 0, 0, 0], s = Bn(e), r = 0; r < 4; r++) {
        s[r] ^= this._Kd[0][r];
      }
      for (var i = 1; i < t; i++) {
        for (r = 0; r < 4; r++) {
          n[r] = Nn[s[r] >> 24 & 255] ^ Dn[s[(r + 3) % 4] >> 16 & 255] ^ Mn[s[(r + 2) % 4] >> 8 & 255] ^ qn[255 & s[(r + 1) % 4]] ^ this._Kd[i][r];
        }
        s = n.slice();
      }
      var o,
        a = Sn(16);
      for (r = 0; r < 4; r++) {
        o = this._Kd[t][r], a[4 * r] = 255 & (En[s[r] >> 24 & 255] ^ o >> 24), a[4 * r + 1] = 255 & (En[s[(r + 3) % 4] >> 16 & 255] ^ o >> 16), a[4 * r + 2] = 255 & (En[s[(r + 2) % 4] >> 8 & 255] ^ o >> 8), a[4 * r + 3] = 255 & (En[255 & s[(r + 1) % 4]] ^ o);
      }
      return a;
    }
  }]);
  return Wn;
}();
var Hn = /*#__PURE__*/function () {
  function Hn(e) {
    (0, _classCallCheck2.default)(this, Hn);
    if (!(this instanceof Hn)) throw Error("AES must be instanitated with `new`");
    this.description = "Electronic Code Block", this.name = "ecb", this._aes = new Wn(e);
  }
  (0, _createClass2.default)(Hn, [{
    key: "encrypt",
    value: function encrypt(e) {
      if ((e = In(e)).length % 16 != 0) throw new Error("invalid plaintext size (must be multiple of 16 bytes)");
      for (var t = Sn(e.length), n = Sn(16), s = 0; s < e.length; s += 16) {
        bn(e, n, 0, s, s + 16), bn(n = this._aes.encrypt(n), t, s);
      }
      return t;
    }
  }, {
    key: "decrypt",
    value: function decrypt(e) {
      if ((e = In(e)).length % 16 != 0) throw new Error("invalid ciphertext size (must be multiple of 16 bytes)");
      for (var t = Sn(e.length), n = Sn(16), s = 0; s < e.length; s += 16) {
        bn(e, n, 0, s, s + 16), bn(n = this._aes.decrypt(n), t, s);
      }
      return t;
    }
  }]);
  return Hn;
}();
var Jn = /*#__PURE__*/function () {
  function Jn(e, t) {
    (0, _classCallCheck2.default)(this, Jn);
    if (!(this instanceof Jn)) throw Error("AES must be instanitated with `new`");
    if (this.description = "Cipher Block Chaining", this.name = "cbc", t) {
      if (16 != t.length) throw new Error("invalid initialation vector size (must be 16 bytes)");
    } else t = Sn(16);
    this._lastCipherblock = In(t, !0), this._aes = new Wn(e);
  }
  (0, _createClass2.default)(Jn, [{
    key: "encrypt",
    value: function encrypt(e) {
      if ((e = In(e)).length % 16 != 0) throw new Error("invalid plaintext size (must be multiple of 16 bytes)");
      for (var t = Sn(e.length), n = Sn(16), s = 0; s < e.length; s += 16) {
        bn(e, n, 0, s, s + 16);
        for (var r = 0; r < 16; r++) {
          n[r] ^= this._lastCipherblock[r];
        }
        this._lastCipherblock = this._aes.encrypt(n), bn(this._lastCipherblock, t, s);
      }
      return t;
    }
  }, {
    key: "decrypt",
    value: function decrypt(e) {
      if ((e = In(e)).length % 16 != 0) throw new Error("invalid ciphertext size (must be multiple of 16 bytes)");
      for (var t = Sn(e.length), n = Sn(16), s = 0; s < e.length; s += 16) {
        bn(e, n, 0, s, s + 16), n = this._aes.decrypt(n);
        for (var r = 0; r < 16; r++) {
          t[s + r] = n[r] ^ this._lastCipherblock[r];
        }
        bn(e, this._lastCipherblock, 0, s, s + 16);
      }
      return t;
    }
  }]);
  return Jn;
}();
var zn = /*#__PURE__*/function () {
  function zn(e, t, n) {
    (0, _classCallCheck2.default)(this, zn);
    if (!(this instanceof zn)) throw Error("AES must be instanitated with `new`");
    if (this.description = "Cipher Feedback", this.name = "cfb", t) {
      if (16 != t.length) throw new Error("invalid initialation vector size (must be 16 size)");
    } else t = Sn(16);
    n || (n = 1), this.segmentSize = n, this._shiftRegister = In(t, !0), this._aes = new Wn(e);
  }
  (0, _createClass2.default)(zn, [{
    key: "encrypt",
    value: function encrypt(e) {
      if (e.length % this.segmentSize != 0) throw new Error("invalid plaintext size (must be segmentSize bytes)");
      for (var t, n = In(e, !0), s = 0; s < n.length; s += this.segmentSize) {
        t = this._aes.encrypt(this._shiftRegister);
        for (var r = 0; r < this.segmentSize; r++) {
          n[s + r] ^= t[r];
        }
        bn(this._shiftRegister, this._shiftRegister, 0, this.segmentSize), bn(n, this._shiftRegister, 16 - this.segmentSize, s, s + this.segmentSize);
      }
      return n;
    }
  }, {
    key: "decrypt",
    value: function decrypt(e) {
      if (e.length % this.segmentSize != 0) throw new Error("invalid ciphertext size (must be segmentSize bytes)");
      for (var t, n = In(e, !0), s = 0; s < n.length; s += this.segmentSize) {
        t = this._aes.encrypt(this._shiftRegister);
        for (var r = 0; r < this.segmentSize; r++) {
          n[s + r] ^= t[r];
        }
        bn(this._shiftRegister, this._shiftRegister, 0, this.segmentSize), bn(e, this._shiftRegister, 16 - this.segmentSize, s, s + this.segmentSize);
      }
      return n;
    }
  }]);
  return zn;
}();
var Vn = /*#__PURE__*/function () {
  function Vn(e, t) {
    (0, _classCallCheck2.default)(this, Vn);
    if (!(this instanceof Vn)) throw Error("AES must be instanitated with `new`");
    if (this.description = "Output Feedback", this.name = "ofb", t) {
      if (16 != t.length) throw new Error("invalid initialation vector size (must be 16 bytes)");
    } else t = Sn(16);
    this._lastPrecipher = In(t, !0), this._lastPrecipherIndex = 16, this._aes = new Wn(e);
  }
  (0, _createClass2.default)(Vn, [{
    key: "encrypt",
    value: function encrypt(e) {
      for (var t = In(e, !0), n = 0; n < t.length; n++) {
        16 === this._lastPrecipherIndex && (this._lastPrecipher = this._aes.encrypt(this._lastPrecipher), this._lastPrecipherIndex = 0), t[n] ^= this._lastPrecipher[this._lastPrecipherIndex++];
      }
      return t;
    }
  }, {
    key: "decrypt",
    value: function decrypt(e) {
      return this.encrypt(e);
    }
  }]);
  return Vn;
}();
var Gn = /*#__PURE__*/function () {
  function Gn(e) {
    (0, _classCallCheck2.default)(this, Gn);
    if (!(this instanceof Gn)) throw Error("Counter must be instanitated with `new`");
    0 === e || e || (e = 1), "number" == typeof e ? (this._counter = Sn(16), this.setValue(e)) : this.setBytes(e);
  }
  (0, _createClass2.default)(Gn, [{
    key: "setValue",
    value: function setValue(e) {
      if ("number" != typeof e || parseInt(e) != e) throw new Error("invalid counter value (must be an integer)");
      if (e > Number.MAX_SAFE_INTEGER) throw new Error("integer value out of safe range");
      for (var t = 15; t >= 0; --t) {
        this._counter[t] = e % 256, e = parseInt(e / 256);
      }
    }
  }, {
    key: "setBytes",
    value: function setBytes(e) {
      if (16 != (e = In(e, !0)).length) throw new Error("invalid counter bytes size (must be 16 bytes)");
      this._counter = e;
    }
  }, {
    key: "increment",
    value: function increment() {
      for (var e = 15; e >= 0; e--) {
        if (255 !== this._counter[e]) {
          this._counter[e]++;
          break;
        }
        this._counter[e] = 0;
      }
    }
  }]);
  return Gn;
}();
var Qn = /*#__PURE__*/function () {
  function Qn(e, t) {
    (0, _classCallCheck2.default)(this, Qn);
    if (!(this instanceof Qn)) throw Error("AES must be instanitated with `new`");
    this.description = "Counter", this.name = "ctr", t instanceof Gn || (t = new Gn(t)), this._counter = t, this._remainingCounter = null, this._remainingCounterIndex = 16, this._aes = new Wn(e);
  }
  (0, _createClass2.default)(Qn, [{
    key: "encrypt",
    value: function encrypt(e) {
      for (var t = In(e, !0), n = 0; n < t.length; n++) {
        16 === this._remainingCounterIndex && (this._remainingCounter = this._aes.encrypt(this._counter._counter), this._remainingCounterIndex = 0, this._counter.increment()), t[n] ^= this._remainingCounter[this._remainingCounterIndex++];
      }
      return t;
    }
  }, {
    key: "decrypt",
    value: function decrypt(e) {
      return this.encrypt(e);
    }
  }]);
  return Qn;
}();
var Yn = {
  AES: Wn,
  Counter: Gn,
  ModeOfOperation: {
    ecb: Hn,
    cbc: Jn,
    cfb: zn,
    ofb: Vn,
    ctr: Qn
  },
  utils: {
    hex: Tn,
    utf8: An
  },
  padding: {
    pkcs7: {
      pad: function pad(e) {
        var t = 16 - (e = In(e, !0)).length % 16,
          n = Sn(e.length + t);
        bn(e, n);
        for (var s = e.length; s < n.length; s++) {
          n[s] = t;
        }
        return n;
      },
      strip: function strip(e) {
        if ((e = In(e, !0)).length < 16) throw new Error("PKCS#7 invalid length");
        var t = e[e.length - 1];
        if (t > 16) throw new Error("PKCS#7 padding byte out of range");
        for (var n = e.length - t, s = 0; s < t; s++) {
          if (e[n + s] !== t) throw new Error("PKCS#7 invalid padding byte");
        }
        var r = Sn(n);
        return bn(e, r, 0, 0, n), r;
      }
    }
  },
  _arrayTest: {
    coerceArray: In,
    createArray: Sn,
    copyArray: bn
  }
};
function Xn(e, t, n) {
  var s = new Uint8Array(uni.base64ToArrayBuffer(t)),
    r = Yn.utils.utf8.toBytes(n),
    i = Yn.utils.utf8.toBytes(e),
    o = new Yn.ModeOfOperation.cbc(s, r),
    a = Yn.padding.pkcs7.pad(i),
    c = o.encrypt(a);
  return uni.arrayBufferToBase64(c);
}
var Zn,
  es,
  ts = null;
var ns = /*#__PURE__*/function (_n11) {
  (0, _inherits2.default)(ns, _n11);
  var _super8 = _createSuper(ns);
  function ns(e) {
    var _this19;
    (0, _classCallCheck2.default)(this, ns);
    _this19 = _super8.call(this, e), _this19.clientType = "mp-weixin", _this19.userEncryptKey = null;
    return _this19;
  }
  (0, _createClass2.default)(ns, [{
    key: "isLogin",
    value: function isLogin() {
      return !!this.scopedGlobalCache.mpWeixinCode || !!this.scopedGlobalCache.mpWeixinOpenid;
    }
  }, {
    key: "prepare",
    value: function () {
      var _prepare2 = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee52() {
        return _regenerator.default.wrap(function _callee52$(_context52) {
          while (1) {
            switch (_context52.prev = _context52.next) {
              case 0:
                if (this.isLogin()) {
                  _context52.next = 7;
                  break;
                }
                if (this.scopedGlobalCache.initPromise) {
                  _context52.next = 3;
                  break;
                }
                throw new Error("`uniCloud.initSecureNetworkByWeixin` has not yet been called");
              case 3:
                _context52.next = 5;
                return this.scopedGlobalCache.initPromise;
              case 5:
                if (this.isLogin()) {
                  _context52.next = 7;
                  break;
                }
                throw new Error("uniCloud.initSecureNetworkByWeixin` has not yet been called or successfully excuted");
              case 7:
              case "end":
                return _context52.stop();
            }
          }
        }, _callee52, this);
      }));
      function prepare() {
        return _prepare2.apply(this, arguments);
      }
      return prepare;
    }()
  }, {
    key: "getUserEncryptKey",
    value: function () {
      var _getUserEncryptKey = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee53() {
        var _this20 = this;
        var e;
        return _regenerator.default.wrap(function _callee53$(_context53) {
          while (1) {
            switch (_context53.prev = _context53.next) {
              case 0:
                if (!this.userEncryptKey) {
                  _context53.next = 2;
                  break;
                }
                return _context53.abrupt("return", this.userEncryptKey);
              case 2:
                if (!(ts && ts.expireTime)) {
                  _context53.next = 6;
                  break;
                }
                e = Date.now();
                if (!(ts.expireTime - e > 0)) {
                  _context53.next = 6;
                  break;
                }
                return _context53.abrupt("return", (this.userEncryptKey = ts, this.userEncryptKey));
              case 6:
                return _context53.abrupt("return", new Promise(function (e, t) {
                  uni.getUserCryptoManager().getLatestUserKey({
                    success: function success(t) {
                      ts = t, _this20.userEncryptKey = t, e(_this20.userEncryptKey);
                    },
                    fail: function fail(e) {
                      t(yn(_objectSpread(_objectSpread({}, gn), {}, {
                        cause: e
                      })));
                    }
                  });
                }));
              case 7:
              case "end":
                return _context53.stop();
            }
          }
        }, _callee53, this);
      }));
      function getUserEncryptKey() {
        return _getUserEncryptKey.apply(this, arguments);
      }
      return getUserEncryptKey;
    }()
  }, {
    key: "getWxAppId",
    value: function getWxAppId() {
      return wx.getAccountInfoSync().miniProgram.appId;
    }
  }, {
    key: "platformGetSignOption",
    value: function () {
      var _platformGetSignOption = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee54() {
        var _yield$this$getUserEn, e, t, n;
        return _regenerator.default.wrap(function _callee54$(_context54) {
          while (1) {
            switch (_context54.prev = _context54.next) {
              case 0:
                _context54.next = 2;
                return this.getUserEncryptKey();
              case 2:
                _yield$this$getUserEn = _context54.sent;
                e = _yield$this$getUserEn.encryptKey;
                t = _yield$this$getUserEn.iv;
                n = _yield$this$getUserEn.version;
                return _context54.abrupt("return", {
                  verifyClientSign: Xn(JSON.stringify({
                    data: JSON.stringify({}),
                    appId: this.appId,
                    deviceId: this.deviceId,
                    wxAppId: this.getWxAppId(),
                    simulator: "devtools" === le().platform,
                    timestamp: Date.now()
                  }), e, t),
                  encryptKeyId: n,
                  mpWeixinCode: this.scopedGlobalCache.mpWeixinCode,
                  mpWeixinOpenid: this.scopedGlobalCache.mpWeixinOpenid
                });
              case 7:
              case "end":
                return _context54.stop();
            }
          }
        }, _callee54, this);
      }));
      function platformGetSignOption() {
        return _platformGetSignOption.apply(this, arguments);
      }
      return platformGetSignOption;
    }()
  }, {
    key: "platformEncryptData",
    value: function () {
      var _platformEncryptData = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee55(e) {
        var _yield$this$getUserEn2, t, n, s, r;
        return _regenerator.default.wrap(function _callee55$(_context55) {
          while (1) {
            switch (_context55.prev = _context55.next) {
              case 0:
                _context55.next = 2;
                return this.getUserEncryptKey();
              case 2:
                _yield$this$getUserEn2 = _context55.sent;
                t = _yield$this$getUserEn2.encryptKey;
                n = _yield$this$getUserEn2.iv;
                s = _yield$this$getUserEn2.version;
                r = {
                  secretType: this.secretType,
                  encryptKeyId: s,
                  mpWeixinCode: this.scopedGlobalCache.mpWeixinCode,
                  mpWeixinOpenid: this.scopedGlobalCache.mpWeixinOpenid
                };
                return _context55.abrupt("return", this.secretType === hn ? {
                  content: e,
                  _uniCloudOptions: r
                } : {
                  content: Xn(JSON.stringify({
                    data: JSON.stringify(e),
                    appId: this.appId,
                    deviceId: this.deviceId,
                    wxAppId: this.getWxAppId(),
                    simulator: "devtools" === le().platform,
                    timestamp: Date.now()
                  }), t, n),
                  _uniCloudOptions: r
                });
              case 8:
              case "end":
                return _context55.stop();
            }
          }
        }, _callee55, this);
      }));
      function platformEncryptData(_x48) {
        return _platformEncryptData.apply(this, arguments);
      }
      return platformEncryptData;
    }()
  }, {
    key: "platformDecryptResult",
    value: function () {
      var _platformDecryptResult = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee56(e) {
        var t, _yield$this$getUserEn3, n, s;
        return _regenerator.default.wrap(function _callee56$(_context56) {
          while (1) {
            switch (_context56.prev = _context56.next) {
              case 0:
                t = e.content;
                _context56.next = 3;
                return this.getUserEncryptKey();
              case 3:
                _yield$this$getUserEn3 = _context56.sent;
                n = _yield$this$getUserEn3.encryptKey;
                s = _yield$this$getUserEn3.iv;
                return _context56.abrupt("return", JSON.parse(function (e, t, n) {
                  var s = new Uint8Array(uni.base64ToArrayBuffer(e)),
                    r = new Uint8Array(uni.base64ToArrayBuffer(t)),
                    i = Yn.utils.utf8.toBytes(n),
                    o = new Yn.ModeOfOperation.cbc(r, i),
                    a = Yn.padding.pkcs7.strip(o.decrypt(s));
                  return Yn.utils.utf8.fromBytes(a);
                }(t, n, s)));
              case 7:
              case "end":
                return _context56.stop();
            }
          }
        }, _callee56, this);
      }));
      function platformDecryptResult(_x49) {
        return _platformDecryptResult.apply(this, arguments);
      }
      return platformDecryptResult;
    }()
  }, {
    key: "isClientKeyNotFound",
    value: function isClientKeyNotFound() {
      return !1;
    }
  }]);
  return ns;
}(_n);
function ss(e) {
  var t = ["hasClientKey", "encryptGetClientKeyPayload", "setClientKey", "encrypt", "decrypt"],
    n = {};
  var _loop = function _loop(_s14) {
    var r = t[_s14];
    n[r] = function () {
      for (var _len = arguments.length, t = new Array(_len), _key = 0; _key < _len; _key++) {
        t[_key] = arguments[_key];
      }
      return new Promise(function (n, s) {
        "function" == typeof e[r] ? e[r].apply(e, t.concat([function () {
          var _ref36 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
            e = _ref36.type,
            t = _ref36.data,
            r = _ref36.errCode,
            i = _ref36.errMsg,
            o = _ref36.errSubject,
            a = _ref36.message;
          "success" === e ? n(t) : s(yn({
            errCode: r,
            errMsg: mn[r] || i || a,
            errSubject: o
          }));
        }])) : s(yn({
          message: "请检查manifest.json内是否开启安全网络模块，另外注意标准基座不支持安全网络模块"
        }));
      });
    };
  };
  for (var _s14 = 0; _s14 < t.length; _s14++) {
    _loop(_s14);
  }
  return n;
}
var rs = /*#__PURE__*/function (_n12) {
  (0, _inherits2.default)(rs, _n12);
  var _super9 = _createSuper(rs);
  function rs(e) {
    var _this21;
    (0, _classCallCheck2.default)(this, rs);
    _this21 = _super9.call(this, e), _this21.clientType = "app", _this21.appUtils = _objectSpread({}, ss(uni.requireNativePlugin("plus"))), _this21.systemInfo = Zn || (Zn = le());
    return _this21;
  }
  (0, _createClass2.default)(rs, [{
    key: "hasClientKey",
    value: function () {
      var _hasClientKey = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee57() {
        return _regenerator.default.wrap(function _callee57$(_context57) {
          while (1) {
            switch (_context57.prev = _context57.next) {
              case 0:
                _context57.next = 2;
                return this.appUtils.hasClientKey({
                  provider: this.provider,
                  spaceId: this.spaceId
                });
              case 2:
                this._hasClientKey = _context57.sent;
                return _context57.abrupt("return", this._hasClientKey);
              case 4:
              case "end":
                return _context57.stop();
            }
          }
        }, _callee57, this);
      }));
      function hasClientKey() {
        return _hasClientKey.apply(this, arguments);
      }
      return hasClientKey;
    }()
  }, {
    key: "getAppClientKey",
    value: function () {
      var _getAppClientKey = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee58() {
        var _yield$this$appUtils$, e, t, n, s, r;
        return _regenerator.default.wrap(function _callee58$(_context58) {
          while (1) {
            switch (_context58.prev = _context58.next) {
              case 0:
                _context58.next = 2;
                return this.appUtils.encryptGetClientKeyPayload({
                  data: JSON.stringify({})
                });
              case 2:
                _yield$this$appUtils$ = _context58.sent;
                e = _yield$this$appUtils$.data;
                t = _yield$this$appUtils$.key;
                _context58.next = 7;
                return this.uniCloudIns.callFunction({
                  name: "DCloud-clientDB",
                  data: {
                    redirectTo: "encryption",
                    action: "getAppClientKey",
                    data: e,
                    key: t
                  }
                });
              case 7:
                _context58.t0 = _context58.sent.result;
                if (_context58.t0) {
                  _context58.next = 10;
                  break;
                }
                _context58.t0 = {};
              case 10:
                n = _context58.t0;
                if (!(0 !== n.errCode)) {
                  _context58.next = 13;
                  break;
                }
                throw function (e) {
                  return new re({
                    subject: e.errSubject || "uni-secure-network",
                    code: e.errCode || e.code || pn.code,
                    message: e.errMsg || e.message || pn.message
                  });
                }(n);
              case 13:
                s = n.clientKey, r = n.key;
                _context58.next = 16;
                return this.appUtils.setClientKey({
                  provider: this.provider,
                  spaceId: this.spaceId,
                  clientKey: s,
                  key: r
                });
              case 16:
              case "end":
                return _context58.stop();
            }
          }
        }, _callee58, this);
      }));
      function getAppClientKey() {
        return _getAppClientKey.apply(this, arguments);
      }
      return getAppClientKey;
    }()
  }, {
    key: "ensureClientKey",
    value: function () {
      var _ensureClientKey = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee59() {
        var _this22 = this;
        var _ref37,
          _ref37$forceUpdate,
          e,
          _args59 = arguments;
        return _regenerator.default.wrap(function _callee59$(_context59) {
          while (1) {
            switch (_context59.prev = _context59.next) {
              case 0:
                _ref37 = _args59.length > 0 && _args59[0] !== undefined ? _args59[0] : {}, _ref37$forceUpdate = _ref37.forceUpdate, e = _ref37$forceUpdate === void 0 ? !1 : _ref37$forceUpdate;
                _context59.t1 = !0;
                _context59.next = 4;
                return this.hasClientKey();
              case 4:
                _context59.t2 = _context59.sent;
                _context59.t0 = _context59.t1 !== _context59.t2;
                if (_context59.t0) {
                  _context59.next = 8;
                  break;
                }
                _context59.t0 = e;
              case 8:
                if (!_context59.t0) {
                  _context59.next = 10;
                  break;
                }
                return _context59.abrupt("return", (e && this.scopedGlobalCache.initPromise && this.scopedGlobalCache.initStatus === h || !e && this.scopedGlobalCache.initPromise && this.scopedGlobalCache.initStatus !== p || (this.scopedGlobalCache.initPromise = this.getAppClientKey(), this.scopedGlobalCache.initPromise.then(function (e) {
                  _this22.scopedGlobalCache.initStatus = d;
                }).catch(function (e) {
                  throw _this22.scopedGlobalCache.initStatus = p, e;
                }), this.scopedGlobalCache.initStatus = h), this.scopedGlobalCache.initPromise));
              case 10:
              case "end":
                return _context59.stop();
            }
          }
        }, _callee59, this);
      }));
      function ensureClientKey() {
        return _ensureClientKey.apply(this, arguments);
      }
      return ensureClientKey;
    }()
  }, {
    key: "prepare",
    value: function () {
      var _prepare3 = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee60() {
        var _ref38,
          _ref38$forceUpdate,
          e,
          _args60 = arguments;
        return _regenerator.default.wrap(function _callee60$(_context60) {
          while (1) {
            switch (_context60.prev = _context60.next) {
              case 0:
                _ref38 = _args60.length > 0 && _args60[0] !== undefined ? _args60[0] : {}, _ref38$forceUpdate = _ref38.forceUpdate, e = _ref38$forceUpdate === void 0 ? !1 : _ref38$forceUpdate;
                _context60.next = 3;
                return this.ensureClientKey({
                  forceUpdate: e
                });
              case 3:
              case "end":
                return _context60.stop();
            }
          }
        }, _callee60, this);
      }));
      function prepare() {
        return _prepare3.apply(this, arguments);
      }
      return prepare;
    }()
  }, {
    key: "platformGetSignOption",
    value: function () {
      var _platformGetSignOption2 = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee61() {
        var _yield$this$appUtils$2, e, t;
        return _regenerator.default.wrap(function _callee61$(_context61) {
          while (1) {
            switch (_context61.prev = _context61.next) {
              case 0:
                _context61.next = 2;
                return this.appUtils.encrypt({
                  provider: this.provider,
                  spaceId: this.spaceId,
                  data: JSON.stringify({})
                });
              case 2:
                _yield$this$appUtils$2 = _context61.sent;
                e = _yield$this$appUtils$2.data;
                t = _yield$this$appUtils$2.key;
                return _context61.abrupt("return", {
                  verifyClientSign: e,
                  encryptKeyId: t
                });
              case 6:
              case "end":
                return _context61.stop();
            }
          }
        }, _callee61, this);
      }));
      function platformGetSignOption() {
        return _platformGetSignOption2.apply(this, arguments);
      }
      return platformGetSignOption;
    }()
  }, {
    key: "platformEncryptData",
    value: function () {
      var _platformEncryptData2 = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee62(e) {
        var _yield$this$appUtils$3, t, n, s;
        return _regenerator.default.wrap(function _callee62$(_context62) {
          while (1) {
            switch (_context62.prev = _context62.next) {
              case 0:
                _context62.next = 2;
                return this.appUtils.encrypt({
                  provider: this.provider,
                  spaceId: this.spaceId,
                  data: JSON.stringify(e)
                });
              case 2:
                _yield$this$appUtils$3 = _context62.sent;
                t = _yield$this$appUtils$3.data;
                n = _yield$this$appUtils$3.key;
                s = {
                  secretType: this.secretType,
                  encryptKeyId: n
                };
                return _context62.abrupt("return", this.secretType === hn ? {
                  content: e,
                  _uniCloudOptions: s
                } : {
                  content: t,
                  _uniCloudOptions: s
                });
              case 7:
              case "end":
                return _context62.stop();
            }
          }
        }, _callee62, this);
      }));
      function platformEncryptData(_x50) {
        return _platformEncryptData2.apply(this, arguments);
      }
      return platformEncryptData;
    }()
  }, {
    key: "platformDecryptResult",
    value: function () {
      var _platformDecryptResult2 = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee63(e) {
        var t, _e$_uniCloudOptions, n, s, r;
        return _regenerator.default.wrap(function _callee63$(_context63) {
          while (1) {
            switch (_context63.prev = _context63.next) {
              case 0:
                t = e.content;
                _e$_uniCloudOptions = e._uniCloudOptions;
                n = _e$_uniCloudOptions === void 0 ? {} : _e$_uniCloudOptions;
                s = n.encryptKeyId;
                _context63.next = 6;
                return this.appUtils.decrypt({
                  provider: this.provider,
                  spaceId: this.spaceId,
                  data: t,
                  key: s
                });
              case 6:
                r = _context63.sent;
                return _context63.abrupt("return", JSON.parse(r.data));
              case 8:
              case "end":
                return _context63.stop();
            }
          }
        }, _callee63, this);
      }));
      function platformDecryptResult(_x51) {
        return _platformDecryptResult2.apply(this, arguments);
      }
      return platformDecryptResult;
    }()
  }, {
    key: "isClientKeyNotFound",
    value: function isClientKeyNotFound() {
      var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var t = e.result || {};
      return 70009 === t.errCode && "uni-secure-network" === t.errSubject;
    }
  }]);
  return rs;
}(_n);
function is() {
  var _ref39 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
    e = _ref39.secretType;
  return e === ln || e === hn || e === dn;
}
function os() {
  var _ref40 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
    e = _ref40.name,
    _ref40$data = _ref40.data,
    t = _ref40$data === void 0 ? {} : _ref40$data;
  return "app" === T && "DCloud-clientDB" === e && "encryption" === t.redirectTo && "getAppClientKey" === t.action;
}
function as() {
  var _ref41 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
    e = _ref41.provider,
    t = _ref41.spaceId,
    n = _ref41.functionName;
  var _le = le(),
    s = _le.appId,
    r = _le.uniPlatform,
    i = _le.osName;
  var o = r;
  "app" === r && (o = i);
  var a = function () {
    var _ref42 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
      e = _ref42.provider,
      t = _ref42.spaceId;
    var n = A;
    if (!n) return {};
    e = function (e) {
      return "tencent" === e ? "tcb" : e;
    }(e);
    var s = n.find(function (n) {
      return n.provider === e && n.spaceId === t;
    });
    return s && s.config;
  }({
    provider: e,
    spaceId: t
  });
  if (!a || !a.accessControl || !a.accessControl.enable) return !1;
  var c = a.accessControl.function || {},
    u = Object.keys(c);
  if (0 === u.length) return !0;
  var l = function (e, t) {
    var n, s, r;
    for (var _i2 = 0; _i2 < e.length; _i2++) {
      var _o2 = e[_i2];
      _o2 !== t ? "*" !== _o2 ? _o2.split(",").map(function (e) {
        return e.trim();
      }).indexOf(t) > -1 && (s = _o2) : r = _o2 : n = _o2;
    }
    return n || s || r;
  }(u, n);
  if (!l) return !1;
  if ((c[l] || []).find(function () {
    var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    return e.appId === s && (e.platform || "").toLowerCase() === o.toLowerCase();
  })) return !0;
  throw console.error("\u6B64\u5E94\u7528[appId: ".concat(s, ", platform: ").concat(o, "]\u4E0D\u5728\u4E91\u7AEF\u914D\u7F6E\u7684\u5141\u8BB8\u8BBF\u95EE\u7684\u5E94\u7528\u5217\u8868\u5185\uFF0C\u53C2\u8003\uFF1Ahttps://uniapp.dcloud.net.cn/uniCloud/secure-network.html#verify-client")), yn(fn);
}
function cs(_ref43) {
  var e = _ref43.functionName,
    t = _ref43.result,
    n = _ref43.logPvd;
  if (S && this.__dev__.debugLog && t && t.requestId) {
    var _s15 = JSON.stringify({
      spaceId: this.config.spaceId,
      functionName: e,
      requestId: t.requestId
    });
    console.log("[".concat(n, "-request]").concat(_s15, "[/").concat(n, "-request]"));
  }
}
function us(e) {
  var t = e.callFunction,
    n = function n(_n13) {
      var _this23 = this;
      var s = _n13.name;
      _n13.data = Jt.call(e, {
        data: _n13.data
      });
      var r = {
          aliyun: "aliyun",
          tencent: "tcb",
          tcb: "tcb",
          alipay: "alipay",
          dcloud: "dcloud"
        }[this.config.provider],
        i = is(_n13),
        o = os(_n13),
        a = i || o;
      return t.call(this, _n13).then(function (e) {
        return e.errCode = 0, !a && cs.call(_this23, {
          functionName: s,
          result: e,
          logPvd: r
        }), Promise.resolve(e);
      }, function (e) {
        return !a && cs.call(_this23, {
          functionName: s,
          result: e,
          logPvd: r
        }), e && e.message && (e.message = function () {
          var _ref44 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
            _ref44$message = _ref44.message,
            e = _ref44$message === void 0 ? "" : _ref44$message,
            _ref44$extraInfo = _ref44.extraInfo,
            t = _ref44$extraInfo === void 0 ? {} : _ref44$extraInfo,
            _ref44$formatter = _ref44.formatter,
            n = _ref44$formatter === void 0 ? [] : _ref44$formatter;
          for (var _s16 = 0; _s16 < n.length; _s16++) {
            var _n$_s = n[_s16],
              _r7 = _n$_s.rule,
              _i3 = _n$_s.content,
              _o3 = _n$_s.mode,
              _a2 = e.match(_r7);
            if (!_a2) continue;
            var _c2 = _i3;
            for (var _e19 = 1; _e19 < _a2.length; _e19++) {
              _c2 = cn(_c2, "{$".concat(_e19, "}"), _a2[_e19]);
            }
            for (var _e20 in t) {
              _c2 = cn(_c2, "{".concat(_e20, "}"), t[_e20]);
            }
            return "replace" === _o3 ? _c2 : e + _c2;
          }
          return e;
        }({
          message: "[".concat(_n13.name, "]: ").concat(e.message),
          formatter: rn,
          extraInfo: {
            functionName: s
          }
        })), Promise.reject(e);
      });
    };
  e.callFunction = function (t) {
    var _e$config = e.config,
      s = _e$config.provider,
      r = _e$config.spaceId,
      i = t.name;
    var o, a;
    if (t.data = t.data || {}, S && e.__dev__.debugInfo && !e.__dev__.debugInfo.forceRemote && P ? (e._callCloudFunction || (e._callCloudFunction = n, e._callLocalFunction = sn), o = sn) : o = n, o = o.bind(e), os(t)) a = n.call(e, t);else if (function (_ref45) {
      var e = _ref45.name,
        _ref45$data = _ref45.data,
        t = _ref45$data === void 0 ? {} : _ref45$data;
      return "mp-weixin" === T && "uni-id-co" === e && "secureNetworkHandshakeByWeixin" === t.method;
    }(t)) a = o.call(e, t);else if (is(t)) {
      a = new es({
        secretType: t.secretType,
        uniCloudIns: e
      }).wrapEncryptDataCallFunction(n.bind(e))(t);
    } else if (as({
      provider: s,
      spaceId: r,
      functionName: i
    })) {
      a = new es({
        secretType: t.secretType,
        uniCloudIns: e
      }).wrapVerifyClientCallFunction(n.bind(e))(t);
    } else a = o(t);
    return Object.defineProperty(a, "result", {
      get: function get() {
        return console.warn("当前返回结果为Promise类型，不可直接访问其result属性，详情请参考：https://uniapp.dcloud.net.cn/uniCloud/faq?id=promise"), {};
      }
    }), a.then(function (e) {
      return e;
    });
  };
}
es = "mp-weixin" !== T && "app" !== T ? /*#__PURE__*/function () {
  function _class2() {
    (0, _classCallCheck2.default)(this, _class2);
    throw yn({
      message: "Platform ".concat(T, " is not supported by secure network")
    });
  }
  return (0, _createClass2.default)(_class2);
}() : k ? "mp-weixin" === T ? ns : rs : /*#__PURE__*/function () {
  function _class3() {
    (0, _classCallCheck2.default)(this, _class3);
    throw yn({
      message: "Platform ".concat(T, " is not enabled, please check whether secure network module is enabled in your manifest.json")
    });
  }
  return (0, _createClass2.default)(_class3);
}();
var ls = Symbol("CLIENT_DB_INTERNAL");
function hs(e, t) {
  return e.then = "DoNotReturnProxyWithAFunctionNamedThen", e._internalType = ls, e.inspect = null, e.__ob__ = void 0, new Proxy(e, {
    get: function get(e, n, s) {
      if ("_uniClient" === n) return null;
      if ("symbol" == (0, _typeof2.default)(n)) return e[n];
      if (n in e || "string" != typeof n) {
        var _t12 = e[n];
        return "function" == typeof _t12 ? _t12.bind(e) : _t12;
      }
      return t.get(e, n, s);
    }
  });
}
function ds(e) {
  return {
    on: function on(t, n) {
      e[t] = e[t] || [], e[t].indexOf(n) > -1 || e[t].push(n);
    },
    off: function off(t, n) {
      e[t] = e[t] || [];
      var s = e[t].indexOf(n);
      -1 !== s && e[t].splice(s, 1);
    }
  };
}
var ps = ["db.Geo", "db.command", "command.aggregate"];
function fs(e, t) {
  return ps.indexOf("".concat(e, ".").concat(t)) > -1;
}
function gs(e) {
  switch (f(e)) {
    case "array":
      return e.map(function (e) {
        return gs(e);
      });
    case "object":
      return e._internalType === ls || Object.keys(e).forEach(function (t) {
        e[t] = gs(e[t]);
      }), e;
    case "regexp":
      return {
        $regexp: {
          source: e.source,
          flags: e.flags
        }
      };
    case "date":
      return {
        $date: e.toISOString()
      };
    default:
      return e;
  }
}
function ms(e) {
  return e && e.content && e.content.$method;
}
var ys = /*#__PURE__*/function () {
  function ys(e, t, n) {
    (0, _classCallCheck2.default)(this, ys);
    this.content = e, this.prevStage = t || null, this.udb = null, this._database = n;
  }
  (0, _createClass2.default)(ys, [{
    key: "toJSON",
    value: function toJSON() {
      var e = this;
      var t = [e.content];
      for (; e.prevStage;) {
        e = e.prevStage, t.push(e.content);
      }
      return {
        $db: t.reverse().map(function (e) {
          return {
            $method: e.$method,
            $param: gs(e.$param)
          };
        })
      };
    }
  }, {
    key: "toString",
    value: function toString() {
      return JSON.stringify(this.toJSON());
    }
  }, {
    key: "getAction",
    value: function getAction() {
      var e = this.toJSON().$db.find(function (e) {
        return "action" === e.$method;
      });
      return e && e.$param && e.$param[0];
    }
  }, {
    key: "getCommand",
    value: function getCommand() {
      return {
        $db: this.toJSON().$db.filter(function (e) {
          return "action" !== e.$method;
        })
      };
    }
  }, {
    key: "isAggregate",
    get: function get() {
      var e = this;
      for (; e;) {
        var t = ms(e),
          _n14 = ms(e.prevStage);
        if ("aggregate" === t && "collection" === _n14 || "pipeline" === t) return !0;
        e = e.prevStage;
      }
      return !1;
    }
  }, {
    key: "isCommand",
    get: function get() {
      var e = this;
      for (; e;) {
        if ("command" === ms(e)) return !0;
        e = e.prevStage;
      }
      return !1;
    }
  }, {
    key: "isAggregateCommand",
    get: function get() {
      var e = this;
      for (; e;) {
        var t = ms(e),
          _n15 = ms(e.prevStage);
        if ("aggregate" === t && "command" === _n15) return !0;
        e = e.prevStage;
      }
      return !1;
    }
  }, {
    key: "getNextStageFn",
    value: function getNextStageFn(e) {
      var t = this;
      return function () {
        return _s({
          $method: e,
          $param: gs(Array.from(arguments))
        }, t, t._database);
      };
    }
  }, {
    key: "count",
    get: function get() {
      return this.isAggregate ? this.getNextStageFn("count") : function () {
        return this._send("count", Array.from(arguments));
      };
    }
  }, {
    key: "remove",
    get: function get() {
      return this.isCommand ? this.getNextStageFn("remove") : function () {
        return this._send("remove", Array.from(arguments));
      };
    }
  }, {
    key: "get",
    value: function get() {
      return this._send("get", Array.from(arguments));
    }
  }, {
    key: "add",
    get: function get() {
      return this.isCommand ? this.getNextStageFn("add") : function () {
        return this._send("add", Array.from(arguments));
      };
    }
  }, {
    key: "update",
    value: function update() {
      return this._send("update", Array.from(arguments));
    }
  }, {
    key: "end",
    value: function end() {
      return this._send("end", Array.from(arguments));
    }
  }, {
    key: "set",
    get: function get() {
      return this.isCommand ? this.getNextStageFn("set") : function () {
        throw new Error("JQL禁止使用set方法");
      };
    }
  }, {
    key: "_send",
    value: function _send(e, t) {
      var n = this.getAction(),
        s = this.getCommand();
      if (s.$db.push({
        $method: e,
        $param: gs(t)
      }), S) {
        var _e21 = s.$db.find(function (e) {
            return "collection" === e.$method;
          }),
          _t13 = _e21 && _e21.$param;
        _t13 && 1 === _t13.length && "string" == typeof _e21.$param[0] && _e21.$param[0].indexOf(",") > -1 && console.warn("检测到使用JQL语法联表查询时，未使用getTemp先过滤主表数据，在主表数据量大的情况下可能会查询缓慢。\n- 如何优化请参考此文档：https://uniapp.dcloud.net.cn/uniCloud/jql?id=lookup-with-temp \n- 如果主表数据量很小请忽略此信息，项目发行时不会出现此提示。");
      }
      return this._database._callCloudFunction({
        action: n,
        command: s
      });
    }
  }]);
  return ys;
}();
function _s(e, t, n) {
  return hs(new ys(e, t, n), {
    get: function get(e, t) {
      var s = "db";
      return e && e.content && (s = e.content.$method), fs(s, t) ? _s({
        $method: t
      }, e, n) : function () {
        return _s({
          $method: t,
          $param: gs(Array.from(arguments))
        }, e, n);
      };
    }
  });
}
function ws(_ref46) {
  var e = _ref46.path,
    t = _ref46.method;
  return /*#__PURE__*/function () {
    function _class4() {
      (0, _classCallCheck2.default)(this, _class4);
      this.param = Array.from(arguments);
    }
    (0, _createClass2.default)(_class4, [{
      key: "toJSON",
      value: function toJSON() {
        return {
          $newDb: [].concat((0, _toConsumableArray2.default)(e.map(function (e) {
            return {
              $method: e
            };
          })), [{
            $method: t,
            $param: this.param
          }])
        };
      }
    }, {
      key: "toString",
      value: function toString() {
        return JSON.stringify(this.toJSON());
      }
    }]);
    return _class4;
  }();
}
function vs(e) {
  var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  return hs(new e(t), {
    get: function get(e, t) {
      return fs("db", t) ? _s({
        $method: t
      }, null, e) : function () {
        return _s({
          $method: t,
          $param: gs(Array.from(arguments))
        }, null, e);
      };
    }
  });
}
var Is = /*#__PURE__*/function (_ref47) {
  (0, _inherits2.default)(Is, _ref47);
  var _super10 = _createSuper(Is);
  function Is() {
    (0, _classCallCheck2.default)(this, Is);
    return _super10.apply(this, arguments);
  }
  (0, _createClass2.default)(Is, [{
    key: "_parseResult",
    value: function _parseResult(e) {
      return this._isJQL ? e.result : e;
    }
  }, {
    key: "_callCloudFunction",
    value: function _callCloudFunction(_ref48) {
      var _this24 = this;
      var e = _ref48.action,
        t = _ref48.command,
        n = _ref48.multiCommand,
        s = _ref48.queryList;
      function r(e, t) {
        if (n && s) for (var _n16 = 0; _n16 < s.length; _n16++) {
          var _r8 = s[_n16];
          _r8.udb && "function" == typeof _r8.udb.setResult && (t ? _r8.udb.setResult(t) : _r8.udb.setResult(e.result.dataList[_n16]));
        }
      }
      var i = this,
        o = this._isJQL ? "databaseForJQL" : "database";
      function a(e) {
        return i._callback("error", [e]), F(K(o, "fail"), e).then(function () {
          return F(K(o, "complete"), e);
        }).then(function () {
          return r(null, e), Z(B, {
            type: z,
            content: e
          }), Promise.reject(e);
        });
      }
      var c = F(K(o, "invoke")),
        u = this._uniClient;
      return c.then(function () {
        return u.callFunction({
          name: "DCloud-clientDB",
          type: l,
          data: {
            action: e,
            command: t,
            multiCommand: n
          }
        });
      }).then(function (e) {
        var _e$result = e.result,
          t = _e$result.code,
          n = _e$result.message,
          s = _e$result.token,
          c = _e$result.tokenExpired,
          _e$result$systemInfo = _e$result.systemInfo,
          u = _e$result$systemInfo === void 0 ? [] : _e$result$systemInfo;
        if (u) for (var _e22 = 0; _e22 < u.length; _e22++) {
          var _u$_e = u[_e22],
            _t14 = _u$_e.level,
            _n17 = _u$_e.message,
            _s17 = _u$_e.detail,
            _r9 = console["app" === T && "warn" === _t14 ? "error" : _t14] || console.log;
          var _i4 = "[System Info]" + _n17;
          _s17 && (_i4 = "".concat(_i4, "\n\u8BE6\u7EC6\u4FE1\u606F\uFF1A").concat(_s17)), _r9(_i4);
        }
        if (t) {
          return a(new re({
            code: t,
            message: n,
            requestId: e.requestId
          }));
        }
        e.result.errCode = e.result.errCode || e.result.code, e.result.errMsg = e.result.errMsg || e.result.message, s && c && (ae({
          token: s,
          tokenExpired: c
        }), _this24._callbackAuth("refreshToken", [{
          token: s,
          tokenExpired: c
        }]), _this24._callback("refreshToken", [{
          token: s,
          tokenExpired: c
        }]), Z(H, {
          token: s,
          tokenExpired: c
        }));
        var l = [{
          prop: "affectedDocs",
          tips: "affectedDocs不再推荐使用，请使用inserted/deleted/updated/data.length替代"
        }, {
          prop: "code",
          tips: "code不再推荐使用，请使用errCode替代"
        }, {
          prop: "message",
          tips: "message不再推荐使用，请使用errMsg替代"
        }];
        var _loop2 = function _loop2(_t15) {
          var _l$_t = l[_t15],
            n = _l$_t.prop,
            s = _l$_t.tips;
          if (n in e.result) {
            var _t16 = e.result[n];
            Object.defineProperty(e.result, n, {
              get: function get() {
                return console.warn(s), _t16;
              }
            });
          }
        };
        for (var _t15 = 0; _t15 < l.length; _t15++) {
          _loop2(_t15);
        }
        return function (e) {
          return F(K(o, "success"), e).then(function () {
            return F(K(o, "complete"), e);
          }).then(function () {
            r(e, null);
            var t = i._parseResult(e);
            return Z(B, {
              type: z,
              content: t
            }), Promise.resolve(t);
          });
        }(e);
      }, function (e) {
        /fc_function_not_found|FUNCTION_NOT_FOUND/g.test(e.message) && console.warn("clientDB未初始化，请在web控制台保存一次schema以开启clientDB");
        return a(new re({
          code: e.code || "SYSTEM_ERROR",
          message: e.message,
          requestId: e.requestId
        }));
      });
    }
  }]);
  return Is;
}( /*#__PURE__*/function () {
  function _class5() {
    var _ref49 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
      _ref49$uniClient = _ref49.uniClient,
      e = _ref49$uniClient === void 0 ? {} : _ref49$uniClient,
      _ref49$isJQL = _ref49.isJQL,
      t = _ref49$isJQL === void 0 ? !1 : _ref49$isJQL;
    (0, _classCallCheck2.default)(this, _class5);
    this._uniClient = e, this._authCallBacks = {}, this._dbCallBacks = {}, e._isDefault && (this._dbCallBacks = U("_globalUniCloudDatabaseCallback")), t || (this.auth = ds(this._authCallBacks)), this._isJQL = t, Object.assign(this, ds(this._dbCallBacks)), this.env = hs({}, {
      get: function get(e, t) {
        return {
          $env: t
        };
      }
    }), this.Geo = hs({}, {
      get: function get(e, t) {
        return ws({
          path: ["Geo"],
          method: t
        });
      }
    }), this.serverDate = ws({
      path: [],
      method: "serverDate"
    }), this.RegExp = ws({
      path: [],
      method: "RegExp"
    });
  }
  (0, _createClass2.default)(_class5, [{
    key: "getCloudEnv",
    value: function getCloudEnv(e) {
      if ("string" != typeof e || !e.trim()) throw new Error("getCloudEnv参数错误");
      return {
        $env: e.replace("$cloudEnv_", "")
      };
    }
  }, {
    key: "_callback",
    value: function _callback(e, t) {
      var n = this._dbCallBacks;
      n[e] && n[e].forEach(function (e) {
        e.apply(void 0, (0, _toConsumableArray2.default)(t));
      });
    }
  }, {
    key: "_callbackAuth",
    value: function _callbackAuth(e, t) {
      var n = this._authCallBacks;
      n[e] && n[e].forEach(function (e) {
        e.apply(void 0, (0, _toConsumableArray2.default)(t));
      });
    }
  }, {
    key: "multiSend",
    value: function multiSend() {
      var e = Array.from(arguments),
        t = e.map(function (e) {
          var t = e.getAction(),
            n = e.getCommand();
          if ("getTemp" !== n.$db[n.$db.length - 1].$method) throw new Error("multiSend只支持子命令内使用getTemp");
          return {
            action: t,
            command: n
          };
        });
      return this._callCloudFunction({
        multiCommand: t,
        queryList: e
      });
    }
  }, {
    key: "startTransaction",
    value: function startTransaction() {
      throw new Error("JQL 事务仅支持在云端使用");
    }
  }, {
    key: "commit",
    value: function commit() {
      throw new Error("JQL 事务仅支持在云端使用");
    }
  }, {
    key: "rollback",
    value: function rollback() {
      throw new Error("JQL 事务仅支持在云端使用");
    }
  }]);
  return _class5;
}());
var Ss = "token无效，跳转登录页面",
  bs = "token过期，跳转登录页面",
  ks = {
    TOKEN_INVALID_TOKEN_EXPIRED: bs,
    TOKEN_INVALID_INVALID_CLIENTID: Ss,
    TOKEN_INVALID: Ss,
    TOKEN_INVALID_WRONG_TOKEN: Ss,
    TOKEN_INVALID_ANONYMOUS_USER: Ss
  },
  As = {
    "uni-id-token-expired": bs,
    "uni-id-check-token-failed": Ss,
    "uni-id-token-not-exist": Ss,
    "uni-id-check-device-feature-failed": Ss
  },
  Ts = _objectSpread(_objectSpread(_objectSpread({}, ks), As), {}, {
    default: "用户未登录或登录状态过期，自动跳转登录页面"
  });
function Cs(e, t) {
  var n = "";
  return n = e ? "".concat(e, "/").concat(t) : t, n.replace(/^\//, "");
}
function Ps() {
  var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "";
  var n = [],
    s = [];
  return e.forEach(function (e) {
    !0 === e.needLogin ? n.push(Cs(t, e.path)) : !1 === e.needLogin && s.push(Cs(t, e.path));
  }), {
    needLoginPage: n,
    notNeedLoginPage: s
  };
}
function Os(e) {
  return e.split("?")[0].replace(/^\//, "");
}
function Es() {
  return function (e) {
    var t = e && e.$page && e.$page.fullPath;
    return t ? ("/" !== t.charAt(0) && (t = "/" + t), t) : "";
  }(function () {
    var e = getCurrentPages();
    return e[e.length - 1];
  }());
}
function xs() {
  return Os(Es());
}
function Ls() {
  var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "";
  var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  if (!e) return !1;
  if (!(t && t.list && t.list.length)) return !1;
  var n = t.list,
    s = Os(e);
  return n.some(function (e) {
    return e.pagePath === s;
  });
}
var Us = !!_pages.default.uniIdRouter;
var _ref50 = function () {
    var _ref8 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : _pages.default,
      _ref8$pages = _ref8.pages,
      t = _ref8$pages === void 0 ? [] : _ref8$pages,
      _ref8$subPackages = _ref8.subPackages,
      n = _ref8$subPackages === void 0 ? [] : _ref8$subPackages,
      _ref8$uniIdRouter = _ref8.uniIdRouter,
      s = _ref8$uniIdRouter === void 0 ? {} : _ref8$uniIdRouter,
      _ref8$tabBar = _ref8.tabBar,
      r = _ref8$tabBar === void 0 ? {} : _ref8$tabBar;
    var i = s.loginPage,
      _s$needLogin = s.needLogin,
      o = _s$needLogin === void 0 ? [] : _s$needLogin,
      _s$resToLogin = s.resToLogin,
      a = _s$resToLogin === void 0 ? !0 : _s$resToLogin,
      _Ps = Ps(t),
      c = _Ps.needLoginPage,
      u = _Ps.notNeedLoginPage,
      _ref9 = function () {
        var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
        var t = [],
          n = [];
        return e.forEach(function (e) {
          var s = e.root,
            _e$pages = e.pages,
            r = _e$pages === void 0 ? [] : _e$pages,
            _Ps2 = Ps(r, s),
            i = _Ps2.needLoginPage,
            o = _Ps2.notNeedLoginPage;
          t.push.apply(t, (0, _toConsumableArray2.default)(i)), n.push.apply(n, (0, _toConsumableArray2.default)(o));
        }), {
          needLoginPage: t,
          notNeedLoginPage: n
        };
      }(n),
      l = _ref9.needLoginPage,
      h = _ref9.notNeedLoginPage;
    return {
      loginPage: i,
      routerNeedLogin: o,
      resToLogin: a,
      needLoginPage: [].concat((0, _toConsumableArray2.default)(c), (0, _toConsumableArray2.default)(l)),
      notNeedLoginPage: [].concat((0, _toConsumableArray2.default)(u), (0, _toConsumableArray2.default)(h)),
      loginPageInTabBar: Ls(i, r)
    };
  }(),
  Rs = _ref50.loginPage,
  Ns = _ref50.routerNeedLogin,
  Ds = _ref50.resToLogin,
  Ms = _ref50.needLoginPage,
  qs = _ref50.notNeedLoginPage,
  Fs = _ref50.loginPageInTabBar;
if (Ms.indexOf(Rs) > -1) throw new Error("Login page [".concat(Rs, "] should not be \"needLogin\", please check your pages.json"));
function Ks(e) {
  var t = xs();
  if ("/" === e.charAt(0)) return e;
  var _e$split = e.split("?"),
    _e$split2 = (0, _slicedToArray2.default)(_e$split, 2),
    n = _e$split2[0],
    s = _e$split2[1],
    r = n.replace(/^\//, "").split("/"),
    i = t.split("/");
  i.pop();
  for (var _e23 = 0; _e23 < r.length; _e23++) {
    var _t17 = r[_e23];
    ".." === _t17 ? i.pop() : "." !== _t17 && i.push(_t17);
  }
  return "" === i[0] && i.shift(), "/" + i.join("/") + (s ? "?" + s : "");
}
function js(e, t) {
  return new RegExp(t).test(e);
}
function $s(_ref32) {
  var e = _ref32.redirect;
  var t = Os(e),
    n = Os(Rs);
  return xs() !== n && t !== n;
}
function Bs() {
  var _ref34 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
    e = _ref34.api,
    t = _ref34.redirect;
  if (!t || !$s({
    redirect: t
  })) return;
  var n = function (e, t) {
    return "/" !== e.charAt(0) && (e = "/" + e), t ? e.indexOf("?") > -1 ? e + "&uniIdRedirectUrl=".concat(encodeURIComponent(t)) : e + "?uniIdRedirectUrl=".concat(encodeURIComponent(t)) : e;
  }(Rs, t);
  Fs ? "navigateTo" !== e && "redirectTo" !== e || (e = "switchTab") : "switchTab" === e && (e = "navigateTo");
  var s = {
    navigateTo: uni.navigateTo,
    redirectTo: uni.redirectTo,
    switchTab: uni.switchTab,
    reLaunch: uni.reLaunch
  };
  setTimeout(function () {
    s[e]({
      url: n
    });
  }, 0);
}
function Ws() {
  var _ref51 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
    e = _ref51.url;
  var t = {
      abortLoginPageJump: !1,
      autoToLoginPage: !1
    },
    n = function () {
      var _oe4 = oe(),
        e = _oe4.token,
        t = _oe4.tokenExpired;
      var n;
      if (e) {
        if (t < Date.now()) {
          var _e24 = "uni-id-token-expired";
          n = {
            errCode: _e24,
            errMsg: Ts[_e24]
          };
        }
      } else {
        var _e25 = "uni-id-check-token-failed";
        n = {
          errCode: _e25,
          errMsg: Ts[_e25]
        };
      }
      return n;
    }();
  if (function (e) {
    var t = Os(Ks(e));
    return !(qs.indexOf(t) > -1) && (Ms.indexOf(t) > -1 || Ns.some(function (n) {
      return js(t, n) || js(e, n);
    }));
  }(e) && n) {
    n.uniIdRedirectUrl = e;
    if (Q(W).length > 0) return setTimeout(function () {
      Z(W, n);
    }, 0), t.abortLoginPageJump = !0, t;
    t.autoToLoginPage = !0;
  }
  return t;
}
function Hs() {
  var e = Es(),
    _Ws = Ws({
      url: e
    }),
    t = _Ws.abortLoginPageJump,
    n = _Ws.autoToLoginPage;
  t || n && Bs({
    api: "redirectTo",
    redirect: e
  });
}
function Js() {
  Hs();
  var e = ["navigateTo", "redirectTo", "reLaunch", "switchTab"];
  var _loop3 = function _loop3(_t18) {
    var n = e[_t18];
    uni.addInterceptor(n, {
      invoke: function invoke(e) {
        var _Ws2 = Ws({
            url: e.url
          }),
          t = _Ws2.abortLoginPageJump,
          s = _Ws2.autoToLoginPage;
        return t ? e : s ? (Bs({
          api: n,
          redirect: Ks(e.url)
        }), !1) : e;
      }
    }), "web" === T && window.addEventListener("popstate", function () {
      (0 === getCurrentPages().length ? (te = !1, ee = null, ne()) : Promise.resolve()).then(function () {
        Hs();
      });
    });
  };
  for (var _t18 = 0; _t18 < e.length; _t18++) {
    _loop3(_t18);
  }
}
function zs() {
  this.onResponse(function (e) {
    var t = e.type,
      n = e.content;
    var s = !1;
    switch (t) {
      case "cloudobject":
        s = function (e) {
          if ("object" != (0, _typeof2.default)(e)) return !1;
          var _ref52 = e || {},
            t = _ref52.errCode;
          return t in Ts;
        }(n);
        break;
      case "clientdb":
        s = function (e) {
          if ("object" != (0, _typeof2.default)(e)) return !1;
          var _ref53 = e || {},
            t = _ref53.errCode;
          return t in ks;
        }(n);
    }
    s && function () {
      var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var t = Q(W);
      ne().then(function () {
        var n = Es();
        if (n && $s({
          redirect: n
        })) return t.length > 0 ? Z(W, Object.assign({
          uniIdRedirectUrl: n
        }, e)) : void (Rs && Bs({
          api: "navigateTo",
          redirect: n
        }));
      });
    }(n);
  });
}
function Vs(e) {
  e.onNeedLogin = function (e) {
    Y(W, e);
  }, e.offNeedLogin = function (e) {
    X(W, e);
  }, Us && (U("_globalUniCloudStatus").needLoginInit || (U("_globalUniCloudStatus").needLoginInit = !0, ne().then(function () {
    Js.call(e);
  }), Ds && zs.call(e)));
}
function Gs(e) {
  e.onFailover = function (e) {
    Y(J, e);
  }, e.offFailover = function (e) {
    X(J, e);
  }, e.refreshFailoverConfig = function () {
    return e.config, en(0), nn();
  }, e.clearFailoverConfig = function () {
    !function () {
      Vt = null, Gt = 0;
      try {
        ie.removeStorageSync(Xt("UNICLOUD_FAILOVER_CONFIG")), ie.removeStorageSync(Xt("UNICLOUD_FAILOVER_LAST_REQUEST"));
      } catch (e) {}
    }();
  };
}
function Qs(e) {
  !function (e) {
    e.onResponse = function (e) {
      Y(B, e);
    }, e.offResponse = function (e) {
      X(B, e);
    };
  }(e), Vs(e), function (e) {
    e.onRefreshToken = function (e) {
      Y(H, e);
    }, e.offRefreshToken = function (e) {
      X(H, e);
    };
  }(e), Gs(e);
}
var Ys = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
  Xs = /^(?:[A-Za-z\d+/]{4})*?(?:[A-Za-z\d+/]{2}(?:==)?|[A-Za-z\d+/]{3}=?)?$/;
function Zs(e) {
  return decodeURIComponent(function (e) {
    if (e = String(e).replace(/[\t\n\f\r ]+/g, ""), !Xs.test(e)) throw new Error("Failed to execute 'atob' on 'Window': The string to be decoded is not correctly encoded.");
    var t;
    e += "==".slice(2 - (3 & e.length));
    for (var n, s, r = "", i = 0; i < e.length;) {
      t = Ys.indexOf(e.charAt(i++)) << 18 | Ys.indexOf(e.charAt(i++)) << 12 | (n = Ys.indexOf(e.charAt(i++))) << 6 | (s = Ys.indexOf(e.charAt(i++))), r += 64 === n ? String.fromCharCode(t >> 16 & 255) : 64 === s ? String.fromCharCode(t >> 16 & 255, t >> 8 & 255) : String.fromCharCode(t >> 16 & 255, t >> 8 & 255, 255 & t);
    }
    return r;
  }(e).split("").map(function (e) {
    return "%" + ("00" + e.charCodeAt(0).toString(16)).slice(-2);
  }).join(""));
}
function er() {
  var e = oe().token || "",
    t = e.split(".");
  if (!e || 3 !== t.length) return {
    uid: null,
    role: [],
    permission: [],
    tokenExpired: 0
  };
  var n;
  try {
    n = JSON.parse(Zs(t[1]));
  } catch (e) {
    throw new Error("获取当前用户信息出错，详细错误信息为：" + e.message);
  }
  return n.tokenExpired = 1e3 * n.exp, delete n.exp, delete n.iat, n;
}
var tr = n(function (e, t) {
    Object.defineProperty(t, "__esModule", {
      value: !0
    });
    var n = "chooseAndUploadFile:ok",
      s = "chooseAndUploadFile:fail";
    function r(e, t) {
      return e.tempFiles.forEach(function (e, n) {
        e.name || (e.name = e.path.substring(e.path.lastIndexOf("/") + 1)), t && (e.fileType = t), e.cloudPath = Date.now() + "_" + n + e.name.substring(e.name.lastIndexOf("."));
      }), e.tempFilePaths || (e.tempFilePaths = e.tempFiles.map(function (e) {
        return e.path;
      })), e;
    }
    function i(e, t, _ref54) {
      var s = _ref54.onChooseFile,
        r = _ref54.onUploadProgress;
      return t.then(function (e) {
        if (s) {
          var _t19 = s(e);
          if (void 0 !== _t19) return Promise.resolve(_t19).then(function (t) {
            return void 0 === t ? e : t;
          });
        }
        return e;
      }).then(function (t) {
        return !1 === t ? {
          errMsg: n,
          tempFilePaths: [],
          tempFiles: []
        } : function (e, t) {
          var s = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 5;
          var r = arguments.length > 3 ? arguments[3] : undefined;
          (t = Object.assign({}, t)).errMsg = n;
          var i = t.tempFiles,
            o = i.length;
          var a = 0;
          return new Promise(function (n) {
            for (; a < s;) {
              c();
            }
            function c() {
              var s = a++;
              if (s >= o) return void (!i.find(function (e) {
                return !e.url && !e.errMsg;
              }) && n(t));
              var u = i[s];
              e.uploadFile({
                provider: u.provider,
                filePath: u.path,
                cloudPath: u.cloudPath,
                fileType: u.fileType,
                cloudPathAsRealPath: u.cloudPathAsRealPath,
                onUploadProgress: function onUploadProgress(e) {
                  e.index = s, e.tempFile = u, e.tempFilePath = u.path, r && r(e);
                }
              }).then(function (e) {
                u.url = e.fileID, s < o && c();
              }).catch(function (e) {
                u.errMsg = e.errMsg || e.message, s < o && c();
              });
            }
          });
        }(e, t, 5, r);
      });
    }
    t.initChooseAndUploadFile = function (e) {
      return function () {
        var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {
          type: "all"
        };
        return "image" === t.type ? i(e, function (e) {
          var t = e.count,
            n = e.sizeType,
            _e$sourceType = e.sourceType,
            i = _e$sourceType === void 0 ? ["album", "camera"] : _e$sourceType,
            o = e.extension;
          return new Promise(function (e, a) {
            uni.chooseImage({
              count: t,
              sizeType: n,
              sourceType: i,
              extension: o,
              success: function success(t) {
                e(r(t, "image"));
              },
              fail: function fail(e) {
                a({
                  errMsg: e.errMsg.replace("chooseImage:fail", s)
                });
              }
            });
          });
        }(t), t) : "video" === t.type ? i(e, function (e) {
          var t = e.camera,
            n = e.compressed,
            i = e.maxDuration,
            _e$sourceType2 = e.sourceType,
            o = _e$sourceType2 === void 0 ? ["album", "camera"] : _e$sourceType2,
            a = e.extension;
          return new Promise(function (e, c) {
            uni.chooseVideo({
              camera: t,
              compressed: n,
              maxDuration: i,
              sourceType: o,
              extension: a,
              success: function success(t) {
                var n = t.tempFilePath,
                  s = t.duration,
                  i = t.size,
                  o = t.height,
                  a = t.width;
                e(r({
                  errMsg: "chooseVideo:ok",
                  tempFilePaths: [n],
                  tempFiles: [{
                    name: t.tempFile && t.tempFile.name || "",
                    path: n,
                    size: i,
                    type: t.tempFile && t.tempFile.type || "",
                    width: a,
                    height: o,
                    duration: s,
                    fileType: "video",
                    cloudPath: ""
                  }]
                }, "video"));
              },
              fail: function fail(e) {
                c({
                  errMsg: e.errMsg.replace("chooseVideo:fail", s)
                });
              }
            });
          });
        }(t), t) : i(e, function (e) {
          var t = e.count,
            n = e.extension;
          return new Promise(function (e, i) {
            var o = uni.chooseFile;
            if ("undefined" != typeof wx && "function" == typeof wx.chooseMessageFile && (o = wx.chooseMessageFile), "function" != typeof o) return i({
              errMsg: s + " 请指定 type 类型，该平台仅支持选择 image 或 video。"
            });
            o({
              type: "all",
              count: t,
              extension: n,
              success: function success(t) {
                e(r(t));
              },
              fail: function fail(e) {
                i({
                  errMsg: e.errMsg.replace("chooseFile:fail", s)
                });
              }
            });
          });
        }(t), t);
      };
    };
  }),
  nr = t(tr);
var sr = "manual";
function rr(e) {
  return {
    props: {
      localdata: {
        type: Array,
        default: function _default() {
          return [];
        }
      },
      options: {
        type: [Object, Array],
        default: function _default() {
          return {};
        }
      },
      spaceInfo: {
        type: Object,
        default: function _default() {
          return {};
        }
      },
      collection: {
        type: [String, Array],
        default: ""
      },
      action: {
        type: String,
        default: ""
      },
      field: {
        type: String,
        default: ""
      },
      orderby: {
        type: String,
        default: ""
      },
      where: {
        type: [String, Object],
        default: ""
      },
      pageData: {
        type: String,
        default: "add"
      },
      pageCurrent: {
        type: Number,
        default: 1
      },
      pageSize: {
        type: Number,
        default: 20
      },
      getcount: {
        type: [Boolean, String],
        default: !1
      },
      gettree: {
        type: [Boolean, String],
        default: !1
      },
      gettreepath: {
        type: [Boolean, String],
        default: !1
      },
      startwith: {
        type: String,
        default: ""
      },
      limitlevel: {
        type: Number,
        default: 10
      },
      groupby: {
        type: String,
        default: ""
      },
      groupField: {
        type: String,
        default: ""
      },
      distinct: {
        type: [Boolean, String],
        default: !1
      },
      foreignKey: {
        type: String,
        default: ""
      },
      loadtime: {
        type: String,
        default: "auto"
      },
      manual: {
        type: Boolean,
        default: !1
      }
    },
    data: function data() {
      return {
        mixinDatacomLoading: !1,
        mixinDatacomHasMore: !1,
        mixinDatacomResData: [],
        mixinDatacomErrorMessage: "",
        mixinDatacomPage: {},
        mixinDatacomError: null
      };
    },
    created: function created() {
      var _this25 = this;
      this.mixinDatacomPage = {
        current: this.pageCurrent,
        size: this.pageSize,
        count: 0
      }, this.$watch(function () {
        var e = [];
        return ["pageCurrent", "pageSize", "localdata", "collection", "action", "field", "orderby", "where", "getont", "getcount", "gettree", "groupby", "groupField", "distinct"].forEach(function (t) {
          e.push(_this25[t]);
        }), e;
      }, function (e, t) {
        if (_this25.loadtime === sr) return;
        var n = !1;
        var s = [];
        for (var _r10 = 2; _r10 < e.length; _r10++) {
          e[_r10] !== t[_r10] && (s.push(e[_r10]), n = !0);
        }
        e[0] !== t[0] && (_this25.mixinDatacomPage.current = _this25.pageCurrent), _this25.mixinDatacomPage.size = _this25.pageSize, _this25.onMixinDatacomPropsChange(n, s);
      });
    },
    methods: {
      onMixinDatacomPropsChange: function onMixinDatacomPropsChange(e, t) {},
      mixinDatacomEasyGet: function mixinDatacomEasyGet() {
        var _this26 = this;
        var _ref55 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
          _ref55$getone = _ref55.getone,
          e = _ref55$getone === void 0 ? !1 : _ref55$getone,
          t = _ref55.success,
          n = _ref55.fail;
        this.mixinDatacomLoading || (this.mixinDatacomLoading = !0, this.mixinDatacomErrorMessage = "", this.mixinDatacomError = null, this.mixinDatacomGet().then(function (n) {
          _this26.mixinDatacomLoading = !1;
          var _n$result = n.result,
            s = _n$result.data,
            r = _n$result.count;
          _this26.getcount && (_this26.mixinDatacomPage.count = r), _this26.mixinDatacomHasMore = s.length < _this26.pageSize;
          var i = e ? s.length ? s[0] : void 0 : s;
          _this26.mixinDatacomResData = i, t && t(i);
        }).catch(function (e) {
          _this26.mixinDatacomLoading = !1, _this26.mixinDatacomErrorMessage = e, _this26.mixinDatacomError = e, n && n(e);
        }));
      },
      mixinDatacomGet: function mixinDatacomGet() {
        var _n18;
        var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
        var n;
        t = t || {}, n = "undefined" != typeof __uniX && __uniX ? e.databaseForJQL(this.spaceInfo) : e.database(this.spaceInfo);
        var s = t.action || this.action;
        s && (n = n.action(s));
        var r = t.collection || this.collection;
        n = Array.isArray(r) ? (_n18 = n).collection.apply(_n18, (0, _toConsumableArray2.default)(r)) : n.collection(r);
        var i = t.where || this.where;
        i && Object.keys(i).length && (n = n.where(i));
        var o = t.field || this.field;
        o && (n = n.field(o));
        var a = t.foreignKey || this.foreignKey;
        a && (n = n.foreignKey(a));
        var c = t.groupby || this.groupby;
        c && (n = n.groupBy(c));
        var u = t.groupField || this.groupField;
        u && (n = n.groupField(u));
        !0 === (void 0 !== t.distinct ? t.distinct : this.distinct) && (n = n.distinct());
        var l = t.orderby || this.orderby;
        l && (n = n.orderBy(l));
        var h = void 0 !== t.pageCurrent ? t.pageCurrent : this.mixinDatacomPage.current,
          d = void 0 !== t.pageSize ? t.pageSize : this.mixinDatacomPage.size,
          p = void 0 !== t.getcount ? t.getcount : this.getcount,
          f = void 0 !== t.gettree ? t.gettree : this.gettree,
          g = void 0 !== t.gettreepath ? t.gettreepath : this.gettreepath,
          m = {
            getCount: p
          },
          y = {
            limitLevel: void 0 !== t.limitlevel ? t.limitlevel : this.limitlevel,
            startWith: void 0 !== t.startwith ? t.startwith : this.startwith
          };
        return f && (m.getTree = y), g && (m.getTreePath = y), n = n.skip(d * (h - 1)).limit(d).get(m), n;
      }
    }
  };
}
function ir(e) {
  return function (t) {
    var n = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    n = function (e) {
      var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      return e.customUI = t.customUI || e.customUI, e.parseSystemError = t.parseSystemError || e.parseSystemError, Object.assign(e.loadingOptions, t.loadingOptions), Object.assign(e.errorOptions, t.errorOptions), "object" == (0, _typeof2.default)(t.secretMethods) && (e.secretMethods = t.secretMethods), e;
    }({
      customUI: !1,
      loadingOptions: {
        title: "加载中...",
        mask: !0
      },
      errorOptions: {
        type: "modal",
        retry: !1
      }
    }, n);
    var _n19 = n,
      s = _n19.customUI,
      r = _n19.loadingOptions,
      i = _n19.errorOptions,
      o = _n19.parseSystemError,
      a = !s;
    return new Proxy({}, {
      get: function get(s, c) {
        switch (c) {
          case "toString":
            return "[object UniCloudObject]";
          case "toJSON":
            return {};
        }
        return function () {
          var _ref56 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
            e = _ref56.fn,
            t = _ref56.interceptorName,
            n = _ref56.getCallbackArgs;
          return /*#__PURE__*/(0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee64() {
            var _len2,
              s,
              _key2,
              r,
              i,
              o,
              _args = arguments;
            return _regenerator.default.wrap(function _callee64$(_context64) {
              while (1) {
                switch (_context64.prev = _context64.next) {
                  case 0:
                    for (_len2 = _args.length, s = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
                      s[_key2] = _args[_key2];
                    }
                    r = n ? n({
                      params: s
                    }) : {};
                    _context64.prev = 2;
                    _context64.next = 5;
                    return F(K(t, "invoke"), _objectSpread({}, r));
                  case 5:
                    _context64.next = 7;
                    return e.apply(void 0, s);
                  case 7:
                    i = _context64.sent;
                    _context64.next = 10;
                    return F(K(t, "success"), _objectSpread(_objectSpread({}, r), {}, {
                      result: i
                    }));
                  case 10:
                    return _context64.abrupt("return", i);
                  case 13:
                    _context64.prev = 13;
                    _context64.t0 = _context64["catch"](2);
                    o = _context64.t0;
                    _context64.next = 18;
                    return F(K(t, "fail"), _objectSpread(_objectSpread({}, r), {}, {
                      error: o
                    }));
                  case 18:
                    throw o;
                  case 19:
                    _context64.prev = 19;
                    _context64.next = 22;
                    return F(K(t, "complete"), o ? _objectSpread(_objectSpread({}, r), {}, {
                      error: o
                    }) : _objectSpread(_objectSpread({}, r), {}, {
                      result: i
                    }));
                  case 22:
                    return _context64.finish(19);
                  case 23:
                  case "end":
                    return _context64.stop();
                }
              }
            }, _callee64, null, [[2, 13, 19, 23]]);
          }));
        }({
          fn: function () {
            var _s18 = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee66() {
              var h,
                _len3,
                l,
                _key3,
                d,
                p,
                _ref58,
                f,
                g,
                m,
                y,
                _e26,
                _yield,
                _t20,
                _n20,
                _args4 = arguments;
              return _regenerator.default.wrap(function _callee66$(_context66) {
                while (1) {
                  switch (_context66.prev = _context66.next) {
                    case 0:
                      a && uni.showLoading({
                        title: r.title,
                        mask: r.mask
                      });
                      for (_len3 = _args4.length, l = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
                        l[_key3] = _args4[_key3];
                      }
                      d = {
                        name: t,
                        type: u,
                        data: {
                          method: c,
                          params: l
                        }
                      };
                      "object" == (0, _typeof2.default)(n.secretMethods) && function (e, t) {
                        var n = t.data.method,
                          s = e.secretMethods || {},
                          r = s[n] || s["*"];
                        r && (t.secretType = r);
                      }(n, d);
                      p = !1;
                      _context66.prev = 5;
                      _context66.next = 8;
                      return e.callFunction(d);
                    case 8:
                      h = _context66.sent;
                      _context66.next = 14;
                      break;
                    case 11:
                      _context66.prev = 11;
                      _context66.t0 = _context66["catch"](5);
                      p = !0, h = {
                        result: new re(_context66.t0)
                      };
                    case 14:
                      _ref58 = h.result || {}, f = _ref58.errSubject, g = _ref58.errCode, m = _ref58.errMsg, y = _ref58.newToken;
                      if (!(a && uni.hideLoading(), y && y.token && y.tokenExpired && (ae(y), Z(H, _objectSpread({}, y))), g)) {
                        _context66.next = 39;
                        break;
                      }
                      _e26 = m;
                      if (!(p && o)) {
                        _context66.next = 24;
                        break;
                      }
                      _context66.next = 20;
                      return o({
                        objectName: t,
                        methodName: c,
                        params: l,
                        errSubject: f,
                        errCode: g,
                        errMsg: m
                      });
                    case 20:
                      _context66.t1 = _context66.sent.errMsg;
                      if (_context66.t1) {
                        _context66.next = 23;
                        break;
                      }
                      _context66.t1 = m;
                    case 23:
                      _e26 = _context66.t1;
                    case 24:
                      if (!a) {
                        _context66.next = 37;
                        break;
                      }
                      if (!("toast" === i.type)) {
                        _context66.next = 29;
                        break;
                      }
                      uni.showToast({
                        title: _e26,
                        icon: "none"
                      });
                      _context66.next = 37;
                      break;
                    case 29:
                      if (!("modal" !== i.type)) {
                        _context66.next = 31;
                        break;
                      }
                      throw new Error("Invalid errorOptions.type: ".concat(i.type));
                    case 31:
                      _context66.next = 33;
                      return (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee65() {
                        var _ref60,
                          e,
                          t,
                          n,
                          s,
                          r,
                          _args2 = arguments;
                        return _regenerator.default.wrap(function _callee65$(_context65) {
                          while (1) {
                            switch (_context65.prev = _context65.next) {
                              case 0:
                                _ref60 = _args2.length > 0 && _args2[0] !== undefined ? _args2[0] : {}, e = _ref60.title, t = _ref60.content, n = _ref60.showCancel, s = _ref60.cancelText, r = _ref60.confirmText;
                                return _context65.abrupt("return", new Promise(function (i, o) {
                                  uni.showModal({
                                    title: e,
                                    content: t,
                                    showCancel: n,
                                    cancelText: s,
                                    confirmText: r,
                                    success: function success(e) {
                                      i(e);
                                    },
                                    fail: function fail() {
                                      i({
                                        confirm: !1,
                                        cancel: !0
                                      });
                                    }
                                  });
                                }));
                              case 2:
                              case "end":
                                return _context65.stop();
                            }
                          }
                        }, _callee65);
                      }))({
                        title: "提示",
                        content: _e26,
                        showCancel: i.retry,
                        cancelText: "取消",
                        confirmText: i.retry ? "重试" : "确定"
                      });
                    case 33:
                      _yield = _context66.sent;
                      _t20 = _yield.confirm;
                      if (!(i.retry && _t20)) {
                        _context66.next = 37;
                        break;
                      }
                      return _context66.abrupt("return", s.apply(void 0, l));
                    case 37:
                      _n20 = new re({
                        subject: f,
                        code: g,
                        message: m,
                        requestId: h.requestId
                      });
                      throw _n20.detail = h.result, Z(B, {
                        type: G,
                        content: _n20
                      }), _n20;
                    case 39:
                      return _context66.abrupt("return", (Z(B, {
                        type: G,
                        content: h.result
                      }), h.result));
                    case 40:
                    case "end":
                      return _context66.stop();
                  }
                }
              }, _callee66, null, [[5, 11]]);
            }));
            function s() {
              return _s18.apply(this, arguments);
            }
            return s;
          }(),
          interceptorName: "callObject",
          getCallbackArgs: function getCallbackArgs() {
            var _ref61 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
              e = _ref61.params;
            return {
              objectName: t,
              methodName: c,
              params: e
            };
          }
        });
      }
    });
  };
}
function or(e) {
  return U("_globalUniCloudSecureNetworkCache__{spaceId}".replace("{spaceId}", e.config.spaceId));
}
function ar() {
  return _ar.apply(this, arguments);
}
function _ar() {
  _ar = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee72() {
    var _ref72,
      e,
      _ref72$callLoginByWei,
      t,
      n,
      s,
      r,
      _args11 = arguments;
    return _regenerator.default.wrap(function _callee72$(_context72) {
      while (1) {
        switch (_context72.prev = _context72.next) {
          case 0:
            _ref72 = _args11.length > 0 && _args11[0] !== undefined ? _args11[0] : {}, e = _ref72.openid, _ref72$callLoginByWei = _ref72.callLoginByWeixin, t = _ref72$callLoginByWei === void 0 ? !1 : _ref72$callLoginByWei;
            n = or(this);
            if (!("mp-weixin" !== T)) {
              _context72.next = 4;
              break;
            }
            throw new Error("[SecureNetwork] API `initSecureNetworkByWeixin` is not supported on platform `".concat(T, "`"));
          case 4:
            if (!(e && t)) {
              _context72.next = 6;
              break;
            }
            throw new Error("[SecureNetwork] openid and callLoginByWeixin cannot be passed at the same time");
          case 6:
            if (!e) {
              _context72.next = 8;
              break;
            }
            return _context72.abrupt("return", (n.mpWeixinOpenid = e, {}));
          case 8:
            _context72.next = 10;
            return new Promise(function (e, t) {
              uni.login({
                success: function success(t) {
                  e(t.code);
                },
                fail: function fail(e) {
                  t(new Error(e.errMsg));
                }
              });
            });
          case 10:
            s = _context72.sent;
            r = this.importObject("uni-id-co", {
              customUI: !0
            });
            _context72.next = 14;
            return r.secureNetworkHandshakeByWeixin({
              code: s,
              callLoginByWeixin: t
            });
          case 14:
            n.mpWeixinCode = s;
            return _context72.abrupt("return", {
              code: s
            });
          case 16:
          case "end":
            return _context72.stop();
        }
      }
    }, _callee72, this);
  }));
  return _ar.apply(this, arguments);
}
function cr(_x52) {
  return _cr.apply(this, arguments);
}
function _cr() {
  _cr = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee73(e) {
    var t;
    return _regenerator.default.wrap(function _callee73$(_context73) {
      while (1) {
        switch (_context73.prev = _context73.next) {
          case 0:
            t = or(this);
            return _context73.abrupt("return", (t.initPromise || (t.initPromise = ar.call(this, e).then(function (e) {
              return e;
            }).catch(function (e) {
              throw delete t.initPromise, e;
            })), t.initPromise));
          case 2:
          case "end":
            return _context73.stop();
        }
      }
    }, _callee73, this);
  }));
  return _cr.apply(this, arguments);
}
function ur(e) {
  return function () {
    var _ref62 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
      t = _ref62.openid,
      _ref62$callLoginByWei = _ref62.callLoginByWeixin,
      n = _ref62$callLoginByWei === void 0 ? !1 : _ref62$callLoginByWei;
    return cr.call(e, {
      openid: t,
      callLoginByWeixin: n
    });
  };
}
function lr(e) {
  !function (e) {
    de = e;
  }(e);
}
function hr(e) {
  var t = "mp-weixin" === T && wx.canIUse("getAppBaseInfo"),
    n = {
      getAppBaseInfo: t ? uni.getAppBaseInfo : uni.getSystemInfo,
      getPushClientId: uni.getPushClientId
    };
  return function (s) {
    return new Promise(function (r, i) {
      t && "getAppBaseInfo" === e ? r(n[e]()) : n[e](_objectSpread(_objectSpread({}, s), {}, {
        success: function success(e) {
          r(e);
        },
        fail: function fail(e) {
          i(e);
        }
      }));
    });
  };
}
var dr = /*#__PURE__*/function (_ref63) {
  (0, _inherits2.default)(dr, _ref63);
  var _super11 = _createSuper(dr);
  function dr() {
    var _this27;
    (0, _classCallCheck2.default)(this, dr);
    _this27 = _super11.call(this), _this27._uniPushMessageCallback = _this27._receivePushMessage.bind((0, _assertThisInitialized2.default)(_this27)), _this27._currentMessageId = -1, _this27._payloadQueue = [];
    return _this27;
  }
  (0, _createClass2.default)(dr, [{
    key: "init",
    value: function init() {
      var _this28 = this;
      return Promise.all([hr("getAppBaseInfo")(), hr("getPushClientId")()]).then(function () {
        var _ref64 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [],
          _ref65 = (0, _slicedToArray2.default)(_ref64, 2),
          _ref65$ = _ref65[0];
        _ref65$ = _ref65$ === void 0 ? {} : _ref65$;
        var e = _ref65$.appId,
          _ref65$2 = _ref65[1];
        _ref65$2 = _ref65$2 === void 0 ? {} : _ref65$2;
        var t = _ref65$2.cid;
        if (!e) throw new Error("Invalid appId, please check the manifest.json file");
        if (!t) throw new Error("Invalid push client id");
        _this28._appId = e, _this28._pushClientId = t, _this28._seqId = Date.now() + "-" + Math.floor(9e5 * Math.random() + 1e5), _this28.emit("open"), _this28._initMessageListener();
      }, function (e) {
        throw _this28.emit("error", e), _this28.close(), e;
      });
    }
  }, {
    key: "open",
    value: function () {
      var _open = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee67() {
        return _regenerator.default.wrap(function _callee67$(_context67) {
          while (1) {
            switch (_context67.prev = _context67.next) {
              case 0:
                return _context67.abrupt("return", this.init());
              case 1:
              case "end":
                return _context67.stop();
            }
          }
        }, _callee67, this);
      }));
      function open() {
        return _open.apply(this, arguments);
      }
      return open;
    }()
  }, {
    key: "_isUniCloudSSE",
    value: function _isUniCloudSSE(e) {
      if ("receive" !== e.type) return !1;
      var t = e && e.data && e.data.payload;
      return !(!t || "UNI_CLOUD_SSE" !== t.channel || t.seqId !== this._seqId);
    }
  }, {
    key: "_receivePushMessage",
    value: function _receivePushMessage(e) {
      if (!this._isUniCloudSSE(e)) return;
      var t = e && e.data && e.data.payload,
        n = t.action,
        s = t.messageId,
        r = t.message;
      this._payloadQueue.push({
        action: n,
        messageId: s,
        message: r
      }), this._consumMessage();
    }
  }, {
    key: "_consumMessage",
    value: function _consumMessage() {
      var _this29 = this;
      for (;;) {
        var _e27 = this._payloadQueue.find(function (e) {
          return e.messageId === _this29._currentMessageId + 1;
        });
        if (!_e27) break;
        this._currentMessageId++, this._parseMessagePayload(_e27);
      }
    }
  }, {
    key: "_parseMessagePayload",
    value: function _parseMessagePayload(e) {
      var t = e.action,
        n = e.messageId,
        s = e.message;
      "end" === t ? this._end({
        messageId: n,
        message: s
      }) : "message" === t && this._appendMessage({
        messageId: n,
        message: s
      });
    }
  }, {
    key: "_appendMessage",
    value: function _appendMessage() {
      var _ref66 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
        e = _ref66.messageId,
        t = _ref66.message;
      this.emit("message", t);
    }
  }, {
    key: "_end",
    value: function _end() {
      var _ref67 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
        e = _ref67.messageId,
        t = _ref67.message;
      this.emit("end", t), this.close();
    }
  }, {
    key: "_initMessageListener",
    value: function _initMessageListener() {
      uni.onPushMessage(this._uniPushMessageCallback);
    }
  }, {
    key: "_destroy",
    value: function _destroy() {
      uni.offPushMessage(this._uniPushMessageCallback);
    }
  }, {
    key: "toJSON",
    value: function toJSON() {
      return {
        appId: this._appId,
        pushClientId: this._pushClientId,
        seqId: this._seqId
      };
    }
  }, {
    key: "close",
    value: function close() {
      this._destroy(), this.emit("close");
    }
  }]);
  return dr;
}( /*#__PURE__*/function () {
  function _class6() {
    (0, _classCallCheck2.default)(this, _class6);
    this._callback = {};
  }
  (0, _createClass2.default)(_class6, [{
    key: "addListener",
    value: function addListener(e, t) {
      this._callback[e] || (this._callback[e] = []), this._callback[e].push(t);
    }
  }, {
    key: "on",
    value: function on(e, t) {
      return this.addListener(e, t);
    }
  }, {
    key: "removeListener",
    value: function removeListener(e, t) {
      if (!t) throw new Error('The "listener" argument must be of type function. Received undefined');
      var n = this._callback[e];
      if (!n) return;
      var s = function (e, t) {
        for (var _n21 = e.length - 1; _n21 >= 0; _n21--) {
          if (e[_n21] === t) return _n21;
        }
        return -1;
      }(n, t);
      n.splice(s, 1);
    }
  }, {
    key: "off",
    value: function off(e, t) {
      return this.removeListener(e, t);
    }
  }, {
    key: "removeAllListener",
    value: function removeAllListener(e) {
      delete this._callback[e];
    }
  }, {
    key: "emit",
    value: function emit(e) {
      var n = this._callback[e];
      for (var _len4 = arguments.length, t = new Array(_len4 > 1 ? _len4 - 1 : 0), _key4 = 1; _key4 < _len4; _key4++) {
        t[_key4 - 1] = arguments[_key4];
      }
      if (n) for (var _e28 = 0; _e28 < n.length; _e28++) {
        n[_e28].apply(n, t);
      }
    }
  }]);
  return _class6;
}());
function pr(_x53) {
  return _pr.apply(this, arguments);
}
function _pr() {
  _pr = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee74(e) {
    var _le2, _e34, _t22, t, _t$debugInfo, n, s, _yield$xt2, r, i, o;
    return _regenerator.default.wrap(function _callee74$(_context74) {
      while (1) {
        switch (_context74.prev = _context74.next) {
          case 0:
            if (S) {
              _context74.next = 2;
              break;
            }
            return _context74.abrupt("return", Promise.resolve());
          case 2:
            if ("app" === T) {
              _le2 = le(), _e34 = _le2.osName, _t22 = _le2.osVersion;
              "ios" === _e34 && function (e) {
                if (!e || "string" != typeof e) return 0;
                var t = e.match(/^(\d+)./);
                return t && t[1] ? parseInt(t[1]) : 0;
              }(_t22) >= 14 && console.warn("iOS 14及以上版本连接uniCloud本地调试服务需要允许客户端查找并连接到本地网络上的设备（仅开发期间需要，发行后不需要）");
            }
            t = e.__dev__;
            if (t.debugInfo) {
              _context74.next = 6;
              break;
            }
            return _context74.abrupt("return");
          case 6:
            _t$debugInfo = t.debugInfo;
            n = _t$debugInfo.address;
            s = _t$debugInfo.servePort;
            _context74.next = 11;
            return xt(n, s);
          case 11:
            _yield$xt2 = _context74.sent;
            r = _yield$xt2.address;
            if (!r) {
              _context74.next = 15;
              break;
            }
            return _context74.abrupt("return", (t.localAddress = r, void (t.localPort = s)));
          case 15:
            i = console["app" === T ? "error" : "warn"];
            o = "";
            if (!("remote" === t.debugInfo.initialLaunchType ? (t.debugInfo.forceRemote = !0, o = "当前客户端和HBuilderX不在同一局域网下（或其他网络原因无法连接HBuilderX），uniCloud本地调试服务不对当前客户端生效。\n- 如果不使用uniCloud本地调试服务，请直接忽略此信息。\n- 如需使用uniCloud本地调试服务，请将客户端与主机连接到同一局域网下并重新运行到客户端。") : o = "无法连接uniCloud本地调试服务，请检查当前客户端是否与主机在同一局域网下。\n- 如需使用uniCloud本地调试服务，请将客户端与主机连接到同一局域网下并重新运行到客户端。", o += "\n- 如果在HBuilderX开启的状态下切换过网络环境，请重启HBuilderX后再试\n- 检查系统防火墙是否拦截了HBuilderX自带的nodejs\n- 检查是否错误的使用拦截器修改uni.request方法的参数", "web" === T && (o += "\n- 部分浏览器开启节流模式之后访问本地地址受限，请检查是否启用了节流模式"), 0 === T.indexOf("mp-") && (o += "\n- 小程序中如何使用uniCloud，请参考：https://uniapp.dcloud.net.cn/uniCloud/publish.html#useinmp"), !t.debugInfo.forceRemote)) {
              _context74.next = 19;
              break;
            }
            throw new Error(o);
          case 19:
            i(o);
          case 20:
          case "end":
            return _context74.stop();
        }
      }
    }, _callee74);
  }));
  return _pr.apply(this, arguments);
}
function fr(e) {
  e._initPromiseHub || (e._initPromiseHub = new v({
    createPromise: function createPromise() {
      var t = Promise.resolve();
      var n;
      n = 1, t = new Promise(function (e) {
        setTimeout(function () {
          e();
        }, n);
      });
      var s = e.auth();
      return t.then(function () {
        return s.getLoginState();
      }).then(function (e) {
        return e ? Promise.resolve() : s.signInAnonymously();
      });
    }
  }));
}
var gr = {
  tcb: Ot,
  tencent: Ot,
  aliyun: me,
  private: Rt,
  dcloud: Rt,
  alipay: Ht
};
var mr = new ( /*#__PURE__*/function () {
  function _class7() {
    (0, _classCallCheck2.default)(this, _class7);
  }
  (0, _createClass2.default)(_class7, [{
    key: "init",
    value: function init(e) {
      var t = {};
      var n = gr[e.provider];
      if (!n) throw new Error("未提供正确的provider参数");
      t = n.init(e), S && function (e) {
        if (!S) return;
        var t = {};
        e.__dev__ = t, t.debugLog = S && ("web" === T && navigator.userAgent.indexOf("HBuilderX") > 0 || "app" === T || "mp-harmony" === T);
        var n = C;
        n && !n.code && (t.debugInfo = n);
        var s = new v({
          createPromise: function createPromise() {
            return pr(e);
          }
        });
        t.initLocalNetwork = function () {
          return s.exec();
        };
      }(t), fr(t), us(t), function (e) {
        var t = e.uploadFile;
        e.uploadFile = function (e) {
          return t.call(this, e);
        };
      }(t), function (e) {
        e.database = function (t) {
          if (t && Object.keys(t).length > 0) return e.init(t).database();
          if (this._database) return this._database;
          var n = vs(Is, {
            uniClient: e
          });
          return this._database = n, n;
        }, e.databaseForJQL = function (t) {
          if (t && Object.keys(t).length > 0) return e.init(t).databaseForJQL();
          if (this._databaseForJQL) return this._databaseForJQL;
          var n = vs(Is, {
            uniClient: e,
            isJQL: !0
          });
          return this._databaseForJQL = n, n;
        };
      }(t), function (e) {
        e.getCurrentUserInfo = er, e.chooseAndUploadFile = nr.initChooseAndUploadFile(e), Object.assign(e, {
          get mixinDatacom() {
            return rr(e);
          }
        }), e.SSEChannel = dr, e.initSecureNetworkByWeixin = ur(e), e.setCustomClientInfo = lr, e.importObject = ir(e);
      }(t);
      return ["callFunction", "uploadFile", "deleteFile", "getTempFileURL", "downloadFile", "chooseAndUploadFile"].forEach(function (e) {
        if (!t[e]) return;
        var n = t[e];
        t[e] = function () {
          return n.apply(t, Array.from(arguments));
        }, t[e] = function (e, t) {
          return function (n) {
            var _this30 = this;
            var s = !1;
            if ("callFunction" === t) {
              var _e29 = n && n.type || c;
              s = _e29 !== c;
            }
            var r = "callFunction" === t && !s,
              i = this._initPromiseHub.exec();
            n = n || {};
            var _se2 = se(n),
              o = _se2.success,
              a = _se2.fail,
              u = _se2.complete,
              l = i.then(function () {
                return s ? Promise.resolve() : F(K(t, "invoke"), n);
              }).then(function () {
                return e.call(_this30, n);
              }).then(function (e) {
                return s ? Promise.resolve(e) : F(K(t, "success"), e).then(function () {
                  return F(K(t, "complete"), e);
                }).then(function () {
                  return r && Z(B, {
                    type: V,
                    content: e
                  }), Promise.resolve(e);
                });
              }, function (e) {
                return s ? Promise.reject(e) : F(K(t, "fail"), e).then(function () {
                  return F(K(t, "complete"), e);
                }).then(function () {
                  return Z(B, {
                    type: V,
                    content: e
                  }), Promise.reject(e);
                });
              });
            if (!(o || a || u)) return l;
            l.then(function (e) {
              o && o(e), u && u(e), r && Z(B, {
                type: V,
                content: e
              });
            }, function (e) {
              a && a(e), u && u(e), r && Z(B, {
                type: V,
                content: e
              });
            });
          };
        }(t[e], e).bind(t);
      }), t.init = this.init, t;
    }
  }]);
  return _class7;
}())();
exports.uniCloud = mr;
(function () {
  var e = Array.isArray(P) ? P.length : 0,
    t = function () {
      var e = Yt(),
        t = Zt();
      return t && t.enable && g(t.space) ? t.space : e;
    }();
  if (1 === e) exports.uniCloud = mr = mr.init(t), mr._isDefault = !0;else {
    var _t21 = ["database", "getCurrentUserInfo", "importObject"];
    var _n22;
    _n22 = e > 0 ? "应用有多个服务空间，请通过uniCloud.init方法指定要使用的服务空间" : O ? "应用未关联服务空间，请在uniCloud目录右键关联服务空间" : "uni-app cli项目内使用uniCloud需要使用HBuilderX的运行菜单运行项目，且需要在uniCloud目录关联服务空间", ["auth", "callFunction", "uploadFile", "deleteFile", "getTempFileURL", "downloadFile"].concat(_t21).forEach(function (e) {
      mr[e] = function () {
        if (console.error(_n22), -1 === _t21.indexOf(e)) return Promise.reject(new re({
          code: "SYS_ERR",
          message: _n22
        }));
        console.error(_n22);
      };
    });
  }
  if (Object.assign(mr, {
    get mixinDatacom() {
      return rr(mr);
    }
  }), Qs(mr), mr.addInterceptor = M, mr.removeInterceptor = q, mr.interceptObject = j, S && "web" === T && (window.uniCloud = mr), "app" === T && (uni.__uniCloud = mr), "app" === T || "web" === T) {
    var _e30 = R();
    _e30.uniCloud = mr, _e30.UniCloudError = re;
  }
  !function () {
    var _Yt = Yt(),
      e = _Yt.failoverEndpoint;
    if (!e) return;
    nn().catch(function (e) {
      console.error("请求故障切换配置失败：", e);
    });
    var t = {
      fail: function fail() {
        var e = Zt();
        tn(e && e.interval || 0) && nn().catch(function (e) {
          console.error("请求故障切换配置失败：", e);
        });
      }
    };
    M("callFunction", t), M("database", t), M("uploadFile", t);
  }();
})();
var yr = mr;
exports.default = yr;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../webpack/buildin/global.js */ 3), __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 2)["default"], __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/wx.js */ 1)["default"]))

/***/ }),

/***/ 581:
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/assertThisInitialized.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }
  return self;
}
module.exports = _assertThisInitialized, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ 582:
/*!*********************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/inherits.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var setPrototypeOf = __webpack_require__(/*! ./setPrototypeOf.js */ 16);
function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }
  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  Object.defineProperty(subClass, "prototype", {
    writable: false
  });
  if (superClass) setPrototypeOf(subClass, superClass);
}
module.exports = _inherits, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ 583:
/*!**************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__(/*! ./typeof.js */ 13)["default"];
var assertThisInitialized = __webpack_require__(/*! ./assertThisInitialized.js */ 581);
function _possibleConstructorReturn(self, call) {
  if (call && (_typeof(call) === "object" || typeof call === "function")) {
    return call;
  } else if (call !== void 0) {
    throw new TypeError("Derived constructors may only return object or undefined");
  }
  return assertThisInitialized(self);
}
module.exports = _possibleConstructorReturn, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ 584:
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/getPrototypeOf.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _getPrototypeOf(o) {
  module.exports = _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  }, module.exports.__esModule = true, module.exports["default"] = module.exports;
  return _getPrototypeOf(o);
}
module.exports = _getPrototypeOf, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ 585:
/*!****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/wrapNativeSuper.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var getPrototypeOf = __webpack_require__(/*! ./getPrototypeOf.js */ 584);
var setPrototypeOf = __webpack_require__(/*! ./setPrototypeOf.js */ 16);
var isNativeFunction = __webpack_require__(/*! ./isNativeFunction.js */ 586);
var construct = __webpack_require__(/*! ./construct.js */ 15);
function _wrapNativeSuper(Class) {
  var _cache = typeof Map === "function" ? new Map() : undefined;
  module.exports = _wrapNativeSuper = function _wrapNativeSuper(Class) {
    if (Class === null || !isNativeFunction(Class)) return Class;
    if (typeof Class !== "function") {
      throw new TypeError("Super expression must either be null or a function");
    }
    if (typeof _cache !== "undefined") {
      if (_cache.has(Class)) return _cache.get(Class);
      _cache.set(Class, Wrapper);
    }
    function Wrapper() {
      return construct(Class, arguments, getPrototypeOf(this).constructor);
    }
    Wrapper.prototype = Object.create(Class.prototype, {
      constructor: {
        value: Wrapper,
        enumerable: false,
        writable: true,
        configurable: true
      }
    });
    return setPrototypeOf(Wrapper, Class);
  }, module.exports.__esModule = true, module.exports["default"] = module.exports;
  return _wrapNativeSuper(Class);
}
module.exports = _wrapNativeSuper, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ 586:
/*!*****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/isNativeFunction.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _isNativeFunction(fn) {
  try {
    return Function.toString.call(fn).indexOf("[native code]") !== -1;
  } catch (e) {
    return typeof fn === "function";
  }
}
module.exports = _isNativeFunction, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ 587:
/*!*********************************************************************************!*\
  !*** E:/project/yhlc-v1.0/agent-uniapp/pages.json?{"type":"origin-pages-json"} ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _default = {
  "pages": [{
    "path": "pages/login/index",
    "style": {
      "navigationStyle": "custom"
    }
  }],
  "subPackages": [{
    "root": "sub-pages/auth",
    "pages": [{
      "path": "login",
      "style": {
        "navigationStyle": "custom"
      }
    }, {
      "path": "merchant",
      "style": {
        "navigationStyle": "custom"
      }
    }, {
      "path": "register",
      "style": {
        "navigationBarTitleText": "供应商注册",
        "navigationBarBackgroundColor": "#FFFFFF"
      }
    }, {
      "path": "privacy-policy",
      "style": {
        "navigationBarTitleText": "隐私协议",
        "navigationBarBackgroundColor": "#FFFFFF"
      }
    }]
  }, {
    "root": "sub-pages/rider",
    "pages": [{
      "path": "task/task",
      "style": {
        "navigationStyle": "custom",
        "navigationBarTextStyle": "white",
        "enablePullDownRefresh": true
      }
    }, {
      "path": "user/user",
      "style": {
        "navigationBarBackgroundColor": "#FFFFFF",
        "navigationBarTitleText": "我的"
      }
    }, {
      "path": "order/order",
      "style": {
        "navigationBarTitleText": "订单",
        "navigationBarBackgroundColor": "#FFFFFF"
      }
    }, {
      "path": "income/income",
      "style": {
        "navigationBarTitleText": "收入明细",
        "navigationBarBackgroundColor": "#FFFFFF"
      }
    }, {
      "path": "profile/edit",
      "style": {
        "navigationBarTitleText": "资料",
        "navigationBarBackgroundColor": "#FFFFFF"
      }
    }]
  }, {
    "root": "sub-pages/merchant",
    "pages": [{
      "path": "dashboard/index",
      "style": {
        "navigationStyle": "custom",
        "navigationBarTextStyle": "white"
      }
    }, {
      "path": "home/index",
      "style": {
        "navigationStyle": "custom",
        "navigationBarTextStyle": "white"
      }
    }, {
      "path": "user/user1",
      "style": {
        "navigationBarTitleText": "我的",
        "navigationStyle": "custom",
        "enablePullDownRefresh": true,
        "disableScroll": false
      }
    }, {
      "path": "user/city-warehouse-dashboard",
      "style": {
        "navigationBarTitleText": "城市仓数据看板",
        "navigationBarBackgroundColor": "#FFFFFF",
        "enablePullDownRefresh": true
      }
    }, {
      "path": "user/log-capture",
      "style": {
        "navigationBarTitleText": "日志抓取",
        "navigationBarBackgroundColor": "#FFFFFF"
      }
    }, {
      "path": "user/change-password",
      "style": {
        "navigationBarTitleText": "修改密码",
        "navigationBarBackgroundColor": "#FFFFFF"
      }
    }, {
      "path": "bill/bill-detail",
      "style": {
        "navigationBarTitleText": "结算账单",
        "navigationBarBackgroundColor": "#FFFFFF",
        "navigationBarTextStyle": "black"
      }
    }, {
      "path": "bill/bill-day-detail",
      "style": {
        "navigationBarTitleText": "账单详情页",
        "navigationBarBackgroundColor": "#FFFFFF",
        "navigationBarTextStyle": "black",
        "disableScroll": false
      }
    }, {
      "path": "bill/bill-product-orders",
      "style": {
        "navigationBarTitleText": "商品订单",
        "navigationBarBackgroundColor": "#FFFFFF",
        "navigationBarTextStyle": "black"
      }
    }, {
      "path": "bill/bill-item-details",
      "style": {
        "navigationBarTitleText": "流水明细",
        "navigationBarBackgroundColor": "#FFFFFF",
        "navigationBarTextStyle": "black"
      }
    }, {
      "path": "task/task1",
      "style": {
        "navigationStyle": "custom",
        "navigationBarTextStyle": "white",
        "enablePullDownRefresh": true
      }
    }, {
      "path": "order/order1",
      "style": {
        "navigationBarTitleText": "订单",
        "navigationBarBackgroundColor": "#FFFFFF"
      }
    }, {
      "path": "verification/index",
      "style": {
        "navigationBarTitleText": "订单核销",
        "navigationBarBackgroundColor": "#FFFFFF"
      }
    }]
  }, {
    "root": "sub-pages/supply",
    "pages": [{
      "path": "index",
      "style": {
        "navigationBarTitleText": "我要供货",
        "navigationBarBackgroundColor": "#FFFFFF",
        "navigationBarTextStyle": "black"
      }
    }, {
      "path": "goods-search",
      "style": {
        "navigationBarTitleText": "商品搜索",
        "navigationBarBackgroundColor": "#FFFFFF",
        "navigationBarTextStyle": "black"
      }
    }, {
      "path": "supplier-goods-upload",
      "style": {
        "navigationBarTitleText": "上传供应商商品",
        "navigationBarBackgroundColor": "#FFFFFF",
        "navigationBarTextStyle": "black",
        "disableScroll": true
      }
    }, {
      "path": "supplier-goods-reapply",
      "style": {
        "navigationBarTitleText": "申请上架",
        "navigationBarBackgroundColor": "#FFFFFF",
        "navigationBarTextStyle": "black"
      }
    }, {
      "path": "goods",
      "style": {
        "navigationBarTitleText": "供货商品",
        "navigationBarBackgroundColor": "#FFFFFF",
        "navigationBarTextStyle": "black"
      }
    }, {
      "path": "goods-reapply-upload",
      "style": {
        "navigationBarTitleText": "申请上架",
        "navigationBarBackgroundColor": "#FFFFFF",
        "navigationBarTextStyle": "black"
      }
    }, {
      "path": "delivery-list",
      "style": {
        "navigationBarTitleText": "待送货列表",
        "navigationBarBackgroundColor": "#FFFFFF",
        "navigationBarTextStyle": "black",
        "navigationStyle": "default"
      }
    }, {
      "path": "supplier-order",
      "style": {
        "navigationBarTitleText": "送货单",
        "navigationBarBackgroundColor": "#FFFFFF",
        "navigationBarTextStyle": "black",
        "navigationStyle": "default"
      }
    }, {
      "path": "supplier-order-detail",
      "style": {
        "navigationBarTitleText": "送货单详情",
        "navigationBarBackgroundColor": "#FFFFFF",
        "navigationBarTextStyle": "black",
        "navigationStyle": "default"
      }
    }, {
      "path": "supplier-order-print-label",
      "style": {
        "navigationBarTitleText": "打印标签",
        "navigationBarBackgroundColor": "#FFFFFF",
        "navigationBarTextStyle": "black",
        "navigationStyle": "default"
      }
    }, {
      "path": "no-delivery",
      "style": {
        "navigationBarTitleText": "暂不送货列表",
        "navigationBarBackgroundColor": "#FFFFFF",
        "navigationBarTextStyle": "black",
        "navigationStyle": "custom"
      }
    }]
  }, {
    "root": "sub-pages/after-sale",
    "pages": [{
      "path": "less-goods",
      "style": {
        "navigationBarTitleText": "少货单",
        "navigationBarBackgroundColor": "#FFFFFF",
        "navigationBarTextStyle": "black"
      }
    }, {
      "path": "excess-goods",
      "style": {
        "navigationBarTitleText": "多货单",
        "navigationBarBackgroundColor": "#FFFFFF",
        "navigationBarTextStyle": "black"
      }
    }, {
      "path": "damage-report",
      "style": {
        "navigationBarTitleText": "售后单",
        "navigationBarBackgroundColor": "#FFFFFF",
        "navigationBarTextStyle": "black",
        "enablePullDownRefresh": true,
        "onReachBottomDistance": 80,
        "disableScroll": false
      }
    }, {
      "path": "damage-report-supplier-audit",
      "style": {
        "navigationBarTitleText": "供应商审核详情",
        "navigationBarBackgroundColor": "#FFFFFF",
        "navigationBarTextStyle": "black"
      }
    }, {
      "path": "diff-refund",
      "style": {
        "navigationBarTitleText": "差额退款",
        "navigationBarBackgroundColor": "#FFFFFF",
        "navigationBarTextStyle": "black"
      }
    }, {
      "path": "settlement-order",
      "style": {
        "navigationBarTitleText": "结算单",
        "navigationBarBackgroundColor": "#FFFFFF",
        "navigationBarTextStyle": "black"
      }
    }]
  }, {
    "root": "sub-pages/warehouse",
    "pages": [{
      "path": "city-warehouse-inbound",
      "style": {
        "navigationBarTitleText": "城市仓入库",
        "navigationBarBackgroundColor": "#FFFFFF",
        "navigationBarTextStyle": "black"
      }
    }, {
      "path": "transfer-order",
      "style": {
        "navigationBarTitleText": "调拨单",
        "navigationBarBackgroundColor": "#FFFFFF",
        "navigationBarTextStyle": "black"
      }
    }, {
      "path": "transfer-order-detail",
      "style": {
        "navigationBarTitleText": "调拨单详情",
        "navigationBarBackgroundColor": "#FFFFFF",
        "navigationBarTextStyle": "black"
      }
    }, {
      "path": "picking-order",
      "style": {
        "navigationBarTitleText": "拣货单",
        "navigationBarBackgroundColor": "#FFFFFF",
        "navigationBarTextStyle": "black"
      }
    }, {
      "path": "picking-order-detail",
      "style": {
        "navigationBarTitleText": "拣货明细",
        "navigationBarBackgroundColor": "#FFFFFF",
        "navigationBarTextStyle": "black"
      }
    }, {
      "path": "store-order-list",
      "style": {
        "navigationBarTitleText": "订单列表",
        "navigationBarBackgroundColor": "#FFFFFF",
        "navigationBarTextStyle": "black",
        "enablePullDownRefresh": true,
        "onReachBottomDistance": 80
      }
    }, {
      "path": "store-order-detail",
      "style": {
        "navigationBarTitleText": "订单详情",
        "navigationBarBackgroundColor": "#FFFFFF",
        "navigationBarTextStyle": "black"
      }
    }, {
      "path": "inventory",
      "style": {
        "navigationBarTitleText": "库存",
        "navigationBarBackgroundColor": "#FFFFFF",
        "navigationBarTextStyle": "black",
        "disableScroll": true
      }
    }]
  }, {
    "root": "sub-pages/product",
    "pages": [{
      "path": "product1",
      "style": {
        "navigationBarTitleText": "商品管理",
        "navigationBarBackgroundColor": "#FFFFFF"
      }
    }]
  }, {
    "root": "sub-pages/printer",
    "pages": [{
      "path": "connect/index",
      "style": {
        "navigationBarTitleText": "蓝牙连接",
        "navigationBarBackgroundColor": "#FFFFFF",
        "disableScroll": false
      }
    }, {
      "path": "test/index",
      "style": {
        "navigationBarTitleText": "打印机测试",
        "navigationBarBackgroundColor": "#FFFFFF"
      }
    }]
  }],
  "optimization": {
    "subPackages": true
  },
  "globalStyle": {
    "navigationBarTextStyle": "black",
    "navigationBarTitleText": "uni-app",
    "navigationBarBackgroundColor": "#F8F8F8",
    "backgroundColor": "#F8F8F8",
    "disableScroll": true,
    "app-plus": {
      "bounce": "none"
    }
  },
  "preloadRule": {
    "pages/login/index": {
      "network": "all",
      "packages": ["sub-pages/auth", "sub-pages/merchant"]
    },
    "sub-pages/auth/merchant": {
      "network": "all",
      "packages": ["sub-pages/merchant", "sub-pages/supply"]
    },
    "sub-pages/auth/login": {
      "network": "all",
      "packages": ["sub-pages/rider"]
    }
  }
};
exports.default = _default;

/***/ }),

/***/ 588:
/*!********************************************************************!*\
  !*** E:/project/yhlc-v1.0/agent-uniapp/pages.json?{"type":"stat"} ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _default = {
  "appid": "__UNI__588991F"
};
exports.default = _default;

/***/ }),

/***/ 59:
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/regeneratorRuntime.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__(/*! ./typeof.js */ 13)["default"];
function _regeneratorRuntime() {
  "use strict";

  /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */
  module.exports = _regeneratorRuntime = function _regeneratorRuntime() {
    return e;
  }, module.exports.__esModule = true, module.exports["default"] = module.exports;
  var t,
    e = {},
    r = Object.prototype,
    n = r.hasOwnProperty,
    o = Object.defineProperty || function (t, e, r) {
      t[e] = r.value;
    },
    i = "function" == typeof Symbol ? Symbol : {},
    a = i.iterator || "@@iterator",
    c = i.asyncIterator || "@@asyncIterator",
    u = i.toStringTag || "@@toStringTag";
  function define(t, e, r) {
    return Object.defineProperty(t, e, {
      value: r,
      enumerable: !0,
      configurable: !0,
      writable: !0
    }), t[e];
  }
  try {
    define({}, "");
  } catch (t) {
    define = function define(t, e, r) {
      return t[e] = r;
    };
  }
  function wrap(t, e, r, n) {
    var i = e && e.prototype instanceof Generator ? e : Generator,
      a = Object.create(i.prototype),
      c = new Context(n || []);
    return o(a, "_invoke", {
      value: makeInvokeMethod(t, r, c)
    }), a;
  }
  function tryCatch(t, e, r) {
    try {
      return {
        type: "normal",
        arg: t.call(e, r)
      };
    } catch (t) {
      return {
        type: "throw",
        arg: t
      };
    }
  }
  e.wrap = wrap;
  var h = "suspendedStart",
    l = "suspendedYield",
    f = "executing",
    s = "completed",
    y = {};
  function Generator() {}
  function GeneratorFunction() {}
  function GeneratorFunctionPrototype() {}
  var p = {};
  define(p, a, function () {
    return this;
  });
  var d = Object.getPrototypeOf,
    v = d && d(d(values([])));
  v && v !== r && n.call(v, a) && (p = v);
  var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p);
  function defineIteratorMethods(t) {
    ["next", "throw", "return"].forEach(function (e) {
      define(t, e, function (t) {
        return this._invoke(e, t);
      });
    });
  }
  function AsyncIterator(t, e) {
    function invoke(r, o, i, a) {
      var c = tryCatch(t[r], t, o);
      if ("throw" !== c.type) {
        var u = c.arg,
          h = u.value;
        return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) {
          invoke("next", t, i, a);
        }, function (t) {
          invoke("throw", t, i, a);
        }) : e.resolve(h).then(function (t) {
          u.value = t, i(u);
        }, function (t) {
          return invoke("throw", t, i, a);
        });
      }
      a(c.arg);
    }
    var r;
    o(this, "_invoke", {
      value: function value(t, n) {
        function callInvokeWithMethodAndArg() {
          return new e(function (e, r) {
            invoke(t, n, e, r);
          });
        }
        return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg();
      }
    });
  }
  function makeInvokeMethod(e, r, n) {
    var o = h;
    return function (i, a) {
      if (o === f) throw Error("Generator is already running");
      if (o === s) {
        if ("throw" === i) throw a;
        return {
          value: t,
          done: !0
        };
      }
      for (n.method = i, n.arg = a;;) {
        var c = n.delegate;
        if (c) {
          var u = maybeInvokeDelegate(c, n);
          if (u) {
            if (u === y) continue;
            return u;
          }
        }
        if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) {
          if (o === h) throw o = s, n.arg;
          n.dispatchException(n.arg);
        } else "return" === n.method && n.abrupt("return", n.arg);
        o = f;
        var p = tryCatch(e, r, n);
        if ("normal" === p.type) {
          if (o = n.done ? s : l, p.arg === y) continue;
          return {
            value: p.arg,
            done: n.done
          };
        }
        "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg);
      }
    };
  }
  function maybeInvokeDelegate(e, r) {
    var n = r.method,
      o = e.iterator[n];
    if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y;
    var i = tryCatch(o, e.iterator, r.arg);
    if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y;
    var a = i.arg;
    return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y);
  }
  function pushTryEntry(t) {
    var e = {
      tryLoc: t[0]
    };
    1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e);
  }
  function resetTryEntry(t) {
    var e = t.completion || {};
    e.type = "normal", delete e.arg, t.completion = e;
  }
  function Context(t) {
    this.tryEntries = [{
      tryLoc: "root"
    }], t.forEach(pushTryEntry, this), this.reset(!0);
  }
  function values(e) {
    if (e || "" === e) {
      var r = e[a];
      if (r) return r.call(e);
      if ("function" == typeof e.next) return e;
      if (!isNaN(e.length)) {
        var o = -1,
          i = function next() {
            for (; ++o < e.length;) {
              if (n.call(e, o)) return next.value = e[o], next.done = !1, next;
            }
            return next.value = t, next.done = !0, next;
          };
        return i.next = i;
      }
    }
    throw new TypeError(_typeof(e) + " is not iterable");
  }
  return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", {
    value: GeneratorFunctionPrototype,
    configurable: !0
  }), o(GeneratorFunctionPrototype, "constructor", {
    value: GeneratorFunction,
    configurable: !0
  }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) {
    var e = "function" == typeof t && t.constructor;
    return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name));
  }, e.mark = function (t) {
    return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t;
  }, e.awrap = function (t) {
    return {
      __await: t
    };
  }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () {
    return this;
  }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) {
    void 0 === i && (i = Promise);
    var a = new AsyncIterator(wrap(t, r, n, o), i);
    return e.isGeneratorFunction(r) ? a : a.next().then(function (t) {
      return t.done ? t.value : a.next();
    });
  }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () {
    return this;
  }), define(g, "toString", function () {
    return "[object Generator]";
  }), e.keys = function (t) {
    var e = Object(t),
      r = [];
    for (var n in e) {
      r.push(n);
    }
    return r.reverse(), function next() {
      for (; r.length;) {
        var t = r.pop();
        if (t in e) return next.value = t, next.done = !1, next;
      }
      return next.done = !0, next;
    };
  }, e.values = values, Context.prototype = {
    constructor: Context,
    reset: function reset(e) {
      if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) {
        "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t);
      }
    },
    stop: function stop() {
      this.done = !0;
      var t = this.tryEntries[0].completion;
      if ("throw" === t.type) throw t.arg;
      return this.rval;
    },
    dispatchException: function dispatchException(e) {
      if (this.done) throw e;
      var r = this;
      function handle(n, o) {
        return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o;
      }
      for (var o = this.tryEntries.length - 1; o >= 0; --o) {
        var i = this.tryEntries[o],
          a = i.completion;
        if ("root" === i.tryLoc) return handle("end");
        if (i.tryLoc <= this.prev) {
          var c = n.call(i, "catchLoc"),
            u = n.call(i, "finallyLoc");
          if (c && u) {
            if (this.prev < i.catchLoc) return handle(i.catchLoc, !0);
            if (this.prev < i.finallyLoc) return handle(i.finallyLoc);
          } else if (c) {
            if (this.prev < i.catchLoc) return handle(i.catchLoc, !0);
          } else {
            if (!u) throw Error("try statement without catch or finally");
            if (this.prev < i.finallyLoc) return handle(i.finallyLoc);
          }
        }
      }
    },
    abrupt: function abrupt(t, e) {
      for (var r = this.tryEntries.length - 1; r >= 0; --r) {
        var o = this.tryEntries[r];
        if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) {
          var i = o;
          break;
        }
      }
      i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null);
      var a = i ? i.completion : {};
      return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a);
    },
    complete: function complete(t, e) {
      if ("throw" === t.type) throw t.arg;
      return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y;
    },
    finish: function finish(t) {
      for (var e = this.tryEntries.length - 1; e >= 0; --e) {
        var r = this.tryEntries[e];
        if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y;
      }
    },
    "catch": function _catch(t) {
      for (var e = this.tryEntries.length - 1; e >= 0; --e) {
        var r = this.tryEntries[e];
        if (r.tryLoc === t) {
          var n = r.completion;
          if ("throw" === n.type) {
            var o = n.arg;
            resetTryEntry(r);
          }
          return o;
        }
      }
      throw Error("illegal catch attempt");
    },
    delegateYield: function delegateYield(e, r, n) {
      return this.delegate = {
        iterator: values(e),
        resultName: r,
        nextLoc: n
      }, "next" === this.method && (this.arg = t), y;
    }
  }, e;
}
module.exports = _regeneratorRuntime, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ 596:
/*!*********************************************************************************************!*\
  !*** E:/project/yhlc-v1.0/agent-uniapp/uni_modules/uni-popup/components/uni-popup/popup.js ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _default = {
  data: function data() {
    return {};
  },
  created: function created() {
    this.popup = this.getParent();
  },
  methods: {
    /**
     * 获取父元素实例
     */
    getParent: function getParent() {
      var name = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'uniPopup';
      var parent = this.$parent;
      var parentName = parent.$options.name;
      while (parentName !== name) {
        parent = parent.$parent;
        if (!parent) return false;
        parentName = parent.$options.name;
      }
      return parent;
    }
  }
};
exports.default = _default;

/***/ }),

/***/ 597:
/*!**************************************************************************************************!*\
  !*** E:/project/yhlc-v1.0/agent-uniapp/uni_modules/uni-popup/components/uni-popup/i18n/index.js ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ 4);
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _en = _interopRequireDefault(__webpack_require__(/*! ./en.json */ 598));
var _zhHans = _interopRequireDefault(__webpack_require__(/*! ./zh-Hans.json */ 599));
var _zhHant = _interopRequireDefault(__webpack_require__(/*! ./zh-Hant.json */ 600));
var _default = {
  en: _en.default,
  'zh-Hans': _zhHans.default,
  'zh-Hant': _zhHant.default
};
exports.default = _default;

/***/ }),

/***/ 598:
/*!*************************************************************************************************!*\
  !*** E:/project/yhlc-v1.0/agent-uniapp/uni_modules/uni-popup/components/uni-popup/i18n/en.json ***!
  \*************************************************************************************************/
/*! exports provided: uni-popup.cancel, uni-popup.ok, uni-popup.placeholder, uni-popup.title, uni-popup.shareTitle, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"uni-popup.cancel\":\"cancel\",\"uni-popup.ok\":\"ok\",\"uni-popup.placeholder\":\"pleace enter\",\"uni-popup.title\":\"Hint\",\"uni-popup.shareTitle\":\"Share to\"}");

/***/ }),

/***/ 599:
/*!******************************************************************************************************!*\
  !*** E:/project/yhlc-v1.0/agent-uniapp/uni_modules/uni-popup/components/uni-popup/i18n/zh-Hans.json ***!
  \******************************************************************************************************/
/*! exports provided: uni-popup.cancel, uni-popup.ok, uni-popup.placeholder, uni-popup.title, uni-popup.shareTitle, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"uni-popup.cancel\":\"取消\",\"uni-popup.ok\":\"确定\",\"uni-popup.placeholder\":\"请输入\",\"uni-popup.title\":\"提示\",\"uni-popup.shareTitle\":\"分享到\"}");

/***/ }),

/***/ 6:
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/arrayWithHoles.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}
module.exports = _arrayWithHoles, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ 60:
/*!*****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/asyncToGenerator.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error) {
    reject(error);
    return;
  }
  if (info.done) {
    resolve(value);
  } else {
    Promise.resolve(value).then(_next, _throw);
  }
}
function _asyncToGenerator(fn) {
  return function () {
    var self = this,
      args = arguments;
    return new Promise(function (resolve, reject) {
      var gen = fn.apply(self, args);
      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
      }
      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
      }
      _next(undefined);
    });
  };
}
module.exports = _asyncToGenerator, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ 600:
/*!******************************************************************************************************!*\
  !*** E:/project/yhlc-v1.0/agent-uniapp/uni_modules/uni-popup/components/uni-popup/i18n/zh-Hant.json ***!
  \******************************************************************************************************/
/*! exports provided: uni-popup.cancel, uni-popup.ok, uni-popup.placeholder, uni-popup.title, uni-popup.shareTitle, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"uni-popup.cancel\":\"取消\",\"uni-popup.ok\":\"確定\",\"uni-popup.placeholder\":\"請輸入\",\"uni-popup.title\":\"提示\",\"uni-popup.shareTitle\":\"分享到\"}");

/***/ }),

/***/ 7:
/*!*********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/iterableToArrayLimit.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _iterableToArrayLimit(r, l) {
  var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"];
  if (null != t) {
    var e,
      n,
      i,
      u,
      a = [],
      f = !0,
      o = !1;
    try {
      if (i = (t = t.call(r)).next, 0 === l) {
        if (Object(t) !== t) return;
        f = !1;
      } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0) {
        ;
      }
    } catch (r) {
      o = !0, n = r;
    } finally {
      try {
        if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return;
      } finally {
        if (o) throw n;
      }
    }
    return a;
  }
}
module.exports = _iterableToArrayLimit, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ 78:
/*!********************************************************!*\
  !*** E:/project/yhlc-v1.0/agent-uniapp/api/storage.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(uni) {

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ 4);
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.addSupplierInfo = addSupplierInfo;
exports.applyEditPriceStock = applyEditPriceStock;
exports.applyPriceStockInBusinessTime = applyPriceStockInBusinessTime;
exports.applyStockStatus = applyStockStatus;
exports.cancelStockApply = cancelStockApply;
exports.deleteStock = deleteStock;
exports.getAllocationItemList = getAllocationItemList;
exports.getAllocationList = getAllocationList;
exports.getBankInfoList = getBankInfoList;
exports.getOrderPickList = getOrderPickList;
exports.getPickItemOrderSummary = getPickItemOrderSummary;
exports.getStockList = getStockList;
exports.getStorageList = getStorageList;
exports.getStorageListAll = getStorageListAll;
exports.getSupplierAccount = getSupplierAccount;
exports.getSupplierInfoDetail = getSupplierInfoDetail;
exports.getSupplierInfoList = getSupplierInfoList;
exports.getSupplierInfoListPaged = getSupplierInfoListPaged;
exports.normalizeStockList = normalizeStockList;
exports.normalizeSupplierInfoList = normalizeSupplierInfoList;
exports.pickFirstField = pickFirstField;
exports.putPickItemOrderBatchDeliver = putPickItemOrderBatchDeliver;
exports.reapplyOnShelfAfterAutoOff = reapplyOnShelfAfterAutoOff;
exports.submitOrderWithdraw = submitOrderWithdraw;
var _defineProperty2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/defineProperty */ 11));
var _typeof2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/typeof */ 13));
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0, _defineProperty2.default)(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
/**
 * 仓库/供应商相关接口
 * baseUrl 已含 /prod-api，路径不要再加 prod-api 前缀
 */

/** 与 store 中 __key_member 一致，登录信息本地缓存 */
var USER_INFO_STORAGE_KEY = 'usemall_userInfo';
function pickUserNameFromUserInfo(obj) {
  if (!obj || (0, _typeof2.default)(obj) !== 'object') return '';
  var top = obj.userName != null ? String(obj.userName).trim() : '';
  if (top) return top;
  var nested = obj.user && (0, _typeof2.default)(obj.user) === 'object' ? obj.user.userName : null;
  if (nested != null && String(nested).trim() !== '') return String(nested).trim();
  return '';
}

/**
 * supplierInfo/list 的 account：优先内存 userInfo，否则读本地缓存的登录信息（与 loadSession 同源）
 */
function getSupplierAccount(vm) {
  var fromStore = vm && vm.$store && vm.$store.state && vm.$store.state.userInfo;
  var a = pickUserNameFromUserInfo(fromStore);
  if (a) return a;
  var cached = uni.getStorageSync(USER_INFO_STORAGE_KEY);
  return pickUserNameFromUserInfo(cached);
}
function getSupplierInfoList(vm, account) {
  var token = vm.$store && vm.$store.state ? vm.$store.state.token : '';
  var acc = encodeURIComponent(String(account || '').trim());
  var params = {
    account: acc
  };
  return vm.request('get', 'storage/supplierInfo/list', token, params);
}

/**
 * 供应商信息分页列表
 * GET /storage/supplierInfo/list?pageNum=&pageSize=
 * @param {object} [params] 可含 pageNum、pageSize 及其它查询条件
 */
function getSupplierInfoListPaged(vm) {
  var params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var token = vm.$store && vm.$store.state ? vm.$store.state.token : '';
  var q = _objectSpread({
    pageNum: params.pageNum != null ? params.pageNum : 1,
    pageSize: params.pageSize != null ? params.pageSize : 10
  }, params);
  return vm.request('get', 'storage/supplierInfo/list', token, q);
}

/**
 * 供应商详情（含账户余额等）
 * GET /storage/supplierInfo/{id}
 */
function getSupplierInfoDetail(vm, id) {
  var token = vm.$store && vm.$store.state ? vm.$store.state.token : '';
  var sid = encodeURIComponent(String(id || '').trim());
  return vm.request('get', "storage/supplierInfo/".concat(sid), token, null);
}

/**
 * 供应商提现申请
 * POST /order/withdraw
 * @param {object} body supplierId, supplierAccount, supplierName, bank, bankInfo, applyAmount, remark
 */
function submitOrderWithdraw(vm) {
  var body = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var token = vm.$store && vm.$store.state ? vm.$store.state.token : '';
  return vm.request('post', 'order/withdraw', token, body || {});
}
function normalizeSupplierInfoList(res) {
  if (!res) return [];
  var d = res.data !== undefined ? res.data : res;
  if (Array.isArray(d)) return d;
  if (d && Array.isArray(d.rows)) return d.rows;
  if (d && Array.isArray(d.list)) return d.list;
  return [];
}
function pickFirstField(obj, keys) {
  if (!obj || (0, _typeof2.default)(obj) !== 'object') return '';
  for (var i = 0; i < keys.length; i++) {
    var k = keys[i];
    if (obj[k] != null && obj[k] !== '') return obj[k];
  }
  return '';
}

/**
 * 供货商品库存列表
 * GET /storage/stock/list
 */
function getStockList(vm) {
  var params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var token = vm.$store && vm.$store.state ? vm.$store.state.token : '';
  return vm.request('get', 'storage/stock/list', token, params || {});
}

/**
 * 申请上架
 * POST /storage/stock/applyStockStatus
 */
function applyStockStatus(vm) {
  var body = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var token = vm.$store && vm.$store.state ? vm.$store.state.token : '';
  return vm.request('post', 'storage/stock/applyStockStatus', token, body || {});
}

/**
 * 待下架审核：撤销下架申请
 * POST /storage/stock/cancelStockApply
 * body: { id }
 */
function cancelStockApply(vm) {
  var body = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var token = vm.$store && vm.$store.state ? vm.$store.state.token : '';
  return vm.request('post', 'storage/stock/cancelStockApply', token, body || {});
}

/**
 * 申请调价/改库存
 * POST /storage/stock/applyEditPriceStock
 */
function applyEditPriceStock(vm) {
  var body = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var token = vm.$store && vm.$store.state ? vm.$store.state.token : '';
  return vm.request('post', 'storage/stock/applyEditPriceStock', token, body || {});
}

/**
 * 运营时间内申请改价改库存
 * POST /storage/stock/applyPriceStockInBusinessTime
 */
function applyPriceStockInBusinessTime(vm) {
  var body = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var token = vm.$store && vm.$store.state ? vm.$store.state.token : '';
  return vm.request('post', 'storage/stock/applyPriceStockInBusinessTime', token, body || {});
}

/**
 * 自动下架后重新申请上架
 * POST /storage/stock/reapplyOnShelfAfterAutoOff
 */
function reapplyOnShelfAfterAutoOff(vm) {
  var body = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var token = vm.$store && vm.$store.state ? vm.$store.state.token : '';
  return vm.request('post', 'storage/stock/reapplyOnShelfAfterAutoOff', token, body || {});
}

/**
 * 删除供货商品库存
 * DELETE /storage/stock/{ids}
 * @param {string|number} ids - 库存ID（多个用逗号分隔）
 */
function deleteStock(vm, ids) {
  var token = vm.$store && vm.$store.state ? vm.$store.state.token : '';
  var idStr = encodeURIComponent(String(ids || '').trim());
  return vm.request('delete', "storage/stock/".concat(idStr), token, null);
}

/**
 * 统一解析 stock/list 返回数组
 */
function normalizeStockList(res) {
  if (!res) return [];
  var d = res.data !== undefined ? res.data : res;
  if (Array.isArray(d)) return d;
  if (d && Array.isArray(d.rows)) return d.rows;
  if (Array.isArray(res.rows)) return res.rows;
  if (d && Array.isArray(d.list)) return d.list;
  if (Array.isArray(res.list)) return res.list;
  return [];
}

/**
 * 新增供应商
 * POST /supplier/app/add
 */
function addSupplierInfo(vm) {
  var data = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var token = vm.$store && vm.$store.state ? vm.$store.state.token : '';
  return vm.request('post', 'supplier/app/add', token, data || {});
}

/**
 * 开户行列表
 * GET /system/app/bankInfo/list
 */
function getBankInfoList(vm) {
  var params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var token = vm.$store && vm.$store.state ? vm.$store.state.token : '';
  return vm.request('get', 'system/app/bankInfo/list', token, params || {});
}

/**
 * 总仓列表（首层仓位）
 * GET /storage/position/getAllFirstStorage
 */
function getStorageList(vm) {
  var params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
  var token = vm.$store && vm.$store.state ? vm.$store.state.token : '';
  return vm.request('get', 'storage/position/getAllFirstStorage', token, params);
}

/**
 * 仓库全量列表（用于与 batch.storageId 等 id 匹配名称）
 * GET /storage/storage/listAll
 */
function getStorageListAll(vm) {
  var params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
  var token = vm.$store && vm.$store.state ? vm.$store.state.token : '';
  return vm.request('get', 'storage/storage/listAll', token, params || null);
}

/**
 * 调拨单分页列表
 * GET /system/allocation/list?pageNum=&pageSize=&status=
 * status：0 待发货，1 已装车，3 已入库（不传则全部）
 * startTime、endTime：日期 YYYY-MM-DD（可选）
 * allocationNo：调拨单号（可选）
 *
 * @param {object} [params] pageNum、pageSize、status、startTime、endTime、allocationNo 等
 */
function getAllocationList(vm) {
  var params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var token = vm.$store && vm.$store.state ? vm.$store.state.token : '';
  var q = _objectSpread({
    pageNum: params.pageNum != null ? params.pageNum : 1,
    pageSize: params.pageSize != null ? params.pageSize : 10
  }, params);
  return vm.request('get', 'system/allocation/list', token, q);
}

/**
 * 调拨单明细分页列表（调拨详情页）
 * GET /system/allocationItem/list?pageNum=&pageSize=&allocationId=
 * allocationId：调拨单ID（必传）
 *
 * @param {object} [params] pageNum、pageSize、allocationId 等
 */
function getAllocationItemList(vm) {
  var params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var token = vm.$store && vm.$store.state ? vm.$store.state.token : '';
  var q = _objectSpread({
    pageNum: params.pageNum != null ? params.pageNum : 1,
    pageSize: params.pageSize != null ? params.pageSize : 10
  }, params);
  return vm.request('get', 'system/allocationItem/list', token, q);
}

/**
 * 拣货单分页列表
 * GET /system/orderPick/list?pageNum=&pageSize=&status=
 * status：0 待拣货，1 已拣货（不传则全部）
 * pickNo：拣货单号（可选）
 * startTime、endTime：日期 YYYY-MM-DD（可选）
 *
 * @param {object} [params] pageNum、pageSize、status、pickNo、startTime、endTime 等
 */
function getOrderPickList(vm) {
  var params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var token = vm.$store && vm.$store.state ? vm.$store.state.token : '';
  var q = _objectSpread({
    pageNum: params.pageNum != null ? params.pageNum : 1,
    pageSize: params.pageSize != null ? params.pageSize : 10
  }, params);
  return vm.request('get', 'system/orderPick/list', token, q);
}

/**
 * 拣货明细汇总（路径中间段为 userOrderId）
 * GET /system/pickItem/order/{userOrderId}/summary
 */
function getPickItemOrderSummary(vm, userOrderId) {
  var token = vm.$store && vm.$store.state ? vm.$store.state.token : '';
  var id = encodeURIComponent(String(userOrderId == null ? '' : userOrderId).trim());
  return vm.request('get', "system/pickItem/order/".concat(id, "/summary"), token, {});
}

/**
 * 拣货提交（整单一键 / 批量勾选）
 * PUT /system/pickItem/order/{userOrderId}/batchDeliver
 * - 一键拣货：body 传 {}
 * - 批量拣货：body 为 JSON 数组，须包含当前汇总页全部明细（各行的 id、barCode、actualQuantity、status），与勾选无关
 *
 * @param {object|Array} [body] 如 {} 或明细数组
 */
function putPickItemOrderBatchDeliver(vm, userOrderId) {
  var body = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
  var token = vm.$store && vm.$store.state ? vm.$store.state.token : '';
  var id = encodeURIComponent(String(userOrderId == null ? '' : userOrderId).trim());
  var payload = Array.isArray(body) ? body : body || {};
  return vm.request('put', "system/pickItem/order/".concat(id, "/batchDeliver"), token, payload);
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 2)["default"]))

/***/ }),

/***/ 79:
/*!********************************************************!*\
  !*** E:/project/yhlc-v1.0/agent-uniapp/api/product.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(uni) {

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ 4);
var _typeof3 = __webpack_require__(/*! @babel/runtime/helpers/typeof */ 13);
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.addGoodsBySupplier = addGoodsBySupplier;
exports.batchAuthorizeGoods = batchAuthorizeGoods;
exports.batchCheckProductAudit = batchCheckProductAudit;
exports.checkProductAudit = checkProductAudit;
exports.findStoreCategoryById = findStoreCategoryById;
exports.getGoodsApplyInfo = getGoodsApplyInfo;
exports.getProductAuditList = getProductAuditList;
exports.getProductCategoryList = getProductCategoryList;
exports.getStoreProductDetail = getStoreProductDetail;
exports.getStoreProductList = getStoreProductList;
exports.goodsShelfBySupplier = goodsShelfBySupplier;
exports.normalizeProductAuditListResponse = normalizeProductAuditListResponse;
exports.normalizeStoreCategoryListTree = normalizeStoreCategoryListTree;
exports.uploadSupplierImage = uploadSupplierImage;
var _defineProperty2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/defineProperty */ 11));
var _typeof2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/typeof */ 13));
var config = _interopRequireWildcard(__webpack_require__(/*! @/config/index.js */ 41));
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof3(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0, _defineProperty2.default)(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
var baseUrl = config.def().baseUrl;

/**
 * 供货页 / 分类：获取商品分类树
 * GET /product/storeCategory/listTree
 *
 * 成功时 data 多为分页结构：{ content: 分类树数组, totalElements }；
 * 兼容旧式 data 直接为数组。
 *
 * @param {Vue} vm 页面实例，用于调用 this.request
 * @param {object} [params] 查询参数（按后端文档补充）
 * @returns {Promise<{ code, msg, data }>}
 */
function getProductCategoryList(vm) {
  var params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var token = vm.$store && vm.$store.state ? vm.$store.state.token : '';
  return vm.request('get', 'product/storeCategory/listTree', token, params);
}

/**
 * 从 listTree 接口响应中取出分类树根数组（content 或整段 data 为数组）
 * @param {{ data?: unknown }} res
 * @returns {object[]}
 */
function normalizeStoreCategoryListTree(res) {
  var d = res != null && res.data !== undefined ? res.data : null;
  if (Array.isArray(d)) return d;
  if (d && (0, _typeof2.default)(d) === 'object' && Array.isArray(d.content)) return d.content;
  return [];
}

/**
 * 在分类树中按 id 查找节点（id 可能为 number / string）
 * @param {object[]|undefined} nodes
 * @param {string|number} id
 * @returns {object|null}
 */
function findStoreCategoryById(nodes, id) {
  if (id == null || id === '') return null;
  var target = String(id);
  var arr = Array.isArray(nodes) ? nodes : [];
  for (var i = 0; i < arr.length; i++) {
    var n = arr[i];
    if (n && String(n.id) === target) return n;
    var hit = findStoreCategoryById(n.children || [], id);
    if (hit) return hit;
  }
  return null;
}

/**
 * 供应商新增商品（请求体不变，接口切换为 storeProduct）
 * POST /product/storeProduct
 */
function addGoodsBySupplier(vm, body) {
  var token = vm.$store && vm.$store.state ? vm.$store.state.token : '';
  return vm.request('post', 'product/storeProduct', token, body);
}

/**
 * 门店商品库存列表（分页）
 * GET /product/storeProduct/list
 *
 * @param {Vue} vm
 * @param {object} [params] pageNum、pageSize、keyword 等（以后端为准）
 */
function getStoreProductList(vm) {
  var params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var token = vm.$store && vm.$store.state ? vm.$store.state.token : '';
  return vm.request('get', 'product/storeProduct/list', token, params || {});
}

/**
 * 商品详情
 * GET /product/storeProduct/{id}
 */
function getStoreProductDetail(vm, id) {
  var token = vm.$store && vm.$store.state ? vm.$store.state.token : '';
  var sid = encodeURIComponent(String(id || '').trim());
  return vm.request('get', "product/storeProduct/".concat(sid), token, null);
}

/**
 * 提交后申请审核（上架审核）
 * POST /product/app/goodsShelfBySupplier
 *
 * @param {Vue} vm
 * @param {{ id: string|number, applyStatus: number }} body
 */
function goodsShelfBySupplier(vm, body) {
  var token = vm.$store && vm.$store.state ? vm.$store.state.token : '';
  return vm.request('post', 'product/app/goodsShelfBySupplier', token, body || {});
}

/**
 * 商品上下架审核单列表（与后台 product/audit 一致）
 * GET /product/audit/list
 *
 * @param {Vue} vm
 * @param {object} [params] pageNum、pageSize 及后台支持的筛选条件
 */
function getProductAuditList(vm) {
  var params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var token = vm.$store && vm.$store.state ? vm.$store.state.token : '';
  var q = _objectSpread({
    pageNum: params.pageNum != null ? params.pageNum : 1,
    pageSize: params.pageSize != null ? params.pageSize : 10
  }, params);
  return vm.request('get', 'product/audit/list', token, q);
}

/**
 * 解析 audit/list 分页（兼容 rows / data.rows / list）
 * @param {{ data?: unknown, rows?: unknown[], total?: number }} res
 * @returns {{ rows: object[], total: number }}
 */
function normalizeProductAuditListResponse(res) {
  var rows = [];
  var total = 0;
  if (!res) return {
    rows: rows,
    total: total
  };
  if (Array.isArray(res.rows)) rows = res.rows;else {
    var d = res.data !== undefined ? res.data : res;
    if (Array.isArray(d)) rows = d;else if (d && (0, _typeof2.default)(d) === 'object') {
      if (Array.isArray(d.rows)) rows = d.rows;else if (Array.isArray(d.list)) rows = d.list;
      total = Number(d.total) || total;
    }
  }
  if (total <= 0) {
    total = Number(res.total) || Number(res.data && res.data.total) || 0;
  }
  return {
    rows: rows,
    total: total
  };
}

/**
 * 单条审核（与后台 product/audit checkAudit 一致）
 * PUT /product/audit/check
 *
 * @param {Vue} vm
 * @param {{ id: string|number, auditStatus: number|string, rejectReason?: string }} body
 */
function checkProductAudit(vm) {
  var body = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var token = vm.$store && vm.$store.state ? vm.$store.state.token : '';
  var payload = _objectSpread({}, body || {});
  if (payload.auditStatus != null && payload.auditStatus !== '') {
    payload.auditStatus = parseInt(String(payload.auditStatus), 10);
  }
  return vm.request('put', 'product/audit/check', token, payload);
}

/**
 * 批量审核商品上下架审核单
 * PUT /product/audit/batchCheck
 *
 * @param {Vue} vm
 * @param {{ ids: Array<string|number>, auditStatus: number|string, rejectReason?: string }} body
 */
function batchCheckProductAudit(vm) {
  var body = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var token = vm.$store && vm.$store.state ? vm.$store.state.token : '';
  var payload = _objectSpread(_objectSpread({}, body || {}), {}, {
    ids: Array.isArray(body.ids) ? body.ids : []
  });
  if (payload.auditStatus != null && payload.auditStatus !== '') {
    payload.auditStatus = parseInt(String(payload.auditStatus), 10);
  }
  return vm.request('put', 'product/audit/batchCheck', token, payload);
}

/**
 * 批量授权商品
 * POST /product/storeProduct/batchAuthorizeGoods
 *
 * @param {Vue} vm
 * @param {{ ids: string[], storageId: string }} body
 */
function batchAuthorizeGoods(vm, body) {
  var token = vm.$store && vm.$store.state ? vm.$store.state.token : '';
  return vm.request('post', 'product/storeProduct/batchAuthorizeGoods', token, body || {});
}

/**
 * 供货商品列表：获取供应商已申请的商品信息
 * GET /product/app/goodsApplyInfo/{supplierId}
 *
 * @param {Vue} vm
 * @param {string|number} supplierId
 * @param {object} [params] 查询参数，如 { keyword: '名称', applyTime: '2026-04-07' }（applyTime 按后端要求）
 */
function getGoodsApplyInfo(vm, supplierId) {
  var params = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
  var token = vm.$store && vm.$store.state ? vm.$store.state.token : '';
  var id = encodeURIComponent(String(supplierId || '').trim());
  return vm.request('get', "product/app/goodsApplyInfo/".concat(id), token, params || {});
}

/**
 * 解析上传接口返回的 ossId、url（兼容不同后端字段名）
 */
function pickOssPayload(raw) {
  var d = raw && raw.data !== undefined ? raw.data : raw;
  if (!d || (0, _typeof2.default)(d) !== 'object') return null;
  var ossId = d.ossId != null ? d.ossId : d.id != null ? d.id : d.fileName;
  var url = d.url || d.fileUrl || d.path || '';
  if (!url && !ossId) return null;
  return {
    ossId: ossId != null ? String(ossId) : '',
    url: String(url || '')
  };
}

/**
 * 上传图片到 OSS（见《接口说明文档.md》第三节）
 * multipart 字段名默认 file，路径默认 system/oss/app/upload
 *
 * @param {Vue} vm
 * @param {string} filePath 本地临时路径
 * @param {{ endpoint?: string, formName?: string }} [opt]
 * @returns {Promise<{ ossId: string, url: string }>}
 */
function uploadSupplierImage(vm, filePath) {
  var opt = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
  var token = vm.$store && vm.$store.state ? vm.$store.state.token : '';
  var endpoint = opt.endpoint || 'system/oss/upload';
  var formName = opt.formName || 'file';
  var url = "".concat(baseUrl.replace(/\/$/, ''), "/").concat(endpoint.replace(/^\//, ''));
  return new Promise(function (resolve, reject) {
    uni.uploadFile({
      url: url,
      filePath: filePath,
      name: formName,
      header: token ? {
        Authorization: 'Bearer ' + token
      } : {},
      success: function success(res) {
        var json;
        try {
          json = typeof res.data === 'string' ? JSON.parse(res.data) : res.data;
        } catch (e) {
          uni.showToast({
            title: '上传返回解析失败',
            icon: 'none'
          });
          reject(new Error('parse'));
          return;
        }
        if (json.code === 200) {
          var picked = pickOssPayload(json);
          if (picked && (picked.url || picked.ossId)) {
            resolve(picked);
            return;
          }
        }
        var msg = json && json.msg || '上传失败';
        uni.showToast({
          title: msg,
          icon: 'none'
        });
        reject(json);
      },
      fail: function fail(err) {
        uni.showToast({
          title: '上传失败，请检查网络',
          icon: 'none'
        });
        reject(err);
      }
    });
  });
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 2)["default"]))

/***/ }),

/***/ 8:
/*!***************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/unsupportedIterableToArray.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var arrayLikeToArray = __webpack_require__(/*! ./arrayLikeToArray.js */ 9);
function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return arrayLikeToArray(o, minLen);
}
module.exports = _unsupportedIterableToArray, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ 9:
/*!*****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/arrayLikeToArray.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;
  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }
  return arr2;
}
module.exports = _arrayLikeToArray, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ 98:
/*!*******************************************************************************!*\
  !*** E:/project/yhlc-v1.0/agent-uniapp/sub-pages/rider/static/task/xiuxi.png ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "sub-pages/rider/static/task/xiuxi.png";

/***/ }),

/***/ 99:
/*!*********************************************************************************!*\
  !*** E:/project/yhlc-v1.0/agent-uniapp/sub-pages/rider/static/task/kaigong.png ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "sub-pages/rider/static/task/kaigong.png";

/***/ })

}]);
//# sourceMappingURL=../../.sourcemap/mp-weixin/common/vendor.js.map
},{isPage:false,isComponent:false,currentFile:'common/vendor.js'});;__wxRoute = undefined;__wxRouteBegin = undefined;__wxAppCurrentFile__=undefined;define("app.js",function(require,module,exports,window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){

require('./common/runtime.js')
require('./common/vendor.js')
require('./common/main.js')
},{isPage:false,isComponent:false,currentFile:'app.js'});require("app.js");