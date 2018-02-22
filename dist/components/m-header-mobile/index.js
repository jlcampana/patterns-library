var StyleGuideWebComponent=function(){"use strict";var e=/^\s*(?:true|false|null|undefined|-?[0-9]+\.?[0-9]*|[[{](?:.|[\r\n])*[\]}])\s*$/;function t(t,n){if("function"==typeof t.hasAttribute&&!t.hasAttribute(n))return!1;var o=t.value;if(n?o=t.getAttribute(n):n=t.name,o&&n!==o){if(e.test(o))try{o=JSON.parse(o)}catch(e){console.error("Attribute "+t+" has an error:\n"+e+"\n",o)}}else o=!0;return o}var n=function(){try{var e=new window.CustomEvent("test");if(e.preventDefault(),!0!==e.defaultPrevented)throw new Error("Could not prevent default");return window.CustomEvent}catch(e){}return t;function t(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=t.bubbles,o=void 0!==n&&n,i=t.cancelable,r=void 0!==i&&i,a=t.detail,s=void 0===a?void 0:a,l=document.createEvent("CustomEvent");l.initCustomEvent(e,o,r,s);var c=l.preventDefault;return l.preventDefault=function(){c.call(l);try{Object.defineProperty(this,"defaultPrevented",{get:function(){return!0}})}catch(e){this.defaultPrevented=!0}},l}}(),o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},i=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")},r=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},s=function e(t,n,o){null===t&&(t=Function.prototype);var i=Object.getOwnPropertyDescriptor(t,n);if(void 0===i){var r=Object.getPrototypeOf(t);return null===r?void 0:e(r,n,o)}if("value"in i)return i.value;var a=i.get;return void 0!==a?a.call(o):void 0},l=function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)},c=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t},u=function(){return function(e,t){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return function(e,t){var n=[],o=!0,i=!1,r=void 0;try{for(var a,s=e[Symbol.iterator]();!(o=(a=s.next()).done)&&(n.push(a.value),!t||n.length!==t);o=!0);}catch(e){i=!0,r=e}finally{try{!o&&s.return&&s.return()}finally{if(i)throw r}}return n}(e,t);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),d=function(e,t){return Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))},f=function(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}return Array.from(e)};function h(e,t,o){var i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},r=new n(t,a({},i,{detail:o}));e.dispatchEvent(r)}var p=/^\s+|\s{2,}|\s+$/g;function m(e,t){return new RegExp("^"+e+"$|^"+e+"\\s|\\s"+e+"\\s|\\s"+e+"$",t)}function v(e,t){b(e,t)||(e.className+=" "+t)}function b(e,t){return m(t).test(e.className)}function y(e,t){if(b(e,t)){var n=m(t,"g");e.className=e.className.replace(n," ").replace(p," ")}}var g=/\s+/,x={transitionend:function(){for(var e=document.createElement("div").style,t={transition:"transitionend",OTransition:"oTransitionEnd otransitionend",MozTransition:"transitionend",WebkitTransition:"webkitTransitionEnd"},n=Object.keys(t),o=n.length,i=void 0,r=0;r<o;++r)if(void 0!==e[i=n[r]])return t[i];return null}()};function _(e,t,n,i){var r=arguments.length>4&&void 0!==arguments[4]&&arguments[4];if(x[t]&&(t=x[t]),!e||!t)return null;var a=void 0===n?"undefined":o(n);"function"===a&&(r=!!i,i=n);for(var s=n&&"string"===a?function(t){var o=t.target;for(;!b(o,n)&&o!==e;)o=o.parentNode;if(o!==e)return i(t,o)}:i,l=t.split(g),c=l.length,u=0;u<c;++u)e.addEventListener(l[u],s,r);return function t(){for(var n=0;n<c;++n)e.removeEventListener(l[n],s,r);!function(e,t){if(!e)return!1;for(var n=Object.keys(e),o=n.length,i=0;i<o;++i){var r=n[i];if(e[r]===t)return delete e[r]}}(this,t)}}function k(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},o=n.leading,i=void 0!==o&&o,r=n.trailing,a=void 0===r||r,s=n.maxWait,l=void 0!==s&&s,c=void 0,u=void 0,d=void 0,h=void 0,p=!1,m=t!==l,v=!1!==l;function b(){for(var n=arguments.length,o=Array(n),r=0;r<n;r++)o[r]=arguments[r];return c=o,m&&(u&&clearTimeout(u),u=setTimeout(y,t)),v&&!d&&(d=setTimeout(g,l)),i&&!p&&(p=!0,h=e.apply(void 0,f(c))),h}return b.flush=function(){(u||d)&&(h=e.apply(void 0,f(c)));return _(),h},b.cancel=_,b;function y(){d&&clearTimeout(d),x()}function g(){u&&clearTimeout(u),x()}function x(){a&&(h=e.apply(void 0,f(c))),u=null,d=null,p=!1}function _(){u&&(clearTimeout(u),u=null),d&&(clearTimeout(d),d=null),c=void 0,p=!1}}var C={};function w(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:document;C[e]||(C[e]={count:0,queue:[]});var o=C[e].queue;Array.isArray(o)?o.push([e,t,n]):h(n,e,t)}function O(e,t){var n=_(arguments.length>2&&void 0!==arguments[2]?arguments[2]:document,e,t);C[e]||(C[e]={count:0});var o,i=C[e];return i.count++,i.onsubscribe||(i.onsubscribe=k((o=e,function(){h(document,"pubsub/onsubscribe",o),h(document,"pubsub/onsubscribe/"+o,o),C[o]&&delete C[o].unsubscribe}),100)),i.onsubscribe(),function(){i.count--,n.call(this),i.count<=0&&delete C[e]}}function E(){return Reflect.construct(HTMLElement,[],this.__proto__.constructor)}_(document,"pubsub/onsubscribe",function(e){var t=e.detail;C[t]||(C[t]={count:0});var n=C[t],o=n.queue;Array.isArray(o)&&(o.forEach(function(e){var t=u(e,3),n=t[0],o=t[1],i=t[2];h(i,n,o)}),delete n.queue)}),Object.setPrototypeOf(E.prototype,HTMLElement.prototype),Object.setPrototypeOf(E,HTMLElement);var N={},S="throwed",T=function(e){function n(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments[1];i(this,n);var o=c(this,(n.__proto__||Object.getPrototypeOf(n)).call(this));return o._makeContextReady=o._makeContextReady.bind(o),o._initialise(e,t),o}return l(n,E),r(n,[{key:"_initialise",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;this.initialClassName=this.className,this._styles=e,this._template=t}},{key:"connectedCallback",value:function(){this._appendStyles(),this.render(),this.contextCallback&&this._makeContextReady()}},{key:"disconnectedCallback",value:function(){this.unContextEnabled&&this.unContextEnabled()}},{key:"_appendStyles",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this;if(this._styles){var t=document.createElement("style"),n=document.createTextNode(this._styles);t.appendChild(n),e.insertAdjacentElement?e.insertAdjacentElement("afterbegin",t):e.appendChild(t)}}},{key:"render",value:function(){var e=this;if(!this._hasRendered){var n=this._template;if(n)try{for(var o=document.createDocumentFragment();this.firstChild;)o.appendChild(this.firstChild);var i=n(function(e){if(!e.hasAttributes)return null;for(var n={},o=e.attributes,i=o.length,r=0;r<i;++r){var a=o[r];n[a.name]=t(a)}return n}(this),o);if(Array.isArray(i))i.forEach(function(t){e.appendChild(t)});else if(i){if("string"==typeof i){var r=new Error(S);throw console.error("\n%cWeb Component %c"+this.nodeName+"%c does not accept string as a return from a template. Maybe use bel?\n\nStack Trace: "+r.stack+"\n","color: #580000; font-size: 14px; line-height:16px;","background: #8b0000; color: #FFF; font-size: 14px; line-height:16px;","color: #580000; font-size: 14px; line-height:16px;"),r}this.appendChild(i)}this._hasRendered=!0}catch(r){r.message!==S&&console.error("\n%cWeb Component %c"+this.nodeName+"%c has an error while loading its template:\n"+r+"\n\nStack Trace: "+r.stack+"\n","color: #580000; font-size: 14px; line-height:16px;","background: #8b0000; color: #FFF; font-size: 14px; line-height:16px;","color: #580000; font-size: 14px; line-height:16px;")}}}},{key:"enableContext",value:function(){var e=this.nodeName.toLowerCase();this.__isContext=!0,this.__contextName=e,w("context/enabled",e)}},{key:"selectContext",value:function(e){this.__selectedContext=e&&e.toLowerCase()}},{key:"_makeContextReady",value:function(){var e=this,t=(arguments.length>0&&void 0!==arguments[0]?arguments[0]:{}).detail;this.contextNode&&(clearTimeout(this.timeoutId),this.timeoutId=setTimeout(function(){e.contextCallback(e.contextNode,t)},10)),this.unContextEnabled&&this.unContextEnabled(),this.unContextEnabled=O("context/enabled",this._makeContextReady)}},{key:"contextNode",get:function(){for(var e=this.__selectedContext,t=this.parentNode;t&&(!t.__isContext||e&&e!==t.__contextName);)t=t.parentNode;return!(!t||!t.__isContext)&&t}}],[{key:"uuidv4",value:function(){return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,function(e){var t=16*Math.random()|0;return("x"==e?t:3&t|8).toString(16)})}}]),n}(),A=(function(e){function t(){return i(this,t),c(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}l(t,T),r(t,[{key:"connectedCallback",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"open",t=this.attachShadow({mode:e});this._appendStyles(t),this.render()}}])}(),function(e){function t(){return i(this,t),c(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return l(t,T),r(t,[{key:"_appendStyles",value:function(){t.appendGlobalStyles(this._styles,this.nodeName)}}],[{key:"appendGlobalStyles",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:T.uuidv4();if(e&&!N[e]){var n=document.createElement("style"),o=document.createTextNode(e);n.appendChild(o),n.setAttribute("data-c-name",t.toLowerCase()),document.querySelector("head").appendChild(n),N[e]=!0}}}]),t}()),j=".m-header-mobile {\n  display: block; }\n\n.m-header-mobile__backdrop {\n  position: fixed;\n  top: -200%;\n  left: -200%;\n  z-index: 1040;\n  display: block;\n  height: 100%;\n  width: 100%;\n  background: rgba(0, 0, 0, 0.5);\n  opacity: 0;\n  cursor: pointer;\n  -webkit-transition: opacity 0.2s ease;\n  transition: opacity 0.2s ease; }\n  .is-mobile-menu-open > .m-header-mobile__backdrop {\n    top: 0;\n    left: 0;\n    opacity: 1; }\n  .m-header-mobile__backdrop.is-mobile-backdrop-fading {\n    top: 0;\n    left: 0; }\n\n.m-header-mobile__canvas {\n  position: relative;\n  display: block;\n  width: 100%;\n  overflow: hidden;\n  background: #fff; }\n  @media (min-width: 576px) {\n    .m-header-mobile__canvas {\n      width: 370px; } }\n\n.m-header-mobile__canvas--off-canvas {\n  position: fixed;\n  top: 75px;\n  right: 0;\n  bottom: 0;\n  z-index: 1050;\n  overflow-x: hidden;\n  overflow-y: scroll;\n  -webkit-overflow-scrolling: touch;\n  -webkit-transform: translateX(110%);\n          transform: translateX(110%);\n  -webkit-transition: -webkit-transform 0.2s ease;\n  transition: -webkit-transform 0.2s ease;\n  transition: transform 0.2s ease;\n  transition: transform 0.2s ease, -webkit-transform 0.2s ease; }\n  .is-mobile-menu-open > .m-header-mobile__canvas--off-canvas {\n    -webkit-transform: translateX(0);\n            transform: translateX(0); }\n  @media (min-width: 992px) {\n    .m-header-mobile__canvas--off-canvas {\n      display: none; } }\n\n.m-header-mobile__box {\n  position: relative;\n  padding-top: 20px; }\n  .m-header-mobile__box > .m-button {\n    display: block;\n    margin: 20px 40px 0 60px;\n    text-align: center; }\n    .m-header-mobile__box > .m-button:first-child {\n      margin-top: 0; }\n    .m-header-mobile__box > .m-button + * {\n      margin-top: 20px; }\n  .m-header-mobile__box .m-header-top-content-bar__box {\n    padding-left: 60px !important;\n    padding-right: 40px !important; }\n\nbody.is-body-frozen {\n  overflow: hidden; }\n";function L(e,t){return e(t={exports:{}},t.exports),t.exports}var F=function(e){return function(t,n,o){for(var i in n)i in P&&(n[P[i]]=n[i],delete n[i]);return e(t,n,o)}},P={class:"className",for:"htmlFor","http-equiv":"httpEquiv"};var M=1,B=2,D=3,R=4,z=5,G=6,q=7,$=8,V=9,H=10,W=11,I=12,X=13;var U=RegExp("^("+["area","base","basefont","bgsound","br","col","command","embed","frame","hr","img","input","isindex","keygen","link","meta","param","source","track","wbr","!--","animate","animateTransform","circle","cursor","desc","ellipse","feBlend","feColorMatrix","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feDistantLight","feFlood","feFuncA","feFuncB","feFuncG","feFuncR","feGaussianBlur","feImage","feMergeNode","feMorphology","feOffset","fePointLight","feSpecularLighting","feSpotLight","feTile","feTurbulence","font-face-format","font-face-name","font-face-uri","glyph","glyphRef","hkern","image","line","missing-glyph","mpath","path","polygon","polyline","rect","set","stop","tref","use","view","vkern"].join("|")+")(?:[.#][a-zA-Z0-9-￿_:-]+)*$");var J=/\n[\s]+$/,Z=/^\n[\s]+/,K=/[\s]+$/,Q=/^[\s]+/,Y=/[\n\s]+/g,ee=["a","abbr","b","bdi","bdo","br","cite","data","dfn","em","i","kbd","mark","q","rp","rt","rtc","ruby","s","amp","small","span","strong","sub","sup","time","u","var","wbr"],te=["code","pre"],ne=function e(t,n){if(Array.isArray(n))for(var o,i,r=t.nodeName.toLowerCase(),a=!1,s=0,l=n.length;s<l;s++){var c=n[s];if(Array.isArray(c))e(t,c);else{("number"==typeof c||"boolean"==typeof c||"function"==typeof c||c instanceof Date||c instanceof RegExp)&&(c=c.toString());var u=t.childNodes[t.childNodes.length-1];if("string"==typeof c)a=!0,u&&"#text"===u.nodeName?u.nodeValue+=c:(c=document.createTextNode(c),t.appendChild(c),u=c),s===l-1&&(a=!1,-1===ee.indexOf(r)&&-1===te.indexOf(r)?""===(o=u.nodeValue.replace(Z,"").replace(K,"").replace(J,"").replace(Y," "))?t.removeChild(u):u.nodeValue=o:-1===te.indexOf(r)&&(i=0===s?"":" ",o=u.nodeValue.replace(Z,i).replace(Q," ").replace(K,"").replace(J,"").replace(Y," "),u.nodeValue=o));else if(c&&c.nodeType){a&&(a=!1,-1===ee.indexOf(r)&&-1===te.indexOf(r)?""===(o=u.nodeValue.replace(Z,"").replace(J,"").replace(Y," "))?t.removeChild(u):u.nodeValue=o:-1===te.indexOf(r)&&(o=u.nodeValue.replace(Q," ").replace(Z,"").replace(J,"").replace(Y," "),u.nodeValue=o));var d=c.nodeName;d&&(r=d.toLowerCase()),t.appendChild(c)}}}},oe=L(function(e){var t="http://www.w3.org/2000/svg",n="http://www.w3.org/1999/xlink",i=["autofocus","checked","defaultchecked","disabled","formnovalidate","indeterminate","readonly","required","selected","willvalidate"],r="!--",a=["svg","altGlyph","altGlyphDef","altGlyphItem","animate","animateColor","animateMotion","animateTransform","circle","clipPath","color-profile","cursor","defs","desc","ellipse","feBlend","feColorMatrix","feComponentTransfer","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feDistantLight","feFlood","feFuncA","feFuncB","feFuncG","feFuncR","feGaussianBlur","feImage","feMerge","feMergeNode","feMorphology","feOffset","fePointLight","feSpecularLighting","feSpotLight","feTile","feTurbulence","filter","font","font-face","font-face-format","font-face-name","font-face-src","font-face-uri","foreignObject","g","glyph","glyphRef","hkern","image","line","linearGradient","marker","mask","metadata","missing-glyph","mpath","path","pattern","polygon","polyline","radialGradient","rect","set","stop","switch","symbol","text","textPath","title","tref","tspan","use","view","vkern"];function s(e,o,s){var l;-1!==a.indexOf(e)&&(o.namespace=t);var c=!1;if(o.namespace&&(c=o.namespace,delete o.namespace),c)l=document.createElementNS(c,e);else{if(e===r)return document.createComment(o.comment);l=document.createElement(e)}for(var u in o)if(o.hasOwnProperty(u)){var d=u.toLowerCase(),f=o[u];if("classname"===d&&(d="class",u="class"),"htmlFor"===u&&(u="for"),-1!==i.indexOf(d))if("true"===f)f=d;else if("false"===f)continue;"on"===d.slice(0,2)?l[u]=f:c?"xlink:href"===u?l.setAttributeNS(n,u,f):/^xmlns($|:)/i.test(u)||l.setAttributeNS(null,u,f):l.setAttribute(u,f)}return ne(l,s),l}e.exports=function(e,t){t||(t={});var n=t.concat||function(e,t){return String(e)+String(t)};return!1!==t.attrToProp&&(e=F(e)),function(r){for(var a=M,s="",l=arguments.length,c=[],u=0;u<r.length;u++)if(u<l-1){var d=arguments[u+1],f=w(r[u]),h=a;h===H&&(h=$),h===V&&(h=$),h===q&&(h=$),h===R&&(h=z),f.push([0,h,d]),c.push.apply(c,f)}else c.push.apply(c,w(r[u]));var p,m=[null,{},[]],v=[[m,-1]];for(u=0;u<c.length;u++){var b=v[v.length-1][0],y=(f=c[u])[0];if(y===B&&/^\//.test(f[1])){var g=v[v.length-1][1];v.length>1&&(v.pop(),v[v.length-1][0][2][g]=e(b[0],b[1],b[2].length?b[2]:void 0))}else if(y===B){var x=[f[1],{},[]];b[2].push(x),v.push([x,b[2].length-1])}else if(y===z||0===y&&f[1]===z){for(var _,k="";u<c.length;u++)if(c[u][0]===z)k=n(k,c[u][1]);else{if(0!==c[u][0]||c[u][1]!==z)break;if("object"!==o(c[u][2])||k)k=n(k,c[u][2]);else for(_ in c[u][2])c[u][2].hasOwnProperty(_)&&!b[1][_]&&(b[1][_]=c[u][2][_])}c[u][0]===W&&u++;for(var C=u;u<c.length;u++)if(c[u][0]===$||c[u][0]===z)b[1][k]?""===c[u][1]||(b[1][k]=n(b[1][k],c[u][1])):b[1][k]=i(c[u][1]);else{if(0!==c[u][0]||c[u][1]!==$&&c[u][1]!==z){!k.length||b[1][k]||u!==C||c[u][0]!==D&&c[u][0]!==I||(b[1][k]=k.toLowerCase()),c[u][0]===D&&u--;break}b[1][k]?""===c[u][2]||(b[1][k]=n(b[1][k],c[u][2])):b[1][k]=i(c[u][2])}}else if(y===z)b[1][f[1]]=!0;else if(0===y&&f[1]===z)b[1][f[2]]=!0;else if(y===D)p=b[0],U.test(p)&&v.length&&(g=v[v.length-1][1],v.pop(),v[v.length-1][0][2][g]=e(b[0],b[1],b[2].length?b[2]:void 0));else if(0===y&&f[1]===M)void 0===f[2]||null===f[2]?f[2]="":f[2]||(f[2]=n("",f[2])),Array.isArray(f[2][0])?b[2].push.apply(b[2],f[2]):b[2].push(f[2]);else if(y===M)b[2].push(f[1]);else if(y!==W&&y!==I)throw new Error("unhandled: "+y)}if(m[2].length>1&&/^\s*$/.test(m[2][0])&&m[2].shift(),m[2].length>2||2===m[2].length&&/\S/.test(m[2][1]))throw new Error("multiple root elements must be wrapped in an enclosing tag");return Array.isArray(m[2][0])&&"string"==typeof m[2][0][0]&&Array.isArray(m[2][0][2])&&(m[2][0]=e(m[2][0][0],m[2][0][1],m[2][0][2])),m[2][0];function w(e){var n,o=[];a===q&&(a=R);for(var i=0;i<e.length;i++){var r=e.charAt(i);a===M&&"<"===r?(s.length&&o.push([M,s]),s="",a=B):">"===r&&(n=a)!==V&&n!==H&&a!==X?(a===B?o.push([B,s]):a===z?o.push([z,s]):a===$&&s.length&&o.push([$,s]),o.push([D]),s="",a=M):a===X&&/-$/.test(s)&&"-"===r?(t.comments&&o.push([$,s.substr(0,s.length-1)],[D]),s="",a=M):a===B&&/^!--$/.test(s)?(t.comments&&o.push([B,s],[z,"comment"],[W]),s=r,a=X):a===M||a===X?s+=r:a===B&&/\s/.test(r)?(o.push([B,s]),s="",a=R):a===B?s+=r:a===R&&/[^\s"'=/]/.test(r)?(a=z,s=r):a===R&&/\s/.test(r)?(s.length&&o.push([z,s]),o.push([I])):a===z&&/\s/.test(r)?(o.push([z,s]),s="",a=G):a===z&&"="===r?(o.push([z,s],[W]),s="",a=q):a===z?s+=r:a!==G&&a!==R||"="!==r?a!==G&&a!==R||/\s/.test(r)?a===q&&'"'===r?a=H:a===q&&"'"===r?a=V:a===H&&'"'===r?(o.push([$,s],[I]),s="",a=R):a===V&&"'"===r?(o.push([$,s],[I]),s="",a=R):a!==q||/\s/.test(r)?a===$&&/\s/.test(r)?(o.push([$,s],[I]),s="",a=R):a!==$&&a!==V&&a!==H||(s+=r):(a=$,i--):(o.push([I]),/[\w-]/.test(r)?(s+=r,a=z):a=R):(o.push([W]),a=q)}return a===M&&s.length?(o.push([M,s]),s=""):a===$&&s.length?(o.push([$,s]),s=""):a===H&&s.length?(o.push([$,s]),s=""):a===V&&s.length?(o.push([$,s]),s=""):a===z&&(o.push([z,s]),s=""),o}};function i(e){return"function"==typeof e?e:"string"==typeof e?e:e&&"object"===(void 0===e?"undefined":o(e))?e:n("",e)}}(s,{comments:!0}),e.exports.default=e.exports,e.exports.createElement=s}),ie=(oe.createElement,L(function(e){!function(){var t={}.hasOwnProperty;function n(){for(var e=[],i=0;i<arguments.length;i++){var r=arguments[i];if(r){var a=void 0===r?"undefined":o(r);if("string"===a||"number"===a)e.push(r);else if(Array.isArray(r))e.push(n.apply(null,r));else if("object"===a)for(var s in r)t.call(r,s)&&r[s]&&e.push(s)}}return e.join(" ")}e.exports?e.exports=n:window.classNames=n}()})),re=d(['<div class="m-header-mobile__backdrop js-header-mobile__backdrop"></div>'],['<div class="m-header-mobile__backdrop js-header-mobile__backdrop"></div>']),ae=d(['<div class="m-header-mobile__canvas js-header-mobile__canvas ','">\n    <div class="m-header-mobile__box">\n      ',"\n    </div>\n  </div>\n"],['<div class="m-header-mobile__canvas js-header-mobile__canvas ','">\n    <div class="m-header-mobile__box">\n      ',"\n    </div>\n  </div>\n"]),se=function(e,t){var n=e.offcanvas;return[oe(re),oe(ae,ie({"m-header-mobile__canvas--off-canvas":!n}),t)]};var le=function(){function e(t,n){i(this,e),this.wcNode=t,this.options=a({},e.DEFAULTS,n),this.opened=[],this.handleCloseClick=this.handleCloseClick.bind(this),this.open=this.open.bind(this),this.close=this.close.bind(this),this.init()}return r(e,[{key:"init",value:function(){this.canvas=this.wcNode.querySelector(this.options.canvas),this.backdrop=this.wcNode.querySelector(this.options.backdrop)}},{key:"on",value:function(){this.off(),this.offOverscroll=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:document.body,n=_(e,"touchstart",function(){l(),r=_(e,"touchmove",s),a=_(e,"touchend",l),c()}),o=_(e,"scroll",k(c),100),i=_(t,"touchmove",function(e){e._isScroller||e.preventDefault()}),r=void 0,a=void 0;return c(),function(){n(),o(),i(),l()};function s(t){e.offsetHeight<e.scrollHeight&&(t._isScroller=!0)}function l(){r&&(r(),r=null),a&&(a(),a=null),c()}function c(){var t=e.scrollTop,n=e.scrollHeight,o=t+e.offsetHeight;0===t?e.scrollTop=1:o===n&&(e.scrollTop=t-1)}}(this.canvas),this.unBackdropClick=_(this.backdrop,"click",this.handleCloseClick),this.unClose=_(this.canvas,"click",this.options.close,this.handleCloseClick)}},{key:"off",value:function(){this.offOverscroll&&this.offOverscroll(),this.unBackdropClick&&this.unBackdropClick(),this.unClose&&this.unClose()}},{key:"onContextEnabled",value:function(){this._contextNode&&(this.offContextEnabled(),this.unSubscribeOpen=O("header-mobile/open",this.open,this._contextNode),this.unSubscribeClose=O("header-mobile/close",this.close,this._contextNode))}},{key:"offContextEnabled",value:function(){this.unSubscribeOpen&&this.unSubscribeOpen(),this.unSubscribeClose&&this.unSubscribeClose()}},{key:"open",value:function(){v(document.body,this.options.isBodyFrozen),v(this.wcNode,this.options.isMenuOpenClass),this.on()}},{key:"close",value:function(){var e=this;this.off(),this.unTransitionEndBackdrop&&this.unTransitionEndBackdrop(),this.unTransitionEndBackdrop=_(this.backdrop,"transitionend",function(t){"opacity"===t.propertyName&&(e.unTransitionEndBackdrop(),y(e.backdrop,e.options.isBackdropFading),e.canvas.scrollTop=0,w("header-mobile/fade-finish",null,e._contextNode))}),v(this.backdrop,this.options.isBackdropFading),y(this.wcNode,this.options.isMenuOpenClass),y(document.body,this.options.isBodyFrozen)}},{key:"handleCloseClick",value:function(){w("header-mobile/close",null,this._contextNode)}},{key:"destroy",value:function(){this.off(),this.offContextEnabled(),delete this.wcNode,delete this.canvas,delete this.backdrop,delete this._contextNode}},{key:"contextNode",set:function(e){this._contextNode=e,this.onContextEnabled()}}]),e}();le.DEFAULTS={canvas:".js-header-mobile__canvas",backdrop:".js-header-mobile__backdrop",close:"js-header-mobile-close",isMenuOpenClass:"is-mobile-menu-open",isBackdropFading:"is-mobile-backdrop-fading",isBodyFrozen:"is-body-frozen"};var ce,ue,de,fe=function(e){function t(){i(this,t);var e=c(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,j,se));return e.selectContext("axa-header"),e}return l(t,A),r(t,[{key:"connectedCallback",value:function(){s(t.prototype.__proto__||Object.getPrototypeOf(t.prototype),"connectedCallback",this).call(this),this.className=this.initialClassName+" m-header-mobile",this.interaction=new le(this)}},{key:"contextCallback",value:function(e){this.interaction.contextNode=e}},{key:"disconnectedCallback",value:function(){s(t.prototype.__proto__||Object.getPrototypeOf(t.prototype),"disconnectedCallback",this).call(this),this.interaction.destroy(),delete this.interaction}}]),t}();return ce=function(){window.customElements.define("axa-header-mobile",fe)},ue=0,de=function(){if(0===ue)try{ce.apply(void 0,arguments),ue+=1,document.removeEventListener("DOMContentLoaded"),document.removeEventListener("WebComponentsReady")}catch(e){}},document.addEventListener("DOMContentLoaded",de,!1),document.addEventListener("WebComponentsReady",de,!1),fe}();
