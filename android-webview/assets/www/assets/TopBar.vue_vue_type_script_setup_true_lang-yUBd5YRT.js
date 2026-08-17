import{c as r}from"./user-round-B_2ym-WE.js";import{d as i,o as t,c as o,b as c,u as p,a,t as n,f as l,E as d}from"./index-CsM9_UgH.js";/**
 * @license lucide-vue-next v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const u=r("ChevronLeftIcon",[["path",{d:"m15 18-6-6 6-6",key:"1wnfg3"}]]),b={class:"topbar"},m={key:1,class:"topbar-spacer","aria-hidden":"true"},k={class:"topbar-title"},f={key:0},C=i({__name:"TopBar",props:{title:{},subtitle:{},back:{type:Boolean}},setup(h){return(e,s)=>(t(),o("header",b,[e.back?(t(),o("button",{key:0,class:"icon-button",type:"button",onClick:s[0]||(s[0]=_=>e.$router.back())},[c(p(u),{size:22})])):(t(),o("span",m)),a("div",k,[a("strong",null,n(e.title),1),e.subtitle?(t(),o("span",f,n(e.subtitle),1)):l("",!0)]),d(e.$slots,"right")]))}});export{C as _};
