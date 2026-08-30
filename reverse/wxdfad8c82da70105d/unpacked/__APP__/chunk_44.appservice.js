$gwx_XC_39=function(_,_v,_n,_p,_s,_wp,_wl,$gwn,$gwl,$gwh,wh,$gstack,$gwrt,gra,grb,TestTest,wfor,_ca,_da,_r,_rz,_o,_oz,_1,_1z,_2,_2z,_m,_mz,nv_getDate,nv_getRegExp,nv_console,nv_parseInt,nv_parseFloat,nv_isNaN,nv_isFinite,nv_decodeURI,nv_decodeURIComponent,nv_encodeURI,nv_encodeURIComponent,$gdc,nv_JSON,_af,_gv,_ai,_grp,_gd,_gapi,$ixc,_ic,_w,_ev,_tsd){return function(path,global){
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
var z=__WXML_GLOBAL__.ops_set.$gwx_XC_39 || [];
function gz$gwx_XC_39_1(){
if( __WXML_GLOBAL__.ops_cached.$gwx_XC_39_1)return __WXML_GLOBAL__.ops_cached.$gwx_XC_39_1
__WXML_GLOBAL__.ops_cached.$gwx_XC_39_1=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'__l'])
Z([3,'__e'])
Z([3,'data-v-70152aa1'])
Z([3,'u-overlay'])
Z([[7],[3,'overlayStyle']])
Z([[4],[[5],[[4],[[5],[[5],[1,'^click']],[[4],[[5],[[4],[[5],[1,'clickHandler']]]]]]]]])
Z([[7],[3,'duration']])
Z([[7],[3,'show']])
Z([3,'255863ca-1'])
Z([[4],[[5],[1,'default']]])
})(__WXML_GLOBAL__.ops_cached.$gwx_XC_39_1);return __WXML_GLOBAL__.ops_cached.$gwx_XC_39_1
}
__WXML_GLOBAL__.ops_set.$gwx_XC_39=z;
__WXML_GLOBAL__.ops_init.$gwx_XC_39=true;
var x=['./node-modules/uview-ui/components/u-overlay/u-overlay.wxml'];d_[x[0]]={}
var m0=function(e,s,r,gg){
var z=gz$gwx_XC_39_1()
var c83=_mz(z,'u-transition',['bind:__l',0,'bind:click',1,'class',1,'customClass',2,'customStyle',3,'data-event-opts',4,'duration',5,'show',6,'vueId',7,'vueSlots',8],[],e,s,gg)
var h93=_n('slot')
_(c83,h93)
_(r,c83)
return r
}
e_[x[0]]={f:m0,j:[],i:[],ti:[],ic:[]}
if(path&&e_[path]){
return function(env,dd,global){$gwxc=0;var root={"tag":"wx-page"};root.children=[]
;g="$gwx_XC_39";var main=e_[path].f
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
}(__g.a,__g.b,__g.c,__g.d,__g.e,__g.f,__g.g,__g.h,__g.i,__g.j,__g.k,__g.l,__g.m,__g.n,__g.o,__g.p,__g.q,__g.r,__g.s,__g.t,__g.u,__g.v,__g.w,__g.x,__g.y,__g.z,__g.A,__g.B,__g.C,__g.D,__g.E,__g.F,__g.G,__g.H,__g.I,__g.J,__g.K,__g.L,__g.M,__g.N,__g.O,__g.P,__g.Q,__g.R,__g.S,__g.T,__g.U,__g.V,__g.W,__g.X,__g.Y,__g.Z,__g.aa);if(__vd_version_info__.delayedGwx||false)$gwx_XC_39();	if (__vd_version_info__.delayedGwx) __wxAppCode__['node-modules/uview-ui/components/u-overlay/u-overlay.wxml'] = [$gwx_XC_39, './node-modules/uview-ui/components/u-overlay/u-overlay.wxml'];else __wxAppCode__['node-modules/uview-ui/components/u-overlay/u-overlay.wxml'] = $gwx_XC_39( './node-modules/uview-ui/components/u-overlay/u-overlay.wxml' );
	;__wxRoute = "node-modules/uview-ui/components/u-overlay/u-overlay";__wxRouteBegin = true;__wxAppCurrentFile__="node-modules/uview-ui/components/u-overlay/u-overlay.js";define("node-modules/uview-ui/components/u-overlay/u-overlay.js",function(require,module,exports,window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){
"use strict";(global.webpackChunkbanguo_supplier_uniapp=global.webpackChunkbanguo_supplier_uniapp||[]).push([["node-modules/uview-ui/components/u-overlay/u-overlay"],{4833:function(n,e,o){o.r(e),o.d(e,{default:function(){return r}});var u={uTransition:function(){return Promise.all([o.e("common/vendor"),o.e("node-modules/uview-ui/components/u-transition/u-transition")]).then(o.bind(o,54878))}},t=o(32698),i=o(60795).default,a={name:"u-overlay",mixins:[i.$u.mpMixin,i.$u.mixin,t.default],computed:{overlayStyle:function(){var n={position:"fixed",top:0,left:0,right:0,zIndex:this.zIndex,bottom:0,"background-color":"rgba(0, 0, 0, ".concat(this.opacity,")")};return i.$u.deepMerge(n,i.$u.addStyle(this.customStyle))}},methods:{clickHandler:function(){this.$emit("click")}}},l=o(45836),r=(0,(o.n(l)(),o(18535)).default)(a,(function(){this.$createElement;this._self._c}),[],!1,null,"70152aa1",null,!1,u,void 0).exports},45836:function(){}}]),(global.webpackChunkbanguo_supplier_uniapp=global.webpackChunkbanguo_supplier_uniapp||[]).push([["node-modules/uview-ui/components/u-overlay/u-overlay-create-component"],{},function(n){n("60795").createComponent(n(4833))}]);
},{isPage:false,isComponent:true,currentFile:'node-modules/uview-ui/components/u-overlay/u-overlay.js'});require("node-modules/uview-ui/components/u-overlay/u-overlay.js");