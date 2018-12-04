!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):e.StyleGuideWebComponent=t()}(this,function(){"use strict";var e,n,i,r,t=function(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];return function(e){return t.reduceRight(function(e,t){return t(e)},e)}},o={},_="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},c=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")},s=function(){function r(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(e,t,n){return t&&r(e.prototype,t),n&&r(e,n),e}}(),a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},l=function e(t,n,r){null===t&&(t=Function.prototype);var o=Object.getOwnPropertyDescriptor(t,n);if(void 0===o){var i=Object.getPrototypeOf(t);return null===i?void 0:e(i,n,r)}if("value"in o)return o.value;var a=o.get;return void 0!==a?a.call(r):void 0},p=function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)},d=function(e,t){var n={};for(var r in e)0<=t.indexOf(r)||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n},f=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t},u=function e(t,n,r,o){var i=Object.getOwnPropertyDescriptor(t,n);if(void 0===i){var a=Object.getPrototypeOf(t);null!==a&&e(a,n,r,o)}else if("value"in i&&i.writable)i.value=r;else{var s=i.set;void 0!==s&&s.call(o,r)}return r},h=function(e,t){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return function(e,t){var n=[],r=!0,o=!1,i=void 0;try{for(var a,s=e[Symbol.iterator]();!(r=(a=s.next()).done)&&(n.push(a.value),!t||n.length!==t);r=!0);}catch(e){o=!0,i=e}finally{try{!r&&s.return&&s.return()}finally{if(o)throw i}}return n}(e,t);throw new TypeError("Invalid attempt to destructure non-iterable instance")},C=function(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}return Array.from(e)},v=(e=Object,n=e.getPrototypeOf||function(e){return e.__proto__},i=e.setPrototypeOf||function(e,t){return e.__proto__=t,e},r="object"===("undefined"==typeof Reflect?"undefined":_(Reflect))?Reflect.construct:function(e,t,n){var r,o=[null];return o.push.apply(o,t),r=e.bind.apply(e,o),i(new r,n.prototype)},function(e){var t=n(e);return i(e,i(function(){return r(t,arguments,n(this).constructor)},t))}),y=function(n){return v(function(e){function t(){return c(this,t),f(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return p(t,n),s(t,[{key:"init",value:function(){var e;this._id=((e=this.nodeName)in o||(o[e]=0),++o[e]),this._initialised=!0}},{key:"connectedCallback",value:function(){this._initialised||this.init()}},{key:"attributeChangedCallback",value:function(){this._initialised||this.init()}}],[{key:"uuidv4",value:function(){return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,function(e){var t=16*Math.random()|0;return("x"==e?t:3&t|8).toString(16)})}}]),t}())},b={},g=function(){try{var e=new window.CustomEvent("test",{cancelable:!0});if(e.preventDefault(),!0!==e.defaultPrevented)throw new Error("Could not prevent default");return window.CustomEvent}catch(e){}return t;function t(e){var t=1<arguments.length&&void 0!==arguments[1]?arguments[1]:{},n=t.bubbles,r=void 0!==n&&n,o=t.cancelable,i=void 0!==o&&o,a=t.detail,s=void 0===a?void 0:a,u=document.createEvent("CustomEvent");u.initCustomEvent(e,r,i,s);var c=u.preventDefault;return u.preventDefault=function(){c.call(u);try{Object.defineProperty(this,"defaultPrevented",{get:function(){return!0}})}catch(e){this.defaultPrevented=!0}},u}}();function m(e,t,n){var r=3<arguments.length&&void 0!==arguments[3]?arguments[3]:{},o=new g(t,a({},r,{detail:n}));return e.dispatchEvent(o)}var O=function(){var e=!1;if("undefined"!=typeof window&&"function"==typeof window.addEventListener){var t=Object.defineProperty({},"passive",{get:function(){e=!0}}),n=function(){};window.addEventListener("testPassiveEventSupport",n,t),window.removeEventListener("testPassiveEventSupport",n,t)}return e}(),k=/^\s+|\s{2,}|\s+$/g;function w(e,t){return new RegExp("^"+e+"$|^"+e+"\\s|\\s"+e+"\\s|\\s"+e+"$",t)}function x(e,t){var n=t.className;return t.hasClass||e.push(n),e}function N(e){for(var n=e.className,r=!1,o=!0,t=arguments.length,i=Array(1<t?t-1:0),a=1;a<t;a++)i[a-1]=arguments[a];var s=i.map(function(e){var t=w(e).test(n);t?r=!0:o=!1;return{className:e,hasClass:t}});return!(!o&&!r)&&s}function T(e,t){var n=t.className;return t.hasClass&&e.push(n),e}function E(e,t){var n=w(t,"g");return e.replace(n," ").replace(k," ")}var A=/\s+/,j={transitionend:function(){for(var e=document.createElement("div").style,t={transition:"transitionend",OTransition:"oTransitionEnd otransitionend",MozTransition:"transitionend",WebkitTransition:"webkitTransitionEnd"},n=Object.keys(t),r=n.length,o=void 0,i=0;i<r;++i)if(void 0!==e[o=n[i]])return t[o];return""}()};function P(n,e,r,o){var t=4<arguments.length&&void 0!==arguments[4]?arguments[4]:{},i=t.capture,a=void 0!==i&&i,s=t.passive,u=void 0===s||s;if(j[e]&&(e=j[e]),!n||!e)return null;var c=void 0===r?"undefined":_(r),l=r&&"string"===c;if("function"===c){if(o){var p=o;a=p.capture,u=p.passive}o=r}for(var d=O?{capture:a,passive:u}:a,f=l?function(e){var t=e.target;for(;!N(t,r)&&t!==n;)t=t.parentNode;if(t!==n)return o(e,t)}:o,h=e.split(A),v=h.length,y=0;y<v;++y)n.addEventListener(h[y],f,d);return function e(){for(var t=0;t<v;++t)n.removeEventListener(h[t],f,d);!function(e,t){if(!e)return;for(var n=Object.keys(e),r=n.length,o=0;o<r;++o){var i=n[o];if(e[i]===t)return delete e[i]}}(this,e)}}function S(r){var o=1<arguments.length&&void 0!==arguments[1]?arguments[1]:0,e=2<arguments.length&&void 0!==arguments[2]?arguments[2]:{},t=e.leading,i=void 0!==t&&t,n=e.trailing,a=void 0===n||n,s=e.maxWait,u=void 0!==s&&s,c=void 0,l=void 0,p=void 0,d=void 0,f=!1,h=o!==u,v=!1!==u;function y(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];return c=t,h&&(l&&clearTimeout(l),l=setTimeout(_,o)),v&&!p&&(p=setTimeout(b,u)),i&&!f&&(f=!0,d=r.apply(void 0,C(c))),d}return y.flush=function(){(l||p)&&(d=r.apply(void 0,C(c)));return m(),d},y.cancel=m,y;function _(){p&&clearTimeout(p),g()}function b(){l&&clearTimeout(l),g()}function g(){a&&(d=r.apply(void 0,C(c))),p=l=null,f=!1}function m(){l&&(clearTimeout(l),l=null),p&&(clearTimeout(p),p=null),c=void 0,f=!1}}window.__subscriptions=window.__subscriptions||{};var R=window.__subscriptions;function D(e,t){var n=2<arguments.length&&void 0!==arguments[2]?arguments[2]:document;R[e]||(R[e]={count:0,queue:[]});var r=R[e].queue;Array.isArray(r)?r.push([e,t,n]):m(n,e,t)}function L(e,t){var n=P(2<arguments.length&&void 0!==arguments[2]?arguments[2]:document,e,t);R[e]||(R[e]={count:0});var r,o=R[e];return o.count++,o.onsubscribe||(o.onsubscribe=S((r=e,function(){m(document,"pubsub/onsubscribe",r),m(document,"pubsub/onsubscribe/"+r,r),R[r]&&delete R[r].unsubscribe}),100)),o.onsubscribe(),function(){o.count--,n.call(this),o.count<=0&&delete R[e]}}P(document,"pubsub/onsubscribe",function(e){var t=e.detail;R[t]||(R[t]={count:0});var n=R[t],r=n.queue;Array.isArray(r)&&(r.forEach(function(e){var t=h(e,3),n=t[0],r=t[1],o=t[2];m(o,n,r)}),delete n.queue)});var U,M=function(e,t){return e===t},I=((U=function(){var e;return(e=console).log.apply(e,arguments)},function(){var o=0<arguments.length&&void 0!==arguments[0]?arguments[0]:M;return function(){for(var e=arguments.length,r=Array(e),t=0;t<e;t++)r[t]=arguments[t];return function(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];return function(){return o.apply(void 0,[].concat(r,t))?U.apply(void 0,arguments):void 0}}}})()(!0),[]);var V=1,q=3,F=8;function z(e,t){var n=e.nodeType,r=e.nodeName;n===V&&function(e,t){for(var n=t.skipChildren&&t.skipChildren(),r=t.constructor.observedAttributes,o=r&&Array.isArray(r)&&r.length,i=function(e){return n&&o&&-1===r.indexOf(e)},a=t.attributes,s=e.attributes,u=null,c=null,l=null,p=null,d=s.length-1;0<=d;--d)if(p=s[d],l=p.name,u=p.namespaceURI,c=p.value,!i(l))if(u){var f=p.localName;t.getAttributeNS(u,f||l)!==c&&t.setAttributeNS(u,l,c)}else t.hasAttribute(l)?t.getAttribute(l)!==c&&("null"===c||"undefined"===c?t.removeAttribute(l):t.setAttribute(l,c)):t.setAttribute(l,c);for(var h=a.length-1;0<=h;--h)if(!1!==(p=a[h]).specified){if(l=p.name,u=p.namespaceURI,i(l))continue;u?(l=p.localName||l,e.hasAttributeNS(u,l)||t.removeAttributeNS(u,l)):e.hasAttributeNS(null,l)||t.removeAttribute(l)}}(e,t),n!==q&&n!==F||t.nodeValue===e.nodeValue||(t.nodeValue=e.nodeValue),"INPUT"===r?function(e,t){var n=e.value,r=t.value;K(e,t,"checked"),K(e,t,"disabled"),n!==r&&(t.setAttribute("value",n),t.value=n);"null"===n&&(t.value="",t.removeAttribute("value"));e.hasAttributeNS(null,"value")?"range"===t.type&&(t.value=n):t.removeAttribute("value")}(e,t):"OPTION"===r?K(e,t,"selected"):"TEXTAREA"===r&&function(e,t){var n=e.value;n!==t.value&&(t.value=n);if(t.firstChild&&t.firstChild.nodeValue!==n){if(""===n&&t.firstChild.nodeValue===t.placeholder)return;t.firstChild.nodeValue=n}}(e,t)}function K(e,t,n){e[n]!==t[n]&&(t[n]=e[n],e[n]?t.setAttribute(n,""):t.removeAttribute(n))}var B=3;function W(e,t){return t?e?e.isSameNode&&e.isSameNode(t)?t:e.tagName!==t.tagName?e:(z(e,t),t.skipChildren&&t.skipChildren()||function(e,t){for(var n=void 0,r=void 0,o=void 0,i=void 0,a=0,s=0;n=t.childNodes[s],r=e.childNodes[s-a],n||r;s++)if(r)if(n)if(H(r,n))(o=W(r,n))!==n&&(t.replaceChild(o,n),a++);else{i=null;for(var u=s;u<t.childNodes.length;u++)if(H(t.childNodes[u],r)){i=t.childNodes[u];break}i?((o=W(r,i))!==i&&a++,t.insertBefore(o,n)):r.id||n.id?(t.insertBefore(r,n),a++):(o=W(r,n))!==n&&(t.replaceChild(o,n),a++)}else t.appendChild(r),a++;else t.removeChild(n),s--}(e,t),t):null:e}function H(e,t){return e.id?e.id===t.id:e.isSameNode?e.isSameNode(t):e.tagName===t.tagName&&(e.type===B&&e.nodeValue===t.nodeValue)}var $,Y,G,Z,J=($=Object,Y=$.getPrototypeOf||function(e){return e.__proto__},G=$.setPrototypeOf||function(e,t){return e.__proto__=t,e},Z="object"===("undefined"==typeof Reflect?"undefined":_(Reflect))?Reflect.construct:function(e,t,n){var r,o=[null];return o.push.apply(o,t),r=e.bind.apply(e,o),G(new r,n.prototype)},function(e){var t=Y(e);return G(e,G(function(){return Z(t,arguments,Y(this).constructor)},t))})(function(e){function s(e){var t;c(this,s);for(var n="\n    Web Component "+e.nodeName+"%c#"+e._id+" does not accept string as a return from a template. Maybe use bel?}",r=arguments.length,o=Array(1<r?r-1:0),i=1;i<r;i++)o[i-1]=arguments[i];var a=f(this,(t=s.__proto__||Object.getPrototypeOf(s)).call.apply(t,[this,n].concat(o)));return Error.captureStackTrace&&Error.captureStackTrace(a,s),a.name="TemplateNoStringReturnException",a}return p(s,e),s}(Error)),X=!!document.createDocumentFragment().children;var Q=Object.getOwnPropertySymbols,ee=Object.prototype.hasOwnProperty,te=Object.prototype.propertyIsEnumerable;(function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},n=0;n<10;n++)t["_"+String.fromCharCode(n)]=n;if("0123456789"!==Object.getOwnPropertyNames(t).map(function(e){return t[e]}).join(""))return!1;var r={};return"abcdefghijklmnopqrst".split("").forEach(function(e){r[e]=e}),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},r)).join("")}catch(e){return!1}})()&&Object.assign;var ne="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";function re(){}var oe,ie=(function(e){e.exports=function(){function e(e,t,n,r,o,i){if(i!==ne){var a=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw a.name="Invariant Violation",a}}function t(){return e}var n={array:e.isRequired=e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t};return n.checkPropTypes=re,n.PropTypes=n}()}(oe={exports:{}},oe.exports),oe.exports),ae=0;function se(e,t){var n=e[t];return"function"==typeof n&&(e[t]=function(t){function n(){return t.apply(void 0,arguments)}return 0===ae&&(ae++,Object.keys(t).map(function(e){return n[e]=t[e],e}).reduce(se,n),ae--),n}(n)),e}var ue=ie;Object.keys(ue).reduce(se,ue);var ce=ue.oneOf(["left","center","right"]),le=ue.oneOf(["left","right"]),pe=(ue.oneOf(["top","bottom"]),ue.oneOf(["up","down"])),de=ue.oneOf(["ok","pending","error","unknown"]),fe=ue.oneOf(["row","col","rowgroup","colgroup","auto"]),he=ue.oneOfType([ue.string,ue.number]),ve={text:he,value:ue.any,rowspan:he,colspan:he,scope:fe,align:ce,dense:ue.bool},ye={float:le,strong:ue.bool,bold:ue.bool},_e=ue.oneOfType([ue.string,ue.number]),be=ue.oneOfType([_e,ue.shape(a({},ve,{sort:pe,sortActive:ue.bool}))]),ge=ue.oneOfType([_e,ue.shape(a({},ve,ye,{action:ue.bool,state:de}))]),me=ue.oneOfType([_e,ue.shape(a({},ve,ye))]),Ce=ue.oneOfType([ue.arrayOf(be),ue.shape({cells:ue.arrayOf(be)})]),Oe=ue.oneOfType([ue.arrayOf(ge),ue.shape({cells:ue.arrayOf(ge),action:ue.bool})]),ke=ue.oneOfType([ue.arrayOf(me),ue.shape({cells:ue.arrayOf(me)})]),we=(ue.oneOfType([Ce,ue.arrayOf(Ce)]),ue.oneOfType([Oe,ue.arrayOf(Oe)]),ue.oneOfType([ke,ue.arrayOf(ke)]),/[A-Z]/g);function xe(e){return e.replace(we,Ne)}function Ne(e,t,n){var r=e.toLowerCase(),o=n.charAt(t+1);return 0===t||o.toUpperCase()===o?r:"-"+r}var Te=/^\s*(?:true|false|null|undefined|-?[0-9]+\.?[0-9]*|[[{](?:.|[\s])*[\]}])\s*$/;function Ee(t,n,e){var r=t;if(e)return function(t,n,e){var r=t;switch(e){case ue.string:case ue.string.isRequired:return t;case ue.bool:case ue.bool.isRequired:if(!t||n===t)return!0;case ue.number:case ue.number.isRequired:case ue.object:case ue.object.isRequired:case ue.array:case ue.array.isRequired:default:if(Te.test(t))try{r=JSON.parse(t)}catch(e){console.error("Attribute "+n+" has an error:\n"+e+"\n",t)}}return r}(t,n,e);if(t&&n!==t){if(Te.test(t))try{r=JSON.parse(t)}catch(e){console.error("Attribute "+n+" has an error:\n"+e+"\n",t)}}else r=!0;return r}var Ae=/(?:^\w|[A-Z]|\b\w|\s+|[-_]+)/g,je=/[-_]+/g;function Pe(e){return e.replace(Ae,Se)}function Se(e,t){return 0==+e||je.test(e)?"":0===t?e.toLowerCase():e.toUpperCase()}function Re(e,t,n){var r=1===e.nodeType,o=e.constructor.propTypes,i=n;!n&&r&&(i=(void 0===o?{}:o)[Pe(t)]);if(r&&!e.hasAttribute(t))return i!==ue.bool&&i!==ue.bool.isRequired&&void 0;var a=e.value;return t?a=e.getAttribute(t):t=e.name,a=Ee(a,t,i)}function De(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];for(var r=t.length,o={},i=0;i<r;++i){var a=t[i];o[a.toUpperCase()]=a}return o}var Le=/iPad|iPhone|iPod/.test(navigator.userAgent)&&!window.MSStream;function Ue(n,e,r){var t,o=3<arguments.length&&void 0!==arguments[3]?arguments[3]:{},i=o.capture,a=void 0===i||i,s=o.passive,u=void 0===s||s,c=n.ownerDocument.documentElement,l=P(c,e,function(e){var t=e.target;if(!n.contains(t)&&n!==t)return r(e)},{capture:a,passive:u});return t=c,Le&&(t.style.cursor="pointer"),l}var Me=De("click","change","keyup","enter","move","leave","Escape","Esc","touchstart","touchmove","touchend","input","resize"),Ie="axa-change",Ve="data-prevent-default";(function(){function r(e){var i=this,t=1<arguments.length&&void 0!==arguments[1]?arguments[1]:{};c(this,r),this._handleClick=function(e,t){i.shouldPreventDefault(t||e.currentTarget)&&e.preventDefault();var n=!i._lastToggleNode,r=t!==i._lastToggleNode,o=!n&&!r;n?(i._notify(Me.ENTER,t),i._onInteractive()):r&&i._notify(Me.MOVE,t,i._lastToggleNode),i._lastToggleNode=t,o&&i._options.sameClickClose&&i._close()},this._handleClose=function(e,t){i.shouldPreventDefault(t||e.currentTarget)&&e.preventDefault(),i._close()},this._handleKeyUp=function(e){(e.key===Me.ESCAPE||e.key===Me.ESC||27===e.keyCode)&&(e.preventDefault(),i._close())},this._init(e,t)}return s(r,[{key:"_init",value:function(e,t){e&&(this._wcNode=e),t&&(this._options=a({},r.DEFAULTS,t));var n=this._options.containerClass;this._container=n?this._wcNode.querySelector(n):this._wcNode,this._on()}},{key:"_on",value:function(){this._off(),this._unClick=P(this._container,Me.CLICK,this._options.toggleClass,this._handleClick,{passive:!this._options.preventDefault})}},{key:"_off",value:function(){this._unClick&&this._unClick(),this._offInteractive()}},{key:"_onInteractive",value:function(){this._offInteractive(),this._options.closeClass&&(this._unCloseClick=P(this._container,Me.CLICK,this._options.closeClass,this._handleClose,{passive:!this._options.preventDefault})),this._options.outerClose&&(this._unOuterClick=Ue(this._container,Me.CLICK,this._handleClose,{passive:!this._options.preventDefault})),this._options.escapeClose&&(this._unCloseEscape=P(this._container.ownerDocument,Me.KEYUP,this._handleKeyUp,{passive:!1}))}},{key:"shouldPreventDefault",value:function(e){return e.hasAttribute(Ve)?Re(e,Ve):this._options.preventDefault}},{key:"_offInteractive",value:function(){this._unOuterClick&&this._unOuterClick(),this._unCloseClick&&this._unCloseClick(),this._unCloseEscape&&this._unCloseEscape(),this.deleteLastToggleNode()}},{key:"_close",value:function(){this._lastToggleNode&&(this._notify(Me.LEAVE,this._lastToggleNode),this._offInteractive(),this.deleteLastToggleNode())}},{key:"_notify",value:function(e,t,n){e in this&&"function"==typeof this[e]&&this[e](t,n)}},{key:"enter",value:function(e){throw new Error("UiEvent.enter method not overwritten")}},{key:"move",value:function(e,t){}},{key:"leave",value:function(e){throw new Error("UiEvent.leave method not overwritten")}},{key:"destroy",value:function(){this._off(),delete this._wcNode,delete this._options}},{key:"deleteLastToggleNode",value:function(){delete this._lastToggleNode}},{key:"lastToggleNode",get:function(){return this._lastToggleNode}}]),r}()).DEFAULTS={containerClass:".js-ui-container",toggleClass:"js-ui-toggle",closeClass:"js-ui-close",escapeClose:!0,outerClose:!0,sameClickClose:!0,preventDefault:!0};var qe=t(function(n){var e,t;return t=e=function(e){function t(){return c(this,t),f(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return p(t,n),t}(),e.version="2.0.1-beta.230",t},function(t){return function(e){function a(){var e,t,n;c(this,a);for(var r=arguments.length,o=Array(r),i=0;i<r;i++)o[i]=arguments[i];return(t=n=f(this,(e=a.__proto__||Object.getPrototypeOf(a)).call.apply(e,[this].concat(o))))._makeContextReady=function(){var e=(0<arguments.length&&void 0!==arguments[0]?arguments[0]:{}).detail;n.contextNode&&(clearTimeout(n.timeoutId),n.timeoutId=setTimeout(function(){n.contextCallback(n.contextNode,e)},10)),n.unContextEnabled&&n.unContextEnabled(),n.unContextEnabled=L("context/available",n._makeContextReady)},f(n,t)}return p(a,t),s(a,[{key:"connectedCallback",value:function(){l(a.prototype.__proto__||Object.getPrototypeOf(a.prototype),"connectedCallback",this)&&l(a.prototype.__proto__||Object.getPrototypeOf(a.prototype),"connectedCallback",this).call(this),this.contextCallback&&this._makeContextReady()}},{key:"disconnectedCallback",value:function(){l(a.prototype.__proto__||Object.getPrototypeOf(a.prototype),"disconnectedCallback",this)&&l(a.prototype.__proto__||Object.getPrototypeOf(a.prototype),"disconnectedCallback",this).call(this),this.unContextEnabled&&this.unContextEnabled()}},{key:"provideContext",value:function(){var e=this.nodeName.toLowerCase();this.__isContext=!0,D("context/available",this.__contextName=e)}},{key:"consumeContext",value:function(e){this.__consumedContext=e&&e.toLowerCase()}},{key:"contextNode",get:function(){for(var e=this.__consumedContext,t=this.parentNode;t&&(!t.__isContext||e&&e!==t.__contextName);)t=t.parentNode;return!(!t||!t.__isContext)&&t}}]),a}()},function(t){return function(e){function n(){return c(this,n),f(this,(n.__proto__||Object.getPrototypeOf(n)).apply(this,arguments))}return p(n,t),s(n,[{key:"appendChild",value:function(e){!this._isMorphing&&this._hasTemplate&&this._hasRendered?(this._lightDOMRefs.push(e),this.render()):l(n.prototype.__proto__||Object.getPrototypeOf(n.prototype),"appendChild",this).call(this,e)}},{key:"innerText",set:function(e){if(this._hasTemplate&&this._hasRendered){var t=document.createTextNode(e);this._lightDOMRefs=[t],this.render()}else u(n.prototype.__proto__||Object.getPrototypeOf(n.prototype),"innerText",e,this)}},{key:"textContent",set:function(e){if(this._hasTemplate&&this._hasRendered){var t=document.createTextNode(e);this._lightDOMRefs=[t],this.render()}else u(n.prototype.__proto__||Object.getPrototypeOf(n.prototype),"textContent",e,this)}},{key:"innerHTML",set:function(e){if(this._hasTemplate&&this._hasRendered){var t=document.createElement("div");t.innerHTML=e,this._lightDOMRefs=Array.from(t.children),this.render()}else u(n.prototype.__proto__||Object.getPrototypeOf(n.prototype),"innerHTML",e,this)}}]),n}()},function(t){return function(e){function i(){var e,t,s;c(this,i);for(var n=arguments.length,r=Array(n),o=0;o<n;o++)r[o]=arguments[o];return(t=s=f(this,(e=i.__proto__||Object.getPrototypeOf(i)).call.apply(e,[this].concat(r))))._reduceProps=function(e,t){var n=e.props,r=e.shouldUpdate,o="_"+t,i=n[t],a=s[o];return r||s.shouldUpdateCallback(i,a)?(s.props[t]=i,{props:n,shouldUpdate:!0}):{props:n,shouldUpdate:!1}},f(s,t)}return p(i,t),s(i,[{key:"init",value:function(e){var t=this;l(i.prototype.__proto__||Object.getPrototypeOf(i.prototype),"init",this).call(this,e),this._isConnected=!1,this.props={},this.updatedDebounced=S(function(){return t.updated&&t.updated()},50);var n=this.constructor.observedAttributes;Array.isArray(n)&&n.forEach(function(e){Pe(e)})}},{key:"connectedCallback",value:function(){var r=this;if(l(i.prototype.__proto__||Object.getPrototypeOf(i.prototype),"connectedCallback",this)&&l(i.prototype.__proto__||Object.getPrototypeOf(i.prototype),"connectedCallback",this).call(this),!this._isConnected){this._isConnected=!0;var e=this.constructor.observedAttributes;if(this.initialClassName=this.className,Array.isArray(e)){var o=this.constructor.propTypes;e.forEach(function(e){var t=Pe(e);if(r.hasAttribute(e)){var n=Re(r,e,o[t]);r.props[t]=n}}),this.checkPropTypes()}}this.updated&&this.updated()}},{key:"attributeChangedCallback",value:function(e,t,n){if(l(i.prototype.__proto__||Object.getPrototypeOf(i.prototype),"attributeChangedCallback",this)&&l(i.prototype.__proto__||Object.getPrototypeOf(i.prototype),"attributeChangedCallback",this).call(this,e,t,n),this.shouldUpdateCallback(n,t)){var r=Pe(e);if(this.hasAttribute(e)){var o=this.constructor.propTypes;this.props[r]=Ee(n,e,o[r])}else this.props[r]=null;this.checkPropTypes(),"value"===e&&null!==n&&m(this,Ie,n,{bubbles:!0,cancelable:!0,composed:!0}),this.updatedDebounced()}}},{key:"setProps",value:function(e){var t=this.constructor.observedAttributes,n=void 0===t?[]:t,r=Object.keys(e).filter(function(e){return-1<n.indexOf(xe(e))}).reduce(this._reduceProps,{props:e,shouldUpdate:!1}).shouldUpdate;this.checkPropTypes(),r&&this._isConnected&&this.updated&&this.updated()}},{key:"checkPropTypes",value:function(){var e=this.constructor,t=e.propTypes,n=e.tagName;t&&ue.checkPropTypes(t,this.props,"prop",n)}},{key:"shouldUpdateCallback",value:function(e,t){return e!==t}},{key:"disconnectedCallback",value:function(){this._isConnected=!1}}],[{key:"observedAttributes",get:function(){var e=this.propTypes;return e&&Object.keys(e).map(xe)}}]),i}()},function(t){return function(e){function u(){return c(this,u),f(this,(u.__proto__||Object.getPrototypeOf(u)).apply(this,arguments))}return p(u,t),s(u,[{key:"init",value:function(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:{},t=e.template,n=d(e,["template"]);l(u.prototype.__proto__||Object.getPrototypeOf(u.prototype),"init",this).call(this,n),this._template=t,this._hasTemplate=!!t,this._hasRendered=!1,this.updated=this.render}},{key:"render",value:function(){var n=this,e=!this._hasRendered;if(this.willRenderCallback(e),this._hasTemplate){var t=this._template;try{if(e){for(var r=document.createDocumentFragment(),o=[];this.firstChild;)o.push(this.firstChild),r.appendChild(this.firstChild);this._lightDOMRefs=o,this.childrenFragment=r}else this._lightDOMRefs.forEach(function(e){var t=e.cloneNode(!0);n.childrenFragment.appendChild(t)});X||(this.childrenFragment.children=Array.from(this.childrenFragment.childNodes).filter(function(e){return 1===e.nodeType}));var i=t(this.props,this.childrenFragment,this),a=document.createDocumentFragment();if(Array.isArray(i))i.forEach(function(e){a.appendChild(e)});else if(i){if("string"==typeof i)throw new J(this);a.appendChild(i)}if(e)l(u.prototype.__proto__||Object.getPrototypeOf(u.prototype),"appendChild",this).call(this,a);else{var s=this.cloneNode(!1);s._isMorphing=!0,s.appendChild(a),this._isMorphing=!0,function(e,t){if("object"!==(void 0===e?"undefined":_(e)))throw new Error("componentMorph: oldTree should be an object");if("object"!==(void 0===t?"undefined":_(t)))throw new Error("componentMorph: newTree should be an object");W(t,e)}(this,s),function(){for(var e=void 0;e=I.pop();)delete e.isSameNode;I=[]}(),this._isMorphing=!1}}catch(e){console.error(e)}}this._hasRendered=!0,this.didRenderCallback(e)}},{key:"skipChildren",value:function(){return!this._isMorphing}},{key:"willRenderCallback",value:function(e){}},{key:"didRenderCallback",value:function(e){}}]),u}()},function(t){return function(e){function o(){return c(this,o),f(this,(o.__proto__||Object.getPrototypeOf(o)).apply(this,arguments))}return p(o,t),s(o,[{key:"init",value:function(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:{},t=e.styles,n=void 0===t?"":t,r=d(e,["styles"]);l(o.prototype.__proto__||Object.getPrototypeOf(o.prototype),"init",this).call(this,r),this._styles=n}},{key:"connectedCallback",value:function(){l(o.prototype.__proto__||Object.getPrototypeOf(o.prototype),"connectedCallback",this)&&l(o.prototype.__proto__||Object.getPrototypeOf(o.prototype),"connectedCallback",this).call(this),this._appendStyles()}},{key:"_appendStyles",value:function(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:this;if(this._styles){var t=document.createElement("style"),n=document.createTextNode(this._styles);t.appendChild(n),e.insertAdjacentElement?e.insertAdjacentElement("afterbegin",t):e.appendChild(t)}}}]),o}()}),Fe=(t(qe,y),t(qe,function(o){return function(e){function a(){var e,t,n;c(this,a);for(var r=arguments.length,o=Array(r),i=0;i<r;i++)o[i]=arguments[i];return(t=n=f(this,(e=a.__proto__||Object.getPrototypeOf(a)).call.apply(e,[this].concat(o))))._appendStyles=function(){a.appendGlobalStyles(n._styles,n.nodeName)},f(n,t)}return p(a,o),s(a,null,[{key:"appendGlobalStyles",value:function(e){var t=1<arguments.length&&void 0!==arguments[1]?arguments[1]:o.uuidv4();if(e&&!b[t]){var n=document.createElement("style"),r=document.createTextNode(e);b[t]=!0,n.appendChild(r),n.setAttribute("data-c-name",t.toLowerCase()),document.head.appendChild(n)}}}]),a}()},y)(HTMLElement));var ze=/\n[\s]+$/,Ke=/^\n[\s]+/,Be=/[\s]+$/,We=/^[\s]+/,He=/[\n\s]+/g,$e=["a","abbr","b","bdi","bdo","br","cite","data","dfn","em","i","kbd","mark","q","rp","rt","rtc","ruby","s","amp","small","span","strong","sub","sup","time","u","var","wbr"],Ye=["code","pre","textarea"];var Ge=function(e){var t,n=document.createElement("div");return n.innerHTML=e,t=n.childNodes,Array.isArray(t)?t:[].slice.call(t)},Ze=function(){var e;return(e=document.createElement("button")).setAttribute("type","button"),e.setAttribute("class","m-header-burger__button js-header-burger__button"),function e(t,n){if(Array.isArray(n))for(var r,o,i=t.nodeName.toLowerCase(),a=!1,s=0,u=n.length;s<u;s++){var c=n[s];if(Array.isArray(c))e(t,c);else{("number"==typeof c||"boolean"==typeof c||"function"==typeof c||c instanceof Date||c instanceof RegExp)&&(c=c.toString());var l=t.childNodes[t.childNodes.length-1];if("string"==typeof c)a=!0,l&&"#text"===l.nodeName?l.nodeValue+=c:(c=document.createTextNode(c),t.appendChild(c),l=c),s===u-1&&(a=!1,-1===$e.indexOf(i)&&-1===Ye.indexOf(i)?""===(r=l.nodeValue.replace(Ke,"").replace(Be,"").replace(ze,"").replace(He," "))?t.removeChild(l):l.nodeValue=r:-1===Ye.indexOf(i)&&(o=0===s?"":" ",r=l.nodeValue.replace(Ke,o).replace(We," ").replace(Be,"").replace(ze,"").replace(He," "),l.nodeValue=r));else if(c&&c.nodeType){a&&(a=!1,-1===$e.indexOf(i)&&-1===Ye.indexOf(i)?""===(r=l.nodeValue.replace(Ke,"").replace(ze,"").replace(He," "))?t.removeChild(l):l.nodeValue=r:-1===Ye.indexOf(i)&&(r=l.nodeValue.replace(We," ").replace(Ke,"").replace(ze,"").replace(He," "),l.nodeValue=r));var p=c.nodeName;p&&(i=p.toLowerCase()),t.appendChild(c)}}}}(e,["\n    ",Ge('<axa-icon icon="menu" classes="m-header-burger__icon"></axa-icon>'),"\n\n    ",Ge('<axa-icon icon="cross-gap" classes="m-header-burger__close-icon"></axa-icon>'),"\n  "]),e};function Je(e){var t=e.ownerDocument;return t.defaultView||t.parentWindow}function Xe(e){for(var t=e,n=0;t;)n+=t.offsetTop,t=t.offsetParent;return n}var Qe="pageYOffset"in window?function(){return window.pageYOffset}:function(){var e=document,t=e.body;return e.documentElement.scrollTop||t.scrollTop||0};var et,tt=function(){if(!window.getComputedStyle)return null;var e=window.getComputedStyle(document.documentElement,""),t=(Array.prototype.slice.call(e).join("").match(/-(moz|webkit|ms)-/)||""===e.OLink&&["","o"])[1];return{dom:"WebKit|Moz|MS|O".match(new RegExp("("+t+")","i"))[1],lowercase:t,css:"-"+t+"-",js:t[0].toUpperCase()+t.slice(1)}}().lowercase,nt=function(){var e=window.requestAnimationFrame||window[tt+"RequestAnimationFrame"];if(e)e=e.bind(window);else{var o=0;e=function(e){var t=Date.now(),n=Math.max(0,16-(t-o)),r=setTimeout(function(){e(t+n)},n);return o=t+n,r}}return e}(),rt=(et=(et=window.cancelAnimationFrame||window[tt+"CancelAnimationFrame"]||window[tt+"CancelRequestAnimationFrame"])?et.bind(window):function(e){clearTimeout(e)},De("click","resize","keyup")),ot=function(){function n(e,t){var i=this;c(this,n),this._handleBurgerClick=function(e){e.preventDefault(),i.isOpen?i.close():i.open()},this._handleResize=function(){i.close()},this._handleKeyUp=function(e){var t=e.key,n=e.keyCode;(t===rt.ESCAPE||t===rt.ESC||27===n)&&(e.preventDefault(),i.close())},this.open=function(e){if(!i.isOpen){i.isOpen=!0;var t,n,r,o=Xe(i.wcNode);0!==o&&o!==Qe()&&(D("sticky-container/freeze-direction"),t=i.wcNode.parentNode.parentNode.parentNode.parentNode,n=Je(t),r=Xe(t),n.scrollTo(0,r),nt(function(){setTimeout(function(){D("sticky-container/thaw-direction")},50)})),function(e){for(var t=arguments.length,n=Array(1<t?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];var o=N.apply(void 0,[e].concat(n));if(!0!==o){var i=[].concat(n);Array.isArray(o)&&(i=o.reduce(x,[])),i&&(e.className+=" "+i.join(" "))}}(i.burger,i.options.burgerState),!e&&i._contextNode&&D("header-mobile/open",null,i._contextNode)}},this.close=function(e){i.isOpen&&(i.isOpen=!1,function(e){for(var t=arguments.length,n=Array(1<t?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];var o=N.apply(void 0,[e].concat(n));if(!1!==o){var i=[].concat(n);if(Array.isArray(o)&&(i=o.reduce(T,[])),i){var a=e.className;e.className=i.reduce(E,a)}}}(i.burger,i.options.burgerState),!e&&i._contextNode&&D("header-mobile/close",null,i._contextNode))},this.wcNode=e,this.options=a({},n.DEFAULTS,t),this.isOpen=!1,this.init()}return s(n,[{key:"init",value:function(){this.burger=this.wcNode.querySelector(this.options.burger),this.on()}},{key:"onContextEnabled",value:function(){this._contextNode&&(this.offContextEnabled(),this.unSubscribeOpen=L("header-mobile/open",this.open,this._contextNode),this.unSubscribeClose=L("header-mobile/close",this.close,this._contextNode))}},{key:"offContextEnabled",value:function(){this.unSubscribeOpen&&this.unSubscribeOpen(),this.unSubscribeClose&&this.unSubscribeClose()}},{key:"on",value:function(){this.off(),this._unBurgerClick=P(this.burger,rt.CLICK,this._handleBurgerClick,{passive:!1}),this._unResize=P(Je(this.wcNode),rt.RESIZE,this._handleResize),this._unCloseEscape=P(this.wcNode.ownerDocument,rt.KEYUP,this._handleKeyUp,{passive:!1})}},{key:"off",value:function(){this._unBurgerClick&&this._unBurgerClick(),this._unResize&&this._unResize(),this._unCloseEscape&&this._unCloseEscape(),this.offContextEnabled()}},{key:"destroy",value:function(){this.off(),delete this.burger}},{key:"contextNode",set:function(e){this._contextNode=e,this.onContextEnabled()}}]),n}();ot.DEFAULTS={burger:".js-header-burger__button",burgerState:"is-burger-open"};var it,at,st,ut=function(e){function t(){return c(this,t),f(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return p(t,Fe),s(t,[{key:"init",value:function(){l(t.prototype.__proto__||Object.getPrototypeOf(t.prototype),"init",this).call(this,{styles:".m-header-burger {\n  display: block; }\n  @media (max-width: 991px) {\n    .m-header-burger {\n      margin-left: auto; }\n      .m-header-search + .m-header-burger {\n        margin-left: 0; } }\n\n.m-header-burger__button {\n  background: transparent;\n  border: none;\n  cursor: pointer;\n  display: none;\n  margin-left: 15px;\n  color: #00008f; }\n  .m-header-burger__button:hover, .m-header-burger__button:active, .m-header-burger__button:focus {\n    outline: none;\n    cursor: pointer; }\n  @media (max-width: 991px) {\n    .m-header-burger__button {\n      display: block; } }\n\n.m-header-burger__icon {\n  width: 25px;\n  height: 25px;\n  display: block;\n  fill: currentColor; }\n  .is-burger-open .m-header-burger__icon {\n    display: none; }\n\n.m-header-burger__close-icon {\n  width: 25px;\n  height: 25px;\n  display: block;\n  fill: currentColor;\n  display: none; }\n  .is-burger-open .m-header-burger__close-icon {\n    display: block; }\n",template:Ze}),this.consumeContext("axa-header")}},{key:"connectedCallback",value:function(){l(t.prototype.__proto__||Object.getPrototypeOf(t.prototype),"connectedCallback",this).call(this),this.className=this.initialClassName+" m-header-burger",this.burger=new ot(this)}},{key:"disconnectedCallback",value:function(){l(t.prototype.__proto__||Object.getPrototypeOf(t.prototype),"disconnectedCallback",this).call(this),this.burger.destroy(),delete this.burger}},{key:"contextCallback",value:function(e){this.burger.contextNode=e}}]),t}();return ut.tagName="axa-header-burger",it=ut.tagName,at=ut,customElements.get(it)||customElements.define(it,at,st),ut});
