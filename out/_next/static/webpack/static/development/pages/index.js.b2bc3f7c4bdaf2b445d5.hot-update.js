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
  var _mood$playlists, _playlist$songs;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(0),
      playlistIndex = _useState[0],
      setPlaylistIndex = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(0),
      songIndex = _useState2[0],
      setSongIndex = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(0),
      moodIndex = _useState3[0],
      setMoodIndex = _useState3[1];

  var mood = _constant_moods__WEBPACK_IMPORTED_MODULE_4__["moods"][moodIndex];
  var playlist = mood === null || mood === void 0 ? void 0 : (_mood$playlists = mood.playlists) === null || _mood$playlists === void 0 ? void 0 : _mood$playlists[playlistIndex];
  var song = playlist === null || playlist === void 0 ? void 0 : (_playlist$songs = playlist.songs) === null || _playlist$songs === void 0 ? void 0 : _playlist$songs[songIndex];
  return __jsx(_components_Layout__WEBPACK_IMPORTED_MODULE_1__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: "flex items-center",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 7
    }
  }, __jsx(_components_Controller__WEBPACK_IMPORTED_MODULE_2__["default"], {
    moods: _constant_moods__WEBPACK_IMPORTED_MODULE_4__["moods"],
    mood: mood,
    playlist: playlist,
    song: song,
    playlistIndex: playlistIndex,
    setPlaylistIndex: setPlaylistIndex,
    songIndex: songIndex,
    setSongIndex: setSongIndex,
    moodIndex: moodIndex,
    setMoodIndex: setMoodIndex,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 9
    }
  }), __jsx(_components_Player__WEBPACK_IMPORTED_MODULE_3__["default"], {
    id: song === null || song === void 0 ? void 0 : song.id,
    setSongIndex: setSongIndex,
    songIndex: songIndex,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 9
    }
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (Index);

/***/ })

})
//# sourceMappingURL=index.js.b2bc3f7c4bdaf2b445d5.hot-update.js.map