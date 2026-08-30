$gwx13_XC_12=function(_,_v,_n,_p,_s,_wp,_wl,$gwn,$gwl,$gwh,wh,$gstack,$gwrt,gra,grb,TestTest,wfor,_ca,_da,_r,_rz,_o,_oz,_1,_1z,_2,_2z,_m,_mz,nv_getDate,nv_getRegExp,nv_console,nv_parseInt,nv_parseFloat,nv_isNaN,nv_isFinite,nv_decodeURI,nv_decodeURIComponent,nv_encodeURI,nv_encodeURIComponent,$gdc,nv_JSON,_af,_gv,_ai,_grp,_gd,_gapi,$ixc,_ic,_w,_ev,_tsd){return function(path,global){
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
var z=__WXML_GLOBAL__.ops_set.$gwx13_XC_12 || [];
function gz$gwx13_XC_12_1(){
if( __WXML_GLOBAL__.ops_cached.$gwx13_XC_12_1)return __WXML_GLOBAL__.ops_cached.$gwx13_XC_12_1
__WXML_GLOBAL__.ops_cached.$gwx13_XC_12_1=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx13_XC_12_1);return __WXML_GLOBAL__.ops_cached.$gwx13_XC_12_1
}
__WXML_GLOBAL__.ops_set.$gwx13_XC_12=z;
__WXML_GLOBAL__.ops_init.$gwx13_XC_12=true;
var x=['./TUIKit/components/common/Icon.wxml'];d_[x[0]]={}
var m0=function(e,s,r,gg){
var z=gz$gwx13_XC_12_1()
return r
}
e_[x[0]]={f:m0,j:[],i:[],ti:[],ic:[]}
if(path&&e_[path]){
return function(env,dd,global){$gwxc=0;var root={"tag":"wx-page"};root.children=[]
;g="$gwx13_XC_12";var main=e_[path].f
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
}(__g.a,__g.b,__g.c,__g.d,__g.e,__g.f,__g.g,__g.h,__g.i,__g.j,__g.k,__g.l,__g.m,__g.n,__g.o,__g.p,__g.q,__g.r,__g.s,__g.t,__g.u,__g.v,__g.w,__g.x,__g.y,__g.z,__g.A,__g.B,__g.C,__g.D,__g.E,__g.F,__g.G,__g.H,__g.I,__g.J,__g.K,__g.L,__g.M,__g.N,__g.O,__g.P,__g.Q,__g.R,__g.S,__g.T,__g.U,__g.V,__g.W,__g.X,__g.Y,__g.Z,__g.aa);if(__vd_version_info__.delayedGwx||false)$gwx13_XC_12();	if (__vd_version_info__.delayedGwx) __wxAppCode__['TUIKit/components/common/Icon.wxml'] = [$gwx13_XC_12, './TUIKit/components/common/Icon.wxml'];else __wxAppCode__['TUIKit/components/common/Icon.wxml'] = $gwx13_XC_12( './TUIKit/components/common/Icon.wxml' );
	;__wxRoute = "TUIKit/components/common/Icon";__wxRouteBegin = true;__wxAppCurrentFile__="TUIKit/components/common/Icon.js";define("TUIKit/components/common/Icon.js",function(require,module,exports,window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){
"use strict";require("../../common/vendor.js"),(global.webpackChunkbanguo_supplier_uniapp=global.webpackChunkbanguo_supplier_uniapp||[]).push([["TUIKit/components/common/Icon"],{68713:function(e,i,n){n.r(i),n.d(i,{default:function(){return a}});var t=n(78071),o=n(85720),r={};r.props={file:{key:"file",required:!1,type:String,default:""},size:{key:"size",required:!1,type:String},width:{key:"width",required:!1,type:String,default:"20px"},height:{key:"height",required:!1,type:String,default:"20px"},hotAreaSize:{key:"hotAreaSize",required:!1,type:[Number,String]}},r.setup=function(e,i){var n=i.emit,r=e,u=(0,t.computed)((function(){if(r.hotAreaSize)return isNaN(Number(r.hotAreaSize))?String(r.hotAreaSize):"".concat(r.hotAreaSize,"px")})),p=(0,t.computed)((function(){return r.size?r.size:r.width})),a=(0,t.computed)((function(){return r.size?r.size:r.height}));return{isApp:o.isApp,isPC:o.isPC,props:r,iconHotAreaSize:u,iconWidth:p,iconHeight:a,handleImgClick:function(e){n("onClick",e)}}};var u=r,p=n(95201),a=(0,(n.n(p)(),n(18535)).default)(u,(function(){this.$createElement;this._self._c}),[],!1,null,"18105440",null,!1,void 0,void 0).exports},95201:function(){}}]),(global.webpackChunkbanguo_supplier_uniapp=global.webpackChunkbanguo_supplier_uniapp||[]).push([["TUIKit/components/common/Icon-create-component"],{},function(e){e("60795").createComponent(e(68713))}]);
},{isPage:false,isComponent:true,currentFile:'TUIKit/components/common/Icon.js'});require("TUIKit/components/common/Icon.js");