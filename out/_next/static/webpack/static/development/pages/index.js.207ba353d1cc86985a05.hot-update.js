webpackHotUpdate("static/development/pages/index.js",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Layout */ "./components/Layout.js");
/* harmony import */ var _components_Controller__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Controller */ "./components/Controller.js");
/* harmony import */ var _components_Player__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Player */ "./components/Player.js");
/* harmony import */ var _constant_moods__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../constant/moods */ "./constant/moods.js");
var _this = undefined,
    _jsxFileName = "/Users/macintosh/front-end/sudofm/pages/index.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;






var Index = function Index() {
  var _moods$moodIndex, _moods$moodIndex$play, _moods$moodIndex$play2, _moods$moodIndex$play3;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(0),
      playlistIndex = _useState[0],
      setPlaylistIndex = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(0),
      songIndex = _useState2[0],
      setSongIndex = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(0),
      moodIndex = _useState3[0],
      setMoodIndex = _useState3[1];

  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(_constant_moods__WEBPACK_IMPORTED_MODULE_4__["moods"] === null || _constant_moods__WEBPACK_IMPORTED_MODULE_4__["moods"] === void 0 ? void 0 : (_moods$moodIndex = _constant_moods__WEBPACK_IMPORTED_MODULE_4__["moods"][moodIndex]) === null || _moods$moodIndex === void 0 ? void 0 : (_moods$moodIndex$play = _moods$moodIndex.playlists) === null || _moods$moodIndex$play === void 0 ? void 0 : (_moods$moodIndex$play2 = _moods$moodIndex$play[playlistIndex]) === null || _moods$moodIndex$play2 === void 0 ? void 0 : (_moods$moodIndex$play3 = _moods$moodIndex$play2.songs) === null || _moods$moodIndex$play3 === void 0 ? void 0 : _moods$moodIndex$play3[songIndex]),
      songId = _useState4[0],
      setSongId = _useState4[1];

  return __jsx(_components_Layout__WEBPACK_IMPORTED_MODULE_1__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: "flex items-center",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 7
    }
  }, __jsx(_components_Controller__WEBPACK_IMPORTED_MODULE_2__["default"], {
    moods: _constant_moods__WEBPACK_IMPORTED_MODULE_4__["moods"],
    setSongId: setSongId,
    playlistIndex: playlistIndex,
    setPlaylistIndex: setPlaylistIndex,
    songIndex: songIndex,
    setSongIndex: setSongIndex,
    moodIndex: moodIndex,
    setMoodIndex: setMoodIndex,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 9
    }
  }), __jsx(_components_Player__WEBPACK_IMPORTED_MODULE_3__["default"], {
    id: songId,
    setSongIndex: setSongIndex,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 9
    }
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (Index);

/***/ })

})
//# sourceMappingURL=index.js.207ba353d1cc86985a05.hot-update.js.map