var __wxAppData=__wxAppData||{};var __wxAppCode__=__wxAppCode__||{};var global=global||{};var __WXML_GLOBAL__=__WXML_GLOBAL__||{entrys:{},defines:{},modules:{},ops:[],wxs_nf_init:undefined,total_ops:0};var Component=Component||function(){};var definePlugin=definePlugin||function(){};var requirePlugin=requirePlugin||function(){};var Behavior=Behavior||function(){};var __vd_version_info__=__vd_version_info__||{};var __GWX_GLOBAL__=__GWX_GLOBAL__||{};if(this&&this.__g===undefined)Object.defineProperty(this,"__g",{configurable:false,enumerable:false,writable:false,value:function(){function D(e,t){if(typeof t!="undefined")e.children.push(t)}function S(e){if(typeof e!="undefined")return{tag:"virtual",wxKey:e,children:[]};return{tag:"virtual",children:[]}}function v(e){return{tag:"wx-"+e,attr:{},children:[],n:[],raw:{},generics:{}}}function e(e,t){t&&e.properities.push(t)}function t(e,t,r){return typeof e[r]!="undefined"?e[r]:t[r]}function u(e){console.warn("WXMLRT_"+g+":"+e)}function r(e,t){u(t+":-1:-1:-1: Template `"+e+"` is being called recursively, will be stop.")}var s=console.warn;var n=console.log;function o(){function e(){}e.prototype={hn:function(e,t){if(typeof e=="object"){var r=0;var n=false,o=false;for(var a in e){n=n|a==="__value__";o=o|a==="__wxspec__";r++;if(r>2)break}return r==2&&n&&o&&(t||e.__wxspec__!=="m"||this.hn(e.__value__)==="h")?"h":"n"}return"n"},nh:function(e,t){return{__value__:e,__wxspec__:t?t:true}},rv:function(e){return this.hn(e,true)==="n"?e:this.rv(e.__value__)},hm:function(e){if(typeof e=="object"){var t=0;var r=false,n=false;for(var o in e){r=r|o==="__value__";n=n|o==="__wxspec__";t++;if(t>2)break}return t==2&&r&&n&&(e.__wxspec__==="m"||this.hm(e.__value__))}return false}};return new e}var A=o();function T(e){var t=e.split("\n "+" "+" "+" ");for(var r=0;r<t.length;++r){if(0==r)continue;if(")"===t[r][t[r].length-1])t[r]=t[r].replace(/\s\(.*\)$/,"");else t[r]="at anonymous function"}return t.join("\n "+" "+" "+" ")}function a(M){function m(e,t,r,n,o){var a=false;var i=e[0][1];var p,u,l,f,v,c;switch(i){case"?:":p=x(e[1],t,r,n,o,a);l=M&&A.hn(p)==="h";f=A.rv(p)?x(e[2],t,r,n,o,a):x(e[3],t,r,n,o,a);f=l&&A.hn(f)==="n"?A.nh(f,"c"):f;return f;break;case"&&":p=x(e[1],t,r,n,o,a);l=M&&A.hn(p)==="h";f=A.rv(p)?x(e[2],t,r,n,o,a):A.rv(p);f=l&&A.hn(f)==="n"?A.nh(f,"c"):f;return f;break;case"||":p=x(e[1],t,r,n,o,a);l=M&&A.hn(p)==="h";f=A.rv(p)?A.rv(p):x(e[2],t,r,n,o,a);f=l&&A.hn(f)==="n"?A.nh(f,"c"):f;return f;break;case"+":case"*":case"/":case"%":case"|":case"^":case"&":case"===":case"==":case"!=":case"!==":case">=":case"<=":case">":case"<":case"<<":case">>":p=x(e[1],t,r,n,o,a);u=x(e[2],t,r,n,o,a);l=M&&(A.hn(p)==="h"||A.hn(u)==="h");switch(i){case"+":f=A.rv(p)+A.rv(u);break;case"*":f=A.rv(p)*A.rv(u);break;case"/":f=A.rv(p)/A.rv(u);break;case"%":f=A.rv(p)%A.rv(u);break;case"|":f=A.rv(p)|A.rv(u);break;case"^":f=A.rv(p)^A.rv(u);break;case"&":f=A.rv(p)&A.rv(u);break;case"===":f=A.rv(p)===A.rv(u);break;case"==":f=A.rv(p)==A.rv(u);break;case"!=":f=A.rv(p)!=A.rv(u);break;case"!==":f=A.rv(p)!==A.rv(u);break;case">=":f=A.rv(p)>=A.rv(u);break;case"<=":f=A.rv(p)<=A.rv(u);break;case">":f=A.rv(p)>A.rv(u);break;case"<":f=A.rv(p)<A.rv(u);break;case"<<":f=A.rv(p)<<A.rv(u);break;case">>":f=A.rv(p)>>A.rv(u);break;default:break}return l?A.nh(f,"c"):f;break;case"-":p=e.length===3?x(e[1],t,r,n,o,a):0;u=e.length===3?x(e[2],t,r,n,o,a):x(e[1],t,r,n,o,a);l=M&&(A.hn(p)==="h"||A.hn(u)==="h");f=l?A.rv(p)-A.rv(u):p-u;return l?A.nh(f,"c"):f;break;case"!":p=x(e[1],t,r,n,o,a);l=M&&A.hn(p)=="h";f=!A.rv(p);return l?A.nh(f,"c"):f;case"~":p=x(e[1],t,r,n,o,a);l=M&&A.hn(p)=="h";f=~A.rv(p);return l?A.nh(f,"c"):f;default:s("unrecognized op"+i)}}function x(e,t,r,n,o,a){var i=e[0];var p=false;if(typeof a!=="undefined")o.ap=a;if(typeof i==="object"){var u=i[0];var l,f,v,c,s,y,b,d,h,_,g;switch(u){case 2:return m(e,t,r,n,o);break;case 4:return x(e[1],t,r,n,o,p);break;case 5:switch(e.length){case 2:l=x(e[1],t,r,n,o,p);return M?[l]:[A.rv(l)];return[l];break;case 1:return[];break;default:l=x(e[1],t,r,n,o,p);v=x(e[2],t,r,n,o,p);l.push(M?v:A.rv(v));return l;break}break;case 6:l=x(e[1],t,r,n,o);var w=o.ap;h=A.hn(l)==="h";f=h?A.rv(l):l;o.is_affected|=h;if(M){if(f===null||typeof f==="undefined"){return h?A.nh(undefined,"e"):undefined}v=x(e[2],t,r,n,o,p);_=A.hn(v)==="h";c=_?A.rv(v):v;o.ap=w;o.is_affected|=_;if(c===null||typeof c==="undefined"||c==="__proto__"||c==="prototype"||c==="caller"){return h||_?A.nh(undefined,"e"):undefined}y=f[c];if(typeof y==="function"&&!w)y=undefined;g=A.hn(y)==="h";o.is_affected|=g;return h||_?g?y:A.nh(y,"e"):y}else{if(f===null||typeof f==="undefined"){return undefined}v=x(e[2],t,r,n,o,p);_=A.hn(v)==="h";c=_?A.rv(v):v;o.ap=w;o.is_affected|=_;if(c===null||typeof c==="undefined"||c==="__proto__"||c==="prototype"||c==="caller"){return undefined}y=f[c];if(typeof y==="function"&&!w)y=undefined;g=A.hn(y)==="h";o.is_affected|=g;return g?A.rv(y):y}case 7:switch(e[1][0]){case 11:o.is_affected|=A.hn(n)==="h";return n;case 3:b=A.rv(r);d=A.rv(t);v=e[1][1];if(n&&n.f&&n.f.hasOwnProperty(v)){l=n.f;o.ap=true}else{l=b&&b.hasOwnProperty(v)?r:d&&d.hasOwnProperty(v)?t:undefined}if(M){if(l){h=A.hn(l)==="h";f=h?A.rv(l):l;y=f[v];g=A.hn(y)==="h";o.is_affected|=h||g;y=h&&!g?A.nh(y,"e"):y;return y}}else{if(l){h=A.hn(l)==="h";f=h?A.rv(l):l;y=f[v];g=A.hn(y)==="h";o.is_affected|=h||g;return A.rv(y)}}return undefined}break;case 8:l={};l[e[1]]=x(e[2],t,r,n,o,p);return l;break;case 9:l=x(e[1],t,r,n,o,p);v=x(e[2],t,r,n,o,p);function O(e,t,r){var n,o;h=A.hn(e)==="h";_=A.hn(t)==="h";f=A.rv(e);c=A.rv(t);for(var a in c){if(r||!f.hasOwnProperty(a)){f[a]=M?_?A.nh(c[a],"e"):c[a]:A.rv(c[a])}}return e}var s=l;var j=true;if(typeof e[1][0]==="object"&&e[1][0][0]===10){l=v;v=s;j=false}if(typeof e[1][0]==="object"&&e[1][0][0]===10){var P={};return O(O(P,l,j),v,j)}else return O(l,v,j);break;case 10:l=x(e[1],t,r,n,o,p);l=M?l:A.rv(l);return l;break;case 12:var P;l=x(e[1],t,r,n,o);if(!o.ap){return M&&A.hn(l)==="h"?A.nh(P,"f"):P}var w=o.ap;v=x(e[2],t,r,n,o,p);o.ap=w;h=A.hn(l)==="h";_=N(v);f=A.rv(l);c=A.rv(v);snap_bb=K(c,"nv_");try{P=typeof f==="function"?K(f.apply(null,snap_bb)):undefined}catch(t){t.message=t.message.replace(/nv_/g,"");t.stack=t.stack.substring(0,t.stack.indexOf("\n",t.stack.lastIndexOf("at nv_")));t.stack=t.stack.replace(/\snv_/g," ");t.stack=T(t.stack);if(n.debugInfo){t.stack+="\n "+" "+" "+" at "+n.debugInfo[0]+":"+n.debugInfo[1]+":"+n.debugInfo[2];console.error(t)}P=undefined}return M&&(_||h)?A.nh(P,"f"):P}}else{if(i===3||i===1)return e[1];else if(i===11){var l="";for(var D=1;D<e.length;D++){var S=A.rv(x(e[D],t,r,n,o,p));l+=typeof S==="undefined"?"":S}return l}}}function e(e,t,r,n,o,a){if(e[0]=="11182016"){n.debugInfo=e[2];return x(e[1],t,r,n,o,a)}else{n.debugInfo=null;return x(e,t,r,n,o,a)}}return e}var f=a(true);var c=a(false);function i(e,t,r,n,o,a,i,p){{var u={is_affected:false};var l=f(t,r,n,o,u);if(JSON.stringify(l)!=JSON.stringify(a)||u.is_affected!=p){console.warn("A. "+e+" get result "+JSON.stringify(l)+", "+u.is_affected+", but "+JSON.stringify(a)+", "+p+" is expected")}}{var u={is_affected:false};var l=c(t,r,n,o,u);if(JSON.stringify(l)!=JSON.stringify(i)||u.is_affected!=p){console.warn("B. "+e+" get result "+JSON.stringify(l)+", "+u.is_affected+", but "+JSON.stringify(i)+", "+p+" is expected")}}}function y(e,t,r,n,o,a,i,p,u){var l=A.hn(e)==="n";var f=A.rv(n);var v=f.hasOwnProperty(i);var c=f.hasOwnProperty(p);var s=f[i];var y=f[p];var b=Object.prototype.toString.call(A.rv(e));var d=b[8];if(d==="N"&&b[10]==="l")d="X";var h;if(l){if(d==="A"){var _;for(var g=0;g<e.length;g++){f[i]=e[g];f[p]=l?g:A.nh(g,"h");_=A.rv(e[g]);var w=u&&_?u==="*this"?_:A.rv(_[u]):undefined;h=S(w);D(a,h);t(r,f,h,o)}}else if(d==="O"){var g=0;var _;for(var O in e){f[i]=e[O];f[p]=l?O:A.nh(O,"h");_=A.rv(e[O]);var w=u&&_?u==="*this"?_:A.rv(_[u]):undefined;h=S(w);D(a,h);t(r,f,h,o);g++}}else if(d==="S"){for(var g=0;g<e.length;g++){f[i]=e[g];f[p]=l?g:A.nh(g,"h");h=S(e[g]+g);D(a,h);t(r,f,h,o)}}else if(d==="N"){for(var g=0;g<e;g++){f[i]=g;f[p]=l?g:A.nh(g,"h");h=S(g);D(a,h);t(r,f,h,o)}}else{}}else{var j=A.rv(e);var _,P;if(d==="A"){for(var g=0;g<j.length;g++){P=j[g];P=A.hn(P)==="n"?A.nh(P,"h"):P;_=A.rv(P);f[i]=P;f[p]=l?g:A.nh(g,"h");var w=u&&_?u==="*this"?_:A.rv(_[u]):undefined;h=S(w);D(a,h);t(r,f,h,o)}}else if(d==="O"){var g=0;for(var O in j){P=j[O];P=A.hn(P)==="n"?A.nh(P,"h"):P;_=A.rv(P);f[i]=P;f[p]=l?O:A.nh(O,"h");var w=u&&_?u==="*this"?_:A.rv(_[u]):undefined;h=S(w);D(a,h);t(r,f,h,o);g++}}else if(d==="S"){for(var g=0;g<j.length;g++){P=A.nh(j[g],"h");f[i]=P;f[p]=l?g:A.nh(g,"h");h=S(e[g]+g);D(a,h);t(r,f,h,o)}}else if(d==="N"){for(var g=0;g<j;g++){P=A.nh(g,"h");f[i]=P;f[p]=l?g:A.nh(g,"h");h=S(g);D(a,h);t(r,f,h,o)}}else{}}if(v){f[i]=s}else{delete f[i]}if(c){f[p]=y}else{delete f[p]}}function N(e){if(A.hn(e)=="h")return true;if(typeof e!=="object")return false;for(var t in e){if(e.hasOwnProperty(t)){if(N(e[t]))return true}}return false}function b(e,t,r,n,o){var a=false;var i=K(n,"",2);if(o.ap&&i&&i.constructor===Function){t="$wxs:"+t;e.attr["$gdc"]=K}if(o.is_affected||N(n)){e.n.push(t);e.raw[t]=n}e.attr[t]=i}function d(e,t,r,n,o,a){a.opindex=r;var i={},p;var u=c(z[r],n,o,a,i);b(e,t,r,u,i)}function h(e,t,r,n,o,a,i){i.opindex=n;var p={},u;var l=c(e[n],o,a,i,p);b(t,r,n,l,p)}function p(e,t,r,n){n.opindex=e;var o={};var a=c(z[e],t,r,n,o);return a&&a.constructor===Function?undefined:a}function l(e,t,r,n,o){o.opindex=t;var a={};var i=c(e[t],r,n,o,a);return i&&i.constructor===Function?undefined:i}function _(e,t,r,n,o){var o=o||{};n.opindex=e;return f(z[e],t,r,n,o)}function w(e,t,r,n,o,a){var a=a||{};o.opindex=t;return f(e[t],r,n,o,a)}function O(e,t,r,n,o,a,i,p,u){var l={};var f=_(e,r,n,o);y(f,t,r,n,o,a,i,p,u)}function j(e,t,r,n,o,a,i,p,u,l){var f={};var v=w(e,t,n,o,a);y(v,r,n,o,a,i,p,u,l)}function P(e,t,r,n,o,a){var i=v(e);var p=0;for(var u=0;u<t.length;u+=2){if(p+t[u+1]<0){i.attr[t[u]]=true}else{d(i,t[u],p+t[u+1],n,o,a);if(p===0)p=t[u+1]}}for(var u=0;u<r.length;u+=2){if(p+r[u+1]<0){i.generics[r[u]]=""}else{var l=c(z[p+r[u+1]],n,o,a);if(l!="")l="wx-"+l;i.generics[r[u]]=l;if(p===0)p=r[u+1]}}return i}function M(e,t,r,n,o,a,i){var p=v(t);var u=0;for(var l=0;l<r.length;l+=2){if(u+r[l+1]<0){p.attr[r[l]]=true}else{h(e,p,r[l],u+r[l+1],o,a,i);if(u===0)u=r[l+1]}}for(var l=0;l<n.length;l+=2){if(u+n[l+1]<0){p.generics[n[l]]=""}else{var f=c(e[u+n[l+1]],o,a,i);if(f!="")f="wx-"+f;p.generics[n[l]]=f;if(u===0)u=n[l+1]}}return p}var m=function(){if(typeof __WXML_GLOBAL__==="undefined"||undefined===__WXML_GLOBAL__.wxs_nf_init){x();C();k();U();I();L();E();R();F()}if(typeof __WXML_GLOBAL__!=="undefined")__WXML_GLOBAL__.wxs_nf_init=true};var x=function(){Object.defineProperty(Object.prototype,"nv_constructor",{writable:true,value:"Object"});Object.defineProperty(Object.prototype,"nv_toString",{writable:true,value:function(){return"[object Object]"}})};var C=function(){Object.defineProperty(Function.prototype,"nv_constructor",{writable:true,value:"Function"});Object.defineProperty(Function.prototype,"nv_length",{get:function(){return this.length},set:function(){}});Object.defineProperty(Function.prototype,"nv_toString",{writable:true,value:function(){return"[function Function]"}})};var k=function(){Object.defineProperty(Array.prototype,"nv_toString",{writable:true,value:function(){return this.nv_join()}});Object.defineProperty(Array.prototype,"nv_join",{writable:true,value:function(e){e=undefined==e?",":e;var t="";for(var r=0;r<this.length;++r){if(0!=r)t+=e;if(null==this[r]||undefined==this[r])t+="";else if(typeof this[r]=="function")t+=this[r].nv_toString();else if(typeof this[r]=="object"&&this[r].nv_constructor==="Array")t+=this[r].nv_join();else t+=this[r].toString()}return t}});Object.defineProperty(Array.prototype,"nv_constructor",{writable:true,value:"Array"});Object.defineProperty(Array.prototype,"nv_concat",{writable:true,value:Array.prototype.concat});Object.defineProperty(Array.prototype,"nv_pop",{writable:true,value:Array.prototype.pop});Object.defineProperty(Array.prototype,"nv_push",{writable:true,value:Array.prototype.push});Object.defineProperty(Array.prototype,"nv_reverse",{writable:true,value:Array.prototype.reverse});Object.defineProperty(Array.prototype,"nv_shift",{writable:true,value:Array.prototype.shift});Object.defineProperty(Array.prototype,"nv_slice",{writable:true,value:Array.prototype.slice});Object.defineProperty(Array.prototype,"nv_sort",{writable:true,value:Array.prototype.sort});Object.defineProperty(Array.prototype,"nv_splice",{writable:true,value:Array.prototype.splice});Object.defineProperty(Array.prototype,"nv_unshift",{writable:true,value:Array.prototype.unshift});Object.defineProperty(Array.prototype,"nv_indexOf",{writable:true,value:Array.prototype.indexOf});Object.defineProperty(Array.prototype,"nv_lastIndexOf",{writable:true,value:Array.prototype.lastIndexOf});Object.defineProperty(Array.prototype,"nv_every",{writable:true,value:Array.prototype.every});Object.defineProperty(Array.prototype,"nv_some",{writable:true,value:Array.prototype.some});Object.defineProperty(Array.prototype,"nv_forEach",{writable:true,value:Array.prototype.forEach});Object.defineProperty(Array.prototype,"nv_map",{writable:true,value:Array.prototype.map});Object.defineProperty(Array.prototype,"nv_filter",{writable:true,value:Array.prototype.filter});Object.defineProperty(Array.prototype,"nv_reduce",{writable:true,value:Array.prototype.reduce});Object.defineProperty(Array.prototype,"nv_reduceRight",{writable:true,value:Array.prototype.reduceRight});Object.defineProperty(Array.prototype,"nv_length",{get:function(){return this.length},set:function(e){this.length=e}})};var U=function(){Object.defineProperty(String.prototype,"nv_constructor",{writable:true,value:"String"});Object.defineProperty(String.prototype,"nv_toString",{writable:true,value:String.prototype.toString});Object.defineProperty(String.prototype,"nv_valueOf",{writable:true,value:String.prototype.valueOf});Object.defineProperty(String.prototype,"nv_charAt",{writable:true,value:String.prototype.charAt});Object.defineProperty(String.prototype,"nv_charCodeAt",{writable:true,value:String.prototype.charCodeAt});Object.defineProperty(String.prototype,"nv_concat",{writable:true,value:String.prototype.concat});Object.defineProperty(String.prototype,"nv_indexOf",{writable:true,value:String.prototype.indexOf});Object.defineProperty(String.prototype,"nv_lastIndexOf",{writable:true,value:String.prototype.lastIndexOf});Object.defineProperty(String.prototype,"nv_localeCompare",{writable:true,value:String.prototype.localeCompare});Object.defineProperty(String.prototype,"nv_match",{writable:true,value:String.prototype.match});Object.defineProperty(String.prototype,"nv_replace",{writable:true,value:String.prototype.replace});Object.defineProperty(String.prototype,"nv_search",{writable:true,value:String.prototype.search});Object.defineProperty(String.prototype,"nv_slice",{writable:true,value:String.prototype.slice});Object.defineProperty(String.prototype,"nv_split",{writable:true,value:String.prototype.split});Object.defineProperty(String.prototype,"nv_substring",{writable:true,value:String.prototype.substring});Object.defineProperty(String.prototype,"nv_toLowerCase",{writable:true,value:String.prototype.toLowerCase});Object.defineProperty(String.prototype,"nv_toLocaleLowerCase",{writable:true,value:String.prototype.toLocaleLowerCase});Object.defineProperty(String.prototype,"nv_toUpperCase",{writable:true,value:String.prototype.toUpperCase});Object.defineProperty(String.prototype,"nv_toLocaleUpperCase",{writable:true,value:String.prototype.toLocaleUpperCase});Object.defineProperty(String.prototype,"nv_trim",{writable:true,value:String.prototype.trim});Object.defineProperty(String.prototype,"nv_length",{get:function(){return this.length},set:function(e){this.length=e}})};var I=function(){Object.defineProperty(Boolean.prototype,"nv_constructor",{writable:true,value:"Boolean"});Object.defineProperty(Boolean.prototype,"nv_toString",{writable:true,value:Boolean.prototype.toString});Object.defineProperty(Boolean.prototype,"nv_valueOf",{writable:true,value:Boolean.prototype.valueOf})};var L=function(){Object.defineProperty(Number,"nv_MAX_VALUE",{writable:false,value:Number.MAX_VALUE});Object.defineProperty(Number,"nv_MIN_VALUE",{writable:false,value:Number.MIN_VALUE});Object.defineProperty(Number,"nv_NEGATIVE_INFINITY",{writable:false,value:Number.NEGATIVE_INFINITY});Object.defineProperty(Number,"nv_POSITIVE_INFINITY",{writable:false,value:Number.POSITIVE_INFINITY});Object.defineProperty(Number.prototype,"nv_constructor",{writable:true,value:"Number"});Object.defineProperty(Number.prototype,"nv_toString",{writable:true,value:Number.prototype.toString});Object.defineProperty(Number.prototype,"nv_toLocaleString",{writable:true,value:Number.prototype.toLocaleString});Object.defineProperty(Number.prototype,"nv_valueOf",{writable:true,value:Number.prototype.valueOf});Object.defineProperty(Number.prototype,"nv_toFixed",{writable:true,value:Number.prototype.toFixed});Object.defineProperty(Number.prototype,"nv_toExponential",{writable:true,value:Number.prototype.toExponential});Object.defineProperty(Number.prototype,"nv_toPrecision",{writable:true,value:Number.prototype.toPrecision})};var E=function(){Object.defineProperty(Math,"nv_E",{writable:false,value:Math.E});Object.defineProperty(Math,"nv_LN10",{writable:false,value:Math.LN10});Object.defineProperty(Math,"nv_LN2",{writable:false,value:Math.LN2});Object.defineProperty(Math,"nv_LOG2E",{writable:false,value:Math.LOG2E});Object.defineProperty(Math,"nv_LOG10E",{writable:false,value:Math.LOG10E});Object.defineProperty(Math,"nv_PI",{writable:false,value:Math.PI});Object.defineProperty(Math,"nv_SQRT1_2",{writable:false,value:Math.SQRT1_2});Object.defineProperty(Math,"nv_SQRT2",{writable:false,value:Math.SQRT2});Object.defineProperty(Math,"nv_abs",{writable:false,value:Math.abs});Object.defineProperty(Math,"nv_acos",{writable:false,value:Math.acos});Object.defineProperty(Math,"nv_asin",{writable:false,value:Math.asin});Object.defineProperty(Math,"nv_atan",{writable:false,value:Math.atan});Object.defineProperty(Math,"nv_atan2",{writable:false,value:Math.atan2});Object.defineProperty(Math,"nv_ceil",{writable:false,value:Math.ceil});Object.defineProperty(Math,"nv_cos",{writable:false,value:Math.cos});Object.defineProperty(Math,"nv_exp",{writable:false,value:Math.exp});Object.defineProperty(Math,"nv_floor",{writable:false,value:Math.floor});Object.defineProperty(Math,"nv_log",{writable:false,value:Math.log});Object.defineProperty(Math,"nv_max",{writable:false,value:Math.max});Object.defineProperty(Math,"nv_min",{writable:false,value:Math.min});Object.defineProperty(Math,"nv_pow",{writable:false,value:Math.pow});Object.defineProperty(Math,"nv_random",{writable:false,value:Math.random});Object.defineProperty(Math,"nv_round",{writable:false,value:Math.round});Object.defineProperty(Math,"nv_sin",{writable:false,value:Math.sin});Object.defineProperty(Math,"nv_sqrt",{writable:false,value:Math.sqrt});Object.defineProperty(Math,"nv_tan",{writable:false,value:Math.tan})};var R=function(){Object.defineProperty(Date.prototype,"nv_constructor",{writable:true,value:"Date"});Object.defineProperty(Date,"nv_parse",{writable:true,value:Date.parse});Object.defineProperty(Date,"nv_UTC",{writable:true,value:Date.UTC});Object.defineProperty(Date,"nv_now",{writable:true,value:Date.now});Object.defineProperty(Date.prototype,"nv_toString",{writable:true,value:Date.prototype.toString});Object.defineProperty(Date.prototype,"nv_toDateString",{writable:true,value:Date.prototype.toDateString});Object.defineProperty(Date.prototype,"nv_toTimeString",{writable:true,value:Date.prototype.toTimeString});Object.defineProperty(Date.prototype,"nv_toLocaleString",{writable:true,value:Date.prototype.toLocaleString});Object.defineProperty(Date.prototype,"nv_toLocaleDateString",{writable:true,value:Date.prototype.toLocaleDateString});Object.defineProperty(Date.prototype,"nv_toLocaleTimeString",{writable:true,value:Date.prototype.toLocaleTimeString});Object.defineProperty(Date.prototype,"nv_valueOf",{writable:true,value:Date.prototype.valueOf});Object.defineProperty(Date.prototype,"nv_getTime",{writable:true,value:Date.prototype.getTime});Object.defineProperty(Date.prototype,"nv_getFullYear",{writable:true,value:Date.prototype.getFullYear});Object.defineProperty(Date.prototype,"nv_getUTCFullYear",{writable:true,value:Date.prototype.getUTCFullYear});Object.defineProperty(Date.prototype,"nv_getMonth",{writable:true,value:Date.prototype.getMonth});Object.defineProperty(Date.prototype,"nv_getUTCMonth",{writable:true,value:Date.prototype.getUTCMonth});Object.defineProperty(Date.prototype,"nv_getDate",{writable:true,value:Date.prototype.getDate});Object.defineProperty(Date.prototype,"nv_getUTCDate",{writable:true,value:Date.prototype.getUTCDate});Object.defineProperty(Date.prototype,"nv_getDay",{writable:true,value:Date.prototype.getDay});Object.defineProperty(Date.prototype,"nv_getUTCDay",{writable:true,value:Date.prototype.getUTCDay});Object.defineProperty(Date.prototype,"nv_getHours",{writable:true,value:Date.prototype.getHours});Object.defineProperty(Date.prototype,"nv_getUTCHours",{writable:true,value:Date.prototype.getUTCHours});Object.defineProperty(Date.prototype,"nv_getMinutes",{writable:true,value:Date.prototype.getMinutes});Object.defineProperty(Date.prototype,"nv_getUTCMinutes",{writable:true,value:Date.prototype.getUTCMinutes});Object.defineProperty(Date.prototype,"nv_getSeconds",{writable:true,value:Date.prototype.getSeconds});Object.defineProperty(Date.prototype,"nv_getUTCSeconds",{writable:true,value:Date.prototype.getUTCSeconds});Object.defineProperty(Date.prototype,"nv_getMilliseconds",{writable:true,value:Date.prototype.getMilliseconds});Object.defineProperty(Date.prototype,"nv_getUTCMilliseconds",{writable:true,value:Date.prototype.getUTCMilliseconds});Object.defineProperty(Date.prototype,"nv_getTimezoneOffset",{writable:true,value:Date.prototype.getTimezoneOffset});Object.defineProperty(Date.prototype,"nv_setTime",{writable:true,value:Date.prototype.setTime});Object.defineProperty(Date.prototype,"nv_setMilliseconds",{writable:true,value:Date.prototype.setMilliseconds});Object.defineProperty(Date.prototype,"nv_setUTCMilliseconds",{writable:true,value:Date.prototype.setUTCMilliseconds});Object.defineProperty(Date.prototype,"nv_setSeconds",{writable:true,value:Date.prototype.setSeconds});Object.defineProperty(Date.prototype,"nv_setUTCSeconds",{writable:true,value:Date.prototype.setUTCSeconds});Object.defineProperty(Date.prototype,"nv_setMinutes",{writable:true,value:Date.prototype.setMinutes});Object.defineProperty(Date.prototype,"nv_setUTCMinutes",{writable:true,value:Date.prototype.setUTCMinutes});Object.defineProperty(Date.prototype,"nv_setHours",{writable:true,value:Date.prototype.setHours});Object.defineProperty(Date.prototype,"nv_setUTCHours",{writable:true,value:Date.prototype.setUTCHours});Object.defineProperty(Date.prototype,"nv_setDate",{writable:true,value:Date.prototype.setDate});Object.defineProperty(Date.prototype,"nv_setUTCDate",{writable:true,value:Date.prototype.setUTCDate});Object.defineProperty(Date.prototype,"nv_setMonth",{writable:true,value:Date.prototype.setMonth});Object.defineProperty(Date.prototype,"nv_setUTCMonth",{writable:true,value:Date.prototype.setUTCMonth});Object.defineProperty(Date.prototype,"nv_setFullYear",{writable:true,value:Date.prototype.setFullYear});Object.defineProperty(Date.prototype,"nv_setUTCFullYear",{writable:true,value:Date.prototype.setUTCFullYear});Object.defineProperty(Date.prototype,"nv_toUTCString",{writable:true,value:Date.prototype.toUTCString});Object.defineProperty(Date.prototype,"nv_toISOString",{writable:true,value:Date.prototype.toISOString});Object.defineProperty(Date.prototype,"nv_toJSON",{writable:true,value:Date.prototype.toJSON})};var F=function(){Object.defineProperty(RegExp.prototype,"nv_constructor",{writable:true,value:"RegExp"});Object.defineProperty(RegExp.prototype,"nv_exec",{writable:true,value:RegExp.prototype.exec});Object.defineProperty(RegExp.prototype,"nv_test",{writable:true,value:RegExp.prototype.test});Object.defineProperty(RegExp.prototype,"nv_toString",{writable:true,value:RegExp.prototype.toString});Object.defineProperty(RegExp.prototype,"nv_source",{get:function(){return this.source},set:function(){}});Object.defineProperty(RegExp.prototype,"nv_global",{get:function(){return this.global},set:function(){}});Object.defineProperty(RegExp.prototype,"nv_ignoreCase",{get:function(){return this.ignoreCase},set:function(){}});Object.defineProperty(RegExp.prototype,"nv_multiline",{get:function(){return this.multiline},set:function(){}});Object.defineProperty(RegExp.prototype,"nv_lastIndex",{get:function(){return this.lastIndex},set:function(e){this.lastIndex=e}})};m();var J=function(){var e=Array.prototype.slice.call(arguments);e.unshift(Date);return new(Function.prototype.bind.apply(Date,e))};var B=function(){var e=Array.prototype.slice.call(arguments);e.unshift(RegExp);return new(Function.prototype.bind.apply(RegExp,e))};var Y={};Y.nv_log=function(){var e="WXSRT:";for(var t=0;t<arguments.length;++t)e+=arguments[t]+" ";console.log(e)};var G=parseInt,X=parseFloat,H=isNaN,V=isFinite,$=decodeURI,W=decodeURIComponent,Q=encodeURI,q=encodeURIComponent;function K(e,t,r){e=A.rv(e);if(e===null||e===undefined)return e;if(typeof e==="string"||typeof e==="boolean"||typeof e==="number")return e;if(e.constructor===Object){var n={};for(var o in e)if(Object.prototype.hasOwnProperty.call(e,o))if(undefined===t)n[o.substring(3)]=K(e[o],t,r);else n[t+o]=K(e[o],t,r);return n}if(e.constructor===Array){var n=[];for(var a=0;a<e.length;a++)n.push(K(e[a],t,r));return n}if(e.constructor===Date){var n=new Date;n.setTime(e.getTime());return n}if(e.constructor===RegExp){var i="";if(e.global)i+="g";if(e.ignoreCase)i+="i";if(e.multiline)i+="m";return new RegExp(e.source,i)}if(r&&typeof e==="function"){if(r==1)return K(e(),undefined,2);if(r==2)return e}return null}var Z={};Z.nv_stringify=function(e){JSON.stringify(e);return JSON.stringify(K(e))};Z.nv_parse=function(e){if(e===undefined)return undefined;var t=JSON.parse(e);return K(t,"nv_")};function ee(e,t,r,n){e.extraAttr={t_action:t,t_rawid:r};if(typeof n!="undefined")e.extraAttr.t_cid=n}function te(){if(typeof __globalThis.__webview_engine_version__=="undefined")return 0;return __globalThis.__webview_engine_version__}function re(e,t,r,n,o,a){var i=ne(t,r,n);if(i)e.push(i);else{e.push("");u(n+":import:"+o+":"+a+": Path `"+t+"` not found from `"+n+"`.")}}function ne(e,t,r){if(e[0]!="/"){var n=r.split("/");n.pop();var o=e.split("/");for(var a=0;a<o.length;a++){if(o[a]=="..")n.pop();else if(!o[a]||o[a]==".")continue;else n.push(o[a])}e=n.join("/")}if(r[0]=="."&&e[0]=="/")e="."+e;if(t[e])return e;if(t[e+".wxml"])return e+".wxml"}function oe(e,t,r,n){if(!t)return;if(n[e][t])return n[e][t];for(var o=r[e].i.length-1;o>=0;o--){if(r[e].i[o]&&n[r[e].i[o]][t])return n[r[e].i[o]][t]}for(var o=r[e].ti.length-1;o>=0;o--){var a=ne(r[e].ti[o],r,e);if(a&&n[a][t])return n[a][t]}var i=ae(r,e);for(var o=0;o<i.length;o++){if(i[o]&&n[i[o]][t])return n[i[o]][t]}for(var p=r[e].j.length-1;p>=0;p--)if(r[e].j[p]){for(var a=r[r[e].j[p]].ti.length-1;a>=0;a--){var u=ne(r[r[e].j[p]].ti[a],r,e);if(u&&n[u][t]){return n[u][t]}}}}function ae(e,t){if(!t)return[];if($gaic[t]){return $gaic[t]}var r=[],n=[],o=0,a=0,i={},p={};n.push(t);p[t]=true;a++;while(o<a){var u=n[o++];for(var l=0;l<e[u].ic.length;l++){var f=e[u].ic[l];var v=ne(f,e,u);if(v&&!p[v]){p[v]=true;n.push(v);a++}}for(var l=0;u!=t&&l<e[u].ti.length;l++){var c=e[u].ti[l];var s=ne(c,e,u);if(s&&!i[s]){i[s]=true;r.push(s)}}}$gaic[t]=r;return r}var ie={};function pe(e,t,r,n,o,a,i){var p=ne(e,t,r);t[r].j.push(p);if(p){if(ie[p]){u("-1:include:-1:-1: `"+e+"` is being included in a loop, will be stop.");return}ie[p]=true;try{t[p].f(n,o,a,i)}catch(n){}ie[p]=false}else{u(r+":include:-1:-1: Included path `"+e+"` not found from `"+r+"`.")}}function ue(e,t,r,n){u(t+":template:"+r+":"+n+": Template `"+e+"` not found.")}function le(e){var t=false;delete e.properities;delete e.n;if(e.children){do{t=false;var r=[];for(var n=0;n<e.children.length;n++){var o=e.children[n];if(o.tag=="virtual"){t=true;for(var a=0;o.children&&a<o.children.length;a++){r.push(o.children[a])}}else{r.push(o)}}e.children=r}while(t);for(var n=0;n<e.children.length;n++){le(e.children[n])}}return e}function fe(e){if(e.tag=="wx-wx-scope"){e.tag="virtual";e.wxCkey="11";e["wxScopeData"]=e.attr["wx:scope-data"];delete e.n;delete e.raw;delete e.generics;delete e.attr}for(var t=0;e.children&&t<e.children.length;t++){fe(e.children[t])}return e}return{a:D,b:S,c:v,d:e,e:t,f:u,g:r,h:s,i:n,j:o,k:A,l:T,m:a,n:f,o:c,p:i,q:y,r:N,s:b,t:d,u:h,v:p,w:l,x:_,y:w,z:O,A:j,B:P,C:M,D:J,E:B,F:Y,G:G,H:X,I:H,J:V,K:$,L:W,M:Q,N:q,O:K,P:Z,Q:ee,R:te,S:re,T:ne,U:oe,V:ae,W:ie,X:pe,Y:ue,Z:le,aa:fe}}()});Object.freeze(__g);g="";	__wxAppCode__['sub-pages/auth/login.json'] = {"navigationStyle":"custom","usingComponents":{"privacy-auth-popup":"/components/privacy-auth-popup"}};
		__wxAppCode__['sub-pages/auth/merchant.json'] = {"navigationStyle":"custom","usingComponents":{"privacy-auth-popup":"/components/privacy-auth-popup"}};
		__wxAppCode__['sub-pages/auth/privacy-policy.json'] = {"navigationBarTitleText":"隐私协议","navigationBarBackgroundColor":"#FFFFFF","usingComponents":{"privacy-auth-popup":"/components/privacy-auth-popup"}};
		__wxAppCode__['sub-pages/auth/register.json'] = {"navigationBarTitleText":"供应商注册","navigationBarBackgroundColor":"#FFFFFF","usingComponents":{"privacy-auth-popup":"/components/privacy-auth-popup"}};
	;var __WXML_DEP__=__WXML_DEP__||{};;var __LAZY_CODE_LOADING_CHUNK_MAP__=__LAZY_CODE_LOADING_CHUNK_MAP__||{};[['sub-pages/auth/chunk_0',['sub-pages/auth/login',]],['sub-pages/auth/chunk_1',['sub-pages/auth/merchant',]],['sub-pages/auth/chunk_2',['sub-pages/auth/privacy-policy',]],['sub-pages/auth/chunk_3',['sub-pages/auth/register',]],].forEach(function(a){(a[1]||[]).forEach(function(b){__LAZY_CODE_LOADING_CHUNK_MAP__[b]=__LAZY_CODE_LOADING_CHUNK_MAP__[b]||a[0]||''});});/*v0.5vv_20211229_syb_scopedata*/global.__wcc_version__='v0.5vv_20211229_syb_scopedata';global.__wcc_version_info__={"customComponents":true,"fixZeroRpx":true,"propValueDeepCopy":false};
var $gwxc
var $gaic={}
$gwx0=function(_,_v,_n,_p,_s,_wp,_wl,$gwn,$gwl,$gwh,wh,$gstack,$gwrt,gra,grb,TestTest,wfor,_ca,_da,_r,_rz,_o,_oz,_1,_1z,_2,_2z,_m,_mz,nv_getDate,nv_getRegExp,nv_console,nv_parseInt,nv_parseFloat,nv_isNaN,nv_isFinite,nv_decodeURI,nv_decodeURIComponent,nv_encodeURI,nv_encodeURIComponent,$gdc,nv_JSON,_af,_gv,_ai,_grp,_gd,_gapi,$ixc,_ic,_w,_ev,_tsd){return function(path,global){
if(typeof global==='undefined'){if (typeof __GWX_GLOBAL__==='undefined')global={};else global=__GWX_GLOBAL__;}if(typeof __WXML_GLOBAL__ === 'undefined') {__WXML_GLOBAL__={};
}__WXML_GLOBAL__.modules = __WXML_GLOBAL__.modules || {};
if (typeof $gwx === 'function') $gwx('init', global);
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
var z=__WXML_GLOBAL__.ops_set.$gwx0 || [];
__WXML_GLOBAL__.ops_set.$gwx0=z;
__WXML_GLOBAL__.ops_init.$gwx0=true;
var nv_require=function(){var nnm={};var nom={};return function(n){if(n[0]==='p'&&n[1]==='_'&&f_[n.slice(2)])return f_[n.slice(2)];return function(){if(!nnm[n]) return undefined;try{if(!nom[n])nom[n]=nnm[n]();return nom[n];}catch(e){e.message=e.message.replace(/nv_/g,'');var tmp = e.stack.substring(0,e.stack.lastIndexOf(n));e.stack = tmp.substring(0,tmp.lastIndexOf('\n'));e.stack = e.stack.replace(/\snv_/g,' ');e.stack = $gstack(e.stack);e.stack += '\n    at ' + n.substring(2);console.error(e);}
}}}()
var x=[];if(path&&e_[path]){
return function(env,dd,global){$gwxc=0;var root={"tag":"wx-page"};root.children=[]
;g="$gwx0";var main=e_[path].f
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
}(__g.a,__g.b,__g.c,__g.d,__g.e,__g.f,__g.g,__g.h,__g.i,__g.j,__g.k,__g.l,__g.m,__g.n,__g.o,__g.p,__g.q,__g.r,__g.s,__g.t,__g.u,__g.v,__g.w,__g.x,__g.y,__g.z,__g.A,__g.B,__g.C,__g.D,__g.E,__g.F,__g.G,__g.H,__g.I,__g.J,__g.K,__g.L,__g.M,__g.N,__g.O,__g.P,__g.Q,__g.R,__g.S,__g.T,__g.U,__g.V,__g.W,__g.X,__g.Y,__g.Z,__g.aa);if(__vd_version_info__.delayedGwx||true)$gwx0();;__wxRoute = undefined;__wxRouteBegin = undefined;__wxAppCurrentFile__=undefined;define("sub-pages/auth/common/vendor.js",function(require,module,exports,window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){
(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["sub-pages/auth/common/vendor"],{

/***/ 61:
/*!*************************************************************!*\
  !*** E:/project/yhlc-v1.0/agent-uniapp/config/appConfig.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
/*项目公用引入配置*/
var appConfig = {
  version: "1.0.0",
  // 版本号 1.0.0 code 对应 100
  platform: "WX",
  // 当前运行平台 WX-微信 android-安卓平台 ios-苹果平台 H5-Html5平台
  projectTitle: 'kxmall',
  // 项目名称
  subtitle: '骑手端' // 二级标题
};
var _default = appConfig;
exports.default = _default;

/***/ })

}]);
//# sourceMappingURL=../../../../.sourcemap/mp-weixin/sub-pages/auth/common/vendor.js.map
},{isPage:false,isComponent:false,currentFile:'sub-pages/auth/common/vendor.js'});$gwx0_XC_0=function(_,_v,_n,_p,_s,_wp,_wl,$gwn,$gwl,$gwh,wh,$gstack,$gwrt,gra,grb,TestTest,wfor,_ca,_da,_r,_rz,_o,_oz,_1,_1z,_2,_2z,_m,_mz,nv_getDate,nv_getRegExp,nv_console,nv_parseInt,nv_parseFloat,nv_isNaN,nv_isFinite,nv_decodeURI,nv_decodeURIComponent,nv_encodeURI,nv_encodeURIComponent,$gdc,nv_JSON,_af,_gv,_ai,_grp,_gd,_gapi,$ixc,_ic,_w,_ev,_tsd){return function(path,global){
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
var z=__WXML_GLOBAL__.ops_set.$gwx0_XC_0 || [];
function gz$gwx0_XC_0_1(){
if( __WXML_GLOBAL__.ops_cached.$gwx0_XC_0_1)return __WXML_GLOBAL__.ops_cached.$gwx0_XC_0_1
__WXML_GLOBAL__.ops_cached.$gwx0_XC_0_1=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'__l'])
Z([3,'data-v-7b0f3a30'])
Z([3,'e6d709c4-1'])
})(__WXML_GLOBAL__.ops_cached.$gwx0_XC_0_1);return __WXML_GLOBAL__.ops_cached.$gwx0_XC_0_1
}
__WXML_GLOBAL__.ops_set.$gwx0_XC_0=z;
__WXML_GLOBAL__.ops_init.$gwx0_XC_0=true;
var x=['./sub-pages/auth/login.wxml'];d_[x[0]]={}
var m0=function(e,s,r,gg){
var z=gz$gwx0_XC_0_1()
var oB=_mz(z,'privacy-auth-popup',['bind:__l',0,'class',1,'vueId',1],[],e,s,gg)
_(r,oB)
return r
}
e_[x[0]]={f:m0,j:[],i:[],ti:[],ic:[]}
if(path&&e_[path]){
return function(env,dd,global){$gwxc=0;var root={"tag":"wx-page"};root.children=[]
;g="$gwx0_XC_0";var main=e_[path].f
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
}(__g.a,__g.b,__g.c,__g.d,__g.e,__g.f,__g.g,__g.h,__g.i,__g.j,__g.k,__g.l,__g.m,__g.n,__g.o,__g.p,__g.q,__g.r,__g.s,__g.t,__g.u,__g.v,__g.w,__g.x,__g.y,__g.z,__g.A,__g.B,__g.C,__g.D,__g.E,__g.F,__g.G,__g.H,__g.I,__g.J,__g.K,__g.L,__g.M,__g.N,__g.O,__g.P,__g.Q,__g.R,__g.S,__g.T,__g.U,__g.V,__g.W,__g.X,__g.Y,__g.Z,__g.aa);if(__vd_version_info__.delayedGwx||false)$gwx0_XC_0();	if (__vd_version_info__.delayedGwx) __wxAppCode__['sub-pages/auth/login.wxml'] = [$gwx0_XC_0, './sub-pages/auth/login.wxml'];else __wxAppCode__['sub-pages/auth/login.wxml'] = $gwx0_XC_0( './sub-pages/auth/login.wxml' );
	;__wxRoute = "sub-pages/auth/login";__wxRouteBegin = true;__wxAppCurrentFile__="sub-pages/auth/login.js";define("sub-pages/auth/login.js",function(require,module,exports,window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){
require('./common/vendor.js');(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["sub-pages/auth/login"],{

/***/ 52:
/*!*************************************************************************************!*\
  !*** E:/project/yhlc-v1.0/agent-uniapp/main.js?{"page":"sub-pages%2Fauth%2Flogin"} ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(wx, createPage) {

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ 4);
__webpack_require__(/*! uni-pages */ 30);
var _vue = _interopRequireDefault(__webpack_require__(/*! vue */ 25));
var _login = _interopRequireDefault(__webpack_require__(/*! ./sub-pages/auth/login.vue */ 53));
// @ts-ignore
wx.__webpack_require_UNI_MP_PLUGIN__ = __webpack_require__;
createPage(_login.default);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/wx.js */ 1)["default"], __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 2)["createPage"]))

/***/ }),

/***/ 53:
/*!******************************************************************!*\
  !*** E:/project/yhlc-v1.0/agent-uniapp/sub-pages/auth/login.vue ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _login_vue_vue_type_template_id_7b0f3a30_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./login.vue?vue&type=template&id=7b0f3a30&scoped=true& */ 54);
/* harmony import */ var _login_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./login.vue?vue&type=script&lang=js& */ 56);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _login_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _login_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _login_vue_vue_type_style_index_0_id_7b0f3a30_lang_less_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./login.vue?vue&type=style&index=0&id=7b0f3a30&lang=less&scoped=true& */ 62);
/* harmony import */ var _D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 39);

var renderjs





/* normalize component */

var component = Object(_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _login_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _login_vue_vue_type_template_id_7b0f3a30_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _login_vue_vue_type_template_id_7b0f3a30_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "7b0f3a30",
  null,
  false,
  _login_vue_vue_type_template_id_7b0f3a30_scoped_true___WEBPACK_IMPORTED_MODULE_0__["components"],
  renderjs
)

component.options.__file = "sub-pages/auth/login.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 54:
/*!*************************************************************************************************************!*\
  !*** E:/project/yhlc-v1.0/agent-uniapp/sub-pages/auth/login.vue?vue&type=template&id=7b0f3a30&scoped=true& ***!
  \*************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_login_vue_vue_type_template_id_7b0f3a30_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--17-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./login.vue?vue&type=template&id=7b0f3a30&scoped=true& */ 55);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_login_vue_vue_type_template_id_7b0f3a30_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_login_vue_vue_type_template_id_7b0f3a30_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_login_vue_vue_type_template_id_7b0f3a30_scoped_true___WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_login_vue_vue_type_template_id_7b0f3a30_scoped_true___WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),

/***/ 55:
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--17-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!E:/project/yhlc-v1.0/agent-uniapp/sub-pages/auth/login.vue?vue&type=template&id=7b0f3a30&scoped=true& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return recyclableRender; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "components", function() { return components; });
var components
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  if (!_vm._isMounted) {
    _vm.e0 = function ($event) {
      _vm.showPopup = false
    }
  }
}
var recyclableRender = false
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ 56:
/*!*******************************************************************************************!*\
  !*** E:/project/yhlc-v1.0/agent-uniapp/sub-pages/auth/login.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_login_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--13-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./login.vue?vue&type=script&lang=js& */ 57);
/* harmony import */ var _D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_login_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_login_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_login_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_login_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_login_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 57:
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--13-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!E:/project/yhlc-v1.0/agent-uniapp/sub-pages/auth/login.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(uni) {

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ 4);
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _regenerator = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/regenerator */ 58));
var _asyncToGenerator2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ 60));
var _defineProperty2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/defineProperty */ 11));
var _vuex = __webpack_require__(/*! vuex */ 34);
var _appConfig = _interopRequireDefault(__webpack_require__(/*! @/config/appConfig.js */ 61));
var _routes = __webpack_require__(/*! @/utils/routes.js */ 42);
var _privacy = __webpack_require__(/*! @/utils/privacy.js */ 35);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0, _defineProperty2.default)(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
var _default = {
  data: function data() {
    return {
      phone: '',
      password: '',
      puserInfo: {},
      appConfig: _appConfig.default,
      showLoding: true,
      // 初始化加载时显示遮挡页
      wxUserInfo: null,
      // 保存微信用户数据(临时)
      wxLoginInfo: {
        code: null,
        openid: null,
        session_key: null
      },
      // 微信登录返回信息（临时）
      showPopup: false,
      // 获取电话弹窗
      agreePrivacy: false
    };
  },
  onLoad: function onLoad() {
    this.initLogin();
  },
  onBackPress: function onBackPress(e) {
    debugger;
    //  console.log(e)
    // 这里可以自定义返回逻辑，比如下面跳转其他页面
    uni.navigateTo({
      url: _routes.PAGE_LAUNCH
    });
    // return true 表示禁止默认返回
    return true;
  },
  computed: _objectSpread({}, (0, _vuex.mapState)(['token'])),
  methods: _objectSpread(_objectSpread({}, (0, _vuex.mapMutations)(['saveUserInfo', 'sessionToken'])), {}, {
    openPrivacyPolicy: function openPrivacyPolicy() {
      uni.navigateTo({
        url: _routes.AUTH_PRIVACY
      });
    },
    onPrivacyCheckboxChange: function onPrivacyCheckboxChange(e) {
      var v = e && e.detail && e.detail.value || [];
      this.agreePrivacy = Array.isArray(v) && v.indexOf('1') !== -1;
    },
    ensurePrivacyAgreed: function ensurePrivacyAgreed() {
      if (!this.agreePrivacy) {
        uni.showToast({
          title: '请先阅读并同意《隐私政策》',
          icon: 'none'
        });
        return false;
      }
      return true;
    },
    /* 主动发起微信隐私授权，登录入口共用 */ensurePrivacyAuthorized: function ensurePrivacyAuthorized() {
      return (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee() {
        var ok;
        return _regenerator.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return (0, _privacy.requirePrivacyAuthorize)();
              case 2:
                ok = _context.sent;
                if (!ok) {
                  uni.showToast({
                    title: '需同意隐私保护指引才能继续',
                    icon: 'none'
                  });
                }
                return _context.abrupt("return", ok);
              case 5:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }))();
    },
    userLogin: function userLogin() {
      var _this = this;
      return (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee2() {
        var params, that;
        return _regenerator.default.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                if (_this.ensurePrivacyAgreed()) {
                  _context2.next = 2;
                  break;
                }
                return _context2.abrupt("return");
              case 2:
                _context2.next = 4;
                return _this.ensurePrivacyAuthorized();
              case 4:
                if (_context2.sent) {
                  _context2.next = 6;
                  break;
                }
                return _context2.abrupt("return");
              case 6:
                if (/^1[3456789]\d{9}$/.test(_this.phone)) {
                  _context2.next = 9;
                  break;
                }
                uni.showToast({
                  title: '请输入正确的手机号',
                  icon: 'none'
                });
                return _context2.abrupt("return", false);
              case 9:
                if (!(_this.password == '')) {
                  _context2.next = 12;
                  break;
                }
                uni.showToast({
                  title: '请输入密码',
                  icon: 'none'
                });
                return _context2.abrupt("return", false);
              case 12:
                params = {
                  phone: _this.phone,
                  password: _this.password,
                  ip: ''
                };
                that = _this;
                that.request("get", "rider/app/loginRider", null, params).then(function (res) {
                  if (res.code === 200) {
                    // 返回带token, 进入订单页
                    var duration = 1500; // 延迟跳转页面
                    that.saveUserInfo(res.data); // 缓存用户基础数据
                    that.sessionToken(res.data.accessToken); // 缓存token
                    uni.showToast({
                      title: '登录成功',
                      duration: duration
                    });
                    that.toTaskPage(duration);
                  }
                });
              case 15:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }))();
    },
    /* 判断是否已登录 */
    /* 判断是否已登录 */
    initLogin: function initLogin() {
      var _this2 = this;
      return (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee3() {
        var that, newUserData;
        return _regenerator.default.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                that = _this2;
                if (!that.token) {
                  _context3.next = 15;
                  break;
                }
                _context3.prev = 2;
                _context3.next = 5;
                return that.getUserInfo();
              case 5:
                newUserData = _context3.sent;
                if (newUserData && newUserData.code !== 500) {
                  // 成功且有有效数据
                  that.saveUserInfo(newUserData); // 缓存用户基础数据
                  that.toTaskPage();
                } else {
                  // 500错误或其他无效数据，视为未登录
                  that.showLoding = false;
                }
                _context3.next = 13;
                break;
              case 9:
                _context3.prev = 9;
                _context3.t0 = _context3["catch"](2);
                // 请求出错，视为未登录
                console.error('获取用户信息失败:', _context3.t0);
                that.showLoding = false;
              case 13:
                _context3.next = 17;
                break;
              case 15:
                uni.login({
                  provider: 'weixin',
                  success: function success(wxres) {
                    _this2.logining = false;
                    that.request("post", 'rider/wxLogin/wechatLogin', null, {
                      loginType: 1,
                      code: wxres.code
                    }, function (failres) {
                      _this2.$api.msg(failres.msg);
                      uni.hideLoading();
                    }).then(function (res) {
                      uni.hideLoading();
                      _this2.puserInfo = res.data;
                      _this2.sessionKey = res.data.sessionKey;
                    });
                  }
                });
                that.showLoding = false;
              case 17:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, null, [[2, 9]]);
      }))();
    },
    onInput: function onInput(e) {
      this.phone = e.target.value;
    },
    /* 前往任务列表页 */toTaskPage: function toTaskPage() {
      var duration = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 100;
      setTimeout(function () {
        uni.reLaunch({
          url: _routes.PAGE_RIDER_TASK
        });
      }, duration);
    },
    goBack: function goBack() {
      uni.navigateTo({
        url: _routes.PAGE_LAUNCH
      });
    },
    /* 获取后台用户信息（进入即判断是否过期） */getUserInfo: function getUserInfo() {
      var that = this;
      return new Promise(function (resolve, reject) {
        that.request("get", "rider/wxLogin/getRiderInfo", that.token, null).then(function (res) {
          console.log('getUserInfo', res);
          if (res.code === 200) {
            resolve(res.data);
          } else {
            reject(res); // 这里改为 reject，以便在 initLogin 中捕获
          }
        }).catch(function (err) {
          reject(err); // 捕获请求错误
        });
      });
    },
    /* 获取微信用户信息（登录使用） */getUserProfile: function getUserProfile() {
      var _this3 = this;
      return (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee5() {
        var that;
        return _regenerator.default.wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                if (_this3.ensurePrivacyAgreed()) {
                  _context5.next = 2;
                  break;
                }
                return _context5.abrupt("return");
              case 2:
                _context5.next = 4;
                return _this3.ensurePrivacyAuthorized();
              case 4:
                if (_context5.sent) {
                  _context5.next = 6;
                  break;
                }
                return _context5.abrupt("return");
              case 6:
                that = _this3;
                if (that.wxLoginInfo.openid) {
                  // 已登录，但未获取手机号
                  that.showPopup = true;
                } else if (uni.getUserProfile) {
                  // 未登录，且版本支持 uni.getUserProfile
                  uni.getUserProfile({
                    lang: 'zh_CN',
                    desc: "获取您的昵称、头像、手机号",
                    success: function () {
                      var _success = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee4(res) {
                        return _regenerator.default.wrap(function _callee4$(_context4) {
                          while (1) {
                            switch (_context4.prev = _context4.next) {
                              case 0:
                                console.log('用户同意了授权', res);
                                that.wxUserInfo = res.userInfo; // 临时保存微信用户基础数据
                                that.wxUserInfo['phone'] = '';
                                that.mpWeixinTologin(); // 微信一键登录
                              case 4:
                              case "end":
                                return _context4.stop();
                            }
                          }
                        }, _callee4);
                      }));
                      function success(_x) {
                        return _success.apply(this, arguments);
                      }
                      return success;
                    }(),
                    fail: function fail(err) {
                      console.log('授权失败:', err);
                      uni.showToast({
                        title: err
                      });
                    }
                  });
                } else {
                  uni.showToast({
                    title: '当前版本过低'
                  });
                }
              case 8:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5);
      }))();
    },
    fakeLogin: function fakeLogin() {
      var _this4 = this;
      return (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee6() {
        var that, duration;
        return _regenerator.default.wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                if (_this4.ensurePrivacyAgreed()) {
                  _context6.next = 2;
                  break;
                }
                return _context6.abrupt("return");
              case 2:
                _context6.next = 4;
                return _this4.ensurePrivacyAuthorized();
              case 4:
                if (_context6.sent) {
                  _context6.next = 6;
                  break;
                }
                return _context6.abrupt("return");
              case 6:
                that = _this4;
                uni.showLoading({});

                // 返回带token, 进入订单页
                duration = 1500; // 延迟跳转页面
                that.saveUserInfo(that.puserInfo); // 缓存用户基础数据
                that.sessionToken(that.puserInfo.accessToken); // 缓存token
                uni.showToast({
                  title: '登录成功',
                  duration: duration
                });
                that.toTaskPage(duration);
              case 13:
              case "end":
                return _context6.stop();
            }
          }
        }, _callee6);
      }))();
    },
    tempH5Login: function tempH5Login() {
      if (!this.ensurePrivacyAgreed()) return;
      var data = {
        "accessToken": "29478626990E478DA9539866489DD87D",
        "avatarUrl": "https://thirdwx.qlogo.cn/mmopen/vi_32/DYAIOgq83epib9DbQJ7VsbLFhWMgiarZSibmRPXWb2tHOtzicnbzpj7Z8lIoBy6icUn0vESMicnMnv8lbGjxYKwSnspw/132",
        "deliveryEnd": "23:00",
        "deliveryStart": "8:30",
        "gmtCreate": 1666885726000,
        "gmtLastLogin": 1667054521000,
        "gmtUpdate": 1666885726000,
        "id": 151,
        "lastLoginIp": "27.10.60.71",
        "loginType": 1,
        "name": "L",
        "openId": "o7LCC5YUDftbpo907smJhvgsMnBs",
        "phone": "18522563339",
        "sessionKey": "yjKdFE0CMSLBKNmrXmFyyQ==",
        "state": 1,
        "storageId": 11,
        "workState": 1
      };
      var token = '29478626990E478DA9539866489DD87D';
      this.saveUserInfo(data); // 缓存用户基础数据
      this.sessionToken(token); // 缓存token
      this.toTaskPage(100);
    },
    /* 微信登录 */mpWeixinTologin: function mpWeixinTologin() {
      var that = this;
      uni.login({
        provider: 'weixin',
        success: function success(res) {
          return (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee7() {
            return _regenerator.default.wrap(function _callee7$(_context7) {
              while (1) {
                switch (_context7.prev = _context7.next) {
                  case 0:
                    console.log('微信一键登录', res);
                    if (res.errMsg == 'login:ok') {
                      that.wxLoginInfo.code = res.code;
                      that.serverLogin(1);
                    }
                  case 2:
                  case "end":
                    return _context7.stop();
                }
              }
            }, _callee7);
          }))();
        },
        fail: function fail(err) {
          console.log('uni.login', err);
        }
      });
    },
    /* 获取手机号 */getPhoneNumber: function getPhoneNumber(e) {
      console.log('获取手机号', e);
      var that = this;
      if (!that.wxLoginInfo.openid || !e.detail.encryptedData) {
        return false; // 未登录
      }

      that.showPopup = false; // 显示获取手机号按钮
      var content = {
        openid: that.wxLoginInfo.openid,
        sessionkey: that.wxLoginInfo.session_key,
        encryptedData: e.detail.encryptedData,
        iv: e.detail.iv
      };
      var params = {
        raw: JSON.stringify(content)
      };
      that.request("get", "rider/wxLogin/decryptS5", null, params).then(function (resolve) {
        //console.log('获取解密手机号', resolve)
        if (resolve.code === 200) {
          //debugger
          var data = JSON.parse(resolve.data);
          that.wxUserInfo.phone = data.phoneNumber;
          that.serverLogin(2);
        } else {
          uni.showToast({
            title: resolve.msg
          });
        }
      });
    },
    /* 后台登录 */serverLogin: function serverLogin(type) {
      // type: 1-第一次后台登录(返回无token) 2-第一次后台登录(返回带token)
      var that = this;
      var content = {
        code: that.wxLoginInfo.code,
        phone: that.wxUserInfo.phone,
        nickName: that.wxUserInfo.nickName,
        avatarUrl: that.wxUserInfo.avatarUrl,
        openid: that.wxLoginInfo.openid,
        session_key: that.wxLoginInfo.session_key
      };
      that.request("post", "rider/wxLogin/wechatLogin", null, content).then(function (res) {
        console.log('获取数据库返回的用户信息', res);
        if (res.code === 200) {
          // 至此实际已登录
          that.wxLoginInfo.openid = res.data.openId;
          that.wxLoginInfo.session_key = res.data.sessionKey;
          // 保存数据库返回的用户信息

          if (type === 1) {
            // 返回无token, 另需获取手机号绑定对应的openid
            that.showPopup = true; // 显示获取手机号按钮
          } else {
            // 返回带token, 进入订单页
            var duration = 1500; // 延迟跳转页面
            that.saveUserInfo(res.data); // 缓存用户基础数据
            that.sessionToken(res.data.accessToken); // 缓存token
            uni.showToast({
              title: '登录成功',
              duration: duration
            });
            that.toTaskPage(duration);
          }
        } else {
          uni.showToast({
            title: res.msg
          });
        }
      });
    }
  })
};
exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 2)["default"]))

/***/ }),

/***/ 62:
/*!****************************************************************************************************************************!*\
  !*** E:/project/yhlc-v1.0/agent-uniapp/sub-pages/auth/login.vue?vue&type=style&index=0&id=7b0f3a30&lang=less&scoped=true& ***!
  \****************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_10_oneOf_1_0_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_10_oneOf_1_1_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_1_2_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_3_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_less_loader_dist_cjs_js_ref_10_oneOf_1_4_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_1_5_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_login_vue_vue_type_style_index_0_id_7b0f3a30_lang_less_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/mini-css-extract-plugin/dist/loader.js??ref--10-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--10-oneOf-1-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--10-oneOf-1-2!./node_modules/postcss-loader/src??ref--10-oneOf-1-3!./node_modules/less-loader/dist/cjs.js??ref--10-oneOf-1-4!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--10-oneOf-1-5!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./login.vue?vue&type=style&index=0&id=7b0f3a30&lang=less&scoped=true& */ 63);
/* harmony import */ var _D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_10_oneOf_1_0_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_10_oneOf_1_1_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_1_2_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_3_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_less_loader_dist_cjs_js_ref_10_oneOf_1_4_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_1_5_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_login_vue_vue_type_style_index_0_id_7b0f3a30_lang_less_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_10_oneOf_1_0_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_10_oneOf_1_1_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_1_2_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_3_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_less_loader_dist_cjs_js_ref_10_oneOf_1_4_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_1_5_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_login_vue_vue_type_style_index_0_id_7b0f3a30_lang_less_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_10_oneOf_1_0_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_10_oneOf_1_1_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_1_2_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_3_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_less_loader_dist_cjs_js_ref_10_oneOf_1_4_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_1_5_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_login_vue_vue_type_style_index_0_id_7b0f3a30_lang_less_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_10_oneOf_1_0_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_10_oneOf_1_1_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_1_2_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_3_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_less_loader_dist_cjs_js_ref_10_oneOf_1_4_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_1_5_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_login_vue_vue_type_style_index_0_id_7b0f3a30_lang_less_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_10_oneOf_1_0_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_10_oneOf_1_1_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_1_2_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_3_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_less_loader_dist_cjs_js_ref_10_oneOf_1_4_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_1_5_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_login_vue_vue_type_style_index_0_id_7b0f3a30_lang_less_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 63:
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js??ref--10-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--10-oneOf-1-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--10-oneOf-1-2!./node_modules/postcss-loader/src??ref--10-oneOf-1-3!./node_modules/less-loader/dist/cjs.js??ref--10-oneOf-1-4!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--10-oneOf-1-5!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!E:/project/yhlc-v1.0/agent-uniapp/sub-pages/auth/login.vue?vue&type=style&index=0&id=7b0f3a30&lang=less&scoped=true& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
    if(false) { var cssReload; }
  

/***/ })

},[[52,"common/runtime","common/vendor","sub-pages/auth/common/vendor"]]]);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/sub-pages/auth/login.js.map
},{isPage:true,isComponent:true,currentFile:'sub-pages/auth/login.js'});require("sub-pages/auth/login.js");$gwx0_XC_1=function(_,_v,_n,_p,_s,_wp,_wl,$gwn,$gwl,$gwh,wh,$gstack,$gwrt,gra,grb,TestTest,wfor,_ca,_da,_r,_rz,_o,_oz,_1,_1z,_2,_2z,_m,_mz,nv_getDate,nv_getRegExp,nv_console,nv_parseInt,nv_parseFloat,nv_isNaN,nv_isFinite,nv_decodeURI,nv_decodeURIComponent,nv_encodeURI,nv_encodeURIComponent,$gdc,nv_JSON,_af,_gv,_ai,_grp,_gd,_gapi,$ixc,_ic,_w,_ev,_tsd){return function(path,global){
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
var z=__WXML_GLOBAL__.ops_set.$gwx0_XC_1 || [];
function gz$gwx0_XC_1_1(){
if( __WXML_GLOBAL__.ops_cached.$gwx0_XC_1_1)return __WXML_GLOBAL__.ops_cached.$gwx0_XC_1_1
__WXML_GLOBAL__.ops_cached.$gwx0_XC_1_1=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'__l'])
Z([3,'data-v-00986d99'])
Z([3,'1275c68d-1'])
})(__WXML_GLOBAL__.ops_cached.$gwx0_XC_1_1);return __WXML_GLOBAL__.ops_cached.$gwx0_XC_1_1
}
__WXML_GLOBAL__.ops_set.$gwx0_XC_1=z;
__WXML_GLOBAL__.ops_init.$gwx0_XC_1=true;
var x=['./sub-pages/auth/merchant.wxml'];d_[x[0]]={}
var m0=function(e,s,r,gg){
var z=gz$gwx0_XC_1_1()
var oD=_mz(z,'privacy-auth-popup',['bind:__l',0,'class',1,'vueId',1],[],e,s,gg)
_(r,oD)
return r
}
e_[x[0]]={f:m0,j:[],i:[],ti:[],ic:[]}
if(path&&e_[path]){
return function(env,dd,global){$gwxc=0;var root={"tag":"wx-page"};root.children=[]
;g="$gwx0_XC_1";var main=e_[path].f
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
}(__g.a,__g.b,__g.c,__g.d,__g.e,__g.f,__g.g,__g.h,__g.i,__g.j,__g.k,__g.l,__g.m,__g.n,__g.o,__g.p,__g.q,__g.r,__g.s,__g.t,__g.u,__g.v,__g.w,__g.x,__g.y,__g.z,__g.A,__g.B,__g.C,__g.D,__g.E,__g.F,__g.G,__g.H,__g.I,__g.J,__g.K,__g.L,__g.M,__g.N,__g.O,__g.P,__g.Q,__g.R,__g.S,__g.T,__g.U,__g.V,__g.W,__g.X,__g.Y,__g.Z,__g.aa);if(__vd_version_info__.delayedGwx||false)$gwx0_XC_1();	if (__vd_version_info__.delayedGwx) __wxAppCode__['sub-pages/auth/merchant.wxml'] = [$gwx0_XC_1, './sub-pages/auth/merchant.wxml'];else __wxAppCode__['sub-pages/auth/merchant.wxml'] = $gwx0_XC_1( './sub-pages/auth/merchant.wxml' );
	;__wxRoute = "sub-pages/auth/merchant";__wxRouteBegin = true;__wxAppCurrentFile__="sub-pages/auth/merchant.js";define("sub-pages/auth/merchant.js",function(require,module,exports,window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){
require('./common/vendor.js');(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["sub-pages/auth/merchant"],{

/***/ 64:
/*!****************************************************************************************!*\
  !*** E:/project/yhlc-v1.0/agent-uniapp/main.js?{"page":"sub-pages%2Fauth%2Fmerchant"} ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(wx, createPage) {

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ 4);
__webpack_require__(/*! uni-pages */ 30);
var _vue = _interopRequireDefault(__webpack_require__(/*! vue */ 25));
var _merchant = _interopRequireDefault(__webpack_require__(/*! ./sub-pages/auth/merchant.vue */ 65));
// @ts-ignore
wx.__webpack_require_UNI_MP_PLUGIN__ = __webpack_require__;
createPage(_merchant.default);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/wx.js */ 1)["default"], __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 2)["createPage"]))

/***/ }),

/***/ 65:
/*!*********************************************************************!*\
  !*** E:/project/yhlc-v1.0/agent-uniapp/sub-pages/auth/merchant.vue ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _merchant_vue_vue_type_template_id_00986d99_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./merchant.vue?vue&type=template&id=00986d99&scoped=true& */ 66);
/* harmony import */ var _merchant_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./merchant.vue?vue&type=script&lang=js& */ 68);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _merchant_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _merchant_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _merchant_vue_vue_type_style_index_0_id_00986d99_lang_less_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./merchant.vue?vue&type=style&index=0&id=00986d99&lang=less&scoped=true& */ 70);
/* harmony import */ var _D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 39);

var renderjs





/* normalize component */

var component = Object(_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _merchant_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _merchant_vue_vue_type_template_id_00986d99_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _merchant_vue_vue_type_template_id_00986d99_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "00986d99",
  null,
  false,
  _merchant_vue_vue_type_template_id_00986d99_scoped_true___WEBPACK_IMPORTED_MODULE_0__["components"],
  renderjs
)

component.options.__file = "sub-pages/auth/merchant.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 66:
/*!****************************************************************************************************************!*\
  !*** E:/project/yhlc-v1.0/agent-uniapp/sub-pages/auth/merchant.vue?vue&type=template&id=00986d99&scoped=true& ***!
  \****************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_merchant_vue_vue_type_template_id_00986d99_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--17-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./merchant.vue?vue&type=template&id=00986d99&scoped=true& */ 67);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_merchant_vue_vue_type_template_id_00986d99_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_merchant_vue_vue_type_template_id_00986d99_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_merchant_vue_vue_type_template_id_00986d99_scoped_true___WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_merchant_vue_vue_type_template_id_00986d99_scoped_true___WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),

/***/ 67:
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--17-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!E:/project/yhlc-v1.0/agent-uniapp/sub-pages/auth/merchant.vue?vue&type=template&id=00986d99&scoped=true& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return recyclableRender; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "components", function() { return components; });
var components
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  if (!_vm._isMounted) {
    _vm.e0 = function ($event) {
      _vm.showPopup = false
    }
  }
}
var recyclableRender = false
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ 68:
/*!**********************************************************************************************!*\
  !*** E:/project/yhlc-v1.0/agent-uniapp/sub-pages/auth/merchant.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_merchant_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--13-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./merchant.vue?vue&type=script&lang=js& */ 69);
/* harmony import */ var _D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_merchant_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_merchant_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_merchant_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_merchant_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_merchant_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 69:
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--13-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!E:/project/yhlc-v1.0/agent-uniapp/sub-pages/auth/merchant.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(uni) {

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ 4);
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _regenerator = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/regenerator */ 58));
var _asyncToGenerator2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ 60));
var _defineProperty2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/defineProperty */ 11));
var _vuex = __webpack_require__(/*! vuex */ 34);
var _appConfig = _interopRequireDefault(__webpack_require__(/*! @/config/appConfig.js */ 61));
var _routes = __webpack_require__(/*! @/utils/routes.js */ 42);
var _privacy = __webpack_require__(/*! @/utils/privacy.js */ 35);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0, _defineProperty2.default)(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
var _default = {
  data: function data() {
    return {
      phone: 'admin',
      password: '',
      code: '',
      uuid: '',
      appConfig: _appConfig.default,
      showLoding: true,
      // 初始化加载时显示遮挡页
      wxUserInfo: null,
      // 保存微信用户数据(临时)
      wxLoginInfo: {
        code: null,
        openid: null,
        session_key: null
      },
      // 微信登录返回信息（临时）
      showPopup: false,
      // 获取电话弹窗
      codeUrl: '',
      agreePrivacy: false
    };
  },
  onLoad: function onLoad() {
    this.initLogin();
    this.getCode();
  },
  onBackPress: function onBackPress() {
    //  console.log(e)
    // 这里可以自定义返回逻辑，比如下面跳转其他页面
    uni.navigateTo({
      url: _routes.PAGE_LAUNCH
    });
    // return true 表示禁止默认返回
    return true;
  },
  computed: _objectSpread({}, (0, _vuex.mapState)(['token'])),
  methods: _objectSpread(_objectSpread({}, (0, _vuex.mapMutations)(['saveUserInfo', 'sessionToken'])), {}, {
    openPrivacyPolicy: function openPrivacyPolicy(title) {
      uni.navigateTo({
        url: _routes.AUTH_PRIVACY + '?title=' + encodeURIComponent(title)
      });
    },
    onPrivacyCheckboxChange: function onPrivacyCheckboxChange(e) {
      var v = e && e.detail && e.detail.value || [];
      this.agreePrivacy = Array.isArray(v) && v.indexOf('1') !== -1;
    },
    ensurePrivacyAgreed: function ensurePrivacyAgreed() {
      if (!this.agreePrivacy) {
        uni.showToast({
          title: '请先阅读并同意《昱禾联仓供应商入驻协议》',
          icon: 'none'
        });
        return false;
      }
      return true;
    },
    /* 主动发起微信隐私授权，登录入口共用 */ensurePrivacyAuthorized: function ensurePrivacyAuthorized() {
      return (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee() {
        var ok;
        return _regenerator.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return (0, _privacy.requirePrivacyAuthorize)();
              case 2:
                ok = _context.sent;
                if (!ok) {
                  uni.showToast({
                    title: '需同意隐私保护指引才能继续',
                    icon: 'none'
                  });
                }
                return _context.abrupt("return", ok);
              case 5:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }))();
    },
    getCode: function getCode() {
      var _this = this;
      this.request("get", "captchaImage").then(function (res) {
        _this.codeUrl = "data:image/gif;base64," + res.data.img;
        _this.uuid = res.data.uuid;
      });
    },
    userLogin: function userLogin() {
      var _this2 = this;
      return (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee2() {
        var params, that;
        return _regenerator.default.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                if (_this2.ensurePrivacyAgreed()) {
                  _context2.next = 2;
                  break;
                }
                return _context2.abrupt("return");
              case 2:
                _context2.next = 4;
                return _this2.ensurePrivacyAuthorized();
              case 4:
                if (_context2.sent) {
                  _context2.next = 6;
                  break;
                }
                return _context2.abrupt("return");
              case 6:
                if (!(_this2.phone === '')) {
                  _context2.next = 9;
                  break;
                }
                uni.showToast({
                  title: '请输入正确的手机号',
                  icon: 'none'
                });
                return _context2.abrupt("return", false);
              case 9:
                if (!(_this2.password == '')) {
                  _context2.next = 12;
                  break;
                }
                uni.showToast({
                  title: '请输入密码',
                  icon: 'none'
                });
                return _context2.abrupt("return", false);
              case 12:
                params = {
                  username: _this2.phone,
                  password: _this2.password,
                  ip: '',
                  code: _this2.code,
                  uuid: _this2.uuid
                };
                that = _this2;
                that.request("post", "login", null, params).then(function (res) {
                  if (res.code === 200) {
                    // 返回带token, 进入订单页
                    var duration = 1500; // 延迟跳转页面
                    that.saveUserInfo(res.data); // 缓存用户基础数据
                    that.sessionToken(res.data.token); // 缓存token
                    uni.showToast({
                      title: '登录成功',
                      duration: duration
                    });
                    that.toTaskPage(duration);
                  } else {
                    _this2.getCode();
                  }
                }, function () {
                  return _this2.getCode();
                });
              case 15:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }))();
    },
    /* 判断是否已登录 */initLogin: function initLogin() {
      var _this3 = this;
      return (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee3() {
        var that, newUserData;
        return _regenerator.default.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.prev = 0;
                that = _this3;
                if (!that.token) {
                  _context3.next = 9;
                  break;
                }
                _context3.next = 5;
                return that.getUserInfo();
              case 5:
                newUserData = _context3.sent;
                if (newUserData) {
                  that.saveUserInfo(newUserData); // 缓存用户基础数据
                  that.toTaskPage();
                } else {
                  that.showLoding = false;
                }
                _context3.next = 10;
                break;
              case 9:
                that.showLoding = false;
              case 10:
                _context3.next = 15;
                break;
              case 12:
                _context3.prev = 12;
                _context3.t0 = _context3["catch"](0);
                console.log(_context3.t0);
              case 15:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, null, [[0, 12]]);
      }))();
    },
    onInput: function onInput(e) {
      this.phone = e.target.value;
    },
    /* 前往任务列表页 */toTaskPage: function toTaskPage() {
      var duration = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 100;
      // debugger
      setTimeout(function () {
        uni.reLaunch({
          url: _routes.MERCHANT_DASHBOARD
        });
      }, duration);
    },
    goBack: function goBack() {
      uni.navigateTo({
        url: _routes.PAGE_LAUNCH
      });
    },
    goRegister: function goRegister() {
      uni.navigateTo({
        url: _routes.AUTH_REGISTER
      });
    },
    /* 获取后台用户信息（进入即判断是否过期） */getUserInfo: function getUserInfo() {
      var that = this;
      return new Promise(function (resolve, reject) {
        that.request("get", "getInfo", that.token, null).then(function (res) {
          if (res.code === 200) {
            resolve(res.data);
          } else {
            reject(res.msg);
          }
        });
      });
    },
    /* 获取微信用户信息（登录使用） */getUserProfile: function getUserProfile() {
      if (!this.ensurePrivacyAgreed()) return;
      var that = this;
      if (that.wxLoginInfo.openid) {
        // 已登录，但未获取手机号
        that.showPopup = true;
      } else if (uni.getUserProfile) {
        // 未登录，且版本支持 uni.getUserProfile
        uni.getUserProfile({
          lang: 'zh_CN',
          desc: "获取您的昵称、头像、手机号",
          success: function () {
            var _success = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee4(res) {
              return _regenerator.default.wrap(function _callee4$(_context4) {
                while (1) {
                  switch (_context4.prev = _context4.next) {
                    case 0:
                      console.log('用户同意了授权', res);
                      that.wxUserInfo = res.userInfo; // 临时保存微信用户基础数据
                      that.wxUserInfo['phone'] = '';
                      that.mpWeixinTologin(); // 微信一键登录
                    case 4:
                    case "end":
                      return _context4.stop();
                  }
                }
              }, _callee4);
            }));
            function success(_x) {
              return _success.apply(this, arguments);
            }
            return success;
          }(),
          fail: function fail(err) {
            console.log('授权失败:', err);
            uni.showToast({
              title: err
            });
          }
        });
      } else {
        uni.showToast({
          title: '当前版本过低'
        });
      }
    },
    tempH5Login: function tempH5Login() {
      if (!this.ensurePrivacyAgreed()) return;
      var data = {
        "accessToken": "29478626990E478DA9539866489DD87D",
        "avatarUrl": "https://thirdwx.qlogo.cn/mmopen/vi_32/DYAIOgq83epib9DbQJ7VsbLFhWMgiarZSibmRPXWb2tHOtzicnbzpj7Z8lIoBy6icUn0vESMicnMnv8lbGjxYKwSnspw/132",
        "deliveryEnd": "23:00",
        "deliveryStart": "8:30",
        "gmtCreate": 1666885726000,
        "gmtLastLogin": 1667054521000,
        "gmtUpdate": 1666885726000,
        "id": 151,
        "lastLoginIp": "27.10.60.71",
        "loginType": 1,
        "name": "L",
        "openId": "o7LCC5YUDftbpo907smJhvgsMnBs",
        "phone": "18522563339",
        "sessionKey": "yjKdFE0CMSLBKNmrXmFyyQ==",
        "state": 1,
        "storageId": 11,
        "workState": 1
      };
      var token = '29478626990E478DA9539866489DD87D';
      this.saveUserInfo(data); // 缓存用户基础数据
      this.sessionToken(token); // 缓存token
      this.toTaskPage(100);
    },
    /* 微信登录 */mpWeixinTologin: function mpWeixinTologin() {
      var that = this;
      uni.login({
        provider: 'weixin',
        success: function success(res) {
          return (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee5() {
            return _regenerator.default.wrap(function _callee5$(_context5) {
              while (1) {
                switch (_context5.prev = _context5.next) {
                  case 0:
                    console.log('微信一键登录', res);
                    if (res.errMsg == 'login:ok') {
                      that.wxLoginInfo.code = res.code;
                      that.serverLogin(1);
                    }
                  case 2:
                  case "end":
                    return _context5.stop();
                }
              }
            }, _callee5);
          }))();
        },
        fail: function fail(err) {
          console.log('uni.login', err);
        }
      });
    },
    /* 获取手机号 */getPhoneNumber: function getPhoneNumber(e) {
      console.log('获取手机号', e);
      var that = this;
      if (!that.wxLoginInfo.openid || !e.detail.encryptedData) {
        return false; // 未登录
      }

      that.showPopup = false; // 显示获取手机号按钮
      var content = {
        openid: that.wxLoginInfo.openid,
        sessionkey: that.wxLoginInfo.session_key,
        encryptedData: e.detail.encryptedData,
        iv: e.detail.iv
      };
      var params = {
        raw: JSON.stringify(content)
      };
      that.request("get", "rider/wxLogin/decryptS5", null, params).then(function (resolve) {
        //console.log('获取解密手机号', resolve)
        if (resolve.code === 200) {
          //debugger
          var data = JSON.parse(resolve.data);
          that.wxUserInfo.phone = data.phoneNumber;
          that.serverLogin(2);
        } else {
          uni.showToast({
            title: resolve.msg
          });
        }
      });
    },
    /* 后台登录 */serverLogin: function serverLogin(type) {
      // type: 1-第一次后台登录(返回无token) 2-第一次后台登录(返回带token)
      var that = this;
      var content = {
        code: that.wxLoginInfo.code,
        phone: that.wxUserInfo.phone,
        nickName: that.wxUserInfo.nickName,
        avatar: that.wxUserInfo.avatar,
        openid: that.wxLoginInfo.openid,
        session_key: that.wxLoginInfo.session_key
      };
      that.request("post", "rider/wxLogin/wechatLogin", null, content).then(function (res) {
        console.log('获取数据库返回的用户信息', res);
        if (res.code === 200) {
          // 至此实际已登录
          that.wxLoginInfo.openid = res.data.openId;
          that.wxLoginInfo.session_key = res.data.sessionKey;
          // 保存数据库返回的用户信息

          if (type === 1) {
            // 返回无token, 另需获取手机号绑定对应的openid
            that.showPopup = true; // 显示获取手机号按钮
          } else {
            // 返回带token, 进入订单页
            var duration = 1500; // 延迟跳转页面
            that.saveUserInfo(res.data); // 缓存用户基础数据
            that.sessionToken(res.data.accessToken); // 缓存token
            uni.showToast({
              title: '登录成功',
              duration: duration
            });
            that.toTaskPage(duration);
          }
        } else {
          uni.showToast({
            title: res.msg
          });
        }
      });
    }
  })
};
exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 2)["default"]))

/***/ }),

/***/ 70:
/*!*******************************************************************************************************************************!*\
  !*** E:/project/yhlc-v1.0/agent-uniapp/sub-pages/auth/merchant.vue?vue&type=style&index=0&id=00986d99&lang=less&scoped=true& ***!
  \*******************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_10_oneOf_1_0_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_10_oneOf_1_1_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_1_2_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_3_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_less_loader_dist_cjs_js_ref_10_oneOf_1_4_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_1_5_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_merchant_vue_vue_type_style_index_0_id_00986d99_lang_less_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/mini-css-extract-plugin/dist/loader.js??ref--10-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--10-oneOf-1-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--10-oneOf-1-2!./node_modules/postcss-loader/src??ref--10-oneOf-1-3!./node_modules/less-loader/dist/cjs.js??ref--10-oneOf-1-4!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--10-oneOf-1-5!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./merchant.vue?vue&type=style&index=0&id=00986d99&lang=less&scoped=true& */ 71);
/* harmony import */ var _D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_10_oneOf_1_0_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_10_oneOf_1_1_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_1_2_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_3_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_less_loader_dist_cjs_js_ref_10_oneOf_1_4_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_1_5_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_merchant_vue_vue_type_style_index_0_id_00986d99_lang_less_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_10_oneOf_1_0_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_10_oneOf_1_1_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_1_2_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_3_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_less_loader_dist_cjs_js_ref_10_oneOf_1_4_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_1_5_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_merchant_vue_vue_type_style_index_0_id_00986d99_lang_less_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_10_oneOf_1_0_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_10_oneOf_1_1_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_1_2_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_3_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_less_loader_dist_cjs_js_ref_10_oneOf_1_4_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_1_5_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_merchant_vue_vue_type_style_index_0_id_00986d99_lang_less_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_10_oneOf_1_0_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_10_oneOf_1_1_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_1_2_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_3_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_less_loader_dist_cjs_js_ref_10_oneOf_1_4_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_1_5_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_merchant_vue_vue_type_style_index_0_id_00986d99_lang_less_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_10_oneOf_1_0_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_10_oneOf_1_1_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_1_2_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_3_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_less_loader_dist_cjs_js_ref_10_oneOf_1_4_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_1_5_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_merchant_vue_vue_type_style_index_0_id_00986d99_lang_less_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 71:
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js??ref--10-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--10-oneOf-1-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--10-oneOf-1-2!./node_modules/postcss-loader/src??ref--10-oneOf-1-3!./node_modules/less-loader/dist/cjs.js??ref--10-oneOf-1-4!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--10-oneOf-1-5!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!E:/project/yhlc-v1.0/agent-uniapp/sub-pages/auth/merchant.vue?vue&type=style&index=0&id=00986d99&lang=less&scoped=true& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
    if(false) { var cssReload; }
  

/***/ })

},[[64,"common/runtime","common/vendor","sub-pages/auth/common/vendor"]]]);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/sub-pages/auth/merchant.js.map
},{isPage:true,isComponent:true,currentFile:'sub-pages/auth/merchant.js'});require("sub-pages/auth/merchant.js");$gwx0_XC_2=function(_,_v,_n,_p,_s,_wp,_wl,$gwn,$gwl,$gwh,wh,$gstack,$gwrt,gra,grb,TestTest,wfor,_ca,_da,_r,_rz,_o,_oz,_1,_1z,_2,_2z,_m,_mz,nv_getDate,nv_getRegExp,nv_console,nv_parseInt,nv_parseFloat,nv_isNaN,nv_isFinite,nv_decodeURI,nv_decodeURIComponent,nv_encodeURI,nv_encodeURIComponent,$gdc,nv_JSON,_af,_gv,_ai,_grp,_gd,_gapi,$ixc,_ic,_w,_ev,_tsd){return function(path,global){
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
var z=__WXML_GLOBAL__.ops_set.$gwx0_XC_2 || [];
function gz$gwx0_XC_2_1(){
if( __WXML_GLOBAL__.ops_cached.$gwx0_XC_2_1)return __WXML_GLOBAL__.ops_cached.$gwx0_XC_2_1
__WXML_GLOBAL__.ops_cached.$gwx0_XC_2_1=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx0_XC_2_1);return __WXML_GLOBAL__.ops_cached.$gwx0_XC_2_1
}
__WXML_GLOBAL__.ops_set.$gwx0_XC_2=z;
__WXML_GLOBAL__.ops_init.$gwx0_XC_2=true;
var x=['./sub-pages/auth/privacy-policy.wxml'];d_[x[0]]={}
var m0=function(e,s,r,gg){
var z=gz$gwx0_XC_2_1()
return r
}
e_[x[0]]={f:m0,j:[],i:[],ti:[],ic:[]}
if(path&&e_[path]){
return function(env,dd,global){$gwxc=0;var root={"tag":"wx-page"};root.children=[]
;g="$gwx0_XC_2";var main=e_[path].f
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
}(__g.a,__g.b,__g.c,__g.d,__g.e,__g.f,__g.g,__g.h,__g.i,__g.j,__g.k,__g.l,__g.m,__g.n,__g.o,__g.p,__g.q,__g.r,__g.s,__g.t,__g.u,__g.v,__g.w,__g.x,__g.y,__g.z,__g.A,__g.B,__g.C,__g.D,__g.E,__g.F,__g.G,__g.H,__g.I,__g.J,__g.K,__g.L,__g.M,__g.N,__g.O,__g.P,__g.Q,__g.R,__g.S,__g.T,__g.U,__g.V,__g.W,__g.X,__g.Y,__g.Z,__g.aa);if(__vd_version_info__.delayedGwx||false)$gwx0_XC_2();	if (__vd_version_info__.delayedGwx) __wxAppCode__['sub-pages/auth/privacy-policy.wxml'] = [$gwx0_XC_2, './sub-pages/auth/privacy-policy.wxml'];else __wxAppCode__['sub-pages/auth/privacy-policy.wxml'] = $gwx0_XC_2( './sub-pages/auth/privacy-policy.wxml' );
	;__wxRoute = "sub-pages/auth/privacy-policy";__wxRouteBegin = true;__wxAppCurrentFile__="sub-pages/auth/privacy-policy.js";define("sub-pages/auth/privacy-policy.js",function(require,module,exports,window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){
require('./common/vendor.js');(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["sub-pages/auth/privacy-policy"],{

/***/ 84:
/*!**********************************************************************************************!*\
  !*** E:/project/yhlc-v1.0/agent-uniapp/main.js?{"page":"sub-pages%2Fauth%2Fprivacy-policy"} ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(wx, createPage) {

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ 4);
__webpack_require__(/*! uni-pages */ 30);
var _vue = _interopRequireDefault(__webpack_require__(/*! vue */ 25));
var _privacyPolicy = _interopRequireDefault(__webpack_require__(/*! ./sub-pages/auth/privacy-policy.vue */ 85));
// @ts-ignore
wx.__webpack_require_UNI_MP_PLUGIN__ = __webpack_require__;
createPage(_privacyPolicy.default);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/wx.js */ 1)["default"], __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 2)["createPage"]))

/***/ }),

/***/ 85:
/*!***************************************************************************!*\
  !*** E:/project/yhlc-v1.0/agent-uniapp/sub-pages/auth/privacy-policy.vue ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _privacy_policy_vue_vue_type_template_id_798238a8_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./privacy-policy.vue?vue&type=template&id=798238a8&scoped=true& */ 86);
/* harmony import */ var _privacy_policy_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./privacy-policy.vue?vue&type=script&lang=js& */ 88);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _privacy_policy_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _privacy_policy_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _privacy_policy_vue_vue_type_style_index_0_id_798238a8_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./privacy-policy.vue?vue&type=style&index=0&id=798238a8&lang=scss&scoped=true& */ 90);
/* harmony import */ var _D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 39);

var renderjs





/* normalize component */

var component = Object(_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _privacy_policy_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _privacy_policy_vue_vue_type_template_id_798238a8_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _privacy_policy_vue_vue_type_template_id_798238a8_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "798238a8",
  null,
  false,
  _privacy_policy_vue_vue_type_template_id_798238a8_scoped_true___WEBPACK_IMPORTED_MODULE_0__["components"],
  renderjs
)

component.options.__file = "sub-pages/auth/privacy-policy.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 86:
/*!**********************************************************************************************************************!*\
  !*** E:/project/yhlc-v1.0/agent-uniapp/sub-pages/auth/privacy-policy.vue?vue&type=template&id=798238a8&scoped=true& ***!
  \**********************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_privacy_policy_vue_vue_type_template_id_798238a8_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--17-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./privacy-policy.vue?vue&type=template&id=798238a8&scoped=true& */ 87);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_privacy_policy_vue_vue_type_template_id_798238a8_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_privacy_policy_vue_vue_type_template_id_798238a8_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_privacy_policy_vue_vue_type_template_id_798238a8_scoped_true___WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_privacy_policy_vue_vue_type_template_id_798238a8_scoped_true___WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),

/***/ 87:
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--17-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!E:/project/yhlc-v1.0/agent-uniapp/sub-pages/auth/privacy-policy.vue?vue&type=template&id=798238a8&scoped=true& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return recyclableRender; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "components", function() { return components; });
var components
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
}
var recyclableRender = false
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ 88:
/*!****************************************************************************************************!*\
  !*** E:/project/yhlc-v1.0/agent-uniapp/sub-pages/auth/privacy-policy.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_privacy_policy_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--13-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./privacy-policy.vue?vue&type=script&lang=js& */ 89);
/* harmony import */ var _D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_privacy_policy_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_privacy_policy_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_privacy_policy_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_privacy_policy_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_privacy_policy_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 89:
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--13-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!E:/project/yhlc-v1.0/agent-uniapp/sub-pages/auth/privacy-policy.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(uni) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
//
//
//
//
//
//
//
//
//
//
//
//
var _default = {
  data: function data() {
    return {
      title: '昱禾联仓供应商入驻协议',
      content: '',
      loading: false
    };
  },
  onLoad: function onLoad(options) {
    this.title = decodeURIComponent(options && options.title || this.title);
    uni.setNavigationBarTitle({
      title: this.title
    });
    this.loadAgreement();
  },
  methods: {
    loadAgreement: function loadAgreement() {
      var _this = this;
      this.loading = true;
      this.request('get', 'system/app/config/protocol/list').then(function (res) {
        var list = Array.isArray(res.data) ? res.data : [];
        var agreement = list.find(function (item) {
          return item && item.title === _this.title;
        });
        _this.content = _this.getAgreementContent(agreement);
        _this.loading = false;
      }).catch(function () {
        _this.loading = false;
      });
    },
    getAgreementContent: function getAgreementContent(agreement) {
      if (!agreement || !agreement.content) {
        return '';
      }
      return String(agreement.content).replace(/\n/g, '<br/>');
    }
  }
};
exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 2)["default"]))

/***/ }),

/***/ 90:
/*!*************************************************************************************************************************************!*\
  !*** E:/project/yhlc-v1.0/agent-uniapp/sub-pages/auth/privacy-policy.vue?vue&type=style&index=0&id=798238a8&lang=scss&scoped=true& ***!
  \*************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_privacy_policy_vue_vue_type_style_index_0_id_798238a8_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/mini-css-extract-plugin/dist/loader.js??ref--8-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--8-oneOf-1-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-2!./node_modules/postcss-loader/src??ref--8-oneOf-1-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/sass-loader/dist/cjs.js??ref--8-oneOf-1-4!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-5!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./privacy-policy.vue?vue&type=style&index=0&id=798238a8&lang=scss&scoped=true& */ 91);
/* harmony import */ var _D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_privacy_policy_vue_vue_type_style_index_0_id_798238a8_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_privacy_policy_vue_vue_type_style_index_0_id_798238a8_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_privacy_policy_vue_vue_type_style_index_0_id_798238a8_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_privacy_policy_vue_vue_type_style_index_0_id_798238a8_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_privacy_policy_vue_vue_type_style_index_0_id_798238a8_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 91:
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js??ref--8-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--8-oneOf-1-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-2!./node_modules/postcss-loader/src??ref--8-oneOf-1-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/sass-loader/dist/cjs.js??ref--8-oneOf-1-4!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-5!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!E:/project/yhlc-v1.0/agent-uniapp/sub-pages/auth/privacy-policy.vue?vue&type=style&index=0&id=798238a8&lang=scss&scoped=true& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
    if(false) { var cssReload; }
  

/***/ })

},[[84,"common/runtime","common/vendor"]]]);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/sub-pages/auth/privacy-policy.js.map
},{isPage:true,isComponent:true,currentFile:'sub-pages/auth/privacy-policy.js'});require("sub-pages/auth/privacy-policy.js");$gwx0_XC_3=function(_,_v,_n,_p,_s,_wp,_wl,$gwn,$gwl,$gwh,wh,$gstack,$gwrt,gra,grb,TestTest,wfor,_ca,_da,_r,_rz,_o,_oz,_1,_1z,_2,_2z,_m,_mz,nv_getDate,nv_getRegExp,nv_console,nv_parseInt,nv_parseFloat,nv_isNaN,nv_isFinite,nv_decodeURI,nv_decodeURIComponent,nv_encodeURI,nv_encodeURIComponent,$gdc,nv_JSON,_af,_gv,_ai,_grp,_gd,_gapi,$ixc,_ic,_w,_ev,_tsd){return function(path,global){
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
var z=__WXML_GLOBAL__.ops_set.$gwx0_XC_3 || [];
function gz$gwx0_XC_3_1(){
if( __WXML_GLOBAL__.ops_cached.$gwx0_XC_3_1)return __WXML_GLOBAL__.ops_cached.$gwx0_XC_3_1
__WXML_GLOBAL__.ops_cached.$gwx0_XC_3_1=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'page data-v-75ceecf4'])
Z([3,'__e'])
Z(z[1])
Z([3,'scroll data-v-75ceecf4'])
Z([[4],[[5],[[5],[[4],[[5],[[5],[1,'dragstart']],[[4],[[5],[[4],[[5],[[5],[1,'hideKeyboardOnScroll']],[[4],[[5],[1,'$event']]]]]]]]]],[[4],[[5],[[5],[1,'scroll']],[[4],[[5],[[4],[[5],[[5],[1,'hideKeyboardOnScroll']],[[4],[[5],[1,'$event']]]]]]]]]]])
Z([1,true])
Z(z[5])
Z(z[5])
Z([[2,'==='],[[6],[[7],[3,'form']],[3,'settlementType']],[1,'PUBLIC']])
Z(z[8])
Z(z[8])
Z(z[8])
Z(z[8])
Z(z[8])
Z([[2,'!=='],[[6],[[7],[3,'form']],[3,'settlementType']],[1,'PUBLIC']])
Z([[7],[3,'warehousePanelVisible']])
Z(z[1])
Z([3,'bank-mask data-v-75ceecf4'])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[[5],[1,'closeWarehousePanel']],[[4],[[5],[1,'$event']]]]]]]]]]])
Z(z[1])
Z([3,'bank-panel data-v-75ceecf4'])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[[5],[1,'']],[[4],[[5],[1,'$event']]]]]]]]]]])
Z([[2,'==='],[[6],[[7],[3,'$root']],[3,'g0']],[1,0]])
Z([[7],[3,'bankPanelVisible']])
Z(z[1])
Z(z[17])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[[5],[1,'closeBankPanel']],[[4],[[5],[1,'$event']]]]]]]]]]])
Z(z[1])
Z(z[20])
Z(z[21])
Z([[2,'+'],[[2,'+'],[1,'transform:'],[[2,'?:'],[[7],[3,'bankKeyboardHeight']],[[2,'+'],[[2,'+'],[1,'translateY(-'],[[7],[3,'bankKeyboardHeight']]],[1,'px)']],[1,'none']]],[1,';']])
Z([3,'bank-list data-v-75ceecf4'])
Z(z[5])
Z([1,false])
Z([[2,'+'],[[2,'+'],[1,'max-height:'],[[2,'?:'],[[7],[3,'bankKeyboardHeight']],[[2,'+'],[[2,'+'],[1,'calc(50vh - '],[[7],[3,'bankKeyboardHeight']]],[1,'px)']],[1,'50vh']]],[1,';']])
Z([[7],[3,'bankSearching']])
Z([[2,'!'],[[6],[[7],[3,'$root']],[3,'g1']]])
Z([[2,'==='],[[6],[[7],[3,'$root']],[3,'g2']],[1,0]])
Z([3,'__l'])
Z([3,'data-v-75ceecf4'])
Z([3,'440f3292-1'])
})(__WXML_GLOBAL__.ops_cached.$gwx0_XC_3_1);return __WXML_GLOBAL__.ops_cached.$gwx0_XC_3_1
}
__WXML_GLOBAL__.ops_set.$gwx0_XC_3=z;
__WXML_GLOBAL__.ops_init.$gwx0_XC_3=true;
var x=['./sub-pages/auth/register.wxml'];d_[x[0]]={}
var m0=function(e,s,r,gg){
var z=gz$gwx0_XC_3_1()
var hG=_n('view')
_rz(z,hG,'class',0,e,s,gg)
var oJ=_mz(z,'scroll-view',['binddragstart',1,'bindscroll',1,'class',2,'data-event-opts',3,'enhanced',4,'scrollY',5,'showScrollbar',6],[],e,s,gg)
var lK=_v()
_(oJ,lK)
if(_oz(z,8,e,s,gg)){lK.wxVkey=1
}
var aL=_v()
_(oJ,aL)
if(_oz(z,9,e,s,gg)){aL.wxVkey=1
}
var tM=_v()
_(oJ,tM)
if(_oz(z,10,e,s,gg)){tM.wxVkey=1
}
var eN=_v()
_(oJ,eN)
if(_oz(z,11,e,s,gg)){eN.wxVkey=1
}
var bO=_v()
_(oJ,bO)
if(_oz(z,12,e,s,gg)){bO.wxVkey=1
}
var oP=_v()
_(oJ,oP)
if(_oz(z,13,e,s,gg)){oP.wxVkey=1
}
var xQ=_v()
_(oJ,xQ)
if(_oz(z,14,e,s,gg)){xQ.wxVkey=1
}
lK.wxXCkey=1
aL.wxXCkey=1
tM.wxXCkey=1
eN.wxXCkey=1
bO.wxXCkey=1
oP.wxXCkey=1
xQ.wxXCkey=1
_(hG,oJ)
var oH=_v()
_(hG,oH)
if(_oz(z,15,e,s,gg)){oH.wxVkey=1
var oR=_mz(z,'view',['bindtap',16,'class',1,'data-event-opts',2],[],e,s,gg)
var fS=_mz(z,'view',['catchtap',19,'class',1,'data-event-opts',2],[],e,s,gg)
var cT=_v()
_(fS,cT)
if(_oz(z,22,e,s,gg)){cT.wxVkey=1
}
cT.wxXCkey=1
_(oR,fS)
_(oH,oR)
}
var cI=_v()
_(hG,cI)
if(_oz(z,23,e,s,gg)){cI.wxVkey=1
var hU=_mz(z,'view',['bindtap',24,'class',1,'data-event-opts',2],[],e,s,gg)
var oV=_mz(z,'view',['catchtap',27,'class',1,'data-event-opts',2,'style',3],[],e,s,gg)
var cW=_mz(z,'scroll-view',['class',31,'scrollY',1,'showScrollbar',2,'style',3],[],e,s,gg)
var oX=_v()
_(cW,oX)
if(_oz(z,35,e,s,gg)){oX.wxVkey=1
}
else{oX.wxVkey=2
var lY=_v()
_(oX,lY)
if(_oz(z,36,e,s,gg)){lY.wxVkey=1
}
else{lY.wxVkey=2
var aZ=_v()
_(lY,aZ)
if(_oz(z,37,e,s,gg)){aZ.wxVkey=1
}
aZ.wxXCkey=1
}
lY.wxXCkey=1
}
oX.wxXCkey=1
_(oV,cW)
_(hU,oV)
_(cI,hU)
}
var t1=_mz(z,'privacy-auth-popup',['bind:__l',38,'class',1,'vueId',2],[],e,s,gg)
_(hG,t1)
oH.wxXCkey=1
cI.wxXCkey=1
_(r,hG)
return r
}
e_[x[0]]={f:m0,j:[],i:[],ti:[],ic:[]}
if(path&&e_[path]){
return function(env,dd,global){$gwxc=0;var root={"tag":"wx-page"};root.children=[]
;g="$gwx0_XC_3";var main=e_[path].f
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
}(__g.a,__g.b,__g.c,__g.d,__g.e,__g.f,__g.g,__g.h,__g.i,__g.j,__g.k,__g.l,__g.m,__g.n,__g.o,__g.p,__g.q,__g.r,__g.s,__g.t,__g.u,__g.v,__g.w,__g.x,__g.y,__g.z,__g.A,__g.B,__g.C,__g.D,__g.E,__g.F,__g.G,__g.H,__g.I,__g.J,__g.K,__g.L,__g.M,__g.N,__g.O,__g.P,__g.Q,__g.R,__g.S,__g.T,__g.U,__g.V,__g.W,__g.X,__g.Y,__g.Z,__g.aa);if(__vd_version_info__.delayedGwx||false)$gwx0_XC_3();	if (__vd_version_info__.delayedGwx) __wxAppCode__['sub-pages/auth/register.wxml'] = [$gwx0_XC_3, './sub-pages/auth/register.wxml'];else __wxAppCode__['sub-pages/auth/register.wxml'] = $gwx0_XC_3( './sub-pages/auth/register.wxml' );
	;__wxRoute = "sub-pages/auth/register";__wxRouteBegin = true;__wxAppCurrentFile__="sub-pages/auth/register.js";define("sub-pages/auth/register.js",function(require,module,exports,window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){
require('./common/vendor.js');(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["sub-pages/auth/register"],{

/***/ 72:
/*!****************************************************************************************!*\
  !*** E:/project/yhlc-v1.0/agent-uniapp/main.js?{"page":"sub-pages%2Fauth%2Fregister"} ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(wx, createPage) {

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ 4);
__webpack_require__(/*! uni-pages */ 30);
var _vue = _interopRequireDefault(__webpack_require__(/*! vue */ 25));
var _register = _interopRequireDefault(__webpack_require__(/*! ./sub-pages/auth/register.vue */ 73));
// @ts-ignore
wx.__webpack_require_UNI_MP_PLUGIN__ = __webpack_require__;
createPage(_register.default);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/wx.js */ 1)["default"], __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 2)["createPage"]))

/***/ }),

/***/ 73:
/*!*********************************************************************!*\
  !*** E:/project/yhlc-v1.0/agent-uniapp/sub-pages/auth/register.vue ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _register_vue_vue_type_template_id_75ceecf4_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./register.vue?vue&type=template&id=75ceecf4&scoped=true& */ 74);
/* harmony import */ var _register_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./register.vue?vue&type=script&lang=js& */ 76);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _register_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _register_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _register_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./register.vue?vue&type=style&index=0&lang=css& */ 80);
/* harmony import */ var _register_vue_vue_type_style_index_1_id_75ceecf4_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./register.vue?vue&type=style&index=1&id=75ceecf4&lang=scss&scoped=true& */ 82);
/* harmony import */ var _D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 39);

var renderjs






/* normalize component */

var component = Object(_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_4__["default"])(
  _register_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _register_vue_vue_type_template_id_75ceecf4_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _register_vue_vue_type_template_id_75ceecf4_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "75ceecf4",
  null,
  false,
  _register_vue_vue_type_template_id_75ceecf4_scoped_true___WEBPACK_IMPORTED_MODULE_0__["components"],
  renderjs
)

component.options.__file = "sub-pages/auth/register.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 74:
/*!****************************************************************************************************************!*\
  !*** E:/project/yhlc-v1.0/agent-uniapp/sub-pages/auth/register.vue?vue&type=template&id=75ceecf4&scoped=true& ***!
  \****************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_register_vue_vue_type_template_id_75ceecf4_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--17-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./register.vue?vue&type=template&id=75ceecf4&scoped=true& */ 75);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_register_vue_vue_type_template_id_75ceecf4_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_register_vue_vue_type_template_id_75ceecf4_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_register_vue_vue_type_template_id_75ceecf4_scoped_true___WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_register_vue_vue_type_template_id_75ceecf4_scoped_true___WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),

/***/ 75:
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--17-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!E:/project/yhlc-v1.0/agent-uniapp/sub-pages/auth/register.vue?vue&type=template&id=75ceecf4&scoped=true& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return recyclableRender; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "components", function() { return components; });
var components
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  var g0 = _vm.warehousePanelVisible ? _vm.warehouseList.length : null
  var l0 = _vm.warehousePanelVisible
    ? _vm.__map(_vm.warehouseList, function (item, idx) {
        var $orig = _vm.__get_orig(item)
        var m0 = _vm.warehouseItemLabel(item)
        return {
          $orig: $orig,
          m0: m0,
        }
      })
    : null
  var g1 =
    _vm.bankPanelVisible && !_vm.bankSearching
      ? String(_vm.bankKeyword || "").trim()
      : null
  var g2 =
    _vm.bankPanelVisible && !_vm.bankSearching && !!g1
      ? _vm.bankList.length
      : null
  _vm.$mp.data = Object.assign(
    {},
    {
      $root: {
        g0: g0,
        l0: l0,
        g1: g1,
        g2: g2,
      },
    }
  )
}
var recyclableRender = false
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ 76:
/*!**********************************************************************************************!*\
  !*** E:/project/yhlc-v1.0/agent-uniapp/sub-pages/auth/register.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_register_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--13-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./register.vue?vue&type=script&lang=js& */ 77);
/* harmony import */ var _D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_register_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_register_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_register_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_register_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_register_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 77:
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--13-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!E:/project/yhlc-v1.0/agent-uniapp/sub-pages/auth/register.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(uni) {

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ 4);
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _regenerator = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/regenerator */ 58));
var _asyncToGenerator2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ 60));
var _typeof2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/typeof */ 13));
var _storage = __webpack_require__(/*! @/api/storage.js */ 78);
var _product = __webpack_require__(/*! @/api/product.js */ 79);
var _privacy = __webpack_require__(/*! @/utils/privacy.js */ 35);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

var INVOICE_OPTIONS = [{
  label: '专票',
  value: 1
}, {
  label: '普票',
  value: 2
}, {
  label: '无票',
  value: 3
}];
var SETTLEMENT_OPTIONS = [{
  label: '对私',
  value: 'PRIVATE'
}, {
  label: '对公',
  value: 'PUBLIC'
}];
var MERCHANT_TYPE_OPTIONS = [{
  label: '个体工商户',
  value: 'INDIVIDUAL'
}, {
  label: '企业',
  value: 'ENTERPRISE'
}];
var _default = {
  data: function data() {
    return {
      agreePrivacy: false,
      submitLoading: false,
      bankList: [],
      bankKeyword: '',
      bankSearching: false,
      bankPanelVisible: false,
      // 开户行面板：键盘弹起时整体上移的高度（px），0 表示键盘未弹起
      bankKeyboardHeight: 0,
      warehousePanelVisible: false,
      warehouseList: [],
      invoiceOptions: INVOICE_OPTIONS,
      settlementOptions: SETTLEMENT_OPTIONS,
      merchantTypeOptions: MERCHANT_TYPE_OPTIONS,
      form: {
        id: undefined,
        supplierCode: undefined,
        supplierName: undefined,
        realName: undefined,
        settlementType: 'PRIVATE',
        account: undefined,
        password: undefined,
        stallCode: undefined,
        invoiceType: undefined,
        businessLicense: undefined,
        idCardAvatar: undefined,
        idCardNational: undefined,
        bankName: undefined,
        bankCode: '',
        bankCardNo: undefined,
        idCardNo: undefined,
        companyName: undefined,
        licenceNo: undefined,
        merchantType: undefined,
        legalName: undefined,
        legalLicenceNo: undefined,
        bankImg: undefined,
        phone: undefined,
        mainWarehouseId: undefined
      }
    };
  },
  computed: {
    invoiceTypeText: function invoiceTypeText() {
      var _this = this;
      var cur = this.invoiceOptions.find(function (x) {
        return Number(x.value) === Number(_this.form.invoiceType);
      });
      return cur ? cur.label : '请选择开票类型';
    },
    settlementTypeText: function settlementTypeText() {
      var _this2 = this;
      var cur = this.settlementOptions.find(function (x) {
        return String(x.value) === String(_this2.form.settlementType);
      });
      return cur ? cur.label : '请选择结算主体';
    },
    merchantTypeText: function merchantTypeText() {
      var _this3 = this;
      var cur = this.merchantTypeOptions.find(function (x) {
        return String(x.value) === String(_this3.form.merchantType);
      });
      return cur ? cur.label : '请选择执照类型';
    },
    bankText: function bankText() {
      return this.form.bankName || '请选择/输入银行开户行';
    },
    warehouseText: function warehouseText() {
      var _this4 = this;
      if (!this.form.mainWarehouseId) return '请选择所属总仓';
      var cur = this.warehouseList.find(function (x) {
        return String(x.id) === String(_this4.form.mainWarehouseId);
      });
      if (!cur) return String(this.form.mainWarehouseId);
      return cur.name || cur.storageName || cur.leaderName || String(this.form.mainWarehouseId);
    }
  },
  onLoad: function onLoad() {
    this.fetchWarehouseList();
  },
  methods: {
    hideKeyboardOnScroll: function hideKeyboardOnScroll() {
      // @scroll 触发频繁，节流一下，避免反复调用原生收起键盘
      var now = Date.now();
      if (this._lastHideKeyboardAt && now - this._lastHideKeyboardAt < 400) return;
      this._lastHideKeyboardAt = now;
      uni.hideKeyboard();
    },
    openPrivacyPolicy: function openPrivacyPolicy() {
      uni.navigateTo({
        url: '/sub-pages/auth/privacy-policy'
      });
    },
    onPrivacyCheckboxChange: function onPrivacyCheckboxChange(e) {
      var v = e && e.detail && e.detail.value || [];
      this.agreePrivacy = Array.isArray(v) && v.indexOf('1') !== -1;
    },
    fetchWarehouseList: function fetchWarehouseList() {
      var _this5 = this;
      (0, _storage.getStorageList)(this, null).then(function (res) {
        var rows = Array.isArray(res && res.rows) ? res.rows : Array.isArray(res && res.data) ? res.data : [];
        _this5.warehouseList = rows;
      }).catch(function () {
        _this5.warehouseList = [];
      });
    },
    // 服务端 bankName 模糊查询。注意：MyBatis 分页 maxLimit=500，前端 pageSize:5000 实际只会返回前 500 条
    //（库内按名称从「阿/安…」排，中国银行/招商银行等在后半段，本地过滤永远搜不到）
    fetchBankList: function fetchBankList() {
      var _this6 = this;
      var keyword = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
      var params = {
        pageNum: 1,
        pageSize: 500
      };
      var k = String(keyword || '').trim();
      if (k) params.bankName = k;
      return (0, _storage.getBankInfoList)(this, params).then(function (res) {
        var rows = Array.isArray(res && res.rows) ? res.rows : [];
        _this6.bankList = rows.filter(function (x) {
          return x && (0, _typeof2.default)(x) === 'object';
        });
        return _this6.bankList;
      }).catch(function () {
        _this6.bankList = [];
        return [];
      });
    },
    onBankKeywordInput: function onBankKeywordInput(e) {
      var _this7 = this;
      var val = e && e.detail && e.detail.value != null ? e.detail.value : this.bankKeyword;
      this.bankKeyword = val;
      if (this._bankSearchTimer) clearTimeout(this._bankSearchTimer);
      this._bankSearchTimer = setTimeout(function () {
        _this7.searchBankList(val);
      }, 300);
    },
    searchBankList: function searchBankList(keyword) {
      var _this8 = this;
      var k = String(keyword || '').trim();
      if (!k) {
        this.bankList = [];
        this.bankSearching = false;
        return Promise.resolve([]);
      }
      this.bankSearching = true;
      return this.fetchBankList(k).finally(function () {
        _this8.bankSearching = false;
      });
    },
    openInvoicePicker: function openInvoicePicker() {
      var _this9 = this;
      uni.showActionSheet({
        itemList: this.invoiceOptions.map(function (x) {
          return x.label;
        }),
        success: function success(_ref) {
          var tapIndex = _ref.tapIndex;
          var selected = _this9.invoiceOptions[tapIndex];
          if (!selected) return;
          _this9.form.invoiceType = selected.value;
        }
      });
    },
    openSettlementPicker: function openSettlementPicker() {
      var _this10 = this;
      uni.showActionSheet({
        itemList: this.settlementOptions.map(function (x) {
          return x.label;
        }),
        success: function success(_ref2) {
          var tapIndex = _ref2.tapIndex;
          var selected = _this10.settlementOptions[tapIndex];
          if (!selected) return;
          _this10.form.settlementType = selected.value;
          if (selected.value === 'PUBLIC') {
            _this10.form.idCardNo = undefined;
            _this10.form.licenceNo = undefined;
            _this10.form.merchantType = undefined;
            _this10.form.legalName = undefined;
            _this10.form.legalLicenceNo = undefined;
            _this10.form.bankImg = undefined;
          }
        }
      });
    },
    openMerchantTypePicker: function openMerchantTypePicker() {
      var _this11 = this;
      uni.showActionSheet({
        itemList: this.merchantTypeOptions.map(function (x) {
          return x.label;
        }),
        success: function success(_ref3) {
          var tapIndex = _ref3.tapIndex;
          var selected = _this11.merchantTypeOptions[tapIndex];
          if (!selected) return;
          _this11.form.merchantType = selected.value;
        }
      });
    },
    warehouseItemLabel: function warehouseItemLabel(item) {
      if (!item || (0, _typeof2.default)(item) !== 'object') return '—';
      return item.name || item.storageName || item.leaderName || String(item.id || '');
    },
    openWarehousePicker: function openWarehousePicker() {
      var _this12 = this;
      if (this.warehouseList.length) {
        this.warehousePanelVisible = true;
        return;
      }
      uni.showLoading({
        title: '加载总仓中...',
        mask: true
      });
      (0, _storage.getStorageList)(this, null).then(function (res) {
        var rows = Array.isArray(res && res.rows) ? res.rows : Array.isArray(res && res.data) ? res.data : [];
        _this12.warehouseList = rows;
        if (!rows.length) {
          uni.showToast({
            title: '总仓数据为空',
            icon: 'none'
          });
          return;
        }
        _this12.warehousePanelVisible = true;
      }).catch(function () {
        _this12.warehouseList = [];
        uni.showToast({
          title: '总仓数据加载失败',
          icon: 'none'
        });
      }).finally(function () {
        uni.hideLoading();
      });
    },
    closeWarehousePanel: function closeWarehousePanel() {
      this.warehousePanelVisible = false;
    },
    onWarehouseItemTap: function onWarehouseItemTap(e) {
      var idx = Number(e && e.currentTarget && e.currentTarget.dataset ? e.currentTarget.dataset.index : -1);
      if (!Number.isFinite(idx) || idx < 0) return;
      var selected = this.warehouseList[idx];
      if (!selected) return;
      this.form.mainWarehouseId = selected.id;
      this.closeWarehousePanel();
    },
    openBankPanel: function openBankPanel() {
      if (this._bankSearchTimer) clearTimeout(this._bankSearchTimer);
      this.bankKeyword = '';
      this.bankList = [];
      this.bankSearching = false;
      this.bankPanelVisible = true;
      this._registerBankKeyboardListener();
    },
    closeBankPanel: function closeBankPanel() {
      if (this._bankSearchTimer) clearTimeout(this._bankSearchTimer);
      this.bankPanelVisible = false;
      this._unregisterBankKeyboardListener();
    },
    _registerBankKeyboardListener: function _registerBankKeyboardListener() {
      var _this13 = this;
      // 兼容端：仅在支持的平台注册，避免 H5/不支持端报错
      if (typeof uni.onKeyboardHeightChange !== 'function') return;
      if (!this._onBankKeyboardHeight) {
        this._onBankKeyboardHeight = function (res) {
          _this13.bankKeyboardHeight = res && res.height || 0;
        };
      }
      uni.onKeyboardHeightChange(this._onBankKeyboardHeight);
    },
    _unregisterBankKeyboardListener: function _unregisterBankKeyboardListener() {
      if (typeof uni.offKeyboardHeightChange !== 'function') return;
      if (this._onBankKeyboardHeight) {
        uni.offKeyboardHeightChange(this._onBankKeyboardHeight);
      }
      this.bankKeyboardHeight = 0;
    },
    onBankSearchFocus: function onBankSearchFocus() {
      // 焦点到来时若未监听则补注册一次，确保能拿到键盘高度
      this._registerBankKeyboardListener();
    },
    onBankSearchBlur: function onBankSearchBlur() {
      // 失焦即收起键盘，复位上移
      this.bankKeyboardHeight = 0;
    },
    selectBank: function selectBank(selected) {
      if (!selected) return;
      this.form.bankName = selected.bankName || '';
      this.form.bankCode = selected.bankType || '';
      this.closeBankPanel();
    },
    onBankItemTap: function onBankItemTap(e) {
      var idx = Number(e && e.currentTarget && e.currentTarget.dataset ? e.currentTarget.dataset.index : -1);
      if (!Number.isFinite(idx) || idx < 0) return;
      var selected = this.bankList[idx];
      this.selectBank(selected);
    },
    validateForm: function validateForm() {
      if (!this.agreePrivacy) return '请先阅读并同意《隐私政策》';
      if (!this.form.mainWarehouseId) return '请选择所属总仓';
      if (!this.form.supplierCode) return '请输入供应商编号';
      if (!this.form.supplierName) return '请输入供应商名称';
      if (!String(this.form.realName || '').trim()) return '请输入真实姓名';
      if (!this.form.phone) return '请输入手机号';
      if (!/^1[3-9]\d{9}$/.test(String(this.form.phone))) return '请输入正确的手机号';
      if (!this.form.account) return '请输入登录账号';
      if (!this.form.password) return '请输入登录密码';
      if (!this.form.invoiceType) return '请选择开票类型';
      if (!this.form.settlementType) return '请选择结算主体';
      if (this.form.settlementType === 'PUBLIC') {
        if (!this.form.companyName) return '请输入公司名称';
        if (!this.form.licenceNo) return '请输入营业执照编号';
        if (!this.form.businessLicense) return '请上传营业执照';
        if (!this.form.merchantType) return '请选择执照类型';
        if (!this.form.legalName) return '请输入法人姓名';
        if (!this.form.legalLicenceNo) return '请输入法人身份证号';
        if (!this.form.bankImg) return '请上传开户许可证';
      } else {
        if (!this.form.idCardNo) return '请输入身份证号';
      }
      if (!this.form.idCardAvatar) return '请上传身份证(头像)';
      if (!this.form.idCardNational) return '请上传身份证(国徽)';
      if (!this.form.bankName) return '请选择开户行';
      return '';
    },
    pickImage: function pickImage(field) {
      var _this14 = this;
      uni.chooseImage({
        count: 1,
        sizeType: ['compressed'],
        sourceType: ['album', 'camera'],
        success: function success(r) {
          var path = r.tempFilePaths && r.tempFilePaths[0];
          if (!path) return;
          uni.showLoading({
            title: '上传中...',
            mask: true
          });
          (0, _product.uploadSupplierImage)(_this14, path).then(function (data) {
            _this14.form[field] = data && data.url ? data.url : '';
          }).finally(function () {
            uni.hideLoading();
          });
        }
      });
    },
    clearUpload: function clearUpload(field) {
      this.form[field] = undefined;
    },
    onSubmit: function onSubmit() {
      var _this15 = this;
      return (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee() {
        var msg, authorized;
        return _regenerator.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                msg = _this15.validateForm();
                if (!msg) {
                  _context.next = 4;
                  break;
                }
                uni.showToast({
                  title: msg,
                  icon: 'none'
                });
                return _context.abrupt("return");
              case 4:
                _context.next = 6;
                return (0, _privacy.requirePrivacyAuthorize)();
              case 6:
                authorized = _context.sent;
                if (authorized) {
                  _context.next = 10;
                  break;
                }
                uni.showToast({
                  title: '需同意隐私保护指引才能完成注册',
                  icon: 'none'
                });
                return _context.abrupt("return");
              case 10:
                if (!_this15.submitLoading) {
                  _context.next = 12;
                  break;
                }
                return _context.abrupt("return");
              case 12:
                _this15.submitLoading = true;
                (0, _storage.addSupplierInfo)(_this15, _this15.form).then(function (res) {
                  if (res && Number(res.code) === 200) {
                    uni.showToast({
                      title: '注册成功',
                      icon: 'success'
                    });
                    setTimeout(function () {
                      _this15.goLogin();
                    }, 600);
                  }
                }).finally(function () {
                  _this15.submitLoading = false;
                });
              case 14:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }))();
    },
    goLogin: function goLogin() {
      uni.navigateTo({
        url: '/sub-pages/auth/merchant'
      });
    }
  }
};
exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 2)["default"]))

/***/ }),

/***/ 80:
/*!******************************************************************************************************!*\
  !*** E:/project/yhlc-v1.0/agent-uniapp/sub-pages/auth/register.vue?vue&type=style&index=0&lang=css& ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_register_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/mini-css-extract-plugin/dist/loader.js??ref--6-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-1-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-oneOf-1-2!./node_modules/postcss-loader/src??ref--6-oneOf-1-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./register.vue?vue&type=style&index=0&lang=css& */ 81);
/* harmony import */ var _D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_register_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_register_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_register_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_register_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_register_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 81:
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js??ref--6-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-1-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-oneOf-1-2!./node_modules/postcss-loader/src??ref--6-oneOf-1-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!E:/project/yhlc-v1.0/agent-uniapp/sub-pages/auth/register.vue?vue&type=style&index=0&lang=css& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
    if(false) { var cssReload; }
  

/***/ }),

/***/ 82:
/*!*******************************************************************************************************************************!*\
  !*** E:/project/yhlc-v1.0/agent-uniapp/sub-pages/auth/register.vue?vue&type=style&index=1&id=75ceecf4&lang=scss&scoped=true& ***!
  \*******************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_register_vue_vue_type_style_index_1_id_75ceecf4_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/mini-css-extract-plugin/dist/loader.js??ref--8-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--8-oneOf-1-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-2!./node_modules/postcss-loader/src??ref--8-oneOf-1-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/sass-loader/dist/cjs.js??ref--8-oneOf-1-4!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-5!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./register.vue?vue&type=style&index=1&id=75ceecf4&lang=scss&scoped=true& */ 83);
/* harmony import */ var _D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_register_vue_vue_type_style_index_1_id_75ceecf4_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_register_vue_vue_type_style_index_1_id_75ceecf4_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_register_vue_vue_type_style_index_1_id_75ceecf4_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_register_vue_vue_type_style_index_1_id_75ceecf4_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_register_vue_vue_type_style_index_1_id_75ceecf4_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 83:
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js??ref--8-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--8-oneOf-1-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-2!./node_modules/postcss-loader/src??ref--8-oneOf-1-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/sass-loader/dist/cjs.js??ref--8-oneOf-1-4!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-5!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!E:/project/yhlc-v1.0/agent-uniapp/sub-pages/auth/register.vue?vue&type=style&index=1&id=75ceecf4&lang=scss&scoped=true& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
    if(false) { var cssReload; }
  

/***/ })

},[[72,"common/runtime","common/vendor"]]]);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/sub-pages/auth/register.js.map
},{isPage:true,isComponent:true,currentFile:'sub-pages/auth/register.js'});require("sub-pages/auth/register.js");