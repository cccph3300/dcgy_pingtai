$gwx_XC_28=function(_,_v,_n,_p,_s,_wp,_wl,$gwn,$gwl,$gwh,wh,$gstack,$gwrt,gra,grb,TestTest,wfor,_ca,_da,_r,_rz,_o,_oz,_1,_1z,_2,_2z,_m,_mz,nv_getDate,nv_getRegExp,nv_console,nv_parseInt,nv_parseFloat,nv_isNaN,nv_isFinite,nv_decodeURI,nv_decodeURIComponent,nv_encodeURI,nv_encodeURIComponent,$gdc,nv_JSON,_af,_gv,_ai,_grp,_gd,_gapi,$ixc,_ic,_w,_ev,_tsd){return function(path,global){
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
var z=__WXML_GLOBAL__.ops_set.$gwx_XC_28 || [];
function gz$gwx_XC_28_1(){
if( __WXML_GLOBAL__.ops_cached.$gwx_XC_28_1)return __WXML_GLOBAL__.ops_cached.$gwx_XC_28_1
__WXML_GLOBAL__.ops_cached.$gwx_XC_28_1=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[6],[[7],[3,'$root']],[3,'m0']])
})(__WXML_GLOBAL__.ops_cached.$gwx_XC_28_1);return __WXML_GLOBAL__.ops_cached.$gwx_XC_28_1
}
__WXML_GLOBAL__.ops_set.$gwx_XC_28=z;
__WXML_GLOBAL__.ops_init.$gwx_XC_28=true;
var x=['./node-modules/uview-ui/components/u-badge/u-badge.wxml'];d_[x[0]]={}
var m0=function(e,s,r,gg){
var z=gz$gwx_XC_28_1()
var oFY=_v()
_(r,oFY)
if(_oz(z,0,e,s,gg)){oFY.wxVkey=1
}
oFY.wxXCkey=1
return r
}
e_[x[0]]={f:m0,j:[],i:[],ti:[],ic:[]}
if(path&&e_[path]){
return function(env,dd,global){$gwxc=0;var root={"tag":"wx-page"};root.children=[]
;g="$gwx_XC_28";var main=e_[path].f
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
}(__g.a,__g.b,__g.c,__g.d,__g.e,__g.f,__g.g,__g.h,__g.i,__g.j,__g.k,__g.l,__g.m,__g.n,__g.o,__g.p,__g.q,__g.r,__g.s,__g.t,__g.u,__g.v,__g.w,__g.x,__g.y,__g.z,__g.A,__g.B,__g.C,__g.D,__g.E,__g.F,__g.G,__g.H,__g.I,__g.J,__g.K,__g.L,__g.M,__g.N,__g.O,__g.P,__g.Q,__g.R,__g.S,__g.T,__g.U,__g.V,__g.W,__g.X,__g.Y,__g.Z,__g.aa);if(__vd_version_info__.delayedGwx||false)$gwx_XC_28();	if (__vd_version_info__.delayedGwx) __wxAppCode__['node-modules/uview-ui/components/u-badge/u-badge.wxml'] = [$gwx_XC_28, './node-modules/uview-ui/components/u-badge/u-badge.wxml'];else __wxAppCode__['node-modules/uview-ui/components/u-badge/u-badge.wxml'] = $gwx_XC_28( './node-modules/uview-ui/components/u-badge/u-badge.wxml' );
	;__wxRoute = "node-modules/uview-ui/components/u-badge/u-badge";__wxRouteBegin = true;__wxAppCurrentFile__="node-modules/uview-ui/components/u-badge/u-badge.js";define("node-modules/uview-ui/components/u-badge/u-badge.js",function(require,module,exports,window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){
"use strict";(global.webpackChunkbanguo_supplier_uniapp=global.webpackChunkbanguo_supplier_uniapp||[]).push([["node-modules/uview-ui/components/u-badge/u-badge"],{27890:function(){},92732:function(e,t,u){u.r(t),u.d(t,{default:function(){return l}});var o=u(60597),i=u(60795).default,a={name:"u-badge",mixins:[i.$u.mpMixin,o.default,i.$u.mixin],computed:{boxStyle:function(){return{}},badgeStyle:function(){var e={};if(this.color&&(e.color=this.color),this.bgColor&&!this.inverted&&(e.backgroundColor=this.bgColor),this.absolute&&(e.position="absolute",this.offset.length)){var t=this.offset[0],u=this.offset[1]||t;e.top=i.$u.addUnit(t),e.right=i.$u.addUnit(u)}return e},showValue:function(){switch(this.numberType){case"overflow":return Number(this.value)>Number(this.max)?this.max+"+":this.value;case"ellipsis":return Number(this.value)>Number(this.max)?"...":this.value;case"limit":return Number(this.value)>999?Number(this.value)>=9999?Math.floor(this.value/1e4*100)/100+"w":Math.floor(this.value/1e3*100)/100+"k":this.value;default:return Number(this.value)}}}},n=u(27890),l=(0,(u.n(n)(),u(18535)).default)(a,(function(){var e=this,t=(e.$createElement,e._self._c,e.show&&(0!==Number(e.value)||e.showZero||e.isDot)),u=t?e.__get_style([e.$u.addStyle(e.customStyle),e.badgeStyle]):null;e.$mp.data=Object.assign({},{$root:{m0:t,s0:u}})}),[],!1,null,"231d324e",null,!1,void 0,void 0).exports}}]),(global.webpackChunkbanguo_supplier_uniapp=global.webpackChunkbanguo_supplier_uniapp||[]).push([["node-modules/uview-ui/components/u-badge/u-badge-create-component"],{},function(e){e("60795").createComponent(e(92732))}]);
},{isPage:false,isComponent:true,currentFile:'node-modules/uview-ui/components/u-badge/u-badge.js'});require("node-modules/uview-ui/components/u-badge/u-badge.js");