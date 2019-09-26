var StyleGuideWebComponent=function(){"use strict";function e(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}function t(e,t){return e(t={exports:{}},t.exports),t.exports}function s(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}var O="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},r=function(e,t,n){return t&&o(e.prototype,t),n&&o(e,n),e};function o(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function c(e,t,n){null===e&&(e=Function.prototype);var r=Object.getOwnPropertyDescriptor(e,t);if(void 0===r){var o=Object.getPrototypeOf(e);return null===o?void 0:c(o,t,n)}if("value"in r)return r.value;var i=r.get;return void 0!==i?i.call(n):void 0}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function u(e,t){var n={};for(var r in e)0<=t.indexOf(r)||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n}function p(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function l(e,t,n,r){var o=Object.getOwnPropertyDescriptor(e,t);if(void 0===o){var i=Object.getPrototypeOf(e);null!==i&&l(i,t,n,r)}else if("value"in o&&o.writable)o.value=n;else{var a=o.set;void 0!==a&&a.call(r,n)}return n}var i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},d=function(e,t){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return function(e,t){var n=[],r=!0,o=!1,i=void 0;try{for(var a,s=e[Symbol.iterator]();!(r=(a=s.next()).done)&&(n.push(a.value),!t||n.length!==t);r=!0);}catch(e){o=!0,i=e}finally{try{!r&&s.return&&s.return()}finally{if(o)throw i}}return n}(e,t);throw new TypeError("Invalid attempt to destructure non-iterable instance")},k=function(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}return Array.from(e)},n=t(function(e,t){Object.defineProperty(t,"__esModule",{value:!0});var n="function"==typeof Symbol&&Symbol.for,r=n?Symbol.for("react.element"):60103,o=n?Symbol.for("react.portal"):60106,i=n?Symbol.for("react.fragment"):60107,a=n?Symbol.for("react.strict_mode"):60108,s=n?Symbol.for("react.profiler"):60114,l=n?Symbol.for("react.provider"):60109,c=n?Symbol.for("react.context"):60110,u=n?Symbol.for("react.async_mode"):60111,p=n?Symbol.for("react.concurrent_mode"):60111,d=n?Symbol.for("react.forward_ref"):60112,f=n?Symbol.for("react.suspense"):60113,h=n?Symbol.for("react.suspense_list"):60120,y=n?Symbol.for("react.memo"):60115,v=n?Symbol.for("react.lazy"):60116,_=n?Symbol.for("react.fundamental"):60117,b=n?Symbol.for("react.responder"):60118;function m(e){if("object"===(void 0===e?"undefined":O(e))&&null!==e){var t=e.$$typeof;switch(t){case r:switch(e=e.type){case u:case p:case i:case s:case a:case f:return e;default:switch(e=e&&e.$$typeof){case c:case d:case l:return e;default:return t}}case v:case y:case o:return t}}}function g(e){return m(e)===p}t.typeOf=m,t.AsyncMode=u,t.ConcurrentMode=p,t.ContextConsumer=c,t.ContextProvider=l,t.Element=r,t.ForwardRef=d,t.Fragment=i,t.Lazy=v,t.Memo=y,t.Portal=o,t.Profiler=s,t.StrictMode=a,t.Suspense=f,t.isValidElementType=function(e){return"string"==typeof e||"function"==typeof e||e===i||e===p||e===s||e===a||e===f||e===h||"object"===(void 0===e?"undefined":O(e))&&null!==e&&(e.$$typeof===v||e.$$typeof===y||e.$$typeof===l||e.$$typeof===c||e.$$typeof===d||e.$$typeof===_||e.$$typeof===b)},t.isAsyncMode=function(e){return g(e)||m(e)===u},t.isConcurrentMode=g,t.isContextConsumer=function(e){return m(e)===c},t.isContextProvider=function(e){return m(e)===l},t.isElement=function(e){return"object"===(void 0===e?"undefined":O(e))&&null!==e&&e.$$typeof===r},t.isForwardRef=function(e){return m(e)===d},t.isFragment=function(e){return m(e)===i},t.isLazy=function(e){return m(e)===v},t.isMemo=function(e){return m(e)===y},t.isPortal=function(e){return m(e)===o},t.isProfiler=function(e){return m(e)===s},t.isStrictMode=function(e){return m(e)===a},t.isSuspense=function(e){return m(e)===f}});e(n);n.typeOf,n.AsyncMode,n.ConcurrentMode,n.ContextConsumer,n.ContextProvider,n.Element,n.ForwardRef,n.Fragment,n.Lazy,n.Memo,n.Portal,n.Profiler,n.StrictMode,n.Suspense,n.isValidElementType,n.isAsyncMode,n.isConcurrentMode,n.isContextConsumer,n.isContextProvider,n.isElement,n.isForwardRef,n.isFragment,n.isLazy,n.isMemo,n.isPortal,n.isProfiler,n.isStrictMode,n.isSuspense;var f=t(function(e,t){});e(f);f.typeOf,f.AsyncMode,f.ConcurrentMode,f.ContextConsumer,f.ContextProvider,f.Element,f.ForwardRef,f.Fragment,f.Lazy,f.Memo,f.Portal,f.Profiler,f.StrictMode,f.Suspense,f.isValidElementType,f.isAsyncMode,f.isConcurrentMode,f.isContextConsumer,f.isContextProvider,f.isElement,f.isForwardRef,f.isFragment,f.isLazy,f.isMemo,f.isPortal,f.isProfiler,f.isStrictMode,f.isSuspense,t(function(e){e.exports=n});var h=Object.getOwnPropertySymbols,y=Object.prototype.hasOwnProperty,v=Object.prototype.propertyIsEnumerable;!function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},n=0;n<10;n++)t["_"+String.fromCharCode(n)]=n;if("0123456789"!==Object.getOwnPropertyNames(t).map(function(e){return t[e]}).join(""))return!1;var r={};return"abcdefghijklmnopqrst".split("").forEach(function(e){r[e]=e}),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},r)).join("")}catch(e){return!1}}()||Object.assign,Function.call.bind(Object.prototype.hasOwnProperty);function _(){}function b(){}b.resetWarningCache=_;var m=t(function(e){e.exports=function(){function e(e,t,n,r,o,i){if("SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"!==i){var a=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw a.name="Invariant Violation",a}}function t(){return e}var n={array:e.isRequired=e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:b,resetWarningCache:_};return n.PropTypes=n}()}),g=0;function C(e,t){var n=e[t];return"function"==typeof n&&(e[t]=function(t){function n(){return t.apply(void 0,arguments)}return 0===g&&(g++,Object.keys(t).map(function(e){return n[e]=t[e],e}).reduce(C,n),g--),n}(n)),e}var x=m;Object.keys(x).reduce(C,x);var P=x.oneOf(["left","center","right"]),w=x.oneOf(["left","right"]);function T(r){function e(e,t,n){return null==e[t]?null:r(e,t,n)}return e.isRequired=r,e}var j=/^([\w]{2})-([\w]{2})/;T(function(e,t,n){if(!j.test(e[t]))return new Error("Invalid prop `"+t+"` supplied to `"+n+"`, expected a valid locale.")});x.oneOf(["top","bottom"]);var E=x.oneOf(["up","down"]),A=x.oneOf(["ok","pending","error","unknown"]),N=x.oneOf(["row","col","rowgroup","colgroup","auto"]),S=x.oneOfType([x.string,x.number]),R={text:S,value:x.any,rowspan:S,colspan:S,scope:N,align:P,dense:x.bool},M={float:w,strong:x.bool,bold:x.bool},D=x.oneOfType([x.string,x.number]),L=x.oneOfType([D,x.shape(i({},R,{sort:E,sortActive:x.bool}))]),U=x.oneOfType([D,x.shape(i({},R,M,{action:x.bool,state:A}))]),F=x.oneOfType([D,x.shape(i({},R,M))]),I=x.oneOfType([x.arrayOf(L),x.shape({cells:x.arrayOf(L)})]),$=x.oneOfType([x.arrayOf(U),x.shape({cells:x.arrayOf(U),action:x.bool})]),V=x.oneOfType([x.arrayOf(F),x.shape({cells:x.arrayOf(F)})]);x.oneOfType([I,x.arrayOf(I)]),x.oneOfType([$,x.arrayOf($)]),x.oneOfType([V,x.arrayOf(V)]);function q(e,t){if(Array.isArray(t))for(var n,r,o=e.nodeName.toLowerCase(),i=!1,a=0,s=t.length;a<s;a++){var l=t[a];if(Array.isArray(l))q(e,l);else{("number"==typeof l||"boolean"==typeof l||"function"==typeof l||l instanceof Date||l instanceof RegExp)&&(l=l.toString());var c=e.childNodes[e.childNodes.length-1];if("string"==typeof l)i=!0,c&&"#text"===c.nodeName?c.nodeValue+=l:(l=document.createTextNode(l),e.appendChild(l),c=l),a===s-1&&(i=!1,-1===ne.indexOf(o)&&-1===re.indexOf(o)?""===(n=c.nodeValue.replace(X,"").replace(Q,"").replace(Z,"").replace(te," "))?e.removeChild(c):c.nodeValue=n:-1===re.indexOf(o)&&(r=0===a?"":" ",n=c.nodeValue.replace(X,r).replace(ee," ").replace(Q,"").replace(Z,"").replace(te," "),c.nodeValue=n));else if(l&&l.nodeType){i&&(i=!1,-1===ne.indexOf(o)&&-1===re.indexOf(o)?""===(n=c.nodeValue.replace(X,"").replace(Z," ").replace(te," "))?e.removeChild(c):c.nodeValue=n:-1===re.indexOf(o)&&(n=c.nodeValue.replace(ee," ").replace(X,"").replace(Z," ").replace(te," "),c.nodeValue=n));var u=l.nodeName;u&&(o=u.toLowerCase()),e.appendChild(l)}}}}function z(e){var t,n=e.items;return(t=document.createElement("ul")).setAttribute("class","m-header-mobile-others__list"),q(t,["\n    ",Array.isArray(n)&&n.map(function(e){var t,n,r=e.name,o=e.url,i=void 0===o?"":o,a=e.isActive,s=void 0!==a&&a;return(n=document.createElement("li")).setAttribute("class","m-header-mobile-others__list-item"),q(n,["\n        ",(t=document.createElement("a"),t.setAttribute("href",""+String(i)),t.setAttribute("class",""+String(oe("m-header-mobile-others__link","js-header-mobile-close",{"is-header-mobile-others-active":s}))),q(t,[r]),t),"\n      "]),n}),"\n  "]),t}function W(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];return function(e){return t.reduceRight(function(e,t){return t(e)},e)}}function B(e){return ae((a(t,e),r(t,[{key:"init",value:function(){this._id=function(e){return e in ie||(ie[e]=0),++ie[e]}(this.nodeName),this._initialised=!0}},{key:"connectedCallback",value:function(){this._initialised||this.init()}},{key:"attributeChangedCallback",value:function(){this._initialised||this.init()}}],[{key:"uuidv4",value:function(){return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,function(e){var t=16*Math.random()|0;return("x"==e?t:3&t|8).toString(16)})}}]),t));function t(){return s(this,t),p(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}}var K,H,G,J,Y=T(function(e,t,n){try{new window.URL(e[t],function(){if(document.baseURI)return document.baseURI;var e=document.getElementsByName("base");return e.length&&e[0].href?e[0].href:window.location.href}())}catch(e){return new Error("Invalid prop `"+t+"` supplied to `"+n+"`, expected a valid URL. "+e.message)}return null}),Z=/\n[\s]+$/,X=/^\n[\s]+/,Q=/[\s]+$/,ee=/^[\s]+/,te=/[\n\s]+/g,ne=["a","abbr","b","bdi","bdo","br","cite","data","dfn","em","i","kbd","mark","q","rp","rt","rtc","ruby","s","amp","small","span","strong","sub","sup","time","u","var","wbr"],re=["code","pre","textarea"],oe=t(function(e){function a(){for(var e=[],t=0;t<arguments.length;t++){var n=arguments[t];if(n){var r=void 0===n?"undefined":O(n);if("string"===r||"number"===r)e.push(n);else if(Array.isArray(n)&&n.length){var o=a.apply(null,n);o&&e.push(o)}else if("object"===r)for(var i in n)s.call(n,i)&&n[i]&&e.push(i)}}return e.join(" ")}var s;s={}.hasOwnProperty,e.exports?(a.default=a,e.exports=a):window.classNames=a}),ie={},ae=(K=Object,H=K.getPrototypeOf||function(e){return e.__proto__},G=K.setPrototypeOf||function(e,t){return e.__proto__=t,e},J="object"===("undefined"==typeof Reflect?"undefined":O(Reflect))?Reflect.construct:function(e,t,n){var r,o=[null];return o.push.apply(o,t),r=e.bind.apply(e,o),G(new r,n.prototype)},function(e){var t=H(e);return G(e,G(function(){return J(t,arguments,H(this).constructor)},t))}),se={},le=function(){try{var e=new window.CustomEvent("test",{cancelable:!0});if(e.preventDefault(),!0!==e.defaultPrevented)throw new Error("Could not prevent default");return window.CustomEvent}catch(e){}return t;function t(e){var t=1<arguments.length&&void 0!==arguments[1]?arguments[1]:{},n=t.bubbles,r=void 0!==n&&n,o=t.cancelable,i=void 0!==o&&o,a=t.detail,s=void 0===a?void 0:a,l=document.createEvent("CustomEvent");l.initCustomEvent(e,r,i,s);var c=l.preventDefault;return l.preventDefault=function(){c.call(l);try{Object.defineProperty(this,"defaultPrevented",{get:function(){return!0}})}catch(e){this.defaultPrevented=!0}},l}}();function ce(e,t,n,r){var o=new le(t,i({},3<arguments.length&&void 0!==r?r:{},{detail:n}));return e.dispatchEvent(o)}var ue=function(){var e=!1;if("undefined"!=typeof window&&"function"==typeof window.addEventListener){var t=Object.defineProperty({},"passive",{get:function(){e=!0}}),n=function(){};window.addEventListener("testPassiveEventSupport",n,t),window.removeEventListener("testPassiveEventSupport",n,t)}return e}();function pe(e){for(var n=e.className,r=!1,o=!0,t=arguments.length,i=Array(1<t?t-1:0),a=1;a<t;a++)i[a-1]=arguments[a];var s=i.map(function(e){var t=function(e,t){return new RegExp("^"+e+"$|^"+e+"\\s|\\s"+e+"\\s|\\s"+e+"$",t)}(e).test(n);t?r=!0:o=!1;return{className:e,hasClass:t}});return!(!o&&!r)&&s}function de(e,t){if(!e)return!1;for(var n=Object.keys(e),r=n.length,o=0;o<r;++o){var i=n[o];if(e[i]===t)return delete e[i]}return!1}var fe=/\s+/,he={transitionend:function(){for(var e=document.createElement("div").style,t={transition:"transitionend",OTransition:"oTransitionEnd otransitionend",MozTransition:"transitionend",WebkitTransition:"webkitTransitionEnd"},n=Object.keys(t),r=n.length,o=void 0,i=0;i<r;++i)if(void 0!==e[o=n[i]])return t[o];return""}()};function ye(n,e,r,o,t){var i=4<arguments.length&&void 0!==t?t:{},a=i.capture,s=void 0!==a&&a,l=i.passive,c=void 0===l||l;if(he[e]&&(e=he[e]),!n||!e)return null;var u=void 0===r?"undefined":O(r),p=r&&"string"===u;if("function"===u){if(o){var d=o;s=d.capture,c=d.passive}o=r}for(var f=ue?{capture:s,passive:c}:s,h=p?function(e){var t=e.target;for(;!pe(t,r)&&t!==n;)t=t.parentNode;if(t!==n)return o(e,t)}:o,y=e.split(fe),v=y.length,_=0;_<v;++_)n.addEventListener(y[_],h,f);return function e(){for(var t=0;t<v;++t)n.removeEventListener(y[t],h,f);de(this,e)}}function ve(r,e,t){var o=1<arguments.length&&void 0!==e?e:0,n=2<arguments.length&&void 0!==t?t:{},i=n.leading,a=void 0!==i&&i,s=n.trailing,l=void 0===s||s,c=n.maxWait,u=void 0!==c&&c,p=void 0,d=void 0,f=void 0,h=void 0,y=!1,v=o!==u,_=!1!==u;function b(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];return p=t,v&&(d&&clearTimeout(d),d=setTimeout(m,o)),_&&!f&&(f=setTimeout(g,u)),a&&!y&&(y=!0,h=r.apply(void 0,k(p))),h}return b.flush=function(){(d||f)&&(h=r.apply(void 0,k(p)));return C(),h},b.cancel=C,b;function m(){f&&clearTimeout(f),O()}function g(){d&&clearTimeout(d),O()}function O(){l&&(h=r.apply(void 0,k(p))),f=d=null,y=!1}function C(){d&&(clearTimeout(d),d=null),f&&(clearTimeout(f),f=null),p=void 0,y=!1}}window.__subscriptions=window.__subscriptions||{};var _e=window.__subscriptions;function be(e,t,n){var r=ye(2<arguments.length&&void 0!==n?n:document,e,t);_e[e]||(_e[e]={count:0});var o=_e[e];return o.count++,o.onsubscribe||(o.onsubscribe=ve(function(e){return function(){ce(document,"pubsub/onsubscribe",e),ce(document,"pubsub/onsubscribe/"+e,e),_e[e]&&delete _e[e].unsubscribe}}(e),100)),o.onsubscribe(),function(){o.count--,r.call(this),o.count<=0&&delete _e[e]}}ye(document,"pubsub/onsubscribe",function(e){var t=e.detail;_e[t]||(_e[t]={count:0});var n=_e[t],r=n.queue;Array.isArray(r)&&(r.forEach(function(e){var t=d(e,3),n=t[0],r=t[1];ce(t[2],n,r)}),delete n.queue)});function me(e,t){return e===t}var ge;ge=function(){var e;return(e=console).log.apply(e,arguments)},function(){var o=0<arguments.length&&void 0!==arguments[0]?arguments[0]:me;return function(){for(var e=arguments.length,r=Array(e),t=0;t<e;t++)r[t]=arguments[t];return function(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];return function(){return o.apply(void 0,[].concat(r,t))?ge.apply(void 0,arguments):void 0}}}}()(!0);function Oe(e){return-1!==Object.prototype.toString.call(e).indexOf("DocumentFragment")}var Ce=[];var ke=1,xe=3,Pe=8;function we(e,t){var n=e.nodeType;n===ke&&function(e,t){for(var n=t.skipChildren&&t.skipChildren(),r=t.constructor.observedAttributes,o=r&&Array.isArray(r)&&r.length,i=function(e){return n&&o&&-1===r.indexOf(e)},a=t.attributes,s=e.attributes,l=null,c=null,u=null,p=null,d=s.length-1;0<=d;--d)if(p=s[d],u=p.name,l=p.namespaceURI,c=p.value,!i(u))if(l){var f=p.localName;t.getAttributeNS(l,f||u)!==c&&t.setAttributeNS(l,u,c)}else t.hasAttribute(u)?t.getAttribute(u)!==c&&("null"===c||"undefined"===c?t.removeAttribute(u):t.setAttribute(u,c)):t.setAttribute(u,c);for(var h=a.length-1;0<=h;--h)if(!1!==(p=a[h]).specified){if(u=p.name,l=p.namespaceURI,i(u))continue;l?(u=p.localName||u,e.hasAttributeNS(l,u)||t.removeAttributeNS(l,u)):e.hasAttributeNS(null,u)||t.removeAttribute(u)}}(e,t),n!==xe&&n!==Pe||t.nodeValue===e.nodeValue||(t.nodeValue=e.nodeValue)}function Te(e,t){var n=e.nodeName;"INPUT"===n?function(e,t){var n=e.value,r=t.value;je(e,t,"checked"),je(e,t,"disabled"),n!==r&&(t.setAttribute("value",n),t.value=n);"null"===n&&(t.value="",t.removeAttribute("value"));e.hasAttributeNS(null,"value")?"range"===t.type&&(t.value=n):t.removeAttribute("value")}(e,t):"OPTION"===n?function(e,t){je(e,t,"selected")}(e,t):"TEXTAREA"===n?function(e,t){var n=e.value;n!==t.value&&(t.value=n);if(t.firstChild&&t.firstChild.nodeValue!==n){if(""===n&&t.firstChild.nodeValue===t.placeholder)return;t.firstChild.nodeValue=n}}(e,t):"SELECT"===n&&function(e,t){var n=-1,r=0,o=t.firstChild,i=void 0,a=void 0;for(;o;)if("OPTGROUP"===(a=o.nodeName&&o.nodeName.toUpperCase()))o=(i=o).firstChild;else{if("OPTION"===a){if(o.hasAttributeNS(null,"selected")){n=r;break}r+=1}!(o=o.nextSibling)&&i&&(o=i.nextSibling,i=null)}t.selectedIndex=n}(0,t)}function je(e,t,n){e[n]!==t[n]&&(t[n]=e[n],e[n]?t.setAttribute(n,""):t.removeAttribute(n))}var Ee=3;function Ae(e,t){return t?e?e.isSameNode&&e.isSameNode(t)?t:e.tagName!==t.tagName?e:(we(e,t),t.skipChildren&&t.skipChildren()||function(e,t){for(var n=void 0,r=void 0,o=void 0,i=void 0,a=0,s=0;n=t.childNodes[s],r=e.childNodes[s-a],n||r;s++)if(r)if(n)if(Ne(r,n))(o=Ae(r,n))!==n&&(t.replaceChild(o,n),a++);else{i=null;for(var l=s;l<t.childNodes.length;l++)if(Ne(t.childNodes[l],r)){i=t.childNodes[l];break}i?((o=Ae(r,i))!==i&&a++,t.insertBefore(o,n)):r.id||n.id?(t.insertBefore(r,n),a++):(o=Ae(r,n))!==n&&(t.replaceChild(o,n),a++)}else t.appendChild(r),a++;else t.removeChild(n),s--}(e,t),Te(e,t),t):null:e}function Ne(e,t){return e.id?e.id===t.id:e.isSameNode?e.isSameNode(t):e.tagName===t.tagName&&(e.type===Ee&&e.nodeValue===t.nodeValue)}var Se,Re,Me,De,Le,Ue=(Se=Object,Re=Se.getPrototypeOf||function(e){return e.__proto__},Me=Se.setPrototypeOf||function(e,t){return e.__proto__=t,e},De="object"===("undefined"==typeof Reflect?"undefined":O(Reflect))?Reflect.construct:function(e,t,n){var r,o=[null];return o.push.apply(o,t),r=e.bind.apply(e,o),Me(new r,n.prototype)},function(e){var t=Re(e);return Me(e,Me(function(){return De(t,arguments,Re(this).constructor)},t))})((Le=Error,a(Fe,Le),Fe));function Fe(e){var t;s(this,Fe);for(var n="\n    Web Component "+e.nodeName+"%c#"+e._id+" does not accept string as a return from a template. Maybe use bel?}",r=arguments.length,o=Array(1<r?r-1:0),i=1;i<r;i++)o[i-1]=arguments[i];var a=p(this,(t=Fe.__proto__||Object.getPrototypeOf(Fe)).call.apply(t,[this,n].concat(o)));return Error.captureStackTrace&&Error.captureStackTrace(a,Fe),a.name="TemplateNoStringReturnException",a}var Ie=!!document.createDocumentFragment().children,$e=/[A-Z]/g;function Ve(e){return e.replace($e,qe)}function qe(e,t,n){var r=e.toLowerCase(),o=n.charAt(t+1);return 0===t||o.toUpperCase()===o?r:"-"+r}var ze=/^\s*(?:true|false|null|undefined|-?[0-9]+\.?[0-9]*|[[{](?:.|[\s])*[\]}])\s*$/;function We(t,n,e){var r=t;if(e)return function(t,n,e){var r=t;switch(e){case x.string:case x.string.isRequired:return t;case x.bool:case x.bool.isRequired:if(!t||n===t)return!0;case x.number:case x.number.isRequired:case x.object:case x.object.isRequired:case x.array:case x.array.isRequired:default:if(ze.test(t))try{r=JSON.parse(t)}catch(e){console.error("Attribute "+n+" has an error:\n"+e+"\n",t)}}return r}(t,n,e);if(t&&n!==t){if(ze.test(t))try{r=JSON.parse(t)}catch(e){console.error("Attribute "+n+" has an error:\n"+e+"\n",t)}}else r=!0;return r}var Be=/(?:^\w|[A-Z]|\b\w|\s+|[-_]+)/g,Ke=/[-_]+/g;function He(e){return e.replace(Be,Ge)}function Ge(e,t){return 0==+e||Ke.test(e)?"":0===t?e.toLowerCase():e.toUpperCase()}function Je(e,t,n){var r=1===e.nodeType,o=e.constructor.propTypes,i=n;!n&&r&&(i=(void 0===o?{}:o)[He(t)]);if(r&&!e.hasAttribute(t))return i!==x.bool&&i!==x.bool.isRequired&&void 0;var a=e.value;return t?a=e.getAttribute(t):t=e.name,a=We(a,t,i)}var Ye=/iPad|iPhone|iPod/.test(navigator.userAgent)&&!window.MSStream;function Ze(n,e,r,t){var o=3<arguments.length&&void 0!==t?t:{},i=o.capture,a=void 0===i||i,s=o.passive,l=void 0===s||s,c=n.ownerDocument.documentElement,u=ye(c,e,function(e){var t=e.target;if(!n.contains(t)&&n!==t)return r(e)},{capture:a,passive:l});return function(e){Ye&&(e.style.cursor="pointer")}(c),u}var Xe=function(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];for(var r=t.length,o={},i=0;i<r;++i){var a=t[i];o[a.toUpperCase()]=a}return o}("click","change","keyup","enter","move","leave","Escape","Esc","touchstart","touchmove","touchend","input","resize","paste"),Qe="axa-change",et="data-prevent-default";function tt(e){var i=this,t=1<arguments.length&&void 0!==arguments[1]?arguments[1]:{};s(this,tt),this._handleClick=function(e,t){i.shouldPreventDefault(t||e.currentTarget)&&e.preventDefault();var n=!i._lastToggleNode,r=t!==i._lastToggleNode,o=!n&&!r;n?(i._notify(Xe.ENTER,t),i._onInteractive()):r&&i._notify(Xe.MOVE,t,i._lastToggleNode),i._lastToggleNode=t,o&&i._options.sameClickClose&&i._close()},this._handleClose=function(e,t){i.shouldPreventDefault(t||e.currentTarget)&&e.preventDefault(),i._close()},this._handleKeyUp=function(e){e.key!==Xe.ESCAPE&&e.key!==Xe.ESC&&27!==e.keyCode||(e.preventDefault(),i._close())},this._init(e,t)}(r(tt,[{key:"_init",value:function(e,t){e&&(this._wcNode=e),t&&(this._options=i({},tt.DEFAULTS,t));var n=this._options.containerClass;this._container=n?this._wcNode.querySelector(n):this._wcNode,this._on()}},{key:"_on",value:function(){this._off(),this._unClick=ye(this._container,Xe.CLICK,this._options.toggleClass,this._handleClick,{passive:!this._options.preventDefault})}},{key:"_off",value:function(){this._unClick&&this._unClick(),this._offInteractive()}},{key:"_onInteractive",value:function(){this._offInteractive();var e=this._container,t=this._options,n=t.closeClass,r=t.outerClose,o=t.escapeClose,i=t.preventDefault;n&&(this._unCloseClick=ye(e,Xe.CLICK,n,this._handleClose,{passive:!i})),r&&(this._unOuterClick=Ze(e,Xe.CLICK,this._handleClose,{passive:!i})),o&&(this._unCloseEscape=ye(e.ownerDocument,Xe.KEYUP,this._handleKeyUp,{passive:!1}))}},{key:"shouldPreventDefault",value:function(e){return e.hasAttribute(et)?Je(e,et):this._options.preventDefault}},{key:"_offInteractive",value:function(){this._unOuterClick&&this._unOuterClick(),this._unCloseClick&&this._unCloseClick(),this._unCloseEscape&&this._unCloseEscape(),this.deleteLastToggleNode()}},{key:"_close",value:function(){this._lastToggleNode&&(this._notify(Xe.LEAVE,this._lastToggleNode),this._offInteractive(),this.deleteLastToggleNode())}},{key:"_notify",value:function(e,t,n){e in this&&"function"==typeof this[e]&&this[e](t,n)}},{key:"enter",value:function(e){throw new Error("UiEvent.enter method not overwritten")}},{key:"move",value:function(e,t){}},{key:"leave",value:function(e){throw new Error("UiEvent.leave method not overwritten")}},{key:"destroy",value:function(){this._off(),delete this._wcNode,delete this._options}},{key:"deleteLastToggleNode",value:function(){delete this._lastToggleNode}},{key:"lastToggleNode",get:function(){return this._lastToggleNode}}]),tt).DEFAULTS={containerClass:".js-ui-container",toggleClass:"js-ui-toggle",closeClass:"js-ui-close",escapeClose:!0,outerClose:!0,sameClickClose:!0,preventDefault:!0};var nt=W(function(e){var t,n;return a(r,e),n=t=r,t.version="2.0.1-beta.264",n;function r(){return s(this,r),p(this,(r.__proto__||Object.getPrototypeOf(r)).apply(this,arguments))}},function(e){return a(n,e),r(n,[{key:"init",value:function(e){var t=this;c(n.prototype.__proto__||Object.getPrototypeOf(n.prototype),"init",this).call(this,e),this._makeContextReady=function(){var e=(0<arguments.length&&void 0!==arguments[0]?arguments[0]:{}).detail;t.contextNode&&(clearTimeout(t.timeoutId),t.timeoutId=setTimeout(function(){t.contextCallback(t.contextNode,e)},10)),t.unContextEnabled&&t.unContextEnabled(),t.unContextEnabled=be("context/available",t._makeContextReady)}}},{key:"connectedCallback",value:function(){c(n.prototype.__proto__||Object.getPrototypeOf(n.prototype),"connectedCallback",this)&&c(n.prototype.__proto__||Object.getPrototypeOf(n.prototype),"connectedCallback",this).call(this),this.contextCallback&&this._makeContextReady()}},{key:"disconnectedCallback",value:function(){c(n.prototype.__proto__||Object.getPrototypeOf(n.prototype),"disconnectedCallback",this)&&c(n.prototype.__proto__||Object.getPrototypeOf(n.prototype),"disconnectedCallback",this).call(this),this.unContextEnabled&&this.unContextEnabled()}},{key:"provideContext",value:function(){var e=this.nodeName.toLowerCase();this.__isContext=!0,function(e,t,n){var r=2<arguments.length&&void 0!==n?n:document;_e[e]||(_e[e]={count:0,queue:[]});var o=_e[e].queue;Array.isArray(o)?o.push([e,t,r]):ce(r,e,t)}("context/available",this.__contextName=e)}},{key:"consumeContext",value:function(e){this.__consumedContext=e&&e.toLowerCase()}},{key:"contextNode",get:function(){for(var e=this.__consumedContext,t=this.parentNode;t&&(!t.__isContext||e&&e!==t.__contextName);)t=t.parentNode;return!(!t||!t.__isContext)&&t}}]),n;function n(){return s(this,n),p(this,(n.__proto__||Object.getPrototypeOf(n)).apply(this,arguments))}},function(e){return a(i,e),r(i,[{key:"appendChild",value:function(e){if(this._isMorphing||!this._hasTemplate||!this._hasRendered)return c(i.prototype.__proto__||Object.getPrototypeOf(i.prototype),"appendChild",this).call(this,e);var t=this._lightDOMRefs;return Oe(e)?Array.from(e.childNodes).forEach(function(e){e.__isPatching=!0,t.push(e)}):(e.__isPatching=!0,t.push(e)),this.render(),e}},{key:"append",value:function(){for(var e,t=this,n=arguments.length,r=Array(n),o=0;o<n;o++)r[o]=arguments[o];!this._isMorphing&&this._hasTemplate&&this._hasRendered?(r.forEach(function(e){"string"==typeof e&&(e=document.createTextNode(e)),e.__isPatching=!0,t._lightDOMRefs.push(e)}),this.render()):(e=c(i.prototype.__proto__||Object.getPrototypeOf(i.prototype),"append",this)).call.apply(e,[this].concat(r))}},{key:"insertBefore",value:function(e,t){if(this._isMorphing||!this._hasTemplate||!this._hasRendered)return c(i.prototype.__proto__||Object.getPrototypeOf(i.prototype),"insertBefore",this).call(this,e,t);var n=this._lightDOMRefs,r=n.indexOf(t);return-1!==r&&(r=n.length),Oe(e)?Array.from(e.childNodes).forEach(function(e,t){e.__isPatching=!0,n.splice(r+t,0,e)}):(e.__isPatching=!0,n.splice(r,0,e)),this.render(),e}},{key:"removeChild",value:function(t){if(this._isMorphing||!this._hasTemplate||!this._hasRendered)return c(i.prototype.__proto__||Object.getPrototypeOf(i.prototype),"removeChild",this).call(this,t);var e=t.parentNode.removeChild(t);return this._lightDOMRefs=this._lightDOMRefs.filter(function(e){return e!==t}),this.render(),e}},{key:"replaceChild",value:function(e,t){return!this._isMorphing&&this._hasTemplate&&this._hasRendered?t.parentNode.replaceChild(e,t):c(i.prototype.__proto__||Object.getPrototypeOf(i.prototype),"replaceChild",this).call(this,e,t)}},{key:"innerText",set:function(e){if(this._hasTemplate&&this._hasRendered){var t=document.createTextNode(e);t.__isPatching=!0,this._lightDOMRefs=[t],this.render()}else l(i.prototype.__proto__||Object.getPrototypeOf(i.prototype),"innerText",e,this)}},{key:"textContent",set:function(e){if(this._hasTemplate&&this._hasRendered){var t=document.createTextNode(e);t.__isPatching=!0,this._lightDOMRefs=[t],this.render()}else l(i.prototype.__proto__||Object.getPrototypeOf(i.prototype),"textContent",e,this)}},{key:"innerHTML",set:function(e){if(this._hasTemplate&&this._hasRendered){var t=document.createElement("div");t.innerHTML=e,this._lightDOMRefs=Array.from(t.children).map(function(e){return e.__isPatching=!0,e}),this.render()}else l(i.prototype.__proto__||Object.getPrototypeOf(i.prototype),"innerHTML",e,this)}}]),i;function i(){return s(this,i),p(this,(i.__proto__||Object.getPrototypeOf(i)).apply(this,arguments))}},function(e){return a(i,e),r(i,[{key:"init",value:function(e){var t=this;c(i.prototype.__proto__||Object.getPrototypeOf(i.prototype),"init",this).call(this,e),this._isConnected=!1,this.props={},this.updatedDebounced=ve(function(){return t.updated&&t.updated()},50);var n=this.constructor.observedAttributes;Array.isArray(n)&&n.forEach(function(e){He(e)})}},{key:"connectedCallback",value:function(){var r=this;if(c(i.prototype.__proto__||Object.getPrototypeOf(i.prototype),"connectedCallback",this)&&c(i.prototype.__proto__||Object.getPrototypeOf(i.prototype),"connectedCallback",this).call(this),!this._isConnected){this._isConnected=!0;var e=this.constructor.observedAttributes;if(this.initialClassName=this.className,Array.isArray(e)){var o=this.constructor.propTypes;e.forEach(function(e){var t=He(e);if(r.hasAttribute(e)){var n=Je(r,e,o[t]);r.props[t]=n}}),this.checkPropTypes()}}this.updated&&this.updated()}},{key:"attributeChangedCallback",value:function(e,t,n){if(c(i.prototype.__proto__||Object.getPrototypeOf(i.prototype),"attributeChangedCallback",this)&&c(i.prototype.__proto__||Object.getPrototypeOf(i.prototype),"attributeChangedCallback",this).call(this,e,t,n),this.shouldUpdateCallback(n,t)){var r=He(e);if(this.hasAttribute(e)){var o=this.constructor.propTypes;this.props[r]=We(n,e,o[r])}else this.props[r]=null;this.checkPropTypes(),"value"===e&&null!==n&&ce(this,Qe,n,{bubbles:!0,cancelable:!0,composed:!0}),this.updatedDebounced()}}},{key:"setProps",value:function(e){var a=this;c(i.prototype.__proto__||Object.getPrototypeOf(i.prototype),"attributeChangedCallback",this)&&c(i.prototype.__proto__||Object.getPrototypeOf(i.prototype),"attributeChangedCallback",this).call(this);var t=this.constructor.observedAttributes,n=void 0===t?[]:t,r=Object.keys(e).filter(function(e){return-1<n.indexOf(Ve(e))}).reduce(function(e,t){var n=e.props,r=e.shouldUpdate,o=n[t],i=a.props&&a.props[t]?a.props[t]:void 0;return r||a.shouldUpdateCallback(o,i)?(a.props[t]=o,{props:n,shouldUpdate:!0}):{props:n,shouldUpdate:!1}},{props:e,shouldUpdate:!1}).shouldUpdate;this.checkPropTypes(),r&&this._isConnected?this.updated&&this.updated():r&&!this._isConnected&&console.warn("setProps(): Custom Element not connected and props never update",this)}},{key:"checkPropTypes",value:function(){var e=this.constructor,t=e.propTypes,n=e.tagName,r=this.props;t&&x.checkPropTypes(t,r,"prop",n)}},{key:"shouldUpdateCallback",value:function(e,t){return e!==t}},{key:"disconnectedCallback",value:function(){this._isConnected=!1}}],[{key:"observedAttributes",get:function(){var e=this.propTypes;return e&&Object.keys(e).map(Ve)}}]),i;function i(){return s(this,i),p(this,(i.__proto__||Object.getPrototypeOf(i)).apply(this,arguments))}},function(e){return a(l,e),r(l,[{key:"init",value:function(e){var t=0<arguments.length&&void 0!==e?e:{},n=t.template,r=u(t,["template"]);c(l.prototype.__proto__||Object.getPrototypeOf(l.prototype),"init",this).call(this,r),this._template=n,this._hasTemplate=!!n,this._hasRendered=!1,this.updated=this.render}},{key:"render",value:function(){var n=this,e=!this._hasRendered;if(this.willRenderCallback(e),this._hasTemplate){var t=this._template;try{if(e){for(var r=document.createDocumentFragment(),o=[];this.firstChild;)o.push(this.firstChild),r.appendChild(this.firstChild);this._lightDOMRefs=o,this.childrenFragment=r}else this._lightDOMRefs.forEach(function(e){if(!0===e.__isPatching)return n.childrenFragment.appendChild(e),void delete e.__isPatching;var t=e.cloneNode(!0);n.childrenFragment.appendChild(t)});Ie||(this.childrenFragment.children=Array.from(this.childrenFragment.childNodes).filter(function(e){return 1===e.nodeType}));var i=t(this.props,this.childrenFragment,this),a=document.createDocumentFragment();if(Array.isArray(i))i.forEach(function(e){a.appendChild(e)});else if(i){if("string"==typeof i)throw new Ue(this);a.appendChild(i)}if(e)c(l.prototype.__proto__||Object.getPrototypeOf(l.prototype),"appendChild",this).call(this,a);else{var s=this.cloneNode(!1);s._isMorphing=!0,s.appendChild(a),this._isMorphing=!0,function(e,t){if("object"!==(void 0===e?"undefined":O(e)))throw new Error("componentMorph: oldTree should be an object");if("object"!==(void 0===t?"undefined":O(t)))throw new Error("componentMorph: newTree should be an object");Ae(t,e)}(this,s),function(){for(var e=void 0;e=Ce.pop();)delete e.isSameNode;Ce=[]}(),this._isMorphing=!1}}catch(e){console.error(e)}}this._hasRendered=!0,this.didRenderCallback(e)}},{key:"skipChildren",value:function(){return!this._isMorphing}},{key:"willRenderCallback",value:function(e){}},{key:"didRenderCallback",value:function(e){}}]),l;function l(){return s(this,l),p(this,(l.__proto__||Object.getPrototypeOf(l)).apply(this,arguments))}},function(e){return a(i,e),r(i,[{key:"init",value:function(e){var t=0<arguments.length&&void 0!==e?e:{},n=t.styles,r=void 0===n?"":n,o=u(t,["styles"]);c(i.prototype.__proto__||Object.getPrototypeOf(i.prototype),"init",this).call(this,o),this._styles=r}},{key:"connectedCallback",value:function(){c(i.prototype.__proto__||Object.getPrototypeOf(i.prototype),"connectedCallback",this)&&c(i.prototype.__proto__||Object.getPrototypeOf(i.prototype),"connectedCallback",this).call(this),this._appendStyles()}},{key:"_appendStyles",value:function(e){var t=0<arguments.length&&void 0!==e?e:this;if(this._styles){var n=document.createElement("style"),r=document.createTextNode(this._styles);n.appendChild(r),t.insertAdjacentElement?t.insertAdjacentElement("afterbegin",n):t.appendChild(n)}}}]),i;function i(){return s(this,i),p(this,(i.__proto__||Object.getPrototypeOf(i)).apply(this,arguments))}}),rt=(W(nt,B),W(nt,function(i){return a(n,i),r(n,[{key:"init",value:function(e){var t=this;c(n.prototype.__proto__||Object.getPrototypeOf(n.prototype),"init",this).call(this,e),this._appendStyles=function(){n.appendGlobalStyles(t._styles,t.nodeName)}}}],[{key:"appendGlobalStyles",value:function(e,t){var n=1<arguments.length&&void 0!==t?t:i.uuidv4();if(e&&!se[n]){var r=document.createElement("style"),o=document.createTextNode(e);se[n]=!0,r.appendChild(o),r.setAttribute("data-c-name",n.toLowerCase()),document.head.appendChild(r)}}}]),n;function n(){return s(this,n),p(this,(n.__proto__||Object.getPrototypeOf(n)).apply(this,arguments))}},B)(HTMLElement));var ot,it,at,st=(a(lt,rt),r(lt,[{key:"init",value:function(){c(lt.prototype.__proto__||Object.getPrototypeOf(lt.prototype),"init",this).call(this,{styles:".m-header-mobile-others {\n  display: block;\n  background: #fafafa;\n  text-align: left; }\n\n.m-header-mobile-others__list {\n  padding: 0;\n  margin: 0;\n  list-style-type: none; }\n\n.m-header-mobile-others__list-item {\n  display: block;\n  border-top: 1px solid #e5e5e5; }\n  .m-header-mobile-others__list-item:first-child {\n    border-top: none; }\n\n.m-header-mobile-others__link {\n  font-size: 14px;\n  font-weight: 600;\n  line-height: 1.5;\n  letter-spacing: 0.02em;\n  cursor: pointer;\n  display: block;\n  padding: 20px 60px;\n  color: #999;\n  text-transform: uppercase; }\n  @media (min-width: 576px) {\n    .m-header-mobile-others__link {\n      font-size: 16px; } }\n  .m-header-mobile-others__link.is-header-mobile-others-active, .m-header-mobile-others__link:hover, .m-header-mobile-others__link:active, .m-header-mobile-others__link:focus {\n    text-decoration: none;\n    color: #00008f; }\n",template:z})}},{key:"connectedCallback",value:function(){c(lt.prototype.__proto__||Object.getPrototypeOf(lt.prototype),"connectedCallback",this).call(this),this.className=this.initialClassName+" m-header-mobile-others"}}]),lt);function lt(){return s(this,lt),p(this,(lt.__proto__||Object.getPrototypeOf(lt)).apply(this,arguments))}return st.tagName="axa-header-mobile-others",st.propTypes={items:x.arrayOf(x.shape({name:x.string,url:Y,isActive:x.bool}))},ot=st.tagName,it=st,customElements.get(ot)||customElements.define(ot,it,at),st}();
