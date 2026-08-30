$gwx2_XC_7=function(_,_v,_n,_p,_s,_wp,_wl,$gwn,$gwl,$gwh,wh,$gstack,$gwrt,gra,grb,TestTest,wfor,_ca,_da,_r,_rz,_o,_oz,_1,_1z,_2,_2z,_m,_mz,nv_getDate,nv_getRegExp,nv_console,nv_parseInt,nv_parseFloat,nv_isNaN,nv_isFinite,nv_decodeURI,nv_decodeURIComponent,nv_encodeURI,nv_encodeURIComponent,$gdc,nv_JSON,_af,_gv,_ai,_grp,_gd,_gapi,$ixc,_ic,_w,_ev,_tsd){return function(path,global){
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
var z=__WXML_GLOBAL__.ops_set.$gwx2_XC_7 || [];
function gz$gwx2_XC_7_1(){
if( __WXML_GLOBAL__.ops_cached.$gwx2_XC_7_1)return __WXML_GLOBAL__.ops_cached.$gwx2_XC_7_1
__WXML_GLOBAL__.ops_cached.$gwx2_XC_7_1=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'dashboard-page data-v-63da1676'])
Z([[7],[3,'envTip']])
Z([1,0])
Z([3,'__l'])
Z([3,'data-v-63da1676'])
Z([3,'17693950-1'])
})(__WXML_GLOBAL__.ops_cached.$gwx2_XC_7_1);return __WXML_GLOBAL__.ops_cached.$gwx2_XC_7_1
}
__WXML_GLOBAL__.ops_set.$gwx2_XC_7=z;
__WXML_GLOBAL__.ops_init.$gwx2_XC_7=true;
var x=['./sub-pages/merchant/dashboard/index.wxml'];d_[x[0]]={}
var m0=function(e,s,r,gg){
var z=gz$gwx2_XC_7_1()
var eDD=_n('view')
_rz(z,eDD,'class',0,e,s,gg)
var bED=_v()
_(eDD,bED)
if(_oz(z,1,e,s,gg)){bED.wxVkey=1
}
var oFD=_mz(z,'tab-bar',['active',2,'bind:__l',1,'class',2,'vueId',3],[],e,s,gg)
_(eDD,oFD)
bED.wxXCkey=1
_(r,eDD)
return r
}
e_[x[0]]={f:m0,j:[],i:[],ti:[],ic:[]}
if(path&&e_[path]){
return function(env,dd,global){$gwxc=0;var root={"tag":"wx-page"};root.children=[]
;g="$gwx2_XC_7";var main=e_[path].f
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
}(__g.a,__g.b,__g.c,__g.d,__g.e,__g.f,__g.g,__g.h,__g.i,__g.j,__g.k,__g.l,__g.m,__g.n,__g.o,__g.p,__g.q,__g.r,__g.s,__g.t,__g.u,__g.v,__g.w,__g.x,__g.y,__g.z,__g.A,__g.B,__g.C,__g.D,__g.E,__g.F,__g.G,__g.H,__g.I,__g.J,__g.K,__g.L,__g.M,__g.N,__g.O,__g.P,__g.Q,__g.R,__g.S,__g.T,__g.U,__g.V,__g.W,__g.X,__g.Y,__g.Z,__g.aa);if(__vd_version_info__.delayedGwx||false)$gwx2_XC_7();	if (__vd_version_info__.delayedGwx) __wxAppCode__['sub-pages/merchant/dashboard/index.wxml'] = [$gwx2_XC_7, './sub-pages/merchant/dashboard/index.wxml'];else __wxAppCode__['sub-pages/merchant/dashboard/index.wxml'] = $gwx2_XC_7( './sub-pages/merchant/dashboard/index.wxml' );
	;__wxRoute = "sub-pages/merchant/dashboard/index";__wxRouteBegin = true;__wxAppCurrentFile__="sub-pages/merchant/dashboard/index.js";define("sub-pages/merchant/dashboard/index.js",function(require,module,exports,window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){
require('../common/vendor.js');(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["sub-pages/merchant/dashboard/index"],{

/***/ 135:
/*!*****************************************************************************************************!*\
  !*** E:/project/yhlc-v1.0/agent-uniapp/main.js?{"page":"sub-pages%2Fmerchant%2Fdashboard%2Findex"} ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(wx, createPage) {

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ 4);
__webpack_require__(/*! uni-pages */ 30);
var _vue = _interopRequireDefault(__webpack_require__(/*! vue */ 25));
var _index = _interopRequireDefault(__webpack_require__(/*! ./sub-pages/merchant/dashboard/index.vue */ 136));
// @ts-ignore
wx.__webpack_require_UNI_MP_PLUGIN__ = __webpack_require__;
createPage(_index.default);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/wx.js */ 1)["default"], __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 2)["createPage"]))

/***/ }),

/***/ 136:
/*!********************************************************************************!*\
  !*** E:/project/yhlc-v1.0/agent-uniapp/sub-pages/merchant/dashboard/index.vue ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_vue_vue_type_template_id_63da1676_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.vue?vue&type=template&id=63da1676&scoped=true& */ 137);
/* harmony import */ var _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.vue?vue&type=script&lang=js& */ 139);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _index_vue_vue_type_style_index_0_id_63da1676_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index.vue?vue&type=style&index=0&id=63da1676&lang=scss&scoped=true& */ 143);
/* harmony import */ var _D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 39);

var renderjs





/* normalize component */

var component = Object(_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _index_vue_vue_type_template_id_63da1676_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _index_vue_vue_type_template_id_63da1676_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "63da1676",
  null,
  false,
  _index_vue_vue_type_template_id_63da1676_scoped_true___WEBPACK_IMPORTED_MODULE_0__["components"],
  renderjs
)

component.options.__file = "sub-pages/merchant/dashboard/index.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 137:
/*!***************************************************************************************************************************!*\
  !*** E:/project/yhlc-v1.0/agent-uniapp/sub-pages/merchant/dashboard/index.vue?vue&type=template&id=63da1676&scoped=true& ***!
  \***************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_index_vue_vue_type_template_id_63da1676_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--17-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./index.vue?vue&type=template&id=63da1676&scoped=true& */ 138);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_index_vue_vue_type_template_id_63da1676_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_index_vue_vue_type_template_id_63da1676_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_index_vue_vue_type_template_id_63da1676_scoped_true___WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_index_vue_vue_type_template_id_63da1676_scoped_true___WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),

/***/ 138:
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--17-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!E:/project/yhlc-v1.0/agent-uniapp/sub-pages/merchant/dashboard/index.vue?vue&type=template&id=63da1676&scoped=true& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
}
var recyclableRender = false
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ 139:
/*!*********************************************************************************************************!*\
  !*** E:/project/yhlc-v1.0/agent-uniapp/sub-pages/merchant/dashboard/index.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--13-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./index.vue?vue&type=script&lang=js& */ 140);
/* harmony import */ var _D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 140:
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--13-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!E:/project/yhlc-v1.0/agent-uniapp/sub-pages/merchant/dashboard/index.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
var _index = __webpack_require__(/*! @/config/index.js */ 41);
var _storeOrder = __webpack_require__(/*! @/api/storeOrder.js */ 141);
var _userRoleKeys = __webpack_require__(/*! @/utils/userRoleKeys.js */ 142);
var _routes = __webpack_require__(/*! @/utils/routes.js */ 42);
var TabBar = function TabBar() {
  Promise.all(/*! require.ensure | components/tab-bar */[__webpack_require__.e("common/vendor"), __webpack_require__.e("components/tab-bar")]).then((function () {
    return resolve(__webpack_require__(/*! @/components/tab-bar.vue */ 499));
  }).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
};
var LIST_PAGE_SIZE = 99;
function jsonMayContainPendingAudit(obj) {
  if (!obj || (0, _typeof2.default)(obj) !== 'object') return false;
  try {
    return JSON.stringify(obj).includes('待审核');
  } catch (e) {
    return false;
  }
}

/** 多货单：flowStatus 0 为「待审核确认」 */
function multiGoodsPendingAudit(row) {
  return Number(row && row.flowStatus) === 0 || jsonMayContainPendingAudit(row);
}
function isMainWarehouseRoleByUser(userInfo) {
  return (0, _userRoleKeys.collectAllUserRoleKeys)(userInfo).some(function (k) {
    return k === 'hhr';
  });
}

/** 少货单：0 待供应商审核，1 待采购审核（与少货单列表 Tab 一致，均计入看板） */
function lackGoodsPendingAudit(row) {
  var n = Number(row && row.flowStatus);
  return n === 0 || n === 1 || jsonMayContainPendingAudit(row);
}

/** 售后报损：与报损页 supplierAuditText 口径一致，仅 flowStatus ∈ {0,5,6} 且 supplierAuditStatus=0 才算待供应商处理 */
function damagePendingAudit(row) {
  var flow = Number(row && row.flowStatus);
  if (flow !== 0 && flow !== 5 && flow !== 6) return false;
  return Number(row && row.supplierAuditStatus) === 0;
}
function skuQuantity(row) {
  return Number(row && row.quantity) || 0;
}
var _default = {
  components: {
    TabBar: TabBar
  },
  data: function data() {
    return {
      counts: {
        deliveryGoods: 0,
        lack: 0,
        damage: 0,
        multi: 0
      }
    };
  },
  computed: {
    envTip: function envTip() {
      if (_index.CURRENT_ENV === 'test') return '当前为测试环境，数据与生产环境隔离';
      if (_index.CURRENT_ENV === 'dev') return '当前为开发环境，数据与生产环境隔离';
      return '';
    },
    rows: function rows() {
      var c = this.counts || {};
      return [{
        key: 'delivery',
        label: '待送货商品数量',
        count: Number(c.deliveryGoods) || 0,
        url: _routes.SUPPLY_DELIVERY_LIST
      }, {
        key: 'lack',
        label: '少货单',
        count: Number(c.lack) || 0,
        url: _routes.AFTER_SALE_LESS_GOODS
      }, {
        key: 'damage',
        label: '售后报损单',
        count: Number(c.damage) || 0,
        url: _routes.AFTER_SALE_DAMAGE
      }, {
        key: 'multi',
        label: '多货单',
        count: Number(c.multi) || 0,
        url: _routes.AFTER_SALE_EXCESS_GOODS
      }];
    }
  },
  onShow: function onShow() {
    this.refreshCounts();
  },
  methods: {
    onRow: function onRow(row) {
      if (row && row.url) {
        uni.navigateTo({
          url: row.url
        });
      }
    },
    refreshCounts: function refreshCounts() {
      var userInfo = this.$store && this.$store.state && this.$store.state.userInfo;
      var isCityWarehouse = (0, _userRoleKeys.hasCityWarehouseRole)(userInfo);
      var tasks = [this.loadLackCount(), this.loadDamageCount(), this.loadMultiCount()];
      if (isCityWarehouse) {
        this.counts.deliveryGoods = 0;
      } else {
        tasks.unshift(this.loadDeliveryPendingAuditSum());
      }
      Promise.all(tasks).catch(function () {});
    },
    loadLackCount: function loadLackCount() {
      var _this = this;
      return (0, _storeOrder.getLackGoodsList)(this, {
        pageNum: 1,
        pageSize: LIST_PAGE_SIZE
      }).then(function (res) {
        var rows = Array.isArray(res && res.rows) ? res.rows : [];
        _this.counts.lack = rows.filter(lackGoodsPendingAudit).length;
      }).catch(function () {
        _this.counts.lack = 0;
      });
    },
    loadMultiCount: function loadMultiCount() {
      var _this2 = this;
      return (0, _storeOrder.getMultiGoodsList)(this, {
        pageNum: 1,
        pageSize: LIST_PAGE_SIZE
      }).then(function (res) {
        var rows = Array.isArray(res && res.rows) ? res.rows : [];
        var isSupplier = (0, _userRoleKeys.hasSupplierRole)(_this2.$store && _this2.$store.state && _this2.$store.state.userInfo);
        var isCityWarehouse = (0, _userRoleKeys.hasCityWarehouseRole)(_this2.$store && _this2.$store.state && _this2.$store.state.userInfo);
        var isMainWarehouse = isMainWarehouseRoleByUser(_this2.$store && _this2.$store.state && _this2.$store.state.userInfo);
        var myPending = rows.filter(function (r) {
          var flowStatus = Number(r && r.flowStatus);
          var applyType = Number(r && r.applyType);
          if (isSupplier && flowStatus === 0 && applyType === 2) return true;
          if (isMainWarehouse && flowStatus === 0 && applyType === 1) return true;
          if (isCityWarehouse && (flowStatus === 1 || flowStatus === 2)) return true;
          return false;
        });
        // 若角色识别失败，保留旧口径兜底，避免误显示为 0
        _this2.counts.multi = myPending.length > 0 || !isSupplier && !isCityWarehouse && !isMainWarehouse ? myPending.length || rows.filter(multiGoodsPendingAudit).length : 0;
      }).catch(function () {
        _this2.counts.multi = 0;
      });
    },
    loadDamageCount: function loadDamageCount() {
      var _this3 = this;
      return (0, _storeOrder.getAfterSaleLossList)(this, {
        pageNum: 1,
        pageSize: LIST_PAGE_SIZE
      }).then(function (res) {
        var rows = Array.isArray(res && res.rows) ? res.rows : [];
        _this3.counts.damage = rows.filter(damagePendingAudit).length;
      }).catch(function () {
        _this3.counts.damage = 0;
      });
    },
    /**
     * 与待送货列表同源：dailySummary/list + skuInfo；sku 行含「待审核」时只计该行件数；
     * 若接口未返回该字样则退化为全部待送货 quantity 之和（与送货单页口径一致）。
     */
    loadDeliveryPendingAuditSum: function loadDeliveryPendingAuditSum() {
      var _this4 = this;
      return (0, _storeOrder.getDailySummaryList)(this, {
        pageNum: 1,
        pageSize: LIST_PAGE_SIZE
      }).then(function (summaryRes) {
        var summaryRows = Array.isArray(summaryRes && summaryRes.rows) ? summaryRes.rows : [];
        var summary = summaryRows[0];
        if (!summary) {
          _this4.counts.deliveryGoods = 0;
          return;
        }
        var skuParams = {
          supplierId: summary.supplierId,
          deliveryDate: summary.deliveryDate,
          id: summary.id,
          summaryStatus: summary.summaryStatus
        };
        return (0, _storeOrder.getDailySummarySkuInfo)(_this4, skuParams).then(function (skuRes) {
          var rawRows = Array.isArray(skuRes && skuRes.data) ? skuRes.data : [];
          var matched = rawRows.filter(function (r) {
            return jsonMayContainPendingAudit(r);
          });
          var sumQty = function sumQty(arr) {
            return arr.reduce(function (s, r) {
              return s + skuQuantity(r);
            }, 0);
          };
          if (matched.length) {
            _this4.counts.deliveryGoods = sumQty(matched);
          } else if (rawRows.length) {
            _this4.counts.deliveryGoods = sumQty(rawRows);
          } else {
            _this4.counts.deliveryGoods = 0;
          }
        });
      }).catch(function () {
        _this4.counts.deliveryGoods = 0;
      });
    }
  }
};
exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 2)["default"]))

/***/ }),

/***/ 143:
/*!******************************************************************************************************************************************!*\
  !*** E:/project/yhlc-v1.0/agent-uniapp/sub-pages/merchant/dashboard/index.vue?vue&type=style&index=0&id=63da1676&lang=scss&scoped=true& ***!
  \******************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_index_vue_vue_type_style_index_0_id_63da1676_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/mini-css-extract-plugin/dist/loader.js??ref--8-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--8-oneOf-1-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-2!./node_modules/postcss-loader/src??ref--8-oneOf-1-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/sass-loader/dist/cjs.js??ref--8-oneOf-1-4!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-5!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./index.vue?vue&type=style&index=0&id=63da1676&lang=scss&scoped=true& */ 144);
/* harmony import */ var _D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_index_vue_vue_type_style_index_0_id_63da1676_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_index_vue_vue_type_style_index_0_id_63da1676_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_index_vue_vue_type_style_index_0_id_63da1676_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_index_vue_vue_type_style_index_0_id_63da1676_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_index_vue_vue_type_style_index_0_id_63da1676_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 144:
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js??ref--8-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--8-oneOf-1-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-2!./node_modules/postcss-loader/src??ref--8-oneOf-1-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/sass-loader/dist/cjs.js??ref--8-oneOf-1-4!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-5!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!E:/project/yhlc-v1.0/agent-uniapp/sub-pages/merchant/dashboard/index.vue?vue&type=style&index=0&id=63da1676&lang=scss&scoped=true& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
    if(false) { var cssReload; }
  

/***/ })

},[[135,"common/runtime","common/vendor"]]]);
//# sourceMappingURL=../../../../.sourcemap/mp-weixin/sub-pages/merchant/dashboard/index.js.map
},{isPage:true,isComponent:true,currentFile:'sub-pages/merchant/dashboard/index.js'});require("sub-pages/merchant/dashboard/index.js");