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
/******/ 	return __webpack_require__(__webpack_require__.s = "../../../packages-native/carousel/src/Carousel.tsx");
/******/ })
/************************************************************************/
/******/ ({

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

/***/ "../../../node_modules/react-addons-shallow-compare/index.js":
/*!********************************************************************************************************************!*\
  !*** /Users/diego.antonelli/Desktop/projects/widgets-resources/node_modules/react-addons-shallow-compare/index.js ***!
  \********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @providesModule shallowCompare
 */


var shallowEqual = __webpack_require__(/*! fbjs/lib/shallowEqual */ "../../../node_modules/react-addons-shallow-compare/node_modules/fbjs/lib/shallowEqual.js");
/**
 * Does a shallow comparison for props and state.
 * See ReactComponentWithPureRenderMixin
 * See also https://facebook.github.io/react/docs/shallow-compare.html
 */


function shallowCompare(instance, nextProps, nextState) {
  return !shallowEqual(instance.props, nextProps) || !shallowEqual(instance.state, nextState);
}

module.exports = shallowCompare;

/***/ }),

/***/ "../../../node_modules/react-addons-shallow-compare/node_modules/fbjs/lib/shallowEqual.js":
/*!*************************************************************************************************************************************************!*\
  !*** /Users/diego.antonelli/Desktop/projects/widgets-resources/node_modules/react-addons-shallow-compare/node_modules/fbjs/lib/shallowEqual.js ***!
  \*************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @typechecks
 * 
 */

/*eslint-disable no-self-compare */


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

var hasOwnProperty = Object.prototype.hasOwnProperty;
/**
 * inlined Object.is polyfill to avoid requiring consumers ship their own
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
 */

function is(x, y) {
  // SameValue algorithm
  if (x === y) {
    // Steps 1-5, 7-10
    // Steps 6.b-6.e: +0 != -0
    // Added the nonzero y check to make Flow happy, but it is redundant
    return x !== 0 || y !== 0 || 1 / x === 1 / y;
  } else {
    // Step 6.a: NaN == NaN
    return x !== x && y !== y;
  }
}
/**
 * Performs equality by iterating through keys on an object and returning false
 * when any key has values which are not strictly equal between the arguments.
 * Returns true when the values of all keys are strictly equal.
 */


function shallowEqual(objA, objB) {
  if (is(objA, objB)) {
    return true;
  }

  if (_typeof(objA) !== 'object' || objA === null || _typeof(objB) !== 'object' || objB === null) {
    return false;
  }

  var keysA = Object.keys(objA);
  var keysB = Object.keys(objB);

  if (keysA.length !== keysB.length) {
    return false;
  } // Test for A's keys different from B.


  for (var i = 0; i < keysA.length; i++) {
    if (!hasOwnProperty.call(objB, keysA[i]) || !is(objA[keysA[i]], objB[keysA[i]])) {
      return false;
    }
  }

  return true;
}

module.exports = shallowEqual;

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

/***/ "../../../node_modules/react-native-snap-carousel/src/carousel/Carousel.js":
/*!**********************************************************************************************************************************!*\
  !*** /Users/diego.antonelli/Desktop/projects/widgets-resources/node_modules/react-native-snap-carousel/src/carousel/Carousel.js ***!
  \**********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Carousel; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_native__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-native */ "react-native");
/* harmony import */ var react_native__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_native__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "../../../node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_addons_shallow_compare__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-addons-shallow-compare */ "../../../node_modules/react-addons-shallow-compare/index.js");
/* harmony import */ var react_addons_shallow_compare__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_addons_shallow_compare__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _utils_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils/animations */ "../../../node_modules/react-native-snap-carousel/src/utils/animations.js");
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

function _toConsumableArray(arr) {
  return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
}

function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

function _iterableToArray(iter) {
  if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter);
}

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) return _arrayLikeToArray(arr);
}

function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
}

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(n);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }

  return arr2;
}

function _iterableToArrayLimit(arr, i) {
  if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return;
  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = undefined;

  try {
    for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
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






var IS_IOS = react_native__WEBPACK_IMPORTED_MODULE_1__["Platform"].OS === 'ios'; // Native driver for scroll events
// See: https://facebook.github.io/react-native/blog/2017/02/14/using-native-driver-for-animated.html

var AnimatedFlatList = react_native__WEBPACK_IMPORTED_MODULE_1__["FlatList"] ? react_native__WEBPACK_IMPORTED_MODULE_1__["Animated"].createAnimatedComponent(react_native__WEBPACK_IMPORTED_MODULE_1__["FlatList"]) : null;
var AnimatedScrollView = react_native__WEBPACK_IMPORTED_MODULE_1__["Animated"].createAnimatedComponent(react_native__WEBPACK_IMPORTED_MODULE_1__["ScrollView"]); // React Native automatically handles RTL layouts; unfortunately, it's buggy with horizontal ScrollView
// See https://github.com/facebook/react-native/issues/11960
// NOTE: the following variable is not declared in the constructor
// otherwise it is undefined at init, which messes with custom indexes

var IS_RTL = react_native__WEBPACK_IMPORTED_MODULE_1__["I18nManager"].isRTL;

var Carousel = /*#__PURE__*/function (_Component) {
  _inherits(Carousel, _Component);

  var _super = _createSuper(Carousel);

  function Carousel(props) {
    var _this;

    _classCallCheck(this, Carousel);

    _this = _super.call(this, props);
    _this.state = {
      hideCarousel: true,
      interpolators: []
    }; // The following values are not stored in the state because 'setState()' is asynchronous
    // and this results in an absolutely crappy behavior on Android while swiping (see #156)

    var initialActiveItem = _this._getFirstItem(props.firstItem);

    _this._activeItem = initialActiveItem;
    _this._previousActiveItem = initialActiveItem;
    _this._previousFirstItem = initialActiveItem;
    _this._previousItemsLength = initialActiveItem;
    _this._mounted = false;
    _this._positions = [];
    _this._currentContentOffset = 0; // store ScrollView's scroll position

    _this._canFireBeforeCallback = false;
    _this._canFireCallback = false;
    _this._scrollOffsetRef = null;
    _this._onScrollTriggered = true; // used when momentum is enabled to prevent an issue with edges items

    _this._lastScrollDate = 0; // used to work around a FlatList bug

    _this._scrollEnabled = props.scrollEnabled !== false;
    _this._initPositionsAndInterpolators = _this._initPositionsAndInterpolators.bind(_assertThisInitialized(_this));
    _this._renderItem = _this._renderItem.bind(_assertThisInitialized(_this));
    _this._onSnap = _this._onSnap.bind(_assertThisInitialized(_this));
    _this._onLayout = _this._onLayout.bind(_assertThisInitialized(_this));
    _this._onScroll = _this._onScroll.bind(_assertThisInitialized(_this));
    _this._onScrollBeginDrag = props.enableSnap ? _this._onScrollBeginDrag.bind(_assertThisInitialized(_this)) : undefined;
    _this._onScrollEnd = props.enableSnap || props.autoplay ? _this._onScrollEnd.bind(_assertThisInitialized(_this)) : undefined;
    _this._onScrollEndDrag = !props.enableMomentum ? _this._onScrollEndDrag.bind(_assertThisInitialized(_this)) : undefined;
    _this._onMomentumScrollEnd = props.enableMomentum ? _this._onMomentumScrollEnd.bind(_assertThisInitialized(_this)) : undefined;
    _this._onTouchStart = _this._onTouchStart.bind(_assertThisInitialized(_this));
    _this._onTouchEnd = _this._onTouchEnd.bind(_assertThisInitialized(_this));
    _this._onTouchRelease = _this._onTouchRelease.bind(_assertThisInitialized(_this));
    _this._getKeyExtractor = _this._getKeyExtractor.bind(_assertThisInitialized(_this));

    _this._setScrollHandler(props); // This bool aims at fixing an iOS bug due to scrollTo that triggers onMomentumScrollEnd.
    // onMomentumScrollEnd fires this._snapScroll, thus creating an infinite loop.


    _this._ignoreNextMomentum = false; // Warnings

    if (!react_native__WEBPACK_IMPORTED_MODULE_1__["ViewPropTypes"]) {
      console.warn('react-native-snap-carousel: It is recommended to use at least version 0.44 of React Native with the plugin');
    }

    if (!props.vertical && (!props.sliderWidth || !props.itemWidth)) {
      console.error('react-native-snap-carousel: You need to specify both `sliderWidth` and `itemWidth` for horizontal carousels');
    }

    if (props.vertical && (!props.sliderHeight || !props.itemHeight)) {
      console.error('react-native-snap-carousel: You need to specify both `sliderHeight` and `itemHeight` for vertical carousels');
    }

    if (props.apparitionDelay && !IS_IOS && !props.useScrollView) {
      console.warn('react-native-snap-carousel: Using `apparitionDelay` on Android is not recommended since it can lead to rendering issues');
    }

    if (props.customAnimationType || props.customAnimationOptions) {
      console.warn('react-native-snap-carousel: Props `customAnimationType` and `customAnimationOptions` have been renamed to `activeAnimationType` and `activeAnimationOptions`');
    }

    if (props.onScrollViewScroll) {
      console.error('react-native-snap-carousel: Prop `onScrollViewScroll` has been removed. Use `onScroll` instead');
    }

    return _this;
  }

  _createClass(Carousel, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      var _this$props = this.props,
          apparitionDelay = _this$props.apparitionDelay,
          autoplay = _this$props.autoplay,
          firstItem = _this$props.firstItem;

      var _firstItem = this._getFirstItem(firstItem);

      var apparitionCallback = function apparitionCallback() {
        _this2.setState({
          hideCarousel: false
        });

        if (autoplay) {
          _this2.startAutoplay();
        }
      };

      this._mounted = true;

      this._initPositionsAndInterpolators(); // Without 'requestAnimationFrame' or a `0` timeout, images will randomly not be rendered on Android...


      requestAnimationFrame(function () {
        if (!_this2._mounted) {
          return;
        }

        _this2._snapToItem(_firstItem, false, false, true, false);

        _this2._hackActiveSlideAnimation(_firstItem, 'start', true);

        if (apparitionDelay) {
          _this2._apparitionTimeout = setTimeout(function () {
            apparitionCallback();
          }, apparitionDelay);
        } else {
          apparitionCallback();
        }
      });
    }
  }, {
    key: "shouldComponentUpdate",
    value: function shouldComponentUpdate(nextProps, nextState) {
      if (this.props.shouldOptimizeUpdates === false) {
        return true;
      } else {
        return react_addons_shallow_compare__WEBPACK_IMPORTED_MODULE_3___default()(this, nextProps, nextState);
      }
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      var interpolators = this.state.interpolators;
      var _this$props2 = this.props,
          firstItem = _this$props2.firstItem,
          itemHeight = _this$props2.itemHeight,
          itemWidth = _this$props2.itemWidth,
          scrollEnabled = _this$props2.scrollEnabled,
          sliderHeight = _this$props2.sliderHeight,
          sliderWidth = _this$props2.sliderWidth;

      var itemsLength = this._getCustomDataLength(this.props);

      if (!itemsLength) {
        return;
      }

      var nextFirstItem = this._getFirstItem(firstItem, this.props);

      var nextActiveItem = this._activeItem || this._activeItem === 0 ? this._activeItem : nextFirstItem;
      var hasNewSliderWidth = sliderWidth && sliderWidth !== prevProps.sliderWidth;
      var hasNewSliderHeight = sliderHeight && sliderHeight !== prevProps.sliderHeight;
      var hasNewItemWidth = itemWidth && itemWidth !== prevProps.itemWidth;
      var hasNewItemHeight = itemHeight && itemHeight !== prevProps.itemHeight;
      var hasNewScrollEnabled = scrollEnabled !== prevProps.scrollEnabled; // Prevent issues with dynamically removed items

      if (nextActiveItem > itemsLength - 1) {
        nextActiveItem = itemsLength - 1;
      } // Handle changing scrollEnabled independent of user -> carousel interaction


      if (hasNewScrollEnabled) {
        this._setScrollEnabled(scrollEnabled);
      }

      if (interpolators.length !== itemsLength || hasNewSliderWidth || hasNewSliderHeight || hasNewItemWidth || hasNewItemHeight) {
        this._activeItem = nextActiveItem;
        this._previousItemsLength = itemsLength;

        this._initPositionsAndInterpolators(this.props); // Handle scroll issue when dynamically removing items (see #133)
        // This also fixes first item's active state on Android
        // Because 'initialScrollIndex' apparently doesn't trigger scroll


        if (this._previousItemsLength > itemsLength) {
          this._hackActiveSlideAnimation(nextActiveItem, null, true);
        }

        if (hasNewSliderWidth || hasNewSliderHeight || hasNewItemWidth || hasNewItemHeight) {
          this._snapToItem(nextActiveItem, false, false, false, false);
        }
      } else if (nextFirstItem !== this._previousFirstItem && nextFirstItem !== this._activeItem) {
        this._activeItem = nextFirstItem;
        this._previousFirstItem = nextFirstItem;

        this._snapToItem(nextFirstItem, false, true, false, false);
      }

      if (this.props.onScroll !== prevProps.onScroll) {
        this._setScrollHandler(this.props);
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this._mounted = false;
      this.stopAutoplay();
      clearTimeout(this._apparitionTimeout);
      clearTimeout(this._hackSlideAnimationTimeout);
      clearTimeout(this._enableAutoplayTimeout);
      clearTimeout(this._autoplayTimeout);
      clearTimeout(this._snapNoMomentumTimeout);
      clearTimeout(this._edgeItemTimeout);
      clearTimeout(this._lockScrollTimeout);
    }
  }, {
    key: "_setScrollHandler",
    value: function _setScrollHandler(props) {
      // Native driver for scroll events
      var scrollEventConfig = {
        listener: this._onScroll,
        useNativeDriver: true
      };
      this._scrollPos = new react_native__WEBPACK_IMPORTED_MODULE_1__["Animated"].Value(0);
      var argMapping = props.vertical ? [{
        nativeEvent: {
          contentOffset: {
            y: this._scrollPos
          }
        }
      }] : [{
        nativeEvent: {
          contentOffset: {
            x: this._scrollPos
          }
        }
      }];

      if (props.onScroll && Array.isArray(props.onScroll._argMapping)) {
        // Because of a react-native issue https://github.com/facebook/react-native/issues/13294
        argMapping.pop();

        var _props$onScroll$_argM = _slicedToArray(props.onScroll._argMapping, 1),
            argMap = _props$onScroll$_argM[0];

        if (argMap && argMap.nativeEvent && argMap.nativeEvent.contentOffset) {
          // Shares the same animated value passed in props
          this._scrollPos = argMap.nativeEvent.contentOffset.x || argMap.nativeEvent.contentOffset.y || this._scrollPos;
        }

        argMapping.push.apply(argMapping, _toConsumableArray(props.onScroll._argMapping));
      }

      this._onScrollHandler = react_native__WEBPACK_IMPORTED_MODULE_1__["Animated"].event(argMapping, scrollEventConfig);
    }
  }, {
    key: "_needsScrollView",
    value: function _needsScrollView() {
      var useScrollView = this.props.useScrollView;
      return useScrollView || !AnimatedFlatList || this._shouldUseStackLayout() || this._shouldUseTinderLayout();
    }
  }, {
    key: "_needsRTLAdaptations",
    value: function _needsRTLAdaptations() {
      var vertical = this.props.vertical;
      return IS_RTL && !IS_IOS && !vertical;
    }
  }, {
    key: "_canLockScroll",
    value: function _canLockScroll() {
      var _this$props3 = this.props,
          scrollEnabled = _this$props3.scrollEnabled,
          enableMomentum = _this$props3.enableMomentum,
          lockScrollWhileSnapping = _this$props3.lockScrollWhileSnapping;
      return scrollEnabled && !enableMomentum && lockScrollWhileSnapping;
    }
  }, {
    key: "_enableLoop",
    value: function _enableLoop() {
      var _this$props4 = this.props,
          data = _this$props4.data,
          enableSnap = _this$props4.enableSnap,
          loop = _this$props4.loop;
      return enableSnap && loop && data && data.length && data.length > 1;
    }
  }, {
    key: "_shouldAnimateSlides",
    value: function _shouldAnimateSlides() {
      var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.props;
      var inactiveSlideOpacity = props.inactiveSlideOpacity,
          inactiveSlideScale = props.inactiveSlideScale,
          scrollInterpolator = props.scrollInterpolator,
          slideInterpolatedStyle = props.slideInterpolatedStyle;
      return inactiveSlideOpacity < 1 || inactiveSlideScale < 1 || !!scrollInterpolator || !!slideInterpolatedStyle || this._shouldUseShiftLayout() || this._shouldUseStackLayout() || this._shouldUseTinderLayout();
    }
  }, {
    key: "_shouldUseCustomAnimation",
    value: function _shouldUseCustomAnimation() {
      var activeAnimationOptions = this.props.activeAnimationOptions;
      return !!activeAnimationOptions && !this._shouldUseStackLayout() && !this._shouldUseTinderLayout();
    }
  }, {
    key: "_shouldUseShiftLayout",
    value: function _shouldUseShiftLayout() {
      var _this$props5 = this.props,
          inactiveSlideShift = _this$props5.inactiveSlideShift,
          layout = _this$props5.layout;
      return layout === 'default' && inactiveSlideShift !== 0;
    }
  }, {
    key: "_shouldUseStackLayout",
    value: function _shouldUseStackLayout() {
      return this.props.layout === 'stack';
    }
  }, {
    key: "_shouldUseTinderLayout",
    value: function _shouldUseTinderLayout() {
      return this.props.layout === 'tinder';
    }
  }, {
    key: "_getCustomData",
    value: function _getCustomData() {
      var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.props;
      var data = props.data,
          loopClonesPerSide = props.loopClonesPerSide;
      var dataLength = data && data.length;

      if (!dataLength) {
        return [];
      }

      if (!this._enableLoop()) {
        return data;
      }

      var previousItems = [];
      var nextItems = [];

      if (loopClonesPerSide > dataLength) {
        var _previousItems2, _nextItems2;

        var dataMultiplier = Math.floor(loopClonesPerSide / dataLength);
        var remainder = loopClonesPerSide % dataLength;

        for (var i = 0; i < dataMultiplier; i++) {
          var _previousItems, _nextItems;

          (_previousItems = previousItems).push.apply(_previousItems, _toConsumableArray(data));

          (_nextItems = nextItems).push.apply(_nextItems, _toConsumableArray(data));
        }

        (_previousItems2 = previousItems).unshift.apply(_previousItems2, _toConsumableArray(data.slice(-remainder)));

        (_nextItems2 = nextItems).push.apply(_nextItems2, _toConsumableArray(data.slice(0, remainder)));
      } else {
        previousItems = data.slice(-loopClonesPerSide);
        nextItems = data.slice(0, loopClonesPerSide);
      }

      return previousItems.concat(data, nextItems);
    }
  }, {
    key: "_getCustomDataLength",
    value: function _getCustomDataLength() {
      var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.props;
      var data = props.data,
          loopClonesPerSide = props.loopClonesPerSide;
      var dataLength = data && data.length;

      if (!dataLength) {
        return 0;
      }

      return this._enableLoop() ? dataLength + 2 * loopClonesPerSide : dataLength;
    }
  }, {
    key: "_getCustomIndex",
    value: function _getCustomIndex(index) {
      var props = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.props;

      var itemsLength = this._getCustomDataLength(props);

      if (!itemsLength || !index && index !== 0) {
        return 0;
      }

      return this._needsRTLAdaptations() ? itemsLength - index - 1 : index;
    }
  }, {
    key: "_getDataIndex",
    value: function _getDataIndex(index) {
      var _this$props6 = this.props,
          data = _this$props6.data,
          loopClonesPerSide = _this$props6.loopClonesPerSide;
      var dataLength = data && data.length;

      if (!this._enableLoop() || !dataLength) {
        return index;
      }

      if (index >= dataLength + loopClonesPerSide) {
        return loopClonesPerSide > dataLength ? (index - loopClonesPerSide) % dataLength : index - dataLength - loopClonesPerSide;
      } else if (index < loopClonesPerSide) {
        // TODO: is there a simpler way of determining the interpolated index?
        if (loopClonesPerSide > dataLength) {
          var baseDataIndexes = [];
          var dataIndexes = [];
          var dataMultiplier = Math.floor(loopClonesPerSide / dataLength);
          var remainder = loopClonesPerSide % dataLength;

          for (var i = 0; i < dataLength; i++) {
            baseDataIndexes.push(i);
          }

          for (var j = 0; j < dataMultiplier; j++) {
            dataIndexes.push.apply(dataIndexes, baseDataIndexes);
          }

          dataIndexes.unshift.apply(dataIndexes, _toConsumableArray(baseDataIndexes.slice(-remainder)));
          return dataIndexes[index];
        } else {
          return index + dataLength - loopClonesPerSide;
        }
      } else {
        return index - loopClonesPerSide;
      }
    } // Used with `snapToItem()` and 'PaginationDot'

  }, {
    key: "_getPositionIndex",
    value: function _getPositionIndex(index) {
      var _this$props7 = this.props,
          loop = _this$props7.loop,
          loopClonesPerSide = _this$props7.loopClonesPerSide;
      return loop ? index + loopClonesPerSide : index;
    }
  }, {
    key: "_getFirstItem",
    value: function _getFirstItem(index) {
      var props = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.props;
      var loopClonesPerSide = props.loopClonesPerSide;

      var itemsLength = this._getCustomDataLength(props);

      if (!itemsLength || index > itemsLength - 1 || index < 0) {
        return 0;
      }

      return this._enableLoop() ? index + loopClonesPerSide : index;
    }
  }, {
    key: "_getWrappedRef",
    value: function _getWrappedRef() {
      // https://github.com/facebook/react-native/issues/10635
      // https://stackoverflow.com/a/48786374/8412141
      return this._carouselRef && this._carouselRef.getNode && this._carouselRef.getNode();
    }
  }, {
    key: "_getScrollEnabled",
    value: function _getScrollEnabled() {
      return this._scrollEnabled;
    }
  }, {
    key: "_setScrollEnabled",
    value: function _setScrollEnabled() {
      var scrollEnabled = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;

      var wrappedRef = this._getWrappedRef();

      if (!wrappedRef || !wrappedRef.setNativeProps) {
        return;
      } // 'setNativeProps()' is used instead of 'setState()' because the latter
      // really takes a toll on Android behavior when momentum is disabled


      wrappedRef.setNativeProps({
        scrollEnabled: scrollEnabled
      });
      this._scrollEnabled = scrollEnabled;
    }
  }, {
    key: "_getKeyExtractor",
    value: function _getKeyExtractor(item, index) {
      return this._needsScrollView() ? "scrollview-item-".concat(index) : "flatlist-item-".concat(index);
    }
  }, {
    key: "_getScrollOffset",
    value: function _getScrollOffset(event) {
      var vertical = this.props.vertical;
      return event && event.nativeEvent && event.nativeEvent.contentOffset && event.nativeEvent.contentOffset[vertical ? 'y' : 'x'] || 0;
    }
  }, {
    key: "_getContainerInnerMargin",
    value: function _getContainerInnerMargin() {
      var opposite = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
      var _this$props8 = this.props,
          sliderWidth = _this$props8.sliderWidth,
          sliderHeight = _this$props8.sliderHeight,
          itemWidth = _this$props8.itemWidth,
          itemHeight = _this$props8.itemHeight,
          vertical = _this$props8.vertical,
          activeSlideAlignment = _this$props8.activeSlideAlignment;

      if (activeSlideAlignment === 'start' && !opposite || activeSlideAlignment === 'end' && opposite) {
        return 0;
      } else if (activeSlideAlignment === 'end' && !opposite || activeSlideAlignment === 'start' && opposite) {
        return vertical ? sliderHeight - itemHeight : sliderWidth - itemWidth;
      } else {
        return vertical ? (sliderHeight - itemHeight) / 2 : (sliderWidth - itemWidth) / 2;
      }
    }
  }, {
    key: "_getViewportOffset",
    value: function _getViewportOffset() {
      var _this$props9 = this.props,
          sliderWidth = _this$props9.sliderWidth,
          sliderHeight = _this$props9.sliderHeight,
          itemWidth = _this$props9.itemWidth,
          itemHeight = _this$props9.itemHeight,
          vertical = _this$props9.vertical,
          activeSlideAlignment = _this$props9.activeSlideAlignment;

      if (activeSlideAlignment === 'start') {
        return vertical ? itemHeight / 2 : itemWidth / 2;
      } else if (activeSlideAlignment === 'end') {
        return vertical ? sliderHeight - itemHeight / 2 : sliderWidth - itemWidth / 2;
      } else {
        return vertical ? sliderHeight / 2 : sliderWidth / 2;
      }
    }
  }, {
    key: "_getCenter",
    value: function _getCenter(offset) {
      return offset + this._getViewportOffset() - this._getContainerInnerMargin();
    }
  }, {
    key: "_getActiveItem",
    value: function _getActiveItem(offset) {
      var _this$props10 = this.props,
          activeSlideOffset = _this$props10.activeSlideOffset,
          swipeThreshold = _this$props10.swipeThreshold;

      var center = this._getCenter(offset);

      var centerOffset = activeSlideOffset || swipeThreshold;

      for (var i = 0; i < this._positions.length; i++) {
        var _this$_positions$i = this._positions[i],
            start = _this$_positions$i.start,
            end = _this$_positions$i.end;

        if (center + centerOffset >= start && center - centerOffset <= end) {
          return i;
        }
      }

      var lastIndex = this._positions.length - 1;

      if (this._positions[lastIndex] && center - centerOffset > this._positions[lastIndex].end) {
        return lastIndex;
      }

      return 0;
    }
  }, {
    key: "_initPositionsAndInterpolators",
    value: function _initPositionsAndInterpolators() {
      var _this3 = this;

      var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.props;
      var data = props.data,
          itemWidth = props.itemWidth,
          itemHeight = props.itemHeight,
          scrollInterpolator = props.scrollInterpolator,
          vertical = props.vertical;
      var sizeRef = vertical ? itemHeight : itemWidth;

      if (!data || !data.length) {
        return;
      }

      var interpolators = [];
      this._positions = [];

      this._getCustomData(props).forEach(function (itemData, index) {
        var _index = _this3._getCustomIndex(index, props);

        var animatedValue;
        _this3._positions[index] = {
          start: index * sizeRef,
          end: index * sizeRef + sizeRef
        };

        if (!_this3._shouldAnimateSlides(props)) {
          animatedValue = new react_native__WEBPACK_IMPORTED_MODULE_1__["Animated"].Value(1);
        } else if (_this3._shouldUseCustomAnimation()) {
          animatedValue = new react_native__WEBPACK_IMPORTED_MODULE_1__["Animated"].Value(_index === _this3._activeItem ? 1 : 0);
        } else {
          var interpolator;

          if (scrollInterpolator) {
            interpolator = scrollInterpolator(_index, props);
          } else if (_this3._shouldUseStackLayout()) {
            interpolator = Object(_utils_animations__WEBPACK_IMPORTED_MODULE_4__["stackScrollInterpolator"])(_index, props);
          } else if (_this3._shouldUseTinderLayout()) {
            interpolator = Object(_utils_animations__WEBPACK_IMPORTED_MODULE_4__["tinderScrollInterpolator"])(_index, props);
          }

          if (!interpolator || !interpolator.inputRange || !interpolator.outputRange) {
            interpolator = Object(_utils_animations__WEBPACK_IMPORTED_MODULE_4__["defaultScrollInterpolator"])(_index, props);
          }

          animatedValue = _this3._scrollPos.interpolate(_objectSpread(_objectSpread({}, interpolator), {}, {
            extrapolate: 'clamp'
          }));
        }

        interpolators.push(animatedValue);
      });

      this.setState({
        interpolators: interpolators
      });
    }
  }, {
    key: "_getSlideAnimation",
    value: function _getSlideAnimation(index, toValue) {
      var interpolators = this.state.interpolators;
      var _this$props11 = this.props,
          activeAnimationType = _this$props11.activeAnimationType,
          activeAnimationOptions = _this$props11.activeAnimationOptions;
      var animatedValue = interpolators && interpolators[index];

      if (!animatedValue && animatedValue !== 0) {
        return null;
      }

      var animationCommonOptions = _objectSpread(_objectSpread({
        isInteraction: false,
        useNativeDriver: true
      }, activeAnimationOptions), {}, {
        toValue: toValue
      });

      return react_native__WEBPACK_IMPORTED_MODULE_1__["Animated"].parallel([react_native__WEBPACK_IMPORTED_MODULE_1__["Animated"]['timing'](animatedValue, _objectSpread(_objectSpread({}, animationCommonOptions), {}, {
        easing: react_native__WEBPACK_IMPORTED_MODULE_1__["Easing"].linear
      })), react_native__WEBPACK_IMPORTED_MODULE_1__["Animated"][activeAnimationType](animatedValue, _objectSpread({}, animationCommonOptions))]);
    }
  }, {
    key: "_playCustomSlideAnimation",
    value: function _playCustomSlideAnimation(current, next) {
      var interpolators = this.state.interpolators;

      var itemsLength = this._getCustomDataLength();

      var _currentIndex = this._getCustomIndex(current);

      var _currentDataIndex = this._getDataIndex(_currentIndex);

      var _nextIndex = this._getCustomIndex(next);

      var _nextDataIndex = this._getDataIndex(_nextIndex);

      var animations = []; // Keep animations in sync when looping

      if (this._enableLoop()) {
        for (var i = 0; i < itemsLength; i++) {
          if (this._getDataIndex(i) === _currentDataIndex && interpolators[i]) {
            animations.push(this._getSlideAnimation(i, 0));
          } else if (this._getDataIndex(i) === _nextDataIndex && interpolators[i]) {
            animations.push(this._getSlideAnimation(i, 1));
          }
        }
      } else {
        if (interpolators[current]) {
          animations.push(this._getSlideAnimation(current, 0));
        }

        if (interpolators[next]) {
          animations.push(this._getSlideAnimation(next, 1));
        }
      }

      react_native__WEBPACK_IMPORTED_MODULE_1__["Animated"].parallel(animations, {
        stopTogether: false
      }).start();
    }
  }, {
    key: "_hackActiveSlideAnimation",
    value: function _hackActiveSlideAnimation(index, goTo) {
      var _this4 = this;

      var force = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
      var data = this.props.data;

      if (!this._mounted || !this._carouselRef || !this._positions[index] || !force && this._enableLoop()) {
        return;
      }

      var offset = this._positions[index] && this._positions[index].start;

      if (!offset && offset !== 0) {
        return;
      }

      var itemsLength = data && data.length;
      var direction = goTo || itemsLength === 1 ? 'start' : 'end';

      this._scrollTo(offset + (direction === 'start' ? -1 : 1), false);

      clearTimeout(this._hackSlideAnimationTimeout);
      this._hackSlideAnimationTimeout = setTimeout(function () {
        _this4._scrollTo(offset, false);
      }, 50); // works randomly when set to '0'
    }
  }, {
    key: "_lockScroll",
    value: function _lockScroll() {
      var _this5 = this;

      var lockScrollTimeoutDuration = this.props.lockScrollTimeoutDuration;
      clearTimeout(this._lockScrollTimeout);
      this._lockScrollTimeout = setTimeout(function () {
        _this5._releaseScroll();
      }, lockScrollTimeoutDuration);

      this._setScrollEnabled(false);
    }
  }, {
    key: "_releaseScroll",
    value: function _releaseScroll() {
      clearTimeout(this._lockScrollTimeout);

      this._setScrollEnabled(true);
    }
  }, {
    key: "_repositionScroll",
    value: function _repositionScroll(index) {
      var _this$props12 = this.props,
          data = _this$props12.data,
          loopClonesPerSide = _this$props12.loopClonesPerSide;
      var dataLength = data && data.length;

      if (!this._enableLoop() || !dataLength || index >= loopClonesPerSide && index < dataLength + loopClonesPerSide) {
        return;
      }

      var repositionTo = index;

      if (index >= dataLength + loopClonesPerSide) {
        repositionTo = index - dataLength;
      } else if (index < loopClonesPerSide) {
        repositionTo = index + dataLength;
      }

      this._snapToItem(repositionTo, false, false, false, false);
    }
  }, {
    key: "_scrollTo",
    value: function _scrollTo(offset) {
      var animated = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
      var vertical = this.props.vertical;

      var wrappedRef = this._getWrappedRef();

      if (!this._mounted || !wrappedRef) {
        return;
      }

      var specificOptions = this._needsScrollView() ? {
        x: vertical ? 0 : offset,
        y: vertical ? offset : 0
      } : {
        offset: offset
      };

      var options = _objectSpread(_objectSpread({}, specificOptions), {}, {
        animated: animated
      });

      if (this._needsScrollView()) {
        wrappedRef.scrollTo(options);
      } else {
        wrappedRef.scrollToOffset(options);
      }
    }
  }, {
    key: "_onScroll",
    value: function _onScroll(event) {
      var _this$props13 = this.props,
          callbackOffsetMargin = _this$props13.callbackOffsetMargin,
          enableMomentum = _this$props13.enableMomentum,
          onScroll = _this$props13.onScroll;
      var scrollOffset = event ? this._getScrollOffset(event) : this._currentContentOffset;

      var nextActiveItem = this._getActiveItem(scrollOffset);

      var itemReached = nextActiveItem === this._itemToSnapTo;
      var scrollConditions = scrollOffset >= this._scrollOffsetRef - callbackOffsetMargin && scrollOffset <= this._scrollOffsetRef + callbackOffsetMargin;
      this._currentContentOffset = scrollOffset;
      this._onScrollTriggered = true;
      this._lastScrollDate = Date.now();

      if (this._activeItem !== nextActiveItem && this._shouldUseCustomAnimation()) {
        this._playCustomSlideAnimation(this._activeItem, nextActiveItem);
      }

      if (enableMomentum) {
        clearTimeout(this._snapNoMomentumTimeout);

        if (this._activeItem !== nextActiveItem) {
          this._activeItem = nextActiveItem;
        }

        if (itemReached) {
          if (this._canFireBeforeCallback) {
            this._onBeforeSnap(this._getDataIndex(nextActiveItem));
          }

          if (scrollConditions && this._canFireCallback) {
            this._onSnap(this._getDataIndex(nextActiveItem));
          }
        }
      } else if (this._activeItem !== nextActiveItem && itemReached) {
        if (this._canFireBeforeCallback) {
          this._onBeforeSnap(this._getDataIndex(nextActiveItem));
        }

        if (scrollConditions) {
          this._activeItem = nextActiveItem;

          if (this._canLockScroll()) {
            this._releaseScroll();
          }

          if (this._canFireCallback) {
            this._onSnap(this._getDataIndex(nextActiveItem));
          }
        }
      }

      if (nextActiveItem === this._itemToSnapTo && scrollOffset === this._scrollOffsetRef) {
        this._repositionScroll(nextActiveItem);
      }

      if (typeof onScroll === "function" && event) {
        onScroll(event);
      }
    }
  }, {
    key: "_onStartShouldSetResponderCapture",
    value: function _onStartShouldSetResponderCapture(event) {
      var onStartShouldSetResponderCapture = this.props.onStartShouldSetResponderCapture;

      if (onStartShouldSetResponderCapture) {
        onStartShouldSetResponderCapture(event);
      }

      return this._getScrollEnabled();
    }
  }, {
    key: "_onTouchStart",
    value: function _onTouchStart() {
      var onTouchStart = this.props.onTouchStart; // `onTouchStart` is fired even when `scrollEnabled` is set to `false`

      if (this._getScrollEnabled() !== false && this._autoplaying) {
        this.pauseAutoPlay();
      }

      if (onTouchStart) {
        onTouchStart();
      }
    }
  }, {
    key: "_onTouchEnd",
    value: function _onTouchEnd() {
      var onTouchEnd = this.props.onTouchEnd;

      if (this._getScrollEnabled() !== false && this._autoplay && !this._autoplaying) {
        // This event is buggy on Android, so a fallback is provided in _onScrollEnd()
        this.startAutoplay();
      }

      if (onTouchEnd) {
        onTouchEnd();
      }
    } // Used when `enableSnap` is ENABLED

  }, {
    key: "_onScrollBeginDrag",
    value: function _onScrollBeginDrag(event) {
      var onScrollBeginDrag = this.props.onScrollBeginDrag;

      if (!this._getScrollEnabled()) {
        return;
      }

      this._scrollStartOffset = this._getScrollOffset(event);
      this._scrollStartActive = this._getActiveItem(this._scrollStartOffset);
      this._ignoreNextMomentum = false; // this._canFireCallback = false;

      if (onScrollBeginDrag) {
        onScrollBeginDrag(event);
      }
    } // Used when `enableMomentum` is DISABLED

  }, {
    key: "_onScrollEndDrag",
    value: function _onScrollEndDrag(event) {
      var onScrollEndDrag = this.props.onScrollEndDrag;

      if (this._carouselRef) {
        this._onScrollEnd && this._onScrollEnd();
      }

      if (onScrollEndDrag) {
        onScrollEndDrag(event);
      }
    } // Used when `enableMomentum` is ENABLED

  }, {
    key: "_onMomentumScrollEnd",
    value: function _onMomentumScrollEnd(event) {
      var onMomentumScrollEnd = this.props.onMomentumScrollEnd;

      if (this._carouselRef) {
        this._onScrollEnd && this._onScrollEnd();
      }

      if (onMomentumScrollEnd) {
        onMomentumScrollEnd(event);
      }
    }
  }, {
    key: "_onScrollEnd",
    value: function _onScrollEnd(event) {
      var _this6 = this;

      var _this$props14 = this.props,
          autoplayDelay = _this$props14.autoplayDelay,
          enableSnap = _this$props14.enableSnap;

      if (this._ignoreNextMomentum) {
        // iOS fix
        this._ignoreNextMomentum = false;
        return;
      }

      if (this._currentContentOffset === this._scrollEndOffset) {
        return;
      }

      this._scrollEndOffset = this._currentContentOffset;
      this._scrollEndActive = this._getActiveItem(this._scrollEndOffset);

      if (enableSnap) {
        this._snapScroll(this._scrollEndOffset - this._scrollStartOffset);
      } // The touchEnd event is buggy on Android, so this will serve as a fallback whenever needed
      // https://github.com/facebook/react-native/issues/9439


      if (this._autoplay && !this._autoplaying) {
        clearTimeout(this._enableAutoplayTimeout);
        this._enableAutoplayTimeout = setTimeout(function () {
          _this6.startAutoplay();
        }, autoplayDelay + 50);
      }
    } // Due to a bug, this event is only fired on iOS
    // https://github.com/facebook/react-native/issues/6791
    // it's fine since we're only fixing an iOS bug in it, so ...

  }, {
    key: "_onTouchRelease",
    value: function _onTouchRelease(event) {
      var _this7 = this;

      var enableMomentum = this.props.enableMomentum;

      if (enableMomentum && IS_IOS) {
        clearTimeout(this._snapNoMomentumTimeout);
        this._snapNoMomentumTimeout = setTimeout(function () {
          _this7._snapToItem(_this7._activeItem);
        }, 100);
      }
    }
  }, {
    key: "_onLayout",
    value: function _onLayout(event) {
      var onLayout = this.props.onLayout; // Prevent unneeded actions during the first 'onLayout' (triggered on init)

      if (this._onLayoutInitDone) {
        this._initPositionsAndInterpolators();

        this._snapToItem(this._activeItem, false, false, false, false);
      } else {
        this._onLayoutInitDone = true;
      }

      if (onLayout) {
        onLayout(event);
      }
    }
  }, {
    key: "_snapScroll",
    value: function _snapScroll(delta) {
      var swipeThreshold = this.props.swipeThreshold; // When using momentum and releasing the touch with
      // no velocity, scrollEndActive will be undefined (iOS)

      if (!this._scrollEndActive && this._scrollEndActive !== 0 && IS_IOS) {
        this._scrollEndActive = this._scrollStartActive;
      }

      if (this._scrollStartActive !== this._scrollEndActive) {
        // Snap to the new active item
        this._snapToItem(this._scrollEndActive);
      } else {
        // Snap depending on delta
        if (delta > 0) {
          if (delta > swipeThreshold) {
            this._snapToItem(this._scrollStartActive + 1);
          } else {
            this._snapToItem(this._scrollEndActive);
          }
        } else if (delta < 0) {
          if (delta < -swipeThreshold) {
            this._snapToItem(this._scrollStartActive - 1);
          } else {
            this._snapToItem(this._scrollEndActive);
          }
        } else {
          // Snap to current
          this._snapToItem(this._scrollEndActive);
        }
      }
    }
  }, {
    key: "_snapToItem",
    value: function _snapToItem(index) {
      var _this8 = this;

      var animated = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
      var fireCallback = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
      var initial = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
      var lockScroll = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : true;
      var _this$props15 = this.props,
          enableMomentum = _this$props15.enableMomentum,
          onSnapToItem = _this$props15.onSnapToItem,
          onBeforeSnapToItem = _this$props15.onBeforeSnapToItem;

      var itemsLength = this._getCustomDataLength();

      var wrappedRef = this._getWrappedRef();

      if (!itemsLength || !wrappedRef) {
        return;
      }

      if (!index || index < 0) {
        index = 0;
      } else if (itemsLength > 0 && index >= itemsLength) {
        index = itemsLength - 1;
      }

      if (index !== this._previousActiveItem) {
        this._previousActiveItem = index; // Placed here to allow overscrolling for edges items

        if (lockScroll && this._canLockScroll()) {
          this._lockScroll();
        }

        if (fireCallback) {
          if (onBeforeSnapToItem) {
            this._canFireBeforeCallback = true;
          }

          if (onSnapToItem) {
            this._canFireCallback = true;
          }
        }
      }

      this._itemToSnapTo = index;
      this._scrollOffsetRef = this._positions[index] && this._positions[index].start;
      this._onScrollTriggered = false;

      if (!this._scrollOffsetRef && this._scrollOffsetRef !== 0) {
        return;
      }

      this._scrollTo(this._scrollOffsetRef, animated);

      this._scrollEndOffset = this._currentContentOffset;

      if (enableMomentum) {
        // iOS fix, check the note in the constructor
        if (!initial) {
          this._ignoreNextMomentum = true;
        } // When momentum is enabled and the user is overscrolling or swiping very quickly,
        // 'onScroll' is not going to be triggered for edge items. Then callback won't be
        // fired and loop won't work since the scrollview is not going to be repositioned.
        // As a workaround, '_onScroll()' will be called manually for these items if a given
        // condition hasn't been met after a small delay.
        // WARNING: this is ok only when relying on 'momentumScrollEnd', not with 'scrollEndDrag'


        if (index === 0 || index === itemsLength - 1) {
          clearTimeout(this._edgeItemTimeout);
          this._edgeItemTimeout = setTimeout(function () {
            if (!initial && index === _this8._activeItem && !_this8._onScrollTriggered) {
              _this8._onScroll();
            }
          }, 250);
        }
      }
    }
  }, {
    key: "_onBeforeSnap",
    value: function _onBeforeSnap(index) {
      var onBeforeSnapToItem = this.props.onBeforeSnapToItem;

      if (!this._carouselRef) {
        return;
      }

      this._canFireBeforeCallback = false;
      onBeforeSnapToItem && onBeforeSnapToItem(index);
    }
  }, {
    key: "_onSnap",
    value: function _onSnap(index) {
      var onSnapToItem = this.props.onSnapToItem;

      if (!this._carouselRef) {
        return;
      }

      this._canFireCallback = false;
      onSnapToItem && onSnapToItem(index);
    }
  }, {
    key: "startAutoplay",
    value: function startAutoplay() {
      var _this9 = this;

      var _this$props16 = this.props,
          autoplayInterval = _this$props16.autoplayInterval,
          autoplayDelay = _this$props16.autoplayDelay;
      this._autoplay = true;

      if (this._autoplaying) {
        return;
      }

      clearTimeout(this._autoplayTimeout);
      this._autoplayTimeout = setTimeout(function () {
        _this9._autoplaying = true;
        _this9._autoplayInterval = setInterval(function () {
          if (_this9._autoplaying) {
            _this9.snapToNext();
          }
        }, autoplayInterval);
      }, autoplayDelay);
    }
  }, {
    key: "pauseAutoPlay",
    value: function pauseAutoPlay() {
      this._autoplaying = false;
      clearTimeout(this._autoplayTimeout);
      clearTimeout(this._enableAutoplayTimeout);
      clearInterval(this._autoplayInterval);
    }
  }, {
    key: "stopAutoplay",
    value: function stopAutoplay() {
      this._autoplay = false;
      this.pauseAutoPlay();
    }
  }, {
    key: "snapToItem",
    value: function snapToItem(index) {
      var animated = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
      var fireCallback = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;

      if (!index || index < 0) {
        index = 0;
      }

      var positionIndex = this._getPositionIndex(index);

      if (positionIndex === this._activeItem) {
        return;
      }

      this._snapToItem(positionIndex, animated, fireCallback);
    }
  }, {
    key: "snapToNext",
    value: function snapToNext() {
      var animated = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
      var fireCallback = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;

      var itemsLength = this._getCustomDataLength();

      var newIndex = this._activeItem + 1;

      if (newIndex > itemsLength - 1) {
        if (!this._enableLoop()) {
          return;
        }

        newIndex = 0;
      }

      this._snapToItem(newIndex, animated, fireCallback);
    }
  }, {
    key: "snapToPrev",
    value: function snapToPrev() {
      var animated = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
      var fireCallback = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;

      var itemsLength = this._getCustomDataLength();

      var newIndex = this._activeItem - 1;

      if (newIndex < 0) {
        if (!this._enableLoop()) {
          return;
        }

        newIndex = itemsLength - 1;
      }

      this._snapToItem(newIndex, animated, fireCallback);
    } // https://github.com/facebook/react-native/issues/1831#issuecomment-231069668

  }, {
    key: "triggerRenderingHack",
    value: function triggerRenderingHack(offset) {
      // Avoid messing with user scroll
      if (Date.now() - this._lastScrollDate < 500) {
        return;
      }

      var scrollPosition = this._currentContentOffset;

      if (!scrollPosition && scrollPosition !== 0) {
        return;
      }

      var scrollOffset = offset || (scrollPosition === 0 ? 1 : -1);

      this._scrollTo(scrollPosition + scrollOffset, false);
    }
  }, {
    key: "_getSlideInterpolatedStyle",
    value: function _getSlideInterpolatedStyle(index, animatedValue) {
      var _this$props17 = this.props,
          layoutCardOffset = _this$props17.layoutCardOffset,
          slideInterpolatedStyle = _this$props17.slideInterpolatedStyle;

      if (slideInterpolatedStyle) {
        return slideInterpolatedStyle(index, animatedValue, this.props);
      } else if (this._shouldUseTinderLayout()) {
        return Object(_utils_animations__WEBPACK_IMPORTED_MODULE_4__["tinderAnimatedStyles"])(index, animatedValue, this.props, layoutCardOffset);
      } else if (this._shouldUseStackLayout()) {
        return Object(_utils_animations__WEBPACK_IMPORTED_MODULE_4__["stackAnimatedStyles"])(index, animatedValue, this.props, layoutCardOffset);
      } else if (this._shouldUseShiftLayout()) {
        return Object(_utils_animations__WEBPACK_IMPORTED_MODULE_4__["shiftAnimatedStyles"])(index, animatedValue, this.props);
      } else {
        return Object(_utils_animations__WEBPACK_IMPORTED_MODULE_4__["defaultAnimatedStyles"])(index, animatedValue, this.props);
      }
    }
  }, {
    key: "_renderItem",
    value: function _renderItem(_ref) {
      var item = _ref.item,
          index = _ref.index;
      var interpolators = this.state.interpolators;
      var _this$props18 = this.props,
          hasParallaxImages = _this$props18.hasParallaxImages,
          itemWidth = _this$props18.itemWidth,
          itemHeight = _this$props18.itemHeight,
          keyExtractor = _this$props18.keyExtractor,
          renderItem = _this$props18.renderItem,
          sliderHeight = _this$props18.sliderHeight,
          sliderWidth = _this$props18.sliderWidth,
          slideStyle = _this$props18.slideStyle,
          vertical = _this$props18.vertical;
      var animatedValue = interpolators && interpolators[index];

      if (!animatedValue && animatedValue !== 0) {
        return null;
      }

      var animate = this._shouldAnimateSlides();

      var Component = animate ? react_native__WEBPACK_IMPORTED_MODULE_1__["Animated"].View : react_native__WEBPACK_IMPORTED_MODULE_1__["View"];
      var animatedStyle = animate ? this._getSlideInterpolatedStyle(index, animatedValue) : {};
      var parallaxProps = hasParallaxImages ? {
        scrollPosition: this._scrollPos,
        carouselRef: this._carouselRef,
        vertical: vertical,
        sliderWidth: sliderWidth,
        sliderHeight: sliderHeight,
        itemWidth: itemWidth,
        itemHeight: itemHeight
      } : undefined;
      var mainDimension = vertical ? {
        height: itemHeight
      } : {
        width: itemWidth
      };
      var specificProps = this._needsScrollView() ? {
        key: keyExtractor ? keyExtractor(item, index) : this._getKeyExtractor(item, index)
      } : {};
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Component, _extends({
        style: [mainDimension, slideStyle, animatedStyle],
        pointerEvents: 'box-none'
      }, specificProps), renderItem({
        item: item,
        index: index
      }, parallaxProps));
    }
  }, {
    key: "_getComponentOverridableProps",
    value: function _getComponentOverridableProps() {
      var _this$props19 = this.props,
          enableMomentum = _this$props19.enableMomentum,
          itemWidth = _this$props19.itemWidth,
          itemHeight = _this$props19.itemHeight,
          loopClonesPerSide = _this$props19.loopClonesPerSide,
          sliderWidth = _this$props19.sliderWidth,
          sliderHeight = _this$props19.sliderHeight,
          vertical = _this$props19.vertical;
      var visibleItems = Math.ceil(vertical ? sliderHeight / itemHeight : sliderWidth / itemWidth) + 1;
      var initialNumPerSide = this._enableLoop() ? loopClonesPerSide : 2;
      var initialNumToRender = visibleItems + initialNumPerSide * 2;
      var maxToRenderPerBatch = 1 + initialNumToRender * 2;
      var windowSize = maxToRenderPerBatch;
      var specificProps = !this._needsScrollView() ? {
        initialNumToRender: initialNumToRender,
        maxToRenderPerBatch: maxToRenderPerBatch,
        windowSize: windowSize // updateCellsBatchingPeriod

      } : {};
      return _objectSpread({
        decelerationRate: enableMomentum ? 0.9 : 'fast',
        showsHorizontalScrollIndicator: false,
        showsVerticalScrollIndicator: false,
        overScrollMode: 'never',
        automaticallyAdjustContentInsets: false,
        directionalLockEnabled: true,
        pinchGestureEnabled: false,
        scrollsToTop: false,
        removeClippedSubviews: !this._needsScrollView(),
        inverted: this._needsRTLAdaptations()
      }, specificProps);
    }
  }, {
    key: "_getComponentStaticProps",
    value: function _getComponentStaticProps() {
      var _this10 = this;

      var hideCarousel = this.state.hideCarousel;
      var _this$props20 = this.props,
          containerCustomStyle = _this$props20.containerCustomStyle,
          contentContainerCustomStyle = _this$props20.contentContainerCustomStyle,
          keyExtractor = _this$props20.keyExtractor,
          sliderWidth = _this$props20.sliderWidth,
          sliderHeight = _this$props20.sliderHeight,
          style = _this$props20.style,
          vertical = _this$props20.vertical;
      var containerStyle = [containerCustomStyle || style || {}, hideCarousel ? {
        opacity: 0
      } : {}, vertical ? {
        height: sliderHeight,
        flexDirection: 'column'
      } : // LTR hack; see https://github.com/facebook/react-native/issues/11960
      // and https://github.com/facebook/react-native/issues/13100#issuecomment-328986423
      {
        width: sliderWidth,
        flexDirection: this._needsRTLAdaptations() ? 'row-reverse' : 'row'
      }];
      var contentContainerStyle = [vertical ? {
        paddingTop: this._getContainerInnerMargin(),
        paddingBottom: this._getContainerInnerMargin(true)
      } : {
        paddingLeft: this._getContainerInnerMargin(),
        paddingRight: this._getContainerInnerMargin(true)
      }, contentContainerCustomStyle || {}];
      var specificProps = !this._needsScrollView() ? {
        // extraData: this.state,
        renderItem: this._renderItem,
        numColumns: 1,
        keyExtractor: keyExtractor || this._getKeyExtractor
      } : {};
      return _objectSpread({
        ref: function ref(c) {
          return _this10._carouselRef = c;
        },
        data: this._getCustomData(),
        style: containerStyle,
        contentContainerStyle: contentContainerStyle,
        horizontal: !vertical,
        scrollEventThrottle: 1,
        onScroll: this._onScrollHandler,
        onScrollBeginDrag: this._onScrollBeginDrag,
        onScrollEndDrag: this._onScrollEndDrag,
        onMomentumScrollEnd: this._onMomentumScrollEnd,
        onResponderRelease: this._onTouchRelease,
        onStartShouldSetResponderCapture: this._onStartShouldSetResponderCapture,
        onTouchStart: this._onTouchStart,
        onTouchEnd: this._onScrollEnd,
        onLayout: this._onLayout
      }, specificProps);
    }
  }, {
    key: "render",
    value: function render() {
      var _this11 = this;

      var _this$props21 = this.props,
          data = _this$props21.data,
          renderItem = _this$props21.renderItem,
          useScrollView = _this$props21.useScrollView;

      if (!data || !renderItem) {
        return null;
      }

      var props = _objectSpread(_objectSpread(_objectSpread({}, this._getComponentOverridableProps()), this.props), this._getComponentStaticProps());

      var ScrollViewComponent = typeof useScrollView === 'function' ? useScrollView : AnimatedScrollView;
      return this._needsScrollView() ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ScrollViewComponent, props, this._getCustomData().map(function (item, index) {
        return _this11._renderItem({
          item: item,
          index: index
        });
      })) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(AnimatedFlatList, props);
    }
  }, {
    key: "realIndex",
    get: function get() {
      return this._activeItem;
    }
  }, {
    key: "currentIndex",
    get: function get() {
      return this._getDataIndex(this._activeItem);
    }
  }, {
    key: "currentScrollPosition",
    get: function get() {
      return this._currentContentOffset;
    }
  }]);

  return Carousel;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

Carousel.propTypes = {
  data: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.array.isRequired,
  renderItem: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func.isRequired,
  itemWidth: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.number,
  // required for horizontal carousel
  itemHeight: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.number,
  // required for vertical carousel
  sliderWidth: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.number,
  // required for horizontal carousel
  sliderHeight: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.number,
  // required for vertical carousel
  activeAnimationType: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,
  activeAnimationOptions: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object,
  activeSlideAlignment: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.oneOf(['center', 'end', 'start']),
  activeSlideOffset: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.number,
  apparitionDelay: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.number,
  autoplay: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool,
  autoplayDelay: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.number,
  autoplayInterval: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.number,
  callbackOffsetMargin: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.number,
  containerCustomStyle: react_native__WEBPACK_IMPORTED_MODULE_1__["ViewPropTypes"] ? react_native__WEBPACK_IMPORTED_MODULE_1__["ViewPropTypes"].style : react_native__WEBPACK_IMPORTED_MODULE_1__["View"].propTypes.style,
  contentContainerCustomStyle: react_native__WEBPACK_IMPORTED_MODULE_1__["ViewPropTypes"] ? react_native__WEBPACK_IMPORTED_MODULE_1__["ViewPropTypes"].style : react_native__WEBPACK_IMPORTED_MODULE_1__["View"].propTypes.style,
  enableMomentum: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool,
  enableSnap: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool,
  firstItem: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.number,
  hasParallaxImages: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool,
  inactiveSlideOpacity: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.number,
  inactiveSlideScale: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.number,
  inactiveSlideShift: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.number,
  layout: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.oneOf(['default', 'stack', 'tinder']),
  layoutCardOffset: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.number,
  lockScrollTimeoutDuration: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.number,
  lockScrollWhileSnapping: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool,
  loop: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool,
  loopClonesPerSide: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.number,
  scrollEnabled: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool,
  scrollInterpolator: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func,
  slideInterpolatedStyle: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func,
  slideStyle: react_native__WEBPACK_IMPORTED_MODULE_1__["ViewPropTypes"] ? react_native__WEBPACK_IMPORTED_MODULE_1__["ViewPropTypes"].style : react_native__WEBPACK_IMPORTED_MODULE_1__["View"].propTypes.style,
  shouldOptimizeUpdates: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool,
  swipeThreshold: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.number,
  useScrollView: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool, prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func]),
  vertical: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool,
  onBeforeSnapToItem: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func,
  onSnapToItem: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func
};
Carousel.defaultProps = {
  activeAnimationType: 'timing',
  activeAnimationOptions: null,
  activeSlideAlignment: 'center',
  activeSlideOffset: 20,
  apparitionDelay: 0,
  autoplay: false,
  autoplayDelay: 1000,
  autoplayInterval: 3000,
  callbackOffsetMargin: 5,
  containerCustomStyle: {},
  contentContainerCustomStyle: {},
  enableMomentum: false,
  enableSnap: true,
  firstItem: 0,
  hasParallaxImages: false,
  inactiveSlideOpacity: 0.7,
  inactiveSlideScale: 0.9,
  inactiveSlideShift: 0,
  layout: 'default',
  lockScrollTimeoutDuration: 1000,
  lockScrollWhileSnapping: false,
  loop: false,
  loopClonesPerSide: 3,
  scrollEnabled: true,
  slideStyle: {},
  shouldOptimizeUpdates: true,
  swipeThreshold: 20,
  useScrollView: !AnimatedFlatList,
  vertical: false
};


/***/ }),

/***/ "../../../node_modules/react-native-snap-carousel/src/index.js":
/*!**********************************************************************************************************************!*\
  !*** /Users/diego.antonelli/Desktop/projects/widgets-resources/node_modules/react-native-snap-carousel/src/index.js ***!
  \**********************************************************************************************************************/
/*! exports provided: default, Pagination, ParallaxImage, getInputRangeFromIndexes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _carousel_Carousel__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./carousel/Carousel */ "../../../node_modules/react-native-snap-carousel/src/carousel/Carousel.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _carousel_Carousel__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _pagination_Pagination__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pagination/Pagination */ "../../../node_modules/react-native-snap-carousel/src/pagination/Pagination.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Pagination", function() { return _pagination_Pagination__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony import */ var _parallaximage_ParallaxImage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./parallaximage/ParallaxImage */ "../../../node_modules/react-native-snap-carousel/src/parallaximage/ParallaxImage.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ParallaxImage", function() { return _parallaximage_ParallaxImage__WEBPACK_IMPORTED_MODULE_2__["default"]; });

/* harmony import */ var _utils_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./utils/animations */ "../../../node_modules/react-native-snap-carousel/src/utils/animations.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getInputRangeFromIndexes", function() { return _utils_animations__WEBPACK_IMPORTED_MODULE_3__["getInputRangeFromIndexes"]; });







/***/ }),

/***/ "../../../node_modules/react-native-snap-carousel/src/pagination/Pagination.js":
/*!**************************************************************************************************************************************!*\
  !*** /Users/diego.antonelli/Desktop/projects/widgets-resources/node_modules/react-native-snap-carousel/src/pagination/Pagination.js ***!
  \**************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Pagination; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_native__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-native */ "react-native");
/* harmony import */ var react_native__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_native__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "../../../node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _PaginationDot__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./PaginationDot */ "../../../node_modules/react-native-snap-carousel/src/pagination/PaginationDot.js");
/* harmony import */ var _Pagination_style__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Pagination.style */ "../../../node_modules/react-native-snap-carousel/src/pagination/Pagination.style.js");
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






var IS_IOS = react_native__WEBPACK_IMPORTED_MODULE_1__["Platform"].OS === 'ios';
var IS_RTL = react_native__WEBPACK_IMPORTED_MODULE_1__["I18nManager"].isRTL;

var Pagination = /*#__PURE__*/function (_PureComponent) {
  _inherits(Pagination, _PureComponent);

  var _super = _createSuper(Pagination);

  function Pagination(props) {
    var _this;

    _classCallCheck(this, Pagination);

    _this = _super.call(this, props); // Warnings

    if (props.dotColor && !props.inactiveDotColor || !props.dotColor && props.inactiveDotColor) {
      console.warn('react-native-snap-carousel | Pagination: ' + 'You need to specify both `dotColor` and `inactiveDotColor`');
    }

    if (props.dotElement && !props.inactiveDotElement || !props.dotElement && props.inactiveDotElement) {
      console.warn('react-native-snap-carousel | Pagination: ' + 'You need to specify both `dotElement` and `inactiveDotElement`');
    }

    if (props.tappableDots && props.carouselRef === undefined) {
      console.warn('react-native-snap-carousel | Pagination: ' + 'You must specify prop `carouselRef` when setting `tappableDots` to `true`');
    }

    return _this;
  }

  _createClass(Pagination, [{
    key: "_needsRTLAdaptations",
    value: function _needsRTLAdaptations() {
      var vertical = this.props.vertical;
      return IS_RTL && !IS_IOS && !vertical;
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          dotsLength = _this$props.dotsLength,
          containerStyle = _this$props.containerStyle,
          vertical = _this$props.vertical,
          accessibilityLabel = _this$props.accessibilityLabel;

      if (!dotsLength || dotsLength < 2) {
        return false;
      }

      var style = [_Pagination_style__WEBPACK_IMPORTED_MODULE_4__["default"].sliderPagination, {
        flexDirection: vertical ? 'column' : this._needsRTLAdaptations() ? 'row-reverse' : 'row'
      }, containerStyle || {}];
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_native__WEBPACK_IMPORTED_MODULE_1__["View"], {
        pointerEvents: 'box-none',
        style: style,
        accessible: !!accessibilityLabel,
        accessibilityLabel: accessibilityLabel
      }, this.dots);
    }
  }, {
    key: "_activeDotIndex",
    get: function get() {
      var _this$props2 = this.props,
          activeDotIndex = _this$props2.activeDotIndex,
          dotsLength = _this$props2.dotsLength;
      return this._needsRTLAdaptations() ? dotsLength - activeDotIndex - 1 : activeDotIndex;
    }
  }, {
    key: "dots",
    get: function get() {
      var _this2 = this;

      var _this$props3 = this.props,
          activeOpacity = _this$props3.activeOpacity,
          carouselRef = _this$props3.carouselRef,
          dotsLength = _this$props3.dotsLength,
          dotColor = _this$props3.dotColor,
          dotContainerStyle = _this$props3.dotContainerStyle,
          dotElement = _this$props3.dotElement,
          dotStyle = _this$props3.dotStyle,
          inactiveDotColor = _this$props3.inactiveDotColor,
          inactiveDotElement = _this$props3.inactiveDotElement,
          inactiveDotOpacity = _this$props3.inactiveDotOpacity,
          inactiveDotScale = _this$props3.inactiveDotScale,
          inactiveDotStyle = _this$props3.inactiveDotStyle,
          renderDots = _this$props3.renderDots,
          tappableDots = _this$props3.tappableDots,
          animatedDuration = _this$props3.animatedDuration,
          animatedFriction = _this$props3.animatedFriction,
          animatedTension = _this$props3.animatedTension,
          delayPressInDot = _this$props3.delayPressInDot;

      if (renderDots) {
        return renderDots(this._activeDotIndex, dotsLength, this);
      }

      var DefaultDot = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_PaginationDot__WEBPACK_IMPORTED_MODULE_3__["default"], {
        carouselRef: carouselRef,
        tappable: tappableDots && typeof carouselRef !== 'undefined',
        activeOpacity: activeOpacity,
        color: dotColor,
        containerStyle: dotContainerStyle,
        style: dotStyle,
        inactiveColor: inactiveDotColor,
        inactiveOpacity: inactiveDotOpacity,
        inactiveScale: inactiveDotScale,
        inactiveStyle: inactiveDotStyle,
        animatedDuration: animatedDuration,
        animatedFriction: animatedFriction,
        animatedTension: animatedTension,
        delayPressInDot: delayPressInDot
      });

      var dots = _toConsumableArray(Array(dotsLength).keys()).map(function (i) {
        var isActive = i === _this2._activeDotIndex;
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.cloneElement((isActive ? dotElement : inactiveDotElement) || DefaultDot, {
          key: "pagination-dot-".concat(i),
          active: isActive,
          index: i
        });
      });

      return dots;
    }
  }]);

  return Pagination;
}(react__WEBPACK_IMPORTED_MODULE_0__["PureComponent"]);

Pagination.propTypes = {
  activeDotIndex: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.number.isRequired,
  dotsLength: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.number.isRequired,
  activeOpacity: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.number,
  carouselRef: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object,
  containerStyle: react_native__WEBPACK_IMPORTED_MODULE_1__["ViewPropTypes"] ? react_native__WEBPACK_IMPORTED_MODULE_1__["ViewPropTypes"].style : react_native__WEBPACK_IMPORTED_MODULE_1__["View"].propTypes.style,
  dotColor: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,
  dotContainerStyle: react_native__WEBPACK_IMPORTED_MODULE_1__["ViewPropTypes"] ? react_native__WEBPACK_IMPORTED_MODULE_1__["ViewPropTypes"].style : react_native__WEBPACK_IMPORTED_MODULE_1__["View"].propTypes.style,
  dotElement: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.element,
  dotStyle: react_native__WEBPACK_IMPORTED_MODULE_1__["ViewPropTypes"] ? react_native__WEBPACK_IMPORTED_MODULE_1__["ViewPropTypes"].style : react_native__WEBPACK_IMPORTED_MODULE_1__["View"].propTypes.style,
  inactiveDotColor: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,
  inactiveDotElement: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.element,
  inactiveDotOpacity: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.number,
  inactiveDotScale: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.number,
  inactiveDotStyle: react_native__WEBPACK_IMPORTED_MODULE_1__["ViewPropTypes"] ? react_native__WEBPACK_IMPORTED_MODULE_1__["ViewPropTypes"].style : react_native__WEBPACK_IMPORTED_MODULE_1__["View"].propTypes.style,
  renderDots: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func,
  tappableDots: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool,
  vertical: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool,
  accessibilityLabel: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,
  animatedDuration: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.number,
  animatedFriction: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.number,
  animatedTension: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.number,
  delayPressInDot: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.number
};
Pagination.defaultProps = {
  inactiveDotOpacity: 0.5,
  inactiveDotScale: 0.5,
  tappableDots: false,
  vertical: false,
  animatedDuration: 250,
  animatedFriction: 4,
  animatedTension: 50,
  delayPressInDot: 0
};


/***/ }),

/***/ "../../../node_modules/react-native-snap-carousel/src/pagination/Pagination.style.js":
/*!********************************************************************************************************************************************!*\
  !*** /Users/diego.antonelli/Desktop/projects/widgets-resources/node_modules/react-native-snap-carousel/src/pagination/Pagination.style.js ***!
  \********************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_native__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-native */ "react-native");
/* harmony import */ var react_native__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_native__WEBPACK_IMPORTED_MODULE_0__);

var DEFAULT_DOT_SIZE = 7;
var DEFAULT_DOT_COLOR = 'rgba(0, 0, 0, 0.75)';
/* harmony default export */ __webpack_exports__["default"] = (react_native__WEBPACK_IMPORTED_MODULE_0__["StyleSheet"].create({
  sliderPagination: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
    paddingVertical: 30
  },
  sliderPaginationDotContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 8
  },
  sliderPaginationDot: {
    width: DEFAULT_DOT_SIZE,
    height: DEFAULT_DOT_SIZE,
    borderRadius: DEFAULT_DOT_SIZE / 2,
    backgroundColor: DEFAULT_DOT_COLOR
  }
}));

/***/ }),

/***/ "../../../node_modules/react-native-snap-carousel/src/pagination/PaginationDot.js":
/*!*****************************************************************************************************************************************!*\
  !*** /Users/diego.antonelli/Desktop/projects/widgets-resources/node_modules/react-native-snap-carousel/src/pagination/PaginationDot.js ***!
  \*****************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return PaginationDot; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_native__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-native */ "react-native");
/* harmony import */ var react_native__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_native__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "../../../node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Pagination_style__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Pagination.style */ "../../../node_modules/react-native-snap-carousel/src/pagination/Pagination.style.js");
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






var PaginationDot = /*#__PURE__*/function (_PureComponent) {
  _inherits(PaginationDot, _PureComponent);

  var _super = _createSuper(PaginationDot);

  function PaginationDot(props) {
    var _this;

    _classCallCheck(this, PaginationDot);

    _this = _super.call(this, props);
    _this.state = {
      animColor: new react_native__WEBPACK_IMPORTED_MODULE_1__["Animated"].Value(0),
      animOpacity: new react_native__WEBPACK_IMPORTED_MODULE_1__["Animated"].Value(0),
      animTransform: new react_native__WEBPACK_IMPORTED_MODULE_1__["Animated"].Value(0)
    };
    return _this;
  }

  _createClass(PaginationDot, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      if (this.props.active) {
        this._animate(1);
      }
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      if (prevProps.active !== this.props.active) {
        this._animate(this.props.active ? 1 : 0);
      }
    }
  }, {
    key: "_animate",
    value: function _animate() {
      var toValue = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
      var _this$state = this.state,
          animColor = _this$state.animColor,
          animOpacity = _this$state.animOpacity,
          animTransform = _this$state.animTransform;
      var _this$props = this.props,
          animatedDuration = _this$props.animatedDuration,
          animatedFriction = _this$props.animatedFriction,
          animatedTension = _this$props.animatedTension;
      var commonProperties = {
        toValue: toValue,
        duration: animatedDuration,
        isInteraction: false,
        useNativeDriver: !this._shouldAnimateColor
      };
      var animations = [react_native__WEBPACK_IMPORTED_MODULE_1__["Animated"].timing(animOpacity, _objectSpread({
        easing: react_native__WEBPACK_IMPORTED_MODULE_1__["Easing"].linear
      }, commonProperties)), react_native__WEBPACK_IMPORTED_MODULE_1__["Animated"].spring(animTransform, _objectSpread({
        friction: animatedFriction,
        tension: animatedTension
      }, commonProperties))];

      if (this._shouldAnimateColor) {
        animations.push(react_native__WEBPACK_IMPORTED_MODULE_1__["Animated"].timing(animColor, _objectSpread({
          easing: react_native__WEBPACK_IMPORTED_MODULE_1__["Easing"].linear
        }, commonProperties)));
      }

      react_native__WEBPACK_IMPORTED_MODULE_1__["Animated"].parallel(animations).start();
    }
  }, {
    key: "render",
    value: function render() {
      var _this$state2 = this.state,
          animColor = _this$state2.animColor,
          animOpacity = _this$state2.animOpacity,
          animTransform = _this$state2.animTransform;
      var _this$props2 = this.props,
          active = _this$props2.active,
          activeOpacity = _this$props2.activeOpacity,
          carouselRef = _this$props2.carouselRef,
          color = _this$props2.color,
          containerStyle = _this$props2.containerStyle,
          inactiveColor = _this$props2.inactiveColor,
          inactiveStyle = _this$props2.inactiveStyle,
          inactiveOpacity = _this$props2.inactiveOpacity,
          inactiveScale = _this$props2.inactiveScale,
          index = _this$props2.index,
          style = _this$props2.style,
          tappable = _this$props2.tappable,
          delayPressInDot = _this$props2.delayPressInDot;
      var animatedStyle = {
        opacity: animOpacity.interpolate({
          inputRange: [0, 1],
          outputRange: [inactiveOpacity, 1]
        }),
        transform: [{
          scale: animTransform.interpolate({
            inputRange: [0, 1],
            outputRange: [inactiveScale, 1]
          })
        }]
      };
      var animatedColor = this._shouldAnimateColor ? {
        backgroundColor: animColor.interpolate({
          inputRange: [0, 1],
          outputRange: [inactiveColor, color]
        })
      } : {};
      var dotContainerStyle = [_Pagination_style__WEBPACK_IMPORTED_MODULE_3__["default"].sliderPaginationDotContainer, containerStyle || {}];
      var dotStyle = [_Pagination_style__WEBPACK_IMPORTED_MODULE_3__["default"].sliderPaginationDot, style || {}, !active && inactiveStyle || {}, animatedStyle, animatedColor];
      var onPress = tappable ? function () {
        try {
          var currentRef = carouselRef.current || carouselRef;

          currentRef._snapToItem(currentRef._getPositionIndex(index));
        } catch (error) {
          console.warn('react-native-snap-carousel | Pagination: ' + '`carouselRef` has to be a Carousel ref.\n' + error);
        }
      } : undefined;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_native__WEBPACK_IMPORTED_MODULE_1__["TouchableOpacity"], {
        accessible: false,
        style: dotContainerStyle,
        activeOpacity: tappable ? activeOpacity : 1,
        onPress: onPress,
        delayPressIn: delayPressInDot
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_native__WEBPACK_IMPORTED_MODULE_1__["Animated"].View, {
        style: dotStyle
      }));
    }
  }, {
    key: "_shouldAnimateColor",
    get: function get() {
      var _this$props3 = this.props,
          color = _this$props3.color,
          inactiveColor = _this$props3.inactiveColor;
      return color && inactiveColor;
    }
  }]);

  return PaginationDot;
}(react__WEBPACK_IMPORTED_MODULE_0__["PureComponent"]);

PaginationDot.propTypes = {
  inactiveOpacity: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.number.isRequired,
  inactiveScale: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.number.isRequired,
  active: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool,
  activeOpacity: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.number,
  carouselRef: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object,
  color: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,
  containerStyle: react_native__WEBPACK_IMPORTED_MODULE_1__["ViewPropTypes"] ? react_native__WEBPACK_IMPORTED_MODULE_1__["ViewPropTypes"].style : react_native__WEBPACK_IMPORTED_MODULE_1__["View"].propTypes.style,
  inactiveColor: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,
  inactiveStyle: react_native__WEBPACK_IMPORTED_MODULE_1__["ViewPropTypes"] ? react_native__WEBPACK_IMPORTED_MODULE_1__["ViewPropTypes"].style : react_native__WEBPACK_IMPORTED_MODULE_1__["View"].propTypes.style,
  index: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.number,
  style: react_native__WEBPACK_IMPORTED_MODULE_1__["ViewPropTypes"] ? react_native__WEBPACK_IMPORTED_MODULE_1__["ViewPropTypes"].style : react_native__WEBPACK_IMPORTED_MODULE_1__["View"].propTypes.style,
  tappable: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool
};


/***/ }),

/***/ "../../../node_modules/react-native-snap-carousel/src/parallaximage/ParallaxImage.js":
/*!********************************************************************************************************************************************!*\
  !*** /Users/diego.antonelli/Desktop/projects/widgets-resources/node_modules/react-native-snap-carousel/src/parallaximage/ParallaxImage.js ***!
  \********************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ParallaxImage; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_native__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-native */ "react-native");
/* harmony import */ var react_native__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_native__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "../../../node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _ParallaxImage_style__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ParallaxImage.style */ "../../../node_modules/react-native-snap-carousel/src/parallaximage/ParallaxImage.style.js");
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
} // Parallax effect inspired by https://github.com/oblador/react-native-parallax/







var ParallaxImage = /*#__PURE__*/function (_Component) {
  _inherits(ParallaxImage, _Component);

  var _super = _createSuper(ParallaxImage);

  function ParallaxImage(props) {
    var _this;

    _classCallCheck(this, ParallaxImage);

    _this = _super.call(this, props);
    _this.state = {
      offset: 0,
      width: 0,
      height: 0,
      status: 1,
      // 1 -> loading; 2 -> loaded // 3 -> transition finished; 4 -> error
      animOpacity: new react_native__WEBPACK_IMPORTED_MODULE_1__["Animated"].Value(0)
    };
    _this._onLoad = _this._onLoad.bind(_assertThisInitialized(_this));
    _this._onError = _this._onError.bind(_assertThisInitialized(_this));
    _this._measureLayout = _this._measureLayout.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(ParallaxImage, [{
    key: "setNativeProps",
    value: function setNativeProps(nativeProps) {
      this._container.setNativeProps(nativeProps);
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      this._mounted = true;
      setTimeout(function () {
        _this2._measureLayout();
      }, 0);
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this._mounted = false;
    }
  }, {
    key: "_measureLayout",
    value: function _measureLayout() {
      var _this3 = this;

      if (this._container) {
        var _this$props = this.props,
            dimensions = _this$props.dimensions,
            vertical = _this$props.vertical,
            carouselRef = _this$props.carouselRef,
            sliderWidth = _this$props.sliderWidth,
            sliderHeight = _this$props.sliderHeight,
            itemWidth = _this$props.itemWidth,
            itemHeight = _this$props.itemHeight;

        if (carouselRef) {
          this._container.measureLayout(Object(react_native__WEBPACK_IMPORTED_MODULE_1__["findNodeHandle"])(carouselRef), function (x, y, width, height, pageX, pageY) {
            var offset = vertical ? y - (sliderHeight - itemHeight) / 2 : x - (sliderWidth - itemWidth) / 2;

            _this3.setState({
              offset: offset,
              width: dimensions && dimensions.width ? dimensions.width : Math.ceil(width),
              height: dimensions && dimensions.height ? dimensions.height : Math.ceil(height)
            });
          });
        }
      }
    }
  }, {
    key: "_onLoad",
    value: function _onLoad(event) {
      var _this4 = this;

      var animOpacity = this.state.animOpacity;
      var _this$props2 = this.props,
          fadeDuration = _this$props2.fadeDuration,
          onLoad = _this$props2.onLoad;

      if (!this._mounted) {
        return;
      }

      this.setState({
        status: 2
      });

      if (onLoad) {
        onLoad(event);
      }

      react_native__WEBPACK_IMPORTED_MODULE_1__["Animated"].timing(animOpacity, {
        toValue: 1,
        duration: fadeDuration,
        easing: react_native__WEBPACK_IMPORTED_MODULE_1__["Easing"].out(react_native__WEBPACK_IMPORTED_MODULE_1__["Easing"].quad),
        isInteraction: false,
        useNativeDriver: true
      }).start(function () {
        _this4.setState({
          status: 3
        });
      });
    } // If arg is missing from method signature, it just won't be called

  }, {
    key: "_onError",
    value: function _onError(event) {
      var onError = this.props.onError;
      this.setState({
        status: 4
      });

      if (onError) {
        onError(event);
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this5 = this;

      var containerStyle = this.props.containerStyle;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_native__WEBPACK_IMPORTED_MODULE_1__["View"], {
        ref: function ref(c) {
          _this5._container = c;
        },
        pointerEvents: 'none',
        style: [containerStyle, _ParallaxImage_style__WEBPACK_IMPORTED_MODULE_3__["default"].container],
        onLayout: this._measureLayout
      }, this.image, this.spinner);
    }
  }, {
    key: "image",
    get: function get() {
      var _this$state = this.state,
          status = _this$state.status,
          animOpacity = _this$state.animOpacity,
          offset = _this$state.offset,
          width = _this$state.width,
          height = _this$state.height;

      var _this$props3 = this.props,
          scrollPosition = _this$props3.scrollPosition,
          dimensions = _this$props3.dimensions,
          vertical = _this$props3.vertical,
          sliderWidth = _this$props3.sliderWidth,
          sliderHeight = _this$props3.sliderHeight,
          parallaxFactor = _this$props3.parallaxFactor,
          style = _this$props3.style,
          AnimatedImageComponent = _this$props3.AnimatedImageComponent,
          other = _objectWithoutProperties(_this$props3, ["scrollPosition", "dimensions", "vertical", "sliderWidth", "sliderHeight", "parallaxFactor", "style", "AnimatedImageComponent"]);

      var parallaxPadding = (vertical ? height : width) * parallaxFactor;
      var requiredStyles = {
        position: 'relative'
      };
      var dynamicStyles = {
        width: vertical ? width : width + parallaxPadding * 2,
        height: vertical ? height + parallaxPadding * 2 : height,
        opacity: animOpacity,
        transform: scrollPosition ? [{
          translateX: !vertical ? scrollPosition.interpolate({
            inputRange: [offset - sliderWidth, offset + sliderWidth],
            outputRange: [-parallaxPadding, parallaxPadding],
            extrapolate: 'clamp'
          }) : 0
        }, {
          translateY: vertical ? scrollPosition.interpolate({
            inputRange: [offset - sliderHeight, offset + sliderHeight],
            outputRange: [-parallaxPadding, parallaxPadding],
            extrapolate: 'clamp'
          }) : 0
        }] : []
      };
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(AnimatedImageComponent, _extends({}, other, {
        style: [_ParallaxImage_style__WEBPACK_IMPORTED_MODULE_3__["default"].image, style, requiredStyles, dynamicStyles],
        onLoad: this._onLoad,
        onError: status !== 3 ? this._onError : undefined // prevent infinite-loop bug

      }));
    }
  }, {
    key: "spinner",
    get: function get() {
      var status = this.state.status;
      var _this$props4 = this.props,
          showSpinner = _this$props4.showSpinner,
          spinnerColor = _this$props4.spinnerColor;
      return status === 1 && showSpinner ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_native__WEBPACK_IMPORTED_MODULE_1__["View"], {
        style: _ParallaxImage_style__WEBPACK_IMPORTED_MODULE_3__["default"].loaderContainer
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_native__WEBPACK_IMPORTED_MODULE_1__["ActivityIndicator"], {
        size: 'small',
        color: spinnerColor,
        animating: true
      })) : false;
    }
  }]);

  return ParallaxImage;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

ParallaxImage.propTypes = _objectSpread(_objectSpread({}, react_native__WEBPACK_IMPORTED_MODULE_1__["Image"].propTypes), {}, {
  carouselRef: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object,
  // passed from <Carousel />
  itemHeight: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.number,
  // passed from <Carousel />
  itemWidth: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.number,
  // passed from <Carousel />
  scrollPosition: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object,
  // passed from <Carousel />
  sliderHeight: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.number,
  // passed from <Carousel />
  sliderWidth: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.number,
  // passed from <Carousel />
  vertical: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool,
  // passed from <Carousel />
  containerStyle: react_native__WEBPACK_IMPORTED_MODULE_1__["ViewPropTypes"] ? react_native__WEBPACK_IMPORTED_MODULE_1__["ViewPropTypes"].style : react_native__WEBPACK_IMPORTED_MODULE_1__["View"].propTypes.style,
  dimensions: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.shape({
    width: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.number,
    height: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.number
  }),
  fadeDuration: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.number,
  parallaxFactor: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.number,
  showSpinner: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool,
  spinnerColor: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,
  AnimatedImageComponent: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func, prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object])
});
ParallaxImage.defaultProps = {
  containerStyle: {},
  fadeDuration: 500,
  parallaxFactor: 0.3,
  showSpinner: true,
  spinnerColor: 'rgba(0, 0, 0, 0.4)',
  AnimatedImageComponent: react_native__WEBPACK_IMPORTED_MODULE_1__["Animated"].Image
};


/***/ }),

/***/ "../../../node_modules/react-native-snap-carousel/src/parallaximage/ParallaxImage.style.js":
/*!**************************************************************************************************************************************************!*\
  !*** /Users/diego.antonelli/Desktop/projects/widgets-resources/node_modules/react-native-snap-carousel/src/parallaximage/ParallaxImage.style.js ***!
  \**************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_native__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-native */ "react-native");
/* harmony import */ var react_native__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_native__WEBPACK_IMPORTED_MODULE_0__);
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


/* harmony default export */ __webpack_exports__["default"] = (react_native__WEBPACK_IMPORTED_MODULE_0__["StyleSheet"].create({
  container: {
    overflow: 'hidden',
    alignItems: 'center',
    justifyContent: 'center'
  },
  image: {
    position: 'relative',
    resizeMode: 'cover',
    width: null,
    height: null
  },
  loaderContainer: _objectSpread(_objectSpread({}, react_native__WEBPACK_IMPORTED_MODULE_0__["StyleSheet"].absoluteFillObject), {}, {
    alignItems: 'center',
    justifyContent: 'center'
  })
}));

/***/ }),

/***/ "../../../node_modules/react-native-snap-carousel/src/utils/animations.js":
/*!*********************************************************************************************************************************!*\
  !*** /Users/diego.antonelli/Desktop/projects/widgets-resources/node_modules/react-native-snap-carousel/src/utils/animations.js ***!
  \*********************************************************************************************************************************/
/*! exports provided: getInputRangeFromIndexes, defaultScrollInterpolator, defaultAnimatedStyles, shiftAnimatedStyles, stackScrollInterpolator, stackAnimatedStyles, tinderScrollInterpolator, tinderAnimatedStyles */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getInputRangeFromIndexes", function() { return getInputRangeFromIndexes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "defaultScrollInterpolator", function() { return defaultScrollInterpolator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "defaultAnimatedStyles", function() { return defaultAnimatedStyles; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "shiftAnimatedStyles", function() { return shiftAnimatedStyles; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "stackScrollInterpolator", function() { return stackScrollInterpolator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "stackAnimatedStyles", function() { return stackAnimatedStyles; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "tinderScrollInterpolator", function() { return tinderScrollInterpolator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "tinderAnimatedStyles", function() { return tinderAnimatedStyles; });
/* harmony import */ var react_native__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-native */ "react-native");
/* harmony import */ var react_native__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_native__WEBPACK_IMPORTED_MODULE_0__);
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


var IS_ANDROID = react_native__WEBPACK_IMPORTED_MODULE_0__["Platform"].OS === 'android'; // Get scroll interpolator's input range from an array of slide indexes
// Indexes are relative to the current active slide (index 0)
// For example, using [3, 2, 1, 0, -1] will return:
// [
//     (index - 3) * sizeRef, // active + 3
//     (index - 2) * sizeRef, // active + 2
//     (index - 1) * sizeRef, // active + 1
//     index * sizeRef, // active
//     (index + 1) * sizeRef // active - 1
// ]

function getInputRangeFromIndexes(range, index, carouselProps) {
  var sizeRef = carouselProps.vertical ? carouselProps.itemHeight : carouselProps.itemWidth;
  var inputRange = [];

  for (var i = 0; i < range.length; i++) {
    inputRange.push((index - range[i]) * sizeRef);
  }

  return inputRange;
} // Default behavior
// Scale and/or opacity effect
// Based on props 'inactiveSlideOpacity' and 'inactiveSlideScale'

function defaultScrollInterpolator(index, carouselProps) {
  var range = [1, 0, -1];
  var inputRange = getInputRangeFromIndexes(range, index, carouselProps);
  var outputRange = [0, 1, 0];
  return {
    inputRange: inputRange,
    outputRange: outputRange
  };
}
function defaultAnimatedStyles(index, animatedValue, carouselProps) {
  var animatedOpacity = {};
  var animatedScale = {};

  if (carouselProps.inactiveSlideOpacity < 1) {
    animatedOpacity = {
      opacity: animatedValue.interpolate({
        inputRange: [0, 1],
        outputRange: [carouselProps.inactiveSlideOpacity, 1]
      })
    };
  }

  if (carouselProps.inactiveSlideScale < 1) {
    animatedScale = {
      transform: [{
        scale: animatedValue.interpolate({
          inputRange: [0, 1],
          outputRange: [carouselProps.inactiveSlideScale, 1]
        })
      }]
    };
  }

  return _objectSpread(_objectSpread({}, animatedOpacity), animatedScale);
} // Shift animation
// Same as the default one, but the active slide is also shifted up or down
// Based on prop 'inactiveSlideShift'

function shiftAnimatedStyles(index, animatedValue, carouselProps) {
  var animatedOpacity = {};
  var animatedScale = {};
  var animatedTranslate = {};

  if (carouselProps.inactiveSlideOpacity < 1) {
    animatedOpacity = {
      opacity: animatedValue.interpolate({
        inputRange: [0, 1],
        outputRange: [carouselProps.inactiveSlideOpacity, 1]
      })
    };
  }

  if (carouselProps.inactiveSlideScale < 1) {
    animatedScale = {
      scale: animatedValue.interpolate({
        inputRange: [0, 1],
        outputRange: [carouselProps.inactiveSlideScale, 1]
      })
    };
  }

  if (carouselProps.inactiveSlideShift !== 0) {
    var translateProp = carouselProps.vertical ? 'translateX' : 'translateY';
    animatedTranslate = _defineProperty({}, translateProp, animatedValue.interpolate({
      inputRange: [0, 1],
      outputRange: [carouselProps.inactiveSlideShift, 0]
    }));
  }

  return _objectSpread(_objectSpread({}, animatedOpacity), {}, {
    transform: [_objectSpread({}, animatedScale), _objectSpread({}, animatedTranslate)]
  });
} // Stack animation
// Imitate a deck/stack of cards (see #195)
// WARNING: The effect had to be visually inverted on Android because this OS doesn't honor the `zIndex`property
// This means that the item with the higher zIndex (and therefore the tap receiver) remains the one AFTER the currently active item
// The `elevation` property compensates for that only visually, which is not good enough

function stackScrollInterpolator(index, carouselProps) {
  var range = IS_ANDROID ? [1, 0, -1, -2, -3] : [3, 2, 1, 0, -1];
  var inputRange = getInputRangeFromIndexes(range, index, carouselProps);
  var outputRange = range;
  return {
    inputRange: inputRange,
    outputRange: outputRange
  };
}
function stackAnimatedStyles(index, animatedValue, carouselProps, cardOffset) {
  var sizeRef = carouselProps.vertical ? carouselProps.itemHeight : carouselProps.itemWidth;
  var translateProp = carouselProps.vertical ? 'translateY' : 'translateX';
  var card1Scale = 0.9;
  var card2Scale = 0.8;
  cardOffset = !cardOffset && cardOffset !== 0 ? 18 : cardOffset;

  var getTranslateFromScale = function getTranslateFromScale(cardIndex, scale) {
    var centerFactor = 1 / scale * cardIndex;
    var centeredPosition = -Math.round(sizeRef * centerFactor);
    var edgeAlignment = Math.round((sizeRef - sizeRef * scale) / 2);
    var offset = Math.round(cardOffset * Math.abs(cardIndex) / scale);
    return IS_ANDROID ? centeredPosition - edgeAlignment - offset : centeredPosition + edgeAlignment + offset;
  };

  var opacityOutputRange = carouselProps.inactiveSlideOpacity === 1 ? [1, 1, 1, 0] : [1, 0.75, 0.5, 0];
  return IS_ANDROID ? {
    // elevation: carouselProps.data.length - index, // fix zIndex bug visually, but not from a logic point of view
    opacity: animatedValue.interpolate({
      inputRange: [-3, -2, -1, 0],
      outputRange: opacityOutputRange.reverse(),
      extrapolate: 'clamp'
    }),
    transform: [{
      scale: animatedValue.interpolate({
        inputRange: [-2, -1, 0, 1],
        outputRange: [card2Scale, card1Scale, 1, card1Scale],
        extrapolate: 'clamp'
      })
    }, _defineProperty({}, translateProp, animatedValue.interpolate({
      inputRange: [-3, -2, -1, 0, 1],
      outputRange: [getTranslateFromScale(-3, card2Scale), getTranslateFromScale(-2, card2Scale), getTranslateFromScale(-1, card1Scale), 0, sizeRef * 0.5],
      extrapolate: 'clamp'
    }))]
  } : {
    zIndex: carouselProps.data.length - index,
    opacity: animatedValue.interpolate({
      inputRange: [0, 1, 2, 3],
      outputRange: opacityOutputRange,
      extrapolate: 'clamp'
    }),
    transform: [{
      scale: animatedValue.interpolate({
        inputRange: [-1, 0, 1, 2],
        outputRange: [card1Scale, 1, card1Scale, card2Scale],
        extrapolate: 'clamp'
      })
    }, _defineProperty({}, translateProp, animatedValue.interpolate({
      inputRange: [-1, 0, 1, 2, 3],
      outputRange: [-sizeRef * 0.5, 0, getTranslateFromScale(1, card1Scale), getTranslateFromScale(2, card2Scale), getTranslateFromScale(3, card2Scale)],
      extrapolate: 'clamp'
    }))]
  };
} // Tinder animation
// Imitate the popular Tinder layout
// WARNING: The effect had to be visually inverted on Android because this OS doesn't honor the `zIndex`property
// This means that the item with the higher zIndex (and therefore the tap receiver) remains the one AFTER the currently active item
// The `elevation` property compensates for that only visually, which is not good enough

function tinderScrollInterpolator(index, carouselProps) {
  var range = IS_ANDROID ? [1, 0, -1, -2, -3] : [3, 2, 1, 0, -1];
  var inputRange = getInputRangeFromIndexes(range, index, carouselProps);
  var outputRange = range;
  return {
    inputRange: inputRange,
    outputRange: outputRange
  };
}
function tinderAnimatedStyles(index, animatedValue, carouselProps, cardOffset) {
  var sizeRef = carouselProps.vertical ? carouselProps.itemHeight : carouselProps.itemWidth;
  var mainTranslateProp = carouselProps.vertical ? 'translateY' : 'translateX';
  var secondaryTranslateProp = carouselProps.vertical ? 'translateX' : 'translateY';
  var card1Scale = 0.96;
  var card2Scale = 0.92;
  var card3Scale = 0.88;
  var peekingCardsOpacity = IS_ANDROID ? 0.92 : 1;
  cardOffset = !cardOffset && cardOffset !== 0 ? 9 : cardOffset;

  var getMainTranslateFromScale = function getMainTranslateFromScale(cardIndex, scale) {
    var centerFactor = 1 / scale * cardIndex;
    return -Math.round(sizeRef * centerFactor);
  };

  var getSecondaryTranslateFromScale = function getSecondaryTranslateFromScale(cardIndex, scale) {
    return Math.round(cardOffset * Math.abs(cardIndex) / scale);
  };

  return IS_ANDROID ? {
    // elevation: carouselProps.data.length - index, // fix zIndex bug visually, but not from a logic point of view
    opacity: animatedValue.interpolate({
      inputRange: [-3, -2, -1, 0, 1],
      outputRange: [0, peekingCardsOpacity, peekingCardsOpacity, 1, 0],
      extrapolate: 'clamp'
    }),
    transform: [{
      scale: animatedValue.interpolate({
        inputRange: [-3, -2, -1, 0],
        outputRange: [card3Scale, card2Scale, card1Scale, 1],
        extrapolate: 'clamp'
      })
    }, {
      rotate: animatedValue.interpolate({
        inputRange: [0, 1],
        outputRange: ['0deg', '22deg'],
        extrapolate: 'clamp'
      })
    }, _defineProperty({}, mainTranslateProp, animatedValue.interpolate({
      inputRange: [-3, -2, -1, 0, 1],
      outputRange: [getMainTranslateFromScale(-3, card3Scale), getMainTranslateFromScale(-2, card2Scale), getMainTranslateFromScale(-1, card1Scale), 0, sizeRef * 1.1],
      extrapolate: 'clamp'
    })), _defineProperty({}, secondaryTranslateProp, animatedValue.interpolate({
      inputRange: [-3, -2, -1, 0],
      outputRange: [getSecondaryTranslateFromScale(-3, card3Scale), getSecondaryTranslateFromScale(-2, card2Scale), getSecondaryTranslateFromScale(-1, card1Scale), 0],
      extrapolate: 'clamp'
    }))]
  } : {
    zIndex: carouselProps.data.length - index,
    opacity: animatedValue.interpolate({
      inputRange: [-1, 0, 1, 2, 3],
      outputRange: [0, 1, peekingCardsOpacity, peekingCardsOpacity, 0],
      extrapolate: 'clamp'
    }),
    transform: [{
      scale: animatedValue.interpolate({
        inputRange: [0, 1, 2, 3],
        outputRange: [1, card1Scale, card2Scale, card3Scale],
        extrapolate: 'clamp'
      })
    }, {
      rotate: animatedValue.interpolate({
        inputRange: [-1, 0],
        outputRange: ['-22deg', '0deg'],
        extrapolate: 'clamp'
      })
    }, _defineProperty({}, mainTranslateProp, animatedValue.interpolate({
      inputRange: [-1, 0, 1, 2, 3],
      outputRange: [-sizeRef * 1.1, 0, getMainTranslateFromScale(1, card1Scale), getMainTranslateFromScale(2, card2Scale), getMainTranslateFromScale(3, card3Scale)],
      extrapolate: 'clamp'
    })), _defineProperty({}, secondaryTranslateProp, animatedValue.interpolate({
      inputRange: [0, 1, 2, 3],
      outputRange: [0, getSecondaryTranslateFromScale(1, card1Scale), getSecondaryTranslateFromScale(2, card2Scale), getSecondaryTranslateFromScale(3, card3Scale)],
      extrapolate: 'clamp'
    }))]
  };
}

/***/ }),

/***/ "../../../packages-native/carousel/src/Carousel.tsx":
/*!***********************************************************************************************************!*\
  !*** /Users/diego.antonelli/Desktop/projects/widgets-resources/packages-native/carousel/src/Carousel.tsx ***!
  \***********************************************************************************************************/
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
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(/*! react */ "react"), __webpack_require__(/*! react-native */ "react-native"), __webpack_require__(/*! ./ui/styles */ "../../../packages-native/carousel/src/ui/styles.ts"), __webpack_require__(/*! react-native-snap-carousel */ "../../../node_modules/react-native-snap-carousel/src/index.js"), __webpack_require__(/*! deepmerge */ "../../../node_modules/deepmerge/dist/cjs.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, react_1, react_native_1, styles_1, react_native_snap_carousel_1, deepmerge_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    react_native_snap_carousel_1 = __importStar(react_native_snap_carousel_1);
    deepmerge_1 = __importDefault(deepmerge_1);
    exports.Carousel = function (props) {
        var _a, _b, _c;
        var _d = react_1.useState({
            slider: { width: 0, height: 0 },
            slide: { width: 0, height: 0 }
        }), sliderDimensions = _d[0], setSliderDimensions = _d[1];
        var customStyles = props.style ? props.style.filter(function (o) { return o != null; }) : [];
        var styles = deepmerge_1.default.all(__spreadArrays([styles_1.defaultCarouselStyle], customStyles));
        var layoutSpecificStyle = props.layout === "fullWidth" ? styles.fullWidthLayout : styles.cardLayout;
        var _e = react_1.useState(undefined), carouselRef = _e[0], setCarouselRef = _e[1];
        var _f = react_1.useState(0), activeSlide = _f[0], setActiveSlide = _f[1];
        var _g = react_1.useState(true), loading = _g[0], setLoading = _g[1];
        react_1.useEffect(function () {
            var _a;
            if (((_a = props.contentSource) === null || _a === void 0 ? void 0 : _a.status) === "available") {
                setLoading(false);
            }
        }, [props.contentSource]);
        var onSnap = react_1.useCallback(function (index) {
            setActiveSlide(index);
        }, []);
        var renderItem = react_1.useCallback(function (_a) {
            var item = _a.item, index = _a.index;
            var viewStyle = layoutSpecificStyle.slideItem;
            if (viewStyle) {
                delete viewStyle.width;
            }
            return (react_1.createElement(react_native_1.View, { key: index, style: __assign({}, viewStyle), testID: props.name + "$content$" + index, accessible: true }, props.content(item)));
        }, []);
        var renderPagination = react_1.useCallback(function () {
            var _a, _b, _c, _d;
            if (!props.showPagination || carouselRef === undefined) {
                return null;
            }
            var contentLength = props.contentSource.items.length;
            var paginationOverflow = contentLength > 5;
            var pagination = layoutSpecificStyle.pagination;
            var a11yProps = { accessibilityLabel: props.name + "$pagination" };
            if (paginationOverflow) {
                return (react_1.createElement(react_native_1.View, { style: pagination.container, testID: props.name + "$pagination" },
                    react_1.createElement(react_native_1.Text, { style: pagination.text },
                        activeSlide + 1,
                        "/",
                        contentLength)));
            }
            return (react_1.createElement(react_native_snap_carousel_1.Pagination, __assign({ dotsLength: contentLength, activeDotIndex: activeSlide, containerStyle: pagination.container, dotContainerStyle: pagination.dotContainerStyle, dotColor: (_a = pagination.dotStyle) === null || _a === void 0 ? void 0 : _a.color, dotStyle: pagination.dotStyle, inactiveDotStyle: pagination.inactiveDotStyle, inactiveDotColor: (_b = pagination.inactiveDotStyle) === null || _b === void 0 ? void 0 : _b.color, inactiveDotOpacity: (_c = pagination.inactiveDotStyle) === null || _c === void 0 ? void 0 : _c.opacity, inactiveDotScale: (_d = pagination.inactiveDotStyle) === null || _d === void 0 ? void 0 : _d.scale, carouselRef: carouselRef, tappableDots: true }, a11yProps)));
        }, [activeSlide, carouselRef, props.contentSource, props.showPagination]);
        var onLayout = function (event) {
            var _a;
            var viewHeight = event.nativeEvent.layout.height;
            var viewWidth = event.nativeEvent.layout.width;
            var itemWidth = 0;
            var itemHeight = 0;
            if (layoutSpecificStyle.slideItem) {
                var _b = layoutSpecificStyle.slideItem, slideItemWidth = _b.width, slideItemHeight = _b.height;
                if (typeof slideItemWidth === "string" && slideItemWidth.includes("%")) {
                    var percentage = +slideItemWidth.replace("%", "");
                    itemWidth = (viewWidth * percentage) / 100;
                }
                else {
                    itemWidth = Number(slideItemWidth);
                }
                if (typeof slideItemHeight === "string" && slideItemHeight.includes("%")) {
                    var percentage = +slideItemHeight.replace("%", "");
                    itemHeight = (viewWidth * percentage) / 100;
                }
                else {
                    itemHeight = Number(slideItemHeight);
                }
                if (((_a = styles.container) === null || _a === void 0 ? void 0 : _a.height) === undefined && itemHeight > 0) {
                    viewHeight = itemHeight;
                }
            }
            setSliderDimensions({
                slider: { width: viewWidth, height: viewHeight },
                slide: { width: itemWidth, height: itemHeight }
            });
        };
        return (react_1.createElement(react_native_1.View, { style: styles.container, onLayout: onLayout }, loading ? (react_1.createElement(react_native_1.ActivityIndicator, { color: layoutSpecificStyle.indicator.color, size: "large" })) : (sliderDimensions.slide.width > 0 &&
            sliderDimensions.slider.width > 0 &&
            props.contentSource &&
            props.contentSource.items &&
            ((_a = props.contentSource.items) === null || _a === void 0 ? void 0 : _a.length) > 0 && (react_1.createElement(react_1.Fragment, null,
            react_1.createElement(react_native_snap_carousel_1.default, { testID: props.name, activeSlideAlignment: props.activeSlideAlignment, layout: "default", firstItem: 0, useScrollView: true, enableSnap: true, data: props.contentSource.items, renderItem: renderItem, sliderWidth: sliderDimensions.slider.width, sliderHeight: sliderDimensions.slider.height, itemWidth: sliderDimensions.slide.width, itemHeight: sliderDimensions.slide.height, inactiveSlideScale: (_b = layoutSpecificStyle.inactiveSlideItem) === null || _b === void 0 ? void 0 : _b.scale, inactiveSlideOpacity: (_c = layoutSpecificStyle.inactiveSlideItem) === null || _c === void 0 ? void 0 : _c.opacity, onSnapToItem: onSnap, ref: function (r) { return setCarouselRef(r); } }),
            renderPagination())))));
    };
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),

/***/ "../../../packages-native/carousel/src/ui/styles.ts":
/*!***********************************************************************************************************!*\
  !*** /Users/diego.antonelli/Desktop/projects/widgets-resources/packages-native/carousel/src/ui/styles.ts ***!
  \***********************************************************************************************************/
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
!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var sharedStyles = {
        pagination: {
            container: {
                paddingHorizontal: 0,
                paddingVertical: 0
            },
            dotStyle: {
                marginHorizontal: 0
            },
            inactiveDotStyle: {
                marginHorizontal: 0
            },
            dotContainerStyle: {
                marginHorizontal: 0
            }
        },
        indicator: {
            color: "blue"
        }
    };
    exports.defaultCarouselStyle = {
        container: {
            width: "100%"
        },
        cardLayout: __assign(__assign({}, sharedStyles), { slideItem: {
                width: "70%",
                height: "100%"
            } }),
        fullWidthLayout: __assign(__assign({}, sharedStyles), { slideItem: {
                width: "100%",
                height: "100%"
            }, inactiveSlideItem: {
                opacity: 1,
                scale: 1
            } })
    };
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


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
//# sourceMappingURL=Carousel.js.map