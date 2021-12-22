/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/scss/style.scss":
/*!**********************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/scss/style.scss ***!
  \**********************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/cssWithMappingToString.js */ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Lato:wght@400;700;900&display=swap);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "/* Box sizing rules */\n*,\n*::before,\n*::after {\n  box-sizing: border-box;\n}\n\n/* Remove default margin */\nbody,\nh1,\nh2,\nh3,\nh4,\np,\nfigure,\nblockquote,\ndl,\ndd {\n  margin: 0;\n}\n\n/* Remove list styles on ul, ol elements with a list role, which suggests default styling will be removed */\nul,\nol {\n  padding: 0;\n  margin: 0;\n  list-style: none;\n}\n\n/* Set core root defaults */\nhtml:focus-within {\n  scroll-behavior: smooth;\n}\n\n/* Set core body defaults */\nbody {\n  min-height: 100vh;\n  text-rendering: optimizeSpeed;\n  line-height: 1.5;\n}\n\n/* A elements that don't have a class get default styles */\na:not([class]) {\n  text-decoration-skip-ink: auto;\n}\n\n/* Make images easier to work with */\nimg,\npicture {\n  max-width: 100%;\n  display: block;\n}\n\n/* Inherit fonts for inputs and buttons */\ninput,\nbutton,\ntextarea,\nselect {\n  font: inherit;\n}\n\n/* Remove all animations, transitions and smooth scroll for people that prefer not to see them */\n@media (prefers-reduced-motion: reduce) {\n  html:focus-within {\n    scroll-behavior: auto;\n  }\n\n  *,\n*::before,\n*::after {\n    animation-duration: 0.01ms !important;\n    animation-iteration-count: 1 !important;\n    transition-duration: 0.01ms !important;\n    scroll-behavior: auto !important;\n  }\n}\nheader nav .navbar-brand {\n  color: #e6d9d9 !important;\n}\n\nmain .card {\n  box-shadow: rgba(0, 0, 0, 0.25) 0 14px 28px, rgba(0, 0, 0, 0.22) 0 10px 10px;\n}\nmain .card .card-img-top {\n  height: 270px;\n}\n\ninput,\nbutton {\n  margin: 15px 0;\n}\n\n.close {\n  position: relative;\n  top: 55px;\n  right: 9px;\n}\n\n.modal-reservation {\n  background-color: black;\n  max-height: 100vh;\n  position: absolute;\n}\n\n.holder {\n  background-color: white;\n}", "",{"version":3,"sources":["webpack://./src/scss/core/_normalize.scss","webpack://./src/scss/style.scss","webpack://./src/scss/layout/_mainpage.scss","webpack://./src/scss/layout/_reservation.scss"],"names":[],"mappings":"AAAA,qBAAA;AACA;;;EAGE,sBAAA;ACEF;;ADCA,0BAAA;AACA;;;;;;;;;;EAUE,SAAA;ACEF;;ADCA,2GAAA;AACA;;EAEE,UAAA;EACA,SAAA;EACA,gBAAA;ACEF;;ADCA,2BAAA;AACA;EACE,uBAAA;ACEF;;ADCA,2BAAA;AACA;EACE,iBAAA;EACA,6BAAA;EACA,gBAAA;ACEF;;ADCA,0DAAA;AACA;EACE,8BAAA;ACEF;;ADCA,oCAAA;AACA;;EAEE,eAAA;EACA,cAAA;ACEF;;ADCA,yCAAA;AACA;;;;EAIE,aAAA;ACEF;;ADCA,gGAAA;AACA;EACE;IACE,qBAAA;ECEF;;EDCA;;;IAGE,qCAAA;IACA,uCAAA;IACA,sCAAA;IACA,gCAAA;ECEF;AACF;AC1EI;EACE,yBAAA;AD4EN;;ACtEE;EACE,4EAAA;ADyEJ;ACvEI;EACE,aAAA;ADyEN;;AEtFA;;EAEE,cAAA;AFyFF;;AEtFA;EACE,kBAAA;EACA,SAAA;EACA,UAAA;AFyFF;;AEtFA;EACE,uBAAA;EACA,iBAAA;EACA,kBAAA;AFyFF;;AEtFA;EACE,uBAAA;AFyFF","sourcesContent":["/* Box sizing rules */\r\n*,\r\n*::before,\r\n*::after {\r\n  box-sizing: border-box;\r\n}\r\n\r\n/* Remove default margin */\r\nbody,\r\nh1,\r\nh2,\r\nh3,\r\nh4,\r\np,\r\nfigure,\r\nblockquote,\r\ndl,\r\ndd {\r\n  margin: 0;\r\n}\r\n\r\n/* Remove list styles on ul, ol elements with a list role, which suggests default styling will be removed */\r\nul,\r\nol {\r\n  padding: 0;\r\n  margin: 0;\r\n  list-style: none;\r\n}\r\n\r\n/* Set core root defaults */\r\nhtml:focus-within {\r\n  scroll-behavior: smooth;\r\n}\r\n\r\n/* Set core body defaults */\r\nbody {\r\n  min-height: 100vh;\r\n  text-rendering: optimizeSpeed;\r\n  line-height: 1.5;\r\n}\r\n\r\n/* A elements that don't have a class get default styles */\r\na:not([class]) {\r\n  text-decoration-skip-ink: auto;\r\n}\r\n\r\n/* Make images easier to work with */\r\nimg,\r\npicture {\r\n  max-width: 100%;\r\n  display: block;\r\n}\r\n\r\n/* Inherit fonts for inputs and buttons */\r\ninput,\r\nbutton,\r\ntextarea,\r\nselect {\r\n  font: inherit;\r\n}\r\n\r\n/* Remove all animations, transitions and smooth scroll for people that prefer not to see them */\r\n@media (prefers-reduced-motion: reduce) {\r\n  html:focus-within {\r\n    scroll-behavior: auto;\r\n  }\r\n\r\n  *,\r\n  *::before,\r\n  *::after {\r\n    animation-duration: 0.01ms !important;\r\n    animation-iteration-count: 1 !important;\r\n    transition-duration: 0.01ms !important;\r\n    scroll-behavior: auto !important;\r\n  }\r\n}\r\n","@import url(\"https://fonts.googleapis.com/css2?family=Lato:wght@400;700;900&display=swap\");\n/* Box sizing rules */\n*,\n*::before,\n*::after {\n  box-sizing: border-box;\n}\n\n/* Remove default margin */\nbody,\nh1,\nh2,\nh3,\nh4,\np,\nfigure,\nblockquote,\ndl,\ndd {\n  margin: 0;\n}\n\n/* Remove list styles on ul, ol elements with a list role, which suggests default styling will be removed */\nul,\nol {\n  padding: 0;\n  margin: 0;\n  list-style: none;\n}\n\n/* Set core root defaults */\nhtml:focus-within {\n  scroll-behavior: smooth;\n}\n\n/* Set core body defaults */\nbody {\n  min-height: 100vh;\n  text-rendering: optimizeSpeed;\n  line-height: 1.5;\n}\n\n/* A elements that don't have a class get default styles */\na:not([class]) {\n  text-decoration-skip-ink: auto;\n}\n\n/* Make images easier to work with */\nimg,\npicture {\n  max-width: 100%;\n  display: block;\n}\n\n/* Inherit fonts for inputs and buttons */\ninput,\nbutton,\ntextarea,\nselect {\n  font: inherit;\n}\n\n/* Remove all animations, transitions and smooth scroll for people that prefer not to see them */\n@media (prefers-reduced-motion: reduce) {\n  html:focus-within {\n    scroll-behavior: auto;\n  }\n\n  *,\n*::before,\n*::after {\n    animation-duration: 0.01ms !important;\n    animation-iteration-count: 1 !important;\n    transition-duration: 0.01ms !important;\n    scroll-behavior: auto !important;\n  }\n}\nheader nav .navbar-brand {\n  color: #e6d9d9 !important;\n}\n\nmain .card {\n  box-shadow: rgba(0, 0, 0, 0.25) 0 14px 28px, rgba(0, 0, 0, 0.22) 0 10px 10px;\n}\nmain .card .card-img-top {\n  height: 270px;\n}\n\ninput,\nbutton {\n  margin: 15px 0;\n}\n\n.close {\n  position: relative;\n  top: 55px;\n  right: 9px;\n}\n\n.modal-reservation {\n  background-color: black;\n  max-height: 100vh;\n  position: absolute;\n}\n\n.holder {\n  background-color: white;\n}","header {\r\n  nav {\r\n    .navbar-brand {\r\n      color: #e6d9d9 !important;\r\n    }\r\n  }\r\n}\r\n\r\nmain {\r\n  .card {\r\n    box-shadow: rgba(0, 0, 0, 0.25) 0 14px 28px, rgba(0, 0, 0, 0.22) 0 10px 10px;\r\n\r\n    .card-img-top {\r\n      height: 270px;\r\n    }\r\n  }\r\n}\r\n","input,\r\nbutton {\r\n  margin: 15px 0;\r\n}\r\n\r\n.close {\r\n  position: relative;\r\n  top: 55px;\r\n  right: 9px;\r\n}\r\n\r\n.modal-reservation {\r\n  background-color: black;\r\n  max-height: 100vh;\r\n  position: absolute;\r\n}\r\n\r\n.holder {\r\n  background-color: white;\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join("");
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === "string") {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, ""]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js":
/*!************************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/cssWithMappingToString.js ***!
  \************************************************************************/
/***/ ((module) => {



function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr && (typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]); if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

module.exports = function cssWithMappingToString(item) {
  var _item = _slicedToArray(item, 4),
      content = _item[1],
      cssMapping = _item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    // eslint-disable-next-line no-undef
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./src/scss/style.scss":
/*!*****************************!*\
  !*** ./src/scss/style.scss ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./style.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/scss/style.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/comment.js":
/*!************************!*\
  !*** ./src/comment.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const Comment = (() => {
  const modal = document.querySelector('.modal');
  const allComments = document.getElementById('all-comments');
  const form = document.querySelector('form');
  const name = form.firstElementChild.firstElementChild;
  const insight = form.children[1].children[0].children[0];
  const ul = document.getElementById('all-comments').children[1];

  const clearComment = () => {
    for (let i = 0; i < allComments.childElementCount; i += 1) {
      allComments.children[i].innerText = '';
    }
  };

  const clearForm = () => {
    name.value = '';
    insight.value = '';
  };

  const closeModal = () => {
    const closeModal = document.getElementById('close-modal');
    closeModal.addEventListener('click', () => {
      modal.classList.remove('d-block');
      modal.classList.add('d-none');
      clearComment();
    });
  };

  const showModal = () => {
    modal.classList.remove('d-none');
    modal.classList.add('d-block');
  };

  const showImage = (dataImage) => {
    const image = document.querySelector('img');
    image.src = dataImage;
  };

  const showName = (dataName) => {
    const title = document.querySelector('h2');
    title.innerText = dataName;
  };

  const showInfo = (data) => {
    const info = document.querySelector('.info');
    info.innerHTML = '';
    info.innerHTML += `<div>
                        <h5>Genre: ${data.genres}</h5>
                        <h5>Language: ${data.language}</h5>
                     </div>
                     <div>
                       <h5>Rating: ${data.rating.average} / 10</h5>
                       <h5>Duration: ${data.runtime} min</h5>
                     </div>`;
  };

  const commentDate = () => {
    const today = new Date();
    const [dd, mm, yyyy] = [
      today.getDate(),
      today.getMonth(),
      today.getFullYear(),
    ];
    const commentDate = `${dd}/${mm}/${yyyy}`;
    return commentDate;
  };

  const countComment = () => {
    const total = allComments.lastElementChild.childElementCount + 1;
    allComments.firstElementChild.innerText = `Comments(${total})`;
  };

  const addComment = () => {
    countComment();
    const li = document.createElement('li');
    ul.append(li);
    li.innerText = `${commentDate()} ${name.value}: ${insight.value}`;
    clearForm();
  };
  return {
    showModal,
    closeModal,
    showImage,
    showName,
    showInfo,
    addComment,
  };
})();
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Comment);


/***/ }),

/***/ "./src/js/APIHelper.js":
/*!*****************************!*\
  !*** ./src/js/APIHelper.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ APIHelper)
/* harmony export */ });
class APIHelper {
  static baseURL = 'https://api.tvmaze.com/shows';

  static async getAll(page = 1) {
    try {
      const shows = await fetch(`${APIHelper.baseURL}?page=${page}`).then(
        (response) => response.json(),
      );
      return shows;
    } catch {
      console.log("Error: Couldn't fetch films data");
    }
    return [];
  }

  static async getDetails(showId) {
    try {
      const showDetails = await fetch(`${APIHelper.baseURL}/${showId}`).then(
        (response) => response.json(),
      );
      return showDetails;
    } catch {
      console.log("Error: Couldn't fetch film details");
    }
    return {};
  }
}


/***/ }),

/***/ "./src/js/InvolvementAPIHelper.js":
/*!****************************************!*\
  !*** ./src/js/InvolvementAPIHelper.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ InvolvementAPIHelper)
/* harmony export */ });
class InvolvementAPIHelper {
  static AppId = 'x3O8Z7Ily4B1bmO5FugG';

  static baseURL =
    'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/';

  static async getLikes() {
    try {
      const likes = fetch(
        `${InvolvementAPIHelper.baseURL}apps/${InvolvementAPIHelper.AppId}/likes`,
      ).then((response) => response.json());
      return likes;
    } catch (ex) {
      console.log(ex.message);
    }
    return [];
  }

  static postLikes(showId) {
    try {
      fetch(
        `${InvolvementAPIHelper.baseURL}apps/${InvolvementAPIHelper.AppId}/likes`,
        {
          method: 'POST',
          body: JSON.stringify({
            item_id: showId,
          }),
          headers: {
            'Content-type': 'application/json; charset=UTF-8',
          },
        },
      );
    } catch (ex) {
      console.log(ex.message);
    }
  }
}


/***/ }),

/***/ "./src/js/reservation.js":
/*!*******************************!*\
  !*** ./src/js/reservation.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Reservation)
/* harmony export */ });
const imageSelector = document.querySelector('.image-reservation');
const titleSelector = document.querySelector('.reservation-title');
const nameSelector = document.querySelector('.name-movie');
const languageSelector = document.querySelector('.language');
const ratingSelector = document.querySelector('.rating');
const typeSelector = document.querySelector('.type');
const description = document.querySelector('.description-movie');
const modalReservation = document.querySelector('#modalreservation');
const closeButton = document.querySelector('.close-reservation');

class Reservation {
    static showModal = () => {
      modalReservation.classList.add('show', 'd-block');
      closeButton.addEventListener('click', () => {
        modalReservation.classList.remove('show', 'd-block');
      });
    }

    static modalShowInfo = (data) => {
      imageSelector.innerHTML = `<img src=${data.image.original} class="img-fluid" alt="">`;
      titleSelector.innerHTML = data.name;
      nameSelector.innerHTML = `Name: ${data.name}`;
      languageSelector.innerHTML = `Languague: ${data.language}`;
      ratingSelector.innerHTML = `Rating: ${data.rating.average}`;
      typeSelector.innerHTML = `Type: ${data.type}`;
      description.innerHTML = data.summary;
      Reservation.showModal(modalReservation);
    }
}

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
/* harmony import */ var _scss_style_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scss/style.scss */ "./src/scss/style.scss");
/* harmony import */ var _js_APIHelper_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./js/APIHelper.js */ "./src/js/APIHelper.js");
/* harmony import */ var _comment_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./comment.js */ "./src/comment.js");
/* harmony import */ var _js_InvolvementAPIHelper_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./js/InvolvementAPIHelper.js */ "./src/js/InvolvementAPIHelper.js");
/* harmony import */ var _js_reservation_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./js/reservation.js */ "./src/js/reservation.js");







const createCardForFilm = (film, numOfLikes) => `
  <div class="card d-flex col-lg-3 col-md-5 col-10">
    <img src=${film.image.original} class="card-img-top w-100"
      alt="Show Image">
    <div class="card-body d-flex flex-column justify-content-between">
      <div class="d-flex justify-content-between align-items-center">
        <h5 class="card-title mt-2 fw-bold fs-6">${film.name}</h5>
        <i class="far fa-heart text-danger like-btn" data-id=${film.id}></i>
      </div>
      <div class="text-end fw-bold fs-6">Likes: <span class="like-number">${numOfLikes}</span></div>
      <div class="d-flex flex-column gap-2 pt-2">
        <a class="btn btn-primary comment" data-id=${film.id}>Comments</a>
        <a class="btn btn-info reservation" data-id=${film.id}>Reservations</a>
      </div>

    </div>
  </div>`;

const countShows = () => document.querySelectorAll('.card').length;

const displayShows = async (genre) => {
  document.querySelector('.numbers-text').classList.add('d-none');
  document.querySelector('.loading').classList.remove('d-none');

  const showsDiv = document.querySelector('.films');

  let shows = await _js_APIHelper_js__WEBPACK_IMPORTED_MODULE_1__["default"].getAll();

  if (genre) {
    shows = shows.filter((show) => show.genres.includes(genre));
  }

  showsDiv.innerHTML = '';
  const likes = await _js_InvolvementAPIHelper_js__WEBPACK_IMPORTED_MODULE_3__["default"].getLikes();

  shows.forEach((show) => {
    const numOfLikes = likes.filter((like) => like.item_id === show.id)[0]?.likes || 0;
    showsDiv.innerHTML += createCardForFilm(show, numOfLikes);
  });

  document.querySelector('.numbers').textContent = countShows();
  document.querySelector('.numbers-text').classList.remove('d-none');
  document.querySelector('.loading').classList.add('d-none');

  const commentBtns = document.querySelectorAll('.comment');
  commentBtns.forEach((commentBtn) => {
    commentBtn.addEventListener('click', (e) => {
      const showId = e.target.dataset.id;
      _js_APIHelper_js__WEBPACK_IMPORTED_MODULE_1__["default"].getDetails(showId).then((data) => {
        _comment_js__WEBPACK_IMPORTED_MODULE_2__["default"].showModal();
        _comment_js__WEBPACK_IMPORTED_MODULE_2__["default"].closeModal();
        _comment_js__WEBPACK_IMPORTED_MODULE_2__["default"].showImage(data.image.original);
        _comment_js__WEBPACK_IMPORTED_MODULE_2__["default"].showName(data.name);
        _comment_js__WEBPACK_IMPORTED_MODULE_2__["default"].showInfo(data);
      });
    });
  });

  const form = document.querySelector('form');
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    _comment_js__WEBPACK_IMPORTED_MODULE_2__["default"].addComment();
  });

  const reservationBtns = document.querySelectorAll('.reservation');
  reservationBtns.forEach((reservationBtn) => {
    reservationBtn.addEventListener('click', (e) => {
      _js_APIHelper_js__WEBPACK_IMPORTED_MODULE_1__["default"].getDetails(e.target.dataset.id).then((data) => {
        _js_reservation_js__WEBPACK_IMPORTED_MODULE_4__["default"].modalShowInfo(data);
      });
    });
  });

  const likeBtns = document.querySelectorAll('.like-btn');
  likeBtns.forEach((likeBtn) => {
    likeBtn.addEventListener('click', (e) => {
      const showId = parseInt(e.target.dataset.id, 10);
      _js_InvolvementAPIHelper_js__WEBPACK_IMPORTED_MODULE_3__["default"].postLikes(showId);
      const likeNumberDiv = e.target.parentNode.parentNode.querySelector('.like-number');
      likeNumberDiv.innerHTML = parseInt(likeNumberDiv.innerHTML, 10) + 1;
    });
  });
};

displayShows();

// filter results based on show type
document.querySelectorAll('.nav-link').forEach((link) => {
  link.addEventListener('click', (e) => {
    document.querySelectorAll('.nav-link').forEach((l) => {
      l.classList.remove('active');
    });
    displayShows(e.target.textContent.split(' ').join('-'));
    e.target.classList.add('active');
  });
});

document.querySelector('.navbar-brand').addEventListener('click', () => {
  document.querySelectorAll('.nav-link').forEach((l) => {
    l.classList.remove('active');
  });
  displayShows();
});

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QWtCO0FBQ3RCLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0EsTUFBTSxtRUFBb0I7QUFDMUIsUUFBUSx3RUFBeUI7QUFDakMsT0FBTztBQUNQLEtBQUs7QUFDTCxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTSw2RUFBOEI7QUFDcEM7QUFDQTtBQUNBLEtBQUs7QUFDTCxHQUFHO0FBQ0g7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsR0FBRztBQUNILENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0EsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3dlYnBhY2stdGVtcGxhdGUvLi9zcmMvc2Nzcy9zdHlsZS5zY3NzIiwid2VicGFjazovL3dlYnBhY2stdGVtcGxhdGUvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3dlYnBhY2stdGVtcGxhdGUvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvY3NzV2l0aE1hcHBpbmdUb1N0cmluZy5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLXRlbXBsYXRlLy4vc3JjL3Njc3Mvc3R5bGUuc2Nzcz8yZTRkIiwid2VicGFjazovL3dlYnBhY2stdGVtcGxhdGUvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay10ZW1wbGF0ZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay10ZW1wbGF0ZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLXRlbXBsYXRlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3dlYnBhY2stdGVtcGxhdGUvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLXRlbXBsYXRlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vd2VicGFjay10ZW1wbGF0ZS8uL3NyYy9jb21tZW50LmpzIiwid2VicGFjazovL3dlYnBhY2stdGVtcGxhdGUvLi9zcmMvanMvQVBJSGVscGVyLmpzIiwid2VicGFjazovL3dlYnBhY2stdGVtcGxhdGUvLi9zcmMvanMvSW52b2x2ZW1lbnRBUElIZWxwZXIuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay10ZW1wbGF0ZS8uL3NyYy9qcy9yZXNlcnZhdGlvbi5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLXRlbXBsYXRlL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3dlYnBhY2stdGVtcGxhdGUvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vd2VicGFjay10ZW1wbGF0ZS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vd2VicGFjay10ZW1wbGF0ZS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3dlYnBhY2stdGVtcGxhdGUvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly93ZWJwYWNrLXRlbXBsYXRlLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvY3NzV2l0aE1hcHBpbmdUb1N0cmluZy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIkBpbXBvcnQgdXJsKGh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9TGF0bzp3Z2h0QDQwMDs3MDA7OTAwJmRpc3BsYXk9c3dhcCk7XCJdKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIi8qIEJveCBzaXppbmcgcnVsZXMgKi9cXG4qLFxcbio6OmJlZm9yZSxcXG4qOjphZnRlciB7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG5cXG4vKiBSZW1vdmUgZGVmYXVsdCBtYXJnaW4gKi9cXG5ib2R5LFxcbmgxLFxcbmgyLFxcbmgzLFxcbmg0LFxcbnAsXFxuZmlndXJlLFxcbmJsb2NrcXVvdGUsXFxuZGwsXFxuZGQge1xcbiAgbWFyZ2luOiAwO1xcbn1cXG5cXG4vKiBSZW1vdmUgbGlzdCBzdHlsZXMgb24gdWwsIG9sIGVsZW1lbnRzIHdpdGggYSBsaXN0IHJvbGUsIHdoaWNoIHN1Z2dlc3RzIGRlZmF1bHQgc3R5bGluZyB3aWxsIGJlIHJlbW92ZWQgKi9cXG51bCxcXG5vbCB7XFxuICBwYWRkaW5nOiAwO1xcbiAgbWFyZ2luOiAwO1xcbiAgbGlzdC1zdHlsZTogbm9uZTtcXG59XFxuXFxuLyogU2V0IGNvcmUgcm9vdCBkZWZhdWx0cyAqL1xcbmh0bWw6Zm9jdXMtd2l0aGluIHtcXG4gIHNjcm9sbC1iZWhhdmlvcjogc21vb3RoO1xcbn1cXG5cXG4vKiBTZXQgY29yZSBib2R5IGRlZmF1bHRzICovXFxuYm9keSB7XFxuICBtaW4taGVpZ2h0OiAxMDB2aDtcXG4gIHRleHQtcmVuZGVyaW5nOiBvcHRpbWl6ZVNwZWVkO1xcbiAgbGluZS1oZWlnaHQ6IDEuNTtcXG59XFxuXFxuLyogQSBlbGVtZW50cyB0aGF0IGRvbid0IGhhdmUgYSBjbGFzcyBnZXQgZGVmYXVsdCBzdHlsZXMgKi9cXG5hOm5vdChbY2xhc3NdKSB7XFxuICB0ZXh0LWRlY29yYXRpb24tc2tpcC1pbms6IGF1dG87XFxufVxcblxcbi8qIE1ha2UgaW1hZ2VzIGVhc2llciB0byB3b3JrIHdpdGggKi9cXG5pbWcsXFxucGljdHVyZSB7XFxuICBtYXgtd2lkdGg6IDEwMCU7XFxuICBkaXNwbGF5OiBibG9jaztcXG59XFxuXFxuLyogSW5oZXJpdCBmb250cyBmb3IgaW5wdXRzIGFuZCBidXR0b25zICovXFxuaW5wdXQsXFxuYnV0dG9uLFxcbnRleHRhcmVhLFxcbnNlbGVjdCB7XFxuICBmb250OiBpbmhlcml0O1xcbn1cXG5cXG4vKiBSZW1vdmUgYWxsIGFuaW1hdGlvbnMsIHRyYW5zaXRpb25zIGFuZCBzbW9vdGggc2Nyb2xsIGZvciBwZW9wbGUgdGhhdCBwcmVmZXIgbm90IHRvIHNlZSB0aGVtICovXFxuQG1lZGlhIChwcmVmZXJzLXJlZHVjZWQtbW90aW9uOiByZWR1Y2UpIHtcXG4gIGh0bWw6Zm9jdXMtd2l0aGluIHtcXG4gICAgc2Nyb2xsLWJlaGF2aW9yOiBhdXRvO1xcbiAgfVxcblxcbiAgKixcXG4qOjpiZWZvcmUsXFxuKjo6YWZ0ZXIge1xcbiAgICBhbmltYXRpb24tZHVyYXRpb246IDAuMDFtcyAhaW1wb3J0YW50O1xcbiAgICBhbmltYXRpb24taXRlcmF0aW9uLWNvdW50OiAxICFpbXBvcnRhbnQ7XFxuICAgIHRyYW5zaXRpb24tZHVyYXRpb246IDAuMDFtcyAhaW1wb3J0YW50O1xcbiAgICBzY3JvbGwtYmVoYXZpb3I6IGF1dG8gIWltcG9ydGFudDtcXG4gIH1cXG59XFxuaGVhZGVyIG5hdiAubmF2YmFyLWJyYW5kIHtcXG4gIGNvbG9yOiAjZTZkOWQ5ICFpbXBvcnRhbnQ7XFxufVxcblxcbm1haW4gLmNhcmQge1xcbiAgYm94LXNoYWRvdzogcmdiYSgwLCAwLCAwLCAwLjI1KSAwIDE0cHggMjhweCwgcmdiYSgwLCAwLCAwLCAwLjIyKSAwIDEwcHggMTBweDtcXG59XFxubWFpbiAuY2FyZCAuY2FyZC1pbWctdG9wIHtcXG4gIGhlaWdodDogMjcwcHg7XFxufVxcblxcbmlucHV0LFxcbmJ1dHRvbiB7XFxuICBtYXJnaW46IDE1cHggMDtcXG59XFxuXFxuLmNsb3NlIHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIHRvcDogNTVweDtcXG4gIHJpZ2h0OiA5cHg7XFxufVxcblxcbi5tb2RhbC1yZXNlcnZhdGlvbiB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcXG4gIG1heC1oZWlnaHQ6IDEwMHZoO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbn1cXG5cXG4uaG9sZGVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc2Nzcy9jb3JlL19ub3JtYWxpemUuc2Nzc1wiLFwid2VicGFjazovLy4vc3JjL3Njc3Mvc3R5bGUuc2Nzc1wiLFwid2VicGFjazovLy4vc3JjL3Njc3MvbGF5b3V0L19tYWlucGFnZS5zY3NzXCIsXCJ3ZWJwYWNrOi8vLi9zcmMvc2Nzcy9sYXlvdXQvX3Jlc2VydmF0aW9uLnNjc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUEscUJBQUE7QUFDQTs7O0VBR0Usc0JBQUE7QUNFRjs7QURDQSwwQkFBQTtBQUNBOzs7Ozs7Ozs7O0VBVUUsU0FBQTtBQ0VGOztBRENBLDJHQUFBO0FBQ0E7O0VBRUUsVUFBQTtFQUNBLFNBQUE7RUFDQSxnQkFBQTtBQ0VGOztBRENBLDJCQUFBO0FBQ0E7RUFDRSx1QkFBQTtBQ0VGOztBRENBLDJCQUFBO0FBQ0E7RUFDRSxpQkFBQTtFQUNBLDZCQUFBO0VBQ0EsZ0JBQUE7QUNFRjs7QURDQSwwREFBQTtBQUNBO0VBQ0UsOEJBQUE7QUNFRjs7QURDQSxvQ0FBQTtBQUNBOztFQUVFLGVBQUE7RUFDQSxjQUFBO0FDRUY7O0FEQ0EseUNBQUE7QUFDQTs7OztFQUlFLGFBQUE7QUNFRjs7QURDQSxnR0FBQTtBQUNBO0VBQ0U7SUFDRSxxQkFBQTtFQ0VGOztFRENBOzs7SUFHRSxxQ0FBQTtJQUNBLHVDQUFBO0lBQ0Esc0NBQUE7SUFDQSxnQ0FBQTtFQ0VGO0FBQ0Y7QUMxRUk7RUFDRSx5QkFBQTtBRDRFTjs7QUN0RUU7RUFDRSw0RUFBQTtBRHlFSjtBQ3ZFSTtFQUNFLGFBQUE7QUR5RU47O0FFdEZBOztFQUVFLGNBQUE7QUZ5RkY7O0FFdEZBO0VBQ0Usa0JBQUE7RUFDQSxTQUFBO0VBQ0EsVUFBQTtBRnlGRjs7QUV0RkE7RUFDRSx1QkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7QUZ5RkY7O0FFdEZBO0VBQ0UsdUJBQUE7QUZ5RkZcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLyogQm94IHNpemluZyBydWxlcyAqL1xcclxcbiosXFxyXFxuKjo6YmVmb3JlLFxcclxcbio6OmFmdGVyIHtcXHJcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxyXFxufVxcclxcblxcclxcbi8qIFJlbW92ZSBkZWZhdWx0IG1hcmdpbiAqL1xcclxcbmJvZHksXFxyXFxuaDEsXFxyXFxuaDIsXFxyXFxuaDMsXFxyXFxuaDQsXFxyXFxucCxcXHJcXG5maWd1cmUsXFxyXFxuYmxvY2txdW90ZSxcXHJcXG5kbCxcXHJcXG5kZCB7XFxyXFxuICBtYXJnaW46IDA7XFxyXFxufVxcclxcblxcclxcbi8qIFJlbW92ZSBsaXN0IHN0eWxlcyBvbiB1bCwgb2wgZWxlbWVudHMgd2l0aCBhIGxpc3Qgcm9sZSwgd2hpY2ggc3VnZ2VzdHMgZGVmYXVsdCBzdHlsaW5nIHdpbGwgYmUgcmVtb3ZlZCAqL1xcclxcbnVsLFxcclxcbm9sIHtcXHJcXG4gIHBhZGRpbmc6IDA7XFxyXFxuICBtYXJnaW46IDA7XFxyXFxuICBsaXN0LXN0eWxlOiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4vKiBTZXQgY29yZSByb290IGRlZmF1bHRzICovXFxyXFxuaHRtbDpmb2N1cy13aXRoaW4ge1xcclxcbiAgc2Nyb2xsLWJlaGF2aW9yOiBzbW9vdGg7XFxyXFxufVxcclxcblxcclxcbi8qIFNldCBjb3JlIGJvZHkgZGVmYXVsdHMgKi9cXHJcXG5ib2R5IHtcXHJcXG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xcclxcbiAgdGV4dC1yZW5kZXJpbmc6IG9wdGltaXplU3BlZWQ7XFxyXFxuICBsaW5lLWhlaWdodDogMS41O1xcclxcbn1cXHJcXG5cXHJcXG4vKiBBIGVsZW1lbnRzIHRoYXQgZG9uJ3QgaGF2ZSBhIGNsYXNzIGdldCBkZWZhdWx0IHN0eWxlcyAqL1xcclxcbmE6bm90KFtjbGFzc10pIHtcXHJcXG4gIHRleHQtZGVjb3JhdGlvbi1za2lwLWluazogYXV0bztcXHJcXG59XFxyXFxuXFxyXFxuLyogTWFrZSBpbWFnZXMgZWFzaWVyIHRvIHdvcmsgd2l0aCAqL1xcclxcbmltZyxcXHJcXG5waWN0dXJlIHtcXHJcXG4gIG1heC13aWR0aDogMTAwJTtcXHJcXG4gIGRpc3BsYXk6IGJsb2NrO1xcclxcbn1cXHJcXG5cXHJcXG4vKiBJbmhlcml0IGZvbnRzIGZvciBpbnB1dHMgYW5kIGJ1dHRvbnMgKi9cXHJcXG5pbnB1dCxcXHJcXG5idXR0b24sXFxyXFxudGV4dGFyZWEsXFxyXFxuc2VsZWN0IHtcXHJcXG4gIGZvbnQ6IGluaGVyaXQ7XFxyXFxufVxcclxcblxcclxcbi8qIFJlbW92ZSBhbGwgYW5pbWF0aW9ucywgdHJhbnNpdGlvbnMgYW5kIHNtb290aCBzY3JvbGwgZm9yIHBlb3BsZSB0aGF0IHByZWZlciBub3QgdG8gc2VlIHRoZW0gKi9cXHJcXG5AbWVkaWEgKHByZWZlcnMtcmVkdWNlZC1tb3Rpb246IHJlZHVjZSkge1xcclxcbiAgaHRtbDpmb2N1cy13aXRoaW4ge1xcclxcbiAgICBzY3JvbGwtYmVoYXZpb3I6IGF1dG87XFxyXFxuICB9XFxyXFxuXFxyXFxuICAqLFxcclxcbiAgKjo6YmVmb3JlLFxcclxcbiAgKjo6YWZ0ZXIge1xcclxcbiAgICBhbmltYXRpb24tZHVyYXRpb246IDAuMDFtcyAhaW1wb3J0YW50O1xcclxcbiAgICBhbmltYXRpb24taXRlcmF0aW9uLWNvdW50OiAxICFpbXBvcnRhbnQ7XFxyXFxuICAgIHRyYW5zaXRpb24tZHVyYXRpb246IDAuMDFtcyAhaW1wb3J0YW50O1xcclxcbiAgICBzY3JvbGwtYmVoYXZpb3I6IGF1dG8gIWltcG9ydGFudDtcXHJcXG4gIH1cXHJcXG59XFxyXFxuXCIsXCJAaW1wb3J0IHVybChcXFwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1MYXRvOndnaHRANDAwOzcwMDs5MDAmZGlzcGxheT1zd2FwXFxcIik7XFxuLyogQm94IHNpemluZyBydWxlcyAqL1xcbiosXFxuKjo6YmVmb3JlLFxcbio6OmFmdGVyIHtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcblxcbi8qIFJlbW92ZSBkZWZhdWx0IG1hcmdpbiAqL1xcbmJvZHksXFxuaDEsXFxuaDIsXFxuaDMsXFxuaDQsXFxucCxcXG5maWd1cmUsXFxuYmxvY2txdW90ZSxcXG5kbCxcXG5kZCB7XFxuICBtYXJnaW46IDA7XFxufVxcblxcbi8qIFJlbW92ZSBsaXN0IHN0eWxlcyBvbiB1bCwgb2wgZWxlbWVudHMgd2l0aCBhIGxpc3Qgcm9sZSwgd2hpY2ggc3VnZ2VzdHMgZGVmYXVsdCBzdHlsaW5nIHdpbGwgYmUgcmVtb3ZlZCAqL1xcbnVsLFxcbm9sIHtcXG4gIHBhZGRpbmc6IDA7XFxuICBtYXJnaW46IDA7XFxuICBsaXN0LXN0eWxlOiBub25lO1xcbn1cXG5cXG4vKiBTZXQgY29yZSByb290IGRlZmF1bHRzICovXFxuaHRtbDpmb2N1cy13aXRoaW4ge1xcbiAgc2Nyb2xsLWJlaGF2aW9yOiBzbW9vdGg7XFxufVxcblxcbi8qIFNldCBjb3JlIGJvZHkgZGVmYXVsdHMgKi9cXG5ib2R5IHtcXG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xcbiAgdGV4dC1yZW5kZXJpbmc6IG9wdGltaXplU3BlZWQ7XFxuICBsaW5lLWhlaWdodDogMS41O1xcbn1cXG5cXG4vKiBBIGVsZW1lbnRzIHRoYXQgZG9uJ3QgaGF2ZSBhIGNsYXNzIGdldCBkZWZhdWx0IHN0eWxlcyAqL1xcbmE6bm90KFtjbGFzc10pIHtcXG4gIHRleHQtZGVjb3JhdGlvbi1za2lwLWluazogYXV0bztcXG59XFxuXFxuLyogTWFrZSBpbWFnZXMgZWFzaWVyIHRvIHdvcmsgd2l0aCAqL1xcbmltZyxcXG5waWN0dXJlIHtcXG4gIG1heC13aWR0aDogMTAwJTtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbn1cXG5cXG4vKiBJbmhlcml0IGZvbnRzIGZvciBpbnB1dHMgYW5kIGJ1dHRvbnMgKi9cXG5pbnB1dCxcXG5idXR0b24sXFxudGV4dGFyZWEsXFxuc2VsZWN0IHtcXG4gIGZvbnQ6IGluaGVyaXQ7XFxufVxcblxcbi8qIFJlbW92ZSBhbGwgYW5pbWF0aW9ucywgdHJhbnNpdGlvbnMgYW5kIHNtb290aCBzY3JvbGwgZm9yIHBlb3BsZSB0aGF0IHByZWZlciBub3QgdG8gc2VlIHRoZW0gKi9cXG5AbWVkaWEgKHByZWZlcnMtcmVkdWNlZC1tb3Rpb246IHJlZHVjZSkge1xcbiAgaHRtbDpmb2N1cy13aXRoaW4ge1xcbiAgICBzY3JvbGwtYmVoYXZpb3I6IGF1dG87XFxuICB9XFxuXFxuICAqLFxcbio6OmJlZm9yZSxcXG4qOjphZnRlciB7XFxuICAgIGFuaW1hdGlvbi1kdXJhdGlvbjogMC4wMW1zICFpbXBvcnRhbnQ7XFxuICAgIGFuaW1hdGlvbi1pdGVyYXRpb24tY291bnQ6IDEgIWltcG9ydGFudDtcXG4gICAgdHJhbnNpdGlvbi1kdXJhdGlvbjogMC4wMW1zICFpbXBvcnRhbnQ7XFxuICAgIHNjcm9sbC1iZWhhdmlvcjogYXV0byAhaW1wb3J0YW50O1xcbiAgfVxcbn1cXG5oZWFkZXIgbmF2IC5uYXZiYXItYnJhbmQge1xcbiAgY29sb3I6ICNlNmQ5ZDkgIWltcG9ydGFudDtcXG59XFxuXFxubWFpbiAuY2FyZCB7XFxuICBib3gtc2hhZG93OiByZ2JhKDAsIDAsIDAsIDAuMjUpIDAgMTRweCAyOHB4LCByZ2JhKDAsIDAsIDAsIDAuMjIpIDAgMTBweCAxMHB4O1xcbn1cXG5tYWluIC5jYXJkIC5jYXJkLWltZy10b3Age1xcbiAgaGVpZ2h0OiAyNzBweDtcXG59XFxuXFxuaW5wdXQsXFxuYnV0dG9uIHtcXG4gIG1hcmdpbjogMTVweCAwO1xcbn1cXG5cXG4uY2xvc2Uge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgdG9wOiA1NXB4O1xcbiAgcmlnaHQ6IDlweDtcXG59XFxuXFxuLm1vZGFsLXJlc2VydmF0aW9uIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xcbiAgbWF4LWhlaWdodDogMTAwdmg7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxufVxcblxcbi5ob2xkZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxufVwiLFwiaGVhZGVyIHtcXHJcXG4gIG5hdiB7XFxyXFxuICAgIC5uYXZiYXItYnJhbmQge1xcclxcbiAgICAgIGNvbG9yOiAjZTZkOWQ5ICFpbXBvcnRhbnQ7XFxyXFxuICAgIH1cXHJcXG4gIH1cXHJcXG59XFxyXFxuXFxyXFxubWFpbiB7XFxyXFxuICAuY2FyZCB7XFxyXFxuICAgIGJveC1zaGFkb3c6IHJnYmEoMCwgMCwgMCwgMC4yNSkgMCAxNHB4IDI4cHgsIHJnYmEoMCwgMCwgMCwgMC4yMikgMCAxMHB4IDEwcHg7XFxyXFxuXFxyXFxuICAgIC5jYXJkLWltZy10b3Age1xcclxcbiAgICAgIGhlaWdodDogMjcwcHg7XFxyXFxuICAgIH1cXHJcXG4gIH1cXHJcXG59XFxyXFxuXCIsXCJpbnB1dCxcXHJcXG5idXR0b24ge1xcclxcbiAgbWFyZ2luOiAxNXB4IDA7XFxyXFxufVxcclxcblxcclxcbi5jbG9zZSB7XFxyXFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICB0b3A6IDU1cHg7XFxyXFxuICByaWdodDogOXB4O1xcclxcbn1cXHJcXG5cXHJcXG4ubW9kYWwtcmVzZXJ2YXRpb24ge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XFxyXFxuICBtYXgtaGVpZ2h0OiAxMDB2aDtcXHJcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG59XFxyXFxuXFxyXFxuLmhvbGRlciB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXHJcXG59XFxyXFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xuLy8gY3NzIGJhc2UgY29kZSwgaW5qZWN0ZWQgYnkgdGhlIGNzcy1sb2FkZXJcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBmdW5jLW5hbWVzXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIHJldHVybiBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoY29udGVudCwgXCJ9XCIpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZnVuYy1uYW1lc1xuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gKG1vZHVsZXMsIG1lZGlhUXVlcnksIGRlZHVwZSkge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXBhcmFtLXJlYXNzaWduXG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCBcIlwiXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcHJlZmVyLWRlc3RydWN0dXJpbmdcbiAgICAgICAgdmFyIGlkID0gdGhpc1tpXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBtb2R1bGVzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfaV0pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnRpbnVlXG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWFRdWVyeSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWFRdWVyeTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzJdID0gXCJcIi5jb25jYXQobWVkaWFRdWVyeSwgXCIgYW5kIFwiKS5jb25jYXQoaXRlbVsyXSk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmZ1bmN0aW9uIF9zbGljZWRUb0FycmF5KGFyciwgaSkgeyByZXR1cm4gX2FycmF5V2l0aEhvbGVzKGFycikgfHwgX2l0ZXJhYmxlVG9BcnJheUxpbWl0KGFyciwgaSkgfHwgX3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5KGFyciwgaSkgfHwgX25vbkl0ZXJhYmxlUmVzdCgpOyB9XG5cbmZ1bmN0aW9uIF9ub25JdGVyYWJsZVJlc3QoKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJJbnZhbGlkIGF0dGVtcHQgdG8gZGVzdHJ1Y3R1cmUgbm9uLWl0ZXJhYmxlIGluc3RhbmNlLlxcbkluIG9yZGVyIHRvIGJlIGl0ZXJhYmxlLCBub24tYXJyYXkgb2JqZWN0cyBtdXN0IGhhdmUgYSBbU3ltYm9sLml0ZXJhdG9yXSgpIG1ldGhvZC5cIik7IH1cblxuZnVuY3Rpb24gX3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5KG8sIG1pbkxlbikgeyBpZiAoIW8pIHJldHVybjsgaWYgKHR5cGVvZiBvID09PSBcInN0cmluZ1wiKSByZXR1cm4gX2FycmF5TGlrZVRvQXJyYXkobywgbWluTGVuKTsgdmFyIG4gPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwobykuc2xpY2UoOCwgLTEpOyBpZiAobiA9PT0gXCJPYmplY3RcIiAmJiBvLmNvbnN0cnVjdG9yKSBuID0gby5jb25zdHJ1Y3Rvci5uYW1lOyBpZiAobiA9PT0gXCJNYXBcIiB8fCBuID09PSBcIlNldFwiKSByZXR1cm4gQXJyYXkuZnJvbShvKTsgaWYgKG4gPT09IFwiQXJndW1lbnRzXCIgfHwgL14oPzpVaXxJKW50KD86OHwxNnwzMikoPzpDbGFtcGVkKT9BcnJheSQvLnRlc3QobikpIHJldHVybiBfYXJyYXlMaWtlVG9BcnJheShvLCBtaW5MZW4pOyB9XG5cbmZ1bmN0aW9uIF9hcnJheUxpa2VUb0FycmF5KGFyciwgbGVuKSB7IGlmIChsZW4gPT0gbnVsbCB8fCBsZW4gPiBhcnIubGVuZ3RoKSBsZW4gPSBhcnIubGVuZ3RoOyBmb3IgKHZhciBpID0gMCwgYXJyMiA9IG5ldyBBcnJheShsZW4pOyBpIDwgbGVuOyBpKyspIHsgYXJyMltpXSA9IGFycltpXTsgfSByZXR1cm4gYXJyMjsgfVxuXG5mdW5jdGlvbiBfaXRlcmFibGVUb0FycmF5TGltaXQoYXJyLCBpKSB7IHZhciBfaSA9IGFyciAmJiAodHlwZW9mIFN5bWJvbCAhPT0gXCJ1bmRlZmluZWRcIiAmJiBhcnJbU3ltYm9sLml0ZXJhdG9yXSB8fCBhcnJbXCJAQGl0ZXJhdG9yXCJdKTsgaWYgKF9pID09IG51bGwpIHJldHVybjsgdmFyIF9hcnIgPSBbXTsgdmFyIF9uID0gdHJ1ZTsgdmFyIF9kID0gZmFsc2U7IHZhciBfcywgX2U7IHRyeSB7IGZvciAoX2kgPSBfaS5jYWxsKGFycik7ICEoX24gPSAoX3MgPSBfaS5uZXh0KCkpLmRvbmUpOyBfbiA9IHRydWUpIHsgX2Fyci5wdXNoKF9zLnZhbHVlKTsgaWYgKGkgJiYgX2Fyci5sZW5ndGggPT09IGkpIGJyZWFrOyB9IH0gY2F0Y2ggKGVycikgeyBfZCA9IHRydWU7IF9lID0gZXJyOyB9IGZpbmFsbHkgeyB0cnkgeyBpZiAoIV9uICYmIF9pW1wicmV0dXJuXCJdICE9IG51bGwpIF9pW1wicmV0dXJuXCJdKCk7IH0gZmluYWxseSB7IGlmIChfZCkgdGhyb3cgX2U7IH0gfSByZXR1cm4gX2FycjsgfVxuXG5mdW5jdGlvbiBfYXJyYXlXaXRoSG9sZXMoYXJyKSB7IGlmIChBcnJheS5pc0FycmF5KGFycikpIHJldHVybiBhcnI7IH1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pIHtcbiAgdmFyIF9pdGVtID0gX3NsaWNlZFRvQXJyYXkoaXRlbSwgNCksXG4gICAgICBjb250ZW50ID0gX2l0ZW1bMV0sXG4gICAgICBjc3NNYXBwaW5nID0gX2l0ZW1bM107XG5cbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bmRlZlxuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCBcIlwiKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLnNjc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5zY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImNvbnN0IENvbW1lbnQgPSAoKCkgPT4ge1xuICBjb25zdCBtb2RhbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tb2RhbCcpO1xuICBjb25zdCBhbGxDb21tZW50cyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhbGwtY29tbWVudHMnKTtcbiAgY29uc3QgZm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2Zvcm0nKTtcbiAgY29uc3QgbmFtZSA9IGZvcm0uZmlyc3RFbGVtZW50Q2hpbGQuZmlyc3RFbGVtZW50Q2hpbGQ7XG4gIGNvbnN0IGluc2lnaHQgPSBmb3JtLmNoaWxkcmVuWzFdLmNoaWxkcmVuWzBdLmNoaWxkcmVuWzBdO1xuICBjb25zdCB1bCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhbGwtY29tbWVudHMnKS5jaGlsZHJlblsxXTtcblxuICBjb25zdCBjbGVhckNvbW1lbnQgPSAoKSA9PiB7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBhbGxDb21tZW50cy5jaGlsZEVsZW1lbnRDb3VudDsgaSArPSAxKSB7XG4gICAgICBhbGxDb21tZW50cy5jaGlsZHJlbltpXS5pbm5lclRleHQgPSAnJztcbiAgICB9XG4gIH07XG5cbiAgY29uc3QgY2xlYXJGb3JtID0gKCkgPT4ge1xuICAgIG5hbWUudmFsdWUgPSAnJztcbiAgICBpbnNpZ2h0LnZhbHVlID0gJyc7XG4gIH07XG5cbiAgY29uc3QgY2xvc2VNb2RhbCA9ICgpID0+IHtcbiAgICBjb25zdCBjbG9zZU1vZGFsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Nsb3NlLW1vZGFsJyk7XG4gICAgY2xvc2VNb2RhbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgIG1vZGFsLmNsYXNzTGlzdC5yZW1vdmUoJ2QtYmxvY2snKTtcbiAgICAgIG1vZGFsLmNsYXNzTGlzdC5hZGQoJ2Qtbm9uZScpO1xuICAgICAgY2xlYXJDb21tZW50KCk7XG4gICAgfSk7XG4gIH07XG5cbiAgY29uc3Qgc2hvd01vZGFsID0gKCkgPT4ge1xuICAgIG1vZGFsLmNsYXNzTGlzdC5yZW1vdmUoJ2Qtbm9uZScpO1xuICAgIG1vZGFsLmNsYXNzTGlzdC5hZGQoJ2QtYmxvY2snKTtcbiAgfTtcblxuICBjb25zdCBzaG93SW1hZ2UgPSAoZGF0YUltYWdlKSA9PiB7XG4gICAgY29uc3QgaW1hZ2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdpbWcnKTtcbiAgICBpbWFnZS5zcmMgPSBkYXRhSW1hZ2U7XG4gIH07XG5cbiAgY29uc3Qgc2hvd05hbWUgPSAoZGF0YU5hbWUpID0+IHtcbiAgICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2gyJyk7XG4gICAgdGl0bGUuaW5uZXJUZXh0ID0gZGF0YU5hbWU7XG4gIH07XG5cbiAgY29uc3Qgc2hvd0luZm8gPSAoZGF0YSkgPT4ge1xuICAgIGNvbnN0IGluZm8gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaW5mbycpO1xuICAgIGluZm8uaW5uZXJIVE1MID0gJyc7XG4gICAgaW5mby5pbm5lckhUTUwgKz0gYDxkaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aDU+R2VucmU6ICR7ZGF0YS5nZW5yZXN9PC9oNT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxoNT5MYW5ndWFnZTogJHtkYXRhLmxhbmd1YWdlfTwvaDU+XG4gICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgICAgIDxoNT5SYXRpbmc6ICR7ZGF0YS5yYXRpbmcuYXZlcmFnZX0gLyAxMDwvaDU+XG4gICAgICAgICAgICAgICAgICAgICAgIDxoNT5EdXJhdGlvbjogJHtkYXRhLnJ1bnRpbWV9IG1pbjwvaDU+XG4gICAgICAgICAgICAgICAgICAgICA8L2Rpdj5gO1xuICB9O1xuXG4gIGNvbnN0IGNvbW1lbnREYXRlID0gKCkgPT4ge1xuICAgIGNvbnN0IHRvZGF5ID0gbmV3IERhdGUoKTtcbiAgICBjb25zdCBbZGQsIG1tLCB5eXl5XSA9IFtcbiAgICAgIHRvZGF5LmdldERhdGUoKSxcbiAgICAgIHRvZGF5LmdldE1vbnRoKCksXG4gICAgICB0b2RheS5nZXRGdWxsWWVhcigpLFxuICAgIF07XG4gICAgY29uc3QgY29tbWVudERhdGUgPSBgJHtkZH0vJHttbX0vJHt5eXl5fWA7XG4gICAgcmV0dXJuIGNvbW1lbnREYXRlO1xuICB9O1xuXG4gIGNvbnN0IGNvdW50Q29tbWVudCA9ICgpID0+IHtcbiAgICBjb25zdCB0b3RhbCA9IGFsbENvbW1lbnRzLmxhc3RFbGVtZW50Q2hpbGQuY2hpbGRFbGVtZW50Q291bnQgKyAxO1xuICAgIGFsbENvbW1lbnRzLmZpcnN0RWxlbWVudENoaWxkLmlubmVyVGV4dCA9IGBDb21tZW50cygke3RvdGFsfSlgO1xuICB9O1xuXG4gIGNvbnN0IGFkZENvbW1lbnQgPSAoKSA9PiB7XG4gICAgY291bnRDb21tZW50KCk7XG4gICAgY29uc3QgbGkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuICAgIHVsLmFwcGVuZChsaSk7XG4gICAgbGkuaW5uZXJUZXh0ID0gYCR7Y29tbWVudERhdGUoKX0gJHtuYW1lLnZhbHVlfTogJHtpbnNpZ2h0LnZhbHVlfWA7XG4gICAgY2xlYXJGb3JtKCk7XG4gIH07XG4gIHJldHVybiB7XG4gICAgc2hvd01vZGFsLFxuICAgIGNsb3NlTW9kYWwsXG4gICAgc2hvd0ltYWdlLFxuICAgIHNob3dOYW1lLFxuICAgIHNob3dJbmZvLFxuICAgIGFkZENvbW1lbnQsXG4gIH07XG59KSgpO1xuZXhwb3J0IGRlZmF1bHQgQ29tbWVudDtcbiIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIEFQSUhlbHBlciB7XG4gIHN0YXRpYyBiYXNlVVJMID0gJ2h0dHBzOi8vYXBpLnR2bWF6ZS5jb20vc2hvd3MnO1xuXG4gIHN0YXRpYyBhc3luYyBnZXRBbGwocGFnZSA9IDEpIHtcbiAgICB0cnkge1xuICAgICAgY29uc3Qgc2hvd3MgPSBhd2FpdCBmZXRjaChgJHtBUElIZWxwZXIuYmFzZVVSTH0/cGFnZT0ke3BhZ2V9YCkudGhlbihcbiAgICAgICAgKHJlc3BvbnNlKSA9PiByZXNwb25zZS5qc29uKCksXG4gICAgICApO1xuICAgICAgcmV0dXJuIHNob3dzO1xuICAgIH0gY2F0Y2gge1xuICAgICAgY29uc29sZS5sb2coXCJFcnJvcjogQ291bGRuJ3QgZmV0Y2ggZmlsbXMgZGF0YVwiKTtcbiAgICB9XG4gICAgcmV0dXJuIFtdO1xuICB9XG5cbiAgc3RhdGljIGFzeW5jIGdldERldGFpbHMoc2hvd0lkKSB7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IHNob3dEZXRhaWxzID0gYXdhaXQgZmV0Y2goYCR7QVBJSGVscGVyLmJhc2VVUkx9LyR7c2hvd0lkfWApLnRoZW4oXG4gICAgICAgIChyZXNwb25zZSkgPT4gcmVzcG9uc2UuanNvbigpLFxuICAgICAgKTtcbiAgICAgIHJldHVybiBzaG93RGV0YWlscztcbiAgICB9IGNhdGNoIHtcbiAgICAgIGNvbnNvbGUubG9nKFwiRXJyb3I6IENvdWxkbid0IGZldGNoIGZpbG0gZGV0YWlsc1wiKTtcbiAgICB9XG4gICAgcmV0dXJuIHt9O1xuICB9XG59XG4iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBJbnZvbHZlbWVudEFQSUhlbHBlciB7XG4gIHN0YXRpYyBBcHBJZCA9ICd4M084WjdJbHk0QjFibU81RnVnRyc7XG5cbiAgc3RhdGljIGJhc2VVUkwgPVxuICAgICdodHRwczovL3VzLWNlbnRyYWwxLWludm9sdmVtZW50LWFwaS5jbG91ZGZ1bmN0aW9ucy5uZXQvY2Fwc3RvbmVBcGkvJztcblxuICBzdGF0aWMgYXN5bmMgZ2V0TGlrZXMoKSB7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IGxpa2VzID0gZmV0Y2goXG4gICAgICAgIGAke0ludm9sdmVtZW50QVBJSGVscGVyLmJhc2VVUkx9YXBwcy8ke0ludm9sdmVtZW50QVBJSGVscGVyLkFwcElkfS9saWtlc2AsXG4gICAgICApLnRoZW4oKHJlc3BvbnNlKSA9PiByZXNwb25zZS5qc29uKCkpO1xuICAgICAgcmV0dXJuIGxpa2VzO1xuICAgIH0gY2F0Y2ggKGV4KSB7XG4gICAgICBjb25zb2xlLmxvZyhleC5tZXNzYWdlKTtcbiAgICB9XG4gICAgcmV0dXJuIFtdO1xuICB9XG5cbiAgc3RhdGljIHBvc3RMaWtlcyhzaG93SWQpIHtcbiAgICB0cnkge1xuICAgICAgZmV0Y2goXG4gICAgICAgIGAke0ludm9sdmVtZW50QVBJSGVscGVyLmJhc2VVUkx9YXBwcy8ke0ludm9sdmVtZW50QVBJSGVscGVyLkFwcElkfS9saWtlc2AsXG4gICAgICAgIHtcbiAgICAgICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7XG4gICAgICAgICAgICBpdGVtX2lkOiBzaG93SWQsXG4gICAgICAgICAgfSksXG4gICAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgJ0NvbnRlbnQtdHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uOyBjaGFyc2V0PVVURi04JyxcbiAgICAgICAgICB9LFxuICAgICAgICB9LFxuICAgICAgKTtcbiAgICB9IGNhdGNoIChleCkge1xuICAgICAgY29uc29sZS5sb2coZXgubWVzc2FnZSk7XG4gICAgfVxuICB9XG59XG4iLCJjb25zdCBpbWFnZVNlbGVjdG9yID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmltYWdlLXJlc2VydmF0aW9uJyk7XG5jb25zdCB0aXRsZVNlbGVjdG9yID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnJlc2VydmF0aW9uLXRpdGxlJyk7XG5jb25zdCBuYW1lU2VsZWN0b3IgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubmFtZS1tb3ZpZScpO1xuY29uc3QgbGFuZ3VhZ2VTZWxlY3RvciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5sYW5ndWFnZScpO1xuY29uc3QgcmF0aW5nU2VsZWN0b3IgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucmF0aW5nJyk7XG5jb25zdCB0eXBlU2VsZWN0b3IgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudHlwZScpO1xuY29uc3QgZGVzY3JpcHRpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZGVzY3JpcHRpb24tbW92aWUnKTtcbmNvbnN0IG1vZGFsUmVzZXJ2YXRpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbW9kYWxyZXNlcnZhdGlvbicpO1xuY29uc3QgY2xvc2VCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2xvc2UtcmVzZXJ2YXRpb24nKTtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUmVzZXJ2YXRpb24ge1xuICAgIHN0YXRpYyBzaG93TW9kYWwgPSAoKSA9PiB7XG4gICAgICBtb2RhbFJlc2VydmF0aW9uLmNsYXNzTGlzdC5hZGQoJ3Nob3cnLCAnZC1ibG9jaycpO1xuICAgICAgY2xvc2VCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIG1vZGFsUmVzZXJ2YXRpb24uY2xhc3NMaXN0LnJlbW92ZSgnc2hvdycsICdkLWJsb2NrJyk7XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBzdGF0aWMgbW9kYWxTaG93SW5mbyA9IChkYXRhKSA9PiB7XG4gICAgICBpbWFnZVNlbGVjdG9yLmlubmVySFRNTCA9IGA8aW1nIHNyYz0ke2RhdGEuaW1hZ2Uub3JpZ2luYWx9IGNsYXNzPVwiaW1nLWZsdWlkXCIgYWx0PVwiXCI+YDtcbiAgICAgIHRpdGxlU2VsZWN0b3IuaW5uZXJIVE1MID0gZGF0YS5uYW1lO1xuICAgICAgbmFtZVNlbGVjdG9yLmlubmVySFRNTCA9IGBOYW1lOiAke2RhdGEubmFtZX1gO1xuICAgICAgbGFuZ3VhZ2VTZWxlY3Rvci5pbm5lckhUTUwgPSBgTGFuZ3VhZ3VlOiAke2RhdGEubGFuZ3VhZ2V9YDtcbiAgICAgIHJhdGluZ1NlbGVjdG9yLmlubmVySFRNTCA9IGBSYXRpbmc6ICR7ZGF0YS5yYXRpbmcuYXZlcmFnZX1gO1xuICAgICAgdHlwZVNlbGVjdG9yLmlubmVySFRNTCA9IGBUeXBlOiAke2RhdGEudHlwZX1gO1xuICAgICAgZGVzY3JpcHRpb24uaW5uZXJIVE1MID0gZGF0YS5zdW1tYXJ5O1xuICAgICAgUmVzZXJ2YXRpb24uc2hvd01vZGFsKG1vZGFsUmVzZXJ2YXRpb24pO1xuICAgIH1cbn0iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0ICcuL3Njc3Mvc3R5bGUuc2Nzcyc7XG5cbmltcG9ydCBBUElIZWxwZXIgZnJvbSAnLi9qcy9BUElIZWxwZXIuanMnO1xuaW1wb3J0IENvbW1lbnQgZnJvbSAnLi9jb21tZW50LmpzJztcbmltcG9ydCBJbnZvbHZlbWVudEFQSUhlbHBlciBmcm9tICcuL2pzL0ludm9sdmVtZW50QVBJSGVscGVyLmpzJztcbmltcG9ydCBSZXNlcnZhdGlvbiBmcm9tICcuL2pzL3Jlc2VydmF0aW9uLmpzJztcblxuY29uc3QgY3JlYXRlQ2FyZEZvckZpbG0gPSAoZmlsbSwgbnVtT2ZMaWtlcykgPT4gYFxuICA8ZGl2IGNsYXNzPVwiY2FyZCBkLWZsZXggY29sLWxnLTMgY29sLW1kLTUgY29sLTEwXCI+XG4gICAgPGltZyBzcmM9JHtmaWxtLmltYWdlLm9yaWdpbmFsfSBjbGFzcz1cImNhcmQtaW1nLXRvcCB3LTEwMFwiXG4gICAgICBhbHQ9XCJTaG93IEltYWdlXCI+XG4gICAgPGRpdiBjbGFzcz1cImNhcmQtYm9keSBkLWZsZXggZmxleC1jb2x1bW4ganVzdGlmeS1jb250ZW50LWJldHdlZW5cIj5cbiAgICAgIDxkaXYgY2xhc3M9XCJkLWZsZXgganVzdGlmeS1jb250ZW50LWJldHdlZW4gYWxpZ24taXRlbXMtY2VudGVyXCI+XG4gICAgICAgIDxoNSBjbGFzcz1cImNhcmQtdGl0bGUgbXQtMiBmdy1ib2xkIGZzLTZcIj4ke2ZpbG0ubmFtZX08L2g1PlxuICAgICAgICA8aSBjbGFzcz1cImZhciBmYS1oZWFydCB0ZXh0LWRhbmdlciBsaWtlLWJ0blwiIGRhdGEtaWQ9JHtmaWxtLmlkfT48L2k+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3M9XCJ0ZXh0LWVuZCBmdy1ib2xkIGZzLTZcIj5MaWtlczogPHNwYW4gY2xhc3M9XCJsaWtlLW51bWJlclwiPiR7bnVtT2ZMaWtlc308L3NwYW4+PC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzPVwiZC1mbGV4IGZsZXgtY29sdW1uIGdhcC0yIHB0LTJcIj5cbiAgICAgICAgPGEgY2xhc3M9XCJidG4gYnRuLXByaW1hcnkgY29tbWVudFwiIGRhdGEtaWQ9JHtmaWxtLmlkfT5Db21tZW50czwvYT5cbiAgICAgICAgPGEgY2xhc3M9XCJidG4gYnRuLWluZm8gcmVzZXJ2YXRpb25cIiBkYXRhLWlkPSR7ZmlsbS5pZH0+UmVzZXJ2YXRpb25zPC9hPlxuICAgICAgPC9kaXY+XG5cbiAgICA8L2Rpdj5cbiAgPC9kaXY+YDtcblxuY29uc3QgY291bnRTaG93cyA9ICgpID0+IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5jYXJkJykubGVuZ3RoO1xuXG5jb25zdCBkaXNwbGF5U2hvd3MgPSBhc3luYyAoZ2VucmUpID0+IHtcbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm51bWJlcnMtdGV4dCcpLmNsYXNzTGlzdC5hZGQoJ2Qtbm9uZScpO1xuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubG9hZGluZycpLmNsYXNzTGlzdC5yZW1vdmUoJ2Qtbm9uZScpO1xuXG4gIGNvbnN0IHNob3dzRGl2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmZpbG1zJyk7XG5cbiAgbGV0IHNob3dzID0gYXdhaXQgQVBJSGVscGVyLmdldEFsbCgpO1xuXG4gIGlmIChnZW5yZSkge1xuICAgIHNob3dzID0gc2hvd3MuZmlsdGVyKChzaG93KSA9PiBzaG93LmdlbnJlcy5pbmNsdWRlcyhnZW5yZSkpO1xuICB9XG5cbiAgc2hvd3NEaXYuaW5uZXJIVE1MID0gJyc7XG4gIGNvbnN0IGxpa2VzID0gYXdhaXQgSW52b2x2ZW1lbnRBUElIZWxwZXIuZ2V0TGlrZXMoKTtcblxuICBzaG93cy5mb3JFYWNoKChzaG93KSA9PiB7XG4gICAgY29uc3QgbnVtT2ZMaWtlcyA9IGxpa2VzLmZpbHRlcigobGlrZSkgPT4gbGlrZS5pdGVtX2lkID09PSBzaG93LmlkKVswXT8ubGlrZXMgfHwgMDtcbiAgICBzaG93c0Rpdi5pbm5lckhUTUwgKz0gY3JlYXRlQ2FyZEZvckZpbG0oc2hvdywgbnVtT2ZMaWtlcyk7XG4gIH0pO1xuXG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5udW1iZXJzJykudGV4dENvbnRlbnQgPSBjb3VudFNob3dzKCk7XG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5udW1iZXJzLXRleHQnKS5jbGFzc0xpc3QucmVtb3ZlKCdkLW5vbmUnKTtcbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmxvYWRpbmcnKS5jbGFzc0xpc3QuYWRkKCdkLW5vbmUnKTtcblxuICBjb25zdCBjb21tZW50QnRucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5jb21tZW50Jyk7XG4gIGNvbW1lbnRCdG5zLmZvckVhY2goKGNvbW1lbnRCdG4pID0+IHtcbiAgICBjb21tZW50QnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICAgIGNvbnN0IHNob3dJZCA9IGUudGFyZ2V0LmRhdGFzZXQuaWQ7XG4gICAgICBBUElIZWxwZXIuZ2V0RGV0YWlscyhzaG93SWQpLnRoZW4oKGRhdGEpID0+IHtcbiAgICAgICAgQ29tbWVudC5zaG93TW9kYWwoKTtcbiAgICAgICAgQ29tbWVudC5jbG9zZU1vZGFsKCk7XG4gICAgICAgIENvbW1lbnQuc2hvd0ltYWdlKGRhdGEuaW1hZ2Uub3JpZ2luYWwpO1xuICAgICAgICBDb21tZW50LnNob3dOYW1lKGRhdGEubmFtZSk7XG4gICAgICAgIENvbW1lbnQuc2hvd0luZm8oZGF0YSk7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfSk7XG5cbiAgY29uc3QgZm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2Zvcm0nKTtcbiAgZm9ybS5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCAoZSkgPT4ge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBDb21tZW50LmFkZENvbW1lbnQoKTtcbiAgfSk7XG5cbiAgY29uc3QgcmVzZXJ2YXRpb25CdG5zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnJlc2VydmF0aW9uJyk7XG4gIHJlc2VydmF0aW9uQnRucy5mb3JFYWNoKChyZXNlcnZhdGlvbkJ0bikgPT4ge1xuICAgIHJlc2VydmF0aW9uQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICAgIEFQSUhlbHBlci5nZXREZXRhaWxzKGUudGFyZ2V0LmRhdGFzZXQuaWQpLnRoZW4oKGRhdGEpID0+IHtcbiAgICAgICAgUmVzZXJ2YXRpb24ubW9kYWxTaG93SW5mbyhkYXRhKTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9KTtcblxuICBjb25zdCBsaWtlQnRucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5saWtlLWJ0bicpO1xuICBsaWtlQnRucy5mb3JFYWNoKChsaWtlQnRuKSA9PiB7XG4gICAgbGlrZUJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgICBjb25zdCBzaG93SWQgPSBwYXJzZUludChlLnRhcmdldC5kYXRhc2V0LmlkLCAxMCk7XG4gICAgICBJbnZvbHZlbWVudEFQSUhlbHBlci5wb3N0TGlrZXMoc2hvd0lkKTtcbiAgICAgIGNvbnN0IGxpa2VOdW1iZXJEaXYgPSBlLnRhcmdldC5wYXJlbnROb2RlLnBhcmVudE5vZGUucXVlcnlTZWxlY3RvcignLmxpa2UtbnVtYmVyJyk7XG4gICAgICBsaWtlTnVtYmVyRGl2LmlubmVySFRNTCA9IHBhcnNlSW50KGxpa2VOdW1iZXJEaXYuaW5uZXJIVE1MLCAxMCkgKyAxO1xuICAgIH0pO1xuICB9KTtcbn07XG5cbmRpc3BsYXlTaG93cygpO1xuXG4vLyBmaWx0ZXIgcmVzdWx0cyBiYXNlZCBvbiBzaG93IHR5cGVcbmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5uYXYtbGluaycpLmZvckVhY2goKGxpbmspID0+IHtcbiAgbGluay5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLm5hdi1saW5rJykuZm9yRWFjaCgobCkgPT4ge1xuICAgICAgbC5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcbiAgICB9KTtcbiAgICBkaXNwbGF5U2hvd3MoZS50YXJnZXQudGV4dENvbnRlbnQuc3BsaXQoJyAnKS5qb2luKCctJykpO1xuICAgIGUudGFyZ2V0LmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO1xuICB9KTtcbn0pO1xuXG5kb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubmF2YmFyLWJyYW5kJykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5uYXYtbGluaycpLmZvckVhY2goKGwpID0+IHtcbiAgICBsLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpO1xuICB9KTtcbiAgZGlzcGxheVNob3dzKCk7XG59KTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==