/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
var __webpack_exports__ = {};

;// CONCATENATED MODULE: ./node_modules/handy-collapse/dist/handy-collapse.mjs
var c = Object.defineProperty;
var g = (l, t, s) => t in l ? c(l, t, { enumerable: !0, configurable: !0, writable: !0, value: s }) : l[t] = s;
var r = (l, t, s) => (g(l, typeof t != "symbol" ? t + "" : t, s), s);
class p {
  constructor(t = {}) {
    r(this, "toggleContentEls");
    r(this, "toggleButtonEls");
    r(this, "itemsState", {});
    r(this, "options");
    const s = typeof t == "object" && "nameSpace" in t ? t.nameSpace : "hc", i = {
      nameSpace: "hc",
      toggleButtonAttr: `data-${s}-control`,
      toggleContentAttr: `data-${s}-content`,
      activeClass: "is-active",
      isAnimation: !0,
      closeOthers: !0,
      animationSpeed: 400,
      cssEasing: "ease-in-out",
      onSlideStart: () => {
      },
      onSlideEnd: () => {
      }
    };
    this.options = {
      ...i,
      ...t
    }, this.toggleContentEls = [].slice.call(document.querySelectorAll(`[${this.options.toggleContentAttr}]`)), this.toggleButtonEls = [].slice.call(document.querySelectorAll(`[${this.options.toggleButtonAttr}]`)), this.toggleContentEls.length !== 0 && this.initContentsState(this.toggleContentEls), this.toggleButtonEls.length !== 0 && this.handleButtonsEvent(this.toggleButtonEls);
  }
  initContentsState(t) {
    this.itemsState = {}, t.forEach((s) => {
      s.style.overflow = "hidden", s.style.maxHeight = "none";
      const i = s.classList.contains(this.options.activeClass), e = s.getAttribute(this.options.toggleContentAttr);
      !e || (this.setItemState(e, i), i ? this.open(e, !1, !1) : this.close(e, !1, !1));
    });
  }
  handleButtonsEvent(t) {
    t.forEach((s) => {
      const i = s.getAttribute(this.options.toggleButtonAttr);
      i && s.addEventListener(
        "click",
        (e) => {
          e.preventDefault(), this.toggleSlide(i, !0);
        },
        !1
      );
    });
  }
  setItemState(t, s) {
    this.itemsState[t] = {
      isOpen: s,
      isAnimating: !1
    };
  }
  toggleSlide(t, s = !0) {
    var i, e;
    (i = this.itemsState[t]) != null && i.isAnimating || (((e = this.itemsState[t]) == null ? void 0 : e.isOpen) === !1 ? this.open(t, s, this.options.isAnimation) : this.close(t, s, this.options.isAnimation));
  }
  open(t, s = !0, i = !0) {
    if (!t)
      return;
    Object.prototype.hasOwnProperty.call(this.itemsState, t) || this.setItemState(t, !1);
    const e = document.querySelector(`[${this.options.toggleContentAttr}='${t}']`);
    if (!e)
      return;
    this.itemsState[t].isAnimating = !0, this.options.closeOthers && [].slice.call(this.toggleContentEls).forEach((n) => {
      const h = n.getAttribute(this.options.toggleContentAttr);
      h && h !== t && this.close(h, !1, i);
    }), s !== !1 && this.options.onSlideStart(!0, t);
    const a = this.getTargetHeight(e);
    e.style.visibility = "visible", e.classList.add(this.options.activeClass);
    const o = document.querySelectorAll(`[${this.options.toggleButtonAttr}='${t}']`);
    o.length > 0 && [].slice.call(o).forEach((n) => {
      n.classList.add(this.options.activeClass), n.hasAttribute("aria-expanded") && n.setAttribute("aria-expanded", "true");
    }), i ? (e.style.overflow = "hidden", e.style.transition = `${this.options.animationSpeed}ms ${this.options.cssEasing}`, e.style.maxHeight = (a || "1000") + "px", setTimeout(() => {
      s !== !1 && this.options.onSlideEnd(!0, t), e.style.maxHeight = "none", e.style.transition = "", e.style.overflow = "", this.itemsState[t].isAnimating = !1;
    }, this.options.animationSpeed)) : (e.style.maxHeight = "none", e.style.overflow = "", this.itemsState[t].isAnimating = !1), this.itemsState[t].isOpen = !0, e.hasAttribute("aria-hidden") && e.setAttribute("aria-hidden", "false");
  }
  close(t, s = !0, i = !0) {
    if (!t)
      return;
    Object.prototype.hasOwnProperty.call(this.itemsState, t) || this.setItemState(t, !1), this.itemsState[t].isAnimating = !0, s !== !1 && this.options.onSlideStart(!1, t);
    const e = document.querySelector(`[${this.options.toggleContentAttr}='${t}']`);
    e.style.overflow = "hidden", e.classList.remove(this.options.activeClass), e.style.maxHeight = e.clientHeight + "px", setTimeout(() => {
      e.style.maxHeight = "0px";
    }, 5);
    const a = document.querySelectorAll(`[${this.options.toggleButtonAttr}='${t}']`);
    a.length > 0 && [].slice.call(a).forEach((o) => {
      o.classList.remove(this.options.activeClass), o.hasAttribute("aria-expanded") && o.setAttribute("aria-expanded", "false");
    }), i ? (e.style.transition = `${this.options.animationSpeed}ms ${this.options.cssEasing}`, setTimeout(() => {
      s !== !1 && this.options.onSlideEnd(!1, t), e.style.transition = "", this.itemsState[t].isAnimating = !1, e.style.visibility = "hidden";
    }, this.options.animationSpeed)) : (this.options.onSlideEnd(!1, t), this.itemsState[t].isAnimating = !1, e.style.visibility = "hidden"), Object.prototype.hasOwnProperty.call(this.itemsState, t) && (this.itemsState[t].isOpen = !1), e.hasAttribute("aria-hidden") && e.setAttribute("aria-hidden", "true");
  }
  getTargetHeight(t) {
    if (!t)
      return;
    const s = t.cloneNode(!0), i = t.parentNode;
    if (!i)
      return;
    const e = [].slice.call(s.querySelectorAll("input[name]"));
    if (e.length !== 0) {
      const o = "-" + new Date().getTime();
      e.forEach((n) => {
        n.name += o;
      });
    }
    s.style.maxHeight = "none", s.style.opacity = "0", i.appendChild(s);
    const a = s.clientHeight;
    return i.removeChild(s), a;
  }
}


;// CONCATENATED MODULE: ./src/scripts/vendor/SingleSelect.js
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
;// CONCATENATED MODULE: ./src/scripts/vendor/Select.js
function Select_typeof(obj) { "@babel/helpers - typeof"; return Select_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, Select_typeof(obj); }
function Select_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, Select_toPropertyKey(descriptor.key), descriptor); } }
function Select_createClass(Constructor, protoProps, staticProps) { if (protoProps) Select_defineProperties(Constructor.prototype, protoProps); if (staticProps) Select_defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function Select_toPropertyKey(arg) { var key = Select_toPrimitive(arg, "string"); return Select_typeof(key) === "symbol" ? key : String(key); }
function Select_toPrimitive(input, hint) { if (Select_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (Select_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function Select_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Select = /*#__PURE__*/Select_createClass(function Select(selector) {
  var _this = this;
  Select_classCallCheck(this, Select);
  this.selects = [];
  document.querySelectorAll(selector).forEach(function (select) {
    _this.selects.push(new SingleSelect(select));
  });
});
;// CONCATENATED MODULE: ./src/scripts/utils/classNames.js
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
    blockActive: 'tooltip_active',
    btn: 'tooltip__btn'
  }
};
;// CONCATENATED MODULE: ./src/scripts/modules/toggle.js

function toggle() {
  var classToggle = classNames.toggle.block;
  var classToggleActive = classNames.toggle.toggleActive;
  document.querySelectorAll(".".concat(classToggle)).forEach(function (toggleEl) {
    function handler(e) {
      if (!(e.type === 'click' || e.keyCode === 13)) return;
      toggleEl.classList.toggle(classToggleActive);
    }
    toggleEl.addEventListener('click', handler);
    toggleEl.addEventListener('keydown', handler);
  });
}
;// CONCATENATED MODULE: ./src/scripts/modules/tooltip.js

function tooltip() {
  var classTooltip = classNames.tooltip.block;
  var classTooltipActive = classNames.tooltip.blockActive;
  var classTooltipBtn = classNames.tooltip.btn;
  document.querySelectorAll(".".concat(classTooltip)).forEach(function (tooltipEl) {
    var tooltipBtn = tooltipEl.querySelector(".".concat(classTooltipBtn));
    tooltipBtn.addEventListener('click', function () {
      tooltipEl.classList.toggle(classTooltipActive);
    });
    document.addEventListener('click', function (e) {
      if (tooltipEl.contains(e.target)) return;
      tooltipEl.classList.remove(classTooltipActive);
    });
  });
}
;// CONCATENATED MODULE: ./src/scripts/vendor/header.js

function headerBlur() {
  var classBlock = classNames.header.block;
  var classBlur = classNames.header.blur;
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
  var classBlock = classNames.header.block;
  var classHide = classNames.header.hide;
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
;// CONCATENATED MODULE: ./src/scripts/app.js








// Header
headerBlur();
headerHide();

// Accordion
new p(); // eslint-disable-line
// Select
new Select('.select'); // eslint-disable-line

// Toggle
toggle();
// Tooltip
tooltip();
/******/ })()
;