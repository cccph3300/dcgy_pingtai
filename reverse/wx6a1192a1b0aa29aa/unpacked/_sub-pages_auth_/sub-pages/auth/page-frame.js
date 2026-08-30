var __wxAppData=__wxAppData||{};var __wxAppCode__=__wxAppCode__||{};var global=global||{};var __WXML_GLOBAL__=__WXML_GLOBAL__||{entrys:{},defines:{},modules:{},ops:[],wxs_nf_init:undefined,total_ops:0};var Component=Component||function(){};var definePlugin=definePlugin||function(){};var requirePlugin=requirePlugin||function(){};var Behavior=Behavior||function(){};var __vd_version_info__=__vd_version_info__||{};var __GWX_GLOBAL__=__GWX_GLOBAL__||{};if(this&&this.__g===undefined)Object.defineProperty(this,"__g",{configurable:false,enumerable:false,writable:false,value:function(){function D(e,t){if(typeof t!="undefined")e.children.push(t)}function S(e){if(typeof e!="undefined")return{tag:"virtual",wxKey:e,children:[]};return{tag:"virtual",children:[]}}function v(e){return{tag:"wx-"+e,attr:{},children:[],n:[],raw:{},generics:{}}}function e(e,t){t&&e.properities.push(t)}function t(e,t,r){return typeof e[r]!="undefined"?e[r]:t[r]}function u(e){console.warn("WXMLRT_"+g+":"+e)}function r(e,t){u(t+":-1:-1:-1: Template `"+e+"` is being called recursively, will be stop.")}var s=console.warn;var n=console.log;function o(){function e(){}e.prototype={hn:function(e,t){if(typeof e=="object"){var r=0;var n=false,o=false;for(var a in e){n=n|a==="__value__";o=o|a==="__wxspec__";r++;if(r>2)break}return r==2&&n&&o&&(t||e.__wxspec__!=="m"||this.hn(e.__value__)==="h")?"h":"n"}return"n"},nh:function(e,t){return{__value__:e,__wxspec__:t?t:true}},rv:function(e){return this.hn(e,true)==="n"?e:this.rv(e.__value__)},hm:function(e){if(typeof e=="object"){var t=0;var r=false,n=false;for(var o in e){r=r|o==="__value__";n=n|o==="__wxspec__";t++;if(t>2)break}return t==2&&r&&n&&(e.__wxspec__==="m"||this.hm(e.__value__))}return false}};return new e}var A=o();function T(e){var t=e.split("\n "+" "+" "+" ");for(var r=0;r<t.length;++r){if(0==r)continue;if(")"===t[r][t[r].length-1])t[r]=t[r].replace(/\s\(.*\)$/,"");else t[r]="at anonymous function"}return t.join("\n "+" "+" "+" ")}function a(M){function m(e,t,r,n,o){var a=false;var i=e[0][1];var p,u,l,f,v,c;switch(i){case"?:":p=x(e[1],t,r,n,o,a);l=M&&A.hn(p)==="h";f=A.rv(p)?x(e[2],t,r,n,o,a):x(e[3],t,r,n,o,a);f=l&&A.hn(f)==="n"?A.nh(f,"c"):f;return f;break;case"&&":p=x(e[1],t,r,n,o,a);l=M&&A.hn(p)==="h";f=A.rv(p)?x(e[2],t,r,n,o,a):A.rv(p);f=l&&A.hn(f)==="n"?A.nh(f,"c"):f;return f;break;case"||":p=x(e[1],t,r,n,o,a);l=M&&A.hn(p)==="h";f=A.rv(p)?A.rv(p):x(e[2],t,r,n,o,a);f=l&&A.hn(f)==="n"?A.nh(f,"c"):f;return f;break;case"+":case"*":case"/":case"%":case"|":case"^":case"&":case"===":case"==":case"!=":case"!==":case">=":case"<=":case">":case"<":case"<<":case">>":p=x(e[1],t,r,n,o,a);u=x(e[2],t,r,n,o,a);l=M&&(A.hn(p)==="h"||A.hn(u)==="h");switch(i){case"+":f=A.rv(p)+A.rv(u);break;case"*":f=A.rv(p)*A.rv(u);break;case"/":f=A.rv(p)/A.rv(u);break;case"%":f=A.rv(p)%A.rv(u);break;case"|":f=A.rv(p)|A.rv(u);break;case"^":f=A.rv(p)^A.rv(u);break;case"&":f=A.rv(p)&A.rv(u);break;case"===":f=A.rv(p)===A.rv(u);break;case"==":f=A.rv(p)==A.rv(u);break;case"!=":f=A.rv(p)!=A.rv(u);break;case"!==":f=A.rv(p)!==A.rv(u);break;case">=":f=A.rv(p)>=A.rv(u);break;case"<=":f=A.rv(p)<=A.rv(u);break;case">":f=A.rv(p)>A.rv(u);break;case"<":f=A.rv(p)<A.rv(u);break;case"<<":f=A.rv(p)<<A.rv(u);break;case">>":f=A.rv(p)>>A.rv(u);break;default:break}return l?A.nh(f,"c"):f;break;case"-":p=e.length===3?x(e[1],t,r,n,o,a):0;u=e.length===3?x(e[2],t,r,n,o,a):x(e[1],t,r,n,o,a);l=M&&(A.hn(p)==="h"||A.hn(u)==="h");f=l?A.rv(p)-A.rv(u):p-u;return l?A.nh(f,"c"):f;break;case"!":p=x(e[1],t,r,n,o,a);l=M&&A.hn(p)=="h";f=!A.rv(p);return l?A.nh(f,"c"):f;case"~":p=x(e[1],t,r,n,o,a);l=M&&A.hn(p)=="h";f=~A.rv(p);return l?A.nh(f,"c"):f;default:s("unrecognized op"+i)}}function x(e,t,r,n,o,a){var i=e[0];var p=false;if(typeof a!=="undefined")o.ap=a;if(typeof i==="object"){var u=i[0];var l,f,v,c,s,y,b,d,h,_,g;switch(u){case 2:return m(e,t,r,n,o);break;case 4:return x(e[1],t,r,n,o,p);break;case 5:switch(e.length){case 2:l=x(e[1],t,r,n,o,p);return M?[l]:[A.rv(l)];return[l];break;case 1:return[];break;default:l=x(e[1],t,r,n,o,p);v=x(e[2],t,r,n,o,p);l.push(M?v:A.rv(v));return l;break}break;case 6:l=x(e[1],t,r,n,o);var w=o.ap;h=A.hn(l)==="h";f=h?A.rv(l):l;o.is_affected|=h;if(M){if(f===null||typeof f==="undefined"){return h?A.nh(undefined,"e"):undefined}v=x(e[2],t,r,n,o,p);_=A.hn(v)==="h";c=_?A.rv(v):v;o.ap=w;o.is_affected|=_;if(c===null||typeof c==="undefined"||c==="__proto__"||c==="prototype"||c==="caller"){return h||_?A.nh(undefined,"e"):undefined}y=f[c];if(typeof y==="function"&&!w)y=undefined;g=A.hn(y)==="h";o.is_affected|=g;return h||_?g?y:A.nh(y,"e"):y}else{if(f===null||typeof f==="undefined"){return undefined}v=x(e[2],t,r,n,o,p);_=A.hn(v)==="h";c=_?A.rv(v):v;o.ap=w;o.is_affected|=_;if(c===null||typeof c==="undefined"||c==="__proto__"||c==="prototype"||c==="caller"){return undefined}y=f[c];if(typeof y==="function"&&!w)y=undefined;g=A.hn(y)==="h";o.is_affected|=g;return g?A.rv(y):y}case 7:switch(e[1][0]){case 11:o.is_affected|=A.hn(n)==="h";return n;case 3:b=A.rv(r);d=A.rv(t);v=e[1][1];if(n&&n.f&&n.f.hasOwnProperty(v)){l=n.f;o.ap=true}else{l=b&&b.hasOwnProperty(v)?r:d&&d.hasOwnProperty(v)?t:undefined}if(M){if(l){h=A.hn(l)==="h";f=h?A.rv(l):l;y=f[v];g=A.hn(y)==="h";o.is_affected|=h||g;y=h&&!g?A.nh(y,"e"):y;return y}}else{if(l){h=A.hn(l)==="h";f=h?A.rv(l):l;y=f[v];g=A.hn(y)==="h";o.is_affected|=h||g;return A.rv(y)}}return undefined}break;case 8:l={};l[e[1]]=x(e[2],t,r,n,o,p);return l;break;case 9:l=x(e[1],t,r,n,o,p);v=x(e[2],t,r,n,o,p);function O(e,t,r){var n,o;h=A.hn(e)==="h";_=A.hn(t)==="h";f=A.rv(e);c=A.rv(t);for(var a in c){if(r||!f.hasOwnProperty(a)){f[a]=M?_?A.nh(c[a],"e"):c[a]:A.rv(c[a])}}return e}var s=l;var j=true;if(typeof e[1][0]==="object"&&e[1][0][0]===10){l=v;v=s;j=false}if(typeof e[1][0]==="object"&&e[1][0][0]===10){var P={};return O(O(P,l,j),v,j)}else return O(l,v,j);break;case 10:l=x(e[1],t,r,n,o,p);l=M?l:A.rv(l);return l;break;case 12:var P;l=x(e[1],t,r,n,o);if(!o.ap){return M&&A.hn(l)==="h"?A.nh(P,"f"):P}var w=o.ap;v=x(e[2],t,r,n,o,p);o.ap=w;h=A.hn(l)==="h";_=N(v);f=A.rv(l);c=A.rv(v);snap_bb=K(c,"nv_");try{P=typeof f==="function"?K(f.apply(null,snap_bb)):undefined}catch(t){t.message=t.message.replace(/nv_/g,"");t.stack=t.stack.substring(0,t.stack.indexOf("\n",t.stack.lastIndexOf("at nv_")));t.stack=t.stack.replace(/\snv_/g," ");t.stack=T(t.stack);if(n.debugInfo){t.stack+="\n "+" "+" "+" at "+n.debugInfo[0]+":"+n.debugInfo[1]+":"+n.debugInfo[2];console.error(t)}P=undefined}return M&&(_||h)?A.nh(P,"f"):P}}else{if(i===3||i===1)return e[1];else if(i===11){var l="";for(var D=1;D<e.length;D++){var S=A.rv(x(e[D],t,r,n,o,p));l+=typeof S==="undefined"?"":S}return l}}}function e(e,t,r,n,o,a){if(e[0]=="11182016"){n.debugInfo=e[2];return x(e[1],t,r,n,o,a)}else{n.debugInfo=null;return x(e,t,r,n,o,a)}}return e}var f=a(true);var c=a(false);function i(e,t,r,n,o,a,i,p){{var u={is_affected:false};var l=f(t,r,n,o,u);if(JSON.stringify(l)!=JSON.stringify(a)||u.is_affected!=p){console.warn("A. "+e+" get result "+JSON.stringify(l)+", "+u.is_affected+", but "+JSON.stringify(a)+", "+p+" is expected")}}{var u={is_affected:false};var l=c(t,r,n,o,u);if(JSON.stringify(l)!=JSON.stringify(i)||u.is_affected!=p){console.warn("B. "+e+" get result "+JSON.stringify(l)+", "+u.is_affected+", but "+JSON.stringify(i)+", "+p+" is expected")}}}function y(e,t,r,n,o,a,i,p,u){var l=A.hn(e)==="n";var f=A.rv(n);var v=f.hasOwnProperty(i);var c=f.hasOwnProperty(p);var s=f[i];var y=f[p];var b=Object.prototype.toString.call(A.rv(e));var d=b[8];if(d==="N"&&b[10]==="l")d="X";var h;if(l){if(d==="A"){var _;for(var g=0;g<e.length;g++){f[i]=e[g];f[p]=l?g:A.nh(g,"h");_=A.rv(e[g]);var w=u&&_?u==="*this"?_:A.rv(_[u]):undefined;h=S(w);D(a,h);t(r,f,h,o)}}else if(d==="O"){var g=0;var _;for(var O in e){f[i]=e[O];f[p]=l?O:A.nh(O,"h");_=A.rv(e[O]);var w=u&&_?u==="*this"?_:A.rv(_[u]):undefined;h=S(w);D(a,h);t(r,f,h,o);g++}}else if(d==="S"){for(var g=0;g<e.length;g++){f[i]=e[g];f[p]=l?g:A.nh(g,"h");h=S(e[g]+g);D(a,h);t(r,f,h,o)}}else if(d==="N"){for(var g=0;g<e;g++){f[i]=g;f[p]=l?g:A.nh(g,"h");h=S(g);D(a,h);t(r,f,h,o)}}else{}}else{var j=A.rv(e);var _,P;if(d==="A"){for(var g=0;g<j.length;g++){P=j[g];P=A.hn(P)==="n"?A.nh(P,"h"):P;_=A.rv(P);f[i]=P;f[p]=l?g:A.nh(g,"h");var w=u&&_?u==="*this"?_:A.rv(_[u]):undefined;h=S(w);D(a,h);t(r,f,h,o)}}else if(d==="O"){var g=0;for(var O in j){P=j[O];P=A.hn(P)==="n"?A.nh(P,"h"):P;_=A.rv(P);f[i]=P;f[p]=l?O:A.nh(O,"h");var w=u&&_?u==="*this"?_:A.rv(_[u]):undefined;h=S(w);D(a,h);t(r,f,h,o);g++}}else if(d==="S"){for(var g=0;g<j.length;g++){P=A.nh(j[g],"h");f[i]=P;f[p]=l?g:A.nh(g,"h");h=S(e[g]+g);D(a,h);t(r,f,h,o)}}else if(d==="N"){for(var g=0;g<j;g++){P=A.nh(g,"h");f[i]=P;f[p]=l?g:A.nh(g,"h");h=S(g);D(a,h);t(r,f,h,o)}}else{}}if(v){f[i]=s}else{delete f[i]}if(c){f[p]=y}else{delete f[p]}}function N(e){if(A.hn(e)=="h")return true;if(typeof e!=="object")return false;for(var t in e){if(e.hasOwnProperty(t)){if(N(e[t]))return true}}return false}function b(e,t,r,n,o){var a=false;var i=K(n,"",2);if(o.ap&&i&&i.constructor===Function){t="$wxs:"+t;e.attr["$gdc"]=K}if(o.is_affected||N(n)){e.n.push(t);e.raw[t]=n}e.attr[t]=i}function d(e,t,r,n,o,a){a.opindex=r;var i={},p;var u=c(z[r],n,o,a,i);b(e,t,r,u,i)}function h(e,t,r,n,o,a,i){i.opindex=n;var p={},u;var l=c(e[n],o,a,i,p);b(t,r,n,l,p)}function p(e,t,r,n){n.opindex=e;var o={};var a=c(z[e],t,r,n,o);return a&&a.constructor===Function?undefined:a}function l(e,t,r,n,o){o.opindex=t;var a={};var i=c(e[t],r,n,o,a);return i&&i.constructor===Function?undefined:i}function _(e,t,r,n,o){var o=o||{};n.opindex=e;return f(z[e],t,r,n,o)}function w(e,t,r,n,o,a){var a=a||{};o.opindex=t;return f(e[t],r,n,o,a)}function O(e,t,r,n,o,a,i,p,u){var l={};var f=_(e,r,n,o);y(f,t,r,n,o,a,i,p,u)}function j(e,t,r,n,o,a,i,p,u,l){var f={};var v=w(e,t,n,o,a);y(v,r,n,o,a,i,p,u,l)}function P(e,t,r,n,o,a){var i=v(e);var p=0;for(var u=0;u<t.length;u+=2){if(p+t[u+1]<0){i.attr[t[u]]=true}else{d(i,t[u],p+t[u+1],n,o,a);if(p===0)p=t[u+1]}}for(var u=0;u<r.length;u+=2){if(p+r[u+1]<0){i.generics[r[u]]=""}else{var l=c(z[p+r[u+1]],n,o,a);if(l!="")l="wx-"+l;i.generics[r[u]]=l;if(p===0)p=r[u+1]}}return i}function M(e,t,r,n,o,a,i){var p=v(t);var u=0;for(var l=0;l<r.length;l+=2){if(u+r[l+1]<0){p.attr[r[l]]=true}else{h(e,p,r[l],u+r[l+1],o,a,i);if(u===0)u=r[l+1]}}for(var l=0;l<n.length;l+=2){if(u+n[l+1]<0){p.generics[n[l]]=""}else{var f=c(e[u+n[l+1]],o,a,i);if(f!="")f="wx-"+f;p.generics[n[l]]=f;if(u===0)u=n[l+1]}}return p}var m=function(){if(typeof __WXML_GLOBAL__==="undefined"||undefined===__WXML_GLOBAL__.wxs_nf_init){x();C();k();U();I();L();E();R();F()}if(typeof __WXML_GLOBAL__!=="undefined")__WXML_GLOBAL__.wxs_nf_init=true};var x=function(){Object.defineProperty(Object.prototype,"nv_constructor",{writable:true,value:"Object"});Object.defineProperty(Object.prototype,"nv_toString",{writable:true,value:function(){return"[object Object]"}})};var C=function(){Object.defineProperty(Function.prototype,"nv_constructor",{writable:true,value:"Function"});Object.defineProperty(Function.prototype,"nv_length",{get:function(){return this.length},set:function(){}});Object.defineProperty(Function.prototype,"nv_toString",{writable:true,value:function(){return"[function Function]"}})};var k=function(){Object.defineProperty(Array.prototype,"nv_toString",{writable:true,value:function(){return this.nv_join()}});Object.defineProperty(Array.prototype,"nv_join",{writable:true,value:function(e){e=undefined==e?",":e;var t="";for(var r=0;r<this.length;++r){if(0!=r)t+=e;if(null==this[r]||undefined==this[r])t+="";else if(typeof this[r]=="function")t+=this[r].nv_toString();else if(typeof this[r]=="object"&&this[r].nv_constructor==="Array")t+=this[r].nv_join();else t+=this[r].toString()}return t}});Object.defineProperty(Array.prototype,"nv_constructor",{writable:true,value:"Array"});Object.defineProperty(Array.prototype,"nv_concat",{writable:true,value:Array.prototype.concat});Object.defineProperty(Array.prototype,"nv_pop",{writable:true,value:Array.prototype.pop});Object.defineProperty(Array.prototype,"nv_push",{writable:true,value:Array.prototype.push});Object.defineProperty(Array.prototype,"nv_reverse",{writable:true,value:Array.prototype.reverse});Object.defineProperty(Array.prototype,"nv_shift",{writable:true,value:Array.prototype.shift});Object.defineProperty(Array.prototype,"nv_slice",{writable:true,value:Array.prototype.slice});Object.defineProperty(Array.prototype,"nv_sort",{writable:true,value:Array.prototype.sort});Object.defineProperty(Array.prototype,"nv_splice",{writable:true,value:Array.prototype.splice});Object.defineProperty(Array.prototype,"nv_unshift",{writable:true,value:Array.prototype.unshift});Object.defineProperty(Array.prototype,"nv_indexOf",{writable:true,value:Array.prototype.indexOf});Object.defineProperty(Array.prototype,"nv_lastIndexOf",{writable:true,value:Array.prototype.lastIndexOf});Object.defineProperty(Array.prototype,"nv_every",{writable:true,value:Array.prototype.every});Object.defineProperty(Array.prototype,"nv_some",{writable:true,value:Array.prototype.some});Object.defineProperty(Array.prototype,"nv_forEach",{writable:true,value:Array.prototype.forEach});Object.defineProperty(Array.prototype,"nv_map",{writable:true,value:Array.prototype.map});Object.defineProperty(Array.prototype,"nv_filter",{writable:true,value:Array.prototype.filter});Object.defineProperty(Array.prototype,"nv_reduce",{writable:true,value:Array.prototype.reduce});Object.defineProperty(Array.prototype,"nv_reduceRight",{writable:true,value:Array.prototype.reduceRight});Object.defineProperty(Array.prototype,"nv_length",{get:function(){return this.length},set:function(e){this.length=e}})};var U=function(){Object.defineProperty(String.prototype,"nv_constructor",{writable:true,value:"String"});Object.defineProperty(String.prototype,"nv_toString",{writable:true,value:String.prototype.toString});Object.defineProperty(String.prototype,"nv_valueOf",{writable:true,value:String.prototype.valueOf});Object.defineProperty(String.prototype,"nv_charAt",{writable:true,value:String.prototype.charAt});Object.defineProperty(String.prototype,"nv_charCodeAt",{writable:true,value:String.prototype.charCodeAt});Object.defineProperty(String.prototype,"nv_concat",{writable:true,value:String.prototype.concat});Object.defineProperty(String.prototype,"nv_indexOf",{writable:true,value:String.prototype.indexOf});Object.defineProperty(String.prototype,"nv_lastIndexOf",{writable:true,value:String.prototype.lastIndexOf});Object.defineProperty(String.prototype,"nv_localeCompare",{writable:true,value:String.prototype.localeCompare});Object.defineProperty(String.prototype,"nv_match",{writable:true,value:String.prototype.match});Object.defineProperty(String.prototype,"nv_replace",{writable:true,value:String.prototype.replace});Object.defineProperty(String.prototype,"nv_search",{writable:true,value:String.prototype.search});Object.defineProperty(String.prototype,"nv_slice",{writable:true,value:String.prototype.slice});Object.defineProperty(String.prototype,"nv_split",{writable:true,value:String.prototype.split});Object.defineProperty(String.prototype,"nv_substring",{writable:true,value:String.prototype.substring});Object.defineProperty(String.prototype,"nv_toLowerCase",{writable:true,value:String.prototype.toLowerCase});Object.defineProperty(String.prototype,"nv_toLocaleLowerCase",{writable:true,value:String.prototype.toLocaleLowerCase});Object.defineProperty(String.prototype,"nv_toUpperCase",{writable:true,value:String.prototype.toUpperCase});Object.defineProperty(String.prototype,"nv_toLocaleUpperCase",{writable:true,value:String.prototype.toLocaleUpperCase});Object.defineProperty(String.prototype,"nv_trim",{writable:true,value:String.prototype.trim});Object.defineProperty(String.prototype,"nv_length",{get:function(){return this.length},set:function(e){this.length=e}})};var I=function(){Object.defineProperty(Boolean.prototype,"nv_constructor",{writable:true,value:"Boolean"});Object.defineProperty(Boolean.prototype,"nv_toString",{writable:true,value:Boolean.prototype.toString});Object.defineProperty(Boolean.prototype,"nv_valueOf",{writable:true,value:Boolean.prototype.valueOf})};var L=function(){Object.defineProperty(Number,"nv_MAX_VALUE",{writable:false,value:Number.MAX_VALUE});Object.defineProperty(Number,"nv_MIN_VALUE",{writable:false,value:Number.MIN_VALUE});Object.defineProperty(Number,"nv_NEGATIVE_INFINITY",{writable:false,value:Number.NEGATIVE_INFINITY});Object.defineProperty(Number,"nv_POSITIVE_INFINITY",{writable:false,value:Number.POSITIVE_INFINITY});Object.defineProperty(Number.prototype,"nv_constructor",{writable:true,value:"Number"});Object.defineProperty(Number.prototype,"nv_toString",{writable:true,value:Number.prototype.toString});Object.defineProperty(Number.prototype,"nv_toLocaleString",{writable:true,value:Number.prototype.toLocaleString});Object.defineProperty(Number.prototype,"nv_valueOf",{writable:true,value:Number.prototype.valueOf});Object.defineProperty(Number.prototype,"nv_toFixed",{writable:true,value:Number.prototype.toFixed});Object.defineProperty(Number.prototype,"nv_toExponential",{writable:true,value:Number.prototype.toExponential});Object.defineProperty(Number.prototype,"nv_toPrecision",{writable:true,value:Number.prototype.toPrecision})};var E=function(){Object.defineProperty(Math,"nv_E",{writable:false,value:Math.E});Object.defineProperty(Math,"nv_LN10",{writable:false,value:Math.LN10});Object.defineProperty(Math,"nv_LN2",{writable:false,value:Math.LN2});Object.defineProperty(Math,"nv_LOG2E",{writable:false,value:Math.LOG2E});Object.defineProperty(Math,"nv_LOG10E",{writable:false,value:Math.LOG10E});Object.defineProperty(Math,"nv_PI",{writable:false,value:Math.PI});Object.defineProperty(Math,"nv_SQRT1_2",{writable:false,value:Math.SQRT1_2});Object.defineProperty(Math,"nv_SQRT2",{writable:false,value:Math.SQRT2});Object.defineProperty(Math,"nv_abs",{writable:false,value:Math.abs});Object.defineProperty(Math,"nv_acos",{writable:false,value:Math.acos});Object.defineProperty(Math,"nv_asin",{writable:false,value:Math.asin});Object.defineProperty(Math,"nv_atan",{writable:false,value:Math.atan});Object.defineProperty(Math,"nv_atan2",{writable:false,value:Math.atan2});Object.defineProperty(Math,"nv_ceil",{writable:false,value:Math.ceil});Object.defineProperty(Math,"nv_cos",{writable:false,value:Math.cos});Object.defineProperty(Math,"nv_exp",{writable:false,value:Math.exp});Object.defineProperty(Math,"nv_floor",{writable:false,value:Math.floor});Object.defineProperty(Math,"nv_log",{writable:false,value:Math.log});Object.defineProperty(Math,"nv_max",{writable:false,value:Math.max});Object.defineProperty(Math,"nv_min",{writable:false,value:Math.min});Object.defineProperty(Math,"nv_pow",{writable:false,value:Math.pow});Object.defineProperty(Math,"nv_random",{writable:false,value:Math.random});Object.defineProperty(Math,"nv_round",{writable:false,value:Math.round});Object.defineProperty(Math,"nv_sin",{writable:false,value:Math.sin});Object.defineProperty(Math,"nv_sqrt",{writable:false,value:Math.sqrt});Object.defineProperty(Math,"nv_tan",{writable:false,value:Math.tan})};var R=function(){Object.defineProperty(Date.prototype,"nv_constructor",{writable:true,value:"Date"});Object.defineProperty(Date,"nv_parse",{writable:true,value:Date.parse});Object.defineProperty(Date,"nv_UTC",{writable:true,value:Date.UTC});Object.defineProperty(Date,"nv_now",{writable:true,value:Date.now});Object.defineProperty(Date.prototype,"nv_toString",{writable:true,value:Date.prototype.toString});Object.defineProperty(Date.prototype,"nv_toDateString",{writable:true,value:Date.prototype.toDateString});Object.defineProperty(Date.prototype,"nv_toTimeString",{writable:true,value:Date.prototype.toTimeString});Object.defineProperty(Date.prototype,"nv_toLocaleString",{writable:true,value:Date.prototype.toLocaleString});Object.defineProperty(Date.prototype,"nv_toLocaleDateString",{writable:true,value:Date.prototype.toLocaleDateString});Object.defineProperty(Date.prototype,"nv_toLocaleTimeString",{writable:true,value:Date.prototype.toLocaleTimeString});Object.defineProperty(Date.prototype,"nv_valueOf",{writable:true,value:Date.prototype.valueOf});Object.defineProperty(Date.prototype,"nv_getTime",{writable:true,value:Date.prototype.getTime});Object.defineProperty(Date.prototype,"nv_getFullYear",{writable:true,value:Date.prototype.getFullYear});Object.defineProperty(Date.prototype,"nv_getUTCFullYear",{writable:true,value:Date.prototype.getUTCFullYear});Object.defineProperty(Date.prototype,"nv_getMonth",{writable:true,value:Date.prototype.getMonth});Object.defineProperty(Date.prototype,"nv_getUTCMonth",{writable:true,value:Date.prototype.getUTCMonth});Object.defineProperty(Date.prototype,"nv_getDate",{writable:true,value:Date.prototype.getDate});Object.defineProperty(Date.prototype,"nv_getUTCDate",{writable:true,value:Date.prototype.getUTCDate});Object.defineProperty(Date.prototype,"nv_getDay",{writable:true,value:Date.prototype.getDay});Object.defineProperty(Date.prototype,"nv_getUTCDay",{writable:true,value:Date.prototype.getUTCDay});Object.defineProperty(Date.prototype,"nv_getHours",{writable:true,value:Date.prototype.getHours});Object.defineProperty(Date.prototype,"nv_getUTCHours",{writable:true,value:Date.prototype.getUTCHours});Object.defineProperty(Date.prototype,"nv_getMinutes",{writable:true,value:Date.prototype.getMinutes});Object.defineProperty(Date.prototype,"nv_getUTCMinutes",{writable:true,value:Date.prototype.getUTCMinutes});Object.defineProperty(Date.prototype,"nv_getSeconds",{writable:true,value:Date.prototype.getSeconds});Object.defineProperty(Date.prototype,"nv_getUTCSeconds",{writable:true,value:Date.prototype.getUTCSeconds});Object.defineProperty(Date.prototype,"nv_getMilliseconds",{writable:true,value:Date.prototype.getMilliseconds});Object.defineProperty(Date.prototype,"nv_getUTCMilliseconds",{writable:true,value:Date.prototype.getUTCMilliseconds});Object.defineProperty(Date.prototype,"nv_getTimezoneOffset",{writable:true,value:Date.prototype.getTimezoneOffset});Object.defineProperty(Date.prototype,"nv_setTime",{writable:true,value:Date.prototype.setTime});Object.defineProperty(Date.prototype,"nv_setMilliseconds",{writable:true,value:Date.prototype.setMilliseconds});Object.defineProperty(Date.prototype,"nv_setUTCMilliseconds",{writable:true,value:Date.prototype.setUTCMilliseconds});Object.defineProperty(Date.prototype,"nv_setSeconds",{writable:true,value:Date.prototype.setSeconds});Object.defineProperty(Date.prototype,"nv_setUTCSeconds",{writable:true,value:Date.prototype.setUTCSeconds});Object.defineProperty(Date.prototype,"nv_setMinutes",{writable:true,value:Date.prototype.setMinutes});Object.defineProperty(Date.prototype,"nv_setUTCMinutes",{writable:true,value:Date.prototype.setUTCMinutes});Object.defineProperty(Date.prototype,"nv_setHours",{writable:true,value:Date.prototype.setHours});Object.defineProperty(Date.prototype,"nv_setUTCHours",{writable:true,value:Date.prototype.setUTCHours});Object.defineProperty(Date.prototype,"nv_setDate",{writable:true,value:Date.prototype.setDate});Object.defineProperty(Date.prototype,"nv_setUTCDate",{writable:true,value:Date.prototype.setUTCDate});Object.defineProperty(Date.prototype,"nv_setMonth",{writable:true,value:Date.prototype.setMonth});Object.defineProperty(Date.prototype,"nv_setUTCMonth",{writable:true,value:Date.prototype.setUTCMonth});Object.defineProperty(Date.prototype,"nv_setFullYear",{writable:true,value:Date.prototype.setFullYear});Object.defineProperty(Date.prototype,"nv_setUTCFullYear",{writable:true,value:Date.prototype.setUTCFullYear});Object.defineProperty(Date.prototype,"nv_toUTCString",{writable:true,value:Date.prototype.toUTCString});Object.defineProperty(Date.prototype,"nv_toISOString",{writable:true,value:Date.prototype.toISOString});Object.defineProperty(Date.prototype,"nv_toJSON",{writable:true,value:Date.prototype.toJSON})};var F=function(){Object.defineProperty(RegExp.prototype,"nv_constructor",{writable:true,value:"RegExp"});Object.defineProperty(RegExp.prototype,"nv_exec",{writable:true,value:RegExp.prototype.exec});Object.defineProperty(RegExp.prototype,"nv_test",{writable:true,value:RegExp.prototype.test});Object.defineProperty(RegExp.prototype,"nv_toString",{writable:true,value:RegExp.prototype.toString});Object.defineProperty(RegExp.prototype,"nv_source",{get:function(){return this.source},set:function(){}});Object.defineProperty(RegExp.prototype,"nv_global",{get:function(){return this.global},set:function(){}});Object.defineProperty(RegExp.prototype,"nv_ignoreCase",{get:function(){return this.ignoreCase},set:function(){}});Object.defineProperty(RegExp.prototype,"nv_multiline",{get:function(){return this.multiline},set:function(){}});Object.defineProperty(RegExp.prototype,"nv_lastIndex",{get:function(){return this.lastIndex},set:function(e){this.lastIndex=e}})};m();var J=function(){var e=Array.prototype.slice.call(arguments);e.unshift(Date);return new(Function.prototype.bind.apply(Date,e))};var B=function(){var e=Array.prototype.slice.call(arguments);e.unshift(RegExp);return new(Function.prototype.bind.apply(RegExp,e))};var Y={};Y.nv_log=function(){var e="WXSRT:";for(var t=0;t<arguments.length;++t)e+=arguments[t]+" ";console.log(e)};var G=parseInt,X=parseFloat,H=isNaN,V=isFinite,$=decodeURI,W=decodeURIComponent,Q=encodeURI,q=encodeURIComponent;function K(e,t,r){e=A.rv(e);if(e===null||e===undefined)return e;if(typeof e==="string"||typeof e==="boolean"||typeof e==="number")return e;if(e.constructor===Object){var n={};for(var o in e)if(Object.prototype.hasOwnProperty.call(e,o))if(undefined===t)n[o.substring(3)]=K(e[o],t,r);else n[t+o]=K(e[o],t,r);return n}if(e.constructor===Array){var n=[];for(var a=0;a<e.length;a++)n.push(K(e[a],t,r));return n}if(e.constructor===Date){var n=new Date;n.setTime(e.getTime());return n}if(e.constructor===RegExp){var i="";if(e.global)i+="g";if(e.ignoreCase)i+="i";if(e.multiline)i+="m";return new RegExp(e.source,i)}if(r&&typeof e==="function"){if(r==1)return K(e(),undefined,2);if(r==2)return e}return null}var Z={};Z.nv_stringify=function(e){JSON.stringify(e);return JSON.stringify(K(e))};Z.nv_parse=function(e){if(e===undefined)return undefined;var t=JSON.parse(e);return K(t,"nv_")};function ee(e,t,r,n){e.extraAttr={t_action:t,t_rawid:r};if(typeof n!="undefined")e.extraAttr.t_cid=n}function te(){if(typeof __globalThis.__webview_engine_version__=="undefined")return 0;return __globalThis.__webview_engine_version__}function re(e,t,r,n,o,a){var i=ne(t,r,n);if(i)e.push(i);else{e.push("");u(n+":import:"+o+":"+a+": Path `"+t+"` not found from `"+n+"`.")}}function ne(e,t,r){if(e[0]!="/"){var n=r.split("/");n.pop();var o=e.split("/");for(var a=0;a<o.length;a++){if(o[a]=="..")n.pop();else if(!o[a]||o[a]==".")continue;else n.push(o[a])}e=n.join("/")}if(r[0]=="."&&e[0]=="/")e="."+e;if(t[e])return e;if(t[e+".wxml"])return e+".wxml"}function oe(e,t,r,n){if(!t)return;if(n[e][t])return n[e][t];for(var o=r[e].i.length-1;o>=0;o--){if(r[e].i[o]&&n[r[e].i[o]][t])return n[r[e].i[o]][t]}for(var o=r[e].ti.length-1;o>=0;o--){var a=ne(r[e].ti[o],r,e);if(a&&n[a][t])return n[a][t]}var i=ae(r,e);for(var o=0;o<i.length;o++){if(i[o]&&n[i[o]][t])return n[i[o]][t]}for(var p=r[e].j.length-1;p>=0;p--)if(r[e].j[p]){for(var a=r[r[e].j[p]].ti.length-1;a>=0;a--){var u=ne(r[r[e].j[p]].ti[a],r,e);if(u&&n[u][t]){return n[u][t]}}}}function ae(e,t){if(!t)return[];if($gaic[t]){return $gaic[t]}var r=[],n=[],o=0,a=0,i={},p={};n.push(t);p[t]=true;a++;while(o<a){var u=n[o++];for(var l=0;l<e[u].ic.length;l++){var f=e[u].ic[l];var v=ne(f,e,u);if(v&&!p[v]){p[v]=true;n.push(v);a++}}for(var l=0;u!=t&&l<e[u].ti.length;l++){var c=e[u].ti[l];var s=ne(c,e,u);if(s&&!i[s]){i[s]=true;r.push(s)}}}$gaic[t]=r;return r}var ie={};function pe(e,t,r,n,o,a,i){var p=ne(e,t,r);t[r].j.push(p);if(p){if(ie[p]){u("-1:include:-1:-1: `"+e+"` is being included in a loop, will be stop.");return}ie[p]=true;try{t[p].f(n,o,a,i)}catch(n){}ie[p]=false}else{u(r+":include:-1:-1: Included path `"+e+"` not found from `"+r+"`.")}}function ue(e,t,r,n){u(t+":template:"+r+":"+n+": Template `"+e+"` not found.")}function le(e){var t=false;delete e.properities;delete e.n;if(e.children){do{t=false;var r=[];for(var n=0;n<e.children.length;n++){var o=e.children[n];if(o.tag=="virtual"){t=true;for(var a=0;o.children&&a<o.children.length;a++){r.push(o.children[a])}}else{r.push(o)}}e.children=r}while(t);for(var n=0;n<e.children.length;n++){le(e.children[n])}}return e}function fe(e){if(e.tag=="wx-wx-scope"){e.tag="virtual";e.wxCkey="11";e["wxScopeData"]=e.attr["wx:scope-data"];delete e.n;delete e.raw;delete e.generics;delete e.attr}for(var t=0;e.children&&t<e.children.length;t++){fe(e.children[t])}return e}return{a:D,b:S,c:v,d:e,e:t,f:u,g:r,h:s,i:n,j:o,k:A,l:T,m:a,n:f,o:c,p:i,q:y,r:N,s:b,t:d,u:h,v:p,w:l,x:_,y:w,z:O,A:j,B:P,C:M,D:J,E:B,F:Y,G:G,H:X,I:H,J:V,K:$,L:W,M:Q,N:q,O:K,P:Z,Q:ee,R:te,S:re,T:ne,U:oe,V:ae,W:ie,X:pe,Y:ue,Z:le,aa:fe}}()});Object.freeze(__g);g="";	__wxAppCode__['sub-pages/auth/login.json'] = {"navigationStyle":"custom","usingComponents":{"privacy-auth-popup":"/components/privacy-auth-popup"}};
		__wxAppCode__['sub-pages/auth/merchant.json'] = {"navigationStyle":"custom","usingComponents":{"privacy-auth-popup":"/components/privacy-auth-popup"}};
		__wxAppCode__['sub-pages/auth/privacy-policy.json'] = {"navigationBarTitleText":"隐私协议","navigationBarBackgroundColor":"#FFFFFF","usingComponents":{"privacy-auth-popup":"/components/privacy-auth-popup"}};
		__wxAppCode__['sub-pages/auth/register.json'] = {"navigationBarTitleText":"供应商注册","navigationBarBackgroundColor":"#FFFFFF","usingComponents":{"privacy-auth-popup":"/components/privacy-auth-popup"}};
	;var __WXML_DEP__=__WXML_DEP__||{};;var __LAZY_CODE_LOADING_CHUNK_MAP__=__LAZY_CODE_LOADING_CHUNK_MAP__||{};[['sub-pages/auth/chunk_0',['sub-pages/auth/login',]],['sub-pages/auth/chunk_1',['sub-pages/auth/merchant',]],['sub-pages/auth/chunk_2',['sub-pages/auth/privacy-policy',]],['sub-pages/auth/chunk_3',['sub-pages/auth/register',]],].forEach(function(a){(a[1]||[]).forEach(function(b){__LAZY_CODE_LOADING_CHUNK_MAP__[b]=__LAZY_CODE_LOADING_CHUNK_MAP__[b]||a[0]||''});});var __globalThis=(typeof __vd_version_info__!=='undefined'&&typeof __vd_version_info__.globalThis!=='undefined')?__vd_version_info__.globalThis:window;var __webviewId__=__webviewId__;var __wxAppCode__= __wxAppCode__||{};var __subPageFrameReady__=__globalThis.__subPageFrameReady__||function(){};var __WXML_GLOBAL__=__WXML_GLOBAL__||{entrys:{},defines:{},modules:{},ops:[],wxs_nf_init:undefined,total_ops:0};var __subPageFrameStartTime__=Date.now();;/*v0.5vv_20211229_syb_scopedata*/__globalThis.__wcc_version__='v0.5vv_20211229_syb_scopedata';__globalThis.__wcc_version_info__={"customComponents":true,"fixZeroRpx":true,"propValueDeepCopy":false};
var $gwxc
var $gaic={}
var outerGlobal=typeof __globalThis==='undefined'?window:__globalThis;$gwx0=function(_,_v,_n,_p,_s,_wp,_wl,$gwn,$gwl,$gwh,wh,$gstack,$gwrt,gra,grb,TestTest,wfor,_ca,_da,_r,_rz,_o,_oz,_1,_1z,_2,_2z,_m,_mz,nv_getDate,nv_getRegExp,nv_console,nv_parseInt,nv_parseFloat,nv_isNaN,nv_isFinite,nv_decodeURI,nv_decodeURIComponent,nv_encodeURI,nv_encodeURIComponent,$gdc,nv_JSON,_af,_gv,_ai,_grp,_gd,_gapi,$ixc,_ic,_w,_ev,_tsd){return function(path,global){
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
outerGlobal.__wxml_comp_version__=0.02
return function(env,dd,global){$gwxc=0;var root={"tag":"wx-page"};root.children=[]
;g="$gwx0";var main=e_[path].f
if (typeof global==="undefined")global={};global.f=$gdc(f_[path],"",1);
if(typeof(outerGlobal.__webview_engine_version__)!='undefined'&&outerGlobal.__webview_engine_version__+1e-6>=0.02+1e-6&&outerGlobal.__mergeData__)
{
env=outerGlobal.__mergeData__(env,dd);
}
try{
main(env,{},root,global);
_tsd(root)
if(typeof(outerGlobal.__webview_engine_version__)=='undefined'|| outerGlobal.__webview_engine_version__+1e-6<0.01+1e-6){return _ev(root);}
}catch(err){
console.log(err)
}
;g="";
return root;
}
}
}
}(__g.a,__g.b,__g.c,__g.d,__g.e,__g.f,__g.g,__g.h,__g.i,__g.j,__g.k,__g.l,__g.m,__g.n,__g.o,__g.p,__g.q,__g.r,__g.s,__g.t,__g.u,__g.v,__g.w,__g.x,__g.y,__g.z,__g.A,__g.B,__g.C,__g.D,__g.E,__g.F,__g.G,__g.H,__g.I,__g.J,__g.K,__g.L,__g.M,__g.N,__g.O,__g.P,__g.Q,__g.R,__g.S,__g.T,__g.U,__g.V,__g.W,__g.X,__g.Y,__g.Z,__g.aa);if(__vd_version_info__.delayedGwx||true)$gwx0();;var noCss=typeof __vd_version_info__!=='undefined'&&__vd_version_info__.noCss===true;if(!noCss){var BASE_DEVICE_WIDTH = 750;
var isIOS=navigator.userAgent.match("iPhone");
var deviceWidth = window.screen.width || 375;
var deviceDPR = window.devicePixelRatio || 2;
var checkDeviceWidth = window.__checkDeviceWidth__ || function() {
var newDeviceWidth = window.screen.width || 375
var newDeviceDPR = window.devicePixelRatio || 2
var newDeviceHeight = window.screen.height || 375
if (window.screen.orientation && /^landscape/.test(window.screen.orientation.type || '')) newDeviceWidth = newDeviceHeight
if (newDeviceWidth !== deviceWidth || newDeviceDPR !== deviceDPR) {
deviceWidth = newDeviceWidth
deviceDPR = newDeviceDPR
}
}
checkDeviceWidth()
var eps = 1e-4;
var transformRPX = window.__transformRpx__ || function(number, newDeviceWidth) {
if ( number === 0 ) return 0;
number = number / BASE_DEVICE_WIDTH * ( newDeviceWidth || deviceWidth );
number = Math.floor(number + eps);
if (number === 0) {
if (deviceDPR === 1 || !isIOS) {
return 1;
} else {
return 0.5;
}
}
return number;
}
window.__rpxRecalculatingFuncs__ = window.__rpxRecalculatingFuncs__ || [];
var __COMMON_STYLESHEETS__ = __COMMON_STYLESHEETS__||{}

var setCssToHead = function(file, _xcInvalid, info) {
var Ca = {};
var css_id;
var info = info || {};
var _C = __COMMON_STYLESHEETS__
function makeup(file, opt) {
var _n = typeof(file) === "string";
if ( _n && Ca.hasOwnProperty(file)) return "";
if ( _n ) Ca[file] = 1;
var ex = _n ? _C[file] : file;
var res="";
for (var i = ex.length - 1; i >= 0; i--) {
var content = ex[i];
if (typeof(content) === "object")
{
var op = content[0];
if ( op == 0 )
res = transformRPX(content[1], opt.deviceWidth) + (window.__convertRpxToVw__ ? "vw" : "px") + res;
else if ( op == 1)
res = opt.suffix + res;
else if ( op == 2 )
res = makeup(content[1], opt) + res;
}
else
res = content + res
}
return res;
}
var styleSheetManager = window.__styleSheetManager2__
var rewritor = function(suffix, opt, style){
opt = opt || {};
suffix = suffix || "";
opt.suffix = suffix;
if ( opt.allowIllegalSelector != undefined && _xcInvalid != undefined )
{
if ( opt.allowIllegalSelector )
console.warn( "For developer:" + _xcInvalid );
else
{
console.error( _xcInvalid );
}
}
Ca={};
css = makeup(file, opt);
if (styleSheetManager) {
var key = (info.path || Math.random()) + ':' + suffix
if (!style) {
styleSheetManager.addItem(key, info.path);
window.__rpxRecalculatingFuncs__.push(function(size){
opt.deviceWidth = size.width;
rewritor(suffix, opt, true);
});
}
styleSheetManager.setCss(key, css);
return;
}
if ( !style )
{
var head = document.head || document.getElementsByTagName('head')[0];
style = document.createElement('style');
style.type = 'text/css';
style.setAttribute( "wxss:path", info.path );
head.appendChild(style);
window.__rpxRecalculatingFuncs__.push(function(size){
opt.deviceWidth = size.width;
rewritor(suffix, opt, style);
});
}
if (style.styleSheet) {
style.styleSheet.cssText = css;
} else {
if ( style.childNodes.length == 0 )
style.appendChild(document.createTextNode(css));
else
style.childNodes[0].nodeValue = css;
}
}
return rewritor;
}
setCssToHead([])();setCssToHead([],undefined,{path:"./sub-pages/auth/app.wxss"})();;;}var __subPageFrameEndTime__=Date.now();__subPageFrameReady__('/sub-pages/auth/');$gwx0_XC_0=function(_,_v,_n,_p,_s,_wp,_wl,$gwn,$gwl,$gwh,wh,$gstack,$gwrt,gra,grb,TestTest,wfor,_ca,_da,_r,_rz,_o,_oz,_1,_1z,_2,_2z,_m,_mz,nv_getDate,nv_getRegExp,nv_console,nv_parseInt,nv_parseFloat,nv_isNaN,nv_isFinite,nv_decodeURI,nv_decodeURIComponent,nv_encodeURI,nv_encodeURIComponent,$gdc,nv_JSON,_af,_gv,_ai,_grp,_gd,_gapi,$ixc,_ic,_w,_ev,_tsd){return function(path,global){
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
Z([3,'login-box data-v-7b0f3a30'])
Z([3,'login-title data-v-7b0f3a30'])
Z([3,'骑手登录'])
Z([3,'logo data-v-7b0f3a30'])
Z([3,'data-v-7b0f3a30'])
Z([3,'aspectFit'])
Z([3,'/sub-pages/auth/static/login/logo.png'])
Z([3,'desc data-v-7b0f3a30'])
Z(z[4])
Z([3,'/sub-pages/auth/static/login/desc.png'])
Z([3,'form data-v-7b0f3a30'])
Z([3,'form_item data-v-7b0f3a30'])
Z([3,'img1 data-v-7b0f3a30'])
Z([3,'/sub-pages/auth/static/login/phone.png'])
Z([3,'__e'])
Z([3,'inp1 data-v-7b0f3a30'])
Z([[4],[[5],[[4],[[5],[[5],[1,'input']],[[4],[[5],[[5],[[4],[[5],[[5],[1,'__set_model']],[[4],[[5],[[5],[[5],[[5],[1,'']],[1,'phone']],[1,'$event']],[[4],[[5]]]]]]]],[[4],[[5],[[5],[1,'onInput']],[[4],[[5],[1,'$event']]]]]]]]]]])
Z([3,'请输入手机号码'])
Z([3,'pl'])
Z([3,'number'])
Z([[7],[3,'phone']])
Z(z[11])
Z(z[12])
Z([3,'/sub-pages/auth/static/login/password.png'])
Z(z[14])
Z(z[15])
Z([[4],[[5],[[4],[[5],[[5],[1,'input']],[[4],[[5],[[4],[[5],[[5],[1,'__set_model']],[[4],[[5],[[5],[[5],[[5],[1,'']],[1,'password']],[1,'$event']],[[4],[[5]]]]]]]]]]]]])
Z([3,'true'])
Z([3,'请输入密码'])
Z(z[18])
Z([3,'text'])
Z([[7],[3,'password']])
Z([3,'privacy-wrap data-v-7b0f3a30'])
Z(z[14])
Z(z[4])
Z([[4],[[5],[[4],[[5],[[5],[1,'change']],[[4],[[5],[[4],[[5],[[5],[1,'onPrivacyCheckboxChange']],[[4],[[5],[1,'$event']]]]]]]]]]])
Z([3,'privacy-label data-v-7b0f3a30'])
Z([[7],[3,'agreePrivacy']])
Z(z[4])
Z([3,'#3662DD'])
Z([3,'1'])
Z([3,'privacy-text data-v-7b0f3a30'])
Z([3,'我已阅读并同意'])
Z(z[14])
Z([3,'privacy-link data-v-7b0f3a30'])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[[5],[1,'openPrivacyPolicy']],[[4],[[5],[1,'$event']]]]]]]]]]])
Z([3,'《隐私政策》'])
Z(z[4])
Z([3,'padding-top:76rpx;'])
Z(z[14])
Z([3,'btn data-v-7b0f3a30'])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[1,'userLogin']]]]]]]]])
Z([3,'登录'])
Z(z[14])
Z(z[50])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[[5],[1,'goBack']],[[4],[[5],[1,'$event']]]]]]]]]]])
Z([3,'返回'])
Z([[2,'!'],[[6],[[7],[3,'puserInfo']],[3,'phone']]])
Z(z[14])
Z([3,'other-login data-v-7b0f3a30'])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[1,'getUserProfile']]]]]]]]])
Z([3,'ol-tilte data-v-7b0f3a30'])
Z(z[4])
Z([3,'授权登录'])
Z([3,'wx-login _div data-v-7b0f3a30'])
Z(z[4])
Z(z[5])
Z([3,'/sub-pages/auth/static/login/weixin_icon.png'])
Z(z[14])
Z(z[59])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[1,'fakeLogin']]]]]]]]])
Z(z[61])
Z(z[4])
Z([3,'一键登录'])
Z(z[64])
Z(z[4])
Z(z[5])
Z(z[67])
Z([3,'bottom_img data-v-7b0f3a30'])
Z([3,'widthFix'])
Z([3,'/sub-pages/auth/static/login/bottom_img.png'])
Z([3,'popup-box data-v-7b0f3a30'])
Z([[2,'!'],[[7],[3,'showPopup']]])
Z([3,'login-popup data-v-7b0f3a30'])
Z([3,'lp-top data-v-7b0f3a30'])
Z([3,'lpt-left data-v-7b0f3a30'])
Z([3,'title data-v-7b0f3a30'])
Z(z[4])
Z(z[52])
Z([3,'tips data-v-7b0f3a30'])
Z(z[4])
Z([3,'登录即可解锁更多权益'])
Z(z[14])
Z([3,'lpt-right data-v-7b0f3a30'])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[[5],[1,'e0']],[[4],[[5],[1,'$event']]]]]]]]]]])
Z(z[4])
Z([3,'aspectFill'])
Z([3,'/sub-pages/auth/static/login/close_icon.png'])
Z([3,'lp-center data-v-7b0f3a30'])
Z(z[86])
Z([3,'申请获取以下权限'])
Z(z[89])
Z([3,'获得你的公开信息（昵称、头像等）'])
Z(z[89])
Z([3,'获得你的手机号码'])
Z([3,'lp-bottom data-v-7b0f3a30'])
Z(z[14])
Z([3,'option-btn data-v-7b0f3a30'])
Z([[4],[[5],[[4],[[5],[[5],[1,'getphonenumber']],[[4],[[5],[[4],[[5],[[5],[1,'getPhoneNumber']],[[4],[[5],[1,'$event']]]]]]]]]]])
Z([3,'getPhoneNumber'])
Z([3,'获取手机号'])
Z([3,'__l'])
Z(z[4])
Z([3,'e6d709c4-1'])
})(__WXML_GLOBAL__.ops_cached.$gwx0_XC_0_1);return __WXML_GLOBAL__.ops_cached.$gwx0_XC_0_1
}
__WXML_GLOBAL__.ops_set.$gwx0_XC_0=z;
__WXML_GLOBAL__.ops_init.$gwx0_XC_0=true;
var x=['./sub-pages/auth/login.wxml'];d_[x[0]]={}
var m0=function(e,s,r,gg){
var z=gz$gwx0_XC_0_1()
var oB=_n('view')
_rz(z,oB,'class',0,e,s,gg)
var oD=_n('view')
_rz(z,oD,'class',1,e,s,gg)
var fE=_oz(z,2,e,s,gg)
_(oD,fE)
_(oB,oD)
var cF=_n('view')
_rz(z,cF,'class',3,e,s,gg)
var hG=_mz(z,'image',['class',4,'mode',1,'src',2],[],e,s,gg)
_(cF,hG)
_(oB,cF)
var oH=_n('view')
_rz(z,oH,'class',7,e,s,gg)
var cI=_mz(z,'image',['class',8,'src',1],[],e,s,gg)
_(oH,cI)
_(oB,oH)
var oJ=_n('view')
_rz(z,oJ,'class',10,e,s,gg)
var lK=_n('view')
_rz(z,lK,'class',11,e,s,gg)
var aL=_mz(z,'image',['class',12,'src',1],[],e,s,gg)
_(lK,aL)
var tM=_mz(z,'input',['bindinput',14,'class',1,'data-event-opts',2,'placeholder',3,'placeholderClass',4,'type',5,'value',6],[],e,s,gg)
_(lK,tM)
_(oJ,lK)
var eN=_n('view')
_rz(z,eN,'class',21,e,s,gg)
var bO=_mz(z,'image',['class',22,'src',1],[],e,s,gg)
_(eN,bO)
var oP=_mz(z,'input',['bindinput',24,'class',1,'data-event-opts',2,'password',3,'placeholder',4,'placeholderClass',5,'type',6,'value',7],[],e,s,gg)
_(eN,oP)
_(oJ,eN)
_(oB,oJ)
var xQ=_n('view')
_rz(z,xQ,'class',32,e,s,gg)
var oR=_mz(z,'checkbox-group',['bindchange',33,'class',1,'data-event-opts',2],[],e,s,gg)
var fS=_n('label')
_rz(z,fS,'class',36,e,s,gg)
var cT=_mz(z,'checkbox',['checked',37,'class',1,'color',2,'value',3],[],e,s,gg)
_(fS,cT)
var hU=_n('text')
_rz(z,hU,'class',41,e,s,gg)
var oV=_oz(z,42,e,s,gg)
_(hU,oV)
_(fS,hU)
var cW=_mz(z,'text',['catchtap',43,'class',1,'data-event-opts',2],[],e,s,gg)
var oX=_oz(z,46,e,s,gg)
_(cW,oX)
_(fS,cW)
_(oR,fS)
_(xQ,oR)
_(oB,xQ)
var lY=_mz(z,'view',['class',47,'style',1],[],e,s,gg)
var aZ=_mz(z,'button',['bindtap',49,'class',1,'data-event-opts',2],[],e,s,gg)
var t1=_oz(z,52,e,s,gg)
_(aZ,t1)
_(lY,aZ)
var e2=_mz(z,'button',['bindtap',53,'class',1,'data-event-opts',2],[],e,s,gg)
var b3=_oz(z,56,e,s,gg)
_(e2,b3)
_(lY,e2)
_(oB,lY)
var xC=_v()
_(oB,xC)
if(_oz(z,57,e,s,gg)){xC.wxVkey=1
var o4=_mz(z,'view',['bindtap',58,'class',1,'data-event-opts',2],[],e,s,gg)
var x5=_n('view')
_rz(z,x5,'class',61,e,s,gg)
var o6=_n('text')
_rz(z,o6,'class',62,e,s,gg)
var f7=_oz(z,63,e,s,gg)
_(o6,f7)
_(x5,o6)
_(o4,x5)
var c8=_n('view')
_rz(z,c8,'class',64,e,s,gg)
var h9=_mz(z,'image',['class',65,'mode',1,'src',2],[],e,s,gg)
_(c8,h9)
_(o4,c8)
_(xC,o4)
}
else{xC.wxVkey=2
var o0=_mz(z,'view',['bindtap',68,'class',1,'data-event-opts',2],[],e,s,gg)
var cAB=_n('view')
_rz(z,cAB,'class',71,e,s,gg)
var oBB=_n('text')
_rz(z,oBB,'class',72,e,s,gg)
var lCB=_oz(z,73,e,s,gg)
_(oBB,lCB)
_(cAB,oBB)
_(o0,cAB)
var aDB=_n('view')
_rz(z,aDB,'class',74,e,s,gg)
var tEB=_mz(z,'image',['class',75,'mode',1,'src',2],[],e,s,gg)
_(aDB,tEB)
_(o0,aDB)
_(xC,o0)
}
var eFB=_mz(z,'image',['class',78,'mode',1,'src',2],[],e,s,gg)
_(oB,eFB)
var bGB=_mz(z,'view',['class',81,'hidden',1],[],e,s,gg)
var oHB=_n('view')
_rz(z,oHB,'class',83,e,s,gg)
var xIB=_n('view')
_rz(z,xIB,'class',84,e,s,gg)
var oJB=_n('view')
_rz(z,oJB,'class',85,e,s,gg)
var fKB=_n('view')
_rz(z,fKB,'class',86,e,s,gg)
var cLB=_n('text')
_rz(z,cLB,'class',87,e,s,gg)
var hMB=_oz(z,88,e,s,gg)
_(cLB,hMB)
_(fKB,cLB)
_(oJB,fKB)
var oNB=_n('view')
_rz(z,oNB,'class',89,e,s,gg)
var cOB=_n('text')
_rz(z,cOB,'class',90,e,s,gg)
var oPB=_oz(z,91,e,s,gg)
_(cOB,oPB)
_(oNB,cOB)
_(oJB,oNB)
_(xIB,oJB)
var lQB=_mz(z,'view',['bindtap',92,'class',1,'data-event-opts',2],[],e,s,gg)
var aRB=_mz(z,'image',['class',95,'mode',1,'src',2],[],e,s,gg)
_(lQB,aRB)
_(xIB,lQB)
_(oHB,xIB)
var tSB=_n('view')
_rz(z,tSB,'class',98,e,s,gg)
var eTB=_n('view')
_rz(z,eTB,'class',99,e,s,gg)
var bUB=_oz(z,100,e,s,gg)
_(eTB,bUB)
_(tSB,eTB)
var oVB=_n('view')
_rz(z,oVB,'class',101,e,s,gg)
var xWB=_oz(z,102,e,s,gg)
_(oVB,xWB)
_(tSB,oVB)
var oXB=_n('view')
_rz(z,oXB,'class',103,e,s,gg)
var fYB=_oz(z,104,e,s,gg)
_(oXB,fYB)
_(tSB,oXB)
_(oHB,tSB)
var cZB=_n('view')
_rz(z,cZB,'class',105,e,s,gg)
var h1B=_mz(z,'button',['bindgetphonenumber',106,'class',1,'data-event-opts',2,'openType',3],[],e,s,gg)
var o2B=_oz(z,110,e,s,gg)
_(h1B,o2B)
_(cZB,h1B)
_(oHB,cZB)
_(bGB,oHB)
_(oB,bGB)
var c3B=_mz(z,'privacy-auth-popup',['bind:__l',111,'class',1,'vueId',2],[],e,s,gg)
_(oB,c3B)
xC.wxXCkey=1
_(r,oB)
return r
}
e_[x[0]]={f:m0,j:[],i:[],ti:[],ic:[]}
if(path&&e_[path]){
outerGlobal.__wxml_comp_version__=0.02
return function(env,dd,global){$gwxc=0;var root={"tag":"wx-page"};root.children=[]
;g="$gwx0_XC_0";var main=e_[path].f
if (typeof global==="undefined")global={};global.f=$gdc(f_[path],"",1);
if(typeof(outerGlobal.__webview_engine_version__)!='undefined'&&outerGlobal.__webview_engine_version__+1e-6>=0.02+1e-6&&outerGlobal.__mergeData__)
{
env=outerGlobal.__mergeData__(env,dd);
}
try{
main(env,{},root,global);
_tsd(root)
if(typeof(outerGlobal.__webview_engine_version__)=='undefined'|| outerGlobal.__webview_engine_version__+1e-6<0.01+1e-6){return _ev(root);}
}catch(err){
console.log(err)
}
;g="";
return root;
}
}
}
}(__g.a,__g.b,__g.c,__g.d,__g.e,__g.f,__g.g,__g.h,__g.i,__g.j,__g.k,__g.l,__g.m,__g.n,__g.o,__g.p,__g.q,__g.r,__g.s,__g.t,__g.u,__g.v,__g.w,__g.x,__g.y,__g.z,__g.A,__g.B,__g.C,__g.D,__g.E,__g.F,__g.G,__g.H,__g.I,__g.J,__g.K,__g.L,__g.M,__g.N,__g.O,__g.P,__g.Q,__g.R,__g.S,__g.T,__g.U,__g.V,__g.W,__g.X,__g.Y,__g.Z,__g.aa);if(__vd_version_info__.delayedGwx||false)$gwx0_XC_0();	if (__vd_version_info__.delayedGwx) __wxAppCode__['sub-pages/auth/login.wxml'] = [$gwx0_XC_0, './sub-pages/auth/login.wxml'];else __wxAppCode__['sub-pages/auth/login.wxml'] = $gwx0_XC_0( './sub-pages/auth/login.wxml' );
	
var noCss=typeof __vd_version_info__!=='undefined'&&__vd_version_info__.noCss===true;if(!noCss){__wxAppCode__['sub-pages/auth/login.wxss']=setCssToHead([".",[1],"login-box.",[1],"data-v-7b0f3a30{height:100vh;position:relative;width:100vw}\n.",[1],"login-title.",[1],"data-v-7b0f3a30{color:#333;font-size:",[0,36],";font-weight:700;padding-top:",[0,74],";text-align:center}\n.",[1],"logo.",[1],"data-v-7b0f3a30{padding-top:",[0,72],";text-align:center}\n.",[1],"logo wx-image.",[1],"data-v-7b0f3a30{height:",[0,172],";width:",[0,172],"}\n.",[1],"desc.",[1],"data-v-7b0f3a30{padding-top:",[0,48],";text-align:center}\n.",[1],"desc wx-image.",[1],"data-v-7b0f3a30{height:",[0,46],";width:",[0,284],"}\n.",[1],"form.",[1],"data-v-7b0f3a30{margin:0 auto;padding-top:",[0,32],";width:",[0,618],"}\n.",[1],"form .",[1],"form_item.",[1],"data-v-7b0f3a30{border-bottom:",[0,2]," solid #efefef;height:",[0,100],";position:relative}\n.",[1],"form .",[1],"img1.",[1],"data-v-7b0f3a30{bottom:",[0,28],";height:",[0,40],";left:",[0,26],";position:absolute;width:",[0,36],"}\n.",[1],"form .",[1],"inp1.",[1],"data-v-7b0f3a30{bottom:0;display:inline-block;font-size:",[0,30],";height:",[0,98],";left:",[0,96],";line-height:",[0,98],";position:absolute;width:",[0,524],"}\n.",[1],"form .",[1],"pl.",[1],"data-v-7b0f3a30{color:#bbb;font-size:",[0,30],"}\n.",[1],"privacy-wrap.",[1],"data-v-7b0f3a30{margin:",[0,24]," auto 0;width:",[0,618],"}\n.",[1],"privacy-label.",[1],"data-v-7b0f3a30{-webkit-align-items:center;align-items:center;display:-webkit-flex;display:flex;-webkit-flex-direction:row;flex-direction:row;-webkit-flex-wrap:wrap;flex-wrap:wrap}\n.",[1],"privacy-text.",[1],"data-v-7b0f3a30{color:#666;font-size:",[0,24],";margin-left:",[0,8],"}\n.",[1],"privacy-link.",[1],"data-v-7b0f3a30{color:#3662dd;font-size:",[0,24],"}\n.",[1],"btn.",[1],"data-v-7b0f3a30{background:linear-gradient(90deg,#5095f4,#3662dd);border-radius:",[0,8],";color:#fff;font-size:",[0,32],";height:",[0,96],";line-height:",[0,96],";margin:0 auto;width:",[0,640],"}\n.",[1],"btn + .",[1],"btn.",[1],"data-v-7b0f3a30{margin-top:",[0,20],"}\n.",[1],"other-login.",[1],"data-v-7b0f3a30{margin:",[0,80]," auto 0;position:relative;width:",[0,618],";z-index:5}\n.",[1],"other-login .",[1],"ol-tilte.",[1],"data-v-7b0f3a30{-webkit-align-items:center;align-items:center;display:-webkit-flex;display:flex;-webkit-justify-content:center;justify-content:center}\n.",[1],"other-login .",[1],"ol-tilte.",[1],"data-v-7b0f3a30:after,.",[1],"other-login .",[1],"ol-tilte.",[1],"data-v-7b0f3a30:before{border-bottom:",[0,2]," solid #efefef;content:\x22\x22;display:block;width:30%}\n.",[1],"other-login .",[1],"ol-tilte wx-text.",[1],"data-v-7b0f3a30{color:#666;font-size:",[0,26],";padding:0 ",[0,20],"}\n.",[1],"other-login .",[1],"wx-login.",[1],"data-v-7b0f3a30{height:",[0,88],";margin:",[0,40]," auto 0;width:",[0,88],"}\n.",[1],"other-login .",[1],"wx-login wx-image.",[1],"data-v-7b0f3a30{display:block;height:100%;width:100%}\n.",[1],"bottom_img.",[1],"data-v-7b0f3a30{bottom:0;display:block;left:0;position:absolute;width:100%}\n.",[1],"popup-box.",[1],"data-v-7b0f3a30{background-color:rgba(0,0,0,.5);height:100%;left:0;position:absolute;top:0;width:100%;z-index:10}\n.",[1],"login-popup.",[1],"data-v-7b0f3a30{background-color:#fff;bottom:0;left:0;padding-bottom:",[0,40],";position:absolute;width:100%;z-index:10}\n.",[1],"login-popup .",[1],"lp-top.",[1],"data-v-7b0f3a30{-webkit-align-items:center;align-items:center;color:#000;display:-webkit-flex;display:flex;line-height:1.2}\n.",[1],"login-popup .",[1],"lp-top .",[1],"lpt-left.",[1],"data-v-7b0f3a30{-webkit-flex:1;flex:1;padding:",[0,30],"}\n.",[1],"login-popup .",[1],"lp-top .",[1],"lpt-left .",[1],"title.",[1],"data-v-7b0f3a30{font-size:",[0,28],";font-weight:500}\n.",[1],"login-popup .",[1],"lp-top .",[1],"lpt-left .",[1],"tips.",[1],"data-v-7b0f3a30{color:#9a9b9b;font-size:",[0,18],";margin-top:",[0,10],"}\n.",[1],"login-popup .",[1],"lp-top .",[1],"lpt-right.",[1],"data-v-7b0f3a30{padding:",[0,30],"}\n.",[1],"login-popup .",[1],"lp-top .",[1],"lpt-right wx-image.",[1],"data-v-7b0f3a30{display:block;height:",[0,28],";width:",[0,28],"}\n.",[1],"login-popup .",[1],"lp-center.",[1],"data-v-7b0f3a30{color:#000;padding:",[0,10]," ",[0,30]," ",[0,40],";position:relative}\n.",[1],"login-popup .",[1],"lp-center.",[1],"data-v-7b0f3a30:after{border-bottom:",[0,1]," solid #ededed;bottom:0;content:\x22\x22;left:",[0,30],";position:absolute;right:",[0,30],"}\n.",[1],"login-popup .",[1],"lp-center .",[1],"title.",[1],"data-v-7b0f3a30{font-size:",[0,28],";font-weight:600}\n.",[1],"login-popup .",[1],"lp-center .",[1],"tips.",[1],"data-v-7b0f3a30{font-size:",[0,26],";margin-top:",[0,10],"}\n.",[1],"login-popup .",[1],"lp-bottom.",[1],"data-v-7b0f3a30{margin-top:",[0,40],";padding:0 ",[0,30],"}\n.",[1],"login-popup .",[1],"lp-bottom .",[1],"option-btn.",[1],"data-v-7b0f3a30{background:linear-gradient(90deg,#5095f4,#3662dd);color:#fff;font-size:",[0,22],";height:",[0,86],";line-height:",[0,86],";padding:0 ",[0,30],";text-align:center}\n",],"Some selectors are not allowed in component wxss, including tag name selectors, ID selectors, and attribute selectors.(./sub-pages/auth/login.wxss:1:2997)",{path:"./sub-pages/auth/login.wxss"});
}$gwx0_XC_1=function(_,_v,_n,_p,_s,_wp,_wl,$gwn,$gwl,$gwh,wh,$gstack,$gwrt,gra,grb,TestTest,wfor,_ca,_da,_r,_rz,_o,_oz,_1,_1z,_2,_2z,_m,_mz,nv_getDate,nv_getRegExp,nv_console,nv_parseInt,nv_parseFloat,nv_isNaN,nv_isFinite,nv_decodeURI,nv_decodeURIComponent,nv_encodeURI,nv_encodeURIComponent,$gdc,nv_JSON,_af,_gv,_ai,_grp,_gd,_gapi,$ixc,_ic,_w,_ev,_tsd){return function(path,global){
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
Z([3,'login-box data-v-00986d99'])
Z([3,'login-title data-v-00986d99'])
Z([3,'商家登录'])
Z([3,'logo data-v-00986d99'])
Z([3,'data-v-00986d99'])
Z([3,'aspectFit'])
Z([3,'/sub-pages/auth/static/index/merchant.png'])
Z([3,'desc data-v-00986d99'])
Z(z[4])
Z([3,'/sub-pages/auth/static/index/desc-merchant.png'])
Z([3,'form data-v-00986d99'])
Z([3,'form_item data-v-00986d99'])
Z([3,'img1 data-v-00986d99'])
Z([3,'/sub-pages/auth/static/login/phone.png'])
Z([3,'__e'])
Z([3,'inp1 data-v-00986d99'])
Z([[4],[[5],[[4],[[5],[[5],[1,'input']],[[4],[[5],[[5],[[4],[[5],[[5],[1,'__set_model']],[[4],[[5],[[5],[[5],[[5],[1,'']],[1,'phone']],[1,'$event']],[[4],[[5]]]]]]]],[[4],[[5],[[5],[1,'onInput']],[[4],[[5],[1,'$event']]]]]]]]]]])
Z([3,'请输入用户名'])
Z([3,'pl'])
Z([3,'text'])
Z([[7],[3,'phone']])
Z(z[11])
Z(z[12])
Z([3,'/sub-pages/auth/static/login/password.png'])
Z(z[14])
Z(z[15])
Z([[4],[[5],[[4],[[5],[[5],[1,'input']],[[4],[[5],[[4],[[5],[[5],[1,'__set_model']],[[4],[[5],[[5],[[5],[[5],[1,'']],[1,'password']],[1,'$event']],[[4],[[5]]]]]]]]]]]]])
Z([3,'true'])
Z([3,'请输入密码'])
Z(z[18])
Z(z[19])
Z([[7],[3,'password']])
Z(z[11])
Z(z[12])
Z(z[23])
Z(z[14])
Z(z[15])
Z([[4],[[5],[[4],[[5],[[5],[1,'input']],[[4],[[5],[[4],[[5],[[5],[1,'__set_model']],[[4],[[5],[[5],[[5],[[5],[1,'']],[1,'code']],[1,'$event']],[[4],[[5]]]]]]]]]]]]])
Z([3,'请输入验证码'])
Z(z[18])
Z(z[19])
Z([[7],[3,'code']])
Z(z[14])
Z([3,'img2 data-v-00986d99'])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[[5],[1,'getCode']],[[4],[[5],[1,'$event']]]]]]]]]]])
Z([[7],[3,'codeUrl']])
Z([3,'privacy-wrap data-v-00986d99'])
Z(z[14])
Z(z[4])
Z([[4],[[5],[[4],[[5],[[5],[1,'change']],[[4],[[5],[[4],[[5],[[5],[1,'onPrivacyCheckboxChange']],[[4],[[5],[1,'$event']]]]]]]]]]])
Z([3,'privacy-label data-v-00986d99'])
Z([[7],[3,'agreePrivacy']])
Z(z[4])
Z([3,'#3662DD'])
Z([3,'1'])
Z([3,'privacy-text data-v-00986d99'])
Z([3,'我已阅读并同意'])
Z(z[14])
Z([3,'privacy-link data-v-00986d99'])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[[5],[1,'openPrivacyPolicy']],[[4],[[5],[1,'《昱禾联仓用户隐私政策》']]]]]]]]]]])
Z([3,'《昱禾联仓用户隐私政策》'])
Z(z[14])
Z(z[58])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[[5],[1,'openPrivacyPolicy']],[[4],[[5],[1,'《昱禾联仓集采平台用户交易纠纷处理机制》']]]]]]]]]]])
Z([3,'《昱禾联仓集采平台用户交易纠纷处理机制》'])
Z(z[14])
Z(z[58])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[[5],[1,'openPrivacyPolicy']],[[4],[[5],[1,'《昱禾联仓供应商入驻协议》']]]]]]]]]]])
Z([3,'《昱禾联仓供应商入驻协议》'])
Z([3,'action-btns data-v-00986d99'])
Z(z[14])
Z([3,'btn data-v-00986d99'])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[[5],[1,'userLogin']],[[4],[[5],[1,'$event']]]]]]]]]]])
Z([3,'none'])
Z([3,'default'])
Z([3,'登录'])
Z(z[14])
Z([3,'btn register-btn data-v-00986d99'])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[[5],[1,'goRegister']],[[4],[[5],[1,'$event']]]]]]]]]]])
Z(z[73])
Z(z[74])
Z([3,'注册'])
Z(z[14])
Z(z[71])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[[5],[1,'goBack']],[[4],[[5],[1,'$event']]]]]]]]]]])
Z(z[73])
Z(z[74])
Z([3,'返回'])
Z([3,'bottom_img data-v-00986d99'])
Z([3,'widthFix'])
Z([3,'/sub-pages/auth/static/login/bottom_img.png'])
Z([3,'popup-box data-v-00986d99'])
Z([[2,'!'],[[7],[3,'showPopup']]])
Z([3,'login-popup data-v-00986d99'])
Z([3,'lp-top data-v-00986d99'])
Z([3,'lpt-left data-v-00986d99'])
Z([3,'title data-v-00986d99'])
Z(z[4])
Z(z[75])
Z([3,'tips data-v-00986d99'])
Z(z[4])
Z([3,'登录即可解锁更多权益'])
Z(z[14])
Z([3,'lpt-right data-v-00986d99'])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[[5],[1,'e0']],[[4],[[5],[1,'$event']]]]]]]]]]])
Z(z[4])
Z([3,'aspectFill'])
Z([3,'/sub-pages/auth/static/login/close_icon.png'])
Z([3,'lp-center data-v-00986d99'])
Z(z[96])
Z([3,'申请获取以下权限'])
Z(z[99])
Z([3,'获得你的公开信息（昵称、头像等）'])
Z(z[99])
Z([3,'获得你的手机号码'])
Z([3,'lp-bottom data-v-00986d99'])
Z(z[14])
Z([3,'option-btn data-v-00986d99'])
Z([[4],[[5],[[4],[[5],[[5],[1,'getphonenumber']],[[4],[[5],[[4],[[5],[[5],[1,'getPhoneNumber']],[[4],[[5],[1,'$event']]]]]]]]]]])
Z([3,'getPhoneNumber'])
Z([3,'获取手机号'])
Z([3,'__l'])
Z(z[4])
Z([3,'1275c68d-1'])
})(__WXML_GLOBAL__.ops_cached.$gwx0_XC_1_1);return __WXML_GLOBAL__.ops_cached.$gwx0_XC_1_1
}
__WXML_GLOBAL__.ops_set.$gwx0_XC_1=z;
__WXML_GLOBAL__.ops_init.$gwx0_XC_1=true;
var x=['./sub-pages/auth/merchant.wxml'];d_[x[0]]={}
var m0=function(e,s,r,gg){
var z=gz$gwx0_XC_1_1()
var l5B=_n('view')
_rz(z,l5B,'class',0,e,s,gg)
var a6B=_n('view')
_rz(z,a6B,'class',1,e,s,gg)
var t7B=_oz(z,2,e,s,gg)
_(a6B,t7B)
_(l5B,a6B)
var e8B=_n('view')
_rz(z,e8B,'class',3,e,s,gg)
var b9B=_mz(z,'image',['class',4,'mode',1,'src',2],[],e,s,gg)
_(e8B,b9B)
_(l5B,e8B)
var o0B=_n('view')
_rz(z,o0B,'class',7,e,s,gg)
var xAC=_mz(z,'image',['class',8,'src',1],[],e,s,gg)
_(o0B,xAC)
_(l5B,o0B)
var oBC=_n('view')
_rz(z,oBC,'class',10,e,s,gg)
var fCC=_n('view')
_rz(z,fCC,'class',11,e,s,gg)
var cDC=_mz(z,'image',['class',12,'src',1],[],e,s,gg)
_(fCC,cDC)
var hEC=_mz(z,'input',['bindinput',14,'class',1,'data-event-opts',2,'placeholder',3,'placeholderClass',4,'type',5,'value',6],[],e,s,gg)
_(fCC,hEC)
_(oBC,fCC)
var oFC=_n('view')
_rz(z,oFC,'class',21,e,s,gg)
var cGC=_mz(z,'image',['class',22,'src',1],[],e,s,gg)
_(oFC,cGC)
var oHC=_mz(z,'input',['bindinput',24,'class',1,'data-event-opts',2,'password',3,'placeholder',4,'placeholderClass',5,'type',6,'value',7],[],e,s,gg)
_(oFC,oHC)
_(oBC,oFC)
var lIC=_n('view')
_rz(z,lIC,'class',32,e,s,gg)
var aJC=_mz(z,'image',['class',33,'src',1],[],e,s,gg)
_(lIC,aJC)
var tKC=_mz(z,'input',['bindinput',35,'class',1,'data-event-opts',2,'placeholder',3,'placeholderClass',4,'type',5,'value',6],[],e,s,gg)
_(lIC,tKC)
var eLC=_mz(z,'image',['bindtap',42,'class',1,'data-event-opts',2,'src',3],[],e,s,gg)
_(lIC,eLC)
_(oBC,lIC)
_(l5B,oBC)
var bMC=_n('view')
_rz(z,bMC,'class',46,e,s,gg)
var oNC=_mz(z,'checkbox-group',['bindchange',47,'class',1,'data-event-opts',2],[],e,s,gg)
var xOC=_n('label')
_rz(z,xOC,'class',50,e,s,gg)
var oPC=_mz(z,'checkbox',['checked',51,'class',1,'color',2,'value',3],[],e,s,gg)
_(xOC,oPC)
var fQC=_n('text')
_rz(z,fQC,'class',55,e,s,gg)
var cRC=_oz(z,56,e,s,gg)
_(fQC,cRC)
_(xOC,fQC)
var hSC=_mz(z,'text',['catchtap',57,'class',1,'data-event-opts',2],[],e,s,gg)
var oTC=_oz(z,60,e,s,gg)
_(hSC,oTC)
_(xOC,hSC)
var cUC=_mz(z,'text',['catchtap',61,'class',1,'data-event-opts',2],[],e,s,gg)
var oVC=_oz(z,64,e,s,gg)
_(cUC,oVC)
_(xOC,cUC)
var lWC=_mz(z,'text',['catchtap',65,'class',1,'data-event-opts',2],[],e,s,gg)
var aXC=_oz(z,68,e,s,gg)
_(lWC,aXC)
_(xOC,lWC)
_(oNC,xOC)
_(bMC,oNC)
_(l5B,bMC)
var tYC=_n('view')
_rz(z,tYC,'class',69,e,s,gg)
var eZC=_mz(z,'button',['catchtap',70,'class',1,'data-event-opts',2,'hoverClass',3,'type',4],[],e,s,gg)
var b1C=_oz(z,75,e,s,gg)
_(eZC,b1C)
_(tYC,eZC)
var o2C=_mz(z,'button',['catchtap',76,'class',1,'data-event-opts',2,'hoverClass',3,'type',4],[],e,s,gg)
var x3C=_oz(z,81,e,s,gg)
_(o2C,x3C)
_(tYC,o2C)
var o4C=_mz(z,'button',['catchtap',82,'class',1,'data-event-opts',2,'hoverClass',3,'type',4],[],e,s,gg)
var f5C=_oz(z,87,e,s,gg)
_(o4C,f5C)
_(tYC,o4C)
_(l5B,tYC)
var c6C=_mz(z,'image',['class',88,'mode',1,'src',2],[],e,s,gg)
_(l5B,c6C)
var h7C=_mz(z,'view',['class',91,'hidden',1],[],e,s,gg)
var o8C=_n('view')
_rz(z,o8C,'class',93,e,s,gg)
var c9C=_n('view')
_rz(z,c9C,'class',94,e,s,gg)
var o0C=_n('view')
_rz(z,o0C,'class',95,e,s,gg)
var lAD=_n('view')
_rz(z,lAD,'class',96,e,s,gg)
var aBD=_n('text')
_rz(z,aBD,'class',97,e,s,gg)
var tCD=_oz(z,98,e,s,gg)
_(aBD,tCD)
_(lAD,aBD)
_(o0C,lAD)
var eDD=_n('view')
_rz(z,eDD,'class',99,e,s,gg)
var bED=_n('text')
_rz(z,bED,'class',100,e,s,gg)
var oFD=_oz(z,101,e,s,gg)
_(bED,oFD)
_(eDD,bED)
_(o0C,eDD)
_(c9C,o0C)
var xGD=_mz(z,'view',['bindtap',102,'class',1,'data-event-opts',2],[],e,s,gg)
var oHD=_mz(z,'image',['class',105,'mode',1,'src',2],[],e,s,gg)
_(xGD,oHD)
_(c9C,xGD)
_(o8C,c9C)
var fID=_n('view')
_rz(z,fID,'class',108,e,s,gg)
var cJD=_n('view')
_rz(z,cJD,'class',109,e,s,gg)
var hKD=_oz(z,110,e,s,gg)
_(cJD,hKD)
_(fID,cJD)
var oLD=_n('view')
_rz(z,oLD,'class',111,e,s,gg)
var cMD=_oz(z,112,e,s,gg)
_(oLD,cMD)
_(fID,oLD)
var oND=_n('view')
_rz(z,oND,'class',113,e,s,gg)
var lOD=_oz(z,114,e,s,gg)
_(oND,lOD)
_(fID,oND)
_(o8C,fID)
var aPD=_n('view')
_rz(z,aPD,'class',115,e,s,gg)
var tQD=_mz(z,'button',['bindgetphonenumber',116,'class',1,'data-event-opts',2,'openType',3],[],e,s,gg)
var eRD=_oz(z,120,e,s,gg)
_(tQD,eRD)
_(aPD,tQD)
_(o8C,aPD)
_(h7C,o8C)
_(l5B,h7C)
var bSD=_mz(z,'privacy-auth-popup',['bind:__l',121,'class',1,'vueId',2],[],e,s,gg)
_(l5B,bSD)
_(r,l5B)
return r
}
e_[x[0]]={f:m0,j:[],i:[],ti:[],ic:[]}
if(path&&e_[path]){
outerGlobal.__wxml_comp_version__=0.02
return function(env,dd,global){$gwxc=0;var root={"tag":"wx-page"};root.children=[]
;g="$gwx0_XC_1";var main=e_[path].f
if (typeof global==="undefined")global={};global.f=$gdc(f_[path],"",1);
if(typeof(outerGlobal.__webview_engine_version__)!='undefined'&&outerGlobal.__webview_engine_version__+1e-6>=0.02+1e-6&&outerGlobal.__mergeData__)
{
env=outerGlobal.__mergeData__(env,dd);
}
try{
main(env,{},root,global);
_tsd(root)
if(typeof(outerGlobal.__webview_engine_version__)=='undefined'|| outerGlobal.__webview_engine_version__+1e-6<0.01+1e-6){return _ev(root);}
}catch(err){
console.log(err)
}
;g="";
return root;
}
}
}
}(__g.a,__g.b,__g.c,__g.d,__g.e,__g.f,__g.g,__g.h,__g.i,__g.j,__g.k,__g.l,__g.m,__g.n,__g.o,__g.p,__g.q,__g.r,__g.s,__g.t,__g.u,__g.v,__g.w,__g.x,__g.y,__g.z,__g.A,__g.B,__g.C,__g.D,__g.E,__g.F,__g.G,__g.H,__g.I,__g.J,__g.K,__g.L,__g.M,__g.N,__g.O,__g.P,__g.Q,__g.R,__g.S,__g.T,__g.U,__g.V,__g.W,__g.X,__g.Y,__g.Z,__g.aa);if(__vd_version_info__.delayedGwx||false)$gwx0_XC_1();	if (__vd_version_info__.delayedGwx) __wxAppCode__['sub-pages/auth/merchant.wxml'] = [$gwx0_XC_1, './sub-pages/auth/merchant.wxml'];else __wxAppCode__['sub-pages/auth/merchant.wxml'] = $gwx0_XC_1( './sub-pages/auth/merchant.wxml' );
	
var noCss=typeof __vd_version_info__!=='undefined'&&__vd_version_info__.noCss===true;if(!noCss){__wxAppCode__['sub-pages/auth/merchant.wxss']=setCssToHead([".",[1],"login-box.",[1],"data-v-00986d99{height:100vh;position:relative;width:100vw}\n.",[1],"login-title.",[1],"data-v-00986d99{color:#333;font-size:",[0,36],";font-weight:700;padding-top:",[0,74],";text-align:center}\n.",[1],"logo.",[1],"data-v-00986d99{padding-top:",[0,72],";text-align:center}\n.",[1],"logo wx-image.",[1],"data-v-00986d99{height:",[0,172],";width:",[0,172],"}\n.",[1],"desc.",[1],"data-v-00986d99{padding-top:",[0,48],";text-align:center}\n.",[1],"desc wx-image.",[1],"data-v-00986d99{height:",[0,46],";width:",[0,284],"}\n.",[1],"form.",[1],"data-v-00986d99{margin:0 auto;padding-top:",[0,32],";width:",[0,618],"}\n.",[1],"form .",[1],"form_item.",[1],"data-v-00986d99{border-bottom:",[0,2]," solid #efefef;height:",[0,100],";position:relative}\n.",[1],"form .",[1],"img1.",[1],"data-v-00986d99{bottom:",[0,28],";height:",[0,40],";left:",[0,26],";position:absolute;width:",[0,36],"}\n.",[1],"form .",[1],"inp1.",[1],"data-v-00986d99{bottom:0;display:inline-block;font-size:",[0,30],";height:",[0,98],";left:",[0,96],";line-height:",[0,98],";position:absolute;width:",[0,524],"}\n.",[1],"form .",[1],"pl.",[1],"data-v-00986d99{color:#bbb;font-size:",[0,30],"}\n.",[1],"form .",[1],"img2.",[1],"data-v-00986d99{bottom:",[0,14],";height:",[0,70],";position:absolute;right:0;width:",[0,260],";z-index:10}\n.",[1],"privacy-wrap.",[1],"data-v-00986d99{margin:",[0,24]," auto 0;width:",[0,618],"}\n.",[1],"privacy-label.",[1],"data-v-00986d99{-webkit-align-items:center;align-items:center;display:-webkit-flex;display:flex;-webkit-flex-direction:row;flex-direction:row;-webkit-flex-wrap:wrap;flex-wrap:wrap}\n.",[1],"privacy-text.",[1],"data-v-00986d99{color:#666;font-size:",[0,24],";margin-left:",[0,8],"}\n.",[1],"privacy-link.",[1],"data-v-00986d99{color:#3662dd;font-size:",[0,24],"}\n.",[1],"action-btns.",[1],"data-v-00986d99{padding:",[0,76]," 0 calc(",[0,32]," + env(safe-area-inset-bottom));position:relative;z-index:2}\n.",[1],"btn.",[1],"data-v-00986d99{background:linear-gradient(90deg,#5095f4,#3662dd);border-radius:",[0,8],";color:#fff;font-size:",[0,32],";height:",[0,96],";line-height:",[0,96],";margin:0 auto;width:",[0,640],"}\n.",[1],"btn + .",[1],"btn.",[1],"data-v-00986d99{margin-top:",[0,20],"}\n.",[1],"btn.",[1],"data-v-00986d99::after{border:none}\n.",[1],"other-login.",[1],"data-v-00986d99{margin:",[0,80]," auto 0;position:relative;width:",[0,618],";z-index:5}\n.",[1],"other-login .",[1],"ol-tilte.",[1],"data-v-00986d99{-webkit-align-items:center;align-items:center;display:-webkit-flex;display:flex;-webkit-justify-content:center;justify-content:center}\n.",[1],"other-login .",[1],"ol-tilte.",[1],"data-v-00986d99:after,.",[1],"other-login .",[1],"ol-tilte.",[1],"data-v-00986d99:before{border-bottom:",[0,2]," solid #efefef;content:\x22\x22;display:block;width:30%}\n.",[1],"other-login .",[1],"ol-tilte wx-text.",[1],"data-v-00986d99{color:#666;font-size:",[0,26],";padding:0 ",[0,20],"}\n.",[1],"other-login .",[1],"wx-login.",[1],"data-v-00986d99{height:",[0,88],";margin:",[0,40]," auto 0;width:",[0,88],"}\n.",[1],"other-login .",[1],"wx-login wx-image.",[1],"data-v-00986d99{display:block;height:100%;width:100%}\n.",[1],"bottom_img.",[1],"data-v-00986d99{bottom:0;display:block;left:0;pointer-events:none;position:absolute;width:100%;z-index:0}\n.",[1],"popup-box.",[1],"data-v-00986d99{background-color:rgba(0,0,0,.5);height:100%;left:0;position:absolute;top:0;width:100%;z-index:10}\n.",[1],"login-popup.",[1],"data-v-00986d99{background-color:#fff;bottom:0;left:0;padding-bottom:",[0,40],";position:absolute;width:100%;z-index:10}\n.",[1],"login-popup .",[1],"lp-top.",[1],"data-v-00986d99{-webkit-align-items:center;align-items:center;color:#000;display:-webkit-flex;display:flex;line-height:1.2}\n.",[1],"login-popup .",[1],"lp-top .",[1],"lpt-left.",[1],"data-v-00986d99{-webkit-flex:1;flex:1;padding:",[0,30],"}\n.",[1],"login-popup .",[1],"lp-top .",[1],"lpt-left .",[1],"title.",[1],"data-v-00986d99{font-size:",[0,28],";font-weight:500}\n.",[1],"login-popup .",[1],"lp-top .",[1],"lpt-left .",[1],"tips.",[1],"data-v-00986d99{color:#9a9b9b;font-size:",[0,18],";margin-top:",[0,10],"}\n.",[1],"login-popup .",[1],"lp-top .",[1],"lpt-right.",[1],"data-v-00986d99{padding:",[0,30],"}\n.",[1],"login-popup .",[1],"lp-top .",[1],"lpt-right wx-image.",[1],"data-v-00986d99{display:block;height:",[0,28],";width:",[0,28],"}\n.",[1],"login-popup .",[1],"lp-center.",[1],"data-v-00986d99{color:#000;padding:",[0,10]," ",[0,30]," ",[0,40],";position:relative}\n.",[1],"login-popup .",[1],"lp-center.",[1],"data-v-00986d99:after{border-bottom:",[0,1]," solid #ededed;bottom:0;content:\x22\x22;left:",[0,30],";position:absolute;right:",[0,30],"}\n.",[1],"login-popup .",[1],"lp-center .",[1],"title.",[1],"data-v-00986d99{font-size:",[0,28],";font-weight:600}\n.",[1],"login-popup .",[1],"lp-center .",[1],"tips.",[1],"data-v-00986d99{font-size:",[0,26],";margin-top:",[0,10],"}\n.",[1],"login-popup .",[1],"lp-bottom.",[1],"data-v-00986d99{margin-top:",[0,40],";padding:0 ",[0,30],"}\n.",[1],"login-popup .",[1],"lp-bottom .",[1],"option-btn.",[1],"data-v-00986d99{background:linear-gradient(90deg,#5095f4,#3662dd);color:#fff;font-size:",[0,22],";height:",[0,86],";line-height:",[0,86],";padding:0 ",[0,30],";text-align:center}\n",],"Some selectors are not allowed in component wxss, including tag name selectors, ID selectors, and attribute selectors.(./sub-pages/auth/merchant.wxss:1:3286)",{path:"./sub-pages/auth/merchant.wxss"});
}$gwx0_XC_2=function(_,_v,_n,_p,_s,_wp,_wl,$gwn,$gwl,$gwh,wh,$gstack,$gwrt,gra,grb,TestTest,wfor,_ca,_da,_r,_rz,_o,_oz,_1,_1z,_2,_2z,_m,_mz,nv_getDate,nv_getRegExp,nv_console,nv_parseInt,nv_parseFloat,nv_isNaN,nv_isFinite,nv_decodeURI,nv_decodeURIComponent,nv_encodeURI,nv_encodeURIComponent,$gdc,nv_JSON,_af,_gv,_ai,_grp,_gd,_gapi,$ixc,_ic,_w,_ev,_tsd){return function(path,global){
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
Z([3,'container data-v-798238a8'])
Z([3,'header data-v-798238a8'])
Z([3,'title data-v-798238a8'])
Z([a,[[7],[3,'title']]])
Z([3,'content data-v-798238a8'])
Z([[7],[3,'content']])
Z([3,'data-v-798238a8'])
Z(z[5])
Z([3,'empty data-v-798238a8'])
Z([a,[[2,'?:'],[[7],[3,'loading']],[1,'加载中...'],[1,'暂无协议内容']]])
})(__WXML_GLOBAL__.ops_cached.$gwx0_XC_2_1);return __WXML_GLOBAL__.ops_cached.$gwx0_XC_2_1
}
__WXML_GLOBAL__.ops_set.$gwx0_XC_2=z;
__WXML_GLOBAL__.ops_init.$gwx0_XC_2=true;
var x=['./sub-pages/auth/privacy-policy.wxml'];d_[x[0]]={}
var m0=function(e,s,r,gg){
var z=gz$gwx0_XC_2_1()
var xUD=_n('view')
_rz(z,xUD,'class',0,e,s,gg)
var oVD=_n('view')
_rz(z,oVD,'class',1,e,s,gg)
var fWD=_n('text')
_rz(z,fWD,'class',2,e,s,gg)
var cXD=_oz(z,3,e,s,gg)
_(fWD,cXD)
_(oVD,fWD)
_(xUD,oVD)
var hYD=_n('view')
_rz(z,hYD,'class',4,e,s,gg)
var oZD=_v()
_(hYD,oZD)
if(_oz(z,5,e,s,gg)){oZD.wxVkey=1
var c1D=_mz(z,'rich-text',['class',6,'nodes',1],[],e,s,gg)
_(oZD,c1D)
}
else{oZD.wxVkey=2
var o2D=_n('view')
_rz(z,o2D,'class',8,e,s,gg)
var l3D=_oz(z,9,e,s,gg)
_(o2D,l3D)
_(oZD,o2D)
}
oZD.wxXCkey=1
_(xUD,hYD)
_(r,xUD)
return r
}
e_[x[0]]={f:m0,j:[],i:[],ti:[],ic:[]}
if(path&&e_[path]){
outerGlobal.__wxml_comp_version__=0.02
return function(env,dd,global){$gwxc=0;var root={"tag":"wx-page"};root.children=[]
;g="$gwx0_XC_2";var main=e_[path].f
if (typeof global==="undefined")global={};global.f=$gdc(f_[path],"",1);
if(typeof(outerGlobal.__webview_engine_version__)!='undefined'&&outerGlobal.__webview_engine_version__+1e-6>=0.02+1e-6&&outerGlobal.__mergeData__)
{
env=outerGlobal.__mergeData__(env,dd);
}
try{
main(env,{},root,global);
_tsd(root)
if(typeof(outerGlobal.__webview_engine_version__)=='undefined'|| outerGlobal.__webview_engine_version__+1e-6<0.01+1e-6){return _ev(root);}
}catch(err){
console.log(err)
}
;g="";
return root;
}
}
}
}(__g.a,__g.b,__g.c,__g.d,__g.e,__g.f,__g.g,__g.h,__g.i,__g.j,__g.k,__g.l,__g.m,__g.n,__g.o,__g.p,__g.q,__g.r,__g.s,__g.t,__g.u,__g.v,__g.w,__g.x,__g.y,__g.z,__g.A,__g.B,__g.C,__g.D,__g.E,__g.F,__g.G,__g.H,__g.I,__g.J,__g.K,__g.L,__g.M,__g.N,__g.O,__g.P,__g.Q,__g.R,__g.S,__g.T,__g.U,__g.V,__g.W,__g.X,__g.Y,__g.Z,__g.aa);if(__vd_version_info__.delayedGwx||false)$gwx0_XC_2();	if (__vd_version_info__.delayedGwx) __wxAppCode__['sub-pages/auth/privacy-policy.wxml'] = [$gwx0_XC_2, './sub-pages/auth/privacy-policy.wxml'];else __wxAppCode__['sub-pages/auth/privacy-policy.wxml'] = $gwx0_XC_2( './sub-pages/auth/privacy-policy.wxml' );
	
var noCss=typeof __vd_version_info__!=='undefined'&&__vd_version_info__.noCss===true;if(!noCss){__wxAppCode__['sub-pages/auth/privacy-policy.wxss']=setCssToHead([".",[1],"container.",[1],"data-v-798238a8{background:#f5f5f5;min-height:100vh}\n.",[1],"header.",[1],"data-v-798238a8{background:#fff;border-bottom:",[0,1]," solid #eee;padding:",[0,30],";text-align:center}\n.",[1],"header .",[1],"title.",[1],"data-v-798238a8{color:#333;font-size:",[0,36],";font-weight:700;line-height:1.5}\n.",[1],"content.",[1],"data-v-798238a8{background:#fff;border-radius:",[0,10],";color:#666;font-size:",[0,28],";line-height:1.8;margin:",[0,20],";padding:",[0,30],"}\n.",[1],"empty.",[1],"data-v-798238a8{color:#999;padding:",[0,80]," 0;text-align:center}\n",],undefined,{path:"./sub-pages/auth/privacy-policy.wxss"});
}$gwx0_XC_3=function(_,_v,_n,_p,_s,_wp,_wl,$gwn,$gwl,$gwh,wh,$gstack,$gwrt,gra,grb,TestTest,wfor,_ca,_da,_r,_rz,_o,_oz,_1,_1z,_2,_2z,_m,_mz,nv_getDate,nv_getRegExp,nv_console,nv_parseInt,nv_parseFloat,nv_isNaN,nv_isFinite,nv_decodeURI,nv_decodeURIComponent,nv_encodeURI,nv_encodeURIComponent,$gdc,nv_JSON,_af,_gv,_ai,_grp,_gd,_gapi,$ixc,_ic,_w,_ev,_tsd){return function(path,global){
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
Z([3,'section data-v-75ceecf4'])
Z([3,'label required data-v-75ceecf4'])
Z([3,'所属总仓'])
Z(z[1])
Z([3,'picker-val data-v-75ceecf4'])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[[5],[1,'openWarehousePicker']],[[4],[[5],[1,'$event']]]]]]]]]]])
Z([[4],[[5],[[5],[1,'data-v-75ceecf4']],[[2,'?:'],[[6],[[7],[3,'form']],[3,'mainWarehouseId']],[1,''],[1,'placeholder']]]])
Z([a,[[7],[3,'warehouseText']]])
Z(z[8])
Z(z[9])
Z([3,'供应商编号'])
Z([1,false])
Z(z[1])
Z([3,'input data-v-75ceecf4'])
Z([[4],[[5],[[4],[[5],[[5],[1,'input']],[[4],[[5],[[4],[[5],[[5],[[5],[1,'__set_model']],[[4],[[5],[[5],[[5],[[5],[1,'$0']],[1,'supplierCode']],[1,'$event']],[[4],[[5]]]]]],[[4],[[5],[1,'form']]]]]]]]]]])
Z(z[5])
Z([3,'请输入供应商编号'])
Z([[6],[[7],[3,'form']],[3,'supplierCode']])
Z(z[8])
Z(z[9])
Z([3,'供应商名称'])
Z(z[19])
Z(z[1])
Z(z[21])
Z([[4],[[5],[[4],[[5],[[5],[1,'input']],[[4],[[5],[[4],[[5],[[5],[[5],[1,'__set_model']],[[4],[[5],[[5],[[5],[[5],[1,'$0']],[1,'supplierName']],[1,'$event']],[[4],[[5]]]]]],[[4],[[5],[1,'form']]]]]]]]]]])
Z(z[5])
Z([3,'请输入供应商全称'])
Z([[6],[[7],[3,'form']],[3,'supplierName']])
Z(z[8])
Z(z[9])
Z([3,'真实姓名'])
Z(z[19])
Z(z[1])
Z(z[21])
Z([[4],[[5],[[4],[[5],[[5],[1,'input']],[[4],[[5],[[4],[[5],[[5],[[5],[1,'__set_model']],[[4],[[5],[[5],[[5],[[5],[1,'$0']],[1,'realName']],[1,'$event']],[[4],[[5]]]]]],[[4],[[5],[1,'form']]]]]]]]]]])
Z(z[5])
Z([3,'请输入真实姓名'])
Z([[6],[[7],[3,'form']],[3,'realName']])
Z(z[8])
Z(z[9])
Z([3,'结算主体'])
Z(z[1])
Z(z[12])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[[5],[1,'openSettlementPicker']],[[4],[[5],[1,'$event']]]]]]]]]]])
Z([[4],[[5],[[5],[1,'data-v-75ceecf4']],[[2,'?:'],[[6],[[7],[3,'form']],[3,'settlementType']],[1,''],[1,'placeholder']]]])
Z([a,[[7],[3,'settlementTypeText']]])
Z(z[8])
Z(z[9])
Z([3,'手机'])
Z(z[19])
Z(z[1])
Z(z[21])
Z([[4],[[5],[[4],[[5],[[5],[1,'input']],[[4],[[5],[[4],[[5],[[5],[[5],[1,'__set_model']],[[4],[[5],[[5],[[5],[[5],[1,'$0']],[1,'phone']],[1,'$event']],[[4],[[5]]]]]],[[4],[[5],[1,'form']]]]]]]]]]])
Z(z[5])
Z([3,'11'])
Z([3,'请输入手机号'])
Z([3,'digit'])
Z([[6],[[7],[3,'form']],[3,'phone']])
Z(z[8])
Z(z[9])
Z([3,'登录账号'])
Z(z[19])
Z(z[1])
Z(z[21])
Z([[4],[[5],[[4],[[5],[[5],[1,'input']],[[4],[[5],[[4],[[5],[[5],[[5],[1,'__set_model']],[[4],[[5],[[5],[[5],[[5],[1,'$0']],[1,'account']],[1,'$event']],[[4],[[5]]]]]],[[4],[[5],[1,'form']]]]]]]]]]])
Z(z[5])
Z([3,'请输入供应商系统登录账号'])
Z([[6],[[7],[3,'form']],[3,'account']])
Z(z[8])
Z(z[9])
Z([3,'登录密码'])
Z(z[19])
Z(z[1])
Z(z[21])
Z([[4],[[5],[[4],[[5],[[5],[1,'input']],[[4],[[5],[[4],[[5],[[5],[[5],[1,'__set_model']],[[4],[[5],[[5],[[5],[[5],[1,'$0']],[1,'password']],[1,'$event']],[[4],[[5]]]]]],[[4],[[5],[1,'form']]]]]]]]]]])
Z(z[5])
Z([3,'请输入登录密码'])
Z([[6],[[7],[3,'form']],[3,'password']])
Z(z[8])
Z([3,'label data-v-75ceecf4'])
Z([3,'档口号'])
Z(z[19])
Z(z[1])
Z(z[21])
Z([[4],[[5],[[4],[[5],[[5],[1,'input']],[[4],[[5],[[4],[[5],[[5],[[5],[1,'__set_model']],[[4],[[5],[[5],[[5],[[5],[1,'$0']],[1,'stallCode']],[1,'$event']],[[4],[[5]]]]]],[[4],[[5],[1,'form']]]]]]]]]]])
Z(z[5])
Z([3,'请输入仓库档口号'])
Z([[6],[[7],[3,'form']],[3,'stallCode']])
Z(z[8])
Z(z[9])
Z([3,'开票类型'])
Z(z[1])
Z(z[12])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[[5],[1,'openInvoicePicker']],[[4],[[5],[1,'$event']]]]]]]]]]])
Z([[4],[[5],[[5],[1,'data-v-75ceecf4']],[[2,'?:'],[[6],[[7],[3,'form']],[3,'invoiceType']],[1,''],[1,'placeholder']]]])
Z([a,[[7],[3,'invoiceTypeText']]])
Z(z[8])
Z(z[87])
Z([3,'营业执照'])
Z([3,'upload-row data-v-75ceecf4'])
Z([[6],[[7],[3,'form']],[3,'businessLicense']])
Z([3,'thumb-wrap data-v-75ceecf4'])
Z([3,'thumb data-v-75ceecf4'])
Z([3,'aspectFill'])
Z(z[108])
Z(z[1])
Z([3,'thumb-del data-v-75ceecf4'])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[[5],[1,'clearUpload']],[[4],[[5],[1,'businessLicense']]]]]]]]]]])
Z([3,'删除'])
Z(z[1])
Z([3,'upload-btn data-v-75ceecf4'])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[[5],[1,'pickImage']],[[4],[[5],[1,'businessLicense']]]]]]]]]]])
Z([3,'upload-plus data-v-75ceecf4'])
Z([3,'+'])
Z([3,'upload-hint data-v-75ceecf4'])
Z([3,'请上传 大小不超过 5MB 格式为 png/jpg/jpeg/ico 的文件'])
Z([[2,'==='],[[6],[[7],[3,'form']],[3,'settlementType']],[1,'PUBLIC']])
Z(z[8])
Z(z[9])
Z([3,'公司名称'])
Z(z[19])
Z(z[1])
Z(z[21])
Z([[4],[[5],[[4],[[5],[[5],[1,'input']],[[4],[[5],[[4],[[5],[[5],[[5],[1,'__set_model']],[[4],[[5],[[5],[[5],[[5],[1,'$0']],[1,'companyName']],[1,'$event']],[[4],[[5]]]]]],[[4],[[5],[1,'form']]]]]]]]]]])
Z(z[5])
Z([3,'请输入公司名称(营业执照名称)'])
Z([[6],[[7],[3,'form']],[3,'companyName']])
Z(z[124])
Z(z[8])
Z(z[9])
Z([3,'营业执照编号'])
Z(z[19])
Z(z[1])
Z(z[21])
Z([[4],[[5],[[4],[[5],[[5],[1,'input']],[[4],[[5],[[4],[[5],[[5],[[5],[1,'__set_model']],[[4],[[5],[[5],[[5],[[5],[1,'$0']],[1,'licenceNo']],[1,'$event']],[[4],[[5]]]]]],[[4],[[5],[1,'form']]]]]]]]]]])
Z(z[5])
Z([3,'请输入营业执照编号'])
Z([[6],[[7],[3,'form']],[3,'licenceNo']])
Z(z[124])
Z(z[8])
Z(z[9])
Z([3,'执照类型'])
Z(z[1])
Z(z[12])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[[5],[1,'openMerchantTypePicker']],[[4],[[5],[1,'$event']]]]]]]]]]])
Z([[4],[[5],[[5],[1,'data-v-75ceecf4']],[[2,'?:'],[[6],[[7],[3,'form']],[3,'merchantType']],[1,''],[1,'placeholder']]]])
Z([a,[[7],[3,'merchantTypeText']]])
Z(z[124])
Z(z[8])
Z(z[9])
Z([3,'法人姓名'])
Z(z[19])
Z(z[1])
Z(z[21])
Z([[4],[[5],[[4],[[5],[[5],[1,'input']],[[4],[[5],[[4],[[5],[[5],[[5],[1,'__set_model']],[[4],[[5],[[5],[[5],[[5],[1,'$0']],[1,'legalName']],[1,'$event']],[[4],[[5]]]]]],[[4],[[5],[1,'form']]]]]]]]]]])
Z(z[5])
Z([3,'请输入法人姓名'])
Z([[6],[[7],[3,'form']],[3,'legalName']])
Z(z[124])
Z(z[8])
Z(z[9])
Z([3,'法人身份证号'])
Z(z[19])
Z(z[1])
Z(z[21])
Z([[4],[[5],[[4],[[5],[[5],[1,'input']],[[4],[[5],[[4],[[5],[[5],[[5],[1,'__set_model']],[[4],[[5],[[5],[[5],[[5],[1,'$0']],[1,'legalLicenceNo']],[1,'$event']],[[4],[[5]]]]]],[[4],[[5],[1,'form']]]]]]]]]]])
Z(z[5])
Z([3,'请输入法人身份证号'])
Z([[6],[[7],[3,'form']],[3,'legalLicenceNo']])
Z(z[124])
Z(z[8])
Z(z[9])
Z([3,'开户许可证'])
Z(z[107])
Z([[6],[[7],[3,'form']],[3,'bankImg']])
Z(z[109])
Z(z[110])
Z(z[111])
Z(z[182])
Z(z[1])
Z(z[114])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[[5],[1,'clearUpload']],[[4],[[5],[1,'bankImg']]]]]]]]]]])
Z(z[116])
Z(z[1])
Z(z[118])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[[5],[1,'pickImage']],[[4],[[5],[1,'bankImg']]]]]]]]]]])
Z(z[120])
Z(z[121])
Z(z[122])
Z(z[123])
Z(z[8])
Z(z[87])
Z([3,'身份证(头像)'])
Z(z[107])
Z([[6],[[7],[3,'form']],[3,'idCardAvatar']])
Z(z[109])
Z(z[110])
Z(z[111])
Z(z[202])
Z(z[1])
Z(z[114])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[[5],[1,'clearUpload']],[[4],[[5],[1,'idCardAvatar']]]]]]]]]]])
Z(z[116])
Z(z[1])
Z(z[118])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[[5],[1,'pickImage']],[[4],[[5],[1,'idCardAvatar']]]]]]]]]]])
Z(z[120])
Z(z[121])
Z(z[122])
Z(z[123])
Z(z[8])
Z(z[87])
Z([3,'身份证(国徽)'])
Z(z[107])
Z([[6],[[7],[3,'form']],[3,'idCardNational']])
Z(z[109])
Z(z[110])
Z(z[111])
Z(z[222])
Z(z[1])
Z(z[114])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[[5],[1,'clearUpload']],[[4],[[5],[1,'idCardNational']]]]]]]]]]])
Z(z[116])
Z(z[1])
Z(z[118])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[[5],[1,'pickImage']],[[4],[[5],[1,'idCardNational']]]]]]]]]]])
Z(z[120])
Z(z[121])
Z(z[122])
Z(z[123])
Z([[2,'!=='],[[6],[[7],[3,'form']],[3,'settlementType']],[1,'PUBLIC']])
Z(z[8])
Z(z[9])
Z([3,'身份证号'])
Z(z[19])
Z(z[1])
Z(z[21])
Z([[4],[[5],[[4],[[5],[[5],[1,'input']],[[4],[[5],[[4],[[5],[[5],[[5],[1,'__set_model']],[[4],[[5],[[5],[[5],[[5],[1,'$0']],[1,'idCardNo']],[1,'$event']],[[4],[[5]]]]]],[[4],[[5],[1,'form']]]]]]]]]]])
Z(z[5])
Z([3,'请输入身份证号'])
Z([3,'idcard'])
Z([[6],[[7],[3,'form']],[3,'idCardNo']])
Z(z[8])
Z(z[9])
Z([3,'开户行'])
Z(z[1])
Z(z[12])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[[5],[1,'openBankPanel']],[[4],[[5],[1,'$event']]]]]]]]]]])
Z([[4],[[5],[[5],[1,'data-v-75ceecf4']],[[2,'?:'],[[6],[[7],[3,'form']],[3,'bankName']],[1,''],[1,'placeholder']]]])
Z([a,[[7],[3,'bankText']]])
Z(z[8])
Z(z[87])
Z([3,'银行编码'])
Z(z[1])
Z(z[21])
Z([[4],[[5],[[4],[[5],[[5],[1,'input']],[[4],[[5],[[4],[[5],[[5],[[5],[1,'__set_model']],[[4],[[5],[[5],[[5],[[5],[1,'$0']],[1,'bankCode']],[1,'$event']],[[4],[[5]]]]]],[[4],[[5],[1,'form']]]]]]]]]]])
Z(z[5])
Z([3,'固定编码'])
Z([[6],[[7],[3,'form']],[3,'bankCode']])
Z(z[8])
Z(z[87])
Z([3,'银行卡号'])
Z(z[19])
Z(z[1])
Z(z[21])
Z([[4],[[5],[[4],[[5],[[5],[1,'input']],[[4],[[5],[[4],[[5],[[5],[[5],[1,'__set_model']],[[4],[[5],[[5],[[5],[[5],[1,'$0']],[1,'bankCardNo']],[1,'$event']],[[4],[[5]]]]]],[[4],[[5],[1,'form']]]]]]]]]]])
Z(z[5])
Z([3,'请输入银行卡号'])
Z(z[64])
Z([[6],[[7],[3,'form']],[3,'bankCardNo']])
Z([3,'foot-space data-v-75ceecf4'])
Z([3,'bottom-bar data-v-75ceecf4'])
Z([3,'privacy-wrap data-v-75ceecf4'])
Z(z[1])
Z([3,'data-v-75ceecf4'])
Z([[4],[[5],[[4],[[5],[[5],[1,'change']],[[4],[[5],[[4],[[5],[[5],[1,'onPrivacyCheckboxChange']],[[4],[[5],[1,'$event']]]]]]]]]]])
Z([3,'privacy-label data-v-75ceecf4'])
Z([[7],[3,'agreePrivacy']])
Z(z[282])
Z([3,'#4ab83a'])
Z([3,'1'])
Z([3,'privacy-text data-v-75ceecf4'])
Z([3,'我已阅读并同意'])
Z(z[1])
Z([3,'privacy-link data-v-75ceecf4'])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[[5],[1,'openPrivacyPolicy']],[[4],[[5],[1,'$event']]]]]]]]]]])
Z([3,'《隐私政策》'])
Z(z[1])
Z([3,'btn-submit data-v-75ceecf4'])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[[5],[1,'onSubmit']],[[4],[[5],[1,'$event']]]]]]]]]]])
Z([[7],[3,'submitLoading']])
Z([3,'注册'])
Z(z[1])
Z([3,'btn-back data-v-75ceecf4'])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[[5],[1,'goLogin']],[[4],[[5],[1,'$event']]]]]]]]]]])
Z([3,'返回登录'])
Z([[7],[3,'warehousePanelVisible']])
Z(z[1])
Z([3,'bank-mask data-v-75ceecf4'])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[[5],[1,'closeWarehousePanel']],[[4],[[5],[1,'$event']]]]]]]]]]])
Z(z[1])
Z([3,'bank-panel data-v-75ceecf4'])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[[5],[1,'']],[[4],[[5],[1,'$event']]]]]]]]]]])
Z([3,'bank-head data-v-75ceecf4'])
Z([3,'bank-title data-v-75ceecf4'])
Z([3,'选择所属总仓'])
Z(z[1])
Z([3,'bank-close data-v-75ceecf4'])
Z(z[307])
Z([3,'关闭'])
Z([3,'bank-list data-v-75ceecf4'])
Z(z[5])
Z(z[19])
Z([[2,'==='],[[6],[[7],[3,'$root']],[3,'g0']],[1,0]])
Z([3,'bank-empty data-v-75ceecf4'])
Z([3,'暂无总仓数据'])
Z([3,'idx'])
Z([3,'item'])
Z([[6],[[7],[3,'$root']],[3,'l0']])
Z(z[1])
Z([3,'bank-item data-v-75ceecf4'])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[[5],[1,'onWarehouseItemTap']],[[4],[[5],[1,'$event']]]]]]]]]]])
Z([[7],[3,'idx']])
Z([a,[[2,'+'],[[2,'+'],[1,''],[[6],[[7],[3,'item']],[3,'m0']]],[1,'']]])
Z([[7],[3,'bankPanelVisible']])
Z(z[1])
Z(z[306])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[[5],[1,'closeBankPanel']],[[4],[[5],[1,'$event']]]]]]]]]]])
Z(z[1])
Z(z[309])
Z(z[310])
Z([[2,'+'],[[2,'+'],[1,'transform:'],[[2,'?:'],[[7],[3,'bankKeyboardHeight']],[[2,'+'],[[2,'+'],[1,'translateY(-'],[[7],[3,'bankKeyboardHeight']]],[1,'px)']],[1,'none']]],[1,';']])
Z(z[311])
Z(z[312])
Z([3,'选择开户行'])
Z(z[1])
Z(z[315])
Z(z[335])
Z(z[317])
Z(z[19])
Z(z[1])
Z(z[1])
Z(z[1])
Z([3,'bank-search data-v-75ceecf4'])
Z([[4],[[5],[[5],[[5],[[4],[[5],[[5],[1,'input']],[[4],[[5],[[5],[[4],[[5],[[5],[1,'__set_model']],[[4],[[5],[[5],[[5],[[5],[1,'']],[1,'bankKeyword']],[1,'$event']],[[4],[[5]]]]]]]],[[4],[[5],[[5],[1,'onBankKeywordInput']],[[4],[[5],[1,'$event']]]]]]]]]],[[4],[[5],[[5],[1,'focus']],[[4],[[5],[[4],[[5],[[5],[1,'onBankSearchFocus']],[[4],[[5],[1,'$event']]]]]]]]]],[[4],[[5],[[5],[1,'blur']],[[4],[[5],[[4],[[5],[[5],[1,'onBankSearchBlur']],[[4],[[5],[1,'$event']]]]]]]]]]])
Z(z[5])
Z([3,'请输入银行名称搜索，如：中国银行'])
Z([[7],[3,'bankKeyword']])
Z(z[318])
Z(z[5])
Z(z[19])
Z([[2,'+'],[[2,'+'],[1,'max-height:'],[[2,'?:'],[[7],[3,'bankKeyboardHeight']],[[2,'+'],[[2,'+'],[1,'calc(50vh - '],[[7],[3,'bankKeyboardHeight']]],[1,'px)']],[1,'50vh']]],[1,';']])
Z([[7],[3,'bankSearching']])
Z(z[322])
Z([3,'搜索中...'])
Z([[2,'!'],[[6],[[7],[3,'$root']],[3,'g1']]])
Z(z[322])
Z([3,'请输入银行名称搜索'])
Z([[2,'==='],[[6],[[7],[3,'$root']],[3,'g2']],[1,0]])
Z(z[322])
Z([3,'无匹配开户行'])
Z(z[324])
Z(z[325])
Z([[7],[3,'bankList']])
Z(z[1])
Z(z[328])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[[5],[1,'onBankItemTap']],[[4],[[5],[1,'$event']]]]]]]]]]])
Z(z[330])
Z([a,[[2,'+'],[[2,'+'],[1,''],[[2,'||'],[[6],[[7],[3,'item']],[3,'bankName']],[1,'-']]],[1,'']]])
Z([3,'__l'])
Z(z[282])
Z([3,'440f3292-1'])
})(__WXML_GLOBAL__.ops_cached.$gwx0_XC_3_1);return __WXML_GLOBAL__.ops_cached.$gwx0_XC_3_1
}
__WXML_GLOBAL__.ops_set.$gwx0_XC_3=z;
__WXML_GLOBAL__.ops_init.$gwx0_XC_3=true;
var x=['./sub-pages/auth/register.wxml'];d_[x[0]]={}
var m0=function(e,s,r,gg){
var z=gz$gwx0_XC_3_1()
var t5D=_n('view')
_rz(z,t5D,'class',0,e,s,gg)
var o8D=_mz(z,'scroll-view',['binddragstart',1,'bindscroll',1,'class',2,'data-event-opts',3,'enhanced',4,'scrollY',5,'showScrollbar',6],[],e,s,gg)
var oFE=_n('view')
_rz(z,oFE,'class',8,e,s,gg)
var lGE=_n('view')
_rz(z,lGE,'class',9,e,s,gg)
var aHE=_oz(z,10,e,s,gg)
_(lGE,aHE)
_(oFE,lGE)
var tIE=_mz(z,'view',['bindtap',11,'class',1,'data-event-opts',2],[],e,s,gg)
var eJE=_n('text')
_rz(z,eJE,'class',14,e,s,gg)
var bKE=_oz(z,15,e,s,gg)
_(eJE,bKE)
_(tIE,eJE)
_(oFE,tIE)
_(o8D,oFE)
var oLE=_n('view')
_rz(z,oLE,'class',16,e,s,gg)
var xME=_n('view')
_rz(z,xME,'class',17,e,s,gg)
var oNE=_oz(z,18,e,s,gg)
_(xME,oNE)
_(oLE,xME)
var fOE=_mz(z,'input',['adjustPosition',19,'bindinput',1,'class',2,'data-event-opts',3,'holdKeyboard',4,'placeholder',5,'value',6],[],e,s,gg)
_(oLE,fOE)
_(o8D,oLE)
var cPE=_n('view')
_rz(z,cPE,'class',26,e,s,gg)
var hQE=_n('view')
_rz(z,hQE,'class',27,e,s,gg)
var oRE=_oz(z,28,e,s,gg)
_(hQE,oRE)
_(cPE,hQE)
var cSE=_mz(z,'input',['adjustPosition',29,'bindinput',1,'class',2,'data-event-opts',3,'holdKeyboard',4,'placeholder',5,'value',6],[],e,s,gg)
_(cPE,cSE)
_(o8D,cPE)
var oTE=_n('view')
_rz(z,oTE,'class',36,e,s,gg)
var lUE=_n('view')
_rz(z,lUE,'class',37,e,s,gg)
var aVE=_oz(z,38,e,s,gg)
_(lUE,aVE)
_(oTE,lUE)
var tWE=_mz(z,'input',['adjustPosition',39,'bindinput',1,'class',2,'data-event-opts',3,'holdKeyboard',4,'placeholder',5,'value',6],[],e,s,gg)
_(oTE,tWE)
_(o8D,oTE)
var eXE=_n('view')
_rz(z,eXE,'class',46,e,s,gg)
var bYE=_n('view')
_rz(z,bYE,'class',47,e,s,gg)
var oZE=_oz(z,48,e,s,gg)
_(bYE,oZE)
_(eXE,bYE)
var x1E=_mz(z,'view',['bindtap',49,'class',1,'data-event-opts',2],[],e,s,gg)
var o2E=_n('text')
_rz(z,o2E,'class',52,e,s,gg)
var f3E=_oz(z,53,e,s,gg)
_(o2E,f3E)
_(x1E,o2E)
_(eXE,x1E)
_(o8D,eXE)
var c4E=_n('view')
_rz(z,c4E,'class',54,e,s,gg)
var h5E=_n('view')
_rz(z,h5E,'class',55,e,s,gg)
var o6E=_oz(z,56,e,s,gg)
_(h5E,o6E)
_(c4E,h5E)
var c7E=_mz(z,'input',['adjustPosition',57,'bindinput',1,'class',2,'data-event-opts',3,'holdKeyboard',4,'maxlength',5,'placeholder',6,'type',7,'value',8],[],e,s,gg)
_(c4E,c7E)
_(o8D,c4E)
var o8E=_n('view')
_rz(z,o8E,'class',66,e,s,gg)
var l9E=_n('view')
_rz(z,l9E,'class',67,e,s,gg)
var a0E=_oz(z,68,e,s,gg)
_(l9E,a0E)
_(o8E,l9E)
var tAF=_mz(z,'input',['adjustPosition',69,'bindinput',1,'class',2,'data-event-opts',3,'holdKeyboard',4,'placeholder',5,'value',6],[],e,s,gg)
_(o8E,tAF)
_(o8D,o8E)
var eBF=_n('view')
_rz(z,eBF,'class',76,e,s,gg)
var bCF=_n('view')
_rz(z,bCF,'class',77,e,s,gg)
var oDF=_oz(z,78,e,s,gg)
_(bCF,oDF)
_(eBF,bCF)
var xEF=_mz(z,'input',['adjustPosition',79,'bindinput',1,'class',2,'data-event-opts',3,'holdKeyboard',4,'placeholder',5,'value',6],[],e,s,gg)
_(eBF,xEF)
_(o8D,eBF)
var oFF=_n('view')
_rz(z,oFF,'class',86,e,s,gg)
var fGF=_n('view')
_rz(z,fGF,'class',87,e,s,gg)
var cHF=_oz(z,88,e,s,gg)
_(fGF,cHF)
_(oFF,fGF)
var hIF=_mz(z,'input',['adjustPosition',89,'bindinput',1,'class',2,'data-event-opts',3,'holdKeyboard',4,'placeholder',5,'value',6],[],e,s,gg)
_(oFF,hIF)
_(o8D,oFF)
var oJF=_n('view')
_rz(z,oJF,'class',96,e,s,gg)
var cKF=_n('view')
_rz(z,cKF,'class',97,e,s,gg)
var oLF=_oz(z,98,e,s,gg)
_(cKF,oLF)
_(oJF,cKF)
var lMF=_mz(z,'view',['bindtap',99,'class',1,'data-event-opts',2],[],e,s,gg)
var aNF=_n('text')
_rz(z,aNF,'class',102,e,s,gg)
var tOF=_oz(z,103,e,s,gg)
_(aNF,tOF)
_(lMF,aNF)
_(oJF,lMF)
_(o8D,oJF)
var ePF=_n('view')
_rz(z,ePF,'class',104,e,s,gg)
var bQF=_n('view')
_rz(z,bQF,'class',105,e,s,gg)
var oRF=_oz(z,106,e,s,gg)
_(bQF,oRF)
_(ePF,bQF)
var xSF=_n('view')
_rz(z,xSF,'class',107,e,s,gg)
var oTF=_v()
_(xSF,oTF)
if(_oz(z,108,e,s,gg)){oTF.wxVkey=1
var fUF=_n('view')
_rz(z,fUF,'class',109,e,s,gg)
var cVF=_mz(z,'image',['class',110,'mode',1,'src',2],[],e,s,gg)
_(fUF,cVF)
var hWF=_mz(z,'text',['bindtap',113,'class',1,'data-event-opts',2],[],e,s,gg)
var oXF=_oz(z,116,e,s,gg)
_(hWF,oXF)
_(fUF,hWF)
_(oTF,fUF)
}
else{oTF.wxVkey=2
var cYF=_mz(z,'view',['bindtap',117,'class',1,'data-event-opts',2],[],e,s,gg)
var oZF=_n('text')
_rz(z,oZF,'class',120,e,s,gg)
var l1F=_oz(z,121,e,s,gg)
_(oZF,l1F)
_(cYF,oZF)
_(oTF,cYF)
}
oTF.wxXCkey=1
_(ePF,xSF)
var a2F=_n('text')
_rz(z,a2F,'class',122,e,s,gg)
var t3F=_oz(z,123,e,s,gg)
_(a2F,t3F)
_(ePF,a2F)
_(o8D,ePF)
var x9D=_v()
_(o8D,x9D)
if(_oz(z,124,e,s,gg)){x9D.wxVkey=1
var e4F=_n('view')
_rz(z,e4F,'class',125,e,s,gg)
var b5F=_n('view')
_rz(z,b5F,'class',126,e,s,gg)
var o6F=_oz(z,127,e,s,gg)
_(b5F,o6F)
_(e4F,b5F)
var x7F=_mz(z,'input',['adjustPosition',128,'bindinput',1,'class',2,'data-event-opts',3,'holdKeyboard',4,'placeholder',5,'value',6],[],e,s,gg)
_(e4F,x7F)
_(x9D,e4F)
}
var o0D=_v()
_(o8D,o0D)
if(_oz(z,135,e,s,gg)){o0D.wxVkey=1
var o8F=_n('view')
_rz(z,o8F,'class',136,e,s,gg)
var f9F=_n('view')
_rz(z,f9F,'class',137,e,s,gg)
var c0F=_oz(z,138,e,s,gg)
_(f9F,c0F)
_(o8F,f9F)
var hAG=_mz(z,'input',['adjustPosition',139,'bindinput',1,'class',2,'data-event-opts',3,'holdKeyboard',4,'placeholder',5,'value',6],[],e,s,gg)
_(o8F,hAG)
_(o0D,o8F)
}
var fAE=_v()
_(o8D,fAE)
if(_oz(z,146,e,s,gg)){fAE.wxVkey=1
var oBG=_n('view')
_rz(z,oBG,'class',147,e,s,gg)
var cCG=_n('view')
_rz(z,cCG,'class',148,e,s,gg)
var oDG=_oz(z,149,e,s,gg)
_(cCG,oDG)
_(oBG,cCG)
var lEG=_mz(z,'view',['bindtap',150,'class',1,'data-event-opts',2],[],e,s,gg)
var aFG=_n('text')
_rz(z,aFG,'class',153,e,s,gg)
var tGG=_oz(z,154,e,s,gg)
_(aFG,tGG)
_(lEG,aFG)
_(oBG,lEG)
_(fAE,oBG)
}
var cBE=_v()
_(o8D,cBE)
if(_oz(z,155,e,s,gg)){cBE.wxVkey=1
var eHG=_n('view')
_rz(z,eHG,'class',156,e,s,gg)
var bIG=_n('view')
_rz(z,bIG,'class',157,e,s,gg)
var oJG=_oz(z,158,e,s,gg)
_(bIG,oJG)
_(eHG,bIG)
var xKG=_mz(z,'input',['adjustPosition',159,'bindinput',1,'class',2,'data-event-opts',3,'holdKeyboard',4,'placeholder',5,'value',6],[],e,s,gg)
_(eHG,xKG)
_(cBE,eHG)
}
var hCE=_v()
_(o8D,hCE)
if(_oz(z,166,e,s,gg)){hCE.wxVkey=1
var oLG=_n('view')
_rz(z,oLG,'class',167,e,s,gg)
var fMG=_n('view')
_rz(z,fMG,'class',168,e,s,gg)
var cNG=_oz(z,169,e,s,gg)
_(fMG,cNG)
_(oLG,fMG)
var hOG=_mz(z,'input',['adjustPosition',170,'bindinput',1,'class',2,'data-event-opts',3,'holdKeyboard',4,'placeholder',5,'value',6],[],e,s,gg)
_(oLG,hOG)
_(hCE,oLG)
}
var oDE=_v()
_(o8D,oDE)
if(_oz(z,177,e,s,gg)){oDE.wxVkey=1
var oPG=_n('view')
_rz(z,oPG,'class',178,e,s,gg)
var cQG=_n('view')
_rz(z,cQG,'class',179,e,s,gg)
var oRG=_oz(z,180,e,s,gg)
_(cQG,oRG)
_(oPG,cQG)
var lSG=_n('view')
_rz(z,lSG,'class',181,e,s,gg)
var aTG=_v()
_(lSG,aTG)
if(_oz(z,182,e,s,gg)){aTG.wxVkey=1
var tUG=_n('view')
_rz(z,tUG,'class',183,e,s,gg)
var eVG=_mz(z,'image',['class',184,'mode',1,'src',2],[],e,s,gg)
_(tUG,eVG)
var bWG=_mz(z,'text',['bindtap',187,'class',1,'data-event-opts',2],[],e,s,gg)
var oXG=_oz(z,190,e,s,gg)
_(bWG,oXG)
_(tUG,bWG)
_(aTG,tUG)
}
else{aTG.wxVkey=2
var xYG=_mz(z,'view',['bindtap',191,'class',1,'data-event-opts',2],[],e,s,gg)
var oZG=_n('text')
_rz(z,oZG,'class',194,e,s,gg)
var f1G=_oz(z,195,e,s,gg)
_(oZG,f1G)
_(xYG,oZG)
_(aTG,xYG)
}
aTG.wxXCkey=1
_(oPG,lSG)
var c2G=_n('text')
_rz(z,c2G,'class',196,e,s,gg)
var h3G=_oz(z,197,e,s,gg)
_(c2G,h3G)
_(oPG,c2G)
_(oDE,oPG)
}
var o4G=_n('view')
_rz(z,o4G,'class',198,e,s,gg)
var c5G=_n('view')
_rz(z,c5G,'class',199,e,s,gg)
var o6G=_oz(z,200,e,s,gg)
_(c5G,o6G)
_(o4G,c5G)
var l7G=_n('view')
_rz(z,l7G,'class',201,e,s,gg)
var a8G=_v()
_(l7G,a8G)
if(_oz(z,202,e,s,gg)){a8G.wxVkey=1
var t9G=_n('view')
_rz(z,t9G,'class',203,e,s,gg)
var e0G=_mz(z,'image',['class',204,'mode',1,'src',2],[],e,s,gg)
_(t9G,e0G)
var bAH=_mz(z,'text',['bindtap',207,'class',1,'data-event-opts',2],[],e,s,gg)
var oBH=_oz(z,210,e,s,gg)
_(bAH,oBH)
_(t9G,bAH)
_(a8G,t9G)
}
else{a8G.wxVkey=2
var xCH=_mz(z,'view',['bindtap',211,'class',1,'data-event-opts',2],[],e,s,gg)
var oDH=_n('text')
_rz(z,oDH,'class',214,e,s,gg)
var fEH=_oz(z,215,e,s,gg)
_(oDH,fEH)
_(xCH,oDH)
_(a8G,xCH)
}
a8G.wxXCkey=1
_(o4G,l7G)
var cFH=_n('text')
_rz(z,cFH,'class',216,e,s,gg)
var hGH=_oz(z,217,e,s,gg)
_(cFH,hGH)
_(o4G,cFH)
_(o8D,o4G)
var oHH=_n('view')
_rz(z,oHH,'class',218,e,s,gg)
var cIH=_n('view')
_rz(z,cIH,'class',219,e,s,gg)
var oJH=_oz(z,220,e,s,gg)
_(cIH,oJH)
_(oHH,cIH)
var lKH=_n('view')
_rz(z,lKH,'class',221,e,s,gg)
var aLH=_v()
_(lKH,aLH)
if(_oz(z,222,e,s,gg)){aLH.wxVkey=1
var tMH=_n('view')
_rz(z,tMH,'class',223,e,s,gg)
var eNH=_mz(z,'image',['class',224,'mode',1,'src',2],[],e,s,gg)
_(tMH,eNH)
var bOH=_mz(z,'text',['bindtap',227,'class',1,'data-event-opts',2],[],e,s,gg)
var oPH=_oz(z,230,e,s,gg)
_(bOH,oPH)
_(tMH,bOH)
_(aLH,tMH)
}
else{aLH.wxVkey=2
var xQH=_mz(z,'view',['bindtap',231,'class',1,'data-event-opts',2],[],e,s,gg)
var oRH=_n('text')
_rz(z,oRH,'class',234,e,s,gg)
var fSH=_oz(z,235,e,s,gg)
_(oRH,fSH)
_(xQH,oRH)
_(aLH,xQH)
}
aLH.wxXCkey=1
_(oHH,lKH)
var cTH=_n('text')
_rz(z,cTH,'class',236,e,s,gg)
var hUH=_oz(z,237,e,s,gg)
_(cTH,hUH)
_(oHH,cTH)
_(o8D,oHH)
var cEE=_v()
_(o8D,cEE)
if(_oz(z,238,e,s,gg)){cEE.wxVkey=1
var oVH=_n('view')
_rz(z,oVH,'class',239,e,s,gg)
var cWH=_n('view')
_rz(z,cWH,'class',240,e,s,gg)
var oXH=_oz(z,241,e,s,gg)
_(cWH,oXH)
_(oVH,cWH)
var lYH=_mz(z,'input',['adjustPosition',242,'bindinput',1,'class',2,'data-event-opts',3,'holdKeyboard',4,'placeholder',5,'type',6,'value',7],[],e,s,gg)
_(oVH,lYH)
_(cEE,oVH)
}
var aZH=_n('view')
_rz(z,aZH,'class',250,e,s,gg)
var t1H=_n('view')
_rz(z,t1H,'class',251,e,s,gg)
var e2H=_oz(z,252,e,s,gg)
_(t1H,e2H)
_(aZH,t1H)
var b3H=_mz(z,'view',['bindtap',253,'class',1,'data-event-opts',2],[],e,s,gg)
var o4H=_n('text')
_rz(z,o4H,'class',256,e,s,gg)
var x5H=_oz(z,257,e,s,gg)
_(o4H,x5H)
_(b3H,o4H)
_(aZH,b3H)
_(o8D,aZH)
var o6H=_n('view')
_rz(z,o6H,'class',258,e,s,gg)
var f7H=_n('view')
_rz(z,f7H,'class',259,e,s,gg)
var c8H=_oz(z,260,e,s,gg)
_(f7H,c8H)
_(o6H,f7H)
var h9H=_mz(z,'input',['bindinput',261,'class',1,'data-event-opts',2,'disabled',3,'placeholder',4,'value',5],[],e,s,gg)
_(o6H,h9H)
_(o8D,o6H)
var o0H=_n('view')
_rz(z,o0H,'class',267,e,s,gg)
var cAI=_n('view')
_rz(z,cAI,'class',268,e,s,gg)
var oBI=_oz(z,269,e,s,gg)
_(cAI,oBI)
_(o0H,cAI)
var lCI=_mz(z,'input',['adjustPosition',270,'bindinput',1,'class',2,'data-event-opts',3,'holdKeyboard',4,'placeholder',5,'type',6,'value',7],[],e,s,gg)
_(o0H,lCI)
_(o8D,o0H)
var aDI=_n('view')
_rz(z,aDI,'class',278,e,s,gg)
_(o8D,aDI)
x9D.wxXCkey=1
o0D.wxXCkey=1
fAE.wxXCkey=1
cBE.wxXCkey=1
hCE.wxXCkey=1
oDE.wxXCkey=1
cEE.wxXCkey=1
_(t5D,o8D)
var tEI=_n('view')
_rz(z,tEI,'class',279,e,s,gg)
var eFI=_n('view')
_rz(z,eFI,'class',280,e,s,gg)
var bGI=_mz(z,'checkbox-group',['bindchange',281,'class',1,'data-event-opts',2],[],e,s,gg)
var oHI=_n('label')
_rz(z,oHI,'class',284,e,s,gg)
var xII=_mz(z,'checkbox',['checked',285,'class',1,'color',2,'value',3],[],e,s,gg)
_(oHI,xII)
var oJI=_n('text')
_rz(z,oJI,'class',289,e,s,gg)
var fKI=_oz(z,290,e,s,gg)
_(oJI,fKI)
_(oHI,oJI)
var cLI=_mz(z,'text',['catchtap',291,'class',1,'data-event-opts',2],[],e,s,gg)
var hMI=_oz(z,294,e,s,gg)
_(cLI,hMI)
_(oHI,cLI)
_(bGI,oHI)
_(eFI,bGI)
_(tEI,eFI)
var oNI=_mz(z,'button',['bindtap',295,'class',1,'data-event-opts',2,'loading',3],[],e,s,gg)
var cOI=_oz(z,299,e,s,gg)
_(oNI,cOI)
_(tEI,oNI)
var oPI=_mz(z,'button',['bindtap',300,'class',1,'data-event-opts',2],[],e,s,gg)
var lQI=_oz(z,303,e,s,gg)
_(oPI,lQI)
_(tEI,oPI)
_(t5D,tEI)
var e6D=_v()
_(t5D,e6D)
if(_oz(z,304,e,s,gg)){e6D.wxVkey=1
var aRI=_mz(z,'view',['bindtap',305,'class',1,'data-event-opts',2],[],e,s,gg)
var tSI=_mz(z,'view',['catchtap',308,'class',1,'data-event-opts',2],[],e,s,gg)
var eTI=_n('view')
_rz(z,eTI,'class',311,e,s,gg)
var bUI=_n('text')
_rz(z,bUI,'class',312,e,s,gg)
var oVI=_oz(z,313,e,s,gg)
_(bUI,oVI)
_(eTI,bUI)
var xWI=_mz(z,'text',['bindtap',314,'class',1,'data-event-opts',2],[],e,s,gg)
var oXI=_oz(z,317,e,s,gg)
_(xWI,oXI)
_(eTI,xWI)
_(tSI,eTI)
var fYI=_mz(z,'scroll-view',['class',318,'scrollY',1,'showScrollbar',2],[],e,s,gg)
var cZI=_v()
_(fYI,cZI)
if(_oz(z,321,e,s,gg)){cZI.wxVkey=1
var h1I=_n('view')
_rz(z,h1I,'class',322,e,s,gg)
var o2I=_oz(z,323,e,s,gg)
_(h1I,o2I)
_(cZI,h1I)
}
var c3I=_v()
_(fYI,c3I)
var o4I=function(a6I,l5I,t7I,gg){
var b9I=_mz(z,'view',['bindtap',327,'class',1,'data-event-opts',2,'data-index',3],[],a6I,l5I,gg)
var o0I=_oz(z,331,a6I,l5I,gg)
_(b9I,o0I)
_(t7I,b9I)
return t7I
}
c3I.wxXCkey=2
_2z(z,326,o4I,e,s,gg,c3I,'item','idx','')
cZI.wxXCkey=1
_(tSI,fYI)
_(aRI,tSI)
_(e6D,aRI)
}
var b7D=_v()
_(t5D,b7D)
if(_oz(z,332,e,s,gg)){b7D.wxVkey=1
var xAJ=_mz(z,'view',['bindtap',333,'class',1,'data-event-opts',2],[],e,s,gg)
var oBJ=_mz(z,'view',['catchtap',336,'class',1,'data-event-opts',2,'style',3],[],e,s,gg)
var fCJ=_n('view')
_rz(z,fCJ,'class',340,e,s,gg)
var cDJ=_n('text')
_rz(z,cDJ,'class',341,e,s,gg)
var hEJ=_oz(z,342,e,s,gg)
_(cDJ,hEJ)
_(fCJ,cDJ)
var oFJ=_mz(z,'text',['bindtap',343,'class',1,'data-event-opts',2],[],e,s,gg)
var cGJ=_oz(z,346,e,s,gg)
_(oFJ,cGJ)
_(fCJ,oFJ)
_(oBJ,fCJ)
var oHJ=_mz(z,'input',['adjustPosition',347,'bindblur',1,'bindfocus',2,'bindinput',3,'class',4,'data-event-opts',5,'holdKeyboard',6,'placeholder',7,'value',8],[],e,s,gg)
_(oBJ,oHJ)
var lIJ=_mz(z,'scroll-view',['class',356,'scrollY',1,'showScrollbar',2,'style',3],[],e,s,gg)
var aJJ=_v()
_(lIJ,aJJ)
if(_oz(z,360,e,s,gg)){aJJ.wxVkey=1
var tKJ=_n('view')
_rz(z,tKJ,'class',361,e,s,gg)
var eLJ=_oz(z,362,e,s,gg)
_(tKJ,eLJ)
_(aJJ,tKJ)
}
else{aJJ.wxVkey=2
var bMJ=_v()
_(aJJ,bMJ)
if(_oz(z,363,e,s,gg)){bMJ.wxVkey=1
var oNJ=_n('view')
_rz(z,oNJ,'class',364,e,s,gg)
var xOJ=_oz(z,365,e,s,gg)
_(oNJ,xOJ)
_(bMJ,oNJ)
}
else{bMJ.wxVkey=2
var oPJ=_v()
_(bMJ,oPJ)
if(_oz(z,366,e,s,gg)){oPJ.wxVkey=1
var fQJ=_n('view')
_rz(z,fQJ,'class',367,e,s,gg)
var cRJ=_oz(z,368,e,s,gg)
_(fQJ,cRJ)
_(oPJ,fQJ)
}
oPJ.wxXCkey=1
}
bMJ.wxXCkey=1
}
var hSJ=_v()
_(lIJ,hSJ)
var oTJ=function(oVJ,cUJ,lWJ,gg){
var tYJ=_mz(z,'view',['bindtap',372,'class',1,'data-event-opts',2,'data-index',3],[],oVJ,cUJ,gg)
var eZJ=_oz(z,376,oVJ,cUJ,gg)
_(tYJ,eZJ)
_(lWJ,tYJ)
return lWJ
}
hSJ.wxXCkey=2
_2z(z,371,oTJ,e,s,gg,hSJ,'item','idx','')
aJJ.wxXCkey=1
_(oBJ,lIJ)
_(xAJ,oBJ)
_(b7D,xAJ)
}
var b1J=_mz(z,'privacy-auth-popup',['bind:__l',377,'class',1,'vueId',2],[],e,s,gg)
_(t5D,b1J)
e6D.wxXCkey=1
b7D.wxXCkey=1
_(r,t5D)
return r
}
e_[x[0]]={f:m0,j:[],i:[],ti:[],ic:[]}
if(path&&e_[path]){
outerGlobal.__wxml_comp_version__=0.02
return function(env,dd,global){$gwxc=0;var root={"tag":"wx-page"};root.children=[]
;g="$gwx0_XC_3";var main=e_[path].f
if (typeof global==="undefined")global={};global.f=$gdc(f_[path],"",1);
if(typeof(outerGlobal.__webview_engine_version__)!='undefined'&&outerGlobal.__webview_engine_version__+1e-6>=0.02+1e-6&&outerGlobal.__mergeData__)
{
env=outerGlobal.__mergeData__(env,dd);
}
try{
main(env,{},root,global);
_tsd(root)
if(typeof(outerGlobal.__webview_engine_version__)=='undefined'|| outerGlobal.__webview_engine_version__+1e-6<0.01+1e-6){return _ev(root);}
}catch(err){
console.log(err)
}
;g="";
return root;
}
}
}
}(__g.a,__g.b,__g.c,__g.d,__g.e,__g.f,__g.g,__g.h,__g.i,__g.j,__g.k,__g.l,__g.m,__g.n,__g.o,__g.p,__g.q,__g.r,__g.s,__g.t,__g.u,__g.v,__g.w,__g.x,__g.y,__g.z,__g.A,__g.B,__g.C,__g.D,__g.E,__g.F,__g.G,__g.H,__g.I,__g.J,__g.K,__g.L,__g.M,__g.N,__g.O,__g.P,__g.Q,__g.R,__g.S,__g.T,__g.U,__g.V,__g.W,__g.X,__g.Y,__g.Z,__g.aa);if(__vd_version_info__.delayedGwx||false)$gwx0_XC_3();	if (__vd_version_info__.delayedGwx) __wxAppCode__['sub-pages/auth/register.wxml'] = [$gwx0_XC_3, './sub-pages/auth/register.wxml'];else __wxAppCode__['sub-pages/auth/register.wxml'] = $gwx0_XC_3( './sub-pages/auth/register.wxml' );
	
var noCss=typeof __vd_version_info__!=='undefined'&&__vd_version_info__.noCss===true;if(!noCss){__wxAppCode__['sub-pages/auth/register.wxss']=setCssToHead(["body{background:#f5f5f5;height:100%}\n.",[1],"page.",[1],"data-v-75ceecf4{background:#f5f5f5;bottom:0;box-sizing:border-box;left:0;position:fixed;right:0;top:0}\n.",[1],"label.",[1],"data-v-75ceecf4{color:#666;font-size:",[0,26],";margin-bottom:",[0,16],"}\n.",[1],"label.",[1],"required.",[1],"data-v-75ceecf4::before{color:#e53935;content:\x22*\x22;margin-right:",[0,6],"}\n.",[1],"scroll.",[1],"data-v-75ceecf4{-webkit-overflow-scrolling:touch;bottom:calc(",[0,290]," + env(safe-area-inset-bottom));box-sizing:border-box;left:0;overflow-y:auto;position:absolute;right:0;top:0}\n.",[1],"section.",[1],"data-v-75ceecf4{background:#fff;isolation:isolate;margin-bottom:",[0,16],";padding:",[0,24]," ",[0,28],";position:relative}\n.",[1],"input.",[1],"data-v-75ceecf4{box-sizing:border-box;color:#333;display:block;font-size:",[0,28],";height:auto;line-height:normal;min-height:",[0,72],";padding:",[0,18]," 0;width:100%}\n.",[1],"picker-val.",[1],"data-v-75ceecf4{-webkit-align-items:center;align-items:center;color:#333;display:-webkit-flex;display:flex;font-size:",[0,28],";min-height:",[0,72],"}\n.",[1],"placeholder.",[1],"data-v-75ceecf4{color:#999}\n.",[1],"bank-mask.",[1],"data-v-75ceecf4{-webkit-align-items:flex-end;align-items:flex-end;background:rgba(0,0,0,.35);bottom:0;display:-webkit-flex;display:flex;left:0;position:fixed;right:0;top:0;z-index:30}\n.",[1],"bank-panel.",[1],"data-v-75ceecf4{background:#fff;border-radius:",[0,20]," ",[0,20]," 0 0;box-sizing:border-box;padding:",[0,20],";transition:-webkit-transform .2s ease-out;transition:transform .2s ease-out;transition:transform .2s ease-out,-webkit-transform .2s ease-out;width:100%}\n.",[1],"bank-head.",[1],"data-v-75ceecf4{-webkit-align-items:center;align-items:center;display:-webkit-flex;display:flex;-webkit-justify-content:space-between;justify-content:space-between;margin-bottom:",[0,16],"}\n.",[1],"bank-title.",[1],"data-v-75ceecf4{color:#222;font-size:",[0,30],";font-weight:600}\n.",[1],"bank-close.",[1],"data-v-75ceecf4{color:#666;font-size:",[0,26],"}\n.",[1],"bank-search.",[1],"data-v-75ceecf4{border:",[0,1]," solid #e5e7eb;border-radius:",[0,10],";font-size:",[0,28],";height:",[0,72],";line-height:",[0,72],";margin-bottom:",[0,16],";padding:0 ",[0,20],"}\n.",[1],"bank-list.",[1],"data-v-75ceecf4{max-height:50vh}\n.",[1],"bank-item.",[1],"data-v-75ceecf4{-webkit-align-items:center;align-items:center;border-bottom:",[0,1]," solid #f0f0f0;color:#333;display:-webkit-flex;display:flex;font-size:",[0,28],";min-height:",[0,72],";padding:",[0,8]," ",[0,4],"}\n.",[1],"bank-empty.",[1],"data-v-75ceecf4{color:#999;font-size:",[0,24],";padding:",[0,24]," 0;text-align:center}\n.",[1],"upload-row.",[1],"data-v-75ceecf4{-webkit-align-items:flex-start;align-items:flex-start;display:-webkit-flex;display:flex}\n.",[1],"upload-btn.",[1],"data-v-75ceecf4{-webkit-align-items:center;align-items:center;background:#f9fbff;border:",[0,2]," dashed #d6deea;border-radius:",[0,12],";display:-webkit-flex;display:flex;height:",[0,220],";-webkit-justify-content:center;justify-content:center;width:",[0,220],"}\n.",[1],"upload-plus.",[1],"data-v-75ceecf4{color:#9aa3af;font-size:",[0,60],";line-height:1}\n.",[1],"upload-hint.",[1],"data-v-75ceecf4{color:#999;display:block;font-size:",[0,22],";margin-top:",[0,14],"}\n.",[1],"thumb-wrap.",[1],"data-v-75ceecf4{border-radius:",[0,12],";height:",[0,220],";overflow:hidden;position:relative;width:",[0,220],"}\n.",[1],"thumb.",[1],"data-v-75ceecf4{height:100%;width:100%}\n.",[1],"thumb-del.",[1],"data-v-75ceecf4{background:rgba(0,0,0,.45);bottom:0;color:#fff;font-size:",[0,22],";left:0;padding:",[0,8]," 0;position:absolute;right:0;text-align:center}\n.",[1],"foot-space.",[1],"data-v-75ceecf4{height:60vh}\n.",[1],"bottom-bar.",[1],"data-v-75ceecf4{background:#fff;border-top:",[0,1]," solid #eee;bottom:0;box-sizing:border-box;left:0;padding:",[0,12]," ",[0,24]," calc(",[0,16]," + env(safe-area-inset-bottom));position:fixed;right:0;z-index:10}\n.",[1],"privacy-wrap.",[1],"data-v-75ceecf4{margin-bottom:",[0,12],"}\n.",[1],"privacy-label.",[1],"data-v-75ceecf4{-webkit-align-items:center;align-items:center;display:-webkit-flex;display:flex;-webkit-flex-direction:row;flex-direction:row;-webkit-flex-wrap:wrap;flex-wrap:wrap}\n.",[1],"privacy-text.",[1],"data-v-75ceecf4{color:#666;font-size:",[0,24],";margin-left:",[0,8],"}\n.",[1],"privacy-link.",[1],"data-v-75ceecf4{color:#4ab83a;font-size:",[0,24],"}\n.",[1],"btn-submit.",[1],"data-v-75ceecf4{background:linear-gradient(180deg,#5dcc45,#4ab83a);border:none;border-radius:",[0,12],";color:#fff;font-size:",[0,30],";height:",[0,88],";line-height:",[0,88],";width:100%}\n.",[1],"btn-back.",[1],"data-v-75ceecf4{background:#f5f5f5;border-radius:",[0,12],";color:#666;font-size:",[0,28],";height:",[0,80],";line-height:",[0,80],";margin-top:",[0,14],";width:100%}\n.",[1],"btn-back.",[1],"data-v-75ceecf4::after,.",[1],"btn-submit.",[1],"data-v-75ceecf4::after{border:none}\n",],"Some selectors are not allowed in component wxss, including tag name selectors, ID selectors, and attribute selectors.(./sub-pages/auth/register.wxss:1:1)",{path:"./sub-pages/auth/register.wxss"});
}