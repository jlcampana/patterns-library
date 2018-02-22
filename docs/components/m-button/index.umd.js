!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):t.StyleGuideWebComponent=e()}(this,function(){"use strict";var t="@-webkit-keyframes fadeOutRightInLeft {\n  0% {\n    opacity: 1; }\n  50% {\n    opacity: 0;\n    -webkit-transform: translate3d(100%, 0, 0);\n            transform: translate3d(100%, 0, 0); }\n  51% {\n    opacity: 0;\n    -webkit-transform: translate3d(-100%, 0, 0);\n            transform: translate3d(-100%, 0, 0); }\n  100% {\n    opacity: 1;\n    -webkit-transform: none;\n            transform: none; } }\n\n@keyframes fadeOutRightInLeft {\n  0% {\n    opacity: 1; }\n  50% {\n    opacity: 0;\n    -webkit-transform: translate3d(100%, 0, 0);\n            transform: translate3d(100%, 0, 0); }\n  51% {\n    opacity: 0;\n    -webkit-transform: translate3d(-100%, 0, 0);\n            transform: translate3d(-100%, 0, 0); }\n  100% {\n    opacity: 1;\n    -webkit-transform: none;\n            transform: none; } }\n\n.m-button {\n  /* Adds a hyphen where the word breaks, if supported (No Blink) */\n  -webkit-hyphens: auto;\n      -ms-hyphens: auto;\n          hyphens: auto;\n  /* These are technically the same, but use both */\n  overflow-wrap: break-word;\n  word-wrap: break-word;\n  font-size: 12px;\n  font-weight: 600;\n  line-height: 1.5;\n  letter-spacing: 0.02em;\n  position: relative;\n  padding: 10px 30px;\n  border-width: 2px;\n  border-style: solid;\n  text-decoration: none;\n  text-transform: uppercase;\n  vertical-align: middle;\n  color: #fff;\n  background: #00008f;\n  border-color: #00008f;\n  border-bottom-color: #00005b; }\n  @media (min-width: 576px) {\n    .m-button {\n      font-size: 14px;\n      line-height: 1.21; } }\n  .m-button:hover, .m-button:active, .m-button:focus {\n    cursor: pointer;\n    text-decoration: none;\n    outline: none; }\n  .m-button:disabled, .m-button[disabled] {\n    cursor: default !important; }\n  a.m-button {\n    display: inline-block; }\n  .m-button:hover, .m-button:active, .m-button:focus {\n    background: #00005b;\n    border-color: #00005b;\n    color: #fff; }\n  .m-button:disabled, .m-button[disabled] {\n    background: #999 !important;\n    border-color: #999 !important; }\n\n.m-button__icon {\n  width: 16px;\n  height: 16px;\n  display: block;\n  fill: currentColor;\n  padding: 10px;\n  border-left: 1px solid rgba(255, 255, 255, 0.2); }\n\n.m-button__arrow {\n  width: 13px;\n  height: 13px;\n  display: block;\n  fill: currentColor;\n  position: absolute;\n  top: 50%;\n  margin-top: -6.5px;\n  right: 30px; }\n\n.m-button--red {\n  color: #fff;\n  background: #f07662;\n  border-color: #f07662;\n  border-bottom-color: #ec4d33; }\n  .m-button--red:hover, .m-button--red:active, .m-button--red:focus {\n    background: #ec4d33;\n    border-color: #ec4d33;\n    color: #fff; }\n  .m-button--red:disabled, .m-button--red[disabled] {\n    background: #999 !important;\n    border-color: #999 !important; }\n\n.m-button--white {\n  color: #fff;\n  background: #fff;\n  border-color: #fff;\n  border-bottom-color: #00005b; }\n  .m-button--white:hover, .m-button--white:active, .m-button--white:focus {\n    background: #00005b;\n    border-color: #00005b;\n    color: #fff; }\n  .m-button--white:disabled, .m-button--white[disabled] {\n    background: #999 !important;\n    border-color: #999 !important; }\n\n.m-button--ghost {\n  color: #00008f;\n  background: transparent;\n  border-color: #00008f; }\n  .m-button--ghost:hover, .m-button--ghost:active, .m-button--ghost:focus {\n    color: #00005b;\n    background: transparent;\n    border-color: #00005b; }\n  .m-button--ghost.m-button--red {\n    color: #f07662;\n    background: transparent;\n    border-color: #f07662; }\n    .m-button--ghost.m-button--red:hover, .m-button--ghost.m-button--red:active, .m-button--ghost.m-button--red:focus {\n      color: #ec4d33;\n      background: transparent;\n      border-color: #ec4d33; }\n  .m-button--ghost.m-button--white {\n    color: #fff;\n    background: transparent;\n    border-color: #fff; }\n    .m-button--ghost.m-button--white:hover, .m-button--ghost.m-button--white:active, .m-button--ghost.m-button--white:focus {\n      color: #3b3fd8;\n      background: #fff;\n      border-color: #fff; }\n\n.m-button--motion {\n  -webkit-transform: translate3d(0, 0, 0);\n          transform: translate3d(0, 0, 0);\n  -webkit-backface-visibility: hidden;\n          backface-visibility: hidden;\n  z-index: 0;\n  overflow: hidden; }\n  .m-button--motion::after {\n    position: absolute;\n    top: 50%;\n    left: 50%;\n    z-index: -1;\n    display: block;\n    width: 0;\n    height: 550px;\n    content: '';\n    -webkit-transform: translateX(-50%) translateY(-50%) rotate(45deg);\n            transform: translateX(-50%) translateY(-50%) rotate(45deg);\n    -webkit-transition: width 0.3s cubic-bezier(0.455, 0.03, 0.515, 0.955) 0s;\n    transition: width 0.3s cubic-bezier(0.455, 0.03, 0.515, 0.955) 0s; }\n  .m-button--motion:hover::after, .m-button--motion:focus::after {\n    width: 110%; }\n  .m-button--motion::after {\n    background: #00008f; }\n  .m-button--motion:hover, .m-button--motion:focus {\n    background: #00008f;\n    color: #fff; }\n    .m-button--motion:hover::after, .m-button--motion:focus::after {\n      background: #00005b; }\n  .m-button--motion.m-button--red::after {\n    background: #f07662; }\n  .m-button--motion.m-button--red:hover, .m-button--motion.m-button--red:focus {\n    background: #f07662;\n    color: #fff; }\n    .m-button--motion.m-button--red:hover::after, .m-button--motion.m-button--red:focus::after {\n      background: #ec4d33; }\n  .m-button--motion.m-button--white::after {\n    background: transparent; }\n  .m-button--motion.m-button--white:hover, .m-button--motion.m-button--white:focus {\n    background: transparent;\n    color: #3b3fd8; }\n    .m-button--motion.m-button--white:hover::after, .m-button--motion.m-button--white:focus::after {\n      background: #fff; }\n  .m-button--motion.m-button--ghost {\n    background: transparent !important; }\n  .m-button--motion:hover .m-button__arrow, .m-button--motion:active .m-button__arrow, .m-button--motion:focus .m-button__arrow {\n    -webkit-animation-duration: 0.6s;\n            animation-duration: 0.6s;\n    -webkit-animation-timing-function: ease;\n            animation-timing-function: ease;\n    -webkit-animation-fill-mode: both;\n            animation-fill-mode: both;\n    -webkit-animation-name: fadeOutRightInLeft;\n            animation-name: fadeOutRightInLeft; }\n\n.m-button--arrow {\n  padding-right: 55px; }\n\n.m-button--x-pad-20 {\n  padding-right: 20px;\n  padding-left: 20px; }\n  .m-button--x-pad-20.m-button--arrow {\n    padding-right: 45px; }\n  .m-button--x-pad-20 .m-button__arrow {\n    right: 20px; }\n\n.m-button--x-pad-40 {\n  padding-right: 40px;\n  padding-left: 40px; }\n  .m-button--x-pad-40.m-button--arrow {\n    padding-right: 65px; }\n  .m-button--x-pad-40 .m-button__arrow {\n    right: 40px; }\n\n.m-button--sm {\n  font-size: 12px;\n  font-weight: 600;\n  line-height: 1.5;\n  letter-spacing: 0.02em;\n  padding-top: 5.5px;\n  padding-bottom: 5.5px;\n  border-width: 1px; }\n  @media (min-width: 576px) {\n    .m-button--sm {\n      font-size: 13px;\n      line-height: 1.38; } }\n\n.m-button--lg {\n  font-size: 14px;\n  font-weight: 600;\n  line-height: 1.5;\n  letter-spacing: 0.02em;\n  padding-top: 11px;\n  padding-bottom: 11px; }\n  @media (min-width: 576px) {\n    .m-button--lg {\n      font-size: 16px; } }\n  .m-button--lg.m-button--arrow {\n    padding-right: 59px; }\n  .m-button--lg .m-button__icon {\n    width: 20px;\n    height: 20px; }\n  .m-button--lg .m-button__arrow {\n    width: 17px;\n    height: 17px;\n    margin-top: -8.5px; }\n";function e(t,e){return t(e={exports:{}},e.exports),e.exports}var n=function(t){return function(e,n,r){for(var i in n)i in o&&(n[o[i]]=n[i],delete n[i]);return t(e,n,r)}},o={class:"className",for:"htmlFor","http-equiv":"httpEquiv"};var r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},i=function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")},a=function(){function t(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}return function(e,n,o){return n&&t(e.prototype,n),o&&t(e,o),e}}(),u=function(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t},s=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(t[o]=n[o])}return t},l=function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)},c=function(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e},f=function(){return function(t,e){if(Array.isArray(t))return t;if(Symbol.iterator in Object(t))return function(t,e){var n=[],o=!0,r=!1,i=void 0;try{for(var a,u=t[Symbol.iterator]();!(o=(a=u.next()).done)&&(n.push(a.value),!e||n.length!==e);o=!0);}catch(t){r=!0,i=t}finally{try{!o&&u.return&&u.return()}finally{if(r)throw i}}return n}(t,e);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),d=function(t,e){return Object.freeze(Object.defineProperties(t,{raw:{value:Object.freeze(e)}}))},p=function(t){if(Array.isArray(t)){for(var e=0,n=Array(t.length);e<t.length;e++)n[e]=t[e];return n}return Array.from(t)},m=1,h=2,b=3,g=4,v=5,y=6,x=7,w=8,k=9,_=10,C=11,O=12,E=13;var A=RegExp("^("+["area","base","basefont","bgsound","br","col","command","embed","frame","hr","img","input","isindex","keygen","link","meta","param","source","track","wbr","!--","animate","animateTransform","circle","cursor","desc","ellipse","feBlend","feColorMatrix","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feDistantLight","feFlood","feFuncA","feFuncB","feFuncG","feFuncR","feGaussianBlur","feImage","feMergeNode","feMorphology","feOffset","fePointLight","feSpecularLighting","feSpotLight","feTile","feTurbulence","font-face-format","font-face-name","font-face-uri","glyph","glyphRef","hkern","image","line","missing-glyph","mpath","path","polygon","polyline","rect","set","stop","tref","use","view","vkern"].join("|")+")(?:[.#][a-zA-Z0-9-￿_:-]+)*$");var T=/\n[\s]+$/,L=/^\n[\s]+/,S=/[\s]+$/,N=/^[\s]+/,j=/[\n\s]+/g,P=["a","abbr","b","bdi","bdo","br","cite","data","dfn","em","i","kbd","mark","q","rp","rt","rtc","ruby","s","amp","small","span","strong","sub","sup","time","u","var","wbr"],R=["code","pre"],z=function t(e,n){if(Array.isArray(n))for(var o,r,i=e.nodeName.toLowerCase(),a=!1,u=0,s=n.length;u<s;u++){var l=n[u];if(Array.isArray(l))t(e,l);else{("number"==typeof l||"boolean"==typeof l||"function"==typeof l||l instanceof Date||l instanceof RegExp)&&(l=l.toString());var c=e.childNodes[e.childNodes.length-1];if("string"==typeof l)a=!0,c&&"#text"===c.nodeName?c.nodeValue+=l:(l=document.createTextNode(l),e.appendChild(l),c=l),u===s-1&&(a=!1,-1===P.indexOf(i)&&-1===R.indexOf(i)?""===(o=c.nodeValue.replace(L,"").replace(S,"").replace(T,"").replace(j," "))?e.removeChild(c):c.nodeValue=o:-1===R.indexOf(i)&&(r=0===u?"":" ",o=c.nodeValue.replace(L,r).replace(N," ").replace(S,"").replace(T,"").replace(j," "),c.nodeValue=o));else if(l&&l.nodeType){a&&(a=!1,-1===P.indexOf(i)&&-1===R.indexOf(i)?""===(o=c.nodeValue.replace(L,"").replace(T,"").replace(j," "))?e.removeChild(c):c.nodeValue=o:-1===R.indexOf(i)&&(o=c.nodeValue.replace(N," ").replace(L,"").replace(T,"").replace(j," "),c.nodeValue=o));var f=l.nodeName;f&&(i=f.toLowerCase()),e.appendChild(l)}}}},M=e(function(t){var e="http://www.w3.org/2000/svg",o="http://www.w3.org/1999/xlink",i=["autofocus","checked","defaultchecked","disabled","formnovalidate","indeterminate","readonly","required","selected","willvalidate"],a="!--",u=["svg","altGlyph","altGlyphDef","altGlyphItem","animate","animateColor","animateMotion","animateTransform","circle","clipPath","color-profile","cursor","defs","desc","ellipse","feBlend","feColorMatrix","feComponentTransfer","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feDistantLight","feFlood","feFuncA","feFuncB","feFuncG","feFuncR","feGaussianBlur","feImage","feMerge","feMergeNode","feMorphology","feOffset","fePointLight","feSpecularLighting","feSpotLight","feTile","feTurbulence","filter","font","font-face","font-face-format","font-face-name","font-face-src","font-face-uri","foreignObject","g","glyph","glyphRef","hkern","image","line","linearGradient","marker","mask","metadata","missing-glyph","mpath","path","pattern","polygon","polyline","radialGradient","rect","set","stop","switch","symbol","text","textPath","title","tref","tspan","use","view","vkern"];function s(t,n,r){var s;-1!==u.indexOf(t)&&(n.namespace=e);var l=!1;if(n.namespace&&(l=n.namespace,delete n.namespace),l)s=document.createElementNS(l,t);else{if(t===a)return document.createComment(n.comment);s=document.createElement(t)}for(var c in n)if(n.hasOwnProperty(c)){var f=c.toLowerCase(),d=n[c];if("classname"===f&&(f="class",c="class"),"htmlFor"===c&&(c="for"),-1!==i.indexOf(f))if("true"===d)d=f;else if("false"===d)continue;"on"===f.slice(0,2)?s[c]=d:l?"xlink:href"===c?s.setAttributeNS(o,c,d):/^xmlns($|:)/i.test(c)||s.setAttributeNS(null,c,d):s.setAttribute(c,d)}return z(s,r),s}t.exports=function(t,e){e||(e={});var o=e.concat||function(t,e){return String(t)+String(e)};return!1!==e.attrToProp&&(t=n(t)),function(n){for(var a=m,u="",s=arguments.length,l=[],c=0;c<n.length;c++)if(c<s-1){var f=arguments[c+1],d=D(n[c]),p=a;p===_&&(p=w),p===k&&(p=w),p===x&&(p=w),p===g&&(p=v),d.push([0,p,f]),l.push.apply(l,d)}else l.push.apply(l,D(n[c]));var T,L=[null,{},[]],S=[[L,-1]];for(c=0;c<l.length;c++){var N=S[S.length-1][0],j=(d=l[c])[0];if(j===h&&/^\//.test(d[1])){var P=S[S.length-1][1];S.length>1&&(S.pop(),S[S.length-1][0][2][P]=t(N[0],N[1],N[2].length?N[2]:void 0))}else if(j===h){var R=[d[1],{},[]];N[2].push(R),S.push([R,N[2].length-1])}else if(j===v||0===j&&d[1]===v){for(var z,M="";c<l.length;c++)if(l[c][0]===v)M=o(M,l[c][1]);else{if(0!==l[c][0]||l[c][1]!==v)break;if("object"!==r(l[c][2])||M)M=o(M,l[c][2]);else for(z in l[c][2])l[c][2].hasOwnProperty(z)&&!N[1][z]&&(N[1][z]=l[c][2][z])}l[c][0]===C&&c++;for(var F=c;c<l.length;c++)if(l[c][0]===w||l[c][0]===v)N[1][M]?""===l[c][1]||(N[1][M]=o(N[1][M],l[c][1])):N[1][M]=i(l[c][1]);else{if(0!==l[c][0]||l[c][1]!==w&&l[c][1]!==v){!M.length||N[1][M]||c!==F||l[c][0]!==b&&l[c][0]!==O||(N[1][M]=M.toLowerCase()),l[c][0]===b&&c--;break}N[1][M]?""===l[c][2]||(N[1][M]=o(N[1][M],l[c][2])):N[1][M]=i(l[c][2])}}else if(j===v)N[1][d[1]]=!0;else if(0===j&&d[1]===v)N[1][d[2]]=!0;else if(j===b)T=N[0],A.test(T)&&S.length&&(P=S[S.length-1][1],S.pop(),S[S.length-1][0][2][P]=t(N[0],N[1],N[2].length?N[2]:void 0));else if(0===j&&d[1]===m)void 0===d[2]||null===d[2]?d[2]="":d[2]||(d[2]=o("",d[2])),Array.isArray(d[2][0])?N[2].push.apply(N[2],d[2]):N[2].push(d[2]);else if(j===m)N[2].push(d[1]);else if(j!==C&&j!==O)throw new Error("unhandled: "+j)}if(L[2].length>1&&/^\s*$/.test(L[2][0])&&L[2].shift(),L[2].length>2||2===L[2].length&&/\S/.test(L[2][1]))throw new Error("multiple root elements must be wrapped in an enclosing tag");return Array.isArray(L[2][0])&&"string"==typeof L[2][0][0]&&Array.isArray(L[2][0][2])&&(L[2][0]=t(L[2][0][0],L[2][0][1],L[2][0][2])),L[2][0];function D(t){var n,o=[];a===x&&(a=g);for(var r=0;r<t.length;r++){var i=t.charAt(r);a===m&&"<"===i?(u.length&&o.push([m,u]),u="",a=h):">"===i&&(n=a)!==k&&n!==_&&a!==E?(a===h?o.push([h,u]):a===v?o.push([v,u]):a===w&&u.length&&o.push([w,u]),o.push([b]),u="",a=m):a===E&&/-$/.test(u)&&"-"===i?(e.comments&&o.push([w,u.substr(0,u.length-1)],[b]),u="",a=m):a===h&&/^!--$/.test(u)?(e.comments&&o.push([h,u],[v,"comment"],[C]),u=i,a=E):a===m||a===E?u+=i:a===h&&/\s/.test(i)?(o.push([h,u]),u="",a=g):a===h?u+=i:a===g&&/[^\s"'=/]/.test(i)?(a=v,u=i):a===g&&/\s/.test(i)?(u.length&&o.push([v,u]),o.push([O])):a===v&&/\s/.test(i)?(o.push([v,u]),u="",a=y):a===v&&"="===i?(o.push([v,u],[C]),u="",a=x):a===v?u+=i:a!==y&&a!==g||"="!==i?a!==y&&a!==g||/\s/.test(i)?a===x&&'"'===i?a=_:a===x&&"'"===i?a=k:a===_&&'"'===i?(o.push([w,u],[O]),u="",a=g):a===k&&"'"===i?(o.push([w,u],[O]),u="",a=g):a!==x||/\s/.test(i)?a===w&&/\s/.test(i)?(o.push([w,u],[O]),u="",a=g):a!==w&&a!==k&&a!==_||(u+=i):(a=w,r--):(o.push([O]),/[\w-]/.test(i)?(u+=i,a=v):a=g):(o.push([C]),a=x)}return a===m&&u.length?(o.push([m,u]),u=""):a===w&&u.length?(o.push([w,u]),u=""):a===_&&u.length?(o.push([w,u]),u=""):a===k&&u.length?(o.push([w,u]),u=""):a===v&&(o.push([v,u]),u=""),o}};function i(t){return"function"==typeof t?t:"string"==typeof t?t:t&&"object"===(void 0===t?"undefined":r(t))?t:o("",t)}}(s,{comments:!0}),t.exports.default=t.exports,t.exports.createElement=s});M.createElement;var F=function(t){return"undefined"!=typeof window?((n=document.createElement("div")).innerHTML=t,o=n.childNodes,Array.isArray(o)?o:[].slice.call(o)):((e=new String(t)).__encoded=!0,e);var e,n,o},D=e(function(t){!function(){var e={}.hasOwnProperty;function n(){for(var t=[],o=0;o<arguments.length;o++){var i=arguments[o];if(i){var a=void 0===i?"undefined":r(i);if("string"===a||"number"===a)t.push(i);else if(Array.isArray(i))t.push(n.apply(null,i));else if("object"===a)for(var u in i)e.call(i,u)&&i[u]&&t.push(u)}}return t.join(" ")}t.exports?t.exports=n:window.classNames=n}()}),G=d(['<a href="','" class="','">\n      ',"\n      ","\n    </a>"],['<a href="','" class="','">\n      ',"\n      ","\n    </a>"]),I=d(['<button type="button" class="','">\n      ',"\n      ","\n    </button>"],['<button type="button" class="','">\n      ',"\n      ","\n    </button>"]);function $(t,e){var n,o=t.tag,r=void 0===o?"button":o,i=t.color,a=t.url,s=void 0===a?"#":a,l=t.size,c=t.ghost,f=t.classes,d=t.motion,p=t.arrow,m=D("m-button",f,(u(n={},"m-button--"+i,i),u(n,"m-button--"+l,l),u(n,"m-button--ghost",c),u(n,"m-button--motion",d),u(n,"m-button--arrow",p),n)),h=F('<axa-icon id="arrow" classes="m-button__arrow"></axa-icon>');return"a"===r.toLowerCase()?M(G,s,m,e,p&&h):M(I,m,e,p&&h)}var q=/^\s*(?:true|false|null|undefined|-?[0-9]+\.?[0-9]*|[[{](?:.|[\r\n])*[\]}])\s*$/;function V(t,e){if("function"==typeof t.hasAttribute&&!t.hasAttribute(e))return!1;var n=t.value;if(e?n=t.getAttribute(e):e=t.name,n&&e!==n){if(q.test(n))try{n=JSON.parse(n)}catch(e){console.error("Attribute "+t+" has an error:\n"+e+"\n",n)}}else n=!0;return n}var B=function(){try{var t=new window.CustomEvent("test");if(t.preventDefault(),!0!==t.defaultPrevented)throw new Error("Could not prevent default");return window.CustomEvent}catch(t){}return e;function e(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=e.bubbles,o=void 0!==n&&n,r=e.cancelable,i=void 0!==r&&r,a=e.detail,u=void 0===a?void 0:a,s=document.createEvent("CustomEvent");s.initCustomEvent(t,o,i,u);var l=s.preventDefault;return s.preventDefault=function(){l.call(s);try{Object.defineProperty(this,"defaultPrevented",{get:function(){return!0}})}catch(t){this.defaultPrevented=!0}},s}}();function W(t,e,n){var o=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},r=new B(e,s({},o,{detail:n}));t.dispatchEvent(r)}function H(t,e){var n,o;return(n=e,new RegExp("^"+n+"$|^"+n+"\\s|\\s"+n+"\\s|\\s"+n+"$",o)).test(t.className)}var X=/\s+/,Y={transitionend:function(){for(var t=document.createElement("div").style,e={transition:"transitionend",OTransition:"oTransitionEnd otransitionend",MozTransition:"transitionend",WebkitTransition:"webkitTransitionEnd"},n=Object.keys(e),o=n.length,r=void 0,i=0;i<o;++i)if(void 0!==t[r=n[i]])return e[r];return null}()};function J(t,e,n,o){var i=arguments.length>4&&void 0!==arguments[4]&&arguments[4];if(Y[e]&&(e=Y[e]),!t||!e)return null;var a=void 0===n?"undefined":r(n);"function"===a&&(i=!!o,o=n);for(var u=n&&"string"===a?function(e){var r=e.target;for(;!H(r,n)&&r!==t;)r=r.parentNode;if(r!==t)return o(e,r)}:o,s=e.split(X),l=s.length,c=0;c<l;++c)t.addEventListener(s[c],u,i);return function e(){for(var n=0;n<l;++n)t.removeEventListener(s[n],u,i);!function(t,e){if(!t)return!1;for(var n=Object.keys(t),o=n.length,r=0;r<o;++r){var i=n[r];if(t[i]===e)return delete t[i]}}(this,e)}}var Z={};function K(t,e){var n=J(arguments.length>2&&void 0!==arguments[2]?arguments[2]:document,t,e);Z[t]||(Z[t]={count:0});var o,r=Z[t];return r.count++,r.onsubscribe||(r.onsubscribe=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},o=n.leading,r=void 0!==o&&o,i=n.trailing,a=void 0===i||i,u=n.maxWait,s=void 0!==u&&u,l=void 0,c=void 0,f=void 0,d=void 0,m=!1,h=e!==s,b=!1!==s;function g(){for(var n=arguments.length,o=Array(n),i=0;i<n;i++)o[i]=arguments[i];return l=o,h&&(c&&clearTimeout(c),c=setTimeout(v,e)),b&&!f&&(f=setTimeout(y,s)),r&&!m&&(m=!0,d=t.apply(void 0,p(l))),d}return g.flush=function(){return(c||f)&&(d=t.apply(void 0,p(l))),w(),d},g.cancel=w,g;function v(){f&&clearTimeout(f),x()}function y(){c&&clearTimeout(c),x()}function x(){a&&(d=t.apply(void 0,p(l))),c=null,f=null,m=!1}function w(){c&&(clearTimeout(c),c=null),f&&(clearTimeout(f),f=null),l=void 0,m=!1}}((o=t,function(){W(document,"pubsub/onsubscribe",o),W(document,"pubsub/onsubscribe/"+o,o),Z[o]&&delete Z[o].unsubscribe}),100)),r.onsubscribe(),function(){r.count--,n.call(this),r.count<=0&&delete Z[t]}}function Q(){return Reflect.construct(HTMLElement,[],this.__proto__.constructor)}J(document,"pubsub/onsubscribe",function(t){var e=t.detail;Z[e]||(Z[e]={count:0});var n=Z[e],o=n.queue;Array.isArray(o)&&(o.forEach(function(t){var e=f(t,3),n=e[0],o=e[1],r=e[2];W(r,n,o)}),delete n.queue)}),Object.setPrototypeOf(Q.prototype,HTMLElement.prototype),Object.setPrototypeOf(Q,HTMLElement);var U,tt,et,nt={},ot="throwed",rt=function(t){function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",n=arguments[1];i(this,e);var o=c(this,(e.__proto__||Object.getPrototypeOf(e)).call(this));return o._makeContextReady=o._makeContextReady.bind(o),o._initialise(t,n),o}return l(e,Q),a(e,[{key:"_initialise",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;this.initialClassName=this.className,this._styles=t,this._template=e}},{key:"connectedCallback",value:function(){this._appendStyles(),this.render(),this.contextCallback&&this._makeContextReady()}},{key:"disconnectedCallback",value:function(){this.unContextEnabled&&this.unContextEnabled()}},{key:"_appendStyles",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this;if(this._styles){var e=document.createElement("style"),n=document.createTextNode(this._styles);e.appendChild(n),t.insertAdjacentElement?t.insertAdjacentElement("afterbegin",e):t.appendChild(e)}}},{key:"render",value:function(){var t=this;if(!this._hasRendered){var e=this._template;if(e)try{for(var n=document.createDocumentFragment();this.firstChild;)n.appendChild(this.firstChild);var o=e(function(t){if(!t.hasAttributes)return null;for(var e={},n=t.attributes,o=n.length,r=0;r<o;++r){var i=n[r];e[i.name]=V(i)}return e}(this),n);if(Array.isArray(o))o.forEach(function(e){t.appendChild(e)});else if(o){if("string"==typeof o){var r=new Error(ot);throw console.error("\n%cWeb Component %c"+this.nodeName+"%c does not accept string as a return from a template. Maybe use bel?\n\nStack Trace: "+r.stack+"\n","color: #580000; font-size: 14px; line-height:16px;","background: #8b0000; color: #FFF; font-size: 14px; line-height:16px;","color: #580000; font-size: 14px; line-height:16px;"),r}this.appendChild(o)}this._hasRendered=!0}catch(r){r.message!==ot&&console.error("\n%cWeb Component %c"+this.nodeName+"%c has an error while loading its template:\n"+r+"\n\nStack Trace: "+r.stack+"\n","color: #580000; font-size: 14px; line-height:16px;","background: #8b0000; color: #FFF; font-size: 14px; line-height:16px;","color: #580000; font-size: 14px; line-height:16px;")}}}},{key:"enableContext",value:function(){var t=this.nodeName.toLowerCase();this.__isContext=!0,this.__contextName=t,function(t,e){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:document;Z[t]||(Z[t]={count:0,queue:[]});var o=Z[t].queue;Array.isArray(o)?o.push([t,e,n]):W(n,t,e)}("context/enabled",t)}},{key:"selectContext",value:function(t){this.__selectedContext=t&&t.toLowerCase()}},{key:"_makeContextReady",value:function(){var t=this,e=(arguments.length>0&&void 0!==arguments[0]?arguments[0]:{}).detail;this.contextNode&&(clearTimeout(this.timeoutId),this.timeoutId=setTimeout(function(){t.contextCallback(t.contextNode,e)},10)),this.unContextEnabled&&this.unContextEnabled(),this.unContextEnabled=K("context/enabled",this._makeContextReady)}},{key:"contextNode",get:function(){for(var t=this.__selectedContext,e=this.parentNode;e&&(!e.__isContext||t&&t!==e.__contextName);)e=e.parentNode;return!(!e||!e.__isContext)&&e}}],[{key:"uuidv4",value:function(){return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,function(t){var e=16*Math.random()|0;return("x"==t?e:3&e|8).toString(16)})}}]),e}(),it=(function(t){function e(){return i(this,e),c(this,(e.__proto__||Object.getPrototypeOf(e)).apply(this,arguments))}l(e,rt),a(e,[{key:"connectedCallback",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"open",e=this.attachShadow({mode:t});this._appendStyles(e),this.render()}}])}(),function(t){function e(){return i(this,e),c(this,(e.__proto__||Object.getPrototypeOf(e)).apply(this,arguments))}return l(e,rt),a(e,[{key:"_appendStyles",value:function(){e.appendGlobalStyles(this._styles,this.nodeName)}}],[{key:"appendGlobalStyles",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:rt.uuidv4();if(t&&!nt[t]){var n=document.createElement("style"),o=document.createTextNode(t);n.appendChild(o),n.setAttribute("data-c-name",e.toLowerCase()),document.querySelector("head").appendChild(n),nt[t]=!0}}}]),e}()),at=function(e){function n(){return i(this,n),c(this,(n.__proto__||Object.getPrototypeOf(n)).call(this,t,$))}return l(n,it),n}();return U=function(){window.customElements.define("axa-button",at),it.appendGlobalStyles(t)},tt=0,et=function(){if(0===tt)try{U.apply(void 0,arguments),tt+=1,document.removeEventListener("DOMContentLoaded"),document.removeEventListener("WebComponentsReady")}catch(t){}},document.addEventListener("DOMContentLoaded",et,!1),document.addEventListener("WebComponentsReady",et,!1),at});
