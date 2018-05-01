var StyleGuideWebComponent=function(){"use strict";var e=1,t=3,n=8;function r(r,i){var a=r.nodeType,l=r.nodeName;a===e&&function(e,t){for(var n=t.attributes,r=e.attributes,o=null,i=null,a=null,l=null,s=r.length-1;s>=0;--s)if(l=r[s],a=l.name,o=l.namespaceURI,i=l.value,o){var u=l.localName;t.getAttributeNS(o,u||a)!==i&&t.setAttributeNS(o,a,i)}else t.hasAttribute(a)?t.getAttribute(a)!==i&&("null"===i||"undefined"===i?t.removeAttribute(a):t.setAttribute(a,i)):t.setAttribute(a,i);for(var c=n.length-1;c>=0;--c)!1!==(l=n[c]).specified&&(a=l.name,(o=l.namespaceURI)?(a=l.localName||a,e.hasAttributeNS(o,a)||t.removeAttributeNS(o,a)):e.hasAttributeNS(null,a)||t.removeAttribute(a))}(r,i),a!==t&&a!==n||i.nodeValue===r.nodeValue||(i.nodeValue=r.nodeValue),"INPUT"===l?function(e,t){var n=e.value,r=t.value;o(e,t,"checked"),o(e,t,"disabled"),n!==r&&(t.setAttribute("value",n),t.value=n);"null"===n&&(t.value="",t.removeAttribute("value"));e.hasAttributeNS(null,"value")?"range"===t.type&&(t.value=n):t.removeAttribute("value")}(r,i):"OPTION"===l?o(r,i,"selected"):"TEXTAREA"===l&&function(e,t){var n=e.value;n!==t.value&&(t.value=n);if(t.firstChild&&t.firstChild.nodeValue!==n){if(""===n&&t.firstChild.nodeValue===t.placeholder)return;t.firstChild.nodeValue=n}}(r,i)}function o(e,t,n){e[n]!==t[n]&&(t[n]=e[n],e[n]?t.setAttribute(n,""):t.removeAttribute(n))}var i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},a=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")},l=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},u=function e(t,n,r){null===t&&(t=Function.prototype);var o=Object.getOwnPropertyDescriptor(t,n);if(void 0===o){var i=Object.getPrototypeOf(t);return null===i?void 0:e(i,n,r)}if("value"in o)return o.value;var a=o.get;return void 0!==a?a.call(r):void 0},c=function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)},d=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t},h=function e(t,n,r,o){var i=Object.getOwnPropertyDescriptor(t,n);if(void 0===i){var a=Object.getPrototypeOf(t);null!==a&&e(a,n,r,o)}else if("value"in i&&i.writable)i.value=r;else{var l=i.set;void 0!==l&&l.call(o,r)}return r},p=function(){return function(e,t){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return function(e,t){var n=[],r=!0,o=!1,i=void 0;try{for(var a,l=e[Symbol.iterator]();!(r=(a=l.next()).done)&&(n.push(a.value),!t||n.length!==t);r=!0);}catch(e){o=!0,i=e}finally{try{!r&&l.return&&l.return()}finally{if(o)throw i}}return n}(e,t);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),f=function(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}return Array.from(e)},v=3;function y(e,t){return t?e?e.isSameNode&&e.isSameNode(t)?t:e.tagName!==t.tagName?e:(r(e,t),t.skipChildren&&t.skipChildren()||function(e,t){for(var n=void 0,r=void 0,o=void 0,i=void 0,a=0,l=0;n=t.childNodes[l],r=e.childNodes[l-a],n||r;l++)if(r)if(n)if(b(r,n))(o=y(r,n))!==n&&(t.replaceChild(o,n),a++);else{i=null;for(var s=l;s<t.childNodes.length;s++)if(b(t.childNodes[s],r)){i=t.childNodes[s];break}i?((o=y(r,i))!==i&&a++,t.insertBefore(o,n)):r.id||n.id?(t.insertBefore(r,n),a++):(o=y(r,n))!==n&&(t.replaceChild(o,n),a++)}else t.appendChild(r),a++;else t.removeChild(n),l--}(e,t),t):null:e}function b(e,t){return e.id?e.id===t.id:e.isSameNode?e.isSameNode(t):e.tagName===t.tagName&&(e.type===v&&e.nodeValue===t.nodeValue)}var m=[];function _(e){e.isSameNode=function(){return!0},m.push(e)}var g=/^\s*(?:true|false|null|undefined|-?[0-9]+\.?[0-9]*|[[{](?:.|[\r\n])*[\]}])\s*$/;function x(e,t){var n=e;if(e&&t!==e){if(g.test(e))try{n=JSON.parse(e)}catch(n){console.error("Attribute "+t+" has an error:\n"+n+"\n",e)}}else n=!0;return n}var C=function(){try{var e=new window.CustomEvent("test",{cancelable:!0});if(e.preventDefault(),!0!==e.defaultPrevented)throw new Error("Could not prevent default");return window.CustomEvent}catch(e){}return t;function t(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=t.bubbles,r=void 0!==n&&n,o=t.cancelable,i=void 0!==o&&o,a=t.detail,l=void 0===a?void 0:a,s=document.createEvent("CustomEvent");s.initCustomEvent(e,r,i,l);var u=s.preventDefault;return s.preventDefault=function(){u.call(s);try{Object.defineProperty(this,"defaultPrevented",{get:function(){return!0}})}catch(e){this.defaultPrevented=!0}},s}}();function k(e,t,n){var r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},o=new C(t,s({},r,{detail:n}));return e.dispatchEvent(o)}var w=function(){var e=!1;if("undefined"!=typeof window&&"function"==typeof window.addEventListener){var t=Object.defineProperty({},"passive",{get:function(){e=!0}}),n=function(){};window.addEventListener("testPassiveEventSupport",n,t),window.removeEventListener("testPassiveEventSupport",n,t)}return e}();function O(e){for(var t=e.className,n=!1,r=!0,o=arguments.length,i=Array(o>1?o-1:0),a=1;a<o;a++)i[a-1]=arguments[a];var l=i.map(function(e){var o=(i=e,new RegExp("^"+i+"$|^"+i+"\\s|\\s"+i+"\\s|\\s"+i+"$",a)).test(t);var i,a;o?n=!0:r=!1;return{className:e,hasClass:o}});return!(!r&&!n)&&l}var A=/\s+/,N={transitionend:function(){for(var e=document.createElement("div").style,t={transition:"transitionend",OTransition:"oTransitionEnd otransitionend",MozTransition:"transitionend",WebkitTransition:"webkitTransitionEnd"},n=Object.keys(t),r=n.length,o=void 0,i=0;i<r;++i)if(void 0!==e[o=n[i]])return t[o];return""}()};function E(e,t,n,r){var o=arguments.length>4&&void 0!==arguments[4]?arguments[4]:{},a=o.capture,l=void 0!==a&&a,s=o.passive,u=void 0===s||s;if(N[t]&&(t=N[t]),!e||!t)return null;var c=void 0===n?"undefined":i(n),d=n&&"string"===c;if("function"===c){if(r){var h=r;l=h.capture,u=h.passive}r=n}for(var p=w?{capture:l,passive:u}:l,f=d?function(t){var o=t.target;for(;!O(o,n)&&o!==e;)o=o.parentNode;if(o!==e)return r(t,o)}:r,v=t.split(A),y=v.length,b=0;b<y;++b)e.addEventListener(v[b],f,p);return function t(){for(var n=0;n<y;++n)e.removeEventListener(v[n],f,p);!function(e,t){if(!e)return!1;for(var n=Object.keys(e),r=n.length,o=0;o<r;++o){var i=n[o];if(e[i]===t)return delete e[i]}}(this,t)}}function T(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},r=n.leading,o=void 0!==r&&r,i=n.trailing,a=void 0===i||i,l=n.maxWait,s=void 0!==l&&l,u=void 0,c=void 0,d=void 0,h=void 0,p=!1,v=t!==s,y=!1!==s;function b(){for(var n=arguments.length,r=Array(n),i=0;i<n;i++)r[i]=arguments[i];return u=r,v&&(c&&clearTimeout(c),c=setTimeout(m,t)),y&&!d&&(d=setTimeout(_,s)),o&&!p&&(p=!0,h=e.apply(void 0,f(u))),h}return b.flush=function(){(c||d)&&(h=e.apply(void 0,f(u)));return x(),h},b.cancel=x,b;function m(){d&&clearTimeout(d),g()}function _(){c&&clearTimeout(c),g()}function g(){a&&(h=e.apply(void 0,f(u))),c=null,d=null,p=!1}function x(){c&&(clearTimeout(c),c=null),d&&(clearTimeout(d),d=null),u=void 0,p=!1}}var S={};function j(e,t){var n=E(arguments.length>2&&void 0!==arguments[2]?arguments[2]:document,e,t);S[e]||(S[e]={count:0});var r,o=S[e];return o.count++,o.onsubscribe||(o.onsubscribe=T((r=e,function(){k(document,"pubsub/onsubscribe",r),k(document,"pubsub/onsubscribe/"+r,r),S[r]&&delete S[r].unsubscribe}),100)),o.onsubscribe(),function(){o.count--,n.call(this),o.count<=0&&delete S[e]}}E(document,"pubsub/onsubscribe",function(e){var t=e.detail;S[t]||(S[t]={count:0});var n=S[t],r=n.queue;Array.isArray(r)&&(r.forEach(function(e){var t=p(e,3),n=t[0],r=t[1],o=t[2];k(o,n,r)}),delete n.queue)});var P=/(?:^\w|[A-Z]|\b\w|\s+|[-_]+)/g,R=/[-_]+/g;function L(e){return e.replace(P,M)}function M(e,t){return 0==+e||R.test(e)?"":0===t?e.toLowerCase():e.toUpperCase()}var D=/[A-Z]/g;function V(e,t,n){var r=e.toLowerCase(),o=n.charAt(t+1);return 0===t||o.toUpperCase()===o?r:"-"+r}var U=function(e,t){return e===t},F=function(e){function t(e,n){var r;a(this,t);for(var o="Property >>>"+e+"<<< exists at "+n.nodeName+"#"+n._id+" and evaluates to -> "+n[e],i=arguments.length,l=Array(i>2?i-2:0),s=2;s<i;s++)l[s-2]=arguments[s];var u=d(this,(r=t.__proto__||Object.getPrototypeOf(t)).call.apply(r,[this,o].concat(l)));return Error.captureStackTrace&&Error.captureStackTrace(u,t),u.name="PropertyExistsException",u}return c(t,e),t}(Error);function q(){return Reflect.construct(HTMLElement,[],this.__proto__.constructor)}Object.setPrototypeOf(q.prototype,HTMLElement.prototype),Object.setPrototypeOf(q,HTMLElement);var z,H="throwed",I=["title","checked","disabled"],W={},$=function(e){return e in W||(W[e]=0),++W[e]},K=((z=function(){var e;return(e=console).log.apply(e,arguments)},function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:U;return function(){for(var t=arguments.length,n=Array(t),r=0;r<t;r++)n[r]=arguments[r];return function(){for(var t=arguments.length,r=Array(t),o=0;o<t;o++)r[o]=arguments[o];return function(){return e.apply(void 0,[].concat(n,r))?z.apply(void 0,arguments):void 0}}}})()(!0),function(e){function t(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",n=arguments[1];a(this,t);var r=d(this,(t.__proto__||Object.getPrototypeOf(t)).call(this));r._reduceProps=function(e,n){var o=e.props,i=e.shouldUpdate,a=r._hasKeys[n];if(-1===I.indexOf(n)&&a)throw new F(n,r);var l="_"+n,s=o[n],u=r[l];return i||r.shouldUpdateCallback(s,u)?(r[l]=s,r._props[n]=s,a&&h(t.prototype.__proto__||Object.getPrototypeOf(t.prototype),n,s,r),{props:o,shouldUpdate:!0}):{props:o,shouldUpdate:!1}},r._makeContextReady=function(){var e=(arguments.length>0&&void 0!==arguments[0]?arguments[0]:{}).detail;r.contextNode&&(clearTimeout(r.timeoutId),r.timeoutId=setTimeout(function(){r.contextCallback(r.contextNode,e)},10)),r.unContextEnabled&&r.unContextEnabled(),r.unContextEnabled=j("context/enabled",r._makeContextReady)},r._initialise(e,n),r._id=$(r.nodeName),r._props={},r._hasKeys={},r.reRender=T(function(){return r.render()},50);var o=r.constructor.observedAttributes;return Array.isArray(o)&&o.forEach(function(e){var t,n=L(e),o=n in r;if(-1===I.indexOf(n)&&o)throw new F(n,r);r._hasKeys[n]=o,Object.defineProperty(r,n,t={get:function(){return this["_"+n]},set:function(e){var r="_"+n;this.shouldUpdateCallback(this[r],e)&&(this[r]=e,this._props[n]=e,o&&h(t.__proto__||Object.getPrototypeOf(t),n,e,this),this._isConnected&&this._hasRendered&&this.reRender())}})}),r}return c(t,q),l(t,[{key:"_initialise",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;this._styles=e,this._template=t,this._hasTemplate=!!t,this._hasRendered=!1,this._isConnected=!1}},{key:"connectedCallback",value:function(){var e=this;if(!this._isConnected){this._isConnected=!0;var n=this.constructor.observedAttributes;this.initialClassName=this.className,Array.isArray(n)&&n.forEach(function(n){var r=L(n);if(e.hasAttribute(n)){var o=function(e,t){if("function"==typeof e.hasAttribute&&!e.hasAttribute(t))return!1;var n=e.value;return t?n=e.getAttribute(t):t=e.name,n=x(n,t)}(e,n),i=e._hasKeys[r];e["_"+r]=o,e._props[r]=o,i&&h(t.prototype.__proto__||Object.getPrototypeOf(t.prototype),r,o,e)}})}this._appendStyles(),this.render(),this.contextCallback&&this._makeContextReady()}},{key:"attributeChangedCallback",value:function(e,t,n){this.shouldUpdateCallback(n,t)&&(this[L(e)]=x(n))}},{key:"batchProps",value:function(e){var t=this.constructor.observedAttributes;Object.keys(e).filter(function(e){return t.indexOf(e.replace(D,V))>-1}).reduce(this._reduceProps,{props:e,shouldUpdate:!1}).shouldUpdate&&this._isConnected&&this._hasRendered&&this.render()}},{key:"shouldUpdateCallback",value:function(e,t){return e!==t}},{key:"disconnectedCallback",value:function(){this.unContextEnabled&&this.unContextEnabled(),this._isConnected=!1}},{key:"_appendStyles",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this;if(this._styles){var t=document.createElement("style"),n=document.createTextNode(this._styles);t.appendChild(n),e.insertAdjacentElement?e.insertAdjacentElement("afterbegin",t):e.appendChild(t)}}},{key:"render",value:function(){var e=this,n=!this._hasRendered;if(this.willRenderCallback(n),this._hasTemplate){var r=this._template;try{if(n){for(var o=document.createDocumentFragment(),a=[];this.firstChild;)a.push(this.firstChild),o.appendChild(this.firstChild);this._lightDOMRefs=a,this.childrenFragment=o}else this._lightDOMRefs.forEach(function(t){var n=t.cloneNode(!1);_(t),_(n),e.childrenFragment.appendChild(n)});var l=r(this._props,this.childrenFragment),s=document.createDocumentFragment();if(Array.isArray(l))l.forEach(function(e){s.appendChild(e)});else if(l){if("string"==typeof l){var c=new Error(H);throw console.error("\n%cWeb Component %c"+this.nodeName+"%c#"+this._id+" does not accept string as a return from a template. Maybe use bel?\n\nStack Trace: "+c.stack+"\n","color: #580000; font-size: 14px; line-height:16px;","background: #8b0000; color: #FFF; font-size: 14px; line-height:16px;","color: #580000; font-size: 14px; line-height:16px;"),c}s.appendChild(l)}if(n)u(t.prototype.__proto__||Object.getPrototypeOf(t.prototype),"appendChild",this).call(this,s);else{var d=this.cloneNode(!1);d._isMorphing=!0,d.appendChild(s),this._isMorphing=!0,function(e,t){if("object"!==(void 0===e?"undefined":i(e)))throw new Error("componentMorph: oldTree should be an object");if("object"!==(void 0===t?"undefined":i(t)))throw new Error("componentMorph: newTree should be an object");y(t,e)}(this,d),function(){for(var e=void 0;e=m.pop();)delete e.isSameNode;m=[]}(),this._isMorphing=!1}}catch(c){c.message!==H&&console.error("\n%cWeb Component %c"+this.nodeName+"%c#"+this._id+" has an error while loading its template:\n"+c+"\n\nStack Trace: "+c.stack+"\n","color: #580000; font-size: 14px; line-height:16px;","background: #8b0000; color: #FFF; font-size: 14px; line-height:16px;","color: #580000; font-size: 14px; line-height:16px;")}}this._hasRendered=!0,this.didRenderCallback(n)}},{key:"willRenderCallback",value:function(e){}},{key:"didRenderCallback",value:function(e){}},{key:"appendChild",value:function(e){!this._isMorphing&&this._hasTemplate&&this._hasRendered?(this._lightDOMRefs.push(e),this.render()):u(t.prototype.__proto__||Object.getPrototypeOf(t.prototype),"appendChild",this).call(this,e)}},{key:"skipChildren",value:function(){return!this._isMorphing}},{key:"enableContext",value:function(){var e=this.nodeName.toLowerCase();this.__isContext=!0,this.__contextName=e,function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:document;S[e]||(S[e]={count:0,queue:[]});var r=S[e].queue;Array.isArray(r)?r.push([e,t,n]):k(n,e,t)}("context/enabled",e)}},{key:"selectContext",value:function(e){this.__selectedContext=e&&e.toLowerCase()}},{key:"innerText",set:function(e){if(this._hasTemplate&&this._hasRendered){var n=document.createTextNode(e);this._lightDOMRefs=[n],this.render()}else h(t.prototype.__proto__||Object.getPrototypeOf(t.prototype),"innerText",e,this)}},{key:"textContent",set:function(e){if(this._hasTemplate&&this._hasRendered){var n=document.createTextNode(e);this._lightDOMRefs=[n],this.render()}else h(t.prototype.__proto__||Object.getPrototypeOf(t.prototype),"textContent",e,this)}},{key:"innerHTML",set:function(e){if(this._hasTemplate&&this._hasRendered){var n=document.createElement("div");n.innerHTML=e,this._lightDOMRefs=Array.from(n.children),this.render()}else h(t.prototype.__proto__||Object.getPrototypeOf(t.prototype),"innerHTML",e,this)}},{key:"contextNode",get:function(){for(var e=this.__selectedContext,t=this.parentNode;t&&(!t.__isContext||e&&e!==t.__contextName);)t=t.parentNode;return!(!t||!t.__isContext)&&t}}],[{key:"uuidv4",value:function(){return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,function(e){var t=16*Math.random()|0;return("x"==e?t:3&t|8).toString(16)})}}]),t}()),G={},X=function(e){function t(){return a(this,t),d(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return c(t,K),l(t,[{key:"_appendStyles",value:function(){t.appendGlobalStyles(this._styles,this.nodeName)}}],[{key:"appendGlobalStyles",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:K.uuidv4();if(e&&!G[e]){var n=document.createElement("style"),r=document.createTextNode(e);n.appendChild(r),n.setAttribute("data-c-name",t.toLowerCase()),document.querySelector("head").appendChild(n),G[e]=!0}}}]),t}(),B=".m-header-logo {\n  max-width: 16.66667%;\n  -webkit-box-flex: 0;\n      -ms-flex: 0 0 16.66667%;\n          flex: 0 0 16.66667%;\n  display: block;\n  -ms-flex-item-align: center;\n      align-self: center; }\n  @media (min-width: 992px) {\n    .m-header-logo {\n      -ms-flex-item-align: start;\n          align-self: flex-start; } }\n\n.m-header-logo__link {\n  display: inline-block; }\n\n.m-header-logo__icon {\n  width: 35px;\n  height: 35px;\n  display: block; }\n  @media (min-width: 576px) {\n    .m-header-logo__icon {\n      width: 43px;\n      height: 43px; } }\n  @media (min-width: 1200px) {\n    .m-header-logo__icon {\n      width: 53px;\n      height: 53px; } }\n\n.m-header-logo__img {\n  display: block;\n  height: 35px; }\n  @media (min-width: 576px) {\n    .m-header-logo__img {\n      height: 43px; } }\n  @media (min-width: 1200px) {\n    .m-header-logo__img {\n      height: 53px; } }\n",Z=/\n[\s]+$/,J=/^\n[\s]+/,Q=/[\s]+$/,Y=/^[\s]+/,ee=/[\n\s]+/g,te=["a","abbr","b","bdi","bdo","br","cite","data","dfn","em","i","kbd","mark","q","rp","rt","rtc","ruby","s","amp","small","span","strong","sub","sup","time","u","var","wbr"],ne=["code","pre","textarea"];var re=function(e){var t,n=document.createElement("div");return n.innerHTML=e,t=n.childNodes,Array.isArray(t)?t:[].slice.call(t)},oe=function(){var e,t,n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},r=n.src,o=n.alt,i=void 0===o?"AXA Logo":o,a=n.href,l=void 0===a?"#":a;return(e=document.createElement("a")).setAttribute("href",""+String(l)),e.setAttribute("class","m-header-logo__link js-header-logo__link"),function e(t,n){if(Array.isArray(n))for(var r,o,i=t.nodeName.toLowerCase(),a=!1,l=0,s=n.length;l<s;l++){var u=n[l];if(Array.isArray(u))e(t,u);else{("number"==typeof u||"boolean"==typeof u||"function"==typeof u||u instanceof Date||u instanceof RegExp)&&(u=u.toString());var c=t.childNodes[t.childNodes.length-1];if("string"==typeof u)a=!0,c&&"#text"===c.nodeName?c.nodeValue+=u:(u=document.createTextNode(u),t.appendChild(u),c=u),l===s-1&&(a=!1,-1===te.indexOf(i)&&-1===ne.indexOf(i)?""===(r=c.nodeValue.replace(J,"").replace(Q,"").replace(Z,"").replace(ee," "))?t.removeChild(c):c.nodeValue=r:-1===ne.indexOf(i)&&(o=0===l?"":" ",r=c.nodeValue.replace(J,o).replace(Y," ").replace(Q,"").replace(Z,"").replace(ee," "),c.nodeValue=r));else if(u&&u.nodeType){a&&(a=!1,-1===te.indexOf(i)&&-1===ne.indexOf(i)?""===(r=c.nodeValue.replace(J,"").replace(Z,"").replace(ee," "))?t.removeChild(c):c.nodeValue=r:-1===ne.indexOf(i)&&(r=c.nodeValue.replace(Y," ").replace(J,"").replace(Z,"").replace(ee," "),c.nodeValue=r));var d=u.nodeName;d&&(i=d.toLowerCase()),t.appendChild(u)}}}}(e,["\n    ",r?(t=document.createElement("img"),t.setAttribute("src",""+String(r)),t.setAttribute("alt",""+String(i)),t.setAttribute("class","m-header-logo__img"),t):re('<axa-icon icon="logo-AXA" classes="m-header-logo__icon"></axa-icon>'),"\n  "]),e},ie=function(){function e(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};a(this,e),this.wcNode=t,this.options=s({},e.DEFAULTS,n),this.handleClick=this.handleClick.bind(this),this.init()}return l(e,[{key:"init",value:function(){this.link=this.wcNode.querySelector(this.options.link),this.on()}},{key:"on",value:function(){this.off(),this.unClick=E(this.link,"click",this.handleClick,{passive:!1})}},{key:"handleClick",value:function(e){k(this.wcNode,"axa-click",null,{bubbles:!0,cancelable:!0,composed:!0})||e.preventDefault()}},{key:"off",value:function(){this.unClick&&this.unClick()}},{key:"destroy",value:function(){this.off(),delete this.link,delete this.wcNode,delete this.options,delete this.handleClick}}]),e}();ie.DEFAULTS={link:".js-header-logo__link"};var ae,le,se,ue=function(e){function t(){return a(this,t),d(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,B,oe))}return c(t,X),l(t,null,[{key:"observedAttributes",get:function(){return["alt","href","src"]}}]),l(t,[{key:"connectedCallback",value:function(){u(t.prototype.__proto__||Object.getPrototypeOf(t.prototype),"connectedCallback",this).call(this),this.className=this.initialClassName+" m-header-logo"}},{key:"didRenderCallback",value:function(){this.logo&&this.logo.destroy(),this.logo=new ie(this)}},{key:"disconnectedCallback",value:function(){this.logo&&(this.logo.destroy(),delete this.logo)}}]),t}();return ae=function(){window.customElements.define("axa-header-logo",ue)},le=0,se=function(){if(0===le)try{ae.apply(void 0,arguments),le+=1,document.removeEventListener("DOMContentLoaded"),document.removeEventListener("WebComponentsReady")}catch(e){}},document.addEventListener("DOMContentLoaded",se,!1),document.addEventListener("WebComponentsReady",se,!1),ue}();
