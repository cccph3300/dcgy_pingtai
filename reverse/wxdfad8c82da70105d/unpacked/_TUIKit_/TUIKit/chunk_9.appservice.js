$gwx13_XC_13=function(_,_v,_n,_p,_s,_wp,_wl,$gwn,$gwl,$gwh,wh,$gstack,$gwrt,gra,grb,TestTest,wfor,_ca,_da,_r,_rz,_o,_oz,_1,_1z,_2,_2z,_m,_mz,nv_getDate,nv_getRegExp,nv_console,nv_parseInt,nv_parseFloat,nv_isNaN,nv_isFinite,nv_decodeURI,nv_decodeURIComponent,nv_encodeURI,nv_encodeURIComponent,$gdc,nv_JSON,_af,_gv,_ai,_grp,_gd,_gapi,$ixc,_ic,_w,_ev,_tsd){return function(path,global){
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
var z=__WXML_GLOBAL__.ops_set.$gwx13_XC_13 || [];
function gz$gwx13_XC_13_1(){
if( __WXML_GLOBAL__.ops_cached.$gwx13_XC_13_1)return __WXML_GLOBAL__.ops_cached.$gwx13_XC_13_1
__WXML_GLOBAL__.ops_cached.$gwx13_XC_13_1=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[7],[3,'isOverlayShow']])
Z([3,'overlay-container _div data-v-5bb5fbf5 vue-ref'])
Z([3,'overlayDomRef'])
Z([[2,'+'],[[2,'+'],[[2,'+'],[1,'position:'],[[2,'?:'],[[6],[[7],[3,'props']],[3,'isFullScreen']],[1,'fixed'],[1,'absolute']]],[1,';']],[[2,'+'],[[2,'+'],[1,'z-index:'],[[6],[[7],[3,'props']],[3,'zIndex']]],[1,';']]])
Z([[6],[[7],[3,'props']],[3,'useMask']])
})(__WXML_GLOBAL__.ops_cached.$gwx13_XC_13_1);return __WXML_GLOBAL__.ops_cached.$gwx13_XC_13_1
}
__WXML_GLOBAL__.ops_set.$gwx13_XC_13=z;
__WXML_GLOBAL__.ops_init.$gwx13_XC_13=true;
var x=['./TUIKit/components/common/Overlay/index.wxml'];d_[x[0]]={}
var m0=function(e,s,r,gg){
var z=gz$gwx13_XC_13_1()
var oF1=_v()
_(r,oF1)
if(_oz(z,0,e,s,gg)){oF1.wxVkey=1
var fG1=_mz(z,'view',['class',1,'data-ref',1,'style',2],[],e,s,gg)
var cH1=_v()
_(fG1,cH1)
if(_oz(z,4,e,s,gg)){cH1.wxVkey=1
}
var hI1=_n('slot')
_(fG1,hI1)
cH1.wxXCkey=1
_(oF1,fG1)
}
oF1.wxXCkey=1
return r
}
e_[x[0]]={f:m0,j:[],i:[],ti:[],ic:[]}
if(path&&e_[path]){
return function(env,dd,global){$gwxc=0;var root={"tag":"wx-page"};root.children=[]
;g="$gwx13_XC_13";var main=e_[path].f
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
}(__g.a,__g.b,__g.c,__g.d,__g.e,__g.f,__g.g,__g.h,__g.i,__g.j,__g.k,__g.l,__g.m,__g.n,__g.o,__g.p,__g.q,__g.r,__g.s,__g.t,__g.u,__g.v,__g.w,__g.x,__g.y,__g.z,__g.A,__g.B,__g.C,__g.D,__g.E,__g.F,__g.G,__g.H,__g.I,__g.J,__g.K,__g.L,__g.M,__g.N,__g.O,__g.P,__g.Q,__g.R,__g.S,__g.T,__g.U,__g.V,__g.W,__g.X,__g.Y,__g.Z,__g.aa);if(__vd_version_info__.delayedGwx||false)$gwx13_XC_13();	if (__vd_version_info__.delayedGwx) __wxAppCode__['TUIKit/components/common/Overlay/index.wxml'] = [$gwx13_XC_13, './TUIKit/components/common/Overlay/index.wxml'];else __wxAppCode__['TUIKit/components/common/Overlay/index.wxml'] = $gwx13_XC_13( './TUIKit/components/common/Overlay/index.wxml' );
	;__wxRoute = "TUIKit/components/common/Overlay/index";__wxRouteBegin = true;__wxAppCurrentFile__="TUIKit/components/common/Overlay/index.js";define("TUIKit/components/common/Overlay/index.js",function(require,module,exports,window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){
"use strict";require("../../../common/vendor.js"),(global.webpackChunkbanguo_supplier_uniapp=global.webpackChunkbanguo_supplier_uniapp||[]).push([["TUIKit/components/common/Overlay/index"],{57773:function(e,n,u){u.r(n),u.d(n,{default:function(){return r}});var i=u(78071),t={};t.props={visible:{key:"visible",required:!1,type:Boolean,default:!0},zIndex:{key:"zIndex",required:!1,type:[Number,null],default:9999},useMask:{key:"useMask",required:!1,type:[Boolean,null],default:!0},maskColor:{key:"maskColor",required:!1,type:[String,null],default:"rgba(0, 0, 0, 0.6)"},isFullScreen:{key:"isFullScreen",required:!1,type:[Boolean,null],default:!0},width:{key:"width",required:!1,type:String,default:"auto"},height:{key:"height",required:!1,type:String,default:"auto"}},t.setup=function(e,n){var u=n.emit,t=e,l=(0,i.ref)(),o=(0,i.ref)(t.visible);return(0,i.watch)((function(){return t.visible}),(function(e){e?o.value=!0:setTimeout((function(){o.value=!1}),150)}),{immediate:!0}),Object.assign({props:t,overlayDomRef:l,isOverlayShow:o,onOverlayClick:function(){u("onOverlayClick")}},{overlayDomRef:l})};var l=t,o=u(94791),r=(0,(u.n(o)(),u(18535)).default)(l,(function(){this.$createElement;this._self._c}),[],!1,null,"5bb5fbf5",null,!1,void 0,void 0).exports},94791:function(){}}]),(global.webpackChunkbanguo_supplier_uniapp=global.webpackChunkbanguo_supplier_uniapp||[]).push([["TUIKit/components/common/Overlay/index-create-component"],{},function(e){e("60795").createComponent(e(57773))}]);
},{isPage:false,isComponent:true,currentFile:'TUIKit/components/common/Overlay/index.js'});require("TUIKit/components/common/Overlay/index.js");