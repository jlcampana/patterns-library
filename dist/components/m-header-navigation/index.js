var StyleGuideWebComponent=function(){"use strict";var e,t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},n=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")},i=function(){function e(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(t,n,i){return n&&e(t.prototype,n),i&&e(t,i),t}}(),o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e},r=function e(t,n,i){null===t&&(t=Function.prototype);var o=Object.getOwnPropertyDescriptor(t,n);if(void 0===o){var r=Object.getPrototypeOf(t);return null===r?void 0:e(r,n,i)}if("value"in o)return o.value;var a=o.get;return void 0!==a?a.call(i):void 0},a=function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)},s=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t},l=function e(t,n,i,o){var r=Object.getOwnPropertyDescriptor(t,n);if(void 0===r){var a=Object.getPrototypeOf(t);null!==a&&e(a,n,i,o)}else if("value"in r&&r.writable)r.value=i;else{var s=r.set;void 0!==s&&s.call(o,i)}return i},u=function(){return function(e,t){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return function(e,t){var n=[],i=!0,o=!1,r=void 0;try{for(var a,s=e[Symbol.iterator]();!(i=(a=s.next()).done)&&(n.push(a.value),!t||n.length!==t);i=!0);}catch(e){o=!0,r=e}finally{try{!i&&s.return&&s.return()}finally{if(o)throw r}}return n}(e,t);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),c=function(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}return Array.from(e)},d=(function(e){!function(){var n={}.hasOwnProperty;function i(){for(var e=[],o=0;o<arguments.length;o++){var r=arguments[o];if(r){var a=void 0===r?"undefined":t(r);if("string"===a||"number"===a)e.push(r);else if(Array.isArray(r))e.push(i.apply(null,r));else if("object"===a)for(var s in r)n.call(r,s)&&r[s]&&e.push(s)}}return e.join(" ")}e.exports?e.exports=i:window.classNames=i}()}(e={exports:{}},e.exports),e.exports),h="@-webkit-keyframes fadeOutRightInLeft {\n  0% {\n    opacity: 1; }\n  50% {\n    opacity: 0;\n    -webkit-transform: translate3d(100%, 0, 0);\n            transform: translate3d(100%, 0, 0); }\n  51% {\n    opacity: 0;\n    -webkit-transform: translate3d(-100%, 0, 0);\n            transform: translate3d(-100%, 0, 0); }\n  100% {\n    opacity: 1;\n    -webkit-transform: none;\n            transform: none; } }\n\n@keyframes fadeOutRightInLeft {\n  0% {\n    opacity: 1; }\n  50% {\n    opacity: 0;\n    -webkit-transform: translate3d(100%, 0, 0);\n            transform: translate3d(100%, 0, 0); }\n  51% {\n    opacity: 0;\n    -webkit-transform: translate3d(-100%, 0, 0);\n            transform: translate3d(-100%, 0, 0); }\n  100% {\n    opacity: 1;\n    -webkit-transform: none;\n            transform: none; } }\n\n.a-stroke,\n.m-header-navigation__list-link.is-header-navigation-active::after {\n  -webkit-transform: translate3d(0, 0, 0);\n          transform: translate3d(0, 0, 0);\n  -webkit-backface-visibility: hidden;\n          backface-visibility: hidden;\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  z-index: 1px;\n  display: block;\n  width: 0;\n  height: 0;\n  background: #f07662;\n  -webkit-transition: height 0.2s ease;\n  transition: height 0.2s ease; }\n\n.a-stroke.is-stroke-enter {\n  height: 4px; }\n\n.a-stroke.is-stroke-move {\n  -webkit-transition: left 0.2s ease, width 0.2s ease;\n  transition: left 0.2s ease, width 0.2s ease; }\n\n.a-stroke.is-stroke-static {\n  left: 0 !important;\n  bottom: 1px; }\n\n.a-stroke.is-stroke-transition-off {\n  -webkit-transition-property: none !important;\n  transition-property: none !important;\n  -webkit-transition-duration: 0s !important;\n          transition-duration: 0s !important; }\n\n.m-header-navigation__list-link.is-header-navigation-active::after {\n  bottom: 1px;\n  width: 100%;\n  height: 4px;\n  content: ''; }\n  .is-stroke-interactive .m-header-navigation__list-link.is-header-navigation-active::after {\n    height: 0; }\n\n.m-header-navigation__list-link.is-header-navigation-active.is-stroke-active-open::after {\n  -webkit-transition-property: none;\n  transition-property: none;\n  -webkit-transition-duration: 0s;\n          transition-duration: 0s; }\n\n.m-header-navigation__list-link.is-header-navigation-active.is-stroke-active-move::after {\n  height: 4px; }\n\n.m-header-navigation {\n  display: block;\n  margin-left: auto; }\n  @media (max-width: 991px) {\n    .m-header-navigation {\n      display: none; } }\n\n.m-header-navigation__list {\n  padding: 0;\n  margin: 0;\n  list-style-type: none;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex; }\n\n.m-header-navigation__list-item {\n  display: block;\n  float: left;\n  margin: 0 8px; }\n\n.m-header-navigation__list-link {\n  color: #00008f;\n  font-size: 12px;\n  font-weight: 600;\n  line-height: 1.5;\n  letter-spacing: 0.02em;\n  position: relative;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  height: 75px;\n  padding: 0 10px;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  text-align: center;\n  text-transform: uppercase;\n  vertical-align: middle;\n  /* stylelint-disable indentation */\n  /* stylelint-enable indentation */ }\n  @media (min-width: 576px) {\n    .m-header-navigation__list-link {\n      font-size: 13px;\n      line-height: 1.38; } }\n  .m-header-navigation__list-link.is-header-navigation-active, .m-header-navigation__list-link:hover, .m-header-navigation__list-link:active, .m-header-navigation__list-link:focus {\n    color: #00005b;\n    text-decoration: none; }\n  .m-header-navigation__list-link--hyphenate,\n  .m-header-navigation--hyphenate .m-header-navigation__list-link {\n    /* Adds a hyphen where the word breaks, if supported (No Blink) */\n    -webkit-hyphens: auto;\n        -ms-hyphens: auto;\n            hyphens: auto;\n    /* These are technically the same, but use both */\n    overflow-wrap: break-word;\n    word-wrap: break-word; }\n",p=/\n[\s]+$/,f=/^\n[\s]+/,v=/[\s]+$/,_=/^[\s]+/,y=/[\n\s]+/g,m=["a","abbr","b","bdi","bdo","br","cite","data","dfn","em","i","kbd","mark","q","rp","rt","rtc","ruby","s","amp","small","span","strong","sub","sup","time","u","var","wbr"],g=["code","pre","textarea"],b=function e(t,n){if(Array.isArray(n))for(var i,o,r=t.nodeName.toLowerCase(),a=!1,s=0,l=n.length;s<l;s++){var u=n[s];if(Array.isArray(u))e(t,u);else{("number"==typeof u||"boolean"==typeof u||"function"==typeof u||u instanceof Date||u instanceof RegExp)&&(u=u.toString());var c=t.childNodes[t.childNodes.length-1];if("string"==typeof u)a=!0,c&&"#text"===c.nodeName?c.nodeValue+=u:(u=document.createTextNode(u),t.appendChild(u),c=u),s===l-1&&(a=!1,-1===m.indexOf(r)&&-1===g.indexOf(r)?""===(i=c.nodeValue.replace(f,"").replace(v,"").replace(p,"").replace(y," "))?t.removeChild(c):c.nodeValue=i:-1===g.indexOf(r)&&(o=0===s?"":" ",i=c.nodeValue.replace(f,o).replace(_," ").replace(v,"").replace(p,"").replace(y," "),c.nodeValue=i));else if(u&&u.nodeType){a&&(a=!1,-1===m.indexOf(r)&&-1===g.indexOf(r)?""===(i=c.nodeValue.replace(f,"").replace(p,"").replace(y," "))?t.removeChild(c):c.nodeValue=i:-1===g.indexOf(r)&&(i=c.nodeValue.replace(_," ").replace(f,"").replace(p,"").replace(y," "),c.nodeValue=i));var d=u.nodeName;d&&(r=d.toLowerCase()),t.appendChild(u)}}}};var k=function(e){var t,n=document.createElement("div");return n.innerHTML=e,t=n.childNodes,Array.isArray(t)?t:[].slice.call(t)},C=function(e){var t,n=e.items,i=e.simplemenu;return(t=document.createElement("ul")).setAttribute("class","m-header-navigation__list js-header-navigation__list"),b(t,["\n    ",Array.isArray(n)&&n.map(function(e){return t=o({},e,{simplemenu:i}),s=t.url,l=void 0===s?"":s,u=t.name,c=void 0===u?"":u,h=t.items,p=t.classes,f=t.isActive,v=t.simplemenu,_=t.hyphenate,y=void 0!==_&&_,(r=document.createElement("li")).setAttribute("class","m-header-navigation__list-item"),b(r,["\n      ",(n=document.createElement("a"),n.setAttribute("data-prevent-default","data-prevent-default"),n.setAttribute("href",""+String(l)),n.setAttribute("class",""+String(d("m-header-navigation__list-link",p,{"js-header-navigation__list-link":h||!!v,"is-header-navigation-active":f,"m-header-navigation__list-link--hyphenate":y}))),b(n,[k(c)]),n),"\n      ",Array.isArray(h)?(a=document.createElement("axa-header-sub-navigation"),a.setAttribute("index-title",""+String(c)),a.setAttribute("index-url",""+String(l)),a.setAttribute("items",""+String(JSON.stringify(h))),a.setAttribute("flyout","flyout"),b(a,["\n        "]),a):"","\n    "]),r;var t,n,r,a,s,l,u,c,h,p,f,v,_,y}),"\n  "]),t};function x(e,t){for(var n=[],i=Object.keys(t),o=i.length,r=0;r<o;++r){var a=i[r];n.push(a+":"+t[a]+";")}e.style.cssText=n.join("")}var w=function(){var e=!1;if("undefined"!=typeof window&&"function"==typeof window.addEventListener){var t=Object.defineProperty({},"passive",{get:function(){e=!0}}),n=function(){};window.addEventListener("testPassiveEventSupport",n,t),window.removeEventListener("testPassiveEventSupport",n,t)}return e}(),N=/^\s+|\s{2,}|\s+$/g;function A(e,t){return new RegExp("^"+e+"$|^"+e+"\\s|\\s"+e+"\\s|\\s"+e+"$",t)}function O(e){for(var t=arguments.length,n=Array(t>1?t-1:0),i=1;i<t;i++)n[i-1]=arguments[i];var o=T.apply(void 0,[e].concat(n));if(!0!==o){var r=[].concat(n);Array.isArray(o)&&(r=o.reduce(E,[])),r&&(e.className+=" "+r.join(" "))}}function E(e,t){var n=t.className;return t.hasClass||e.push(n),e}function T(e){for(var t=e.className,n=!1,i=!0,o=arguments.length,r=Array(o>1?o-1:0),a=1;a<o;a++)r[a-1]=arguments[a];var s=r.map(function(e){var o=A(e).test(t);o?n=!0:i=!1;return{className:e,hasClass:o}});return!(!i&&!n)&&s}function S(e){for(var t=arguments.length,n=Array(t>1?t-1:0),i=1;i<t;i++)n[i-1]=arguments[i];var o=T.apply(void 0,[e].concat(n));if(!1!==o){var r=[].concat(n);if(Array.isArray(o)&&(r=o.reduce(j,[])),r){var a=e.className;e.className=r.reduce(M,a)}}}function j(e,t){var n=t.className;return t.hasClass&&e.push(n),e}function M(e,t){var n=A(t,"g");return e.replace(n," ").replace(N," ")}var P=/\s+/,D={transitionend:function(){for(var e=document.createElement("div").style,t={transition:"transitionend",OTransition:"oTransitionEnd otransitionend",MozTransition:"transitionend",WebkitTransition:"webkitTransitionEnd"},n=Object.keys(t),i=n.length,o=void 0,r=0;r<i;++r)if(void 0!==e[o=n[r]])return t[o];return""}()};function R(e,n,i,o){var r=arguments.length>4&&void 0!==arguments[4]?arguments[4]:{},a=r.capture,s=void 0!==a&&a,l=r.passive,u=void 0===l||l;if(D[n]&&(n=D[n]),!e||!n)return null;var c=void 0===i?"undefined":t(i),d=i&&"string"===c;if("function"===c){if(o){var h=o;s=h.capture,u=h.passive}o=i}for(var p=w?{capture:s,passive:u}:s,f=d?function(t){var n=t.target;for(;!T(n,i)&&n!==e;)n=n.parentNode;if(n!==e)return o(t,n)}:o,v=n.split(P),_=v.length,y=0;y<_;++y)e.addEventListener(v[y],f,p);return function t(){for(var n=0;n<_;++n)e.removeEventListener(v[n],f,p);!function(e,t){if(!e)return!1;for(var n=Object.keys(e),i=n.length,o=0;o<i;++o){var r=n[o];if(e[r]===t)return delete e[r]}}(this,t)}}var L,U=function(){if(!window.getComputedStyle)return null;var e=window.getComputedStyle(document.documentElement,""),t=(Array.prototype.slice.call(e).join("").match(/-(moz|webkit|ms)-/)||""===e.OLink&&["","o"])[1];return{dom:"WebKit|Moz|MS|O".match(new RegExp("("+t+")","i"))[1],lowercase:t,css:"-"+t+"-",js:t[0].toUpperCase()+t.slice(1)}}().lowercase,F=function(){var e=window.requestAnimationFrame||window[U+"RequestAnimationFrame"];if(e)e=e.bind(window);else{var t=0;e=function(e){var n=Date.now(),i=Math.max(0,16-(n-t)),o=setTimeout(function(){e(n+i)},i);return t=n+i,o}}return e}(),z=L=(L=window.cancelAnimationFrame||window[U+"CancelAnimationFrame"]||window[U+"CancelRequestAnimationFrame"])?L.bind(window):function(e){clearTimeout(e)};var V=/^\s*(?:true|false|null|undefined|-?[0-9]+\.?[0-9]*|[[{](?:.|[\r\n])*[\]}])\s*$/;function I(e,t){var n=e;if(e&&t!==e){if(V.test(e))try{n=JSON.parse(e)}catch(n){console.error("Attribute "+t+" has an error:\n"+n+"\n",e)}}else n=!0;return n}function q(e,t){if("function"==typeof e.hasAttribute&&!e.hasAttribute(t))return!1;var n=e.value;return t?n=e.getAttribute(t):t=e.name,n=I(n,t)}var W=/iPad|iPhone|iPod/.test(navigator.userAgent)&&!window.MSStream;function K(e,t,n){var i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},o=i.capture,r=void 0===o||o,a=i.passive,s=void 0===a||a,l=e.ownerDocument.documentElement,u=R(l,t,function(t){var i=t.target;if(!e.contains(i)&&e!==i)return n(t)},{capture:r,passive:s});return W&&(l.style.cursor="pointer"),u}var H=function(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];for(var i=t.length,o={},r=0;r<i;++r){var a=t[r];o[a.toUpperCase()]=a}return o}("click","keyup","enter","move","leave","Escape","Esc"),$="data-prevent-default",B=function(){function e(t){var i=this,o=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};n(this,e),this._handleClick=function(e,t){i.shouldPreventDefault(t||e.currentTarget)&&e.preventDefault();var n=!i._lastToggleNode,o=t!==i._lastToggleNode,r=!n&&!o;n?(i._notify(H.ENTER,t),i._onInteractive()):o&&i._notify(H.MOVE,t,i._lastToggleNode),i._lastToggleNode=t,r&&i._options.sameClickClose&&i._close()},this._handleClose=function(e,t){i.shouldPreventDefault(t||e.currentTarget)&&e.preventDefault(),i._close()},this._handleKeyUp=function(e){(e.key===H.ESCAPE||e.key===H.ESC||27===e.keyCode)&&(e.preventDefault(),i._close())},this._init(t,o)}return i(e,[{key:"_init",value:function(t,n){t&&(this._wcNode=t),n&&(this._options=o({},e.DEFAULTS,n));var i=this._options.containerClass;this._container=i?this._wcNode.querySelector(i):this._wcNode,this._on()}},{key:"_on",value:function(){this._off(),this._unClick=R(this._container,H.CLICK,this._options.toggleClass,this._handleClick,{passive:!this._options.preventDefault})}},{key:"_off",value:function(){this._unClick&&this._unClick(),this._offInteractive()}},{key:"_onInteractive",value:function(){this._offInteractive(),this._options.closeClass&&(this._unCloseClick=R(this._container,H.CLICK,this._options.closeClass,this._handleClose,{passive:!this._options.preventDefault})),this._options.outerClose&&(this._unOuterClick=K(this._container,H.CLICK,this._handleClose,{passive:!this._options.preventDefault})),this._options.escapeClose&&(this._unCloseEscape=R(this._container.ownerDocument,H.KEYUP,this._handleKeyUp,{passive:!1}))}},{key:"shouldPreventDefault",value:function(e){return e.hasAttribute($)?q(e,$):this._options.preventDefault}},{key:"_offInteractive",value:function(){this._unOuterClick&&this._unOuterClick(),this._unCloseClick&&this._unCloseClick(),this._unCloseEscape&&this._unCloseEscape(),delete this._lastToggleNode}},{key:"_close",value:function(){this._lastToggleNode&&(this._notify(H.LEAVE,this._lastToggleNode),this._offInteractive(),delete this._lastToggleNode)}},{key:"_notify",value:function(e,t,n){e in this&&"function"==typeof this[e]&&this[e](t,n)}},{key:"enter",value:function(e){throw new Error("UiEvent.enter method not overwritten")}},{key:"move",value:function(e,t){}},{key:"leave",value:function(e){throw new Error("UiEvent.leave method not overwritten")}},{key:"destroy",value:function(){this._off(),delete this._wcNode,delete this._options}}]),e}();B.DEFAULTS={containerClass:".js-ui-container",toggleClass:"js-ui-toggle",closeClass:"js-ui-close",escapeClose:!0,outerClose:!0,sameClickClose:!0,preventDefault:!0};var G=function(e){function t(e){var i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};n(this,t);var r=s(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e,{containerClass:".js-header-navigation__list",toggleClass:t.DEFAULTS.toggleClass,closeClass:"js-header-navigation-close",sameClickClose:!i.simpleMenu,preventDefault:!i.simpleMenu,outerClose:!i.simpleMenu,escapeClose:!i.simpleMenu}));return r._handleResize=function(){r.resizeTimeout&&(z(r.resizeTimeout),r.resizeTimeout=null),r.resizeTimeout=F(function(){var e=r._parentNode,t=e.offsetWidth,n=e.offsetLeft;t&&n&&x(r._stroke,{width:t+"px",left:n+"px"})})},r._handleTransitionEnd=function(e){"left"===e.propertyName&&(r._offMoving(),r._handleStaticState(!0))},r.wcNode=e,r.options=o({},t.DEFAULTS,i),r._isStatic=!1,r}return a(t,B),i(t,[{key:"init",value:function(){this._contextNode.style.position="relative",this._list=this._contextNode.querySelector(this.options.list),this._stroke=document.createElement("div"),this._stroke.className=this.options.strokeClass,this._list.appendChild(this._stroke)}},{key:"onContextEnabled",value:function(){if(this._contextNode){var e=this.options;this._init(this._contextNode,{containerClass:".js-header-navigation__list",toggleClass:t.DEFAULTS.toggleClass,closeClass:"js-header-navigation-close",sameClickClose:!e.simpleMenu,preventDefault:!e.simpleMenu,outerClose:!e.simpleMenu,escapeClose:!e.simpleMenu}),this.init()}}},{key:"enter",value:function(e){var t=this,n=e.parentNode;this._node=e,this._parentNode=n,T(e,this.options.activeClass)&&(this._activeNode=e,O(e,this.options.activeOpenClass,this.options.activeMoveClass)),F(function(){t._handleStaticState(!0,!0),O(t._list,t.options.interactiveClass),F(function(){O(t._stroke,t.options.enterClass),x(t._stroke,{width:n.offsetWidth+"px",left:n.offsetLeft+"px"})})})}},{key:"move",value:function(e){var t=this,n=e.parentNode;this._node=e,this._parentNode=n,this._activeNode&&S(this._activeNode,this.options.activeMoveClass),F(function(){t._handleStaticState(!1),F(function(){O(t._stroke,t.options.moveClass),x(t._stroke,{width:n.offsetWidth+"px",left:n.offsetLeft+"px"}),t._onMoving()})})}},{key:"leave",value:function(){var e=this,t=this._node;this._offMoving(),this._activeNode&&(S(this._activeNode,this.options.activeMoveClass,this.options.activeOpenClass),this._activeNode=null),T(t,this.options.activeClass)&&O(t,this.options.activeOpenClass),F(function(){e._handleStaticState(!0),S(e._list,e.options.interactiveClass),F(function(){S(e._stroke,e.options.moveClass,e.options.enterClass),S(t,e.options.activeOpenClass)}),e._parentNode=null,e._node=null})}},{key:"_onMoving",value:function(){var e,t;this._offMoving(),this._unResize=R((e=this.wcNode,(t=e.ownerDocument).defaultView||t.parentWindow),"resize",this._handleResize),this._unTransitionEnd=R(this._stroke,"transitionend",this._handleTransitionEnd)}},{key:"_offMoving",value:function(){this._unResize&&this._unResize(),this._unTransitionEnd&&this._unTransitionEnd()}},{key:"_handleStaticState",value:function(e,t){var n=this;(t||e!==this._isStatic)&&(this._isStatic=e,O(this._stroke,this.options.transitionOffClass),e?(this._node.appendChild(this._stroke),O(this._stroke,this.options.staticClass)):(this._list.appendChild(this._stroke),S(this._stroke,this.options.staticClass)),F(function(){S(n._stroke,n.options.transitionOffClass)}))}},{key:"destroy",value:function(){r(t.prototype.__proto__||Object.getPrototypeOf(t.prototype),"destroy",this).call(this),this._offMoving(),this._stroke&&(this._stroke.parentNode&&this._stroke.parentNode.removeChild(this._stroke),delete this._stroke),delete this._contextNode,delete this.wcNode,delete this.options}},{key:"contextNode",set:function(e){this._contextNode=e,this.onContextEnabled()}}]),t}();function J(e){e&&(e.style.display="none",e.offsetHeight,e.style.display="")}G.DEFAULTS={strokeClass:"a-stroke",list:".js-header-navigation__list",toggleClass:"js-header-navigation__list-link",enterClass:"is-stroke-enter",moveClass:"is-stroke-move",staticClass:"is-stroke-static",interactiveClass:"is-stroke-interactive",activeClass:"is-header-navigation-active",activeOpenClass:"is-stroke-active-open",activeMoveClass:"is-stroke-active-move",transitionOffClass:"is-stroke-transition-off"};var Z=window.navigator.userAgent.indexOf("Edge")>-1,X=function(e){function t(e){var i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};n(this,t);var r=s(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e,{containerClass:".js-header-navigation__list",toggleClass:t.DEFAULTS.toggleClass,closeClass:"js-header-navigation-close",preventDefault:i.preventDefault||!i.simpleMenu,outerClose:!i.simpleMenu,escapeClose:!i.simpleMenu}));return r.wcNode=e,r.options=o({},t.DEFAULTS,{useDefaultEvent:!!i.useDefaultEvent||!!i.simpleMenu},i),r.init(),r}return a(t,B),i(t,[{key:"init",value:function(){this.list=this.wcNode.querySelector(this.options.list)}},{key:"enter",value:function(e){var t=this,n=e.parentNode;O(n,this.options.openClass),Z&&F(function(){J(n.querySelector(t.options.subNavi)),F(function(){J(n.querySelector(t.options.subNavi))})})}},{key:"move",value:function(e,t){var n=e.parentNode;S(t.parentNode,this.options.openClass),O(n,this.options.openClass),Z&&J(n.querySelector(this.options.subNavi))}},{key:"leave",value:function(e){S(e.parentNode,this.options.openClass)}},{key:"destroy",value:function(){r(t.prototype.__proto__||Object.getPrototypeOf(t.prototype),"destroy",this).call(this),delete this.wcNode,delete this.options}}]),t}();X.DEFAULTS={list:".js-header-navigation__list",toggleClass:"js-header-navigation__list-link",subNavi:".js-header-sub-navigation",openClass:"is-header-sub-navigation-open"};var Y=1,Q=3,ee=8;function te(e,t){var n=e.nodeType,i=e.nodeName;n===Y&&function(e,t){for(var n=t.attributes,i=e.attributes,o=null,r=null,a=null,s=null,l=i.length-1;l>=0;--l)if(s=i[l],a=s.name,o=s.namespaceURI,r=s.value,o){var u=s.localName;t.getAttributeNS(o,u||a)!==r&&t.setAttributeNS(o,a,r)}else t.hasAttribute(a)?t.getAttribute(a)!==r&&("null"===r||"undefined"===r?t.removeAttribute(a):t.setAttribute(a,r)):t.setAttribute(a,r);for(var c=n.length-1;c>=0;--c)!1!==(s=n[c]).specified&&(a=s.name,(o=s.namespaceURI)?(a=s.localName||a,e.hasAttributeNS(o,a)||t.removeAttributeNS(o,a)):e.hasAttributeNS(null,a)||t.removeAttribute(a))}(e,t),n!==Q&&n!==ee||t.nodeValue===e.nodeValue||(t.nodeValue=e.nodeValue),"INPUT"===i?function(e,t){var n=e.value,i=t.value;ne(e,t,"checked"),ne(e,t,"disabled"),n!==i&&(t.setAttribute("value",n),t.value=n);"null"===n&&(t.value="",t.removeAttribute("value"));e.hasAttributeNS(null,"value")?"range"===t.type&&(t.value=n):t.removeAttribute("value")}(e,t):"OPTION"===i?ne(e,t,"selected"):"TEXTAREA"===i&&function(e,t){var n=e.value;n!==t.value&&(t.value=n);if(t.firstChild&&t.firstChild.nodeValue!==n){if(""===n&&t.firstChild.nodeValue===t.placeholder)return;t.firstChild.nodeValue=n}}(e,t)}function ne(e,t,n){e[n]!==t[n]&&(t[n]=e[n],e[n]?t.setAttribute(n,""):t.removeAttribute(n))}var ie=3;function oe(e,t){return t?e?e.isSameNode&&e.isSameNode(t)?t:e.tagName!==t.tagName?e:(te(e,t),t.skipChildren&&t.skipChildren()||function(e,t){for(var n=void 0,i=void 0,o=void 0,r=void 0,a=0,s=0;n=t.childNodes[s],i=e.childNodes[s-a],n||i;s++)if(i)if(n)if(re(i,n))(o=oe(i,n))!==n&&(t.replaceChild(o,n),a++);else{r=null;for(var l=s;l<t.childNodes.length;l++)if(re(t.childNodes[l],i)){r=t.childNodes[l];break}r?((o=oe(i,r))!==r&&a++,t.insertBefore(o,n)):i.id||n.id?(t.insertBefore(i,n),a++):(o=oe(i,n))!==n&&(t.replaceChild(o,n),a++)}else t.appendChild(i),a++;else t.removeChild(n),s--}(e,t),t):null:e}function re(e,t){return e.id?e.id===t.id:e.isSameNode?e.isSameNode(t):e.tagName===t.tagName&&(e.type===ie&&e.nodeValue===t.nodeValue)}var ae=[];function se(e){e.isSameNode=function(){return!0},ae.push(e)}var le=function(){try{var e=new window.CustomEvent("test",{cancelable:!0});if(e.preventDefault(),!0!==e.defaultPrevented)throw new Error("Could not prevent default");return window.CustomEvent}catch(e){}return t;function t(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=t.bubbles,i=void 0!==n&&n,o=t.cancelable,r=void 0!==o&&o,a=t.detail,s=void 0===a?void 0:a,l=document.createEvent("CustomEvent");l.initCustomEvent(e,i,r,s);var u=l.preventDefault;return l.preventDefault=function(){u.call(l);try{Object.defineProperty(this,"defaultPrevented",{get:function(){return!0}})}catch(e){this.defaultPrevented=!0}},l}}();function ue(e,t,n){var i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},r=new le(t,o({},i,{detail:n}));return e.dispatchEvent(r)}function ce(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},i=n.leading,o=void 0!==i&&i,r=n.trailing,a=void 0===r||r,s=n.maxWait,l=void 0!==s&&s,u=void 0,d=void 0,h=void 0,p=void 0,f=!1,v=t!==l,_=!1!==l;function y(){for(var n=arguments.length,i=Array(n),r=0;r<n;r++)i[r]=arguments[r];return u=i,v&&(d&&clearTimeout(d),d=setTimeout(m,t)),_&&!h&&(h=setTimeout(g,l)),o&&!f&&(f=!0,p=e.apply(void 0,c(u))),p}return y.flush=function(){(d||h)&&(p=e.apply(void 0,c(u)));return k(),p},y.cancel=k,y;function m(){h&&clearTimeout(h),b()}function g(){d&&clearTimeout(d),b()}function b(){a&&(p=e.apply(void 0,c(u))),d=null,h=null,f=!1}function k(){d&&(clearTimeout(d),d=null),h&&(clearTimeout(h),h=null),u=void 0,f=!1}}var de={};function he(e,t){var n=R(arguments.length>2&&void 0!==arguments[2]?arguments[2]:document,e,t);de[e]||(de[e]={count:0});var i,o=de[e];return o.count++,o.onsubscribe||(o.onsubscribe=ce((i=e,function(){ue(document,"pubsub/onsubscribe",i),ue(document,"pubsub/onsubscribe/"+i,i),de[i]&&delete de[i].unsubscribe}),100)),o.onsubscribe(),function(){o.count--,n.call(this),o.count<=0&&delete de[e]}}R(document,"pubsub/onsubscribe",function(e){var t=e.detail;de[t]||(de[t]={count:0});var n=de[t],i=n.queue;Array.isArray(i)&&(i.forEach(function(e){var t=u(e,3),n=t[0],i=t[1],o=t[2];ue(o,n,i)}),delete n.queue)});var pe=/(?:^\w|[A-Z]|\b\w|\s+|[-_]+)/g,fe=/[-_]+/g;function ve(e){return e.replace(pe,_e)}function _e(e,t){return 0==+e||fe.test(e)?"":0===t?e.toLowerCase():e.toUpperCase()}var ye=/[A-Z]/g;function me(e,t,n){var i=e.toLowerCase(),o=n.charAt(t+1);return 0===t||o.toUpperCase()===o?i:"-"+i}var ge=function(e,t){return e===t},be=function(e){function t(e,i){var o;n(this,t);for(var r="Property >>>"+e+"<<< exists at "+i.nodeName+"#"+i._id+" and evaluates to -> "+i[e],a=arguments.length,l=Array(a>2?a-2:0),u=2;u<a;u++)l[u-2]=arguments[u];var c=s(this,(o=t.__proto__||Object.getPrototypeOf(t)).call.apply(o,[this,r].concat(l)));return Error.captureStackTrace&&Error.captureStackTrace(c,t),c.name="PropertyExistsException",c}return a(t,e),t}(Error);function ke(){return Reflect.construct(HTMLElement,[],this.__proto__.constructor)}Object.setPrototypeOf(ke.prototype,HTMLElement.prototype),Object.setPrototypeOf(ke,HTMLElement);var Ce,xe,we,Ne,Ae="throwed",Oe=["title","checked","disabled"],Ee={},Te=function(e){return e in Ee||(Ee[e]=0),++Ee[e]},Se=((Ce=function(){var e;return(e=console).log.apply(e,arguments)},function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ge;return function(){for(var t=arguments.length,n=Array(t),i=0;i<t;i++)n[i]=arguments[i];return function(){for(var t=arguments.length,i=Array(t),o=0;o<t;o++)i[o]=arguments[o];return function(){return e.apply(void 0,[].concat(n,i))?Ce.apply(void 0,arguments):void 0}}}})()(!0),function(e){function o(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments[1];n(this,o);var i=s(this,(o.__proto__||Object.getPrototypeOf(o)).call(this));i._reduceProps=function(e,t){var n=e.props,r=e.shouldUpdate,a=i._hasKeys[t];if(-1===Oe.indexOf(t)&&a)throw new be(t,i);var s="_"+t,u=n[t],c=i[s];return r||i.shouldUpdateCallback(u,c)?(i[s]=u,i._props[t]=u,a&&l(o.prototype.__proto__||Object.getPrototypeOf(o.prototype),t,u,i),{props:n,shouldUpdate:!0}):{props:n,shouldUpdate:!1}},i._makeContextReady=function(){var e=(arguments.length>0&&void 0!==arguments[0]?arguments[0]:{}).detail;i.contextNode&&(clearTimeout(i.timeoutId),i.timeoutId=setTimeout(function(){i.contextCallback(i.contextNode,e)},10)),i.unContextEnabled&&i.unContextEnabled(),i.unContextEnabled=he("context/enabled",i._makeContextReady)},i._initialise(e,t),i._id=Te(i.nodeName),i._props={},i._hasKeys={},i.reRender=ce(function(){return i.render()},50);var r=i.constructor.observedAttributes;return Array.isArray(r)&&r.forEach(function(e){var t,n=ve(e),o=n in i;if(-1===Oe.indexOf(n)&&o)throw new be(n,i);i._hasKeys[n]=o,Object.defineProperty(i,n,t={get:function(){return this["_"+n]},set:function(e){var i="_"+n;this.shouldUpdateCallback(this[i],e)&&(this[i]=e,this._props[n]=e,o&&l(t.__proto__||Object.getPrototypeOf(t),n,e,this),this._isConnected&&this._hasRendered&&this.reRender())}})}),i}return a(o,ke),i(o,[{key:"_initialise",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;this._styles=e,this._template=t,this._hasTemplate=!!t,this._hasRendered=!1,this._isConnected=!1}},{key:"connectedCallback",value:function(){var e=this;if(!this._isConnected){this._isConnected=!0;var t=this.constructor.observedAttributes;this.initialClassName=this.className,Array.isArray(t)&&t.forEach(function(t){var n=ve(t);if(e.hasAttribute(t)){var i=q(e,t),r=e._hasKeys[n];e["_"+n]=i,e._props[n]=i,r&&l(o.prototype.__proto__||Object.getPrototypeOf(o.prototype),n,i,e)}})}this._appendStyles(),this.render(),this.contextCallback&&this._makeContextReady()}},{key:"attributeChangedCallback",value:function(e,t,n){this.shouldUpdateCallback(n,t)&&(this[ve(e)]=I(n))}},{key:"batchProps",value:function(e){var t=this.constructor.observedAttributes;Object.keys(e).filter(function(e){return t.indexOf(e.replace(ye,me))>-1}).reduce(this._reduceProps,{props:e,shouldUpdate:!1}).shouldUpdate&&this._isConnected&&this._hasRendered&&this.render()}},{key:"shouldUpdateCallback",value:function(e,t){return e!==t}},{key:"disconnectedCallback",value:function(){this.unContextEnabled&&this.unContextEnabled(),this._isConnected=!1}},{key:"_appendStyles",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this;if(this._styles){var t=document.createElement("style"),n=document.createTextNode(this._styles);t.appendChild(n),e.insertAdjacentElement?e.insertAdjacentElement("afterbegin",t):e.appendChild(t)}}},{key:"render",value:function(){var e=this,n=!this._hasRendered;if(this.willRenderCallback(n),this._hasTemplate){var i=this._template;try{if(n){for(var a=document.createDocumentFragment(),s=[];this.firstChild;)s.push(this.firstChild),a.appendChild(this.firstChild);this._lightDOMRefs=s,this.childrenFragment=a}else this._lightDOMRefs.forEach(function(t){var n=t.cloneNode(!1);se(t),se(n),e.childrenFragment.appendChild(n)});var l=i(this._props,this.childrenFragment),u=document.createDocumentFragment();if(Array.isArray(l))l.forEach(function(e){u.appendChild(e)});else if(l){if("string"==typeof l){var c=new Error(Ae);throw console.error("\n%cWeb Component %c"+this.nodeName+"%c#"+this._id+" does not accept string as a return from a template. Maybe use bel?\n\nStack Trace: "+c.stack+"\n","color: #580000; font-size: 14px; line-height:16px;","background: #8b0000; color: #FFF; font-size: 14px; line-height:16px;","color: #580000; font-size: 14px; line-height:16px;"),c}u.appendChild(l)}if(n)r(o.prototype.__proto__||Object.getPrototypeOf(o.prototype),"appendChild",this).call(this,u);else{var d=this.cloneNode(!1);d._isMorphing=!0,d.appendChild(u),this._isMorphing=!0,function(e,n){if("object"!==(void 0===e?"undefined":t(e)))throw new Error("componentMorph: oldTree should be an object");if("object"!==(void 0===n?"undefined":t(n)))throw new Error("componentMorph: newTree should be an object");oe(n,e)}(this,d),function(){for(var e=void 0;e=ae.pop();)delete e.isSameNode;ae=[]}(),this._isMorphing=!1}}catch(c){c.message!==Ae&&console.error("\n%cWeb Component %c"+this.nodeName+"%c#"+this._id+" has an error while loading its template:\n"+c+"\n\nStack Trace: "+c.stack+"\n","color: #580000; font-size: 14px; line-height:16px;","background: #8b0000; color: #FFF; font-size: 14px; line-height:16px;","color: #580000; font-size: 14px; line-height:16px;")}}this._hasRendered=!0,this.didRenderCallback(n)}},{key:"willRenderCallback",value:function(e){}},{key:"didRenderCallback",value:function(e){}},{key:"appendChild",value:function(e){!this._isMorphing&&this._hasTemplate&&this._hasRendered?(this._lightDOMRefs.push(e),this.render()):r(o.prototype.__proto__||Object.getPrototypeOf(o.prototype),"appendChild",this).call(this,e)}},{key:"skipChildren",value:function(){return!this._isMorphing}},{key:"enableContext",value:function(){var e=this.nodeName.toLowerCase();this.__isContext=!0,this.__contextName=e,function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:document;de[e]||(de[e]={count:0,queue:[]});var i=de[e].queue;Array.isArray(i)?i.push([e,t,n]):ue(n,e,t)}("context/enabled",e)}},{key:"selectContext",value:function(e){this.__selectedContext=e&&e.toLowerCase()}},{key:"innerText",set:function(e){if(this._hasTemplate&&this._hasRendered){var t=document.createTextNode(e);this._lightDOMRefs=[t],this.render()}else l(o.prototype.__proto__||Object.getPrototypeOf(o.prototype),"innerText",e,this)}},{key:"textContent",set:function(e){if(this._hasTemplate&&this._hasRendered){var t=document.createTextNode(e);this._lightDOMRefs=[t],this.render()}else l(o.prototype.__proto__||Object.getPrototypeOf(o.prototype),"textContent",e,this)}},{key:"innerHTML",set:function(e){if(this._hasTemplate&&this._hasRendered){var t=document.createElement("div");t.innerHTML=e,this._lightDOMRefs=Array.from(t.children),this.render()}else l(o.prototype.__proto__||Object.getPrototypeOf(o.prototype),"innerHTML",e,this)}},{key:"contextNode",get:function(){for(var e=this.__selectedContext,t=this.parentNode;t&&(!t.__isContext||e&&e!==t.__contextName);)t=t.parentNode;return!(!t||!t.__isContext)&&t}}],[{key:"uuidv4",value:function(){return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,function(e){var t=16*Math.random()|0;return("x"==e?t:3&t|8).toString(16)})}}]),o}()),je={},Me=function(e){function t(){return n(this,t),s(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return a(t,Se),i(t,[{key:"_appendStyles",value:function(){t.appendGlobalStyles(this._styles,this.nodeName)}}],[{key:"appendGlobalStyles",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:Se.uuidv4();if(e&&!je[e]){var n=document.createElement("style"),i=document.createTextNode(e);n.appendChild(i),n.setAttribute("data-c-name",t.toLowerCase()),document.querySelector("head").appendChild(n),je[e]=!0}}}]),t}(),Pe=function(e){function t(){n(this,t);var e=s(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,h,C));return e.selectContext("axa-header-main"),e}return a(t,Me),i(t,null,[{key:"observedAttributes",get:function(){return["hyphenate","items","simplemenu"]}}]),i(t,[{key:"contextCallback",value:function(e){this.stroke&&(this.stroke.contextNode=e)}},{key:"willRenderCallback",value:function(){var e=this.hyphenate;this.className=d(this.initialClassName,"m-header-navigation",{"m-header-navigation--hyphenate":e})}},{key:"didRenderCallback",value:function(){var e=this.contextNode,t=this.simpleMenu;this.stroke&&this.stroke.destroy(),this.navigation&&this.navigation.destroy(),this.stroke=new G(this,{simpleMenu:t}),e&&this.contextCallback(e),this.navigation=new X(this,{simpleMenu:t})}},{key:"disconnectedCallback",value:function(){r(t.prototype.__proto__||Object.getPrototypeOf(t.prototype),"disconnectedCallback",this).call(this),this.stroke&&(this.stroke.destroy(),delete this.stroke),this.navigation&&(this.navigation.destroy(),delete this.navigation)}}]),t}();return xe=function(){window.customElements.define("axa-header-navigation",Pe)},we=0,Ne=function(){if(0===we)try{xe.apply(void 0,arguments),we+=1,document.removeEventListener("DOMContentLoaded"),document.removeEventListener("WebComponentsReady")}catch(e){}},document.addEventListener("DOMContentLoaded",Ne,!1),document.addEventListener("WebComponentsReady",Ne,!1),Pe}();
