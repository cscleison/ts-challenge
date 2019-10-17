/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./settings/game.json":
/*!****************************!*\
  !*** ./settings/game.json ***!
  \****************************/
/*! exports provided: xLength, yLength, startPosition, direction, mines, exit, default */
/***/ (function(module) {

eval("module.exports = JSON.parse(\"{\\\"xLength\\\":5,\\\"yLength\\\":4,\\\"startPosition\\\":{\\\"x\\\":0,\\\"y\\\":1},\\\"direction\\\":0,\\\"mines\\\":[{\\\"x\\\":1,\\\"y\\\":1},{\\\"x\\\":3,\\\"y\\\":3}],\\\"exit\\\":{\\\"x\\\":4,\\\"y\\\":3}}\");\n\n//# sourceURL=webpack:///./settings/game.json?");

/***/ }),

/***/ "./settings/moves.json":
/*!*****************************!*\
  !*** ./settings/moves.json ***!
  \*****************************/
/*! exports provided: outOfBounds, explode, fullRotationSuccess, hitMineLeftToExit, danger, default */
/***/ (function(module) {

eval("module.exports = JSON.parse(\"{\\\"outOfBounds\\\":[\\\"m\\\",\\\"m\\\"],\\\"explode\\\":[\\\"m\\\",\\\"r\\\",\\\"m\\\",\\\"r\\\",\\\"m\\\",\\\"m\\\",\\\"m\\\"],\\\"fullRotationSuccess\\\":[\\\"r\\\",\\\"r\\\",\\\"r\\\",\\\"r\\\",\\\"m\\\",\\\"r\\\",\\\"m\\\",\\\"m\\\",\\\"m\\\",\\\"m\\\",\\\"r\\\",\\\"m\\\",\\\"m\\\",\\\"m\\\",\\\"m\\\"],\\\"hitMineLeftToExit\\\":[\\\"m\\\",\\\"r\\\",\\\"m\\\",\\\"m\\\",\\\"m\\\",\\\"r\\\",\\\"m\\\",\\\"m\\\",\\\"m\\\",\\\"r\\\",\\\"m\\\"],\\\"danger\\\":[\\\"m\\\",\\\"r\\\",\\\"m\\\"]}\");\n\n//# sourceURL=webpack:///./settings/moves.json?");

/***/ }),

/***/ "./src/board.ts":
/*!**********************!*\
  !*** ./src/board.ts ***!
  \**********************/
/*! exports provided: ACTION_EMOJIS, runAction, checkTurtle, isOutOfBounds */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ACTION_EMOJIS\", function() { return ACTION_EMOJIS; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"runAction\", function() { return runAction; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"checkTurtle\", function() { return checkTurtle; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"isOutOfBounds\", function() { return isOutOfBounds; });\n/* harmony import */ var _navigation__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./navigation */ \"./src/navigation.ts\");\n\r\nconst ACTION_EMOJIS = {\r\n    m: \"🏃\",\r\n    r: \"↩️\"\r\n};\r\nconst runAction = (action, turtle) => action === \"m\"\r\n    ? { ...turtle, tile: Object(_navigation__WEBPACK_IMPORTED_MODULE_0__[\"move\"])(turtle.tile, turtle.direction) }\r\n    : { ...turtle, direction: Object(_navigation__WEBPACK_IMPORTED_MODULE_0__[\"rotate\"])(turtle.direction) };\r\nconst checkTurtle = (turtle, board) => Object(_navigation__WEBPACK_IMPORTED_MODULE_0__[\"isSameTile\"])(turtle.tile, board.exit)\r\n    ? \"success\"\r\n    : isOutOfBounds(turtle.tile, board)\r\n        ? \"outOfBounds\"\r\n        : Object(_navigation__WEBPACK_IMPORTED_MODULE_0__[\"isOnTiles\"])(turtle.tile, board.mines)\r\n            ? \"boom\"\r\n            : \"danger\";\r\nconst isOutOfBounds = ({ x, y }, { xLength, yLength }) => x < 0 || y < 0 || x >= xLength || y >= yLength;\r\n\n\n//# sourceURL=webpack:///./src/board.ts?");

/***/ }),

/***/ "./src/game.ts":
/*!*********************!*\
  !*** ./src/game.ts ***!
  \*********************/
/*! exports provided: runSequence */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"runSequence\", function() { return runSequence; });\n/* harmony import */ var _board__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./board */ \"./src/board.ts\");\n\r\nconst runSequence = (sequence, turtle, board) => {\r\n    let donatello = turtle;\r\n    let result = \"danger\";\r\n    for (let action of sequence) {\r\n        donatello = Object(_board__WEBPACK_IMPORTED_MODULE_0__[\"runAction\"])(action, donatello);\r\n        result = Object(_board__WEBPACK_IMPORTED_MODULE_0__[\"checkTurtle\"])(donatello, board);\r\n        if (result !== \"danger\") {\r\n            break;\r\n        }\r\n    }\r\n    return describe(result);\r\n};\r\nconst describe = (result) => result === \"success\"\r\n    ? \"Success! 🐢🆓\"\r\n    : result === \"boom\"\r\n        ? \"Turtle exploded 💣\"\r\n        : result === \"outOfBounds\"\r\n            ? \"Out of bounds 🚀\"\r\n            : \"Turtle is still in danger 😱\";\r\n\n\n//# sourceURL=webpack:///./src/game.ts?");

/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _board__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./board */ \"./src/board.ts\");\n/* harmony import */ var _game__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./game */ \"./src/game.ts\");\n/* harmony import */ var _load_game__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./load-game */ \"./src/load-game.ts\");\n/* harmony import */ var _load_moves__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./load-moves */ \"./src/load-moves.ts\");\n\r\n\r\n\r\n\r\n// ui\r\nconst body = document.getElementsByTagName(\"body\")[0];\r\nconst table = document.getElementById(\"sequences\");\r\nconst renderRow = (sequence, result) => {\r\n    const row = table.insertRow(-1);\r\n    row.insertCell(0).innerHTML = sequence.map(a => _board__WEBPACK_IMPORTED_MODULE_0__[\"ACTION_EMOJIS\"][a]).join(\"\");\r\n    row.insertCell(1).innerHTML = result;\r\n};\r\nconst renderError = (message) => {\r\n    table.remove();\r\n    const el = document.createElement(\"div\");\r\n    el.classList.add(\"error\");\r\n    el.innerHTML = `💀 Error: ${message}`;\r\n    body.appendChild(el);\r\n};\r\n// app\r\nconst run = () => {\r\n    try {\r\n        const { turtle, board } = Object(_load_game__WEBPACK_IMPORTED_MODULE_2__[\"loadGame\"])();\r\n        const moves = Object(_load_moves__WEBPACK_IMPORTED_MODULE_3__[\"loadMoves\"])();\r\n        moves.forEach(sequence => renderRow(sequence, Object(_game__WEBPACK_IMPORTED_MODULE_1__[\"runSequence\"])(sequence, turtle, board)));\r\n    }\r\n    catch (e) {\r\n        renderError(e.message);\r\n    }\r\n};\r\nrun();\r\n\n\n//# sourceURL=webpack:///./src/index.ts?");

/***/ }),

/***/ "./src/load-game.ts":
/*!**************************!*\
  !*** ./src/load-game.ts ***!
  \**************************/
/*! exports provided: loadGame */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"loadGame\", function() { return loadGame; });\n/* harmony import */ var _settings_game_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../settings/game.json */ \"./settings/game.json\");\nvar _settings_game_json__WEBPACK_IMPORTED_MODULE_0___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../settings/game.json */ \"./settings/game.json\", 1);\n/* harmony import */ var _board__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./board */ \"./src/board.ts\");\n/* harmony import */ var _navigation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./navigation */ \"./src/navigation.ts\");\n\r\n\r\n\r\nconst parseTile = (tile) => Boolean(tile && tile.x >= 0 && tile.y >= 0);\r\nconst getBoard = ({ xLength, yLength, exit, mines }) => {\r\n    if (!Boolean(xLength > 0 &&\r\n        yLength > 0 &&\r\n        parseTile(exit) &&\r\n        mines &&\r\n        mines.length &&\r\n        mines.every(parseTile))) {\r\n        throw new Error(\"Board settings are malformed\");\r\n    }\r\n    return {\r\n        xLength,\r\n        yLength,\r\n        exit,\r\n        mines\r\n    };\r\n};\r\nconst getTurtle = ({ direction, startPosition }) => {\r\n    if (!Boolean(direction >= 0 && direction < 4 && parseTile(startPosition))) {\r\n        throw new Error(\"Turtle settings are malformed\");\r\n    }\r\n    return {\r\n        direction,\r\n        tile: startPosition\r\n    };\r\n};\r\nconst minesAreValid = (board) => board.mines.every(m => !Object(_board__WEBPACK_IMPORTED_MODULE_1__[\"isOutOfBounds\"])(m, board));\r\nconst startPositionIsValid = ({ tile }, board) => !Object(_board__WEBPACK_IMPORTED_MODULE_1__[\"isOutOfBounds\"])(tile, board) &&\r\n    !Object(_navigation__WEBPACK_IMPORTED_MODULE_2__[\"isOnTiles\"])(tile, board.mines) &&\r\n    !Object(_navigation__WEBPACK_IMPORTED_MODULE_2__[\"isSameTile\"])(tile, board.exit);\r\nconst loadGame = () => {\r\n    if (!_settings_game_json__WEBPACK_IMPORTED_MODULE_0__) {\r\n        throw new Error(\"Game settings not found\");\r\n    }\r\n    const board = getBoard(_settings_game_json__WEBPACK_IMPORTED_MODULE_0__);\r\n    const turtle = getTurtle(_settings_game_json__WEBPACK_IMPORTED_MODULE_0__);\r\n    if (!minesAreValid(board)) {\r\n        throw new Error(\"Mines are placed out of the board\");\r\n    }\r\n    if (!startPositionIsValid(turtle, board)) {\r\n        throw new Error(\"Start position is invalid\");\r\n    }\r\n    return { turtle, board };\r\n};\r\n\n\n//# sourceURL=webpack:///./src/load-game.ts?");

/***/ }),

/***/ "./src/load-moves.ts":
/*!***************************!*\
  !*** ./src/load-moves.ts ***!
  \***************************/
/*! exports provided: loadMoves */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"loadMoves\", function() { return loadMoves; });\n/* harmony import */ var _settings_moves_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../settings/moves.json */ \"./settings/moves.json\");\nvar _settings_moves_json__WEBPACK_IMPORTED_MODULE_0___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../settings/moves.json */ \"./settings/moves.json\", 1);\n\r\nconst isValid = (sequence) => Boolean(sequence && sequence.length && sequence.every(a => a === \"m\" || a === \"r\"));\r\nconst loadMoves = () => {\r\n    if (!_settings_moves_json__WEBPACK_IMPORTED_MODULE_0__) {\r\n        throw new Error(\"Moves settings not found\");\r\n    }\r\n    const moves = Object.values(_settings_moves_json__WEBPACK_IMPORTED_MODULE_0__);\r\n    if (!moves || !moves.every(isValid)) {\r\n        throw new Error(\"Moves settings are malformed\");\r\n    }\r\n    return moves;\r\n};\r\n\n\n//# sourceURL=webpack:///./src/load-moves.ts?");

/***/ }),

/***/ "./src/navigation.ts":
/*!***************************!*\
  !*** ./src/navigation.ts ***!
  \***************************/
/*! exports provided: DIRECTIONS, move, rotate, isSameTile, isOnTiles */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"DIRECTIONS\", function() { return DIRECTIONS; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"move\", function() { return move; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"rotate\", function() { return rotate; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"isSameTile\", function() { return isSameTile; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"isOnTiles\", function() { return isOnTiles; });\nconst DIRECTIONS = {\r\n    North: 0,\r\n    East: 1,\r\n    South: 2,\r\n    West: 3\r\n};\r\nconst move = ({ x, y }, direction) => direction === DIRECTIONS.North\r\n    ? { x, y: y - 1 }\r\n    : direction === DIRECTIONS.East\r\n        ? { y, x: x + 1 }\r\n        : direction === DIRECTIONS.South\r\n            ? { x, y: y + 1 }\r\n            : { y, x: x - 1 };\r\nconst rotate = (direction) => direction >= DIRECTIONS.West ? DIRECTIONS.North : direction + 1;\r\nconst isSameTile = (tile1, tile2) => tile1.x === tile2.x && tile1.y === tile2.y;\r\nconst isOnTiles = (tile, tiles) => tiles.some(t => isSameTile(t, tile));\r\n\n\n//# sourceURL=webpack:///./src/navigation.ts?");

/***/ })

/******/ });