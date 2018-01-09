!function(){"use strict";function t(t,n){return n={exports:{}},t(n,n.exports),n.exports}function n(t,n,e){var o=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},r=new H(n,f({},o,{detail:e}));t.dispatchEvent(r)}function e(t,n,e,o){function r(){for(var n=0;n<c;++n)t.removeEventListener(l[n],s,i);!function(t,n){if(!t)return!1;for(var e=Object.keys(t),o=e.length,r=0;r<o;++r){var i=e[r];if(t[i]===n)return delete t[i]}}(this,r)}var i=arguments.length>4&&void 0!==arguments[4]&&arguments[4];if(Y[n]&&(n=Y[n]),!t||!n)return null;var a=void 0===e?"undefined":u(e);"function"===a&&(i=!!o,o=e);for(var s=e&&"string"===a?function(n){for(var r=n.target;!function(t,n){return function(t,n){return new RegExp("^"+t+"$|^"+t+"\\s|\\s"+t+"\\s|\\s"+t+"$",n)}(n).test(t.className)}(r,e)&&r!==t;)r=r.parentNode;if(r!==t)return o(n,r)}:o,l=n.split(X),c=l.length,f=0;f<c;++f)t.addEventListener(l[f],s,i);return r}function o(){return Reflect.construct(HTMLElement,[],this.__proto__.constructor)}var r="@-webkit-keyframes fadeOutRightInLeft {\n  0% {\n    opacity: 1; }\n  50% {\n    opacity: 0;\n    -webkit-transform: translate3d(100%, 0, 0);\n            transform: translate3d(100%, 0, 0); }\n  51% {\n    opacity: 0;\n    -webkit-transform: translate3d(-100%, 0, 0);\n            transform: translate3d(-100%, 0, 0); }\n  100% {\n    opacity: 1;\n    -webkit-transform: none;\n            transform: none; } }\n\n@keyframes fadeOutRightInLeft {\n  0% {\n    opacity: 1; }\n  50% {\n    opacity: 0;\n    -webkit-transform: translate3d(100%, 0, 0);\n            transform: translate3d(100%, 0, 0); }\n  51% {\n    opacity: 0;\n    -webkit-transform: translate3d(-100%, 0, 0);\n            transform: translate3d(-100%, 0, 0); }\n  100% {\n    opacity: 1;\n    -webkit-transform: none;\n            transform: none; } }\n\n.m-button {\n  font-size: 12px;\n  font-weight: 600;\n  line-height: 1.5;\n  letter-spacing: 0.02em;\n  position: relative;\n  padding: 10px 30px;\n  border-width: 2px;\n  border-style: solid;\n  text-decoration: none;\n  text-transform: uppercase;\n  vertical-align: middle;\n  color: #fff;\n  background: #00008f;\n  border-color: #00008f;\n  border-bottom-color: #00005b; }\n  @media (min-width: 576px) {\n    .m-button {\n      font-size: 14px;\n      font-weight: 600;\n      line-height: 1.21;\n      letter-spacing: 0.02em; } }\n  @media (min-width: 768px) {\n    .m-button {\n      font-size: 14px;\n      font-weight: 600;\n      line-height: 1.21;\n      letter-spacing: 0.02em; } }\n  @media (min-width: 992px) {\n    .m-button {\n      font-size: 14px;\n      font-weight: 600;\n      line-height: 1.21;\n      letter-spacing: 0.02em; } }\n  a.m-button {\n    display: inline-block; }\n  .m-button:hover, .m-button:active, .m-button:focus {\n    cursor: pointer;\n    text-decoration: none;\n    outline: none; }\n  .m-button:disabled, .m-button[disabled] {\n    cursor: default !important; }\n  .m-button:hover, .m-button:active, .m-button:focus {\n    background: #00005b;\n    border-color: #00005b;\n    color: #fff; }\n  .m-button:disabled, .m-button[disabled] {\n    background: #999 !important;\n    border-color: #999 !important; }\n\n.m-button__icon {\n  width: 16px;\n  height: 16px;\n  padding: 10px;\n  border-left: 1px solid rgba(255, 255, 255, 0.2); }\n\n.m-button__arrow {\n  position: absolute;\n  top: 50%;\n  display: block;\n  width: 13px;\n  height: 13px;\n  margin-top: -6.5px;\n  fill: currentColor;\n  right: 30px; }\n\n.m-button--red {\n  color: #fff;\n  background: #f07662;\n  border-color: #f07662;\n  border-bottom-color: #ec4d33; }\n  .m-button--red:hover, .m-button--red:active, .m-button--red:focus {\n    background: #ec4d33;\n    border-color: #ec4d33;\n    color: #fff; }\n  .m-button--red:disabled, .m-button--red[disabled] {\n    background: #999 !important;\n    border-color: #999 !important; }\n\n.m-button--white {\n  color: #fff;\n  background: #fff;\n  border-color: #fff;\n  border-bottom-color: #00005b; }\n  .m-button--white:hover, .m-button--white:active, .m-button--white:focus {\n    background: #00005b;\n    border-color: #00005b;\n    color: #fff; }\n  .m-button--white:disabled, .m-button--white[disabled] {\n    background: #999 !important;\n    border-color: #999 !important; }\n\n.m-button--ghost {\n  color: #00008f;\n  background: transparent;\n  border-color: #00008f; }\n  .m-button--ghost:hover, .m-button--ghost:active, .m-button--ghost:focus {\n    color: #00005b;\n    background: transparent;\n    border-color: #00005b; }\n  .m-button--ghost.m-button--red {\n    color: #f07662;\n    background: transparent;\n    border-color: #f07662; }\n    .m-button--ghost.m-button--red:hover, .m-button--ghost.m-button--red:active, .m-button--ghost.m-button--red:focus {\n      color: #ec4d33;\n      background: transparent;\n      border-color: #ec4d33; }\n  .m-button--ghost.m-button--white {\n    color: #fff;\n    background: transparent;\n    border-color: #fff; }\n    .m-button--ghost.m-button--white:hover, .m-button--ghost.m-button--white:active, .m-button--ghost.m-button--white:focus {\n      color: #3b3fd8;\n      background: #fff;\n      border-color: #fff; }\n\n.m-button--motion {\n  -webkit-transform: translate3d(0, 0, 0);\n          transform: translate3d(0, 0, 0);\n  -webkit-backface-visibility: hidden;\n          backface-visibility: hidden;\n  z-index: 0;\n  overflow: hidden; }\n  .m-button--motion::after {\n    position: absolute;\n    top: 50%;\n    left: 50%;\n    z-index: -1;\n    display: block;\n    width: 0;\n    height: 550px;\n    content: '';\n    -webkit-transform: translateX(-50%) translateY(-50%) rotate(45deg);\n            transform: translateX(-50%) translateY(-50%) rotate(45deg);\n    -webkit-transition: width 0.3s cubic-bezier(0.455, 0.03, 0.515, 0.955) 0s;\n    transition: width 0.3s cubic-bezier(0.455, 0.03, 0.515, 0.955) 0s; }\n  .m-button--motion:hover::after, .m-button--motion:focus::after {\n    width: 110%; }\n  .m-button--motion::after {\n    background: #00008f; }\n  .m-button--motion:hover, .m-button--motion:focus {\n    background: #00008f;\n    color: #fff; }\n    .m-button--motion:hover::after, .m-button--motion:focus::after {\n      background: #00005b; }\n  .m-button--motion.m-button--red::after {\n    background: #f07662; }\n  .m-button--motion.m-button--red:hover, .m-button--motion.m-button--red:focus {\n    background: #f07662;\n    color: #fff; }\n    .m-button--motion.m-button--red:hover::after, .m-button--motion.m-button--red:focus::after {\n      background: #ec4d33; }\n  .m-button--motion.m-button--white::after {\n    background: transparent; }\n  .m-button--motion.m-button--white:hover, .m-button--motion.m-button--white:focus {\n    background: transparent;\n    color: #3b3fd8; }\n    .m-button--motion.m-button--white:hover::after, .m-button--motion.m-button--white:focus::after {\n      background: #fff; }\n  .m-button--motion.m-button--ghost {\n    background: transparent !important; }\n  .m-button--motion:hover .m-button__arrow, .m-button--motion:active .m-button__arrow, .m-button--motion:focus .m-button__arrow {\n    -webkit-animation-duration: 0.6s;\n            animation-duration: 0.6s;\n    -webkit-animation-timing-function: ease;\n            animation-timing-function: ease;\n    -webkit-animation-fill-mode: both;\n            animation-fill-mode: both;\n    -webkit-animation-name: fadeOutRightInLeft;\n            animation-name: fadeOutRightInLeft; }\n\n.m-button--arrow {\n  padding-right: 55px; }\n\n.m-button--x-pad-20 {\n  padding-right: 20px;\n  padding-left: 20px; }\n  .m-button--x-pad-20.m-button--arrow {\n    padding-right: 45px; }\n  .m-button--x-pad-20 .m-button__arrow {\n    right: 20px; }\n\n.m-button--x-pad-40 {\n  padding-right: 40px;\n  padding-left: 40px; }\n  .m-button--x-pad-40.m-button--arrow {\n    padding-right: 65px; }\n  .m-button--x-pad-40 .m-button__arrow {\n    right: 40px; }\n\n.m-button--sm {\n  font-size: 12px;\n  font-weight: 600;\n  line-height: 1.5;\n  letter-spacing: 0.02em;\n  padding-top: 5.5px;\n  padding-bottom: 5.5px;\n  border-width: 1px; }\n  @media (min-width: 576px) {\n    .m-button--sm {\n      font-size: 13px;\n      font-weight: 600;\n      line-height: 1.38;\n      letter-spacing: 0.02em; } }\n  @media (min-width: 768px) {\n    .m-button--sm {\n      font-size: 13px;\n      font-weight: 600;\n      line-height: 1.38;\n      letter-spacing: 0.02em; } }\n  @media (min-width: 992px) {\n    .m-button--sm {\n      font-size: 13px;\n      font-weight: 600;\n      line-height: 1.38;\n      letter-spacing: 0.02em; } }\n\n.m-button--lg {\n  font-size: 14px;\n  font-weight: 600;\n  line-height: 1.5;\n  letter-spacing: 0.02em;\n  padding-top: 11px;\n  padding-bottom: 11px; }\n  @media (min-width: 576px) {\n    .m-button--lg {\n      font-size: 16px;\n      font-weight: 600;\n      line-height: 1.5;\n      letter-spacing: 0.02em; } }\n  @media (min-width: 768px) {\n    .m-button--lg {\n      font-size: 16px;\n      font-weight: 600;\n      line-height: 1.5;\n      letter-spacing: 0.02em; } }\n  @media (min-width: 992px) {\n    .m-button--lg {\n      font-size: 16px;\n      font-weight: 600;\n      line-height: 1.5;\n      letter-spacing: 0.02em; } }\n",i=function(t){return function(n,e,o){for(var r in e)r in a&&(e[a[r]]=e[r],delete e[r]);return t(n,e,o)}},a={class:"className",for:"htmlFor","http-equiv":"httpEquiv"},u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},s=(function(){function t(t){this.value=t}function n(n){function e(r,i){try{var a=n[r](i),u=a.value;u instanceof t?Promise.resolve(u.value).then(function(t){e("next",t)},function(t){e("throw",t)}):o(a.done?"return":"normal",a.value)}catch(t){o("throw",t)}}function o(t,n){switch(t){case"return":r.resolve({value:n,done:!0});break;case"throw":r.reject(n);break;default:r.resolve({value:n,done:!1})}(r=r.next)?e(r.key,r.arg):i=null}var r,i;this._invoke=function(t,n){return new Promise(function(o,a){var u={key:t,arg:n,resolve:o,reject:a,next:null};i?i=i.next=u:(r=i=u,e(t,n))})},"function"!=typeof n.return&&(this.return=void 0)}"function"==typeof Symbol&&Symbol.asyncIterator&&(n.prototype[Symbol.asyncIterator]=function(){return this}),n.prototype.next=function(t){return this._invoke("next",t)},n.prototype.throw=function(t){return this._invoke("throw",t)},n.prototype.return=function(t){return this._invoke("return",t)}}(),function(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}),l=function(){function t(t,n){for(var e=0;e<n.length;e++){var o=n[e];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}return function(n,e,o){return e&&t(n.prototype,e),o&&t(n,o),n}}(),c=function(t,n,e){return n in t?Object.defineProperty(t,n,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[n]=e,t},f=Object.assign||function(t){for(var n=1;n<arguments.length;n++){var e=arguments[n];for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o])}return t},d=function(t,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function, not "+typeof n);t.prototype=Object.create(n&&n.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),n&&(Object.setPrototypeOf?Object.setPrototypeOf(t,n):t.__proto__=n)},m=function(t,n){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!n||"object"!=typeof n&&"function"!=typeof n?t:n},p=function(){return function(t,n){if(Array.isArray(t))return t;if(Symbol.iterator in Object(t))return function(t,n){var e=[],o=!0,r=!1,i=void 0;try{for(var a,u=t[Symbol.iterator]();!(o=(a=u.next()).done)&&(e.push(a.value),!n||e.length!==n);o=!0);}catch(t){r=!0,i=t}finally{try{!o&&u.return&&u.return()}finally{if(r)throw i}}return e}(t,n);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),h=function(t,n){return Object.freeze(Object.defineProperties(t,{raw:{value:Object.freeze(n)}}))},b=function(t){if(Array.isArray(t)){for(var n=0,e=Array(t.length);n<t.length;n++)e[n]=t[n];return e}return Array.from(t)},g=1,v=2,y=3,x=4,w=5,k=6,_=7,C=8,O=9,E=10,A=11,S=12,T=13,L=RegExp("^("+["area","base","basefont","bgsound","br","col","command","embed","frame","hr","img","input","isindex","keygen","link","meta","param","source","track","wbr","!--","animate","animateTransform","circle","cursor","desc","ellipse","feBlend","feColorMatrix","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feDistantLight","feFlood","feFuncA","feFuncB","feFuncG","feFuncR","feGaussianBlur","feImage","feMergeNode","feMorphology","feOffset","fePointLight","feSpecularLighting","feSpotLight","feTile","feTurbulence","font-face-format","font-face-name","font-face-uri","glyph","glyphRef","hkern","image","line","missing-glyph","mpath","path","polygon","polyline","rect","set","stop","tref","use","view","vkern"].join("|")+")(?:[.#][a-zA-Z0-9-￿_:-]+)*$"),N=/\n[\s]+$/,j=/^\n[\s]+/,z=/[\s]+$/,P=/^[\s]+/,R=/[\n\s]+/g,M=["a","abbr","b","bdi","bdo","br","cite","data","dfn","em","i","kbd","mark","q","rp","rt","rtc","ruby","s","amp","small","span","strong","sub","sup","time","u","var","wbr"],F=["code","pre"],D=function t(n,e){if(Array.isArray(e))for(var o,r,i=n.nodeName.toLowerCase(),a=!1,u=0,s=e.length;u<s;u++){var l=e[u];if(Array.isArray(l))t(n,l);else{("number"==typeof l||"boolean"==typeof l||"function"==typeof l||l instanceof Date||l instanceof RegExp)&&(l=l.toString());var c=n.childNodes[n.childNodes.length-1];if("string"==typeof l)a=!0,c&&"#text"===c.nodeName?c.nodeValue+=l:(l=document.createTextNode(l),n.appendChild(l),c=l),u===s-1&&(a=!1,-1===M.indexOf(i)&&-1===F.indexOf(i)?""===(o=c.nodeValue.replace(j,"").replace(z,"").replace(N,"").replace(R," "))?n.removeChild(c):c.nodeValue=o:-1===F.indexOf(i)&&(r=0===u?"":" ",o=c.nodeValue.replace(j,r).replace(P," ").replace(z,"").replace(N,"").replace(R," "),c.nodeValue=o));else if(l&&l.nodeType){a&&(a=!1,-1===M.indexOf(i)&&-1===F.indexOf(i)?""===(o=c.nodeValue.replace(j,"").replace(N,"").replace(R," "))?n.removeChild(c):c.nodeValue=o:-1===F.indexOf(i)&&(o=c.nodeValue.replace(P," ").replace(j,"").replace(N,"").replace(R," "),c.nodeValue=o));var f=l.nodeName;f&&(i=f.toLowerCase()),n.appendChild(l)}}}},G=t(function(t){function n(t,n,i){var u;-1!==s.indexOf(t)&&(n.namespace=e);var l=!1;if(n.namespace&&(l=n.namespace,delete n.namespace),l)u=document.createElementNS(l,t);else{if(t===a)return document.createComment(n.comment);u=document.createElement(t)}for(var c in n)if(n.hasOwnProperty(c)){var f=c.toLowerCase(),d=n[c];if("classname"===f&&(f="class",c="class"),"htmlFor"===c&&(c="for"),-1!==r.indexOf(f))if("true"===d)d=f;else if("false"===d)continue;"on"===f.slice(0,2)?u[c]=d:l?"xlink:href"===c?u.setAttributeNS(o,c,d):/^xmlns($|:)/i.test(c)||u.setAttributeNS(null,c,d):u.setAttribute(c,d)}return D(u,i),u}var e="http://www.w3.org/2000/svg",o="http://www.w3.org/1999/xlink",r=["autofocus","checked","defaultchecked","disabled","formnovalidate","indeterminate","readonly","required","selected","willvalidate"],a="!--",s=["svg","altGlyph","altGlyphDef","altGlyphItem","animate","animateColor","animateMotion","animateTransform","circle","clipPath","color-profile","cursor","defs","desc","ellipse","feBlend","feColorMatrix","feComponentTransfer","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feDistantLight","feFlood","feFuncA","feFuncB","feFuncG","feFuncR","feGaussianBlur","feImage","feMerge","feMergeNode","feMorphology","feOffset","fePointLight","feSpecularLighting","feSpotLight","feTile","feTurbulence","filter","font","font-face","font-face-format","font-face-name","font-face-src","font-face-uri","foreignObject","g","glyph","glyphRef","hkern","image","line","linearGradient","marker","mask","metadata","missing-glyph","mpath","path","pattern","polygon","polyline","radialGradient","rect","set","stop","switch","symbol","text","textPath","title","tref","tspan","use","view","vkern"];t.exports=function(t,n){function e(t){return"function"==typeof t?t:"string"==typeof t?t:t&&"object"===(void 0===t?"undefined":u(t))?t:o("",t)}n||(n={});var o=n.concat||function(t,n){return String(t)+String(n)};return!1!==n.attrToProp&&(t=i(t)),function(r){function i(t){var e=[];a===_&&(a=x);for(var o=0;o<t.length;o++){var r=t.charAt(o);a===g&&"<"===r?(s.length&&e.push([g,s]),s="",a=v):">"!==r||function(t){return t===O||t===E}(a)||a===T?a===T&&/-$/.test(s)&&"-"===r?(n.comments&&e.push([C,s.substr(0,s.length-1)],[y]),s="",a=g):a===v&&/^!--$/.test(s)?(n.comments&&e.push([v,s],[w,"comment"],[A]),s=r,a=T):a===g||a===T?s+=r:a===v&&/\s/.test(r)?(e.push([v,s]),s="",a=x):a===v?s+=r:a===x&&/[^\s"'=/]/.test(r)?(a=w,s=r):a===x&&/\s/.test(r)?(s.length&&e.push([w,s]),e.push([S])):a===w&&/\s/.test(r)?(e.push([w,s]),s="",a=k):a===w&&"="===r?(e.push([w,s],[A]),s="",a=_):a===w?s+=r:a!==k&&a!==x||"="!==r?a!==k&&a!==x||/\s/.test(r)?a===_&&'"'===r?a=E:a===_&&"'"===r?a=O:a===E&&'"'===r?(e.push([C,s],[S]),s="",a=x):a===O&&"'"===r?(e.push([C,s],[S]),s="",a=x):a!==_||/\s/.test(r)?a===C&&/\s/.test(r)?(e.push([C,s],[S]),s="",a=x):a!==C&&a!==O&&a!==E||(s+=r):(a=C,o--):(e.push([S]),/[\w-]/.test(r)?(s+=r,a=w):a=x):(e.push([A]),a=_):(a===v?e.push([v,s]):a===w?e.push([w,s]):a===C&&s.length&&e.push([C,s]),e.push([y]),s="",a=g)}return a===g&&s.length?(e.push([g,s]),s=""):a===C&&s.length?(e.push([C,s]),s=""):a===E&&s.length?(e.push([C,s]),s=""):a===O&&s.length?(e.push([C,s]),s=""):a===w&&(e.push([w,s]),s=""),e}for(var a=g,s="",l=arguments.length,c=[],f=0;f<r.length;f++)if(f<l-1){var d=arguments[f+1],m=i(r[f]),p=a;p===E&&(p=C),p===O&&(p=C),p===_&&(p=C),p===x&&(p=w),m.push([0,p,d]),c.push.apply(c,m)}else c.push.apply(c,i(r[f]));for(var h=[null,{},[]],b=[[h,-1]],f=0;f<c.length;f++){var N=b[b.length-1][0],j=(m=c[f])[0];if(j===v&&/^\//.test(m[1]))F=b[b.length-1][1],b.length>1&&(b.pop(),b[b.length-1][0][2][F]=t(N[0],N[1],N[2].length?N[2]:void 0));else if(j===v){var z=[m[1],{},[]];N[2].push(z),b.push([z,N[2].length-1])}else if(j===w||0===j&&m[1]===w){for(var P,R="";f<c.length;f++)if(c[f][0]===w)R=o(R,c[f][1]);else{if(0!==c[f][0]||c[f][1]!==w)break;if("object"!==u(c[f][2])||R)R=o(R,c[f][2]);else for(P in c[f][2])c[f][2].hasOwnProperty(P)&&!N[1][P]&&(N[1][P]=c[f][2][P])}c[f][0]===A&&f++;for(var M=f;f<c.length;f++)if(c[f][0]===C||c[f][0]===w)N[1][R]?""===c[f][1]||(N[1][R]=o(N[1][R],c[f][1])):N[1][R]=e(c[f][1]);else{if(0!==c[f][0]||c[f][1]!==C&&c[f][1]!==w){!R.length||N[1][R]||f!==M||c[f][0]!==y&&c[f][0]!==S||(N[1][R]=R.toLowerCase()),c[f][0]===y&&f--;break}N[1][R]?""===c[f][2]||(N[1][R]=o(N[1][R],c[f][2])):N[1][R]=e(c[f][2])}}else if(j===w)N[1][m[1]]=!0;else if(0===j&&m[1]===w)N[1][m[2]]=!0;else if(j===y){if(function(t){return L.test(t)}(N[0])&&b.length){var F=b[b.length-1][1];b.pop(),b[b.length-1][0][2][F]=t(N[0],N[1],N[2].length?N[2]:void 0)}}else if(0===j&&m[1]===g)void 0===m[2]||null===m[2]?m[2]="":m[2]||(m[2]=o("",m[2])),Array.isArray(m[2][0])?N[2].push.apply(N[2],m[2]):N[2].push(m[2]);else if(j===g)N[2].push(m[1]);else if(j!==A&&j!==S)throw new Error("unhandled: "+j)}if(h[2].length>1&&/^\s*$/.test(h[2][0])&&h[2].shift(),h[2].length>2||2===h[2].length&&/\S/.test(h[2][1]))throw new Error("multiple root elements must be wrapped in an enclosing tag");return Array.isArray(h[2][0])&&"string"==typeof h[2][0][0]&&Array.isArray(h[2][0][2])&&(h[2][0]=t(h[2][0][0],h[2][0][1],h[2][0][2])),h[2][0]}}(n,{comments:!0}),t.exports.default=t.exports,t.exports.createElement=n}),I=function(t){return"undefined"!=typeof window?function(){var n=document.createElement("div");return n.innerHTML=t,function(t){return Array.isArray(t)?t:[].slice.call(t)}(n.childNodes)}():function(){var n=new String(t);return n.__encoded=!0,n}()},$=t(function(t){!function(){function n(){for(var t=[],o=0;o<arguments.length;o++){var r=arguments[o];if(r){var i=void 0===r?"undefined":u(r);if("string"===i||"number"===i)t.push(r);else if(Array.isArray(r))t.push(n.apply(null,r));else if("object"===i)for(var a in r)e.call(r,a)&&r[a]&&t.push(a)}}return t.join(" ")}var e={}.hasOwnProperty;t.exports?t.exports=n:window.classNames=n}()}),q=h(['<a href="','" class="','">\n      ',"\n      ","\n    </a>"],['<a href="','" class="','">\n      ',"\n      ","\n    </a>"]),V=h(['<button type="button" class="','">\n      ',"\n      ","\n    </button>"],['<button type="button" class="','">\n      ',"\n      ","\n    </button>"]),B=function(t,n){var e,o=t.tag,r=void 0===o?"button":o,i=t.color,a=t.url,u=void 0===a?"#":a,s=t.size,l=t.ghost,f=t.classes,d=t.motion,m=t.arrow,p=$("m-button",f,(e={},c(e,"m-button--"+i,i),c(e,"m-button--"+s,s),c(e,"m-button--ghost",l),c(e,"m-button--motion",d),c(e,"m-button--arrow",m),e)),h=I('<axa-icon id="arrow" classes="m-button__arrow"></axa-icon>');return"a"===r.toLowerCase()?G(q,u,p,n,m&&h):G(V,p,n,m&&h)},W=/^\s*(?:true|false|null|undefined|-?[0-9]+\.?[0-9]*|[[{](?:.|[\r\n])*[\]}])\s*$/,H=function(){function t(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},e=n.bubbles,o=void 0!==e&&e,r=n.cancelable,i=void 0!==r&&r,a=n.detail,u=void 0===a?void 0:a,s=document.createEvent("CustomEvent");s.initCustomEvent(t,o,i,u);var l=s.preventDefault;return s.preventDefault=function(){l.call(s);try{Object.defineProperty(this,"defaultPrevented",{get:function(){return!0}})}catch(t){this.defaultPrevented=!0}},s}try{var n=new window.CustomEvent("test");if(n.preventDefault(),!0!==n.defaultPrevented)throw new Error("Could not prevent default");return window.CustomEvent}catch(t){}return t}(),X=/\s+/,Y={transitionend:function(){for(var t=document.createElement("div").style,n={transition:"transitionend",OTransition:"oTransitionEnd otransitionend",MozTransition:"transitionend",WebkitTransition:"webkitTransitionEnd"},e=Object.keys(n),o=e.length,r=void 0,i=0;i<o;++i)if(r=e[i],void 0!==t[r])return n[r];return null}()},J={};e(document,"pubsub/onsubscribe",function(t){var e=t.detail;J[e]||(J[e]={count:0});var o=J[e],r=o.queue;Array.isArray(r)&&(r.forEach(function(t){var e=p(t,3),o=e[0],r=e[1];n(e[2],o,r)}),delete o.queue)}),Object.setPrototypeOf(o.prototype,HTMLElement.prototype),Object.setPrototypeOf(o,HTMLElement);var Z={},K=function(t){function r(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",n=arguments[1];s(this,r);var e=m(this,(r.__proto__||Object.getPrototypeOf(r)).call(this));return e._makeContextReady=e._makeContextReady.bind(e),e._initialise(t,n),e}return d(r,o),l(r,[{key:"_initialise",value:function(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;this.initialClassName=this.className,this._styles=t,this._template=n}},{key:"connectedCallback",value:function(){this._appendStyles(),this.render(),this.contextCallback&&this._makeContextReady()}},{key:"disconnectedCallback",value:function(){this.unContextEnabled&&this.unContextEnabled()}},{key:"_appendStyles",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this;if(this._styles){var n=document.createElement("style"),e=document.createTextNode(this._styles);n.appendChild(e),t.insertAdjacentElement?t.insertAdjacentElement("afterbegin",n):t.appendChild(n)}}},{key:"render",value:function(){var t=this;if(!this._hasRendered){var n=this._template;if(n)try{for(var e=document.createDocumentFragment();this.firstChild;)e.appendChild(this.firstChild);var o=n(function(t){if(!t.hasAttributes)return null;for(var n={},e=t.attributes,o=e.length,r=0;r<o;++r){var i=e[r];n[i.name]=function(t,n){if("function"==typeof t.hasAttribute&&!t.hasAttribute(n))return!1;var e=t.value;if(n?e=t.getAttribute(n):n=t.name,e&&n!==e){if(W.test(e))try{e=JSON.parse(e)}catch(n){console.error("Attribute "+t+" has an error:\n"+n+"\n",e)}}else e=!0;return e}(i)}return n}(this),e);if(Array.isArray(o))o.forEach(function(n){t.appendChild(n)});else if(o){if("string"==typeof o){var r=new Error("throwed");throw console.error("\n%cWeb Component %c"+this.nodeName+"%c does not accept string as a return from a template. Maybe use bel?\n\nStack Trace: "+r.stack+"\n","color: #580000; font-size: 14px; line-height:16px;","background: #8b0000; color: #FFF; font-size: 14px; line-height:16px;","color: #580000; font-size: 14px; line-height:16px;"),r}this.appendChild(o)}this._hasRendered=!0}catch(r){"throwed"!==r.message&&console.error("\n%cWeb Component %c"+this.nodeName+"%c has an error while loading its template:\n"+r+"\n\nStack Trace: "+r.stack+"\n","color: #580000; font-size: 14px; line-height:16px;","background: #8b0000; color: #FFF; font-size: 14px; line-height:16px;","color: #580000; font-size: 14px; line-height:16px;")}}}},{key:"enableContext",value:function(){var t=this.nodeName.toLowerCase();this.__isContext=!0,this.__contextName=t,function(t,e){var o=arguments.length>2&&void 0!==arguments[2]?arguments[2]:document;J[t]||(J[t]={count:0,queue:[]});var r=J[t].queue;Array.isArray(r)?r.push([t,e,o]):n(o,t,e)}("context/enabled",t)}},{key:"selectContext",value:function(t){this.__selectedContext=t.toLowerCase()}},{key:"_makeContextReady",value:function(){var t=this;this.contextNode?(clearTimeout(this.timeoutId),this.timeoutId=setTimeout(function(){t.contextCallback(t.contextNode)},10)):this.unContextEnabled||(this.unContextEnabled=function(t,o){var r=e(arguments.length>2&&void 0!==arguments[2]?arguments[2]:document,t,o);J[t]||(J[t]={count:0});var i=J[t];return i.count++,i.onsubscribe||(i.onsubscribe=function(t){function n(){for(var n=arguments.length,o=Array(n),i=0;i<n;i++)o[i]=arguments[i];return d=o,v&&(m&&clearTimeout(m),m=setTimeout(function(){p&&clearTimeout(p),e()},r)),y&&!p&&(p=setTimeout(function(){m&&clearTimeout(m),e()},f)),u&&!g&&(g=!0,h=t.apply(void 0,b(d))),h}function e(){l&&(h=t.apply(void 0,b(d))),m=null,p=null,g=!1}function o(){m&&(clearTimeout(m),m=null),p&&(clearTimeout(p),p=null),d=void 0,g=!1}var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},a=i.leading,u=void 0!==a&&a,s=i.trailing,l=void 0===s||s,c=i.maxWait,f=void 0!==c&&c,d=void 0,m=void 0,p=void 0,h=void 0,g=!1,v=r!==f,y=!1!==f;return n.flush=function(){return(m||p)&&(h=t.apply(void 0,b(d))),o(),h},n.cancel=o,n}(function(t){return function(){n(document,"pubsub/onsubscribe",t),n(document,"pubsub/onsubscribe/"+t,t),J[t]&&delete J[t].unsubscribe}}(t),100)),i.onsubscribe(),function(){i.count--,r.call(this),i.count<=0&&delete J[t]}}("context/enabled",this._makeContextReady))}},{key:"contextNode",get:function(){for(var t=this.__selectedContext,n=this.parentNode;n&&(!n.__isContext||t&&t!==n.__contextName);)n=n.parentNode;return!(!n||!n.__isContext)&&n}}],[{key:"uuidv4",value:function(){return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,function(t){var n=16*Math.random()|0;return("x"==t?n:3&n|8).toString(16)})}}]),r}(),Q=(function(t){function n(){return s(this,n),m(this,(n.__proto__||Object.getPrototypeOf(n)).apply(this,arguments))}d(n,K),l(n,[{key:"connectedCallback",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"open",n=this.attachShadow({mode:t});this._appendStyles(n),this.render()}}])}(),function(t){function n(){return s(this,n),m(this,(n.__proto__||Object.getPrototypeOf(n)).apply(this,arguments))}return d(n,K),l(n,[{key:"_appendStyles",value:function(){n.appendGlobalStyles(this._styles,this.nodeName)}}],[{key:"appendGlobalStyles",value:function(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:K.uuidv4();if(t&&!Z[t]){var e=document.createElement("style"),o=document.createTextNode(t);e.appendChild(o),e.setAttribute("data-c-name",n.toLowerCase()),document.querySelector("head").appendChild(e),Z[t]=!0}}}]),n}()),U=function(t){function n(){return s(this,n),m(this,(n.__proto__||Object.getPrototypeOf(n)).call(this,r,B))}return d(n,Q),n}();!function(t){var n=0,e=function(){if(0===n)try{t.apply(void 0,arguments),n+=1,document.removeEventListener("DOMContentLoaded"),document.removeEventListener("WebComponentsReady")}catch(t){}};document.addEventListener("DOMContentLoaded",e,!1),document.addEventListener("WebComponentsReady",e,!1)}(function(){window.customElements.define("axa-button",U),Q.appendGlobalStyles(r)})}();
