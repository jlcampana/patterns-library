!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):e.StyleGuideWebComponent=t()}(this,function(){"use strict";function e(e,t){return e(t={exports:{}},t.exports),t.exports}var t=Object.getOwnPropertySymbols,n=Object.prototype.hasOwnProperty,r=Object.prototype.propertyIsEnumerable;(function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},n=0;n<10;n++)t["_"+String.fromCharCode(n)]=n;if("0123456789"!==Object.getOwnPropertyNames(t).map(function(e){return t[e]}).join(""))return!1;var r={};return"abcdefghijklmnopqrst".split("").forEach(function(e){r[e]=e}),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},r)).join("")}catch(e){return!1}})()&&Object.assign;var s="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",_="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},u=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")},o=function(){function r(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(e,t,n){return t&&r(e.prototype,t),n&&r(e,n),e}}(),i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},p=function e(t,n,r){null===t&&(t=Function.prototype);var o=Object.getOwnPropertyDescriptor(t,n);if(void 0===o){var i=Object.getPrototypeOf(t);return null===i?void 0:e(i,n,r)}if("value"in o)return o.value;var a=o.get;return void 0!==a?a.call(r):void 0},d=function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)},a=function(e,t){var n={};for(var r in e)0<=t.indexOf(r)||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n},f=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t},h=function e(t,n,r,o){var i=Object.getOwnPropertyDescriptor(t,n);if(void 0===i){var a=Object.getPrototypeOf(t);null!==a&&e(a,n,r,o)}else if("value"in i&&i.writable)i.value=r;else{var s=i.set;void 0!==s&&s.call(o,r)}return r},l=function(e,t){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return function(e,t){var n=[],r=!0,o=!1,i=void 0;try{for(var a,s=e[Symbol.iterator]();!(r=(a=s.next()).done)&&(n.push(a.value),!t||n.length!==t);r=!0);}catch(e){o=!0,i=e}finally{try{!r&&s.return&&s.return()}finally{if(o)throw i}}return n}(e,t);throw new TypeError("Invalid attempt to destructure non-iterable instance")},O=function(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}return Array.from(e)};function c(){}var v=e(function(e){e.exports=function(){function e(e,t,n,r,o,i){if(i!==s){var a=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw a.name="Invariant Violation",a}}function t(){return e}var n={array:e.isRequired=e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t};return n.checkPropTypes=c,n.PropTypes=n}()});Object.keys(v).forEach(function(e){v[e]=function(t){function n(){return t.apply(void 0,arguments)}return Object.keys(t).forEach(function(e){n[e]=t[e]}),n}(v[e])});var y=v.oneOf(["left","center","right"]),b=v.oneOfType([v.string,v.number]),m=v.oneOfType([v.arrayOf(E),v.shape({cells:v.arrayOf(E)})]),g=v.oneOfType([v.arrayOf(N),v.shape({cells:v.arrayOf(N),action:v.bool})]),C=v.oneOfType([v.arrayOf(P),v.shape({cells:v.arrayOf(P)})]),k=(v.oneOf(["row","col","rowgroup","colgroup","auto"]),v.oneOfType([v.arrayOf(E),v.arrayOf(m)]),v.oneOfType([v.arrayOf(N),v.arrayOf(g)]),v.oneOfType([v.arrayOf(P),v.arrayOf(C)]),v.oneOf(["up","down"])),x=v.oneOf(["left","right"]),w=v.oneOf(["ok","pending","error","unknown"]),T={text:b,value:v.any,rowspan:v.number,colspan:v.number,scope:null,align:y,dense:v.bool},A=v.oneOfType([v.string,v.number,v.shape(T)]),E=v.oneOfType([A,v.shape(i({},T,{sort:k,sortActive:v.bool}))]),N=v.oneOfType([A,v.shape(i({},T,{float:x,action:v.bool,strong:v.bool,bold:v.bool,state:w}))]),P=v.oneOfType([A,v.shape(i({},T,{float:x}))]);function j(r){function e(e,t,n){return null==e[t]?null:r(e,t,n)}return e.isRequired=r,e}var S=/^[a-z]{2,4}(-([A-Z][a-z]{3}|[0-9]{3}))?(-([A-Z]{2}|[0-9]{3}))?$/;j(function(e,t,n){if(!S.test(e[t]))return new Error("Invalid prop `"+t+"` supplied to `"+n+"`, expected a valid locale.")});v.oneOf(["top","bottom"]);var R=j(function(e,t,n){try{new window.URL(e[t],function(){if(document.baseURI)return document.baseURI;var e=document.getElementsByName("base");return e.length&&e[0].href?e[0].href:window.location.href}())}catch(e){return new Error("Invalid prop `"+t+"` supplied to `"+n+"`, expected a valid URL. "+e.message)}return null}),D={},L=function(e){return e in D||(D[e]=0),++D[e]},U=function(){try{var e=new window.CustomEvent("test",{cancelable:!0});if(e.preventDefault(),!0!==e.defaultPrevented)throw new Error("Could not prevent default");return window.CustomEvent}catch(e){}return t;function t(e){var t=1<arguments.length&&void 0!==arguments[1]?arguments[1]:{},n=t.bubbles,r=void 0!==n&&n,o=t.cancelable,i=void 0!==o&&o,a=t.detail,s=void 0===a?void 0:a,l=document.createEvent("CustomEvent");l.initCustomEvent(e,r,i,s);var c=l.preventDefault;return l.preventDefault=function(){c.call(l);try{Object.defineProperty(this,"defaultPrevented",{get:function(){return!0}})}catch(e){this.defaultPrevented=!0}},l}}();function I(e,t,n){var r=3<arguments.length&&void 0!==arguments[3]?arguments[3]:{},o=new U(t,i({},r,{detail:n}));return e.dispatchEvent(o)}var M=function(){var e=!1;if("undefined"!=typeof window&&"function"==typeof window.addEventListener){var t=Object.defineProperty({},"passive",{get:function(){e=!0}}),n=function(){};window.addEventListener("testPassiveEventSupport",n,t),window.removeEventListener("testPassiveEventSupport",n,t)}return e}();function V(e){for(var o=e.className,i=!1,a=!0,t=arguments.length,n=Array(1<t?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];var s=n.map(function(e){var t=(n=e,new RegExp("^"+n+"$|^"+n+"\\s|\\s"+n+"\\s|\\s"+n+"$",r)).test(o);var n,r;t?i=!0:a=!1;return{className:e,hasClass:t}});return!(!a&&!i)&&s}var F=/\s+/,q={transitionend:function(){for(var e=document.createElement("div").style,t={transition:"transitionend",OTransition:"oTransitionEnd otransitionend",MozTransition:"transitionend",WebkitTransition:"webkitTransitionEnd"},n=Object.keys(t),r=n.length,o=void 0,i=0;i<r;++i)if(void 0!==e[o=n[i]])return t[o];return""}()};function K(n,e,r,o){var t=4<arguments.length&&void 0!==arguments[4]?arguments[4]:{},i=t.capture,a=void 0!==i&&i,s=t.passive,l=void 0===s||s;if(q[e]&&(e=q[e]),!n||!e)return null;var c=void 0===r?"undefined":_(r),u=r&&"string"===c;if("function"===c){if(o){var p=o;a=p.capture,l=p.passive}o=r}for(var d=M?{capture:a,passive:l}:a,f=u?function(e){var t=e.target;for(;!V(t,r)&&t!==n;)t=t.parentNode;if(t!==n)return o(e,t)}:o,h=e.split(F),v=h.length,y=0;y<v;++y)n.addEventListener(h[y],f,d);return function e(){for(var t=0;t<v;++t)n.removeEventListener(h[t],f,d);!function(e,t){if(!e)return;for(var n=Object.keys(e),r=n.length,o=0;o<r;++o){var i=n[o];if(e[i]===t)return delete e[i]}}(this,e)}}function H(r){var o=1<arguments.length&&void 0!==arguments[1]?arguments[1]:0,e=2<arguments.length&&void 0!==arguments[2]?arguments[2]:{},t=e.leading,i=void 0!==t&&t,n=e.trailing,a=void 0===n||n,s=e.maxWait,l=void 0!==s&&s,c=void 0,u=void 0,p=void 0,d=void 0,f=!1,h=o!==l,v=!1!==l;function y(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];return c=t,h&&(u&&clearTimeout(u),u=setTimeout(_,o)),v&&!p&&(p=setTimeout(b,l)),i&&!f&&(f=!0,d=r.apply(void 0,O(c))),d}return y.flush=function(){(u||p)&&(d=r.apply(void 0,O(c)));return g(),d},y.cancel=g,y;function _(){p&&clearTimeout(p),m()}function b(){u&&clearTimeout(u),m()}function m(){a&&(d=r.apply(void 0,O(c))),p=u=null,f=!1}function g(){u&&(clearTimeout(u),u=null),p&&(clearTimeout(p),p=null),c=void 0,f=!1}}window.__subscriptions=window.__subscriptions||{};var z=window.__subscriptions;function W(e,t){var n=K(2<arguments.length&&void 0!==arguments[2]?arguments[2]:document,e,t);z[e]||(z[e]={count:0});var r,o=z[e];return o.count++,o.onsubscribe||(o.onsubscribe=H((r=e,function(){I(document,"pubsub/onsubscribe",r),I(document,"pubsub/onsubscribe/"+r,r),z[r]&&delete z[r].unsubscribe}),100)),o.onsubscribe(),function(){o.count--,n.call(this),o.count<=0&&delete z[e]}}K(document,"pubsub/onsubscribe",function(e){var t=e.detail;z[t]||(z[t]={count:0});var n=z[t],r=n.queue;Array.isArray(r)&&(r.forEach(function(e){var t=l(e,3),n=t[0],r=t[1],o=t[2];I(o,n,r)}),delete n.queue)});var $,B=function(e,t){return e===t},Z=(($=function(){var e;return(e=console).log.apply(e,arguments)},function(){var o=0<arguments.length&&void 0!==arguments[0]?arguments[0]:B;return function(){for(var e=arguments.length,r=Array(e),t=0;t<e;t++)r[t]=arguments[t];return function(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];return function(){return o.apply(void 0,[].concat(r,t))?$.apply(void 0,arguments):void 0}}}})()(!0),function(e){function l(e,t){var n;u(this,l);for(var r="\n    Native Property >>>"+e+"<<< exists already at "+t.nodeName+"#"+t._id+" and evaluates to -> "+t[e]+".\n    Please consult the HTML spec for inherited DOM properties:\n    - Element Interface https://developer.mozilla.org/en-US/docs/Web/API/Element#Properties\n    - Node Interface https://developer.mozilla.org/en-US/docs/Web/API/Node#Properties",o=arguments.length,i=Array(2<o?o-2:0),a=2;a<o;a++)i[a-2]=arguments[a];var s=f(this,(n=l.__proto__||Object.getPrototypeOf(l)).call.apply(n,[this,r].concat(i)));return Error.captureStackTrace&&Error.captureStackTrace(s,l),s.name="PropertyExistsException",s}return d(l,e),l}(Error)),G=/[A-Z]/g;function J(e){return e.replace(G,Y)}function Y(e,t,n){var r=e.toLowerCase(),o=n.charAt(t+1);return 0===t||o.toUpperCase()===o?r:"-"+r}var X=/^\s*(?:true|false|null|undefined|-?[0-9]+\.?[0-9]*|[[{](?:.|[\s])*[\]}])\s*$/;function Q(t,n,e){var r=t;if(e)return function(t,n,e){var r=t;switch(e){case v.string:return t;case v.bool:if(!t||n===t)return!0;case v.number:case v.object:case v.array:default:if(X.test(t))try{r=JSON.parse(t)}catch(e){console.error("Attribute "+n+" has an error:\n"+e+"\n",t)}}return r}(t,n,e);if(t&&n!==t){if(X.test(t))try{r=JSON.parse(t)}catch(e){console.error("Attribute "+n+" has an error:\n"+e+"\n",t)}}else r=!0;return r}var ee=/(?:^\w|[A-Z]|\b\w|\s+|[-_]+)/g,te=/[-_]+/g;function ne(e){return e.replace(ee,re)}function re(e,t){return 0==+e||te.test(e)?"":0===t?e.toLowerCase():e.toUpperCase()}function oe(e,t,n){var r=1===e.nodeType,o=e.constructor.propTypes,i=n;!n&&r&&(i=(void 0===o?{}:o)[ne(t)]);if(r&&!e.hasAttribute(t))return i!==v.bool&&void 0;var a=e.value;return t?a=e.getAttribute(t):t=e.name,a=Q(a,t,i)}var ie=/iPad|iPhone|iPod/.test(navigator.userAgent)&&!window.MSStream;function ae(n,e,r){var t,o=3<arguments.length&&void 0!==arguments[3]?arguments[3]:{},i=o.capture,a=void 0===i||i,s=o.passive,l=void 0===s||s,c=n.ownerDocument.documentElement,u=K(c,e,function(e){var t=e.target;if(!n.contains(t)&&n!==t)return r(e)},{capture:a,passive:l});return t=c,ie&&(t.style.cursor="pointer"),u}var se=function(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];for(var r=t.length,o={},i=0;i<r;++i){var a=t[i];o[a.toUpperCase()]=a}return o}("click","change","keyup","enter","move","leave","Escape","Esc","touchstart","touchmove","touchend","input","resize"),le="axa-change",ce="data-prevent-default";(function(){function r(e){var i=this,t=1<arguments.length&&void 0!==arguments[1]?arguments[1]:{};u(this,r),this._handleClick=function(e,t){i.shouldPreventDefault(t||e.currentTarget)&&e.preventDefault();var n=!i._lastToggleNode,r=t!==i._lastToggleNode,o=!n&&!r;n?(i._notify(se.ENTER,t),i._onInteractive()):r&&i._notify(se.MOVE,t,i._lastToggleNode),i._lastToggleNode=t,o&&i._options.sameClickClose&&i._close()},this._handleClose=function(e,t){i.shouldPreventDefault(t||e.currentTarget)&&e.preventDefault(),i._close()},this._handleKeyUp=function(e){(e.key===se.ESCAPE||e.key===se.ESC||27===e.keyCode)&&(e.preventDefault(),i._close())},this._init(e,t)}return o(r,[{key:"_init",value:function(e,t){e&&(this._wcNode=e),t&&(this._options=i({},r.DEFAULTS,t));var n=this._options.containerClass;this._container=n?this._wcNode.querySelector(n):this._wcNode,this._on()}},{key:"_on",value:function(){this._off(),this._unClick=K(this._container,se.CLICK,this._options.toggleClass,this._handleClick,{passive:!this._options.preventDefault})}},{key:"_off",value:function(){this._unClick&&this._unClick(),this._offInteractive()}},{key:"_onInteractive",value:function(){this._offInteractive(),this._options.closeClass&&(this._unCloseClick=K(this._container,se.CLICK,this._options.closeClass,this._handleClose,{passive:!this._options.preventDefault})),this._options.outerClose&&(this._unOuterClick=ae(this._container,se.CLICK,this._handleClose,{passive:!this._options.preventDefault})),this._options.escapeClose&&(this._unCloseEscape=K(this._container.ownerDocument,se.KEYUP,this._handleKeyUp,{passive:!1}))}},{key:"shouldPreventDefault",value:function(e){return e.hasAttribute(ce)?oe(e,ce):this._options.preventDefault}},{key:"_offInteractive",value:function(){this._unOuterClick&&this._unOuterClick(),this._unCloseClick&&this._unCloseClick(),this._unCloseEscape&&this._unCloseEscape(),this.deleteLastToggleNode()}},{key:"_close",value:function(){this._lastToggleNode&&(this._notify(se.LEAVE,this._lastToggleNode),this._offInteractive(),this.deleteLastToggleNode())}},{key:"_notify",value:function(e,t,n){e in this&&"function"==typeof this[e]&&this[e](t,n)}},{key:"enter",value:function(e){throw new Error("UiEvent.enter method not overwritten")}},{key:"move",value:function(e,t){}},{key:"leave",value:function(e){throw new Error("UiEvent.leave method not overwritten")}},{key:"destroy",value:function(){this._off(),delete this._wcNode,delete this._options}},{key:"deleteLastToggleNode",value:function(){delete this._lastToggleNode}},{key:"lastToggleNode",get:function(){return this._lastToggleNode}}]),r}()).DEFAULTS={containerClass:".js-ui-container",toggleClass:"js-ui-toggle",closeClass:"js-ui-close",escapeClose:!0,outerClose:!0,sameClickClose:!0,preventDefault:!0};var ue=["title","checked","disabled"],pe=[];var de=1,fe=3,he=8;function ve(e,t){var n=e.nodeType,r=e.nodeName;n===de&&function(e,t){for(var n=t.skipChildren&&t.skipChildren(),r=t.constructor.observedAttributes,o=r&&Array.isArray(r)&&r.length,i=function(e){return n&&o&&-1===r.indexOf(e)},a=t.attributes,s=e.attributes,l=null,c=null,u=null,p=null,d=s.length-1;0<=d;--d)if(p=s[d],u=p.name,l=p.namespaceURI,c=p.value,!i(u))if(l){var f=p.localName;t.getAttributeNS(l,f||u)!==c&&t.setAttributeNS(l,u,c)}else t.hasAttribute(u)?t.getAttribute(u)!==c&&("null"===c||"undefined"===c?t.removeAttribute(u):t.setAttribute(u,c)):t.setAttribute(u,c);for(var h=a.length-1;0<=h;--h)if(!1!==(p=a[h]).specified){if(u=p.name,l=p.namespaceURI,i(u))continue;l?(u=p.localName||u,e.hasAttributeNS(l,u)||t.removeAttributeNS(l,u)):e.hasAttributeNS(null,u)||t.removeAttribute(u)}}(e,t),n!==fe&&n!==he||t.nodeValue===e.nodeValue||(t.nodeValue=e.nodeValue),"INPUT"===r?function(e,t){var n=e.value,r=t.value;ye(e,t,"checked"),ye(e,t,"disabled"),n!==r&&(t.setAttribute("value",n),t.value=n);"null"===n&&(t.value="",t.removeAttribute("value"));e.hasAttributeNS(null,"value")?"range"===t.type&&(t.value=n):t.removeAttribute("value")}(e,t):"OPTION"===r?ye(e,t,"selected"):"TEXTAREA"===r&&function(e,t){var n=e.value;n!==t.value&&(t.value=n);if(t.firstChild&&t.firstChild.nodeValue!==n){if(""===n&&t.firstChild.nodeValue===t.placeholder)return;t.firstChild.nodeValue=n}}(e,t)}function ye(e,t,n){e[n]!==t[n]&&(t[n]=e[n],e[n]?t.setAttribute(n,""):t.removeAttribute(n))}var _e=3;function be(e,t){return t?e?e.isSameNode&&e.isSameNode(t)?t:e.tagName!==t.tagName?e:(ve(e,t),t.skipChildren&&t.skipChildren()||function(e,t){for(var n=void 0,r=void 0,o=void 0,i=void 0,a=0,s=0;n=t.childNodes[s],r=e.childNodes[s-a],n||r;s++)if(r)if(n)if(me(r,n))(o=be(r,n))!==n&&(t.replaceChild(o,n),a++);else{i=null;for(var l=s;l<t.childNodes.length;l++)if(me(t.childNodes[l],r)){i=t.childNodes[l];break}i?((o=be(r,i))!==i&&a++,t.insertBefore(o,n)):r.id||n.id?(t.insertBefore(r,n),a++):(o=be(r,n))!==n&&(t.replaceChild(o,n),a++)}else t.appendChild(r),a++;else t.removeChild(n),s--}(e,t),t):null:e}function me(e,t){return e.id?e.id===t.id:e.isSameNode?e.isSameNode(t):e.tagName===t.tagName&&(e.type===_e&&e.nodeValue===t.nodeValue)}var ge=function(e){function s(e){var t;u(this,s);for(var n="\n    Web Component "+e.nodeName+"%c#"+e._id+" does not accept string as a return from a template. Maybe use bel?}",r=arguments.length,o=Array(1<r?r-1:0),i=1;i<r;i++)o[i-1]=arguments[i];var a=f(this,(t=s.__proto__||Object.getPrototypeOf(s)).call.apply(t,[this,n].concat(o)));return Error.captureStackTrace&&Error.captureStackTrace(a,s),a.name="TemplateNoStringReturnException",a}return d(s,e),s}(Error),Oe=!!document.createDocumentFragment().children;function Ce(){return Reflect.construct(HTMLElement,[],this.__proto__.constructor)}Object.setPrototypeOf(Ce.prototype,HTMLElement.prototype),Object.setPrototypeOf(Ce,HTMLElement);var ke=function(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];return function(e){return t.reduceRight(function(e,t){return t(e)},e)}}(function(t){return function(e){function a(){var e,t,n;u(this,a);for(var r=arguments.length,o=Array(r),i=0;i<r;i++)o[i]=arguments[i];return(t=n=f(this,(e=a.__proto__||Object.getPrototypeOf(a)).call.apply(e,[this].concat(o))))._makeContextReady=function(){var e=(0<arguments.length&&void 0!==arguments[0]?arguments[0]:{}).detail;n.contextNode&&(clearTimeout(n.timeoutId),n.timeoutId=setTimeout(function(){n.contextCallback(n.contextNode,e)},10)),n.unContextEnabled&&n.unContextEnabled(),n.unContextEnabled=W("context/available",n._makeContextReady)},f(n,t)}return d(a,t),o(a,[{key:"connectedCallback",value:function(){p(a.prototype.__proto__||Object.getPrototypeOf(a.prototype),"connectedCallback",this)&&p(a.prototype.__proto__||Object.getPrototypeOf(a.prototype),"connectedCallback",this).call(this),this.contextCallback&&this._makeContextReady()}},{key:"disconnectedCallback",value:function(){p(a.prototype.__proto__||Object.getPrototypeOf(a.prototype),"disconnectedCallback",this)&&p(a.prototype.__proto__||Object.getPrototypeOf(a.prototype),"disconnectedCallback",this).call(this),this.unContextEnabled&&this.unContextEnabled()}},{key:"provideContext",value:function(){var e=this.nodeName.toLowerCase();this.__isContext=!0,function(e,t){var n=2<arguments.length&&void 0!==arguments[2]?arguments[2]:document;z[e]||(z[e]={count:0,queue:[]});var r=z[e].queue;Array.isArray(r)?r.push([e,t,n]):I(n,e,t)}("context/available",this.__contextName=e)}},{key:"consumeContext",value:function(e){this.__consumedContext=e&&e.toLowerCase()}},{key:"contextNode",get:function(){for(var e=this.__consumedContext,t=this.parentNode;t&&(!t.__isContext||e&&e!==t.__contextName);)t=t.parentNode;return!(!t||!t.__isContext)&&t}}]),a}()},function(t){return function(e){function n(){return u(this,n),f(this,(n.__proto__||Object.getPrototypeOf(n)).apply(this,arguments))}return d(n,t),o(n,[{key:"appendChild",value:function(e){!this._isMorphing&&this._hasTemplate&&this._hasRendered?(this._lightDOMRefs.push(e),this.render()):p(n.prototype.__proto__||Object.getPrototypeOf(n.prototype),"appendChild",this).call(this,e)}},{key:"innerText",set:function(e){if(this._hasTemplate&&this._hasRendered){var t=document.createTextNode(e);this._lightDOMRefs=[t],this.render()}else h(n.prototype.__proto__||Object.getPrototypeOf(n.prototype),"innerText",e,this)}},{key:"textContent",set:function(e){if(this._hasTemplate&&this._hasRendered){var t=document.createTextNode(e);this._lightDOMRefs=[t],this.render()}else h(n.prototype.__proto__||Object.getPrototypeOf(n.prototype),"textContent",e,this)}},{key:"innerHTML",set:function(e){if(this._hasTemplate&&this._hasRendered){var t=document.createElement("div");t.innerHTML=e,this._lightDOMRefs=Array.from(t.children),this.render()}else h(n.prototype.__proto__||Object.getPrototypeOf(n.prototype),"innerHTML",e,this)}}]),n}()},function(t){return function(e){function c(e){u(this,c);var l=f(this,(c.__proto__||Object.getPrototypeOf(c)).call(this,e));l._reduceProps=function(e,t){var n=e.props,r=e.shouldUpdate,o=l._hasKeys[t];if(-1===ue.indexOf(t)&&o)throw new Z(t,l);var i="_"+t,a=n[t],s=l[i];return r||l.shouldUpdateCallback(a,s)?(l[i]=a,l._props[t]=a,o&&h(c.prototype.__proto__||Object.getPrototypeOf(c.prototype),t,a,l),{props:n,shouldUpdate:!0}):{props:n,shouldUpdate:!1}},l._isConnected=!1,l._props={},l._hasKeys={},l.updatedDebounced=H(function(){return l.updated&&l.updated()},50);var t=l.constructor.observedAttributes;return Array.isArray(t)&&t.forEach(function(e){var t,n=ne(e),r=n in l;if(-1===ue.indexOf(n)&&r)throw new Z(n,l);l._hasKeys[n]=r,Object.defineProperty(l,n,t={get:function(){return this._props[n]},set:function(e){this.shouldUpdateCallback(this._props[n],e)&&(this._props[n]=e,r&&h(t.__proto__||Object.getPrototypeOf(t),n,e,this),this._isConnected&&this.updatedDebounced())}})}),l}return d(c,t),o(c,null,[{key:"observedAttributes",get:function(){var e=this.propTypes;return e&&Object.keys(e).map(J)}}]),o(c,[{key:"connectedCallback",value:function(){var o=this;if(p(c.prototype.__proto__||Object.getPrototypeOf(c.prototype),"connectedCallback",this)&&p(c.prototype.__proto__||Object.getPrototypeOf(c.prototype),"connectedCallback",this).call(this),!this._isConnected){this._isConnected=!0;var e=this.constructor.observedAttributes;if(this.initialClassName=this.className,Array.isArray(e)){var i=this.constructor.propTypes;e.forEach(function(e){var t=ne(e);if(o.hasAttribute(e)){var n=oe(o,e,i[t]),r=o._hasKeys[t];o._props[t]=n,r&&h(c.prototype.__proto__||Object.getPrototypeOf(c.prototype),t,n,o)}}),this.checkPropTypes()}}this.updated&&this.updated()}},{key:"attributeChangedCallback",value:function(e,t,n){if(this.shouldUpdateCallback(n,t)){var r=ne(e);if(this.hasAttribute(e)){var o=this.constructor.propTypes;this[r]=Q(n,e,o[r])}else this[r]=null;this.checkPropTypes(),"value"===e&&null!==n&&I(this,le,n,{bubbles:!0,cancelable:!0,composed:!0})}}},{key:"setProps",value:function(e){var t=this.constructor.observedAttributes,n=void 0===t?[]:t,r=Object.keys(e).filter(function(e){return-1<n.indexOf(J(e))}).reduce(this._reduceProps,{props:e,shouldUpdate:!1}).shouldUpdate;this.checkPropTypes(),r&&this._isConnected&&this.updated&&this.updated()}},{key:"checkPropTypes",value:function(){var e=this.constructor,t=e.propTypes,n=e.tagName;t&&v.checkPropTypes(t,this._props,"prop",n)}},{key:"shouldUpdateCallback",value:function(e,t){return e!==t}},{key:"disconnectedCallback",value:function(){this._isConnected=!1}}]),c}()},function(t){return function(e){function l(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:{},t=e.template,n=a(e,["template"]);u(this,l);var r=f(this,(l.__proto__||Object.getPrototypeOf(l)).call(this,n));return r._template=t,r._hasTemplate=!!t,r._hasRendered=!1,r.updated=r.render,r}return d(l,t),o(l,[{key:"render",value:function(){var n=this,e=!this._hasRendered;if(this.willRenderCallback(e),this._hasTemplate){var t=this._template;try{if(e){for(var r=document.createDocumentFragment(),o=[];this.firstChild;)o.push(this.firstChild),r.appendChild(this.firstChild);this._lightDOMRefs=o,this.childrenFragment=r}else this._lightDOMRefs.forEach(function(e){var t=e.cloneNode(!0);n.childrenFragment.appendChild(t)});Oe||(this.childrenFragment.children=Array.from(this.childrenFragment.childNodes).filter(function(e){return 1===e.nodeType}));var i=t(this._props,this.childrenFragment,this),a=document.createDocumentFragment();if(Array.isArray(i))i.forEach(function(e){a.appendChild(e)});else if(i){if("string"==typeof i)throw new ge(this);a.appendChild(i)}if(e)p(l.prototype.__proto__||Object.getPrototypeOf(l.prototype),"appendChild",this).call(this,a);else{var s=this.cloneNode(!1);s._isMorphing=!0,s.appendChild(a),this._isMorphing=!0,function(e,t){if("object"!==(void 0===e?"undefined":_(e)))throw new Error("componentMorph: oldTree should be an object");if("object"!==(void 0===t?"undefined":_(t)))throw new Error("componentMorph: newTree should be an object");be(t,e)}(this,s),function(){for(var e=void 0;e=pe.pop();)delete e.isSameNode;pe=[]}(),this._isMorphing=!1}}catch(e){console.error(e)}}this._hasRendered=!0,this.didRenderCallback(e)}},{key:"skipChildren",value:function(){return!this._isMorphing}},{key:"willRenderCallback",value:function(e){}},{key:"didRenderCallback",value:function(e){}}]),l}()},function(t){return function(e){function i(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:{},t=e.styles,n=void 0===t?"":t,r=a(e,["styles"]);u(this,i);var o=f(this,(i.__proto__||Object.getPrototypeOf(i)).call(this,r));return o._styles=n,o}return d(i,t),o(i,[{key:"connectedCallback",value:function(){p(i.prototype.__proto__||Object.getPrototypeOf(i.prototype),"connectedCallback",this)&&p(i.prototype.__proto__||Object.getPrototypeOf(i.prototype),"connectedCallback",this).call(this),this._appendStyles()}},{key:"_appendStyles",value:function(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:this;if(this._styles){var t=document.createElement("style"),n=document.createTextNode(this._styles);t.appendChild(n),e.insertAdjacentElement?e.insertAdjacentElement("afterbegin",t):e.appendChild(t)}}}]),i}()})(function(e){function n(e){u(this,n);var t=f(this,(n.__proto__||Object.getPrototypeOf(n)).call(this,e));return t._id=L(t.nodeName),t}return d(n,Ce),o(n,null,[{key:"uuidv4",value:function(){return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,function(e){var t=16*Math.random()|0;return("x"==e?t:3&t|8).toString(16)})}}]),n}()),xe={},we=function(e){function a(){var e,t,n;u(this,a);for(var r=arguments.length,o=Array(r),i=0;i<r;i++)o[i]=arguments[i];return(t=n=f(this,(e=a.__proto__||Object.getPrototypeOf(a)).call.apply(e,[this].concat(o))))._appendStyles=function(){a.appendGlobalStyles(n._styles,n.nodeName)},f(n,t)}return d(a,ke),o(a,null,[{key:"appendGlobalStyles",value:function(e){var t=1<arguments.length&&void 0!==arguments[1]?arguments[1]:ke.uuidv4();if(e&&!xe[t]){var n=document.createElement("style"),r=document.createTextNode(e);xe[t]=!0,n.appendChild(r),n.setAttribute("data-c-name",t.toLowerCase()),document.head.appendChild(n)}}}]),a}();var Te=".m-header-others {\n  padding-right: 15px;\n  padding-left: 15px;\n  display: block; }\n\n.m-header-others__list {\n  padding: 0;\n  margin: 0;\n  list-style-type: none;\n  margin-right: -15px;\n  margin-left: -15px;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-wrap: wrap;\n      flex-wrap: wrap; }\n\n.m-header-others__list-item {\n  display: block;\n  border-right: 1px solid #ccc; }\n  .m-header-others__list-item:first-child {\n    border-left: 1px solid #ccc; }\n\n.m-header-others__list-link {\n  /* Adds a hyphen where the word breaks, if supported (No Blink) */\n  -webkit-hyphens: auto;\n      -ms-hyphens: auto;\n          hyphens: auto;\n  /* These are technically the same, but use both */\n  overflow-wrap: break-word;\n  word-wrap: break-word;\n  font-size: 12px;\n  font-weight: 600;\n  line-height: 1.5;\n  letter-spacing: 0.02em;\n  display: block;\n  padding: 10px 15px;\n  text-transform: uppercase;\n  white-space: nowrap;\n  color: #7f7f7f; }\n  @media (min-width: 576px) {\n    .m-header-others__list-link {\n      font-size: 13px;\n      line-height: 1.38; } }\n  .m-header-others__list-link.is-header-others-active, .m-header-others__list-link:hover, .m-header-others__list-link:active, .m-header-others__list-link:focus {\n    text-decoration: none;\n    color: #00005b; }\n  .m-header-others__list-link.is-header-others-active {\n    margin-bottom: -2px;\n    background: #fff;\n    border-bottom: 2px solid #fff; }\n",Ae=/\n[\s]+$/,Ee=/^\n[\s]+/,Ne=/[\s]+$/,Pe=/^[\s]+/,je=/[\n\s]+/g,Se=["a","abbr","b","bdi","bdo","br","cite","data","dfn","em","i","kbd","mark","q","rp","rt","rtc","ruby","s","amp","small","span","strong","sub","sup","time","u","var","wbr"],Re=["code","pre","textarea"],De=function e(t,n){if(Array.isArray(n))for(var r,o,i=t.nodeName.toLowerCase(),a=!1,s=0,l=n.length;s<l;s++){var c=n[s];if(Array.isArray(c))e(t,c);else{("number"==typeof c||"boolean"==typeof c||"function"==typeof c||c instanceof Date||c instanceof RegExp)&&(c=c.toString());var u=t.childNodes[t.childNodes.length-1];if("string"==typeof c)a=!0,u&&"#text"===u.nodeName?u.nodeValue+=c:(c=document.createTextNode(c),t.appendChild(c),u=c),s===l-1&&(a=!1,-1===Se.indexOf(i)&&-1===Re.indexOf(i)?""===(r=u.nodeValue.replace(Ee,"").replace(Ne,"").replace(Ae,"").replace(je," "))?t.removeChild(u):u.nodeValue=r:-1===Re.indexOf(i)&&(o=0===s?"":" ",r=u.nodeValue.replace(Ee,o).replace(Pe," ").replace(Ne,"").replace(Ae,"").replace(je," "),u.nodeValue=r));else if(c&&c.nodeType){a&&(a=!1,-1===Se.indexOf(i)&&-1===Re.indexOf(i)?""===(r=u.nodeValue.replace(Ee,"").replace(Ae,"").replace(je," "))?t.removeChild(u):u.nodeValue=r:-1===Re.indexOf(i)&&(r=u.nodeValue.replace(Pe," ").replace(Ee,"").replace(Ae,"").replace(je," "),u.nodeValue=r));var p=c.nodeName;p&&(i=p.toLowerCase()),t.appendChild(c)}}}};var Le,Ue,Ie=function(e){var t,n=document.createElement("div");return n.innerHTML=e,t=n.childNodes,Array.isArray(t)?t:[].slice.call(t)},Me=e(function(e){!function(){var i={}.hasOwnProperty;function a(){for(var e=[],t=0;t<arguments.length;t++){var n=arguments[t];if(n){var r=void 0===n?"undefined":_(n);if("string"===r||"number"===r)e.push(n);else if(Array.isArray(n))e.push(a.apply(null,n));else if("object"===r)for(var o in n)i.call(n,o)&&n[o]&&e.push(o)}}return e.join(" ")}e.exports?e.exports=a:window.classNames=a}()}),Ve=function(e){var t,n=e.items;return(t=document.createElement("ul")).setAttribute("class","m-header-others__list"),De(t,["\n    ",Array.isArray(n)&&n.map(function(e){var t,n,r=e.url,o=e.name,i=e.isActive;return(n=document.createElement("li")).setAttribute("class","m-header-others__list-item"),De(n,["\n        ",(t=document.createElement("a"),t.setAttribute("href",""+String(r)),t.setAttribute("class",""+String(Me("m-header-others__list-link",{"is-header-others-active":i}))),De(t,[Ie(o)]),t),"\n      "]),n}),"\n  "]),t},Fe=function(e){function t(){return u(this,t),f(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,{styles:Te,template:Ve}))}return d(t,we),o(t,[{key:"connectedCallback",value:function(){p(t.prototype.__proto__||Object.getPrototypeOf(t.prototype),"connectedCallback",this).call(this),this.className=this.initialClassName+" m-header-others"}}]),t}();return Fe.tagName="axa-header-others",Fe.propTypes={items:v.arrayOf(v.shape({name:v.string,url:R,isActive:v.bool}))},Le=Fe.tagName,Ue=Fe,customElements.get(Le)||customElements.define(Le,Ue),Fe});
