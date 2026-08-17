import{c as u}from"./user-round-_0yEQCIM.js";import{z as r,h as a}from"./index-Czut2-hE.js";/**
 * @license lucide-vue-next v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const i=u("PlusIcon",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"M12 5v14",key:"s699le"}]]);function c(){return r("/products")}function p(t){return r("/products",{method:"POST",body:JSON.stringify(t)})}function f(t,e){return r(`/products/${t}`,{method:"PUT",body:JSON.stringify(e)})}function l(t){return r(`/products/${t}`,{method:"DELETE"})}const h=a("products",{state:()=>({products:[],loading:!1}),getters:{activeForMarket:t=>e=>t.products.filter(o=>o.supermarkets.some(s=>s.supermarket===e&&s.enabled))},actions:{async fetchProducts(){this.loading=!0;try{this.products=await c()}finally{this.loading=!1}}}});export{i as P,f as a,p as c,l as d,h as u};
