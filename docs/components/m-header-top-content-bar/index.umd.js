!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):e.StyleGuideWebComponent=t()}(this,function(){"use strict";var e=".m-header-top-content-bar {\n  display: block;\n  padding-top: 20px;\n  padding-bottom: 20px;\n  color: #fff; }\n  .m-header-mobile .m-header-top-content-bar {\n    padding-top: 20px !important;\n    padding-bottom: 20px !important; }\n  @media (min-width: 576px) {\n    .m-header-top-content-bar {\n      padding-top: 5px;\n      padding-bottom: 5px; } }\n\n.m-header-top-content-bar,\n.m-header-top-content-bar--corporate {\n  background: #027180; }\n\n.m-header-top-content-bar--commercial {\n  background: #00005b; }\n\n.m-header-top-content-bar--warning {\n  background: #c91432; }\n\n.m-header-top-content-bar__box {\n  padding-right: 15px;\n  padding-left: 15px;\n  width: 100%;\n  margin-right: auto;\n  margin-left: auto;\n  max-width: auto;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center; }\n  @media (min-width: 576px) {\n    .m-header-top-content-bar__box {\n      max-width: 540px; } }\n  @media (min-width: 768px) {\n    .m-header-top-content-bar__box {\n      max-width: 720px; } }\n  @media (min-width: 992px) {\n    .m-header-top-content-bar__box {\n      max-width: 960px; } }\n  @media (min-width: 1200px) {\n    .m-header-top-content-bar__box {\n      max-width: 1140px; } }\n  .m-header-mobile .m-header-top-content-bar__box {\n    -webkit-box-orient: vertical !important;\n    -webkit-box-direction: normal !important;\n        -ms-flex-direction: column !important;\n            flex-direction: column !important;\n    -webkit-box-align: center !important;\n        -ms-flex-align: center !important;\n            align-items: center !important; }\n  @media (min-width: 576px) {\n    .m-header-top-content-bar__box {\n      -webkit-box-orient: horizontal;\n      -webkit-box-direction: normal;\n          -ms-flex-direction: row;\n              flex-direction: row;\n      -webkit-box-pack: center;\n          -ms-flex-pack: center;\n              justify-content: center; } }\n\n.m-header-top-content-bar__text {\n  font-size: 12px;\n  font-weight: 400;\n  line-height: 1.5;\n  letter-spacing: 0.02em;\n  margin-right: 24px; }\n  @media (min-width: 576px) {\n    .m-header-top-content-bar__text {\n      font-size: 13px;\n      line-height: 1.38; } }\n\n.m-header-top-content-bar__button {\n  margin-top: 10px; }\n  .m-header-mobile .m-header-top-content-bar__button {\n    margin-top: 10px !important; }\n  @media (min-width: 576px) {\n    .m-header-top-content-bar__button {\n      margin-top: 0; } }\n";var t=function(e){return function(t,r,o){for(var i in r)i in n&&(r[n[i]]=r[i],delete r[i]);return e(t,r,o)}},n={class:"className",for:"htmlFor","http-equiv":"httpEquiv"};var r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},o=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")},i=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},l=function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)},s=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t},c=function(){return function(e,t){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return function(e,t){var n=[],r=!0,o=!1,i=void 0;try{for(var a,l=e[Symbol.iterator]();!(r=(a=l.next()).done)&&(n.push(a.value),!t||n.length!==t);r=!0);}catch(e){o=!0,i=e}finally{try{!r&&l.return&&l.return()}finally{if(o)throw i}}return n}(e,t);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),u=function(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}return Array.from(e)},f=1,p=2,d=3,h=4,m=5,b=6,v=7,g=8,x=9,y=10,_=11,w=12,k=13;var C=RegExp("^("+["area","base","basefont","bgsound","br","col","command","embed","frame","hr","img","input","isindex","keygen","link","meta","param","source","track","wbr","!--","animate","animateTransform","circle","cursor","desc","ellipse","feBlend","feColorMatrix","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feDistantLight","feFlood","feFuncA","feFuncB","feFuncG","feFuncR","feGaussianBlur","feImage","feMergeNode","feMorphology","feOffset","fePointLight","feSpecularLighting","feSpotLight","feTile","feTurbulence","font-face-format","font-face-name","font-face-uri","glyph","glyphRef","hkern","image","line","missing-glyph","mpath","path","polygon","polyline","rect","set","stop","tref","use","view","vkern"].join("|")+")(?:[.#][a-zA-Z0-9-￿_:-]+)*$");var O,E,A,T=/\n[\s]+$/,N=/^\n[\s]+/,S=/[\s]+$/,j=/^[\s]+/,L=/[\n\s]+/g,P=["a","abbr","b","bdi","bdo","br","cite","data","dfn","em","i","kbd","mark","q","rp","rt","rtc","ruby","s","amp","small","span","strong","sub","sup","time","u","var","wbr"],F=["code","pre"],M=function e(t,n){if(Array.isArray(n))for(var r,o,i=t.nodeName.toLowerCase(),a=!1,l=0,s=n.length;l<s;l++){var c=n[l];if(Array.isArray(c))e(t,c);else{("number"==typeof c||"boolean"==typeof c||"function"==typeof c||c instanceof Date||c instanceof RegExp)&&(c=c.toString());var u=t.childNodes[t.childNodes.length-1];if("string"==typeof c)a=!0,u&&"#text"===u.nodeName?u.nodeValue+=c:(c=document.createTextNode(c),t.appendChild(c),u=c),l===s-1&&(a=!1,-1===P.indexOf(i)&&-1===F.indexOf(i)?""===(r=u.nodeValue.replace(N,"").replace(S,"").replace(T,"").replace(L," "))?t.removeChild(u):u.nodeValue=r:-1===F.indexOf(i)&&(o=0===l?"":" ",r=u.nodeValue.replace(N,o).replace(j," ").replace(S,"").replace(T,"").replace(L," "),u.nodeValue=r));else if(c&&c.nodeType){a&&(a=!1,-1===P.indexOf(i)&&-1===F.indexOf(i)?""===(r=u.nodeValue.replace(N,"").replace(T,"").replace(L," "))?t.removeChild(u):u.nodeValue=r:-1===F.indexOf(i)&&(r=u.nodeValue.replace(j," ").replace(N,"").replace(T,"").replace(L," "),u.nodeValue=r));var f=c.nodeName;f&&(i=f.toLowerCase()),t.appendChild(c)}}}},R=(function(e){var n="http://www.w3.org/2000/svg",o="http://www.w3.org/1999/xlink",i=["autofocus","checked","defaultchecked","disabled","formnovalidate","indeterminate","readonly","required","selected","willvalidate"],a="!--",l=["svg","altGlyph","altGlyphDef","altGlyphItem","animate","animateColor","animateMotion","animateTransform","circle","clipPath","color-profile","cursor","defs","desc","ellipse","feBlend","feColorMatrix","feComponentTransfer","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feDistantLight","feFlood","feFuncA","feFuncB","feFuncG","feFuncR","feGaussianBlur","feImage","feMerge","feMergeNode","feMorphology","feOffset","fePointLight","feSpecularLighting","feSpotLight","feTile","feTurbulence","filter","font","font-face","font-face-format","font-face-name","font-face-src","font-face-uri","foreignObject","g","glyph","glyphRef","hkern","image","line","linearGradient","marker","mask","metadata","missing-glyph","mpath","path","pattern","polygon","polyline","radialGradient","rect","set","stop","switch","symbol","text","textPath","title","tref","tspan","use","view","vkern"];function s(e,t,r){var s;-1!==l.indexOf(e)&&(t.namespace=n);var c=!1;if(t.namespace&&(c=t.namespace,delete t.namespace),c)s=document.createElementNS(c,e);else{if(e===a)return document.createComment(t.comment);s=document.createElement(e)}for(var u in t)if(t.hasOwnProperty(u)){var f=u.toLowerCase(),p=t[u];if("classname"===f&&(f="class",u="class"),"htmlFor"===u&&(u="for"),-1!==i.indexOf(f))if("true"===p)p=f;else if("false"===p)continue;"on"===f.slice(0,2)?s[u]=p:c?"xlink:href"===u?s.setAttributeNS(o,u,p):/^xmlns($|:)/i.test(u)||s.setAttributeNS(null,u,p):s.setAttribute(u,p)}return M(s,r),s}e.exports=function(e,n){n||(n={});var o=n.concat||function(e,t){return String(e)+String(t)};return!1!==n.attrToProp&&(e=t(e)),function(t){for(var a=f,l="",s=arguments.length,c=[],u=0;u<t.length;u++)if(u<s-1){var O=arguments[u+1],E=z(t[u]),A=a;A===y&&(A=g),A===x&&(A=g),A===v&&(A=g),A===h&&(A=m),E.push([0,A,O]),c.push.apply(c,E)}else c.push.apply(c,z(t[u]));var T,N=[null,{},[]],S=[[N,-1]];for(u=0;u<c.length;u++){var j=S[S.length-1][0],L=(E=c[u])[0];if(L===p&&/^\//.test(E[1])){var P=S[S.length-1][1];S.length>1&&(S.pop(),S[S.length-1][0][2][P]=e(j[0],j[1],j[2].length?j[2]:void 0))}else if(L===p){var F=[E[1],{},[]];j[2].push(F),S.push([F,j[2].length-1])}else if(L===m||0===L&&E[1]===m){for(var M,R="";u<c.length;u++)if(c[u][0]===m)R=o(R,c[u][1]);else{if(0!==c[u][0]||c[u][1]!==m)break;if("object"!==r(c[u][2])||R)R=o(R,c[u][2]);else for(M in c[u][2])c[u][2].hasOwnProperty(M)&&!j[1][M]&&(j[1][M]=c[u][2][M])}c[u][0]===_&&u++;for(var D=u;u<c.length;u++)if(c[u][0]===g||c[u][0]===m)j[1][R]?""===c[u][1]||(j[1][R]=o(j[1][R],c[u][1])):j[1][R]=i(c[u][1]);else{if(0!==c[u][0]||c[u][1]!==g&&c[u][1]!==m){!R.length||j[1][R]||u!==D||c[u][0]!==d&&c[u][0]!==w||(j[1][R]=R.toLowerCase()),c[u][0]===d&&u--;break}j[1][R]?""===c[u][2]||(j[1][R]=o(j[1][R],c[u][2])):j[1][R]=i(c[u][2])}}else if(L===m)j[1][E[1]]=!0;else if(0===L&&E[1]===m)j[1][E[2]]=!0;else if(L===d)T=j[0],C.test(T)&&S.length&&(P=S[S.length-1][1],S.pop(),S[S.length-1][0][2][P]=e(j[0],j[1],j[2].length?j[2]:void 0));else if(0===L&&E[1]===f)void 0===E[2]||null===E[2]?E[2]="":E[2]||(E[2]=o("",E[2])),Array.isArray(E[2][0])?j[2].push.apply(j[2],E[2]):j[2].push(E[2]);else if(L===f)j[2].push(E[1]);else if(L!==_&&L!==w)throw new Error("unhandled: "+L)}if(N[2].length>1&&/^\s*$/.test(N[2][0])&&N[2].shift(),N[2].length>2||2===N[2].length&&/\S/.test(N[2][1]))throw new Error("multiple root elements must be wrapped in an enclosing tag");return Array.isArray(N[2][0])&&"string"==typeof N[2][0][0]&&Array.isArray(N[2][0][2])&&(N[2][0]=e(N[2][0][0],N[2][0][1],N[2][0][2])),N[2][0];function z(e){var t,r=[];a===v&&(a=h);for(var o=0;o<e.length;o++){var i=e.charAt(o);a===f&&"<"===i?(l.length&&r.push([f,l]),l="",a=p):">"===i&&(t=a)!==x&&t!==y&&a!==k?(a===p?r.push([p,l]):a===m?r.push([m,l]):a===g&&l.length&&r.push([g,l]),r.push([d]),l="",a=f):a===k&&/-$/.test(l)&&"-"===i?(n.comments&&r.push([g,l.substr(0,l.length-1)],[d]),l="",a=f):a===p&&/^!--$/.test(l)?(n.comments&&r.push([p,l],[m,"comment"],[_]),l=i,a=k):a===f||a===k?l+=i:a===p&&/\s/.test(i)?(r.push([p,l]),l="",a=h):a===p?l+=i:a===h&&/[^\s"'=/]/.test(i)?(a=m,l=i):a===h&&/\s/.test(i)?(l.length&&r.push([m,l]),r.push([w])):a===m&&/\s/.test(i)?(r.push([m,l]),l="",a=b):a===m&&"="===i?(r.push([m,l],[_]),l="",a=v):a===m?l+=i:a!==b&&a!==h||"="!==i?a!==b&&a!==h||/\s/.test(i)?a===v&&'"'===i?a=y:a===v&&"'"===i?a=x:a===y&&'"'===i?(r.push([g,l],[w]),l="",a=h):a===x&&"'"===i?(r.push([g,l],[w]),l="",a=h):a!==v||/\s/.test(i)?a===g&&/\s/.test(i)?(r.push([g,l],[w]),l="",a=h):a!==g&&a!==x&&a!==y||(l+=i):(a=g,o--):(r.push([w]),/[\w-]/.test(i)?(l+=i,a=m):a=h):(r.push([_]),a=v)}return a===f&&l.length?(r.push([f,l]),l=""):a===g&&l.length?(r.push([g,l]),l=""):a===y&&l.length?(r.push([g,l]),l=""):a===x&&l.length?(r.push([g,l]),l=""):a===m&&(r.push([m,l]),l=""),r}};function i(e){return"function"==typeof e?e:"string"==typeof e?e:e&&"object"===(void 0===e?"undefined":r(e))?e:o("",e)}}(s,{comments:!0}),e.exports.default=e.exports,e.exports.createElement=s}(O={exports:{}},O.exports),O.exports),D=(R.createElement,E=['<div class="m-header-top-content-bar__box">',"</div>"],A=['<div class="m-header-top-content-bar__box">',"</div>"],Object.freeze(Object.defineProperties(E,{raw:{value:Object.freeze(A)}})));function z(e,t){return R(D,t)}var G=/^\s*(?:true|false|null|undefined|-?[0-9]+\.?[0-9]*|[[{](?:.|[\r\n])*[\]}])\s*$/;function $(e,t){if("function"==typeof e.hasAttribute&&!e.hasAttribute(t))return!1;var n=e.value;if(t?n=e.getAttribute(t):t=e.name,n&&t!==n){if(G.test(n))try{n=JSON.parse(n)}catch(t){console.error("Attribute "+e+" has an error:\n"+t+"\n",n)}}else n=!0;return n}var q=function(){try{var e=new window.CustomEvent("test");if(e.preventDefault(),!0!==e.defaultPrevented)throw new Error("Could not prevent default");return window.CustomEvent}catch(e){}return t;function t(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=t.bubbles,r=void 0!==n&&n,o=t.cancelable,i=void 0!==o&&o,a=t.detail,l=void 0===a?void 0:a,s=document.createEvent("CustomEvent");s.initCustomEvent(e,r,i,l);var c=s.preventDefault;return s.preventDefault=function(){c.call(s);try{Object.defineProperty(this,"defaultPrevented",{get:function(){return!0}})}catch(e){this.defaultPrevented=!0}},s}}();function V(e,t,n){var r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},o=new q(t,a({},r,{detail:n}));e.dispatchEvent(o)}function W(e,t){var n,r;return(n=t,new RegExp("^"+n+"$|^"+n+"\\s|\\s"+n+"\\s|\\s"+n+"$",r)).test(e.className)}var B=/\s+/,I={transitionend:function(){for(var e=document.createElement("div").style,t={transition:"transitionend",OTransition:"oTransitionEnd otransitionend",MozTransition:"transitionend",WebkitTransition:"webkitTransitionEnd"},n=Object.keys(t),r=n.length,o=void 0,i=0;i<r;++i)if(void 0!==e[o=n[i]])return t[o];return null}()};function H(e,t,n,o){var i=arguments.length>4&&void 0!==arguments[4]&&arguments[4];if(I[t]&&(t=I[t]),!e||!t)return null;var a=void 0===n?"undefined":r(n);"function"===a&&(i=!!o,o=n);for(var l=n&&"string"===a?function(t){var r=t.target;for(;!W(r,n)&&r!==e;)r=r.parentNode;if(r!==e)return o(t,r)}:o,s=t.split(B),c=s.length,u=0;u<c;++u)e.addEventListener(s[u],l,i);return function t(){for(var n=0;n<c;++n)e.removeEventListener(s[n],l,i);!function(e,t){if(!e)return!1;for(var n=Object.keys(e),r=n.length,o=0;o<r;++o){var i=n[o];if(e[i]===t)return delete e[i]}}(this,t)}}var J={};function Z(e,t){var n=H(arguments.length>2&&void 0!==arguments[2]?arguments[2]:document,e,t);J[e]||(J[e]={count:0});var r,o=J[e];return o.count++,o.onsubscribe||(o.onsubscribe=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},r=n.leading,o=void 0!==r&&r,i=n.trailing,a=void 0===i||i,l=n.maxWait,s=void 0!==l&&l,c=void 0,f=void 0,p=void 0,d=void 0,h=!1,m=t!==s,b=!1!==s;function v(){for(var n=arguments.length,r=Array(n),i=0;i<n;i++)r[i]=arguments[i];return c=r,m&&(f&&clearTimeout(f),f=setTimeout(g,t)),b&&!p&&(p=setTimeout(x,s)),o&&!h&&(h=!0,d=e.apply(void 0,u(c))),d}return v.flush=function(){return(f||p)&&(d=e.apply(void 0,u(c))),_(),d},v.cancel=_,v;function g(){p&&clearTimeout(p),y()}function x(){f&&clearTimeout(f),y()}function y(){a&&(d=e.apply(void 0,u(c))),f=null,p=null,h=!1}function _(){f&&(clearTimeout(f),f=null),p&&(clearTimeout(p),p=null),c=void 0,h=!1}}((r=e,function(){V(document,"pubsub/onsubscribe",r),V(document,"pubsub/onsubscribe/"+r,r),J[r]&&delete J[r].unsubscribe}),100)),o.onsubscribe(),function(){o.count--,n.call(this),o.count<=0&&delete J[e]}}function K(){return Reflect.construct(HTMLElement,[],this.__proto__.constructor)}H(document,"pubsub/onsubscribe",function(e){var t=e.detail;J[t]||(J[t]={count:0});var n=J[t],r=n.queue;Array.isArray(r)&&(r.forEach(function(e){var t=c(e,3),n=t[0],r=t[1],o=t[2];V(o,n,r)}),delete n.queue)}),Object.setPrototypeOf(K.prototype,HTMLElement.prototype),Object.setPrototypeOf(K,HTMLElement);var Q,U,X,Y={},ee="throwed",te=function(e){function t(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",n=arguments[1];o(this,t);var r=s(this,(t.__proto__||Object.getPrototypeOf(t)).call(this));return r._makeContextReady=r._makeContextReady.bind(r),r._initialise(e,n),r}return l(t,K),i(t,[{key:"_initialise",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;this.initialClassName=this.className,this._styles=e,this._template=t}},{key:"connectedCallback",value:function(){this._appendStyles(),this.render(),this.contextCallback&&this._makeContextReady()}},{key:"disconnectedCallback",value:function(){this.unContextEnabled&&this.unContextEnabled()}},{key:"_appendStyles",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this;if(this._styles){var t=document.createElement("style"),n=document.createTextNode(this._styles);t.appendChild(n),e.insertAdjacentElement?e.insertAdjacentElement("afterbegin",t):e.appendChild(t)}}},{key:"render",value:function(){var e=this;if(!this._hasRendered){var t=this._template;if(t)try{for(var n=document.createDocumentFragment();this.firstChild;)n.appendChild(this.firstChild);var r=t(function(e){if(!e.hasAttributes)return null;for(var t={},n=e.attributes,r=n.length,o=0;o<r;++o){var i=n[o];t[i.name]=$(i)}return t}(this),n);if(Array.isArray(r))r.forEach(function(t){e.appendChild(t)});else if(r){if("string"==typeof r){var o=new Error(ee);throw console.error("\n%cWeb Component %c"+this.nodeName+"%c does not accept string as a return from a template. Maybe use bel?\n\nStack Trace: "+o.stack+"\n","color: #580000; font-size: 14px; line-height:16px;","background: #8b0000; color: #FFF; font-size: 14px; line-height:16px;","color: #580000; font-size: 14px; line-height:16px;"),o}this.appendChild(r)}this._hasRendered=!0}catch(o){o.message!==ee&&console.error("\n%cWeb Component %c"+this.nodeName+"%c has an error while loading its template:\n"+o+"\n\nStack Trace: "+o.stack+"\n","color: #580000; font-size: 14px; line-height:16px;","background: #8b0000; color: #FFF; font-size: 14px; line-height:16px;","color: #580000; font-size: 14px; line-height:16px;")}}}},{key:"enableContext",value:function(){var e=this.nodeName.toLowerCase();this.__isContext=!0,this.__contextName=e,function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:document;J[e]||(J[e]={count:0,queue:[]});var r=J[e].queue;Array.isArray(r)?r.push([e,t,n]):V(n,e,t)}("context/enabled",e)}},{key:"selectContext",value:function(e){this.__selectedContext=e&&e.toLowerCase()}},{key:"_makeContextReady",value:function(){var e=this,t=(arguments.length>0&&void 0!==arguments[0]?arguments[0]:{}).detail;this.contextNode&&(clearTimeout(this.timeoutId),this.timeoutId=setTimeout(function(){e.contextCallback(e.contextNode,t)},10)),this.unContextEnabled&&this.unContextEnabled(),this.unContextEnabled=Z("context/enabled",this._makeContextReady)}},{key:"contextNode",get:function(){for(var e=this.__selectedContext,t=this.parentNode;t&&(!t.__isContext||e&&e!==t.__contextName);)t=t.parentNode;return!(!t||!t.__isContext)&&t}}],[{key:"uuidv4",value:function(){return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,function(e){var t=16*Math.random()|0;return("x"==e?t:3&t|8).toString(16)})}}]),t}(),ne=(function(e){function t(){return o(this,t),s(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}l(t,te),i(t,[{key:"connectedCallback",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"open",t=this.attachShadow({mode:e});this._appendStyles(t),this.render()}}])}(),function(e){function t(){return o(this,t),s(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return l(t,te),i(t,[{key:"_appendStyles",value:function(){t.appendGlobalStyles(this._styles,this.nodeName)}}],[{key:"appendGlobalStyles",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:te.uuidv4();if(e&&!Y[e]){var n=document.createElement("style"),r=document.createTextNode(e);n.appendChild(r),n.setAttribute("data-c-name",t.toLowerCase()),document.querySelector("head").appendChild(n),Y[e]=!0}}}]),t}()),re=function(t){function n(){return o(this,n),s(this,(n.__proto__||Object.getPrototypeOf(n)).call(this,e,z))}return l(n,ne),i(n,[{key:"connectedCallback",value:function(){(function e(t,n,r){null===t&&(t=Function.prototype);var o=Object.getOwnPropertyDescriptor(t,n);if(void 0===o){var i=Object.getPrototypeOf(t);return null===i?void 0:e(i,n,r)}if("value"in o)return o.value;var a=o.get;return void 0!==a?a.call(r):void 0})(n.prototype.__proto__||Object.getPrototypeOf(n.prototype),"connectedCallback",this).call(this);var e=this.getAttribute("type");this.className=this.initialClassName+" m-header-top-content-bar m-header-top-content-bar--"+e}}]),n}();return Q=function(){window.customElements.define("axa-header-top-content-bar",re)},U=0,X=function(){if(0===U)try{Q.apply(void 0,arguments),U+=1,document.removeEventListener("DOMContentLoaded"),document.removeEventListener("WebComponentsReady")}catch(e){}},document.addEventListener("DOMContentLoaded",X,!1),document.addEventListener("WebComponentsReady",X,!1),re});
