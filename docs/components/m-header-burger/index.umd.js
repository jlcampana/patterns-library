!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):e.StyleGuideWebComponent=t()}(this,function(){"use strict";var e=/^\s*(?:true|false|null|undefined|-?[0-9]+\.?[0-9]*|[[{](?:.|[\r\n])*[\]}])\s*$/;function t(t,n){if("function"==typeof t.hasAttribute&&!t.hasAttribute(n))return!1;var r=t.value;if(n?r=t.getAttribute(n):n=t.name,r&&n!==r){if(e.test(r))try{r=JSON.parse(r)}catch(e){console.error("Attribute "+t+" has an error:\n"+e+"\n",r)}}else r=!0;return r}var n=function(){try{var e=new window.CustomEvent("test");if(e.preventDefault(),!0!==e.defaultPrevented)throw new Error("Could not prevent default");return window.CustomEvent}catch(e){}return t;function t(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=t.bubbles,r=void 0!==n&&n,o=t.cancelable,i=void 0!==o&&o,a=t.detail,s=void 0===a?void 0:a,u=document.createEvent("CustomEvent");u.initCustomEvent(e,r,i,s);var l=u.preventDefault;return u.preventDefault=function(){l.call(u);try{Object.defineProperty(this,"defaultPrevented",{get:function(){return!0}})}catch(e){this.defaultPrevented=!0}},u}}(),r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},o=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")},i=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},s=function e(t,n,r){null===t&&(t=Function.prototype);var o=Object.getOwnPropertyDescriptor(t,n);if(void 0===o){var i=Object.getPrototypeOf(t);return null===i?void 0:e(i,n,r)}if("value"in o)return o.value;var a=o.get;return void 0!==a?a.call(r):void 0},u=function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)},l=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t},c=function(){return function(e,t){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return function(e,t){var n=[],r=!0,o=!1,i=void 0;try{for(var a,s=e[Symbol.iterator]();!(r=(a=s.next()).done)&&(n.push(a.value),!t||n.length!==t);r=!0);}catch(e){o=!0,i=e}finally{try{!r&&s.return&&s.return()}finally{if(o)throw i}}return n}(e,t);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),f=function(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}return Array.from(e)};function d(e,t,r){var o=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},i=new n(t,a({},o,{detail:r}));e.dispatchEvent(i)}var h=/^\s+|\s{2,}|\s+$/g;function p(e,t){return new RegExp("^"+e+"$|^"+e+"\\s|\\s"+e+"\\s|\\s"+e+"$",t)}function m(e,t){return p(t).test(e.className)}var b=/\s+/,v={transitionend:function(){for(var e=document.createElement("div").style,t={transition:"transitionend",OTransition:"oTransitionEnd otransitionend",MozTransition:"transitionend",WebkitTransition:"webkitTransitionEnd"},n=Object.keys(t),r=n.length,o=void 0,i=0;i<r;++i)if(void 0!==e[o=n[i]])return t[o];return null}()};function y(e,t,n,o){var i=arguments.length>4&&void 0!==arguments[4]&&arguments[4];if(v[t]&&(t=v[t]),!e||!t)return null;var a=void 0===n?"undefined":r(n);"function"===a&&(i=!!o,o=n);for(var s=n&&"string"===a?function(t){var r=t.target;for(;!m(r,n)&&r!==e;)r=r.parentNode;if(r!==e)return o(t,r)}:o,u=t.split(b),l=u.length,c=0;c<l;++c)e.addEventListener(u[c],s,i);return function t(){for(var n=0;n<l;++n)e.removeEventListener(u[n],s,i);!function(e,t){if(!e)return!1;for(var n=Object.keys(e),r=n.length,o=0;o<r;++o){var i=n[o];if(e[i]===t)return delete e[i]}}(this,t)}}var g={};function x(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:document;g[e]||(g[e]={count:0,queue:[]});var r=g[e].queue;Array.isArray(r)?r.push([e,t,n]):d(n,e,t)}function _(e,t){var n=y(arguments.length>2&&void 0!==arguments[2]?arguments[2]:document,e,t);g[e]||(g[e]={count:0});var r,o=g[e];return o.count++,o.onsubscribe||(o.onsubscribe=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},r=n.leading,o=void 0!==r&&r,i=n.trailing,a=void 0===i||i,s=n.maxWait,u=void 0!==s&&s,l=void 0,c=void 0,d=void 0,h=void 0,p=!1,m=t!==u,b=!1!==u;function v(){for(var n=arguments.length,r=Array(n),i=0;i<n;i++)r[i]=arguments[i];return l=r,m&&(c&&clearTimeout(c),c=setTimeout(y,t)),b&&!d&&(d=setTimeout(g,u)),o&&!p&&(p=!0,h=e.apply(void 0,f(l))),h}return v.flush=function(){return(c||d)&&(h=e.apply(void 0,f(l))),_(),h},v.cancel=_,v;function y(){d&&clearTimeout(d),x()}function g(){c&&clearTimeout(c),x()}function x(){a&&(h=e.apply(void 0,f(l))),c=null,d=null,p=!1}function _(){c&&(clearTimeout(c),c=null),d&&(clearTimeout(d),d=null),l=void 0,p=!1}}((r=e,function(){d(document,"pubsub/onsubscribe",r),d(document,"pubsub/onsubscribe/"+r,r),g[r]&&delete g[r].unsubscribe}),100)),o.onsubscribe(),function(){o.count--,n.call(this),o.count<=0&&delete g[e]}}function w(){return Reflect.construct(HTMLElement,[],this.__proto__.constructor)}y(document,"pubsub/onsubscribe",function(e){var t=e.detail;g[t]||(g[t]={count:0});var n=g[t],r=n.queue;Array.isArray(r)&&(r.forEach(function(e){var t=c(e,3),n=t[0],r=t[1],o=t[2];d(o,n,r)}),delete n.queue)}),Object.setPrototypeOf(w.prototype,HTMLElement.prototype),Object.setPrototypeOf(w,HTMLElement);var C={},k="throwed",E=function(e){function n(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments[1];o(this,n);var r=l(this,(n.__proto__||Object.getPrototypeOf(n)).call(this));return r._makeContextReady=r._makeContextReady.bind(r),r._initialise(e,t),r}return u(n,w),i(n,[{key:"_initialise",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;this.initialClassName=this.className,this._styles=e,this._template=t}},{key:"connectedCallback",value:function(){this._appendStyles(),this.render(),this.contextCallback&&this._makeContextReady()}},{key:"disconnectedCallback",value:function(){this.unContextEnabled&&this.unContextEnabled()}},{key:"_appendStyles",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this;if(this._styles){var t=document.createElement("style"),n=document.createTextNode(this._styles);t.appendChild(n),e.insertAdjacentElement?e.insertAdjacentElement("afterbegin",t):e.appendChild(t)}}},{key:"render",value:function(){var e=this;if(!this._hasRendered){var n=this._template;if(n)try{for(var r=document.createDocumentFragment();this.firstChild;)r.appendChild(this.firstChild);var o=n(function(e){if(!e.hasAttributes)return null;for(var n={},r=e.attributes,o=r.length,i=0;i<o;++i){var a=r[i];n[a.name]=t(a)}return n}(this),r);if(Array.isArray(o))o.forEach(function(t){e.appendChild(t)});else if(o){if("string"==typeof o){var i=new Error(k);throw console.error("\n%cWeb Component %c"+this.nodeName+"%c does not accept string as a return from a template. Maybe use bel?\n\nStack Trace: "+i.stack+"\n","color: #580000; font-size: 14px; line-height:16px;","background: #8b0000; color: #FFF; font-size: 14px; line-height:16px;","color: #580000; font-size: 14px; line-height:16px;"),i}this.appendChild(o)}this._hasRendered=!0}catch(i){i.message!==k&&console.error("\n%cWeb Component %c"+this.nodeName+"%c has an error while loading its template:\n"+i+"\n\nStack Trace: "+i.stack+"\n","color: #580000; font-size: 14px; line-height:16px;","background: #8b0000; color: #FFF; font-size: 14px; line-height:16px;","color: #580000; font-size: 14px; line-height:16px;")}}}},{key:"enableContext",value:function(){var e=this.nodeName.toLowerCase();this.__isContext=!0,this.__contextName=e,x("context/enabled",e)}},{key:"selectContext",value:function(e){this.__selectedContext=e&&e.toLowerCase()}},{key:"_makeContextReady",value:function(){var e=this,t=(arguments.length>0&&void 0!==arguments[0]?arguments[0]:{}).detail;this.contextNode&&(clearTimeout(this.timeoutId),this.timeoutId=setTimeout(function(){e.contextCallback(e.contextNode,t)},10)),this.unContextEnabled&&this.unContextEnabled(),this.unContextEnabled=_("context/enabled",this._makeContextReady)}},{key:"contextNode",get:function(){for(var e=this.__selectedContext,t=this.parentNode;t&&(!t.__isContext||e&&e!==t.__contextName);)t=t.parentNode;return!(!t||!t.__isContext)&&t}}],[{key:"uuidv4",value:function(){return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,function(e){var t=16*Math.random()|0;return("x"==e?t:3&t|8).toString(16)})}}]),n}(),O=(function(e){function t(){return o(this,t),l(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}u(t,E),i(t,[{key:"connectedCallback",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"open",t=this.attachShadow({mode:e});this._appendStyles(t),this.render()}}])}(),function(e){function t(){return o(this,t),l(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return u(t,E),i(t,[{key:"_appendStyles",value:function(){t.appendGlobalStyles(this._styles,this.nodeName)}}],[{key:"appendGlobalStyles",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:E.uuidv4();if(e&&!C[e]){var n=document.createElement("style"),r=document.createTextNode(e);n.appendChild(r),n.setAttribute("data-c-name",t.toLowerCase()),document.querySelector("head").appendChild(n),C[e]=!0}}}]),t}()),N=".m-header-burger {\n  display: block; }\n\n.m-header-burger__button {\n  background: transparent;\n  border: none;\n  cursor: pointer;\n  display: none;\n  margin-left: 15px;\n  color: #00008f; }\n  .m-header-burger__button:hover, .m-header-burger__button:active, .m-header-burger__button:focus {\n    outline: none;\n    cursor: pointer; }\n  @media (max-width: 991px) {\n    .m-header-burger__button {\n      display: block; } }\n\n.m-header-burger__icon {\n  width: 25px;\n  height: 25px;\n  display: block;\n  fill: currentColor; }\n  .is-burger-open .m-header-burger__icon {\n    display: none; }\n\n.m-header-burger__close-icon {\n  width: 25px;\n  height: 25px;\n  display: block;\n  fill: currentColor;\n  display: none; }\n  .is-burger-open .m-header-burger__close-icon {\n    display: block; }\n";var S=function(e){return function(t,n,r){for(var o in n)o in A&&(n[A[o]]=n[o],delete n[o]);return e(t,n,r)}},A={class:"className",for:"htmlFor","http-equiv":"httpEquiv"};var T=1,j=2,L=3,P=4,R=5,F=6,M=7,D=8,z=9,q=10,B=11,G=12,$=13;var V=RegExp("^("+["area","base","basefont","bgsound","br","col","command","embed","frame","hr","img","input","isindex","keygen","link","meta","param","source","track","wbr","!--","animate","animateTransform","circle","cursor","desc","ellipse","feBlend","feColorMatrix","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feDistantLight","feFlood","feFuncA","feFuncB","feFuncG","feFuncR","feGaussianBlur","feImage","feMergeNode","feMorphology","feOffset","fePointLight","feSpecularLighting","feSpotLight","feTile","feTurbulence","font-face-format","font-face-name","font-face-uri","glyph","glyphRef","hkern","image","line","missing-glyph","mpath","path","polygon","polyline","rect","set","stop","tref","use","view","vkern"].join("|")+")(?:[.#][a-zA-Z0-9-￿_:-]+)*$");var U,W=/\n[\s]+$/,I=/^\n[\s]+/,K=/[\s]+$/,H=/^[\s]+/,Y=/[\n\s]+/g,Z=["a","abbr","b","bdi","bdo","br","cite","data","dfn","em","i","kbd","mark","q","rp","rt","rtc","ruby","s","amp","small","span","strong","sub","sup","time","u","var","wbr"],J=["code","pre"],Q=function e(t,n){if(Array.isArray(n))for(var r,o,i=t.nodeName.toLowerCase(),a=!1,s=0,u=n.length;s<u;s++){var l=n[s];if(Array.isArray(l))e(t,l);else{("number"==typeof l||"boolean"==typeof l||"function"==typeof l||l instanceof Date||l instanceof RegExp)&&(l=l.toString());var c=t.childNodes[t.childNodes.length-1];if("string"==typeof l)a=!0,c&&"#text"===c.nodeName?c.nodeValue+=l:(l=document.createTextNode(l),t.appendChild(l),c=l),s===u-1&&(a=!1,-1===Z.indexOf(i)&&-1===J.indexOf(i)?""===(r=c.nodeValue.replace(I,"").replace(K,"").replace(W,"").replace(Y," "))?t.removeChild(c):c.nodeValue=r:-1===J.indexOf(i)&&(o=0===s?"":" ",r=c.nodeValue.replace(I,o).replace(H," ").replace(K,"").replace(W,"").replace(Y," "),c.nodeValue=r));else if(l&&l.nodeType){a&&(a=!1,-1===Z.indexOf(i)&&-1===J.indexOf(i)?""===(r=c.nodeValue.replace(I,"").replace(W,"").replace(Y," "))?t.removeChild(c):c.nodeValue=r:-1===J.indexOf(i)&&(r=c.nodeValue.replace(H," ").replace(I,"").replace(W,"").replace(Y," "),c.nodeValue=r));var f=l.nodeName;f&&(i=f.toLowerCase()),t.appendChild(l)}}}},X=(function(e){var t="http://www.w3.org/2000/svg",n="http://www.w3.org/1999/xlink",o=["autofocus","checked","defaultchecked","disabled","formnovalidate","indeterminate","readonly","required","selected","willvalidate"],i="!--",a=["svg","altGlyph","altGlyphDef","altGlyphItem","animate","animateColor","animateMotion","animateTransform","circle","clipPath","color-profile","cursor","defs","desc","ellipse","feBlend","feColorMatrix","feComponentTransfer","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feDistantLight","feFlood","feFuncA","feFuncB","feFuncG","feFuncR","feGaussianBlur","feImage","feMerge","feMergeNode","feMorphology","feOffset","fePointLight","feSpecularLighting","feSpotLight","feTile","feTurbulence","filter","font","font-face","font-face-format","font-face-name","font-face-src","font-face-uri","foreignObject","g","glyph","glyphRef","hkern","image","line","linearGradient","marker","mask","metadata","missing-glyph","mpath","path","pattern","polygon","polyline","radialGradient","rect","set","stop","switch","symbol","text","textPath","title","tref","tspan","use","view","vkern"];function s(e,r,s){var u;-1!==a.indexOf(e)&&(r.namespace=t);var l=!1;if(r.namespace&&(l=r.namespace,delete r.namespace),l)u=document.createElementNS(l,e);else{if(e===i)return document.createComment(r.comment);u=document.createElement(e)}for(var c in r)if(r.hasOwnProperty(c)){var f=c.toLowerCase(),d=r[c];if("classname"===f&&(f="class",c="class"),"htmlFor"===c&&(c="for"),-1!==o.indexOf(f))if("true"===d)d=f;else if("false"===d)continue;"on"===f.slice(0,2)?u[c]=d:l?"xlink:href"===c?u.setAttributeNS(n,c,d):/^xmlns($|:)/i.test(c)||u.setAttributeNS(null,c,d):u.setAttribute(c,d)}return Q(u,s),u}e.exports=function(e,t){t||(t={});var n=t.concat||function(e,t){return String(e)+String(t)};return!1!==t.attrToProp&&(e=S(e)),function(i){for(var a=T,s="",u=arguments.length,l=[],c=0;c<i.length;c++)if(c<u-1){var f=arguments[c+1],d=k(i[c]),h=a;h===q&&(h=D),h===z&&(h=D),h===M&&(h=D),h===P&&(h=R),d.push([0,h,f]),l.push.apply(l,d)}else l.push.apply(l,k(i[c]));var p,m=[null,{},[]],b=[[m,-1]];for(c=0;c<l.length;c++){var v=b[b.length-1][0],y=(d=l[c])[0];if(y===j&&/^\//.test(d[1])){var g=b[b.length-1][1];b.length>1&&(b.pop(),b[b.length-1][0][2][g]=e(v[0],v[1],v[2].length?v[2]:void 0))}else if(y===j){var x=[d[1],{},[]];v[2].push(x),b.push([x,v[2].length-1])}else if(y===R||0===y&&d[1]===R){for(var _,w="";c<l.length;c++)if(l[c][0]===R)w=n(w,l[c][1]);else{if(0!==l[c][0]||l[c][1]!==R)break;if("object"!==r(l[c][2])||w)w=n(w,l[c][2]);else for(_ in l[c][2])l[c][2].hasOwnProperty(_)&&!v[1][_]&&(v[1][_]=l[c][2][_])}l[c][0]===B&&c++;for(var C=c;c<l.length;c++)if(l[c][0]===D||l[c][0]===R)v[1][w]?""===l[c][1]||(v[1][w]=n(v[1][w],l[c][1])):v[1][w]=o(l[c][1]);else{if(0!==l[c][0]||l[c][1]!==D&&l[c][1]!==R){!w.length||v[1][w]||c!==C||l[c][0]!==L&&l[c][0]!==G||(v[1][w]=w.toLowerCase()),l[c][0]===L&&c--;break}v[1][w]?""===l[c][2]||(v[1][w]=n(v[1][w],l[c][2])):v[1][w]=o(l[c][2])}}else if(y===R)v[1][d[1]]=!0;else if(0===y&&d[1]===R)v[1][d[2]]=!0;else if(y===L)p=v[0],V.test(p)&&b.length&&(g=b[b.length-1][1],b.pop(),b[b.length-1][0][2][g]=e(v[0],v[1],v[2].length?v[2]:void 0));else if(0===y&&d[1]===T)void 0===d[2]||null===d[2]?d[2]="":d[2]||(d[2]=n("",d[2])),Array.isArray(d[2][0])?v[2].push.apply(v[2],d[2]):v[2].push(d[2]);else if(y===T)v[2].push(d[1]);else if(y!==B&&y!==G)throw new Error("unhandled: "+y)}if(m[2].length>1&&/^\s*$/.test(m[2][0])&&m[2].shift(),m[2].length>2||2===m[2].length&&/\S/.test(m[2][1]))throw new Error("multiple root elements must be wrapped in an enclosing tag");return Array.isArray(m[2][0])&&"string"==typeof m[2][0][0]&&Array.isArray(m[2][0][2])&&(m[2][0]=e(m[2][0][0],m[2][0][1],m[2][0][2])),m[2][0];function k(e){var n,r=[];a===M&&(a=P);for(var o=0;o<e.length;o++){var i=e.charAt(o);a===T&&"<"===i?(s.length&&r.push([T,s]),s="",a=j):">"===i&&(n=a)!==z&&n!==q&&a!==$?(a===j?r.push([j,s]):a===R?r.push([R,s]):a===D&&s.length&&r.push([D,s]),r.push([L]),s="",a=T):a===$&&/-$/.test(s)&&"-"===i?(t.comments&&r.push([D,s.substr(0,s.length-1)],[L]),s="",a=T):a===j&&/^!--$/.test(s)?(t.comments&&r.push([j,s],[R,"comment"],[B]),s=i,a=$):a===T||a===$?s+=i:a===j&&/\s/.test(i)?(r.push([j,s]),s="",a=P):a===j?s+=i:a===P&&/[^\s"'=/]/.test(i)?(a=R,s=i):a===P&&/\s/.test(i)?(s.length&&r.push([R,s]),r.push([G])):a===R&&/\s/.test(i)?(r.push([R,s]),s="",a=F):a===R&&"="===i?(r.push([R,s],[B]),s="",a=M):a===R?s+=i:a!==F&&a!==P||"="!==i?a!==F&&a!==P||/\s/.test(i)?a===M&&'"'===i?a=q:a===M&&"'"===i?a=z:a===q&&'"'===i?(r.push([D,s],[G]),s="",a=P):a===z&&"'"===i?(r.push([D,s],[G]),s="",a=P):a!==M||/\s/.test(i)?a===D&&/\s/.test(i)?(r.push([D,s],[G]),s="",a=P):a!==D&&a!==z&&a!==q||(s+=i):(a=D,o--):(r.push([G]),/[\w-]/.test(i)?(s+=i,a=R):a=P):(r.push([B]),a=M)}return a===T&&s.length?(r.push([T,s]),s=""):a===D&&s.length?(r.push([D,s]),s=""):a===q&&s.length?(r.push([D,s]),s=""):a===z&&s.length?(r.push([D,s]),s=""):a===R&&(r.push([R,s]),s=""),r}};function o(e){return"function"==typeof e?e:"string"==typeof e?e:e&&"object"===(void 0===e?"undefined":r(e))?e:n("",e)}}(s,{comments:!0}),e.exports.default=e.exports,e.exports.createElement=s}(U={exports:{}},U.exports),U.exports);X.createElement;var ee,te,ne=function(e){return"undefined"!=typeof window?((n=document.createElement("div")).innerHTML=e,r=n.childNodes,Array.isArray(r)?r:[].slice.call(r)):((t=new String(e)).__encoded=!0,t);var t,n,r},re=(ee=['\n  <button type="button" class="m-header-burger__button js-header-burger__button">\n    ',"\n\n    ","\n  </button>\n"],te=['\n  <button type="button" class="m-header-burger__button js-header-burger__button">\n    ',"\n\n    ","\n  </button>\n"],Object.freeze(Object.defineProperties(ee,{raw:{value:Object.freeze(te)}}))),oe=function(){return X(re,ne('<axa-icon id="menu" classes="m-header-burger__icon"></axa-icon>'),ne('<axa-icon id="cross-gap" classes="m-header-burger__close-icon"></axa-icon>'))};function ie(e){var t=e.ownerDocument;return t.defaultView||t.parentWindow}function ae(e){for(var t=e,n=0;t;)n+=t.offsetTop,t=t.offsetParent;return n}var se="pageYOffset"in window?function(){return window.pageYOffset}:function(){var e=document,t=e.body;return e.documentElement.scrollTop||t.scrollTop||0};var ue,le=function(){if(!window.getComputedStyle)return null;var e=window.getComputedStyle(document.documentElement,""),t=(Array.prototype.slice.call(e).join("").match(/-(moz|webkit|ms)-/)||""===e.OLink&&["","o"])[1];return{dom:"WebKit|Moz|MS|O".match(new RegExp("("+t+")","i"))[1],lowercase:t,css:"-"+t+"-",js:t[0].toUpperCase()+t.slice(1)}}().lowercase,ce=function(){var e=window.requestAnimationFrame||window[le+"RequestAnimationFrame"];if(e)e=e.bind(window);else{var t=0;e=function(e){var n=Date.now(),r=Math.max(0,16-(n-t)),o=setTimeout(function(){e(n+r)},r);return t=n+r,o}}return e}(),fe=(ue=(ue=window.cancelAnimationFrame||window[le+"CancelAnimationFrame"]||window[le+"CancelRequestAnimationFrame"])?ue.bind(window):function(e){clearTimeout(e)},function(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];for(var r=t.length,o={},i=0;i<r;++i){var a=t[i];o[a.toUpperCase()]=a}return o}("click","resize","keyup")),de=function(){function e(t,n){o(this,e),this.wcNode=t,this.options=a({},e.DEFAULTS,n),this.isOpen=!1,this._handleBurgerClick=this._handleBurgerClick.bind(this),this._handleResize=this._handleResize.bind(this),this._handleKeyUp=this._handleKeyUp.bind(this),this.open=this.open.bind(this),this.close=this.close.bind(this),this.init()}return i(e,[{key:"init",value:function(){this.burger=this.wcNode.querySelector(this.options.burger),this.on()}},{key:"onContextEnabled",value:function(){this._contextNode&&(this.offContextEnabled(),this.unSubscribeOpen=_("header-mobile/open",this.open,this._contextNode),this.unSubscribeClose=_("header-mobile/close",this.close,this._contextNode))}},{key:"offContextEnabled",value:function(){this.unSubscribeOpen&&this.unSubscribeOpen(),this.unSubscribeClose&&this.unSubscribeClose()}},{key:"on",value:function(){this.off(),this._unBurgerClick=y(this.burger,fe.CLICK,this._handleBurgerClick),this._unResize=y(ie(this.wcNode),fe.RESIZE,this._handleResize),this._unCloseEscape=y(this.wcNode.ownerDocument,fe.KEYUP,this._handleKeyUp)}},{key:"off",value:function(){this._unBurgerClick&&this._unBurgerClick(),this._unResize&&this._unResize(),this._unCloseEscape&&this._unCloseEscape(),this.offContextEnabled()}},{key:"_handleBurgerClick",value:function(e){e.preventDefault(),this.isOpen?this.close():this.open()}},{key:"_handleResize",value:function(){this.close()}},{key:"_handleKeyUp",value:function(e){var t=e.key,n=e.keyCode;(t===fe.ESCAPE||t===fe.ESC||27===n)&&(e.preventDefault(),this.close())}},{key:"open",value:function(e){if(!this.isOpen){this.isOpen=!0;var t,n,r,o,i,a=ae(this.wcNode);0!==a&&a!==se()&&(x("sticky-container/freeze-direction"),t=this.wcNode.parentNode.parentNode.parentNode.parentNode,n=ie(t),r=ae(t),n.scrollTo(0,r),ce(function(){setTimeout(function(){x("sticky-container/thaw-direction")},50)})),o=this.burger,i=this.options.burgerState,m(o,i)||(o.className+=" "+i),!e&&this._contextNode&&x("header-mobile/open",null,this._contextNode)}}},{key:"close",value:function(e){this.isOpen&&(this.isOpen=!1,function(e,t){if(m(e,t)){var n=p(t,"g");e.className=e.className.replace(n," ").replace(h," ")}}(this.burger,this.options.burgerState),!e&&this._contextNode&&x("header-mobile/close",null,this._contextNode))}},{key:"destroy",value:function(){this.off(),delete this.burger}},{key:"contextNode",set:function(e){this._contextNode=e,this.onContextEnabled()}}]),e}();de.DEFAULTS={burger:".js-header-burger__button",burgerState:"is-burger-open"};var he,pe,me,be=function(e){function t(){o(this,t);var e=l(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,N,oe));return e.selectContext("axa-header"),e}return u(t,O),i(t,[{key:"connectedCallback",value:function(){s(t.prototype.__proto__||Object.getPrototypeOf(t.prototype),"connectedCallback",this).call(this),this.className=this.initialClassName+" m-header-burger",this.burger=new de(this)}},{key:"disconnectedCallback",value:function(){s(t.prototype.__proto__||Object.getPrototypeOf(t.prototype),"disconnectedCallback",this).call(this),this.burger.destroy(),delete this.burger}},{key:"contextCallback",value:function(e){this.burger.contextNode=e}}]),t}();return he=function(){window.customElements.define("axa-header-burger",be)},pe=0,me=function(){if(0===pe)try{he.apply(void 0,arguments),pe+=1,document.removeEventListener("DOMContentLoaded"),document.removeEventListener("WebComponentsReady")}catch(e){}},document.addEventListener("DOMContentLoaded",me,!1),document.addEventListener("WebComponentsReady",me,!1),be});
