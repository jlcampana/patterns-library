var StyleGuideWebComponent=function(){"use strict";var e,t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},n=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")},r=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},i=function e(t,n,r){null===t&&(t=Function.prototype);var o=Object.getOwnPropertyDescriptor(t,n);if(void 0===o){var i=Object.getPrototypeOf(t);return null===i?void 0:e(i,n,r)}if("value"in o)return o.value;var a=o.get;return void 0!==a?a.call(r):void 0},a=function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)},l=function(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n},u=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t},s=function e(t,n,r,o){var i=Object.getOwnPropertyDescriptor(t,n);if(void 0===i){var a=Object.getPrototypeOf(t);null!==a&&e(a,n,r,o)}else if("value"in i&&i.writable)i.value=r;else{var l=i.set;void 0!==l&&l.call(o,r)}return r},c=function(){return function(e,t){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return function(e,t){var n=[],r=!0,o=!1,i=void 0;try{for(var a,l=e[Symbol.iterator]();!(r=(a=l.next()).done)&&(n.push(a.value),!t||n.length!==t);r=!0);}catch(e){o=!0,i=e}finally{try{!r&&l.return&&l.return()}finally{if(o)throw i}}return n}(e,t);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),d=function(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}return Array.from(e)},p=(function(e){!function(){var n={}.hasOwnProperty;function r(){for(var e=[],o=0;o<arguments.length;o++){var i=arguments[o];if(i){var a=void 0===i?"undefined":t(i);if("string"===a||"number"===a)e.push(i);else if(Array.isArray(i))e.push(r.apply(null,i));else if("object"===a)for(var l in i)n.call(i,l)&&i[l]&&e.push(l)}}return e.join(" ")}e.exports?e.exports=r:window.classNames=r}()}(e={exports:{}},e.exports),e.exports),f=/^\s*(?:true|false|null|undefined|-?[0-9]+\.?[0-9]*|[[{](?:.|[\s])*[\]}])\s*$/;function h(e,t){var n=e;if(e&&t!==e){if(f.test(e))try{n=JSON.parse(e)}catch(n){console.error("Attribute "+t+" has an error:\n"+n+"\n",e)}}else n=!0;return n}function v(e,t){if("function"==typeof e.hasAttribute&&!e.hasAttribute(t))return!1;var n=e.value;return t?n=e.getAttribute(t):t=e.name,n=h(n,t)}var m={},y=function(e){return e in m||(m[e]=0),++m[e]},b=function(){try{var e=new window.CustomEvent("test",{cancelable:!0});if(e.preventDefault(),!0!==e.defaultPrevented)throw new Error("Could not prevent default");return window.CustomEvent}catch(e){}return t;function t(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=t.bubbles,r=void 0!==n&&n,o=t.cancelable,i=void 0!==o&&o,a=t.detail,l=void 0===a?void 0:a,u=document.createEvent("CustomEvent");u.initCustomEvent(e,r,i,l);var s=u.preventDefault;return u.preventDefault=function(){s.call(u);try{Object.defineProperty(this,"defaultPrevented",{get:function(){return!0}})}catch(e){this.defaultPrevented=!0}},u}}();function _(e,t,n){var r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},i=new b(t,o({},r,{detail:n}));return e.dispatchEvent(i)}var g=function(){var e=!1;if("undefined"!=typeof window&&"function"==typeof window.addEventListener){var t=Object.defineProperty({},"passive",{get:function(){e=!0}}),n=function(){};window.addEventListener("testPassiveEventSupport",n,t),window.removeEventListener("testPassiveEventSupport",n,t)}return e}();function x(e){for(var t=e.className,n=!1,r=!0,o=arguments.length,i=Array(o>1?o-1:0),a=1;a<o;a++)i[a-1]=arguments[a];var l=i.map(function(e){var o=(i=e,new RegExp("^"+i+"$|^"+i+"\\s|\\s"+i+"\\s|\\s"+i+"$",a)).test(t);var i,a;o?n=!0:r=!1;return{className:e,hasClass:o}});return!(!r&&!n)&&l}var O=/\s+/,C={transitionend:function(){for(var e=document.createElement("div").style,t={transition:"transitionend",OTransition:"oTransitionEnd otransitionend",MozTransition:"transitionend",WebkitTransition:"webkitTransitionEnd"},n=Object.keys(t),r=n.length,o=void 0,i=0;i<r;++i)if(void 0!==e[o=n[i]])return t[o];return""}()};function w(e,n,r,o){var i=arguments.length>4&&void 0!==arguments[4]?arguments[4]:{},a=i.capture,l=void 0!==a&&a,u=i.passive,s=void 0===u||u;if(C[n]&&(n=C[n]),!e||!n)return null;var c=void 0===r?"undefined":t(r),d=r&&"string"===c;if("function"===c){if(o){var p=o;l=p.capture,s=p.passive}o=r}for(var f=g?{capture:l,passive:s}:l,h=d?function(t){var n=t.target;for(;!x(n,r)&&n!==e;)n=n.parentNode;if(n!==e)return o(t,n)}:o,v=n.split(O),m=v.length,y=0;y<m;++y)e.addEventListener(v[y],h,f);return function t(){for(var n=0;n<m;++n)e.removeEventListener(v[n],h,f);!function(e,t){if(!e)return!1;for(var n=Object.keys(e),r=n.length,o=0;o<r;++o){var i=n[o];if(e[i]===t)return delete e[i]}}(this,t)}}function k(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},r=n.leading,o=void 0!==r&&r,i=n.trailing,a=void 0===i||i,l=n.maxWait,u=void 0!==l&&l,s=void 0,c=void 0,p=void 0,f=void 0,h=!1,v=t!==u,m=!1!==u;function y(){for(var n=arguments.length,r=Array(n),i=0;i<n;i++)r[i]=arguments[i];return s=r,v&&(c&&clearTimeout(c),c=setTimeout(b,t)),m&&!p&&(p=setTimeout(_,u)),o&&!h&&(h=!0,f=e.apply(void 0,d(s))),f}return y.flush=function(){(c||p)&&(f=e.apply(void 0,d(s)));return x(),f},y.cancel=x,y;function b(){p&&clearTimeout(p),g()}function _(){c&&clearTimeout(c),g()}function g(){a&&(f=e.apply(void 0,d(s))),c=null,p=null,h=!1}function x(){c&&(clearTimeout(c),c=null),p&&(clearTimeout(p),p=null),s=void 0,h=!1}}window.__subscriptions=window.__subscriptions||{};var A=window.__subscriptions;function N(e,t){var n=w(arguments.length>2&&void 0!==arguments[2]?arguments[2]:document,e,t);A[e]||(A[e]={count:0});var r,o=A[e];return o.count++,o.onsubscribe||(o.onsubscribe=k((r=e,function(){_(document,"pubsub/onsubscribe",r),_(document,"pubsub/onsubscribe/"+r,r),A[r]&&delete A[r].unsubscribe}),100)),o.onsubscribe(),function(){o.count--,n.call(this),o.count<=0&&delete A[e]}}w(document,"pubsub/onsubscribe",function(e){var t=e.detail;A[t]||(A[t]={count:0});var n=A[t],r=n.queue;Array.isArray(r)&&(r.forEach(function(e){var t=c(e,3),n=t[0],r=t[1],o=t[2];_(o,n,r)}),delete n.queue)});var E,P=function(e,t){return e===t},j=((E=function(){var e;return(e=console).log.apply(e,arguments)},function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:P;return function(){for(var t=arguments.length,n=Array(t),r=0;r<t;r++)n[r]=arguments[r];return function(){for(var t=arguments.length,r=Array(t),o=0;o<t;o++)r[o]=arguments[o];return function(){return e.apply(void 0,[].concat(n,r))?E.apply(void 0,arguments):void 0}}}})()(!0),function(e){function t(e,r){var o;n(this,t);for(var i="\n    Native Property >>>"+e+"<<< exists already at "+r.nodeName+"#"+r._id+" and evaluates to -> "+r[e]+".\n    Please consult the HTML spec for inherited DOM properties:\n    - Element Interface https://developer.mozilla.org/en-US/docs/Web/API/Element#Properties\n    - Node Interface https://developer.mozilla.org/en-US/docs/Web/API/Node#Properties",a=arguments.length,l=Array(a>2?a-2:0),s=2;s<a;s++)l[s-2]=arguments[s];var c=u(this,(o=t.__proto__||Object.getPrototypeOf(t)).call.apply(o,[this,i].concat(l)));return Error.captureStackTrace&&Error.captureStackTrace(c,t),c.name="PropertyExistsException",c}return a(t,e),t}(Error)),T=/[A-Z]/g;function S(e,t,n){var r=e.toLowerCase(),o=n.charAt(t+1);return 0===t||o.toUpperCase()===o?r:"-"+r}var R=/(?:^\w|[A-Z]|\b\w|\s+|[-_]+)/g,M=/[-_]+/g;function L(e){return e.replace(R,D)}function D(e,t){return 0==+e||M.test(e)?"":0===t?e.toLowerCase():e.toUpperCase()}var V=["title","checked","disabled"],U=[];var I=1,F=3,W=8;function H(e,t){var n=e.nodeType,r=e.nodeName;n===I&&function(e,t){for(var n=t.attributes,r=e.attributes,o=null,i=null,a=null,l=null,u=r.length-1;u>=0;--u)if(l=r[u],a=l.name,o=l.namespaceURI,i=l.value,o){var s=l.localName;t.getAttributeNS(o,s||a)!==i&&t.setAttributeNS(o,a,i)}else t.hasAttribute(a)?t.getAttribute(a)!==i&&("null"===i||"undefined"===i?t.removeAttribute(a):t.setAttribute(a,i)):t.setAttribute(a,i);for(var c=n.length-1;c>=0;--c)!1!==(l=n[c]).specified&&(a=l.name,(o=l.namespaceURI)?(a=l.localName||a,e.hasAttributeNS(o,a)||t.removeAttributeNS(o,a)):e.hasAttributeNS(null,a)||t.removeAttribute(a))}(e,t),n!==F&&n!==W||t.nodeValue===e.nodeValue||(t.nodeValue=e.nodeValue),"INPUT"===r?function(e,t){var n=e.value,r=t.value;q(e,t,"checked"),q(e,t,"disabled"),n!==r&&(t.setAttribute("value",n),t.value=n);"null"===n&&(t.value="",t.removeAttribute("value"));e.hasAttributeNS(null,"value")?"range"===t.type&&(t.value=n):t.removeAttribute("value")}(e,t):"OPTION"===r?q(e,t,"selected"):"TEXTAREA"===r&&function(e,t){var n=e.value;n!==t.value&&(t.value=n);if(t.firstChild&&t.firstChild.nodeValue!==n){if(""===n&&t.firstChild.nodeValue===t.placeholder)return;t.firstChild.nodeValue=n}}(e,t)}function q(e,t,n){e[n]!==t[n]&&(t[n]=e[n],e[n]?t.setAttribute(n,""):t.removeAttribute(n))}var $=3;function K(e,t){return t?e?e.isSameNode&&e.isSameNode(t)?t:e.tagName!==t.tagName?e:(H(e,t),t.skipChildren&&t.skipChildren()||function(e,t){for(var n=void 0,r=void 0,o=void 0,i=void 0,a=0,l=0;n=t.childNodes[l],r=e.childNodes[l-a],n||r;l++)if(r)if(n)if(z(r,n))(o=K(r,n))!==n&&(t.replaceChild(o,n),a++);else{i=null;for(var u=l;u<t.childNodes.length;u++)if(z(t.childNodes[u],r)){i=t.childNodes[u];break}i?((o=K(r,i))!==i&&a++,t.insertBefore(o,n)):r.id||n.id?(t.insertBefore(r,n),a++):(o=K(r,n))!==n&&(t.replaceChild(o,n),a++)}else t.appendChild(r),a++;else t.removeChild(n),l--}(e,t),t):null:e}function z(e,t){return e.id?e.id===t.id:e.isSameNode?e.isSameNode(t):e.tagName===t.tagName&&(e.type===$&&e.nodeValue===t.nodeValue)}var G=function(e){function t(e){var r;n(this,t);for(var o="\n    Web Component "+e.nodeName+"%c#"+e._id+" does not accept string as a return from a template. Maybe use bel?}",i=arguments.length,a=Array(i>1?i-1:0),l=1;l<i;l++)a[l-1]=arguments[l];var s=u(this,(r=t.__proto__||Object.getPrototypeOf(t)).call.apply(r,[this,o].concat(a)));return Error.captureStackTrace&&Error.captureStackTrace(s,t),s.name="TemplateNoStringReturnException",s}return a(t,e),t}(Error),B=!!document.createDocumentFragment().children;function Z(){return Reflect.construct(HTMLElement,[],this.__proto__.constructor)}Object.setPrototypeOf(Z.prototype,HTMLElement.prototype),Object.setPrototypeOf(Z,HTMLElement);var J=function(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];return function(e){return t.reduceRight(function(e,t){return t(e)},e)}}(function(e){return function(t){function o(){var e,t,r;n(this,o);for(var i=arguments.length,a=Array(i),l=0;l<i;l++)a[l]=arguments[l];return t=r=u(this,(e=o.__proto__||Object.getPrototypeOf(o)).call.apply(e,[this].concat(a))),r._makeContextReady=function(){var e=(arguments.length>0&&void 0!==arguments[0]?arguments[0]:{}).detail;r.contextNode&&(clearTimeout(r.timeoutId),r.timeoutId=setTimeout(function(){r.contextCallback(r.contextNode,e)},10)),r.unContextEnabled&&r.unContextEnabled(),r.unContextEnabled=N("context/available",r._makeContextReady)},u(r,t)}return a(o,e),r(o,[{key:"connectedCallback",value:function(){i(o.prototype.__proto__||Object.getPrototypeOf(o.prototype),"connectedCallback",this)&&i(o.prototype.__proto__||Object.getPrototypeOf(o.prototype),"connectedCallback",this).call(this),this.contextCallback&&this._makeContextReady()}},{key:"disconnectedCallback",value:function(){i(o.prototype.__proto__||Object.getPrototypeOf(o.prototype),"disconnectedCallback",this)&&i(o.prototype.__proto__||Object.getPrototypeOf(o.prototype),"disconnectedCallback",this).call(this),this.unContextEnabled&&this.unContextEnabled()}},{key:"provideContext",value:function(){var e=this.nodeName.toLowerCase();this.__isContext=!0,this.__contextName=e,function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:document;A[e]||(A[e]={count:0,queue:[]});var r=A[e].queue;Array.isArray(r)?r.push([e,t,n]):_(n,e,t)}("context/available",e)}},{key:"consumeContext",value:function(e){this.__consumedContext=e&&e.toLowerCase()}},{key:"contextNode",get:function(){for(var e=this.__consumedContext,t=this.parentNode;t&&(!t.__isContext||e&&e!==t.__contextName);)t=t.parentNode;return!(!t||!t.__isContext)&&t}}]),o}()},function(e){return function(t){function o(){return n(this,o),u(this,(o.__proto__||Object.getPrototypeOf(o)).apply(this,arguments))}return a(o,e),r(o,[{key:"appendChild",value:function(e){!this._isMorphing&&this._hasTemplate&&this._hasRendered?(this._lightDOMRefs.push(e),this.render()):i(o.prototype.__proto__||Object.getPrototypeOf(o.prototype),"appendChild",this).call(this,e)}},{key:"innerText",set:function(e){if(this._hasTemplate&&this._hasRendered){var t=document.createTextNode(e);this._lightDOMRefs=[t],this.render()}else s(o.prototype.__proto__||Object.getPrototypeOf(o.prototype),"innerText",e,this)}},{key:"textContent",set:function(e){if(this._hasTemplate&&this._hasRendered){var t=document.createTextNode(e);this._lightDOMRefs=[t],this.render()}else s(o.prototype.__proto__||Object.getPrototypeOf(o.prototype),"textContent",e,this)}},{key:"innerHTML",set:function(e){if(this._hasTemplate&&this._hasRendered){var t=document.createElement("div");t.innerHTML=e,this._lightDOMRefs=Array.from(t.children),this.render()}else s(o.prototype.__proto__||Object.getPrototypeOf(o.prototype),"innerHTML",e,this)}}]),o}()},function(e){return function(t){function o(e){n(this,o);var t=u(this,(o.__proto__||Object.getPrototypeOf(o)).call(this,e));t._reduceProps=function(e,n){var r=e.props,i=e.shouldUpdate,a=t._hasKeys[n];if(-1===V.indexOf(n)&&a)throw new j(n,t);var l="_"+n,u=r[n],c=t[l];return i||t.shouldUpdateCallback(u,c)?(t[l]=u,t._props[n]=u,a&&s(o.prototype.__proto__||Object.getPrototypeOf(o.prototype),n,u,t),{props:r,shouldUpdate:!0}):{props:r,shouldUpdate:!1}},t._isConnected=!1,t._props={},t._hasKeys={},t.updatedDebounced=k(function(){return t.updated&&t.updated()},50);var r=t.constructor.observedAttributes;return Array.isArray(r)&&r.forEach(function(e){var n,r=L(e),o=r in t;if(-1===V.indexOf(r)&&o)throw new j(r,t);t._hasKeys[r]=o,Object.defineProperty(t,r,n={get:function(){return this._props[r]},set:function(e){this.shouldUpdateCallback(this._props[r],e)&&(this._props[r]=e,o&&s(n.__proto__||Object.getPrototypeOf(n),r,e,this),this._isConnected&&this._hasRendered&&this.updatedDebounced())}})}),t}return a(o,e),r(o,[{key:"connectedCallback",value:function(){var e=this;if(i(o.prototype.__proto__||Object.getPrototypeOf(o.prototype),"connectedCallback",this)&&i(o.prototype.__proto__||Object.getPrototypeOf(o.prototype),"connectedCallback",this).call(this),!this._isConnected){this._isConnected=!0;var t=this.constructor.observedAttributes;this.initialClassName=this.className,Array.isArray(t)&&t.forEach(function(t){var n=L(t);if(e.hasAttribute(t)){var r=v(e,t),i=e._hasKeys[n];e._props[n]=r,i&&s(o.prototype.__proto__||Object.getPrototypeOf(o.prototype),n,r,e)}})}this.updated&&this.updated()}},{key:"attributeChangedCallback",value:function(e,t,n){if(this.shouldUpdateCallback(n,t)){var r=L(e);this.hasAttribute(e)?this[r]=h(n):this[r]=null}}},{key:"setProps",value:function(e){var t=this.constructor.observedAttributes,n=void 0===t?[]:t;Object.keys(e).filter(function(e){return n.indexOf(e.replace(T,S))>-1}).reduce(this._reduceProps,{props:e,shouldUpdate:!1}).shouldUpdate&&this._isConnected&&this._hasRendered&&this.updated&&this.updated()}},{key:"shouldUpdateCallback",value:function(e,t){return e!==t}},{key:"disconnectedCallback",value:function(){this._isConnected=!1}}]),o}()},function(e){return function(o){function s(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.template,r=l(e,["template"]);n(this,s);var o=u(this,(s.__proto__||Object.getPrototypeOf(s)).call(this,r));return o._template=t,o._hasTemplate=!!t,o._hasRendered=!1,o.updated=o.render,o}return a(s,e),r(s,[{key:"render",value:function(){var e=this,n=!this._hasRendered;if(this.willRenderCallback(n),this._hasTemplate){var r=this._template;try{if(n){for(var o=document.createDocumentFragment(),a=[];this.firstChild;)a.push(this.firstChild),o.appendChild(this.firstChild);this._lightDOMRefs=a,this.childrenFragment=o}else this._lightDOMRefs.forEach(function(t){var n=t.cloneNode(!0);e.childrenFragment.appendChild(n)});B||(this.childrenFragment.children=Array.from(this.childrenFragment.childNodes).filter(function(e){return 1===e.nodeType}));var l=r(this._props,this.childrenFragment),u=document.createDocumentFragment();if(Array.isArray(l))l.forEach(function(e){u.appendChild(e)});else if(l){if("string"==typeof l)throw new G(this);u.appendChild(l)}if(n)i(s.prototype.__proto__||Object.getPrototypeOf(s.prototype),"appendChild",this).call(this,u);else{var c=this.cloneNode(!1);c._isMorphing=!0,c.appendChild(u),this._isMorphing=!0,function(e,n){if("object"!==(void 0===e?"undefined":t(e)))throw new Error("componentMorph: oldTree should be an object");if("object"!==(void 0===n?"undefined":t(n)))throw new Error("componentMorph: newTree should be an object");K(n,e)}(this,c),function(){for(var e=void 0;e=U.pop();)delete e.isSameNode;U=[]}(),this._isMorphing=!1}}catch(e){console.error(e)}}this._hasRendered=!0,this.didRenderCallback(n)}},{key:"skipChildren",value:function(){return!this._isMorphing}},{key:"willRenderCallback",value:function(e){}},{key:"didRenderCallback",value:function(e){}}]),s}()},function(e){return function(t){function o(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.styles,r=void 0===t?"":t,i=l(e,["styles"]);n(this,o);var a=u(this,(o.__proto__||Object.getPrototypeOf(o)).call(this,i));return a._styles=r,a}return a(o,e),r(o,[{key:"connectedCallback",value:function(){i(o.prototype.__proto__||Object.getPrototypeOf(o.prototype),"connectedCallback",this)&&i(o.prototype.__proto__||Object.getPrototypeOf(o.prototype),"connectedCallback",this).call(this),this._appendStyles()}},{key:"_appendStyles",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this;if(this._styles){var t=document.createElement("style"),n=document.createTextNode(this._styles);t.appendChild(n),e.insertAdjacentElement?e.insertAdjacentElement("afterbegin",t):e.appendChild(t)}}}]),o}()})(function(e){function t(e){n(this,t);var r=u(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return r._id=y(r.nodeName),r}return a(t,Z),r(t,null,[{key:"uuidv4",value:function(){return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,function(e){var t=16*Math.random()|0;return("x"==e?t:3&t|8).toString(16)})}}]),t}()),X={},Q=function(e){function t(){var e,r,o;n(this,t);for(var i=arguments.length,a=Array(i),l=0;l<i;l++)a[l]=arguments[l];return r=o=u(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(a))),o._appendStyles=function(){t.appendGlobalStyles(o._styles,o.nodeName)},u(o,r)}return a(t,J),r(t,null,[{key:"appendGlobalStyles",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:J.uuidv4();if(e&&!X[t]){var n=document.createElement("style"),r=document.createTextNode(e);X[t]=!0,n.appendChild(r),n.setAttribute("data-c-name",t.toLowerCase()),document.head.appendChild(n)}}}]),t}();var Y=".m-footer-main {\n  display: block;\n  padding: 50px 0;\n  background: #3b3fd8;\n  border-top: 1px solid rgba(255, 255, 255, 0.25); }\n  @media (max-width: 991px) {\n    .m-footer-main {\n      padding-top: 40px;\n      padding-bottom: 40px; } }\n  @media (max-width: 575px) {\n    .m-footer-main {\n      padding: 0; } }\n\n.m-footer-main__box {\n  padding-right: 15px;\n  padding-left: 15px;\n  width: 100%;\n  margin-right: auto;\n  margin-left: auto;\n  max-width: auto; }\n  @media (min-width: 576px) {\n    .m-footer-main__box {\n      max-width: 540px; } }\n  @media (min-width: 768px) {\n    .m-footer-main__box {\n      max-width: 720px; } }\n  @media (min-width: 992px) {\n    .m-footer-main__box {\n      max-width: 960px; } }\n  @media (min-width: 1200px) {\n    .m-footer-main__box {\n      max-width: 1140px; } }\n\n.m-footer-main__row {\n  margin-right: -15px;\n  margin-left: -15px;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-wrap: wrap;\n      flex-wrap: wrap; }\n  .m-footer-main__row > :last-child {\n    margin-left: auto; }\n  @media (max-width: 575px) {\n    .m-footer-main__row {\n      -webkit-box-orient: vertical;\n      -webkit-box-direction: normal;\n          -ms-flex-direction: column;\n              flex-direction: column; }\n      .m-footer-main__row > :last-child {\n        margin-left: 0; } }\n\n.m-footer-main--light {\n  min-height: 49px;\n  padding: 0; }\n",ee=/\n[\s]+$/,te=/^\n[\s]+/,ne=/[\s]+$/,re=/^[\s]+/,oe=/[\n\s]+/g,ie=["a","abbr","b","bdi","bdo","br","cite","data","dfn","em","i","kbd","mark","q","rp","rt","rtc","ruby","s","amp","small","span","strong","sub","sup","time","u","var","wbr"],ae=["code","pre","textarea"],le=function e(t,n){if(Array.isArray(n))for(var r,o,i=t.nodeName.toLowerCase(),a=!1,l=0,u=n.length;l<u;l++){var s=n[l];if(Array.isArray(s))e(t,s);else{("number"==typeof s||"boolean"==typeof s||"function"==typeof s||s instanceof Date||s instanceof RegExp)&&(s=s.toString());var c=t.childNodes[t.childNodes.length-1];if("string"==typeof s)a=!0,c&&"#text"===c.nodeName?c.nodeValue+=s:(s=document.createTextNode(s),t.appendChild(s),c=s),l===u-1&&(a=!1,-1===ie.indexOf(i)&&-1===ae.indexOf(i)?""===(r=c.nodeValue.replace(te,"").replace(ne,"").replace(ee,"").replace(oe," "))?t.removeChild(c):c.nodeValue=r:-1===ae.indexOf(i)&&(o=0===l?"":" ",r=c.nodeValue.replace(te,o).replace(re," ").replace(ne,"").replace(ee,"").replace(oe," "),c.nodeValue=r));else if(s&&s.nodeType){a&&(a=!1,-1===ie.indexOf(i)&&-1===ae.indexOf(i)?""===(r=c.nodeValue.replace(te,"").replace(ee,"").replace(oe," "))?t.removeChild(c):c.nodeValue=r:-1===ae.indexOf(i)&&(r=c.nodeValue.replace(re," ").replace(te,"").replace(ee,"").replace(oe," "),c.nodeValue=r));var d=s.nodeName;d&&(i=d.toLowerCase()),t.appendChild(s)}}}};function ue(e,t){var n,r;return(r=document.createElement("div")).setAttribute("class","m-footer-main__box"),le(r,["\n    ",(n=document.createElement("div"),n.setAttribute("class","m-footer-main__row"),le(n,[t]),n),"\n  "]),r}var se,ce,de=function(e){function t(){return n(this,t),u(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,{styles:Y,template:ue}))}return a(t,Q),r(t,null,[{key:"observedAttributes",get:function(){return["light"]}}]),r(t,[{key:"connectedCallback",value:function(){i(t.prototype.__proto__||Object.getPrototypeOf(t.prototype),"connectedCallback",this).call(this),this.renderWCNode()}},{key:"attributeChangedCallback",value:function(){this.renderWCNode()}},{key:"renderWCNode",value:function(){var e=v(this,"light");this.className=p(this.initialClassName,"m-footer-main",{"m-footer-main--light":e})}}]),t}();return de.tagName="axa-footer-main",se=de.tagName,ce=de,customElements.get(se)||customElements.define(se,ce),de}();
