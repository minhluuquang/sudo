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




var Ambience = function Ambience(props) {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      enable = _useState[0],
      setEnable = _useState[1];

  var audio = new Audio(props.src);
  audio.play();
  audio.muted = !enable;
  audio.loop = true;
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("div", {
    className: "flex items-center pt-8 cursor-pointer select-none ".concat(enable ? 'text-secondary' : 'text-grey'),
    onClick: function onClick() {
      setEnable(!enable);
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 7
    }
  }, __jsx(props.icon, {
    className: classnames__WEBPACK_IMPORTED_MODULE_1___default()(props.iconClass),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 9
    }
  }), props.name), __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Slider"], {
    disabled: !enable,
    defaultValue: 100,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 7
    }
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Ambience);

/***/ })

})
//# sourceMappingURL=index.js.d7c1a17bbc53c5f1fd10.hot-update.js.map