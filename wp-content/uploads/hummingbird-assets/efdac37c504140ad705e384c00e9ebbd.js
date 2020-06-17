/**handles:the-grid,wp-embed,wpb_composer_front_js,pixxy_parallax-fragments,pixxy_image_banner,pixxy_services,pixxy_countTo-js,pixxy_skills-js**/
/*!
 * The Grid – Responsive Grid Plugin
 * Copyright © 2015 All Rights Reserved. 
 * @author Themeone [http://theme-one.com/the-grid/]
 */
!function(t){var d=Array.prototype.slice;function e(u){if(u){return u.bridget=function(t,e){var i,s,l;(i=e).prototype.option||(i.prototype.option=function(t){u.isPlainObject(t)&&(this.options=u.extend(!0,this.options,t))}),s=t,l=e,u.fn[s]=function(e){if("string"==typeof e){for(var t=d.call(arguments,1),i=0,o=this.length;i<o;i++){var n=this[i],r=u.data(n,s);if(r&&u.isFunction(r[e])&&"_"!==e.charAt(0)){var a=r[e].apply(r,t);if(void 0!==a)return a}}return this}return this.each(function(){var t=u.data(this,s);t?(t.option(e),t._init()):(t=new l(this,e),u.data(this,s,t))})}},u.bridget}}"function"==typeof define&&define.amd?define("jquery-bridget/jquery.bridget",["jquery"],e):"object"==typeof exports?e(require("jquery")):e(t.jQuery)}(window),function(i){var t=document.documentElement,e=function(){};function o(t){var e=i.event;return e.target=e.target||e.srcElement||t,e}t.addEventListener?e=function(t,e,i){t.addEventListener(e,i,!1)}:t.attachEvent&&(e=function(e,t,i){e[t+i]=i.handleEvent?function(){var t=o(e);i.handleEvent.call(i,t)}:function(){var t=o(e);i.call(e,t)},e.attachEvent("on"+t,e[t+i])});var n=function(){};t.removeEventListener?n=function(t,e,i){t.removeEventListener(e,i,!1)}:t.detachEvent&&(n=function(e,i,o){e.detachEvent("on"+i,e[i+o]);try{delete e[i+o]}catch(t){e[i+o]=void 0}});var r={bind:e,unbind:n};"function"==typeof define&&define.amd?define("eventie/eventie",r):"object"==typeof exports?module.exports=r:i.eventie=r}(window),function(){"use strict";function t(){}var e=t.prototype,i=this,o=i.EventEmitter;function r(t,e){for(var i=t.length;i--;)if(t[i].listener===e)return i;return-1}function n(t){return function(){return this[t].apply(this,arguments)}}e.getListeners=function(t){var e,i,o=this._getEvents();if(t instanceof RegExp)for(i in e={},o)o.hasOwnProperty(i)&&t.test(i)&&(e[i]=o[i]);else e=o[t]||(o[t]=[]);return e},e.flattenListeners=function(t){var e,i=[];for(e=0;e<t.length;e+=1)i.push(t[e].listener);return i},e.getListenersAsObject=function(t){var e,i=this.getListeners(t);return i instanceof Array&&((e={})[t]=i),e||i},e.addListener=function(t,e){var i,o=this.getListenersAsObject(t),n="object"==typeof e;for(i in o)o.hasOwnProperty(i)&&-1===r(o[i],e)&&o[i].push(n?e:{listener:e,once:!1});return this},e.on=n("addListener"),e.addOnceListener=function(t,e){return this.addListener(t,{listener:e,once:!0})},e.once=n("addOnceListener"),e.defineEvent=function(t){return this.getListeners(t),this},e.defineEvents=function(t){for(var e=0;e<t.length;e+=1)this.defineEvent(t[e]);return this},e.removeListener=function(t,e){var i,o,n=this.getListenersAsObject(t);for(o in n)n.hasOwnProperty(o)&&-1!==(i=r(n[o],e))&&n[o].splice(i,1);return this},e.off=n("removeListener"),e.addListeners=function(t,e){return this.manipulateListeners(!1,t,e)},e.removeListeners=function(t,e){return this.manipulateListeners(!0,t,e)},e.manipulateListeners=function(t,e,i){var o,n,r=t?this.removeListener:this.addListener,a=t?this.removeListeners:this.addListeners;if("object"!=typeof e||e instanceof RegExp)for(o=i.length;o--;)r.call(this,e,i[o]);else for(o in e)e.hasOwnProperty(o)&&(n=e[o])&&("function"==typeof n?r.call(this,o,n):a.call(this,o,n));return this},e.removeEvent=function(t){var e,i=typeof t,o=this._getEvents();if("string"===i)delete o[t];else if(t instanceof RegExp)for(e in o)o.hasOwnProperty(e)&&t.test(e)&&delete o[e];else delete this._events;return this},e.removeAllListeners=n("removeEvent"),e.emitEvent=function(t,e){var i,o,n,r=this.getListenersAsObject(t);for(n in r)if(r.hasOwnProperty(n))for(o=r[n].length;o--;)!0===(i=r[n][o]).once&&this.removeListener(t,i.listener),i.listener.apply(this,e||[])===this._getOnceReturnValue()&&this.removeListener(t,i.listener);return this},e.trigger=n("emitEvent"),e.emit=function(t){var e=Array.prototype.slice.call(arguments,1);return this.emitEvent(t,e)},e.setOnceReturnValue=function(t){return this._onceReturnValue=t,this},e._getOnceReturnValue=function(){return!this.hasOwnProperty("_onceReturnValue")||this._onceReturnValue},e._getEvents=function(){return this._events||(this._events={})},t.noConflict=function(){return i.EventEmitter=o,t},"function"==typeof define&&define.amd?define("eventEmitter/EventEmitter",[],function(){return t}):"object"==typeof module&&module.exports?module.exports=t:i.EventEmitter=t}.call(this),function(t){var n="Webkit Moz ms Ms O".split(" "),r=document.documentElement.style;function e(t){if(t){if("string"==typeof r[t])return t;var e;t=t.charAt(0).toUpperCase()+t.slice(1);for(var i=0,o=n.length;i<o;i++)if(e=n[i]+t,"string"==typeof r[e])return e}}"function"==typeof define&&define.amd?define("get-style-property/get-style-property",[],function(){return e}):"object"==typeof exports?module.exports=e:t.getStyleProperty=e}(window),function(z,t){function L(t){var e=parseFloat(t);return-1===t.indexOf("%")&&!isNaN(e)&&e}var C="undefined"==typeof console?function(){}:function(t){console.error(t)},I=["paddingLeft","paddingRight","paddingTop","paddingBottom","marginLeft","marginRight","marginTop","marginBottom","borderLeftWidth","borderRightWidth","borderTopWidth","borderBottomWidth"];function e(v){var _,w,b,T=!1;function x(t,e){if(z.getComputedStyle||-1===e.indexOf("%"))return e;var i=t.style,o=i.left,n=t.runtimeStyle,r=n&&n.left;return r&&(n.left=t.currentStyle.left),i.left=e,e=i.pixelLeft,i.left=o,r&&(n.left=r),e}return function(t){if(function(){if(!T){T=!0;var i,e=z.getComputedStyle;if(i=e?function(t){return e(t,null)}:function(t){return t.currentStyle},_=function(t){var e=i(t);return e||C("Style returned "+e+". Are you running this code in a hidden iframe on Firefox? See http://bit.ly/getsizebug1"),e},w=v("boxSizing")){var t=document.createElement("div");t.style.width="200px",t.style.padding="1px 2px 3px 4px",t.style.borderStyle="solid",t.style.borderWidth="1px 2px 3px 4px",t.style[w]="border-box";var o=document.body||document.documentElement;o.appendChild(t);var n=_(t);b=200===L(n.width),o.removeChild(t)}}}(),"string"==typeof t&&(t=document.querySelector(t)),t&&"object"==typeof t&&t.nodeType){var e=_(t);if("none"===e.display)return function(){for(var t={width:0,height:0,innerWidth:0,innerHeight:0,outerWidth:0,outerHeight:0},e=0,i=I.length;e<i;e++)t[I[e]]=0;return t}();var i={};i.width=t.offsetWidth,i.height=t.offsetHeight;for(var o=i.isBorderBox=!(!w||!e[w]||"border-box"!==e[w]),n=0,r=I.length;n<r;n++){var a=I[n],s=e[a];s=x(t,s);var l=parseFloat(s);i[a]=isNaN(l)?0:l}var u=i.paddingLeft+i.paddingRight,d=i.paddingTop+i.paddingBottom,c=i.marginLeft+i.marginRight,h=i.marginTop+i.marginBottom,p=i.borderLeftWidth+i.borderRightWidth,f=i.borderTopWidth+i.borderBottomWidth,m=o&&b,g=L(e.width);!1!==g&&(i.width=g+(m?0:u+p));var y=L(e.height);return!1!==y&&(i.height=y+(m?0:d+f)),i.innerWidth=i.width-(u+p),i.innerHeight=i.height-(d+f),i.outerWidth=i.width+c,i.outerHeight=i.height+h,i}}}"function"==typeof define&&define.amd?define("get-size/get-size",["get-style-property/get-style-property"],e):"object"==typeof exports?module.exports=e(require("desandro-get-style-property")):z.getSize=e(z.getStyleProperty)}(window),function(e){var i=e.document,o=[];function n(t){"function"==typeof t&&(n.isReady?t():o.push(t))}function r(t){var e="readystatechange"===t.type&&"complete"!==i.readyState;n.isReady||e||a()}function a(){n.isReady=!0;for(var t=0,e=o.length;t<e;t++){(0,o[t])()}}function t(t){return"complete"===i.readyState?a():(t.bind(i,"DOMContentLoaded",r),t.bind(i,"readystatechange",r),t.bind(e,"load",r)),n}n.isReady=!1,"function"==typeof define&&define.amd?define("doc-ready/doc-ready",["eventie/eventie"],t):"object"==typeof exports?module.exports=t(require("eventie")):e.docReady=t(e.eventie)}(window),function(n){"use strict";var t,i=function(){if(n.matches)return"matches";if(n.matchesSelector)return"matchesSelector";for(var t=["webkit","moz","ms","o"],e=0,i=t.length;e<i;e++){var o=t[e]+"MatchesSelector";if(n[o])return o}}();function o(t,e){return t[i](e)}function r(t){t.parentNode||document.createDocumentFragment().appendChild(t)}if(i){var e=o(document.createElement("div"),"div");t=e?o:function(t,e){return r(t),o(t,e)}}else t=function(t,e){r(t);for(var i=t.parentNode.querySelectorAll(e),o=0,n=i.length;o<n;o++)if(i[o]===t)return!0;return!1};"function"==typeof define&&define.amd?define("matches-selector/matches-selector",[],function(){return t}):"object"==typeof exports?module.exports=t:window.matchesSelector=t}(Element.prototype),function(i,o){"use strict";"function"==typeof define&&define.amd?define("fizzy-ui-utils/utils",["doc-ready/doc-ready","matches-selector/matches-selector"],function(t,e){return o(i,t,e)}):"object"==typeof exports?module.exports=o(i,require("doc-ready"),require("desandro-matches-selector")):i.fizzyUIUtils=o(i,i.docReady,i.matchesSelector)}(window,function(h,t,u){var i,p={extend:function(t,e){for(var i in e)t[i]=e[i];return t},modulo:function(t,e){return(t%e+e)%e}},e=Object.prototype.toString;p.isArray=function(t){return"[object Array]"==e.call(t)},p.makeArray=function(t){var e=[];if(p.isArray(t))e=t;else if(t&&"number"==typeof t.length)for(var i=0,o=t.length;i<o;i++)e.push(t[i]);else e.push(t);return e},p.indexOf=Array.prototype.indexOf?function(t,e){return t.indexOf(e)}:function(t,e){for(var i=0,o=t.length;i<o;i++)if(t[i]===e)return i;return-1},p.removeFrom=function(t,e){var i=p.indexOf(t,e);-1!=i&&t.splice(i,1)},p.isElement="function"==typeof HTMLElement||"object"==typeof HTMLElement?function(t){return t instanceof HTMLElement}:function(t){return t&&"object"==typeof t&&1==t.nodeType&&"string"==typeof t.nodeName},p.setText=function(t,e){t[i=i||(void 0!==document.documentElement.textContent?"textContent":"innerText")]=e},p.getParent=function(t,e){for(;t!=document.body;)if(t=t.parentNode,u(t,e))return t},p.getQueryElement=function(t){return"string"==typeof t?document.querySelector(t):t},p.handleEvent=function(t){var e="on"+t.type;this[e]&&this[e](t)},p.filterFindElements=function(t,e){for(var i=[],o=0,n=(t=p.makeArray(t)).length;o<n;o++){var r=t[o];if(p.isElement(r))if(e){u(r,e)&&i.push(r);for(var a=r.querySelectorAll(e),s=0,l=a.length;s<l;s++)i.push(a[s])}else i.push(r)}return i},p.debounceMethod=function(t,e,o){var n=t.prototype[e],r=e+"Timeout";t.prototype[e]=function(){var t=this[r];t&&clearTimeout(t);var e=arguments,i=this;this[r]=setTimeout(function(){n.apply(i,e),delete i[r]},o||100)}},p.toDashed=function(t){return t.replace(/(.)([A-Z])/g,function(t,e,i){return e+"-"+i}).toLowerCase()};var f=h.console;return p.htmlInit=function(d,c){t(function(){for(var t=p.toDashed(c),e=document.querySelectorAll(".js-"+t),i="data-"+t+"-options",o=0,n=e.length;o<n;o++){var r,a=e[o],s=a.getAttribute(i);try{r=s&&JSON.parse(s)}catch(t){f&&f.error("Error parsing "+i+" on "+a.nodeName.toLowerCase()+(a.id?"#"+a.id:"")+": "+t);continue}var l=new d(a,r),u=h.jQuery;u&&u.data(a,c,l)}})},p}),function(n,r){"use strict";"function"==typeof define&&define.amd?define("outlayer/item",["eventEmitter/EventEmitter","get-size/get-size","get-style-property/get-style-property","fizzy-ui-utils/utils"],function(t,e,i,o){return r(n,t,e,i,o)}):"object"==typeof exports?module.exports=r(n,require("wolfy87-eventemitter"),require("get-size"),require("desandro-get-style-property"),require("fizzy-ui-utils")):(n.Outlayer={},n.Outlayer.Item=r(n,n.EventEmitter,n.getSize,n.getStyleProperty,n.fizzyUIUtils))}(window,function(t,e,i,r,o){"use strict";var n=t.getComputedStyle,u=n?function(t){return n(t,null)}:function(t){return t.currentStyle};var a=r("transition"),s=r("transform"),l=a&&s,d=!!r("perspective"),c={WebkitTransition:"webkitTransitionEnd",MozTransition:"transitionend",OTransition:"otransitionend",transition:"transitionend"}[a],h=["transform","transition","transitionDuration","transitionProperty"],p=function(){for(var t={},e=0,i=h.length;e<i;e++){var o=h[e],n=r(o);n&&n!==o&&(t[o]=n)}return t}();function f(t,e){t&&(this.element=t,this.layout=e,this.position={x:0,y:0},this._create())}o.extend(f.prototype,e.prototype),f.prototype._create=function(){this._transn={ingProperties:{},clean:{},onEnd:{}},this.css({position:"absolute"})},f.prototype.handleEvent=function(t){var e="on"+t.type;this[e]&&this[e](t)},f.prototype.getSize=function(){this.size=i(this.element)},f.prototype.css=function(t){var e=this.element.style;for(var i in t){e[p[i]||i]=t[i]}},f.prototype.getPosition=function(){var t=u(this.element),e=this.layout.options,i=e.isOriginLeft,o=e.isOriginTop,n=t[i?"left":"right"],r=t[o?"top":"bottom"],a=this.layout.size,s=-1!=n.indexOf("%")?parseFloat(n)/100*a.width:parseInt(n,10),l=-1!=r.indexOf("%")?parseFloat(r)/100*a.height:parseInt(r,10);s=isNaN(s)?0:s,l=isNaN(l)?0:l,s-=i?a.paddingLeft:a.paddingRight,l-=o?a.paddingTop:a.paddingBottom,this.position.x=s,this.position.y=l},f.prototype.layoutPosition=function(){var t=this.layout.size,e=this.layout.options,i={},o=e.isOriginLeft?"paddingLeft":"paddingRight",n=e.isOriginLeft?"left":"right",r=e.isOriginLeft?"right":"left",a=this.position.x+t[o];i[n]=this.getXValue(a),i[r]="";var s=e.isOriginTop?"paddingTop":"paddingBottom",l=e.isOriginTop?"top":"bottom",u=e.isOriginTop?"bottom":"top",d=this.position.y+t[s];i[l]=this.getYValue(d),i[u]="",this.css(i),this.emitEvent("layout",[this])},f.prototype.getXValue=function(t){var e=this.layout.options;return e.percentPosition&&!e.isHorizontal?t/this.layout.size.width*100+"%":t+"px"},f.prototype.getYValue=function(t){var e=this.layout.options;return e.percentPosition&&e.isHorizontal?t/this.layout.size.height*100+"%":t+"px"},f.prototype._transitionTo=function(t,e){this.getPosition();var i=this.position.x,o=this.position.y,n=parseInt(t,10),r=parseInt(e,10),a=n===this.position.x&&r===this.position.y;if(this.setPosition(t,e),!a||this.isTransitioning){var s=t-i,l=e-o,u={};u.transform=this.getTranslate(s,l),this.transition({to:u,onTransitionEnd:{transform:this.layoutPosition},isCleaning:!0})}else this.layoutPosition()},f.prototype.getTranslate=function(t,e){var i=this.layout.options;return t=i.isOriginLeft?t:-t,e=i.isOriginTop?e:-e,d?"translate3d("+t+"px, "+e+"px, 0)":"translate("+t+"px, "+e+"px)"},f.prototype.goTo=function(t,e){this.setPosition(t,e),this.layoutPosition()},f.prototype.moveTo=l?f.prototype._transitionTo:f.prototype.goTo,f.prototype.setPosition=function(t,e){this.position.x=parseInt(t,10),this.position.y=parseInt(e,10)},f.prototype._nonTransition=function(t){for(var e in this.css(t.to),t.isCleaning&&this._removeStyles(t.to),t.onTransitionEnd)t.onTransitionEnd[e].call(this)},f.prototype._transition=function(t){if(parseFloat(this.layout.options.transitionDuration)){var e=this._transn;for(var i in t.onTransitionEnd)e.onEnd[i]=t.onTransitionEnd[i];for(i in t.to)e.ingProperties[i]=!0,t.isCleaning&&(e.clean[i]=!0);if(t.from){this.css(t.from);this.element.offsetHeight;null}this.enableTransition(t.to),this.css(t.to),this.isTransitioning=!0}else this._nonTransition(t)};var m="opacity,"+(p.transform||"transform").replace(/([A-Z])/g,function(t){return"-"+t.toLowerCase()});f.prototype.enableTransition=function(){this.isTransitioning||(this.css({transitionProperty:m,transitionDuration:this.layout.options.transitionDuration}),this.element.addEventListener(c,this,!1))},f.prototype.transition=f.prototype[a?"_transition":"_nonTransition"],f.prototype.onwebkitTransitionEnd=function(t){this.ontransitionend(t)},f.prototype.onotransitionend=function(t){this.ontransitionend(t)};var g={"-webkit-transform":"transform","-moz-transform":"transform","-o-transform":"transform"};f.prototype.ontransitionend=function(t){if(t.target===this.element){var e=this._transn,i=g[t.propertyName]||t.propertyName;if(delete e.ingProperties[i],function(t){for(var e in t)return!1;return!0}(e.ingProperties)&&this.disableTransition(),i in e.clean&&(this.element.style[t.propertyName]="",delete e.clean[i]),i in e.onEnd)e.onEnd[i].call(this),delete e.onEnd[i];this.emitEvent("transitionEnd",[this])}},f.prototype.disableTransition=function(){this.removeTransitionStyles(),this.element.removeEventListener(c,this,!1),this.isTransitioning=!1},f.prototype._removeStyles=function(t){var e={};for(var i in t)e[i]="";this.css(e)};var y={transitionProperty:"",transitionDuration:""};return f.prototype.removeTransitionStyles=function(){this.css(y)},f.prototype.removeElem=function(){this.element.parentNode.removeChild(this.element),this.css({display:""}),this.emitEvent("remove",[this])},f.prototype.remove=function(){if(a&&parseFloat(this.layout.options.transitionDuration)){var t=this;this.once("transitionEnd",function(){t.removeElem()}),this.hide()}else this.removeElem()},f.prototype.reveal=function(){delete this.isHidden,this.css({display:""});var t=this.layout.options,e={};e[this.getHideRevealTransitionEndProperty("visibleStyle")]=this.onRevealTransitionEnd,this.transition({from:t.hiddenStyle,to:t.visibleStyle,isCleaning:!0,onTransitionEnd:e})},f.prototype.onRevealTransitionEnd=function(){this.isHidden||this.emitEvent("reveal")},f.prototype.getHideRevealTransitionEndProperty=function(t){var e=this.layout.options[t];if(e.opacity)return"opacity";for(var i in e)return i},f.prototype.hide=function(){this.isHidden=!0,this.css({display:""});var t=this.layout.options,e={};e[this.getHideRevealTransitionEndProperty("hiddenStyle")]=this.onHideTransitionEnd,this.transition({from:t.visibleStyle,to:t.hiddenStyle,isCleaning:!0,onTransitionEnd:e})},f.prototype.onHideTransitionEnd=function(){this.isHidden&&(this.css({display:"none"}),this.emitEvent("hide"))},f.prototype.destroy=function(){this.css({position:"",left:"",right:"",top:"",bottom:"",transition:"",transform:""})},f}),function(r,a){"use strict";"function"==typeof define&&define.amd?define("outlayer/outlayer",["eventie/eventie","eventEmitter/EventEmitter","get-size/get-size","fizzy-ui-utils/utils","./item"],function(t,e,i,o,n){return a(r,t,e,i,o,n)}):"object"==typeof exports?module.exports=a(r,require("eventie"),require("wolfy87-eventemitter"),require("get-size"),require("fizzy-ui-utils"),require("./item")):r.Outlayer=a(r,r.eventie,r.EventEmitter,r.getSize,r.fizzyUIUtils,r.Outlayer.Item)}(window,function(t,e,i,n,a,o){"use strict";var r=t.console,s=t.jQuery,l=0,u={};function d(t,e){var i=a.getQueryElement(t);if(i){this.element=i,s&&(this.$element=s(this.element)),this.options=a.extend({},this.constructor.defaults),this.option(e);var o=++l;this.element.outlayerGUID=o,(u[o]=this)._create(),this.options.isInitLayout&&this.layout()}else r&&r.error("Bad element for "+this.constructor.namespace+": "+(i||t))}return d.namespace="outlayer",d.Item=o,d.defaults={containerStyle:{position:"relative"},isInitLayout:!0,isOriginLeft:!0,isOriginTop:!0,isResizeBound:!0,isResizingContainer:!0,transitionDuration:"0.4s",hiddenStyle:{opacity:0,transform:"scale(0.001)"},visibleStyle:{opacity:1,transform:"scale(1)"}},a.extend(d.prototype,i.prototype),d.prototype.option=function(t){a.extend(this.options,t)},d.prototype._create=function(){this.reloadItems(),a.extend(this.element.style,this.options.containerStyle),this.options.isResizeBound&&this.bindResize()},d.prototype.reloadItems=function(){this.items=this._itemize(this.element.children)},d.prototype._itemize=function(t){for(var e=this._filterFindItemElements(t),i=this.constructor.Item,o=[],n=0,r=e.length;n<r;n++){var a=new i(e[n],this);o.push(a)}return o},d.prototype._filterFindItemElements=function(t){return a.filterFindElements(t,this.options.itemSelector)},d.prototype.getItemElements=function(){for(var t=[],e=0,i=this.items.length;e<i;e++)t.push(this.items[e].element);return t},d.prototype._init=d.prototype.layout=function(){this._resetLayout();var t=void 0!==this.options.isLayoutInstant?this.options.isLayoutInstant:!this._isLayoutInited;this.layoutItems(this.items,t),this._isLayoutInited=!0},d.prototype._resetLayout=function(){this.getSize()},d.prototype.getSize=function(){this.size=n(this.element)},d.prototype._getMeasurement=function(t,e){var i,o=this.options[t];o?("string"==typeof o?i=this.element.querySelector(o):a.isElement(o)&&(i=o),this[t]=i?n(i)[e]:o):this[t]=0},d.prototype.layoutItems=function(t,e){t=this._getItemsForLayout(t),this._layoutItems(t,e),this._postLayout()},d.prototype._getItemsForLayout=function(t){for(var e=[],i=0,o=t.length;i<o;i++){var n=t[i];n.isIgnored||e.push(n)}return e},d.prototype._layoutItems=function(t,e){if(this._emitCompleteOnItems("layout",t),t&&t.length){for(var i=[],o=0,n=t.length;o<n;o++){var r=t[o],a=this._getItemLayoutPosition(r);a.item=r,a.isInstant=e||r.isLayoutInstant,i.push(a)}this._processLayoutQueue(i)}},d.prototype._getItemLayoutPosition=function(){return{x:0,y:0}},d.prototype._processLayoutQueue=function(t){for(var e=0,i=t.length;e<i;e++){var o=t[e];this._positionItem(o.item,o.x,o.y,o.isInstant)}},d.prototype._positionItem=function(t,e,i,o){o?t.goTo(e,i):t.moveTo(e,i)},d.prototype._postLayout=function(){this.resizeContainer()},d.prototype.resizeContainer=function(){if(this.options.isResizingContainer){var t=this._getContainerSize();t&&(this._setContainerMeasure(t.width,!0),this._setContainerMeasure(t.height,!1))}},d.prototype._getContainerSize=function(){},d.prototype._setContainerMeasure=function(t,e){if(void 0!==t){var i=this.size;i.isBorderBox&&(t+=e?i.paddingLeft+i.paddingRight+i.borderLeftWidth+i.borderRightWidth:i.paddingBottom+i.paddingTop+i.borderTopWidth+i.borderBottomWidth),t=Math.max(t,0),this.element.style[e?"width":"height"]=t+"px"}},d.prototype._emitCompleteOnItems=function(t,e){var i=this;function o(){i.dispatchEvent(t+"Complete",null,[e])}var n=e.length;if(e&&n)for(var r=0,a=0,s=e.length;a<s;a++){e[a].once(t,l)}else o();function l(){++r===n&&o()}},d.prototype.dispatchEvent=function(t,e,i){var o=e?[e].concat(i):i;if(this.emitEvent(t,o),s)if(this.$element=this.$element||s(this.element),e){var n=s.Event(e);n.type=t,this.$element.trigger(n,i)}else this.$element.trigger(t,i)},d.prototype.ignore=function(t){var e=this.getItem(t);e&&(e.isIgnored=!0)},d.prototype.unignore=function(t){var e=this.getItem(t);e&&delete e.isIgnored},d.prototype._find=function(t){if(t)return"string"==typeof t&&(t=this.element.querySelectorAll(t)),t=a.makeArray(t)},d.prototype._getBoundingRect=function(){var t=this.element.getBoundingClientRect(),e=this.size;this._boundingRect={left:t.left+e.paddingLeft+e.borderLeftWidth,top:t.top+e.paddingTop+e.borderTopWidth,right:t.right-(e.paddingRight+e.borderRightWidth),bottom:t.bottom-(e.paddingBottom+e.borderBottomWidth)}},d.prototype._getElementOffset=function(t){var e=t.getBoundingClientRect(),i=this._boundingRect,o=n(t);return{left:e.left-i.left-o.marginLeft,top:e.top-i.top-o.marginTop,right:i.right-e.right-o.marginRight,bottom:i.bottom-e.bottom-o.marginBottom}},d.prototype.handleEvent=function(t){var e="on"+t.type;this[e]&&this[e](t)},d.prototype.bindResize=function(){this.isResizeBound||(e.bind(t,"resize",this),this.isResizeBound=!0)},d.prototype.unbindResize=function(){this.isResizeBound&&e.unbind(t,"resize",this),this.isResizeBound=!1},d.prototype.onresize=function(){this.resizeTimeout&&clearTimeout(this.resizeTimeout);var t=this;this.resizeTimeout=setTimeout(function(){t.resize(),delete t.resizeTimeout},100)},d.prototype.resize=function(){this.isResizeBound&&this.needsResizeLayout()&&this.layout()},d.prototype.needsResizeLayout=function(){var t=n(this.element);return this.size&&t&&t.innerWidth!==this.size.innerWidth},d.prototype.addItems=function(t){var e=this._itemize(t);return e.length&&(this.items=this.items.concat(e)),e},d.prototype.appended=function(t){var e=this.addItems(t);e.length&&(this.layoutItems(e,!0),this.reveal(e))},d.prototype.reveal=function(t){this._emitCompleteOnItems("reveal",t);for(var e=t&&t.length,i=0;e&&i<e;i++){t[i].reveal()}},d.prototype.hide=function(t){this._emitCompleteOnItems("hide",t);for(var e=t&&t.length,i=0;e&&i<e;i++){t[i].hide()}},d.prototype.revealItemElements=function(t){var e=this.getItems(t);this.reveal(e)},d.prototype.hideItemElements=function(t){var e=this.getItems(t);this.hide(e)},d.prototype.getItem=function(t){for(var e=0,i=this.items.length;e<i;e++){var o=this.items[e];if(o.element===t)return o}},d.prototype.getItems=function(t){for(var e=[],i=0,o=(t=a.makeArray(t)).length;i<o;i++){var n=t[i],r=this.getItem(n);r&&e.push(r)}return e},d.prototype.remove=function(t){var e=this.getItems(t);if(this._emitCompleteOnItems("remove",e),e&&e.length)for(var i=0,o=e.length;i<o;i++){var n=e[i];n.remove(),a.removeFrom(this.items,n)}},d.prototype.destroy=function(){var t=this.element.style;t.height="",t.position="",t.width="";for(var e=0,i=this.items.length;e<i;e++){this.items[e].destroy()}this.unbindResize();var o=this.element.outlayerGUID;delete u[o],delete this.element.outlayerGUID,s&&s.removeData(this.element,this.constructor.namespace)},d.data=function(t){var e=(t=a.getQueryElement(t))&&t.outlayerGUID;return e&&u[e]},d.create=function(t,e){function i(){d.apply(this,arguments)}return Object.create?i.prototype=Object.create(d.prototype):a.extend(i.prototype,d.prototype),(i.prototype.constructor=i).defaults=a.extend({},d.defaults),a.extend(i.defaults,e),i.prototype.settings={},i.namespace=t,i.data=d.data,(i.Item=function(){o.apply(this,arguments)}).prototype=new o,a.htmlInit(i,t),s&&s.bridget&&s.bridget(t,i),i},d.Item=o,d}),function(t,e){"use strict";"function"==typeof define&&define.amd?define("TG_Layout/js/item",["outlayer/outlayer"],e):"object"==typeof exports?module.exports=e(require("outlayer")):(t.TG_Layout=t.TG_Layout||{},t.TG_Layout.Item=e(t.Outlayer))}(window,function(t){"use strict";function e(){t.Item.apply(this,arguments)}(e.prototype=new t.Item)._create=function(){this.id=this.layout.itemGUID++,t.Item.prototype._create.call(this),this.sortData={}},e.prototype.updateSortData=function(){if(!this.isIgnored){this.sortData.id=this.id,this.sortData["original-order"]=this.id,this.sortData.random=Math.random();var t=this.layout.options.getSortData,e=this.layout._sorters;for(var i in t){var o=e[i];this.sortData[i]=o(this.element,this)}}};var i=e.prototype.destroy;return e.prototype.destroy=function(){i.apply(this,arguments),this.css({display:""})},e}),function(t,e){"use strict";"function"==typeof define&&define.amd?define("TG_Layout/js/layout-mode",["get-size/get-size","outlayer/outlayer"],e):"object"==typeof exports?module.exports=e(require("get-size"),require("outlayer")):(t.TG_Layout=t.TG_Layout||{},t.TG_Layout.LayoutMode=e(t.getSize,t.Outlayer))}(window,function(e,r){"use strict";function a(t){(this.TG_Layout=t)&&(this.options=t.options[this.namespace],this.element=t.element,this.items=t.filteredItems,this.size=t.size)}return function(){for(var t=["_resetLayout","_getItemLayoutPosition","_getContainerSize","_getElementOffset","needsResizeLayout"],e=0,i=t.length;e<i;e++){var o=t[e];a.prototype[o]=n(o)}function n(t){return function(){return r.prototype[t].apply(this.TG_Layout,arguments)}}}(),a.prototype.needsVerticalResizeLayout=function(){var t=e(this.TG_Layout.element);return this.TG_Layout.size&&t&&t.innerHeight!=this.TG_Layout.size.innerHeight},a.prototype._getMeasurement=function(){this.TG_Layout._getMeasurement.apply(this,arguments)},a.prototype.getColumnWidth=function(){this.getSegmentSize("column","Width")},a.prototype.getRowHeight=function(){this.getSegmentSize("row","Height")},a.prototype.getSegmentSize=function(t,e){var i=t+e,o="outer"+e;if(this._getMeasurement(i,o),!this[i]){var n=this.getFirstItemSize();this[i]=n&&n[o]||this.TG_Layout.size["inner"+e]}},a.prototype.getFirstItemSize=function(){var t=this.TG_Layout.filteredItems[0];return t&&t.element&&e(t.element)},a.prototype.layout=function(){this.TG_Layout.layout.apply(this.TG_Layout,arguments)},a.prototype.getSize=function(){this.TG_Layout.getSize(),this.size=this.TG_Layout.size},a.modes={},a.create=function(t,e){function i(){a.apply(this,arguments)}return i.prototype=new a,e&&(i.options=e),a.modes[i.prototype.namespace=t]=i},a}),function(t,e){"use strict";"function"==typeof define&&define.amd?define("masonry/masonry",["outlayer/outlayer","get-size/get-size","fizzy-ui-utils/utils"],e):"object"==typeof exports?module.exports=e(require("outlayer"),require("get-size"),require("fizzy-ui-utils")):t.Masonry=e(t.Outlayer,t.getSize,t.fizzyUIUtils)}(window,function(t,a,h){var e=t.create("masonry");return e.prototype._resetLayout=function(){this.getSize(),this._getMeasurement("columnWidth","outerWidth"),this._getMeasurement("gutter","outerWidth"),this.measureColumns();var t=this.cols;for(this.colYs=[];t--;)this.colYs.push(0);this.x=0,this.y=0,this.maxY=0},e.prototype.measureColumns=function(){if(this.getContainerWidth(),!this.columnWidth){var t=this.items[0],e=t&&t.element;this.columnWidth=e&&a(e).outerWidth||this.containerWidth}var i=this.columnWidth+=this.gutter,o=this.containerWidth+this.gutter,n=o/i,r=i-o%i;n=Math[r&&r<1?"round":"floor"](n),this.cols=Math.max(n,1)},e.prototype.getContainerWidth=function(){var t=this.options.isFitWidth?this.element.parentNode:this.element,e=a(t);this.containerWidth=e&&e.innerWidth},e.prototype._getItemLayoutPosition=function(t){t.getSize();var e=t.size.outerWidth%this.columnWidth,i=Math[e&&e<1?"round":"ceil"](t.size.outerWidth/this.columnWidth);i=Math.min(i,this.cols);var o=this._getColGroup(i),n=Math.min.apply(Math,o),r=h.indexOf(o,n);if(this.options.isFitRows){var a=t.size.outerWidth+this.gutter,s=this.TG_Layout.size.innerWidth+this.gutter;0!==this.x&&a+this.x>s&&(this.x=0,this.y=this.maxY)}else this.x=this.columnWidth*r,this.y=n;var l={x:this.x,y:this.y};this.options.isFitRows&&(this.maxY=Math.max(this.maxY,this.y+t.size.outerHeight+this.gutter),this.x+=a);for(var u=n+t.size.outerHeight+this.gutter,d=this.cols+1-o.length,c=0;c<d;c++)this.colYs[r+c]=u;return l},e.prototype._getColGroup=function(t){if(t<2)return this.colYs;for(var e=[],i=this.cols+1-t,o=0;o<i;o++){var n=this.colYs.slice(o,o+t);e[o]=Math.max.apply(Math,n)}return e},e.prototype._getContainerSize=function(){this.maxY=this.options.isFitRows?this.maxY:Math.max.apply(Math,this.colYs);var t={height:this.maxY-this.gutter};return this.options.isFitWidth&&(t.width=this._getContainerFitWidth()),t},e.prototype._getContainerFitWidth=function(){for(var t=0,e=this.cols;--e&&0===this.colYs[e];)t++;return(this.cols-t)*this.columnWidth-this.gutter},e.prototype.needsResizeLayout=function(){var t=this.containerWidth;return this.getContainerWidth(),t!==this.containerWidth},e}),function(t,e){"use strict";"function"==typeof define&&define.amd?define("TG_Layout/js/layout-modes/masonry",["../layout-mode","masonry/masonry"],e):"object"==typeof exports?module.exports=e(require("../layout-mode"),require("masonry-layout")):e(t.TG_Layout.LayoutMode,t.Masonry)}(window,function(t,e){"use strict";var i=t.create("masonry"),o=i.prototype._getElementOffset,n=i.prototype.layout,r=i.prototype._getMeasurement;!function(t,e){for(var i in e)t[i]=e[i]}(i.prototype,e.prototype),i.prototype._getElementOffset=o,i.prototype.layout=n,i.prototype._getMeasurement=r;var a=i.prototype.measureColumns;return i.prototype.measureColumns=function(){this.items=this.TG_Layout.filteredItems,a.call(this)},i}),function(a,s){"use strict";"function"==typeof define&&define.amd?define(["outlayer/outlayer","get-size/get-size","matches-selector/matches-selector","fizzy-ui-utils/utils","TG_Layout/js/item","TG_Layout/js/layout-mode","TG_Layout/js/layout-modes/masonry"],function(t,e,i,o,n,r){return s(a,t,e,i,o,n,r)}):"object"==typeof exports?module.exports=s(a,require("outlayer"),require("get-size"),require("desandro-matches-selector"),require("fizzy-ui-utils"),require("./item"),require("./layout-mode"),require("./layout-modes/masonry")):a.TG_Layout=s(a,a.Outlayer,a.getSize,a.matchesSelector,a.fizzyUIUtils,a.TG_Layout.Item,a.TG_Layout.LayoutMode)}(window,function(t,o,e,i,n,r,a){var s=t.jQuery,l=String.prototype.trim?function(t){return t.trim()}:function(t){return t.replace(/^\s+|\s+$/g,"")},u=document.documentElement.textContent?function(t){return t.textContent}:function(t){return t.innerText},d=o.create("TG_Layout",{layoutMode:"masonry",isJQueryFiltering:!0,sortAscending:!0});d.Item=r,d.LayoutMode=a,d.prototype._create=function(){for(var t in this.itemGUID=0,this._sorters={},this._getSorters(),o.prototype._create.call(this),this.modes={},this.filteredItems=this.items,this.sortHistory=["original-order"],a.modes)this._initLayoutMode(t)},d.prototype.reloadItems=function(){this.itemGUID=0,o.prototype.reloadItems.call(this)},d.prototype._itemize=function(){for(var t=o.prototype._itemize.apply(this,arguments),e=0,i=t.length;e<i;e++){t[e].id=this.itemGUID++}return this._updateItemsSortData(t),t},d.prototype._initLayoutMode=function(t){var e=a.modes[t],i=this.options[t]||{};this.options[t]=e.options?n.extend(e.options,i):i,this.modes[t]=new e(this)},d.prototype.layout=function(){this._isLayoutInited||!this.options.isInitLayout?this._layout():this.arrange()},d.prototype._layout=function(){var t=this._getIsInstant();this._resetLayout(),this.layoutItems(this.filteredItems,t),this._isLayoutInited=!0},d.prototype.arrange=function(t){this.option(t),this._getIsInstant();var e=this._filter(this.items);this.filteredItems=e.matches;var i=this;function o(){i.reveal(e.needReveal),i.hide(e.needHide)}this._bindArrangeComplete(),this._isInstant?this._noTransition(o):o(),this._sort(),this._layout()},d.prototype._init=d.prototype.arrange,d.prototype._getIsInstant=function(){var t=void 0!==this.options.isLayoutInstant?this.options.isLayoutInstant:!this._isLayoutInited;return this._isInstant=t},d.prototype._bindArrangeComplete=function(){var t,e,i,o=this;function n(){t&&e&&i&&o.dispatchEvent("arrangeComplete",null,[o.filteredItems])}this.once("layoutComplete",function(){t=!0,n()}),this.once("hideComplete",function(){e=!0,n()}),this.once("revealComplete",function(){i=!0,n()})},d.prototype._filter=function(t){var e=this.options.filter;e=e||"*";for(var i=[],o=[],n=[],r=this._getFilterTest(e),a=0,s=t.length;a<s;a++){var l=t[a];if(!l.isIgnored){var u=r(l);u&&i.push(l),u&&l.isHidden?o.push(l):u||l.isHidden||n.push(l)}}return{matches:i,needReveal:o,needHide:n}},d.prototype._getFilterTest=function(e){return s&&this.options.isJQueryFiltering?function(t){return s(t.element).is(e)}:"function"==typeof e?function(t){return e(t.element)}:function(t){return i(t.element,e)}},d.prototype.updateSortData=function(t){var e;t?(t=n.makeArray(t),e=this.getItems(t)):e=this.items,this._getSorters(),this._updateItemsSortData(e)},d.prototype._getSorters=function(){var t=this.options.getSortData;for(var e in t){var i=t[e];this._sorters[e]=c(i)}},d.prototype._updateItemsSortData=function(t){for(var e=t&&t.length,i=0;e&&i<e;i++){t[i].updateSortData()}};var c=function(t){if("string"!=typeof t)return t;var e,i,o=l(t).split(" "),n=o[0],r=n.match(/^\[(.+)\]$/),a=(e=r&&r[1],i=n,e?function(t){return t.getAttribute(e)}:function(t){var e=t.querySelector(i);return e&&u(e)}),s=d.sortDataParsers[o[1]];return t=s?function(t){return t&&s(a(t))}:function(t){return t&&a(t)}};return d.sortDataParsers={parseInt:function(t){return parseInt(t,10)},parseFloat:function(t){return parseFloat(t)}},d.prototype._sort=function(){var t=this.options.sortBy;if(t){var u,d,e=[].concat.apply(t,this.sortHistory),i=(u=e,d=this.options.sortAscending,function(t,e){for(var i=0,o=u.length;i<o;i++){var n=u[i],r=t.sortData[n],a=e.sortData[n];if(a<r||r<a){var s=void 0!==d[n]?d[n]:d,l=s?1:-1;return(a<r?1:-1)*l}}return 0});this.filteredItems.sort(i),t!=this.sortHistory[0]&&this.sortHistory.unshift(t)}},d.prototype._mode=function(){var t=this.options.layoutMode,e=this.modes[t];if(!e)throw new Error("No layout mode: "+t);return e.options=this.options[t],e},d.prototype._resetLayout=function(){o.prototype._resetLayout.call(this),this._mode()._resetLayout()},d.prototype._getItemLayoutPosition=function(t){return this._mode()._getItemLayoutPosition(t)},d.prototype._getContainerSize=function(){return this._mode()._getContainerSize()},d.prototype.needsResizeLayout=function(){return this._mode().needsResizeLayout()},d.prototype.appended=function(t){var e=this.addItems(t);if(e.length)if("justified"==this.options.layoutMode){var i=this._filter(e);this.hide(i.needHide),this.reveal(i.matches),this.filteredItems=this.filteredItems.concat(i.matches),this.layoutItems(i.matches,!0)}else{var o=this._filterRevealAdded(e);this.filteredItems=this.filteredItems.concat(o)}},d.prototype._filterRevealAdded=function(t){var e=this._filter(t);return this.hide(e.needHide),this.reveal(e.matches),this.layoutItems(e.matches,!0),e.matches},d.prototype._noTransition=function(t){var e=this.options.transitionDuration;this.options.transitionDuration=0;var i=t.call(this);return this.options.transitionDuration=e,i},d.prototype.getFilteredItemElements=function(){for(var t=[],e=0,i=this.filteredItems.length;e<i;e++)t.push(this.filteredItems[e].element);return t},d}),function(t){function i(t){return new RegExp("(^|\\s+)"+t+"(\\s+|$)")}var o,n,r;function e(t,e){(o(t,e)?r:n)(t,e)}"classList"in document.documentElement?(o=function(t,e){return t.classList.contains(e)},n=function(t,e){t.classList.add(e)},r=function(t,e){t.classList.remove(e)}):(o=function(t,e){return i(e).test(t.className)},n=function(t,e){o(t,e)||(t.className=t.className+" "+e)},r=function(t,e){t.className=t.className.replace(i(e)," ")});var a={hasClass:o,addClass:n,removeClass:r,toggleClass:e,has:o,add:n,remove:r,toggle:e};"function"==typeof define&&define.amd?define("classie/classie",a):"object"==typeof exports?module.exports=a:t.classie=a}(window),function(t,e){"function"==typeof define&&define.amd?define("packery/js/rect",e):"object"==typeof exports?module.exports=e():(t.Packery=t.Packery||{},t.Packery.Rect=e())}(window,function(){function s(t){for(var e in s.defaults)this[e]=s.defaults[e];for(e in t)this[e]=t[e]}return((window.Packery=function(){}).Rect=s).defaults={x:0,y:0,width:0,height:0},s.prototype.contains=function(t){var e=t.width||0,i=t.height||0;return this.x<=t.x&&this.y<=t.y&&this.x+this.width>=t.x+e&&this.y+this.height>=t.y+i},s.prototype.overlaps=function(t){var e=this.x+this.width,i=this.y+this.height,o=t.x+t.width,n=t.y+t.height;return this.x<o&&e>t.x&&this.y<n&&i>t.y},s.prototype.getMaximalFreeRects=function(t){if(!this.overlaps(t))return!1;var e,i=[],o=this.x+this.width,n=this.y+this.height,r=t.x+t.width,a=t.y+t.height;return this.y<t.y&&(e=new s({x:this.x,y:this.y,width:this.width,height:t.y-this.y}),i.push(e)),r<o&&(e=new s({x:r,y:this.y,width:o-r,height:this.height}),i.push(e)),a<n&&(e=new s({x:this.x,y:a,width:this.width,height:n-a}),i.push(e)),this.x<t.x&&(e=new s({x:this.x,y:this.y,width:t.x-this.x,height:this.height}),i.push(e)),i},s.prototype.canFit=function(t){return this.width>=t.width&&this.height>=t.height},s}),function(t,e){if("function"==typeof define&&define.amd)define("packery/js/packer",["./rect"],e);else if("object"==typeof exports)module.exports=e(require("./rect"));else{var i=t.Packery=t.Packery||{};i.Packer=e(i.Rect)}}(window,function(e){function t(t,e,i){this.width=t||0,this.height=e||0,this.sortDirection=i||"downwardLeftToRight",this.reset()}t.prototype.reset=function(){this.spaces=[],this.newSpaces=[];var t=new e({x:0,y:0,width:this.width,height:this.height});this.spaces.push(t),this.sorter=i[this.sortDirection]||i.downwardLeftToRight},t.prototype.pack=function(t){for(var e=0,i=this.spaces.length;e<i;e++){var o=this.spaces[e];if(o.canFit(t)){this.placeInSpace(t,o);break}}},t.prototype.placeInSpace=function(t,e){t.x=e.x,t.y=e.y,this.placed(t)},t.prototype.placed=function(t){for(var e=[],i=0,o=this.spaces.length;i<o;i++){var n=this.spaces[i],r=n.getMaximalFreeRects(t);r?e.push.apply(e,r):e.push(n)}this.spaces=e,this.mergeSortSpaces()},t.prototype.mergeSortSpaces=function(){t.mergeRects(this.spaces),this.spaces.sort(this.sorter)},t.prototype.addSpace=function(t){this.spaces.push(t),this.mergeSortSpaces()},t.mergeRects=function(t){for(var e=0,i=t.length;e<i;e++){var o=t[e];if(o){var n=t.slice(0);n.splice(e,1);for(var r=0,a=0,s=n.length;a<s;a++){var l=n[a],u=a<e?0:1;o.contains(l)&&(t.splice(a+u-r,1),r++)}}}return t};var i={downwardLeftToRight:function(t,e){return t.y-e.y||t.x-e.x},rightwardTopToBottom:function(t,e){return t.x-e.x||t.y-e.y}};return t}),function(t,e){"function"==typeof define&&define.amd?define("packery/js/item",["get-style-property/get-style-property","outlayer/outlayer","./rect"],e):"object"==typeof exports?module.exports=e(require("desandro-get-style-property"),require("outlayer"),require("./rect")):t.Packery.Item=e(t.getStyleProperty,t.Outlayer,t.Packery.Rect)}(window,function(t,e,i){t("transform");var o=function(){e.Item.apply(this,arguments)},n=(o.prototype=new e.Item)._create;return o.prototype._create=function(){n.call(this),this.rect=new i,this.placeRect=new i},o.prototype.positionPlaceRect=function(t,e,i){this.placeRect.x=this.getPlaceRectCoord(t,!0),this.placeRect.y=this.getPlaceRectCoord(e,!1,i)},o.prototype.getPlaceRectCoord=function(t,e,i){var o,n=e?"Width":"Height",r=this.size["outer"+n],a=this.layout[e?"columnWidth":"rowHeight"],s=this.layout.size["inner"+n];if(e||(s=Math.max(s,this.layout.maxY),this.layout.rowHeight||(s-=this.layout.gutter)),a){var l;a+=this.layout.gutter,s+=e?this.layout.gutter:0,t=Math.round(t/a),l=this.layout.options.isHorizontal?e?"ceil":"floor":e?"floor":"ceil";var u=Math[l](s/a);o=u-=Math.ceil(r/a)}else o=s-r;return t=i?t:Math.min(t,o),t*=a||1,Math.max(0,t)},o.prototype.copyPlaceRectPosition=function(){this.rect.x=this.placeRect.x,this.rect.y=this.placeRect.y},o.prototype.removeElem=function(){this.element.parentNode.removeChild(this.element),this.layout.packer.addSpace(this.rect),this.emitEvent("remove",[this])},o}),function(t,e){"function"==typeof define&&define.amd?define("packery/js/packery",["classie/classie","get-size/get-size","outlayer/outlayer","./rect","./packer","./item"],e):"object"==typeof exports?module.exports=e(require("desandro-classie"),require("get-size"),require("outlayer"),require("./rect"),require("./packer"),require("./item")):t.Packery=e(t.classie,t.getSize,t.Outlayer,t.Packery.Rect,t.Packery.Packer,t.Packery.Item)}(window,function(t,r,e,i,o,n){i.prototype.canFit=function(t){return this.width>=t.width-1&&this.height>=t.height-1};var a=e.create("packery");function s(t,e){return t.position.y-e.position.y||t.position.x-e.position.x}function l(t,e){return t.position.x-e.position.x||t.position.y-e.position.y}return a.Item=n,a.prototype._create=function(){e.prototype._create.call(this),this.packer=new o},a.prototype._resetLayout=function(){this.getSize(),this._getMeasurements();var t=this.packer;this.options.isHorizontal?(t.width=Number.POSITIVE_INFINITY,t.height=this.size.innerHeight+this.gutter,t.sortDirection="rightwardTopToBottom"):(t.width=this.size.innerWidth+this.gutter,t.height=Number.POSITIVE_INFINITY,t.sortDirection="downwardLeftToRight"),t.reset(),this.maxY=0,this.maxX=0},a.prototype._getMeasurements=function(){this._getMeasurement("columnWidth","width"),this._getMeasurement("rowHeight","height"),this._getMeasurement("gutter","width")},a.prototype._getItemLayoutPosition=function(t){return this._packItem(t),t.rect},a.prototype._packItem=function(t){this._setRectSize(t.element,t.rect),this.packer.pack(t.rect),this._setMaxXY(t.rect)},a.prototype._setMaxXY=function(t){this.maxX=Math.max(t.x+t.width,this.maxX),this.maxY=Math.max(t.y+t.height,this.maxY)},a.prototype._setRectSize=function(t,e){var i=r(t),o=i.outerWidth,n=i.outerHeight;(o||n)&&(o=this._applyGridGutter(o,this.columnWidth),n=this._applyGridGutter(n,this.rowHeight)),e.width=Math.min(o,this.packer.width),e.height=Math.min(n,this.packer.height)},a.prototype._applyGridGutter=function(t,e){if(!e)return t+this.gutter;var i=t%(e+=this.gutter);return t=Math[i&&i<1?"round":"ceil"](t/e)*e},a.prototype._getContainerSize=function(){return this.options.isHorizontal?{width:this.maxX-this.gutter}:{height:this.maxY-this.gutter}},a.prototype.sortItemsByPosition=function(){var t=this.options.isHorizontal?l:s;this.items.sort(t)},a.prototype.fit=function(t,e,i){var o=this.getItem(t);o&&(this._getMeasurements(),o.getSize(),o.isPlacing=!0,e=void 0===e?o.rect.x:e,i=void 0===i?o.rect.y:i,o.positionPlaceRect(e,i,!0),this._bindFitEvents(o),o.moveTo(o.placeRect.x,o.placeRect.y),this.layout(),this.unstamp(o.element),this.sortItemsByPosition(),o.isPlacing=!1,o.copyPlaceRectPosition())},a.prototype._bindFitEvents=function(t){var e=this,i=0;function o(){2==++i&&e.emitEvent("fitComplete",[t])}t.on("layout",function(){return o(),!0}),this.on("layoutComplete",function(){return o(),!0})},a.prototype.resize=function(){var t=r(this.element),e=this.size&&t,i=this.options.isHorizontal?"innerHeight":"innerWidth";e&&t[i]==this.size[i]||this.layout()},a.Rect=i,a.Packer=o,a}),function(t,e){"function"==typeof define&&define.amd?define(["TG_Layout/js/layout-mode","packery/js/packery","get-size/get-size"],e):"object"==typeof exports?module.exports=e(require("TG_Layout-layout/js/layout-mode"),require("packery"),require("get-size")):e(t.TG_Layout.LayoutMode,t.Packery,t.getSize)}(window,function(t,e,o){var i=t.create("packery"),n=i.prototype._getElementOffset,r=i.prototype._getMeasurement;!function(t,e){for(var i in e)t[i]=e[i]}(i.prototype,e.prototype),i.prototype._getElementOffset=n,i.prototype._getMeasurement=r;var a=i.prototype._resetLayout;i.prototype._resetLayout=function(){this.packer=this.packer||new e.Packer,a.apply(this,arguments)};var s=i.prototype._getItemLayoutPosition;return i.prototype._getItemLayoutPosition=function(t){return t.rect=t.rect||new e.Rect,s.call(this,t)},i.prototype.needsResizeLayout=function(){var t=o(this.element),e=this.size&&t,i=this.options.isHorizontal?"innerHeight":"innerWidth";return e&&t[i]!=this.size[i]},i}),function(t){"use strict";function e(t){var e=t.create("horizontal");return e.prototype._resetLayout=function(){this.x=0},e.prototype._getItemLayoutPosition=function(t){t.getSize(),this._getMeasurement("gutter","width");var e=this.x;return this.x+=t.size.outerWidth+this.gutter,{x:e,y:0}},e.prototype._getContainerSize=function(){return{width:this.x-this.gutter}},e.prototype.needsResizeLayout=function(){return this.needsVerticalResizeLayout()},e}"function"==typeof define&&define.amd?define(["TG_Layout/js/layout-mode"],e):"object"==typeof exports?module.exports=e(require("TG_Layout-layout/js/layout-mode")):e(t.TG_Layout.LayoutMode)}(window),function(t){"use strict";function e(t){var e=t.create("justified");return e.prototype._resetLayout=function(){this.justified_data=[],this.prev_width=0,this.prev_top=0,this.max_width=0,this.count=0,this._getMeasurement("gutter","width"),this._getMeasurement("rowHeight","height");var t=this.TG_Layout.size.innerWidth+this.gutter,e=this.TG_Layout.filteredItems;if(this.options.isHorizontal)this.row(e);else{t:for(;0<e.length;){for(var i=1;i<e.length+1;++i){var o=e.slice(0,i),n=this.getHeight(o,t);if(n<this.rowHeight){this.setHeight(o,n),0,e=e.slice(i);continue t}}this.setHeight(o,Math.min(this.rowHeight,n)),0;break}this.checkWidth()}},e.prototype.row=function(t){for(var e=this.options.row,i=this.rowHeight,o=0;o<t.length;++o){var n=jQuery(t[o].element).find(this.options.image),r=n[0]?this.getSize(n):[],a=r.width?Math.round(i*r.width/r.height):16*i/9,s=this.justified_data[o-e],l=s?s.x+s.width+this.gutter:0,u=s?s.y:o*(i+this.gutter);this.justified_data.push({width:a,height:i,x:l,y:u})}},e.prototype.getHeight=function(t,e){e-=t.length*this.gutter;for(var i=0,o=0;o<t.length;++o){var n=jQuery(t[o].element).find(this.options.image),r=n[0]?this.getSize(n):[];i+=(r.width?r.width:16*this.rowHeight/9)/(r.height?r.height:this.rowHeight)}return e/i},e.prototype.setHeight=function(t,e){for(var i=this.prev_width=0;i<t.length;++i){var o=jQuery(t[i].element).find(this.options.image),n=(e=Math.round(e),o[0]?this.getSize(o):[]),r=n.width?Math.round(e*n.width/n.height):16*e/9;this.justified_data.push({width:r,height:e,x:this.prev_width,y:this.prev_top}),this.prev_width+=r+this.gutter}this.prev_top+=e+this.gutter},e.prototype.getSize=function(t){if(t[0].naturalWidth)var e=t[0]?t[0].naturalWidth:null,i=t[0]?t[0].naturalHeight:null;else{var o=new Image;o.src=t[0]?t.attr("src"):null;e=o?o.width:null,i=o?o.height:null}return{width:e,height:i}},e.prototype.checkWidth=function(){for(var t=0,e=this.justified_data.length,i=0;i<this.justified_data.length;++i)this.justified_data[i].y!=t&&this.adjustWidth(i-1),t=this.justified_data[i].y;var o=this.justified_data[e-1];o&&o.x+o.width>this.TG_Layout.size.innerWidth&&this.adjustWidth(e-1)},e.prototype.adjustWidth=function(t){var e=this.justified_data[t].x,i=this.justified_data[t].width,o=this.TG_Layout.size.innerWidth-(e+i);this.justified_data[t].width=i+o},e.prototype._getItemLayoutPosition=function(t){if(!this.justified_data[this.count]){this.pcount=this.count,this._resetLayout();for(var e=0;e<this.pcount;++e){jQuery(this.TG_Layout.filteredItems[e].element).width(this.justified_data[e].width).height(this.justified_data[e].height).css("top",this.justified_data[e].y).css("left",this.justified_data[e].x);var i=this.justified_data[e].x+this.justified_data[e].width;this.max_width=i>this.max_width?i:this.max_width}this.count=this.pcount}t.element.style.width=this.justified_data[this.count].width+"px",t.element.style.height=this.justified_data[this.count].height+"px";var o={x:this.justified_data[this.count].x,y:this.justified_data[this.count].y};i=o.x+this.justified_data[this.count].width;return this.max_width=i>this.max_width?i:this.max_width,++this.count,o},e.prototype._getContainerSize=function(){return this.options.isHorizontal?{width:this.max_width,height:(this.rowHeight+this.gutter)*this.options.row-this.gutter}:{height:this.prev_top-this.gutter}},e.prototype.needsResizeLayout=function(){return this.max_width},e}"function"==typeof define&&define.amd?define(["TG_Layout/js/layout-mode"],e):"object"==typeof exports?module.exports=e(require("TG_Layout-layout/js/layout-mode")):e(t.TG_Layout.LayoutMode)}(window),function(t){var e=TG_Layout.Item.prototype.reveal;TG_Layout.Item.prototype.reveal=function(){e.apply(this,arguments),t(this.element).removeClass("tg-item-hidden")};var i=TG_Layout.Item.prototype.hide;TG_Layout.Item.prototype.hide=function(){i.apply(this,arguments),t(this.element).addClass("tg-item-hidden")}}(jQuery),function(ft,t,mt){"use strict";var gt,yt,e="TG_Slider",vt=e,_t=t.cancelAnimationFrame||t.cancelRequestAnimationFrame,wt=t.requestAnimationFrame,bt=ft(document),Tt="touchstart."+vt+" mousedown."+vt,xt="mousemove."+vt+" mouseup."+vt,zt="touchmove."+vt+" touchend."+vt,i=(document.implementation.hasFeature("Event.wheel","3.0")?"wheel.":"mousewheel.")+vt,Lt="click."+vt,Ct="mousedown."+vt,It=["INPUT","SELECT","BUTTON","TEXTAREA"],St=[],Gt=Math.abs,Pt=Math.sqrt,jt=Math.pow,Et=Math.round,kt=Math.max,Mt=Math.min,o=0;function Rt(t,e,o){var i,n,_=ft.extend({},Rt.defaults,e),w=this,b=At(t),T=ft(t),x=_.slidee?ft(_.slidee).eq(0):T.children().eq(0),z=0,L=0,C={start:0,center:0,end:0,cur:0,dest:0},I=ft(_.scrollBar).eq(0),r=I.children().eq(0),S=0,G=0,a={start:0,end:0,cur:0},P=ft(_.pagesBar),j=0,E=[],k=0,M=[],R={firstItem:0,lastItem:0,centerItem:0,activeItem:null,activePage:0},s=new Ft(T[0]),l=new Ft(x[0]),u=new Ft(I[0]),d=new Ft(r[0]),c="basic"===_.itemNav,D="forceCentered"===_.itemNav,O="centered"===_.itemNav||D,W=!b&&(c||O||D),h=(_.scrollSource&&ft(_.scrollSource),_.dragSource?ft(_.dragSource):T),p=ft(_.forward),f=ft(_.backward),m=ft(_.prev),g=ft(_.next),y=ft(_.prevPage),v=ft(_.nextPage),q={},A={},H={},B={},F={released:1},N=0,Y=0,Q=0,V=0;function X(t){var e=E.length,i=x.data("TG_Layout"),r=i?i.options[i.options.layoutMode].gutter.offsetWidth:0;if(!i)return!1;if(z=T.width(),S=I.width(),L=x.outerWidth(),E.length=0,C.start=0,C.end=kt(L-z,0),W){M.length,k=x.children(_.itemSelector),M.length=0;for(var a,s=Ht(x,_.horizontal?"paddingLeft":"paddingTop"),l=Ht(x,_.horizontal?"paddingRight":"paddingBottom"),o="border-box"===ft(k).css("boxSizing"),n=i.filteredItems,u=0,d=0,c=[],h=[],p=0;p<n.length;p++){var f=parseFloat(getComputedStyle(n[p].element).width)+r,m=n[p].position.x;d=d<m+f?m+f:d,c.push(m)}c.push(d),c.sort(function(t,e){return t-e});for(p=1;p<c.length;p++)h.push(c[p]-c[p-1]);L=0,ft(n).each(function(t,e){var i=r/2,o=r/2,n={};n.el=e,n.size=h[t],n.half=n.size/2,n.start=L-i,n.center=n.start-Et(z/2-n.size/2),n.end=n.start-z+n.size,t||(L+=s),L+=n.size,_.horizontal||o&&i&&0<t&&(L-=Mt(i,o)),0===t&&(n.end+=l,L+=l,u=o),n.size&&(M.push(n),a=n)}),x[0].style[_.horizontal?"width":"height"]=(o?L:L-s-l)+"px",L-=u,M.length?(C.start=M[0][D?"center":"start"],C.end=D?a.center:z<L?a.end:C.start):C.start=C.end=0}if(C.center=Et(C.end/2+C.start/2),et(),!b&&0<z){var g=C.start,y="";if(W)ft.each(M,function(t,e){D?E.push(e.center):e.start+e.size>g&&g<=C.end&&(g=e.start,E.push(e.size<z&&"justified"===i.options.layoutMode?e.start+(e.size-z)/2:e.start),(g+=z)>C.end&&g<C.end+z&&E.push(C.end))});else for(;g-z<C.end;)E.push(g),g+=z;if(P[0]&&e!==E.length){for(p=0;p<E.length;p++)y+=_.pageBuilder.call(w,p);1===E.length&&(y=null),(j=P.html(y).children()).eq(R.activePage).addClass(_.activeClass)}}if(R.slideeSize=L,R.frameSize=z,R.sbSize=S,R.handleSize=G,W){t&&null!=_.startAt&&w[O?"toCenter":"toStart"](_.startAt);var v=M[R.activeItem];U(O&&v?v.center:Bt(C.dest,C.start,C.end))}else t?null!=_.startAt&&U(_.startAt,1):U(Bt(C.dest,C.start,C.end));pt("load")}function U(t,e,i){if(W&&F.released&&!i){var o=tt(t),n=t>C.start&&t<C.end;O?(n&&(t=M[o.centerItem].center),D&&_.activateMiddle&&activate(o.centerItem)):n&&(t=M[o.firstItem].start)}F.init&&F.slidee&&_.elasticBounds?t>C.end?t=C.end+(t-C.end)/6:t<C.start&&(t=C.start+(t-C.start)/6):t=Bt(t,C.start,C.end),H.start=+new Date,H.time=0,H.from=C.cur,H.to=t,H.delta=t-C.cur,H.tweesing=F.tweese||F.init&&!F.slidee,H.immediate=!H.tweesing&&(e||F.init&&F.slidee||!_.speed),F.tweese=0,t!==C.dest&&(C.dest=t,pt("change"),N||$()),F.released&&!w.isPaused&&w.resume(),et(),function(){var t=C.dest<=C.start,e=C.dest>=C.end,i=(t?1:0)|(e?2:0);A.slideePosState!==i&&(A.slideePosState=i,y.is("button,input")&&y.prop("disabled",t),v.is("button,input")&&v.prop("disabled",e),y.add(f)[t?"addClass":"removeClass"](_.disabledClass),v.add(p)[e?"addClass":"removeClass"](_.disabledClass));A.fwdbwdState!==i&&F.released&&(A.fwdbwdState=i,f.is("button,input")&&f.prop("disabled",t),p.is("button,input")&&p.prop("disabled",e));if(W&&null!=R.activeItem){var o=0===R.activeItem,n=R.activeItem>=M.length-1,r=(o?1:0)|(n?2:0);A.itemsButtonState!==r&&(A.itemsButtonState=r,m.is("button,input")&&m.prop("disabled",o),g.is("button,input")&&g.prop("disabled",n),m[o?"addClass":"removeClass"](_.disabledClass),g[n?"addClass":"removeClass"](_.disabledClass))}}(),j[0]&&A.page!==R.activePage&&(A.page=R.activePage,j.removeClass(_.activeClass).eq(R.activePage).addClass(_.activeClass),pt("activePage",A.page))}function $(){if(w.initialized){if(!N)return N=wt($),void(F.released&&pt("moveStart"));H.immediate?C.cur=H.to:H.tweesing?(H.tweeseDelta=H.to-C.cur,Gt(H.tweeseDelta)<.1?C.cur=H.to:C.cur+=H.tweeseDelta*(F.released?_.swingSpeed:_.syncSpeed)):(H.time=Mt(+new Date-H.start,_.speed),C.cur=H.from+H.delta*ft.easing[_.easing](H.time/_.speed,H.time,0,1,_.speed)),H.to===C.cur?(C.cur=H.to,F.tweese=N=0):N=wt($),pt("move"),b||(gt?x[0].style[gt]=yt+(_.horizontal?"translateX":"translateY")+"("+-C.cur+"px)":x[0].style[_.horizontal?"left":"top"]=-Et(C.cur)+"px"),!N&&F.released&&pt("moveEnd")}}function Z(){B.speed&&C.cur!==(0<B.speed?C.end:C.start)||w.stop(),V=F.init?wt(Z):0,B.now=+new Date,B.pos=C.cur+(B.now-B.lastTime)/1e3*B.speed,U(F.init?B.pos:Et(B.pos)),F.init||C.cur!==C.dest||pt("moveEnd"),B.lastTime=B.now}function J(t,e,i){if("boolean"===Dt(e)&&(i=e,e=mt),e===mt)U(C[t],i);else{if(O&&"center"!==t)return;var o=w.getPos(e);o&&U(o[t],i,!O)}}function K(t){return null!=t?At(t)?0<=t&&t<M.length?t:-1:k.index(t):-1}function tt(t){t=Bt(At(t)?t:C.dest,C.start,C.end);var e={},i=D?0:z/2;if(!b)for(var o=0,n=E.length;o<n;o++){if(t>=C.end||o===E.length-1){e.activePage=E.length-1;break}if(t<=E[o]+i){e.activePage=o;break}}if(W){for(var r=!1,a=!1,s=!1,l=0,u=M.length;l<u;l++)if(!1===r&&t<=M[l].start+M[l].half&&(r=l),!1===s&&t<=M[l].center+M[l].half&&(s=l),l===u-1||t<=M[l].end+M[l].half){a=l;break}e.firstItem=At(r)?r:0,e.centerItem=At(s)?s:e.firstItem,e.lastItem=At(a)?a:e.centerItem}return e}function et(t){ft.extend(R,tt(t))}function it(t,e){for(var i=0,o=q[t].length;i<o;i++)if(q[t][i]===e)return i;return-1}function ot(){F.history[0]=F.history[1],F.history[1]=F.history[2],F.history[2]=F.history[3],F.history[3]=F.delta}function nt(t){F.released=0,F.source=t,F.slidee="slidee"===t}function rt(t){var e,i="touchstart"===t.type,o=t.data.source,n="slidee"===o;F.init||!i&&(e=t.target,~ft.inArray(e.nodeName,It)||ft(e).is(_.interactive))||("handle"!==o||_.dragHandle&&a.start!==a.end)&&(n&&!(i?_.touchDragging:_.mouseDragging&&t.which<2)||(i||Ot(t),nt(o),F.init=0,F.$source=ft(t.target),F.touch=i,F.pointer=i?t.originalEvent.touches[0]:t,F.initX=F.pointer.pageX,F.initY=F.pointer.pageY,F.initPos=n?C.cur:a.cur,F.start=+new Date,F.time=0,F.path=0,F.delta=0,F.locked=0,F.history=[0,0,0,0],F.pathToLock=n?i?30:10:0,bt.on(i?zt:xt,at),w.pause(1),(n?x:r).addClass(_.draggedClass),pt("moveStart"),n&&(Y=setInterval(ot,10))))}function at(t){if(F.released="mouseup"===t.type||"touchend"===t.type,F.pointer=F.touch?t.originalEvent[F.released?"changedTouches":"touches"][0]:t,F.pathX=F.pointer.pageX-F.initX,F.pathY=F.pointer.pageY-F.initY,F.path=Pt(jt(F.pathX,2)+jt(F.pathY,2)),F.delta=_.horizontal?F.pathX:F.pathY,F.released||!(F.path<1)){if(!F.init){if(!(_.horizontal?Gt(F.pathX)>Gt(F.pathY):Gt(F.pathX)<Gt(F.pathY)))return st();F.init=1}var e;Ot(t),!F.locked&&F.path>F.pathToLock&&F.slidee&&(F.locked=1,F.$source.on(Lt,Wt)),F.released&&(st(),_.releaseSwing&&F.slidee&&(F.swing=(F.delta-F.history[0])/40*300,F.delta+=F.swing,F.tweese=10<Gt(F.swing))),U(F.slidee?Et(F.initPos-F.delta):(e=F.initPos+F.delta,Et(Bt(e,a.start,a.end)/a.end*(C.end-C.start))+C.start))}}function st(){clearInterval(Y),F.released=!0,bt.off(F.touch?zt:xt,at),(F.slidee?x:r).removeClass(_.draggedClass),setTimeout(function(){F.$source.off(Lt,Wt)}),C.cur===C.dest&&F.init&&pt("moveEnd"),w.resume(1),F.init=0}function lt(){w.stop(),bt.off("mouseup",lt)}function ut(t){switch(Ot(t),this){case p[0]:case f[0]:w.moveBy(p.is(this)?_.moveBy:-_.moveBy),bt.on("mouseup",lt);break;case m[0]:w.prev();break;case g[0]:w.next();break;case y[0]:w.prevPage();break;case v[0]:w.nextPage()}}function dt(t){if(_.keyboardNavBy)switch(t.which){case _.horizontal?37:38:Ot(t),w["pages"===_.keyboardNavBy?"prevPage":"prev"]();break;case _.horizontal?39:40:Ot(t),w["pages"===_.keyboardNavBy?"nextPage":"next"]()}}function ct(){this.parentNode===P[0]&&w.activatePage(j.index(this))}function ht(t){_.pauseOnHover&&w["mouseenter"===t.type?"pause":"resume"](2)}function pt(t,e){if(q[t]){for(n=q[t].length,St.length=0,i=0;i<n;i++)St.push(q[t][i]);for(i=0;i<n;i++)St[i].call(w,t,e)}}b||(t=T[0]),w.initialized=0,w.frame=t,w.slidee=x[0],w.pos=C,w.rel=R,w.items=M,w.pages=E,w.isPaused=0,w.options=_,w.dragging=F,w.reload=function(){X()},w.getPos=function(t){if(W){var e=K(t);return-1!==e&&M[e]}var i=x.find(t).eq(0);if(i[0]){var o=_.horizontal?i.offset().left-x.offset().left:i.offset().top-x.offset().top,n=i[_.horizontal?"outerWidth":"outerHeight"]();return{start:o,center:o-z/2+n/2,end:o-z+n,size:n}}return!1},w.moveBy=function(t){B.speed=t,!F.init&&B.speed&&C.cur!==(0<B.speed?C.end:C.start)&&(B.lastTime=+new Date,B.startPos=C.cur,nt("button"),F.init=1,pt("moveStart"),_t(V),Z())},w.stop=function(){"button"===F.source&&(F.init=0,F.released=1)},w.prev=function(){w.activate(null==R.activeItem?0:R.activeItem-1)},w.next=function(){w.activate(null==R.activeItem?0:R.activeItem+1)},w.prevPage=function(){w.activatePage(R.activePage-1)},w.nextPage=function(){w.activatePage(R.activePage+1)},w.slideBy=function(t,e){t&&(W?w[O?"toCenter":"toStart"](Bt((O?R.centerItem:R.firstItem)+_.scrollBy*t,0,M.length)):U(C.dest+t,e))},w.slideTo=function(t,e){U(t,e)},w.toStart=function(t,e){J("start",t,e)},w.toEnd=function(t,e){J("end",t,e)},w.toCenter=function(t,e){J("center",t,e)},w.getIndex=K,w.activatePage=function(t,e){At(t)&&U(E[Bt(t,0,E.length-1)],e)},w.resume=function(t){_.cycleBy&&_.cycleInterval&&("items"!==_.cycleBy||M[0]&&null!=R.activeItem)&&!(t<w.isPaused)&&(w.isPaused=0,Q?Q=clearTimeout(Q):pt("resume"),Q=setTimeout(function(){switch(pt("cycle"),_.cycleBy){case"items":w.activate(R.activeItem>=M.length-1?0:R.activeItem+1);break;case"pages":w.activatePage(R.activePage>=E.length-1?0:R.activePage+1)}},_.cycleInterval))},w.pause=function(t){t<w.isPaused||(w.isPaused=t||100,Q&&(Q=clearTimeout(Q),pt("pause")))},w.toggle=function(){w[Q?"pause":"resume"]()},w.on=function(t,e){if("object"===Dt(t))for(var i in t)t.hasOwnProperty(i)&&w.on(i,t[i]);else if("function"===Dt(e))for(var o=t.split(" "),n=0,r=o.length;n<r;n++)q[o[n]]=q[o[n]]||[],-1===it(o[n],e)&&q[o[n]].push(e);else if("array"===Dt(e))for(var a=0,s=e.length;a<s;a++)w.on(t,e[a])},w.init=function(){if(!w.initialized){w.on(o);var t=["overflow","position"],e=["position","webkitTransform","msTransform","transform","left","top","width","height"];s.save.apply(s,t),u.save.apply(u,t),l.save.apply(l,e),d.save.apply(d,e);var i=r;return b||(i=i.add(x),T.css("overflow","hidden"),gt||"static"!==T.css("position")||T.css("position","relative")),gt?yt&&i.css(gt,yt):("static"===I.css("position")&&I.css("position","relative"),i.css({position:"absolute"})),_.forward&&p.on(Ct,ut),_.backward&&f.on(Ct,ut),_.prev&&m.on(Lt,ut),_.next&&g.on(Lt,ut),_.prevPage&&y.on(Lt,ut),_.nextPage&&v.on(Lt,ut),P[0]&&_.activatePageOn&&P.on(_.activatePageOn+"."+vt,"*",ct),h.on(Tt,{source:"slidee"},rt),r&&r.on(Tt,{source:"handle"},rt),bt.on("keydown",dt),b||(T.on("mouseenter."+vt+" mouseleave."+vt,ht),T.on("scroll."+vt,qt)),w.initialized=1,X(!0),_.cycleBy&&!b&&w[_.startPaused?"pause":"resume"](),w}}}function Dt(t){return null==t?String(t):"object"==typeof t||"function"==typeof t?Object.prototype.toString.call(t).match(/\s([a-z]+)/i)[1].toLowerCase()||"object":typeof t}function Ot(t,e){t.preventDefault(),e&&t.stopPropagation()}function Wt(t){Ot(t,1),ft(this).off(t.type,Wt)}function qt(){this.scrollLeft=0,this.scrollTop=0}function At(t){return!isNaN(parseFloat(t))&&isFinite(t)}function Ht(t,e){return 0|Et(String(t.css(e)).replace(/[^\-0-9.]/g,""))}function Bt(t,e,i){return t<e?e:i<t?i:t}function Ft(e){var i={style:{},save:function(){if(e&&e.nodeType){for(var t=0;t<arguments.length;t++)i.style[arguments[t]]=e.style[arguments[t]];return i}},restore:function(){if(e&&e.nodeType){for(var t in i.style)i.style.hasOwnProperty(t)&&(e.style[t]=i.style[t]);return i}}};return i}bt.on(i,function(t){var e=t.originalEvent[vt],i=+new Date;(!e||e.options.scrollHijack<i-o)&&(o=i)}),function(e){wt=e.requestAnimationFrame||e.webkitRequestAnimationFrame||function(t){var e=(new Date).getTime(),i=Math.max(0,16-(e-n)),o=setTimeout(t,i);return n=e,o};var n=(new Date).getTime();var i=e.cancelAnimationFrame||e.webkitCancelAnimationFrame||e.clearTimeout;_t=function(t){i.call(e,t)}}(window),function(){var n=["","Webkit","Moz","ms","O"],r=document.createElement("div");function t(t){for(var e=0,i=n.length;e<i;e++){var o=n[e]?n[e]+t.charAt(0).toUpperCase()+t.slice(1):t;if(null!=r.style[o])return o}}gt=t("transform"),yt=t("perspective")?"translateZ(0) ":""}(),t.TG_Slider=Rt,ft.fn[e]=function(o,n){var r,a;return ft.isPlainObject(o)||("string"!==Dt(o)&&!1!==o||(r=!1===o?"destroy":o,a=Array.prototype.slice.call(arguments,1)),o={}),this.each(function(t,e){var i=ft.data(e,vt);i||r?i&&r&&i[r]&&i[r].apply(i,a):i=ft.data(e,vt,new Rt(e,o,n).init())})}}(jQuery,window);var The_Grid={preview:"#tg-grid-preview-inner",wrapper:".tg-grid-wrapper",slider:".tg-grid-slider",grid:".tg-grid-holder",loader:".tg-grid-preloader",ajax:".tg-ajax-button",ajaxMsg:".tg-ajax-scroll-holder",sizer:".tg-grid-sizer",gutter:".tg-gutter-sizer",item:".tg-item",itemImg:".tg-item-image",gallery:".tg-item-gallery-holder",tooltip:".tg-filter-count",filterH:".tg-filters-holder",filter:".tg-filter, .tg-filters-holder select",search:".tg-search",clear:".tg-search-clear",sorter:".tg-sorters-holder",sorterBy:".tg-sorter li, select.tg-sorter",sortASC:".tg-sorter-order",arrLeft:".tg-left-arrow",arrRight:".tg-right-arrow",bullets:".tg-slider-bullets",pages:".tg-page-ajax",sortData:{excerpt:"p",title:function(t){return jQuery(t).data("title")},id:function(t){return jQuery(t).data("id")},date:function(t){return jQuery(t).data("date")},author:function(t){return jQuery(t).data("author")},comment:function(t){return jQuery(t).data("comment")},popular_post:function(t){return jQuery(t).data("popular-post")},total_sales:function(t){return jQuery(t).data("total-sales")},regular_price:function(t){return jQuery(t).data("regular-price")},sale_price:function(t){return jQuery(t).data("sale-price")},featured:function(t){return jQuery(t).data("featured")},stock:function(t){return jQuery(t).data("stock")},sku:function(t){return jQuery(t).data("sku")}},defaults:{style:"grid",layout:"vertical",fitrows:!1,fullWidth:null,fullHeight:null,rtl:!0,filterComb:!1,filterLogic:"AND",filterLoad:"",sortByLoad:"",orderLoad:!1,row:1,ratio:1,gutters:[[9999,0],[1200,0],[980,0],[768,0],[480,0],[320,0]],cols:[[9999,4],[1200,3],[980,3],[768,2],[480,1],[320,1]],rows:[[9999,240],[1200,240],[980,220],[768,220],[480,200],[320,200]],animation:[{name:"None"},{visible:""},{hidden:""}],transition:0,itemNav:null,swingSpeed:500,cycleBy:null,cycle:5e3,startAt:0,ajaxMethod:null,ajaxDelay:0,preloader:0,itemDelay:0,gallery:!1}},tg_meta_data=tg_global_var.meta_data,tg_custom_sorter={};if(tg_meta_data)for(var i=0;i<tg_meta_data.length;i++){var tg_cmk=tg_meta_data[i].key,tg_cma=(tg_cmk=tg_cmk.length&&"_"==tg_cmk[0]?tg_cmk.slice(1):tg_cmk).replace(/\_/g,"-");!function(e){tg_custom_sorter[tg_cmk]=function(t){return jQuery(t).data(e)}}(tg_cma)}The_Grid.sortData=jQuery.extend({},The_Grid.sortData,tg_custom_sorter);var tg_debounce_resize=tg_global_var.debounce?"debouncedresize":"resize",tg_is_mobile=tg_global_var.is_mobile;function throttle(e,i){var o=0;return function(){var t=Date.now();if(o+i<t)return o=t,e.apply(this,arguments)}}function debounce(t,e){"use strict";var i;return function(){i&&clearTimeout(i),setTimeout(function(){t(),i=null},e||100)}}!function(ft){"use strict";ft.fn.The_Grid=function(t){return this.each(function(){var o,e,i,n,r,a,s,l,u,d,c,h,p,f,m,g,y=ft(this),v=[],_=!0,w=!0,b=!1,T=!1,x=1,z=null,L=[],t=y.closest(The_Grid.wrapper).attr("id"),C=1<ft('[id="'+t+'"]').length?y.closest(The_Grid.wrapper):ft("#"+t),I=C.closest(The_Grid.preview),S=C.find(The_Grid.slider),G=C.find(The_Grid.loader),P=C.find(The_Grid.ajax),j=C.find(The_Grid.ajaxMsg),E=C.find(The_Grid.sizer),k=C.find(The_Grid.gutter),M=C.find(The_Grid.item),R=C.find(The_Grid.filterH),D=C.find(The_Grid.filter),O=C.find(The_Grid.search),W=C.find(The_Grid.clear),q=C.find(The_Grid.sorter),A=C.find(The_Grid.sorterBy),H=C.find(The_Grid.sortASC),B=C.find(The_Grid.arrLeft),F=C.find(The_Grid.arrRight),N=C.find(The_Grid.bullets),Y=C.find(The_Grid.pages),Q=y.data(),V={style:Q.style&&Q.style,layout:Q.layout&&Q.layout,fitrows:Q.fitrows&&Q.fitrows,fullWidth:Q.fullwidth&&Q.fullwidth,fullHeight:Q.fullheight&&Q.fullheight,rtl:Q.rtl&&Q.rtl,filterComb:Q.filtercomb&&Q.filtercomb,filterLogic:Q.filterlogic&&Q.filterlogic,filterLoad:Q.filterload&&Q.filterload,sortByLoad:Q.sortbyload&&Q.sortbyload,orderLoad:Q.orderload&&Q.orderload,row:Q.row&&Q.row,ratio:Q.ratio&&Q.ratio,gutters:Q.gutters&&Q.gutters,cols:Q.cols&&Q.cols,rows:Q.rows&&Q.rows,animation:Q.animation&&Q.animation,transition:Q.transition&&Q.transition,itemNav:Q.slider&&Q.slider.itemNav,swingSpeed:Q.slider&&Q.slider.swingSpeed,cycleBy:Q.slider&&Q.slider.cycleBy,cycle:Q.slider&&Q.slider.cycle,startAt:Q.slider&&Q.slider.startAt,ajaxMethod:Q.ajaxmethod&&Q.ajaxmethod,ajaxDelay:Q.ajaxdelay&&Q.ajaxdelay,preloader:Q.preloader&&Q.preloader,itemDelay:Q.itemdelay&&Q.itemdelay,gallery:Q.gallery&&Q.gallery},X=ft.extend({},The_Grid.defaults,V);X.cols.sort(function(t,e){return e[0]-t[0]}),X.gutters.sort(function(t,e){return e[0]-t[0]}),X.rows.sort(function(t,e){return e[0]-t[0]}),X.rtl=!X.rtl,X.ajaxDelay=0<Y.length?X.itemDelay:X.ajaxDelay;for(var U=ft.map(Q,function(t,e){return e}),$=0;$<U.length;$++)y.removeAttr("data-"+U[$]);function Z(t){var e=M.not(".tg-item-hidden").length;t.length===e&&s.reload()}function J(t){for(var e=0;e<ft(t).length;e++)for(var i,o,n=ft(t).eq(e),r=n.get(0).attributes,a=0;a<r.length;a++)i=r[a].name,o=r[a].value,0===i.indexOf("data-")&&"data-row"!==i&&"data-col"!==i&&(n.removeAttr(i),n.data(i.replace("data-",""),o),a--)}function K(t){if(!b)return!1;var e;M.removeClass("tg-item-index"),O.val(""),X.filterComb?(e=[],"*"===t.data("filter")?t.nextAll("[data-filter]").removeClass("tg-filter-active"):t.prevAll('[data-filter="*"]').removeClass("tg-filter-active"),"*"===t.data("filter")?t.closest("select").find("option").prop("selected",!1):t.closest("select").find('[data-filter="*"]').prop("selected",!0),t.toggleClass("tg-filter-active"),C.find(".tg-filter-active").each(function(){"*"!=ft(this).data("filter")&&e.push(ft(this).data("filter"))}),e="AND"===X.filterLogic?function(t){var e="";for(var i in t)t.hasOwnProperty(i)&&(e+=t[i]);return e}(e):e.join(", ")):(e=t.data("filter"),D.removeClass("tg-filter-active"),t.addClass("tg-filter-active")),!e&&C.find('[data-filter="*"]').addClass("tg-filter-active"),R.each(function(t,e){var i=ft(this).find(The_Grid.filter+".tg-filter-active").length;0===i&&ft(this).find('[data-filter="*"]').addClass("tg-filter-active")}),y.TG_Layout({filter:e}),ft.TG_Pause_Players()}function tt(t){if(!b)return!1;e="none"===t.data("value")?"":t.data("value"),i=t.text(),_=H.data("asc"),M.removeClass("tg-item-index"),q.find(".tg-dropdown-value").text(i),y.TG_Layout({sortAscending:_,sortBy:e})}it(),lt(),ut(),ot(),at(),"masonry"===X.style||"justified"===X.style||X.preloader||"horizontal"===X.layout?M.the_grid_images_loaded({complete:function(){var t,e,i;dt(),ct(),ht(),X.preloader&&(e=0,i=y.data("TG_Layout"),0===Y.length?G.remove():G.hide(),C.removeClass("tg-grid-loading"),void(0<(o=i.filteredItems).length?t=window.tgInterval(function(){0<y.closest("body").length&&(ft(o[e].element).removeClass("tg-item-reveal"),X.itemDelay&&y.TG_Layout("reveal",[o[e]]),e!==o.length-1&&X.itemDelay||(b=!0,M.removeClass("tg-item-reveal"),C.addClass("tg-grid-loaded"),!X.itemDelay&&y.TG_Layout("reveal",o),t.clear()),e++)},X.itemDelay):(b=!0,M.removeClass("tg-item-reveal"),C.addClass("tg-grid-loaded")))),"horizontal"===X.layout&&y.TG_Layout("on","arrangeComplete",function(t){Z(t)})}}):(ct(),ht(),"horizontal"===X.layout&&y.TG_Layout("on","arrangeComplete",function(t){Z(t)})),b=!X.preloader&&!0,b&&C.addClass("tg-grid-loaded"),D.on("click",function(t){var e=ft(this);e.is("select")?D.one("change",function(){K(e.find("option:selected"))}):K(e)}),tg_is_mobile?A.on("change",function(){tt(ft(this).find("option:selected"))}):A.on("click",function(){tt(ft(this))}),H.on("click",function(){if(!b)return!1;var t=ft(this);_=!0!==t.data("asc"),t.data("asc",_).attr("data-asc",_),M.removeClass("tg-item-index"),y.TG_Layout({sortAscending:_})});var et=O.keyup(debounce(function(){if(!b)return!1;var i=new RegExp(et.val(),"gi");M.removeClass("tg-item-index"),D.removeClass("tg-filter-active"),y.TG_Layout({filter:function(){var t=ft(this),e=!i||t.text().match(i);return ft('.tg-filter[data-filter="*"]').addClass("tg-filter-active"),e&&!0}}),ft.TG_Pause_Players()},200));function it(){if(X.fullWidth&&0===I.length){C.css("left",0);var t=parseInt(C.css("margin-left")),e=parseInt(C.css("margin-right")),i=C.offset().left-t;C.width(ft(window).width()-(t+e)),C.css("left",-i)}}function ot(){var t;X.gallery&&(rt(),!The_Grid.galleryInt&&0<ft(The_Grid.gallery).length&&(The_Grid.galleryInt=setInterval(function(){n=Math.floor(Math.random()*v.length),r=r===n&&0<v.length?nt(v,n+1):n,t=ft(The_Grid.gallery).eq(r),a=0<v.length?nt(v[r],t.find(".show").index()-1+2):0,t.find(The_Grid.itemImg).removeClass("show"),t.find(The_Grid.itemImg).eq(a).addClass("show")},3500)))}function nt(t,e){return(t.length+e%t.length)%t.length}function rt(){v=[];for(var t=ft(The_Grid.gallery),e=0;e<t.length;e++){var i=ft(t[e]).find(The_Grid.itemImg);v[e]=[];for(var o=0;o<i.length;o++)v[e][o]=ft(i[o])}}function at(){for(var t=0;t<D.length;t++){var e=D.eq(t).data("filter"),i=0<Y.length?".tg-item-hidden":null,o="*"!==e?y.find(e).not(i).length:M.not(i).length;D.eq(t).find(The_Grid.tooltip).html(o),D.eq(t).find("span:first-child").data("count")&&D.eq(t).find("span:first-child").data("tooltip",o),0===o?D.eq(t).removeClass("tg-show-filter"):D.eq(t).addClass("tg-show-filter")}}function st(){if(0<P.length)if((w=P.data("item-tt")?P.data("item-tt")-M.length:99999)<=0)P.addClass("tg-no-more"),P.find("span").html(P.data("no-more")),setTimeout(function(){P.fadeOut(500)},3e3);else{var t=P.data("button");P.data("remain")?P.find("span").html(t+" ("+w+")"):P.find("span").html(t)}}function lt(){for(var t="justified"!==X.style?X.cols:X.rows,e=function(){{if(0===I.length){var t=window,e="inner";return"innerWidth"in window||(e="client",t=document.documentElement||document.body),{width:t[e+"Width"]}}return{width:I.width()}}}().width,i=0,o=t.length;i<o&&t[i][0]>=e;i++)h=t[i][1],l=X.gutters[i][1];if(k.width(l),"justified"!==X.style){var n=C.width();if(p=n/h-l,"vertical"===X.layout&&(y.width(""),p=(p=(n-(m=(h-1)*l))/h)%1!=0?Math.ceil(p):p,g=h*p+m,y.css("left",-(g-y.width())/2+"px"),y.width(g)),X.fullHeight&&"horizontal"===X.layout){var r=ft("#wpadminbar").height();f=0===I.length?(ft(window).height()-r-l*(X.row-1))/X.row:I.height()/X.row}else f=Math.round(p/X.ratio)}else f=h,E.height(f);"null"===X.itemNav&&S.css("padding","0 "+l/2+"px")}function ut(){if("justified"!==X.style){E.width(p);for(var t=0;t<M.length;t++){var e=M.eq(t).data("col"),i=M.eq(t).data("row");i="horizontal"===X.layout&&i>X.row?X.row:i,1===h?(u=p,d=f):h<e?(c=Math.round(h/(e/i)),u=h*p+(h-1)*l,d=1===(c=c<=1?1:c)?f:c*f+(c-1)*l):(u=e*p+(e-1)*l,d=i*f+(i-1)*l),M.eq(t).width(u),"grid"===X.style?M.eq(t).height(d):null}}}function dt(){var t;"horizontal"===X.layout&&("masonry"===X.style?(C.removeClass("tg-grid-loading"),t=Math.max.apply(null,M.map(function(){return ft(this).height()}).get())):t=f*X.row+l*(X.row-1),y.add(S).height(t))}function ct(){var t,e,i=!1;"horizontal"===X.layout?(i=!0,t=e="grid"===X.style?"packery":"justified"===X.style?"justified":"horizontal"):t=e="grid"===X.style?"packery":X.style;var o={};o[e]={},o.hiddenStyle={},o.visibleStyle={},o.layoutMode=t,o.filter=X.filterLoad,"none"!==X.sortByLoad&&(o.sortBy=X.sortByLoad),o.sortAscending=X.orderLoad,o.isOriginLeft=X.rtl,o.itemSelector=The_Grid.item,o[e].gutter=k[0],o[e].rowHeight=E[0],o[e].columnWidth=E[0],o[e].isHorizontal=i,o[e].isFitRows=X.fitrows,o[e].image=The_Grid.itemImg,o[e].row=X.row,o[e].previewMode=I,o.hiddenStyle.opacity=0,o.visibleStyle.opacity=1,o.hiddenStyle.transform=X.animation.hidden,o.visibleStyle.transform=X.animation.visible,o.transitionDuration=X.transition,o.getSortData=The_Grid.sortData,y.TG_Layout(o),J(M)}function ht(){if("horizontal"===X.layout){var e=y.data("TG_Layout"),i=e.filteredItems,t=X.startAt=X.startAt-1>i.length?i.length:X.startAt;"forceCentered"===X.itemNav&&0===N.length&&(N=ft(ft('<div class="tg-slider-bullets"></div>')).appendTo(C).hide()),s=new TG_Slider(S,{itemSelector:".tg-item:not(.tg-item-hidden)",cycleBy:X.cycleBy,cycleInterval:X.cycle,pauseOnHover:1,itemNav:X.itemNav,startAt:X.startAt-1,smart:1,horizontal:1,easing:"easeOutExpo",speed:1e3,swingSpeed:X.swingSpeed,releaseSwing:1,mouseDragging:1,touchDragging:1,elasticBounds:1,moveBy:u,syncSpeed:.8,keyboardNavBy:"pages",activeClass:"tg-active-item",disabledClass:"tg-disabled",draggedClass:"tg-slider-dragged",pageBuilder:function(){return"<li><span></span></li>"},pagesBar:N,prevPage:B,nextPage:F,activatePageOn:"click"}).init(),S.data("slider",s).trigger("tg-slider-init"),"forceCentered"===X.itemNav&&(ft(i[t-1].element).addClass("tg-active-item"),s.on("load activePage",function(t){t=this.rel.activePage,e=y.data("TG_Layout"),i=e.filteredItems,M.removeClass("tg-active-item"),i[t]&&ft(i[t].element).addClass("tg-active-item")}))}}function pt(a){if(z&&(3==z.readyState||2==z.readyState||1==z.readyState))return!1;var t={action:"the_grid_load_more",grid_nonce:tg_global_var.nonce,grid_name:a.data("name"),grid_page:x,grid_data:function(){if(0<I.length)return new TG_metaData(ft("#the_grid_metabox .tomb-row"))}(),grid_ajax:a.data("ajax"),main_query:tg_global_var.main_query};z=ft.ajax({url:tg_global_var.url,type:"post",datatype:"json",data:t,beforeSend:function(){T=!0,x+=1,P.data("loading")&&!P.hasClass("tg-no-more")&&P.find("span").html(P.data("loading")),0<ft(j).length&&0===P.length&&ft(j).addClass("tg-loading")},success:function(t){var e=t.success,i=t.message,o=t.content,n=t.ajax_data;try{n=ft.parseJSON(n)}catch(t){!1}if(a.data("ajax",n),!e)return P.add(ft(j)).add(Y).removeClass("tg-loading"),G.find("> div").html(i),P.find("span").html(i),ft(j).children("div").html(i),x-=1,!1;if(!o)return P.data("item-tt",-1),st(),ft(j).children("div").html(ft(j).children("div").data("no-more")),setTimeout(function(){ft(j).fadeOut(400)},1e3),x-=1,!1;var r=ft(o);0===Y.length&&r.addClass("tg-item-index"),0<r.find(The_Grid.grid).length&&(r=r.find(The_Grid.item).removeClass("tg-item-reveal")),a.append(r),M=a.find(The_Grid.item),r.hide(),ut(),ft.TG_media_init(),at(),rt(),ot(),0<I.length&&TG_excludeItem(),r=ft(ft.grep(r,function(t){return void 0!==t.id})),L.push(r),L.length<2&&function i(o){var n=o.length-1;o.the_grid_images_loaded({complete:function(){var t,e=0;G.hide(),Q&&ft(j).removeClass("tg-loading"),"horizontal"===X.layout&&y.css("min-height",""),"masonry"===X.style&&"horizontal"===X.layout&&dt(),t=window.tgInterval(function(){if(0<y.closest("body").length){if(y.TG_Layout("reLayout"),X.ajaxDelay&&y.TG_Layout("appended",o.eq(e)),"horizontal"===X.layout&&s.reload(),n===e||!X.ajaxDelay)return at(),st(),!X.ajaxDelay&&y.TG_Layout("appended",o),"horizontal"===X.layout&&s.reload(),Y.removeClass("tg-loading"),T=!1,t.clear(),"undefined"!=typeof FOOBOX&&ft.isFunction(FOOBOX.init)&&FOOBOX.init(),ft().fancybox&&ft(".tg-item a.fancybox").fancybox(),ft().prettyPhoto&&ft('.tg-item  a[rel^="prettyPhoto"]').prettyPhoto(),J(M),0<L.length&&(L.splice(0,1),L[0]&&i(L[0])),!1;e++}},X.ajaxDelay)}})}(r)},error:function(t,e,i){x-=1,console.error(t),console.error(e+" :: "+i)}})}W.on("click",function(){O.val("").trigger("keyup")}),ft(window).on(tg_debounce_resize,function(){it(),lt(),ut(),dt(),b&&0<y.closest("body").length&&y.TG_Layout("layout"),"horizontal"===X.layout&&y.TG_Layout("once","layoutComplete",function(t){Z(t)})}),Y.on("click",function(t){t.preventDefault();var e=ft(this);x=e.data("page"),e.is(".tg-page-current")||z&&(!z||4!=z.readyState)||T||!b||(q.find(".tg-dropdown-value").text(""),O.val(""),D.removeClass("tg-filter-active"),ft('.tg-filter[data-filter="*"]').addClass("tg-filter-active"),Y.removeClass("tg-page-current").addClass("tg-loading"),e.addClass("tg-page-current"),ft(".tg-item-hidden").addClass("tg-item-removed"),ft.TG_media_destroy(y),y.css("min-height",250).TG_Layout("remove",M).TG_Layout({filter:"*"}),y.contents().each(function(){8==this.nodeType?ft(this).remove():null}),G.show(),pt(y))}),P.on("click",function(t){w&&(t.preventDefault(),pt(y))}),"on_scroll"==X.ajaxMethod&&ft(window).on("mousewheel resize scroll",function(){w&&C.length&&C[0].getBoundingClientRect().bottom<ft(this).height()&&!0===b&&pt(y)})})};var l=[];ft.fn.the_grid_images_loaded=function(){var t,e=ft(this),i=ft.extend({complete:function(){}},arguments[0]||{}),o=0,n=[];e.find("*").filter(function(){t=ft(this).css("background-image"),(t=(t=!(t=(t=/^url\((['"]?)(.*)\1\)$/.exec(t))?t[2]:null)&&ft(this).is("img")?ft(this).attr("src"):t)&&(t.match(/\.(jpg|jpeg|png|bmp|gif|tif|tiff|jif|jfif)/g)||0<=t.indexOf("external.xx.fbcdn")||0<=t.indexOf("drscdn.500px.org"))?t:null)&&-1==ft.inArray(t,l)&&(n.push(t),l.push(t))});for(var r=[],a=0;a<n.length;a++)r[a]=new Image,r[a].onload=s,r[a].onerror=s,r[a].onabort=s,r[a].src=n[a];if(!n.length)return i.complete.call(e),!1;function s(){if(++o>=n.length)return i.complete.call(e),!1}},ft(document).ready(function(){var r,a="tg-dropdown-holder-animation";function e(t){if(t.data("list-DOM")){var e=t.data("list-DOM").removeClass(a),i=setTimeout(function(){e.remove(),e=null,t.data("list-DOM",e)},400);ft(t.data("list-DOM")).data("list-timer",i)}return!1}function s(t){var e=t.parent().offset(),i=t.parent().height(),o="relative"===ft("body").css("position")?ft(window).scrollTop()+ft("body")[0].getBoundingClientRect().top:null,n=parseInt(t.css("margin-bottom")),r=t.outerWidth(),a=e.left,s=e.top+i-o-n,l=[];return l.top=s,l.left=a,l.width=r,l}tg_is_mobile||(ft(document).on("mouseenter",".tg-dropdown-holder",function(t){t.preventDefault(),t.stopPropagation();var e=ft(this),i=ft(e.data("list-DOM")).data("list-timer");if(i)return clearTimeout(i),e.data("list-DOM").addClass(a),!1;var o=(r=e.find("ul")).clone(!0).addClass("tg-list-appended").attr("style","").appendTo("body");e.add(o).data("list-DOM",o),o.data("filter-DOM",e);var n=s(e);r.hide(),o.css({position:"absolute","z-index":99999,width:n.width,top:n.top,left:n.left}).addClass(a)}).on("mouseleave",".tg-dropdown-holder",function(t){e(ft(this))}),ft(document).on("mouseenter touchstart",".tg-list-appended",function(t){var e=ft(this);if(e.data("list-DOM"))return clearTimeout(e.data("list-timer")),e.data("list-DOM").addClass(a),!1}).on("mouseleave touchend",".tg-list-appended",function(t){e(ft(this))}),ft(document).on("click touchstart",".tg-list-appended li",function(){var e=ft(this).closest("ul"),t=e.data("filter-DOM");t.find('[data-filter="'+ft(this).data("filter")+'"]').trigger("click"),t.find('[data-value="'+ft(this).data("value")+'"]').trigger("click"),e.width(t.outerWidth()),e.css("left",t.offset().left);var i=s(t);i.top!==e.position().top?e.css("top",i.top):(e.find("li").removeClass("tg-filter-active"),t.find(".tg-filter-active").each(function(t){e.find("li").eq(ft(this).index()).addClass("tg-filter-active")}))}))}),ft.fn.TG_ToolTip=function(l){var u="tooltip-DOM",d="tooltip-timer";ft(document).on("mouseenter",ft(this).selector,function(){var t=ft(this);if(!t.data(l.data))return!1;if(t.data(u))return clearTimeout(t.data(d)),t.data(u).addClass(l.hoverClass.split(".").join("")),!1;var e=ft('<div class="'+l.appendClass.split(".").join("")+'"></div>').appendTo("body");t.data(u,e);var i=t.data(l.data),o=t.offset(),n="relative"===ft("body").css("position")?ft(window).scrollTop()+ft("body")[0].getBoundingClientRect().top:null,r=o.top-n,a=o.left,s=t.outerWidth(!0);e.html(i).css({position:"absolute","z-index":l.zindex,width:s,top:r+l.spacing-e.outerHeight(!0),left:a+s/2}).addClass(l.hoverClass.split(".").join(""))}).on("mouseleave",ft(this).selector,function(){var t=ft(this);if(!t.data(l.data)||!t.data(u))return!1;var e=t.data(u).removeClass(l.hoverClass.split(".").join("")),i=setTimeout(function(){e.remove(),e=null,t.data(u,e)},400);t.data(d,i)})},ft(document).ready(function(){ft(".tg-filter-name").TG_ToolTip({data:"tooltip",zindex:99999,place:"top",appendClass:".tg-filter-tooltip",hoverClass:".tg-tooltip-hover",spacing:-2})});var r="tg-media-init",a=".tg-item",n=function(){for(var t=3,e=document.createElement("div"),i=e.getElementsByTagName("i");e.innerHTML="\x3c!--[if gt IE "+ ++t+"]><i></i><![endif]--\x3e",i[0];);return 4<t?t:document.documentMode}();n&&ft("body").addClass("is-ie"),ft.fn.TG_SoundCloud=function(){return this.each(function(){var t=ft(this).closest(a),e=ft(this).attr("src");if(!t.hasClass(r)&&"about:blank"!==e){var i=SC.Widget(ft(this).attr("id"));i.bind(SC.Widget.Events.READY,function(){(!i.getCurrentSound&&tg_is_mobile||!tg_is_mobile)&&i.play(),ft.TG_Media_Ready(t,i,"STD"),i.bind(SC.Widget.Events.PAUSE,function(){ft.TG_Media_Pause(t)}),i.bind(SC.Widget.Events.FINISH,function(){ft.TG_Media_Pause(t)})})}})};var o,s,u,d,c,h,t,e,p,f,m,y,v,_,g,w,b={};ft.fn.TG_Youtube=function(){return this.each(function(){var e=ft(this).closest(a),t=ft(this).attr("src");if(!e.hasClass(r)&&"about:blank"!==t){var i=this.id;b[i]=new YT.Player(i,{events:{onReady:function(t){tg_is_mobile||t.target.playVideo(),ft.TG_Media_Ready(e,t.target,"YT")},onStateChange:function(t){1===t.data&&ft.TG_Media_Play(e),2!==t.data&&0!==t.data||ft.TG_Media_Pause(e)}}})}})},ft.fn.TG_Vimeo=function(){return this.each(function(){var t=ft(this).closest(a),e=ft(this).attr("src"),i=!1;if(n<=9&&(ft(this).remove(),t.find(".tg-media-button").remove()),!t.hasClass(r)&&"about:blank"!==e){ft(this).attr("src",ft(this).attr("src"));var o=new Vimeo.Player(this);tg_is_mobile||o.play(),ft.TG_Media_Ready(t,o,"VM"),o.on("play",function(){i||ft.TG_Media_Play(t),i=!0}),o.on("pause",function(){ft.TG_Media_Pause(t),play=!1}),o.on("ended",function(){ft.TG_Media_Pause(t),play=!1})}})},ft.fn.TG_Wistia=function(){return this.each(function(){var n=ft(this).closest(a),t=ft(this).attr("src");n.hasClass(r)||"about:blank"===t||ft(this).load(function(){var t=ft(this)[0].wistiaApi,e=!1,i=!1,o=!1;ft.TG_Media_Ready(n,t,"STD"),t&&(t.play(),t.bind("seek",function(){i=!0}),t.bind("heightchange",function(){o=!0}),t.bind("play",function(){!1===i&&!1===o&&e&&ft.TG_Media_Play(n),i=o=!1}),t.bind("pause",function(){!1===i&&!1===o&&ft.TG_Media_Pause(n),o=e=!0}),t.bind("finish",function(){ft.TG_Media_Pause(n)}))})})},ft.fn.TG_HTML_Player=function(){return this.each(function(){var t=ft(this).closest(a);if(!t.hasClass(r)){var e=ft(this)[0];e.addEventListener&&(ft.TG_Media_Ready(t,e,"STD"),e.addEventListener("play",function(){ft.TG_Media_Play(t)}),e.addEventListener("pause",function(){ft.TG_Media_Pause(t)}),e.addEventListener("ended",function(){ft.TG_Media_Pause(t)}))}})},ft.TG_Media_Ready=function(t,e,i){t.data("pause-method",i).data("media-player",e).addClass(r)},ft.TG_Media_Play=function(t){t.hasClass("tg-force-play")||ft.TG_Pause_Players(),t.addClass("tg-is-playing"),ft(a).removeClass("tg-force-play")},ft.TG_Media_Pause=function(t){t.removeClass("tg-is-playing tg-force-play")},ft(document).on("webkitfullscreenchange mozfullscreenchange fullscreenchange",function(t){var e=ft(t.target);ft(".tg-item-media").removeClass("tg-item-media-fullscreen"),e&&e.hasClass("tg-item-media")&&e.addClass("tg-item-media-fullscreen")}),ft(document).on("click",".tg-item:not(.tg-media-init) .tg-item-button-play",function(t){t.preventDefault();var e=ft(this).closest(".tg-item"),i=e.find("iframe");i.attr("src",i.data("src")),ft.TG_Pause_Players(),ft.TG_media_init(),e.addClass("tg-force-play")}),ft(document).on("click",".tg-item.tg-media-init .tg-item-button-play",function(t){t.preventDefault();var e=ft(this).closest(".tg-item"),i=e.data("pause-method"),o=e.data("media-player");if(e.is(".tg-force-play, .tg-is-playing"))return ft.TG_Pause_Players(),!1;if(o&&e.hasClass(r))switch(e.find(".tg-item-media").show(),ft.TG_Pause_Players(),ft(a).removeClass("tg-force-play tg-play-error"),e.addClass("tg-force-play"),i){case"STD":(!o.getCurrentSound&&tg_is_mobile||!tg_is_mobile)&&o.play();break;case"YT":o.playVideo();break;case"VM":o.play()}}),ft.TG_Pause_Players=function(){ft(".tg-item.tg-is-playing, .tg-item.tg-force-play").each(function(){var t=ft(this),e=t.data("pause-method"),i=t.data("media-player");if(i&&t.hasClass(r)){switch(e){case"STD":case"VM":i.pause();break;case"YT":i.pauseVideo()}t.closest(a).removeClass("tg-is-playing tg-force-play")}})},ft.TG_media_init=function(){var i,o,t,e,n=[{ID:"youtube",url:"//www.youtube.com/iframe_api"},{ID:"vimeo",url:"//player.vimeo.com/api/player.js"},{ID:"soundcloud",url:"//w.soundcloud.com/player/api.js"},{ID:"wistia",url:"//fast.wistia.com/assets/external/E-v1.js"}];if(ft(".g-ytsubscribe").length&&((i=document.createElement("script")).src="https://apis.google.com/js/platform.js",i.id="tg-youtube-subscribe-api",(e=document.getElementsByTagName("script")[0]).parentNode.insertBefore(i,e)),0===ft(".tg-item-media").length)return!1;o={youtube:function(){"undefined"==typeof YT||0===YT.loaded?window.onYouTubeIframeAPIReady=function(){ft('[data-api="1"].tg-item-youtube').TG_Youtube()}:ft('[data-api="1"].tg-item-youtube').TG_Youtube()},vimeo:function(){ft('[data-api="1"].tg-item-vimeo').TG_Vimeo()},soundcloud:function(){ft('[data-api="1"].tg-item-soundcloud').TG_SoundCloud()},wistia:function(){ft('[data-api="1"].tg-item-wistia').TG_Wistia()}};for(var r=0;r<n.length;r++)t=n[r].ID,0<ft('[data-api="1"].tg-item-'+t).length&&(n[r].url,0===ft("#tg-"+t+"-api").length?((i=document.createElement("script")).src=n[r].url,i.id="tg-"+t+"-api",(e=document.getElementsByTagName("script")[0]).parentNode.insertBefore(i,e),function(t,e){i.onload=function(){o[e]()}}(0,t)):o[t]());ft(document).ready(function(){ft(".tg-item .tg-item-audio-player").attr("width","100%"),ft(".tg-item-video-player,.tg-item-audio-player").TG_HTML_Player(),tg_global_var.mediaelement&&(ft(".tg-item-video-player:not(.tg-mediaelement-init), .tg-item-audio-player:not(.tg-mediaelement-init)").mediaelementplayer({audioVolume:"vertical",videoVolume:"vertical",features:["playpause","current","progress","duration","volume","fullscreen"],startVolume:.8}),ft(".tg-item-video-player, .tg-item-audio-player").addClass("tg-mediaelement-init"))})},ft.TG_media_destroy=function(t){(t||ft(".tg-item")).find(".tg-item-vimeo").each(function(){var t=ft(this),e=t.closest(a).data("media-player");e&&(e.api("pause"),t.attr("src","about:blank"))}),(t=t?t.find(".tg-item video, .tg-item audio"):ft(".tg-item video, .tg-item audio")).each(function(){var t=ft(this),e=t.data("mediaelementplayer");t.closest(a).removeClass("tg-force-play tg-is-playing"),t.length&&(e?((e=t.data("mediaelementplayer")).pause(),e.setSrc("about:blank"),t.children("source").prop("src",""),e.remove()):(t[0].pause(),t[0].src="about:blank",t.children("source").prop("src",""),t.remove().length=0))}),tg_global_var.mediaelement&&(mejs.players=[])},ft.TO_Lightbox=function(){var o,n,r,a,s,l,u,d,c,h=[],p="[data-tolb-src]:not(.tolb-disabled)",f=".tolb-holder",e=".tolb-inner",t=".tolb-content",m=".tolb-img",g=".tolb-title",y=".tolb-counter",v=".tolb-next",_=".tolb-prev",w=".tolb-close",b="tolb-index",T="tolb-open",x="tolb-ready",z="tolb-loading",L="tolb-iframe",C=tg_global_var.lightbox_autoplay;function I(t){switch(ft(f).addClass(T+" "+z),n=t.data(b),u=h[n].type,a=h[n].src,s=h[n].alt,ft(_).data(b,M(n-1)),ft(v).data(b,M(n+1)),u){case"image":l=ft('<img class="tolb-img" src="'+a+'" alt="'+s+'"></img>'),(r=new Image).onload=P,r.onerror=P,r.src=a;break;case"youtube":l=ft('<iframe class="tolb-video" src="'+(a="//www.youtube.com/embed/"+a+"?html5=1&controls=1&autohide=1&rel=0&showinfo=0&autoplay="+C)+'" allowfullscreen></iframe>'),j();break;case"vimeo":l=ft('<iframe class="tolb-video" src="'+(a="//player.vimeo.com/video/"+a+"?title=0&amp;byline=0&amp;portrait=0&amp;autoplay="+C)+'" allowfullscreen></iframe>'),j();break;case"wistia":l=ft('<iframe class="tolb-video" src="'+(a="//fast.wistia.net/embed/iframe/"+a+"?title=0&amp;byline=0&amp;portrait=0&amp;autoPlay="+C)+'" allowfullscreen></iframe>'),j();break;case"video":for(var e="",i=0;i<a.length;i++)e+='<source src="'+a[i][0].source+'" type="video/'+a[i][0].type+'" width="100%" height="100%"></source>';d=h[n].poster,l=ft('<video class="tolb-video" controls'+(d=d?' poster="'+d+'"':"")+(C?" autoplay":"")+' width="100%">'+e+"</video>"),tg_is_mobile?(o&&o.setSrc("about:blank"),S()):(l.one("loadeddata",function(){o&&o.setSrc("about:blank"),tg_global_var.mediaelement?l.mediaelementplayer({features:["playpause","stop","loop","current","progress","duration","volume","fullscreen"],videoVolume:"horizontal",startVolume:.8,success:function(t,e){o=t,l=ft(e).closest(".mejs-container"),S(),o.addEventListener("ended",function(){l.find(".mejs-poster").show()})}}):S()}),l[0].addEventListener("error",function(){k(),ft(f).removeClass(z)}))}}function S(){var t=ft(f).find("iframe").not(l);0<t.length?t.attr("src","about:blank").one("load",function(){G()}):G()}function G(){ft(f).addClass(x),"iframe"!==u?ft(t).html(""):ft(t).find("*").not(l).remove(),"image"!==u?ft(f).addClass(L):ft(f).removeClass(L),"iframe"!==u&&ft(t).append(l),E(),k(),l.show(),ft(f).removeClass(z)}function P(){S()}function j(){u="iframe",ft(t).append(l.hide()),l.one("load",function(){S()})}function E(){ft(m).css("max-height",ft(window).height()-80-ft("#wpadminbar").height())}function k(){ft(g).text(s),ft(y).text(n+1+"/"+c)}function M(t){return(c+t%c)%c}function R(){ft(f).removeClass(T+" "+z+" "+x),setTimeout(function(){0<ft(f).find("iframe").length?ft(f).find("iframe").attr("src","about:blank").one("load",function(){ft(t).html("")}):ft(t).html("")},300)}ft(window).on("resize",function(){E()}),ft(document).on("click",p,function(t){return t.preventDefault(),ft.TG_Pause_Players(),ft(".tolb-video,"+m).remove(),function(){var t=ft(p).filter(":visible");for(c=t.length,i=0;i<c;i++){var e=t.eq(i);h[i]={},h[i].type=e.data("tolb-type"),h[i].src=e.data("tolb-src"),h[i].alt=e.data("tolb-alt"),h[i].poster=e.data("tolb-poster"),e.data(b,i)}1<c?ft(v+","+_).show():ft(v+","+_).hide()}(),I(ft(this)),!1}),ft(document).on("click touchend",v+","+_,function(){return I(ft(this)),!1}),ft(document).on("keydown",throttle(function(t){ft(f).hasClass(T)&&(37==t.keyCode?ft(_).trigger("click"):39==t.keyCode?ft(v).trigger("click"):27==t.keyCode&&R())},300)),ft(document).on("click touchend",e+","+w,function(t){return t.stopPropagation(),(ft(t.target).is(e)||ft(t.target).is(w))&&R(),!1}),ft("body").append(ft('<div class="tolb-holder"><div class="tolb-loader"></div><div class="tolb-inner"><figure><div class="tolb-close tg-icon-close"></div><div class="tolb-content"></div><figcaption><div class="tolb-title"></div><div class="tolb-counter"></div></figcaption></figure></div><div class="tolb-prev"><i class="tg-icon-arrow-prev-thin"></i></div><div class="tolb-next"><i class="tg-icon-arrow-next-thin"></i></div></div>'))},ft(document).on("click","[data-tolb-id]",function(t){t.preventDefault();var e=ft(this).data("tolb-id");e&&ft("#"+e)[0].click()}),t=window.navigator.userAgent.indexOf("Edge/"),e="ontouchstart"in window||navigator.msMaxTouchPoints,p="div:not(.tg-item-gallery-holder) > .tg-item-image, .tg-item-media-poster, .tg-item-audio-poster, .tg-item-gallery-holder",f=0,!e&&!ft("body").hasClass("is-ie")&&t<0&&ft(document).on("mousemove",".tg-panZ",function(t){o=ft(this),d=o.width(),u=o.height(),s=o.closest(".tg-item").offset();var e=Date.now();f+80<e&&(f=e,window.requestAnimationFrame(function(){c=.08*-(t.pageX-s.left-d/2)*.4,h=.08*-(t.pageY-s.top-u/2)*.4,ft(t.target).closest(".tg-item").find(p).css({"-webkit-transform":"matrix(1.08, 0, 0, 1.08,"+c+","+h+")","-moz-transform":"matrix(1.08, 0, 0, 1.08,"+c+","+h+")"})}))}).on("mouseleave",".tg-panZ",function(t){setTimeout(function(){ft(t.target).closest(".tg-item").find(p).css({"-webkit-transform":"","-moz-transform":""})},80)}),m=document,y=0,v=m.getElementsByTagName("html")[0],_=m.getElementsByTagName("body")[0],g="ontouchstart"in window||navigator.msMaxTouchPoints,w=ft("body").hasClass("is-ie")?1:80,g||ft(document).on("mousemove",".tg-atv-anim",function(m){var g=ft(this),t=Date.now();y+w<t&&(y=t,window.requestAnimationFrame(function(){var t,e,i,o,n,r,a,s,l,u,d,c,h,p,f;t=m,e=g,i=_.scrollTop||v.scrollTop,o=_.scrollLeft,n=t.pageX,r=t.pageY,a=e[0].getBoundingClientRect(),s=e[0].clientWidth||e[0].offsetWidth||e[0].scrollWidth,l=e[0].clientHeight||e[0].offsetHeight||e[0].scrollHeight,u=320/s,d=.52-(n-a.left-o)/s,c=.52-(r-a.top-i)/l,h=r-a.top-i-l/2,p=n-a.left-o-s/2,f="perspective("+3*s*(s<l?l/s*2:1)+"px) rotateX("+.1*u*(h-c)+"deg) rotateY("+.07*u*(d-p)+"deg) scale3d(1.03,1.03,1.03)",e.css("transform",f+" translateX("+2*d*(2.5/u)+"px) translateY("+1*c*(2.5/u)+"px)")}))}).on("mouseenter",".tg-atv-anim",function(t){ft(this).addClass("over")}).on("mouseleave",".tg-atv-anim",function(t){var e;(e=ft(this)).removeClass("over"),setTimeout(function(){var t=e[0].clientWidth||e[0].offsetWidth||e[0].scrollWidth;e.css("transform","perspective("+3*t+"px) rotateX(0deg) rotateY(0deg) translateZ(0)")},80)}),ft(document).on("click",".tg-social-share:not(.tg-social-disabled)",function(t){t.preventDefault();var e=ft(this)[0].href,i=Math.round(window.screenX+(window.outerWidth-626)/2),o=Math.round(window.screenY+(window.outerHeight-436)/2);return e&&window.open(e,"tg_share","status=0,resizable=1,location=1,toolbar=0,width=626,height=436,top="+o+",left="+i),!1}),ft.TG_media_init(),ft(document).ready(function(){ft(".tg-grid-preloader-styles, .tg-grid-styles").removeAttr("scoped"),ft(".tg-grid-holder").The_Grid(),ft.TO_Lightbox()});var T,x,z=ft.event;T=z.special.debouncedresize={setup:function(){ft(this).on("resize",T.handler)},teardown:function(){ft(this).off("resize",T.handler)},handler:function(t,e){var i=this,o=arguments,n=function(){t.type="debouncedresize",z.dispatch.apply(i,o)};x&&clearTimeout(x),e?n():x=setTimeout(n,T.threshold)},threshold:100}}(jQuery),function(){for(var r=0,t=["webkit","moz"],e=0;e<t.length&&!window.requestAnimationFrame;++e)window.requestAnimationFrame=window[t[e]+"RequestAnimationFrame"],window.cancelAnimationFrame=window[t[e]+"CancelAnimationFrame"]||window[t[e]+"CancelRequestAnimationFrame"];window.requestAnimationFrame||(window.requestAnimationFrame=function(t,e){var i=(new Date).getTime(),o=Math.max(0,16-(i-r)),n=window.setTimeout(function(){t(i+o)},o);return r=i+o,n}),window.cancelAnimationFrame||(window.cancelAnimationFrame=function(t){clearTimeout(t)})}(),window.tgInterval=function(t,e){var i,o=Date.now,n=window.requestAnimationFrame,r=o(),a=function(){o()-r<e||(r+=e,t()),i||n(a)};return n(a),{clear:function(){i=1}}};
/*! This file is auto-generated */
!function(d,l){"use strict";var e=!1,o=!1;if(l.querySelector)if(d.addEventListener)e=!0;if(d.wp=d.wp||{},!d.wp.receiveEmbedMessage)if(d.wp.receiveEmbedMessage=function(e){var t=e.data;if(t)if(t.secret||t.message||t.value)if(!/[^a-zA-Z0-9]/.test(t.secret)){var r,a,i,s,n,o=l.querySelectorAll('iframe[data-secret="'+t.secret+'"]'),c=l.querySelectorAll('blockquote[data-secret="'+t.secret+'"]');for(r=0;r<c.length;r++)c[r].style.display="none";for(r=0;r<o.length;r++)if(a=o[r],e.source===a.contentWindow){if(a.removeAttribute("style"),"height"===t.message){if(1e3<(i=parseInt(t.value,10)))i=1e3;else if(~~i<200)i=200;a.height=i}if("link"===t.message)if(s=l.createElement("a"),n=l.createElement("a"),s.href=a.getAttribute("src"),n.href=t.value,n.host===s.host)if(l.activeElement===a)d.top.location.href=t.value}}},e)d.addEventListener("message",d.wp.receiveEmbedMessage,!1),l.addEventListener("DOMContentLoaded",t,!1),d.addEventListener("load",t,!1);function t(){if(!o){o=!0;var e,t,r,a,i=-1!==navigator.appVersion.indexOf("MSIE 10"),s=!!navigator.userAgent.match(/Trident.*rv:11\./),n=l.querySelectorAll("iframe.wp-embedded-content");for(t=0;t<n.length;t++){if(!(r=n[t]).getAttribute("data-secret"))a=Math.random().toString(36).substr(2,10),r.src+="#?secret="+a,r.setAttribute("data-secret",a);if(i||s)(e=r.cloneNode(!0)).removeAttribute("security"),r.parentNode.replaceChild(e,r)}}}}(window,document);
function vc_js(){vc_toggleBehaviour(),vc_tabsBehaviour(),vc_accordionBehaviour(),vc_teaserGrid(),vc_carouselBehaviour(),vc_slidersBehaviour(),vc_prettyPhoto(),vc_googleplus(),vc_pinterest(),vc_progress_bar(),vc_plugin_flexslider(),vc_google_fonts(),vc_gridBehaviour(),vc_rowBehaviour(),vc_prepareHoverBox(),vc_googleMapsPointer(),vc_ttaActivation(),jQuery(document).trigger("vc_js"),window.setTimeout(vc_waypoints,500)}document.documentElement.className+=" js_active ",document.documentElement.className+="ontouchstart"in document.documentElement?" vc_mobile ":" vc_desktop ",function(){for(var prefix=["-webkit-","-moz-","-ms-","-o-",""],i=0;i<prefix.length;i++)prefix[i]+"transform"in document.documentElement.style&&(document.documentElement.className+=" vc_transform ")}(),"function"!=typeof window.vc_plugin_flexslider&&(window.vc_plugin_flexslider=function($parent){($parent?$parent.find(".wpb_flexslider"):jQuery(".wpb_flexslider")).each(function(){var this_element=jQuery(this),sliderTimeout=1e3*parseInt(this_element.attr("data-interval")),sliderFx=this_element.attr("data-flex_fx"),slideshow=!0;0===sliderTimeout&&(slideshow=!1),this_element.is(":visible")&&this_element.flexslider({animation:sliderFx,slideshow:slideshow,slideshowSpeed:sliderTimeout,sliderSpeed:800,smoothHeight:!0})})}),"function"!=typeof window.vc_googleplus&&(window.vc_googleplus=function(){0<jQuery(".wpb_googleplus").length&&function(){var po=document.createElement("script");po.type="text/javascript",po.async=!0,po.src="//apis.google.com/js/plusone.js";var s=document.getElementsByTagName("script")[0];s.parentNode.insertBefore(po,s)}()}),"function"!=typeof window.vc_pinterest&&(window.vc_pinterest=function(){0<jQuery(".wpb_pinterest").length&&function(){var po=document.createElement("script");po.type="text/javascript",po.async=!0,po.src="//assets.pinterest.com/js/pinit.js";var s=document.getElementsByTagName("script")[0];s.parentNode.insertBefore(po,s)}()}),"function"!=typeof window.vc_progress_bar&&(window.vc_progress_bar=function(){void 0!==jQuery.fn.waypoint&&jQuery(".vc_progress_bar").waypoint(function(){jQuery(this).find(".vc_single_bar").each(function(index){var bar=jQuery(this).find(".vc_bar"),val=bar.data("percentage-value");setTimeout(function(){bar.css({width:val+"%"})},200*index)})},{offset:"85%"})}),"function"!=typeof window.vc_waypoints&&(window.vc_waypoints=function(){void 0!==jQuery.fn.waypoint&&jQuery(".wpb_animate_when_almost_visible:not(.wpb_start_animation)").waypoint(function(){jQuery(this).addClass("wpb_start_animation animated")},{offset:"85%"})}),"function"!=typeof window.vc_toggleBehaviour&&(window.vc_toggleBehaviour=function($el){function event(e){e&&e.preventDefault&&e.preventDefault();var element=jQuery(this).closest(".vc_toggle"),content=element.find(".vc_toggle_content");element.hasClass("vc_toggle_active")?content.slideUp({duration:300,complete:function(){element.removeClass("vc_toggle_active")}}):content.slideDown({duration:300,complete:function(){element.addClass("vc_toggle_active")}})}$el?$el.hasClass("vc_toggle_title")?$el.unbind("click").click(event):$el.find(".vc_toggle_title").unbind("click").click(event):jQuery(".vc_toggle_title").unbind("click").on("click",event)}),"function"!=typeof window.vc_tabsBehaviour&&(window.vc_tabsBehaviour=function($tab){if(jQuery.ui){var $call=$tab||jQuery(".wpb_tabs, .wpb_tour"),ver=jQuery.ui&&jQuery.ui.version?jQuery.ui.version.split("."):"1.10",old_version=1===parseInt(ver[0])&&parseInt(ver[1])<9;$call.each(function(index){var $tabs,interval=jQuery(this).attr("data-interval"),tabs_array=[];if($tabs=jQuery(this).find(".wpb_tour_tabs_wrapper").tabs({show:function(event,ui){wpb_prepare_tab_content(event,ui)},beforeActivate:function(event,ui){1!==ui.newPanel.index()&&ui.newPanel.find(".vc_pie_chart:not(.vc_ready)")},activate:function(event,ui){wpb_prepare_tab_content(event,ui)}}),interval&&0<interval)try{$tabs.tabs("rotate",1e3*interval)}catch(e){window.console&&window.console.warn&&console.warn(e)}jQuery(this).find(".wpb_tab").each(function(){tabs_array.push(this.id)}),jQuery(this).find(".wpb_tabs_nav li").click(function(e){return e.preventDefault(),old_version?$tabs.tabs("select",jQuery("a",this).attr("href")):$tabs.tabs("option","active",jQuery(this).index()),!1}),jQuery(this).find(".wpb_prev_slide a, .wpb_next_slide a").click(function(e){if(e.preventDefault(),old_version){var index=$tabs.tabs("option","selected");jQuery(this).parent().hasClass("wpb_next_slide")?index++:index--,index<0?index=$tabs.tabs("length")-1:index>=$tabs.tabs("length")&&(index=0),$tabs.tabs("select",index)}else{index=$tabs.tabs("option","active");var length=$tabs.find(".wpb_tab").length;index=jQuery(this).parent().hasClass("wpb_next_slide")?length<=index+1?0:index+1:index-1<0?length-1:index-1,$tabs.tabs("option","active",index)}})})}}),"function"!=typeof window.vc_accordionBehaviour&&(window.vc_accordionBehaviour=function(){jQuery(".wpb_accordion").each(function(index){var $tabs,$this=jQuery(this),active_tab=($this.attr("data-interval"),!isNaN(jQuery(this).data("active-tab"))&&0<parseInt($this.data("active-tab"))&&parseInt($this.data("active-tab"))-1),collapsible=!1===active_tab||"yes"===$this.data("collapsible");$tabs=$this.find(".wpb_accordion_wrapper").accordion({header:"> div > h3",autoHeight:!1,heightStyle:"content",active:active_tab,collapsible:collapsible,navigation:!0,activate:vc_accordionActivate,change:function(event,ui){void 0!==jQuery.fn.isotope&&ui.newContent.find(".isotope").isotope("layout"),vc_carouselBehaviour(ui.newPanel)}}),!0===$this.data("vcDisableKeydown")&&($tabs.data("uiAccordion")._keydown=function(){})})}),"function"!=typeof window.vc_teaserGrid&&(window.vc_teaserGrid=function(){var layout_modes={fitrows:"fitRows",masonry:"masonry"};jQuery(".wpb_grid .teaser_grid_container:not(.wpb_carousel), .wpb_filtered_grid .teaser_grid_container:not(.wpb_carousel)").each(function(){var $container=jQuery(this),$thumbs=$container.find(".wpb_thumbnails"),layout_mode=$thumbs.attr("data-layout-mode");$thumbs.isotope({itemSelector:".isotope-item",layoutMode:void 0===layout_modes[layout_mode]?"fitRows":layout_modes[layout_mode]}),$container.find(".categories_filter a").data("isotope",$thumbs).click(function(e){e.preventDefault();var $thumbs=jQuery(this).data("isotope");jQuery(this).parent().parent().find(".active").removeClass("active"),jQuery(this).parent().addClass("active"),$thumbs.isotope({filter:jQuery(this).attr("data-filter")})}),jQuery(window).bind("load resize",function(){$thumbs.isotope("layout")})})}),"function"!=typeof window.vc_carouselBehaviour&&(window.vc_carouselBehaviour=function($parent){($parent?$parent.find(".wpb_carousel"):jQuery(".wpb_carousel")).each(function(){var $this=jQuery(this);if(!0!==$this.data("carousel_enabled")&&$this.is(":visible")){$this.data("carousel_enabled",!0);getColumnsCount(jQuery(this));jQuery(this).hasClass("columns_count_1")&&900;var carousele_li=jQuery(this).find(".wpb_thumbnails-fluid li");carousele_li.css({"margin-right":carousele_li.css("margin-left"),"margin-left":0});var fluid_ul=jQuery(this).find("ul.wpb_thumbnails-fluid");fluid_ul.width(fluid_ul.width()+300),jQuery(window).resize(function(){screen_size!=(screen_size=getSizeName())&&window.setTimeout("location.reload()",20)})}})}),"function"!=typeof window.vc_slidersBehaviour&&(window.vc_slidersBehaviour=function(){jQuery(".wpb_gallery_slides").each(function(index){var $imagesGrid,this_element=jQuery(this);if(this_element.hasClass("wpb_slider_nivo")){var sliderTimeout=1e3*this_element.attr("data-interval");0===sliderTimeout&&(sliderTimeout=9999999999),this_element.find(".nivoSlider").nivoSlider({effect:"boxRainGrow,boxRain,boxRainReverse,boxRainGrowReverse",slices:15,boxCols:8,boxRows:4,animSpeed:800,pauseTime:sliderTimeout,startSlide:0,directionNav:!0,directionNavHide:!0,controlNav:!0,keyboardNav:!1,pauseOnHover:!0,manualAdvance:!1,prevText:"Prev",nextText:"Next"})}else this_element.hasClass("wpb_image_grid")&&(jQuery.fn.imagesLoaded?$imagesGrid=this_element.find(".wpb_image_grid_ul").imagesLoaded(function(){$imagesGrid.isotope({itemSelector:".isotope-item",layoutMode:"fitRows"})}):this_element.find(".wpb_image_grid_ul").isotope({itemSelector:".isotope-item",layoutMode:"fitRows"}))})}),"function"!=typeof window.vc_prettyPhoto&&(window.vc_prettyPhoto=function(){try{jQuery&&jQuery.fn&&jQuery.fn.prettyPhoto&&jQuery('a.prettyphoto, .gallery-icon a[href*=".jpg"]').prettyPhoto({animationSpeed:"normal",hook:"data-rel",padding:15,opacity:.7,showTitle:!0,allowresize:!0,counter_separator_label:"/",hideflash:!1,deeplinking:!1,modal:!1,callback:function(){-1<location.href.indexOf("#!prettyPhoto")&&(location.hash="")},social_tools:""})}catch(err){window.console&&window.console.warn&&console.warn(err)}}),"function"!=typeof window.vc_google_fonts&&(window.vc_google_fonts=function(){return!1}),window.vcParallaxSkroll=!1,"function"!=typeof window.vc_rowBehaviour&&(window.vc_rowBehaviour=function(){var vcSkrollrOptions,callSkrollInit,$=window.jQuery;function fullWidthRow(){var $elements=$('[data-vc-full-width="true"]');$.each($elements,function(key,item){var $el=$(this);$el.addClass("vc_hidden");var $el_full=$el.next(".vc_row-full-width");if($el_full.length||($el_full=$el.parent().next(".vc_row-full-width")),$el_full.length){var padding,paddingRight,el_margin_left=parseInt($el.css("margin-left"),10),el_margin_right=parseInt($el.css("margin-right"),10),offset=0-$el_full.offset().left-el_margin_left,width=$(window).width();if("rtl"===$el.css("direction")&&(offset-=$el_full.width(),offset+=width,offset+=el_margin_left,offset+=el_margin_right),$el.css({position:"relative",left:offset,"box-sizing":"border-box",width:width}),!$el.data("vcStretchContent"))"rtl"===$el.css("direction")?((padding=$el_full.offset().left)<0&&(padding=0),(paddingRight=offset)<0&&(paddingRight=0)):((padding=-1*offset)<0&&(padding=0),(paddingRight=width-padding-$el_full.width()+el_margin_left+el_margin_right)<0&&(paddingRight=0)),$el.css({"padding-left":padding+"px","padding-right":paddingRight+"px"});$el.attr("data-vc-full-width-init","true"),$el.removeClass("vc_hidden"),$(document).trigger("vc-full-width-row-single",{el:$el,offset:offset,marginLeft:el_margin_left,marginRight:el_margin_right,elFull:$el_full,width:width})}}),$(document).trigger("vc-full-width-row",$elements)}function fullHeightRow(){var windowHeight,offsetTop,fullHeight,$element=$(".vc_row-o-full-height:first");$element.length&&(windowHeight=$(window).height(),(offsetTop=$element.offset().top)<windowHeight&&(fullHeight=100-offsetTop/(windowHeight/100),$element.css("min-height",fullHeight+"vh")));$(document).trigger("vc-full-height-row",$element)}$(window).off("resize.vcRowBehaviour").on("resize.vcRowBehaviour",fullWidthRow).on("resize.vcRowBehaviour",fullHeightRow),fullWidthRow(),fullHeightRow(),(0<window.navigator.userAgent.indexOf("MSIE ")||navigator.userAgent.match(/Trident.*rv\:11\./))&&$(".vc_row-o-full-height").each(function(){"flex"===$(this).css("display")&&$(this).wrap('<div class="vc_ie-flexbox-fixer"></div>')}),vc_initVideoBackgrounds(),callSkrollInit=!1,window.vcParallaxSkroll&&window.vcParallaxSkroll.destroy(),$(".vc_parallax-inner").remove(),$("[data-5p-top-bottom]").removeAttr("data-5p-top-bottom data-30p-top-bottom"),$("[data-vc-parallax]").each(function(){var skrollrSize,skrollrStart,$parallaxElement,parallaxImage,youtubeId;callSkrollInit=!0,"on"===$(this).data("vcParallaxOFade")&&$(this).children().attr("data-5p-top-bottom","opacity:0;").attr("data-30p-top-bottom","opacity:1;"),skrollrSize=100*$(this).data("vcParallax"),($parallaxElement=$("<div />").addClass("vc_parallax-inner").appendTo($(this))).height(skrollrSize+"%"),(youtubeId=vcExtractYoutubeId(parallaxImage=$(this).data("vcParallaxImage")))?insertYoutubeVideoAsBackground($parallaxElement,youtubeId):void 0!==parallaxImage&&$parallaxElement.css("background-image","url("+parallaxImage+")"),skrollrStart=-(skrollrSize-100),$parallaxElement.attr("data-bottom-top","top: "+skrollrStart+"%;").attr("data-top-bottom","top: 0%;")}),callSkrollInit&&window.skrollr&&(vcSkrollrOptions={forceHeight:!1,smoothScrolling:!1,mobileCheck:function(){return!1}},window.vcParallaxSkroll=skrollr.init(vcSkrollrOptions),window.vcParallaxSkroll)}),"function"!=typeof window.vc_gridBehaviour&&(window.vc_gridBehaviour=function(){jQuery.fn.vcGrid&&jQuery("[data-vc-grid]").vcGrid()}),"function"!=typeof window.getColumnsCount&&(window.getColumnsCount=function(el){for(var find=!1,i=1;!1===find;){if(el.hasClass("columns_count_"+i))return find=!0,i;i++}});var screen_size=getSizeName();function getSizeName(){var screen_w=jQuery(window).width();return 1170<screen_w?"desktop_wide":960<screen_w&&screen_w<1169?"desktop":768<screen_w&&screen_w<959?"tablet":300<screen_w&&screen_w<767?"mobile":screen_w<300?"mobile_portrait":""}function loadScript(url,$obj,callback){var script=document.createElement("script");script.type="text/javascript",script.readyState&&(script.onreadystatechange=function(){"loaded"!==script.readyState&&"complete"!==script.readyState||(script.onreadystatechange=null,callback())}),script.src=url,$obj.get(0).appendChild(script)}function vc_ttaActivation(){jQuery("[data-vc-accordion]").on("show.vc.accordion",function(e){var $=window.jQuery,ui={};ui.newPanel=$(this).data("vc.accordion").getTarget(),window.wpb_prepare_tab_content(e,ui)})}function vc_accordionActivate(event,ui){if(ui.newPanel.length&&ui.newHeader.length){var $pie_charts=ui.newPanel.find(".vc_pie_chart:not(.vc_ready)"),$round_charts=ui.newPanel.find(".vc_round-chart"),$line_charts=ui.newPanel.find(".vc_line-chart"),$carousel=ui.newPanel.find('[data-ride="vc_carousel"]');void 0!==jQuery.fn.isotope&&ui.newPanel.find(".isotope, .wpb_image_grid_ul").isotope("layout"),ui.newPanel.find(".vc_masonry_media_grid, .vc_masonry_grid").length&&ui.newPanel.find(".vc_masonry_media_grid, .vc_masonry_grid").each(function(){var grid=jQuery(this).data("vcGrid");grid&&grid.gridBuilder&&grid.gridBuilder.setMasonry&&grid.gridBuilder.setMasonry()}),vc_carouselBehaviour(ui.newPanel),vc_plugin_flexslider(ui.newPanel),$pie_charts.length&&jQuery.fn.vcChat&&$pie_charts.vcChat(),$round_charts.length&&jQuery.fn.vcRoundChart&&$round_charts.vcRoundChart({reload:!1}),$line_charts.length&&jQuery.fn.vcLineChart&&$line_charts.vcLineChart({reload:!1}),$carousel.length&&jQuery.fn.carousel&&$carousel.carousel("resizeAction"),ui.newPanel.parents(".isotope").length&&ui.newPanel.parents(".isotope").each(function(){jQuery(this).isotope("layout")})}}function initVideoBackgrounds(){return window.console&&window.console.warn&&window.console.warn("this function is deprecated use vc_initVideoBackgrounds"),vc_initVideoBackgrounds()}function vc_initVideoBackgrounds(){jQuery("[data-vc-video-bg]").each(function(){var youtubeId,$element=jQuery(this);$element.data("vcVideoBg")?((youtubeId=vcExtractYoutubeId($element.data("vcVideoBg")))&&($element.find(".vc_video-bg").remove(),insertYoutubeVideoAsBackground($element,youtubeId)),jQuery(window).on("grid:items:added",function(event,$grid){$element.has($grid).length&&vcResizeVideoBackground($element)})):$element.find(".vc_video-bg").remove()})}function insertYoutubeVideoAsBackground($element,youtubeId,counter){if("undefined"==typeof YT||void 0===YT.Player)return 100<(counter=void 0===counter?0:counter)?void console.warn("Too many attempts to load YouTube api"):void setTimeout(function(){insertYoutubeVideoAsBackground($element,youtubeId,counter++)},100);var $container=$element.prepend('<div class="vc_video-bg vc_hidden-xs"><div class="inner"></div></div>').find(".inner");new YT.Player($container[0],{width:"100%",height:"100%",videoId:youtubeId,playerVars:{playlist:youtubeId,iv_load_policy:3,enablejsapi:1,disablekb:1,autoplay:1,controls:0,showinfo:0,rel:0,loop:1,wmode:"transparent"},events:{onReady:function(event){event.target.mute().setLoop(!0)}}}),vcResizeVideoBackground($element),jQuery(window).bind("resize",function(){vcResizeVideoBackground($element)})}function vcResizeVideoBackground($element){var iframeW,iframeH,marginLeft,marginTop,containerW=$element.innerWidth(),containerH=$element.innerHeight();containerW/containerH<16/9?(iframeW=containerH*(16/9),iframeH=containerH,marginLeft=-Math.round((iframeW-containerW)/2)+"px",marginTop=-Math.round((iframeH-containerH)/2)+"px"):(iframeH=(iframeW=containerW)*(9/16),marginTop=-Math.round((iframeH-containerH)/2)+"px",marginLeft=-Math.round((iframeW-containerW)/2)+"px"),iframeW+="px",iframeH+="px",$element.find(".vc_video-bg iframe").css({maxWidth:"1000%",marginLeft:marginLeft,marginTop:marginTop,width:iframeW,height:iframeH})}function vcExtractYoutubeId(url){if(void 0===url)return!1;var id=url.match(/(?:https?:\/{2})?(?:w{3}\.)?youtu(?:be)?\.(?:com|be)(?:\/watch\?v=|\/)([^\s&]+)/);return null!==id&&id[1]}if("function"!=typeof window.wpb_prepare_tab_content&&(window.wpb_prepare_tab_content=function(event,ui){var $ui_panel,$google_maps,panel=ui.panel||ui.newPanel,$pie_charts=panel.find(".vc_pie_chart:not(.vc_ready)"),$round_charts=panel.find(".vc_round-chart"),$line_charts=panel.find(".vc_line-chart"),$carousel=panel.find('[data-ride="vc_carousel"]');if(vc_carouselBehaviour(),vc_plugin_flexslider(panel),ui.newPanel.find(".vc_masonry_media_grid, .vc_masonry_grid").length&&ui.newPanel.find(".vc_masonry_media_grid, .vc_masonry_grid").each(function(){var grid=jQuery(this).data("vcGrid");grid&&grid.gridBuilder&&grid.gridBuilder.setMasonry&&grid.gridBuilder.setMasonry()}),panel.find(".vc_masonry_media_grid, .vc_masonry_grid").length&&panel.find(".vc_masonry_media_grid, .vc_masonry_grid").each(function(){var grid=jQuery(this).data("vcGrid");grid&&grid.gridBuilder&&grid.gridBuilder.setMasonry&&grid.gridBuilder.setMasonry()}),$pie_charts.length&&jQuery.fn.vcChat&&$pie_charts.vcChat(),$round_charts.length&&jQuery.fn.vcRoundChart&&$round_charts.vcRoundChart({reload:!1}),$line_charts.length&&jQuery.fn.vcLineChart&&$line_charts.vcLineChart({reload:!1}),$carousel.length&&jQuery.fn.carousel&&$carousel.carousel("resizeAction"),$ui_panel=panel.find(".isotope, .wpb_image_grid_ul"),$google_maps=panel.find(".wpb_gmaps_widget"),0<$ui_panel.length&&$ui_panel.isotope("layout"),$google_maps.length&&!$google_maps.is(".map_ready")){var $frame=$google_maps.find("iframe");$frame.attr("src",$frame.attr("src")),$google_maps.addClass("map_ready")}panel.parents(".isotope").length&&panel.parents(".isotope").each(function(){jQuery(this).isotope("layout")})}),"function"!=typeof window.vc_googleMapsPointer)function vc_googleMapsPointer(){var $=window.jQuery,$wpbGmapsWidget=$(".wpb_gmaps_widget");$wpbGmapsWidget.click(function(){$("iframe",this).css("pointer-events","auto")}),$wpbGmapsWidget.mouseleave(function(){$("iframe",this).css("pointer-events","none")}),$(".wpb_gmaps_widget iframe").css("pointer-events","none")}function vc_setHoverBoxPerspective(hoverBox){hoverBox.each(function(){var $this=jQuery(this),perspective=4*$this.width()+"px";$this.css("perspective",perspective)})}function vc_setHoverBoxHeight(hoverBox){hoverBox.each(function(){var $this=jQuery(this),hoverBoxInner=$this.find(".vc-hoverbox-inner");hoverBoxInner.css("min-height",0);var frontHeight=$this.find(".vc-hoverbox-front-inner").outerHeight(),backHeight=$this.find(".vc-hoverbox-back-inner").outerHeight(),hoverBoxHeight=backHeight<frontHeight?frontHeight:backHeight;hoverBoxHeight<250&&(hoverBoxHeight=250),hoverBoxInner.css("min-height",hoverBoxHeight+"px")})}function vc_prepareHoverBox(){var hoverBox=jQuery(".vc-hoverbox");vc_setHoverBoxHeight(hoverBox),vc_setHoverBoxPerspective(hoverBox)}jQuery(document).ready(vc_prepareHoverBox),jQuery(window).resize(vc_prepareHoverBox),jQuery(document).ready(function($){window.vc_js()});
//============================================================
//
// The MIT License
//
// Copyright (C) 2014 Matthew Wagerfield - @wagerfield
//
// Permission is hereby granted, free of charge, to any
// person obtaining a copy of this software and associated
// documentation files (the "Software"), to deal in the
// Software without restriction, including without limitation
// the rights to use, copy, modify, merge, publish, distribute,
// sublicense, and/or sell copies of the Software, and to
// permit persons to whom the Software is furnished to do
// so, subject to the following conditions:
//
// The above copyright notice and this permission notice
// shall be included in all copies or substantial portions
// of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY
// OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT
// LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS
// FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO
// EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE
// FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN
// AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
// OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE
// OR OTHER DEALINGS IN THE SOFTWARE.
//
//============================================================

/**
 * Parallax.js
 * @author Matthew Wagerfield - @wagerfield
 * @description Creates a parallax effect between an array of layers,
 *              driving the motion from the gyroscope output of a smartdevice.
 *              If no gyroscope is available, the cursor position is used.
 */
;(function(window, document, undefined) {

    // Strict Mode
    'use strict';

    // Constants
    var NAME = 'Parallax';
    var MAGIC_NUMBER = 30;
    var DEFAULTS = {
        relativeInput: false,
        clipRelativeInput: false,
        calibrationThreshold: 100,
        calibrationDelay: 500,
        supportDelay: 500,
        calibrateX: false,
        calibrateY: true,
        invertX: true,
        invertY: true,
        limitX: false,
        limitY: false,
        scalarX: 5.0,
        scalarY: 5.0,
        frictionX: 0.1,
        frictionY: 0.1,
        originX: 0.5,
        originY: 0.5
    };

    function Parallax(element, options) {

        // DOM Context
        this.element = element;

        if(this.element == null) return;

        this.layers = element.getElementsByClassName('layer');

        // Data Extraction
        var data = {
            calibrateX: this.data(this.element, 'calibrate-x'),
            calibrateY: this.data(this.element, 'calibrate-y'),
            invertX: this.data(this.element, 'invert-x'),
            invertY: this.data(this.element, 'invert-y'),
            limitX: this.data(this.element, 'limit-x'),
            limitY: this.data(this.element, 'limit-y'),
            scalarX: this.data(this.element, 'scalar-x'),
            scalarY: this.data(this.element, 'scalar-y'),
            frictionX: this.data(this.element, 'friction-x'),
            frictionY: this.data(this.element, 'friction-y'),
            originX: this.data(this.element, 'origin-x'),
            originY: this.data(this.element, 'origin-y')
        };

        // Delete Null Data Values
        for (var key in data) {
            if (data[key] === null) delete data[key];
        }

        // Compose Settings Object
        this.extend(this, DEFAULTS, options, data);

        // States
        this.calibrationTimer = null;
        this.calibrationFlag = true;
        this.enabled = false;
        this.depths = [];
        this.raf = null;

        // Element Bounds
        this.bounds = null;
        this.ex = 0;
        this.ey = 0;
        this.ew = 0;
        this.eh = 0;

        // Element Center
        this.ecx = 0;
        this.ecy = 0;

        // Element Range
        this.erx = 0;
        this.ery = 0;

        // Calibration
        this.cx = 0;
        this.cy = 0;

        // Input
        this.ix = 0;
        this.iy = 0;

        // Motion
        this.mx = 0;
        this.my = 0;

        // Velocity
        this.vx = 0;
        this.vy = 0;

        // Callbacks
        this.onMouseMove = this.onMouseMove.bind(this);
        this.onDeviceOrientation = this.onDeviceOrientation.bind(this);
        this.onOrientationTimer = this.onOrientationTimer.bind(this);
        this.onCalibrationTimer = this.onCalibrationTimer.bind(this);
        this.onAnimationFrame = this.onAnimationFrame.bind(this);
        this.onWindowResize = this.onWindowResize.bind(this);

        // Initialise
        this.initialise();
    }

    Parallax.prototype.extend = function() {
        if (arguments.length > 1) {
            var master = arguments[0];
            for (var i = 1, l = arguments.length; i < l; i++) {
                var object = arguments[i];
                for (var key in object) {
                    master[key] = object[key];
                }
            }
        }
    };

    Parallax.prototype.data = function(element, name) {
        return this.deserialize(element.getAttribute('data-'+name));
    };

    Parallax.prototype.deserialize = function(value) {
        if (value === "true") {
            return true;
        } else if (value === "false") {
            return false;
        } else if (value === "null") {
            return null;
        } else if (!isNaN(parseFloat(value)) && isFinite(value)) {
            return parseFloat(value);
        } else {
            return value;
        }
    };

    Parallax.prototype.camelCase = function(value) {
        return value.replace(/-+(.)?/g, function(match, character){
            return character ? character.toUpperCase() : '';
        });
    };

    Parallax.prototype.transformSupport = function(value) {
        var element = document.createElement('div');
        var propertySupport = false;
        var propertyValue = null;
        var featureSupport = false;
        var cssProperty = null;
        var jsProperty = null;
        for (var i = 0, l = this.vendors.length; i < l; i++) {
            if (this.vendors[i] !== null) {
                cssProperty = this.vendors[i][0] + 'transform';
                jsProperty = this.vendors[i][1] + 'Transform';
            } else {
                cssProperty = 'transform';
                jsProperty = 'transform';
            }
            if (element.style[jsProperty] !== undefined) {
                propertySupport = true;
                break;
            }
        }
        switch(value) {
            case '2D':
                featureSupport = propertySupport;
                break;
            case '3D':
                if (propertySupport) {
                    var body = document.body || document.createElement('body');
                    var documentElement = document.documentElement;
                    var documentOverflow = documentElement.style.overflow;
                    if (!document.body) {
                        documentElement.style.overflow = 'hidden';
                        documentElement.appendChild(body);
                        body.style.overflow = 'hidden';
                        body.style.background = '';
                    }
                    body.appendChild(element);
                    element.style[jsProperty] = 'translate3d(1px,1px,1px)';
                    propertyValue = window.getComputedStyle(element).getPropertyValue(cssProperty);
                    featureSupport = propertyValue !== undefined && propertyValue.length > 0 && propertyValue !== "none";
                    documentElement.style.overflow = documentOverflow;
                    body.removeChild(element);
                }
                break;
        }
        return featureSupport;
    };

    Parallax.prototype.ww = null;
    Parallax.prototype.wh = null;
    Parallax.prototype.wcx = null;
    Parallax.prototype.wcy = null;
    Parallax.prototype.wrx = null;
    Parallax.prototype.wry = null;
    Parallax.prototype.portrait = null;
    Parallax.prototype.desktop = !navigator.userAgent.match(/(iPhone|iPod|iPad|Android|BlackBerry|BB10|mobi|tablet|opera mini|nexus 7)/i);
    Parallax.prototype.vendors = [null,['-webkit-','webkit'],['-moz-','Moz'],['-o-','O'],['-ms-','ms']];
    Parallax.prototype.motionSupport = !!window.DeviceMotionEvent;
    Parallax.prototype.orientationSupport = !!window.DeviceOrientationEvent;
    Parallax.prototype.orientationStatus = 0;
    Parallax.prototype.transform2DSupport = Parallax.prototype.transformSupport('2D');
    Parallax.prototype.transform3DSupport = Parallax.prototype.transformSupport('3D');
    Parallax.prototype.propertyCache = {};

    Parallax.prototype.initialise = function() {

        // Configure Context Styles
        if (this.transform3DSupport) this.accelerate(this.element);
        var style = window.getComputedStyle(this.element);
        if (style.getPropertyValue('position') === 'static') {
            this.element.style.position = 'relative';
        }

        // Setup
        this.updateLayers();
        this.updateDimensions();
        this.enable();
        this.queueCalibration(this.calibrationDelay);
    };

    Parallax.prototype.updateLayers = function() {

        // Cache Layer Elements
        this.layers = this.element.getElementsByClassName('layer');
        this.depths = [];

        // Configure Layer Styles
        for (var i = 0, l = this.layers.length; i < l; i++) {
            var layer = this.layers[i];
            if (this.transform3DSupport) this.accelerate(layer);
            layer.style.position = i ? 'absolute' : 'relative';
            layer.style.display = 'block';
            layer.style.left = 0;
            layer.style.top = 0;

            // Cache Layer Depth
            this.depths.push(this.data(layer, 'depth') || 0);
        }
    };

    Parallax.prototype.updateDimensions = function() {
        this.ww = window.innerWidth;
        this.wh = window.innerHeight;
        this.wcx = this.ww * this.originX;
        this.wcy = this.wh * this.originY;
        this.wrx = Math.max(this.wcx, this.ww - this.wcx);
        this.wry = Math.max(this.wcy, this.wh - this.wcy);
    };

    Parallax.prototype.updateBounds = function() {
        this.bounds = this.element.getBoundingClientRect();
        this.ex = this.bounds.left;
        this.ey = this.bounds.top;
        this.ew = this.bounds.width;
        this.eh = this.bounds.height;
        this.ecx = this.ew * this.originX;
        this.ecy = this.eh * this.originY;
        this.erx = Math.max(this.ecx, this.ew - this.ecx);
        this.ery = Math.max(this.ecy, this.eh - this.ecy);
    };

    Parallax.prototype.queueCalibration = function(delay) {
        clearTimeout(this.calibrationTimer);
        this.calibrationTimer = setTimeout(this.onCalibrationTimer, delay);
    };

    Parallax.prototype.enable = function() {
        if (!this.enabled) {
            this.enabled = true;
            if (this.orientationSupport) {
                this.portrait = null;
                window.addEventListener('deviceorientation', this.onDeviceOrientation);
                setTimeout(this.onOrientationTimer, this.supportDelay);
            } else {
                this.cx = 0;
                this.cy = 0;
                this.portrait = false;
                window.addEventListener('mousemove', this.onMouseMove);
            }
            window.addEventListener('resize', this.onWindowResize);
            this.raf = requestAnimationFrame(this.onAnimationFrame);
        }
    };

    Parallax.prototype.disable = function() {
        if (this.enabled) {
            this.enabled = false;
            if (this.orientationSupport) {
                window.removeEventListener('deviceorientation', this.onDeviceOrientation);
            } else {
                window.removeEventListener('mousemove', this.onMouseMove);
            }
            window.removeEventListener('resize', this.onWindowResize);
            cancelAnimationFrame(this.raf);
        }
    };

    Parallax.prototype.calibrate = function(x, y) {
        this.calibrateX = x === undefined ? this.calibrateX : x;
        this.calibrateY = y === undefined ? this.calibrateY : y;
    };

    Parallax.prototype.invert = function(x, y) {
        this.invertX = x === undefined ? this.invertX : x;
        this.invertY = y === undefined ? this.invertY : y;
    };

    Parallax.prototype.friction = function(x, y) {
        this.frictionX = x === undefined ? this.frictionX : x;
        this.frictionY = y === undefined ? this.frictionY : y;
    };

    Parallax.prototype.scalar = function(x, y) {
        this.scalarX = x === undefined ? this.scalarX : x;
        this.scalarY = y === undefined ? this.scalarY : y;
    };

    Parallax.prototype.limit = function(x, y) {
        this.limitX = x === undefined ? this.limitX : x;
        this.limitY = y === undefined ? this.limitY : y;
    };

    Parallax.prototype.origin = function(x, y) {
        this.originX = x === undefined ? this.originX : x;
        this.originY = y === undefined ? this.originY : y;
    };

    Parallax.prototype.clamp = function(value, min, max) {
        value = Math.max(value, min);
        value = Math.min(value, max);
        return value;
    };

    Parallax.prototype.css = function(element, property, value) {
        var jsProperty = this.propertyCache[property];
        if (!jsProperty) {
            for (var i = 0, l = this.vendors.length; i < l; i++) {
                if (this.vendors[i] !== null) {
                    jsProperty = this.camelCase(this.vendors[i][1] + '-' + property);
                } else {
                    jsProperty = property;
                }
                if (element.style[jsProperty] !== undefined) {
                    this.propertyCache[property] = jsProperty;
                    break;
                }
            }
        }
        element.style[jsProperty] = value;
    };

    Parallax.prototype.accelerate = function(element) {
        this.css(element, 'transform', 'translate3d(0,0,0)');
        this.css(element, 'transform-style', 'preserve-3d');
        this.css(element, 'backface-visibility', 'hidden');
    };

    Parallax.prototype.setPosition = function(element, x, y) {
        x += 'px';
        y += 'px';
        if (this.transform3DSupport) {
            this.css(element, 'transform', 'translate3d('+x+','+y+',0)');
        } else if (this.transform2DSupport) {
            this.css(element, 'transform', 'translate('+x+','+y+')');
        } else {
            element.style.left = x;
            element.style.top = y;
        }
    };

    Parallax.prototype.onOrientationTimer = function(event) {
        if (this.orientationSupport && this.orientationStatus === 0) {
            this.disable();
            this.orientationSupport = false;
            this.enable();
        }
    };

    Parallax.prototype.onCalibrationTimer = function(event) {
        this.calibrationFlag = true;
    };

    Parallax.prototype.onWindowResize = function(event) {
        this.updateDimensions();
    };

    Parallax.prototype.onAnimationFrame = function() {
        this.updateBounds();
        var dx = this.ix - this.cx;
        var dy = this.iy - this.cy;
        if ((Math.abs(dx) > this.calibrationThreshold) || (Math.abs(dy) > this.calibrationThreshold)) {
            this.queueCalibration(0);
        }
        if (this.portrait) {
            this.mx = this.calibrateX ? dy : this.iy;
            this.my = this.calibrateY ? dx : this.ix;
        } else {
            this.mx = this.calibrateX ? dx : this.ix;
            this.my = this.calibrateY ? dy : this.iy;
        }
        this.mx *= this.ew * (this.scalarX / 100);
        this.my *= this.eh * (this.scalarY / 100);
        if (!isNaN(parseFloat(this.limitX))) {
            this.mx = this.clamp(this.mx, -this.limitX, this.limitX);
        }
        if (!isNaN(parseFloat(this.limitY))) {
            this.my = this.clamp(this.my, -this.limitY, this.limitY);
        }
        this.vx += (this.mx - this.vx) * this.frictionX;
        this.vy += (this.my - this.vy) * this.frictionY;
        for (var i = 0, l = this.layers.length; i < l; i++) {
            var layer = this.layers[i];
            var depth = this.depths[i];
            var xOffset = this.vx * depth * (this.invertX ? -1 : 1);
            var yOffset = this.vy * depth * (this.invertY ? -1 : 1);
            this.setPosition(layer, xOffset, yOffset);
        }
        this.raf = requestAnimationFrame(this.onAnimationFrame);
    };

    Parallax.prototype.onDeviceOrientation = function(event) {

        // Validate environment and event properties.
        if (!this.desktop && event.beta !== null && event.gamma !== null) {

            // Set orientation status.
            this.orientationStatus = 1;

            // Extract Rotation
            var x = (event.beta  || 0) / MAGIC_NUMBER; //  -90 :: 90
            var y = (event.gamma || 0) / MAGIC_NUMBER; // -180 :: 180

            // Detect Orientation Change
            var portrait = this.wh > this.ww;
            if (this.portrait !== portrait) {
                this.portrait = portrait;
                this.calibrationFlag = true;
            }

            // Set Calibration
            if (this.calibrationFlag) {
                this.calibrationFlag = false;
                this.cx = x;
                this.cy = y;
            }

            // Set Input
            this.ix = x;
            this.iy = y;
        }
    };

    Parallax.prototype.onMouseMove = function(event) {

        // Cache mouse coordinates.
        var clientX = event.clientX;
        var clientY = event.clientY;

        // Calculate Mouse Input
        if (!this.orientationSupport && this.relativeInput) {

            // Clip mouse coordinates inside element bounds.
            if (this.clipRelativeInput) {
                clientX = Math.max(clientX, this.ex);
                clientX = Math.min(clientX, this.ex + this.ew);
                clientY = Math.max(clientY, this.ey);
                clientY = Math.min(clientY, this.ey + this.eh);
            }

            // Calculate input relative to the element.
            this.ix = (clientX - this.ex - this.ecx) / this.erx;
            this.iy = (clientY - this.ey - this.ecy) / this.ery;

        } else {

            // Calculate input relative to the window.
            this.ix = (clientX - this.wcx) / this.wrx;
            this.iy = (clientY - this.wcy) / this.wry;
        }
    };

    // Expose Parallax
    window[NAME] = Parallax;

})(window, document);

/**
 * Request Animation Frame Polyfill.
 * @author Tino Zijdel
 * @author Paul Irish
 * @see https://gist.github.com/paulirish/1579671
 */
;(function() {

    var lastTime = 0;
    var vendors = ['ms', 'moz', 'webkit', 'o'];

    for(var x = 0; x < vendors.length && !window.requestAnimationFrame; ++x) {
        window.requestAnimationFrame = window[vendors[x]+'RequestAnimationFrame'];
        window.cancelAnimationFrame = window[vendors[x]+'CancelAnimationFrame'] || window[vendors[x]+'CancelRequestAnimationFrame'];
    }

    if (!window.requestAnimationFrame) {
        window.requestAnimationFrame = function(callback, element) {
            var currTime = new Date().getTime();
            var timeToCall = Math.max(0, 16 - (currTime - lastTime));
            var id = window.setTimeout(function() { callback(currTime + timeToCall); },
                timeToCall);
            lastTime = currTime + timeToCall;
            return id;
        };
    }

    if (!window.cancelAnimationFrame) {
        window.cancelAnimationFrame = function(id) {
            clearTimeout(id);
        };
    }

}());

;(function ($, window, document, undefined) {
  'use strict';

  $('.btn-scroll-down').on('click', function () {
    var scroll = $(this).closest('.top-banner').outerHeight() + $(this).closest('.top-banner').offset().top;
    $('html, body').animate({
      scrollTop: scroll
    }, 600);
    return false;
  });

  if ($('.top-banner').length) {
    if ($(window).width() > 767) {
      $('.top-banner').each(function () {
        var items = $(this).find('.images-wrap');
        items.each(function () {
          var id = $(this).attr('id');
          var scene = document.getElementById(id);
          var parallaxInstance = new Parallax(scene, {
            relativeInput: false,
            clipRelativeInput: false,
            calibrationThreshold: 100,
            calibrationDelay: 500,
            supportDelay: 500,
            calibrateX: true,
            calibrateY: false,
            invertX: true,
            invertY: true,
            limitX: false,
            limitY: false,
            scalarX: 5.0,
            scalarY: 5.0,
            frictionX: 0.1,
            frictionY: 0.1,
            originX: 0.5,
            originY: 0.5,
            hoverOnly: true
          });
        });
      });
    }
  }
})(jQuery, window, document);
;(function ($, window, document, undefined) {
    'use strict';

  $('.services.accordion .toggle').on('click', function(e) {
    e.preventDefault();
    var $this = $(this);
    if ($this.next().hasClass('is-show')) {
      $this.next().removeClass('is-show');
      $this.next().slideUp(350);
        $this.find('i').removeClass('ion-minus').addClass('ion-plus');
    } else {
      $this.parent().parent().find('li .list-drop').removeClass('is-show');
      $this.parent().parent().find('li .list-drop').slideUp(350);
      $this.next().toggleClass('is-show');
      $this.next().slideToggle(350);
        $this.closest('.services.accordion').find('.toggle i').removeClass('ion-minus').addClass('ion-plus');
      $this.find('.ion-plus').addClass('ion-minus').removeClass('ion-plus');
    }
  });
function calcServicesHeight() {
  if ($('.services.tile').length) {
    $('.services.tile .item-first').each(function () {
      var elementFirstH = $(this).height();
      var element = $(this).next('.item-second');
      var textHeight = element.find('.text-wrap').outerHeight();
      if ($(window).width() > 991) {
        element.find('.img-wrap').css('height', elementFirstH - textHeight - 30 + 'px');
      } else {
        element.find('.img-wrap').css('height', 'auto');
      }
    });
  }
}

  $(window).on('load resize', function () {
      calcServicesHeight();
  });

  window.addEventListener("orientationchange", function () {
  calcServicesHeight();
});

})(jQuery, window, document);
(function (factory) {
    if (typeof define === 'function' && define.amd) {
        // AMD
        define(['jquery'], factory);
    } else if (typeof exports === 'object') {
        // CommonJS
        factory(require('jquery'));
    } else {
        // Browser globals
        factory(jQuery);
    }
}(function ($) {
  var CountTo = function (element, options) {
    this.$element = $(element);
    this.options  = $.extend({}, CountTo.DEFAULTS, this.dataOptions(), options);
    this.init();
  };

  CountTo.DEFAULTS = {
    from: 0,               // the number the element should start at
    to: 0,                 // the number the element should end at
    speed: 1000,           // how long it should take to count between the target numbers
    refreshInterval: 100,  // how often the element should be updated
    decimals: 0,           // the number of decimal places to show
    formatter: formatter,  // handler for formatting the value before rendering
    onUpdate: null,        // callback method for every time the element is updated
    onComplete: null       // callback method for when the element finishes updating
  };

  CountTo.prototype.init = function () {
    this.value     = this.options.from;
    this.loops     = Math.ceil(this.options.speed / this.options.refreshInterval);
    this.loopCount = 0;
    this.increment = (this.options.to - this.options.from) / this.loops;
  };

  CountTo.prototype.dataOptions = function () {
    var options = {
      from:            this.$element.data('from'),
      to:              this.$element.data('to'),
      speed:           this.$element.data('speed'),
      refreshInterval: this.$element.data('refresh-interval'),
      decimals:        this.$element.data('decimals')
    };

    var keys = Object.keys(options);

    for (var i in keys) {
      var key = keys[i];

      if (typeof(options[key]) === 'undefined') {
        delete options[key];
      }
    }

    return options;
  };

  CountTo.prototype.update = function () {
    this.value += this.increment;
    this.loopCount++;

    this.render();

    if (typeof(this.options.onUpdate) == 'function') {
      this.options.onUpdate.call(this.$element, this.value);
    }

    if (this.loopCount >= this.loops) {
      clearInterval(this.interval);
      this.value = this.options.to;

      if (typeof(this.options.onComplete) == 'function') {
        this.options.onComplete.call(this.$element, this.value);
      }
    }
  };

  CountTo.prototype.render = function () {
    var formattedValue = this.options.formatter.call(this.$element, this.value, this.options);
    this.$element.text(formattedValue);
  };

  CountTo.prototype.restart = function () {
    this.stop();
    this.init();
    this.start();
  };

  CountTo.prototype.start = function () {
    this.stop();
    this.render();
    this.interval = setInterval(this.update.bind(this), this.options.refreshInterval);
  };

  CountTo.prototype.stop = function () {
    if (this.interval) {
      clearInterval(this.interval);
    }
  };

  CountTo.prototype.toggle = function () {
    if (this.interval) {
      this.stop();
    } else {
      this.start();
    }
  };

  function formatter(value, options) {
    return value.toFixed(options.decimals);
  }

  $.fn.countTo = function (option) {
    return this.each(function () {
      var $this   = $(this);
      var data    = $this.data('countTo');
      var init    = !data || typeof(option) === 'object';
      var options = typeof(option) === 'object' ? option : {};
      var method  = typeof(option) === 'string' ? option : 'start';

      if (init) {
        if (data) data.stop();
        $this.data('countTo', data = new CountTo(this, options));
      }

      data[method].call(data);
    });
  };
}));

// SKILLS
;(function ($, window, document, undefined) {
    'use strict';

    $(window).on('scroll load', function () {

      // linear style
      if ($('.skills').length) {
        $('.skills .skill').not('.active').each(function () {
          if ($(window).scrollTop() >= $(this).offset().top - $(window).height() * 1 && !$(this).closest('.js-split-slider').length) {
            $(this).addClass('active');
            $(this).each(function () {
              var procent = $(this).attr('data-value');
              $(this).find('.active-line').css('width', procent + '%').css('opacity', '1');
              $(this).find('.counter').countTo();
            }); // end each
          } // end if
        }); // end each
      }

      $('.counter').not('.counter--counted').each(function () {
          if ($(window).scrollTop() >= $(this).offset().top - $(window).height() * 1) {
              $(this).addClass('counter--counted');
              $(this).find('.js-counter').each(function () {
                  $(this).countTo();
              });
          }
      });
    });
})(jQuery, window, document);