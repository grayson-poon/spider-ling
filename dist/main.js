/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _scripts_game_view__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scripts/game_view */ \"./src/scripts/game_view.js\");\n\ndocument.addEventListener(\"DOMContentLoaded\", function () {\n  var main = document.getElementById(\"canvas-container\");\n  var canvas = document.createElement(\"canvas\");\n  canvas.innerHTML = '<canvas id=\"canvas\"></canvas>';\n  main.appendChild(canvas);\n  var ctx = canvas.getContext('2d');\n  canvas.height = 600; // set to Game.HEIGHT so it's more dynamic\n\n  canvas.width = 900; // set to Game.WIDTH\n  // let player = new Player(); create new player instance when each level is rendered\n\n  var gameView = new _scripts_game_view__WEBPACK_IMPORTED_MODULE_0__[\"default\"](ctx);\n  gameView.start();\n}); // document.addEventListener(\"click\", (event) => {\n//   console.log(event);\n// });\n// document.addEventListener(\"keydown\", (event) => {\n//   if (event.keyCode === 65) {\n//     console.log(\"left\");\n//     console.log(event);\n//   }\n// });\n// const canvas = document.createElement(\"canvas\");\n// const ctx = canvas.getContext('2d');\n// let spidey = new Image();\n// spidey.src = \"../../../assets/sprite_spiderman.png\";\n// console.log(spidey);\n// let test2 = new Player(250, 300, spidey, canvas, ctx);\n// test2.renderPlayer(ctx, spidey);\n// console.log(test2);\n// document.addEventListener(\"keydown\", (event) => {\n//   if (event.keyCode === 65) {\n//     test2.movePlayerLeft();\n//   } else if (event.keyCode === 68) {\n//     test2.movePlayerRight();\n//   }\n// });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguanMuanMiLCJtYXBwaW5ncyI6Ijs7QUFBQTtBQUdBQyxRQUFRLENBQUNDLGdCQUFULENBQTBCLGtCQUExQixFQUE4QyxZQUFNO0FBQ2xELE1BQUlDLElBQUksR0FBR0YsUUFBUSxDQUFDRyxjQUFULENBQXdCLGtCQUF4QixDQUFYO0FBQ0EsTUFBTUMsTUFBTSxHQUFHSixRQUFRLENBQUNLLGFBQVQsQ0FBdUIsUUFBdkIsQ0FBZjtBQUNBRCxFQUFBQSxNQUFNLENBQUNFLFNBQVAsR0FBbUIsK0JBQW5CO0FBQ0FKLEVBQUFBLElBQUksQ0FBQ0ssV0FBTCxDQUFpQkgsTUFBakI7QUFDQSxNQUFNSSxHQUFHLEdBQUdKLE1BQU0sQ0FBQ0ssVUFBUCxDQUFrQixJQUFsQixDQUFaO0FBRUFMLEVBQUFBLE1BQU0sQ0FBQ00sTUFBUCxHQUFnQixHQUFoQixDQVBrRCxDQU83Qjs7QUFDckJOLEVBQUFBLE1BQU0sQ0FBQ08sS0FBUCxHQUFlLEdBQWYsQ0FSa0QsQ0FROUI7QUFFcEI7O0FBQ0EsTUFBSUMsUUFBUSxHQUFHLElBQUliLDBEQUFKLENBQWFTLEdBQWIsQ0FBZjtBQUNBSSxFQUFBQSxRQUFRLENBQUNDLEtBQVQ7QUFFRCxDQWRELEdBZ0JBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3NwaWRlcl9saW5nLy4vc3JjL2luZGV4LmpzP2I2MzUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEdhbWVWaWV3IGZyb20gXCIuL3NjcmlwdHMvZ2FtZV92aWV3XCI7XG5cblxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIiwgKCkgPT4ge1xuICBsZXQgbWFpbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY2FudmFzLWNvbnRhaW5lclwiKTtcbiAgY29uc3QgY2FudmFzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImNhbnZhc1wiKTtcbiAgY2FudmFzLmlubmVySFRNTCA9ICc8Y2FudmFzIGlkPVwiY2FudmFzXCI+PC9jYW52YXM+JztcbiAgbWFpbi5hcHBlbmRDaGlsZChjYW52YXMpO1xuICBjb25zdCBjdHggPSBjYW52YXMuZ2V0Q29udGV4dCgnMmQnKTtcblxuICBjYW52YXMuaGVpZ2h0ID0gNjAwOyAvLyBzZXQgdG8gR2FtZS5IRUlHSFQgc28gaXQncyBtb3JlIGR5bmFtaWNcbiAgY2FudmFzLndpZHRoID0gOTAwOyAvLyBzZXQgdG8gR2FtZS5XSURUSFxuICBcbiAgLy8gbGV0IHBsYXllciA9IG5ldyBQbGF5ZXIoKTsgY3JlYXRlIG5ldyBwbGF5ZXIgaW5zdGFuY2Ugd2hlbiBlYWNoIGxldmVsIGlzIHJlbmRlcmVkXG4gIGxldCBnYW1lVmlldyA9IG5ldyBHYW1lVmlldyhjdHgpO1xuICBnYW1lVmlldy5zdGFydCgpO1xuXG59KTtcblxuLy8gZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChldmVudCkgPT4ge1xuLy8gICBjb25zb2xlLmxvZyhldmVudCk7XG4vLyB9KTtcblxuLy8gZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImtleWRvd25cIiwgKGV2ZW50KSA9PiB7XG4vLyAgIGlmIChldmVudC5rZXlDb2RlID09PSA2NSkge1xuLy8gICAgIGNvbnNvbGUubG9nKFwibGVmdFwiKTtcbi8vICAgICBjb25zb2xlLmxvZyhldmVudCk7XG4vLyAgIH1cbi8vIH0pO1xuXG4vLyBjb25zdCBjYW52YXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiY2FudmFzXCIpO1xuLy8gY29uc3QgY3R4ID0gY2FudmFzLmdldENvbnRleHQoJzJkJyk7XG5cbi8vIGxldCBzcGlkZXkgPSBuZXcgSW1hZ2UoKTtcbi8vIHNwaWRleS5zcmMgPSBcIi4uLy4uLy4uL2Fzc2V0cy9zcHJpdGVfc3BpZGVybWFuLnBuZ1wiO1xuLy8gY29uc29sZS5sb2coc3BpZGV5KTtcblxuLy8gbGV0IHRlc3QyID0gbmV3IFBsYXllcigyNTAsIDMwMCwgc3BpZGV5LCBjYW52YXMsIGN0eCk7XG4vLyB0ZXN0Mi5yZW5kZXJQbGF5ZXIoY3R4LCBzcGlkZXkpO1xuLy8gY29uc29sZS5sb2codGVzdDIpO1xuXG4vLyBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwia2V5ZG93blwiLCAoZXZlbnQpID0+IHtcbi8vICAgaWYgKGV2ZW50LmtleUNvZGUgPT09IDY1KSB7XG4vLyAgICAgdGVzdDIubW92ZVBsYXllckxlZnQoKTtcbi8vICAgfSBlbHNlIGlmIChldmVudC5rZXlDb2RlID09PSA2OCkge1xuLy8gICAgIHRlc3QyLm1vdmVQbGF5ZXJSaWdodCgpO1xuLy8gICB9XG4vLyB9KTsiXSwibmFtZXMiOlsiR2FtZVZpZXciLCJkb2N1bWVudCIsImFkZEV2ZW50TGlzdGVuZXIiLCJtYWluIiwiZ2V0RWxlbWVudEJ5SWQiLCJjYW52YXMiLCJjcmVhdGVFbGVtZW50IiwiaW5uZXJIVE1MIiwiYXBwZW5kQ2hpbGQiLCJjdHgiLCJnZXRDb250ZXh0IiwiaGVpZ2h0Iiwid2lkdGgiLCJnYW1lVmlldyIsInN0YXJ0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/index.js\n");

/***/ }),

/***/ "./src/scripts/game.js":
/*!*****************************!*\
  !*** ./src/scripts/game.js ***!
  \*****************************/
/***/ (function() {

eval("// import levelOne from \"./level_layouts/level_one\";\n// /* IMPORT ALL LAYOUTS/LEVELS INTO THIS FILE */\n// import Level from \"./level\";\n// // game dimensions for canvas\n// Game.WIDTH = 900;\n// Game.HEIGHT = 600;\n// class Game {\n//   constructor(canvas, ctx) {\n//     new Level(levelOne, canvas, ctx);\n//   }\n// }\n// document.addEventListener(\"keydown\", (event) => {\n//   console.log(\"in game class\")\n// })\n// export default Game;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zcGlkZXJfbGluZy8uL3NyYy9zY3JpcHRzL2dhbWUuanM/Y2RjMCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBR0EiLCJzb3VyY2VzQ29udGVudCI6WyJcblxuLy8gaW1wb3J0IGxldmVsT25lIGZyb20gXCIuL2xldmVsX2xheW91dHMvbGV2ZWxfb25lXCI7XG5cbi8vIC8qIElNUE9SVCBBTEwgTEFZT1VUUy9MRVZFTFMgSU5UTyBUSElTIEZJTEUgKi9cbi8vIGltcG9ydCBMZXZlbCBmcm9tIFwiLi9sZXZlbFwiO1xuXG4vLyAvLyBnYW1lIGRpbWVuc2lvbnMgZm9yIGNhbnZhc1xuLy8gR2FtZS5XSURUSCA9IDkwMDtcbi8vIEdhbWUuSEVJR0hUID0gNjAwO1xuXG4vLyBjbGFzcyBHYW1lIHtcbi8vICAgY29uc3RydWN0b3IoY2FudmFzLCBjdHgpIHtcbi8vICAgICBuZXcgTGV2ZWwobGV2ZWxPbmUsIGNhbnZhcywgY3R4KTtcbi8vICAgfVxuLy8gfVxuXG4vLyBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwia2V5ZG93blwiLCAoZXZlbnQpID0+IHtcbi8vICAgY29uc29sZS5sb2coXCJpbiBnYW1lIGNsYXNzXCIpXG4vLyB9KVxuXG5cbi8vIGV4cG9ydCBkZWZhdWx0IEdhbWU7Il0sImZpbGUiOiIuL3NyYy9zY3JpcHRzL2dhbWUuanMuanMiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/scripts/game.js\n");

/***/ }),

/***/ "./src/scripts/game_view.js":
/*!**********************************!*\
  !*** ./src/scripts/game_view.js ***!
  \**********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _game__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./game */ \"./src/scripts/game.js\");\n/* harmony import */ var _game__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_game__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _player__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./player */ \"./src/scripts/player.js\");\n/* harmony import */ var _level__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./level */ \"./src/scripts/level.js\");\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\n\n\n\n\nvar GameView = /*#__PURE__*/function () {\n  function GameView(ctx) {\n    _classCallCheck(this, GameView);\n\n    this.ctx = ctx;\n    this.canvas = this.ctx.canvas; // this.game = new Game(this.canvas, this.ctx);\n\n    this.currentPlayer = new _player__WEBPACK_IMPORTED_MODULE_1__[\"default\"](0, 0);\n    this.currentLevel = new _level__WEBPACK_IMPORTED_MODULE_2__[\"default\"](this.ctx);\n    this.animate = this.animate.bind(this);\n  }\n\n  _createClass(GameView, [{\n    key: \"animate\",\n    value: function animate(ctx) {\n      this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);\n      this.currentLevel.renderLevel(this.ctx);\n      this.currentPlayer.renderPlayer(this.ctx);\n    }\n  }, {\n    key: \"start\",\n    value: function start() {\n      requestAnimationFrame(this.animate);\n    }\n  }]);\n\n  return GameView;\n}();\n\ndocument.addEventListener(\"click\", function (event) {\n  console.log(event);\n});\ndocument.addEventListener(\"keydown\", function (event) {\n  if (event.keyCode === 65) {\n    console.log(\"left\");\n    console.log(event);\n  }\n});\n/* harmony default export */ __webpack_exports__[\"default\"] = (GameView);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2NyaXB0cy9nYW1lX3ZpZXcuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBRUE7O0lBRU1HO0FBQ0osb0JBQVlDLEdBQVosRUFBaUI7QUFBQTs7QUFDZixTQUFLQSxHQUFMLEdBQVdBLEdBQVg7QUFDQSxTQUFLQyxNQUFMLEdBQWMsS0FBS0QsR0FBTCxDQUFTQyxNQUF2QixDQUZlLENBSWY7O0FBQ0EsU0FBS0MsYUFBTCxHQUFxQixJQUFJTCwrQ0FBSixDQUFXLENBQVgsRUFBYyxDQUFkLENBQXJCO0FBQ0EsU0FBS00sWUFBTCxHQUFvQixJQUFJTCw4Q0FBSixDQUFVLEtBQUtFLEdBQWYsQ0FBcEI7QUFFQSxTQUFLSSxPQUFMLEdBQWUsS0FBS0EsT0FBTCxDQUFhQyxJQUFiLENBQWtCLElBQWxCLENBQWY7QUFDRDs7OztXQUVELGlCQUFRTCxHQUFSLEVBQWE7QUFDWCxXQUFLQSxHQUFMLENBQVNNLFNBQVQsQ0FBbUIsQ0FBbkIsRUFBc0IsQ0FBdEIsRUFBeUIsS0FBS0wsTUFBTCxDQUFZTSxLQUFyQyxFQUE0QyxLQUFLTixNQUFMLENBQVlPLE1BQXhEO0FBQ0EsV0FBS0wsWUFBTCxDQUFrQk0sV0FBbEIsQ0FBOEIsS0FBS1QsR0FBbkM7QUFDQSxXQUFLRSxhQUFMLENBQW1CUSxZQUFuQixDQUFnQyxLQUFLVixHQUFyQztBQUNEOzs7V0FFRCxpQkFBUTtBQUNOVyxNQUFBQSxxQkFBcUIsQ0FBQyxLQUFLUCxPQUFOLENBQXJCO0FBQ0Q7Ozs7OztBQUdIUSxRQUFRLENBQUNDLGdCQUFULENBQTBCLE9BQTFCLEVBQW1DLFVBQUNDLEtBQUQsRUFBVztBQUM1Q0MsRUFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVlGLEtBQVo7QUFDRCxDQUZEO0FBSUFGLFFBQVEsQ0FBQ0MsZ0JBQVQsQ0FBMEIsU0FBMUIsRUFBcUMsVUFBQ0MsS0FBRCxFQUFXO0FBQzlDLE1BQUlBLEtBQUssQ0FBQ0csT0FBTixLQUFrQixFQUF0QixFQUEwQjtBQUN4QkYsSUFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVksTUFBWjtBQUNBRCxJQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWUYsS0FBWjtBQUNEO0FBQ0YsQ0FMRDtBQU9BLCtEQUFlZixRQUFmIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vc3BpZGVyX2xpbmcvLi9zcmMvc2NyaXB0cy9nYW1lX3ZpZXcuanM/ODBlZSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgR2FtZSBmcm9tIFwiLi9nYW1lXCI7XG5pbXBvcnQgUGxheWVyIGZyb20gXCIuL3BsYXllclwiO1xuXG5pbXBvcnQgTGV2ZWwgZnJvbSBcIi4vbGV2ZWxcIjtcblxuY2xhc3MgR2FtZVZpZXcge1xuICBjb25zdHJ1Y3RvcihjdHgpIHtcbiAgICB0aGlzLmN0eCA9IGN0eDtcbiAgICB0aGlzLmNhbnZhcyA9IHRoaXMuY3R4LmNhbnZhcztcblxuICAgIC8vIHRoaXMuZ2FtZSA9IG5ldyBHYW1lKHRoaXMuY2FudmFzLCB0aGlzLmN0eCk7XG4gICAgdGhpcy5jdXJyZW50UGxheWVyID0gbmV3IFBsYXllcigwLCAwKTtcbiAgICB0aGlzLmN1cnJlbnRMZXZlbCA9IG5ldyBMZXZlbCh0aGlzLmN0eCk7XG5cbiAgICB0aGlzLmFuaW1hdGUgPSB0aGlzLmFuaW1hdGUuYmluZCh0aGlzKTtcbiAgfVxuXG4gIGFuaW1hdGUoY3R4KSB7XG4gICAgdGhpcy5jdHguY2xlYXJSZWN0KDAsIDAsIHRoaXMuY2FudmFzLndpZHRoLCB0aGlzLmNhbnZhcy5oZWlnaHQpO1xuICAgIHRoaXMuY3VycmVudExldmVsLnJlbmRlckxldmVsKHRoaXMuY3R4KTtcbiAgICB0aGlzLmN1cnJlbnRQbGF5ZXIucmVuZGVyUGxheWVyKHRoaXMuY3R4KTtcbiAgfVxuXG4gIHN0YXJ0KCkge1xuICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZSh0aGlzLmFuaW1hdGUpO1xuICB9XG59XG5cbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZXZlbnQpID0+IHtcbiAgY29uc29sZS5sb2coZXZlbnQpO1xufSk7XG5cbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJrZXlkb3duXCIsIChldmVudCkgPT4ge1xuICBpZiAoZXZlbnQua2V5Q29kZSA9PT0gNjUpIHtcbiAgICBjb25zb2xlLmxvZyhcImxlZnRcIik7XG4gICAgY29uc29sZS5sb2coZXZlbnQpO1xuICB9XG59KTtcblxuZXhwb3J0IGRlZmF1bHQgR2FtZVZpZXc7XG5cbiJdLCJuYW1lcyI6WyJHYW1lIiwiUGxheWVyIiwiTGV2ZWwiLCJHYW1lVmlldyIsImN0eCIsImNhbnZhcyIsImN1cnJlbnRQbGF5ZXIiLCJjdXJyZW50TGV2ZWwiLCJhbmltYXRlIiwiYmluZCIsImNsZWFyUmVjdCIsIndpZHRoIiwiaGVpZ2h0IiwicmVuZGVyTGV2ZWwiLCJyZW5kZXJQbGF5ZXIiLCJyZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJkb2N1bWVudCIsImFkZEV2ZW50TGlzdGVuZXIiLCJldmVudCIsImNvbnNvbGUiLCJsb2ciLCJrZXlDb2RlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/scripts/game_view.js\n");

/***/ }),

/***/ "./src/scripts/level.js":
/*!******************************!*\
  !*** ./src/scripts/level.js ***!
  \******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _level_layouts_level_one__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./level_layouts/level_one */ \"./src/scripts/level_layouts/level_one.js\");\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\n// import { keyFor } from \"core-js/fn/symbol\";\n// import Player from \"./player\";\n// /* IMPORT ALL LAYOUTS INTO THIS FILE */\n\n\nvar Level = /*#__PURE__*/function () {\n  function Level(ctx) {\n    _classCallCheck(this, Level);\n\n    this.layout = _level_layouts_level_one__WEBPACK_IMPORTED_MODULE_0__.levelOne;\n    this.ctx = ctx;\n  }\n\n  _createClass(Level, [{\n    key: \"renderLevel\",\n    value: function renderLevel(ctx) {\n      this.layout(ctx);\n    }\n  }]);\n\n  return Level;\n}();\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Level); // document.addEventListener(\"keydown\", (event) => {\n//   if (event.keyCode === 32) {\n//     generateLayout()\n//   }\n// })\n// export default Level;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2NyaXB0cy9sZXZlbC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBO0FBQ0E7QUFFQTtBQUNBOztJQUVNQztBQUNKLGlCQUFZQyxHQUFaLEVBQWlCO0FBQUE7O0FBQ2YsU0FBS0MsTUFBTCxHQUFjSCw4REFBZDtBQUNBLFNBQUtFLEdBQUwsR0FBV0EsR0FBWDtBQUNEOzs7O1dBRUQscUJBQVlBLEdBQVosRUFBaUI7QUFDZixXQUFLQyxNQUFMLENBQVlELEdBQVo7QUFDRDs7Ozs7O0FBR0gsK0RBQWVELEtBQWYsR0FHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zcGlkZXJfbGluZy8uL3NyYy9zY3JpcHRzL2xldmVsLmpzPzAxYWEiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gaW1wb3J0IHsga2V5Rm9yIH0gZnJvbSBcImNvcmUtanMvZm4vc3ltYm9sXCI7XG4vLyBpbXBvcnQgUGxheWVyIGZyb20gXCIuL3BsYXllclwiO1xuXG4vLyAvKiBJTVBPUlQgQUxMIExBWU9VVFMgSU5UTyBUSElTIEZJTEUgKi9cbmltcG9ydCB7IGxldmVsT25lIH0gZnJvbSBcIi4vbGV2ZWxfbGF5b3V0cy9sZXZlbF9vbmVcIjtcblxuY2xhc3MgTGV2ZWwge1xuICBjb25zdHJ1Y3RvcihjdHgpIHtcbiAgICB0aGlzLmxheW91dCA9IGxldmVsT25lO1xuICAgIHRoaXMuY3R4ID0gY3R4O1xuICB9XG5cbiAgcmVuZGVyTGV2ZWwoY3R4KSB7XG4gICAgdGhpcy5sYXlvdXQoY3R4KTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBMZXZlbDtcblxuXG4vLyBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwia2V5ZG93blwiLCAoZXZlbnQpID0+IHtcbi8vICAgaWYgKGV2ZW50LmtleUNvZGUgPT09IDMyKSB7XG4vLyAgICAgZ2VuZXJhdGVMYXlvdXQoKVxuLy8gICB9XG4vLyB9KVxuXG4vLyBleHBvcnQgZGVmYXVsdCBMZXZlbDsiXSwibmFtZXMiOlsibGV2ZWxPbmUiLCJMZXZlbCIsImN0eCIsImxheW91dCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/scripts/level.js\n");

/***/ }),

/***/ "./src/scripts/level_layouts/level_one.js":
/*!************************************************!*\
  !*** ./src/scripts/level_layouts/level_one.js ***!
  \************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"levelOne\": function() { return /* binding */ levelOne; }\n/* harmony export */ });\ndocument.addEventListener(\"keydown\", levelOne);\nvar levelOne = function levelOne(ctx) {\n  // ctx.clearRect(0, 0, canvas.width, canvas.height);\n  // ctx.beginPath();\n  var canvas = ctx.canvas; // debugger\n\n  ctx.fillStyle = 'black';\n  ctx.fillRect(0, canvas.height * 0.75, canvas.width * 0.2, canvas.height * 0.25);\n  ctx.fillStyle = 'black';\n  ctx.fillRect(canvas.width * 0.35, canvas.height * 0.75, canvas.width * 0.3, canvas.height * 0.25);\n  ctx.fillStyle = 'black';\n  ctx.fillRect(canvas.width * 0.8, canvas.height * 0.75, canvas.width * 0.2, canvas.height * 0.25);\n  ctx.fillStyle = 'black';\n  ctx.fillRect(canvas.width * 0.2, canvas.height * 0.5, canvas.width * 0.15, 10);\n  ctx.fillStyle = 'black';\n  ctx.fillRect(canvas.width * 0.65, canvas.height * 0.5, canvas.width * 0.15, 10);\n};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2NyaXB0cy9sZXZlbF9sYXlvdXRzL2xldmVsX29uZS5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7O0FBQUFBLFFBQVEsQ0FBQ0MsZ0JBQVQsQ0FBMEIsU0FBMUIsRUFBcUNDLFFBQXJDO0FBRU8sSUFBTUEsUUFBUSxHQUFHLFNBQVhBLFFBQVcsQ0FBU0MsR0FBVCxFQUFjO0FBQ3BDO0FBQ0E7QUFDQSxNQUFJQyxNQUFNLEdBQUdELEdBQUcsQ0FBQ0MsTUFBakIsQ0FIb0MsQ0FJcEM7O0FBRUFELEVBQUFBLEdBQUcsQ0FBQ0UsU0FBSixHQUFnQixPQUFoQjtBQUNBRixFQUFBQSxHQUFHLENBQUNHLFFBQUosQ0FBYSxDQUFiLEVBQWdCRixNQUFNLENBQUNHLE1BQVAsR0FBZ0IsSUFBaEMsRUFBc0NILE1BQU0sQ0FBQ0ksS0FBUCxHQUFlLEdBQXJELEVBQTBESixNQUFNLENBQUNHLE1BQVAsR0FBZ0IsSUFBMUU7QUFFQUosRUFBQUEsR0FBRyxDQUFDRSxTQUFKLEdBQWdCLE9BQWhCO0FBQ0FGLEVBQUFBLEdBQUcsQ0FBQ0csUUFBSixDQUFhRixNQUFNLENBQUNJLEtBQVAsR0FBZSxJQUE1QixFQUFrQ0osTUFBTSxDQUFDRyxNQUFQLEdBQWdCLElBQWxELEVBQXdESCxNQUFNLENBQUNJLEtBQVAsR0FBZSxHQUF2RSxFQUE0RUosTUFBTSxDQUFDRyxNQUFQLEdBQWdCLElBQTVGO0FBRUFKLEVBQUFBLEdBQUcsQ0FBQ0UsU0FBSixHQUFnQixPQUFoQjtBQUNBRixFQUFBQSxHQUFHLENBQUNHLFFBQUosQ0FBYUYsTUFBTSxDQUFDSSxLQUFQLEdBQWUsR0FBNUIsRUFBaUNKLE1BQU0sQ0FBQ0csTUFBUCxHQUFnQixJQUFqRCxFQUF1REgsTUFBTSxDQUFDSSxLQUFQLEdBQWUsR0FBdEUsRUFBMkVKLE1BQU0sQ0FBQ0csTUFBUCxHQUFnQixJQUEzRjtBQUVBSixFQUFBQSxHQUFHLENBQUNFLFNBQUosR0FBZ0IsT0FBaEI7QUFDQUYsRUFBQUEsR0FBRyxDQUFDRyxRQUFKLENBQWFGLE1BQU0sQ0FBQ0ksS0FBUCxHQUFlLEdBQTVCLEVBQWlDSixNQUFNLENBQUNHLE1BQVAsR0FBZ0IsR0FBakQsRUFBc0RILE1BQU0sQ0FBQ0ksS0FBUCxHQUFlLElBQXJFLEVBQTJFLEVBQTNFO0FBRUFMLEVBQUFBLEdBQUcsQ0FBQ0UsU0FBSixHQUFnQixPQUFoQjtBQUNBRixFQUFBQSxHQUFHLENBQUNHLFFBQUosQ0FBYUYsTUFBTSxDQUFDSSxLQUFQLEdBQWUsSUFBNUIsRUFBa0NKLE1BQU0sQ0FBQ0csTUFBUCxHQUFnQixHQUFsRCxFQUF1REgsTUFBTSxDQUFDSSxLQUFQLEdBQWUsSUFBdEUsRUFBNEUsRUFBNUU7QUFFRCxDQXJCTSIsInNvdXJjZXMiOlsid2VicGFjazovL3NwaWRlcl9saW5nLy4vc3JjL3NjcmlwdHMvbGV2ZWxfbGF5b3V0cy9sZXZlbF9vbmUuanM/Y2U2NCJdLCJzb3VyY2VzQ29udGVudCI6WyJkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwia2V5ZG93blwiLCBsZXZlbE9uZSk7XG5cbmV4cG9ydCBjb25zdCBsZXZlbE9uZSA9IGZ1bmN0aW9uKGN0eCkge1xuICAvLyBjdHguY2xlYXJSZWN0KDAsIDAsIGNhbnZhcy53aWR0aCwgY2FudmFzLmhlaWdodCk7XG4gIC8vIGN0eC5iZWdpblBhdGgoKTtcbiAgbGV0IGNhbnZhcyA9IGN0eC5jYW52YXM7XG4gIC8vIGRlYnVnZ2VyXG4gIFxuICBjdHguZmlsbFN0eWxlID0gJ2JsYWNrJztcbiAgY3R4LmZpbGxSZWN0KDAsIGNhbnZhcy5oZWlnaHQgKiAwLjc1LCBjYW52YXMud2lkdGggKiAwLjIsIGNhbnZhcy5oZWlnaHQgKiAwLjI1KTtcblxuICBjdHguZmlsbFN0eWxlID0gJ2JsYWNrJztcbiAgY3R4LmZpbGxSZWN0KGNhbnZhcy53aWR0aCAqIDAuMzUsIGNhbnZhcy5oZWlnaHQgKiAwLjc1LCBjYW52YXMud2lkdGggKiAwLjMsIGNhbnZhcy5oZWlnaHQgKiAwLjI1KTtcblxuICBjdHguZmlsbFN0eWxlID0gJ2JsYWNrJztcbiAgY3R4LmZpbGxSZWN0KGNhbnZhcy53aWR0aCAqIDAuOCwgY2FudmFzLmhlaWdodCAqIDAuNzUsIGNhbnZhcy53aWR0aCAqIDAuMiwgY2FudmFzLmhlaWdodCAqIDAuMjUpO1xuXG4gIGN0eC5maWxsU3R5bGUgPSAnYmxhY2snO1xuICBjdHguZmlsbFJlY3QoY2FudmFzLndpZHRoICogMC4yLCBjYW52YXMuaGVpZ2h0ICogMC41LCBjYW52YXMud2lkdGggKiAwLjE1LCAxMCk7XG5cbiAgY3R4LmZpbGxTdHlsZSA9ICdibGFjayc7XG4gIGN0eC5maWxsUmVjdChjYW52YXMud2lkdGggKiAwLjY1LCBjYW52YXMuaGVpZ2h0ICogMC41LCBjYW52YXMud2lkdGggKiAwLjE1LCAxMCk7XG4gIFxufVxuXG4iXSwibmFtZXMiOlsiZG9jdW1lbnQiLCJhZGRFdmVudExpc3RlbmVyIiwibGV2ZWxPbmUiLCJjdHgiLCJjYW52YXMiLCJmaWxsU3R5bGUiLCJmaWxsUmVjdCIsImhlaWdodCIsIndpZHRoIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/scripts/level_layouts/level_one.js\n");

/***/ }),

/***/ "./src/scripts/player.js":
/*!*******************************!*\
  !*** ./src/scripts/player.js ***!
  \*******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nvar Player = /*#__PURE__*/function () {\n  function Player(sX, sY) {\n    _classCallCheck(this, Player);\n\n    this.x = sX;\n    this.y = sY; // defaults\n\n    this.velocity = 1;\n    var spidey = new Image();\n    spidey.src = \"../../assets/sprite_spiderman.png\";\n    this.image = spidey;\n    this.width = 45; // 40 px\n\n    this.height = 80; // 80 px\n\n    this.renderPlayer = this.renderPlayer.bind(this);\n    this.movePlayerLeft = this.movePlayerLeft.bind(this);\n    this.movePlayerRight = this.movePlayerRight.bind(this); // this.jumpPlayer = this.jumpPlayer.bind(this);\n    // this.impulsePlayer = this.impulsePlayer.bind(this);\n  }\n\n  _createClass(Player, [{\n    key: \"renderPlayer\",\n    value: function renderPlayer(ctx) {\n      var _this = this;\n\n      // ctx.clearRect(0, 0, canvas.width, canvas.height);\n      this.image.onload = function () {\n        ctx.drawImage(_this.image, 655, 0, 45, 80, _this.x, _this.y, _this.width, _this.height);\n      };\n    }\n  }, {\n    key: \"movePlayerLeft\",\n    value: function movePlayerLeft() {\n      this.x -= this.velocity;\n    }\n  }, {\n    key: \"movePlayerRight\",\n    value: function movePlayerRight() {\n      this.x += this.velocity;\n    } // jumpPlayer(event) {\n    //   if (event.keyCode === 32) {\n    //     console.log(\"jump/space\");\n    //   }\n    // }\n    // impulsePlayer(event) {\n    //   console.log(event);\n    //   console.log(\"click\");\n    // }\n\n  }]);\n\n  return Player;\n}(); // document.addEventListener(\"keydown\", (event) => {\n//   if (event.keyCode === 65) {\n//     test2.movePlayerLeft();\n//   } else if (event.keyCode === 68) {\n//     test2.movePlayerRight();\n//   }\n// });\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Player);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2NyaXB0cy9wbGF5ZXIuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7OztJQUFNQTtBQUNKLGtCQUFZQyxFQUFaLEVBQWdCQyxFQUFoQixFQUFvQjtBQUFBOztBQUNsQixTQUFLQyxDQUFMLEdBQVNGLEVBQVQ7QUFDQSxTQUFLRyxDQUFMLEdBQVNGLEVBQVQsQ0FGa0IsQ0FJbEI7O0FBQ0EsU0FBS0csUUFBTCxHQUFnQixDQUFoQjtBQUNBLFFBQUlDLE1BQU0sR0FBRyxJQUFJQyxLQUFKLEVBQWI7QUFDQUQsSUFBQUEsTUFBTSxDQUFDRSxHQUFQLEdBQWEsbUNBQWI7QUFDQSxTQUFLQyxLQUFMLEdBQWFILE1BQWI7QUFFQSxTQUFLSSxLQUFMLEdBQWEsRUFBYixDQVZrQixDQVVEOztBQUNqQixTQUFLQyxNQUFMLEdBQWMsRUFBZCxDQVhrQixDQVdBOztBQUVsQixTQUFLQyxZQUFMLEdBQW9CLEtBQUtBLFlBQUwsQ0FBa0JDLElBQWxCLENBQXVCLElBQXZCLENBQXBCO0FBQ0EsU0FBS0MsY0FBTCxHQUFzQixLQUFLQSxjQUFMLENBQW9CRCxJQUFwQixDQUF5QixJQUF6QixDQUF0QjtBQUNBLFNBQUtFLGVBQUwsR0FBdUIsS0FBS0EsZUFBTCxDQUFxQkYsSUFBckIsQ0FBMEIsSUFBMUIsQ0FBdkIsQ0Fma0IsQ0FnQmxCO0FBQ0E7QUFDRDs7OztXQUVELHNCQUFhRyxHQUFiLEVBQWtCO0FBQUE7O0FBQ2hCO0FBQ0EsV0FBS1AsS0FBTCxDQUFXUSxNQUFYLEdBQW9CLFlBQU07QUFDeEJELFFBQUFBLEdBQUcsQ0FBQ0UsU0FBSixDQUFjLEtBQUksQ0FBQ1QsS0FBbkIsRUFBMEIsR0FBMUIsRUFBK0IsQ0FBL0IsRUFBa0MsRUFBbEMsRUFBc0MsRUFBdEMsRUFBMEMsS0FBSSxDQUFDTixDQUEvQyxFQUFrRCxLQUFJLENBQUNDLENBQXZELEVBQTBELEtBQUksQ0FBQ00sS0FBL0QsRUFBc0UsS0FBSSxDQUFDQyxNQUEzRTtBQUNELE9BRkQ7QUFHRDs7O1dBRUQsMEJBQWlCO0FBQ2YsV0FBS1IsQ0FBTCxJQUFVLEtBQUtFLFFBQWY7QUFDRDs7O1dBRUQsMkJBQWtCO0FBQ2hCLFdBQUtGLENBQUwsSUFBVSxLQUFLRSxRQUFmO0FBQ0QsTUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7Ozs7O0tBSUY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUVBLCtEQUFlTCxNQUFmIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vc3BpZGVyX2xpbmcvLi9zcmMvc2NyaXB0cy9wbGF5ZXIuanM/NjQ3MSJdLCJzb3VyY2VzQ29udGVudCI6WyJjbGFzcyBQbGF5ZXIge1xuICBjb25zdHJ1Y3RvcihzWCwgc1kpIHtcbiAgICB0aGlzLnggPSBzWDtcbiAgICB0aGlzLnkgPSBzWTtcblxuICAgIC8vIGRlZmF1bHRzXG4gICAgdGhpcy52ZWxvY2l0eSA9IDE7XG4gICAgbGV0IHNwaWRleSA9IG5ldyBJbWFnZSgpO1xuICAgIHNwaWRleS5zcmMgPSBcIi4uLy4uL2Fzc2V0cy9zcHJpdGVfc3BpZGVybWFuLnBuZ1wiO1xuICAgIHRoaXMuaW1hZ2UgPSBzcGlkZXk7XG5cbiAgICB0aGlzLndpZHRoID0gNDU7IC8vIDQwIHB4XG4gICAgdGhpcy5oZWlnaHQgPSA4MDsgLy8gODAgcHhcblxuICAgIHRoaXMucmVuZGVyUGxheWVyID0gdGhpcy5yZW5kZXJQbGF5ZXIuYmluZCh0aGlzKTtcbiAgICB0aGlzLm1vdmVQbGF5ZXJMZWZ0ID0gdGhpcy5tb3ZlUGxheWVyTGVmdC5iaW5kKHRoaXMpO1xuICAgIHRoaXMubW92ZVBsYXllclJpZ2h0ID0gdGhpcy5tb3ZlUGxheWVyUmlnaHQuYmluZCh0aGlzKTtcbiAgICAvLyB0aGlzLmp1bXBQbGF5ZXIgPSB0aGlzLmp1bXBQbGF5ZXIuYmluZCh0aGlzKTtcbiAgICAvLyB0aGlzLmltcHVsc2VQbGF5ZXIgPSB0aGlzLmltcHVsc2VQbGF5ZXIuYmluZCh0aGlzKTtcbiAgfVxuXG4gIHJlbmRlclBsYXllcihjdHgpIHtcbiAgICAvLyBjdHguY2xlYXJSZWN0KDAsIDAsIGNhbnZhcy53aWR0aCwgY2FudmFzLmhlaWdodCk7XG4gICAgdGhpcy5pbWFnZS5vbmxvYWQgPSAoKSA9PiB7XG4gICAgICBjdHguZHJhd0ltYWdlKHRoaXMuaW1hZ2UsIDY1NSwgMCwgNDUsIDgwLCB0aGlzLngsIHRoaXMueSwgdGhpcy53aWR0aCwgdGhpcy5oZWlnaHQpO1xuICAgIH1cbiAgfVxuXG4gIG1vdmVQbGF5ZXJMZWZ0KCkge1xuICAgIHRoaXMueCAtPSB0aGlzLnZlbG9jaXR5O1xuICB9XG5cbiAgbW92ZVBsYXllclJpZ2h0KCkge1xuICAgIHRoaXMueCArPSB0aGlzLnZlbG9jaXR5O1xuICB9XG5cbiAgLy8ganVtcFBsYXllcihldmVudCkge1xuICAvLyAgIGlmIChldmVudC5rZXlDb2RlID09PSAzMikge1xuICAvLyAgICAgY29uc29sZS5sb2coXCJqdW1wL3NwYWNlXCIpO1xuICAvLyAgIH1cbiAgLy8gfVxuXG4gIC8vIGltcHVsc2VQbGF5ZXIoZXZlbnQpIHtcbiAgLy8gICBjb25zb2xlLmxvZyhldmVudCk7XG4gIC8vICAgY29uc29sZS5sb2coXCJjbGlja1wiKTtcbiAgLy8gfVxuXG59XG5cbi8vIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJrZXlkb3duXCIsIChldmVudCkgPT4ge1xuLy8gICBpZiAoZXZlbnQua2V5Q29kZSA9PT0gNjUpIHtcbi8vICAgICB0ZXN0Mi5tb3ZlUGxheWVyTGVmdCgpO1xuLy8gICB9IGVsc2UgaWYgKGV2ZW50LmtleUNvZGUgPT09IDY4KSB7XG4vLyAgICAgdGVzdDIubW92ZVBsYXllclJpZ2h0KCk7XG4vLyAgIH1cbi8vIH0pO1xuXG5leHBvcnQgZGVmYXVsdCBQbGF5ZXI7Il0sIm5hbWVzIjpbIlBsYXllciIsInNYIiwic1kiLCJ4IiwieSIsInZlbG9jaXR5Iiwic3BpZGV5IiwiSW1hZ2UiLCJzcmMiLCJpbWFnZSIsIndpZHRoIiwiaGVpZ2h0IiwicmVuZGVyUGxheWVyIiwiYmluZCIsIm1vdmVQbGF5ZXJMZWZ0IiwibW92ZVBsYXllclJpZ2h0IiwiY3R4Iiwib25sb2FkIiwiZHJhd0ltYWdlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/scripts/player.js\n");

/***/ }),

/***/ "./src/index.scss":
/*!************************!*\
  !*** ./src/index.scss ***!
  \************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguc2Nzcy5qcyIsIm1hcHBpbmdzIjoiO0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zcGlkZXJfbGluZy8uL3NyYy9pbmRleC5zY3NzPzk3NDUiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/index.scss\n");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	!function() {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = function(module) {
/******/ 			var getter = module && module.__esModule ?
/******/ 				function() { return module['default']; } :
/******/ 				function() { return module; };
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	__webpack_require__("./src/index.js");
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.scss");
/******/ 	
/******/ })()
;