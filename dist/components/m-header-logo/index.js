var StyleGuideWebComponent=function(){"use strict";function e(e,t,n){var r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},i=new o(t,s({},r,{detail:n}));e.dispatchEvent(i)}function t(e,t,n,r){function o(){for(var t=0;t<c;++t)e.removeEventListener(u[t],s,a);!function(e,t){if(!e)return!1;for(var n=Object.keys(e),r=n.length,o=0;o<r;++o){var i=n[o];if(e[i]===t)return delete e[i]}}(this,o)}var a=arguments.length>4&&void 0!==arguments[4]&&arguments[4];if(m[t]&&(t=m[t]),!e||!t)return null;var l=void 0===n?"undefined":i(n);"function"===l&&(a=!!r,r=n);for(var s=n&&"string"===l?function(t){for(var o=t.target;!function(e,t){return function(e,t){return new RegExp("^"+e+"$|^"+e+"\\s|\\s"+e+"\\s|\\s"+e+"$",t)}(t).test(e.className)}(o,n)&&o!==e;)o=o.parentNode;if(o!==e)return r(t,o)}:r,u=t.split(p),c=u.length,f=0;f<c;++f)e.addEventListener(u[f],s,a);return o}function n(){return Reflect.construct(HTMLElement,[],this.__proto__.constructor)}var r=/^\s*(?:true|false|null|undefined|-?[0-9]+\.?[0-9]*|[[{](?:.|[\r\n])*[\]}])\s*$/,o=function(){function e(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=t.bubbles,r=void 0!==n&&n,o=t.cancelable,i=void 0!==o&&o,a=t.detail,l=void 0===a?void 0:a,s=document.createEvent("CustomEvent");s.initCustomEvent(e,r,i,l);var u=s.preventDefault;return s.preventDefault=function(){u.call(s);try{Object.defineProperty(this,"defaultPrevented",{get:function(){return!0}})}catch(e){this.defaultPrevented=!0}},s}try{var t=new window.CustomEvent("test");if(t.preventDefault(),!0!==t.defaultPrevented)throw new Error("Could not prevent default");return window.CustomEvent}catch(e){}return e}(),i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},a=(function(){function e(e){this.value=e}function t(t){function n(o,i){try{var a=t[o](i),l=a.value;l instanceof e?Promise.resolve(l.value).then(function(e){n("next",e)},function(e){n("throw",e)}):r(a.done?"return":"normal",a.value)}catch(e){r("throw",e)}}function r(e,t){switch(e){case"return":o.resolve({value:t,done:!0});break;case"throw":o.reject(t);break;default:o.resolve({value:t,done:!1})}(o=o.next)?n(o.key,o.arg):i=null}var o,i;this._invoke=function(e,t){return new Promise(function(r,a){var l={key:e,arg:t,resolve:r,reject:a,next:null};i?i=i.next=l:(o=i=l,n(e,t))})},"function"!=typeof t.return&&(this.return=void 0)}"function"==typeof Symbol&&Symbol.asyncIterator&&(t.prototype[Symbol.asyncIterator]=function(){return this}),t.prototype.next=function(e){return this._invoke("next",e)},t.prototype.throw=function(e){return this._invoke("throw",e)},t.prototype.return=function(e){return this._invoke("return",e)}}(),function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}),l=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},u=function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)},c=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t},f=function(){return function(e,t){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return function(e,t){var n=[],r=!0,o=!1,i=void 0;try{for(var a,l=e[Symbol.iterator]();!(r=(a=l.next()).done)&&(n.push(a.value),!t||n.length!==t);r=!0);}catch(e){o=!0,i=e}finally{try{!r&&l.return&&l.return()}finally{if(o)throw i}}return n}(e,t);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),d=function(e,t){return Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))},h=function(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}return Array.from(e)},p=/\s+/,m={transitionend:function(){for(var e=document.createElement("div").style,t={transition:"transitionend",OTransition:"oTransitionEnd otransitionend",MozTransition:"transitionend",WebkitTransition:"webkitTransitionEnd"},n=Object.keys(t),r=n.length,o=void 0,i=0;i<r;++i)if(o=n[i],void 0!==e[o])return t[o];return null}()},v={};t(document,"pubsub/onsubscribe",function(t){var n=t.detail;v[n]||(v[n]={count:0});var r=v[n],o=r.queue;Array.isArray(o)&&(o.forEach(function(t){var n=f(t,3),r=n[0],o=n[1];e(n[2],r,o)}),delete r.queue)}),Object.setPrototypeOf(n.prototype,HTMLElement.prototype),Object.setPrototypeOf(n,HTMLElement);var g={},y=function(o){function i(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments[1];a(this,i);var n=c(this,(i.__proto__||Object.getPrototypeOf(i)).call(this));return n._makeContextReady=n._makeContextReady.bind(n),n._initialise(e,t),n}return u(i,n),l(i,[{key:"_initialise",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;this.initialClassName=this.className,this._styles=e,this._template=t}},{key:"connectedCallback",value:function(){this._appendStyles(),this.render(),this.contextCallback&&this._makeContextReady()}},{key:"disconnectedCallback",value:function(){this.unContextEnabled&&this.unContextEnabled()}},{key:"_appendStyles",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this;if(this._styles){var t=document.createElement("style"),n=document.createTextNode(this._styles);t.appendChild(n),e.insertAdjacentElement?e.insertAdjacentElement("afterbegin",t):e.appendChild(t)}}},{key:"render",value:function(){var e=this;if(!this._hasRendered){var t=this._template;if(t)try{for(var n=document.createDocumentFragment();this.firstChild;)n.appendChild(this.firstChild);var o=t(function(e){if(!e.hasAttributes)return null;for(var t={},n=e.attributes,o=n.length,i=0;i<o;++i){var a=n[i];t[a.name]=function(e,t){if("function"==typeof e.hasAttribute&&!e.hasAttribute(t))return!1;var n=e.value;if(t?n=e.getAttribute(t):t=e.name,n&&t!==n){if(r.test(n))try{n=JSON.parse(n)}catch(t){console.error("Attribute "+e+" has an error:\n"+t+"\n",n)}}else n=!0;return n}(a)}return t}(this),n);if(Array.isArray(o))o.forEach(function(t){e.appendChild(t)});else if(o){if("string"==typeof o){var i=new Error("throwed");throw console.error("\n%cWeb Component %c"+this.nodeName+"%c does not accept string as a return from a template. Maybe use bel?\n\nStack Trace: "+i.stack+"\n","color: #580000; font-size: 14px; line-height:16px;","background: #8b0000; color: #FFF; font-size: 14px; line-height:16px;","color: #580000; font-size: 14px; line-height:16px;"),i}this.appendChild(o)}this._hasRendered=!0}catch(i){"throwed"!==i.message&&console.error("\n%cWeb Component %c"+this.nodeName+"%c has an error while loading its template:\n"+i+"\n\nStack Trace: "+i.stack+"\n","color: #580000; font-size: 14px; line-height:16px;","background: #8b0000; color: #FFF; font-size: 14px; line-height:16px;","color: #580000; font-size: 14px; line-height:16px;")}}}},{key:"enableContext",value:function(){var t=this.nodeName.toLowerCase();this.__isContext=!0,this.__contextName=t,function(t,n){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:document;v[t]||(v[t]={count:0,queue:[]});var o=v[t].queue;Array.isArray(o)?o.push([t,n,r]):e(r,t,n)}("context/enabled",t)}},{key:"selectContext",value:function(e){this.__selectedContext=e.toLowerCase()}},{key:"_makeContextReady",value:function(){var n=this,r=(arguments.length>0&&void 0!==arguments[0]?arguments[0]:{}).detail;this.contextNode&&(clearTimeout(this.timeoutId),this.timeoutId=setTimeout(function(){n.contextCallback(n.contextNode,r)},10)),this.unContextEnabled&&this.unContextEnabled(),this.unContextEnabled=function(n,r){var o=t(arguments.length>2&&void 0!==arguments[2]?arguments[2]:document,n,r);v[n]||(v[n]={count:0});var i=v[n];return i.count++,i.onsubscribe||(i.onsubscribe=function(e){function t(){for(var t=arguments.length,r=Array(t),i=0;i<t;i++)r[i]=arguments[i];return d=r,y&&(p&&clearTimeout(p),p=setTimeout(function(){m&&clearTimeout(m),n()},o)),b&&!m&&(m=setTimeout(function(){p&&clearTimeout(p),n()},f)),l&&!g&&(g=!0,v=e.apply(void 0,h(d))),v}function n(){u&&(v=e.apply(void 0,h(d))),p=null,m=null,g=!1}function r(){p&&(clearTimeout(p),p=null),m&&(clearTimeout(m),m=null),d=void 0,g=!1}var o=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},a=i.leading,l=void 0!==a&&a,s=i.trailing,u=void 0===s||s,c=i.maxWait,f=void 0!==c&&c,d=void 0,p=void 0,m=void 0,v=void 0,g=!1,y=o!==f,b=!1!==f;return t.flush=function(){return(p||m)&&(v=e.apply(void 0,h(d))),r(),v},t.cancel=r,t}(function(t){return function(){e(document,"pubsub/onsubscribe",t),e(document,"pubsub/onsubscribe/"+t,t),v[t]&&delete v[t].unsubscribe}}(n),100)),i.onsubscribe(),function(){i.count--,o.call(this),i.count<=0&&delete v[n]}}("context/enabled",this._makeContextReady)}},{key:"contextNode",get:function(){for(var e=this.__selectedContext,t=this.parentNode;t&&(!t.__isContext||e&&e!==t.__contextName);)t=t.parentNode;return!(!t||!t.__isContext)&&t}}],[{key:"uuidv4",value:function(){return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,function(e){var t=16*Math.random()|0;return("x"==e?t:3&t|8).toString(16)})}}]),i}(),b=(function(e){function t(){return a(this,t),c(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}u(t,y),l(t,[{key:"connectedCallback",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"open",t=this.attachShadow({mode:e});this._appendStyles(t),this.render()}}])}(),function(e){function t(){return a(this,t),c(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return u(t,y),l(t,[{key:"_appendStyles",value:function(){t.appendGlobalStyles(this._styles,this.nodeName)}}],[{key:"appendGlobalStyles",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:y.uuidv4();if(e&&!g[e]){var n=document.createElement("style"),r=document.createTextNode(e);n.appendChild(r),n.setAttribute("data-c-name",t.toLowerCase()),document.querySelector("head").appendChild(n),g[e]=!0}}}]),t}()),x=".m-header-logo {\n  max-width: 16.66667%;\n  -webkit-box-flex: 0;\n      -ms-flex: 0 0 16.66667%;\n          flex: 0 0 16.66667%;\n  display: block;\n  -ms-flex-item-align: center;\n      align-self: center; }\n  @media (min-width: 992px) {\n    .m-header-logo {\n      -ms-flex-item-align: start;\n          align-self: flex-start; } }\n\n.m-header-logo__link {\n  display: block;\n  width: 35px; }\n  @media (min-width: 576px) {\n    .m-header-logo__link {\n      width: 43px; } }\n  @media (min-width: 1200px) {\n    .m-header-logo__link {\n      width: 53px; } }\n\n.m-header-logo__icon,\n.m-header-logo__img {\n  width: 35px;\n  height: 35px;\n  display: block; }\n  @media (min-width: 576px) {\n    .m-header-logo__icon,\n    .m-header-logo__img {\n      width: 43px;\n      height: 43px; } }\n  @media (min-width: 1200px) {\n    .m-header-logo__icon,\n    .m-header-logo__img {\n      width: 53px;\n      height: 53px; } }\n",_=function(e){return function(t,n,r){for(var o in n)o in w&&(n[w[o]]=n[o],delete n[o]);return e(t,n,r)}},w={class:"className",for:"htmlFor","http-equiv":"httpEquiv"},k=1,C=2,O=3,E=4,A=5,S=6,T=7,N=8,j=9,L=10,P=11,M=12,F=13,R=RegExp("^("+["area","base","basefont","bgsound","br","col","command","embed","frame","hr","img","input","isindex","keygen","link","meta","param","source","track","wbr","!--","animate","animateTransform","circle","cursor","desc","ellipse","feBlend","feColorMatrix","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feDistantLight","feFlood","feFuncA","feFuncB","feFuncG","feFuncR","feGaussianBlur","feImage","feMergeNode","feMorphology","feOffset","fePointLight","feSpecularLighting","feSpotLight","feTile","feTurbulence","font-face-format","font-face-name","font-face-uri","glyph","glyphRef","hkern","image","line","missing-glyph","mpath","path","polygon","polyline","rect","set","stop","tref","use","view","vkern"].join("|")+")(?:[.#][a-zA-Z0-9-￿_:-]+)*$"),D=/\n[\s]+$/,G=/^\n[\s]+/,z=/[\s]+$/,$=/^[\s]+/,q=/[\n\s]+/g,V=["a","abbr","b","bdi","bdo","br","cite","data","dfn","em","i","kbd","mark","q","rp","rt","rtc","ruby","s","amp","small","span","strong","sub","sup","time","u","var","wbr"],I=["code","pre"],W=function e(t,n){if(Array.isArray(n))for(var r,o,i=t.nodeName.toLowerCase(),a=!1,l=0,s=n.length;l<s;l++){var u=n[l];if(Array.isArray(u))e(t,u);else{("number"==typeof u||"boolean"==typeof u||"function"==typeof u||u instanceof Date||u instanceof RegExp)&&(u=u.toString());var c=t.childNodes[t.childNodes.length-1];if("string"==typeof u)a=!0,c&&"#text"===c.nodeName?c.nodeValue+=u:(u=document.createTextNode(u),t.appendChild(u),c=u),l===s-1&&(a=!1,-1===V.indexOf(i)&&-1===I.indexOf(i)?""===(r=c.nodeValue.replace(G,"").replace(z,"").replace(D,"").replace(q," "))?t.removeChild(c):c.nodeValue=r:-1===I.indexOf(i)&&(o=0===l?"":" ",r=c.nodeValue.replace(G,o).replace($," ").replace(z,"").replace(D,"").replace(q," "),c.nodeValue=r));else if(u&&u.nodeType){a&&(a=!1,-1===V.indexOf(i)&&-1===I.indexOf(i)?""===(r=c.nodeValue.replace(G,"").replace(D,"").replace(q," "))?t.removeChild(c):c.nodeValue=r:-1===I.indexOf(i)&&(r=c.nodeValue.replace($," ").replace(G,"").replace(D,"").replace(q," "),c.nodeValue=r));var f=u.nodeName;f&&(i=f.toLowerCase()),t.appendChild(u)}}}},B=function(e,t){return t={exports:{}},e(t,t.exports),t.exports}(function(e){function t(e,t,i){var s;-1!==l.indexOf(e)&&(t.namespace=n);var u=!1;if(t.namespace&&(u=t.namespace,delete t.namespace),u)s=document.createElementNS(u,e);else{if(e===a)return document.createComment(t.comment);s=document.createElement(e)}for(var c in t)if(t.hasOwnProperty(c)){var f=c.toLowerCase(),d=t[c];if("classname"===f&&(f="class",c="class"),"htmlFor"===c&&(c="for"),-1!==o.indexOf(f))if("true"===d)d=f;else if("false"===d)continue;"on"===f.slice(0,2)?s[c]=d:u?"xlink:href"===c?s.setAttributeNS(r,c,d):/^xmlns($|:)/i.test(c)||s.setAttributeNS(null,c,d):s.setAttribute(c,d)}return W(s,i),s}var n="http://www.w3.org/2000/svg",r="http://www.w3.org/1999/xlink",o=["autofocus","checked","defaultchecked","disabled","formnovalidate","indeterminate","readonly","required","selected","willvalidate"],a="!--",l=["svg","altGlyph","altGlyphDef","altGlyphItem","animate","animateColor","animateMotion","animateTransform","circle","clipPath","color-profile","cursor","defs","desc","ellipse","feBlend","feColorMatrix","feComponentTransfer","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feDistantLight","feFlood","feFuncA","feFuncB","feFuncG","feFuncR","feGaussianBlur","feImage","feMerge","feMergeNode","feMorphology","feOffset","fePointLight","feSpecularLighting","feSpotLight","feTile","feTurbulence","filter","font","font-face","font-face-format","font-face-name","font-face-src","font-face-uri","foreignObject","g","glyph","glyphRef","hkern","image","line","linearGradient","marker","mask","metadata","missing-glyph","mpath","path","pattern","polygon","polyline","radialGradient","rect","set","stop","switch","symbol","text","textPath","title","tref","tspan","use","view","vkern"];e.exports=function(e,t){function n(e){return"function"==typeof e?e:"string"==typeof e?e:e&&"object"===(void 0===e?"undefined":i(e))?e:r("",e)}t||(t={});var r=t.concat||function(e,t){return String(e)+String(t)};return!1!==t.attrToProp&&(e=_(e)),function(o){function a(e){var n=[];l===T&&(l=E);for(var r=0;r<e.length;r++){var o=e.charAt(r);l===k&&"<"===o?(s.length&&n.push([k,s]),s="",l=C):">"!==o||function(e){return e===j||e===L}(l)||l===F?l===F&&/-$/.test(s)&&"-"===o?(t.comments&&n.push([N,s.substr(0,s.length-1)],[O]),s="",l=k):l===C&&/^!--$/.test(s)?(t.comments&&n.push([C,s],[A,"comment"],[P]),s=o,l=F):l===k||l===F?s+=o:l===C&&/\s/.test(o)?(n.push([C,s]),s="",l=E):l===C?s+=o:l===E&&/[^\s"'=/]/.test(o)?(l=A,s=o):l===E&&/\s/.test(o)?(s.length&&n.push([A,s]),n.push([M])):l===A&&/\s/.test(o)?(n.push([A,s]),s="",l=S):l===A&&"="===o?(n.push([A,s],[P]),s="",l=T):l===A?s+=o:l!==S&&l!==E||"="!==o?l!==S&&l!==E||/\s/.test(o)?l===T&&'"'===o?l=L:l===T&&"'"===o?l=j:l===L&&'"'===o?(n.push([N,s],[M]),s="",l=E):l===j&&"'"===o?(n.push([N,s],[M]),s="",l=E):l!==T||/\s/.test(o)?l===N&&/\s/.test(o)?(n.push([N,s],[M]),s="",l=E):l!==N&&l!==j&&l!==L||(s+=o):(l=N,r--):(n.push([M]),/[\w-]/.test(o)?(s+=o,l=A):l=E):(n.push([P]),l=T):(l===C?n.push([C,s]):l===A?n.push([A,s]):l===N&&s.length&&n.push([N,s]),n.push([O]),s="",l=k)}return l===k&&s.length?(n.push([k,s]),s=""):l===N&&s.length?(n.push([N,s]),s=""):l===L&&s.length?(n.push([N,s]),s=""):l===j&&s.length?(n.push([N,s]),s=""):l===A&&(n.push([A,s]),s=""),n}for(var l=k,s="",u=arguments.length,c=[],f=0;f<o.length;f++)if(f<u-1){var d=arguments[f+1],h=a(o[f]),p=l;p===L&&(p=N),p===j&&(p=N),p===T&&(p=N),p===E&&(p=A),h.push([0,p,d]),c.push.apply(c,h)}else c.push.apply(c,a(o[f]));for(var m=[null,{},[]],v=[[m,-1]],f=0;f<c.length;f++){var g=v[v.length-1][0],y=(h=c[f])[0];if(y===C&&/^\//.test(h[1]))D=v[v.length-1][1],v.length>1&&(v.pop(),v[v.length-1][0][2][D]=e(g[0],g[1],g[2].length?g[2]:void 0));else if(y===C){var b=[h[1],{},[]];g[2].push(b),v.push([b,g[2].length-1])}else if(y===A||0===y&&h[1]===A){for(var x,_="";f<c.length;f++)if(c[f][0]===A)_=r(_,c[f][1]);else{if(0!==c[f][0]||c[f][1]!==A)break;if("object"!==i(c[f][2])||_)_=r(_,c[f][2]);else for(x in c[f][2])c[f][2].hasOwnProperty(x)&&!g[1][x]&&(g[1][x]=c[f][2][x])}c[f][0]===P&&f++;for(var w=f;f<c.length;f++)if(c[f][0]===N||c[f][0]===A)g[1][_]?""===c[f][1]||(g[1][_]=r(g[1][_],c[f][1])):g[1][_]=n(c[f][1]);else{if(0!==c[f][0]||c[f][1]!==N&&c[f][1]!==A){!_.length||g[1][_]||f!==w||c[f][0]!==O&&c[f][0]!==M||(g[1][_]=_.toLowerCase()),c[f][0]===O&&f--;break}g[1][_]?""===c[f][2]||(g[1][_]=r(g[1][_],c[f][2])):g[1][_]=n(c[f][2])}}else if(y===A)g[1][h[1]]=!0;else if(0===y&&h[1]===A)g[1][h[2]]=!0;else if(y===O){if(function(e){return R.test(e)}(g[0])&&v.length){var D=v[v.length-1][1];v.pop(),v[v.length-1][0][2][D]=e(g[0],g[1],g[2].length?g[2]:void 0)}}else if(0===y&&h[1]===k)void 0===h[2]||null===h[2]?h[2]="":h[2]||(h[2]=r("",h[2])),Array.isArray(h[2][0])?g[2].push.apply(g[2],h[2]):g[2].push(h[2]);else if(y===k)g[2].push(h[1]);else if(y!==P&&y!==M)throw new Error("unhandled: "+y)}if(m[2].length>1&&/^\s*$/.test(m[2][0])&&m[2].shift(),m[2].length>2||2===m[2].length&&/\S/.test(m[2][1]))throw new Error("multiple root elements must be wrapped in an enclosing tag");return Array.isArray(m[2][0])&&"string"==typeof m[2][0][0]&&Array.isArray(m[2][0][2])&&(m[2][0]=e(m[2][0][0],m[2][0][1],m[2][0][2])),m[2][0]}}(t,{comments:!0}),e.exports.default=e.exports,e.exports.createElement=t}),H=function(e){return"undefined"!=typeof window?function(){var t=document.createElement("div");return t.innerHTML=e,function(e){return Array.isArray(e)?e:[].slice.call(e)}(t.childNodes)}():function(){var t=new String(e);return t.__encoded=!0,t}()},X=d(['\n  <a href="#" class="m-header-logo__link">\n    ',"\n  </a>\n"],['\n  <a href="#" class="m-header-logo__link">\n    ',"\n  </a>\n"]),J=d(['\n      <img class="m-header-logo__img" src="','" alt="','" />\n    '],['\n      <img class="m-header-logo__img" src="','" alt="','" />\n    ']),Z=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.src,n=e.alt;return B(X,t?B(J,t,void 0===n?"AXA Logo":n):H('<axa-icon id="logo-AXA" classes="m-header-logo__icon"></axa-icon>'))},K=function(e){function t(){return a(this,t),c(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,x,Z))}return u(t,b),l(t,[{key:"connectedCallback",value:function(){(function e(t,n,r){null===t&&(t=Function.prototype);var o=Object.getOwnPropertyDescriptor(t,n);if(void 0===o){var i=Object.getPrototypeOf(t);return null===i?void 0:e(i,n,r)}if("value"in o)return o.value;var a=o.get;if(void 0!==a)return a.call(r)})(t.prototype.__proto__||Object.getPrototypeOf(t.prototype),"connectedCallback",this).call(this),this.className=this.initialClassName+" m-header-logo"}}]),t}();return function(e){var t=0,n=function(){if(0===t)try{e.apply(void 0,arguments),t+=1,document.removeEventListener("DOMContentLoaded"),document.removeEventListener("WebComponentsReady")}catch(e){}};document.addEventListener("DOMContentLoaded",n,!1),document.addEventListener("WebComponentsReady",n,!1)}(function(){window.customElements.define("axa-header-logo",K)}),K}();
