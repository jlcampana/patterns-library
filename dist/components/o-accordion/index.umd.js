!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):e.StyleGuideWebComponent=t()}(this,function(){"use strict";var e={},t=function(t){return t in e||(e[t]=0),++e[t]},n=function(){try{var e=new window.CustomEvent("test",{cancelable:!0});if(e.preventDefault(),!0!==e.defaultPrevented)throw new Error("Could not prevent default");return window.CustomEvent}catch(e){}return t;function t(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=t.bubbles,o=void 0!==n&&n,r=t.cancelable,i=void 0!==r&&r,a=t.detail,s=void 0===a?void 0:a,l=document.createEvent("CustomEvent");l.initCustomEvent(e,o,i,s);var c=l.preventDefault;return l.preventDefault=function(){c.call(l);try{Object.defineProperty(this,"defaultPrevented",{get:function(){return!0}})}catch(e){this.defaultPrevented=!0}},l}}(),o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},r=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")},i=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},s=function e(t,n,o){null===t&&(t=Function.prototype);var r=Object.getOwnPropertyDescriptor(t,n);if(void 0===r){var i=Object.getPrototypeOf(t);return null===i?void 0:e(i,n,o)}if("value"in r)return r.value;var a=r.get;return void 0!==a?a.call(o):void 0},l=function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)},c=function(e,t){var n={};for(var o in e)t.indexOf(o)>=0||Object.prototype.hasOwnProperty.call(e,o)&&(n[o]=e[o]);return n},u=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t},d=function e(t,n,o,r){var i=Object.getOwnPropertyDescriptor(t,n);if(void 0===i){var a=Object.getPrototypeOf(t);null!==a&&e(a,n,o,r)}else if("value"in i&&i.writable)i.value=o;else{var s=i.set;void 0!==s&&s.call(r,o)}return o},p=function(){return function(e,t){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return function(e,t){var n=[],o=!0,r=!1,i=void 0;try{for(var a,s=e[Symbol.iterator]();!(o=(a=s.next()).done)&&(n.push(a.value),!t||n.length!==t);o=!0);}catch(e){r=!0,i=e}finally{try{!o&&s.return&&s.return()}finally{if(r)throw i}}return n}(e,t);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),f=function(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}return Array.from(e)};function h(e,t,o){var r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},i=new n(t,a({},r,{detail:o}));return e.dispatchEvent(i)}var v=function(){var e=!1;if("undefined"!=typeof window&&"function"==typeof window.addEventListener){var t=Object.defineProperty({},"passive",{get:function(){e=!0}}),n=function(){};window.addEventListener("testPassiveEventSupport",n,t),window.removeEventListener("testPassiveEventSupport",n,t)}return e}();function _(e){for(var t=e.className,n=!1,o=!0,r=arguments.length,i=Array(r>1?r-1:0),a=1;a<r;a++)i[a-1]=arguments[a];var s=i.map(function(e){var r=(i=e,new RegExp("^"+i+"$|^"+i+"\\s|\\s"+i+"\\s|\\s"+i+"$",a)).test(t);var i,a;r?n=!0:o=!1;return{className:e,hasClass:r}});return!(!o&&!n)&&s}var y=/\s+/,b={transitionend:function(){for(var e=document.createElement("div").style,t={transition:"transitionend",OTransition:"oTransitionEnd otransitionend",MozTransition:"transitionend",WebkitTransition:"webkitTransitionEnd"},n=Object.keys(t),o=n.length,r=void 0,i=0;i<o;++i)if(void 0!==e[r=n[i]])return t[r];return""}()};function m(e,t,n,r){var i=arguments.length>4&&void 0!==arguments[4]?arguments[4]:{},a=i.capture,s=void 0!==a&&a,l=i.passive,c=void 0===l||l;if(b[t]&&(t=b[t]),!e||!t)return null;var u=void 0===n?"undefined":o(n),d=n&&"string"===u;if("function"===u){if(r){var p=r;s=p.capture,c=p.passive}r=n}for(var f=v?{capture:s,passive:c}:s,h=d?function(t){var o=t.target;for(;!_(o,n)&&o!==e;)o=o.parentNode;if(o!==e)return r(t,o)}:r,m=t.split(y),g=m.length,C=0;C<g;++C)e.addEventListener(m[C],h,f);return function t(){for(var n=0;n<g;++n)e.removeEventListener(m[n],h,f);!function(e,t){if(!e)return!1;for(var n=Object.keys(e),o=n.length,r=0;r<o;++r){var i=n[r];if(e[i]===t)return delete e[i]}}(this,t)}}function g(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},o=n.leading,r=void 0!==o&&o,i=n.trailing,a=void 0===i||i,s=n.maxWait,l=void 0!==s&&s,c=void 0,u=void 0,d=void 0,p=void 0,h=!1,v=t!==l,_=!1!==l;function y(){for(var n=arguments.length,o=Array(n),i=0;i<n;i++)o[i]=arguments[i];return c=o,v&&(u&&clearTimeout(u),u=setTimeout(b,t)),_&&!d&&(d=setTimeout(m,l)),r&&!h&&(h=!0,p=e.apply(void 0,f(c))),p}return y.flush=function(){(u||d)&&(p=e.apply(void 0,f(c)));return C(),p},y.cancel=C,y;function b(){d&&clearTimeout(d),g()}function m(){u&&clearTimeout(u),g()}function g(){a&&(p=e.apply(void 0,f(c))),u=null,d=null,h=!1}function C(){u&&(clearTimeout(u),u=null),d&&(clearTimeout(d),d=null),c=void 0,h=!1}}window.__subscriptions=window.__subscriptions||{};var C=window.__subscriptions;function O(e,t){var n=m(arguments.length>2&&void 0!==arguments[2]?arguments[2]:document,e,t);C[e]||(C[e]={count:0});var o,r=C[e];return r.count++,r.onsubscribe||(r.onsubscribe=g((o=e,function(){h(document,"pubsub/onsubscribe",o),h(document,"pubsub/onsubscribe/"+o,o),C[o]&&delete C[o].unsubscribe}),100)),r.onsubscribe(),function(){r.count--,n.call(this),r.count<=0&&delete C[e]}}m(document,"pubsub/onsubscribe",function(e){var t=e.detail;C[t]||(C[t]={count:0});var n=C[t],o=n.queue;Array.isArray(o)&&(o.forEach(function(e){var t=p(e,3),n=t[0],o=t[1],r=t[2];h(r,n,o)}),delete n.queue)});var k,x=function(e,t){return e===t},N=((k=function(){var e;return(e=console).log.apply(e,arguments)},function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:x;return function(){for(var t=arguments.length,n=Array(t),o=0;o<t;o++)n[o]=arguments[o];return function(){for(var t=arguments.length,o=Array(t),r=0;r<t;r++)o[r]=arguments[r];return function(){return e.apply(void 0,[].concat(n,o))?k.apply(void 0,arguments):void 0}}}})()(!0),function(e){function t(e,n){var o;r(this,t);for(var i="\n    Native Property >>>"+e+"<<< exists already at "+n.nodeName+"#"+n._id+" and evaluates to -> "+n[e]+".\n    Please consult the HTML spec for inherited DOM properties:\n    - Element Interface https://developer.mozilla.org/en-US/docs/Web/API/Element#Properties\n    - Node Interface https://developer.mozilla.org/en-US/docs/Web/API/Node#Properties",a=arguments.length,s=Array(a>2?a-2:0),l=2;l<a;l++)s[l-2]=arguments[l];var c=u(this,(o=t.__proto__||Object.getPrototypeOf(t)).call.apply(o,[this,i].concat(s)));return Error.captureStackTrace&&Error.captureStackTrace(c,t),c.name="PropertyExistsException",c}return l(t,e),t}(Error)),E=/[A-Z]/g;function w(e,t,n){var o=e.toLowerCase(),r=n.charAt(t+1);return 0===t||r.toUpperCase()===r?o:"-"+o}var A=/^\s*(?:true|false|null|undefined|-?[0-9]+\.?[0-9]*|[[{](?:.|[\s])*[\]}])\s*$/;function T(e,t){var n=e;if(e&&t!==e){if(A.test(e))try{n=JSON.parse(e)}catch(n){console.error("Attribute "+t+" has an error:\n"+n+"\n",e)}}else n=!0;return n}var P=/(?:^\w|[A-Z]|\b\w|\s+|[-_]+)/g,j=/[-_]+/g;function S(e){return e.replace(P,D)}function D(e,t){return 0==+e||j.test(e)?"":0===t?e.toLowerCase():e.toUpperCase()}function R(e,t){if("function"==typeof e.hasAttribute&&!e.hasAttribute(t))return!1;var n=e.value;return t?n=e.getAttribute(t):t=e.name,n=T(n,t)}var L=/iPad|iPhone|iPod/.test(navigator.userAgent)&&!window.MSStream;function M(e,t,n){var o=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},r=o.capture,i=void 0===r||r,a=o.passive,s=void 0===a||a,l=e.ownerDocument.documentElement,c=m(l,t,function(t){var o=t.target;if(!e.contains(o)&&e!==o)return n(t)},{capture:i,passive:s});return L&&(l.style.cursor="pointer"),c}var U=function(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];for(var o=t.length,r={},i=0;i<o;++i){var a=t[i];r[a.toUpperCase()]=a}return r}("click","keyup","enter","move","leave","Escape","Esc","touchstart","touchmove","touchend"),I="axa-change",V="data-prevent-default";((function(){function e(t){var n=this,o=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};r(this,e),this._handleClick=function(e,t){n.shouldPreventDefault(t||e.currentTarget)&&e.preventDefault();var o=!n._lastToggleNode,r=t!==n._lastToggleNode,i=!o&&!r;o?(n._notify(U.ENTER,t),n._onInteractive()):r&&n._notify(U.MOVE,t,n._lastToggleNode),n._lastToggleNode=t,i&&n._options.sameClickClose&&n._close()},this._handleClose=function(e,t){n.shouldPreventDefault(t||e.currentTarget)&&e.preventDefault(),n._close()},this._handleKeyUp=function(e){(e.key===U.ESCAPE||e.key===U.ESC||27===e.keyCode)&&(e.preventDefault(),n._close())},this._init(t,o)}return i(e,[{key:"_init",value:function(t,n){t&&(this._wcNode=t),n&&(this._options=a({},e.DEFAULTS,n));var o=this._options.containerClass;this._container=o?this._wcNode.querySelector(o):this._wcNode,this._on()}},{key:"_on",value:function(){this._off(),this._unClick=m(this._container,U.CLICK,this._options.toggleClass,this._handleClick,{passive:!this._options.preventDefault})}},{key:"_off",value:function(){this._unClick&&this._unClick(),this._offInteractive()}},{key:"_onInteractive",value:function(){this._offInteractive(),this._options.closeClass&&(this._unCloseClick=m(this._container,U.CLICK,this._options.closeClass,this._handleClose,{passive:!this._options.preventDefault})),this._options.outerClose&&(this._unOuterClick=M(this._container,U.CLICK,this._handleClose,{passive:!this._options.preventDefault})),this._options.escapeClose&&(this._unCloseEscape=m(this._container.ownerDocument,U.KEYUP,this._handleKeyUp,{passive:!1}))}},{key:"shouldPreventDefault",value:function(e){return e.hasAttribute(V)?R(e,V):this._options.preventDefault}},{key:"_offInteractive",value:function(){this._unOuterClick&&this._unOuterClick(),this._unCloseClick&&this._unCloseClick(),this._unCloseEscape&&this._unCloseEscape(),this.deleteLastToggleNode()}},{key:"_close",value:function(){this._lastToggleNode&&(this._notify(U.LEAVE,this._lastToggleNode),this._offInteractive(),this.deleteLastToggleNode())}},{key:"_notify",value:function(e,t,n){e in this&&"function"==typeof this[e]&&this[e](t,n)}},{key:"enter",value:function(e){throw new Error("UiEvent.enter method not overwritten")}},{key:"move",value:function(e,t){}},{key:"leave",value:function(e){throw new Error("UiEvent.leave method not overwritten")}},{key:"destroy",value:function(){this._off(),delete this._wcNode,delete this._options}},{key:"deleteLastToggleNode",value:function(){delete this._lastToggleNode}},{key:"lastToggleNode",get:function(){return this._lastToggleNode}}]),e})()).DEFAULTS={containerClass:".js-ui-container",toggleClass:"js-ui-toggle",closeClass:"js-ui-close",escapeClose:!0,outerClose:!0,sameClickClose:!0,preventDefault:!0};var F=["title","checked","disabled"],K=[];var H=1,q=3,W=8;function $(e,t){var n=e.nodeType,o=e.nodeName;n===H&&function(e,t){for(var n=t.attributes,o=e.attributes,r=null,i=null,a=null,s=null,l=o.length-1;l>=0;--l)if(s=o[l],a=s.name,r=s.namespaceURI,i=s.value,r){var c=s.localName;t.getAttributeNS(r,c||a)!==i&&t.setAttributeNS(r,a,i)}else t.hasAttribute(a)?t.getAttribute(a)!==i&&("null"===i||"undefined"===i?t.removeAttribute(a):t.setAttribute(a,i)):t.setAttribute(a,i);for(var u=n.length-1;u>=0;--u)!1!==(s=n[u]).specified&&(a=s.name,(r=s.namespaceURI)?(a=s.localName||a,e.hasAttributeNS(r,a)||t.removeAttributeNS(r,a)):e.hasAttributeNS(null,a)||t.removeAttribute(a))}(e,t),n!==q&&n!==W||t.nodeValue===e.nodeValue||(t.nodeValue=e.nodeValue),"INPUT"===o?function(e,t){var n=e.value,o=t.value;z(e,t,"checked"),z(e,t,"disabled"),n!==o&&(t.setAttribute("value",n),t.value=n);"null"===n&&(t.value="",t.removeAttribute("value"));e.hasAttributeNS(null,"value")?"range"===t.type&&(t.value=n):t.removeAttribute("value")}(e,t):"OPTION"===o?z(e,t,"selected"):"TEXTAREA"===o&&function(e,t){var n=e.value;n!==t.value&&(t.value=n);if(t.firstChild&&t.firstChild.nodeValue!==n){if(""===n&&t.firstChild.nodeValue===t.placeholder)return;t.firstChild.nodeValue=n}}(e,t)}function z(e,t,n){e[n]!==t[n]&&(t[n]=e[n],e[n]?t.setAttribute(n,""):t.removeAttribute(n))}var G=3;function B(e,t){return t?e?e.isSameNode&&e.isSameNode(t)?t:e.tagName!==t.tagName?e:($(e,t),t.skipChildren&&t.skipChildren()||function(e,t){for(var n=void 0,o=void 0,r=void 0,i=void 0,a=0,s=0;n=t.childNodes[s],o=e.childNodes[s-a],n||o;s++)if(o)if(n)if(Z(o,n))(r=B(o,n))!==n&&(t.replaceChild(r,n),a++);else{i=null;for(var l=s;l<t.childNodes.length;l++)if(Z(t.childNodes[l],o)){i=t.childNodes[l];break}i?((r=B(o,i))!==i&&a++,t.insertBefore(r,n)):o.id||n.id?(t.insertBefore(o,n),a++):(r=B(o,n))!==n&&(t.replaceChild(r,n),a++)}else t.appendChild(o),a++;else t.removeChild(n),s--}(e,t),t):null:e}function Z(e,t){return e.id?e.id===t.id:e.isSameNode?e.isSameNode(t):e.tagName===t.tagName&&(e.type===G&&e.nodeValue===t.nodeValue)}var J=function(e){function t(e){var n;r(this,t);for(var o="\n    Web Component "+e.nodeName+"%c#"+e._id+" does not accept string as a return from a template. Maybe use bel?}",i=arguments.length,a=Array(i>1?i-1:0),s=1;s<i;s++)a[s-1]=arguments[s];var l=u(this,(n=t.__proto__||Object.getPrototypeOf(t)).call.apply(n,[this,o].concat(a)));return Error.captureStackTrace&&Error.captureStackTrace(l,t),l.name="TemplateNoStringReturnException",l}return l(t,e),t}(Error),X=!!document.createDocumentFragment().children;function Y(){return Reflect.construct(HTMLElement,[],this.__proto__.constructor)}Object.setPrototypeOf(Y.prototype,HTMLElement.prototype),Object.setPrototypeOf(Y,HTMLElement);var Q=function(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];return function(e){return t.reduceRight(function(e,t){return t(e)},e)}}(function(e){return function(t){function n(){var e,t,o;r(this,n);for(var i=arguments.length,a=Array(i),s=0;s<i;s++)a[s]=arguments[s];return t=o=u(this,(e=n.__proto__||Object.getPrototypeOf(n)).call.apply(e,[this].concat(a))),o._makeContextReady=function(){var e=(arguments.length>0&&void 0!==arguments[0]?arguments[0]:{}).detail;o.contextNode&&(clearTimeout(o.timeoutId),o.timeoutId=setTimeout(function(){o.contextCallback(o.contextNode,e)},10)),o.unContextEnabled&&o.unContextEnabled(),o.unContextEnabled=O("context/available",o._makeContextReady)},u(o,t)}return l(n,e),i(n,[{key:"connectedCallback",value:function(){s(n.prototype.__proto__||Object.getPrototypeOf(n.prototype),"connectedCallback",this)&&s(n.prototype.__proto__||Object.getPrototypeOf(n.prototype),"connectedCallback",this).call(this),this.contextCallback&&this._makeContextReady()}},{key:"disconnectedCallback",value:function(){s(n.prototype.__proto__||Object.getPrototypeOf(n.prototype),"disconnectedCallback",this)&&s(n.prototype.__proto__||Object.getPrototypeOf(n.prototype),"disconnectedCallback",this).call(this),this.unContextEnabled&&this.unContextEnabled()}},{key:"provideContext",value:function(){var e=this.nodeName.toLowerCase();this.__isContext=!0,this.__contextName=e,function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:document;C[e]||(C[e]={count:0,queue:[]});var o=C[e].queue;Array.isArray(o)?o.push([e,t,n]):h(n,e,t)}("context/available",e)}},{key:"consumeContext",value:function(e){this.__consumedContext=e&&e.toLowerCase()}},{key:"contextNode",get:function(){for(var e=this.__consumedContext,t=this.parentNode;t&&(!t.__isContext||e&&e!==t.__contextName);)t=t.parentNode;return!(!t||!t.__isContext)&&t}}]),n}()},function(e){return function(t){function n(){return r(this,n),u(this,(n.__proto__||Object.getPrototypeOf(n)).apply(this,arguments))}return l(n,e),i(n,[{key:"appendChild",value:function(e){!this._isMorphing&&this._hasTemplate&&this._hasRendered?(this._lightDOMRefs.push(e),this.render()):s(n.prototype.__proto__||Object.getPrototypeOf(n.prototype),"appendChild",this).call(this,e)}},{key:"innerText",set:function(e){if(this._hasTemplate&&this._hasRendered){var t=document.createTextNode(e);this._lightDOMRefs=[t],this.render()}else d(n.prototype.__proto__||Object.getPrototypeOf(n.prototype),"innerText",e,this)}},{key:"textContent",set:function(e){if(this._hasTemplate&&this._hasRendered){var t=document.createTextNode(e);this._lightDOMRefs=[t],this.render()}else d(n.prototype.__proto__||Object.getPrototypeOf(n.prototype),"textContent",e,this)}},{key:"innerHTML",set:function(e){if(this._hasTemplate&&this._hasRendered){var t=document.createElement("div");t.innerHTML=e,this._lightDOMRefs=Array.from(t.children),this.render()}else d(n.prototype.__proto__||Object.getPrototypeOf(n.prototype),"innerHTML",e,this)}}]),n}()},function(e){return function(t){function n(e){r(this,n);var t=u(this,(n.__proto__||Object.getPrototypeOf(n)).call(this,e));t._reduceProps=function(e,o){var r=e.props,i=e.shouldUpdate,a=t._hasKeys[o];if(-1===F.indexOf(o)&&a)throw new N(o,t);var s="_"+o,l=r[o],c=t[s];return i||t.shouldUpdateCallback(l,c)?(t[s]=l,t._props[o]=l,a&&d(n.prototype.__proto__||Object.getPrototypeOf(n.prototype),o,l,t),{props:r,shouldUpdate:!0}):{props:r,shouldUpdate:!1}},t._isConnected=!1,t._props={},t._hasKeys={},t.updatedDebounced=g(function(){return t.updated&&t.updated()},50);var o=t.constructor.observedAttributes;return Array.isArray(o)&&o.forEach(function(e){var n,o=S(e),r=o in t;if(-1===F.indexOf(o)&&r)throw new N(o,t);t._hasKeys[o]=r,Object.defineProperty(t,o,n={get:function(){return this._props[o]},set:function(e){this.shouldUpdateCallback(this._props[o],e)&&(this._props[o]=e,r&&d(n.__proto__||Object.getPrototypeOf(n),o,e,this),this._isConnected&&this._hasRendered&&this.updatedDebounced())}})}),t}return l(n,e),i(n,[{key:"connectedCallback",value:function(){var e=this;if(s(n.prototype.__proto__||Object.getPrototypeOf(n.prototype),"connectedCallback",this)&&s(n.prototype.__proto__||Object.getPrototypeOf(n.prototype),"connectedCallback",this).call(this),!this._isConnected){this._isConnected=!0;var t=this.constructor.observedAttributes;this.initialClassName=this.className,Array.isArray(t)&&t.forEach(function(t){var o=S(t);if(e.hasAttribute(t)){var r=R(e,t),i=e._hasKeys[o];e._props[o]=r,i&&d(n.prototype.__proto__||Object.getPrototypeOf(n.prototype),o,r,e)}})}this.updated&&this.updated()}},{key:"attributeChangedCallback",value:function(e,t,n){if(this.shouldUpdateCallback(n,t)){var o=S(e);this.hasAttribute(e)?this[o]=T(n):this[o]=null,"value"===e&&null!==n&&h(this,I,n,{bubbles:!0,cancelable:!0,composed:!0})}}},{key:"setProps",value:function(e){var t=this.constructor.observedAttributes,n=void 0===t?[]:t;Object.keys(e).filter(function(e){return n.indexOf(e.replace(E,w))>-1}).reduce(this._reduceProps,{props:e,shouldUpdate:!1}).shouldUpdate&&this._isConnected&&this._hasRendered&&this.updated&&this.updated()}},{key:"shouldUpdateCallback",value:function(e,t){return e!==t}},{key:"disconnectedCallback",value:function(){this._isConnected=!1}}]),n}()},function(e){return function(t){function n(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.template,o=c(e,["template"]);r(this,n);var i=u(this,(n.__proto__||Object.getPrototypeOf(n)).call(this,o));return i._template=t,i._hasTemplate=!!t,i._hasRendered=!1,i.updated=i.render,i}return l(n,e),i(n,[{key:"render",value:function(){var e=this,t=!this._hasRendered;if(this.willRenderCallback(t),this._hasTemplate){var r=this._template;try{if(t){for(var i=document.createDocumentFragment(),a=[];this.firstChild;)a.push(this.firstChild),i.appendChild(this.firstChild);this._lightDOMRefs=a,this.childrenFragment=i}else this._lightDOMRefs.forEach(function(t){var n=t.cloneNode(!0);e.childrenFragment.appendChild(n)});X||(this.childrenFragment.children=Array.from(this.childrenFragment.childNodes).filter(function(e){return 1===e.nodeType}));var l=r(this._props,this.childrenFragment,this),c=document.createDocumentFragment();if(Array.isArray(l))l.forEach(function(e){c.appendChild(e)});else if(l){if("string"==typeof l)throw new J(this);c.appendChild(l)}if(t)s(n.prototype.__proto__||Object.getPrototypeOf(n.prototype),"appendChild",this).call(this,c);else{var u=this.cloneNode(!1);u._isMorphing=!0,u.appendChild(c),this._isMorphing=!0,function(e,t){if("object"!==(void 0===e?"undefined":o(e)))throw new Error("componentMorph: oldTree should be an object");if("object"!==(void 0===t?"undefined":o(t)))throw new Error("componentMorph: newTree should be an object");B(t,e)}(this,u),function(){for(var e=void 0;e=K.pop();)delete e.isSameNode;K=[]}(),this._isMorphing=!1}}catch(e){console.error(e)}}this._hasRendered=!0,this.didRenderCallback(t)}},{key:"skipChildren",value:function(){return!this._isMorphing}},{key:"willRenderCallback",value:function(e){}},{key:"didRenderCallback",value:function(e){}}]),n}()},function(e){return function(t){function n(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.styles,o=void 0===t?"":t,i=c(e,["styles"]);r(this,n);var a=u(this,(n.__proto__||Object.getPrototypeOf(n)).call(this,i));return a._styles=o,a}return l(n,e),i(n,[{key:"connectedCallback",value:function(){s(n.prototype.__proto__||Object.getPrototypeOf(n.prototype),"connectedCallback",this)&&s(n.prototype.__proto__||Object.getPrototypeOf(n.prototype),"connectedCallback",this).call(this),this._appendStyles()}},{key:"_appendStyles",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this;if(this._styles){var t=document.createElement("style"),n=document.createTextNode(this._styles);t.appendChild(n),e.insertAdjacentElement?e.insertAdjacentElement("afterbegin",t):e.appendChild(t)}}}]),n}()})(function(e){function n(e){r(this,n);var o=u(this,(n.__proto__||Object.getPrototypeOf(n)).call(this,e));return o._id=t(o.nodeName),o}return l(n,Y),i(n,null,[{key:"uuidv4",value:function(){return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,function(e){var t=16*Math.random()|0;return("x"==e?t:3&t|8).toString(16)})}}]),n}()),ee={},te=function(e){function t(){var e,n,o;r(this,t);for(var i=arguments.length,a=Array(i),s=0;s<i;s++)a[s]=arguments[s];return n=o=u(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(a))),o._appendStyles=function(){t.appendGlobalStyles(o._styles,o.nodeName)},u(o,n)}return l(t,Q),i(t,null,[{key:"appendGlobalStyles",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:Q.uuidv4();if(e&&!ee[t]){var n=document.createElement("style"),o=document.createTextNode(e);ee[t]=!0,n.appendChild(o),n.setAttribute("data-c-name",t.toLowerCase()),document.head.appendChild(n)}}}]),t}();var ne,oe,re=/\n[\s]+$/,ie=/^\n[\s]+/,ae=/[\s]+$/,se=/^[\s]+/,le=/[\n\s]+/g,ce=["a","abbr","b","bdi","bdo","br","cite","data","dfn","em","i","kbd","mark","q","rp","rt","rtc","ruby","s","amp","small","span","strong","sub","sup","time","u","var","wbr"],ue=["code","pre","textarea"],de=function(e,t){var n,o=e.classes;return(n=document.createElement("article")).setAttribute("class",""+String(o)),function e(t,n){if(Array.isArray(n))for(var o,r,i=t.nodeName.toLowerCase(),a=!1,s=0,l=n.length;s<l;s++){var c=n[s];if(Array.isArray(c))e(t,c);else{("number"==typeof c||"boolean"==typeof c||"function"==typeof c||c instanceof Date||c instanceof RegExp)&&(c=c.toString());var u=t.childNodes[t.childNodes.length-1];if("string"==typeof c)a=!0,u&&"#text"===u.nodeName?u.nodeValue+=c:(c=document.createTextNode(c),t.appendChild(c),u=c),s===l-1&&(a=!1,-1===ce.indexOf(i)&&-1===ue.indexOf(i)?""===(o=u.nodeValue.replace(ie,"").replace(ae,"").replace(re,"").replace(le," "))?t.removeChild(u):u.nodeValue=o:-1===ue.indexOf(i)&&(r=0===s?"":" ",o=u.nodeValue.replace(ie,r).replace(se," ").replace(ae,"").replace(re,"").replace(le," "),u.nodeValue=o));else if(c&&c.nodeType){a&&(a=!1,-1===ce.indexOf(i)&&-1===ue.indexOf(i)?""===(o=u.nodeValue.replace(ie,"").replace(re,"").replace(le," "))?t.removeChild(u):u.nodeValue=o:-1===ue.indexOf(i)&&(o=u.nodeValue.replace(se," ").replace(ie,"").replace(re,"").replace(le," "),u.nodeValue=o));var d=c.nodeName;d&&(i=d.toLowerCase()),t.appendChild(c)}}}}(n,[t]),n},pe=".o-accordion {\n  display: block; }\n",fe=function(e){function t(){r(this,t);var e=u(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,{styles:pe,template:de}));return e.provideContext(),e}return l(t,te),i(t,[{key:"connectedCallback",value:function(){s(t.prototype.__proto__||Object.getPrototypeOf(t.prototype),"connectedCallback",this).call(this),this.className=this.initialClassName+" o-accordion js-accordion"}},{key:"disconnectedCallback",value:function(){s(t.prototype.__proto__||Object.getPrototypeOf(t.prototype),"disconnectedCallback",this).call(this)}}]),t}();return fe.tagName="axa-accordion",ne=fe.tagName,oe=fe,customElements.get(ne)||customElements.define(ne,oe),fe});
