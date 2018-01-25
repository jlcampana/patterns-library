var StyleGuideWebComponent=function(){"use strict";function e(e,n){return e(n={exports:{}},n.exports),n.exports}var n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},t=(function(){function e(e){this.value=e}function n(n){var t,i;function o(t,i){try{var r=n[t](i),s=r.value;s instanceof e?Promise.resolve(s.value).then(function(e){o("next",e)},function(e){o("throw",e)}):a(r.done?"return":"normal",r.value)}catch(e){a("throw",e)}}function a(e,n){switch(e){case"return":t.resolve({value:n,done:!0});break;case"throw":t.reject(n);break;default:t.resolve({value:n,done:!1})}(t=t.next)?o(t.key,t.arg):i=null}this._invoke=function(e,n){return new Promise(function(a,r){var s={key:e,arg:n,resolve:a,reject:r,next:null};i?i=i.next=s:(t=i=s,o(e,n))})},"function"!=typeof n.return&&(this.return=void 0)}"function"==typeof Symbol&&Symbol.asyncIterator&&(n.prototype[Symbol.asyncIterator]=function(){return this}),n.prototype.next=function(e){return this._invoke("next",e)},n.prototype.throw=function(e){return this._invoke("throw",e)},n.prototype.return=function(e){return this._invoke("return",e)}}(),function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}),i=function(){function e(e,n){for(var t=0;t<n.length;t++){var i=n[t];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(n,t,i){return t&&e(n.prototype,t),i&&e(n,i),n}}(),o=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i])}return e},a=function e(n,t,i){null===n&&(n=Function.prototype);var o=Object.getOwnPropertyDescriptor(n,t);if(void 0===o){var a=Object.getPrototypeOf(n);return null===a?void 0:e(a,t,i)}if("value"in o)return o.value;var r=o.get;return void 0!==r?r.call(i):void 0},r=function(e,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function, not "+typeof n);e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),n&&(Object.setPrototypeOf?Object.setPrototypeOf(e,n):e.__proto__=n)},s=function(e,n){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!n||"object"!=typeof n&&"function"!=typeof n?e:n},l=function(){return function(e,n){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return function(e,n){var t=[],i=!0,o=!1,a=void 0;try{for(var r,s=e[Symbol.iterator]();!(i=(r=s.next()).done)&&(t.push(r.value),!n||t.length!==n);i=!0);}catch(e){o=!0,a=e}finally{try{!i&&s.return&&s.return()}finally{if(o)throw a}}return t}(e,n);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),c=function(e,n){return Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(n)}}))},u=function(e){if(Array.isArray(e)){for(var n=0,t=Array(e.length);n<e.length;n++)t[n]=e[n];return t}return Array.from(e)},h=e(function(e){!function(){var t={}.hasOwnProperty;function i(){for(var e=[],o=0;o<arguments.length;o++){var a=arguments[o];if(a){var r=void 0===a?"undefined":n(a);if("string"===r||"number"===r)e.push(a);else if(Array.isArray(a))e.push(i.apply(null,a));else if("object"===r)for(var s in a)t.call(a,s)&&a[s]&&e.push(s)}}return e.join(" ")}e.exports?e.exports=i:window.classNames=i}()}),d=".m-header-mobile-navigation {\n  display: block; }\n  .m-header-mobile-navigation:first-child {\n    margin-top: -20px; }\n\n.m-header-mobile-navigation--relative {\n  position: relative; }\n\n.m-header-mobile-navigation__nav {\n  display: block;\n  background: #fff; }\n  .m-header-mobile-navigation__nav .m-header-mobile-navigation__nav {\n    -webkit-transform: translate3d(0, 0, 0);\n            transform: translate3d(0, 0, 0);\n    -webkit-backface-visibility: hidden;\n            backface-visibility: hidden;\n    position: absolute;\n    left: 0;\n    right: 0;\n    top: 0;\n    z-index: 1050;\n    min-height: 100%;\n    -webkit-transform: translateX(110%);\n            transform: translateX(110%);\n    -webkit-transition: -webkit-transform 0.2s ease;\n    transition: -webkit-transform 0.2s ease;\n    transition: transform 0.2s ease;\n    transition: transform 0.2s ease, -webkit-transform 0.2s ease; }\n    @media (min-width: 576px) {\n      .m-header-mobile-navigation__nav .m-header-mobile-navigation__nav {\n        left: 10px;\n        -webkit-box-shadow: -5px 0 10px -5px rgba(0, 0, 0, 0.3);\n                box-shadow: -5px 0 10px -5px rgba(0, 0, 0, 0.3); } }\n  .is-header-mobile-navigation-nav-open > .m-header-mobile-navigation__nav {\n    -webkit-transform: translateX(0);\n            transform: translateX(0); }\n\n.m-header-mobile-navigation__list {\n  padding: 0;\n  margin: 0;\n  list-style-type: none; }\n\n.m-header-mobile-navigation__list-item {\n  display: block;\n  border-bottom: 1px solid #ccc; }\n  .m-header-mobile-navigation__list-item:first-child {\n    border-top: 1px solid #ccc; }\n\n.m-header-mobile-navigation__category,\n.m-header-mobile-navigation__back,\n.m-header-mobile-navigation__list-link {\n  padding-right: 15px;\n  padding-left: 15px;\n  width: 100%;\n  margin-right: auto;\n  margin-left: auto;\n  /* Adds a hyphen where the word breaks, if supported (No Blink) */\n  -webkit-hyphens: auto;\n      -ms-hyphens: auto;\n          hyphens: auto;\n  /* These are technically the same, but use both */\n  overflow-wrap: break-word;\n  word-wrap: break-word;\n  color: #00008f;\n  position: relative;\n  display: block;\n  padding-left: 60px;\n  padding-right: 40px;\n  text-transform: uppercase; }\n  .m-header-mobile-navigation__category.is-header-mobile-navigation-active, .m-header-mobile-navigation__category:hover, .m-header-mobile-navigation__category:active, .m-header-mobile-navigation__category:focus,\n  .m-header-mobile-navigation__back.is-header-mobile-navigation-active,\n  .m-header-mobile-navigation__back:hover,\n  .m-header-mobile-navigation__back:active,\n  .m-header-mobile-navigation__back:focus,\n  .m-header-mobile-navigation__list-link.is-header-mobile-navigation-active,\n  .m-header-mobile-navigation__list-link:hover,\n  .m-header-mobile-navigation__list-link:active,\n  .m-header-mobile-navigation__list-link:focus {\n    color: #00005b; }\n\n.m-header-mobile-navigation__category,\n.m-header-mobile-navigation__back {\n  background: transparent;\n  border: none;\n  background: transparent;\n  text-align: left; }\n  .m-header-mobile-navigation__category:hover, .m-header-mobile-navigation__category:active, .m-header-mobile-navigation__category:focus,\n  .m-header-mobile-navigation__back:hover,\n  .m-header-mobile-navigation__back:active,\n  .m-header-mobile-navigation__back:focus {\n    outline: none;\n    cursor: pointer; }\n\n.m-header-mobile-navigation__category,\n.m-header-mobile-navigation__list-link {\n  font-size: 14px;\n  font-weight: 600;\n  line-height: 1.5;\n  letter-spacing: 0.02em;\n  padding-top: 20px;\n  padding-bottom: 20px; }\n  @media (min-width: 576px) {\n    .m-header-mobile-navigation__category,\n    .m-header-mobile-navigation__list-link {\n      font-size: 16px;\n      font-weight: 600;\n      line-height: 1.5;\n      letter-spacing: 0.02em; } }\n  @media (min-width: 768px) {\n    .m-header-mobile-navigation__category,\n    .m-header-mobile-navigation__list-link {\n      font-size: 16px;\n      font-weight: 600;\n      line-height: 1.5;\n      letter-spacing: 0.02em; } }\n  @media (min-width: 992px) {\n    .m-header-mobile-navigation__category,\n    .m-header-mobile-navigation__list-link {\n      font-size: 16px;\n      font-weight: 600;\n      line-height: 1.5;\n      letter-spacing: 0.02em; } }\n\n.m-header-mobile-navigation__category {\n  padding-right: 70px; }\n\n.m-header-mobile-navigation__back {\n  font-size: 20px;\n  font-weight: 700;\n  line-height: 1.5;\n  letter-spacing: 0;\n  padding-top: 30px;\n  padding-bottom: 30px;\n  padding-left: 105px; }\n  @media (min-width: 576px) {\n    .m-header-mobile-navigation__back {\n      font-size: 24px;\n      font-weight: 700;\n      line-height: 1.2;\n      letter-spacing: 0; } }\n  @media (min-width: 768px) {\n    .m-header-mobile-navigation__back {\n      font-size: 24px;\n      font-weight: 700;\n      line-height: 1.2;\n      letter-spacing: 0; } }\n  @media (min-width: 992px) {\n    .m-header-mobile-navigation__back {\n      font-size: 24px;\n      font-weight: 700;\n      line-height: 1.2;\n      letter-spacing: 0; } }\n\n.m-header-mobile-navigation__icon-next,\n.m-header-mobile-navigation__icon-back {\n  position: absolute;\n  top: 50%;\n  height: 15px;\n  width: 15px;\n  margin-top: -7.5px;\n  pointer-events: none;\n  fill: currentColor; }\n\n.m-header-mobile-navigation__icon-next {\n  right: 40px;\n  -webkit-transform: rotate(-90deg);\n          transform: rotate(-90deg); }\n\n.m-header-mobile-navigation__icon-back {\n  left: 60px;\n  -webkit-transform: rotate(90deg);\n          transform: rotate(90deg); }\n",f=function(e){return function(n,t,i){for(var o in t)o in p&&(t[p[o]]=t[o],delete t[o]);return e(n,t,i)}},p={class:"className",for:"htmlFor","http-equiv":"httpEquiv"};var m=1,v=2,b=3,g=4,y=5,_=6,x=7,k=8,w=9,C=10,O=11,N=12,E=13;var S=RegExp("^("+["area","base","basefont","bgsound","br","col","command","embed","frame","hr","img","input","isindex","keygen","link","meta","param","source","track","wbr","!--","animate","animateTransform","circle","cursor","desc","ellipse","feBlend","feColorMatrix","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feDistantLight","feFlood","feFuncA","feFuncB","feFuncG","feFuncR","feGaussianBlur","feImage","feMergeNode","feMorphology","feOffset","fePointLight","feSpecularLighting","feSpotLight","feTile","feTurbulence","font-face-format","font-face-name","font-face-uri","glyph","glyphRef","hkern","image","line","missing-glyph","mpath","path","polygon","polyline","rect","set","stop","tref","use","view","vkern"].join("|")+")(?:[.#][a-zA-Z0-9-￿_:-]+)*$");var j=/\n[\s]+$/,A=/^\n[\s]+/,T=/[\s]+$/,L=/^[\s]+/,P=/[\n\s]+/g,F=["a","abbr","b","bdi","bdo","br","cite","data","dfn","em","i","kbd","mark","q","rp","rt","rtc","ruby","s","amp","small","span","strong","sub","sup","time","u","var","wbr"],M=["code","pre"],z=function e(n,t){if(Array.isArray(t))for(var i,o,a=n.nodeName.toLowerCase(),r=!1,s=0,l=t.length;s<l;s++){var c=t[s];if(Array.isArray(c))e(n,c);else{("number"==typeof c||"boolean"==typeof c||"function"==typeof c||c instanceof Date||c instanceof RegExp)&&(c=c.toString());var u=n.childNodes[n.childNodes.length-1];if("string"==typeof c)r=!0,u&&"#text"===u.nodeName?u.nodeValue+=c:(c=document.createTextNode(c),n.appendChild(c),u=c),s===l-1&&(r=!1,-1===F.indexOf(a)&&-1===M.indexOf(a)?""===(i=u.nodeValue.replace(A,"").replace(T,"").replace(j,"").replace(P," "))?n.removeChild(u):u.nodeValue=i:-1===M.indexOf(a)&&(o=0===s?"":" ",i=u.nodeValue.replace(A,o).replace(L," ").replace(T,"").replace(j,"").replace(P," "),u.nodeValue=i));else if(c&&c.nodeType){r&&(r=!1,-1===F.indexOf(a)&&-1===M.indexOf(a)?""===(i=u.nodeValue.replace(A,"").replace(j,"").replace(P," "))?n.removeChild(u):u.nodeValue=i:-1===M.indexOf(a)&&(i=u.nodeValue.replace(L," ").replace(A,"").replace(j,"").replace(P," "),u.nodeValue=i));var h=c.nodeName;h&&(a=h.toLowerCase()),n.appendChild(c)}}}},D=e(function(e){var t="http://www.w3.org/2000/svg",i="http://www.w3.org/1999/xlink",o=["autofocus","checked","defaultchecked","disabled","formnovalidate","indeterminate","readonly","required","selected","willvalidate"],a="!--",r=["svg","altGlyph","altGlyphDef","altGlyphItem","animate","animateColor","animateMotion","animateTransform","circle","clipPath","color-profile","cursor","defs","desc","ellipse","feBlend","feColorMatrix","feComponentTransfer","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feDistantLight","feFlood","feFuncA","feFuncB","feFuncG","feFuncR","feGaussianBlur","feImage","feMerge","feMergeNode","feMorphology","feOffset","fePointLight","feSpecularLighting","feSpotLight","feTile","feTurbulence","filter","font","font-face","font-face-format","font-face-name","font-face-src","font-face-uri","foreignObject","g","glyph","glyphRef","hkern","image","line","linearGradient","marker","mask","metadata","missing-glyph","mpath","path","pattern","polygon","polyline","radialGradient","rect","set","stop","switch","symbol","text","textPath","title","tref","tspan","use","view","vkern"];function s(e,n,s){var l;-1!==r.indexOf(e)&&(n.namespace=t);var c=!1;if(n.namespace&&(c=n.namespace,delete n.namespace),c)l=document.createElementNS(c,e);else{if(e===a)return document.createComment(n.comment);l=document.createElement(e)}for(var u in n)if(n.hasOwnProperty(u)){var h=u.toLowerCase(),d=n[u];if("classname"===h&&(h="class",u="class"),"htmlFor"===u&&(u="for"),-1!==o.indexOf(h))if("true"===d)d=h;else if("false"===d)continue;"on"===h.slice(0,2)?l[u]=d:c?"xlink:href"===u?l.setAttributeNS(i,u,d):/^xmlns($|:)/i.test(u)||l.setAttributeNS(null,u,d):l.setAttribute(u,d)}return z(l,s),l}e.exports=function(e,t){t||(t={});var i=t.concat||function(e,n){return String(e)+String(n)};return!1!==t.attrToProp&&(e=f(e)),function(a){for(var r=m,s="",l=arguments.length,c=[],u=0;u<a.length;u++)if(u<l-1){var h=arguments[u+1],d=R(a[u]),f=r;f===C&&(f=k),f===w&&(f=k),f===x&&(f=k),f===g&&(f=y),d.push([0,f,h]),c.push.apply(c,d)}else c.push.apply(c,R(a[u]));var p,j=[null,{},[]],A=[[j,-1]];for(u=0;u<c.length;u++){var T=A[A.length-1][0],L=(d=c[u])[0];if(L===v&&/^\//.test(d[1])){var P=A[A.length-1][1];A.length>1&&(A.pop(),A[A.length-1][0][2][P]=e(T[0],T[1],T[2].length?T[2]:void 0))}else if(L===v){var F=[d[1],{},[]];T[2].push(F),A.push([F,T[2].length-1])}else if(L===y||0===L&&d[1]===y){for(var M,z="";u<c.length;u++)if(c[u][0]===y)z=i(z,c[u][1]);else{if(0!==c[u][0]||c[u][1]!==y)break;if("object"!==n(c[u][2])||z)z=i(z,c[u][2]);else for(M in c[u][2])c[u][2].hasOwnProperty(M)&&!T[1][M]&&(T[1][M]=c[u][2][M])}c[u][0]===O&&u++;for(var D=u;u<c.length;u++)if(c[u][0]===k||c[u][0]===y)T[1][z]?""===c[u][1]||(T[1][z]=i(T[1][z],c[u][1])):T[1][z]=o(c[u][1]);else{if(0!==c[u][0]||c[u][1]!==k&&c[u][1]!==y){!z.length||T[1][z]||u!==D||c[u][0]!==b&&c[u][0]!==N||(T[1][z]=z.toLowerCase()),c[u][0]===b&&u--;break}T[1][z]?""===c[u][2]||(T[1][z]=i(T[1][z],c[u][2])):T[1][z]=o(c[u][2])}}else if(L===y)T[1][d[1]]=!0;else if(0===L&&d[1]===y)T[1][d[2]]=!0;else if(L===b)p=T[0],S.test(p)&&A.length&&(P=A[A.length-1][1],A.pop(),A[A.length-1][0][2][P]=e(T[0],T[1],T[2].length?T[2]:void 0));else if(0===L&&d[1]===m)void 0===d[2]||null===d[2]?d[2]="":d[2]||(d[2]=i("",d[2])),Array.isArray(d[2][0])?T[2].push.apply(T[2],d[2]):T[2].push(d[2]);else if(L===m)T[2].push(d[1]);else if(L!==O&&L!==N)throw new Error("unhandled: "+L)}if(j[2].length>1&&/^\s*$/.test(j[2][0])&&j[2].shift(),j[2].length>2||2===j[2].length&&/\S/.test(j[2][1]))throw new Error("multiple root elements must be wrapped in an enclosing tag");return Array.isArray(j[2][0])&&"string"==typeof j[2][0][0]&&Array.isArray(j[2][0][2])&&(j[2][0]=e(j[2][0][0],j[2][0][1],j[2][0][2])),j[2][0];function R(e){var n,i=[];r===x&&(r=g);for(var o=0;o<e.length;o++){var a=e.charAt(o);r===m&&"<"===a?(s.length&&i.push([m,s]),s="",r=v):">"===a&&(n=r)!==w&&n!==C&&r!==E?(r===v?i.push([v,s]):r===y?i.push([y,s]):r===k&&s.length&&i.push([k,s]),i.push([b]),s="",r=m):r===E&&/-$/.test(s)&&"-"===a?(t.comments&&i.push([k,s.substr(0,s.length-1)],[b]),s="",r=m):r===v&&/^!--$/.test(s)?(t.comments&&i.push([v,s],[y,"comment"],[O]),s=a,r=E):r===m||r===E?s+=a:r===v&&/\s/.test(a)?(i.push([v,s]),s="",r=g):r===v?s+=a:r===g&&/[^\s"'=/]/.test(a)?(r=y,s=a):r===g&&/\s/.test(a)?(s.length&&i.push([y,s]),i.push([N])):r===y&&/\s/.test(a)?(i.push([y,s]),s="",r=_):r===y&&"="===a?(i.push([y,s],[O]),s="",r=x):r===y?s+=a:r!==_&&r!==g||"="!==a?r!==_&&r!==g||/\s/.test(a)?r===x&&'"'===a?r=C:r===x&&"'"===a?r=w:r===C&&'"'===a?(i.push([k,s],[N]),s="",r=g):r===w&&"'"===a?(i.push([k,s],[N]),s="",r=g):r!==x||/\s/.test(a)?r===k&&/\s/.test(a)?(i.push([k,s],[N]),s="",r=g):r!==k&&r!==w&&r!==C||(s+=a):(r=k,o--):(i.push([N]),/[\w-]/.test(a)?(s+=a,r=y):r=g):(i.push([O]),r=x)}return r===m&&s.length?(i.push([m,s]),s=""):r===k&&s.length?(i.push([k,s]),s=""):r===C&&s.length?(i.push([k,s]),s=""):r===w&&s.length?(i.push([k,s]),s=""):r===y&&(i.push([y,s]),s=""),i}};function o(e){return"function"==typeof e?e:"string"==typeof e?e:e&&"object"===(void 0===e?"undefined":n(e))?e:i("",e)}}(s,{comments:!0}),e.exports.default=e.exports,e.exports.createElement=s}),R=c(['\n    <li class="m-header-mobile-navigation__list-item">\n      ',"\n    </li>\n  "],['\n    <li class="m-header-mobile-navigation__list-item">\n      ',"\n    </li>\n  "]),B=c(['<button type="button" class="m-header-mobile-navigation__category js-header-mobile-navigation__category ','">\n          ','\n          <axa-icon id="angle-bracket-right" classes="m-header-mobile-navigation__icon-next"></axa-icon>\n        </button>\n        '],['<button type="button" class="m-header-mobile-navigation__category js-header-mobile-navigation__category ','">\n          ','\n          <axa-icon id="angle-bracket-right" classes="m-header-mobile-navigation__icon-next"></axa-icon>\n        </button>\n        ']),G=c(['\n        <a class="m-header-mobile-navigation__list-link js-header-mobile-navigation__list-link ','"\n           href="','">',"</a>\n      "],['\n        <a class="m-header-mobile-navigation__list-link js-header-mobile-navigation__list-link ','"\n           href="','">',"</a>\n      "]),$=c(['\n    <div class="m-header-mobile-navigation__nav ','">\n      ','\n      <ul class="m-header-mobile-navigation__list">\n        ',"\n        ","\n      </ul>\n    </div>\n  "],['\n    <div class="m-header-mobile-navigation__nav ','">\n      ','\n      <ul class="m-header-mobile-navigation__list">\n        ',"\n        ","\n      </ul>\n    </div>\n  "]),q=c(['\n        <button type="button" class="m-header-mobile-navigation__back js-header-mobile-navigation__back">\n          <axa-icon id="angle-bracket-right" classes="m-header-mobile-navigation__icon-back"></axa-icon>\n          ',"\n        </button>\n      "],['\n        <button type="button" class="m-header-mobile-navigation__back js-header-mobile-navigation__back">\n          <axa-icon id="angle-bracket-right" classes="m-header-mobile-navigation__icon-back"></axa-icon>\n          ',"\n        </button>\n      "]);function V(e){var n=e.name,t=e.url,i=e.isActive,o=e.items,a=i?"is-header-mobile-navigation-active":"";return D(R,!!o?[D(B,a,n),I(o,e)]:D(G,a,t,n))}function I(e,n){return D($,!n&&"js-header-mobile-navigation__nav",n&&D(q,n.name),n&&V(o({},n,{name:"index page",items:null})),e.map(V))}var W=function(e){return I(e.items)},X=/^\s*(?:true|false|null|undefined|-?[0-9]+\.?[0-9]*|[[{](?:.|[\r\n])*[\]}])\s*$/;function H(e,n){if("function"==typeof e.hasAttribute&&!e.hasAttribute(n))return!1;var t=e.value;if(n?t=e.getAttribute(n):n=e.name,t&&n!==t){if(X.test(t))try{t=JSON.parse(t)}catch(n){console.error("Attribute "+e+" has an error:\n"+n+"\n",t)}}else t=!0;return t}var U=function(){try{var e=new window.CustomEvent("test");if(e.preventDefault(),!0!==e.defaultPrevented)throw new Error("Could not prevent default");return window.CustomEvent}catch(e){}return n;function n(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},t=n.bubbles,i=void 0!==t&&t,o=n.cancelable,a=void 0!==o&&o,r=n.detail,s=void 0===r?void 0:r,l=document.createEvent("CustomEvent");l.initCustomEvent(e,i,a,s);var c=l.preventDefault;return l.preventDefault=function(){c.call(l);try{Object.defineProperty(this,"defaultPrevented",{get:function(){return!0}})}catch(e){this.defaultPrevented=!0}},l}}();function J(e,n,t){var i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},a=new U(n,o({},i,{detail:t}));e.dispatchEvent(a)}var Z=/^\s+|\s{2,}|\s+$/g;function K(e,n){return new RegExp("^"+e+"$|^"+e+"\\s|\\s"+e+"\\s|\\s"+e+"$",n)}function Q(e,n){return K(n).test(e.className)}function Y(e,n){if(Q(e,n)){var t=K(n,"g");e.className=e.className.replace(t," ").replace(Z," ")}}var ee=/\s+/,ne={transitionend:function(){for(var e=document.createElement("div").style,n={transition:"transitionend",OTransition:"oTransitionEnd otransitionend",MozTransition:"transitionend",WebkitTransition:"webkitTransitionEnd"},t=Object.keys(n),i=t.length,o=void 0,a=0;a<i;++a)if(void 0!==e[o=t[a]])return n[o];return null}()};function te(e,t,i,o){var a=arguments.length>4&&void 0!==arguments[4]&&arguments[4];if(ne[t]&&(t=ne[t]),!e||!t)return null;var r=void 0===i?"undefined":n(i);"function"===r&&(a=!!o,o=i);for(var s=i&&"string"===r?function(n){var t=n.target;for(;!Q(t,i)&&t!==e;)t=t.parentNode;if(t!==e)return o(n,t)}:o,l=t.split(ee),c=l.length,u=0;u<c;++u)e.addEventListener(l[u],s,a);return function n(){for(var t=0;t<c;++t)e.removeEventListener(l[t],s,a);!function(e,n){if(!e)return!1;for(var t=Object.keys(e),i=t.length,o=0;o<i;++o){var a=t[o];if(e[a]===n)return delete e[a]}}(this,n)}}var ie={};function oe(e,n){var t=te(arguments.length>2&&void 0!==arguments[2]?arguments[2]:document,e,n);ie[e]||(ie[e]={count:0});var i,o=ie[e];return o.count++,o.onsubscribe||(o.onsubscribe=function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},i=t.leading,o=void 0!==i&&i,a=t.trailing,r=void 0===a||a,s=t.maxWait,l=void 0!==s&&s,c=void 0,h=void 0,d=void 0,f=void 0,p=!1,m=n!==l,v=!1!==l;function b(){for(var t=arguments.length,i=Array(t),a=0;a<t;a++)i[a]=arguments[a];return c=i,m&&(h&&clearTimeout(h),h=setTimeout(g,n)),v&&!d&&(d=setTimeout(y,l)),o&&!p&&(p=!0,f=e.apply(void 0,u(c))),f}return b.flush=function(){return(h||d)&&(f=e.apply(void 0,u(c))),x(),f},b.cancel=x,b;function g(){d&&clearTimeout(d),_()}function y(){h&&clearTimeout(h),_()}function _(){r&&(f=e.apply(void 0,u(c))),h=null,d=null,p=!1}function x(){h&&(clearTimeout(h),h=null),d&&(clearTimeout(d),d=null),c=void 0,p=!1}}((i=e,function(){J(document,"pubsub/onsubscribe",i),J(document,"pubsub/onsubscribe/"+i,i),ie[i]&&delete ie[i].unsubscribe}),100)),o.onsubscribe(),function(){o.count--,t.call(this),o.count<=0&&delete ie[e]}}function ae(){return Reflect.construct(HTMLElement,[],this.__proto__.constructor)}te(document,"pubsub/onsubscribe",function(e){var n=e.detail;ie[n]||(ie[n]={count:0});var t=ie[n],i=t.queue;Array.isArray(i)&&(i.forEach(function(e){var n=l(e,3),t=n[0],i=n[1],o=n[2];J(o,t,i)}),delete t.queue)}),Object.setPrototypeOf(ae.prototype,HTMLElement.prototype),Object.setPrototypeOf(ae,HTMLElement);var re={},se="throwed",le=function(e){function n(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",i=arguments[1];t(this,n);var o=s(this,(n.__proto__||Object.getPrototypeOf(n)).call(this));return o._makeContextReady=o._makeContextReady.bind(o),o._initialise(e,i),o}return r(n,ae),i(n,[{key:"_initialise",value:function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;this.initialClassName=this.className,this._styles=e,this._template=n}},{key:"connectedCallback",value:function(){this._appendStyles(),this.render(),this.contextCallback&&this._makeContextReady()}},{key:"disconnectedCallback",value:function(){this.unContextEnabled&&this.unContextEnabled()}},{key:"_appendStyles",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this;if(this._styles){var n=document.createElement("style"),t=document.createTextNode(this._styles);n.appendChild(t),e.insertAdjacentElement?e.insertAdjacentElement("afterbegin",n):e.appendChild(n)}}},{key:"render",value:function(){var e=this;if(!this._hasRendered){var n=this._template;if(n)try{for(var t=document.createDocumentFragment();this.firstChild;)t.appendChild(this.firstChild);var i=n(function(e){if(!e.hasAttributes)return null;for(var n={},t=e.attributes,i=t.length,o=0;o<i;++o){var a=t[o];n[a.name]=H(a)}return n}(this),t);if(Array.isArray(i))i.forEach(function(n){e.appendChild(n)});else if(i){if("string"==typeof i){var o=new Error(se);throw console.error("\n%cWeb Component %c"+this.nodeName+"%c does not accept string as a return from a template. Maybe use bel?\n\nStack Trace: "+o.stack+"\n","color: #580000; font-size: 14px; line-height:16px;","background: #8b0000; color: #FFF; font-size: 14px; line-height:16px;","color: #580000; font-size: 14px; line-height:16px;"),o}this.appendChild(i)}this._hasRendered=!0}catch(o){o.message!==se&&console.error("\n%cWeb Component %c"+this.nodeName+"%c has an error while loading its template:\n"+o+"\n\nStack Trace: "+o.stack+"\n","color: #580000; font-size: 14px; line-height:16px;","background: #8b0000; color: #FFF; font-size: 14px; line-height:16px;","color: #580000; font-size: 14px; line-height:16px;")}}}},{key:"enableContext",value:function(){var e=this.nodeName.toLowerCase();this.__isContext=!0,this.__contextName=e,function(e,n){var t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:document;ie[e]||(ie[e]={count:0,queue:[]});var i=ie[e].queue;Array.isArray(i)?i.push([e,n,t]):J(t,e,n)}("context/enabled",e)}},{key:"selectContext",value:function(e){this.__selectedContext=e.toLowerCase()}},{key:"_makeContextReady",value:function(){var e=this,n=(arguments.length>0&&void 0!==arguments[0]?arguments[0]:{}).detail;this.contextNode&&(clearTimeout(this.timeoutId),this.timeoutId=setTimeout(function(){e.contextCallback(e.contextNode,n)},10)),this.unContextEnabled&&this.unContextEnabled(),this.unContextEnabled=oe("context/enabled",this._makeContextReady)}},{key:"contextNode",get:function(){for(var e=this.__selectedContext,n=this.parentNode;n&&(!n.__isContext||e&&e!==n.__contextName);)n=n.parentNode;return!(!n||!n.__isContext)&&n}}],[{key:"uuidv4",value:function(){return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,function(e){var n=16*Math.random()|0;return("x"==e?n:3&n|8).toString(16)})}}]),n}(),ce=(function(e){function n(){return t(this,n),s(this,(n.__proto__||Object.getPrototypeOf(n)).apply(this,arguments))}r(n,le),i(n,[{key:"connectedCallback",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"open",n=this.attachShadow({mode:e});this._appendStyles(n),this.render()}}])}(),function(e){function n(){return t(this,n),s(this,(n.__proto__||Object.getPrototypeOf(n)).apply(this,arguments))}return r(n,le),i(n,[{key:"_appendStyles",value:function(){n.appendGlobalStyles(this._styles,this.nodeName)}}],[{key:"appendGlobalStyles",value:function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:le.uuidv4();if(e&&!re[e]){var t=document.createElement("style"),i=document.createTextNode(e);t.appendChild(i),t.setAttribute("data-c-name",n.toLowerCase()),document.querySelector("head").appendChild(t),re[e]=!0}}}]),n}()),ue=function(){function e(n,i){t(this,e),this.rootNode=n,this.options=o({},e.DEFAULTS,i),this.isOpen=!1,this.opened=[],this.handleCategoryClick=this.handleCategoryClick.bind(this),this.handleBackClick=this.handleBackClick.bind(this),this.open=this.open.bind(this),this.close=this.close.bind(this),this.fadeFinish=this.fadeFinish.bind(this),this.init()}return i(e,[{key:"init",value:function(){this.nav=this.rootNode.querySelector(this.options.nav),this.on()}},{key:"on",value:function(){this.off(),this.unCategoryClick=te(this.nav,"click",this.options.category,this.handleCategoryClick),this.unBackClick=te(this.nav,"click",this.options.back,this.handleBackClick)}},{key:"off",value:function(){this.unCategoryClick&&this.unCategoryClick(),this.unBackClick&&this.unBackClick(),this.offContextEnabled()}},{key:"onContextEnabled",value:function(){this._contextNode&&(this.offContextEnabled(),this.unSubscribeOpen=oe("header-mobile/open",this.open,this._contextNode),this.unSubscribeClose=oe("header-mobile/close",this.close,this._contextNode),this.unSubscribeFadeFinish=oe("header-mobile/fade-finish",this.fadeFinish,this._contextNode))}},{key:"offContextEnabled",value:function(){this.unSubscribeOpen&&this.unSubscribeOpen(),this.unSubscribeClose&&this.unSubscribeClose()}},{key:"open",value:function(){this.isOpen=!0}},{key:"close",value:function(){this.isOpen=!1}},{key:"fadeFinish",value:function(){if(!this.isOpen)for(var e=this.opened.pop();e;){Y(e.parentNode,this.options.isSubMenuOpenClass),e=this.opened.pop()}}},{key:"handleCategoryClick",value:function(e,n){e.preventDefault();var t,i,o=n.parentNode;if(o.lastChild!==n){var a=this.rootNode.parentNode.parentNode,r=a.scrollTop;t=o,i=this.options.isSubMenuOpenClass,Q(t,i)||(t.className+=" "+i),a.scrollTop=0,this.opened.push({parentNode:o,scrollTop:r})}}},{key:"handleBackClick",value:function(e){e.preventDefault();var n=this.opened.pop(),t=n.parentNode,i=n.scrollTop,o=this.rootNode.parentNode.parentNode;Y(t,this.options.isSubMenuOpenClass),o.scrollTop=i}},{key:"destroy",value:function(){this.off(),delete this.rootNode,delete this.nav,delete this._contextNode,delete this.opened}},{key:"contextNode",set:function(e){this._contextNode=e,this.onContextEnabled()}}]),e}();ue.DEFAULTS={nav:".js-header-mobile-navigation__nav",category:"js-header-mobile-navigation__category",back:"js-header-mobile-navigation__back",isSubMenuOpenClass:"is-header-mobile-navigation-nav-open"};var he,de,fe,pe=function(e){function n(){t(this,n);var e=s(this,(n.__proto__||Object.getPrototypeOf(n)).call(this,d,W));return e.selectContext("axa-header"),e}return r(n,ce),i(n,[{key:"connectedCallback",value:function(){a(n.prototype.__proto__||Object.getPrototypeOf(n.prototype),"connectedCallback",this).call(this);var e=H(this,"relative");this.className=h(this.initialClassName,"m-header-mobile-navigation",{"m-header-mobile-navigation--relative":e}),this.interaction=new ue(this)}},{key:"contextCallback",value:function(e){this.interaction.contextNode=e}},{key:"disconnectedCallback",value:function(){a(n.prototype.__proto__||Object.getPrototypeOf(n.prototype),"disconnectedCallback",this).call(this),this.interaction.destroy(),delete this.interaction}}]),n}();return he=function(){window.customElements.define("axa-header-mobile-navigation",pe)},de=0,fe=function(){if(0===de)try{he.apply(void 0,arguments),de+=1,document.removeEventListener("DOMContentLoaded"),document.removeEventListener("WebComponentsReady")}catch(e){}},document.addEventListener("DOMContentLoaded",fe,!1),document.addEventListener("WebComponentsReady",fe,!1),pe}();
