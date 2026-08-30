$gwx_XC_31=function(_,_v,_n,_p,_s,_wp,_wl,$gwn,$gwl,$gwh,wh,$gstack,$gwrt,gra,grb,TestTest,wfor,_ca,_da,_r,_rz,_o,_oz,_1,_1z,_2,_2z,_m,_mz,nv_getDate,nv_getRegExp,nv_console,nv_parseInt,nv_parseFloat,nv_isNaN,nv_isFinite,nv_decodeURI,nv_decodeURIComponent,nv_encodeURI,nv_encodeURIComponent,$gdc,nv_JSON,_af,_gv,_ai,_grp,_gd,_gapi,$ixc,_ic,_w,_ev,_tsd){return function(path,global){
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
var z=__WXML_GLOBAL__.ops_set.$gwx_XC_31 || [];
function gz$gwx_XC_31_1(){
if( __WXML_GLOBAL__.ops_cached.$gwx_XC_31_1)return __WXML_GLOBAL__.ops_cached.$gwx_XC_31_1
__WXML_GLOBAL__.ops_cached.$gwx_XC_31_1=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_XC_31_1);return __WXML_GLOBAL__.ops_cached.$gwx_XC_31_1
}
__WXML_GLOBAL__.ops_set.$gwx_XC_31=z;
__WXML_GLOBAL__.ops_init.$gwx_XC_31=true;
var x=['./node-modules/uview-ui/components/u-code/u-code.wxml'];d_[x[0]]={}
var m0=function(e,s,r,gg){
var z=gz$gwx_XC_31_1()
return r
}
e_[x[0]]={f:m0,j:[],i:[],ti:[],ic:[]}
if(path&&e_[path]){
return function(env,dd,global){$gwxc=0;var root={"tag":"wx-page"};root.children=[]
;g="$gwx_XC_31";var main=e_[path].f
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
}(__g.a,__g.b,__g.c,__g.d,__g.e,__g.f,__g.g,__g.h,__g.i,__g.j,__g.k,__g.l,__g.m,__g.n,__g.o,__g.p,__g.q,__g.r,__g.s,__g.t,__g.u,__g.v,__g.w,__g.x,__g.y,__g.z,__g.A,__g.B,__g.C,__g.D,__g.E,__g.F,__g.G,__g.H,__g.I,__g.J,__g.K,__g.L,__g.M,__g.N,__g.O,__g.P,__g.Q,__g.R,__g.S,__g.T,__g.U,__g.V,__g.W,__g.X,__g.Y,__g.Z,__g.aa);if(__vd_version_info__.delayedGwx||false)$gwx_XC_31();	if (__vd_version_info__.delayedGwx) __wxAppCode__['node-modules/uview-ui/components/u-code/u-code.wxml'] = [$gwx_XC_31, './node-modules/uview-ui/components/u-code/u-code.wxml'];else __wxAppCode__['node-modules/uview-ui/components/u-code/u-code.wxml'] = $gwx_XC_31( './node-modules/uview-ui/components/u-code/u-code.wxml' );
	;__wxRoute = "node-modules/uview-ui/components/u-code/u-code";__wxRouteBegin = true;__wxAppCurrentFile__="node-modules/uview-ui/components/u-code/u-code.js";define("node-modules/uview-ui/components/u-code/u-code.js",function(require,module,exports,window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){
"use strict";(global.webpackChunkbanguo_supplier_uniapp=global.webpackChunkbanguo_supplier_uniapp||[]).push([["node-modules/uview-ui/components/u-code/u-code"],{788:function(e,t,n){n.r(t),n.d(t,{default:function(){return o}});var i=n(3523),s=n(60795).default,u={name:"u-code",mixins:[s.$u.mpMixin,s.$u.mixin,i.default],data:function(){return{secNum:this.seconds,timer:null,canGetCode:!0}},mounted:function(){this.checkKeepRunning()},watch:{seconds:{immediate:!0,handler:function(e){this.secNum=e}}},methods:{checkKeepRunning:function(){var e=Number(s.getStorageSync(this.uniqueKey+"_$uCountDownTimestamp"));if(!e)return this.changeEvent(this.startText);var t=Math.floor(+new Date/1e3);this.keepRunning&&e&&e>t?(this.secNum=e-t,s.removeStorageSync(this.uniqueKey+"_$uCountDownTimestamp"),this.start()):this.changeEvent(this.startText)},start:function(){var e=this;this.timer&&(clearInterval(this.timer),this.timer=null),this.$emit("start"),this.canGetCode=!1,this.changeEvent(this.changeText.replace(/x|X/,this.secNum)),this.timer=setInterval((function(){--e.secNum?e.changeEvent(e.changeText.replace(/x|X/,e.secNum)):(clearInterval(e.timer),e.timer=null,e.changeEvent(e.endText),e.secNum=e.seconds,e.$emit("end"),e.canGetCode=!0)}),1e3),this.setTimeToStorage()},reset:function(){this.canGetCode=!0,clearInterval(this.timer),this.secNum=this.seconds,this.changeEvent(this.endText)},changeEvent:function(e){this.$emit("change",e)},setTimeToStorage:function(){if(this.keepRunning&&this.timer&&this.secNum>0&&this.secNum<=this.seconds){var e=Math.floor(+new Date/1e3);s.setStorage({key:this.uniqueKey+"_$uCountDownTimestamp",data:e+Number(this.secNum)})}}},beforeDestroy:function(){this.setTimeToStorage(),clearTimeout(this.timer),this.timer=null}},a=n(99889),o=(0,(n.n(a)(),n(18535)).default)(u,(function(){this.$createElement;this._self._c}),[],!1,null,"75cd6d19",null,!1,void 0,void 0).exports},99889:function(){}}]),(global.webpackChunkbanguo_supplier_uniapp=global.webpackChunkbanguo_supplier_uniapp||[]).push([["node-modules/uview-ui/components/u-code/u-code-create-component"],{},function(e){e("60795").createComponent(e(788))}]);
},{isPage:false,isComponent:true,currentFile:'node-modules/uview-ui/components/u-code/u-code.js'});require("node-modules/uview-ui/components/u-code/u-code.js");