var StyleGuideWebComponent=function(){"use strict";var e=Object.getOwnPropertySymbols,t=Object.prototype.hasOwnProperty,n=Object.prototype.propertyIsEnumerable;(function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},n=0;n<10;n++)t["_"+String.fromCharCode(n)]=n;if("0123456789"!==Object.getOwnPropertyNames(t).map(function(e){return t[e]}).join(""))return!1;var o={};return"abcdefghijklmnopqrst".split("").forEach(function(e){o[e]=e}),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},o)).join("")}catch(e){return!1}})()&&Object.assign;var o="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},i=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")},a=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},l=function e(t,n,o){null===t&&(t=Function.prototype);var r=Object.getOwnPropertyDescriptor(t,n);if(void 0===r){var i=Object.getPrototypeOf(t);return null===i?void 0:e(i,n,o)}if("value"in r)return r.value;var a=r.get;return void 0!==a?a.call(o):void 0},c=function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)},u=function(e,t){var n={};for(var o in e)t.indexOf(o)>=0||Object.prototype.hasOwnProperty.call(e,o)&&(n[o]=e[o]);return n},p=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t},d=function e(t,n,o,r){var i=Object.getOwnPropertyDescriptor(t,n);if(void 0===i){var a=Object.getPrototypeOf(t);null!==a&&e(a,n,o,r)}else if("value"in i&&i.writable)i.value=o;else{var s=i.set;void 0!==s&&s.call(r,o)}return o},h=function(){return function(e,t){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return function(e,t){var n=[],o=!0,r=!1,i=void 0;try{for(var a,s=e[Symbol.iterator]();!(o=(a=s.next()).done)&&(n.push(a.value),!t||n.length!==t);o=!0);}catch(e){r=!0,i=e}finally{try{!o&&s.return&&s.return()}finally{if(r)throw i}}return n}(e,t);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),f=function(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}return Array.from(e)};function v(){}var y;function _(e,t){return"function"==typeof e[t]&&(e[t]=function(e){return(!(arguments.length>1&&void 0!==arguments[1])||arguments[1])&&Object.keys(e).reduce(_,e),function(){return e.apply(void 0,arguments)}}(e[t],!1)),e}var b=(function(e){e.exports=function(){function e(e,t,n,r,i,a){if(a!==o){var s=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw s.name="Invariant Violation",s}}function t(){return e}e.isRequired=e;var n={array:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t};return n.checkPropTypes=v,n.PropTypes=n,n}()}(y={exports:{}},y.exports),y.exports);Object.keys(b).reduce(_,b);var g=b.oneOf(["left","center","right"]),m=b.oneOfType([b.string,b.number]),C=b.oneOfType([b.arrayOf(E),b.shape({cells:b.arrayOf(E)})]),O=b.oneOfType([b.arrayOf(j),b.shape({cells:b.arrayOf(j),action:b.bool})]),k=b.oneOfType([b.arrayOf(P),b.shape({cells:b.arrayOf(P)})]),x=(b.oneOf(["row","col","rowgroup","colgroup","auto"]),b.oneOfType([b.arrayOf(E),b.arrayOf(C)]),b.oneOfType([b.arrayOf(j),b.arrayOf(O)]),b.oneOfType([b.arrayOf(P),b.arrayOf(k)]),b.oneOf(["up","down"])),w=b.oneOf(["left","right"]),T=b.oneOf(["ok","pending","error","unknown"]),A={text:m,value:b.any,rowspan:b.number,colspan:b.number,scope:null,align:g,dense:b.bool},N=b.oneOfType([b.string,b.number,b.shape(A)]),E=b.oneOfType([N,b.shape(s({},A,{sort:x,sortActive:b.bool}))]),j=b.oneOfType([N,b.shape(s({},A,{float:w,action:b.bool,strong:b.bool,bold:b.bool,state:T}))]),P=b.oneOfType([N,b.shape(s({},A,{float:w}))]);function S(e){function t(t,n,o){return null==t[n]?null:e(t,n,o)}return t.isRequired=e,t}var R=/^[a-z]{2,4}(-([A-Z][a-z]{3}|[0-9]{3}))?(-([A-Z]{2}|[0-9]{3}))?$/;S(function(e,t,n){if(!R.test(e[t]))return new Error("Invalid prop `"+t+"` supplied to `"+n+"`, expected a valid locale.")});b.oneOf(["top","bottom"]);var L=S(function(e,t,n){try{new window.URL(e[t],function(){if(document.baseURI)return document.baseURI;var e=document.getElementsByName("base");return e.length&&e[0].href?e[0].href:window.location.href}())}catch(e){return new Error("Invalid prop `"+t+"` supplied to `"+n+"`, expected a valid URL. "+e.message)}return null}),D={},U=function(e){return e in D||(D[e]=0),++D[e]},I=function(){try{var e=new window.CustomEvent("test",{cancelable:!0});if(e.preventDefault(),!0!==e.defaultPrevented)throw new Error("Could not prevent default");return window.CustomEvent}catch(e){}return t;function t(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=t.bubbles,o=void 0!==n&&n,r=t.cancelable,i=void 0!==r&&r,a=t.detail,s=void 0===a?void 0:a,l=document.createEvent("CustomEvent");l.initCustomEvent(e,o,i,s);var c=l.preventDefault;return l.preventDefault=function(){c.call(l);try{Object.defineProperty(this,"defaultPrevented",{get:function(){return!0}})}catch(e){this.defaultPrevented=!0}},l}}();function M(e,t,n){var o=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},r=new I(t,s({},o,{detail:n}));return e.dispatchEvent(r)}var V=function(){var e=!1;if("undefined"!=typeof window&&"function"==typeof window.addEventListener){var t=Object.defineProperty({},"passive",{get:function(){e=!0}}),n=function(){};window.addEventListener("testPassiveEventSupport",n,t),window.removeEventListener("testPassiveEventSupport",n,t)}return e}();function q(e){for(var t=e.className,n=!1,o=!0,r=arguments.length,i=Array(r>1?r-1:0),a=1;a<r;a++)i[a-1]=arguments[a];var s=i.map(function(e){var r=(i=e,new RegExp("^"+i+"$|^"+i+"\\s|\\s"+i+"\\s|\\s"+i+"$",a)).test(t);var i,a;r?n=!0:o=!1;return{className:e,hasClass:r}});return!(!o&&!n)&&s}var F=/\s+/,K={transitionend:function(){for(var e=document.createElement("div").style,t={transition:"transitionend",OTransition:"oTransitionEnd otransitionend",MozTransition:"transitionend",WebkitTransition:"webkitTransitionEnd"},n=Object.keys(t),o=n.length,r=void 0,i=0;i<o;++i)if(void 0!==e[r=n[i]])return t[r];return""}()};function H(e,t,n,o){var i=arguments.length>4&&void 0!==arguments[4]?arguments[4]:{},a=i.capture,s=void 0!==a&&a,l=i.passive,c=void 0===l||l;if(K[t]&&(t=K[t]),!e||!t)return null;var u=void 0===n?"undefined":r(n),p=n&&"string"===u;if("function"===u){if(o){var d=o;s=d.capture,c=d.passive}o=n}for(var h=V?{capture:s,passive:c}:s,f=p?function(t){var r=t.target;for(;!q(r,n)&&r!==e;)r=r.parentNode;if(r!==e)return o(t,r)}:o,v=t.split(F),y=v.length,_=0;_<y;++_)e.addEventListener(v[_],f,h);return function t(){for(var n=0;n<y;++n)e.removeEventListener(v[n],f,h);!function(e,t){if(!e)return!1;for(var n=Object.keys(e),o=n.length,r=0;r<o;++r){var i=n[r];if(e[i]===t)return delete e[i]}}(this,t)}}window.__subscriptions=window.__subscriptions||{};var $=window.__subscriptions;function W(e,t){var n=H(arguments.length>2&&void 0!==arguments[2]?arguments[2]:document,e,t);$[e]||($[e]={count:0});var o,r=$[e];return r.count++,r.onsubscribe||(r.onsubscribe=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},o=n.leading,r=void 0!==o&&o,i=n.trailing,a=void 0===i||i,s=n.maxWait,l=void 0!==s&&s,c=void 0,u=void 0,p=void 0,d=void 0,h=!1,v=t!==l,y=!1!==l;function _(){for(var n=arguments.length,o=Array(n),i=0;i<n;i++)o[i]=arguments[i];return c=o,v&&(u&&clearTimeout(u),u=setTimeout(b,t)),y&&!p&&(p=setTimeout(g,l)),r&&!h&&(h=!0,d=e.apply(void 0,f(c))),d}return _.flush=function(){return(u||p)&&(d=e.apply(void 0,f(c))),C(),d},_.cancel=C,_;function b(){p&&clearTimeout(p),m()}function g(){u&&clearTimeout(u),m()}function m(){a&&(d=e.apply(void 0,f(c))),u=null,p=null,h=!1}function C(){u&&(clearTimeout(u),u=null),p&&(clearTimeout(p),p=null),c=void 0,h=!1}}((o=e,function(){M(document,"pubsub/onsubscribe",o),M(document,"pubsub/onsubscribe/"+o,o),$[o]&&delete $[o].unsubscribe}),100)),r.onsubscribe(),function(){r.count--,n.call(this),r.count<=0&&delete $[e]}}H(document,"pubsub/onsubscribe",function(e){var t=e.detail;$[t]||($[t]={count:0});var n=$[t],o=n.queue;Array.isArray(o)&&(o.forEach(function(e){var t=h(e,3),n=t[0],o=t[1],r=t[2];M(r,n,o)}),delete n.queue)});var z,B=function(e,t){return e===t},Z=((z=function(){var e;return(e=console).log.apply(e,arguments)},function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:B;return function(){for(var t=arguments.length,n=Array(t),o=0;o<t;o++)n[o]=arguments[o];return function(){for(var t=arguments.length,o=Array(t),r=0;r<t;r++)o[r]=arguments[r];return function(){return e.apply(void 0,[].concat(n,o))?z.apply(void 0,arguments):void 0}}}})()(!0),/[A-Z]/g);function G(e){return e.replace(Z,X)}function X(e,t,n){var o=e.toLowerCase(),r=n.charAt(t+1);return 0===t||r.toUpperCase()===r?o:"-"+o}var J=/^\s*(?:true|false|null|undefined|-?[0-9]+\.?[0-9]*|[[{](?:.|[\s])*[\]}])\s*$/;function Y(e,t,n){var o=e;if(n)return function(e,t,n){var o=e;switch(n){case b.string:case b.string.isRequired:return e;case b.bool:case b.bool.isRequired:if(!e||t===e)return!0;case b.number:case b.number.isRequired:case b.object:case b.object.isRequired:case b.array:case b.array.isRequired:default:if(J.test(e))try{o=JSON.parse(e)}catch(n){console.error("Attribute "+t+" has an error:\n"+n+"\n",e)}}return o}(e,t,n);if(e&&t!==e){if(J.test(e))try{o=JSON.parse(e)}catch(n){console.error("Attribute "+t+" has an error:\n"+n+"\n",e)}}else o=!0;return o}var Q=/(?:^\w|[A-Z]|\b\w|\s+|[-_]+)/g,ee=/[-_]+/g;function te(e){return e.replace(Q,ne)}function ne(e,t){return 0==+e||ee.test(e)?"":0===t?e.toLowerCase():e.toUpperCase()}function oe(e,t,n){var o=1===e.nodeType,r=e.constructor.propTypes,i=n;!n&&o&&(i=(void 0===r?{}:r)[te(t)]);if(o&&!e.hasAttribute(t))return i!==b.bool&&i!==b.bool.isRequired&&void 0;var a=e.value;return t?a=e.getAttribute(t):t=e.name,a=Y(a,t,i)}var re=/iPad|iPhone|iPod/.test(navigator.userAgent)&&!window.MSStream;function ie(e,t,n){var o=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},r=o.capture,i=void 0===r||r,a=o.passive,s=void 0===a||a,l=e.ownerDocument.documentElement,c=H(l,t,function(t){var o=t.target;if(!e.contains(o)&&e!==o)return n(t)},{capture:i,passive:s});return re&&(l.style.cursor="pointer"),c}var ae=function(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];for(var o=t.length,r={},i=0;i<o;++i){var a=t[i];r[a.toUpperCase()]=a}return r}("click","change","keyup","enter","move","leave","Escape","Esc","touchstart","touchmove","touchend","input","resize"),se="axa-click",le="axa-change",ce="data-prevent-default";((function(){function e(t){var n=this,o=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};i(this,e),this._handleClick=function(e,t){n.shouldPreventDefault(t||e.currentTarget)&&e.preventDefault();var o=!n._lastToggleNode,r=t!==n._lastToggleNode,i=!o&&!r;o?(n._notify(ae.ENTER,t),n._onInteractive()):r&&n._notify(ae.MOVE,t,n._lastToggleNode),n._lastToggleNode=t,i&&n._options.sameClickClose&&n._close()},this._handleClose=function(e,t){n.shouldPreventDefault(t||e.currentTarget)&&e.preventDefault(),n._close()},this._handleKeyUp=function(e){(e.key===ae.ESCAPE||e.key===ae.ESC||27===e.keyCode)&&(e.preventDefault(),n._close())},this._init(t,o)}return a(e,[{key:"_init",value:function(t,n){t&&(this._wcNode=t),n&&(this._options=s({},e.DEFAULTS,n));var o=this._options.containerClass;this._container=o?this._wcNode.querySelector(o):this._wcNode,this._on()}},{key:"_on",value:function(){this._off(),this._unClick=H(this._container,ae.CLICK,this._options.toggleClass,this._handleClick,{passive:!this._options.preventDefault})}},{key:"_off",value:function(){this._unClick&&this._unClick(),this._offInteractive()}},{key:"_onInteractive",value:function(){this._offInteractive(),this._options.closeClass&&(this._unCloseClick=H(this._container,ae.CLICK,this._options.closeClass,this._handleClose,{passive:!this._options.preventDefault})),this._options.outerClose&&(this._unOuterClick=ie(this._container,ae.CLICK,this._handleClose,{passive:!this._options.preventDefault})),this._options.escapeClose&&(this._unCloseEscape=H(this._container.ownerDocument,ae.KEYUP,this._handleKeyUp,{passive:!1}))}},{key:"shouldPreventDefault",value:function(e){return e.hasAttribute(ce)?oe(e,ce):this._options.preventDefault}},{key:"_offInteractive",value:function(){this._unOuterClick&&this._unOuterClick(),this._unCloseClick&&this._unCloseClick(),this._unCloseEscape&&this._unCloseEscape(),this.deleteLastToggleNode()}},{key:"_close",value:function(){this._lastToggleNode&&(this._notify(ae.LEAVE,this._lastToggleNode),this._offInteractive(),this.deleteLastToggleNode())}},{key:"_notify",value:function(e,t,n){e in this&&"function"==typeof this[e]&&this[e](t,n)}},{key:"enter",value:function(e){throw new Error("UiEvent.enter method not overwritten")}},{key:"move",value:function(e,t){}},{key:"leave",value:function(e){throw new Error("UiEvent.leave method not overwritten")}},{key:"destroy",value:function(){this._off(),delete this._wcNode,delete this._options}},{key:"deleteLastToggleNode",value:function(){delete this._lastToggleNode}},{key:"lastToggleNode",get:function(){return this._lastToggleNode}}]),e})()).DEFAULTS={containerClass:".js-ui-container",toggleClass:"js-ui-toggle",closeClass:"js-ui-close",escapeClose:!0,outerClose:!0,sameClickClose:!0,preventDefault:!0};var ue=[];var pe=1,de=3,he=8;function fe(e,t){var n=e.nodeType,o=e.nodeName;n===pe&&function(e,t){for(var n=t.skipChildren&&t.skipChildren(),o=t.constructor.observedAttributes,r=o&&Array.isArray(o)&&o.length,i=function(e){return n&&r&&-1===o.indexOf(e)},a=t.attributes,s=e.attributes,l=null,c=null,u=null,p=null,d=s.length-1;d>=0;--d)if(p=s[d],u=p.name,l=p.namespaceURI,c=p.value,!i(u))if(l){var h=p.localName;t.getAttributeNS(l,h||u)!==c&&t.setAttributeNS(l,u,c)}else t.hasAttribute(u)?t.getAttribute(u)!==c&&("null"===c||"undefined"===c?t.removeAttribute(u):t.setAttribute(u,c)):t.setAttribute(u,c);for(var f=a.length-1;f>=0;--f)if(!1!==(p=a[f]).specified){if(u=p.name,l=p.namespaceURI,i(u))continue;l?(u=p.localName||u,e.hasAttributeNS(l,u)||t.removeAttributeNS(l,u)):e.hasAttributeNS(null,u)||t.removeAttribute(u)}}(e,t),n!==de&&n!==he||t.nodeValue===e.nodeValue||(t.nodeValue=e.nodeValue),"INPUT"===o?function(e,t){var n=e.value,o=t.value;ve(e,t,"checked"),ve(e,t,"disabled"),n!==o&&(t.setAttribute("value",n),t.value=n);"null"===n&&(t.value="",t.removeAttribute("value"));e.hasAttributeNS(null,"value")?"range"===t.type&&(t.value=n):t.removeAttribute("value")}(e,t):"OPTION"===o?ve(e,t,"selected"):"TEXTAREA"===o&&function(e,t){var n=e.value;n!==t.value&&(t.value=n);if(t.firstChild&&t.firstChild.nodeValue!==n){if(""===n&&t.firstChild.nodeValue===t.placeholder)return;t.firstChild.nodeValue=n}}(e,t)}function ve(e,t,n){e[n]!==t[n]&&(t[n]=e[n],e[n]?t.setAttribute(n,""):t.removeAttribute(n))}var ye=3;function _e(e,t){return t?e?e.isSameNode&&e.isSameNode(t)?t:e.tagName!==t.tagName?e:(fe(e,t),t.skipChildren&&t.skipChildren()||function(e,t){for(var n=void 0,o=void 0,r=void 0,i=void 0,a=0,s=0;n=t.childNodes[s],o=e.childNodes[s-a],n||o;s++)if(o)if(n)if(be(o,n))(r=_e(o,n))!==n&&(t.replaceChild(r,n),a++);else{i=null;for(var l=s;l<t.childNodes.length;l++)if(be(t.childNodes[l],o)){i=t.childNodes[l];break}i?((r=_e(o,i))!==i&&a++,t.insertBefore(r,n)):o.id||n.id?(t.insertBefore(o,n),a++):(r=_e(o,n))!==n&&(t.replaceChild(r,n),a++)}else t.appendChild(o),a++;else t.removeChild(n),s--}(e,t),t):null:e}function be(e,t){return e.id?e.id===t.id:e.isSameNode?e.isSameNode(t):e.tagName===t.tagName&&(e.type===ye&&e.nodeValue===t.nodeValue)}var ge=function(e){function t(e){var n;i(this,t);for(var o="\n    Web Component "+e.nodeName+"%c#"+e._id+" does not accept string as a return from a template. Maybe use bel?}",r=arguments.length,a=Array(r>1?r-1:0),s=1;s<r;s++)a[s-1]=arguments[s];var l=p(this,(n=t.__proto__||Object.getPrototypeOf(t)).call.apply(n,[this,o].concat(a)));return Error.captureStackTrace&&Error.captureStackTrace(l,t),l.name="TemplateNoStringReturnException",l}return c(t,e),t}(Error),me=!!document.createDocumentFragment().children;function Ce(){return Reflect.construct(HTMLElement,[],this.__proto__.constructor)}Object.setPrototypeOf(Ce.prototype,HTMLElement.prototype),Object.setPrototypeOf(Ce,HTMLElement);var Oe=function(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];return function(e){return t.reduceRight(function(e,t){return t(e)},e)}}(function(e){return function(t){function n(){var e,t,o;i(this,n);for(var r=arguments.length,a=Array(r),s=0;s<r;s++)a[s]=arguments[s];return t=o=p(this,(e=n.__proto__||Object.getPrototypeOf(n)).call.apply(e,[this].concat(a))),o._makeContextReady=function(){var e=(arguments.length>0&&void 0!==arguments[0]?arguments[0]:{}).detail;o.contextNode&&(clearTimeout(o.timeoutId),o.timeoutId=setTimeout(function(){o.contextCallback(o.contextNode,e)},10)),o.unContextEnabled&&o.unContextEnabled(),o.unContextEnabled=W("context/available",o._makeContextReady)},p(o,t)}return c(n,e),a(n,[{key:"connectedCallback",value:function(){l(n.prototype.__proto__||Object.getPrototypeOf(n.prototype),"connectedCallback",this)&&l(n.prototype.__proto__||Object.getPrototypeOf(n.prototype),"connectedCallback",this).call(this),this.contextCallback&&this._makeContextReady()}},{key:"disconnectedCallback",value:function(){l(n.prototype.__proto__||Object.getPrototypeOf(n.prototype),"disconnectedCallback",this)&&l(n.prototype.__proto__||Object.getPrototypeOf(n.prototype),"disconnectedCallback",this).call(this),this.unContextEnabled&&this.unContextEnabled()}},{key:"provideContext",value:function(){var e=this.nodeName.toLowerCase();this.__isContext=!0,this.__contextName=e,function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:document;$[e]||($[e]={count:0,queue:[]});var o=$[e].queue;Array.isArray(o)?o.push([e,t,n]):M(n,e,t)}("context/available",e)}},{key:"consumeContext",value:function(e){this.__consumedContext=e&&e.toLowerCase()}},{key:"contextNode",get:function(){for(var e=this.__consumedContext,t=this.parentNode;t&&(!t.__isContext||e&&e!==t.__contextName);)t=t.parentNode;return!(!t||!t.__isContext)&&t}}]),n}()},function(e){return function(t){function n(){return i(this,n),p(this,(n.__proto__||Object.getPrototypeOf(n)).apply(this,arguments))}return c(n,e),a(n,[{key:"appendChild",value:function(e){!this._isMorphing&&this._hasTemplate&&this._hasRendered?(this._lightDOMRefs.push(e),this.render()):l(n.prototype.__proto__||Object.getPrototypeOf(n.prototype),"appendChild",this).call(this,e)}},{key:"innerText",set:function(e){if(this._hasTemplate&&this._hasRendered){var t=document.createTextNode(e);this._lightDOMRefs=[t],this.render()}else d(n.prototype.__proto__||Object.getPrototypeOf(n.prototype),"innerText",e,this)}},{key:"textContent",set:function(e){if(this._hasTemplate&&this._hasRendered){var t=document.createTextNode(e);this._lightDOMRefs=[t],this.render()}else d(n.prototype.__proto__||Object.getPrototypeOf(n.prototype),"textContent",e,this)}},{key:"innerHTML",set:function(e){if(this._hasTemplate&&this._hasRendered){var t=document.createElement("div");t.innerHTML=e,this._lightDOMRefs=Array.from(t.children),this.render()}else d(n.prototype.__proto__||Object.getPrototypeOf(n.prototype),"innerHTML",e,this)}}]),n}()},function(e){return function(t){function n(e){i(this,n);var t=p(this,(n.__proto__||Object.getPrototypeOf(n)).call(this,e));t._reduceProps=function(e,o){var r=e.props,i=e.shouldUpdate,a=t._hasKeys[o],s="_"+o,l=r[o],c=t[s];return i||t.shouldUpdateCallback(l,c)?(t.props[o]=l,a&&d(n.prototype.__proto__||Object.getPrototypeOf(n.prototype),o,l,t),{props:r,shouldUpdate:!0}):{props:r,shouldUpdate:!1}},t._isConnected=!1,t.props={},t._hasKeys={};var o=t.constructor.observedAttributes;return Array.isArray(o)&&o.forEach(function(e){var n=te(e),o=n in t;t._hasKeys[n]=o}),t}return c(n,e),a(n,null,[{key:"observedAttributes",get:function(){var e=this.propTypes;return e&&Object.keys(e).map(G)}}]),a(n,[{key:"connectedCallback",value:function(){var e=this;if(l(n.prototype.__proto__||Object.getPrototypeOf(n.prototype),"connectedCallback",this)&&l(n.prototype.__proto__||Object.getPrototypeOf(n.prototype),"connectedCallback",this).call(this),!this._isConnected){this._isConnected=!0;var t=this.constructor.observedAttributes;if(this.initialClassName=this.className,Array.isArray(t)){var o=this.constructor.propTypes;t.forEach(function(t){var r=te(t);if(e.hasAttribute(t)){var i=oe(e,t,o[r]),a=e._hasKeys[r];e.props[r]=i,a&&d(n.prototype.__proto__||Object.getPrototypeOf(n.prototype),r,i,e)}}),this.checkPropTypes()}}this.updated&&this.updated()}},{key:"attributeChangedCallback",value:function(e,t,n){if(this.shouldUpdateCallback(n,t)){var o=te(e);if(this.hasAttribute(e)){var r=this.constructor.propTypes;this.props[o]=Y(n,e,r[o])}else this.props[o]=null;this.checkPropTypes(),"value"===e&&null!==n&&M(this,le,n,{bubbles:!0,cancelable:!0,composed:!0})}}},{key:"setProps",value:function(e){var t=this.constructor.observedAttributes,n=void 0===t?[]:t,o=Object.keys(e).filter(function(e){return n.indexOf(G(e))>-1}).reduce(this._reduceProps,{props:e,shouldUpdate:!1}).shouldUpdate;this.checkPropTypes(),o&&this._isConnected&&this.updated&&this.updated()}},{key:"checkPropTypes",value:function(){var e=this.constructor,t=e.propTypes,n=e.tagName;t&&b.checkPropTypes(t,this.props,"prop",n)}},{key:"shouldUpdateCallback",value:function(e,t){return e!==t}},{key:"disconnectedCallback",value:function(){this._isConnected=!1}}]),n}()},function(e){return function(t){function n(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.template,o=u(e,["template"]);i(this,n);var r=p(this,(n.__proto__||Object.getPrototypeOf(n)).call(this,o));return r._template=t,r._hasTemplate=!!t,r._hasRendered=!1,r.updated=r.render,r}return c(n,e),a(n,[{key:"render",value:function(){var e=this,t=!this._hasRendered;if(this.willRenderCallback(t),this._hasTemplate){var o=this._template;try{if(t){for(var i=document.createDocumentFragment(),a=[];this.firstChild;)a.push(this.firstChild),i.appendChild(this.firstChild);this._lightDOMRefs=a,this.childrenFragment=i}else this._lightDOMRefs.forEach(function(t){var n=t.cloneNode(!0);e.childrenFragment.appendChild(n)});me||(this.childrenFragment.children=Array.from(this.childrenFragment.childNodes).filter(function(e){return 1===e.nodeType}));var s=o(this.props,this.childrenFragment,this),c=document.createDocumentFragment();if(Array.isArray(s))s.forEach(function(e){c.appendChild(e)});else if(s){if("string"==typeof s)throw new ge(this);c.appendChild(s)}if(t)l(n.prototype.__proto__||Object.getPrototypeOf(n.prototype),"appendChild",this).call(this,c);else{var u=this.cloneNode(!1);u._isMorphing=!0,u.appendChild(c),this._isMorphing=!0,function(e,t){if("object"!==(void 0===e?"undefined":r(e)))throw new Error("componentMorph: oldTree should be an object");if("object"!==(void 0===t?"undefined":r(t)))throw new Error("componentMorph: newTree should be an object");_e(t,e)}(this,u),function(){for(var e=void 0;e=ue.pop();)delete e.isSameNode;ue=[]}(),this._isMorphing=!1}}catch(e){console.error(e)}}this._hasRendered=!0,this.didRenderCallback(t)}},{key:"skipChildren",value:function(){return!this._isMorphing}},{key:"willRenderCallback",value:function(e){}},{key:"didRenderCallback",value:function(e){}}]),n}()},function(e){return function(t){function n(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.styles,o=void 0===t?"":t,r=u(e,["styles"]);i(this,n);var a=p(this,(n.__proto__||Object.getPrototypeOf(n)).call(this,r));return a._styles=o,a}return c(n,e),a(n,[{key:"connectedCallback",value:function(){l(n.prototype.__proto__||Object.getPrototypeOf(n.prototype),"connectedCallback",this)&&l(n.prototype.__proto__||Object.getPrototypeOf(n.prototype),"connectedCallback",this).call(this),this._appendStyles()}},{key:"_appendStyles",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this;if(this._styles){var t=document.createElement("style"),n=document.createTextNode(this._styles);t.appendChild(n),e.insertAdjacentElement?e.insertAdjacentElement("afterbegin",t):e.appendChild(t)}}}]),n}()})(function(e){function t(e){i(this,t);var n=p(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n._id=U(n.nodeName),n}return c(t,Ce),a(t,null,[{key:"uuidv4",value:function(){return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,function(e){var t=16*Math.random()|0;return("x"==e?t:3&t|8).toString(16)})}}]),t}()),ke={},xe=function(e){function t(){var e,n,o;i(this,t);for(var r=arguments.length,a=Array(r),s=0;s<r;s++)a[s]=arguments[s];return n=o=p(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(a))),o._appendStyles=function(){t.appendGlobalStyles(o._styles,o.nodeName)},p(o,n)}return c(t,Oe),a(t,null,[{key:"appendGlobalStyles",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:Oe.uuidv4();if(e&&!ke[t]){var n=document.createElement("style"),o=document.createTextNode(e);ke[t]=!0,n.appendChild(o),n.setAttribute("data-c-name",t.toLowerCase()),document.head.appendChild(n)}}}]),t}();var we=".m-header-logo {\n  max-width: 16.66667%;\n  -webkit-box-flex: 0;\n      -ms-flex: 0 0 16.66667%;\n          flex: 0 0 16.66667%;\n  display: block;\n  -ms-flex-item-align: center;\n      align-self: center; }\n  @media (min-width: 992px) {\n    .m-header-logo {\n      -ms-flex-item-align: start;\n          align-self: flex-start; } }\n\n.m-header-logo__link {\n  display: block; }\n\n.m-header-logo__icon {\n  width: 35px;\n  height: 35px;\n  display: block; }\n  @media (min-width: 576px) {\n    .m-header-logo__icon {\n      width: 43px;\n      height: 43px; } }\n  @media (min-width: 1200px) {\n    .m-header-logo__icon {\n      width: 53px;\n      height: 53px; } }\n\n.m-header-logo__img {\n  display: block;\n  height: 35px; }\n  @media (min-width: 576px) {\n    .m-header-logo__img {\n      height: 43px; } }\n  @media (min-width: 1200px) {\n    .m-header-logo__img {\n      height: 53px; } }\n",Te=/\n[\s]+$/,Ae=/^\n[\s]+/,Ne=/[\s]+$/,Ee=/^[\s]+/,je=/[\n\s]+/g,Pe=["a","abbr","b","bdi","bdo","br","cite","data","dfn","em","i","kbd","mark","q","rp","rt","rtc","ruby","s","amp","small","span","strong","sub","sup","time","u","var","wbr"],Se=["code","pre","textarea"];var Re=function(e){var t,n=document.createElement("div");return n.innerHTML=e,t=n.childNodes,Array.isArray(t)?t:[].slice.call(t)},Le=function(){var e,t,n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},o=n.src,r=n.alt,i=void 0===r?"AXA Logo":r,a=n.href,s=void 0===a?"#":a;return(e=document.createElement("a")).setAttribute("href",""+String(s)),e.setAttribute("class","m-header-logo__link js-header-logo__link"),function e(t,n){if(Array.isArray(n))for(var o,r,i=t.nodeName.toLowerCase(),a=!1,s=0,l=n.length;s<l;s++){var c=n[s];if(Array.isArray(c))e(t,c);else{("number"==typeof c||"boolean"==typeof c||"function"==typeof c||c instanceof Date||c instanceof RegExp)&&(c=c.toString());var u=t.childNodes[t.childNodes.length-1];if("string"==typeof c)a=!0,u&&"#text"===u.nodeName?u.nodeValue+=c:(c=document.createTextNode(c),t.appendChild(c),u=c),s===l-1&&(a=!1,-1===Pe.indexOf(i)&&-1===Se.indexOf(i)?""===(o=u.nodeValue.replace(Ae,"").replace(Ne,"").replace(Te,"").replace(je," "))?t.removeChild(u):u.nodeValue=o:-1===Se.indexOf(i)&&(r=0===s?"":" ",o=u.nodeValue.replace(Ae,r).replace(Ee," ").replace(Ne,"").replace(Te,"").replace(je," "),u.nodeValue=o));else if(c&&c.nodeType){a&&(a=!1,-1===Pe.indexOf(i)&&-1===Se.indexOf(i)?""===(o=u.nodeValue.replace(Ae,"").replace(Te,"").replace(je," "))?t.removeChild(u):u.nodeValue=o:-1===Se.indexOf(i)&&(o=u.nodeValue.replace(Ee," ").replace(Ae,"").replace(Te,"").replace(je," "),u.nodeValue=o));var p=c.nodeName;p&&(i=p.toLowerCase()),t.appendChild(c)}}}}(e,["\n    ",o?(t=document.createElement("img"),t.setAttribute("src",""+String(o)),t.setAttribute("alt",""+String(i)),t.setAttribute("class","m-header-logo__img"),t):Re('<axa-icon icon="logo-AXA" classes="m-header-logo__icon"></axa-icon>'),"\n  "]),e},De=function(){function e(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};i(this,e),this.wcNode=t,this.options=s({},e.DEFAULTS,n),this.handleClick=this.handleClick.bind(this),this.init()}return a(e,[{key:"init",value:function(){this.link=this.wcNode.querySelector(this.options.link),this.on()}},{key:"on",value:function(){this.off(),this.unClick=H(this.link,ae.CLICK,this.handleClick,{passive:!1})}},{key:"handleClick",value:function(e){M(this.wcNode,se,null,{bubbles:!0,cancelable:!0,composed:!0})||e.preventDefault()}},{key:"off",value:function(){this.unClick&&this.unClick()}},{key:"destroy",value:function(){this.off(),delete this.link,delete this.wcNode,delete this.options,delete this.handleClick}}]),e}();De.DEFAULTS={link:".js-header-logo__link"};var Ue,Ie,Me=function(e){function t(){return i(this,t),p(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,{styles:we,template:Le}))}return c(t,xe),a(t,[{key:"connectedCallback",value:function(){l(t.prototype.__proto__||Object.getPrototypeOf(t.prototype),"connectedCallback",this).call(this),this.className=this.initialClassName+" m-header-logo"}},{key:"didRenderCallback",value:function(){this.logo&&this.logo.destroy(),this.logo=new De(this)}},{key:"disconnectedCallback",value:function(){this.logo&&(this.logo.destroy(),delete this.logo)}}]),t}();return Me.tagName="axa-header-logo",Me.propTypes={alt:b.string,href:L,src:L},Ue=Me.tagName,Ie=Me,customElements.get(Ue)||customElements.define(Ue,Ie),Me}();
