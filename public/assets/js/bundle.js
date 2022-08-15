/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/modules/formGeraSenha.js":
/*!**************************************!*\
  !*** ./src/modules/formGeraSenha.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _geradores__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./geradores */ "./src/modules/geradores.js");

console.log((0,_geradores__WEBPACK_IMPORTED_MODULE_0__["default"])());
var senhaGerada = document.querySelector('.senha-gerada');
var qtdChar = document.querySelector('.qtd-char');
var checkMaiusculas = document.querySelector('.chk-maiúsculas');
var checkMinusculas = document.querySelector('.chk-minúsculas');
var checkNum = document.querySelector('.chk-números');
var checkSimbolos = document.querySelector('.chk-símbolos');
var btnGeraSenha = document.querySelector('.gerarSenha');
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (function () {
  btnGeraSenha.addEventListener('click', function () {
    senhaGerada.innerHTML = gera();
  });
});

function gera() {
  var senha = (0,_geradores__WEBPACK_IMPORTED_MODULE_0__["default"])(qtdChar.value, checkMaiusculas.checked, checkMinusculas.checked, checkNum.checked, checkSimbolos.checked);
  return senha || 'Erro de seleção';
}

/***/ }),

/***/ "./src/modules/geradores.js":
/*!**********************************!*\
  !*** ./src/modules/geradores.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ geraSenha)
/* harmony export */ });
var rand = function rand(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
};

var geraMaiuscula = function geraMaiuscula() {
  return String.fromCharCode(rand(65, 91));
};

var geraMinuscula = function geraMinuscula() {
  return String.fromCharCode(rand(97, 123));
};

var geraNumero = function geraNumero() {
  return String.fromCharCode(rand(48, 58));
};

var simbolos = ',.;<>~^{}[]?/@#%&*()!`´|+='.split('');

var geraSimbolo = function geraSimbolo() {
  return simbolos[rand(0, simbolos.length)];
};

function geraSenha(qtd, Mai, Min, Num, Simb) {
  var senhaArray = [];
  qtd = Number(qtd);

  for (var i = 0; i < qtd; i++) {
    Mai && senhaArray.push(geraMaiuscula());
    Min && senhaArray.push(geraMinuscula());
    Num && senhaArray.push(geraNumero());
    Simb && senhaArray.push(geraSimbolo());
  }

  return senhaArray.join('').slice(0, qtd);
}
geraSenha(5, true, true, true, true);
console.log(geraSimbolo());

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
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_formGeraSenha__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/formGeraSenha */ "./src/modules/formGeraSenha.js");

(0,_modules_formGeraSenha__WEBPACK_IMPORTED_MODULE_0__["default"])();
})();

/******/ })()
;
//# sourceMappingURL=bundle.js.map