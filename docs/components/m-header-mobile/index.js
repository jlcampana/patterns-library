var StyleGuideWebComponent=function(){"use strict";function e(e,t,n){var o=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},i=new f(t,m({},o,{detail:n}));e.dispatchEvent(i)}function t(e,t){return new RegExp("^"+e+"$|^"+e+"\\s|\\s"+e+"\\s|\\s"+e+"$",t)}function n(e,t){o(e,t)||(e.className+=" "+t)}function o(e,n){return t(n).test(e.className)}function i(e,n){if(o(e,n)){var i=t(n,"g");e.className=e.className.replace(i," ").replace(k," ")}}function r(e,t,n,i){function r(){for(var t=0;t<u;++t)e.removeEventListener(c[t],l,a);!function(e,t){if(!e)return!1;for(var n=Object.keys(e),o=n.length,i=0;i<o;++i){var r=n[i];if(e[r]===t)return delete e[r]}}(this,r)}var a=arguments.length>4&&void 0!==arguments[4]&&arguments[4];if(w[t]&&(t=w[t]),!e||!t)return null;var s=void 0===n?"undefined":d(n);"function"===s&&(a=!!i,i=n);for(var l=n&&"string"===s?function(t){for(var r=t.target;!o(r,n)&&r!==e;)r=r.parentNode;if(r!==e)return i(t,r)}:i,c=t.split(C),u=c.length,f=0;f<u;++f)e.addEventListener(c[f],l,a);return r}function a(t,n){var o=arguments.length>2&&void 0!==arguments[2]?arguments[2]:document;O[t]||(O[t]={count:0,queue:[]});var i=O[t].queue;Array.isArray(i)?i.push([t,n,o]):e(o,t,n)}function s(t,n){var o=r(arguments.length>2&&void 0!==arguments[2]?arguments[2]:document,t,n);O[t]||(O[t]={count:0});var i=O[t];return i.count++,i.onsubscribe||(i.onsubscribe=function(e){function t(){for(var t=arguments.length,o=Array(t),r=0;r<t;r++)o[r]=arguments[r];return d=o,b&&(h&&clearTimeout(h),h=setTimeout(function(){p&&clearTimeout(p),n()},i)),y&&!p&&(p=setTimeout(function(){h&&clearTimeout(h),n()},f)),s&&!v&&(v=!0,m=e.apply(void 0,_(d))),m}function n(){c&&(m=e.apply(void 0,_(d))),h=null,p=null,v=!1}function o(){h&&(clearTimeout(h),h=null),p&&(clearTimeout(p),p=null),d=void 0,v=!1}var i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},a=r.leading,s=void 0!==a&&a,l=r.trailing,c=void 0===l||l,u=r.maxWait,f=void 0!==u&&u,d=void 0,h=void 0,p=void 0,m=void 0,v=!1,b=i!==f,y=!1!==f;return t.flush=function(){return(h||p)&&(m=e.apply(void 0,_(d))),o(),m},t.cancel=o,t}(function(t){return function(){e(document,"pubsub/onsubscribe",t),e(document,"pubsub/onsubscribe/"+t,t),O[t]&&delete O[t].unsubscribe}}(t),100)),i.onsubscribe(),function(){i.count--,o.call(this),i.count<=0&&delete O[t]}}function l(){return Reflect.construct(HTMLElement,[],this.__proto__.constructor)}function c(e,t){return t={exports:{}},e(t,t.exports),t.exports}var u=/^\s*(?:true|false|null|undefined|-?[0-9]+\.?[0-9]*|[[{](?:.|[\r\n])*[\]}])\s*$/,f=function(){function e(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=t.bubbles,o=void 0!==n&&n,i=t.cancelable,r=void 0!==i&&i,a=t.detail,s=void 0===a?void 0:a,l=document.createEvent("CustomEvent");l.initCustomEvent(e,o,r,s);var c=l.preventDefault;return l.preventDefault=function(){c.call(l);try{Object.defineProperty(this,"defaultPrevented",{get:function(){return!0}})}catch(e){this.defaultPrevented=!0}},l}try{var t=new window.CustomEvent("test");if(t.preventDefault(),!0!==t.defaultPrevented)throw new Error("Could not prevent default");return window.CustomEvent}catch(e){}return e}(),d="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},h=(function(){function e(e){this.value=e}function t(t){function n(i,r){try{var a=t[i](r),s=a.value;s instanceof e?Promise.resolve(s.value).then(function(e){n("next",e)},function(e){n("throw",e)}):o(a.done?"return":"normal",a.value)}catch(e){o("throw",e)}}function o(e,t){switch(e){case"return":i.resolve({value:t,done:!0});break;case"throw":i.reject(t);break;default:i.resolve({value:t,done:!1})}(i=i.next)?n(i.key,i.arg):r=null}var i,r;this._invoke=function(e,t){return new Promise(function(o,a){var s={key:e,arg:t,resolve:o,reject:a,next:null};r?r=r.next=s:(i=r=s,n(e,t))})},"function"!=typeof t.return&&(this.return=void 0)}"function"==typeof Symbol&&Symbol.asyncIterator&&(t.prototype[Symbol.asyncIterator]=function(){return this}),t.prototype.next=function(e){return this._invoke("next",e)},t.prototype.throw=function(e){return this._invoke("throw",e)},t.prototype.return=function(e){return this._invoke("return",e)}}(),function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}),p=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),m=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},v=function e(t,n,o){null===t&&(t=Function.prototype);var i=Object.getOwnPropertyDescriptor(t,n);if(void 0===i){var r=Object.getPrototypeOf(t);return null===r?void 0:e(r,n,o)}if("value"in i)return i.value;var a=i.get;if(void 0!==a)return a.call(o)},b=function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)},y=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t},g=function(){return function(e,t){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return function(e,t){var n=[],o=!0,i=!1,r=void 0;try{for(var a,s=e[Symbol.iterator]();!(o=(a=s.next()).done)&&(n.push(a.value),!t||n.length!==t);o=!0);}catch(e){i=!0,r=e}finally{try{!o&&s.return&&s.return()}finally{if(i)throw r}}return n}(e,t);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),x=function(e,t){return Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))},_=function(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}return Array.from(e)},k=/^\s+|\s{2,}|\s+$/g,C=/\s+/,w={transitionend:function(){for(var e=document.createElement("div").style,t={transition:"transitionend",OTransition:"oTransitionEnd otransitionend",MozTransition:"transitionend",WebkitTransition:"webkitTransitionEnd"},n=Object.keys(t),o=n.length,i=void 0,r=0;r<o;++r)if(i=n[r],void 0!==e[i])return t[i];return null}()},O={};r(document,"pubsub/onsubscribe",function(t){var n=t.detail;O[n]||(O[n]={count:0});var o=O[n],i=o.queue;Array.isArray(i)&&(i.forEach(function(t){var n=g(t,3),o=n[0],i=n[1];e(n[2],o,i)}),delete o.queue)}),Object.setPrototypeOf(l.prototype,HTMLElement.prototype),Object.setPrototypeOf(l,HTMLElement);var E={},N=function(e){function t(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",n=arguments[1];h(this,t);var o=y(this,(t.__proto__||Object.getPrototypeOf(t)).call(this));return o._makeContextReady=o._makeContextReady.bind(o),o._initialise(e,n),o}return b(t,l),p(t,[{key:"_initialise",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;this.initialClassName=this.className,this._styles=e,this._template=t}},{key:"connectedCallback",value:function(){this._appendStyles(),this.render(),this.contextCallback&&this._makeContextReady()}},{key:"disconnectedCallback",value:function(){this.unContextEnabled&&this.unContextEnabled()}},{key:"_appendStyles",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this;if(this._styles){var t=document.createElement("style"),n=document.createTextNode(this._styles);t.appendChild(n),e.insertAdjacentElement?e.insertAdjacentElement("afterbegin",t):e.appendChild(t)}}},{key:"render",value:function(){var e=this;if(!this._hasRendered){var t=this._template;if(t)try{for(var n=document.createDocumentFragment();this.firstChild;)n.appendChild(this.firstChild);var o=t(function(e){if(!e.hasAttributes)return null;for(var t={},n=e.attributes,o=n.length,i=0;i<o;++i){var r=n[i];t[r.name]=function(e,t){if("function"==typeof e.hasAttribute&&!e.hasAttribute(t))return!1;var n=e.value;if(t?n=e.getAttribute(t):t=e.name,n&&t!==n){if(u.test(n))try{n=JSON.parse(n)}catch(t){console.error("Attribute "+e+" has an error:\n"+t+"\n",n)}}else n=!0;return n}(r)}return t}(this),n);if(Array.isArray(o))o.forEach(function(t){e.appendChild(t)});else if(o){if("string"==typeof o){var i=new Error("throwed");throw console.error("\n%cWeb Component %c"+this.nodeName+"%c does not accept string as a return from a template. Maybe use bel?\n\nStack Trace: "+i.stack+"\n","color: #580000; font-size: 14px; line-height:16px;","background: #8b0000; color: #FFF; font-size: 14px; line-height:16px;","color: #580000; font-size: 14px; line-height:16px;"),i}this.appendChild(o)}this._hasRendered=!0}catch(i){"throwed"!==i.message&&console.error("\n%cWeb Component %c"+this.nodeName+"%c has an error while loading its template:\n"+i+"\n\nStack Trace: "+i.stack+"\n","color: #580000; font-size: 14px; line-height:16px;","background: #8b0000; color: #FFF; font-size: 14px; line-height:16px;","color: #580000; font-size: 14px; line-height:16px;")}}}},{key:"enableContext",value:function(){var e=this.nodeName.toLowerCase();this.__isContext=!0,this.__contextName=e,a("context/enabled",e)}},{key:"selectContext",value:function(e){this.__selectedContext=e.toLowerCase()}},{key:"_makeContextReady",value:function(){var e=this,t=(arguments.length>0&&void 0!==arguments[0]?arguments[0]:{}).detail;this.contextNode&&(clearTimeout(this.timeoutId),this.timeoutId=setTimeout(function(){e.contextCallback(e.contextNode,t)},10)),this.unContextEnabled&&this.unContextEnabled(),this.unContextEnabled=s("context/enabled",this._makeContextReady)}},{key:"contextNode",get:function(){for(var e=this.__selectedContext,t=this.parentNode;t&&(!t.__isContext||e&&e!==t.__contextName);)t=t.parentNode;return!(!t||!t.__isContext)&&t}}],[{key:"uuidv4",value:function(){return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,function(e){var t=16*Math.random()|0;return("x"==e?t:3&t|8).toString(16)})}}]),t}(),S=(function(e){function t(){return h(this,t),y(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}b(t,N),p(t,[{key:"connectedCallback",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"open",t=this.attachShadow({mode:e});this._appendStyles(t),this.render()}}])}(),function(e){function t(){return h(this,t),y(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return b(t,N),p(t,[{key:"_appendStyles",value:function(){t.appendGlobalStyles(this._styles,this.nodeName)}}],[{key:"appendGlobalStyles",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:N.uuidv4();if(e&&!E[e]){var n=document.createElement("style"),o=document.createTextNode(e);n.appendChild(o),n.setAttribute("data-c-name",t.toLowerCase()),document.querySelector("head").appendChild(n),E[e]=!0}}}]),t}()),A=".m-header-mobile {\n  display: block; }\n\n.m-header-mobile__backdrop {\n  position: fixed;\n  top: -200%;\n  left: -200%;\n  z-index: 1040;\n  display: block;\n  height: 100%;\n  width: 100%;\n  background: rgba(0, 0, 0, 0.5);\n  opacity: 0;\n  cursor: pointer;\n  -webkit-transition: opacity 0.2s ease;\n  transition: opacity 0.2s ease; }\n  .is-mobile-menu-open > .m-header-mobile__backdrop {\n    top: 0;\n    left: 0;\n    opacity: 1; }\n  .m-header-mobile__backdrop.is-mobile-backdrop-fading {\n    top: 0;\n    left: 0; }\n\n.m-header-mobile__canvas {\n  position: relative;\n  display: block;\n  width: 100%;\n  overflow: hidden;\n  background: #fff; }\n  @media (min-width: 576px) {\n    .m-header-mobile__canvas {\n      width: 370px; } }\n\n.m-header-mobile__canvas--off-canvas {\n  position: fixed;\n  top: 75px;\n  right: 0;\n  bottom: 0;\n  z-index: 1050;\n  overflow-x: hidden;\n  overflow-y: scroll;\n  -webkit-overflow-scrolling: touch;\n  -webkit-transform: translateX(110%);\n          transform: translateX(110%);\n  -webkit-transition: -webkit-transform 0.2s ease;\n  transition: -webkit-transform 0.2s ease;\n  transition: transform 0.2s ease;\n  transition: transform 0.2s ease, -webkit-transform 0.2s ease; }\n  .is-mobile-menu-open > .m-header-mobile__canvas--off-canvas {\n    -webkit-transform: translateX(0);\n            transform: translateX(0); }\n  @media (min-width: 992px) {\n    .m-header-mobile__canvas--off-canvas {\n      display: none; } }\n\n.m-header-mobile__box {\n  position: relative;\n  padding-top: 20px; }\n  .m-header-mobile__box > .m-button {\n    display: block;\n    margin: 20px 40px 0 60px;\n    text-align: center; }\n    .m-header-mobile__box > .m-button:first-child {\n      margin-top: 0; }\n    .m-header-mobile__box > .m-button + * {\n      margin-top: 20px; }\n  .m-header-mobile__box .m-header-top-content-bar__box {\n    padding-left: 60px !important;\n    padding-right: 40px !important; }\n\nbody.is-body-frozen {\n  overflow: hidden; }\n",j=function(e){return function(t,n,o){for(var i in n)i in T&&(n[T[i]]=n[i],delete n[i]);return e(t,n,o)}},T={class:"className",for:"htmlFor","http-equiv":"httpEquiv"},L=1,P=2,F=3,M=4,B=5,R=6,z=7,D=8,G=9,q=10,$=11,V=12,I=13,W=RegExp("^("+["area","base","basefont","bgsound","br","col","command","embed","frame","hr","img","input","isindex","keygen","link","meta","param","source","track","wbr","!--","animate","animateTransform","circle","cursor","desc","ellipse","feBlend","feColorMatrix","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feDistantLight","feFlood","feFuncA","feFuncB","feFuncG","feFuncR","feGaussianBlur","feImage","feMergeNode","feMorphology","feOffset","fePointLight","feSpecularLighting","feSpotLight","feTile","feTurbulence","font-face-format","font-face-name","font-face-uri","glyph","glyphRef","hkern","image","line","missing-glyph","mpath","path","polygon","polyline","rect","set","stop","tref","use","view","vkern"].join("|")+")(?:[.#][a-zA-Z0-9-￿_:-]+)*$"),X=/\n[\s]+$/,H=/^\n[\s]+/,U=/[\s]+$/,J=/^[\s]+/,Z=/[\n\s]+/g,K=["a","abbr","b","bdi","bdo","br","cite","data","dfn","em","i","kbd","mark","q","rp","rt","rtc","ruby","s","amp","small","span","strong","sub","sup","time","u","var","wbr"],Q=["code","pre"],Y=function e(t,n){if(Array.isArray(n))for(var o,i,r=t.nodeName.toLowerCase(),a=!1,s=0,l=n.length;s<l;s++){var c=n[s];if(Array.isArray(c))e(t,c);else{("number"==typeof c||"boolean"==typeof c||"function"==typeof c||c instanceof Date||c instanceof RegExp)&&(c=c.toString());var u=t.childNodes[t.childNodes.length-1];if("string"==typeof c)a=!0,u&&"#text"===u.nodeName?u.nodeValue+=c:(c=document.createTextNode(c),t.appendChild(c),u=c),s===l-1&&(a=!1,-1===K.indexOf(r)&&-1===Q.indexOf(r)?""===(o=u.nodeValue.replace(H,"").replace(U,"").replace(X,"").replace(Z," "))?t.removeChild(u):u.nodeValue=o:-1===Q.indexOf(r)&&(i=0===s?"":" ",o=u.nodeValue.replace(H,i).replace(J," ").replace(U,"").replace(X,"").replace(Z," "),u.nodeValue=o));else if(c&&c.nodeType){a&&(a=!1,-1===K.indexOf(r)&&-1===Q.indexOf(r)?""===(o=u.nodeValue.replace(H,"").replace(X,"").replace(Z," "))?t.removeChild(u):u.nodeValue=o:-1===Q.indexOf(r)&&(o=u.nodeValue.replace(J," ").replace(H,"").replace(X,"").replace(Z," "),u.nodeValue=o));var f=c.nodeName;f&&(r=f.toLowerCase()),t.appendChild(c)}}}},ee=c(function(e){function t(e,t,s){var l;-1!==a.indexOf(e)&&(t.namespace=n);var c=!1;if(t.namespace&&(c=t.namespace,delete t.namespace),c)l=document.createElementNS(c,e);else{if(e===r)return document.createComment(t.comment);l=document.createElement(e)}for(var u in t)if(t.hasOwnProperty(u)){var f=u.toLowerCase(),d=t[u];if("classname"===f&&(f="class",u="class"),"htmlFor"===u&&(u="for"),-1!==i.indexOf(f))if("true"===d)d=f;else if("false"===d)continue;"on"===f.slice(0,2)?l[u]=d:c?"xlink:href"===u?l.setAttributeNS(o,u,d):/^xmlns($|:)/i.test(u)||l.setAttributeNS(null,u,d):l.setAttribute(u,d)}return Y(l,s),l}var n="http://www.w3.org/2000/svg",o="http://www.w3.org/1999/xlink",i=["autofocus","checked","defaultchecked","disabled","formnovalidate","indeterminate","readonly","required","selected","willvalidate"],r="!--",a=["svg","altGlyph","altGlyphDef","altGlyphItem","animate","animateColor","animateMotion","animateTransform","circle","clipPath","color-profile","cursor","defs","desc","ellipse","feBlend","feColorMatrix","feComponentTransfer","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feDistantLight","feFlood","feFuncA","feFuncB","feFuncG","feFuncR","feGaussianBlur","feImage","feMerge","feMergeNode","feMorphology","feOffset","fePointLight","feSpecularLighting","feSpotLight","feTile","feTurbulence","filter","font","font-face","font-face-format","font-face-name","font-face-src","font-face-uri","foreignObject","g","glyph","glyphRef","hkern","image","line","linearGradient","marker","mask","metadata","missing-glyph","mpath","path","pattern","polygon","polyline","radialGradient","rect","set","stop","switch","symbol","text","textPath","title","tref","tspan","use","view","vkern"];e.exports=function(e,t){function n(e){return"function"==typeof e?e:"string"==typeof e?e:e&&"object"===(void 0===e?"undefined":d(e))?e:o("",e)}t||(t={});var o=t.concat||function(e,t){return String(e)+String(t)};return!1!==t.attrToProp&&(e=j(e)),function(i){function r(e){var n=[];a===z&&(a=M);for(var o=0;o<e.length;o++){var i=e.charAt(o);a===L&&"<"===i?(s.length&&n.push([L,s]),s="",a=P):">"!==i||function(e){return e===G||e===q}(a)||a===I?a===I&&/-$/.test(s)&&"-"===i?(t.comments&&n.push([D,s.substr(0,s.length-1)],[F]),s="",a=L):a===P&&/^!--$/.test(s)?(t.comments&&n.push([P,s],[B,"comment"],[$]),s=i,a=I):a===L||a===I?s+=i:a===P&&/\s/.test(i)?(n.push([P,s]),s="",a=M):a===P?s+=i:a===M&&/[^\s"'=/]/.test(i)?(a=B,s=i):a===M&&/\s/.test(i)?(s.length&&n.push([B,s]),n.push([V])):a===B&&/\s/.test(i)?(n.push([B,s]),s="",a=R):a===B&&"="===i?(n.push([B,s],[$]),s="",a=z):a===B?s+=i:a!==R&&a!==M||"="!==i?a!==R&&a!==M||/\s/.test(i)?a===z&&'"'===i?a=q:a===z&&"'"===i?a=G:a===q&&'"'===i?(n.push([D,s],[V]),s="",a=M):a===G&&"'"===i?(n.push([D,s],[V]),s="",a=M):a!==z||/\s/.test(i)?a===D&&/\s/.test(i)?(n.push([D,s],[V]),s="",a=M):a!==D&&a!==G&&a!==q||(s+=i):(a=D,o--):(n.push([V]),/[\w-]/.test(i)?(s+=i,a=B):a=M):(n.push([$]),a=z):(a===P?n.push([P,s]):a===B?n.push([B,s]):a===D&&s.length&&n.push([D,s]),n.push([F]),s="",a=L)}return a===L&&s.length?(n.push([L,s]),s=""):a===D&&s.length?(n.push([D,s]),s=""):a===q&&s.length?(n.push([D,s]),s=""):a===G&&s.length?(n.push([D,s]),s=""):a===B&&(n.push([B,s]),s=""),n}for(var a=L,s="",l=arguments.length,c=[],u=0;u<i.length;u++)if(u<l-1){var f=arguments[u+1],h=r(i[u]),p=a;p===q&&(p=D),p===G&&(p=D),p===z&&(p=D),p===M&&(p=B),h.push([0,p,f]),c.push.apply(c,h)}else c.push.apply(c,r(i[u]));for(var m=[null,{},[]],v=[[m,-1]],u=0;u<c.length;u++){var b=v[v.length-1][0],y=(h=c[u])[0];if(y===P&&/^\//.test(h[1]))C=v[v.length-1][1],v.length>1&&(v.pop(),v[v.length-1][0][2][C]=e(b[0],b[1],b[2].length?b[2]:void 0));else if(y===P){var g=[h[1],{},[]];b[2].push(g),v.push([g,b[2].length-1])}else if(y===B||0===y&&h[1]===B){for(var x,_="";u<c.length;u++)if(c[u][0]===B)_=o(_,c[u][1]);else{if(0!==c[u][0]||c[u][1]!==B)break;if("object"!==d(c[u][2])||_)_=o(_,c[u][2]);else for(x in c[u][2])c[u][2].hasOwnProperty(x)&&!b[1][x]&&(b[1][x]=c[u][2][x])}c[u][0]===$&&u++;for(var k=u;u<c.length;u++)if(c[u][0]===D||c[u][0]===B)b[1][_]?""===c[u][1]||(b[1][_]=o(b[1][_],c[u][1])):b[1][_]=n(c[u][1]);else{if(0!==c[u][0]||c[u][1]!==D&&c[u][1]!==B){!_.length||b[1][_]||u!==k||c[u][0]!==F&&c[u][0]!==V||(b[1][_]=_.toLowerCase()),c[u][0]===F&&u--;break}b[1][_]?""===c[u][2]||(b[1][_]=o(b[1][_],c[u][2])):b[1][_]=n(c[u][2])}}else if(y===B)b[1][h[1]]=!0;else if(0===y&&h[1]===B)b[1][h[2]]=!0;else if(y===F){if(function(e){return W.test(e)}(b[0])&&v.length){var C=v[v.length-1][1];v.pop(),v[v.length-1][0][2][C]=e(b[0],b[1],b[2].length?b[2]:void 0)}}else if(0===y&&h[1]===L)void 0===h[2]||null===h[2]?h[2]="":h[2]||(h[2]=o("",h[2])),Array.isArray(h[2][0])?b[2].push.apply(b[2],h[2]):b[2].push(h[2]);else if(y===L)b[2].push(h[1]);else if(y!==$&&y!==V)throw new Error("unhandled: "+y)}if(m[2].length>1&&/^\s*$/.test(m[2][0])&&m[2].shift(),m[2].length>2||2===m[2].length&&/\S/.test(m[2][1]))throw new Error("multiple root elements must be wrapped in an enclosing tag");return Array.isArray(m[2][0])&&"string"==typeof m[2][0][0]&&Array.isArray(m[2][0][2])&&(m[2][0]=e(m[2][0][0],m[2][0][1],m[2][0][2])),m[2][0]}}(t,{comments:!0}),e.exports.default=e.exports,e.exports.createElement=t}),te=c(function(e){!function(){function t(){for(var e=[],o=0;o<arguments.length;o++){var i=arguments[o];if(i){var r=void 0===i?"undefined":d(i);if("string"===r||"number"===r)e.push(i);else if(Array.isArray(i))e.push(t.apply(null,i));else if("object"===r)for(var a in i)n.call(i,a)&&i[a]&&e.push(a)}}return e.join(" ")}var n={}.hasOwnProperty;e.exports?e.exports=t:window.classNames=t}()}),ne=x(['<div class="m-header-mobile__backdrop js-header-mobile__backdrop"></div>'],['<div class="m-header-mobile__backdrop js-header-mobile__backdrop"></div>']),oe=x(['<div class="m-header-mobile__canvas js-header-mobile__canvas ','">\n    <div class="m-header-mobile__box">\n      ',"\n    </div>\n  </div>\n"],['<div class="m-header-mobile__canvas js-header-mobile__canvas ','">\n    <div class="m-header-mobile__box">\n      ',"\n    </div>\n  </div>\n"]),ie=function(e,t){var n=e.offcanvas;return[ee(ne),ee(oe,te({"m-header-mobile__canvas--off-canvas":!n}),t)]},re=function(){function e(t,n){h(this,e),this.rootNode=t,this.options=m({},e.DEFAULTS,n),this.opened=[],this.handleCloseClick=this.handleCloseClick.bind(this),this.open=this.open.bind(this),this.close=this.close.bind(this),this.init()}return p(e,[{key:"init",value:function(){this.canvas=this.rootNode.querySelector(this.options.canvas),this.backdrop=this.rootNode.querySelector(this.options.backdrop)}},{key:"on",value:function(){this.off(),this.unBackdropClick=r(this.backdrop,"click",this.handleCloseClick),this.unClose=r(this.canvas,"click",this.options.close,this.handleCloseClick)}},{key:"off",value:function(){this.unBackdropClick&&this.unBackdropClick(),this.unClose&&this.unClose()}},{key:"onContextEnabled",value:function(){this._contextNode&&(this.offContextEnabled(),this.unSubscribeOpen=s("header-mobile/open",this.open,this._contextNode),this.unSubscribeClose=s("header-mobile/close",this.close,this._contextNode))}},{key:"offContextEnabled",value:function(){this.unSubscribeOpen&&this.unSubscribeOpen(),this.unSubscribeClose&&this.unSubscribeClose()}},{key:"open",value:function(){n(document.body,this.options.isBodyFrozen),n(this.rootNode,this.options.isMenuOpenClass),this.on()}},{key:"close",value:function(){var e=this;this.off(),this.unTransitionEndBackdrop&&this.unTransitionEndBackdrop(),this.unTransitionEndBackdrop=r(this.backdrop,"transitionend",function(t){"opacity"===t.propertyName&&(e.unTransitionEndBackdrop(),i(e.backdrop,e.options.isBackdropFading),e.canvas.scrollTop=0,a("header-mobile/fade-finish",null,e._contextNode))}),n(this.backdrop,this.options.isBackdropFading),i(this.rootNode,this.options.isMenuOpenClass),i(document.body,this.options.isBodyFrozen)}},{key:"handleCloseClick",value:function(){a("header-mobile/close",null,this._contextNode)}},{key:"destroy",value:function(){this.off(),this.offContextEnabled(),delete this.rootNode,delete this.canvas,delete this.backdrop,delete this._contextNode}},{key:"contextNode",set:function(e){this._contextNode=e,this.onContextEnabled()}}]),e}();re.DEFAULTS={canvas:".js-header-mobile__canvas",backdrop:".js-header-mobile__backdrop",close:"js-header-mobile-close",isMenuOpenClass:"is-mobile-menu-open",isBackdropFading:"is-mobile-backdrop-fading",isBodyFrozen:"is-body-frozen"};var ae=function(e){function t(){h(this,t);var e=y(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,A,ie));return e.selectContext("axa-header"),e}return b(t,S),p(t,[{key:"connectedCallback",value:function(){v(t.prototype.__proto__||Object.getPrototypeOf(t.prototype),"connectedCallback",this).call(this),this.className=this.initialClassName+" m-header-mobile",this.interaction=new re(this)}},{key:"contextCallback",value:function(e){this.interaction.contextNode=e}},{key:"disconnectedCallback",value:function(){v(t.prototype.__proto__||Object.getPrototypeOf(t.prototype),"disconnectedCallback",this).call(this),this.interaction.destroy(),delete this.interaction}}]),t}();return function(e){var t=0,n=function(){if(0===t)try{e.apply(void 0,arguments),t+=1,document.removeEventListener("DOMContentLoaded"),document.removeEventListener("WebComponentsReady")}catch(e){}};document.addEventListener("DOMContentLoaded",n,!1),document.addEventListener("WebComponentsReady",n,!1)}(function(){window.customElements.define("axa-header-mobile",ae)}),ae}();
