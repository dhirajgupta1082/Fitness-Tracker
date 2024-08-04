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
/******/ 	return __webpack_require__(__webpack_require__.s = "../../../packages-native/animation/src/Animation.tsx");
/******/ })
/************************************************************************/
/******/ ({

/***/ "../../../node_modules/classnames/index.js":
/*!**************************************************************************************************!*\
  !*** /Users/diego.antonelli/Desktop/projects/widgets-resources/node_modules/classnames/index.js ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

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


function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

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


function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

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


function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

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

/***/ "../../../node_modules/react-native-animatable/createAnimatableComponent.js":
/*!***********************************************************************************************************************************!*\
  !*** /Users/diego.antonelli/Desktop/projects/widgets-resources/node_modules/react-native-animatable/createAnimatableComponent.js ***!
  \***********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return createAnimatableComponent; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "../../../node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_native__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-native */ "react-native");
/* harmony import */ var react_native__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_native__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wrapStyleTransforms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./wrapStyleTransforms */ "../../../node_modules/react-native-animatable/wrapStyleTransforms.js");
/* harmony import */ var _getStyleValues__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./getStyleValues */ "../../../node_modules/react-native-animatable/getStyleValues.js");
/* harmony import */ var _flattenStyle__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./flattenStyle */ "../../../node_modules/react-native-animatable/flattenStyle.js");
/* harmony import */ var _createAnimation__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./createAnimation */ "../../../node_modules/react-native-animatable/createAnimation.js");
/* harmony import */ var _registry__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./registry */ "../../../node_modules/react-native-animatable/registry.js");
/* harmony import */ var _easing__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./easing */ "../../../node_modules/react-native-animatable/easing.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }









 // These styles are not number based and thus needs to be interpolated

var INTERPOLATION_STYLE_PROPERTIES = [// Transform styles
'rotate', 'rotateX', 'rotateY', 'rotateZ', 'skewX', 'skewY', 'transformMatrix', // View styles
'backgroundColor', 'borderColor', 'borderTopColor', 'borderRightColor', 'borderBottomColor', 'borderLeftColor', 'shadowColor', // Text styles
'color', 'textDecorationColor', // Image styles
'tintColor'];
var ZERO_CLAMPED_STYLE_PROPERTIES = ['width', 'height']; // Create a copy of `source` without `keys`

function omit(keys, source) {
  var filtered = {};
  Object.keys(source).forEach(function (key) {
    if (keys.indexOf(key) === -1) {
      filtered[key] = source[key];
    }
  });
  return filtered;
} // Yes it's absurd, but actually fast


function deepEquals(a, b) {
  return a === b || JSON.stringify(a) === JSON.stringify(b);
} // Determine to what value the animation should tween to


function getAnimationTarget(iteration, direction) {
  switch (direction) {
    case 'reverse':
      return 0;

    case 'alternate':
      return iteration % 2 ? 0 : 1;

    case 'alternate-reverse':
      return iteration % 2 ? 1 : 0;

    case 'normal':
    default:
      return 1;
  }
} // Like getAnimationTarget but opposite


function getAnimationOrigin(iteration, direction) {
  return getAnimationTarget(iteration, direction) ? 0 : 1;
}

function getCompiledAnimation(animation) {
  if (typeof animation === 'string') {
    var compiledAnimation = Object(_registry__WEBPACK_IMPORTED_MODULE_7__["getAnimationByName"])(animation);

    if (!compiledAnimation) {
      throw new Error("No animation registred by the name of ".concat(animation));
    }

    return compiledAnimation;
  }

  return Object(_createAnimation__WEBPACK_IMPORTED_MODULE_6__["default"])(animation);
}

function makeInterpolatedStyle(compiledAnimation, animationValue) {
  var style = {};
  Object.keys(compiledAnimation).forEach(function (key) {
    if (key === 'style') {
      Object.assign(style, compiledAnimation.style);
    } else if (key !== 'easing') {
      style[key] = animationValue.interpolate(compiledAnimation[key]);
    }
  });
  return Object(_wrapStyleTransforms__WEBPACK_IMPORTED_MODULE_3__["default"])(style);
}

function transitionToValue(property, transitionValue, toValue, duration, easing) {
  var useNativeDriver = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : false;
  var delay = arguments.length > 6 ? arguments[6] : undefined;
  var onTransitionBegin = arguments.length > 7 ? arguments[7] : undefined;
  var onTransitionEnd = arguments.length > 8 ? arguments[8] : undefined;
  var animation = duration || easing || delay ? react_native__WEBPACK_IMPORTED_MODULE_2__["Animated"].timing(transitionValue, {
    toValue: toValue,
    delay: delay,
    duration: duration || 1000,
    easing: typeof easing === 'function' ? easing : _easing__WEBPACK_IMPORTED_MODULE_8__["default"][easing || 'ease'],
    useNativeDriver: useNativeDriver
  }) : react_native__WEBPACK_IMPORTED_MODULE_2__["Animated"].spring(transitionValue, {
    toValue: toValue,
    useNativeDriver: useNativeDriver
  });
  setTimeout(function () {
    return onTransitionBegin(property);
  }, delay);
  animation.start(function () {
    return onTransitionEnd(property);
  });
} // Make (almost) any component animatable, similar to Animated.createAnimatedComponent


function createAnimatableComponent(WrappedComponent) {
  var _class, _temp;

  var wrappedComponentName = WrappedComponent.displayName || WrappedComponent.name || 'Component';
  var Animatable = react_native__WEBPACK_IMPORTED_MODULE_2__["Animated"].createAnimatedComponent(WrappedComponent);
  return _temp = _class = /*#__PURE__*/function (_Component) {
    _inherits(AnimatableComponent, _Component);

    var _super = _createSuper(AnimatableComponent);

    function AnimatableComponent(props) {
      var _this;

      _classCallCheck(this, AnimatableComponent);

      _this = _super.call(this, props);
      _this.ref = null;

      _this.handleRef = function (ref) {
        _this.ref = ref;
      };

      var animationValue = new react_native__WEBPACK_IMPORTED_MODULE_2__["Animated"].Value(getAnimationOrigin(0, _this.props.direction));
      var animationStyle = {};
      var compiledAnimation = {};

      if (props.animation) {
        compiledAnimation = getCompiledAnimation(props.animation);
        animationStyle = makeInterpolatedStyle(compiledAnimation, animationValue);
      }

      _this.state = {
        animationValue: animationValue,
        animationStyle: animationStyle,
        compiledAnimation: compiledAnimation,
        transitionStyle: {},
        transitionValues: {},
        currentTransitionValues: {}
      };

      if (props.transition) {
        _this.state = _objectSpread(_objectSpread({}, _this.state), _this.initializeTransitionState(props.transition));
      }

      _this.delayTimer = null; // Alias registered animations for backwards compatibility

      Object(_registry__WEBPACK_IMPORTED_MODULE_7__["getAnimationNames"])().forEach(function (animationName) {
        if (!(animationName in _assertThisInitialized(_this))) {
          _this[animationName] = _this.animate.bind(_assertThisInitialized(_this), animationName);
        }
      });
      return _this;
    }

    _createClass(AnimatableComponent, [{
      key: "initializeTransitionState",
      value: function initializeTransitionState(transitionKeys) {
        var transitionValues = {};
        var styleValues = {};
        var currentTransitionValues = Object(_getStyleValues__WEBPACK_IMPORTED_MODULE_4__["default"])(transitionKeys, this.props.style);
        Object.keys(currentTransitionValues).forEach(function (key) {
          var value = currentTransitionValues[key];

          if (INTERPOLATION_STYLE_PROPERTIES.indexOf(key) !== -1 || typeof value !== 'number') {
            transitionValues[key] = new react_native__WEBPACK_IMPORTED_MODULE_2__["Animated"].Value(0);
            styleValues[key] = value;
          } else {
            var animationValue = new react_native__WEBPACK_IMPORTED_MODULE_2__["Animated"].Value(value);
            transitionValues[key] = animationValue;
            styleValues[key] = animationValue;
          }
        });
        return {
          currentTransitionValues: currentTransitionValues,
          transitionStyle: styleValues,
          transitionValues: transitionValues
        };
      }
    }, {
      key: "getTransitionState",
      value: function getTransitionState(keys) {
        var _this2 = this;

        var transitionKeys = typeof keys === 'string' ? [keys] : keys;
        var _this$state = this.state,
            transitionValues = _this$state.transitionValues,
            currentTransitionValues = _this$state.currentTransitionValues,
            transitionStyle = _this$state.transitionStyle;
        var missingKeys = transitionKeys.filter(function (key) {
          return !_this2.state.transitionValues[key];
        });

        if (missingKeys.length) {
          var transitionState = this.initializeTransitionState(missingKeys);
          transitionValues = _objectSpread(_objectSpread({}, transitionValues), transitionState.transitionValues);
          currentTransitionValues = _objectSpread(_objectSpread({}, currentTransitionValues), transitionState.currentTransitionValues);
          transitionStyle = _objectSpread(_objectSpread({}, transitionStyle), transitionState.transitionStyle);
        }

        return {
          transitionValues: transitionValues,
          currentTransitionValues: currentTransitionValues,
          transitionStyle: transitionStyle
        };
      }
    }, {
      key: "setNativeProps",
      value: function setNativeProps(nativeProps) {
        if (this.ref) {
          this.ref.setNativeProps(nativeProps);
        }
      }
    }, {
      key: "componentDidMount",
      value: function componentDidMount() {
        var _this3 = this;

        var _this$props = this.props,
            animation = _this$props.animation,
            duration = _this$props.duration,
            delay = _this$props.delay,
            onAnimationBegin = _this$props.onAnimationBegin,
            iterationDelay = _this$props.iterationDelay;

        if (animation) {
          var startAnimation = function startAnimation() {
            onAnimationBegin();

            _this3.startAnimation(duration, 0, iterationDelay, function (endState) {
              return _this3.props.onAnimationEnd(endState);
            });

            _this3.delayTimer = null;
          };

          if (delay) {
            this.delayTimer = setTimeout(startAnimation, delay);
          } else {
            startAnimation();
          }
        }
      } // eslint-disable-next-line camelcase

    }, {
      key: "UNSAFE_componentWillReceiveProps",
      value: function UNSAFE_componentWillReceiveProps(props) {
        var _this4 = this;

        var animation = props.animation,
            delay = props.delay,
            duration = props.duration,
            easing = props.easing,
            iterationDelay = props.iterationDelay,
            transition = props.transition,
            onAnimationBegin = props.onAnimationBegin;

        if (transition) {
          var values = Object(_getStyleValues__WEBPACK_IMPORTED_MODULE_4__["default"])(transition, props.style);
          this.transitionTo(values, duration, easing, delay);
        } else if (!deepEquals(animation, this.props.animation)) {
          if (animation) {
            if (this.delayTimer) {
              this.setAnimation(animation);
            } else {
              onAnimationBegin();
              this.animate(animation, duration, iterationDelay).then(function (endState) {
                return _this4.props.onAnimationEnd(endState);
              });
            }
          } else {
            this.stopAnimation();
          }
        }
      }
    }, {
      key: "componentWillUnmount",
      value: function componentWillUnmount() {
        if (this.delayTimer) {
          clearTimeout(this.delayTimer);
        }
      }
    }, {
      key: "setAnimation",
      value: function setAnimation(animation, callback) {
        var compiledAnimation = getCompiledAnimation(animation);
        this.setState(function (state) {
          return {
            animationStyle: makeInterpolatedStyle(compiledAnimation, state.animationValue),
            compiledAnimation: compiledAnimation
          };
        }, callback);
      }
    }, {
      key: "animate",
      value: function animate(animation, duration, iterationDelay) {
        var _this5 = this;

        return new Promise(function (resolve) {
          _this5.setAnimation(animation, function () {
            _this5.startAnimation(duration, 0, iterationDelay, resolve);
          });
        });
      }
    }, {
      key: "stopAnimation",
      value: function stopAnimation() {
        this.setState({
          scheduledAnimation: false,
          animationStyle: {}
        });
        this.state.animationValue.stopAnimation();

        if (this.delayTimer) {
          clearTimeout(this.delayTimer);
          this.delayTimer = null;
        }
      }
    }, {
      key: "startAnimation",
      value: function startAnimation(duration, iteration, iterationDelay, callback) {
        var _this6 = this;

        var _this$state2 = this.state,
            animationValue = _this$state2.animationValue,
            compiledAnimation = _this$state2.compiledAnimation;
        var _this$props2 = this.props,
            direction = _this$props2.direction,
            iterationCount = _this$props2.iterationCount,
            useNativeDriver = _this$props2.useNativeDriver;
        var easing = this.props.easing || compiledAnimation.easing || 'ease';
        var currentIteration = iteration || 0;
        var fromValue = getAnimationOrigin(currentIteration, direction);
        var toValue = getAnimationTarget(currentIteration, direction);
        animationValue.setValue(fromValue);

        if (typeof easing === 'string') {
          easing = _easing__WEBPACK_IMPORTED_MODULE_8__["default"][easing];
        } // Reverse easing if on the way back


        var reversed = direction === 'reverse' || direction === 'alternate' && !toValue || direction === 'alternate-reverse' && !toValue;

        if (reversed) {
          easing = react_native__WEBPACK_IMPORTED_MODULE_2__["Easing"].out(easing);
        }

        var config = {
          toValue: toValue,
          easing: easing,
          isInteraction: iterationCount <= 1,
          duration: duration || this.props.duration || 1000,
          useNativeDriver: useNativeDriver,
          delay: iterationDelay || 0
        };
        react_native__WEBPACK_IMPORTED_MODULE_2__["Animated"].timing(animationValue, config).start(function (endState) {
          currentIteration += 1;

          if (endState.finished && _this6.props.animation && (iterationCount === 'infinite' || currentIteration < iterationCount)) {
            _this6.startAnimation(duration, currentIteration, iterationDelay, callback);
          } else if (callback) {
            callback(endState);
          }
        });
      }
    }, {
      key: "transition",
      value: function transition(fromValues, toValues, duration, easing) {
        var _this7 = this;

        var fromValuesFlat = Object(_flattenStyle__WEBPACK_IMPORTED_MODULE_5__["default"])(fromValues);
        var toValuesFlat = Object(_flattenStyle__WEBPACK_IMPORTED_MODULE_5__["default"])(toValues);
        var transitionKeys = Object.keys(toValuesFlat);

        var _this$getTransitionSt = this.getTransitionState(transitionKeys),
            transitionValues = _this$getTransitionSt.transitionValues,
            currentTransitionValues = _this$getTransitionSt.currentTransitionValues,
            transitionStyle = _this$getTransitionSt.transitionStyle;

        transitionKeys.forEach(function (property) {
          var fromValue = fromValuesFlat[property];
          var toValue = toValuesFlat[property];
          var transitionValue = transitionValues[property];

          if (!transitionValue) {
            transitionValue = new react_native__WEBPACK_IMPORTED_MODULE_2__["Animated"].Value(0);
          }

          var needsInterpolation = INTERPOLATION_STYLE_PROPERTIES.indexOf(property) !== -1 || typeof value !== 'number';
          var needsZeroClamping = ZERO_CLAMPED_STYLE_PROPERTIES.indexOf(property) !== -1;

          if (needsInterpolation) {
            transitionValue.setValue(0);
            transitionStyle[property] = transitionValue.interpolate({
              inputRange: [0, 1],
              outputRange: [fromValue, toValue]
            });
            currentTransitionValues[property] = toValue;
            toValuesFlat[property] = 1;
          } else {
            if (needsZeroClamping) {
              transitionStyle[property] = transitionValue.interpolate({
                inputRange: [0, 1],
                outputRange: [0, 1],
                extrapolateLeft: 'clamp'
              });
              currentTransitionValues[property] = toValue;
            } else {
              transitionStyle[property] = transitionValue;
            }

            transitionValue.setValue(fromValue);
          }
        });
        this.setState({
          transitionValues: transitionValues,
          transitionStyle: transitionStyle,
          currentTransitionValues: currentTransitionValues
        }, function () {
          _this7.transitionToValues(toValuesFlat, duration || _this7.props.duration, easing, _this7.props.delay);
        });
      }
    }, {
      key: "transitionTo",
      value: function transitionTo(toValues, duration, easing, delay) {
        var _this8 = this;

        var currentTransitionValues = this.state.currentTransitionValues;
        var toValuesFlat = Object(_flattenStyle__WEBPACK_IMPORTED_MODULE_5__["default"])(toValues);
        var transitions = {
          from: {},
          to: {}
        };
        Object.keys(toValuesFlat).forEach(function (property) {
          var toValue = toValuesFlat[property];
          var needsInterpolation = INTERPOLATION_STYLE_PROPERTIES.indexOf(property) !== -1 || typeof value !== 'number';
          var needsZeroClamping = ZERO_CLAMPED_STYLE_PROPERTIES.indexOf(property) !== -1;
          var transitionStyle = _this8.state.transitionStyle[property];
          var transitionValue = _this8.state.transitionValues[property];

          if (!needsInterpolation && !needsZeroClamping && transitionStyle && transitionStyle === transitionValue) {
            transitionToValue(property, transitionValue, toValue, duration, easing, _this8.props.useNativeDriver, delay, function (prop) {
              return _this8.props.onTransitionBegin(prop);
            }, function (prop) {
              return _this8.props.onTransitionEnd(prop);
            });
          } else {
            var currentTransitionValue = currentTransitionValues[property];

            if (typeof currentTransitionValue === 'undefined' && _this8.props.style) {
              var style = Object(_getStyleValues__WEBPACK_IMPORTED_MODULE_4__["default"])(property, _this8.props.style);
              currentTransitionValue = style[property];
            }

            transitions.from[property] = currentTransitionValue;
            transitions.to[property] = toValue;
          }
        });

        if (Object.keys(transitions.from).length) {
          this.transition(transitions.from, transitions.to, duration, easing);
        }
      }
    }, {
      key: "transitionToValues",
      value: function transitionToValues(toValues, duration, easing, delay) {
        var _this9 = this;

        Object.keys(toValues).forEach(function (property) {
          var transitionValue = _this9.state.transitionValues[property];
          var toValue = toValues[property];
          transitionToValue(property, transitionValue, toValue, duration, easing, _this9.props.useNativeDriver, delay, function (prop) {
            return _this9.props.onTransitionBegin(prop);
          }, function (prop) {
            return _this9.props.onTransitionEnd(prop);
          });
        });
      }
    }, {
      key: "render",
      value: function render() {
        var _this$props3 = this.props,
            style = _this$props3.style,
            animation = _this$props3.animation,
            transition = _this$props3.transition;

        if (animation && transition) {
          throw new Error('You cannot combine animation and transition props');
        }

        var restProps = omit(['animation', 'duration', 'direction', 'delay', 'easing', 'iterationCount', 'iterationDelay', 'onAnimationBegin', 'onAnimationEnd', 'onTransitionBegin', 'onTransitionEnd', 'style', 'transition', 'useNativeDriver'], this.props);
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Animatable, _extends({
          ref: this.handleRef,
          style: [style, this.state.animationStyle, Object(_wrapStyleTransforms__WEBPACK_IMPORTED_MODULE_3__["default"])(this.state.transitionStyle)]
        }, restProps));
      }
    }]);

    return AnimatableComponent;
  }(react__WEBPACK_IMPORTED_MODULE_0__["Component"]), _class.displayName = "withAnimatable(".concat(wrappedComponentName, ")"), _class.propTypes = {
    animation: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object]),
    duration: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number,
    direction: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOf(['normal', 'reverse', 'alternate', 'alternate-reverse']),
    delay: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number,
    easing: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOf(Object.keys(_easing__WEBPACK_IMPORTED_MODULE_8__["default"])), prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func]),
    iterationCount: function iterationCount(props, propName) {
      var val = props[propName];

      if (val !== 'infinite' && !(typeof val === 'number' && val >= 1)) {
        return new Error('iterationCount must be a positive number or "infinite"');
      }

      return null;
    },
    iterationDelay: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number,
    onAnimationBegin: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,
    onAnimationEnd: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,
    onTransitionBegin: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,
    onTransitionEnd: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,
    style: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number, prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.array, prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object]),
    transition: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string)]),
    useNativeDriver: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool
  }, _class.defaultProps = {
    animation: undefined,
    delay: 0,
    direction: 'normal',
    duration: undefined,
    easing: undefined,
    iterationCount: 1,
    iterationDelay: 0,
    onAnimationBegin: function onAnimationBegin() {},
    onAnimationEnd: function onAnimationEnd() {},
    onTransitionBegin: function onTransitionBegin() {},
    onTransitionEnd: function onTransitionEnd() {},
    style: undefined,
    transition: undefined,
    useNativeDriver: false
  }, _temp;
}

/***/ }),

/***/ "../../../node_modules/react-native-animatable/createAnimation.js":
/*!*************************************************************************************************************************!*\
  !*** /Users/diego.antonelli/Desktop/projects/widgets-resources/node_modules/react-native-animatable/createAnimation.js ***!
  \*************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return createAnimation; });
/* harmony import */ var _flattenStyle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./flattenStyle */ "../../../node_modules/react-native-animatable/flattenStyle.js");


function compareNumbers(a, b) {
  return a - b;
}

function notNull(value) {
  return value !== null;
}

function parsePosition(value) {
  if (value === 'from') {
    return 0;
  }

  if (value === 'to') {
    return 1;
  }

  var parsed = parseFloat(value, 10);

  if (Number.isNaN(parsed) || parsed < 0 || parsed > 1) {
    return null;
  }

  return parsed;
}

var cache = {};
function createAnimation(definition) {
  var cacheKey = JSON.stringify(definition);

  if (cache[cacheKey]) {
    return cache[cacheKey];
  }

  var positions = Object.keys(definition).map(parsePosition).filter(notNull);
  positions.sort(compareNumbers);

  if (positions.length < 2) {
    throw new Error('Animation definitions must have at least two values.');
  }

  var compiled = {};

  if (definition.easing) {
    compiled.easing = definition.easing;
  }

  if (definition.style) {
    compiled.style = definition.style;
  }

  var _loop = function _loop(i) {
    var position = positions[i];
    var keyframe = definition[position];

    if (!keyframe) {
      if (position === 0) {
        keyframe = definition.from;
      } else if (position === 1) {
        keyframe = definition.to;
      }
    }

    if (!keyframe) {
      throw new Error('Missing animation keyframe, this should not happen');
    }

    keyframe = Object(_flattenStyle__WEBPACK_IMPORTED_MODULE_0__["default"])(keyframe);
    Object.keys(keyframe).forEach(function (key) {
      if (!(key in compiled)) {
        compiled[key] = {
          inputRange: [],
          outputRange: []
        };
      }

      compiled[key].inputRange.push(position);
      compiled[key].outputRange.push(keyframe[key]);
    });
  };

  for (var i = 0; i < positions.length; i += 1) {
    _loop(i);
  }

  cache[cacheKey] = compiled;
  return compiled;
}

/***/ }),

/***/ "../../../node_modules/react-native-animatable/definitions/attention-seekers.js":
/*!***************************************************************************************************************************************!*\
  !*** /Users/diego.antonelli/Desktop/projects/widgets-resources/node_modules/react-native-animatable/definitions/attention-seekers.js ***!
  \***************************************************************************************************************************************/
/*! exports provided: bounce, flash, jello, pulse, rotate, shake, swing, rubberBand, tada, wobble */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "bounce", function() { return bounce; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "flash", function() { return flash; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "jello", function() { return jello; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pulse", function() { return pulse; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "rotate", function() { return rotate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "shake", function() { return shake; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "swing", function() { return swing; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "rubberBand", function() { return rubberBand; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "tada", function() { return tada; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "wobble", function() { return wobble; });
var bounce = {
  0: {
    translateY: 0
  },
  0.2: {
    translateY: 0
  },
  0.4: {
    translateY: -30
  },
  0.43: {
    translateY: -30
  },
  0.53: {
    translateY: 0
  },
  0.7: {
    translateY: -15
  },
  0.8: {
    translateY: 0
  },
  0.9: {
    translateY: -4
  },
  1: {
    translateY: 0
  }
};
var flash = {
  0: {
    opacity: 1
  },
  0.25: {
    opacity: 0
  },
  0.5: {
    opacity: 1
  },
  0.75: {
    opacity: 0
  },
  1: {
    opacity: 1
  }
};
var jello = {
  0: {
    skewX: '0deg',
    skewY: '0deg'
  },
  0.111: {
    skewX: '0deg',
    skewY: '0deg'
  },
  0.222: {
    skewX: '-12.5deg',
    skewY: '-12.5deg'
  },
  0.333: {
    skewX: '6.25deg',
    skewY: '6.25deg'
  },
  0.444: {
    skewX: '-3.125deg',
    skewY: '-3.125deg'
  },
  0.555: {
    skewX: '1.5625deg',
    skewY: '1.5625deg'
  },
  0.666: {
    skewX: '-0.78125deg',
    skewY: '-0.78125deg'
  },
  0.777: {
    skewX: '0.390625deg',
    skewY: '0.390625deg'
  },
  0.888: {
    skewX: '-0.1953125deg',
    skewY: '-0.1953125deg'
  },
  1: {
    skewX: '0deg',
    skewY: '0deg'
  }
};
var pulse = {
  0: {
    scale: 1
  },
  0.5: {
    scale: 1.05
  },
  1: {
    scale: 1
  }
};
var rotate = {
  0: {
    rotate: '0deg'
  },
  0.25: {
    rotate: '90deg'
  },
  0.5: {
    rotate: '180deg'
  },
  0.75: {
    rotate: '270deg'
  },
  1: {
    rotate: '360deg'
  }
};
var shake = {
  0: {
    translateX: 0
  },
  0.1: {
    translateX: -10
  },
  0.2: {
    translateX: 10
  },
  0.3: {
    translateX: -10
  },
  0.4: {
    translateX: 10
  },
  0.5: {
    translateX: -10
  },
  0.6: {
    translateX: 10
  },
  0.7: {
    translateX: -10
  },
  0.8: {
    translateX: 10
  },
  0.9: {
    translateX: -10
  },
  1: {
    translateX: 0
  }
};
var swing = {
  0: {
    rotate: '0deg'
  },
  0.2: {
    rotate: '15deg'
  },
  0.4: {
    rotate: '-10deg'
  },
  0.6: {
    rotate: '5deg'
  },
  0.8: {
    rotate: '-5deg'
  },
  1: {
    rotate: '0deg'
  }
};
var rubberBand = {
  0: {
    scaleX: 1,
    scaleY: 1
  },
  0.3: {
    scaleX: 1.25,
    scaleY: 0.75
  },
  0.4: {
    scaleX: 0.75,
    scaleY: 1.25
  },
  0.5: {
    scaleX: 1.15,
    scaleY: 0.85
  },
  0.65: {
    scaleX: 0.95,
    scaleY: 1.05
  },
  0.75: {
    scaleX: 1.05,
    scaleY: 0.95
  },
  1: {
    scaleX: 1,
    scaleY: 1
  }
};
var tada = {
  0: {
    scale: 1,
    rotate: '0deg'
  },
  0.1: {
    scale: 0.9,
    rotate: '-3deg'
  },
  0.2: {
    scale: 0.9,
    rotate: '-3deg'
  },
  0.3: {
    scale: 1.1,
    rotate: '-3deg'
  },
  0.4: {
    rotate: '3deg'
  },
  0.5: {
    rotate: '-3deg'
  },
  0.6: {
    rotate: '3deg'
  },
  0.7: {
    rotate: '-3deg'
  },
  0.8: {
    rotate: '3deg'
  },
  0.9: {
    scale: 1.1,
    rotate: '3deg'
  },
  1: {
    scale: 1,
    rotate: '0deg'
  }
};
var wobble = {
  0: {
    translateX: 0,
    rotate: '0deg'
  },
  0.15: {
    translateX: -25,
    rotate: '-5deg'
  },
  0.3: {
    translateX: 20,
    rotate: '3deg'
  },
  0.45: {
    translateX: -15,
    rotate: '-3deg'
  },
  0.6: {
    translateX: 10,
    rotate: '2deg'
  },
  0.75: {
    translateX: -5,
    rotate: '-1deg'
  },
  1: {
    translateX: 0,
    rotate: '0deg'
  }
};

/***/ }),

/***/ "../../../node_modules/react-native-animatable/definitions/bouncing-entrances.js":
/*!****************************************************************************************************************************************!*\
  !*** /Users/diego.antonelli/Desktop/projects/widgets-resources/node_modules/react-native-animatable/definitions/bouncing-entrances.js ***!
  \****************************************************************************************************************************************/
/*! exports provided: bounceIn, bounceInUp, bounceInDown, bounceInRight, bounceInLeft */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "bounceIn", function() { return bounceIn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "bounceInUp", function() { return bounceInUp; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "bounceInDown", function() { return bounceInDown; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "bounceInRight", function() { return bounceInRight; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "bounceInLeft", function() { return bounceInLeft; });
var bounceIn = {
  0: {
    opacity: 0,
    scale: 0.3
  },
  0.2: {
    scale: 1.1
  },
  0.4: {
    scale: 0.9
  },
  0.6: {
    opacity: 1,
    scale: 1.03
  },
  0.8: {
    scale: 0.97
  },
  1: {
    opacity: 1,
    scale: 1
  }
};
var bounceInUp = {
  0: {
    opacity: 0,
    translateY: 800
  },
  0.6: {
    opacity: 1,
    translateY: -25
  },
  0.75: {
    translateY: 10
  },
  0.9: {
    translateY: -5
  },
  1: {
    translateY: 0
  }
};
var bounceInDown = {
  0: {
    opacity: 0,
    translateY: -800
  },
  0.6: {
    opacity: 1,
    translateY: 25
  },
  0.75: {
    translateY: -10
  },
  0.9: {
    translateY: 5
  },
  1: {
    translateY: 0
  }
};
var bounceInRight = {
  0: {
    opacity: 0,
    translateX: 600
  },
  0.6: {
    opacity: 1,
    translateX: -20
  },
  0.75: {
    translateX: 8
  },
  0.9: {
    translateX: -4
  },
  1: {
    translateX: 0
  }
};
var bounceInLeft = {
  0: {
    opacity: 0,
    translateX: -600
  },
  0.6: {
    opacity: 1,
    translateX: 20
  },
  0.75: {
    translateX: -8
  },
  0.9: {
    translateX: 4
  },
  1: {
    translateX: 0
  }
};

/***/ }),

/***/ "../../../node_modules/react-native-animatable/definitions/bouncing-exits.js":
/*!************************************************************************************************************************************!*\
  !*** /Users/diego.antonelli/Desktop/projects/widgets-resources/node_modules/react-native-animatable/definitions/bouncing-exits.js ***!
  \************************************************************************************************************************************/
/*! exports provided: bounceOut, bounceOutUp, bounceOutDown, bounceOutRight, bounceOutLeft */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "bounceOut", function() { return bounceOut; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "bounceOutUp", function() { return bounceOutUp; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "bounceOutDown", function() { return bounceOutDown; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "bounceOutRight", function() { return bounceOutRight; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "bounceOutLeft", function() { return bounceOutLeft; });
var bounceOut = {
  0: {
    opacity: 1,
    scale: 1
  },
  0.2: {
    scale: 0.9
  },
  0.5: {
    opacity: 1,
    scale: 1.11
  },
  0.55: {
    scale: 1.11
  },
  1: {
    opacity: 0,
    scale: 0.3
  }
};
var bounceOutUp = {
  0: {
    opacity: 1,
    translateY: 0
  },
  0.2: {
    opacity: 1,
    translateY: -10
  },
  0.4: {
    translateY: 20
  },
  0.45: {
    translateY: 20
  },
  0.55: {
    opacity: 1
  },
  1: {
    opacity: 0,
    translateY: -800
  }
};
var bounceOutDown = {
  0: {
    opacity: 1,
    translateY: 0
  },
  0.2: {
    opacity: 1,
    translateY: 10
  },
  0.4: {
    translateY: -20
  },
  0.45: {
    translateY: -20
  },
  0.55: {
    opacity: 1
  },
  1: {
    opacity: 0,
    translateY: 800
  }
};
var bounceOutRight = {
  0: {
    opacity: 1,
    translateX: 0
  },
  0.2: {
    opacity: 1,
    translateX: 10
  },
  0.4: {
    translateX: -20
  },
  0.45: {
    translateX: -20
  },
  0.55: {
    opacity: 1
  },
  1: {
    opacity: 0,
    translateX: 600
  }
};
var bounceOutLeft = {
  0: {
    opacity: 1,
    translateX: 0
  },
  0.2: {
    opacity: 1,
    translateX: -10
  },
  0.4: {
    translateX: 20
  },
  0.45: {
    translateX: 20
  },
  0.55: {
    opacity: 1
  },
  1: {
    opacity: 0,
    translateX: -600
  }
};

/***/ }),

/***/ "../../../node_modules/react-native-animatable/definitions/fading-entrances.js":
/*!**************************************************************************************************************************************!*\
  !*** /Users/diego.antonelli/Desktop/projects/widgets-resources/node_modules/react-native-animatable/definitions/fading-entrances.js ***!
  \**************************************************************************************************************************************/
/*! exports provided: fadeIn, fadeInDown, fadeInUp, fadeInLeft, fadeInRight, fadeInDownBig, fadeInUpBig, fadeInLeftBig, fadeInRightBig */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fadeIn", function() { return fadeIn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fadeInDown", function() { return fadeInDown; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fadeInUp", function() { return fadeInUp; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fadeInLeft", function() { return fadeInLeft; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fadeInRight", function() { return fadeInRight; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fadeInDownBig", function() { return fadeInDownBig; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fadeInUpBig", function() { return fadeInUpBig; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fadeInLeftBig", function() { return fadeInLeftBig; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fadeInRightBig", function() { return fadeInRightBig; });
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function makeFadeInTranslation(translationType, fromValue) {
  return {
    from: _defineProperty({
      opacity: 0
    }, translationType, fromValue),
    to: _defineProperty({
      opacity: 1
    }, translationType, 0)
  };
}

var fadeIn = {
  from: {
    opacity: 0
  },
  to: {
    opacity: 1
  }
};
var fadeInDown = makeFadeInTranslation('translateY', -100);
var fadeInUp = makeFadeInTranslation('translateY', 100);
var fadeInLeft = makeFadeInTranslation('translateX', -100);
var fadeInRight = makeFadeInTranslation('translateX', 100);
var fadeInDownBig = makeFadeInTranslation('translateY', -500);
var fadeInUpBig = makeFadeInTranslation('translateY', 500);
var fadeInLeftBig = makeFadeInTranslation('translateX', -500);
var fadeInRightBig = makeFadeInTranslation('translateX', 500);

/***/ }),

/***/ "../../../node_modules/react-native-animatable/definitions/fading-exits.js":
/*!**********************************************************************************************************************************!*\
  !*** /Users/diego.antonelli/Desktop/projects/widgets-resources/node_modules/react-native-animatable/definitions/fading-exits.js ***!
  \**********************************************************************************************************************************/
/*! exports provided: fadeOut, fadeOutDown, fadeOutUp, fadeOutLeft, fadeOutRight, fadeOutDownBig, fadeOutUpBig, fadeOutLeftBig, fadeOutRightBig */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fadeOut", function() { return fadeOut; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fadeOutDown", function() { return fadeOutDown; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fadeOutUp", function() { return fadeOutUp; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fadeOutLeft", function() { return fadeOutLeft; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fadeOutRight", function() { return fadeOutRight; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fadeOutDownBig", function() { return fadeOutDownBig; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fadeOutUpBig", function() { return fadeOutUpBig; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fadeOutLeftBig", function() { return fadeOutLeftBig; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fadeOutRightBig", function() { return fadeOutRightBig; });
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function makeFadeOutTranslation(translationType, toValue) {
  return {
    from: _defineProperty({
      opacity: 1
    }, translationType, 0),
    to: _defineProperty({
      opacity: 0
    }, translationType, toValue)
  };
}

var fadeOut = {
  from: {
    opacity: 1
  },
  to: {
    opacity: 0
  }
};
var fadeOutDown = makeFadeOutTranslation('translateY', 100);
var fadeOutUp = makeFadeOutTranslation('translateY', -100);
var fadeOutLeft = makeFadeOutTranslation('translateX', -100);
var fadeOutRight = makeFadeOutTranslation('translateX', 100);
var fadeOutDownBig = makeFadeOutTranslation('translateY', 500);
var fadeOutUpBig = makeFadeOutTranslation('translateY', -500);
var fadeOutLeftBig = makeFadeOutTranslation('translateX', -500);
var fadeOutRightBig = makeFadeOutTranslation('translateX', 500);

/***/ }),

/***/ "../../../node_modules/react-native-animatable/definitions/flippers.js":
/*!******************************************************************************************************************************!*\
  !*** /Users/diego.antonelli/Desktop/projects/widgets-resources/node_modules/react-native-animatable/definitions/flippers.js ***!
  \******************************************************************************************************************************/
/*! exports provided: flipInX, flipInY, flipOutX, flipOutY */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "flipInX", function() { return flipInX; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "flipInY", function() { return flipInY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "flipOutX", function() { return flipOutX; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "flipOutY", function() { return flipOutY; });
var flipInX = {
  easing: 'ease-in',
  style: {
    backfaceVisibility: 'visible',
    perspective: 400
  },
  0: {
    opacity: 0,
    rotateX: '90deg'
  },
  0.4: {
    rotateX: '-20deg'
  },
  0.6: {
    opacity: 1,
    rotateX: '10deg'
  },
  0.8: {
    rotateX: '-5deg'
  },
  1: {
    opacity: 1,
    rotateX: '0deg'
  }
};
var flipInY = {
  easing: 'ease-in',
  style: {
    backfaceVisibility: 'visible',
    perspective: 400
  },
  0: {
    opacity: 0,
    rotateY: '90deg'
  },
  0.4: {
    rotateY: '-20deg'
  },
  0.6: {
    opacity: 1,
    rotateY: '10deg'
  },
  0.8: {
    rotateY: '-5deg'
  },
  1: {
    opacity: 1,
    rotateY: '0deg'
  }
};
var flipOutX = {
  style: {
    backfaceVisibility: 'visible',
    perspective: 400
  },
  0: {
    opacity: 1,
    rotateX: '0deg'
  },
  0.3: {
    opacity: 1,
    rotateX: '-20deg'
  },
  1: {
    opacity: 0,
    rotateX: '90deg'
  }
};
var flipOutY = {
  style: {
    backfaceVisibility: 'visible',
    perspective: 400
  },
  0: {
    opacity: 1,
    rotateY: '0deg'
  },
  0.3: {
    opacity: 1,
    rotateY: '-20deg'
  },
  1: {
    opacity: 0,
    rotateY: '90deg'
  }
};

/***/ }),

/***/ "../../../node_modules/react-native-animatable/definitions/index.js":
/*!***************************************************************************************************************************!*\
  !*** /Users/diego.antonelli/Desktop/projects/widgets-resources/node_modules/react-native-animatable/definitions/index.js ***!
  \***************************************************************************************************************************/
/*! exports provided: bounce, flash, jello, pulse, rotate, shake, swing, rubberBand, tada, wobble, bounceIn, bounceInUp, bounceInDown, bounceInRight, bounceInLeft, bounceOut, bounceOutUp, bounceOutDown, bounceOutRight, bounceOutLeft, fadeIn, fadeInDown, fadeInUp, fadeInLeft, fadeInRight, fadeInDownBig, fadeInUpBig, fadeInLeftBig, fadeInRightBig, fadeOut, fadeOutDown, fadeOutUp, fadeOutLeft, fadeOutRight, fadeOutDownBig, fadeOutUpBig, fadeOutLeftBig, fadeOutRightBig, flipInX, flipInY, flipOutX, flipOutY, lightSpeedIn, lightSpeedOut, slideInDown, slideInUp, slideInLeft, slideInRight, slideOutDown, slideOutUp, slideOutLeft, slideOutRight, zoomIn, zoomInDown, zoomInUp, zoomInLeft, zoomInRight, zoomOut, zoomOutDown, zoomOutUp, zoomOutLeft, zoomOutRight */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _attention_seekers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./attention-seekers */ "../../../node_modules/react-native-animatable/definitions/attention-seekers.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "bounce", function() { return _attention_seekers__WEBPACK_IMPORTED_MODULE_0__["bounce"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "flash", function() { return _attention_seekers__WEBPACK_IMPORTED_MODULE_0__["flash"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "jello", function() { return _attention_seekers__WEBPACK_IMPORTED_MODULE_0__["jello"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "pulse", function() { return _attention_seekers__WEBPACK_IMPORTED_MODULE_0__["pulse"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "rotate", function() { return _attention_seekers__WEBPACK_IMPORTED_MODULE_0__["rotate"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "shake", function() { return _attention_seekers__WEBPACK_IMPORTED_MODULE_0__["shake"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "swing", function() { return _attention_seekers__WEBPACK_IMPORTED_MODULE_0__["swing"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "rubberBand", function() { return _attention_seekers__WEBPACK_IMPORTED_MODULE_0__["rubberBand"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "tada", function() { return _attention_seekers__WEBPACK_IMPORTED_MODULE_0__["tada"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "wobble", function() { return _attention_seekers__WEBPACK_IMPORTED_MODULE_0__["wobble"]; });

/* harmony import */ var _bouncing_entrances__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./bouncing-entrances */ "../../../node_modules/react-native-animatable/definitions/bouncing-entrances.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "bounceIn", function() { return _bouncing_entrances__WEBPACK_IMPORTED_MODULE_1__["bounceIn"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "bounceInUp", function() { return _bouncing_entrances__WEBPACK_IMPORTED_MODULE_1__["bounceInUp"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "bounceInDown", function() { return _bouncing_entrances__WEBPACK_IMPORTED_MODULE_1__["bounceInDown"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "bounceInRight", function() { return _bouncing_entrances__WEBPACK_IMPORTED_MODULE_1__["bounceInRight"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "bounceInLeft", function() { return _bouncing_entrances__WEBPACK_IMPORTED_MODULE_1__["bounceInLeft"]; });

/* harmony import */ var _bouncing_exits__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./bouncing-exits */ "../../../node_modules/react-native-animatable/definitions/bouncing-exits.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "bounceOut", function() { return _bouncing_exits__WEBPACK_IMPORTED_MODULE_2__["bounceOut"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "bounceOutUp", function() { return _bouncing_exits__WEBPACK_IMPORTED_MODULE_2__["bounceOutUp"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "bounceOutDown", function() { return _bouncing_exits__WEBPACK_IMPORTED_MODULE_2__["bounceOutDown"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "bounceOutRight", function() { return _bouncing_exits__WEBPACK_IMPORTED_MODULE_2__["bounceOutRight"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "bounceOutLeft", function() { return _bouncing_exits__WEBPACK_IMPORTED_MODULE_2__["bounceOutLeft"]; });

/* harmony import */ var _fading_entrances__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./fading-entrances */ "../../../node_modules/react-native-animatable/definitions/fading-entrances.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "fadeIn", function() { return _fading_entrances__WEBPACK_IMPORTED_MODULE_3__["fadeIn"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "fadeInDown", function() { return _fading_entrances__WEBPACK_IMPORTED_MODULE_3__["fadeInDown"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "fadeInUp", function() { return _fading_entrances__WEBPACK_IMPORTED_MODULE_3__["fadeInUp"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "fadeInLeft", function() { return _fading_entrances__WEBPACK_IMPORTED_MODULE_3__["fadeInLeft"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "fadeInRight", function() { return _fading_entrances__WEBPACK_IMPORTED_MODULE_3__["fadeInRight"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "fadeInDownBig", function() { return _fading_entrances__WEBPACK_IMPORTED_MODULE_3__["fadeInDownBig"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "fadeInUpBig", function() { return _fading_entrances__WEBPACK_IMPORTED_MODULE_3__["fadeInUpBig"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "fadeInLeftBig", function() { return _fading_entrances__WEBPACK_IMPORTED_MODULE_3__["fadeInLeftBig"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "fadeInRightBig", function() { return _fading_entrances__WEBPACK_IMPORTED_MODULE_3__["fadeInRightBig"]; });

/* harmony import */ var _fading_exits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./fading-exits */ "../../../node_modules/react-native-animatable/definitions/fading-exits.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "fadeOut", function() { return _fading_exits__WEBPACK_IMPORTED_MODULE_4__["fadeOut"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "fadeOutDown", function() { return _fading_exits__WEBPACK_IMPORTED_MODULE_4__["fadeOutDown"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "fadeOutUp", function() { return _fading_exits__WEBPACK_IMPORTED_MODULE_4__["fadeOutUp"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "fadeOutLeft", function() { return _fading_exits__WEBPACK_IMPORTED_MODULE_4__["fadeOutLeft"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "fadeOutRight", function() { return _fading_exits__WEBPACK_IMPORTED_MODULE_4__["fadeOutRight"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "fadeOutDownBig", function() { return _fading_exits__WEBPACK_IMPORTED_MODULE_4__["fadeOutDownBig"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "fadeOutUpBig", function() { return _fading_exits__WEBPACK_IMPORTED_MODULE_4__["fadeOutUpBig"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "fadeOutLeftBig", function() { return _fading_exits__WEBPACK_IMPORTED_MODULE_4__["fadeOutLeftBig"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "fadeOutRightBig", function() { return _fading_exits__WEBPACK_IMPORTED_MODULE_4__["fadeOutRightBig"]; });

/* harmony import */ var _flippers__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./flippers */ "../../../node_modules/react-native-animatable/definitions/flippers.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "flipInX", function() { return _flippers__WEBPACK_IMPORTED_MODULE_5__["flipInX"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "flipInY", function() { return _flippers__WEBPACK_IMPORTED_MODULE_5__["flipInY"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "flipOutX", function() { return _flippers__WEBPACK_IMPORTED_MODULE_5__["flipOutX"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "flipOutY", function() { return _flippers__WEBPACK_IMPORTED_MODULE_5__["flipOutY"]; });

/* harmony import */ var _lightspeed__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./lightspeed */ "../../../node_modules/react-native-animatable/definitions/lightspeed.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "lightSpeedIn", function() { return _lightspeed__WEBPACK_IMPORTED_MODULE_6__["lightSpeedIn"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "lightSpeedOut", function() { return _lightspeed__WEBPACK_IMPORTED_MODULE_6__["lightSpeedOut"]; });

/* harmony import */ var _sliding_entrances__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./sliding-entrances */ "../../../node_modules/react-native-animatable/definitions/sliding-entrances.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "slideInDown", function() { return _sliding_entrances__WEBPACK_IMPORTED_MODULE_7__["slideInDown"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "slideInUp", function() { return _sliding_entrances__WEBPACK_IMPORTED_MODULE_7__["slideInUp"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "slideInLeft", function() { return _sliding_entrances__WEBPACK_IMPORTED_MODULE_7__["slideInLeft"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "slideInRight", function() { return _sliding_entrances__WEBPACK_IMPORTED_MODULE_7__["slideInRight"]; });

/* harmony import */ var _sliding_exits__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./sliding-exits */ "../../../node_modules/react-native-animatable/definitions/sliding-exits.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "slideOutDown", function() { return _sliding_exits__WEBPACK_IMPORTED_MODULE_8__["slideOutDown"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "slideOutUp", function() { return _sliding_exits__WEBPACK_IMPORTED_MODULE_8__["slideOutUp"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "slideOutLeft", function() { return _sliding_exits__WEBPACK_IMPORTED_MODULE_8__["slideOutLeft"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "slideOutRight", function() { return _sliding_exits__WEBPACK_IMPORTED_MODULE_8__["slideOutRight"]; });

/* harmony import */ var _zooming_entrances__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./zooming-entrances */ "../../../node_modules/react-native-animatable/definitions/zooming-entrances.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "zoomIn", function() { return _zooming_entrances__WEBPACK_IMPORTED_MODULE_9__["zoomIn"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "zoomInDown", function() { return _zooming_entrances__WEBPACK_IMPORTED_MODULE_9__["zoomInDown"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "zoomInUp", function() { return _zooming_entrances__WEBPACK_IMPORTED_MODULE_9__["zoomInUp"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "zoomInLeft", function() { return _zooming_entrances__WEBPACK_IMPORTED_MODULE_9__["zoomInLeft"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "zoomInRight", function() { return _zooming_entrances__WEBPACK_IMPORTED_MODULE_9__["zoomInRight"]; });

/* harmony import */ var _zooming_exits__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./zooming-exits */ "../../../node_modules/react-native-animatable/definitions/zooming-exits.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "zoomOut", function() { return _zooming_exits__WEBPACK_IMPORTED_MODULE_10__["zoomOut"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "zoomOutDown", function() { return _zooming_exits__WEBPACK_IMPORTED_MODULE_10__["zoomOutDown"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "zoomOutUp", function() { return _zooming_exits__WEBPACK_IMPORTED_MODULE_10__["zoomOutUp"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "zoomOutLeft", function() { return _zooming_exits__WEBPACK_IMPORTED_MODULE_10__["zoomOutLeft"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "zoomOutRight", function() { return _zooming_exits__WEBPACK_IMPORTED_MODULE_10__["zoomOutRight"]; });













/***/ }),

/***/ "../../../node_modules/react-native-animatable/definitions/lightspeed.js":
/*!********************************************************************************************************************************!*\
  !*** /Users/diego.antonelli/Desktop/projects/widgets-resources/node_modules/react-native-animatable/definitions/lightspeed.js ***!
  \********************************************************************************************************************************/
/*! exports provided: lightSpeedIn, lightSpeedOut */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "lightSpeedIn", function() { return lightSpeedIn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "lightSpeedOut", function() { return lightSpeedOut; });
var lightSpeedIn = {
  easing: 'ease-out',
  0: {
    opacity: 0,
    translateX: 200,
    skewX: '-30deg'
  },
  0.6: {
    opacity: 1,
    translateX: 0,
    skewX: '20deg'
  },
  0.8: {
    skewX: '-5deg'
  },
  1: {
    opacity: 1,
    translateX: 0,
    skewX: '0deg'
  }
};
var lightSpeedOut = {
  easing: 'ease-in',
  0: {
    opacity: 1,
    translateX: 0,
    skewX: '0deg'
  },
  1: {
    opacity: 0,
    translateX: 200,
    skewX: '30deg'
  }
};

/***/ }),

/***/ "../../../node_modules/react-native-animatable/definitions/sliding-entrances.js":
/*!***************************************************************************************************************************************!*\
  !*** /Users/diego.antonelli/Desktop/projects/widgets-resources/node_modules/react-native-animatable/definitions/sliding-entrances.js ***!
  \***************************************************************************************************************************************/
/*! exports provided: slideInDown, slideInUp, slideInLeft, slideInRight */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "slideInDown", function() { return slideInDown; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "slideInUp", function() { return slideInUp; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "slideInLeft", function() { return slideInLeft; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "slideInRight", function() { return slideInRight; });
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function makeSlideInTranslation(translationType, fromValue) {
  return {
    from: _defineProperty({}, translationType, fromValue),
    to: _defineProperty({}, translationType, 0)
  };
}

var slideInDown = makeSlideInTranslation('translateY', -100);
var slideInUp = makeSlideInTranslation('translateY', 100);
var slideInLeft = makeSlideInTranslation('translateX', -100);
var slideInRight = makeSlideInTranslation('translateX', 100);

/***/ }),

/***/ "../../../node_modules/react-native-animatable/definitions/sliding-exits.js":
/*!***********************************************************************************************************************************!*\
  !*** /Users/diego.antonelli/Desktop/projects/widgets-resources/node_modules/react-native-animatable/definitions/sliding-exits.js ***!
  \***********************************************************************************************************************************/
/*! exports provided: slideOutDown, slideOutUp, slideOutLeft, slideOutRight */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "slideOutDown", function() { return slideOutDown; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "slideOutUp", function() { return slideOutUp; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "slideOutLeft", function() { return slideOutLeft; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "slideOutRight", function() { return slideOutRight; });
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function makeSlideOutTranslation(translationType, fromValue) {
  return {
    from: _defineProperty({}, translationType, 0),
    to: _defineProperty({}, translationType, fromValue)
  };
}

var slideOutDown = makeSlideOutTranslation('translateY', 100);
var slideOutUp = makeSlideOutTranslation('translateY', -100);
var slideOutLeft = makeSlideOutTranslation('translateX', -100);
var slideOutRight = makeSlideOutTranslation('translateX', 100);

/***/ }),

/***/ "../../../node_modules/react-native-animatable/definitions/zooming-entrances.js":
/*!***************************************************************************************************************************************!*\
  !*** /Users/diego.antonelli/Desktop/projects/widgets-resources/node_modules/react-native-animatable/definitions/zooming-entrances.js ***!
  \***************************************************************************************************************************************/
/*! exports provided: zoomIn, zoomInDown, zoomInUp, zoomInLeft, zoomInRight */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "zoomIn", function() { return zoomIn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "zoomInDown", function() { return zoomInDown; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "zoomInUp", function() { return zoomInUp; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "zoomInLeft", function() { return zoomInLeft; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "zoomInRight", function() { return zoomInRight; });
/* harmony import */ var react_native__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-native */ "react-native");
/* harmony import */ var react_native__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_native__WEBPACK_IMPORTED_MODULE_0__);
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



function makeZoomInTranslation(translationType, pivotPoint) {
  var modifier = Math.min(1, Math.max(-1, pivotPoint));
  return {
    easing: react_native__WEBPACK_IMPORTED_MODULE_0__["Easing"].bezier(0.175, 0.885, 0.32, 1),
    0: _defineProperty({
      opacity: 0,
      scale: 0.1
    }, translationType, modifier * -1000),
    0.6: _defineProperty({
      opacity: 1,
      scale: 0.457
    }, translationType, pivotPoint),
    1: _defineProperty({
      scale: 1
    }, translationType, 0)
  };
}

var zoomIn = {
  from: {
    opacity: 0,
    scale: 0.3
  },
  0.5: {
    opacity: 1
  },
  to: {
    opacity: 1,
    scale: 1
  }
};
var zoomInDown = makeZoomInTranslation('translateY', 60);
var zoomInUp = makeZoomInTranslation('translateY', -60);
var zoomInLeft = makeZoomInTranslation('translateX', 10);
var zoomInRight = makeZoomInTranslation('translateX', -10);

/***/ }),

/***/ "../../../node_modules/react-native-animatable/definitions/zooming-exits.js":
/*!***********************************************************************************************************************************!*\
  !*** /Users/diego.antonelli/Desktop/projects/widgets-resources/node_modules/react-native-animatable/definitions/zooming-exits.js ***!
  \***********************************************************************************************************************************/
/*! exports provided: zoomOut, zoomOutDown, zoomOutUp, zoomOutLeft, zoomOutRight */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "zoomOut", function() { return zoomOut; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "zoomOutDown", function() { return zoomOutDown; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "zoomOutUp", function() { return zoomOutUp; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "zoomOutLeft", function() { return zoomOutLeft; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "zoomOutRight", function() { return zoomOutRight; });
/* harmony import */ var react_native__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-native */ "react-native");
/* harmony import */ var react_native__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_native__WEBPACK_IMPORTED_MODULE_0__);
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



function makeZoomOutTranslation(translationType, pivotPoint) {
  var modifier = Math.min(1, Math.max(-1, pivotPoint));
  return {
    easing: react_native__WEBPACK_IMPORTED_MODULE_0__["Easing"].bezier(0.175, 0.885, 0.32, 1),
    0: _defineProperty({
      opacity: 1,
      scale: 1
    }, translationType, 0),
    0.4: _defineProperty({
      opacity: 1,
      scale: 0.457
    }, translationType, pivotPoint),
    1: _defineProperty({
      opacity: 0,
      scale: 0.1
    }, translationType, modifier * -1000)
  };
}

var zoomOut = {
  from: {
    opacity: 1,
    scale: 1
  },
  0.5: {
    opacity: 1,
    scale: 0.3
  },
  to: {
    opacity: 0,
    scale: 0
  }
};
var zoomOutDown = makeZoomOutTranslation('translateY', 60);
var zoomOutUp = makeZoomOutTranslation('translateY', -60);
var zoomOutLeft = makeZoomOutTranslation('translateX', 10);
var zoomOutRight = makeZoomOutTranslation('translateX', -10);

/***/ }),

/***/ "../../../node_modules/react-native-animatable/easing.js":
/*!****************************************************************************************************************!*\
  !*** /Users/diego.antonelli/Desktop/projects/widgets-resources/node_modules/react-native-animatable/easing.js ***!
  \****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_native__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-native */ "react-native");
/* harmony import */ var react_native__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_native__WEBPACK_IMPORTED_MODULE_0__);

var EASING_FUNCTIONS = {
  // Standard CSS easings
  linear: react_native__WEBPACK_IMPORTED_MODULE_0__["Easing"].linear,
  ease: react_native__WEBPACK_IMPORTED_MODULE_0__["Easing"].bezier(0.25, 0.1, 0.25, 1),
  'ease-in': react_native__WEBPACK_IMPORTED_MODULE_0__["Easing"].bezier(0.42, 0, 1, 1),
  'ease-out': react_native__WEBPACK_IMPORTED_MODULE_0__["Easing"].bezier(0, 0, 0.58, 1),
  'ease-in-out': react_native__WEBPACK_IMPORTED_MODULE_0__["Easing"].bezier(0.42, 0, 0.58, 1),
  // Penner Equations - http://matthewlein.com/ceaser/ & http://easings.net
  'ease-in-cubic': react_native__WEBPACK_IMPORTED_MODULE_0__["Easing"].bezier(0.55, 0.055, 0.675, 0.19),
  'ease-out-cubic': react_native__WEBPACK_IMPORTED_MODULE_0__["Easing"].bezier(0.215, 0.61, 0.355, 1.0),
  'ease-in-out-cubic': react_native__WEBPACK_IMPORTED_MODULE_0__["Easing"].bezier(0.645, 0.045, 0.355, 1.0),
  'ease-in-circ': react_native__WEBPACK_IMPORTED_MODULE_0__["Easing"].bezier(0.6, 0.04, 0.98, 0.335),
  'ease-out-circ': react_native__WEBPACK_IMPORTED_MODULE_0__["Easing"].bezier(0.075, 0.82, 0.165, 1.0),
  'ease-in-out-circ': react_native__WEBPACK_IMPORTED_MODULE_0__["Easing"].bezier(0.785, 0.135, 0.15, 0.86),
  'ease-in-expo': react_native__WEBPACK_IMPORTED_MODULE_0__["Easing"].bezier(0.95, 0.05, 0.795, 0.035),
  'ease-out-expo': react_native__WEBPACK_IMPORTED_MODULE_0__["Easing"].bezier(0.19, 1.0, 0.22, 1.0),
  'ease-in-out-expo': react_native__WEBPACK_IMPORTED_MODULE_0__["Easing"].bezier(1.0, 0.0, 0.0, 1.0),
  'ease-in-quad': react_native__WEBPACK_IMPORTED_MODULE_0__["Easing"].bezier(0.55, 0.085, 0.68, 0.53),
  'ease-out-quad': react_native__WEBPACK_IMPORTED_MODULE_0__["Easing"].bezier(0.25, 0.46, 0.45, 0.94),
  'ease-in-out-quad': react_native__WEBPACK_IMPORTED_MODULE_0__["Easing"].bezier(0.455, 0.03, 0.515, 0.955),
  'ease-in-quart': react_native__WEBPACK_IMPORTED_MODULE_0__["Easing"].bezier(0.895, 0.03, 0.685, 0.22),
  'ease-out-quart': react_native__WEBPACK_IMPORTED_MODULE_0__["Easing"].bezier(0.165, 0.84, 0.44, 1.0),
  'ease-in-out-quart': react_native__WEBPACK_IMPORTED_MODULE_0__["Easing"].bezier(0.77, 0.0, 0.175, 1.0),
  'ease-in-quint': react_native__WEBPACK_IMPORTED_MODULE_0__["Easing"].bezier(0.755, 0.05, 0.855, 0.06),
  'ease-out-quint': react_native__WEBPACK_IMPORTED_MODULE_0__["Easing"].bezier(0.23, 1.0, 0.32, 1.0),
  'ease-in-out-quint': react_native__WEBPACK_IMPORTED_MODULE_0__["Easing"].bezier(0.86, 0.0, 0.07, 1.0),
  'ease-in-sine': react_native__WEBPACK_IMPORTED_MODULE_0__["Easing"].bezier(0.47, 0.0, 0.745, 0.715),
  'ease-out-sine': react_native__WEBPACK_IMPORTED_MODULE_0__["Easing"].bezier(0.39, 0.575, 0.565, 1.0),
  'ease-in-out-sine': react_native__WEBPACK_IMPORTED_MODULE_0__["Easing"].bezier(0.445, 0.05, 0.55, 0.95),
  'ease-in-back': react_native__WEBPACK_IMPORTED_MODULE_0__["Easing"].bezier(0.6, -0.28, 0.735, 0.045),
  'ease-out-back': react_native__WEBPACK_IMPORTED_MODULE_0__["Easing"].bezier(0.175, 0.885, 0.32, 1.275),
  'ease-in-out-back': react_native__WEBPACK_IMPORTED_MODULE_0__["Easing"].bezier(0.68, -0.55, 0.265, 1.55)
};
/* harmony default export */ __webpack_exports__["default"] = (EASING_FUNCTIONS);

/***/ }),

/***/ "../../../node_modules/react-native-animatable/flattenStyle.js":
/*!**********************************************************************************************************************!*\
  !*** /Users/diego.antonelli/Desktop/projects/widgets-resources/node_modules/react-native-animatable/flattenStyle.js ***!
  \**********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return flattenStyle; });
/* harmony import */ var react_native__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-native */ "react-native");
/* harmony import */ var react_native__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_native__WEBPACK_IMPORTED_MODULE_0__);

function flattenStyle(style) {
  var flatStyle = Object.assign({}, react_native__WEBPACK_IMPORTED_MODULE_0__["StyleSheet"].flatten(style));

  if (flatStyle.transform) {
    flatStyle.transform.forEach(function (transform) {
      var key = Object.keys(transform)[0];
      flatStyle[key] = transform[key];
    });
    delete flatStyle.transform;
  }

  return flatStyle;
}

/***/ }),

/***/ "../../../node_modules/react-native-animatable/getDefaultStyleValue.js":
/*!******************************************************************************************************************************!*\
  !*** /Users/diego.antonelli/Desktop/projects/widgets-resources/node_modules/react-native-animatable/getDefaultStyleValue.js ***!
  \******************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return getDefaultStyleValue; });
/* eslint-disable no-plusplus */
var DIRECTIONAL_FALLBACKS = {
  Top: ['Vertical', ''],
  Bottom: ['Vertical', ''],
  Vertical: [''],
  Left: ['Horizontal', ''],
  Right: ['Horizontal', ''],
  Horizontal: ['']
};
var DIRECTIONAL_SUFFICES = Object.keys(DIRECTIONAL_FALLBACKS);
function getDefaultStyleValue(key, flatStyle) {
  if (key === 'backgroundColor') {
    return 'rgba(0,0,0,0)';
  }

  if (key === 'color' || key.indexOf('Color') !== -1) {
    return 'rgba(0,0,0,1)';
  }

  if (key.indexOf('rotate') === 0 || key.indexOf('skew') === 0) {
    return '0deg';
  }

  if (key === 'opacity' || key.indexOf('scale') === 0) {
    return 1;
  }

  if (key === 'fontSize') {
    return 14;
  }

  if (key.indexOf('margin') === 0 || key.indexOf('padding') === 0) {
    for (var suffix, i = 0; i < DIRECTIONAL_SUFFICES.length; i++) {
      suffix = DIRECTIONAL_SUFFICES[i];

      if (key.substr(-suffix.length) === suffix) {
        var prefix = key.substr(0, key.length - suffix.length);
        var fallbacks = DIRECTIONAL_FALLBACKS[suffix];

        for (var fallback, j = 0; j < fallbacks.length; j++) {
          fallback = prefix + fallbacks[j];

          if (fallback in flatStyle) {
            return flatStyle[fallback];
          }
        }

        break;
      }
    }
  }

  return 0;
}

/***/ }),

/***/ "../../../node_modules/react-native-animatable/getStyleValues.js":
/*!************************************************************************************************************************!*\
  !*** /Users/diego.antonelli/Desktop/projects/widgets-resources/node_modules/react-native-animatable/getStyleValues.js ***!
  \************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return getStyleValues; });
/* harmony import */ var _flattenStyle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./flattenStyle */ "../../../node_modules/react-native-animatable/flattenStyle.js");
/* harmony import */ var _getDefaultStyleValue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./getDefaultStyleValue */ "../../../node_modules/react-native-animatable/getDefaultStyleValue.js");

 // Returns a flattened version of style with only `keys` values.

function getStyleValues(keys, style) {
  var values = {};
  var flatStyle = Object(_flattenStyle__WEBPACK_IMPORTED_MODULE_0__["default"])(style);
  (typeof keys === 'string' ? [keys] : keys).forEach(function (key) {
    values[key] = key in flatStyle ? flatStyle[key] : Object(_getDefaultStyleValue__WEBPACK_IMPORTED_MODULE_1__["default"])(key, flatStyle);
  });
  return values;
}

/***/ }),

/***/ "../../../node_modules/react-native-animatable/index.js":
/*!***************************************************************************************************************!*\
  !*** /Users/diego.antonelli/Desktop/projects/widgets-resources/node_modules/react-native-animatable/index.js ***!
  \***************************************************************************************************************/
/*! exports provided: createAnimatableComponent, View, Text, Image, createAnimation, registerAnimation, initializeRegistryWithDefinitions */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createAnimatableComponent", function() { return createAnimatableComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View", function() { return View; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Text", function() { return Text; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Image", function() { return Image; });
/* harmony import */ var react_native__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-native */ "react-native");
/* harmony import */ var react_native__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_native__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _createAnimatableComponent__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./createAnimatableComponent */ "../../../node_modules/react-native-animatable/createAnimatableComponent.js");
/* harmony import */ var _registry__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./registry */ "../../../node_modules/react-native-animatable/registry.js");
/* harmony import */ var _definitions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./definitions */ "../../../node_modules/react-native-animatable/definitions/index.js");
/* harmony import */ var _createAnimation__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./createAnimation */ "../../../node_modules/react-native-animatable/createAnimation.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createAnimation", function() { return _createAnimation__WEBPACK_IMPORTED_MODULE_4__["default"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "registerAnimation", function() { return _registry__WEBPACK_IMPORTED_MODULE_2__["registerAnimation"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "initializeRegistryWithDefinitions", function() { return _registry__WEBPACK_IMPORTED_MODULE_2__["initializeRegistryWithDefinitions"]; });





Object(_registry__WEBPACK_IMPORTED_MODULE_2__["initializeRegistryWithDefinitions"])(_definitions__WEBPACK_IMPORTED_MODULE_3__);
var createAnimatableComponent = _createAnimatableComponent__WEBPACK_IMPORTED_MODULE_1__["default"];
var View = Object(_createAnimatableComponent__WEBPACK_IMPORTED_MODULE_1__["default"])(react_native__WEBPACK_IMPORTED_MODULE_0__["View"]);
var Text = Object(_createAnimatableComponent__WEBPACK_IMPORTED_MODULE_1__["default"])(react_native__WEBPACK_IMPORTED_MODULE_0__["Text"]);
var Image = Object(_createAnimatableComponent__WEBPACK_IMPORTED_MODULE_1__["default"])(react_native__WEBPACK_IMPORTED_MODULE_0__["Image"]);



/***/ }),

/***/ "../../../node_modules/react-native-animatable/registry.js":
/*!******************************************************************************************************************!*\
  !*** /Users/diego.antonelli/Desktop/projects/widgets-resources/node_modules/react-native-animatable/registry.js ***!
  \******************************************************************************************************************/
/*! exports provided: registerAnimation, getAnimationByName, getAnimationNames, initializeRegistryWithDefinitions */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "registerAnimation", function() { return registerAnimation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAnimationByName", function() { return getAnimationByName; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAnimationNames", function() { return getAnimationNames; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initializeRegistryWithDefinitions", function() { return initializeRegistryWithDefinitions; });
/* harmony import */ var _createAnimation__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./createAnimation */ "../../../node_modules/react-native-animatable/createAnimation.js");

var animationRegistry = {};
function registerAnimation(animationName, animation) {
  animationRegistry[animationName] = animation;
}
function getAnimationByName(animationName) {
  return animationRegistry[animationName];
}
function getAnimationNames() {
  return Object.keys(animationRegistry);
}
function initializeRegistryWithDefinitions(definitions) {
  Object.keys(definitions).forEach(function (animationName) {
    registerAnimation(animationName, Object(_createAnimation__WEBPACK_IMPORTED_MODULE_0__["default"])(definitions[animationName]));
  });
}

/***/ }),

/***/ "../../../node_modules/react-native-animatable/wrapStyleTransforms.js":
/*!*****************************************************************************************************************************!*\
  !*** /Users/diego.antonelli/Desktop/projects/widgets-resources/node_modules/react-native-animatable/wrapStyleTransforms.js ***!
  \*****************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return wrapStyleTransforms; });
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// These styles need to be nested in a transform array
var TRANSFORM_STYLE_PROPERTIES = ['perspective', 'rotate', 'rotateX', 'rotateY', 'rotateZ', 'scale', 'scaleX', 'scaleY', 'skewX', 'skewY', 'translateX', 'translateY']; // Transforms { translateX: 1 } to { transform: [{ translateX: 1 }]}

function wrapStyleTransforms(style) {
  var wrapped = {};
  Object.keys(style).forEach(function (key) {
    if (TRANSFORM_STYLE_PROPERTIES.indexOf(key) !== -1) {
      if (!wrapped.transform) {
        wrapped.transform = [];
      }

      wrapped.transform.push(_defineProperty({}, key, style[key]));
    } else {
      wrapped[key] = style[key];
    }
  });
  return wrapped;
}

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

/***/ "../../../packages-native/animation/src/Animation.tsx":
/*!*************************************************************************************************************!*\
  !*** /Users/diego.antonelli/Desktop/projects/widgets-resources/packages-native/animation/src/Animation.tsx ***!
  \*************************************************************************************************************/
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
!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(/*! react */ "react"), __webpack_require__(/*! @native-mobile-resources/util-widgets */ "../../../packages-native/util-widgets/dist/index.js"), __webpack_require__(/*! react-native-animatable */ "../../../node_modules/react-native-animatable/index.js"), __webpack_require__(/*! ./ui/Styles */ "../../../packages-native/animation/src/ui/Styles.ts"), __webpack_require__(/*! @widgets-resources/piw-utils */ "../../piw-utils/dist/index.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, react_1, util_widgets_1, react_native_animatable_1, Styles_1, piw_utils_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var Animation = (function (_super) {
        __extends(Animation, _super);
        function Animation() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.animationEndHandle = _this.onAnimationEnd.bind(_this);
            _this.styles = util_widgets_1.flattenStyles(Styles_1.defaultAnimationStyle, _this.props.style);
            return _this;
        }
        Animation.prototype.render = function () {
            var _a = this.props, count = _a.count, duration = _a.duration, content = _a.content, easing = _a.easing, delay = _a.delay, direction = _a.direction;
            var easingValue = easing.replace(/_/g, "-");
            var directionValue = direction.replace(/_/g, "-");
            var countValue = count === 0 ? "infinite" : count;
            this.validateProps(this.props);
            return (react_1.createElement(react_native_animatable_1.View, { testID: this.props.name, animation: this.getAnimation(), duration: duration, delay: delay, direction: directionValue, easing: easingValue, iterationCount: countValue, onAnimationEnd: this.animationEndHandle, style: this.styles.container, useNativeDriver: true }, content));
        };
        Animation.prototype.validateProps = function (props) {
            var afterAnimationAction = props.afterAnimationAction, count = props.count;
            if (afterAnimationAction && count === 0) {
                this.log("After animation action can not be triggered by infinite count");
            }
            var _a = this.props, animationType = _a.animationType, animationIn = _a.animationIn, animationOut = _a.animationOut, animationAttention = _a.animationAttention;
            if (animationType === "in" && animationIn === "none") {
                this.log("No 'Entry animation' is selected for animation type 'Entry'");
            }
            if (animationType === "attention" && animationAttention === "none") {
                this.log("No 'Attention animation' is selected for animation type 'Attention'");
            }
            if (animationType === "out" && animationOut === "none") {
                this.log("No 'Exit animation' is selected for animation type 'Exit'");
            }
            if (animationType === "in" && (animationOut !== "none" || animationAttention !== "none")) {
                this.log("The 'Attention' an 'Exit' animation is ignored and should be set to 'None' when effect 'type' 'Entry' is selected");
            }
            if (animationType === "attention" && (animationOut !== "none" || animationIn !== "none")) {
                this.log("The 'Entrance' and 'Exit' animation is ignored and should be set to 'None' when effect 'type' 'Attention' is selected");
            }
            if (animationType === "out" && (animationIn !== "none" || animationAttention !== "none")) {
                this.log("The 'Entry' and 'Attention' animation is ignored and should be set to 'None' when effect 'type' 'Exit' is selected");
            }
        };
        Animation.prototype.log = function (message) {
            console.warn(message);
        };
        Animation.prototype.getAnimation = function () {
            var _a = this.props, animationType = _a.animationType, animationIn = _a.animationIn, animationOut = _a.animationOut, animationAttention = _a.animationAttention, condition = _a.condition;
            var animation = animationType === "in" ? animationIn : animationType === "out" ? animationOut : animationAttention;
            if (!condition || (condition.status === "available" && condition.value === true)) {
                return animation === "none" ? undefined : animation;
            }
            return undefined;
        };
        Animation.prototype.onAnimationEnd = function () {
            piw_utils_1.executeAction(this.props.afterAnimationAction);
        };
        return Animation;
    }(react_1.Component));
    exports.Animation = Animation;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),

/***/ "../../../packages-native/animation/src/ui/Styles.ts":
/*!************************************************************************************************************!*\
  !*** /Users/diego.antonelli/Desktop/projects/widgets-resources/packages-native/animation/src/ui/Styles.ts ***!
  \************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.defaultAnimationStyle = {
        container: {}
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
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

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
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(n); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

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
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

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
//# sourceMappingURL=Animation.js.map