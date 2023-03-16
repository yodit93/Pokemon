"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkJavaScript_capstone_group_project"] = self["webpackChunkJavaScript_capstone_group_project"] || []).push([["main"],{

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_fetch_data_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/fetch-data.js */ \"./src/modules/fetch-data.js\");\n/* harmony import */ var _modules_createId_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/createId.js */ \"./src/modules/createId.js\");\nObject(function webpackMissingModule() { var e = new Error(\"Cannot find module './styles.css'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }());\n\n\n\n\n(0,_modules_fetch_data_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n(0,_modules_createId_js__WEBPACK_IMPORTED_MODULE_1__.likesCount)();\n\n\n//# sourceURL=webpack://JavaScript-capstone-group-project/./src/index.js?");

/***/ }),

/***/ "./src/modules/commentsPopup.js":
/*!**************************************!*\
  !*** ./src/modules/commentsPopup.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst commentsPopup = (pokemon) => {\n  const popupCont = document.querySelector('.popup-cont');\n  const popup = document.createElement('div');\n  popup.classList.add('popup');\n  popup.innerHTML = `\n    <div class=\"popup-header\">\n      <img src=\"${pokemon.sprites.front_default}\" alt=\"pokemon image\">\n      <button class=\"close-btn\">&times;</button>\n    </div>\n    <h2 class=\"pokemon-title\">${pokemon.name} ${pokemon.id}</h2>\n    <div class=\"pokemon-body\">\n      <div class=\"left\">\n        <p class=\"pokemon-type text\">Type: ${pokemon.types.map((type) => type.type.name).join(', ')}</p>\n        <p class=\"pokemon-order text\">Order: ${pokemon.order}</p>\n      </div>\n      <div class=\"right\">\n        <p class=\"pokemon-height text\">Height: ${pokemon.height}</p>\n        <p class=\"pokemon-weight text\">Weight: ${pokemon.weight}</p>\n      </div>\n    </div>\n    <div class=\"comm-cont\">\n      <p class=\"comm-header\">Comments (n)</p>\n      <ul class=\"comm-body\">\n        <li class=\"comm-list\">\n          <p class=\"user-comm\">date name: comments</p>\n        </li>\n        <li class=\"comm-list\">\n          <p class=\"user-comm\">date name: comments</p>\n        </li>\n      </ul>\n    </div>\n    <div class=\"comm-form\">\n      <p class=\"comm-header\">Add a comment</p>\n      <form action=\"\">\n        <input type=\"text\" placeholder=\"Your name\" />\n        <textarea name=\"\" id=\"\" cols=\"30\" rows=\"10\" placeholder=\"Your insights\"></textarea>\n        <button type=\"submit\" class=\"submit-btn\">Comment</button>\n      </form>\n    </div>`;\n  popupCont.appendChild(popup);\n\n  const closeBtn = document.querySelectorAll('.close-btn');\n  closeBtn.forEach((btn) => {\n    btn.addEventListener('click', () => {\n      popupCont.innerHTML = '';\n      popupCont.classList.remove('active');\n    });\n  });\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (commentsPopup);\n\n//# sourceURL=webpack://JavaScript-capstone-group-project/./src/modules/commentsPopup.js?");

/***/ }),

/***/ "./src/modules/createId.js":
/*!*********************************!*\
  !*** ./src/modules/createId.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"addLikes\": () => (/* binding */ addLikes),\n/* harmony export */   \"getlikes\": () => (/* binding */ getlikes),\n/* harmony export */   \"likesCount\": () => (/* binding */ likesCount)\n/* harmony export */ });\nconst createGame = async () => {\n  const response = await fetch('https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/', { method: 'POST' });\n  const data = await response.text();\n  localStorage.setItem('id', data);\n  return data;\n};\n\nconst checkId = () => {\n  let appId = '';\n  if (localStorage.getItem('id')) {\n    appId = localStorage.getItem('id');\n  } else {\n    createGame('second').then((data) => localStorage.setItem('id', data));\n    appId = localStorage.getItem('id');\n  }\n  return appId;\n};\n\nconst getlikes = async () => {\n  const appId = checkId();\n  const url = `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/${appId}/likes`;\n  const response = await fetch(url);\n  if (!response.ok) {\n    throw new Error(`Network response was not ok (${response.status})`);\n  }\n  const data = await response.json();\n  return data;\n};\n\nconst likesCount = async () => {\n  const likesArr = await getlikes();\n  likesArr.forEach((item) => {\n    const { likes } = item;\n    const likesHolder = document.getElementById(`likes-${item.item_id}`);\n    if (likes) {\n      likesHolder.textContent = likes;\n    }\n  });\n};\n\nconst addLikes = async (id) => {\n  const appId = checkId();\n  const url = `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/${appId}/likes`;\n  const options = {\n    method: 'POST',\n    body: JSON.stringify({ item_id: id }),\n    headers: { 'Content-type': 'application/json; charset=UTF-8' },\n  };\n  const response = await fetch(url, options);\n  const data = response.status;\n  likesCount();\n  return data;\n};\n\n\n\n//# sourceURL=webpack://JavaScript-capstone-group-project/./src/modules/createId.js?");

/***/ }),

/***/ "./src/modules/display-pokemon.js":
/*!****************************************!*\
  !*** ./src/modules/display-pokemon.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nObject(function webpackMissingModule() { var e = new Error(\"Cannot find module '../images/heart-regular.svg'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }());\n/* harmony import */ var _commentsPopup_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./commentsPopup.js */ \"./src/modules/commentsPopup.js\");\n/* harmony import */ var _createId_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./createId.js */ \"./src/modules/createId.js\");\n\n\n\n\nconst pokdexContainer = document.getElementById('pokdex');\n\nconst displayPokemon = (pokemon) => {\n  const pokemonHTMLString = pokemon.map((pokemon) => `<li class=\"card\">\n      <div class=\"card-imag-cont\"><img class=\"card-image\" src=\"${pokemon.image}\"/></div>\n      <div class=\"card-body\">\n        <h2 class=\"card-title\">${pokemon.name} ${pokemon.id}</h2>\n        <img id=${pokemon.id} class=\"heart-img\" src=\"${Object(function webpackMissingModule() { var e = new Error(\"Cannot find module '../images/heart-regular.svg'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }())}\">\n      </div>\n      <div class=\"like-cont\"><span id=likes-${pokemon.id} class=\"likes\"></span>likes</div>\n      <button id=\"${pokemon.id}\" class=\"comment-btn\">Comments</button>\n    </li>`).join(', ');\n  pokdexContainer.innerHTML = pokemonHTMLString;\n\n  const commentBtn = document.querySelectorAll('.comment-btn');\n  commentBtn.forEach((btn) => {\n    btn.addEventListener('click', async (e) => {\n      const { id } = e.target;\n      const popupCont = document.querySelector('.popup-cont');\n      popupCont.classList.add('active');\n      const url = `https://pokeapi.co/api/v2/pokemon/${id}`;\n      const response = await fetch(url);\n      const pokemon = await response.json();\n      (0,_commentsPopup_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(pokemon);\n    });\n  });\n\n  const likeBtn = document.querySelectorAll('.heart-img');\n  likeBtn.forEach((btn) => {\n    btn.addEventListener('click', (e) => {\n      const { id } = e.target;\n      (0,_createId_js__WEBPACK_IMPORTED_MODULE_2__.addLikes)(id);\n    });\n  });\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (displayPokemon);\n\n//# sourceURL=webpack://JavaScript-capstone-group-project/./src/modules/display-pokemon.js?");

/***/ }),

/***/ "./src/modules/fetch-data.js":
/*!***********************************!*\
  !*** ./src/modules/fetch-data.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _display_pokemon_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./display-pokemon.js */ \"./src/modules/display-pokemon.js\");\n\n\nconst fetchData = async () => {\n  const urls = Array.from({ length: 12 }, (_, i) => `https://pokeapi.co/api/v2/pokemon/${i + 1}`);\n  const responses = await Promise.all(urls.map((url) => fetch(url)));\n  const pokemonData = await Promise.all(responses.map((response) => response.json()));\n\n  const pokmone = pokemonData.map((pokemon) => ({\n    name: pokemon.name,\n    id: pokemon.id,\n    image: pokemon.sprites.front_default,\n  }));\n  (0,_display_pokemon_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(pokmone);\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (fetchData);\n\n\n//# sourceURL=webpack://JavaScript-capstone-group-project/./src/modules/fetch-data.js?");

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);