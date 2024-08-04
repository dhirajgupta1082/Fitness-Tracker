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
/******/ 	return __webpack_require__(__webpack_require__.s = "../../../packages-native/intro-screen/src/IntroScreen.tsx");
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

/***/ "../../../node_modules/deepmerge/dist/cjs.js":
/*!****************************************************************************************************!*\
  !*** /Users/diego.antonelli/Desktop/projects/widgets-resources/node_modules/deepmerge/dist/cjs.js ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


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

var isMergeableObject = function isMergeableObject(value) {
  return isNonNullObject(value) && !isSpecial(value);
};

function isNonNullObject(value) {
  return !!value && _typeof(value) === 'object';
}

function isSpecial(value) {
  var stringValue = Object.prototype.toString.call(value);
  return stringValue === '[object RegExp]' || stringValue === '[object Date]' || isReactElement(value);
} // see https://github.com/facebook/react/blob/b5ac963fb791d1298e7f396236383bc955f916c1/src/isomorphic/classic/element/ReactElement.js#L21-L25


var canUseSymbol = typeof Symbol === 'function' && Symbol["for"];
var REACT_ELEMENT_TYPE = canUseSymbol ? Symbol["for"]('react.element') : 0xeac7;

function isReactElement(value) {
  return value.$$typeof === REACT_ELEMENT_TYPE;
}

function emptyTarget(val) {
  return Array.isArray(val) ? [] : {};
}

function cloneUnlessOtherwiseSpecified(value, options) {
  return options.clone !== false && options.isMergeableObject(value) ? deepmerge(emptyTarget(value), value, options) : value;
}

function defaultArrayMerge(target, source, options) {
  return target.concat(source).map(function (element) {
    return cloneUnlessOtherwiseSpecified(element, options);
  });
}

function getMergeFunction(key, options) {
  if (!options.customMerge) {
    return deepmerge;
  }

  var customMerge = options.customMerge(key);
  return typeof customMerge === 'function' ? customMerge : deepmerge;
}

function getEnumerableOwnPropertySymbols(target) {
  return Object.getOwnPropertySymbols ? Object.getOwnPropertySymbols(target).filter(function (symbol) {
    return target.propertyIsEnumerable(symbol);
  }) : [];
}

function getKeys(target) {
  return Object.keys(target).concat(getEnumerableOwnPropertySymbols(target));
}

function propertyIsOnObject(object, property) {
  try {
    return property in object;
  } catch (_) {
    return false;
  }
} // Protects from prototype poisoning and unexpected merging up the prototype chain.


function propertyIsUnsafe(target, key) {
  return propertyIsOnObject(target, key) // Properties are safe to merge if they don't exist in the target yet,
  && !(Object.hasOwnProperty.call(target, key) // unsafe if they exist up the prototype chain,
  && Object.propertyIsEnumerable.call(target, key)); // and also unsafe if they're nonenumerable.
}

function mergeObject(target, source, options) {
  var destination = {};

  if (options.isMergeableObject(target)) {
    getKeys(target).forEach(function (key) {
      destination[key] = cloneUnlessOtherwiseSpecified(target[key], options);
    });
  }

  getKeys(source).forEach(function (key) {
    if (propertyIsUnsafe(target, key)) {
      return;
    }

    if (propertyIsOnObject(target, key) && options.isMergeableObject(source[key])) {
      destination[key] = getMergeFunction(key, options)(target[key], source[key], options);
    } else {
      destination[key] = cloneUnlessOtherwiseSpecified(source[key], options);
    }
  });
  return destination;
}

function deepmerge(target, source, options) {
  options = options || {};
  options.arrayMerge = options.arrayMerge || defaultArrayMerge;
  options.isMergeableObject = options.isMergeableObject || isMergeableObject; // cloneUnlessOtherwiseSpecified is added to `options` so that custom arrayMerge()
  // implementations can use it. The caller may not replace it.

  options.cloneUnlessOtherwiseSpecified = cloneUnlessOtherwiseSpecified;
  var sourceIsArray = Array.isArray(source);
  var targetIsArray = Array.isArray(target);
  var sourceAndTargetTypesMatch = sourceIsArray === targetIsArray;

  if (!sourceAndTargetTypesMatch) {
    return cloneUnlessOtherwiseSpecified(source, options);
  } else if (sourceIsArray) {
    return options.arrayMerge(target, source, options);
  } else {
    return mergeObject(target, source, options);
  }
}

deepmerge.all = function deepmergeAll(array, options) {
  if (!Array.isArray(array)) {
    throw new Error('first argument should be an array');
  }

  return array.reduce(function (prev, next) {
    return deepmerge(prev, next, options);
  }, {});
};

var deepmerge_1 = deepmerge;
module.exports = deepmerge_1;

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

/***/ "../../../packages-native/intro-screen/src/IntroScreen.tsx":
/*!******************************************************************************************************************!*\
  !*** /Users/diego.antonelli/Desktop/projects/widgets-resources/packages-native/intro-screen/src/IntroScreen.tsx ***!
  \******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(/*! react */ "react"), __webpack_require__(/*! ./ui/Styles */ "../../../packages-native/intro-screen/src/ui/Styles.ts"), __webpack_require__(/*! react-native */ "react-native"), __webpack_require__(/*! ./SwipeableContainer */ "../../../packages-native/intro-screen/src/SwipeableContainer.tsx"), __webpack_require__(/*! @react-native-community/async-storage */ "@react-native-community/async-storage"), __webpack_require__(/*! deepmerge */ "../../../node_modules/deepmerge/dist/cjs.js"), __webpack_require__(/*! @widgets-resources/piw-utils */ "../../piw-utils/dist/index.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, react_1, Styles_1, react_native_1, SwipeableContainer_1, async_storage_1, deepmerge_1, piw_utils_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    async_storage_1 = __importDefault(async_storage_1);
    deepmerge_1 = __importDefault(deepmerge_1);
    function IntroScreen(props) {
        var _a = react_1.useState(false), visible = _a[0], setVisible = _a[1];
        var customStyles = props.style ? props.style.filter(function (o) { return o != null; }) : [];
        var styles = customStyles.length > 0
            ? deepmerge_1.default.all(__spreadArrays([Styles_1.defaultWelcomeScreenStyle], customStyles))
            : Styles_1.defaultWelcomeScreenStyle;
        react_1.useEffect(function () {
            if (props.identifier) {
                async_storage_1.default.getItem(props.identifier).then(function (value) {
                    setVisible(value === "" || value === null);
                });
            }
            else {
                setVisible(true);
            }
        }, []);
        var onDone = react_1.useCallback(function () {
            hideModal();
            piw_utils_1.executeAction(props.onDone);
        }, [props.onDone]);
        var onSlideChange = react_1.useCallback(function () { return piw_utils_1.executeAction(props.onSlideChange); }, [props.onSlideChange]);
        var onSkip = react_1.useCallback(function () {
            hideModal();
            piw_utils_1.executeAction(props.onSkip);
        }, [props.onSkip]);
        var checkLabel = function (label) {
            if (label && label.value && label.status === "available") {
                return label.value;
            }
            return undefined;
        };
        var hideModal = function () {
            if (props.identifier) {
                async_storage_1.default.setItem(props.identifier, "gone").then(function () { return setVisible(false); });
            }
            else {
                setVisible(false);
            }
        };
        var showSkipPrevious = props.buttonPattern === "all";
        var showNextDone = props.buttonPattern !== "none";
        return (react_1.createElement(react_native_1.Modal, { visible: visible, transparent: props.showMode === "popup" },
            react_1.createElement(react_native_1.View, { style: props.showMode === "fullscreen" ? styles.fullscreenContainer : styles.popupContainer },
                react_1.createElement(SwipeableContainer_1.SwipeableContainer, { testID: props.name, slides: props.slides, onDone: onDone, onSlideChange: onSlideChange, onSkip: onSkip, bottomButton: props.slideIndicators !== "between", numberOfButtons: props.buttonPattern === "nextDone" ? 1 : 2, showSkipButton: showSkipPrevious, showNextButton: showNextDone, showPreviousButton: showSkipPrevious, showDoneButton: showNextDone, hidePagination: props.slideIndicators === "never", skipLabel: checkLabel(props.skipCaption), skipIcon: props.skipIcon, previousLabel: checkLabel(props.previousCaption), previousIcon: props.previousIcon, nextLabel: checkLabel(props.nextCaption), nextIcon: props.nextIcon, doneLabel: checkLabel(props.doneCaption), doneIcon: props.doneIcon, styles: styles, activeSlide: props.activeSlideAttribute, hideIndicatorLastSlide: props.hideIndicatorLastSlide }))));
    }
    exports.IntroScreen = IntroScreen;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),

/***/ "../../../packages-native/intro-screen/src/SwipeableContainer.tsx":
/*!*************************************************************************************************************************!*\
  !*** /Users/diego.antonelli/Desktop/projects/widgets-resources/packages-native/intro-screen/src/SwipeableContainer.tsx ***!
  \*************************************************************************************************************************/
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
!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(/*! react */ "react"), __webpack_require__(/*! react-native */ "react-native"), __webpack_require__(/*! mendix/components/native/Icon */ "mendix/components/native/Icon"), __webpack_require__(/*! big.js */ "big.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, react_1, react_native_1, Icon_1, big_js_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var isAndroidRTL = react_native_1.I18nManager.isRTL && react_native_1.Platform.OS === "android";
    var Touchable = react_native_1.Platform.OS === "android" ? react_native_1.TouchableNativeFeedback : react_native_1.TouchableOpacity;
    var refreshActiveSlideAttribute = function (slides, activeSlide) {
        if (activeSlide && activeSlide.status === "available" && slides && slides.length > 0) {
            var slide = Number(activeSlide.value) - 1;
            if (slide < 0) {
                return 0;
            }
            else if (slide > slides.length - 1) {
                return slides.length - 1;
            }
            return slide;
        }
        return 0;
    };
    exports.SwipeableContainer = function (props) {
        var _a = react_1.useState(0), width = _a[0], setWidth = _a[1];
        var _b = react_1.useState(0), activeIndex = _b[0], setActiveIndex = _b[1];
        var flatList = react_1.useRef(null);
        react_1.useEffect(function () {
            var slide = refreshActiveSlideAttribute(props.slides, props.activeSlide);
            if (width && props.activeSlide && props.activeSlide.status === "available" && slide !== activeIndex) {
                goToSlide(slide);
            }
        }, [props.activeSlide, activeIndex, width]);
        var goToSlide = react_1.useCallback(function (pageNum) {
            setActiveIndex(pageNum);
            if (flatList && flatList.current) {
                flatList.current.scrollToOffset({
                    offset: rtlSafeIndex(pageNum) * width
                });
            }
        }, [width, flatList]);
        var onNextPress = function () {
            goToSlide(activeIndex + 1);
            onSlideChange(activeIndex + 1, activeIndex);
        };
        var onPrevPress = function () {
            goToSlide(activeIndex - 1);
            onSlideChange(activeIndex - 1, activeIndex);
        };
        var onPaginationPress = function (index) {
            var activeIndexBeforeChange = activeIndex;
            goToSlide(index);
            onSlideChange(index, activeIndexBeforeChange);
        };
        var renderItem = function (_a) {
            var item = _a.item;
            return react_1.createElement(react_native_1.View, { style: [{ width: width, flex: 1 }] }, item.content);
        };
        var renderButton = function (caption, icon, defaultIcon, style, onPress, testID) {
            var iconSource = { type: "glyph", iconClass: "glyphicon-" + defaultIcon };
            var iconContent = !icon && !caption ? (react_1.createElement(react_native_1.View, { style: { alignSelf: "center" } },
                react_1.createElement(Icon_1.Icon, { icon: iconSource, color: style.icon.color ? style.icon.color : "black", size: style.icon.size ? style.icon.size : undefined }))) : null;
            if (icon && icon.status === "available" && icon.value) {
                iconContent = (react_1.createElement(react_native_1.View, { style: { alignSelf: "center" } },
                    react_1.createElement(Icon_1.Icon, { icon: icon.value, color: style.icon.color ? style.icon.color : "black", size: style.icon.size ? style.icon.size : undefined })));
            }
            var Container = props.bottomButton ? react_native_1.View : react_1.Fragment;
            var containerProps = props.bottomButton
                ? {
                    style: styles.flexOne
                }
                : {};
            return (react_1.createElement(Container, __assign({}, containerProps),
                react_1.createElement(Touchable, { onPress: onPress, testID: props.testID + "$" + testID },
                    react_1.createElement(react_native_1.View, { style: [style.container, !props.bottomButton ? { width: width / 3 } : {}] },
                        iconContent,
                        caption && react_1.createElement(react_native_1.Text, { style: style.caption }, caption)))));
        };
        var onSlideChange = function (newIndex, lastIndex) {
            if (props.activeSlide && !props.activeSlide.readOnly) {
                props.activeSlide.setValue(new big_js_1.Big(newIndex + 1));
            }
            if (props.onSlideChange) {
                props.onSlideChange(newIndex, lastIndex);
            }
        };
        var renderNextButton = function (_a) {
            var showNextButton = _a.showNextButton, nextLabel = _a.nextLabel, nextIcon = _a.nextIcon, styles = _a.styles;
            return showNextButton &&
                renderButton(nextLabel, nextIcon, "chevron-right", props.bottomButton ? styles.paginationAbove.buttonNext : styles.paginationBetween.buttonNext, onNextPress, "buttonNext");
        };
        var renderPrevButton = function (_a) {
            var showPreviousButton = _a.showPreviousButton, previousLabel = _a.previousLabel, previousIcon = _a.previousIcon, styles = _a.styles;
            return showPreviousButton &&
                renderButton(previousLabel, previousIcon, "chevron-left", props.bottomButton ? styles.paginationAbove.buttonPrevious : styles.paginationBetween.buttonPrevious, onPrevPress, "buttonPrevious");
        };
        var renderDoneButton = function (_a) {
            var showDoneButton = _a.showDoneButton, doneLabel = _a.doneLabel, doneIcon = _a.doneIcon, onDone = _a.onDone, styles = _a.styles;
            return showDoneButton &&
                renderButton(doneLabel, doneIcon, "ok", props.bottomButton ? styles.paginationAbove.buttonDone : styles.paginationBetween.buttonDone, onDone, "buttonDone");
        };
        var renderSkipButton = function (_a) {
            var showSkipButton = _a.showSkipButton, skipLabel = _a.skipLabel, skipIcon = _a.skipIcon, onSkip = _a.onSkip, slides = _a.slides, styles = _a.styles;
            return showSkipButton &&
                renderButton(skipLabel, skipIcon, "remove", props.bottomButton ? styles.paginationAbove.buttonSkip : styles.paginationBetween.buttonSkip, function () { return (onSkip ? onSkip() : goToSlide(slides.length - 1)); }, "buttonSkip");
        };
        var renderPagination = function () {
            var isLastSlide = activeIndex === props.slides.length - 1;
            var isFirstSlide = activeIndex === 0;
            var leftButton = (!isFirstSlide && renderPrevButton(props)) || (!isLastSlide && renderSkipButton(props));
            var rightButton = isLastSlide ? renderDoneButton(props) : renderNextButton(props);
            var paginationOverflow = props.slides.length > 5;
            var hidePagination = props.hidePagination || (isLastSlide && props.hideIndicatorLastSlide);
            return (react_1.createElement(react_native_1.View, { style: [props.styles.paginationContainer, !props.bottomButton ? { flexDirection: "row" } : {}] },
                !props.bottomButton && leftButton,
                react_1.createElement(react_native_1.View, { style: [styles.paginationDots, props.bottomButton ? { width: "100%" } : { width: width / 3 }] },
                    !hidePagination &&
                        !paginationOverflow &&
                        props.slides.length > 1 &&
                        props.slides.map(function (_, i) { return (react_1.createElement(react_native_1.TouchableOpacity, { testID: props.testID + "$dot" + i, key: i, style: [
                                styles.dot,
                                rtlSafeIndex(i) === activeIndex
                                    ? props.styles.activeDotStyle
                                    : props.styles.dotStyle
                            ], onPress: function () { return onPaginationPress(i); } })); }),
                    !hidePagination && paginationOverflow && (react_1.createElement(react_native_1.Text, { style: props.styles.paginationText, testID: props.testID + "$paginationText" },
                        activeIndex + 1,
                        "/",
                        props.slides.length))),
                !props.bottomButton && rightButton,
                props.bottomButton && (react_1.createElement(react_native_1.View, { style: props.styles.paginationAbove.buttonsContainer },
                    props.numberOfButtons === 2 && leftButton,
                    rightButton))));
        };
        var rtlSafeIndex = function (i) { return (isAndroidRTL ? props.slides.length - 1 - i : i); };
        var onMomentumScrollEnd = react_1.useCallback(function (event) {
            var offset = event.nativeEvent.contentOffset.x;
            var newIndex = rtlSafeIndex(Math.round(offset / width));
            if (newIndex === activeIndex) {
                return;
            }
            var lastIndex = activeIndex;
            setActiveIndex(newIndex);
            onSlideChange(newIndex, lastIndex);
        }, [activeIndex, width]);
        var onLayout = react_1.useCallback(function (event) {
            var newWidth = event.nativeEvent.layout.width;
            if (newWidth !== width) {
                setWidth(newWidth);
            }
        }, [width]);
        return (react_1.createElement(react_native_1.View, { style: styles.flexOne },
            react_1.createElement(react_native_1.FlatList, { testID: props.testID, ref: flatList, data: props.slides, horizontal: true, pagingEnabled: true, showsHorizontalScrollIndicator: false, bounces: false, style: styles.flatList, renderItem: renderItem, onMomentumScrollEnd: onMomentumScrollEnd, extraData: width, onLayout: onLayout, keyExtractor: function (_, index) { return "screen_key_" + index; } }),
            renderPagination()));
    };
    exports.SwipeableContainer.defaultProps = {
        showDoneButton: true,
        showNextButton: true
    };
    var styles = react_native_1.StyleSheet.create({
        flexOne: {
            flex: 1
        },
        flatList: {
            flex: 1,
            flexDirection: isAndroidRTL ? "row-reverse" : "row"
        },
        paginationDots: {
            flexDirection: isAndroidRTL ? "row-reverse" : "row",
            justifyContent: "center",
            alignItems: "center"
        },
        dot: {
            width: 10,
            height: 10,
            borderRadius: 5,
            marginHorizontal: 4
        },
        bottomButtonDefault: {
            flex: 1,
            justifyContent: "center"
        }
    });
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),

/***/ "../../../packages-native/intro-screen/src/ui/Styles.ts":
/*!***************************************************************************************************************!*\
  !*** /Users/diego.antonelli/Desktop/projects/widgets-resources/packages-native/intro-screen/src/ui/Styles.ts ***!
  \***************************************************************************************************************/
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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(/*! react-native */ "react-native"), __webpack_require__(/*! react-native-device-info */ "react-native-device-info")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, react_native_1, react_native_device_info_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    react_native_device_info_1 = __importDefault(react_native_device_info_1);
    var absoluteFillObject = react_native_1.StyleSheet.absoluteFillObject;
    var isiPhoneModelWithNotch = function () {
        var model = react_native_device_info_1.default.getDeviceId();
        if (model.indexOf("iPhone") !== -1) {
            switch (model) {
                case "iPhone10,6":
                case "iPhone11,2":
                case "iPhone11,4":
                case "iPhone11,6":
                case "iPhone11,8":
                case "iPhone12,1":
                case "iPhone12,3":
                case "iPhone12,5":
                    return true;
                default:
                    return false;
            }
        }
        return false;
    };
    var isAndroidRTL = react_native_1.I18nManager.isRTL && react_native_1.Platform.OS === "android";
    var isIphoneWithNotch = react_native_device_info_1.default.hasNotch() || (react_native_1.Platform.OS === "ios" && isiPhoneModelWithNotch());
    var defaultButtonBetweenContainer = {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        paddingVertical: 12,
        alignSelf: "stretch"
    };
    var defaultButtonBelowContainer = {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        paddingVertical: 12
    };
    var defaultButtonCaption = {
        backgroundColor: "transparent",
        color: "black",
        fontSize: 18,
        alignSelf: "center"
    };
    exports.defaultWelcomeScreenStyle = {
        fullscreenContainer: __assign({}, absoluteFillObject),
        popupContainer: __assign(__assign({}, absoluteFillObject), { paddingHorizontal: 50, paddingVertical: 150, backgroundColor: "rgba(0, 0, 0, 0.5)" }),
        paginationContainer: {
            position: "absolute",
            bottom: isIphoneWithNotch ? 22 : 0,
            left: 0,
            right: 0,
            justifyContent: "space-between",
            alignItems: "center"
        },
        paginationText: {
            fontSize: 12,
            color: "black"
        },
        paginationAbove: {
            buttonsContainer: {
                flex: 1,
                flexDirection: isAndroidRTL ? "row-reverse" : "row",
                justifyContent: "center",
                marginTop: 16
            },
            buttonSkip: {
                container: __assign({}, defaultButtonBelowContainer),
                caption: __assign(__assign({}, defaultButtonCaption), { paddingHorizontal: 5 }),
                icon: {
                    color: "black"
                }
            },
            buttonDone: {
                container: __assign({}, defaultButtonBelowContainer),
                caption: __assign(__assign({}, defaultButtonCaption), { paddingHorizontal: 5 }),
                icon: {
                    color: "black"
                }
            },
            buttonPrevious: {
                container: __assign({}, defaultButtonBelowContainer),
                caption: __assign(__assign({}, defaultButtonCaption), { paddingHorizontal: 5 }),
                icon: {
                    color: "black"
                }
            },
            buttonNext: {
                container: __assign({}, defaultButtonBelowContainer),
                caption: __assign(__assign({}, defaultButtonCaption), { paddingHorizontal: 5 }),
                icon: {
                    color: "black"
                }
            }
        },
        paginationBetween: {
            buttonSkip: {
                container: __assign({}, defaultButtonBetweenContainer),
                caption: __assign(__assign({}, defaultButtonCaption), { paddingHorizontal: 5 }),
                icon: {
                    color: "black"
                }
            },
            buttonDone: {
                container: __assign({}, defaultButtonBetweenContainer),
                caption: __assign(__assign({}, defaultButtonCaption), { paddingHorizontal: 5 }),
                icon: {
                    color: "black"
                }
            },
            buttonPrevious: {
                container: __assign({}, defaultButtonBetweenContainer),
                caption: __assign(__assign({}, defaultButtonCaption), { paddingHorizontal: 5 }),
                icon: {
                    color: "black"
                }
            },
            buttonNext: {
                container: __assign({}, defaultButtonBetweenContainer),
                caption: __assign(__assign({}, defaultButtonCaption), { paddingHorizontal: 5 }),
                icon: {
                    color: "black"
                }
            }
        },
        dotStyle: {
            backgroundColor: "rgba(0, 0, 0, .2)"
        },
        activeDotStyle: {
            backgroundColor: "rgba(255, 255, 255, .9)"
        }
    };
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

/***/ "@react-native-community/async-storage":
/*!********************************************************!*\
  !*** external "@react-native-community/async-storage" ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@react-native-community/async-storage");

/***/ }),

/***/ "big.js":
/*!*************************!*\
  !*** external "big.js" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("big.js");

/***/ }),

/***/ "mendix/components/native/Icon":
/*!************************************************!*\
  !*** external "mendix/components/native/Icon" ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("mendix/components/native/Icon");

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

/***/ }),

/***/ "react-native-device-info":
/*!*******************************************!*\
  !*** external "react-native-device-info" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-native-device-info");

/***/ })

/******/ });
//# sourceMappingURL=IntroScreen.js.map