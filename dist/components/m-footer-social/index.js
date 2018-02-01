var StyleGuideWebComponent=function(){"use strict";function e(e,t){return t={exports:{}},e(t,t.exports),t.exports}function t(e,t){if("function"==typeof e.hasAttribute&&!e.hasAttribute(t))return!1;var n=e.value;if(t?n=e.getAttribute(t):t=e.name,n&&t!==n){if(m.test(n))try{n=JSON.parse(n)}catch(t){console.error("Attribute "+e+" has an error:\n"+t+"\n",n)}}else n=!0;return n}function n(e,t,n){var o=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},r=new v(t,s({},o,{detail:n}));e.dispatchEvent(r)}function o(e,t,n,o){function r(){for(var t=0;t<u;++t)e.removeEventListener(c[t],s,a);!function(e,t){if(!e)return!1;for(var n=Object.keys(e),o=n.length,r=0;r<o;++r){var i=n[r];if(e[i]===t)return delete e[i]}}(this,r)}var a=arguments.length>4&&void 0!==arguments[4]&&arguments[4];if(g[t]&&(t=g[t]),!e||!t)return null;var l=void 0===n?"undefined":i(n);"function"===l&&(a=!!o,o=n);for(var s=n&&"string"===l?function(t){for(var r=t.target;!function(e,t){return function(e,t){return new RegExp("^"+e+"$|^"+e+"\\s|\\s"+e+"\\s|\\s"+e+"$",t)}(t).test(e.className)}(r,n)&&r!==e;)r=r.parentNode;if(r!==e)return o(t,r)}:o,c=t.split(y),u=c.length,f=0;f<u;++f)e.addEventListener(c[f],s,a);return r}function r(){return Reflect.construct(HTMLElement,[],this.__proto__.constructor)}var i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},a=(function(){function e(e){this.value=e}function t(t){function n(r,i){try{var a=t[r](i),l=a.value;l instanceof e?Promise.resolve(l.value).then(function(e){n("next",e)},function(e){n("throw",e)}):o(a.done?"return":"normal",a.value)}catch(e){o("throw",e)}}function o(e,t){switch(e){case"return":r.resolve({value:t,done:!0});break;case"throw":r.reject(t);break;default:r.resolve({value:t,done:!1})}(r=r.next)?n(r.key,r.arg):i=null}var r,i;this._invoke=function(e,t){return new Promise(function(o,a){var l={key:e,arg:t,resolve:o,reject:a,next:null};i?i=i.next=l:(r=i=l,n(e,t))})},"function"!=typeof t.return&&(this.return=void 0)}"function"==typeof Symbol&&Symbol.asyncIterator&&(t.prototype[Symbol.asyncIterator]=function(){return this}),t.prototype.next=function(e){return this._invoke("next",e)},t.prototype.throw=function(e){return this._invoke("throw",e)},t.prototype.return=function(e){return this._invoke("return",e)}}(),function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}),l=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},c=function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)},u=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t},f=function(){return function(e,t){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return function(e,t){var n=[],o=!0,r=!1,i=void 0;try{for(var a,l=e[Symbol.iterator]();!(o=(a=l.next()).done)&&(n.push(a.value),!t||n.length!==t);o=!0);}catch(e){r=!0,i=e}finally{try{!o&&l.return&&l.return()}finally{if(r)throw i}}return n}(e,t);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),p=function(e,t){return Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))},h=function(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}return Array.from(e)},d=e(function(e){!function(){function t(){for(var e=[],o=0;o<arguments.length;o++){var r=arguments[o];if(r){var a=void 0===r?"undefined":i(r);if("string"===a||"number"===a)e.push(r);else if(Array.isArray(r))e.push(t.apply(null,r));else if("object"===a)for(var l in r)n.call(r,l)&&r[l]&&e.push(l)}}return e.join(" ")}var n={}.hasOwnProperty;e.exports?e.exports=t:window.classNames=t}()}),m=/^\s*(?:true|false|null|undefined|-?[0-9]+\.?[0-9]*|[[{](?:.|[\r\n])*[\]}])\s*$/,v=function(){function e(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=t.bubbles,o=void 0!==n&&n,r=t.cancelable,i=void 0!==r&&r,a=t.detail,l=void 0===a?void 0:a,s=document.createEvent("CustomEvent");s.initCustomEvent(e,o,i,l);var c=s.preventDefault;return s.preventDefault=function(){c.call(s);try{Object.defineProperty(this,"defaultPrevented",{get:function(){return!0}})}catch(e){this.defaultPrevented=!0}},s}try{var t=new window.CustomEvent("test");if(t.preventDefault(),!0!==t.defaultPrevented)throw new Error("Could not prevent default");return window.CustomEvent}catch(e){}return e}(),y=/\s+/,g={transitionend:function(){for(var e=document.createElement("div").style,t={transition:"transitionend",OTransition:"oTransitionEnd otransitionend",MozTransition:"transitionend",WebkitTransition:"webkitTransitionEnd"},n=Object.keys(t),o=n.length,r=void 0,i=0;i<o;++i)if(r=n[i],void 0!==e[r])return t[r];return null}()},x={};o(document,"pubsub/onsubscribe",function(e){var t=e.detail;x[t]||(x[t]={count:0});var o=x[t],r=o.queue;Array.isArray(r)&&(r.forEach(function(e){var t=f(e,3),o=t[0],r=t[1];n(t[2],o,r)}),delete o.queue)}),Object.setPrototypeOf(r.prototype,HTMLElement.prototype),Object.setPrototypeOf(r,HTMLElement);var b={},_=function(e){function i(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments[1];a(this,i);var n=u(this,(i.__proto__||Object.getPrototypeOf(i)).call(this));return n._makeContextReady=n._makeContextReady.bind(n),n._initialise(e,t),n}return c(i,r),l(i,[{key:"_initialise",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;this.initialClassName=this.className,this._styles=e,this._template=t}},{key:"connectedCallback",value:function(){this._appendStyles(),this.render(),this.contextCallback&&this._makeContextReady()}},{key:"disconnectedCallback",value:function(){this.unContextEnabled&&this.unContextEnabled()}},{key:"_appendStyles",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this;if(this._styles){var t=document.createElement("style"),n=document.createTextNode(this._styles);t.appendChild(n),e.insertAdjacentElement?e.insertAdjacentElement("afterbegin",t):e.appendChild(t)}}},{key:"render",value:function(){var e=this;if(!this._hasRendered){var n=this._template;if(n)try{for(var o=document.createDocumentFragment();this.firstChild;)o.appendChild(this.firstChild);var r=n(function(e){if(!e.hasAttributes)return null;for(var n={},o=e.attributes,r=o.length,i=0;i<r;++i){var a=o[i];n[a.name]=t(a)}return n}(this),o);if(Array.isArray(r))r.forEach(function(t){e.appendChild(t)});else if(r){if("string"==typeof r){var i=new Error("throwed");throw console.error("\n%cWeb Component %c"+this.nodeName+"%c does not accept string as a return from a template. Maybe use bel?\n\nStack Trace: "+i.stack+"\n","color: #580000; font-size: 14px; line-height:16px;","background: #8b0000; color: #FFF; font-size: 14px; line-height:16px;","color: #580000; font-size: 14px; line-height:16px;"),i}this.appendChild(r)}this._hasRendered=!0}catch(i){"throwed"!==i.message&&console.error("\n%cWeb Component %c"+this.nodeName+"%c has an error while loading its template:\n"+i+"\n\nStack Trace: "+i.stack+"\n","color: #580000; font-size: 14px; line-height:16px;","background: #8b0000; color: #FFF; font-size: 14px; line-height:16px;","color: #580000; font-size: 14px; line-height:16px;")}}}},{key:"enableContext",value:function(){var e=this.nodeName.toLowerCase();this.__isContext=!0,this.__contextName=e,function(e,t){var o=arguments.length>2&&void 0!==arguments[2]?arguments[2]:document;x[e]||(x[e]={count:0,queue:[]});var r=x[e].queue;Array.isArray(r)?r.push([e,t,o]):n(o,e,t)}("context/enabled",e)}},{key:"selectContext",value:function(e){this.__selectedContext=e.toLowerCase()}},{key:"_makeContextReady",value:function(){var e=this,t=(arguments.length>0&&void 0!==arguments[0]?arguments[0]:{}).detail;this.contextNode&&(clearTimeout(this.timeoutId),this.timeoutId=setTimeout(function(){e.contextCallback(e.contextNode,t)},10)),this.unContextEnabled&&this.unContextEnabled(),this.unContextEnabled=function(e,t){var r=o(arguments.length>2&&void 0!==arguments[2]?arguments[2]:document,e,t);x[e]||(x[e]={count:0});var i=x[e];return i.count++,i.onsubscribe||(i.onsubscribe=function(e){function t(){for(var t=arguments.length,o=Array(t),i=0;i<t;i++)o[i]=arguments[i];return p=o,g&&(d&&clearTimeout(d),d=setTimeout(function(){m&&clearTimeout(m),n()},r)),x&&!m&&(m=setTimeout(function(){d&&clearTimeout(d),n()},f)),l&&!y&&(y=!0,v=e.apply(void 0,h(p))),v}function n(){c&&(v=e.apply(void 0,h(p))),d=null,m=null,y=!1}function o(){d&&(clearTimeout(d),d=null),m&&(clearTimeout(m),m=null),p=void 0,y=!1}var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},a=i.leading,l=void 0!==a&&a,s=i.trailing,c=void 0===s||s,u=i.maxWait,f=void 0!==u&&u,p=void 0,d=void 0,m=void 0,v=void 0,y=!1,g=r!==f,x=!1!==f;return t.flush=function(){return(d||m)&&(v=e.apply(void 0,h(p))),o(),v},t.cancel=o,t}(function(e){return function(){n(document,"pubsub/onsubscribe",e),n(document,"pubsub/onsubscribe/"+e,e),x[e]&&delete x[e].unsubscribe}}(e),100)),i.onsubscribe(),function(){i.count--,r.call(this),i.count<=0&&delete x[e]}}("context/enabled",this._makeContextReady)}},{key:"contextNode",get:function(){for(var e=this.__selectedContext,t=this.parentNode;t&&(!t.__isContext||e&&e!==t.__contextName);)t=t.parentNode;return!(!t||!t.__isContext)&&t}}],[{key:"uuidv4",value:function(){return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,function(e){var t=16*Math.random()|0;return("x"==e?t:3&t|8).toString(16)})}}]),i}(),w=(function(e){function t(){return a(this,t),u(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}c(t,_),l(t,[{key:"connectedCallback",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"open",t=this.attachShadow({mode:e});this._appendStyles(t),this.render()}}])}(),function(e){function t(){return a(this,t),u(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return c(t,_),l(t,[{key:"_appendStyles",value:function(){t.appendGlobalStyles(this._styles,this.nodeName)}}],[{key:"appendGlobalStyles",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:_.uuidv4();if(e&&!b[e]){var n=document.createElement("style"),o=document.createTextNode(e);n.appendChild(o),n.setAttribute("data-c-name",t.toLowerCase()),document.querySelector("head").appendChild(n),b[e]=!0}}}]),t}()),k=".m-footer-social {\n  padding-right: 15px;\n  padding-left: 15px;\n  position: relative;\n  width: 100%;\n  min-height: 1px;\n  max-width: 33.33333%;\n  -webkit-box-flex: 0;\n      -ms-flex: 0 0 33.33333%;\n          flex: 0 0 33.33333%;\n  display: block; }\n  .m-footer-social:first-child:last-child {\n    position: static;\n    width: auto;\n    max-width: none;\n    -webkit-box-flex: 1;\n        -ms-flex: auto;\n            flex: auto;\n    -webkit-box-flex: 0;\n        -ms-flex: 0 1 auto;\n            flex: 0 1 auto; }\n  @media (max-width: 991px) {\n    .m-footer-social {\n      position: static;\n      width: auto;\n      max-width: none;\n      -webkit-box-flex: 1;\n          -ms-flex: auto;\n              flex: auto;\n      margin-bottom: -10px; }\n      .m-footer-social:first-child {\n        margin-bottom: 0; } }\n  @media (max-width: 575px) {\n    .m-footer-social {\n      padding: 25px 30px;\n      margin-bottom: 0; } }\n\n.m-footer-social__title {\n  /* Adds a hyphen where the word breaks, if supported (No Blink) */\n  -webkit-hyphens: auto;\n      -ms-hyphens: auto;\n          hyphens: auto;\n  /* These are technically the same, but use both */\n  overflow-wrap: break-word;\n  word-wrap: break-word;\n  font-size: 14px;\n  font-weight: 700;\n  line-height: 1.5;\n  letter-spacing: 0.02em;\n  color: #fff;\n  text-transform: uppercase; }\n  @media (min-width: 576px) {\n    .m-footer-social__title {\n      font-size: 16px; } }\n  @media (max-width: 991px) {\n    .m-footer-social__title {\n      display: none !important; } }\n\n.m-footer-social__list {\n  padding: 0;\n  margin: 0;\n  list-style-type: none;\n  *zoom: 1;\n  margin: 15px -10px 0 -10px; }\n  .m-footer-social__list::before, .m-footer-social__list::after {\n    display: table;\n    content: \" \"; }\n  .m-footer-social__list::after {\n    clear: both; }\n  .m-footer-social__list:first-child {\n    margin-top: 0; }\n  @media (max-width: 991px) {\n    .m-footer-social__list {\n      margin-top: 25px; } }\n  @media (max-width: 575px) {\n    .m-footer-social__list {\n      margin: -10px; } }\n\n.m-footer-social__list-item {\n  display: block;\n  float: left;\n  margin-right: 10px; }\n  .m-footer-social__list-item:last-child {\n    margin-right: 0; }\n\n.m-footer-social__link {\n  display: block;\n  padding: 10px; }\n\n.m-footer-social__icon {\n  width: 25px;\n  height: 25px;\n  display: block;\n  fill: currentColor;\n  color: #fff; }\n\n.m-footer-social--inline .m-footer-social__box {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center; }\n\n.m-footer-social--inline .m-footer-social__title {\n  display: block;\n  margin-right: 20px; }\n  .m-footer-social--inline .m-footer-social__title::after {\n    content: ':'; }\n\n.m-footer-social--inline .m-footer-social__list {\n  margin-top: 0; }\n\n.m-footer-social--light {\n  position: static;\n  width: auto;\n  max-width: none;\n  -webkit-box-flex: 1;\n      -ms-flex: auto;\n          flex: auto; }\n  .m-footer-social--light .m-footer-social__title {\n    font-size: 12px;\n    font-weight: 700;\n    line-height: 1.5;\n    letter-spacing: 0.02em; }\n    @media (min-width: 576px) {\n      .m-footer-social--light .m-footer-social__title {\n        font-size: 14px;\n        line-height: 1.21; } }\n  .m-footer-social--light .m-footer-social__icon {\n    width: 20px;\n    height: 20px; }\n",C=function(e){return function(t,n,o){for(var r in n)r in O&&(n[O[r]]=n[r],delete n[r]);return e(t,n,o)}},O={class:"className",for:"htmlFor","http-equiv":"httpEquiv"},E=1,A=2,S=3,T=4,N=5,j=6,L=7,P=8,F=9,M=10,R=11,z=12,D=13,G=RegExp("^("+["area","base","basefont","bgsound","br","col","command","embed","frame","hr","img","input","isindex","keygen","link","meta","param","source","track","wbr","!--","animate","animateTransform","circle","cursor","desc","ellipse","feBlend","feColorMatrix","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feDistantLight","feFlood","feFuncA","feFuncB","feFuncG","feFuncR","feGaussianBlur","feImage","feMergeNode","feMorphology","feOffset","fePointLight","feSpecularLighting","feSpotLight","feTile","feTurbulence","font-face-format","font-face-name","font-face-uri","glyph","glyphRef","hkern","image","line","missing-glyph","mpath","path","polygon","polyline","rect","set","stop","tref","use","view","vkern"].join("|")+")(?:[.#][a-zA-Z0-9-￿_:-]+)*$"),$=/\n[\s]+$/,q=/^\n[\s]+/,V=/[\s]+$/,I=/^[\s]+/,B=/[\n\s]+/g,W=["a","abbr","b","bdi","bdo","br","cite","data","dfn","em","i","kbd","mark","q","rp","rt","rtc","ruby","s","amp","small","span","strong","sub","sup","time","u","var","wbr"],H=["code","pre"],J=function e(t,n){if(Array.isArray(n))for(var o,r,i=t.nodeName.toLowerCase(),a=!1,l=0,s=n.length;l<s;l++){var c=n[l];if(Array.isArray(c))e(t,c);else{("number"==typeof c||"boolean"==typeof c||"function"==typeof c||c instanceof Date||c instanceof RegExp)&&(c=c.toString());var u=t.childNodes[t.childNodes.length-1];if("string"==typeof c)a=!0,u&&"#text"===u.nodeName?u.nodeValue+=c:(c=document.createTextNode(c),t.appendChild(c),u=c),l===s-1&&(a=!1,-1===W.indexOf(i)&&-1===H.indexOf(i)?""===(o=u.nodeValue.replace(q,"").replace(V,"").replace($,"").replace(B," "))?t.removeChild(u):u.nodeValue=o:-1===H.indexOf(i)&&(r=0===l?"":" ",o=u.nodeValue.replace(q,r).replace(I," ").replace(V,"").replace($,"").replace(B," "),u.nodeValue=o));else if(c&&c.nodeType){a&&(a=!1,-1===W.indexOf(i)&&-1===H.indexOf(i)?""===(o=u.nodeValue.replace(q,"").replace($,"").replace(B," "))?t.removeChild(u):u.nodeValue=o:-1===H.indexOf(i)&&(o=u.nodeValue.replace(I," ").replace(q,"").replace($,"").replace(B," "),u.nodeValue=o));var f=c.nodeName;f&&(i=f.toLowerCase()),t.appendChild(c)}}}},Z=e(function(e){function t(e,t,i){var s;-1!==l.indexOf(e)&&(t.namespace=n);var c=!1;if(t.namespace&&(c=t.namespace,delete t.namespace),c)s=document.createElementNS(c,e);else{if(e===a)return document.createComment(t.comment);s=document.createElement(e)}for(var u in t)if(t.hasOwnProperty(u)){var f=u.toLowerCase(),p=t[u];if("classname"===f&&(f="class",u="class"),"htmlFor"===u&&(u="for"),-1!==r.indexOf(f))if("true"===p)p=f;else if("false"===p)continue;"on"===f.slice(0,2)?s[u]=p:c?"xlink:href"===u?s.setAttributeNS(o,u,p):/^xmlns($|:)/i.test(u)||s.setAttributeNS(null,u,p):s.setAttribute(u,p)}return J(s,i),s}var n="http://www.w3.org/2000/svg",o="http://www.w3.org/1999/xlink",r=["autofocus","checked","defaultchecked","disabled","formnovalidate","indeterminate","readonly","required","selected","willvalidate"],a="!--",l=["svg","altGlyph","altGlyphDef","altGlyphItem","animate","animateColor","animateMotion","animateTransform","circle","clipPath","color-profile","cursor","defs","desc","ellipse","feBlend","feColorMatrix","feComponentTransfer","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feDistantLight","feFlood","feFuncA","feFuncB","feFuncG","feFuncR","feGaussianBlur","feImage","feMerge","feMergeNode","feMorphology","feOffset","fePointLight","feSpecularLighting","feSpotLight","feTile","feTurbulence","filter","font","font-face","font-face-format","font-face-name","font-face-src","font-face-uri","foreignObject","g","glyph","glyphRef","hkern","image","line","linearGradient","marker","mask","metadata","missing-glyph","mpath","path","pattern","polygon","polyline","radialGradient","rect","set","stop","switch","symbol","text","textPath","title","tref","tspan","use","view","vkern"];e.exports=function(e,t){function n(e){return"function"==typeof e?e:"string"==typeof e?e:e&&"object"===(void 0===e?"undefined":i(e))?e:o("",e)}t||(t={});var o=t.concat||function(e,t){return String(e)+String(t)};return!1!==t.attrToProp&&(e=C(e)),function(r){function a(e){var n=[];l===L&&(l=T);for(var o=0;o<e.length;o++){var r=e.charAt(o);l===E&&"<"===r?(s.length&&n.push([E,s]),s="",l=A):">"!==r||function(e){return e===F||e===M}(l)||l===D?l===D&&/-$/.test(s)&&"-"===r?(t.comments&&n.push([P,s.substr(0,s.length-1)],[S]),s="",l=E):l===A&&/^!--$/.test(s)?(t.comments&&n.push([A,s],[N,"comment"],[R]),s=r,l=D):l===E||l===D?s+=r:l===A&&/\s/.test(r)?(n.push([A,s]),s="",l=T):l===A?s+=r:l===T&&/[^\s"'=/]/.test(r)?(l=N,s=r):l===T&&/\s/.test(r)?(s.length&&n.push([N,s]),n.push([z])):l===N&&/\s/.test(r)?(n.push([N,s]),s="",l=j):l===N&&"="===r?(n.push([N,s],[R]),s="",l=L):l===N?s+=r:l!==j&&l!==T||"="!==r?l!==j&&l!==T||/\s/.test(r)?l===L&&'"'===r?l=M:l===L&&"'"===r?l=F:l===M&&'"'===r?(n.push([P,s],[z]),s="",l=T):l===F&&"'"===r?(n.push([P,s],[z]),s="",l=T):l!==L||/\s/.test(r)?l===P&&/\s/.test(r)?(n.push([P,s],[z]),s="",l=T):l!==P&&l!==F&&l!==M||(s+=r):(l=P,o--):(n.push([z]),/[\w-]/.test(r)?(s+=r,l=N):l=T):(n.push([R]),l=L):(l===A?n.push([A,s]):l===N?n.push([N,s]):l===P&&s.length&&n.push([P,s]),n.push([S]),s="",l=E)}return l===E&&s.length?(n.push([E,s]),s=""):l===P&&s.length?(n.push([P,s]),s=""):l===M&&s.length?(n.push([P,s]),s=""):l===F&&s.length?(n.push([P,s]),s=""):l===N&&(n.push([N,s]),s=""),n}for(var l=E,s="",c=arguments.length,u=[],f=0;f<r.length;f++)if(f<c-1){var p=arguments[f+1],h=a(r[f]),d=l;d===M&&(d=P),d===F&&(d=P),d===L&&(d=P),d===T&&(d=N),h.push([0,d,p]),u.push.apply(u,h)}else u.push.apply(u,a(r[f]));for(var m=[null,{},[]],v=[[m,-1]],f=0;f<u.length;f++){var y=v[v.length-1][0],g=(h=u[f])[0];if(g===A&&/^\//.test(h[1]))k=v[v.length-1][1],v.length>1&&(v.pop(),v[v.length-1][0][2][k]=e(y[0],y[1],y[2].length?y[2]:void 0));else if(g===A){var x=[h[1],{},[]];y[2].push(x),v.push([x,y[2].length-1])}else if(g===N||0===g&&h[1]===N){for(var b,_="";f<u.length;f++)if(u[f][0]===N)_=o(_,u[f][1]);else{if(0!==u[f][0]||u[f][1]!==N)break;if("object"!==i(u[f][2])||_)_=o(_,u[f][2]);else for(b in u[f][2])u[f][2].hasOwnProperty(b)&&!y[1][b]&&(y[1][b]=u[f][2][b])}u[f][0]===R&&f++;for(var w=f;f<u.length;f++)if(u[f][0]===P||u[f][0]===N)y[1][_]?""===u[f][1]||(y[1][_]=o(y[1][_],u[f][1])):y[1][_]=n(u[f][1]);else{if(0!==u[f][0]||u[f][1]!==P&&u[f][1]!==N){!_.length||y[1][_]||f!==w||u[f][0]!==S&&u[f][0]!==z||(y[1][_]=_.toLowerCase()),u[f][0]===S&&f--;break}y[1][_]?""===u[f][2]||(y[1][_]=o(y[1][_],u[f][2])):y[1][_]=n(u[f][2])}}else if(g===N)y[1][h[1]]=!0;else if(0===g&&h[1]===N)y[1][h[2]]=!0;else if(g===S){if(function(e){return G.test(e)}(y[0])&&v.length){var k=v[v.length-1][1];v.pop(),v[v.length-1][0][2][k]=e(y[0],y[1],y[2].length?y[2]:void 0)}}else if(0===g&&h[1]===E)void 0===h[2]||null===h[2]?h[2]="":h[2]||(h[2]=o("",h[2])),Array.isArray(h[2][0])?y[2].push.apply(y[2],h[2]):y[2].push(h[2]);else if(g===E)y[2].push(h[1]);else if(g!==R&&g!==z)throw new Error("unhandled: "+g)}if(m[2].length>1&&/^\s*$/.test(m[2][0])&&m[2].shift(),m[2].length>2||2===m[2].length&&/\S/.test(m[2][1]))throw new Error("multiple root elements must be wrapped in an enclosing tag");return Array.isArray(m[2][0])&&"string"==typeof m[2][0][0]&&Array.isArray(m[2][0][2])&&(m[2][0]=e(m[2][0][0],m[2][0][1],m[2][0][2])),m[2][0]}}(t,{comments:!0}),e.exports.default=e.exports,e.exports.createElement=t}),K=p(['<aside class="m-footer-social__box">\n    ','\n\n    <ul class="m-footer-social__list">\n      ',"\n    </ul>\n  </aside>"],['<aside class="m-footer-social__box">\n    ','\n\n    <ul class="m-footer-social__list">\n      ',"\n    </ul>\n  </aside>"]),Q=p(['<strong class="m-footer-social__title">',"</strong>"],['<strong class="m-footer-social__title">',"</strong>"]),U=p(['\n        <li class="m-footer-social__list-item">\n          <a href="','" class="m-footer-social__link">\n            <axa-icon id="','" classes="m-footer-social__icon"></axa-icon>\n          </a>\n        </li>\n      '],['\n        <li class="m-footer-social__list-item">\n          <a href="','" class="m-footer-social__link">\n            <axa-icon id="','" classes="m-footer-social__icon"></axa-icon>\n          </a>\n        </li>\n      ']),X=function(e){var t=e.title,n=e.items;return Z(K,t&&Z(Q,t),n.map(function(e){var t=e.name,n=e.url;return Z(U,n,t)}))},Y=function(e){function n(){return a(this,n),u(this,(n.__proto__||Object.getPrototypeOf(n)).call(this,k,X))}return c(n,w),l(n,[{key:"connectedCallback",value:function(){(function e(t,n,o){null===t&&(t=Function.prototype);var r=Object.getOwnPropertyDescriptor(t,n);if(void 0===r){var i=Object.getPrototypeOf(t);return null===i?void 0:e(i,n,o)}if("value"in r)return r.value;var a=r.get;if(void 0!==a)return a.call(o)})(n.prototype.__proto__||Object.getPrototypeOf(n.prototype),"connectedCallback",this).call(this);var e=t(this,"inline"),o=t(this,"light");this.className=d(this.initialClassName,"m-footer-social",{"m-footer-social--inline":e,"m-footer-social--light":o})}}]),n}();return function(e){var t=0,n=function(){if(0===t)try{e.apply(void 0,arguments),t+=1,document.removeEventListener("DOMContentLoaded"),document.removeEventListener("WebComponentsReady")}catch(e){}};document.addEventListener("DOMContentLoaded",n,!1),document.addEventListener("WebComponentsReady",n,!1)}(function(){window.customElements.define("axa-footer-social",Y)}),Y}();
