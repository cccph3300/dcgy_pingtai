$gwx0_XC_23=function(_,_v,_n,_p,_s,_wp,_wl,$gwn,$gwl,$gwh,wh,$gstack,$gwrt,gra,grb,TestTest,wfor,_ca,_da,_r,_rz,_o,_oz,_1,_1z,_2,_2z,_m,_mz,nv_getDate,nv_getRegExp,nv_console,nv_parseInt,nv_parseFloat,nv_isNaN,nv_isFinite,nv_decodeURI,nv_decodeURIComponent,nv_encodeURI,nv_encodeURIComponent,$gdc,nv_JSON,_af,_gv,_ai,_grp,_gd,_gapi,$ixc,_ic,_w,_ev,_tsd){return function(path,global){
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
var z=__WXML_GLOBAL__.ops_set.$gwx0_XC_23 || [];
function gz$gwx0_XC_23_1(){
if( __WXML_GLOBAL__.ops_cached.$gwx0_XC_23_1)return __WXML_GLOBAL__.ops_cached.$gwx0_XC_23_1
__WXML_GLOBAL__.ops_cached.$gwx0_XC_23_1=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[7],[3,'amount']])
Z([3,'__l'])
Z([[7],[3,'mx_list_isEmpty']])
Z([[7],[3,'formList']])
Z([[7],[3,'mx_list_list']])
Z([[7],[3,'mx_list_loadStatus']])
Z([[7],[3,'mx_list_onlyOnePage']])
Z([3,'佣金'])
Z([[7],[3,'transDate']])
Z([3,'700d6fb1-1'])
})(__WXML_GLOBAL__.ops_cached.$gwx0_XC_23_1);return __WXML_GLOBAL__.ops_cached.$gwx0_XC_23_1
}
__WXML_GLOBAL__.ops_set.$gwx0_XC_23=z;
__WXML_GLOBAL__.ops_init.$gwx0_XC_23=true;
var x=['./package-system/bill/details/commission.wxml'];d_[x[0]]={}
var m0=function(e,s,r,gg){
var z=gz$gwx0_XC_23_1()
var oFL=_mz(z,'bill-detail-page',['amount',0,'bind:__l',1,'empty',1,'formList',2,'list',3,'loadStatus',4,'onlyOnePage',5,'title',6,'transDate',7,'vueId',8],[],e,s,gg)
_(r,oFL)
return r
}
e_[x[0]]={f:m0,j:[],i:[],ti:[],ic:[]}
if(path&&e_[path]){
return function(env,dd,global){$gwxc=0;var root={"tag":"wx-page"};root.children=[]
;g="$gwx0_XC_23";var main=e_[path].f
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
}(__g.a,__g.b,__g.c,__g.d,__g.e,__g.f,__g.g,__g.h,__g.i,__g.j,__g.k,__g.l,__g.m,__g.n,__g.o,__g.p,__g.q,__g.r,__g.s,__g.t,__g.u,__g.v,__g.w,__g.x,__g.y,__g.z,__g.A,__g.B,__g.C,__g.D,__g.E,__g.F,__g.G,__g.H,__g.I,__g.J,__g.K,__g.L,__g.M,__g.N,__g.O,__g.P,__g.Q,__g.R,__g.S,__g.T,__g.U,__g.V,__g.W,__g.X,__g.Y,__g.Z,__g.aa);if(__vd_version_info__.delayedGwx||false)$gwx0_XC_23();	if (__vd_version_info__.delayedGwx) __wxAppCode__['package-system/bill/details/commission.wxml'] = [$gwx0_XC_23, './package-system/bill/details/commission.wxml'];else __wxAppCode__['package-system/bill/details/commission.wxml'] = $gwx0_XC_23( './package-system/bill/details/commission.wxml' );
	;__wxRoute = "package-system/bill/details/commission";__wxRouteBegin = true;__wxAppCurrentFile__="package-system/bill/details/commission.js";define("package-system/bill/details/commission.js",function(require,module,exports,window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){
"use strict";require("../../common/vendor.js"),(global.webpackChunkbanguo_supplier_uniapp=global.webpackChunkbanguo_supplier_uniapp||[]).push([["package-system/bill/details/commission"],{21872:function(e,t,n){n(923);var r=n(49653),o=n(22277),i=n(96939),a=n(98638);function u(){
/*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */var e,t,n="function"==typeof Symbol?Symbol:{},r=n.iterator||"@@iterator",o=n.toStringTag||"@@toStringTag";function i(n,r,o,i){var u=r&&r.prototype instanceof s?r:s,l=Object.create(u.prototype);return c(l,"_invoke",function(n,r,o){var i,u,c,s=0,l=o||[],p=!1,f={p:0,n:0,v:e,a:m,f:m.bind(e,4),d:function(t,n){return i=t,u=0,c=e,f.n=n,a}};function m(n,r){for(u=n,c=r,t=0;!p&&s&&!o&&t<l.length;t++){var o,i=l[t],m=f.p,y=i[2];n>3?(o=y===r)&&(c=i[(u=i[4])?5:(u=3,3)],i[4]=i[5]=e):i[0]<=m&&((o=n<2&&m<i[1])?(u=0,f.v=r,f.n=i[1]):m<y&&(o=n<3||i[0]>r||r>y)&&(i[4]=n,i[5]=r,f.n=y,u=0))}if(o||n>1)return a;throw p=!0,r}return function(o,l,y){if(s>1)throw TypeError("Generator is already running");for(p&&1===l&&m(l,y),u=l,c=y;(t=u<2?e:c)||!p;){i||(u?u<3?(u>1&&(f.n=-1),m(u,c)):f.n=c:f.v=c);try{if(s=2,i){if(u||(o="next"),t=i[o]){if(!(t=t.call(i,c)))throw TypeError("iterator result is not an object");if(!t.done)return t;c=t.value,u<2&&(u=0)}else 1===u&&(t=i.return)&&t.call(i),u<2&&(c=TypeError("The iterator does not provide a '"+o+"' method"),u=1);i=e}else if((t=(p=f.n<0)?c:n.call(r,f))!==a)break}catch(t){i=e,u=1,c=t}finally{s=1}}return{value:t,done:p}}}(n,o,i),!0),l}var a={};function s(){}function l(){}function p(){}t=Object.getPrototypeOf;var f=[][r]?t(t([][r]())):(c(t={},r,(function(){return this})),t),m=p.prototype=s.prototype=Object.create(f);function y(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,p):(e.__proto__=p,c(e,o,"GeneratorFunction")),e.prototype=Object.create(m),e}return l.prototype=p,c(m,"constructor",p),c(p,"constructor",l),l.displayName="GeneratorFunction",c(p,o,"GeneratorFunction"),c(m),c(m,o,"Generator"),c(m,r,(function(){return this})),c(m,"toString",(function(){return"[object Generator]"})),(u=function(){return{w:i,m:y}})()}function c(e,t,n,r){var o=Object.defineProperty;try{o({},"",{})}catch(e){o=0}(c=function(e,t,n,r){function i(t,n){c(e,t,(function(e){return this._invoke(t,n,e)}))}t?o?o(e,t,{value:n,enumerable:!r,configurable:!r,writable:!r}):e[t]=n:(i("next",0),i("throw",1),i("return",2))})(e,t,n,r)}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){(0,r.default)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var p={mixins:[n(60795).default.$b.mx_list],components:{billDetailPage:function(){n.e("package-system/bill/details/components/detail-page").then(function(){return resolve(n(14148))}.bind(null,n)).catch(n.oe)}},data:function(){return{transDate:"2026-07-15",deptId:null,amount:0,formList:[{label:"商品名称",key:"skuName",type:"text"},{label:"佣金标准",key:"commissionPrice",type:"slot"},{label:"数量",key:"count",type:"text"},{label:"分销含税佣金",key:"amount",type:"slot"},{label:"佣金类型",key:"commissionType",type:"text"},{label:"订单编号",key:"orderNo",type:"text",copy:!0},{label:"下单时间",key:"createTime",type:"text"}]}},onLoad:function(e){var t=this;this.transDate=e.businessDate||this.transDate,this.deptId=void 0===e.deptId?null:e.deptId,this.mx_list_initSearch((function(n){var r=n.pageNum,o=n.pageSize;return t.getDetails(e,{pageNum:r,pageSize:o})}))},methods:{getDetails:function(e,t){var n=this;return(0,o.default)(u().m((function r(){var o,c,s;return u().w((function(r){for(;;)switch(r.n){case 0:return o=t.pageNum,c=t.pageSize,r.n=1,(0,i.getBillItemDetail)({type:a.BILL_DETAIL_TYPE.COMMISSION,businessDate:n.transDate,deptId:n.deptId,skuId:e.skuId||void 0,skuType:e.skuType,pageNum:o,pageSize:c});case 1:return s=r.v,n.amount=s.totalRow&&s.totalRow.totalAmount,r.a(2,l(l({},s),{},{rows:(s.rows||[]).map((function(e,t){return{id:"".concat(e.orderCode||t),skuName:e.itemName,commissionPrice:e.distributionItemAmount,count:"".concat(e.orderCount||0,"件"),amount:e.distributionTotalAmount,commissionType:(0,a.getCommissionSourceTypeName)(e.sourceType),orderNo:e.orderCode,createTime:e.businessDate}}))}))}}),r)})))()}}},f=(0,n(18535).default)(p,(function(){this.$createElement;this._self._c}),[],!1,null,null,null,!1,void 0,void 0).exports,m=n(19396).default,y=n(60795).createPage;m.__webpack_require_UNI_MP_PLUGIN__=n,y(f)}},function(e){e.O(0,["common/vendor","package-system/common/vendor"],(function(){return t=21872,e(e.s=t);var t})),e.O()}]);
},{isPage:true,isComponent:true,currentFile:'package-system/bill/details/commission.js'});require("package-system/bill/details/commission.js");