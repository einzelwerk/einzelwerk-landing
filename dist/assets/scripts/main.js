/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/scripts/modules/toggle.js":
/*!***************************************!*\
  !*** ./src/scripts/modules/toggle.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "toggle": () => (/* binding */ toggle)
/* harmony export */ });
/* harmony import */ var _utils_classNames__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/classNames */ "./src/scripts/utils/classNames.js");

function toggle() {
  var classToggle = _utils_classNames__WEBPACK_IMPORTED_MODULE_0__.classNames.toggle.block;
  var classToggleActive = _utils_classNames__WEBPACK_IMPORTED_MODULE_0__.classNames.toggle.active;
  document.querySelectorAll(".".concat(classToggle)).forEach(function (toggleEl) {
    function handler(e) {
      if (!(e.type === 'click' || e.keyCode === 13)) return;
      toggleEl.classList.toggle(classToggleActive);
    }
    toggleEl.addEventListener('click', handler);
    toggleEl.addEventListener('keydown', handler);
  });
}

/***/ }),

/***/ "./src/scripts/modules/tooltip.js":
/*!****************************************!*\
  !*** ./src/scripts/modules/tooltip.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "tooltip": () => (/* binding */ tooltip)
/* harmony export */ });
/* harmony import */ var _utils_classNames__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/classNames */ "./src/scripts/utils/classNames.js");

function tooltip() {
  var classTooltip = _utils_classNames__WEBPACK_IMPORTED_MODULE_0__.classNames.tooltip.block;
  var classTooltipBody = _utils_classNames__WEBPACK_IMPORTED_MODULE_0__.classNames.tooltip.body;
  var classTooltipActive = _utils_classNames__WEBPACK_IMPORTED_MODULE_0__.classNames.tooltip.blockActive;
  var classTooltipBtn = _utils_classNames__WEBPACK_IMPORTED_MODULE_0__.classNames.tooltip.btn;
  document.querySelectorAll(".".concat(classTooltip)).forEach(function (tooltipEl) {
    var tooltipBtn = tooltipEl.querySelector(".".concat(classTooltipBtn));
    var tooltipBody = tooltipEl.querySelector(".".concat(classTooltipBody));
    var rect = tooltipBody.getBoundingClientRect();
    if (rect.right > window.innerWidth) {
      tooltipBody.style.marginLeft = "".concat(-1 * (rect.right - window.innerWidth) - 5, "px");
    } else if (rect.left < 0) {
      tooltipBody.style.marginLeft = "".concat(-1 * rect.left + 5, "px");
    }
    tooltipBtn.addEventListener('click', function () {
      tooltipEl.classList.toggle(classTooltipActive);
    });
    document.addEventListener('click', function (e) {
      if (tooltipEl.contains(e.target)) return;
      tooltipEl.classList.remove(classTooltipActive);
    });
  });
}

/***/ }),

/***/ "./src/scripts/utils/classNames.js":
/*!*****************************************!*\
  !*** ./src/scripts/utils/classNames.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "classNames": () => (/* binding */ classNames)
/* harmony export */ });
var classNames = {
  header: {
    block: 'header',
    blur: 'header_blur',
    hide: 'header_hide'
  },
  toggle: {
    block: 'toggle',
    active: 'toggle_active'
  },
  tooltip: {
    block: 'tooltip',
    body: 'tooltip__body',
    blockActive: 'tooltip_active',
    btn: 'tooltip__btn'
  }
};

/***/ }),

/***/ "./src/scripts/vendor/Select.js":
/*!**************************************!*\
  !*** ./src/scripts/vendor/Select.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Select": () => (/* binding */ Select)
/* harmony export */ });
/* harmony import */ var _SingleSelect__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SingleSelect */ "./src/scripts/vendor/SingleSelect.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Select = /*#__PURE__*/_createClass(function Select(selector) {
  var _this = this;
  _classCallCheck(this, Select);
  this.selects = [];
  document.querySelectorAll(selector).forEach(function (select) {
    _this.selects.push(new _SingleSelect__WEBPACK_IMPORTED_MODULE_0__.SingleSelect(select));
  });
});

/***/ }),

/***/ "./src/scripts/vendor/SingleSelect.js":
/*!********************************************!*\
  !*** ./src/scripts/vendor/SingleSelect.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SingleSelect": () => (/* binding */ SingleSelect)
/* harmony export */ });
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _classPrivateMethodInitSpec(obj, privateSet) { _checkPrivateRedeclaration(obj, privateSet); privateSet.add(obj); }
function _checkPrivateRedeclaration(obj, privateCollection) { if (privateCollection.has(obj)) { throw new TypeError("Cannot initialize the same private elements twice on an object"); } }
function _classPrivateMethodGet(receiver, privateSet, fn) { if (!privateSet.has(receiver)) { throw new TypeError("attempted to get private field on non-instance"); } return fn; }
var _initStructure = /*#__PURE__*/new WeakSet();
var SingleSelect = /*#__PURE__*/function () {
  function SingleSelect(select) {
    var _this = this;
    _classCallCheck(this, SingleSelect);
    _classPrivateMethodInitSpec(this, _initStructure);
    this.rawSelect = select;
    this.select = null;
    this.head = null;
    this.body = null;
    this.optionsCol = [];
    this.headOption = null;
    _classPrivateMethodGet(this, _initStructure, _initStructure2).call(this);
    document.addEventListener('click', this.openClose.bind(this));
    this.optionsCol.forEach(function (optionBody) {
      optionBody.addEventListener('click', _this.change.bind(_this, optionBody));
    });
  }
  _createClass(SingleSelect, [{
    key: "openClose",
    value: function openClose(e) {
      if (!this.head.contains(e.target)) {
        if (this.select.classList.contains('is-open')) {
          this.select.classList.remove('is-open');
        }
        return;
      }
      this.select.classList.add('is-open');
    }
  }, {
    key: "change",
    value: function change(optionBody) {
      this.optionsCol.forEach(function (option) {
        if (!option.classList.contains('is-selected')) return;
        option.classList.remove('is-selected');
      });
      optionBody.classList.add('is-selected');
      var currentHeadOption = optionBody.cloneNode(true);
      currentHeadOption.classList.remove('select__option_body');
      currentHeadOption.classList.add('select__option_head');
      this.headOption.replaceWith(currentHeadOption);
      this.headOption = currentHeadOption;
    }
  }]);
  return SingleSelect;
}();
function _initStructure2() {
  var _this2 = this;
  this.select = document.createElement('div');
  this.select.className = this.rawSelect.className;
  this.head = document.createElement('div');
  this.head.classList.add('select__head');
  this.select.append(this.head);
  this.body = document.createElement('div');
  this.body.classList.add('select__body');
  this.select.append(this.body);
  this.optionsCol = Array.from(this.rawSelect.querySelectorAll('option')).map(function (_ref, idx) {
    var textContent = _ref.textContent,
      value = _ref.value;
    var optionEl = document.createElement('div');
    optionEl.classList.add('select__option', 'select__option_body');
    optionEl.textContent = textContent;
    optionEl.dataset.value = value;
    optionEl.dataset.id = idx + 1;
    _this2.body.append(optionEl);
    return optionEl;
  });
  var headOption = this.optionsCol[0].cloneNode(true);
  this.optionsCol[0].classList.add('is-selected');
  headOption.classList.remove('select__option_body');
  headOption.classList.add('select__option_head');
  this.headOption = headOption;
  this.head.append(this.headOption);
  this.rawSelect.replaceWith(this.select);
}

/***/ }),

/***/ "./src/scripts/vendor/header.js":
/*!**************************************!*\
  !*** ./src/scripts/vendor/header.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "headerBlur": () => (/* binding */ headerBlur),
/* harmony export */   "headerHide": () => (/* binding */ headerHide)
/* harmony export */ });
/* harmony import */ var _utils_classNames__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/classNames */ "./src/scripts/utils/classNames.js");

function headerBlur() {
  var classBlock = _utils_classNames__WEBPACK_IMPORTED_MODULE_0__.classNames.header.block;
  var classBlur = _utils_classNames__WEBPACK_IMPORTED_MODULE_0__.classNames.header.blur;
  var header = document.querySelector(".".concat(classBlock));
  if (window.scrollY > 0) {
    header.classList.add(classBlur);
    return;
  }
  document.addEventListener('scroll', function () {
    if (header.classList.contains(classBlur) && window.scrollY > 0) return;
    if (window.scrollY > 0) {
      header.classList.add(classBlur);
      return;
    }
    header.classList.remove(classBlur);
  });
}
function headerHide() {
  var classBlock = _utils_classNames__WEBPACK_IMPORTED_MODULE_0__.classNames.header.block;
  var classHide = _utils_classNames__WEBPACK_IMPORTED_MODULE_0__.classNames.header.hide;
  var header = document.querySelector(".".concat(classBlock));
  var lastScrollY = window.scrollY;
  document.addEventListener('scroll', function () {
    if (window.scrollY > lastScrollY && window.scrollY !== 0) {
      header.classList.add(classHide);
      lastScrollY = window.scrollY;
    } else {
      header.classList.remove(classHide);
      lastScrollY = window.scrollY;
    }
  });
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
/*!****************************!*\
  !*** ./src/scripts/app.js ***!
  \****************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _vendor_Select__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./vendor/Select */ "./src/scripts/vendor/Select.js");
/* harmony import */ var _modules_toggle__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/toggle */ "./src/scripts/modules/toggle.js");
/* harmony import */ var _modules_tooltip__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/tooltip */ "./src/scripts/modules/tooltip.js");
/* harmony import */ var _vendor_header__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./vendor/header */ "./src/scripts/vendor/header.js");




window.onload = function () {
  // Header
  (0,_vendor_header__WEBPACK_IMPORTED_MODULE_3__.headerBlur)();
  (0,_vendor_header__WEBPACK_IMPORTED_MODULE_3__.headerHide)();

  // Accordion
  new HandyCollapse(); // eslint-disable-line
  // Select
  new _vendor_Select__WEBPACK_IMPORTED_MODULE_0__.Select('.select'); // eslint-disable-line

  // Toggle, Tooltip
  (0,_modules_toggle__WEBPACK_IMPORTED_MODULE_1__.toggle)();
  (0,_modules_tooltip__WEBPACK_IMPORTED_MODULE_2__.tooltip)();
};
})();

/******/ })()
;
//# sourceMappingURL=main.js.map