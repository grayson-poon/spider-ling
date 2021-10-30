/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _scripts_example__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scripts/example */ \"./src/scripts/example.js\");\n/* harmony import */ var _js_move_player__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./js/move_player */ \"./src/js/move_player.js\");\n/* harmony import */ var _js_jump_player__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./js/jump_player */ \"./src/js/jump_player.js\");\n/* harmony import */ var _js_impulse__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./js/impulse */ \"./src/js/impulse.js\");\n\n\n\n\ndocument.addEventListener(\"DOMContentLoaded\", function () {\n  var main = document.getElementById(\"canvas-container\");\n  var canvas = document.createElement(\"canvas\");\n  canvas.innerHTML = '<canvas id=\"canvas\" height=\"300\" width=\"300\"></canvas>';\n  main.appendChild(canvas);\n  canvas.height = 600;\n  canvas.width = 900;\n  var ctx = canvas.getContext('2d');\n  ctx.moveTo(0, canvas.height * 0.75);\n  ctx.lineTo(canvas.width, canvas.height * 0.75);\n  ctx.stroke();\n});\ndocument.addEventListener(\"keydown\", function (event) {\n  (0,_js_move_player__WEBPACK_IMPORTED_MODULE_1__.movePlayer)(event);\n  (0,_js_jump_player__WEBPACK_IMPORTED_MODULE_2__.jumpPlayer)(event);\n});\ndocument.addEventListener(\"click\", function (event) {\n  (0,_js_impulse__WEBPACK_IMPORTED_MODULE_3__.impulse)(event);\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUVBSSxRQUFRLENBQUNDLGdCQUFULENBQTBCLGtCQUExQixFQUE4QyxZQUFNO0FBQ2xELE1BQUlDLElBQUksR0FBR0YsUUFBUSxDQUFDRyxjQUFULENBQXdCLGtCQUF4QixDQUFYO0FBRUEsTUFBSUMsTUFBTSxHQUFHSixRQUFRLENBQUNLLGFBQVQsQ0FBdUIsUUFBdkIsQ0FBYjtBQUNBRCxFQUFBQSxNQUFNLENBQUNFLFNBQVAsR0FBbUIsd0RBQW5CO0FBQ0FKLEVBQUFBLElBQUksQ0FBQ0ssV0FBTCxDQUFpQkgsTUFBakI7QUFFQUEsRUFBQUEsTUFBTSxDQUFDSSxNQUFQLEdBQWdCLEdBQWhCO0FBQ0FKLEVBQUFBLE1BQU0sQ0FBQ0ssS0FBUCxHQUFlLEdBQWY7QUFFQSxNQUFNQyxHQUFHLEdBQUdOLE1BQU0sQ0FBQ08sVUFBUCxDQUFrQixJQUFsQixDQUFaO0FBRUFELEVBQUFBLEdBQUcsQ0FBQ0UsTUFBSixDQUFXLENBQVgsRUFBY1IsTUFBTSxDQUFDSSxNQUFQLEdBQWdCLElBQTlCO0FBQ0FFLEVBQUFBLEdBQUcsQ0FBQ0csTUFBSixDQUFXVCxNQUFNLENBQUNLLEtBQWxCLEVBQXlCTCxNQUFNLENBQUNJLE1BQVAsR0FBZ0IsSUFBekM7QUFDQUUsRUFBQUEsR0FBRyxDQUFDSSxNQUFKO0FBRUQsQ0FoQkQ7QUFrQkFkLFFBQVEsQ0FBQ0MsZ0JBQVQsQ0FBMEIsU0FBMUIsRUFBcUMsVUFBQ2MsS0FBRCxFQUFXO0FBQzlDbEIsRUFBQUEsMkRBQVUsQ0FBQ2tCLEtBQUQsQ0FBVjtBQUNBakIsRUFBQUEsMkRBQVUsQ0FBQ2lCLEtBQUQsQ0FBVjtBQUNELENBSEQ7QUFLQWYsUUFBUSxDQUFDQyxnQkFBVCxDQUEwQixPQUExQixFQUFtQyxVQUFDYyxLQUFELEVBQVc7QUFDNUNoQixFQUFBQSxvREFBTyxDQUFDZ0IsS0FBRCxDQUFQO0FBQ0QsQ0FGRCIsInNvdXJjZXMiOlsid2VicGFjazovL3NwaWRlcl9saW5nLy4vc3JjL2luZGV4LmpzP2I2MzUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEV4YW1wbGUgZnJvbSBcIi4vc2NyaXB0cy9leGFtcGxlXCI7XG5pbXBvcnQgeyBtb3ZlUGxheWVyIH0gZnJvbSBcIi4vanMvbW92ZV9wbGF5ZXJcIjtcbmltcG9ydCB7IGp1bXBQbGF5ZXIgfSBmcm9tIFwiLi9qcy9qdW1wX3BsYXllclwiO1xuaW1wb3J0IHsgaW1wdWxzZSB9IGZyb20gXCIuL2pzL2ltcHVsc2VcIjtcblxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIiwgKCkgPT4ge1xuICBsZXQgbWFpbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY2FudmFzLWNvbnRhaW5lclwiKTtcblxuICBsZXQgY2FudmFzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImNhbnZhc1wiKTtcbiAgY2FudmFzLmlubmVySFRNTCA9ICc8Y2FudmFzIGlkPVwiY2FudmFzXCIgaGVpZ2h0PVwiMzAwXCIgd2lkdGg9XCIzMDBcIj48L2NhbnZhcz4nO1xuICBtYWluLmFwcGVuZENoaWxkKGNhbnZhcyk7XG5cbiAgY2FudmFzLmhlaWdodCA9IDYwMDtcbiAgY2FudmFzLndpZHRoID0gOTAwO1xuXG4gIGNvbnN0IGN0eCA9IGNhbnZhcy5nZXRDb250ZXh0KCcyZCcpO1xuXG4gIGN0eC5tb3ZlVG8oMCwgY2FudmFzLmhlaWdodCAqIDAuNzUpO1xuICBjdHgubGluZVRvKGNhbnZhcy53aWR0aCwgY2FudmFzLmhlaWdodCAqIDAuNzUpO1xuICBjdHguc3Ryb2tlKCk7XG4gIFxufSk7XG5cbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJrZXlkb3duXCIsIChldmVudCkgPT4ge1xuICBtb3ZlUGxheWVyKGV2ZW50KTtcbiAganVtcFBsYXllcihldmVudCk7XG59KTtcblxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChldmVudCkgPT4ge1xuICBpbXB1bHNlKGV2ZW50KTtcbn0pO1xuIl0sIm5hbWVzIjpbIkV4YW1wbGUiLCJtb3ZlUGxheWVyIiwianVtcFBsYXllciIsImltcHVsc2UiLCJkb2N1bWVudCIsImFkZEV2ZW50TGlzdGVuZXIiLCJtYWluIiwiZ2V0RWxlbWVudEJ5SWQiLCJjYW52YXMiLCJjcmVhdGVFbGVtZW50IiwiaW5uZXJIVE1MIiwiYXBwZW5kQ2hpbGQiLCJoZWlnaHQiLCJ3aWR0aCIsImN0eCIsImdldENvbnRleHQiLCJtb3ZlVG8iLCJsaW5lVG8iLCJzdHJva2UiLCJldmVudCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/index.js\n");

/***/ }),

/***/ "./src/js/impulse.js":
/*!***************************!*\
  !*** ./src/js/impulse.js ***!
  \***************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"impulse\": function() { return /* binding */ impulse; }\n/* harmony export */ });\nvar impulse = function impulse(event) {\n  console.log(\"click\");\n};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvanMvaW1wdWxzZS5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7O0FBQU8sSUFBTUEsT0FBTyxHQUFHLFNBQVZBLE9BQVUsQ0FBU0MsS0FBVCxFQUFnQjtBQUNyQ0MsRUFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVksT0FBWjtBQUNELENBRk0iLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zcGlkZXJfbGluZy8uL3NyYy9qcy9pbXB1bHNlLmpzPzljNTYiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNvbnN0IGltcHVsc2UgPSBmdW5jdGlvbihldmVudCkge1xuICBjb25zb2xlLmxvZyhcImNsaWNrXCIpO1xufSJdLCJuYW1lcyI6WyJpbXB1bHNlIiwiZXZlbnQiLCJjb25zb2xlIiwibG9nIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/js/impulse.js\n");

/***/ }),

/***/ "./src/js/jump_player.js":
/*!*******************************!*\
  !*** ./src/js/jump_player.js ***!
  \*******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"jumpPlayer\": function() { return /* binding */ jumpPlayer; }\n/* harmony export */ });\nvar jumpPlayer = function jumpPlayer(event) {\n  if (event.keyCode === 32) {\n    console.log(\"space\");\n  }\n};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvanMvanVtcF9wbGF5ZXIuanMuanMiLCJtYXBwaW5ncyI6Ijs7OztBQUFPLElBQU1BLFVBQVUsR0FBRyxTQUFiQSxVQUFhLENBQVNDLEtBQVQsRUFBZ0I7QUFDeEMsTUFBSUEsS0FBSyxDQUFDQyxPQUFOLEtBQWtCLEVBQXRCLEVBQTBCO0FBQ3hCQyxJQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWSxPQUFaO0FBQ0Q7QUFDRixDQUpNIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vc3BpZGVyX2xpbmcvLi9zcmMvanMvanVtcF9wbGF5ZXIuanM/ZGYyMiJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY29uc3QganVtcFBsYXllciA9IGZ1bmN0aW9uKGV2ZW50KSB7XG4gIGlmIChldmVudC5rZXlDb2RlID09PSAzMikge1xuICAgIGNvbnNvbGUubG9nKFwic3BhY2VcIik7XG4gIH1cbn0iXSwibmFtZXMiOlsianVtcFBsYXllciIsImV2ZW50Iiwia2V5Q29kZSIsImNvbnNvbGUiLCJsb2ciXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/js/jump_player.js\n");

/***/ }),

/***/ "./src/js/move_player.js":
/*!*******************************!*\
  !*** ./src/js/move_player.js ***!
  \*******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"movePlayer\": function() { return /* binding */ movePlayer; }\n/* harmony export */ });\nvar movePlayer = function movePlayer(event) {\n  if (event.keyCode === 65) {\n    console.log(\"left\");\n  } else if (event.keyCode === 68) {\n    console.log(\"right\");\n  }\n};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvanMvbW92ZV9wbGF5ZXIuanMuanMiLCJtYXBwaW5ncyI6Ijs7OztBQUFPLElBQU1BLFVBQVUsR0FBRyxTQUFiQSxVQUFhLENBQVNDLEtBQVQsRUFBZ0I7QUFDeEMsTUFBSUEsS0FBSyxDQUFDQyxPQUFOLEtBQWtCLEVBQXRCLEVBQTBCO0FBQ3hCQyxJQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWSxNQUFaO0FBQ0QsR0FGRCxNQUVPLElBQUlILEtBQUssQ0FBQ0MsT0FBTixLQUFrQixFQUF0QixFQUEwQjtBQUMvQkMsSUFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVksT0FBWjtBQUNEO0FBQ0YsQ0FOTSIsInNvdXJjZXMiOlsid2VicGFjazovL3NwaWRlcl9saW5nLy4vc3JjL2pzL21vdmVfcGxheWVyLmpzP2FhNjciXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNvbnN0IG1vdmVQbGF5ZXIgPSBmdW5jdGlvbihldmVudCkge1xuICBpZiAoZXZlbnQua2V5Q29kZSA9PT0gNjUpIHtcbiAgICBjb25zb2xlLmxvZyhcImxlZnRcIik7XG4gIH0gZWxzZSBpZiAoZXZlbnQua2V5Q29kZSA9PT0gNjgpIHtcbiAgICBjb25zb2xlLmxvZyhcInJpZ2h0XCIpO1xuICB9XG59XG5cblxuIl0sIm5hbWVzIjpbIm1vdmVQbGF5ZXIiLCJldmVudCIsImtleUNvZGUiLCJjb25zb2xlIiwibG9nIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/js/move_player.js\n");

/***/ }),

/***/ "./src/scripts/example.js":
/*!********************************!*\
  !*** ./src/scripts/example.js ***!
  \********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nvar Example = /*#__PURE__*/function () {\n  function Example(ele) {\n    _classCallCheck(this, Example);\n\n    // this.ele = ele;\n    // let newHTMLEle = document.createElement(\"h1\");\n    // newHTMLEle.innerText = \"Restful routes\";\n    // this.ele.appendChild(newHTMLEle);\n    // with arrow function to preserve context\n    // this.ele.addEventListener(\"click\", () => this.handleClick());\n    this.handleClick = this.handleClick.bind(this);\n    this.ele.addEventListener(\"click\", this.handleClick);\n  }\n\n  _createClass(Example, [{\n    key: \"handleClick\",\n    value: function handleClick(e) {\n      this.ele.children[0].innerText = \"ouch\";\n      e.stopPropagation();\n    }\n  }]);\n\n  return Example;\n}();\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Example);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2NyaXB0cy9leGFtcGxlLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7SUFBTUE7QUFDSixtQkFBWUMsR0FBWixFQUFpQjtBQUFBOztBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBLFNBQUtDLFdBQUwsR0FBbUIsS0FBS0EsV0FBTCxDQUFpQkMsSUFBakIsQ0FBc0IsSUFBdEIsQ0FBbkI7QUFDQSxTQUFLRixHQUFMLENBQVNHLGdCQUFULENBQTBCLE9BQTFCLEVBQW1DLEtBQUtGLFdBQXhDO0FBQ0Q7Ozs7V0FFRCxxQkFBWUcsQ0FBWixFQUFlO0FBQ2IsV0FBS0osR0FBTCxDQUFTSyxRQUFULENBQWtCLENBQWxCLEVBQXFCQyxTQUFyQixHQUFpQyxNQUFqQztBQUNBRixNQUFBQSxDQUFDLENBQUNHLGVBQUY7QUFDRDs7Ozs7O0FBR0gsK0RBQWVSLE9BQWYiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zcGlkZXJfbGluZy8uL3NyYy9zY3JpcHRzL2V4YW1wbGUuanM/ZmNlZSJdLCJzb3VyY2VzQ29udGVudCI6WyJjbGFzcyBFeGFtcGxlIHtcbiAgY29uc3RydWN0b3IoZWxlKSB7XG4gICAgLy8gdGhpcy5lbGUgPSBlbGU7XG4gICAgLy8gbGV0IG5ld0hUTUxFbGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDFcIik7XG4gICAgLy8gbmV3SFRNTEVsZS5pbm5lclRleHQgPSBcIlJlc3RmdWwgcm91dGVzXCI7XG4gICAgLy8gdGhpcy5lbGUuYXBwZW5kQ2hpbGQobmV3SFRNTEVsZSk7XG5cbiAgICAvLyB3aXRoIGFycm93IGZ1bmN0aW9uIHRvIHByZXNlcnZlIGNvbnRleHRcbiAgICAvLyB0aGlzLmVsZS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4gdGhpcy5oYW5kbGVDbGljaygpKTtcbiAgICBcbiAgICB0aGlzLmhhbmRsZUNsaWNrID0gdGhpcy5oYW5kbGVDbGljay5iaW5kKHRoaXMpO1xuICAgIHRoaXMuZWxlLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCB0aGlzLmhhbmRsZUNsaWNrKTtcbiAgfVxuXG4gIGhhbmRsZUNsaWNrKGUpIHtcbiAgICB0aGlzLmVsZS5jaGlsZHJlblswXS5pbm5lclRleHQgPSBcIm91Y2hcIjtcbiAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEV4YW1wbGU7Il0sIm5hbWVzIjpbIkV4YW1wbGUiLCJlbGUiLCJoYW5kbGVDbGljayIsImJpbmQiLCJhZGRFdmVudExpc3RlbmVyIiwiZSIsImNoaWxkcmVuIiwiaW5uZXJUZXh0Iiwic3RvcFByb3BhZ2F0aW9uIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/scripts/example.js\n");

/***/ }),

/***/ "./src/index.scss":
/*!************************!*\
  !*** ./src/index.scss ***!
  \************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

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