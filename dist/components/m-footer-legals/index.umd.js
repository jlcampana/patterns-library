!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):e.StyleGuideWebComponent=t()}(this,function(){"use strict";function e(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}function t(e,t){return e(t={exports:{}},t.exports),t.exports}function s(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}var O="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},o=function(e,t,n){return t&&r(e.prototype,t),n&&r(e,n),e};function r(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function c(e,t,n){null===e&&(e=Function.prototype);var o=Object.getOwnPropertyDescriptor(e,t);if(void 0===o){var r=Object.getPrototypeOf(e);return null===r?void 0:c(r,t,n)}if("value"in o)return o.value;var i=o.get;return void 0!==i?i.call(n):void 0}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function u(e,t){var n={};for(var o in e)0<=t.indexOf(o)||Object.prototype.hasOwnProperty.call(e,o)&&(n[o]=e[o]);return n}function p(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function l(e,t,n,o){var r=Object.getOwnPropertyDescriptor(e,t);if(void 0===r){var i=Object.getPrototypeOf(e);null!==i&&l(i,t,n,o)}else if("value"in r&&r.writable)r.value=n;else{var a=r.set;void 0!==a&&a.call(o,n)}return n}var i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},f=function(e,t){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return function(e,t){var n=[],o=!0,r=!1,i=void 0;try{for(var a,s=e[Symbol.iterator]();!(o=(a=s.next()).done)&&(n.push(a.value),!t||n.length!==t);o=!0);}catch(e){r=!0,i=e}finally{try{!o&&s.return&&s.return()}finally{if(r)throw i}}return n}(e,t);throw new TypeError("Invalid attempt to destructure non-iterable instance")},k=function(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}return Array.from(e)},n=t(function(e,t){Object.defineProperty(t,"__esModule",{value:!0});var n="function"==typeof Symbol&&Symbol.for,o=n?Symbol.for("react.element"):60103,r=n?Symbol.for("react.portal"):60106,i=n?Symbol.for("react.fragment"):60107,a=n?Symbol.for("react.strict_mode"):60108,s=n?Symbol.for("react.profiler"):60114,l=n?Symbol.for("react.provider"):60109,c=n?Symbol.for("react.context"):60110,u=n?Symbol.for("react.async_mode"):60111,p=n?Symbol.for("react.concurrent_mode"):60111,f=n?Symbol.for("react.forward_ref"):60112,d=n?Symbol.for("react.suspense"):60113,h=n?Symbol.for("react.suspense_list"):60120,y=n?Symbol.for("react.memo"):60115,v=n?Symbol.for("react.lazy"):60116,_=n?Symbol.for("react.fundamental"):60117,b=n?Symbol.for("react.responder"):60118;function m(e){if("object"===(void 0===e?"undefined":O(e))&&null!==e){var t=e.$$typeof;switch(t){case o:switch(e=e.type){case u:case p:case i:case s:case a:case d:return e;default:switch(e=e&&e.$$typeof){case c:case f:case l:return e;default:return t}}case v:case y:case r:return t}}}function g(e){return m(e)===p}t.typeOf=m,t.AsyncMode=u,t.ConcurrentMode=p,t.ContextConsumer=c,t.ContextProvider=l,t.Element=o,t.ForwardRef=f,t.Fragment=i,t.Lazy=v,t.Memo=y,t.Portal=r,t.Profiler=s,t.StrictMode=a,t.Suspense=d,t.isValidElementType=function(e){return"string"==typeof e||"function"==typeof e||e===i||e===p||e===s||e===a||e===d||e===h||"object"===(void 0===e?"undefined":O(e))&&null!==e&&(e.$$typeof===v||e.$$typeof===y||e.$$typeof===l||e.$$typeof===c||e.$$typeof===f||e.$$typeof===_||e.$$typeof===b)},t.isAsyncMode=function(e){return g(e)||m(e)===u},t.isConcurrentMode=g,t.isContextConsumer=function(e){return m(e)===c},t.isContextProvider=function(e){return m(e)===l},t.isElement=function(e){return"object"===(void 0===e?"undefined":O(e))&&null!==e&&e.$$typeof===o},t.isForwardRef=function(e){return m(e)===f},t.isFragment=function(e){return m(e)===i},t.isLazy=function(e){return m(e)===v},t.isMemo=function(e){return m(e)===y},t.isPortal=function(e){return m(e)===r},t.isProfiler=function(e){return m(e)===s},t.isStrictMode=function(e){return m(e)===a},t.isSuspense=function(e){return m(e)===d}});e(n);n.typeOf,n.AsyncMode,n.ConcurrentMode,n.ContextConsumer,n.ContextProvider,n.Element,n.ForwardRef,n.Fragment,n.Lazy,n.Memo,n.Portal,n.Profiler,n.StrictMode,n.Suspense,n.isValidElementType,n.isAsyncMode,n.isConcurrentMode,n.isContextConsumer,n.isContextProvider,n.isElement,n.isForwardRef,n.isFragment,n.isLazy,n.isMemo,n.isPortal,n.isProfiler,n.isStrictMode,n.isSuspense;var d=t(function(e,t){});e(d);d.typeOf,d.AsyncMode,d.ConcurrentMode,d.ContextConsumer,d.ContextProvider,d.Element,d.ForwardRef,d.Fragment,d.Lazy,d.Memo,d.Portal,d.Profiler,d.StrictMode,d.Suspense,d.isValidElementType,d.isAsyncMode,d.isConcurrentMode,d.isContextConsumer,d.isContextProvider,d.isElement,d.isForwardRef,d.isFragment,d.isLazy,d.isMemo,d.isPortal,d.isProfiler,d.isStrictMode,d.isSuspense,t(function(e){e.exports=n});var h=Object.getOwnPropertySymbols,y=Object.prototype.hasOwnProperty,v=Object.prototype.propertyIsEnumerable;!function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},n=0;n<10;n++)t["_"+String.fromCharCode(n)]=n;if("0123456789"!==Object.getOwnPropertyNames(t).map(function(e){return t[e]}).join(""))return!1;var o={};return"abcdefghijklmnopqrst".split("").forEach(function(e){o[e]=e}),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},o)).join("")}catch(e){return!1}}()||Object.assign,Function.call.bind(Object.prototype.hasOwnProperty);function _(){}function b(){}b.resetWarningCache=_;var m=t(function(e){e.exports=function(){function e(e,t,n,o,r,i){if("SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"!==i){var a=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw a.name="Invariant Violation",a}}function t(){return e}var n={array:e.isRequired=e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:b,resetWarningCache:_};return n.PropTypes=n}()}),g=0;function C(e,t){var n=e[t];return"function"==typeof n&&(e[t]=function(t){function n(){return t.apply(void 0,arguments)}return 0===g&&(g++,Object.keys(t).map(function(e){return n[e]=t[e],e}).reduce(C,n),g--),n}(n)),e}var x=m;Object.keys(x).reduce(C,x);var P=x.oneOf(["left","center","right"]),w=x.oneOf(["left","right"]),T=(x.oneOf(["top","bottom"]),x.oneOf(["up","down"])),j=x.oneOf(["ok","pending","error","unknown"]),E=x.oneOf(["row","col","rowgroup","colgroup","auto"]),N=x.oneOfType([x.string,x.number]),A={text:N,value:x.any,rowspan:N,colspan:N,scope:E,align:P,dense:x.bool},S={float:w,strong:x.bool,bold:x.bool},R=x.oneOfType([x.string,x.number]),M=x.oneOfType([R,x.shape(i({},A,{sort:T,sortActive:x.bool}))]),D=x.oneOfType([R,x.shape(i({},A,S,{action:x.bool,state:j}))]),L=x.oneOfType([R,x.shape(i({},A,S))]),F=x.oneOfType([x.arrayOf(M),x.shape({cells:x.arrayOf(M)})]),U=x.oneOfType([x.arrayOf(D),x.shape({cells:x.arrayOf(D),action:x.bool})]),I=x.oneOfType([x.arrayOf(L),x.shape({cells:x.arrayOf(L)})]),$=(x.oneOfType([F,x.arrayOf(F)]),x.oneOfType([U,x.arrayOf(U)]),x.oneOfType([I,x.arrayOf(I)]),t(function(e){function a(){for(var e=[],t=0;t<arguments.length;t++){var n=arguments[t];if(n){var o=void 0===n?"undefined":O(n);if("string"===o||"number"===o)e.push(n);else if(Array.isArray(n)&&n.length){var r=a.apply(null,n);r&&e.push(r)}else if("object"===o)for(var i in n)s.call(n,i)&&n[i]&&e.push(i)}}return e.join(" ")}var s;s={}.hasOwnProperty,e.exports?(a.default=a,e.exports=a):window.classNames=a})),V=/^\s*(?:true|false|null|undefined|-?[0-9]+\.?[0-9]*|[[{](?:.|[\s])*[\]}])\s*$/;function q(t,n,e){var o=t;if(e)return function(t,n,e){var o=t;switch(e){case x.string:case x.string.isRequired:return t;case x.bool:case x.bool.isRequired:if(!t||n===t)return!0;case x.number:case x.number.isRequired:case x.object:case x.object.isRequired:case x.array:case x.array.isRequired:default:if(V.test(t))try{o=JSON.parse(t)}catch(e){console.error("Attribute "+n+" has an error:\n"+e+"\n",t)}}return o}(t,n,e);if(t&&n!==t){if(V.test(t))try{o=JSON.parse(t)}catch(e){console.error("Attribute "+n+" has an error:\n"+e+"\n",t)}}else o=!0;return o}var z=/(?:^\w|[A-Z]|\b\w|\s+|[-_]+)/g,W=/[-_]+/g;function K(e){return e.replace(z,B)}function B(e,t){return 0==+e||W.test(e)?"":0===t?e.toLowerCase():e.toUpperCase()}function H(e,t,n){var o=1===e.nodeType,r=e.constructor.propTypes,i=n;!n&&o&&(i=(void 0===r?{}:r)[K(t)]);if(o&&!e.hasAttribute(t))return i!==x.bool&&i!==x.bool.isRequired&&void 0;var a=e.value;return t?a=e.getAttribute(t):t=e.name,a=q(a,t,i)}function G(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];return function(e){return t.reduceRight(function(e,t){return t(e)},e)}}function J(e){return te((a(t,e),o(t,[{key:"init",value:function(){this._id=function(e){return e in ee||(ee[e]=0),++ee[e]}(this.nodeName),this._initialised=!0}},{key:"connectedCallback",value:function(){this._initialised||this.init()}},{key:"attributeChangedCallback",value:function(){this._initialised||this.init()}}],[{key:"uuidv4",value:function(){return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,function(e){var t=16*Math.random()|0;return("x"==e?t:3&t|8).toString(16)})}}]),t));function t(){return s(this,t),p(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}}var Y,Z,X,Q,ee={},te=(Y=Object,Z=Y.getPrototypeOf||function(e){return e.__proto__},X=Y.setPrototypeOf||function(e,t){return e.__proto__=t,e},Q="object"===("undefined"==typeof Reflect?"undefined":O(Reflect))?Reflect.construct:function(e,t,n){var o,r=[null];return r.push.apply(r,t),o=e.bind.apply(e,r),X(new o,n.prototype)},function(e){var t=Z(e);return X(e,X(function(){return Q(t,arguments,Z(this).constructor)},t))}),ne={},oe=function(){try{var e=new window.CustomEvent("test",{cancelable:!0});if(e.preventDefault(),!0!==e.defaultPrevented)throw new Error("Could not prevent default");return window.CustomEvent}catch(e){}return t;function t(e){var t=1<arguments.length&&void 0!==arguments[1]?arguments[1]:{},n=t.bubbles,o=void 0!==n&&n,r=t.cancelable,i=void 0!==r&&r,a=t.detail,s=void 0===a?void 0:a,l=document.createEvent("CustomEvent");l.initCustomEvent(e,o,i,s);var c=l.preventDefault;return l.preventDefault=function(){c.call(l);try{Object.defineProperty(this,"defaultPrevented",{get:function(){return!0}})}catch(e){this.defaultPrevented=!0}},l}}();function re(e,t,n,o){var r=new oe(t,i({},3<arguments.length&&void 0!==o?o:{},{detail:n}));return e.dispatchEvent(r)}var ie=function(){var e=!1;if("undefined"!=typeof window&&"function"==typeof window.addEventListener){var t=Object.defineProperty({},"passive",{get:function(){e=!0}}),n=function(){};window.addEventListener("testPassiveEventSupport",n,t),window.removeEventListener("testPassiveEventSupport",n,t)}return e}();function ae(e){for(var n=e.className,o=!1,r=!0,t=arguments.length,i=Array(1<t?t-1:0),a=1;a<t;a++)i[a-1]=arguments[a];var s=i.map(function(e){var t=function(e,t){return new RegExp("^"+e+"$|^"+e+"\\s|\\s"+e+"\\s|\\s"+e+"$",t)}(e).test(n);t?o=!0:r=!1;return{className:e,hasClass:t}});return!(!r&&!o)&&s}function se(e,t){if(!e)return!1;for(var n=Object.keys(e),o=n.length,r=0;r<o;++r){var i=n[r];if(e[i]===t)return delete e[i]}return!1}var le=/\s+/,ce={transitionend:function(){for(var e=document.createElement("div").style,t={transition:"transitionend",OTransition:"oTransitionEnd otransitionend",MozTransition:"transitionend",WebkitTransition:"webkitTransitionEnd"},n=Object.keys(t),o=n.length,r=void 0,i=0;i<o;++i)if(void 0!==e[r=n[i]])return t[r];return""}()};function ue(n,e,o,r,t){var i=4<arguments.length&&void 0!==t?t:{},a=i.capture,s=void 0!==a&&a,l=i.passive,c=void 0===l||l;if(ce[e]&&(e=ce[e]),!n||!e)return null;var u=void 0===o?"undefined":O(o),p=o&&"string"===u;if("function"===u){if(r){var f=r;s=f.capture,c=f.passive}r=o}for(var d=ie?{capture:s,passive:c}:s,h=p?function(e){var t=e.target;for(;!ae(t,o)&&t!==n;)t=t.parentNode;if(t!==n)return r(e,t)}:r,y=e.split(le),v=y.length,_=0;_<v;++_)n.addEventListener(y[_],h,d);return function e(){for(var t=0;t<v;++t)n.removeEventListener(y[t],h,d);se(this,e)}}function pe(o,e,t){var r=1<arguments.length&&void 0!==e?e:0,n=2<arguments.length&&void 0!==t?t:{},i=n.leading,a=void 0!==i&&i,s=n.trailing,l=void 0===s||s,c=n.maxWait,u=void 0!==c&&c,p=void 0,f=void 0,d=void 0,h=void 0,y=!1,v=r!==u,_=!1!==u;function b(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];return p=t,v&&(f&&clearTimeout(f),f=setTimeout(m,r)),_&&!d&&(d=setTimeout(g,u)),a&&!y&&(y=!0,h=o.apply(void 0,k(p))),h}return b.flush=function(){(f||d)&&(h=o.apply(void 0,k(p)));return C(),h},b.cancel=C,b;function m(){d&&clearTimeout(d),O()}function g(){f&&clearTimeout(f),O()}function O(){l&&(h=o.apply(void 0,k(p))),d=f=null,y=!1}function C(){f&&(clearTimeout(f),f=null),d&&(clearTimeout(d),d=null),p=void 0,y=!1}}window.__subscriptions=window.__subscriptions||{};var fe=window.__subscriptions;function de(e,t,n){var o=ue(2<arguments.length&&void 0!==n?n:document,e,t);fe[e]||(fe[e]={count:0});var r=fe[e];return r.count++,r.onsubscribe||(r.onsubscribe=pe(function(e){return function(){re(document,"pubsub/onsubscribe",e),re(document,"pubsub/onsubscribe/"+e,e),fe[e]&&delete fe[e].unsubscribe}}(e),100)),r.onsubscribe(),function(){r.count--,o.call(this),r.count<=0&&delete fe[e]}}ue(document,"pubsub/onsubscribe",function(e){var t=e.detail;fe[t]||(fe[t]={count:0});var n=fe[t],o=n.queue;Array.isArray(o)&&(o.forEach(function(e){var t=f(e,3),n=t[0],o=t[1];re(t[2],n,o)}),delete n.queue)});function he(e,t){return e===t}var ye;ye=function(){var e;return(e=console).log.apply(e,arguments)},function(){var r=0<arguments.length&&void 0!==arguments[0]?arguments[0]:he;return function(){for(var e=arguments.length,o=Array(e),t=0;t<e;t++)o[t]=arguments[t];return function(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];return function(){return r.apply(void 0,[].concat(o,t))?ye.apply(void 0,arguments):void 0}}}}()(!0);function ve(e){return-1!==Object.prototype.toString.call(e).indexOf("DocumentFragment")}var _e=[];var be=1,me=3,ge=8;function Oe(e,t){var n=e.nodeType;n===be&&function(e,t){for(var n=t.skipChildren&&t.skipChildren(),o=t.constructor.observedAttributes,r=o&&Array.isArray(o)&&o.length,i=function(e){return n&&r&&-1===o.indexOf(e)},a=t.attributes,s=e.attributes,l=null,c=null,u=null,p=null,f=s.length-1;0<=f;--f)if(p=s[f],u=p.name,l=p.namespaceURI,c=p.value,!i(u))if(l){var d=p.localName;t.getAttributeNS(l,d||u)!==c&&t.setAttributeNS(l,u,c)}else t.hasAttribute(u)?t.getAttribute(u)!==c&&("null"===c||"undefined"===c?t.removeAttribute(u):t.setAttribute(u,c)):t.setAttribute(u,c);for(var h=a.length-1;0<=h;--h)if(!1!==(p=a[h]).specified){if(u=p.name,l=p.namespaceURI,i(u))continue;l?(u=p.localName||u,e.hasAttributeNS(l,u)||t.removeAttributeNS(l,u)):e.hasAttributeNS(null,u)||t.removeAttribute(u)}}(e,t),n!==me&&n!==ge||t.nodeValue===e.nodeValue||(t.nodeValue=e.nodeValue)}function Ce(e,t){var n=e.nodeName;"INPUT"===n?function(e,t){var n=e.value,o=t.value;ke(e,t,"checked"),ke(e,t,"disabled"),n!==o&&(t.setAttribute("value",n),t.value=n);"null"===n&&(t.value="",t.removeAttribute("value"));e.hasAttributeNS(null,"value")?"range"===t.type&&(t.value=n):t.removeAttribute("value")}(e,t):"OPTION"===n?function(e,t){ke(e,t,"selected")}(e,t):"TEXTAREA"===n?function(e,t){var n=e.value;n!==t.value&&(t.value=n);if(t.firstChild&&t.firstChild.nodeValue!==n){if(""===n&&t.firstChild.nodeValue===t.placeholder)return;t.firstChild.nodeValue=n}}(e,t):"SELECT"===n&&function(e,t){var n=-1,o=0,r=t.firstChild,i=void 0,a=void 0;for(;r;)if("OPTGROUP"===(a=r.nodeName&&r.nodeName.toUpperCase()))r=(i=r).firstChild;else{if("OPTION"===a){if(r.hasAttributeNS(null,"selected")){n=o;break}o+=1}!(r=r.nextSibling)&&i&&(r=i.nextSibling,i=null)}t.selectedIndex=n}(0,t)}function ke(e,t,n){e[n]!==t[n]&&(t[n]=e[n],e[n]?t.setAttribute(n,""):t.removeAttribute(n))}var xe=3;function Pe(e,t){return t?e?e.isSameNode&&e.isSameNode(t)?t:e.tagName!==t.tagName?e:(Oe(e,t),t.skipChildren&&t.skipChildren()||function(e,t){for(var n=void 0,o=void 0,r=void 0,i=void 0,a=0,s=0;n=t.childNodes[s],o=e.childNodes[s-a],n||o;s++)if(o)if(n)if(we(o,n))(r=Pe(o,n))!==n&&(t.replaceChild(r,n),a++);else{i=null;for(var l=s;l<t.childNodes.length;l++)if(we(t.childNodes[l],o)){i=t.childNodes[l];break}i?((r=Pe(o,i))!==i&&a++,t.insertBefore(r,n)):o.id||n.id?(t.insertBefore(o,n),a++):(r=Pe(o,n))!==n&&(t.replaceChild(r,n),a++)}else t.appendChild(o),a++;else t.removeChild(n),s--}(e,t),Ce(e,t),t):null:e}function we(e,t){return e.id?e.id===t.id:e.isSameNode?e.isSameNode(t):e.tagName===t.tagName&&(e.type===xe&&e.nodeValue===t.nodeValue)}var Te,je,Ee,Ne,Ae,Se=(Te=Object,je=Te.getPrototypeOf||function(e){return e.__proto__},Ee=Te.setPrototypeOf||function(e,t){return e.__proto__=t,e},Ne="object"===("undefined"==typeof Reflect?"undefined":O(Reflect))?Reflect.construct:function(e,t,n){var o,r=[null];return r.push.apply(r,t),o=e.bind.apply(e,r),Ee(new o,n.prototype)},function(e){var t=je(e);return Ee(e,Ee(function(){return Ne(t,arguments,je(this).constructor)},t))})((Ae=Error,a(Re,Ae),Re));function Re(e){var t;s(this,Re);for(var n="\n    Web Component "+e.nodeName+"%c#"+e._id+" does not accept string as a return from a template. Maybe use bel?}",o=arguments.length,r=Array(1<o?o-1:0),i=1;i<o;i++)r[i-1]=arguments[i];var a=p(this,(t=Re.__proto__||Object.getPrototypeOf(Re)).call.apply(t,[this,n].concat(r)));return Error.captureStackTrace&&Error.captureStackTrace(a,Re),a.name="TemplateNoStringReturnException",a}var Me=!!document.createDocumentFragment().children,De=/[A-Z]/g;function Le(e){return e.replace(De,Fe)}function Fe(e,t,n){var o=e.toLowerCase(),r=n.charAt(t+1);return 0===t||r.toUpperCase()===r?o:"-"+o}var Ue=/iPad|iPhone|iPod/.test(navigator.userAgent)&&!window.MSStream;function Ie(n,e,o,t){var r=3<arguments.length&&void 0!==t?t:{},i=r.capture,a=void 0===i||i,s=r.passive,l=void 0===s||s,c=n.ownerDocument.documentElement,u=ue(c,e,function(e){var t=e.target;if(!n.contains(t)&&n!==t)return o(e)},{capture:a,passive:l});return function(e){Ue&&(e.style.cursor="pointer")}(c),u}var $e=function(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];for(var o=t.length,r={},i=0;i<o;++i){var a=t[i];r[a.toUpperCase()]=a}return r}("click","change","keyup","enter","move","leave","Escape","Esc","touchstart","touchmove","touchend","input","resize","paste"),Ve="axa-change",qe="data-prevent-default";function ze(e){var i=this,t=1<arguments.length&&void 0!==arguments[1]?arguments[1]:{};s(this,ze),this._handleClick=function(e,t){i.shouldPreventDefault(t||e.currentTarget)&&e.preventDefault();var n=!i._lastToggleNode,o=t!==i._lastToggleNode,r=!n&&!o;n?(i._notify($e.ENTER,t),i._onInteractive()):o&&i._notify($e.MOVE,t,i._lastToggleNode),i._lastToggleNode=t,r&&i._options.sameClickClose&&i._close()},this._handleClose=function(e,t){i.shouldPreventDefault(t||e.currentTarget)&&e.preventDefault(),i._close()},this._handleKeyUp=function(e){e.key!==$e.ESCAPE&&e.key!==$e.ESC&&27!==e.keyCode||(e.preventDefault(),i._close())},this._init(e,t)}(o(ze,[{key:"_init",value:function(e,t){e&&(this._wcNode=e),t&&(this._options=i({},ze.DEFAULTS,t));var n=this._options.containerClass;this._container=n?this._wcNode.querySelector(n):this._wcNode,this._on()}},{key:"_on",value:function(){this._off(),this._unClick=ue(this._container,$e.CLICK,this._options.toggleClass,this._handleClick,{passive:!this._options.preventDefault})}},{key:"_off",value:function(){this._unClick&&this._unClick(),this._offInteractive()}},{key:"_onInteractive",value:function(){this._offInteractive();var e=this._container,t=this._options,n=t.closeClass,o=t.outerClose,r=t.escapeClose,i=t.preventDefault;n&&(this._unCloseClick=ue(e,$e.CLICK,n,this._handleClose,{passive:!i})),o&&(this._unOuterClick=Ie(e,$e.CLICK,this._handleClose,{passive:!i})),r&&(this._unCloseEscape=ue(e.ownerDocument,$e.KEYUP,this._handleKeyUp,{passive:!1}))}},{key:"shouldPreventDefault",value:function(e){return e.hasAttribute(qe)?H(e,qe):this._options.preventDefault}},{key:"_offInteractive",value:function(){this._unOuterClick&&this._unOuterClick(),this._unCloseClick&&this._unCloseClick(),this._unCloseEscape&&this._unCloseEscape(),this.deleteLastToggleNode()}},{key:"_close",value:function(){this._lastToggleNode&&(this._notify($e.LEAVE,this._lastToggleNode),this._offInteractive(),this.deleteLastToggleNode())}},{key:"_notify",value:function(e,t,n){e in this&&"function"==typeof this[e]&&this[e](t,n)}},{key:"enter",value:function(e){throw new Error("UiEvent.enter method not overwritten")}},{key:"move",value:function(e,t){}},{key:"leave",value:function(e){throw new Error("UiEvent.leave method not overwritten")}},{key:"destroy",value:function(){this._off(),delete this._wcNode,delete this._options}},{key:"deleteLastToggleNode",value:function(){delete this._lastToggleNode}},{key:"lastToggleNode",get:function(){return this._lastToggleNode}}]),ze).DEFAULTS={containerClass:".js-ui-container",toggleClass:"js-ui-toggle",closeClass:"js-ui-close",escapeClose:!0,outerClose:!0,sameClickClose:!0,preventDefault:!0};var We=G(function(e){var t,n;return a(o,e),n=t=o,t.version="2.0.1-beta.264",n;function o(){return s(this,o),p(this,(o.__proto__||Object.getPrototypeOf(o)).apply(this,arguments))}},function(e){return a(n,e),o(n,[{key:"init",value:function(e){var t=this;c(n.prototype.__proto__||Object.getPrototypeOf(n.prototype),"init",this).call(this,e),this._makeContextReady=function(){var e=(0<arguments.length&&void 0!==arguments[0]?arguments[0]:{}).detail;t.contextNode&&(clearTimeout(t.timeoutId),t.timeoutId=setTimeout(function(){t.contextCallback(t.contextNode,e)},10)),t.unContextEnabled&&t.unContextEnabled(),t.unContextEnabled=de("context/available",t._makeContextReady)}}},{key:"connectedCallback",value:function(){c(n.prototype.__proto__||Object.getPrototypeOf(n.prototype),"connectedCallback",this)&&c(n.prototype.__proto__||Object.getPrototypeOf(n.prototype),"connectedCallback",this).call(this),this.contextCallback&&this._makeContextReady()}},{key:"disconnectedCallback",value:function(){c(n.prototype.__proto__||Object.getPrototypeOf(n.prototype),"disconnectedCallback",this)&&c(n.prototype.__proto__||Object.getPrototypeOf(n.prototype),"disconnectedCallback",this).call(this),this.unContextEnabled&&this.unContextEnabled()}},{key:"provideContext",value:function(){var e=this.nodeName.toLowerCase();this.__isContext=!0,function(e,t,n){var o=2<arguments.length&&void 0!==n?n:document;fe[e]||(fe[e]={count:0,queue:[]});var r=fe[e].queue;Array.isArray(r)?r.push([e,t,o]):re(o,e,t)}("context/available",this.__contextName=e)}},{key:"consumeContext",value:function(e){this.__consumedContext=e&&e.toLowerCase()}},{key:"contextNode",get:function(){for(var e=this.__consumedContext,t=this.parentNode;t&&(!t.__isContext||e&&e!==t.__contextName);)t=t.parentNode;return!(!t||!t.__isContext)&&t}}]),n;function n(){return s(this,n),p(this,(n.__proto__||Object.getPrototypeOf(n)).apply(this,arguments))}},function(e){return a(i,e),o(i,[{key:"appendChild",value:function(e){if(this._isMorphing||!this._hasTemplate||!this._hasRendered)return c(i.prototype.__proto__||Object.getPrototypeOf(i.prototype),"appendChild",this).call(this,e);var t=this._lightDOMRefs;return ve(e)?Array.from(e.childNodes).forEach(function(e){e.__isPatching=!0,t.push(e)}):(e.__isPatching=!0,t.push(e)),this.render(),e}},{key:"append",value:function(){for(var e,t=this,n=arguments.length,o=Array(n),r=0;r<n;r++)o[r]=arguments[r];!this._isMorphing&&this._hasTemplate&&this._hasRendered?(o.forEach(function(e){"string"==typeof e&&(e=document.createTextNode(e)),e.__isPatching=!0,t._lightDOMRefs.push(e)}),this.render()):(e=c(i.prototype.__proto__||Object.getPrototypeOf(i.prototype),"append",this)).call.apply(e,[this].concat(o))}},{key:"insertBefore",value:function(e,t){if(this._isMorphing||!this._hasTemplate||!this._hasRendered)return c(i.prototype.__proto__||Object.getPrototypeOf(i.prototype),"insertBefore",this).call(this,e,t);var n=this._lightDOMRefs,o=n.indexOf(t);return-1!==o&&(o=n.length),ve(e)?Array.from(e.childNodes).forEach(function(e,t){e.__isPatching=!0,n.splice(o+t,0,e)}):(e.__isPatching=!0,n.splice(o,0,e)),this.render(),e}},{key:"removeChild",value:function(t){if(this._isMorphing||!this._hasTemplate||!this._hasRendered)return c(i.prototype.__proto__||Object.getPrototypeOf(i.prototype),"removeChild",this).call(this,t);var e=t.parentNode.removeChild(t);return this._lightDOMRefs=this._lightDOMRefs.filter(function(e){return e!==t}),this.render(),e}},{key:"replaceChild",value:function(e,t){return!this._isMorphing&&this._hasTemplate&&this._hasRendered?t.parentNode.replaceChild(e,t):c(i.prototype.__proto__||Object.getPrototypeOf(i.prototype),"replaceChild",this).call(this,e,t)}},{key:"innerText",set:function(e){if(this._hasTemplate&&this._hasRendered){var t=document.createTextNode(e);t.__isPatching=!0,this._lightDOMRefs=[t],this.render()}else l(i.prototype.__proto__||Object.getPrototypeOf(i.prototype),"innerText",e,this)}},{key:"textContent",set:function(e){if(this._hasTemplate&&this._hasRendered){var t=document.createTextNode(e);t.__isPatching=!0,this._lightDOMRefs=[t],this.render()}else l(i.prototype.__proto__||Object.getPrototypeOf(i.prototype),"textContent",e,this)}},{key:"innerHTML",set:function(e){if(this._hasTemplate&&this._hasRendered){var t=document.createElement("div");t.innerHTML=e,this._lightDOMRefs=Array.from(t.children).map(function(e){return e.__isPatching=!0,e}),this.render()}else l(i.prototype.__proto__||Object.getPrototypeOf(i.prototype),"innerHTML",e,this)}}]),i;function i(){return s(this,i),p(this,(i.__proto__||Object.getPrototypeOf(i)).apply(this,arguments))}},function(e){return a(i,e),o(i,[{key:"init",value:function(e){var t=this;c(i.prototype.__proto__||Object.getPrototypeOf(i.prototype),"init",this).call(this,e),this._isConnected=!1,this.props={},this.updatedDebounced=pe(function(){return t.updated&&t.updated()},50);var n=this.constructor.observedAttributes;Array.isArray(n)&&n.forEach(function(e){K(e)})}},{key:"connectedCallback",value:function(){var o=this;if(c(i.prototype.__proto__||Object.getPrototypeOf(i.prototype),"connectedCallback",this)&&c(i.prototype.__proto__||Object.getPrototypeOf(i.prototype),"connectedCallback",this).call(this),!this._isConnected){this._isConnected=!0;var e=this.constructor.observedAttributes;if(this.initialClassName=this.className,Array.isArray(e)){var r=this.constructor.propTypes;e.forEach(function(e){var t=K(e);if(o.hasAttribute(e)){var n=H(o,e,r[t]);o.props[t]=n}}),this.checkPropTypes()}}this.updated&&this.updated()}},{key:"attributeChangedCallback",value:function(e,t,n){if(c(i.prototype.__proto__||Object.getPrototypeOf(i.prototype),"attributeChangedCallback",this)&&c(i.prototype.__proto__||Object.getPrototypeOf(i.prototype),"attributeChangedCallback",this).call(this,e,t,n),this.shouldUpdateCallback(n,t)){var o=K(e);if(this.hasAttribute(e)){var r=this.constructor.propTypes;this.props[o]=q(n,e,r[o])}else this.props[o]=null;this.checkPropTypes(),"value"===e&&null!==n&&re(this,Ve,n,{bubbles:!0,cancelable:!0,composed:!0}),this.updatedDebounced()}}},{key:"setProps",value:function(e){var a=this;c(i.prototype.__proto__||Object.getPrototypeOf(i.prototype),"attributeChangedCallback",this)&&c(i.prototype.__proto__||Object.getPrototypeOf(i.prototype),"attributeChangedCallback",this).call(this);var t=this.constructor.observedAttributes,n=void 0===t?[]:t,o=Object.keys(e).filter(function(e){return-1<n.indexOf(Le(e))}).reduce(function(e,t){var n=e.props,o=e.shouldUpdate,r=n[t],i=a.props&&a.props[t]?a.props[t]:void 0;return o||a.shouldUpdateCallback(r,i)?(a.props[t]=r,{props:n,shouldUpdate:!0}):{props:n,shouldUpdate:!1}},{props:e,shouldUpdate:!1}).shouldUpdate;this.checkPropTypes(),o&&this._isConnected?this.updated&&this.updated():o&&!this._isConnected&&console.warn("setProps(): Custom Element not connected and props never update",this)}},{key:"checkPropTypes",value:function(){var e=this.constructor,t=e.propTypes,n=e.tagName,o=this.props;t&&x.checkPropTypes(t,o,"prop",n)}},{key:"shouldUpdateCallback",value:function(e,t){return e!==t}},{key:"disconnectedCallback",value:function(){this._isConnected=!1}}],[{key:"observedAttributes",get:function(){var e=this.propTypes;return e&&Object.keys(e).map(Le)}}]),i;function i(){return s(this,i),p(this,(i.__proto__||Object.getPrototypeOf(i)).apply(this,arguments))}},function(e){return a(l,e),o(l,[{key:"init",value:function(e){var t=0<arguments.length&&void 0!==e?e:{},n=t.template,o=u(t,["template"]);c(l.prototype.__proto__||Object.getPrototypeOf(l.prototype),"init",this).call(this,o),this._template=n,this._hasTemplate=!!n,this._hasRendered=!1,this.updated=this.render}},{key:"render",value:function(){var n=this,e=!this._hasRendered;if(this.willRenderCallback(e),this._hasTemplate){var t=this._template;try{if(e){for(var o=document.createDocumentFragment(),r=[];this.firstChild;)r.push(this.firstChild),o.appendChild(this.firstChild);this._lightDOMRefs=r,this.childrenFragment=o}else this._lightDOMRefs.forEach(function(e){if(!0===e.__isPatching)return n.childrenFragment.appendChild(e),void delete e.__isPatching;var t=e.cloneNode(!0);n.childrenFragment.appendChild(t)});Me||(this.childrenFragment.children=Array.from(this.childrenFragment.childNodes).filter(function(e){return 1===e.nodeType}));var i=t(this.props,this.childrenFragment,this),a=document.createDocumentFragment();if(Array.isArray(i))i.forEach(function(e){a.appendChild(e)});else if(i){if("string"==typeof i)throw new Se(this);a.appendChild(i)}if(e)c(l.prototype.__proto__||Object.getPrototypeOf(l.prototype),"appendChild",this).call(this,a);else{var s=this.cloneNode(!1);s._isMorphing=!0,s.appendChild(a),this._isMorphing=!0,function(e,t){if("object"!==(void 0===e?"undefined":O(e)))throw new Error("componentMorph: oldTree should be an object");if("object"!==(void 0===t?"undefined":O(t)))throw new Error("componentMorph: newTree should be an object");Pe(t,e)}(this,s),function(){for(var e=void 0;e=_e.pop();)delete e.isSameNode;_e=[]}(),this._isMorphing=!1}}catch(e){console.error(e)}}this._hasRendered=!0,this.didRenderCallback(e)}},{key:"skipChildren",value:function(){return!this._isMorphing}},{key:"willRenderCallback",value:function(e){}},{key:"didRenderCallback",value:function(e){}}]),l;function l(){return s(this,l),p(this,(l.__proto__||Object.getPrototypeOf(l)).apply(this,arguments))}},function(e){return a(i,e),o(i,[{key:"init",value:function(e){var t=0<arguments.length&&void 0!==e?e:{},n=t.styles,o=void 0===n?"":n,r=u(t,["styles"]);c(i.prototype.__proto__||Object.getPrototypeOf(i.prototype),"init",this).call(this,r),this._styles=o}},{key:"connectedCallback",value:function(){c(i.prototype.__proto__||Object.getPrototypeOf(i.prototype),"connectedCallback",this)&&c(i.prototype.__proto__||Object.getPrototypeOf(i.prototype),"connectedCallback",this).call(this),this._appendStyles()}},{key:"_appendStyles",value:function(e){var t=0<arguments.length&&void 0!==e?e:this;if(this._styles){var n=document.createElement("style"),o=document.createTextNode(this._styles);n.appendChild(o),t.insertAdjacentElement?t.insertAdjacentElement("afterbegin",n):t.appendChild(n)}}}]),i;function i(){return s(this,i),p(this,(i.__proto__||Object.getPrototypeOf(i)).apply(this,arguments))}}),Ke=(G(We,J),G(We,function(i){return a(n,i),o(n,[{key:"init",value:function(e){var t=this;c(n.prototype.__proto__||Object.getPrototypeOf(n.prototype),"init",this).call(this,e),this._appendStyles=function(){n.appendGlobalStyles(t._styles,t.nodeName)}}}],[{key:"appendGlobalStyles",value:function(e,t){var n=1<arguments.length&&void 0!==t?t:i.uuidv4();if(e&&!ne[n]){var o=document.createElement("style"),r=document.createTextNode(e);ne[n]=!0,o.appendChild(r),o.setAttribute("data-c-name",n.toLowerCase()),document.head.appendChild(o)}}}]),n;function n(){return s(this,n),p(this,(n.__proto__||Object.getPrototypeOf(n)).apply(this,arguments))}},J)(HTMLElement));var Be,He,Ge,Je=(a(Ye,Ke),o(Ye,[{key:"init",value:function(){c(Ye.prototype.__proto__||Object.getPrototypeOf(Ye.prototype),"init",this).call(this,{styles:".m-footer-legals {\n  font-size: 12px;\n  font-weight: 400;\n  line-height: 1.5;\n  letter-spacing: 0.02em;\n  padding-right: 15px;\n  padding-left: 15px;\n  display: block;\n  max-width: 100%;\n  padding-top: 6px;\n  padding-bottom: 6px;\n  margin-left: auto;\n  color: rgba(255, 255, 255, 0.65);\n  text-align: right; }\n  @media (min-width: 576px) {\n    .m-footer-legals {\n      font-size: 13px;\n      line-height: 1.38; } }\n  @media (max-width: 991px) {\n    .m-footer-legals {\n      padding-bottom: 15px;\n      margin-left: 0;\n      text-align: center; }\n      .m-footer-legals:first-child:last-child {\n        padding-bottom: 6px; } }\n  @media (max-width: 575px) {\n    .m-footer-legals:last-child {\n      padding-top: 0; }\n    .m-footer-legals:first-child {\n      padding-top: 15px; }\n    .m-footer-legals:first-child:last-child {\n      padding-top: 6px; } }\n\n.m-footer-legals__link {\n  position: relative;\n  display: inline-block;\n  padding: 6px 10px;\n  margin: -6px 0;\n  color: rgba(255, 255, 255, 0.65); }\n  .m-footer-legals__link:hover, .m-footer-legals__link:active, .m-footer-legals__link:focus {\n    color: #fff;\n    text-decoration: none; }\n  .m-footer-legals__link::after {\n    position: absolute;\n    left: 0;\n    top: 50%;\n    display: block;\n    width: 1px;\n    height: 14px;\n    margin-top: -7px;\n    content: '';\n    background: rgba(255, 255, 255, 0.65); }\n  .m-footer-legals__link:first-child::after {\n    display: none; }\n\n.m-footer-legals__copy {\n  display: inline-block;\n  margin-left: 10px; }\n\n.m-footer-legals--bottom {\n  -ms-flex-item-align: end;\n      align-self: flex-end;\n  /* stylelint-disable-next-line declaration-no-important */\n  text-align: right !important; }\n  .m-footer-legals--bottom .m-footer-legals__link:last-of-type {\n    margin-right: -10px; }\n  .m-footer-legals--bottom .m-footer-legals__copy {\n    display: block;\n    margin-left: 0; }\n"})}},{key:"connectedCallback",value:function(){c(Ye.prototype.__proto__||Object.getPrototypeOf(Ye.prototype),"connectedCallback",this).call(this),this.render()}},{key:"attributeChangedCallback",value:function(){this.render()}},{key:"render",value:function(){var e=H(this,"bottom");this.className=$(this.initialClassName,"m-footer-legals",{"m-footer-legals--bottom":e})}}]),Ye);function Ye(){return s(this,Ye),p(this,(Ye.__proto__||Object.getPrototypeOf(Ye)).apply(this,arguments))}return Je.tagName="axa-footer-legals",Je.propTypes={bottom:x.bool},Be=Je.tagName,He=Je,customElements.get(Be)||customElements.define(Be,He,Ge),Je});
