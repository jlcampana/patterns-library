var StyleGuideWebComponent=function(e){"use strict";function t(e,t){return e(t={exports:{}},t.exports),t.exports}var n=Object.getOwnPropertySymbols,o=Object.prototype.hasOwnProperty,r=Object.prototype.propertyIsEnumerable;(function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},n=0;n<10;n++)t["_"+String.fromCharCode(n)]=n;if("0123456789"!==Object.getOwnPropertyNames(t).map(function(e){return t[e]}).join(""))return!1;var o={};return"abcdefghijklmnopqrst".split("").forEach(function(e){o[e]=e}),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},o)).join("")}catch(e){return!1}})()&&Object.assign;var i="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},s=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")},c=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},u=function e(t,n,o){null===t&&(t=Function.prototype);var r=Object.getOwnPropertyDescriptor(t,n);if(void 0===r){var i=Object.getPrototypeOf(t);return null===i?void 0:e(i,n,o)}if("value"in r)return r.value;var a=r.get;return void 0!==a?a.call(o):void 0},d=function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)},p=function(e,t){var n={};for(var o in e)t.indexOf(o)>=0||Object.prototype.hasOwnProperty.call(e,o)&&(n[o]=e[o]);return n},h=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t},f=function e(t,n,o,r){var i=Object.getOwnPropertyDescriptor(t,n);if(void 0===i){var a=Object.getPrototypeOf(t);null!==a&&e(a,n,o,r)}else if("value"in i&&i.writable)i.value=o;else{var s=i.set;void 0!==s&&s.call(r,o)}return o},v=function(){return function(e,t){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return function(e,t){var n=[],o=!0,r=!1,i=void 0;try{for(var a,s=e[Symbol.iterator]();!(o=(a=s.next()).done)&&(n.push(a.value),!t||n.length!==t);o=!0);}catch(e){r=!0,i=e}finally{try{!o&&s.return&&s.return()}finally{if(r)throw i}}return n}(e,t);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),y=function(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}return Array.from(e)};function _(){}var b=t(function(e){e.exports=function(){function e(e,t,n,o,r,a){if(a!==i){var s=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw s.name="Invariant Violation",s}}function t(){return e}e.isRequired=e;var n={array:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t};return n.checkPropTypes=_,n.PropTypes=n,n}()}),m=t(function(e){!function(){var t={}.hasOwnProperty;function n(){for(var e=[],o=0;o<arguments.length;o++){var r=arguments[o];if(r){var i=void 0===r?"undefined":a(r);if("string"===i||"number"===i)e.push(r);else if(Array.isArray(r))e.push(n.apply(null,r));else if("object"===i)for(var s in r)t.call(r,s)&&r[s]&&e.push(s)}}return e.join(" ")}e.exports?e.exports=n:window.classNames=n}()}),g={},k=function(e){return e in g||(g[e]=0),++g[e]},C=function(){try{var e=new window.CustomEvent("test",{cancelable:!0});if(e.preventDefault(),!0!==e.defaultPrevented)throw new Error("Could not prevent default");return window.CustomEvent}catch(e){}return t;function t(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=t.bubbles,o=void 0!==n&&n,r=t.cancelable,i=void 0!==r&&r,a=t.detail,s=void 0===a?void 0:a,c=document.createEvent("CustomEvent");c.initCustomEvent(e,o,i,s);var l=c.preventDefault;return c.preventDefault=function(){l.call(c);try{Object.defineProperty(this,"defaultPrevented",{get:function(){return!0}})}catch(e){this.defaultPrevented=!0}},c}}();function O(e,t,n){var o=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},r=new C(t,l({},o,{detail:n}));return e.dispatchEvent(r)}var x=function(){var e=!1;if("undefined"!=typeof window&&"function"==typeof window.addEventListener){var t=Object.defineProperty({},"passive",{get:function(){e=!0}}),n=function(){};window.addEventListener("testPassiveEventSupport",n,t),window.removeEventListener("testPassiveEventSupport",n,t)}return e}(),w=/^\s+|\s{2,}|\s+$/g;function T(e,t){return new RegExp("^"+e+"$|^"+e+"\\s|\\s"+e+"\\s|\\s"+e+"$",t)}function A(e){for(var t=arguments.length,n=Array(t>1?t-1:0),o=1;o<t;o++)n[o-1]=arguments[o];var r=E.apply(void 0,[e].concat(n));if(!0!==r){var i=[].concat(n);Array.isArray(r)&&(i=r.reduce(N,[])),i&&(e.className+=" "+i.join(" "))}}function N(e,t){var n=t.className;return t.hasClass||e.push(n),e}function E(e){for(var t=e.className,n=!1,o=!0,r=arguments.length,i=Array(r>1?r-1:0),a=1;a<r;a++)i[a-1]=arguments[a];var s=i.map(function(e){var r=T(e).test(t);r?n=!0:o=!1;return{className:e,hasClass:r}});return!(!o&&!n)&&s}function S(e){for(var t=arguments.length,n=Array(t>1?t-1:0),o=1;o<t;o++)n[o-1]=arguments[o];var r=E.apply(void 0,[e].concat(n));if(!1!==r){var i=[].concat(n);if(Array.isArray(r)&&(i=r.reduce(j,[])),i){var a=e.className;e.className=i.reduce(P,a)}}}function j(e,t){var n=t.className;return t.hasClass&&e.push(n),e}function P(e,t){var n=T(t,"g");return e.replace(n," ").replace(w," ")}var D=/\s+/,L={transitionend:function(){for(var e=document.createElement("div").style,t={transition:"transitionend",OTransition:"oTransitionEnd otransitionend",MozTransition:"transitionend",WebkitTransition:"webkitTransitionEnd"},n=Object.keys(t),o=n.length,r=void 0,i=0;i<o;++i)if(void 0!==e[r=n[i]])return t[r];return""}()};function R(e,t,n,o){var r=arguments.length>4&&void 0!==arguments[4]?arguments[4]:{},i=r.capture,s=void 0!==i&&i,c=r.passive,l=void 0===c||c;if(L[t]&&(t=L[t]),!e||!t)return null;var u=void 0===n?"undefined":a(n),d=n&&"string"===u;if("function"===u){if(o){var p=o;s=p.capture,l=p.passive}o=n}for(var h=x?{capture:s,passive:l}:s,f=d?function(t){var r=t.target;for(;!E(r,n)&&r!==e;)r=r.parentNode;if(r!==e)return o(t,r)}:o,v=t.split(D),y=v.length,_=0;_<y;++_)e.addEventListener(v[_],f,h);return function t(){for(var n=0;n<y;++n)e.removeEventListener(v[n],f,h);!function(e,t){if(!e)return!1;for(var n=Object.keys(e),o=n.length,r=0;r<o;++r){var i=n[r];if(e[i]===t)return delete e[i]}}(this,t)}}function I(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},o=n.leading,r=void 0!==o&&o,i=n.trailing,a=void 0===i||i,s=n.maxWait,c=void 0!==s&&s,l=void 0,u=void 0,d=void 0,p=void 0,h=!1,f=t!==c,v=!1!==c;function _(){for(var n=arguments.length,o=Array(n),i=0;i<n;i++)o[i]=arguments[i];return l=o,f&&(u&&clearTimeout(u),u=setTimeout(b,t)),v&&!d&&(d=setTimeout(m,c)),r&&!h&&(h=!0,p=e.apply(void 0,y(l))),p}return _.flush=function(){(u||d)&&(p=e.apply(void 0,y(l)));return k(),p},_.cancel=k,_;function b(){d&&clearTimeout(d),g()}function m(){u&&clearTimeout(u),g()}function g(){a&&(p=e.apply(void 0,y(l))),u=null,d=null,h=!1}function k(){u&&(clearTimeout(u),u=null),d&&(clearTimeout(d),d=null),l=void 0,h=!1}}window.__subscriptions=window.__subscriptions||{};var U=window.__subscriptions;function F(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:document;U[e]||(U[e]={count:0,queue:[]});var o=U[e].queue;Array.isArray(o)?o.push([e,t,n]):O(n,e,t)}function M(e,t){var n=R(arguments.length>2&&void 0!==arguments[2]?arguments[2]:document,e,t);U[e]||(U[e]={count:0});var o,r=U[e];return r.count++,r.onsubscribe||(r.onsubscribe=I((o=e,function(){O(document,"pubsub/onsubscribe",o),O(document,"pubsub/onsubscribe/"+o,o),U[o]&&delete U[o].unsubscribe}),100)),r.onsubscribe(),function(){r.count--,n.call(this),r.count<=0&&delete U[e]}}R(document,"pubsub/onsubscribe",function(e){var t=e.detail;U[t]||(U[t]={count:0});var n=U[t],o=n.queue;Array.isArray(o)&&(o.forEach(function(e){var t=v(e,3),n=t[0],o=t[1],r=t[2];O(r,n,o)}),delete n.queue)});var V,z=function(e,t){return e===t},q=((V=function(){var e;return(e=console).log.apply(e,arguments)},function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:z;return function(){for(var t=arguments.length,n=Array(t),o=0;o<t;o++)n[o]=arguments[o];return function(){for(var t=arguments.length,o=Array(t),r=0;r<t;r++)o[r]=arguments[r];return function(){return e.apply(void 0,[].concat(n,o))?V.apply(void 0,arguments):void 0}}}})()(!0),function(e){function t(e,n){var o;s(this,t);for(var r="\n    Native Property >>>"+e+"<<< exists already at "+n.nodeName+"#"+n._id+" and evaluates to -> "+n[e]+".\n    Please consult the HTML spec for inherited DOM properties:\n    - Element Interface https://developer.mozilla.org/en-US/docs/Web/API/Element#Properties\n    - Node Interface https://developer.mozilla.org/en-US/docs/Web/API/Node#Properties",i=arguments.length,a=Array(i>2?i-2:0),c=2;c<i;c++)a[c-2]=arguments[c];var l=h(this,(o=t.__proto__||Object.getPrototypeOf(t)).call.apply(o,[this,r].concat(a)));return Error.captureStackTrace&&Error.captureStackTrace(l,t),l.name="PropertyExistsException",l}return d(t,e),t}(Error)),B=/[A-Z]/g;function K(e){return e.replace(B,W)}function W(e,t,n){var o=e.toLowerCase(),r=n.charAt(t+1);return 0===t||r.toUpperCase()===r?o:"-"+o}var H=/^\s*(?:true|false|null|undefined|-?[0-9]+\.?[0-9]*|[[{](?:.|[\s])*[\]}])\s*$/;function Y(e,t){var n=e;if(e&&t!==e){if(H.test(e))try{n=JSON.parse(e)}catch(n){console.error("Attribute "+t+" has an error:\n"+n+"\n",e)}}else n=!0;return n}var $=/(?:^\w|[A-Z]|\b\w|\s+|[-_]+)/g,G=/[-_]+/g;function X(e){return e.replace($,Z)}function Z(e,t){return 0==+e||G.test(e)?"":0===t?e.toLowerCase():e.toUpperCase()}function J(e,t){if("function"==typeof e.hasAttribute&&!e.hasAttribute(t))return!1;var n=e.value;return t?n=e.getAttribute(t):t=e.name,n=Y(n,t)}function Q(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];for(var o=t.length,r={},i=0;i<o;++i){var a=t[i];r[a.toUpperCase()]=a}return r}var ee=/iPad|iPhone|iPod/.test(navigator.userAgent)&&!window.MSStream;function te(e,t,n){var o=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},r=o.capture,i=void 0===r||r,a=o.passive,s=void 0===a||a,c=e.ownerDocument.documentElement,l=R(c,t,function(t){var o=t.target;if(!e.contains(o)&&e!==o)return n(t)},{capture:i,passive:s});return ee&&(c.style.cursor="pointer"),l}var ne=Q("click","change","keyup","enter","move","leave","Escape","Esc","touchstart","touchmove","touchend","input","resize"),oe="axa-change",re="data-prevent-default";((function(){function e(t){var n=this,o=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};s(this,e),this._handleClick=function(e,t){n.shouldPreventDefault(t||e.currentTarget)&&e.preventDefault();var o=!n._lastToggleNode,r=t!==n._lastToggleNode,i=!o&&!r;o?(n._notify(ne.ENTER,t),n._onInteractive()):r&&n._notify(ne.MOVE,t,n._lastToggleNode),n._lastToggleNode=t,i&&n._options.sameClickClose&&n._close()},this._handleClose=function(e,t){n.shouldPreventDefault(t||e.currentTarget)&&e.preventDefault(),n._close()},this._handleKeyUp=function(e){(e.key===ne.ESCAPE||e.key===ne.ESC||27===e.keyCode)&&(e.preventDefault(),n._close())},this._init(t,o)}return c(e,[{key:"_init",value:function(t,n){t&&(this._wcNode=t),n&&(this._options=l({},e.DEFAULTS,n));var o=this._options.containerClass;this._container=o?this._wcNode.querySelector(o):this._wcNode,this._on()}},{key:"_on",value:function(){this._off(),this._unClick=R(this._container,ne.CLICK,this._options.toggleClass,this._handleClick,{passive:!this._options.preventDefault})}},{key:"_off",value:function(){this._unClick&&this._unClick(),this._offInteractive()}},{key:"_onInteractive",value:function(){this._offInteractive(),this._options.closeClass&&(this._unCloseClick=R(this._container,ne.CLICK,this._options.closeClass,this._handleClose,{passive:!this._options.preventDefault})),this._options.outerClose&&(this._unOuterClick=te(this._container,ne.CLICK,this._handleClose,{passive:!this._options.preventDefault})),this._options.escapeClose&&(this._unCloseEscape=R(this._container.ownerDocument,ne.KEYUP,this._handleKeyUp,{passive:!1}))}},{key:"shouldPreventDefault",value:function(e){return e.hasAttribute(re)?J(e,re):this._options.preventDefault}},{key:"_offInteractive",value:function(){this._unOuterClick&&this._unOuterClick(),this._unCloseClick&&this._unCloseClick(),this._unCloseEscape&&this._unCloseEscape(),this.deleteLastToggleNode()}},{key:"_close",value:function(){this._lastToggleNode&&(this._notify(ne.LEAVE,this._lastToggleNode),this._offInteractive(),this.deleteLastToggleNode())}},{key:"_notify",value:function(e,t,n){e in this&&"function"==typeof this[e]&&this[e](t,n)}},{key:"enter",value:function(e){throw new Error("UiEvent.enter method not overwritten")}},{key:"move",value:function(e,t){}},{key:"leave",value:function(e){throw new Error("UiEvent.leave method not overwritten")}},{key:"destroy",value:function(){this._off(),delete this._wcNode,delete this._options}},{key:"deleteLastToggleNode",value:function(){delete this._lastToggleNode}},{key:"lastToggleNode",get:function(){return this._lastToggleNode}}]),e})()).DEFAULTS={containerClass:".js-ui-container",toggleClass:"js-ui-toggle",closeClass:"js-ui-close",escapeClose:!0,outerClose:!0,sameClickClose:!0,preventDefault:!0};var ie=["title","checked","disabled"],ae=[];var se=1,ce=3,le=8;function ue(e,t){var n=e.nodeType,o=e.nodeName;n===se&&function(e,t){for(var n=t.skipChildren&&t.skipChildren(),o=t.constructor.observedAttributes,r=o&&Array.isArray(o)&&o.length,i=function(e){return n&&r&&-1===o.indexOf(e)},a=t.attributes,s=e.attributes,c=null,l=null,u=null,d=null,p=s.length-1;p>=0;--p)if(d=s[p],u=d.name,c=d.namespaceURI,l=d.value,!i(u))if(c){var h=d.localName;t.getAttributeNS(c,h||u)!==l&&t.setAttributeNS(c,u,l)}else t.hasAttribute(u)?t.getAttribute(u)!==l&&("null"===l||"undefined"===l?t.removeAttribute(u):t.setAttribute(u,l)):t.setAttribute(u,l);for(var f=a.length-1;f>=0;--f)if(!1!==(d=a[f]).specified){if(u=d.name,c=d.namespaceURI,i(u))continue;c?(u=d.localName||u,e.hasAttributeNS(c,u)||t.removeAttributeNS(c,u)):e.hasAttributeNS(null,u)||t.removeAttribute(u)}}(e,t),n!==ce&&n!==le||t.nodeValue===e.nodeValue||(t.nodeValue=e.nodeValue),"INPUT"===o?function(e,t){var n=e.value,o=t.value;de(e,t,"checked"),de(e,t,"disabled"),n!==o&&(t.setAttribute("value",n),t.value=n);"null"===n&&(t.value="",t.removeAttribute("value"));e.hasAttributeNS(null,"value")?"range"===t.type&&(t.value=n):t.removeAttribute("value")}(e,t):"OPTION"===o?de(e,t,"selected"):"TEXTAREA"===o&&function(e,t){var n=e.value;n!==t.value&&(t.value=n);if(t.firstChild&&t.firstChild.nodeValue!==n){if(""===n&&t.firstChild.nodeValue===t.placeholder)return;t.firstChild.nodeValue=n}}(e,t)}function de(e,t,n){e[n]!==t[n]&&(t[n]=e[n],e[n]?t.setAttribute(n,""):t.removeAttribute(n))}var pe=3;function he(e,t){return t?e?e.isSameNode&&e.isSameNode(t)?t:e.tagName!==t.tagName?e:(ue(e,t),t.skipChildren&&t.skipChildren()||function(e,t){for(var n=void 0,o=void 0,r=void 0,i=void 0,a=0,s=0;n=t.childNodes[s],o=e.childNodes[s-a],n||o;s++)if(o)if(n)if(fe(o,n))(r=he(o,n))!==n&&(t.replaceChild(r,n),a++);else{i=null;for(var c=s;c<t.childNodes.length;c++)if(fe(t.childNodes[c],o)){i=t.childNodes[c];break}i?((r=he(o,i))!==i&&a++,t.insertBefore(r,n)):o.id||n.id?(t.insertBefore(o,n),a++):(r=he(o,n))!==n&&(t.replaceChild(r,n),a++)}else t.appendChild(o),a++;else t.removeChild(n),s--}(e,t),t):null:e}function fe(e,t){return e.id?e.id===t.id:e.isSameNode?e.isSameNode(t):e.tagName===t.tagName&&(e.type===pe&&e.nodeValue===t.nodeValue)}var ve=function(e){function t(e){var n;s(this,t);for(var o="\n    Web Component "+e.nodeName+"%c#"+e._id+" does not accept string as a return from a template. Maybe use bel?}",r=arguments.length,i=Array(r>1?r-1:0),a=1;a<r;a++)i[a-1]=arguments[a];var c=h(this,(n=t.__proto__||Object.getPrototypeOf(t)).call.apply(n,[this,o].concat(i)));return Error.captureStackTrace&&Error.captureStackTrace(c,t),c.name="TemplateNoStringReturnException",c}return d(t,e),t}(Error),ye=!!document.createDocumentFragment().children;function _e(){return Reflect.construct(HTMLElement,[],this.__proto__.constructor)}Object.setPrototypeOf(_e.prototype,HTMLElement.prototype),Object.setPrototypeOf(_e,HTMLElement);var be=function(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];return function(e){return t.reduceRight(function(e,t){return t(e)},e)}}(function(e){return function(t){function n(){var e,t,o;s(this,n);for(var r=arguments.length,i=Array(r),a=0;a<r;a++)i[a]=arguments[a];return t=o=h(this,(e=n.__proto__||Object.getPrototypeOf(n)).call.apply(e,[this].concat(i))),o._makeContextReady=function(){var e=(arguments.length>0&&void 0!==arguments[0]?arguments[0]:{}).detail;o.contextNode&&(clearTimeout(o.timeoutId),o.timeoutId=setTimeout(function(){o.contextCallback(o.contextNode,e)},10)),o.unContextEnabled&&o.unContextEnabled(),o.unContextEnabled=M("context/available",o._makeContextReady)},h(o,t)}return d(n,e),c(n,[{key:"connectedCallback",value:function(){u(n.prototype.__proto__||Object.getPrototypeOf(n.prototype),"connectedCallback",this)&&u(n.prototype.__proto__||Object.getPrototypeOf(n.prototype),"connectedCallback",this).call(this),this.contextCallback&&this._makeContextReady()}},{key:"disconnectedCallback",value:function(){u(n.prototype.__proto__||Object.getPrototypeOf(n.prototype),"disconnectedCallback",this)&&u(n.prototype.__proto__||Object.getPrototypeOf(n.prototype),"disconnectedCallback",this).call(this),this.unContextEnabled&&this.unContextEnabled()}},{key:"provideContext",value:function(){var e=this.nodeName.toLowerCase();this.__isContext=!0,this.__contextName=e,F("context/available",e)}},{key:"consumeContext",value:function(e){this.__consumedContext=e&&e.toLowerCase()}},{key:"contextNode",get:function(){for(var e=this.__consumedContext,t=this.parentNode;t&&(!t.__isContext||e&&e!==t.__contextName);)t=t.parentNode;return!(!t||!t.__isContext)&&t}}]),n}()},function(e){return function(t){function n(){return s(this,n),h(this,(n.__proto__||Object.getPrototypeOf(n)).apply(this,arguments))}return d(n,e),c(n,[{key:"appendChild",value:function(e){!this._isMorphing&&this._hasTemplate&&this._hasRendered?(this._lightDOMRefs.push(e),this.render()):u(n.prototype.__proto__||Object.getPrototypeOf(n.prototype),"appendChild",this).call(this,e)}},{key:"innerText",set:function(e){if(this._hasTemplate&&this._hasRendered){var t=document.createTextNode(e);this._lightDOMRefs=[t],this.render()}else f(n.prototype.__proto__||Object.getPrototypeOf(n.prototype),"innerText",e,this)}},{key:"textContent",set:function(e){if(this._hasTemplate&&this._hasRendered){var t=document.createTextNode(e);this._lightDOMRefs=[t],this.render()}else f(n.prototype.__proto__||Object.getPrototypeOf(n.prototype),"textContent",e,this)}},{key:"innerHTML",set:function(e){if(this._hasTemplate&&this._hasRendered){var t=document.createElement("div");t.innerHTML=e,this._lightDOMRefs=Array.from(t.children),this.render()}else f(n.prototype.__proto__||Object.getPrototypeOf(n.prototype),"innerHTML",e,this)}}]),n}()},function(e){return function(t){function n(e){s(this,n);var t=h(this,(n.__proto__||Object.getPrototypeOf(n)).call(this,e));t._reduceProps=function(e,o){var r=e.props,i=e.shouldUpdate,a=t._hasKeys[o];if(-1===ie.indexOf(o)&&a)throw new q(o,t);var s="_"+o,c=r[o],l=t[s];return i||t.shouldUpdateCallback(c,l)?(t[s]=c,t._props[o]=c,a&&f(n.prototype.__proto__||Object.getPrototypeOf(n.prototype),o,c,t),{props:r,shouldUpdate:!0}):{props:r,shouldUpdate:!1}},t._isConnected=!1,t._props={},t._hasKeys={},t.updatedDebounced=I(function(){return t.updated&&t.updated()},50);var o=t.constructor.observedAttributes;return Array.isArray(o)&&o.forEach(function(e){var n,o=X(e),r=o in t;if(-1===ie.indexOf(o)&&r)throw new q(o,t);t._hasKeys[o]=r,Object.defineProperty(t,o,n={get:function(){return this._props[o]},set:function(e){this.shouldUpdateCallback(this._props[o],e)&&(this._props[o]=e,r&&f(n.__proto__||Object.getPrototypeOf(n),o,e,this),this._isConnected&&this.updatedDebounced())}})}),t}return d(n,e),c(n,null,[{key:"observedAttributes",get:function(){var e=this.propTypes;return e&&Object.keys(e).map(K)}}]),c(n,[{key:"connectedCallback",value:function(){var e=this;if(u(n.prototype.__proto__||Object.getPrototypeOf(n.prototype),"connectedCallback",this)&&u(n.prototype.__proto__||Object.getPrototypeOf(n.prototype),"connectedCallback",this).call(this),!this._isConnected){this._isConnected=!0;var t=this.constructor.observedAttributes;this.initialClassName=this.className,Array.isArray(t)&&(t.forEach(function(t){var o=X(t);if(e.hasAttribute(t)){var r=J(e,t),i=e._hasKeys[o];e._props[o]=r,i&&f(n.prototype.__proto__||Object.getPrototypeOf(n.prototype),o,r,e)}}),this.checkPropTypes())}this.updated&&this.updated()}},{key:"attributeChangedCallback",value:function(e,t,n){if(this.shouldUpdateCallback(n,t)){var o=X(e);this.hasAttribute(e)?this[o]=Y(n,e):this[o]=null,this.checkPropTypes(),"value"===e&&null!==n&&O(this,oe,n,{bubbles:!0,cancelable:!0,composed:!0})}}},{key:"setProps",value:function(e){var t=this.constructor.observedAttributes,n=void 0===t?[]:t,o=Object.keys(e).filter(function(e){return n.indexOf(K(e))>-1}).reduce(this._reduceProps,{props:e,shouldUpdate:!1}).shouldUpdate;this.checkPropTypes(),o&&this._isConnected&&this.updated&&this.updated()}},{key:"checkPropTypes",value:function(){var e=this.constructor,t=e.propTypes,n=e.tagName;t&&b.checkPropTypes(t,this._props,"prop",n)}},{key:"shouldUpdateCallback",value:function(e,t){return e!==t}},{key:"disconnectedCallback",value:function(){this._isConnected=!1}}]),n}()},function(e){return function(t){function n(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.template,o=p(e,["template"]);s(this,n);var r=h(this,(n.__proto__||Object.getPrototypeOf(n)).call(this,o));return r._template=t,r._hasTemplate=!!t,r._hasRendered=!1,r.updated=r.render,r}return d(n,e),c(n,[{key:"render",value:function(){var e=this,t=!this._hasRendered;if(this.willRenderCallback(t),this._hasTemplate){var o=this._template;try{if(t){for(var r=document.createDocumentFragment(),i=[];this.firstChild;)i.push(this.firstChild),r.appendChild(this.firstChild);this._lightDOMRefs=i,this.childrenFragment=r}else this._lightDOMRefs.forEach(function(t){var n=t.cloneNode(!0);e.childrenFragment.appendChild(n)});ye||(this.childrenFragment.children=Array.from(this.childrenFragment.childNodes).filter(function(e){return 1===e.nodeType}));var s=o(this._props,this.childrenFragment,this),c=document.createDocumentFragment();if(Array.isArray(s))s.forEach(function(e){c.appendChild(e)});else if(s){if("string"==typeof s)throw new ve(this);c.appendChild(s)}if(t)u(n.prototype.__proto__||Object.getPrototypeOf(n.prototype),"appendChild",this).call(this,c);else{var l=this.cloneNode(!1);l._isMorphing=!0,l.appendChild(c),this._isMorphing=!0,function(e,t){if("object"!==(void 0===e?"undefined":a(e)))throw new Error("componentMorph: oldTree should be an object");if("object"!==(void 0===t?"undefined":a(t)))throw new Error("componentMorph: newTree should be an object");he(t,e)}(this,l),function(){for(var e=void 0;e=ae.pop();)delete e.isSameNode;ae=[]}(),this._isMorphing=!1}}catch(e){console.error(e)}}this._hasRendered=!0,this.didRenderCallback(t)}},{key:"skipChildren",value:function(){return!this._isMorphing}},{key:"willRenderCallback",value:function(e){}},{key:"didRenderCallback",value:function(e){}}]),n}()},function(e){return function(t){function n(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.styles,o=void 0===t?"":t,r=p(e,["styles"]);s(this,n);var i=h(this,(n.__proto__||Object.getPrototypeOf(n)).call(this,r));return i._styles=o,i}return d(n,e),c(n,[{key:"connectedCallback",value:function(){u(n.prototype.__proto__||Object.getPrototypeOf(n.prototype),"connectedCallback",this)&&u(n.prototype.__proto__||Object.getPrototypeOf(n.prototype),"connectedCallback",this).call(this),this._appendStyles()}},{key:"_appendStyles",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this;if(this._styles){var t=document.createElement("style"),n=document.createTextNode(this._styles);t.appendChild(n),e.insertAdjacentElement?e.insertAdjacentElement("afterbegin",t):e.appendChild(t)}}}]),n}()})(function(e){function t(e){s(this,t);var n=h(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n._id=k(n.nodeName),n}return d(t,_e),c(t,null,[{key:"uuidv4",value:function(){return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,function(e){var t=16*Math.random()|0;return("x"==e?t:3&t|8).toString(16)})}}]),t}()),me={},ge=function(e){function t(){var e,n,o;s(this,t);for(var r=arguments.length,i=Array(r),a=0;a<r;a++)i[a]=arguments[a];return n=o=h(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(i))),o._appendStyles=function(){t.appendGlobalStyles(o._styles,o.nodeName)},h(o,n)}return d(t,be),c(t,null,[{key:"appendGlobalStyles",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:be.uuidv4();if(e&&!me[t]){var n=document.createElement("style"),o=document.createTextNode(e);me[t]=!0,n.appendChild(o),n.setAttribute("data-c-name",t.toLowerCase()),document.head.appendChild(n)}}}]),t}();var ke=".m-sticky {\n  display: block; }\n\n.m-sticky__placeholder {\n  display: block;\n  height: 0; }\n\n.m-sticky__box {\n  display: block; }\n  .is-sticky-sticky > .m-sticky__box {\n    position: fixed;\n    top: 0;\n    z-index: 1020; }\n  .is-sticky-bottom > .m-sticky__box {\n    position: absolute;\n    bottom: 0;\n    z-index: 1020; }\n  .is-sticky-in-flow > .m-sticky__box {\n    position: static; }\n\n.m-sticky--debug > .m-sticky__box {\n  background: rgba(0, 0, 255, 0.5);\n  color: #fff; }\n  .m-sticky--debug > .m-sticky__box::before, .m-sticky--debug > .m-sticky__box::after {\n    content: '';\n    color: yellow; }\n\n.m-sticky--debug.is-sticky-sticky > .m-sticky__box {\n  background: rgba(255, 0, 0, 0.7); }\n  .m-sticky--debug.is-sticky-sticky > .m-sticky__box::before {\n    content: 'is-sticky'; }\n\n.m-sticky--debug.is-sticky-bottom > .m-sticky__box {\n  background: rgba(255, 165, 0, 0.7); }\n  .m-sticky--debug.is-sticky-bottom > .m-sticky__box::before {\n    content: 'is-bottom'; }\n\n.m-sticky--debug.is-sticky-in-flow > .m-sticky__box::before {\n  content: 'is-in-flow'; }\n\n.m-sticky--debug.is-sticky-scroll-up > .m-sticky__box::after {\n  content: 'is-scroll-up'; }\n\n.m-sticky--debug.is-sticky-scroll-down > .m-sticky__box::after {\n  content: 'is-scroll-down'; }\n",Ce=/\n[\s]+$/,Oe=/^\n[\s]+/,xe=/[\s]+$/,we=/^[\s]+/,Te=/[\n\s]+/g,Ae=["a","abbr","b","bdi","bdo","br","cite","data","dfn","em","i","kbd","mark","q","rp","rt","rtc","ruby","s","amp","small","span","strong","sub","sup","time","u","var","wbr"],Ne=["code","pre","textarea"],Ee=function e(t,n){if(Array.isArray(n))for(var o,r,i=t.nodeName.toLowerCase(),a=!1,s=0,c=n.length;s<c;s++){var l=n[s];if(Array.isArray(l))e(t,l);else{("number"==typeof l||"boolean"==typeof l||"function"==typeof l||l instanceof Date||l instanceof RegExp)&&(l=l.toString());var u=t.childNodes[t.childNodes.length-1];if("string"==typeof l)a=!0,u&&"#text"===u.nodeName?u.nodeValue+=l:(l=document.createTextNode(l),t.appendChild(l),u=l),s===c-1&&(a=!1,-1===Ae.indexOf(i)&&-1===Ne.indexOf(i)?""===(o=u.nodeValue.replace(Oe,"").replace(xe,"").replace(Ce,"").replace(Te," "))?t.removeChild(u):u.nodeValue=o:-1===Ne.indexOf(i)&&(r=0===s?"":" ",o=u.nodeValue.replace(Oe,r).replace(we," ").replace(xe,"").replace(Ce,"").replace(Te," "),u.nodeValue=o));else if(l&&l.nodeType){a&&(a=!1,-1===Ae.indexOf(i)&&-1===Ne.indexOf(i)?""===(o=u.nodeValue.replace(Oe,"").replace(Ce,"").replace(Te," "))?t.removeChild(u):u.nodeValue=o:-1===Ne.indexOf(i)&&(o=u.nodeValue.replace(we," ").replace(Oe,"").replace(Ce,"").replace(Te," "),u.nodeValue=o));var d=l.nodeName;d&&(i=d.toLowerCase()),t.appendChild(l)}}}};function Se(e,t){var n,o;return[(n=document.createElement("div"),n.setAttribute("class","m-sticky__placeholder js-sticky__placeholder"),n),(o=document.createElement("div"),o.setAttribute("class","m-sticky__box js-sticky__box"),Ee(o,[t]),o)]}var je="pageYOffset"in window?function(){return window.pageYOffset}:function(){var e=document,t=e.body;return e.documentElement.scrollTop||t.scrollTop||0};var Pe,De=function(){if(!window.getComputedStyle)return null;var e=window.getComputedStyle(document.documentElement,""),t=(Array.prototype.slice.call(e).join("").match(/-(moz|webkit|ms)-/)||""===e.OLink&&["","o"])[1];return{dom:"WebKit|Moz|MS|O".match(new RegExp("("+t+")","i"))[1],lowercase:t,css:"-"+t+"-",js:t[0].toUpperCase()+t.slice(1)}}().lowercase,Le=function(){var e=window.requestAnimationFrame||window[De+"RequestAnimationFrame"];if(e)e=e.bind(window);else{var t=0;e=function(e){var n=Date.now(),o=Math.max(0,16-(n-t)),r=setTimeout(function(){e(n+o)},o);return t=n+o,r}}return e}(),Re=(Pe=(Pe=window.cancelAnimationFrame||window[De+"CancelAnimationFrame"]||window[De+"CancelRequestAnimationFrame"])?Pe.bind(window):function(e){clearTimeout(e)},void 0),Ie=0,Ue=["resize","orientationchange"].join(" "),Fe=[Ue,"scroll","touchstart","touchmove","touchend","pageshow","load"].join(" "),Me=function(){function e(){var t=this;s(this,e),this._change=function(){var e=(arguments.length>0&&void 0!==arguments[0]?arguments[0]:{}).type;Ue.indexOf(e)>=0&&(t.forceRepaint=!0),t.framePending||Le(function(){for(var e=t.containerNodes,n=t.forceRepaint,o=t.lastScrollTop,r=t.isDirectionFrozen,i=t.lastDirection,a=je(),s=a-o,c=r?i:s>0?1:s<0?-1:i,l=0,u=e.length;l<u;l++){var d=e[l],p=d.getBoundingClientRect(),h=p.top,f=p.bottom;F("sticky-container/"+(h<=0&&f>=0?"active":"idle"),{containerTop:h,containerBottom:f,direction:c,forceRepaint:n},d)}t.lastScrollTop=a,t.lastDirection=c,t.framePending=!1,t.forceRepaint=!1})},this._freezeDirection=function(){t.isDirectionFrozen=!0,t.lastDirection=-1},this._thawDirection=function(){t.isDirectionFrozen=!1},this.forceRepaint=!1,this.framePending=!1,this.lastScrollTop=0,this.isDirectionFrozen=!1,this.containerNodes=[],this._on()}return c(e,[{key:"addContainer",value:function(e){this.containerNodes.push(e),this._change()}},{key:"_on",value:function(){this._off(),this._unChange=R(window,Fe,this._change),this._unFreezeDirection=M("sticky-container/freeze-direction",this._freezeDirection),this._unThawDirection=M("sticky-container/thaw-direction",this._thawDirection)}},{key:"_off",value:function(){this._unChange&&this._unChange(),this._unFreezeDirection&&this._unFreezeDirection(),this._unThawDirection&&this._unThawDirection()}},{key:"remove",value:function(e){var t,n,o;e&&(t=this.containerNodes,n=e,(o=t.indexOf(n))>-1&&t.splice(o,1)),--Ie<=0&&Re&&(this._off(),delete this.containerNodes,Re=null)}}]),e}();function Ve(e,t){for(var n=[],o=Object.keys(t),r=o.length,i=0;i<r;++i){var a=o[i];n.push(a+":"+t[a]+";")}e.style.cssText=n.join("")}var ze=Q("IS_IN_FLOW","IS_STICKY","IS_BOTTOM"),qe=function(){function e(t){s(this,e),We.call(this),this.wcNode=t,this.state=ze.IS_IN_FLOW,this.lastDirection=0,this.placeholder=t.querySelector(e.DEFAULTS.placeholderClass),this.box=t.querySelector(e.DEFAULTS.boxClass),this.spy=(Re||(Re=new Me),Ie++,Re)}return c(e,[{key:"_on",value:function(){this._off(),this._unActive=M("sticky-container/active",this._update,this._contextNode),this._unIdle=M("sticky-container/idle",this._update,this._contextNode)}},{key:"_off",value:function(){this._unActive&&this._unActive(),this._unIdle&&this._unIdle()}},{key:"destroy",value:function(){this._off(),this.spy.remove(),delete this.spy,delete this.roodNode,delete this.placeholder,delete this.box,delete this._contextNode}},{key:"contextNode",set:function(e){this._contextNode=e,this._on()}}]),e}();qe.DEFAULTS={placeholderClass:".js-sticky__placeholder",boxClass:".js-sticky__box",isStickyClass:"is-sticky-sticky",isBottomClass:"is-sticky-bottom",isScrollUp:"is-sticky-scroll-up",isScrollDown:"is-sticky-scroll-down"};var Be,Ke,We=function(){var e=this;this._update=function(t){var n=t.detail,o=n.containerBottom,r=n.direction,i=n.forceRepaint,a=e.wcNode,s=e.state,c=r!==e.lastDirection,l=a.offsetHeight,u=a.offsetWidth,d=a.getBoundingClientRect(),p=d.left,h=d.top,f=h>0,v=h<=0&&o>=l,y=h<=0&&o<l;c&&1===r?(A(a,qe.DEFAULTS.isScrollDown),S(a,qe.DEFAULTS.isScrollUp)):c&&-1===r&&(A(a,qe.DEFAULTS.isScrollUp),S(a,qe.DEFAULTS.isScrollDown)),v&&(i||s!==ze.IS_STICKY)&&(e.state=ze.IS_STICKY,A(a,qe.DEFAULTS.isStickyClass),S(a,qe.DEFAULTS.isBottomClass),Ve(e.placeholder,{height:l+"px"}),Ve(e.box,{left:p+"px",width:u+"px"})),y&&(i||s!==ze.IS_BOTTOM)&&(e.state=ze.IS_BOTTOM,S(a,qe.DEFAULTS.isStickyClass),A(a,qe.DEFAULTS.isBottomClass),Ve(e.placeholder,{height:l+"px"}),Ve(e.box,{left:p+"px",width:u+"px"})),f&&(i||s!==ze.IS_IN_FLOW)&&(e.state=ze.IS_IN_FLOW,S(a,qe.DEFAULTS.isStickyClass),S(a,qe.DEFAULTS.isBottomClass),Ve(e.placeholder,{height:""}),Ve(e.box,{left:"",width:""}))}},He=function(e){function t(){s(this,t);var e=h(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,{styles:ke,template:Se}));return e.consumeContext("axa-sticky-container"),e}return d(t,ge),c(t,[{key:"willRenderCallback",value:function(){var e=this.debug;this.className=m(this.initialClassName,"m-sticky js-sticky",{"m-sticky--debug":e})}},{key:"didRenderCallback",value:function(){this.sticky&&this.sticky.destroy(),this.sticky=new qe(this);var e=this.contextNode;e&&this.contextCallback(e)}},{key:"contextCallback",value:function(e){this.sticky&&(this.sticky.contextNode=e)}},{key:"disconnectedCallback",value:function(){this.sticky&&(this.sticky.destroy(),delete this.sticky)}}]),t}();return He.tagName="axa-sticky",He.propTypes={debug:b.bool},Be=He.tagName,Ke=He,customElements.get(Be)||customElements.define(Be,Ke),e.AXASticky=He,e.default=He,e}({});