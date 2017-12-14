!function(){"use strict";function e(e,t){return t={exports:{}},e(t,t.exports),t.exports}function t(e,t,n){var r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},i=new H(t,f({},r,{detail:n}));e.dispatchEvent(i)}function n(e,t,n,r){function i(){for(var t=0;t<c;++t)e.removeEventListener(u[t],s,o);!function(e,t){if(!e)return!1;for(var n=Object.keys(e),r=n.length,i=0;i<r;++i){var o=n[i];if(e[o]===t)return delete e[o]}}(this,i)}var o=arguments.length>4&&void 0!==arguments[4]&&arguments[4];if(Z[t]&&(t=Z[t]),!e||!t)return null;var a=void 0===n?"undefined":l(n);"function"===a&&(o=!!r,r=n);for(var s=n&&"string"===a?function(t){for(var i=t.target;!function(e,t){return function(e,t){return new RegExp("^"+e+"$|^"+e+"\\s|\\s"+e+"\\s|\\s"+e+"$",t)}(t).test(e.className)}(i,n)&&i!==e;)i=i.parentNode;if(i!==e)return r(t,i)}:r,u=t.split(J),c=u.length,f=0;f<c;++f)e.addEventListener(u[f],s,o);return i}function r(){return Reflect.construct(HTMLElement,[],this.__proto__.constructor)}var i=".a-link {\n  text-decoration: none;\n  color: #00008f; }\n  .a-link:hover, .a-link:focus, .a-link:active {\n    text-decoration: underline; }\n  .a-link:hover, .a-link:focus, .a-link:active {\n    color: #00005b; }\n\n.a-link--red {\n  color: #f07662; }\n  .a-link--red:hover, .a-link--red:focus, .a-link--red:active {\n    color: #ec4d33; }\n\n.a-link--white {\n  color: #fff; }\n  .a-link--white:hover, .a-link--white:focus, .a-link--white:active {\n    color: #f5f5f5; }\n\n.a-link--arrow,\n.a-link--listed {\n  font-size: 12px;\n  font-weight: 400;\n  line-height: 1.5;\n  letter-spacing: 0.02em;\n  position: relative;\n  display: inline-block;\n  text-transform: uppercase;\n  font-weight: bold !important; }\n  @media (min-width: 576px) {\n    .a-link--arrow,\n    .a-link--listed {\n      font-size: 14px;\n      font-weight: 400;\n      line-height: 1.21;\n      letter-spacing: 0.02em; } }\n  @media (min-width: 768px) {\n    .a-link--arrow,\n    .a-link--listed {\n      font-size: 14px;\n      font-weight: 400;\n      line-height: 1.21;\n      letter-spacing: 0.02em; } }\n  @media (min-width: 992px) {\n    .a-link--arrow,\n    .a-link--listed {\n      font-size: 14px;\n      font-weight: 400;\n      line-height: 1.21;\n      letter-spacing: 0.02em; } }\n  .a-link--arrow:hover, .a-link--arrow:active, .a-link--arrow:focus,\n  .a-link--listed:hover,\n  .a-link--listed:active,\n  .a-link--listed:focus {\n    text-decoration: none; }\n\n.a-link--arrow {\n  padding-right: 23px; }\n\n.a-link--listed {\n  padding-left: 23px; }\n\n.a-link__arrow,\n.a-link__listed {\n  position: absolute;\n  top: 50%;\n  display: block;\n  width: 13px;\n  height: 13px;\n  margin-top: -6.5px;\n  fill: currentColor; }\n\n.a-link__arrow {\n  right: 0; }\n\n.a-link__listed {\n  left: 0; }\n\n.a-link--motion:hover .a-link__arrow,\n.a-link--motion:hover .a-link__listed, .a-link--motion:active .a-link__arrow,\n.a-link--motion:active .a-link__listed, .a-link--motion:focus .a-link__arrow,\n.a-link--motion:focus .a-link__listed {\n  animation-duration: 0.6s;\n  animation-timing-function: ease;\n  animation-fill-mode: both;\n  animation-name: fadeOutRightInLeft; }\n",o=function(e){return function(t,n,r){for(var i in n)i in a&&(n[a[i]]=n[i],delete n[i]);return e(t,n,r)}},a={class:"className",for:"htmlFor","http-equiv":"httpEquiv"},l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},s=(function(){function e(e){this.value=e}function t(t){function n(i,o){try{var a=t[i](o),l=a.value;l instanceof e?Promise.resolve(l.value).then(function(e){n("next",e)},function(e){n("throw",e)}):r(a.done?"return":"normal",a.value)}catch(e){r("throw",e)}}function r(e,t){switch(e){case"return":i.resolve({value:t,done:!0});break;case"throw":i.reject(t);break;default:i.resolve({value:t,done:!1})}(i=i.next)?n(i.key,i.arg):o=null}var i,o;this._invoke=function(e,t){return new Promise(function(r,a){var l={key:e,arg:t,resolve:r,reject:a,next:null};o?o=o.next=l:(i=o=l,n(e,t))})},"function"!=typeof t.return&&(this.return=void 0)}"function"==typeof Symbol&&Symbol.asyncIterator&&(t.prototype[Symbol.asyncIterator]=function(){return this}),t.prototype.next=function(e){return this._invoke("next",e)},t.prototype.throw=function(e){return this._invoke("throw",e)},t.prototype.return=function(e){return this._invoke("return",e)}}(),function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}),u=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),c=function(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e},f=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},h=function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)},d=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t},p=function(){return function(e,t){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return function(e,t){var n=[],r=!0,i=!1,o=void 0;try{for(var a,l=e[Symbol.iterator]();!(r=(a=l.next()).done)&&(n.push(a.value),!t||n.length!==t);r=!0);}catch(e){i=!0,o=e}finally{try{!r&&l.return&&l.return()}finally{if(i)throw o}}return n}(e,t);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),v=function(e,t){return Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))},m=function(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}return Array.from(e)},y=1,g=2,b=3,x=4,k=5,w=6,_=7,C=8,O=9,E=10,A=11,S=12,T=13,j=RegExp("^("+["area","base","basefont","bgsound","br","col","command","embed","frame","hr","img","input","isindex","keygen","link","meta","param","source","track","wbr","!--","animate","animateTransform","circle","cursor","desc","ellipse","feBlend","feColorMatrix","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feDistantLight","feFlood","feFuncA","feFuncB","feFuncG","feFuncR","feGaussianBlur","feImage","feMergeNode","feMorphology","feOffset","fePointLight","feSpecularLighting","feSpotLight","feTile","feTurbulence","font-face-format","font-face-name","font-face-uri","glyph","glyphRef","hkern","image","line","missing-glyph","mpath","path","polygon","polyline","rect","set","stop","tref","use","view","vkern"].join("|")+")(?:[.#][a-zA-Z0-9-￿_:-]+)*$"),N=/\n[\s]+$/,P=/^\n[\s]+/,L=/[\s]+$/,F=/^[\s]+/,M=/[\n\s]+/g,R=["a","abbr","b","bdi","bdo","br","cite","data","dfn","em","i","kbd","mark","q","rp","rt","rtc","ruby","s","amp","small","span","strong","sub","sup","time","u","var","wbr"],z=["code","pre"],D=function e(t,n){if(Array.isArray(n))for(var r,i,o=t.nodeName.toLowerCase(),a=!1,l=0,s=n.length;l<s;l++){var u=n[l];if(Array.isArray(u))e(t,u);else{("number"==typeof u||"boolean"==typeof u||"function"==typeof u||u instanceof Date||u instanceof RegExp)&&(u=u.toString());var c=t.childNodes[t.childNodes.length-1];if("string"==typeof u)a=!0,c&&"#text"===c.nodeName?c.nodeValue+=u:(u=document.createTextNode(u),t.appendChild(u),c=u),l===s-1&&(a=!1,-1===R.indexOf(o)&&-1===z.indexOf(o)?""===(r=c.nodeValue.replace(P,"").replace(L,"").replace(N,"").replace(M," "))?t.removeChild(c):c.nodeValue=r:-1===z.indexOf(o)&&(i=0===l?"":" ",r=c.nodeValue.replace(P,i).replace(F," ").replace(L,"").replace(N,"").replace(M," "),c.nodeValue=r));else if(u&&u.nodeType){a&&(a=!1,-1===R.indexOf(o)&&-1===z.indexOf(o)?""===(r=c.nodeValue.replace(P,"").replace(N,"").replace(M," "))?t.removeChild(c):c.nodeValue=r:-1===z.indexOf(o)&&(r=c.nodeValue.replace(F," ").replace(P,"").replace(N,"").replace(M," "),c.nodeValue=r));var f=u.nodeName;f&&(o=f.toLowerCase()),t.appendChild(u)}}}},G=e(function(e){function t(e,t,o){var l;-1!==s.indexOf(e)&&(t.namespace=n);var u=!1;if(t.namespace&&(u=t.namespace,delete t.namespace),u)l=document.createElementNS(u,e);else{if(e===a)return document.createComment(t.comment);l=document.createElement(e)}for(var c in t)if(t.hasOwnProperty(c)){var f=c.toLowerCase(),h=t[c];if("classname"===f&&(f="class",c="class"),"htmlFor"===c&&(c="for"),-1!==i.indexOf(f))if("true"===h)h=f;else if("false"===h)continue;"on"===f.slice(0,2)?l[c]=h:u?"xlink:href"===c?l.setAttributeNS(r,c,h):/^xmlns($|:)/i.test(c)||l.setAttributeNS(null,c,h):l.setAttribute(c,h)}return D(l,o),l}var n="http://www.w3.org/2000/svg",r="http://www.w3.org/1999/xlink",i=["autofocus","checked","defaultchecked","disabled","formnovalidate","indeterminate","readonly","required","selected","willvalidate"],a="!--",s=["svg","altGlyph","altGlyphDef","altGlyphItem","animate","animateColor","animateMotion","animateTransform","circle","clipPath","color-profile","cursor","defs","desc","ellipse","feBlend","feColorMatrix","feComponentTransfer","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feDistantLight","feFlood","feFuncA","feFuncB","feFuncG","feFuncR","feGaussianBlur","feImage","feMerge","feMergeNode","feMorphology","feOffset","fePointLight","feSpecularLighting","feSpotLight","feTile","feTurbulence","filter","font","font-face","font-face-format","font-face-name","font-face-src","font-face-uri","foreignObject","g","glyph","glyphRef","hkern","image","line","linearGradient","marker","mask","metadata","missing-glyph","mpath","path","pattern","polygon","polyline","radialGradient","rect","set","stop","switch","symbol","text","textPath","title","tref","tspan","use","view","vkern"];e.exports=function(e,t){function n(e){return"function"==typeof e?e:"string"==typeof e?e:e&&"object"===(void 0===e?"undefined":l(e))?e:r("",e)}t||(t={});var r=t.concat||function(e,t){return String(e)+String(t)};return!1!==t.attrToProp&&(e=o(e)),function(i){function o(e){var n=[];a===_&&(a=x);for(var r=0;r<e.length;r++){var i=e.charAt(r);a===y&&"<"===i?(s.length&&n.push([y,s]),s="",a=g):">"!==i||function(e){return e===O||e===E}(a)||a===T?a===T&&/-$/.test(s)&&"-"===i?(t.comments&&n.push([C,s.substr(0,s.length-1)],[b]),s="",a=y):a===g&&/^!--$/.test(s)?(t.comments&&n.push([g,s],[k,"comment"],[A]),s=i,a=T):a===y||a===T?s+=i:a===g&&/\s/.test(i)?(n.push([g,s]),s="",a=x):a===g?s+=i:a===x&&/[^\s"'=/]/.test(i)?(a=k,s=i):a===x&&/\s/.test(i)?(s.length&&n.push([k,s]),n.push([S])):a===k&&/\s/.test(i)?(n.push([k,s]),s="",a=w):a===k&&"="===i?(n.push([k,s],[A]),s="",a=_):a===k?s+=i:a!==w&&a!==x||"="!==i?a!==w&&a!==x||/\s/.test(i)?a===_&&'"'===i?a=E:a===_&&"'"===i?a=O:a===E&&'"'===i?(n.push([C,s],[S]),s="",a=x):a===O&&"'"===i?(n.push([C,s],[S]),s="",a=x):a!==_||/\s/.test(i)?a===C&&/\s/.test(i)?(n.push([C,s],[S]),s="",a=x):a!==C&&a!==O&&a!==E||(s+=i):(a=C,r--):(n.push([S]),/[\w-]/.test(i)?(s+=i,a=k):a=x):(n.push([A]),a=_):(a===g?n.push([g,s]):a===k?n.push([k,s]):a===C&&s.length&&n.push([C,s]),n.push([b]),s="",a=y)}return a===y&&s.length?(n.push([y,s]),s=""):a===C&&s.length?(n.push([C,s]),s=""):a===E&&s.length?(n.push([C,s]),s=""):a===O&&s.length?(n.push([C,s]),s=""):a===k&&(n.push([k,s]),s=""),n}for(var a=y,s="",u=arguments.length,c=[],f=0;f<i.length;f++)if(f<u-1){var h=arguments[f+1],d=o(i[f]),p=a;p===E&&(p=C),p===O&&(p=C),p===_&&(p=C),p===x&&(p=k),d.push([0,p,h]),c.push.apply(c,d)}else c.push.apply(c,o(i[f]));for(var v=[null,{},[]],m=[[v,-1]],f=0;f<c.length;f++){var N=m[m.length-1][0],P=(d=c[f])[0];if(P===g&&/^\//.test(d[1]))z=m[m.length-1][1],m.length>1&&(m.pop(),m[m.length-1][0][2][z]=e(N[0],N[1],N[2].length?N[2]:void 0));else if(P===g){var L=[d[1],{},[]];N[2].push(L),m.push([L,N[2].length-1])}else if(P===k||0===P&&d[1]===k){for(var F,M="";f<c.length;f++)if(c[f][0]===k)M=r(M,c[f][1]);else{if(0!==c[f][0]||c[f][1]!==k)break;if("object"!==l(c[f][2])||M)M=r(M,c[f][2]);else for(F in c[f][2])c[f][2].hasOwnProperty(F)&&!N[1][F]&&(N[1][F]=c[f][2][F])}c[f][0]===A&&f++;for(var R=f;f<c.length;f++)if(c[f][0]===C||c[f][0]===k)N[1][M]?""===c[f][1]||(N[1][M]=r(N[1][M],c[f][1])):N[1][M]=n(c[f][1]);else{if(0!==c[f][0]||c[f][1]!==C&&c[f][1]!==k){!M.length||N[1][M]||f!==R||c[f][0]!==b&&c[f][0]!==S||(N[1][M]=M.toLowerCase()),c[f][0]===b&&f--;break}N[1][M]?""===c[f][2]||(N[1][M]=r(N[1][M],c[f][2])):N[1][M]=n(c[f][2])}}else if(P===k)N[1][d[1]]=!0;else if(0===P&&d[1]===k)N[1][d[2]]=!0;else if(P===b){if(function(e){return j.test(e)}(N[0])&&m.length){var z=m[m.length-1][1];m.pop(),m[m.length-1][0][2][z]=e(N[0],N[1],N[2].length?N[2]:void 0)}}else if(0===P&&d[1]===y)void 0===d[2]||null===d[2]?d[2]="":d[2]||(d[2]=r("",d[2])),Array.isArray(d[2][0])?N[2].push.apply(N[2],d[2]):N[2].push(d[2]);else if(P===y)N[2].push(d[1]);else if(P!==A&&P!==S)throw new Error("unhandled: "+P)}if(v[2].length>1&&/^\s*$/.test(v[2][0])&&v[2].shift(),v[2].length>2||2===v[2].length&&/\S/.test(v[2][1]))throw new Error("multiple root elements must be wrapped in an enclosing tag");return Array.isArray(v[2][0])&&"string"==typeof v[2][0][0]&&Array.isArray(v[2][0][2])&&(v[2][0]=e(v[2][0][0],v[2][0][1],v[2][0][2])),v[2][0]}}(t,{comments:!0}),e.exports.default=e.exports,e.exports.createElement=t}),$=e(function(e){!function(){function t(){for(var e=[],r=0;r<arguments.length;r++){var i=arguments[r];if(i){var o=void 0===i?"undefined":l(i);if("string"===o||"number"===o)e.push(i);else if(Array.isArray(i))e.push(t.apply(null,i));else if("object"===o)for(var a in i)n.call(i,a)&&i[a]&&e.push(a)}}return e.join(" ")}var n={}.hasOwnProperty;e.exports?e.exports=t:window.classNames=t}()}),q=v(['<a href="#" class="','">\n      ',"\n      ","\n      ","\n    </a>"],['<a href="#" class="','">\n      ',"\n      ","\n      ","\n    </a>"]),I=v(['<axa-icon id="arrow" classes="a-link__listed"></axa-icon>'],['<axa-icon id="arrow" classes="a-link__listed"></axa-icon>']),V=v(['<axa-icon id="arrow" classes="a-link__arrow"></axa-icon>'],['<axa-icon id="arrow" classes="a-link__arrow"></axa-icon>']),B=function(e,t){var n,r=e.color,i=e.size,o=e.motion,a=e.arrow,l=e.listed,s=$("a-link",(n={},c(n,"a-link--"+r,r),c(n,"a-link--"+i,i),c(n,"a-link--motion",o),c(n,"a-link--arrow",a),c(n,"a-link--listed",l),n));return G(q,s,l&&G(I),t,a&&G(V))},W=/^\s*(?:true|false|null|undefined|-?[0-9]+\.?[0-9]*|[[{](?:.|[\r\n])*[\]}])\s*$/,H=function(){function e(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=t.bubbles,r=void 0!==n&&n,i=t.cancelable,o=void 0!==i&&i,a=t.detail,l=void 0===a?void 0:a,s=document.createEvent("CustomEvent");s.initCustomEvent(e,r,o,l);var u=s.preventDefault;return s.preventDefault=function(){u.call(s);try{Object.defineProperty(this,"defaultPrevented",{get:function(){return!0}})}catch(e){this.defaultPrevented=!0}},s}try{var t=new window.CustomEvent("test");if(t.preventDefault(),!0!==t.defaultPrevented)throw new Error("Could not prevent default");return window.CustomEvent}catch(e){}return e}(),J=/\s+/,Z={transitionend:function(){for(var e=document.createElement("div").style,t={transition:"transitionend",OTransition:"oTransitionEnd otransitionend",MozTransition:"transitionend",WebkitTransition:"webkitTransitionEnd"},n=Object.keys(t),r=n.length,i=void 0,o=0;o<r;++o)if(i=n[o],void 0!==e[i])return t[i];return null}()},K={};n(document,"pubsub/onsubscribe",function(e){var n=e.detail;K[n]||(K[n]={count:0});var r=K[n],i=r.queue;Array.isArray(i)&&(i.forEach(function(e){var n=p(e,3),r=n[0],i=n[1];t(n[2],r,i)}),delete r.queue)}),Object.setPrototypeOf(r.prototype,HTMLElement.prototype),Object.setPrototypeOf(r,HTMLElement);var Q={},U=function(e){function i(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments[1];s(this,i);var n=d(this,(i.__proto__||Object.getPrototypeOf(i)).call(this));return n._makeContextReady=n._makeContextReady.bind(n),n._initialise(e,t),n}return h(i,r),u(i,[{key:"_initialise",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;this.initialClassName=this.className,this._styles=e,this._template=t}},{key:"connectedCallback",value:function(){this._appendStyles(),this.render(),this.contextCallback&&this._makeContextReady()}},{key:"disconnectedCallback",value:function(){this.unContextEnabled&&this.unContextEnabled()}},{key:"_appendStyles",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this;if(this._styles){var t=document.createElement("style"),n=document.createTextNode(this._styles);t.appendChild(n),e.insertAdjacentElement?e.insertAdjacentElement("afterbegin",t):e.appendChild(t)}}},{key:"render",value:function(){var e=this;if(!this._hasRendered){var t=this._template;if(t)try{for(var n=document.createDocumentFragment();this.firstChild;)n.appendChild(this.firstChild);var r=t(function(e){if(!e.hasAttributes)return null;for(var t={},n=e.attributes,r=n.length,i=0;i<r;++i){var o=n[i];t[o.name]=function(e,t){if("function"==typeof e.hasAttribute&&!e.hasAttribute(t))return!1;var n=e.value;if(t?n=e.getAttribute(t):t=e.name,n&&t!==n){if(W.test(n))try{n=JSON.parse(n)}catch(t){console.error("Attribute "+e+" has an error:\n"+t+"\n",n)}}else n=!0;return n}(o)}return t}(this),n);if(Array.isArray(r))r.forEach(function(t){e.appendChild(t)});else if(r){if("string"==typeof r){var i=new Error("throwed");throw console.error("\n%cWeb Component %c"+this.nodeName+"%c does not accept string as a return from a template. Maybe use bel?\n\nStack Trace: "+i.stack+"\n","color: #580000; font-size: 14px; line-height:16px;","background: #8b0000; color: #FFF; font-size: 14px; line-height:16px;","color: #580000; font-size: 14px; line-height:16px;"),i}this.appendChild(r)}this._hasRendered=!0}catch(i){"throwed"!==i.message&&console.error("\n%cWeb Component %c"+this.nodeName+"%c has an error while loading its template:\n"+i+"\n\nStack Trace: "+i.stack+"\n","color: #580000; font-size: 14px; line-height:16px;","background: #8b0000; color: #FFF; font-size: 14px; line-height:16px;","color: #580000; font-size: 14px; line-height:16px;")}}}},{key:"enableContext",value:function(){var e=this.nodeName.toLowerCase();this.__isContext=!0,this.__contextName=e,function(e,n){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:document;K[e]||(K[e]={count:0,queue:[]});var i=K[e].queue;Array.isArray(i)?i.push([e,n,r]):t(r,e,n)}("context/enabled",e)}},{key:"selectContext",value:function(e){this.__selectedContext=e.toLowerCase()}},{key:"_makeContextReady",value:function(){var e=this;this.contextNode?(clearTimeout(this.timeoutId),this.timeoutId=setTimeout(function(){e.contextCallback(e.contextNode)},10)):this.unContextEnabled||(this.unContextEnabled=function(e,r){var i=n(arguments.length>2&&void 0!==arguments[2]?arguments[2]:document,e,r);K[e]||(K[e]={count:0});var o=K[e];return o.count++,o.onsubscribe||(o.onsubscribe=function(e){function t(){for(var t=arguments.length,r=Array(t),o=0;o<t;o++)r[o]=arguments[o];return h=r,g&&(d&&clearTimeout(d),d=setTimeout(function(){p&&clearTimeout(p),n()},i)),b&&!p&&(p=setTimeout(function(){d&&clearTimeout(d),n()},f)),l&&!y&&(y=!0,v=e.apply(void 0,m(h))),v}function n(){u&&(v=e.apply(void 0,m(h))),d=null,p=null,y=!1}function r(){d&&(clearTimeout(d),d=null),p&&(clearTimeout(p),p=null),h=void 0,y=!1}var i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,o=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},a=o.leading,l=void 0!==a&&a,s=o.trailing,u=void 0===s||s,c=o.maxWait,f=void 0!==c&&c,h=void 0,d=void 0,p=void 0,v=void 0,y=!1,g=i!==f,b=!1!==f;return t.flush=function(){return(d||p)&&(v=e.apply(void 0,m(h))),r(),v},t.cancel=r,t}(function(e){return function(){t(document,"pubsub/onsubscribe",e),t(document,"pubsub/onsubscribe/"+e,e),K[e]&&delete K[e].unsubscribe}}(e),100)),o.onsubscribe(),function(){o.count--,i.call(this),o.count<=0&&delete K[e]}}("context/enabled",this._makeContextReady))}},{key:"contextNode",get:function(){for(var e=this.__selectedContext,t=this.parentNode;t&&(!t.__isContext||e&&e!==t.__contextName);)t=t.parentNode;return!(!t||!t.__isContext)&&t}}],[{key:"uuidv4",value:function(){return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,function(e){var t=16*Math.random()|0;return("x"==e?t:3&t|8).toString(16)})}}]),i}(),X=(function(e){function t(){return s(this,t),d(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}h(t,U),u(t,[{key:"connectedCallback",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"open",t=this.attachShadow({mode:e});this._appendStyles(t),this.render()}}])}(),function(e){function t(){return s(this,t),d(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return h(t,U),u(t,[{key:"_appendStyles",value:function(){t.appendGlobalStyles(this._styles,this.nodeName)}}],[{key:"appendGlobalStyles",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:U.uuidv4();if(e&&!Q[e]){var n=document.createElement("style"),r=document.createTextNode(e);n.appendChild(r),n.setAttribute("data-c-name",t.toLowerCase()),document.querySelector("head").appendChild(n),Q[e]=!0}}}]),t}()),Y=function(e){function t(){return s(this,t),d(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,i,B))}return h(t,X),t}();!function(e){document.addEventListener("DOMContentLoaded",e,!1)}(function(){window.customElements.define("axa-link",Y),X.appendGlobalStyles(i)})}();
