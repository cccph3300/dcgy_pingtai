$gwx_XC_10=function(_,_v,_n,_p,_s,_wp,_wl,$gwn,$gwl,$gwh,wh,$gstack,$gwrt,gra,grb,TestTest,wfor,_ca,_da,_r,_rz,_o,_oz,_1,_1z,_2,_2z,_m,_mz,nv_getDate,nv_getRegExp,nv_console,nv_parseInt,nv_parseFloat,nv_isNaN,nv_isFinite,nv_decodeURI,nv_decodeURIComponent,nv_encodeURI,nv_encodeURIComponent,$gdc,nv_JSON,_af,_gv,_ai,_grp,_gd,_gapi,$ixc,_ic,_w,_ev,_tsd){return function(path,global){
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
var z=__WXML_GLOBAL__.ops_set.$gwx_XC_10 || [];
function gz$gwx_XC_10_1(){
if( __WXML_GLOBAL__.ops_cached.$gwx_XC_10_1)return __WXML_GLOBAL__.ops_cached.$gwx_XC_10_1
__WXML_GLOBAL__.ops_cached.$gwx_XC_10_1=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_XC_10_1);return __WXML_GLOBAL__.ops_cached.$gwx_XC_10_1
}
__WXML_GLOBAL__.ops_set.$gwx_XC_10=z;
__WXML_GLOBAL__.ops_init.$gwx_XC_10=true;
var x=['./node-modules/banguo-ui/components/checkbox-btns/checkbox-btns.wxml'];d_[x[0]]={}
var m0=function(e,s,r,gg){
var z=gz$gwx_XC_10_1()
return r
}
e_[x[0]]={f:m0,j:[],i:[],ti:[],ic:[]}
if(path&&e_[path]){
return function(env,dd,global){$gwxc=0;var root={"tag":"wx-page"};root.children=[]
;g="$gwx_XC_10";var main=e_[path].f
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
}(__g.a,__g.b,__g.c,__g.d,__g.e,__g.f,__g.g,__g.h,__g.i,__g.j,__g.k,__g.l,__g.m,__g.n,__g.o,__g.p,__g.q,__g.r,__g.s,__g.t,__g.u,__g.v,__g.w,__g.x,__g.y,__g.z,__g.A,__g.B,__g.C,__g.D,__g.E,__g.F,__g.G,__g.H,__g.I,__g.J,__g.K,__g.L,__g.M,__g.N,__g.O,__g.P,__g.Q,__g.R,__g.S,__g.T,__g.U,__g.V,__g.W,__g.X,__g.Y,__g.Z,__g.aa);if(__vd_version_info__.delayedGwx||false)$gwx_XC_10();	if (__vd_version_info__.delayedGwx) __wxAppCode__['node-modules/banguo-ui/components/checkbox-btns/checkbox-btns.wxml'] = [$gwx_XC_10, './node-modules/banguo-ui/components/checkbox-btns/checkbox-btns.wxml'];else __wxAppCode__['node-modules/banguo-ui/components/checkbox-btns/checkbox-btns.wxml'] = $gwx_XC_10( './node-modules/banguo-ui/components/checkbox-btns/checkbox-btns.wxml' );
	;__wxRoute = "node-modules/banguo-ui/components/checkbox-btns/checkbox-btns";__wxRouteBegin = true;__wxAppCurrentFile__="node-modules/banguo-ui/components/checkbox-btns/checkbox-btns.js";define("node-modules/banguo-ui/components/checkbox-btns/checkbox-btns.js",function(require,module,exports,window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){
"use strict";require("../../../../@babel/runtime/helpers/Arrayincludes"),require("../../../../@babel/runtime/helpers/Objectvalues"),(global.webpackChunkbanguo_supplier_uniapp=global.webpackChunkbanguo_supplier_uniapp||[]).push([["node-modules/banguo-ui/components/checkbox-btns/checkbox-btns"],{2183:function(){},77861:function(e,t,a){a.r(t),a.d(t,{default:function(){return u}});var i=a(87843),l=a(45776),n={name:"b-checkbox-btns",options:{styleIsolation:"shared",virtualHost:!0},props:{name:{type:String,default:"checkbox"},value:[String,Number,Array],data:{type:Array,default:function(){return[]}},labelKey:{type:String,default:"label"},valueKey:{type:String,default:"value"},multiple:{type:Boolean,default:!1},inverse:{type:Boolean,default:!0},size:{type:String,validator:function(e){return Object.values(l.SIZE).includes(e)},default:l.SIZE.NORMAL},shape:String,wrap:{type:Boolean,default:!0},plain:Boolean,scrollable:{type:Boolean,default:!0},scrollIntoViewOffset:{type:Number,default:-120},white:Boolean},data:function(){return{list:[],selectedMap:new Map}},computed:{_shape:function(){return this.shape||this.$checkboxBtnsShape},arrayValue:function(){return this.$utils.isArray(this.value)?this.value:[this.value]},hasValue:function(){return this.arrayValue.filter((function(e){return null!=e})).length>0}},watch:{value:function(){this.handleSelect()},data:{handler:function(){this.initList()},immediate:!0}},methods:{initList:function(){this.list=(0,i.default)(this.data),this.handleSelect()},isSelected:function(e){return this.selectedMap.has(e)},setSelect:function(e){var t=e[this.valueKey];this.isSelected(t)?(this.multiple||this.inverse)&&this.selectedMap.delete(t):(this.multiple||this.selectedMap.clear(),this.selectedMap.set(t,e)),this.$forceUpdate()},handleSelect:function(){var e=this;if(!this.hasValue)return this.selectedMap.clear(),void this.$forceUpdate();var t=this.$utils.isArray(this.value)?this.value:[this.value];this.selectedMap.clear(),this.list.forEach((function(a){t.includes(a[e.valueKey])&&e.setSelect(a)}))},handleChecked:function(e){this.setSelect(e),this.handleConfirm()},handleConfirm:function(){var e=(0,i.default)(this.selectedMap.keys()),t=(0,i.default)(this.selectedMap.values());this.$emit("input",this.multiple?e:e[0]),this.$emit("change",this.multiple?t:t[0])}}},s=a(2183),u=(0,(a.n(s)(),a(18535)).default)(n,(function(){var e=this,t=(e.$createElement,e._self._c,e.__map(e.list,(function(t,a){return{$orig:e.__get_orig(t),m0:e.isSelected(t[e.valueKey])}})));e.$mp.data=Object.assign({},{$root:{l0:t}})}),[],!1,null,"42aba39c",null,!1,void 0,void 0).exports}}]),(global.webpackChunkbanguo_supplier_uniapp=global.webpackChunkbanguo_supplier_uniapp||[]).push([["node-modules/banguo-ui/components/checkbox-btns/checkbox-btns-create-component"],{},function(e){e("60795").createComponent(e(77861))}]);
},{isPage:false,isComponent:true,currentFile:'node-modules/banguo-ui/components/checkbox-btns/checkbox-btns.js'});require("node-modules/banguo-ui/components/checkbox-btns/checkbox-btns.js");