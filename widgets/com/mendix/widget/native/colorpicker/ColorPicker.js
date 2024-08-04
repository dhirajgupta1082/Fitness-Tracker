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
/******/ 	return __webpack_require__(__webpack_require__.s = "../../../packages-native/color-picker/src/ColorPicker.tsx");
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

/***/ "../../../node_modules/object-assign/index.js":
/*!*****************************************************************************************************!*\
  !*** /Users/diego.antonelli/Desktop/projects/widgets-resources/node_modules/object-assign/index.js ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/

/* eslint-disable no-unused-vars */

var getOwnPropertySymbols = Object.getOwnPropertySymbols;
var hasOwnProperty = Object.prototype.hasOwnProperty;
var propIsEnumerable = Object.prototype.propertyIsEnumerable;

function toObject(val) {
  if (val === null || val === undefined) {
    throw new TypeError('Object.assign cannot be called with null or undefined');
  }

  return Object(val);
}

function shouldUseNative() {
  try {
    if (!Object.assign) {
      return false;
    } // Detect buggy property enumeration order in older V8 versions.
    // https://bugs.chromium.org/p/v8/issues/detail?id=4118


    var test1 = new String('abc'); // eslint-disable-line no-new-wrappers

    test1[5] = 'de';

    if (Object.getOwnPropertyNames(test1)[0] === '5') {
      return false;
    } // https://bugs.chromium.org/p/v8/issues/detail?id=3056


    var test2 = {};

    for (var i = 0; i < 10; i++) {
      test2['_' + String.fromCharCode(i)] = i;
    }

    var order2 = Object.getOwnPropertyNames(test2).map(function (n) {
      return test2[n];
    });

    if (order2.join('') !== '0123456789') {
      return false;
    } // https://bugs.chromium.org/p/v8/issues/detail?id=3056


    var test3 = {};
    'abcdefghijklmnopqrst'.split('').forEach(function (letter) {
      test3[letter] = letter;
    });

    if (Object.keys(Object.assign({}, test3)).join('') !== 'abcdefghijklmnopqrst') {
      return false;
    }

    return true;
  } catch (err) {
    // We don't expect any of the above to throw, but better to be safe.
    return false;
  }
}

module.exports = shouldUseNative() ? Object.assign : function (target, source) {
  var from;
  var to = toObject(target);
  var symbols;

  for (var s = 1; s < arguments.length; s++) {
    from = Object(arguments[s]);

    for (var key in from) {
      if (hasOwnProperty.call(from, key)) {
        to[key] = from[key];
      }
    }

    if (getOwnPropertySymbols) {
      symbols = getOwnPropertySymbols(from);

      for (var i = 0; i < symbols.length; i++) {
        if (propIsEnumerable.call(from, symbols[i])) {
          to[symbols[i]] = from[symbols[i]];
        }
      }
    }
  }

  return to;
};

/***/ }),

/***/ "../../../node_modules/prop-types/checkPropTypes.js":
/*!***********************************************************************************************************!*\
  !*** /Users/diego.antonelli/Desktop/projects/widgets-resources/node_modules/prop-types/checkPropTypes.js ***!
  \***********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */


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

var printWarning = function printWarning() {};

if (true) {
  var ReactPropTypesSecret = __webpack_require__(/*! ./lib/ReactPropTypesSecret */ "../../../node_modules/prop-types/lib/ReactPropTypesSecret.js");

  var loggedTypeFailures = {};
  var has = Function.call.bind(Object.prototype.hasOwnProperty);

  printWarning = function printWarning(text) {
    var message = 'Warning: ' + text;

    if (typeof console !== 'undefined') {
      console.error(message);
    }

    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  };
}
/**
 * Assert that the values match with the type specs.
 * Error messages are memorized and will only be shown once.
 *
 * @param {object} typeSpecs Map of name to a ReactPropType
 * @param {object} values Runtime values that need to be type-checked
 * @param {string} location e.g. "prop", "context", "child context"
 * @param {string} componentName Name of the component for error messages.
 * @param {?Function} getStack Returns the component stack.
 * @private
 */


function checkPropTypes(typeSpecs, values, location, componentName, getStack) {
  if (true) {
    for (var typeSpecName in typeSpecs) {
      if (has(typeSpecs, typeSpecName)) {
        var error; // Prop type validation may throw. In case they do, we don't want to
        // fail the render phase where it didn't fail before. So we log it.
        // After these have been cleaned up, we'll let them throw.

        try {
          // This is intentionally an invariant that gets caught. It's the same
          // behavior as without this statement except with a better message.
          if (typeof typeSpecs[typeSpecName] !== 'function') {
            var err = Error((componentName || 'React class') + ': ' + location + ' type `' + typeSpecName + '` is invalid; ' + 'it must be a function, usually from the `prop-types` package, but received `' + _typeof(typeSpecs[typeSpecName]) + '`.');
            err.name = 'Invariant Violation';
            throw err;
          }

          error = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, ReactPropTypesSecret);
        } catch (ex) {
          error = ex;
        }

        if (error && !(error instanceof Error)) {
          printWarning((componentName || 'React class') + ': type specification of ' + location + ' `' + typeSpecName + '` is invalid; the type checker ' + 'function must return `null` or an `Error` but returned a ' + _typeof(error) + '. ' + 'You may have forgotten to pass an argument to the type checker ' + 'creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and ' + 'shape all require an argument).');
        }

        if (error instanceof Error && !(error.message in loggedTypeFailures)) {
          // Only monitor this failure once because there tends to be a lot of the
          // same error.
          loggedTypeFailures[error.message] = true;
          var stack = getStack ? getStack() : '';
          printWarning('Failed ' + location + ' type: ' + error.message + (stack != null ? stack : ''));
        }
      }
    }
  }
}
/**
 * Resets warning cache when testing.
 *
 * @private
 */


checkPropTypes.resetWarningCache = function () {
  if (true) {
    loggedTypeFailures = {};
  }
};

module.exports = checkPropTypes;

/***/ }),

/***/ "../../../node_modules/prop-types/factoryWithTypeCheckers.js":
/*!********************************************************************************************************************!*\
  !*** /Users/diego.antonelli/Desktop/projects/widgets-resources/node_modules/prop-types/factoryWithTypeCheckers.js ***!
  \********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */


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

var ReactIs = __webpack_require__(/*! react-is */ "../../../node_modules/react-is/index.js");

var assign = __webpack_require__(/*! object-assign */ "../../../node_modules/object-assign/index.js");

var ReactPropTypesSecret = __webpack_require__(/*! ./lib/ReactPropTypesSecret */ "../../../node_modules/prop-types/lib/ReactPropTypesSecret.js");

var checkPropTypes = __webpack_require__(/*! ./checkPropTypes */ "../../../node_modules/prop-types/checkPropTypes.js");

var has = Function.call.bind(Object.prototype.hasOwnProperty);

var printWarning = function printWarning() {};

if (true) {
  printWarning = function printWarning(text) {
    var message = 'Warning: ' + text;

    if (typeof console !== 'undefined') {
      console.error(message);
    }

    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  };
}

function emptyFunctionThatReturnsNull() {
  return null;
}

module.exports = function (isValidElement, throwOnDirectAccess) {
  /* global Symbol */
  var ITERATOR_SYMBOL = typeof Symbol === 'function' && Symbol.iterator;
  var FAUX_ITERATOR_SYMBOL = '@@iterator'; // Before Symbol spec.

  /**
   * Returns the iterator method function contained on the iterable object.
   *
   * Be sure to invoke the function with the iterable as context:
   *
   *     var iteratorFn = getIteratorFn(myIterable);
   *     if (iteratorFn) {
   *       var iterator = iteratorFn.call(myIterable);
   *       ...
   *     }
   *
   * @param {?object} maybeIterable
   * @return {?function}
   */

  function getIteratorFn(maybeIterable) {
    var iteratorFn = maybeIterable && (ITERATOR_SYMBOL && maybeIterable[ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL]);

    if (typeof iteratorFn === 'function') {
      return iteratorFn;
    }
  }
  /**
   * Collection of methods that allow declaration and validation of props that are
   * supplied to React components. Example usage:
   *
   *   var Props = require('ReactPropTypes');
   *   var MyArticle = React.createClass({
   *     propTypes: {
   *       // An optional string prop named "description".
   *       description: Props.string,
   *
   *       // A required enum prop named "category".
   *       category: Props.oneOf(['News','Photos']).isRequired,
   *
   *       // A prop named "dialog" that requires an instance of Dialog.
   *       dialog: Props.instanceOf(Dialog).isRequired
   *     },
   *     render: function() { ... }
   *   });
   *
   * A more formal specification of how these methods are used:
   *
   *   type := array|bool|func|object|number|string|oneOf([...])|instanceOf(...)
   *   decl := ReactPropTypes.{type}(.isRequired)?
   *
   * Each and every declaration produces a function with the same signature. This
   * allows the creation of custom validation functions. For example:
   *
   *  var MyLink = React.createClass({
   *    propTypes: {
   *      // An optional string or URI prop named "href".
   *      href: function(props, propName, componentName) {
   *        var propValue = props[propName];
   *        if (propValue != null && typeof propValue !== 'string' &&
   *            !(propValue instanceof URI)) {
   *          return new Error(
   *            'Expected a string or an URI for ' + propName + ' in ' +
   *            componentName
   *          );
   *        }
   *      }
   *    },
   *    render: function() {...}
   *  });
   *
   * @internal
   */


  var ANONYMOUS = '<<anonymous>>'; // Important!
  // Keep this list in sync with production version in `./factoryWithThrowingShims.js`.

  var ReactPropTypes = {
    array: createPrimitiveTypeChecker('array'),
    bool: createPrimitiveTypeChecker('boolean'),
    func: createPrimitiveTypeChecker('function'),
    number: createPrimitiveTypeChecker('number'),
    object: createPrimitiveTypeChecker('object'),
    string: createPrimitiveTypeChecker('string'),
    symbol: createPrimitiveTypeChecker('symbol'),
    any: createAnyTypeChecker(),
    arrayOf: createArrayOfTypeChecker,
    element: createElementTypeChecker(),
    elementType: createElementTypeTypeChecker(),
    instanceOf: createInstanceTypeChecker,
    node: createNodeChecker(),
    objectOf: createObjectOfTypeChecker,
    oneOf: createEnumTypeChecker,
    oneOfType: createUnionTypeChecker,
    shape: createShapeTypeChecker,
    exact: createStrictShapeTypeChecker
  };
  /**
   * inlined Object.is polyfill to avoid requiring consumers ship their own
   * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
   */

  /*eslint-disable no-self-compare*/

  function is(x, y) {
    // SameValue algorithm
    if (x === y) {
      // Steps 1-5, 7-10
      // Steps 6.b-6.e: +0 != -0
      return x !== 0 || 1 / x === 1 / y;
    } else {
      // Step 6.a: NaN == NaN
      return x !== x && y !== y;
    }
  }
  /*eslint-enable no-self-compare*/

  /**
   * We use an Error-like object for backward compatibility as people may call
   * PropTypes directly and inspect their output. However, we don't use real
   * Errors anymore. We don't inspect their stack anyway, and creating them
   * is prohibitively expensive if they are created too often, such as what
   * happens in oneOfType() for any type before the one that matched.
   */


  function PropTypeError(message) {
    this.message = message;
    this.stack = '';
  } // Make `instanceof Error` still work for returned errors.


  PropTypeError.prototype = Error.prototype;

  function createChainableTypeChecker(validate) {
    if (true) {
      var manualPropTypeCallCache = {};
      var manualPropTypeWarningCount = 0;
    }

    function checkType(isRequired, props, propName, componentName, location, propFullName, secret) {
      componentName = componentName || ANONYMOUS;
      propFullName = propFullName || propName;

      if (secret !== ReactPropTypesSecret) {
        if (throwOnDirectAccess) {
          // New behavior only for users of `prop-types` package
          var err = new Error('Calling PropTypes validators directly is not supported by the `prop-types` package. ' + 'Use `PropTypes.checkPropTypes()` to call them. ' + 'Read more at http://fb.me/use-check-prop-types');
          err.name = 'Invariant Violation';
          throw err;
        } else if ( true && typeof console !== 'undefined') {
          // Old behavior for people using React.PropTypes
          var cacheKey = componentName + ':' + propName;

          if (!manualPropTypeCallCache[cacheKey] && // Avoid spamming the console because they are often not actionable except for lib authors
          manualPropTypeWarningCount < 3) {
            printWarning('You are manually calling a React.PropTypes validation ' + 'function for the `' + propFullName + '` prop on `' + componentName + '`. This is deprecated ' + 'and will throw in the standalone `prop-types` package. ' + 'You may be seeing this warning due to a third-party PropTypes ' + 'library. See https://fb.me/react-warning-dont-call-proptypes ' + 'for details.');
            manualPropTypeCallCache[cacheKey] = true;
            manualPropTypeWarningCount++;
          }
        }
      }

      if (props[propName] == null) {
        if (isRequired) {
          if (props[propName] === null) {
            return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required ' + ('in `' + componentName + '`, but its value is `null`.'));
          }

          return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required in ' + ('`' + componentName + '`, but its value is `undefined`.'));
        }

        return null;
      } else {
        return validate(props, propName, componentName, location, propFullName);
      }
    }

    var chainedCheckType = checkType.bind(null, false);
    chainedCheckType.isRequired = checkType.bind(null, true);
    return chainedCheckType;
  }

  function createPrimitiveTypeChecker(expectedType) {
    function validate(props, propName, componentName, location, propFullName, secret) {
      var propValue = props[propName];
      var propType = getPropType(propValue);

      if (propType !== expectedType) {
        // `propValue` being instance of, say, date/regexp, pass the 'object'
        // check, but we can offer a more precise error message here rather than
        // 'of type `object`'.
        var preciseType = getPreciseType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + preciseType + '` supplied to `' + componentName + '`, expected ') + ('`' + expectedType + '`.'));
      }

      return null;
    }

    return createChainableTypeChecker(validate);
  }

  function createAnyTypeChecker() {
    return createChainableTypeChecker(emptyFunctionThatReturnsNull);
  }

  function createArrayOfTypeChecker(typeChecker) {
    function validate(props, propName, componentName, location, propFullName) {
      if (typeof typeChecker !== 'function') {
        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside arrayOf.');
      }

      var propValue = props[propName];

      if (!Array.isArray(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an array.'));
      }

      for (var i = 0; i < propValue.length; i++) {
        var error = typeChecker(propValue, i, componentName, location, propFullName + '[' + i + ']', ReactPropTypesSecret);

        if (error instanceof Error) {
          return error;
        }
      }

      return null;
    }

    return createChainableTypeChecker(validate);
  }

  function createElementTypeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];

      if (!isValidElement(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement.'));
      }

      return null;
    }

    return createChainableTypeChecker(validate);
  }

  function createElementTypeTypeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];

      if (!ReactIs.isValidElementType(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement type.'));
      }

      return null;
    }

    return createChainableTypeChecker(validate);
  }

  function createInstanceTypeChecker(expectedClass) {
    function validate(props, propName, componentName, location, propFullName) {
      if (!(props[propName] instanceof expectedClass)) {
        var expectedClassName = expectedClass.name || ANONYMOUS;
        var actualClassName = getClassName(props[propName]);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + actualClassName + '` supplied to `' + componentName + '`, expected ') + ('instance of `' + expectedClassName + '`.'));
      }

      return null;
    }

    return createChainableTypeChecker(validate);
  }

  function createEnumTypeChecker(expectedValues) {
    if (!Array.isArray(expectedValues)) {
      if (true) {
        if (arguments.length > 1) {
          printWarning('Invalid arguments supplied to oneOf, expected an array, got ' + arguments.length + ' arguments. ' + 'A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z]).');
        } else {
          printWarning('Invalid argument supplied to oneOf, expected an array.');
        }
      }

      return emptyFunctionThatReturnsNull;
    }

    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];

      for (var i = 0; i < expectedValues.length; i++) {
        if (is(propValue, expectedValues[i])) {
          return null;
        }
      }

      var valuesString = JSON.stringify(expectedValues, function replacer(key, value) {
        var type = getPreciseType(value);

        if (type === 'symbol') {
          return String(value);
        }

        return value;
      });
      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of value `' + String(propValue) + '` ' + ('supplied to `' + componentName + '`, expected one of ' + valuesString + '.'));
    }

    return createChainableTypeChecker(validate);
  }

  function createObjectOfTypeChecker(typeChecker) {
    function validate(props, propName, componentName, location, propFullName) {
      if (typeof typeChecker !== 'function') {
        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside objectOf.');
      }

      var propValue = props[propName];
      var propType = getPropType(propValue);

      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an object.'));
      }

      for (var key in propValue) {
        if (has(propValue, key)) {
          var error = typeChecker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);

          if (error instanceof Error) {
            return error;
          }
        }
      }

      return null;
    }

    return createChainableTypeChecker(validate);
  }

  function createUnionTypeChecker(arrayOfTypeCheckers) {
    if (!Array.isArray(arrayOfTypeCheckers)) {
       true ? printWarning('Invalid argument supplied to oneOfType, expected an instance of array.') : undefined;
      return emptyFunctionThatReturnsNull;
    }

    for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
      var checker = arrayOfTypeCheckers[i];

      if (typeof checker !== 'function') {
        printWarning('Invalid argument supplied to oneOfType. Expected an array of check functions, but ' + 'received ' + getPostfixForTypeWarning(checker) + ' at index ' + i + '.');
        return emptyFunctionThatReturnsNull;
      }
    }

    function validate(props, propName, componentName, location, propFullName) {
      for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
        var checker = arrayOfTypeCheckers[i];

        if (checker(props, propName, componentName, location, propFullName, ReactPropTypesSecret) == null) {
          return null;
        }
      }

      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`.'));
    }

    return createChainableTypeChecker(validate);
  }

  function createNodeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      if (!isNode(props[propName])) {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`, expected a ReactNode.'));
      }

      return null;
    }

    return createChainableTypeChecker(validate);
  }

  function createShapeTypeChecker(shapeTypes) {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      var propType = getPropType(propValue);

      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
      }

      for (var key in shapeTypes) {
        var checker = shapeTypes[key];

        if (!checker) {
          continue;
        }

        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);

        if (error) {
          return error;
        }
      }

      return null;
    }

    return createChainableTypeChecker(validate);
  }

  function createStrictShapeTypeChecker(shapeTypes) {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      var propType = getPropType(propValue);

      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
      } // We need to check all keys in case some are required but missing from
      // props.


      var allKeys = assign({}, props[propName], shapeTypes);

      for (var key in allKeys) {
        var checker = shapeTypes[key];

        if (!checker) {
          return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` key `' + key + '` supplied to `' + componentName + '`.' + '\nBad object: ' + JSON.stringify(props[propName], null, '  ') + '\nValid keys: ' + JSON.stringify(Object.keys(shapeTypes), null, '  '));
        }

        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);

        if (error) {
          return error;
        }
      }

      return null;
    }

    return createChainableTypeChecker(validate);
  }

  function isNode(propValue) {
    switch (_typeof(propValue)) {
      case 'number':
      case 'string':
      case 'undefined':
        return true;

      case 'boolean':
        return !propValue;

      case 'object':
        if (Array.isArray(propValue)) {
          return propValue.every(isNode);
        }

        if (propValue === null || isValidElement(propValue)) {
          return true;
        }

        var iteratorFn = getIteratorFn(propValue);

        if (iteratorFn) {
          var iterator = iteratorFn.call(propValue);
          var step;

          if (iteratorFn !== propValue.entries) {
            while (!(step = iterator.next()).done) {
              if (!isNode(step.value)) {
                return false;
              }
            }
          } else {
            // Iterator will provide entry [k,v] tuples rather than values.
            while (!(step = iterator.next()).done) {
              var entry = step.value;

              if (entry) {
                if (!isNode(entry[1])) {
                  return false;
                }
              }
            }
          }
        } else {
          return false;
        }

        return true;

      default:
        return false;
    }
  }

  function isSymbol(propType, propValue) {
    // Native Symbol.
    if (propType === 'symbol') {
      return true;
    } // falsy value can't be a Symbol


    if (!propValue) {
      return false;
    } // 19.4.3.5 Symbol.prototype[@@toStringTag] === 'Symbol'


    if (propValue['@@toStringTag'] === 'Symbol') {
      return true;
    } // Fallback for non-spec compliant Symbols which are polyfilled.


    if (typeof Symbol === 'function' && propValue instanceof Symbol) {
      return true;
    }

    return false;
  } // Equivalent of `typeof` but with special handling for array and regexp.


  function getPropType(propValue) {
    var propType = _typeof(propValue);

    if (Array.isArray(propValue)) {
      return 'array';
    }

    if (propValue instanceof RegExp) {
      // Old webkits (at least until Android 4.0) return 'function' rather than
      // 'object' for typeof a RegExp. We'll normalize this here so that /bla/
      // passes PropTypes.object.
      return 'object';
    }

    if (isSymbol(propType, propValue)) {
      return 'symbol';
    }

    return propType;
  } // This handles more types than `getPropType`. Only used for error messages.
  // See `createPrimitiveTypeChecker`.


  function getPreciseType(propValue) {
    if (typeof propValue === 'undefined' || propValue === null) {
      return '' + propValue;
    }

    var propType = getPropType(propValue);

    if (propType === 'object') {
      if (propValue instanceof Date) {
        return 'date';
      } else if (propValue instanceof RegExp) {
        return 'regexp';
      }
    }

    return propType;
  } // Returns a string that is postfixed to a warning about an invalid type.
  // For example, "undefined" or "of type array"


  function getPostfixForTypeWarning(value) {
    var type = getPreciseType(value);

    switch (type) {
      case 'array':
      case 'object':
        return 'an ' + type;

      case 'boolean':
      case 'date':
      case 'regexp':
        return 'a ' + type;

      default:
        return type;
    }
  } // Returns class name of the object, if any.


  function getClassName(propValue) {
    if (!propValue.constructor || !propValue.constructor.name) {
      return ANONYMOUS;
    }

    return propValue.constructor.name;
  }

  ReactPropTypes.checkPropTypes = checkPropTypes;
  ReactPropTypes.resetWarningCache = checkPropTypes.resetWarningCache;
  ReactPropTypes.PropTypes = ReactPropTypes;
  return ReactPropTypes;
};

/***/ }),

/***/ "../../../node_modules/prop-types/index.js":
/*!**************************************************************************************************!*\
  !*** /Users/diego.antonelli/Desktop/projects/widgets-resources/node_modules/prop-types/index.js ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
if (true) {
  var ReactIs = __webpack_require__(/*! react-is */ "../../../node_modules/react-is/index.js"); // By explicitly using `prop-types` you are opting into new development behavior.
  // http://fb.me/prop-types-in-prod


  var throwOnDirectAccess = true;
  module.exports = __webpack_require__(/*! ./factoryWithTypeCheckers */ "../../../node_modules/prop-types/factoryWithTypeCheckers.js")(ReactIs.isElement, throwOnDirectAccess);
} else {}

/***/ }),

/***/ "../../../node_modules/prop-types/lib/ReactPropTypesSecret.js":
/*!*********************************************************************************************************************!*\
  !*** /Users/diego.antonelli/Desktop/projects/widgets-resources/node_modules/prop-types/lib/ReactPropTypesSecret.js ***!
  \*********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */


var ReactPropTypesSecret = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';
module.exports = ReactPropTypesSecret;

/***/ }),

/***/ "../../../node_modules/react-is/cjs/react-is.development.js":
/*!*******************************************************************************************************************!*\
  !*** /Users/diego.antonelli/Desktop/projects/widgets-resources/node_modules/react-is/cjs/react-is.development.js ***!
  \*******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */


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

if (true) {
  (function () {
    'use strict'; // The Symbol used to tag the ReactElement-like types. If there is no native Symbol
    // nor polyfill, then a plain number is used for performance.

    var hasSymbol = typeof Symbol === 'function' && Symbol["for"];
    var REACT_ELEMENT_TYPE = hasSymbol ? Symbol["for"]('react.element') : 0xeac7;
    var REACT_PORTAL_TYPE = hasSymbol ? Symbol["for"]('react.portal') : 0xeaca;
    var REACT_FRAGMENT_TYPE = hasSymbol ? Symbol["for"]('react.fragment') : 0xeacb;
    var REACT_STRICT_MODE_TYPE = hasSymbol ? Symbol["for"]('react.strict_mode') : 0xeacc;
    var REACT_PROFILER_TYPE = hasSymbol ? Symbol["for"]('react.profiler') : 0xead2;
    var REACT_PROVIDER_TYPE = hasSymbol ? Symbol["for"]('react.provider') : 0xeacd;
    var REACT_CONTEXT_TYPE = hasSymbol ? Symbol["for"]('react.context') : 0xeace; // TODO: We don't use AsyncMode or ConcurrentMode anymore. They were temporary
    // (unstable) APIs that have been removed. Can we remove the symbols?

    var REACT_ASYNC_MODE_TYPE = hasSymbol ? Symbol["for"]('react.async_mode') : 0xeacf;
    var REACT_CONCURRENT_MODE_TYPE = hasSymbol ? Symbol["for"]('react.concurrent_mode') : 0xeacf;
    var REACT_FORWARD_REF_TYPE = hasSymbol ? Symbol["for"]('react.forward_ref') : 0xead0;
    var REACT_SUSPENSE_TYPE = hasSymbol ? Symbol["for"]('react.suspense') : 0xead1;
    var REACT_SUSPENSE_LIST_TYPE = hasSymbol ? Symbol["for"]('react.suspense_list') : 0xead8;
    var REACT_MEMO_TYPE = hasSymbol ? Symbol["for"]('react.memo') : 0xead3;
    var REACT_LAZY_TYPE = hasSymbol ? Symbol["for"]('react.lazy') : 0xead4;
    var REACT_BLOCK_TYPE = hasSymbol ? Symbol["for"]('react.block') : 0xead9;
    var REACT_FUNDAMENTAL_TYPE = hasSymbol ? Symbol["for"]('react.fundamental') : 0xead5;
    var REACT_RESPONDER_TYPE = hasSymbol ? Symbol["for"]('react.responder') : 0xead6;
    var REACT_SCOPE_TYPE = hasSymbol ? Symbol["for"]('react.scope') : 0xead7;

    function isValidElementType(type) {
      return typeof type === 'string' || typeof type === 'function' || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
      type === REACT_FRAGMENT_TYPE || type === REACT_CONCURRENT_MODE_TYPE || type === REACT_PROFILER_TYPE || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || _typeof(type) === 'object' && type !== null && (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || type.$$typeof === REACT_FUNDAMENTAL_TYPE || type.$$typeof === REACT_RESPONDER_TYPE || type.$$typeof === REACT_SCOPE_TYPE || type.$$typeof === REACT_BLOCK_TYPE);
    }

    function typeOf(object) {
      if (_typeof(object) === 'object' && object !== null) {
        var $$typeof = object.$$typeof;

        switch ($$typeof) {
          case REACT_ELEMENT_TYPE:
            var type = object.type;

            switch (type) {
              case REACT_ASYNC_MODE_TYPE:
              case REACT_CONCURRENT_MODE_TYPE:
              case REACT_FRAGMENT_TYPE:
              case REACT_PROFILER_TYPE:
              case REACT_STRICT_MODE_TYPE:
              case REACT_SUSPENSE_TYPE:
                return type;

              default:
                var $$typeofType = type && type.$$typeof;

                switch ($$typeofType) {
                  case REACT_CONTEXT_TYPE:
                  case REACT_FORWARD_REF_TYPE:
                  case REACT_LAZY_TYPE:
                  case REACT_MEMO_TYPE:
                  case REACT_PROVIDER_TYPE:
                    return $$typeofType;

                  default:
                    return $$typeof;
                }

            }

          case REACT_PORTAL_TYPE:
            return $$typeof;
        }
      }

      return undefined;
    } // AsyncMode is deprecated along with isAsyncMode


    var AsyncMode = REACT_ASYNC_MODE_TYPE;
    var ConcurrentMode = REACT_CONCURRENT_MODE_TYPE;
    var ContextConsumer = REACT_CONTEXT_TYPE;
    var ContextProvider = REACT_PROVIDER_TYPE;
    var Element = REACT_ELEMENT_TYPE;
    var ForwardRef = REACT_FORWARD_REF_TYPE;
    var Fragment = REACT_FRAGMENT_TYPE;
    var Lazy = REACT_LAZY_TYPE;
    var Memo = REACT_MEMO_TYPE;
    var Portal = REACT_PORTAL_TYPE;
    var Profiler = REACT_PROFILER_TYPE;
    var StrictMode = REACT_STRICT_MODE_TYPE;
    var Suspense = REACT_SUSPENSE_TYPE;
    var hasWarnedAboutDeprecatedIsAsyncMode = false; // AsyncMode should be deprecated

    function isAsyncMode(object) {
      {
        if (!hasWarnedAboutDeprecatedIsAsyncMode) {
          hasWarnedAboutDeprecatedIsAsyncMode = true; // Using console['warn'] to evade Babel and ESLint

          console['warn']('The ReactIs.isAsyncMode() alias has been deprecated, ' + 'and will be removed in React 17+. Update your code to use ' + 'ReactIs.isConcurrentMode() instead. It has the exact same API.');
        }
      }
      return isConcurrentMode(object) || typeOf(object) === REACT_ASYNC_MODE_TYPE;
    }

    function isConcurrentMode(object) {
      return typeOf(object) === REACT_CONCURRENT_MODE_TYPE;
    }

    function isContextConsumer(object) {
      return typeOf(object) === REACT_CONTEXT_TYPE;
    }

    function isContextProvider(object) {
      return typeOf(object) === REACT_PROVIDER_TYPE;
    }

    function isElement(object) {
      return _typeof(object) === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
    }

    function isForwardRef(object) {
      return typeOf(object) === REACT_FORWARD_REF_TYPE;
    }

    function isFragment(object) {
      return typeOf(object) === REACT_FRAGMENT_TYPE;
    }

    function isLazy(object) {
      return typeOf(object) === REACT_LAZY_TYPE;
    }

    function isMemo(object) {
      return typeOf(object) === REACT_MEMO_TYPE;
    }

    function isPortal(object) {
      return typeOf(object) === REACT_PORTAL_TYPE;
    }

    function isProfiler(object) {
      return typeOf(object) === REACT_PROFILER_TYPE;
    }

    function isStrictMode(object) {
      return typeOf(object) === REACT_STRICT_MODE_TYPE;
    }

    function isSuspense(object) {
      return typeOf(object) === REACT_SUSPENSE_TYPE;
    }

    exports.AsyncMode = AsyncMode;
    exports.ConcurrentMode = ConcurrentMode;
    exports.ContextConsumer = ContextConsumer;
    exports.ContextProvider = ContextProvider;
    exports.Element = Element;
    exports.ForwardRef = ForwardRef;
    exports.Fragment = Fragment;
    exports.Lazy = Lazy;
    exports.Memo = Memo;
    exports.Portal = Portal;
    exports.Profiler = Profiler;
    exports.StrictMode = StrictMode;
    exports.Suspense = Suspense;
    exports.isAsyncMode = isAsyncMode;
    exports.isConcurrentMode = isConcurrentMode;
    exports.isContextConsumer = isContextConsumer;
    exports.isContextProvider = isContextProvider;
    exports.isElement = isElement;
    exports.isForwardRef = isForwardRef;
    exports.isFragment = isFragment;
    exports.isLazy = isLazy;
    exports.isMemo = isMemo;
    exports.isPortal = isPortal;
    exports.isProfiler = isProfiler;
    exports.isStrictMode = isStrictMode;
    exports.isSuspense = isSuspense;
    exports.isValidElementType = isValidElementType;
    exports.typeOf = typeOf;
  })();
}

/***/ }),

/***/ "../../../node_modules/react-is/index.js":
/*!************************************************************************************************!*\
  !*** /Users/diego.antonelli/Desktop/projects/widgets-resources/node_modules/react-is/index.js ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


if (false) {} else {
  module.exports = __webpack_require__(/*! ./cjs/react-is.development.js */ "../../../node_modules/react-is/cjs/react-is.development.js");
}

/***/ }),

/***/ "../../../node_modules/react-native-color/src/gradients/Gradient.js":
/*!***************************************************************************************************************************!*\
  !*** /Users/diego.antonelli/Desktop/projects/widgets-resources/node_modules/react-native-color/src/gradients/Gradient.js ***!
  \***************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_native__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-native */ "react-native");
/* harmony import */ var react_native__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_native__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "../../../node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);




var Gradient = function Gradient(_ref) {
  var style = _ref.style,
      gradientSteps = _ref.gradientSteps,
      maximumValue = _ref.maximumValue,
      getStepColor = _ref.getStepColor;
  var rows = [];

  for (var i = 0; i <= gradientSteps; i++) {
    rows.push( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_native__WEBPACK_IMPORTED_MODULE_1__["View"], {
      key: i,
      style: {
        flex: 1,
        marginLeft: react_native__WEBPACK_IMPORTED_MODULE_1__["Platform"].OS === 'ios' ? -react_native__WEBPACK_IMPORTED_MODULE_1__["StyleSheet"].hairlineWidth : 0,
        backgroundColor: getStepColor(i * maximumValue / gradientSteps)
      }
    }));
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_native__WEBPACK_IMPORTED_MODULE_1__["View"], {
    style: [styles.container, style]
  }, rows);
};

/* harmony default export */ __webpack_exports__["default"] = (Gradient);
var styles = react_native__WEBPACK_IMPORTED_MODULE_1__["StyleSheet"].create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'stretch'
  }
});
Gradient.propTypes = {
  gradientSteps: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.number.isRequired,
  maximumValue: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.number.isRequired,
  getStepColor: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func.isRequired
};

/***/ }),

/***/ "../../../node_modules/react-native-color/src/gradients/HueGradient.js":
/*!******************************************************************************************************************************!*\
  !*** /Users/diego.antonelli/Desktop/projects/widgets-resources/node_modules/react-native-color/src/gradients/HueGradient.js ***!
  \******************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_native__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-native */ "react-native");
/* harmony import */ var react_native__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_native__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "../../../node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var tinycolor2__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tinycolor2 */ "../../../node_modules/tinycolor2/tinycolor.js");
/* harmony import */ var tinycolor2__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(tinycolor2__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _Gradient__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Gradient */ "../../../node_modules/react-native-color/src/gradients/Gradient.js");
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







var HueGradient = /*#__PURE__*/function (_PureComponent) {
  _inherits(HueGradient, _PureComponent);

  var _super = _createSuper(HueGradient);

  function HueGradient() {
    var _this;

    _classCallCheck(this, HueGradient);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    _this.getStepColor = function (i) {
      return tinycolor2__WEBPACK_IMPORTED_MODULE_3___default()({
        s: 1,
        l: 0.5,
        h: i
      }).toHslString();
    };

    return _this;
  }

  _createClass(HueGradient, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          style = _this$props.style,
          gradientSteps = _this$props.gradientSteps;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Gradient__WEBPACK_IMPORTED_MODULE_4__["default"], {
        style: style,
        gradientSteps: gradientSteps,
        getStepColor: this.getStepColor,
        maximumValue: 359
      });
    }
  }]);

  return HueGradient;
}(react__WEBPACK_IMPORTED_MODULE_0__["PureComponent"]);

/* harmony default export */ __webpack_exports__["default"] = (HueGradient);
HueGradient.propTypes = {
  gradientSteps: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.number.isRequired
};

/***/ }),

/***/ "../../../node_modules/react-native-color/src/gradients/LightnessGradient.js":
/*!************************************************************************************************************************************!*\
  !*** /Users/diego.antonelli/Desktop/projects/widgets-resources/node_modules/react-native-color/src/gradients/LightnessGradient.js ***!
  \************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_native__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-native */ "react-native");
/* harmony import */ var react_native__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_native__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "../../../node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var tinycolor2__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tinycolor2 */ "../../../node_modules/tinycolor2/tinycolor.js");
/* harmony import */ var tinycolor2__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(tinycolor2__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _Gradient__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Gradient */ "../../../node_modules/react-native-color/src/gradients/Gradient.js");
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







var LightnessGradient = /*#__PURE__*/function (_Component) {
  _inherits(LightnessGradient, _Component);

  var _super = _createSuper(LightnessGradient);

  function LightnessGradient() {
    var _this;

    _classCallCheck(this, LightnessGradient);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    _this.getStepColor = function (i) {
      return tinycolor2__WEBPACK_IMPORTED_MODULE_3___default()(_objectSpread(_objectSpread({}, _this.props.color), {}, {
        l: i
      })).toHslString();
    };

    return _this;
  }

  _createClass(LightnessGradient, [{
    key: "shouldComponentUpdate",
    value: function shouldComponentUpdate(nextProps, nextState) {
      if (this.props.color.h !== nextProps.color.h) {
        return true;
      }

      if (this.props.color.s !== nextProps.color.s) {
        return true;
      }

      return false;
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          style = _this$props.style,
          color = _this$props.color,
          gradientSteps = _this$props.gradientSteps;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Gradient__WEBPACK_IMPORTED_MODULE_4__["default"], {
        style: style,
        gradientSteps: gradientSteps,
        getStepColor: this.getStepColor,
        maximumValue: 1
      });
    }
  }]);

  return LightnessGradient;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (LightnessGradient);
LightnessGradient.propTypes = {
  color: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.shape({
    h: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.number.isRequired,
    s: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.number.isRequired,
    l: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.number.isRequired
  }).isRequired,
  gradientSteps: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.number.isRequired
};

/***/ }),

/***/ "../../../node_modules/react-native-color/src/gradients/SaturationGradient.js":
/*!*************************************************************************************************************************************!*\
  !*** /Users/diego.antonelli/Desktop/projects/widgets-resources/node_modules/react-native-color/src/gradients/SaturationGradient.js ***!
  \*************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_native__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-native */ "react-native");
/* harmony import */ var react_native__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_native__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "../../../node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var tinycolor2__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tinycolor2 */ "../../../node_modules/tinycolor2/tinycolor.js");
/* harmony import */ var tinycolor2__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(tinycolor2__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _Gradient__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Gradient */ "../../../node_modules/react-native-color/src/gradients/Gradient.js");
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







var SaturationGradient = /*#__PURE__*/function (_Component) {
  _inherits(SaturationGradient, _Component);

  var _super = _createSuper(SaturationGradient);

  function SaturationGradient() {
    var _this;

    _classCallCheck(this, SaturationGradient);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    _this.getStepColor = function (i) {
      return tinycolor2__WEBPACK_IMPORTED_MODULE_3___default()(_objectSpread(_objectSpread({}, _this.props.color), {}, {
        s: i
      })).toHslString();
    };

    return _this;
  }

  _createClass(SaturationGradient, [{
    key: "shouldComponentUpdate",
    value: function shouldComponentUpdate(nextProps, nextState) {
      if (this.props.color.h !== nextProps.color.h) {
        return true;
      }

      if (this.props.color.l !== nextProps.color.l) {
        return true;
      }

      return false;
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          style = _this$props.style,
          color = _this$props.color,
          gradientSteps = _this$props.gradientSteps;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Gradient__WEBPACK_IMPORTED_MODULE_4__["default"], {
        style: style,
        gradientSteps: gradientSteps,
        getStepColor: this.getStepColor,
        maximumValue: 1
      });
    }
  }]);

  return SaturationGradient;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (SaturationGradient);
SaturationGradient.propTypes = {
  color: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.shape({
    h: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.number.isRequired,
    s: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.number.isRequired,
    l: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.number.isRequired
  }).isRequired,
  gradientSteps: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.number.isRequired
};

/***/ }),

/***/ "../../../node_modules/react-native-color/src/index.js":
/*!**************************************************************************************************************!*\
  !*** /Users/diego.antonelli/Desktop/projects/widgets-resources/node_modules/react-native-color/src/index.js ***!
  \**************************************************************************************************************/
/*! exports provided: Gradient, HueGradient, SaturationGradient, LightnessGradient, SlidersColorPicker, GradientSlider, HueSlider, SaturationSlider, LightnessSlider */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _gradients_Gradient__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./gradients/Gradient */ "../../../node_modules/react-native-color/src/gradients/Gradient.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Gradient", function() { return _gradients_Gradient__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _gradients_HueGradient__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./gradients/HueGradient */ "../../../node_modules/react-native-color/src/gradients/HueGradient.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "HueGradient", function() { return _gradients_HueGradient__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony import */ var _gradients_SaturationGradient__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./gradients/SaturationGradient */ "../../../node_modules/react-native-color/src/gradients/SaturationGradient.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SaturationGradient", function() { return _gradients_SaturationGradient__WEBPACK_IMPORTED_MODULE_2__["default"]; });

/* harmony import */ var _gradients_LightnessGradient__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./gradients/LightnessGradient */ "../../../node_modules/react-native-color/src/gradients/LightnessGradient.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LightnessGradient", function() { return _gradients_LightnessGradient__WEBPACK_IMPORTED_MODULE_3__["default"]; });

/* harmony import */ var _pickers_SlidersColorPicker__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pickers/SlidersColorPicker */ "../../../node_modules/react-native-color/src/pickers/SlidersColorPicker.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SlidersColorPicker", function() { return _pickers_SlidersColorPicker__WEBPACK_IMPORTED_MODULE_4__["default"]; });

/* harmony import */ var _sliders_GradientSlider__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./sliders/GradientSlider */ "../../../node_modules/react-native-color/src/sliders/GradientSlider.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GradientSlider", function() { return _sliders_GradientSlider__WEBPACK_IMPORTED_MODULE_5__["default"]; });

/* harmony import */ var _sliders_HueSlider__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./sliders/HueSlider */ "../../../node_modules/react-native-color/src/sliders/HueSlider.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "HueSlider", function() { return _sliders_HueSlider__WEBPACK_IMPORTED_MODULE_6__["default"]; });

/* harmony import */ var _sliders_SaturationSlider__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./sliders/SaturationSlider */ "../../../node_modules/react-native-color/src/sliders/SaturationSlider.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SaturationSlider", function() { return _sliders_SaturationSlider__WEBPACK_IMPORTED_MODULE_7__["default"]; });

/* harmony import */ var _sliders_LightnessSlider__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./sliders/LightnessSlider */ "../../../node_modules/react-native-color/src/sliders/LightnessSlider.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LightnessSlider", function() { return _sliders_LightnessSlider__WEBPACK_IMPORTED_MODULE_8__["default"]; });











/***/ }),

/***/ "../../../node_modules/react-native-color/src/pickers/SlidersColorPicker.js":
/*!***********************************************************************************************************************************!*\
  !*** /Users/diego.antonelli/Desktop/projects/widgets-resources/node_modules/react-native-color/src/pickers/SlidersColorPicker.js ***!
  \***********************************************************************************************************************************/
/*! exports provided: SlidersColorPicker, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SlidersColorPicker", function() { return SlidersColorPicker; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_native__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-native */ "react-native");
/* harmony import */ var react_native__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_native__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "../../../node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var tinycolor2__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tinycolor2 */ "../../../node_modules/tinycolor2/tinycolor.js");
/* harmony import */ var tinycolor2__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(tinycolor2__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _sliders_HueSlider__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../sliders/HueSlider */ "../../../node_modules/react-native-color/src/sliders/HueSlider.js");
/* harmony import */ var _sliders_SaturationSlider__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../sliders/SaturationSlider */ "../../../node_modules/react-native-color/src/sliders/SaturationSlider.js");
/* harmony import */ var _sliders_LightnessSlider__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../sliders/LightnessSlider */ "../../../node_modules/react-native-color/src/sliders/LightnessSlider.js");
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








var modes = {
  hex: {
    getString: function getString(color) {
      return tinycolor2__WEBPACK_IMPORTED_MODULE_3___default()(color).toHexString();
    },
    label: 'HEX'
  },
  hsl: {
    getString: function getString(color) {
      return tinycolor2__WEBPACK_IMPORTED_MODULE_3___default()(color).toHslString();
    },
    label: 'HSL'
  },
  hsv: {
    getString: function getString(color) {
      return tinycolor2__WEBPACK_IMPORTED_MODULE_3___default()(color).toHsvString();
    },
    label: 'HSV'
  },
  rgb: {
    getString: function getString(color) {
      return tinycolor2__WEBPACK_IMPORTED_MODULE_3___default()(color).toRgbString();
    },
    label: 'RGB'
  }
};
var SlidersColorPicker = /*#__PURE__*/function (_Component) {
  _inherits(SlidersColorPicker, _Component);

  var _super = _createSuper(SlidersColorPicker);

  function SlidersColorPicker(props) {
    var _this;

    _classCallCheck(this, SlidersColorPicker);

    _this = _super.call(this, props);

    _this.updateHue = function (h) {
      return _this.setState({
        color: _objectSpread(_objectSpread({}, _this.state.color), {}, {
          h: h
        })
      });
    };

    _this.updateSaturation = function (s) {
      return _this.setState({
        color: _objectSpread(_objectSpread({}, _this.state.color), {}, {
          s: s
        })
      });
    };

    _this.updateLightness = function (l) {
      return _this.setState({
        color: _objectSpread(_objectSpread({}, _this.state.color), {}, {
          l: l
        })
      });
    };

    var color = tinycolor2__WEBPACK_IMPORTED_MODULE_3___default()(_this.props.color).toHsl();
    var mode = tinycolor2__WEBPACK_IMPORTED_MODULE_3___default()(_this.props.mode).toHsl();
    _this.state = {
      color: color,
      mode: 'hex'
    };
    return _this;
  }

  _createClass(SlidersColorPicker, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props = this.props,
          visible = _this$props.visible,
          swatches = _this$props.swatches,
          swatchesLabel = _this$props.swatchesLabel,
          onOk = _this$props.onOk,
          onCancel = _this$props.onCancel,
          okLabel = _this$props.okLabel,
          cancelLabel = _this$props.cancelLabel,
          colorMode = _this$props.colorMode;
      var colorHex = tinycolor2__WEBPACK_IMPORTED_MODULE_3___default()(this.state.color).toHexString();
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_native__WEBPACK_IMPORTED_MODULE_1__["Modal"], {
        animationType: "slide",
        transparent: false,
        visible: visible,
        onRequestClose: onCancel
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_native__WEBPACK_IMPORTED_MODULE_1__["View"], {
        style: styles.container
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_native__WEBPACK_IMPORTED_MODULE_1__["View"], {
        style: styles.header
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_native__WEBPACK_IMPORTED_MODULE_1__["TouchableOpacity"], {
        onPress: onCancel
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_native__WEBPACK_IMPORTED_MODULE_1__["Text"], {
        style: styles.headerButton
      }, cancelLabel)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_native__WEBPACK_IMPORTED_MODULE_1__["TouchableOpacity"], {
        onPress: function onPress() {
          return onOk(modes[_this2.props.returnMode].getString(_this2.state.color));
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_native__WEBPACK_IMPORTED_MODULE_1__["Text"], {
        style: styles.headerButton
      }, okLabel))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_native__WEBPACK_IMPORTED_MODULE_1__["View"], {
        style: styles.content
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_native__WEBPACK_IMPORTED_MODULE_1__["View"], {
        style: [styles.colorPreview, {
          backgroundColor: colorHex
        }]
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_native__WEBPACK_IMPORTED_MODULE_1__["Text"], {
        style: styles.lightText
      }, "LIGHT TEXT"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_native__WEBPACK_IMPORTED_MODULE_1__["Text"], {
        style: styles.darkText
      }, "DARK TEXT")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_native__WEBPACK_IMPORTED_MODULE_1__["View"], {
        style: styles.colorString
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_native__WEBPACK_IMPORTED_MODULE_1__["Text"], {
        style: styles.colorStringText
      }, modes[this.state.mode].getString(this.state.color))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_native__WEBPACK_IMPORTED_MODULE_1__["View"], {
        style: styles.modesRow
      }, Object.keys(modes).map(function (key) {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_native__WEBPACK_IMPORTED_MODULE_1__["TouchableOpacity"], {
          onPress: function onPress() {
            return _this2.setState({
              mode: key
            });
          },
          key: key,
          style: [styles.mode, _this2.state.mode === key && styles.modeActive]
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_native__WEBPACK_IMPORTED_MODULE_1__["Text"], {
          style: [styles.modeText, _this2.state.mode === key && styles.modeTextActive]
        }, modes[key].label));
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_native__WEBPACK_IMPORTED_MODULE_1__["View"], {
        style: styles.sliders
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_sliders_HueSlider__WEBPACK_IMPORTED_MODULE_4__["default"], {
        style: styles.sliderRow,
        gradientSteps: 40,
        value: this.state.color.h,
        onValueChange: this.updateHue
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_sliders_SaturationSlider__WEBPACK_IMPORTED_MODULE_5__["default"], {
        style: styles.sliderRow,
        gradientSteps: 20,
        value: this.state.color.s,
        color: this.state.color,
        onValueChange: this.updateSaturation
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_sliders_LightnessSlider__WEBPACK_IMPORTED_MODULE_6__["default"], {
        style: styles.sliderRow,
        gradientSteps: 20,
        value: this.state.color.l,
        color: this.state.color,
        onValueChange: this.updateLightness
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_native__WEBPACK_IMPORTED_MODULE_1__["Text"], {
        style: styles.swatchesText
      }, swatchesLabel), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_native__WEBPACK_IMPORTED_MODULE_1__["View"], {
        style: styles.swatchesContainer
      }, swatches.map(function (swatch, index) {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_native__WEBPACK_IMPORTED_MODULE_1__["TouchableOpacity"], {
          key: swatch,
          style: [styles.swatch, {
            backgroundColor: swatch,
            marginRight: index < swatches.length - 1 ? 16 : 0
          }],
          onPress: function onPress() {
            return _this2.setState({
              color: tinycolor2__WEBPACK_IMPORTED_MODULE_3___default()(swatch).toHsl()
            });
          }
        });
      })))));
    }
  }]);

  return SlidersColorPicker;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);
/* harmony default export */ __webpack_exports__["default"] = (SlidersColorPicker);
var styles = react_native__WEBPACK_IMPORTED_MODULE_1__["StyleSheet"].create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'stretch',
    justifyContent: 'center',
    marginTop: react_native__WEBPACK_IMPORTED_MODULE_1__["Platform"].OS === 'ios' ? 20 : 0
  },
  header: {
    backgroundColor: '#fff',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: 64,
    marginHorizontal: 16
  },
  // TODO: Bigger touch area
  headerButton: _objectSpread({
    lineHeight: 22,
    fontSize: 17
  }, react_native__WEBPACK_IMPORTED_MODULE_1__["Platform"].select({
    android: {
      fontFamily: 'sans-serif-medium'
    },
    ios: {
      fontWeight: '600',
      letterSpacing: -0.41
    }
  })),
  content: {
    flex: 1,
    marginHorizontal: 16
  },
  lightText: _objectSpread({
    lineHeight: 22,
    fontSize: 17,
    color: 'white'
  }, react_native__WEBPACK_IMPORTED_MODULE_1__["Platform"].select({
    android: {
      fontFamily: 'sans-serif-medium'
    },
    ios: {
      fontWeight: '600',
      letterSpacing: -0.41
    }
  })),
  darkText: _objectSpread({
    lineHeight: 22,
    fontSize: 17,
    marginTop: 6
  }, react_native__WEBPACK_IMPORTED_MODULE_1__["Platform"].select({
    android: {
      fontFamily: 'sans-serif-medium'
    },
    ios: {
      fontWeight: '600',
      letterSpacing: -0.41
    }
  })),
  colorPreview: {
    flex: 1,
    borderRadius: 3,
    flexDirection: 'column',
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
    paddingVertical: 8,
    paddingHorizontal: 12
  },
  modesRow: {
    marginTop: 12,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start'
  },
  mode: {
    paddingHorizontal: 6,
    paddingVertical: 1,
    marginRight: 16
  },
  modeActive: {
    backgroundColor: 'black',
    borderRadius: 3
  },
  modeText: _objectSpread({
    lineHeight: 18,
    fontSize: 13
  }, react_native__WEBPACK_IMPORTED_MODULE_1__["Platform"].select({
    android: {
      fontFamily: 'sans-serif'
    },
    ios: {
      fontWeight: '400',
      letterSpacing: -0.08
    }
  })),
  modeTextActive: {
    color: 'white'
  },
  sliders: {
    marginTop: 16
  },
  sliderRow: {
    marginTop: 16
  },
  colorString: {
    marginTop: 32,
    borderBottomWidth: 2,
    borderColor: '#DDDDDD'
  },
  colorStringText: _objectSpread({
    lineHeight: 24,
    fontSize: 20
  }, react_native__WEBPACK_IMPORTED_MODULE_1__["Platform"].select({
    android: {
      fontFamily: 'monospace'
    },
    ios: {
      fontFamily: 'Courier New',
      fontWeight: '600',
      letterSpacing: 0.75
    }
  })),
  swatchesText: _objectSpread(_objectSpread({
    marginTop: 16,
    lineHeight: 18,
    fontSize: 13
  }, react_native__WEBPACK_IMPORTED_MODULE_1__["Platform"].select({
    android: {
      fontFamily: 'sans-serif'
    },
    ios: {
      fontWeight: '400',
      letterSpacing: -0.08
    }
  })), {}, {
    color: '#555'
  }),
  swatchesContainer: {
    marginTop: 12,
    marginBottom: 24,
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'flex-start'
  },
  swatch: {
    flex: 1,
    aspectRatio: 1,
    maxHeight: 100,
    maxWidth: 100,
    borderRadius: 3
  }
});
SlidersColorPicker.propTypes = {
  visible: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool.isRequired,
  swatches: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string).isRequired,
  swatchesLabel: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string.isRequired,
  onOk: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func.isRequired,
  onCancel: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func.isRequired,
  okLabel: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string.isRequired,
  cancelLabel: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string.isRequired,
  value: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string
};
SlidersColorPicker.defaultProps = {
  okLabel: 'Ok',
  cancelLabel: 'Cancel',
  value: '#70c1b3'
};

/***/ }),

/***/ "../../../node_modules/react-native-color/src/sliders/GradientSlider.js":
/*!*******************************************************************************************************************************!*\
  !*** /Users/diego.antonelli/Desktop/projects/widgets-resources/node_modules/react-native-color/src/sliders/GradientSlider.js ***!
  \*******************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_native__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-native */ "react-native");
/* harmony import */ var react_native__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_native__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "../../../node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_native_slider__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-native-slider */ "../../../node_modules/react-native-slider/lib/Slider.js");
/* harmony import */ var react_native_slider__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_native_slider__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _gradients_Gradient__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../gradients/Gradient */ "../../../node_modules/react-native-color/src/gradients/Gradient.js");






var GradientSlider = function GradientSlider(_ref) {
  var style = _ref.style,
      value = _ref.value,
      step = _ref.step,
      maximumValue = _ref.maximumValue,
      gradient = _ref.gradient,
      onValueChange = _ref.onValueChange,
      thumbTintColor = _ref.thumbTintColor;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_native__WEBPACK_IMPORTED_MODULE_1__["View"], {
    style: [styles.container, style]
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_native__WEBPACK_IMPORTED_MODULE_1__["View"], {
    style: styles.gradient
  }, gradient), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_native_slider__WEBPACK_IMPORTED_MODULE_3___default.a, {
    value: value,
    step: step,
    animateTransitions: true,
    animationType: "spring",
    thumbTouchSize: {
      width: 48,
      height: 48
    },
    maximumValue: maximumValue,
    onValueChange: onValueChange,
    minimumTrackTintColor: "transparent",
    maximumTrackTintColor: "transparent",
    thumbStyle: [styles.thumb, {
      backgroundColor: thumbTintColor
    }]
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (GradientSlider);
var styles = react_native__WEBPACK_IMPORTED_MODULE_1__["StyleSheet"].create({
  container: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'stretch',
    height: 32
  },
  thumb: {
    width: 24,
    height: 24,
    borderRadius: 24 / 2,
    shadowColor: 'black',
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowRadius: 4,
    shadowOpacity: 0.1
  },
  gradient: {
    position: 'absolute',
    left: 0,
    right: 0,
    height: 6
  }
});
GradientSlider.propTypes = {
  value: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.number.isRequired,
  step: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.number.isRequired,
  maximumValue: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.number.isRequired,
  onValueChange: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func.isRequired,
  thumbTintColor: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string.isRequired
};

/***/ }),

/***/ "../../../node_modules/react-native-color/src/sliders/HueSlider.js":
/*!**************************************************************************************************************************!*\
  !*** /Users/diego.antonelli/Desktop/projects/widgets-resources/node_modules/react-native-color/src/sliders/HueSlider.js ***!
  \**************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_native__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-native */ "react-native");
/* harmony import */ var react_native__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_native__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "../../../node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _GradientSlider__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./GradientSlider */ "../../../node_modules/react-native-color/src/sliders/GradientSlider.js");
/* harmony import */ var _gradients_HueGradient__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../gradients/HueGradient */ "../../../node_modules/react-native-color/src/gradients/HueGradient.js");
/* harmony import */ var tinycolor2__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tinycolor2 */ "../../../node_modules/tinycolor2/tinycolor.js");
/* harmony import */ var tinycolor2__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(tinycolor2__WEBPACK_IMPORTED_MODULE_5__);







var HueSlider = function HueSlider(_ref) {
  var style = _ref.style,
      value = _ref.value,
      onValueChange = _ref.onValueChange,
      gradientSteps = _ref.gradientSteps;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_GradientSlider__WEBPACK_IMPORTED_MODULE_3__["default"], {
    gradient: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_gradients_HueGradient__WEBPACK_IMPORTED_MODULE_4__["default"], {
      gradientSteps: gradientSteps
    }),
    style: style,
    step: 1,
    maximumValue: 359,
    value: value,
    thumbTintColor: tinycolor2__WEBPACK_IMPORTED_MODULE_5___default()({
      s: 1,
      l: 0.5,
      h: value
    }).toHslString(),
    onValueChange: onValueChange
  });
};

/* harmony default export */ __webpack_exports__["default"] = (HueSlider);
HueSlider.propTypes = {
  value: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.number.isRequired,
  onValueChange: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func.isRequired,
  gradientSteps: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.number.isRequired
};

/***/ }),

/***/ "../../../node_modules/react-native-color/src/sliders/LightnessSlider.js":
/*!********************************************************************************************************************************!*\
  !*** /Users/diego.antonelli/Desktop/projects/widgets-resources/node_modules/react-native-color/src/sliders/LightnessSlider.js ***!
  \********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_native__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-native */ "react-native");
/* harmony import */ var react_native__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_native__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "../../../node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _GradientSlider__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./GradientSlider */ "../../../node_modules/react-native-color/src/sliders/GradientSlider.js");
/* harmony import */ var _gradients_LightnessGradient__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../gradients/LightnessGradient */ "../../../node_modules/react-native-color/src/gradients/LightnessGradient.js");
/* harmony import */ var tinycolor2__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tinycolor2 */ "../../../node_modules/tinycolor2/tinycolor.js");
/* harmony import */ var tinycolor2__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(tinycolor2__WEBPACK_IMPORTED_MODULE_5__);
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








var LightnessSlider = function LightnessSlider(_ref) {
  var style = _ref.style,
      value = _ref.value,
      color = _ref.color,
      onValueChange = _ref.onValueChange,
      gradientSteps = _ref.gradientSteps;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_GradientSlider__WEBPACK_IMPORTED_MODULE_3__["default"], {
    gradient: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_gradients_LightnessGradient__WEBPACK_IMPORTED_MODULE_4__["default"], {
      color: color,
      gradientSteps: gradientSteps
    }),
    style: style,
    step: 0.01,
    maximumValue: 1,
    value: value,
    thumbTintColor: tinycolor2__WEBPACK_IMPORTED_MODULE_5___default()(_objectSpread(_objectSpread({}, color), {}, {
      l: value
    })).toHslString(),
    onValueChange: onValueChange
  });
};

/* harmony default export */ __webpack_exports__["default"] = (LightnessSlider);
LightnessSlider.propTypes = {
  value: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.number.isRequired,
  color: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.shape({
    h: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.number.isRequired,
    s: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.number.isRequired,
    l: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.number.isRequired
  }).isRequired,
  onValueChange: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func.isRequired,
  gradientSteps: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.number.isRequired
};

/***/ }),

/***/ "../../../node_modules/react-native-color/src/sliders/SaturationSlider.js":
/*!*********************************************************************************************************************************!*\
  !*** /Users/diego.antonelli/Desktop/projects/widgets-resources/node_modules/react-native-color/src/sliders/SaturationSlider.js ***!
  \*********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_native__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-native */ "react-native");
/* harmony import */ var react_native__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_native__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "../../../node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _GradientSlider__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./GradientSlider */ "../../../node_modules/react-native-color/src/sliders/GradientSlider.js");
/* harmony import */ var _gradients_SaturationGradient__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../gradients/SaturationGradient */ "../../../node_modules/react-native-color/src/gradients/SaturationGradient.js");
/* harmony import */ var tinycolor2__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tinycolor2 */ "../../../node_modules/tinycolor2/tinycolor.js");
/* harmony import */ var tinycolor2__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(tinycolor2__WEBPACK_IMPORTED_MODULE_5__);
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








var SaturationSlider = function SaturationSlider(_ref) {
  var style = _ref.style,
      value = _ref.value,
      color = _ref.color,
      onValueChange = _ref.onValueChange,
      gradientSteps = _ref.gradientSteps;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_GradientSlider__WEBPACK_IMPORTED_MODULE_3__["default"], {
    gradient: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_gradients_SaturationGradient__WEBPACK_IMPORTED_MODULE_4__["default"], {
      color: color,
      gradientSteps: gradientSteps
    }),
    style: style,
    step: 0.01,
    maximumValue: 1,
    value: value,
    thumbTintColor: tinycolor2__WEBPACK_IMPORTED_MODULE_5___default()(_objectSpread(_objectSpread({}, color), {}, {
      s: value
    })).toHslString(),
    onValueChange: onValueChange
  });
};

/* harmony default export */ __webpack_exports__["default"] = (SaturationSlider);
SaturationSlider.propTypes = {
  value: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.number.isRequired,
  color: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.shape({
    h: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.number.isRequired,
    s: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.number.isRequired,
    l: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.number.isRequired
  }).isRequired,
  onValueChange: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func.isRequired,
  gradientSteps: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.number.isRequired
};

/***/ }),

/***/ "../../../node_modules/react-native-slider/lib/Slider.js":
/*!****************************************************************************************************************!*\
  !*** /Users/diego.antonelli/Desktop/projects/widgets-resources/node_modules/react-native-slider/lib/Slider.js ***!
  \****************************************************************************************************************/
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

Object.defineProperty(exports, "__esModule", {
  value: true
});
var _jsxFileName = "src/Slider.js";

var _extends = Object.assign || function (target) {
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

var _createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();

var _react = __webpack_require__(/*! react */ "react");

var _react2 = _interopRequireDefault(_react);

var _reactNative = __webpack_require__(/*! react-native */ "react-native");

var _propTypes = __webpack_require__(/*! prop-types */ "../../../node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

function _objectWithoutProperties(obj, keys) {
  var target = {};

  for (var i in obj) {
    if (keys.indexOf(i) >= 0) continue;
    if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;
    target[i] = obj[i];
  }

  return target;
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _possibleConstructorReturn(self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return call && (_typeof(call) === "object" || typeof call === "function") ? call : self;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + _typeof(superClass));
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });
  if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
}

var TRACK_SIZE = 4;
var THUMB_SIZE = 20;

function Rect(x, y, width, height) {
  this.x = x;
  this.y = y;
  this.width = width;
  this.height = height;
}

Rect.prototype.containsPoint = function (x, y) {
  return x >= this.x && y >= this.y && x <= this.x + this.width && y <= this.y + this.height;
};

var DEFAULT_ANIMATION_CONFIGS = {
  spring: {
    friction: 7,
    tension: 100
  },
  timing: {
    duration: 150,
    easing: _reactNative.Easing.inOut(_reactNative.Easing.ease),
    delay: 0
  }
}; // decay : { // This has a serious bug
//   velocity     : 1,
//   deceleration : 0.997
// }

var Slider = function (_PureComponent) {
  _inherits(Slider, _PureComponent);

  function Slider() {
    var _Object$getPrototypeO;

    var _temp, _this, _ret;

    _classCallCheck(this, Slider);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_Object$getPrototypeO = Object.getPrototypeOf(Slider)).call.apply(_Object$getPrototypeO, [this].concat(args))), _this), _this.state = {
      containerSize: {
        width: 0,
        height: 0
      },
      trackSize: {
        width: 0,
        height: 0
      },
      thumbSize: {
        width: 0,
        height: 0
      },
      allMeasured: false,
      value: new _reactNative.Animated.Value(_this.props.value)
    }, _this._handleStartShouldSetPanResponder = function (e) {
      // Should we become active when the user presses down on the thumb?
      return _this._thumbHitTest(e);
    }, _this._handlePanResponderGrant = function ()
    /*e: Object, gestureState: Object*/
    {
      _this._previousLeft = _this._getThumbLeft(_this._getCurrentValue());

      _this._fireChangeEvent('onSlidingStart');
    }, _this._handlePanResponderMove = function (e, gestureState) {
      if (_this.props.disabled) {
        return;
      }

      _this._setCurrentValue(_this._getValue(gestureState));

      _this._fireChangeEvent('onValueChange');
    }, _this._handlePanResponderEnd = function (e, gestureState) {
      if (_this.props.disabled) {
        return;
      }

      _this._setCurrentValue(_this._getValue(gestureState));

      _this._fireChangeEvent('onSlidingComplete');
    }, _this._measureContainer = function (x) {
      _this._handleMeasure('containerSize', x);
    }, _this._measureTrack = function (x) {
      _this._handleMeasure('trackSize', x);
    }, _this._measureThumb = function (x) {
      _this._handleMeasure('thumbSize', x);
    }, _this._handleMeasure = function (name, x) {
      var _x$nativeEvent$layout = x.nativeEvent.layout;
      var width = _x$nativeEvent$layout.width;
      var height = _x$nativeEvent$layout.height;
      var size = {
        width: width,
        height: height
      };
      var storeName = "_" + name;
      var currentSize = _this[storeName];

      if (currentSize && width === currentSize.width && height === currentSize.height) {
        return;
      }

      _this[storeName] = size;

      if (_this._containerSize && _this._trackSize && _this._thumbSize) {
        _this.setState({
          containerSize: _this._containerSize,
          trackSize: _this._trackSize,
          thumbSize: _this._thumbSize,
          allMeasured: true
        });
      }
    }, _this._getRatio = function (value) {
      return (value - _this.props.minimumValue) / (_this.props.maximumValue - _this.props.minimumValue);
    }, _this._getThumbLeft = function (value) {
      var ratio = _this._getRatio(value);

      return ratio * (_this.state.containerSize.width - _this.state.thumbSize.width);
    }, _this._getValue = function (gestureState) {
      var length = _this.state.containerSize.width - _this.state.thumbSize.width;
      var thumbLeft = _this._previousLeft + gestureState.dx;
      var ratio = thumbLeft / length;

      if (_this.props.step) {
        return Math.max(_this.props.minimumValue, Math.min(_this.props.maximumValue, _this.props.minimumValue + Math.round(ratio * (_this.props.maximumValue - _this.props.minimumValue) / _this.props.step) * _this.props.step));
      } else {
        return Math.max(_this.props.minimumValue, Math.min(_this.props.maximumValue, ratio * (_this.props.maximumValue - _this.props.minimumValue) + _this.props.minimumValue));
      }
    }, _this._getCurrentValue = function () {
      return _this.state.value.__getValue();
    }, _this._setCurrentValue = function (value) {
      _this.state.value.setValue(value);
    }, _this._setCurrentValueAnimated = function (value) {
      var animationType = _this.props.animationType;

      var animationConfig = _extends({}, DEFAULT_ANIMATION_CONFIGS[animationType], _this.props.animationConfig, {
        toValue: value
      });

      _reactNative.Animated[animationType](_this.state.value, animationConfig).start();
    }, _this._fireChangeEvent = function (event) {
      if (_this.props[event]) {
        _this.props[event](_this._getCurrentValue());
      }
    }, _this._getTouchOverflowSize = function () {
      var state = _this.state;
      var props = _this.props;
      var size = {};

      if (state.allMeasured === true) {
        size.width = Math.max(0, props.thumbTouchSize.width - state.thumbSize.width);
        size.height = Math.max(0, props.thumbTouchSize.height - state.containerSize.height);
      }

      return size;
    }, _this._getTouchOverflowStyle = function () {
      var _this$_getTouchOverfl = _this._getTouchOverflowSize();

      var width = _this$_getTouchOverfl.width;
      var height = _this$_getTouchOverfl.height;
      var touchOverflowStyle = {};

      if (width !== undefined && height !== undefined) {
        var verticalMargin = -height / 2;
        touchOverflowStyle.marginTop = verticalMargin;
        touchOverflowStyle.marginBottom = verticalMargin;
        var horizontalMargin = -width / 2;
        touchOverflowStyle.marginLeft = horizontalMargin;
        touchOverflowStyle.marginRight = horizontalMargin;
      }

      if (_this.props.debugTouchArea === true) {
        touchOverflowStyle.backgroundColor = 'orange';
        touchOverflowStyle.opacity = 0.5;
      }

      return touchOverflowStyle;
    }, _this._thumbHitTest = function (e) {
      var nativeEvent = e.nativeEvent;

      var thumbTouchRect = _this._getThumbTouchRect();

      return thumbTouchRect.containsPoint(nativeEvent.locationX, nativeEvent.locationY);
    }, _this._getThumbTouchRect = function () {
      var state = _this.state;
      var props = _this.props;

      var touchOverflowSize = _this._getTouchOverflowSize();

      return new Rect(touchOverflowSize.width / 2 + _this._getThumbLeft(_this._getCurrentValue()) + (state.thumbSize.width - props.thumbTouchSize.width) / 2, touchOverflowSize.height / 2 + (state.containerSize.height - props.thumbTouchSize.height) / 2, props.thumbTouchSize.width, props.thumbTouchSize.height);
    }, _this._renderDebugThumbTouchRect = function (thumbLeft) {
      var thumbTouchRect = _this._getThumbTouchRect();

      var positionStyle = {
        left: thumbLeft,
        top: thumbTouchRect.y,
        width: thumbTouchRect.width,
        height: thumbTouchRect.height
      };
      return _react2["default"].createElement(_reactNative.Animated.View, {
        style: [defaultStyles.debugThumbTouchArea, positionStyle],
        pointerEvents: "none",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 496
        }
      });
    }, _this._renderThumbImage = function () {
      var thumbImage = _this.props.thumbImage;
      if (!thumbImage) return;
      return _react2["default"].createElement(_reactNative.Image, {
        source: thumbImage,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 508
        }
      });
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Slider, [{
    key: "componentWillMount",
    value: function componentWillMount() {
      this._panResponder = _reactNative.PanResponder.create({
        onStartShouldSetPanResponder: this._handleStartShouldSetPanResponder,
        onMoveShouldSetPanResponder: this._handleMoveShouldSetPanResponder,
        onPanResponderGrant: this._handlePanResponderGrant,
        onPanResponderMove: this._handlePanResponderMove,
        onPanResponderRelease: this._handlePanResponderEnd,
        onPanResponderTerminationRequest: this._handlePanResponderRequestEnd,
        onPanResponderTerminate: this._handlePanResponderEnd
      });
    }
  }, {
    key: "componentWillReceiveProps",
    value: function componentWillReceiveProps(nextProps) {
      var newValue = nextProps.value;

      if (this.props.value !== newValue) {
        if (this.props.animateTransitions) {
          this._setCurrentValueAnimated(newValue);
        } else {
          this._setCurrentValue(newValue);
        }
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _props = this.props;
      var minimumValue = _props.minimumValue;
      var maximumValue = _props.maximumValue;
      var minimumTrackTintColor = _props.minimumTrackTintColor;
      var maximumTrackTintColor = _props.maximumTrackTintColor;
      var thumbTintColor = _props.thumbTintColor;
      var thumbImage = _props.thumbImage;
      var styles = _props.styles;
      var style = _props.style;
      var trackStyle = _props.trackStyle;
      var thumbStyle = _props.thumbStyle;
      var debugTouchArea = _props.debugTouchArea;

      var other = _objectWithoutProperties(_props, ["minimumValue", "maximumValue", "minimumTrackTintColor", "maximumTrackTintColor", "thumbTintColor", "thumbImage", "styles", "style", "trackStyle", "thumbStyle", "debugTouchArea"]);

      var _state = this.state;
      var value = _state.value;
      var containerSize = _state.containerSize;
      var trackSize = _state.trackSize;
      var thumbSize = _state.thumbSize;
      var allMeasured = _state.allMeasured;
      var mainStyles = styles || defaultStyles;
      var thumbLeft = value.interpolate({
        inputRange: [minimumValue, maximumValue],
        outputRange: [0, containerSize.width - thumbSize.width]
      }); //extrapolate: 'clamp',

      var valueVisibleStyle = {};

      if (!allMeasured) {
        valueVisibleStyle.opacity = 0;
      }

      var minimumTrackStyle = _extends({
        position: 'absolute',
        width: _reactNative.Animated.add(thumbLeft, thumbSize.width / 2),
        backgroundColor: minimumTrackTintColor
      }, valueVisibleStyle);

      var touchOverflowStyle = this._getTouchOverflowStyle();

      return _react2["default"].createElement(_reactNative.View, _extends({}, other, {
        style: [mainStyles.container, style],
        onLayout: this._measureContainer,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 255
        }
      }), _react2["default"].createElement(_reactNative.View, {
        style: [{
          backgroundColor: maximumTrackTintColor
        }, mainStyles.track, trackStyle],
        renderToHardwareTextureAndroid: true,
        onLayout: this._measureTrack,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 256
        }
      }), _react2["default"].createElement(_reactNative.Animated.View, {
        renderToHardwareTextureAndroid: true,
        style: [mainStyles.track, trackStyle, minimumTrackStyle],
        __source: {
          fileName: _jsxFileName,
          lineNumber: 260
        }
      }), _react2["default"].createElement(_reactNative.Animated.View, {
        onLayout: this._measureThumb,
        renderToHardwareTextureAndroid: true,
        style: [{
          backgroundColor: thumbTintColor
        }, mainStyles.thumb, thumbStyle, _extends({
          transform: [{
            translateX: thumbLeft
          }, {
            translateY: 0
          }]
        }, valueVisibleStyle)],
        __source: {
          fileName: _jsxFileName,
          lineNumber: 263
        }
      }, this._renderThumbImage()), _react2["default"].createElement(_reactNative.View, _extends({
        renderToHardwareTextureAndroid: true,
        style: [defaultStyles.touchArea, touchOverflowStyle]
      }, this._panResponder.panHandlers, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 280
        }
      }), debugTouchArea === true && this._renderDebugThumbTouchRect(thumbLeft)));
    }
  }, {
    key: "_getPropsForComponentUpdate",
    value: function _getPropsForComponentUpdate(props) {
      var value = props.value;
      var onValueChange = props.onValueChange;
      var onSlidingStart = props.onSlidingStart;
      var onSlidingComplete = props.onSlidingComplete;
      var style = props.style;
      var trackStyle = props.trackStyle;
      var thumbStyle = props.thumbStyle;

      var otherProps = _objectWithoutProperties(props, ["value", "onValueChange", "onSlidingStart", "onSlidingComplete", "style", "trackStyle", "thumbStyle"]);

      return otherProps;
    }
  }, {
    key: "_handleMoveShouldSetPanResponder",
    value: function _handleMoveShouldSetPanResponder() {
      // Should we become active when the user moves a touch over the thumb?
      return false;
    }
  }, {
    key: "_handlePanResponderRequestEnd",
    value: function _handlePanResponderRequestEnd(e, gestureState) {
      // Should we allow another component to take over this pan?
      return false;
    }
  }]);

  return Slider;
}(_react.PureComponent);

Slider.propTypes = {
  /**
  * Initial value of the slider. The value should be between minimumValue
  * and maximumValue, which default to 0 and 1 respectively.
  * Default value is 0.
  *
  * *This is not a controlled component*, e.g. if you don't update
  * the value, the component won't be reset to its inital value.
  */
  value: _propTypes2["default"].number,

  /**
  * If true the user won't be able to move the slider.
  * Default value is false.
  */
  disabled: _propTypes2["default"].bool,

  /**
  * Initial minimum value of the slider. Default value is 0.
  */
  minimumValue: _propTypes2["default"].number,

  /**
  * Initial maximum value of the slider. Default value is 1.
  */
  maximumValue: _propTypes2["default"].number,

  /**
  * Step value of the slider. The value should be between 0 and
  * (maximumValue - minimumValue). Default value is 0.
  */
  step: _propTypes2["default"].number,

  /**
  * The color used for the track to the left of the button. Overrides the
  * default blue gradient image.
  */
  minimumTrackTintColor: _propTypes2["default"].string,

  /**
  * The color used for the track to the right of the button. Overrides the
  * default blue gradient image.
  */
  maximumTrackTintColor: _propTypes2["default"].string,

  /**
  * The color used for the thumb.
  */
  thumbTintColor: _propTypes2["default"].string,

  /**
  * The size of the touch area that allows moving the thumb.
  * The touch area has the same center has the visible thumb.
  * This allows to have a visually small thumb while still allowing the user
  * to move it easily.
  * The default is {width: 40, height: 40}.
  */
  thumbTouchSize: _propTypes2["default"].shape({
    width: _propTypes2["default"].number,
    height: _propTypes2["default"].number
  }),

  /**
  * Callback continuously called while the user is dragging the slider.
  */
  onValueChange: _propTypes2["default"].func,

  /**
  * Callback called when the user starts changing the value (e.g. when
  * the slider is pressed).
  */
  onSlidingStart: _propTypes2["default"].func,

  /**
  * Callback called when the user finishes changing the value (e.g. when
  * the slider is released).
  */
  onSlidingComplete: _propTypes2["default"].func,

  /**
  * The style applied to the slider container.
  */
  style: _reactNative.ViewPropTypes.style,

  /**
  * The style applied to the track.
  */
  trackStyle: _reactNative.ViewPropTypes.style,

  /**
  * The style applied to the thumb.
  */
  thumbStyle: _reactNative.ViewPropTypes.style,

  /**
  * Sets an image for the thumb.
  */
  thumbImage: _reactNative.Image.propTypes.source,

  /**
  * Set this to true to visually see the thumb touch rect in green.
  */
  debugTouchArea: _propTypes2["default"].bool,

  /**
  * Set to true to animate values with default 'timing' animation type
  */
  animateTransitions: _propTypes2["default"].bool,

  /**
  * Custom Animation type. 'spring' or 'timing'.
  */
  animationType: _propTypes2["default"].oneOf(['spring', 'timing']),

  /**
  * Used to configure the animation parameters.  These are the same parameters in the Animated library.
  */
  animationConfig: _propTypes2["default"].object
};
Slider.defaultProps = {
  value: 0,
  minimumValue: 0,
  maximumValue: 1,
  step: 0,
  minimumTrackTintColor: '#3f3f3f',
  maximumTrackTintColor: '#b3b3b3',
  thumbTintColor: '#343434',
  thumbTouchSize: {
    width: 40,
    height: 40
  },
  debugTouchArea: false,
  animationType: 'timing'
};
exports["default"] = Slider;

var defaultStyles = _reactNative.StyleSheet.create({
  container: {
    height: 40,
    justifyContent: 'center'
  },
  track: {
    height: TRACK_SIZE,
    borderRadius: TRACK_SIZE / 2
  },
  thumb: {
    position: 'absolute',
    width: THUMB_SIZE,
    height: THUMB_SIZE,
    borderRadius: THUMB_SIZE / 2
  },
  touchArea: {
    position: 'absolute',
    backgroundColor: 'transparent',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0
  },
  debugThumbTouchArea: {
    position: 'absolute',
    backgroundColor: 'green',
    opacity: 0.5
  }
});

/***/ }),

/***/ "../../../node_modules/tinycolor2/tinycolor.js":
/*!******************************************************************************************************!*\
  !*** /Users/diego.antonelli/Desktop/projects/widgets-resources/node_modules/tinycolor2/tinycolor.js ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_RESULT__;function _typeof(obj) {
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
} // TinyColor v1.4.1
// https://github.com/bgrins/TinyColor
// Brian Grinstead, MIT License


(function (Math) {
  var trimLeft = /^\s+/,
      trimRight = /\s+$/,
      tinyCounter = 0,
      mathRound = Math.round,
      mathMin = Math.min,
      mathMax = Math.max,
      mathRandom = Math.random;

  function tinycolor(color, opts) {
    color = color ? color : '';
    opts = opts || {}; // If input is already a tinycolor, return itself

    if (color instanceof tinycolor) {
      return color;
    } // If we are called as a function, call using new instead


    if (!(this instanceof tinycolor)) {
      return new tinycolor(color, opts);
    }

    var rgb = inputToRGB(color);
    this._originalInput = color, this._r = rgb.r, this._g = rgb.g, this._b = rgb.b, this._a = rgb.a, this._roundA = mathRound(100 * this._a) / 100, this._format = opts.format || rgb.format;
    this._gradientType = opts.gradientType; // Don't let the range of [0,255] come back in [0,1].
    // Potentially lose a little bit of precision here, but will fix issues where
    // .5 gets interpreted as half of the total, instead of half of 1
    // If it was supposed to be 128, this was already taken care of by `inputToRgb`

    if (this._r < 1) {
      this._r = mathRound(this._r);
    }

    if (this._g < 1) {
      this._g = mathRound(this._g);
    }

    if (this._b < 1) {
      this._b = mathRound(this._b);
    }

    this._ok = rgb.ok;
    this._tc_id = tinyCounter++;
  }

  tinycolor.prototype = {
    isDark: function isDark() {
      return this.getBrightness() < 128;
    },
    isLight: function isLight() {
      return !this.isDark();
    },
    isValid: function isValid() {
      return this._ok;
    },
    getOriginalInput: function getOriginalInput() {
      return this._originalInput;
    },
    getFormat: function getFormat() {
      return this._format;
    },
    getAlpha: function getAlpha() {
      return this._a;
    },
    getBrightness: function getBrightness() {
      //http://www.w3.org/TR/AERT#color-contrast
      var rgb = this.toRgb();
      return (rgb.r * 299 + rgb.g * 587 + rgb.b * 114) / 1000;
    },
    getLuminance: function getLuminance() {
      //http://www.w3.org/TR/2008/REC-WCAG20-20081211/#relativeluminancedef
      var rgb = this.toRgb();
      var RsRGB, GsRGB, BsRGB, R, G, B;
      RsRGB = rgb.r / 255;
      GsRGB = rgb.g / 255;
      BsRGB = rgb.b / 255;

      if (RsRGB <= 0.03928) {
        R = RsRGB / 12.92;
      } else {
        R = Math.pow((RsRGB + 0.055) / 1.055, 2.4);
      }

      if (GsRGB <= 0.03928) {
        G = GsRGB / 12.92;
      } else {
        G = Math.pow((GsRGB + 0.055) / 1.055, 2.4);
      }

      if (BsRGB <= 0.03928) {
        B = BsRGB / 12.92;
      } else {
        B = Math.pow((BsRGB + 0.055) / 1.055, 2.4);
      }

      return 0.2126 * R + 0.7152 * G + 0.0722 * B;
    },
    setAlpha: function setAlpha(value) {
      this._a = boundAlpha(value);
      this._roundA = mathRound(100 * this._a) / 100;
      return this;
    },
    toHsv: function toHsv() {
      var hsv = rgbToHsv(this._r, this._g, this._b);
      return {
        h: hsv.h * 360,
        s: hsv.s,
        v: hsv.v,
        a: this._a
      };
    },
    toHsvString: function toHsvString() {
      var hsv = rgbToHsv(this._r, this._g, this._b);
      var h = mathRound(hsv.h * 360),
          s = mathRound(hsv.s * 100),
          v = mathRound(hsv.v * 100);
      return this._a == 1 ? "hsv(" + h + ", " + s + "%, " + v + "%)" : "hsva(" + h + ", " + s + "%, " + v + "%, " + this._roundA + ")";
    },
    toHsl: function toHsl() {
      var hsl = rgbToHsl(this._r, this._g, this._b);
      return {
        h: hsl.h * 360,
        s: hsl.s,
        l: hsl.l,
        a: this._a
      };
    },
    toHslString: function toHslString() {
      var hsl = rgbToHsl(this._r, this._g, this._b);
      var h = mathRound(hsl.h * 360),
          s = mathRound(hsl.s * 100),
          l = mathRound(hsl.l * 100);
      return this._a == 1 ? "hsl(" + h + ", " + s + "%, " + l + "%)" : "hsla(" + h + ", " + s + "%, " + l + "%, " + this._roundA + ")";
    },
    toHex: function toHex(allow3Char) {
      return rgbToHex(this._r, this._g, this._b, allow3Char);
    },
    toHexString: function toHexString(allow3Char) {
      return '#' + this.toHex(allow3Char);
    },
    toHex8: function toHex8(allow4Char) {
      return rgbaToHex(this._r, this._g, this._b, this._a, allow4Char);
    },
    toHex8String: function toHex8String(allow4Char) {
      return '#' + this.toHex8(allow4Char);
    },
    toRgb: function toRgb() {
      return {
        r: mathRound(this._r),
        g: mathRound(this._g),
        b: mathRound(this._b),
        a: this._a
      };
    },
    toRgbString: function toRgbString() {
      return this._a == 1 ? "rgb(" + mathRound(this._r) + ", " + mathRound(this._g) + ", " + mathRound(this._b) + ")" : "rgba(" + mathRound(this._r) + ", " + mathRound(this._g) + ", " + mathRound(this._b) + ", " + this._roundA + ")";
    },
    toPercentageRgb: function toPercentageRgb() {
      return {
        r: mathRound(bound01(this._r, 255) * 100) + "%",
        g: mathRound(bound01(this._g, 255) * 100) + "%",
        b: mathRound(bound01(this._b, 255) * 100) + "%",
        a: this._a
      };
    },
    toPercentageRgbString: function toPercentageRgbString() {
      return this._a == 1 ? "rgb(" + mathRound(bound01(this._r, 255) * 100) + "%, " + mathRound(bound01(this._g, 255) * 100) + "%, " + mathRound(bound01(this._b, 255) * 100) + "%)" : "rgba(" + mathRound(bound01(this._r, 255) * 100) + "%, " + mathRound(bound01(this._g, 255) * 100) + "%, " + mathRound(bound01(this._b, 255) * 100) + "%, " + this._roundA + ")";
    },
    toName: function toName() {
      if (this._a === 0) {
        return "transparent";
      }

      if (this._a < 1) {
        return false;
      }

      return hexNames[rgbToHex(this._r, this._g, this._b, true)] || false;
    },
    toFilter: function toFilter(secondColor) {
      var hex8String = '#' + rgbaToArgbHex(this._r, this._g, this._b, this._a);
      var secondHex8String = hex8String;
      var gradientType = this._gradientType ? "GradientType = 1, " : "";

      if (secondColor) {
        var s = tinycolor(secondColor);
        secondHex8String = '#' + rgbaToArgbHex(s._r, s._g, s._b, s._a);
      }

      return "progid:DXImageTransform.Microsoft.gradient(" + gradientType + "startColorstr=" + hex8String + ",endColorstr=" + secondHex8String + ")";
    },
    toString: function toString(format) {
      var formatSet = !!format;
      format = format || this._format;
      var formattedString = false;
      var hasAlpha = this._a < 1 && this._a >= 0;
      var needsAlphaFormat = !formatSet && hasAlpha && (format === "hex" || format === "hex6" || format === "hex3" || format === "hex4" || format === "hex8" || format === "name");

      if (needsAlphaFormat) {
        // Special case for "transparent", all other non-alpha formats
        // will return rgba when there is transparency.
        if (format === "name" && this._a === 0) {
          return this.toName();
        }

        return this.toRgbString();
      }

      if (format === "rgb") {
        formattedString = this.toRgbString();
      }

      if (format === "prgb") {
        formattedString = this.toPercentageRgbString();
      }

      if (format === "hex" || format === "hex6") {
        formattedString = this.toHexString();
      }

      if (format === "hex3") {
        formattedString = this.toHexString(true);
      }

      if (format === "hex4") {
        formattedString = this.toHex8String(true);
      }

      if (format === "hex8") {
        formattedString = this.toHex8String();
      }

      if (format === "name") {
        formattedString = this.toName();
      }

      if (format === "hsl") {
        formattedString = this.toHslString();
      }

      if (format === "hsv") {
        formattedString = this.toHsvString();
      }

      return formattedString || this.toHexString();
    },
    clone: function clone() {
      return tinycolor(this.toString());
    },
    _applyModification: function _applyModification(fn, args) {
      var color = fn.apply(null, [this].concat([].slice.call(args)));
      this._r = color._r;
      this._g = color._g;
      this._b = color._b;
      this.setAlpha(color._a);
      return this;
    },
    lighten: function lighten() {
      return this._applyModification(_lighten, arguments);
    },
    brighten: function brighten() {
      return this._applyModification(_brighten, arguments);
    },
    darken: function darken() {
      return this._applyModification(_darken, arguments);
    },
    desaturate: function desaturate() {
      return this._applyModification(_desaturate, arguments);
    },
    saturate: function saturate() {
      return this._applyModification(_saturate, arguments);
    },
    greyscale: function greyscale() {
      return this._applyModification(_greyscale, arguments);
    },
    spin: function spin() {
      return this._applyModification(_spin, arguments);
    },
    _applyCombination: function _applyCombination(fn, args) {
      return fn.apply(null, [this].concat([].slice.call(args)));
    },
    analogous: function analogous() {
      return this._applyCombination(_analogous, arguments);
    },
    complement: function complement() {
      return this._applyCombination(_complement, arguments);
    },
    monochromatic: function monochromatic() {
      return this._applyCombination(_monochromatic, arguments);
    },
    splitcomplement: function splitcomplement() {
      return this._applyCombination(_splitcomplement, arguments);
    },
    triad: function triad() {
      return this._applyCombination(_triad, arguments);
    },
    tetrad: function tetrad() {
      return this._applyCombination(_tetrad, arguments);
    }
  }; // If input is an object, force 1 into "1.0" to handle ratios properly
  // String input requires "1.0" as input, so 1 will be treated as 1

  tinycolor.fromRatio = function (color, opts) {
    if (_typeof(color) == "object") {
      var newColor = {};

      for (var i in color) {
        if (color.hasOwnProperty(i)) {
          if (i === "a") {
            newColor[i] = color[i];
          } else {
            newColor[i] = convertToPercentage(color[i]);
          }
        }
      }

      color = newColor;
    }

    return tinycolor(color, opts);
  }; // Given a string or object, convert that input to RGB
  // Possible string inputs:
  //
  //     "red"
  //     "#f00" or "f00"
  //     "#ff0000" or "ff0000"
  //     "#ff000000" or "ff000000"
  //     "rgb 255 0 0" or "rgb (255, 0, 0)"
  //     "rgb 1.0 0 0" or "rgb (1, 0, 0)"
  //     "rgba (255, 0, 0, 1)" or "rgba 255, 0, 0, 1"
  //     "rgba (1.0, 0, 0, 1)" or "rgba 1.0, 0, 0, 1"
  //     "hsl(0, 100%, 50%)" or "hsl 0 100% 50%"
  //     "hsla(0, 100%, 50%, 1)" or "hsla 0 100% 50%, 1"
  //     "hsv(0, 100%, 100%)" or "hsv 0 100% 100%"
  //


  function inputToRGB(color) {
    var rgb = {
      r: 0,
      g: 0,
      b: 0
    };
    var a = 1;
    var s = null;
    var v = null;
    var l = null;
    var ok = false;
    var format = false;

    if (typeof color == "string") {
      color = stringInputToObject(color);
    }

    if (_typeof(color) == "object") {
      if (isValidCSSUnit(color.r) && isValidCSSUnit(color.g) && isValidCSSUnit(color.b)) {
        rgb = rgbToRgb(color.r, color.g, color.b);
        ok = true;
        format = String(color.r).substr(-1) === "%" ? "prgb" : "rgb";
      } else if (isValidCSSUnit(color.h) && isValidCSSUnit(color.s) && isValidCSSUnit(color.v)) {
        s = convertToPercentage(color.s);
        v = convertToPercentage(color.v);
        rgb = hsvToRgb(color.h, s, v);
        ok = true;
        format = "hsv";
      } else if (isValidCSSUnit(color.h) && isValidCSSUnit(color.s) && isValidCSSUnit(color.l)) {
        s = convertToPercentage(color.s);
        l = convertToPercentage(color.l);
        rgb = hslToRgb(color.h, s, l);
        ok = true;
        format = "hsl";
      }

      if (color.hasOwnProperty("a")) {
        a = color.a;
      }
    }

    a = boundAlpha(a);
    return {
      ok: ok,
      format: color.format || format,
      r: mathMin(255, mathMax(rgb.r, 0)),
      g: mathMin(255, mathMax(rgb.g, 0)),
      b: mathMin(255, mathMax(rgb.b, 0)),
      a: a
    };
  } // Conversion Functions
  // --------------------
  // `rgbToHsl`, `rgbToHsv`, `hslToRgb`, `hsvToRgb` modified from:
  // <http://mjijackson.com/2008/02/rgb-to-hsl-and-rgb-to-hsv-color-model-conversion-algorithms-in-javascript>
  // `rgbToRgb`
  // Handle bounds / percentage checking to conform to CSS color spec
  // <http://www.w3.org/TR/css3-color/>
  // *Assumes:* r, g, b in [0, 255] or [0, 1]
  // *Returns:* { r, g, b } in [0, 255]


  function rgbToRgb(r, g, b) {
    return {
      r: bound01(r, 255) * 255,
      g: bound01(g, 255) * 255,
      b: bound01(b, 255) * 255
    };
  } // `rgbToHsl`
  // Converts an RGB color value to HSL.
  // *Assumes:* r, g, and b are contained in [0, 255] or [0, 1]
  // *Returns:* { h, s, l } in [0,1]


  function rgbToHsl(r, g, b) {
    r = bound01(r, 255);
    g = bound01(g, 255);
    b = bound01(b, 255);
    var max = mathMax(r, g, b),
        min = mathMin(r, g, b);
    var h,
        s,
        l = (max + min) / 2;

    if (max == min) {
      h = s = 0; // achromatic
    } else {
      var d = max - min;
      s = l > 0.5 ? d / (2 - max - min) : d / (max + min);

      switch (max) {
        case r:
          h = (g - b) / d + (g < b ? 6 : 0);
          break;

        case g:
          h = (b - r) / d + 2;
          break;

        case b:
          h = (r - g) / d + 4;
          break;
      }

      h /= 6;
    }

    return {
      h: h,
      s: s,
      l: l
    };
  } // `hslToRgb`
  // Converts an HSL color value to RGB.
  // *Assumes:* h is contained in [0, 1] or [0, 360] and s and l are contained [0, 1] or [0, 100]
  // *Returns:* { r, g, b } in the set [0, 255]


  function hslToRgb(h, s, l) {
    var r, g, b;
    h = bound01(h, 360);
    s = bound01(s, 100);
    l = bound01(l, 100);

    function hue2rgb(p, q, t) {
      if (t < 0) t += 1;
      if (t > 1) t -= 1;
      if (t < 1 / 6) return p + (q - p) * 6 * t;
      if (t < 1 / 2) return q;
      if (t < 2 / 3) return p + (q - p) * (2 / 3 - t) * 6;
      return p;
    }

    if (s === 0) {
      r = g = b = l; // achromatic
    } else {
      var q = l < 0.5 ? l * (1 + s) : l + s - l * s;
      var p = 2 * l - q;
      r = hue2rgb(p, q, h + 1 / 3);
      g = hue2rgb(p, q, h);
      b = hue2rgb(p, q, h - 1 / 3);
    }

    return {
      r: r * 255,
      g: g * 255,
      b: b * 255
    };
  } // `rgbToHsv`
  // Converts an RGB color value to HSV
  // *Assumes:* r, g, and b are contained in the set [0, 255] or [0, 1]
  // *Returns:* { h, s, v } in [0,1]


  function rgbToHsv(r, g, b) {
    r = bound01(r, 255);
    g = bound01(g, 255);
    b = bound01(b, 255);
    var max = mathMax(r, g, b),
        min = mathMin(r, g, b);
    var h,
        s,
        v = max;
    var d = max - min;
    s = max === 0 ? 0 : d / max;

    if (max == min) {
      h = 0; // achromatic
    } else {
      switch (max) {
        case r:
          h = (g - b) / d + (g < b ? 6 : 0);
          break;

        case g:
          h = (b - r) / d + 2;
          break;

        case b:
          h = (r - g) / d + 4;
          break;
      }

      h /= 6;
    }

    return {
      h: h,
      s: s,
      v: v
    };
  } // `hsvToRgb`
  // Converts an HSV color value to RGB.
  // *Assumes:* h is contained in [0, 1] or [0, 360] and s and v are contained in [0, 1] or [0, 100]
  // *Returns:* { r, g, b } in the set [0, 255]


  function hsvToRgb(h, s, v) {
    h = bound01(h, 360) * 6;
    s = bound01(s, 100);
    v = bound01(v, 100);
    var i = Math.floor(h),
        f = h - i,
        p = v * (1 - s),
        q = v * (1 - f * s),
        t = v * (1 - (1 - f) * s),
        mod = i % 6,
        r = [v, q, p, p, t, v][mod],
        g = [t, v, v, q, p, p][mod],
        b = [p, p, t, v, v, q][mod];
    return {
      r: r * 255,
      g: g * 255,
      b: b * 255
    };
  } // `rgbToHex`
  // Converts an RGB color to hex
  // Assumes r, g, and b are contained in the set [0, 255]
  // Returns a 3 or 6 character hex


  function rgbToHex(r, g, b, allow3Char) {
    var hex = [pad2(mathRound(r).toString(16)), pad2(mathRound(g).toString(16)), pad2(mathRound(b).toString(16))]; // Return a 3 character hex if possible

    if (allow3Char && hex[0].charAt(0) == hex[0].charAt(1) && hex[1].charAt(0) == hex[1].charAt(1) && hex[2].charAt(0) == hex[2].charAt(1)) {
      return hex[0].charAt(0) + hex[1].charAt(0) + hex[2].charAt(0);
    }

    return hex.join("");
  } // `rgbaToHex`
  // Converts an RGBA color plus alpha transparency to hex
  // Assumes r, g, b are contained in the set [0, 255] and
  // a in [0, 1]. Returns a 4 or 8 character rgba hex


  function rgbaToHex(r, g, b, a, allow4Char) {
    var hex = [pad2(mathRound(r).toString(16)), pad2(mathRound(g).toString(16)), pad2(mathRound(b).toString(16)), pad2(convertDecimalToHex(a))]; // Return a 4 character hex if possible

    if (allow4Char && hex[0].charAt(0) == hex[0].charAt(1) && hex[1].charAt(0) == hex[1].charAt(1) && hex[2].charAt(0) == hex[2].charAt(1) && hex[3].charAt(0) == hex[3].charAt(1)) {
      return hex[0].charAt(0) + hex[1].charAt(0) + hex[2].charAt(0) + hex[3].charAt(0);
    }

    return hex.join("");
  } // `rgbaToArgbHex`
  // Converts an RGBA color to an ARGB Hex8 string
  // Rarely used, but required for "toFilter()"


  function rgbaToArgbHex(r, g, b, a) {
    var hex = [pad2(convertDecimalToHex(a)), pad2(mathRound(r).toString(16)), pad2(mathRound(g).toString(16)), pad2(mathRound(b).toString(16))];
    return hex.join("");
  } // `equals`
  // Can be called with any tinycolor input


  tinycolor.equals = function (color1, color2) {
    if (!color1 || !color2) {
      return false;
    }

    return tinycolor(color1).toRgbString() == tinycolor(color2).toRgbString();
  };

  tinycolor.random = function () {
    return tinycolor.fromRatio({
      r: mathRandom(),
      g: mathRandom(),
      b: mathRandom()
    });
  }; // Modification Functions
  // ----------------------
  // Thanks to less.js for some of the basics here
  // <https://github.com/cloudhead/less.js/blob/master/lib/less/functions.js>


  function _desaturate(color, amount) {
    amount = amount === 0 ? 0 : amount || 10;
    var hsl = tinycolor(color).toHsl();
    hsl.s -= amount / 100;
    hsl.s = clamp01(hsl.s);
    return tinycolor(hsl);
  }

  function _saturate(color, amount) {
    amount = amount === 0 ? 0 : amount || 10;
    var hsl = tinycolor(color).toHsl();
    hsl.s += amount / 100;
    hsl.s = clamp01(hsl.s);
    return tinycolor(hsl);
  }

  function _greyscale(color) {
    return tinycolor(color).desaturate(100);
  }

  function _lighten(color, amount) {
    amount = amount === 0 ? 0 : amount || 10;
    var hsl = tinycolor(color).toHsl();
    hsl.l += amount / 100;
    hsl.l = clamp01(hsl.l);
    return tinycolor(hsl);
  }

  function _brighten(color, amount) {
    amount = amount === 0 ? 0 : amount || 10;
    var rgb = tinycolor(color).toRgb();
    rgb.r = mathMax(0, mathMin(255, rgb.r - mathRound(255 * -(amount / 100))));
    rgb.g = mathMax(0, mathMin(255, rgb.g - mathRound(255 * -(amount / 100))));
    rgb.b = mathMax(0, mathMin(255, rgb.b - mathRound(255 * -(amount / 100))));
    return tinycolor(rgb);
  }

  function _darken(color, amount) {
    amount = amount === 0 ? 0 : amount || 10;
    var hsl = tinycolor(color).toHsl();
    hsl.l -= amount / 100;
    hsl.l = clamp01(hsl.l);
    return tinycolor(hsl);
  } // Spin takes a positive or negative amount within [-360, 360] indicating the change of hue.
  // Values outside of this range will be wrapped into this range.


  function _spin(color, amount) {
    var hsl = tinycolor(color).toHsl();
    var hue = (hsl.h + amount) % 360;
    hsl.h = hue < 0 ? 360 + hue : hue;
    return tinycolor(hsl);
  } // Combination Functions
  // ---------------------
  // Thanks to jQuery xColor for some of the ideas behind these
  // <https://github.com/infusion/jQuery-xcolor/blob/master/jquery.xcolor.js>


  function _complement(color) {
    var hsl = tinycolor(color).toHsl();
    hsl.h = (hsl.h + 180) % 360;
    return tinycolor(hsl);
  }

  function _triad(color) {
    var hsl = tinycolor(color).toHsl();
    var h = hsl.h;
    return [tinycolor(color), tinycolor({
      h: (h + 120) % 360,
      s: hsl.s,
      l: hsl.l
    }), tinycolor({
      h: (h + 240) % 360,
      s: hsl.s,
      l: hsl.l
    })];
  }

  function _tetrad(color) {
    var hsl = tinycolor(color).toHsl();
    var h = hsl.h;
    return [tinycolor(color), tinycolor({
      h: (h + 90) % 360,
      s: hsl.s,
      l: hsl.l
    }), tinycolor({
      h: (h + 180) % 360,
      s: hsl.s,
      l: hsl.l
    }), tinycolor({
      h: (h + 270) % 360,
      s: hsl.s,
      l: hsl.l
    })];
  }

  function _splitcomplement(color) {
    var hsl = tinycolor(color).toHsl();
    var h = hsl.h;
    return [tinycolor(color), tinycolor({
      h: (h + 72) % 360,
      s: hsl.s,
      l: hsl.l
    }), tinycolor({
      h: (h + 216) % 360,
      s: hsl.s,
      l: hsl.l
    })];
  }

  function _analogous(color, results, slices) {
    results = results || 6;
    slices = slices || 30;
    var hsl = tinycolor(color).toHsl();
    var part = 360 / slices;
    var ret = [tinycolor(color)];

    for (hsl.h = (hsl.h - (part * results >> 1) + 720) % 360; --results;) {
      hsl.h = (hsl.h + part) % 360;
      ret.push(tinycolor(hsl));
    }

    return ret;
  }

  function _monochromatic(color, results) {
    results = results || 6;
    var hsv = tinycolor(color).toHsv();
    var h = hsv.h,
        s = hsv.s,
        v = hsv.v;
    var ret = [];
    var modification = 1 / results;

    while (results--) {
      ret.push(tinycolor({
        h: h,
        s: s,
        v: v
      }));
      v = (v + modification) % 1;
    }

    return ret;
  } // Utility Functions
  // ---------------------


  tinycolor.mix = function (color1, color2, amount) {
    amount = amount === 0 ? 0 : amount || 50;
    var rgb1 = tinycolor(color1).toRgb();
    var rgb2 = tinycolor(color2).toRgb();
    var p = amount / 100;
    var rgba = {
      r: (rgb2.r - rgb1.r) * p + rgb1.r,
      g: (rgb2.g - rgb1.g) * p + rgb1.g,
      b: (rgb2.b - rgb1.b) * p + rgb1.b,
      a: (rgb2.a - rgb1.a) * p + rgb1.a
    };
    return tinycolor(rgba);
  }; // Readability Functions
  // ---------------------
  // <http://www.w3.org/TR/2008/REC-WCAG20-20081211/#contrast-ratiodef (WCAG Version 2)
  // `contrast`
  // Analyze the 2 colors and returns the color contrast defined by (WCAG Version 2)


  tinycolor.readability = function (color1, color2) {
    var c1 = tinycolor(color1);
    var c2 = tinycolor(color2);
    return (Math.max(c1.getLuminance(), c2.getLuminance()) + 0.05) / (Math.min(c1.getLuminance(), c2.getLuminance()) + 0.05);
  }; // `isReadable`
  // Ensure that foreground and background color combinations meet WCAG2 guidelines.
  // The third argument is an optional Object.
  //      the 'level' property states 'AA' or 'AAA' - if missing or invalid, it defaults to 'AA';
  //      the 'size' property states 'large' or 'small' - if missing or invalid, it defaults to 'small'.
  // If the entire object is absent, isReadable defaults to {level:"AA",size:"small"}.
  // *Example*
  //    tinycolor.isReadable("#000", "#111") => false
  //    tinycolor.isReadable("#000", "#111",{level:"AA",size:"large"}) => false


  tinycolor.isReadable = function (color1, color2, wcag2) {
    var readability = tinycolor.readability(color1, color2);
    var wcag2Parms, out;
    out = false;
    wcag2Parms = validateWCAG2Parms(wcag2);

    switch (wcag2Parms.level + wcag2Parms.size) {
      case "AAsmall":
      case "AAAlarge":
        out = readability >= 4.5;
        break;

      case "AAlarge":
        out = readability >= 3;
        break;

      case "AAAsmall":
        out = readability >= 7;
        break;
    }

    return out;
  }; // `mostReadable`
  // Given a base color and a list of possible foreground or background
  // colors for that base, returns the most readable color.
  // Optionally returns Black or White if the most readable color is unreadable.
  // *Example*
  //    tinycolor.mostReadable(tinycolor.mostReadable("#123", ["#124", "#125"],{includeFallbackColors:false}).toHexString(); // "#112255"
  //    tinycolor.mostReadable(tinycolor.mostReadable("#123", ["#124", "#125"],{includeFallbackColors:true}).toHexString();  // "#ffffff"
  //    tinycolor.mostReadable("#a8015a", ["#faf3f3"],{includeFallbackColors:true,level:"AAA",size:"large"}).toHexString(); // "#faf3f3"
  //    tinycolor.mostReadable("#a8015a", ["#faf3f3"],{includeFallbackColors:true,level:"AAA",size:"small"}).toHexString(); // "#ffffff"


  tinycolor.mostReadable = function (baseColor, colorList, args) {
    var bestColor = null;
    var bestScore = 0;
    var readability;
    var includeFallbackColors, level, size;
    args = args || {};
    includeFallbackColors = args.includeFallbackColors;
    level = args.level;
    size = args.size;

    for (var i = 0; i < colorList.length; i++) {
      readability = tinycolor.readability(baseColor, colorList[i]);

      if (readability > bestScore) {
        bestScore = readability;
        bestColor = tinycolor(colorList[i]);
      }
    }

    if (tinycolor.isReadable(baseColor, bestColor, {
      "level": level,
      "size": size
    }) || !includeFallbackColors) {
      return bestColor;
    } else {
      args.includeFallbackColors = false;
      return tinycolor.mostReadable(baseColor, ["#fff", "#000"], args);
    }
  }; // Big List of Colors
  // ------------------
  // <http://www.w3.org/TR/css3-color/#svg-color>


  var names = tinycolor.names = {
    aliceblue: "f0f8ff",
    antiquewhite: "faebd7",
    aqua: "0ff",
    aquamarine: "7fffd4",
    azure: "f0ffff",
    beige: "f5f5dc",
    bisque: "ffe4c4",
    black: "000",
    blanchedalmond: "ffebcd",
    blue: "00f",
    blueviolet: "8a2be2",
    brown: "a52a2a",
    burlywood: "deb887",
    burntsienna: "ea7e5d",
    cadetblue: "5f9ea0",
    chartreuse: "7fff00",
    chocolate: "d2691e",
    coral: "ff7f50",
    cornflowerblue: "6495ed",
    cornsilk: "fff8dc",
    crimson: "dc143c",
    cyan: "0ff",
    darkblue: "00008b",
    darkcyan: "008b8b",
    darkgoldenrod: "b8860b",
    darkgray: "a9a9a9",
    darkgreen: "006400",
    darkgrey: "a9a9a9",
    darkkhaki: "bdb76b",
    darkmagenta: "8b008b",
    darkolivegreen: "556b2f",
    darkorange: "ff8c00",
    darkorchid: "9932cc",
    darkred: "8b0000",
    darksalmon: "e9967a",
    darkseagreen: "8fbc8f",
    darkslateblue: "483d8b",
    darkslategray: "2f4f4f",
    darkslategrey: "2f4f4f",
    darkturquoise: "00ced1",
    darkviolet: "9400d3",
    deeppink: "ff1493",
    deepskyblue: "00bfff",
    dimgray: "696969",
    dimgrey: "696969",
    dodgerblue: "1e90ff",
    firebrick: "b22222",
    floralwhite: "fffaf0",
    forestgreen: "228b22",
    fuchsia: "f0f",
    gainsboro: "dcdcdc",
    ghostwhite: "f8f8ff",
    gold: "ffd700",
    goldenrod: "daa520",
    gray: "808080",
    green: "008000",
    greenyellow: "adff2f",
    grey: "808080",
    honeydew: "f0fff0",
    hotpink: "ff69b4",
    indianred: "cd5c5c",
    indigo: "4b0082",
    ivory: "fffff0",
    khaki: "f0e68c",
    lavender: "e6e6fa",
    lavenderblush: "fff0f5",
    lawngreen: "7cfc00",
    lemonchiffon: "fffacd",
    lightblue: "add8e6",
    lightcoral: "f08080",
    lightcyan: "e0ffff",
    lightgoldenrodyellow: "fafad2",
    lightgray: "d3d3d3",
    lightgreen: "90ee90",
    lightgrey: "d3d3d3",
    lightpink: "ffb6c1",
    lightsalmon: "ffa07a",
    lightseagreen: "20b2aa",
    lightskyblue: "87cefa",
    lightslategray: "789",
    lightslategrey: "789",
    lightsteelblue: "b0c4de",
    lightyellow: "ffffe0",
    lime: "0f0",
    limegreen: "32cd32",
    linen: "faf0e6",
    magenta: "f0f",
    maroon: "800000",
    mediumaquamarine: "66cdaa",
    mediumblue: "0000cd",
    mediumorchid: "ba55d3",
    mediumpurple: "9370db",
    mediumseagreen: "3cb371",
    mediumslateblue: "7b68ee",
    mediumspringgreen: "00fa9a",
    mediumturquoise: "48d1cc",
    mediumvioletred: "c71585",
    midnightblue: "191970",
    mintcream: "f5fffa",
    mistyrose: "ffe4e1",
    moccasin: "ffe4b5",
    navajowhite: "ffdead",
    navy: "000080",
    oldlace: "fdf5e6",
    olive: "808000",
    olivedrab: "6b8e23",
    orange: "ffa500",
    orangered: "ff4500",
    orchid: "da70d6",
    palegoldenrod: "eee8aa",
    palegreen: "98fb98",
    paleturquoise: "afeeee",
    palevioletred: "db7093",
    papayawhip: "ffefd5",
    peachpuff: "ffdab9",
    peru: "cd853f",
    pink: "ffc0cb",
    plum: "dda0dd",
    powderblue: "b0e0e6",
    purple: "800080",
    rebeccapurple: "663399",
    red: "f00",
    rosybrown: "bc8f8f",
    royalblue: "4169e1",
    saddlebrown: "8b4513",
    salmon: "fa8072",
    sandybrown: "f4a460",
    seagreen: "2e8b57",
    seashell: "fff5ee",
    sienna: "a0522d",
    silver: "c0c0c0",
    skyblue: "87ceeb",
    slateblue: "6a5acd",
    slategray: "708090",
    slategrey: "708090",
    snow: "fffafa",
    springgreen: "00ff7f",
    steelblue: "4682b4",
    tan: "d2b48c",
    teal: "008080",
    thistle: "d8bfd8",
    tomato: "ff6347",
    turquoise: "40e0d0",
    violet: "ee82ee",
    wheat: "f5deb3",
    white: "fff",
    whitesmoke: "f5f5f5",
    yellow: "ff0",
    yellowgreen: "9acd32"
  }; // Make it easy to access colors via `hexNames[hex]`

  var hexNames = tinycolor.hexNames = flip(names); // Utilities
  // ---------
  // `{ 'name1': 'val1' }` becomes `{ 'val1': 'name1' }`

  function flip(o) {
    var flipped = {};

    for (var i in o) {
      if (o.hasOwnProperty(i)) {
        flipped[o[i]] = i;
      }
    }

    return flipped;
  } // Return a valid alpha value [0,1] with all invalid values being set to 1


  function boundAlpha(a) {
    a = parseFloat(a);

    if (isNaN(a) || a < 0 || a > 1) {
      a = 1;
    }

    return a;
  } // Take input from [0, n] and return it as [0, 1]


  function bound01(n, max) {
    if (isOnePointZero(n)) {
      n = "100%";
    }

    var processPercent = isPercentage(n);
    n = mathMin(max, mathMax(0, parseFloat(n))); // Automatically convert percentage into number

    if (processPercent) {
      n = parseInt(n * max, 10) / 100;
    } // Handle floating point rounding errors


    if (Math.abs(n - max) < 0.000001) {
      return 1;
    } // Convert into [0, 1] range if it isn't already


    return n % max / parseFloat(max);
  } // Force a number between 0 and 1


  function clamp01(val) {
    return mathMin(1, mathMax(0, val));
  } // Parse a base-16 hex value into a base-10 integer


  function parseIntFromHex(val) {
    return parseInt(val, 16);
  } // Need to handle 1.0 as 100%, since once it is a number, there is no difference between it and 1
  // <http://stackoverflow.com/questions/7422072/javascript-how-to-detect-number-as-a-decimal-including-1-0>


  function isOnePointZero(n) {
    return typeof n == "string" && n.indexOf('.') != -1 && parseFloat(n) === 1;
  } // Check to see if string passed in is a percentage


  function isPercentage(n) {
    return typeof n === "string" && n.indexOf('%') != -1;
  } // Force a hex value to have 2 characters


  function pad2(c) {
    return c.length == 1 ? '0' + c : '' + c;
  } // Replace a decimal with it's percentage value


  function convertToPercentage(n) {
    if (n <= 1) {
      n = n * 100 + "%";
    }

    return n;
  } // Converts a decimal to a hex value


  function convertDecimalToHex(d) {
    return Math.round(parseFloat(d) * 255).toString(16);
  } // Converts a hex value to a decimal


  function convertHexToDecimal(h) {
    return parseIntFromHex(h) / 255;
  }

  var matchers = function () {
    // <http://www.w3.org/TR/css3-values/#integers>
    var CSS_INTEGER = "[-\\+]?\\d+%?"; // <http://www.w3.org/TR/css3-values/#number-value>

    var CSS_NUMBER = "[-\\+]?\\d*\\.\\d+%?"; // Allow positive/negative integer/number.  Don't capture the either/or, just the entire outcome.

    var CSS_UNIT = "(?:" + CSS_NUMBER + ")|(?:" + CSS_INTEGER + ")"; // Actual matching.
    // Parentheses and commas are optional, but not required.
    // Whitespace can take the place of commas or opening paren

    var PERMISSIVE_MATCH3 = "[\\s|\\(]+(" + CSS_UNIT + ")[,|\\s]+(" + CSS_UNIT + ")[,|\\s]+(" + CSS_UNIT + ")\\s*\\)?";
    var PERMISSIVE_MATCH4 = "[\\s|\\(]+(" + CSS_UNIT + ")[,|\\s]+(" + CSS_UNIT + ")[,|\\s]+(" + CSS_UNIT + ")[,|\\s]+(" + CSS_UNIT + ")\\s*\\)?";
    return {
      CSS_UNIT: new RegExp(CSS_UNIT),
      rgb: new RegExp("rgb" + PERMISSIVE_MATCH3),
      rgba: new RegExp("rgba" + PERMISSIVE_MATCH4),
      hsl: new RegExp("hsl" + PERMISSIVE_MATCH3),
      hsla: new RegExp("hsla" + PERMISSIVE_MATCH4),
      hsv: new RegExp("hsv" + PERMISSIVE_MATCH3),
      hsva: new RegExp("hsva" + PERMISSIVE_MATCH4),
      hex3: /^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
      hex6: /^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,
      hex4: /^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
      hex8: /^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/
    };
  }(); // `isValidCSSUnit`
  // Take in a single string / number and check to see if it looks like a CSS unit
  // (see `matchers` above for definition).


  function isValidCSSUnit(color) {
    return !!matchers.CSS_UNIT.exec(color);
  } // `stringInputToObject`
  // Permissive string parsing.  Take in a number of formats, and output an object
  // based on detected format.  Returns `{ r, g, b }` or `{ h, s, l }` or `{ h, s, v}`


  function stringInputToObject(color) {
    color = color.replace(trimLeft, '').replace(trimRight, '').toLowerCase();
    var named = false;

    if (names[color]) {
      color = names[color];
      named = true;
    } else if (color == 'transparent') {
      return {
        r: 0,
        g: 0,
        b: 0,
        a: 0,
        format: "name"
      };
    } // Try to match string input using regular expressions.
    // Keep most of the number bounding out of this function - don't worry about [0,1] or [0,100] or [0,360]
    // Just return an object and let the conversion functions handle that.
    // This way the result will be the same whether the tinycolor is initialized with string or object.


    var match;

    if (match = matchers.rgb.exec(color)) {
      return {
        r: match[1],
        g: match[2],
        b: match[3]
      };
    }

    if (match = matchers.rgba.exec(color)) {
      return {
        r: match[1],
        g: match[2],
        b: match[3],
        a: match[4]
      };
    }

    if (match = matchers.hsl.exec(color)) {
      return {
        h: match[1],
        s: match[2],
        l: match[3]
      };
    }

    if (match = matchers.hsla.exec(color)) {
      return {
        h: match[1],
        s: match[2],
        l: match[3],
        a: match[4]
      };
    }

    if (match = matchers.hsv.exec(color)) {
      return {
        h: match[1],
        s: match[2],
        v: match[3]
      };
    }

    if (match = matchers.hsva.exec(color)) {
      return {
        h: match[1],
        s: match[2],
        v: match[3],
        a: match[4]
      };
    }

    if (match = matchers.hex8.exec(color)) {
      return {
        r: parseIntFromHex(match[1]),
        g: parseIntFromHex(match[2]),
        b: parseIntFromHex(match[3]),
        a: convertHexToDecimal(match[4]),
        format: named ? "name" : "hex8"
      };
    }

    if (match = matchers.hex6.exec(color)) {
      return {
        r: parseIntFromHex(match[1]),
        g: parseIntFromHex(match[2]),
        b: parseIntFromHex(match[3]),
        format: named ? "name" : "hex"
      };
    }

    if (match = matchers.hex4.exec(color)) {
      return {
        r: parseIntFromHex(match[1] + '' + match[1]),
        g: parseIntFromHex(match[2] + '' + match[2]),
        b: parseIntFromHex(match[3] + '' + match[3]),
        a: convertHexToDecimal(match[4] + '' + match[4]),
        format: named ? "name" : "hex8"
      };
    }

    if (match = matchers.hex3.exec(color)) {
      return {
        r: parseIntFromHex(match[1] + '' + match[1]),
        g: parseIntFromHex(match[2] + '' + match[2]),
        b: parseIntFromHex(match[3] + '' + match[3]),
        format: named ? "name" : "hex"
      };
    }

    return false;
  }

  function validateWCAG2Parms(parms) {
    // return valid WCAG2 parms for isReadable.
    // If input parms are invalid, return {"level":"AA", "size":"small"}
    var level, size;
    parms = parms || {
      "level": "AA",
      "size": "small"
    };
    level = (parms.level || "AA").toUpperCase();
    size = (parms.size || "small").toLowerCase();

    if (level !== "AA" && level !== "AAA") {
      level = "AA";
    }

    if (size !== "small" && size !== "large") {
      size = "small";
    }

    return {
      "level": level,
      "size": size
    };
  } // Node: Export function


  if ( true && module.exports) {
    module.exports = tinycolor;
  } // AMD/requirejs: Define the module
  else if (true) {
      !(__WEBPACK_AMD_DEFINE_RESULT__ = (function () {
        return tinycolor;
      }).call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
    } // Browser: Expose to window
    else {}
})(Math);

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

/***/ "../../../packages-native/color-picker/src/ColorPicker.tsx":
/*!******************************************************************************************************************!*\
  !*** /Users/diego.antonelli/Desktop/projects/widgets-resources/packages-native/color-picker/src/ColorPicker.tsx ***!
  \******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(/*! @native-mobile-resources/util-widgets */ "../../../packages-native/util-widgets/dist/index.js"), __webpack_require__(/*! react */ "react"), __webpack_require__(/*! react-native */ "react-native"), __webpack_require__(/*! react-native-color */ "../../../node_modules/react-native-color/src/index.js"), __webpack_require__(/*! tinycolor2 */ "../../../node_modules/tinycolor2/tinycolor.js"), __webpack_require__(/*! ./components/PickerSlider */ "../../../packages-native/color-picker/src/components/PickerSlider.tsx"), __webpack_require__(/*! ./components/AlphaGradient */ "../../../packages-native/color-picker/src/components/AlphaGradient.tsx"), __webpack_require__(/*! ./components/DisabledHueGradient */ "../../../packages-native/color-picker/src/components/DisabledHueGradient.tsx"), __webpack_require__(/*! ./ui/Styles */ "../../../packages-native/color-picker/src/ui/Styles.ts"), __webpack_require__(/*! @widgets-resources/piw-utils */ "../../piw-utils/dist/index.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, util_widgets_1, react_1, react_native_1, react_native_color_1, tinycolor2_1, PickerSlider_1, AlphaGradient_1, DisabledHueGradient_1, Styles_1, piw_utils_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    tinycolor2_1 = __importDefault(tinycolor2_1);
    var ColorPicker = (function (_super) {
        __extends(ColorPicker, _super);
        function ColorPicker() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.onChangeHueHandler = _this.onChangeHue.bind(_this);
            _this.onChangeSaturationHandler = _this.onChangeSaturation.bind(_this);
            _this.onChangeLightnessHandler = _this.onChangeLightness.bind(_this);
            _this.onChangeAlphaHandler = _this.onChangeAlpha.bind(_this);
            _this.onChangeCompleteHandler = _this.onChangeComplete.bind(_this);
            _this.styles = util_widgets_1.flattenStyles(Styles_1.defaultColorPickerStyle, _this.props.style);
            _this.defaultSteps = 80;
            _this.state = {
                color: undefined
            };
            _this.getThumbStyle = function (color) { return ({
                borderWidth: 1,
                borderColor: tinycolor2_1.default(color).toHexString()
            }); };
            return _this;
        }
        ColorPicker.prototype.render = function () {
            if (!this.props.color || this.props.color.status !== "available" || !this.props.color.value) {
                return null;
            }
            var colorHex = this.state.color ? this.getColor() : this.props.color.value;
            var color = tinycolor2_1.default(colorHex).toHsl();
            return (react_1.createElement(react_native_1.View, { style: this.styles.container, testID: "" + this.props.name },
                this.renderPreview(color),
                this.renderHue(color),
                this.renderSaturation(color),
                this.renderLightness(color),
                this.props.format !== "hex" && this.renderAlpha(color)));
        };
        ColorPicker.prototype.componentDidUpdate = function (prevProps, prevState) {
            if (this.props.color.value !== prevProps.color.value && this.state.color === prevState.color) {
                this.setState({ color: undefined });
            }
        };
        ColorPicker.prototype.onChangeHue = function (value) {
            var color = tinycolor2_1.default(this.props.color.value).toHsl();
            color.h = value;
            this.setState({ color: color });
        };
        ColorPicker.prototype.onChangeSaturation = function (value) {
            var color = tinycolor2_1.default(this.props.color.value).toHsl();
            color.s = value;
            this.setState({ color: color });
        };
        ColorPicker.prototype.onChangeLightness = function (value) {
            var color = tinycolor2_1.default(this.props.color.value).toHsl();
            color.l = value;
            this.setState({ color: color });
        };
        ColorPicker.prototype.onChangeAlpha = function (value) {
            var color = tinycolor2_1.default(this.props.color.value).toHsl();
            color.a = value;
            this.setState({ color: color });
        };
        ColorPicker.prototype.onChangeComplete = function () {
            if (this.state.color && this.props.color.value !== this.getColor()) {
                this.props.color.setValue(this.getColor());
            }
            piw_utils_1.executeAction(this.props.onChange);
        };
        ColorPicker.prototype.getColor = function () {
            var color = tinycolor2_1.default(this.state.color);
            switch (this.props.format) {
                case "hex":
                    return color.toHexString();
                case "hsl":
                    return color.toHslString();
                case "hsv":
                    return color.toHsvString();
                case "rgb":
                    return color.toRgbString();
            }
        };
        ColorPicker.prototype.renderPreview = function (color) {
            return (this.props.showPreview && (react_1.createElement(react_native_1.View, { testID: this.props.name + "$preview", style: [this.styles.preview, { backgroundColor: tinycolor2_1.default(color).toHslString() }] })));
        };
        ColorPicker.prototype.renderHue = function (color) {
            var component = this.props.color.readOnly ? (react_1.createElement(DisabledHueGradient_1.DisabledHueGradient, { color: color })) : (react_1.createElement(react_native_color_1.HueGradient, { gradientSteps: this.defaultSteps }));
            return (react_1.createElement(PickerSlider_1.PickerSlider, { testID: this.props.name + "$hue", value: color.h, onValueChange: this.onChangeHueHandler, onValueChangeComplete: this.onChangeCompleteHandler, step: 1, maximumValue: 359, thumbTintColor: tinycolor2_1.default(color).toHslString(), thumbStyle: this.getThumbStyle(color), disabled: this.props.color.readOnly }, component));
        };
        ColorPicker.prototype.renderSaturation = function (color) {
            if (!this.props.showSaturation || this.props.color.readOnly) {
                return null;
            }
            return (react_1.createElement(PickerSlider_1.PickerSlider, { testID: this.props.name + "$saturation", value: color.s, onValueChange: this.onChangeSaturationHandler, onValueChangeComplete: this.onChangeCompleteHandler, step: 0.01, thumbTintColor: tinycolor2_1.default(color).toHslString(), thumbStyle: this.getThumbStyle(color), disabled: this.props.color.readOnly },
                react_1.createElement(react_native_color_1.SaturationGradient, { color: color, gradientSteps: this.defaultSteps })));
        };
        ColorPicker.prototype.renderLightness = function (color) {
            if (!this.props.showLightness || this.props.color.readOnly) {
                return null;
            }
            return (react_1.createElement(PickerSlider_1.PickerSlider, { testID: this.props.name + "$lightness", value: color.l, onValueChange: this.onChangeLightnessHandler, onValueChangeComplete: this.onChangeCompleteHandler, step: 0.01, thumbTintColor: tinycolor2_1.default(color).toHslString(), thumbStyle: this.getThumbStyle(color), disabled: this.props.color.readOnly },
                react_1.createElement(react_native_color_1.LightnessGradient, { color: color, gradientSteps: this.defaultSteps })));
        };
        ColorPicker.prototype.renderAlpha = function (color) {
            if (!this.props.showAlpha || this.props.color.readOnly) {
                return null;
            }
            return (react_1.createElement(PickerSlider_1.PickerSlider, { testID: this.props.name + "$alpha", value: color.a, onValueChange: this.onChangeAlphaHandler, onValueChangeComplete: this.onChangeCompleteHandler, step: 0.01, thumbTintColor: tinycolor2_1.default(color).toHslString(), thumbStyle: this.getThumbStyle(color), disabled: this.props.color.readOnly },
                react_1.createElement(AlphaGradient_1.AlphaGradient, { color: color, gradientSteps: this.defaultSteps })));
        };
        return ColorPicker;
    }(react_1.Component));
    exports.ColorPicker = ColorPicker;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),

/***/ "../../../packages-native/color-picker/src/components/AlphaGradient.tsx":
/*!*******************************************************************************************************************************!*\
  !*** /Users/diego.antonelli/Desktop/projects/widgets-resources/packages-native/color-picker/src/components/AlphaGradient.tsx ***!
  \*******************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || function () {
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
!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(/*! react */ "react"), __webpack_require__(/*! react-native-color */ "../../../node_modules/react-native-color/src/index.js"), __webpack_require__(/*! tinycolor2 */ "../../../node_modules/tinycolor2/tinycolor.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, react_1, react_native_color_1, tinycolor2_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    tinycolor2_1 = __importDefault(tinycolor2_1);
    var AlphaGradient = (function (_super) {
        __extends(AlphaGradient, _super);
        function AlphaGradient() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.getStepColor = function (i) { return tinycolor2_1.default(__assign(__assign({}, _this.props.color), { a: i })).toHslString(); };
            return _this;
        }
        AlphaGradient.prototype.shouldComponentUpdate = function (nextProps) {
            var current = this.props.color;
            var next = nextProps.color;
            return current.h !== next.h || current.s !== next.s || current.l !== next.l;
        };
        AlphaGradient.prototype.render = function () {
            var _a = this.props, style = _a.style, gradientSteps = _a.gradientSteps;
            return (react_1.createElement(react_native_color_1.Gradient, { style: style, gradientSteps: gradientSteps, getStepColor: this.getStepColor, maximumValue: 1 }));
        };
        return AlphaGradient;
    }(react_1.Component));
    exports.AlphaGradient = AlphaGradient;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),

/***/ "../../../packages-native/color-picker/src/components/DisabledHueGradient.tsx":
/*!*************************************************************************************************************************************!*\
  !*** /Users/diego.antonelli/Desktop/projects/widgets-resources/packages-native/color-picker/src/components/DisabledHueGradient.tsx ***!
  \*************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(/*! react */ "react"), __webpack_require__(/*! react-native-color */ "../../../node_modules/react-native-color/src/index.js"), __webpack_require__(/*! tinycolor2 */ "../../../node_modules/tinycolor2/tinycolor.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, react_1, react_native_color_1, tinycolor2_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    tinycolor2_1 = __importDefault(tinycolor2_1);
    exports.DisabledHueGradient = function (props) { return (react_1.createElement(react_native_color_1.Gradient, { gradientSteps: 1, getStepColor: function () { return tinycolor2_1.default(props.color).toHslString(); }, maximumValue: 1 })); };
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),

/***/ "../../../packages-native/color-picker/src/components/PickerSlider.tsx":
/*!******************************************************************************************************************************!*\
  !*** /Users/diego.antonelli/Desktop/projects/widgets-resources/packages-native/color-picker/src/components/PickerSlider.tsx ***!
  \******************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(/*! react */ "react"), __webpack_require__(/*! react-native */ "react-native"), __webpack_require__(/*! react-native-slider */ "../../../node_modules/react-native-slider/lib/Slider.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, react_1, react_native_1, react_native_slider_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    react_native_slider_1 = __importDefault(react_native_slider_1);
    var PickerSlider = (function (_super) {
        __extends(PickerSlider, _super);
        function PickerSlider() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.onTapHandler = _this.onTap.bind(_this);
            _this.onChangeHandler = _this.onChange.bind(_this);
            _this.onSlidingCompleteHandler = _this.onSlidingComplete.bind(_this);
            _this.viewRef = react_1.createRef();
            _this.isSliding = false;
            _this.roundToMultiple = function (value, multiple) {
                return Math.round(value / multiple) * multiple;
            };
            return _this;
        }
        PickerSlider.prototype.render = function () {
            return (react_1.createElement(react_native_1.TouchableWithoutFeedback, { onPressIn: this.onTapHandler, testID: this.props.testID, disabled: this.props.disabled },
                react_1.createElement(react_native_1.View, { style: [styles.container], ref: this.viewRef },
                    react_1.createElement(react_native_1.View, { style: styles.gradient }, this.props.children),
                    react_1.createElement(react_native_slider_1.default, { value: this.props.value, step: this.props.step, animateTransitions: false, thumbTouchSize: { width: 48, height: 48 }, minimumValue: this.props.minimumValue, maximumValue: this.props.maximumValue, onValueChange: this.onChangeHandler, onSlidingComplete: this.onSlidingCompleteHandler, minimumTrackTintColor: "transparent", maximumTrackTintColor: "transparent", trackStyle: this.props.trackStyle, thumbStyle: [
                            styles.thumb,
                            this.props.thumbStyle,
                            { backgroundColor: this.props.thumbTintColor }
                        ], disabled: this.props.disabled }))));
        };
        PickerSlider.prototype.onChange = function (value) {
            this.isSliding = true;
            this.props.onValueChange(value);
        };
        PickerSlider.prototype.onSlidingComplete = function () {
            this.isSliding = false;
            this.props.onValueChangeComplete();
        };
        PickerSlider.prototype.onTap = function (event) {
            var _this = this;
            if (!this.viewRef.current || this.props.disabled) {
                return;
            }
            var _a = this.props, step = _a.step, maximumValue = _a.maximumValue, minimumValue = _a.minimumValue;
            this.viewRef.current.measure(function (_x, _y, width) {
                if (_this.isSliding) {
                    return;
                }
                var positionFraction = event.nativeEvent.locationX / width;
                var value = (maximumValue || 1) * positionFraction;
                var roundedValue = _this.roundToMultiple(value, step);
                if (roundedValue >= (minimumValue || 0) && roundedValue <= (maximumValue || 1)) {
                    _this.props.onValueChange(roundedValue);
                    _this.props.onValueChangeComplete();
                }
            });
        };
        return PickerSlider;
    }(react_1.Component));
    exports.PickerSlider = PickerSlider;
    var styles = react_native_1.StyleSheet.create({
        container: {
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "stretch",
            height: 32
        },
        thumb: react_native_1.Platform.select({
            ios: {
                width: 24,
                height: 24,
                borderRadius: 12
            },
            default: {
                width: 20,
                height: 20,
                borderRadius: 10,
                elevation: 3
            }
        }),
        gradient: {
            position: "absolute",
            left: 0,
            right: 0,
            height: 6
        }
    });
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),

/***/ "../../../packages-native/color-picker/src/ui/Styles.ts":
/*!***************************************************************************************************************!*\
  !*** /Users/diego.antonelli/Desktop/projects/widgets-resources/packages-native/color-picker/src/ui/Styles.ts ***!
  \***************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.defaultColorPickerStyle = {
        container: {},
        preview: {
            borderRadius: 5,
            minHeight: 50
        }
    };
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),

/***/ "../../../packages-native/util-widgets/dist/index.js":
/*!************************************************************************************************************!*\
  !*** /Users/diego.antonelli/Desktop/projects/widgets-resources/packages-native/util-widgets/dist/index.js ***!
  \************************************************************************************************************/
/*! exports provided: flattenStyles, only, exclude, available, toNumber, unavailable, dynamicValue, actionValue, EditableValueBuilder */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles */ "../../../packages-native/util-widgets/dist/styles.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "flattenStyles", function() { return _styles__WEBPACK_IMPORTED_MODULE_0__["flattenStyles"]; });

/* harmony import */ var _objectFilters__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./objectFilters */ "../../../packages-native/util-widgets/dist/objectFilters.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "only", function() { return _objectFilters__WEBPACK_IMPORTED_MODULE_1__["only"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "exclude", function() { return _objectFilters__WEBPACK_IMPORTED_MODULE_1__["exclude"]; });

/* harmony import */ var _properties__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./properties */ "../../../packages-native/util-widgets/dist/properties.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "available", function() { return _properties__WEBPACK_IMPORTED_MODULE_2__["available"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "toNumber", function() { return _properties__WEBPACK_IMPORTED_MODULE_2__["toNumber"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "unavailable", function() { return _properties__WEBPACK_IMPORTED_MODULE_2__["unavailable"]; });

/* harmony import */ var _test__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./test */ "../../../packages-native/util-widgets/dist/test.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "dynamicValue", function() { return _test__WEBPACK_IMPORTED_MODULE_3__["dynamicValue"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "actionValue", function() { return _test__WEBPACK_IMPORTED_MODULE_3__["actionValue"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "EditableValueBuilder", function() { return _test__WEBPACK_IMPORTED_MODULE_3__["EditableValueBuilder"]; });






/***/ }),

/***/ "../../../packages-native/util-widgets/dist/objectFilters.js":
/*!********************************************************************************************************************!*\
  !*** /Users/diego.antonelli/Desktop/projects/widgets-resources/packages-native/util-widgets/dist/objectFilters.js ***!
  \********************************************************************************************************************/
/*! exports provided: exclude, only */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "exclude", function() { return exclude; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "only", function() { return only; });
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

function exclude(source, exclusionKeys) {
  var keys = Object.keys(source);
  return keys.filter(function (key) {
    return exclusionKeys.findIndex(function (k) {
      return k === key;
    }) === -1;
  }).reduce(function (result, key) {
    return Object.assign(Object.assign({}, result), _defineProperty({}, key, source[key]));
  }, {});
}
function only(source, selectionKeys) {
  return selectionKeys.filter(function (key) {
    return source[key] !== undefined;
  }).reduce(function (result, key) {
    return Object.assign(Object.assign({}, result), _defineProperty({}, key, source[key]));
  }, {});
}

/***/ }),

/***/ "../../../packages-native/util-widgets/dist/properties.js":
/*!*****************************************************************************************************************!*\
  !*** /Users/diego.antonelli/Desktop/projects/widgets-resources/packages-native/util-widgets/dist/properties.js ***!
  \*****************************************************************************************************************/
/*! exports provided: available, unavailable, toNumber */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "available", function() { return available; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "unavailable", function() { return unavailable; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toNumber", function() { return toNumber; });
function available(property) {
  return property.status === "available" && property.value != null;
}
function unavailable(property) {
  return property.status === "unavailable" || property.status === "available" && property.value == null;
}
function toNumber(property) {
  return available(property) ? Number(property.value) : undefined;
}

/***/ }),

/***/ "../../../packages-native/util-widgets/dist/styles.js":
/*!*************************************************************************************************************!*\
  !*** /Users/diego.antonelli/Desktop/projects/widgets-resources/packages-native/util-widgets/dist/styles.js ***!
  \*************************************************************************************************************/
/*! exports provided: flattenStyles */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "flattenStyles", function() { return flattenStyles; });
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

function _toConsumableArray(arr) {
  return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
}

function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(n);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}

function _iterableToArray(iter) {
  if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter);
}

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) return _arrayLikeToArray(arr);
}

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }

  return arr2;
}

function flattenStyles(defaultStyle, overrideStyles) {
  var styles = [defaultStyle].concat(_toConsumableArray(overrideStyles.filter(function (object) {
    return object !== undefined;
  })));
  return Object.keys(defaultStyle).reduce(function (flattened, currentKey) {
    var styleItems = styles.map(function (object) {
      return object[currentKey];
    });
    return Object.assign(Object.assign({}, flattened), _defineProperty({}, currentKey, flattenObjects(styleItems)));
  }, {});
}

function flattenObjects(objects) {
  return objects.reduce(function (merged, object) {
    return Object.assign(Object.assign({}, merged), object);
  }, {});
}

/***/ }),

/***/ "../../../packages-native/util-widgets/dist/test.js":
/*!***********************************************************************************************************!*\
  !*** /Users/diego.antonelli/Desktop/projects/widgets-resources/packages-native/util-widgets/dist/test.js ***!
  \***********************************************************************************************************/
/*! exports provided: dynamicValue, actionValue, EditableValueBuilder */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dynamicValue", function() { return dynamicValue; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "actionValue", function() { return actionValue; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditableValueBuilder", function() { return EditableValueBuilder; });
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

function dynamicValue(value, loading) {
  if (loading) {
    return {
      status: "loading",
      value: value
    };
  }

  return value ? {
    status: "available",
    value: value
  } : {
    status: "unavailable",
    value: undefined
  };
}
function actionValue() {
  var canExecute = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
  var isExecuting = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
  return {
    canExecute: canExecute,
    isExecuting: isExecuting,
    execute: jest.fn()
  };
}
var EditableValueBuilder = /*#__PURE__*/function () {
  function EditableValueBuilder() {
    var _this = this;

    _classCallCheck(this, EditableValueBuilder);

    this.editableValue = {
      value: undefined,
      displayValue: "",
      status: "available",
      validation: undefined,
      readOnly: false,
      formatter: {
        format: jest.fn(function (name) {
          return "Formatted ".concat(name);
        }),
        parse: jest.fn(),
        getFormatPlaceholder: jest.fn()
      },
      setValidator: jest.fn(),
      setValue: jest.fn(function (value) {
        return _this.withValue(value);
      }),
      setTextValue: jest.fn(),
      setFormatter: jest.fn()
    };
  }

  _createClass(EditableValueBuilder, [{
    key: "withValue",
    value: function withValue(value) {
      this.editableValue.value = value;
      this.editableValue.displayValue = this.editableValue.formatter.format(value);
      return this;
    }
  }, {
    key: "isReadOnly",
    value: function isReadOnly() {
      this.editableValue.readOnly = true;
      return this;
    }
  }, {
    key: "isLoading",
    value: function isLoading() {
      this.editableValue.status = "loading";
      return this.isReadOnly();
    }
  }, {
    key: "isUnavailable",
    value: function isUnavailable() {
      this.editableValue.status = "unavailable";
      return this.isReadOnly();
    }
  }, {
    key: "withValidation",
    value: function withValidation(validation) {
      this.editableValue.validation = validation;
      return this;
    }
  }, {
    key: "withUniverse",
    value: function withUniverse() {
      for (var _len = arguments.length, values = new Array(_len), _key = 0; _key < _len; _key++) {
        values[_key] = arguments[_key];
      }

      this.editableValue.universe = values;
      return this;
    }
  }, {
    key: "build",
    value: function build() {
      return this.editableValue;
    }
  }]);

  return EditableValueBuilder;
}();

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
//# sourceMappingURL=ColorPicker.js.map