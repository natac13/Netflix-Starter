/*! For license information please see 2.bf1ada0b.chunk.js.LICENSE.txt */
(this["webpackJsonpamazon-clone"]=this["webpackJsonpamazon-clone"]||[]).push([[2],{1273:function(e,t,r){var n=r(1499);e.exports=n("123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz")},1312:function(e,t,r){"use strict";r.d(t,"a",(function(){return i}));var n=r(63);function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){Object(n.a)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}},1322:function(e,t,r){"use strict";function n(e,t,r){return t<=e&&e<=r}function o(e){if(void 0===e)return{};if(e===Object(e))return e;throw TypeError("Could not convert argument to dictionary")}r.r(t),r.d(t,"TextEncoder",(function(){return f})),r.d(t,"TextDecoder",(function(){return s}));function i(e){this.tokens=[].slice.call(e)}i.prototype={endOfStream:function(){return!this.tokens.length},read:function(){return this.tokens.length?this.tokens.shift():-1},prepend:function(e){if(Array.isArray(e))for(var t=e;t.length;)this.tokens.unshift(t.pop());else this.tokens.unshift(e)},push:function(e){if(Array.isArray(e))for(var t=e;t.length;)this.tokens.push(t.shift());else this.tokens.push(e)}};var a=-1;function c(e,t){if(e)throw TypeError("Decoder error");return t||65533}var u="utf-8";function s(e,t){if(!(this instanceof s))return new s(e,t);if((e=void 0!==e?String(e).toLowerCase():u)!==u)throw new Error("Encoding not supported. Only utf-8 is supported");t=o(t),this._streaming=!1,this._BOMseen=!1,this._decoder=null,this._fatal=Boolean(t.fatal),this._ignoreBOM=Boolean(t.ignoreBOM),Object.defineProperty(this,"encoding",{value:"utf-8"}),Object.defineProperty(this,"fatal",{value:this._fatal}),Object.defineProperty(this,"ignoreBOM",{value:this._ignoreBOM})}function f(e,t){if(!(this instanceof f))return new f(e,t);if((e=void 0!==e?String(e).toLowerCase():u)!==u)throw new Error("Encoding not supported. Only utf-8 is supported");t=o(t),this._streaming=!1,this._encoder=null,this._options={fatal:Boolean(t.fatal)},Object.defineProperty(this,"encoding",{value:"utf-8"})}function l(e){var t=e.fatal,r=0,o=0,i=0,u=128,s=191;this.handler=function(e,f){if(-1===f&&0!==i)return i=0,c(t);if(-1===f)return a;if(0===i){if(n(f,0,127))return f;if(n(f,194,223))i=1,r=f-192;else if(n(f,224,239))224===f&&(u=160),237===f&&(s=159),i=2,r=f-224;else{if(!n(f,240,244))return c(t);240===f&&(u=144),244===f&&(s=143),i=3,r=f-240}return r<<=6*i,null}if(!n(f,u,s))return r=i=o=0,u=128,s=191,e.prepend(f),c(t);if(u=128,s=191,r+=f-128<<6*(i-(o+=1)),o!==i)return null;var l=r;return r=i=o=0,l}}function p(e){e.fatal;this.handler=function(e,t){if(-1===t)return a;if(n(t,0,127))return t;var r,o;n(t,128,2047)?(r=1,o=192):n(t,2048,65535)?(r=2,o=224):n(t,65536,1114111)&&(r=3,o=240);for(var i=[(t>>6*r)+o];r>0;){var c=t>>6*(r-1);i.push(128|63&c),r-=1}return i}}s.prototype={decode:function(e,t){var r;r="object"===typeof e&&e instanceof ArrayBuffer?new Uint8Array(e):"object"===typeof e&&"buffer"in e&&e.buffer instanceof ArrayBuffer?new Uint8Array(e.buffer,e.byteOffset,e.byteLength):new Uint8Array(0),t=o(t),this._streaming||(this._decoder=new l({fatal:this._fatal}),this._BOMseen=!1),this._streaming=Boolean(t.stream);for(var n,c=new i(r),u=[];!c.endOfStream()&&(n=this._decoder.handler(c,c.read()))!==a;)null!==n&&(Array.isArray(n)?u.push.apply(u,n):u.push(n));if(!this._streaming){do{if((n=this._decoder.handler(c,c.read()))===a)break;null!==n&&(Array.isArray(n)?u.push.apply(u,n):u.push(n))}while(!c.endOfStream());this._decoder=null}return u.length&&(-1===["utf-8"].indexOf(this.encoding)||this._ignoreBOM||this._BOMseen||(65279===u[0]?(this._BOMseen=!0,u.shift()):this._BOMseen=!0)),function(e){for(var t="",r=0;r<e.length;++r){var n=e[r];n<=65535?t+=String.fromCharCode(n):(n-=65536,t+=String.fromCharCode(55296+(n>>10),56320+(1023&n)))}return t}(u)}},f.prototype={encode:function(e,t){e=e?String(e):"",t=o(t),this._streaming||(this._encoder=new p(this._options)),this._streaming=Boolean(t.stream);for(var r,n=[],c=new i(function(e){for(var t=String(e),r=t.length,n=0,o=[];n<r;){var i=t.charCodeAt(n);if(i<55296||i>57343)o.push(i);else if(56320<=i&&i<=57343)o.push(65533);else if(55296<=i&&i<=56319)if(n===r-1)o.push(65533);else{var a=e.charCodeAt(n+1);if(56320<=a&&a<=57343){var c=1023&i,u=1023&a;o.push(65536+(c<<10)+u),n+=1}else o.push(65533)}n+=1}return o}(e));!c.endOfStream()&&(r=this._encoder.handler(c,c.read()))!==a;)Array.isArray(r)?n.push.apply(n,r):n.push(r);if(!this._streaming){for(;(r=this._encoder.handler(c,c.read()))!==a;)Array.isArray(r)?n.push.apply(n,r):n.push(r);this._encoder=null}return new Uint8Array(n)}}},1323:function(e,t,r){"use strict";var n=r(1324);Object.defineProperty(t,"__esModule",{value:!0}),t.Client=void 0;var o=n(r(69)),i=n(r(75)),a=n(r(609)),c=n(r(199)),u=n(r(1504));function s(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,n=(0,c.default)(e);if(t){var o=(0,c.default)(this).constructor;r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments);return(0,a.default)(this,r)}}var f=function(e){(0,i.default)(r,e);var t=s(r);function r(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"ws://localhost:8080",n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},i=n.autoconnect,a=void 0===i||i,c=n.reconnect,s=void 0===c||c,f=n.reconnect_interval,l=void 0===f?1e3:f,p=n.max_reconnects,h=void 0===p?5:p,v=arguments.length>2?arguments[2]:void 0;return(0,o.default)(this,r),t.call(this,u.default,e,{autoconnect:a,reconnect:s,reconnect_interval:l,max_reconnects:h},v)}return r}(n(r(1505)).default);t.Client=f},1325:function(e,t,r){"use strict";var n=r(240).v4,o=r(1507),i=function e(t,r){if(!(this instanceof e))return new e(t,r);r||(r={}),this.options={reviver:"undefined"!==typeof r.reviver?r.reviver:null,replacer:"undefined"!==typeof r.replacer?r.replacer:null,generator:"undefined"!==typeof r.generator?r.generator:function(){return n()},version:"undefined"!==typeof r.version?r.version:2,notificationIdNull:"boolean"===typeof r.notificationIdNull&&r.notificationIdNull},this.callServer=t};e.exports=i,i.prototype.request=function(e,t,r,n){var i,a=this,c=null,u=Array.isArray(e)&&"function"===typeof t;if(1===this.options.version&&u)throw new TypeError("JSON-RPC 1.0 does not support batching");if(u||!u&&e&&"object"===typeof e&&"function"===typeof t)n=t,c=e;else{"function"===typeof r&&(n=r,r=void 0);var s="function"===typeof n;try{c=o(e,t,r,{generator:this.options.generator,version:this.options.version,notificationIdNull:this.options.notificationIdNull})}catch(f){if(s)return n(f);throw f}if(!s)return c}try{i=JSON.stringify(c,this.options.replacer)}catch(f){return n(f)}return this.callServer(i,(function(e,t){a._parseResponse(e,t,n)})),c},i.prototype._parseResponse=function(e,t,r){if(e)r(e);else{if(!t)return r();var n;try{n=JSON.parse(t,this.options.reviver)}catch(e){return r(e)}if(3===r.length){if(Array.isArray(n)){var o=function(e){return"undefined"!==typeof e.error};return r(null,n.filter(o),n.filter((function(e){return!o(e)})))}return r(null,n.error,n.result)}r(null,n)}}},1336:function(e,t,r){"use strict";r.d(t,"a",(function(){return q})),r.d(t,"b",(function(){return L})),r.d(t,"c",(function(){return C})),r.d(t,"d",(function(){return D})),r.d(t,"e",(function(){return Y})),r.d(t,"f",(function(){return R})),r.d(t,"g",(function(){return U})),r.d(t,"h",(function(){return J})),r.d(t,"i",(function(){return z})),r.d(t,"j",(function(){return F})),r.d(t,"k",(function(){return W})),r.d(t,"l",(function(){return G})),r.d(t,"m",(function(){return H})),r.d(t,"n",(function(){return K})),r.d(t,"o",(function(){return Q})),r.d(t,"p",(function(){return V})),r.d(t,"q",(function(){return X}));var n=r(368),o=r(450),i=r(191),a=r(369);var c=r(30),u=r(104),s=r(1312),f=r(84),l=r(1337),p=r(7),h=r(6),v=r(10),d=r(11),y=r(12),b=r(127),m=r(1),g=r.n(m),w=["message"],x=g.a.mark(S),O=g.a.mark(P),k=function(e){Object(d.a)(r,e);var t=Object(y.a)(r);function r(e,n){var o,i;Object(h.a)(this,r);var a=e.message,c=Object(l.a)(e,w),u=e.path,s=0===u.length?a:"At path: "+u.join(".")+" -- "+a;return o=t.call(this,s),Object.assign(Object(v.a)(o),c),o.name=o.constructor.name,o.failures=function(){var t;return null!=(t=i)?t:i=[e].concat(Object(f.a)(n()))},o}return Object(p.a)(r)}(Object(b.a)(TypeError));function _(e){return"object"===typeof e&&null!=e}function j(e){return"string"===typeof e?JSON.stringify(e):""+e}function A(e){var t=e.next(),r=t.done,n=t.value;return r?void 0:n}function E(e,t,r,n){if(!0!==e){!1===e?e={}:"string"===typeof e&&(e={message:e});var o=t.path,i=t.branch,a=r.type,c=e,u=c.refinement,f=c.message,l=void 0===f?"Expected a value of type `"+a+"`"+(u?" with refinement `"+u+"`":"")+", but received: `"+j(n)+"`":f;return Object(s.a)(Object(s.a)({value:n,type:a,refinement:u,key:o[o.length-1],path:o,branch:i},e),{},{message:l})}}function S(e,t,r,n){var o,i,a,c;return g.a.wrap((function(s){for(;;)switch(s.prev=s.next){case 0:_(f=e)&&"function"===typeof f[Symbol.iterator]||(e=[e]),o=Object(u.a)(e),s.prev=2,o.s();case 4:if((i=o.n()).done){s.next=12;break}if(a=i.value,!(c=E(a,t,r,n))){s.next=10;break}return s.next=10,c;case 10:s.next=4;break;case 12:s.next=17;break;case 14:s.prev=14,s.t0=s.catch(2),o.e(s.t0);case 17:return s.prev=17,o.f(),s.finish(17);case 20:case"end":return s.stop()}var f}),x,null,[[2,14,17,20]])}function P(e,t){var r,n,o,i,a,s,l,p,h,v,d,y,b,m,w,x,k,j,A,E,S,B,C,R,M,N,T,q,L=arguments;return g.a.wrap((function(g){for(;;)switch(g.prev=g.next){case 0:if(r=L.length>2&&void 0!==L[2]?L[2]:{},n=r.path,o=void 0===n?[]:n,i=r.branch,a=void 0===i?[e]:i,s=r.coerce,l=void 0!==s&&s,p=r.mask,h=void 0!==p&&p,v={path:o,branch:a},l&&(e=t.coercer(e,v),h&&"type"!==t.type&&_(t.schema)&&_(e)&&!Array.isArray(e)))for(d in e)void 0===t.schema[d]&&delete e[d];y=!0,b=Object(u.a)(t.validator(e,v)),g.prev=6,b.s();case 8:if((m=b.n()).done){g.next=15;break}return w=m.value,y=!1,g.next=13,[w,void 0];case 13:g.next=8;break;case 15:g.next=20;break;case 17:g.prev=17,g.t0=g.catch(6),b.e(g.t0);case 20:return g.prev=20,b.f(),g.finish(20);case 23:x=Object(u.a)(t.entries(e,v)),g.prev=24,x.s();case 26:if((k=x.n()).done){g.next=53;break}j=Object(c.a)(k.value,3),A=j[0],E=j[1],S=j[2],B=P(E,S,{path:void 0===A?o:[].concat(Object(f.a)(o),[A]),branch:void 0===A?a:[].concat(Object(f.a)(a),[E]),coerce:l,mask:h}),C=Object(u.a)(B),g.prev=30,C.s();case 32:if((R=C.n()).done){g.next=43;break}if(!(M=R.value)[0]){g.next=40;break}return y=!1,g.next=38,[M[0],void 0];case 38:g.next=41;break;case 40:l&&(E=M[1],void 0===A?e=E:e instanceof Map?e.set(A,E):e instanceof Set?e.add(E):_(e)&&(e[A]=E));case 41:g.next=32;break;case 43:g.next=48;break;case 45:g.prev=45,g.t1=g.catch(30),C.e(g.t1);case 48:return g.prev=48,C.f(),g.finish(48);case 51:g.next=26;break;case 53:g.next=58;break;case 55:g.prev=55,g.t2=g.catch(24),x.e(g.t2);case 58:return g.prev=58,x.f(),g.finish(58);case 61:if(!y){g.next=80;break}N=Object(u.a)(t.refiner(e,v)),g.prev=63,N.s();case 65:if((T=N.n()).done){g.next=72;break}return q=T.value,y=!1,g.next=70,[q,void 0];case 70:g.next=65;break;case 72:g.next=77;break;case 74:g.prev=74,g.t3=g.catch(63),N.e(g.t3);case 77:return g.prev=77,N.f(),g.finish(77);case 80:if(!y){g.next=83;break}return g.next=83,[void 0,e];case 83:case"end":return g.stop()}}),O,null,[[6,17,20,23],[24,55,58,61],[30,45,48,51],[63,74,77,80]])}var B=function(){function e(t){var r=this;Object(h.a)(this,e);var n=t.type,o=t.schema,i=t.validator,a=t.refiner,c=t.coercer,u=void 0===c?function(e){return e}:c,s=t.entries,f=void 0===s?g.a.mark((function e(){return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:case"end":return e.stop()}}),e)})):s;this.type=n,this.schema=o,this.entries=f,this.coercer=u,this.validator=i?function(e,t){return S(i(e,t),t,r,e)}:function(){return[]},this.refiner=a?function(e,t){return S(a(e,t),t,r,e)}:function(){return[]}}return Object(p.a)(e,[{key:"assert",value:function(e){return C(e,this)}},{key:"create",value:function(e){return R(e,this)}},{key:"is",value:function(e){return M(e,this)}},{key:"mask",value:function(e){return function(e,t){var r=N(e,t,{coerce:!0,mask:!0});if(r[0])throw r[0];return r[1]}(e,this)}},{key:"validate",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return N(e,this,t)}}]),e}();function C(e,t){var r=N(e,t);if(r[0])throw r[0]}function R(e,t){var r=N(e,t,{coerce:!0});if(r[0])throw r[0];return r[1]}function M(e,t){return!N(e,t)[0]}function N(e,t){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},n=P(e,t,r),o=A(n);if(o[0]){var i=new k(o[0],g.a.mark((function e(){var t,r,o;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t=Object(u.a)(n),e.prev=1,t.s();case 3:if((r=t.n()).done){e.next=10;break}if(!(o=r.value)[0]){e.next=8;break}return e.next=8,o[0];case 8:e.next=3;break;case 10:e.next=15;break;case 12:e.prev=12,e.t0=e.catch(1),t.e(e.t0);case 15:return e.prev=15,t.f(),e.finish(15);case 18:case"end":return e.stop()}}),e,null,[[1,12,15,18]])})));return[i,void 0]}var a=o[1];return[void 0,a]}function T(e,t){return new B({type:e,schema:null,validator:t})}function q(){return T("any",(function(){return!0}))}function L(e){return new B({type:"array",schema:e,entries:g.a.mark((function t(r){var n,o,i,a,s;return g.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!e||!Array.isArray(r)){t.next=18;break}n=Object(u.a)(r.entries()),t.prev=2,n.s();case 4:if((o=n.n()).done){t.next=10;break}return i=Object(c.a)(o.value,2),a=i[0],s=i[1],t.next=8,[a,s,e];case 8:t.next=4;break;case 10:t.next=15;break;case 12:t.prev=12,t.t0=t.catch(2),n.e(t.t0);case 15:return t.prev=15,n.f(),t.finish(15);case 18:case"end":return t.stop()}}),t,null,[[2,12,15,18]])})),coercer:function(e){return Array.isArray(e)?e.slice():e},validator:function(e){return Array.isArray(e)||"Expected an array value, but received: "+j(e)}})}function D(){return T("boolean",(function(e){return"boolean"===typeof e}))}function U(e){return T("instance",(function(t){return t instanceof e||"Expected a `"+e.name+"` instance, but received: "+j(t)}))}function J(e){var t=j(e),r=typeof e;return new B({type:"literal",schema:"string"===r||"number"===r||"boolean"===r?e:null,validator:function(r){return r===e||"Expected the literal `"+t+"`, but received: "+j(r)}})}function I(){return T("never",(function(){return!1}))}function z(e){return new B(Object(s.a)(Object(s.a)({},e),{},{validator:function(t,r){return null===t||e.validator(t,r)},refiner:function(t,r){return null===t||e.refiner(t,r)}}))}function F(){return T("number",(function(e){return"number"===typeof e&&!isNaN(e)||"Expected a number, but received: "+j(e)}))}function W(e){return new B(Object(s.a)(Object(s.a)({},e),{},{validator:function(t,r){return void 0===t||e.validator(t,r)},refiner:function(t,r){return void 0===t||e.refiner(t,r)}}))}function G(e,t){return new B({type:"record",schema:null,entries:g.a.mark((function r(n){var o,i;return g.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:if(!_(n)){r.next=11;break}r.t0=g.a.keys(n);case 2:if((r.t1=r.t0()).done){r.next=11;break}return o=r.t1.value,i=n[o],r.next=7,[o,o,e];case 7:return r.next=9,[o,i,t];case 9:r.next=2;break;case 11:case"end":return r.stop()}}),r)})),validator:function(e){return _(e)||"Expected an object, but received: "+j(e)}})}function H(){return T("string",(function(e){return"string"===typeof e||"Expected a string, but received: "+j(e)}))}function K(e){var t=I();return new B({type:"tuple",schema:null,entries:g.a.mark((function r(n){var o,i;return g.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:if(!Array.isArray(n)){r.next=9;break}o=Math.max(e.length,n.length),i=0;case 3:if(!(i<o)){r.next=9;break}return r.next=6,[i,n[i],e[i]||t];case 6:i++,r.next=3;break;case 9:case"end":return r.stop()}}),r)})),validator:function(e){return Array.isArray(e)||"Expected an array, but received: "+j(e)}})}function Q(e){var t=Object.keys(e);return new B({type:"type",schema:e,entries:g.a.mark((function r(n){var o,i,a;return g.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:if(!_(n)){r.next=18;break}o=Object(u.a)(t),r.prev=2,o.s();case 4:if((i=o.n()).done){r.next=10;break}return a=i.value,r.next=8,[a,n[a],e[a]];case 8:r.next=4;break;case 10:r.next=15;break;case 12:r.prev=12,r.t0=r.catch(2),o.e(r.t0);case 15:return r.prev=15,o.f(),r.finish(15);case 18:case"end":return r.stop()}}),r,null,[[2,12,15,18]])})),validator:function(e){return _(e)||"Expected an object, but received: "+j(e)}})}function V(e){var t=e.map((function(e){return e.type})).join(" | ");return new B({type:"union",schema:null,validator:function(r,s){var f,l,p=[],h=Object(u.a)(e);try{for(h.s();!(f=h.n()).done;){var v=P(r,f.value,s),d=(l=v,Object(n.a)(l)||Object(o.a)(l)||Object(i.a)(l)||Object(a.a)()).slice(0);if(!Object(c.a)(d,1)[0][0])return[];var y,b=Object(u.a)(d);try{for(b.s();!(y=b.n()).done;){var m=Object(c.a)(y.value,1)[0];m&&p.push(m)}}catch(g){b.e(g)}finally{b.f()}}}catch(g){h.e(g)}finally{h.f()}return["Expected the value to satisfy a union of `"+t+"`, but received: "+j(r)].concat(p)}})}function X(){return T("unknown",(function(){return!0}))}function Y(e,t,r){return new B(Object(s.a)(Object(s.a)({},e),{},{coercer:function(n,o){return M(n,t)?e.coercer(r(n,o),o):e.coercer(n,o)}}))}},1337:function(e,t,r){"use strict";function n(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}r.d(t,"a",(function(){return n}))},1386:function(e,t,r){"use strict";var n=Object.prototype.hasOwnProperty,o="~";function i(){}function a(e,t,r){this.fn=e,this.context=t,this.once=r||!1}function c(e,t,r,n,i){if("function"!==typeof r)throw new TypeError("The listener must be a function");var c=new a(r,n||e,i),u=o?o+t:t;return e._events[u]?e._events[u].fn?e._events[u]=[e._events[u],c]:e._events[u].push(c):(e._events[u]=c,e._eventsCount++),e}function u(e,t){0===--e._eventsCount?e._events=new i:delete e._events[t]}function s(){this._events=new i,this._eventsCount=0}Object.create&&(i.prototype=Object.create(null),(new i).__proto__||(o=!1)),s.prototype.eventNames=function(){var e,t,r=[];if(0===this._eventsCount)return r;for(t in e=this._events)n.call(e,t)&&r.push(o?t.slice(1):t);return Object.getOwnPropertySymbols?r.concat(Object.getOwnPropertySymbols(e)):r},s.prototype.listeners=function(e){var t=o?o+e:e,r=this._events[t];if(!r)return[];if(r.fn)return[r.fn];for(var n=0,i=r.length,a=new Array(i);n<i;n++)a[n]=r[n].fn;return a},s.prototype.listenerCount=function(e){var t=o?o+e:e,r=this._events[t];return r?r.fn?1:r.length:0},s.prototype.emit=function(e,t,r,n,i,a){var c=o?o+e:e;if(!this._events[c])return!1;var u,s,f=this._events[c],l=arguments.length;if(f.fn){switch(f.once&&this.removeListener(e,f.fn,void 0,!0),l){case 1:return f.fn.call(f.context),!0;case 2:return f.fn.call(f.context,t),!0;case 3:return f.fn.call(f.context,t,r),!0;case 4:return f.fn.call(f.context,t,r,n),!0;case 5:return f.fn.call(f.context,t,r,n,i),!0;case 6:return f.fn.call(f.context,t,r,n,i,a),!0}for(s=1,u=new Array(l-1);s<l;s++)u[s-1]=arguments[s];f.fn.apply(f.context,u)}else{var p,h=f.length;for(s=0;s<h;s++)switch(f[s].once&&this.removeListener(e,f[s].fn,void 0,!0),l){case 1:f[s].fn.call(f[s].context);break;case 2:f[s].fn.call(f[s].context,t);break;case 3:f[s].fn.call(f[s].context,t,r);break;case 4:f[s].fn.call(f[s].context,t,r,n);break;default:if(!u)for(p=1,u=new Array(l-1);p<l;p++)u[p-1]=arguments[p];f[s].fn.apply(f[s].context,u)}}return!0},s.prototype.on=function(e,t,r){return c(this,e,t,r,!1)},s.prototype.once=function(e,t,r){return c(this,e,t,r,!0)},s.prototype.removeListener=function(e,t,r,n){var i=o?o+e:e;if(!this._events[i])return this;if(!t)return u(this,i),this;var a=this._events[i];if(a.fn)a.fn!==t||n&&!a.once||r&&a.context!==r||u(this,i);else{for(var c=0,s=[],f=a.length;c<f;c++)(a[c].fn!==t||n&&!a[c].once||r&&a[c].context!==r)&&s.push(a[c]);s.length?this._events[i]=1===s.length?s[0]:s:u(this,i)}return this},s.prototype.removeAllListeners=function(e){var t;return e?(t=o?o+e:e,this._events[t]&&u(this,t)):(this._events=new i,this._eventsCount=0),this},s.prototype.off=s.prototype.removeListener,s.prototype.addListener=s.prototype.on,s.prefixed=o,s.EventEmitter=s,e.exports=s},1499:function(e,t,r){"use strict";var n=r(26).Buffer;e.exports=function(e){if(e.length>=255)throw new TypeError("Alphabet too long");for(var t=new Uint8Array(256),r=0;r<t.length;r++)t[r]=255;for(var o=0;o<e.length;o++){var i=e.charAt(o),a=i.charCodeAt(0);if(255!==t[a])throw new TypeError(i+" is ambiguous");t[a]=o}var c=e.length,u=e.charAt(0),s=Math.log(c)/Math.log(256),f=Math.log(256)/Math.log(c);function l(e){if("string"!==typeof e)throw new TypeError("Expected String");if(0===e.length)return n.alloc(0);for(var r=0,o=0,i=0;e[r]===u;)o++,r++;for(var a=(e.length-r)*s+1>>>0,f=new Uint8Array(a);e[r];){var l=t[e.charCodeAt(r)];if(255===l)return;for(var p=0,h=a-1;(0!==l||p<i)&&-1!==h;h--,p++)l+=c*f[h]>>>0,f[h]=l%256>>>0,l=l/256>>>0;if(0!==l)throw new Error("Non-zero carry");i=p,r++}for(var v=a-i;v!==a&&0===f[v];)v++;var d=n.allocUnsafe(o+(a-v));d.fill(0,0,o);for(var y=o;v!==a;)d[y++]=f[v++];return d}return{encode:function(t){if((Array.isArray(t)||t instanceof Uint8Array)&&(t=n.from(t)),!n.isBuffer(t))throw new TypeError("Expected Buffer");if(0===t.length)return"";for(var r=0,o=0,i=0,a=t.length;i!==a&&0===t[i];)i++,r++;for(var s=(a-i)*f+1>>>0,l=new Uint8Array(s);i!==a;){for(var p=t[i],h=0,v=s-1;(0!==p||h<o)&&-1!==v;v--,h++)p+=256*l[v]>>>0,l[v]=p%c>>>0,p=p/c>>>0;if(0!==p)throw new Error("Non-zero carry");o=h,i++}for(var d=s-o;d!==s&&0===l[d];)d++;for(var y=u.repeat(r);d<s;++d)y+=e.charAt(l[d]);return y},decodeUnsafe:l,decode:function(e){var t=l(e);if(t)return t;throw new Error("Non-base"+c+" character")}}}},1504:function(e,t,r){"use strict";var n=r(1324);Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t){return new f(e,t)};var o=n(r(69)),i=n(r(70)),a=n(r(75)),c=n(r(609)),u=n(r(199));function s(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,n=(0,u.default)(e);if(t){var o=(0,u.default)(this).constructor;r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments);return(0,c.default)(this,r)}}var f=function(e){(0,a.default)(r,e);var t=s(r);function r(e,n,i){var a;return(0,o.default)(this,r),(a=t.call(this)).socket=new window.WebSocket(e,i),a.socket.onopen=function(){return a.emit("open")},a.socket.onmessage=function(e){return a.emit("message",e.data)},a.socket.onerror=function(e){return a.emit("error",e)},a.socket.onclose=function(e){a.emit("close",e.code,e.reason)},a}return(0,i.default)(r,[{key:"send",value:function(e,t,r){var n=r||t;try{this.socket.send(e),n()}catch(o){n(o)}}},{key:"close",value:function(e,t){this.socket.close(e,t)}},{key:"addEventListener",value:function(e,t,r){this.socket.addEventListener(e,t,r)}}]),r}(r(1386).EventEmitter)},1505:function(e,t,r){"use strict";(function(e){var n=r(1324);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=n(r(1)),i=n(r(85)),a=n(r(610)),c=n(r(69)),u=n(r(70)),s=n(r(75)),f=n(r(609)),l=n(r(199)),p=r(1386),h=n(r(1506));function v(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,n=(0,l.default)(e);if(t){var o=(0,l.default)(this).constructor;r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments);return(0,f.default)(this,r)}}var d=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var o=0;for(n=Object.getOwnPropertySymbols(e);o<n.length;o++)t.indexOf(n[o])<0&&Object.prototype.propertyIsEnumerable.call(e,n[o])&&(r[n[o]]=e[n[o]])}return r},y=function(t){(0,s.default)(n,t);var r=v(n);function n(e){var t,o=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"ws://localhost:8080",i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},a=arguments.length>3?arguments[3]:void 0;(0,c.default)(this,n);var u=i.autoconnect,s=void 0===u||u,f=i.reconnect,l=void 0===f||f,p=i.reconnect_interval,h=void 0===p?1e3:p,v=i.max_reconnects,y=void 0===v?5:v,b=d(i,["autoconnect","reconnect","reconnect_interval","max_reconnects"]);return(t=r.call(this)).webSocketFactory=e,t.queue={},t.rpc_id=0,t.address=o,t.autoconnect=s,t.ready=!1,t.reconnect=l,t.reconnect_interval=h,t.max_reconnects=y,t.rest_options=b,t.current_reconnects=0,t.generate_request_id=a||function(){return++t.rpc_id},t.autoconnect&&t._connect(t.address,Object.assign({autoconnect:t.autoconnect,reconnect:t.reconnect,reconnect_interval:t.reconnect_interval,max_reconnects:t.max_reconnects},t.rest_options)),t}return(0,u.default)(n,[{key:"connect",value:function(){this.socket||this._connect(this.address,Object.assign({autoconnect:this.autoconnect,reconnect:this.reconnect,reconnect_interval:this.reconnect_interval,max_reconnects:this.max_reconnects},this.rest_options))}},{key:"call",value:function(e,t,r,n){var o=this;return n||"object"!==(0,a.default)(r)||(n=r,r=null),new Promise((function(i,a){if(!o.ready)return a(new Error("socket not ready"));var c=o.generate_request_id(e,t),u={jsonrpc:"2.0",method:e,params:t||null,id:c};o.socket.send(JSON.stringify(u),n,(function(e){if(e)return a(e);o.queue[c]={promise:[i,a]},r&&(o.queue[c].timeout=setTimeout((function(){delete o.queue[c],a(new Error("reply timeout"))}),r))}))}))}},{key:"login",value:function(){var e=(0,i.default)(o.default.mark((function e(t){var r;return o.default.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.call("rpc.login",t);case 2:if(r=e.sent){e.next=5;break}throw new Error("authentication failed");case 5:return e.abrupt("return",r);case 6:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"listMethods",value:function(){var e=(0,i.default)(o.default.mark((function e(){return o.default.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.call("__listMethods");case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"notify",value:function(e,t){var r=this;return new Promise((function(n,o){if(!r.ready)return o(new Error("socket not ready"));var i={jsonrpc:"2.0",method:e,params:t||null};r.socket.send(JSON.stringify(i),(function(e){if(e)return o(e);n()}))}))}},{key:"subscribe",value:function(){var e=(0,i.default)(o.default.mark((function e(t){var r;return o.default.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"string"===typeof t&&(t=[t]),e.next=3,this.call("rpc.on",t);case 3:if(r=e.sent,"string"!==typeof t||"ok"===r[t]){e.next=6;break}throw new Error("Failed subscribing to an event '"+t+"' with: "+r[t]);case 6:return e.abrupt("return",r);case 7:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"unsubscribe",value:function(){var e=(0,i.default)(o.default.mark((function e(t){var r;return o.default.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"string"===typeof t&&(t=[t]),e.next=3,this.call("rpc.off",t);case 3:if(r=e.sent,"string"!==typeof t||"ok"===r[t]){e.next=6;break}throw new Error("Failed unsubscribing from an event with: "+r);case 6:return e.abrupt("return",r);case 7:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"close",value:function(e,t){this.socket.close(e||1e3,t)}},{key:"_connect",value:function(t,r){var n=this;this.socket=this.webSocketFactory(t,r),this.socket.addEventListener("open",(function(){n.ready=!0,n.emit("open"),n.current_reconnects=0})),this.socket.addEventListener("message",(function(t){var r=t.data;r instanceof ArrayBuffer&&(r=e.from(r).toString());try{r=h.default.parse(r)}catch(a){return}if(r.notification&&n.listeners(r.notification).length){if(!Object.keys(r.params).length)return n.emit(r.notification);var o=[r.notification];if(r.params.constructor===Object)o.push(r.params);else for(var i=0;i<r.params.length;i++)o.push(r.params[i]);return Promise.resolve().then((function(){n.emit.apply(n,o)}))}if(!n.queue[r.id])return r.method&&r.params?Promise.resolve().then((function(){n.emit(r.method,r.params)})):void 0;"error"in r==="result"in r&&n.queue[r.id].promise[1](new Error('Server response malformed. Response must include either "result" or "error", but not both.')),n.queue[r.id].timeout&&clearTimeout(n.queue[r.id].timeout),r.error?n.queue[r.id].promise[1](r.error):n.queue[r.id].promise[0](r.result),delete n.queue[r.id]})),this.socket.addEventListener("error",(function(e){return n.emit("error",e)})),this.socket.addEventListener("close",(function(e){var o=e.code,i=e.reason;n.ready&&setTimeout((function(){return n.emit("close",o,i)}),0),n.ready=!1,n.socket=void 0,1e3!==o&&(n.current_reconnects++,n.reconnect&&(n.max_reconnects>n.current_reconnects||0===n.max_reconnects)&&setTimeout((function(){return n._connect(t,r)}),n.reconnect_interval))}))}}]),n}(p.EventEmitter);t.default=y}).call(this,r(20).Buffer)},1506:function(e,t){var r="~",n="\\x"+("0"+r.charCodeAt(0).toString(16)).slice(-2),o="\\"+n,i=new RegExp(n,"g"),a=new RegExp(o,"g"),c=new RegExp("(?:^|([^\\\\]))"+o),u=[].indexOf||function(e){for(var t=this.length;t--&&this[t]!==e;);return t},s=String;function f(e,t,n){return t instanceof Array?function(e,t,r){for(var n=0,o=t.length;n<o;n++)t[n]=f(e,t[n],r);return t}(e,t,n):t instanceof s?t.length?n.hasOwnProperty(t)?n[t]:n[t]=function(e,t){for(var n=0,o=t.length;n<o;e=e[t[n++].replace(a,r)]);return e}(e,t.split(r)):e:t instanceof Object?function(e,t,r){for(var n in t)t.hasOwnProperty(n)&&(t[n]=f(e,t[n],r));return t}(e,t,n):t}var l={stringify:function(e,t,a,c){return l.parser.stringify(e,function(e,t,a){var c,s,f=!1,l=!!t,p=[],h=[e],v=[e],d=[a?r:"[Circular]"],y=e,b=1;return l&&(s="object"===typeof t?function(e,r){return""!==e&&t.indexOf(e)<0?void 0:r}:t),function(e,t){return l&&(t=s.call(this,e,t)),f?(y!==this&&(c=b-u.call(h,this)-1,b-=c,h.splice(b,h.length),p.splice(b-1,p.length),y=this),"object"===typeof t&&t?(u.call(h,t)<0&&h.push(y=t),b=h.length,(c=u.call(v,t))<0?(c=v.push(t)-1,a?(p.push((""+e).replace(i,n)),d[c]=r+p.join(r)):d[c]=d[0]):t=d[c]):"string"===typeof t&&a&&(t=t.replace(n,o).replace(r,n))):f=!0,t}}(e,t,!c),a)},parse:function(e,t){return l.parser.parse(e,function(e){return function(t,i){var a="string"===typeof i;return a&&i.charAt(0)===r?new s(i.slice(1)):(""===t&&(i=f(i,i,{})),a&&(i=i.replace(c,"$1~").replace(o,n)),e?e.call(this,t,i):i)}}(t))},parser:JSON};e.exports=l},1507:function(e,t,r){"use strict";var n=r(240).v4;e.exports=function(e,t,r,o){if("string"!==typeof e)throw new TypeError(e+" must be a string");var i="number"===typeof(o=o||{}).version?o.version:2;if(1!==i&&2!==i)throw new TypeError(i+" must be 1 or 2");var a={method:e};if(2===i&&(a.jsonrpc="2.0"),t){if("object"!==typeof t&&!Array.isArray(t))throw new TypeError(t+" must be an object, array or omitted");a.params=t}if("undefined"===typeof r){var c="function"===typeof o.generator?o.generator:function(){return n()};a.id=c(a,o)}else 2===i&&null===r?o.notificationIdNull&&(a.id=null):a.id=r;return a}}}]);
//# sourceMappingURL=2.bf1ada0b.chunk.js.map