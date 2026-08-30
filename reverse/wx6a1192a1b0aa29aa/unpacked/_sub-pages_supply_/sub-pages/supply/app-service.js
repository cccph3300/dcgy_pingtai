var __wxAppData=__wxAppData||{};var __wxAppCode__=__wxAppCode__||{};var global=global||{};var __WXML_GLOBAL__=__WXML_GLOBAL__||{entrys:{},defines:{},modules:{},ops:[],wxs_nf_init:undefined,total_ops:0};var Component=Component||function(){};var definePlugin=definePlugin||function(){};var requirePlugin=requirePlugin||function(){};var Behavior=Behavior||function(){};var __vd_version_info__=__vd_version_info__||{};var __GWX_GLOBAL__=__GWX_GLOBAL__||{};if(this&&this.__g===undefined)Object.defineProperty(this,"__g",{configurable:false,enumerable:false,writable:false,value:function(){function D(e,t){if(typeof t!="undefined")e.children.push(t)}function S(e){if(typeof e!="undefined")return{tag:"virtual",wxKey:e,children:[]};return{tag:"virtual",children:[]}}function v(e){return{tag:"wx-"+e,attr:{},children:[],n:[],raw:{},generics:{}}}function e(e,t){t&&e.properities.push(t)}function t(e,t,r){return typeof e[r]!="undefined"?e[r]:t[r]}function u(e){console.warn("WXMLRT_"+g+":"+e)}function r(e,t){u(t+":-1:-1:-1: Template `"+e+"` is being called recursively, will be stop.")}var s=console.warn;var n=console.log;function o(){function e(){}e.prototype={hn:function(e,t){if(typeof e=="object"){var r=0;var n=false,o=false;for(var a in e){n=n|a==="__value__";o=o|a==="__wxspec__";r++;if(r>2)break}return r==2&&n&&o&&(t||e.__wxspec__!=="m"||this.hn(e.__value__)==="h")?"h":"n"}return"n"},nh:function(e,t){return{__value__:e,__wxspec__:t?t:true}},rv:function(e){return this.hn(e,true)==="n"?e:this.rv(e.__value__)},hm:function(e){if(typeof e=="object"){var t=0;var r=false,n=false;for(var o in e){r=r|o==="__value__";n=n|o==="__wxspec__";t++;if(t>2)break}return t==2&&r&&n&&(e.__wxspec__==="m"||this.hm(e.__value__))}return false}};return new e}var A=o();function T(e){var t=e.split("\n "+" "+" "+" ");for(var r=0;r<t.length;++r){if(0==r)continue;if(")"===t[r][t[r].length-1])t[r]=t[r].replace(/\s\(.*\)$/,"");else t[r]="at anonymous function"}return t.join("\n "+" "+" "+" ")}function a(M){function m(e,t,r,n,o){var a=false;var i=e[0][1];var p,u,l,f,v,c;switch(i){case"?:":p=x(e[1],t,r,n,o,a);l=M&&A.hn(p)==="h";f=A.rv(p)?x(e[2],t,r,n,o,a):x(e[3],t,r,n,o,a);f=l&&A.hn(f)==="n"?A.nh(f,"c"):f;return f;break;case"&&":p=x(e[1],t,r,n,o,a);l=M&&A.hn(p)==="h";f=A.rv(p)?x(e[2],t,r,n,o,a):A.rv(p);f=l&&A.hn(f)==="n"?A.nh(f,"c"):f;return f;break;case"||":p=x(e[1],t,r,n,o,a);l=M&&A.hn(p)==="h";f=A.rv(p)?A.rv(p):x(e[2],t,r,n,o,a);f=l&&A.hn(f)==="n"?A.nh(f,"c"):f;return f;break;case"+":case"*":case"/":case"%":case"|":case"^":case"&":case"===":case"==":case"!=":case"!==":case">=":case"<=":case">":case"<":case"<<":case">>":p=x(e[1],t,r,n,o,a);u=x(e[2],t,r,n,o,a);l=M&&(A.hn(p)==="h"||A.hn(u)==="h");switch(i){case"+":f=A.rv(p)+A.rv(u);break;case"*":f=A.rv(p)*A.rv(u);break;case"/":f=A.rv(p)/A.rv(u);break;case"%":f=A.rv(p)%A.rv(u);break;case"|":f=A.rv(p)|A.rv(u);break;case"^":f=A.rv(p)^A.rv(u);break;case"&":f=A.rv(p)&A.rv(u);break;case"===":f=A.rv(p)===A.rv(u);break;case"==":f=A.rv(p)==A.rv(u);break;case"!=":f=A.rv(p)!=A.rv(u);break;case"!==":f=A.rv(p)!==A.rv(u);break;case">=":f=A.rv(p)>=A.rv(u);break;case"<=":f=A.rv(p)<=A.rv(u);break;case">":f=A.rv(p)>A.rv(u);break;case"<":f=A.rv(p)<A.rv(u);break;case"<<":f=A.rv(p)<<A.rv(u);break;case">>":f=A.rv(p)>>A.rv(u);break;default:break}return l?A.nh(f,"c"):f;break;case"-":p=e.length===3?x(e[1],t,r,n,o,a):0;u=e.length===3?x(e[2],t,r,n,o,a):x(e[1],t,r,n,o,a);l=M&&(A.hn(p)==="h"||A.hn(u)==="h");f=l?A.rv(p)-A.rv(u):p-u;return l?A.nh(f,"c"):f;break;case"!":p=x(e[1],t,r,n,o,a);l=M&&A.hn(p)=="h";f=!A.rv(p);return l?A.nh(f,"c"):f;case"~":p=x(e[1],t,r,n,o,a);l=M&&A.hn(p)=="h";f=~A.rv(p);return l?A.nh(f,"c"):f;default:s("unrecognized op"+i)}}function x(e,t,r,n,o,a){var i=e[0];var p=false;if(typeof a!=="undefined")o.ap=a;if(typeof i==="object"){var u=i[0];var l,f,v,c,s,y,b,d,h,_,g;switch(u){case 2:return m(e,t,r,n,o);break;case 4:return x(e[1],t,r,n,o,p);break;case 5:switch(e.length){case 2:l=x(e[1],t,r,n,o,p);return M?[l]:[A.rv(l)];return[l];break;case 1:return[];break;default:l=x(e[1],t,r,n,o,p);v=x(e[2],t,r,n,o,p);l.push(M?v:A.rv(v));return l;break}break;case 6:l=x(e[1],t,r,n,o);var w=o.ap;h=A.hn(l)==="h";f=h?A.rv(l):l;o.is_affected|=h;if(M){if(f===null||typeof f==="undefined"){return h?A.nh(undefined,"e"):undefined}v=x(e[2],t,r,n,o,p);_=A.hn(v)==="h";c=_?A.rv(v):v;o.ap=w;o.is_affected|=_;if(c===null||typeof c==="undefined"||c==="__proto__"||c==="prototype"||c==="caller"){return h||_?A.nh(undefined,"e"):undefined}y=f[c];if(typeof y==="function"&&!w)y=undefined;g=A.hn(y)==="h";o.is_affected|=g;return h||_?g?y:A.nh(y,"e"):y}else{if(f===null||typeof f==="undefined"){return undefined}v=x(e[2],t,r,n,o,p);_=A.hn(v)==="h";c=_?A.rv(v):v;o.ap=w;o.is_affected|=_;if(c===null||typeof c==="undefined"||c==="__proto__"||c==="prototype"||c==="caller"){return undefined}y=f[c];if(typeof y==="function"&&!w)y=undefined;g=A.hn(y)==="h";o.is_affected|=g;return g?A.rv(y):y}case 7:switch(e[1][0]){case 11:o.is_affected|=A.hn(n)==="h";return n;case 3:b=A.rv(r);d=A.rv(t);v=e[1][1];if(n&&n.f&&n.f.hasOwnProperty(v)){l=n.f;o.ap=true}else{l=b&&b.hasOwnProperty(v)?r:d&&d.hasOwnProperty(v)?t:undefined}if(M){if(l){h=A.hn(l)==="h";f=h?A.rv(l):l;y=f[v];g=A.hn(y)==="h";o.is_affected|=h||g;y=h&&!g?A.nh(y,"e"):y;return y}}else{if(l){h=A.hn(l)==="h";f=h?A.rv(l):l;y=f[v];g=A.hn(y)==="h";o.is_affected|=h||g;return A.rv(y)}}return undefined}break;case 8:l={};l[e[1]]=x(e[2],t,r,n,o,p);return l;break;case 9:l=x(e[1],t,r,n,o,p);v=x(e[2],t,r,n,o,p);function O(e,t,r){var n,o;h=A.hn(e)==="h";_=A.hn(t)==="h";f=A.rv(e);c=A.rv(t);for(var a in c){if(r||!f.hasOwnProperty(a)){f[a]=M?_?A.nh(c[a],"e"):c[a]:A.rv(c[a])}}return e}var s=l;var j=true;if(typeof e[1][0]==="object"&&e[1][0][0]===10){l=v;v=s;j=false}if(typeof e[1][0]==="object"&&e[1][0][0]===10){var P={};return O(O(P,l,j),v,j)}else return O(l,v,j);break;case 10:l=x(e[1],t,r,n,o,p);l=M?l:A.rv(l);return l;break;case 12:var P;l=x(e[1],t,r,n,o);if(!o.ap){return M&&A.hn(l)==="h"?A.nh(P,"f"):P}var w=o.ap;v=x(e[2],t,r,n,o,p);o.ap=w;h=A.hn(l)==="h";_=N(v);f=A.rv(l);c=A.rv(v);snap_bb=K(c,"nv_");try{P=typeof f==="function"?K(f.apply(null,snap_bb)):undefined}catch(t){t.message=t.message.replace(/nv_/g,"");t.stack=t.stack.substring(0,t.stack.indexOf("\n",t.stack.lastIndexOf("at nv_")));t.stack=t.stack.replace(/\snv_/g," ");t.stack=T(t.stack);if(n.debugInfo){t.stack+="\n "+" "+" "+" at "+n.debugInfo[0]+":"+n.debugInfo[1]+":"+n.debugInfo[2];console.error(t)}P=undefined}return M&&(_||h)?A.nh(P,"f"):P}}else{if(i===3||i===1)return e[1];else if(i===11){var l="";for(var D=1;D<e.length;D++){var S=A.rv(x(e[D],t,r,n,o,p));l+=typeof S==="undefined"?"":S}return l}}}function e(e,t,r,n,o,a){if(e[0]=="11182016"){n.debugInfo=e[2];return x(e[1],t,r,n,o,a)}else{n.debugInfo=null;return x(e,t,r,n,o,a)}}return e}var f=a(true);var c=a(false);function i(e,t,r,n,o,a,i,p){{var u={is_affected:false};var l=f(t,r,n,o,u);if(JSON.stringify(l)!=JSON.stringify(a)||u.is_affected!=p){console.warn("A. "+e+" get result "+JSON.stringify(l)+", "+u.is_affected+", but "+JSON.stringify(a)+", "+p+" is expected")}}{var u={is_affected:false};var l=c(t,r,n,o,u);if(JSON.stringify(l)!=JSON.stringify(i)||u.is_affected!=p){console.warn("B. "+e+" get result "+JSON.stringify(l)+", "+u.is_affected+", but "+JSON.stringify(i)+", "+p+" is expected")}}}function y(e,t,r,n,o,a,i,p,u){var l=A.hn(e)==="n";var f=A.rv(n);var v=f.hasOwnProperty(i);var c=f.hasOwnProperty(p);var s=f[i];var y=f[p];var b=Object.prototype.toString.call(A.rv(e));var d=b[8];if(d==="N"&&b[10]==="l")d="X";var h;if(l){if(d==="A"){var _;for(var g=0;g<e.length;g++){f[i]=e[g];f[p]=l?g:A.nh(g,"h");_=A.rv(e[g]);var w=u&&_?u==="*this"?_:A.rv(_[u]):undefined;h=S(w);D(a,h);t(r,f,h,o)}}else if(d==="O"){var g=0;var _;for(var O in e){f[i]=e[O];f[p]=l?O:A.nh(O,"h");_=A.rv(e[O]);var w=u&&_?u==="*this"?_:A.rv(_[u]):undefined;h=S(w);D(a,h);t(r,f,h,o);g++}}else if(d==="S"){for(var g=0;g<e.length;g++){f[i]=e[g];f[p]=l?g:A.nh(g,"h");h=S(e[g]+g);D(a,h);t(r,f,h,o)}}else if(d==="N"){for(var g=0;g<e;g++){f[i]=g;f[p]=l?g:A.nh(g,"h");h=S(g);D(a,h);t(r,f,h,o)}}else{}}else{var j=A.rv(e);var _,P;if(d==="A"){for(var g=0;g<j.length;g++){P=j[g];P=A.hn(P)==="n"?A.nh(P,"h"):P;_=A.rv(P);f[i]=P;f[p]=l?g:A.nh(g,"h");var w=u&&_?u==="*this"?_:A.rv(_[u]):undefined;h=S(w);D(a,h);t(r,f,h,o)}}else if(d==="O"){var g=0;for(var O in j){P=j[O];P=A.hn(P)==="n"?A.nh(P,"h"):P;_=A.rv(P);f[i]=P;f[p]=l?O:A.nh(O,"h");var w=u&&_?u==="*this"?_:A.rv(_[u]):undefined;h=S(w);D(a,h);t(r,f,h,o);g++}}else if(d==="S"){for(var g=0;g<j.length;g++){P=A.nh(j[g],"h");f[i]=P;f[p]=l?g:A.nh(g,"h");h=S(e[g]+g);D(a,h);t(r,f,h,o)}}else if(d==="N"){for(var g=0;g<j;g++){P=A.nh(g,"h");f[i]=P;f[p]=l?g:A.nh(g,"h");h=S(g);D(a,h);t(r,f,h,o)}}else{}}if(v){f[i]=s}else{delete f[i]}if(c){f[p]=y}else{delete f[p]}}function N(e){if(A.hn(e)=="h")return true;if(typeof e!=="object")return false;for(var t in e){if(e.hasOwnProperty(t)){if(N(e[t]))return true}}return false}function b(e,t,r,n,o){var a=false;var i=K(n,"",2);if(o.ap&&i&&i.constructor===Function){t="$wxs:"+t;e.attr["$gdc"]=K}if(o.is_affected||N(n)){e.n.push(t);e.raw[t]=n}e.attr[t]=i}function d(e,t,r,n,o,a){a.opindex=r;var i={},p;var u=c(z[r],n,o,a,i);b(e,t,r,u,i)}function h(e,t,r,n,o,a,i){i.opindex=n;var p={},u;var l=c(e[n],o,a,i,p);b(t,r,n,l,p)}function p(e,t,r,n){n.opindex=e;var o={};var a=c(z[e],t,r,n,o);return a&&a.constructor===Function?undefined:a}function l(e,t,r,n,o){o.opindex=t;var a={};var i=c(e[t],r,n,o,a);return i&&i.constructor===Function?undefined:i}function _(e,t,r,n,o){var o=o||{};n.opindex=e;return f(z[e],t,r,n,o)}function w(e,t,r,n,o,a){var a=a||{};o.opindex=t;return f(e[t],r,n,o,a)}function O(e,t,r,n,o,a,i,p,u){var l={};var f=_(e,r,n,o);y(f,t,r,n,o,a,i,p,u)}function j(e,t,r,n,o,a,i,p,u,l){var f={};var v=w(e,t,n,o,a);y(v,r,n,o,a,i,p,u,l)}function P(e,t,r,n,o,a){var i=v(e);var p=0;for(var u=0;u<t.length;u+=2){if(p+t[u+1]<0){i.attr[t[u]]=true}else{d(i,t[u],p+t[u+1],n,o,a);if(p===0)p=t[u+1]}}for(var u=0;u<r.length;u+=2){if(p+r[u+1]<0){i.generics[r[u]]=""}else{var l=c(z[p+r[u+1]],n,o,a);if(l!="")l="wx-"+l;i.generics[r[u]]=l;if(p===0)p=r[u+1]}}return i}function M(e,t,r,n,o,a,i){var p=v(t);var u=0;for(var l=0;l<r.length;l+=2){if(u+r[l+1]<0){p.attr[r[l]]=true}else{h(e,p,r[l],u+r[l+1],o,a,i);if(u===0)u=r[l+1]}}for(var l=0;l<n.length;l+=2){if(u+n[l+1]<0){p.generics[n[l]]=""}else{var f=c(e[u+n[l+1]],o,a,i);if(f!="")f="wx-"+f;p.generics[n[l]]=f;if(u===0)u=n[l+1]}}return p}var m=function(){if(typeof __WXML_GLOBAL__==="undefined"||undefined===__WXML_GLOBAL__.wxs_nf_init){x();C();k();U();I();L();E();R();F()}if(typeof __WXML_GLOBAL__!=="undefined")__WXML_GLOBAL__.wxs_nf_init=true};var x=function(){Object.defineProperty(Object.prototype,"nv_constructor",{writable:true,value:"Object"});Object.defineProperty(Object.prototype,"nv_toString",{writable:true,value:function(){return"[object Object]"}})};var C=function(){Object.defineProperty(Function.prototype,"nv_constructor",{writable:true,value:"Function"});Object.defineProperty(Function.prototype,"nv_length",{get:function(){return this.length},set:function(){}});Object.defineProperty(Function.prototype,"nv_toString",{writable:true,value:function(){return"[function Function]"}})};var k=function(){Object.defineProperty(Array.prototype,"nv_toString",{writable:true,value:function(){return this.nv_join()}});Object.defineProperty(Array.prototype,"nv_join",{writable:true,value:function(e){e=undefined==e?",":e;var t="";for(var r=0;r<this.length;++r){if(0!=r)t+=e;if(null==this[r]||undefined==this[r])t+="";else if(typeof this[r]=="function")t+=this[r].nv_toString();else if(typeof this[r]=="object"&&this[r].nv_constructor==="Array")t+=this[r].nv_join();else t+=this[r].toString()}return t}});Object.defineProperty(Array.prototype,"nv_constructor",{writable:true,value:"Array"});Object.defineProperty(Array.prototype,"nv_concat",{writable:true,value:Array.prototype.concat});Object.defineProperty(Array.prototype,"nv_pop",{writable:true,value:Array.prototype.pop});Object.defineProperty(Array.prototype,"nv_push",{writable:true,value:Array.prototype.push});Object.defineProperty(Array.prototype,"nv_reverse",{writable:true,value:Array.prototype.reverse});Object.defineProperty(Array.prototype,"nv_shift",{writable:true,value:Array.prototype.shift});Object.defineProperty(Array.prototype,"nv_slice",{writable:true,value:Array.prototype.slice});Object.defineProperty(Array.prototype,"nv_sort",{writable:true,value:Array.prototype.sort});Object.defineProperty(Array.prototype,"nv_splice",{writable:true,value:Array.prototype.splice});Object.defineProperty(Array.prototype,"nv_unshift",{writable:true,value:Array.prototype.unshift});Object.defineProperty(Array.prototype,"nv_indexOf",{writable:true,value:Array.prototype.indexOf});Object.defineProperty(Array.prototype,"nv_lastIndexOf",{writable:true,value:Array.prototype.lastIndexOf});Object.defineProperty(Array.prototype,"nv_every",{writable:true,value:Array.prototype.every});Object.defineProperty(Array.prototype,"nv_some",{writable:true,value:Array.prototype.some});Object.defineProperty(Array.prototype,"nv_forEach",{writable:true,value:Array.prototype.forEach});Object.defineProperty(Array.prototype,"nv_map",{writable:true,value:Array.prototype.map});Object.defineProperty(Array.prototype,"nv_filter",{writable:true,value:Array.prototype.filter});Object.defineProperty(Array.prototype,"nv_reduce",{writable:true,value:Array.prototype.reduce});Object.defineProperty(Array.prototype,"nv_reduceRight",{writable:true,value:Array.prototype.reduceRight});Object.defineProperty(Array.prototype,"nv_length",{get:function(){return this.length},set:function(e){this.length=e}})};var U=function(){Object.defineProperty(String.prototype,"nv_constructor",{writable:true,value:"String"});Object.defineProperty(String.prototype,"nv_toString",{writable:true,value:String.prototype.toString});Object.defineProperty(String.prototype,"nv_valueOf",{writable:true,value:String.prototype.valueOf});Object.defineProperty(String.prototype,"nv_charAt",{writable:true,value:String.prototype.charAt});Object.defineProperty(String.prototype,"nv_charCodeAt",{writable:true,value:String.prototype.charCodeAt});Object.defineProperty(String.prototype,"nv_concat",{writable:true,value:String.prototype.concat});Object.defineProperty(String.prototype,"nv_indexOf",{writable:true,value:String.prototype.indexOf});Object.defineProperty(String.prototype,"nv_lastIndexOf",{writable:true,value:String.prototype.lastIndexOf});Object.defineProperty(String.prototype,"nv_localeCompare",{writable:true,value:String.prototype.localeCompare});Object.defineProperty(String.prototype,"nv_match",{writable:true,value:String.prototype.match});Object.defineProperty(String.prototype,"nv_replace",{writable:true,value:String.prototype.replace});Object.defineProperty(String.prototype,"nv_search",{writable:true,value:String.prototype.search});Object.defineProperty(String.prototype,"nv_slice",{writable:true,value:String.prototype.slice});Object.defineProperty(String.prototype,"nv_split",{writable:true,value:String.prototype.split});Object.defineProperty(String.prototype,"nv_substring",{writable:true,value:String.prototype.substring});Object.defineProperty(String.prototype,"nv_toLowerCase",{writable:true,value:String.prototype.toLowerCase});Object.defineProperty(String.prototype,"nv_toLocaleLowerCase",{writable:true,value:String.prototype.toLocaleLowerCase});Object.defineProperty(String.prototype,"nv_toUpperCase",{writable:true,value:String.prototype.toUpperCase});Object.defineProperty(String.prototype,"nv_toLocaleUpperCase",{writable:true,value:String.prototype.toLocaleUpperCase});Object.defineProperty(String.prototype,"nv_trim",{writable:true,value:String.prototype.trim});Object.defineProperty(String.prototype,"nv_length",{get:function(){return this.length},set:function(e){this.length=e}})};var I=function(){Object.defineProperty(Boolean.prototype,"nv_constructor",{writable:true,value:"Boolean"});Object.defineProperty(Boolean.prototype,"nv_toString",{writable:true,value:Boolean.prototype.toString});Object.defineProperty(Boolean.prototype,"nv_valueOf",{writable:true,value:Boolean.prototype.valueOf})};var L=function(){Object.defineProperty(Number,"nv_MAX_VALUE",{writable:false,value:Number.MAX_VALUE});Object.defineProperty(Number,"nv_MIN_VALUE",{writable:false,value:Number.MIN_VALUE});Object.defineProperty(Number,"nv_NEGATIVE_INFINITY",{writable:false,value:Number.NEGATIVE_INFINITY});Object.defineProperty(Number,"nv_POSITIVE_INFINITY",{writable:false,value:Number.POSITIVE_INFINITY});Object.defineProperty(Number.prototype,"nv_constructor",{writable:true,value:"Number"});Object.defineProperty(Number.prototype,"nv_toString",{writable:true,value:Number.prototype.toString});Object.defineProperty(Number.prototype,"nv_toLocaleString",{writable:true,value:Number.prototype.toLocaleString});Object.defineProperty(Number.prototype,"nv_valueOf",{writable:true,value:Number.prototype.valueOf});Object.defineProperty(Number.prototype,"nv_toFixed",{writable:true,value:Number.prototype.toFixed});Object.defineProperty(Number.prototype,"nv_toExponential",{writable:true,value:Number.prototype.toExponential});Object.defineProperty(Number.prototype,"nv_toPrecision",{writable:true,value:Number.prototype.toPrecision})};var E=function(){Object.defineProperty(Math,"nv_E",{writable:false,value:Math.E});Object.defineProperty(Math,"nv_LN10",{writable:false,value:Math.LN10});Object.defineProperty(Math,"nv_LN2",{writable:false,value:Math.LN2});Object.defineProperty(Math,"nv_LOG2E",{writable:false,value:Math.LOG2E});Object.defineProperty(Math,"nv_LOG10E",{writable:false,value:Math.LOG10E});Object.defineProperty(Math,"nv_PI",{writable:false,value:Math.PI});Object.defineProperty(Math,"nv_SQRT1_2",{writable:false,value:Math.SQRT1_2});Object.defineProperty(Math,"nv_SQRT2",{writable:false,value:Math.SQRT2});Object.defineProperty(Math,"nv_abs",{writable:false,value:Math.abs});Object.defineProperty(Math,"nv_acos",{writable:false,value:Math.acos});Object.defineProperty(Math,"nv_asin",{writable:false,value:Math.asin});Object.defineProperty(Math,"nv_atan",{writable:false,value:Math.atan});Object.defineProperty(Math,"nv_atan2",{writable:false,value:Math.atan2});Object.defineProperty(Math,"nv_ceil",{writable:false,value:Math.ceil});Object.defineProperty(Math,"nv_cos",{writable:false,value:Math.cos});Object.defineProperty(Math,"nv_exp",{writable:false,value:Math.exp});Object.defineProperty(Math,"nv_floor",{writable:false,value:Math.floor});Object.defineProperty(Math,"nv_log",{writable:false,value:Math.log});Object.defineProperty(Math,"nv_max",{writable:false,value:Math.max});Object.defineProperty(Math,"nv_min",{writable:false,value:Math.min});Object.defineProperty(Math,"nv_pow",{writable:false,value:Math.pow});Object.defineProperty(Math,"nv_random",{writable:false,value:Math.random});Object.defineProperty(Math,"nv_round",{writable:false,value:Math.round});Object.defineProperty(Math,"nv_sin",{writable:false,value:Math.sin});Object.defineProperty(Math,"nv_sqrt",{writable:false,value:Math.sqrt});Object.defineProperty(Math,"nv_tan",{writable:false,value:Math.tan})};var R=function(){Object.defineProperty(Date.prototype,"nv_constructor",{writable:true,value:"Date"});Object.defineProperty(Date,"nv_parse",{writable:true,value:Date.parse});Object.defineProperty(Date,"nv_UTC",{writable:true,value:Date.UTC});Object.defineProperty(Date,"nv_now",{writable:true,value:Date.now});Object.defineProperty(Date.prototype,"nv_toString",{writable:true,value:Date.prototype.toString});Object.defineProperty(Date.prototype,"nv_toDateString",{writable:true,value:Date.prototype.toDateString});Object.defineProperty(Date.prototype,"nv_toTimeString",{writable:true,value:Date.prototype.toTimeString});Object.defineProperty(Date.prototype,"nv_toLocaleString",{writable:true,value:Date.prototype.toLocaleString});Object.defineProperty(Date.prototype,"nv_toLocaleDateString",{writable:true,value:Date.prototype.toLocaleDateString});Object.defineProperty(Date.prototype,"nv_toLocaleTimeString",{writable:true,value:Date.prototype.toLocaleTimeString});Object.defineProperty(Date.prototype,"nv_valueOf",{writable:true,value:Date.prototype.valueOf});Object.defineProperty(Date.prototype,"nv_getTime",{writable:true,value:Date.prototype.getTime});Object.defineProperty(Date.prototype,"nv_getFullYear",{writable:true,value:Date.prototype.getFullYear});Object.defineProperty(Date.prototype,"nv_getUTCFullYear",{writable:true,value:Date.prototype.getUTCFullYear});Object.defineProperty(Date.prototype,"nv_getMonth",{writable:true,value:Date.prototype.getMonth});Object.defineProperty(Date.prototype,"nv_getUTCMonth",{writable:true,value:Date.prototype.getUTCMonth});Object.defineProperty(Date.prototype,"nv_getDate",{writable:true,value:Date.prototype.getDate});Object.defineProperty(Date.prototype,"nv_getUTCDate",{writable:true,value:Date.prototype.getUTCDate});Object.defineProperty(Date.prototype,"nv_getDay",{writable:true,value:Date.prototype.getDay});Object.defineProperty(Date.prototype,"nv_getUTCDay",{writable:true,value:Date.prototype.getUTCDay});Object.defineProperty(Date.prototype,"nv_getHours",{writable:true,value:Date.prototype.getHours});Object.defineProperty(Date.prototype,"nv_getUTCHours",{writable:true,value:Date.prototype.getUTCHours});Object.defineProperty(Date.prototype,"nv_getMinutes",{writable:true,value:Date.prototype.getMinutes});Object.defineProperty(Date.prototype,"nv_getUTCMinutes",{writable:true,value:Date.prototype.getUTCMinutes});Object.defineProperty(Date.prototype,"nv_getSeconds",{writable:true,value:Date.prototype.getSeconds});Object.defineProperty(Date.prototype,"nv_getUTCSeconds",{writable:true,value:Date.prototype.getUTCSeconds});Object.defineProperty(Date.prototype,"nv_getMilliseconds",{writable:true,value:Date.prototype.getMilliseconds});Object.defineProperty(Date.prototype,"nv_getUTCMilliseconds",{writable:true,value:Date.prototype.getUTCMilliseconds});Object.defineProperty(Date.prototype,"nv_getTimezoneOffset",{writable:true,value:Date.prototype.getTimezoneOffset});Object.defineProperty(Date.prototype,"nv_setTime",{writable:true,value:Date.prototype.setTime});Object.defineProperty(Date.prototype,"nv_setMilliseconds",{writable:true,value:Date.prototype.setMilliseconds});Object.defineProperty(Date.prototype,"nv_setUTCMilliseconds",{writable:true,value:Date.prototype.setUTCMilliseconds});Object.defineProperty(Date.prototype,"nv_setSeconds",{writable:true,value:Date.prototype.setSeconds});Object.defineProperty(Date.prototype,"nv_setUTCSeconds",{writable:true,value:Date.prototype.setUTCSeconds});Object.defineProperty(Date.prototype,"nv_setMinutes",{writable:true,value:Date.prototype.setMinutes});Object.defineProperty(Date.prototype,"nv_setUTCMinutes",{writable:true,value:Date.prototype.setUTCMinutes});Object.defineProperty(Date.prototype,"nv_setHours",{writable:true,value:Date.prototype.setHours});Object.defineProperty(Date.prototype,"nv_setUTCHours",{writable:true,value:Date.prototype.setUTCHours});Object.defineProperty(Date.prototype,"nv_setDate",{writable:true,value:Date.prototype.setDate});Object.defineProperty(Date.prototype,"nv_setUTCDate",{writable:true,value:Date.prototype.setUTCDate});Object.defineProperty(Date.prototype,"nv_setMonth",{writable:true,value:Date.prototype.setMonth});Object.defineProperty(Date.prototype,"nv_setUTCMonth",{writable:true,value:Date.prototype.setUTCMonth});Object.defineProperty(Date.prototype,"nv_setFullYear",{writable:true,value:Date.prototype.setFullYear});Object.defineProperty(Date.prototype,"nv_setUTCFullYear",{writable:true,value:Date.prototype.setUTCFullYear});Object.defineProperty(Date.prototype,"nv_toUTCString",{writable:true,value:Date.prototype.toUTCString});Object.defineProperty(Date.prototype,"nv_toISOString",{writable:true,value:Date.prototype.toISOString});Object.defineProperty(Date.prototype,"nv_toJSON",{writable:true,value:Date.prototype.toJSON})};var F=function(){Object.defineProperty(RegExp.prototype,"nv_constructor",{writable:true,value:"RegExp"});Object.defineProperty(RegExp.prototype,"nv_exec",{writable:true,value:RegExp.prototype.exec});Object.defineProperty(RegExp.prototype,"nv_test",{writable:true,value:RegExp.prototype.test});Object.defineProperty(RegExp.prototype,"nv_toString",{writable:true,value:RegExp.prototype.toString});Object.defineProperty(RegExp.prototype,"nv_source",{get:function(){return this.source},set:function(){}});Object.defineProperty(RegExp.prototype,"nv_global",{get:function(){return this.global},set:function(){}});Object.defineProperty(RegExp.prototype,"nv_ignoreCase",{get:function(){return this.ignoreCase},set:function(){}});Object.defineProperty(RegExp.prototype,"nv_multiline",{get:function(){return this.multiline},set:function(){}});Object.defineProperty(RegExp.prototype,"nv_lastIndex",{get:function(){return this.lastIndex},set:function(e){this.lastIndex=e}})};m();var J=function(){var e=Array.prototype.slice.call(arguments);e.unshift(Date);return new(Function.prototype.bind.apply(Date,e))};var B=function(){var e=Array.prototype.slice.call(arguments);e.unshift(RegExp);return new(Function.prototype.bind.apply(RegExp,e))};var Y={};Y.nv_log=function(){var e="WXSRT:";for(var t=0;t<arguments.length;++t)e+=arguments[t]+" ";console.log(e)};var G=parseInt,X=parseFloat,H=isNaN,V=isFinite,$=decodeURI,W=decodeURIComponent,Q=encodeURI,q=encodeURIComponent;function K(e,t,r){e=A.rv(e);if(e===null||e===undefined)return e;if(typeof e==="string"||typeof e==="boolean"||typeof e==="number")return e;if(e.constructor===Object){var n={};for(var o in e)if(Object.prototype.hasOwnProperty.call(e,o))if(undefined===t)n[o.substring(3)]=K(e[o],t,r);else n[t+o]=K(e[o],t,r);return n}if(e.constructor===Array){var n=[];for(var a=0;a<e.length;a++)n.push(K(e[a],t,r));return n}if(e.constructor===Date){var n=new Date;n.setTime(e.getTime());return n}if(e.constructor===RegExp){var i="";if(e.global)i+="g";if(e.ignoreCase)i+="i";if(e.multiline)i+="m";return new RegExp(e.source,i)}if(r&&typeof e==="function"){if(r==1)return K(e(),undefined,2);if(r==2)return e}return null}var Z={};Z.nv_stringify=function(e){JSON.stringify(e);return JSON.stringify(K(e))};Z.nv_parse=function(e){if(e===undefined)return undefined;var t=JSON.parse(e);return K(t,"nv_")};function ee(e,t,r,n){e.extraAttr={t_action:t,t_rawid:r};if(typeof n!="undefined")e.extraAttr.t_cid=n}function te(){if(typeof __globalThis.__webview_engine_version__=="undefined")return 0;return __globalThis.__webview_engine_version__}function re(e,t,r,n,o,a){var i=ne(t,r,n);if(i)e.push(i);else{e.push("");u(n+":import:"+o+":"+a+": Path `"+t+"` not found from `"+n+"`.")}}function ne(e,t,r){if(e[0]!="/"){var n=r.split("/");n.pop();var o=e.split("/");for(var a=0;a<o.length;a++){if(o[a]=="..")n.pop();else if(!o[a]||o[a]==".")continue;else n.push(o[a])}e=n.join("/")}if(r[0]=="."&&e[0]=="/")e="."+e;if(t[e])return e;if(t[e+".wxml"])return e+".wxml"}function oe(e,t,r,n){if(!t)return;if(n[e][t])return n[e][t];for(var o=r[e].i.length-1;o>=0;o--){if(r[e].i[o]&&n[r[e].i[o]][t])return n[r[e].i[o]][t]}for(var o=r[e].ti.length-1;o>=0;o--){var a=ne(r[e].ti[o],r,e);if(a&&n[a][t])return n[a][t]}var i=ae(r,e);for(var o=0;o<i.length;o++){if(i[o]&&n[i[o]][t])return n[i[o]][t]}for(var p=r[e].j.length-1;p>=0;p--)if(r[e].j[p]){for(var a=r[r[e].j[p]].ti.length-1;a>=0;a--){var u=ne(r[r[e].j[p]].ti[a],r,e);if(u&&n[u][t]){return n[u][t]}}}}function ae(e,t){if(!t)return[];if($gaic[t]){return $gaic[t]}var r=[],n=[],o=0,a=0,i={},p={};n.push(t);p[t]=true;a++;while(o<a){var u=n[o++];for(var l=0;l<e[u].ic.length;l++){var f=e[u].ic[l];var v=ne(f,e,u);if(v&&!p[v]){p[v]=true;n.push(v);a++}}for(var l=0;u!=t&&l<e[u].ti.length;l++){var c=e[u].ti[l];var s=ne(c,e,u);if(s&&!i[s]){i[s]=true;r.push(s)}}}$gaic[t]=r;return r}var ie={};function pe(e,t,r,n,o,a,i){var p=ne(e,t,r);t[r].j.push(p);if(p){if(ie[p]){u("-1:include:-1:-1: `"+e+"` is being included in a loop, will be stop.");return}ie[p]=true;try{t[p].f(n,o,a,i)}catch(n){}ie[p]=false}else{u(r+":include:-1:-1: Included path `"+e+"` not found from `"+r+"`.")}}function ue(e,t,r,n){u(t+":template:"+r+":"+n+": Template `"+e+"` not found.")}function le(e){var t=false;delete e.properities;delete e.n;if(e.children){do{t=false;var r=[];for(var n=0;n<e.children.length;n++){var o=e.children[n];if(o.tag=="virtual"){t=true;for(var a=0;o.children&&a<o.children.length;a++){r.push(o.children[a])}}else{r.push(o)}}e.children=r}while(t);for(var n=0;n<e.children.length;n++){le(e.children[n])}}return e}function fe(e){if(e.tag=="wx-wx-scope"){e.tag="virtual";e.wxCkey="11";e["wxScopeData"]=e.attr["wx:scope-data"];delete e.n;delete e.raw;delete e.generics;delete e.attr}for(var t=0;e.children&&t<e.children.length;t++){fe(e.children[t])}return e}return{a:D,b:S,c:v,d:e,e:t,f:u,g:r,h:s,i:n,j:o,k:A,l:T,m:a,n:f,o:c,p:i,q:y,r:N,s:b,t:d,u:h,v:p,w:l,x:_,y:w,z:O,A:j,B:P,C:M,D:J,E:B,F:Y,G:G,H:X,I:H,J:V,K:$,L:W,M:Q,N:q,O:K,P:Z,Q:ee,R:te,S:re,T:ne,U:oe,V:ae,W:ie,X:pe,Y:ue,Z:le,aa:fe}}()});Object.freeze(__g);g="";	__wxAppCode__['sub-pages/supply/delivery-list.json'] = {"navigationBarTitleText":"待送货列表","navigationBarBackgroundColor":"#FFFFFF","navigationBarTextStyle":"black","navigationStyle":"default","usingComponents":{"uni-icons":"/uni_modules/uni-icons/components/uni-icons/uni-icons","uni-datetime-picker":"/uni_modules/uni-datetime-picker/components/uni-datetime-picker/uni-datetime-picker","empty-state":"/components/empty-state","privacy-auth-popup":"/components/privacy-auth-popup"}};
		__wxAppCode__['sub-pages/supply/goods-reapply-upload.json'] = {"navigationBarTitleText":"申请上架","navigationBarBackgroundColor":"#FFFFFF","navigationBarTextStyle":"black","usingComponents":{"privacy-auth-popup":"/components/privacy-auth-popup"}};
		__wxAppCode__['sub-pages/supply/goods-search.json'] = {"navigationBarTitleText":"商品搜索","navigationBarBackgroundColor":"#FFFFFF","navigationBarTextStyle":"black","usingComponents":{"uni-icons":"/uni_modules/uni-icons/components/uni-icons/uni-icons","empty-state":"/components/empty-state","privacy-auth-popup":"/components/privacy-auth-popup"}};
		__wxAppCode__['sub-pages/supply/goods.json'] = {"navigationBarTitleText":"供货商品","navigationBarBackgroundColor":"#FFFFFF","navigationBarTextStyle":"black","usingComponents":{"uni-icons":"/uni_modules/uni-icons/components/uni-icons/uni-icons","safe-video":"/components/safe-video/safe-video","uni-popup":"/uni_modules/uni-popup/components/uni-popup/uni-popup","empty-state":"/components/empty-state","privacy-auth-popup":"/components/privacy-auth-popup"}};
		__wxAppCode__['sub-pages/supply/index.json'] = {"navigationBarTitleText":"我要供货","navigationBarBackgroundColor":"#FFFFFF","navigationBarTextStyle":"black","usingComponents":{"uni-icons":"/uni_modules/uni-icons/components/uni-icons/uni-icons","uni-popup":"/uni_modules/uni-popup/components/uni-popup/uni-popup","empty-state":"/components/empty-state","privacy-auth-popup":"/components/privacy-auth-popup"}};
		__wxAppCode__['sub-pages/supply/no-delivery.json'] = {"navigationBarTitleText":"暂不送货列表","navigationBarBackgroundColor":"#FFFFFF","navigationBarTextStyle":"black","navigationStyle":"custom","usingComponents":{"uni-icons":"/uni_modules/uni-icons/components/uni-icons/uni-icons","uni-datetime-picker":"/uni_modules/uni-datetime-picker/components/uni-datetime-picker/uni-datetime-picker","empty-state":"/components/empty-state","privacy-auth-popup":"/components/privacy-auth-popup"}};
		__wxAppCode__['sub-pages/supply/supplier-goods-reapply.json'] = {"navigationBarTitleText":"申请上架","navigationBarBackgroundColor":"#FFFFFF","navigationBarTextStyle":"black","usingComponents":{"privacy-auth-popup":"/components/privacy-auth-popup"}};
		__wxAppCode__['sub-pages/supply/supplier-goods-upload.json'] = {"navigationBarTitleText":"上传供应商商品","navigationBarBackgroundColor":"#FFFFFF","navigationBarTextStyle":"black","disableScroll":true,"usingComponents":{"privacy-auth-popup":"/components/privacy-auth-popup"}};
		__wxAppCode__['sub-pages/supply/supplier-order-detail.json'] = {"navigationBarTitleText":"送货单详情","navigationBarBackgroundColor":"#FFFFFF","navigationBarTextStyle":"black","navigationStyle":"default","usingComponents":{"uni-popup":"/components/uni-popup/uni-popup","empty-state":"/components/empty-state","privacy-auth-popup":"/components/privacy-auth-popup"}};
		__wxAppCode__['sub-pages/supply/supplier-order-print-label.json'] = {"navigationBarTitleText":"打印标签","navigationBarBackgroundColor":"#FFFFFF","navigationBarTextStyle":"black","navigationStyle":"default","usingComponents":{"empty-state":"/components/empty-state","privacy-auth-popup":"/components/privacy-auth-popup"}};
		__wxAppCode__['sub-pages/supply/supplier-order.json'] = {"navigationBarTitleText":"送货单","navigationBarBackgroundColor":"#FFFFFF","navigationBarTextStyle":"black","navigationStyle":"default","usingComponents":{"uni-icons":"/uni_modules/uni-icons/components/uni-icons/uni-icons","uni-datetime-picker":"/uni_modules/uni-datetime-picker/components/uni-datetime-picker/uni-datetime-picker","uni-popup":"/components/uni-popup/uni-popup","empty-state":"/components/empty-state","privacy-auth-popup":"/components/privacy-auth-popup"}};
	;var __WXML_DEP__=__WXML_DEP__||{};;var __LAZY_CODE_LOADING_CHUNK_MAP__=__LAZY_CODE_LOADING_CHUNK_MAP__||{};[['sub-pages/supply/chunk_0',['sub-pages/supply/delivery-list',]],['sub-pages/supply/chunk_1',['sub-pages/supply/goods',]],['sub-pages/supply/chunk_10',['sub-pages/supply/supplier-order-print-label',]],['sub-pages/supply/chunk_2',['sub-pages/supply/goods-reapply-upload',]],['sub-pages/supply/chunk_3',['sub-pages/supply/goods-search',]],['sub-pages/supply/chunk_4',['sub-pages/supply/index',]],['sub-pages/supply/chunk_5',['sub-pages/supply/no-delivery',]],['sub-pages/supply/chunk_6',['sub-pages/supply/supplier-goods-reapply',]],['sub-pages/supply/chunk_7',['sub-pages/supply/supplier-goods-upload',]],['sub-pages/supply/chunk_8',['sub-pages/supply/supplier-order',]],['sub-pages/supply/chunk_9',['sub-pages/supply/supplier-order-detail',]],].forEach(function(a){(a[1]||[]).forEach(function(b){__LAZY_CODE_LOADING_CHUNK_MAP__[b]=__LAZY_CODE_LOADING_CHUNK_MAP__[b]||a[0]||''});});/*v0.5vv_20211229_syb_scopedata*/global.__wcc_version__='v0.5vv_20211229_syb_scopedata';global.__wcc_version_info__={"customComponents":true,"fixZeroRpx":true,"propValueDeepCopy":false};
var $gwxc
var $gaic={}
$gwx3=function(_,_v,_n,_p,_s,_wp,_wl,$gwn,$gwl,$gwh,wh,$gstack,$gwrt,gra,grb,TestTest,wfor,_ca,_da,_r,_rz,_o,_oz,_1,_1z,_2,_2z,_m,_mz,nv_getDate,nv_getRegExp,nv_console,nv_parseInt,nv_parseFloat,nv_isNaN,nv_isFinite,nv_decodeURI,nv_decodeURIComponent,nv_encodeURI,nv_encodeURIComponent,$gdc,nv_JSON,_af,_gv,_ai,_grp,_gd,_gapi,$ixc,_ic,_w,_ev,_tsd){return function(path,global){
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
var z=__WXML_GLOBAL__.ops_set.$gwx3 || [];
__WXML_GLOBAL__.ops_set.$gwx3=z;
__WXML_GLOBAL__.ops_init.$gwx3=true;
var nv_require=function(){var nnm={};var nom={};return function(n){if(n[0]==='p'&&n[1]==='_'&&f_[n.slice(2)])return f_[n.slice(2)];return function(){if(!nnm[n]) return undefined;try{if(!nom[n])nom[n]=nnm[n]();return nom[n];}catch(e){e.message=e.message.replace(/nv_/g,'');var tmp = e.stack.substring(0,e.stack.lastIndexOf(n));e.stack = tmp.substring(0,tmp.lastIndexOf('\n'));e.stack = e.stack.replace(/\snv_/g,' ');e.stack = $gstack(e.stack);e.stack += '\n    at ' + n.substring(2);console.error(e);}
}}}()
var x=[];if(path&&e_[path]){
return function(env,dd,global){$gwxc=0;var root={"tag":"wx-page"};root.children=[]
;g="$gwx3";var main=e_[path].f
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
}(__g.a,__g.b,__g.c,__g.d,__g.e,__g.f,__g.g,__g.h,__g.i,__g.j,__g.k,__g.l,__g.m,__g.n,__g.o,__g.p,__g.q,__g.r,__g.s,__g.t,__g.u,__g.v,__g.w,__g.x,__g.y,__g.z,__g.A,__g.B,__g.C,__g.D,__g.E,__g.F,__g.G,__g.H,__g.I,__g.J,__g.K,__g.L,__g.M,__g.N,__g.O,__g.P,__g.Q,__g.R,__g.S,__g.T,__g.U,__g.V,__g.W,__g.X,__g.Y,__g.Z,__g.aa);if(__vd_version_info__.delayedGwx||true)$gwx3();;__wxRoute = undefined;__wxRouteBegin = undefined;__wxAppCurrentFile__=undefined;define("sub-pages/supply/common/vendor.js",function(require,module,exports,window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){
(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["sub-pages/supply/common/vendor"],{

/***/ 271:
/*!*****************************************************!*\
  !*** E:/project/yhlc-v1.0/agent-uniapp/api/dict.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ 4);
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.dictItemLabel = dictItemLabel;
exports.dictItemValue = dictItemValue;
exports.getDictDataByType = getDictDataByType;
exports.getProductLevelList = getProductLevelList;
exports.normalizeDictList = normalizeDictList;
var _typeof2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/typeof */ 13));
/**
 * 数据字典（App 端）
 * GET /system/app/dict/data/type/{dictType}
 */

/**
 * @param {Vue} vm
 * @param {string} dictType 字典类型，如 product_level_list
 * @param {object} [params] 额外 query
 */
function getDictDataByType(vm, dictType) {
  var params = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
  var token = vm.$store && vm.$store.state ? vm.$store.state.token : '';
  var type = encodeURIComponent(String(dictType || '').trim());
  return vm.request('get', "system/app/dict/data/type/".concat(type), token, params);
}

/** 品级字典 product_level_list */
function getProductLevelList(vm) {
  var params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  return getDictDataByType(vm, 'product_level_list', params);
}

/**
 * 统一解析字典列表（兼容 data 为数组 / rows / list）
 */
function normalizeDictList(res) {
  if (!res) return [];
  var d = res.data;
  if (Array.isArray(d)) return d;
  if (d && Array.isArray(d.rows)) return d.rows;
  if (d && Array.isArray(d.list)) return d.list;
  if (Array.isArray(res.rows)) return res.rows;
  return [];
}
function dictItemLabel(item) {
  if (!item || (0, _typeof2.default)(item) !== 'object') return '';
  return item.dictLabel != null && item.dictLabel !== '' ? String(item.dictLabel) : item.label != null ? String(item.label) : item.text != null ? String(item.text) : '';
}
function dictItemValue(item) {
  if (!item || (0, _typeof2.default)(item) !== 'object') return '';
  if (item.dictValue != null && item.dictValue !== '') return String(item.dictValue);
  if (item.value != null && item.value !== '') return String(item.value);
  return '';
}

/***/ }),

/***/ 322:
/*!***********************************************************************!*\
  !*** E:/project/yhlc-v1.0/agent-uniapp/utils/printer/batchPrinter.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(uni) {

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ 4);
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
exports.getBatchPrinter = getBatchPrinter;
var _regenerator = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/regenerator */ 58));
var _asyncToGenerator2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ 60));
var _typeof2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/typeof */ 13));
var _classCallCheck2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ 23));
var _createClass2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/createClass */ 24));
var _bluetooth = _interopRequireDefault(__webpack_require__(/*! ./bluetooth.js */ 108));
var _buildSupplierCpclLabel = __webpack_require__(/*! ./buildSupplierCpclLabel.js */ 323);
var _gbkMin = _interopRequireDefault(__webpack_require__(/*! ./gbk.min.js */ 153));
var BATCH_SIZE = 10;
var BATCH_DELAY = 200;
var BLE_WRITE_RETRY = 3;
function getChunkSize() {
  // 鸿蒙 HarmonyOS：setBLEMTU 协商成功但实际写入 >20B 会报 BussinessError 2900099
  // 且可能让打印机进入错误状态，直接固定 20 字节
  try {
    var sys = uni.getSystemInfoSync();
    if (typeof _bluetooth.default.isHarmonyBlePlatform === 'function' && _bluetooth.default.isHarmonyBlePlatform(sys)) {
      return 20;
    }
    var platform = typeof _bluetooth.default.resolveBlePrintPlatform === 'function' ? _bluetooth.default.resolveBlePrintPlatform(sys) : '';
    if (platform === 'android') {
      var mtu = typeof _bluetooth.default.getMtu === 'function' ? _bluetooth.default.getMtu() : 20;
      return mtu > 20 ? mtu : 20;
    }
  } catch (_) {/* ignore */}
  return 20; // iOS 固定 20 字节
}

function encodeGBK(str) {
  return new Uint8Array(_gbkMin.default.encode(str));
}
function splitToBleChunks(uint8Arr, chunkSize) {
  var chunks = [];
  for (var start = 0; start < uint8Arr.length; start += chunkSize) {
    var end = Math.min(start + chunkSize, uint8Arr.length);
    chunks.push(uint8Arr.slice(start, end).buffer);
  }
  return chunks;
}
function _mergeLabels(cpclStrings) {
  return cpclStrings.join('');
}
function delay(ms) {
  return new Promise(function (resolve) {
    return setTimeout(resolve, ms);
  });
}
var BatchPrinter = /*#__PURE__*/function () {
  function BatchPrinter() {
    (0, _classCallCheck2.default)(this, BatchPrinter);
    this._queue = [];
    this._printing = false;
    this._onProgress = null;
    this._onComplete = null;
    this._onError = null;
  }
  (0, _createClass2.default)(BatchPrinter, [{
    key: "printing",
    get: function get() {
      return this._printing;
    }
  }, {
    key: "queueLength",
    get: function get() {
      return this._queue.length;
    }
  }, {
    key: "addItem",
    value: function addItem(item) {
      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      if (item && (0, _typeof2.default)(item) === 'object') {
        this._queue.push({
          item: item,
          options: options
        });
      }
    }
  }, {
    key: "addItems",
    value: function addItems(items) {
      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      if (!Array.isArray(items)) return;
      for (var i = 0; i < items.length; i++) {
        this.addItem(items[i], options);
      }
    }
  }, {
    key: "addCpclLabel",
    value: function addCpclLabel(cpcl) {
      var data = String(cpcl || '');
      if (data) {
        this._queue.push({
          cpcl: data
        });
      }
    }
  }, {
    key: "addCpclLabels",
    value: function addCpclLabels(labels) {
      if (!Array.isArray(labels)) return;
      for (var i = 0; i < labels.length; i++) {
        this.addCpclLabel(labels[i]);
      }
    }
  }, {
    key: "clearQueue",
    value: function clearQueue() {
      if (!this._printing) {
        this._queue = [];
      }
    }
  }, {
    key: "mergeLabels",
    value: function mergeLabels(cpclStrings) {
      return _mergeLabels(cpclStrings);
    }

    /**
     * 将连续相同的 CPCL 去重，合并后的 label 使用 qty=N 参数
     * 例如 3 份相同 label → ! 0 200 200 394 3（只发一份指令）
     */
  }, {
    key: "deduplicateAndMerge",
    value: function deduplicateAndMerge(cpclList) {
      if (!Array.isArray(cpclList) || cpclList.length === 0) return '';
      var groups = [];
      var i = 0;
      while (i < cpclList.length) {
        var current = cpclList[i];
        var count = 1;
        while (i + count < cpclList.length && cpclList[i + count] === current) {
          count++;
        }
        if (count > 1) {
          // 修改 PrintAreaSize 的 qty 参数
          groups.push(this.setCpclQty(current, count));
        } else {
          groups.push(current);
        }
        i += count;
      }
      return groups.join('');
    }
  }, {
    key: "setCpclQty",
    value: function setCpclQty(cpcl, qty) {
      // 匹配 "! 0 200 200 <height> <qty>" 替换 qty
      return cpcl.replace(/^(! \d+ \d+ \d+ \d+) \d+/m, "$1 ".concat(qty));
    }
  }, {
    key: "onProgress",
    value: function onProgress(fn) {
      this._onProgress = typeof fn === 'function' ? fn : null;
    }
  }, {
    key: "onComplete",
    value: function onComplete(fn) {
      this._onComplete = typeof fn === 'function' ? fn : null;
    }
  }, {
    key: "onError",
    value: function onError(fn) {
      this._onError = typeof fn === 'function' ? fn : null;
    }
  }, {
    key: "start",
    value: function () {
      var _start = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee() {
        var callbacks,
          profile,
          connected,
          result,
          mtu,
          total,
          printed,
          chunkSize,
          _startTs,
          _totalBytes,
          _totalChunks,
          labels,
          i,
          _this$_queue$i,
          cpcl,
          item,
          options,
          batchTotal,
          b,
          batch,
          batchIndex,
          mergedCpcl,
          bytes,
          chunks,
          elapsed,
          _args = arguments;
        return _regenerator.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                callbacks = _args.length > 0 && _args[0] !== undefined ? _args[0] : {};
                if (callbacks.onProgress) this._onProgress = callbacks.onProgress;
                if (callbacks.onComplete) this._onComplete = callbacks.onComplete;
                if (callbacks.onError) this._onError = callbacks.onError;
                if (!this._printing) {
                  _context.next = 7;
                  break;
                }
                this._fireError(new Error('正在打印中，请稍候'));
                return _context.abrupt("return");
              case 7:
                if (this._queue.length) {
                  _context.next = 10;
                  break;
                }
                this._fireError(new Error('打印队列为空'));
                return _context.abrupt("return");
              case 10:
                if (_bluetooth.default.isMpWeixin()) {
                  _context.next = 13;
                  break;
                }
                this._fireError(new Error('请在微信小程序中使用'));
                return _context.abrupt("return");
              case 13:
                _context.prev = 13;
                _context.next = 16;
                return _bluetooth.default.ensurePrivacyAuthorizedWithPrompt();
              case 16:
                _context.next = 22;
                break;
              case 18:
                _context.prev = 18;
                _context.t0 = _context["catch"](13);
                this._fireError(_context.t0 instanceof Error ? _context.t0 : new Error('隐私授权失败'));
                return _context.abrupt("return");
              case 22:
                profile = _bluetooth.default.getProfile() || {};
                _context.prev = 23;
                _context.next = 26;
                return _bluetooth.default.checkConnection(profile);
              case 26:
                connected = _context.sent;
                _context.next = 32;
                break;
              case 29:
                _context.prev = 29;
                _context.t1 = _context["catch"](23);
                connected = false;
              case 32:
                if (connected) {
                  _context.next = 44;
                  break;
                }
                _context.prev = 33;
                _context.next = 36;
                return _bluetooth.default.autoReconnect();
              case 36:
                result = _context.sent;
                connected = result.ok;
                if (connected) {
                  profile = result.profile || _bluetooth.default.getProfile() || profile;
                }
                _context.next = 44;
                break;
              case 41:
                _context.prev = 41;
                _context.t2 = _context["catch"](33);
                connected = false;
              case 44:
                if (!(!connected || !profile.deviceId || !profile.serviceId || !profile.writeId)) {
                  _context.next = 47;
                  break;
                }
                this._fireError(new Error('请先在打印设置中连接蓝牙打印机'));
                return _context.abrupt("return");
              case 47:
                if (!(typeof _bluetooth.default.negotiateMtu === 'function')) {
                  _context.next = 57;
                  break;
                }
                _context.prev = 48;
                _context.next = 51;
                return _bluetooth.default.negotiateMtu(profile.deviceId);
              case 51:
                mtu = _context.sent;
                console.log('[Print] MTU negotiated:', mtu);
                _context.next = 57;
                break;
              case 55:
                _context.prev = 55;
                _context.t3 = _context["catch"](48);
              case 57:
                this._printing = true;
                total = this._queue.length;
                printed = 0;
                chunkSize = getChunkSize();
                _startTs = Date.now();
                _totalBytes = 0;
                _totalChunks = 0;
                console.log("[Print] queue=".concat(total, ", chunkSize=").concat(chunkSize));
                _context.prev = 65;
                labels = [];
                for (i = 0; i < this._queue.length; i++) {
                  _this$_queue$i = this._queue[i], cpcl = _this$_queue$i.cpcl, item = _this$_queue$i.item, options = _this$_queue$i.options;
                  labels.push(cpcl || (0, _buildSupplierCpclLabel.buildSupplierCpclLabel)(item, options));
                }
                batchTotal = Math.ceil(labels.length / BATCH_SIZE);
                b = 0;
              case 70:
                if (!(b < labels.length)) {
                  _context.next = 98;
                  break;
                }
                batch = labels.slice(b, b + BATCH_SIZE);
                batchIndex = Math.floor(b / BATCH_SIZE);
                mergedCpcl = batch.length > 1 ? this.deduplicateAndMerge(batch) : this.mergeLabels(batch);
                console.log('=== 合并后的 CPCL 指令 ===');
                console.log(mergedCpcl.substring(0, 500));
                console.log('是否包含多个 FORM:', (mergedCpcl.match(/FORM/g) || []).length);
                console.log('是否包含 PRINT:', mergedCpcl.includes('PRINT'));
                console.log('PRINT 出现次数:', (mergedCpcl.match(/PRINT/g) || []).length);
                bytes = encodeGBK(mergedCpcl);
                chunks = splitToBleChunks(bytes, chunkSize);
                _totalBytes += bytes.length;
                _totalChunks += chunks.length;
                console.log('本批标签数:', batch.length);
                console.log('GBK字节数:', bytes.length);
                console.log('BLE分包数:', chunks.length);
                if (chunks.length) {
                  _context.next = 88;
                  break;
                }
                throw new Error('打印数据为空');
              case 88:
                _context.next = 90;
                return this._sendChunks(profile, chunks, chunkSize > 20 ? bytes : null);
              case 90:
                printed += batch.length;
                this._fireProgress({
                  current: printed,
                  total: total,
                  batch: batchIndex + 1,
                  batchTotal: batchTotal
                });
                if (!(b + BATCH_SIZE < labels.length)) {
                  _context.next = 95;
                  break;
                }
                _context.next = 95;
                return delay(BATCH_DELAY);
              case 95:
                b += BATCH_SIZE;
                _context.next = 70;
                break;
              case 98:
                this._fireComplete({
                  total: total
                });
                elapsed = Date.now() - _startTs;
                console.log("[PrintPerf] ".concat(total, " labels, ").concat(_totalBytes, " bytes, ").concat(_totalChunks, " chunks, ").concat(elapsed, "ms ") + "(".concat(Math.round(total / (elapsed / 1000) || 0), " labels/s, ") + "".concat(Math.round(_totalBytes / (elapsed / 1000) || 0), " bytes/s)"));
                _context.next = 106;
                break;
              case 103:
                _context.prev = 103;
                _context.t4 = _context["catch"](65);
                this._fireError(_context.t4 instanceof Error ? _context.t4 : new Error(String(_context.t4 && _context.t4.message || '打印失败')));
              case 106:
                _context.prev = 106;
                this._printing = false;
                this._queue = [];
                return _context.finish(106);
              case 110:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this, [[13, 18], [23, 29], [33, 41], [48, 55], [65, 103, 106, 110]]);
      }));
      function start() {
        return _start.apply(this, arguments);
      }
      return start;
    }()
  }, {
    key: "_sendChunks",
    value: function _sendChunks(profile, chunks, originalBytes) {
      var _this = this;
      return new Promise(function (resolve, reject) {
        var fallback = false;
        var send = function send(i) {
          if (i >= chunks.length) {
            resolve();
            return;
          }
          _this._writeOnce(profile, chunks[i], i).then(function () {
            return send(i + 1);
          }).catch(function (err) {
            if (!fallback && originalBytes) {
              // 大块写入失败 → 降级到 20 字节
              console.warn("[Print] chunk ".concat(i, " (").concat(chunks[i].byteLength, "B) fail, fallback to 20B"));
              // 通知 bluetooth 模块降级 MTU，后续批次直接使用 20B 避免重复试错
              if (typeof _bluetooth.default.downgradeMtu === 'function') {
                _bluetooth.default.downgradeMtu(20);
              }
              fallback = true;
              var bytePos = i * chunks[0].byteLength;
              var remaining = originalBytes.slice(bytePos);
              chunks = splitToBleChunks(remaining, 20);
              originalBytes = null; // 只降级一次
              send(0);
            } else {
              reject(err);
            }
          });
        };
        send(0);
      });
    }
  }, {
    key: "_writeOnce",
    value: function _writeOnce(profile, value, chunkIndex) {
      var _this2 = this;
      return new Promise(function (resolve, reject) {
        var tried = 0;
        var attempt = function attempt() {
          tried++;
          try {
            uni.writeBLECharacteristicValue({
              deviceId: profile.deviceId,
              serviceId: profile.serviceId,
              characteristicId: profile.writeId,
              value: value,
              writeType: profile.writeNoResponse ? 'writeNoResponse' : 'write',
              success: resolve,
              fail: function fail(err) {
                console.warn("BLE write fail (chunk ".concat(chunkIndex, ", attempt ").concat(tried, ")"), err);
                // GATT INVALID ATTR LEN: data too large, retrying same size won't help
                var isSizeError = err.errCode === 10008 || String(err.errMsg || '').includes('INVALID ATTR LEN');
                if (!isSizeError && tried < BLE_WRITE_RETRY) {
                  setTimeout(attempt, 100);
                } else {
                  reject(new Error(_this2._fmtBleError(err, chunkIndex)));
                }
              }
            });
          } catch (e) {
            console.warn("BLE write exception (chunk ".concat(chunkIndex, ")"), e);
            if (tried < BLE_WRITE_RETRY) {
              setTimeout(attempt, 100);
            } else {
              reject(new Error('蓝牙写入异常: ' + (e.message || e)));
            }
          }
        };
        attempt();
      });
    }
  }, {
    key: "_fmtBleError",
    value: function _fmtBleError(err, chunkIndex) {
      if (typeof _bluetooth.default.formatBleError === 'function') {
        var formatted = _bluetooth.default.formatBleError(err, "\u84DD\u7259\u5199\u5165\u5931\u8D25 (chunk ".concat(chunkIndex, ")"));
        return formatted.message;
      }
      if (!err) return "\u84DD\u7259\u5199\u5165\u5931\u8D25 (chunk ".concat(chunkIndex, ")");
      var code = err.errCode || err.errno || '';
      var msg = err.errMsg || err.message || '';
      return "\u84DD\u7259\u5199\u5165\u5931\u8D25 (chunk ".concat(chunkIndex, ", errCode=").concat(code, "): ").concat(msg);
    }
  }, {
    key: "_fireProgress",
    value: function _fireProgress(data) {
      try {
        if (this._onProgress) this._onProgress(data);
      } catch (_) {}
    }
  }, {
    key: "_fireComplete",
    value: function _fireComplete(data) {
      try {
        if (this._onComplete) this._onComplete(data);
      } catch (_) {}
    }
  }, {
    key: "_fireError",
    value: function _fireError(error) {
      try {
        if (this._onError) this._onError(error);
      } catch (_) {}
    }
  }]);
  return BatchPrinter;
}();
var batchPrinter = new BatchPrinter();
function getBatchPrinter() {
  return batchPrinter;
}
var _default = batchPrinter;
exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 2)["default"]))

/***/ }),

/***/ 323:
/*!*********************************************************************************!*\
  !*** E:/project/yhlc-v1.0/agent-uniapp/utils/printer/buildSupplierCpclLabel.js ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ 4);
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.buildSupplierCpclLabel = buildSupplierCpclLabel;
exports.extractCustomerSurname = extractCustomerSurname;
var _PrinterHelperCpcl = _interopRequireDefault(__webpack_require__(/*! ./PrinterHelperCpcl.js */ 151));
var _storage = __webpack_require__(/*! @/api/storage.js */ 78);
/** @deprecated 保留兼容；标签已改为显示完整客户名 */
function extractCustomerSurname(name) {
  var s = String(name || '').trim();
  if (!s || s === '-') return '-';
  return Array.from(s)[0] || '-';
}

/** 按车号位数缩小放大倍数，1～2 位均 mag 7×7，3 位略缩小 */
function getCarNoStyle(carNo) {
  var len = String(carNo || '').length;
  if (len <= 1) return {
    mag: '7',
    x: 178,
    y: 32
  };
  if (len === 2) return {
    mag: '7',
    x: 158,
    y: 32
  };
  return {
    mag: '4',
    x: 158,
    y: 32
  };
}

/** 客户姓名：保留原字号梯度，固定右侧起点；过长才换行避免左移与车号重叠 */
function getConsigneeStyle(name) {
  var text = String(name || '').trim() || '-';
  var chars = Array.from(text);
  var len = chars.length;
  var x = 350;

  // 短姓名：保持原放大倍数单行显示
  // if (len <= 2) return { mag: '5', x, y: 46, font: '4', line1: text, line2: '' }
  if (len <= 3) return {
    mag: '4',
    x: x,
    y: 48,
    font: '4',
    line1: text,
    line2: ''
  };
  if (len <= 7) return {
    mag: '3',
    x: x,
    y: 52,
    font: '4',
    line1: text,
    line2: ''
  };
  // if (len <= 7) return { mag: '2', x, y: 58, font: '4', line1: text, line2: '' }
  // 长姓名（≥7）：保持 mag 2 字号，拆两行避免越界与车号冲突
  var half = Math.ceil(len / 2);
  return {
    mag: '2',
    x: x,
    y: 58,
    font: '4',
    line1: chars.slice(0, half).join(''),
    line2: chars.slice(half).join('')
  };
}

/** 城市仓：竖排「昱禾联仓」右侧竖排，小字号；按字数缩小行距避免与品牌行重叠 */
function getStoreNameStyle(name) {
  var chars = Array.from(String(name || '').trim() || '-').slice(0, 8);
  var x = 74;
  var startY = 26;
  var step = chars.length <= 4 ? 26 : chars.length <= 6 ? 22 : 18;
  return {
    mag: '1',
    x: x,
    startY: startY,
    step: step,
    chars: chars
  };
}

/** 竖排文字底部 Y（font + SetMag），供其下方横排定位 */
function getVerticalTextBottomY(charCount, startY, step, mag) {
  var lastCharY = startY + (charCount - 1) * step;
  return lastCharY + 14 * Number(mag) + 10;
}

/** 品牌+商品名：「昱禾联仓」下方横排，按字数与可用高度适配，不碰竖排与分隔线 */
function getBrandProductLayout(line, leftCharCount, startY, step, xLeft, yDivider) {
  var len = Array.from(String(line || '').trim() || '-').length;
  var y = getVerticalTextBottomY(leftCharCount, startY, step, 2) + 10;
  var maxBottom = yDivider - 8;
  var availableH = maxBottom - y;
  var magH = '1';
  var magV = '1';
  if (len <= 8 && availableH >= 26) {
    magH = '2';
    magV = '2';
  } else if (len <= 14 && availableH >= 16) {
    magH = '2';
    magV = '1';
  }
  var estHeight = 12 * Number(magV);
  if (y + estHeight > maxBottom) {
    magH = '1';
    magV = '1';
  }
  return {
    magH: magH,
    magV: magV,
    x: xLeft,
    y: y
  };
}

/** 按拍子号位数缩小放大倍数（与打印区宽度匹配，避免被裁切） */
function getPzNoStyle(pz) {
  var len = String(pz || '').length;
  if (len <= 1) return {
    mag: '4',
    x: 418,
    y: 278
  };
  if (len === 2) return {
    mag: '3',
    x: 408,
    y: 274
  };
  if (len <= 4) return {
    mag: '2',
    x: 396,
    y: 272
  };
  if (len <= 6) return {
    mag: '1',
    x: 388,
    y: 272
  };
  return {
    mag: '1',
    x: 372,
    y: 274
  };
}

/**
 * 供应商送货标签 CPCL（70×50mm @200dpi）
 * @param {object} item 明细行
 * @param {{ supplierName?: string }} options
 */
function buildSupplierCpclLabel(item) {
  var _ref, _it$carNo;
  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var it = item || {};
  var LABEL_WIDTH_DOTS = 560;
  var LABEL_HEIGHT_DOTS = 394;
  var X_LEFT = 18;
  var LEFT_CHAR_START_Y = 26;
  var LEFT_CHAR_STEP = 34;
  var X_MAIN = 158;
  var X_CUSTOMER = 360;
  var X_PZ = 400;
  /** 上半区分隔线；品牌+商品名需在其上方 */
  var Y_DIVIDER = 222;
  var LOWER_OFFSET_Y = 24;
  var carNo = String((_ref = (_it$carNo = it.carNo) !== null && _it$carNo !== void 0 ? _it$carNo : it.lineNo) !== null && _ref !== void 0 ? _ref : '').trim() || '-';
  var carStyle = getCarNoStyle(carNo);
  var leftVertical = '昱禾联仓';
  var storeName = String(it.storeName || it.store || it.storeNm || '').trim() || '-';
  var storeStyle = getStoreNameStyle(storeName);
  var supplierName = String(it.supplierName || options.supplierName || '').trim() || '-';
  var consigneeName = String(it.consignee || '').trim() || '-';
  var consigneeStyle = getConsigneeStyle(consigneeName);
  var productBrand = String((0, _storage.pickFirstField)(it, ['productBrand', 'brand']) || '').trim();
  var productName = String((0, _storage.pickFirstField)(it, ['productName', 'goodsName', 'name', 'title']) || '').trim();
  var brandProductLine = [productBrand, productName].filter(function (s) {
    return s && s !== '-';
  }).join('+').slice(0, 22) || '-';
  var leftCharCount = Array.from(leftVertical.slice(0, 4)).length;
  var brandProductLayout = getBrandProductLayout(brandProductLine, leftCharCount, LEFT_CHAR_START_Y, LEFT_CHAR_STEP, X_LEFT, Y_DIVIDER);
  var productNo = String(it.productNo || it.barCode || it.barcode || it.productId || it.serialNo || '').trim() || '-';
  var gross = it.netWeight != null && String(it.netWeight).trim() !== '' ? String(it.netWeight).trim() : '-';
  var net = it.weight != null && String(it.weight).trim() !== '' ? String(it.weight).trim() : '-';
  var now = new Date();
  var dateLine = "".concat(now.getFullYear(), "\u5E74").concat(now.getMonth() + 1, "\u6708").concat(now.getDate(), "\u65E5");
  var pzNoRaw = String((0, _storage.pickFirstField)(it, ['pzNo', 'pzNO', 'pz_no', 'pzno']) || '').trim();
  var pzNoFirstPart = pzNoRaw ? pzNoRaw.split(/[，,、\s/|]+/).filter(Boolean)[0] || '' : '';
  /** 打印完整拍子号首段（最多 8 位），避免旧逻辑只取前 2 位箱号导致与页面显示不一致 */
  var pzDisplay = pzNoFirstPart ? pzNoFirstPart.slice(0, 8) : '-';
  var pzStyle = getPzNoStyle(pzDisplay);
  _PrinterHelperCpcl.default.data = '';
  _PrinterHelperCpcl.default.PrintAreaSize('0', '200', '200', String(LABEL_HEIGHT_DOTS), '1');
  _PrinterHelperCpcl.default.PageWidth(String(LABEL_WIDTH_DOTS));
  _PrinterHelperCpcl.default.Speed('6');
  _PrinterHelperCpcl.default.SetMag('2', '2');
  var leftChars = Array.from(leftVertical.slice(0, 4));
  for (var i = 0; i < leftChars.length; i++) {
    _PrinterHelperCpcl.default.Text(_PrinterHelperCpcl.default.text, '55', '0', String(X_LEFT), String(LEFT_CHAR_START_Y + i * LEFT_CHAR_STEP), leftChars[i]);
  }

  // 品牌+商品名（「昱禾联仓」下方横排）
  _PrinterHelperCpcl.default.SetMag(brandProductLayout.magH, brandProductLayout.magV);
  _PrinterHelperCpcl.default.Text(_PrinterHelperCpcl.default.text, '8', '0', String(brandProductLayout.x), String(brandProductLayout.y), brandProductLine || '-');
  _PrinterHelperCpcl.default.SetMag('1', '1');

  // 上半区：车号 / 客户（标题正常字号，不继承左侧竖排放大）
  _PrinterHelperCpcl.default.SetMag('1', '1');
  _PrinterHelperCpcl.default.Text(_PrinterHelperCpcl.default.text, '8', '0', String(X_MAIN), '14', '车号');
  _PrinterHelperCpcl.default.Text(_PrinterHelperCpcl.default.text, '8', '0', String(X_CUSTOMER), '14', '客户');
  _PrinterHelperCpcl.default.SetMag(carStyle.mag, carStyle.mag);
  _PrinterHelperCpcl.default.Text(_PrinterHelperCpcl.default.text, '4', '0', String(carStyle.x), String(carStyle.y), carNo.slice(0, 3));
  _PrinterHelperCpcl.default.SetMag(consigneeStyle.mag, consigneeStyle.mag);
  _PrinterHelperCpcl.default.Text(_PrinterHelperCpcl.default.text, consigneeStyle.font, '0', String(consigneeStyle.x), String(consigneeStyle.y), consigneeStyle.line1);
  if (consigneeStyle.line2) {
    _PrinterHelperCpcl.default.Text(_PrinterHelperCpcl.default.text, consigneeStyle.font, '0', String(consigneeStyle.x), String(consigneeStyle.y + 28), consigneeStyle.line2);
  }
  _PrinterHelperCpcl.default.SetMag('1', '1');

  // 城市仓（竖排「昱禾联仓」右侧竖排）
  _PrinterHelperCpcl.default.SetMag(storeStyle.mag, storeStyle.mag);
  for (var _i = 0; _i < storeStyle.chars.length; _i++) {
    _PrinterHelperCpcl.default.Text(_PrinterHelperCpcl.default.text, '8', '0', String(storeStyle.x), String(storeStyle.startY + _i * storeStyle.step), storeStyle.chars[_i]);
  }
  _PrinterHelperCpcl.default.SetMag('1', '1');
  _PrinterHelperCpcl.default.Line('0', String(Y_DIVIDER), String(LABEL_WIDTH_DOTS), String(Y_DIVIDER), '1');

  // 下半区
  _PrinterHelperCpcl.default.SetBold('1');
  _PrinterHelperCpcl.default.Text(_PrinterHelperCpcl.default.text, '8', '0', '18', String(206 + LOWER_OFFSET_Y), supplierName.slice(0, 22));
  _PrinterHelperCpcl.default.SetBold('0');
  _PrinterHelperCpcl.default.Text(_PrinterHelperCpcl.default.text, '8', '0', '18', String(242 + LOWER_OFFSET_Y), '毛重');
  _PrinterHelperCpcl.default.Text(_PrinterHelperCpcl.default.text, '8', '0', '72', String(242 + LOWER_OFFSET_Y), "".concat(gross, "\u65A4"));
  _PrinterHelperCpcl.default.Text(_PrinterHelperCpcl.default.text, '8', '0', '200', String(242 + LOWER_OFFSET_Y), '净重');
  _PrinterHelperCpcl.default.Text(_PrinterHelperCpcl.default.text, '8', '0', '254', String(242 + LOWER_OFFSET_Y), "".concat(net, "\u65A4"));
  _PrinterHelperCpcl.default.Text(_PrinterHelperCpcl.default.text, '8', '0', '18', String(278 + LOWER_OFFSET_Y), '日期');
  _PrinterHelperCpcl.default.Text(_PrinterHelperCpcl.default.text, '8', '0', '72', String(278 + LOWER_OFFSET_Y), dateLine);
  _PrinterHelperCpcl.default.SetBold('1');
  _PrinterHelperCpcl.default.Text(_PrinterHelperCpcl.default.text, '8', '0', String(X_PZ), String(228 + LOWER_OFFSET_Y), '拍子号');
  _PrinterHelperCpcl.default.SetBold('0');
  _PrinterHelperCpcl.default.SetMag(pzStyle.mag, pzStyle.mag);
  _PrinterHelperCpcl.default.Text(_PrinterHelperCpcl.default.text, '4', '0', String(pzStyle.x), String(pzStyle.y + LOWER_OFFSET_Y), pzDisplay);
  _PrinterHelperCpcl.default.SetMag('1', '1');
  _PrinterHelperCpcl.default.Text(_PrinterHelperCpcl.default.text, '8', '0', '18', String(312 + LOWER_OFFSET_Y), '商品编号');
  _PrinterHelperCpcl.default.Text(_PrinterHelperCpcl.default.text, '8', '0', '126', String(312 + LOWER_OFFSET_Y), productNo.slice(0, 20));
  _PrinterHelperCpcl.default.Form();
  _PrinterHelperCpcl.default.Print();
  return _PrinterHelperCpcl.default.data;
}

/***/ })

}]);
//# sourceMappingURL=../../../../.sourcemap/mp-weixin/sub-pages/supply/common/vendor.js.map
},{isPage:false,isComponent:false,currentFile:'sub-pages/supply/common/vendor.js'});$gwx3_XC_0=function(_,_v,_n,_p,_s,_wp,_wl,$gwn,$gwl,$gwh,wh,$gstack,$gwrt,gra,grb,TestTest,wfor,_ca,_da,_r,_rz,_o,_oz,_1,_1z,_2,_2z,_m,_mz,nv_getDate,nv_getRegExp,nv_console,nv_parseInt,nv_parseFloat,nv_isNaN,nv_isFinite,nv_decodeURI,nv_decodeURIComponent,nv_encodeURI,nv_encodeURIComponent,$gdc,nv_JSON,_af,_gv,_ai,_grp,_gd,_gapi,$ixc,_ic,_w,_ev,_tsd){return function(path,global){
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
var z=__WXML_GLOBAL__.ops_set.$gwx3_XC_0 || [];
function gz$gwx3_XC_0_1(){
if( __WXML_GLOBAL__.ops_cached.$gwx3_XC_0_1)return __WXML_GLOBAL__.ops_cached.$gwx3_XC_0_1
__WXML_GLOBAL__.ops_cached.$gwx3_XC_0_1=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'delivery-list-page data-v-518d3f46'])
Z([3,'search-bar data-v-518d3f46'])
Z([3,'__l'])
Z([3,'search-icon data-v-518d3f46'])
Z([3,'#999'])
Z([3,'18'])
Z([3,'search'])
Z([3,'0ff32c49-1'])
Z(z[2])
Z([3,'__e'])
Z([1,false])
Z([3,'data-v-518d3f46'])
Z([[4],[[5],[[4],[[5],[[5],[1,'^change']],[[4],[[5],[[4],[[5],[1,'onDateRangeChange']]]]]]]]])
Z(z[10])
Z([3,'string'])
Z([3,'datetimerange'])
Z([[7],[3,'dateRange']])
Z([3,'0ff32c49-2'])
Z([[4],[[5],[1,'default']]])
Z(z[2])
Z(z[11])
Z([3,'#666'])
Z([3,'22'])
Z([3,'calendar'])
Z([[2,'+'],[[2,'+'],[1,'0ff32c49-3'],[1,',']],[1,'0ff32c49-2']])
Z(z[9])
Z([3,'list-scroll data-v-518d3f46'])
Z([[4],[[5],[[4],[[5],[[5],[1,'scrolltolower']],[[4],[[5],[[4],[[5],[[5],[1,'onScrollLower']],[[4],[[5],[1,'$event']]]]]]]]]]])
Z([1,true])
Z(z[10])
Z([[6],[[7],[3,'$root']],[3,'g0']])
Z(z[2])
Z(z[11])
Z([3,'clipboard'])
Z([3,'暂无数据'])
Z([3,'0ff32c49-4'])
Z([3,'__i0__'])
Z([3,'supplier'])
Z([[6],[[7],[3,'$root']],[3,'l1']])
Z([3,'id'])
Z([3,'supplier-group data-v-518d3f46'])
Z(z[9])
Z([3,'supplier-header data-v-518d3f46'])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[[5],[[5],[1,'toggleSupplierAll']],[[4],[[5],[1,'$0']]]],[[4],[[5],[[4],[[5],[[4],[[5],[[5],[[5],[1,'supplierList']],[1,'id']],[[6],[[6],[[7],[3,'supplier']],[3,'$orig']],[3,'id']]]]]]]]]]]]]]]])
Z([[6],[[7],[3,'supplier']],[3,'m1']])
Z([3,'__i1__'])
Z([3,'item'])
Z([[6],[[7],[3,'supplier']],[3,'l0']])
Z(z[39])
Z([3,'order-row data-v-518d3f46'])
Z(z[9])
Z([3,'card-head-check data-v-518d3f46'])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[[5],[[5],[1,'toggleItem']],[[4],[[5],[[5],[1,'$0']],[1,'$1']]]],[[4],[[5],[[5],[[4],[[5],[[4],[[5],[[5],[[5],[1,'supplierList']],[1,'id']],[[6],[[6],[[7],[3,'supplier']],[3,'$orig']],[3,'id']]]]]]],[[4],[[5],[[5],[[4],[[5],[[5],[[5],[1,'supplierList']],[1,'id']],[[6],[[6],[[7],[3,'supplier']],[3,'$orig']],[3,'id']]]]],[[4],[[5],[[5],[[5],[1,'goods']],[1,'id']],[[6],[[6],[[7],[3,'item']],[3,'$orig']],[3,'id']]]]]]]]]]]]]]]])
Z([[6],[[6],[[7],[3,'item']],[3,'$orig']],[3,'checked']])
Z([[6],[[7],[3,'item']],[3,'m2']])
Z([[7],[3,'loading']])
Z([[6],[[7],[3,'$root']],[3,'g1']])
})(__WXML_GLOBAL__.ops_cached.$gwx3_XC_0_1);return __WXML_GLOBAL__.ops_cached.$gwx3_XC_0_1
}
__WXML_GLOBAL__.ops_set.$gwx3_XC_0=z;
__WXML_GLOBAL__.ops_init.$gwx3_XC_0=true;
var x=['./sub-pages/supply/delivery-list.wxml'];d_[x[0]]={}
var m0=function(e,s,r,gg){
var z=gz$gwx3_XC_0_1()
var oB=_n('view')
_rz(z,oB,'class',0,e,s,gg)
var xC=_n('view')
_rz(z,xC,'class',1,e,s,gg)
var oD=_mz(z,'uni-icons',['bind:__l',2,'class',1,'color',2,'size',3,'type',4,'vueId',5],[],e,s,gg)
_(xC,oD)
var fE=_mz(z,'uni-datetime-picker',['bind:__l',8,'bind:change',1,'border',2,'class',3,'data-event-opts',4,'hideSecond',5,'returnType',6,'type',7,'value',8,'vueId',9,'vueSlots',10],[],e,s,gg)
var cF=_mz(z,'uni-icons',['bind:__l',19,'class',1,'color',2,'size',3,'type',4,'vueId',5],[],e,s,gg)
_(fE,cF)
_(xC,fE)
_(oB,xC)
var hG=_mz(z,'scroll-view',['bindscrolltolower',25,'class',1,'data-event-opts',2,'scrollY',3,'showScrollbar',4],[],e,s,gg)
var oH=_v()
_(hG,oH)
if(_oz(z,30,e,s,gg)){oH.wxVkey=1
var oJ=_mz(z,'empty-state',['bind:__l',31,'class',1,'iconType',2,'text',3,'vueId',4],[],e,s,gg)
_(oH,oJ)
}
else{oH.wxVkey=2
var lK=_v()
_(oH,lK)
var aL=function(eN,tM,bO,gg){
var xQ=_n('view')
_rz(z,xQ,'class',40,eN,tM,gg)
var oR=_mz(z,'view',['bindtap',41,'class',1,'data-event-opts',2],[],eN,tM,gg)
var fS=_v()
_(oR,fS)
if(_oz(z,44,eN,tM,gg)){fS.wxVkey=1
}
fS.wxXCkey=1
_(xQ,oR)
var cT=_v()
_(xQ,cT)
var hU=function(cW,oV,oX,gg){
var aZ=_n('view')
_rz(z,aZ,'class',49,cW,oV,gg)
var e2=_mz(z,'view',['catchtap',50,'class',1,'data-event-opts',2],[],cW,oV,gg)
var b3=_v()
_(e2,b3)
if(_oz(z,53,cW,oV,gg)){b3.wxVkey=1
}
b3.wxXCkey=1
_(aZ,e2)
var t1=_v()
_(aZ,t1)
if(_oz(z,54,cW,oV,gg)){t1.wxVkey=1
}
t1.wxXCkey=1
_(oX,aZ)
return oX
}
cT.wxXCkey=2
_2z(z,47,hU,eN,tM,gg,cT,'item','__i1__','id')
_(bO,xQ)
return bO
}
lK.wxXCkey=2
_2z(z,38,aL,e,s,gg,lK,'supplier','__i0__','id')
}
var cI=_v()
_(hG,cI)
if(_oz(z,55,e,s,gg)){cI.wxVkey=1
}
else{cI.wxVkey=2
var o4=_v()
_(cI,o4)
if(_oz(z,56,e,s,gg)){o4.wxVkey=1
}
o4.wxXCkey=1
}
oH.wxXCkey=1
oH.wxXCkey=3
cI.wxXCkey=1
_(oB,hG)
_(r,oB)
return r
}
e_[x[0]]={f:m0,j:[],i:[],ti:[],ic:[]}
if(path&&e_[path]){
return function(env,dd,global){$gwxc=0;var root={"tag":"wx-page"};root.children=[]
;g="$gwx3_XC_0";var main=e_[path].f
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
}(__g.a,__g.b,__g.c,__g.d,__g.e,__g.f,__g.g,__g.h,__g.i,__g.j,__g.k,__g.l,__g.m,__g.n,__g.o,__g.p,__g.q,__g.r,__g.s,__g.t,__g.u,__g.v,__g.w,__g.x,__g.y,__g.z,__g.A,__g.B,__g.C,__g.D,__g.E,__g.F,__g.G,__g.H,__g.I,__g.J,__g.K,__g.L,__g.M,__g.N,__g.O,__g.P,__g.Q,__g.R,__g.S,__g.T,__g.U,__g.V,__g.W,__g.X,__g.Y,__g.Z,__g.aa);if(__vd_version_info__.delayedGwx||false)$gwx3_XC_0();	if (__vd_version_info__.delayedGwx) __wxAppCode__['sub-pages/supply/delivery-list.wxml'] = [$gwx3_XC_0, './sub-pages/supply/delivery-list.wxml'];else __wxAppCode__['sub-pages/supply/delivery-list.wxml'] = $gwx3_XC_0( './sub-pages/supply/delivery-list.wxml' );
	;__wxRoute = "sub-pages/supply/delivery-list";__wxRouteBegin = true;__wxAppCurrentFile__="sub-pages/supply/delivery-list.js";define("sub-pages/supply/delivery-list.js",function(require,module,exports,window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){
require('./common/vendor.js');(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["sub-pages/supply/delivery-list"],{

/***/ 300:
/*!***********************************************************************************************!*\
  !*** E:/project/yhlc-v1.0/agent-uniapp/main.js?{"page":"sub-pages%2Fsupply%2Fdelivery-list"} ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(wx, createPage) {

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ 4);
__webpack_require__(/*! uni-pages */ 30);
var _vue = _interopRequireDefault(__webpack_require__(/*! vue */ 25));
var _deliveryList = _interopRequireDefault(__webpack_require__(/*! ./sub-pages/supply/delivery-list.vue */ 301));
// @ts-ignore
wx.__webpack_require_UNI_MP_PLUGIN__ = __webpack_require__;
createPage(_deliveryList.default);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/wx.js */ 1)["default"], __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 2)["createPage"]))

/***/ }),

/***/ 301:
/*!****************************************************************************!*\
  !*** E:/project/yhlc-v1.0/agent-uniapp/sub-pages/supply/delivery-list.vue ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _delivery_list_vue_vue_type_template_id_518d3f46_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./delivery-list.vue?vue&type=template&id=518d3f46&scoped=true& */ 302);
/* harmony import */ var _delivery_list_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./delivery-list.vue?vue&type=script&lang=js& */ 304);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _delivery_list_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _delivery_list_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _delivery_list_vue_vue_type_style_index_0_id_518d3f46_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./delivery-list.vue?vue&type=style&index=0&id=518d3f46&lang=scss&scoped=true& */ 306);
/* harmony import */ var _D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 39);

var renderjs





/* normalize component */

var component = Object(_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _delivery_list_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _delivery_list_vue_vue_type_template_id_518d3f46_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _delivery_list_vue_vue_type_template_id_518d3f46_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "518d3f46",
  null,
  false,
  _delivery_list_vue_vue_type_template_id_518d3f46_scoped_true___WEBPACK_IMPORTED_MODULE_0__["components"],
  renderjs
)

component.options.__file = "sub-pages/supply/delivery-list.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 302:
/*!***********************************************************************************************************************!*\
  !*** E:/project/yhlc-v1.0/agent-uniapp/sub-pages/supply/delivery-list.vue?vue&type=template&id=518d3f46&scoped=true& ***!
  \***********************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_delivery_list_vue_vue_type_template_id_518d3f46_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--17-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./delivery-list.vue?vue&type=template&id=518d3f46&scoped=true& */ 303);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_delivery_list_vue_vue_type_template_id_518d3f46_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_delivery_list_vue_vue_type_template_id_518d3f46_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_delivery_list_vue_vue_type_template_id_518d3f46_scoped_true___WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_delivery_list_vue_vue_type_template_id_518d3f46_scoped_true___WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),

/***/ 303:
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--17-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!E:/project/yhlc-v1.0/agent-uniapp/sub-pages/supply/delivery-list.vue?vue&type=template&id=518d3f46&scoped=true& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return recyclableRender; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "components", function() { return components; });
var components
try {
  components = {
    uniIcons: function () {
      return Promise.all(/*! import() | uni_modules/uni-icons/components/uni-icons/uni-icons */[__webpack_require__.e("common/vendor"), __webpack_require__.e("uni_modules/uni-icons/components/uni-icons/uni-icons")]).then(__webpack_require__.bind(null, /*! @/uni_modules/uni-icons/components/uni-icons/uni-icons.vue */ 520))
    },
    uniDatetimePicker: function () {
      return Promise.all(/*! import() | uni_modules/uni-datetime-picker/components/uni-datetime-picker/uni-datetime-picker */[__webpack_require__.e("common/vendor"), __webpack_require__.e("uni_modules/uni-datetime-picker/components/uni-datetime-picker/uni-datetime-picker")]).then(__webpack_require__.bind(null, /*! @/uni_modules/uni-datetime-picker/components/uni-datetime-picker/uni-datetime-picker.vue */ 556))
    },
  }
} catch (e) {
  if (
    e.message.indexOf("Cannot find module") !== -1 &&
    e.message.indexOf(".vue") !== -1
  ) {
    console.error(e.message)
    console.error("1. 排查组件名称拼写是否正确")
    console.error(
      "2. 排查组件是否符合 easycom 规范，文档：https://uniapp.dcloud.net.cn/collocation/pages?id=easycom"
    )
    console.error(
      "3. 若组件不符合 easycom 规范，需手动引入，并在 components 中注册该组件"
    )
  } else {
    throw e
  }
}
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  var g0 = _vm.supplierList.length === 0 && !_vm.loading
  var l1 = !g0
    ? _vm.__map(_vm.supplierList, function (supplier, __i0__) {
        var $orig = _vm.__get_orig(supplier)
        var m0 = _vm.isSupplierAllChecked(supplier)
        var m1 = _vm.isSupplierAllChecked(supplier)
        var l0 = _vm.__map(supplier.goods, function (item, __i1__) {
          var $orig = _vm.__get_orig(item)
          var m2 = _vm.getLevelBadgeText(item)
          var m3 = m2 ? _vm.getLevelBadgeText(item) : null
          var m4 = _vm.displayWeight(item.grossWeight)
          var m5 = _vm.displayWeight(item.netWeight)
          return {
            $orig: $orig,
            m2: m2,
            m3: m3,
            m4: m4,
            m5: m5,
          }
        })
        return {
          $orig: $orig,
          m0: m0,
          m1: m1,
          l0: l0,
        }
      })
    : null
  var g1 = !_vm.loading ? _vm.finished && _vm.supplierList.length : null
  _vm.$mp.data = Object.assign(
    {},
    {
      $root: {
        g0: g0,
        l1: l1,
        g1: g1,
      },
    }
  )
}
var recyclableRender = false
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ 304:
/*!*****************************************************************************************************!*\
  !*** E:/project/yhlc-v1.0/agent-uniapp/sub-pages/supply/delivery-list.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_delivery_list_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--13-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./delivery-list.vue?vue&type=script&lang=js& */ 305);
/* harmony import */ var _D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_delivery_list_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_delivery_list_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_delivery_list_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_delivery_list_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_delivery_list_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 305:
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--13-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!E:/project/yhlc-v1.0/agent-uniapp/sub-pages/supply/delivery-list.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
var _defineProperty2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/defineProperty */ 11));
var _vuex = __webpack_require__(/*! vuex */ 34);
var _storeOrder = __webpack_require__(/*! @/api/storeOrder.js */ 141);
var _dict = __webpack_require__(/*! @/api/dict.js */ 271);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0, _defineProperty2.default)(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
var EmptyState = function EmptyState() {
  __webpack_require__.e(/*! require.ensure | components/empty-state */ "components/empty-state").then((function () {
    return resolve(__webpack_require__(/*! @/components/empty-state.vue */ 542));
  }).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
};
var _default = {
  components: {
    EmptyState: EmptyState
  },
  data: function data() {
    return {
      keyword: '',
      /** 起止均为 YYYY-MM-DD HH:mm:ss，与接口 startTime、endTime 一致 */
      dateRange: [],
      supplierList: [],
      activeSummary: null,
      loading: false,
      finished: false,
      submitting: false,
      /** 品级 product_level_list，level 数值 → 展示文案 */
      productLevelDict: []
    };
  },
  computed: _objectSpread(_objectSpread({}, (0, _vuex.mapState)(['token'])), {}, {
    totalSelectedCount: function totalSelectedCount() {
      var n = 0;
      this.supplierList.forEach(function (s) {
        s.goods.forEach(function (g) {
          if (g.checked) n += Number(g.deliverQty || 0);
        });
      });
      return n;
    },
    totalGrossWeight: function totalGrossWeight() {
      var w = 0;
      this.supplierList.forEach(function (s) {
        s.goods.forEach(function (g) {
          if (!g.checked) return;
          var cnt = Number(g.deliverQty || 0);
          var gw = Number(g.grossWeight);
          var unit = gw > 0 ? gw : 40;
          w += unit * cnt;
        });
      });
      return Math.round(w * 100) / 100;
    },
    dateRangeActive: function dateRangeActive() {
      var r = this.dateRange;
      return Array.isArray(r) && r.length >= 2 && !!(r[0] && r[1]);
    }
  }),
  onLoad: function onLoad() {
    this.loadProductLevelDict();
    this.resetAndLoad();
  },
  methods: {
    onDateRangeChange: function onDateRangeChange(val) {
      var raw = Array.isArray(val) ? val : val && Array.isArray(val.detail) ? val.detail : null;
      if (!raw || raw.length === 0) {
        this.dateRange = [];
      } else {
        var a = this.normalizeDateTime(raw[0]);
        var b = this.normalizeDateTime(raw[1]);
        this.dateRange = a && b ? [a, b] : [];
      }
      this.resetAndLoad();
    },
    /** 统一为 YYYY-MM-DD HH:mm:ss */normalizeDateTime: function normalizeDateTime(s) {
      if (s == null || s === '') return '';
      if (typeof s === 'number' && Number.isFinite(s)) {
        var d = new Date(s);
        if (Number.isNaN(d.getTime())) return '';
        return this.formatDateTimeLocal(d);
      }
      var t = String(s).trim().replace('T', ' ').replace(/\//g, '-');
      var m = t.match(/^(\d{4})-(\d{1,2})-(\d{1,2})(?:\s+(\d{1,2}):(\d{1,2})(?::(\d{1,2}))?)?/);
      if (!m) return '';
      var y = m[1];
      var mo = String(m[2]).padStart(2, '0');
      var da = String(m[3]).padStart(2, '0');
      var h = m[4] != null ? String(m[4]).padStart(2, '0') : '00';
      var mi = m[5] != null ? String(m[5]).padStart(2, '0') : '00';
      var se = m[6] != null ? String(m[6]).padStart(2, '0') : '00';
      return "".concat(y, "-").concat(mo, "-").concat(da, " ").concat(h, ":").concat(mi, ":").concat(se);
    },
    formatDateTimeLocal: function formatDateTimeLocal(d) {
      var y = d.getFullYear();
      var mo = String(d.getMonth() + 1).padStart(2, '0');
      var da = String(d.getDate()).padStart(2, '0');
      var h = String(d.getHours()).padStart(2, '0');
      var mi = String(d.getMinutes()).padStart(2, '0');
      var se = String(d.getSeconds()).padStart(2, '0');
      return "".concat(y, "-").concat(mo, "-").concat(da, " ").concat(h, ":").concat(mi, ":").concat(se);
    },
    onSearchConfirm: function onSearchConfirm() {
      this.resetAndLoad();
    },
    onScrollLower: function onScrollLower() {
      this.loadList();
    },
    resetAndLoad: function resetAndLoad() {
      this.finished = false;
      this.supplierList = [];
      this.loadList();
    },
    loadList: function loadList() {
      var _this = this;
      if (this.loading || this.finished) return;
      this.loading = true;
      /** 与约定一致：固定拉取日汇总第一页，取首条 supplierId 再请求 skuInfo */
      (0, _storeOrder.getDailySummaryList)(this, {
        pageNum: 1,
        pageSize: 10
      }).then(function (summaryRes) {
        var summaryRows = Array.isArray(summaryRes && summaryRes.rows) ? summaryRes.rows : [];
        var summary = summaryRows[0];
        if (!summary) {
          _this.supplierList = [];
          _this.finished = true;
          _this.activeSummary = null;
          return null;
        }
        _this.activeSummary = summary;
        var skuParams = {
          supplierId: summary.supplierId,
          deliveryDate: summary.deliveryDate,
          id: summary.id,
          summaryStatus: summary.summaryStatus
        };
        return (0, _storeOrder.getDailySummarySkuInfo)(_this, skuParams).then(function (skuRes) {
          return {
            summary: summary,
            skuRes: skuRes
          };
        });
      }).then(function (payload) {
        if (!payload) return;
        var summary = payload.summary,
          skuRes = payload.skuRes;
        var rawRows = Array.isArray(skuRes && skuRes.data) ? skuRes.data : [];
        var keyword = String(_this.keyword || '').trim().toLowerCase();
        var rows = keyword ? rawRows.filter(function (item) {
          var productName = String(item && item.productName || '').toLowerCase();
          var productNo = String(item && item.productNo || '').toLowerCase();
          return productName.includes(keyword) || productNo.includes(keyword);
        }) : rawRows;
        var mergedRows = _this.mergeSkuRowsByBarCode(rows);
        var group = _this.buildSupplierGroup(summary, mergedRows);
        _this.supplierList = group.goods.length ? [group] : [];
        _this.finished = true;
      }).catch(function () {}).finally(function () {
        _this.loading = false;
      });
    },
    /** 与 mapOrderItem 相同的条码归组键；无条码时按行 id 区分不合并 */skuRowMergeKey: function skuRowMergeKey(row, index) {
      var r = row || {};
      var raw = String(r.barCode || r.barcode || r.productNo || '').trim();
      return raw || "_id_".concat(String(r.id || r.productId || index));
    },
    /** 相同 barCode（及同义字段）的多行合并为一行展示，数量字段累加 */mergeSkuRowsByBarCode: function mergeSkuRowsByBarCode(rows) {
      var list = Array.isArray(rows) ? rows : [];
      var keyOrder = [];
      var groups = new Map();
      for (var i = 0; i < list.length; i++) {
        var row = list[i];
        var key = this.skuRowMergeKey(row, i);
        if (!groups.has(key)) {
          groups.set(key, []);
          keyOrder.push(key);
        }
        groups.get(key).push(row);
      }
      return keyOrder.map(function (key) {
        var group = groups.get(key) || [];
        if (group.length <= 1) return group[0];
        var base = _objectSpread({}, group[0]);
        var quantity = 0;
        var actualQuantity = 0;
        var shippedQty = 0;
        group.forEach(function (r) {
          quantity += Number(r && r.quantity) || 0;
          actualQuantity += Number(r && r.actualQuantity) || 0;
          shippedQty += Number(r && r.shippedQty) || 0;
        });
        base.quantity = quantity;
        base.actualQuantity = actualQuantity;
        base.shippedQty = shippedQty;
        base.__mergeSourceRows = group;
        var mergeFillKeys = ['level', 'productLevel', 'levelName', 'gradeName', 'levelTag', 'bizType', 'batchBizType', 'sourceTag'];
        group.slice(1).forEach(function (r) {
          mergeFillKeys.forEach(function (k) {
            var cur = base[k];
            var empty = cur == null || String(cur).trim() === '';
            var next = r && r[k];
            if (empty && next != null && String(next).trim() !== '') base[k] = next;
          });
        });
        return base;
      });
    },
    loadProductLevelDict: function loadProductLevelDict() {
      var _this2 = this;
      if (!this.token) {
        this.productLevelDict = [];
        return;
      }
      (0, _dict.getProductLevelList)(this).then(function (res) {
        _this2.productLevelDict = (0, _dict.normalizeDictList)(res);
      }).catch(function () {
        _this2.productLevelDict = [];
      });
    },
    pickSkuLevelCode: function pickSkuLevelCode(raw) {
      var it = raw || {};
      var v = function v(x) {
        return x == null || typeof x === 'string' && x.trim() === '' ? '' : String(x).trim();
      };
      var a = v(it.level);
      if (a !== '') return a;
      var b = v(it.productLevel);
      return b !== '' ? b : '';
    },
    matchLevelDictLabel: function matchLevelDictLabel(code) {
      var wanted = String(code || '').trim();
      var list = Array.isArray(this.productLevelDict) ? this.productLevelDict : [];
      if (!wanted || !list.length) return '';
      for (var i = 0; i < list.length; i++) {
        var row = list[i];
        var dv = (0, _dict.dictItemValue)(row);
        if (dv !== '' && dv === wanted) return (0, _dict.dictItemLabel)(row) || dv;
      }
      var nWant = Number(wanted);
      if (Number.isFinite(nWant)) {
        for (var j = 0; j < list.length; j++) {
          var row2 = list[j];
          var v2 = (0, _dict.dictItemValue)(row2);
          var nDict = Number(v2);
          if (Number.isFinite(nDict) && nDict === nWant) return (0, _dict.dictItemLabel)(row2) || v2;
        }
      }
      return '';
    },
    getLevelBadgeText: function getLevelBadgeText(mappedLine) {
      var it = mappedLine || {};
      var code = String(it.levelCode || '').trim();
      if (code !== '') {
        var mapped = this.matchLevelDictLabel(code);
        if (mapped) return mapped;
      }
      var legacy = String(it.levelTagLegacy || '').trim();
      if (legacy) return legacy;
      var nameFb = String(it.levelNameFallback || '').trim();
      return nameFb;
    },
    pickImageUrl: function pickImageUrl(raw) {
      if (raw == null) return '';
      if (typeof raw === 'string') {
        var s = raw.trim();
        if (!s) return '';
        if (/^https?:\/\//i.test(s)) return s;
        try {
          var parsed = JSON.parse(s);
          return this.pickImageUrl(parsed);
        } catch (e) {
          var matched = s.match(/https?:\/\/[^\s"'\\\]]+/i);
          if (matched && matched[0]) return matched[0];
          return '';
        }
      }
      if (Array.isArray(raw)) {
        if (!raw.length) return '';
        return this.pickImageUrl(raw[0]);
      }
      if ((0, _typeof2.default)(raw) === 'object') {
        var url = String(raw.url || raw.imageUrl || raw.pic || raw.mainPic || raw.productImage || raw.cover || '').trim();
        return /^https?:\/\//i.test(url) ? url : '';
      }
      return '';
    },
    mapOrderItem: function mapOrderItem(item) {
      var _ref,
        _ref2,
        _ref3,
        _item$storeId,
        _this3 = this;
      var pendingCount = Number(item && item.quantity || 0);
      // 接口约定：weight=净重，netWeight=毛重
      var netWeight = Number(item && item.weight || 0);
      var grossWeight = Number(item && item.netWeight || 0);
      var rowId = String(item && (item.id || item.productId || item.supplierOrderId || ''));
      var deliverQty = pendingCount > 0 ? pendingCount : 0;
      var barCode = String(item && (item.barCode || item.barcode || item.productNo) || '').trim();
      var orderId = String(item && (item.orderId || item.storeOrderId) || '').trim();
      var lineItemId = String(item && item.id || rowId).trim();
      var storeIdRaw = item && ((_ref = (_ref2 = (_ref3 = (_item$storeId = item.storeId) !== null && _item$storeId !== void 0 ? _item$storeId : item.cityStoreId) !== null && _ref3 !== void 0 ? _ref3 : item.storeID) !== null && _ref2 !== void 0 ? _ref2 : item.store_id) !== null && _ref !== void 0 ? _ref : null);
      var storeId = storeIdRaw == null || String(storeIdRaw).trim() === '' ? null : storeIdRaw;
      var mergedSources = Array.isArray(item && item.__mergeSourceRows) ? item.__mergeSourceRows : null;
      var out = {
        id: rowId,
        lineItemId: lineItemId,
        lineQuantity: pendingCount,
        barCode: barCode,
        orderId: orderId,
        storeId: storeId,
        deliveryId: String(item && (item.supplierOrderId || item.id || '')),
        name: item && (item.productName || item.supplierOrderNo || item.productNo) || '—',
        levelCode: this.pickSkuLevelCode(item),
        levelTagLegacy: item && item.levelTag != null ? String(item.levelTag).trim() : '',
        levelNameFallback: String(item && (item.levelName || item.gradeName) || '').trim(),
        sourceTag: item && item.sourceTag || '市采',
        pendingCount: pendingCount,
        loadedCount: Number(item && item.actualQuantity || 0),
        deliveringCount: Number(item && item.shippedQty || 0),
        grossWeight: grossWeight > 0 ? grossWeight : netWeight,
        netWeight: netWeight > 0 ? netWeight : grossWeight,
        price: item && item.price || '0.00',
        image: this.pickImageUrl(item && (item.image || item.sliderImage || item.imageUrl || item.pic || item.mainPic || item.productImage || item.cover)),
        deliverQty: deliverQty,
        checked: true
      };
      if (mergedSources && mergedSources.length > 1) {
        out.id = barCode ? "merge_".concat(barCode) : "merge_".concat(lineItemId);
        out._sourceMapped = mergedSources.map(function (r) {
          return _this3.mapOrderItem(r);
        });
      }
      return out;
    },
    getBarCodeStoreKey: function getBarCodeStoreKey(barCode, storeId) {
      var bar = String(barCode || '').trim();
      var sid = storeId == null || String(storeId).trim() === '' ? '_null' : String(storeId);
      return "".concat(bar, "@@").concat(sid);
    },
    /** 合并展示的一行在提交时按待送货占比拆回多行，保证 order/batch 明细 id 正确 */expandMergedLineForSubmit: function expandMergedLineForSubmit(g) {
      var subs = g && g._sourceMapped;
      if (!Array.isArray(subs) || subs.length <= 1) return [g];
      var cap = Math.min(Number(g.deliverQty) || 0, Number(g.pendingCount) || 0);
      var D = Math.max(0, cap);
      var totalP = subs.reduce(function (s, x) {
        return s + (Number(x && x.pendingCount) || 0);
      }, 0);
      if (totalP <= 0) {
        return subs.map(function (x) {
          return _objectSpread(_objectSpread({}, x), {}, {
            deliverQty: 0
          });
        });
      }
      var allocated = 0;
      return subs.map(function (x, idx) {
        var p = Number(x && x.pendingCount) || 0;
        var q = 0;
        if (idx === subs.length - 1) {
          q = D - allocated;
        } else {
          q = Math.floor(D * p / totalP);
          allocated += q;
        }
        return _objectSpread(_objectSpread({}, x), {}, {
          deliverQty: q
        });
      });
    },
    displayWeight: function displayWeight(w) {
      var n = Number(w);
      var v = n > 0 ? n : 40;
      return String(Math.round(v * 100) / 100);
    },
    buildSupplierGroup: function buildSupplierGroup(summary, rows) {
      var sid = String(summary && summary.supplierId || 'unknown');
      var sname = summary && summary.supplierName || '未知供应商';
      return {
        id: sid,
        name: sname,
        goods: (rows || []).map(this.mapOrderItem)
      };
    },
    isSupplierAllChecked: function isSupplierAllChecked(supplier) {
      if (!supplier.goods || !supplier.goods.length) return false;
      return supplier.goods.every(function (g) {
        return g.checked;
      });
    },
    toggleSupplierAll: function toggleSupplierAll(supplier) {
      var allChecked = this.isSupplierAllChecked(supplier);
      supplier.goods.forEach(function (g) {
        g.checked = !allChecked;
      });
      this.$forceUpdate();
    },
    toggleItem: function toggleItem(supplier, item) {
      item.checked = !item.checked;
      this.$forceUpdate();
    },
    decreaseQty: function decreaseQty(item) {
      var cur = Number(item && item.deliverQty) || 0;
      var max = Number(item && item.pendingCount) || 0;
      var min = max > 0 ? 1 : 0;
      var next = cur - 1;
      item.deliverQty = next >= min ? next : min;
      this.$forceUpdate();
    },
    increaseQty: function increaseQty(item) {
      var cur = Number(item && item.deliverQty) || 0;
      var max = Number(item && item.pendingCount) || 0;
      if (max > 0) {
        item.deliverQty = Math.min(cur + 1, max);
      } else {
        item.deliverQty = cur + 1;
      }
      this.$forceUpdate();
    },
    buildDeliveryOrderBatchBody: function buildDeliveryOrderBatchBody(summary, lines) {
      var _this4 = this;
      var batchNo = "BATCH_".concat(Date.now());
      var summaryId = String(summary && summary.id || '').trim();
      var supplierId = String(summary && summary.supplierId || '').trim();
      var supplierName = String(summary && summary.supplierName || '').trim();
      var byKey = new Map();
      (lines || []).forEach(function (g) {
        var bar = String(g.barCode || '').trim();
        var sid = g.storeId == null || String(g.storeId).trim() === '' ? null : g.storeId;
        var key = _this4.getBarCodeStoreKey(bar || "_id_".concat(String(g.lineItemId || g.id)), sid);
        if (!byKey.has(key)) byKey.set(key, {
          barCode: bar,
          storeId: sid,
          rows: []
        });
        byKey.get(key).rows.push(g);
      });
      var detailList = [];
      byKey.forEach(function (group) {
        var rs = group && group.rows || [];
        var fromRow = String(group && group.barCode || rs[0] && rs[0].barCode || '').trim();
        var barCode = fromRow || String(rs[0] && rs[0].name || '').trim() || String(rs[0] && rs[0].id ? rs[0].id : '').trim();
        var storeId = group && group.storeId != null && String(group.storeId).trim() !== '' ? group.storeId : null;
        var items = rs.map(function (g) {
          return {
            id: String(g.lineItemId || g.id),
            actualQuantity: Number(g.deliverQty) || 0,
            shippedQty: Number(g.deliveringCount) || 0,
            storeId: g.storeId == null || String(g.storeId).trim() === '' ? null : g.storeId
          };
        });
        var deliverNum = items.reduce(function (s, it) {
          return s + (Number(it.actualQuantity) || 0);
        }, 0);
        var quantity = rs.reduce(function (s, g) {
          return s + (Number(g.lineQuantity) || 0);
        }, 0) || deliverNum;
        detailList.push({
          barCode: barCode,
          storeId: storeId,
          deliverNum: deliverNum,
          quantity: quantity,
          items: items
        });
      });
      var seenOid = new Set();
      var orderIds = [];
      (lines || []).forEach(function (g) {
        var oid = String(g.deliveryId || g.orderId || g.id || '').trim();
        if (oid && !seenOid.has(oid)) {
          seenOid.add(oid);
          orderIds.push(oid);
        }
      });
      return {
        batchNo: batchNo,
        detailList: detailList,
        orderIds: orderIds,
        summaryId: summaryId,
        supplierId: supplierId,
        supplierName: supplierName
      };
    },
    onDeliver: function onDeliver() {
      var _this5 = this;
      return (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee() {
        var summary, lines, payload, hasMissingStore;
        return _regenerator.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                if (!_this5.submitting) {
                  _context.next = 2;
                  break;
                }
                return _context.abrupt("return");
              case 2:
                summary = _this5.activeSummary;
                if (!(!summary || String(summary.id || '').trim() === '')) {
                  _context.next = 6;
                  break;
                }
                uni.showToast({
                  title: '缺少日汇总信息',
                  icon: 'none'
                });
                return _context.abrupt("return");
              case 6:
                lines = [];
                _this5.supplierList.forEach(function (s) {
                  ;
                  (s.goods || []).forEach(function (g) {
                    if (!g.checked) return;
                    var parts = _this5.expandMergedLineForSubmit(g);
                    parts.forEach(function (line) {
                      var n = Number(line.deliverQty) || 0;
                      if (n <= 0) return;
                      lines.push(line);
                    });
                  });
                });
                if (!(lines.length === 0)) {
                  _context.next = 11;
                  break;
                }
                uni.showToast({
                  title: '请先选择商品',
                  icon: 'none'
                });
                return _context.abrupt("return");
              case 11:
                _this5.submitting = true;
                uni.showLoading({
                  title: '提交中...',
                  mask: true
                });
                _context.prev = 13;
                payload = _this5.buildDeliveryOrderBatchBody(summary, lines);
                hasMissingStore = (payload.detailList || []).some(function (detail) {
                  if (detail.storeId == null || String(detail.storeId).trim() === '') return true;
                  return (detail.items || []).some(function (it) {
                    return it.storeId == null || String(it.storeId).trim() === '';
                  });
                });
                if (!hasMissingStore) {
                  _context.next = 19;
                  break;
                }
                uni.showToast({
                  title: '存在未绑定城市仓的商品，请检查后再提交',
                  icon: 'none'
                });
                return _context.abrupt("return");
              case 19:
                _context.next = 21;
                return (0, _storeOrder.postOrderBatch)(_this5, payload);
              case 21:
                uni.showToast({
                  title: '操作成功',
                  icon: 'success'
                });
                setTimeout(function () {
                  uni.redirectTo({
                    url: '/sub-pages/supply/supplier-order?tabValue=0&fromDeliver=1'
                  });
                }, 2000);
                _context.next = 27;
                break;
              case 25:
                _context.prev = 25;
                _context.t0 = _context["catch"](13);
              case 27:
                _context.prev = 27;
                uni.hideLoading();
                _this5.submitting = false;
                return _context.finish(27);
              case 31:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, null, [[13, 25, 27, 31]]);
      }))();
    }
  }
};
exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 2)["default"]))

/***/ }),

/***/ 306:
/*!**************************************************************************************************************************************!*\
  !*** E:/project/yhlc-v1.0/agent-uniapp/sub-pages/supply/delivery-list.vue?vue&type=style&index=0&id=518d3f46&lang=scss&scoped=true& ***!
  \**************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_delivery_list_vue_vue_type_style_index_0_id_518d3f46_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/mini-css-extract-plugin/dist/loader.js??ref--8-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--8-oneOf-1-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-2!./node_modules/postcss-loader/src??ref--8-oneOf-1-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/sass-loader/dist/cjs.js??ref--8-oneOf-1-4!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-5!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./delivery-list.vue?vue&type=style&index=0&id=518d3f46&lang=scss&scoped=true& */ 307);
/* harmony import */ var _D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_delivery_list_vue_vue_type_style_index_0_id_518d3f46_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_delivery_list_vue_vue_type_style_index_0_id_518d3f46_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_delivery_list_vue_vue_type_style_index_0_id_518d3f46_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_delivery_list_vue_vue_type_style_index_0_id_518d3f46_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_delivery_list_vue_vue_type_style_index_0_id_518d3f46_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 307:
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js??ref--8-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--8-oneOf-1-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-2!./node_modules/postcss-loader/src??ref--8-oneOf-1-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/sass-loader/dist/cjs.js??ref--8-oneOf-1-4!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-5!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!E:/project/yhlc-v1.0/agent-uniapp/sub-pages/supply/delivery-list.vue?vue&type=style&index=0&id=518d3f46&lang=scss&scoped=true& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
    if(false) { var cssReload; }
  

/***/ })

},[[300,"common/runtime","common/vendor","sub-pages/supply/common/vendor"]]]);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/sub-pages/supply/delivery-list.js.map
},{isPage:true,isComponent:true,currentFile:'sub-pages/supply/delivery-list.js'});require("sub-pages/supply/delivery-list.js");$gwx3_XC_1=function(_,_v,_n,_p,_s,_wp,_wl,$gwn,$gwl,$gwh,wh,$gstack,$gwrt,gra,grb,TestTest,wfor,_ca,_da,_r,_rz,_o,_oz,_1,_1z,_2,_2z,_m,_mz,nv_getDate,nv_getRegExp,nv_console,nv_parseInt,nv_parseFloat,nv_isNaN,nv_isFinite,nv_decodeURI,nv_decodeURIComponent,nv_encodeURI,nv_encodeURIComponent,$gdc,nv_JSON,_af,_gv,_ai,_grp,_gd,_gapi,$ixc,_ic,_w,_ev,_tsd){return function(path,global){
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
var z=__WXML_GLOBAL__.ops_set.$gwx3_XC_1 || [];
function gz$gwx3_XC_1_1(){
if( __WXML_GLOBAL__.ops_cached.$gwx3_XC_1_1)return __WXML_GLOBAL__.ops_cached.$gwx3_XC_1_1
__WXML_GLOBAL__.ops_cached.$gwx3_XC_1_1=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'supply-goods-page data-v-216bdf5c'])
Z([3,'search-inputs data-v-216bdf5c'])
Z([3,'__l'])
Z([3,'search-icon data-v-216bdf5c'])
Z([3,'#999'])
Z([3,'18'])
Z([3,'search'])
Z([3,'0c108d2a-1'])
Z([[7],[3,'showSupplierSearch']])
Z(z[2])
Z(z[3])
Z(z[4])
Z(z[5])
Z(z[6])
Z([3,'0c108d2a-2'])
Z([3,'i'])
Z([3,'tab'])
Z([[7],[3,'tabs']])
Z([3,'value'])
Z([3,'__e'])
Z([[4],[[5],[[5],[[5],[1,'data-v-216bdf5c']],[1,'tab-item']],[[4],[[5],[[2,'?:'],[[2,'==='],[[7],[3,'tabIndex']],[[7],[3,'i']]],[1,'active'],[1,'']]]]]])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[[5],[1,'onTabClick']],[[4],[[5],[1,'$event']]]]]]]]]]])
Z([[7],[3,'i']])
Z([[2,'==='],[[7],[3,'tabIndex']],[[7],[3,'i']]])
Z([[7],[3,'isWarehouseTab']])
Z([[7],[3,'isProductAuditTab']])
Z(z[25])
Z(z[19])
Z(z[19])
Z([3,'list-scroll data-v-216bdf5c'])
Z([[4],[[5],[[5],[[4],[[5],[[5],[1,'scrolltolower']],[[4],[[5],[[4],[[5],[[5],[1,'onScrollToLower']],[[4],[[5],[1,'$event']]]]]]]]]],[[4],[[5],[[5],[1,'scroll']],[[4],[[5],[[4],[[5],[[5],[1,'onListScroll']],[[4],[[5],[1,'$event']]]]]]]]]]])
Z([[7],[3,'listScrollTop']])
Z([1,true])
Z([1,false])
Z([[2,'==='],[[6],[[7],[3,'$root']],[3,'g0']],[1,0]])
Z(z[2])
Z([3,'data-v-216bdf5c'])
Z([3,'clipboard'])
Z([[7],[3,'emptyStateText']])
Z([3,'0c108d2a-3'])
Z([[4],[[5],[[5],[[5],[1,'data-v-216bdf5c']],[1,'list-wrap']],[[4],[[5],[[2,'?:'],[[7],[3,'isProductAuditTab']],[1,'list-wrap--audit'],[1,'']]]]]])
Z([3,'__i2__'])
Z([3,'it'])
Z([[6],[[7],[3,'$root']],[3,'l0']])
Z([3,'goods-item data-v-216bdf5c'])
Z(z[25])
Z(z[19])
Z([[4],[[5],[[5],[[5],[1,'data-v-216bdf5c']],[1,'audit-select-wrap']],[[4],[[5],[[5],[[2,'?:'],[[6],[[7],[3,'it']],[3,'m0']],[1,'checked'],[1,'']]],[[2,'?:'],[[2,'!'],[[6],[[6],[[7],[3,'it']],[3,'$orig']],[3,'showAuditActionBtn']]],[1,'disabled'],[1,'']]]]]])
Z([[2,'||'],[[6],[[6],[[7],[3,'it']],[3,'$orig']],[3,'id']],[1,'']])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[[5],[1,'onToggleAuditSelectTap']],[[4],[[5],[1,'$event']]]]]]]]]]])
Z([[2,'?:'],[[6],[[6],[[7],[3,'it']],[3,'$orig']],[3,'showAuditActionBtn']],[1,'1'],[1,'0']])
Z([[6],[[7],[3,'it']],[3,'m1']])
Z([3,'goods-right data-v-216bdf5c'])
Z([[2,'!'],[[7],[3,'isProductAuditTab']]])
Z(z[53])
Z(z[53])
Z(z[53])
Z(z[53])
Z(z[25])
Z(z[25])
Z(z[25])
Z(z[25])
Z(z[25])
Z(z[25])
Z([[6],[[7],[3,'it']],[3,'m10']])
Z([[6],[[7],[3,'it']],[3,'m12']])
Z([[2,'&&'],[[7],[3,'isProductAuditTab']],[[6],[[6],[[7],[3,'it']],[3,'$orig']],[3,'rejectReason']]])
Z([[2,'&&'],[[7],[3,'isProductAuditTab']],[[6],[[6],[[7],[3,'it']],[3,'$orig']],[3,'showAuditActionBtn']]])
Z(z[53])
Z([3,'goods-actions data-v-216bdf5c'])
Z([[2,'||'],[[2,'||'],[[6],[[6],[[7],[3,'it']],[3,'$orig']],[3,'showApplyBtn']],[[6],[[6],[[7],[3,'it']],[3,'$orig']],[3,'showCancelBtn']]],[[6],[[6],[[7],[3,'it']],[3,'$orig']],[3,'showDownBtn']]])
Z([[6],[[6],[[7],[3,'it']],[3,'$orig']],[3,'showEditActionBtn']])
Z([[6],[[6],[[7],[3,'it']],[3,'$orig']],[3,'showDeleteBtn']])
Z([[6],[[7],[3,'$root']],[3,'g1']])
Z(z[53])
Z([[7],[3,'editPriceVisible']])
Z([[7],[3,'productAuditDialogVisible']])
Z(z[19])
Z([3,'dialog-mask data-v-216bdf5c'])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[[5],[1,'closeProductAuditDialog']],[[4],[[5],[1,'$event']]]]]]]]]]])
Z(z[19])
Z([3,'dialog-card data-v-216bdf5c'])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[[5],[1,'']],[[4],[[5],[1,'$event']]]]]]]]]]])
Z([3,'audit-detail-wrap data-v-216bdf5c'])
Z([[7],[3,'productAuditDetailLoading']])
Z([[7],[3,'productAuditDetailLoaded']])
Z([3,'audit-media-section data-v-216bdf5c'])
Z([[6],[[7],[3,'productAuditDetail']],[3,'videoUrl']])
Z(z[2])
Z([3,'audit-media-video data-v-216bdf5c'])
Z(z[87])
Z([3,'0c108d2a-4'])
Z([[2,'==='],[[6],[[7],[3,'productAuditForm']],[3,'auditStatus']],[1,'2']])
Z([[7],[3,'batchRejectDialogVisible']])
Z([3,'#ffffff'])
Z(z[2])
Z([3,'32rpx 32rpx 0 0'])
Z([3,'data-v-216bdf5c vue-ref'])
Z([3,'catePopup'])
Z(z[32])
Z([3,'rgba(0, 0, 0, 0.45)'])
Z([3,'bottom'])
Z([3,'0c108d2a-5'])
Z([[4],[[5],[1,'default']]])
})(__WXML_GLOBAL__.ops_cached.$gwx3_XC_1_1);return __WXML_GLOBAL__.ops_cached.$gwx3_XC_1_1
}
__WXML_GLOBAL__.ops_set.$gwx3_XC_1=z;
__WXML_GLOBAL__.ops_init.$gwx3_XC_1=true;
var x=['./sub-pages/supply/goods.wxml'];d_[x[0]]={}
var m0=function(e,s,r,gg){
var z=gz$gwx3_XC_1_1()
var o6=_n('view')
_rz(z,o6,'class',0,e,s,gg)
var aDB=_n('view')
_rz(z,aDB,'class',1,e,s,gg)
var eFB=_mz(z,'uni-icons',['bind:__l',2,'class',1,'color',2,'size',3,'type',4,'vueId',5],[],e,s,gg)
_(aDB,eFB)
var tEB=_v()
_(aDB,tEB)
if(_oz(z,8,e,s,gg)){tEB.wxVkey=1
var bGB=_mz(z,'uni-icons',['bind:__l',9,'class',1,'color',2,'size',3,'type',4,'vueId',5],[],e,s,gg)
_(tEB,bGB)
}
tEB.wxXCkey=1
tEB.wxXCkey=3
_(o6,aDB)
var oHB=_v()
_(o6,oHB)
var xIB=function(fKB,oJB,cLB,gg){
var oNB=_mz(z,'view',['bindtap',19,'class',1,'data-event-opts',2,'data-tab-index',3],[],fKB,oJB,gg)
var cOB=_v()
_(oNB,cOB)
if(_oz(z,23,fKB,oJB,gg)){cOB.wxVkey=1
}
cOB.wxXCkey=1
_(cLB,oNB)
return cLB
}
oHB.wxXCkey=2
_2z(z,17,xIB,e,s,gg,oHB,'tab','i','value')
var f7=_v()
_(o6,f7)
if(_oz(z,24,e,s,gg)){f7.wxVkey=1
}
var c8=_v()
_(o6,c8)
if(_oz(z,25,e,s,gg)){c8.wxVkey=1
}
var h9=_v()
_(o6,h9)
if(_oz(z,26,e,s,gg)){h9.wxVkey=1
}
var oPB=_mz(z,'scroll-view',['bindscroll',27,'bindscrolltolower',1,'class',2,'data-event-opts',3,'scrollTop',4,'scrollY',5,'showScrollbar',6],[],e,s,gg)
var lQB=_v()
_(oPB,lQB)
if(_oz(z,34,e,s,gg)){lQB.wxVkey=1
var aRB=_mz(z,'empty-state',['bind:__l',35,'class',1,'iconType',2,'text',3,'vueId',4],[],e,s,gg)
_(lQB,aRB)
}
else{lQB.wxVkey=2
var tSB=_n('view')
_rz(z,tSB,'class',40,e,s,gg)
var bUB=_v()
_(tSB,bUB)
var oVB=function(oXB,xWB,fYB,gg){
var h1B=_n('view')
_rz(z,h1B,'class',44,oXB,xWB,gg)
var o2B=_v()
_(h1B,o2B)
if(_oz(z,45,oXB,xWB,gg)){o2B.wxVkey=1
var c3B=_mz(z,'view',['catchtap',46,'class',1,'data-audit-id',2,'data-event-opts',3,'data-selectable',4],[],oXB,xWB,gg)
var o4B=_v()
_(c3B,o4B)
if(_oz(z,51,oXB,xWB,gg)){o4B.wxVkey=1
}
o4B.wxXCkey=1
_(o2B,c3B)
}
var l5B=_n('view')
_rz(z,l5B,'class',52,oXB,xWB,gg)
var a6B=_v()
_(l5B,a6B)
if(_oz(z,53,oXB,xWB,gg)){a6B.wxVkey=1
}
var t7B=_v()
_(l5B,t7B)
if(_oz(z,54,oXB,xWB,gg)){t7B.wxVkey=1
}
var e8B=_v()
_(l5B,e8B)
if(_oz(z,55,oXB,xWB,gg)){e8B.wxVkey=1
}
var b9B=_v()
_(l5B,b9B)
if(_oz(z,56,oXB,xWB,gg)){b9B.wxVkey=1
}
var o0B=_v()
_(l5B,o0B)
if(_oz(z,57,oXB,xWB,gg)){o0B.wxVkey=1
}
var xAC=_v()
_(l5B,xAC)
if(_oz(z,58,oXB,xWB,gg)){xAC.wxVkey=1
}
var oBC=_v()
_(l5B,oBC)
if(_oz(z,59,oXB,xWB,gg)){oBC.wxVkey=1
}
var fCC=_v()
_(l5B,fCC)
if(_oz(z,60,oXB,xWB,gg)){fCC.wxVkey=1
}
var cDC=_v()
_(l5B,cDC)
if(_oz(z,61,oXB,xWB,gg)){cDC.wxVkey=1
}
var hEC=_v()
_(l5B,hEC)
if(_oz(z,62,oXB,xWB,gg)){hEC.wxVkey=1
}
var oFC=_v()
_(l5B,oFC)
if(_oz(z,63,oXB,xWB,gg)){oFC.wxVkey=1
}
var cGC=_v()
_(l5B,cGC)
if(_oz(z,64,oXB,xWB,gg)){cGC.wxVkey=1
}
var oHC=_v()
_(l5B,oHC)
if(_oz(z,65,oXB,xWB,gg)){oHC.wxVkey=1
}
var lIC=_v()
_(l5B,lIC)
if(_oz(z,66,oXB,xWB,gg)){lIC.wxVkey=1
}
var aJC=_v()
_(l5B,aJC)
if(_oz(z,67,oXB,xWB,gg)){aJC.wxVkey=1
}
var tKC=_v()
_(l5B,tKC)
if(_oz(z,68,oXB,xWB,gg)){tKC.wxVkey=1
var eLC=_n('view')
_rz(z,eLC,'class',69,oXB,xWB,gg)
var bMC=_v()
_(eLC,bMC)
if(_oz(z,70,oXB,xWB,gg)){bMC.wxVkey=1
}
var oNC=_v()
_(eLC,oNC)
if(_oz(z,71,oXB,xWB,gg)){oNC.wxVkey=1
}
var xOC=_v()
_(eLC,xOC)
if(_oz(z,72,oXB,xWB,gg)){xOC.wxVkey=1
}
bMC.wxXCkey=1
oNC.wxXCkey=1
xOC.wxXCkey=1
_(tKC,eLC)
}
a6B.wxXCkey=1
t7B.wxXCkey=1
e8B.wxXCkey=1
b9B.wxXCkey=1
o0B.wxXCkey=1
xAC.wxXCkey=1
oBC.wxXCkey=1
fCC.wxXCkey=1
cDC.wxXCkey=1
hEC.wxXCkey=1
oFC.wxXCkey=1
cGC.wxXCkey=1
oHC.wxXCkey=1
lIC.wxXCkey=1
aJC.wxXCkey=1
tKC.wxXCkey=1
_(h1B,l5B)
o2B.wxXCkey=1
_(fYB,h1B)
return fYB
}
bUB.wxXCkey=2
_2z(z,43,oVB,e,s,gg,bUB,'it','__i2__','')
var eTB=_v()
_(tSB,eTB)
if(_oz(z,73,e,s,gg)){eTB.wxVkey=1
}
eTB.wxXCkey=1
_(lQB,tSB)
}
lQB.wxXCkey=1
lQB.wxXCkey=3
_(o6,oPB)
var o0=_v()
_(o6,o0)
if(_oz(z,74,e,s,gg)){o0.wxVkey=1
}
var cAB=_v()
_(o6,cAB)
if(_oz(z,75,e,s,gg)){cAB.wxVkey=1
}
var oBB=_v()
_(o6,oBB)
if(_oz(z,76,e,s,gg)){oBB.wxVkey=1
var oPC=_mz(z,'view',['bindtap',77,'class',1,'data-event-opts',2],[],e,s,gg)
var fQC=_mz(z,'view',['catchtap',80,'class',1,'data-event-opts',2],[],e,s,gg)
var hSC=_n('view')
_rz(z,hSC,'class',83,e,s,gg)
var oTC=_v()
_(hSC,oTC)
if(_oz(z,84,e,s,gg)){oTC.wxVkey=1
}
else{oTC.wxVkey=2
var cUC=_v()
_(oTC,cUC)
if(_oz(z,85,e,s,gg)){cUC.wxVkey=1
var oVC=_n('view')
_rz(z,oVC,'class',86,e,s,gg)
var lWC=_v()
_(oVC,lWC)
if(_oz(z,87,e,s,gg)){lWC.wxVkey=1
var aXC=_mz(z,'safe-video',['bind:__l',88,'class',1,'src',2,'vueId',3],[],e,s,gg)
_(lWC,aXC)
}
else{lWC.wxVkey=2
}
lWC.wxXCkey=1
lWC.wxXCkey=3
_(cUC,oVC)
}
else{cUC.wxVkey=2
}
cUC.wxXCkey=1
cUC.wxXCkey=3
}
oTC.wxXCkey=1
oTC.wxXCkey=3
_(fQC,hSC)
var cRC=_v()
_(fQC,cRC)
if(_oz(z,92,e,s,gg)){cRC.wxVkey=1
}
cRC.wxXCkey=1
_(oPC,fQC)
_(oBB,oPC)
}
var lCB=_v()
_(o6,lCB)
if(_oz(z,93,e,s,gg)){lCB.wxVkey=1
}
var tYC=_mz(z,'uni-popup',['backgroundColor',94,'bind:__l',1,'borderRadius',2,'class',3,'data-ref',4,'isMaskClick',5,'maskBackgroundColor',6,'type',7,'vueId',8,'vueSlots',9],[],e,s,gg)
_(o6,tYC)
f7.wxXCkey=1
c8.wxXCkey=1
h9.wxXCkey=1
o0.wxXCkey=1
cAB.wxXCkey=1
oBB.wxXCkey=1
oBB.wxXCkey=3
lCB.wxXCkey=1
_(r,o6)
return r
}
e_[x[0]]={f:m0,j:[],i:[],ti:[],ic:[]}
if(path&&e_[path]){
return function(env,dd,global){$gwxc=0;var root={"tag":"wx-page"};root.children=[]
;g="$gwx3_XC_1";var main=e_[path].f
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
}(__g.a,__g.b,__g.c,__g.d,__g.e,__g.f,__g.g,__g.h,__g.i,__g.j,__g.k,__g.l,__g.m,__g.n,__g.o,__g.p,__g.q,__g.r,__g.s,__g.t,__g.u,__g.v,__g.w,__g.x,__g.y,__g.z,__g.A,__g.B,__g.C,__g.D,__g.E,__g.F,__g.G,__g.H,__g.I,__g.J,__g.K,__g.L,__g.M,__g.N,__g.O,__g.P,__g.Q,__g.R,__g.S,__g.T,__g.U,__g.V,__g.W,__g.X,__g.Y,__g.Z,__g.aa);if(__vd_version_info__.delayedGwx||false)$gwx3_XC_1();	if (__vd_version_info__.delayedGwx) __wxAppCode__['sub-pages/supply/goods.wxml'] = [$gwx3_XC_1, './sub-pages/supply/goods.wxml'];else __wxAppCode__['sub-pages/supply/goods.wxml'] = $gwx3_XC_1( './sub-pages/supply/goods.wxml' );
	;__wxRoute = "sub-pages/supply/goods";__wxRouteBegin = true;__wxAppCurrentFile__="sub-pages/supply/goods.js";define("sub-pages/supply/goods.js",function(require,module,exports,window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){
require('./common/vendor.js');(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["sub-pages/supply/goods"],{

/***/ 286:
/*!***************************************************************************************!*\
  !*** E:/project/yhlc-v1.0/agent-uniapp/main.js?{"page":"sub-pages%2Fsupply%2Fgoods"} ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(wx, createPage) {

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ 4);
__webpack_require__(/*! uni-pages */ 30);
var _vue = _interopRequireDefault(__webpack_require__(/*! vue */ 25));
var _goods = _interopRequireDefault(__webpack_require__(/*! ./sub-pages/supply/goods.vue */ 287));
// @ts-ignore
wx.__webpack_require_UNI_MP_PLUGIN__ = __webpack_require__;
createPage(_goods.default);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/wx.js */ 1)["default"], __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 2)["createPage"]))

/***/ }),

/***/ 287:
/*!********************************************************************!*\
  !*** E:/project/yhlc-v1.0/agent-uniapp/sub-pages/supply/goods.vue ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _goods_vue_vue_type_template_id_216bdf5c_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./goods.vue?vue&type=template&id=216bdf5c&scoped=true& */ 288);
/* harmony import */ var _goods_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./goods.vue?vue&type=script&lang=js& */ 290);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _goods_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _goods_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _goods_vue_vue_type_style_index_0_id_216bdf5c_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./goods.vue?vue&type=style&index=0&id=216bdf5c&lang=scss&scoped=true& */ 292);
/* harmony import */ var _D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 39);

var renderjs





/* normalize component */

var component = Object(_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _goods_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _goods_vue_vue_type_template_id_216bdf5c_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _goods_vue_vue_type_template_id_216bdf5c_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "216bdf5c",
  null,
  false,
  _goods_vue_vue_type_template_id_216bdf5c_scoped_true___WEBPACK_IMPORTED_MODULE_0__["components"],
  renderjs
)

component.options.__file = "sub-pages/supply/goods.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 288:
/*!***************************************************************************************************************!*\
  !*** E:/project/yhlc-v1.0/agent-uniapp/sub-pages/supply/goods.vue?vue&type=template&id=216bdf5c&scoped=true& ***!
  \***************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_goods_vue_vue_type_template_id_216bdf5c_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--17-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./goods.vue?vue&type=template&id=216bdf5c&scoped=true& */ 289);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_goods_vue_vue_type_template_id_216bdf5c_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_goods_vue_vue_type_template_id_216bdf5c_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_goods_vue_vue_type_template_id_216bdf5c_scoped_true___WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_goods_vue_vue_type_template_id_216bdf5c_scoped_true___WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),

/***/ 289:
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--17-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!E:/project/yhlc-v1.0/agent-uniapp/sub-pages/supply/goods.vue?vue&type=template&id=216bdf5c&scoped=true& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return recyclableRender; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "components", function() { return components; });
var components
try {
  components = {
    uniIcons: function () {
      return Promise.all(/*! import() | uni_modules/uni-icons/components/uni-icons/uni-icons */[__webpack_require__.e("common/vendor"), __webpack_require__.e("uni_modules/uni-icons/components/uni-icons/uni-icons")]).then(__webpack_require__.bind(null, /*! @/uni_modules/uni-icons/components/uni-icons/uni-icons.vue */ 520))
    },
    safeVideo: function () {
      return __webpack_require__.e(/*! import() | components/safe-video/safe-video */ "components/safe-video/safe-video").then(__webpack_require__.bind(null, /*! @/components/safe-video/safe-video.vue */ 549))
    },
    uniPopup: function () {
      return __webpack_require__.e(/*! import() | components/uni-popup/uni-popup */ "components/uni-popup/uni-popup").then(__webpack_require__.bind(null, /*! @/components/uni-popup/uni-popup.vue */ 506))
    },
  }
} catch (e) {
  if (
    e.message.indexOf("Cannot find module") !== -1 &&
    e.message.indexOf(".vue") !== -1
  ) {
    console.error(e.message)
    console.error("1. 排查组件名称拼写是否正确")
    console.error(
      "2. 排查组件是否符合 easycom 规范，文档：https://uniapp.dcloud.net.cn/collocation/pages?id=easycom"
    )
    console.error(
      "3. 若组件不符合 easycom 规范，需手动引入，并在 components 中注册该组件"
    )
  } else {
    throw e
  }
}
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  var g0 = _vm.displayList.length
  var l0 = !(g0 === 0)
    ? _vm.__map(_vm.displayList, function (it, __i2__) {
        var $orig = _vm.__get_orig(it)
        var m0 = _vm.isProductAuditTab ? _vm.isAuditSelected(it.id) : null
        var m1 = _vm.isProductAuditTab ? _vm.isAuditSelected(it.id) : null
        var m2 = !_vm.isProductAuditTab
          ? _vm.formatMoney(it.currentPrice)
          : null
        var m3 = !_vm.isProductAuditTab
          ? _vm.formatStock(it.currentStock)
          : null
        var m4 = _vm.isProductAuditTab ? _vm.formatMoney(it.currentPrice) : null
        var m5 = _vm.isProductAuditTab ? _vm.formatMoney(it.applyPrice) : null
        var m6 = _vm.isProductAuditTab
          ? _vm.formatAuditGradeText(it.levelCode)
          : null
        var m7 = _vm.isProductAuditTab
          ? _vm.productAuditStatusClass(it.auditStatus)
          : null
        var m8 = !_vm.isProductAuditTab
          ? _vm.stockStatusClass(it.status, it.modifyAuditPending)
          : null
        var m9 = !_vm.isProductAuditTab
          ? _vm.stockStatusText(it.status, it.modifyAuditPending)
          : null
        var m10 = _vm.isProductAuditTab && _vm.applyAuditTypeText(it.applyType)
        var m11 = m10 ? _vm.applyAuditTypeText(it.applyType) : null
        var m12 =
          !_vm.isProductAuditTab && Number(it.status) === 0 && it.updateTime
        var m13 = m12 ? _vm.formatOffShelfDate(it.updateTime) : null
        return {
          $orig: $orig,
          m0: m0,
          m1: m1,
          m2: m2,
          m3: m3,
          m4: m4,
          m5: m5,
          m6: m6,
          m7: m7,
          m8: m8,
          m9: m9,
          m10: m10,
          m11: m11,
          m12: m12,
          m13: m13,
        }
      })
    : null
  var g1 = !(g0 === 0)
    ? _vm.displayList.length > 0 && _vm.warehouseNoMore
    : null
  var g2 = _vm.editPriceVisible
    ? Number.isFinite(Number(_vm.editPriceForm.currentPrice))
    : null
  var g3 =
    _vm.editPriceVisible && g2
      ? Number(_vm.editPriceForm.currentPrice).toFixed(2)
      : null
  var g4 = _vm.editPriceVisible
    ? Number.isFinite(Number(_vm.editPriceForm.currentStock))
    : null
  var m14 =
    _vm.editPriceVisible && g4 ? Number(_vm.editPriceForm.currentStock) : null
  var m15 =
    _vm.productAuditDialogVisible &&
    !_vm.productAuditDetailLoading &&
    _vm.productAuditDetailLoaded
      ? _vm.formatAuditGradeText(_vm.productAuditDetail.productGrade)
      : null
  var m16 =
    _vm.productAuditDialogVisible &&
    !_vm.productAuditDetailLoading &&
    _vm.productAuditDetailLoaded
      ? _vm.formatMoney(_vm.productAuditDetail.currentPrice)
      : null
  var m17 =
    _vm.productAuditDialogVisible &&
    !_vm.productAuditDetailLoading &&
    _vm.productAuditDetailLoaded
      ? _vm.formatStock(_vm.productAuditDetail.currentStock)
      : null
  var g5 =
    _vm.productAuditDialogVisible &&
    !_vm.productAuditDetailLoading &&
    _vm.productAuditDetailLoaded
      ? _vm.productAuditDetail.sliderImageUrls.length
      : null
  var g6 = !!_vm.categoryListLoaded ? _vm.mainCategories.length : null
  if (!_vm._isMounted) {
    _vm.e0 = function ($event) {
      _vm.productAuditForm.auditStatus = "1"
    }
    _vm.e1 = function ($event) {
      _vm.productAuditForm.auditStatus = "2"
    }
  }
  _vm.$mp.data = Object.assign(
    {},
    {
      $root: {
        g0: g0,
        l0: l0,
        g1: g1,
        g2: g2,
        g3: g3,
        g4: g4,
        m14: m14,
        m15: m15,
        m16: m16,
        m17: m17,
        g5: g5,
        g6: g6,
      },
    }
  )
}
var recyclableRender = false
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ 290:
/*!*********************************************************************************************!*\
  !*** E:/project/yhlc-v1.0/agent-uniapp/sub-pages/supply/goods.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_goods_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--13-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./goods.vue?vue&type=script&lang=js& */ 291);
/* harmony import */ var _D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_goods_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_goods_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_goods_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_goods_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_goods_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 291:
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--13-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!E:/project/yhlc-v1.0/agent-uniapp/sub-pages/supply/goods.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(uni) {

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ 4);
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _slicedToArray2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ 5));
var _typeof2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/typeof */ 13));
var _toConsumableArray2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/toConsumableArray */ 18));
var _defineProperty2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/defineProperty */ 11));
var _vuex = __webpack_require__(/*! vuex */ 34);
var _storage = __webpack_require__(/*! @/api/storage.js */ 78);
var _product = __webpack_require__(/*! @/api/product.js */ 79);
var _dict = __webpack_require__(/*! @/api/dict.js */ 271);
var _userRoleKeys = __webpack_require__(/*! @/utils/userRoleKeys.js */ 142);
var _Object$freeze;
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0, _defineProperty2.default)(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
var EmptyState = function EmptyState() {
  __webpack_require__.e(/*! require.ensure | components/empty-state */ "components/empty-state").then((function () {
    return resolve(__webpack_require__(/*! @/components/empty-state.vue */ 542));
  }).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
};
var uniPopup = function uniPopup() {
  __webpack_require__.e(/*! require.ensure | uni_modules/uni-popup/components/uni-popup/uni-popup */ "uni_modules/uni-popup/components/uni-popup/uni-popup").then((function () {
    return resolve(__webpack_require__(/*! @/uni_modules/uni-popup/components/uni-popup/uni-popup.vue */ 513));
  }).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
};
/**
 * 总仓库存列表项 status（storage/stock/list）
 * 与后台供货商品表「销售状态」及主操作一致：
 * - 下架 → 0 → 申请上架
 * - 在售 → 1 → 申请下架
 * - 待上架审核 → 2 → 撤销申请
 * - 待下架审核 → 3 → 撤销申请（cancelStockApply）
 */
var WAREHOUSE_STOCK_STATUS = Object.freeze({
  /** 销售状态：下架；主操作：申请上架 */
  CAN_APPLY_LISTING: 0,
  /** 销售状态：在售；主操作：申请下架 */
  CAN_APPLY_OFF_SHELF: 1,
  /** 销售状态：待上架审核；主操作：撤销申请 */
  CAN_REVOKE_APPLY: 2,
  /** 销售状态：待下架审核；主操作：撤销申请（cancelStockApply） */
  PENDING_OFF_SHELF_AUDIT: 3
});

/** applyStockStatus 入参 applyStatus */
var STOCK_APPLY_ACTION = Object.freeze({
  /** 发起申请上架 */
  APPLY_LISTING: 1,
  /** 发起申请下架 */
  APPLY_OFF_SHELF: 2
});

/** 与后台 dict product_shelf_checkstatus 一致 */
var PRODUCT_AUDIT_STATUS_LABEL = Object.freeze((_Object$freeze = {
  0: '待审核',
  1: '已通过',
  2: '已驳回',
  3: '已撤回'
}, (0, _defineProperty2.default)(_Object$freeze, "0", '待审核'), (0, _defineProperty2.default)(_Object$freeze, "1", '已通过'), (0, _defineProperty2.default)(_Object$freeze, "2", '已驳回'), (0, _defineProperty2.default)(_Object$freeze, "3", '已撤回'), _Object$freeze));
var GOODS_AUDIT_RETURN_CTX_KEY = 'SUPPLY_GOODS_AUDIT_RETURN_CTX';
var _default = {
  components: {
    EmptyState: EmptyState,
    uniPopup: uniPopup
  },
  data: function data() {
    return {
      keyword: '',
      /** 已提交给接口的 keyword，分页与刷新均以此为准 */
      searchKeyword: '',
      /** 供应商名称输入框 v-model */
      supplierNameInput: '',
      /** 已提交给接口的供应商名称，分页与刷新均以此为准 */
      searchSupplierName: '',
      tabIndex: 0,
      warehouseList: [],
      loading: false,
      applyingId: '',
      deletingId: '',
      warehousePageNum: 1,
      warehousePageSize: 10,
      warehouseTotal: 0,
      warehouseLoading: false,
      warehouseNoMore: false,
      pageScrollTop: 0,
      listScrollTop: 0,
      /** 审核商品筛选（列表固定只查待审核单）：''全部 / 'apply:1'上架审核 / 'apply:2'下架审核 */
      auditStatusFilter: '',
      /** 总仓商品操作筛选：''全部 / '0'可申请上架(已下架) / '1'可下架(在售) */
      warehouseStatusFilter: '',
      selectedAuditIds: [],
      batchAuditSubmitting: false,
      /** 一键驳回弹窗 */
      batchRejectDialogVisible: false,
      batchRejectReason: '',
      restoringAuditReturn: false,
      editPriceVisible: false,
      editPriceSubmitting: false,
      editPriceForm: {
        id: '',
        productId: '',
        productName: '',
        currentPrice: '',
        currentStock: '',
        modifyPriceStr: '',
        modifyStockStr: '',
        applyRemark: ''
      },
      productAuditDialogVisible: false,
      productAuditSubmitting: false,
      productAuditDetailLoading: false,
      productAuditDetailLoaded: false,
      productAuditDetailError: '',
      productAuditDetail: {
        productId: '',
        productName: '',
        productNo: '',
        keyword: '',
        unitName: '',
        saleStockType: '',
        minimumOrderQuantity: '',
        productBrand: '',
        productGrade: '',
        productPackage: '',
        productOrigin: '',
        productImage: '',
        storeInfo: '',
        description: '',
        currentPrice: '',
        currentStock: '',
        weight: '',
        netWeight: '',
        mainImageUrl: '',
        sliderImageUrls: [],
        videoUrl: '',
        inspectionReportUrl: ''
      },
      productAuditForm: {
        id: '',
        productId: '',
        productName: '',
        auditStatus: '1',
        rejectReason: ''
      },
      categoryTree: [],
      categoryListLoaded: false,
      catePopupMainIndex: 0,
      catePopupSubIndex: -1,
      selectedMainIndex: -1,
      selectedSubIndex: -1,
      /** 品级字典 product_level_list，level 数值 → 展示文案 */
      productLevelDict: []
    };
  },
  onLoad: function onLoad() {
    this.loadPageData();
    this.loadCategoryList();
    this.loadProductLevelDict();
  },
  onShow: function onShow() {
    this.tryRestoreAuditReturnContext();
  },
  onPageScroll: function onPageScroll(e) {},
  onReachBottom: function onReachBottom() {},
  computed: _objectSpread(_objectSpread({}, (0, _vuex.mapState)(['userInfo'])), {}, {
    isPurchaser: function isPurchaser() {
      return (0, _userRoleKeys.hasProcurementRole)(this.userInfo);
    },
    isAdminRole: function isAdminRole() {
      return (0, _userRoleKeys.hasAdminRole)(this.userInfo);
    },
    /** 「审核商品」Tab 仅采控(cg)和管理员(admin) 可见 */canViewProductAuditTab: function canViewProductAuditTab() {
      return this.isPurchaser || this.isAdminRole;
    },
    /**
     * 供应商角色：后端 KxStockController.list 会强制 defaultSupplierId = 自己的 id，
     * 货架上只有自己的货，按供应商名搜索无意义 -> 隐藏供应商输入框。
     */
    isSupplier: function isSupplier() {
      return (0, _userRoleKeys.hasSupplierRole)(this.userInfo);
    },
    /**
     * 供应商名称搜索框显示条件：
     *   仅采购(cg)/城市仓(11num)/admin 可见；供应商(gys) 自己只能看自己的货，隐藏。
     *   各 tab（含「审核商品」）均生效：后端 /product/audit/list 的 buildQueryWrapper 已支持 supplierName 过滤。
     */
    showSupplierSearch: function showSupplierSearch() {
      return !this.isSupplier;
    },
    /**
     * 下架操作文案：
     *   采控(cg) -> "下架"（后端 selectByUserId null 直接生效，不走审核）
     *   供应商(gys) -> "申请下架"（走审核流程）
     * admin 端在 kxmall-admin-ui，文案独立处理。
     */
    offShelfText: function offShelfText() {
      return this.isPurchaser ? '下架' : '申请下架';
    },
    /** 采控(cg)/管理员(admin)：「审核商品」Tab（见后台 product/audit）；不显示「待审核」（与审核商品职责重叠） */tabs: function tabs() {
      var base = [{
        label: '总仓商品',
        value: 'warehouse'
      }, {
        label: '待审核',
        value: 'pending'
      }, {
        label: '在售',
        value: 'onsale'
      }, {
        label: '已下架',
        value: 'off'
      }];
      if (!this.canViewProductAuditTab) return base;
      return [{
        label: '总仓商品',
        value: 'warehouse'
      }, {
        label: '审核商品',
        value: 'product_audit'
      }, {
        label: '在售',
        value: 'onsale'
      }, {
        label: '已下架',
        value: 'off'
      }];
    },
    isWarehouseTab: function isWarehouseTab() {
      var tab = this.tabs[this.tabIndex] || {};
      return tab.value === 'warehouse';
    },
    isProductAuditTab: function isProductAuditTab() {
      var tab = this.tabs[this.tabIndex] || {};
      return tab.value === 'product_audit';
    },
    warehouseStatusOptions: function warehouseStatusOptions() {
      return [{
        label: '全部',
        value: ''
      }, {
        label: '申请上架',
        value: String(WAREHOUSE_STOCK_STATUS.CAN_APPLY_LISTING)
      }, {
        label: '下架',
        value: String(WAREHOUSE_STOCK_STATUS.CAN_APPLY_OFF_SHELF)
      }];
    },
    emptyStateText: function emptyStateText() {
      if (this.searchKeyword) return '暂无匹配数据';
      if (this.searchSupplierName && !this.isProductAuditTab) return '暂无匹配数据';
      return '暂无数据';
    },
    displayList: function displayList() {
      return this.warehouseList || [];
    },
    auditSelectableIds: function auditSelectableIds() {
      return (this.displayList || []).filter(function (it) {
        return it && it.showAuditActionBtn && it.id;
      }).map(function (it) {
        return String(it.id);
      });
    },
    auditSelectableCount: function auditSelectableCount() {
      return this.auditSelectableIds.length;
    },
    selectedAuditCount: function selectedAuditCount() {
      return (this.selectedAuditIds || []).length;
    },
    isAllCurrentAuditSelected: function isAllCurrentAuditSelected() {
      var _this = this;
      var ids = this.auditSelectableIds;
      if (!ids.length) return false;
      return ids.every(function (id) {
        return (_this.selectedAuditIds || []).includes(id);
      });
    },
    auditStatusOptions: function auditStatusOptions() {
      return [{
        label: '全部',
        value: ''
      }, {
        label: '上架审核',
        value: 'apply:1'
      }, {
        label: '下架审核',
        value: 'apply:2'
      }];
    },
    mainCategories: function mainCategories() {
      return Array.isArray(this.categoryTree) ? this.categoryTree : [];
    },
    catePopupSubList: function catePopupSubList() {
      var node = this.mainCategories[this.catePopupMainIndex];
      return node && Array.isArray(node.children) ? node.children : [];
    },
    selectedMainNode: function selectedMainNode() {
      if (this.selectedMainIndex < 0) return null;
      return this.mainCategories[this.selectedMainIndex] || null;
    },
    selectedSubNode: function selectedSubNode() {
      var main = this.selectedMainNode;
      if (!main) return null;
      if (this.selectedSubIndex < 0) return null;
      var children = Array.isArray(main.children) ? main.children : [];
      return children[this.selectedSubIndex] || null;
    },
    hasCateFilter: function hasCateFilter() {
      return this.selectedMainIndex >= 0;
    },
    selectedCateIds: function selectedCateIds() {
      var _this2 = this;
      if (!this.hasCateFilter) return [];
      var main = this.selectedMainNode;
      if (!main) return [];
      if (this.selectedSubIndex >= 0 && this.selectedSubNode) {
        return this.collectCategoryIds(this.selectedSubNode);
      }
      var children = Array.isArray(main.children) ? main.children : [];
      var ids = [];
      children.forEach(function (c) {
        ids.push.apply(ids, (0, _toConsumableArray2.default)(_this2.collectCategoryIds(c)));
      });
      return ids;
    },
    selectedCateSummary: function selectedCateSummary() {
      if (!this.hasCateFilter) return '品类';
      var main = this.selectedMainNode;
      if (!main) return '品类';
      var sub = this.selectedSubNode;
      if (sub) return "".concat(main.cateName, "/").concat(sub.cateName);
      return "".concat(main.cateName, "/\u5168\u90E8");
    }
  }),
  methods: {
    /**
     * 与 storage/stock/list 的 status 一致：全部不传筛选时传空字符串（见 pages/product/product1.vue）
     */
    stockListQueryParams: function stockListQueryParams(statusOverride) {
      var tab = this.tabs[this.tabIndex] || {};
      var value = tab.value;
      var status = '';
      if (value === 'warehouse') status = this.warehouseStatusFilter;else if (value === 'pending') status = WAREHOUSE_STOCK_STATUS.CAN_REVOKE_APPLY;else if (value === 'onsale') status = WAREHOUSE_STOCK_STATUS.CAN_APPLY_OFF_SHELF;else if (value === 'off') status = WAREHOUSE_STOCK_STATUS.CAN_APPLY_LISTING;
      if (statusOverride !== undefined) status = statusOverride;
      var supplierName = String(this.searchSupplierName || '').trim();
      var params = {
        pageNum: this.warehousePageNum,
        pageSize: this.warehousePageSize,
        keyword: String(this.searchKeyword || '').trim(),
        status: status === '' ? '' : String(status)
      };
      if (supplierName) params.defaultSupplier = supplierName;
      if (this.selectedCateIds.length) params.cateIds = this.selectedCateIds.join(',');
      return params;
    },
    isPendingTab: function isPendingTab() {
      var tab = this.tabs[this.tabIndex] || {};
      return tab.value === 'pending';
    },
    /**
     * 商品审核单列表（GET /product/audit/list），筛选项与后台 product/audit 对齐；纯数字 keyword 按商品 ID 查。
     * supplierName 走后端 ProductAuditServiceImpl.applySupplierNameFilter（biz_supplier_name LIKE -> supplierId in (...)）。
     */
    auditListQueryParams: function auditListQueryParams() {
      var kw = String(this.searchKeyword || '').trim();
      var params = {
        pageNum: this.warehousePageNum,
        pageSize: this.warehousePageSize
      };
      // 审核商品是待办队列：一律只查待审核单，已通过/已驳回/已撤回不在此展示（历史记录看后台 product/audit）
      var auditFilter = String(this.auditStatusFilter || '').trim();
      if (auditFilter === '0') auditFilter = '';
      if (auditFilter === 'apply:1' || auditFilter === 'apply:2') {
        params.applyType = auditFilter.slice('apply:'.length);
      }
      params.auditStatus = '0';
      var supplierName = String(this.searchSupplierName || '').trim();
      if (supplierName) params.supplierName = supplierName;
      if (kw) {
        if (/^\d+$/.test(kw)) params.productId = kw;else params.storeName = kw;
      }
      if (this.selectedCateIds.length) params.cateIds = this.selectedCateIds.join(',');
      return params;
    },
    onAuditFilterClick: function onAuditFilterClick(value) {
      var nextValue = String(value == null ? '' : value).trim();
      if (nextValue === this.auditStatusFilter) return;
      this.auditStatusFilter = nextValue;
      this.clearBatchAuditSelection();
      uni.showLoading({
        title: '加载中...',
        mask: true
      });
      this.loadWarehouseFirstPage().catch(function () {}).finally(function () {
        uni.hideLoading();
      });
    },
    onWarehouseStatusFilterClick: function onWarehouseStatusFilterClick(value) {
      var nextValue = String(value == null ? '' : value);
      if (nextValue === String(this.warehouseStatusFilter || '')) return;
      this.warehouseStatusFilter = nextValue;
      uni.showLoading({
        title: '加载中...',
        mask: true
      });
      this.loadWarehouseFirstPage().catch(function () {}).finally(function () {
        uni.hideLoading();
      });
    },
    productAuditStatusClass: function productAuditStatusClass(auditStatus) {
      var v = Number(auditStatus);
      if (v === 0) return 'audit-status-pending';
      if (v === 1) return 'audit-status-pass';
      if (v === 2) return 'audit-status-reject';
      if (v === 3) return 'audit-status-revoke';
      return 'audit-status-unknown';
    },
    /** 审核类型文案：1-上架审核，2-下架审核；其余返回空串不展示 */applyAuditTypeText: function applyAuditTypeText(applyType) {
      var v = Number(applyType);
      if (v === 1) return '上架审核';
      if (v === 2) return '下架审核';
      return '';
    },
    buildAuditList: function buildAuditList(rows) {
      var _this3 = this;
      return (rows || []).map(function (it) {
        return _this3.normalizeAuditItem(it);
      });
    },
    loadProductLevelDict: function loadProductLevelDict() {
      var _this4 = this;
      var token = this.$store && this.$store.state ? this.$store.state.token : '';
      if (!token) {
        this.productLevelDict = [];
        return;
      }
      (0, _dict.getProductLevelList)(this).then(function (res) {
        _this4.productLevelDict = (0, _dict.normalizeDictList)(res);
      }).catch(function () {
        _this4.productLevelDict = [];
      });
    },
    /** level 数值 → 品级文案（product_level_list），与 delivery-list 同口径 */matchLevelDictLabel: function matchLevelDictLabel(code) {
      var wanted = String(code || '').trim();
      var list = Array.isArray(this.productLevelDict) ? this.productLevelDict : [];
      if (!wanted || !list.length) return '';
      for (var i = 0; i < list.length; i++) {
        var row = list[i];
        var dv = (0, _dict.dictItemValue)(row);
        if (dv !== '' && dv === wanted) return (0, _dict.dictItemLabel)(row) || dv;
      }
      var nWant = Number(wanted);
      if (Number.isFinite(nWant)) {
        for (var j = 0; j < list.length; j++) {
          var row2 = list[j];
          var v2 = (0, _dict.dictItemValue)(row2);
          var nDict = Number(v2);
          if (Number.isFinite(nDict) && nDict === nWant) return (0, _dict.dictItemLabel)(row2) || v2;
        }
      }
      return '';
    },
    /** 品级展示文案：level 数值经字典转换；未命中字典的数字码显示 --，文本原样返回 */formatAuditGradeText: function formatAuditGradeText(code) {
      var c = String(code == null ? '' : code).trim();
      if (c === '') return '--';
      var mapped = this.matchLevelDictLabel(c);
      if (mapped) return mapped;
      return /^\d+$/.test(c) ? '--' : c;
    },
    normalizeAuditItem: function normalizeAuditItem(it) {
      var applyTypeRaw = (0, _storage.pickFirstField)(it, ['applyType', 'apply_type']);
      var auditStatusRaw = (0, _storage.pickFirstField)(it, ['auditStatus', 'audit_status']);
      var auditStatusNum = Number(auditStatusRaw);
      var showAuditActionBtn = auditStatusRaw !== null && auditStatusRaw !== undefined && auditStatusRaw !== '' && !Number.isNaN(auditStatusNum) && auditStatusNum === 0;
      var auditKey = auditStatusRaw != null && auditStatusRaw !== '' ? String(auditStatusRaw) : '';
      var auditStatus = auditStatusRaw !== null && auditStatusRaw !== '' && !Number.isNaN(auditStatusNum) ? auditStatusNum : auditStatusRaw;
      var price = (0, _storage.pickFirstField)(it, ['price', 'currentPrice', 'salePrice']);
      var applyPrice = (0, _storage.pickFirstField)(it, ['applyPrice', 'apply_price']);
      var weight = (0, _storage.pickFirstField)(it, ['weight', 'netWeight']);
      var applyTimeRaw = (0, _storage.pickFirstField)(it, ['applyTime', 'apply_time', 'createTime']) || '';
      var applyTimeText = typeof applyTimeRaw === 'string' ? applyTimeRaw.trim() || '—' : applyTimeRaw != null ? String(applyTimeRaw) : '—';
      var rejectReason = String((0, _storage.pickFirstField)(it, ['rejectReason', 'reject_reason', 'checkNoPassReason']) || '').trim();
      var auditStatusLabel = PRODUCT_AUDIT_STATUS_LABEL[auditKey] || (auditKey !== '' ? auditKey : '—');
      // 净重价（单斤价）按审核口径：申请售价优先，无申请价（如上架/下架审核）退回当前售价
      var basePrice = applyPrice !== '' && applyPrice != null ? applyPrice : price;
      var pricePerJin = this.calcPricePerJinDisplay(basePrice, weight);
      var levelCode = (0, _storage.pickFirstField)(it, ['level', 'productLevel']);
      return _objectSpread(_objectSpread({}, it), {}, {
        id: it && it.id != null ? String(it.id) : '',
        productId: String((0, _storage.pickFirstField)(it, ['productId', 'product_id', 'storeProductId', 'store_product_id']) || ''),
        productName: it && it.productName || '',
        productImage: this.pickImageUrl((0, _storage.pickFirstField)(it, ['image', 'sliderImage', 'imageUrl', 'pic', 'mainPic', 'productImage', 'cover'])),
        currentPrice: price,
        applyPrice: applyPrice,
        weight: weight,
        pricePerJin: pricePerJin,
        levelCode: levelCode,
        productBrand: '',
        applyType: applyTypeRaw,
        auditStatus: auditStatus,
        auditStatusLabel: auditStatusLabel,
        applyUserName: String((0, _storage.pickFirstField)(it, ['applyUserName', 'apply_user_name']) || '').trim(),
        applyTimeText: applyTimeText,
        rejectReason: rejectReason,
        showApplyBtn: false,
        showCancelBtn: false,
        showDownBtn: false,
        showEditActionBtn: false,
        showAuditActionBtn: showAuditActionBtn
      });
    },
    onSearchConfirm: function onSearchConfirm() {
      this.searchKeyword = String(this.keyword || '').trim();
      this.searchSupplierName = String(this.supplierNameInput || '').trim();
      this.clearBatchAuditSelection();
      uni.showLoading({
        title: '加载中...',
        mask: true
      });
      this.loadWarehouseFirstPage().catch(function () {}).finally(function () {
        uni.hideLoading();
      });
    },
    onTabClick: function onTabClick(e) {
      var i = Number(e && e.currentTarget && e.currentTarget.dataset ? e.currentTarget.dataset.tabIndex : 0);
      this.tabIndex = Number.isFinite(i) ? i : 0;
      this.clearBatchAuditSelection();
      uni.showLoading({
        title: '加载中...',
        mask: true
      });
      this.loadWarehouseFirstPage().catch(function () {}).finally(function () {
        uni.hideLoading();
      });
    },
    loadCategoryList: function loadCategoryList() {
      var _this5 = this;
      if (this.categoryListLoaded) return Promise.resolve(this.categoryTree);
      return (0, _product.getProductCategoryList)(this).then(function (res) {
        var data = res && res.data;
        var list = Array.isArray(data) ? data : data && Array.isArray(data.content) ? data.content : [];
        _this5.categoryTree = list;
        return list;
      }).catch(function (err) {
        console.warn('[供货商品] categoryList 请求失败:', err);
        return [];
      }).finally(function () {
        _this5.categoryListLoaded = true;
      });
    },
    collectCategoryIds: function collectCategoryIds(node) {
      var _this6 = this;
      if (!node) return [];
      var ids = [];
      if (node.id != null) ids.push(node.id);
      if (Array.isArray(node.children)) {
        node.children.forEach(function (c) {
          ids.push.apply(ids, (0, _toConsumableArray2.default)(_this6.collectCategoryIds(c)));
        });
      }
      return ids;
    },
    openCatePopup: function openCatePopup() {
      var _this7 = this;
      if (!this.categoryListLoaded) {
        uni.showLoading({
          title: '加载品类...',
          mask: true
        });
        this.loadCategoryList().catch(function () {}).finally(function () {
          uni.hideLoading();
          _this7.syncCatePopupSelection();
          _this7.$nextTick(function () {
            var pop = _this7.$refs.catePopup;
            if (pop && typeof pop.open === 'function') pop.open();
          });
        });
        return;
      }
      this.syncCatePopupSelection();
      this.$nextTick(function () {
        var pop = _this7.$refs.catePopup;
        if (pop && typeof pop.open === 'function') pop.open();
      });
    },
    syncCatePopupSelection: function syncCatePopupSelection() {
      if (this.hasCateFilter) {
        this.catePopupMainIndex = this.selectedMainIndex;
        this.catePopupSubIndex = this.selectedSubIndex;
      } else {
        this.catePopupMainIndex = this.mainCategories.length ? 0 : -1;
        this.catePopupSubIndex = -1;
      }
    },
    closeCatePopup: function closeCatePopup() {
      var pop = this.$refs.catePopup;
      if (pop && typeof pop.close === 'function') pop.close();
    },
    onCateMainClick: function onCateMainClick(e) {
      var i = Number(e && e.currentTarget && e.currentTarget.dataset ? e.currentTarget.dataset.mainIndex : 0);
      if (!Number.isFinite(i) || i < 0) return;
      if (i === this.catePopupMainIndex) return;
      this.catePopupMainIndex = i;
      this.catePopupSubIndex = -1;
    },
    onCateSubClick: function onCateSubClick(e) {
      var raw = e && e.currentTarget && e.currentTarget.dataset ? e.currentTarget.dataset.subIndex : '';
      var i = Number(raw);
      this.catePopupSubIndex = Number.isFinite(i) ? i : -1;
    },
    resetCateFilter: function resetCateFilter() {
      this.catePopupMainIndex = this.mainCategories.length ? 0 : -1;
      this.catePopupSubIndex = -1;
      this.selectedMainIndex = -1;
      this.selectedSubIndex = -1;
      this.clearBatchAuditSelection();
      this.closeCatePopup();
      uni.showLoading({
        title: '加载中...',
        mask: true
      });
      this.loadWarehouseFirstPage().catch(function () {}).finally(function () {
        uni.hideLoading();
      });
    },
    confirmCateFilter: function confirmCateFilter() {
      var mainIdx = this.catePopupMainIndex;
      var subIdx = this.catePopupSubIndex;
      this.selectedMainIndex = mainIdx >= 0 ? mainIdx : -1;
      this.selectedSubIndex = subIdx;
      this.clearBatchAuditSelection();
      this.closeCatePopup();
      uni.showLoading({
        title: '加载中...',
        mask: true
      });
      this.loadWarehouseFirstPage().catch(function () {}).finally(function () {
        uni.hideLoading();
      });
    },
    onSupply: function onSupply() {
      uni.navigateTo({
        url: '/sub-pages/supply/index'
      });
    },
    stockStatusClass: function stockStatusClass(status, modifyAuditPending) {
      var v = Number(status);
      var pending = Number(modifyAuditPending) === 1;
      if (v === WAREHOUSE_STOCK_STATUS.CAN_APPLY_OFF_SHELF && pending) return 'stock-status-6';
      return "stock-status-".concat(v);
    },
    stockStatusText: function stockStatusText(status, modifyAuditPending) {
      var v = Number(status);
      var pending = Number(modifyAuditPending) === 1;
      if (v === WAREHOUSE_STOCK_STATUS.CAN_APPLY_LISTING) return '下架';
      if (v === WAREHOUSE_STOCK_STATUS.CAN_APPLY_OFF_SHELF && pending) return '改价/库存待审核';
      if (v === WAREHOUSE_STOCK_STATUS.CAN_APPLY_OFF_SHELF) return '在售';
      if (v === WAREHOUSE_STOCK_STATUS.CAN_REVOKE_APPLY) return '待上架审核';
      if (v === WAREHOUSE_STOCK_STATUS.PENDING_OFF_SHELF_AUDIT) return '待下架审核';
      if (v === 4) return '改价待审核';
      return '未知';
    },
    hasPendingApply: function hasPendingApply(row) {
      if (!row) return false;
      var status = Number(row.status);
      var modifyAuditPending = Number(row.modifyAuditPending);
      return status === WAREHOUSE_STOCK_STATUS.CAN_REVOKE_APPLY || status === WAREHOUSE_STOCK_STATUS.PENDING_OFF_SHELF_AUDIT || status === WAREHOUSE_STOCK_STATUS.CAN_APPLY_OFF_SHELF && modifyAuditPending === 1 || status === WAREHOUSE_STOCK_STATUS.CAN_APPLY_LISTING && modifyAuditPending === 1;
    },
    pickImageUrl: function pickImageUrl(raw) {
      if (!raw) return '';
      if (typeof raw === 'string') {
        var s = raw.trim();
        if (!s) return '';
        if (/^https?:\/\//i.test(s)) return s;
        try {
          var parsed = JSON.parse(s);
          return this.pickImageUrl(parsed);
        } catch (e) {
          return '';
        }
      }
      if (Array.isArray(raw)) {
        if (!raw.length) return '';
        var first = raw[0];
        return this.pickImageUrl(first);
      }
      if ((0, _typeof2.default)(raw) === 'object') {
        var direct = (0, _storage.pickFirstField)(raw, ['url', 'imageUrl', 'pic', 'mainPic', 'productImage', 'cover']);
        return typeof direct === 'string' ? direct.trim() : String(direct || '').trim();
      }
      return '';
    },
    normalizeStockItem: function normalizeStockItem(it) {
      var productId = String(it && it.productId || it && it.id || '');
      var rawStatus = (0, _storage.pickFirstField)(it, ['status', 'saleStatus', 'salesStatus']);
      var status = Number(rawStatus);
      var modifyAuditPending = Number((0, _storage.pickFirstField)(it, ['modifyAuditPending', 'modifyAuditStatus']));
      var pendingRow = {
        status: status,
        modifyAuditPending: modifyAuditPending
      };
      var showApplyBtn = status === WAREHOUSE_STOCK_STATUS.CAN_APPLY_LISTING && !this.hasPendingApply(pendingRow);
      var showDownBtn = status === WAREHOUSE_STOCK_STATUS.CAN_APPLY_OFF_SHELF && !this.hasPendingApply(pendingRow);
      var showCancelBtn = this.hasPendingApply(pendingRow);
      var showEditActionBtn = status === WAREHOUSE_STOCK_STATUS.CAN_APPLY_OFF_SHELF && !this.hasPendingApply(pendingRow);
      var showDeleteBtn = status === WAREHOUSE_STOCK_STATUS.CAN_APPLY_LISTING;
      var currentPrice = (0, _storage.pickFirstField)(it, ['price', 'currentPrice', 'salePrice', 'nowPrice', 'retailPrice']);
      var currentStock = (0, _storage.pickFirstField)(it, ['stock', 'usableNum', 'usableStock', 'currentStock', 'storeStock']);
      var netWeight = (0, _storage.pickFirstField)(it, ['weight']);
      var pricePerJin = this.calcPricePerJinDisplay(currentPrice, netWeight);
      return _objectSpread(_objectSpread({}, it), {}, {
        id: it && it.id != null ? String(it.id) : '',
        status: status,
        modifyAuditPending: Number.isFinite(modifyAuditPending) ? modifyAuditPending : 0,
        productId: productId,
        productImage: this.pickImageUrl((0, _storage.pickFirstField)(it, ['image', 'sliderImage', 'imageUrl', 'pic', 'mainPic', 'productImage', 'cover'])),
        currentPrice: currentPrice,
        currentStock: currentStock,
        productBrand: String((0, _storage.pickFirstField)(it, ['productBrand'])).trim(),
        productGrade: String((0, _storage.pickFirstField)(it, ['levelName', 'gradeName', 'level', 'productLevel'])).trim(),
        netWeight: netWeight,
        pricePerJin: pricePerJin,
        storageName: it && it.storageName || '',
        storageId: it && it.storageId || '',
        updateBy: it && it.updateBy || '',
        applyTime: it && it.applyTime || it && it.updateTime || it && it.createTime || '',
        productName: it && it.productName || '',
        showApplyBtn: showApplyBtn,
        showCancelBtn: showCancelBtn,
        showDownBtn: showDownBtn,
        showEditActionBtn: showEditActionBtn,
        showDeleteBtn: showDeleteBtn
      });
    },
    buildWarehouseList: function buildWarehouseList(stockList) {
      var _this8 = this;
      return (stockList || []).map(function (it) {
        return _this8.normalizeStockItem(it);
      });
    },
    /**
     * 与 supplier-goods-upload.vue 的单斤价口径保持一致：
     * 售价 ÷ 净重（斤），最多两位小数；无效则返回 --
     */
    calcPricePerJinDisplay: function calcPricePerJinDisplay(price, netWeight) {
      var p = parseFloat(String(price || '').trim());
      var nw = parseFloat(String(netWeight || '').trim());
      if (!Number.isFinite(p) || !Number.isFinite(nw) || nw <= 0) return '--';
      var v = p / nw;
      if (!Number.isFinite(v)) return '--';
      return String(parseFloat(v.toFixed(2)));
    },
    brandProductName: function brandProductName(item) {
      var brand = String(item && item.productBrand || '').trim();
      return brand || '—';
    },
    getAuditTabIndex: function getAuditTabIndex() {
      var idx = (this.tabs || []).findIndex(function (tab) {
        return tab && tab.value === 'product_audit';
      });
      return idx >= 0 ? idx : -1;
    },
    saveAuditReturnContext: function saveAuditReturnContext() {
      var auditTabIndex = this.getAuditTabIndex();
      if (auditTabIndex < 0) return;
      var loadedPageNum = Math.max((Number(this.warehousePageNum) || 1) - 1, 1);
      uni.setStorageSync(GOODS_AUDIT_RETURN_CTX_KEY, {
        needRestore: 1,
        auditTabIndex: auditTabIndex,
        loadedPageNum: loadedPageNum,
        auditStatusFilter: this.auditStatusFilter,
        keyword: this.keyword,
        searchKeyword: this.searchKeyword,
        supplierNameInput: this.supplierNameInput,
        searchSupplierName: this.searchSupplierName,
        scrollTop: Number(this.pageScrollTop) || 0,
        ts: Date.now()
      });
    },
    tryRestoreAuditReturnContext: function tryRestoreAuditReturnContext() {
      var _this9 = this;
      if (this.restoringAuditReturn) return;
      var ctx = uni.getStorageSync(GOODS_AUDIT_RETURN_CTX_KEY);
      var needRestore = Number(ctx && ctx.needRestore);
      if (needRestore !== 1) return;
      uni.removeStorageSync(GOODS_AUDIT_RETURN_CTX_KEY);
      var auditTabIndexRaw = Number(ctx && ctx.auditTabIndex);
      var auditTabIndex = Number.isFinite(auditTabIndexRaw) && auditTabIndexRaw >= 0 ? auditTabIndexRaw : this.getAuditTabIndex();
      if (auditTabIndex >= 0) this.tabIndex = auditTabIndex;
      this.auditStatusFilter = String(ctx && ctx.auditStatusFilter != null ? ctx.auditStatusFilter : this.auditStatusFilter || '');
      this.keyword = String(ctx && ctx.keyword != null ? ctx.keyword : this.keyword || '');
      this.searchKeyword = String(ctx && ctx.searchKeyword != null ? ctx.searchKeyword : this.searchKeyword || '');
      this.supplierNameInput = String(ctx && ctx.supplierNameInput != null ? ctx.supplierNameInput : this.supplierNameInput || '');
      this.searchSupplierName = String(ctx && ctx.searchSupplierName != null ? ctx.searchSupplierName : this.searchSupplierName || '');
      this.restoringAuditReturn = true;
      this.listScrollTop = 0;
      uni.showLoading({
        title: '加载中...',
        mask: true
      });
      this.loadWarehousePagesForRestore(ctx && ctx.loadedPageNum).catch(function () {}).finally(function () {
        uni.hideLoading();
        var scrollTop = Number(ctx && ctx.scrollTop);
        var targetTop = Number.isFinite(scrollTop) && scrollTop >= 0 ? scrollTop : 0;
        _this9.$nextTick(function () {
          _this9.listScrollTop = targetTop;
        });
        _this9.restoringAuditReturn = false;
      });
    },
    formatMoney: function formatMoney(v) {
      var n = Number(v);
      return Number.isFinite(n) ? "\uFFE5".concat(n.toFixed(2)) : '—';
    },
    formatStock: function formatStock(v) {
      var n = Number(v);
      return Number.isFinite(n) ? String(n) : '—';
    },
    formatOffShelfDate: function formatOffShelfDate(v) {
      if (!v) return '-';
      var s = String(v).trim();
      if (!s) return '-';
      return s.length >= 10 ? s.slice(0, 10) : s;
    },
    onPreviewGoodsImage: function onPreviewGoodsImage(e) {
      var ds = e && e.currentTarget ? e.currentTarget.dataset || {} : {};
      var id = String(ds.itemId || '').trim();
      var row = (this.warehouseList || []).find(function (it) {
        return String(it && it.id || '') === id || String(it && it.productId || '') === id;
      }) || {};
      var src = String(row && row.productImage || '').trim();
      if (!src) {
        uni.showToast({
          title: '暂无图片',
          icon: 'none'
        });
        return;
      }
      uni.previewImage({
        urls: [src],
        current: src
      });
    },
    loadPageData: function loadPageData() {
      var _this10 = this;
      if (this.loading) return;
      this.loading = true;
      uni.showLoading({
        title: '加载供货商品...',
        mask: true
      });
      this.loadWarehouseFirstPage().catch(function () {}).finally(function () {
        _this10.loading = false;
        uni.hideLoading();
      });
    },
    onScrollToLower: function onScrollToLower() {
      this.loadWarehouseNextPage();
    },
    onListScroll: function onListScroll(e) {
      this.pageScrollTop = Number(e && e.detail && e.detail.scrollTop) || 0;
    },
    clearBatchAuditSelection: function clearBatchAuditSelection() {
      this.selectedAuditIds = [];
    },
    syncBatchAuditSelection: function syncBatchAuditSelection() {
      if (!Array.isArray(this.selectedAuditIds) || !this.selectedAuditIds.length) return;
      var visibleSelectable = new Set(this.auditSelectableIds);
      this.selectedAuditIds = this.selectedAuditIds.filter(function (id) {
        return visibleSelectable.has(String(id));
      });
    },
    isAuditSelected: function isAuditSelected(id) {
      var auditId = String(id || '').trim();
      return !!auditId && (this.selectedAuditIds || []).includes(auditId);
    },
    onToggleAuditSelectTap: function onToggleAuditSelectTap(e) {
      var ds = e && e.currentTarget ? e.currentTarget.dataset || {} : {};
      if (String(ds.selectable || '') !== '1') return;
      var id = String(ds.auditId || '').trim();
      if (!id) return;
      if (this.isAuditSelected(id)) {
        this.selectedAuditIds = this.selectedAuditIds.filter(function (x) {
          return x !== id;
        });
      } else {
        this.selectedAuditIds = [].concat((0, _toConsumableArray2.default)(this.selectedAuditIds), [id]);
      }
    },
    toggleSelectAllAudit: function toggleSelectAllAudit() {
      var ids = this.auditSelectableIds;
      if (!ids.length || this.batchAuditSubmitting) return;
      if (this.isAllCurrentAuditSelected) {
        var current = new Set(ids);
        this.selectedAuditIds = (this.selectedAuditIds || []).filter(function (id) {
          return !current.has(id);
        });
      } else {
        this.selectedAuditIds = Array.from(new Set([].concat((0, _toConsumableArray2.default)(this.selectedAuditIds || []), (0, _toConsumableArray2.default)(ids))));
      }
    },
    resetWarehouseList: function resetWarehouseList() {
      this.warehouseList = [];
      this.warehousePageNum = 1;
      this.warehouseTotal = 0;
      this.warehouseNoMore = false;
    },
    loadWarehouseFirstPage: function loadWarehouseFirstPage() {
      this.warehouseLoading = false;
      this.resetWarehouseList();
      return this.loadWarehouseNextPage();
    },
    loadWarehousePagesForRestore: function loadWarehousePagesForRestore(pageCount) {
      var _this11 = this;
      var targetPageCount = Math.max(Number(pageCount) || 1, 1);
      this.warehouseLoading = false;
      this.resetWarehouseList();
      var loadNext = function loadNext() {
        var loadedPageCount = Math.max((Number(_this11.warehousePageNum) || 1) - 1, 0);
        if (loadedPageCount >= targetPageCount || _this11.warehouseNoMore) {
          return Promise.resolve(_this11.warehouseList);
        }
        return _this11.loadWarehouseNextPage().then(function () {
          return loadNext();
        });
      };
      return loadNext();
    },
    loadWarehouseNextPage: function loadWarehouseNextPage() {
      var _this12 = this;
      if (this.warehouseLoading) return Promise.resolve([]);
      if (this.warehouseTotal > 0 && this.warehouseList.length >= this.warehouseTotal) {
        return Promise.resolve([]);
      }
      this.warehouseLoading = true;
      if (this.isProductAuditTab) {
        return (0, _product.getProductAuditList)(this, this.auditListQueryParams()).then(function (res) {
          var _normalizeProductAudi = (0, _product.normalizeProductAuditListResponse)(res),
            rawRows = _normalizeProductAudi.rows,
            total = _normalizeProductAudi.total;
          var totalNum = Number(total) || 0;
          if (totalNum > 0) _this12.warehouseTotal = totalNum;
          var pageRows = _this12.buildAuditList(rawRows);
          if (_this12.warehousePageNum === 1) {
            _this12.warehouseList = pageRows;
          } else {
            _this12.warehouseList = [].concat((0, _toConsumableArray2.default)(_this12.warehouseList), (0, _toConsumableArray2.default)(pageRows));
          }
          var reachedByTotal = _this12.warehouseTotal > 0 && _this12.warehouseList.length >= _this12.warehouseTotal;
          var reachedByPage = pageRows.length < _this12.warehousePageSize;
          _this12.warehouseNoMore = !!(reachedByTotal || reachedByPage);
          if (pageRows.length > 0) _this12.warehousePageNum += 1;
          return pageRows;
        }).catch(function () {
          return [];
        }).finally(function () {
          _this12.warehouseLoading = false;
        });
      }
      if (this.isPendingTab()) {
        // "待审核"包含 status=2(待上架审核)、status=3(待下架审核) 两种状态。
        // 后端 storage/stock/list 仅支持单一 status 等值匹配，因此并行请求两个 status 后合并；
        // 改价/库存待审核(status=1+modifyAuditPending=1)走"在售"列表，不在此 tab 展示。
        var buildParams = function buildParams(statusVal) {
          var p = _this12.stockListQueryParams(statusVal);
          // 使用较大 pageSize 一次性拉取，避免双 status 跨页合并复杂度
          p.pageSize = 50;
          p.pageNum = 1;
          return p;
        };
        return Promise.all([(0, _storage.getStockList)(this, buildParams(WAREHOUSE_STOCK_STATUS.CAN_REVOKE_APPLY)).catch(function () {
          return null;
        }), (0, _storage.getStockList)(this, buildParams(WAREHOUSE_STOCK_STATUS.PENDING_OFF_SHELF_AUDIT)).catch(function () {
          return null;
        })]).then(function (_ref) {
          var _ref2 = (0, _slicedToArray2.default)(_ref, 2),
            resOn = _ref2[0],
            resOff = _ref2[1];
          var listOn = (0, _storage.normalizeStockList)(resOn);
          var listOff = (0, _storage.normalizeStockList)(resOff);
          var totalOn = Number(resOn && resOn.total) || Number(resOn && resOn.data && resOn.data.total) || listOn.length;
          var totalOff = Number(resOff && resOff.total) || Number(resOff && resOff.data && resOff.data.total) || listOff.length;
          var merged = [].concat((0, _toConsumableArray2.default)(listOn), (0, _toConsumableArray2.default)(listOff));
          _this12.warehouseTotal = Number(totalOn) + Number(totalOff);
          _this12.warehouseList = _this12.buildWarehouseList(merged);
          _this12.warehouseNoMore = true;
          return _this12.warehouseList;
        }).finally(function () {
          _this12.warehouseLoading = false;
        });
      }
      return (0, _storage.getStockList)(this, this.stockListQueryParams()).then(function (stockRes) {
        var stockList = (0, _storage.normalizeStockList)(stockRes);
        var total = Number(stockRes && stockRes.total) || Number(stockRes && stockRes.data && stockRes.data.total) || 0;
        if (total > 0) _this12.warehouseTotal = total;
        var pageRows = _this12.buildWarehouseList(stockList);
        if (_this12.warehousePageNum === 1) {
          _this12.warehouseList = pageRows;
        } else {
          _this12.warehouseList = [].concat((0, _toConsumableArray2.default)(_this12.warehouseList), (0, _toConsumableArray2.default)(pageRows));
        }
        _this12.syncBatchAuditSelection();
        var reachedByTotal = _this12.warehouseTotal > 0 && _this12.warehouseList.length >= _this12.warehouseTotal;
        var reachedByPage = pageRows.length < _this12.warehousePageSize;
        _this12.warehouseNoMore = !!(reachedByTotal || reachedByPage);
        if (pageRows.length > 0) _this12.warehousePageNum += 1;
        return pageRows;
      }).catch(function () {
        return [];
      }).finally(function () {
        _this12.warehouseLoading = false;
      });
    },
    onToggleApplyTap: function onToggleApplyTap(e) {
      var _this13 = this;
      var ds = e && e.currentTarget ? e.currentTarget.dataset || {} : {};
      var id = String(ds.itemId || '');
      if (!id) {
        uni.showToast({
          title: '缺少商品ID，无法申请上架',
          icon: 'none'
        });
        return;
      }
      var row = (this.warehouseList || []).find(function (it) {
        return String(it && it.id || '') === id || String(it && it.productId || '') === id;
      }) || {};
      var rowId = String(row && row.id || '').trim();
      var status = Number(row.status != null ? row.status : ds.itemStatus);
      if (!rowId) {
        uni.showToast({
          title: '缺少商品ID，无法提交申请',
          icon: 'none'
        });
        return;
      }
      if (this.hasPendingApply(row)) {
        this.cancelApply(row);
        return;
      }
      if (status === WAREHOUSE_STOCK_STATUS.CAN_APPLY_LISTING) {
        this.openReApplyDialog(row);
        return;
      }
      if (status === WAREHOUSE_STOCK_STATUS.CAN_APPLY_OFF_SHELF) {
        if (this.applyingId) return;
        uni.showModal({
          title: '确认' + this.offShelfText,
          content: '确定要' + this.offShelfText + '该商品吗？',
          confirmText: '确定',
          cancelText: '取消',
          success: function success(modalRes) {
            if (!modalRes.confirm) return;
            _this13.submitApplyStockStatus(rowId, STOCK_APPLY_ACTION.APPLY_OFF_SHELF);
          }
        });
        return;
      }
      uni.showToast({
        title: '当前状态不可操作',
        icon: 'none'
      });
    },
    submitApplyStockStatus: function submitApplyStockStatus(id, applyStatus) {
      var _this14 = this;
      if (this.applyingId) return;
      this.applyingId = id;
      var okText = applyStatus === STOCK_APPLY_ACTION.APPLY_LISTING ? '申请上架成功' : applyStatus === STOCK_APPLY_ACTION.APPLY_OFF_SHELF ? this.offShelfText + '成功' : '申请上架成功';
      (0, _storage.applyStockStatus)(this, {
        id: id,
        applyStatus: applyStatus,
        applyRemark: ''
      }).then(function (res) {
        if (res && res.code && Number(res.code) !== 200) {
          return Promise.reject(res);
        }
        uni.showToast({
          title: okText,
          icon: 'success'
        });
        var delayMs = 600;
        return new Promise(function (resolve) {
          setTimeout(function () {
            _this14.loadWarehouseFirstPage().then(function () {
              return resolve(null);
            }).catch(function () {
              return resolve(null);
            });
          }, delayMs);
        });
      }).catch(function (err) {
        var msg = err && err.msg || (applyStatus === STOCK_APPLY_ACTION.APPLY_LISTING ? '申请上架失败，请稍后重试' : applyStatus === STOCK_APPLY_ACTION.APPLY_OFF_SHELF ? _this14.offShelfText + '失败，请稍后重试' : '申请上架失败，请稍后重试');
        uni.showToast({
          title: msg,
          icon: 'none'
        });
      }).finally(function () {
        _this14.applyingId = '';
      });
    },
    openReApplyDialog: function openReApplyDialog(row) {
      var id = String(row && row.id || '').trim();
      if (!id) {
        uni.showToast({
          title: '缺少商品ID，无法申请上架',
          icon: 'none'
        });
        return;
      }
      this.navigateToReapplyUpload(row);
    },
    isSameDayOffShelfRow: function isSameDayOffShelfRow(item) {
      if (!item || Number(item.status) !== WAREHOUSE_STOCK_STATUS.CAN_APPLY_LISTING || !item.updateTime) return false;
      if (String(item.updateBy || '').indexOf('定时下架') !== -1) return false;
      var dateText = String(item.updateTime).slice(0, 10);
      var now = new Date();
      var year = now.getFullYear();
      var month = String(now.getMonth() + 1).padStart(2, '0');
      var day = String(now.getDate()).padStart(2, '0');
      return dateText === "".concat(year, "-").concat(month, "-").concat(day);
    },
    cancelApply: function cancelApply(row) {
      var _this15 = this;
      var id = String(row && row.id || '').trim();
      if (!id) {
        uni.showToast({
          title: '缺少商品ID，无法撤销申请',
          icon: 'none'
        });
        return;
      }
      if (this.applyingId) return;
      uni.showModal({
        title: '确认撤销申请',
        content: '确定撤销当前申请吗？',
        confirmText: '确定',
        cancelText: '取消',
        success: function success(modalRes) {
          if (!modalRes.confirm) return;
          _this15.applyingId = id;
          (0, _storage.cancelStockApply)(_this15, {
            id: id
          }).then(function (res) {
            if (res && res.code && Number(res.code) !== 200) {
              return Promise.reject(res);
            }
            uni.showToast({
              title: '申请撤销成功',
              icon: 'success'
            });
            var delayMs = 600;
            return new Promise(function (resolve) {
              setTimeout(function () {
                _this15.loadWarehouseFirstPage().then(function () {
                  return resolve(null);
                }).catch(function () {
                  return resolve(null);
                });
              }, delayMs);
            });
          }).catch(function (err) {
            var msg = err && err.msg || '申请撤销失败，请稍后重试';
            uni.showToast({
              title: msg,
              icon: 'none'
            });
          }).finally(function () {
            _this15.applyingId = '';
          });
        }
      });
    },
    onDeleteTap: function onDeleteTap(e) {
      var _this16 = this;
      var ds = e && e.currentTarget ? e.currentTarget.dataset || {} : {};
      var id = String(ds.itemId || '');
      var name = String(ds.itemName || '');
      if (!id) {
        uni.showToast({
          title: '缺少商品ID，无法删除',
          icon: 'none'
        });
        return;
      }
      if (this.deletingId) return;
      uni.showModal({
        title: '确认删除',
        content: name ? "\u786E\u5B9A\u8981\u5220\u9664\u5546\u54C1\u300C".concat(name, "\u300D\u5417\uFF1F\u5220\u9664\u540E\u4E0D\u53EF\u6062\u590D\u3002") : '确定要删除该商品吗？删除后不可恢复。',
        confirmText: '确定删除',
        cancelText: '取消',
        confirmColor: '#e53935',
        success: function success(modalRes) {
          if (!modalRes.confirm) return;
          _this16.deletingId = id;
          (0, _storage.deleteStock)(_this16, id).then(function (res) {
            if (res && res.code && Number(res.code) !== 200) {
              return Promise.reject(res);
            }
            uni.showToast({
              title: '删除成功',
              icon: 'success'
            });
            var delayMs = 600;
            return new Promise(function (resolve) {
              setTimeout(function () {
                _this16.loadWarehouseFirstPage().then(function () {
                  return resolve(null);
                }).catch(function () {
                  return resolve(null);
                });
              }, delayMs);
            });
          }).catch(function (err) {
            var msg = err && err.msg || '删除失败，请稍后重试';
            uni.showToast({
              title: msg,
              icon: 'none'
            });
          }).finally(function () {
            _this16.deletingId = '';
          });
        }
      });
    },
    navigateToReapplyUpload: function navigateToReapplyUpload(item) {
      var id = String(item && item.id || '').trim();
      var productId = String(item && item.productId || '').trim();
      if (!id) {
        uni.showToast({
          title: '缺少商品ID，无法申请上架',
          icon: 'none'
        });
        return;
      }
      if (!productId) {
        uni.showToast({
          title: '缺少productId，无法加载商品详情',
          icon: 'none'
        });
        return;
      }
      var sameDayOffShelf = this.isSameDayOffShelfRow(item) ? '1' : '0';
      var originPrice = String(item && item.currentPrice != null ? item.currentPrice : '').trim();
      var originStock = String(item && item.currentStock != null ? item.currentStock : '').trim();
      var url = "/sub-pages/supply/supplier-goods-reapply?id=".concat(encodeURIComponent(id), "&productId=").concat(encodeURIComponent(productId), "&sameDayOffShelf=").concat(encodeURIComponent(sameDayOffShelf), "&originPrice=").concat(encodeURIComponent(originPrice), "&originStock=").concat(encodeURIComponent(originStock));
      uni.navigateTo({
        url: url
      });
    },
    onEditPriceStockTap: function onEditPriceStockTap(e) {
      var ds = e && e.currentTarget ? e.currentTarget.dataset || {} : {};
      var id = String(ds.itemId || '').trim();
      if (!id) {
        uni.showToast({
          title: '缺少商品ID，无法申请改价改库存',
          icon: 'none'
        });
        return;
      }
      this.editPriceForm = {
        id: id,
        productId: String(ds.itemProductId || '').trim(),
        productName: String(ds.itemProductName || '').trim(),
        currentPrice: String(ds.itemCurrentPrice || '').trim(),
        currentStock: String(ds.itemCurrentStock || '').trim(),
        modifyPriceStr: String(ds.itemCurrentPrice || '').trim(),
        modifyStockStr: String(ds.itemCurrentStock || '').trim(),
        applyRemark: ''
      };
      this.editPriceVisible = true;
    },
    closeEditPriceDialog: function closeEditPriceDialog() {
      if (this.editPriceSubmitting) return;
      this.editPriceVisible = false;
    },
    submitEditPrice: function submitEditPrice() {
      var _this17 = this;
      if (this.editPriceSubmitting) return;
      var id = String(this.editPriceForm.id || '').trim();
      var modifyPriceStr = String(this.editPriceForm.modifyPriceStr || '').trim();
      var modifyStockStr = String(this.editPriceForm.modifyStockStr || '').trim();
      var currentPrice = Number(this.editPriceForm.currentPrice);
      var currentStock = Number(this.editPriceForm.currentStock);
      var applyRemark = String(this.editPriceForm.applyRemark || '').trim();
      if (!id) {
        uni.showToast({
          title: '缺少商品ID，无法提交',
          icon: 'none'
        });
        return;
      }
      if (!modifyPriceStr && !modifyStockStr) {
        uni.showToast({
          title: '请至少填写调整后价格或调整后库存',
          icon: 'none'
        });
        return;
      }
      if (!Number.isFinite(currentPrice) || currentPrice <= 0) {
        uni.showToast({
          title: '缺少当前售价，无法提交',
          icon: 'none'
        });
        return;
      }
      if (!Number.isFinite(currentStock) || currentStock < 0) {
        uni.showToast({
          title: '缺少当前库存，无法提交',
          icon: 'none'
        });
        return;
      }
      var newPrice = Number(modifyPriceStr || currentPrice);
      if (!Number.isFinite(newPrice) || newPrice <= 0) {
        uni.showToast({
          title: '申请售价必须大于0',
          icon: 'none'
        });
        return;
      }
      var newStock = Number(modifyStockStr || currentStock);
      if (!Number.isFinite(newStock) || newStock < 0) {
        uni.showToast({
          title: '申请库存不能小于0',
          icon: 'none'
        });
        return;
      }
      if (newPrice > currentPrice) {
        uni.showToast({
          title: '运营时间内仅允许降价',
          icon: 'none'
        });
        return;
      }
      if (newStock < currentStock) {
        uni.showToast({
          title: '运营时间内仅允许上调库存',
          icon: 'none'
        });
        return;
      }
      this.editPriceSubmitting = true;
      (0, _storage.applyPriceStockInBusinessTime)(this, {
        stockId: id,
        newPrice: newPrice,
        newStock: newStock,
        applyRemark: applyRemark
      }).then(function (res) {
        if (res && res.code && Number(res.code) !== 200) {
          return Promise.reject(res);
        }
        uni.showToast({
          title: '改价改库存已生效',
          icon: 'success'
        });
        _this17.editPriceVisible = false;
        var delayMs = 600;
        return new Promise(function (resolve) {
          setTimeout(function () {
            _this17.loadWarehouseFirstPage().then(function () {
              return resolve(null);
            }).catch(function () {
              return resolve(null);
            });
          }, delayMs);
        });
      }).catch(function (err) {
        var msg = err && err.msg || '改价改库存提交失败，请稍后重试';
        uni.showToast({
          title: msg,
          icon: 'none'
        });
      }).finally(function () {
        _this17.editPriceSubmitting = false;
      });
    },
    onOpenProductAuditDialogTap: function onOpenProductAuditDialogTap(e) {
      var ds = e && e.currentTarget ? e.currentTarget.dataset || {} : {};
      var id = String(ds.auditId != null ? ds.auditId : '').trim();
      var productId = String(ds.productId != null ? ds.productId : '').trim();
      var productName = String(ds.productName != null ? ds.productName : '').trim();
      if (!id) {
        uni.showToast({
          title: '缺少审核单ID',
          icon: 'none'
        });
        return;
      }
      if (!productId) {
        uni.showToast({
          title: '缺少商品ID，无法查看审核详情',
          icon: 'none'
        });
        return;
      }
      var q = ["id=".concat(encodeURIComponent(productId)), "productId=".concat(encodeURIComponent(productId)), "auditMode=1", "auditId=".concat(encodeURIComponent(id)), "auditProductName=".concat(encodeURIComponent(productName || ''))];
      this.saveAuditReturnContext();
      uni.navigateTo({
        url: "/sub-pages/supply/supplier-goods-reapply?".concat(q.join('&'))
      });
    },
    closeProductAuditDialog: function closeProductAuditDialog() {
      if (this.productAuditSubmitting) return;
      this.productAuditDialogVisible = false;
    },
    resetProductAuditDetailState: function resetProductAuditDetailState() {
      this.productAuditDetailLoading = false;
      this.productAuditDetailLoaded = false;
      this.productAuditDetailError = '';
      this.productAuditDetail = {
        productId: '',
        productName: '',
        productNo: '',
        keyword: '',
        unitName: '',
        saleStockType: '',
        minimumOrderQuantity: '',
        productBrand: '',
        productGrade: '',
        productPackage: '',
        productOrigin: '',
        productImage: '',
        storeInfo: '',
        description: '',
        currentPrice: '',
        currentStock: '',
        weight: '',
        netWeight: '',
        mainImageUrl: '',
        sliderImageUrls: [],
        videoUrl: '',
        inspectionReportUrl: ''
      };
    },
    reloadProductAuditDetail: function reloadProductAuditDetail() {
      this.loadProductAuditDetail(true);
    },
    parseMaybeEncodedJson: function parseMaybeEncodedJson(text) {
      var raw = String(text || '');
      if (!raw) return {};
      var candidates = [raw];
      try {
        var once = decodeURIComponent(raw);
        if (once && once !== raw) candidates.push(once);
        var twice = decodeURIComponent(once);
        if (twice && twice !== once) candidates.push(twice);
      } catch (e) {}
      for (var i = 0; i < candidates.length; i++) {
        var s = candidates[i];
        try {
          var parsed = JSON.parse(s);
          if (parsed && (0, _typeof2.default)(parsed) === 'object') return parsed;
        } catch (e) {}
      }
      return {};
    },
    normalizeMediaList: function normalizeMediaList(raw) {
      var _this18 = this;
      if (!raw) return [];
      var list = [];
      if (Array.isArray(raw)) list = raw;else if (typeof raw === 'string') {
        var t = raw.trim();
        if (!t) return [];
        var parsed = this.parseMaybeEncodedJson(t);
        if (Array.isArray(parsed)) list = parsed;else if (parsed && (0, _typeof2.default)(parsed) === 'object' && Object.keys(parsed).length) list = [parsed];else list = [t];
      } else if ((0, _typeof2.default)(raw) === 'object') list = [raw];
      return list.map(function (it) {
        if (typeof it === 'string') {
          var _url = it.trim();
          return {
            ossId: '',
            url: _url,
            _isVideo: _this18.isVideoUrl(_url)
          };
        }
        var url = String((0, _storage.pickFirstField)(it, ['url', 'imageUrl', 'fileUrl', 'pic', 'path'])).trim();
        var ossId = String((0, _storage.pickFirstField)(it, ['ossId', 'id', 'fileId', 'name'])).trim();
        var typeText = String((0, _storage.pickFirstField)(it, ['type', 'fileType', 'mediaType', 'resourceType', 'mimeType'])).toLowerCase();
        var isVideoType = /video|mp4|mov|webm|ogg/.test(typeText);
        return {
          ossId: ossId,
          url: url,
          _isVideo: isVideoType || _this18.isVideoUrl(url)
        };
      }).filter(function (x) {
        return x.url || x.ossId;
      });
    },
    isVideoUrl: function isVideoUrl(url) {
      var s = String(url || '').toLowerCase();
      if (!s) return false;
      return /\.(mp4|mov|webm|ogg|m3u8)(\?.*)?$/.test(s) || /\/video\//.test(s) || /mime=video/.test(s);
    },
    parseFirstAttr: function parseFirstAttr(rawDetail) {
      var attrsRaw = (0, _storage.pickFirstField)(rawDetail, ['attrs', 'attr', 'skuList']);
      if (Array.isArray(attrsRaw)) return attrsRaw[0] || {};
      if (attrsRaw && (0, _typeof2.default)(attrsRaw) === 'object') return attrsRaw;
      if (typeof attrsRaw === 'string') {
        try {
          var parsed = JSON.parse(attrsRaw);
          if (Array.isArray(parsed)) return parsed[0] || {};
          if (parsed && (0, _typeof2.default)(parsed) === 'object') return parsed;
        } catch (e) {}
      }
      return {};
    },
    loadProductAuditDetail: function loadProductAuditDetail(showToastOnError) {
      var _this19 = this;
      var productId = String(this.productAuditForm.productId || '').trim();
      if (!productId) {
        this.productAuditDetailLoaded = false;
        this.productAuditDetailError = '缺少商品ID，无法加载详情';
        if (showToastOnError) uni.showToast({
          title: this.productAuditDetailError,
          icon: 'none'
        });
        return Promise.resolve(null);
      }
      this.productAuditDetailLoading = true;
      this.productAuditDetailLoaded = false;
      this.productAuditDetailError = '';
      return (0, _product.getStoreProductDetail)(this, productId).then(function (res) {
        var rawWrap = res != null && res.data !== undefined ? res.data : res;
        var raw = rawWrap && (0, _typeof2.default)(rawWrap) === 'object' && rawWrap.data && (0, _typeof2.default)(rawWrap.data) === 'object' ? rawWrap.data : rawWrap && (0, _typeof2.default)(rawWrap) === 'object' ? rawWrap : {};
        var firstAttr = _this19.parseFirstAttr(raw);
        var productName = String((0, _storage.pickFirstField)(raw, ['productName', 'storeName', 'name', 'title']) || '').trim();
        var productNo = String((0, _storage.pickFirstField)(raw, ['productNo', 'barCode', 'productId']) || '').trim();
        var keyword = String((0, _storage.pickFirstField)(raw, ['keyword', 'keywords']) || '').trim();
        var storeInfo = String((0, _storage.pickFirstField)(raw, ['storeInfo', 'intro', 'productIntro']) || '').trim();
        var currentPrice = (0, _storage.pickFirstField)(raw, ['currentPrice', 'price', 'salePrice', 'retailPrice']) || (0, _storage.pickFirstField)(firstAttr, ['price']);
        var currentStock = (0, _storage.pickFirstField)(raw, ['currentStock', 'stock', 'usableStock', 'usableNum']) || (0, _storage.pickFirstField)(firstAttr, ['stock']);
        var unitName = String((0, _storage.pickFirstField)(raw, ['unitName', 'unit', 'measureUnit']) || '').trim();
        var level = String((0, _storage.pickFirstField)(raw, ['levelName', 'gradeName', 'level', 'productLevel']) || '').trim();
        var saleStockType = String((0, _storage.pickFirstField)(raw, ['saleStockType']) || (0, _storage.pickFirstField)(firstAttr, ['saleStockType']) || '').trim();
        var productPackage = String((0, _storage.pickFirstField)(raw, ['productPackage', 'package']) || '').trim();
        var productBrand = String((0, _storage.pickFirstField)(raw, ['productBrand', 'brand']) || '').trim();
        var productOrigin = String((0, _storage.pickFirstField)(raw, ['productOrigin', 'origin']) || '').trim();
        var description = String((0, _storage.pickFirstField)(raw, ['description', 'detail']) || '').trim();
        var minimumOrderQuantity = String((0, _storage.pickFirstField)(raw, ['minimumOrderQuantity', 'minOrderNum']) || (0, _storage.pickFirstField)(firstAttr, ['minimumOrderQuantity', 'minOrderNum']) || '').trim();
        var weight = String((0, _storage.pickFirstField)(raw, ['weight']) || (0, _storage.pickFirstField)(firstAttr, ['weight']) || '').trim();
        var netWeight = String((0, _storage.pickFirstField)(raw, ['netWeight']) || (0, _storage.pickFirstField)(firstAttr, ['netWeight']) || '').trim();
        var coverMedia = _this19.normalizeMediaList((0, _storage.pickFirstField)(raw, ['image', 'mainImage', 'coverImage']));
        var inspectionMedia = _this19.normalizeMediaList((0, _storage.pickFirstField)(raw, ['productInspectionReport', 'inspectionReport']));
        var sliderAll = _this19.normalizeMediaList((0, _storage.pickFirstField)(raw, ['sliderImage', 'sliderImages', 'gallery', 'album', 'images']));
        var videoDirect = _this19.normalizeMediaList((0, _storage.pickFirstField)(raw, ['video', 'videoUrl', 'productVideo', 'mainVideo', 'mediaVideo', 'videoItem']));
        var sliderImages = sliderAll.filter(function (x) {
          return !x._isVideo;
        }).map(function (x) {
          return x.url;
        }).filter(Boolean);
        var videoFromSlider = sliderAll.find(function (x) {
          return !!x._isVideo;
        });
        var videoUrl = videoDirect[0] && videoDirect[0].url || videoFromSlider && videoFromSlider.url || '';
        var mainImageUrl = coverMedia[0] && coverMedia[0].url || _this19.pickImageUrl((0, _storage.pickFirstField)(raw, ['productImage', 'imageUrl', 'pic', 'mainPic', 'cover'])) || '';
        var inspectionReportUrl = inspectionMedia[0] && inspectionMedia[0].url || '';
        var detail = {
          productId: String((0, _storage.pickFirstField)(raw, ['productId', 'id']) || productId).trim(),
          productName: productName,
          productNo: productNo,
          keyword: keyword,
          unitName: unitName,
          saleStockType: saleStockType,
          minimumOrderQuantity: minimumOrderQuantity,
          productBrand: productBrand,
          productGrade: level,
          productPackage: productPackage,
          productOrigin: productOrigin,
          productImage: _this19.pickImageUrl((0, _storage.pickFirstField)(raw, ['image', 'sliderImage', 'imageUrl', 'pic', 'mainPic', 'productImage', 'cover'])),
          storeInfo: storeInfo,
          description: description,
          currentPrice: currentPrice,
          currentStock: currentStock,
          weight: weight,
          netWeight: netWeight,
          mainImageUrl: mainImageUrl,
          sliderImageUrls: sliderImages,
          videoUrl: videoUrl,
          inspectionReportUrl: inspectionReportUrl
        };
        if (!detail.productName) detail.productName = String(_this19.productAuditForm.productName || '').trim();
        _this19.productAuditDetail = detail;
        _this19.productAuditDetailLoaded = true;
        return detail;
      }).catch(function (err) {
        _this19.productAuditDetailLoaded = false;
        _this19.productAuditDetailError = err && err.msg || '商品详情加载失败';
        if (showToastOnError) uni.showToast({
          title: _this19.productAuditDetailError,
          icon: 'none'
        });
        return null;
      }).finally(function () {
        _this19.productAuditDetailLoading = false;
      });
    },
    submitProductAudit: function submitProductAudit() {
      var _this20 = this;
      if (this.productAuditSubmitting) return;
      var id = String(this.productAuditForm.id || '').trim();
      if (!id) {
        uni.showToast({
          title: '缺少审核单ID',
          icon: 'none'
        });
        return;
      }
      var status = String(this.productAuditForm.auditStatus || '1').trim();
      var rejectReason = String(this.productAuditForm.rejectReason || '').trim();
      if (status === '2' && !rejectReason) {
        uni.showToast({
          title: '驳回申请需填写驳回原因',
          icon: 'none'
        });
        return;
      }
      if (!this.productAuditDetailLoaded) {
        uni.showToast({
          title: '请先查看商品详情后再审核',
          icon: 'none'
        });
        return;
      }
      this.productAuditSubmitting = true;
      (0, _product.checkProductAudit)(this, {
        id: id,
        auditStatus: status,
        rejectReason: status === '2' ? rejectReason : ''
      }).then(function (res) {
        if (res && res.code && Number(res.code) !== 200) {
          return Promise.reject(res);
        }
        uni.showToast({
          title: '审核处理成功',
          icon: 'success'
        });
        _this20.productAuditDialogVisible = false;
        var delayMs = 600;
        return new Promise(function (resolve) {
          setTimeout(function () {
            _this20.loadWarehouseFirstPage().then(function () {
              return resolve(null);
            }).catch(function () {
              return resolve(null);
            });
          }, delayMs);
        });
      }).catch(function (err) {
        var msg = err && err.msg || '审核处理失败，请稍后重试';
        uni.showToast({
          title: msg,
          icon: 'none'
        });
      }).finally(function () {
        _this20.productAuditSubmitting = false;
      });
    },
    submitBatchAuditPass: function submitBatchAuditPass() {
      var _this21 = this;
      if (this.batchAuditSubmitting) return;
      var ids = (this.selectedAuditIds || []).filter(Boolean);
      if (!ids.length) {
        uni.showToast({
          title: '请先选择待审核商品',
          icon: 'none'
        });
        return;
      }
      uni.showModal({
        title: '确认一键通过',
        content: "\u786E\u5B9A\u901A\u8FC7\u5DF2\u9009\u7684 ".concat(ids.length, " \u4E2A\u5546\u54C1\u5BA1\u6838\u5417\uFF1F"),
        confirmText: '确定通过',
        cancelText: '取消',
        success: function success(modalRes) {
          if (!modalRes.confirm) return;
          _this21.batchAuditSubmitting = true;
          (0, _product.batchCheckProductAudit)(_this21, {
            ids: ids,
            auditStatus: 1,
            rejectReason: ''
          }).then(function (res) {
            if (res && res.code && Number(res.code) !== 200) {
              return Promise.reject(res);
            }
            uni.showToast({
              title: '批量审核成功',
              icon: 'success'
            });
            _this21.clearBatchAuditSelection();
            return _this21.loadWarehouseFirstPage().catch(function () {
              return null;
            });
          }).catch(function (err) {
            var msg = err && err.msg || '批量审核失败，请稍后重试';
            uni.showToast({
              title: msg,
              icon: 'none'
            });
          }).finally(function () {
            _this21.batchAuditSubmitting = false;
          });
        }
      });
    },
    openBatchRejectDialog: function openBatchRejectDialog() {
      if (this.batchAuditSubmitting) return;
      var ids = (this.selectedAuditIds || []).filter(Boolean);
      if (!ids.length) {
        uni.showToast({
          title: '请先选择待审核商品',
          icon: 'none'
        });
        return;
      }
      this.batchRejectReason = '';
      this.batchRejectDialogVisible = true;
    },
    closeBatchRejectDialog: function closeBatchRejectDialog() {
      if (this.batchAuditSubmitting) return;
      this.batchRejectDialogVisible = false;
    },
    submitBatchAuditReject: function submitBatchAuditReject() {
      var _this22 = this;
      if (this.batchAuditSubmitting) return;
      var ids = (this.selectedAuditIds || []).filter(Boolean);
      if (!ids.length) {
        uni.showToast({
          title: '请先选择待审核商品',
          icon: 'none'
        });
        return;
      }
      var reason = String(this.batchRejectReason || '').trim();
      if (!reason) {
        uni.showToast({
          title: '请输入驳回原因',
          icon: 'none'
        });
        return;
      }
      this.batchAuditSubmitting = true;
      (0, _product.batchCheckProductAudit)(this, {
        ids: ids,
        auditStatus: 2,
        rejectReason: reason
      }).then(function (res) {
        if (res && res.code && Number(res.code) !== 200) {
          return Promise.reject(res);
        }
        uni.showToast({
          title: '批量驳回成功',
          icon: 'success'
        });
        _this22.batchRejectDialogVisible = false;
        _this22.clearBatchAuditSelection();
        return _this22.loadWarehouseFirstPage().catch(function () {
          return null;
        });
      }).catch(function (err) {
        var msg = err && err.msg || '批量驳回失败，请稍后重试';
        uni.showToast({
          title: msg,
          icon: 'none'
        });
      }).finally(function () {
        _this22.batchAuditSubmitting = false;
      });
    }
  }
};
exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 2)["default"]))

/***/ }),

/***/ 292:
/*!******************************************************************************************************************************!*\
  !*** E:/project/yhlc-v1.0/agent-uniapp/sub-pages/supply/goods.vue?vue&type=style&index=0&id=216bdf5c&lang=scss&scoped=true& ***!
  \******************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_goods_vue_vue_type_style_index_0_id_216bdf5c_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/mini-css-extract-plugin/dist/loader.js??ref--8-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--8-oneOf-1-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-2!./node_modules/postcss-loader/src??ref--8-oneOf-1-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/sass-loader/dist/cjs.js??ref--8-oneOf-1-4!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-5!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./goods.vue?vue&type=style&index=0&id=216bdf5c&lang=scss&scoped=true& */ 293);
/* harmony import */ var _D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_goods_vue_vue_type_style_index_0_id_216bdf5c_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_goods_vue_vue_type_style_index_0_id_216bdf5c_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_goods_vue_vue_type_style_index_0_id_216bdf5c_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_goods_vue_vue_type_style_index_0_id_216bdf5c_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_goods_vue_vue_type_style_index_0_id_216bdf5c_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 293:
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js??ref--8-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--8-oneOf-1-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-2!./node_modules/postcss-loader/src??ref--8-oneOf-1-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/sass-loader/dist/cjs.js??ref--8-oneOf-1-4!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-5!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!E:/project/yhlc-v1.0/agent-uniapp/sub-pages/supply/goods.vue?vue&type=style&index=0&id=216bdf5c&lang=scss&scoped=true& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
    if(false) { var cssReload; }
  

/***/ })

},[[286,"common/runtime","common/vendor","sub-pages/supply/common/vendor"]]]);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/sub-pages/supply/goods.js.map
},{isPage:true,isComponent:true,currentFile:'sub-pages/supply/goods.js'});require("sub-pages/supply/goods.js");$gwx3_XC_2=function(_,_v,_n,_p,_s,_wp,_wl,$gwn,$gwl,$gwh,wh,$gstack,$gwrt,gra,grb,TestTest,wfor,_ca,_da,_r,_rz,_o,_oz,_1,_1z,_2,_2z,_m,_mz,nv_getDate,nv_getRegExp,nv_console,nv_parseInt,nv_parseFloat,nv_isNaN,nv_isFinite,nv_decodeURI,nv_decodeURIComponent,nv_encodeURI,nv_encodeURIComponent,$gdc,nv_JSON,_af,_gv,_ai,_grp,_gd,_gapi,$ixc,_ic,_w,_ev,_tsd){return function(path,global){
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
var z=__WXML_GLOBAL__.ops_set.$gwx3_XC_2 || [];
function gz$gwx3_XC_2_1(){
if( __WXML_GLOBAL__.ops_cached.$gwx3_XC_2_1)return __WXML_GLOBAL__.ops_cached.$gwx3_XC_2_1
__WXML_GLOBAL__.ops_cached.$gwx3_XC_2_1=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'detail-page data-v-94706a04'])
Z([3,'__e'])
Z([3,'list-scroll data-v-94706a04'])
Z([[4],[[5],[[4],[[5],[[5],[1,'scrolltolower']],[[4],[[5],[[4],[[5],[[5],[1,'onScrollLower']],[[4],[[5],[1,'$event']]]]]]]]]]])
Z([1,true])
Z([1,false])
Z([[6],[[7],[3,'$root']],[3,'g0']])
Z([3,'__l'])
Z([3,'data-v-94706a04'])
Z([3,'clipboard'])
Z([3,'暂无明细'])
Z([3,'033215c8-1'])
Z([3,'rowIndex'])
Z([3,'row'])
Z([[6],[[7],[3,'$root']],[3,'l0']])
Z([3,'goods-card data-v-94706a04'])
Z([3,'goods-main data-v-94706a04'])
Z([[6],[[7],[3,'row']],[3,'m4']])
Z([[6],[[7],[3,'row']],[3,'m7']])
Z([[6],[[7],[3,'row']],[3,'m14']])
Z([[7],[3,'isCheckedBatch']])
Z(z[20])
Z([[2,'!'],[[7],[3,'isCheckedBatch']]])
Z(z[22])
Z(z[1])
Z([[4],[[5],[[5],[[5],[1,'goods-detail-item']],[1,'data-v-94706a04']],[[2,'?:'],[[6],[[7],[3,'row']],[3,'m20']],[1,'goods-detail-item-selected'],[1,'']]]])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[[5],[1,'toggleRowSelectedByIndex']],[[4],[[5],[[7],[3,'rowIndex']]]]]]]]]]]])
Z([[6],[[7],[3,'row']],[3,'m25']])
Z([[7],[3,'loading']])
Z([[6],[[7],[3,'$root']],[3,'g2']])
Z([[4],[[5],[[5],[[5],[1,'bottom-bar']],[1,'data-v-94706a04']],[[2,'?:'],[[2,'||'],[[2,'!'],[[7],[3,'isCheckedBatch']]],[[7],[3,'isBatchInStockFromList']]],[1,'bottom-bar--single'],[1,'']]]])
Z(z[20])
Z([[2,'!'],[[7],[3,'isBatchInStockFromList']]])
})(__WXML_GLOBAL__.ops_cached.$gwx3_XC_2_1);return __WXML_GLOBAL__.ops_cached.$gwx3_XC_2_1
}
__WXML_GLOBAL__.ops_set.$gwx3_XC_2=z;
__WXML_GLOBAL__.ops_init.$gwx3_XC_2=true;
var x=['./sub-pages/supply/supplier-order-print-label.wxml'];d_[x[0]]={}
var m0=function(e,s,r,gg){
var z=gz$gwx3_XC_2_1()
var b1C=_n('view')
_rz(z,b1C,'class',0,e,s,gg)
var o2C=_mz(z,'scroll-view',['bindscrolltolower',1,'class',1,'data-event-opts',2,'scrollY',3,'showScrollbar',4],[],e,s,gg)
var x3C=_v()
_(o2C,x3C)
if(_oz(z,6,e,s,gg)){x3C.wxVkey=1
var f5C=_mz(z,'empty-state',['bind:__l',7,'class',1,'iconType',2,'text',3,'vueId',4],[],e,s,gg)
_(x3C,f5C)
}
else{x3C.wxVkey=2
var c6C=_v()
_(x3C,c6C)
var h7C=function(c9C,o8C,o0C,gg){
var aBD=_n('view')
_rz(z,aBD,'class',15,c9C,o8C,gg)
var tCD=_n('view')
_rz(z,tCD,'class',16,c9C,o8C,gg)
var eDD=_v()
_(tCD,eDD)
if(_oz(z,17,c9C,o8C,gg)){eDD.wxVkey=1
}
var bED=_v()
_(tCD,bED)
if(_oz(z,18,c9C,o8C,gg)){bED.wxVkey=1
}
var oFD=_v()
_(tCD,oFD)
if(_oz(z,19,c9C,o8C,gg)){oFD.wxVkey=1
}
var xGD=_v()
_(tCD,xGD)
if(_oz(z,20,c9C,o8C,gg)){xGD.wxVkey=1
}
var oHD=_v()
_(tCD,oHD)
if(_oz(z,21,c9C,o8C,gg)){oHD.wxVkey=1
}
var fID=_v()
_(tCD,fID)
if(_oz(z,22,c9C,o8C,gg)){fID.wxVkey=1
}
var cJD=_v()
_(tCD,cJD)
if(_oz(z,23,c9C,o8C,gg)){cJD.wxVkey=1
}
eDD.wxXCkey=1
bED.wxXCkey=1
oFD.wxXCkey=1
xGD.wxXCkey=1
oHD.wxXCkey=1
fID.wxXCkey=1
cJD.wxXCkey=1
_(aBD,tCD)
var hKD=_mz(z,'view',['bindtap',24,'class',1,'data-event-opts',2],[],c9C,o8C,gg)
var oLD=_v()
_(hKD,oLD)
if(_oz(z,27,c9C,o8C,gg)){oLD.wxVkey=1
}
oLD.wxXCkey=1
_(aBD,hKD)
_(o0C,aBD)
return o0C
}
c6C.wxXCkey=2
_2z(z,14,h7C,e,s,gg,c6C,'row','rowIndex','')
}
var o4C=_v()
_(o2C,o4C)
if(_oz(z,28,e,s,gg)){o4C.wxVkey=1
}
else{o4C.wxVkey=2
var cMD=_v()
_(o4C,cMD)
if(_oz(z,29,e,s,gg)){cMD.wxVkey=1
}
cMD.wxXCkey=1
}
x3C.wxXCkey=1
x3C.wxXCkey=3
o4C.wxXCkey=1
_(b1C,o2C)
var oND=_n('view')
_rz(z,oND,'class',30,e,s,gg)
var lOD=_v()
_(oND,lOD)
if(_oz(z,31,e,s,gg)){lOD.wxVkey=1
var aPD=_v()
_(lOD,aPD)
if(_oz(z,32,e,s,gg)){aPD.wxVkey=1
}
aPD.wxXCkey=1
}
else{lOD.wxVkey=2
}
lOD.wxXCkey=1
_(b1C,oND)
_(r,b1C)
return r
}
e_[x[0]]={f:m0,j:[],i:[],ti:[],ic:[]}
if(path&&e_[path]){
return function(env,dd,global){$gwxc=0;var root={"tag":"wx-page"};root.children=[]
;g="$gwx3_XC_2";var main=e_[path].f
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
}(__g.a,__g.b,__g.c,__g.d,__g.e,__g.f,__g.g,__g.h,__g.i,__g.j,__g.k,__g.l,__g.m,__g.n,__g.o,__g.p,__g.q,__g.r,__g.s,__g.t,__g.u,__g.v,__g.w,__g.x,__g.y,__g.z,__g.A,__g.B,__g.C,__g.D,__g.E,__g.F,__g.G,__g.H,__g.I,__g.J,__g.K,__g.L,__g.M,__g.N,__g.O,__g.P,__g.Q,__g.R,__g.S,__g.T,__g.U,__g.V,__g.W,__g.X,__g.Y,__g.Z,__g.aa);if(__vd_version_info__.delayedGwx||false)$gwx3_XC_2();	if (__vd_version_info__.delayedGwx) __wxAppCode__['sub-pages/supply/supplier-order-print-label.wxml'] = [$gwx3_XC_2, './sub-pages/supply/supplier-order-print-label.wxml'];else __wxAppCode__['sub-pages/supply/supplier-order-print-label.wxml'] = $gwx3_XC_2( './sub-pages/supply/supplier-order-print-label.wxml' );
	;__wxRoute = "sub-pages/supply/supplier-order-print-label";__wxRouteBegin = true;__wxAppCurrentFile__="sub-pages/supply/supplier-order-print-label.js";define("sub-pages/supply/supplier-order-print-label.js",function(require,module,exports,window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){
require('./common/vendor.js');(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["sub-pages/supply/supplier-order-print-label"],{

/***/ 326:
/*!************************************************************************************************************!*\
  !*** E:/project/yhlc-v1.0/agent-uniapp/main.js?{"page":"sub-pages%2Fsupply%2Fsupplier-order-print-label"} ***!
  \************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(wx, createPage) {

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ 4);
__webpack_require__(/*! uni-pages */ 30);
var _vue = _interopRequireDefault(__webpack_require__(/*! vue */ 25));
var _supplierOrderPrintLabel = _interopRequireDefault(__webpack_require__(/*! ./sub-pages/supply/supplier-order-print-label.vue */ 327));
// @ts-ignore
wx.__webpack_require_UNI_MP_PLUGIN__ = __webpack_require__;
createPage(_supplierOrderPrintLabel.default);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/wx.js */ 1)["default"], __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 2)["createPage"]))

/***/ }),

/***/ 327:
/*!*****************************************************************************************!*\
  !*** E:/project/yhlc-v1.0/agent-uniapp/sub-pages/supply/supplier-order-print-label.vue ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _supplier_order_print_label_vue_vue_type_template_id_94706a04_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./supplier-order-print-label.vue?vue&type=template&id=94706a04&scoped=true& */ 328);
/* harmony import */ var _supplier_order_print_label_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./supplier-order-print-label.vue?vue&type=script&lang=js& */ 330);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _supplier_order_print_label_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _supplier_order_print_label_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _supplier_order_print_label_vue_vue_type_style_index_0_id_94706a04_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./supplier-order-print-label.vue?vue&type=style&index=0&id=94706a04&lang=scss&scoped=true& */ 332);
/* harmony import */ var _D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 39);

var renderjs





/* normalize component */

var component = Object(_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _supplier_order_print_label_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _supplier_order_print_label_vue_vue_type_template_id_94706a04_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _supplier_order_print_label_vue_vue_type_template_id_94706a04_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "94706a04",
  null,
  false,
  _supplier_order_print_label_vue_vue_type_template_id_94706a04_scoped_true___WEBPACK_IMPORTED_MODULE_0__["components"],
  renderjs
)

component.options.__file = "sub-pages/supply/supplier-order-print-label.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 328:
/*!************************************************************************************************************************************!*\
  !*** E:/project/yhlc-v1.0/agent-uniapp/sub-pages/supply/supplier-order-print-label.vue?vue&type=template&id=94706a04&scoped=true& ***!
  \************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_supplier_order_print_label_vue_vue_type_template_id_94706a04_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--17-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./supplier-order-print-label.vue?vue&type=template&id=94706a04&scoped=true& */ 329);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_supplier_order_print_label_vue_vue_type_template_id_94706a04_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_supplier_order_print_label_vue_vue_type_template_id_94706a04_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_supplier_order_print_label_vue_vue_type_template_id_94706a04_scoped_true___WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_supplier_order_print_label_vue_vue_type_template_id_94706a04_scoped_true___WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),

/***/ 329:
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--17-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!E:/project/yhlc-v1.0/agent-uniapp/sub-pages/supply/supplier-order-print-label.vue?vue&type=template&id=94706a04&scoped=true& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
  var g0 = _vm.itemList.length === 0 && !_vm.loading
  var l0 = !g0
    ? _vm.__map(_vm.itemList, function (row, rowIndex) {
        var $orig = _vm.__get_orig(row)
        var g1 = !_vm.isCheckedBatch
          ? [row.productBrand, row.productName].filter(Boolean).join(" ") || "-"
          : null
        var m0 = !_vm.isCheckedBatch ? _vm.getNeedCount(row) : null
        var m1 = !!_vm.isCheckedBatch ? _vm.getNeedCount(row) : null
        var m2 = _vm.getItemImage(row)
        var m3 = m2 ? _vm.getItemImage(row) : null
        var m4 = _vm.formatSpec(row)
        var m5 = m4 ? _vm.formatSpec(row) : null
        var m6 = _vm.getNeedCount(row)
        var m7 = _vm.getItemTag(row)
        var m8 = m7 ? _vm.getItemTag(row) : null
        var m9 = _vm.getGross(row)
        var m10 = _vm.getNet(row)
        var m11 = _vm.lineDeliveryStatusText(row)
        var m12 = _vm.lineCheckStatusTone(row)
        var m13 = _vm.lineCheckStatusText(row)
        var m14 = _vm.formatUnqualifiedReason(row)
        var m15 = m14 ? _vm.formatUnqualifiedReason(row) : null
        var m16 = _vm.isCheckedBatch ? _vm.getNeedCount(row) : null
        var m17 = _vm.isCheckedBatch ? _vm.getLoadedCount(row) : null
        var m18 = _vm.isCheckedBatch ? _vm.getLatestLoadTime(row) : null
        var m19 = !_vm.isCheckedBatch ? _vm.getNeedCount(row) : null
        var m20 = _vm.isRowSelected(row)
        var m21 = _vm.isRowSelected(row)
        var m22 = _vm.lineDeliveryStatusText(row)
        var m23 = _vm.lineCheckStatusTone(row)
        var m24 = _vm.lineCheckStatusText(row)
        var m25 = _vm.formatUnqualifiedReason(row)
        var m26 = m25 ? _vm.formatUnqualifiedReason(row) : null
        var m27 = _vm.canDecrease(row)
        var m28 = _vm.getRowCount(row)
        var m29 = _vm.canIncrease(row)
        var m30 = _vm.getNeedCount(row)
        return {
          $orig: $orig,
          g1: g1,
          m0: m0,
          m1: m1,
          m2: m2,
          m3: m3,
          m4: m4,
          m5: m5,
          m6: m6,
          m7: m7,
          m8: m8,
          m9: m9,
          m10: m10,
          m11: m11,
          m12: m12,
          m13: m13,
          m14: m14,
          m15: m15,
          m16: m16,
          m17: m17,
          m18: m18,
          m19: m19,
          m20: m20,
          m21: m21,
          m22: m22,
          m23: m23,
          m24: m24,
          m25: m25,
          m26: m26,
          m27: m27,
          m28: m28,
          m29: m29,
          m30: m30,
        }
      })
    : null
  var g2 = !_vm.loading ? _vm.finished && _vm.itemList.length : null
  var g3 =
    _vm.isCheckedBatch && !_vm.isBatchInStockFromList
      ? _vm.quickZcSubmitting || _vm.itemList.length === 0
      : null
  var g4 = _vm.isCheckedBatch
    ? _vm.printingTag || _vm.itemList.length === 0
    : null
  var g5 = !_vm.isCheckedBatch
    ? _vm.printingTag || _vm.itemList.length === 0
    : null
  _vm.$mp.data = Object.assign(
    {},
    {
      $root: {
        g0: g0,
        l0: l0,
        g2: g2,
        g3: g3,
        g4: g4,
        g5: g5,
      },
    }
  )
}
var recyclableRender = false
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ 330:
/*!******************************************************************************************************************!*\
  !*** E:/project/yhlc-v1.0/agent-uniapp/sub-pages/supply/supplier-order-print-label.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_supplier_order_print_label_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--13-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./supplier-order-print-label.vue?vue&type=script&lang=js& */ 331);
/* harmony import */ var _D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_supplier_order_print_label_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_supplier_order_print_label_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_supplier_order_print_label_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_supplier_order_print_label_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_supplier_order_print_label_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 331:
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--13-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!E:/project/yhlc-v1.0/agent-uniapp/sub-pages/supply/supplier-order-print-label.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
var _toConsumableArray2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/toConsumableArray */ 18));
var _typeof2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/typeof */ 13));
var _defineProperty2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/defineProperty */ 11));
var _vuex = __webpack_require__(/*! vuex */ 34);
var _batchPrinter = _interopRequireDefault(__webpack_require__(/*! @/utils/printer/batchPrinter.js */ 322));
var _buildSupplierCpclLabel = __webpack_require__(/*! @/utils/printer/buildSupplierCpclLabel.js */ 323);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0, _defineProperty2.default)(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
var EmptyState = function EmptyState() {
  __webpack_require__.e(/*! require.ensure | components/empty-state */ "components/empty-state").then((function () {
    return resolve(__webpack_require__(/*! @/components/empty-state.vue */ 542));
  }).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
};
var _default = {
  components: {
    EmptyState: EmptyState
  },
  data: function data() {
    return {
      supplierOrderId: '',
      supplierOrderNo: '',
      summaryId: '',
      supplierId: '',
      supplierName: '',
      itemList: [],
      pageNum: 1,
      pageSize: 999,
      total: 0,
      loading: false,
      finished: false,
      quickZcSubmitting: false,
      printingTag: false,
      rowCountMap: {},
      cacheKey: '',
      cachePayloadMode: false,
      printCacheKey: '',
      printCacheLabels: [],
      printCacheTimer: null,
      printCacheBuilding: false,
      /** 兼容旧口径：批次原始 status===0 曾表示已入库 */
      batchListRawStatus: '',
      /** order/batch/list 的 inStockStatus：1 已入库，0 未入库 */
      batchListInStockStatus: ''
    };
  },
  computed: _objectSpread(_objectSpread({}, (0, _vuex.mapState)(['token'])), {}, {
    isBatchInStockFromList: function isBatchInStockFromList() {
      var ins = String(this.batchListInStockStatus || '').trim();
      if (ins !== '') return Number(ins) === 1;
      var legacy = String(this.batchListRawStatus || '').trim();
      if (!legacy) return false;
      return Number(legacy) === 0;
    },
    headerStatusText: function headerStatusText() {
      var rows = Array.isArray(this.itemList) ? this.itemList : [];
      var code = this.batchHeaderDisplayStatus(rows);
      return this.batchStatusText(code);
    },
    headerOperateUser: function headerOperateUser() {
      var rows = Array.isArray(this.itemList) ? this.itemList : [];
      for (var i = 0; i < rows.length; i++) {
        var name = rows[i] && rows[i].operateUser != null ? String(rows[i].operateUser).trim() : '';
        if (name) return name;
      }
      return '-';
    },
    headerCheckTime: function headerCheckTime() {
      var rows = Array.isArray(this.itemList) ? this.itemList : [];
      var first = rows[0] || {};
      return first.checkTime || first.createTime || '-';
    },
    isCheckedBatch: function isCheckedBatch() {
      var first = this.itemList[0] || {};
      return this.resolveDeliveryStatus(first) === 1;
    }
  }),
  onLoad: function onLoad(query) {
    var _this = this;
    var q = query || {};
    var cacheKey = String(q.cacheKey || '').trim();
    if (cacheKey) {
      this.cacheKey = cacheKey;
      this.cachePayloadMode = true;
      var payload = null;
      try {
        payload = uni.getStorageSync(cacheKey);
      } catch (e) {
        payload = null;
      }
      if (!payload || (0, _typeof2.default)(payload) !== 'object') {
        uni.showToast({
          title: '打印数据已失效',
          icon: 'none'
        });
        return;
      }
      this.supplierOrderId = String(payload.supplierOrderId || '');
      this.supplierOrderNo = String(payload.supplierOrderNo || '');
      this.supplierName = String(payload.supplierName || '');
      this.batchListInStockStatus = String(payload.batchListInStockStatus != null ? payload.batchListInStockStatus : '').trim();
      this.batchListRawStatus = String(payload.batchListRawStatus != null ? payload.batchListRawStatus : '').trim();
      var rows = Array.isArray(payload.rows) ? payload.rows : [];
      var normalizedRows = rows.map(function (row, index) {
        return _this.ensureRowIdentity(row, "cache_".concat(index));
      });
      this.itemList = normalizedRows;
      this.total = normalizedRows.length;
      this.finished = true;
      this.loading = false;
      this.pageNum = 1;
      this.rowCountMap = {};
      normalizedRows.forEach(function (row) {
        var key = _this.getRowKey(row);
        if (key && _this.rowCountMap[key] == null) {
          _this.setRowCount(row, _this.getNeedCount(row));
        }
        _this.$set(row, '__printSelected', true);
      });
      return;
    }
    this.cacheKey = '';
    this.cachePayloadMode = false;
    this.batchListInStockStatus = String(q.batchListInStockStatus != null ? q.batchListInStockStatus : '').trim();
    this.batchListRawStatus = String(q.batchListRawStatus != null ? q.batchListRawStatus : '').trim();
    this.supplierOrderId = String(q.supplierOrderId || '');
    try {
      this.supplierOrderNo = decodeURIComponent(String(q.supplierOrderNo || ''));
    } catch (e) {
      this.supplierOrderNo = String(q.supplierOrderNo || '');
    }
    this.summaryId = String(q.summaryId || '').trim();
    this.supplierId = String(q.supplierId || '').trim();
    try {
      this.supplierName = q.supplierName ? decodeURIComponent(String(q.supplierName)) : '';
    } catch (e2) {
      this.supplierName = String(q.supplierName || '');
    }
    this.resetAndLoad();
  },
  onUnload: function onUnload() {
    if (this.printCacheTimer) {
      clearTimeout(this.printCacheTimer);
      this.printCacheTimer = null;
    }
    if (!this.cacheKey) return;
    try {
      uni.removeStorageSync(this.cacheKey);
    } catch (e) {
      /* ignore */
    }
  },
  methods: {
    resolveDeliveryStatus: function resolveDeliveryStatus(row) {
      var r = row || {};
      var status = Number(r.status);
      if (status === 0 || status === 1) return status;
      var inStockStatus = Number(r.inStockStatus);
      if (inStockStatus === 1) return 3;
      var checkStatus = Number(r.checkStatus);
      if (checkStatus === 1) return 1;
      if (status === 3) return 3;
      return 0;
    },
    /** 与 supplier-order、送货单详情一致 */mapBatchStatus: function mapBatchStatus(row) {
      var r = row || {};
      var checkStatus = Number(r.checkStatus);
      if (checkStatus === 0) return 0;
      if (checkStatus === 1) return 1;
      if (checkStatus === 2) return 2;
      if (checkStatus === 3) return 4;
      var status = Number(r.status);
      if (status === 0) return 3;
      return 0;
    },
    batchHeaderDisplayStatus: function batchHeaderDisplayStatus(rows) {
      var list = Array.isArray(rows) ? rows.filter(Boolean) : [];
      if (!list.length) return null;
      var checks = list.map(function (row) {
        return Number((row || {}).checkStatus);
      });
      var finite = checks.filter(function (n) {
        return Number.isFinite(n);
      });
      if (!finite.length) {
        return this.mapBatchStatus(list[0]);
      }
      var has0 = finite.some(function (c) {
        return c === 0;
      });
      var has1 = finite.some(function (c) {
        return c === 1;
      });
      var has2 = finite.some(function (c) {
        return c === 2;
      });
      var has3 = finite.some(function (c) {
        return c === 3;
      });
      if (has3) return 4;
      if (has1 && has2 || has0 && has1 || has0 && has2) return 4;
      if (has2 && !has1 && !has0) return 2;
      if (has1 && !has0 && !has2) return 1;
      if (has0 && !has1 && !has2) return 0;
      return this.mapBatchStatus(list[0]);
    },
    batchStatusText: function batchStatusText(code) {
      if (code == null || code === '') return '-';
      var v = Number(code);
      if (v === 0) return '待质检';
      if (v === 1) return '已质检';
      if (v === 2) return '不通过';
      if (v === 3) return '已装车';
      if (v === 4) return '部分质检';
      return '未知';
    },
    lineDeliveryStatusText: function lineDeliveryStatusText(row) {
      var r = row || {};
      var biz = String(r.bizType || r.batchBizType || '').toUpperCase();
      var current = Number(r.deliveryStatus);
      if (biz === 'ALLOCATE') {
        if (current === 1) return '已入库';
        if (current === 2) return '部分入库';
        return '未入库';
      }
      if (current === 1) return '已发货';
      if (current === 2) return '部分发货';
      return '待发货';
    },
    lineCheckStatusText: function lineCheckStatusText(row) {
      var c = Number((row || {}).checkStatus);
      if (c === 0) return '未质检';
      if (c === 1) return '通过';
      if (c === 2) return '不通过';
      if (c === 3) return '部分不通过';
      return '-';
    },
    lineCheckStatusTone: function lineCheckStatusTone(row) {
      var c = Number((row || {}).checkStatus);
      if (c === 1) return 'pass';
      if (c === 2 || c === 3) return 'fail';
      if (c === 0) return 'pending';
      return 'muted';
    },
    formatUnqualifiedReason: function formatUnqualifiedReason(row) {
      var s = row && row.unqualifiedReason != null ? String(row.unqualifiedReason).trim() : '';
      return s || '';
    },
    resetAndLoad: function resetAndLoad() {
      if (this.cachePayloadMode) return;
      this.pageNum = 1;
      this.total = 0;
      this.finished = false;
      this.itemList = [];
      this.rowCountMap = {};
      this.loadList();
    },
    onScrollLower: function onScrollLower() {
      this.loadList();
    },
    normalizeImageUrl: function normalizeImageUrl(rawUrl) {
      var u = String(rawUrl || '').trim();
      if (!u) return '';
      if (/^https?:\/\//i.test(u)) return u;
      if (/^\/\//.test(u)) return "https:".concat(u);
      return u;
    },
    pickImageUrl: function pickImageUrl(raw) {
      if (!raw) return '';
      if (typeof raw === 'string') {
        var s = raw.trim();
        if (!s) return '';
        if (/^https?:\/\//i.test(s) || /^\/\//.test(s) || /^data:image\//i.test(s)) {
          return this.normalizeImageUrl(s);
        }
        try {
          var parsed = JSON.parse(s);
          return this.pickImageUrl(parsed);
        } catch (e) {
          return '';
        }
      }
      if (Array.isArray(raw)) {
        if (!raw.length) return '';
        return this.pickImageUrl(raw[0]);
      }
      if ((0, _typeof2.default)(raw) === 'object') {
        var direct = raw.url || raw.imageUrl || raw.pic || raw.mainPic || raw.productImage || raw.cover;
        return this.normalizeImageUrl(direct);
      }
      return '';
    },
    getItemImage: function getItemImage(item) {
      var it = item || {};
      return this.pickImageUrl(it.image || it.productImage || it.pic || it.mainPic || it.sliderImage || it.cover);
    },
    formatSpec: function formatSpec(item) {
      var it = item || {};
      return String(it.productSpec || it.productBrand || '').trim();
    },
    getItemTag: function getItemTag(item) {
      var it = item || {};
      var t = it.levelName || it.gradeName || it.level || it.productLevel;
      if (t == null || String(t).trim() === '') return '';
      return String(t).trim();
    },
    getGross: function getGross(item) {
      var v = item && item.netWeight != null && String(item.netWeight).trim() !== '' ? item.netWeight : '-';
      return String(v);
    },
    getNet: function getNet(item) {
      var v = item && item.weight != null && String(item.weight).trim() !== '' ? item.weight : '-';
      return String(v);
    },
    getNeedCount: function getNeedCount(item) {
      var it = item || {};
      var v = it.deliverNum != null ? it.deliverNum : it.quantity != null ? it.quantity : it.actualQuantity != null ? it.actualQuantity : it.checkQuantity != null ? it.checkQuantity : it.lineQuantity != null ? it.lineQuantity : it.num;
      var n = Number(v);
      return Number.isFinite(n) ? n : 0;
    },
    /** 勾选状态挂在行对象上，避免小程序端与行对象脱节导致未选仍打印 */isRowSelected: function isRowSelected(item) {
      var r = item || {};
      return r.__printSelected === true;
    },
    toggleRowSelected: function toggleRowSelected(item) {
      var r = item || {};
      var next = !(r.__printSelected === true);
      this.$set(r, '__printSelected', next);
      this.schedulePreparePrintCache();
    },
    /** 微信小程序：v-for 内 @click 传对象会导致 data-event-opts 编译异常，改用下标 */onPreviewImageByIndex: function onPreviewImageByIndex(rowIndex) {
      var row = this.itemList[rowIndex];
      if (!row) return;
      this.onPreviewImage(row);
    },
    toggleRowSelectedByIndex: function toggleRowSelectedByIndex(rowIndex) {
      var row = this.itemList[rowIndex];
      if (!row) return;
      this.toggleRowSelected(row);
    },
    changeRowCountByIndex: function changeRowCountByIndex(rowIndex, delta) {
      var row = this.itemList[rowIndex];
      if (!row) return;
      this.changeRowCount(row, delta);
    },
    getRowKey: function getRowKey(item) {
      var it = item || {};
      if (it.__rowKey != null && String(it.__rowKey).trim() !== '') return String(it.__rowKey).trim();
      var id = it.id != null && String(it.id).trim() !== '' ? String(it.id).trim() : '';
      if (id) return id;
      return [it.barCode || it.barcode || '', it.consignee || '', it.pzNo || '', it.storeName || '', it.carNo || ''].join('|');
    },
    ensureRowIdentity: function ensureRowIdentity(row) {
      var hint = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
      var safeRow = row && (0, _typeof2.default)(row) === 'object' ? row : {};
      if (safeRow.__rowKey != null && String(safeRow.__rowKey).trim() !== '') {
        return safeRow;
      }
      var rawId = safeRow.id != null && String(safeRow.id).trim() !== '' ? String(safeRow.id).trim() : '';
      var core = [safeRow.barCode || safeRow.barcode || '', safeRow.productId || '', safeRow.pzNo || '', safeRow.storeName || safeRow.consignee || '', safeRow.carNo || ''].map(function (v) {
        return String(v || '').trim();
      }).join('|');
      safeRow.__rowKey = "".concat(rawId || 'noid', "|").concat(core, "|").concat(String(hint || '').trim());
      return safeRow;
    },
    getRowCount: function getRowCount(item) {
      var key = this.getRowKey(item);
      if (!key) return this.getNeedCount(item);
      var v = this.rowCountMap[key];
      var n = Number(v);
      return Number.isFinite(n) ? n : this.getNeedCount(item);
    },
    setRowCount: function setRowCount(item, value) {
      var key = this.getRowKey(item);
      if (!key) return;
      var max = this.getNeedCount(item);
      var n = Number(value);
      var safe = Number.isFinite(n) ? n : 0;
      var next = Math.min(max, Math.max(0, Math.floor(safe)));
      this.rowCountMap = _objectSpread(_objectSpread({}, this.rowCountMap), {}, (0, _defineProperty2.default)({}, key, next));
      this.schedulePreparePrintCache();
    },
    changeRowCount: function changeRowCount(item, delta) {
      var d = Number(delta || 0);
      if (d > 0 && !this.canIncrease(item)) return;
      if (d < 0 && !this.canDecrease(item)) return;
      var cur = this.getRowCount(item);
      this.setRowCount(item, cur + d);
    },
    canIncrease: function canIncrease(item) {
      return this.getRowCount(item) < this.getNeedCount(item);
    },
    canDecrease: function canDecrease(item) {
      return this.getRowCount(item) > 0;
    },
    getLoadedCount: function getLoadedCount(item) {
      var it = item || {};
      var v = it.actualQuantity != null ? it.actualQuantity : it.checkQuantity != null ? it.checkQuantity : it.deliverNum;
      var n = Number(v);
      return Number.isFinite(n) ? n : 0;
    },
    getLatestLoadTime: function getLatestLoadTime(item) {
      var it = item || {};
      return it.inStockTime || it.deliveryTime || it.updateTime || it.checkTime || it.createTime || '-';
    },
    onPreviewImage: function onPreviewImage(item) {
      var src = this.getItemImage(item);
      if (!src) {
        uni.showToast({
          title: '暂无图片',
          icon: 'none'
        });
        return;
      }
      uni.previewImage({
        urls: [src],
        current: src
      });
    },
    collectPassedBatchRefIds: function collectPassedBatchRefIds(rows) {
      var list = Array.isArray(rows) ? rows : [];
      var out = [];
      var seen = new Set();
      for (var i = 0; i < list.length; i++) {
        var row = list[i] || {};
        if (Number(row.checkStatus) !== 1) continue;
        var rid = row.id != null ? String(row.id).trim() : '';
        if (!rid || seen.has(rid)) continue;
        seen.add(rid);
        out.push(rid);
      }
      return out;
    },
    onQuickLoadDone: function onQuickLoadDone() {
      var _this2 = this;
      if (!this.supplierOrderId || this.quickZcSubmitting) return;
      var sourceRows = Array.isArray(this.itemList) ? this.itemList : [];
      var passedIds = this.collectPassedBatchRefIds(sourceRows);
      if (!passedIds.length) {
        uni.showToast({
          title: '暂无质检通过的商品可装车',
          icon: 'none'
        });
        return;
      }
      var skipped = sourceRows.filter(function (r) {
        return Number((r || {}).checkStatus) !== 1;
      }).length;
      var modalContent = skipped > 0 ? "\u672C\u5355\u542B\u672A\u8D28\u68C0\u6216\u672A\u901A\u8FC7\u7684\u660E\u7EC6\uFF0C\u5C06\u4EC5\u4E3A\u8D28\u68C0\u901A\u8FC7\u7684 ".concat(passedIds.length, " \u6761\u529E\u7406\u88C5\u8F66\uFF0C\u662F\u5426\u7EE7\u7EED\uFF1F") : '确认将该送货单中质检通过的商品标记为装车完毕吗？';
      uni.showModal({
        title: '确认装车完毕',
        content: modalContent,
        confirmText: '确定',
        cancelText: '取消',
        success: function success(modalRes) {
          if (!modalRes.confirm) return;
          _this2.quickZcSubmitting = true;
          uni.showLoading({
            title: '处理中...',
            mask: true
          });
          _this2.request('put', 'order/batch/gysZc', _this2.token, {
            id: _this2.supplierOrderId,
            inStockStatus: 1,
            ids: passedIds
          }).then(function (res) {
            if (res && res.code && Number(res.code) !== 200) {
              return Promise.reject(res);
            }
            uni.showToast({
              title: '装车完成',
              icon: 'success'
            });
            try {
              var ec = typeof _this2.getOpenerEventChannel === 'function' ? _this2.getOpenerEventChannel() : null;
              if (ec && typeof ec.emit === 'function') {
                ec.emit('supplierOrderListRefresh');
              }
            } catch (e) {
              /* 非 navigateTo 打开时可能无 channel */
            }
            if (_this2.cachePayloadMode) {
              uni.navigateBack({
                fail: function fail() {}
              });
              return;
            }
            _this2.resetAndLoad();
          }).catch(function (err) {
            var msg = err && err.msg || '装车失败，请稍后重试';
            uni.showToast({
              title: msg,
              icon: 'none'
            });
          }).finally(function () {
            uni.hideLoading();
            _this2.quickZcSubmitting = false;
          });
        }
      });
    },
    loadList: function loadList() {
      var _this3 = this;
      if (this.cachePayloadMode) return;
      if (!this.supplierOrderId || this.loading || this.finished) return;
      this.loading = true;
      var params = {
        pageNum: this.pageNum,
        pageSize: this.pageSize,
        batchId: this.supplierOrderId
      };
      this.request('get', 'order/batchRef/list', this.token, params).then(function (res) {
        var rows = Array.isArray(res && res.rows) ? res.rows : [];
        var startIndex = _this3.itemList.length;
        var normalizedRows = rows.map(function (row, idx) {
          return _this3.ensureRowIdentity(row, "page".concat(_this3.pageNum, "_").concat(startIndex + idx));
        });
        if (!_this3.summaryId && rows.length > 0) {
          var r0 = normalizedRows[0] || {};
          var pick = r0.summaryId || r0.dailySummaryId || r0.summaryDTO && r0.summaryDTO.id || r0.summary_id;
          if (pick != null && String(pick).trim() !== '') {
            _this3.summaryId = String(pick).trim();
          }
        }
        if (!_this3.supplierId && rows.length > 0) {
          var _r = normalizedRows[0] || {};
          var sp = _r.supplierId;
          if (sp != null && String(sp).trim() !== '') _this3.supplierId = String(sp).trim();
        }
        if (!_this3.supplierName && rows.length > 0) {
          var _r2 = normalizedRows[0] || {};
          var nm = _r2.supplierName;
          if (nm != null && String(nm).trim() !== '') _this3.supplierName = String(nm).trim();
        }
        normalizedRows.forEach(function (row) {
          var key = _this3.getRowKey(row);
          if (!key) return;
          if (_this3.rowCountMap[key] == null) {
            _this3.setRowCount(row, _this3.getNeedCount(row));
          } else {
            _this3.setRowCount(row, _this3.getRowCount(row));
          }
          _this3.$set(row, '__printSelected', true);
        });
        var total = Number(res && res.total) || 0;
        _this3.itemList = [].concat((0, _toConsumableArray2.default)(_this3.itemList), (0, _toConsumableArray2.default)(normalizedRows));
        _this3.total = total;
        _this3.finished = _this3.itemList.length >= total || normalizedRows.length < _this3.pageSize;
        if (normalizedRows.length > 0) _this3.pageNum += 1;
        _this3.schedulePreparePrintCache();
      }).catch(function () {}).finally(function () {
        _this3.loading = false;
      });
    },
    onPrintTag: function onPrintTag() {
      var jobs = this.collectPrintJobs(true);
      if (!jobs.length) return;
      this.onPrint(jobs);
    },
    onPrint: function onPrint(items) {
      var list = Array.isArray(items) ? items : [items];
      this.printCpclLabel(list);
    },
    printCpclLabel: function printCpclLabel(items) {
      var _this4 = this;
      return (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee() {
        var sourceRows, rows, cacheKey, labels;
        return _regenerator.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                if (!_this4.printingTag) {
                  _context.next = 3;
                  break;
                }
                uni.showToast({
                  title: '正在打印中，请稍候',
                  icon: 'none'
                });
                return _context.abrupt("return");
              case 3:
                sourceRows = Array.isArray(items) ? items : [items];
                rows = sourceRows.filter(Boolean);
                if (rows.length) {
                  _context.next = 8;
                  break;
                }
                uni.showToast({
                  title: '暂无可打印商品',
                  icon: 'none'
                });
                return _context.abrupt("return");
              case 8:
                cacheKey = _this4.getPrintCacheKey(rows);
                labels = _this4.getCachedPrintLabels(rows, cacheKey);
                _this4.printingTag = true;
                _context.prev = 11;
                _batchPrinter.default.clearQueue();
                _batchPrinter.default.addCpclLabels(labels);
                _context.next = 16;
                return _batchPrinter.default.start({
                  onProgress: function onProgress(_ref) {
                    var current = _ref.current,
                      total = _ref.total;
                    uni.showLoading({
                      title: "\u6253\u5370\u4E2D ".concat(current, "/").concat(total),
                      mask: true
                    });
                  },
                  onComplete: function onComplete(_ref2) {
                    var total = _ref2.total;
                    uni.showToast({
                      title: "\u5DF2\u53D1\u9001".concat(total, "\u5F20"),
                      icon: 'success'
                    });
                  },
                  onError: function onError(e) {
                    uni.showToast({
                      title: e && e.message || '打印失败',
                      icon: 'none'
                    });
                  }
                });
              case 16:
                _context.next = 21;
                break;
              case 18:
                _context.prev = 18;
                _context.t0 = _context["catch"](11);
                uni.showToast({
                  title: _context.t0 && _context.t0.message || '打印失败',
                  icon: 'none'
                });
              case 21:
                _context.prev = 21;
                _this4.printingTag = false;
                uni.hideLoading();
                return _context.finish(21);
              case 25:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, null, [[11, 18, 21, 25]]);
      }))();
    },
    collectPrintJobs: function collectPrintJobs() {
      var _this5 = this;
      var showToast = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
      var base = this.itemList.filter(function (item) {
        return _this5.isRowSelected(item);
      });
      if (!base.length) {
        if (showToast) uni.showToast({
          title: '请至少勾选一条明细',
          icon: 'none'
        });
        return [];
      }
      var rows = base.filter(function (row) {
        return _this5.getRowCount(row) > 0;
      });
      if (!rows.length) {
        if (showToast) uni.showToast({
          title: '勾选明细分拣件数需大于 0',
          icon: 'none'
        });
        return [];
      }
      var jobs = [];
      for (var i = 0; i < rows.length; i++) {
        var row = rows[i];
        var n = this.getRowCount(row);
        for (var j = 0; j < n; j++) {
          jobs.push(row);
        }
      }
      return jobs;
    },
    getPrintCacheKey: function getPrintCacheKey(rows) {
      var _this6 = this;
      var list = Array.isArray(rows) ? rows : [];
      return [this.supplierName || '', list.map(function (row) {
        return _this6.getRowKey(row);
      }).join(',')].join('|');
    },
    getCachedPrintLabels: function getCachedPrintLabels(rows, cacheKey) {
      if (cacheKey && this.printCacheKey === cacheKey && Array.isArray(this.printCacheLabels) && this.printCacheLabels.length === rows.length) {
        return this.printCacheLabels;
      }
      var labels = this.buildPrintLabels(rows);
      this.printCacheKey = cacheKey;
      this.printCacheLabels = labels;
      return labels;
    },
    buildPrintLabels: function buildPrintLabels(rows) {
      var _this7 = this;
      return rows.map(function (row) {
        return (0, _buildSupplierCpclLabel.buildSupplierCpclLabel)(row, {
          supplierName: _this7.supplierName
        });
      });
    },
    schedulePreparePrintCache: function schedulePreparePrintCache() {
      var _this8 = this;
      if (this.printCacheTimer) {
        clearTimeout(this.printCacheTimer);
      }
      this.printCacheTimer = setTimeout(function () {
        _this8.printCacheTimer = null;
        _this8.preparePrintCache();
      }, 120);
    },
    preparePrintCache: function preparePrintCache() {
      if (this.printCacheBuilding || this.printingTag) return;
      var rows = this.collectPrintJobs(false);
      if (!rows.length) {
        this.printCacheKey = '';
        this.printCacheLabels = [];
        return;
      }
      var cacheKey = this.getPrintCacheKey(rows);
      if (this.printCacheKey === cacheKey && this.printCacheLabels.length === rows.length) return;
      this.printCacheBuilding = true;
      try {
        this.printCacheLabels = this.buildPrintLabels(rows);
        this.printCacheKey = cacheKey;
        console.log('已预生成打印标签:', this.printCacheLabels.length);
      } catch (e) {
        this.printCacheKey = '';
        this.printCacheLabels = [];
        console.warn('预生成打印标签失败', e);
      } finally {
        this.printCacheBuilding = false;
      }
    }
  }
};
exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 2)["default"]))

/***/ }),

/***/ 332:
/*!***************************************************************************************************************************************************!*\
  !*** E:/project/yhlc-v1.0/agent-uniapp/sub-pages/supply/supplier-order-print-label.vue?vue&type=style&index=0&id=94706a04&lang=scss&scoped=true& ***!
  \***************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_supplier_order_print_label_vue_vue_type_style_index_0_id_94706a04_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/mini-css-extract-plugin/dist/loader.js??ref--8-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--8-oneOf-1-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-2!./node_modules/postcss-loader/src??ref--8-oneOf-1-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/sass-loader/dist/cjs.js??ref--8-oneOf-1-4!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-5!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./supplier-order-print-label.vue?vue&type=style&index=0&id=94706a04&lang=scss&scoped=true& */ 333);
/* harmony import */ var _D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_supplier_order_print_label_vue_vue_type_style_index_0_id_94706a04_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_supplier_order_print_label_vue_vue_type_style_index_0_id_94706a04_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_supplier_order_print_label_vue_vue_type_style_index_0_id_94706a04_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_supplier_order_print_label_vue_vue_type_style_index_0_id_94706a04_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_supplier_order_print_label_vue_vue_type_style_index_0_id_94706a04_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 333:
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js??ref--8-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--8-oneOf-1-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-2!./node_modules/postcss-loader/src??ref--8-oneOf-1-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/sass-loader/dist/cjs.js??ref--8-oneOf-1-4!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-5!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!E:/project/yhlc-v1.0/agent-uniapp/sub-pages/supply/supplier-order-print-label.vue?vue&type=style&index=0&id=94706a04&lang=scss&scoped=true& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
    if(false) { var cssReload; }
  

/***/ })

},[[326,"common/runtime","common/vendor","sub-pages/supply/common/vendor"]]]);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/sub-pages/supply/supplier-order-print-label.js.map
},{isPage:true,isComponent:true,currentFile:'sub-pages/supply/supplier-order-print-label.js'});require("sub-pages/supply/supplier-order-print-label.js");$gwx3_XC_3=function(_,_v,_n,_p,_s,_wp,_wl,$gwn,$gwl,$gwh,wh,$gstack,$gwrt,gra,grb,TestTest,wfor,_ca,_da,_r,_rz,_o,_oz,_1,_1z,_2,_2z,_m,_mz,nv_getDate,nv_getRegExp,nv_console,nv_parseInt,nv_parseFloat,nv_isNaN,nv_isFinite,nv_decodeURI,nv_decodeURIComponent,nv_encodeURI,nv_encodeURIComponent,$gdc,nv_JSON,_af,_gv,_ai,_grp,_gd,_gapi,$ixc,_ic,_w,_ev,_tsd){return function(path,global){
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
var z=__WXML_GLOBAL__.ops_set.$gwx3_XC_3 || [];
function gz$gwx3_XC_3_1(){
if( __WXML_GLOBAL__.ops_cached.$gwx3_XC_3_1)return __WXML_GLOBAL__.ops_cached.$gwx3_XC_3_1
__WXML_GLOBAL__.ops_cached.$gwx3_XC_3_1=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx3_XC_3_1);return __WXML_GLOBAL__.ops_cached.$gwx3_XC_3_1
}
__WXML_GLOBAL__.ops_set.$gwx3_XC_3=z;
__WXML_GLOBAL__.ops_init.$gwx3_XC_3=true;
var x=['./sub-pages/supply/goods-reapply-upload.wxml'];d_[x[0]]={}
var m0=function(e,s,r,gg){
var z=gz$gwx3_XC_3_1()
return r
}
e_[x[0]]={f:m0,j:[],i:[],ti:[],ic:[]}
if(path&&e_[path]){
return function(env,dd,global){$gwxc=0;var root={"tag":"wx-page"};root.children=[]
;g="$gwx3_XC_3";var main=e_[path].f
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
}(__g.a,__g.b,__g.c,__g.d,__g.e,__g.f,__g.g,__g.h,__g.i,__g.j,__g.k,__g.l,__g.m,__g.n,__g.o,__g.p,__g.q,__g.r,__g.s,__g.t,__g.u,__g.v,__g.w,__g.x,__g.y,__g.z,__g.A,__g.B,__g.C,__g.D,__g.E,__g.F,__g.G,__g.H,__g.I,__g.J,__g.K,__g.L,__g.M,__g.N,__g.O,__g.P,__g.Q,__g.R,__g.S,__g.T,__g.U,__g.V,__g.W,__g.X,__g.Y,__g.Z,__g.aa);if(__vd_version_info__.delayedGwx||false)$gwx3_XC_3();	if (__vd_version_info__.delayedGwx) __wxAppCode__['sub-pages/supply/goods-reapply-upload.wxml'] = [$gwx3_XC_3, './sub-pages/supply/goods-reapply-upload.wxml'];else __wxAppCode__['sub-pages/supply/goods-reapply-upload.wxml'] = $gwx3_XC_3( './sub-pages/supply/goods-reapply-upload.wxml' );
	;__wxRoute = "sub-pages/supply/goods-reapply-upload";__wxRouteBegin = true;__wxAppCurrentFile__="sub-pages/supply/goods-reapply-upload.js";define("sub-pages/supply/goods-reapply-upload.js",function(require,module,exports,window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){
require('./common/vendor.js');(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["sub-pages/supply/goods-reapply-upload"],{

/***/ 294:
/*!******************************************************************************************************!*\
  !*** E:/project/yhlc-v1.0/agent-uniapp/main.js?{"page":"sub-pages%2Fsupply%2Fgoods-reapply-upload"} ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(wx, createPage) {

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ 4);
__webpack_require__(/*! uni-pages */ 30);
var _vue = _interopRequireDefault(__webpack_require__(/*! vue */ 25));
var _goodsReapplyUpload = _interopRequireDefault(__webpack_require__(/*! ./sub-pages/supply/goods-reapply-upload.vue */ 295));
// @ts-ignore
wx.__webpack_require_UNI_MP_PLUGIN__ = __webpack_require__;
createPage(_goodsReapplyUpload.default);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/wx.js */ 1)["default"], __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 2)["createPage"]))

/***/ }),

/***/ 295:
/*!***********************************************************************************!*\
  !*** E:/project/yhlc-v1.0/agent-uniapp/sub-pages/supply/goods-reapply-upload.vue ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _goods_reapply_upload_vue_vue_type_template_id_a80ecc98___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./goods-reapply-upload.vue?vue&type=template&id=a80ecc98& */ 296);
/* harmony import */ var _goods_reapply_upload_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./goods-reapply-upload.vue?vue&type=script&lang=js& */ 298);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _goods_reapply_upload_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _goods_reapply_upload_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 39);

var renderjs




/* normalize component */

var component = Object(_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _goods_reapply_upload_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _goods_reapply_upload_vue_vue_type_template_id_a80ecc98___WEBPACK_IMPORTED_MODULE_0__["render"],
  _goods_reapply_upload_vue_vue_type_template_id_a80ecc98___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null,
  false,
  _goods_reapply_upload_vue_vue_type_template_id_a80ecc98___WEBPACK_IMPORTED_MODULE_0__["components"],
  renderjs
)

component.options.__file = "sub-pages/supply/goods-reapply-upload.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 296:
/*!******************************************************************************************************************!*\
  !*** E:/project/yhlc-v1.0/agent-uniapp/sub-pages/supply/goods-reapply-upload.vue?vue&type=template&id=a80ecc98& ***!
  \******************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_goods_reapply_upload_vue_vue_type_template_id_a80ecc98___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--17-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./goods-reapply-upload.vue?vue&type=template&id=a80ecc98& */ 297);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_goods_reapply_upload_vue_vue_type_template_id_a80ecc98___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_goods_reapply_upload_vue_vue_type_template_id_a80ecc98___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_goods_reapply_upload_vue_vue_type_template_id_a80ecc98___WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_goods_reapply_upload_vue_vue_type_template_id_a80ecc98___WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),

/***/ 297:
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--17-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!E:/project/yhlc-v1.0/agent-uniapp/sub-pages/supply/goods-reapply-upload.vue?vue&type=template&id=a80ecc98& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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

/***/ 298:
/*!************************************************************************************************************!*\
  !*** E:/project/yhlc-v1.0/agent-uniapp/sub-pages/supply/goods-reapply-upload.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_goods_reapply_upload_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--13-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./goods-reapply-upload.vue?vue&type=script&lang=js& */ 299);
/* harmony import */ var _D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_goods_reapply_upload_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_goods_reapply_upload_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_goods_reapply_upload_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_goods_reapply_upload_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_goods_reapply_upload_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 299:
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--13-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!E:/project/yhlc-v1.0/agent-uniapp/sub-pages/supply/goods-reapply-upload.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
var _default = {
  onLoad: function onLoad(query) {
    var id = encodeURIComponent(String(query && query.id || ''));
    var productId = encodeURIComponent(String(query && query.productId || ''));
    var url = "/sub-pages/supply/supplier-goods-reapply?id=".concat(id, "&productId=").concat(productId);
    uni.redirectTo({
      url: url
    });
  }
};
exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 2)["default"]))

/***/ })

},[[294,"common/runtime","common/vendor"]]]);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/sub-pages/supply/goods-reapply-upload.js.map
},{isPage:true,isComponent:true,currentFile:'sub-pages/supply/goods-reapply-upload.js'});require("sub-pages/supply/goods-reapply-upload.js");$gwx3_XC_4=function(_,_v,_n,_p,_s,_wp,_wl,$gwn,$gwl,$gwh,wh,$gstack,$gwrt,gra,grb,TestTest,wfor,_ca,_da,_r,_rz,_o,_oz,_1,_1z,_2,_2z,_m,_mz,nv_getDate,nv_getRegExp,nv_console,nv_parseInt,nv_parseFloat,nv_isNaN,nv_isFinite,nv_decodeURI,nv_decodeURIComponent,nv_encodeURI,nv_encodeURIComponent,$gdc,nv_JSON,_af,_gv,_ai,_grp,_gd,_gapi,$ixc,_ic,_w,_ev,_tsd){return function(path,global){
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
var z=__WXML_GLOBAL__.ops_set.$gwx3_XC_4 || [];
function gz$gwx3_XC_4_1(){
if( __WXML_GLOBAL__.ops_cached.$gwx3_XC_4_1)return __WXML_GLOBAL__.ops_cached.$gwx3_XC_4_1
__WXML_GLOBAL__.ops_cached.$gwx3_XC_4_1=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'goods-search-page data-v-3a1dc22e'])
Z([3,'search-wrap data-v-3a1dc22e'])
Z([3,'__l'])
Z([3,'search-icon data-v-3a1dc22e'])
Z([3,'#999'])
Z([3,'18'])
Z([3,'search'])
Z([3,'7b333f3d-1'])
Z([[6],[[7],[3,'$root']],[3,'g0']])
Z([3,'__e'])
Z([3,'clear-btn data-v-3a1dc22e'])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[[5],[1,'clearInput']],[[4],[[5],[1,'$event']]]]]]]]]]])
Z(z[2])
Z([3,'data-v-3a1dc22e'])
Z([3,'#bbb'])
Z(z[5])
Z([3,'clear'])
Z([3,'7b333f3d-2'])
Z([3,'history-block data-v-3a1dc22e'])
Z([[2,'>'],[[6],[[7],[3,'$root']],[3,'g1']],[1,0]])
Z(z[9])
Z([3,'history-del data-v-3a1dc22e'])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[[5],[1,'clearHistory']],[[4],[[5],[1,'$event']]]]]]]]]]])
Z(z[2])
Z(z[13])
Z(z[4])
Z([3,'16'])
Z([3,'trash'])
Z([3,'7b333f3d-3'])
Z([[6],[[7],[3,'$root']],[3,'g2']])
Z([3,'result-inner data-v-3a1dc22e'])
Z([[7],[3,'emptyVisible']])
Z(z[2])
Z(z[13])
Z([3,'clipboard'])
Z([[7],[3,'emptyText']])
Z([3,'7b333f3d-4'])
})(__WXML_GLOBAL__.ops_cached.$gwx3_XC_4_1);return __WXML_GLOBAL__.ops_cached.$gwx3_XC_4_1
}
__WXML_GLOBAL__.ops_set.$gwx3_XC_4=z;
__WXML_GLOBAL__.ops_init.$gwx3_XC_4=true;
var x=['./sub-pages/supply/goods-search.wxml'];d_[x[0]]={}
var m0=function(e,s,r,gg){
var z=gz$gwx3_XC_4_1()
var bSD=_n('view')
_rz(z,bSD,'class',0,e,s,gg)
var oTD=_n('view')
_rz(z,oTD,'class',1,e,s,gg)
var oVD=_mz(z,'uni-icons',['bind:__l',2,'class',1,'color',2,'size',3,'type',4,'vueId',5],[],e,s,gg)
_(oTD,oVD)
var xUD=_v()
_(oTD,xUD)
if(_oz(z,8,e,s,gg)){xUD.wxVkey=1
var fWD=_mz(z,'view',['bindtap',9,'class',1,'data-event-opts',2],[],e,s,gg)
var cXD=_mz(z,'uni-icons',['bind:__l',12,'class',1,'color',2,'size',3,'type',4,'vueId',5],[],e,s,gg)
_(fWD,cXD)
_(xUD,fWD)
}
xUD.wxXCkey=1
xUD.wxXCkey=3
_(bSD,oTD)
var hYD=_n('view')
_rz(z,hYD,'class',18,e,s,gg)
var oZD=_v()
_(hYD,oZD)
if(_oz(z,19,e,s,gg)){oZD.wxVkey=1
var o2D=_mz(z,'view',['bindtap',20,'class',1,'data-event-opts',2],[],e,s,gg)
var l3D=_mz(z,'uni-icons',['bind:__l',23,'class',1,'color',2,'size',3,'type',4,'vueId',5],[],e,s,gg)
_(o2D,l3D)
_(oZD,o2D)
}
var c1D=_v()
_(hYD,c1D)
if(_oz(z,29,e,s,gg)){c1D.wxVkey=1
}
oZD.wxXCkey=1
oZD.wxXCkey=3
c1D.wxXCkey=1
_(bSD,hYD)
var a4D=_n('view')
_rz(z,a4D,'class',30,e,s,gg)
var t5D=_v()
_(a4D,t5D)
if(_oz(z,31,e,s,gg)){t5D.wxVkey=1
var e6D=_mz(z,'empty-state',['bind:__l',32,'class',1,'iconType',2,'text',3,'vueId',4],[],e,s,gg)
_(t5D,e6D)
}
else{t5D.wxVkey=2
}
t5D.wxXCkey=1
t5D.wxXCkey=3
_(bSD,a4D)
_(r,bSD)
return r
}
e_[x[0]]={f:m0,j:[],i:[],ti:[],ic:[]}
if(path&&e_[path]){
return function(env,dd,global){$gwxc=0;var root={"tag":"wx-page"};root.children=[]
;g="$gwx3_XC_4";var main=e_[path].f
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
}(__g.a,__g.b,__g.c,__g.d,__g.e,__g.f,__g.g,__g.h,__g.i,__g.j,__g.k,__g.l,__g.m,__g.n,__g.o,__g.p,__g.q,__g.r,__g.s,__g.t,__g.u,__g.v,__g.w,__g.x,__g.y,__g.z,__g.A,__g.B,__g.C,__g.D,__g.E,__g.F,__g.G,__g.H,__g.I,__g.J,__g.K,__g.L,__g.M,__g.N,__g.O,__g.P,__g.Q,__g.R,__g.S,__g.T,__g.U,__g.V,__g.W,__g.X,__g.Y,__g.Z,__g.aa);if(__vd_version_info__.delayedGwx||false)$gwx3_XC_4();	if (__vd_version_info__.delayedGwx) __wxAppCode__['sub-pages/supply/goods-search.wxml'] = [$gwx3_XC_4, './sub-pages/supply/goods-search.wxml'];else __wxAppCode__['sub-pages/supply/goods-search.wxml'] = $gwx3_XC_4( './sub-pages/supply/goods-search.wxml' );
	;__wxRoute = "sub-pages/supply/goods-search";__wxRouteBegin = true;__wxAppCurrentFile__="sub-pages/supply/goods-search.js";define("sub-pages/supply/goods-search.js",function(require,module,exports,window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){
require('./common/vendor.js');(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["sub-pages/supply/goods-search"],{

/***/ 257:
/*!**********************************************************************************************!*\
  !*** E:/project/yhlc-v1.0/agent-uniapp/main.js?{"page":"sub-pages%2Fsupply%2Fgoods-search"} ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(wx, createPage) {

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ 4);
__webpack_require__(/*! uni-pages */ 30);
var _vue = _interopRequireDefault(__webpack_require__(/*! vue */ 25));
var _goodsSearch = _interopRequireDefault(__webpack_require__(/*! ./sub-pages/supply/goods-search.vue */ 258));
// @ts-ignore
wx.__webpack_require_UNI_MP_PLUGIN__ = __webpack_require__;
createPage(_goodsSearch.default);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/wx.js */ 1)["default"], __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 2)["createPage"]))

/***/ }),

/***/ 258:
/*!***************************************************************************!*\
  !*** E:/project/yhlc-v1.0/agent-uniapp/sub-pages/supply/goods-search.vue ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _goods_search_vue_vue_type_template_id_3a1dc22e_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./goods-search.vue?vue&type=template&id=3a1dc22e&scoped=true& */ 259);
/* harmony import */ var _goods_search_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./goods-search.vue?vue&type=script&lang=js& */ 261);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _goods_search_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _goods_search_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _goods_search_vue_vue_type_style_index_0_id_3a1dc22e_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./goods-search.vue?vue&type=style&index=0&id=3a1dc22e&lang=scss&scoped=true& */ 263);
/* harmony import */ var _D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 39);

var renderjs





/* normalize component */

var component = Object(_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _goods_search_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _goods_search_vue_vue_type_template_id_3a1dc22e_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _goods_search_vue_vue_type_template_id_3a1dc22e_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "3a1dc22e",
  null,
  false,
  _goods_search_vue_vue_type_template_id_3a1dc22e_scoped_true___WEBPACK_IMPORTED_MODULE_0__["components"],
  renderjs
)

component.options.__file = "sub-pages/supply/goods-search.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 259:
/*!**********************************************************************************************************************!*\
  !*** E:/project/yhlc-v1.0/agent-uniapp/sub-pages/supply/goods-search.vue?vue&type=template&id=3a1dc22e&scoped=true& ***!
  \**********************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_goods_search_vue_vue_type_template_id_3a1dc22e_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--17-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./goods-search.vue?vue&type=template&id=3a1dc22e&scoped=true& */ 260);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_goods_search_vue_vue_type_template_id_3a1dc22e_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_goods_search_vue_vue_type_template_id_3a1dc22e_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_goods_search_vue_vue_type_template_id_3a1dc22e_scoped_true___WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_goods_search_vue_vue_type_template_id_3a1dc22e_scoped_true___WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),

/***/ 260:
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--17-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!E:/project/yhlc-v1.0/agent-uniapp/sub-pages/supply/goods-search.vue?vue&type=template&id=3a1dc22e&scoped=true& ***!
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
try {
  components = {
    uniIcons: function () {
      return Promise.all(/*! import() | uni_modules/uni-icons/components/uni-icons/uni-icons */[__webpack_require__.e("common/vendor"), __webpack_require__.e("uni_modules/uni-icons/components/uni-icons/uni-icons")]).then(__webpack_require__.bind(null, /*! @/uni_modules/uni-icons/components/uni-icons/uni-icons.vue */ 520))
    },
  }
} catch (e) {
  if (
    e.message.indexOf("Cannot find module") !== -1 &&
    e.message.indexOf(".vue") !== -1
  ) {
    console.error(e.message)
    console.error("1. 排查组件名称拼写是否正确")
    console.error(
      "2. 排查组件是否符合 easycom 规范，文档：https://uniapp.dcloud.net.cn/collocation/pages?id=easycom"
    )
    console.error(
      "3. 若组件不符合 easycom 规范，需手动引入，并在 components 中注册该组件"
    )
  } else {
    throw e
  }
}
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  var g0 = _vm.inputValue.trim()
  var g1 = _vm.searchHistory.length
  var g2 = _vm.searchHistory.length
  var l0 = !_vm.emptyVisible
    ? _vm.__map(_vm.filteredRows, function (row, idx) {
        var $orig = _vm.__get_orig(row)
        var m0 = _vm.parseCategoryPic(row.item.pic)
        var m1 = m0 ? _vm.parseCategoryPic(row.item.pic) : null
        return {
          $orig: $orig,
          m0: m0,
          m1: m1,
        }
      })
    : null
  _vm.$mp.data = Object.assign(
    {},
    {
      $root: {
        g0: g0,
        g1: g1,
        g2: g2,
        l0: l0,
      },
    }
  )
}
var recyclableRender = false
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ 261:
/*!****************************************************************************************************!*\
  !*** E:/project/yhlc-v1.0/agent-uniapp/sub-pages/supply/goods-search.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_goods_search_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--13-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./goods-search.vue?vue&type=script&lang=js& */ 262);
/* harmony import */ var _D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_goods_search_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_goods_search_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_goods_search_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_goods_search_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_goods_search_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 262:
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--13-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!E:/project/yhlc-v1.0/agent-uniapp/sub-pages/supply/goods-search.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(uni) {

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ 4);
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _toConsumableArray2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/toConsumableArray */ 18));
var _product = __webpack_require__(/*! @/api/product.js */ 79);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
var EmptyState = function EmptyState() {
  __webpack_require__.e(/*! require.ensure | components/empty-state */ "components/empty-state").then((function () {
    return resolve(__webpack_require__(/*! @/components/empty-state.vue */ 542));
  }).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
};
var STORAGE_KEY = 'supply_goods_search_history';
var HISTORY_MAX = 12;
var _default = {
  components: {
    EmptyState: EmptyState
  },
  data: function data() {
    return {
      inputValue: '',
      /** 已提交的查询词（仅在此变化时刷新结果列表） */
      displayQuery: '',
      categoryTree: [],
      /** { main, group, item, flatKey }[] flatKey 仅脚本内拼接 */
      flatRows: [],
      searchHistory: []
    };
  },
  computed: {
    trimmedInput: function trimmedInput() {
      return String(this.inputValue || '').trim();
    },
    filteredRows: function filteredRows() {
      var q = String(this.displayQuery || '').trim();
      if (!q) return [];
      var rows = this.flatRows;
      var out = [];
      for (var i = 0; i < rows.length; i++) {
        var r = rows[i];
        var item = r && r.item;
        var name = item && item.cateName != null ? String(item.cateName) : '';
        var lowName = name.toLowerCase();
        var lowQ = q.toLowerCase();
        if (name.includes(q) || lowName.includes(lowQ)) {
          out.push(r);
        }
      }
      return out;
    },
    emptyVisible: function emptyVisible() {
      if (!String(this.displayQuery || '').trim()) return false;
      return this.filteredRows.length === 0;
    },
    emptyText: function emptyText() {
      return '暂无匹配的商品分类';
    }
  },
  onLoad: function onLoad() {
    this.restoreHistory();
    this.loadCategoryTree();
  },
  methods: {
    clearInput: function clearInput() {
      this.inputValue = '';
    },
    normalizeImageUrl: function normalizeImageUrl(rawUrl) {
      var url = String(rawUrl || '').trim();
      if (!url) return '';
      if (/^http:\/\//i.test(url)) return url.replace(/^http:\/\//i, 'https://');
      if (/^\/\//.test(url)) return "https:".concat(url);
      return url;
    },
    parseCategoryPic: function parseCategoryPic(pic) {
      if (pic == null || pic === '') return '';
      if (typeof pic === 'string' && /^https?:\/\//i.test(pic.trim())) {
        return this.normalizeImageUrl(pic);
      }
      try {
        var arr = typeof pic === 'string' ? JSON.parse(pic) : pic;
        if (Array.isArray(arr) && arr.length && arr[0] && arr[0].url) {
          return this.normalizeImageUrl(arr[0].url);
        }
      } catch (e) {
        /* ignore */
      }
      return '';
    },
    getGroupProducts: function getGroupProducts(group) {
      if (!group) return [];
      if (Array.isArray(group.children) && group.children.length) return group.children;
      return [group];
    },
    flattenTree: function flattenTree(tree) {
      var _this = this;
      var rows = [];
      var roots = Array.isArray(tree) ? tree : [];
      roots.forEach(function (main) {
        if (!main) return;
        var subs = Array.isArray(main.children) ? main.children : [];
        subs.forEach(function (group) {
          if (!group) return;
          var products = _this.getGroupProducts(group);
          products.forEach(function (item) {
            if (item != null && item.id != null) {
              var flatKey = "".concat(main.id, "\x1E").concat(group.id, "\x1E").concat(item.id);
              rows.push({
                main: main,
                group: group,
                item: item,
                flatKey: flatKey
              });
            }
          });
        });
      });
      return rows;
    },
    loadCategoryTree: function loadCategoryTree() {
      var _this2 = this;
      uni.showLoading({
        title: '加载中...',
        mask: true
      });
      (0, _product.getProductCategoryList)(this).then(function (res) {
        var list = (0, _product.normalizeStoreCategoryListTree)(res);
        _this2.categoryTree = list;
        _this2.flatRows = _this2.flattenTree(list);
      }).catch(function (err) {
        console.warn('[供货搜索] categoryList:', err);
        uni.showToast({
          title: '分类加载失败',
          icon: 'none'
        });
      }).finally(function () {
        uni.hideLoading();
      });
    },
    restoreHistory: function restoreHistory() {
      try {
        var raw = uni.getStorageSync(STORAGE_KEY);
        var arr = typeof raw === 'string' ? JSON.parse(raw) : raw;
        if (Array.isArray(arr)) {
          this.searchHistory = arr.map(function (x) {
            return x != null ? String(x).trim() : '';
          }).filter(Boolean);
        }
      } catch (e) {
        this.searchHistory = [];
      }
    },
    saveHistory: function saveHistory(arr) {
      this.searchHistory = arr;
      try {
        uni.setStorageSync(STORAGE_KEY, JSON.stringify(arr));
      } catch (e) {
        /* ignore */
      }
    },
    pushHistory: function pushHistory(term) {
      var t = String(term || '').trim();
      if (!t) return;
      var next = (0, _toConsumableArray2.default)(this.searchHistory.filter(function (x) {
        return x !== t;
      }));
      next.unshift(t);
      if (next.length > HISTORY_MAX) next = next.slice(0, HISTORY_MAX);
      this.saveHistory(next);
    },
    clearHistory: function clearHistory() {
      var _this3 = this;
      if (!this.searchHistory.length) return;
      uni.showModal({
        title: '提示',
        content: '确定清空历史搜索？',
        success: function success(res) {
          if (!res.confirm) return;
          _this3.saveHistory([]);
        }
      });
    },
    commitSearch: function commitSearch() {
      var q = this.trimmedInput;
      if (!q) {
        uni.showToast({
          title: '请输入商品名',
          icon: 'none'
        });
        return;
      }
      this.displayQuery = q;
      this.pushHistory(q);
    },
    applyHistoryAt: function applyHistoryAt(i) {
      var idx = Number(i);
      if (!Number.isFinite(idx) || idx < 0) return;
      var h = this.searchHistory[idx];
      var t = h != null ? String(h).trim() : '';
      if (!t) return;
      this.inputValue = t;
      this.displayQuery = t;
      this.pushHistory(t);
    },
    onShelfAtFiltered: function onShelfAtFiltered(idx) {
      var i = Number(idx);
      if (!Number.isFinite(i) || i < 0) return;
      var row = this.filteredRows[i];
      if (row) this.onShelfRow(row);
    },
    onShelfRow: function onShelfRow(row) {
      var item = row && row.item;
      var group = row && row.group;
      var main = row && row.main;
      var firstName = main && main.cateName != null ? String(main.cateName) : '';
      var secondName = group && group.cateName != null ? String(group.cateName) : '';
      var hasThird = group && Array.isArray(group.children) && group.children.length > 0;
      var thirdName = hasThird && item && item.cateName != null ? String(item.cateName) : '';
      var id = item && item.id != null ? String(item.id) : '';
      var name = item && item.cateName != null ? String(item.cateName) : '';
      if (!id) {
        uni.showToast({
          title: '分类信息缺失',
          icon: 'none'
        });
        return;
      }
      uni.navigateTo({
        url: "/sub-pages/supply/supplier-goods-upload?cateId=".concat(encodeURIComponent(id), "&cateName=").concat(encodeURIComponent(name)) + "&firstCateName=".concat(encodeURIComponent(firstName)) + "&secondCateName=".concat(encodeURIComponent(secondName)) + "&thirdCateName=".concat(encodeURIComponent(thirdName))
      });
    }
  }
};
exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 2)["default"]))

/***/ }),

/***/ 263:
/*!*************************************************************************************************************************************!*\
  !*** E:/project/yhlc-v1.0/agent-uniapp/sub-pages/supply/goods-search.vue?vue&type=style&index=0&id=3a1dc22e&lang=scss&scoped=true& ***!
  \*************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_goods_search_vue_vue_type_style_index_0_id_3a1dc22e_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/mini-css-extract-plugin/dist/loader.js??ref--8-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--8-oneOf-1-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-2!./node_modules/postcss-loader/src??ref--8-oneOf-1-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/sass-loader/dist/cjs.js??ref--8-oneOf-1-4!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-5!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./goods-search.vue?vue&type=style&index=0&id=3a1dc22e&lang=scss&scoped=true& */ 264);
/* harmony import */ var _D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_goods_search_vue_vue_type_style_index_0_id_3a1dc22e_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_goods_search_vue_vue_type_style_index_0_id_3a1dc22e_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_goods_search_vue_vue_type_style_index_0_id_3a1dc22e_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_goods_search_vue_vue_type_style_index_0_id_3a1dc22e_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_goods_search_vue_vue_type_style_index_0_id_3a1dc22e_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 264:
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js??ref--8-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--8-oneOf-1-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-2!./node_modules/postcss-loader/src??ref--8-oneOf-1-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/sass-loader/dist/cjs.js??ref--8-oneOf-1-4!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-5!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!E:/project/yhlc-v1.0/agent-uniapp/sub-pages/supply/goods-search.vue?vue&type=style&index=0&id=3a1dc22e&lang=scss&scoped=true& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
    if(false) { var cssReload; }
  

/***/ })

},[[257,"common/runtime","common/vendor"]]]);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/sub-pages/supply/goods-search.js.map
},{isPage:true,isComponent:true,currentFile:'sub-pages/supply/goods-search.js'});require("sub-pages/supply/goods-search.js");$gwx3_XC_5=function(_,_v,_n,_p,_s,_wp,_wl,$gwn,$gwl,$gwh,wh,$gstack,$gwrt,gra,grb,TestTest,wfor,_ca,_da,_r,_rz,_o,_oz,_1,_1z,_2,_2z,_m,_mz,nv_getDate,nv_getRegExp,nv_console,nv_parseInt,nv_parseFloat,nv_isNaN,nv_isFinite,nv_decodeURI,nv_decodeURIComponent,nv_encodeURI,nv_encodeURIComponent,$gdc,nv_JSON,_af,_gv,_ai,_grp,_gd,_gapi,$ixc,_ic,_w,_ev,_tsd){return function(path,global){
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
var z=__WXML_GLOBAL__.ops_set.$gwx3_XC_5 || [];
function gz$gwx3_XC_5_1(){
if( __WXML_GLOBAL__.ops_cached.$gwx3_XC_5_1)return __WXML_GLOBAL__.ops_cached.$gwx3_XC_5_1
__WXML_GLOBAL__.ops_cached.$gwx3_XC_5_1=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'supply-page data-v-c3ab5a50'])
Z([3,'__e'])
Z([3,'search-wrap data-v-c3ab5a50'])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[[5],[1,'goSearch']],[[4],[[5],[1,'$event']]]]]]]]]]])
Z([3,'__l'])
Z([3,'search-icon data-v-c3ab5a50'])
Z([3,'#999'])
Z([3,'18'])
Z([3,'search'])
Z([3,'2720892e-1'])
Z([[6],[[7],[3,'$root']],[3,'g0']])
Z([[7],[3,'categoryListLoaded']])
Z(z[4])
Z([3,'data-v-c3ab5a50'])
Z([3,'clipboard'])
Z([3,'暂无分类数据'])
Z([3,'2720892e-2'])
Z([[6],[[7],[3,'$root']],[3,'g1']])
Z([3,'main-body data-v-c3ab5a50'])
Z([[6],[[7],[3,'$root']],[3,'g2']])
Z(z[4])
Z(z[13])
Z(z[14])
Z([3,'该分类下暂无商品数据'])
Z([3,'2720892e-3'])
Z([3,'#ffffff'])
Z(z[4])
Z([3,'0 0 32rpx 32rpx'])
Z([3,'data-v-c3ab5a50 vue-ref'])
Z([3,'allCatePopup'])
Z([1,true])
Z([3,'rgba(0, 0, 0, 0.45)'])
Z([3,'top'])
Z([3,'2720892e-4'])
Z([[4],[[5],[1,'default']]])
})(__WXML_GLOBAL__.ops_cached.$gwx3_XC_5_1);return __WXML_GLOBAL__.ops_cached.$gwx3_XC_5_1
}
__WXML_GLOBAL__.ops_set.$gwx3_XC_5=z;
__WXML_GLOBAL__.ops_init.$gwx3_XC_5=true;
var x=['./sub-pages/supply/index.wxml'];d_[x[0]]={}
var m0=function(e,s,r,gg){
var z=gz$gwx3_XC_5_1()
var o8D=_n('view')
_rz(z,o8D,'class',0,e,s,gg)
var fAE=_mz(z,'view',['bindtap',1,'class',1,'data-event-opts',2],[],e,s,gg)
var cBE=_mz(z,'uni-icons',['bind:__l',4,'class',1,'color',2,'size',3,'type',4,'vueId',5],[],e,s,gg)
_(fAE,cBE)
_(o8D,fAE)
var x9D=_v()
_(o8D,x9D)
if(_oz(z,10,e,s,gg)){x9D.wxVkey=1
}
else{x9D.wxVkey=2
var hCE=_v()
_(x9D,hCE)
if(_oz(z,11,e,s,gg)){hCE.wxVkey=1
var oDE=_mz(z,'empty-state',['bind:__l',12,'class',1,'iconType',2,'text',3,'vueId',4],[],e,s,gg)
_(hCE,oDE)
}
hCE.wxXCkey=1
hCE.wxXCkey=3
}
var o0D=_v()
_(o8D,o0D)
if(_oz(z,17,e,s,gg)){o0D.wxVkey=1
var cEE=_n('view')
_rz(z,cEE,'class',18,e,s,gg)
var oFE=_v()
_(cEE,oFE)
if(_oz(z,19,e,s,gg)){oFE.wxVkey=1
}
else{oFE.wxVkey=2
var lGE=_mz(z,'empty-state',['bind:__l',20,'class',1,'iconType',2,'text',3,'vueId',4],[],e,s,gg)
_(oFE,lGE)
}
oFE.wxXCkey=1
oFE.wxXCkey=3
_(o0D,cEE)
}
var aHE=_mz(z,'uni-popup',['backgroundColor',25,'bind:__l',1,'borderRadius',2,'class',3,'data-ref',4,'isMaskClick',5,'maskBackgroundColor',6,'type',7,'vueId',8,'vueSlots',9],[],e,s,gg)
_(o8D,aHE)
x9D.wxXCkey=1
x9D.wxXCkey=3
o0D.wxXCkey=1
o0D.wxXCkey=3
_(r,o8D)
return r
}
e_[x[0]]={f:m0,j:[],i:[],ti:[],ic:[]}
if(path&&e_[path]){
return function(env,dd,global){$gwxc=0;var root={"tag":"wx-page"};root.children=[]
;g="$gwx3_XC_5";var main=e_[path].f
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
}(__g.a,__g.b,__g.c,__g.d,__g.e,__g.f,__g.g,__g.h,__g.i,__g.j,__g.k,__g.l,__g.m,__g.n,__g.o,__g.p,__g.q,__g.r,__g.s,__g.t,__g.u,__g.v,__g.w,__g.x,__g.y,__g.z,__g.A,__g.B,__g.C,__g.D,__g.E,__g.F,__g.G,__g.H,__g.I,__g.J,__g.K,__g.L,__g.M,__g.N,__g.O,__g.P,__g.Q,__g.R,__g.S,__g.T,__g.U,__g.V,__g.W,__g.X,__g.Y,__g.Z,__g.aa);if(__vd_version_info__.delayedGwx||false)$gwx3_XC_5();	if (__vd_version_info__.delayedGwx) __wxAppCode__['sub-pages/supply/index.wxml'] = [$gwx3_XC_5, './sub-pages/supply/index.wxml'];else __wxAppCode__['sub-pages/supply/index.wxml'] = $gwx3_XC_5( './sub-pages/supply/index.wxml' );
	;__wxRoute = "sub-pages/supply/index";__wxRouteBegin = true;__wxAppCurrentFile__="sub-pages/supply/index.js";define("sub-pages/supply/index.js",function(require,module,exports,window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){
require('./common/vendor.js');(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["sub-pages/supply/index"],{

/***/ 247:
/*!***************************************************************************************!*\
  !*** E:/project/yhlc-v1.0/agent-uniapp/main.js?{"page":"sub-pages%2Fsupply%2Findex"} ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(wx, createPage) {

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ 4);
__webpack_require__(/*! uni-pages */ 30);
var _vue = _interopRequireDefault(__webpack_require__(/*! vue */ 25));
var _index = _interopRequireDefault(__webpack_require__(/*! ./sub-pages/supply/index.vue */ 248));
// @ts-ignore
wx.__webpack_require_UNI_MP_PLUGIN__ = __webpack_require__;
createPage(_index.default);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/wx.js */ 1)["default"], __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 2)["createPage"]))

/***/ }),

/***/ 248:
/*!********************************************************************!*\
  !*** E:/project/yhlc-v1.0/agent-uniapp/sub-pages/supply/index.vue ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_vue_vue_type_template_id_c3ab5a50_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.vue?vue&type=template&id=c3ab5a50&scoped=true& */ 249);
/* harmony import */ var _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.vue?vue&type=script&lang=js& */ 251);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _index_vue_vue_type_style_index_0_id_c3ab5a50_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index.vue?vue&type=style&index=0&id=c3ab5a50&lang=scss&scoped=true& */ 253);
/* harmony import */ var _index_vue_vue_type_style_index_1_lang_scss___WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./index.vue?vue&type=style&index=1&lang=scss& */ 255);
/* harmony import */ var _D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 39);

var renderjs






/* normalize component */

var component = Object(_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_4__["default"])(
  _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _index_vue_vue_type_template_id_c3ab5a50_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _index_vue_vue_type_template_id_c3ab5a50_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "c3ab5a50",
  null,
  false,
  _index_vue_vue_type_template_id_c3ab5a50_scoped_true___WEBPACK_IMPORTED_MODULE_0__["components"],
  renderjs
)

component.options.__file = "sub-pages/supply/index.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 249:
/*!***************************************************************************************************************!*\
  !*** E:/project/yhlc-v1.0/agent-uniapp/sub-pages/supply/index.vue?vue&type=template&id=c3ab5a50&scoped=true& ***!
  \***************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_index_vue_vue_type_template_id_c3ab5a50_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--17-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./index.vue?vue&type=template&id=c3ab5a50&scoped=true& */ 250);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_index_vue_vue_type_template_id_c3ab5a50_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_index_vue_vue_type_template_id_c3ab5a50_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_index_vue_vue_type_template_id_c3ab5a50_scoped_true___WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_index_vue_vue_type_template_id_c3ab5a50_scoped_true___WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),

/***/ 250:
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--17-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!E:/project/yhlc-v1.0/agent-uniapp/sub-pages/supply/index.vue?vue&type=template&id=c3ab5a50&scoped=true& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return recyclableRender; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "components", function() { return components; });
var components
try {
  components = {
    uniIcons: function () {
      return Promise.all(/*! import() | uni_modules/uni-icons/components/uni-icons/uni-icons */[__webpack_require__.e("common/vendor"), __webpack_require__.e("uni_modules/uni-icons/components/uni-icons/uni-icons")]).then(__webpack_require__.bind(null, /*! @/uni_modules/uni-icons/components/uni-icons/uni-icons.vue */ 520))
    },
    uniPopup: function () {
      return __webpack_require__.e(/*! import() | components/uni-popup/uni-popup */ "components/uni-popup/uni-popup").then(__webpack_require__.bind(null, /*! @/components/uni-popup/uni-popup.vue */ 506))
    },
  }
} catch (e) {
  if (
    e.message.indexOf("Cannot find module") !== -1 &&
    e.message.indexOf(".vue") !== -1
  ) {
    console.error(e.message)
    console.error("1. 排查组件名称拼写是否正确")
    console.error(
      "2. 排查组件是否符合 easycom 规范，文档：https://uniapp.dcloud.net.cn/collocation/pages?id=easycom"
    )
    console.error(
      "3. 若组件不符合 easycom 规范，需手动引入，并在 components 中注册该组件"
    )
  } else {
    throw e
  }
}
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  var g0 = _vm.mainCategories.length
  var l0 = g0
    ? _vm.__map(_vm.mainCategories, function (c, i) {
        var $orig = _vm.__get_orig(c)
        var m0 = _vm.parseCategoryPic(c.pic)
        var m1 = m0 ? _vm.parseCategoryPic(c.pic) : null
        return {
          $orig: $orig,
          m0: m0,
          m1: m1,
        }
      })
    : null
  var g1 = _vm.mainCategories.length
  var g2 = g1 ? _vm.subCategories.length : null
  var l2 =
    g1 && g2
      ? _vm.__map(_vm.productGroups, function (cateGroup, __i0__) {
          var $orig = _vm.__get_orig(cateGroup)
          var l1 = _vm.__map(
            _vm.getGroupProducts(cateGroup),
            function (item, __i1__) {
              var $orig = _vm.__get_orig(item)
              var m2 = _vm.parseCategoryPic(item.pic)
              var m3 = m2 ? _vm.parseCategoryPic(item.pic) : null
              return {
                $orig: $orig,
                m2: m2,
                m3: m3,
              }
            }
          )
          return {
            $orig: $orig,
            l1: l1,
          }
        })
      : null
  var l3 = _vm.__map(_vm.mainCategories, function (c, idx) {
    var $orig = _vm.__get_orig(c)
    var m4 = _vm.parseCategoryPic(c.pic)
    var m5 = m4 ? _vm.parseCategoryPic(c.pic) : null
    return {
      $orig: $orig,
      m4: m4,
      m5: m5,
    }
  })
  if (!_vm._isMounted) {
    _vm.e0 = function ($event, item) {
      var _temp = arguments[arguments.length - 1].currentTarget.dataset,
        _temp2 = _temp.eventParams || _temp["event-params"],
        item = _temp2.item
      var _temp, _temp2
      return _vm.onProductClick(item)
    }
    _vm.e1 = function ($event, cateGroup, item) {
      var _temp3 = arguments[arguments.length - 1].currentTarget.dataset,
        _temp4 = _temp3.eventParams || _temp3["event-params"],
        cateGroup = _temp4.cateGroup,
        item = _temp4.item
      var _temp3, _temp4
      $event.stopPropagation()
      return _vm.onShelf(cateGroup, item)
    }
  }
  _vm.$mp.data = Object.assign(
    {},
    {
      $root: {
        g0: g0,
        l0: l0,
        g1: g1,
        g2: g2,
        l2: l2,
        l3: l3,
      },
    }
  )
}
var recyclableRender = false
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ 251:
/*!*********************************************************************************************!*\
  !*** E:/project/yhlc-v1.0/agent-uniapp/sub-pages/supply/index.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--13-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./index.vue?vue&type=script&lang=js& */ 252);
/* harmony import */ var _D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 252:
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--13-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!E:/project/yhlc-v1.0/agent-uniapp/sub-pages/supply/index.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(uni) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _product = __webpack_require__(/*! @/api/product.js */ 79);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
var uniPopup = function uniPopup() {
  __webpack_require__.e(/*! require.ensure | uni_modules/uni-popup/components/uni-popup/uni-popup */ "uni_modules/uni-popup/components/uni-popup/uni-popup").then((function () {
    return resolve(__webpack_require__(/*! @/uni_modules/uni-popup/components/uni-popup/uni-popup.vue */ 513));
  }).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
};
var EmptyState = function EmptyState() {
  __webpack_require__.e(/*! require.ensure | components/empty-state */ "components/empty-state").then((function () {
    return resolve(__webpack_require__(/*! @/components/empty-state.vue */ 542));
  }).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
};
var DEFAULT_MAIN_ICON = '📦';
var _default = {
  components: {
    uniPopup: uniPopup,
    EmptyState: EmptyState
  },
  data: function data() {
    return {
      defaultMainIcon: DEFAULT_MAIN_ICON,
      categoryListLoaded: false,
      /** 接口返回的分类树（保持原始 children 结构） */
      categoryTree: [],
      mainCateIndex: 0,
      subCateIndex: 0,
      /** 左侧二级分类：滚动到当前高亮项 */
      subScrollIntoView: '',
      scrollIntoViewId: '',
      /** 点击左侧跳转右侧时，短暂忽略右侧 scroll 同步，避免动画中途误判 */
      suppressProductScrollSync: false,
      _productListScrollRaf: false
    };
  },
  computed: {
    /** 一级分类：横向滚动（接口字段 cateName、pic、children） */mainCategories: function mainCategories() {
      return Array.isArray(this.categoryTree) ? this.categoryTree : [];
    },
    currentMainNode: function currentMainNode() {
      return this.categoryTree[this.mainCateIndex] || null;
    },
    /** 二级分类：左侧栏 */subCategories: function subCategories() {
      var node = this.currentMainNode;
      return node && Array.isArray(node.children) ? node.children : [];
    },
    /**
     * 右侧商品分组：每个二级一项；三级为商品卡片。
     * 若无三级 children，则用二级自身作为唯一商品（兼容只有两层的分类）
     */
    productGroups: function productGroups() {
      var node = this.currentMainNode;
      return node && Array.isArray(node.children) ? node.children : [];
    }
  },
  watch: {
    mainCateIndex: function mainCateIndex() {
      this.subCateIndex = 0;
    }
  },
  onLoad: function onLoad() {
    this.loadCategoryList();
  },
  methods: {
    normalizeImageUrl: function normalizeImageUrl(rawUrl) {
      var url = String(rawUrl || '').trim();
      if (!url) return '';
      if (/^http:\/\//i.test(url)) return url.replace(/^http:\/\//i, 'https://');
      if (/^\/\//.test(url)) return "https:".concat(url);
      return url;
    },
    /**
     * pic 可能为 null、空串、或 JSON 字符串：[{"ossId":"...","url":"http://..."}]
     */
    parseCategoryPic: function parseCategoryPic(pic) {
      if (pic == null || pic === '') return '';
      if (typeof pic === 'string' && /^https?:\/\//i.test(pic.trim())) {
        return this.normalizeImageUrl(pic);
      }
      try {
        var arr = typeof pic === 'string' ? JSON.parse(pic) : pic;
        if (Array.isArray(arr) && arr.length && arr[0] && arr[0].url) {
          return this.normalizeImageUrl(arr[0].url);
        }
      } catch (e) {
        /* ignore */
      }
      return '';
    },
    getGroupProducts: function getGroupProducts(group) {
      if (!group) return [];
      if (Array.isArray(group.children) && group.children.length) return group.children;
      return [group];
    },
    /** 拉取供货页分类列表 */loadCategoryList: function loadCategoryList() {
      var _this = this;
      uni.showLoading({
        title: '加载分类...',
        mask: true
      });
      (0, _product.getProductCategoryList)(this).then(function (res) {
        var data = res && res.data;
        var list = Array.isArray(data) ? data : data && Array.isArray(data.content) ? data.content : [];
        _this.categoryTree = list;
        _this.mainCateIndex = 0;
        _this.subCateIndex = 0;
      }).catch(function (err) {
        console.warn('[供货] categoryList 请求失败:', err);
      }).finally(function () {
        _this.categoryListLoaded = true;
        uni.hideLoading();
      });
    },
    onBack: function onBack() {
      uni.navigateBack();
    },
    goSearch: function goSearch() {
      uni.navigateTo({
        url: '/sub-pages/supply/goods-search'
      });
    },
    onMainCate: function onMainCate(i) {
      if (i === this.mainCateIndex) return;
      this.mainCateIndex = i;
    },
    openAllCatePopup: function openAllCatePopup() {
      var _this2 = this;
      this.$nextTick(function () {
        var pop = _this2.$refs.allCatePopup;
        if (pop && typeof pop.open === 'function') pop.open();
      });
    },
    closeAllCatePopup: function closeAllCatePopup() {
      var pop = this.$refs.allCatePopup;
      if (pop && typeof pop.close === 'function') pop.close();
    },
    /** 弹窗内选中一级分类（只传索引，避免小程序编译事件路径异常） */onSelectMainFromPopup: function onSelectMainFromPopup(idx) {
      if (idx !== this.mainCateIndex) {
        this.mainCateIndex = idx;
      }
      this.closeAllCatePopup();
    },
    onSubCate: function onSubCate(i) {
      var _this3 = this;
      this.suppressProductScrollSync = true;
      setTimeout(function () {
        _this3.suppressProductScrollSync = false;
      }, 450);
      this.subCateIndex = i;
      var group = this.productGroups[i];
      if (group) {
        this.scrollIntoViewId = 'group-' + group.id;
        this.subScrollIntoView = 'subcate-' + group.id;
        this.$nextTick(function () {
          setTimeout(function () {
            _this3.scrollIntoViewId = '';
            _this3.subScrollIntoView = '';
          }, 350);
        });
      }
    },
    onProductListScroll: function onProductListScroll() {
      var _this4 = this;
      if (this.suppressProductScrollSync) return;
      if (this._productListScrollRaf) return;
      this._productListScrollRaf = true;
      var raf = typeof requestAnimationFrame === 'function' ? requestAnimationFrame : function (cb) {
        return setTimeout(cb, 32);
      };
      raf(function () {
        _this4._productListScrollRaf = false;
        _this4.syncSubCateFromProductList();
      });
    },
    /**
     * 根据右侧列表视口位置，更新左侧二级分类高亮（与美团/饿了么分类联动类似）
     */
    syncSubCateFromProductList: function syncSubCateFromProductList() {
      var _this5 = this;
      var groups = this.productGroups;
      if (!groups.length) return;
      var q = uni.createSelectorQuery().in(this);
      q.select('.product-list').boundingClientRect();
      groups.forEach(function (g) {
        q.select('#group-' + g.id).boundingClientRect();
      });
      q.exec(function (res) {
        if (!res || !res.length || !res[0]) return;
        var container = res[0];
        var anchor = container.top + 6;
        var idx = 0;
        for (var i = 0; i < groups.length; i++) {
          var r = res[i + 1];
          if (!r) continue;
          if (r.top <= anchor) idx = i;
        }
        if (idx === _this5.subCateIndex) return;
        _this5.subCateIndex = idx;
        var sid = groups[idx] && groups[idx].id;
        if (sid == null) return;
        _this5.subScrollIntoView = 'subcate-' + sid;
        _this5.$nextTick(function () {
          setTimeout(function () {
            _this5.subScrollIntoView = '';
          }, 200);
        });
      });
    },
    onProductClick: function onProductClick(item) {},
    onShelf: function onShelf(group, item) {
      var main = this.currentMainNode;
      var firstName = main && main.cateName != null ? String(main.cateName) : '';
      var secondName = group && group.cateName != null ? String(group.cateName) : '';
      var hasThird = group && Array.isArray(group.children) && group.children.length > 0;
      var thirdName = hasThird && item && item.cateName != null ? String(item.cateName) : '';
      var id = item && item.id != null ? String(item.id) : '';
      var name = item && item.cateName != null ? String(item.cateName) : '';
      if (!id) {
        uni.showToast({
          title: '分类信息缺失',
          icon: 'none'
        });
        return;
      }
      uni.navigateTo({
        url: "/sub-pages/supply/supplier-goods-upload?cateId=".concat(encodeURIComponent(id), "&cateName=").concat(encodeURIComponent(name)) + "&firstCateName=".concat(encodeURIComponent(firstName)) + "&secondCateName=".concat(encodeURIComponent(secondName)) + "&thirdCateName=".concat(encodeURIComponent(thirdName))
      });
    }
  }
};
exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 2)["default"]))

/***/ }),

/***/ 253:
/*!******************************************************************************************************************************!*\
  !*** E:/project/yhlc-v1.0/agent-uniapp/sub-pages/supply/index.vue?vue&type=style&index=0&id=c3ab5a50&lang=scss&scoped=true& ***!
  \******************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_index_vue_vue_type_style_index_0_id_c3ab5a50_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/mini-css-extract-plugin/dist/loader.js??ref--8-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--8-oneOf-1-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-2!./node_modules/postcss-loader/src??ref--8-oneOf-1-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/sass-loader/dist/cjs.js??ref--8-oneOf-1-4!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-5!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./index.vue?vue&type=style&index=0&id=c3ab5a50&lang=scss&scoped=true& */ 254);
/* harmony import */ var _D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_index_vue_vue_type_style_index_0_id_c3ab5a50_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_index_vue_vue_type_style_index_0_id_c3ab5a50_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_index_vue_vue_type_style_index_0_id_c3ab5a50_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_index_vue_vue_type_style_index_0_id_c3ab5a50_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_index_vue_vue_type_style_index_0_id_c3ab5a50_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 254:
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js??ref--8-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--8-oneOf-1-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-2!./node_modules/postcss-loader/src??ref--8-oneOf-1-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/sass-loader/dist/cjs.js??ref--8-oneOf-1-4!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-5!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!E:/project/yhlc-v1.0/agent-uniapp/sub-pages/supply/index.vue?vue&type=style&index=0&id=c3ab5a50&lang=scss&scoped=true& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
    if(false) { var cssReload; }
  

/***/ }),

/***/ 255:
/*!******************************************************************************************************!*\
  !*** E:/project/yhlc-v1.0/agent-uniapp/sub-pages/supply/index.vue?vue&type=style&index=1&lang=scss& ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_index_vue_vue_type_style_index_1_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/mini-css-extract-plugin/dist/loader.js??ref--8-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--8-oneOf-1-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-2!./node_modules/postcss-loader/src??ref--8-oneOf-1-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/sass-loader/dist/cjs.js??ref--8-oneOf-1-4!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-5!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./index.vue?vue&type=style&index=1&lang=scss& */ 256);
/* harmony import */ var _D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_index_vue_vue_type_style_index_1_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_index_vue_vue_type_style_index_1_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_index_vue_vue_type_style_index_1_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_index_vue_vue_type_style_index_1_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_index_vue_vue_type_style_index_1_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 256:
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js??ref--8-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--8-oneOf-1-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-2!./node_modules/postcss-loader/src??ref--8-oneOf-1-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/sass-loader/dist/cjs.js??ref--8-oneOf-1-4!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-5!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!E:/project/yhlc-v1.0/agent-uniapp/sub-pages/supply/index.vue?vue&type=style&index=1&lang=scss& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
    if(false) { var cssReload; }
  

/***/ })

},[[247,"common/runtime","common/vendor"]]]);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/sub-pages/supply/index.js.map
},{isPage:true,isComponent:true,currentFile:'sub-pages/supply/index.js'});require("sub-pages/supply/index.js");$gwx3_XC_6=function(_,_v,_n,_p,_s,_wp,_wl,$gwn,$gwl,$gwh,wh,$gstack,$gwrt,gra,grb,TestTest,wfor,_ca,_da,_r,_rz,_o,_oz,_1,_1z,_2,_2z,_m,_mz,nv_getDate,nv_getRegExp,nv_console,nv_parseInt,nv_parseFloat,nv_isNaN,nv_isFinite,nv_decodeURI,nv_decodeURIComponent,nv_encodeURI,nv_encodeURIComponent,$gdc,nv_JSON,_af,_gv,_ai,_grp,_gd,_gapi,$ixc,_ic,_w,_ev,_tsd){return function(path,global){
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
var z=__WXML_GLOBAL__.ops_set.$gwx3_XC_6 || [];
function gz$gwx3_XC_6_1(){
if( __WXML_GLOBAL__.ops_cached.$gwx3_XC_6_1)return __WXML_GLOBAL__.ops_cached.$gwx3_XC_6_1
__WXML_GLOBAL__.ops_cached.$gwx3_XC_6_1=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'no-delivery-page data-v-5bb59306'])
Z([3,'search-bar data-v-5bb59306'])
Z([3,'__l'])
Z([3,'search-icon data-v-5bb59306'])
Z([3,'#999'])
Z([3,'18'])
Z([3,'search'])
Z([3,'1afd4ec0-1'])
Z(z[2])
Z([3,'__e'])
Z([3,'data-v-5bb59306'])
Z([[4],[[5],[[4],[[5],[[5],[1,'^change']],[[4],[[5],[[4],[[5],[1,'onCalendarConfirm']]]]]]]]])
Z([3,'销售日'])
Z([3,'date'])
Z([[7],[3,'selectedDate']])
Z([3,'1afd4ec0-2'])
Z([[4],[[5],[1,'default']]])
Z([3,'calendar-btn data-v-5bb59306'])
Z(z[2])
Z([3,'calendar-icon data-v-5bb59306'])
Z([3,'#666'])
Z([3,'22'])
Z([3,'calendar'])
Z([[2,'+'],[[2,'+'],[1,'1afd4ec0-3'],[1,',']],[1,'1afd4ec0-2']])
Z(z[14])
Z([3,'main-content data-v-5bb59306'])
Z([[2,'==='],[[6],[[7],[3,'$root']],[3,'g0']],[1,0]])
Z(z[2])
Z(z[10])
Z([3,'1afd4ec0-4'])
Z(z[9])
Z([3,'list-scroll data-v-5bb59306'])
Z([[4],[[5],[[4],[[5],[[5],[1,'scrolltolower']],[[4],[[5],[[4],[[5],[[5],[1,'onScrollLower']],[[4],[[5],[1,'$event']]]]]]]]]]])
Z([1,true])
Z([1,false])
Z([[6],[[7],[3,'$root']],[3,'g1']])
})(__WXML_GLOBAL__.ops_cached.$gwx3_XC_6_1);return __WXML_GLOBAL__.ops_cached.$gwx3_XC_6_1
}
__WXML_GLOBAL__.ops_set.$gwx3_XC_6=z;
__WXML_GLOBAL__.ops_init.$gwx3_XC_6=true;
var x=['./sub-pages/supply/no-delivery.wxml'];d_[x[0]]={}
var m0=function(e,s,r,gg){
var z=gz$gwx3_XC_6_1()
var eJE=_n('view')
_rz(z,eJE,'class',0,e,s,gg)
var bKE=_n('view')
_rz(z,bKE,'class',1,e,s,gg)
var oLE=_mz(z,'uni-icons',['bind:__l',2,'class',1,'color',2,'size',3,'type',4,'vueId',5],[],e,s,gg)
_(bKE,oLE)
var xME=_mz(z,'uni-datetime-picker',['bind:__l',8,'bind:change',1,'class',2,'data-event-opts',3,'placeholder',4,'type',5,'value',6,'vueId',7,'vueSlots',8],[],e,s,gg)
var oNE=_n('view')
_rz(z,oNE,'class',17,e,s,gg)
var cPE=_mz(z,'uni-icons',['bind:__l',18,'class',1,'color',2,'size',3,'type',4,'vueId',5],[],e,s,gg)
_(oNE,cPE)
var fOE=_v()
_(oNE,fOE)
if(_oz(z,24,e,s,gg)){fOE.wxVkey=1
}
fOE.wxXCkey=1
_(xME,oNE)
_(bKE,xME)
_(eJE,bKE)
var hQE=_n('view')
_rz(z,hQE,'class',25,e,s,gg)
var oRE=_v()
_(hQE,oRE)
if(_oz(z,26,e,s,gg)){oRE.wxVkey=1
var cSE=_mz(z,'empty-state',['bind:__l',27,'class',1,'vueId',2],[],e,s,gg)
_(oRE,cSE)
}
else{oRE.wxVkey=2
var oTE=_mz(z,'scroll-view',['bindscrolltolower',30,'class',1,'data-event-opts',2,'scrollY',3,'showScrollbar',4],[],e,s,gg)
var lUE=_v()
_(oTE,lUE)
if(_oz(z,35,e,s,gg)){lUE.wxVkey=1
}
lUE.wxXCkey=1
_(oRE,oTE)
}
oRE.wxXCkey=1
oRE.wxXCkey=3
_(eJE,hQE)
_(r,eJE)
return r
}
e_[x[0]]={f:m0,j:[],i:[],ti:[],ic:[]}
if(path&&e_[path]){
return function(env,dd,global){$gwxc=0;var root={"tag":"wx-page"};root.children=[]
;g="$gwx3_XC_6";var main=e_[path].f
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
}(__g.a,__g.b,__g.c,__g.d,__g.e,__g.f,__g.g,__g.h,__g.i,__g.j,__g.k,__g.l,__g.m,__g.n,__g.o,__g.p,__g.q,__g.r,__g.s,__g.t,__g.u,__g.v,__g.w,__g.x,__g.y,__g.z,__g.A,__g.B,__g.C,__g.D,__g.E,__g.F,__g.G,__g.H,__g.I,__g.J,__g.K,__g.L,__g.M,__g.N,__g.O,__g.P,__g.Q,__g.R,__g.S,__g.T,__g.U,__g.V,__g.W,__g.X,__g.Y,__g.Z,__g.aa);if(__vd_version_info__.delayedGwx||false)$gwx3_XC_6();	if (__vd_version_info__.delayedGwx) __wxAppCode__['sub-pages/supply/no-delivery.wxml'] = [$gwx3_XC_6, './sub-pages/supply/no-delivery.wxml'];else __wxAppCode__['sub-pages/supply/no-delivery.wxml'] = $gwx3_XC_6( './sub-pages/supply/no-delivery.wxml' );
	;__wxRoute = "sub-pages/supply/no-delivery";__wxRouteBegin = true;__wxAppCurrentFile__="sub-pages/supply/no-delivery.js";define("sub-pages/supply/no-delivery.js",function(require,module,exports,window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){
require('./common/vendor.js');(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["sub-pages/supply/no-delivery"],{

/***/ 334:
/*!*********************************************************************************************!*\
  !*** E:/project/yhlc-v1.0/agent-uniapp/main.js?{"page":"sub-pages%2Fsupply%2Fno-delivery"} ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(wx, createPage) {

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ 4);
__webpack_require__(/*! uni-pages */ 30);
var _vue = _interopRequireDefault(__webpack_require__(/*! vue */ 25));
var _noDelivery = _interopRequireDefault(__webpack_require__(/*! ./sub-pages/supply/no-delivery.vue */ 335));
// @ts-ignore
wx.__webpack_require_UNI_MP_PLUGIN__ = __webpack_require__;
createPage(_noDelivery.default);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/wx.js */ 1)["default"], __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 2)["createPage"]))

/***/ }),

/***/ 335:
/*!**************************************************************************!*\
  !*** E:/project/yhlc-v1.0/agent-uniapp/sub-pages/supply/no-delivery.vue ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _no_delivery_vue_vue_type_template_id_5bb59306_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./no-delivery.vue?vue&type=template&id=5bb59306&scoped=true& */ 336);
/* harmony import */ var _no_delivery_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./no-delivery.vue?vue&type=script&lang=js& */ 338);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _no_delivery_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _no_delivery_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _no_delivery_vue_vue_type_style_index_0_id_5bb59306_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./no-delivery.vue?vue&type=style&index=0&id=5bb59306&lang=scss&scoped=true& */ 340);
/* harmony import */ var _D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 39);

var renderjs





/* normalize component */

var component = Object(_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _no_delivery_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _no_delivery_vue_vue_type_template_id_5bb59306_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _no_delivery_vue_vue_type_template_id_5bb59306_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "5bb59306",
  null,
  false,
  _no_delivery_vue_vue_type_template_id_5bb59306_scoped_true___WEBPACK_IMPORTED_MODULE_0__["components"],
  renderjs
)

component.options.__file = "sub-pages/supply/no-delivery.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 336:
/*!*********************************************************************************************************************!*\
  !*** E:/project/yhlc-v1.0/agent-uniapp/sub-pages/supply/no-delivery.vue?vue&type=template&id=5bb59306&scoped=true& ***!
  \*********************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_no_delivery_vue_vue_type_template_id_5bb59306_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--17-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./no-delivery.vue?vue&type=template&id=5bb59306&scoped=true& */ 337);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_no_delivery_vue_vue_type_template_id_5bb59306_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_no_delivery_vue_vue_type_template_id_5bb59306_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_no_delivery_vue_vue_type_template_id_5bb59306_scoped_true___WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_no_delivery_vue_vue_type_template_id_5bb59306_scoped_true___WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),

/***/ 337:
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--17-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!E:/project/yhlc-v1.0/agent-uniapp/sub-pages/supply/no-delivery.vue?vue&type=template&id=5bb59306&scoped=true& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return recyclableRender; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "components", function() { return components; });
var components
try {
  components = {
    uniIcons: function () {
      return Promise.all(/*! import() | uni_modules/uni-icons/components/uni-icons/uni-icons */[__webpack_require__.e("common/vendor"), __webpack_require__.e("uni_modules/uni-icons/components/uni-icons/uni-icons")]).then(__webpack_require__.bind(null, /*! @/uni_modules/uni-icons/components/uni-icons/uni-icons.vue */ 520))
    },
    uniDatetimePicker: function () {
      return Promise.all(/*! import() | uni_modules/uni-datetime-picker/components/uni-datetime-picker/uni-datetime-picker */[__webpack_require__.e("common/vendor"), __webpack_require__.e("uni_modules/uni-datetime-picker/components/uni-datetime-picker/uni-datetime-picker")]).then(__webpack_require__.bind(null, /*! @/uni_modules/uni-datetime-picker/components/uni-datetime-picker/uni-datetime-picker.vue */ 556))
    },
  }
} catch (e) {
  if (
    e.message.indexOf("Cannot find module") !== -1 &&
    e.message.indexOf(".vue") !== -1
  ) {
    console.error(e.message)
    console.error("1. 排查组件名称拼写是否正确")
    console.error(
      "2. 排查组件是否符合 easycom 规范，文档：https://uniapp.dcloud.net.cn/collocation/pages?id=easycom"
    )
    console.error(
      "3. 若组件不符合 easycom 规范，需手动引入，并在 components 中注册该组件"
    )
  } else {
    throw e
  }
}
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  var g0 = _vm.list.length
  var g1 = !(g0 === 0) ? _vm.list.length : null
  _vm.$mp.data = Object.assign(
    {},
    {
      $root: {
        g0: g0,
        g1: g1,
      },
    }
  )
}
var recyclableRender = false
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ 338:
/*!***************************************************************************************************!*\
  !*** E:/project/yhlc-v1.0/agent-uniapp/sub-pages/supply/no-delivery.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_no_delivery_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--13-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./no-delivery.vue?vue&type=script&lang=js& */ 339);
/* harmony import */ var _D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_no_delivery_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_no_delivery_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_no_delivery_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_no_delivery_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_no_delivery_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 339:
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--13-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!E:/project/yhlc-v1.0/agent-uniapp/sub-pages/supply/no-delivery.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(uni) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var EmptyState = function EmptyState() {
  __webpack_require__.e(/*! require.ensure | components/empty-state */ "components/empty-state").then((function () {
    return resolve(__webpack_require__(/*! @/components/empty-state.vue */ 542));
  }).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
};
var _default = {
  components: {
    EmptyState: EmptyState
  },
  data: function data() {
    return {
      statusBarHeight: 20,
      keyword: '',
      list: [],
      selectedDate: ''
    };
  },
  onLoad: function onLoad() {
    var sys = uni.getSystemInfoSync();
    this.statusBarHeight = sys.statusBarHeight || 20;
  },
  methods: {
    onBack: function onBack() {
      uni.navigateBack();
    },
    onMore: function onMore() {
      uni.showToast({
        title: '更多',
        icon: 'none'
      });
    },
    onMinus: function onMinus() {
      uni.showToast({
        title: '减',
        icon: 'none'
      });
    },
    onEye: function onEye() {
      uni.showToast({
        title: '查看',
        icon: 'none'
      });
    },
    onCalendarConfirm: function onCalendarConfirm(date) {
      this.selectedDate = date || '';
      if (date) uni.showToast({
        title: '已选：' + date,
        icon: 'none'
      });
    },
    onScrollLower: function onScrollLower() {},
    onTransfer: function onTransfer() {
      uni.showToast({
        title: '转给采购',
        icon: 'none'
      });
    }
  }
};
exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 2)["default"]))

/***/ }),

/***/ 340:
/*!************************************************************************************************************************************!*\
  !*** E:/project/yhlc-v1.0/agent-uniapp/sub-pages/supply/no-delivery.vue?vue&type=style&index=0&id=5bb59306&lang=scss&scoped=true& ***!
  \************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_no_delivery_vue_vue_type_style_index_0_id_5bb59306_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/mini-css-extract-plugin/dist/loader.js??ref--8-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--8-oneOf-1-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-2!./node_modules/postcss-loader/src??ref--8-oneOf-1-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/sass-loader/dist/cjs.js??ref--8-oneOf-1-4!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-5!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./no-delivery.vue?vue&type=style&index=0&id=5bb59306&lang=scss&scoped=true& */ 341);
/* harmony import */ var _D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_no_delivery_vue_vue_type_style_index_0_id_5bb59306_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_no_delivery_vue_vue_type_style_index_0_id_5bb59306_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_no_delivery_vue_vue_type_style_index_0_id_5bb59306_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_no_delivery_vue_vue_type_style_index_0_id_5bb59306_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_no_delivery_vue_vue_type_style_index_0_id_5bb59306_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 341:
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js??ref--8-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--8-oneOf-1-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-2!./node_modules/postcss-loader/src??ref--8-oneOf-1-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/sass-loader/dist/cjs.js??ref--8-oneOf-1-4!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-5!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!E:/project/yhlc-v1.0/agent-uniapp/sub-pages/supply/no-delivery.vue?vue&type=style&index=0&id=5bb59306&lang=scss&scoped=true& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
    if(false) { var cssReload; }
  

/***/ })

},[[334,"common/runtime","common/vendor"]]]);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/sub-pages/supply/no-delivery.js.map
},{isPage:true,isComponent:true,currentFile:'sub-pages/supply/no-delivery.js'});require("sub-pages/supply/no-delivery.js");$gwx3_XC_7=function(_,_v,_n,_p,_s,_wp,_wl,$gwn,$gwl,$gwh,wh,$gstack,$gwrt,gra,grb,TestTest,wfor,_ca,_da,_r,_rz,_o,_oz,_1,_1z,_2,_2z,_m,_mz,nv_getDate,nv_getRegExp,nv_console,nv_parseInt,nv_parseFloat,nv_isNaN,nv_isFinite,nv_decodeURI,nv_decodeURIComponent,nv_encodeURI,nv_encodeURIComponent,$gdc,nv_JSON,_af,_gv,_ai,_grp,_gd,_gapi,$ixc,_ic,_w,_ev,_tsd){return function(path,global){
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
var z=__WXML_GLOBAL__.ops_set.$gwx3_XC_7 || [];
function gz$gwx3_XC_7_1(){
if( __WXML_GLOBAL__.ops_cached.$gwx3_XC_7_1)return __WXML_GLOBAL__.ops_cached.$gwx3_XC_7_1
__WXML_GLOBAL__.ops_cached.$gwx3_XC_7_1=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[4],[[5],[[5],[[5],[1,'data-v-746db9cd']],[1,'scroll']],[[4],[[5],[[2,'?:'],[[7],[3,'auditMode']],[1,'scroll-readonly'],[1,'']]]]]])
Z([1,true])
Z([1,false])
Z([3,'upload-media-body data-v-746db9cd'])
Z([[2,'!'],[[7],[3,'auditMode']]])
Z([3,'slider-list data-v-746db9cd'])
Z([3,'si'])
Z([3,'it'])
Z([[7],[3,'sliderImages']])
Z(z[4])
Z(z[4])
Z(z[3])
Z([3,'upload-row data-v-746db9cd'])
Z([[6],[[7],[3,'videoItem']],[3,'url']])
Z(z[4])
Z(z[4])
Z([3,'section section-media data-v-746db9cd'])
Z(z[12])
Z([[6],[[7],[3,'inspectionReportItem']],[3,'url']])
Z(z[4])
Z(z[4])
Z(z[16])
Z(z[12])
Z([[6],[[7],[3,'mainImage']],[3,'url']])
Z(z[4])
Z(z[4])
Z([[7],[3,'auditMode']])
})(__WXML_GLOBAL__.ops_cached.$gwx3_XC_7_1);return __WXML_GLOBAL__.ops_cached.$gwx3_XC_7_1
}
__WXML_GLOBAL__.ops_set.$gwx3_XC_7=z;
__WXML_GLOBAL__.ops_init.$gwx3_XC_7=true;
var x=['./sub-pages/supply/supplier-goods-reapply.wxml'];d_[x[0]]={}
var m0=function(e,s,r,gg){
var z=gz$gwx3_XC_7_1()
var tWE=_mz(z,'scroll-view',['class',0,'scrollY',1,'showScrollbar',1],[],e,s,gg)
var bYE=_n('view')
_rz(z,bYE,'class',3,e,s,gg)
var oZE=_v()
_(bYE,oZE)
if(_oz(z,4,e,s,gg)){oZE.wxVkey=1
}
var x1E=_n('view')
_rz(z,x1E,'class',5,e,s,gg)
var f3E=_v()
_(x1E,f3E)
var c4E=function(o6E,h5E,c7E,gg){
var l9E=_v()
_(c7E,l9E)
if(_oz(z,9,o6E,h5E,gg)){l9E.wxVkey=1
}
l9E.wxXCkey=1
return c7E
}
f3E.wxXCkey=2
_2z(z,8,c4E,e,s,gg,f3E,'it','si','')
var o2E=_v()
_(x1E,o2E)
if(_oz(z,10,e,s,gg)){o2E.wxVkey=1
}
o2E.wxXCkey=1
_(bYE,x1E)
oZE.wxXCkey=1
_(tWE,bYE)
var a0E=_n('view')
_rz(z,a0E,'class',11,e,s,gg)
var eBF=_n('view')
_rz(z,eBF,'class',12,e,s,gg)
var bCF=_v()
_(eBF,bCF)
if(_oz(z,13,e,s,gg)){bCF.wxVkey=1
var oDF=_v()
_(bCF,oDF)
if(_oz(z,14,e,s,gg)){oDF.wxVkey=1
}
oDF.wxXCkey=1
}
else{bCF.wxVkey=2
}
bCF.wxXCkey=1
_(a0E,eBF)
var tAF=_v()
_(a0E,tAF)
if(_oz(z,15,e,s,gg)){tAF.wxVkey=1
}
tAF.wxXCkey=1
_(tWE,a0E)
var xEF=_n('view')
_rz(z,xEF,'class',16,e,s,gg)
var fGF=_n('view')
_rz(z,fGF,'class',17,e,s,gg)
var cHF=_v()
_(fGF,cHF)
if(_oz(z,18,e,s,gg)){cHF.wxVkey=1
var hIF=_v()
_(cHF,hIF)
if(_oz(z,19,e,s,gg)){hIF.wxVkey=1
}
hIF.wxXCkey=1
}
else{cHF.wxVkey=2
}
cHF.wxXCkey=1
_(xEF,fGF)
var oFF=_v()
_(xEF,oFF)
if(_oz(z,20,e,s,gg)){oFF.wxVkey=1
}
oFF.wxXCkey=1
_(tWE,xEF)
var oJF=_n('view')
_rz(z,oJF,'class',21,e,s,gg)
var oLF=_n('view')
_rz(z,oLF,'class',22,e,s,gg)
var lMF=_v()
_(oLF,lMF)
if(_oz(z,23,e,s,gg)){lMF.wxVkey=1
var aNF=_v()
_(lMF,aNF)
if(_oz(z,24,e,s,gg)){aNF.wxVkey=1
}
aNF.wxXCkey=1
}
else{lMF.wxVkey=2
}
lMF.wxXCkey=1
_(oJF,oLF)
var cKF=_v()
_(oJF,cKF)
if(_oz(z,25,e,s,gg)){cKF.wxVkey=1
}
cKF.wxXCkey=1
_(tWE,oJF)
var eXE=_v()
_(tWE,eXE)
if(_oz(z,26,e,s,gg)){eXE.wxVkey=1
}
eXE.wxXCkey=1
_(r,tWE)
return r
}
e_[x[0]]={f:m0,j:[],i:[],ti:[],ic:[]}
if(path&&e_[path]){
return function(env,dd,global){$gwxc=0;var root={"tag":"wx-page"};root.children=[]
;g="$gwx3_XC_7";var main=e_[path].f
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
}(__g.a,__g.b,__g.c,__g.d,__g.e,__g.f,__g.g,__g.h,__g.i,__g.j,__g.k,__g.l,__g.m,__g.n,__g.o,__g.p,__g.q,__g.r,__g.s,__g.t,__g.u,__g.v,__g.w,__g.x,__g.y,__g.z,__g.A,__g.B,__g.C,__g.D,__g.E,__g.F,__g.G,__g.H,__g.I,__g.J,__g.K,__g.L,__g.M,__g.N,__g.O,__g.P,__g.Q,__g.R,__g.S,__g.T,__g.U,__g.V,__g.W,__g.X,__g.Y,__g.Z,__g.aa);if(__vd_version_info__.delayedGwx||false)$gwx3_XC_7();	if (__vd_version_info__.delayedGwx) __wxAppCode__['sub-pages/supply/supplier-goods-reapply.wxml'] = [$gwx3_XC_7, './sub-pages/supply/supplier-goods-reapply.wxml'];else __wxAppCode__['sub-pages/supply/supplier-goods-reapply.wxml'] = $gwx3_XC_7( './sub-pages/supply/supplier-goods-reapply.wxml' );
	;__wxRoute = "sub-pages/supply/supplier-goods-reapply";__wxRouteBegin = true;__wxAppCurrentFile__="sub-pages/supply/supplier-goods-reapply.js";define("sub-pages/supply/supplier-goods-reapply.js",function(require,module,exports,window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){
require('./common/vendor.js');(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["sub-pages/supply/supplier-goods-reapply"],{

/***/ 276:
/*!********************************************************************************************************!*\
  !*** E:/project/yhlc-v1.0/agent-uniapp/main.js?{"page":"sub-pages%2Fsupply%2Fsupplier-goods-reapply"} ***!
  \********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(wx, createPage) {

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ 4);
__webpack_require__(/*! uni-pages */ 30);
var _vue = _interopRequireDefault(__webpack_require__(/*! vue */ 25));
var _supplierGoodsReapply = _interopRequireDefault(__webpack_require__(/*! ./sub-pages/supply/supplier-goods-reapply.vue */ 277));
// @ts-ignore
wx.__webpack_require_UNI_MP_PLUGIN__ = __webpack_require__;
createPage(_supplierGoodsReapply.default);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/wx.js */ 1)["default"], __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 2)["createPage"]))

/***/ }),

/***/ 277:
/*!*************************************************************************************!*\
  !*** E:/project/yhlc-v1.0/agent-uniapp/sub-pages/supply/supplier-goods-reapply.vue ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _supplier_goods_reapply_vue_vue_type_template_id_746db9cd_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./supplier-goods-reapply.vue?vue&type=template&id=746db9cd&scoped=true& */ 278);
/* harmony import */ var _supplier_goods_reapply_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./supplier-goods-reapply.vue?vue&type=script&lang=js& */ 280);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _supplier_goods_reapply_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _supplier_goods_reapply_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _supplier_goods_reapply_vue_vue_type_style_index_0_id_746db9cd_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./supplier-goods-reapply.vue?vue&type=style&index=0&id=746db9cd&lang=scss&scoped=true& */ 282);
/* harmony import */ var _supplier_goods_reapply_vue_vue_type_style_index_1_lang_scss___WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./supplier-goods-reapply.vue?vue&type=style&index=1&lang=scss& */ 284);
/* harmony import */ var _D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 39);

var renderjs






/* normalize component */

var component = Object(_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_4__["default"])(
  _supplier_goods_reapply_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _supplier_goods_reapply_vue_vue_type_template_id_746db9cd_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _supplier_goods_reapply_vue_vue_type_template_id_746db9cd_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "746db9cd",
  null,
  false,
  _supplier_goods_reapply_vue_vue_type_template_id_746db9cd_scoped_true___WEBPACK_IMPORTED_MODULE_0__["components"],
  renderjs
)

component.options.__file = "sub-pages/supply/supplier-goods-reapply.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 278:
/*!********************************************************************************************************************************!*\
  !*** E:/project/yhlc-v1.0/agent-uniapp/sub-pages/supply/supplier-goods-reapply.vue?vue&type=template&id=746db9cd&scoped=true& ***!
  \********************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_supplier_goods_reapply_vue_vue_type_template_id_746db9cd_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--17-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./supplier-goods-reapply.vue?vue&type=template&id=746db9cd&scoped=true& */ 279);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_supplier_goods_reapply_vue_vue_type_template_id_746db9cd_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_supplier_goods_reapply_vue_vue_type_template_id_746db9cd_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_supplier_goods_reapply_vue_vue_type_template_id_746db9cd_scoped_true___WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_supplier_goods_reapply_vue_vue_type_template_id_746db9cd_scoped_true___WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),

/***/ 279:
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--17-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!E:/project/yhlc-v1.0/agent-uniapp/sub-pages/supply/supplier-goods-reapply.vue?vue&type=template&id=746db9cd&scoped=true& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
  var g0 = _vm.unitOptions.length
  _vm.$mp.data = Object.assign(
    {},
    {
      $root: {
        g0: g0,
      },
    }
  )
}
var recyclableRender = false
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ 280:
/*!**************************************************************************************************************!*\
  !*** E:/project/yhlc-v1.0/agent-uniapp/sub-pages/supply/supplier-goods-reapply.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_supplier_goods_reapply_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--13-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./supplier-goods-reapply.vue?vue&type=script&lang=js& */ 281);
/* harmony import */ var _D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_supplier_goods_reapply_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_supplier_goods_reapply_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_supplier_goods_reapply_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_supplier_goods_reapply_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_supplier_goods_reapply_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 281:
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--13-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!E:/project/yhlc-v1.0/agent-uniapp/sub-pages/supply/supplier-goods-reapply.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(uni) {

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ 4);
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _typeof2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/typeof */ 13));
var _toConsumableArray2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/toConsumableArray */ 18));
var _defineProperty2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/defineProperty */ 11));
var _vuex = __webpack_require__(/*! vuex */ 34);
var _product = __webpack_require__(/*! @/api/product.js */ 79);
var _storage = __webpack_require__(/*! @/api/storage.js */ 78);
var _dict = __webpack_require__(/*! @/api/dict.js */ 271);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0, _defineProperty2.default)(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
var GOODS_AUDIT_RETURN_CTX_KEY = 'SUPPLY_GOODS_AUDIT_RETURN_CTX';
var _default = {
  data: function data() {
    return {
      cateId: '',
      cateName: '',
      cateLevelOneName: '',
      cateLevelTwoName: '',
      cateLevelThreeName: '',
      categoryTree: [],
      storageList: [],
      levelList: [],
      levelIndex: 0,
      unitOptions: [],
      unitIndex: 0,
      saleStockOptions: [],
      saleStockIndex: 0,
      reapplySourceId: '',
      reapplySourceProductId: '',
      auditMode: false,
      auditId: '',
      auditProductName: '',
      auditRejectReason: '',
      auditSubmitting: false,
      auditDecision: '',
      reapplySourceItem: {},
      reapplyConstraints: {
        sameDayOffShelf: false,
        originPrice: '',
        originStock: ''
      },
      reapplyPreset: {
        level: '',
        unitName: '',
        saleStockType: ''
      },
      submitting: false,
      mainImage: {},
      videoItem: {},
      /** chooseVideo 返回的时长（秒），用于提示「不少于20秒」 */
      videoDurationSec: 0,
      inspectionReportItem: {},
      sliderImages: [],
      specIncremental: false,
      form: {
        storeName: '',
        storeInfo: '',
        storageId: '',
        storageName: '',
        defaultSupplier: '',
        defaultSupplierId: '',
        price: '',
        cost: '0',
        otPrice: '0',
        stock: '',
        barCode: '',
        productNo: '',
        alias: '',
        keyword: '',
        unitName: '',
        productPackage: '',
        productBrand: '',
        productOrigin: '',
        description: '',
        minimumOrderQuantity: '0',
        saleStockType: '1',
        weight: '',
        netWeight: '',
        volume: '0'
      },
      // 避免 onLoad / onShow 都触发导致重复请求
      supplierInfoLoaded: false,
      supplierInfoLoading: false
    };
  },
  computed: _objectSpread(_objectSpread({}, (0, _vuex.mapState)(['token', 'userInfo'])), {}, {
    levelOptions: function levelOptions() {
      return this.levelList.map(function (x) {
        return _objectSpread(_objectSpread({}, x), {}, {
          _label: (0, _dict.dictItemLabel)(x) || '—'
        });
      });
    },
    /** 品级仅首次上架可设置，重新上架时锁定为原商品品级 */levelLockedText: function levelLockedText() {
      var preset = String(this.reapplyPreset.level || '').trim();
      if (!preset) return '';
      var hit = this.levelOptions.find(function (x) {
        var v = String((0, _dict.dictItemValue)(x) || '').trim();
        var l = String((0, _dict.dictItemLabel)(x) || '').trim();
        return v === preset || l === preset;
      });
      return hit ? (0, _dict.dictItemLabel)(hit) || preset : preset;
    },
    unitPickerText: function unitPickerText() {
      var o = this.unitOptions[this.unitIndex];
      return o ? o._label : '请选择单位';
    },
    supplierDisplay: function supplierDisplay() {
      var n = (this.form.defaultSupplier || '').trim();
      var id = (this.form.defaultSupplierId || '').trim();
      if (n && id) return "".concat(n);
      if (n) return n;
      if (id) return id;
      return '—';
    },
    saleStockLabel: function saleStockLabel() {
      var o = this.saleStockOptions[this.saleStockIndex];
      return o ? o._label : '请选择';
    },
    selectedLevelNum: function selectedLevelNum() {
      var o = this.levelOptions[this.levelIndex];
      if (!o) return 0;
      var v = (0, _dict.dictItemValue)(o);
      var n = parseInt(v, 10);
      return Number.isFinite(n) ? n : 0;
    },
    /** 售价 ÷ 净重（斤），最多两位小数；无效为空则「--」 */pricePerJinDisplay: function pricePerJinDisplay() {
      var p = parseFloat(String(this.form.price || '').trim());
      var nw = parseFloat(String(this.form.weight || '').trim());
      if (!Number.isFinite(p) || !Number.isFinite(nw) || nw <= 0) return '--';
      var v = p / nw;
      if (!Number.isFinite(v)) return '--';
      return String(parseFloat(v.toFixed(2)));
    },
    submitButtonText: function submitButtonText() {
      return '申请上架';
    }
  }),
  watch: {
    cateId: function cateId() {
      this.resolveCategoryPath();
    }
  },
  onLoad: function onLoad(query) {
    this.initReapplySeed(query || {});
    if (this.userInfo && this.userInfo.storageId != null) {
      this.form.storageId = String(this.userInfo.storageId);
    }
    this.loadSupplierInfo();
    this.loadCategoryTree();
    this.loadLevelList();
    this.loadUnitOptions();
    this.loadSaleStockOptions();
    this.loadReapplyDetail();
  },
  onShow: function onShow() {
    this.loadSupplierInfo();
  },
  methods: {
    /**
     * 从接口：/storage/supplierInfo/list?account=登录缓存的 userName
     * 初始化“总仓/供应商”
     */
    loadSupplierInfo: function loadSupplierInfo() {
      var _this = this;
      // 避免 onLoad / onShow 触发重复请求（并发时也只允许一次）
      if (this.supplierInfoLoaded || this.supplierInfoLoading) return;
      var account = (0, _storage.getSupplierAccount)(this);
      if (!account) return;
      this.supplierInfoLoading = true;
      // 为避免空 token/未登录导致接口失败，这里由 request 统一处理
      (0, _storage.getSupplierInfoList)(this, account).then(function (res) {
        var list = (0, _storage.normalizeSupplierInfoList)(res);
        var first = list && list.length ? list[0] : null;
        if (!first) {
          _this.supplierInfoLoading = false;
          return;
        }

        // 总仓：接口返回 mainWarehouseName / mainWarehouseId（见 storage/supplierInfo/list）
        _this.form.storageName = String((0, _storage.pickFirstField)(first, ['mainWarehouseName', 'mainwarehouseName', 'storageName', 'totalStorageName', 'storage']));
        _this.form.storageId = String((0, _storage.pickFirstField)(first, ['mainWarehouseId', 'mainwarehouseId', 'storageId', 'totalStorageId', 'storage_id']));

        // 供应商
        _this.form.defaultSupplier = String((0, _storage.pickFirstField)(first, ['supplierName', 'defaultSupplier', 'supplier']));
        _this.form.defaultSupplierId = String((0, _storage.pickFirstField)(first, ['id']));

        // 只要拿到第一条数据，就认为初始化完成
        _this.supplierInfoLoaded = true;
        _this.supplierInfoLoading = false;
      }).catch(function () {
        // 接口失败时不打断页面，保持原有字段
        _this.supplierInfoLoading = false;
      });
    },
    loadCategoryTree: function loadCategoryTree() {
      var _this2 = this;
      (0, _product.getProductCategoryList)(this).then(function (res) {
        var data = res && res.data;
        var list = Array.isArray(data) ? data : data && Array.isArray(data.content) ? data.content : [];
        _this2.categoryTree = list;
        _this2.resolveCategoryPath();
      }).catch(function () {
        _this2.categoryTree = [];
        _this2.resolveCategoryPath();
      });
    },
    findCategoryPath: function findCategoryPath(nodes, targetId) {
      var path = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];
      var list = Array.isArray(nodes) ? nodes : [];
      var tid = String(targetId || '').trim();
      if (!tid) return null;
      for (var i = 0; i < list.length; i++) {
        var node = list[i];
        if (!node) continue;
        var nextPath = path.concat(node);
        if (String(node.id) === tid) return nextPath;
        var hit = this.findCategoryPath(node.children, tid, nextPath);
        if (hit) return hit;
      }
      return null;
    },
    resolveCategoryPath: function resolveCategoryPath() {
      var hitPath = this.findCategoryPath(this.categoryTree, this.cateId) || [];
      this.cateLevelOneName = hitPath[0] && hitPath[0].cateName ? String(hitPath[0].cateName) : '';
      this.cateLevelTwoName = hitPath[1] && hitPath[1].cateName ? String(hitPath[1].cateName) : '';
      this.cateLevelThreeName = hitPath[2] && hitPath[2].cateName ? String(hitPath[2].cateName) : '';
      if (!this.cateLevelThreeName && this.cateName) this.cateLevelThreeName = String(this.cateName);
      var names = [this.cateLevelOneName, this.cateLevelTwoName, this.cateLevelThreeName].filter(Boolean);
      this.cateName = names.length ? names.join(' / ') : this.cateName;
    },
    loadLevelList: function loadLevelList() {
      var _this3 = this;
      if (!this.token) return;
      (0, _dict.getProductLevelList)(this).then(function (res) {
        _this3.levelList = (0, _dict.normalizeDictList)(res);
        _this3.levelIndex = 0;
        _this3.applyReapplyPresetSelections();
      }).catch(function () {
        _this3.levelList = [];
      });
    },
    loadUnitOptions: function loadUnitOptions() {
      var _this4 = this;
      if (!this.token) {
        this.unitOptions = [];
        this.unitIndex = 0;
        this.form.unitName = '';
        return;
      }
      (0, _dict.getDictDataByType)(this, 'product_units_list').then(function (res) {
        var list = (0, _dict.normalizeDictList)(res);
        if (list.length) {
          _this4.unitOptions = list.map(function (x) {
            return _objectSpread(_objectSpread({}, x), {}, {
              _label: (0, _dict.dictItemLabel)(x) || (0, _dict.dictItemValue)(x),
              // 提交时直接用中文单位（label），避免后端拿到数字编码
              _value: (0, _dict.dictItemLabel)(x) || (0, _dict.dictItemValue)(x) || ''
            });
          });
          _this4.unitIndex = 0;
          var o = _this4.unitOptions[0];
          _this4.form.unitName = o ? o._value : '';
          _this4.applyReapplyPresetSelections();
        } else {
          _this4.unitOptions = [];
          _this4.unitIndex = 0;
          _this4.form.unitName = '';
        }
      }).catch(function () {
        _this4.unitOptions = [];
        _this4.unitIndex = 0;
        _this4.form.unitName = '';
      });
    },
    loadSaleStockOptions: function loadSaleStockOptions() {
      var _this5 = this;
      if (!this.token) {
        this.setDefaultSaleStock();
        return;
      }
      (0, _dict.getDictDataByType)(this, 'sale_stock_type_List').then(function (res) {
        var list = (0, _dict.normalizeDictList)(res);
        if (list.length) {
          _this5.saleStockOptions = list.map(function (x) {
            return _objectSpread(_objectSpread({}, x), {}, {
              _label: (0, _dict.dictItemLabel)(x) || (0, _dict.dictItemValue)(x),
              _value: (0, _dict.dictItemValue)(x) || '1'
            });
          });
          _this5.saleStockIndex = 0;
          _this5.form.saleStockType = _this5.saleStockOptions[0]._value;
          _this5.applyReapplyPresetSelections();
        } else {
          _this5.setDefaultSaleStock();
        }
      }).catch(function () {
        _this5.setDefaultSaleStock();
      });
    },
    setDefaultSaleStock: function setDefaultSaleStock() {
      this.saleStockOptions = [{
        _label: '现货',
        _value: '1'
      }, {
        _label: '预售',
        _value: '2'
      }];
      this.saleStockIndex = 0;
      this.form.saleStockType = '1';
      this.applyReapplyPresetSelections();
    },
    // 品级已锁定不可修改；如需恢复可编辑，把品级栏换回 picker 并解开此注释
    // onLevelChange(e) {
    //   this.levelIndex = Number(e.detail.value) || 0
    // },
    onUnitChange: function onUnitChange(e) {
      this.unitIndex = Number(e.detail.value) || 0;
      var o = this.unitOptions[this.unitIndex];
      this.form.unitName = o ? o._value || '' : '';
    },
    onSaleStockChange: function onSaleStockChange(e) {
      this.saleStockIndex = Number(e.detail.value) || 0;
      var o = this.saleStockOptions[this.saleStockIndex];
      if (o) this.form.saleStockType = o._value || String((0, _dict.dictItemValue)(o) || '1');
    },
    onIncrementalChange: function onIncrementalChange(e) {
      this.specIncremental = !!(e.detail && e.detail.value);
    },
    loadStorageList: function loadStorageList() {
      var _this6 = this;
      if (!this.token) return;
      this.request('get', 'storage/storage/list', this.token, null).then(function (res) {
        var rows = res.rows || res.data || [];
        _this6.storageList = Array.isArray(rows) ? rows : [];
        var sid = _this6.form.storageId || _this6.userInfo && _this6.userInfo.storageId;
        if (sid) {
          var hit = _this6.storageList.find(function (r) {
            return String(r.id) === String(sid);
          });
          if (hit) {
            _this6.form.storageId = String(hit.id);
            _this6.form.storageName = hit.name || '';
          }
        }
      }).catch(function () {});
    },
    previewSingleImage: function previewSingleImage(url) {
      var u = String(url || '').trim();
      if (!u) return;
      uni.previewImage({
        urls: [u],
        current: u
      });
    },
    onPreviewMainImage: function onPreviewMainImage() {
      this.previewSingleImage(this.mainImage && this.mainImage.url);
    },
    onPreviewInspectionReport: function onPreviewInspectionReport() {
      this.previewSingleImage(this.inspectionReportItem && this.inspectionReportItem.url);
    },
    onPreviewSliderImage: function onPreviewSliderImage(index) {
      var list = Array.isArray(this.sliderImages) ? this.sliderImages : [];
      var urls = list.map(function (x) {
        return String(x && x.url || '').trim();
      }).filter(Boolean);
      if (!urls.length) return;
      var i = Number(index);
      var current = Number.isFinite(i) && i >= 0 && i < urls.length ? urls[i] : urls[0];
      uni.previewImage({
        urls: urls,
        current: current
      });
    },
    pickMainImage: function pickMainImage() {
      var _this7 = this;
      if (this.auditMode) return;
      uni.chooseImage({
        count: 1,
        sizeType: ['compressed'],
        sourceType: ['album', 'camera'],
        success: function success(r) {
          var path = r.tempFilePaths && r.tempFilePaths[0];
          if (!path) return;
          _this7.doUpload(path, 'main');
        }
      });
    },
    pickSliderImages: function pickSliderImages() {
      var _this8 = this;
      if (this.auditMode) return;
      uni.chooseImage({
        count: 9,
        sizeType: ['compressed'],
        sourceType: ['album', 'camera'],
        success: function success(r) {
          var paths = r.tempFilePaths || [];
          paths.forEach(function (p) {
            return _this8.doUpload(p, 'slider');
          });
        }
      });
    },
    onPickVideoFail: function onPickVideoFail(e) {
      var msg = e && (e.errMsg || e.message) ? String(e.errMsg || e.message) : '';
      if (/cancel|取消/i.test(msg)) return;
      uni.showToast({
        title: '无法选择视频，请检查相册/相机权限',
        icon: 'none'
      });
    },
    pickVideo: function pickVideo() {
      var _this9 = this;
      if (this.auditMode) return;
      uni.chooseVideo({
        sourceType: ['album', 'camera'],
        compressed: true,
        maxDuration: 60,
        success: function success(r) {
          var path = r.tempFilePath;
          if (!path) return;
          var d = r.duration;
          _this9.videoDurationSec = typeof d === 'number' && Number.isFinite(d) ? Math.round(d) : 0;
          _this9.doUpload(path, 'video');
        },
        fail: function fail(err) {
          return _this9.onPickVideoFail(err);
        }
      });
    },
    pickInspectionReport: function pickInspectionReport() {
      var _this10 = this;
      if (this.auditMode) return;
      uni.chooseImage({
        count: 1,
        sizeType: ['compressed'],
        sourceType: ['album', 'camera'],
        success: function success(r) {
          var path = r.tempFilePaths && r.tempFilePaths[0];
          if (!path) return;
          _this10.doUpload(path, 'inspectionReport');
        }
      });
    },
    doUpload: function doUpload(filePath, kind) {
      var _this11 = this;
      if (this.auditMode) return;
      uni.showLoading({
        title: '上传中...',
        mask: true
      });
      (0, _product.uploadSupplierImage)(this, filePath).then(function (data) {
        var item = {
          ossId: data.ossId || '',
          url: data.url || ''
        };
        if (kind === 'main') _this11.mainImage = item;else if (kind === 'video') _this11.videoItem = item;else if (kind === 'inspectionReport') _this11.inspectionReportItem = item;else _this11.sliderImages.push(item);
      }).finally(function () {
        uni.hideLoading();
      });
    },
    clearMainImage: function clearMainImage() {
      if (this.auditMode) return;
      this.mainImage = {};
    },
    clearVideo: function clearVideo() {
      if (this.auditMode) return;
      this.videoItem = {};
      this.videoDurationSec = 0;
    },
    clearInspectionReport: function clearInspectionReport() {
      if (this.auditMode) return;
      this.inspectionReportItem = {};
    },
    removeSlider: function removeSlider(si) {
      if (this.auditMode) return;
      this.sliderImages.splice(si, 1);
    },
    buildImagePayload: function buildImagePayload() {
      var main = this.mainImage.url || this.mainImage.ossId ? [{
        ossId: this.mainImage.ossId,
        url: this.mainImage.url
      }] : [];
      var sliderImages = this.sliderImages.length ? this.sliderImages.map(function (x) {
        return {
          ossId: x.ossId,
          url: x.url
        };
      }) : [];
      var video = this.videoItem && (this.videoItem.url || this.videoItem.ossId) ? [{
        ossId: this.videoItem.ossId,
        url: this.videoItem.url
      }] : [];
      var slider = [].concat((0, _toConsumableArray2.default)(sliderImages), video);
      var productInspectionReport = this.inspectionReportItem && (this.inspectionReportItem.url || this.inspectionReportItem.ossId) ? [{
        ossId: this.inspectionReportItem.ossId,
        url: this.inspectionReportItem.url
      }] : [];
      return {
        image: main,
        sliderImage: slider,
        productInspectionReport: productInspectionReport
      };
    },
    buildBody: function buildBody() {
      var _this$buildImagePaylo = this.buildImagePayload(),
        image = _this$buildImagePaylo.image,
        sliderImage = _this$buildImagePaylo.sliderImage,
        productInspectionReport = _this$buildImagePaylo.productInspectionReport;
      var descText = (this.form.description || '').trim();
      var description = descText;
      var toJinString = function toJinString(jinLike) {
        var n = parseFloat(String(jinLike !== null && jinLike !== void 0 ? jinLike : '').trim());
        if (!Number.isFinite(n)) return '0';
        return String(Math.round(n * 100) / 100);
      };
      return {
        storeName: this.form.storeName.trim(),
        cateId: String(this.cateId),
        unitName: (this.form.unitName || '').trim(),
        storeInfo: this.form.storeInfo.trim(),
        sliderImage: sliderImage,
        specType: 0,
        isIntegral: 0,
        description: description,
        ficti: 0,
        sort: 0,
        isSub: 0,
        isShow: 1,
        isHot: 0,
        isBenefit: 0,
        isBest: 0,
        isNew: 0,
        header: [],
        storageName: this.form.storageName.trim(),
        defaultSupplier: this.form.defaultSupplier.trim(),
        secondWarehouseId: String(this.form.storageId).trim(),
        defaultSupplierId: String(this.form.defaultSupplierId).trim(),
        image: image,
        productInspectionReport: productInspectionReport,
        level: this.selectedLevelNum,
        productNo: this.form.productNo.trim(),
        alias: this.form.alias.trim() || this.form.storeName.trim(),
        keyword: this.form.keyword.trim() || ' ',
        productPackage: (this.form.productPackage || '').trim(),
        productBrand: this.form.productBrand.trim(),
        productOrigin: this.form.productOrigin.trim(),
        attrs: [{
          imageArr: [],
          pic: '',
          price: String(this.form.price),
          cost: String(this.form.cost || '0'),
          otPrice: String(this.form.otPrice || this.form.price || '0'),
          stock: String(this.form.stock),
          seckillStock: 0,
          seckillSrice: 0,
          pinkStock: 0,
          pinkPrice: 0,
          barCode: this.form.barCode.trim(),
          weight: toJinString(this.form.weight || '0'),
          netWeight: toJinString(this.form.netWeight || '0'),
          volume: Number(this.form.volume) || 0,
          brokerage: 0,
          brokerageTwo: 0,
          integral: 0,
          latestPurchasePrice: 0,
          minimumOrderQuantity: String(this.form.minimumOrderQuantity || '0'),
          saleStockType: String(this.form.saleStockType || '1'),
          incrementalOrder: this.specIncremental ? 1 : 0
        }],
        items: []
      };
    },
    decodeURIComponentSafe: function decodeURIComponentSafe(text) {
      try {
        return decodeURIComponent(String(text || ''));
      } catch (e) {
        return String(text || '');
      }
    },
    parseMaybeEncodedJson: function parseMaybeEncodedJson(text) {
      var raw = String(text || '');
      if (!raw) return {};
      var candidates = [raw];
      var once = this.decodeURIComponentSafe(raw);
      if (once && once !== raw) candidates.push(once);
      var twice = this.decodeURIComponentSafe(once);
      if (twice && twice !== once) candidates.push(twice);
      for (var i = 0; i < candidates.length; i++) {
        var s = candidates[i];
        try {
          var parsed = JSON.parse(s);
          if (parsed && (0, _typeof2.default)(parsed) === 'object') return parsed;
        } catch (e) {
          // noop
        }
      }
      return {};
    },
    normalizeMediaList: function normalizeMediaList(raw) {
      var _this12 = this;
      if (!raw) return [];
      var list = [];
      if (Array.isArray(raw)) list = raw;else if (typeof raw === 'string') {
        var t = raw.trim();
        if (!t) return [];
        var parsed = this.parseMaybeEncodedJson(t);
        if (Array.isArray(parsed)) list = parsed;else if (parsed && (0, _typeof2.default)(parsed) === 'object' && Object.keys(parsed).length) list = [parsed];else list = [t];
      } else if ((0, _typeof2.default)(raw) === 'object') list = [raw];
      return list.map(function (it) {
        if (typeof it === 'string') {
          var _url = it.trim();
          return {
            ossId: '',
            url: _url,
            _isVideo: _this12.isVideoUrl(_url)
          };
        }
        var url = String((0, _storage.pickFirstField)(it, ['url', 'imageUrl', 'fileUrl', 'pic', 'path'])).trim();
        var ossId = String((0, _storage.pickFirstField)(it, ['ossId', 'id', 'fileId', 'name'])).trim();
        var typeText = String((0, _storage.pickFirstField)(it, ['type', 'fileType', 'mediaType', 'resourceType', 'mimeType'])).toLowerCase();
        var isVideoType = /video|mp4|mov|webm|ogg/.test(typeText);
        return {
          ossId: ossId,
          url: url,
          _isVideo: isVideoType || _this12.isVideoUrl(url)
        };
      }).filter(function (x) {
        return x.url || x.ossId;
      });
    },
    isVideoUrl: function isVideoUrl(url) {
      var s = String(url || '').toLowerCase();
      if (!s) return false;
      return /\.(mp4|mov|webm|ogg|m3u8)(\?.*)?$/.test(s) || /\/video\//.test(s) || /mime=video/.test(s);
    },
    setFirstAttrSeed: function setFirstAttrSeed(seed) {
      var attrsRaw = (0, _storage.pickFirstField)(seed, ['attrs', 'attr', 'attrInfo', 'skuList']);
      var attrs = [];
      if (Array.isArray(attrsRaw)) attrs = attrsRaw;else if (typeof attrsRaw === 'string') {
        var parsed = this.parseMaybeEncodedJson(attrsRaw);
        if (Array.isArray(parsed)) attrs = parsed;
      } else if (attrsRaw && (0, _typeof2.default)(attrsRaw) === 'object') {
        attrs = [attrsRaw];
      }
      var first = attrs && attrs.length ? attrs[0] : null;
      if (!first) return;
      var price = (0, _storage.pickFirstField)(first, ['price', 'salePrice']);
      var stock = (0, _storage.pickFirstField)(first, ['stock']);
      var barCode = (0, _storage.pickFirstField)(first, ['barCode', 'barcode']);
      var minOrder = (0, _storage.pickFirstField)(first, ['minimumOrderQuantity', 'minOrderNum']);
      var saleStockType = (0, _storage.pickFirstField)(first, ['saleStockType']);
      var inc = Number((0, _storage.pickFirstField)(first, ['incrementalOrder']));
      var weightJin = Number((0, _storage.pickFirstField)(first, ['weight']));
      var netWeightJin = Number((0, _storage.pickFirstField)(first, ['netWeight']));
      if (price != null && price !== '') this.form.price = String(price);
      if (stock != null && stock !== '') this.form.stock = String(stock);
      if (barCode != null && barCode !== '') this.form.barCode = String(barCode);
      if (minOrder != null && minOrder !== '') this.form.minimumOrderQuantity = String(minOrder);
      if (saleStockType != null && saleStockType !== '') this.reapplyPreset.saleStockType = String(saleStockType);
      this.specIncremental = inc === 1;
      if (Number.isFinite(weightJin) && weightJin > 0) this.form.weight = String(Math.round(weightJin * 100) / 100);
      if (Number.isFinite(netWeightJin) && netWeightJin > 0) this.form.netWeight = String(Math.round(netWeightJin * 100) / 100);
    },
    applyReapplyPresetSelections: function applyReapplyPresetSelections() {
      var levelPreset = String(this.reapplyPreset.level || '').trim();
      if (levelPreset && this.levelOptions.length) {
        var idx = this.levelOptions.findIndex(function (x) {
          var v = String((0, _dict.dictItemValue)(x) || '').trim();
          var l = String((0, _dict.dictItemLabel)(x) || '').trim();
          return v === levelPreset || l === levelPreset;
        });
        if (idx >= 0) this.levelIndex = idx;
      }
      var unitPreset = String(this.reapplyPreset.unitName || '').trim();
      if (unitPreset && this.unitOptions.length) {
        var _idx = this.unitOptions.findIndex(function (x) {
          var v = String(x._value || '').trim();
          var l = String(x._label || '').trim();
          return v === unitPreset || l === unitPreset;
        });
        if (_idx >= 0) {
          this.unitIndex = _idx;
          this.form.unitName = this.unitOptions[_idx]._value || '';
        }
      }
      var stockPreset = String(this.reapplyPreset.saleStockType || '').trim();
      if (stockPreset && this.saleStockOptions.length) {
        var _idx2 = this.saleStockOptions.findIndex(function (x) {
          return String(x._value || '').trim() === stockPreset;
        });
        if (_idx2 >= 0) {
          this.saleStockIndex = _idx2;
          this.form.saleStockType = this.saleStockOptions[_idx2]._value || '1';
        }
      }
    },
    toImageItem: function toImageItem(raw) {
      var url = String(raw || '').trim();
      if (!url) return {};
      return {
        ossId: '',
        url: url
      };
    },
    initReapplySeed: function initReapplySeed(query) {
      var sourceId = this.decodeURIComponentSafe(query && query.id || '');
      var productId = this.decodeURIComponentSafe(query && query.productId || '');
      var auditModeRaw = this.decodeURIComponentSafe(query && query.auditMode || '');
      var auditId = this.decodeURIComponentSafe(query && query.auditId || '');
      var auditProductName = this.decodeURIComponentSafe(query && query.auditProductName || '');
      var sameDayOffShelf = this.decodeURIComponentSafe(query && query.sameDayOffShelf || '');
      var originPrice = this.decodeURIComponentSafe(query && query.originPrice || '');
      var originStock = this.decodeURIComponentSafe(query && query.originStock || '');
      this.reapplySourceId = String(sourceId || '').trim();
      this.reapplySourceProductId = String(productId || '').trim();
      var auditModeText = String(auditModeRaw || '').trim().toLowerCase();
      this.auditMode = auditModeText === '1' || auditModeText === 'true';
      this.auditId = String(auditId || '').trim();
      this.auditProductName = String(auditProductName || '').trim();
      this.auditRejectReason = '';
      this.auditSubmitting = false;
      this.auditDecision = '';
      this.reapplyConstraints = {
        sameDayOffShelf: String(sameDayOffShelf || '').trim() === '1',
        originPrice: String(originPrice || '').trim(),
        originStock: String(originStock || '').trim()
      };
      this.reapplySourceItem = {};
    },
    applyReapplySeed: function applyReapplySeed(seedRaw) {
      var wrapper = seedRaw && (0, _typeof2.default)(seedRaw) === 'object' ? seedRaw : {};
      var seed = wrapper && wrapper.productInfo && (0, _typeof2.default)(wrapper.productInfo) === 'object' ? wrapper.productInfo : wrapper;
      this.reapplySourceItem = seed;
      if (!this.reapplySourceProductId) {
        var pid = (0, _storage.pickFirstField)(seed, ['productId', 'id']);
        if (pid != null && pid !== '') this.reapplySourceProductId = String(pid).trim();
      }
      var cateId = String((0, _storage.pickFirstField)(seed, ['cateId', 'categoryId', 'thirdCateId', 'thirdCategoryId'])).trim();
      var cateName = String((0, _storage.pickFirstField)(seed, ['cateName', 'categoryName', 'thirdCateName', 'thirdCategoryName'])).trim();
      if (cateId) this.cateId = cateId;
      if (cateName) this.cateName = cateName;
      var storageId = String((0, _storage.pickFirstField)(seed, ['storageId', 'secondWarehouseId', 'warehouseId', 'mainWarehouseId'])).trim();
      var storageName = String((0, _storage.pickFirstField)(seed, ['storageName', 'warehouseName', 'mainWarehouseName'])).trim();
      var productName = String((0, _storage.pickFirstField)(seed, ['productName', 'storeName', 'name', 'title'])).trim();
      var productNo = String((0, _storage.pickFirstField)(seed, ['productNo', 'barCode', 'productId'])).trim();
      var keyword = String((0, _storage.pickFirstField)(seed, ['keyword', 'keywords'])).trim();
      var brief = String((0, _storage.pickFirstField)(seed, ['storeInfo', 'intro', 'productIntro'])).trim();
      var imgUrl = String((0, _storage.pickFirstField)(seed, ['productImage', 'imageUrl', 'pic', 'mainPic', 'cover'])).trim();
      var currentPrice = (0, _storage.pickFirstField)(seed, ['currentPrice', 'price', 'salePrice', 'retailPrice']);
      var currentStock = (0, _storage.pickFirstField)(seed, ['currentStock', 'stock', 'usableStock', 'usableNum']);
      var unitName = String((0, _storage.pickFirstField)(seed, ['unitName', 'unit', 'measureUnit'])).trim();
      var level = String((0, _storage.pickFirstField)(seed, ['level', 'productLevel'])).trim();
      var saleStockType = String((0, _storage.pickFirstField)(seed, ['saleStockType'])).trim();
      var productPackage = String((0, _storage.pickFirstField)(seed, ['productPackage', 'package'])).trim();
      var productBrand = String((0, _storage.pickFirstField)(seed, ['productBrand', 'brand'])).trim();
      var productOrigin = String((0, _storage.pickFirstField)(seed, ['productOrigin', 'origin'])).trim();
      var description = String((0, _storage.pickFirstField)(seed, ['description', 'detail'])).trim();
      var minimumOrderQuantity = (0, _storage.pickFirstField)(seed, ['minimumOrderQuantity', 'minOrderNum']);
      var weightJin = (0, _storage.pickFirstField)(seed, ['weight']);
      var netWeightJin = (0, _storage.pickFirstField)(seed, ['netWeight']);
      var applyRemark = String((0, _storage.pickFirstField)(seed, ['applyRemark', 'remark'])).trim();
      if (storageId) this.form.storageId = storageId;
      if (storageName) this.form.storageName = storageName;
      if (productName) {
        this.form.storeName = productName;
        if (!(this.form.alias || '').trim()) this.form.alias = productName;
      }
      if (productNo && !(this.form.productNo || '').trim()) {
        this.form.productNo = productNo;
        this.form.barCode = productNo;
      }
      if (keyword && !(this.form.keyword || '').trim()) this.form.keyword = keyword;
      if (brief && !(this.form.storeInfo || '').trim()) this.form.storeInfo = brief;
      if (imgUrl && (!this.mainImage || !this.mainImage.url)) this.mainImage = this.toImageItem(imgUrl);
      if (currentPrice != null && currentPrice !== '') this.form.price = String(currentPrice);
      if (currentStock != null && currentStock !== '') this.form.stock = String(currentStock);
      if (!(this.reapplyConstraints.originPrice || '').trim() && currentPrice != null && currentPrice !== '') {
        this.reapplyConstraints.originPrice = String(currentPrice).trim();
      }
      if (!(this.reapplyConstraints.originStock || '').trim() && currentStock != null && currentStock !== '') {
        this.reapplyConstraints.originStock = String(currentStock).trim();
      }
      if (unitName) this.reapplyPreset.unitName = unitName;
      if (level) this.reapplyPreset.level = level;
      if (saleStockType) this.reapplyPreset.saleStockType = saleStockType;
      if (productPackage) this.form.productPackage = productPackage;
      if (productBrand) this.form.productBrand = productBrand;
      if (productOrigin) this.form.productOrigin = productOrigin;
      if (description) this.form.description = description;
      if (minimumOrderQuantity != null && minimumOrderQuantity !== '') {
        this.form.minimumOrderQuantity = String(minimumOrderQuantity);
      }
      if (weightJin != null && weightJin !== '') this.form.weight = String(weightJin);
      if (netWeightJin != null && netWeightJin !== '') this.form.netWeight = String(netWeightJin);
      if (applyRemark && !this.form.description) this.form.description = applyRemark;
      var coverMedia = this.normalizeMediaList((0, _storage.pickFirstField)(seed, ['image', 'mainImage', 'coverImage']));
      if ((!this.mainImage || !this.mainImage.url) && coverMedia.length) {
        this.mainImage = {
          ossId: coverMedia[0].ossId || '',
          url: coverMedia[0].url || ''
        };
      }
      var inspectionMedia = this.normalizeMediaList((0, _storage.pickFirstField)(seed, ['productInspectionReport', 'inspectionReport']));
      if (inspectionMedia.length) this.inspectionReportItem = inspectionMedia[0];
      var sliderAll = this.normalizeMediaList((0, _storage.pickFirstField)(seed, ['sliderImage', 'sliderImages', 'gallery', 'album', 'images']));
      var videoDirect = this.normalizeMediaList((0, _storage.pickFirstField)(seed, ['video', 'videoUrl', 'productVideo', 'mainVideo', 'mediaVideo', 'videoItem']));
      if (videoDirect.length) {
        this.videoItem = {
          ossId: videoDirect[0].ossId || '',
          url: videoDirect[0].url || ''
        };
      }
      if (sliderAll.length) {
        var videoHit = sliderAll.find(function (x) {
          return !!x._isVideo;
        });
        var imageList = sliderAll.filter(function (x) {
          return !x._isVideo;
        });
        if (imageList.length) this.sliderImages = imageList;
        if ((!this.videoItem || !this.videoItem.url) && videoHit) {
          this.videoItem = {
            ossId: videoHit.ossId || '',
            url: videoHit.url || ''
          };
        }
      }
      this.setFirstAttrSeed(seed);
      this.applyReapplyPresetSelections();
    },
    canOnlyDownPriceAndUpStock: function canOnlyDownPriceAndUpStock() {
      return !!(this.reapplyConstraints && this.reapplyConstraints.sameDayOffShelf);
    },
    normalizeStoreProductDetail: function normalizeStoreProductDetail(res) {
      if (!res) return {};
      var data = res.data !== undefined ? res.data : res;
      if (data && (0, _typeof2.default)(data) === 'object' && !Array.isArray(data)) {
        if (data.data && (0, _typeof2.default)(data.data) === 'object' && !Array.isArray(data.data)) return data.data;
        return data;
      }
      return {};
    },
    loadReapplyDetail: function loadReapplyDetail() {
      var _this13 = this;
      var productId = String(this.reapplySourceProductId || '').trim();
      if (!productId) {
        uni.showToast({
          title: '缺少productId，无法加载详情',
          icon: 'none'
        });
        return;
      }
      uni.showLoading({
        title: '加载中...',
        mask: true
      });
      (0, _product.getStoreProductDetail)(this, productId).then(function (res) {
        if (res && res.code && Number(res.code) !== 200) return Promise.reject(res);
        var detail = _this13.normalizeStoreProductDetail(res);
        if (!detail || !Object.keys(detail).length) return Promise.reject({
          msg: '售后说明为空'
        });
        _this13.applyReapplySeed(detail);
        if (_this13.auditMode && _this13.auditProductName && !(_this13.form.storeName || '').trim()) {
          _this13.form.storeName = _this13.auditProductName;
        }
        return null;
      }).catch(function (err) {
        var msg = err && err.msg || '获取商品详情失败，请稍后重试';
        uni.showToast({
          title: msg,
          icon: 'none'
        });
      }).finally(function () {
        uni.hideLoading();
      });
    },
    submitAuditDecision: function submitAuditDecision(status) {
      var _this14 = this;
      if (this.auditSubmitting) return;
      var auditId = String(this.auditId || '').trim();
      if (!auditId) {
        uni.showToast({
          title: '缺少审核单ID，无法提交审核',
          icon: 'none'
        });
        return;
      }
      var s = String(status || '').trim() === '2' ? '2' : '1';
      var rejectReason = String(this.auditRejectReason || '').trim();
      if (s === '2' && !rejectReason) {
        uni.showToast({
          title: '驳回需填写驳回原因',
          icon: 'none'
        });
        return;
      }
      this.auditSubmitting = true;
      this.auditDecision = s;
      (0, _product.checkProductAudit)(this, {
        id: auditId,
        auditStatus: s,
        rejectReason: s === '2' ? rejectReason : ''
      }).then(function (res) {
        if (res && res.code && Number(res.code) !== 200) return Promise.reject(res);
        uni.showToast({
          title: '审核处理成功',
          icon: 'success'
        });
        var rawCtx = uni.getStorageSync(GOODS_AUDIT_RETURN_CTX_KEY);
        var ctx = rawCtx && (0, _typeof2.default)(rawCtx) === 'object' ? rawCtx : {};
        uni.setStorageSync(GOODS_AUDIT_RETURN_CTX_KEY, _objectSpread(_objectSpread({}, ctx), {}, {
          needRestore: 1,
          ts: Date.now()
        }));
        setTimeout(function () {
          uni.navigateBack({
            delta: 1
          });
        }, 1000);
      }).catch(function (err) {
        var msg = err && err.msg || '审核处理失败，请稍后重试';
        uni.showToast({
          title: msg,
          icon: 'none'
        });
      }).finally(function () {
        _this14.auditSubmitting = false;
        _this14.auditDecision = '';
      });
    },
    submitReapply: function submitReapply() {
      var _this15 = this;
      if (!this.reapplySourceId) {
        uni.showToast({
          title: '缺少商品ID，无法提交',
          icon: 'none'
        });
        return;
      }
      var productId = String(this.reapplySourceProductId || (0, _storage.pickFirstField)(this.reapplySourceItem || {}, ['productId', 'id'])).trim();
      if (!productId) {
        uni.showToast({
          title: '缺少productId，无法提交',
          icon: 'none'
        });
        return;
      }
      var product = this.buildBody();
      var rawSku = product && Array.isArray(product.attrs) && product.attrs[0] ? product.attrs[0] : {};
      var skuBase = {
        price: String(rawSku.price != null ? rawSku.price : this.form.price || ''),
        minimumOrderQuantity: String(rawSku.minimumOrderQuantity != null ? rawSku.minimumOrderQuantity : this.form.minimumOrderQuantity || '0'),
        incrementalOrder: Number(rawSku.incrementalOrder != null ? rawSku.incrementalOrder : this.specIncremental ? 1 : 0) ? 1 : 0,
        saleStockType: String(rawSku.saleStockType != null ? rawSku.saleStockType : this.form.saleStockType || '1'),
        stock: String(rawSku.stock != null ? rawSku.stock : this.form.stock || ''),
        barCode: String(rawSku.barCode != null ? rawSku.barCode : this.form.barCode || ''),
        weight: String(rawSku.weight != null ? rawSku.weight : this.form.weight || ''),
        netWeight: String(rawSku.netWeight != null ? rawSku.netWeight : this.form.netWeight || '')
      };
      product.id = productId;
      product.attr = _objectSpread({}, skuBase);
      product.attrs = [_objectSpread({}, skuBase)];
      var body = {
        stockId: String(this.reapplySourceId || '').trim(),
        applyRemark: String((0, _storage.pickFirstField)(this.reapplySourceItem || {}, ['applyRemark', 'remark'])).trim(),
        product: product,
        sku: _objectSpread(_objectSpread({}, skuBase), {}, {
          productId: productId
        })
      };
      this.submitting = true;
      (0, _storage.reapplyOnShelfAfterAutoOff)(this, body).then(function (res) {
        if (res && res.code && Number(res.code) !== 200) return Promise.reject(res);
        uni.showToast({
          title: '申请上架成功',
          icon: 'success'
        });
        setTimeout(function () {
          uni.redirectTo({
            url: '/sub-pages/supply/goods'
          });
        }, 1200);
      }).catch(function (err) {
        var msg = err && err.msg ? err.msg : '申请上架失败，请稍后重试';
        uni.showToast({
          title: msg,
          icon: 'none'
        });
      }).finally(function () {
        _this15.submitting = false;
      });
    },
    submit: function submit() {
      if (this.auditMode) {
        uni.showToast({
          title: '审核模式下请使用底部审核按钮',
          icon: 'none'
        });
        return;
      }
      if (!this.cateId) {
        uni.showToast({
          title: '缺少分类信息，请返回重新选择',
          icon: 'none'
        });
        return;
      }
      if (!this.form.storeName.trim()) {
        uni.showToast({
          title: '请填写商品名称',
          icon: 'none'
        });
        return;
      }
      if (!this.form.productNo.trim()) {
        uni.showToast({
          title: '请填写商品编码',
          icon: 'none'
        });
        return;
      }
      if (!this.unitOptions.length || !(this.form.unitName || '').trim()) {
        uni.showToast({
          title: '请选择单位',
          icon: 'none'
        });
        return;
      }
      if (!this.form.storeInfo.trim()) {
        uni.showToast({
          title: '请填写商品简介',
          icon: 'none'
        });
        return;
      }
      var _this$buildImagePaylo2 = this.buildImagePayload(),
        image = _this$buildImagePaylo2.image;
      if (!image.length) {
        uni.showToast({
          title: '请上传商品封面图',
          icon: 'none'
        });
        return;
      }
      if (this.sliderImages.length < 1) {
        uni.showToast({
          title: '商品轮播图至少上传1张',
          icon: 'none'
        });
        return;
      }
      if (!this.videoItem || !this.videoItem.url) {
        uni.showToast({
          title: '请上传商品视频',
          icon: 'none'
        });
        return;
      }
      if (this.videoDurationSec > 0 && this.videoDurationSec < 20) {
        uni.showToast({
          title: '商品视频时长需不少于20秒',
          icon: 'none'
        });
        return;
      }
      if (!this.form.storageId.trim() || !this.form.storageName.trim()) {
        uni.showToast({
          title: '未获取到总仓信息',
          icon: 'none'
        });
        return;
      }
      if (!this.form.defaultSupplier.trim() || !this.form.defaultSupplierId.trim()) {
        uni.showToast({
          title: '未获取到供应商信息',
          icon: 'none'
        });
        return;
      }
      if (this.form.price === '' || this.form.stock === '' || this.form.weight === '' || this.form.netWeight === '') {
        uni.showToast({
          title: '请填写售价、毛重、净重与库存',
          icon: 'none'
        });
        return;
      }
      var currentPrice = Number(this.reapplyConstraints.originPrice);
      var currentStock = Number(this.reapplyConstraints.originStock);
      var newPrice = Number(this.form.price);
      var newStock = Number(this.form.stock);
      if (!Number.isFinite(newPrice) || newPrice <= 0) {
        uni.showToast({
          title: '售价必须大于0',
          icon: 'none'
        });
        return;
      }
      if (!Number.isFinite(newStock) || newStock < 0) {
        uni.showToast({
          title: '库存不能小于0',
          icon: 'none'
        });
        return;
      }
      if (this.canOnlyDownPriceAndUpStock()) {
        if (Number.isFinite(currentPrice) && newPrice > currentPrice) {
          uni.showToast({
            title: '当天下架后重新上架，售价只能下调',
            icon: 'none'
          });
          return;
        }
        if (Number.isFinite(currentStock) && newStock < currentStock) {
          uni.showToast({
            title: '当天下架后重新上架，库存只能上调',
            icon: 'none'
          });
          return;
        }
      }
      this.submitReapply();
    }
  }
};
exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 2)["default"]))

/***/ }),

/***/ 282:
/*!***********************************************************************************************************************************************!*\
  !*** E:/project/yhlc-v1.0/agent-uniapp/sub-pages/supply/supplier-goods-reapply.vue?vue&type=style&index=0&id=746db9cd&lang=scss&scoped=true& ***!
  \***********************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_supplier_goods_reapply_vue_vue_type_style_index_0_id_746db9cd_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/mini-css-extract-plugin/dist/loader.js??ref--8-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--8-oneOf-1-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-2!./node_modules/postcss-loader/src??ref--8-oneOf-1-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/sass-loader/dist/cjs.js??ref--8-oneOf-1-4!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-5!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./supplier-goods-reapply.vue?vue&type=style&index=0&id=746db9cd&lang=scss&scoped=true& */ 283);
/* harmony import */ var _D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_supplier_goods_reapply_vue_vue_type_style_index_0_id_746db9cd_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_supplier_goods_reapply_vue_vue_type_style_index_0_id_746db9cd_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_supplier_goods_reapply_vue_vue_type_style_index_0_id_746db9cd_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_supplier_goods_reapply_vue_vue_type_style_index_0_id_746db9cd_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_supplier_goods_reapply_vue_vue_type_style_index_0_id_746db9cd_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 283:
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js??ref--8-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--8-oneOf-1-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-2!./node_modules/postcss-loader/src??ref--8-oneOf-1-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/sass-loader/dist/cjs.js??ref--8-oneOf-1-4!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-5!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!E:/project/yhlc-v1.0/agent-uniapp/sub-pages/supply/supplier-goods-reapply.vue?vue&type=style&index=0&id=746db9cd&lang=scss&scoped=true& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
    if(false) { var cssReload; }
  

/***/ }),

/***/ 284:
/*!***********************************************************************************************************************!*\
  !*** E:/project/yhlc-v1.0/agent-uniapp/sub-pages/supply/supplier-goods-reapply.vue?vue&type=style&index=1&lang=scss& ***!
  \***********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_supplier_goods_reapply_vue_vue_type_style_index_1_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/mini-css-extract-plugin/dist/loader.js??ref--8-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--8-oneOf-1-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-2!./node_modules/postcss-loader/src??ref--8-oneOf-1-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/sass-loader/dist/cjs.js??ref--8-oneOf-1-4!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-5!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./supplier-goods-reapply.vue?vue&type=style&index=1&lang=scss& */ 285);
/* harmony import */ var _D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_supplier_goods_reapply_vue_vue_type_style_index_1_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_supplier_goods_reapply_vue_vue_type_style_index_1_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_supplier_goods_reapply_vue_vue_type_style_index_1_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_supplier_goods_reapply_vue_vue_type_style_index_1_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_supplier_goods_reapply_vue_vue_type_style_index_1_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 285:
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js??ref--8-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--8-oneOf-1-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-2!./node_modules/postcss-loader/src??ref--8-oneOf-1-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/sass-loader/dist/cjs.js??ref--8-oneOf-1-4!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-5!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!E:/project/yhlc-v1.0/agent-uniapp/sub-pages/supply/supplier-goods-reapply.vue?vue&type=style&index=1&lang=scss& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
    if(false) { var cssReload; }
  

/***/ })

},[[276,"common/runtime","common/vendor","sub-pages/supply/common/vendor"]]]);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/sub-pages/supply/supplier-goods-reapply.js.map
},{isPage:true,isComponent:true,currentFile:'sub-pages/supply/supplier-goods-reapply.js'});require("sub-pages/supply/supplier-goods-reapply.js");$gwx3_XC_8=function(_,_v,_n,_p,_s,_wp,_wl,$gwn,$gwl,$gwh,wh,$gstack,$gwrt,gra,grb,TestTest,wfor,_ca,_da,_r,_rz,_o,_oz,_1,_1z,_2,_2z,_m,_mz,nv_getDate,nv_getRegExp,nv_console,nv_parseInt,nv_parseFloat,nv_isNaN,nv_isFinite,nv_decodeURI,nv_decodeURIComponent,nv_encodeURI,nv_encodeURIComponent,$gdc,nv_JSON,_af,_gv,_ai,_grp,_gd,_gapi,$ixc,_ic,_w,_ev,_tsd){return function(path,global){
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
var z=__WXML_GLOBAL__.ops_set.$gwx3_XC_8 || [];
function gz$gwx3_XC_8_1(){
if( __WXML_GLOBAL__.ops_cached.$gwx3_XC_8_1)return __WXML_GLOBAL__.ops_cached.$gwx3_XC_8_1
__WXML_GLOBAL__.ops_cached.$gwx3_XC_8_1=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'page data-v-672acd3f'])
Z([[7],[3,'pageStyle']])
Z([1,false])
Z([3,'scroll data-v-672acd3f'])
Z([1,true])
Z([[7],[3,'focusAnchorId']])
Z([[7],[3,'scrollTopVal']])
Z(z[2])
Z(z[4])
Z(z[2])
Z([[7],[3,'scrollViewStyle']])
Z([[2,'!=='],[[7],[3,'pageMode']],[1,'reapply']])
Z(z[11])
Z([3,'__l'])
Z([3,'data-v-672acd3f'])
Z([3,'7e2f5ba7-1'])
})(__WXML_GLOBAL__.ops_cached.$gwx3_XC_8_1);return __WXML_GLOBAL__.ops_cached.$gwx3_XC_8_1
}
__WXML_GLOBAL__.ops_set.$gwx3_XC_8=z;
__WXML_GLOBAL__.ops_init.$gwx3_XC_8=true;
var x=['./sub-pages/supply/supplier-goods-upload.wxml'];d_[x[0]]={}
var m0=function(e,s,r,gg){
var z=gz$gwx3_XC_8_1()
var ePF=_mz(z,'view',['class',0,'style',1],[],e,s,gg)
var bQF=_mz(z,'scroll-view',['bounces',2,'class',1,'enhanced',2,'scrollIntoView',3,'scrollTop',4,'scrollWithAnimation',5,'scrollY',6,'showScrollbar',7,'style',8],[],e,s,gg)
var oRF=_v()
_(bQF,oRF)
if(_oz(z,11,e,s,gg)){oRF.wxVkey=1
}
var xSF=_v()
_(bQF,xSF)
if(_oz(z,12,e,s,gg)){xSF.wxVkey=1
}
oRF.wxXCkey=1
xSF.wxXCkey=1
_(ePF,bQF)
var oTF=_mz(z,'privacy-auth-popup',['bind:__l',13,'class',1,'vueId',2],[],e,s,gg)
_(ePF,oTF)
_(r,ePF)
return r
}
e_[x[0]]={f:m0,j:[],i:[],ti:[],ic:[]}
if(path&&e_[path]){
return function(env,dd,global){$gwxc=0;var root={"tag":"wx-page"};root.children=[]
;g="$gwx3_XC_8";var main=e_[path].f
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
}(__g.a,__g.b,__g.c,__g.d,__g.e,__g.f,__g.g,__g.h,__g.i,__g.j,__g.k,__g.l,__g.m,__g.n,__g.o,__g.p,__g.q,__g.r,__g.s,__g.t,__g.u,__g.v,__g.w,__g.x,__g.y,__g.z,__g.A,__g.B,__g.C,__g.D,__g.E,__g.F,__g.G,__g.H,__g.I,__g.J,__g.K,__g.L,__g.M,__g.N,__g.O,__g.P,__g.Q,__g.R,__g.S,__g.T,__g.U,__g.V,__g.W,__g.X,__g.Y,__g.Z,__g.aa);if(__vd_version_info__.delayedGwx||false)$gwx3_XC_8();	if (__vd_version_info__.delayedGwx) __wxAppCode__['sub-pages/supply/supplier-goods-upload.wxml'] = [$gwx3_XC_8, './sub-pages/supply/supplier-goods-upload.wxml'];else __wxAppCode__['sub-pages/supply/supplier-goods-upload.wxml'] = $gwx3_XC_8( './sub-pages/supply/supplier-goods-upload.wxml' );
	;__wxRoute = "sub-pages/supply/supplier-goods-upload";__wxRouteBegin = true;__wxAppCurrentFile__="sub-pages/supply/supplier-goods-upload.js";define("sub-pages/supply/supplier-goods-upload.js",function(require,module,exports,window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){
require('./common/vendor.js');(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["sub-pages/supply/supplier-goods-upload"],{

/***/ 265:
/*!*******************************************************************************************************!*\
  !*** E:/project/yhlc-v1.0/agent-uniapp/main.js?{"page":"sub-pages%2Fsupply%2Fsupplier-goods-upload"} ***!
  \*******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(wx, createPage) {

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ 4);
__webpack_require__(/*! uni-pages */ 30);
var _vue = _interopRequireDefault(__webpack_require__(/*! vue */ 25));
var _supplierGoodsUpload = _interopRequireDefault(__webpack_require__(/*! ./sub-pages/supply/supplier-goods-upload.vue */ 266));
// @ts-ignore
wx.__webpack_require_UNI_MP_PLUGIN__ = __webpack_require__;
createPage(_supplierGoodsUpload.default);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/wx.js */ 1)["default"], __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 2)["createPage"]))

/***/ }),

/***/ 266:
/*!************************************************************************************!*\
  !*** E:/project/yhlc-v1.0/agent-uniapp/sub-pages/supply/supplier-goods-upload.vue ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _supplier_goods_upload_vue_vue_type_template_id_672acd3f_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./supplier-goods-upload.vue?vue&type=template&id=672acd3f&scoped=true& */ 267);
/* harmony import */ var _supplier_goods_upload_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./supplier-goods-upload.vue?vue&type=script&lang=js& */ 269);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _supplier_goods_upload_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _supplier_goods_upload_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _supplier_goods_upload_vue_vue_type_style_index_0_id_672acd3f_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./supplier-goods-upload.vue?vue&type=style&index=0&id=672acd3f&lang=scss&scoped=true& */ 272);
/* harmony import */ var _supplier_goods_upload_vue_vue_type_style_index_1_lang_scss___WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./supplier-goods-upload.vue?vue&type=style&index=1&lang=scss& */ 274);
/* harmony import */ var _D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 39);

var renderjs






/* normalize component */

var component = Object(_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_4__["default"])(
  _supplier_goods_upload_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _supplier_goods_upload_vue_vue_type_template_id_672acd3f_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _supplier_goods_upload_vue_vue_type_template_id_672acd3f_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "672acd3f",
  null,
  false,
  _supplier_goods_upload_vue_vue_type_template_id_672acd3f_scoped_true___WEBPACK_IMPORTED_MODULE_0__["components"],
  renderjs
)

component.options.__file = "sub-pages/supply/supplier-goods-upload.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 267:
/*!*******************************************************************************************************************************!*\
  !*** E:/project/yhlc-v1.0/agent-uniapp/sub-pages/supply/supplier-goods-upload.vue?vue&type=template&id=672acd3f&scoped=true& ***!
  \*******************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_supplier_goods_upload_vue_vue_type_template_id_672acd3f_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--17-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./supplier-goods-upload.vue?vue&type=template&id=672acd3f&scoped=true& */ 268);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_supplier_goods_upload_vue_vue_type_template_id_672acd3f_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_supplier_goods_upload_vue_vue_type_template_id_672acd3f_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_supplier_goods_upload_vue_vue_type_template_id_672acd3f_scoped_true___WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_supplier_goods_upload_vue_vue_type_template_id_672acd3f_scoped_true___WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),

/***/ 268:
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--17-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!E:/project/yhlc-v1.0/agent-uniapp/sub-pages/supply/supplier-goods-upload.vue?vue&type=template&id=672acd3f&scoped=true& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
  var g0 = _vm.levelOptions.length
  var g1 = _vm.unitOptions.length
  _vm.$mp.data = Object.assign(
    {},
    {
      $root: {
        g0: g0,
        g1: g1,
      },
    }
  )
}
var recyclableRender = false
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ 269:
/*!*************************************************************************************************************!*\
  !*** E:/project/yhlc-v1.0/agent-uniapp/sub-pages/supply/supplier-goods-upload.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_supplier_goods_upload_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--13-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./supplier-goods-upload.vue?vue&type=script&lang=js& */ 270);
/* harmony import */ var _D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_supplier_goods_upload_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_supplier_goods_upload_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_supplier_goods_upload_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_supplier_goods_upload_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_supplier_goods_upload_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 270:
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--13-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!E:/project/yhlc-v1.0/agent-uniapp/sub-pages/supply/supplier-goods-upload.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(uni) {

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ 4);
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _toConsumableArray2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/toConsumableArray */ 18));
var _typeof2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/typeof */ 13));
var _defineProperty2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/defineProperty */ 11));
var _vuex = __webpack_require__(/*! vuex */ 34);
var _product = __webpack_require__(/*! @/api/product.js */ 79);
var _storage = __webpack_require__(/*! @/api/storage.js */ 78);
var _dict = __webpack_require__(/*! @/api/dict.js */ 271);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0, _defineProperty2.default)(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
var _default = {
  data: function data() {
    return {
      cateId: '',
      cateName: '',
      cateLevelOneName: '',
      cateLevelTwoName: '',
      cateLevelThreeName: '',
      storageList: [],
      levelList: [],
      levelIndex: 0,
      unitOptions: [],
      unitIndex: 0,
      saleStockOptions: [],
      saleStockIndex: 0,
      pageMode: 'create',
      reapplySourceId: '',
      reapplySourceProductId: '',
      reapplySourceItem: {},
      reapplyPreset: {
        level: '',
        unitName: '',
        saleStockType: ''
      },
      submitting: false,
      mainImage: {},
      videoItem: {},
      /** chooseVideo 返回的时长（秒），用于提示「不少于20秒」 */
      videoDurationSec: 0,
      inspectionReportItem: {},
      sliderImages: [],
      specIncremental: false,
      form: {
        storeName: '',
        storeInfo: '',
        storageId: '',
        storageName: '',
        defaultSupplier: '',
        defaultSupplierId: '',
        price: '',
        cost: '0',
        otPrice: '0',
        stock: '',
        barCode: '',
        productNo: '',
        keyword: '',
        unitName: '',
        productPackage: '',
        productBrand: '',
        productOrigin: '',
        description: '',
        minimumOrderQuantity: '1',
        saleStockType: '1',
        weight: '',
        netWeight: '',
        volume: '0'
      },
      // 避免 onLoad / onShow 都触发导致重复请求
      supplierInfoLoaded: false,
      supplierInfoLoading: false,
      focusAnchorId: '',
      pageHeight: '',
      scrollViewHeight: '',
      keyboardHeight: 0,
      activeInputId: '',
      scrollTopVal: 0
    };
  },
  computed: _objectSpread(_objectSpread({}, (0, _vuex.mapState)(['token', 'userInfo'])), {}, {
    levelOptions: function levelOptions() {
      return this.levelList.map(function (x) {
        return _objectSpread(_objectSpread({}, x), {}, {
          _label: (0, _dict.dictItemLabel)(x) || '—'
        });
      });
    },
    levelPickerText: function levelPickerText() {
      var o = this.levelOptions[this.levelIndex];
      return o ? o._label : '请选择品级';
    },
    unitPickerText: function unitPickerText() {
      var o = this.unitOptions[this.unitIndex];
      return o ? o._label : '请选择单位';
    },
    supplierDisplay: function supplierDisplay() {
      var n = (this.form.defaultSupplier || '').trim();
      var id = (this.form.defaultSupplierId || '').trim();
      if (n && id) return "".concat(n);
      if (n) return n;
      if (id) return id;
      return '—';
    },
    saleStockLabel: function saleStockLabel() {
      var o = this.saleStockOptions[this.saleStockIndex];
      return o ? o._label : '请选择';
    },
    selectedLevelNum: function selectedLevelNum() {
      var o = this.levelOptions[this.levelIndex];
      if (!o) return 0;
      var v = (0, _dict.dictItemValue)(o);
      var n = parseInt(v, 10);
      return Number.isFinite(n) ? n : 0;
    },
    /** 售价 ÷ 净重（斤），最多两位小数；无效为空则「--」 */pricePerJinDisplay: function pricePerJinDisplay() {
      var p = parseFloat(String(this.form.price || '').trim());
      var nw = parseFloat(String(this.form.weight || '').trim());
      if (!Number.isFinite(p) || !Number.isFinite(nw) || nw <= 0) return '--';
      var v = p / nw;
      if (!Number.isFinite(v)) return '--';
      return String(parseFloat(v.toFixed(2)));
    },
    submitButtonText: function submitButtonText() {
      return this.pageMode === 'reapply' ? '申请上架' : '新建商品';
    },
    /** 三级名称；无独立第三级字段时用路由/详情里的叶子分类名 */cateLevelThreeDisplay: function cateLevelThreeDisplay() {
      var t = String(this.cateLevelThreeName || '').trim();
      if (t) return t;
      return String(this.cateName || '').trim();
    },
    pageStyle: function pageStyle() {
      return this.pageHeight ? "height:".concat(this.pageHeight) : '';
    },
    scrollViewStyle: function scrollViewStyle() {
      return this.scrollViewHeight ? "height:".concat(this.scrollViewHeight) : '';
    },
    keyboardSpacerStyle: function keyboardSpacerStyle() {
      return this.keyboardHeight > 0 ? "height:".concat(this.keyboardHeight, "px") : 'height:0';
    }
  }),
  onLoad: function onLoad(query) {
    this.initPageHeight();
    this.bindKeyboardListener();
    var mode = query && query.mode ? decodeURIComponent(String(query.mode)) : '';
    this.pageMode = mode === 'reapply' ? 'reapply' : 'create';
    this.cateId = query.cateId ? decodeURIComponent(query.cateId) : '';
    this.cateName = query.cateName ? decodeURIComponent(query.cateName) : '';
    this.applyCategoryNamesFromQuery(query || {});
    if (this.pageMode === 'reapply') this.initReapplySeed(query || {});
    if (this.userInfo && this.userInfo.storageId != null) {
      this.form.storageId = String(this.userInfo.storageId);
    }
    this.loadSupplierInfo();
    this.loadLevelList();
    this.loadUnitOptions();
    this.loadSaleStockOptions();
    if (this.pageMode === 'reapply') this.loadReapplyDetail();
  },
  onShow: function onShow() {
    this.loadSupplierInfo();
  },
  onUnload: function onUnload() {
    this.unbindKeyboardListener();
  },
  methods: {
    initPageHeight: function initPageHeight() {
      try {
        var sys = uni.getSystemInfoSync() || {};
        var winH = Number(sys.windowHeight) || 0;
        var safeBottom = sys.safeAreaInsets && Number(sys.safeAreaInsets.bottom) || 0;
        if (winH > 0) {
          this.pageHeight = winH + 'px';
          var bottomBarPx = 60;
          var sh = winH - bottomBarPx - safeBottom;
          this.scrollViewHeight = (sh > 0 ? sh : winH) + 'px';
        }
      } catch (e) {
        // 保底：保留空字符串，CSS 兜底用 100vh
      }
    },
    bindKeyboardListener: function bindKeyboardListener() {
      var _this = this;
      if (this._kbHandler) return;
      this._kbHandler = function (res) {
        var h = res && Number(res.height) > 0 ? Number(res.height) : 0;
        _this.keyboardHeight = h;
        if (h > 0 && _this.activeInputId) {
          _this.scrollToInput(_this.activeInputId);
        }
      };
      try {
        if (uni.onKeyboardHeightChange) {
          uni.onKeyboardHeightChange(this._kbHandler);
        }
      } catch (e) {
        // noop
      }
    },
    unbindKeyboardListener: function unbindKeyboardListener() {
      try {
        if (uni.offKeyboardHeightChange && this._kbHandler) {
          uni.offKeyboardHeightChange(this._kbHandler);
        }
      } catch (e) {
        // noop
      }
      this._kbHandler = null;
      this.keyboardHeight = 0;
      this.activeInputId = '';
    },
    /**
     * 键盘弹起后，根据输入框位置精确滚动 scroll-view，使输入框在键盘上方可见。
     * 公式：scrollTop = inputBottom - (scrollViewportHeight - keyboardHeight - safeGap)
     */
    scrollToInput: function scrollToInput(id) {
      var _this2 = this;
      if (!id) return;
      var query = uni.createSelectorQuery().in(this);
      query.select("#".concat(id)).boundingClientRect();
      query.select('.scroll').boundingClientRect();
      query.select('.scroll').scrollOffset();
      query.exec(function (res) {
        var inputRect = res[0];
        var scrollRect = res[1];
        var scrollInfo = res[2];
        if (!inputRect || !scrollRect || !scrollInfo) return;
        var inputBottom = inputRect.top - scrollRect.top + scrollInfo.scrollTop + inputRect.height;
        var viewportH = scrollRect.height;
        var kb = Number(_this2.keyboardHeight) || 0;
        var safeGap = 20;
        var visibleBottom = viewportH - kb - safeGap;
        if (inputBottom > visibleBottom + scrollInfo.scrollTop) {
          var targetTop = inputBottom - visibleBottom;
          _this2.scrollTopVal = targetTop;
          // 同一值不会触发更新，先清零再赋值
          _this2.$nextTick(function () {
            _this2.scrollTopVal = targetTop + 0.1;
          });
        }
      });
    },
    onAfterSaleFocus: function onAfterSaleFocus() {
      var _this3 = this;
      this.activeInputId = 'after-sale-section';
      this.focusAnchorId = '';
      if (this.keyboardHeight > 0) {
        this.$nextTick(function () {
          return _this3.scrollToInput('after-sale-section');
        });
      }
    },
    onAfterSaleBlur: function onAfterSaleBlur() {
      this.activeInputId = '';
      this.focusAnchorId = '';
      this.keyboardHeight = 0;
    },
    onInputFocus: function onInputFocus(id) {
      var _this4 = this;
      this.activeInputId = id;
      if (this.keyboardHeight > 0) {
        this.$nextTick(function () {
          return _this4.scrollToInput(id);
        });
      }
    },
    onInputBlur: function onInputBlur() {
      this.activeInputId = '';
      this.keyboardHeight = 0;
    },
    /**
     * 从接口：/storage/supplierInfo/list?account=登录缓存的 userName
     * 初始化“总仓/供应商”
     */
    applyCategoryNamesFromQuery: function applyCategoryNamesFromQuery(query) {
      var q = query && (0, _typeof2.default)(query) === 'object' ? query : {};
      var one = String(this.decodeURIComponentSafe(q.firstCateName || '')).trim();
      var two = String(this.decodeURIComponentSafe(q.secondCateName || '')).trim();
      var three = String(this.decodeURIComponentSafe(q.thirdCateName || '')).trim();
      if (!three && this.cateName) three = String(this.cateName).trim();
      if (one) this.cateLevelOneName = one;
      if (two) this.cateLevelTwoName = two;
      if (three) this.cateLevelThreeName = three;
      this.syncJoinedCateNameFromLevels();
    },
    /** 将「生鲜/蔬菜/叶菜」类字符串拆成多级（不请求分类接口） */splitCategoryPath: function splitCategoryPath(str) {
      var raw = String(str || '').trim();
      if (!raw) return [];
      return raw.split(/\s*(?:\/|>|、|\\|\|)\s*/).map(function (x) {
        return x.trim();
      }).filter(Boolean);
    },
    /** 用拆分结果补全仍为空的各级名称 */applySplitPartsToLevels: function applySplitPartsToLevels(parts) {
      var p = Array.isArray(parts) ? parts : [];
      if (!p.length) return;
      if (p.length >= 3) {
        if (!this.cateLevelOneName) this.cateLevelOneName = p[0];
        if (!this.cateLevelTwoName) this.cateLevelTwoName = p[1];
        if (!this.cateLevelThreeName) this.cateLevelThreeName = p[2];
      } else if (p.length === 2) {
        if (!this.cateLevelOneName) this.cateLevelOneName = p[0];
        if (!this.cateLevelTwoName) this.cateLevelTwoName = p[1];
      } else if (p.length === 1) {
        if (!this.cateLevelThreeName) this.cateLevelThreeName = p[0];
      }
    },
    /** 用已有的一二三级拼出展示用 cateName */syncJoinedCateNameFromLevels: function syncJoinedCateNameFromLevels() {
      var names = [this.cateLevelOneName, this.cateLevelTwoName, this.cateLevelThreeName].filter(function (x) {
        return String(x || '').trim();
      });
      if (names.length) this.cateName = names.join(' / ');
    },
    /**
     * 重新申请：仅从商品详情 seed 解析多级分类（不调分类列表接口）。
     */
    applyCategoryLevelsFromSeed: function applyCategoryLevelsFromSeed(seed) {
      if (this.pageMode !== 'reapply') return;
      var s = seed && (0, _typeof2.default)(seed) === 'object' ? seed : {};
      var str = function str(v) {
        return String(v == null ? '' : v).trim();
      };
      var one = str((0, _storage.pickFirstField)(s, ['firstCateName', 'firstCategoryName', 'oneCateName', 'levelOneCateName']));
      var two = str((0, _storage.pickFirstField)(s, ['secondCateName', 'secondCategoryName', 'twoCateName', 'levelTwoCateName']));
      var three = str((0, _storage.pickFirstField)(s, ['thirdCateName', 'thirdCategoryName', 'levelThreeCateName']));
      if (one) this.cateLevelOneName = one;
      if (two) this.cateLevelTwoName = two;
      if (three) this.cateLevelThreeName = three;
      var pathStr = str((0, _storage.pickFirstField)(s, ['categoryPath', 'catePath', 'categoryFullName', 'fullCategoryName', 'cateFullName']));
      if (pathStr) this.applySplitPartsToLevels(this.splitCategoryPath(pathStr));
      var nameBlob = str(this.cateName);
      if (nameBlob) this.applySplitPartsToLevels(this.splitCategoryPath(nameBlob));
      if (!this.cateLevelThreeName) {
        var tOnly = str((0, _storage.pickFirstField)(s, ['thirdCateName', 'thirdCategoryName']));
        if (tOnly) this.cateLevelThreeName = tOnly;
      }
      if (!this.cateLevelThreeName) {
        var leaf = str((0, _storage.pickFirstField)(s, ['cateName', 'categoryName']));
        if (leaf && this.splitCategoryPath(leaf).length <= 1) this.cateLevelThreeName = leaf;
      }
      this.syncJoinedCateNameFromLevels();
    },
    loadSupplierInfo: function loadSupplierInfo() {
      var _this5 = this;
      // 避免 onLoad / onShow 触发重复请求（并发时也只允许一次）
      if (this.supplierInfoLoaded || this.supplierInfoLoading) return;
      var account = (0, _storage.getSupplierAccount)(this);
      if (!account) return;
      this.supplierInfoLoading = true;
      // 为避免空 token/未登录导致接口失败，这里由 request 统一处理
      (0, _storage.getSupplierInfoList)(this, account).then(function (res) {
        var list = (0, _storage.normalizeSupplierInfoList)(res);
        var first = list && list.length ? list[0] : null;
        if (!first) {
          _this5.supplierInfoLoading = false;
          return;
        }

        // 总仓：接口返回 mainWarehouseName / mainWarehouseId（见 storage/supplierInfo/list）
        _this5.form.storageName = String((0, _storage.pickFirstField)(first, ['mainWarehouseName', 'mainwarehouseName', 'storageName', 'totalStorageName', 'storage']));
        _this5.form.storageId = String((0, _storage.pickFirstField)(first, ['mainWarehouseId', 'mainwarehouseId', 'storageId', 'totalStorageId', 'storage_id']));

        // 供应商
        _this5.form.defaultSupplier = String((0, _storage.pickFirstField)(first, ['supplierName', 'defaultSupplier', 'supplier']));
        _this5.form.defaultSupplierId = String((0, _storage.pickFirstField)(first, ['id']));

        // 只要拿到第一条数据，就认为初始化完成
        _this5.supplierInfoLoaded = true;
        _this5.supplierInfoLoading = false;
      }).catch(function () {
        // 接口失败时不打断页面，保持原有字段
        _this5.supplierInfoLoading = false;
      });
    },
    loadLevelList: function loadLevelList() {
      var _this6 = this;
      if (!this.token) return;
      (0, _dict.getProductLevelList)(this).then(function (res) {
        _this6.levelList = (0, _dict.normalizeDictList)(res);
        _this6.levelIndex = 0;
        _this6.applyReapplyPresetSelections();
      }).catch(function () {
        _this6.levelList = [];
      });
    },
    loadUnitOptions: function loadUnitOptions() {
      var _this7 = this;
      if (!this.token) {
        this.unitOptions = [];
        this.unitIndex = 0;
        this.form.unitName = '';
        return;
      }
      (0, _dict.getDictDataByType)(this, 'product_units_list').then(function (res) {
        var list = (0, _dict.normalizeDictList)(res);
        if (list.length) {
          _this7.unitOptions = list.map(function (x) {
            return _objectSpread(_objectSpread({}, x), {}, {
              _label: (0, _dict.dictItemLabel)(x) || (0, _dict.dictItemValue)(x),
              // 提交时直接用中文单位（label），避免后端拿到数字编码
              _value: (0, _dict.dictItemLabel)(x) || (0, _dict.dictItemValue)(x) || ''
            });
          });
          _this7.unitIndex = 0;
          var o = _this7.unitOptions[0];
          _this7.form.unitName = o ? o._value : '';
          _this7.applyReapplyPresetSelections();
        } else {
          _this7.unitOptions = [];
          _this7.unitIndex = 0;
          _this7.form.unitName = '';
        }
      }).catch(function () {
        _this7.unitOptions = [];
        _this7.unitIndex = 0;
        _this7.form.unitName = '';
      });
    },
    loadSaleStockOptions: function loadSaleStockOptions() {
      var _this8 = this;
      if (!this.token) {
        this.setDefaultSaleStock();
        return;
      }
      (0, _dict.getDictDataByType)(this, 'sale_stock_type_List').then(function (res) {
        var list = (0, _dict.normalizeDictList)(res);
        if (list.length) {
          _this8.saleStockOptions = list.map(function (x) {
            return _objectSpread(_objectSpread({}, x), {}, {
              _label: (0, _dict.dictItemLabel)(x) || (0, _dict.dictItemValue)(x),
              _value: (0, _dict.dictItemValue)(x) || '1'
            });
          });
          _this8.saleStockIndex = 0;
          _this8.form.saleStockType = _this8.saleStockOptions[0]._value;
          _this8.applyReapplyPresetSelections();
        } else {
          _this8.setDefaultSaleStock();
        }
      }).catch(function () {
        _this8.setDefaultSaleStock();
      });
    },
    /**
     * 生成生鲜商品编码（与后台 storeProduct quickGenerateCode 规则一致）
     * 规则: [供应商ID前4位] + [分类ID末2位] + [当日已过秒数5位] + [2位随机数]
     */
    quickGenerateCode: function quickGenerateCode() {
      if (!this.cateId) {
        uni.showToast({
          title: '缺少分类信息，请返回重新选择',
          icon: 'none'
        });
        return;
      }
      var supplierIdStr = String(this.form.defaultSupplierId || '0');
      supplierIdStr = supplierIdStr.padStart(4, '0');
      var prefix = supplierIdStr.substring(0, 4);
      var cateStr = String(this.cateId);
      prefix = prefix + (cateStr.length > 2 ? cateStr.slice(-2) : cateStr.padStart(2, '0'));
      var now = new Date();
      var startOfDay = new Date(now.getFullYear(), now.getMonth(), now.getDate());
      var secondsOfDay = String(Math.floor((now.getTime() - startOfDay.getTime()) / 1000)).padStart(5, '0');
      var randomNum = String(Math.floor(Math.random() * 100)).padStart(2, '0');
      var finalCode = "".concat(prefix).concat(secondsOfDay).concat(randomNum);
      this.form.productNo = finalCode;
      this.form.barCode = finalCode;
    },
    setDefaultSaleStock: function setDefaultSaleStock() {
      this.saleStockOptions = [{
        _label: '现货',
        _value: '1'
      }, {
        _label: '预售',
        _value: '2'
      }];
      this.saleStockIndex = 0;
      this.form.saleStockType = '1';
      this.applyReapplyPresetSelections();
    },
    onLevelChange: function onLevelChange(e) {
      this.levelIndex = Number(e.detail.value) || 0;
    },
    onUnitChange: function onUnitChange(e) {
      this.unitIndex = Number(e.detail.value) || 0;
      var o = this.unitOptions[this.unitIndex];
      this.form.unitName = o ? o._value || '' : '';
    },
    onSaleStockChange: function onSaleStockChange(e) {
      this.saleStockIndex = Number(e.detail.value) || 0;
      var o = this.saleStockOptions[this.saleStockIndex];
      if (o) this.form.saleStockType = o._value || String((0, _dict.dictItemValue)(o) || '1');
    },
    onIncrementalChange: function onIncrementalChange(e) {
      this.specIncremental = !!(e.detail && e.detail.value);
    },
    loadStorageList: function loadStorageList() {
      var _this9 = this;
      if (!this.token) return;
      this.request('get', 'storage/storage/list', this.token, null).then(function (res) {
        var rows = res.rows || res.data || [];
        _this9.storageList = Array.isArray(rows) ? rows : [];
        var sid = _this9.form.storageId || _this9.userInfo && _this9.userInfo.storageId;
        if (sid) {
          var hit = _this9.storageList.find(function (r) {
            return String(r.id) === String(sid);
          });
          if (hit) {
            _this9.form.storageId = String(hit.id);
            _this9.form.storageName = hit.name || '';
          }
        }
      }).catch(function () {});
    },
    pickMainImage: function pickMainImage() {
      var _this10 = this;
      uni.chooseImage({
        count: 1,
        sizeType: ['compressed'],
        sourceType: ['album', 'camera'],
        success: function success(r) {
          var path = r.tempFilePaths && r.tempFilePaths[0];
          if (!path) return;
          _this10.doUpload(path, 'main');
        }
      });
    },
    pickSliderImages: function pickSliderImages() {
      var _this11 = this;
      uni.chooseImage({
        count: 9,
        sizeType: ['compressed'],
        sourceType: ['album', 'camera'],
        success: function success(r) {
          var paths = r.tempFilePaths || [];
          paths.forEach(function (p) {
            return _this11.doUpload(p, 'slider');
          });
        }
      });
    },
    onPickVideoFail: function onPickVideoFail(e) {
      var msg = e && (e.errMsg || e.message) ? String(e.errMsg || e.message) : '';
      if (/cancel|取消/i.test(msg)) return;
      uni.showToast({
        title: '无法选择视频，请检查相册/相机权限',
        icon: 'none'
      });
    },
    pickVideo: function pickVideo() {
      var _this12 = this;
      uni.chooseVideo({
        sourceType: ['album', 'camera'],
        compressed: true,
        maxDuration: 60,
        success: function success(r) {
          var path = r.tempFilePath;
          if (!path) return;
          var d = r.duration;
          _this12.videoDurationSec = typeof d === 'number' && Number.isFinite(d) ? Math.round(d) : 0;
          _this12.doUpload(path, 'video');
        },
        fail: function fail(err) {
          return _this12.onPickVideoFail(err);
        }
      });
    },
    pickInspectionReport: function pickInspectionReport() {
      var _this13 = this;
      uni.chooseImage({
        count: 1,
        sizeType: ['compressed'],
        sourceType: ['album', 'camera'],
        success: function success(r) {
          var path = r.tempFilePaths && r.tempFilePaths[0];
          if (!path) return;
          _this13.doUpload(path, 'inspectionReport');
        }
      });
    },
    doUpload: function doUpload(filePath, kind) {
      var _this14 = this;
      uni.showLoading({
        title: '上传中...',
        mask: true
      });
      (0, _product.uploadSupplierImage)(this, filePath).then(function (data) {
        var item = {
          ossId: data.ossId || '',
          url: data.url || ''
        };
        if (kind === 'main') _this14.mainImage = item;else if (kind === 'video') _this14.videoItem = item;else if (kind === 'inspectionReport') _this14.inspectionReportItem = item;else _this14.sliderImages.push(item);
      }).finally(function () {
        uni.hideLoading();
      });
    },
    clearMainImage: function clearMainImage() {
      this.mainImage = {};
    },
    clearVideo: function clearVideo() {
      this.videoItem = {};
      this.videoDurationSec = 0;
    },
    clearInspectionReport: function clearInspectionReport() {
      this.inspectionReportItem = {};
    },
    removeSlider: function removeSlider(si) {
      this.sliderImages.splice(si, 1);
    },
    buildImagePayload: function buildImagePayload() {
      var main = this.mainImage.url || this.mainImage.ossId ? [{
        ossId: this.mainImage.ossId,
        url: this.mainImage.url
      }] : [];
      var sliderImages = this.sliderImages.length ? this.sliderImages.map(function (x) {
        return {
          ossId: x.ossId,
          url: x.url
        };
      }) : [];
      var video = this.videoItem && (this.videoItem.url || this.videoItem.ossId) ? [{
        ossId: this.videoItem.ossId,
        url: this.videoItem.url
      }] : [];
      var slider = [].concat((0, _toConsumableArray2.default)(sliderImages), video);
      var productInspectionReport = this.inspectionReportItem && (this.inspectionReportItem.url || this.inspectionReportItem.ossId) ? [{
        ossId: this.inspectionReportItem.ossId,
        url: this.inspectionReportItem.url
      }] : [];
      return {
        image: main,
        sliderImage: slider,
        productInspectionReport: productInspectionReport
      };
    },
    buildBody: function buildBody() {
      var _this$buildImagePaylo = this.buildImagePayload(),
        image = _this$buildImagePaylo.image,
        sliderImage = _this$buildImagePaylo.sliderImage,
        productInspectionReport = _this$buildImagePaylo.productInspectionReport;
      var descText = (this.form.description || '').trim();
      var description = descText;
      var toJinString = function toJinString(jinLike) {
        var n = parseFloat(String(jinLike !== null && jinLike !== void 0 ? jinLike : '').trim());
        if (!Number.isFinite(n)) return '0';
        return String(Math.round(n * 100) / 100);
      };
      return {
        storeName: this.form.storeName.trim(),
        cateId: String(this.cateId),
        unitName: (this.form.unitName || '').trim(),
        storeInfo: this.form.storeInfo.trim(),
        sliderImage: sliderImage,
        specType: 0,
        isIntegral: 0,
        description: description,
        ficti: 0,
        sort: 0,
        isSub: 0,
        isShow: 1,
        isHot: 0,
        isBenefit: 0,
        isBest: 0,
        isNew: 0,
        header: [],
        storageName: this.form.storageName.trim(),
        defaultSupplier: this.form.defaultSupplier.trim(),
        secondWarehouseId: String(this.form.storageId).trim(),
        defaultSupplierId: String(this.form.defaultSupplierId).trim(),
        image: image,
        productInspectionReport: productInspectionReport,
        level: this.selectedLevelNum,
        productNo: this.form.productNo.trim(),
        alias: this.form.storeName.trim(),
        keyword: this.form.keyword.trim(),
        productPackage: (this.form.productPackage || '').trim(),
        productBrand: this.form.productBrand.trim(),
        productOrigin: this.form.productOrigin.trim(),
        attrs: [{
          imageArr: [],
          pic: '',
          price: String(this.form.price),
          cost: String(this.form.cost || '0'),
          otPrice: String(this.form.otPrice || this.form.price || '0'),
          stock: String(this.form.stock),
          seckillStock: 0,
          seckillSrice: 0,
          pinkStock: 0,
          pinkPrice: 0,
          barCode: this.form.barCode.trim(),
          weight: toJinString(this.form.weight || '0'),
          netWeight: toJinString(this.form.netWeight || '0'),
          volume: Number(this.form.volume) || 0,
          brokerage: 0,
          brokerageTwo: 0,
          integral: 0,
          latestPurchasePrice: 0,
          minimumOrderQuantity: String(this.form.minimumOrderQuantity || '1'),
          saleStockType: String(this.form.saleStockType || '1'),
          incrementalOrder: this.specIncremental ? 1 : 0
        }],
        items: []
      };
    },
    decodeURIComponentSafe: function decodeURIComponentSafe(text) {
      try {
        return decodeURIComponent(String(text || ''));
      } catch (e) {
        return String(text || '');
      }
    },
    parseMaybeEncodedJson: function parseMaybeEncodedJson(text) {
      var raw = String(text || '');
      if (!raw) return {};
      var candidates = [raw];
      var once = this.decodeURIComponentSafe(raw);
      if (once && once !== raw) candidates.push(once);
      var twice = this.decodeURIComponentSafe(once);
      if (twice && twice !== once) candidates.push(twice);
      for (var i = 0; i < candidates.length; i++) {
        var s = candidates[i];
        try {
          var parsed = JSON.parse(s);
          if (parsed && (0, _typeof2.default)(parsed) === 'object') return parsed;
        } catch (e) {
          // noop
        }
      }
      return {};
    },
    normalizeMediaList: function normalizeMediaList(raw) {
      var _this15 = this;
      if (!raw) return [];
      var list = [];
      if (Array.isArray(raw)) list = raw;else if (typeof raw === 'string') {
        var t = raw.trim();
        if (!t) return [];
        var parsed = this.parseMaybeEncodedJson(t);
        if (Array.isArray(parsed)) list = parsed;else if (parsed && (0, _typeof2.default)(parsed) === 'object' && Object.keys(parsed).length) list = [parsed];else list = [t];
      } else if ((0, _typeof2.default)(raw) === 'object') list = [raw];
      return list.map(function (it) {
        if (typeof it === 'string') {
          var _url = it.trim();
          return {
            ossId: '',
            url: _url,
            _isVideo: _this15.isVideoUrl(_url)
          };
        }
        var url = String((0, _storage.pickFirstField)(it, ['url', 'imageUrl', 'fileUrl', 'pic', 'path'])).trim();
        var ossId = String((0, _storage.pickFirstField)(it, ['ossId', 'id', 'fileId', 'name'])).trim();
        var typeText = String((0, _storage.pickFirstField)(it, ['type', 'fileType', 'mediaType', 'resourceType', 'mimeType'])).toLowerCase();
        var isVideoType = /video|mp4|mov|webm|ogg/.test(typeText);
        return {
          ossId: ossId,
          url: url,
          _isVideo: isVideoType || _this15.isVideoUrl(url)
        };
      }).filter(function (x) {
        return x.url || x.ossId;
      });
    },
    isVideoUrl: function isVideoUrl(url) {
      var s = String(url || '').toLowerCase();
      if (!s) return false;
      return /\.(mp4|mov|webm|ogg|m3u8)(\?.*)?$/.test(s) || /\/video\//.test(s) || /mime=video/.test(s);
    },
    setFirstAttrSeed: function setFirstAttrSeed(seed) {
      var attrsRaw = (0, _storage.pickFirstField)(seed, ['attrs', 'attr', 'attrInfo', 'skuList']);
      var attrs = [];
      if (Array.isArray(attrsRaw)) attrs = attrsRaw;else if (typeof attrsRaw === 'string') {
        var parsed = this.parseMaybeEncodedJson(attrsRaw);
        if (Array.isArray(parsed)) attrs = parsed;
      } else if (attrsRaw && (0, _typeof2.default)(attrsRaw) === 'object') {
        attrs = [attrsRaw];
      }
      var first = attrs && attrs.length ? attrs[0] : null;
      if (!first) return;
      var price = (0, _storage.pickFirstField)(first, ['price', 'salePrice']);
      var stock = (0, _storage.pickFirstField)(first, ['stock']);
      var barCode = (0, _storage.pickFirstField)(first, ['barCode', 'barcode']);
      var minOrder = (0, _storage.pickFirstField)(first, ['minimumOrderQuantity', 'minOrderNum']);
      var saleStockType = (0, _storage.pickFirstField)(first, ['saleStockType']);
      var inc = Number((0, _storage.pickFirstField)(first, ['incrementalOrder']));
      var weightJin = Number((0, _storage.pickFirstField)(first, ['weight']));
      var netWeightJin = Number((0, _storage.pickFirstField)(first, ['netWeight']));
      if (price != null && price !== '') this.form.price = String(price);
      if (stock != null && stock !== '') this.form.stock = String(stock);
      if (barCode != null && barCode !== '') this.form.barCode = String(barCode);
      if (minOrder != null && minOrder !== '') {
        var minOrderNum = parseInt(String(minOrder).trim(), 10);
        this.form.minimumOrderQuantity = String(Number.isFinite(minOrderNum) && minOrderNum > 0 ? minOrderNum : 1);
      }
      if (saleStockType != null && saleStockType !== '') this.reapplyPreset.saleStockType = String(saleStockType);
      this.specIncremental = inc === 1;
      if (Number.isFinite(weightJin) && weightJin > 0) this.form.weight = String(Math.round(weightJin * 100) / 100);
      if (Number.isFinite(netWeightJin) && netWeightJin > 0) this.form.netWeight = String(Math.round(netWeightJin * 100) / 100);
    },
    applyReapplyPresetSelections: function applyReapplyPresetSelections() {
      if (this.pageMode !== 'reapply') return;
      var levelPreset = String(this.reapplyPreset.level || '').trim();
      if (levelPreset && this.levelOptions.length) {
        var idx = this.levelOptions.findIndex(function (x) {
          var v = String((0, _dict.dictItemValue)(x) || '').trim();
          var l = String((0, _dict.dictItemLabel)(x) || '').trim();
          return v === levelPreset || l === levelPreset;
        });
        if (idx >= 0) this.levelIndex = idx;
      }
      var unitPreset = String(this.reapplyPreset.unitName || '').trim();
      if (unitPreset && this.unitOptions.length) {
        var _idx = this.unitOptions.findIndex(function (x) {
          var v = String(x._value || '').trim();
          var l = String(x._label || '').trim();
          return v === unitPreset || l === unitPreset;
        });
        if (_idx >= 0) {
          this.unitIndex = _idx;
          this.form.unitName = this.unitOptions[_idx]._value || '';
        }
      }
      var stockPreset = String(this.reapplyPreset.saleStockType || '').trim();
      if (stockPreset && this.saleStockOptions.length) {
        var _idx2 = this.saleStockOptions.findIndex(function (x) {
          return String(x._value || '').trim() === stockPreset;
        });
        if (_idx2 >= 0) {
          this.saleStockIndex = _idx2;
          this.form.saleStockType = this.saleStockOptions[_idx2]._value || '1';
        }
      }
    },
    toImageItem: function toImageItem(raw) {
      var url = String(raw || '').trim();
      if (!url) return {};
      return {
        ossId: '',
        url: url
      };
    },
    initReapplySeed: function initReapplySeed(query) {
      var sourceId = this.decodeURIComponentSafe(query && query.id || '');
      var productId = this.decodeURIComponentSafe(query && query.productId || '');
      this.reapplySourceId = String(sourceId || '').trim();
      this.reapplySourceProductId = String(productId || '').trim();
      this.reapplySourceItem = {};
    },
    applyReapplySeed: function applyReapplySeed(seedRaw) {
      var wrapper = seedRaw && (0, _typeof2.default)(seedRaw) === 'object' ? seedRaw : {};
      var seed = wrapper && wrapper.productInfo && (0, _typeof2.default)(wrapper.productInfo) === 'object' ? wrapper.productInfo : wrapper;
      this.reapplySourceItem = seed;
      if (!this.reapplySourceProductId) {
        var pid = (0, _storage.pickFirstField)(seed, ['productId', 'id']);
        if (pid != null && pid !== '') this.reapplySourceProductId = String(pid).trim();
      }
      var cateId = String((0, _storage.pickFirstField)(seed, ['cateId', 'categoryId', 'thirdCateId', 'thirdCategoryId'])).trim();
      var cateName = String((0, _storage.pickFirstField)(seed, ['cateName', 'categoryName', 'thirdCateName', 'thirdCategoryName'])).trim();
      if (cateId) this.cateId = cateId;
      if (cateName) this.cateName = cateName;
      var storageId = String((0, _storage.pickFirstField)(seed, ['storageId', 'secondWarehouseId', 'warehouseId', 'mainWarehouseId'])).trim();
      var storageName = String((0, _storage.pickFirstField)(seed, ['storageName', 'warehouseName', 'mainWarehouseName'])).trim();
      var productName = String((0, _storage.pickFirstField)(seed, ['productName', 'storeName', 'name', 'title'])).trim();
      var productNo = String((0, _storage.pickFirstField)(seed, ['productNo', 'barCode', 'productId'])).trim();
      var keyword = String((0, _storage.pickFirstField)(seed, ['keyword', 'keywords'])).trim();
      var brief = String((0, _storage.pickFirstField)(seed, ['storeInfo', 'intro', 'productIntro'])).trim();
      var imgUrl = String((0, _storage.pickFirstField)(seed, ['productImage', 'imageUrl', 'pic', 'mainPic', 'cover'])).trim();
      var currentPrice = (0, _storage.pickFirstField)(seed, ['currentPrice', 'price', 'salePrice', 'retailPrice']);
      var currentStock = (0, _storage.pickFirstField)(seed, ['currentStock', 'stock', 'usableStock', 'usableNum']);
      var unitName = String((0, _storage.pickFirstField)(seed, ['unitName', 'unit', 'measureUnit'])).trim();
      var level = String((0, _storage.pickFirstField)(seed, ['level', 'productLevel'])).trim();
      var saleStockType = String((0, _storage.pickFirstField)(seed, ['saleStockType'])).trim();
      var productPackage = String((0, _storage.pickFirstField)(seed, ['productPackage', 'package'])).trim();
      var productBrand = String((0, _storage.pickFirstField)(seed, ['productBrand', 'brand'])).trim();
      var productOrigin = String((0, _storage.pickFirstField)(seed, ['productOrigin', 'origin'])).trim();
      var description = String((0, _storage.pickFirstField)(seed, ['description', 'detail'])).trim();
      var minimumOrderQuantity = (0, _storage.pickFirstField)(seed, ['minimumOrderQuantity', 'minOrderNum']);
      var weightJin = (0, _storage.pickFirstField)(seed, ['weight']);
      var netWeightJin = (0, _storage.pickFirstField)(seed, ['netWeight']);
      var applyRemark = String((0, _storage.pickFirstField)(seed, ['applyRemark', 'remark'])).trim();
      if (storageId) this.form.storageId = storageId;
      if (storageName) this.form.storageName = storageName;
      if (productName) {
        this.form.storeName = productName;
      }
      if (productNo && !(this.form.productNo || '').trim()) {
        this.form.productNo = productNo;
        this.form.barCode = productNo;
      }
      if (keyword && !(this.form.keyword || '').trim()) this.form.keyword = keyword;
      if (brief && !(this.form.storeInfo || '').trim()) this.form.storeInfo = brief;
      if (imgUrl && (!this.mainImage || !this.mainImage.url)) this.mainImage = this.toImageItem(imgUrl);
      if (currentPrice != null && currentPrice !== '') this.form.price = String(currentPrice);
      if (currentStock != null && currentStock !== '') this.form.stock = String(currentStock);
      if (unitName) this.reapplyPreset.unitName = unitName;
      if (level) this.reapplyPreset.level = level;
      if (saleStockType) this.reapplyPreset.saleStockType = saleStockType;
      if (productPackage) this.form.productPackage = productPackage;
      if (productBrand) this.form.productBrand = productBrand;
      if (productOrigin) this.form.productOrigin = productOrigin;
      if (description) this.form.description = description;
      if (minimumOrderQuantity != null && minimumOrderQuantity !== '') {
        var minOrderNum = parseInt(String(minimumOrderQuantity).trim(), 10);
        this.form.minimumOrderQuantity = String(Number.isFinite(minOrderNum) && minOrderNum > 0 ? minOrderNum : 1);
      }
      if (weightJin != null && weightJin !== '') this.form.weight = String(weightJin);
      if (netWeightJin != null && netWeightJin !== '') this.form.netWeight = String(netWeightJin);
      if (applyRemark && !this.form.description) this.form.description = applyRemark;
      var coverMedia = this.normalizeMediaList((0, _storage.pickFirstField)(seed, ['image', 'mainImage', 'coverImage']));
      if ((!this.mainImage || !this.mainImage.url) && coverMedia.length) {
        this.mainImage = {
          ossId: coverMedia[0].ossId || '',
          url: coverMedia[0].url || ''
        };
      }
      var inspectionMedia = this.normalizeMediaList((0, _storage.pickFirstField)(seed, ['productInspectionReport', 'inspectionReport']));
      if (inspectionMedia.length) this.inspectionReportItem = inspectionMedia[0];
      var sliderAll = this.normalizeMediaList((0, _storage.pickFirstField)(seed, ['sliderImage', 'sliderImages', 'gallery', 'album', 'images']));
      var videoDirect = this.normalizeMediaList((0, _storage.pickFirstField)(seed, ['video', 'videoUrl', 'productVideo', 'mainVideo', 'mediaVideo', 'videoItem']));
      if (videoDirect.length) {
        this.videoItem = {
          ossId: videoDirect[0].ossId || '',
          url: videoDirect[0].url || ''
        };
      }
      if (sliderAll.length) {
        var videoHit = sliderAll.find(function (x) {
          return !!x._isVideo;
        });
        var imageList = sliderAll.filter(function (x) {
          return !x._isVideo;
        });
        if (imageList.length) this.sliderImages = imageList;
        if ((!this.videoItem || !this.videoItem.url) && videoHit) {
          this.videoItem = {
            ossId: videoHit.ossId || '',
            url: videoHit.url || ''
          };
        }
      }
      this.setFirstAttrSeed(seed);
      this.applyReapplyPresetSelections();
      this.applyCategoryLevelsFromSeed(seed);
    },
    normalizeStoreProductDetail: function normalizeStoreProductDetail(res) {
      if (!res) return {};
      var data = res.data !== undefined ? res.data : res;
      if (data && (0, _typeof2.default)(data) === 'object' && !Array.isArray(data)) {
        if (data.data && (0, _typeof2.default)(data.data) === 'object' && !Array.isArray(data.data)) return data.data;
        return data;
      }
      return {};
    },
    loadReapplyDetail: function loadReapplyDetail() {
      var _this16 = this;
      var productId = String(this.reapplySourceProductId || '').trim();
      if (!productId) {
        uni.showToast({
          title: '缺少productId，无法加载详情',
          icon: 'none'
        });
        return;
      }
      uni.showLoading({
        title: '加载中...',
        mask: true
      });
      (0, _product.getStoreProductDetail)(this, productId).then(function (res) {
        if (res && res.code && Number(res.code) !== 200) return Promise.reject(res);
        var detail = _this16.normalizeStoreProductDetail(res);
        if (!detail || !Object.keys(detail).length) return Promise.reject({
          msg: '商品详情为空'
        });
        _this16.applyReapplySeed(detail);
        return null;
      }).catch(function (err) {
        var msg = err && err.msg || '获取商品详情失败，请稍后重试';
        uni.showToast({
          title: msg,
          icon: 'none'
        });
      }).finally(function () {
        uni.hideLoading();
      });
    },
    submitReapply: function submitReapply() {
      var _this17 = this;
      if (!this.reapplySourceId) {
        uni.showToast({
          title: '缺少商品ID，无法提交',
          icon: 'none'
        });
        return;
      }
      var body = this.buildBody();
      body.id = this.reapplySourceId;
      body.stockId = this.reapplySourceId;
      body.productId = String(this.reapplySourceProductId || (0, _storage.pickFirstField)(this.reapplySourceItem || {}, ['productId', 'id'])).trim();
      body.applyRemark = String((0, _storage.pickFirstField)(this.reapplySourceItem || {}, ['applyRemark', 'remark'])).trim();
      this.submitting = true;
      (0, _storage.reapplyOnShelfAfterAutoOff)(this, body).then(function (res) {
        if (res && res.code && Number(res.code) !== 200) return Promise.reject(res);
        uni.showToast({
          title: '申请上架成功',
          icon: 'success'
        });
        setTimeout(function () {
          uni.redirectTo({
            url: '/sub-pages/supply/goods'
          });
        }, 1200);
      }).catch(function (err) {
        var msg = err && err.msg ? err.msg : '申请上架失败，请稍后重试';
        uni.showToast({
          title: msg,
          icon: 'none'
        });
      }).finally(function () {
        _this17.submitting = false;
      });
    },
    submit: function submit() {
      var _this18 = this;
      if (!this.cateId) {
        uni.showToast({
          title: '缺少分类信息，请返回重新选择',
          icon: 'none'
        });
        return;
      }
      if (!this.form.storeName.trim()) {
        uni.showToast({
          title: '请填写商品名称',
          icon: 'none'
        });
        return;
      }
      if (!this.form.productNo.trim()) {
        uni.showToast({
          title: '请填写商品编码',
          icon: 'none'
        });
        return;
      }
      if (!this.form.keyword.trim()) {
        uni.showToast({
          title: '请填写商品关键字',
          icon: 'none'
        });
        return;
      }
      if (!this.levelOptions.length || !this.levelOptions[this.levelIndex]) {
        uni.showToast({
          title: '请选择品级',
          icon: 'none'
        });
        return;
      }
      if (!this.unitOptions.length || !(this.form.unitName || '').trim()) {
        uni.showToast({
          title: '请选择单位',
          icon: 'none'
        });
        return;
      }
      if (!this.form.productPackage.trim()) {
        uni.showToast({
          title: '请填写包装',
          icon: 'none'
        });
        return;
      }
      if (!this.form.productOrigin.trim()) {
        uni.showToast({
          title: '请填写产地',
          icon: 'none'
        });
        return;
      }
      if (!this.form.storeInfo.trim()) {
        uni.showToast({
          title: '请填写商品简介',
          icon: 'none'
        });
        return;
      }
      if (this.form.storeInfo.trim().length > 200) {
        uni.showToast({
          title: '商品简介不能超过200字，请重新输入',
          icon: 'none'
        });
        return;
      }
      var _this$buildImagePaylo2 = this.buildImagePayload(),
        image = _this$buildImagePaylo2.image;
      if (!image.length) {
        uni.showToast({
          title: '请上传商品封面图',
          icon: 'none'
        });
        return;
      }
      if (this.sliderImages.length < 1) {
        uni.showToast({
          title: '商品轮播图至少上传1张',
          icon: 'none'
        });
        return;
      }
      if (!this.videoItem || !this.videoItem.url) {
        uni.showToast({
          title: '请上传商品视频',
          icon: 'none'
        });
        return;
      }
      if (this.videoDurationSec > 0 && this.videoDurationSec < 20) {
        uni.showToast({
          title: '商品视频时长需不少于20秒',
          icon: 'none'
        });
        return;
      }
      if (!this.form.storageId.trim() || !this.form.storageName.trim()) {
        uni.showToast({
          title: '未获取到总仓信息',
          icon: 'none'
        });
        return;
      }
      if (!this.form.defaultSupplier.trim() || !this.form.defaultSupplierId.trim()) {
        uni.showToast({
          title: '未获取到供应商信息',
          icon: 'none'
        });
        return;
      }
      if (this.form.price === '' || this.form.stock === '' || this.form.barCode === '' || this.form.weight === '' || this.form.netWeight === '') {
        uni.showToast({
          title: '请填写售价、库存、条码、净重和毛重',
          icon: 'none'
        });
        return;
      }
      if (!this.saleStockOptions.length || !String(this.form.saleStockType || '').trim()) {
        uni.showToast({
          title: '请选择售卖库存',
          icon: 'none'
        });
        return;
      }
      var minOrderQty = parseInt(String(this.form.minimumOrderQuantity || '').trim(), 10);
      if (!Number.isFinite(minOrderQty) || minOrderQty < 1) {
        uni.showToast({
          title: '起订量必须大于等于1',
          icon: 'none'
        });
        return;
      }
      if (!String(this.form.description || '').trim()) {
        uni.showToast({
          title: '请填写售后说明',
          icon: 'none'
        });
        return;
      }
      if (String(this.form.description || '').trim().length > 200) {
        uni.showToast({
          title: '售后说明不能超过200字，请重新输入',
          icon: 'none'
        });
        return;
      }
      if (this.pageMode === 'reapply') {
        this.submitReapply();
        return;
      }
      this.submitting = true;
      (0, _product.addGoodsBySupplier)(this, this.buildBody()).then(function (res) {
        uni.showToast({
          title: '提交成功，申请审核中...',
          icon: 'none'
        });
        var storeProductId = res && res.data != null ? String(res.data) : '';
        if (!storeProductId) {
          return Promise.reject({
            msg: '上架接口未返回商品ID'
          });
        }
        return (0, _product.batchAuthorizeGoods)(_this18, {
          ids: [storeProductId],
          storageId: ''
        }).then(function () {
          uni.showToast({
            title: '审核申请已提交',
            icon: 'success'
          });
          setTimeout(function () {
            uni.redirectTo({
              url: '/sub-pages/supply/goods'
            });
          }, 1200);
        });
      }).catch(function (err) {
        var msg = err && err.msg ? err.msg : '申请审核失败，请稍后重试';
        uni.showToast({
          title: msg,
          icon: 'none'
        });
      }).finally(function () {
        _this18.submitting = false;
      });
    }
  }
};
exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 2)["default"]))

/***/ }),

/***/ 272:
/*!**********************************************************************************************************************************************!*\
  !*** E:/project/yhlc-v1.0/agent-uniapp/sub-pages/supply/supplier-goods-upload.vue?vue&type=style&index=0&id=672acd3f&lang=scss&scoped=true& ***!
  \**********************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_supplier_goods_upload_vue_vue_type_style_index_0_id_672acd3f_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/mini-css-extract-plugin/dist/loader.js??ref--8-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--8-oneOf-1-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-2!./node_modules/postcss-loader/src??ref--8-oneOf-1-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/sass-loader/dist/cjs.js??ref--8-oneOf-1-4!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-5!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./supplier-goods-upload.vue?vue&type=style&index=0&id=672acd3f&lang=scss&scoped=true& */ 273);
/* harmony import */ var _D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_supplier_goods_upload_vue_vue_type_style_index_0_id_672acd3f_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_supplier_goods_upload_vue_vue_type_style_index_0_id_672acd3f_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_supplier_goods_upload_vue_vue_type_style_index_0_id_672acd3f_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_supplier_goods_upload_vue_vue_type_style_index_0_id_672acd3f_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_supplier_goods_upload_vue_vue_type_style_index_0_id_672acd3f_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 273:
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js??ref--8-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--8-oneOf-1-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-2!./node_modules/postcss-loader/src??ref--8-oneOf-1-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/sass-loader/dist/cjs.js??ref--8-oneOf-1-4!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-5!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!E:/project/yhlc-v1.0/agent-uniapp/sub-pages/supply/supplier-goods-upload.vue?vue&type=style&index=0&id=672acd3f&lang=scss&scoped=true& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
    if(false) { var cssReload; }
  

/***/ }),

/***/ 274:
/*!**********************************************************************************************************************!*\
  !*** E:/project/yhlc-v1.0/agent-uniapp/sub-pages/supply/supplier-goods-upload.vue?vue&type=style&index=1&lang=scss& ***!
  \**********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_supplier_goods_upload_vue_vue_type_style_index_1_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/mini-css-extract-plugin/dist/loader.js??ref--8-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--8-oneOf-1-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-2!./node_modules/postcss-loader/src??ref--8-oneOf-1-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/sass-loader/dist/cjs.js??ref--8-oneOf-1-4!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-5!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./supplier-goods-upload.vue?vue&type=style&index=1&lang=scss& */ 275);
/* harmony import */ var _D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_supplier_goods_upload_vue_vue_type_style_index_1_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_supplier_goods_upload_vue_vue_type_style_index_1_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_supplier_goods_upload_vue_vue_type_style_index_1_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_supplier_goods_upload_vue_vue_type_style_index_1_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_supplier_goods_upload_vue_vue_type_style_index_1_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 275:
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js??ref--8-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--8-oneOf-1-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-2!./node_modules/postcss-loader/src??ref--8-oneOf-1-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/sass-loader/dist/cjs.js??ref--8-oneOf-1-4!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-5!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!E:/project/yhlc-v1.0/agent-uniapp/sub-pages/supply/supplier-goods-upload.vue?vue&type=style&index=1&lang=scss& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
    if(false) { var cssReload; }
  

/***/ })

},[[265,"common/runtime","common/vendor","sub-pages/supply/common/vendor"]]]);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/sub-pages/supply/supplier-goods-upload.js.map
},{isPage:true,isComponent:true,currentFile:'sub-pages/supply/supplier-goods-upload.js'});require("sub-pages/supply/supplier-goods-upload.js");$gwx3_XC_9=function(_,_v,_n,_p,_s,_wp,_wl,$gwn,$gwl,$gwh,wh,$gstack,$gwrt,gra,grb,TestTest,wfor,_ca,_da,_r,_rz,_o,_oz,_1,_1z,_2,_2z,_m,_mz,nv_getDate,nv_getRegExp,nv_console,nv_parseInt,nv_parseFloat,nv_isNaN,nv_isFinite,nv_decodeURI,nv_decodeURIComponent,nv_encodeURI,nv_encodeURIComponent,$gdc,nv_JSON,_af,_gv,_ai,_grp,_gd,_gapi,$ixc,_ic,_w,_ev,_tsd){return function(path,global){
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
var z=__WXML_GLOBAL__.ops_set.$gwx3_XC_9 || [];
function gz$gwx3_XC_9_1(){
if( __WXML_GLOBAL__.ops_cached.$gwx3_XC_9_1)return __WXML_GLOBAL__.ops_cached.$gwx3_XC_9_1
__WXML_GLOBAL__.ops_cached.$gwx3_XC_9_1=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'delivery-list-page data-v-3fbf5b77'])
Z([3,'search-bar data-v-3fbf5b77'])
Z([3,'search-inputs data-v-3fbf5b77'])
Z([3,'__l'])
Z([3,'search-icon data-v-3fbf5b77'])
Z([3,'#999'])
Z([3,'18'])
Z([3,'search'])
Z([3,'8fa6d722-1'])
Z([[7],[3,'showSupplierSearch']])
Z(z[3])
Z(z[4])
Z(z[5])
Z(z[6])
Z(z[7])
Z([3,'8fa6d722-2'])
Z(z[9])
Z(z[3])
Z(z[4])
Z(z[5])
Z(z[6])
Z(z[7])
Z([3,'8fa6d722-3'])
Z(z[3])
Z([3,'__e'])
Z([3,'data-v-3fbf5b77'])
Z([[4],[[5],[[4],[[5],[[5],[1,'^change']],[[4],[[5],[[4],[[5],[1,'onDateRangeChange']]]]]]]]])
Z([3,'string'])
Z([3,'daterange'])
Z([[7],[3,'dateRange']])
Z([3,'8fa6d722-4'])
Z([[4],[[5],[1,'default']]])
Z(z[3])
Z(z[25])
Z([3,'#666'])
Z([3,'22'])
Z([3,'calendar'])
Z([[2,'+'],[[2,'+'],[1,'8fa6d722-5'],[1,',']],[1,'8fa6d722-4']])
Z(z[24])
Z([3,'list-scroll data-v-3fbf5b77'])
Z([[4],[[5],[[4],[[5],[[5],[1,'scrolltolower']],[[4],[[5],[[4],[[5],[[5],[1,'onScrollLower']],[[4],[[5],[1,'$event']]]]]]]]]]])
Z([1,true])
Z([1,false])
Z([[6],[[7],[3,'$root']],[3,'g0']])
Z(z[3])
Z(z[25])
Z([3,'clipboard'])
Z([3,'暂无数据'])
Z([3,'8fa6d722-6'])
Z([[6],[[7],[3,'$root']],[3,'g1']])
Z([3,'__i0__'])
Z([3,'item'])
Z([[6],[[7],[3,'$root']],[3,'l0']])
Z([3,'id'])
Z(z[24])
Z([3,'order-card data-v-3fbf5b77'])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[[5],[[5],[1,'onOpenDetail']],[[4],[[5],[1,'$0']]]],[[4],[[5],[[4],[[5],[[4],[[5],[[5],[[5],[1,'displayList']],[1,'id']],[[6],[[6],[[7],[3,'item']],[3,'$orig']],[3,'id']]]]]]]]]]]]]]]])
Z([[6],[[7],[3,'item']],[3,'g2']])
Z([[2,'==='],[[6],[[7],[3,'item']],[3,'m1']],[1,0]])
Z([[7],[3,'loading']])
Z([[6],[[7],[3,'$root']],[3,'g3']])
Z(z[24])
Z([3,'btn-go data-v-3fbf5b77'])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[[5],[1,'onGoPending']],[[4],[[5],[1,'$event']]]]]]]]]]])
Z([[7],[3,'isSupplier']])
Z(z[3])
Z([3,'data-v-3fbf5b77 vue-ref'])
Z([3,'orderQrcodePopup'])
Z([3,'center'])
Z([3,'8fa6d722-7'])
Z(z[31])
})(__WXML_GLOBAL__.ops_cached.$gwx3_XC_9_1);return __WXML_GLOBAL__.ops_cached.$gwx3_XC_9_1
}
__WXML_GLOBAL__.ops_set.$gwx3_XC_9=z;
__WXML_GLOBAL__.ops_init.$gwx3_XC_9=true;
var x=['./sub-pages/supply/supplier-order.wxml'];d_[x[0]]={}
var m0=function(e,s,r,gg){
var z=gz$gwx3_XC_9_1()
var cVF=_n('view')
_rz(z,cVF,'class',0,e,s,gg)
var hWF=_n('view')
_rz(z,hWF,'class',1,e,s,gg)
var oXF=_n('view')
_rz(z,oXF,'class',2,e,s,gg)
var l1F=_mz(z,'uni-icons',['bind:__l',3,'class',1,'color',2,'size',3,'type',4,'vueId',5],[],e,s,gg)
_(oXF,l1F)
var cYF=_v()
_(oXF,cYF)
if(_oz(z,9,e,s,gg)){cYF.wxVkey=1
var a2F=_mz(z,'uni-icons',['bind:__l',10,'class',1,'color',2,'size',3,'type',4,'vueId',5],[],e,s,gg)
_(cYF,a2F)
}
var oZF=_v()
_(oXF,oZF)
if(_oz(z,16,e,s,gg)){oZF.wxVkey=1
var t3F=_mz(z,'uni-icons',['bind:__l',17,'class',1,'color',2,'size',3,'type',4,'vueId',5],[],e,s,gg)
_(oZF,t3F)
}
cYF.wxXCkey=1
cYF.wxXCkey=3
oZF.wxXCkey=1
oZF.wxXCkey=3
_(hWF,oXF)
var e4F=_mz(z,'uni-datetime-picker',['bind:__l',23,'bind:change',1,'class',2,'data-event-opts',3,'returnType',4,'type',5,'value',6,'vueId',7,'vueSlots',8],[],e,s,gg)
var b5F=_mz(z,'uni-icons',['bind:__l',32,'class',1,'color',2,'size',3,'type',4,'vueId',5],[],e,s,gg)
_(e4F,b5F)
_(hWF,e4F)
_(cVF,hWF)
var o6F=_mz(z,'scroll-view',['bindscrolltolower',38,'class',1,'data-event-opts',2,'scrollY',3,'showScrollbar',4],[],e,s,gg)
var x7F=_v()
_(o6F,x7F)
if(_oz(z,43,e,s,gg)){x7F.wxVkey=1
var c0F=_mz(z,'empty-state',['bind:__l',44,'class',1,'iconType',2,'text',3,'vueId',4],[],e,s,gg)
_(x7F,c0F)
}
var o8F=_v()
_(o6F,o8F)
if(_oz(z,49,e,s,gg)){o8F.wxVkey=1
}
else{o8F.wxVkey=2
var hAG=_v()
_(o8F,hAG)
var oBG=function(oDG,cCG,lEG,gg){
var tGG=_mz(z,'view',['bindtap',54,'class',1,'data-event-opts',2],[],oDG,cCG,gg)
var eHG=_v()
_(tGG,eHG)
if(_oz(z,57,oDG,cCG,gg)){eHG.wxVkey=1
}
var bIG=_v()
_(tGG,bIG)
if(_oz(z,58,oDG,cCG,gg)){bIG.wxVkey=1
}
eHG.wxXCkey=1
bIG.wxXCkey=1
_(lEG,tGG)
return lEG
}
hAG.wxXCkey=2
_2z(z,52,oBG,e,s,gg,hAG,'item','__i0__','id')
}
var f9F=_v()
_(o6F,f9F)
if(_oz(z,59,e,s,gg)){f9F.wxVkey=1
}
else{f9F.wxVkey=2
var oJG=_v()
_(f9F,oJG)
if(_oz(z,60,e,s,gg)){oJG.wxVkey=1
}
oJG.wxXCkey=1
}
x7F.wxXCkey=1
x7F.wxXCkey=3
o8F.wxXCkey=1
f9F.wxXCkey=1
_(cVF,o6F)
var xKG=_mz(z,'button',['bindtap',61,'class',1,'data-event-opts',2],[],e,s,gg)
var oLG=_v()
_(xKG,oLG)
if(_oz(z,64,e,s,gg)){oLG.wxVkey=1
}
oLG.wxXCkey=1
_(cVF,xKG)
var fMG=_mz(z,'uni-popup',['bind:__l',65,'class',1,'data-ref',2,'type',3,'vueId',4,'vueSlots',5],[],e,s,gg)
_(cVF,fMG)
_(r,cVF)
return r
}
e_[x[0]]={f:m0,j:[],i:[],ti:[],ic:[]}
if(path&&e_[path]){
return function(env,dd,global){$gwxc=0;var root={"tag":"wx-page"};root.children=[]
;g="$gwx3_XC_9";var main=e_[path].f
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
}(__g.a,__g.b,__g.c,__g.d,__g.e,__g.f,__g.g,__g.h,__g.i,__g.j,__g.k,__g.l,__g.m,__g.n,__g.o,__g.p,__g.q,__g.r,__g.s,__g.t,__g.u,__g.v,__g.w,__g.x,__g.y,__g.z,__g.A,__g.B,__g.C,__g.D,__g.E,__g.F,__g.G,__g.H,__g.I,__g.J,__g.K,__g.L,__g.M,__g.N,__g.O,__g.P,__g.Q,__g.R,__g.S,__g.T,__g.U,__g.V,__g.W,__g.X,__g.Y,__g.Z,__g.aa);if(__vd_version_info__.delayedGwx||false)$gwx3_XC_9();	if (__vd_version_info__.delayedGwx) __wxAppCode__['sub-pages/supply/supplier-order.wxml'] = [$gwx3_XC_9, './sub-pages/supply/supplier-order.wxml'];else __wxAppCode__['sub-pages/supply/supplier-order.wxml'] = $gwx3_XC_9( './sub-pages/supply/supplier-order.wxml' );
	;__wxRoute = "sub-pages/supply/supplier-order";__wxRouteBegin = true;__wxAppCurrentFile__="sub-pages/supply/supplier-order.js";define("sub-pages/supply/supplier-order.js",function(require,module,exports,window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){
require('./common/vendor.js');(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["sub-pages/supply/supplier-order"],{

/***/ 308:
/*!************************************************************************************************!*\
  !*** E:/project/yhlc-v1.0/agent-uniapp/main.js?{"page":"sub-pages%2Fsupply%2Fsupplier-order"} ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(wx, createPage) {

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ 4);
__webpack_require__(/*! uni-pages */ 30);
var _vue = _interopRequireDefault(__webpack_require__(/*! vue */ 25));
var _supplierOrder = _interopRequireDefault(__webpack_require__(/*! ./sub-pages/supply/supplier-order.vue */ 309));
// @ts-ignore
wx.__webpack_require_UNI_MP_PLUGIN__ = __webpack_require__;
createPage(_supplierOrder.default);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/wx.js */ 1)["default"], __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 2)["createPage"]))

/***/ }),

/***/ 309:
/*!*****************************************************************************!*\
  !*** E:/project/yhlc-v1.0/agent-uniapp/sub-pages/supply/supplier-order.vue ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _supplier_order_vue_vue_type_template_id_3fbf5b77_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./supplier-order.vue?vue&type=template&id=3fbf5b77&scoped=true& */ 310);
/* harmony import */ var _supplier_order_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./supplier-order.vue?vue&type=script&lang=js& */ 312);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _supplier_order_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _supplier_order_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _supplier_order_vue_vue_type_style_index_0_id_3fbf5b77_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./supplier-order.vue?vue&type=style&index=0&id=3fbf5b77&lang=scss&scoped=true& */ 314);
/* harmony import */ var _D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 39);

var renderjs





/* normalize component */

var component = Object(_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _supplier_order_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _supplier_order_vue_vue_type_template_id_3fbf5b77_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _supplier_order_vue_vue_type_template_id_3fbf5b77_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "3fbf5b77",
  null,
  false,
  _supplier_order_vue_vue_type_template_id_3fbf5b77_scoped_true___WEBPACK_IMPORTED_MODULE_0__["components"],
  renderjs
)

component.options.__file = "sub-pages/supply/supplier-order.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 310:
/*!************************************************************************************************************************!*\
  !*** E:/project/yhlc-v1.0/agent-uniapp/sub-pages/supply/supplier-order.vue?vue&type=template&id=3fbf5b77&scoped=true& ***!
  \************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_supplier_order_vue_vue_type_template_id_3fbf5b77_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--17-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./supplier-order.vue?vue&type=template&id=3fbf5b77&scoped=true& */ 311);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_supplier_order_vue_vue_type_template_id_3fbf5b77_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_supplier_order_vue_vue_type_template_id_3fbf5b77_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_supplier_order_vue_vue_type_template_id_3fbf5b77_scoped_true___WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_supplier_order_vue_vue_type_template_id_3fbf5b77_scoped_true___WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),

/***/ 311:
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--17-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!E:/project/yhlc-v1.0/agent-uniapp/sub-pages/supply/supplier-order.vue?vue&type=template&id=3fbf5b77&scoped=true& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return recyclableRender; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "components", function() { return components; });
var components
try {
  components = {
    uniIcons: function () {
      return Promise.all(/*! import() | uni_modules/uni-icons/components/uni-icons/uni-icons */[__webpack_require__.e("common/vendor"), __webpack_require__.e("uni_modules/uni-icons/components/uni-icons/uni-icons")]).then(__webpack_require__.bind(null, /*! @/uni_modules/uni-icons/components/uni-icons/uni-icons.vue */ 520))
    },
    uniDatetimePicker: function () {
      return Promise.all(/*! import() | uni_modules/uni-datetime-picker/components/uni-datetime-picker/uni-datetime-picker */[__webpack_require__.e("common/vendor"), __webpack_require__.e("uni_modules/uni-datetime-picker/components/uni-datetime-picker/uni-datetime-picker")]).then(__webpack_require__.bind(null, /*! @/uni_modules/uni-datetime-picker/components/uni-datetime-picker/uni-datetime-picker.vue */ 556))
    },
    uniPopup: function () {
      return __webpack_require__.e(/*! import() | components/uni-popup/uni-popup */ "components/uni-popup/uni-popup").then(__webpack_require__.bind(null, /*! @/components/uni-popup/uni-popup.vue */ 506))
    },
  }
} catch (e) {
  if (
    e.message.indexOf("Cannot find module") !== -1 &&
    e.message.indexOf(".vue") !== -1
  ) {
    console.error(e.message)
    console.error("1. 排查组件名称拼写是否正确")
    console.error(
      "2. 排查组件是否符合 easycom 规范，文档：https://uniapp.dcloud.net.cn/collocation/pages?id=easycom"
    )
    console.error(
      "3. 若组件不符合 easycom 规范，需手动引入，并在 components 中注册该组件"
    )
  } else {
    throw e
  }
}
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  var g0 = _vm.displayList.length === 0 && !_vm.loading
  var g1 =
    _vm.displayList.length === 0 && !_vm.loading && _vm.isQualityInspector
  var l0 = !g1
    ? _vm.__map(_vm.displayList, function (item, __i0__) {
        var $orig = _vm.__get_orig(item)
        var m0 = _vm.statusText(item.status)
        var g2 = item.coverSlots && item.coverSlots.length
        var m1 = Number(item.status)
        return {
          $orig: $orig,
          m0: m0,
          g2: g2,
          m1: m1,
        }
      })
    : null
  var g3 = !_vm.loading ? _vm.finished && _vm.rawList.length : null
  _vm.$mp.data = Object.assign(
    {},
    {
      $root: {
        g0: g0,
        g1: g1,
        l0: l0,
        g3: g3,
      },
    }
  )
}
var recyclableRender = false
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ 312:
/*!******************************************************************************************************!*\
  !*** E:/project/yhlc-v1.0/agent-uniapp/sub-pages/supply/supplier-order.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_supplier_order_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--13-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./supplier-order.vue?vue&type=script&lang=js& */ 313);
/* harmony import */ var _D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_supplier_order_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_supplier_order_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_supplier_order_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_supplier_order_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_supplier_order_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 313:
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--13-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!E:/project/yhlc-v1.0/agent-uniapp/sub-pages/supply/supplier-order.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(uni) {

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ 4);
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _toConsumableArray2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/toConsumableArray */ 18));
var _typeof2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/typeof */ 13));
var _defineProperty2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/defineProperty */ 11));
var _vuex = __webpack_require__(/*! vuex */ 34);
var _storeOrder = __webpack_require__(/*! @/api/storeOrder.js */ 141);
var _userRoleKeys = __webpack_require__(/*! @/utils/userRoleKeys */ 142);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0, _defineProperty2.default)(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
var EmptyState = function EmptyState() {
  __webpack_require__.e(/*! require.ensure | components/empty-state */ "components/empty-state").then((function () {
    return resolve(__webpack_require__(/*! @/components/empty-state.vue */ 542));
  }).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
};
var _default = {
  components: {
    EmptyState: EmptyState
  },
  data: function data() {
    return {
      keyword: '',
      /** 供应商名称输入框 v-model */
      supplierNameInput: '',
      /** 已提交给接口的供应商名称，分页与刷新均以此为准 */
      searchSupplierName: '',
      /** 品种（商品名称）输入框 v-model */
      productNameInput: '',
      /** 已提交给接口的品种关键词，分页与刷新均以此为准 */
      searchProductName: '',
      /** 日期筛选仅用于前端本地过滤（新接口暂未提供时间筛选参数） */
      dateRange: [],
      /** 与待送货列表一致：由 order/dailySummary/list 首条解析后再请求 batch/list */
      supplierId: '',
      /** 日汇总 id，供 order/batch 的 summaryId（batch 行上未必有 summaryId） */
      dailySummaryId: '',
      dailySupplierName: '',
      bizType: 'SHIP',
      tabIndex: 0,
      tabs: [{
        label: '全部',
        value: 'all'
      }, {
        label: '待质检',
        value: 0
      }, {
        label: '已质检',
        value: 1
      }, {
        label: '已装车',
        value: 3
      }],
      rawList: [],
      pageNum: 1,
      pageSize: 20,
      total: 0,
      loading: false,
      finished: false,
      /** 列表请求代数：筛选/刷新时递增，避免与进行中的请求竞态导致不发请求或参数丢失 */
      listFetchGen: 0,
      /** 为 true 时 loadList 忽略 loading 门禁（仅由 resetAndLoad 设置） */
      listLoadForce: false,
      orderQrcodeImage: '',
      currentQrcodeOrderNo: '',
      /** 底部待送货件数：按待送货列表同源 sku 接口 quantity 累计 */
      pendingSkuCount: 0
    };
  },
  computed: _objectSpread(_objectSpread({}, (0, _vuex.mapState)(['token', 'userInfo'])), {}, {
    isQualityInspector: function isQualityInspector() {
      return (0, _userRoleKeys.hasProcurementRole)(this.userInfo);
    },
    /**
     * 供应商角色：后端 /order/dailySummary/list 会按当前供应商过滤，
     * 自己只能看自己的汇总，按供应商名搜索无意义 -> 隐藏供应商输入框。
     */
    isSupplier: function isSupplier() {
      return (0, _userRoleKeys.hasSupplierRole)(this.userInfo);
    },
    /**
     * 供应商名称 + 品种搜索框显示条件：
     *   仅采购(cg)/城市仓(11num)/admin 可见；供应商(gys) 隐藏。
     *   后端 order/batch/list 的 buildQueryWrapper 已支持 supplierName like 与 productName EXISTS 子查询过滤。
     *   供应商角色后端会按当前登录供应商强制 scope，搜索无意义 -> 隐藏。
     */
    showSupplierSearch: function showSupplierSearch() {
      return !this.isSupplier;
    },
    displayList: function displayList() {
      var tab = this.tabs[this.tabIndex];
      var list = this.filterByKeywordAndDate(this.rawList);
      if (!tab || tab.value === 'all') return list;
      if (Number(tab.value) === 3) {
        return list.filter(function (x) {
          return Number(x.rawStatus) === 0;
        });
      }
      return list.filter(function (x) {
        return Number(x.status) === Number(tab.value);
      });
    },
    pendingCount: function pendingCount() {
      return Number(this.pendingSkuCount) || 0;
    },
    dateRangeActive: function dateRangeActive() {
      var r = this.dateRange;
      return Array.isArray(r) && r.length >= 2 && !!(r[0] && r[1]);
    }
  }),
  onLoad: function onLoad(query) {
    var q = query || {};
    this.bizType = String(q.bizType || this.bizType || 'SHIP').trim() || 'SHIP';
    var tabValueRaw = q.tabValue;
    var tabIndexRaw = q.tabIndex;
    var fromDeliver = String(q.fromDeliver || '').trim();
    var wantsPending = fromDeliver === '1' || fromDeliver.toLowerCase() === 'true' || String(tabValueRaw || '').trim() === '0';
    if (wantsPending) {
      var pendingIndex = this.tabs.findIndex(function (tab) {
        return Number(tab.value) === 0;
      });
      this.tabIndex = pendingIndex >= 0 ? pendingIndex : 0;
    } else if (tabIndexRaw != null && String(tabIndexRaw).trim() !== '') {
      var parsedIndex = Number(tabIndexRaw);
      this.tabIndex = Number.isFinite(parsedIndex) && parsedIndex >= 0 && parsedIndex < this.tabs.length ? parsedIndex : 0;
    } else if (tabValueRaw != null && String(tabValueRaw).trim() !== '') {
      var parsedValue = Number(tabValueRaw);
      var matchedIndex = this.tabs.findIndex(function (tab) {
        return Number(tab.value) === parsedValue;
      });
      this.tabIndex = matchedIndex >= 0 ? matchedIndex : 0;
    }
    this.resetAndLoad();
  },
  onShareAppMessage: function onShareAppMessage(res) {
    var from = res && res.from;
    var target = res && res.target;
    var item = target && target.dataset ? target.dataset.item : null;
    if (from === 'button' && item) {
      return this.buildSharePayload(item);
    }
    if (this.displayList.length > 0) {
      return this.buildSharePayload(this.displayList[0]);
    }
    return {
      title: '发货单详情',
      path: '/sub-pages/supply/supplier-order'
    };
  },
  methods: {
    parseScanResult: function parseScanResult(rawResult) {
      var raw = String(rawResult || '').trim();
      if (!raw) return {
        supplierOrderId: '',
        supplierOrderNo: ''
      };
      var decoded = raw;
      try {
        decoded = decodeURIComponent(raw);
      } catch (e) {
        decoded = raw;
      }
      var idFromText = function idFromText(text) {
        var m = String(text || '').match(/(?:^|[?&/#])supplierOrderId=([^&#]+)/i);
        if (m && m[1]) {
          try {
            return decodeURIComponent(m[1]).trim();
          } catch (e2) {
            return String(m[1]).trim();
          }
        }
        return '';
      };
      var noFromText = function noFromText(text) {
        var m = String(text || '').match(/(?:^|[?&/#])supplierOrderNo=([^&#]+)/i);
        if (m && m[1]) {
          try {
            return decodeURIComponent(m[1]).trim();
          } catch (e2) {
            return String(m[1]).trim();
          }
        }
        return '';
      };
      var supplierOrderId = idFromText(decoded);
      var supplierOrderNo = noFromText(decoded);
      if (!supplierOrderId) {
        try {
          var parsed = JSON.parse(decoded);
          if (parsed && (0, _typeof2.default)(parsed) === 'object') {
            var idVal = parsed.supplierOrderId || parsed.batchId || parsed.id;
            var noVal = parsed.supplierOrderNo || parsed.batchNo;
            supplierOrderId = idVal != null ? String(idVal).trim() : '';
            supplierOrderNo = noVal != null ? String(noVal).trim() : supplierOrderNo;
          }
        } catch (e3) {
          // 非 JSON，继续按普通文本处理
        }
      }
      if (!supplierOrderId && /^[A-Za-z0-9_-]{6,}$/.test(decoded) && /[A-Za-z]/.test(decoded)) {
        supplierOrderNo = supplierOrderNo || decoded;
      }
      if (!supplierOrderId && /^\d+$/.test(decoded)) {
        supplierOrderId = decoded;
      }
      return {
        supplierOrderId: String(supplierOrderId || '').trim(),
        supplierOrderNo: String(supplierOrderNo || '').trim()
      };
    },
    onScanOrder: function onScanOrder() {
      var _this = this;
      uni.scanCode({
        success: function success(res) {
          var parsed = _this.parseScanResult(res && res.result);
          if (!parsed.supplierOrderId) {
            uni.showToast({
              title: '未识别到发货单ID',
              icon: 'none'
            });
            return;
          }
          var q = ["supplierOrderId=".concat(encodeURIComponent(parsed.supplierOrderId))];
          if (parsed.supplierOrderNo) {
            q.push("supplierOrderNo=".concat(encodeURIComponent(parsed.supplierOrderNo)));
          }
          q.push('fromScan=1');
          uni.navigateTo({
            url: "/sub-pages/supply/supplier-order-detail?".concat(q.join('&'))
          });
        },
        fail: function fail(err) {
          if (err && err.errMsg && String(err.errMsg).includes('cancel')) return;
          uni.showToast({
            title: '扫码失败，请重试',
            icon: 'none'
          });
        }
      });
    },
    buildSharePayload: function buildSharePayload(item) {
      var _this2 = this;
      var row = item || {};
      var supplierOrderId = row.id != null ? String(row.id).trim() : '';
      var supplierOrderNo = row.supplierOrderNo != null ? String(row.supplierOrderNo) : '';
      if (!supplierOrderId) {
        return {
          title: '发货单详情',
          path: '/sub-pages/supply/supplier-order'
        };
      }
      var q = [];
      q.push("supplierOrderId=".concat(encodeURIComponent(supplierOrderId)));
      q.push("supplierOrderNo=".concat(encodeURIComponent(supplierOrderNo)));
      var sid = function () {
        var a = row.summaryId != null ? String(row.summaryId).trim() : '';
        if (a) return a;
        var b = row.dailySummaryId != null ? String(row.dailySummaryId).trim() : '';
        if (b) return b;
        return String(_this2.dailySummaryId || '').trim();
      }();
      var spid = row.supplierId != null && String(row.supplierId).trim() !== '' ? String(row.supplierId).trim() : String(this.supplierId || '').trim();
      var spname = row.supplierName != null && String(row.supplierName).trim() !== '' ? String(row.supplierName) : String(this.dailySupplierName || '');
      if (sid) q.push("summaryId=".concat(encodeURIComponent(sid)));
      if (spid) q.push("supplierId=".concat(encodeURIComponent(spid)));
      if (spname) q.push("supplierName=".concat(encodeURIComponent(spname)));
      var inStock = row.inStockStatus != null ? Number(row.inStockStatus) : NaN;
      if (Number.isFinite(inStock)) {
        q.push("batchListInStockStatus=".concat(encodeURIComponent(String(inStock))));
      }
      return {
        title: "\u53D1\u8D27\u5355\uFF1A".concat(supplierOrderNo || supplierOrderId),
        path: "/sub-pages/supply/supplier-order-detail?".concat(q.join('&'))
      };
    },
    onShowOrderQrcode: function onShowOrderQrcode(item) {
      var payload = this.buildSharePayload(item);
      var path = payload && payload.path ? String(payload.path) : '';
      if (!path) {
        uni.showToast({
          title: '发货单信息不完整',
          icon: 'none'
        });
        return;
      }
      this.currentQrcodeOrderNo = item && item.supplierOrderNo ? String(item.supplierOrderNo) : '';
      this.orderQrcodeImage = "https://api.qrserver.com/v1/create-qr-code/?size=520x520&data=".concat(encodeURIComponent(path));
      var popup = this.$refs.orderQrcodePopup;
      if (popup && typeof popup.open === 'function') popup.open();
    },
    onCloseOrderQrcode: function onCloseOrderQrcode() {
      var popup = this.$refs.orderQrcodePopup;
      if (popup && typeof popup.close === 'function') popup.close();
    },
    mapBatchStatus: function mapBatchStatus(row) {
      var r = row || {};
      /** 批次级 checkStatus（order/batch/list）与后台字典一致；明细行见送货单详情 lineCheckStatusText */
      var checkStatus = Number(r.checkStatus);
      if (checkStatus === 0) return 0;
      if (checkStatus === 1) return 1;
      if (checkStatus === 2) return 2;
      if (checkStatus === 3) return 4;
      var status = Number(r.status);
      if (status === 0) return 3;
      return 0;
    },
    normalizeBatchRow: function normalizeBatchRow(row) {
      var r = row || {};
      var amountRaw = r.totalAmount == null || r.totalAmount === '' ? '0.00' : r.totalAmount;
      return _objectSpread(_objectSpread({}, r), {}, {
        rawStatus: Number(r.status),
        supplierOrderNo: r.batchNo || r.supplierOrderNo || '',
        warehouseName: r.storageName || r.warehouseName || '',
        storeName: r.storeName || '',
        carNo: r.carNo || r.parkingNo || '',
        totalAmount: String(amountRaw),
        status: this.mapBatchStatus(r),
        coverSlots: this.buildCoverSlotsFromItemList(r.itemList)
      });
    },
    normalizeImageUrl: function normalizeImageUrl(rawUrl) {
      var u = String(rawUrl || '').trim();
      if (!u) return '';
      if (/^https?:\/\//i.test(u)) return u;
      if (/^\/\//.test(u)) return "https:".concat(u);
      return u;
    },
    /** 与送货单详情 supplier-order-detail：解析 image JSON / URL */extractImageUrls: function extractImageUrls(raw) {
      if (!raw) return [];
      if (typeof raw === 'string') {
        var s = raw.trim();
        if (!s) return [];
        if (/^https?:\/\//i.test(s) || /^\/\//.test(s) || /^data:image\//i.test(s)) {
          var one = this.normalizeImageUrl(s);
          return one ? [one] : [];
        }
        try {
          return this.extractImageUrls(JSON.parse(s));
        } catch (e) {
          return [];
        }
      }
      if (Array.isArray(raw)) {
        var out = [];
        for (var i = 0; i < raw.length; i++) {
          var entry = raw[i];
          var u = entry && (0, _typeof2.default)(entry) === 'object' && (entry.url || entry.imageUrl || entry.pic || entry.mainPic || entry.productImage || entry.cover) ? this.normalizeImageUrl(entry.url || entry.imageUrl || entry.pic || entry.mainPic || entry.productImage || entry.cover) : typeof entry === 'string' ? this.normalizeImageUrl(entry) : '';
          if (u) out.push(u);
        }
        return out;
      }
      if ((0, _typeof2.default)(raw) === 'object') {
        var direct = raw.url || raw.imageUrl || raw.pic || raw.mainPic || raw.productImage || raw.cover;
        var _one = this.normalizeImageUrl(direct);
        return _one ? [_one] : [];
      }
      return [];
    },
    lineDeliverQty: function lineDeliverQty(line) {
      var it = line || {};
      var v = it.deliverNum != null ? it.deliverNum : it.quantity != null ? it.quantity : it.actualQuantity;
      var n = Number(v);
      return Number.isFinite(n) ? n : 0;
    },
    buildCoverSlotsFromItemList: function buildCoverSlotsFromItemList(itemList) {
      var rows = Array.isArray(itemList) ? itemList : [];
      var slots = [];
      var maxSlots = 30;
      for (var i = 0; i < rows.length && slots.length < maxSlots; i++) {
        var line = rows[i] || {};
        var urls = this.extractImageUrls(line.image || line.productImage || line.pic || line.mainPic || line.sliderImage || line.cover);
        if (!urls.length) continue;
        slots.push({
          url: urls[0],
          qty: this.lineDeliverQty(line),
          previewUrls: urls
        });
      }
      return slots;
    },
    onPreviewSkuCover: function onPreviewSkuCover(slot) {
      var s = slot || {};
      var list = Array.isArray(s.previewUrls) && s.previewUrls.length ? s.previewUrls : [];
      var cur = s.url ? String(s.url) : '';
      if (!cur && !list.length) {
        uni.showToast({
          title: '暂无图片',
          icon: 'none'
        });
        return;
      }
      uni.previewImage({
        urls: list.length ? list : [cur],
        current: cur || list[0]
      });
    },
    filterByKeywordAndDate: function filterByKeywordAndDate(list) {
      var _this3 = this;
      var rows = Array.isArray(list) ? list : [];
      var kw = String(this.keyword || '').trim().toLowerCase();
      var r = Array.isArray(this.dateRange) ? this.dateRange : [];
      var ds = this.extractDatePart(r[0]);
      var de = this.extractDatePart(r[1]);
      return rows.filter(function (item) {
        var orderNo = String(item && item.supplierOrderNo || '').toLowerCase();
        if (kw && !orderNo.includes(kw)) return false;
        if (!ds || !de) return true;
        var updateDate = _this3.extractDatePart(item && (item.updateTime || item.createTime) || '');
        if (!updateDate) return false;
        return updateDate >= ds && updateDate <= de;
      });
    },
    statusText: function statusText(status) {
      var v = Number(status);
      if (v === 0) return '待质检';
      if (v === 1) return '已质检';
      if (v === 2) return '不通过';
      if (v === 3) return '已装车';
      if (v === 4) return '部分质检';
      if (v === 6) return '缺货';
      return '未知';
    },
    onDateRangeChange: function onDateRangeChange(val) {
      var raw = Array.isArray(val) ? val : val && Array.isArray(val.detail) ? val.detail : null;
      if (!raw || raw.length === 0) {
        this.dateRange = [];
      } else {
        var a = this.extractDatePart(raw[0]);
        var b = this.extractDatePart(raw[1]);
        this.dateRange = a && b ? [a, b] : [];
      }
      this.resetAndLoad();
    },
    extractDatePart: function extractDatePart(s) {
      if (s == null || s === '') return '';
      if (typeof s === 'number' && Number.isFinite(s)) {
        var d = new Date(s);
        if (Number.isNaN(d.getTime())) return '';
        var y = d.getFullYear();
        var m = String(d.getMonth() + 1).padStart(2, '0');
        var day = String(d.getDate()).padStart(2, '0');
        return "".concat(y, "-").concat(m, "-").concat(day);
      }
      var head = String(s).trim().split(/[\sT]/)[0];
      head = head.replace(/\//g, '-');
      var loose = head.match(/^(\d{4})-(\d{1,2})-(\d{1,2})$/);
      if (loose) {
        return "".concat(loose[1], "-").concat(String(loose[2]).padStart(2, '0'), "-").concat(String(loose[3]).padStart(2, '0'));
      }
      return /^\d{4}-\d{2}-\d{2}$/.test(head) ? head : '';
    },
    onSearchConfirm: function onSearchConfirm() {
      this.searchSupplierName = String(this.supplierNameInput || '').trim();
      this.searchProductName = String(this.productNameInput || '').trim();
      this.resetAndLoad();
    },
    /**
     * /order/dailySummary/list 入参：供应商名称走后端 EXISTS 子查询过滤（DeliveryDailySummaryServiceImpl.buildQueryWrapper）。
     */
    buildDailySummaryParams: function buildDailySummaryParams() {
      var params = {
        pageNum: 1,
        pageSize: 10
      };
      var supplierName = String(this.searchSupplierName || '').trim();
      if (supplierName) params.supplierName = supplierName;
      return params;
    },
    onTabClick: function onTabClick(e) {
      var i = Number(e && e.currentTarget && e.currentTarget.dataset ? e.currentTarget.dataset.tabIndex : 0);
      var nextIndex = Number.isFinite(i) ? i : 0;
      this.tabIndex = nextIndex >= 0 && nextIndex < this.tabs.length ? nextIndex : 0;
      this.resetAndLoad();
    },
    onScrollLower: function onScrollLower() {
      this.loadList();
    },
    resetAndLoad: function resetAndLoad() {
      var _this4 = this;
      this.listFetchGen += 1;
      var gen = this.listFetchGen;
      this.pageNum = 1;
      this.total = 0;
      this.finished = false;
      this.rawList = [];
      this.supplierId = '';
      this.dailySummaryId = '';
      this.dailySupplierName = '';
      this.pendingSkuCount = 0;
      this.listLoadForce = true;
      this.loading = true;
      // 供应商角色：保留原 dailySummary 流程看自己汇总与待送货件数
      if (this.isSupplier) {
        (0, _storeOrder.getDailySummaryList)(this, this.buildDailySummaryParams()).then(function (summaryRes) {
          if (gen !== _this4.listFetchGen) return;
          var summaryRows = Array.isArray(summaryRes && summaryRes.rows) ? summaryRes.rows : [];
          var summary = summaryRows[0];
          if (!summary || summary.supplierId == null || String(summary.supplierId).trim() === '') {
            _this4.finished = true;
            _this4.loading = false;
            uni.showToast({
              title: '暂无供应商汇总',
              icon: 'none'
            });
            return;
          }
          _this4.supplierId = String(summary.supplierId).trim();
          _this4.dailySummaryId = String(summary.id != null ? summary.id : '').trim();
          _this4.dailySupplierName = String(summary.supplierName || '').trim();
          _this4.loadPendingSkuCount(summary, gen);
          _this4.loadList();
        }).catch(function () {
          if (gen !== _this4.listFetchGen) return;
          _this4.loading = false;
        });
        return;
      }
      // 非供应商角色（采购员/admin/城市仓）：直接走 batch/list，由 supplierName + productName 过滤
      this.loadList();
    },
    loadList: function loadList() {
      var _this5 = this;
      if (this.finished) return;
      var force = this.listLoadForce;
      this.listLoadForce = false;
      if (this.loading && !force) return;
      var gen = this.listFetchGen;
      this.loading = true;
      var params = {
        pageNum: this.pageNum,
        pageSize: this.pageSize,
        bizType: this.bizType
      };
      if (this.supplierId) {
        params.supplierId = this.supplierId;
      }
      // 非供应商角色（采购员/admin/城市仓）支持按供应商名 + 品种搜索，直接传给 order/batch/list
      var supplierName = String(this.searchSupplierName || '').trim();
      var productName = String(this.searchProductName || '').trim();
      if (supplierName) params.supplierName = supplierName;
      if (productName) params.productName = productName;
      // 质检员选中"待质检"tab时，传 checkStatus=0 到后端过滤
      if (this.isQualityInspector) {
        var tab = this.tabs[this.tabIndex];
        if (tab && Number(tab.value) === 0) {
          params.checkStatus = 0;
        }
      }
      this.request('get', 'order/batch/list', this.token, params).then(function (res) {
        if (gen !== _this5.listFetchGen) return;
        var rowsRaw = Array.isArray(res && res.rows) ? res.rows : [];
        var rows = rowsRaw.map(function (row) {
          return _this5.normalizeBatchRow(row);
        });
        var total = Number(res && res.total) || 0;
        _this5.rawList = [].concat((0, _toConsumableArray2.default)(_this5.rawList), (0, _toConsumableArray2.default)(rows));
        _this5.total = total;
        _this5.finished = _this5.rawList.length >= total || rows.length < _this5.pageSize;
        if (rows.length > 0) _this5.pageNum += 1;
      }).catch(function () {}).finally(function () {
        _this5.loading = false;
      });
    },
    /** 与待送货列表一致口径：由 skuInfo 的 quantity 字段累计待送货件数 */loadPendingSkuCount: function loadPendingSkuCount(summary, gen) {
      var _this6 = this;
      var summaryId = String(summary && summary.id != null ? summary.id : '').trim();
      var supplierId = String(summary && summary.supplierId != null ? summary.supplierId : '').trim();
      if (!summaryId || !supplierId) {
        this.pendingSkuCount = 0;
        return;
      }
      var params = {
        supplierId: supplierId,
        deliveryDate: summary.deliveryDate,
        id: summary.id,
        summaryStatus: summary.summaryStatus
      };
      (0, _storeOrder.getDailySummarySkuInfo)(this, params).then(function (skuRes) {
        if (gen !== _this6.listFetchGen) return;
        var rows = Array.isArray(skuRes && skuRes.data) ? skuRes.data : [];
        var total = rows.reduce(function (sum, row) {
          return sum + (Number(row && row.quantity) || 0);
        }, 0);
        _this6.pendingSkuCount = total;
      }).catch(function () {
        if (gen !== _this6.listFetchGen) return;
        _this6.pendingSkuCount = 0;
      });
    },
    onSend: function onSend(item) {
      this.onOpenDetail(item);
    },
    onOpenDetail: function onOpenDetail(item) {
      var _this7 = this;
      // if (Number(item && item.status) !== 0) {
      //   uni.showToast({ title: '仅待发货可查看详情', icon: 'none' })
      //   return
      // }
      var supplierOrderId = item && item.id ? String(item.id) : '';
      if (!supplierOrderId) return;
      var supplierOrderNo = encodeURIComponent(item && item.supplierOrderNo ? item.supplierOrderNo : '');
      var q = [];
      var sid = function () {
        var a = item && item.summaryId != null ? String(item.summaryId).trim() : '';
        if (a) return a;
        var b = item && item.dailySummaryId != null ? String(item.dailySummaryId).trim() : '';
        if (b) return b;
        return String(_this7.dailySummaryId || '').trim();
      }();
      var spid = item && item.supplierId != null && String(item.supplierId).trim() !== '' ? String(item.supplierId).trim() : String(this.supplierId || '').trim();
      var spname = item && item.supplierName != null && String(item.supplierName).trim() !== '' ? String(item.supplierName) : this.dailySupplierName;
      if (sid) q.push("summaryId=".concat(encodeURIComponent(sid)));
      if (spid) q.push("supplierId=".concat(encodeURIComponent(spid)));
      if (spname) q.push("supplierName=".concat(encodeURIComponent(spname)));
      var oids = item && item.orderIds;
      if (Array.isArray(oids) && oids.length) {
        q.push("orderIds=".concat(encodeURIComponent(JSON.stringify(oids.map(function (x) {
          return String(x);
        })))));
      }
      var inStock = item.inStockStatus != null ? Number(item.inStockStatus) : NaN;
      if (Number.isFinite(inStock)) {
        q.push("batchListInStockStatus=".concat(encodeURIComponent(String(inStock))));
      }
      if (this.isQualityInspector && Number(item.status) === 0) {
        q.push('fromScan=1');
      }
      var extra = q.length ? "&".concat(q.join('&')) : '';
      uni.navigateTo({
        url: "/sub-pages/supply/supplier-order-detail?supplierOrderId=".concat(supplierOrderId, "&supplierOrderNo=").concat(supplierOrderNo).concat(extra),
        success: function success(res) {
          var ch = res && res.eventChannel;
          if (ch && typeof ch.on === 'function') {
            ch.on('supplierOrderListRefresh', function () {
              _this7.resetAndLoad();
            });
          }
        }
      });
    },
    onGoPending: function onGoPending() {
      uni.navigateTo({
        url: '/sub-pages/supply/delivery-list'
      });
    }
  }
};
exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 2)["default"]))

/***/ }),

/***/ 314:
/*!***************************************************************************************************************************************!*\
  !*** E:/project/yhlc-v1.0/agent-uniapp/sub-pages/supply/supplier-order.vue?vue&type=style&index=0&id=3fbf5b77&lang=scss&scoped=true& ***!
  \***************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_supplier_order_vue_vue_type_style_index_0_id_3fbf5b77_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/mini-css-extract-plugin/dist/loader.js??ref--8-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--8-oneOf-1-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-2!./node_modules/postcss-loader/src??ref--8-oneOf-1-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/sass-loader/dist/cjs.js??ref--8-oneOf-1-4!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-5!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./supplier-order.vue?vue&type=style&index=0&id=3fbf5b77&lang=scss&scoped=true& */ 315);
/* harmony import */ var _D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_supplier_order_vue_vue_type_style_index_0_id_3fbf5b77_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_supplier_order_vue_vue_type_style_index_0_id_3fbf5b77_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_supplier_order_vue_vue_type_style_index_0_id_3fbf5b77_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_supplier_order_vue_vue_type_style_index_0_id_3fbf5b77_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_supplier_order_vue_vue_type_style_index_0_id_3fbf5b77_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 315:
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js??ref--8-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--8-oneOf-1-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-2!./node_modules/postcss-loader/src??ref--8-oneOf-1-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/sass-loader/dist/cjs.js??ref--8-oneOf-1-4!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-5!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!E:/project/yhlc-v1.0/agent-uniapp/sub-pages/supply/supplier-order.vue?vue&type=style&index=0&id=3fbf5b77&lang=scss&scoped=true& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
    if(false) { var cssReload; }
  

/***/ })

},[[308,"common/runtime","common/vendor"]]]);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/sub-pages/supply/supplier-order.js.map
},{isPage:true,isComponent:true,currentFile:'sub-pages/supply/supplier-order.js'});require("sub-pages/supply/supplier-order.js");$gwx3_XC_10=function(_,_v,_n,_p,_s,_wp,_wl,$gwn,$gwl,$gwh,wh,$gstack,$gwrt,gra,grb,TestTest,wfor,_ca,_da,_r,_rz,_o,_oz,_1,_1z,_2,_2z,_m,_mz,nv_getDate,nv_getRegExp,nv_console,nv_parseInt,nv_parseFloat,nv_isNaN,nv_isFinite,nv_decodeURI,nv_decodeURIComponent,nv_encodeURI,nv_encodeURIComponent,$gdc,nv_JSON,_af,_gv,_ai,_grp,_gd,_gapi,$ixc,_ic,_w,_ev,_tsd){return function(path,global){
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
var z=__WXML_GLOBAL__.ops_set.$gwx3_XC_10 || [];
function gz$gwx3_XC_10_1(){
if( __WXML_GLOBAL__.ops_cached.$gwx3_XC_10_1)return __WXML_GLOBAL__.ops_cached.$gwx3_XC_10_1
__WXML_GLOBAL__.ops_cached.$gwx3_XC_10_1=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'detail-page data-v-f763d6d2'])
Z([3,'__e'])
Z([3,'list-scroll data-v-f763d6d2'])
Z([[4],[[5],[[4],[[5],[[5],[1,'scrolltolower']],[[4],[[5],[[4],[[5],[[5],[1,'onScrollLower']],[[4],[[5],[1,'$event']]]]]]]]]]])
Z([1,true])
Z([1,false])
Z([[6],[[7],[3,'$root']],[3,'g0']])
Z([3,'__l'])
Z([3,'data-v-f763d6d2'])
Z([3,'clipboard'])
Z([3,'暂无明细'])
Z([3,'0574ff4f-1'])
Z([3,'__i0__'])
Z([3,'item'])
Z([[6],[[7],[3,'$root']],[3,'l0']])
Z([3,'id'])
Z(z[1])
Z([[4],[[5],[[5],[[5],[[5],[1,'goods-card']],[1,'data-v-f763d6d2']],[[2,'?:'],[[7],[3,'isScanMode']],[1,'goods-card--scan'],[1,'']]],[[2,'?:'],[[6],[[7],[3,'item']],[3,'m0']],[1,'goods-card--selected'],[1,'']]]])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[[5],[[5],[1,'onToggleItem']],[[4],[[5],[1,'$0']]]],[[4],[[5],[[4],[[5],[[4],[[5],[[5],[[5],[1,'itemList']],[1,'id']],[[6],[[6],[[7],[3,'item']],[3,'$orig']],[3,'id']]]]]]]]]]]]]]]])
Z([[7],[3,'isScanMode']])
Z([[6],[[7],[3,'item']],[3,'m2']])
Z([[2,'!'],[[7],[3,'isCheckedBatch']]])
Z([[7],[3,'isCheckedBatch']])
Z([3,'goods-main data-v-f763d6d2'])
Z([[6],[[7],[3,'item']],[3,'m7']])
Z([[6],[[7],[3,'item']],[3,'m9']])
Z([3,'goods-tag-row data-v-f763d6d2'])
Z([[6],[[7],[3,'item']],[3,'m10']])
Z([[6],[[7],[3,'item']],[3,'m12']])
Z([[6],[[7],[3,'item']],[3,'m20']])
Z(z[22])
Z(z[21])
Z([[7],[3,'loading']])
Z([[6],[[7],[3,'$root']],[3,'g2']])
Z([[4],[[5],[[5],[[5],[1,'bottom-bar']],[1,'data-v-f763d6d2']],[[2,'?:'],[[2,'&&'],[[7],[3,'isCheckedBatch']],[[7],[3,'isBatchInStockFromList']]],[1,'bottom-bar--single'],[1,'']]]])
Z(z[19])
Z(z[22])
Z([[2,'!'],[[7],[3,'isBatchInStockFromList']]])
Z(z[7])
Z([3,'data-v-f763d6d2 vue-ref'])
Z([3,'orderQrcodePopup'])
Z([3,'center'])
Z([3,'0574ff4f-2'])
Z([[4],[[5],[1,'default']]])
})(__WXML_GLOBAL__.ops_cached.$gwx3_XC_10_1);return __WXML_GLOBAL__.ops_cached.$gwx3_XC_10_1
}
__WXML_GLOBAL__.ops_set.$gwx3_XC_10=z;
__WXML_GLOBAL__.ops_init.$gwx3_XC_10=true;
var x=['./sub-pages/supply/supplier-order-detail.wxml'];d_[x[0]]={}
var m0=function(e,s,r,gg){
var z=gz$gwx3_XC_10_1()
var hOG=_n('view')
_rz(z,hOG,'class',0,e,s,gg)
var oPG=_mz(z,'scroll-view',['bindscrolltolower',1,'class',1,'data-event-opts',2,'scrollY',3,'showScrollbar',4],[],e,s,gg)
var cQG=_v()
_(oPG,cQG)
if(_oz(z,6,e,s,gg)){cQG.wxVkey=1
var lSG=_mz(z,'empty-state',['bind:__l',7,'class',1,'iconType',2,'text',3,'vueId',4],[],e,s,gg)
_(cQG,lSG)
}
else{cQG.wxVkey=2
var aTG=_v()
_(cQG,aTG)
var tUG=function(bWG,eVG,oXG,gg){
var oZG=_mz(z,'view',['bindtap',16,'class',1,'data-event-opts',2],[],bWG,eVG,gg)
var f1G=_v()
_(oZG,f1G)
if(_oz(z,19,bWG,eVG,gg)){f1G.wxVkey=1
var o4G=_v()
_(f1G,o4G)
if(_oz(z,20,bWG,eVG,gg)){o4G.wxVkey=1
}
o4G.wxXCkey=1
}
var c2G=_v()
_(oZG,c2G)
if(_oz(z,21,bWG,eVG,gg)){c2G.wxVkey=1
}
var h3G=_v()
_(oZG,h3G)
if(_oz(z,22,bWG,eVG,gg)){h3G.wxVkey=1
}
var c5G=_n('view')
_rz(z,c5G,'class',23,bWG,eVG,gg)
var o6G=_v()
_(c5G,o6G)
if(_oz(z,24,bWG,eVG,gg)){o6G.wxVkey=1
}
var l7G=_v()
_(c5G,l7G)
if(_oz(z,25,bWG,eVG,gg)){l7G.wxVkey=1
var bAH=_n('view')
_rz(z,bAH,'class',26,bWG,eVG,gg)
var oBH=_v()
_(bAH,oBH)
if(_oz(z,27,bWG,eVG,gg)){oBH.wxVkey=1
}
var xCH=_v()
_(bAH,xCH)
if(_oz(z,28,bWG,eVG,gg)){xCH.wxVkey=1
}
oBH.wxXCkey=1
xCH.wxXCkey=1
_(l7G,bAH)
}
var a8G=_v()
_(c5G,a8G)
if(_oz(z,29,bWG,eVG,gg)){a8G.wxVkey=1
}
var t9G=_v()
_(c5G,t9G)
if(_oz(z,30,bWG,eVG,gg)){t9G.wxVkey=1
}
var e0G=_v()
_(c5G,e0G)
if(_oz(z,31,bWG,eVG,gg)){e0G.wxVkey=1
}
o6G.wxXCkey=1
l7G.wxXCkey=1
a8G.wxXCkey=1
t9G.wxXCkey=1
e0G.wxXCkey=1
_(oZG,c5G)
f1G.wxXCkey=1
c2G.wxXCkey=1
h3G.wxXCkey=1
_(oXG,oZG)
return oXG
}
aTG.wxXCkey=2
_2z(z,14,tUG,e,s,gg,aTG,'item','__i0__','id')
}
var oRG=_v()
_(oPG,oRG)
if(_oz(z,32,e,s,gg)){oRG.wxVkey=1
}
else{oRG.wxVkey=2
var oDH=_v()
_(oRG,oDH)
if(_oz(z,33,e,s,gg)){oDH.wxVkey=1
}
oDH.wxXCkey=1
}
cQG.wxXCkey=1
cQG.wxXCkey=3
oRG.wxXCkey=1
_(hOG,oPG)
var fEH=_n('view')
_rz(z,fEH,'class',34,e,s,gg)
var cFH=_v()
_(fEH,cFH)
if(_oz(z,35,e,s,gg)){cFH.wxVkey=1
}
else{cFH.wxVkey=2
var hGH=_v()
_(cFH,hGH)
if(_oz(z,36,e,s,gg)){hGH.wxVkey=1
var oHH=_v()
_(hGH,oHH)
if(_oz(z,37,e,s,gg)){oHH.wxVkey=1
}
oHH.wxXCkey=1
}
else{hGH.wxVkey=2
}
hGH.wxXCkey=1
}
cFH.wxXCkey=1
_(hOG,fEH)
var cIH=_mz(z,'uni-popup',['bind:__l',38,'class',1,'data-ref',2,'type',3,'vueId',4,'vueSlots',5],[],e,s,gg)
_(hOG,cIH)
_(r,hOG)
return r
}
e_[x[0]]={f:m0,j:[],i:[],ti:[],ic:[]}
if(path&&e_[path]){
return function(env,dd,global){$gwxc=0;var root={"tag":"wx-page"};root.children=[]
;g="$gwx3_XC_10";var main=e_[path].f
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
}(__g.a,__g.b,__g.c,__g.d,__g.e,__g.f,__g.g,__g.h,__g.i,__g.j,__g.k,__g.l,__g.m,__g.n,__g.o,__g.p,__g.q,__g.r,__g.s,__g.t,__g.u,__g.v,__g.w,__g.x,__g.y,__g.z,__g.A,__g.B,__g.C,__g.D,__g.E,__g.F,__g.G,__g.H,__g.I,__g.J,__g.K,__g.L,__g.M,__g.N,__g.O,__g.P,__g.Q,__g.R,__g.S,__g.T,__g.U,__g.V,__g.W,__g.X,__g.Y,__g.Z,__g.aa);if(__vd_version_info__.delayedGwx||false)$gwx3_XC_10();	if (__vd_version_info__.delayedGwx) __wxAppCode__['sub-pages/supply/supplier-order-detail.wxml'] = [$gwx3_XC_10, './sub-pages/supply/supplier-order-detail.wxml'];else __wxAppCode__['sub-pages/supply/supplier-order-detail.wxml'] = $gwx3_XC_10( './sub-pages/supply/supplier-order-detail.wxml' );
	;__wxRoute = "sub-pages/supply/supplier-order-detail";__wxRouteBegin = true;__wxAppCurrentFile__="sub-pages/supply/supplier-order-detail.js";define("sub-pages/supply/supplier-order-detail.js",function(require,module,exports,window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){
require('./common/vendor.js');(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["sub-pages/supply/supplier-order-detail"],{

/***/ 316:
/*!*******************************************************************************************************!*\
  !*** E:/project/yhlc-v1.0/agent-uniapp/main.js?{"page":"sub-pages%2Fsupply%2Fsupplier-order-detail"} ***!
  \*******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(wx, createPage) {

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ 4);
__webpack_require__(/*! uni-pages */ 30);
var _vue = _interopRequireDefault(__webpack_require__(/*! vue */ 25));
var _supplierOrderDetail = _interopRequireDefault(__webpack_require__(/*! ./sub-pages/supply/supplier-order-detail.vue */ 317));
// @ts-ignore
wx.__webpack_require_UNI_MP_PLUGIN__ = __webpack_require__;
createPage(_supplierOrderDetail.default);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/wx.js */ 1)["default"], __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 2)["createPage"]))

/***/ }),

/***/ 317:
/*!************************************************************************************!*\
  !*** E:/project/yhlc-v1.0/agent-uniapp/sub-pages/supply/supplier-order-detail.vue ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _supplier_order_detail_vue_vue_type_template_id_f763d6d2_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./supplier-order-detail.vue?vue&type=template&id=f763d6d2&scoped=true& */ 318);
/* harmony import */ var _supplier_order_detail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./supplier-order-detail.vue?vue&type=script&lang=js& */ 320);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _supplier_order_detail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _supplier_order_detail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _supplier_order_detail_vue_vue_type_style_index_0_id_f763d6d2_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./supplier-order-detail.vue?vue&type=style&index=0&id=f763d6d2&lang=scss&scoped=true& */ 324);
/* harmony import */ var _D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 39);

var renderjs





/* normalize component */

var component = Object(_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _supplier_order_detail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _supplier_order_detail_vue_vue_type_template_id_f763d6d2_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _supplier_order_detail_vue_vue_type_template_id_f763d6d2_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "f763d6d2",
  null,
  false,
  _supplier_order_detail_vue_vue_type_template_id_f763d6d2_scoped_true___WEBPACK_IMPORTED_MODULE_0__["components"],
  renderjs
)

component.options.__file = "sub-pages/supply/supplier-order-detail.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 318:
/*!*******************************************************************************************************************************!*\
  !*** E:/project/yhlc-v1.0/agent-uniapp/sub-pages/supply/supplier-order-detail.vue?vue&type=template&id=f763d6d2&scoped=true& ***!
  \*******************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_supplier_order_detail_vue_vue_type_template_id_f763d6d2_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--17-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./supplier-order-detail.vue?vue&type=template&id=f763d6d2&scoped=true& */ 319);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_supplier_order_detail_vue_vue_type_template_id_f763d6d2_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_supplier_order_detail_vue_vue_type_template_id_f763d6d2_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_supplier_order_detail_vue_vue_type_template_id_f763d6d2_scoped_true___WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_supplier_order_detail_vue_vue_type_template_id_f763d6d2_scoped_true___WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),

/***/ 319:
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--17-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!E:/project/yhlc-v1.0/agent-uniapp/sub-pages/supply/supplier-order-detail.vue?vue&type=template&id=f763d6d2&scoped=true& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return recyclableRender; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "components", function() { return components; });
var components
try {
  components = {
    uniPopup: function () {
      return __webpack_require__.e(/*! import() | components/uni-popup/uni-popup */ "components/uni-popup/uni-popup").then(__webpack_require__.bind(null, /*! @/components/uni-popup/uni-popup.vue */ 506))
    },
  }
} catch (e) {
  if (
    e.message.indexOf("Cannot find module") !== -1 &&
    e.message.indexOf(".vue") !== -1
  ) {
    console.error(e.message)
    console.error("1. 排查组件名称拼写是否正确")
    console.error(
      "2. 排查组件是否符合 easycom 规范，文档：https://uniapp.dcloud.net.cn/collocation/pages?id=easycom"
    )
    console.error(
      "3. 若组件不符合 easycom 规范，需手动引入，并在 components 中注册该组件"
    )
  } else {
    throw e
  }
}
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  var g0 = _vm.itemList.length === 0 && !_vm.loading
  var l0 = !g0
    ? _vm.__map(_vm.itemList, function (item, __i0__) {
        var $orig = _vm.__get_orig(item)
        var m0 = _vm.isScanMode && _vm.isItemSelected(item)
        var m1 = _vm.isScanMode ? _vm.isItemSelected(item) : null
        var m2 = _vm.isScanMode ? _vm.isItemSelected(item) : null
        var g1 = !_vm.isCheckedBatch
          ? [item.productBrand, item.productName].filter(Boolean).join(" ") ||
            "-"
          : null
        var m3 = !_vm.isCheckedBatch ? _vm.getNeedCount(item) : null
        var m4 = _vm.isCheckedBatch ? _vm.getNeedCount(item) : null
        var m5 = _vm.getItemImage(item)
        var m6 = m5 ? _vm.getItemImage(item) : null
        var m7 = _vm.formatSpec(item)
        var m8 = m7 ? _vm.formatSpec(item) : null
        var m9 = _vm.getLevelBadgeText(item) || _vm.getItemBizSourceTag(item)
        var m10 = m9 ? _vm.getLevelBadgeText(item) : null
        var m11 = m9 && m10 ? _vm.getLevelBadgeText(item) : null
        var m12 = m9 ? _vm.getItemBizSourceTag(item) : null
        var m13 = m9 && m12 ? _vm.getItemBizSourceTag(item) : null
        var m14 = _vm.formatCategory(item)
        var m15 = _vm.getGross(item)
        var m16 = _vm.getNet(item)
        var m17 = _vm.lineDeliveryStatusText(item)
        var m18 = _vm.lineCheckStatusTone(item)
        var m19 = _vm.lineCheckStatusText(item)
        var m20 = _vm.formatUnqualifiedReason(item)
        var m21 = m20 ? _vm.formatUnqualifiedReason(item) : null
        var m22 = _vm.isCheckedBatch ? _vm.getNeedCount(item) : null
        var m23 = _vm.isCheckedBatch ? _vm.getLoadedCount(item) : null
        var m24 = _vm.isCheckedBatch ? _vm.getLatestLoadTime(item) : null
        var m25 = !_vm.isCheckedBatch ? _vm.getNeedCount(item) : null
        return {
          $orig: $orig,
          m0: m0,
          m1: m1,
          m2: m2,
          g1: g1,
          m3: m3,
          m4: m4,
          m5: m5,
          m6: m6,
          m7: m7,
          m8: m8,
          m9: m9,
          m10: m10,
          m11: m11,
          m12: m12,
          m13: m13,
          m14: m14,
          m15: m15,
          m16: m16,
          m17: m17,
          m18: m18,
          m19: m19,
          m20: m20,
          m21: m21,
          m22: m22,
          m23: m23,
          m24: m24,
          m25: m25,
        }
      })
    : null
  var g2 = !_vm.loading ? _vm.finished && _vm.itemList.length : null
  var g3 = _vm.isScanMode
    ? _vm.batchCheckSubmitting ||
      _vm.itemList.length === 0 ||
      _vm.selectedIds.length === 0
    : null
  var g4 = _vm.isScanMode
    ? _vm.batchCheckSubmitting ||
      _vm.itemList.length === 0 ||
      _vm.selectedIds.length === 0
    : null
  var g5 =
    !_vm.isScanMode && _vm.isCheckedBatch && !_vm.isBatchInStockFromList
      ? _vm.quickZcSubmitting || _vm.itemList.length === 0
      : null
  var g6 =
    !_vm.isScanMode && !_vm.isCheckedBatch
      ? _vm.batchSubmitting || _vm.itemList.length === 0
      : null
  _vm.$mp.data = Object.assign(
    {},
    {
      $root: {
        g0: g0,
        l0: l0,
        g2: g2,
        g3: g3,
        g4: g4,
        g5: g5,
        g6: g6,
      },
    }
  )
}
var recyclableRender = false
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ 320:
/*!*************************************************************************************************************!*\
  !*** E:/project/yhlc-v1.0/agent-uniapp/sub-pages/supply/supplier-order-detail.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_supplier_order_detail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--13-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./supplier-order-detail.vue?vue&type=script&lang=js& */ 321);
/* harmony import */ var _D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_supplier_order_detail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_supplier_order_detail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_supplier_order_detail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_supplier_order_detail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_supplier_order_detail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 321:
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--13-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!E:/project/yhlc-v1.0/agent-uniapp/sub-pages/supply/supplier-order-detail.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
var _toConsumableArray2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/toConsumableArray */ 18));
var _defineProperty2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/defineProperty */ 11));
var _vuex = __webpack_require__(/*! vuex */ 34);
var _storeOrder = __webpack_require__(/*! @/api/storeOrder.js */ 141);
var _userRoleKeys = __webpack_require__(/*! @/utils/userRoleKeys */ 142);
var _dict = __webpack_require__(/*! @/api/dict.js */ 271);
var _PrinterHelperCpcl = _interopRequireDefault(__webpack_require__(/*! @/utils/printer/PrinterHelperCpcl.js */ 151));
var _batchPrinter = _interopRequireDefault(__webpack_require__(/*! @/utils/printer/batchPrinter.js */ 322));
var _buildSupplierCpclLabel = __webpack_require__(/*! @/utils/printer/buildSupplierCpclLabel.js */ 323);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0, _defineProperty2.default)(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
var EmptyState = function EmptyState() {
  __webpack_require__.e(/*! require.ensure | components/empty-state */ "components/empty-state").then((function () {
    return resolve(__webpack_require__(/*! @/components/empty-state.vue */ 542));
  }).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
};
var _default = {
  components: {
    EmptyState: EmptyState
  },
  data: function data() {
    return {
      supplierOrderId: '',
      supplierOrderNo: '',
      summaryId: '',
      supplierId: '',
      supplierName: '',
      prefetchedOrderIds: [],
      rawItemList: [],
      itemList: [],
      pageNum: 1,
      pageSize: 999,
      total: 0,
      loading: false,
      finished: false,
      printingTag: false,
      batchSubmitting: false,
      quickZcSubmitting: false,
      batchCheckSubmitting: false,
      /** 兼容旧链接：order/batch/list 原始 status===0 曾表示已入库 */
      batchListRawStatus: '',
      /** order/batch/list 的 inStockStatus：1 已入库，0 未入库（列表传入） */
      batchListInStockStatus: '',
      isScanMode: false,
      selectedIds: [],
      orderQrcodeImage: '',
      currentQrcodeOrderNo: '',
      /** 品级字典 product_level_list，用于 level 数值 → 文案 */
      productLevelDict: []
    };
  },
  computed: _objectSpread(_objectSpread({}, (0, _vuex.mapState)(['token', 'userInfo'])), {}, {
    headerStatusText: function headerStatusText() {
      var rows = Array.isArray(this.rawItemList) && this.rawItemList.length ? this.rawItemList : this.itemList;
      var code = this.batchHeaderDisplayStatus(rows);
      return this.batchStatusText(code);
    },
    headerOperateUser: function headerOperateUser() {
      var rows = Array.isArray(this.rawItemList) && this.rawItemList.length ? this.rawItemList : this.itemList;
      for (var i = 0; i < rows.length; i++) {
        var name = rows[i] && rows[i].operateUser != null ? String(rows[i].operateUser).trim() : '';
        if (name) return name;
      }
      return '-';
    },
    headerCheckTime: function headerCheckTime() {
      var rows = Array.isArray(this.rawItemList) && this.rawItemList.length ? this.rawItemList : this.itemList;
      var first = rows[0] || {};
      return first.checkTime || first.createTime || '-';
    },
    isCheckedBatch: function isCheckedBatch() {
      var first = this.itemList[0] || {};
      return this.resolveDeliveryStatus(first) === 1;
    },
    isPurchaseRole: function isPurchaseRole() {
      return (0, _userRoleKeys.hasProcurementRole)(this.userInfo);
    },
    /** 列表传入 inStockStatus===1 时视为已入库；旧链接仍认 batchListRawStatus===0 */isBatchInStockFromList: function isBatchInStockFromList() {
      var ins = String(this.batchListInStockStatus || '').trim();
      if (Number(ins) === 1) return true;
      var rows = Array.isArray(this.rawItemList) && this.rawItemList.length ? this.rawItemList : this.itemList;
      if (Array.isArray(rows) && rows.some(function (row) {
        return Number((row || {}).inStockStatus) === 1;
      })) {
        return true;
      }
      if (ins !== '') return false;
      var legacy = String(this.batchListRawStatus || '').trim();
      if (!legacy) return false;
      return Number(legacy) === 0;
    }
  }),
  onLoad: function onLoad(query) {
    var q = query || {};
    this.supplierOrderId = String(q.supplierOrderId || '');
    this.supplierOrderNo = decodeURIComponent(String(q.supplierOrderNo || ''));
    this.isScanMode = String(q.fromScan || '').trim() === '1';
    this.summaryId = String(q.summaryId || '').trim();
    this.supplierId = String(q.supplierId || '').trim();
    try {
      this.supplierName = q.supplierName ? decodeURIComponent(String(q.supplierName)) : '';
    } catch (e) {
      this.supplierName = String(q.supplierName || '');
    }
    this.batchListRawStatus = String(q.batchListRawStatus != null ? q.batchListRawStatus : '').trim();
    this.batchListInStockStatus = String(q.batchListInStockStatus != null ? q.batchListInStockStatus : '').trim();
    this.loadProductLevelDict();
    this.prefetchedOrderIds = [];
    if (q.orderIds) {
      try {
        var parsed = JSON.parse(decodeURIComponent(String(q.orderIds)));
        this.prefetchedOrderIds = Array.isArray(parsed) ? parsed.map(function (x) {
          return String(x);
        }) : [];
      } catch (e2) {
        this.prefetchedOrderIds = [];
      }
    }
    this.resetAndLoad();
  },
  methods: {
    resolveDeliveryStatus: function resolveDeliveryStatus(row) {
      var r = row || {};
      var status = Number(r.status);
      if (status === 0 || status === 1) return status;
      var inStockStatus = Number(r.inStockStatus);
      if (inStockStatus === 1) return 3;
      var checkStatus = Number(r.checkStatus);
      if (checkStatus === 1) return 1;
      if (status === 3) return 3;
      return 0;
    },
    /** 与 supplier-order、后台批次字典一致：批次级 checkStatus，3=部分质检 */mapBatchStatus: function mapBatchStatus(row) {
      var r = row || {};
      var checkStatus = Number(r.checkStatus);
      if (checkStatus === 0) return 0;
      if (checkStatus === 1) return 1;
      if (checkStatus === 2) return 2;
      if (checkStatus === 3) return 4;
      var status = Number(r.status);
      if (status === 0) return 3;
      return 0;
    },
    /** 按明细行 checkStatus 聚合为批次头展示码（与发货单列表「部分质检」等一致） */batchHeaderDisplayStatus: function batchHeaderDisplayStatus(rows) {
      var list = Array.isArray(rows) ? rows.filter(Boolean) : [];
      if (!list.length) return null;
      var checks = list.map(function (row) {
        return Number((row || {}).checkStatus);
      });
      var finite = checks.filter(function (n) {
        return Number.isFinite(n);
      });
      if (!finite.length) {
        return this.mapBatchStatus(list[0]);
      }
      var has0 = finite.some(function (c) {
        return c === 0;
      });
      var has1 = finite.some(function (c) {
        return c === 1;
      });
      var has2 = finite.some(function (c) {
        return c === 2;
      });
      var has3 = finite.some(function (c) {
        return c === 3;
      });
      if (has3) return 4;
      if (has1 && has2 || has0 && has1 || has0 && has2) return 4;
      if (has2 && !has1 && !has0) return 2;
      if (has1 && !has0 && !has2) return 1;
      if (has0 && !has1 && !has2) return 0;
      return this.mapBatchStatus(list[0]);
    },
    batchStatusText: function batchStatusText(code) {
      if (code == null || code === '') return '-';
      var v = Number(code);
      if (v === 0) return '待质检';
      if (v === 1) return '已质检';
      if (v === 2) return '不通过';
      if (v === 3) return '已装车';
      if (v === 4) return '部分质检';
      return '未知';
    },
    mergeDeliveryStatus: function mergeDeliveryStatus(left, right) {
      var a = Number(left);
      var b = Number(right);
      if (!Number.isFinite(a)) return b;
      if (!Number.isFinite(b)) return a;
      if (a === b) return a;
      return 2;
    },
    mergeCheckStatus: function mergeCheckStatus(left, right) {
      var a = Number(left);
      var b = Number(right);
      if (!Number.isFinite(a)) return b;
      if (!Number.isFinite(b)) return a;
      if (a === b) return a;
      return 3;
    },
    /** 与后台 batchRef 明细「状态」列（deliveryStatus）一致 */lineDeliveryStatusText: function lineDeliveryStatusText(row) {
      var r = row || {};
      var biz = String(r.bizType || r.batchBizType || '').toUpperCase();
      var current = Number(r.deliveryStatus);
      if (biz === 'ALLOCATE') {
        if (current === 1) return '已入库';
        if (current === 2) return '部分入库';
        return '未入库';
      }
      if (current === 1) return '已发货';
      if (current === 2) return '部分发货';
      return '待发货';
    },
    /** 与后台 batchRef 明细「质检状态」列（checkStatus）一致 */lineCheckStatusText: function lineCheckStatusText(row) {
      var c = Number((row || {}).checkStatus);
      if (c === 0) return '未质检';
      if (c === 1) return '通过';
      if (c === 2) return '不通过';
      if (c === 3) return '部分不通过';
      return '-';
    },
    lineCheckStatusTone: function lineCheckStatusTone(row) {
      var c = Number((row || {}).checkStatus);
      if (c === 1) return 'pass';
      if (c === 2 || c === 3) return 'fail';
      if (c === 0) return 'pending';
      return 'muted';
    },
    formatUnqualifiedReason: function formatUnqualifiedReason(row) {
      var s = row && row.unqualifiedReason != null ? String(row.unqualifiedReason).trim() : '';
      return s || '';
    },
    resetAndLoad: function resetAndLoad() {
      this.pageNum = 1;
      this.total = 0;
      this.finished = false;
      this.rawItemList = [];
      this.itemList = [];
      this.selectedIds = [];
      this.loadList();
    },
    onScrollLower: function onScrollLower() {
      this.loadList();
    },
    isItemSelected: function isItemSelected(item) {
      var _this = this;
      var ids = this.getItemIds(item);
      if (!ids.length) return false;
      return ids.every(function (id) {
        return _this.selectedIds.includes(id);
      });
    },
    onToggleItem: function onToggleItem(item) {
      var _this2 = this;
      if (!this.isScanMode) return;
      var ids = this.getItemIds(item);
      if (!ids.length) return;
      var allSelected = ids.every(function (id) {
        return _this2.selectedIds.includes(id);
      });
      if (allSelected) {
        var removeSet = new Set(ids);
        this.selectedIds = this.selectedIds.filter(function (x) {
          return !removeSet.has(x);
        });
        return;
      }
      var set = new Set((this.selectedIds || []).map(function (x) {
        return String(x);
      }));
      for (var i = 0; i < ids.length; i++) {
        set.add(ids[i]);
      }
      this.selectedIds = (0, _toConsumableArray2.default)(set);
    },
    getItemIds: function getItemIds(item) {
      var it = item || {};
      var list = Array.isArray(it.rawIds) ? it.rawIds : [];
      var ids = [];
      for (var i = 0; i < list.length; i++) {
        var _id = list[i] != null ? String(list[i]).trim() : '';
        if (_id) ids.push(_id);
      }
      if (ids.length) return ids;
      var id = it.id != null ? String(it.id).trim() : '';
      return id ? [id] : [];
    },
    getBarCode: function getBarCode(item) {
      var it = item || {};
      return String(it.barCode || it.barcode || it.productNo || '').trim();
    },
    sumNumericField: function sumNumericField(rows, fields) {
      var list = Array.isArray(rows) ? rows : [];
      var keys = Array.isArray(fields) ? fields : [fields];
      return list.reduce(function (sum, row) {
        var value = '';
        for (var i = 0; i < keys.length; i++) {
          var k = keys[i];
          if (row && row[k] != null && String(row[k]).trim() !== '') {
            value = row[k];
            break;
          }
        }
        var n = Number(value);
        return sum + (Number.isFinite(n) ? n : 0);
      }, 0);
    },
    shouldMergeByBarcode: function shouldMergeByBarcode(rows) {
      if (this.isScanMode) return true;
      var list = Array.isArray(rows) ? rows : [];
      var first = list[0] || {};
      return this.resolveDeliveryStatus(first) === 0;
    },
    buildDisplayRows: function buildDisplayRows(rows) {
      var _this3 = this;
      var list = Array.isArray(rows) ? rows : [];
      if (!this.shouldMergeByBarcode(list)) return list;
      var grouped = new Map();
      var _loop = function _loop(i) {
        var row = list[i] || {};
        var id = row.id != null ? String(row.id).trim() : '';
        var barCode = _this3.getBarCode(row);
        var key = barCode || (id ? "_id_".concat(id) : "_idx_".concat(i));
        if (!grouped.has(key)) {
          grouped.set(key, _objectSpread(_objectSpread({}, row), {}, {
            id: barCode || key,
            barCode: barCode || row.barCode || row.barcode || row.productNo || '',
            rawIds: id ? [id] : []
          }));
          return "continue";
        }
        var merged = grouped.get(key);
        if (id) {
          var mergedIds = Array.isArray(merged.rawIds) ? merged.rawIds : [];
          if (!mergedIds.includes(id)) mergedIds.push(id);
          merged.rawIds = mergedIds;
        }
        merged.deliverNum = _this3.sumNumericField([merged, row], ['deliverNum', 'quantity', 'actualQuantity']);
        merged.quantity = _this3.sumNumericField([merged, row], ['quantity', 'deliverNum', 'actualQuantity']);
        merged.actualQuantity = _this3.sumNumericField([merged, row], ['actualQuantity', 'checkQuantity', 'deliverNum']);
        merged.checkQuantity = _this3.sumNumericField([merged, row], ['checkQuantity', 'actualQuantity', 'deliverNum']);
        merged.deliveryStatus = _this3.mergeDeliveryStatus(merged.deliveryStatus, row.deliveryStatus);
        merged.checkStatus = _this3.mergeCheckStatus(merged.checkStatus, row.checkStatus);
        if (!_this3.formatUnqualifiedReason(merged) && _this3.formatUnqualifiedReason(row)) {
          merged.unqualifiedReason = row.unqualifiedReason;
        }
        var fillIfAbsent = function fillIfAbsent(key) {
          var cur = merged[key];
          var empty = cur == null || String(cur).trim() === '';
          var next = row[key];
          if (empty && next != null && String(next).trim() !== '') merged[key] = next;
        };
        ['level', 'productLevel', 'levelName', 'gradeName', 'bizType', 'batchBizType', 'operateUser', 'checkTime', 'firstCateName', 'secondCateName', 'carNo', 'storeName'].forEach(fillIfAbsent);
      };
      for (var i = 0; i < list.length; i++) {
        var _ret = _loop(i);
        if (_ret === "continue") continue;
      }
      return (0, _toConsumableArray2.default)(grouped.values());
    },
    appendDefaultSelectedIds: function appendDefaultSelectedIds(rows) {
      if (!this.isScanMode) return;
      var incoming = Array.isArray(rows) ? rows : [];
      if (!incoming.length) return;
      var set = new Set((this.selectedIds || []).map(function (x) {
        return String(x);
      }));
      for (var i = 0; i < incoming.length; i++) {
        var id = incoming[i] && incoming[i].id != null ? String(incoming[i].id) : '';
        if (id) set.add(id);
      }
      this.selectedIds = (0, _toConsumableArray2.default)(set);
    },
    getUnselectedIds: function getUnselectedIds() {
      var _this4 = this;
      var selectedSet = new Set((this.selectedIds || []).map(function (x) {
        return String(x);
      }));
      return this.itemList.flatMap(function (item) {
        return _this4.getItemIds(item);
      }).filter(function (id) {
        return id && !selectedSet.has(id);
      });
    },
    submitBatchCheck: function submitBatchCheck(ids, checkStatus) {
      var unqualifiedReason = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '';
      var list = Array.isArray(ids) ? ids.map(function (x) {
        return String(x);
      }).filter(Boolean) : [];
      if (!list.length) return Promise.resolve();
      return this.request('put', 'order/batchRef/batchCheck', this.token, {
        ids: list,
        checkStatus: String(checkStatus),
        unqualifiedReason: String(unqualifiedReason || '')
      }).then(function (res) {
        if (res && res.code && Number(res.code) !== 200) {
          return Promise.reject(res);
        }
        return res;
      });
    },
    onBatchReject: function onBatchReject() {
      var _this5 = this;
      if (this.batchCheckSubmitting) return;
      var ids = (this.selectedIds || []).map(function (x) {
        return String(x);
      }).filter(Boolean);
      if (!ids.length) {
        uni.showToast({
          title: '请先选择商品',
          icon: 'none'
        });
        return;
      }
      this.batchCheckSubmitting = true;
      uni.showLoading({
        title: '处理中...',
        mask: true
      });
      this.submitBatchCheck(ids, '2', '').then(function () {
        uni.showToast({
          title: '已驳回',
          icon: 'success'
        });
        _this5.resetAndLoad();
      }).catch(function (err) {
        var msg = err && (err.msg || err.message) || '驳回失败，请稍后重试';
        uni.showToast({
          title: msg,
          icon: 'none'
        });
      }).finally(function () {
        uni.hideLoading();
        _this5.batchCheckSubmitting = false;
      });
    },
    onBatchPass: function onBatchPass() {
      var _this6 = this;
      if (this.batchCheckSubmitting) return;
      var passIds = (this.selectedIds || []).map(function (x) {
        return String(x);
      }).filter(Boolean);
      if (!passIds.length) {
        uni.showToast({
          title: '请先选择商品',
          icon: 'none'
        });
        return;
      }
      var rejectIds = this.getUnselectedIds();
      var tip = rejectIds.length ? "\u5F53\u524D\u672A\u9009\u4E2D".concat(rejectIds.length, "\u9879\uFF0C\u5C06\u81EA\u52A8\u9A73\u56DE\uFF0C\u662F\u5426\u7EE7\u7EED\u901A\u8FC7\u9009\u4E2D\u9879\uFF1F") : '确认通过当前选中项吗？';
      uni.showModal({
        title: '确认通过',
        content: tip,
        confirmText: '确认',
        cancelText: '取消',
        success: function success(modalRes) {
          if (!modalRes.confirm) return;
          _this6.batchCheckSubmitting = true;
          uni.showLoading({
            title: '处理中...',
            mask: true
          });
          _this6.submitBatchCheck(passIds, '1', '').then(function () {
            if (rejectIds.length) {
              return _this6.submitBatchCheck(rejectIds, '2', '');
            }
            return null;
          }).then(function () {
            uni.showToast({
              title: '操作成功',
              icon: 'success'
            });
            _this6.resetAndLoad();
          }).catch(function (err) {
            var msg = err && (err.msg || err.message) || '提交失败，请稍后重试';
            uni.showToast({
              title: msg,
              icon: 'none'
            });
          }).finally(function () {
            uni.hideLoading();
            _this6.batchCheckSubmitting = false;
          });
        }
      });
    },
    normalizeImageUrl: function normalizeImageUrl(rawUrl) {
      var u = String(rawUrl || '').trim();
      if (!u) return '';
      if (/^https?:\/\//i.test(u)) return u;
      if (/^\/\//.test(u)) return "https:".concat(u);
      return u;
    },
    pickImageUrl: function pickImageUrl(raw) {
      if (!raw) return '';
      if (typeof raw === 'string') {
        var s = raw.trim();
        if (!s) return '';
        if (/^https?:\/\//i.test(s) || /^\/\//.test(s) || /^data:image\//i.test(s)) {
          return this.normalizeImageUrl(s);
        }
        try {
          var parsed = JSON.parse(s);
          return this.pickImageUrl(parsed);
        } catch (e) {
          return '';
        }
      }
      if (Array.isArray(raw)) {
        if (!raw.length) return '';
        return this.pickImageUrl(raw[0]);
      }
      if ((0, _typeof2.default)(raw) === 'object') {
        var direct = raw.url || raw.imageUrl || raw.pic || raw.mainPic || raw.productImage || raw.cover;
        return this.normalizeImageUrl(direct);
      }
      return '';
    },
    getItemImage: function getItemImage(item) {
      var it = item || {};
      return this.pickImageUrl(it.image || it.productImage || it.pic || it.mainPic || it.sliderImage || it.cover);
    },
    formatSpec: function formatSpec(item) {
      var it = item || {};
      return String(it.productSpec || it.productBrand || '').trim();
    },
    loadProductLevelDict: function loadProductLevelDict() {
      var _this7 = this;
      if (!this.token) {
        this.productLevelDict = [];
        return;
      }
      (0, _dict.getProductLevelList)(this).then(function (res) {
        _this7.productLevelDict = (0, _dict.normalizeDictList)(res);
      }).catch(function () {
        _this7.productLevelDict = [];
      });
    },
    getItemLevelCode: function getItemLevelCode(item) {
      var it = item || {};
      var raw = it.level != null ? it.level : it.productLevel;
      if (raw == null || String(raw).trim() === '') return '';
      return String(raw).trim();
    },
    matchLevelDictLabel: function matchLevelDictLabel(code) {
      var wanted = String(code || '').trim();
      var list = Array.isArray(this.productLevelDict) ? this.productLevelDict : [];
      if (!wanted || !list.length) return '';
      for (var i = 0; i < list.length; i++) {
        var row = list[i];
        var v = (0, _dict.dictItemValue)(row);
        if (v !== '' && v === wanted) return (0, _dict.dictItemLabel)(row) || v;
      }
      var nWant = Number(wanted);
      if (Number.isFinite(nWant)) {
        for (var j = 0; j < list.length; j++) {
          var row2 = list[j];
          var v2 = (0, _dict.dictItemValue)(row2);
          var nDict = Number(v2);
          if (Number.isFinite(nDict) && nDict === nWant) return (0, _dict.dictItemLabel)(row2) || v2;
        }
      }
      return '';
    },
    getLevelBadgeText: function getLevelBadgeText(item) {
      var it = item || {};
      var code = this.getItemLevelCode(it);
      if (code !== '') {
        var mapped = this.matchLevelDictLabel(code);
        if (mapped) return mapped;
      }
      var nameFallback = String(it.levelName || it.gradeName || '').trim();
      return nameFallback;
    },
    getItemBizSourceTag: function getItemBizSourceTag(item) {
      var biz = String((item || {}).bizType || (item || {}).batchBizType || '').toUpperCase();
      if (biz === 'ALLOCATE') return '市采';
      return '';
    },
    getGross: function getGross(item) {
      var v = item && item.netWeight != null && String(item.netWeight).trim() !== '' ? item.netWeight : '-';
      return String(v);
    },
    getNet: function getNet(item) {
      var v = item && item.weight != null && String(item.weight).trim() !== '' ? item.weight : '-';
      return String(v);
    },
    formatCategory: function formatCategory(item) {
      var it = item || {};
      var first = String(it.firstCateName || '').trim();
      var second = String(it.secondCateName || '').trim();
      if (first && second) return "".concat(first, "/").concat(second);
      return first || second || '-';
    },
    getNeedCount: function getNeedCount(item) {
      var it = item || {};
      var v = it.deliverNum != null ? it.deliverNum : it.quantity != null ? it.quantity : it.actualQuantity;
      var n = Number(v);
      return Number.isFinite(n) ? n : 0;
    },
    getLoadedCount: function getLoadedCount(item) {
      var it = item || {};
      var v = it.actualQuantity != null ? it.actualQuantity : it.checkQuantity != null ? it.checkQuantity : it.deliverNum;
      var n = Number(v);
      return Number.isFinite(n) ? n : 0;
    },
    getLatestLoadTime: function getLatestLoadTime(item) {
      var it = item || {};
      return it.inStockTime || it.deliveryTime || it.updateTime || it.checkTime || it.createTime || '-';
    },
    onPreviewImage: function onPreviewImage(item) {
      var src = this.getItemImage(item);
      if (!src) {
        uni.showToast({
          title: '暂无图片',
          icon: 'none'
        });
        return;
      }
      uni.previewImage({
        urls: [src],
        current: src
      });
    },
    /** 仅质检通过（checkStatus===1）的 batchRef 主键 id，与 batchCheck 接口 ids 含义一致 */collectPassedBatchRefIds: function collectPassedBatchRefIds(rows) {
      var list = Array.isArray(rows) ? rows : [];
      var out = [];
      var seen = new Set();
      for (var i = 0; i < list.length; i++) {
        var row = list[i] || {};
        if (Number(row.checkStatus) !== 1) continue;
        var rid = row.id != null ? String(row.id).trim() : '';
        if (!rid || seen.has(rid)) continue;
        seen.add(rid);
        out.push(rid);
      }
      return out;
    },
    onQuickLoadDone: function onQuickLoadDone() {
      var _this8 = this;
      if (!this.supplierOrderId || this.quickZcSubmitting) return;
      var sourceRows = Array.isArray(this.rawItemList) && this.rawItemList.length ? this.rawItemList : this.itemList;
      var passedIds = this.collectPassedBatchRefIds(sourceRows);
      if (!passedIds.length) {
        uni.showToast({
          title: '暂无质检通过的商品可装车',
          icon: 'none'
        });
        return;
      }
      var skipped = sourceRows.filter(function (r) {
        return Number((r || {}).checkStatus) !== 1;
      }).length;
      var modalContent = skipped > 0 ? "\u672C\u5355\u542B\u672A\u8D28\u68C0\u6216\u672A\u901A\u8FC7\u7684\u660E\u7EC6\uFF0C\u5C06\u4EC5\u4E3A\u8D28\u68C0\u901A\u8FC7\u7684 ".concat(passedIds.length, " \u6761\u529E\u7406\u88C5\u8F66\uFF0C\u662F\u5426\u7EE7\u7EED\uFF1F") : '确认将该送货单中质检通过的商品标记为装车完毕吗？';
      uni.showModal({
        title: '确认装车完毕',
        content: modalContent,
        confirmText: '确定',
        cancelText: '取消',
        success: function success(modalRes) {
          if (!modalRes.confirm) return;
          _this8.quickZcSubmitting = true;
          uni.showLoading({
            title: '处理中...',
            mask: true
          });
          _this8.request('put', 'order/batch/gysZc', _this8.token, {
            id: _this8.supplierOrderId,
            inStockStatus: 1,
            ids: passedIds
          }).then(function (res) {
            if (res && res.code && Number(res.code) !== 200) {
              return Promise.reject(res);
            }
            _this8.batchListInStockStatus = '1';
            _this8.batchListRawStatus = '0';
            uni.showToast({
              title: '装车完成',
              icon: 'success'
            });
            try {
              var ec = typeof _this8.getOpenerEventChannel === 'function' ? _this8.getOpenerEventChannel() : null;
              if (ec && typeof ec.emit === 'function') {
                ec.emit('supplierOrderListRefresh');
              }
            } catch (e) {
              /* 非 navigateTo 打开时可能无 channel */
            }
            _this8.resetAndLoad();
          }).catch(function (err) {
            var msg = err && err.msg || '装车失败，请稍后重试';
            uni.showToast({
              title: msg,
              icon: 'none'
            });
          }).finally(function () {
            uni.hideLoading();
            _this8.quickZcSubmitting = false;
          });
        }
      });
    },
    buildSharePath: function buildSharePath() {
      var supplierOrderId = String(this.supplierOrderId || '').trim();
      if (!supplierOrderId) return '';
      var q = [];
      q.push("supplierOrderId=".concat(encodeURIComponent(supplierOrderId)));
      q.push("supplierOrderNo=".concat(encodeURIComponent(String(this.supplierOrderNo || ''))));
      var sid = String(this.summaryId || '').trim();
      var spid = String(this.supplierId || '').trim();
      var spname = String(this.supplierName || '').trim();
      if (sid) q.push("summaryId=".concat(encodeURIComponent(sid)));
      if (spid) q.push("supplierId=".concat(encodeURIComponent(spid)));
      if (spname) q.push("supplierName=".concat(encodeURIComponent(spname)));
      if (Array.isArray(this.prefetchedOrderIds) && this.prefetchedOrderIds.length) {
        q.push("orderIds=".concat(encodeURIComponent(JSON.stringify(this.prefetchedOrderIds.map(function (x) {
          return String(x);
        })))));
      }
      var bins = String(this.batchListInStockStatus || '').trim();
      if (bins !== '') q.push("batchListInStockStatus=".concat(encodeURIComponent(bins)));
      var bls = String(this.batchListRawStatus || '').trim();
      if (bls && bins === '') q.push("batchListRawStatus=".concat(encodeURIComponent(bls)));
      return "/sub-pages/supply/supplier-order-detail?".concat(q.join('&'));
    },
    onShowOrderQrcode: function onShowOrderQrcode() {
      var path = this.buildSharePath();
      if (!path) {
        uni.showToast({
          title: '发货单信息不完整',
          icon: 'none'
        });
        return;
      }
      this.currentQrcodeOrderNo = String(this.supplierOrderNo || '');
      this.orderQrcodeImage = "https://api.qrserver.com/v1/create-qr-code/?size=520x520&data=".concat(encodeURIComponent(path));
      var popup = this.$refs.orderQrcodePopup;
      if (popup && typeof popup.open === 'function') popup.open();
    },
    onCloseOrderQrcode: function onCloseOrderQrcode() {
      var popup = this.$refs.orderQrcodePopup;
      if (popup && typeof popup.close === 'function') popup.close();
    },
    loadList: function loadList() {
      var _this9 = this;
      if (!this.supplierOrderId || this.loading || this.finished) return;
      this.loading = true;
      var params = {
        pageNum: this.pageNum,
        pageSize: this.pageSize,
        batchId: this.supplierOrderId
      };
      this.request('get', 'order/batchRef/list', this.token, params).then(function (res) {
        var rows = Array.isArray(res && res.rows) ? res.rows : [];
        if (!_this9.summaryId && rows.length > 0) {
          var r0 = rows[0] || {};
          var pick = r0.summaryId || r0.dailySummaryId || r0.summaryDTO && r0.summaryDTO.id || r0.summary_id;
          if (pick != null && String(pick).trim() !== '') {
            _this9.summaryId = String(pick).trim();
          }
        }
        if (!_this9.supplierId && rows.length > 0) {
          var _r = rows[0] || {};
          var sp = _r.supplierId;
          if (sp != null && String(sp).trim() !== '') _this9.supplierId = String(sp).trim();
        }
        if (!_this9.supplierName && rows.length > 0) {
          var _r2 = rows[0] || {};
          var nm = _r2.supplierName;
          if (nm != null && String(nm).trim() !== '') _this9.supplierName = String(nm).trim();
        }
        var total = Number(res && res.total) || 0;
        _this9.rawItemList = [].concat((0, _toConsumableArray2.default)(_this9.rawItemList), (0, _toConsumableArray2.default)(rows));
        _this9.itemList = _this9.buildDisplayRows(_this9.rawItemList);
        _this9.appendDefaultSelectedIds(rows);
        _this9.total = total;
        _this9.finished = _this9.rawItemList.length >= total || rows.length < _this9.pageSize;
        if (rows.length > 0) _this9.pageNum += 1;
      }).catch(function () {}).finally(function () {
        _this9.loading = false;
      });
    },
    buildOrderBatchBody: function buildOrderBatchBody(rows) {
      var list = Array.isArray(rows) ? rows : [];
      var batchNoRaw = (this.supplierOrderNo || '').trim();
      var batchNo = /^BATCH_/i.test(batchNoRaw) ? batchNoRaw : "BATCH_".concat(Date.now());
      var summaryId = String(this.summaryId || '').trim();
      var supplierId = String(this.supplierId || '').trim();
      var supplierName = String(this.supplierName || '').trim();
      var byKey = new Map();
      for (var i = 0; i < list.length; i++) {
        var r = list[i] || {};
        var bar = String(r.barCode || r.barcode || r.productNo || '').trim();
        var key = bar || "_id_".concat(String(r.id));
        if (!byKey.has(key)) byKey.set(key, {
          barCode: bar,
          rows: []
        });
        byKey.get(key).rows.push(r);
      }
      var detailList = [];
      byKey.forEach(function (v) {
        var rs = v.rows || [];
        var barCode = String(v.barCode || rs[0] && (rs[0].barCode || rs[0].barcode || rs[0].productNo) || rs[0].id || '');
        var items = rs.map(function (r) {
          var qty = Number(r.quantity != null ? r.quantity : r.actualQuantity) || 0;
          return {
            id: String(r.id),
            actualQuantity: qty,
            shippedQty: Number(r.shippedQty) || 0
          };
        });
        var deliverNum = items.reduce(function (s, it) {
          return s + (Number(it.actualQuantity) || 0);
        }, 0);
        var quantity = rs.reduce(function (s, r) {
          var q = Number(r.quantity != null ? r.quantity : r.actualQuantity) || 0;
          return s + q;
        }, 0) || deliverNum;
        detailList.push({
          barCode: barCode,
          deliverNum: deliverNum,
          quantity: quantity,
          items: items
        });
      });
      var orderIds = Array.isArray(this.prefetchedOrderIds) ? (0, _toConsumableArray2.default)(this.prefetchedOrderIds) : [];
      if (!orderIds.length) {
        var seen = new Set();
        for (var j = 0; j < list.length; j++) {
          var _r3 = list[j] || {};
          var oid = _r3.orderId || _r3.storeOrderId || _r3.orderID;
          if (oid == null || String(oid).trim() === '') continue;
          var s = String(oid).trim();
          if (!seen.has(s)) {
            seen.add(s);
            orderIds.push(s);
          }
        }
      }
      return {
        batchNo: batchNo,
        detailList: detailList,
        orderIds: orderIds,
        summaryId: summaryId,
        supplierId: supplierId,
        supplierName: supplierName
      };
    },
    onBatchDeliver: function onBatchDeliver() {
      var _this10 = this;
      return (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee() {
        var deliverErrorMsg, rows, payload, ec, msg;
        return _regenerator.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                if (!(!_this10.supplierOrderId || _this10.batchSubmitting)) {
                  _context.next = 2;
                  break;
                }
                return _context.abrupt("return");
              case 2:
                _this10.batchSubmitting = true;
                deliverErrorMsg = '';
                uni.showLoading({
                  title: '处理中...',
                  mask: true
                });
                _context.prev = 5;
                rows = _this10.selectedIds.length ? _this10.itemList.filter(function (item) {
                  return _this10.selectedIds.includes(item.id);
                }) : (0, _toConsumableArray2.default)(_this10.itemList);
                if (rows.length) {
                  _context.next = 10;
                  break;
                }
                uni.showToast({
                  title: '暂无可发货商品',
                  icon: 'none'
                });
                return _context.abrupt("return");
              case 10:
                if (String(_this10.summaryId || '').trim()) {
                  _context.next = 13;
                  break;
                }
                uni.showToast({
                  title: '缺少汇总 id，请从送货单列表进入后再发货',
                  icon: 'none'
                });
                return _context.abrupt("return");
              case 13:
                payload = _this10.buildOrderBatchBody(rows);
                _context.next = 16;
                return (0, _storeOrder.postOrderBatch)(_this10, payload);
              case 16:
                uni.showToast({
                  title: '发货成功',
                  icon: 'success'
                });
                try {
                  ec = typeof _this10.getOpenerEventChannel === 'function' ? _this10.getOpenerEventChannel() : null;
                  if (ec && typeof ec.emit === 'function') {
                    ec.emit('supplierOrderListRefresh');
                  }
                } catch (e) {
                  /* 非 navigateTo 打开时可能无 channel */
                }
                setTimeout(function () {
                  uni.navigateBack({
                    fail: function fail() {
                      _this10.resetAndLoad();
                    }
                  });
                }, 500);
                _context.next = 25;
                break;
              case 21:
                _context.prev = 21;
                _context.t0 = _context["catch"](5);
                msg = _context.t0 && (_context.t0.msg || _context.t0.message || _context.t0.data && _context.t0.data.msg) || '发货失败，请稍后重试';
                deliverErrorMsg = String(msg);
              case 25:
                _context.prev = 25;
                uni.hideLoading();
                if (deliverErrorMsg) {
                  setTimeout(function () {
                    uni.showToast({
                      title: deliverErrorMsg,
                      icon: 'none',
                      duration: 2500
                    });
                  }, 80);
                }
                _this10.batchSubmitting = false;
                return _context.finish(25);
              case 30:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, null, [[5, 21, 25, 30]]);
      }))();
    },
    onPrintTag: function onPrintTag() {
      var _this11 = this;
      var sourceRows = this.rawItemList.length ? this.rawItemList : this.itemList;
      var rows = this.selectedIds.length ? sourceRows.filter(function (item) {
        var id = item && item.id != null ? String(item.id) : '';
        return id && _this11.selectedIds.includes(id);
      }) : sourceRows;
      if (!rows.length) {
        uni.showToast({
          title: '暂无可打印商品',
          icon: 'none'
        });
        return;
      }
      var payload = {
        supplierOrderId: String(this.supplierOrderId || ''),
        supplierOrderNo: String(this.supplierOrderNo || ''),
        supplierName: String(this.supplierName || ''),
        batchListInStockStatus: String(this.batchListInStockStatus || '').trim(),
        batchListRawStatus: String(this.batchListRawStatus || '').trim(),
        rows: rows
      };
      var cacheKey = "supplier_order_print_payload_".concat(Date.now(), "_").concat(Math.random().toString(36).slice(2, 8));
      try {
        uni.setStorageSync(cacheKey, payload);
      } catch (e) {
        uni.showToast({
          title: '打印数据缓存失败',
          icon: 'none'
        });
        return;
      }
      uni.navigateTo({
        url: "/sub-pages/supply/supplier-order-print-label?cacheKey=".concat(encodeURIComponent(cacheKey))
      });
    },
    onPrint: function onPrint(items) {
      var list = Array.isArray(items) ? items : [items];
      this.printCpclLabel(list);
    },
    printCpclLabel: function printCpclLabel(items) {
      var _this12 = this;
      return (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee2() {
        var sourceRows, rows, labels, i;
        return _regenerator.default.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                if (!_this12.printingTag) {
                  _context2.next = 3;
                  break;
                }
                uni.showToast({
                  title: '正在打印中，请稍候',
                  icon: 'none'
                });
                return _context2.abrupt("return");
              case 3:
                sourceRows = Array.isArray(items) ? items : [items];
                rows = sourceRows.filter(Boolean);
                if (rows.length) {
                  _context2.next = 8;
                  break;
                }
                uni.showToast({
                  title: '暂无可打印商品',
                  icon: 'none'
                });
                return _context2.abrupt("return");
              case 8:
                labels = [];
                i = 0;
              case 10:
                if (!(i < rows.length)) {
                  _context2.next = 22;
                  break;
                }
                _context2.prev = 11;
                labels.push(_this12.buildCpclLabel(rows[i]));
                _context2.next = 19;
                break;
              case 15:
                _context2.prev = 15;
                _context2.t0 = _context2["catch"](11);
                uni.showToast({
                  title: '生成打印内容失败',
                  icon: 'none'
                });
                return _context2.abrupt("return");
              case 19:
                i++;
                _context2.next = 10;
                break;
              case 22:
                _this12.printingTag = true;
                _context2.prev = 23;
                _batchPrinter.default.clearQueue();
                _batchPrinter.default.addCpclLabels(labels);
                _context2.next = 28;
                return _batchPrinter.default.start({
                  onProgress: function onProgress(_ref) {
                    var current = _ref.current,
                      total = _ref.total;
                    uni.showLoading({
                      title: "\u6253\u5370\u4E2D ".concat(current, "/").concat(total),
                      mask: true
                    });
                  },
                  onComplete: function onComplete(_ref2) {
                    var total = _ref2.total;
                    uni.showToast({
                      title: "\u5DF2\u53D1\u9001".concat(total, "\u5F20"),
                      icon: 'success'
                    });
                  },
                  onError: function onError(e) {
                    uni.showToast({
                      title: e && e.message || '打印失败',
                      icon: 'none'
                    });
                  }
                });
              case 28:
                _context2.next = 33;
                break;
              case 30:
                _context2.prev = 30;
                _context2.t1 = _context2["catch"](23);
                uni.showToast({
                  title: _context2.t1 && _context2.t1.message || '打印失败',
                  icon: 'none'
                });
              case 33:
                _context2.prev = 33;
                _this12.printingTag = false;
                uni.hideLoading();
                return _context2.finish(33);
              case 37:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, null, [[11, 15], [23, 30, 33, 37]]);
      }))();
    },
    buildCpclLabel: function buildCpclLabel(item) {
      var _ref3, _it$carNo;
      var it = item || {};
      // 70×50mm（200dpi）≈ 552×394 dot；宽度保留 560 以兼容当前版式，
      // 高度使用 394，避免连续打印时因步进过长导致逐张偏移。
      var LABEL_WIDTH_DOTS = 560;
      var LABEL_HEIGHT_DOTS = 394;
      var pageOrderNo = (this.supplierOrderNo || '').trim();
      var rawCodeValue = String(it.productId || it.qrContent || it.barcode || it.barCode || it.serialNo || pageOrderNo || '').trim() || '-';
      var serialOneLine = String(rawCodeValue).replace(/\s+/g, '');
      var barcodeValue = serialOneLine.replace(/[^\x20-\x7E]/g, '').slice(0, 32) || '0';
      var qrValue = serialOneLine || barcodeValue;
      var pzNoRaw = it.pzNo != null ? String(it.pzNo).trim() : '';
      var pzNoFirstPart = pzNoRaw ? pzNoRaw.split(/[，,、\s/|]+/).filter(Boolean)[0] || '' : '';
      var boxNoCandidate = pzNoFirstPart ? pzNoFirstPart.slice(0, 2) : '';
      var boxNo = /^0+$/.test(boxNoCandidate) ? '' : boxNoCandidate;
      var carNo = String((_ref3 = (_it$carNo = it.carNo) !== null && _it$carNo !== void 0 ? _it$carNo : it.lineNo) !== null && _ref3 !== void 0 ? _ref3 : '').trim() || '-';
      var leftVertical = '昱禾联仓';
      var storeName = String(it.storeName || it.store || it.storeNm || '').trim() || '-';
      var supplierName = String(it.supplierName || this.supplierName || '').trim() || '-';
      var productBrand = String(it.productBrand || '').trim();
      var productName = String(it.productName || '-').trim() || '-';
      var productLevel = String(this.getLevelBadgeText(it) || '').trim();
      var titleLine = [productBrand, productName, productLevel].filter(Boolean).join('-').slice(0, 18);
      var gross = it.netWeight != null && String(it.netWeight).trim() !== '' ? String(it.netWeight).trim() : '-';
      var net = it.weight != null && String(it.weight).trim() !== '' ? String(it.weight).trim() : '-';
      var now = new Date();
      var dateLine = "".concat(now.getFullYear(), " \u5E74 ").concat(now.getMonth() + 1, " \u6708").concat(now.getDate(), " \u65E5");
      var qrCodeText = barcodeValue.slice(0, 14);
      var X_QR = 362;
      var Y_QR = 14;
      var Y_LINE = 228;
      _PrinterHelperCpcl.default.data = '';
      _PrinterHelperCpcl.default.PrintAreaSize('0', '200', '200', String(LABEL_HEIGHT_DOTS), '1');
      _PrinterHelperCpcl.default.PageWidth(String(LABEL_WIDTH_DOTS));
      _PrinterHelperCpcl.default.SetMag('2', '2');
      var leftChars = Array.from(leftVertical.slice(0, 4));
      for (var i = 0; i < leftChars.length; i++) {
        _PrinterHelperCpcl.default.Text(_PrinterHelperCpcl.default.text, '55', '0', '18', String(30 + i * 52), leftChars[i]);
      }
      _PrinterHelperCpcl.default.SetMag('1', '1');
      _PrinterHelperCpcl.default.SetBold('1');
      _PrinterHelperCpcl.default.Text(_PrinterHelperCpcl.default.text, '8', '0', '176', '22', '车号');
      _PrinterHelperCpcl.default.SetMag('7', '7');
      _PrinterHelperCpcl.default.Text(_PrinterHelperCpcl.default.text, '4', '0', '196', '56', carNo.slice(0, 3));
      _PrinterHelperCpcl.default.SetMag('1', '1');
      _PrinterHelperCpcl.default.PrintQR(_PrinterHelperCpcl.default.barcode, String(X_QR), String(Y_QR + 10), '2', '5', qrValue);
      _PrinterHelperCpcl.default.SetMag('1', '1');
      _PrinterHelperCpcl.default.Text(_PrinterHelperCpcl.default.text, '4', '0', '368', '166', qrCodeText);
      _PrinterHelperCpcl.default.SetMag('2', '2');
      _PrinterHelperCpcl.default.Text(_PrinterHelperCpcl.default.text, '55', '0', '176', '182', storeName.slice(0, 8));
      _PrinterHelperCpcl.default.SetMag('1', '1');
      _PrinterHelperCpcl.default.SetBold('0');
      _PrinterHelperCpcl.default.Line('0', String(Y_LINE + 10), String(LABEL_WIDTH_DOTS), String(Y_LINE + 10), '1');
      _PrinterHelperCpcl.default.SetBold('1');
      _PrinterHelperCpcl.default.SetMag('2', '2');
      _PrinterHelperCpcl.default.Text(_PrinterHelperCpcl.default.text, '55', '0', '18', '246', titleLine || '-');
      _PrinterHelperCpcl.default.SetMag('1', '1');
      _PrinterHelperCpcl.default.SetBold('0');
      _PrinterHelperCpcl.default.Text(_PrinterHelperCpcl.default.text, '8', '0', '18', '278', '供应商名');
      _PrinterHelperCpcl.default.SetBold('1');
      _PrinterHelperCpcl.default.Text(_PrinterHelperCpcl.default.text, '55', '0', '176', '278', supplierName.slice(0, 12));
      _PrinterHelperCpcl.default.SetBold('0');
      _PrinterHelperCpcl.default.Text(_PrinterHelperCpcl.default.text, '8', '0', '18', '310', "\u6BDB\u91CD".concat(gross, "\u65A4  \u51C0\u91CD").concat(net, "\u65A4"));
      _PrinterHelperCpcl.default.SetBold('1');
      _PrinterHelperCpcl.default.Text(_PrinterHelperCpcl.default.text, '4', '0', '18', '350', dateLine);
      _PrinterHelperCpcl.default.SetBold('0');
      if (boxNo) {
        var isDouble = boxNo.length > 1;
        _PrinterHelperCpcl.default.SetMag(isDouble ? '4' : '5', isDouble ? '4' : '5');
        _PrinterHelperCpcl.default.Text(_PrinterHelperCpcl.default.text, '4', '0', String(isDouble ? 434 : 468), '292', boxNo);
        _PrinterHelperCpcl.default.SetMag('1', '1');
      }
      _PrinterHelperCpcl.default.Form();
      _PrinterHelperCpcl.default.Print();
      return _PrinterHelperCpcl.default.data;
    } // BLE 传输已交由 batchPrinter 处理，不再需要本地的 splitPrintData/sendChunks/waitMs
  }
};
exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 2)["default"]))

/***/ }),

/***/ 324:
/*!**********************************************************************************************************************************************!*\
  !*** E:/project/yhlc-v1.0/agent-uniapp/sub-pages/supply/supplier-order-detail.vue?vue&type=style&index=0&id=f763d6d2&lang=scss&scoped=true& ***!
  \**********************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_supplier_order_detail_vue_vue_type_style_index_0_id_f763d6d2_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/mini-css-extract-plugin/dist/loader.js??ref--8-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--8-oneOf-1-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-2!./node_modules/postcss-loader/src??ref--8-oneOf-1-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/sass-loader/dist/cjs.js??ref--8-oneOf-1-4!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-5!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./supplier-order-detail.vue?vue&type=style&index=0&id=f763d6d2&lang=scss&scoped=true& */ 325);
/* harmony import */ var _D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_supplier_order_detail_vue_vue_type_style_index_0_id_f763d6d2_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_supplier_order_detail_vue_vue_type_style_index_0_id_f763d6d2_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_supplier_order_detail_vue_vue_type_style_index_0_id_f763d6d2_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_supplier_order_detail_vue_vue_type_style_index_0_id_f763d6d2_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HBuilderX_5_07_2026041006_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_supplier_order_detail_vue_vue_type_style_index_0_id_f763d6d2_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 325:
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js??ref--8-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--8-oneOf-1-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-2!./node_modules/postcss-loader/src??ref--8-oneOf-1-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/sass-loader/dist/cjs.js??ref--8-oneOf-1-4!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-5!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!E:/project/yhlc-v1.0/agent-uniapp/sub-pages/supply/supplier-order-detail.vue?vue&type=style&index=0&id=f763d6d2&lang=scss&scoped=true& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
    if(false) { var cssReload; }
  

/***/ })

},[[316,"common/runtime","common/vendor","sub-pages/supply/common/vendor"]]]);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/sub-pages/supply/supplier-order-detail.js.map
},{isPage:true,isComponent:true,currentFile:'sub-pages/supply/supplier-order-detail.js'});require("sub-pages/supply/supplier-order-detail.js");