var StyleGuideWebComponent=function(){"use strict";function e(e,t){return e(t={exports:{}},t.exports),t.exports}var t=Object.getOwnPropertySymbols,n=Object.prototype.hasOwnProperty,o=Object.prototype.propertyIsEnumerable;(function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},n=0;n<10;n++)t["_"+String.fromCharCode(n)]=n;if("0123456789"!==Object.getOwnPropertyNames(t).map(function(e){return t[e]}).join(""))return!1;var o={};return"abcdefghijklmnopqrst".split("").forEach(function(e){o[e]=e}),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},o)).join("")}catch(e){return!1}})()&&Object.assign;var r="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},a=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")},s=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},c=function e(t,n,o){null===t&&(t=Function.prototype);var r=Object.getOwnPropertyDescriptor(t,n);if(void 0===r){var i=Object.getPrototypeOf(t);return null===i?void 0:e(i,n,o)}if("value"in r)return r.value;var a=r.get;return void 0!==a?a.call(o):void 0},u=function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)},d=function(e,t){var n={};for(var o in e)t.indexOf(o)>=0||Object.prototype.hasOwnProperty.call(e,o)&&(n[o]=e[o]);return n},p=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t},h=function e(t,n,o,r){var i=Object.getOwnPropertyDescriptor(t,n);if(void 0===i){var a=Object.getPrototypeOf(t);null!==a&&e(a,n,o,r)}else if("value"in i&&i.writable)i.value=o;else{var s=i.set;void 0!==s&&s.call(r,o)}return o},f=function(){return function(e,t){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return function(e,t){var n=[],o=!0,r=!1,i=void 0;try{for(var a,s=e[Symbol.iterator]();!(o=(a=s.next()).done)&&(n.push(a.value),!t||n.length!==t);o=!0);}catch(e){r=!0,i=e}finally{try{!o&&s.return&&s.return()}finally{if(r)throw i}}return n}(e,t);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),v=function(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}return Array.from(e)};function b(){}function m(e,t){return"function"==typeof e[t]&&(e[t]=function(e){return(!(arguments.length>1&&void 0!==arguments[1])||arguments[1])&&Object.keys(e).reduce(m,e),function(){return e.apply(void 0,arguments)}}(e[t],!1)),e}var y=e(function(e){e.exports=function(){function e(e,t,n,o,i,a){if(a!==r){var s=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw s.name="Invariant Violation",s}}function t(){return e}e.isRequired=e;var n={array:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t};return n.checkPropTypes=b,n.PropTypes=n,n}()});Object.keys(y).reduce(m,y);var _=y.oneOf(["left","center","right"]),g=y.oneOfType([y.string,y.number]),k=y.oneOfType([y.arrayOf(E),y.shape({cells:y.arrayOf(E)})]),C=y.oneOfType([y.arrayOf(j),y.shape({cells:y.arrayOf(j),action:y.bool})]),O=y.oneOfType([y.arrayOf(P),y.shape({cells:y.arrayOf(P)})]),x=(y.oneOf(["row","col","rowgroup","colgroup","auto"]),y.oneOfType([y.arrayOf(E),y.arrayOf(k)]),y.oneOfType([y.arrayOf(j),y.arrayOf(C)]),y.oneOfType([y.arrayOf(P),y.arrayOf(O)]),y.oneOf(["up","down"])),w=y.oneOf(["left","right"]),N=y.oneOf(["ok","pending","error","unknown"]),A={text:g,value:y.any,rowspan:y.number,colspan:y.number,scope:null,align:_,dense:y.bool},T=y.oneOfType([y.string,y.number,y.shape(A)]),E=y.oneOfType([T,y.shape(l({},A,{sort:x,sortActive:y.bool}))]),j=y.oneOfType([T,y.shape(l({},A,{float:w,action:y.bool,strong:y.bool,bold:y.bool,state:N}))]),P=y.oneOfType([T,y.shape(l({},A,{float:w}))]);function S(e){function t(t,n,o){return null==t[n]?null:e(t,n,o)}return t.isRequired=e,t}var R=/^[a-z]{2,4}(-([A-Z][a-z]{3}|[0-9]{3}))?(-([A-Z]{2}|[0-9]{3}))?$/;S(function(e,t,n){if(!R.test(e[t]))return new Error("Invalid prop `"+t+"` supplied to `"+n+"`, expected a valid locale.")});y.oneOf(["top","bottom"]);var D=S(function(e,t,n){try{new window.URL(e[t],function(){if(document.baseURI)return document.baseURI;var e=document.getElementsByName("base");return e.length&&e[0].href?e[0].href:window.location.href}())}catch(e){return new Error("Invalid prop `"+t+"` supplied to `"+n+"`, expected a valid URL. "+e.message)}return null}),L=e(function(e){!function(){var t={}.hasOwnProperty;function n(){for(var e=[],o=0;o<arguments.length;o++){var r=arguments[o];if(r){var a=void 0===r?"undefined":i(r);if("string"===a||"number"===a)e.push(r);else if(Array.isArray(r))e.push(n.apply(null,r));else if("object"===a)for(var s in r)t.call(r,s)&&r[s]&&e.push(s)}}return e.join(" ")}e.exports?e.exports=n:window.classNames=n}()}),U="@-webkit-keyframes fadeOutRightInLeft {\n  0% {\n    opacity: 1; }\n  50% {\n    opacity: 0;\n    -webkit-transform: translate3d(100%, 0, 0);\n            transform: translate3d(100%, 0, 0); }\n  51% {\n    opacity: 0;\n    -webkit-transform: translate3d(-100%, 0, 0);\n            transform: translate3d(-100%, 0, 0); }\n  100% {\n    opacity: 1;\n    -webkit-transform: none;\n            transform: none; } }\n\n@keyframes fadeOutRightInLeft {\n  0% {\n    opacity: 1; }\n  50% {\n    opacity: 0;\n    -webkit-transform: translate3d(100%, 0, 0);\n            transform: translate3d(100%, 0, 0); }\n  51% {\n    opacity: 0;\n    -webkit-transform: translate3d(-100%, 0, 0);\n            transform: translate3d(-100%, 0, 0); }\n  100% {\n    opacity: 1;\n    -webkit-transform: none;\n            transform: none; } }\n\n.m-header-mobile-navigation {\n  display: block;\n  text-align: left; }\n  .m-header-mobile-navigation:first-child {\n    margin-top: -20px; }\n\n.m-header-mobile-navigation--relative {\n  position: relative;\n  overflow: hidden; }\n\n.m-header-mobile-navigation__nav {\n  display: block;\n  background: #fff; }\n  .m-header-mobile-navigation__nav .m-header-mobile-navigation__nav {\n    position: absolute;\n    left: 0;\n    right: 0;\n    top: 0;\n    z-index: 1050;\n    min-height: 100%;\n    -webkit-transform: translateX(110%);\n            transform: translateX(110%);\n    -webkit-transition: -webkit-transform 0.2s ease;\n    transition: -webkit-transform 0.2s ease;\n    transition: transform 0.2s ease;\n    transition: transform 0.2s ease, -webkit-transform 0.2s ease; }\n    @media (min-width: 576px) {\n      .m-header-mobile-navigation__nav .m-header-mobile-navigation__nav {\n        left: 10px;\n        -webkit-box-shadow: -5px 0 10px -5px rgba(0, 0, 0, 0.3);\n                box-shadow: -5px 0 10px -5px rgba(0, 0, 0, 0.3); } }\n  .is-header-mobile-navigation-nav-open > .m-header-mobile-navigation__nav {\n    -webkit-transform: translateX(0);\n            transform: translateX(0); }\n\n.m-header-mobile-navigation--gpu .m-header-mobile-navigation__nav .m-header-mobile-navigation--gpu .m-header-mobile-navigation__nav {\n  -webkit-transform: translate3d(0, 0, 0);\n          transform: translate3d(0, 0, 0);\n  -webkit-backface-visibility: hidden;\n          backface-visibility: hidden;\n  -webkit-transform: translate3d(110%, 0, 0);\n          transform: translate3d(110%, 0, 0); }\n\n.is-header-mobile-navigation-nav-open > .m-header-mobile-navigation--gpu .m-header-mobile-navigation__nav {\n  -webkit-transform: translate3d(0, 0, 0);\n          transform: translate3d(0, 0, 0); }\n\n.m-header-mobile-navigation__list {\n  padding: 0;\n  margin: 0;\n  list-style-type: none; }\n\n.m-header-mobile-navigation__list-item {\n  display: block;\n  border-bottom: 1px solid #ccc; }\n  .m-header-mobile-navigation__list-item:first-child {\n    border-top: 1px solid #ccc; }\n\n.m-header-mobile-navigation__category,\n.m-header-mobile-navigation__back,\n.m-header-mobile-navigation__list-link {\n  padding-right: 15px;\n  padding-left: 15px;\n  width: 100%;\n  margin-right: auto;\n  margin-left: auto;\n  /* Adds a hyphen where the word breaks, if supported (No Blink) */\n  -webkit-hyphens: auto;\n      -ms-hyphens: auto;\n          hyphens: auto;\n  /* These are technically the same, but use both */\n  overflow-wrap: break-word;\n  word-wrap: break-word;\n  color: #00008f;\n  cursor: pointer;\n  position: relative;\n  display: block;\n  padding-left: 60px;\n  padding-right: 40px;\n  text-transform: uppercase; }\n  .m-header-mobile-navigation__category.is-header-mobile-navigation-active, .m-header-mobile-navigation__category:hover, .m-header-mobile-navigation__category:active, .m-header-mobile-navigation__category:focus,\n  .m-header-mobile-navigation__back.is-header-mobile-navigation-active,\n  .m-header-mobile-navigation__back:hover,\n  .m-header-mobile-navigation__back:active,\n  .m-header-mobile-navigation__back:focus,\n  .m-header-mobile-navigation__list-link.is-header-mobile-navigation-active,\n  .m-header-mobile-navigation__list-link:hover,\n  .m-header-mobile-navigation__list-link:active,\n  .m-header-mobile-navigation__list-link:focus {\n    color: #00005b; }\n\n.m-header-mobile-navigation__category,\n.m-header-mobile-navigation__back {\n  background: transparent;\n  border: none;\n  background: transparent;\n  text-align: left; }\n  .m-header-mobile-navigation__category:hover, .m-header-mobile-navigation__category:active, .m-header-mobile-navigation__category:focus,\n  .m-header-mobile-navigation__back:hover,\n  .m-header-mobile-navigation__back:active,\n  .m-header-mobile-navigation__back:focus {\n    outline: none;\n    cursor: pointer; }\n\n.m-header-mobile-navigation__category,\n.m-header-mobile-navigation__list-link {\n  font-size: 14px;\n  font-weight: 600;\n  line-height: 1.5;\n  letter-spacing: 0.02em;\n  padding-top: 20px;\n  padding-bottom: 20px; }\n  @media (min-width: 576px) {\n    .m-header-mobile-navigation__category,\n    .m-header-mobile-navigation__list-link {\n      font-size: 16px; } }\n\n.m-header-mobile-navigation__category {\n  padding-right: 70px; }\n\n.m-header-mobile-navigation__back {\n  font-size: 20px;\n  font-weight: 700;\n  line-height: 1.5;\n  letter-spacing: 0;\n  padding-top: 30px;\n  padding-bottom: 30px;\n  padding-left: 105px; }\n  @media (min-width: 576px) {\n    .m-header-mobile-navigation__back {\n      font-size: 24px;\n      line-height: 1.2; } }\n\n.m-header-mobile-navigation__icon-next,\n.m-header-mobile-navigation__icon-back {\n  width: 15px;\n  height: 15px;\n  display: block;\n  fill: currentColor;\n  position: absolute;\n  top: 50%;\n  margin-top: -7.5px;\n  pointer-events: none; }\n\n.m-header-mobile-navigation__icon-next {\n  right: 40px;\n  -webkit-transform: rotate(-90deg);\n          transform: rotate(-90deg); }\n\n.m-header-mobile-navigation__icon-back {\n  left: 60px;\n  -webkit-transform: rotate(90deg);\n          transform: rotate(90deg); }\n",M=/\n[\s]+$/,I=/^\n[\s]+/,V=/[\s]+$/,F=/^[\s]+/,q=/[\n\s]+/g,B=["a","abbr","b","bdi","bdo","br","cite","data","dfn","em","i","kbd","mark","q","rp","rt","rtc","ruby","s","amp","small","span","strong","sub","sup","time","u","var","wbr"],K=["code","pre","textarea"],z=function e(t,n){if(Array.isArray(n))for(var o,r,i=t.nodeName.toLowerCase(),a=!1,s=0,l=n.length;s<l;s++){var c=n[s];if(Array.isArray(c))e(t,c);else{("number"==typeof c||"boolean"==typeof c||"function"==typeof c||c instanceof Date||c instanceof RegExp)&&(c=c.toString());var u=t.childNodes[t.childNodes.length-1];if("string"==typeof c)a=!0,u&&"#text"===u.nodeName?u.nodeValue+=c:(c=document.createTextNode(c),t.appendChild(c),u=c),s===l-1&&(a=!1,-1===B.indexOf(i)&&-1===K.indexOf(i)?""===(o=u.nodeValue.replace(I,"").replace(V,"").replace(M,"").replace(q," "))?t.removeChild(u):u.nodeValue=o:-1===K.indexOf(i)&&(r=0===s?"":" ",o=u.nodeValue.replace(I,r).replace(F," ").replace(V,"").replace(M,"").replace(q," "),u.nodeValue=o));else if(c&&c.nodeType){a&&(a=!1,-1===B.indexOf(i)&&-1===K.indexOf(i)?""===(o=u.nodeValue.replace(I,"").replace(M,"").replace(q," "))?t.removeChild(u):u.nodeValue=o:-1===K.indexOf(i)&&(o=u.nodeValue.replace(F," ").replace(I,"").replace(M,"").replace(q," "),u.nodeValue=o));var d=c.nodeName;d&&(i=d.toLowerCase()),t.appendChild(c)}}}};function H(e){var t,n,o,r,i=e.name,a=e.url,s=void 0===a?"":a,l=e.isActive,c=e.items,u=!!c,d={"is-header-mobile-navigation-active":l},p=L("m-header-mobile-navigation__category","js-header-mobile-navigation__category",d),h=L("m-header-mobile-navigation__list-link","js-header-mobile-navigation__list-link","js-header-mobile-close",d);return(t=document.createElement("li")).setAttribute("class","m-header-mobile-navigation__list-item"),z(t,["\n      ",u?[(o=document.createElement("button"),o.setAttribute("type","button"),o.setAttribute("class",""+String(p)),z(o,["\n          ",i,"\n          ",(n=document.createElement("axa-icon"),n.setAttribute("icon","angle-bracket-down"),n.setAttribute("classes","m-header-mobile-navigation__icon-next"),n),"\n        "]),o),$(c,e)]:(r=document.createElement("a"),r.setAttribute("href",""+String(s)),r.setAttribute("class",""+String(h)),z(r,[i]),r),"\n    "]),t}function $(e,t){var n,o,r,i;return(o=document.createElement("div")).setAttribute("class",""+String(L("m-header-mobile-navigation__nav",{"js-header-mobile-navigation__nav":!t}))),z(o,["\n      ",t&&(i=document.createElement("button"),i.setAttribute("type","button"),i.setAttribute("class","m-header-mobile-navigation__back js-header-mobile-navigation__back"),z(i,["\n          ",(r=document.createElement("axa-icon"),r.setAttribute("icon","angle-bracket-down"),r.setAttribute("classes","m-header-mobile-navigation__icon-back"),r),"\n          ",t.name,"\n        "]),i),"\n      ",(n=document.createElement("ul"),n.setAttribute("class","m-header-mobile-navigation__list"),z(n,["\n        ",t&&H(l({},t,{name:"index page",items:null})),"\n        ",Array.isArray(e)&&e.map(H),"\n      "]),n),"\n    "]),o}var W=function(e){return $(e.items)},X={},Z=function(e){return e in X||(X[e]=0),++X[e]},G=function(){try{var e=new window.CustomEvent("test",{cancelable:!0});if(e.preventDefault(),!0!==e.defaultPrevented)throw new Error("Could not prevent default");return window.CustomEvent}catch(e){}return t;function t(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=t.bubbles,o=void 0!==n&&n,r=t.cancelable,i=void 0!==r&&r,a=t.detail,s=void 0===a?void 0:a,l=document.createEvent("CustomEvent");l.initCustomEvent(e,o,i,s);var c=l.preventDefault;return l.preventDefault=function(){c.call(l);try{Object.defineProperty(this,"defaultPrevented",{get:function(){return!0}})}catch(e){this.defaultPrevented=!0}},l}}();function J(e,t,n){var o=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},r=new G(t,l({},o,{detail:n}));return e.dispatchEvent(r)}var Y=function(){var e=!1;if("undefined"!=typeof window&&"function"==typeof window.addEventListener){var t=Object.defineProperty({},"passive",{get:function(){e=!0}}),n=function(){};window.addEventListener("testPassiveEventSupport",n,t),window.removeEventListener("testPassiveEventSupport",n,t)}return e}(),Q=/^\s+|\s{2,}|\s+$/g;function ee(e,t){return new RegExp("^"+e+"$|^"+e+"\\s|\\s"+e+"\\s|\\s"+e+"$",t)}function te(e,t){var n=t.className;return t.hasClass||e.push(n),e}function ne(e){for(var t=e.className,n=!1,o=!0,r=arguments.length,i=Array(r>1?r-1:0),a=1;a<r;a++)i[a-1]=arguments[a];var s=i.map(function(e){var r=ee(e).test(t);r?n=!0:o=!1;return{className:e,hasClass:r}});return!(!o&&!n)&&s}function oe(e){for(var t=arguments.length,n=Array(t>1?t-1:0),o=1;o<t;o++)n[o-1]=arguments[o];var r=ne.apply(void 0,[e].concat(n));if(!1!==r){var i=[].concat(n);if(Array.isArray(r)&&(i=r.reduce(re,[])),i){var a=e.className;e.className=i.reduce(ie,a)}}}function re(e,t){var n=t.className;return t.hasClass&&e.push(n),e}function ie(e,t){var n=ee(t,"g");return e.replace(n," ").replace(Q," ")}var ae=/\s+/,se={transitionend:function(){for(var e=document.createElement("div").style,t={transition:"transitionend",OTransition:"oTransitionEnd otransitionend",MozTransition:"transitionend",WebkitTransition:"webkitTransitionEnd"},n=Object.keys(t),o=n.length,r=void 0,i=0;i<o;++i)if(void 0!==e[r=n[i]])return t[r];return""}()};function le(e,t,n,o){var r=arguments.length>4&&void 0!==arguments[4]?arguments[4]:{},a=r.capture,s=void 0!==a&&a,l=r.passive,c=void 0===l||l;if(se[t]&&(t=se[t]),!e||!t)return null;var u=void 0===n?"undefined":i(n),d=n&&"string"===u;if("function"===u){if(o){var p=o;s=p.capture,c=p.passive}o=n}for(var h=Y?{capture:s,passive:c}:s,f=d?function(t){var r=t.target;for(;!ne(r,n)&&r!==e;)r=r.parentNode;if(r!==e)return o(t,r)}:o,v=t.split(ae),b=v.length,m=0;m<b;++m)e.addEventListener(v[m],f,h);return function t(){for(var n=0;n<b;++n)e.removeEventListener(v[n],f,h);!function(e,t){if(!e)return!1;for(var n=Object.keys(e),o=n.length,r=0;r<o;++r){var i=n[r];if(e[i]===t)return delete e[i]}}(this,t)}}window.__subscriptions=window.__subscriptions||{};var ce=window.__subscriptions;function ue(e,t){var n=le(arguments.length>2&&void 0!==arguments[2]?arguments[2]:document,e,t);ce[e]||(ce[e]={count:0});var o,r=ce[e];return r.count++,r.onsubscribe||(r.onsubscribe=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},o=n.leading,r=void 0!==o&&o,i=n.trailing,a=void 0===i||i,s=n.maxWait,l=void 0!==s&&s,c=void 0,u=void 0,d=void 0,p=void 0,h=!1,f=t!==l,b=!1!==l;function m(){for(var n=arguments.length,o=Array(n),i=0;i<n;i++)o[i]=arguments[i];return c=o,f&&(u&&clearTimeout(u),u=setTimeout(y,t)),b&&!d&&(d=setTimeout(_,l)),r&&!h&&(h=!0,p=e.apply(void 0,v(c))),p}return m.flush=function(){return(u||d)&&(p=e.apply(void 0,v(c))),k(),p},m.cancel=k,m;function y(){d&&clearTimeout(d),g()}function _(){u&&clearTimeout(u),g()}function g(){a&&(p=e.apply(void 0,v(c))),u=null,d=null,h=!1}function k(){u&&(clearTimeout(u),u=null),d&&(clearTimeout(d),d=null),c=void 0,h=!1}}((o=e,function(){J(document,"pubsub/onsubscribe",o),J(document,"pubsub/onsubscribe/"+o,o),ce[o]&&delete ce[o].unsubscribe}),100)),r.onsubscribe(),function(){r.count--,n.call(this),r.count<=0&&delete ce[e]}}le(document,"pubsub/onsubscribe",function(e){var t=e.detail;ce[t]||(ce[t]={count:0});var n=ce[t],o=n.queue;Array.isArray(o)&&(o.forEach(function(e){var t=f(e,3),n=t[0],o=t[1],r=t[2];J(r,n,o)}),delete n.queue)});var de,pe=function(e,t){return e===t},he=((de=function(){var e;return(e=console).log.apply(e,arguments)},function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:pe;return function(){for(var t=arguments.length,n=Array(t),o=0;o<t;o++)n[o]=arguments[o];return function(){for(var t=arguments.length,o=Array(t),r=0;r<t;r++)o[r]=arguments[r];return function(){return e.apply(void 0,[].concat(n,o))?de.apply(void 0,arguments):void 0}}}})()(!0),/[A-Z]/g);function fe(e){return e.replace(he,ve)}function ve(e,t,n){var o=e.toLowerCase(),r=n.charAt(t+1);return 0===t||r.toUpperCase()===r?o:"-"+o}var be=/^\s*(?:true|false|null|undefined|-?[0-9]+\.?[0-9]*|[[{](?:.|[\s])*[\]}])\s*$/;function me(e,t,n){var o=e;if(n)return function(e,t,n){var o=e;switch(n){case y.string:case y.string.isRequired:return e;case y.bool:case y.bool.isRequired:if(!e||t===e)return!0;case y.number:case y.number.isRequired:case y.object:case y.object.isRequired:case y.array:case y.array.isRequired:default:if(be.test(e))try{o=JSON.parse(e)}catch(n){console.error("Attribute "+t+" has an error:\n"+n+"\n",e)}}return o}(e,t,n);if(e&&t!==e){if(be.test(e))try{o=JSON.parse(e)}catch(n){console.error("Attribute "+t+" has an error:\n"+n+"\n",e)}}else o=!0;return o}var ye=/(?:^\w|[A-Z]|\b\w|\s+|[-_]+)/g,_e=/[-_]+/g;function ge(e){return e.replace(ye,ke)}function ke(e,t){return 0==+e||_e.test(e)?"":0===t?e.toLowerCase():e.toUpperCase()}function Ce(e,t,n){var o=1===e.nodeType,r=e.constructor.propTypes,i=n;!n&&o&&(i=(void 0===r?{}:r)[ge(t)]);if(o&&!e.hasAttribute(t))return i!==y.bool&&i!==y.bool.isRequired&&void 0;var a=e.value;return t?a=e.getAttribute(t):t=e.name,a=me(a,t,i)}var Oe=/iPad|iPhone|iPod/.test(navigator.userAgent)&&!window.MSStream;function xe(e,t,n){var o=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},r=o.capture,i=void 0===r||r,a=o.passive,s=void 0===a||a,l=e.ownerDocument.documentElement,c=le(l,t,function(t){var o=t.target;if(!e.contains(o)&&e!==o)return n(t)},{capture:i,passive:s});return Oe&&(l.style.cursor="pointer"),c}var we=function(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];for(var o=t.length,r={},i=0;i<o;++i){var a=t[i];r[a.toUpperCase()]=a}return r}("click","change","keyup","enter","move","leave","Escape","Esc","touchstart","touchmove","touchend","input","resize"),Ne="axa-change",Ae="data-prevent-default";((function(){function e(t){var n=this,o=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};a(this,e),this._handleClick=function(e,t){n.shouldPreventDefault(t||e.currentTarget)&&e.preventDefault();var o=!n._lastToggleNode,r=t!==n._lastToggleNode,i=!o&&!r;o?(n._notify(we.ENTER,t),n._onInteractive()):r&&n._notify(we.MOVE,t,n._lastToggleNode),n._lastToggleNode=t,i&&n._options.sameClickClose&&n._close()},this._handleClose=function(e,t){n.shouldPreventDefault(t||e.currentTarget)&&e.preventDefault(),n._close()},this._handleKeyUp=function(e){(e.key===we.ESCAPE||e.key===we.ESC||27===e.keyCode)&&(e.preventDefault(),n._close())},this._init(t,o)}return s(e,[{key:"_init",value:function(t,n){t&&(this._wcNode=t),n&&(this._options=l({},e.DEFAULTS,n));var o=this._options.containerClass;this._container=o?this._wcNode.querySelector(o):this._wcNode,this._on()}},{key:"_on",value:function(){this._off(),this._unClick=le(this._container,we.CLICK,this._options.toggleClass,this._handleClick,{passive:!this._options.preventDefault})}},{key:"_off",value:function(){this._unClick&&this._unClick(),this._offInteractive()}},{key:"_onInteractive",value:function(){this._offInteractive(),this._options.closeClass&&(this._unCloseClick=le(this._container,we.CLICK,this._options.closeClass,this._handleClose,{passive:!this._options.preventDefault})),this._options.outerClose&&(this._unOuterClick=xe(this._container,we.CLICK,this._handleClose,{passive:!this._options.preventDefault})),this._options.escapeClose&&(this._unCloseEscape=le(this._container.ownerDocument,we.KEYUP,this._handleKeyUp,{passive:!1}))}},{key:"shouldPreventDefault",value:function(e){return e.hasAttribute(Ae)?Ce(e,Ae):this._options.preventDefault}},{key:"_offInteractive",value:function(){this._unOuterClick&&this._unOuterClick(),this._unCloseClick&&this._unCloseClick(),this._unCloseEscape&&this._unCloseEscape(),this.deleteLastToggleNode()}},{key:"_close",value:function(){this._lastToggleNode&&(this._notify(we.LEAVE,this._lastToggleNode),this._offInteractive(),this.deleteLastToggleNode())}},{key:"_notify",value:function(e,t,n){e in this&&"function"==typeof this[e]&&this[e](t,n)}},{key:"enter",value:function(e){throw new Error("UiEvent.enter method not overwritten")}},{key:"move",value:function(e,t){}},{key:"leave",value:function(e){throw new Error("UiEvent.leave method not overwritten")}},{key:"destroy",value:function(){this._off(),delete this._wcNode,delete this._options}},{key:"deleteLastToggleNode",value:function(){delete this._lastToggleNode}},{key:"lastToggleNode",get:function(){return this._lastToggleNode}}]),e})()).DEFAULTS={containerClass:".js-ui-container",toggleClass:"js-ui-toggle",closeClass:"js-ui-close",escapeClose:!0,outerClose:!0,sameClickClose:!0,preventDefault:!0};var Te=[];var Ee=1,je=3,Pe=8;function Se(e,t){var n=e.nodeType,o=e.nodeName;n===Ee&&function(e,t){for(var n=t.skipChildren&&t.skipChildren(),o=t.constructor.observedAttributes,r=o&&Array.isArray(o)&&o.length,i=function(e){return n&&r&&-1===o.indexOf(e)},a=t.attributes,s=e.attributes,l=null,c=null,u=null,d=null,p=s.length-1;p>=0;--p)if(d=s[p],u=d.name,l=d.namespaceURI,c=d.value,!i(u))if(l){var h=d.localName;t.getAttributeNS(l,h||u)!==c&&t.setAttributeNS(l,u,c)}else t.hasAttribute(u)?t.getAttribute(u)!==c&&("null"===c||"undefined"===c?t.removeAttribute(u):t.setAttribute(u,c)):t.setAttribute(u,c);for(var f=a.length-1;f>=0;--f)if(!1!==(d=a[f]).specified){if(u=d.name,l=d.namespaceURI,i(u))continue;l?(u=d.localName||u,e.hasAttributeNS(l,u)||t.removeAttributeNS(l,u)):e.hasAttributeNS(null,u)||t.removeAttribute(u)}}(e,t),n!==je&&n!==Pe||t.nodeValue===e.nodeValue||(t.nodeValue=e.nodeValue),"INPUT"===o?function(e,t){var n=e.value,o=t.value;Re(e,t,"checked"),Re(e,t,"disabled"),n!==o&&(t.setAttribute("value",n),t.value=n);"null"===n&&(t.value="",t.removeAttribute("value"));e.hasAttributeNS(null,"value")?"range"===t.type&&(t.value=n):t.removeAttribute("value")}(e,t):"OPTION"===o?Re(e,t,"selected"):"TEXTAREA"===o&&function(e,t){var n=e.value;n!==t.value&&(t.value=n);if(t.firstChild&&t.firstChild.nodeValue!==n){if(""===n&&t.firstChild.nodeValue===t.placeholder)return;t.firstChild.nodeValue=n}}(e,t)}function Re(e,t,n){e[n]!==t[n]&&(t[n]=e[n],e[n]?t.setAttribute(n,""):t.removeAttribute(n))}var De=3;function Le(e,t){return t?e?e.isSameNode&&e.isSameNode(t)?t:e.tagName!==t.tagName?e:(Se(e,t),t.skipChildren&&t.skipChildren()||function(e,t){for(var n=void 0,o=void 0,r=void 0,i=void 0,a=0,s=0;n=t.childNodes[s],o=e.childNodes[s-a],n||o;s++)if(o)if(n)if(Ue(o,n))(r=Le(o,n))!==n&&(t.replaceChild(r,n),a++);else{i=null;for(var l=s;l<t.childNodes.length;l++)if(Ue(t.childNodes[l],o)){i=t.childNodes[l];break}i?((r=Le(o,i))!==i&&a++,t.insertBefore(r,n)):o.id||n.id?(t.insertBefore(o,n),a++):(r=Le(o,n))!==n&&(t.replaceChild(r,n),a++)}else t.appendChild(o),a++;else t.removeChild(n),s--}(e,t),t):null:e}function Ue(e,t){return e.id?e.id===t.id:e.isSameNode?e.isSameNode(t):e.tagName===t.tagName&&(e.type===De&&e.nodeValue===t.nodeValue)}var Me=function(e){function t(e){var n;a(this,t);for(var o="\n    Web Component "+e.nodeName+"%c#"+e._id+" does not accept string as a return from a template. Maybe use bel?}",r=arguments.length,i=Array(r>1?r-1:0),s=1;s<r;s++)i[s-1]=arguments[s];var l=p(this,(n=t.__proto__||Object.getPrototypeOf(t)).call.apply(n,[this,o].concat(i)));return Error.captureStackTrace&&Error.captureStackTrace(l,t),l.name="TemplateNoStringReturnException",l}return u(t,e),t}(Error),Ie=!!document.createDocumentFragment().children;function Ve(){return Reflect.construct(HTMLElement,[],this.__proto__.constructor)}Object.setPrototypeOf(Ve.prototype,HTMLElement.prototype),Object.setPrototypeOf(Ve,HTMLElement);var Fe=function(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];return function(e){return t.reduceRight(function(e,t){return t(e)},e)}}(function(e){return function(t){function n(){var e,t,o;a(this,n);for(var r=arguments.length,i=Array(r),s=0;s<r;s++)i[s]=arguments[s];return t=o=p(this,(e=n.__proto__||Object.getPrototypeOf(n)).call.apply(e,[this].concat(i))),o._makeContextReady=function(){var e=(arguments.length>0&&void 0!==arguments[0]?arguments[0]:{}).detail;o.contextNode&&(clearTimeout(o.timeoutId),o.timeoutId=setTimeout(function(){o.contextCallback(o.contextNode,e)},10)),o.unContextEnabled&&o.unContextEnabled(),o.unContextEnabled=ue("context/available",o._makeContextReady)},p(o,t)}return u(n,e),s(n,[{key:"connectedCallback",value:function(){c(n.prototype.__proto__||Object.getPrototypeOf(n.prototype),"connectedCallback",this)&&c(n.prototype.__proto__||Object.getPrototypeOf(n.prototype),"connectedCallback",this).call(this),this.contextCallback&&this._makeContextReady()}},{key:"disconnectedCallback",value:function(){c(n.prototype.__proto__||Object.getPrototypeOf(n.prototype),"disconnectedCallback",this)&&c(n.prototype.__proto__||Object.getPrototypeOf(n.prototype),"disconnectedCallback",this).call(this),this.unContextEnabled&&this.unContextEnabled()}},{key:"provideContext",value:function(){var e=this.nodeName.toLowerCase();this.__isContext=!0,this.__contextName=e,function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:document;ce[e]||(ce[e]={count:0,queue:[]});var o=ce[e].queue;Array.isArray(o)?o.push([e,t,n]):J(n,e,t)}("context/available",e)}},{key:"consumeContext",value:function(e){this.__consumedContext=e&&e.toLowerCase()}},{key:"contextNode",get:function(){for(var e=this.__consumedContext,t=this.parentNode;t&&(!t.__isContext||e&&e!==t.__contextName);)t=t.parentNode;return!(!t||!t.__isContext)&&t}}]),n}()},function(e){return function(t){function n(){return a(this,n),p(this,(n.__proto__||Object.getPrototypeOf(n)).apply(this,arguments))}return u(n,e),s(n,[{key:"appendChild",value:function(e){!this._isMorphing&&this._hasTemplate&&this._hasRendered?(this._lightDOMRefs.push(e),this.render()):c(n.prototype.__proto__||Object.getPrototypeOf(n.prototype),"appendChild",this).call(this,e)}},{key:"innerText",set:function(e){if(this._hasTemplate&&this._hasRendered){var t=document.createTextNode(e);this._lightDOMRefs=[t],this.render()}else h(n.prototype.__proto__||Object.getPrototypeOf(n.prototype),"innerText",e,this)}},{key:"textContent",set:function(e){if(this._hasTemplate&&this._hasRendered){var t=document.createTextNode(e);this._lightDOMRefs=[t],this.render()}else h(n.prototype.__proto__||Object.getPrototypeOf(n.prototype),"textContent",e,this)}},{key:"innerHTML",set:function(e){if(this._hasTemplate&&this._hasRendered){var t=document.createElement("div");t.innerHTML=e,this._lightDOMRefs=Array.from(t.children),this.render()}else h(n.prototype.__proto__||Object.getPrototypeOf(n.prototype),"innerHTML",e,this)}}]),n}()},function(e){return function(t){function n(e){a(this,n);var t=p(this,(n.__proto__||Object.getPrototypeOf(n)).call(this,e));t._reduceProps=function(e,o){var r=e.props,i=e.shouldUpdate,a=t._hasKeys[o],s="_"+o,l=r[o],c=t[s];return i||t.shouldUpdateCallback(l,c)?(t.props[o]=l,a&&h(n.prototype.__proto__||Object.getPrototypeOf(n.prototype),o,l,t),{props:r,shouldUpdate:!0}):{props:r,shouldUpdate:!1}},t._isConnected=!1,t.props={},t._hasKeys={};var o=t.constructor.observedAttributes;return Array.isArray(o)&&o.forEach(function(e){var n=ge(e),o=n in t;t._hasKeys[n]=o}),t}return u(n,e),s(n,null,[{key:"observedAttributes",get:function(){var e=this.propTypes;return e&&Object.keys(e).map(fe)}}]),s(n,[{key:"connectedCallback",value:function(){var e=this;if(c(n.prototype.__proto__||Object.getPrototypeOf(n.prototype),"connectedCallback",this)&&c(n.prototype.__proto__||Object.getPrototypeOf(n.prototype),"connectedCallback",this).call(this),!this._isConnected){this._isConnected=!0;var t=this.constructor.observedAttributes;if(this.initialClassName=this.className,Array.isArray(t)){var o=this.constructor.propTypes;t.forEach(function(t){var r=ge(t);if(e.hasAttribute(t)){var i=Ce(e,t,o[r]),a=e._hasKeys[r];e.props[r]=i,a&&h(n.prototype.__proto__||Object.getPrototypeOf(n.prototype),r,i,e)}}),this.checkPropTypes()}}this.updated&&this.updated()}},{key:"attributeChangedCallback",value:function(e,t,n){if(this.shouldUpdateCallback(n,t)){var o=ge(e);if(this.hasAttribute(e)){var r=this.constructor.propTypes;this.props[o]=me(n,e,r[o])}else this.props[o]=null;this.checkPropTypes(),"value"===e&&null!==n&&J(this,Ne,n,{bubbles:!0,cancelable:!0,composed:!0})}}},{key:"setProps",value:function(e){var t=this.constructor.observedAttributes,n=void 0===t?[]:t,o=Object.keys(e).filter(function(e){return n.indexOf(fe(e))>-1}).reduce(this._reduceProps,{props:e,shouldUpdate:!1}).shouldUpdate;this.checkPropTypes(),o&&this._isConnected&&this.updated&&this.updated()}},{key:"checkPropTypes",value:function(){var e=this.constructor,t=e.propTypes,n=e.tagName;t&&y.checkPropTypes(t,this.props,"prop",n)}},{key:"shouldUpdateCallback",value:function(e,t){return e!==t}},{key:"disconnectedCallback",value:function(){this._isConnected=!1}}]),n}()},function(e){return function(t){function n(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.template,o=d(e,["template"]);a(this,n);var r=p(this,(n.__proto__||Object.getPrototypeOf(n)).call(this,o));return r._template=t,r._hasTemplate=!!t,r._hasRendered=!1,r.updated=r.render,r}return u(n,e),s(n,[{key:"render",value:function(){var e=this,t=!this._hasRendered;if(this.willRenderCallback(t),this._hasTemplate){var o=this._template;try{if(t){for(var r=document.createDocumentFragment(),a=[];this.firstChild;)a.push(this.firstChild),r.appendChild(this.firstChild);this._lightDOMRefs=a,this.childrenFragment=r}else this._lightDOMRefs.forEach(function(t){var n=t.cloneNode(!0);e.childrenFragment.appendChild(n)});Ie||(this.childrenFragment.children=Array.from(this.childrenFragment.childNodes).filter(function(e){return 1===e.nodeType}));var s=o(this.props,this.childrenFragment,this),l=document.createDocumentFragment();if(Array.isArray(s))s.forEach(function(e){l.appendChild(e)});else if(s){if("string"==typeof s)throw new Me(this);l.appendChild(s)}if(t)c(n.prototype.__proto__||Object.getPrototypeOf(n.prototype),"appendChild",this).call(this,l);else{var u=this.cloneNode(!1);u._isMorphing=!0,u.appendChild(l),this._isMorphing=!0,function(e,t){if("object"!==(void 0===e?"undefined":i(e)))throw new Error("componentMorph: oldTree should be an object");if("object"!==(void 0===t?"undefined":i(t)))throw new Error("componentMorph: newTree should be an object");Le(t,e)}(this,u),function(){for(var e=void 0;e=Te.pop();)delete e.isSameNode;Te=[]}(),this._isMorphing=!1}}catch(e){console.error(e)}}this._hasRendered=!0,this.didRenderCallback(t)}},{key:"skipChildren",value:function(){return!this._isMorphing}},{key:"willRenderCallback",value:function(e){}},{key:"didRenderCallback",value:function(e){}}]),n}()},function(e){return function(t){function n(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.styles,o=void 0===t?"":t,r=d(e,["styles"]);a(this,n);var i=p(this,(n.__proto__||Object.getPrototypeOf(n)).call(this,r));return i._styles=o,i}return u(n,e),s(n,[{key:"connectedCallback",value:function(){c(n.prototype.__proto__||Object.getPrototypeOf(n.prototype),"connectedCallback",this)&&c(n.prototype.__proto__||Object.getPrototypeOf(n.prototype),"connectedCallback",this).call(this),this._appendStyles()}},{key:"_appendStyles",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this;if(this._styles){var t=document.createElement("style"),n=document.createTextNode(this._styles);t.appendChild(n),e.insertAdjacentElement?e.insertAdjacentElement("afterbegin",t):e.appendChild(t)}}}]),n}()})(function(e){function t(e){a(this,t);var n=p(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n._id=Z(n.nodeName),n}return u(t,Ve),s(t,null,[{key:"uuidv4",value:function(){return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,function(e){var t=16*Math.random()|0;return("x"==e?t:3&t|8).toString(16)})}}]),t}()),qe={},Be=function(e){function t(){var e,n,o;a(this,t);for(var r=arguments.length,i=Array(r),s=0;s<r;s++)i[s]=arguments[s];return n=o=p(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(i))),o._appendStyles=function(){t.appendGlobalStyles(o._styles,o.nodeName)},p(o,n)}return u(t,Fe),s(t,null,[{key:"appendGlobalStyles",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:Fe.uuidv4();if(e&&!qe[t]){var n=document.createElement("style"),o=document.createTextNode(e);qe[t]=!0,n.appendChild(o),n.setAttribute("data-c-name",t.toLowerCase()),document.head.appendChild(n)}}}]),t}();var Ke=function(){function e(t,n){var o=this;a(this,e),this.open=function(){o.isOpen=!0},this.close=function(){o.isOpen=!1},this.fadeFinish=function(){if(!o.isOpen&&o.opened)for(var e=o.opened.pop();e;){oe(e.parentNode,o.options.isSubMenuOpenClass),e=o.opened.pop()}},this.handleCategoryClick=function(e,t){o.options.preventDefault||e.preventDefault();var n=t.parentNode;if(n.lastChild!==t){var r=o.wcNode.parentNode.parentNode,i=r.scrollTop;!function(e){for(var t=arguments.length,n=Array(t>1?t-1:0),o=1;o<t;o++)n[o-1]=arguments[o];var r=ne.apply(void 0,[e].concat(n));if(!0!==r){var i=[].concat(n);Array.isArray(r)&&(i=r.reduce(te,[])),i&&(e.className+=" "+i.join(" "))}}(n,o.options.isSubMenuOpenClass),r.scrollTop=0,o.opened.push({parentNode:n,scrollTop:i})}},this.handleBackClick=function(e){o.options.preventDefault||e.preventDefault();var t=o.opened.pop(),n=t.parentNode,r=t.scrollTop,i=o.wcNode.parentNode.parentNode;oe(n,o.options.isSubMenuOpenClass),i.scrollTop=r},this.wcNode=t,this.options=l({},e.DEFAULTS,n),this.isOpen=!1,this.opened=[],this.init()}return s(e,[{key:"init",value:function(){this.nav=this.wcNode.querySelector(this.options.nav),this.on()}},{key:"on",value:function(){this.off(),this.unCategoryClick=le(this.nav,"click",this.options.category,this.handleCategoryClick,{passive:!1}),this.unBackClick=le(this.nav,"click",this.options.back,this.handleBackClick,{passive:!1})}},{key:"off",value:function(){this.unCategoryClick&&this.unCategoryClick(),this.unBackClick&&this.unBackClick(),this.offContextEnabled()}},{key:"onContextEnabled",value:function(){this._contextNode&&(this.offContextEnabled(),this.unSubscribeOpen=ue("header-mobile/open",this.open,this._contextNode),this.unSubscribeClose=ue("header-mobile/close",this.close,this._contextNode),this.unSubscribeFadeFinish=ue("header-mobile/fade-finish",this.fadeFinish,this._contextNode))}},{key:"offContextEnabled",value:function(){this.unSubscribeOpen&&this.unSubscribeOpen(),this.unSubscribeClose&&this.unSubscribeClose()}},{key:"destroy",value:function(){this.off(),delete this.wcNode,delete this.nav,delete this._contextNode,delete this.opened}},{key:"contextNode",set:function(e){this._contextNode=e,this.onContextEnabled()}}]),e}();Ke.DEFAULTS={nav:".js-header-mobile-navigation__nav",category:"js-header-mobile-navigation__category",back:"js-header-mobile-navigation__back",isSubMenuOpenClass:"is-header-mobile-navigation-nav-open"};var ze,He,$e,We=(ze=function(){return Xe},function(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];return ze.apply(this,t)}),Xe=y.shape({name:y.string,url:D,isActive:y.bool,items:We}),Ze=function(e){function t(){a(this,t);var e=p(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,{styles:U,template:W}));return e.consumeContext("axa-header"),e}return u(t,Be),s(t,[{key:"contextCallback",value:function(e){this.interaction&&(this.interaction.contextNode=e)}},{key:"willRenderCallback",value:function(){var e=this.gpu,t=this.relative;this.className=L(this.initialClassName,"m-header-mobile-navigation",{"m-header-mobile-navigation--gpu":e,"m-header-mobile-navigation--relative":t})}},{key:"didRenderCallback",value:function(){var e=this.contextNode;this.interaction&&this.interaction.destroy(),this.interaction=new Ke(this),e&&this.contextCallback(e)}},{key:"disconnectedCallback",value:function(){c(t.prototype.__proto__||Object.getPrototypeOf(t.prototype),"disconnectedCallback",this).call(this),this.interaction.destroy(),delete this.interaction}}]),t}();return Ze.tagName="axa-header-mobile-navigation",Ze.propTypes={items:y.arrayOf(Xe),relative:y.bool},He=Ze.tagName,$e=Ze,customElements.get(He)||customElements.define(He,$e),Ze}();
