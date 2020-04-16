webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/Player.js":
/*!******************************!*\
  !*** ./components/Player.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var rc_slider__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rc-slider */ "./node_modules/rc-slider/es/index.js");
/* harmony import */ var react_youtube__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-youtube */ "./node_modules/react-youtube/dist/index.esm.js");
/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-icons/fa */ "./node_modules/react-icons/fa/index.esm.js");
/* harmony import */ var react_icons_ti__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-icons/ti */ "./node_modules/react-icons/ti/index.esm.js");
/* harmony import */ var react_icons_fi__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-icons/fi */ "./node_modules/react-icons/fi/index.esm.js");
var _this = undefined,
    _jsxFileName = "/Users/macintosh/front-end/sudofm/components/Player.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;







var opts = {
  height: '0',
  width: '0',
  playerVars: {
    autoplay: 1
  }
};
var YT_STATE = {
  UNSTARTED: -1,
  ENDED: 0,
  PLAYING: 1,
  PAUSED: 2,
  BUFFERING: 3,
  CUED: 5
};

var Player = function Player(_ref) {
  var id = _ref.id;
  var ref = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      isRepeat = _useState[0],
      setIsRepeat = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      isShuffle = _useState2[0],
      setIsShuffle = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(YT_STATE.LOADING),
      ytState = _useState3[0],
      setYtState = _useState3[1];

  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(react_youtube__WEBPACK_IMPORTED_MODULE_3__["default"], {
    ref: ref,
    videoId: id,
    opts: opts,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 7
    }
  }), __jsx("div", {
    className: "ml-16 flex",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: "flex items-center",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 9
    }
  }, __jsx(react_icons_fi__WEBPACK_IMPORTED_MODULE_6__["FiRepeat"], {
    className: "mx-4 cursor-pointer ".concat(isRepeat ? 'text-primary' : 'text-white'),
    onClick: function onClick() {
      setIsRepeat(!isRepeat);
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 11
    }
  }), __jsx(react_icons_fa__WEBPACK_IMPORTED_MODULE_4__["FaStepBackward"], {
    className: "mx-4 cursor-pointer text-white",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 11
    }
  }), __jsx(react_icons_fa__WEBPACK_IMPORTED_MODULE_4__["FaPlay"], {
    className: "mx-4 cursor-pointer text-white",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 11
    }
  }), __jsx(react_icons_fa__WEBPACK_IMPORTED_MODULE_4__["FaStepForward"], {
    className: "mx-4 cursor-pointer text-white",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 11
    }
  }), __jsx(react_icons_ti__WEBPACK_IMPORTED_MODULE_5__["TiArrowShuffle"], {
    className: "mx-4 cursor-pointer text-xl ".concat(isShuffle ? 'text-primary' : 'text-white'),
    onClick: function onClick() {
      setIsShuffle(!isShuffle);
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 11
    }
  })), __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 9
    }
  }, __jsx(rc_slider__WEBPACK_IMPORTED_MODULE_2__["default"], {
    min: 0,
    max: 100,
    defaultValue: 3,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 11
    }
  }))));
};

/* harmony default export */ __webpack_exports__["default"] = (Player);

/***/ })

})
//# sourceMappingURL=index.js.7bbcbe1c2ec8e9da4fa2.hot-update.js.map