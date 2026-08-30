$gwx0_XC_46=function(_,_v,_n,_p,_s,_wp,_wl,$gwn,$gwl,$gwh,wh,$gstack,$gwrt,gra,grb,TestTest,wfor,_ca,_da,_r,_rz,_o,_oz,_1,_1z,_2,_2z,_m,_mz,nv_getDate,nv_getRegExp,nv_console,nv_parseInt,nv_parseFloat,nv_isNaN,nv_isFinite,nv_decodeURI,nv_decodeURIComponent,nv_encodeURI,nv_encodeURIComponent,$gdc,nv_JSON,_af,_gv,_ai,_grp,_gd,_gapi,$ixc,_ic,_w,_ev,_tsd){return function(path,global){
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
var z=__WXML_GLOBAL__.ops_set.$gwx0_XC_46 || [];
function gz$gwx0_XC_46_1(){
if( __WXML_GLOBAL__.ops_cached.$gwx0_XC_46_1)return __WXML_GLOBAL__.ops_cached.$gwx0_XC_46_1
__WXML_GLOBAL__.ops_cached.$gwx0_XC_46_1=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[7],[3,'amount']])
Z([3,'__l'])
Z([[7],[3,'mx_list_isEmpty']])
Z([[7],[3,'getFormList']])
Z([[7],[3,'mx_list_list']])
Z([[7],[3,'mx_list_loadStatus']])
Z([[7],[3,'mx_list_onlyOnePage']])
Z([3,'退款'])
Z([[7],[3,'transDate']])
Z([3,'042ff444-1'])
})(__WXML_GLOBAL__.ops_cached.$gwx0_XC_46_1);return __WXML_GLOBAL__.ops_cached.$gwx0_XC_46_1
}
__WXML_GLOBAL__.ops_set.$gwx0_XC_46=z;
__WXML_GLOBAL__.ops_init.$gwx0_XC_46=true;
var x=['./package-system/bill/details/refund.wxml'];d_[x[0]]={}
var m0=function(e,s,r,gg){
var z=gz$gwx0_XC_46_1()
var c0T=_mz(z,'bill-detail-page',['amount',0,'bind:__l',1,'empty',1,'formList',2,'list',3,'loadStatus',4,'onlyOnePage',5,'title',6,'transDate',7,'vueId',8],[],e,s,gg)
_(r,c0T)
return r
}
e_[x[0]]={f:m0,j:[],i:[],ti:[],ic:[]}
if(path&&e_[path]){
return function(env,dd,global){$gwxc=0;var root={"tag":"wx-page"};root.children=[]
;g="$gwx0_XC_46";var main=e_[path].f
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
}(__g.a,__g.b,__g.c,__g.d,__g.e,__g.f,__g.g,__g.h,__g.i,__g.j,__g.k,__g.l,__g.m,__g.n,__g.o,__g.p,__g.q,__g.r,__g.s,__g.t,__g.u,__g.v,__g.w,__g.x,__g.y,__g.z,__g.A,__g.B,__g.C,__g.D,__g.E,__g.F,__g.G,__g.H,__g.I,__g.J,__g.K,__g.L,__g.M,__g.N,__g.O,__g.P,__g.Q,__g.R,__g.S,__g.T,__g.U,__g.V,__g.W,__g.X,__g.Y,__g.Z,__g.aa);if(__vd_version_info__.delayedGwx||false)$gwx0_XC_46();	if (__vd_version_info__.delayedGwx) __wxAppCode__['package-system/bill/details/refund.wxml'] = [$gwx0_XC_46, './package-system/bill/details/refund.wxml'];else __wxAppCode__['package-system/bill/details/refund.wxml'] = $gwx0_XC_46( './package-system/bill/details/refund.wxml' );
	;__wxRoute = "package-system/bill/details/refund";__wxRouteBegin = true;__wxAppCurrentFile__="package-system/bill/details/refund.js";define("package-system/bill/details/refund.js",function(require,module,exports,window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){
"use strict";require("../../common/vendor.js"),(global.webpackChunkbanguo_supplier_uniapp=global.webpackChunkbanguo_supplier_uniapp||[]).push([["package-system/bill/details/refund"],{94562:function(e,t,n){n(923);var r=n(49653),o=n(22277),a=n(96939),u=n(98638);function i(){
/*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */var e,t,n="function"==typeof Symbol?Symbol:{},r=n.iterator||"@@iterator",o=n.toStringTag||"@@toStringTag";function a(n,r,o,a){var i=r&&r.prototype instanceof p?r:p,l=Object.create(i.prototype);return c(l,"_invoke",function(n,r,o){var a,i,c,p=0,l=o||[],s=!1,f={p:0,n:0,v:e,a:d,f:d.bind(e,4),d:function(t,n){return a=t,i=0,c=e,f.n=n,u}};function d(n,r){for(i=n,c=r,t=0;!s&&p&&!o&&t<l.length;t++){var o,a=l[t],d=f.p,y=a[2];n>3?(o=y===r)&&(c=a[(i=a[4])?5:(i=3,3)],a[4]=a[5]=e):a[0]<=d&&((o=n<2&&d<a[1])?(i=0,f.v=r,f.n=a[1]):d<y&&(o=n<3||a[0]>r||r>y)&&(a[4]=n,a[5]=r,f.n=y,i=0))}if(o||n>1)return u;throw s=!0,r}return function(o,l,y){if(p>1)throw TypeError("Generator is already running");for(s&&1===l&&d(l,y),i=l,c=y;(t=i<2?e:c)||!s;){a||(i?i<3?(i>1&&(f.n=-1),d(i,c)):f.n=c:f.v=c);try{if(p=2,a){if(i||(o="next"),t=a[o]){if(!(t=t.call(a,c)))throw TypeError("iterator result is not an object");if(!t.done)return t;c=t.value,i<2&&(i=0)}else 1===i&&(t=a.return)&&t.call(a),i<2&&(c=TypeError("The iterator does not provide a '"+o+"' method"),i=1);a=e}else if((t=(s=f.n<0)?c:n.call(r,f))!==u)break}catch(t){a=e,i=1,c=t}finally{p=1}}return{value:t,done:s}}}(n,o,a),!0),l}var u={};function p(){}function l(){}function s(){}t=Object.getPrototypeOf;var f=[][r]?t(t([][r]())):(c(t={},r,(function(){return this})),t),d=s.prototype=p.prototype=Object.create(f);function y(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,s):(e.__proto__=s,c(e,o,"GeneratorFunction")),e.prototype=Object.create(d),e}return l.prototype=s,c(d,"constructor",s),c(s,"constructor",l),l.displayName="GeneratorFunction",c(s,o,"GeneratorFunction"),c(d),c(d,o,"Generator"),c(d,r,(function(){return this})),c(d,"toString",(function(){return"[object Generator]"})),(i=function(){return{w:a,m:y}})()}function c(e,t,n,r){var o=Object.defineProperty;try{o({},"",{})}catch(e){o=0}(c=function(e,t,n,r){function a(t,n){c(e,t,(function(e){return this._invoke(t,n,e)}))}t?o?o(e,t,{value:n,enumerable:!r,configurable:!r,writable:!r}):e[t]=n:(a("next",0),a("throw",1),a("return",2))})(e,t,n,r)}function p(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?p(Object(n),!0).forEach((function(t){(0,r.default)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):p(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var s={mixins:[n(60795).default.$b.mx_list],components:{billDetailPage:function(){n.e("package-system/bill/details/components/detail-page").then(function(){return resolve(n(14148))}.bind(null,n)).catch(n.oe)}},data:function(){return{transDate:"2026-07-15",deptId:null,amount:0}},onLoad:function(e){var t=this;this.transDate=e.businessDate||this.transDate,this.deptId=void 0===e.deptId?null:e.deptId,this.mx_list_initSearch((function(n){var r=n.pageNum,o=n.pageSize;return t.getDetails(e,{pageNum:r,pageSize:o})}))},methods:{getFormList:function(e){return[{label:"商品名称",key:"skuName",type:"slot"},{label:"商品单价",key:"price",type:"slot"},{label:"取消数量",key:"count",type:"text"},{label:"退款快递运费",key:"expressAmount",type:"slot",hide:!e.expressAmount},{label:"退打包费",key:"packageAmount",type:"slot",hide:!e.packageAmount},{label:"合计退款金额",key:"amount",type:"slot"},{label:"退款单号",key:"refundNo",type:"text",copy:!0},{label:"退款场景",key:"refundTypeName",type:"text",hide:!e.refundTypeName},{label:"订单编号",key:"orderNo",type:"text",copy:!0},{label:"下单时间",key:"orderTime",type:"text"}]},getDetails:function(e,t){var n=this;return(0,o.default)(i().m((function r(){var o,c,p;return i().w((function(r){for(;;)switch(r.n){case 0:return o=t.pageNum,c=t.pageSize,r.n=1,(0,a.getBillItemDetail)({type:u.BILL_DETAIL_TYPE.REFUND,businessDate:n.transDate,deptId:n.deptId,skuId:e.skuId||void 0,skuType:e.skuType,pageNum:o,pageSize:c});case 1:return p=r.v,n.amount=p.totalRow&&p.totalRow.totalAmount,r.a(2,l(l({},p),{},{rows:(p.rows||[]).map((function(e,t){return l(l({},e),{},{id:"".concat(e.orderCode||t),skuName:e.itemName,price:e.unitPrice,count:"".concat(e.refundCount||0,"件"),expressAmount:e.expressAmount,packageAmount:e.packageAmount,amount:e.totalAmount,refundTypeName:(0,u.getRefundTypeName)(e.refundType),refundNo:e.sourceNo,orderNo:e.orderCode,orderTime:e.orderTime})}))}))}}),r)})))()}}},f=(0,n(18535).default)(s,(function(){this.$createElement;this._self._c}),[],!1,null,null,null,!1,void 0,void 0).exports,d=n(19396).default,y=n(60795).createPage;d.__webpack_require_UNI_MP_PLUGIN__=n,y(f)}},function(e){e.O(0,["common/vendor","package-system/common/vendor"],(function(){return t=94562,e(e.s=t);var t})),e.O()}]);
},{isPage:true,isComponent:true,currentFile:'package-system/bill/details/refund.js'});require("package-system/bill/details/refund.js");