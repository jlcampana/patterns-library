!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):e.StyleGuideWebComponent=t()}(this,function(){"use strict";var e=1,t=3,n=8;function r(r,i){var a=r.nodeType,s=r.nodeName;a===e&&function(e,t){for(var n=t.attributes,r=e.attributes,o=null,i=null,a=null,s=null,u=r.length-1;u>=0;--u)if(s=r[u],a=s.name,o=s.namespaceURI,i=s.value,o){var l=s.localName;t.getAttributeNS(o,l||a)!==i&&t.setAttributeNS(o,a,i)}else t.hasAttribute(a)?t.getAttribute(a)!==i&&("null"===i||"undefined"===i?t.removeAttribute(a):t.setAttribute(a,i)):t.setAttribute(a,i);for(var c=n.length-1;c>=0;--c)!1!==(s=n[c]).specified&&(a=s.name,(o=s.namespaceURI)?(a=s.localName||a,e.hasAttributeNS(o,a)||t.removeAttributeNS(o,a)):e.hasAttributeNS(null,a)||t.removeAttribute(a))}(r,i),a!==t&&a!==n||i.nodeValue===r.nodeValue||(i.nodeValue=r.nodeValue),"INPUT"===s?function(e,t){var n=e.value,r=t.value;o(e,t,"checked"),o(e,t,"disabled"),n!==r&&(t.setAttribute("value",n),t.value=n);"null"===n&&(t.value="",t.removeAttribute("value"));e.hasAttributeNS(null,"value")?"range"===t.type&&(t.value=n):t.removeAttribute("value")}(r,i):"OPTION"===s?o(r,i,"selected"):"TEXTAREA"===s&&function(e,t){var n=e.value;n!==t.value&&(t.value=n);if(t.firstChild&&t.firstChild.nodeValue!==n){if(""===n&&t.firstChild.nodeValue===t.placeholder)return;t.firstChild.nodeValue=n}}(r,i)}function o(e,t,n){e[n]!==t[n]&&(t[n]=e[n],e[n]?t.setAttribute(n,""):t.removeAttribute(n))}var i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},a=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")},s=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),u=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},l=function e(t,n,r){null===t&&(t=Function.prototype);var o=Object.getOwnPropertyDescriptor(t,n);if(void 0===o){var i=Object.getPrototypeOf(t);return null===i?void 0:e(i,n,r)}if("value"in o)return o.value;var a=o.get;return void 0!==a?a.call(r):void 0},c=function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)},d=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t},p=function e(t,n,r,o){var i=Object.getOwnPropertyDescriptor(t,n);if(void 0===i){var a=Object.getPrototypeOf(t);null!==a&&e(a,n,r,o)}else if("value"in i&&i.writable)i.value=r;else{var s=i.set;void 0!==s&&s.call(o,r)}return r},f=function(){return function(e,t){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return function(e,t){var n=[],r=!0,o=!1,i=void 0;try{for(var a,s=e[Symbol.iterator]();!(r=(a=s.next()).done)&&(n.push(a.value),!t||n.length!==t);r=!0);}catch(e){o=!0,i=e}finally{try{!r&&s.return&&s.return()}finally{if(o)throw i}}return n}(e,t);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),h=function(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}return Array.from(e)},v=3;function y(e,t){return t?e?e.isSameNode&&e.isSameNode(t)?t:e.tagName!==t.tagName?e:(r(e,t),t.skipChildren&&t.skipChildren()||function(e,t){for(var n=void 0,r=void 0,o=void 0,i=void 0,a=0,s=0;n=t.childNodes[s],r=e.childNodes[s-a],n||r;s++)if(r)if(n)if(b(r,n))(o=y(r,n))!==n&&(t.replaceChild(o,n),a++);else{i=null;for(var u=s;u<t.childNodes.length;u++)if(b(t.childNodes[u],r)){i=t.childNodes[u];break}i?((o=y(r,i))!==i&&a++,t.insertBefore(o,n)):r.id||n.id?(t.insertBefore(r,n),a++):(o=y(r,n))!==n&&(t.replaceChild(o,n),a++)}else t.appendChild(r),a++;else t.removeChild(n),s--}(e,t),t):null:e}function b(e,t){return e.id?e.id===t.id:e.isSameNode?e.isSameNode(t):e.tagName===t.tagName&&(e.type===v&&e.nodeValue===t.nodeValue)}var m=[];var _=/^\s*(?:true|false|null|undefined|-?[0-9]+\.?[0-9]*|[[{](?:.|[\r\n])*[\]}])\s*$/;function g(e,t){var n=e;if(e&&t!==e){if(_.test(e))try{n=JSON.parse(e)}catch(n){console.error("Attribute "+t+" has an error:\n"+n+"\n",e)}}else n=!0;return n}var x=function(){try{var e=new window.CustomEvent("test",{cancelable:!0});if(e.preventDefault(),!0!==e.defaultPrevented)throw new Error("Could not prevent default");return window.CustomEvent}catch(e){}return t;function t(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=t.bubbles,r=void 0!==n&&n,o=t.cancelable,i=void 0!==o&&o,a=t.detail,s=void 0===a?void 0:a,u=document.createEvent("CustomEvent");u.initCustomEvent(e,r,i,s);var l=u.preventDefault;return u.preventDefault=function(){l.call(u);try{Object.defineProperty(this,"defaultPrevented",{get:function(){return!0}})}catch(e){this.defaultPrevented=!0}},u}}();function C(e,t,n){var r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},o=new x(t,u({},r,{detail:n}));return e.dispatchEvent(o)}var O=function(){var e=!1;if("undefined"!=typeof window&&"function"==typeof window.addEventListener){var t=Object.defineProperty({},"passive",{get:function(){e=!0}}),n=function(){};window.addEventListener("testPassiveEventSupport",n,t),window.removeEventListener("testPassiveEventSupport",n,t)}return e}();function w(e){for(var t=e.className,n=!1,r=!0,o=arguments.length,i=Array(o>1?o-1:0),a=1;a<o;a++)i[a-1]=arguments[a];var s=i.map(function(e){var o=(i=e,new RegExp("^"+i+"$|^"+i+"\\s|\\s"+i+"\\s|\\s"+i+"$",a)).test(t);var i,a;o?n=!0:r=!1;return{className:e,hasClass:o}});return!(!r&&!n)&&s}var k=/\s+/,A={transitionend:function(){for(var e=document.createElement("div").style,t={transition:"transitionend",OTransition:"oTransitionEnd otransitionend",MozTransition:"transitionend",WebkitTransition:"webkitTransitionEnd"},n=Object.keys(t),r=n.length,o=void 0,i=0;i<r;++i)if(void 0!==e[o=n[i]])return t[o];return""}()};function E(e,t,n,r){var o=arguments.length>4&&void 0!==arguments[4]?arguments[4]:{},a=o.capture,s=void 0!==a&&a,u=o.passive,l=void 0===u||u;if(A[t]&&(t=A[t]),!e||!t)return null;var c=void 0===n?"undefined":i(n),d=n&&"string"===c;if("function"===c){if(r){var p=r;s=p.capture,l=p.passive}r=n}for(var f=O?{capture:s,passive:l}:s,h=d?function(t){var o=t.target;for(;!w(o,n)&&o!==e;)o=o.parentNode;if(o!==e)return r(t,o)}:r,v=t.split(k),y=v.length,b=0;b<y;++b)e.addEventListener(v[b],h,f);return function t(){for(var n=0;n<y;++n)e.removeEventListener(v[n],h,f);!function(e,t){if(!e)return!1;for(var n=Object.keys(e),r=n.length,o=0;o<r;++o){var i=n[o];if(e[i]===t)return delete e[i]}}(this,t)}}function N(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},r=n.leading,o=void 0!==r&&r,i=n.trailing,a=void 0===i||i,s=n.maxWait,u=void 0!==s&&s,l=void 0,c=void 0,d=void 0,p=void 0,f=!1,v=t!==u,y=!1!==u;function b(){for(var n=arguments.length,r=Array(n),i=0;i<n;i++)r[i]=arguments[i];return l=r,v&&(c&&clearTimeout(c),c=setTimeout(m,t)),y&&!d&&(d=setTimeout(_,u)),o&&!f&&(f=!0,p=e.apply(void 0,h(l))),p}return b.flush=function(){(c||d)&&(p=e.apply(void 0,h(l)));return x(),p},b.cancel=x,b;function m(){d&&clearTimeout(d),g()}function _(){c&&clearTimeout(c),g()}function g(){a&&(p=e.apply(void 0,h(l))),c=null,d=null,f=!1}function x(){c&&(clearTimeout(c),c=null),d&&(clearTimeout(d),d=null),l=void 0,f=!1}}var T={};function j(e,t){var n=E(arguments.length>2&&void 0!==arguments[2]?arguments[2]:document,e,t);T[e]||(T[e]={count:0});var r,o=T[e];return o.count++,o.onsubscribe||(o.onsubscribe=N((r=e,function(){C(document,"pubsub/onsubscribe",r),C(document,"pubsub/onsubscribe/"+r,r),T[r]&&delete T[r].unsubscribe}),100)),o.onsubscribe(),function(){o.count--,n.call(this),o.count<=0&&delete T[e]}}E(document,"pubsub/onsubscribe",function(e){var t=e.detail;T[t]||(T[t]={count:0});var n=T[t],r=n.queue;Array.isArray(r)&&(r.forEach(function(e){var t=f(e,3),n=t[0],r=t[1],o=t[2];C(o,n,r)}),delete n.queue)});var P=/(?:^\w|[A-Z]|\b\w|\s+|[-_]+)/g,S=/[-_]+/g;function R(e){return e.replace(P,L)}function L(e,t){return 0==+e||S.test(e)?"":0===t?e.toLowerCase():e.toUpperCase()}var M=/[A-Z]/g;function V(e,t,n){var r=e.toLowerCase(),o=n.charAt(t+1);return 0===t||o.toUpperCase()===o?r:"-"+r}var D=function(e,t){return e===t},U=function(e){function t(e,n){var r;a(this,t);for(var o="Property >>>"+e+"<<< exists at "+n.nodeName+"#"+n._id+" and evaluates to -> "+n[e],i=arguments.length,s=Array(i>2?i-2:0),u=2;u<i;u++)s[u-2]=arguments[u];var l=d(this,(r=t.__proto__||Object.getPrototypeOf(t)).call.apply(r,[this,o].concat(s)));return Error.captureStackTrace&&Error.captureStackTrace(l,t),l.name="PropertyExistsException",l}return c(t,e),t}(Error);function F(){return Reflect.construct(HTMLElement,[],this.__proto__.constructor)}Object.setPrototypeOf(F.prototype,HTMLElement.prototype),Object.setPrototypeOf(F,HTMLElement);var z,I,W,q,H="throwed",$=["title","checked","disabled"],K={},G=function(e){return e in K||(K[e]=0),++K[e]},B=((z=function(){var e;return(e=console).log.apply(e,arguments)},function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:D;return function(){for(var t=arguments.length,n=Array(t),r=0;r<t;r++)n[r]=arguments[r];return function(){for(var t=arguments.length,r=Array(t),o=0;o<t;o++)r[o]=arguments[o];return function(){return e.apply(void 0,[].concat(n,r))?z.apply(void 0,arguments):void 0}}}})()(!0),function(e){function t(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",n=arguments[1];a(this,t);var r=d(this,(t.__proto__||Object.getPrototypeOf(t)).call(this));r._reduceProps=function(e,n){var o=e.props,i=e.shouldUpdate,a=r._hasKeys[n];if(-1===$.indexOf(n)&&a)throw new U(n,r);var s="_"+n,u=o[n],l=r[s];return i||r.shouldUpdateCallback(u,l)?(r[s]=u,r._props[n]=u,a&&p(t.prototype.__proto__||Object.getPrototypeOf(t.prototype),n,u,r),{props:o,shouldUpdate:!0}):{props:o,shouldUpdate:!1}},r._makeContextReady=function(){var e=(arguments.length>0&&void 0!==arguments[0]?arguments[0]:{}).detail;r.contextNode&&(clearTimeout(r.timeoutId),r.timeoutId=setTimeout(function(){r.contextCallback(r.contextNode,e)},10)),r.unContextEnabled&&r.unContextEnabled(),r.unContextEnabled=j("context/enabled",r._makeContextReady)},r._initialise(e,n),r._id=G(r.nodeName),r._props={},r._hasKeys={},r.reRender=N(function(){return r.render()},50);var o=r.constructor.observedAttributes;return Array.isArray(o)&&o.forEach(function(e){var t,n=R(e),o=n in r;if(-1===$.indexOf(n)&&o)throw new U(n,r);r._hasKeys[n]=o,Object.defineProperty(r,n,t={get:function(){return this["_"+n]},set:function(e){var r="_"+n;this.shouldUpdateCallback(this[r],e)&&(this[r]=e,this._props[n]=e,o&&p(t.__proto__||Object.getPrototypeOf(t),n,e,this),this._isConnected&&this._hasRendered&&this.reRender())}})}),r}return c(t,F),s(t,[{key:"_initialise",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;this._styles=e,this._template=t,this._hasTemplate=!!t,this._hasRendered=!1,this._isConnected=!1}},{key:"connectedCallback",value:function(){var e=this;if(!this._isConnected){this._isConnected=!0;var n=this.constructor.observedAttributes;this.initialClassName=this.className,Array.isArray(n)&&n.forEach(function(n){var r=R(n);if(e.hasAttribute(n)){var o=function(e,t){if("function"==typeof e.hasAttribute&&!e.hasAttribute(t))return!1;var n=e.value;return t?n=e.getAttribute(t):t=e.name,n=g(n,t)}(e,n),i=e._hasKeys[r];e["_"+r]=o,e._props[r]=o,i&&p(t.prototype.__proto__||Object.getPrototypeOf(t.prototype),r,o,e)}})}this._appendStyles(),this.render(),this.contextCallback&&this._makeContextReady()}},{key:"attributeChangedCallback",value:function(e,t,n){this.shouldUpdateCallback(n,t)&&(this[R(e)]=g(n))}},{key:"batchProps",value:function(e){var t=this.constructor.observedAttributes,n=void 0===t?[]:t;Object.keys(e).filter(function(e){return n.indexOf(e.replace(M,V))>-1}).reduce(this._reduceProps,{props:e,shouldUpdate:!1}).shouldUpdate&&this._isConnected&&this._hasRendered&&this.render()}},{key:"shouldUpdateCallback",value:function(e,t){return e!==t}},{key:"disconnectedCallback",value:function(){this.unContextEnabled&&this.unContextEnabled(),this._isConnected=!1}},{key:"_appendStyles",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this;if(this._styles){var t=document.createElement("style"),n=document.createTextNode(this._styles);t.appendChild(n),e.insertAdjacentElement?e.insertAdjacentElement("afterbegin",t):e.appendChild(t)}}},{key:"render",value:function(){var e=this,n=!this._hasRendered;if(this.willRenderCallback(n),this._hasTemplate){var r=this._template;try{if(n){for(var o=document.createDocumentFragment(),a=[];this.firstChild;)a.push(this.firstChild),o.appendChild(this.firstChild);this._lightDOMRefs=a,this.childrenFragment=o}else this._lightDOMRefs.forEach(function(t){var n=t.cloneNode(!0);e.childrenFragment.appendChild(n)});var s=r(this._props,this.childrenFragment),u=document.createDocumentFragment();if(Array.isArray(s))s.forEach(function(e){u.appendChild(e)});else if(s){if("string"==typeof s){var c=new Error(H);throw console.error("\n%cWeb Component %c"+this.nodeName+"%c#"+this._id+" does not accept string as a return from a template. Maybe use bel?\n\nStack Trace: "+c.stack+"\n","color: #580000; font-size: 14px; line-height:16px;","background: #8b0000; color: #FFF; font-size: 14px; line-height:16px;","color: #580000; font-size: 14px; line-height:16px;"),c}u.appendChild(s)}if(n)l(t.prototype.__proto__||Object.getPrototypeOf(t.prototype),"appendChild",this).call(this,u);else{var d=this.cloneNode(!1);d._isMorphing=!0,d.appendChild(u),this._isMorphing=!0,function(e,t){if("object"!==(void 0===e?"undefined":i(e)))throw new Error("componentMorph: oldTree should be an object");if("object"!==(void 0===t?"undefined":i(t)))throw new Error("componentMorph: newTree should be an object");y(t,e)}(this,d),function(){for(var e=void 0;e=m.pop();)delete e.isSameNode;m=[]}(),this._isMorphing=!1}}catch(c){c.message!==H&&console.error("\n%cWeb Component %c"+this.nodeName+"%c#"+this._id+" has an error while loading its template:\n"+c+"\n\nStack Trace: "+c.stack+"\n","color: #580000; font-size: 14px; line-height:16px;","background: #8b0000; color: #FFF; font-size: 14px; line-height:16px;","color: #580000; font-size: 14px; line-height:16px;")}}this._hasRendered=!0,this.didRenderCallback(n)}},{key:"willRenderCallback",value:function(e){}},{key:"didRenderCallback",value:function(e){}},{key:"appendChild",value:function(e){!this._isMorphing&&this._hasTemplate&&this._hasRendered?(this._lightDOMRefs.push(e),this.render()):l(t.prototype.__proto__||Object.getPrototypeOf(t.prototype),"appendChild",this).call(this,e)}},{key:"skipChildren",value:function(){return!this._isMorphing}},{key:"enableContext",value:function(){var e=this.nodeName.toLowerCase();this.__isContext=!0,this.__contextName=e,function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:document;T[e]||(T[e]={count:0,queue:[]});var r=T[e].queue;Array.isArray(r)?r.push([e,t,n]):C(n,e,t)}("context/enabled",e)}},{key:"selectContext",value:function(e){this.__selectedContext=e&&e.toLowerCase()}},{key:"innerText",set:function(e){if(this._hasTemplate&&this._hasRendered){var n=document.createTextNode(e);this._lightDOMRefs=[n],this.render()}else p(t.prototype.__proto__||Object.getPrototypeOf(t.prototype),"innerText",e,this)}},{key:"textContent",set:function(e){if(this._hasTemplate&&this._hasRendered){var n=document.createTextNode(e);this._lightDOMRefs=[n],this.render()}else p(t.prototype.__proto__||Object.getPrototypeOf(t.prototype),"textContent",e,this)}},{key:"innerHTML",set:function(e){if(this._hasTemplate&&this._hasRendered){var n=document.createElement("div");n.innerHTML=e,this._lightDOMRefs=Array.from(n.children),this.render()}else p(t.prototype.__proto__||Object.getPrototypeOf(t.prototype),"innerHTML",e,this)}},{key:"contextNode",get:function(){for(var e=this.__selectedContext,t=this.parentNode;t&&(!t.__isContext||e&&e!==t.__contextName);)t=t.parentNode;return!(!t||!t.__isContext)&&t}}],[{key:"uuidv4",value:function(){return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,function(e){var t=16*Math.random()|0;return("x"==e?t:3&t|8).toString(16)})}}]),t}()),Z={},J=function(e){function t(){return a(this,t),d(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return c(t,B),s(t,[{key:"_appendStyles",value:function(){t.appendGlobalStyles(this._styles,this.nodeName)}}],[{key:"appendGlobalStyles",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:B.uuidv4();if(e&&!Z[e]){var n=document.createElement("style"),r=document.createTextNode(e);n.appendChild(r),n.setAttribute("data-c-name",t.toLowerCase()),document.querySelector("head").appendChild(n),Z[e]=!0}}}]),t}(),X=".o-container {\n  padding-right: 15px;\n  padding-left: 15px;\n  width: 100%;\n  margin-right: auto;\n  margin-left: auto;\n  max-width: auto;\n  display: block; }\n  @media (min-width: 576px) {\n    .o-container {\n      max-width: 540px; } }\n  @media (min-width: 768px) {\n    .o-container {\n      max-width: 720px; } }\n  @media (min-width: 992px) {\n    .o-container {\n      max-width: 960px; } }\n  @media (min-width: 1200px) {\n    .o-container {\n      max-width: 1140px; } }\n",Q=/\n[\s]+$/,Y=/^\n[\s]+/,ee=/[\s]+$/,te=/^[\s]+/,ne=/[\n\s]+/g,re=["a","abbr","b","bdi","bdo","br","cite","data","dfn","em","i","kbd","mark","q","rp","rt","rtc","ruby","s","amp","small","span","strong","sub","sup","time","u","var","wbr"],oe=["code","pre","textarea"],ie=function(e,t){var n,r=e.classes,o=void 0===r?"":r;return(n=document.createElement("article")).setAttribute("class","o-container "+String(o)),function e(t,n){if(Array.isArray(n))for(var r,o,i=t.nodeName.toLowerCase(),a=!1,s=0,u=n.length;s<u;s++){var l=n[s];if(Array.isArray(l))e(t,l);else{("number"==typeof l||"boolean"==typeof l||"function"==typeof l||l instanceof Date||l instanceof RegExp)&&(l=l.toString());var c=t.childNodes[t.childNodes.length-1];if("string"==typeof l)a=!0,c&&"#text"===c.nodeName?c.nodeValue+=l:(l=document.createTextNode(l),t.appendChild(l),c=l),s===u-1&&(a=!1,-1===re.indexOf(i)&&-1===oe.indexOf(i)?""===(r=c.nodeValue.replace(Y,"").replace(ee,"").replace(Q,"").replace(ne," "))?t.removeChild(c):c.nodeValue=r:-1===oe.indexOf(i)&&(o=0===s?"":" ",r=c.nodeValue.replace(Y,o).replace(te," ").replace(ee,"").replace(Q,"").replace(ne," "),c.nodeValue=r));else if(l&&l.nodeType){a&&(a=!1,-1===re.indexOf(i)&&-1===oe.indexOf(i)?""===(r=c.nodeValue.replace(Y,"").replace(Q,"").replace(ne," "))?t.removeChild(c):c.nodeValue=r:-1===oe.indexOf(i)&&(r=c.nodeValue.replace(te," ").replace(Y,"").replace(Q,"").replace(ne," "),c.nodeValue=r));var d=l.nodeName;d&&(i=d.toLowerCase()),t.appendChild(l)}}}}(n,[t]),n},ae=function(e){function t(){return a(this,t),d(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,X,ie))}return c(t,J),t}();return I=function(){window.customElements.define("axa-container",ae)},W=0,q=function(){if(0===W)try{I.apply(void 0,arguments),W+=1,document.removeEventListener("DOMContentLoaded"),document.removeEventListener("WebComponentsReady")}catch(e){}},document.addEventListener("DOMContentLoaded",q,!1),document.addEventListener("WebComponentsReady",q,!1),ae});
