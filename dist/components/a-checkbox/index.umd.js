!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):e.StyleGuideWebComponent=t()}(this,function(){"use strict";function e(e,t){return e(t={exports:{}},t.exports),t.exports}var t=Object.getOwnPropertySymbols,n=Object.prototype.hasOwnProperty,o=Object.prototype.propertyIsEnumerable;(function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},n=0;n<10;n++)t["_"+String.fromCharCode(n)]=n;if("0123456789"!==Object.getOwnPropertyNames(t).map(function(e){return t[e]}).join(""))return!1;var o={};return"abcdefghijklmnopqrst".split("").forEach(function(e){o[e]=e}),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},o)).join("")}catch(e){return!1}})()&&Object.assign;var r="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},a=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")},c=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},l=function e(t,n,o){null===t&&(t=Function.prototype);var r=Object.getOwnPropertyDescriptor(t,n);if(void 0===r){var i=Object.getPrototypeOf(t);return null===i?void 0:e(i,n,o)}if("value"in r)return r.value;var a=r.get;return void 0!==a?a.call(o):void 0},u=function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)},p=function(e,t){var n={};for(var o in e)t.indexOf(o)>=0||Object.prototype.hasOwnProperty.call(e,o)&&(n[o]=e[o]);return n},d=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t},f=function e(t,n,o,r){var i=Object.getOwnPropertyDescriptor(t,n);if(void 0===i){var a=Object.getPrototypeOf(t);null!==a&&e(a,n,o,r)}else if("value"in i&&i.writable)i.value=o;else{var c=i.set;void 0!==c&&c.call(r,o)}return o},h=function(){return function(e,t){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return function(e,t){var n=[],o=!0,r=!1,i=void 0;try{for(var a,c=e[Symbol.iterator]();!(o=(a=c.next()).done)&&(n.push(a.value),!t||n.length!==t);o=!0);}catch(e){r=!0,i=e}finally{try{!o&&c.return&&c.return()}finally{if(r)throw i}}return n}(e,t);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),v=function(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}return Array.from(e)};function b(){}function y(e,t){return"function"==typeof e[t]&&(e[t]=function(e){return(!(arguments.length>1&&void 0!==arguments[1])||arguments[1])&&Object.keys(e).reduce(y,e),function(){return e.apply(void 0,arguments)}}(e[t],!1)),e}var _=e(function(e){e.exports=function(){function e(e,t,n,o,i,a){if(a!==r){var c=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw c.name="Invariant Violation",c}}function t(){return e}e.isRequired=e;var n={array:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t};return n.checkPropTypes=b,n.PropTypes=n,n}()});Object.keys(_).reduce(y,_);var m=_.oneOf(["left","center","right"]),g=_.oneOfType([_.string,_.number]),k=_.oneOfType([_.arrayOf(E),_.shape({cells:_.arrayOf(E)})]),x=_.oneOfType([_.arrayOf(j),_.shape({cells:_.arrayOf(j),action:_.bool})]),O=_.oneOfType([_.arrayOf(P),_.shape({cells:_.arrayOf(P)})]),C=(_.oneOf(["row","col","rowgroup","colgroup","auto"]),_.oneOfType([_.arrayOf(E),_.arrayOf(k)]),_.oneOfType([_.arrayOf(j),_.arrayOf(x)]),_.oneOfType([_.arrayOf(P),_.arrayOf(O)]),_.oneOf(["up","down"])),w=_.oneOf(["left","right"]),T=_.oneOf(["ok","pending","error","unknown"]),A={text:g,value:_.any,rowspan:_.number,colspan:_.number,scope:null,align:m,dense:_.bool},N=_.oneOfType([_.string,_.number,_.shape(A)]),E=_.oneOfType([N,_.shape(s({},A,{sort:C,sortActive:_.bool}))]),j=_.oneOfType([N,_.shape(s({},A,{float:w,action:_.bool,strong:_.bool,bold:_.bool,state:T}))]),P=_.oneOfType([N,_.shape(s({},A,{float:w}))]),S=(_.oneOf(["top","bottom"]),e(function(e){!function(){var t={}.hasOwnProperty;function n(){for(var e=[],o=0;o<arguments.length;o++){var r=arguments[o];if(r){var a=void 0===r?"undefined":i(r);if("string"===a||"number"===a)e.push(r);else if(Array.isArray(r))e.push(n.apply(null,r));else if("object"===a)for(var c in r)t.call(r,c)&&r[c]&&e.push(c)}}return e.join(" ")}e.exports?e.exports=n:window.classNames=n}()})),R={},D=function(e){return e in R||(R[e]=0),++R[e]},L=function(){try{var e=new window.CustomEvent("test",{cancelable:!0});if(e.preventDefault(),!0!==e.defaultPrevented)throw new Error("Could not prevent default");return window.CustomEvent}catch(e){}return t;function t(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=t.bubbles,o=void 0!==n&&n,r=t.cancelable,i=void 0!==r&&r,a=t.detail,c=void 0===a?void 0:a,s=document.createEvent("CustomEvent");s.initCustomEvent(e,o,i,c);var l=s.preventDefault;return s.preventDefault=function(){l.call(s);try{Object.defineProperty(this,"defaultPrevented",{get:function(){return!0}})}catch(e){this.defaultPrevented=!0}},s}}();function M(e,t,n){var o=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},r=new L(t,s({},o,{detail:n}));return e.dispatchEvent(r)}var I=function(){var e=!1;if("undefined"!=typeof window&&"function"==typeof window.addEventListener){var t=Object.defineProperty({},"passive",{get:function(){e=!0}}),n=function(){};window.addEventListener("testPassiveEventSupport",n,t),window.removeEventListener("testPassiveEventSupport",n,t)}return e}();function U(e){for(var t=e.className,n=!1,o=!0,r=arguments.length,i=Array(r>1?r-1:0),a=1;a<r;a++)i[a-1]=arguments[a];var c=i.map(function(e){var r=(i=e,new RegExp("^"+i+"$|^"+i+"\\s|\\s"+i+"\\s|\\s"+i+"$",a)).test(t);var i,a;r?n=!0:o=!1;return{className:e,hasClass:r}});return!(!o&&!n)&&c}var V=/\s+/,q={transitionend:function(){for(var e=document.createElement("div").style,t={transition:"transitionend",OTransition:"oTransitionEnd otransitionend",MozTransition:"transitionend",WebkitTransition:"webkitTransitionEnd"},n=Object.keys(t),o=n.length,r=void 0,i=0;i<o;++i)if(void 0!==e[r=n[i]])return t[r];return""}()};function F(e,t,n,o){var r=arguments.length>4&&void 0!==arguments[4]?arguments[4]:{},a=r.capture,c=void 0!==a&&a,s=r.passive,l=void 0===s||s;if(q[t]&&(t=q[t]),!e||!t)return null;var u=void 0===n?"undefined":i(n),p=n&&"string"===u;if("function"===u){if(o){var d=o;c=d.capture,l=d.passive}o=n}for(var f=I?{capture:c,passive:l}:c,h=p?function(t){var r=t.target;for(;!U(r,n)&&r!==e;)r=r.parentNode;if(r!==e)return o(t,r)}:o,v=t.split(V),b=v.length,y=0;y<b;++y)e.addEventListener(v[y],h,f);return function t(){for(var n=0;n<b;++n)e.removeEventListener(v[n],h,f);!function(e,t){if(!e)return!1;for(var n=Object.keys(e),o=n.length,r=0;r<o;++r){var i=n[r];if(e[i]===t)return delete e[i]}}(this,t)}}window.__subscriptions=window.__subscriptions||{};var K=window.__subscriptions;function H(e,t){var n=F(arguments.length>2&&void 0!==arguments[2]?arguments[2]:document,e,t);K[e]||(K[e]={count:0});var o,r=K[e];return r.count++,r.onsubscribe||(r.onsubscribe=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},o=n.leading,r=void 0!==o&&o,i=n.trailing,a=void 0===i||i,c=n.maxWait,s=void 0!==c&&c,l=void 0,u=void 0,p=void 0,d=void 0,f=!1,h=t!==s,b=!1!==s;function y(){for(var n=arguments.length,o=Array(n),i=0;i<n;i++)o[i]=arguments[i];return l=o,h&&(u&&clearTimeout(u),u=setTimeout(_,t)),b&&!p&&(p=setTimeout(m,s)),r&&!f&&(f=!0,d=e.apply(void 0,v(l))),d}return y.flush=function(){return(u||p)&&(d=e.apply(void 0,v(l))),k(),d},y.cancel=k,y;function _(){p&&clearTimeout(p),g()}function m(){u&&clearTimeout(u),g()}function g(){a&&(d=e.apply(void 0,v(l))),u=null,p=null,f=!1}function k(){u&&(clearTimeout(u),u=null),p&&(clearTimeout(p),p=null),l=void 0,f=!1}}((o=e,function(){M(document,"pubsub/onsubscribe",o),M(document,"pubsub/onsubscribe/"+o,o),K[o]&&delete K[o].unsubscribe}),100)),r.onsubscribe(),function(){r.count--,n.call(this),r.count<=0&&delete K[e]}}F(document,"pubsub/onsubscribe",function(e){var t=e.detail;K[t]||(K[t]={count:0});var n=K[t],o=n.queue;Array.isArray(o)&&(o.forEach(function(e){var t=h(e,3),n=t[0],o=t[1],r=t[2];M(r,n,o)}),delete n.queue)});var W,$=function(e,t){return e===t},B=((W=function(){var e;return(e=console).log.apply(e,arguments)},function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:$;return function(){for(var t=arguments.length,n=Array(t),o=0;o<t;o++)n[o]=arguments[o];return function(){for(var t=arguments.length,o=Array(t),r=0;r<t;r++)o[r]=arguments[r];return function(){return e.apply(void 0,[].concat(n,o))?W.apply(void 0,arguments):void 0}}}})()(!0),/[A-Z]/g);function G(e){return e.replace(B,z)}function z(e,t,n){var o=e.toLowerCase(),r=n.charAt(t+1);return 0===t||r.toUpperCase()===r?o:"-"+o}var J=/^\s*(?:true|false|null|undefined|-?[0-9]+\.?[0-9]*|[[{](?:.|[\s])*[\]}])\s*$/;function Y(e,t,n){var o=e;if(n)return function(e,t,n){var o=e;switch(n){case _.string:case _.string.isRequired:return e;case _.bool:case _.bool.isRequired:if(!e||t===e)return!0;case _.number:case _.number.isRequired:case _.object:case _.object.isRequired:case _.array:case _.array.isRequired:default:if(J.test(e))try{o=JSON.parse(e)}catch(n){console.error("Attribute "+t+" has an error:\n"+n+"\n",e)}}return o}(e,t,n);if(e&&t!==e){if(J.test(e))try{o=JSON.parse(e)}catch(n){console.error("Attribute "+t+" has an error:\n"+n+"\n",e)}}else o=!0;return o}var Z=/(?:^\w|[A-Z]|\b\w|\s+|[-_]+)/g,X=/[-_]+/g;function Q(e){return e.replace(Z,ee)}function ee(e,t){return 0==+e||X.test(e)?"":0===t?e.toLowerCase():e.toUpperCase()}function te(e,t,n){var o=1===e.nodeType,r=e.constructor.propTypes,i=n;!n&&o&&(i=(void 0===r?{}:r)[Q(t)]);if(o&&!e.hasAttribute(t))return i!==_.bool&&i!==_.bool.isRequired&&void 0;var a=e.value;return t?a=e.getAttribute(t):t=e.name,a=Y(a,t,i)}var ne=/iPad|iPhone|iPod/.test(navigator.userAgent)&&!window.MSStream;function oe(e,t,n){var o=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},r=o.capture,i=void 0===r||r,a=o.passive,c=void 0===a||a,s=e.ownerDocument.documentElement,l=F(s,t,function(t){var o=t.target;if(!e.contains(o)&&e!==o)return n(t)},{capture:i,passive:c});return ne&&(s.style.cursor="pointer"),l}var re=function(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];for(var o=t.length,r={},i=0;i<o;++i){var a=t[i];r[a.toUpperCase()]=a}return r}("click","change","keyup","enter","move","leave","Escape","Esc","touchstart","touchmove","touchend","input","resize"),ie="axa-change",ae="data-prevent-default";((function(){function e(t){var n=this,o=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};a(this,e),this._handleClick=function(e,t){n.shouldPreventDefault(t||e.currentTarget)&&e.preventDefault();var o=!n._lastToggleNode,r=t!==n._lastToggleNode,i=!o&&!r;o?(n._notify(re.ENTER,t),n._onInteractive()):r&&n._notify(re.MOVE,t,n._lastToggleNode),n._lastToggleNode=t,i&&n._options.sameClickClose&&n._close()},this._handleClose=function(e,t){n.shouldPreventDefault(t||e.currentTarget)&&e.preventDefault(),n._close()},this._handleKeyUp=function(e){(e.key===re.ESCAPE||e.key===re.ESC||27===e.keyCode)&&(e.preventDefault(),n._close())},this._init(t,o)}return c(e,[{key:"_init",value:function(t,n){t&&(this._wcNode=t),n&&(this._options=s({},e.DEFAULTS,n));var o=this._options.containerClass;this._container=o?this._wcNode.querySelector(o):this._wcNode,this._on()}},{key:"_on",value:function(){this._off(),this._unClick=F(this._container,re.CLICK,this._options.toggleClass,this._handleClick,{passive:!this._options.preventDefault})}},{key:"_off",value:function(){this._unClick&&this._unClick(),this._offInteractive()}},{key:"_onInteractive",value:function(){this._offInteractive(),this._options.closeClass&&(this._unCloseClick=F(this._container,re.CLICK,this._options.closeClass,this._handleClose,{passive:!this._options.preventDefault})),this._options.outerClose&&(this._unOuterClick=oe(this._container,re.CLICK,this._handleClose,{passive:!this._options.preventDefault})),this._options.escapeClose&&(this._unCloseEscape=F(this._container.ownerDocument,re.KEYUP,this._handleKeyUp,{passive:!1}))}},{key:"shouldPreventDefault",value:function(e){return e.hasAttribute(ae)?te(e,ae):this._options.preventDefault}},{key:"_offInteractive",value:function(){this._unOuterClick&&this._unOuterClick(),this._unCloseClick&&this._unCloseClick(),this._unCloseEscape&&this._unCloseEscape(),this.deleteLastToggleNode()}},{key:"_close",value:function(){this._lastToggleNode&&(this._notify(re.LEAVE,this._lastToggleNode),this._offInteractive(),this.deleteLastToggleNode())}},{key:"_notify",value:function(e,t,n){e in this&&"function"==typeof this[e]&&this[e](t,n)}},{key:"enter",value:function(e){throw new Error("UiEvent.enter method not overwritten")}},{key:"move",value:function(e,t){}},{key:"leave",value:function(e){throw new Error("UiEvent.leave method not overwritten")}},{key:"destroy",value:function(){this._off(),delete this._wcNode,delete this._options}},{key:"deleteLastToggleNode",value:function(){delete this._lastToggleNode}},{key:"lastToggleNode",get:function(){return this._lastToggleNode}}]),e})()).DEFAULTS={containerClass:".js-ui-container",toggleClass:"js-ui-toggle",closeClass:"js-ui-close",escapeClose:!0,outerClose:!0,sameClickClose:!0,preventDefault:!0};var ce=[];var se=1,le=3,ue=8;function pe(e,t){var n=e.nodeType,o=e.nodeName;n===se&&function(e,t){for(var n=t.skipChildren&&t.skipChildren(),o=t.constructor.observedAttributes,r=o&&Array.isArray(o)&&o.length,i=function(e){return n&&r&&-1===o.indexOf(e)},a=t.attributes,c=e.attributes,s=null,l=null,u=null,p=null,d=c.length-1;d>=0;--d)if(p=c[d],u=p.name,s=p.namespaceURI,l=p.value,!i(u))if(s){var f=p.localName;t.getAttributeNS(s,f||u)!==l&&t.setAttributeNS(s,u,l)}else t.hasAttribute(u)?t.getAttribute(u)!==l&&("null"===l||"undefined"===l?t.removeAttribute(u):t.setAttribute(u,l)):t.setAttribute(u,l);for(var h=a.length-1;h>=0;--h)if(!1!==(p=a[h]).specified){if(u=p.name,s=p.namespaceURI,i(u))continue;s?(u=p.localName||u,e.hasAttributeNS(s,u)||t.removeAttributeNS(s,u)):e.hasAttributeNS(null,u)||t.removeAttribute(u)}}(e,t),n!==le&&n!==ue||t.nodeValue===e.nodeValue||(t.nodeValue=e.nodeValue),"INPUT"===o?function(e,t){var n=e.value,o=t.value;de(e,t,"checked"),de(e,t,"disabled"),n!==o&&(t.setAttribute("value",n),t.value=n);"null"===n&&(t.value="",t.removeAttribute("value"));e.hasAttributeNS(null,"value")?"range"===t.type&&(t.value=n):t.removeAttribute("value")}(e,t):"OPTION"===o?de(e,t,"selected"):"TEXTAREA"===o&&function(e,t){var n=e.value;n!==t.value&&(t.value=n);if(t.firstChild&&t.firstChild.nodeValue!==n){if(""===n&&t.firstChild.nodeValue===t.placeholder)return;t.firstChild.nodeValue=n}}(e,t)}function de(e,t,n){e[n]!==t[n]&&(t[n]=e[n],e[n]?t.setAttribute(n,""):t.removeAttribute(n))}var fe=3;function he(e,t){return t?e?e.isSameNode&&e.isSameNode(t)?t:e.tagName!==t.tagName?e:(pe(e,t),t.skipChildren&&t.skipChildren()||function(e,t){for(var n=void 0,o=void 0,r=void 0,i=void 0,a=0,c=0;n=t.childNodes[c],o=e.childNodes[c-a],n||o;c++)if(o)if(n)if(ve(o,n))(r=he(o,n))!==n&&(t.replaceChild(r,n),a++);else{i=null;for(var s=c;s<t.childNodes.length;s++)if(ve(t.childNodes[s],o)){i=t.childNodes[s];break}i?((r=he(o,i))!==i&&a++,t.insertBefore(r,n)):o.id||n.id?(t.insertBefore(o,n),a++):(r=he(o,n))!==n&&(t.replaceChild(r,n),a++)}else t.appendChild(o),a++;else t.removeChild(n),c--}(e,t),t):null:e}function ve(e,t){return e.id?e.id===t.id:e.isSameNode?e.isSameNode(t):e.tagName===t.tagName&&(e.type===fe&&e.nodeValue===t.nodeValue)}var be=function(e){function t(e){var n;a(this,t);for(var o="\n    Web Component "+e.nodeName+"%c#"+e._id+" does not accept string as a return from a template. Maybe use bel?}",r=arguments.length,i=Array(r>1?r-1:0),c=1;c<r;c++)i[c-1]=arguments[c];var s=d(this,(n=t.__proto__||Object.getPrototypeOf(t)).call.apply(n,[this,o].concat(i)));return Error.captureStackTrace&&Error.captureStackTrace(s,t),s.name="TemplateNoStringReturnException",s}return u(t,e),t}(Error),ye=!!document.createDocumentFragment().children;function _e(){return Reflect.construct(HTMLElement,[],this.__proto__.constructor)}Object.setPrototypeOf(_e.prototype,HTMLElement.prototype),Object.setPrototypeOf(_e,HTMLElement);var me=function(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];return function(e){return t.reduceRight(function(e,t){return t(e)},e)}}(function(e){return function(t){function n(){var e,t,o;a(this,n);for(var r=arguments.length,i=Array(r),c=0;c<r;c++)i[c]=arguments[c];return t=o=d(this,(e=n.__proto__||Object.getPrototypeOf(n)).call.apply(e,[this].concat(i))),o._makeContextReady=function(){var e=(arguments.length>0&&void 0!==arguments[0]?arguments[0]:{}).detail;o.contextNode&&(clearTimeout(o.timeoutId),o.timeoutId=setTimeout(function(){o.contextCallback(o.contextNode,e)},10)),o.unContextEnabled&&o.unContextEnabled(),o.unContextEnabled=H("context/available",o._makeContextReady)},d(o,t)}return u(n,e),c(n,[{key:"connectedCallback",value:function(){l(n.prototype.__proto__||Object.getPrototypeOf(n.prototype),"connectedCallback",this)&&l(n.prototype.__proto__||Object.getPrototypeOf(n.prototype),"connectedCallback",this).call(this),this.contextCallback&&this._makeContextReady()}},{key:"disconnectedCallback",value:function(){l(n.prototype.__proto__||Object.getPrototypeOf(n.prototype),"disconnectedCallback",this)&&l(n.prototype.__proto__||Object.getPrototypeOf(n.prototype),"disconnectedCallback",this).call(this),this.unContextEnabled&&this.unContextEnabled()}},{key:"provideContext",value:function(){var e=this.nodeName.toLowerCase();this.__isContext=!0,this.__contextName=e,function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:document;K[e]||(K[e]={count:0,queue:[]});var o=K[e].queue;Array.isArray(o)?o.push([e,t,n]):M(n,e,t)}("context/available",e)}},{key:"consumeContext",value:function(e){this.__consumedContext=e&&e.toLowerCase()}},{key:"contextNode",get:function(){for(var e=this.__consumedContext,t=this.parentNode;t&&(!t.__isContext||e&&e!==t.__contextName);)t=t.parentNode;return!(!t||!t.__isContext)&&t}}]),n}()},function(e){return function(t){function n(){return a(this,n),d(this,(n.__proto__||Object.getPrototypeOf(n)).apply(this,arguments))}return u(n,e),c(n,[{key:"appendChild",value:function(e){!this._isMorphing&&this._hasTemplate&&this._hasRendered?(this._lightDOMRefs.push(e),this.render()):l(n.prototype.__proto__||Object.getPrototypeOf(n.prototype),"appendChild",this).call(this,e)}},{key:"innerText",set:function(e){if(this._hasTemplate&&this._hasRendered){var t=document.createTextNode(e);this._lightDOMRefs=[t],this.render()}else f(n.prototype.__proto__||Object.getPrototypeOf(n.prototype),"innerText",e,this)}},{key:"textContent",set:function(e){if(this._hasTemplate&&this._hasRendered){var t=document.createTextNode(e);this._lightDOMRefs=[t],this.render()}else f(n.prototype.__proto__||Object.getPrototypeOf(n.prototype),"textContent",e,this)}},{key:"innerHTML",set:function(e){if(this._hasTemplate&&this._hasRendered){var t=document.createElement("div");t.innerHTML=e,this._lightDOMRefs=Array.from(t.children),this.render()}else f(n.prototype.__proto__||Object.getPrototypeOf(n.prototype),"innerHTML",e,this)}}]),n}()},function(e){return function(t){function n(e){a(this,n);var t=d(this,(n.__proto__||Object.getPrototypeOf(n)).call(this,e));t._reduceProps=function(e,o){var r=e.props,i=e.shouldUpdate,a=t._hasKeys[o],c="_"+o,s=r[o],l=t[c];return i||t.shouldUpdateCallback(s,l)?(t.props[o]=s,a&&f(n.prototype.__proto__||Object.getPrototypeOf(n.prototype),o,s,t),{props:r,shouldUpdate:!0}):{props:r,shouldUpdate:!1}},t._isConnected=!1,t.props={},t._hasKeys={};var o=t.constructor.observedAttributes;return Array.isArray(o)&&o.forEach(function(e){var n=Q(e),o=n in t;t._hasKeys[n]=o}),t}return u(n,e),c(n,null,[{key:"observedAttributes",get:function(){var e=this.propTypes;return e&&Object.keys(e).map(G)}}]),c(n,[{key:"connectedCallback",value:function(){var e=this;if(l(n.prototype.__proto__||Object.getPrototypeOf(n.prototype),"connectedCallback",this)&&l(n.prototype.__proto__||Object.getPrototypeOf(n.prototype),"connectedCallback",this).call(this),!this._isConnected){this._isConnected=!0;var t=this.constructor.observedAttributes;if(this.initialClassName=this.className,Array.isArray(t)){var o=this.constructor.propTypes;t.forEach(function(t){var r=Q(t);if(e.hasAttribute(t)){var i=te(e,t,o[r]),a=e._hasKeys[r];e.props[r]=i,a&&f(n.prototype.__proto__||Object.getPrototypeOf(n.prototype),r,i,e)}}),this.checkPropTypes()}}this.updated&&this.updated()}},{key:"attributeChangedCallback",value:function(e,t,n){if(this.shouldUpdateCallback(n,t)){var o=Q(e);if(this.hasAttribute(e)){var r=this.constructor.propTypes;this.props[o]=Y(n,e,r[o])}else this.props[o]=null;this.checkPropTypes(),"value"===e&&null!==n&&M(this,ie,n,{bubbles:!0,cancelable:!0,composed:!0})}}},{key:"setProps",value:function(e){var t=this.constructor.observedAttributes,n=void 0===t?[]:t,o=Object.keys(e).filter(function(e){return n.indexOf(G(e))>-1}).reduce(this._reduceProps,{props:e,shouldUpdate:!1}).shouldUpdate;this.checkPropTypes(),o&&this._isConnected&&this.updated&&this.updated()}},{key:"checkPropTypes",value:function(){var e=this.constructor,t=e.propTypes,n=e.tagName;t&&_.checkPropTypes(t,this.props,"prop",n)}},{key:"shouldUpdateCallback",value:function(e,t){return e!==t}},{key:"disconnectedCallback",value:function(){this._isConnected=!1}}]),n}()},function(e){return function(t){function n(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.template,o=p(e,["template"]);a(this,n);var r=d(this,(n.__proto__||Object.getPrototypeOf(n)).call(this,o));return r._template=t,r._hasTemplate=!!t,r._hasRendered=!1,r.updated=r.render,r}return u(n,e),c(n,[{key:"render",value:function(){var e=this,t=!this._hasRendered;if(this.willRenderCallback(t),this._hasTemplate){var o=this._template;try{if(t){for(var r=document.createDocumentFragment(),a=[];this.firstChild;)a.push(this.firstChild),r.appendChild(this.firstChild);this._lightDOMRefs=a,this.childrenFragment=r}else this._lightDOMRefs.forEach(function(t){var n=t.cloneNode(!0);e.childrenFragment.appendChild(n)});ye||(this.childrenFragment.children=Array.from(this.childrenFragment.childNodes).filter(function(e){return 1===e.nodeType}));var c=o(this.props,this.childrenFragment,this),s=document.createDocumentFragment();if(Array.isArray(c))c.forEach(function(e){s.appendChild(e)});else if(c){if("string"==typeof c)throw new be(this);s.appendChild(c)}if(t)l(n.prototype.__proto__||Object.getPrototypeOf(n.prototype),"appendChild",this).call(this,s);else{var u=this.cloneNode(!1);u._isMorphing=!0,u.appendChild(s),this._isMorphing=!0,function(e,t){if("object"!==(void 0===e?"undefined":i(e)))throw new Error("componentMorph: oldTree should be an object");if("object"!==(void 0===t?"undefined":i(t)))throw new Error("componentMorph: newTree should be an object");he(t,e)}(this,u),function(){for(var e=void 0;e=ce.pop();)delete e.isSameNode;ce=[]}(),this._isMorphing=!1}}catch(e){console.error(e)}}this._hasRendered=!0,this.didRenderCallback(t)}},{key:"skipChildren",value:function(){return!this._isMorphing}},{key:"willRenderCallback",value:function(e){}},{key:"didRenderCallback",value:function(e){}}]),n}()},function(e){return function(t){function n(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.styles,o=void 0===t?"":t,r=p(e,["styles"]);a(this,n);var i=d(this,(n.__proto__||Object.getPrototypeOf(n)).call(this,r));return i._styles=o,i}return u(n,e),c(n,[{key:"connectedCallback",value:function(){l(n.prototype.__proto__||Object.getPrototypeOf(n.prototype),"connectedCallback",this)&&l(n.prototype.__proto__||Object.getPrototypeOf(n.prototype),"connectedCallback",this).call(this),this._appendStyles()}},{key:"_appendStyles",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this;if(this._styles){var t=document.createElement("style"),n=document.createTextNode(this._styles);t.appendChild(n),e.insertAdjacentElement?e.insertAdjacentElement("afterbegin",t):e.appendChild(t)}}}]),n}()})(function(e){function t(e){a(this,t);var n=d(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n._id=D(n.nodeName),n}return u(t,_e),c(t,null,[{key:"uuidv4",value:function(){return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,function(e){var t=16*Math.random()|0;return("x"==e?t:3&t|8).toString(16)})}}]),t}()),ge={},ke=function(e){function t(){var e,n,o;a(this,t);for(var r=arguments.length,i=Array(r),c=0;c<r;c++)i[c]=arguments[c];return n=o=d(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(i))),o._appendStyles=function(){t.appendGlobalStyles(o._styles,o.nodeName)},d(o,n)}return u(t,me),c(t,null,[{key:"appendGlobalStyles",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:me.uuidv4();if(e&&!ge[t]){var n=document.createElement("style"),o=document.createTextNode(e);ge[t]=!0,n.appendChild(o),n.setAttribute("data-c-name",t.toLowerCase()),document.head.appendChild(n)}}}]),t}();var xe='.a-checkbox:hover:not(.a-checkbox--disabled):not(.a-checkbox--error) {\n  color: #00008f; }\n  .a-checkbox:hover:not(.a-checkbox--disabled):not(.a-checkbox--error) .a-checkbox__icon {\n    border-color: #00008f; }\n    .a-checkbox:hover:not(.a-checkbox--disabled):not(.a-checkbox--error) .a-checkbox__icon::after {\n      border-color: #00008f; }\n\n.a-checkbox .a-checkbox__wrapper {\n  position: relative;\n  display: -webkit-inline-box;\n  display: -ms-inline-flexbox;\n  display: inline-flex;\n  min-height: 20px;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  line-height: 1.5; }\n\n.a-checkbox .a-checkbox__input {\n  position: absolute;\n  width: 1px;\n  height: 1px;\n  clip: rect(0, 0, 0, 0);\n  margin: -1px;\n  overflow: hidden; }\n  .a-checkbox .a-checkbox__input:focus + .a-checkbox__icon {\n    border-color: #00008f; }\n    .a-checkbox .a-checkbox__input:focus + .a-checkbox__icon::after {\n      border-color: #00008f; }\n  .a-checkbox .a-checkbox__input:checked + .a-checkbox__icon::after {\n    border-color: #00008f;\n    background-color: #00008f; }\n  .a-checkbox .a-checkbox__input:disabled + .a-checkbox__icon {\n    cursor: default;\n    border-color: #999; }\n    .a-checkbox .a-checkbox__input:disabled + .a-checkbox__icon::after {\n      border-color: transparent; }\n\n.a-checkbox .a-checkbox__icon {\n  -webkit-transition: all 0.2s ease;\n  transition: all 0.2s ease;\n  width: 18px;\n  height: 18px;\n  display: -webkit-inline-box;\n  display: -ms-inline-flexbox;\n  display: inline-flex;\n  margin-right: 20px;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  background: #fff;\n  border: 1px solid #999;\n  cursor: pointer;\n  border-radius: 0; }\n  .a-checkbox .a-checkbox__icon::after {\n    width: 8px;\n    height: 8px;\n    border: 1px solid transparent;\n    content: ""; }\n  .a-checkbox .a-checkbox__icon::after {\n    border-radius: 0; }\n\n.a-checkbox--error {\n  color: #c91432; }\n  .a-checkbox--error .a-checkbox__icon {\n    border-color: #c91432; }\n\n.a-checkbox--disabled {\n  color: #999; }\n',Oe=/\n[\s]+$/,Ce=/^\n[\s]+/,we=/[\s]+$/,Te=/^[\s]+/,Ae=/[\n\s]+/g,Ne=["a","abbr","b","bdi","bdo","br","cite","data","dfn","em","i","kbd","mark","q","rp","rt","rtc","ruby","s","amp","small","span","strong","sub","sup","time","u","var","wbr"],Ee=["code","pre","textarea"],je=function e(t,n){if(Array.isArray(n))for(var o,r,i=t.nodeName.toLowerCase(),a=!1,c=0,s=n.length;c<s;c++){var l=n[c];if(Array.isArray(l))e(t,l);else{("number"==typeof l||"boolean"==typeof l||"function"==typeof l||l instanceof Date||l instanceof RegExp)&&(l=l.toString());var u=t.childNodes[t.childNodes.length-1];if("string"==typeof l)a=!0,u&&"#text"===u.nodeName?u.nodeValue+=l:(l=document.createTextNode(l),t.appendChild(l),u=l),c===s-1&&(a=!1,-1===Ne.indexOf(i)&&-1===Ee.indexOf(i)?""===(o=u.nodeValue.replace(Ce,"").replace(we,"").replace(Oe,"").replace(Ae," "))?t.removeChild(u):u.nodeValue=o:-1===Ee.indexOf(i)&&(r=0===c?"":" ",o=u.nodeValue.replace(Ce,r).replace(Te," ").replace(we,"").replace(Oe,"").replace(Ae," "),u.nodeValue=o));else if(l&&l.nodeType){a&&(a=!1,-1===Ne.indexOf(i)&&-1===Ee.indexOf(i)?""===(o=u.nodeValue.replace(Ce,"").replace(Oe,"").replace(Ae," "))?t.removeChild(u):u.nodeValue=o:-1===Ee.indexOf(i)&&(o=u.nodeValue.replace(Te," ").replace(Ce,"").replace(Oe,"").replace(Ae," "),u.nodeValue=o));var p=l.nodeName;p&&(i=p.toLowerCase()),t.appendChild(l)}}}};function Pe(e,t){var n,o,r,i=e.inputId,a=void 0===i?me.uuidv4():i,c=e.value,s=e.name,l=e.checked,u=void 0!==l&&l,p=e.disabled,d=void 0!==p&&p;return(r=document.createElement("label")).setAttribute("class","a-checkbox__wrapper"),je(r,["\n    ",(n=document.createElement("input"),n.setAttribute("id",""+String(a)),n.setAttribute("type","checkbox"),n.setAttribute("name",""+String(s)),u&&n.setAttribute("checked","checked"),n.setAttribute("value",""+String(c)),d&&n.setAttribute("disabled","disabled"),n.setAttribute("class","a-checkbox__input"),n),"\n    ",(o=document.createElement("span"),o.setAttribute("class","a-checkbox__icon"),o),t,"\n  "]),r}var Se,Re,De=function(e){function t(){return a(this,t),d(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,{styles:xe,template:Pe}))}return u(t,ke),c(t,[{key:"willRenderCallback",value:function(){var e=this.error,t=this.checked,n=this.disabled;this.className=S(this.initialClassName,"a-checkbox",{"a-checkbox--error":e,"a-checkbox--checked":t,"a-checkbox--disabled":n})}}]),t}();return De.tagName="axa-checkbox",De.propTypes={inputId:_.string,error:_.bool,value:_.string,name:_.string,checked:_.bool,disabled:_.bool},Se=De.tagName,Re=De,customElements.get(Se)||customElements.define(Se,Re),De});
