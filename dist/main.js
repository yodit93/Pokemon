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

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles.css":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles.css ***!
  \**************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"* {\\n  margin: 0;\\n  padding: 0;\\n  box-sizing: border-box;\\n}\\n\\nbody {\\n  font-family: 'Roboto', sans-serif;\\n  background-color: #f5f5f5;\\n}\\n\\n.pokemon {\\n  color: orangered;\\n  font-size: 3rem;\\n  text-align: center;\\n  margin: 0 auto;\\n}\\n\\n.img-cont {\\n  display: flex;\\n  justify-content: center;\\n  margin: 3%;\\n}\\n\\n.pokemon-img {\\n  height: 30vh;\\n  text-align: center;\\n}\\n\\n#pokdex {\\n  list-style-type: none;\\n  display: flex;\\n  justify-content: center;\\n  align-items: center;\\n  flex-wrap: wrap;\\n  gap: 3rem;\\n  padding: 5%;\\n}\\n\\n.card {\\n  width: 20vw;\\n}\\n\\n.card-image {\\n  background-color: black;\\n  width: 100%;\\n  height: 35vh;\\n  object-fit: cover;\\n}\\n\\n.card-image:hover {\\n  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.2);\\n  border: 2px solid white;\\n}\\n\\n.card-body {\\n  display: flex;\\n  justify-content: space-between;\\n  align-items: center;\\n  margin-top: 5%;\\n  padding: 5px;\\n}\\n\\n.card-title {\\n  font-size: 1.3rem;\\n  color: #333;\\n  text-transform: capitalize;\\n}\\n\\n.heart {\\n  cursor: pointer;\\n}\\n\\n.heart-img {\\n  height: 1.5rem;\\n}\\n\\n.like-cont {\\n  display: flex;\\n  justify-content: flex-end;\\n}\\n\\n.comment-btn {\\n  background-color: #f5f5f5;\\n  border: 2px solid olivedrab;\\n  box-shadow: 2px 2px olivedrab;\\n  border-radius: 0.5rem;\\n  padding: 0.5rem 1rem;\\n  font-size: 1rem;\\n  font-weight: bold;\\n  color: #333;\\n  cursor: pointer;\\n}\\n\\n.footer {\\n  height: 20vh;\\n  width: 80vw;\\n  border-top: 2px solid black;\\n  display: flex;\\n  align-items: center;\\n  background-color: aliceblue;\\n  margin: 0 auto;\\n  padding-left: 8%;\\n}\\n\\n.popup-cont {\\n  display: none;\\n}\\n\\n.popup-cont.active {\\n  display: flex;\\n  justify-content: center;\\n  align-items: center;\\n  width: 100vw;\\n  height: 100vh;\\n  position: relative;\\n}\\n\\n.popup {\\n  width: 70vw;\\n  height: 100vh;\\n  background-color: white;\\n  position: fixed;\\n  top: 0;\\n  left: 25vw;\\n  border-radius: 1rem;\\n  display: flex;\\n  flex-direction: column;\\n  align-items: center;\\n  padding: 2rem;\\n  gap: 1rem;\\n  overflow: scroll;\\n}\\n\\n.popup-header {\\n  width: 77%;\\n  height: 43vh;\\n  display: flex;\\n  justify-content: space-between;\\n  align-items: center;\\n  position: relative;\\n  padding: 1%;\\n}\\n\\n.popup-header > img {\\n  width: 90%;\\n  height: 100%;\\n  object-fit: cover;\\n  background-color: black;\\n}\\n\\n.close-btn {\\n  position: absolute;\\n  top: -7%;\\n  right: -11%;\\n  cursor: pointer;\\n  border: none;\\n  background-color: white;\\n  font-size: 8rem;\\n  font-weight: bolder;\\n}\\n\\n.pokemon-title {\\n  font-size: 3.5rem;\\n  text-transform: capitalize;\\n}\\n\\n.pokemon-body {\\n  width: 60%;\\n  display: flex;\\n  justify-content: space-between;\\n  align-items: center;\\n  margin-right: 4%;\\n  background-image: -webkit-linear-gradient(65deg, #3bd6c9 40%, #46dd39 60%);\\n  \\n}\\n\\n.text {\\n  color: #333;\\n  font-size: 1.5rem;\\n  font-weight: bold;\\n}\\n\\n.pokemon-type, .pokemon-height {\\n  margin-bottom: 1rem;\\n}\\n\\n.comm-cont {\\n  width: 63%;\\n  height: auto;\\n}\\n\\n.comm-header {\\n  font-size: 2rem;\\n  color: #333;\\n  font-weight: bold;\\n  margin: 5%;\\n  text-align: center;\\n}\\n\\n.comm-body {\\n  list-style-type: none;\\n  display: flex;\\n  flex-direction: column;\\n  gap: 1rem;\\n  width: 100%;\\n  height: auto;\\n}\\n\\n.comm-list {\\n  font-size: 1.5rem;\\n  color: #333;\\n  font-weight: bold;\\n}\\n\\n.comm-form {\\n  width: 70%;\\n}\\n\\nform {\\n  width: 65%;\\n  display: flex;\\n  flex-direction: column;\\n  gap: 2rem;\\n}\\n\\ninput {\\n  width: 80%;\\n  height: 3rem;\\n  border: 2px solid #333;\\n  border-radius: 0.5rem;\\n  padding: 0.5rem 1rem;\\n  font-size: 1rem;\\n  font-weight: bold;\\n  color: #333;\\n}\\n\\ntextarea {\\n  width: 100%;\\n  border: 2px solid #333;\\n  border-radius: 0.5rem;\\n  padding: 0.5rem 1rem;\\n  font-size: 1rem;\\n  font-weight: bold;\\n  color: #333;\\n}\\n\\n.submit-btn {\\n  width: 30%;\\n  height: 3rem;\\n  background-color: #f5f5f5;\\n  border: 2px solid black;\\n  box-shadow: 2px 2px black;\\n  border-radius: 0.5rem;\\n  padding: 0.5rem 1rem;\\n  font-size: 1rem;\\n  font-weight: bold;\\n  color: #333;\\n  cursor: pointer;\\n}\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://JavaScript-capstone-group-project/./src/styles.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://JavaScript-capstone-group-project/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://JavaScript-capstone-group-project/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/styles.css":
/*!************************!*\
  !*** ./src/styles.css ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./styles.css */ \"./node_modules/css-loader/dist/cjs.js!./src/styles.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://JavaScript-capstone-group-project/./src/styles.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n\n  return updater;\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://JavaScript-capstone-group-project/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://JavaScript-capstone-group-project/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://JavaScript-capstone-group-project/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://JavaScript-capstone-group-project/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n\n  var needLayer = typeof obj.layer !== \"undefined\";\n\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n\n  css += obj.css;\n\n  if (needLayer) {\n    css += \"}\";\n  }\n\n  if (obj.media) {\n    css += \"}\";\n  }\n\n  if (obj.supports) {\n    css += \"}\";\n  }\n\n  var sourceMap = obj.sourceMap;\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, styleElement, options.options);\n}\n\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n\n  styleElement.parentNode.removeChild(styleElement);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://JavaScript-capstone-group-project/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://JavaScript-capstone-group-project/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_fetch_data_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/fetch-data.js */ \"./src/modules/fetch-data.js\");\n/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styles.css */ \"./src/styles.css\");\n\n\n\n(0,_modules_fetch_data_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n\n\n//# sourceURL=webpack://JavaScript-capstone-group-project/./src/index.js?");

/***/ }),

/***/ "./src/modules/commentsPopup.js":
/*!**************************************!*\
  !*** ./src/modules/commentsPopup.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst commentsPopup = (pokemon) => {\n    const popupCont = document.querySelector('.popup-cont');\n    const popup = document.createElement('div');\n    popup.classList.add('popup'); \n    popup.innerHTML = `\n    <div class=\"popup-header\">\n      <img src=\"${pokemon.sprites.front_default}\" alt=\"pokemon image\">\n      <button class=\"close-btn\">&times;</button>\n    </div>\n    <h2 class=\"pokemon-title\">${pokemon.name} ${pokemon.id}</h2>\n    <div class=\"pokemon-body\">\n      <div class=\"left\">\n        <p class=\"pokemon-type text\">Type: ${pokemon.types.map((type) => type.type.name).join(', ')}</p>\n        <p class=\"pokemon-order text\">Order: ${pokemon.order}</p>\n      </div>\n      <div class=\"right\">\n        <p class=\"pokemon-height text\">Height: ${pokemon.height}</p>\n        <p class=\"pokemon-weight text\">Weight: ${pokemon.weight}</p>\n      </div>\n    </div>\n    <div class=\"comm-cont\">\n      <p class=\"comm-header\">Comments (n)</p>\n      <ul class=\"comm-body\">\n        <li class=\"comm-list\">\n          <p class=\"user-comm\">date name: comments</p>\n        </li>\n        <li class=\"comm-list\">\n          <p class=\"user-comm\">date name: comments</p>\n        </li>\n      </ul>\n    </div>\n    <div class=\"comm-form\">\n      <p class=\"comm-header\">Add a comment</p>\n      <form action=\"\">\n        <input type=\"text\" placeholder=\"Your name\" />\n        <textarea name=\"\" id=\"\" cols=\"30\" rows=\"10\" placeholder=\"Your insights\"></textarea>\n        <button type=\"submit\" class=\"submit-btn\">Comment</button>\n      </form>\n    </div>`;\n    popupCont.appendChild(popup);\n  \n    const closeBtn = document.querySelectorAll('.close-btn');\n    closeBtn.forEach((btn) => {\n      btn.addEventListener('click', () => {\n        popupCont.classList.remove('active');\n      })\n    })  \n  }\n  \n  /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (commentsPopup);\n\n//# sourceURL=webpack://JavaScript-capstone-group-project/./src/modules/commentsPopup.js?");

/***/ }),

/***/ "./src/modules/display-pokemon.js":
/*!****************************************!*\
  !*** ./src/modules/display-pokemon.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _images_heart_regular_svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../images/heart-regular.svg */ \"./src/images/heart-regular.svg\");\n/* harmony import */ var _commentsPopup__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./commentsPopup */ \"./src/modules/commentsPopup.js\");\n\n\n\nconst pokdexContainer = document.getElementById('pokdex');\nconst displayPokemon = (pokemon) => {\n  const pokemonHTMLString = pokemon.map((pokemon) => `<li class=\"card\">\n      <img class=\"card-image\" src=\"${pokemon.image}\"/>\n      <div class=\"card-body\">\n        <h2 class=\"card-title\">${pokemon.name} ${pokemon.id}</h2>\n        <a class=\"heart\" href=\"#\"><img id=${pokemon.id} class=\"heart-img\" src=\"${_images_heart_regular_svg__WEBPACK_IMPORTED_MODULE_0__}\"></a>\n      </div>\n      <div class=\"like-cont\"><span class=\"likes\">n likes</span></div>\n      <button id=\"${pokemon.id}\" class=\"comment-btn\">Comments</button>\n    </li>`).join(', ');\n  pokdexContainer.innerHTML = pokemonHTMLString;\n  \n  const commentBtn = document.querySelectorAll('.comment-btn');\n  commentBtn.forEach((btn) => {\n    btn.addEventListener('click', async(e) => {\n      const id = e.target.id;\n      const popupCont = document.querySelector('.popup-cont');\n      popupCont.classList.add('active');\n      const url = `https://pokeapi.co/api/v2/pokemon/${id}`;\n      const response = await fetch(url);\n      const pokemon = await response.json();\n      console.log(pokemon)\n      ;(0,_commentsPopup__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(pokemon);\n    });\n  });\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (displayPokemon);\n\n//# sourceURL=webpack://JavaScript-capstone-group-project/./src/modules/display-pokemon.js?");

/***/ }),

/***/ "./src/modules/fetch-data.js":
/*!***********************************!*\
  !*** ./src/modules/fetch-data.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _display_pokemon_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./display-pokemon.js */ \"./src/modules/display-pokemon.js\");\n\n\nconst fetchData = async () => {\n  const urls = Array.from({ length: 12 }, (_, i) => `https://pokeapi.co/api/v2/pokemon/${i + 1}`);\n  const responses = await Promise.all(urls.map((url) => fetch(url)));\n  const pokemonData = await Promise.all(responses.map((response) => response.json()));\n\n  const pokmone = pokemonData.map((pokemon) => ({\n    name: pokemon.name,\n    id: pokemon.id,\n    image: pokemon.sprites.front_default,\n  }));\n  (0,_display_pokemon_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(pokmone);\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (fetchData);\n\n//# sourceURL=webpack://JavaScript-capstone-group-project/./src/modules/fetch-data.js?");

/***/ }),

/***/ "./src/images/heart-regular.svg":
/*!**************************************!*\
  !*** ./src/images/heart-regular.svg ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"3724434060b40f63850e.svg\";\n\n//# sourceURL=webpack://JavaScript-capstone-group-project/./src/images/heart-regular.svg?");

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
/******/ 			id: moduleId,
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
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;