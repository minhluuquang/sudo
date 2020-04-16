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
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");
/* harmony import */ var react_youtube__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-youtube */ "./node_modules/react-youtube/dist/index.esm.js");
/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-icons/fa */ "./node_modules/react-icons/fa/index.esm.js");
/* harmony import */ var react_icons_ti__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-icons/ti */ "./node_modules/react-icons/ti/index.esm.js");
/* harmony import */ var react_icons_fi__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-icons/fi */ "./node_modules/react-icons/fi/index.esm.js");
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
var sliderStyle = {
  width: 400
};
var YT_STATE = {
  UNSTARTED: -1,
  ENDED: 0,
  PLAYING: 1,
  PAUSED: 2,
  BUFFERING: 3,
  CUED: 5
};

var renderPlayButton = function renderPlayButton(state, ref) {
  var classes = 'mx-4 cursor-pointer text-white';

  switch (state) {
    case YT_STATE.PLAYING:
      return __jsx(react_icons_fa__WEBPACK_IMPORTED_MODULE_3__["FaPause"], {
        className: classes,
        onClick: function onClick() {
          ref.current.internalPlayer.pauseVideo();
        },
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 38,
          columnNumber: 9
        }
      });

    case YT_STATE.PAUSED:
      return __jsx(react_icons_fa__WEBPACK_IMPORTED_MODULE_3__["FaPlay"], {
        className: classes,
        onClick: function onClick() {
          ref.current.internalPlayer.playVideo();
        },
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 47,
          columnNumber: 9
        }
      });

    default:
      return __jsx(react_icons_fa__WEBPACK_IMPORTED_MODULE_3__["FaSpinner"], {
        className: "pointer-events-none mx-4 text-white icon-spin",
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 56,
          columnNumber: 9
        }
      });
  }
};

var Player = function Player(props) {
  var _ref$current, _ref$current2;

  var ref = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      isRepeat = _useState[0],
      setIsRepeat = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      isShuffle = _useState2[0],
      setIsShuffle = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(YT_STATE.UNSTARTED),
      ytState = _useState3[0],
      setYtState = _useState3[1];

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    var interval = setInterval(function () {
      // update progress bar
      console.log('a');
    }, 1000);
    return function () {
      return clearInterval(interval);
    };
  }, props.id);

  var onStateChange = function onStateChange(event) {
    if (event.data === YT_STATE.ENDED) {
      props.setSongIndex(props.songIndex + 1);
    }

    setYtState(event.data);
  };

  (_ref$current = ref.current) === null || _ref$current === void 0 ? void 0 : _ref$current.internalPlayer.getCurrentTime().then(function (data) {
    console.log('time', data);
  });
  (_ref$current2 = ref.current) === null || _ref$current2 === void 0 ? void 0 : _ref$current2.internalPlayer.getDuration().then(function (data) {
    return console.log('duration', data);
  });
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(react_youtube__WEBPACK_IMPORTED_MODULE_2__["default"], {
    ref: ref,
    videoId: props.id,
    opts: opts,
    onStateChange: onStateChange,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92,
      columnNumber: 7
    }
  }), __jsx("div", {
    className: "flex flex-grow",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: "flex items-center flex-grow",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 99,
      columnNumber: 9
    }
  }, __jsx(react_icons_fi__WEBPACK_IMPORTED_MODULE_5__["FiRepeat"], {
    className: "mx-4 cursor-pointer ".concat(isRepeat ? 'text-primary' : 'text-white'),
    onClick: function onClick() {
      setIsRepeat(!isRepeat);
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 100,
      columnNumber: 11
    }
  }), __jsx(react_icons_fa__WEBPACK_IMPORTED_MODULE_3__["FaStepBackward"], {
    className: "mx-4 cursor-pointer text-white",
    onClick: function onClick() {
      props.setSongIndex(props.songIndex - 1);
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 108,
      columnNumber: 11
    }
  }), renderPlayButton(ytState, ref), __jsx(react_icons_fa__WEBPACK_IMPORTED_MODULE_3__["FaStepForward"], {
    className: "mx-4 cursor-pointer text-white",
    onClick: function onClick() {
      props.setSongIndex(props.songIndex + 1);
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 115,
      columnNumber: 11
    }
  }), __jsx(react_icons_ti__WEBPACK_IMPORTED_MODULE_4__["TiArrowShuffle"], {
    className: "mx-4 cursor-pointer text-xl ".concat(isShuffle ? 'text-primary' : 'text-white'),
    onClick: function onClick() {
      setIsShuffle(!isShuffle);
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 121,
      columnNumber: 11
    }
  }), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Slider"], {
    style: sliderStyle,
    className: "flex-grow mx-6",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 129,
      columnNumber: 11
    }
  }), __jsx("p", {
    className: "text-white mb-0 mx-6",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 130,
      columnNumber: 11
    }
  }, "timer"))));
};

/* harmony default export */ __webpack_exports__["default"] = (Player);

/***/ })

})
//# sourceMappingURL=index.js.e83c295428f3f419d688.hot-update.js.map