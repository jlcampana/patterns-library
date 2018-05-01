!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):e.StyleGuideWebComponent=t()}(this,function(){"use strict";var e,t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},n=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")},i=function(){function e(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(t,n,i){return n&&e(t.prototype,n),i&&e(t,i),t}}(),o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e},r=function e(t,n,i){null===t&&(t=Function.prototype);var o=Object.getOwnPropertyDescriptor(t,n);if(void 0===o){var r=Object.getPrototypeOf(t);return null===r?void 0:e(r,n,i)}if("value"in o)return o.value;var s=o.get;return void 0!==s?s.call(i):void 0},s=function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)},a=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t},c=function e(t,n,i,o){var r=Object.getOwnPropertyDescriptor(t,n);if(void 0===r){var s=Object.getPrototypeOf(t);null!==s&&e(s,n,i,o)}else if("value"in r&&r.writable)r.value=i;else{var a=r.set;void 0!==a&&a.call(o,i)}return i},l=function(){return function(e,t){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return function(e,t){var n=[],i=!0,o=!1,r=void 0;try{for(var s,a=e[Symbol.iterator]();!(i=(s=a.next()).done)&&(n.push(s.value),!t||n.length!==t);i=!0);}catch(e){o=!0,r=e}finally{try{!i&&a.return&&a.return()}finally{if(o)throw r}}return n}(e,t);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),u=function(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}return Array.from(e)},d=(function(e){!function(){var n={}.hasOwnProperty;function i(){for(var e=[],o=0;o<arguments.length;o++){var r=arguments[o];if(r){var s=void 0===r?"undefined":t(r);if("string"===s||"number"===s)e.push(r);else if(Array.isArray(r))e.push(i.apply(null,r));else if("object"===s)for(var a in r)n.call(r,a)&&r[a]&&e.push(a)}}return e.join(" ")}e.exports?e.exports=i:window.classNames=i}()}(e={exports:{}},e.exports),e.exports),h=1,f=3,p=8;function v(e,t){var n=e.nodeType,i=e.nodeName;n===h&&function(e,t){for(var n=t.attributes,i=e.attributes,o=null,r=null,s=null,a=null,c=i.length-1;c>=0;--c)if(a=i[c],s=a.name,o=a.namespaceURI,r=a.value,o){var l=a.localName;t.getAttributeNS(o,l||s)!==r&&t.setAttributeNS(o,s,r)}else t.hasAttribute(s)?t.getAttribute(s)!==r&&("null"===r||"undefined"===r?t.removeAttribute(s):t.setAttribute(s,r)):t.setAttribute(s,r);for(var u=n.length-1;u>=0;--u)!1!==(a=n[u]).specified&&(s=a.name,(o=a.namespaceURI)?(s=a.localName||s,e.hasAttributeNS(o,s)||t.removeAttributeNS(o,s)):e.hasAttributeNS(null,s)||t.removeAttribute(s))}(e,t),n!==f&&n!==p||t.nodeValue===e.nodeValue||(t.nodeValue=e.nodeValue),"INPUT"===i?function(e,t){var n=e.value,i=t.value;y(e,t,"checked"),y(e,t,"disabled"),n!==i&&(t.setAttribute("value",n),t.value=n);"null"===n&&(t.value="",t.removeAttribute("value"));e.hasAttributeNS(null,"value")?"range"===t.type&&(t.value=n):t.removeAttribute("value")}(e,t):"OPTION"===i?y(e,t,"selected"):"TEXTAREA"===i&&function(e,t){var n=e.value;n!==t.value&&(t.value=n);if(t.firstChild&&t.firstChild.nodeValue!==n){if(""===n&&t.firstChild.nodeValue===t.placeholder)return;t.firstChild.nodeValue=n}}(e,t)}function y(e,t,n){e[n]!==t[n]&&(t[n]=e[n],e[n]?t.setAttribute(n,""):t.removeAttribute(n))}var b=3;function _(e,t){return t?e?e.isSameNode&&e.isSameNode(t)?t:e.tagName!==t.tagName?e:(v(e,t),t.skipChildren&&t.skipChildren()||function(e,t){for(var n=void 0,i=void 0,o=void 0,r=void 0,s=0,a=0;n=t.childNodes[a],i=e.childNodes[a-s],n||i;a++)if(i)if(n)if(m(i,n))(o=_(i,n))!==n&&(t.replaceChild(o,n),s++);else{r=null;for(var c=a;c<t.childNodes.length;c++)if(m(t.childNodes[c],i)){r=t.childNodes[c];break}r?((o=_(i,r))!==r&&s++,t.insertBefore(o,n)):i.id||n.id?(t.insertBefore(i,n),s++):(o=_(i,n))!==n&&(t.replaceChild(o,n),s++)}else t.appendChild(i),s++;else t.removeChild(n),a--}(e,t),t):null:e}function m(e,t){return e.id?e.id===t.id:e.isSameNode?e.isSameNode(t):e.tagName===t.tagName&&(e.type===b&&e.nodeValue===t.nodeValue)}var k=[];function g(e){e.isSameNode=function(){return!0},k.push(e)}var x=/^\s*(?:true|false|null|undefined|-?[0-9]+\.?[0-9]*|[[{](?:.|[\r\n])*[\]}])\s*$/;function C(e,t){var n=e;if(e&&t!==e){if(x.test(e))try{n=JSON.parse(e)}catch(n){console.error("Attribute "+t+" has an error:\n"+n+"\n",e)}}else n=!0;return n}var w=function(){try{var e=new window.CustomEvent("test",{cancelable:!0});if(e.preventDefault(),!0!==e.defaultPrevented)throw new Error("Could not prevent default");return window.CustomEvent}catch(e){}return t;function t(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=t.bubbles,i=void 0!==n&&n,o=t.cancelable,r=void 0!==o&&o,s=t.detail,a=void 0===s?void 0:s,c=document.createEvent("CustomEvent");c.initCustomEvent(e,i,r,a);var l=c.preventDefault;return c.preventDefault=function(){l.call(c);try{Object.defineProperty(this,"defaultPrevented",{get:function(){return!0}})}catch(e){this.defaultPrevented=!0}},c}}();function A(e,t,n){var i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},r=new w(t,o({},i,{detail:n}));return e.dispatchEvent(r)}var N=function(){var e=!1;if("undefined"!=typeof window&&"function"==typeof window.addEventListener){var t=Object.defineProperty({},"passive",{get:function(){e=!0}}),n=function(){};window.addEventListener("testPassiveEventSupport",n,t),window.removeEventListener("testPassiveEventSupport",n,t)}return e}(),O=/^\s+|\s{2,}|\s+$/g;function S(e,t){return new RegExp("^"+e+"$|^"+e+"\\s|\\s"+e+"\\s|\\s"+e+"$",t)}function T(e){for(var t=arguments.length,n=Array(t>1?t-1:0),i=1;i<t;i++)n[i-1]=arguments[i];var o=D.apply(void 0,[e].concat(n));if(!0!==o){var r=[].concat(n);Array.isArray(o)&&(r=o.reduce(E,[])),r&&(e.className+=" "+r.join(" "))}}function E(e,t){var n=t.className;return t.hasClass||e.push(n),e}function D(e){for(var t=e.className,n=!1,i=!0,o=arguments.length,r=Array(o>1?o-1:0),s=1;s<o;s++)r[s-1]=arguments[s];var a=r.map(function(e){var o=S(e).test(t);o?n=!0:i=!1;return{className:e,hasClass:o}});return!(!i&&!n)&&a}function j(e){for(var t=arguments.length,n=Array(t>1?t-1:0),i=1;i<t;i++)n[i-1]=arguments[i];var o=D.apply(void 0,[e].concat(n));if(!1!==o){var r=[].concat(n);if(Array.isArray(o)&&(r=o.reduce(L,[])),r){var s=e.className;e.className=r.reduce(I,s)}}}function L(e,t){var n=t.className;return t.hasClass&&e.push(n),e}function I(e,t){var n=S(t,"g");return e.replace(n," ").replace(O," ")}var F=/\s+/,R={transitionend:function(){for(var e=document.createElement("div").style,t={transition:"transitionend",OTransition:"oTransitionEnd otransitionend",MozTransition:"transitionend",WebkitTransition:"webkitTransitionEnd"},n=Object.keys(t),i=n.length,o=void 0,r=0;r<i;++r)if(void 0!==e[o=n[r]])return t[o];return""}()};function P(e,n,i,o){var r=arguments.length>4&&void 0!==arguments[4]?arguments[4]:{},s=r.capture,a=void 0!==s&&s,c=r.passive,l=void 0===c||c;if(R[n]&&(n=R[n]),!e||!n)return null;var u=void 0===i?"undefined":t(i),d=i&&"string"===u;if("function"===u){if(o){var h=o;a=h.capture,l=h.passive}o=i}for(var f=N?{capture:a,passive:l}:a,p=d?function(t){var n=t.target;for(;!D(n,i)&&n!==e;)n=n.parentNode;if(n!==e)return o(t,n)}:o,v=n.split(F),y=v.length,b=0;b<y;++b)e.addEventListener(v[b],p,f);return function t(){for(var n=0;n<y;++n)e.removeEventListener(v[n],p,f);!function(e,t){if(!e)return!1;for(var n=Object.keys(e),i=n.length,o=0;o<i;++o){var r=n[o];if(e[r]===t)return delete e[r]}}(this,t)}}function U(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},i=n.leading,o=void 0!==i&&i,r=n.trailing,s=void 0===r||r,a=n.maxWait,c=void 0!==a&&a,l=void 0,d=void 0,h=void 0,f=void 0,p=!1,v=t!==c,y=!1!==c;function b(){for(var n=arguments.length,i=Array(n),r=0;r<n;r++)i[r]=arguments[r];return l=i,v&&(d&&clearTimeout(d),d=setTimeout(_,t)),y&&!h&&(h=setTimeout(m,c)),o&&!p&&(p=!0,f=e.apply(void 0,u(l))),f}return b.flush=function(){(d||h)&&(f=e.apply(void 0,u(l)));return g(),f},b.cancel=g,b;function _(){h&&clearTimeout(h),k()}function m(){d&&clearTimeout(d),k()}function k(){s&&(f=e.apply(void 0,u(l))),d=null,h=null,p=!1}function g(){d&&(clearTimeout(d),d=null),h&&(clearTimeout(h),h=null),l=void 0,p=!1}}var M={};function z(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:document;M[e]||(M[e]={count:0,queue:[]});var i=M[e].queue;Array.isArray(i)?i.push([e,t,n]):A(n,e,t)}function V(e,t){var n=P(arguments.length>2&&void 0!==arguments[2]?arguments[2]:document,e,t);M[e]||(M[e]={count:0});var i,o=M[e];return o.count++,o.onsubscribe||(o.onsubscribe=U((i=e,function(){A(document,"pubsub/onsubscribe",i),A(document,"pubsub/onsubscribe/"+i,i),M[i]&&delete M[i].unsubscribe}),100)),o.onsubscribe(),function(){o.count--,n.call(this),o.count<=0&&delete M[e]}}P(document,"pubsub/onsubscribe",function(e){var t=e.detail;M[t]||(M[t]={count:0});var n=M[t],i=n.queue;Array.isArray(i)&&(i.forEach(function(e){var t=l(e,3),n=t[0],i=t[1],o=t[2];A(o,n,i)}),delete n.queue)});var B=/(?:^\w|[A-Z]|\b\w|\s+|[-_]+)/g,W=/[-_]+/g;function q(e){return e.replace(B,K)}function K(e,t){return 0==+e||W.test(e)?"":0===t?e.toLowerCase():e.toUpperCase()}var H=/[A-Z]/g;function $(e,t,n){var i=e.toLowerCase(),o=n.charAt(t+1);return 0===t||o.toUpperCase()===o?i:"-"+i}var Y=function(e,t){return e===t},G=function(e){function t(e,i){var o;n(this,t);for(var r="Property >>>"+e+"<<< exists at "+i.nodeName+"#"+i._id+" and evaluates to -> "+i[e],s=arguments.length,c=Array(s>2?s-2:0),l=2;l<s;l++)c[l-2]=arguments[l];var u=a(this,(o=t.__proto__||Object.getPrototypeOf(t)).call.apply(o,[this,r].concat(c)));return Error.captureStackTrace&&Error.captureStackTrace(u,t),u.name="PropertyExistsException",u}return s(t,e),t}(Error);function X(){return Reflect.construct(HTMLElement,[],this.__proto__.constructor)}Object.setPrototypeOf(X.prototype,HTMLElement.prototype),Object.setPrototypeOf(X,HTMLElement);var Z,J="throwed",Q=["title","checked","disabled"],ee={},te=function(e){return e in ee||(ee[e]=0),++ee[e]},ne=((Z=function(){var e;return(e=console).log.apply(e,arguments)},function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Y;return function(){for(var t=arguments.length,n=Array(t),i=0;i<t;i++)n[i]=arguments[i];return function(){for(var t=arguments.length,i=Array(t),o=0;o<t;o++)i[o]=arguments[o];return function(){return e.apply(void 0,[].concat(n,i))?Z.apply(void 0,arguments):void 0}}}})()(!0),function(e){function o(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments[1];n(this,o);var i=a(this,(o.__proto__||Object.getPrototypeOf(o)).call(this));i._reduceProps=function(e,t){var n=e.props,r=e.shouldUpdate,s=i._hasKeys[t];if(-1===Q.indexOf(t)&&s)throw new G(t,i);var a="_"+t,l=n[t],u=i[a];return r||i.shouldUpdateCallback(l,u)?(i[a]=l,i._props[t]=l,s&&c(o.prototype.__proto__||Object.getPrototypeOf(o.prototype),t,l,i),{props:n,shouldUpdate:!0}):{props:n,shouldUpdate:!1}},i._makeContextReady=function(){var e=(arguments.length>0&&void 0!==arguments[0]?arguments[0]:{}).detail;i.contextNode&&(clearTimeout(i.timeoutId),i.timeoutId=setTimeout(function(){i.contextCallback(i.contextNode,e)},10)),i.unContextEnabled&&i.unContextEnabled(),i.unContextEnabled=V("context/enabled",i._makeContextReady)},i._initialise(e,t),i._id=te(i.nodeName),i._props={},i._hasKeys={},i.reRender=U(function(){return i.render()},50);var r=i.constructor.observedAttributes;return Array.isArray(r)&&r.forEach(function(e){var t,n=q(e),o=n in i;if(-1===Q.indexOf(n)&&o)throw new G(n,i);i._hasKeys[n]=o,Object.defineProperty(i,n,t={get:function(){return this["_"+n]},set:function(e){var i="_"+n;this.shouldUpdateCallback(this[i],e)&&(this[i]=e,this._props[n]=e,o&&c(t.__proto__||Object.getPrototypeOf(t),n,e,this),this._isConnected&&this._hasRendered&&this.reRender())}})}),i}return s(o,X),i(o,[{key:"_initialise",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;this._styles=e,this._template=t,this._hasTemplate=!!t,this._hasRendered=!1,this._isConnected=!1}},{key:"connectedCallback",value:function(){var e=this;if(!this._isConnected){this._isConnected=!0;var t=this.constructor.observedAttributes;this.initialClassName=this.className,Array.isArray(t)&&t.forEach(function(t){var n=q(t);if(e.hasAttribute(t)){var i=function(e,t){if("function"==typeof e.hasAttribute&&!e.hasAttribute(t))return!1;var n=e.value;return t?n=e.getAttribute(t):t=e.name,n=C(n,t)}(e,t),r=e._hasKeys[n];e["_"+n]=i,e._props[n]=i,r&&c(o.prototype.__proto__||Object.getPrototypeOf(o.prototype),n,i,e)}})}this._appendStyles(),this.render(),this.contextCallback&&this._makeContextReady()}},{key:"attributeChangedCallback",value:function(e,t,n){this.shouldUpdateCallback(n,t)&&(this[q(e)]=C(n))}},{key:"batchProps",value:function(e){var t=this.constructor.observedAttributes;Object.keys(e).filter(function(e){return t.indexOf(e.replace(H,$))>-1}).reduce(this._reduceProps,{props:e,shouldUpdate:!1}).shouldUpdate&&this._isConnected&&this._hasRendered&&this.render()}},{key:"shouldUpdateCallback",value:function(e,t){return e!==t}},{key:"disconnectedCallback",value:function(){this.unContextEnabled&&this.unContextEnabled(),this._isConnected=!1}},{key:"_appendStyles",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this;if(this._styles){var t=document.createElement("style"),n=document.createTextNode(this._styles);t.appendChild(n),e.insertAdjacentElement?e.insertAdjacentElement("afterbegin",t):e.appendChild(t)}}},{key:"render",value:function(){var e=this,n=!this._hasRendered;if(this.willRenderCallback(n),this._hasTemplate){var i=this._template;try{if(n){for(var s=document.createDocumentFragment(),a=[];this.firstChild;)a.push(this.firstChild),s.appendChild(this.firstChild);this._lightDOMRefs=a,this.childrenFragment=s}else this._lightDOMRefs.forEach(function(t){var n=t.cloneNode(!1);g(t),g(n),e.childrenFragment.appendChild(n)});var c=i(this._props,this.childrenFragment),l=document.createDocumentFragment();if(Array.isArray(c))c.forEach(function(e){l.appendChild(e)});else if(c){if("string"==typeof c){var u=new Error(J);throw console.error("\n%cWeb Component %c"+this.nodeName+"%c#"+this._id+" does not accept string as a return from a template. Maybe use bel?\n\nStack Trace: "+u.stack+"\n","color: #580000; font-size: 14px; line-height:16px;","background: #8b0000; color: #FFF; font-size: 14px; line-height:16px;","color: #580000; font-size: 14px; line-height:16px;"),u}l.appendChild(c)}if(n)r(o.prototype.__proto__||Object.getPrototypeOf(o.prototype),"appendChild",this).call(this,l);else{var d=this.cloneNode(!1);d._isMorphing=!0,d.appendChild(l),this._isMorphing=!0,function(e,n){if("object"!==(void 0===e?"undefined":t(e)))throw new Error("componentMorph: oldTree should be an object");if("object"!==(void 0===n?"undefined":t(n)))throw new Error("componentMorph: newTree should be an object");_(n,e)}(this,d),function(){for(var e=void 0;e=k.pop();)delete e.isSameNode;k=[]}(),this._isMorphing=!1}}catch(u){u.message!==J&&console.error("\n%cWeb Component %c"+this.nodeName+"%c#"+this._id+" has an error while loading its template:\n"+u+"\n\nStack Trace: "+u.stack+"\n","color: #580000; font-size: 14px; line-height:16px;","background: #8b0000; color: #FFF; font-size: 14px; line-height:16px;","color: #580000; font-size: 14px; line-height:16px;")}}this._hasRendered=!0,this.didRenderCallback(n)}},{key:"willRenderCallback",value:function(e){}},{key:"didRenderCallback",value:function(e){}},{key:"appendChild",value:function(e){!this._isMorphing&&this._hasTemplate&&this._hasRendered?(this._lightDOMRefs.push(e),this.render()):r(o.prototype.__proto__||Object.getPrototypeOf(o.prototype),"appendChild",this).call(this,e)}},{key:"skipChildren",value:function(){return!this._isMorphing}},{key:"enableContext",value:function(){var e=this.nodeName.toLowerCase();this.__isContext=!0,this.__contextName=e,z("context/enabled",e)}},{key:"selectContext",value:function(e){this.__selectedContext=e&&e.toLowerCase()}},{key:"innerText",set:function(e){if(this._hasTemplate&&this._hasRendered){var t=document.createTextNode(e);this._lightDOMRefs=[t],this.render()}else c(o.prototype.__proto__||Object.getPrototypeOf(o.prototype),"innerText",e,this)}},{key:"textContent",set:function(e){if(this._hasTemplate&&this._hasRendered){var t=document.createTextNode(e);this._lightDOMRefs=[t],this.render()}else c(o.prototype.__proto__||Object.getPrototypeOf(o.prototype),"textContent",e,this)}},{key:"innerHTML",set:function(e){if(this._hasTemplate&&this._hasRendered){var t=document.createElement("div");t.innerHTML=e,this._lightDOMRefs=Array.from(t.children),this.render()}else c(o.prototype.__proto__||Object.getPrototypeOf(o.prototype),"innerHTML",e,this)}},{key:"contextNode",get:function(){for(var e=this.__selectedContext,t=this.parentNode;t&&(!t.__isContext||e&&e!==t.__contextName);)t=t.parentNode;return!(!t||!t.__isContext)&&t}}],[{key:"uuidv4",value:function(){return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,function(e){var t=16*Math.random()|0;return("x"==e?t:3&t|8).toString(16)})}}]),o}()),ie={},oe=function(e){function t(){return n(this,t),a(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return s(t,ne),i(t,[{key:"_appendStyles",value:function(){t.appendGlobalStyles(this._styles,this.nodeName)}}],[{key:"appendGlobalStyles",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:ne.uuidv4();if(e&&!ie[e]){var n=document.createElement("style"),i=document.createTextNode(e);n.appendChild(i),n.setAttribute("data-c-name",t.toLowerCase()),document.querySelector("head").appendChild(n),ie[e]=!0}}}]),t}(),re=".o-sticky-container {\n  position: relative;\n  display: block; }\n\n.o-sticky-container--debug {\n  background: rgba(255, 255, 0, 0.5); }\n  .o-sticky-container--debug::before {\n    content: ''; }\n  .o-sticky-container--debug.is-sticky-container-active {\n    background: green; }\n    .o-sticky-container--debug.is-sticky-container-active::before {\n      content: 'is-active'; }\n  .o-sticky-container--debug.is-sticky-container-idle::before {\n    content: 'is-idle'; }\n",se=".o-sticky {\n  display: block; }\n\n.o-sticky__placeholder {\n  display: block;\n  height: 0; }\n\n.o-sticky__box {\n  display: block; }\n  .is-sticky-sticky > .o-sticky__box {\n    position: fixed;\n    top: 0;\n    z-index: 1020; }\n  .is-sticky-bottom > .o-sticky__box {\n    position: absolute;\n    bottom: 0;\n    z-index: 1020; }\n  .is-sticky-in-flow > .o-sticky__box {\n    position: static; }\n\n.o-sticky--debug > .o-sticky__box {\n  background: rgba(0, 0, 255, 0.5);\n  color: #fff; }\n  .o-sticky--debug > .o-sticky__box::before, .o-sticky--debug > .o-sticky__box::after {\n    content: '';\n    color: yellow; }\n\n.o-sticky--debug.is-sticky-sticky > .o-sticky__box {\n  background: rgba(255, 0, 0, 0.7); }\n  .o-sticky--debug.is-sticky-sticky > .o-sticky__box::before {\n    content: 'is-sticky'; }\n\n.o-sticky--debug.is-sticky-bottom > .o-sticky__box {\n  background: rgba(255, 165, 0, 0.7); }\n  .o-sticky--debug.is-sticky-bottom > .o-sticky__box::before {\n    content: 'is-bottom'; }\n\n.o-sticky--debug.is-sticky-in-flow > .o-sticky__box::before {\n  content: 'is-in-flow'; }\n\n.o-sticky--debug.is-sticky-scroll-up > .o-sticky__box::after {\n  content: 'is-scroll-up'; }\n\n.o-sticky--debug.is-sticky-scroll-down > .o-sticky__box::after {\n  content: 'is-scroll-down'; }\n",ae=/\n[\s]+$/,ce=/^\n[\s]+/,le=/[\s]+$/,ue=/^[\s]+/,de=/[\n\s]+/g,he=["a","abbr","b","bdi","bdo","br","cite","data","dfn","em","i","kbd","mark","q","rp","rt","rtc","ruby","s","amp","small","span","strong","sub","sup","time","u","var","wbr"],fe=["code","pre","textarea"],pe=function e(t,n){if(Array.isArray(n))for(var i,o,r=t.nodeName.toLowerCase(),s=!1,a=0,c=n.length;a<c;a++){var l=n[a];if(Array.isArray(l))e(t,l);else{("number"==typeof l||"boolean"==typeof l||"function"==typeof l||l instanceof Date||l instanceof RegExp)&&(l=l.toString());var u=t.childNodes[t.childNodes.length-1];if("string"==typeof l)s=!0,u&&"#text"===u.nodeName?u.nodeValue+=l:(l=document.createTextNode(l),t.appendChild(l),u=l),a===c-1&&(s=!1,-1===he.indexOf(r)&&-1===fe.indexOf(r)?""===(i=u.nodeValue.replace(ce,"").replace(le,"").replace(ae,"").replace(de," "))?t.removeChild(u):u.nodeValue=i:-1===fe.indexOf(r)&&(o=0===a?"":" ",i=u.nodeValue.replace(ce,o).replace(ue," ").replace(le,"").replace(ae,"").replace(de," "),u.nodeValue=i));else if(l&&l.nodeType){s&&(s=!1,-1===he.indexOf(r)&&-1===fe.indexOf(r)?""===(i=u.nodeValue.replace(ce,"").replace(ae,"").replace(de," "))?t.removeChild(u):u.nodeValue=i:-1===fe.indexOf(r)&&(i=u.nodeValue.replace(ue," ").replace(ce,"").replace(ae,"").replace(de," "),u.nodeValue=i));var d=l.nodeName;d&&(r=d.toLowerCase()),t.appendChild(l)}}}};function ve(e,t){var n,i;return[(n=document.createElement("div"),n.setAttribute("class","o-sticky__placeholder js-sticky__placeholder"),n),(i=document.createElement("div"),i.setAttribute("class","o-sticky__box js-sticky__box"),pe(i,[t]),i)]}var ye="pageYOffset"in window?function(){return window.pageYOffset}:function(){var e=document,t=e.body;return e.documentElement.scrollTop||t.scrollTop||0};var be,_e=function(){if(!window.getComputedStyle)return null;var e=window.getComputedStyle(document.documentElement,""),t=(Array.prototype.slice.call(e).join("").match(/-(moz|webkit|ms)-/)||""===e.OLink&&["","o"])[1];return{dom:"WebKit|Moz|MS|O".match(new RegExp("("+t+")","i"))[1],lowercase:t,css:"-"+t+"-",js:t[0].toUpperCase()+t.slice(1)}}().lowercase,me=function(){var e=window.requestAnimationFrame||window[_e+"RequestAnimationFrame"];if(e)e=e.bind(window);else{var t=0;e=function(e){var n=Date.now(),i=Math.max(0,16-(n-t)),o=setTimeout(function(){e(n+i)},i);return t=n+i,o}}return e}(),ke=(be=(be=window.cancelAnimationFrame||window[_e+"CancelAnimationFrame"]||window[_e+"CancelRequestAnimationFrame"])?be.bind(window):function(e){clearTimeout(e)},void 0),ge=0,xe=["resize","orientationchange"].join(" "),Ce=[xe,"scroll","touchstart","touchmove","touchend","pageshow","load"].join(" "),we=function(){function e(){var t=this;n(this,e),this._change=function(){var e=(arguments.length>0&&void 0!==arguments[0]?arguments[0]:{}).type;xe.indexOf(e)>=0&&(t.forceRepaint=!0),t.framePending||me(function(){for(var e=t.containerNodes,n=t.forceRepaint,i=t.lastScrollTop,o=t.isDirectionFrozen,r=t.lastDirection,s=ye(),a=s-i,c=o?r:a>0?1:a<0?-1:r,l=0,u=e.length;l<u;l++){var d=e[l],h=d.getBoundingClientRect(),f=h.top,p=h.bottom;z("sticky-container/"+(f<=0&&p>=0?"active":"idle"),{containerTop:f,containerBottom:p,direction:c,forceRepaint:n},d)}t.lastScrollTop=s,t.lastDirection=c,t.framePending=!1,t.forceRepaint=!1})},this._freezeDirection=function(){t.isDirectionFrozen=!0,t.lastDirection=-1},this._thawDirection=function(){t.isDirectionFrozen=!1},this.forceRepaint=!1,this.framePending=!1,this.lastScrollTop=0,this.isDirectionFrozen=!1,this.containerNodes=[],this._on()}return i(e,[{key:"addContainer",value:function(e){this.containerNodes.push(e),this._change()}},{key:"_on",value:function(){this._off(),this._unChange=P(window,Ce,this._change),this._unFreezeDirection=V("sticky-container/freeze-direction",this._freezeDirection),this._unThawDirection=V("sticky-container/thaw-direction",this._thawDirection)}},{key:"_off",value:function(){this._unChange&&this._unChange(),this._unFreezeDirection&&this._unFreezeDirection(),this._unThawDirection&&this._unThawDirection()}},{key:"remove",value:function(e){var t,n,i;e&&(t=this.containerNodes,n=e,(i=t.indexOf(n))>-1&&t.splice(i,1)),--ge<=0&&ke&&(this._off(),delete this.containerNodes,ke=null)}}]),e}();function Ae(){return ke||(ke=new we),ge++,ke}function Ne(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];for(var i=t.length,o={},r=0;r<i;++r){var s=t[r];o[s.toUpperCase()]=s}return o}function Oe(e,t){for(var n=[],i=Object.keys(t),o=i.length,r=0;r<o;++r){var s=i[r];n.push(s+":"+t[s]+";")}e.style.cssText=n.join("")}var Se=Ne("IS_IN_FLOW","IS_STICKY","IS_BOTTOM"),Te=function(){function e(t){n(this,e),Ee.call(this),this.wcNode=t,this.state=Se.IS_IN_FLOW,this.lastDirection=0,this.placeholder=t.querySelector(e.DEFAULTS.placeholderClass),this.box=t.querySelector(e.DEFAULTS.boxClass),this.spy=Ae()}return i(e,[{key:"_on",value:function(){this._off(),this._unActive=V("sticky-container/active",this._update,this._contextNode),this._unIdle=V("sticky-container/idle",this._update,this._contextNode)}},{key:"_off",value:function(){this._unActive&&this._unActive(),this._unIdle&&this._unIdle()}},{key:"destroy",value:function(){this._off(),this.spy.remove(),delete this.spy,delete this.roodNode,delete this.placeholder,delete this.box,delete this._contextNode}},{key:"contextNode",set:function(e){this._contextNode=e,this._on()}}]),e}();Te.DEFAULTS={placeholderClass:".js-sticky__placeholder",boxClass:".js-sticky__box",isStickyClass:"is-sticky-sticky",isBottomClass:"is-sticky-bottom",isScrollUp:"is-sticky-scroll-up",isScrollDown:"is-sticky-scroll-down"};var Ee=function(){var e=this;this._update=function(t){var n=t.detail,i=n.containerBottom,o=n.direction,r=n.forceRepaint,s=e.wcNode,a=e.state,c=o!==e.lastDirection,l=s.offsetHeight,u=s.offsetWidth,d=s.getBoundingClientRect(),h=d.left,f=d.top,p=f>0,v=f<=0&&i>=l,y=f<=0&&i<l;c&&1===o?(T(s,Te.DEFAULTS.isScrollDown),j(s,Te.DEFAULTS.isScrollUp)):c&&-1===o&&(T(s,Te.DEFAULTS.isScrollUp),j(s,Te.DEFAULTS.isScrollDown)),v&&(r||a!==Se.IS_STICKY)&&(e.state=Se.IS_STICKY,T(s,Te.DEFAULTS.isStickyClass),j(s,Te.DEFAULTS.isBottomClass),Oe(e.placeholder,{height:l+"px"}),Oe(e.box,{left:h+"px",width:u+"px"})),y&&(r||a!==Se.IS_BOTTOM)&&(e.state=Se.IS_BOTTOM,j(s,Te.DEFAULTS.isStickyClass),T(s,Te.DEFAULTS.isBottomClass),Oe(e.placeholder,{height:l+"px"}),Oe(e.box,{left:h+"px",width:u+"px"})),p&&(r||a!==Se.IS_IN_FLOW)&&(e.state=Se.IS_IN_FLOW,j(s,Te.DEFAULTS.isStickyClass),j(s,Te.DEFAULTS.isBottomClass),Oe(e.placeholder,{height:""}),Oe(e.box,{left:"",width:""}))}},De=Ne("IS_IDLE","IS_ACTIVE"),je=function(){function e(t){var i=this;n(this,e),this._active=function(){i.state!==De.IS_ACTIVE&&(i.state=De.IS_ACTIVE,T(i.roodNode,e.DEFAULTS.isActiveClass),j(i.roodNode,e.DEFAULTS.isIdleClass))},this._idle=function(){i.state!==De.IS_IDLE&&(i.state=De.IS_IDLE,T(i.roodNode,e.DEFAULTS.isIdleClass),j(i.roodNode,e.DEFAULTS.isActiveClass))},this.roodNode=t,this.state=De.IS_IDLE,this.spy=Ae(),this.spy.addContainer(t),this._on()}return i(e,[{key:"_on",value:function(){this._off(),this._unActive=V("sticky-container/active",this._active,this.roodNode),this._unIdle=V("sticky-container/idle",this._idle,this.roodNode)}},{key:"_off",value:function(){this._unActive&&this._unActive(),this._unIdle&&this._unIdle()}},{key:"destroy",value:function(){this._off(),this.spy.remove(this.roodNode),delete this.spy,delete this.roodNode}}]),e}();je.DEFAULTS={isActiveClass:"is-sticky-container-active",isIdleClass:"is-sticky-container-idle"};var Le,Ie,Fe,Re=function(e){function t(){n(this,t);var e=a(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,re));return e.enableContext(),e}return s(t,oe),i(t,null,[{key:"observedAttributes",get:function(){return["debug"]}}]),i(t,[{key:"connectedCallback",value:function(){r(t.prototype.__proto__||Object.getPrototypeOf(t.prototype),"connectedCallback",this).call(this);var e=this.debug;this.className=d(this.initialClassName,"o-sticky-container js-sticky-container",{"o-sticky-container--debug":e}),this.stickyContainer=new je(this)}},{key:"disconnectedCallback",value:function(){this.stickyContainer&&(this.stickyContainer.destroy(),delete this.stickyContainer)}}]),t}(),Pe=function(e){function t(){n(this,t);var e=a(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,se,ve));return e.selectContext("axa-sticky-container"),e}return s(t,oe),i(t,null,[{key:"observedAttributes",get:function(){return["debug"]}}]),i(t,[{key:"willRenderCallback",value:function(){var e=this.debug;this.className=d(this.initialClassName,"o-sticky js-sticky",{"o-sticky--debug":e})}},{key:"didRenderCallback",value:function(){this.sticky&&this.sticky.destroy(),this.sticky=new Te(this);var e=this.contextNode;e&&this.contextCallback(e)}},{key:"contextCallback",value:function(e){this.sticky&&(this.sticky.contextNode=e)}},{key:"disconnectedCallback",value:function(){this.sticky&&(this.sticky.destroy(),delete this.sticky)}}]),t}();return Le=function(){window.customElements.define("axa-sticky-container",Re),window.customElements.define("axa-sticky",Pe)},Ie=0,Fe=function(){if(0===Ie)try{Le.apply(void 0,arguments),Ie+=1,document.removeEventListener("DOMContentLoaded"),document.removeEventListener("WebComponentsReady")}catch(e){}},document.addEventListener("DOMContentLoaded",Fe,!1),document.addEventListener("WebComponentsReady",Fe,!1),{AXASticky:Pe,AXAStickyContainer:Re}});
