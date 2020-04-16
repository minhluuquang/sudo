webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/Controller.js":
/*!**********************************!*\
  !*** ./components/Controller.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _constant_moods__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../constant/moods */ "./constant/moods.js");
/* harmony import */ var _MoodButton__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./MoodButton */ "./components/MoodButton.js");
var _this = undefined,
    _jsxFileName = "/Users/macintosh/front-end/sudofm/components/Controller.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




var Controller = function Controller(_ref) {
  var _mood$playlists, _playlist$songs, _playlist$songs2;

  var setSongId = _ref.setSongId;
  var PlaylistStyle = {
    height: '100vh',
    marginBottom: 80,
    transitionProperty: 'width, left',
    transitionDuration: '0.3s, 0.3s',
    transitionTimingFunction: 'ease, ease',
    transitionDelay: '0s, 0s',
    whiteSpace: 'nowrap',
    overflow: 'hidden'
  };

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(true),
      isOpen = _useState[0],
      setOpen = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(0),
      playlistIndex = _useState2[0],
      setPlaylistIndex = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(0),
      songIndex = _useState3[0],
      setSongIndex = _useState3[1];

  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(0),
      moodIndex = _useState4[0],
      setMoodIndex = _useState4[1];

  PlaylistStyle.width = isOpen ? 380 : 0;
  var mood = _constant_moods__WEBPACK_IMPORTED_MODULE_1__["moods"][moodIndex];
  var playlist = mood === null || mood === void 0 ? void 0 : (_mood$playlists = mood.playlists) === null || _mood$playlists === void 0 ? void 0 : _mood$playlists[playlistIndex];
  var song = playlist === null || playlist === void 0 ? void 0 : (_playlist$songs = playlist.songs) === null || _playlist$songs === void 0 ? void 0 : _playlist$songs[songIndex];
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("div", {
    className: "flex items-center",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 7
    }
  }, __jsx("img", {
    onClick: function onClick() {
      setOpen(!isOpen);
    },
    src: isOpen ? 'playlist-icon-selected.svg' : 'playlist-icon.svg',
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 9
    }
  }), __jsx("div", {
    className: "mx-4",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 9
    }
  }, __jsx("p", {
    className: "text-white",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 11
    }
  }, song === null || song === void 0 ? void 0 : song.name), __jsx("p", {
    className: "text-grey",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 11
    }
  }, "Playlist: ".concat(playlist === null || playlist === void 0 ? void 0 : playlist.name)))), __jsx("div", {
    style: PlaylistStyle,
    className: "bg-white absolute left-0 bottom-0",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 7
    }
  }, __jsx("div", {
    style: {
      marginTop: 96
    },
    className: "m-4",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 9
    }
  }, __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 11
    }
  }, _constant_moods__WEBPACK_IMPORTED_MODULE_1__["moods"].map(function (m, i) {
    return __jsx(_MoodButton__WEBPACK_IMPORTED_MODULE_2__["default"], {
      isSelected: i === moodIndex ? true : false,
      name: m.name,
      key: m.name,
      onClick: function onClick() {
        setMoodIndex(i);
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 47,
        columnNumber: 17
      }
    });
  })), __jsx("p", {
    className: "text-grey uppercase my-6",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 11
    }
  }, "// mood {".concat(mood === null || mood === void 0 ? void 0 : mood.name, "}")), __jsx("div", {
    className: "my-6",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 11
    }
  }, __jsx("p", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 13
    }
  }, "Playlist: ".concat(playlist === null || playlist === void 0 ? void 0 : playlist.name))), __jsx("lu", {
    className: "list-none",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 11
    }
  }, playlist === null || playlist === void 0 ? void 0 : (_playlist$songs2 = playlist.songs) === null || _playlist$songs2 === void 0 ? void 0 : _playlist$songs2.map(function (s, i) {
    return __jsx("li", {
      key: s.id,
      className: "py-1 cursor-pointer ".concat(i === songIndex ? 'text-primary' : 'text-secondary'),
      onClick: function onClick() {
        setSongIndex(i);
        setSongId(s === null || s === void 0 ? void 0 : s.id);
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 68,
        columnNumber: 17
      }
    }, s.name);
  })))));
};

/* harmony default export */ __webpack_exports__["default"] = (Controller);

/***/ }),

/***/ "./constant/moods.js":
/*!***************************!*\
  !*** ./constant/moods.js ***!
  \***************************/
/*! exports provided: moods */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "moods", function() { return moods; });
var moods = [{
  name: 'work',
  playlists: [{
    name: 'Chilled Cow lo-fi',
    songs: [{
      name: 'DLJ - Night Emotion',
      id: 'eEXEEuSLjEo'
    }, {
      name: 'Wish You Were Mine - Sarcastic Sound',
      id: '0Rqte6TTkHs'
    }, {
      name: 'drkmnd- Signal',
      id: '8OPipsAjlqQ'
    }, {
      name: 'Satellite - NorthPole',
      id: 'Bksv9OEj1j8'
    }, {
      name: 'DLJ - Truth',
      id: 'cqunr2DO8yc'
    }, {
      name: 'Backpack City - Ages ago',
      id: 'pIOZVb97dSk'
    }, {
      name: 'Sugar Coat - Purrple Cat',
      id: 'qV5h8eTX8UY'
    }, {
      name: 'Someday - dryhope',
      id: 'XoX6zS5-jOY'
    }, {
      name: 'Perptual - goosetaf',
      id: '-0o37zLDsWo'
    }, {
      name: 'Steps - dryhope',
      id: 'reYbdEo4Y_E'
    }]
  }]
}, {
  name: 'chill'
}];

/***/ })

})
//# sourceMappingURL=index.js.864483fd3757f659b513.hot-update.js.map