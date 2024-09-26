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
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _layout_layout__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./layout/layout */ \"./client/layout/layout.js\");\n\nawait (0,_layout_layout__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } }, 1);\n\n//# sourceURL=webpack://task-board/./client/Index.js?");

/***/ }),

/***/ "./client/layout/APIs/board/layoutBoard/header.js":
/*!********************************************************!*\
  !*** ./client/layout/APIs/board/layoutBoard/header.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _login_login__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../login/login */ \"./client/layout/APIs/login/login.js\");\n\nconst header = userId => {\n  const contenedor = document.createElement('div');\n  contenedor.classList.add('d-flex');\n  contenedor.classList.add('mt-2');\n  contenedor.classList.add('container');\n  contenedor.classList.add('sections');\n  contenedor.innerHTML = `\n                <div class=\"d-flex text-center\">\n                    <button id=\"botonCerrarSecion\" class=\"btn btn-light rounded-circle titlado my-2\" style=\"width:0.7rem; height:1.4rem; background-color: #97A3B6;\"></button>\n                    <h6 class=\"my-2 ml-1\">Cerrar Secion</h6>\n                </div>\n                    <div class=\" titlado\" id=\"MYTASKBOARD\">\n                        <h2 >My Task Boarad</h4>\n                </div>\n        `;\n  document.getElementById('header').appendChild(contenedor);\n  const cerrarSecion = document.getElementById('botonCerrarSecion');\n  cerrarSecion.addEventListener('click', () => {\n    const sections = document.querySelectorAll('.sections');\n    sections.forEach(section => {\n      section.remove();\n    });\n    userId = null;\n    return (0,_login_login__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n  });\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (header);\n\n//# sourceURL=webpack://task-board/./client/layout/APIs/board/layoutBoard/header.js?");

/***/ }),

/***/ "./client/layout/APIs/board/layoutBoard/sectionPreview.js":
/*!****************************************************************!*\
  !*** ./client/layout/APIs/board/layoutBoard/sectionPreview.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _tasks_tasksPreviews__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../tasks/tasksPreviews */ \"./client/layout/APIs/tasks/tasksPreviews.js\");\n/* harmony import */ var _sectionView__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sectionView */ \"./client/layout/APIs/board/layoutBoard/sectionView.js\");\n\n\nconst sectionPreview = async userId => {\n  const sectionPreview = document.createElement('section');\n  sectionPreview.classList.add('sections');\n  sectionPreview.id = 'tasks';\n  sectionPreview.innerHTML = `\n            <div class=\"previuwTaskConteiner AgregarTask\" id=\"buttonAgregarTask\">\n                <button id=\"AgregarTask\" type=\"button\">+</button> \n                <div class=\"titlePreviuw\">Agregar Task Nueva</div>\n            </div>\n        `;\n  document.getElementById('main').appendChild(sectionPreview);\n  (0,_tasks_tasksPreviews__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(userId);\n  const buttonAgregarTask = document.getElementById('buttonAgregarTask');\n  buttonAgregarTask.addEventListener('click', async () => {\n    let view = document.getElementById('board');\n    if (view) {\n      view.remove();\n    }\n    ;\n    const task = {\n      title: '',\n      description: '',\n      type: '',\n      status: 'Pending'\n    };\n    return await (0,_sectionView__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(task, userId);\n  });\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (sectionPreview);\n\n//# sourceURL=webpack://task-board/./client/layout/APIs/board/layoutBoard/sectionPreview.js?");

/***/ }),

/***/ "./client/layout/APIs/board/layoutBoard/sectionView.js":
/*!*************************************************************!*\
  !*** ./client/layout/APIs/board/layoutBoard/sectionView.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _tasks_actualizarTask__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../tasks/actualizarTask */ \"./client/layout/APIs/tasks/actualizarTask.js\");\n/* harmony import */ var _tasks_taskCreate__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../tasks/taskCreate */ \"./client/layout/APIs/tasks/taskCreate.js\");\n/* harmony import */ var _tasks_taskDelete__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../tasks/taskDelete */ \"./client/layout/APIs/tasks/taskDelete.js\");\n/* harmony import */ var _tasks_thisTask__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../tasks/thisTask */ \"./client/layout/APIs/tasks/thisTask.js\");\n\n\n\n\nconst sectionView = async (taskId, userId) => {\n  console.log(userId);\n  const task = (0,_tasks_thisTask__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(taskId);\n  let type = task.type;\n  let title = task.title || '';\n  let description = task.description || '';\n  let status = task.status;\n  if (!type) {\n    type = [];\n  }\n  if (!status) {\n    status = 'Pending';\n  }\n  ;\n  const sectionView = document.createElement('section');\n  sectionView.classList.add('sections');\n  sectionView.id = 'board';\n  sectionView.innerHTML = `\n            <div class=\"contenedorTile\">\n                    <input type=\"text\" name=\"\" class=\"titleTaskBoard Mysinputs\" placeholder=\"Name of your task\" id=\"titleOfTask\" value=\"${title}\">\n                    </div>\n                    <div class=\"contenedorDescripcion\">\n                        <textarea type=\"text\" class=\"TaskDescriptiom Mysinputs\" placeholder=\"Describe your task\" id=\"descriptionOfTask\">${description}</textarea>\n                    </div>\n                    <div class=\"contenedortypeTask\">\n                        <div class=\"type\"><button type=\"button\" class=\"buttonType\" id=\"Work\" value=\"work\"><img src=\"https://cdn-icons-png.flaticon.com/512/4360/4360026.png\"  class=\"imgType\"></button></div>\n                        <div class=\"type\"><button type=\"button\" class=\"buttonType\" id=\"relax\" value=\"relax\"><img src=\"https://cdn1.iconfinder.com/data/icons/restaurants-and-food/115/coffee-512.png\"  class=\"imgType\"></div>\n                        <div class=\"type\"><button type=\"button\" class=\"buttonType\" id=\"study\" value=\"study\"><img src=\"https://cdn-icons-png.flaticon.com/512/167/167756.png\"  class=\"imgType\"></button></div>\n                        <div class=\"type\"><button type=\"button\" class=\"buttonType\" id=\"outSide\" value=\"outSide\"><img src=\"https://cdn-icons-png.flaticon.com/512/2820/2820724.png\"  class=\"imgType\"></button></div>\n                        <div class=\"type\"><button type=\"button\" class=\"buttonType\" id=\"train\" value=\"train\"><img src=\"https://cdn-icons-png.flaticon.com/512/2780/2780119.png\"  class=\"imgType\"></button></div>\n                        <div class=\"type\"><button type=\"button\" class=\"buttonType\" id=\"time\" value=\"time\"><img src=\"https://cdn-icons-png.flaticon.com/512/4363/4363401.png\" class=\"imgType\"></button></div>\n                        \n                    </div>\n\n                    <div class=\"contenedorStatusDelete\">\n                        <div class=\"StatusBoard\" id=\"StatusBoard\">\n                            <div class=\"CompletedInProgres\">\n                                <button type=\"button\" class=\"statusCheck Completed\" value=\"Completed\">Completed</button>\n                                <button type=\"button\" class=\"statusCheck InProgres\" value=\"InProgres\">In Progres</button>\n                            </div>\n                            <div class=\"pendingwontDo\">\n                                <button type=\"button\" class=\"statusCheck Pending\" value=\"Pending\">Pending</button>\n                                <button type=\"button\" class=\"statusCheck WontDo\" value=\"WontDo\">Wont'Do</button>\n                            </div>\n                            \n                        </div>\n                        <div class=\"SubmitDelete\" id=\"submicion\">\n                            <div >\n                                <img src=\"https://icones.pro/wp-content/uploads/2021/04/nouvelle-icone-grise.png\" alt=\"\" style=\"width: 100%; height: 100%;\">\n                            </div>\n                        </div>\n                        <div class=\"SubmitDelete\" id=\"deletcion\">\n                            <div >\n                                <img src=\"https://cdn-icons-png.flaticon.com/512/216/216658.png\" alt=\"\" style=\"width: 100%; height: 100%;\">\n                            </div>\n                        </div>\n                    </div>\n        `;\n  document.getElementById('main').appendChild(sectionView);\n  const updateStatusView = newStatus => {\n    const statusBoard = document.getElementById('StatusBoard');\n    const board = document.getElementById('board');\n    ['Pending', 'WontDo', 'InProgres', 'Completed'].forEach(statusClass => {\n      statusBoard.classList.remove(statusClass);\n      board.classList.remove(statusClass);\n    });\n    statusBoard.classList.add(newStatus);\n    board.classList.add(newStatus);\n  };\n  updateStatusView(status);\n  const buttonStatus = document.querySelectorAll('.statusCheck');\n  buttonStatus.forEach(button => {\n    button.addEventListener('click', () => {\n      status = button.value;\n      updateStatusView(status);\n    });\n  });\n  for (let i = 0; i < type.length; i++) {\n    document.getElementById(status[i]).classList.add('shadowin');\n  }\n  const buttonType = document.querySelectorAll('.buttonType');\n  buttonType.forEach(boton => {\n    boton.addEventListener('click', () => {\n      let value = boton.value;\n      const index = type.indexOf(value);\n      if (index !== -1) {\n        type.splice(index, 1);\n        boton.classList.remove('shadowin');\n      } else {\n        type.push(value);\n        boton.classList.add('shadowin');\n      }\n    });\n  });\n  function debounce(func, wait) {\n    let timeout;\n    return function (...args) {\n      clearTimeout(timeout);\n      timeout = setTimeout(() => func.apply(this, args), wait);\n    };\n  }\n  ;\n  const buttonAdd = document.getElementById('submicion');\n  buttonAdd.addEventListener('click', debounce(async () => {\n    const newtitle = document.getElementById('titleOfTask').value;\n    if (title !== newtitle) {\n      title = newtitle;\n    }\n    const newdescription = document.getElementById('descriptionOfTask').value;\n    if (description !== newdescription) {\n      description = newdescription;\n    }\n    ;\n    const newTask = {\n      status,\n      title,\n      type,\n      description\n    };\n    if (!newTask._id) {\n      return await (0,_tasks_taskCreate__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(newTask, userId);\n    }\n    ;\n    if (newTask._id) {\n      return await (0,_tasks_actualizarTask__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(newTask, taskId);\n    }\n  }), 5000);\n  const buttonDelete = document.getElementById('deletcion');\n  buttonDelete.addEventListener('click', debounce(async () => {\n    const confirmacion = confirm('¡Atencion! Esta accion es irreversible, los datos de tu task no se podran recuperar. ¿Deseas eliminarlo?');\n    if (confirmacion) {\n      await (0,_tasks_taskDelete__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(taskId);\n      return;\n    }\n  }, 5000));\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (sectionView);\n\n//# sourceURL=webpack://task-board/./client/layout/APIs/board/layoutBoard/sectionView.js?");

/***/ }),

/***/ "./client/layout/APIs/board/mainBoard.js":
/*!***********************************************!*\
  !*** ./client/layout/APIs/board/mainBoard.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   mainBoard: () => (/* binding */ mainBoard)\n/* harmony export */ });\n/* harmony import */ var _layoutBoard_header__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./layoutBoard/header */ \"./client/layout/APIs/board/layoutBoard/header.js\");\n/* harmony import */ var _layoutBoard_sectionPreview__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./layoutBoard/sectionPreview */ \"./client/layout/APIs/board/layoutBoard/sectionPreview.js\");\n\n\nconst mainBoard = async user => {\n  const userId = user._id;\n  await (0,_layoutBoard_header__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(user);\n  await (0,_layoutBoard_sectionPreview__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(userId);\n};\n\n\n//# sourceURL=webpack://task-board/./client/layout/APIs/board/mainBoard.js?");

/***/ }),

/***/ "./client/layout/APIs/login/login.js":
/*!*******************************************!*\
  !*** ./client/layout/APIs/login/login.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _board_mainBoard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../board/mainBoard */ \"./client/layout/APIs/board/mainBoard.js\");\n/* harmony import */ var _users_acceder__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../users/acceder */ \"./client/layout/APIs/users/acceder.js\");\n/* harmony import */ var _register__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./register */ \"./client/layout/APIs/login/register.js\");\n\n\n\nconst sacarLogin = async () => {\n  const form = document.getElementById('login');\n  form.addEventListener('click', event => {\n    event.preventDefault();\n  });\n  const conteneorTotal = document.createElement('div');\n  conteneorTotal.classList.add('login');\n  conteneorTotal.classList.add('fit-content');\n  conteneorTotal.classList.add('container');\n  conteneorTotal.classList.add('position-absolute');\n  conteneorTotal.classList.add('d-print-table');\n  conteneorTotal.classList.add('margen');\n  conteneorTotal.id = 'conteneorTotal';\n  document.getElementById('login').appendChild(conteneorTotal);\n  const listaSeparadora = document.createElement('ul');\n  listaSeparadora.classList.add('list-group');\n  listaSeparadora.classList.add('fit-content');\n  listaSeparadora.id = 'listaSeparadora';\n  document.getElementById('conteneorTotal').appendChild(listaSeparadora);\n  for (let i = 0; i < 5; i++) {\n    const contenedorInputs = document.createElement('li');\n    contenedorInputs.classList.add('list-group-item');\n    contenedorInputs.id = 'contenedorInputs' + i;\n    if (i === 0) {\n      contenedorInputs.classList.add('active');\n      contenedorInputs.classList.add('text-center');\n      contenedorInputs.textContent = 'Accede a tu cuenta';\n    }\n    ;\n    if (i > 2) {\n      contenedorInputs.classList.add('container');\n    }\n    ;\n    document.getElementById('listaSeparadora').appendChild(contenedorInputs);\n  }\n  ;\n  for (let i = 0; i < 2; i++) {\n    const inputs = document.createElement('input');\n    inputs.classList.add('text-center');\n    inputs.classList.add('inputRequire');\n    inputs.setAttribute('required', '');\n    if (i === 0) {\n      inputs.type = 'text';\n      inputs.placeholder = '@UserName';\n      inputs.id = 'userName';\n      document.getElementById('contenedorInputs1').appendChild(inputs);\n    }\n    if (i === 1) {\n      inputs.type = 'password';\n      inputs.placeholder = 'Password';\n      inputs.id = 'Password';\n      document.getElementById('contenedorInputs2').appendChild(inputs);\n    }\n  }\n  const botonAcceder = document.createElement('button');\n  botonAcceder.classList.add('btn');\n  botonAcceder.classList.add('btn-dark');\n  botonAcceder.classList.add('border');\n  botonAcceder.classList.add('border-dark');\n  botonAcceder.classList.add('container');\n  botonAcceder.type = \"submit\";\n  botonAcceder.textContent = \"Acceder\";\n  botonAcceder.id = \"botonAcceder\";\n  document.getElementById('contenedorInputs3').appendChild(botonAcceder);\n  const h5 = document.createElement('h5');\n  h5.classList.add('text-center');\n  h5.classList.add('loginpsize');\n  h5.textContent = 'No posees una cuenta?';\n  document.getElementById('contenedorInputs4').appendChild(h5);\n  const botonRegistrarse = document.createElement('button');\n  botonRegistrarse.classList.add('btn');\n  botonRegistrarse.classList.add('btn-light');\n  botonRegistrarse.classList.add('border');\n  botonRegistrarse.classList.add('border-dark');\n  botonRegistrarse.classList.add('fit-content');\n  botonRegistrarse.classList.add('container');\n  botonRegistrarse.id = 'botonRegistrarse';\n  botonRegistrarse.type = 'button';\n  botonRegistrarse.textContent = 'Registrarse';\n  document.getElementById('contenedorInputs4').appendChild(botonRegistrarse);\n  const inputs = document.querySelectorAll('.inputRequire');\n  const bacceder = document.getElementById('botonAcceder');\n  const checkInputs = () => {\n    const allFilled = Array.from(inputs).every(input => input.value.trim() !== '');\n    bacceder.disabled = !allFilled;\n  };\n  checkInputs();\n  inputs.forEach(input => {\n    input.addEventListener('input', checkInputs);\n  });\n  bacceder.addEventListener('click', async () => {\n    const userName = document.getElementById('userName').value;\n    const password = document.getElementById('Password').value;\n    const logearse = {\n      userName,\n      password\n    };\n    console.log(logearse);\n    const user = await (0,_users_acceder__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(logearse);\n    if (!user) {\n      alert('El usuario o contraseña es incorrecta');\n      const confirm = confirm('Deseas crear una cuenta?');\n      if (confirm) {\n        return (0,_register__WEBPACK_IMPORTED_MODULE_2__.sacarRegistrarse)();\n      }\n      return;\n    }\n    const borrar = document.getElementById('conteneorTotal');\n    borrar.remove();\n    if (user) {\n      return await (0,_board_mainBoard__WEBPACK_IMPORTED_MODULE_0__.mainBoard)(user);\n    }\n  });\n  const registrarseInputs = document.getElementById('botonRegistrarse');\n  registrarseInputs.addEventListener('click', () => {\n    (0,_register__WEBPACK_IMPORTED_MODULE_2__.sacarRegistrarse)();\n  });\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (sacarLogin);\n\n//# sourceURL=webpack://task-board/./client/layout/APIs/login/login.js?");

/***/ }),

/***/ "./client/layout/APIs/login/register.js":
/*!**********************************************!*\
  !*** ./client/layout/APIs/login/register.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   sacarRegistrarse: () => (/* binding */ sacarRegistrarse)\n/* harmony export */ });\n/* harmony import */ var _users_crearUsuario__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../users/crearUsuario */ \"./client/layout/APIs/users/crearUsuario.js\");\n/* harmony import */ var _login__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./login */ \"./client/layout/APIs/login/login.js\");\n\n\nconst sacarRegistrarse = () => {\n  const conteneorTotalLogin = document.getElementById('conteneorTotal');\n  conteneorTotalLogin.remove();\n  const conteneorTotal = document.createElement('div');\n  conteneorTotal.classList.add('login');\n  conteneorTotal.classList.add('fit-content');\n  conteneorTotal.classList.add('container');\n  conteneorTotal.classList.add('position-absolute');\n  conteneorTotal.classList.add('d-print-table');\n  conteneorTotal.classList.add('margen');\n  conteneorTotal.id = 'conteneorTotal';\n  document.getElementById('login').appendChild(conteneorTotal);\n  const listaSeparadora = document.createElement('ul');\n  listaSeparadora.classList.add('list-group');\n  listaSeparadora.classList.add('fit-content');\n  listaSeparadora.id = 'listaSeparadora';\n  document.getElementById('conteneorTotal').appendChild(listaSeparadora);\n  for (let i = 0; i < 8; i++) {\n    const contenedorInputs = document.createElement('li');\n    contenedorInputs.classList.add('list-group-item');\n    contenedorInputs.id = 'contenedorInputs' + i;\n    if (i === 0) {\n      contenedorInputs.classList.add('active');\n      contenedorInputs.classList.add('text-center');\n      contenedorInputs.textContent = 'Crea tu cuenta';\n    }\n    ;\n    if (i > 5) {\n      contenedorInputs.classList.add('container');\n    }\n    ;\n    document.getElementById('listaSeparadora').appendChild(contenedorInputs);\n  }\n  ;\n  for (let i = 0; i < 5; i++) {\n    const inputs = document.createElement('input');\n    inputs.classList.add('text-center');\n    inputs.classList.add('inputRequire');\n    inputs.setAttribute('required', '');\n    if (i === 0) {\n      inputs.type = 'text';\n      inputs.placeholder = '@UserName';\n      inputs.id = 'userName';\n      document.getElementById('contenedorInputs1').appendChild(inputs);\n    }\n    if (i === 1) {\n      inputs.type = 'password';\n      inputs.placeholder = 'Password';\n      inputs.id = 'Password';\n      document.getElementById('contenedorInputs2').appendChild(inputs);\n    }\n    if (i === 2) {\n      inputs.type = 'string';\n      inputs.placeholder = 'Your Name';\n      inputs.id = 'name';\n      document.getElementById('contenedorInputs3').appendChild(inputs);\n    }\n    if (i === 3) {\n      inputs.type = 'string';\n      inputs.placeholder = 'Your Last Name';\n      inputs.id = 'YourLastName';\n      document.getElementById('contenedorInputs4').appendChild(inputs);\n    }\n    if (i === 4) {\n      inputs.type = 'email';\n      inputs.placeholder = 'expmple@email.com';\n      inputs.id = 'email';\n      document.getElementById('contenedorInputs5').appendChild(inputs);\n    }\n  }\n  const botonRegistrarse = document.createElement('button');\n  botonRegistrarse.classList.add('btn');\n  botonRegistrarse.classList.add('btn-dark');\n  botonRegistrarse.classList.add('border');\n  botonRegistrarse.classList.add('border-dark');\n  botonRegistrarse.classList.add('container');\n  botonRegistrarse.type = \"submit\";\n  botonRegistrarse.textContent = \"Registrarse\";\n  botonRegistrarse.id = \"botonRegistrarse\";\n  document.getElementById('contenedorInputs6').appendChild(botonRegistrarse);\n  const h5 = document.createElement('h5');\n  h5.classList.add('text-center');\n  h5.classList.add('loginpsize');\n  h5.textContent = 'Ya posees una cuenta?';\n  document.getElementById('contenedorInputs7').appendChild(h5);\n  const botonLogearse = document.createElement('button');\n  botonLogearse.classList.add('btn');\n  botonLogearse.classList.add('btn-light');\n  botonLogearse.classList.add('border');\n  botonLogearse.classList.add('border-dark');\n  botonLogearse.classList.add('fit-content');\n  botonLogearse.classList.add('container');\n  botonLogearse.id = 'botonLogearse';\n  botonLogearse.type = 'button';\n  botonLogearse.textContent = 'Logearse';\n  document.getElementById('contenedorInputs7').appendChild(botonLogearse);\n  const inputs = document.querySelectorAll('.inputRequire');\n  const bRegistrarse = document.getElementById('botonRegistrarse');\n  const checkInputs = () => {\n    const allFilled = Array.from(inputs).every(input => input.value.trim() !== '');\n    bRegistrarse.disabled = !allFilled;\n  };\n  checkInputs();\n  inputs.forEach(input => {\n    input.addEventListener('input', checkInputs);\n  });\n  const conteneorTotalRegistro = document.getElementById('conteneorTotal');\n  bRegistrarse.addEventListener('click', async () => {\n    const userName = document.getElementById('userName').value;\n    const password = document.getElementById('Password').value;\n    const name = document.getElementById('name').value;\n    const apellido = document.getElementById('YourLastName').value;\n    const email = document.getElementById('email').value;\n    const datosNewuser = {\n      userName,\n      password,\n      name,\n      apellido,\n      email\n    };\n    console.log(datosNewuser);\n    await (0,_users_crearUsuario__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(datosNewuser);\n    conteneorTotalRegistro.remove();\n    return (0,_login__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n  });\n  const bLogearse = document.getElementById('botonLogearse');\n  bLogearse.addEventListener('click', async () => {\n    conteneorTotalRegistro.remove();\n    return (0,_login__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n  });\n};\n\n\n//# sourceURL=webpack://task-board/./client/layout/APIs/login/register.js?");

/***/ }),

/***/ "./client/layout/APIs/tasks/actualizarTask.js":
/*!****************************************************!*\
  !*** ./client/layout/APIs/tasks/actualizarTask.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst actualizarTask = async (newTask, taskId) => {\n  try {\n    const response = await fetch('http://localhost:3000/tasks/change', {\n      method: 'PUT',\n      headers: {\n        'Content-Type': 'application/json'\n      },\n      body: JSON.stringify({\n        ...newTask,\n        taskId\n      })\n    });\n    if (response.ok) {\n      return console.log('Se pudo actualizar la task');\n    }\n  } catch (error) {\n    console.log(error);\n  }\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (actualizarTask);\n\n//# sourceURL=webpack://task-board/./client/layout/APIs/tasks/actualizarTask.js?");

/***/ }),

/***/ "./client/layout/APIs/tasks/misTasks.js":
/*!**********************************************!*\
  !*** ./client/layout/APIs/tasks/misTasks.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst getMisTasks = async userId => {\n  try {\n    const res = await fetch('http://localhost:3000/tasks/mystasks', {\n      method: 'POST',\n      headers: {\n        'Content Type': 'aplication/json'\n      },\n      body: JSON.stringify(userId)\n    });\n    if (res.ok) {\n      return misTasks = res.json();\n    }\n    return console.error(error);\n  } catch (error) {\n    return console.log(error);\n  }\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getMisTasks);\n\n//# sourceURL=webpack://task-board/./client/layout/APIs/tasks/misTasks.js?");

/***/ }),

/***/ "./client/layout/APIs/tasks/taskCreate.js":
/*!************************************************!*\
  !*** ./client/layout/APIs/tasks/taskCreate.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst taskCreate = async (newTask, userId) => {\n  try {\n    const response = await fetch('http://localhost:3000/tasks/newtask', {\n      method: 'POST',\n      headers: {\n        'Content-Type': 'application/json'\n      },\n      body: JSON.stringify({\n        ...newTask,\n        userId\n      })\n    });\n    if (response.ok) {\n      return console.log('Se creo, agrego y guardo correctamente su tarea');\n    }\n  } catch (error) {\n    return console.error(error);\n  }\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (taskCreate);\n\n//# sourceURL=webpack://task-board/./client/layout/APIs/tasks/taskCreate.js?");

/***/ }),

/***/ "./client/layout/APIs/tasks/taskDelete.js":
/*!************************************************!*\
  !*** ./client/layout/APIs/tasks/taskDelete.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst taskDelete = async taskId => {\n  try {\n    const req = await fetch(`http://localhost:3000/tasks/deleteTask/${taskId}`, {\n      method: 'DELETE',\n      headers: {\n        'Content-Type': 'application/json'\n      }\n    });\n    if (req.ok) {\n      let view = document.getElementById('board');\n      view.remove();\n      return console.log('La task se elimino correctamente');\n    }\n  } catch (error) {\n    console.error(error);\n    return;\n  }\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (taskDelete);\n\n//# sourceURL=webpack://task-board/./client/layout/APIs/tasks/taskDelete.js?");

/***/ }),

/***/ "./client/layout/APIs/tasks/tasksPreviews.js":
/*!***************************************************!*\
  !*** ./client/layout/APIs/tasks/tasksPreviews.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _board_layoutBoard_sectionView__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../board/layoutBoard/sectionView */ \"./client/layout/APIs/board/layoutBoard/sectionView.js\");\n/* harmony import */ var _misTasks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./misTasks */ \"./client/layout/APIs/tasks/misTasks.js\");\n\n\nconst tasksPreviews = async userId => {\n  const misTasks = await (0,_misTasks__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(userId);\n  if (!misTasks) {\n    return;\n  }\n  misTasks.forEach(task => {\n    const {\n      title,\n      _Id: ID,\n      status\n    } = task;\n    const previuwTaskConteiner = document.createElement('div');\n    previuwTaskConteiner.classList.add('previuwTaskConteiner');\n    previuwTaskConteiner.id = 'preview' + ID;\n    previuwTaskConteiner.innerHTML = `\n                                    <div class=\"titlePreviuw\">${title}</div>\n                            <div class=\"checks\">\n                            <div class=\"pending\">\n                                <input class=\"chacksitos\" type=\"radio\" name=\"inlineRadioOptions\" id=\"pending\" value=\"Pending\">\n                            </div>\n                            <div class=\"wontDo\">\n                                <input class=\"chacksitos\" type=\"radio\" name=\"inlineRadioOptions\" id=\"NoHare\" value=\"WontDo\">\n                            </div>\n                            <div class=\"inProgres\">\n                                <input class=\"chacksitos\" type=\"radio\" name=\"inlineRadioOptions\" id=\"enprogreso\" value=\"InProgres\">\n                            </div>\n                            <div class=\"completed\">\n                                <input class=\"chacksitos\" type=\"radio\" name=\"inlineRadioOptions\" id=\"CheckCompleted\" value=\"Completed\">\n                            </div>\n                            </div>  \n        `;\n    document.getElementById('tasks').appendChild(previuwTaskConteiner);\n    if (status === Pending) {\n      status = value;\n      const body = document.getElementById('preview' + ID);\n      body.classList.add('Backgroundcolortransition');\n      body.classList.add('Pending');\n      body.classList.remove('Pending');\n      body.classList.remove('WontDo');\n      body.classList.remove('InProgres');\n      body.classList.remove('Completed');\n    }\n    ;\n    if (status === wontdo) {\n      status = value;\n      const body = document.getElementById('preview' + ID);\n      body.classList.add('Backgroundcolortransition');\n      body.classList.add('WontDo');\n      body.classList.remove('Pending');\n      body.classList.remove('WontDo');\n      body.classList.remove('InProgres');\n      body.classList.remove('Completed');\n    }\n    ;\n    if (status === Inprogres) {\n      status = value;\n      const body = document.getElementById('preview' + ID);\n      body.classList.add('Backgroundcolortransition');\n      body.classList.add('InProgres');\n      body.classList.remove('Pending');\n      body.classList.remove('WontDo');\n      body.classList.remove('InProgres');\n      body.classList.remove('Completed');\n    }\n    ;\n    if (status === Completed) {\n      status = value;\n      const body = document.getElementById('preview' + ID);\n      body.classList.add('Backgroundcolortransition');\n      body.classList.add('Completed');\n      body.classList.remove('Pending');\n      body.classList.remove('WontDo');\n      body.classList.remove('InProgres');\n      body.classList.remove('Completed');\n    }\n    ;\n    const checks = document.querySelectorAll('.chacksitos');\n    checks.forEach(check => {\n      check.addEventListener('click', () => {\n        const value = check.value;\n        if (status === value) {\n          return;\n        }\n        if (status === Pending) {\n          status = value;\n          const body = document.getElementById('preview' + ID);\n          body.classList.add('Backgroundcolortransition');\n          body.classList.add('Pending');\n          body.classList.remove('Pending');\n          body.classList.remove('WontDo');\n          body.classList.remove('InProgres');\n          body.classList.remove('Completed');\n        }\n        ;\n        if (status === wontdo) {\n          status = value;\n          const body = document.getElementById('preview' + ID);\n          body.classList.add('Backgroundcolortransition');\n          body.classList.add('WontDo');\n          body.classList.remove('Pending');\n          body.classList.remove('WontDo');\n          body.classList.remove('InProgres');\n          body.classList.remove('Completed');\n        }\n        ;\n        if (status === Inprogres) {\n          status = value;\n          const body = document.getElementById('preview' + ID);\n          body.classList.add('Backgroundcolortransition');\n          body.classList.add('InProgres');\n          body.classList.remove('Pending');\n          body.classList.remove('WontDo');\n          body.classList.remove('InProgres');\n          body.classList.remove('Completed');\n        }\n        ;\n        if (status === Completed) {\n          status = value;\n          const body = document.getElementById('preview' + ID);\n          body.classList.add('Backgroundcolortransition');\n          body.classList.add('Completed');\n          body.classList.remove('Pending');\n          body.classList.remove('WontDo');\n          body.classList.remove('InProgres');\n          body.classList.remove('Completed');\n        }\n        ;\n        return;\n      });\n    });\n    previuwTaskConteiner.addEventListener('click', async () => {\n      const taskId = ID;\n      return await (0,_board_layoutBoard_sectionView__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(taskId, userId);\n    });\n  });\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (tasksPreviews);\n\n//# sourceURL=webpack://task-board/./client/layout/APIs/tasks/tasksPreviews.js?");

/***/ }),

/***/ "./client/layout/APIs/tasks/thisTask.js":
/*!**********************************************!*\
  !*** ./client/layout/APIs/tasks/thisTask.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst thisTask = async taskId => {\n  try {\n    const res = await fetch('http://localhost:3000/tasks/task', {\n      method: 'POST',\n      headers: {\n        'Content-Type': 'aplication/json'\n      },\n      body: JSON.stringify(taskId)\n    });\n    if (res.ok) {\n      const thisTask = res.json();\n      return thisTask;\n    }\n    return console.error(error);\n  } catch (error) {\n    console.error(error);\n  }\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (thisTask);\n\n//# sourceURL=webpack://task-board/./client/layout/APIs/tasks/thisTask.js?");

/***/ }),

/***/ "./client/layout/APIs/users/acceder.js":
/*!*********************************************!*\
  !*** ./client/layout/APIs/users/acceder.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst acceder = async ({\n  userName,\n  password\n}) => {\n  try {\n    const response = await fetch('http://localhost:3000/user/myuser', {\n      method: 'POST',\n      headers: {\n        'Content-Type': 'application/json'\n      },\n      body: JSON.stringify({\n        userName,\n        password\n      })\n    });\n    if (response.ok) {\n      const user = await response.json();\n      console.log('se pudo obtener el usuario ' + user.userName);\n      return user;\n    } else {\n      return console.error('error al obtener el Usuario', response.statusText);\n    }\n  } catch (error) {\n    return console.error('Error en la solicitud', error);\n  }\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (acceder);\n\n//# sourceURL=webpack://task-board/./client/layout/APIs/users/acceder.js?");

/***/ }),

/***/ "./client/layout/APIs/users/crearUsuario.js":
/*!**************************************************!*\
  !*** ./client/layout/APIs/users/crearUsuario.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _login_login__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../login/login */ \"./client/layout/APIs/login/login.js\");\n\nconst registrarse = async datosNewuser => {\n  try {\n    const res = await fetch('http://localhost:3000/user/allusersnames');\n    if (res.ok) {\n      let users = await res.json();\n      if (users.includes(datosNewuser.userName)) {\n        return alert('El usuario no esta disponible');\n      }\n      ;\n      if (users.includes(datosNewuser.email)) {\n        return alert('El email ya esta registrado');\n      }\n      ;\n      if (datosNewuser.password.length < 4) {\n        return alert('La contraseña posee menos de 5 caracteres');\n      }\n      ;\n    }\n  } catch (error) {\n    return console.error(error);\n  }\n  try {\n    const response = await fetch('http://localhost:3000/user/newuser', {\n      method: 'POST',\n      headers: {\n        'Content-Type': 'application/json'\n      },\n      body: JSON.stringify(datosNewuser)\n    });\n    if (response.ok) {\n      console.log('Su usario se creo corrrectamente ' + datosNewuser.userName);\n    } else {\n      return;\n    }\n  } catch (error) {\n    return console.error(error);\n  }\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (registrarse);\n\n//# sourceURL=webpack://task-board/./client/layout/APIs/users/crearUsuario.js?");

/***/ }),

/***/ "./client/layout/layout.js":
/*!*********************************!*\
  !*** ./client/layout/layout.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _APIs_login_login__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./APIs/login/login */ \"./client/layout/APIs/login/login.js\");\n\nconst validacion = async () => {\n  return await (0,_APIs_login_login__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n};\nconst Iniciar = async () => {\n  await validacion();\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Iniciar);\n\n//# sourceURL=webpack://task-board/./client/layout/layout.js?");

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
/******/ 	/* webpack/runtime/async module */
/******/ 	(() => {
/******/ 		var webpackQueues = typeof Symbol === "function" ? Symbol("webpack queues") : "__webpack_queues__";
/******/ 		var webpackExports = typeof Symbol === "function" ? Symbol("webpack exports") : "__webpack_exports__";
/******/ 		var webpackError = typeof Symbol === "function" ? Symbol("webpack error") : "__webpack_error__";
/******/ 		var resolveQueue = (queue) => {
/******/ 			if(queue && queue.d < 1) {
/******/ 				queue.d = 1;
/******/ 				queue.forEach((fn) => (fn.r--));
/******/ 				queue.forEach((fn) => (fn.r-- ? fn.r++ : fn()));
/******/ 			}
/******/ 		}
/******/ 		var wrapDeps = (deps) => (deps.map((dep) => {
/******/ 			if(dep !== null && typeof dep === "object") {
/******/ 				if(dep[webpackQueues]) return dep;
/******/ 				if(dep.then) {
/******/ 					var queue = [];
/******/ 					queue.d = 0;
/******/ 					dep.then((r) => {
/******/ 						obj[webpackExports] = r;
/******/ 						resolveQueue(queue);
/******/ 					}, (e) => {
/******/ 						obj[webpackError] = e;
/******/ 						resolveQueue(queue);
/******/ 					});
/******/ 					var obj = {};
/******/ 					obj[webpackQueues] = (fn) => (fn(queue));
/******/ 					return obj;
/******/ 				}
/******/ 			}
/******/ 			var ret = {};
/******/ 			ret[webpackQueues] = x => {};
/******/ 			ret[webpackExports] = dep;
/******/ 			return ret;
/******/ 		}));
/******/ 		__webpack_require__.a = (module, body, hasAwait) => {
/******/ 			var queue;
/******/ 			hasAwait && ((queue = []).d = -1);
/******/ 			var depQueues = new Set();
/******/ 			var exports = module.exports;
/******/ 			var currentDeps;
/******/ 			var outerResolve;
/******/ 			var reject;
/******/ 			var promise = new Promise((resolve, rej) => {
/******/ 				reject = rej;
/******/ 				outerResolve = resolve;
/******/ 			});
/******/ 			promise[webpackExports] = exports;
/******/ 			promise[webpackQueues] = (fn) => (queue && fn(queue), depQueues.forEach(fn), promise["catch"](x => {}));
/******/ 			module.exports = promise;
/******/ 			body((deps) => {
/******/ 				currentDeps = wrapDeps(deps);
/******/ 				var fn;
/******/ 				var getResult = () => (currentDeps.map((d) => {
/******/ 					if(d[webpackError]) throw d[webpackError];
/******/ 					return d[webpackExports];
/******/ 				}))
/******/ 				var promise = new Promise((resolve) => {
/******/ 					fn = () => (resolve(getResult));
/******/ 					fn.r = 0;
/******/ 					var fnQueue = (q) => (q !== queue && !depQueues.has(q) && (depQueues.add(q), q && !q.d && (fn.r++, q.push(fn))));
/******/ 					currentDeps.map((dep) => (dep[webpackQueues](fnQueue)));
/******/ 				});
/******/ 				return fn.r ? promise : getResult();
/******/ 			}, (err) => ((err ? reject(promise[webpackError] = err) : outerResolve(exports)), resolveQueue(queue)));
/******/ 			queue && queue.d < 0 && (queue.d = 0);
/******/ 		};
/******/ 	})();
/******/ 	
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