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
/******/ 	return __webpack_require__(__webpack_require__.s = "../../../packages-native/floating-action-button/src/FloatingActionButton.tsx");
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

/***/ "../../../node_modules/react-native-action-button/ActionButton.js":
/*!*************************************************************************************************************************!*\
  !*** /Users/diego.antonelli/Desktop/projects/widgets-resources/node_modules/react-native-action-button/ActionButton.js ***!
  \*************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ActionButton; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "../../../node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_native__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-native */ "react-native");
/* harmony import */ var react_native__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_native__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _ActionButtonItem__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ActionButtonItem */ "../../../node_modules/react-native-action-button/ActionButtonItem.js");
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./shared */ "../../../node_modules/react-native-action-button/shared.js");
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







var ActionButton = /*#__PURE__*/function (_Component) {
  _inherits(ActionButton, _Component);

  var _super = _createSuper(ActionButton);

  function ActionButton(props) {
    var _this;

    _classCallCheck(this, ActionButton);

    _this = _super.call(this, props);
    _this.state = {
      resetToken: props.resetToken,
      active: props.active
    };
    _this.anim = new react_native__WEBPACK_IMPORTED_MODULE_2__["Animated"].Value(props.active ? 1 : 0);
    _this.timeout = null;
    return _this;
  }

  _createClass(ActionButton, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.mounted = true;
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.mounted = false;
      clearTimeout(this.timeout);
    }
  }, {
    key: "componentWillReceiveProps",
    value: function componentWillReceiveProps(nextProps) {
      var _this2 = this;

      if (nextProps.resetToken !== this.state.resetToken) {
        if (nextProps.active === false && this.state.active === true) {
          if (this.props.onReset) this.props.onReset();
          react_native__WEBPACK_IMPORTED_MODULE_2__["Animated"].spring(this.anim, {
            toValue: 0
          }).start();
          setTimeout(function () {
            return _this2.setState({
              active: false,
              resetToken: nextProps.resetToken
            });
          }, 250);
          return;
        }

        if (nextProps.active === true && this.state.active === false) {
          react_native__WEBPACK_IMPORTED_MODULE_2__["Animated"].spring(this.anim, {
            toValue: 1
          }).start();
          this.setState({
            active: true,
            resetToken: nextProps.resetToken
          });
          return;
        }

        this.setState({
          resetToken: nextProps.resetToken,
          active: nextProps.active
        });
      }
    } //////////////////////
    // STYLESHEET GETTERS
    //////////////////////

  }, {
    key: "getOrientation",
    value: function getOrientation() {
      return {
        alignItems: _shared__WEBPACK_IMPORTED_MODULE_4__["alignItemsMap"][this.props.position]
      };
    }
  }, {
    key: "getOffsetXY",
    value: function getOffsetXY() {
      return {
        // paddingHorizontal: this.props.offsetX,
        paddingVertical: this.props.offsetY
      };
    }
  }, {
    key: "getOverlayStyles",
    value: function getOverlayStyles() {
      return [styles.overlay, {
        elevation: this.props.elevation,
        zIndex: this.props.zIndex,
        justifyContent: this.props.verticalOrientation === "up" ? "flex-end" : "flex-start"
      }];
    } //////////////////////
    // RENDER METHODS
    //////////////////////

  }, {
    key: "render",
    value: function render() {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_native__WEBPACK_IMPORTED_MODULE_2__["View"], {
        pointerEvents: "box-none",
        style: [this.getOverlayStyles(), this.props.style]
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_native__WEBPACK_IMPORTED_MODULE_2__["Animated"].View, {
        pointerEvents: "none",
        style: [this.getOverlayStyles(), {
          backgroundColor: this.props.bgColor,
          opacity: this.anim.interpolate({
            inputRange: [0, 1],
            outputRange: [0, this.props.bgOpacity]
          })
        }]
      }, this.props.backdrop), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_native__WEBPACK_IMPORTED_MODULE_2__["View"], {
        pointerEvents: "box-none",
        style: [this.getOverlayStyles(), this.getOrientation(), this.getOffsetXY()]
      }, this.state.active && !this.props.backgroundTappable && this._renderTappableBackground(), this.props.verticalOrientation === "up" && this.props.children && this._renderActions(), this._renderMainButton(), this.props.verticalOrientation === "down" && this.props.children && this._renderActions()));
    }
  }, {
    key: "_renderMainButton",
    value: function _renderMainButton() {
      var _this3 = this;

      var animatedViewStyle = {
        transform: [{
          scale: this.anim.interpolate({
            inputRange: [0, 1],
            outputRange: [1, this.props.outRangeScale]
          })
        }, {
          rotate: this.anim.interpolate({
            inputRange: [0, 1],
            outputRange: ["0deg", this.props.degrees + "deg"]
          })
        }]
      };
      var wrapperStyle = {
        backgroundColor: this.anim.interpolate({
          inputRange: [0, 1],
          outputRange: [this.props.buttonColor, this.props.btnOutRange || this.props.buttonColor]
        }),
        width: this.props.size,
        height: this.props.size,
        borderRadius: this.props.size / 2
      };
      var buttonStyle = {
        width: this.props.size,
        height: this.props.size,
        borderRadius: this.props.size / 2,
        alignItems: "center",
        justifyContent: "center"
      };
      var Touchable = Object(_shared__WEBPACK_IMPORTED_MODULE_4__["getTouchableComponent"])(this.props.useNativeFeedback);
      var parentStyle = _shared__WEBPACK_IMPORTED_MODULE_4__["isAndroid"] && this.props.fixNativeFeedbackRadius ? {
        right: this.props.offsetX,
        zIndex: this.props.zIndex,
        borderRadius: this.props.size / 2,
        width: this.props.size
      } : {
        marginHorizontal: this.props.offsetX,
        zIndex: this.props.zIndex
      };
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_native__WEBPACK_IMPORTED_MODULE_2__["View"], {
        style: [parentStyle, !this.props.hideShadow && _shared__WEBPACK_IMPORTED_MODULE_4__["shadowStyle"], !this.props.hideShadow && this.props.shadowStyle]
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Touchable, {
        testID: this.props.testID,
        accessible: this.props.accessible,
        accessibilityLabel: this.props.accessibilityLabel,
        background: Object(_shared__WEBPACK_IMPORTED_MODULE_4__["touchableBackground"])(this.props.nativeFeedbackRippleColor, this.props.fixNativeFeedbackRadius),
        activeOpacity: this.props.activeOpacity,
        onLongPress: this.props.onLongPress,
        onPress: function onPress() {
          _this3.props.onPress();

          if (_this3.props.children) _this3.animateButton();
        },
        onPressIn: this.props.onPressIn,
        onPressOut: this.props.onPressOut
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_native__WEBPACK_IMPORTED_MODULE_2__["Animated"].View, {
        style: wrapperStyle
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_native__WEBPACK_IMPORTED_MODULE_2__["Animated"].View, {
        style: [buttonStyle, animatedViewStyle]
      }, this._renderButtonIcon()))));
    }
  }, {
    key: "_renderButtonIcon",
    value: function _renderButtonIcon() {
      var _this$props = this.props,
          icon = _this$props.icon,
          renderIcon = _this$props.renderIcon,
          btnOutRangeTxt = _this$props.btnOutRangeTxt,
          buttonTextStyle = _this$props.buttonTextStyle,
          buttonText = _this$props.buttonText;
      if (renderIcon) return renderIcon(this.state.active);

      if (icon) {
        console.warn('react-native-action-button: The `icon` prop is deprecated! Use `renderIcon` instead.');
        return icon;
      }

      var textColor = buttonTextStyle.color || "rgba(255,255,255,1)";
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_native__WEBPACK_IMPORTED_MODULE_2__["Animated"].Text, {
        style: [styles.btnText, buttonTextStyle, {
          color: this.anim.interpolate({
            inputRange: [0, 1],
            outputRange: [textColor, btnOutRangeTxt || textColor]
          })
        }]
      }, buttonText);
    }
  }, {
    key: "_renderActions",
    value: function _renderActions() {
      var _this4 = this;

      var _this$props2 = this.props,
          children = _this$props2.children,
          verticalOrientation = _this$props2.verticalOrientation;
      if (!this.state.active) return null;
      var actionButtons = !Array.isArray(children) ? [children] : children;
      actionButtons = actionButtons.filter(function (actionButton) {
        return _typeof(actionButton) == 'object';
      });
      var actionStyle = {
        flex: 1,
        alignSelf: "stretch",
        // backgroundColor: 'purple',
        justifyContent: verticalOrientation === "up" ? "flex-end" : "flex-start",
        paddingTop: this.props.verticalOrientation === "down" ? this.props.spacing : 0,
        zIndex: this.props.zIndex
      };
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_native__WEBPACK_IMPORTED_MODULE_2__["View"], {
        style: actionStyle,
        pointerEvents: "box-none"
      }, actionButtons.map(function (ActionButton, idx) {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ActionButtonItem__WEBPACK_IMPORTED_MODULE_3__["default"], _extends({
          key: idx,
          anim: _this4.anim
        }, _this4.props, ActionButton.props, {
          parentSize: _this4.props.size,
          btnColor: _this4.props.btnOutRange,
          onPress: function onPress() {
            if (_this4.props.autoInactive) {
              _this4.timeout = setTimeout(_this4.reset.bind(_this4), 200);
            }

            ActionButton.props.onPress();
          }
        }));
      }));
    }
  }, {
    key: "_renderTappableBackground",
    value: function _renderTappableBackground() {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_native__WEBPACK_IMPORTED_MODULE_2__["TouchableOpacity"], {
        activeOpacity: 1,
        style: this.getOverlayStyles(),
        onPress: this.reset.bind(this)
      });
    } //////////////////////
    // Animation Methods
    //////////////////////

  }, {
    key: "animateButton",
    value: function animateButton() {
      var animate = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
      if (this.state.active) return this.reset();

      if (animate) {
        react_native__WEBPACK_IMPORTED_MODULE_2__["Animated"].spring(this.anim, {
          toValue: 1
        }).start();
      } else {
        this.anim.setValue(1);
      }

      this.setState({
        active: true,
        resetToken: this.state.resetToken
      });
    }
  }, {
    key: "reset",
    value: function reset() {
      var _this5 = this;

      var animate = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
      if (this.props.onReset) this.props.onReset();

      if (animate) {
        react_native__WEBPACK_IMPORTED_MODULE_2__["Animated"].spring(this.anim, {
          toValue: 0
        }).start();
      } else {
        this.anim.setValue(0);
      }

      setTimeout(function () {
        if (_this5.mounted) {
          _this5.setState({
            active: false,
            resetToken: _this5.state.resetToken
          });
        }
      }, 250);
    }
  }]);

  return ActionButton;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);


ActionButton.Item = _ActionButtonItem__WEBPACK_IMPORTED_MODULE_3__["default"];
ActionButton.propTypes = {
  resetToken: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.any,
  active: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
  position: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  elevation: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number,
  zIndex: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number,
  hideShadow: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
  shadowStyle: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object, prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.array, prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number]),
  renderIcon: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,
  bgColor: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  bgOpacity: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number,
  buttonColor: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  buttonTextStyle: react_native__WEBPACK_IMPORTED_MODULE_2__["Text"].propTypes.style,
  buttonText: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  offsetX: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number,
  offsetY: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number,
  spacing: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number,
  size: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number,
  autoInactive: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
  onPress: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,
  onPressIn: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,
  onPressOut: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,
  backdrop: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool, prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object]),
  degrees: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number,
  verticalOrientation: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOf(["up", "down"]),
  backgroundTappable: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
  activeOpacity: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number,
  useNativeFeedback: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
  fixNativeFeedbackRadius: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
  nativeFeedbackRippleColor: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  testID: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  accessibilityLabel: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  accessible: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool
};
ActionButton.defaultProps = {
  resetToken: null,
  active: false,
  bgColor: "transparent",
  bgOpacity: 1,
  buttonColor: "rgba(0,0,0,1)",
  buttonTextStyle: {},
  buttonText: "+",
  spacing: 20,
  outRangeScale: 1,
  autoInactive: true,
  onPress: function onPress() {},
  onPressIn: function onPressIn() {},
  onPressOn: function onPressOn() {},
  backdrop: false,
  degrees: 45,
  position: "right",
  offsetX: 30,
  offsetY: 30,
  size: 56,
  verticalOrientation: "up",
  backgroundTappable: false,
  useNativeFeedback: true,
  activeOpacity: _shared__WEBPACK_IMPORTED_MODULE_4__["DEFAULT_ACTIVE_OPACITY"],
  fixNativeFeedbackRadius: false,
  nativeFeedbackRippleColor: "rgba(255,255,255,0.75)",
  testID: undefined,
  accessibilityLabel: undefined,
  accessible: undefined
};
var styles = react_native__WEBPACK_IMPORTED_MODULE_2__["StyleSheet"].create({
  overlay: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    top: 0,
    backgroundColor: "transparent"
  },
  btnText: {
    marginTop: -4,
    fontSize: 24,
    backgroundColor: "transparent"
  }
});

/***/ }),

/***/ "../../../node_modules/react-native-action-button/ActionButtonItem.js":
/*!*****************************************************************************************************************************!*\
  !*** /Users/diego.antonelli/Desktop/projects/widgets-resources/node_modules/react-native-action-button/ActionButtonItem.js ***!
  \*****************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ActionButtonItem; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "../../../node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_native__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-native */ "react-native");
/* harmony import */ var react_native__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_native__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./shared */ "../../../node_modules/react-native-action-button/shared.js");
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






var _Dimensions$get = react_native__WEBPACK_IMPORTED_MODULE_2__["Dimensions"].get("window"),
    WIDTH = _Dimensions$get.width;

var SHADOW_SPACE = 10;
var TEXT_HEIGHT = 22;
var TextTouchable = _shared__WEBPACK_IMPORTED_MODULE_3__["isAndroid"] ? react_native__WEBPACK_IMPORTED_MODULE_2__["TouchableNativeFeedback"] : react_native__WEBPACK_IMPORTED_MODULE_2__["TouchableWithoutFeedback"];

var ActionButtonItem = /*#__PURE__*/function (_Component) {
  _inherits(ActionButtonItem, _Component);

  var _super = _createSuper(ActionButtonItem);

  function ActionButtonItem() {
    _classCallCheck(this, ActionButtonItem);

    return _super.apply(this, arguments);
  }

  _createClass(ActionButtonItem, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          size = _this$props.size,
          position = _this$props.position,
          verticalOrientation = _this$props.verticalOrientation,
          hideShadow = _this$props.hideShadow,
          spacing = _this$props.spacing;
      if (!this.props.active) return null;
      var animatedViewStyle = {
        marginBottom: -SHADOW_SPACE,
        alignItems: _shared__WEBPACK_IMPORTED_MODULE_3__["alignItemsMap"][position],
        // backgroundColor: this.props.buttonColor,
        opacity: this.props.anim,
        transform: [{
          translateY: this.props.anim.interpolate({
            inputRange: [0, 1],
            outputRange: [verticalOrientation === "down" ? -40 : 40, 0]
          })
        }]
      };
      var buttonStyle = {
        justifyContent: "center",
        alignItems: "center",
        width: size,
        height: size,
        borderRadius: size / 2,
        backgroundColor: this.props.buttonColor || this.props.btnColor
      };
      if (position !== "center") buttonStyle[position] = (this.props.parentSize - size) / 2;
      var Touchable = Object(_shared__WEBPACK_IMPORTED_MODULE_3__["getTouchableComponent"])(this.props.useNativeFeedback);
      var parentStyle = _shared__WEBPACK_IMPORTED_MODULE_3__["isAndroid"] && this.props.fixNativeFeedbackRadius ? {
        height: size,
        marginBottom: spacing,
        right: this.props.offsetX,
        borderRadius: this.props.size / 2
      } : {
        paddingHorizontal: this.props.offsetX,
        height: size + SHADOW_SPACE + spacing
      };
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_native__WEBPACK_IMPORTED_MODULE_2__["Animated"].View, {
        pointerEvents: "box-none",
        style: [animatedViewStyle, parentStyle]
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_native__WEBPACK_IMPORTED_MODULE_2__["View"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Touchable, {
        testID: this.props.testID,
        accessibilityLabel: this.props.accessibilityLabel,
        background: Object(_shared__WEBPACK_IMPORTED_MODULE_3__["touchableBackground"])(this.props.nativeFeedbackRippleColor, this.props.fixNativeFeedbackRadius),
        activeOpacity: this.props.activeOpacity || _shared__WEBPACK_IMPORTED_MODULE_3__["DEFAULT_ACTIVE_OPACITY"],
        onPress: this.props.onPress
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_native__WEBPACK_IMPORTED_MODULE_2__["View"], {
        style: [buttonStyle, !hideShadow ? _objectSpread(_objectSpread({}, _shared__WEBPACK_IMPORTED_MODULE_3__["shadowStyle"]), this.props.shadowStyle) : null]
      }, this.props.children))), this._renderTitle());
    }
  }, {
    key: "_renderTitle",
    value: function _renderTitle() {
      if (!this.props.title) return null;
      var _this$props2 = this.props,
          textContainerStyle = _this$props2.textContainerStyle,
          hideLabelShadow = _this$props2.hideLabelShadow,
          offsetX = _this$props2.offsetX,
          parentSize = _this$props2.parentSize,
          size = _this$props2.size,
          position = _this$props2.position,
          spaceBetween = _this$props2.spaceBetween;
      var offsetTop = Math.max(size / 2 - TEXT_HEIGHT / 2, 0);
      var positionStyles = {
        top: offsetTop
      };
      var hideShadow = hideLabelShadow === undefined ? this.props.hideShadow : hideLabelShadow;

      if (position !== "center") {
        positionStyles[position] = offsetX + (parentSize - size) / 2 + size + spaceBetween;
      } else {
        positionStyles.right = WIDTH / 2 + size / 2 + spaceBetween;
      }

      var textStyles = [styles.textContainer, positionStyles, !hideShadow && _shared__WEBPACK_IMPORTED_MODULE_3__["shadowStyle"], textContainerStyle];
      var title = react__WEBPACK_IMPORTED_MODULE_0___default.a.isValidElement(this.props.title) ? this.props.title : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_native__WEBPACK_IMPORTED_MODULE_2__["Text"], {
        allowFontScaling: false,
        style: [styles.text, this.props.textStyle]
      }, this.props.title);
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(TextTouchable, {
        background: Object(_shared__WEBPACK_IMPORTED_MODULE_3__["touchableBackground"])(this.props.nativeFeedbackRippleColor, this.props.fixNativeFeedbackRadius),
        activeOpacity: this.props.activeOpacity || _shared__WEBPACK_IMPORTED_MODULE_3__["DEFAULT_ACTIVE_OPACITY"],
        onPress: this.props.onPress
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_native__WEBPACK_IMPORTED_MODULE_2__["View"], {
        style: textStyles
      }, title));
    }
  }], [{
    key: "defaultProps",
    get: function get() {
      return {
        active: true,
        spaceBetween: 15,
        useNativeFeedback: true,
        activeOpacity: _shared__WEBPACK_IMPORTED_MODULE_3__["DEFAULT_ACTIVE_OPACITY"],
        fixNativeFeedbackRadius: false,
        nativeFeedbackRippleColor: "rgba(255,255,255,0.75)"
      };
    }
  }, {
    key: "propTypes",
    get: function get() {
      return {
        active: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
        useNativeFeedback: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
        fixNativeFeedbackRadius: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
        nativeFeedbackRippleColor: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
        activeOpacity: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number
      };
    }
  }]);

  return ActionButtonItem;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);


var styles = react_native__WEBPACK_IMPORTED_MODULE_2__["StyleSheet"].create({
  textContainer: {
    position: "absolute",
    paddingVertical: _shared__WEBPACK_IMPORTED_MODULE_3__["isAndroid"] ? 2 : 3,
    paddingHorizontal: 8,
    borderRadius: 3,
    borderWidth: react_native__WEBPACK_IMPORTED_MODULE_2__["StyleSheet"].hairlineWidth,
    borderColor: "#eee",
    backgroundColor: "white",
    height: TEXT_HEIGHT
  },
  text: {
    flex: 1,
    fontSize: 12,
    color: "#444"
  }
});

/***/ }),

/***/ "../../../node_modules/react-native-action-button/shared.js":
/*!*******************************************************************************************************************!*\
  !*** /Users/diego.antonelli/Desktop/projects/widgets-resources/node_modules/react-native-action-button/shared.js ***!
  \*******************************************************************************************************************/
/*! exports provided: DEFAULT_ACTIVE_OPACITY, shadowStyle, alignItemsMap, isAndroid, getTouchableComponent, touchableBackground */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DEFAULT_ACTIVE_OPACITY", function() { return DEFAULT_ACTIVE_OPACITY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "shadowStyle", function() { return shadowStyle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "alignItemsMap", function() { return alignItemsMap; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isAndroid", function() { return isAndroid; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getTouchableComponent", function() { return getTouchableComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "touchableBackground", function() { return touchableBackground; });
/* harmony import */ var react_native__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-native */ "react-native");
/* harmony import */ var react_native__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_native__WEBPACK_IMPORTED_MODULE_0__);

var DEFAULT_ACTIVE_OPACITY = 0.85;
var shadowStyle = {
  shadowOpacity: 0.35,
  shadowOffset: {
    width: 0,
    height: 5
  },
  shadowColor: "#000",
  shadowRadius: 3,
  elevation: 5
};
var alignItemsMap = {
  center: "center",
  left: "flex-start",
  right: "flex-end"
};
var isAndroid = react_native__WEBPACK_IMPORTED_MODULE_0__["Platform"].OS === "android";
function getTouchableComponent(useNativeFeedback) {
  if (useNativeFeedback === true && isAndroid === true) {
    return react_native__WEBPACK_IMPORTED_MODULE_0__["TouchableNativeFeedback"];
  }

  return react_native__WEBPACK_IMPORTED_MODULE_0__["TouchableOpacity"];
}
function touchableBackground(color, fixRadius) {
  if (isAndroid) {
    if (react_native__WEBPACK_IMPORTED_MODULE_0__["Platform"]["Version"] >= 21) {
      return react_native__WEBPACK_IMPORTED_MODULE_0__["TouchableNativeFeedback"].Ripple(color || "rgba(255,255,255,0.75)", fixRadius);
    } else {
      react_native__WEBPACK_IMPORTED_MODULE_0__["TouchableNativeFeedback"].SelectableBackground();
    }
  }

  return undefined;
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

/***/ "../../../packages-native/floating-action-button/src/FloatingActionButton.tsx":
/*!*************************************************************************************************************************************!*\
  !*** /Users/diego.antonelli/Desktop/projects/widgets-resources/packages-native/floating-action-button/src/FloatingActionButton.tsx ***!
  \*************************************************************************************************************************************/
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
!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(/*! @native-mobile-resources/util-widgets */ "../../../packages-native/util-widgets/dist/index.js"), __webpack_require__(/*! mendix/components/native/Icon */ "mendix/components/native/Icon"), __webpack_require__(/*! react */ "react"), __webpack_require__(/*! react-native */ "react-native"), __webpack_require__(/*! react-native-action-button */ "../../../node_modules/react-native-action-button/ActionButton.js"), __webpack_require__(/*! ./ui/styles */ "../../../packages-native/floating-action-button/src/ui/styles.tsx"), __webpack_require__(/*! @widgets-resources/piw-utils */ "../../piw-utils/dist/index.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, util_widgets_1, Icon_1, react_1, react_native_1, react_native_action_button_1, styles_1, piw_utils_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    react_native_action_button_1 = __importDefault(react_native_action_button_1);
    var defaultIconSource = { type: "glyph", iconClass: "glyphicon-plus" };
    var defaultActiveIconSource = { type: "glyph", iconClass: "glyphicon-remove" };
    var FloatingActionButton = (function (_super) {
        __extends(FloatingActionButton, _super);
        function FloatingActionButton() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.state = {
                active: false
            };
            _this.styles = util_widgets_1.flattenStyles(styles_1.defaultFloatingActionButtonStyle, _this.props.style);
            _this.onPressHandler = _this.onPress.bind(_this);
            _this.renderIconHandler = _this.renderIcon.bind(_this);
            return _this;
        }
        FloatingActionButton.prototype.render = function () {
            var buttonStyle = __assign(__assign({}, this.styles.button), { backgroundColor: "transparent" });
            delete buttonStyle.rippleColor;
            return (react_1.createElement(react_native_action_button_1.default, { size: this.styles.button.size, style: this.styles.container, shadowStyle: buttonStyle, buttonColor: this.styles.button.backgroundColor, nativeFeedbackRippleColor: this.styles.button.rippleColor, position: this.props.horizontalPosition, verticalOrientation: this.verticalOrientation, renderIcon: this.renderIconHandler, degrees: this.props.secondaryButtons.length > 0 ? 180 : 0, onPress: this.onPressHandler, fixNativeFeedbackRadius: true, backgroundTappable: true, activeOpacity: 0.2, offsetX: 0, offsetY: 0, zIndex: 999, testID: this.props.name }, this.renderButtons()));
        };
        FloatingActionButton.prototype.renderIcon = function () {
            var _a = this.props, icon = _a.icon, iconActive = _a.iconActive;
            var iconSource = icon && icon.value ? icon.value : defaultIconSource;
            var activeIconSource = iconActive && iconActive.value ? iconActive.value : defaultActiveIconSource;
            var isActive = this.state.active && this.props.secondaryButtons.length > 0;
            var source = isActive ? activeIconSource : iconSource;
            var style = isActive ? { transform: [{ rotate: "-180deg" }] } : {};
            return (react_1.createElement(react_native_1.View, { style: style },
                react_1.createElement(Icon_1.Icon, { icon: source, size: this.styles.buttonIcon.size, color: this.styles.buttonIcon.color })));
        };
        FloatingActionButton.prototype.renderButtons = function () {
            var _this = this;
            return (this.props.secondaryButtons &&
                this.props.secondaryButtons.map(function (button, index) {
                    return (react_1.createElement(react_native_action_button_1.default.Item, { testID: _this.props.name + "$button" + index, key: "button" + index, size: _this.styles.secondaryButton.size, title: button.caption && button.caption.value, shadowStyle: _this.styles.secondaryButton, buttonColor: _this.styles.secondaryButton.backgroundColor, nativeFeedbackRippleColor: "transparent", textStyle: _this.styles.secondaryButtonCaption, textContainerStyle: _this.styles.secondaryButtonCaptionContainer, onPress: function () {
                            _this.setState({ active: false });
                            piw_utils_1.executeAction(button.onClick);
                        }, activeOpacity: 0.2, spaceBetween: 0 }, button.icon.value && (react_1.createElement(Icon_1.Icon, { icon: button.icon.value, size: _this.styles.secondaryButtonIcon.size, color: _this.styles.secondaryButtonIcon.color }))));
                }));
        };
        Object.defineProperty(FloatingActionButton.prototype, "verticalOrientation", {
            get: function () {
                switch (this.props.verticalPosition) {
                    case "bottom":
                        return "up";
                    case "top":
                        return "down";
                }
            },
            enumerable: true,
            configurable: true
        });
        FloatingActionButton.prototype.onPress = function () {
            if (this.props.secondaryButtons && this.props.secondaryButtons.length > 0) {
                this.setState({ active: !this.state.active });
                return;
            }
            piw_utils_1.executeAction(this.props.onClick);
        };
        return FloatingActionButton;
    }(react_1.Component));
    exports.FloatingActionButton = FloatingActionButton;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),

/***/ "../../../packages-native/floating-action-button/src/ui/styles.tsx":
/*!**************************************************************************************************************************!*\
  !*** /Users/diego.antonelli/Desktop/projects/widgets-resources/packages-native/floating-action-button/src/ui/styles.tsx ***!
  \**************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.defaultFloatingActionButtonStyle = {
        container: {
            margin: 30
        },
        button: {
            size: 54,
            rippleColor: "rgba(0, 0, 0, 0.4)",
            backgroundColor: "#e74c3c",
            shadowOpacity: 0.3,
            shadowOffset: {
                width: 0,
                height: 5
            },
            shadowColor: "#000",
            shadowRadius: 3,
            elevation: 5
        },
        buttonIcon: {
            size: 18,
            color: "#fff"
        },
        secondaryButton: {
            size: 40,
            backgroundColor: "#fff",
            shadowOpacity: 0.3,
            shadowOffset: {
                width: 0,
                height: 5
            },
            shadowColor: "#000",
            shadowRadius: 3,
            elevation: 5
        },
        secondaryButtonIcon: {
            size: 18,
            color: "#000"
        },
        secondaryButtonCaption: {},
        secondaryButtonCaptionContainer: {
            marginHorizontal: 15
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

/***/ })

/******/ });
//# sourceMappingURL=FloatingActionButton.js.map