!function(e,n){"object"==typeof exports&&"undefined"!=typeof module?module.exports=n():"function"==typeof define&&define.amd?define(n):e.StyleGuideWebComponent=n()}(this,function(){"use strict";var e,n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},t=function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")},i=function(){function e(e,n){for(var t=0;t<n.length;t++){var i=n[t];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(n,t,i){return t&&e(n.prototype,t),i&&e(n,i),n}}(),a=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i])}return e},r=function e(n,t,i){null===n&&(n=Function.prototype);var a=Object.getOwnPropertyDescriptor(n,t);if(void 0===a){var r=Object.getPrototypeOf(n);return null===r?void 0:e(r,t,i)}if("value"in a)return a.value;var o=a.get;return void 0!==o?o.call(i):void 0},o=function(e,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function, not "+typeof n);e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),n&&(Object.setPrototypeOf?Object.setPrototypeOf(e,n):e.__proto__=n)},s=function(e,n){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!n||"object"!=typeof n&&"function"!=typeof n?e:n},d=function e(n,t,i,a){var r=Object.getOwnPropertyDescriptor(n,t);if(void 0===r){var o=Object.getPrototypeOf(n);null!==o&&e(o,t,i,a)}else if("value"in r&&r.writable)r.value=i;else{var s=r.set;void 0!==s&&s.call(a,i)}return i},l=function(){return function(e,n){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return function(e,n){var t=[],i=!0,a=!1,r=void 0;try{for(var o,s=e[Symbol.iterator]();!(i=(o=s.next()).done)&&(t.push(o.value),!n||t.length!==n);i=!0);}catch(e){a=!0,r=e}finally{try{!i&&s.return&&s.return()}finally{if(a)throw r}}return t}(e,n);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),u=function(e){if(Array.isArray(e)){for(var n=0,t=Array(e.length);n<e.length;n++)t[n]=e[n];return t}return Array.from(e)},c=(function(e){!function(){var t={}.hasOwnProperty;function i(){for(var e=[],a=0;a<arguments.length;a++){var r=arguments[a];if(r){var o=void 0===r?"undefined":n(r);if("string"===o||"number"===o)e.push(r);else if(Array.isArray(r))e.push(i.apply(null,r));else if("object"===o)for(var s in r)t.call(r,s)&&r[s]&&e.push(s)}}return e.join(" ")}e.exports?e.exports=i:window.classNames=i}()}(e={exports:{}},e.exports),e.exports),h="@-webkit-keyframes fadeOutRightInLeft {\n  0% {\n    opacity: 1; }\n  50% {\n    opacity: 0;\n    -webkit-transform: translate3d(100%, 0, 0);\n            transform: translate3d(100%, 0, 0); }\n  51% {\n    opacity: 0;\n    -webkit-transform: translate3d(-100%, 0, 0);\n            transform: translate3d(-100%, 0, 0); }\n  100% {\n    opacity: 1;\n    -webkit-transform: none;\n            transform: none; } }\n\n@keyframes fadeOutRightInLeft {\n  0% {\n    opacity: 1; }\n  50% {\n    opacity: 0;\n    -webkit-transform: translate3d(100%, 0, 0);\n            transform: translate3d(100%, 0, 0); }\n  51% {\n    opacity: 0;\n    -webkit-transform: translate3d(-100%, 0, 0);\n            transform: translate3d(-100%, 0, 0); }\n  100% {\n    opacity: 1;\n    -webkit-transform: none;\n            transform: none; } }\n\n.m-header-sub-navigation {\n  display: none;\n  background: #fff;\n  border-bottom: 2px solid #ccc;\n  -webkit-box-shadow: 0 3px 10px -2px rgba(0, 0, 0, 0.3);\n          box-shadow: 0 3px 10px -2px rgba(0, 0, 0, 0.3); }\n  .is-header-sub-navigation-open .m-header-sub-navigation {\n    display: block; }\n\n.m-header-sub-navigation--flyout {\n  position: absolute;\n  top: 100%;\n  left: 0;\n  z-index: 1050;\n  width: 100%;\n  margin-top: 2px; }\n\n.m-header-sub-navigation__index {\n  background: #fafafa; }\n\n.m-header-sub-navigation__index-box {\n  padding-right: 15px;\n  padding-left: 15px;\n  width: 100%;\n  margin-right: auto;\n  margin-left: auto;\n  max-width: auto;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-wrap: wrap;\n      flex-wrap: wrap;\n  height: 60px;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center; }\n  @media (min-width: 576px) {\n    .m-header-sub-navigation__index-box {\n      max-width: 540px; } }\n  @media (min-width: 768px) {\n    .m-header-sub-navigation__index-box {\n      max-width: 720px; } }\n  @media (min-width: 992px) {\n    .m-header-sub-navigation__index-box {\n      max-width: 960px; } }\n  @media (min-width: 1200px) {\n    .m-header-sub-navigation__index-box {\n      max-width: 1140px; } }\n\n.m-header-sub-navigation__index-link {\n  /* Adds a hyphen where the word breaks, if supported (No Blink) */\n  -webkit-hyphens: auto;\n      -ms-hyphens: auto;\n          hyphens: auto;\n  /* These are technically the same, but use both */\n  overflow-wrap: break-word;\n  word-wrap: break-word;\n  font-size: 16px;\n  font-weight: 400;\n  line-height: 1.5;\n  letter-spacing: 0.01em; }\n  @media (min-width: 576px) {\n    .m-header-sub-navigation__index-link {\n      font-size: 18px; } }\n  .m-header-sub-navigation__index-link:hover, .m-header-sub-navigation__index-link:active, .m-header-sub-navigation__index-link:focus {\n    text-decoration: none;\n    font-weight: 600; }\n\n.m-header-sub-navigation__index-close {\n  /* Adds a hyphen where the word breaks, if supported (No Blink) */\n  -webkit-hyphens: auto;\n      -ms-hyphens: auto;\n          hyphens: auto;\n  /* These are technically the same, but use both */\n  overflow-wrap: break-word;\n  word-wrap: break-word;\n  font-size: 12px;\n  font-weight: 600;\n  line-height: 1.5;\n  letter-spacing: 0.02em;\n  position: relative;\n  padding-right: 44px;\n  margin-left: auto;\n  text-transform: uppercase;\n  border: none;\n  background: transparent;\n  color: #00008f; }\n  @media (min-width: 576px) {\n    .m-header-sub-navigation__index-close {\n      font-size: 13px;\n      line-height: 1.38; } }\n  .m-header-sub-navigation__index-close:hover, .m-header-sub-navigation__index-close:active, .m-header-sub-navigation__index-close:focus {\n    color: #00005b;\n    cursor: pointer;\n    outline: none; }\n\n.m-header-sub-navigation__index-close__icon {\n  width: 23px;\n  height: 23px;\n  display: block;\n  fill: currentColor;\n  position: absolute;\n  top: 50%;\n  right: 0;\n  margin-top: -11.5px; }\n\n.m-header-sub-navigation__box {\n  padding-right: 15px;\n  padding-left: 15px;\n  width: 100%;\n  margin-right: auto;\n  margin-left: auto;\n  max-width: auto;\n  padding-top: 30px;\n  padding-bottom: 40px; }\n  @media (min-width: 576px) {\n    .m-header-sub-navigation__box {\n      max-width: 540px; } }\n  @media (min-width: 768px) {\n    .m-header-sub-navigation__box {\n      max-width: 720px; } }\n  @media (min-width: 992px) {\n    .m-header-sub-navigation__box {\n      max-width: 960px; } }\n  @media (min-width: 1200px) {\n    .m-header-sub-navigation__box {\n      max-width: 1140px; } }\n\n.m-header-sub-navigation__row {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-wrap: wrap;\n      flex-wrap: wrap;\n  margin-right: -30px;\n  margin-left: -30px;\n  -webkit-box-pack: start;\n      -ms-flex-pack: start;\n          justify-content: flex-start; }\n  .m-header-sub-navigation__row + .m-header-sub-navigation__row > .m-header-sub-navigation__block {\n    padding-top: 30px; }\n\n.m-header-sub-navigation__block {\n  max-width: 25%;\n  -webkit-box-flex: 0;\n      -ms-flex: 0 0 25%;\n          flex: 0 0 25%;\n  padding: 0 30px;\n  border-right: 1px solid #ccc; }\n  .m-header-sub-navigation__block:last-child {\n    border: none; }\n  .m-header-sub-navigation__row--col-2 .m-header-sub-navigation__block {\n    max-width: 50%;\n    -webkit-box-flex: 0;\n        -ms-flex: 0 0 50%;\n            flex: 0 0 50%;\n    padding-right: 45px;\n    padding-left: 45px; }\n    .m-header-sub-navigation__row--col-2 .m-header-sub-navigation__block:nth-child(n + 3) {\n      padding-top: 30px;\n      border-right: 1px solid #ccc; }\n    .m-header-sub-navigation__row--col-2 .m-header-sub-navigation__block:nth-child(2n) {\n      border: none; }\n  .m-header-sub-navigation__row--col-3 .m-header-sub-navigation__block {\n    max-width: 33.33333%;\n    -webkit-box-flex: 0;\n        -ms-flex: 0 0 33.33333%;\n            flex: 0 0 33.33333%;\n    padding-right: 65px;\n    padding-left: 65px; }\n    .m-header-sub-navigation__row--col-3 .m-header-sub-navigation__block:nth-child(n + 4) {\n      padding-top: 30px;\n      border-right: 1px solid #ccc; }\n    .m-header-sub-navigation__row--col-3 .m-header-sub-navigation__block:nth-child(3n) {\n      border: none; }\n  .m-header-sub-navigation__row--col-4 .m-header-sub-navigation__block:nth-child(n + 5) {\n    padding-top: 30px;\n    border-right: 1px solid #ccc; }\n  .m-header-sub-navigation__row--col-4 .m-header-sub-navigation__block:nth-child(4n) {\n    border: none; }\n  .m-header-sub-navigation__row:not(.m-header-sub-navigation__row--col-2):not(.m-header-sub-navigation__row--col-3):not(.m-header-sub-navigation__row--col-4) .m-header-sub-navigation__block:nth-last-child(1):first-child,\n  .m-header-sub-navigation__row:not(.m-header-sub-navigation__row--col-2):not(.m-header-sub-navigation__row--col-3):not(.m-header-sub-navigation__row--col-4) .m-header-sub-navigation__block:nth-last-child(1):first-child ~ * {\n    max-width: 33.33333%;\n    -webkit-box-flex: 0;\n        -ms-flex: 0 0 33.33333%;\n            flex: 0 0 33.33333%; }\n  .m-header-sub-navigation__row:not(.m-header-sub-navigation__row--col-2):not(.m-header-sub-navigation__row--col-3):not(.m-header-sub-navigation__row--col-4) .m-header-sub-navigation__block:nth-last-child(2):first-child,\n  .m-header-sub-navigation__row:not(.m-header-sub-navigation__row--col-2):not(.m-header-sub-navigation__row--col-3):not(.m-header-sub-navigation__row--col-4) .m-header-sub-navigation__block:nth-last-child(2):first-child ~ * {\n    max-width: 25%;\n    -webkit-box-flex: 0;\n        -ms-flex: 0 0 25%;\n            flex: 0 0 25%;\n    padding-right: 45px;\n    padding-left: 45px; }\n  .m-header-sub-navigation__row:not(.m-header-sub-navigation__row--col-2):not(.m-header-sub-navigation__row--col-3):not(.m-header-sub-navigation__row--col-4) .m-header-sub-navigation__block:nth-last-child(3n):first-child,\n  .m-header-sub-navigation__row:not(.m-header-sub-navigation__row--col-2):not(.m-header-sub-navigation__row--col-3):not(.m-header-sub-navigation__row--col-4) .m-header-sub-navigation__block:nth-last-child(3n):first-child ~ * {\n    max-width: 33.33333%;\n    -webkit-box-flex: 0;\n        -ms-flex: 0 0 33.33333%;\n            flex: 0 0 33.33333%;\n    padding-right: 65px;\n    padding-left: 65px; }\n\n.m-header-sub-navigation__row--col-2 {\n  margin-right: -45px;\n  margin-left: -45px; }\n\n.m-header-sub-navigation__row--col-3 {\n  margin-right: -65px;\n  margin-left: -65px; }\n\n.m-header-sub-navigation__block--wide:nth-last-child(2):first-child,\n.m-header-sub-navigation__block--wide:nth-last-child(2):first-child ~ * {\n  max-width: 50%;\n  -webkit-box-flex: 0;\n      -ms-flex: 0 0 50%;\n          flex: 0 0 50%; }\n  .m-header-sub-navigation__block--wide:nth-last-child(2):first-child .m-header-sub-navigation__list,\n  .m-header-sub-navigation__block--wide:nth-last-child(2):first-child ~ * .m-header-sub-navigation__list {\n    -webkit-column-count: 2;\n            column-count: 2; }\n\n.m-header-sub-navigation__category {\n  /* Adds a hyphen where the word breaks, if supported (No Blink) */\n  -webkit-hyphens: auto;\n      -ms-hyphens: auto;\n          hyphens: auto;\n  /* These are technically the same, but use both */\n  overflow-wrap: break-word;\n  word-wrap: break-word;\n  font-size: 20px;\n  font-weight: 700;\n  line-height: 1.5;\n  letter-spacing: 0;\n  color: #00008f;\n  text-transform: uppercase; }\n  @media (min-width: 576px) {\n    .m-header-sub-navigation__category {\n      font-size: 24px;\n      line-height: 1.2; } }\n\n.m-header-sub-navigation__list {\n  padding: 0;\n  margin: 0;\n  list-style-type: none;\n  margin-top: 15px; }\n\n.m-header-sub-navigation__list-item {\n  display: block; }\n\n.m-header-sub-navigation__link {\n  /* Adds a hyphen where the word breaks, if supported (No Blink) */\n  -webkit-hyphens: auto;\n      -ms-hyphens: auto;\n          hyphens: auto;\n  /* These are technically the same, but use both */\n  overflow-wrap: break-word;\n  word-wrap: break-word;\n  font-size: 16px;\n  font-weight: 400;\n  line-height: 1.5;\n  letter-spacing: 0.01em;\n  display: inline-block;\n  width: 100%;\n  padding: 4px 0;\n  line-height: 1.3 !important; }\n  @media (min-width: 576px) {\n    .m-header-sub-navigation__link {\n      font-size: 18px; } }\n  .m-header-sub-navigation__link.is-header-sub-navigation-active, .m-header-sub-navigation__link:hover, .m-header-sub-navigation__link:active, .m-header-sub-navigation__link:focus {\n    color: #00005b;\n    text-decoration: none;\n    font-weight: 600;\n    letter-spacing: -0.005em; }\n",p=/\n[\s]+$/,f=/^\n[\s]+/,b=/[\s]+$/,v=/^[\s]+/,m=/[\n\s]+/g,_=["a","abbr","b","bdi","bdo","br","cite","data","dfn","em","i","kbd","mark","q","rp","rt","rtc","ruby","s","amp","small","span","strong","sub","sup","time","u","var","wbr"],g=["code","pre","textarea"],x=function e(n,t){if(Array.isArray(t))for(var i,a,r=n.nodeName.toLowerCase(),o=!1,s=0,d=t.length;s<d;s++){var l=t[s];if(Array.isArray(l))e(n,l);else{("number"==typeof l||"boolean"==typeof l||"function"==typeof l||l instanceof Date||l instanceof RegExp)&&(l=l.toString());var u=n.childNodes[n.childNodes.length-1];if("string"==typeof l)o=!0,u&&"#text"===u.nodeName?u.nodeValue+=l:(l=document.createTextNode(l),n.appendChild(l),u=l),s===d-1&&(o=!1,-1===_.indexOf(r)&&-1===g.indexOf(r)?""===(i=u.nodeValue.replace(f,"").replace(b,"").replace(p,"").replace(m," "))?n.removeChild(u):u.nodeValue=i:-1===g.indexOf(r)&&(a=0===s?"":" ",i=u.nodeValue.replace(f,a).replace(v," ").replace(b,"").replace(p,"").replace(m," "),u.nodeValue=i));else if(l&&l.nodeType){o&&(o=!1,-1===_.indexOf(r)&&-1===g.indexOf(r)?""===(i=u.nodeValue.replace(f,"").replace(p,"").replace(m," "))?n.removeChild(u):u.nodeValue=i:-1===g.indexOf(r)&&(i=u.nodeValue.replace(v," ").replace(f,"").replace(p,"").replace(m," "),u.nodeValue=i));var c=l.nodeName;c&&(r=c.toLowerCase()),n.appendChild(l)}}}};var y=function(e){var n,t=document.createElement("div");return t.innerHTML=e,n=t.childNodes,Array.isArray(n)?n:[].slice.call(n)},w=function(e){var n,t,i=e.url,a=void 0===i?"":i,r=e.name,o=e.isActive,s=e.preventDefault,d=void 0===s?"false":s;return(t=document.createElement("li")).setAttribute("class","m-header-sub-navigation__list-item"),x(t,["\n    ",(n=document.createElement("a"),n.setAttribute("data-prevent-default",""+String(d)),n.setAttribute("href",""+String(a)),n.setAttribute("class",""+String(c("m-header-sub-navigation__link","js-header-navigation-close",{"is-header-sub-navigation-active":o}))),x(n,[y(r)]),n),"\n  "]),t},k=function(e){var n,t,i=e.columns,a=e.col,r=e.isWide;return(n=document.createElement("div")).setAttribute("class","m-header-sub-navigation__row m-header-sub-navigation__row--col-"+String(a||(2===(t=i.length)?t:t%3==0&&t%4!=0?3:4))),x(n,["\n\n  ",Array.isArray(i)&&i.map(function(e){var n,t,i,a,o=e.links,s=e.title,d=e.url,l=void 0===d?"":d;return(i=document.createElement("div")).setAttribute("class",""+String(c("m-header-sub-navigation__block",{"m-header-sub-navigation__block--wide":r}))),x(i,["\n      ",(n=document.createElement("strong"),n.setAttribute("class","m-header-sub-navigation__category"),x(n,["\n        ",l?(a=document.createElement("a"),a.setAttribute("href",""+String(l)),a.setAttribute("class","m-header-sub-navigation__category__link"),x(a,[s]),a):s,"\n      "]),n),"\n\n      ",(t=document.createElement("ul"),t.setAttribute("class","m-header-sub-navigation__list"),x(t,["\n        ",o&&o.map(w),"\n      "]),t),"\n    "]),i}),"\n  "]),n},C=function(e){var n=e.items,t=e.indexUrl,i=e.indexTitle,a=[];if(Array.isArray(n)){var r,o,s,d,l,u;if(i&&t)a.push(((u=document.createElement("div")).setAttribute("class","m-header-sub-navigation__index"),x(u,["\n          ",(l=document.createElement("div"),l.setAttribute("class","m-header-sub-navigation__index-box"),x(l,["\n            ",(o=document.createElement("a"),o.setAttribute("href",""+String(t)),o.setAttribute("class","m-header-sub-navigation__index-link js-header-navigation-close"),x(o,[i]),o),"\n            ",(d=document.createElement("button"),d.setAttribute("type","button"),d.setAttribute("class","m-header-sub-navigation__index-close js-header-navigation-close"),x(d,["\n              Close\n              ",(s=document.createElement("axa-icon"),s.setAttribute("icon","cross-gap"),s.setAttribute("classes","m-header-sub-navigation__index-close__icon"),s),"\n            "]),d),"\n          "]),l),"\n        "]),u));a.push(((r=document.createElement("div")).setAttribute("class","m-header-sub-navigation__box"),x(r,["\n        ",n&&n.map(k),"\n      "]),r))}return a},A=1,O=3,E=8;function N(e,n){var t=e.nodeType,i=e.nodeName;t===A&&function(e,n){for(var t=n.attributes,i=e.attributes,a=null,r=null,o=null,s=null,d=i.length-1;d>=0;--d)if(s=i[d],o=s.name,a=s.namespaceURI,r=s.value,a){var l=s.localName;n.getAttributeNS(a,l||o)!==r&&n.setAttributeNS(a,o,r)}else n.hasAttribute(o)?n.getAttribute(o)!==r&&("null"===r||"undefined"===r?n.removeAttribute(o):n.setAttribute(o,r)):n.setAttribute(o,r);for(var u=t.length-1;u>=0;--u)!1!==(s=t[u]).specified&&(o=s.name,(a=s.namespaceURI)?(o=s.localName||o,e.hasAttributeNS(a,o)||n.removeAttributeNS(a,o)):e.hasAttributeNS(null,o)||n.removeAttribute(o))}(e,n),t!==O&&t!==E||n.nodeValue===e.nodeValue||(n.nodeValue=e.nodeValue),"INPUT"===i?function(e,n){var t=e.value,i=n.value;T(e,n,"checked"),T(e,n,"disabled"),t!==i&&(n.setAttribute("value",t),n.value=t);"null"===t&&(n.value="",n.removeAttribute("value"));e.hasAttributeNS(null,"value")?"range"===n.type&&(n.value=t):n.removeAttribute("value")}(e,n):"OPTION"===i?T(e,n,"selected"):"TEXTAREA"===i&&function(e,n){var t=e.value;t!==n.value&&(n.value=t);if(n.firstChild&&n.firstChild.nodeValue!==t){if(""===t&&n.firstChild.nodeValue===n.placeholder)return;n.firstChild.nodeValue=t}}(e,n)}function T(e,n,t){e[t]!==n[t]&&(n[t]=e[t],e[t]?n.setAttribute(t,""):n.removeAttribute(t))}var j=3;function S(e,n){return n?e?e.isSameNode&&e.isSameNode(n)?n:e.tagName!==n.tagName?e:(N(e,n),n.skipChildren&&n.skipChildren()||function(e,n){for(var t=void 0,i=void 0,a=void 0,r=void 0,o=0,s=0;t=n.childNodes[s],i=e.childNodes[s-o],t||i;s++)if(i)if(t)if(P(i,t))(a=S(i,t))!==t&&(n.replaceChild(a,t),o++);else{r=null;for(var d=s;d<n.childNodes.length;d++)if(P(n.childNodes[d],i)){r=n.childNodes[d];break}r?((a=S(i,r))!==r&&o++,n.insertBefore(a,t)):i.id||t.id?(n.insertBefore(i,t),o++):(a=S(i,t))!==t&&(n.replaceChild(a,t),o++)}else n.appendChild(i),o++;else n.removeChild(t),s--}(e,n),n):null:e}function P(e,n){return e.id?e.id===n.id:e.isSameNode?e.isSameNode(n):e.tagName===n.tagName&&(e.type===j&&e.nodeValue===n.nodeValue)}var R=[];var L=/^\s*(?:true|false|null|undefined|-?[0-9]+\.?[0-9]*|[[{](?:.|[\r\n])*[\]}])\s*$/;function M(e,n){var t=e;if(e&&n!==e){if(L.test(e))try{t=JSON.parse(e)}catch(t){console.error("Attribute "+n+" has an error:\n"+t+"\n",e)}}else t=!0;return t}var V=function(){try{var e=new window.CustomEvent("test",{cancelable:!0});if(e.preventDefault(),!0!==e.defaultPrevented)throw new Error("Could not prevent default");return window.CustomEvent}catch(e){}return n;function n(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},t=n.bubbles,i=void 0!==t&&t,a=n.cancelable,r=void 0!==a&&a,o=n.detail,s=void 0===o?void 0:o,d=document.createEvent("CustomEvent");d.initCustomEvent(e,i,r,s);var l=d.preventDefault;return d.preventDefault=function(){l.call(d);try{Object.defineProperty(this,"defaultPrevented",{get:function(){return!0}})}catch(e){this.defaultPrevented=!0}},d}}();function D(e,n,t){var i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},r=new V(n,a({},i,{detail:t}));return e.dispatchEvent(r)}var z=function(){var e=!1;if("undefined"!=typeof window&&"function"==typeof window.addEventListener){var n=Object.defineProperty({},"passive",{get:function(){e=!0}}),t=function(){};window.addEventListener("testPassiveEventSupport",t,n),window.removeEventListener("testPassiveEventSupport",t,n)}return e}();function U(e){for(var n=e.className,t=!1,i=!0,a=arguments.length,r=Array(a>1?a-1:0),o=1;o<a;o++)r[o-1]=arguments[o];var s=r.map(function(e){var a=(r=e,new RegExp("^"+r+"$|^"+r+"\\s|\\s"+r+"\\s|\\s"+r+"$",o)).test(n);var r,o;a?t=!0:i=!1;return{className:e,hasClass:a}});return!(!i&&!t)&&s}var F=/\s+/,I={transitionend:function(){for(var e=document.createElement("div").style,n={transition:"transitionend",OTransition:"oTransitionEnd otransitionend",MozTransition:"transitionend",WebkitTransition:"webkitTransitionEnd"},t=Object.keys(n),i=t.length,a=void 0,r=0;r<i;++r)if(void 0!==e[a=t[r]])return n[a];return""}()};function W(e,t,i,a){var r=arguments.length>4&&void 0!==arguments[4]?arguments[4]:{},o=r.capture,s=void 0!==o&&o,d=r.passive,l=void 0===d||d;if(I[t]&&(t=I[t]),!e||!t)return null;var u=void 0===i?"undefined":n(i),c=i&&"string"===u;if("function"===u){if(a){var h=a;s=h.capture,l=h.passive}a=i}for(var p=z?{capture:s,passive:l}:s,f=c?function(n){var t=n.target;for(;!U(t,i)&&t!==e;)t=t.parentNode;if(t!==e)return a(n,t)}:a,b=t.split(F),v=b.length,m=0;m<v;++m)e.addEventListener(b[m],f,p);return function n(){for(var t=0;t<v;++t)e.removeEventListener(b[t],f,p);!function(e,n){if(!e)return!1;for(var t=Object.keys(e),i=t.length,a=0;a<i;++a){var r=t[a];if(e[r]===n)return delete e[r]}}(this,n)}}function H(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},i=t.leading,a=void 0!==i&&i,r=t.trailing,o=void 0===r||r,s=t.maxWait,d=void 0!==s&&s,l=void 0,c=void 0,h=void 0,p=void 0,f=!1,b=n!==d,v=!1!==d;function m(){for(var t=arguments.length,i=Array(t),r=0;r<t;r++)i[r]=arguments[r];return l=i,b&&(c&&clearTimeout(c),c=setTimeout(_,n)),v&&!h&&(h=setTimeout(g,d)),a&&!f&&(f=!0,p=e.apply(void 0,u(l))),p}return m.flush=function(){(c||h)&&(p=e.apply(void 0,u(l)));return y(),p},m.cancel=y,m;function _(){h&&clearTimeout(h),x()}function g(){c&&clearTimeout(c),x()}function x(){o&&(p=e.apply(void 0,u(l))),c=null,h=null,f=!1}function y(){c&&(clearTimeout(c),c=null),h&&(clearTimeout(h),h=null),l=void 0,f=!1}}var q={};function B(e,n){var t=W(arguments.length>2&&void 0!==arguments[2]?arguments[2]:document,e,n);q[e]||(q[e]={count:0});var i,a=q[e];return a.count++,a.onsubscribe||(a.onsubscribe=H((i=e,function(){D(document,"pubsub/onsubscribe",i),D(document,"pubsub/onsubscribe/"+i,i),q[i]&&delete q[i].unsubscribe}),100)),a.onsubscribe(),function(){a.count--,t.call(this),a.count<=0&&delete q[e]}}W(document,"pubsub/onsubscribe",function(e){var n=e.detail;q[n]||(q[n]={count:0});var t=q[n],i=t.queue;Array.isArray(i)&&(i.forEach(function(e){var n=l(e,3),t=n[0],i=n[1],a=n[2];D(a,t,i)}),delete t.queue)});var $=/(?:^\w|[A-Z]|\b\w|\s+|[-_]+)/g,K=/[-_]+/g;function G(e){return e.replace($,Z)}function Z(e,n){return 0==+e||K.test(e)?"":0===n?e.toLowerCase():e.toUpperCase()}var J=/[A-Z]/g;function X(e,n,t){var i=e.toLowerCase(),a=t.charAt(n+1);return 0===n||a.toUpperCase()===a?i:"-"+i}var Q=function(e,n){return e===n},Y=function(e){function n(e,i){var a;t(this,n);for(var r="Property >>>"+e+"<<< exists at "+i.nodeName+"#"+i._id+" and evaluates to -> "+i[e],o=arguments.length,d=Array(o>2?o-2:0),l=2;l<o;l++)d[l-2]=arguments[l];var u=s(this,(a=n.__proto__||Object.getPrototypeOf(n)).call.apply(a,[this,r].concat(d)));return Error.captureStackTrace&&Error.captureStackTrace(u,n),u.name="PropertyExistsException",u}return o(n,e),n}(Error);function ee(){return Reflect.construct(HTMLElement,[],this.__proto__.constructor)}Object.setPrototypeOf(ee.prototype,HTMLElement.prototype),Object.setPrototypeOf(ee,HTMLElement);var ne,te,ie,ae,re="throwed",oe=["title","checked","disabled"],se={},de=function(e){return e in se||(se[e]=0),++se[e]},le=((ne=function(){var e;return(e=console).log.apply(e,arguments)},function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Q;return function(){for(var n=arguments.length,t=Array(n),i=0;i<n;i++)t[i]=arguments[i];return function(){for(var n=arguments.length,i=Array(n),a=0;a<n;a++)i[a]=arguments[a];return function(){return e.apply(void 0,[].concat(t,i))?ne.apply(void 0,arguments):void 0}}}})()(!0),function(e){function a(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",n=arguments[1];t(this,a);var i=s(this,(a.__proto__||Object.getPrototypeOf(a)).call(this));i._reduceProps=function(e,n){var t=e.props,r=e.shouldUpdate,o=i._hasKeys[n];if(-1===oe.indexOf(n)&&o)throw new Y(n,i);var s="_"+n,l=t[n],u=i[s];return r||i.shouldUpdateCallback(l,u)?(i[s]=l,i._props[n]=l,o&&d(a.prototype.__proto__||Object.getPrototypeOf(a.prototype),n,l,i),{props:t,shouldUpdate:!0}):{props:t,shouldUpdate:!1}},i._makeContextReady=function(){var e=(arguments.length>0&&void 0!==arguments[0]?arguments[0]:{}).detail;i.contextNode&&(clearTimeout(i.timeoutId),i.timeoutId=setTimeout(function(){i.contextCallback(i.contextNode,e)},10)),i.unContextEnabled&&i.unContextEnabled(),i.unContextEnabled=B("context/enabled",i._makeContextReady)},i._initialise(e,n),i._id=de(i.nodeName),i._props={},i._hasKeys={},i.reRender=H(function(){return i.render()},50);var r=i.constructor.observedAttributes;return Array.isArray(r)&&r.forEach(function(e){var n,t=G(e),a=t in i;if(-1===oe.indexOf(t)&&a)throw new Y(t,i);i._hasKeys[t]=a,Object.defineProperty(i,t,n={get:function(){return this["_"+t]},set:function(e){var i="_"+t;this.shouldUpdateCallback(this[i],e)&&(this[i]=e,this._props[t]=e,a&&d(n.__proto__||Object.getPrototypeOf(n),t,e,this),this._isConnected&&this._hasRendered&&this.reRender())}})}),i}return o(a,ee),i(a,[{key:"_initialise",value:function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;this._styles=e,this._template=n,this._hasTemplate=!!n,this._hasRendered=!1,this._isConnected=!1}},{key:"connectedCallback",value:function(){var e=this;if(!this._isConnected){this._isConnected=!0;var n=this.constructor.observedAttributes;this.initialClassName=this.className,Array.isArray(n)&&n.forEach(function(n){var t=G(n);if(e.hasAttribute(n)){var i=function(e,n){if("function"==typeof e.hasAttribute&&!e.hasAttribute(n))return!1;var t=e.value;return n?t=e.getAttribute(n):n=e.name,t=M(t,n)}(e,n),r=e._hasKeys[t];e["_"+t]=i,e._props[t]=i,r&&d(a.prototype.__proto__||Object.getPrototypeOf(a.prototype),t,i,e)}})}this._appendStyles(),this.render(),this.contextCallback&&this._makeContextReady()}},{key:"attributeChangedCallback",value:function(e,n,t){this.shouldUpdateCallback(t,n)&&(this[G(e)]=M(t))}},{key:"batchProps",value:function(e){var n=this.constructor.observedAttributes,t=void 0===n?[]:n;Object.keys(e).filter(function(e){return t.indexOf(e.replace(J,X))>-1}).reduce(this._reduceProps,{props:e,shouldUpdate:!1}).shouldUpdate&&this._isConnected&&this._hasRendered&&this.render()}},{key:"shouldUpdateCallback",value:function(e,n){return e!==n}},{key:"disconnectedCallback",value:function(){this.unContextEnabled&&this.unContextEnabled(),this._isConnected=!1}},{key:"_appendStyles",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this;if(this._styles){var n=document.createElement("style"),t=document.createTextNode(this._styles);n.appendChild(t),e.insertAdjacentElement?e.insertAdjacentElement("afterbegin",n):e.appendChild(n)}}},{key:"render",value:function(){var e=this,t=!this._hasRendered;if(this.willRenderCallback(t),this._hasTemplate){var i=this._template;try{if(t){for(var o=document.createDocumentFragment(),s=[];this.firstChild;)s.push(this.firstChild),o.appendChild(this.firstChild);this._lightDOMRefs=s,this.childrenFragment=o}else this._lightDOMRefs.forEach(function(n){var t=n.cloneNode(!0);e.childrenFragment.appendChild(t)});var d=i(this._props,this.childrenFragment),l=document.createDocumentFragment();if(Array.isArray(d))d.forEach(function(e){l.appendChild(e)});else if(d){if("string"==typeof d){var u=new Error(re);throw console.error("\n%cWeb Component %c"+this.nodeName+"%c#"+this._id+" does not accept string as a return from a template. Maybe use bel?\n\nStack Trace: "+u.stack+"\n","color: #580000; font-size: 14px; line-height:16px;","background: #8b0000; color: #FFF; font-size: 14px; line-height:16px;","color: #580000; font-size: 14px; line-height:16px;"),u}l.appendChild(d)}if(t)r(a.prototype.__proto__||Object.getPrototypeOf(a.prototype),"appendChild",this).call(this,l);else{var c=this.cloneNode(!1);c._isMorphing=!0,c.appendChild(l),this._isMorphing=!0,function(e,t){if("object"!==(void 0===e?"undefined":n(e)))throw new Error("componentMorph: oldTree should be an object");if("object"!==(void 0===t?"undefined":n(t)))throw new Error("componentMorph: newTree should be an object");S(t,e)}(this,c),function(){for(var e=void 0;e=R.pop();)delete e.isSameNode;R=[]}(),this._isMorphing=!1}}catch(u){u.message!==re&&console.error("\n%cWeb Component %c"+this.nodeName+"%c#"+this._id+" has an error while loading its template:\n"+u+"\n\nStack Trace: "+u.stack+"\n","color: #580000; font-size: 14px; line-height:16px;","background: #8b0000; color: #FFF; font-size: 14px; line-height:16px;","color: #580000; font-size: 14px; line-height:16px;")}}this._hasRendered=!0,this.didRenderCallback(t)}},{key:"willRenderCallback",value:function(e){}},{key:"didRenderCallback",value:function(e){}},{key:"appendChild",value:function(e){!this._isMorphing&&this._hasTemplate&&this._hasRendered?(this._lightDOMRefs.push(e),this.render()):r(a.prototype.__proto__||Object.getPrototypeOf(a.prototype),"appendChild",this).call(this,e)}},{key:"skipChildren",value:function(){return!this._isMorphing}},{key:"enableContext",value:function(){var e=this.nodeName.toLowerCase();this.__isContext=!0,this.__contextName=e,function(e,n){var t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:document;q[e]||(q[e]={count:0,queue:[]});var i=q[e].queue;Array.isArray(i)?i.push([e,n,t]):D(t,e,n)}("context/enabled",e)}},{key:"selectContext",value:function(e){this.__selectedContext=e&&e.toLowerCase()}},{key:"innerText",set:function(e){if(this._hasTemplate&&this._hasRendered){var n=document.createTextNode(e);this._lightDOMRefs=[n],this.render()}else d(a.prototype.__proto__||Object.getPrototypeOf(a.prototype),"innerText",e,this)}},{key:"textContent",set:function(e){if(this._hasTemplate&&this._hasRendered){var n=document.createTextNode(e);this._lightDOMRefs=[n],this.render()}else d(a.prototype.__proto__||Object.getPrototypeOf(a.prototype),"textContent",e,this)}},{key:"innerHTML",set:function(e){if(this._hasTemplate&&this._hasRendered){var n=document.createElement("div");n.innerHTML=e,this._lightDOMRefs=Array.from(n.children),this.render()}else d(a.prototype.__proto__||Object.getPrototypeOf(a.prototype),"innerHTML",e,this)}},{key:"contextNode",get:function(){for(var e=this.__selectedContext,n=this.parentNode;n&&(!n.__isContext||e&&e!==n.__contextName);)n=n.parentNode;return!(!n||!n.__isContext)&&n}}],[{key:"uuidv4",value:function(){return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,function(e){var n=16*Math.random()|0;return("x"==e?n:3&n|8).toString(16)})}}]),a}()),ue={},ce=function(e){function n(){return t(this,n),s(this,(n.__proto__||Object.getPrototypeOf(n)).apply(this,arguments))}return o(n,le),i(n,[{key:"_appendStyles",value:function(){n.appendGlobalStyles(this._styles,this.nodeName)}}],[{key:"appendGlobalStyles",value:function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:le.uuidv4();if(e&&!ue[e]){var t=document.createElement("style"),i=document.createTextNode(e);t.appendChild(i),t.setAttribute("data-c-name",n.toLowerCase()),document.querySelector("head").appendChild(t),ue[e]=!0}}}]),n}(),he=function(e){function n(){return t(this,n),s(this,(n.__proto__||Object.getPrototypeOf(n)).call(this,h,C))}return o(n,ce),i(n,null,[{key:"observedAttributes",get:function(){return["flyout","index-title","index-url","items"]}}]),i(n,[{key:"willRenderCallback",value:function(){var e=this.flyout;this.className=c(this.initialClassName,"m-header-sub-navigation js-header-sub-navigation",{"m-header-sub-navigation--flyout":e})}}]),n}();return te=function(){window.customElements.define("axa-header-sub-navigation",he)},ie=0,ae=function(){if(0===ie)try{te.apply(void 0,arguments),ie+=1,document.removeEventListener("DOMContentLoaded"),document.removeEventListener("WebComponentsReady")}catch(e){}},document.addEventListener("DOMContentLoaded",ae,!1),document.addEventListener("WebComponentsReady",ae,!1),he});
