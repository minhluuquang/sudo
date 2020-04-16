webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/Ambience.js":
/*!********************************!*\
  !*** ./components/Ambience.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");
var _this = undefined,
    _jsxFileName = "/Users/macintosh/front-end/sudofm/components/Ambience.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




var setVolume = function setVolume(value, id, setVolumeNumber) {
  var audio = document.getElementById(id);
  audio.volume = value;
  setVolumeNumber(Math.round(value * 100));
};

var Ambience = function Ambience(props) {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(100),
      volumeNumber = _useState[0],
      setVolumeNumber = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      enable = _useState2[0],
      setEnable = _useState2[1];

  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("audio", {
    id: props.name,
    src: props.src,
    loop: true,
    muted: !enable,
    autoPlay: true,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 7
    }
  }), __jsx("div", {
    className: "flex items-center pt-8 cursor-pointer select-none ".concat(enable ? 'text-secondary' : 'text-grey'),
    onClick: function onClick() {
      setEnable(!enable);
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 7
    }
  }, __jsx(props.icon, {
    className: classnames__WEBPACK_IMPORTED_MODULE_1___default()(props.iconClass),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 9
    }
  }), props.name, __jsx("div", {
    className: "ml-auto",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 9
    }
  }, "".concat(volumeNumber, "%"))), __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Slider"], {
    disabled: !enable,
    defaultValue: 100,
    onChange: function onChange(value) {
      return setVolume(value / 100, props.name);
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 7
    }
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Ambience);

/***/ })

})
//# sourceMappingURL=index.js.7925377cc52ac585a258.hot-update.js.map