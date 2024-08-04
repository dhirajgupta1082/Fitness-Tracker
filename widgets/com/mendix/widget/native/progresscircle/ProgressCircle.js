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
/******/ 	return __webpack_require__(__webpack_require__.s = "../../../packages-native/progress-circle/src/ProgressCircle.tsx");
/******/ })
/************************************************************************/
/******/ ({

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

/***/ "../../../node_modules/react-native-progress/Bar.js":
/*!***********************************************************************************************************!*\
  !*** /Users/diego.antonelli/Desktop/projects/widgets-resources/node_modules/react-native-progress/Bar.js ***!
  \***********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ProgressBar; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "../../../node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_native__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-native */ "react-native");
/* harmony import */ var react_native__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_native__WEBPACK_IMPORTED_MODULE_2__);
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




var INDETERMINATE_WIDTH_FACTOR = 0.3;
var BAR_WIDTH_ZERO_POSITION = INDETERMINATE_WIDTH_FACTOR / (1 + INDETERMINATE_WIDTH_FACTOR);

var ProgressBar = /*#__PURE__*/function (_Component) {
  _inherits(ProgressBar, _Component);

  var _super = _createSuper(ProgressBar);

  function ProgressBar(props) {
    var _this;

    _classCallCheck(this, ProgressBar);

    _this = _super.call(this, props);

    _this.handleLayout = function (event) {
      if (!_this.props.width) {
        _this.setState({
          width: event.nativeEvent.layout.width
        });
      }

      if (_this.props.onLayout) {
        _this.props.onLayout(event);
      }
    };

    var progress = Math.min(Math.max(props.progress, 0), 1);
    _this.state = {
      width: 0,
      progress: new react_native__WEBPACK_IMPORTED_MODULE_2__["Animated"].Value(props.indeterminate ? INDETERMINATE_WIDTH_FACTOR : progress),
      animationValue: new react_native__WEBPACK_IMPORTED_MODULE_2__["Animated"].Value(BAR_WIDTH_ZERO_POSITION)
    };
    return _this;
  }

  _createClass(ProgressBar, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      if (this.props.indeterminate) {
        this.animate();
      }
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      if (prevProps.indeterminate !== this.props.indeterminate) {
        if (this.props.indeterminate) {
          this.animate();
        } else {
          react_native__WEBPACK_IMPORTED_MODULE_2__["Animated"].spring(this.state.animationValue, {
            toValue: BAR_WIDTH_ZERO_POSITION,
            useNativeDriver: this.props.useNativeDriver
          }).start();
        }
      }

      if (prevProps.indeterminate !== this.props.indeterminate || prevProps.progress !== this.props.progress) {
        var progress = this.props.indeterminate ? INDETERMINATE_WIDTH_FACTOR : Math.min(Math.max(this.props.progress, 0), 1);

        if (this.props.animated) {
          var _this$props = this.props,
              animationType = _this$props.animationType,
              animationConfig = _this$props.animationConfig;
          react_native__WEBPACK_IMPORTED_MODULE_2__["Animated"][animationType](this.state.progress, _objectSpread(_objectSpread({}, animationConfig), {}, {
            toValue: progress,
            useNativeDriver: this.props.useNativeDriver
          })).start();
        } else {
          this.state.progress.setValue(progress);
        }
      }
    }
  }, {
    key: "animate",
    value: function animate() {
      var _this2 = this;

      this.state.animationValue.setValue(0);
      react_native__WEBPACK_IMPORTED_MODULE_2__["Animated"].timing(this.state.animationValue, {
        toValue: 1,
        duration: this.props.indeterminateAnimationDuration,
        easing: react_native__WEBPACK_IMPORTED_MODULE_2__["Easing"].linear,
        isInteraction: false,
        useNativeDriver: this.props.useNativeDriver
      }).start(function (endState) {
        if (endState.finished) {
          _this2.animate();
        }
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props2 = this.props,
          borderColor = _this$props2.borderColor,
          borderRadius = _this$props2.borderRadius,
          borderWidth = _this$props2.borderWidth,
          children = _this$props2.children,
          color = _this$props2.color,
          height = _this$props2.height,
          style = _this$props2.style,
          unfilledColor = _this$props2.unfilledColor,
          width = _this$props2.width,
          restProps = _objectWithoutProperties(_this$props2, ["borderColor", "borderRadius", "borderWidth", "children", "color", "height", "style", "unfilledColor", "width"]);

      var innerWidth = Math.max(0, width || this.state.width) - borderWidth * 2;
      var containerStyle = {
        width: width,
        borderWidth: borderWidth,
        borderColor: borderColor || color,
        borderRadius: borderRadius,
        overflow: 'hidden',
        backgroundColor: unfilledColor
      };
      var progressStyle = {
        backgroundColor: color,
        height: height,
        transform: [{
          translateX: this.state.animationValue.interpolate({
            inputRange: [0, 1],
            outputRange: [innerWidth * -INDETERMINATE_WIDTH_FACTOR, innerWidth]
          })
        }, {
          translateX: this.state.progress.interpolate({
            inputRange: [0, 1],
            outputRange: [innerWidth / (react_native__WEBPACK_IMPORTED_MODULE_2__["I18nManager"].isRTL ? 2 : -2), 0]
          })
        }, {
          // Interpolation a temp workaround for https://github.com/facebook/react-native/issues/6278
          scaleX: this.state.progress.interpolate({
            inputRange: [0, 1],
            outputRange: [0.0001, 1]
          })
        }]
      };
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_native__WEBPACK_IMPORTED_MODULE_2__["View"], _extends({
        style: [containerStyle, style],
        onLayout: this.handleLayout
      }, restProps), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_native__WEBPACK_IMPORTED_MODULE_2__["Animated"].View, {
        style: progressStyle
      }), children);
    }
  }]);

  return ProgressBar;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

ProgressBar.propTypes = {
  animated: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
  borderColor: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  borderRadius: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number,
  borderWidth: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number,
  children: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.node,
  color: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  height: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number,
  indeterminate: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
  indeterminateAnimationDuration: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number,
  onLayout: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,
  progress: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number,
  style: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.any,
  unfilledColor: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  width: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number,
  useNativeDriver: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
  animationConfig: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object,
  animationType: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOf(['decay', 'timing', 'spring'])
};
ProgressBar.defaultProps = {
  animated: true,
  borderRadius: 4,
  borderWidth: 1,
  color: 'rgba(0, 122, 255, 1)',
  height: 6,
  indeterminate: false,
  indeterminateAnimationDuration: 1000,
  progress: 0,
  width: 150,
  useNativeDriver: false,
  animationConfig: {
    bounciness: 0
  },
  animationType: 'spring'
};


/***/ }),

/***/ "../../../node_modules/react-native-progress/Circle.js":
/*!**************************************************************************************************************!*\
  !*** /Users/diego.antonelli/Desktop/projects/widgets-resources/node_modules/react-native-progress/Circle.js ***!
  \**************************************************************************************************************/
/*! exports provided: ProgressCircle, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProgressCircle", function() { return ProgressCircle; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "../../../node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_native__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-native */ "react-native");
/* harmony import */ var react_native__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_native__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _react_native_community_art__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @react-native-community/art */ "@react-native-community/art");
/* harmony import */ var _react_native_community_art__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_react_native_community_art__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _Shapes_Arc__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Shapes/Arc */ "../../../node_modules/react-native-progress/Shapes/Arc.js");
/* harmony import */ var _withAnimation__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./withAnimation */ "../../../node_modules/react-native-progress/withAnimation.js");
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







var CIRCLE = Math.PI * 2;
var AnimatedSurface = react_native__WEBPACK_IMPORTED_MODULE_2__["Animated"].createAnimatedComponent(_react_native_community_art__WEBPACK_IMPORTED_MODULE_3__["Surface"]);
var AnimatedArc = react_native__WEBPACK_IMPORTED_MODULE_2__["Animated"].createAnimatedComponent(_Shapes_Arc__WEBPACK_IMPORTED_MODULE_4__["default"]);
var styles = react_native__WEBPACK_IMPORTED_MODULE_2__["StyleSheet"].create({
  container: {
    backgroundColor: 'transparent',
    overflow: 'hidden'
  }
});
var ProgressCircle = /*#__PURE__*/function (_Component) {
  _inherits(ProgressCircle, _Component);

  var _super = _createSuper(ProgressCircle);

  function ProgressCircle(props, context) {
    var _this;

    _classCallCheck(this, ProgressCircle);

    _this = _super.call(this, props, context);
    _this.progressValue = 0;
    return _this;
  }

  _createClass(ProgressCircle, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      if (this.props.animated) {
        this.props.progress.addListener(function (event) {
          _this2.progressValue = event.value;

          if (_this2.props.showsText || _this2.progressValue === 1) {
            _this2.forceUpdate();
          }
        });
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          animated = _this$props.animated,
          borderColor = _this$props.borderColor,
          borderWidth = _this$props.borderWidth,
          color = _this$props.color,
          children = _this$props.children,
          direction = _this$props.direction,
          fill = _this$props.fill,
          formatText = _this$props.formatText,
          indeterminate = _this$props.indeterminate,
          progress = _this$props.progress,
          rotation = _this$props.rotation,
          showsText = _this$props.showsText,
          size = _this$props.size,
          style = _this$props.style,
          strokeCap = _this$props.strokeCap,
          textStyle = _this$props.textStyle,
          thickness = _this$props.thickness,
          unfilledColor = _this$props.unfilledColor,
          endAngle = _this$props.endAngle,
          allowFontScaling = _this$props.allowFontScaling,
          restProps = _objectWithoutProperties(_this$props, ["animated", "borderColor", "borderWidth", "color", "children", "direction", "fill", "formatText", "indeterminate", "progress", "rotation", "showsText", "size", "style", "strokeCap", "textStyle", "thickness", "unfilledColor", "endAngle", "allowFontScaling"]);

      var border = borderWidth || (indeterminate ? 1 : 0);
      var radius = size / 2 - border;
      var offset = {
        top: border,
        left: border
      };
      var textOffset = border + thickness;
      var textSize = size - textOffset * 2;
      var Surface = rotation ? AnimatedSurface : _react_native_community_art__WEBPACK_IMPORTED_MODULE_3__["Surface"];
      var Shape = animated ? AnimatedArc : _Shapes_Arc__WEBPACK_IMPORTED_MODULE_4__["default"];
      var progressValue = animated ? this.progressValue : progress;
      var angle = animated ? react_native__WEBPACK_IMPORTED_MODULE_2__["Animated"].multiply(progress, CIRCLE) : progress * CIRCLE;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_native__WEBPACK_IMPORTED_MODULE_2__["View"], _extends({
        style: [styles.container, style]
      }, restProps), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Surface, {
        width: size,
        height: size,
        style: {
          transform: [{
            rotate: indeterminate && rotation ? rotation.interpolate({
              inputRange: [0, 1],
              outputRange: ['0deg', '360deg']
            }) : '0deg'
          }]
        }
      }, unfilledColor && progressValue !== 1 ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Shape, {
        fill: fill,
        radius: radius,
        offset: offset,
        startAngle: angle,
        endAngle: CIRCLE,
        direction: direction,
        stroke: unfilledColor,
        strokeWidth: thickness
      }) : false, !indeterminate ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Shape, {
        fill: fill,
        radius: radius,
        offset: offset,
        startAngle: 0,
        endAngle: angle,
        direction: direction,
        stroke: color,
        strokeCap: strokeCap,
        strokeWidth: thickness
      }) : false, border ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Shapes_Arc__WEBPACK_IMPORTED_MODULE_4__["default"], {
        radius: size / 2,
        startAngle: 0,
        endAngle: (indeterminate ? endAngle * 2 : 2) * Math.PI,
        stroke: borderColor || color,
        strokeCap: strokeCap,
        strokeWidth: border
      }) : false), !indeterminate && showsText ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_native__WEBPACK_IMPORTED_MODULE_2__["View"], {
        style: {
          position: 'absolute',
          left: textOffset,
          top: textOffset,
          width: textSize,
          height: textSize,
          borderRadius: textSize / 2,
          alignItems: 'center',
          justifyContent: 'center'
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_native__WEBPACK_IMPORTED_MODULE_2__["Text"], {
        style: [{
          color: color,
          fontSize: textSize / 4.5,
          fontWeight: '300'
        }, textStyle],
        allowFontScaling: allowFontScaling
      }, formatText(progressValue))) : false, children);
    }
  }]);

  return ProgressCircle;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);
ProgressCircle.propTypes = {
  animated: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
  borderColor: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  borderWidth: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number,
  color: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  children: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.node,
  direction: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOf(['clockwise', 'counter-clockwise']),
  fill: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  formatText: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,
  indeterminate: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
  progress: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number, prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.instanceOf(react_native__WEBPACK_IMPORTED_MODULE_2__["Animated"].Value)]),
  rotation: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.instanceOf(react_native__WEBPACK_IMPORTED_MODULE_2__["Animated"].Value),
  showsText: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
  size: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number,
  style: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.any,
  strokeCap: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOf(['butt', 'square', 'round']),
  textStyle: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.any,
  thickness: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number,
  unfilledColor: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  endAngle: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number,
  allowFontScaling: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool
};
ProgressCircle.defaultProps = {
  borderWidth: 1,
  color: 'rgba(0, 122, 255, 1)',
  direction: 'clockwise',
  formatText: function formatText(progress) {
    return "".concat(Math.round(progress * 100), "%");
  },
  progress: 0,
  showsText: false,
  size: 40,
  thickness: 3,
  endAngle: 0.9,
  allowFontScaling: true
};
/* harmony default export */ __webpack_exports__["default"] = (Object(_withAnimation__WEBPACK_IMPORTED_MODULE_5__["default"])(ProgressCircle));

/***/ }),

/***/ "../../../node_modules/react-native-progress/CircleSnail.js":
/*!*******************************************************************************************************************!*\
  !*** /Users/diego.antonelli/Desktop/projects/widgets-resources/node_modules/react-native-progress/CircleSnail.js ***!
  \*******************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return CircleSnail; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "../../../node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_native__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-native */ "react-native");
/* harmony import */ var react_native__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_native__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _react_native_community_art__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @react-native-community/art */ "@react-native-community/art");
/* harmony import */ var _react_native_community_art__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_react_native_community_art__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _Shapes_Arc__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Shapes/Arc */ "../../../node_modules/react-native-progress/Shapes/Arc.js");
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






var AnimatedArc = react_native__WEBPACK_IMPORTED_MODULE_2__["Animated"].createAnimatedComponent(_Shapes_Arc__WEBPACK_IMPORTED_MODULE_4__["default"]);
var MIN_ARC_ANGLE = 0.1;
var MAX_ARC_ANGLE = 1.5 * Math.PI;

var CircleSnail = /*#__PURE__*/function (_Component) {
  _inherits(CircleSnail, _Component);

  var _super = _createSuper(CircleSnail);

  function CircleSnail(props) {
    var _this;

    _classCallCheck(this, CircleSnail);

    _this = _super.call(this, props);
    _this.state = {
      startAngle: new react_native__WEBPACK_IMPORTED_MODULE_2__["Animated"].Value(-MIN_ARC_ANGLE),
      endAngle: new react_native__WEBPACK_IMPORTED_MODULE_2__["Animated"].Value(0),
      rotation: new react_native__WEBPACK_IMPORTED_MODULE_2__["Animated"].Value(0),
      colorIndex: 0
    };
    return _this;
  }

  _createClass(CircleSnail, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      if (this.props.animating) {
        this.animate();
        this.spin();
      }
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      if (prevProps.animating !== this.props.animating) {
        if (this.props.animating) {
          this.animate();
          this.spin();
        } else {
          this.stopAnimations();
        }
      }
    }
  }, {
    key: "animate",
    value: function animate() {
      var _this2 = this;

      var iteration = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
      react_native__WEBPACK_IMPORTED_MODULE_2__["Animated"].sequence([react_native__WEBPACK_IMPORTED_MODULE_2__["Animated"].timing(this.state.startAngle, {
        toValue: -MAX_ARC_ANGLE * iteration - MIN_ARC_ANGLE,
        duration: this.props.duration || 1000,
        isInteraction: false,
        easing: react_native__WEBPACK_IMPORTED_MODULE_2__["Easing"].inOut(react_native__WEBPACK_IMPORTED_MODULE_2__["Easing"].quad),
        useNativeDriver: this.props.useNativeDriver
      }), react_native__WEBPACK_IMPORTED_MODULE_2__["Animated"].timing(this.state.endAngle, {
        toValue: -MAX_ARC_ANGLE * iteration,
        duration: this.props.duration || 1000,
        isInteraction: false,
        easing: react_native__WEBPACK_IMPORTED_MODULE_2__["Easing"].inOut(react_native__WEBPACK_IMPORTED_MODULE_2__["Easing"].quad),
        useNativeDriver: this.props.useNativeDriver
      })]).start(function (endState) {
        if (endState.finished) {
          if (Array.isArray(_this2.props.color)) {
            _this2.setState({
              colorIndex: iteration % _this2.props.color.length
            });
          }

          _this2.animate(iteration + 1);
        }
      });
    }
  }, {
    key: "spin",
    value: function spin() {
      var _this3 = this;

      react_native__WEBPACK_IMPORTED_MODULE_2__["Animated"].timing(this.state.rotation, {
        toValue: 1,
        duration: this.props.spinDuration || 5000,
        easing: react_native__WEBPACK_IMPORTED_MODULE_2__["Easing"].linear,
        isInteraction: false,
        useNativeDriver: this.props.useNativeDriver
      }).start(function (endState) {
        if (endState.finished) {
          _this3.state.rotation.setValue(0);

          _this3.spin();
        }
      });
    }
  }, {
    key: "stopAnimations",
    value: function stopAnimations() {
      this.state.startAngle.stopAnimation();
      this.state.endAngle.stopAnimation();
      this.state.rotation.stopAnimation();
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          animating = _this$props.animating,
          children = _this$props.children,
          color = _this$props.color,
          direction = _this$props.direction,
          hidesWhenStopped = _this$props.hidesWhenStopped,
          size = _this$props.size,
          style = _this$props.style,
          thickness = _this$props.thickness,
          strokeCap = _this$props.strokeCap,
          restProps = _objectWithoutProperties(_this$props, ["animating", "children", "color", "direction", "hidesWhenStopped", "size", "style", "thickness", "strokeCap"]);

      if (!animating && hidesWhenStopped) {
        return null;
      }

      var radius = size / 2 - thickness;
      var offset = {
        top: thickness,
        left: thickness
      };
      var directionFactor = direction === 'counter-clockwise' ? -1 : 1;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_native__WEBPACK_IMPORTED_MODULE_2__["Animated"].View, _extends({}, restProps, {
        style: [style, {
          backgroundColor: 'transparent',
          overflow: 'hidden',
          transform: [{
            rotate: this.state.rotation.interpolate({
              inputRange: [0, 1],
              outputRange: ['0deg', "".concat(directionFactor * 360, "deg")]
            })
          }]
        }]
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_react_native_community_art__WEBPACK_IMPORTED_MODULE_3__["Surface"], {
        width: size,
        height: size
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(AnimatedArc, {
        direction: direction === 'counter-clockwise' ? 'clockwise' : 'counter-clockwise',
        radius: radius,
        stroke: Array.isArray(color) ? color[this.state.colorIndex] : color,
        offset: offset,
        startAngle: this.state.startAngle,
        endAngle: this.state.endAngle,
        strokeCap: strokeCap,
        strokeWidth: thickness
      })), children);
    }
  }]);

  return CircleSnail;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

CircleSnail.propTypes = {
  animating: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
  color: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string)]),
  children: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.node,
  direction: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOf(['clockwise', 'counter-clockwise']),
  duration: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number,
  hidesWhenStopped: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
  size: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number,
  spinDuration: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number,
  style: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.any,
  thickness: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number,
  strokeCap: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  useNativeDriver: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool
};
CircleSnail.defaultProps = {
  animating: true,
  color: 'rgba(0, 122, 255, 1)',
  direction: 'counter-clockwise',
  hidesWhenStopped: false,
  size: 40,
  thickness: 3,
  strokeCap: 'round',
  useNativeDriver: false
};


/***/ }),

/***/ "../../../node_modules/react-native-progress/Pie.js":
/*!***********************************************************************************************************!*\
  !*** /Users/diego.antonelli/Desktop/projects/widgets-resources/node_modules/react-native-progress/Pie.js ***!
  \***********************************************************************************************************/
/*! exports provided: ProgressPie, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProgressPie", function() { return ProgressPie; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "../../../node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_native__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-native */ "react-native");
/* harmony import */ var react_native__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_native__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _react_native_community_art__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @react-native-community/art */ "@react-native-community/art");
/* harmony import */ var _react_native_community_art__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_react_native_community_art__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _Shapes_Circle__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Shapes/Circle */ "../../../node_modules/react-native-progress/Shapes/Circle.js");
/* harmony import */ var _Shapes_Sector__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Shapes/Sector */ "../../../node_modules/react-native-progress/Shapes/Sector.js");
/* harmony import */ var _withAnimation__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./withAnimation */ "../../../node_modules/react-native-progress/withAnimation.js");
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








var CIRCLE = Math.PI * 2;
var AnimatedSurface = react_native__WEBPACK_IMPORTED_MODULE_2__["Animated"].createAnimatedComponent(_react_native_community_art__WEBPACK_IMPORTED_MODULE_3__["Surface"]);
var AnimatedSector = react_native__WEBPACK_IMPORTED_MODULE_2__["Animated"].createAnimatedComponent(_Shapes_Sector__WEBPACK_IMPORTED_MODULE_5__["default"]);
var styles = react_native__WEBPACK_IMPORTED_MODULE_2__["StyleSheet"].create({
  container: {
    backgroundColor: 'transparent',
    overflow: 'hidden'
  }
});
var ProgressPie = /*#__PURE__*/function (_Component) {
  _inherits(ProgressPie, _Component);

  var _super = _createSuper(ProgressPie);

  function ProgressPie() {
    _classCallCheck(this, ProgressPie);

    return _super.apply(this, arguments);
  }

  _createClass(ProgressPie, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          animated = _this$props.animated,
          borderColor = _this$props.borderColor,
          borderWidth = _this$props.borderWidth,
          children = _this$props.children,
          color = _this$props.color,
          progress = _this$props.progress,
          rotation = _this$props.rotation,
          size = _this$props.size,
          style = _this$props.style,
          unfilledColor = _this$props.unfilledColor,
          restProps = _objectWithoutProperties(_this$props, ["animated", "borderColor", "borderWidth", "children", "color", "progress", "rotation", "size", "style", "unfilledColor"]);

      var Surface = rotation ? AnimatedSurface : _react_native_community_art__WEBPACK_IMPORTED_MODULE_3__["Surface"];
      var Shape = animated ? AnimatedSector : _Shapes_Sector__WEBPACK_IMPORTED_MODULE_5__["default"];
      var angle = animated ? react_native__WEBPACK_IMPORTED_MODULE_2__["Animated"].multiply(progress, CIRCLE) : progress * CIRCLE;
      var radius = size / 2 - borderWidth;
      var offset = {
        top: borderWidth,
        left: borderWidth
      };
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_native__WEBPACK_IMPORTED_MODULE_2__["View"], _extends({
        style: [styles.container, style]
      }, restProps), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Surface, {
        width: size,
        height: size,
        style: rotation ? {
          transform: [{
            rotate: rotation.interpolate({
              inputRange: [0, 1],
              outputRange: ['0deg', '360deg']
            })
          }]
        } : undefined
      }, unfilledColor ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Shapes_Circle__WEBPACK_IMPORTED_MODULE_4__["default"], {
        radius: radius,
        offset: offset,
        fill: unfilledColor
      }) : false, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Shape, {
        radius: radius,
        angle: angle,
        offset: offset,
        fill: color
      }), borderWidth ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Shapes_Circle__WEBPACK_IMPORTED_MODULE_4__["default"], {
        radius: size / 2,
        stroke: borderColor || color,
        strokeWidth: borderWidth
      }) : false), children);
    }
  }]);

  return ProgressPie;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);
ProgressPie.propTypes = {
  animated: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
  borderColor: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  borderWidth: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number,
  color: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  children: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.node,
  progress: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number, prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.instanceOf(react_native__WEBPACK_IMPORTED_MODULE_2__["Animated"].Value)]),
  rotation: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.instanceOf(react_native__WEBPACK_IMPORTED_MODULE_2__["Animated"].Value),
  size: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number,
  style: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.any,
  unfilledColor: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string
};
ProgressPie.defaultProps = {
  borderWidth: 1,
  color: 'rgba(0, 122, 255, 1)',
  progress: 0,
  size: 40
};
/* harmony default export */ __webpack_exports__["default"] = (Object(_withAnimation__WEBPACK_IMPORTED_MODULE_6__["default"])(ProgressPie, 0.2));

/***/ }),

/***/ "../../../node_modules/react-native-progress/Shapes/Arc.js":
/*!******************************************************************************************************************!*\
  !*** /Users/diego.antonelli/Desktop/projects/widgets-resources/node_modules/react-native-progress/Shapes/Arc.js ***!
  \******************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Arc; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "../../../node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _react_native_community_art__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @react-native-community/art */ "@react-native-community/art");
/* harmony import */ var _react_native_community_art__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_react_native_community_art__WEBPACK_IMPORTED_MODULE_2__);
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




var CIRCLE = Math.PI * 2;

function makeArcPath(x, y, startAngleArg, endAngleArg, radius, direction) {
  var startAngle = startAngleArg;
  var endAngle = endAngleArg;

  if (endAngle - startAngle >= CIRCLE) {
    endAngle = CIRCLE + endAngle % CIRCLE;
  } else {
    endAngle = endAngle % CIRCLE;
  }

  startAngle = startAngle % CIRCLE;
  var angle = startAngle > endAngle ? CIRCLE - startAngle + endAngle : endAngle - startAngle;

  if (angle >= CIRCLE) {
    return new _react_native_community_art__WEBPACK_IMPORTED_MODULE_2__["Path"]().moveTo(x + radius, y).arc(0, radius * 2, radius, radius).arc(0, radius * -2, radius, radius).close();
  }

  var directionFactor = direction === 'counter-clockwise' ? -1 : 1;
  endAngle *= directionFactor;
  startAngle *= directionFactor;
  var startSine = Math.sin(startAngle);
  var startCosine = Math.cos(startAngle);
  var endSine = Math.sin(endAngle);
  var endCosine = Math.cos(endAngle);
  var arcFlag = angle > Math.PI ? 1 : 0;
  var reverseFlag = direction === 'counter-clockwise' ? 0 : 1;
  return "M".concat(x + radius * (1 + startSine), " ").concat(y + radius - radius * startCosine, "\n          A").concat(radius, " ").concat(radius, " 0 ").concat(arcFlag, " ").concat(reverseFlag, " ").concat(x + radius * (1 + endSine), " ").concat(y + radius - radius * endCosine);
}

var Arc = /*#__PURE__*/function (_Component) {
  _inherits(Arc, _Component);

  var _super = _createSuper(Arc);

  function Arc() {
    _classCallCheck(this, Arc);

    return _super.apply(this, arguments);
  }

  _createClass(Arc, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          startAngle = _this$props.startAngle,
          endAngle = _this$props.endAngle,
          radius = _this$props.radius,
          offset = _this$props.offset,
          direction = _this$props.direction,
          strokeCap = _this$props.strokeCap,
          strokeWidth = _this$props.strokeWidth,
          restProps = _objectWithoutProperties(_this$props, ["startAngle", "endAngle", "radius", "offset", "direction", "strokeCap", "strokeWidth"]);

      var path = makeArcPath((offset.left || 0) + strokeWidth / 2, (offset.top || 0) + strokeWidth / 2, startAngle, endAngle, radius - strokeWidth / 2, direction);
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_react_native_community_art__WEBPACK_IMPORTED_MODULE_2__["Shape"], _extends({
        d: path,
        strokeCap: strokeCap,
        strokeWidth: strokeWidth
      }, restProps));
    }
  }]);

  return Arc;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

Arc.propTypes = {
  startAngle: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number.isRequired,
  // in radians
  endAngle: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number.isRequired,
  // in radians
  radius: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number.isRequired,
  offset: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.shape({
    top: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number,
    left: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number
  }),
  strokeCap: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  strokeWidth: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number,
  direction: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOf(['clockwise', 'counter-clockwise'])
};
Arc.defaultProps = {
  startAngle: 0,
  offset: {
    top: 0,
    left: 0
  },
  strokeCap: 'butt',
  strokeWidth: 0,
  direction: 'clockwise'
};


/***/ }),

/***/ "../../../node_modules/react-native-progress/Shapes/Circle.js":
/*!*********************************************************************************************************************!*\
  !*** /Users/diego.antonelli/Desktop/projects/widgets-resources/node_modules/react-native-progress/Shapes/Circle.js ***!
  \*********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Circle; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "../../../node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _react_native_community_art__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @react-native-community/art */ "@react-native-community/art");
/* harmony import */ var _react_native_community_art__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_react_native_community_art__WEBPACK_IMPORTED_MODULE_2__);
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





function makeCirclePath(x, y, radius, direction) {
  var arcMethod = direction === 'counter-clockwise' ? 'counterArc' : 'arc';
  return new _react_native_community_art__WEBPACK_IMPORTED_MODULE_2__["Path"]().moveTo(x, y).move(radius, 0)[arcMethod](0, radius * 2, radius, radius)[arcMethod](0, radius * -2, radius, radius).close();
}

var Circle = /*#__PURE__*/function (_Component) {
  _inherits(Circle, _Component);

  var _super = _createSuper(Circle);

  function Circle() {
    _classCallCheck(this, Circle);

    return _super.apply(this, arguments);
  }

  _createClass(Circle, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          radius = _this$props.radius,
          offset = _this$props.offset,
          strokeWidth = _this$props.strokeWidth,
          direction = _this$props.direction,
          restProps = _objectWithoutProperties(_this$props, ["radius", "offset", "strokeWidth", "direction"]);

      var path = makeCirclePath((offset.left || 0) + strokeWidth / 2, (offset.top || 0) + strokeWidth / 2, radius - strokeWidth / 2, direction);
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_react_native_community_art__WEBPACK_IMPORTED_MODULE_2__["Shape"], _extends({
        d: path,
        strokeCap: "butt",
        strokeWidth: strokeWidth
      }, restProps));
    }
  }]);

  return Circle;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

Circle.propTypes = {
  radius: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number.isRequired,
  offset: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.shape({
    top: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number,
    left: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number
  }),
  strokeWidth: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number,
  direction: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOf(['clockwise', 'counter-clockwise'])
};
Circle.defaultProps = {
  offset: {
    top: 0,
    left: 0
  },
  strokeWidth: 0,
  direction: 'clockwise'
};


/***/ }),

/***/ "../../../node_modules/react-native-progress/Shapes/Sector.js":
/*!*********************************************************************************************************************!*\
  !*** /Users/diego.antonelli/Desktop/projects/widgets-resources/node_modules/react-native-progress/Shapes/Sector.js ***!
  \*********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Sector; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "../../../node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _react_native_community_art__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @react-native-community/art */ "@react-native-community/art");
/* harmony import */ var _react_native_community_art__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_react_native_community_art__WEBPACK_IMPORTED_MODULE_2__);
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




var CIRCLE = Math.PI * 2;

function makeSectorPath(x, y, angle, radius) {
  if (angle >= CIRCLE) {
    return new _react_native_community_art__WEBPACK_IMPORTED_MODULE_2__["Path"]().moveTo(x, y).move(radius, 0).arc(0, radius * 2, radius, radius).arc(0, radius * -2, radius, radius).close();
  }

  var startAngle = Math.PI / 2 - angle;
  var endAngle = Math.PI / 2;
  var arcFlag = angle > Math.PI ? 1 : 0;
  var centerX = x + radius;
  var centerY = y + radius;
  return "M".concat(centerX, " ").concat(centerY, "\n          L").concat(centerX + Math.cos(startAngle) * radius, " ").concat(centerY - Math.sin(startAngle) * radius, "\n          A").concat(radius, " ").concat(radius, " 0 ").concat(arcFlag, " 0 ").concat(centerX + Math.cos(endAngle) * radius, " ").concat(centerY - Math.sin(endAngle) * radius, "\n          L").concat(centerX, " ").concat(centerY);
}

var Sector = /*#__PURE__*/function (_Component) {
  _inherits(Sector, _Component);

  var _super = _createSuper(Sector);

  function Sector() {
    _classCallCheck(this, Sector);

    return _super.apply(this, arguments);
  }

  _createClass(Sector, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          angle = _this$props.angle,
          radius = _this$props.radius,
          offset = _this$props.offset,
          restProps = _objectWithoutProperties(_this$props, ["angle", "radius", "offset"]);

      var path = makeSectorPath(offset.left || 0, offset.top || 0, angle, radius);
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_react_native_community_art__WEBPACK_IMPORTED_MODULE_2__["Shape"], _extends({
        d: path
      }, restProps));
    }
  }]);

  return Sector;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

Sector.propTypes = {
  angle: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number.isRequired,
  // in radians
  radius: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number.isRequired,
  offset: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.shape({
    top: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number,
    left: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number
  })
};
Sector.defaultProps = {
  offset: {
    top: 0,
    left: 0
  }
};


/***/ }),

/***/ "../../../node_modules/react-native-progress/index.js":
/*!*************************************************************************************************************!*\
  !*** /Users/diego.antonelli/Desktop/projects/widgets-resources/node_modules/react-native-progress/index.js ***!
  \*************************************************************************************************************/
/*! exports provided: Bar, Circle, CircleSnail, Pie */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Bar__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Bar */ "../../../node_modules/react-native-progress/Bar.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Bar", function() { return _Bar__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _Circle__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Circle */ "../../../node_modules/react-native-progress/Circle.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Circle", function() { return _Circle__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony import */ var _CircleSnail__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./CircleSnail */ "../../../node_modules/react-native-progress/CircleSnail.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CircleSnail", function() { return _CircleSnail__WEBPACK_IMPORTED_MODULE_2__["default"]; });

/* harmony import */ var _Pie__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Pie */ "../../../node_modules/react-native-progress/Pie.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Pie", function() { return _Pie__WEBPACK_IMPORTED_MODULE_3__["default"]; });






/***/ }),

/***/ "../../../node_modules/react-native-progress/withAnimation.js":
/*!*********************************************************************************************************************!*\
  !*** /Users/diego.antonelli/Desktop/projects/widgets-resources/node_modules/react-native-progress/withAnimation.js ***!
  \*********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return withAnimation; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "../../../node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_native__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-native */ "react-native");
/* harmony import */ var react_native__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_native__WEBPACK_IMPORTED_MODULE_2__);
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




function withAnimation(WrappedComponent, indeterminateProgress) {
  var _class, _temp;

  var wrappedComponentName = WrappedComponent.displayName || WrappedComponent.name || 'Component';
  return _temp = _class = /*#__PURE__*/function (_Component) {
    _inherits(AnimatedComponent, _Component);

    var _super = _createSuper(AnimatedComponent);

    function AnimatedComponent(props) {
      var _this;

      _classCallCheck(this, AnimatedComponent);

      _this = _super.call(this, props);
      _this.progressValue = Math.min(Math.max(props.progress, 0), 1);
      _this.rotationValue = 0;
      _this.state = {
        progress: new react_native__WEBPACK_IMPORTED_MODULE_2__["Animated"].Value(_this.progressValue),
        rotation: new react_native__WEBPACK_IMPORTED_MODULE_2__["Animated"].Value(_this.rotationValue)
      };
      return _this;
    }

    _createClass(AnimatedComponent, [{
      key: "componentDidMount",
      value: function componentDidMount() {
        var _this2 = this;

        this.state.progress.addListener(function (event) {
          _this2.progressValue = event.value;
        });
        this.state.rotation.addListener(function (event) {
          _this2.rotationValue = event.value;
        });

        if (this.props.indeterminate) {
          this.spin();

          if (indeterminateProgress) {
            react_native__WEBPACK_IMPORTED_MODULE_2__["Animated"].spring(this.state.progress, {
              toValue: indeterminateProgress,
              useNativeDriver: false
            }).start();
          }
        }
      }
    }, {
      key: "componentDidUpdate",
      value: function componentDidUpdate(prevProps) {
        var _this3 = this;

        if (prevProps.indeterminate !== this.props.indeterminate) {
          if (this.props.indeterminate) {
            this.spin();
          } else {
            react_native__WEBPACK_IMPORTED_MODULE_2__["Animated"].spring(this.state.rotation, {
              toValue: this.rotationValue > 0.5 ? 1 : 0,
              useNativeDriver: false
            }).start(function (endState) {
              if (endState.finished) {
                _this3.state.rotation.setValue(0);
              }
            });
          }
        }

        var progress = this.props.indeterminate ? indeterminateProgress || 0 : Math.min(Math.max(this.props.progress, 0), 1);

        if (progress !== this.progressValue) {
          if (this.props.animated) {
            react_native__WEBPACK_IMPORTED_MODULE_2__["Animated"].spring(this.state.progress, {
              toValue: progress,
              bounciness: 0,
              useNativeDriver: false
            }).start();
          } else {
            this.state.progress.setValue(progress);
          }
        }
      }
    }, {
      key: "componentWillUnmount",
      value: function componentWillUnmount() {
        this.state.progress.removeAllListeners();
        this.state.rotation.removeAllListeners();
      }
    }, {
      key: "spin",
      value: function spin() {
        var _this4 = this;

        this.state.rotation.setValue(0);
        react_native__WEBPACK_IMPORTED_MODULE_2__["Animated"].timing(this.state.rotation, {
          toValue: this.props.direction === 'counter-clockwise' ? -1 : 1,
          duration: this.props.indeterminateAnimationDuration,
          easing: react_native__WEBPACK_IMPORTED_MODULE_2__["Easing"].linear,
          isInteraction: false,
          useNativeDriver: false
        }).start(function (endState) {
          if (endState.finished) {
            _this4.spin();
          }
        });
      }
    }, {
      key: "render",
      value: function render() {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(WrappedComponent, _extends({}, this.props, {
          progress: this.props.animated ? this.state.progress : this.props.progress,
          rotation: this.state.rotation
        }));
      }
    }]);

    return AnimatedComponent;
  }(react__WEBPACK_IMPORTED_MODULE_0__["Component"]), _class.displayName = "withAnimation(".concat(wrappedComponentName, ")"), _class.propTypes = {
    animated: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
    direction: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOf(['clockwise', 'counter-clockwise']),
    indeterminate: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
    indeterminateAnimationDuration: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number,
    progress: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number
  }, _class.defaultProps = {
    animated: true,
    indeterminateAnimationDuration: 1000,
    indeterminate: false,
    progress: 0
  }, _temp;
}

/***/ }),

/***/ "../../../packages-native/progress-circle/src/ProgressCircle.tsx":
/*!************************************************************************************************************************!*\
  !*** /Users/diego.antonelli/Desktop/projects/widgets-resources/packages-native/progress-circle/src/ProgressCircle.tsx ***!
  \************************************************************************************************************************/
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
!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(/*! @native-mobile-resources/util-widgets */ "../../../packages-native/util-widgets/dist/index.js"), __webpack_require__(/*! react */ "react"), __webpack_require__(/*! react-native */ "react-native"), __webpack_require__(/*! react-native-progress */ "../../../node_modules/react-native-progress/index.js"), __webpack_require__(/*! ./ui/Styles */ "../../../packages-native/progress-circle/src/ui/Styles.ts")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, util_widgets_1, react_1, react_native_1, react_native_progress_1, Styles_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var ProgressCircle = (function (_super) {
        __extends(ProgressCircle, _super);
        function ProgressCircle() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.styles = util_widgets_1.flattenStyles(Styles_1.defaultProgressCircleStyle, _this.props.style);
            return _this;
        }
        ProgressCircle.prototype.render = function () {
            var _this = this;
            var validationMessages = this.validate();
            var progress = validationMessages.length === 0 ? this.calculateProgress() : 0;
            var showsText = this.props.circleText !== "none";
            return (react_1.createElement(react_native_1.View, { style: this.styles.container },
                react_1.createElement(react_native_progress_1.Circle, __assign({ testID: this.props.name, progress: progress, textStyle: this.styles.text, color: this.styles.fill.backgroundColor, size: Number(this.styles.circle.size), borderWidth: this.styles.circle.borderWidth, borderColor: this.styles.circle.borderColor, thickness: this.styles.fill.width, showsText: showsText }, (showsText ? { formatText: function () { return _this.formatText(progress); } } : {}), { strokeCap: this.styles.fill.lineCapRounded ? "round" : "square" })),
                validationMessages.length > 0 && (react_1.createElement(react_native_1.Text, { style: this.styles.validationMessage }, validationMessages.join("\n")))));
        };
        ProgressCircle.prototype.formatText = function (progress) {
            switch (this.props.circleText) {
                case "customText":
                    return (this.props.customText && this.props.customText.value) || "";
                case "percentage":
                    return Math.round(progress * 100) + "%";
                default:
                    return "";
            }
        };
        ProgressCircle.prototype.validate = function () {
            var messages = [];
            var _a = this.props, minimumValue = _a.minimumValue, maximumValue = _a.maximumValue, progressValue = _a.progressValue;
            if (util_widgets_1.unavailable(minimumValue)) {
                messages.push("No minimum value provided.");
            }
            if (util_widgets_1.unavailable(maximumValue)) {
                messages.push("No maximum value provided.");
            }
            if (util_widgets_1.unavailable(progressValue)) {
                messages.push("No current value provided.");
            }
            if (util_widgets_1.available(minimumValue) && util_widgets_1.available(maximumValue) && util_widgets_1.available(progressValue)) {
                if (minimumValue.value.gte(maximumValue.value)) {
                    messages.push("The minimum value must be equal or less than the maximum value.");
                }
                else {
                    if (progressValue.value.lt(minimumValue.value)) {
                        messages.push("The current value must be equal or greater than the minimum value.");
                    }
                    if (progressValue.value.gt(maximumValue.value)) {
                        messages.push("The current value must be equal or less than the maximum value.");
                    }
                }
            }
            return messages;
        };
        ProgressCircle.prototype.calculateProgress = function () {
            var _a = this.props, minimumValue = _a.minimumValue, maximumValue = _a.maximumValue, progressValue = _a.progressValue;
            if (!util_widgets_1.available(minimumValue) || !util_widgets_1.available(maximumValue) || !util_widgets_1.available(progressValue)) {
                return 0;
            }
            var numerator = progressValue.value.minus(minimumValue.value);
            var denominator = maximumValue.value.minus(minimumValue.value);
            return Number(numerator.div(denominator));
        };
        return ProgressCircle;
    }(react_1.Component));
    exports.ProgressCircle = ProgressCircle;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),

/***/ "../../../packages-native/progress-circle/src/ui/Styles.ts":
/*!******************************************************************************************************************!*\
  !*** /Users/diego.antonelli/Desktop/projects/widgets-resources/packages-native/progress-circle/src/ui/Styles.ts ***!
  \******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(/*! react-native */ "react-native")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, react_native_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.defaultProgressCircleStyle = {
        container: {},
        circle: {
            size: 100,
            borderWidth: 1,
            borderColor: react_native_1.Platform.select({ ios: "rgb(0, 122, 255)", default: "rgb(98,0,238)" })
        },
        fill: {
            width: 3,
            lineCapRounded: false,
            backgroundColor: react_native_1.Platform.select({ ios: "rgb(0, 122, 255)", default: "rgb(98,0,238)" })
        },
        text: {
            fontSize: 18,
            color: react_native_1.Platform.select({ ios: "rgb(0, 122, 255)", default: "rgb(98,0,238)" })
        },
        validationMessage: {
            color: "#ed1c24"
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

/***/ "@react-native-community/art":
/*!**********************************************!*\
  !*** external "@react-native-community/art" ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@react-native-community/art");

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
//# sourceMappingURL=ProgressCircle.js.map