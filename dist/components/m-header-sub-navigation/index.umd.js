!function(e,n){"object"==typeof exports&&"undefined"!=typeof module?module.exports=n():"function"==typeof define&&define.amd?define(n):e.StyleGuideWebComponent=n()}(this,function(){"use strict";function e(e,n){return e(n={exports:{}},n.exports),n.exports}var n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},t=function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")},a=function(){function e(e,n){for(var t=0;t<n.length;t++){var a=n[t];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(n,t,a){return t&&e(n.prototype,t),a&&e(n,a),n}}(),i=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a])}return e},o=function(e,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function, not "+typeof n);e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),n&&(Object.setPrototypeOf?Object.setPrototypeOf(e,n):e.__proto__=n)},r=function(e,n){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!n||"object"!=typeof n&&"function"!=typeof n?e:n},s=function(){return function(e,n){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return function(e,n){var t=[],a=!0,i=!1,o=void 0;try{for(var r,s=e[Symbol.iterator]();!(a=(r=s.next()).done)&&(t.push(r.value),!n||t.length!==n);a=!0);}catch(e){i=!0,o=e}finally{try{!a&&s.return&&s.return()}finally{if(i)throw o}}return t}(e,n);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),l=function(e,n){return Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(n)}}))},d=function(e){if(Array.isArray(e)){for(var n=0,t=Array(e.length);n<e.length;n++)t[n]=e[n];return t}return Array.from(e)},u=e(function(e){!function(){var t={}.hasOwnProperty;function a(){for(var e=[],i=0;i<arguments.length;i++){var o=arguments[i];if(o){var r=void 0===o?"undefined":n(o);if("string"===r||"number"===r)e.push(o);else if(Array.isArray(o))e.push(a.apply(null,o));else if("object"===r)for(var s in o)t.call(o,s)&&o[s]&&e.push(s)}}return e.join(" ")}e.exports?e.exports=a:window.classNames=a}()}),c="@-webkit-keyframes fadeOutRightInLeft {\n  0% {\n    opacity: 1; }\n  50% {\n    opacity: 0;\n    -webkit-transform: translate3d(100%, 0, 0);\n            transform: translate3d(100%, 0, 0); }\n  51% {\n    opacity: 0;\n    -webkit-transform: translate3d(-100%, 0, 0);\n            transform: translate3d(-100%, 0, 0); }\n  100% {\n    opacity: 1;\n    -webkit-transform: none;\n            transform: none; } }\n\n@keyframes fadeOutRightInLeft {\n  0% {\n    opacity: 1; }\n  50% {\n    opacity: 0;\n    -webkit-transform: translate3d(100%, 0, 0);\n            transform: translate3d(100%, 0, 0); }\n  51% {\n    opacity: 0;\n    -webkit-transform: translate3d(-100%, 0, 0);\n            transform: translate3d(-100%, 0, 0); }\n  100% {\n    opacity: 1;\n    -webkit-transform: none;\n            transform: none; } }\n\n.m-header-sub-navigation {\n  display: none;\n  background: #fff;\n  border-bottom: 2px solid #ccc;\n  -webkit-box-shadow: 0 3px 10px -2px rgba(0, 0, 0, 0.3);\n          box-shadow: 0 3px 10px -2px rgba(0, 0, 0, 0.3); }\n  .is-header-sub-navigation-open .m-header-sub-navigation {\n    display: block; }\n\n.m-header-sub-navigation--flyout {\n  position: absolute;\n  top: 100%;\n  left: 0;\n  z-index: 1050;\n  width: 100%;\n  margin-top: 2px; }\n\n.m-header-sub-navigation__index {\n  background: #fafafa; }\n\n.m-header-sub-navigation__index-box {\n  padding-right: 15px;\n  padding-left: 15px;\n  width: 100%;\n  margin-right: auto;\n  margin-left: auto;\n  max-width: auto;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-wrap: wrap;\n      flex-wrap: wrap;\n  height: 60px;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center; }\n  @media (min-width: 576px) {\n    .m-header-sub-navigation__index-box {\n      max-width: 540px; } }\n  @media (min-width: 768px) {\n    .m-header-sub-navigation__index-box {\n      max-width: 720px; } }\n  @media (min-width: 992px) {\n    .m-header-sub-navigation__index-box {\n      max-width: 960px; } }\n  @media (min-width: 1200px) {\n    .m-header-sub-navigation__index-box {\n      max-width: 1140px; } }\n\n.m-header-sub-navigation__index-link {\n  /* Adds a hyphen where the word breaks, if supported (No Blink) */\n  -webkit-hyphens: auto;\n      -ms-hyphens: auto;\n          hyphens: auto;\n  /* These are technically the same, but use both */\n  overflow-wrap: break-word;\n  word-wrap: break-word;\n  font-size: 16px;\n  font-weight: 400;\n  line-height: 1.5;\n  letter-spacing: 0.01em; }\n  @media (min-width: 576px) {\n    .m-header-sub-navigation__index-link {\n      font-size: 18px; } }\n  .m-header-sub-navigation__index-link:hover, .m-header-sub-navigation__index-link:active, .m-header-sub-navigation__index-link:focus {\n    text-decoration: none;\n    font-weight: 600; }\n\n.m-header-sub-navigation__index-close {\n  /* Adds a hyphen where the word breaks, if supported (No Blink) */\n  -webkit-hyphens: auto;\n      -ms-hyphens: auto;\n          hyphens: auto;\n  /* These are technically the same, but use both */\n  overflow-wrap: break-word;\n  word-wrap: break-word;\n  font-size: 12px;\n  font-weight: 600;\n  line-height: 1.5;\n  letter-spacing: 0.02em;\n  position: relative;\n  padding-right: 44px;\n  margin-left: auto;\n  text-transform: uppercase;\n  border: none;\n  background: transparent;\n  color: #00008f; }\n  @media (min-width: 576px) {\n    .m-header-sub-navigation__index-close {\n      font-size: 13px;\n      line-height: 1.38; } }\n  .m-header-sub-navigation__index-close:hover, .m-header-sub-navigation__index-close:active, .m-header-sub-navigation__index-close:focus {\n    color: #00005b;\n    cursor: pointer;\n    outline: none; }\n\n.m-header-sub-navigation__index-close__icon {\n  width: 23px;\n  height: 23px;\n  display: block;\n  fill: currentColor;\n  position: absolute;\n  top: 50%;\n  right: 0;\n  margin-top: -11.5px; }\n\n.m-header-sub-navigation__box {\n  padding-right: 15px;\n  padding-left: 15px;\n  width: 100%;\n  margin-right: auto;\n  margin-left: auto;\n  max-width: auto;\n  padding-top: 30px;\n  padding-bottom: 40px; }\n  @media (min-width: 576px) {\n    .m-header-sub-navigation__box {\n      max-width: 540px; } }\n  @media (min-width: 768px) {\n    .m-header-sub-navigation__box {\n      max-width: 720px; } }\n  @media (min-width: 992px) {\n    .m-header-sub-navigation__box {\n      max-width: 960px; } }\n  @media (min-width: 1200px) {\n    .m-header-sub-navigation__box {\n      max-width: 1140px; } }\n\n.m-header-sub-navigation__row {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-wrap: wrap;\n      flex-wrap: wrap;\n  margin-right: -30px;\n  margin-left: -30px;\n  -webkit-box-pack: start;\n      -ms-flex-pack: start;\n          justify-content: flex-start; }\n  .m-header-sub-navigation__row + .m-header-sub-navigation__row > .m-header-sub-navigation__block {\n    padding-top: 30px; }\n\n.m-header-sub-navigation__row--col-2 {\n  margin-right: -45px;\n  margin-left: -45px; }\n\n.m-header-sub-navigation__row--col-3 {\n  margin-right: -65px;\n  margin-left: -65px; }\n\n.m-header-sub-navigation__block {\n  max-width: 25%;\n  -webkit-box-flex: 0;\n      -ms-flex: 0 0 25%;\n          flex: 0 0 25%;\n  padding: 0 30px;\n  border-right: 1px solid #ccc; }\n  .m-header-sub-navigation__block:last-child {\n    border: none; }\n  .m-header-sub-navigation__row--col-2 .m-header-sub-navigation__block {\n    max-width: 50%;\n    -webkit-box-flex: 0;\n        -ms-flex: 0 0 50%;\n            flex: 0 0 50%; }\n    .m-header-sub-navigation__row--col-2 .m-header-sub-navigation__block:nth-child(n + 3) {\n      padding-top: 30px;\n      border-right: 1px solid #ccc; }\n    .m-header-sub-navigation__row--col-2 .m-header-sub-navigation__block:nth-child(2n) {\n      border: none; }\n  .m-header-sub-navigation__row--col-3 .m-header-sub-navigation__block {\n    max-width: 33.33333%;\n    -webkit-box-flex: 0;\n        -ms-flex: 0 0 33.33333%;\n            flex: 0 0 33.33333%; }\n    .m-header-sub-navigation__row--col-3 .m-header-sub-navigation__block:nth-child(n + 4) {\n      padding-top: 30px;\n      border-right: 1px solid #ccc; }\n    .m-header-sub-navigation__row--col-3 .m-header-sub-navigation__block:nth-child(3n) {\n      border: none; }\n  .m-header-sub-navigation__row--col-4 .m-header-sub-navigation__block:nth-child(n + 5) {\n    padding-top: 30px;\n    border-right: 1px solid #ccc; }\n  .m-header-sub-navigation__row--col-4 .m-header-sub-navigation__block:nth-child(4n) {\n    border: none; }\n  .m-header-sub-navigation__row:not(.m-header-sub-navigation__row--col-2):not(.m-header-sub-navigation__row--col-3):not(.m-header-sub-navigation__row--col-4) .m-header-sub-navigation__block:nth-last-child(1):first-child,\n  .m-header-sub-navigation__row:not(.m-header-sub-navigation__row--col-2):not(.m-header-sub-navigation__row--col-3):not(.m-header-sub-navigation__row--col-4) .m-header-sub-navigation__block:nth-last-child(1):first-child ~ * {\n    max-width: 33.33333%;\n    -webkit-box-flex: 0;\n        -ms-flex: 0 0 33.33333%;\n            flex: 0 0 33.33333%; }\n  .m-header-sub-navigation__row:not(.m-header-sub-navigation__row--col-2):not(.m-header-sub-navigation__row--col-3):not(.m-header-sub-navigation__row--col-4) .m-header-sub-navigation__block:nth-last-child(2):first-child,\n  .m-header-sub-navigation__row:not(.m-header-sub-navigation__row--col-2):not(.m-header-sub-navigation__row--col-3):not(.m-header-sub-navigation__row--col-4) .m-header-sub-navigation__block:nth-last-child(2):first-child ~ * {\n    max-width: 25%;\n    -webkit-box-flex: 0;\n        -ms-flex: 0 0 25%;\n            flex: 0 0 25%;\n    padding-right: 45px;\n    padding-left: 45px; }\n  .m-header-sub-navigation__row:not(.m-header-sub-navigation__row--col-2):not(.m-header-sub-navigation__row--col-3):not(.m-header-sub-navigation__row--col-4) .m-header-sub-navigation__block:nth-last-child(3n):first-child,\n  .m-header-sub-navigation__row:not(.m-header-sub-navigation__row--col-2):not(.m-header-sub-navigation__row--col-3):not(.m-header-sub-navigation__row--col-4) .m-header-sub-navigation__block:nth-last-child(3n):first-child ~ * {\n    max-width: 33.33333%;\n    -webkit-box-flex: 0;\n        -ms-flex: 0 0 33.33333%;\n            flex: 0 0 33.33333%;\n    padding-right: 65px;\n    padding-left: 65px; }\n\n.m-header-sub-navigation__block--wide:nth-last-child(2):first-child,\n.m-header-sub-navigation__block--wide:nth-last-child(2):first-child ~ * {\n  max-width: 50%;\n  -webkit-box-flex: 0;\n      -ms-flex: 0 0 50%;\n          flex: 0 0 50%; }\n  .m-header-sub-navigation__block--wide:nth-last-child(2):first-child .m-header-sub-navigation__list,\n  .m-header-sub-navigation__block--wide:nth-last-child(2):first-child ~ * .m-header-sub-navigation__list {\n    -webkit-column-count: 2;\n            column-count: 2; }\n\n.m-header-sub-navigation__category {\n  /* Adds a hyphen where the word breaks, if supported (No Blink) */\n  -webkit-hyphens: auto;\n      -ms-hyphens: auto;\n          hyphens: auto;\n  /* These are technically the same, but use both */\n  overflow-wrap: break-word;\n  word-wrap: break-word;\n  font-size: 20px;\n  font-weight: 700;\n  line-height: 1.5;\n  letter-spacing: 0;\n  color: #00008f;\n  text-transform: uppercase; }\n  @media (min-width: 576px) {\n    .m-header-sub-navigation__category {\n      font-size: 24px;\n      line-height: 1.2; } }\n\n.m-header-sub-navigation__list {\n  padding: 0;\n  margin: 0;\n  list-style-type: none;\n  margin-top: 15px; }\n\n.m-header-sub-navigation__list-item {\n  display: block; }\n\n.m-header-sub-navigation__link {\n  /* Adds a hyphen where the word breaks, if supported (No Blink) */\n  -webkit-hyphens: auto;\n      -ms-hyphens: auto;\n          hyphens: auto;\n  /* These are technically the same, but use both */\n  overflow-wrap: break-word;\n  word-wrap: break-word;\n  font-size: 16px;\n  font-weight: 400;\n  line-height: 1.5;\n  letter-spacing: 0.01em;\n  display: inline-block;\n  width: 100%;\n  padding: 4px 0;\n  line-height: 1.3 !important; }\n  @media (min-width: 576px) {\n    .m-header-sub-navigation__link {\n      font-size: 18px; } }\n  .m-header-sub-navigation__link.is-header-sub-navigation-active, .m-header-sub-navigation__link:hover, .m-header-sub-navigation__link:active, .m-header-sub-navigation__link:focus {\n    color: #00005b;\n    text-decoration: none;\n    font-weight: 600;\n    letter-spacing: -0.005em; }\n",h=function(e){return function(n,t,a){for(var i in t)i in f&&(t[f[i]]=t[i],delete t[i]);return e(n,t,a)}},f={class:"className",for:"htmlFor","http-equiv":"httpEquiv"};var p=1,m=2,b=3,g=4,v=5,_=6,x=7,y=8,w=9,k=10,C=11,O=12,A=13;var E=RegExp("^("+["area","base","basefont","bgsound","br","col","command","embed","frame","hr","img","input","isindex","keygen","link","meta","param","source","track","wbr","!--","animate","animateTransform","circle","cursor","desc","ellipse","feBlend","feColorMatrix","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feDistantLight","feFlood","feFuncA","feFuncB","feFuncG","feFuncR","feGaussianBlur","feImage","feMergeNode","feMorphology","feOffset","fePointLight","feSpecularLighting","feSpotLight","feTile","feTurbulence","font-face-format","font-face-name","font-face-uri","glyph","glyphRef","hkern","image","line","missing-glyph","mpath","path","polygon","polyline","rect","set","stop","tref","use","view","vkern"].join("|")+")(?:[.#][a-zA-Z0-9-￿_:-]+)*$");var j=/\n[\s]+$/,T=/^\n[\s]+/,N=/[\s]+$/,S=/^[\s]+/,L=/[\n\s]+/g,P=["a","abbr","b","bdi","bdo","br","cite","data","dfn","em","i","kbd","mark","q","rp","rt","rtc","ruby","s","amp","small","span","strong","sub","sup","time","u","var","wbr"],M=["code","pre"],F=function e(n,t){if(Array.isArray(t))for(var a,i,o=n.nodeName.toLowerCase(),r=!1,s=0,l=t.length;s<l;s++){var d=t[s];if(Array.isArray(d))e(n,d);else{("number"==typeof d||"boolean"==typeof d||"function"==typeof d||d instanceof Date||d instanceof RegExp)&&(d=d.toString());var u=n.childNodes[n.childNodes.length-1];if("string"==typeof d)r=!0,u&&"#text"===u.nodeName?u.nodeValue+=d:(d=document.createTextNode(d),n.appendChild(d),u=d),s===l-1&&(r=!1,-1===P.indexOf(o)&&-1===M.indexOf(o)?""===(a=u.nodeValue.replace(T,"").replace(N,"").replace(j,"").replace(L," "))?n.removeChild(u):u.nodeValue=a:-1===M.indexOf(o)&&(i=0===s?"":" ",a=u.nodeValue.replace(T,i).replace(S," ").replace(N,"").replace(j,"").replace(L," "),u.nodeValue=a));else if(d&&d.nodeType){r&&(r=!1,-1===P.indexOf(o)&&-1===M.indexOf(o)?""===(a=u.nodeValue.replace(T,"").replace(j,"").replace(L," "))?n.removeChild(u):u.nodeValue=a:-1===M.indexOf(o)&&(a=u.nodeValue.replace(S," ").replace(T,"").replace(j,"").replace(L," "),u.nodeValue=a));var c=d.nodeName;c&&(o=c.toLowerCase()),n.appendChild(d)}}}},R=e(function(e){var t="http://www.w3.org/2000/svg",a="http://www.w3.org/1999/xlink",i=["autofocus","checked","defaultchecked","disabled","formnovalidate","indeterminate","readonly","required","selected","willvalidate"],o="!--",r=["svg","altGlyph","altGlyphDef","altGlyphItem","animate","animateColor","animateMotion","animateTransform","circle","clipPath","color-profile","cursor","defs","desc","ellipse","feBlend","feColorMatrix","feComponentTransfer","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feDistantLight","feFlood","feFuncA","feFuncB","feFuncG","feFuncR","feGaussianBlur","feImage","feMerge","feMergeNode","feMorphology","feOffset","fePointLight","feSpecularLighting","feSpotLight","feTile","feTurbulence","filter","font","font-face","font-face-format","font-face-name","font-face-src","font-face-uri","foreignObject","g","glyph","glyphRef","hkern","image","line","linearGradient","marker","mask","metadata","missing-glyph","mpath","path","pattern","polygon","polyline","radialGradient","rect","set","stop","switch","symbol","text","textPath","title","tref","tspan","use","view","vkern"];function s(e,n,s){var l;-1!==r.indexOf(e)&&(n.namespace=t);var d=!1;if(n.namespace&&(d=n.namespace,delete n.namespace),d)l=document.createElementNS(d,e);else{if(e===o)return document.createComment(n.comment);l=document.createElement(e)}for(var u in n)if(n.hasOwnProperty(u)){var c=u.toLowerCase(),h=n[u];if("classname"===c&&(c="class",u="class"),"htmlFor"===u&&(u="for"),-1!==i.indexOf(c))if("true"===h)h=c;else if("false"===h)continue;"on"===c.slice(0,2)?l[u]=h:d?"xlink:href"===u?l.setAttributeNS(a,u,h):/^xmlns($|:)/i.test(u)||l.setAttributeNS(null,u,h):l.setAttribute(u,h)}return F(l,s),l}e.exports=function(e,t){t||(t={});var a=t.concat||function(e,n){return String(e)+String(n)};return!1!==t.attrToProp&&(e=h(e)),function(o){for(var r=p,s="",l=arguments.length,d=[],u=0;u<o.length;u++)if(u<l-1){var c=arguments[u+1],h=D(o[u]),f=r;f===k&&(f=y),f===w&&(f=y),f===x&&(f=y),f===g&&(f=v),h.push([0,f,c]),d.push.apply(d,h)}else d.push.apply(d,D(o[u]));var j,T=[null,{},[]],N=[[T,-1]];for(u=0;u<d.length;u++){var S=N[N.length-1][0],L=(h=d[u])[0];if(L===m&&/^\//.test(h[1])){var P=N[N.length-1][1];N.length>1&&(N.pop(),N[N.length-1][0][2][P]=e(S[0],S[1],S[2].length?S[2]:void 0))}else if(L===m){var M=[h[1],{},[]];S[2].push(M),N.push([M,S[2].length-1])}else if(L===v||0===L&&h[1]===v){for(var F,R="";u<d.length;u++)if(d[u][0]===v)R=a(R,d[u][1]);else{if(0!==d[u][0]||d[u][1]!==v)break;if("object"!==n(d[u][2])||R)R=a(R,d[u][2]);else for(F in d[u][2])d[u][2].hasOwnProperty(F)&&!S[1][F]&&(S[1][F]=d[u][2][F])}d[u][0]===C&&u++;for(var z=u;u<d.length;u++)if(d[u][0]===y||d[u][0]===v)S[1][R]?""===d[u][1]||(S[1][R]=a(S[1][R],d[u][1])):S[1][R]=i(d[u][1]);else{if(0!==d[u][0]||d[u][1]!==y&&d[u][1]!==v){!R.length||S[1][R]||u!==z||d[u][0]!==b&&d[u][0]!==O||(S[1][R]=R.toLowerCase()),d[u][0]===b&&u--;break}S[1][R]?""===d[u][2]||(S[1][R]=a(S[1][R],d[u][2])):S[1][R]=i(d[u][2])}}else if(L===v)S[1][h[1]]=!0;else if(0===L&&h[1]===v)S[1][h[2]]=!0;else if(L===b)j=S[0],E.test(j)&&N.length&&(P=N[N.length-1][1],N.pop(),N[N.length-1][0][2][P]=e(S[0],S[1],S[2].length?S[2]:void 0));else if(0===L&&h[1]===p)void 0===h[2]||null===h[2]?h[2]="":h[2]||(h[2]=a("",h[2])),Array.isArray(h[2][0])?S[2].push.apply(S[2],h[2]):S[2].push(h[2]);else if(L===p)S[2].push(h[1]);else if(L!==C&&L!==O)throw new Error("unhandled: "+L)}if(T[2].length>1&&/^\s*$/.test(T[2][0])&&T[2].shift(),T[2].length>2||2===T[2].length&&/\S/.test(T[2][1]))throw new Error("multiple root elements must be wrapped in an enclosing tag");return Array.isArray(T[2][0])&&"string"==typeof T[2][0][0]&&Array.isArray(T[2][0][2])&&(T[2][0]=e(T[2][0][0],T[2][0][1],T[2][0][2])),T[2][0];function D(e){var n,a=[];r===x&&(r=g);for(var i=0;i<e.length;i++){var o=e.charAt(i);r===p&&"<"===o?(s.length&&a.push([p,s]),s="",r=m):">"===o&&(n=r)!==w&&n!==k&&r!==A?(r===m?a.push([m,s]):r===v?a.push([v,s]):r===y&&s.length&&a.push([y,s]),a.push([b]),s="",r=p):r===A&&/-$/.test(s)&&"-"===o?(t.comments&&a.push([y,s.substr(0,s.length-1)],[b]),s="",r=p):r===m&&/^!--$/.test(s)?(t.comments&&a.push([m,s],[v,"comment"],[C]),s=o,r=A):r===p||r===A?s+=o:r===m&&/\s/.test(o)?(a.push([m,s]),s="",r=g):r===m?s+=o:r===g&&/[^\s"'=/]/.test(o)?(r=v,s=o):r===g&&/\s/.test(o)?(s.length&&a.push([v,s]),a.push([O])):r===v&&/\s/.test(o)?(a.push([v,s]),s="",r=_):r===v&&"="===o?(a.push([v,s],[C]),s="",r=x):r===v?s+=o:r!==_&&r!==g||"="!==o?r!==_&&r!==g||/\s/.test(o)?r===x&&'"'===o?r=k:r===x&&"'"===o?r=w:r===k&&'"'===o?(a.push([y,s],[O]),s="",r=g):r===w&&"'"===o?(a.push([y,s],[O]),s="",r=g):r!==x||/\s/.test(o)?r===y&&/\s/.test(o)?(a.push([y,s],[O]),s="",r=g):r!==y&&r!==w&&r!==k||(s+=o):(r=y,i--):(a.push([O]),/[\w-]/.test(o)?(s+=o,r=v):r=g):(a.push([C]),r=x)}return r===p&&s.length?(a.push([p,s]),s=""):r===y&&s.length?(a.push([y,s]),s=""):r===k&&s.length?(a.push([y,s]),s=""):r===w&&s.length?(a.push([y,s]),s=""):r===v&&(a.push([v,s]),s=""),a}};function i(e){return"function"==typeof e?e:"string"==typeof e?e:e&&"object"===(void 0===e?"undefined":n(e))?e:a("",e)}}(s,{comments:!0}),e.exports.default=e.exports,e.exports.createElement=s});R.createElement;var z=function(e){return"undefined"!=typeof window?((t=document.createElement("div")).innerHTML=e,a=t.childNodes,Array.isArray(a)?a:[].slice.call(a)):((n=new String(e)).__encoded=!0,n);var n,t,a},D=l(['\n  <li class="m-header-sub-navigation__list-item">\n    <a class="m-header-sub-navigation__link js-header-navigation-close ','" href="','">',"</a>\n  </li>\n"],['\n  <li class="m-header-sub-navigation__list-item">\n    <a class="m-header-sub-navigation__link js-header-navigation-close ','" href="','">',"</a>\n  </li>\n"]),G=l(['\n  <div class="m-header-sub-navigation__row m-header-sub-navigation__row--col-','">\n\n  ',"\n  </div>\n"],['\n  <div class="m-header-sub-navigation__row m-header-sub-navigation__row--col-','">\n\n  ',"\n  </div>\n"]),B=l(['\n    <div class="m-header-sub-navigation__block ','">\n      <strong class="m-header-sub-navigation__category">\n        ','\n      </strong>\n\n      <ul class="m-header-sub-navigation__list">\n        ',"\n      </ul>\n    </div>\n  "],['\n    <div class="m-header-sub-navigation__block ','">\n      <strong class="m-header-sub-navigation__category">\n        ','\n      </strong>\n\n      <ul class="m-header-sub-navigation__list">\n        ',"\n      </ul>\n    </div>\n  "]),$=l(['<a class="m-header-sub-navigation__category__link" href="','">',"</a>"],['<a class="m-header-sub-navigation__category__link" href="','">',"</a>"]),q=l(['\n        <div class="m-header-sub-navigation__index">\n          <div class="m-header-sub-navigation__index-box">\n            <a class="m-header-sub-navigation__index-link js-header-navigation-close" href="','">','</a>\n            <button type="button" class="m-header-sub-navigation__index-close js-header-navigation-close">\n              Close\n              <axa-icon id="cross-gap" classes="m-header-sub-navigation__index-close__icon"></axa-icon>\n            </button>\n          </div>\n        </div>'],['\n        <div class="m-header-sub-navigation__index">\n          <div class="m-header-sub-navigation__index-box">\n            <a class="m-header-sub-navigation__index-link js-header-navigation-close" href="','">','</a>\n            <button type="button" class="m-header-sub-navigation__index-close js-header-navigation-close">\n              Close\n              <axa-icon id="cross-gap" classes="m-header-sub-navigation__index-close__icon"></axa-icon>\n            </button>\n          </div>\n        </div>']),V=l(['\n      <div class="m-header-sub-navigation__box">\n        ',"\n      </div>\n    "],['\n      <div class="m-header-sub-navigation__box">\n        ',"\n      </div>\n    "]),I=function(e){var n=e.url,t=e.name,a=e.isActive;return R(D,a?"is-header-sub-navigation-active":"",n,z(t))},W=function(e){var n,t=e.columns,a=e.col,i=e.isWide;return R(G,a||(2===(n=t.length)?n:n%3==0&&n%4!=0?3:4),t&&t.map(function(e){var n=e.links,t=e.title,a=e.url;return R(B,i?"m-header-sub-navigation__block--wide":"",a?R($,a,t):t,n&&n.map(I))}))},H=function(e){var n=e.items,t=e.indexurl,a=e.indextitle,i=[];return Array.isArray(n)&&(a&&t&&i.push(R(q,t,a)),i.push(R(V,n&&n.map(W)))),i},J=/^\s*(?:true|false|null|undefined|-?[0-9]+\.?[0-9]*|[[{](?:.|[\r\n])*[\]}])\s*$/;function Z(e,n){if("function"==typeof e.hasAttribute&&!e.hasAttribute(n))return!1;var t=e.value;if(n?t=e.getAttribute(n):n=e.name,t&&n!==t){if(J.test(t))try{t=JSON.parse(t)}catch(n){console.error("Attribute "+e+" has an error:\n"+n+"\n",t)}}else t=!0;return t}var K=function(){try{var e=new window.CustomEvent("test");if(e.preventDefault(),!0!==e.defaultPrevented)throw new Error("Could not prevent default");return window.CustomEvent}catch(e){}return n;function n(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},t=n.bubbles,a=void 0!==t&&t,i=n.cancelable,o=void 0!==i&&i,r=n.detail,s=void 0===r?void 0:r,l=document.createEvent("CustomEvent");l.initCustomEvent(e,a,o,s);var d=l.preventDefault;return l.preventDefault=function(){d.call(l);try{Object.defineProperty(this,"defaultPrevented",{get:function(){return!0}})}catch(e){this.defaultPrevented=!0}},l}}();function Q(e,n,t){var a=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},o=new K(n,i({},a,{detail:t}));e.dispatchEvent(o)}function U(e,n){var t,a;return(t=n,new RegExp("^"+t+"$|^"+t+"\\s|\\s"+t+"\\s|\\s"+t+"$",a)).test(e.className)}var X=/\s+/,Y={transitionend:function(){for(var e=document.createElement("div").style,n={transition:"transitionend",OTransition:"oTransitionEnd otransitionend",MozTransition:"transitionend",WebkitTransition:"webkitTransitionEnd"},t=Object.keys(n),a=t.length,i=void 0,o=0;o<a;++o)if(void 0!==e[i=t[o]])return n[i];return""}()};function ee(e,t,a,i){var o=arguments.length>4&&void 0!==arguments[4]&&arguments[4];if(Y[t]&&(t=Y[t]),!e||!t)return null;var r=void 0===a?"undefined":n(a);"function"===r&&(o=!!i,i=a);for(var s=a&&"string"===r?function(n){var t=n.target;for(;!U(t,a)&&t!==e;)t=t.parentNode;if(t!==e)return i(n,t)}:i,l=t.split(X),d=l.length,u=0;u<d;++u)e.addEventListener(l[u],s,o);return function n(){for(var t=0;t<d;++t)e.removeEventListener(l[t],s,o);!function(e,n){if(!e)return!1;for(var t=Object.keys(e),a=t.length,i=0;i<a;++i){var o=t[i];if(e[o]===n)return delete e[o]}}(this,n)}}var ne={};function te(e,n){var t=ee(arguments.length>2&&void 0!==arguments[2]?arguments[2]:document,e,n);ne[e]||(ne[e]={count:0});var a,i=ne[e];return i.count++,i.onsubscribe||(i.onsubscribe=function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},a=t.leading,i=void 0!==a&&a,o=t.trailing,r=void 0===o||o,s=t.maxWait,l=void 0!==s&&s,u=void 0,c=void 0,h=void 0,f=void 0,p=!1,m=n!==l,b=!1!==l;function g(){for(var t=arguments.length,a=Array(t),o=0;o<t;o++)a[o]=arguments[o];return u=a,m&&(c&&clearTimeout(c),c=setTimeout(v,n)),b&&!h&&(h=setTimeout(_,l)),i&&!p&&(p=!0,f=e.apply(void 0,d(u))),f}return g.flush=function(){return(c||h)&&(f=e.apply(void 0,d(u))),y(),f},g.cancel=y,g;function v(){h&&clearTimeout(h),x()}function _(){c&&clearTimeout(c),x()}function x(){r&&(f=e.apply(void 0,d(u))),c=null,h=null,p=!1}function y(){c&&(clearTimeout(c),c=null),h&&(clearTimeout(h),h=null),u=void 0,p=!1}}((a=e,function(){Q(document,"pubsub/onsubscribe",a),Q(document,"pubsub/onsubscribe/"+a,a),ne[a]&&delete ne[a].unsubscribe}),100)),i.onsubscribe(),function(){i.count--,t.call(this),i.count<=0&&delete ne[e]}}function ae(){return Reflect.construct(HTMLElement,[],this.__proto__.constructor)}ee(document,"pubsub/onsubscribe",function(e){var n=e.detail;ne[n]||(ne[n]={count:0});var t=ne[n],a=t.queue;Array.isArray(a)&&(a.forEach(function(e){var n=s(e,3),t=n[0],a=n[1],i=n[2];Q(i,t,a)}),delete t.queue)}),Object.setPrototypeOf(ae.prototype,HTMLElement.prototype),Object.setPrototypeOf(ae,HTMLElement);var ie,oe,re,se={},le="throwed",de=function(e){function n(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",a=arguments[1];t(this,n);var i=r(this,(n.__proto__||Object.getPrototypeOf(n)).call(this));return i._makeContextReady=i._makeContextReady.bind(i),i._initialise(e,a),i}return o(n,ae),a(n,[{key:"_initialise",value:function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;this.initialClassName=this.className,this._styles=e,this._template=n}},{key:"connectedCallback",value:function(){this._appendStyles(),this.render(),this.contextCallback&&this._makeContextReady()}},{key:"disconnectedCallback",value:function(){this.unContextEnabled&&this.unContextEnabled()}},{key:"_appendStyles",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this;if(this._styles){var n=document.createElement("style"),t=document.createTextNode(this._styles);n.appendChild(t),e.insertAdjacentElement?e.insertAdjacentElement("afterbegin",n):e.appendChild(n)}}},{key:"render",value:function(){var e=this;if(!this._hasRendered){var n=this._template;if(n)try{for(var t=document.createDocumentFragment();this.firstChild;)t.appendChild(this.firstChild);var a=n(function(e){if(!e.hasAttributes)return null;for(var n={},t=e.attributes,a=t.length,i=0;i<a;++i){var o=t[i];n[o.name]=Z(o)}return n}(this),t);if(Array.isArray(a))a.forEach(function(n){e.appendChild(n)});else if(a){if("string"==typeof a){var i=new Error(le);throw console.error("\n%cWeb Component %c"+this.nodeName+"%c does not accept string as a return from a template. Maybe use bel?\n\nStack Trace: "+i.stack+"\n","color: #580000; font-size: 14px; line-height:16px;","background: #8b0000; color: #FFF; font-size: 14px; line-height:16px;","color: #580000; font-size: 14px; line-height:16px;"),i}this.appendChild(a)}this._hasRendered=!0}catch(i){i.message!==le&&console.error("\n%cWeb Component %c"+this.nodeName+"%c has an error while loading its template:\n"+i+"\n\nStack Trace: "+i.stack+"\n","color: #580000; font-size: 14px; line-height:16px;","background: #8b0000; color: #FFF; font-size: 14px; line-height:16px;","color: #580000; font-size: 14px; line-height:16px;")}}}},{key:"enableContext",value:function(){var e=this.nodeName.toLowerCase();this.__isContext=!0,this.__contextName=e,function(e,n){var t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:document;ne[e]||(ne[e]={count:0,queue:[]});var a=ne[e].queue;Array.isArray(a)?a.push([e,n,t]):Q(t,e,n)}("context/enabled",e)}},{key:"selectContext",value:function(e){this.__selectedContext=e&&e.toLowerCase()}},{key:"_makeContextReady",value:function(){var e=this,n=(arguments.length>0&&void 0!==arguments[0]?arguments[0]:{}).detail;this.contextNode&&(clearTimeout(this.timeoutId),this.timeoutId=setTimeout(function(){e.contextCallback(e.contextNode,n)},10)),this.unContextEnabled&&this.unContextEnabled(),this.unContextEnabled=te("context/enabled",this._makeContextReady)}},{key:"contextNode",get:function(){for(var e=this.__selectedContext,n=this.parentNode;n&&(!n.__isContext||e&&e!==n.__contextName);)n=n.parentNode;return!(!n||!n.__isContext)&&n}}],[{key:"uuidv4",value:function(){return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,function(e){var n=16*Math.random()|0;return("x"==e?n:3&n|8).toString(16)})}}]),n}(),ue=(function(e){function n(){return t(this,n),r(this,(n.__proto__||Object.getPrototypeOf(n)).apply(this,arguments))}o(n,de),a(n,[{key:"connectedCallback",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"open",n=this.attachShadow({mode:e});this._appendStyles(n),this.render()}}])}(),function(e){function n(){return t(this,n),r(this,(n.__proto__||Object.getPrototypeOf(n)).apply(this,arguments))}return o(n,de),a(n,[{key:"_appendStyles",value:function(){n.appendGlobalStyles(this._styles,this.nodeName)}}],[{key:"appendGlobalStyles",value:function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:de.uuidv4();if(e&&!se[e]){var t=document.createElement("style"),a=document.createTextNode(e);t.appendChild(a),t.setAttribute("data-c-name",n.toLowerCase()),document.querySelector("head").appendChild(t),se[e]=!0}}}]),n}()),ce=function(e){function n(){return t(this,n),r(this,(n.__proto__||Object.getPrototypeOf(n)).call(this,c,H))}return o(n,ue),a(n,[{key:"render",value:function(){(function e(n,t,a){null===n&&(n=Function.prototype);var i=Object.getOwnPropertyDescriptor(n,t);if(void 0===i){var o=Object.getPrototypeOf(n);return null===o?void 0:e(o,t,a)}if("value"in i)return i.value;var r=i.get;return void 0!==r?r.call(a):void 0})(n.prototype.__proto__||Object.getPrototypeOf(n.prototype),"render",this).call(this);var e=this.hasAttribute("flyout"),t=u(this.initialClassName,"m-header-sub-navigation",{"m-header-sub-navigation--flyout":e});this.className=t}}]),n}();return ie=function(){window.customElements.define("axa-header-sub-navigation",ce)},oe=0,re=function(){if(0===oe)try{ie.apply(void 0,arguments),oe+=1,document.removeEventListener("DOMContentLoaded"),document.removeEventListener("WebComponentsReady")}catch(e){}},document.addEventListener("DOMContentLoaded",re,!1),document.addEventListener("WebComponentsReady",re,!1),ce});
