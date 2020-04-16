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
/* harmony import */ var _MoodButton__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./MoodButton */ "./components/MoodButton.js");
var _this = undefined,
    _jsxFileName = "/Users/macintosh/front-end/sudofm/components/Controller.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



var Controller = function Controller(props) {
  var _props$song, _props$playlist, _props$mood, _props$playlist2, _props$playlist3, _props$playlist3$song;

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

  PlaylistStyle.width = isOpen ? 380 : 0;
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("div", {
    className: "flex items-center",
    style: {
      width: 380
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
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
      lineNumber: 23,
      columnNumber: 9
    }
  }), __jsx("div", {
    className: "mx-4",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 9
    }
  }, __jsx("p", {
    className: "text-white",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 11
    }
  }, (_props$song = props.song) === null || _props$song === void 0 ? void 0 : _props$song.name), __jsx("p", {
    className: "text-grey",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 11
    }
  }, "Playlist: ".concat((_props$playlist = props.playlist) === null || _props$playlist === void 0 ? void 0 : _props$playlist.name)))), __jsx("div", {
    style: PlaylistStyle,
    className: "bg-white absolute left-0 bottom-0",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
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
      lineNumber: 35,
      columnNumber: 9
    }
  }, __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 11
    }
  }, props.moods.map(function (m, i) {
    return __jsx(_MoodButton__WEBPACK_IMPORTED_MODULE_1__["default"], {
      isSelected: i === props.moodIndex ? true : false,
      name: m.name,
      key: m.name,
      onClick: function onClick() {
        props.setMoodIndex(i);
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 39,
        columnNumber: 17
      }
    });
  })), __jsx("p", {
    className: "text-grey uppercase my-6",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 11
    }
  }, "// mood {".concat((_props$mood = props.mood) === null || _props$mood === void 0 ? void 0 : _props$mood.name, "}")), __jsx("div", {
    className: "my-6",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 11
    }
  }, __jsx("p", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 13
    }
  }, "Playlist: ".concat((_props$playlist2 = props.playlist) === null || _props$playlist2 === void 0 ? void 0 : _props$playlist2.name))), __jsx("lu", {
    className: "list-none",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 11
    }
  }, (_props$playlist3 = props.playlist) === null || _props$playlist3 === void 0 ? void 0 : (_props$playlist3$song = _props$playlist3.songs) === null || _props$playlist3$song === void 0 ? void 0 : _props$playlist3$song.map(function (s, i) {
    return __jsx("li", {
      key: s.id,
      className: "py-1 cursor-pointer ".concat(i === props.songIndex ? 'text-primary' : 'text-secondary'),
      onClick: function onClick() {
        props.setSongIndex(i);
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 60,
        columnNumber: 17
      }
    }, s.name);
  })))));
};

/* harmony default export */ __webpack_exports__["default"] = (Controller);

/***/ })

})
//# sourceMappingURL=index.js.2e11a4c36dbdd4b83783.hot-update.js.map