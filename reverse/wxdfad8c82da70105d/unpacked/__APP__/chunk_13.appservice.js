$gwx_XC_5=function(_,_v,_n,_p,_s,_wp,_wl,$gwn,$gwl,$gwh,wh,$gstack,$gwrt,gra,grb,TestTest,wfor,_ca,_da,_r,_rz,_o,_oz,_1,_1z,_2,_2z,_m,_mz,nv_getDate,nv_getRegExp,nv_console,nv_parseInt,nv_parseFloat,nv_isNaN,nv_isFinite,nv_decodeURI,nv_decodeURIComponent,nv_encodeURI,nv_encodeURIComponent,$gdc,nv_JSON,_af,_gv,_ai,_grp,_gd,_gapi,$ixc,_ic,_w,_ev,_tsd){return function(path,global){
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
var z=__WXML_GLOBAL__.ops_set.$gwx_XC_5 || [];
function gz$gwx_XC_5_1(){
if( __WXML_GLOBAL__.ops_cached.$gwx_XC_5_1)return __WXML_GLOBAL__.ops_cached.$gwx_XC_5_1
__WXML_GLOBAL__.ops_cached.$gwx_XC_5_1=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'__l'])
Z([3,'__e'])
Z([1,true])
Z([3,'data-v-49a04702'])
Z([3,'#ffffff'])
Z([[4],[[5],[[4],[[5],[[5],[1,'^click']],[[4],[[5],[[4],[[5],[1,'handleClick']]]]]]]]])
Z([[7],[3,'name']])
Z([3,'42rpx'])
Z([3,'df590d08-1'])
})(__WXML_GLOBAL__.ops_cached.$gwx_XC_5_1);return __WXML_GLOBAL__.ops_cached.$gwx_XC_5_1
}
__WXML_GLOBAL__.ops_set.$gwx_XC_5=z;
__WXML_GLOBAL__.ops_init.$gwx_XC_5=true;
var x=['./components/plus-minus-button/plus-minus-button.wxml'];d_[x[0]]={}
var m0=function(e,s,r,gg){
var z=gz$gwx_XC_5_1()
var bOH=_mz(z,'u-icon',['bind:__l',0,'bind:click',1,'bold',1,'class',2,'color',3,'data-event-opts',4,'name',5,'size',6,'vueId',7],[],e,s,gg)
_(r,bOH)
return r
}
e_[x[0]]={f:m0,j:[],i:[],ti:[],ic:[]}
if(path&&e_[path]){
return function(env,dd,global){$gwxc=0;var root={"tag":"wx-page"};root.children=[]
;g="$gwx_XC_5";var main=e_[path].f
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
}(__g.a,__g.b,__g.c,__g.d,__g.e,__g.f,__g.g,__g.h,__g.i,__g.j,__g.k,__g.l,__g.m,__g.n,__g.o,__g.p,__g.q,__g.r,__g.s,__g.t,__g.u,__g.v,__g.w,__g.x,__g.y,__g.z,__g.A,__g.B,__g.C,__g.D,__g.E,__g.F,__g.G,__g.H,__g.I,__g.J,__g.K,__g.L,__g.M,__g.N,__g.O,__g.P,__g.Q,__g.R,__g.S,__g.T,__g.U,__g.V,__g.W,__g.X,__g.Y,__g.Z,__g.aa);if(__vd_version_info__.delayedGwx||false)$gwx_XC_5();	if (__vd_version_info__.delayedGwx) __wxAppCode__['components/plus-minus-button/plus-minus-button.wxml'] = [$gwx_XC_5, './components/plus-minus-button/plus-minus-button.wxml'];else __wxAppCode__['components/plus-minus-button/plus-minus-button.wxml'] = $gwx_XC_5( './components/plus-minus-button/plus-minus-button.wxml' );
	;__wxRoute = "components/plus-minus-button/plus-minus-button";__wxRouteBegin = true;__wxAppCurrentFile__="components/plus-minus-button/plus-minus-button.js";define("components/plus-minus-button/plus-minus-button.js",function(require,module,exports,window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){
"use strict";(global.webpackChunkbanguo_supplier_uniapp=global.webpackChunkbanguo_supplier_uniapp||[]).push([["components/plus-minus-button/plus-minus-button"],{36066:function(){},88427:function(n,u,t){t.r(u),t.d(u,{default:function(){return p}});var e={uIcon:function(){return Promise.all([t.e("common/vendor"),t.e("node-modules/uview-ui/components/u-icon/u-icon")]).then(t.bind(t,74302))}},o={name:"bg-plus-minus-button",props:{type:"minus"},data:function(){return{}},computed:{plus:function(){return"plus"===this.type},name:function(){return this.plus?"/static/icons/i-plus.png":"/static/icons/i-minus.png"}},methods:{handleClick:function(){this.$emit("click")}}},i=t(36066),p=(0,(t.n(i)(),t(18535)).default)(o,(function(){var n=this,u=(n.$createElement,n._self._c,n.__get_style([n.viewStyle]));n.$mp.data=Object.assign({},{$root:{s0:u}})}),[],!1,null,"49a04702",null,!1,e,void 0).exports}}]),(global.webpackChunkbanguo_supplier_uniapp=global.webpackChunkbanguo_supplier_uniapp||[]).push([["components/plus-minus-button/plus-minus-button-create-component"],{},function(n){n("60795").createComponent(n(88427))}]);
},{isPage:false,isComponent:true,currentFile:'components/plus-minus-button/plus-minus-button.js'});require("components/plus-minus-button/plus-minus-button.js");