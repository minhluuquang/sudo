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
/* harmony import */ var _Ambience__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Ambience */ "./components/Ambience.js");
/* harmony import */ var react_icons_ai__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-icons/ai */ "./node_modules/react-icons/ai/index.esm.js");
/* harmony import */ var react_icons_fi__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-icons/fi */ "./node_modules/react-icons/fi/index.esm.js");
/* harmony import */ var react_icons_wi__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-icons/wi */ "./node_modules/react-icons/wi/index.esm.js");
/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-icons/fa */ "./node_modules/react-icons/fa/index.esm.js");
var _this = undefined,
    _jsxFileName = "/Users/macintosh/front-end/sudofm/components/Controller.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;







var ambienceList = [{
  name: 'Coffee House',
  icon: react_icons_fi__WEBPACK_IMPORTED_MODULE_4__["FiCoffee"],
  iconClass: 'mr-3',
  src: '/riverstream.m4a'
}, {
  name: 'Summer Rain',
  icon: react_icons_wi__WEBPACK_IMPORTED_MODULE_5__["WiRain"],
  iconClass: 'text-xl -ml-1 mr-2',
  src: '/thunderstorm.m4a'
}, {
  name: 'Sea Waves',
  icon: react_icons_fa__WEBPACK_IMPORTED_MODULE_6__["FaWater"],
  iconClass: 'mr-3',
  src: '/thunderstorm.m4a'
}];

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
  var AmbienceStyle = {
    width: '100%',
    transitionProperty: 'height, top',
    transitionDuration: '0.3s, 0.3s',
    transitionTimingFunction: 'ease, ease',
    transitionDelay: '0s, 0s',
    whiteSpace: 'nowrap',
    overflow: 'auto'
  };

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(true),
      isOpen = _useState[0],
      setOpen = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(true),
      isOpenAmbience = _useState2[0],
      setOpenAmbience = _useState2[1];

  PlaylistStyle.width = isOpen ? 380 : 0;
  AmbienceStyle.height = isOpenAmbience ? 380 : 40;
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("div", {
    className: "flex items-center",
    style: {
      width: 380
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60,
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
      lineNumber: 61,
      columnNumber: 9
    }
  }), __jsx("div", {
    className: "mx-4",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 9
    }
  }, __jsx("p", {
    className: "text-white mb-0",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68,
      columnNumber: 11
    }
  }, (_props$song = props.song) === null || _props$song === void 0 ? void 0 : _props$song.name), __jsx("p", {
    className: "text-grey mb-0",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69,
      columnNumber: 11
    }
  }, "Playlist: ".concat((_props$playlist = props.playlist) === null || _props$playlist === void 0 ? void 0 : _props$playlist.name)))), __jsx("div", {
    style: PlaylistStyle,
    className: "bg-white absolute left-0 bottom-0",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72,
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
      lineNumber: 73,
      columnNumber: 9
    }
  }, __jsx("div", {
    style: AmbienceStyle,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74,
      columnNumber: 11
    }
  }, __jsx("div", {
    className: "flex justify-between items-center text-xl sticky top-0 bg-white z-10",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75,
      columnNumber: 13
    }
  }, __jsx("p", {
    className: "mb-0 uppercase",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76,
      columnNumber: 15
    }
  }, "ambience"), isOpenAmbience ? __jsx(react_icons_ai__WEBPACK_IMPORTED_MODULE_3__["AiOutlineDown"], {
    onClick: function onClick() {
      setOpenAmbience(!isOpenAmbience);
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78,
      columnNumber: 17
    }
  }) : __jsx(react_icons_ai__WEBPACK_IMPORTED_MODULE_3__["AiOutlineRight"], {
    onClick: function onClick() {
      setOpenAmbience(!isOpenAmbience);
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84,
      columnNumber: 17
    }
  })), ambienceList.map(function (a) {
    return __jsx(_Ambience__WEBPACK_IMPORTED_MODULE_2__["default"], {
      icon: a.icon,
      name: a.name,
      iconClass: a.iconClass,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 92,
        columnNumber: 15
      }
    });
  })), __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95,
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
        lineNumber: 98,
        columnNumber: 17
      }
    });
  })), __jsx("p", {
    className: "text-grey uppercase my-6",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 110,
      columnNumber: 11
    }
  }, "// mood {".concat((_props$mood = props.mood) === null || _props$mood === void 0 ? void 0 : _props$mood.name, "}")), __jsx("div", {
    className: "my-6",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 112,
      columnNumber: 11
    }
  }, __jsx("p", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 113,
      columnNumber: 13
    }
  }, "Playlist: ".concat((_props$playlist2 = props.playlist) === null || _props$playlist2 === void 0 ? void 0 : _props$playlist2.name))), __jsx("lu", {
    className: "list-none",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 116,
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
        lineNumber: 119,
        columnNumber: 17
      }
    }, s.name);
  })))));
};

/* harmony default export */ __webpack_exports__["default"] = (Controller);

/***/ })

})
//# sourceMappingURL=index.js.a06d529dc0bc330ec66e.hot-update.js.map