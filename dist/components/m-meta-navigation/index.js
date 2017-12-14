!function(){"use strict";function e(e,n,t){var i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},o=new Y(n,d({},i,{detail:t}));e.dispatchEvent(o)}function n(e,n){return new RegExp("^"+e+"$|^"+e+"\\s|\\s"+e+"\\s|\\s"+e+"$",n)}function t(e,t){return n(t).test(e.className)}function i(e,n){if(!e)return!1;for(var t=Object.keys(e),i=t.length,o=0;o<i;++o){var a=t[o];if(e[a]===n)return delete e[a]}return!1}function o(e,n,o,a){function r(){for(var n=0;n<d;++n)e.removeEventListener(f[n],u,l);i(this,r)}var l=arguments.length>4&&void 0!==arguments[4]&&arguments[4];if(X[n]&&(n=X[n]),!e||!n)return null;var s=void 0===o?"undefined":c(o);"function"===s&&(l=!!a,a=o);for(var u=o&&"string"===s?function(n){for(var i=n.target;!t(i,o)&&i!==e;)i=i.parentNode;if(i!==e)return a(n,i)}:a,f=n.split(Q),d=f.length,h=0;h<d;++h)e.addEventListener(f[h],u,l);return r}function a(){return Reflect.construct(HTMLElement,[],this.__proto__.constructor)}var r=".m-meta-navigation {\n  display: block;\n  background: #fafafa;\n  border-top: 2px solid #00008f;\n  border-bottom: 1px solid #ccc; }\n  @media (max-width: 991px) {\n    .m-meta-navigation {\n      display: none; } }\n\n.m-meta-navigation__box {\n  padding-right: 15px;\n  padding-left: 15px;\n  width: 100%;\n  margin-right: auto;\n  margin-left: auto;\n  max-width: auto; }\n  @media (min-width: 576px) {\n    .m-meta-navigation__box {\n      max-width: 540px; } }\n  @media (min-width: 768px) {\n    .m-meta-navigation__box {\n      max-width: 720px; } }\n  @media (min-width: 992px) {\n    .m-meta-navigation__box {\n      max-width: 960px; } }\n  @media (min-width: 1200px) {\n    .m-meta-navigation__box {\n      max-width: 1140px; } }\n\n.m-meta-navigation__row {\n  margin-right: -15px;\n  margin-left: -15px;\n  display: flex;\n  flex-wrap: wrap;\n  align-items: center; }\n\n.m-meta-navigation__nav-left {\n  padding-right: 15px;\n  padding-left: 15px; }\n\n.m-meta-navigation__nav-right {\n  margin-left: auto; }\n  .m-meta-navigation__nav-right .m-button {\n    margin-top: -2px;\n    margin-bottom: -1px; }\n\n.m-meta-navigation__list-right {\n  padding: 0;\n  margin: 0;\n  list-style-type: none;\n  margin-right: -15px;\n  margin-left: -15px;\n  display: flex;\n  flex-wrap: wrap; }\n\n.m-meta-navigation__list-item-right {\n  display: block; }\n\n.m-meta-navigation__list {\n  padding: 0;\n  margin: 0;\n  list-style-type: none;\n  margin-right: -15px;\n  margin-left: -15px;\n  display: flex;\n  flex-wrap: wrap; }\n\n.m-meta-navigation__list-item {\n  border-right: 1px solid #ccc; }\n  .m-meta-navigation__list-item:first-child {\n    border-left: 1px solid #ccc; }\n\n.m-meta-navigation__list-link {\n  font-size: 12px;\n  font-weight: 600;\n  line-height: 1.5;\n  letter-spacing: 0.02em;\n  display: block;\n  padding: 10px 15px;\n  text-transform: uppercase;\n  color: #7f7f7f; }\n  @media (min-width: 576px) {\n    .m-meta-navigation__list-link {\n      font-size: 13px;\n      font-weight: 600;\n      line-height: 1.38;\n      letter-spacing: 0.02em; } }\n  @media (min-width: 768px) {\n    .m-meta-navigation__list-link {\n      font-size: 13px;\n      font-weight: 600;\n      line-height: 1.38;\n      letter-spacing: 0.02em; } }\n  @media (min-width: 992px) {\n    .m-meta-navigation__list-link {\n      font-size: 13px;\n      font-weight: 600;\n      line-height: 1.38;\n      letter-spacing: 0.02em; } }\n  .m-meta-navigation__list-link.is-active, .m-meta-navigation__list-link:hover, .m-meta-navigation__list-link:active, .m-meta-navigation__list-link:focus {\n    margin-bottom: -1px;\n    text-decoration: none;\n    color: #00005b;\n    background: #fff;\n    border-bottom: 1px solid #fff; }\n\n.m-meta-navigation__lang-drop-down {\n  position: relative; }\n\n.m-meta-navigation__lang-drop-down__toggle {\n  background: transparent;\n  border: none;\n  font-size: 12px;\n  font-weight: 600;\n  line-height: 1.5;\n  letter-spacing: 0.02em;\n  position: relative;\n  padding: 10.5px 50px 10.5px 20px;\n  color: #7f7f7f;\n  text-transform: uppercase; }\n  .m-meta-navigation__lang-drop-down__toggle:hover, .m-meta-navigation__lang-drop-down__toggle:active, .m-meta-navigation__lang-drop-down__toggle:focus {\n    outline: none;\n    cursor: pointer; }\n  @media (min-width: 576px) {\n    .m-meta-navigation__lang-drop-down__toggle {\n      font-size: 13px;\n      font-weight: 600;\n      line-height: 1.38;\n      letter-spacing: 0.02em; } }\n  @media (min-width: 768px) {\n    .m-meta-navigation__lang-drop-down__toggle {\n      font-size: 13px;\n      font-weight: 600;\n      line-height: 1.38;\n      letter-spacing: 0.02em; } }\n  @media (min-width: 992px) {\n    .m-meta-navigation__lang-drop-down__toggle {\n      font-size: 13px;\n      font-weight: 600;\n      line-height: 1.38;\n      letter-spacing: 0.02em; } }\n  .m-meta-navigation__lang-drop-down__toggle:hover, .m-meta-navigation__lang-drop-down__toggle:active, .m-meta-navigation__lang-drop-down__toggle:focus {\n    cursor: pointer; }\n\n.m-meta-navigation__lang-drop-down-icon {\n  transform: translate3d(0, 0, 0);\n  backface-visibility: hidden;\n  position: absolute;\n  top: 50%;\n  right: 20px;\n  display: block;\n  width: 16px;\n  height: 16px;\n  margin-top: -8px;\n  transition: transform 0.3s ease; }\n  .is-open .m-meta-navigation__lang-drop-down-icon {\n    transform: rotate(180deg); }\n\n.m-meta-navigation__lang-list {\n  padding: 0;\n  margin: 0;\n  list-style-type: none;\n  transform: translate3d(0, 0, 0);\n  backface-visibility: hidden;\n  position: absolute;\n  top: 100%;\n  z-index: 1000;\n  height: 0;\n  min-width: 100%;\n  overflow: hidden;\n  transition: height 0.3s ease;\n  background: #fafafa; }\n  .is-open > .m-meta-navigation__lang-list {\n    height: auto; }\n\n.m-meta-navigation__lang-list-item {\n  display: block; }\n\n.m-meta-navigation__lang-list-link {\n  font-size: 12px;\n  font-weight: 600;\n  line-height: 1.5;\n  letter-spacing: 0.02em;\n  display: block;\n  padding: 10px 20px;\n  color: #7f7f7f; }\n  @media (min-width: 576px) {\n    .m-meta-navigation__lang-list-link {\n      font-size: 13px;\n      font-weight: 600;\n      line-height: 1.38;\n      letter-spacing: 0.02em; } }\n  @media (min-width: 768px) {\n    .m-meta-navigation__lang-list-link {\n      font-size: 13px;\n      font-weight: 600;\n      line-height: 1.38;\n      letter-spacing: 0.02em; } }\n  @media (min-width: 992px) {\n    .m-meta-navigation__lang-list-link {\n      font-size: 13px;\n      font-weight: 600;\n      line-height: 1.38;\n      letter-spacing: 0.02em; } }\n  .m-meta-navigation__lang-list-link:hover, .m-meta-navigation__lang-list-link:active, .m-meta-navigation__lang-list-link:focus {\n    text-decoration: none;\n    color: #00005b; }\n",l=function(e){return function(n,t,i){for(var o in t)o in s&&(t[s[o]]=t[o],delete t[o]);return e(n,t,i)}},s={class:"className",for:"htmlFor","http-equiv":"httpEquiv"},c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},u=(function(){function e(e){this.value=e}function n(n){function t(o,a){try{var r=n[o](a),l=r.value;l instanceof e?Promise.resolve(l.value).then(function(e){t("next",e)},function(e){t("throw",e)}):i(r.done?"return":"normal",r.value)}catch(e){i("throw",e)}}function i(e,n){switch(e){case"return":o.resolve({value:n,done:!0});break;case"throw":o.reject(n);break;default:o.resolve({value:n,done:!1})}(o=o.next)?t(o.key,o.arg):a=null}var o,a;this._invoke=function(e,n){return new Promise(function(i,r){var l={key:e,arg:n,resolve:i,reject:r,next:null};a?a=a.next=l:(o=a=l,t(e,n))})},"function"!=typeof n.return&&(this.return=void 0)}"function"==typeof Symbol&&Symbol.asyncIterator&&(n.prototype[Symbol.asyncIterator]=function(){return this}),n.prototype.next=function(e){return this._invoke("next",e)},n.prototype.throw=function(e){return this._invoke("throw",e)},n.prototype.return=function(e){return this._invoke("return",e)}}(),function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}),f=function(){function e(e,n){for(var t=0;t<n.length;t++){var i=n[t];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(n,t,i){return t&&e(n.prototype,t),i&&e(n,i),n}}(),d=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i])}return e},h=function e(n,t,i){null===n&&(n=Function.prototype);var o=Object.getOwnPropertyDescriptor(n,t);if(void 0===o){var a=Object.getPrototypeOf(n);return null===a?void 0:e(a,t,i)}if("value"in o)return o.value;var r=o.get;if(void 0!==r)return r.call(i)},p=function(e,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function, not "+typeof n);e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),n&&(Object.setPrototypeOf?Object.setPrototypeOf(e,n):e.__proto__=n)},m=function(e,n){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!n||"object"!=typeof n&&"function"!=typeof n?e:n},g=function(){return function(e,n){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return function(e,n){var t=[],i=!0,o=!1,a=void 0;try{for(var r,l=e[Symbol.iterator]();!(i=(r=l.next()).done)&&(t.push(r.value),!n||t.length!==n);i=!0);}catch(e){o=!0,a=e}finally{try{!i&&l.return&&l.return()}finally{if(o)throw a}}return t}(e,n);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),v=function(e,n){return Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(n)}}))},_=function(e){if(Array.isArray(e)){for(var n=0,t=Array(e.length);n<e.length;n++)t[n]=e[n];return t}return Array.from(e)},y=1,x=2,b=3,w=4,k=5,C=6,E=7,O=8,T=9,N=10,A=11,S=12,j=13,L=RegExp("^("+["area","base","basefont","bgsound","br","col","command","embed","frame","hr","img","input","isindex","keygen","link","meta","param","source","track","wbr","!--","animate","animateTransform","circle","cursor","desc","ellipse","feBlend","feColorMatrix","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feDistantLight","feFlood","feFuncA","feFuncB","feFuncG","feFuncR","feGaussianBlur","feImage","feMergeNode","feMorphology","feOffset","fePointLight","feSpecularLighting","feSpotLight","feTile","feTurbulence","font-face-format","font-face-name","font-face-uri","glyph","glyphRef","hkern","image","line","missing-glyph","mpath","path","polygon","polyline","rect","set","stop","tref","use","view","vkern"].join("|")+")(?:[.#][a-zA-Z0-9-￿_:-]+)*$"),P=/\n[\s]+$/,F=/^\n[\s]+/,D=/[\s]+$/,z=/^[\s]+/,M=/[\n\s]+/g,I=["a","abbr","b","bdi","bdo","br","cite","data","dfn","em","i","kbd","mark","q","rp","rt","rtc","ruby","s","amp","small","span","strong","sub","sup","time","u","var","wbr"],R=["code","pre"],q=function e(n,t){if(Array.isArray(t))for(var i,o,a=n.nodeName.toLowerCase(),r=!1,l=0,s=t.length;l<s;l++){var c=t[l];if(Array.isArray(c))e(n,c);else{("number"==typeof c||"boolean"==typeof c||"function"==typeof c||c instanceof Date||c instanceof RegExp)&&(c=c.toString());var u=n.childNodes[n.childNodes.length-1];if("string"==typeof c)r=!0,u&&"#text"===u.nodeName?u.nodeValue+=c:(c=document.createTextNode(c),n.appendChild(c),u=c),l===s-1&&(r=!1,-1===I.indexOf(a)&&-1===R.indexOf(a)?""===(i=u.nodeValue.replace(F,"").replace(D,"").replace(P,"").replace(M," "))?n.removeChild(u):u.nodeValue=i:-1===R.indexOf(a)&&(o=0===l?"":" ",i=u.nodeValue.replace(F,o).replace(z," ").replace(D,"").replace(P,"").replace(M," "),u.nodeValue=i));else if(c&&c.nodeType){r&&(r=!1,-1===I.indexOf(a)&&-1===R.indexOf(a)?""===(i=u.nodeValue.replace(F,"").replace(P,"").replace(M," "))?n.removeChild(u):u.nodeValue=i:-1===R.indexOf(a)&&(i=u.nodeValue.replace(z," ").replace(F,"").replace(P,"").replace(M," "),u.nodeValue=i));var f=c.nodeName;f&&(a=f.toLowerCase()),n.appendChild(c)}}}},U=function(e,n){return n={exports:{}},e(n,n.exports),n.exports}(function(e){function n(e,n,l){var s;-1!==r.indexOf(e)&&(n.namespace=t);var c=!1;if(n.namespace&&(c=n.namespace,delete n.namespace),c)s=document.createElementNS(c,e);else{if(e===a)return document.createComment(n.comment);s=document.createElement(e)}for(var u in n)if(n.hasOwnProperty(u)){var f=u.toLowerCase(),d=n[u];if("classname"===f&&(f="class",u="class"),"htmlFor"===u&&(u="for"),-1!==o.indexOf(f))if("true"===d)d=f;else if("false"===d)continue;"on"===f.slice(0,2)?s[u]=d:c?"xlink:href"===u?s.setAttributeNS(i,u,d):/^xmlns($|:)/i.test(u)||s.setAttributeNS(null,u,d):s.setAttribute(u,d)}return q(s,l),s}var t="http://www.w3.org/2000/svg",i="http://www.w3.org/1999/xlink",o=["autofocus","checked","defaultchecked","disabled","formnovalidate","indeterminate","readonly","required","selected","willvalidate"],a="!--",r=["svg","altGlyph","altGlyphDef","altGlyphItem","animate","animateColor","animateMotion","animateTransform","circle","clipPath","color-profile","cursor","defs","desc","ellipse","feBlend","feColorMatrix","feComponentTransfer","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feDistantLight","feFlood","feFuncA","feFuncB","feFuncG","feFuncR","feGaussianBlur","feImage","feMerge","feMergeNode","feMorphology","feOffset","fePointLight","feSpecularLighting","feSpotLight","feTile","feTurbulence","filter","font","font-face","font-face-format","font-face-name","font-face-src","font-face-uri","foreignObject","g","glyph","glyphRef","hkern","image","line","linearGradient","marker","mask","metadata","missing-glyph","mpath","path","pattern","polygon","polyline","radialGradient","rect","set","stop","switch","symbol","text","textPath","title","tref","tspan","use","view","vkern"];e.exports=function(e,n){function t(e){return"function"==typeof e?e:"string"==typeof e?e:e&&"object"===(void 0===e?"undefined":c(e))?e:i("",e)}n||(n={});var i=n.concat||function(e,n){return String(e)+String(n)};return!1!==n.attrToProp&&(e=l(e)),function(o){function a(e){var t=[];r===E&&(r=w);for(var i=0;i<e.length;i++){var o=e.charAt(i);r===y&&"<"===o?(l.length&&t.push([y,l]),l="",r=x):">"!==o||function(e){return e===T||e===N}(r)||r===j?r===j&&/-$/.test(l)&&"-"===o?(n.comments&&t.push([O,l.substr(0,l.length-1)],[b]),l="",r=y):r===x&&/^!--$/.test(l)?(n.comments&&t.push([x,l],[k,"comment"],[A]),l=o,r=j):r===y||r===j?l+=o:r===x&&/\s/.test(o)?(t.push([x,l]),l="",r=w):r===x?l+=o:r===w&&/[^\s"'=/]/.test(o)?(r=k,l=o):r===w&&/\s/.test(o)?(l.length&&t.push([k,l]),t.push([S])):r===k&&/\s/.test(o)?(t.push([k,l]),l="",r=C):r===k&&"="===o?(t.push([k,l],[A]),l="",r=E):r===k?l+=o:r!==C&&r!==w||"="!==o?r!==C&&r!==w||/\s/.test(o)?r===E&&'"'===o?r=N:r===E&&"'"===o?r=T:r===N&&'"'===o?(t.push([O,l],[S]),l="",r=w):r===T&&"'"===o?(t.push([O,l],[S]),l="",r=w):r!==E||/\s/.test(o)?r===O&&/\s/.test(o)?(t.push([O,l],[S]),l="",r=w):r!==O&&r!==T&&r!==N||(l+=o):(r=O,i--):(t.push([S]),/[\w-]/.test(o)?(l+=o,r=k):r=w):(t.push([A]),r=E):(r===x?t.push([x,l]):r===k?t.push([k,l]):r===O&&l.length&&t.push([O,l]),t.push([b]),l="",r=y)}return r===y&&l.length?(t.push([y,l]),l=""):r===O&&l.length?(t.push([O,l]),l=""):r===N&&l.length?(t.push([O,l]),l=""):r===T&&l.length?(t.push([O,l]),l=""):r===k&&(t.push([k,l]),l=""),t}for(var r=y,l="",s=arguments.length,u=[],f=0;f<o.length;f++)if(f<s-1){var d=arguments[f+1],h=a(o[f]),p=r;p===N&&(p=O),p===T&&(p=O),p===E&&(p=O),p===w&&(p=k),h.push([0,p,d]),u.push.apply(u,h)}else u.push.apply(u,a(o[f]));for(var m=[null,{},[]],g=[[m,-1]],f=0;f<u.length;f++){var v=g[g.length-1][0],_=(h=u[f])[0];if(_===x&&/^\//.test(h[1]))M=g[g.length-1][1],g.length>1&&(g.pop(),g[g.length-1][0][2][M]=e(v[0],v[1],v[2].length?v[2]:void 0));else if(_===x){var P=[h[1],{},[]];v[2].push(P),g.push([P,v[2].length-1])}else if(_===k||0===_&&h[1]===k){for(var F,D="";f<u.length;f++)if(u[f][0]===k)D=i(D,u[f][1]);else{if(0!==u[f][0]||u[f][1]!==k)break;if("object"!==c(u[f][2])||D)D=i(D,u[f][2]);else for(F in u[f][2])u[f][2].hasOwnProperty(F)&&!v[1][F]&&(v[1][F]=u[f][2][F])}u[f][0]===A&&f++;for(var z=f;f<u.length;f++)if(u[f][0]===O||u[f][0]===k)v[1][D]?""===u[f][1]||(v[1][D]=i(v[1][D],u[f][1])):v[1][D]=t(u[f][1]);else{if(0!==u[f][0]||u[f][1]!==O&&u[f][1]!==k){!D.length||v[1][D]||f!==z||u[f][0]!==b&&u[f][0]!==S||(v[1][D]=D.toLowerCase()),u[f][0]===b&&f--;break}v[1][D]?""===u[f][2]||(v[1][D]=i(v[1][D],u[f][2])):v[1][D]=t(u[f][2])}}else if(_===k)v[1][h[1]]=!0;else if(0===_&&h[1]===k)v[1][h[2]]=!0;else if(_===b){if(function(e){return L.test(e)}(v[0])&&g.length){var M=g[g.length-1][1];g.pop(),g[g.length-1][0][2][M]=e(v[0],v[1],v[2].length?v[2]:void 0)}}else if(0===_&&h[1]===y)void 0===h[2]||null===h[2]?h[2]="":h[2]||(h[2]=i("",h[2])),Array.isArray(h[2][0])?v[2].push.apply(v[2],h[2]):v[2].push(h[2]);else if(_===y)v[2].push(h[1]);else if(_!==A&&_!==S)throw new Error("unhandled: "+_)}if(m[2].length>1&&/^\s*$/.test(m[2][0])&&m[2].shift(),m[2].length>2||2===m[2].length&&/\S/.test(m[2][1]))throw new Error("multiple root elements must be wrapped in an enclosing tag");return Array.isArray(m[2][0])&&"string"==typeof m[2][0][0]&&Array.isArray(m[2][0][2])&&(m[2][0]=e(m[2][0][0],m[2][0][1],m[2][0][2])),m[2][0]}}(n,{comments:!0}),e.exports.default=e.exports,e.exports.createElement=n}),G=function(e){return"undefined"!=typeof window?function(){var n=document.createElement("div");return n.innerHTML=e,function(e){return Array.isArray(e)?e:[].slice.call(e)}(n.childNodes)}():function(){var n=new String(e);return n.__encoded=!0,n}()},V=v(["\n","\n"],["\n","\n"]),$=v(['\n  <div class="m-meta-navigation__box">\n    <div class="m-meta-navigation__row">\n      <nav class="m-meta-navigation__nav-left">\n        <ul class="m-meta-navigation__list">\n          ',"\n        </ul>\n      </nav>\n      ","\n    </div>\n  </div>\n  "],['\n  <div class="m-meta-navigation__box">\n    <div class="m-meta-navigation__row">\n      <nav class="m-meta-navigation__nav-left">\n        <ul class="m-meta-navigation__list">\n          ',"\n        </ul>\n      </nav>\n      ","\n    </div>\n  </div>\n  "]),K=v(['\n            <li class="m-meta-navigation__list-item">\n              <a href="','" class="m-meta-navigation__list-link','">',"</a>\n            </li>\n          "],['\n            <li class="m-meta-navigation__list-item">\n              <a href="','" class="m-meta-navigation__list-link','">',"</a>\n            </li>\n          "]),B=v(['\n        <nav class="m-meta-navigation__nav-right">\n          <ul class="m-meta-navigation__list-right">\n            <li class="m-meta-navigation__list-item-right">\n              <div class="m-meta-navigation__lang-drop-down js-dropdown">\n                <button role="button" class="m-meta-navigation__lang-drop-down__toggle js-dropdown__toggle">\n                  ','\n                  <svg class="m-meta-navigation__lang-drop-down-icon">\n                    <use xlink:href="#src--assets--icons--angle-bracket-right" />\n                  </svg>\n                </button>\n\n                <ul class="m-meta-navigation__lang-list">\n                ',"\n                </ul>\n              </div>\n            </li>\n            ","\n          </ul>\n        </nav>\n      "],['\n        <nav class="m-meta-navigation__nav-right">\n          <ul class="m-meta-navigation__list-right">\n            <li class="m-meta-navigation__list-item-right">\n              <div class="m-meta-navigation__lang-drop-down js-dropdown">\n                <button role="button" class="m-meta-navigation__lang-drop-down__toggle js-dropdown__toggle">\n                  ','\n                  <svg class="m-meta-navigation__lang-drop-down-icon">\n                    <use xlink:href="#src--assets--icons--angle-bracket-right" />\n                  </svg>\n                </button>\n\n                <ul class="m-meta-navigation__lang-list">\n                ',"\n                </ul>\n              </div>\n            </li>\n            ","\n          </ul>\n        </nav>\n      "]),H=v(['\n                  <li class="m-meta-navigation__lang-list-item">\n                    <a class="m-meta-navigation__lang-list-link','" href="','">',"</a>\n                  </li>\n                "],['\n                  <li class="m-meta-navigation__lang-list-item">\n                    <a class="m-meta-navigation__lang-list-link','" href="','">',"</a>\n                  </li>\n                "]),W=function(e,n){var t=e.left,i=e.right;return U(V,t?U($,t&&t.map(function(e,n){var t=e.url,i=e.name;return U(K,t,0===n?" is-active":"",G(i))}),i&&i.length?U(B,i[0].name,i&&i.map(function(e,n){var t=e.url,i=e.name;return U(H,0===n?" is-active":"",t,G(i))}),n):""):"")},J=/^\s*(?:true|false|null|undefined|-?[0-9]+\.?[0-9]*|[[{](?:.|[\r\n])*[\]}])\s*$/,Y=function(){function e(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},t=n.bubbles,i=void 0!==t&&t,o=n.cancelable,a=void 0!==o&&o,r=n.detail,l=void 0===r?void 0:r,s=document.createEvent("CustomEvent");s.initCustomEvent(e,i,a,l);var c=s.preventDefault;return s.preventDefault=function(){c.call(s);try{Object.defineProperty(this,"defaultPrevented",{get:function(){return!0}})}catch(e){this.defaultPrevented=!0}},s}try{var n=new window.CustomEvent("test");if(n.preventDefault(),!0!==n.defaultPrevented)throw new Error("Could not prevent default");return window.CustomEvent}catch(e){}return e}(),Z=/^\s+|\s{2,}|\s+$/g,Q=/\s+/,X={transitionend:function(){for(var e=document.createElement("div").style,n={transition:"transitionend",OTransition:"oTransitionEnd otransitionend",MozTransition:"transitionend",WebkitTransition:"webkitTransitionEnd"},t=Object.keys(n),i=t.length,o=void 0,a=0;a<i;++a)if(o=t[a],void 0!==e[o])return n[o];return null}()},ee={};o(document,"pubsub/onsubscribe",function(n){var t=n.detail;ee[t]||(ee[t]={count:0});var i=ee[t],o=i.queue;Array.isArray(o)&&(o.forEach(function(n){var t=g(n,3),i=t[0],o=t[1];e(t[2],i,o)}),delete i.queue)}),Object.setPrototypeOf(a.prototype,HTMLElement.prototype),Object.setPrototypeOf(a,HTMLElement);var ne={},te=function(n){function t(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",n=arguments[1];u(this,t);var i=m(this,(t.__proto__||Object.getPrototypeOf(t)).call(this));return i._makeContextReady=i._makeContextReady.bind(i),i._initialise(e,n),i}return p(t,a),f(t,[{key:"_initialise",value:function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;this.initialClassName=this.className,this._styles=e,this._template=n}},{key:"connectedCallback",value:function(){this._appendStyles(),this.render(),this.contextCallback&&this._makeContextReady()}},{key:"disconnectedCallback",value:function(){this.unContextEnabled&&this.unContextEnabled()}},{key:"_appendStyles",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this;if(this._styles){var n=document.createElement("style"),t=document.createTextNode(this._styles);n.appendChild(t),e.insertAdjacentElement?e.insertAdjacentElement("afterbegin",n):e.appendChild(n)}}},{key:"render",value:function(){var e=this;if(!this._hasRendered){var n=this._template;if(n)try{for(var t=document.createDocumentFragment();this.firstChild;)t.appendChild(this.firstChild);var i=n(function(e){if(!e.hasAttributes)return null;for(var n={},t=e.attributes,i=t.length,o=0;o<i;++o){var a=t[o];n[a.name]=function(e,n){if("function"==typeof e.hasAttribute&&!e.hasAttribute(n))return!1;var t=e.value;if(n?t=e.getAttribute(n):n=e.name,t&&n!==t){if(J.test(t))try{t=JSON.parse(t)}catch(n){console.error("Attribute "+e+" has an error:\n"+n+"\n",t)}}else t=!0;return t}(a)}return n}(this),t);if(Array.isArray(i))i.forEach(function(n){e.appendChild(n)});else if(i){if("string"==typeof i){var o=new Error("throwed");throw console.error("\n%cWeb Component %c"+this.nodeName+"%c does not accept string as a return from a template. Maybe use bel?\n\nStack Trace: "+o.stack+"\n","color: #580000; font-size: 14px; line-height:16px;","background: #8b0000; color: #FFF; font-size: 14px; line-height:16px;","color: #580000; font-size: 14px; line-height:16px;"),o}this.appendChild(i)}this._hasRendered=!0}catch(o){"throwed"!==o.message&&console.error("\n%cWeb Component %c"+this.nodeName+"%c has an error while loading its template:\n"+o+"\n\nStack Trace: "+o.stack+"\n","color: #580000; font-size: 14px; line-height:16px;","background: #8b0000; color: #FFF; font-size: 14px; line-height:16px;","color: #580000; font-size: 14px; line-height:16px;")}}}},{key:"enableContext",value:function(){var n=this.nodeName.toLowerCase();this.__isContext=!0,this.__contextName=n,function(n,t){var i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:document;ee[n]||(ee[n]={count:0,queue:[]});var o=ee[n].queue;Array.isArray(o)?o.push([n,t,i]):e(i,n,t)}("context/enabled",n)}},{key:"selectContext",value:function(e){this.__selectedContext=e.toLowerCase()}},{key:"_makeContextReady",value:function(){var n=this;this.contextNode?(clearTimeout(this.timeoutId),this.timeoutId=setTimeout(function(){n.contextCallback(n.contextNode)},10)):this.unContextEnabled||(this.unContextEnabled=function(n,t){var i=o(arguments.length>2&&void 0!==arguments[2]?arguments[2]:document,n,t);ee[n]||(ee[n]={count:0});var a=ee[n];return a.count++,a.onsubscribe||(a.onsubscribe=function(e){function n(){for(var n=arguments.length,i=Array(n),a=0;a<n;a++)i[a]=arguments[a];return d=i,v&&(h&&clearTimeout(h),h=setTimeout(function(){p&&clearTimeout(p),t()},o)),y&&!p&&(p=setTimeout(function(){h&&clearTimeout(h),t()},f)),l&&!g&&(g=!0,m=e.apply(void 0,_(d))),m}function t(){c&&(m=e.apply(void 0,_(d))),h=null,p=null,g=!1}function i(){h&&(clearTimeout(h),h=null),p&&(clearTimeout(p),p=null),d=void 0,g=!1}var o=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},r=a.leading,l=void 0!==r&&r,s=a.trailing,c=void 0===s||s,u=a.maxWait,f=void 0!==u&&u,d=void 0,h=void 0,p=void 0,m=void 0,g=!1,v=o!==f,y=!1!==f;return n.flush=function(){return(h||p)&&(m=e.apply(void 0,_(d))),i(),m},n.cancel=i,n}(function(n){return function(){e(document,"pubsub/onsubscribe",n),e(document,"pubsub/onsubscribe/"+n,n),ee[n]&&delete ee[n].unsubscribe}}(n),100)),a.onsubscribe(),function(){a.count--,i.call(this),a.count<=0&&delete ee[n]}}("context/enabled",this._makeContextReady))}},{key:"contextNode",get:function(){for(var e=this.__selectedContext,n=this.parentNode;n&&(!n.__isContext||e&&e!==n.__contextName);)n=n.parentNode;return!(!n||!n.__isContext)&&n}}],[{key:"uuidv4",value:function(){return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,function(e){var n=16*Math.random()|0;return("x"==e?n:3&n|8).toString(16)})}}]),t}(),ie=(function(e){function n(){return u(this,n),m(this,(n.__proto__||Object.getPrototypeOf(n)).apply(this,arguments))}p(n,te),f(n,[{key:"connectedCallback",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"open",n=this.attachShadow({mode:e});this._appendStyles(n),this.render()}}])}(),function(e){function n(){return u(this,n),m(this,(n.__proto__||Object.getPrototypeOf(n)).apply(this,arguments))}return p(n,te),f(n,[{key:"_appendStyles",value:function(){n.appendGlobalStyles(this._styles,this.nodeName)}}],[{key:"appendGlobalStyles",value:function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:te.uuidv4();if(e&&!ne[e]){var t=document.createElement("style"),i=document.createTextNode(e);t.appendChild(i),t.setAttribute("data-c-name",n.toLowerCase()),document.querySelector("head").appendChild(t),ne[e]=!0}}}]),n}()),oe=function(){for(var e=arguments.length,n=Array(e),t=0;t<e;t++)n[t]=arguments[t];for(var i=n.length,o={},a=0;a<i;++a){var r=n[a];o[r.toUpperCase()]=r}return o}("click","keyup","enter","move","leave","Escape","Esc"),ae=function(){function e(n){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};u(this,e),this._rootNode=n,this._options=d({},e.DEFAULTS,t),this._handleClick=this._handleClick.bind(this),this._handleClose=this._handleClose.bind(this),this._handleKeyUp=this._handleKeyUp.bind(this),this._init()}return f(e,[{key:"_init",value:function(){var e=this._options.containerClass;this._container=e?this._rootNode.querySelector(e):this._rootNode,this._on()}},{key:"_on",value:function(){this._off(),this._unClick=o(this._container,oe.CLICK,this._options.toggleClass,this._handleClick)}},{key:"_off",value:function(){this._unClick&&this._unClick(),this._offInteractive()}},{key:"_onInteractive",value:function(){this._offInteractive(),this._options.closeClass&&(this._unCloseClick=o(this._container,oe.CLICK,this._options.closeClass,this._handleClose)),this._options.outerClose&&(this._unOuterClick=function(e,n,t){function o(){l.removeEventListener(n,a,r),i(this,o)}function a(n){var i=n.target;if(!e.contains(i)&&e!==i)return t(n)}var r=!(arguments.length>3&&void 0!==arguments[3])||arguments[3],l=e.ownerDocument.documentElement;return l.addEventListener(n,a,r),o}(this._container,oe.CLICK,this._handleClose)),this._options.escapeClose&&(this._unCloseEscape=o(this._container.ownerDocument,oe.KEYUP,this._handleKeyUp))}},{key:"_offInteractive",value:function(){this._unOuterClick&&this._unOuterClick(),this._unCloseClick&&this._unCloseClick(),this._unCloseEscape&&this._unCloseEscape(),delete this._lastToggleNode}},{key:"_handleClick",value:function(e,n){this._options.useDefaultEvent||e.preventDefault();var t=!this._lastToggleNode,i=n!==this._lastToggleNode,o=!t&&!i;t?(this._notify(oe.ENTER,n),this._onInteractive()):i&&this._notify(oe.MOVE,n,this._lastToggleNode),this._lastToggleNode=n,o&&this._options.sameClickClose&&this._close()}},{key:"_handleClose",value:function(e){this._options.useDefaultEvent||e.preventDefault(),this._close()}},{key:"_handleKeyUp",value:function(e){(e.key===oe.ESCAPE||e.key===oe.ESC||27===e.keyCode)&&(e.preventDefault(),this._close())}},{key:"_close",value:function(){this._lastToggleNode&&(this._notify(oe.LEAVE,this._lastToggleNode),this._offInteractive(),delete this._lastToggleNode)}},{key:"_notify",value:function(e,n,t){e in this&&"function"==typeof this[e]&&this[e](n,t)}},{key:"enter",value:function(e){throw new Error("UiEvent.enter method not overwritten")}},{key:"move",value:function(e,n){}},{key:"leave",value:function(e){throw new Error("UiEvent.leave method not overwritten")}},{key:"destroy",value:function(){this._off(),delete this._rootNode,delete this._options}}]),e}();ae.DEFAULTS={containerClass:".js-ui-container",toggleClass:"js-ui-toggle",closeClass:"js-ui-close",escapeClose:!0,outerClose:!0,sameClickClose:!0,useDefaultEvent:!1};var re=function(){if(!window.getComputedStyle)return null;var e=window.getComputedStyle(document.documentElement,""),n=(Array.prototype.slice.call(e).join("").match(/-(moz|webkit|ms)-/)||""===e.OLink&&["","o"])[1];return{dom:"WebKit|Moz|MS|O".match(new RegExp("("+n+")","i"))[1],lowercase:n,css:"-"+n+"-",js:n[0].toUpperCase()+n.slice(1)}}().lowercase,le=function(){var e=window.requestAnimationFrame||window[re+"RequestAnimationFrame"];if(e)e=e.bind(window);else{var n=0;e=function(e){var t=Date.now(),i=Math.max(0,16-(t-n)),o=setTimeout(function(){e(t+i)},i);return n=t+i,o}}return e}(),se=(function(){var e=window.cancelAnimationFrame||window[re+"CancelAnimationFrame"]||window[re+"CancelRequestAnimationFrame"];e=e?e.bind(window):function(e){clearTimeout(e)}}(),function(e){function i(e,n){u(this,i),n=d({},i.DEFAULTS,n);var t=m(this,(i.__proto__||Object.getPrototypeOf(i)).call(this,e,n));return t.options=n,t.rootNode=e,t.handleTransitionEnd=t.handleTransitionEnd.bind(t),t}return p(i,ae),f(i,[{key:"onInteractive",value:function(){this.offInteractive(),this.unTransitionEnd=o(this.rootNode,"transitionend",this.handleTransitionEnd)}},{key:"offInteractive",value:function(){this.unTransitionEnd&&this.unTransitionEnd()}},{key:"enter",value:function(e){var n=e.parentNode,i=n.lastElementChild,o=i.scrollHeight;this.onInteractive(),i.style.height=o+"px",function(e,n){t(e,n)||(e.className+=" "+n)}(n,"is-open")}},{key:"leave",value:function(e){var i=e.parentNode,o=i.lastElementChild,a=o.scrollHeight;this.offInteractive(),le(function(){o.style.height=a+"px",le(function(){!function(e,i){if(t(e,i)){var o=n(i,"g");e.className=e.className.replace(o," ").replace(Z," ")}}(i,"is-open"),o.style.height=0})})}},{key:"handleTransitionEnd",value:function(e){"height"===e.propertyName&&(e.target.style.height="",this.offInteractive())}},{key:"destroy",value:function(){h(i.prototype.__proto__||Object.getPrototypeOf(i.prototype),"destroy",this).call(this),delete this.rootNode,delete this.options}}]),i}());se.DEFAULTS={containerClass:".js-dropdown",toggleClass:"js-dropdown__toggle",isOpenClass:"is-open"};var ce=function(e){function n(){return u(this,n),m(this,(n.__proto__||Object.getPrototypeOf(n)).call(this,r,W))}return p(n,ie),f(n,[{key:"connectedCallback",value:function(){h(n.prototype.__proto__||Object.getPrototypeOf(n.prototype),"connectedCallback",this).call(this),this.className=this.initialClassName+" m-meta-navigation",this.dropDown=new se(this)}}]),n}();!function(e){document.addEventListener("DOMContentLoaded",e,!1)}(function(){window.customElements.define("axa-meta-navigation",ce)})}();
