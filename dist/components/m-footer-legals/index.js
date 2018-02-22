var StyleGuideWebComponent=function(){"use strict";var t,e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},n=function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")},o=function(){function t(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}return function(e,n,o){return n&&t(e.prototype,n),o&&t(e,o),e}}(),r=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(t[o]=n[o])}return t},i=function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)},a=function(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e},l=function(){return function(t,e){if(Array.isArray(t))return t;if(Symbol.iterator in Object(t))return function(t,e){var n=[],o=!0,r=!1,i=void 0;try{for(var a,l=t[Symbol.iterator]();!(o=(a=l.next()).done)&&(n.push(a.value),!e||n.length!==e);o=!0);}catch(t){r=!0,i=t}finally{try{!o&&l.return&&l.return()}finally{if(r)throw i}}return n}(t,e);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),s=function(t){if(Array.isArray(t)){for(var e=0,n=Array(t.length);e<t.length;e++)n[e]=t[e];return n}return Array.from(t)},u=(function(t){!function(){var n={}.hasOwnProperty;function o(){for(var t=[],r=0;r<arguments.length;r++){var i=arguments[r];if(i){var a=void 0===i?"undefined":e(i);if("string"===a||"number"===a)t.push(i);else if(Array.isArray(i))t.push(o.apply(null,i));else if("object"===a)for(var l in i)n.call(i,l)&&i[l]&&t.push(l)}}return t.join(" ")}t.exports?t.exports=o:window.classNames=o}()}(t={exports:{}},t.exports),t.exports),c=/^\s*(?:true|false|null|undefined|-?[0-9]+\.?[0-9]*|[[{](?:.|[\r\n])*[\]}])\s*$/;function d(t,e){if("function"==typeof t.hasAttribute&&!t.hasAttribute(e))return!1;var n=t.value;if(e?n=t.getAttribute(e):e=t.name,n&&e!==n){if(c.test(n))try{n=JSON.parse(n)}catch(e){console.error("Attribute "+t+" has an error:\n"+e+"\n",n)}}else n=!0;return n}var f=function(){try{var t=new window.CustomEvent("test");if(t.preventDefault(),!0!==t.defaultPrevented)throw new Error("Could not prevent default");return window.CustomEvent}catch(t){}return e;function e(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=e.bubbles,o=void 0!==n&&n,r=e.cancelable,i=void 0!==r&&r,a=e.detail,l=void 0===a?void 0:a,s=document.createEvent("CustomEvent");s.initCustomEvent(t,o,i,l);var u=s.preventDefault;return s.preventDefault=function(){u.call(s);try{Object.defineProperty(this,"defaultPrevented",{get:function(){return!0}})}catch(t){this.defaultPrevented=!0}},s}}();function p(t,e,n){var o=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},i=new f(e,r({},o,{detail:n}));t.dispatchEvent(i)}function h(t,e){var n,o;return(n=e,new RegExp("^"+n+"$|^"+n+"\\s|\\s"+n+"\\s|\\s"+n+"$",o)).test(t.className)}var v=/\s+/,m={transitionend:function(){for(var t=document.createElement("div").style,e={transition:"transitionend",OTransition:"oTransitionEnd otransitionend",MozTransition:"transitionend",WebkitTransition:"webkitTransitionEnd"},n=Object.keys(e),o=n.length,r=void 0,i=0;i<o;++i)if(void 0!==t[r=n[i]])return e[r];return null}()};function y(t,n,o,r){var i=arguments.length>4&&void 0!==arguments[4]&&arguments[4];if(m[n]&&(n=m[n]),!t||!n)return null;var a=void 0===o?"undefined":e(o);"function"===a&&(i=!!r,r=o);for(var l=o&&"string"===a?function(e){var n=e.target;for(;!h(n,o)&&n!==t;)n=n.parentNode;if(n!==t)return r(e,n)}:r,s=n.split(v),u=s.length,c=0;c<u;++c)t.addEventListener(s[c],l,i);return function e(){for(var n=0;n<u;++n)t.removeEventListener(s[n],l,i);!function(t,e){if(!t)return!1;for(var n=Object.keys(t),o=n.length,r=0;r<o;++r){var i=n[r];if(t[i]===e)return delete t[i]}}(this,e)}}var b={};function g(t,e){var n=y(arguments.length>2&&void 0!==arguments[2]?arguments[2]:document,t,e);b[t]||(b[t]={count:0});var o,r=b[t];return r.count++,r.onsubscribe||(r.onsubscribe=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},o=n.leading,r=void 0!==o&&o,i=n.trailing,a=void 0===i||i,l=n.maxWait,u=void 0!==l&&l,c=void 0,d=void 0,f=void 0,p=void 0,h=!1,v=e!==u,m=!1!==u;function y(){for(var n=arguments.length,o=Array(n),i=0;i<n;i++)o[i]=arguments[i];return c=o,v&&(d&&clearTimeout(d),d=setTimeout(b,e)),m&&!f&&(f=setTimeout(g,u)),r&&!h&&(h=!0,p=t.apply(void 0,s(c))),p}return y.flush=function(){return(d||f)&&(p=t.apply(void 0,s(c))),_(),p},y.cancel=_,y;function b(){f&&clearTimeout(f),x()}function g(){d&&clearTimeout(d),x()}function x(){a&&(p=t.apply(void 0,s(c))),d=null,f=null,h=!1}function _(){d&&(clearTimeout(d),d=null),f&&(clearTimeout(f),f=null),c=void 0,h=!1}}((o=t,function(){p(document,"pubsub/onsubscribe",o),p(document,"pubsub/onsubscribe/"+o,o),b[o]&&delete b[o].unsubscribe}),100)),r.onsubscribe(),function(){r.count--,n.call(this),r.count<=0&&delete b[t]}}function x(){return Reflect.construct(HTMLElement,[],this.__proto__.constructor)}y(document,"pubsub/onsubscribe",function(t){var e=t.detail;b[e]||(b[e]={count:0});var n=b[e],o=n.queue;Array.isArray(o)&&(o.forEach(function(t){var e=l(t,3),n=e[0],o=e[1],r=e[2];p(r,n,o)}),delete n.queue)}),Object.setPrototypeOf(x.prototype,HTMLElement.prototype),Object.setPrototypeOf(x,HTMLElement);var _,C,k,w={},E="throwed",O=function(t){function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",o=arguments[1];n(this,e);var r=a(this,(e.__proto__||Object.getPrototypeOf(e)).call(this));return r._makeContextReady=r._makeContextReady.bind(r),r._initialise(t,o),r}return i(e,x),o(e,[{key:"_initialise",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;this.initialClassName=this.className,this._styles=t,this._template=e}},{key:"connectedCallback",value:function(){this._appendStyles(),this.render(),this.contextCallback&&this._makeContextReady()}},{key:"disconnectedCallback",value:function(){this.unContextEnabled&&this.unContextEnabled()}},{key:"_appendStyles",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this;if(this._styles){var e=document.createElement("style"),n=document.createTextNode(this._styles);e.appendChild(n),t.insertAdjacentElement?t.insertAdjacentElement("afterbegin",e):t.appendChild(e)}}},{key:"render",value:function(){var t=this;if(!this._hasRendered){var e=this._template;if(e)try{for(var n=document.createDocumentFragment();this.firstChild;)n.appendChild(this.firstChild);var o=e(function(t){if(!t.hasAttributes)return null;for(var e={},n=t.attributes,o=n.length,r=0;r<o;++r){var i=n[r];e[i.name]=d(i)}return e}(this),n);if(Array.isArray(o))o.forEach(function(e){t.appendChild(e)});else if(o){if("string"==typeof o){var r=new Error(E);throw console.error("\n%cWeb Component %c"+this.nodeName+"%c does not accept string as a return from a template. Maybe use bel?\n\nStack Trace: "+r.stack+"\n","color: #580000; font-size: 14px; line-height:16px;","background: #8b0000; color: #FFF; font-size: 14px; line-height:16px;","color: #580000; font-size: 14px; line-height:16px;"),r}this.appendChild(o)}this._hasRendered=!0}catch(r){r.message!==E&&console.error("\n%cWeb Component %c"+this.nodeName+"%c has an error while loading its template:\n"+r+"\n\nStack Trace: "+r.stack+"\n","color: #580000; font-size: 14px; line-height:16px;","background: #8b0000; color: #FFF; font-size: 14px; line-height:16px;","color: #580000; font-size: 14px; line-height:16px;")}}}},{key:"enableContext",value:function(){var t=this.nodeName.toLowerCase();this.__isContext=!0,this.__contextName=t,function(t,e){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:document;b[t]||(b[t]={count:0,queue:[]});var o=b[t].queue;Array.isArray(o)?o.push([t,e,n]):p(n,t,e)}("context/enabled",t)}},{key:"selectContext",value:function(t){this.__selectedContext=t&&t.toLowerCase()}},{key:"_makeContextReady",value:function(){var t=this,e=(arguments.length>0&&void 0!==arguments[0]?arguments[0]:{}).detail;this.contextNode&&(clearTimeout(this.timeoutId),this.timeoutId=setTimeout(function(){t.contextCallback(t.contextNode,e)},10)),this.unContextEnabled&&this.unContextEnabled(),this.unContextEnabled=g("context/enabled",this._makeContextReady)}},{key:"contextNode",get:function(){for(var t=this.__selectedContext,e=this.parentNode;e&&(!e.__isContext||t&&t!==e.__contextName);)e=e.parentNode;return!(!e||!e.__isContext)&&e}}],[{key:"uuidv4",value:function(){return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,function(t){var e=16*Math.random()|0;return("x"==t?e:3&e|8).toString(16)})}}]),e}(),j=(function(t){function e(){return n(this,e),a(this,(e.__proto__||Object.getPrototypeOf(e)).apply(this,arguments))}i(e,O),o(e,[{key:"connectedCallback",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"open",e=this.attachShadow({mode:t});this._appendStyles(e),this.render()}}])}(),function(t){function e(){return n(this,e),a(this,(e.__proto__||Object.getPrototypeOf(e)).apply(this,arguments))}return i(e,O),o(e,[{key:"_appendStyles",value:function(){e.appendGlobalStyles(this._styles,this.nodeName)}}],[{key:"appendGlobalStyles",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:O.uuidv4();if(t&&!w[t]){var n=document.createElement("style"),o=document.createTextNode(t);n.appendChild(o),n.setAttribute("data-c-name",e.toLowerCase()),document.querySelector("head").appendChild(n),w[t]=!0}}}]),e}()),T=".m-footer-legals {\n  font-size: 12px;\n  font-weight: 400;\n  line-height: 1.5;\n  letter-spacing: 0.02em;\n  padding-right: 15px;\n  padding-left: 15px;\n  display: block;\n  padding-top: 6px;\n  padding-bottom: 6px;\n  margin-left: auto;\n  color: rgba(255, 255, 255, 0.65);\n  text-align: right; }\n  @media (min-width: 576px) {\n    .m-footer-legals {\n      font-size: 13px;\n      line-height: 1.38; } }\n  @media (max-width: 991px) {\n    .m-footer-legals {\n      padding-bottom: 15px;\n      margin-left: 0;\n      text-align: center; }\n      .m-footer-legals:first-child:last-child {\n        padding-bottom: 6px; } }\n  @media (max-width: 575px) {\n    .m-footer-legals:last-child {\n      padding-top: 0; }\n    .m-footer-legals:first-child {\n      padding-top: 15px; }\n    .m-footer-legals:first-child:last-child {\n      padding-top: 6px; } }\n\n.m-footer-legals__link {\n  position: relative;\n  display: inline-block;\n  padding: 6px 10px;\n  margin: -6px 0;\n  color: rgba(255, 255, 255, 0.65); }\n  .m-footer-legals__link:hover, .m-footer-legals__link:active, .m-footer-legals__link:focus {\n    color: #fff;\n    text-decoration: none; }\n  .m-footer-legals__link::after {\n    position: absolute;\n    left: 0;\n    top: 50%;\n    display: block;\n    width: 1px;\n    height: 14px;\n    margin-top: -7px;\n    content: '';\n    background: rgba(255, 255, 255, 0.65); }\n  .m-footer-legals__link:first-child::after {\n    display: none; }\n\n.m-footer-legals__copy {\n  display: inline-block;\n  margin-left: 10px; }\n\n.m-footer-legals--bottom {\n  -ms-flex-item-align: end;\n      align-self: flex-end;\n  text-align: right !important; }\n  .m-footer-legals--bottom .m-footer-legals__link:last-of-type {\n    margin-right: -10px; }\n  .m-footer-legals--bottom .m-footer-legals__copy {\n    display: block;\n    margin-left: 0; }\n",A=function(t){function e(){return n(this,e),a(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,T))}return i(e,j),o(e,[{key:"connectedCallback",value:function(){(function t(e,n,o){null===e&&(e=Function.prototype);var r=Object.getOwnPropertyDescriptor(e,n);if(void 0===r){var i=Object.getPrototypeOf(e);return null===i?void 0:t(i,n,o)}if("value"in r)return r.value;var a=r.get;return void 0!==a?a.call(o):void 0})(e.prototype.__proto__||Object.getPrototypeOf(e.prototype),"connectedCallback",this).call(this);var t=d(this,"bottom");this.className=u(this.initialClassName,"m-footer-legals",{"m-footer-legals--bottom":t})}}]),e}();return _=function(){window.customElements.define("axa-footer-legals",A)},C=0,k=function(){if(0===C)try{_.apply(void 0,arguments),C+=1,document.removeEventListener("DOMContentLoaded"),document.removeEventListener("WebComponentsReady")}catch(t){}},document.addEventListener("DOMContentLoaded",k,!1),document.addEventListener("WebComponentsReady",k,!1),A}();
