"use strict";(self.webpackChunksearch_google_books_api=self.webpackChunksearch_google_books_api||[]).push([[179],{255:(t,e,r)=>{r.d(e,{W:()=>a});r(294);const n={container:"container__container--SysAb"};var o=r(893);function a(t){var e=t.children;return(0,o.jsx)("div",{className:n.container,children:e})}},476:(t,e,r)=>{r.d(e,{T:()=>o,C:()=>a});var n=r(998),o=function(){return(0,n.I0)()},a=n.v9},801:(t,e,r)=>{var n,o=r(294),a=r(745),i=r(998),c=r(655),l=r(633),s=r(861);function u(t){return u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},u(t)}function f(){f=function(){return e};var t,e={},r=Object.prototype,n=r.hasOwnProperty,o=Object.defineProperty||function(t,e,r){t[e]=r.value},a="function"==typeof Symbol?Symbol:{},i=a.iterator||"@@iterator",c=a.asyncIterator||"@@asyncIterator",l=a.toStringTag||"@@toStringTag";function s(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{s({},"")}catch(t){s=function(t,e,r){return t[e]=r}}function h(t,e,r,n){var a=e&&e.prototype instanceof x?e:x,i=Object.create(a.prototype),c=new A(n||[]);return o(i,"_invoke",{value:E(t,r,c)}),i}function d(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}e.wrap=h;var v="suspendedStart",p="suspendedYield",y="executing",m="completed",g={};function x(){}function b(){}function j(){}var w={};s(w,i,(function(){return this}));var _=Object.getPrototypeOf,k=_&&_(_(B([])));k&&k!==r&&n.call(k,i)&&(w=k);var S=j.prototype=x.prototype=Object.create(w);function I(t){["next","throw","return"].forEach((function(e){s(t,e,(function(t){return this._invoke(e,t)}))}))}function L(t,e){function r(o,a,i,c){var l=d(t[o],t,a);if("throw"!==l.type){var s=l.arg,f=s.value;return f&&"object"==u(f)&&n.call(f,"__await")?e.resolve(f.__await).then((function(t){r("next",t,i,c)}),(function(t){r("throw",t,i,c)})):e.resolve(f).then((function(t){s.value=t,i(s)}),(function(t){return r("throw",t,i,c)}))}c(l.arg)}var a;o(this,"_invoke",{value:function(t,n){function o(){return new e((function(e,o){r(t,n,e,o)}))}return a=a?a.then(o,o):o()}})}function E(e,r,n){var o=v;return function(a,i){if(o===y)throw new Error("Generator is already running");if(o===m){if("throw"===a)throw i;return{value:t,done:!0}}for(n.method=a,n.arg=i;;){var c=n.delegate;if(c){var l=N(c,n);if(l){if(l===g)continue;return l}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(o===v)throw o=m,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);o=y;var s=d(e,r,n);if("normal"===s.type){if(o=n.done?m:p,s.arg===g)continue;return{value:s.arg,done:n.done}}"throw"===s.type&&(o=m,n.method="throw",n.arg=s.arg)}}}function N(e,r){var n=r.method,o=e.iterator[n];if(o===t)return r.delegate=null,"throw"===n&&e.iterator.return&&(r.method="return",r.arg=t,N(e,r),"throw"===r.method)||"return"!==n&&(r.method="throw",r.arg=new TypeError("The iterator does not provide a '"+n+"' method")),g;var a=d(o,e.iterator,r.arg);if("throw"===a.type)return r.method="throw",r.arg=a.arg,r.delegate=null,g;var i=a.arg;return i?i.done?(r[e.resultName]=i.value,r.next=e.nextLoc,"return"!==r.method&&(r.method="next",r.arg=t),r.delegate=null,g):i:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,g)}function O(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function C(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function A(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(O,this),this.reset(!0)}function B(e){if(e||""===e){var r=e[i];if(r)return r.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var o=-1,a=function r(){for(;++o<e.length;)if(n.call(e,o))return r.value=e[o],r.done=!1,r;return r.value=t,r.done=!0,r};return a.next=a}}throw new TypeError(u(e)+" is not iterable")}return b.prototype=j,o(S,"constructor",{value:j,configurable:!0}),o(j,"constructor",{value:b,configurable:!0}),b.displayName=s(j,l,"GeneratorFunction"),e.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===b||"GeneratorFunction"===(e.displayName||e.name))},e.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,j):(t.__proto__=j,s(t,l,"GeneratorFunction")),t.prototype=Object.create(S),t},e.awrap=function(t){return{__await:t}},I(L.prototype),s(L.prototype,c,(function(){return this})),e.AsyncIterator=L,e.async=function(t,r,n,o,a){void 0===a&&(a=Promise);var i=new L(h(t,r,n,o),a);return e.isGeneratorFunction(r)?i:i.next().then((function(t){return t.done?t.value:i.next()}))},I(S),s(S,l,"Generator"),s(S,i,(function(){return this})),s(S,"toString",(function(){return"[object Generator]"})),e.keys=function(t){var e=Object(t),r=[];for(var n in e)r.push(n);return r.reverse(),function t(){for(;r.length;){var n=r.pop();if(n in e)return t.value=n,t.done=!1,t}return t.done=!0,t}},e.values=B,A.prototype={constructor:A,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=t,this.done=!1,this.delegate=null,this.method="next",this.arg=t,this.tryEntries.forEach(C),!e)for(var r in this)"t"===r.charAt(0)&&n.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=t)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var r=this;function o(n,o){return c.type="throw",c.arg=e,r.next=n,o&&(r.method="next",r.arg=t),!!o}for(var a=this.tryEntries.length-1;a>=0;--a){var i=this.tryEntries[a],c=i.completion;if("root"===i.tryLoc)return o("end");if(i.tryLoc<=this.prev){var l=n.call(i,"catchLoc"),s=n.call(i,"finallyLoc");if(l&&s){if(this.prev<i.catchLoc)return o(i.catchLoc,!0);if(this.prev<i.finallyLoc)return o(i.finallyLoc)}else if(l){if(this.prev<i.catchLoc)return o(i.catchLoc,!0)}else{if(!s)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return o(i.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r];if(o.tryLoc<=this.prev&&n.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var a=o;break}}a&&("break"===t||"continue"===t)&&a.tryLoc<=e&&e<=a.finallyLoc&&(a=null);var i=a?a.completion:{};return i.type=t,i.arg=e,a?(this.method="next",this.next=a.finallyLoc,g):this.complete(i)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),g},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),C(r),g}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;C(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(e,r,n){return this.delegate={iterator:B(e),resultName:r,nextLoc:n},"next"===this.method&&(this.arg=t),g}},e}function h(t,e,r,n,o,a,i){try{var c=t[a](i),l=c.value}catch(t){return void r(t)}c.done?e(l):Promise.resolve(l).then(n,o)}var d=(0,l.hg)("googleBooks/fetchGoogleBooks",(function(t){return(n=n||(e=f().mark((function t(e){var r,n,o,a,i;return f().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=e.category,n=e.sorting,o=e.search,a=e.startIndex,t.prev=1,t.next=4,s.Z.get("https://www.googleapis.com/books/v1/volumes",{params:{q:"subject:".concat(r," ").concat(o),orderBy:n,startIndex:a,maxResults:30,key:"AIzaSyC4J_4oZ2otHWLxs-nIMXs7JVJe7jetqZo"}});case 4:return i=t.sent,t.abrupt("return",i.data);case 8:throw t.prev=8,t.t0=t.catch(1),console.error("Error:",t.t0),t.t0;case 12:case"end":return t.stop()}}),t,null,[[1,8]])})),function(){var t=this,r=arguments;return new Promise((function(n,o){var a=e.apply(t,r);function i(t){h(a,n,o,i,c,"next",t)}function c(t){h(a,n,o,i,c,"throw",t)}i(void 0)}))})).apply(this,arguments);var e})),v=(0,l.oM)({name:"ApiGoogleBooks",initialState:{data:null,items:[],category:"",sorting:"relevance",startIndex:0,search:"*",loading:!1,error:""},reducers:{categoryBook:function(t,e){t.category=e.payload},sortingBook:function(t,e){t.sorting=e.payload},searchBook:function(t,e){t.search=e.payload},increaseStartIndex:function(t,e){var r,n,o,a=null!==(r=null===(n=t.data)||void 0===n?void 0:n.totalItems)&&void 0!==r?r:0;t.items.length<a&&(t.startIndex+=e.payload,t.items.length<a&&(t.items=t.items.concat((null===(o=t.data)||void 0===o?void 0:o.items)||[])))}},extraReducers:function(t){t.addCase(d.pending,(function(t){t.loading=!0})),t.addCase(d.fulfilled,(function(t,e){var r;t.loading=!1,t.data=e.payload,t.items=(null===(r=t.data)||void 0===r?void 0:r.items)||[],t.error=""})),t.addCase(d.rejected,(function(t,e){t.loading=!1,t.data=null,t.error=e.error.message}))}}),p=v.actions,y=p.categoryBook,m=p.sortingBook,g=p.searchBook,x=p.increaseStartIndex,b=function(t){return t.apiGoogleBooks};const j=v.reducer;var w=(0,l.xC)({reducer:{apiGoogleBooks:j}}),_=r(335),k=r(476),S=r(255);const I={};var L=r(893);function E(t){var e=t.value,r=t.onChange;return(0,L.jsx)("input",{className:I.input,value:e,onChange:r,type:"text",placeholder:"search"})}var N=r(721);const O={wrapper:"searchSelect__wrapper--woFF0",label:"searchSelect__label--BA0jK"};function C(t){var e=t.htmlFor,r=t.name,n=t.id,o=t.label,a=t.selectedValue,i=t.data,c=t.onChange;return(0,L.jsxs)("div",{className:O.wrapper,children:[(0,L.jsx)("label",{className:O.label,htmlFor:e,children:o}),(0,L.jsx)("select",{className:O.select,onChange:c,value:a,name:r,id:n,children:null==i?void 0:i.map((function(t){return(0,L.jsx)("option",{value:t.value,children:t.text},(0,N.Z)())}))})]})}const A="searchBlock__section--oBTRv",B="searchBlock__form--ScOkZ",T="searchBlock__block_search--i6hIc",F="searchBlock__select_list--CKTjd";function G(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){var r=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=r){var n,o,a,i,c=[],l=!0,s=!1;try{if(a=(r=r.call(t)).next,0===e){if(Object(r)!==r)return;l=!1}else for(;!(l=(n=a.call(r)).done)&&(c.push(n.value),c.length!==e);l=!0);}catch(t){s=!0,o=t}finally{try{if(!l&&null!=r.return&&(i=r.return(),Object(i)!==i))return}finally{if(s)throw o}}return c}}(t,e)||function(t,e){if(!t)return;if("string"==typeof t)return P(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);"Object"===r&&t.constructor&&(r=t.constructor.name);if("Map"===r||"Set"===r)return Array.from(t);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return P(t,e)}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function P(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}var M=[{value:"",text:"All"},{value:"art",text:"Art"},{value:"biography",text:"Biography"},{value:"computers",text:"Computers"},{value:"history",text:"History"},{value:"medical",text:"Medical"},{value:"poetry",text:"Poetry"}],W=[{value:"relevance",text:"Relevance"},{value:"newest",text:"Newest"}];function Z(){var t=(0,k.T)(),e=(0,k.C)(b),r=G((0,o.useState)(""),2),n=r[0],a=r[1],i=G((0,o.useState)(e.category),2),c=i[0],l=i[1],s=G((0,o.useState)(e.sorting),2),u=s[0],f=s[1];(0,o.useEffect)((function(){t(m(u))}),[u,t]),(0,o.useEffect)((function(){t(y(c))}),[c,t]);return(0,L.jsx)("section",{className:A,children:(0,L.jsx)(S.W,{children:(0,L.jsxs)("form",{className:B,onSubmit:function(e){e.preventDefault(),t(g(n))},children:[(0,L.jsx)("h1",{children:"Search for books"}),(0,L.jsxs)("div",{className:T,children:[(0,L.jsx)(E,{value:n,onChange:function(t){var e=t.target.value;a(e)}}),(0,L.jsxs)("div",{className:F,children:[(0,L.jsx)(C,{onChange:function(t){var e=t.target.value;l(e)},htmlFor:"categoriesId",name:"categories",id:"categoriesId",label:"Categories",data:M,selectedValue:c}),(0,L.jsx)(C,{onChange:function(t){var e=t.target.value;f(e)},htmlFor:"sortingId",name:"sorting",id:"sortingId",label:"Sorting by",data:W,selectedValue:u})]})]})]})})})}var z=function(){return(0,L.jsxs)(L.Fragment,{children:[(0,L.jsx)(Z,{}),(0,L.jsx)(_.j3,{})]})};const J={article:"cardItem__article--CQKox",img_block:"cardItem__img_block--cYHvQ",link:"cardItem__link--czctP"};function K(t){var e=t.title,r=t.categories,n=t.img,o=t.author,a=t.link;return(0,L.jsxs)("article",{className:J.article,children:[(0,L.jsx)("div",{className:J.img_block,children:(0,L.jsx)("img",{src:n,alt:e})}),(0,L.jsxs)("div",{children:[(0,L.jsx)("samp",{children:r}),(0,L.jsx)("h2",{children:e}),(0,L.jsx)("ul",{children:null==o?void 0:o.map((function(t){return(0,L.jsx)("li",{children:t},(0,N.Z)())}))})]}),(0,L.jsx)(c.rU,{className:J.link,to:"/".concat(a),"aria-label":"Ссылка на детальную информацию"})]})}const V={messages:"cardsList__messages--qnzPE",wrapper_content:"cardsList__wrapper_content--lJ_Xj",wrapper_btn:"cardsList__wrapper_btn--o97jb",btn:"cardsList__btn--GkPMK"};function R(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){var r=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=r){var n,o,a,i,c=[],l=!0,s=!1;try{if(a=(r=r.call(t)).next,0===e){if(Object(r)!==r)return;l=!1}else for(;!(l=(n=a.call(r)).done)&&(c.push(n.value),c.length!==e);l=!0);}catch(t){s=!0,o=t}finally{try{if(!l&&null!=r.return&&(i=r.return(),Object(i)!==i))return}finally{if(s)throw o}}return c}}(t,e)||function(t,e){if(!t)return;if("string"==typeof t)return q(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);"Object"===r&&t.constructor&&(r=t.constructor.name);if("Map"===r||"Set"===r)return Array.from(t);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return q(t,e)}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function q(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}function D(){var t,e=(0,k.T)(),r=(0,k.C)(b),n=R((0,o.useState)(r.items),2),a=n[0],i=n[1];(0,o.useEffect)((function(){i(r.items),localStorage.setItem("googleBooksData",JSON.stringify(a))}),[r.items,a]);return(0,L.jsxs)("section",{children:[(0,L.jsxs)(S.W,{children:[(0,L.jsx)("div",{className:V.messages,children:r.error?(0,L.jsxs)("span",{children:["Error: ",r.error]}):(0,L.jsxs)("span",{children:[null===(t=r.data)||void 0===t?void 0:t.totalItems," книг по запросу"]})}),(0,L.jsxs)("div",{className:V.wrapper_content,children:[0===(null==a?void 0:a.length)&&(0,L.jsx)("div",{style:{textAlign:"center"},children:"Нет ни одной книги!"}),null==a?void 0:a.map((function(t){var e,r,n,o;return(0,L.jsx)(K,{title:null==t||null===(e=t.volumeInfo)||void 0===e?void 0:e.title,categories:null==t||null===(r=t.volumeInfo)||void 0===r||null===(r=r.categories)||void 0===r?void 0:r[0],author:null==t||null===(n=t.volumeInfo)||void 0===n?void 0:n.authors,img:null==t||null===(o=t.volumeInfo)||void 0===o||null===(o=o.imageLinks)||void 0===o?void 0:o.thumbnail,link:null==t?void 0:t.id},null==t?void 0:t.id)}))]})]}),(0,L.jsx)("div",{className:V.wrapper_btn,children:r.loading?(0,L.jsx)("div",{children:"Loading..."}):(0,L.jsx)("button",{className:V.btn,onClick:function(){e(x(30))},children:"Load more"})})]})}function H(){return(0,L.jsx)(D,{})}var U=(0,o.lazy)((function(){return r.e(815).then(r.bind(r,815))}));const Y=function(){var t=(0,k.T)(),e=(0,k.C)(b);return(0,o.useEffect)((function(){t(d({category:e.category,sorting:e.sorting,search:e.search,startIndex:e.startIndex}))}),[t,e.category,e.sorting,e.search,e.startIndex]),(0,L.jsx)(o.Suspense,{fallback:(0,L.jsx)(L.Fragment,{}),children:(0,L.jsx)(_.Z5,{children:(0,L.jsxs)(_.AW,{path:"/",element:(0,L.jsx)(z,{}),children:[(0,L.jsx)(_.AW,{index:!0,element:(0,L.jsx)(H,{})}),(0,L.jsx)(_.AW,{path:":bookID",element:(0,L.jsx)(U,{})})]})})})};var Q=document.getElementById("root");(0,a.s)(Q).render((0,L.jsx)(o.StrictMode,{children:(0,L.jsx)(i.zt,{store:w,children:(0,L.jsx)(c.VK,{basename:"/",children:(0,L.jsx)(Y,{})})})}))}},t=>{t.O(0,[741,716],(()=>{return e=801,t(t.s=e);var e}));t.O()}]);