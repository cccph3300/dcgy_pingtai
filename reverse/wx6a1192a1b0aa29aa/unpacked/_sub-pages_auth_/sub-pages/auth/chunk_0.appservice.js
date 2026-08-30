$gwx0_XC_0=function(_,_v,_n,_p,_s,_wp,_wl,$gwn,$gwl,$gwh,wh,$gstack,$gwrt,gra,grb,TestTest,wfor,_ca,_da,_r,_rz,_o,_oz,_1,_1z,_2,_2z,_m,_mz,nv_getDate,nv_getRegExp,nv_console,nv_parseInt,nv_parseFloat,nv_isNaN,nv_isFinite,nv_decodeURI,nv_decodeURIComponent,nv_encodeURI,nv_encodeURIComponent,$gdc,nv_JSON,_af,_gv,_ai,_grp,_gd,_gapi,$ixc,_ic,_w,_ev,_tsd){return function(path,global){
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
var z=__WXML_GLOBAL__.ops_set.$gwx0_XC_0 || [];
function gz$gwx0_XC_0_1(){
if( __WXML_GLOBAL__.ops_cached.$gwx0_XC_0_1)return __WXML_GLOBAL__.ops_cached.$gwx0_XC_0_1
__WXML_GLOBAL__.ops_cached.$gwx0_XC_0_1=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'__l'])
Z([3,'data-v-7b0f3a30'])
Z([3,'e6d709c4-1'])
})(__WXML_GLOBAL__.ops_cached.$gwx0_XC_0_1);return __WXML_GLOBAL__.ops_cached.$gwx0_XC_0_1
}
__WXML_GLOBAL__.ops_set.$gwx0_XC_0=z;
__WXML_GLOBAL__.ops_init.$gwx0_XC_0=true;
var x=['./sub-pages/auth/login.wxml'];d_[x[0]]={}
var m0=function(e,s,r,gg){
var z=gz$gwx0_XC_0_1()
var oB=_mz(z,'privacy-auth-popup',['bind:__l',0,'class',1,'vueId',1],[],e,s,gg)
_(r,oB)
return r
}
e_[x[0]]={f:m0,j:[],i:[],ti:[],ic:[]}
if(path&&e_[path]){
return function(env,dd,global){$gwxc=0;var root={"tag":"wx-page"};root.children=[]
;g="$gwx0_XC_0";var main=e_[path].f
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
}(__g.a,__g.b,__g.c,__g.d,__g.e,__g.f,__g.g,__g.h,__g.i,__g.j,__g.k,__g.l,__g.m,__g.n,__g.o,__g.p,__g.q,__g.r,__g.s,__g.t,__g.u,__g.v,__g.w,__g.x,__g.y,__g.z,__g.A,__g.B,__g.C,__g.D,__g.E,__g.F,__g.G,__g.H,__g.I,__g.J,__g.K,__g.L,__g.M,__g.N,__g.O,__g.P,__g.Q,__g.R,__g.S,__g.T,__g.U,__g.V,__g.W,__g.X,__g.Y,__g.Z,__g.aa);if(__vd_version_info__.delayedGwx||false)$gwx0_XC_0();	if (__vd_version_info__.delayedGwx) __wxAppCode__['sub-pages/auth/login.wxml'] = [$gwx0_XC_0, './sub-pages/auth/login.wxml'];else __wxAppCode__['sub-pages/auth/login.wxml'] = $gwx0_XC_0( './sub-pages/auth/login.wxml' );
	;__wxRoute = "sub-pages/auth/login";__wxRouteBegin = true;__wxAppCurrentFile__="sub-pages/auth/login.js";define("sub-pages/auth/login.js",function(require,module,exports,window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){
require('./common/vendor.js');(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["sub-pages/auth/login"],{

/***/ 52:
/*!*************************************************************************************!*\
  !*** E:/project/yhlc-v1.0/agent-uniapp/main.js?{"page":"sub-pages%2Fauth%2Flogin"} ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(wx, createPage) {

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ 4);
__webpack_require__(/*! uni-pages */ 30);
var _vue = _interopRequireDefault(__webpack_require__(/*! vue */ 25));
var _login = _interopRequireDefault(__webpack_require__(/*! ./sub-pages/auth/login.vue */ 53));
// @ts-ignore
wx.__webpack_require_UNI_MP_PLUGIN__ = __webpack_require__;
createPage(_login.default);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/wx.js */ 1)["default"], __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 2)["createPage"]))

/***/ }),

/***/ 53:
/*!******************************************************************!*\
  !*** E:/project/yhlc-v1.0/agent-uniapp/sub-pages/auth/login.vue ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _login_vue_vue_type_template_id_7b0f3a30_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./login.vue?vue&type=template&id=7b0f3a30&scoped=true& */ 54);
/* harmony import */ var _login_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./login.vue?vue&type=script&lang=js& */ 56);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _login_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _login_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _login_vue_vue_type_style_index_0_id_7b0f3a30_lang_less_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./login.vue?vue&type=style&index=0&id=7b0f3a30&lang=less&scoped=true& */ 62);
/* harmony import */ var _D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 39);

var renderjs





/* normalize component */

var component = Object(_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _login_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _login_vue_vue_type_template_id_7b0f3a30_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _login_vue_vue_type_template_id_7b0f3a30_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "7b0f3a30",
  null,
  false,
  _login_vue_vue_type_template_id_7b0f3a30_scoped_true___WEBPACK_IMPORTED_MODULE_0__["components"],
  renderjs
)

component.options.__file = "sub-pages/auth/login.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 54:
/*!*************************************************************************************************************!*\
  !*** E:/project/yhlc-v1.0/agent-uniapp/sub-pages/auth/login.vue?vue&type=template&id=7b0f3a30&scoped=true& ***!
  \*************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_login_vue_vue_type_template_id_7b0f3a30_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--17-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./login.vue?vue&type=template&id=7b0f3a30&scoped=true& */ 55);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_login_vue_vue_type_template_id_7b0f3a30_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_login_vue_vue_type_template_id_7b0f3a30_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_login_vue_vue_type_template_id_7b0f3a30_scoped_true___WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_login_vue_vue_type_template_id_7b0f3a30_scoped_true___WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),

/***/ 55:
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--17-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!E:/project/yhlc-v1.0/agent-uniapp/sub-pages/auth/login.vue?vue&type=template&id=7b0f3a30&scoped=true& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return recyclableRender; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "components", function() { return components; });
var components
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  if (!_vm._isMounted) {
    _vm.e0 = function ($event) {
      _vm.showPopup = false
    }
  }
}
var recyclableRender = false
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ 56:
/*!*******************************************************************************************!*\
  !*** E:/project/yhlc-v1.0/agent-uniapp/sub-pages/auth/login.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_login_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--13-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./login.vue?vue&type=script&lang=js& */ 57);
/* harmony import */ var _D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_login_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_login_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_login_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_login_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_login_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 57:
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--13-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!E:/project/yhlc-v1.0/agent-uniapp/sub-pages/auth/login.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
var _asyncToGenerator2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ 60));
var _defineProperty2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/defineProperty */ 11));
var _vuex = __webpack_require__(/*! vuex */ 34);
var _appConfig = _interopRequireDefault(__webpack_require__(/*! @/config/appConfig.js */ 61));
var _routes = __webpack_require__(/*! @/utils/routes.js */ 42);
var _privacy = __webpack_require__(/*! @/utils/privacy.js */ 35);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0, _defineProperty2.default)(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
var _default = {
  data: function data() {
    return {
      phone: '',
      password: '',
      puserInfo: {},
      appConfig: _appConfig.default,
      showLoding: true,
      // 初始化加载时显示遮挡页
      wxUserInfo: null,
      // 保存微信用户数据(临时)
      wxLoginInfo: {
        code: null,
        openid: null,
        session_key: null
      },
      // 微信登录返回信息（临时）
      showPopup: false,
      // 获取电话弹窗
      agreePrivacy: false
    };
  },
  onLoad: function onLoad() {
    this.initLogin();
  },
  onBackPress: function onBackPress(e) {
    debugger;
    //  console.log(e)
    // 这里可以自定义返回逻辑，比如下面跳转其他页面
    uni.navigateTo({
      url: _routes.PAGE_LAUNCH
    });
    // return true 表示禁止默认返回
    return true;
  },
  computed: _objectSpread({}, (0, _vuex.mapState)(['token'])),
  methods: _objectSpread(_objectSpread({}, (0, _vuex.mapMutations)(['saveUserInfo', 'sessionToken'])), {}, {
    openPrivacyPolicy: function openPrivacyPolicy() {
      uni.navigateTo({
        url: _routes.AUTH_PRIVACY
      });
    },
    onPrivacyCheckboxChange: function onPrivacyCheckboxChange(e) {
      var v = e && e.detail && e.detail.value || [];
      this.agreePrivacy = Array.isArray(v) && v.indexOf('1') !== -1;
    },
    ensurePrivacyAgreed: function ensurePrivacyAgreed() {
      if (!this.agreePrivacy) {
        uni.showToast({
          title: '请先阅读并同意《隐私政策》',
          icon: 'none'
        });
        return false;
      }
      return true;
    },
    /* 主动发起微信隐私授权，登录入口共用 */ensurePrivacyAuthorized: function ensurePrivacyAuthorized() {
      return (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee() {
        var ok;
        return _regenerator.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return (0, _privacy.requirePrivacyAuthorize)();
              case 2:
                ok = _context.sent;
                if (!ok) {
                  uni.showToast({
                    title: '需同意隐私保护指引才能继续',
                    icon: 'none'
                  });
                }
                return _context.abrupt("return", ok);
              case 5:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }))();
    },
    userLogin: function userLogin() {
      var _this = this;
      return (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee2() {
        var params, that;
        return _regenerator.default.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                if (_this.ensurePrivacyAgreed()) {
                  _context2.next = 2;
                  break;
                }
                return _context2.abrupt("return");
              case 2:
                _context2.next = 4;
                return _this.ensurePrivacyAuthorized();
              case 4:
                if (_context2.sent) {
                  _context2.next = 6;
                  break;
                }
                return _context2.abrupt("return");
              case 6:
                if (/^1[3456789]\d{9}$/.test(_this.phone)) {
                  _context2.next = 9;
                  break;
                }
                uni.showToast({
                  title: '请输入正确的手机号',
                  icon: 'none'
                });
                return _context2.abrupt("return", false);
              case 9:
                if (!(_this.password == '')) {
                  _context2.next = 12;
                  break;
                }
                uni.showToast({
                  title: '请输入密码',
                  icon: 'none'
                });
                return _context2.abrupt("return", false);
              case 12:
                params = {
                  phone: _this.phone,
                  password: _this.password,
                  ip: ''
                };
                that = _this;
                that.request("get", "rider/app/loginRider", null, params).then(function (res) {
                  if (res.code === 200) {
                    // 返回带token, 进入订单页
                    var duration = 1500; // 延迟跳转页面
                    that.saveUserInfo(res.data); // 缓存用户基础数据
                    that.sessionToken(res.data.accessToken); // 缓存token
                    uni.showToast({
                      title: '登录成功',
                      duration: duration
                    });
                    that.toTaskPage(duration);
                  }
                });
              case 15:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }))();
    },
    /* 判断是否已登录 */
    /* 判断是否已登录 */
    initLogin: function initLogin() {
      var _this2 = this;
      return (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee3() {
        var that, newUserData;
        return _regenerator.default.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                that = _this2;
                if (!that.token) {
                  _context3.next = 15;
                  break;
                }
                _context3.prev = 2;
                _context3.next = 5;
                return that.getUserInfo();
              case 5:
                newUserData = _context3.sent;
                if (newUserData && newUserData.code !== 500) {
                  // 成功且有有效数据
                  that.saveUserInfo(newUserData); // 缓存用户基础数据
                  that.toTaskPage();
                } else {
                  // 500错误或其他无效数据，视为未登录
                  that.showLoding = false;
                }
                _context3.next = 13;
                break;
              case 9:
                _context3.prev = 9;
                _context3.t0 = _context3["catch"](2);
                // 请求出错，视为未登录
                console.error('获取用户信息失败:', _context3.t0);
                that.showLoding = false;
              case 13:
                _context3.next = 17;
                break;
              case 15:
                uni.login({
                  provider: 'weixin',
                  success: function success(wxres) {
                    _this2.logining = false;
                    that.request("post", 'rider/wxLogin/wechatLogin', null, {
                      loginType: 1,
                      code: wxres.code
                    }, function (failres) {
                      _this2.$api.msg(failres.msg);
                      uni.hideLoading();
                    }).then(function (res) {
                      uni.hideLoading();
                      _this2.puserInfo = res.data;
                      _this2.sessionKey = res.data.sessionKey;
                    });
                  }
                });
                that.showLoding = false;
              case 17:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, null, [[2, 9]]);
      }))();
    },
    onInput: function onInput(e) {
      this.phone = e.target.value;
    },
    /* 前往任务列表页 */toTaskPage: function toTaskPage() {
      var duration = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 100;
      setTimeout(function () {
        uni.reLaunch({
          url: _routes.PAGE_RIDER_TASK
        });
      }, duration);
    },
    goBack: function goBack() {
      uni.navigateTo({
        url: _routes.PAGE_LAUNCH
      });
    },
    /* 获取后台用户信息（进入即判断是否过期） */getUserInfo: function getUserInfo() {
      var that = this;
      return new Promise(function (resolve, reject) {
        that.request("get", "rider/wxLogin/getRiderInfo", that.token, null).then(function (res) {
          console.log('getUserInfo', res);
          if (res.code === 200) {
            resolve(res.data);
          } else {
            reject(res); // 这里改为 reject，以便在 initLogin 中捕获
          }
        }).catch(function (err) {
          reject(err); // 捕获请求错误
        });
      });
    },
    /* 获取微信用户信息（登录使用） */getUserProfile: function getUserProfile() {
      var _this3 = this;
      return (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee5() {
        var that;
        return _regenerator.default.wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                if (_this3.ensurePrivacyAgreed()) {
                  _context5.next = 2;
                  break;
                }
                return _context5.abrupt("return");
              case 2:
                _context5.next = 4;
                return _this3.ensurePrivacyAuthorized();
              case 4:
                if (_context5.sent) {
                  _context5.next = 6;
                  break;
                }
                return _context5.abrupt("return");
              case 6:
                that = _this3;
                if (that.wxLoginInfo.openid) {
                  // 已登录，但未获取手机号
                  that.showPopup = true;
                } else if (uni.getUserProfile) {
                  // 未登录，且版本支持 uni.getUserProfile
                  uni.getUserProfile({
                    lang: 'zh_CN',
                    desc: "获取您的昵称、头像、手机号",
                    success: function () {
                      var _success = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee4(res) {
                        return _regenerator.default.wrap(function _callee4$(_context4) {
                          while (1) {
                            switch (_context4.prev = _context4.next) {
                              case 0:
                                console.log('用户同意了授权', res);
                                that.wxUserInfo = res.userInfo; // 临时保存微信用户基础数据
                                that.wxUserInfo['phone'] = '';
                                that.mpWeixinTologin(); // 微信一键登录
                              case 4:
                              case "end":
                                return _context4.stop();
                            }
                          }
                        }, _callee4);
                      }));
                      function success(_x) {
                        return _success.apply(this, arguments);
                      }
                      return success;
                    }(),
                    fail: function fail(err) {
                      console.log('授权失败:', err);
                      uni.showToast({
                        title: err
                      });
                    }
                  });
                } else {
                  uni.showToast({
                    title: '当前版本过低'
                  });
                }
              case 8:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5);
      }))();
    },
    fakeLogin: function fakeLogin() {
      var _this4 = this;
      return (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee6() {
        var that, duration;
        return _regenerator.default.wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                if (_this4.ensurePrivacyAgreed()) {
                  _context6.next = 2;
                  break;
                }
                return _context6.abrupt("return");
              case 2:
                _context6.next = 4;
                return _this4.ensurePrivacyAuthorized();
              case 4:
                if (_context6.sent) {
                  _context6.next = 6;
                  break;
                }
                return _context6.abrupt("return");
              case 6:
                that = _this4;
                uni.showLoading({});

                // 返回带token, 进入订单页
                duration = 1500; // 延迟跳转页面
                that.saveUserInfo(that.puserInfo); // 缓存用户基础数据
                that.sessionToken(that.puserInfo.accessToken); // 缓存token
                uni.showToast({
                  title: '登录成功',
                  duration: duration
                });
                that.toTaskPage(duration);
              case 13:
              case "end":
                return _context6.stop();
            }
          }
        }, _callee6);
      }))();
    },
    tempH5Login: function tempH5Login() {
      if (!this.ensurePrivacyAgreed()) return;
      var data = {
        "accessToken": "29478626990E478DA9539866489DD87D",
        "avatarUrl": "https://thirdwx.qlogo.cn/mmopen/vi_32/DYAIOgq83epib9DbQJ7VsbLFhWMgiarZSibmRPXWb2tHOtzicnbzpj7Z8lIoBy6icUn0vESMicnMnv8lbGjxYKwSnspw/132",
        "deliveryEnd": "23:00",
        "deliveryStart": "8:30",
        "gmtCreate": 1666885726000,
        "gmtLastLogin": 1667054521000,
        "gmtUpdate": 1666885726000,
        "id": 151,
        "lastLoginIp": "27.10.60.71",
        "loginType": 1,
        "name": "L",
        "openId": "o7LCC5YUDftbpo907smJhvgsMnBs",
        "phone": "18522563339",
        "sessionKey": "yjKdFE0CMSLBKNmrXmFyyQ==",
        "state": 1,
        "storageId": 11,
        "workState": 1
      };
      var token = '29478626990E478DA9539866489DD87D';
      this.saveUserInfo(data); // 缓存用户基础数据
      this.sessionToken(token); // 缓存token
      this.toTaskPage(100);
    },
    /* 微信登录 */mpWeixinTologin: function mpWeixinTologin() {
      var that = this;
      uni.login({
        provider: 'weixin',
        success: function success(res) {
          return (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee7() {
            return _regenerator.default.wrap(function _callee7$(_context7) {
              while (1) {
                switch (_context7.prev = _context7.next) {
                  case 0:
                    console.log('微信一键登录', res);
                    if (res.errMsg == 'login:ok') {
                      that.wxLoginInfo.code = res.code;
                      that.serverLogin(1);
                    }
                  case 2:
                  case "end":
                    return _context7.stop();
                }
              }
            }, _callee7);
          }))();
        },
        fail: function fail(err) {
          console.log('uni.login', err);
        }
      });
    },
    /* 获取手机号 */getPhoneNumber: function getPhoneNumber(e) {
      console.log('获取手机号', e);
      var that = this;
      if (!that.wxLoginInfo.openid || !e.detail.encryptedData) {
        return false; // 未登录
      }

      that.showPopup = false; // 显示获取手机号按钮
      var content = {
        openid: that.wxLoginInfo.openid,
        sessionkey: that.wxLoginInfo.session_key,
        encryptedData: e.detail.encryptedData,
        iv: e.detail.iv
      };
      var params = {
        raw: JSON.stringify(content)
      };
      that.request("get", "rider/wxLogin/decryptS5", null, params).then(function (resolve) {
        //console.log('获取解密手机号', resolve)
        if (resolve.code === 200) {
          //debugger
          var data = JSON.parse(resolve.data);
          that.wxUserInfo.phone = data.phoneNumber;
          that.serverLogin(2);
        } else {
          uni.showToast({
            title: resolve.msg
          });
        }
      });
    },
    /* 后台登录 */serverLogin: function serverLogin(type) {
      // type: 1-第一次后台登录(返回无token) 2-第一次后台登录(返回带token)
      var that = this;
      var content = {
        code: that.wxLoginInfo.code,
        phone: that.wxUserInfo.phone,
        nickName: that.wxUserInfo.nickName,
        avatarUrl: that.wxUserInfo.avatarUrl,
        openid: that.wxLoginInfo.openid,
        session_key: that.wxLoginInfo.session_key
      };
      that.request("post", "rider/wxLogin/wechatLogin", null, content).then(function (res) {
        console.log('获取数据库返回的用户信息', res);
        if (res.code === 200) {
          // 至此实际已登录
          that.wxLoginInfo.openid = res.data.openId;
          that.wxLoginInfo.session_key = res.data.sessionKey;
          // 保存数据库返回的用户信息

          if (type === 1) {
            // 返回无token, 另需获取手机号绑定对应的openid
            that.showPopup = true; // 显示获取手机号按钮
          } else {
            // 返回带token, 进入订单页
            var duration = 1500; // 延迟跳转页面
            that.saveUserInfo(res.data); // 缓存用户基础数据
            that.sessionToken(res.data.accessToken); // 缓存token
            uni.showToast({
              title: '登录成功',
              duration: duration
            });
            that.toTaskPage(duration);
          }
        } else {
          uni.showToast({
            title: res.msg
          });
        }
      });
    }
  })
};
exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 2)["default"]))

/***/ }),

/***/ 62:
/*!****************************************************************************************************************************!*\
  !*** E:/project/yhlc-v1.0/agent-uniapp/sub-pages/auth/login.vue?vue&type=style&index=0&id=7b0f3a30&lang=less&scoped=true& ***!
  \****************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_10_oneOf_1_0_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_10_oneOf_1_1_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_1_2_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_3_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_less_loader_dist_cjs_js_ref_10_oneOf_1_4_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_1_5_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_login_vue_vue_type_style_index_0_id_7b0f3a30_lang_less_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/mini-css-extract-plugin/dist/loader.js??ref--10-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--10-oneOf-1-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--10-oneOf-1-2!./node_modules/postcss-loader/src??ref--10-oneOf-1-3!./node_modules/less-loader/dist/cjs.js??ref--10-oneOf-1-4!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--10-oneOf-1-5!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./login.vue?vue&type=style&index=0&id=7b0f3a30&lang=less&scoped=true& */ 63);
/* harmony import */ var _D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_10_oneOf_1_0_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_10_oneOf_1_1_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_1_2_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_3_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_less_loader_dist_cjs_js_ref_10_oneOf_1_4_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_1_5_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_login_vue_vue_type_style_index_0_id_7b0f3a30_lang_less_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_10_oneOf_1_0_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_10_oneOf_1_1_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_1_2_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_3_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_less_loader_dist_cjs_js_ref_10_oneOf_1_4_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_1_5_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_login_vue_vue_type_style_index_0_id_7b0f3a30_lang_less_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_10_oneOf_1_0_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_10_oneOf_1_1_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_1_2_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_3_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_less_loader_dist_cjs_js_ref_10_oneOf_1_4_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_1_5_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_login_vue_vue_type_style_index_0_id_7b0f3a30_lang_less_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_10_oneOf_1_0_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_10_oneOf_1_1_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_1_2_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_3_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_less_loader_dist_cjs_js_ref_10_oneOf_1_4_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_1_5_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_login_vue_vue_type_style_index_0_id_7b0f3a30_lang_less_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_10_oneOf_1_0_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_10_oneOf_1_1_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_1_2_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_3_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_less_loader_dist_cjs_js_ref_10_oneOf_1_4_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_1_5_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_login_vue_vue_type_style_index_0_id_7b0f3a30_lang_less_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 63:
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js??ref--10-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--10-oneOf-1-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--10-oneOf-1-2!./node_modules/postcss-loader/src??ref--10-oneOf-1-3!./node_modules/less-loader/dist/cjs.js??ref--10-oneOf-1-4!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--10-oneOf-1-5!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!E:/project/yhlc-v1.0/agent-uniapp/sub-pages/auth/login.vue?vue&type=style&index=0&id=7b0f3a30&lang=less&scoped=true& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
    if(false) { var cssReload; }
  

/***/ })

},[[52,"common/runtime","common/vendor","sub-pages/auth/common/vendor"]]]);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/sub-pages/auth/login.js.map
},{isPage:true,isComponent:true,currentFile:'sub-pages/auth/login.js'});require("sub-pages/auth/login.js");