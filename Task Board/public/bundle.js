/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./client/Index.js":
/*!*************************!*\
  !*** ./client/Index.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _layout_layout__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./layout/layout */ \"./client/layout/layout.js\");\n\n(0,_layout_layout__WEBPACK_IMPORTED_MODULE_0__.validacion)();\n\n//# sourceURL=webpack://task-board/./client/Index.js?");

/***/ }),

/***/ "./client/layout/APIs/login/login.js":
/*!*******************************************!*\
  !*** ./client/layout/APIs/login/login.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _users_acceder__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../users/acceder */ \"./client/layout/APIs/users/acceder.js\");\n/* harmony import */ var _register__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./register */ \"./client/layout/APIs/login/register.js\");\n\n\nconst sacarLogin = () => {\n  const conteneorTotal = document.createElement('div');\n  conteneorTotal.classList.add('login');\n  conteneorTotal.classList.add('fit-content');\n  conteneorTotal.classList.add('container');\n  conteneorTotal.classList.add('position-absolute');\n  conteneorTotal.classList.add('d-print-table');\n  conteneorTotal.classList.add('margen');\n  conteneorTotal.id = 'conteneorTotal';\n  document.getElementById('login').appendChild(conteneorTotal);\n  const listaSeparadora = document.createElement('ul');\n  listaSeparadora.classList.add('list-group');\n  listaSeparadora.classList.add('fit-content');\n  listaSeparadora.id = 'listaSeparadora';\n  document.getElementById('conteneorTotal').appendChild(listaSeparadora);\n  for (let i = 0; i < 5; i++) {\n    const contenedorInputs = document.createElement('li');\n    contenedorInputs.classList.add('list-group-item');\n    contenedorInputs.id = 'contenedorInputs' + i;\n    if (i === 0) {\n      contenedorInputs.classList.add('active');\n      contenedorInputs.classList.add('text-center');\n      contenedorInputs.textContent = 'Accede a tu cuenta';\n    }\n    ;\n    if (i > 2) {\n      contenedorInputs.classList.add('container');\n    }\n    ;\n    document.getElementById('listaSeparadora').appendChild(contenedorInputs);\n  }\n  ;\n  for (let i = 0; i < 2; i++) {\n    const inputs = document.createElement('input');\n    inputs.classList.add('text-center');\n    inputs.classList.add('inputRequire');\n    inputs.setAttribute('required', '');\n    if (i === 0) {\n      inputs.type = 'text';\n      inputs.placeholder = '@UserName';\n      inputs.id = 'userName';\n      document.getElementById('contenedorInputs1').appendChild(inputs);\n    }\n    if (i === 1) {\n      inputs.type = 'password';\n      inputs.placeholder = 'Password';\n      inputs.id = 'Password';\n      document.getElementById('contenedorInputs2').appendChild(inputs);\n    }\n  }\n  const botonAcceder = document.createElement('button');\n  botonAcceder.classList.add('btn');\n  botonAcceder.classList.add('btn-dark');\n  botonAcceder.classList.add('border');\n  botonAcceder.classList.add('border-dark');\n  botonAcceder.classList.add('container');\n  botonAcceder.type = \"submit\";\n  botonAcceder.textContent = \"Acceder\";\n  botonAcceder.id = \"botonAcceder\";\n  document.getElementById('contenedorInputs3').appendChild(botonAcceder);\n  const h5 = document.createElement('h5');\n  h5.classList.add('text-center');\n  h5.classList.add('loginpsize');\n  h5.textContent = 'No posees una cuenta?';\n  document.getElementById('contenedorInputs4').appendChild(h5);\n  const botonRegistrarse = document.createElement('button');\n  botonRegistrarse.classList.add('btn');\n  botonRegistrarse.classList.add('btn-light');\n  botonRegistrarse.classList.add('border');\n  botonRegistrarse.classList.add('border-dark');\n  botonRegistrarse.classList.add('fit-content');\n  botonRegistrarse.classList.add('container');\n  botonRegistrarse.id = 'botonRegistrarse';\n  botonRegistrarse.type = 'button';\n  botonRegistrarse.textContent = 'Registrarse';\n  document.getElementById('contenedorInputs4').appendChild(botonRegistrarse);\n  const inputs = document.querySelectorAll('.inputRequire');\n  const bacceder = document.getElementById('botonAcceder');\n  const checkInputs = () => {\n    const allFilled = Array.from(inputs).every(input => input.value.trim() !== '');\n    bacceder.disabled = !allFilled;\n  };\n  checkInputs();\n  inputs.forEach(input => {\n    input.addEventListener('input', checkInputs);\n  });\n  bacceder.addEventListener('click', async () => {\n    const userName = document.getElementById('userName');\n    const password = document.getElementById('password');\n    await (0,_users_acceder__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(userName, password);\n    const borrar = document.getElementById('conteneorTotal');\n    borrar.remove();\n    return board, user;\n  });\n  const registrarseInputs = document.getElementById('botonRegistrarse');\n  registrarseInputs.addEventListener('click', () => {\n    (0,_register__WEBPACK_IMPORTED_MODULE_1__.sacarRegistrarse)();\n  });\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (sacarLogin);\n\n//# sourceURL=webpack://task-board/./client/layout/APIs/login/login.js?");

/***/ }),

/***/ "./client/layout/APIs/login/register.js":
/*!**********************************************!*\
  !*** ./client/layout/APIs/login/register.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   sacarRegistrarse: () => (/* binding */ sacarRegistrarse)\n/* harmony export */ });\n/* harmony import */ var _login__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./login */ \"./client/layout/APIs/login/login.js\");\n\nconst sacarRegistrarse = () => {\n  const conteneorTotalLogin = document.getElementById('conteneorTotal');\n  conteneorTotalLogin.remove();\n  const conteneorTotal = document.createElement('div');\n  conteneorTotal.classList.add('login');\n  conteneorTotal.classList.add('fit-content');\n  conteneorTotal.classList.add('container');\n  conteneorTotal.classList.add('position-absolute');\n  conteneorTotal.classList.add('d-print-table');\n  conteneorTotal.classList.add('margen');\n  conteneorTotal.id = 'conteneorTotal';\n  document.getElementById('login').appendChild(conteneorTotal);\n  const listaSeparadora = document.createElement('ul');\n  listaSeparadora.classList.add('list-group');\n  listaSeparadora.classList.add('fit-content');\n  listaSeparadora.id = 'listaSeparadora';\n  document.getElementById('conteneorTotal').appendChild(listaSeparadora);\n  for (let i = 0; i < 8; i++) {\n    const contenedorInputs = document.createElement('li');\n    contenedorInputs.classList.add('list-group-item');\n    contenedorInputs.id = 'contenedorInputs' + i;\n    if (i === 0) {\n      contenedorInputs.classList.add('active');\n      contenedorInputs.classList.add('text-center');\n      contenedorInputs.textContent = 'Crea tu cuenta';\n    }\n    ;\n    if (i > 5) {\n      contenedorInputs.classList.add('container');\n    }\n    ;\n    document.getElementById('listaSeparadora').appendChild(contenedorInputs);\n  }\n  ;\n  for (let i = 0; i < 5; i++) {\n    const inputs = document.createElement('input');\n    inputs.classList.add('text-center');\n    inputs.classList.add('inputRequire');\n    inputs.setAttribute('required', '');\n    if (i === 0) {\n      inputs.type = 'text';\n      inputs.placeholder = '@UserName';\n      inputs.id = 'userName';\n      document.getElementById('contenedorInputs1').appendChild(inputs);\n    }\n    if (i === 1) {\n      inputs.type = 'password';\n      inputs.placeholder = 'Password';\n      inputs.id = 'Password';\n      document.getElementById('contenedorInputs2').appendChild(inputs);\n    }\n    if (i === 2) {\n      inputs.type = 'string';\n      inputs.placeholder = 'Your Name';\n      inputs.id = 'YourLastNameName';\n      document.getElementById('contenedorInputs3').appendChild(inputs);\n    }\n    if (i === 3) {\n      inputs.type = 'string';\n      inputs.placeholder = 'Your Last Name';\n      inputs.id = 'YourLastName';\n      document.getElementById('contenedorInputs4').appendChild(inputs);\n    }\n    if (i === 4) {\n      inputs.type = 'email';\n      inputs.placeholder = 'expmple@email.com';\n      inputs.id = 'email';\n      document.getElementById('contenedorInputs5').appendChild(inputs);\n    }\n  }\n  const botonRegistrarse = document.createElement('button');\n  botonRegistrarse.classList.add('btn');\n  botonRegistrarse.classList.add('btn-dark');\n  botonRegistrarse.classList.add('border');\n  botonRegistrarse.classList.add('border-dark');\n  botonRegistrarse.classList.add('container');\n  botonRegistrarse.type = \"submit\";\n  botonRegistrarse.textContent = \"Registrarse\";\n  botonRegistrarse.id = \"botonRegistrarse\";\n  document.getElementById('contenedorInputs6').appendChild(botonRegistrarse);\n  const h5 = document.createElement('h5');\n  h5.classList.add('text-center');\n  h5.classList.add('loginpsize');\n  h5.textContent = 'Ya posees una cuenta?';\n  document.getElementById('contenedorInputs7').appendChild(h5);\n  const botonLogearse = document.createElement('button');\n  botonLogearse.classList.add('btn');\n  botonLogearse.classList.add('btn-light');\n  botonLogearse.classList.add('border');\n  botonLogearse.classList.add('border-dark');\n  botonLogearse.classList.add('fit-content');\n  botonLogearse.classList.add('container');\n  botonLogearse.id = 'botonLogearse';\n  botonLogearse.type = 'button';\n  botonLogearse.textContent = 'Logearse';\n  document.getElementById('contenedorInputs7').appendChild(botonLogearse);\n  const inputs = document.querySelectorAll('.inputRequire');\n  const bRegistrarse = document.getElementById('botonRegistrarse');\n  const checkInputs = () => {\n    const allFilled = Array.from(inputs).every(input => input.value.trim() !== '');\n    bRegistrarse.disabled = !allFilled;\n  };\n  checkInputs();\n\n  // bRegistrarse.addEventListener('click',)\n\n  const bLogearse = document.getElementById('botonLogearse');\n  bLogearse.addEventListener('click', async () => {\n    const conteneorTotalRegistro = document.getElementById('conteneorTotal');\n    conteneorTotalRegistro.remove();\n    (0,_login__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n  });\n};\n\n\n//# sourceURL=webpack://task-board/./client/layout/APIs/login/register.js?");

/***/ }),

/***/ "./client/layout/APIs/users/acceder.js":
/*!*********************************************!*\
  !*** ./client/layout/APIs/users/acceder.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst acceder = async (userName, password) => {\n  try {\n    const response = await fetch('tp://localhost:3000/user/myuser', {\n      method: 'POST',\n      headers: {\n        'Content-Type': 'application/json'\n      },\n      body: JSON.stringify({\n        userName,\n        password\n      })\n    });\n    if (response.ok) {\n      const user = response.json();\n      return user, console.log('se pudo generar el usuario ' + user.userName);\n    } else {\n      return console.log('error al obtener el Usuario', response.statusText);\n    }\n  } catch (error) {\n    console.log('Error en la solicitud', error);\n  }\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (acceder);\n\n//# sourceURL=webpack://task-board/./client/layout/APIs/users/acceder.js?");

/***/ }),

/***/ "./client/layout/layout.js":
/*!*********************************!*\
  !*** ./client/layout/layout.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   validacion: () => (/* binding */ validacion)\n/* harmony export */ });\n/* harmony import */ var _APIs_login_login__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./APIs/login/login */ \"./client/layout/APIs/login/login.js\");\n\nconst validacion = () => {\n  (0,_APIs_login_login__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n};\n\n\n//# sourceURL=webpack://task-board/./client/layout/layout.js?");

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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./client/Index.js");
/******/ 	
/******/ })()
;