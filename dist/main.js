!function(){var t={9662:function(t,e,n){var r=n(7854),i=n(614),o=n(6330),a=r.TypeError;t.exports=function(t){if(i(t))return t;throw a(o(t)+" is not a function")}},9670:function(t,e,n){var r=n(7854),i=n(111),o=r.String,a=r.TypeError;t.exports=function(t){if(i(t))return t;throw a(o(t)+" is not an object")}},8533:function(t,e,n){"use strict";var r=n(2092).forEach,i=n(9341)("forEach");t.exports=i?[].forEach:function(t){return r(this,t,arguments.length>1?arguments[1]:void 0)}},2092:function(t,e,n){var r=n(9974),i=n(1702),o=n(8361),a=n(7908),u=n(6244),s=n(5417),c=i([].push),l=function(t){var e=1==t,n=2==t,i=3==t,l=4==t,f=6==t,h=7==t,v=5==t||f;return function(y,p,d,m){for(var g,x,w=a(y),b=o(w),L=r(p,d),P=u(b),E=0,S=m||s,j=e?S(y,P):n||h?S(y,0):void 0;P>E;E++)if((v||E in b)&&(x=L(g=b[E],E,w),t))if(e)j[E]=x;else if(x)switch(t){case 3:return!0;case 5:return g;case 6:return E;case 2:c(j,g)}else switch(t){case 4:return!1;case 7:c(j,g)}return f?-1:i||l?l:j}};t.exports={forEach:l(0),map:l(1),filter:l(2),some:l(3),every:l(4),find:l(5),findIndex:l(6),filterReject:l(7)}},9341:function(t,e,n){"use strict";var r=n(7293);t.exports=function(t,e){var n=[][t];return!!n&&r((function(){n.call(null,e||function(){throw 1},1)}))}},7475:function(t,e,n){var r=n(7854),i=n(3157),o=n(4411),a=n(111),u=n(5112)("species"),s=r.Array;t.exports=function(t){var e;return i(t)&&(e=t.constructor,(o(e)&&(e===s||i(e.prototype))||a(e)&&null===(e=e[u]))&&(e=void 0)),void 0===e?s:e}},5417:function(t,e,n){var r=n(7475);t.exports=function(t,e){return new(r(t))(0===e?0:e)}},4326:function(t,e,n){var r=n(1702),i=r({}.toString),o=r("".slice);t.exports=function(t){return o(i(t),8,-1)}},648:function(t,e,n){var r=n(7854),i=n(1694),o=n(614),a=n(4326),u=n(5112)("toStringTag"),s=r.Object,c="Arguments"==a(function(){return arguments}());t.exports=i?a:function(t){var e,n,r;return void 0===t?"Undefined":null===t?"Null":"string"==typeof(n=function(t,e){try{return t[e]}catch(t){}}(e=s(t),u))?n:c?a(e):"Object"==(r=a(e))&&o(e.callee)?"Arguments":r}},8880:function(t,e,n){var r=n(9781),i=n(3070),o=n(9114);t.exports=r?function(t,e,n){return i.f(t,e,o(1,n))}:function(t,e,n){return t[e]=n,t}},9114:function(t){t.exports=function(t,e){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:e}}},9781:function(t,e,n){var r=n(7293);t.exports=!r((function(){return 7!=Object.defineProperty({},1,{get:function(){return 7}})[1]}))},317:function(t,e,n){var r=n(7854),i=n(111),o=r.document,a=i(o)&&i(o.createElement);t.exports=function(t){return a?o.createElement(t):{}}},8324:function(t){t.exports={CSSRuleList:0,CSSStyleDeclaration:0,CSSValueList:0,ClientRectList:0,DOMRectList:0,DOMStringList:0,DOMTokenList:1,DataTransferItemList:0,FileList:0,HTMLAllCollection:0,HTMLCollection:0,HTMLFormElement:0,HTMLSelectElement:0,MediaList:0,MimeTypeArray:0,NamedNodeMap:0,NodeList:1,PaintRequestList:0,Plugin:0,PluginArray:0,SVGLengthList:0,SVGNumberList:0,SVGPathSegList:0,SVGPointList:0,SVGStringList:0,SVGTransformList:0,SourceBufferList:0,StyleSheetList:0,TextTrackCueList:0,TextTrackList:0,TouchList:0}},8509:function(t,e,n){var r=n(317)("span").classList,i=r&&r.constructor&&r.constructor.prototype;t.exports=i===Object.prototype?void 0:i},8113:function(t,e,n){var r=n(5005);t.exports=r("navigator","userAgent")||""},7392:function(t,e,n){var r,i,o=n(7854),a=n(8113),u=o.process,s=o.Deno,c=u&&u.versions||s&&s.version,l=c&&c.v8;l&&(i=(r=l.split("."))[0]>0&&r[0]<4?1:+(r[0]+r[1])),!i&&a&&(!(r=a.match(/Edge\/(\d+)/))||r[1]>=74)&&(r=a.match(/Chrome\/(\d+)/))&&(i=+r[1]),t.exports=i},7293:function(t){t.exports=function(t){try{return!!t()}catch(t){return!0}}},9974:function(t,e,n){var r=n(1702),i=n(9662),o=r(r.bind);t.exports=function(t,e){return i(t),void 0===e?t:o?o(t,e):function(){return t.apply(e,arguments)}}},6916:function(t){var e=Function.prototype.call;t.exports=e.bind?e.bind(e):function(){return e.apply(e,arguments)}},1702:function(t){var e=Function.prototype,n=e.bind,r=e.call,i=n&&n.bind(r);t.exports=n?function(t){return t&&i(r,t)}:function(t){return t&&function(){return r.apply(t,arguments)}}},5005:function(t,e,n){var r=n(7854),i=n(614),o=function(t){return i(t)?t:void 0};t.exports=function(t,e){return arguments.length<2?o(r[t]):r[t]&&r[t][e]}},8173:function(t,e,n){var r=n(9662);t.exports=function(t,e){var n=t[e];return null==n?void 0:r(n)}},7854:function(t,e,n){var r=function(t){return t&&t.Math==Math&&t};t.exports=r("object"==typeof globalThis&&globalThis)||r("object"==typeof window&&window)||r("object"==typeof self&&self)||r("object"==typeof n.g&&n.g)||function(){return this}()||Function("return this")()},2597:function(t,e,n){var r=n(1702),i=n(7908),o=r({}.hasOwnProperty);t.exports=Object.hasOwn||function(t,e){return o(i(t),e)}},4664:function(t,e,n){var r=n(9781),i=n(7293),o=n(317);t.exports=!r&&!i((function(){return 7!=Object.defineProperty(o("div"),"a",{get:function(){return 7}}).a}))},8361:function(t,e,n){var r=n(7854),i=n(1702),o=n(7293),a=n(4326),u=r.Object,s=i("".split);t.exports=o((function(){return!u("z").propertyIsEnumerable(0)}))?function(t){return"String"==a(t)?s(t,""):u(t)}:u},2788:function(t,e,n){var r=n(1702),i=n(614),o=n(5465),a=r(Function.toString);i(o.inspectSource)||(o.inspectSource=function(t){return a(t)}),t.exports=o.inspectSource},3157:function(t,e,n){var r=n(4326);t.exports=Array.isArray||function(t){return"Array"==r(t)}},614:function(t){t.exports=function(t){return"function"==typeof t}},4411:function(t,e,n){var r=n(1702),i=n(7293),o=n(614),a=n(648),u=n(5005),s=n(2788),c=function(){},l=[],f=u("Reflect","construct"),h=/^\s*(?:class|function)\b/,v=r(h.exec),y=!h.exec(c),p=function(t){if(!o(t))return!1;try{return f(c,l,t),!0}catch(t){return!1}};t.exports=!f||i((function(){var t;return p(p.call)||!p(Object)||!p((function(){t=!0}))||t}))?function(t){if(!o(t))return!1;switch(a(t)){case"AsyncFunction":case"GeneratorFunction":case"AsyncGeneratorFunction":return!1}return y||!!v(h,s(t))}:p},111:function(t,e,n){var r=n(614);t.exports=function(t){return"object"==typeof t?null!==t:r(t)}},1913:function(t){t.exports=!1},2190:function(t,e,n){var r=n(7854),i=n(5005),o=n(614),a=n(7976),u=n(3307),s=r.Object;t.exports=u?function(t){return"symbol"==typeof t}:function(t){var e=i("Symbol");return o(e)&&a(e.prototype,s(t))}},6244:function(t,e,n){var r=n(7466);t.exports=function(t){return r(t.length)}},133:function(t,e,n){var r=n(7392),i=n(7293);t.exports=!!Object.getOwnPropertySymbols&&!i((function(){var t=Symbol();return!String(t)||!(Object(t)instanceof Symbol)||!Symbol.sham&&r&&r<41}))},3070:function(t,e,n){var r=n(7854),i=n(9781),o=n(4664),a=n(9670),u=n(4948),s=r.TypeError,c=Object.defineProperty;e.f=i?c:function(t,e,n){if(a(t),e=u(e),a(n),o)try{return c(t,e,n)}catch(t){}if("get"in n||"set"in n)throw s("Accessors not supported");return"value"in n&&(t[e]=n.value),t}},7976:function(t,e,n){var r=n(1702);t.exports=r({}.isPrototypeOf)},2140:function(t,e,n){var r=n(7854),i=n(6916),o=n(614),a=n(111),u=r.TypeError;t.exports=function(t,e){var n,r;if("string"===e&&o(n=t.toString)&&!a(r=i(n,t)))return r;if(o(n=t.valueOf)&&!a(r=i(n,t)))return r;if("string"!==e&&o(n=t.toString)&&!a(r=i(n,t)))return r;throw u("Can't convert object to primitive value")}},4488:function(t,e,n){var r=n(7854).TypeError;t.exports=function(t){if(null==t)throw r("Can't call method on "+t);return t}},3505:function(t,e,n){var r=n(7854),i=Object.defineProperty;t.exports=function(t,e){try{i(r,t,{value:e,configurable:!0,writable:!0})}catch(n){r[t]=e}return e}},5465:function(t,e,n){var r=n(7854),i=n(3505),o="__core-js_shared__",a=r[o]||i(o,{});t.exports=a},2309:function(t,e,n){var r=n(1913),i=n(5465);(t.exports=function(t,e){return i[t]||(i[t]=void 0!==e?e:{})})("versions",[]).push({version:"3.19.0",mode:r?"pure":"global",copyright:"© 2021 Denis Pushkarev (zloirock.ru)"})},9303:function(t){var e=Math.ceil,n=Math.floor;t.exports=function(t){var r=+t;return r!=r||0===r?0:(r>0?n:e)(r)}},7466:function(t,e,n){var r=n(9303),i=Math.min;t.exports=function(t){return t>0?i(r(t),9007199254740991):0}},7908:function(t,e,n){var r=n(7854),i=n(4488),o=r.Object;t.exports=function(t){return o(i(t))}},7593:function(t,e,n){var r=n(7854),i=n(6916),o=n(111),a=n(2190),u=n(8173),s=n(2140),c=n(5112),l=r.TypeError,f=c("toPrimitive");t.exports=function(t,e){if(!o(t)||a(t))return t;var n,r=u(t,f);if(r){if(void 0===e&&(e="default"),n=i(r,t,e),!o(n)||a(n))return n;throw l("Can't convert object to primitive value")}return void 0===e&&(e="number"),s(t,e)}},4948:function(t,e,n){var r=n(7593),i=n(2190);t.exports=function(t){var e=r(t,"string");return i(e)?e:e+""}},1694:function(t,e,n){var r={};r[n(5112)("toStringTag")]="z",t.exports="[object z]"===String(r)},6330:function(t,e,n){var r=n(7854).String;t.exports=function(t){try{return r(t)}catch(t){return"Object"}}},9711:function(t,e,n){var r=n(1702),i=0,o=Math.random(),a=r(1..toString);t.exports=function(t){return"Symbol("+(void 0===t?"":t)+")_"+a(++i+o,36)}},3307:function(t,e,n){var r=n(133);t.exports=r&&!Symbol.sham&&"symbol"==typeof Symbol.iterator},5112:function(t,e,n){var r=n(7854),i=n(2309),o=n(2597),a=n(9711),u=n(133),s=n(3307),c=i("wks"),l=r.Symbol,f=l&&l.for,h=s?l:l&&l.withoutSetter||a;t.exports=function(t){if(!o(c,t)||!u&&"string"!=typeof c[t]){var e="Symbol."+t;u&&o(l,t)?c[t]=l[t]:c[t]=s&&f?f(e):h(e)}return c[t]}},4747:function(t,e,n){var r=n(7854),i=n(8324),o=n(8509),a=n(8533),u=n(8880),s=function(t){if(t&&t.forEach!==a)try{u(t,"forEach",a)}catch(e){t.forEach=a}};for(var c in i)i[c]&&s(r[c]&&r[c].prototype);s(o)}},e={};function n(r){var i=e[r];if(void 0!==i)return i.exports;var o=e[r]={exports:{}};return t[r](o,o.exports,n),o.exports}n.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"==typeof window)return window}}(),function(){"use strict";var t=function(t,e){return e.x<t.x+t.width&&e.x+e.width>t.x&&e.y<t.y+t.height&&e.y+e.height>t.y};function e(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}var r=function(){function n(t){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,n),this.x=t[0],this.y=t[1],this.pos=[this.x,this.y],this.velocity=10,this.acceleration=3,this.jumping=!1,this.maxJumpHeight=50,this.maxImpulse=200;var e=new Image;e.src="../../assets/sprite_spiderman.png",this.image=e,this.width=35,this.height=70,this.renderPlayer=this.renderPlayer.bind(this)}var r,i;return r=n,(i=[{key:"renderPlayer",value:function(t){var e=this;this.image.onload=function(){t.drawImage(e.image,660,0,45,80,e.x,e.y,e.width,e.height)},t.drawImage(this.image,660,0,45,80,this.x,this.y,this.width,this.height)}},{key:"left",value:function(){this.x-=this.velocity}},{key:"right",value:function(){this.x+=this.velocity}},{key:"jump",value:function(){var t=this,e=this.y,n=setInterval((function(){if(t.y<e-t.maxJumpHeight){clearInterval(n);var r=setInterval((function(){if(t.y>=e)return clearInterval(r),void(t.jumping=!1);t.y+=t.velocity}),25)}t.y-=t.velocity}),25)}},{key:"impulse",value:function(t){this.x+=t[0]*this.maxImpulse,this.y+=t[1]*this.maxImpulse}},{key:"inWinZone",value:function(e){return t(this,e)}},{key:"inFailZone",value:function(e){for(var n=0;n<e.length;n++){var r=e[n];if(t(this,r))return!0}return!1}}])&&e(r.prototype,i),n}(),i=(n(4747),function(t,e){return e.y-(t.y+t.height)}),o=function(t,e){var n,r=[];e.forEach((function(e){e.y>t.y+t.height&&r.push(e)}));for(var i=!1,o=0;!1===i;)r.forEach((function(e){(e.containsPoint(t.x,t.y+t.height+o)||e.containsPoint(t.x+t.width,t.y+t.height+o))&&(n=e,i=!0)})),o+=1;return n};function a(t,e,n){!function(t,e,n){!1===n?document.addEventListener("keydown",u(t,e)):document.removeEventListener("keydown",u(t,e))}(t,e,n)}function u(t,e){return function(n){n.stopPropagation(),n.preventDefault();var r=n.keyCode;if(65===r){var a=function(t,e){var n,r=[];e.forEach((function(e){e.x+e.width<t.x&&r.push(e)}));for(var i=!1,o=0;!1===i;)r.forEach((function(e){(e.containsPoint(t.x+o,t.y)||e.containsPoint(t.x+o,t.y+t.height))&&(n=e,i=!0)})),o-=1;return n}(t,e.arrWalls),u=function(t,e){return t.x-(e.x+e.width)}(t,a);if(1===u)return;u>t.velocity?t.left():t.x-=u-1}else if(68===r){var s=function(t,e){var n,r=[];e.forEach((function(e){e.x>t.x+t.width&&r.push(e)}));for(var i=!1,o=0;!1===i;)r.forEach((function(e){(e.containsPoint(t.x+t.width+o,t.y)||e.containsPoint(t.x+t.width+o,t.y+t.height))&&(n=e,i=!0)})),o+=1;return n}(t,e.arrWalls),c=function(t,e){return e.x-(t.x+t.width)}(t,s);if(1===c)return;c>t.velocity?t.right():t.x+=c-1}else if(32===r){var l=o(t,e.arrWalls);if(i(t,l)>2)return void(t.jumping=!0);t.jumping=!0,t.jump()}}}function s(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}var c=function(){function t(e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.allLevels=e,this.currentLevel=e.shift(),this.currentPlayer=new r(this.currentLevel.startingPos),this.done=!1,this.pauseStatus=!1}var e,n;return e=t,(n=[{key:"renderFrame",value:function(t){this.currentPlayer.jumping?(t.clearRect(0,0,t.canvas.width,t.canvas.height),this.currentPlayer.renderPlayer(t),this.currentLevel.renderLevel(t),this.completedLevel(),this.failedLevel()):(t.clearRect(0,0,t.canvas.width,t.canvas.height),this.currentPlayer.renderPlayer(t),this.currentLevel.renderLevel(t),this.completedLevel(),this.failedLevel(),this.gravity())}},{key:"pause",value:function(){this.pauseStatus=!0,a(this.player,this.level,this.pauseStatus)}},{key:"resume",value:function(t){this.pauseStatus=!1,a(this.player,this.level,this.pauseStatus),t.start()}},{key:"winGame",value:function(){this.done&&(document.getElementById("win-container").style.visibility="visible",this.pause())}},{key:"completedLevel",value:function(){this.currentPlayer.inWinZone(this.currentLevel.winZone)&&this.nextLevel()}},{key:"failedLevel",value:function(){this.currentPlayer.inFailZone(this.currentLevel.failZones)&&this.restartLevel()}},{key:"nextLevel",value:function(){this.allLevels.length>=1?(this.currentLevel=this.allLevels.shift(),this.currentPlayer.x=this.currentLevel.startingPos[0],this.currentPlayer.y=this.currentLevel.startingPos[1]):(this.done=!0,this.winGame())}},{key:"restartLevel",value:function(){this.currentPlayer.x=this.currentLevel.startingPos[0],this.currentPlayer.y=this.currentLevel.startingPos[1]}},{key:"gravity",value:function(){var t=o(this.currentPlayer,this.currentLevel.arrWalls),e=i(this.currentPlayer,t);2!==e&&(e>this.currentPlayer.velocity?this.currentPlayer.y+=this.currentPlayer.velocity:this.currentPlayer.y+=e-2)}}])&&s(e.prototype,n),t}(),l=c;var f={vecMagnitude:function(t,e){return Math.sqrt(Math.pow(e[1]-t[1],2)+Math.pow(e[0]-t[0],2))},normalize:function(t,e){var n=[e[0]-t[0],e[1]-t[1]],r=f.vecMagnitude(t,e);return[1/r*n[0],1/r*n[1]]}};function h(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}var v=function(){function t(e,n){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.ctx=e,this.game=n,this.canvas=this.ctx.canvas,this.player=this.game.currentPlayer,this.level=this.game.currentLevel,this.animate=this.animate.bind(this),function(t,e){!function(t,e){var n=document.getElementById("start_pause");n.addEventListener("click",function(t,e,n){return function(r){r.stopPropagation(),r.preventDefault(),"Start"===n.innerText?(t.start(),n.innerHTML="Pause",document.getElementById("canvas-container").style.border="none",document.getElementById("instructions_credits-container").style.visibility="hidden"):"Pause"===n.innerText?(e.pause(),n.innerHTML="Resume",document.getElementById("pause-container").style.visibility="visible"):"Resume"===n.innerText&&(e.resume(t),n.innerHTML="Pause",document.getElementById("pause-container").style.visibility="hidden",document.getElementById("instructions_credits-container").style.visibility="hidden",document.getElementById("canvas-container").style.border="none")}}(t,e,n))}(t,e),function(t){document.getElementById("restart").addEventListener("click",function(t){return function(e){e.stopPropagation(),e.preventDefault(),t.restartLevel()}}(t))}(e),function(t,e){document.getElementById("instructions_credits").addEventListener("click",function(t,e){return function(n){n.stopPropagation(),n.preventDefault(),document.getElementById("start_pause").innerHTML="Resume";var r=document.getElementById("instructions_credits-container");document.getElementById("start_pause"),"visible"===r.style.visibility?(r.style.visibility="hidden",e.resume(t),document.getElementById("start_pause").innerHTML="Pause",document.getElementById("canvas-container").style.border="none"):(r.style.visibility="visible",e.pause(),document.getElementById("pause-container").style.visibility="hidden")}}(t,e))}(t,e)}(this,this.game),a(this.player,this.level,this.game.pauseStatus),function(t,e){!function(t,e){t.addEventListener("click",function(t,e){return function(n){n.preventDefault();var r=t.getBoundingClientRect(),i=[e.x,e.y],o=[n.clientX-r.left,n.clientY-r.top],a=f.normalize(i,o);e.impulse(a)}}(t,e))}(t,e)}(this.ctx.canvas,this.player)}var e,n;return e=t,(n=[{key:"animate",value:function(){!1===this.game.pauseStatus&&(this.game.renderFrame(this.ctx),window.requestAnimationFrame(this.animate))}},{key:"start",value:function(){window.requestAnimationFrame(this.animate)}}])&&h(e.prototype,n),t}();function y(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}var p=function(){function t(e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.startingPos=e.startingPos,this.layout=e.layout,this.arrWalls=this.layout.arrWalls,this.winZone=e.winZone,this.failZones=e.failZones}var e,n;return e=t,n=[{key:"renderLevel",value:function(t){this.arrWalls.forEach((function(e){t.fillStyle="black",t.fillRect(e.x,e.y,e.width,e.height)}))}}],n&&y(e.prototype,n),t}(),d=p,m=function t(e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.arrWalls=e};function g(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}var x=function(){function t(e,n,r,i){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.x=e,this.y=n,this.width=r,this.height=i}var e,n;return e=t,(n=[{key:"containsPoint",value:function(t,e){return this.x<=t&&t<=this.x+this.width&&this.y<=e&&e<=this.y+this.height}}])&&g(e.prototype,n),t}(),w=[new x(0,0,900,2),new x(0,0,2,600),new x(898,0,2,600),new x(0,598,900,2),new x(0,450,180,150),new x(315,450,270,150),new x(720,450,180,150),new x(180,300,135,10),new x(585,300,135,10)],b=[new x(0,0,900,2),new x(0,0,2,600),new x(898,0,2,600),new x(0,598,900,2),new x(0,450,100,150),new x(200,450,100,150),new x(350,450,75,150),new x(180,300,135,10),new x(585,300,135,10)],L=[new d({startingPos:[350,250],layout:new m(w),winZone:{x:800,y:350,width:100,height:100},failZones:[{x:160,y:520,width:150,height:80},{x:570,y:520,width:150,height:80}]}),new d({startingPos:[0,0],layout:new m(b),winZone:{x:800,y:350,width:100,height:100},failZones:[{x:160,y:520,width:150,height:80},{x:570,y:520,width:150,height:80}]})];document.addEventListener("DOMContentLoaded",(function(){var t=document.getElementById("canvas").getContext("2d"),e=new l(L);new v(t,e)}))}()}();
//# sourceMappingURL=main.js.map