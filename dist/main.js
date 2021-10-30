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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _scripts_example__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scripts/example */ \"./src/scripts/example.js\");\n/* harmony import */ var _js_move_player__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./js/move_player */ \"./src/js/move_player.js\");\n/* harmony import */ var _js_jump_player__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./js/jump_player */ \"./src/js/jump_player.js\");\n/* harmony import */ var _js_impulse__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./js/impulse */ \"./src/js/impulse.js\");\n/* harmony import */ var _js_modules_render_canvas__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./js/modules/render_canvas */ \"./src/js/modules/render_canvas.js\");\n/* harmony import */ var _js_levels_js_level_one__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./js/levels.js/level_one */ \"./src/js/levels.js/level_one.js\");\n\n\n\n\n\n\ndocument.addEventListener(\"DOMContentLoaded\", function () {\n  var main = document.getElementById(\"canvas-container\");\n  var canvas = document.createElement(\"canvas\");\n  canvas.innerHTML = '<canvas id=\"canvas\" height=\"300\" width=\"300\"></canvas>';\n  main.appendChild(canvas);\n  canvas.height = 600;\n  canvas.width = 900;\n  var ctx = canvas.getContext('2d');\n  document.addEventListener(\"keydown\", function (event) {\n    if (event.keyCode === 76) (0,_js_levels_js_level_one__WEBPACK_IMPORTED_MODULE_5__.loadLevelOne)(canvas, ctx);\n  });\n});\ndocument.addEventListener(\"keydown\", function (event) {\n  (0,_js_move_player__WEBPACK_IMPORTED_MODULE_1__.movePlayer)(event);\n  (0,_js_jump_player__WEBPACK_IMPORTED_MODULE_2__.jumpPlayer)(event);\n});\ndocument.addEventListener(\"click\", function (event) {\n  (0,_js_impulse__WEBPACK_IMPORTED_MODULE_3__.impulse)(event);\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBTSxRQUFRLENBQUNDLGdCQUFULENBQTBCLGtCQUExQixFQUE4QyxZQUFNO0FBQ2xELE1BQUlDLElBQUksR0FBR0YsUUFBUSxDQUFDRyxjQUFULENBQXdCLGtCQUF4QixDQUFYO0FBQ0EsTUFBSUMsTUFBTSxHQUFHSixRQUFRLENBQUNLLGFBQVQsQ0FBdUIsUUFBdkIsQ0FBYjtBQUNBRCxFQUFBQSxNQUFNLENBQUNFLFNBQVAsR0FBbUIsd0RBQW5CO0FBQ0FKLEVBQUFBLElBQUksQ0FBQ0ssV0FBTCxDQUFpQkgsTUFBakI7QUFFQUEsRUFBQUEsTUFBTSxDQUFDSSxNQUFQLEdBQWdCLEdBQWhCO0FBQ0FKLEVBQUFBLE1BQU0sQ0FBQ0ssS0FBUCxHQUFlLEdBQWY7QUFFQSxNQUFNQyxHQUFHLEdBQUdOLE1BQU0sQ0FBQ08sVUFBUCxDQUFrQixJQUFsQixDQUFaO0FBRUFYLEVBQUFBLFFBQVEsQ0FBQ0MsZ0JBQVQsQ0FBMEIsU0FBMUIsRUFBcUMsVUFBQ1csS0FBRCxFQUFXO0FBQzlDLFFBQUlBLEtBQUssQ0FBQ0MsT0FBTixLQUFrQixFQUF0QixFQUEwQmQscUVBQVksQ0FBQ0ssTUFBRCxFQUFTTSxHQUFULENBQVo7QUFDM0IsR0FGRDtBQUlELENBZkQ7QUFpQkFWLFFBQVEsQ0FBQ0MsZ0JBQVQsQ0FBMEIsU0FBMUIsRUFBcUMsVUFBQ1csS0FBRCxFQUFXO0FBQzlDakIsRUFBQUEsMkRBQVUsQ0FBQ2lCLEtBQUQsQ0FBVjtBQUNBaEIsRUFBQUEsMkRBQVUsQ0FBQ2dCLEtBQUQsQ0FBVjtBQUNELENBSEQ7QUFLQVosUUFBUSxDQUFDQyxnQkFBVCxDQUEwQixPQUExQixFQUFtQyxVQUFDVyxLQUFELEVBQVc7QUFDNUNmLEVBQUFBLG9EQUFPLENBQUNlLEtBQUQsQ0FBUDtBQUNELENBRkQiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zcGlkZXJfbGluZy8uL3NyYy9pbmRleC5qcz9iNjM1Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBFeGFtcGxlIGZyb20gXCIuL3NjcmlwdHMvZXhhbXBsZVwiO1xuaW1wb3J0IHsgbW92ZVBsYXllciB9IGZyb20gXCIuL2pzL21vdmVfcGxheWVyXCI7XG5pbXBvcnQgeyBqdW1wUGxheWVyIH0gZnJvbSBcIi4vanMvanVtcF9wbGF5ZXJcIjtcbmltcG9ydCB7IGltcHVsc2UgfSBmcm9tIFwiLi9qcy9pbXB1bHNlXCI7XG5cbmltcG9ydCB7IHJlbmRlckNhbnZhcyB9IGZyb20gXCIuL2pzL21vZHVsZXMvcmVuZGVyX2NhbnZhc1wiO1xuaW1wb3J0IHsgbG9hZExldmVsT25lIH0gZnJvbSBcIi4vanMvbGV2ZWxzLmpzL2xldmVsX29uZVwiO1xuXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCAoKSA9PiB7XG4gIGxldCBtYWluID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjYW52YXMtY29udGFpbmVyXCIpO1xuICBsZXQgY2FudmFzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImNhbnZhc1wiKTtcbiAgY2FudmFzLmlubmVySFRNTCA9ICc8Y2FudmFzIGlkPVwiY2FudmFzXCIgaGVpZ2h0PVwiMzAwXCIgd2lkdGg9XCIzMDBcIj48L2NhbnZhcz4nO1xuICBtYWluLmFwcGVuZENoaWxkKGNhbnZhcyk7XG5cbiAgY2FudmFzLmhlaWdodCA9IDYwMDtcbiAgY2FudmFzLndpZHRoID0gOTAwO1xuXG4gIGNvbnN0IGN0eCA9IGNhbnZhcy5nZXRDb250ZXh0KCcyZCcpO1xuXG4gIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJrZXlkb3duXCIsIChldmVudCkgPT4ge1xuICAgIGlmIChldmVudC5rZXlDb2RlID09PSA3NikgbG9hZExldmVsT25lKGNhbnZhcywgY3R4KTtcbiAgfSk7XG5cbn0pO1xuXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwia2V5ZG93blwiLCAoZXZlbnQpID0+IHtcbiAgbW92ZVBsYXllcihldmVudCk7XG4gIGp1bXBQbGF5ZXIoZXZlbnQpO1xufSk7XG5cbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZXZlbnQpID0+IHtcbiAgaW1wdWxzZShldmVudCk7XG59KTtcbiJdLCJuYW1lcyI6WyJFeGFtcGxlIiwibW92ZVBsYXllciIsImp1bXBQbGF5ZXIiLCJpbXB1bHNlIiwicmVuZGVyQ2FudmFzIiwibG9hZExldmVsT25lIiwiZG9jdW1lbnQiLCJhZGRFdmVudExpc3RlbmVyIiwibWFpbiIsImdldEVsZW1lbnRCeUlkIiwiY2FudmFzIiwiY3JlYXRlRWxlbWVudCIsImlubmVySFRNTCIsImFwcGVuZENoaWxkIiwiaGVpZ2h0Iiwid2lkdGgiLCJjdHgiLCJnZXRDb250ZXh0IiwiZXZlbnQiLCJrZXlDb2RlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/index.js\n");

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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"jumpPlayer\": function() { return /* binding */ jumpPlayer; }\n/* harmony export */ });\nvar jumpPlayer = function jumpPlayer(event) {\n  if (event.keyCode === 32) {\n    console.log(\"jump/space\");\n  }\n};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvanMvanVtcF9wbGF5ZXIuanMuanMiLCJtYXBwaW5ncyI6Ijs7OztBQUFPLElBQU1BLFVBQVUsR0FBRyxTQUFiQSxVQUFhLENBQVNDLEtBQVQsRUFBZ0I7QUFDeEMsTUFBSUEsS0FBSyxDQUFDQyxPQUFOLEtBQWtCLEVBQXRCLEVBQTBCO0FBQ3hCQyxJQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWSxZQUFaO0FBQ0Q7QUFDRixDQUpNIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vc3BpZGVyX2xpbmcvLi9zcmMvanMvanVtcF9wbGF5ZXIuanM/ZGYyMiJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY29uc3QganVtcFBsYXllciA9IGZ1bmN0aW9uKGV2ZW50KSB7XG4gIGlmIChldmVudC5rZXlDb2RlID09PSAzMikge1xuICAgIGNvbnNvbGUubG9nKFwianVtcC9zcGFjZVwiKTtcbiAgfVxufSJdLCJuYW1lcyI6WyJqdW1wUGxheWVyIiwiZXZlbnQiLCJrZXlDb2RlIiwiY29uc29sZSIsImxvZyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/js/jump_player.js\n");

/***/ }),

/***/ "./src/js/levels.js/level_one.js":
/*!***************************************!*\
  !*** ./src/js/levels.js/level_one.js ***!
  \***************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"loadLevelOne\": function() { return /* binding */ loadLevelOne; }\n/* harmony export */ });\ndocument.addEventListener(\"keydown\", loadLevelOne);\nvar loadLevelOne = function loadLevelOne(canvas, ctx) {\n  ctx.clearRect(0, 0, canvas.width, canvas.height);\n  ctx.beginPath();\n  ctx.fillStyle = 'black';\n  ctx.fillRect(0, canvas.height * 0.75, canvas.width * 0.2, canvas.height * 0.25);\n  ctx.fillStyle = 'black';\n  ctx.fillRect(canvas.width * 0.35, canvas.height * 0.75, canvas.width * 0.3, canvas.height * 0.25);\n  ctx.fillStyle = 'black';\n  ctx.fillRect(canvas.width * 0.8, canvas.height * 0.75, canvas.width * 0.2, canvas.height * 0.25);\n  ctx.fillStyle = 'black';\n  ctx.fillRect(canvas.width * 0.2, canvas.height * 0.5, canvas.width * 0.15, 10);\n  ctx.fillStyle = 'black';\n  ctx.fillRect(canvas.width * 0.65, canvas.height * 0.5, canvas.width * 0.15, 10);\n};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvanMvbGV2ZWxzLmpzL2xldmVsX29uZS5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7O0FBQUFBLFFBQVEsQ0FBQ0MsZ0JBQVQsQ0FBMEIsU0FBMUIsRUFBcUNDLFlBQXJDO0FBRU8sSUFBTUEsWUFBWSxHQUFHLFNBQWZBLFlBQWUsQ0FBU0MsTUFBVCxFQUFpQkMsR0FBakIsRUFBc0I7QUFDaERBLEVBQUFBLEdBQUcsQ0FBQ0MsU0FBSixDQUFjLENBQWQsRUFBaUIsQ0FBakIsRUFBb0JGLE1BQU0sQ0FBQ0csS0FBM0IsRUFBa0NILE1BQU0sQ0FBQ0ksTUFBekM7QUFDQUgsRUFBQUEsR0FBRyxDQUFDSSxTQUFKO0FBRUFKLEVBQUFBLEdBQUcsQ0FBQ0ssU0FBSixHQUFnQixPQUFoQjtBQUNBTCxFQUFBQSxHQUFHLENBQUNNLFFBQUosQ0FBYSxDQUFiLEVBQWdCUCxNQUFNLENBQUNJLE1BQVAsR0FBZ0IsSUFBaEMsRUFBc0NKLE1BQU0sQ0FBQ0csS0FBUCxHQUFlLEdBQXJELEVBQTBESCxNQUFNLENBQUNJLE1BQVAsR0FBZ0IsSUFBMUU7QUFFQUgsRUFBQUEsR0FBRyxDQUFDSyxTQUFKLEdBQWdCLE9BQWhCO0FBQ0FMLEVBQUFBLEdBQUcsQ0FBQ00sUUFBSixDQUFhUCxNQUFNLENBQUNHLEtBQVAsR0FBZSxJQUE1QixFQUFrQ0gsTUFBTSxDQUFDSSxNQUFQLEdBQWdCLElBQWxELEVBQXdESixNQUFNLENBQUNHLEtBQVAsR0FBZSxHQUF2RSxFQUE0RUgsTUFBTSxDQUFDSSxNQUFQLEdBQWdCLElBQTVGO0FBRUFILEVBQUFBLEdBQUcsQ0FBQ0ssU0FBSixHQUFnQixPQUFoQjtBQUNBTCxFQUFBQSxHQUFHLENBQUNNLFFBQUosQ0FBYVAsTUFBTSxDQUFDRyxLQUFQLEdBQWUsR0FBNUIsRUFBaUNILE1BQU0sQ0FBQ0ksTUFBUCxHQUFnQixJQUFqRCxFQUF1REosTUFBTSxDQUFDRyxLQUFQLEdBQWUsR0FBdEUsRUFBMkVILE1BQU0sQ0FBQ0ksTUFBUCxHQUFnQixJQUEzRjtBQUVBSCxFQUFBQSxHQUFHLENBQUNLLFNBQUosR0FBZ0IsT0FBaEI7QUFDQUwsRUFBQUEsR0FBRyxDQUFDTSxRQUFKLENBQWFQLE1BQU0sQ0FBQ0csS0FBUCxHQUFlLEdBQTVCLEVBQWlDSCxNQUFNLENBQUNJLE1BQVAsR0FBZ0IsR0FBakQsRUFBc0RKLE1BQU0sQ0FBQ0csS0FBUCxHQUFlLElBQXJFLEVBQTJFLEVBQTNFO0FBRUFGLEVBQUFBLEdBQUcsQ0FBQ0ssU0FBSixHQUFnQixPQUFoQjtBQUNBTCxFQUFBQSxHQUFHLENBQUNNLFFBQUosQ0FBYVAsTUFBTSxDQUFDRyxLQUFQLEdBQWUsSUFBNUIsRUFBa0NILE1BQU0sQ0FBQ0ksTUFBUCxHQUFnQixHQUFsRCxFQUF1REosTUFBTSxDQUFDRyxLQUFQLEdBQWUsSUFBdEUsRUFBNEUsRUFBNUU7QUFFRCxDQW5CTSIsInNvdXJjZXMiOlsid2VicGFjazovL3NwaWRlcl9saW5nLy4vc3JjL2pzL2xldmVscy5qcy9sZXZlbF9vbmUuanM/NjUwNyJdLCJzb3VyY2VzQ29udGVudCI6WyJkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwia2V5ZG93blwiLCBsb2FkTGV2ZWxPbmUpO1xuXG5leHBvcnQgY29uc3QgbG9hZExldmVsT25lID0gZnVuY3Rpb24oY2FudmFzLCBjdHgpIHtcbiAgY3R4LmNsZWFyUmVjdCgwLCAwLCBjYW52YXMud2lkdGgsIGNhbnZhcy5oZWlnaHQpO1xuICBjdHguYmVnaW5QYXRoKCk7XG5cbiAgY3R4LmZpbGxTdHlsZSA9ICdibGFjayc7XG4gIGN0eC5maWxsUmVjdCgwLCBjYW52YXMuaGVpZ2h0ICogMC43NSwgY2FudmFzLndpZHRoICogMC4yLCBjYW52YXMuaGVpZ2h0ICogMC4yNSk7XG5cbiAgY3R4LmZpbGxTdHlsZSA9ICdibGFjayc7XG4gIGN0eC5maWxsUmVjdChjYW52YXMud2lkdGggKiAwLjM1LCBjYW52YXMuaGVpZ2h0ICogMC43NSwgY2FudmFzLndpZHRoICogMC4zLCBjYW52YXMuaGVpZ2h0ICogMC4yNSk7XG5cbiAgY3R4LmZpbGxTdHlsZSA9ICdibGFjayc7XG4gIGN0eC5maWxsUmVjdChjYW52YXMud2lkdGggKiAwLjgsIGNhbnZhcy5oZWlnaHQgKiAwLjc1LCBjYW52YXMud2lkdGggKiAwLjIsIGNhbnZhcy5oZWlnaHQgKiAwLjI1KTtcblxuICBjdHguZmlsbFN0eWxlID0gJ2JsYWNrJztcbiAgY3R4LmZpbGxSZWN0KGNhbnZhcy53aWR0aCAqIDAuMiwgY2FudmFzLmhlaWdodCAqIDAuNSwgY2FudmFzLndpZHRoICogMC4xNSwgMTApO1xuXG4gIGN0eC5maWxsU3R5bGUgPSAnYmxhY2snO1xuICBjdHguZmlsbFJlY3QoY2FudmFzLndpZHRoICogMC42NSwgY2FudmFzLmhlaWdodCAqIDAuNSwgY2FudmFzLndpZHRoICogMC4xNSwgMTApO1xuICBcbn1cblxuIl0sIm5hbWVzIjpbImRvY3VtZW50IiwiYWRkRXZlbnRMaXN0ZW5lciIsImxvYWRMZXZlbE9uZSIsImNhbnZhcyIsImN0eCIsImNsZWFyUmVjdCIsIndpZHRoIiwiaGVpZ2h0IiwiYmVnaW5QYXRoIiwiZmlsbFN0eWxlIiwiZmlsbFJlY3QiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/js/levels.js/level_one.js\n");

/***/ }),

/***/ "./src/js/modules/render_canvas.js":
/*!*****************************************!*\
  !*** ./src/js/modules/render_canvas.js ***!
  \*****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"renderCanvas\": function() { return /* binding */ renderCanvas; }\n/* harmony export */ });\nvar renderCanvas = function renderCanvas(canvas, main) {// let main = document.getElementById(\"canvas-container\");\n  // let canvas = document.createElement(\"canvas\");\n  // canvas.innerHTML = '<canvas id=\"canvas\" height=\"300\" width=\"300\"></canvas>';\n  // main.appendChild(canvas);\n  // canvas.height = 600;\n  // canvas.width = 900;\n  // const ctx = canvas.getContext('2d');\n  // ctx.clearRect(0, 0, canvas.width, canvas.height);\n};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvanMvbW9kdWxlcy9yZW5kZXJfY2FudmFzLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7QUFBTyxJQUFNQSxZQUFZLEdBQUcsU0FBZkEsWUFBZSxDQUFTQyxNQUFULEVBQWlCQyxJQUFqQixFQUF1QixDQUNqRDtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0QsQ0FaTSIsInNvdXJjZXMiOlsid2VicGFjazovL3NwaWRlcl9saW5nLy4vc3JjL2pzL21vZHVsZXMvcmVuZGVyX2NhbnZhcy5qcz9lNGNhIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjb25zdCByZW5kZXJDYW52YXMgPSBmdW5jdGlvbihjYW52YXMsIG1haW4pIHtcbiAgLy8gbGV0IG1haW4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNhbnZhcy1jb250YWluZXJcIik7XG4gIC8vIGxldCBjYW52YXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiY2FudmFzXCIpO1xuXG4gIC8vIGNhbnZhcy5pbm5lckhUTUwgPSAnPGNhbnZhcyBpZD1cImNhbnZhc1wiIGhlaWdodD1cIjMwMFwiIHdpZHRoPVwiMzAwXCI+PC9jYW52YXM+JztcbiAgLy8gbWFpbi5hcHBlbmRDaGlsZChjYW52YXMpO1xuXG4gIC8vIGNhbnZhcy5oZWlnaHQgPSA2MDA7XG4gIC8vIGNhbnZhcy53aWR0aCA9IDkwMDtcblxuICAvLyBjb25zdCBjdHggPSBjYW52YXMuZ2V0Q29udGV4dCgnMmQnKTtcbiAgLy8gY3R4LmNsZWFyUmVjdCgwLCAwLCBjYW52YXMud2lkdGgsIGNhbnZhcy5oZWlnaHQpO1xufSJdLCJuYW1lcyI6WyJyZW5kZXJDYW52YXMiLCJjYW52YXMiLCJtYWluIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/js/modules/render_canvas.js\n");

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