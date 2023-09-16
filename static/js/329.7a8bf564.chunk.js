/*! For license information please see 329.7a8bf564.chunk.js.LICENSE.txt */
"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[329],{242:function(t,r,e){e.d(r,{Df:function(){return h},Pg:function(){return f},V0:function(){return d},tx:function(){return v},zv:function(){return p}});var n,o,i,a,c,u=e(861);function s(){s=function(){return r};var t,r={},e=Object.prototype,n=e.hasOwnProperty,o=Object.defineProperty||function(t,r,e){t[r]=e.value},i="function"==typeof Symbol?Symbol:{},a=i.iterator||"@@iterator",c=i.asyncIterator||"@@asyncIterator",u=i.toStringTag||"@@toStringTag";function l(t,r,e){return Object.defineProperty(t,r,{value:e,enumerable:!0,configurable:!0,writable:!0}),t[r]}try{l({},"")}catch(t){l=function(t,r,e){return t[r]=e}}function h(t,r,e,n){var i=r&&r.prototype instanceof g?r:g,a=Object.create(i.prototype),c=new N(n||[]);return o(a,"_invoke",{value:k(t,e,c)}),a}function f(t,r,e){try{return{type:"normal",arg:t.call(r,e)}}catch(t){return{type:"throw",arg:t}}}r.wrap=h;var p="suspendedStart",v="executing",d="completed",y={};function g(){}function m(){}function w(){}var x={};l(x,a,(function(){return this}));var b=Object.getPrototypeOf,L=b&&b(b(S([])));L&&L!==e&&n.call(L,a)&&(x=L);var j=w.prototype=g.prototype=Object.create(x);function E(t){["next","throw","return"].forEach((function(r){l(t,r,(function(t){return this._invoke(r,t)}))}))}function _(t,r){function e(o,i,a,c){var u=f(t[o],t,i);if("throw"!==u.type){var s=u.arg,l=s.value;return l&&"object"==typeof l&&n.call(l,"__await")?r.resolve(l.__await).then((function(t){e("next",t,a,c)}),(function(t){e("throw",t,a,c)})):r.resolve(l).then((function(t){s.value=t,a(s)}),(function(t){return e("throw",t,a,c)}))}c(u.arg)}var i;o(this,"_invoke",{value:function(t,n){function o(){return new r((function(r,o){e(t,n,r,o)}))}return i=i?i.then(o,o):o()}})}function k(r,e,n){var o=p;return function(i,a){if(o===v)throw new Error("Generator is already running");if(o===d){if("throw"===i)throw a;return{value:t,done:!0}}for(n.method=i,n.arg=a;;){var c=n.delegate;if(c){var u=O(c,n);if(u){if(u===y)continue;return u}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(o===p)throw o=d,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);o=v;var s=f(r,e,n);if("normal"===s.type){if(o=n.done?d:"suspendedYield",s.arg===y)continue;return{value:s.arg,done:n.done}}"throw"===s.type&&(o=d,n.method="throw",n.arg=s.arg)}}}function O(r,e){var n=e.method,o=r.iterator[n];if(o===t)return e.delegate=null,"throw"===n&&r.iterator.return&&(e.method="return",e.arg=t,O(r,e),"throw"===e.method)||"return"!==n&&(e.method="throw",e.arg=new TypeError("The iterator does not provide a '"+n+"' method")),y;var i=f(o,r.iterator,e.arg);if("throw"===i.type)return e.method="throw",e.arg=i.arg,e.delegate=null,y;var a=i.arg;return a?a.done?(e[r.resultName]=a.value,e.next=r.nextLoc,"return"!==e.method&&(e.method="next",e.arg=t),e.delegate=null,y):a:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,y)}function G(t){var r={tryLoc:t[0]};1 in t&&(r.catchLoc=t[1]),2 in t&&(r.finallyLoc=t[2],r.afterLoc=t[3]),this.tryEntries.push(r)}function P(t){var r=t.completion||{};r.type="normal",delete r.arg,t.completion=r}function N(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(G,this),this.reset(!0)}function S(r){if(r||""===r){var e=r[a];if(e)return e.call(r);if("function"==typeof r.next)return r;if(!isNaN(r.length)){var o=-1,i=function e(){for(;++o<r.length;)if(n.call(r,o))return e.value=r[o],e.done=!1,e;return e.value=t,e.done=!0,e};return i.next=i}}throw new TypeError(typeof r+" is not iterable")}return m.prototype=w,o(j,"constructor",{value:w,configurable:!0}),o(w,"constructor",{value:m,configurable:!0}),m.displayName=l(w,u,"GeneratorFunction"),r.isGeneratorFunction=function(t){var r="function"==typeof t&&t.constructor;return!!r&&(r===m||"GeneratorFunction"===(r.displayName||r.name))},r.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,w):(t.__proto__=w,l(t,u,"GeneratorFunction")),t.prototype=Object.create(j),t},r.awrap=function(t){return{__await:t}},E(_.prototype),l(_.prototype,c,(function(){return this})),r.AsyncIterator=_,r.async=function(t,e,n,o,i){void 0===i&&(i=Promise);var a=new _(h(t,e,n,o),i);return r.isGeneratorFunction(e)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},E(j),l(j,u,"Generator"),l(j,a,(function(){return this})),l(j,"toString",(function(){return"[object Generator]"})),r.keys=function(t){var r=Object(t),e=[];for(var n in r)e.push(n);return e.reverse(),function t(){for(;e.length;){var n=e.pop();if(n in r)return t.value=n,t.done=!1,t}return t.done=!0,t}},r.values=S,N.prototype={constructor:N,reset:function(r){if(this.prev=0,this.next=0,this.sent=this._sent=t,this.done=!1,this.delegate=null,this.method="next",this.arg=t,this.tryEntries.forEach(P),!r)for(var e in this)"t"===e.charAt(0)&&n.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=t)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(r){if(this.done)throw r;var e=this;function o(n,o){return c.type="throw",c.arg=r,e.next=n,o&&(e.method="next",e.arg=t),!!o}for(var i=this.tryEntries.length-1;i>=0;--i){var a=this.tryEntries[i],c=a.completion;if("root"===a.tryLoc)return o("end");if(a.tryLoc<=this.prev){var u=n.call(a,"catchLoc"),s=n.call(a,"finallyLoc");if(u&&s){if(this.prev<a.catchLoc)return o(a.catchLoc,!0);if(this.prev<a.finallyLoc)return o(a.finallyLoc)}else if(u){if(this.prev<a.catchLoc)return o(a.catchLoc,!0)}else{if(!s)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return o(a.finallyLoc)}}}},abrupt:function(t,r){for(var e=this.tryEntries.length-1;e>=0;--e){var o=this.tryEntries[e];if(o.tryLoc<=this.prev&&n.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=r&&r<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=r,i?(this.method="next",this.next=i.finallyLoc,y):this.complete(a)},complete:function(t,r){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&r&&(this.next=r),y},finish:function(t){for(var r=this.tryEntries.length-1;r>=0;--r){var e=this.tryEntries[r];if(e.finallyLoc===t)return this.complete(e.completion,e.afterLoc),P(e),y}},catch:function(t){for(var r=this.tryEntries.length-1;r>=0;--r){var e=this.tryEntries[r];if(e.tryLoc===t){var n=e.completion;if("throw"===n.type){var o=n.arg;P(e)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(r,e,n){return this.delegate={iterator:S(r),resultName:e,nextLoc:n},"next"===this.method&&(this.arg=t),y}},r}var l=e(243).Z.create({baseURL:"https://api.themoviedb.org/3/",params:{api_key:"c182bccb0f04ed3e706aad2e3b8d6eae",language:"en-US"},headers:{"X-Requested-With":"XMLHttpRequest"}}),h=function(){return(n=n||(0,u.Z)(s().mark((function t(){var r;return s().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,l.get("/trending/movie/day");case 3:return r=t.sent,t.abrupt("return",r.data.results);case 7:t.prev=7,t.t0=t.catch(0),console.log(t.t0);case 10:case"end":return t.stop()}}),t,null,[[0,7]])})))).apply(this,arguments)},f=function(t){return(o=o||(0,u.Z)(s().mark((function t(r){var e;return s().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,l.get("/movie/".concat(r));case 3:return e=t.sent,t.abrupt("return",e.data);case 7:t.prev=7,t.t0=t.catch(0),console.log(t.t0);case 10:case"end":return t.stop()}}),t,null,[[0,7]])})))).apply(this,arguments)},p=function(t){return(i=i||(0,u.Z)(s().mark((function t(r){var e;return s().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,l.get("/movie/".concat(r,"/credits"));case 3:return e=t.sent,t.abrupt("return",e.data.cast);case 7:t.prev=7,t.t0=t.catch(0),console.log(t.t0);case 10:case"end":return t.stop()}}),t,null,[[0,7]])})))).apply(this,arguments)},v=function(t){return(a=a||(0,u.Z)(s().mark((function t(r){var e;return s().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,l.get("/movie/".concat(r,"/reviews"));case 3:return e=t.sent,t.abrupt("return",e.data.results);case 7:t.prev=7,t.t0=t.catch(0),console.log(t.t0);case 10:case"end":return t.stop()}}),t,null,[[0,7]])})))).apply(this,arguments)},d=function(t){return(c=c||(0,u.Z)(s().mark((function t(r){var e;return s().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,l.get("/search/movie",{params:{query:r}});case 3:return e=t.sent,t.abrupt("return",e.data.results);case 7:t.prev=7,t.t0=t.catch(0),console.log(t.t0);case 10:case"end":return t.stop()}}),t,null,[[0,7]])})))).apply(this,arguments)}},329:function(t,r,e){e.r(r),e.d(r,{default:function(){return L}});var n,o,i=e(861),a=e(439),c=e(494),u=e(791),s=e(689),l=e(881),h=e(87),f=e(184),p=function(){var t,r,e=(0,s.TH)();return(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)("hr",{}),(0,f.jsx)("h4",{children:"Additional information"}),(0,f.jsxs)("ul",{children:[(0,f.jsx)("li",{children:(0,f.jsx)(h.rU,{to:"cast",state:{from:null===(t=e.state)||void 0===t?void 0:t.from},children:"Cast"})}),(0,f.jsx)("li",{children:(0,f.jsx)(h.rU,{to:"reviews",state:{from:null===(r=e.state)||void 0===r?void 0:r.from},children:"Reviews"})})]}),(0,f.jsx)("hr",{}),(0,f.jsx)(s.j3,{})]})},v=e(168),d=e(867),y=d.ZP.div(n||(n=(0,v.Z)(["\n  display: flex;\n  align-items: flex-start;\n  gap: 30px;\n  padding: 0;\n"]))),g=d.ZP.div(o||(o=(0,v.Z)(["\n  margin-left: 15px;\n  max-width: 100%;\n"]))),m=function(t){var r=t.movie,e=r.poster_path,n=r.title,o=r.release_date,i=r.vote_average,a=r.overview,c=r.genres;return(0,f.jsxs)(y,{children:[(0,f.jsx)("img",{src:e?"".concat("https://image.tmdb.org/t/p/w500/").concat(e):"https://images.squarespace-cdn.com/content/v1/580b43a95016e1a9c82a3a32/2c28b55a-b2e2-45ae-9fef-797715b04fdf/Dark+Square.png",alt:"".concat(n),height:"500"}),(0,f.jsxs)(g,{children:[(0,f.jsxs)("h2",{children:[n," (",o.slice(0,4),")"]}),(0,f.jsxs)("p",{children:["User score: ",Math.floor(10*i),"%"]}),(0,f.jsx)("h3",{children:"Overview"}),(0,f.jsx)("p",{children:a}),(0,f.jsx)("h3",{children:"Genres"}),(0,f.jsx)("ul",{children:c.map((function(t){var r=t.id,e=t.name;return(0,f.jsx)("li",{children:e},r)}))})]})]})},w=e(598),x=e(242);function b(){b=function(){return r};var t,r={},e=Object.prototype,n=e.hasOwnProperty,o=Object.defineProperty||function(t,r,e){t[r]=e.value},i="function"==typeof Symbol?Symbol:{},a=i.iterator||"@@iterator",c=i.asyncIterator||"@@asyncIterator",u=i.toStringTag||"@@toStringTag";function s(t,r,e){return Object.defineProperty(t,r,{value:e,enumerable:!0,configurable:!0,writable:!0}),t[r]}try{s({},"")}catch(t){s=function(t,r,e){return t[r]=e}}function l(t,r,e,n){var i=r&&r.prototype instanceof y?r:y,a=Object.create(i.prototype),c=new N(n||[]);return o(a,"_invoke",{value:k(t,e,c)}),a}function h(t,r,e){try{return{type:"normal",arg:t.call(r,e)}}catch(t){return{type:"throw",arg:t}}}r.wrap=l;var f="suspendedStart",p="executing",v="completed",d={};function y(){}function g(){}function m(){}var w={};s(w,a,(function(){return this}));var x=Object.getPrototypeOf,L=x&&x(x(S([])));L&&L!==e&&n.call(L,a)&&(w=L);var j=m.prototype=y.prototype=Object.create(w);function E(t){["next","throw","return"].forEach((function(r){s(t,r,(function(t){return this._invoke(r,t)}))}))}function _(t,r){function e(o,i,a,c){var u=h(t[o],t,i);if("throw"!==u.type){var s=u.arg,l=s.value;return l&&"object"==typeof l&&n.call(l,"__await")?r.resolve(l.__await).then((function(t){e("next",t,a,c)}),(function(t){e("throw",t,a,c)})):r.resolve(l).then((function(t){s.value=t,a(s)}),(function(t){return e("throw",t,a,c)}))}c(u.arg)}var i;o(this,"_invoke",{value:function(t,n){function o(){return new r((function(r,o){e(t,n,r,o)}))}return i=i?i.then(o,o):o()}})}function k(r,e,n){var o=f;return function(i,a){if(o===p)throw new Error("Generator is already running");if(o===v){if("throw"===i)throw a;return{value:t,done:!0}}for(n.method=i,n.arg=a;;){var c=n.delegate;if(c){var u=O(c,n);if(u){if(u===d)continue;return u}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(o===f)throw o=v,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);o=p;var s=h(r,e,n);if("normal"===s.type){if(o=n.done?v:"suspendedYield",s.arg===d)continue;return{value:s.arg,done:n.done}}"throw"===s.type&&(o=v,n.method="throw",n.arg=s.arg)}}}function O(r,e){var n=e.method,o=r.iterator[n];if(o===t)return e.delegate=null,"throw"===n&&r.iterator.return&&(e.method="return",e.arg=t,O(r,e),"throw"===e.method)||"return"!==n&&(e.method="throw",e.arg=new TypeError("The iterator does not provide a '"+n+"' method")),d;var i=h(o,r.iterator,e.arg);if("throw"===i.type)return e.method="throw",e.arg=i.arg,e.delegate=null,d;var a=i.arg;return a?a.done?(e[r.resultName]=a.value,e.next=r.nextLoc,"return"!==e.method&&(e.method="next",e.arg=t),e.delegate=null,d):a:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,d)}function G(t){var r={tryLoc:t[0]};1 in t&&(r.catchLoc=t[1]),2 in t&&(r.finallyLoc=t[2],r.afterLoc=t[3]),this.tryEntries.push(r)}function P(t){var r=t.completion||{};r.type="normal",delete r.arg,t.completion=r}function N(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(G,this),this.reset(!0)}function S(r){if(r||""===r){var e=r[a];if(e)return e.call(r);if("function"==typeof r.next)return r;if(!isNaN(r.length)){var o=-1,i=function e(){for(;++o<r.length;)if(n.call(r,o))return e.value=r[o],e.done=!1,e;return e.value=t,e.done=!0,e};return i.next=i}}throw new TypeError(typeof r+" is not iterable")}return g.prototype=m,o(j,"constructor",{value:m,configurable:!0}),o(m,"constructor",{value:g,configurable:!0}),g.displayName=s(m,u,"GeneratorFunction"),r.isGeneratorFunction=function(t){var r="function"==typeof t&&t.constructor;return!!r&&(r===g||"GeneratorFunction"===(r.displayName||r.name))},r.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,m):(t.__proto__=m,s(t,u,"GeneratorFunction")),t.prototype=Object.create(j),t},r.awrap=function(t){return{__await:t}},E(_.prototype),s(_.prototype,c,(function(){return this})),r.AsyncIterator=_,r.async=function(t,e,n,o,i){void 0===i&&(i=Promise);var a=new _(l(t,e,n,o),i);return r.isGeneratorFunction(e)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},E(j),s(j,u,"Generator"),s(j,a,(function(){return this})),s(j,"toString",(function(){return"[object Generator]"})),r.keys=function(t){var r=Object(t),e=[];for(var n in r)e.push(n);return e.reverse(),function t(){for(;e.length;){var n=e.pop();if(n in r)return t.value=n,t.done=!1,t}return t.done=!0,t}},r.values=S,N.prototype={constructor:N,reset:function(r){if(this.prev=0,this.next=0,this.sent=this._sent=t,this.done=!1,this.delegate=null,this.method="next",this.arg=t,this.tryEntries.forEach(P),!r)for(var e in this)"t"===e.charAt(0)&&n.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=t)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(r){if(this.done)throw r;var e=this;function o(n,o){return c.type="throw",c.arg=r,e.next=n,o&&(e.method="next",e.arg=t),!!o}for(var i=this.tryEntries.length-1;i>=0;--i){var a=this.tryEntries[i],c=a.completion;if("root"===a.tryLoc)return o("end");if(a.tryLoc<=this.prev){var u=n.call(a,"catchLoc"),s=n.call(a,"finallyLoc");if(u&&s){if(this.prev<a.catchLoc)return o(a.catchLoc,!0);if(this.prev<a.finallyLoc)return o(a.finallyLoc)}else if(u){if(this.prev<a.catchLoc)return o(a.catchLoc,!0)}else{if(!s)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return o(a.finallyLoc)}}}},abrupt:function(t,r){for(var e=this.tryEntries.length-1;e>=0;--e){var o=this.tryEntries[e];if(o.tryLoc<=this.prev&&n.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=r&&r<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=r,i?(this.method="next",this.next=i.finallyLoc,d):this.complete(a)},complete:function(t,r){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&r&&(this.next=r),d},finish:function(t){for(var r=this.tryEntries.length-1;r>=0;--r){var e=this.tryEntries[r];if(e.finallyLoc===t)return this.complete(e.completion,e.afterLoc),P(e),d}},catch:function(t){for(var r=this.tryEntries.length-1;r>=0;--r){var e=this.tryEntries[r];if(e.tryLoc===t){var n=e.completion;if("throw"===n.type){var o=n.arg;P(e)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(r,e,n){return this.delegate={iterator:S(r),resultName:e,nextLoc:n},"next"===this.method&&(this.arg=t),d}},r}var L=function(){var t,r,e=(0,s.UO)().movieId,n=(0,u.useState)(null),o=(0,a.Z)(n,2),h=o[0],v=o[1],d=(0,s.TH)();console.log(d);var y=null!==(t=null===(r=d.state)||void 0===r?void 0:r.from)&&void 0!==t?t:"/";return(0,u.useEffect)((function(){var t;!function(){(t=t||(0,i.Z)(b().mark((function t(){var r;return b().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,(0,x.Pg)(e);case 3:r=t.sent,v(r),t.next=10;break;case 7:t.prev=7,t.t0=t.catch(0),console.log(t.t0);case 10:case"end":return t.stop()}}),t,null,[[0,7]])})))).apply(this,arguments)}()}),[e]),h?(0,f.jsxs)("section",{children:[(0,f.jsxs)(w.lm,{to:y,children:[(0,f.jsx)(c.Fjg,{}),"Go back"]}),(0,f.jsx)(m,{movie:h}),(0,f.jsx)(p,{movie:h})]}):(0,f.jsx)(l.s5,{width:"80",strokeColor:"#3f51b5"})}}}]);
//# sourceMappingURL=329.7a8bf564.chunk.js.map