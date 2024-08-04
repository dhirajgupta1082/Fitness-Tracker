module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "../../../packages-native/popup-menu/src/PopupMenu.tsx");
/******/ })
/************************************************************************/
/******/ ({

/***/ "../../../node_modules/classnames/index.js":
/*!**************************************************************************************************!*\
  !*** /Users/diego.antonelli/Desktop/projects/widgets-resources/node_modules/classnames/index.js ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    _typeof = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}
/*!
  Copyright (c) 2017 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/

/* global define */


(function () {
  'use strict';

  var hasOwn = {}.hasOwnProperty;

  function classNames() {
    var classes = [];

    for (var i = 0; i < arguments.length; i++) {
      var arg = arguments[i];
      if (!arg) continue;

      var argType = _typeof(arg);

      if (argType === 'string' || argType === 'number') {
        classes.push(arg);
      } else if (Array.isArray(arg) && arg.length) {
        var inner = classNames.apply(null, arg);

        if (inner) {
          classes.push(inner);
        }
      } else if (argType === 'object') {
        for (var key in arg) {
          if (hasOwn.call(arg, key) && arg[key]) {
            classes.push(key);
          }
        }
      }
    }

    return classes.join(' ');
  }

  if ( true && module.exports) {
    classNames["default"] = classNames;
    module.exports = classNames;
  } else if ( true && _typeof(__webpack_require__(/*! !webpack amd options */ "../../../node_modules/webpack/buildin/amd-options.js")) === 'object' && __webpack_require__(/*! !webpack amd options */ "../../../node_modules/webpack/buildin/amd-options.js")) {
    // register as 'classnames', consistent with npm package name
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = (function () {
      return classNames;
    }).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else {
    window.classNames = classNames;
  }
})();

/***/ }),

/***/ "../../../node_modules/react-native-material-menu/src/Menu.js":
/*!*********************************************************************************************************************!*\
  !*** /Users/diego.antonelli/Desktop/projects/widgets-resources/node_modules/react-native-material-menu/src/Menu.js ***!
  \*********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_native__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-native */ "react-native");
/* harmony import */ var react_native__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_native__WEBPACK_IMPORTED_MODULE_1__);
function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    _typeof = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly) symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    });
    keys.push.apply(keys, symbols);
  }

  return keys;
}

function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      ownKeys(Object(source), true).forEach(function (key) {
        _defineProperty(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(Object(source)).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) _setPrototypeOf(subClass, superClass);
}

function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

function _createSuper(Derived) {
  return function () {
    var Super = _getPrototypeOf(Derived),
        result;

    if (_isNativeReflectConstruct()) {
      var NewTarget = _getPrototypeOf(this).constructor;

      result = Reflect.construct(Super, arguments, NewTarget);
    } else {
      result = Super.apply(this, arguments);
    }

    return _possibleConstructorReturn(this, result);
  };
}

function _possibleConstructorReturn(self, call) {
  if (call && (_typeof(call) === "object" || typeof call === "function")) {
    return call;
  }

  return _assertThisInitialized(self);
}

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

function _isNativeReflectConstruct() {
  if (typeof Reflect === "undefined" || !Reflect.construct) return false;
  if (Reflect.construct.sham) return false;
  if (typeof Proxy === "function") return true;

  try {
    Date.prototype.toString.call(Reflect.construct(Date, [], function () {}));
    return true;
  } catch (e) {
    return false;
  }
}

function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}



var STATES = {
  HIDDEN: 'HIDDEN',
  ANIMATING: 'ANIMATING',
  SHOWN: 'SHOWN'
};
var EASING = react_native__WEBPACK_IMPORTED_MODULE_1__["Easing"].bezier(0.4, 0, 0.2, 1);
var SCREEN_INDENT = 8;

var Menu = /*#__PURE__*/function (_React$Component) {
  _inherits(Menu, _React$Component);

  var _super = _createSuper(Menu);

  function Menu(props) {
    var _this;

    _classCallCheck(this, Menu);

    _this = _super.call(this, props);
    _this._container = null;

    _this._setContainerRef = function (ref) {
      _this._container = ref;
    };

    _this._onMenuLayout = function (e) {
      if (_this.state.menuState === STATES.ANIMATING) {
        return;
      }

      var _e$nativeEvent$layout = e.nativeEvent.layout,
          width = _e$nativeEvent$layout.width,
          height = _e$nativeEvent$layout.height;

      _this.setState({
        menuState: STATES.ANIMATING,
        menuWidth: width,
        menuHeight: height
      }, function () {
        react_native__WEBPACK_IMPORTED_MODULE_1__["Animated"].parallel([react_native__WEBPACK_IMPORTED_MODULE_1__["Animated"].timing(_this.state.menuSizeAnimation, {
          toValue: {
            x: width,
            y: height
          },
          duration: _this.props.animationDuration,
          easing: EASING,
          useNativeDriver: false
        }), react_native__WEBPACK_IMPORTED_MODULE_1__["Animated"].timing(_this.state.opacityAnimation, {
          toValue: 1,
          duration: _this.props.animationDuration,
          easing: EASING,
          useNativeDriver: false
        })]).start();
      });
    };

    _this._onDismiss = function () {
      if (_this.props.onHidden) {
        _this.props.onHidden();
      }
    };

    _this.show = function () {
      _this._container.measureInWindow(function (left, top, buttonWidth, buttonHeight) {
        _this.setState({
          buttonHeight: buttonHeight,
          buttonWidth: buttonWidth,
          left: left,
          menuState: STATES.SHOWN,
          top: top
        });
      });
    };

    _this.hide = function (onHidden) {
      react_native__WEBPACK_IMPORTED_MODULE_1__["Animated"].timing(_this.state.opacityAnimation, {
        toValue: 0,
        duration: _this.props.animationDuration,
        easing: EASING,
        useNativeDriver: false
      }).start(function () {
        // Reset state
        _this.setState({
          menuState: STATES.HIDDEN,
          menuSizeAnimation: new react_native__WEBPACK_IMPORTED_MODULE_1__["Animated"].ValueXY({
            x: 0,
            y: 0
          }),
          opacityAnimation: new react_native__WEBPACK_IMPORTED_MODULE_1__["Animated"].Value(0)
        }, function () {
          if (onHidden) {
            onHidden();
          } // Invoke onHidden callback if defined


          if (react_native__WEBPACK_IMPORTED_MODULE_1__["Platform"].OS !== 'ios' && _this.props.onHidden) {
            _this.props.onHidden();
          }
        });
      });
    };

    _this._hide = function () {
      _this.hide();
    };

    _this.state = {
      menuState: STATES.HIDDEN,
      top: 0,
      left: 0,
      menuWidth: 0,
      menuHeight: 0,
      buttonWidth: 0,
      buttonHeight: 0,
      menuSizeAnimation: new react_native__WEBPACK_IMPORTED_MODULE_1__["Animated"].ValueXY({
        x: 0,
        y: 0
      }),
      opacityAnimation: new react_native__WEBPACK_IMPORTED_MODULE_1__["Animated"].Value(0)
    };
    return _this;
  }

  _createClass(Menu, [{
    key: "render",
    value: function render() {
      var isRTL = react_native__WEBPACK_IMPORTED_MODULE_1__["I18nManager"].isRTL;
      var dimensions = react_native__WEBPACK_IMPORTED_MODULE_1__["Dimensions"].get('window');
      var windowWidth = dimensions.width;
      var windowHeight = dimensions.height - (react_native__WEBPACK_IMPORTED_MODULE_1__["StatusBar"].currentHeight || 0);
      var _this$state = this.state,
          menuSizeAnimation = _this$state.menuSizeAnimation,
          menuWidth = _this$state.menuWidth,
          menuHeight = _this$state.menuHeight,
          buttonWidth = _this$state.buttonWidth,
          buttonHeight = _this$state.buttonHeight,
          opacityAnimation = _this$state.opacityAnimation;
      var menuSize = {
        width: menuSizeAnimation.x,
        height: menuSizeAnimation.y
      }; // Adjust position of menu

      var _this$state2 = this.state,
          left = _this$state2.left,
          top = _this$state2.top;
      var transforms = [];

      if (isRTL && left + buttonWidth - menuWidth > SCREEN_INDENT || !isRTL && left + menuWidth > windowWidth - SCREEN_INDENT) {
        transforms.push({
          translateX: react_native__WEBPACK_IMPORTED_MODULE_1__["Animated"].multiply(menuSizeAnimation.x, -1)
        });
        left = Math.min(windowWidth - SCREEN_INDENT, left + buttonWidth);
      } else if (left < SCREEN_INDENT) {
        left = SCREEN_INDENT;
      } // Flip by Y axis if menu hits bottom screen border


      if (top > windowHeight - menuHeight - SCREEN_INDENT) {
        transforms.push({
          translateY: react_native__WEBPACK_IMPORTED_MODULE_1__["Animated"].multiply(menuSizeAnimation.y, -1)
        });
        top = windowHeight - SCREEN_INDENT;
        top = Math.min(windowHeight - SCREEN_INDENT, top + buttonHeight);
      } else if (top < SCREEN_INDENT) {
        top = SCREEN_INDENT;
      }

      var shadowMenuContainerStyle = _objectSpread({
        opacity: opacityAnimation,
        transform: transforms,
        top: top
      }, isRTL ? {
        right: left
      } : {
        left: left
      });

      var menuState = this.state.menuState;
      var animationStarted = menuState === STATES.ANIMATING;
      var modalVisible = menuState === STATES.SHOWN || animationStarted;
      var _this$props = this.props,
          testID = _this$props.testID,
          button = _this$props.button,
          style = _this$props.style,
          children = _this$props.children;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_native__WEBPACK_IMPORTED_MODULE_1__["View"], {
        ref: this._setContainerRef,
        collapsable: false,
        testID: testID
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_native__WEBPACK_IMPORTED_MODULE_1__["View"], null, button), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_native__WEBPACK_IMPORTED_MODULE_1__["Modal"], {
        visible: modalVisible,
        onRequestClose: this._hide,
        supportedOrientations: ['portrait', 'portrait-upside-down', 'landscape', 'landscape-left', 'landscape-right'],
        transparent: true,
        onDismiss: this._onDismiss
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_native__WEBPACK_IMPORTED_MODULE_1__["TouchableWithoutFeedback"], {
        onPress: this._hide,
        accessible: false
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_native__WEBPACK_IMPORTED_MODULE_1__["View"], {
        style: react_native__WEBPACK_IMPORTED_MODULE_1__["StyleSheet"].absoluteFill
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_native__WEBPACK_IMPORTED_MODULE_1__["Animated"].View, {
        onLayout: this._onMenuLayout,
        style: [styles.shadowMenuContainer, shadowMenuContainerStyle, style]
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_native__WEBPACK_IMPORTED_MODULE_1__["Animated"].View, {
        style: [styles.menuContainer, animationStarted && menuSize]
      }, children))))));
    }
  }]);

  return Menu;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

Menu.defaultProps = {
  animationDuration: 300
};
var styles = react_native__WEBPACK_IMPORTED_MODULE_1__["StyleSheet"].create({
  shadowMenuContainer: _objectSpread({
    position: 'absolute',
    backgroundColor: 'white',
    borderRadius: 4,
    opacity: 0
  }, react_native__WEBPACK_IMPORTED_MODULE_1__["Platform"].select({
    ios: {
      shadowColor: 'black',
      shadowOffset: {
        width: 0,
        height: 2
      },
      shadowOpacity: 0.14,
      shadowRadius: 2
    },
    android: {
      elevation: 8
    }
  })),
  menuContainer: {
    overflow: 'hidden'
  }
});
/* harmony default export */ __webpack_exports__["default"] = (Menu);

/***/ }),

/***/ "../../../node_modules/react-native-material-menu/src/MenuDivider.js":
/*!****************************************************************************************************************************!*\
  !*** /Users/diego.antonelli/Desktop/projects/widgets-resources/node_modules/react-native-material-menu/src/MenuDivider.js ***!
  \****************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_native__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-native */ "react-native");
/* harmony import */ var react_native__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_native__WEBPACK_IMPORTED_MODULE_1__);



function MenuDivider(_ref) {
  var color = _ref.color;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_native__WEBPACK_IMPORTED_MODULE_1__["View"], {
    style: [styles.divider, {
      borderBottomColor: color
    }]
  });
}

MenuDivider.defaultProps = {
  color: 'rgba(0,0,0,0.12)'
};
var styles = react_native__WEBPACK_IMPORTED_MODULE_1__["StyleSheet"].create({
  divider: {
    flex: 1,
    borderBottomWidth: react_native__WEBPACK_IMPORTED_MODULE_1__["StyleSheet"].hairlineWidth
  }
});
/* harmony default export */ __webpack_exports__["default"] = (MenuDivider);

/***/ }),

/***/ "../../../node_modules/react-native-material-menu/src/MenuItem.js":
/*!*************************************************************************************************************************!*\
  !*** /Users/diego.antonelli/Desktop/projects/widgets-resources/node_modules/react-native-material-menu/src/MenuItem.js ***!
  \*************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_native__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-native */ "react-native");
/* harmony import */ var react_native__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_native__WEBPACK_IMPORTED_MODULE_1__);
function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};

  var target = _objectWithoutPropertiesLoose(source, excluded);

  var key, i;

  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);

    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }

  return target;
}

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}



var Touchable = react_native__WEBPACK_IMPORTED_MODULE_1__["Platform"].select({
  android: react_native__WEBPACK_IMPORTED_MODULE_1__["TouchableNativeFeedback"],
  "default": react_native__WEBPACK_IMPORTED_MODULE_1__["TouchableHighlight"]
});

function MenuItem(_ref) {
  var children = _ref.children,
      disabled = _ref.disabled,
      disabledTextColor = _ref.disabledTextColor,
      ellipsizeMode = _ref.ellipsizeMode,
      onPress = _ref.onPress,
      style = _ref.style,
      textStyle = _ref.textStyle,
      props = _objectWithoutProperties(_ref, ["children", "disabled", "disabledTextColor", "ellipsizeMode", "onPress", "style", "textStyle"]);

  var touchableProps = react_native__WEBPACK_IMPORTED_MODULE_1__["Platform"].OS === 'android' ? {
    background: react_native__WEBPACK_IMPORTED_MODULE_1__["TouchableNativeFeedback"].SelectableBackground()
  } : {};
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Touchable, _extends({
    disabled: disabled,
    onPress: onPress
  }, touchableProps, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_native__WEBPACK_IMPORTED_MODULE_1__["View"], {
    style: [styles.container, style]
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_native__WEBPACK_IMPORTED_MODULE_1__["Text"], {
    ellipsizeMode: ellipsizeMode,
    numberOfLines: 1,
    style: [styles.title, disabled && {
      color: disabledTextColor
    }, textStyle]
  }, children)));
}

MenuItem.defaultProps = {
  disabled: false,
  disabledTextColor: '#bdbdbd',
  ellipsizeMode: react_native__WEBPACK_IMPORTED_MODULE_1__["Platform"].OS === 'ios' ? 'clip' : 'tail',
  underlayColor: '#e0e0e0'
};
var styles = react_native__WEBPACK_IMPORTED_MODULE_1__["StyleSheet"].create({
  container: {
    height: 48,
    justifyContent: 'center',
    maxWidth: 248,
    minWidth: 124
  },
  title: {
    fontSize: 14,
    fontWeight: '400',
    paddingHorizontal: 16,
    textAlign: 'left'
  }
});
/* harmony default export */ __webpack_exports__["default"] = (MenuItem);

/***/ }),

/***/ "../../../node_modules/react-native-material-menu/src/index.js":
/*!**********************************************************************************************************************!*\
  !*** /Users/diego.antonelli/Desktop/projects/widgets-resources/node_modules/react-native-material-menu/src/index.js ***!
  \**********************************************************************************************************************/
/*! exports provided: MenuDivider, MenuItem, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _MenuDivider__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./MenuDivider */ "../../../node_modules/react-native-material-menu/src/MenuDivider.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MenuDivider", function() { return _MenuDivider__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _MenuItem__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./MenuItem */ "../../../node_modules/react-native-material-menu/src/MenuItem.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MenuItem", function() { return _MenuItem__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony import */ var _Menu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Menu */ "../../../node_modules/react-native-material-menu/src/Menu.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _Menu__WEBPACK_IMPORTED_MODULE_2__["default"]; });





/***/ }),

/***/ "../../../node_modules/webpack/buildin/amd-options.js":
/*!****************************************!*\
  !*** (webpack)/buildin/amd-options.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* WEBPACK VAR INJECTION */(function(__webpack_amd_options__) {/* globals __webpack_amd_options__ */
module.exports = __webpack_amd_options__;

/* WEBPACK VAR INJECTION */}.call(this, {}))

/***/ }),

/***/ "../../../packages-native/popup-menu/src/PopupMenu.tsx":
/*!**************************************************************************************************************!*\
  !*** /Users/diego.antonelli/Desktop/projects/widgets-resources/packages-native/popup-menu/src/PopupMenu.tsx ***!
  \**************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(/*! react */ "react"), __webpack_require__(/*! @widgets-resources/piw-utils */ "../../piw-utils/dist/index.js"), __webpack_require__(/*! react-native */ "react-native"), __webpack_require__(/*! react-native-material-menu */ "../../../node_modules/react-native-material-menu/src/index.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, react_1, piw_utils_1, react_native_1, react_native_material_menu_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    react_native_material_menu_1 = __importStar(react_native_material_menu_1);
    function PopupMenu(props) {
        var styles = react_native_1.StyleSheet.flatten(props.style);
        var menuRef = react_1.useRef(null);
        var showMenu = react_1.useCallback(function () {
            var _a;
            (_a = menuRef.current) === null || _a === void 0 ? void 0 : _a.show();
        }, [menuRef.current]);
        var handlePress = react_1.useCallback(function (action) {
            var _a;
            (_a = menuRef.current) === null || _a === void 0 ? void 0 : _a.hide();
            piw_utils_1.executeAction(action);
        }, [menuRef.current]);
        var Touchable = react_native_1.Platform.OS === "android" ? react_native_1.TouchableNativeFeedback : react_native_1.TouchableOpacity;
        var menuOptions;
        if (props.renderMode === "basic") {
            menuOptions = props.basicItems.map(function (item, index) {
                var _a, _b, _c, _d, _e, _f;
                var itemStyle = ((_a = styles.basic) === null || _a === void 0 ? void 0 : _a.itemStyle) && ((_b = styles.basic) === null || _b === void 0 ? void 0 : _b.itemStyle[item.styleClass]);
                return item.itemType === "divider" ? (react_1.createElement(react_native_material_menu_1.MenuDivider, { key: index, color: (_c = styles.basic) === null || _c === void 0 ? void 0 : _c.dividerColor })) : (react_1.createElement(react_native_material_menu_1.MenuItem, { key: index, onPress: function () { return handlePress(item.action); }, textStyle: itemStyle, ellipsizeMode: (_e = (_d = styles.basic) === null || _d === void 0 ? void 0 : _d.itemStyle) === null || _e === void 0 ? void 0 : _e.ellipsizeMode, style: (_f = styles.basic) === null || _f === void 0 ? void 0 : _f.containerStyle }, item.caption));
            });
        }
        else {
            menuOptions = props.customItems.map(function (item, index) { return (react_1.createElement(Touchable, __assign({ key: index, onPress: function () { return handlePress(item.action); } }, (react_native_1.Platform.OS === "android"
                ? {
                    background: react_native_1.TouchableNativeFeedback.SelectableBackground()
                }
                : {})),
                react_1.createElement(react_1.Fragment, null, item.content))); });
        }
        return (react_1.createElement(react_native_material_menu_1.default, { ref: menuRef, style: styles === null || styles === void 0 ? void 0 : styles.container, button: react_1.createElement(Touchable, { onPress: showMenu },
                react_1.createElement(react_native_1.View, { pointerEvents: "box-only", style: styles.buttonContainer }, props.menuTriggerer)) }, menuOptions));
    }
    exports.PopupMenu = PopupMenu;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),

/***/ "../../piw-utils/dist/builders/ListValueBuilder.js":
/*!*****************************************************************************************************************************!*\
  !*** /Users/diego.antonelli/Desktop/projects/widgets-resources/packages-common/piw-utils/dist/builders/ListValueBuilder.js ***!
  \*****************************************************************************************************************************/
/*! exports provided: ListValueBuilder */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListValueBuilder", function() { return ListValueBuilder; });
function ListValueBuilder() {
  var listValue = {
    status: "available",
    offset: 0,
    limit: 1,
    items: [{
      id: "1"
    }, {
      id: "2"
    }],
    totalCount: 2,
    hasMoreItems: false,
    setLimit: jest.fn(),
    setOffset: jest.fn()
  };
  return {
    withItems: function withItems(items) {
      return Object.assign(Object.assign({}, listValue), {
        items: items,
        totalCount: items.length
      });
    },
    withAmountOfItems: function withAmountOfItems(amount) {
      var items = [];

      for (var i = 0; i < amount; i++) {
        items.push({
          id: i.toString()
        });
      }

      return this.withItems(items);
    },
    isLoading: function isLoading() {
      return Object.assign(Object.assign({}, listValue), {
        status: "loading"
      });
    },
    isUnavailable: function isUnavailable() {
      return Object.assign(Object.assign({}, listValue), {
        status: "unavailable"
      });
    },
    simple: function simple() {
      return listValue;
    }
  };
}

/***/ }),

/***/ "../../piw-utils/dist/builders/index.js":
/*!******************************************************************************************************************!*\
  !*** /Users/diego.antonelli/Desktop/projects/widgets-resources/packages-common/piw-utils/dist/builders/index.js ***!
  \******************************************************************************************************************/
/*! exports provided: ListValueBuilder */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ListValueBuilder__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ListValueBuilder */ "../../piw-utils/dist/builders/ListValueBuilder.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ListValueBuilder", function() { return _ListValueBuilder__WEBPACK_IMPORTED_MODULE_0__["ListValueBuilder"]; });



/***/ }),

/***/ "../../piw-utils/dist/components.js":
/*!**************************************************************************************************************!*\
  !*** /Users/diego.antonelli/Desktop/projects/widgets-resources/packages-common/piw-utils/dist/components.js ***!
  \**************************************************************************************************************/
/*! exports provided: Alert */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Alert", function() { return Alert; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ "../../../node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);


var Alert = function Alert(_ref) {
  var className = _ref.className,
      bootstrapStyle = _ref.bootstrapStyle,
      children = _ref.children;
  return react__WEBPACK_IMPORTED_MODULE_0__["Children"].count(children) > 0 ? Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
    className: classnames__WEBPACK_IMPORTED_MODULE_1___default()("alert alert-".concat(bootstrapStyle), className)
  }, children) : null;
};
Alert.displayName = "Alert";

/***/ }),

/***/ "../../piw-utils/dist/functions.js":
/*!*************************************************************************************************************!*\
  !*** /Users/diego.antonelli/Desktop/projects/widgets-resources/packages-common/piw-utils/dist/functions.js ***!
  \*************************************************************************************************************/
/*! exports provided: executeAction, isAvailable, parseStyle */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "executeAction", function() { return executeAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isAvailable", function() { return isAvailable; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "parseStyle", function() { return parseStyle; });
var executeAction = function executeAction(action) {
  if (action && action.canExecute && !action.isExecuting) {
    action.execute();
  }
};
var isAvailable = function isAvailable(property) {
  return property && property.status === "available" && property.value;
};
var parseStyle = function parseStyle() {
  var style = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "";

  try {
    return style.split(";").reduce(function (styleObject, line) {
      var pair = line.split(":");

      if (pair.length === 2) {
        var name = pair[0].trim().replace(/(-.)/g, function (match) {
          return match[1].toUpperCase();
        });
        styleObject[name] = pair[1].trim();
      }

      return styleObject;
    }, {});
  } catch (_) {
    return {};
  }
};

/***/ }),

/***/ "../../piw-utils/dist/index.js":
/*!*********************************************************************************************************!*\
  !*** /Users/diego.antonelli/Desktop/projects/widgets-resources/packages-common/piw-utils/dist/index.js ***!
  \*********************************************************************************************************/
/*! exports provided: Alert, executeAction, isAvailable, parseStyle, ListValueBuilder, hidePropertyIn, hidePropertiesIn, changePropertyIn */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components */ "../../piw-utils/dist/components.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Alert", function() { return _components__WEBPACK_IMPORTED_MODULE_0__["Alert"]; });

/* harmony import */ var _functions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./functions */ "../../piw-utils/dist/functions.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "executeAction", function() { return _functions__WEBPACK_IMPORTED_MODULE_1__["executeAction"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isAvailable", function() { return _functions__WEBPACK_IMPORTED_MODULE_1__["isAvailable"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "parseStyle", function() { return _functions__WEBPACK_IMPORTED_MODULE_1__["parseStyle"]; });

/* harmony import */ var _builders__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./builders */ "../../piw-utils/dist/builders/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ListValueBuilder", function() { return _builders__WEBPACK_IMPORTED_MODULE_2__["ListValueBuilder"]; });

/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./utils */ "../../piw-utils/dist/utils/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "hidePropertyIn", function() { return _utils__WEBPACK_IMPORTED_MODULE_3__["hidePropertyIn"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "hidePropertiesIn", function() { return _utils__WEBPACK_IMPORTED_MODULE_3__["hidePropertiesIn"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "changePropertyIn", function() { return _utils__WEBPACK_IMPORTED_MODULE_3__["changePropertyIn"]; });






/***/ }),

/***/ "../../piw-utils/dist/utils/PageEditorUtils.js":
/*!*************************************************************************************************************************!*\
  !*** /Users/diego.antonelli/Desktop/projects/widgets-resources/packages-common/piw-utils/dist/utils/PageEditorUtils.js ***!
  \*************************************************************************************************************************/
/*! exports provided: hidePropertyIn, hidePropertiesIn, changePropertyIn */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hidePropertyIn", function() { return hidePropertyIn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hidePropertiesIn", function() { return hidePropertiesIn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "changePropertyIn", function() { return changePropertyIn; });
function hidePropertyIn(propertyGroups, _value, key, nestedPropIndex, nestedPropKey) {
  modifyProperty(function (_, index, container) {
    return container.splice(index, 1);
  }, propertyGroups, key, nestedPropIndex, nestedPropKey);
}
function hidePropertiesIn(propertyGroups, _value, keys) {
  keys.forEach(function (key) {
    return modifyProperty(function (_, index, container) {
      return container.splice(index, 1);
    }, propertyGroups, key, undefined, undefined);
  });
}
function changePropertyIn(propertyGroups, _value, modify, key, nestedPropIndex, nestedPropKey) {
  modifyProperty(modify, propertyGroups, key, nestedPropIndex, nestedPropKey);
}

function modifyProperty(modify, propertyGroups, key, nestedPropIndex, nestedPropKey) {
  propertyGroups.forEach(function (propGroup) {
    var _a;

    if (propGroup.propertyGroups) {
      modifyProperty(modify, propGroup.propertyGroups, key, nestedPropIndex, nestedPropKey);
    }

    (_a = propGroup.properties) === null || _a === void 0 ? void 0 : _a.forEach(function (prop, index, array) {
      if (prop.key === key) {
        if (nestedPropIndex === undefined || nestedPropKey === undefined) {
          modify(prop, index, array);
        } else {
          if (!prop.properties) {
            throw new Error("Wrong parameters");
          }

          modifyProperty(modify, prop.properties[nestedPropIndex], nestedPropKey);
        }
      }
    });
  });
}

/***/ }),

/***/ "../../piw-utils/dist/utils/index.js":
/*!***************************************************************************************************************!*\
  !*** /Users/diego.antonelli/Desktop/projects/widgets-resources/packages-common/piw-utils/dist/utils/index.js ***!
  \***************************************************************************************************************/
/*! exports provided: hidePropertyIn, hidePropertiesIn, changePropertyIn */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _PageEditorUtils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./PageEditorUtils */ "../../piw-utils/dist/utils/PageEditorUtils.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "hidePropertyIn", function() { return _PageEditorUtils__WEBPACK_IMPORTED_MODULE_0__["hidePropertyIn"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "hidePropertiesIn", function() { return _PageEditorUtils__WEBPACK_IMPORTED_MODULE_0__["hidePropertiesIn"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "changePropertyIn", function() { return _PageEditorUtils__WEBPACK_IMPORTED_MODULE_0__["changePropertyIn"]; });



/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-native":
/*!*******************************!*\
  !*** external "react-native" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-native");

/***/ })

/******/ });
//# sourceMappingURL=PopupMenu.js.map