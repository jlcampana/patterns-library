!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):e.StyleGuideWebComponent=t()}(this,function(){"use strict";var e=Object.getOwnPropertySymbols,t=Object.prototype.hasOwnProperty,n=Object.prototype.propertyIsEnumerable;(function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},n=0;n<10;n++)t["_"+String.fromCharCode(n)]=n;if("0123456789"!==Object.getOwnPropertyNames(t).map(function(e){return t[e]}).join(""))return!1;var o={};return"abcdefghijklmnopqrst".split("").forEach(function(e){o[e]=e}),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},o)).join("")}catch(e){return!1}})()&&Object.assign;var o="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},i=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")},a=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},u=function e(t,n,o){null===t&&(t=Function.prototype);var r=Object.getOwnPropertyDescriptor(t,n);if(void 0===r){var i=Object.getPrototypeOf(t);return null===i?void 0:e(i,n,o)}if("value"in r)return r.value;var a=r.get;return void 0!==a?a.call(o):void 0},c=function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)},l=function(e,t){var n={};for(var o in e)t.indexOf(o)>=0||Object.prototype.hasOwnProperty.call(e,o)&&(n[o]=e[o]);return n},p=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t},d=function e(t,n,o,r){var i=Object.getOwnPropertyDescriptor(t,n);if(void 0===i){var a=Object.getPrototypeOf(t);null!==a&&e(a,n,o,r)}else if("value"in i&&i.writable)i.value=o;else{var s=i.set;void 0!==s&&s.call(r,o)}return o},f=function(){return function(e,t){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return function(e,t){var n=[],o=!0,r=!1,i=void 0;try{for(var a,s=e[Symbol.iterator]();!(o=(a=s.next()).done)&&(n.push(a.value),!t||n.length!==t);o=!0);}catch(e){r=!0,i=e}finally{try{!o&&s.return&&s.return()}finally{if(r)throw i}}return n}(e,t);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),h=function(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}return Array.from(e)};function v(){}var y,_=0;function b(e,t){var n=e[t];return"function"==typeof n&&(e[t]=function(e){function t(){return e.apply(void 0,arguments)}return 0===_&&(_++,Object.keys(e).map(function(n){return t[n]=e[n],n}).reduce(b,t),_--),t}(n)),e}var g=(function(e){e.exports=function(){function e(e,t,n,r,i,a){if(a!==o){var s=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw s.name="Invariant Violation",s}}function t(){return e}e.isRequired=e;var n={array:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t};return n.checkPropTypes=v,n.PropTypes=n,n}()}(y={exports:{}},y.exports),y.exports);Object.keys(g).reduce(b,g);var m,O,C,k,w=g.oneOf(["left","center","right"]),x=g.oneOf(["left","right"]),T=(g.oneOf(["top","bottom"]),g.oneOf(["up","down"])),j=g.oneOf(["ok","pending","error","unknown"]),N=g.oneOf(["row","col","rowgroup","colgroup","auto"]),P=g.oneOfType([g.string,g.number]),E={text:P,value:g.any,rowspan:P,colspan:P,scope:N,align:w,dense:g.bool},A={float:x,strong:g.bool,bold:g.bool},S=g.oneOfType([g.string,g.number]),R=g.oneOfType([S,g.shape(s({},E,{sort:T,sortActive:g.bool}))]),D=g.oneOfType([S,g.shape(s({},E,A,{action:g.bool,state:j}))]),L=g.oneOfType([S,g.shape(s({},E,A))]),M=g.oneOfType([g.arrayOf(R),g.shape({cells:g.arrayOf(R)})]),U=g.oneOfType([g.arrayOf(D),g.shape({cells:g.arrayOf(D),action:g.bool})]),I=g.oneOfType([g.arrayOf(L),g.shape({cells:g.arrayOf(L)})]),V=(g.oneOfType([M,g.arrayOf(M)]),g.oneOfType([U,g.arrayOf(U)]),g.oneOfType([I,g.arrayOf(I)]),function(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];return function(e){return t.reduceRight(function(e,t){return t(e)},e)}}),q={},F=(m=Object,O=m.getPrototypeOf||function(e){return e.__proto__},C=m.setPrototypeOf||function(e,t){return e.__proto__=t,e},k="object"===("undefined"==typeof Reflect?"undefined":r(Reflect))?Reflect.construct:function(e,t,n){var o,r=[null];return r.push.apply(r,t),o=e.bind.apply(e,r),C(new o,n.prototype)},function(e){var t=O(e);return C(e,C(function(){return k(t,arguments,O(this).constructor)},t))}),K=function(e){return F(function(t){function n(){return i(this,n),p(this,(n.__proto__||Object.getPrototypeOf(n)).apply(this,arguments))}return c(n,e),a(n,[{key:"init",value:function(){var e;this._id=((e=this.nodeName)in q||(q[e]=0),++q[e]),this._initialised=!0}},{key:"connectedCallback",value:function(){this._initialised||this.init()}},{key:"attributeChangedCallback",value:function(){this._initialised||this.init()}}],[{key:"uuidv4",value:function(){return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,function(e){var t=16*Math.random()|0;return("x"==e?t:3&t|8).toString(16)})}}]),n}())},H={},W=function(){try{var e=new window.CustomEvent("test",{cancelable:!0});if(e.preventDefault(),!0!==e.defaultPrevented)throw new Error("Could not prevent default");return window.CustomEvent}catch(e){}return t;function t(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=t.bubbles,o=void 0!==n&&n,r=t.cancelable,i=void 0!==r&&r,a=t.detail,s=void 0===a?void 0:a,u=document.createEvent("CustomEvent");u.initCustomEvent(e,o,i,s);var c=u.preventDefault;return u.preventDefault=function(){c.call(u);try{Object.defineProperty(this,"defaultPrevented",{get:function(){return!0}})}catch(e){this.defaultPrevented=!0}},u}}();function $(e,t,n){var o=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},r=new W(t,s({},o,{detail:n}));return e.dispatchEvent(r)}var B=function(){var e=!1;if("undefined"!=typeof window&&"function"==typeof window.addEventListener){var t=Object.defineProperty({},"passive",{get:function(){e=!0}}),n=function(){};window.addEventListener("testPassiveEventSupport",n,t),window.removeEventListener("testPassiveEventSupport",n,t)}return e}();function G(e){for(var t=e.className,n=!1,o=!0,r=arguments.length,i=Array(r>1?r-1:0),a=1;a<r;a++)i[a-1]=arguments[a];var s=i.map(function(e){var r=(i=e,new RegExp("^"+i+"$|^"+i+"\\s|\\s"+i+"\\s|\\s"+i+"$",a)).test(t);var i,a;r?n=!0:o=!1;return{className:e,hasClass:r}});return!(!o&&!n)&&s}var z=/\s+/,J={transitionend:function(){for(var e=document.createElement("div").style,t={transition:"transitionend",OTransition:"oTransitionEnd otransitionend",MozTransition:"transitionend",WebkitTransition:"webkitTransitionEnd"},n=Object.keys(t),o=n.length,r=void 0,i=0;i<o;++i)if(void 0!==e[r=n[i]])return t[r];return""}()};function Y(e,t,n,o){var i=arguments.length>4&&void 0!==arguments[4]?arguments[4]:{},a=i.capture,s=void 0!==a&&a,u=i.passive,c=void 0===u||u;if(J[t]&&(t=J[t]),!e||!t)return null;var l=void 0===n?"undefined":r(n),p=n&&"string"===l;if("function"===l){if(o){var d=o;s=d.capture,c=d.passive}o=n}for(var f=B?{capture:s,passive:c}:s,h=p?function(t){var r=t.target;for(;!G(r,n)&&r!==e;)r=r.parentNode;if(r!==e)return o(t,r)}:o,v=t.split(z),y=v.length,_=0;_<y;++_)e.addEventListener(v[_],h,f);return function t(){for(var n=0;n<y;++n)e.removeEventListener(v[n],h,f);!function(e,t){if(!e)return!1;for(var n=Object.keys(e),o=n.length,r=0;r<o;++r){var i=n[r];if(e[i]===t)return delete e[i]}}(this,t)}}function Z(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},o=n.leading,r=void 0!==o&&o,i=n.trailing,a=void 0===i||i,s=n.maxWait,u=void 0!==s&&s,c=void 0,l=void 0,p=void 0,d=void 0,f=!1,v=t!==u,y=!1!==u;function _(){for(var n=arguments.length,o=Array(n),i=0;i<n;i++)o[i]=arguments[i];return c=o,v&&(l&&clearTimeout(l),l=setTimeout(b,t)),y&&!p&&(p=setTimeout(g,u)),r&&!f&&(f=!0,d=e.apply(void 0,h(c))),d}return _.flush=function(){(l||p)&&(d=e.apply(void 0,h(c)));return O(),d},_.cancel=O,_;function b(){p&&clearTimeout(p),m()}function g(){l&&clearTimeout(l),m()}function m(){a&&(d=e.apply(void 0,h(c))),l=null,p=null,f=!1}function O(){l&&(clearTimeout(l),l=null),p&&(clearTimeout(p),p=null),c=void 0,f=!1}}window.__subscriptions=window.__subscriptions||{};var X=window.__subscriptions;function Q(e,t){var n=Y(arguments.length>2&&void 0!==arguments[2]?arguments[2]:document,e,t);X[e]||(X[e]={count:0});var o,r=X[e];return r.count++,r.onsubscribe||(r.onsubscribe=Z((o=e,function(){$(document,"pubsub/onsubscribe",o),$(document,"pubsub/onsubscribe/"+o,o),X[o]&&delete X[o].unsubscribe}),100)),r.onsubscribe(),function(){r.count--,n.call(this),r.count<=0&&delete X[e]}}Y(document,"pubsub/onsubscribe",function(e){var t=e.detail;X[t]||(X[t]={count:0});var n=X[t],o=n.queue;Array.isArray(o)&&(o.forEach(function(e){var t=f(e,3),n=t[0],o=t[1],r=t[2];$(r,n,o)}),delete n.queue)});var ee,te=function(e,t){return e===t},ne=((ee=function(){var e;return(e=console).log.apply(e,arguments)},function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:te;return function(){for(var t=arguments.length,n=Array(t),o=0;o<t;o++)n[o]=arguments[o];return function(){for(var t=arguments.length,o=Array(t),r=0;r<t;r++)o[r]=arguments[r];return function(){return e.apply(void 0,[].concat(n,o))?ee.apply(void 0,arguments):void 0}}}})()(!0),[]);var oe=1,re=3,ie=8;function ae(e,t){var n=e.nodeType,o=e.nodeName;n===oe&&function(e,t){for(var n=t.skipChildren&&t.skipChildren(),o=t.constructor.observedAttributes,r=o&&Array.isArray(o)&&o.length,i=function(e){return n&&r&&-1===o.indexOf(e)},a=t.attributes,s=e.attributes,u=null,c=null,l=null,p=null,d=s.length-1;d>=0;--d)if(p=s[d],l=p.name,u=p.namespaceURI,c=p.value,!i(l))if(u){var f=p.localName;t.getAttributeNS(u,f||l)!==c&&t.setAttributeNS(u,l,c)}else t.hasAttribute(l)?t.getAttribute(l)!==c&&("null"===c||"undefined"===c?t.removeAttribute(l):t.setAttribute(l,c)):t.setAttribute(l,c);for(var h=a.length-1;h>=0;--h)if(!1!==(p=a[h]).specified){if(l=p.name,u=p.namespaceURI,i(l))continue;u?(l=p.localName||l,e.hasAttributeNS(u,l)||t.removeAttributeNS(u,l)):e.hasAttributeNS(null,l)||t.removeAttribute(l)}}(e,t),n!==re&&n!==ie||t.nodeValue===e.nodeValue||(t.nodeValue=e.nodeValue),"INPUT"===o?function(e,t){var n=e.value,o=t.value;se(e,t,"checked"),se(e,t,"disabled"),n!==o&&(t.setAttribute("value",n),t.value=n);"null"===n&&(t.value="",t.removeAttribute("value"));e.hasAttributeNS(null,"value")?"range"===t.type&&(t.value=n):t.removeAttribute("value")}(e,t):"OPTION"===o?se(e,t,"selected"):"TEXTAREA"===o&&function(e,t){var n=e.value;n!==t.value&&(t.value=n);if(t.firstChild&&t.firstChild.nodeValue!==n){if(""===n&&t.firstChild.nodeValue===t.placeholder)return;t.firstChild.nodeValue=n}}(e,t)}function se(e,t,n){e[n]!==t[n]&&(t[n]=e[n],e[n]?t.setAttribute(n,""):t.removeAttribute(n))}var ue=3;function ce(e,t){return t?e?e.isSameNode&&e.isSameNode(t)?t:e.tagName!==t.tagName?e:(ae(e,t),t.skipChildren&&t.skipChildren()||function(e,t){for(var n=void 0,o=void 0,r=void 0,i=void 0,a=0,s=0;n=t.childNodes[s],o=e.childNodes[s-a],n||o;s++)if(o)if(n)if(le(o,n))(r=ce(o,n))!==n&&(t.replaceChild(r,n),a++);else{i=null;for(var u=s;u<t.childNodes.length;u++)if(le(t.childNodes[u],o)){i=t.childNodes[u];break}i?((r=ce(o,i))!==i&&a++,t.insertBefore(r,n)):o.id||n.id?(t.insertBefore(o,n),a++):(r=ce(o,n))!==n&&(t.replaceChild(r,n),a++)}else t.appendChild(o),a++;else t.removeChild(n),s--}(e,t),t):null:e}function le(e,t){return e.id?e.id===t.id:e.isSameNode?e.isSameNode(t):e.tagName===t.tagName&&(e.type===ue&&e.nodeValue===t.nodeValue)}var pe,de,fe,he,ve=(pe=Object,de=pe.getPrototypeOf||function(e){return e.__proto__},fe=pe.setPrototypeOf||function(e,t){return e.__proto__=t,e},he="object"===("undefined"==typeof Reflect?"undefined":r(Reflect))?Reflect.construct:function(e,t,n){var o,r=[null];return r.push.apply(r,t),o=e.bind.apply(e,r),fe(new o,n.prototype)},function(e){var t=de(e);return fe(e,fe(function(){return he(t,arguments,de(this).constructor)},t))})(function(e){function t(e){var n;i(this,t);for(var o="\n    Web Component "+e.nodeName+"%c#"+e._id+" does not accept string as a return from a template. Maybe use bel?}",r=arguments.length,a=Array(r>1?r-1:0),s=1;s<r;s++)a[s-1]=arguments[s];var u=p(this,(n=t.__proto__||Object.getPrototypeOf(t)).call.apply(n,[this,o].concat(a)));return Error.captureStackTrace&&Error.captureStackTrace(u,t),u.name="TemplateNoStringReturnException",u}return c(t,e),t}(Error)),ye=!!document.createDocumentFragment().children,_e=/[A-Z]/g;function be(e){return e.replace(_e,ge)}function ge(e,t,n){var o=e.toLowerCase(),r=n.charAt(t+1);return 0===t||r.toUpperCase()===r?o:"-"+o}var me=/^\s*(?:true|false|null|undefined|-?[0-9]+\.?[0-9]*|[[{](?:.|[\s])*[\]}])\s*$/;function Oe(e,t,n){var o=e;if(n)return function(e,t,n){var o=e;switch(n){case g.string:case g.string.isRequired:return e;case g.bool:case g.bool.isRequired:if(!e||t===e)return!0;case g.number:case g.number.isRequired:case g.object:case g.object.isRequired:case g.array:case g.array.isRequired:default:if(me.test(e))try{o=JSON.parse(e)}catch(n){console.error("Attribute "+t+" has an error:\n"+n+"\n",e)}}return o}(e,t,n);if(e&&t!==e){if(me.test(e))try{o=JSON.parse(e)}catch(n){console.error("Attribute "+t+" has an error:\n"+n+"\n",e)}}else o=!0;return o}var Ce=/(?:^\w|[A-Z]|\b\w|\s+|[-_]+)/g,ke=/[-_]+/g;function we(e){return e.replace(Ce,xe)}function xe(e,t){return 0==+e||ke.test(e)?"":0===t?e.toLowerCase():e.toUpperCase()}function Te(e,t,n){var o=1===e.nodeType,r=e.constructor.propTypes,i=n;!n&&o&&(i=(void 0===r?{}:r)[we(t)]);if(o&&!e.hasAttribute(t))return i!==g.bool&&i!==g.bool.isRequired&&void 0;var a=e.value;return t?a=e.getAttribute(t):t=e.name,a=Oe(a,t,i)}var je=/iPad|iPhone|iPod/.test(navigator.userAgent)&&!window.MSStream;function Ne(e,t,n){var o=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},r=o.capture,i=void 0===r||r,a=o.passive,s=void 0===a||a,u=e.ownerDocument.documentElement,c=Y(u,t,function(t){var o=t.target;if(!e.contains(o)&&e!==o)return n(t)},{capture:i,passive:s});return je&&(u.style.cursor="pointer"),c}var Pe=function(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];for(var o=t.length,r={},i=0;i<o;++i){var a=t[i];r[a.toUpperCase()]=a}return r}("click","change","keyup","enter","move","leave","Escape","Esc","touchstart","touchmove","touchend","input","resize"),Ee="axa-change",Ae="data-prevent-default";((function(){function e(t){var n=this,o=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};i(this,e),this._handleClick=function(e,t){n.shouldPreventDefault(t||e.currentTarget)&&e.preventDefault();var o=!n._lastToggleNode,r=t!==n._lastToggleNode,i=!o&&!r;o?(n._notify(Pe.ENTER,t),n._onInteractive()):r&&n._notify(Pe.MOVE,t,n._lastToggleNode),n._lastToggleNode=t,i&&n._options.sameClickClose&&n._close()},this._handleClose=function(e,t){n.shouldPreventDefault(t||e.currentTarget)&&e.preventDefault(),n._close()},this._handleKeyUp=function(e){(e.key===Pe.ESCAPE||e.key===Pe.ESC||27===e.keyCode)&&(e.preventDefault(),n._close())},this._init(t,o)}return a(e,[{key:"_init",value:function(t,n){t&&(this._wcNode=t),n&&(this._options=s({},e.DEFAULTS,n));var o=this._options.containerClass;this._container=o?this._wcNode.querySelector(o):this._wcNode,this._on()}},{key:"_on",value:function(){this._off(),this._unClick=Y(this._container,Pe.CLICK,this._options.toggleClass,this._handleClick,{passive:!this._options.preventDefault})}},{key:"_off",value:function(){this._unClick&&this._unClick(),this._offInteractive()}},{key:"_onInteractive",value:function(){this._offInteractive();var e=this._container,t=this._options,n=t.closeClass,o=t.outerClose,r=t.escapeClose,i=t.preventDefault;n&&(this._unCloseClick=Y(e,Pe.CLICK,n,this._handleClose,{passive:!i})),o&&(this._unOuterClick=Ne(e,Pe.CLICK,this._handleClose,{passive:!i})),r&&(this._unCloseEscape=Y(e.ownerDocument,Pe.KEYUP,this._handleKeyUp,{passive:!1}))}},{key:"shouldPreventDefault",value:function(e){return e.hasAttribute(Ae)?Te(e,Ae):this._options.preventDefault}},{key:"_offInteractive",value:function(){this._unOuterClick&&this._unOuterClick(),this._unCloseClick&&this._unCloseClick(),this._unCloseEscape&&this._unCloseEscape(),this.deleteLastToggleNode()}},{key:"_close",value:function(){this._lastToggleNode&&(this._notify(Pe.LEAVE,this._lastToggleNode),this._offInteractive(),this.deleteLastToggleNode())}},{key:"_notify",value:function(e,t,n){e in this&&"function"==typeof this[e]&&this[e](t,n)}},{key:"enter",value:function(e){throw new Error("UiEvent.enter method not overwritten")}},{key:"move",value:function(e,t){}},{key:"leave",value:function(e){throw new Error("UiEvent.leave method not overwritten")}},{key:"destroy",value:function(){this._off(),delete this._wcNode,delete this._options}},{key:"deleteLastToggleNode",value:function(){delete this._lastToggleNode}},{key:"lastToggleNode",get:function(){return this._lastToggleNode}}]),e})()).DEFAULTS={containerClass:".js-ui-container",toggleClass:"js-ui-toggle",closeClass:"js-ui-close",escapeClose:!0,outerClose:!0,sameClickClose:!0,preventDefault:!0};var Se=V(function(e){var t,n;return n=t=function(t){function n(){return i(this,n),p(this,(n.__proto__||Object.getPrototypeOf(n)).apply(this,arguments))}return c(n,e),n}(),t.version="2.0.1-beta.241",n},function(e){return function(t){function n(){return i(this,n),p(this,(n.__proto__||Object.getPrototypeOf(n)).apply(this,arguments))}return c(n,e),a(n,[{key:"init",value:function(e){var t=this;u(n.prototype.__proto__||Object.getPrototypeOf(n.prototype),"init",this).call(this,e),this._makeContextReady=function(){var e=(arguments.length>0&&void 0!==arguments[0]?arguments[0]:{}).detail;t.contextNode&&(clearTimeout(t.timeoutId),t.timeoutId=setTimeout(function(){t.contextCallback(t.contextNode,e)},10)),t.unContextEnabled&&t.unContextEnabled(),t.unContextEnabled=Q("context/available",t._makeContextReady)}}},{key:"connectedCallback",value:function(){u(n.prototype.__proto__||Object.getPrototypeOf(n.prototype),"connectedCallback",this)&&u(n.prototype.__proto__||Object.getPrototypeOf(n.prototype),"connectedCallback",this).call(this),this.contextCallback&&this._makeContextReady()}},{key:"disconnectedCallback",value:function(){u(n.prototype.__proto__||Object.getPrototypeOf(n.prototype),"disconnectedCallback",this)&&u(n.prototype.__proto__||Object.getPrototypeOf(n.prototype),"disconnectedCallback",this).call(this),this.unContextEnabled&&this.unContextEnabled()}},{key:"provideContext",value:function(){var e=this.nodeName.toLowerCase();this.__isContext=!0,this.__contextName=e,function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:document;X[e]||(X[e]={count:0,queue:[]});var o=X[e].queue;Array.isArray(o)?o.push([e,t,n]):$(n,e,t)}("context/available",e)}},{key:"consumeContext",value:function(e){this.__consumedContext=e&&e.toLowerCase()}},{key:"contextNode",get:function(){for(var e=this.__consumedContext,t=this.parentNode;t&&(!t.__isContext||e&&e!==t.__contextName);)t=t.parentNode;return!(!t||!t.__isContext)&&t}}]),n}()},function(e){return function(t){function n(){return i(this,n),p(this,(n.__proto__||Object.getPrototypeOf(n)).apply(this,arguments))}return c(n,e),a(n,[{key:"appendChild",value:function(e){!this._isMorphing&&this._hasTemplate&&this._hasRendered?(this._lightDOMRefs.push(e),this.render()):u(n.prototype.__proto__||Object.getPrototypeOf(n.prototype),"appendChild",this).call(this,e)}},{key:"innerText",set:function(e){if(this._hasTemplate&&this._hasRendered){var t=document.createTextNode(e);this._lightDOMRefs=[t],this.render()}else d(n.prototype.__proto__||Object.getPrototypeOf(n.prototype),"innerText",e,this)}},{key:"textContent",set:function(e){if(this._hasTemplate&&this._hasRendered){var t=document.createTextNode(e);this._lightDOMRefs=[t],this.render()}else d(n.prototype.__proto__||Object.getPrototypeOf(n.prototype),"textContent",e,this)}},{key:"innerHTML",set:function(e){if(this._hasTemplate&&this._hasRendered){var t=document.createElement("div");t.innerHTML=e,this._lightDOMRefs=Array.from(t.children),this.render()}else d(n.prototype.__proto__||Object.getPrototypeOf(n.prototype),"innerHTML",e,this)}}]),n}()},function(e){return function(t){function n(){return i(this,n),p(this,(n.__proto__||Object.getPrototypeOf(n)).apply(this,arguments))}return c(n,e),a(n,[{key:"init",value:function(e){var t=this;u(n.prototype.__proto__||Object.getPrototypeOf(n.prototype),"init",this).call(this,e),this._isConnected=!1,this.props={},this.updatedDebounced=Z(function(){return t.updated&&t.updated()},50);var o=this.constructor.observedAttributes;Array.isArray(o)&&o.forEach(function(e){we(e)})}},{key:"connectedCallback",value:function(){var e=this;if(u(n.prototype.__proto__||Object.getPrototypeOf(n.prototype),"connectedCallback",this)&&u(n.prototype.__proto__||Object.getPrototypeOf(n.prototype),"connectedCallback",this).call(this),!this._isConnected){this._isConnected=!0;var t=this.constructor.observedAttributes;if(this.initialClassName=this.className,Array.isArray(t)){var o=this.constructor.propTypes;t.forEach(function(t){var n=we(t);if(e.hasAttribute(t)){var r=Te(e,t,o[n]);e.props[n]=r}}),this.checkPropTypes()}}this.updated&&this.updated()}},{key:"attributeChangedCallback",value:function(e,t,o){if(u(n.prototype.__proto__||Object.getPrototypeOf(n.prototype),"attributeChangedCallback",this)&&u(n.prototype.__proto__||Object.getPrototypeOf(n.prototype),"attributeChangedCallback",this).call(this,e,t,o),this.shouldUpdateCallback(o,t)){var r=we(e);if(this.hasAttribute(e)){var i=this.constructor.propTypes;this.props[r]=Oe(o,e,i[r])}else this.props[r]=null;this.checkPropTypes(),"value"===e&&null!==o&&$(this,Ee,o,{bubbles:!0,cancelable:!0,composed:!0}),this.updatedDebounced()}}},{key:"setProps",value:function(e){var t=this;u(n.prototype.__proto__||Object.getPrototypeOf(n.prototype),"attributeChangedCallback",this)&&u(n.prototype.__proto__||Object.getPrototypeOf(n.prototype),"attributeChangedCallback",this).call(this);var o=this.constructor.observedAttributes,r=void 0===o?[]:o,i=Object.keys(e).filter(function(e){return r.indexOf(be(e))>-1}).reduce(function(e,n){var o=e.props,r=e.shouldUpdate,i=o[n],a=t.props&&t.props[n]?t.props[n]:void 0;return r||t.shouldUpdateCallback(i,a)?(t.props[n]=i,{props:o,shouldUpdate:!0}):{props:o,shouldUpdate:!1}},{props:e,shouldUpdate:!1}).shouldUpdate;this.checkPropTypes(),i&&this._isConnected&&this.updated&&this.updated()}},{key:"checkPropTypes",value:function(){var e=this.constructor,t=e.propTypes,n=e.tagName,o=this.props;t&&g.checkPropTypes(t,o,"prop",n)}},{key:"shouldUpdateCallback",value:function(e,t){return e!==t}},{key:"disconnectedCallback",value:function(){this._isConnected=!1}}],[{key:"observedAttributes",get:function(){var e=this.propTypes;return e&&Object.keys(e).map(be)}}]),n}()},function(e){return function(t){function n(){return i(this,n),p(this,(n.__proto__||Object.getPrototypeOf(n)).apply(this,arguments))}return c(n,e),a(n,[{key:"init",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.template,o=l(e,["template"]);u(n.prototype.__proto__||Object.getPrototypeOf(n.prototype),"init",this).call(this,o),this._template=t,this._hasTemplate=!!t,this._hasRendered=!1,this.updated=this.render}},{key:"render",value:function(){var e=this,t=!this._hasRendered;if(this.willRenderCallback(t),this._hasTemplate){var o=this._template;try{if(t){for(var i=document.createDocumentFragment(),a=[];this.firstChild;)a.push(this.firstChild),i.appendChild(this.firstChild);this._lightDOMRefs=a,this.childrenFragment=i}else this._lightDOMRefs.forEach(function(t){var n=t.cloneNode(!0);e.childrenFragment.appendChild(n)});ye||(this.childrenFragment.children=Array.from(this.childrenFragment.childNodes).filter(function(e){return 1===e.nodeType}));var s=o(this.props,this.childrenFragment,this),c=document.createDocumentFragment();if(Array.isArray(s))s.forEach(function(e){c.appendChild(e)});else if(s){if("string"==typeof s)throw new ve(this);c.appendChild(s)}if(t)u(n.prototype.__proto__||Object.getPrototypeOf(n.prototype),"appendChild",this).call(this,c);else{var l=this.cloneNode(!1);l._isMorphing=!0,l.appendChild(c),this._isMorphing=!0,function(e,t){if("object"!==(void 0===e?"undefined":r(e)))throw new Error("componentMorph: oldTree should be an object");if("object"!==(void 0===t?"undefined":r(t)))throw new Error("componentMorph: newTree should be an object");ce(t,e)}(this,l),function(){for(var e=void 0;e=ne.pop();)delete e.isSameNode;ne=[]}(),this._isMorphing=!1}}catch(e){console.error(e)}}this._hasRendered=!0,this.didRenderCallback(t)}},{key:"skipChildren",value:function(){return!this._isMorphing}},{key:"willRenderCallback",value:function(e){}},{key:"didRenderCallback",value:function(e){}}]),n}()},function(e){return function(t){function n(){return i(this,n),p(this,(n.__proto__||Object.getPrototypeOf(n)).apply(this,arguments))}return c(n,e),a(n,[{key:"init",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.styles,o=void 0===t?"":t,r=l(e,["styles"]);u(n.prototype.__proto__||Object.getPrototypeOf(n.prototype),"init",this).call(this,r),this._styles=o}},{key:"connectedCallback",value:function(){u(n.prototype.__proto__||Object.getPrototypeOf(n.prototype),"connectedCallback",this)&&u(n.prototype.__proto__||Object.getPrototypeOf(n.prototype),"connectedCallback",this).call(this),this._appendStyles()}},{key:"_appendStyles",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this;if(this._styles){var t=document.createElement("style"),n=document.createTextNode(this._styles);t.appendChild(n),e.insertAdjacentElement?e.insertAdjacentElement("afterbegin",t):e.appendChild(t)}}}]),n}()}),Re=(V(Se,K),V(Se,function(e){return function(t){function n(){return i(this,n),p(this,(n.__proto__||Object.getPrototypeOf(n)).apply(this,arguments))}return c(n,e),a(n,[{key:"init",value:function(e){var t=this;u(n.prototype.__proto__||Object.getPrototypeOf(n.prototype),"init",this).call(this,e),this._appendStyles=function(){n.appendGlobalStyles(t._styles,t.nodeName)}}}],[{key:"appendGlobalStyles",value:function(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:e.uuidv4();if(t&&!H[n]){var o=document.createElement("style"),r=document.createTextNode(t);H[n]=!0,o.appendChild(r),o.setAttribute("data-c-name",n.toLowerCase()),document.head.appendChild(o)}}}]),n}()},K)(HTMLElement));var De=/\n[\s]+$/,Le=/^\n[\s]+/,Me=/[\s]+$/,Ue=/^[\s]+/,Ie=/[\n\s]+/g,Ve=["a","abbr","b","bdi","bdo","br","cite","data","dfn","em","i","kbd","mark","q","rp","rt","rtc","ruby","s","amp","small","span","strong","sub","sup","time","u","var","wbr"],qe=["code","pre","textarea"],Fe="http://www.w3.org/2000/svg",Ke="#src--assets--icons--",He=function(){var e,t,n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},o=n.icon,r=n.classes,i=void 0===r?"a-icon":r,a=n.pathPrefix,s=(window.__axaPLibConfig||{}).iconsPath||Ke;return!0===a?s=Ke:!1===a?s="":"string"==typeof a&&(s=a),(t=document.createElementNS(Fe,"svg")).setAttribute("class",""+String(i)),function e(t,n){if(Array.isArray(n))for(var o,r,i=t.nodeName.toLowerCase(),a=!1,s=0,u=n.length;s<u;s++){var c=n[s];if(Array.isArray(c))e(t,c);else{("number"==typeof c||"boolean"==typeof c||"function"==typeof c||c instanceof Date||c instanceof RegExp)&&(c=c.toString());var l=t.childNodes[t.childNodes.length-1];if("string"==typeof c)a=!0,l&&"#text"===l.nodeName?l.nodeValue+=c:(c=document.createTextNode(c),t.appendChild(c),l=c),s===u-1&&(a=!1,-1===Ve.indexOf(i)&&-1===qe.indexOf(i)?""===(o=l.nodeValue.replace(Le,"").replace(Me,"").replace(De,"").replace(Ie," "))?t.removeChild(l):l.nodeValue=o:-1===qe.indexOf(i)&&(r=0===s?"":" ",o=l.nodeValue.replace(Le,r).replace(Ue," ").replace(Me,"").replace(De,"").replace(Ie," "),l.nodeValue=o));else if(c&&c.nodeType){a&&(a=!1,-1===Ve.indexOf(i)&&-1===qe.indexOf(i)?""===(o=l.nodeValue.replace(Le,"").replace(De,"").replace(Ie," "))?t.removeChild(l):l.nodeValue=o:-1===qe.indexOf(i)&&(o=l.nodeValue.replace(Ue," ").replace(Le,"").replace(De,"").replace(Ie," "),l.nodeValue=o));var p=c.nodeName;p&&(i=p.toLowerCase()),t.appendChild(c)}}}}(t,["\n      ",(e=document.createElementNS(Fe,"use"),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",""+String(s)+String(o)),e.setAttribute("href",""+String(s)+String(o)),e),"\n    "]),t},We=function(e){function t(){return i(this,t),p(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return c(t,Re),a(t,[{key:"init",value:function(){u(t.prototype.__proto__||Object.getPrototypeOf(t.prototype),"init",this).call(this,{styles:".a-icon {\n  width: 50px;\n  height: 50px; }\n\n.a-icon--small {\n  width: 25px;\n  height: 25px; }\n",template:He})}},{key:"willRenderCallback",value:function(){this.className="a-icon__root"}}]),t}();return We.tagName="axa-icon",We.propTypes={icon:g.string.isRequired,classes:g.string,pathPrefix:g.oneOfType([g.string,g.bool])},document.addEventListener("DOMContentLoaded",function(){var e,t,n;e=We.tagName,t=We,customElements.get(e)||customElements.define(e,t,n)}),We});
