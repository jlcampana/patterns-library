!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):e.StyleGuideWebComponent=t()}(this,function(){"use strict";function e(e,t){return e(t={exports:{}},t.exports),t.exports}var t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},n=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")},r=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},i=function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)},a=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t},l=function(){return function(e,t){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return function(e,t){var n=[],r=!0,o=!1,i=void 0;try{for(var a,l=e[Symbol.iterator]();!(r=(a=l.next()).done)&&(n.push(a.value),!t||n.length!==t);r=!0);}catch(e){o=!0,i=e}finally{try{!r&&l.return&&l.return()}finally{if(o)throw i}}return n}(e,t);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),s=function(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}return Array.from(e)},u=e(function(e){!function(){var n={}.hasOwnProperty;function r(){for(var e=[],o=0;o<arguments.length;o++){var i=arguments[o];if(i){var a=void 0===i?"undefined":t(i);if("string"===a||"number"===a)e.push(i);else if(Array.isArray(i))e.push(r.apply(null,i));else if("object"===a)for(var l in i)n.call(i,l)&&i[l]&&e.push(l)}}return e.join(" ")}e.exports?e.exports=r:window.classNames=r}()}),c=/^\s*(?:true|false|null|undefined|-?[0-9]+\.?[0-9]*|[[{](?:.|[\r\n])*[\]}])\s*$/;function f(e,t){if("function"==typeof e.hasAttribute&&!e.hasAttribute(t))return!1;var n=e.value;if(t?n=e.getAttribute(t):t=e.name,n&&t!==n){if(c.test(n))try{n=JSON.parse(n)}catch(t){console.error("Attribute "+e+" has an error:\n"+t+"\n",n)}}else n=!0;return n}var d=function(){try{var e=new window.CustomEvent("test");if(e.preventDefault(),!0!==e.defaultPrevented)throw new Error("Could not prevent default");return window.CustomEvent}catch(e){}return t;function t(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=t.bubbles,r=void 0!==n&&n,o=t.cancelable,i=void 0!==o&&o,a=t.detail,l=void 0===a?void 0:a,s=document.createEvent("CustomEvent");s.initCustomEvent(e,r,i,l);var u=s.preventDefault;return s.preventDefault=function(){u.call(s);try{Object.defineProperty(this,"defaultPrevented",{get:function(){return!0}})}catch(e){this.defaultPrevented=!0}},s}}();function p(e,t,n){var r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},i=new d(t,o({},r,{detail:n}));e.dispatchEvent(i)}function h(e,t){var n,r;return(n=t,new RegExp("^"+n+"$|^"+n+"\\s|\\s"+n+"\\s|\\s"+n+"$",r)).test(e.className)}var m=/\s+/,v={transitionend:function(){for(var e=document.createElement("div").style,t={transition:"transitionend",OTransition:"oTransitionEnd otransitionend",MozTransition:"transitionend",WebkitTransition:"webkitTransitionEnd"},n=Object.keys(t),r=n.length,o=void 0,i=0;i<r;++i)if(void 0!==e[o=n[i]])return t[o];return null}()};function y(e,n,r,o){var i=arguments.length>4&&void 0!==arguments[4]&&arguments[4];if(v[n]&&(n=v[n]),!e||!n)return null;var a=void 0===r?"undefined":t(r);"function"===a&&(i=!!o,o=r);for(var l=r&&"string"===a?function(t){var n=t.target;for(;!h(n,r)&&n!==e;)n=n.parentNode;if(n!==e)return o(t,n)}:o,s=n.split(m),u=s.length,c=0;c<u;++c)e.addEventListener(s[c],l,i);return function t(){for(var n=0;n<u;++n)e.removeEventListener(s[n],l,i);!function(e,t){if(!e)return!1;for(var n=Object.keys(e),r=n.length,o=0;o<r;++o){var i=n[o];if(e[i]===t)return delete e[i]}}(this,t)}}var b={};function g(e,t){var n=y(arguments.length>2&&void 0!==arguments[2]?arguments[2]:document,e,t);b[e]||(b[e]={count:0});var r,o=b[e];return o.count++,o.onsubscribe||(o.onsubscribe=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},r=n.leading,o=void 0!==r&&r,i=n.trailing,a=void 0===i||i,l=n.maxWait,u=void 0!==l&&l,c=void 0,f=void 0,d=void 0,p=void 0,h=!1,m=t!==u,v=!1!==u;function y(){for(var n=arguments.length,r=Array(n),i=0;i<n;i++)r[i]=arguments[i];return c=r,m&&(f&&clearTimeout(f),f=setTimeout(b,t)),v&&!d&&(d=setTimeout(g,u)),o&&!h&&(h=!0,p=e.apply(void 0,s(c))),p}return y.flush=function(){return(f||d)&&(p=e.apply(void 0,s(c))),w(),p},y.cancel=w,y;function b(){d&&clearTimeout(d),x()}function g(){f&&clearTimeout(f),x()}function x(){a&&(p=e.apply(void 0,s(c))),f=null,d=null,h=!1}function w(){f&&(clearTimeout(f),f=null),d&&(clearTimeout(d),d=null),c=void 0,h=!1}}((r=e,function(){p(document,"pubsub/onsubscribe",r),p(document,"pubsub/onsubscribe/"+r,r),b[r]&&delete b[r].unsubscribe}),100)),o.onsubscribe(),function(){o.count--,n.call(this),o.count<=0&&delete b[e]}}function x(){return Reflect.construct(HTMLElement,[],this.__proto__.constructor)}y(document,"pubsub/onsubscribe",function(e){var t=e.detail;b[t]||(b[t]={count:0});var n=b[t],r=n.queue;Array.isArray(r)&&(r.forEach(function(e){var t=l(e,3),n=t[0],r=t[1],o=t[2];p(o,n,r)}),delete n.queue)}),Object.setPrototypeOf(x.prototype,HTMLElement.prototype),Object.setPrototypeOf(x,HTMLElement);var w={},_="throwed",C=function(e){function t(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",r=arguments[1];n(this,t);var o=a(this,(t.__proto__||Object.getPrototypeOf(t)).call(this));return o._makeContextReady=o._makeContextReady.bind(o),o._initialise(e,r),o}return i(t,x),r(t,[{key:"_initialise",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;this.initialClassName=this.className,this._styles=e,this._template=t}},{key:"connectedCallback",value:function(){this._appendStyles(),this.render(),this.contextCallback&&this._makeContextReady()}},{key:"disconnectedCallback",value:function(){this.unContextEnabled&&this.unContextEnabled()}},{key:"_appendStyles",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this;if(this._styles){var t=document.createElement("style"),n=document.createTextNode(this._styles);t.appendChild(n),e.insertAdjacentElement?e.insertAdjacentElement("afterbegin",t):e.appendChild(t)}}},{key:"render",value:function(){var e=this;if(!this._hasRendered){var t=this._template;if(t)try{for(var n=document.createDocumentFragment();this.firstChild;)n.appendChild(this.firstChild);var r=t(function(e){if(!e.hasAttributes)return null;for(var t={},n=e.attributes,r=n.length,o=0;o<r;++o){var i=n[o];t[i.name]=f(i)}return t}(this),n);if(Array.isArray(r))r.forEach(function(t){e.appendChild(t)});else if(r){if("string"==typeof r){var o=new Error(_);throw console.error("\n%cWeb Component %c"+this.nodeName+"%c does not accept string as a return from a template. Maybe use bel?\n\nStack Trace: "+o.stack+"\n","color: #580000; font-size: 14px; line-height:16px;","background: #8b0000; color: #FFF; font-size: 14px; line-height:16px;","color: #580000; font-size: 14px; line-height:16px;"),o}this.appendChild(r)}this._hasRendered=!0}catch(o){o.message!==_&&console.error("\n%cWeb Component %c"+this.nodeName+"%c has an error while loading its template:\n"+o+"\n\nStack Trace: "+o.stack+"\n","color: #580000; font-size: 14px; line-height:16px;","background: #8b0000; color: #FFF; font-size: 14px; line-height:16px;","color: #580000; font-size: 14px; line-height:16px;")}}}},{key:"enableContext",value:function(){var e=this.nodeName.toLowerCase();this.__isContext=!0,this.__contextName=e,function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:document;b[e]||(b[e]={count:0,queue:[]});var r=b[e].queue;Array.isArray(r)?r.push([e,t,n]):p(n,e,t)}("context/enabled",e)}},{key:"selectContext",value:function(e){this.__selectedContext=e&&e.toLowerCase()}},{key:"_makeContextReady",value:function(){var e=this,t=(arguments.length>0&&void 0!==arguments[0]?arguments[0]:{}).detail;this.contextNode&&(clearTimeout(this.timeoutId),this.timeoutId=setTimeout(function(){e.contextCallback(e.contextNode,t)},10)),this.unContextEnabled&&this.unContextEnabled(),this.unContextEnabled=g("context/enabled",this._makeContextReady)}},{key:"contextNode",get:function(){for(var e=this.__selectedContext,t=this.parentNode;t&&(!t.__isContext||e&&e!==t.__contextName);)t=t.parentNode;return!(!t||!t.__isContext)&&t}}],[{key:"uuidv4",value:function(){return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,function(e){var t=16*Math.random()|0;return("x"==e?t:3&t|8).toString(16)})}}]),t}(),k=(function(e){function t(){return n(this,t),a(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}i(t,C),r(t,[{key:"connectedCallback",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"open",t=this.attachShadow({mode:e});this._appendStyles(t),this.render()}}])}(),function(e){function t(){return n(this,t),a(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return i(t,C),r(t,[{key:"_appendStyles",value:function(){t.appendGlobalStyles(this._styles,this.nodeName)}}],[{key:"appendGlobalStyles",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:C.uuidv4();if(e&&!w[e]){var n=document.createElement("style"),r=document.createTextNode(e);n.appendChild(r),n.setAttribute("data-c-name",t.toLowerCase()),document.querySelector("head").appendChild(n),w[e]=!0}}}]),t}()),O=".m-header-main {\n  position: relative;\n  z-index: 1060;\n  display: block;\n  height: 75px;\n  border-bottom: 2px solid #e5e5e5;\n  background: #fff; }\n\n.m-header-main__box {\n  padding-right: 15px;\n  padding-left: 15px;\n  width: 100%;\n  margin-right: auto;\n  margin-left: auto;\n  max-width: auto;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-wrap: wrap;\n      flex-wrap: wrap;\n  height: 100%;\n  -ms-flex-wrap: nowrap;\n      flex-wrap: nowrap;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center; }\n  @media (min-width: 576px) {\n    .m-header-main__box {\n      max-width: 540px; } }\n  @media (min-width: 768px) {\n    .m-header-main__box {\n      max-width: 720px; } }\n  @media (min-width: 992px) {\n    .m-header-main__box {\n      max-width: 960px; } }\n  @media (min-width: 1200px) {\n    .m-header-main__box {\n      max-width: 1140px; } }\n  .m-header-main--first-left > .m-header-main__box > *:first-child + * {\n    margin-left: auto; }\n  @media (max-width: 991px) {\n    .m-header-main__box {\n      max-width: none !important; } }\n",E=function(e){return function(t,n,r){for(var o in n)o in A&&(n[A[o]]=n[o],delete n[o]);return e(t,n,r)}},A={class:"className",for:"htmlFor","http-equiv":"httpEquiv"};var T=1,N=2,j=3,S=4,L=5,P=6,F=7,M=8,R=9,D=10,G=11,z=12,$=13;var q=RegExp("^("+["area","base","basefont","bgsound","br","col","command","embed","frame","hr","img","input","isindex","keygen","link","meta","param","source","track","wbr","!--","animate","animateTransform","circle","cursor","desc","ellipse","feBlend","feColorMatrix","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feDistantLight","feFlood","feFuncA","feFuncB","feFuncG","feFuncR","feGaussianBlur","feImage","feMergeNode","feMorphology","feOffset","fePointLight","feSpecularLighting","feSpotLight","feTile","feTurbulence","font-face-format","font-face-name","font-face-uri","glyph","glyphRef","hkern","image","line","missing-glyph","mpath","path","polygon","polyline","rect","set","stop","tref","use","view","vkern"].join("|")+")(?:[.#][a-zA-Z0-9-￿_:-]+)*$");var V,W,B,I,H,J=/\n[\s]+$/,Z=/^\n[\s]+/,K=/[\s]+$/,Q=/^[\s]+/,U=/[\n\s]+/g,X=["a","abbr","b","bdi","bdo","br","cite","data","dfn","em","i","kbd","mark","q","rp","rt","rtc","ruby","s","amp","small","span","strong","sub","sup","time","u","var","wbr"],Y=["code","pre"],ee=function e(t,n){if(Array.isArray(n))for(var r,o,i=t.nodeName.toLowerCase(),a=!1,l=0,s=n.length;l<s;l++){var u=n[l];if(Array.isArray(u))e(t,u);else{("number"==typeof u||"boolean"==typeof u||"function"==typeof u||u instanceof Date||u instanceof RegExp)&&(u=u.toString());var c=t.childNodes[t.childNodes.length-1];if("string"==typeof u)a=!0,c&&"#text"===c.nodeName?c.nodeValue+=u:(u=document.createTextNode(u),t.appendChild(u),c=u),l===s-1&&(a=!1,-1===X.indexOf(i)&&-1===Y.indexOf(i)?""===(r=c.nodeValue.replace(Z,"").replace(K,"").replace(J,"").replace(U," "))?t.removeChild(c):c.nodeValue=r:-1===Y.indexOf(i)&&(o=0===l?"":" ",r=c.nodeValue.replace(Z,o).replace(Q," ").replace(K,"").replace(J,"").replace(U," "),c.nodeValue=r));else if(u&&u.nodeType){a&&(a=!1,-1===X.indexOf(i)&&-1===Y.indexOf(i)?""===(r=c.nodeValue.replace(Z,"").replace(J,"").replace(U," "))?t.removeChild(c):c.nodeValue=r:-1===Y.indexOf(i)&&(r=c.nodeValue.replace(Q," ").replace(Z,"").replace(J,"").replace(U," "),c.nodeValue=r));var f=u.nodeName;f&&(i=f.toLowerCase()),t.appendChild(u)}}}},te=e(function(e){var n="http://www.w3.org/2000/svg",r="http://www.w3.org/1999/xlink",o=["autofocus","checked","defaultchecked","disabled","formnovalidate","indeterminate","readonly","required","selected","willvalidate"],i="!--",a=["svg","altGlyph","altGlyphDef","altGlyphItem","animate","animateColor","animateMotion","animateTransform","circle","clipPath","color-profile","cursor","defs","desc","ellipse","feBlend","feColorMatrix","feComponentTransfer","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feDistantLight","feFlood","feFuncA","feFuncB","feFuncG","feFuncR","feGaussianBlur","feImage","feMerge","feMergeNode","feMorphology","feOffset","fePointLight","feSpecularLighting","feSpotLight","feTile","feTurbulence","filter","font","font-face","font-face-format","font-face-name","font-face-src","font-face-uri","foreignObject","g","glyph","glyphRef","hkern","image","line","linearGradient","marker","mask","metadata","missing-glyph","mpath","path","pattern","polygon","polyline","radialGradient","rect","set","stop","switch","symbol","text","textPath","title","tref","tspan","use","view","vkern"];function l(e,t,l){var s;-1!==a.indexOf(e)&&(t.namespace=n);var u=!1;if(t.namespace&&(u=t.namespace,delete t.namespace),u)s=document.createElementNS(u,e);else{if(e===i)return document.createComment(t.comment);s=document.createElement(e)}for(var c in t)if(t.hasOwnProperty(c)){var f=c.toLowerCase(),d=t[c];if("classname"===f&&(f="class",c="class"),"htmlFor"===c&&(c="for"),-1!==o.indexOf(f))if("true"===d)d=f;else if("false"===d)continue;"on"===f.slice(0,2)?s[c]=d:u?"xlink:href"===c?s.setAttributeNS(r,c,d):/^xmlns($|:)/i.test(c)||s.setAttributeNS(null,c,d):s.setAttribute(c,d)}return ee(s,l),s}e.exports=function(e,n){n||(n={});var r=n.concat||function(e,t){return String(e)+String(t)};return!1!==n.attrToProp&&(e=E(e)),function(i){for(var a=T,l="",s=arguments.length,u=[],c=0;c<i.length;c++)if(c<s-1){var f=arguments[c+1],d=k(i[c]),p=a;p===D&&(p=M),p===R&&(p=M),p===F&&(p=M),p===S&&(p=L),d.push([0,p,f]),u.push.apply(u,d)}else u.push.apply(u,k(i[c]));var h,m=[null,{},[]],v=[[m,-1]];for(c=0;c<u.length;c++){var y=v[v.length-1][0],b=(d=u[c])[0];if(b===N&&/^\//.test(d[1])){var g=v[v.length-1][1];v.length>1&&(v.pop(),v[v.length-1][0][2][g]=e(y[0],y[1],y[2].length?y[2]:void 0))}else if(b===N){var x=[d[1],{},[]];y[2].push(x),v.push([x,y[2].length-1])}else if(b===L||0===b&&d[1]===L){for(var w,_="";c<u.length;c++)if(u[c][0]===L)_=r(_,u[c][1]);else{if(0!==u[c][0]||u[c][1]!==L)break;if("object"!==t(u[c][2])||_)_=r(_,u[c][2]);else for(w in u[c][2])u[c][2].hasOwnProperty(w)&&!y[1][w]&&(y[1][w]=u[c][2][w])}u[c][0]===G&&c++;for(var C=c;c<u.length;c++)if(u[c][0]===M||u[c][0]===L)y[1][_]?""===u[c][1]||(y[1][_]=r(y[1][_],u[c][1])):y[1][_]=o(u[c][1]);else{if(0!==u[c][0]||u[c][1]!==M&&u[c][1]!==L){!_.length||y[1][_]||c!==C||u[c][0]!==j&&u[c][0]!==z||(y[1][_]=_.toLowerCase()),u[c][0]===j&&c--;break}y[1][_]?""===u[c][2]||(y[1][_]=r(y[1][_],u[c][2])):y[1][_]=o(u[c][2])}}else if(b===L)y[1][d[1]]=!0;else if(0===b&&d[1]===L)y[1][d[2]]=!0;else if(b===j)h=y[0],q.test(h)&&v.length&&(g=v[v.length-1][1],v.pop(),v[v.length-1][0][2][g]=e(y[0],y[1],y[2].length?y[2]:void 0));else if(0===b&&d[1]===T)void 0===d[2]||null===d[2]?d[2]="":d[2]||(d[2]=r("",d[2])),Array.isArray(d[2][0])?y[2].push.apply(y[2],d[2]):y[2].push(d[2]);else if(b===T)y[2].push(d[1]);else if(b!==G&&b!==z)throw new Error("unhandled: "+b)}if(m[2].length>1&&/^\s*$/.test(m[2][0])&&m[2].shift(),m[2].length>2||2===m[2].length&&/\S/.test(m[2][1]))throw new Error("multiple root elements must be wrapped in an enclosing tag");return Array.isArray(m[2][0])&&"string"==typeof m[2][0][0]&&Array.isArray(m[2][0][2])&&(m[2][0]=e(m[2][0][0],m[2][0][1],m[2][0][2])),m[2][0];function k(e){var t,r=[];a===F&&(a=S);for(var o=0;o<e.length;o++){var i=e.charAt(o);a===T&&"<"===i?(l.length&&r.push([T,l]),l="",a=N):">"===i&&(t=a)!==R&&t!==D&&a!==$?(a===N?r.push([N,l]):a===L?r.push([L,l]):a===M&&l.length&&r.push([M,l]),r.push([j]),l="",a=T):a===$&&/-$/.test(l)&&"-"===i?(n.comments&&r.push([M,l.substr(0,l.length-1)],[j]),l="",a=T):a===N&&/^!--$/.test(l)?(n.comments&&r.push([N,l],[L,"comment"],[G]),l=i,a=$):a===T||a===$?l+=i:a===N&&/\s/.test(i)?(r.push([N,l]),l="",a=S):a===N?l+=i:a===S&&/[^\s"'=/]/.test(i)?(a=L,l=i):a===S&&/\s/.test(i)?(l.length&&r.push([L,l]),r.push([z])):a===L&&/\s/.test(i)?(r.push([L,l]),l="",a=P):a===L&&"="===i?(r.push([L,l],[G]),l="",a=F):a===L?l+=i:a!==P&&a!==S||"="!==i?a!==P&&a!==S||/\s/.test(i)?a===F&&'"'===i?a=D:a===F&&"'"===i?a=R:a===D&&'"'===i?(r.push([M,l],[z]),l="",a=S):a===R&&"'"===i?(r.push([M,l],[z]),l="",a=S):a!==F||/\s/.test(i)?a===M&&/\s/.test(i)?(r.push([M,l],[z]),l="",a=S):a!==M&&a!==R&&a!==D||(l+=i):(a=M,o--):(r.push([z]),/[\w-]/.test(i)?(l+=i,a=L):a=S):(r.push([G]),a=F)}return a===T&&l.length?(r.push([T,l]),l=""):a===M&&l.length?(r.push([M,l]),l=""):a===D&&l.length?(r.push([M,l]),l=""):a===R&&l.length?(r.push([M,l]),l=""):a===L&&(r.push([L,l]),l=""),r}};function o(e){return"function"==typeof e?e:"string"==typeof e?e:e&&"object"===(void 0===e?"undefined":t(e))?e:r("",e)}}(l,{comments:!0}),e.exports.default=e.exports,e.exports.createElement=l}),ne=(te.createElement,V=['\n  <div class="m-header-main__box">',"</div>\n"],W=['\n  <div class="m-header-main__box">',"</div>\n"],Object.freeze(Object.defineProperties(V,{raw:{value:Object.freeze(W)}}))),re=function(e,t){return te(ne,t)},oe=function(e){function t(){return n(this,t),a(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,O,re))}return i(t,k),r(t,[{key:"connectedCallback",value:function(){(function e(t,n,r){null===t&&(t=Function.prototype);var o=Object.getOwnPropertyDescriptor(t,n);if(void 0===o){var i=Object.getPrototypeOf(t);return null===i?void 0:e(i,n,r)}if("value"in o)return o.value;var a=o.get;return void 0!==a?a.call(r):void 0})(t.prototype.__proto__||Object.getPrototypeOf(t.prototype),"connectedCallback",this).call(this);var e=f("first-left");this.className=u(this.initialClassName,"m-header-main",{"m-header-main--first-left":e})}}]),t}();return B=function(){window.customElements.define("axa-header-main",oe)},I=0,H=function(){if(0===I)try{B.apply(void 0,arguments),I+=1,document.removeEventListener("DOMContentLoaded"),document.removeEventListener("WebComponentsReady")}catch(e){}},document.addEventListener("DOMContentLoaded",H,!1),document.addEventListener("WebComponentsReady",H,!1),oe});
