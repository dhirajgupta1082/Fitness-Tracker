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
/******/ 	return __webpack_require__(__webpack_require__.s = "../../../packages-native/rating/src/Rating.tsx");
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

/***/ "../../../node_modules/lodash/_DataView.js":
/*!**************************************************************************************************!*\
  !*** /Users/diego.antonelli/Desktop/projects/widgets-resources/node_modules/lodash/_DataView.js ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var getNative = __webpack_require__(/*! ./_getNative */ "../../../node_modules/lodash/_getNative.js"),
    root = __webpack_require__(/*! ./_root */ "../../../node_modules/lodash/_root.js");
/* Built-in method references that are verified to be native. */


var DataView = getNative(root, 'DataView');
module.exports = DataView;

/***/ }),

/***/ "../../../node_modules/lodash/_Hash.js":
/*!**********************************************************************************************!*\
  !*** /Users/diego.antonelli/Desktop/projects/widgets-resources/node_modules/lodash/_Hash.js ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var hashClear = __webpack_require__(/*! ./_hashClear */ "../../../node_modules/lodash/_hashClear.js"),
    hashDelete = __webpack_require__(/*! ./_hashDelete */ "../../../node_modules/lodash/_hashDelete.js"),
    hashGet = __webpack_require__(/*! ./_hashGet */ "../../../node_modules/lodash/_hashGet.js"),
    hashHas = __webpack_require__(/*! ./_hashHas */ "../../../node_modules/lodash/_hashHas.js"),
    hashSet = __webpack_require__(/*! ./_hashSet */ "../../../node_modules/lodash/_hashSet.js");
/**
 * Creates a hash object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */


function Hash(entries) {
  var index = -1,
      length = entries == null ? 0 : entries.length;
  this.clear();

  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
} // Add methods to `Hash`.


Hash.prototype.clear = hashClear;
Hash.prototype['delete'] = hashDelete;
Hash.prototype.get = hashGet;
Hash.prototype.has = hashHas;
Hash.prototype.set = hashSet;
module.exports = Hash;

/***/ }),

/***/ "../../../node_modules/lodash/_ListCache.js":
/*!***************************************************************************************************!*\
  !*** /Users/diego.antonelli/Desktop/projects/widgets-resources/node_modules/lodash/_ListCache.js ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var listCacheClear = __webpack_require__(/*! ./_listCacheClear */ "../../../node_modules/lodash/_listCacheClear.js"),
    listCacheDelete = __webpack_require__(/*! ./_listCacheDelete */ "../../../node_modules/lodash/_listCacheDelete.js"),
    listCacheGet = __webpack_require__(/*! ./_listCacheGet */ "../../../node_modules/lodash/_listCacheGet.js"),
    listCacheHas = __webpack_require__(/*! ./_listCacheHas */ "../../../node_modules/lodash/_listCacheHas.js"),
    listCacheSet = __webpack_require__(/*! ./_listCacheSet */ "../../../node_modules/lodash/_listCacheSet.js");
/**
 * Creates an list cache object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */


function ListCache(entries) {
  var index = -1,
      length = entries == null ? 0 : entries.length;
  this.clear();

  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
} // Add methods to `ListCache`.


ListCache.prototype.clear = listCacheClear;
ListCache.prototype['delete'] = listCacheDelete;
ListCache.prototype.get = listCacheGet;
ListCache.prototype.has = listCacheHas;
ListCache.prototype.set = listCacheSet;
module.exports = ListCache;

/***/ }),

/***/ "../../../node_modules/lodash/_Map.js":
/*!*********************************************************************************************!*\
  !*** /Users/diego.antonelli/Desktop/projects/widgets-resources/node_modules/lodash/_Map.js ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var getNative = __webpack_require__(/*! ./_getNative */ "../../../node_modules/lodash/_getNative.js"),
    root = __webpack_require__(/*! ./_root */ "../../../node_modules/lodash/_root.js");
/* Built-in method references that are verified to be native. */


var Map = getNative(root, 'Map');
module.exports = Map;

/***/ }),

/***/ "../../../node_modules/lodash/_MapCache.js":
/*!**************************************************************************************************!*\
  !*** /Users/diego.antonelli/Desktop/projects/widgets-resources/node_modules/lodash/_MapCache.js ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var mapCacheClear = __webpack_require__(/*! ./_mapCacheClear */ "../../../node_modules/lodash/_mapCacheClear.js"),
    mapCacheDelete = __webpack_require__(/*! ./_mapCacheDelete */ "../../../node_modules/lodash/_mapCacheDelete.js"),
    mapCacheGet = __webpack_require__(/*! ./_mapCacheGet */ "../../../node_modules/lodash/_mapCacheGet.js"),
    mapCacheHas = __webpack_require__(/*! ./_mapCacheHas */ "../../../node_modules/lodash/_mapCacheHas.js"),
    mapCacheSet = __webpack_require__(/*! ./_mapCacheSet */ "../../../node_modules/lodash/_mapCacheSet.js");
/**
 * Creates a map cache object to store key-value pairs.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */


function MapCache(entries) {
  var index = -1,
      length = entries == null ? 0 : entries.length;
  this.clear();

  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
} // Add methods to `MapCache`.


MapCache.prototype.clear = mapCacheClear;
MapCache.prototype['delete'] = mapCacheDelete;
MapCache.prototype.get = mapCacheGet;
MapCache.prototype.has = mapCacheHas;
MapCache.prototype.set = mapCacheSet;
module.exports = MapCache;

/***/ }),

/***/ "../../../node_modules/lodash/_Promise.js":
/*!*************************************************************************************************!*\
  !*** /Users/diego.antonelli/Desktop/projects/widgets-resources/node_modules/lodash/_Promise.js ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var getNative = __webpack_require__(/*! ./_getNative */ "../../../node_modules/lodash/_getNative.js"),
    root = __webpack_require__(/*! ./_root */ "../../../node_modules/lodash/_root.js");
/* Built-in method references that are verified to be native. */


var Promise = getNative(root, 'Promise');
module.exports = Promise;

/***/ }),

/***/ "../../../node_modules/lodash/_Set.js":
/*!*********************************************************************************************!*\
  !*** /Users/diego.antonelli/Desktop/projects/widgets-resources/node_modules/lodash/_Set.js ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var getNative = __webpack_require__(/*! ./_getNative */ "../../../node_modules/lodash/_getNative.js"),
    root = __webpack_require__(/*! ./_root */ "../../../node_modules/lodash/_root.js");
/* Built-in method references that are verified to be native. */


var Set = getNative(root, 'Set');
module.exports = Set;

/***/ }),

/***/ "../../../node_modules/lodash/_SetCache.js":
/*!**************************************************************************************************!*\
  !*** /Users/diego.antonelli/Desktop/projects/widgets-resources/node_modules/lodash/_SetCache.js ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var MapCache = __webpack_require__(/*! ./_MapCache */ "../../../node_modules/lodash/_MapCache.js"),
    setCacheAdd = __webpack_require__(/*! ./_setCacheAdd */ "../../../node_modules/lodash/_setCacheAdd.js"),
    setCacheHas = __webpack_require__(/*! ./_setCacheHas */ "../../../node_modules/lodash/_setCacheHas.js");
/**
 *
 * Creates an array cache object to store unique values.
 *
 * @private
 * @constructor
 * @param {Array} [values] The values to cache.
 */


function SetCache(values) {
  var index = -1,
      length = values == null ? 0 : values.length;
  this.__data__ = new MapCache();

  while (++index < length) {
    this.add(values[index]);
  }
} // Add methods to `SetCache`.


SetCache.prototype.add = SetCache.prototype.push = setCacheAdd;
SetCache.prototype.has = setCacheHas;
module.exports = SetCache;

/***/ }),

/***/ "../../../node_modules/lodash/_Stack.js":
/*!***********************************************************************************************!*\
  !*** /Users/diego.antonelli/Desktop/projects/widgets-resources/node_modules/lodash/_Stack.js ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var ListCache = __webpack_require__(/*! ./_ListCache */ "../../../node_modules/lodash/_ListCache.js"),
    stackClear = __webpack_require__(/*! ./_stackClear */ "../../../node_modules/lodash/_stackClear.js"),
    stackDelete = __webpack_require__(/*! ./_stackDelete */ "../../../node_modules/lodash/_stackDelete.js"),
    stackGet = __webpack_require__(/*! ./_stackGet */ "../../../node_modules/lodash/_stackGet.js"),
    stackHas = __webpack_require__(/*! ./_stackHas */ "../../../node_modules/lodash/_stackHas.js"),
    stackSet = __webpack_require__(/*! ./_stackSet */ "../../../node_modules/lodash/_stackSet.js");
/**
 * Creates a stack cache object to store key-value pairs.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */


function Stack(entries) {
  var data = this.__data__ = new ListCache(entries);
  this.size = data.size;
} // Add methods to `Stack`.


Stack.prototype.clear = stackClear;
Stack.prototype['delete'] = stackDelete;
Stack.prototype.get = stackGet;
Stack.prototype.has = stackHas;
Stack.prototype.set = stackSet;
module.exports = Stack;

/***/ }),

/***/ "../../../node_modules/lodash/_Symbol.js":
/*!************************************************************************************************!*\
  !*** /Users/diego.antonelli/Desktop/projects/widgets-resources/node_modules/lodash/_Symbol.js ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var root = __webpack_require__(/*! ./_root */ "../../../node_modules/lodash/_root.js");
/** Built-in value references. */


var _Symbol = root.Symbol;
module.exports = _Symbol;

/***/ }),

/***/ "../../../node_modules/lodash/_Uint8Array.js":
/*!****************************************************************************************************!*\
  !*** /Users/diego.antonelli/Desktop/projects/widgets-resources/node_modules/lodash/_Uint8Array.js ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var root = __webpack_require__(/*! ./_root */ "../../../node_modules/lodash/_root.js");
/** Built-in value references. */


var Uint8Array = root.Uint8Array;
module.exports = Uint8Array;

/***/ }),

/***/ "../../../node_modules/lodash/_WeakMap.js":
/*!*************************************************************************************************!*\
  !*** /Users/diego.antonelli/Desktop/projects/widgets-resources/node_modules/lodash/_WeakMap.js ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var getNative = __webpack_require__(/*! ./_getNative */ "../../../node_modules/lodash/_getNative.js"),
    root = __webpack_require__(/*! ./_root */ "../../../node_modules/lodash/_root.js");
/* Built-in method references that are verified to be native. */


var WeakMap = getNative(root, 'WeakMap');
module.exports = WeakMap;

/***/ }),

/***/ "../../../node_modules/lodash/_apply.js":
/*!***********************************************************************************************!*\
  !*** /Users/diego.antonelli/Desktop/projects/widgets-resources/node_modules/lodash/_apply.js ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * A faster alternative to `Function#apply`, this function invokes `func`
 * with the `this` binding of `thisArg` and the arguments of `args`.
 *
 * @private
 * @param {Function} func The function to invoke.
 * @param {*} thisArg The `this` binding of `func`.
 * @param {Array} args The arguments to invoke `func` with.
 * @returns {*} Returns the result of `func`.
 */
function apply(func, thisArg, args) {
  switch (args.length) {
    case 0:
      return func.call(thisArg);

    case 1:
      return func.call(thisArg, args[0]);

    case 2:
      return func.call(thisArg, args[0], args[1]);

    case 3:
      return func.call(thisArg, args[0], args[1], args[2]);
  }

  return func.apply(thisArg, args);
}

module.exports = apply;

/***/ }),

/***/ "../../../node_modules/lodash/_arrayEach.js":
/*!***************************************************************************************************!*\
  !*** /Users/diego.antonelli/Desktop/projects/widgets-resources/node_modules/lodash/_arrayEach.js ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * A specialized version of `_.forEach` for arrays without support for
 * iteratee shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns `array`.
 */
function arrayEach(array, iteratee) {
  var index = -1,
      length = array == null ? 0 : array.length;

  while (++index < length) {
    if (iteratee(array[index], index, array) === false) {
      break;
    }
  }

  return array;
}

module.exports = arrayEach;

/***/ }),

/***/ "../../../node_modules/lodash/_arrayFilter.js":
/*!*****************************************************************************************************!*\
  !*** /Users/diego.antonelli/Desktop/projects/widgets-resources/node_modules/lodash/_arrayFilter.js ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * A specialized version of `_.filter` for arrays without support for
 * iteratee shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} predicate The function invoked per iteration.
 * @returns {Array} Returns the new filtered array.
 */
function arrayFilter(array, predicate) {
  var index = -1,
      length = array == null ? 0 : array.length,
      resIndex = 0,
      result = [];

  while (++index < length) {
    var value = array[index];

    if (predicate(value, index, array)) {
      result[resIndex++] = value;
    }
  }

  return result;
}

module.exports = arrayFilter;

/***/ }),

/***/ "../../../node_modules/lodash/_arrayLikeKeys.js":
/*!*******************************************************************************************************!*\
  !*** /Users/diego.antonelli/Desktop/projects/widgets-resources/node_modules/lodash/_arrayLikeKeys.js ***!
  \*******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var baseTimes = __webpack_require__(/*! ./_baseTimes */ "../../../node_modules/lodash/_baseTimes.js"),
    isArguments = __webpack_require__(/*! ./isArguments */ "../../../node_modules/lodash/isArguments.js"),
    isArray = __webpack_require__(/*! ./isArray */ "../../../node_modules/lodash/isArray.js"),
    isBuffer = __webpack_require__(/*! ./isBuffer */ "../../../node_modules/lodash/isBuffer.js"),
    isIndex = __webpack_require__(/*! ./_isIndex */ "../../../node_modules/lodash/_isIndex.js"),
    isTypedArray = __webpack_require__(/*! ./isTypedArray */ "../../../node_modules/lodash/isTypedArray.js");
/** Used for built-in method references. */


var objectProto = Object.prototype;
/** Used to check objects for own properties. */

var hasOwnProperty = objectProto.hasOwnProperty;
/**
 * Creates an array of the enumerable property names of the array-like `value`.
 *
 * @private
 * @param {*} value The value to query.
 * @param {boolean} inherited Specify returning inherited property names.
 * @returns {Array} Returns the array of property names.
 */

function arrayLikeKeys(value, inherited) {
  var isArr = isArray(value),
      isArg = !isArr && isArguments(value),
      isBuff = !isArr && !isArg && isBuffer(value),
      isType = !isArr && !isArg && !isBuff && isTypedArray(value),
      skipIndexes = isArr || isArg || isBuff || isType,
      result = skipIndexes ? baseTimes(value.length, String) : [],
      length = result.length;

  for (var key in value) {
    if ((inherited || hasOwnProperty.call(value, key)) && !(skipIndexes && ( // Safari 9 has enumerable `arguments.length` in strict mode.
    key == 'length' || // Node.js 0.10 has enumerable non-index properties on buffers.
    isBuff && (key == 'offset' || key == 'parent') || // PhantomJS 2 has enumerable non-index properties on typed arrays.
    isType && (key == 'buffer' || key == 'byteLength' || key == 'byteOffset') || // Skip index properties.
    isIndex(key, length)))) {
      result.push(key);
    }
  }

  return result;
}

module.exports = arrayLikeKeys;

/***/ }),

/***/ "../../../node_modules/lodash/_arrayMap.js":
/*!**************************************************************************************************!*\
  !*** /Users/diego.antonelli/Desktop/projects/widgets-resources/node_modules/lodash/_arrayMap.js ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * A specialized version of `_.map` for arrays without support for iteratee
 * shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns the new mapped array.
 */
function arrayMap(array, iteratee) {
  var index = -1,
      length = array == null ? 0 : array.length,
      result = Array(length);

  while (++index < length) {
    result[index] = iteratee(array[index], index, array);
  }

  return result;
}

module.exports = arrayMap;

/***/ }),

/***/ "../../../node_modules/lodash/_arrayPush.js":
/*!***************************************************************************************************!*\
  !*** /Users/diego.antonelli/Desktop/projects/widgets-resources/node_modules/lodash/_arrayPush.js ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Appends the elements of `values` to `array`.
 *
 * @private
 * @param {Array} array The array to modify.
 * @param {Array} values The values to append.
 * @returns {Array} Returns `array`.
 */
function arrayPush(array, values) {
  var index = -1,
      length = values.length,
      offset = array.length;

  while (++index < length) {
    array[offset + index] = values[index];
  }

  return array;
}

module.exports = arrayPush;

/***/ }),

/***/ "../../../node_modules/lodash/_arraySome.js":
/*!***************************************************************************************************!*\
  !*** /Users/diego.antonelli/Desktop/projects/widgets-resources/node_modules/lodash/_arraySome.js ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * A specialized version of `_.some` for arrays without support for iteratee
 * shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} predicate The function invoked per iteration.
 * @returns {boolean} Returns `true` if any element passes the predicate check,
 *  else `false`.
 */
function arraySome(array, predicate) {
  var index = -1,
      length = array == null ? 0 : array.length;

  while (++index < length) {
    if (predicate(array[index], index, array)) {
      return true;
    }
  }

  return false;
}

module.exports = arraySome;

/***/ }),

/***/ "../../../node_modules/lodash/_assignValue.js":
/*!*****************************************************************************************************!*\
  !*** /Users/diego.antonelli/Desktop/projects/widgets-resources/node_modules/lodash/_assignValue.js ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var baseAssignValue = __webpack_require__(/*! ./_baseAssignValue */ "../../../node_modules/lodash/_baseAssignValue.js"),
    eq = __webpack_require__(/*! ./eq */ "../../../node_modules/lodash/eq.js");
/** Used for built-in method references. */


var objectProto = Object.prototype;
/** Used to check objects for own properties. */

var hasOwnProperty = objectProto.hasOwnProperty;
/**
 * Assigns `value` to `key` of `object` if the existing value is not equivalent
 * using [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * for equality comparisons.
 *
 * @private
 * @param {Object} object The object to modify.
 * @param {string} key The key of the property to assign.
 * @param {*} value The value to assign.
 */

function assignValue(object, key, value) {
  var objValue = object[key];

  if (!(hasOwnProperty.call(object, key) && eq(objValue, value)) || value === undefined && !(key in object)) {
    baseAssignValue(object, key, value);
  }
}

module.exports = assignValue;

/***/ }),

/***/ "../../../node_modules/lodash/_assocIndexOf.js":
/*!******************************************************************************************************!*\
  !*** /Users/diego.antonelli/Desktop/projects/widgets-resources/node_modules/lodash/_assocIndexOf.js ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var eq = __webpack_require__(/*! ./eq */ "../../../node_modules/lodash/eq.js");
/**
 * Gets the index at which the `key` is found in `array` of key-value pairs.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {*} key The key to search for.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */


function assocIndexOf(array, key) {
  var length = array.length;

  while (length--) {
    if (eq(array[length][0], key)) {
      return length;
    }
  }

  return -1;
}

module.exports = assocIndexOf;

/***/ }),

/***/ "../../../node_modules/lodash/_baseAssign.js":
/*!****************************************************************************************************!*\
  !*** /Users/diego.antonelli/Desktop/projects/widgets-resources/node_modules/lodash/_baseAssign.js ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var copyObject = __webpack_require__(/*! ./_copyObject */ "../../../node_modules/lodash/_copyObject.js"),
    keys = __webpack_require__(/*! ./keys */ "../../../node_modules/lodash/keys.js");
/**
 * The base implementation of `_.assign` without support for multiple sources
 * or `customizer` functions.
 *
 * @private
 * @param {Object} object The destination object.
 * @param {Object} source The source object.
 * @returns {Object} Returns `object`.
 */


function baseAssign(object, source) {
  return object && copyObject(source, keys(source), object);
}

module.exports = baseAssign;

/***/ }),

/***/ "../../../node_modules/lodash/_baseAssignIn.js":
/*!******************************************************************************************************!*\
  !*** /Users/diego.antonelli/Desktop/projects/widgets-resources/node_modules/lodash/_baseAssignIn.js ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var copyObject = __webpack_require__(/*! ./_copyObject */ "../../../node_modules/lodash/_copyObject.js"),
    keysIn = __webpack_require__(/*! ./keysIn */ "../../../node_modules/lodash/keysIn.js");
/**
 * The base implementation of `_.assignIn` without support for multiple sources
 * or `customizer` functions.
 *
 * @private
 * @param {Object} object The destination object.
 * @param {Object} source The source object.
 * @returns {Object} Returns `object`.
 */


function baseAssignIn(object, source) {
  return object && copyObject(source, keysIn(source), object);
}

module.exports = baseAssignIn;

/***/ }),

/***/ "../../../node_modules/lodash/_baseAssignValue.js":
/*!*********************************************************************************************************!*\
  !*** /Users/diego.antonelli/Desktop/projects/widgets-resources/node_modules/lodash/_baseAssignValue.js ***!
  \*********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var defineProperty = __webpack_require__(/*! ./_defineProperty */ "../../../node_modules/lodash/_defineProperty.js");
/**
 * The base implementation of `assignValue` and `assignMergeValue` without
 * value checks.
 *
 * @private
 * @param {Object} object The object to modify.
 * @param {string} key The key of the property to assign.
 * @param {*} value The value to assign.
 */


function baseAssignValue(object, key, value) {
  if (key == '__proto__' && defineProperty) {
    defineProperty(object, key, {
      'configurable': true,
      'enumerable': true,
      'value': value,
      'writable': true
    });
  } else {
    object[key] = value;
  }
}

module.exports = baseAssignValue;

/***/ }),

/***/ "../../../node_modules/lodash/_baseClone.js":
/*!***************************************************************************************************!*\
  !*** /Users/diego.antonelli/Desktop/projects/widgets-resources/node_modules/lodash/_baseClone.js ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var Stack = __webpack_require__(/*! ./_Stack */ "../../../node_modules/lodash/_Stack.js"),
    arrayEach = __webpack_require__(/*! ./_arrayEach */ "../../../node_modules/lodash/_arrayEach.js"),
    assignValue = __webpack_require__(/*! ./_assignValue */ "../../../node_modules/lodash/_assignValue.js"),
    baseAssign = __webpack_require__(/*! ./_baseAssign */ "../../../node_modules/lodash/_baseAssign.js"),
    baseAssignIn = __webpack_require__(/*! ./_baseAssignIn */ "../../../node_modules/lodash/_baseAssignIn.js"),
    cloneBuffer = __webpack_require__(/*! ./_cloneBuffer */ "../../../node_modules/lodash/_cloneBuffer.js"),
    copyArray = __webpack_require__(/*! ./_copyArray */ "../../../node_modules/lodash/_copyArray.js"),
    copySymbols = __webpack_require__(/*! ./_copySymbols */ "../../../node_modules/lodash/_copySymbols.js"),
    copySymbolsIn = __webpack_require__(/*! ./_copySymbolsIn */ "../../../node_modules/lodash/_copySymbolsIn.js"),
    getAllKeys = __webpack_require__(/*! ./_getAllKeys */ "../../../node_modules/lodash/_getAllKeys.js"),
    getAllKeysIn = __webpack_require__(/*! ./_getAllKeysIn */ "../../../node_modules/lodash/_getAllKeysIn.js"),
    getTag = __webpack_require__(/*! ./_getTag */ "../../../node_modules/lodash/_getTag.js"),
    initCloneArray = __webpack_require__(/*! ./_initCloneArray */ "../../../node_modules/lodash/_initCloneArray.js"),
    initCloneByTag = __webpack_require__(/*! ./_initCloneByTag */ "../../../node_modules/lodash/_initCloneByTag.js"),
    initCloneObject = __webpack_require__(/*! ./_initCloneObject */ "../../../node_modules/lodash/_initCloneObject.js"),
    isArray = __webpack_require__(/*! ./isArray */ "../../../node_modules/lodash/isArray.js"),
    isBuffer = __webpack_require__(/*! ./isBuffer */ "../../../node_modules/lodash/isBuffer.js"),
    isMap = __webpack_require__(/*! ./isMap */ "../../../node_modules/lodash/isMap.js"),
    isObject = __webpack_require__(/*! ./isObject */ "../../../node_modules/lodash/isObject.js"),
    isSet = __webpack_require__(/*! ./isSet */ "../../../node_modules/lodash/isSet.js"),
    keys = __webpack_require__(/*! ./keys */ "../../../node_modules/lodash/keys.js");
/** Used to compose bitmasks for cloning. */


var CLONE_DEEP_FLAG = 1,
    CLONE_FLAT_FLAG = 2,
    CLONE_SYMBOLS_FLAG = 4;
/** `Object#toString` result references. */

var argsTag = '[object Arguments]',
    arrayTag = '[object Array]',
    boolTag = '[object Boolean]',
    dateTag = '[object Date]',
    errorTag = '[object Error]',
    funcTag = '[object Function]',
    genTag = '[object GeneratorFunction]',
    mapTag = '[object Map]',
    numberTag = '[object Number]',
    objectTag = '[object Object]',
    regexpTag = '[object RegExp]',
    setTag = '[object Set]',
    stringTag = '[object String]',
    symbolTag = '[object Symbol]',
    weakMapTag = '[object WeakMap]';
var arrayBufferTag = '[object ArrayBuffer]',
    dataViewTag = '[object DataView]',
    float32Tag = '[object Float32Array]',
    float64Tag = '[object Float64Array]',
    int8Tag = '[object Int8Array]',
    int16Tag = '[object Int16Array]',
    int32Tag = '[object Int32Array]',
    uint8Tag = '[object Uint8Array]',
    uint8ClampedTag = '[object Uint8ClampedArray]',
    uint16Tag = '[object Uint16Array]',
    uint32Tag = '[object Uint32Array]';
/** Used to identify `toStringTag` values supported by `_.clone`. */

var cloneableTags = {};
cloneableTags[argsTag] = cloneableTags[arrayTag] = cloneableTags[arrayBufferTag] = cloneableTags[dataViewTag] = cloneableTags[boolTag] = cloneableTags[dateTag] = cloneableTags[float32Tag] = cloneableTags[float64Tag] = cloneableTags[int8Tag] = cloneableTags[int16Tag] = cloneableTags[int32Tag] = cloneableTags[mapTag] = cloneableTags[numberTag] = cloneableTags[objectTag] = cloneableTags[regexpTag] = cloneableTags[setTag] = cloneableTags[stringTag] = cloneableTags[symbolTag] = cloneableTags[uint8Tag] = cloneableTags[uint8ClampedTag] = cloneableTags[uint16Tag] = cloneableTags[uint32Tag] = true;
cloneableTags[errorTag] = cloneableTags[funcTag] = cloneableTags[weakMapTag] = false;
/**
 * The base implementation of `_.clone` and `_.cloneDeep` which tracks
 * traversed objects.
 *
 * @private
 * @param {*} value The value to clone.
 * @param {boolean} bitmask The bitmask flags.
 *  1 - Deep clone
 *  2 - Flatten inherited properties
 *  4 - Clone symbols
 * @param {Function} [customizer] The function to customize cloning.
 * @param {string} [key] The key of `value`.
 * @param {Object} [object] The parent object of `value`.
 * @param {Object} [stack] Tracks traversed objects and their clone counterparts.
 * @returns {*} Returns the cloned value.
 */

function baseClone(value, bitmask, customizer, key, object, stack) {
  var result,
      isDeep = bitmask & CLONE_DEEP_FLAG,
      isFlat = bitmask & CLONE_FLAT_FLAG,
      isFull = bitmask & CLONE_SYMBOLS_FLAG;

  if (customizer) {
    result = object ? customizer(value, key, object, stack) : customizer(value);
  }

  if (result !== undefined) {
    return result;
  }

  if (!isObject(value)) {
    return value;
  }

  var isArr = isArray(value);

  if (isArr) {
    result = initCloneArray(value);

    if (!isDeep) {
      return copyArray(value, result);
    }
  } else {
    var tag = getTag(value),
        isFunc = tag == funcTag || tag == genTag;

    if (isBuffer(value)) {
      return cloneBuffer(value, isDeep);
    }

    if (tag == objectTag || tag == argsTag || isFunc && !object) {
      result = isFlat || isFunc ? {} : initCloneObject(value);

      if (!isDeep) {
        return isFlat ? copySymbolsIn(value, baseAssignIn(result, value)) : copySymbols(value, baseAssign(result, value));
      }
    } else {
      if (!cloneableTags[tag]) {
        return object ? value : {};
      }

      result = initCloneByTag(value, tag, isDeep);
    }
  } // Check for circular references and return its corresponding clone.


  stack || (stack = new Stack());
  var stacked = stack.get(value);

  if (stacked) {
    return stacked;
  }

  stack.set(value, result);

  if (isSet(value)) {
    value.forEach(function (subValue) {
      result.add(baseClone(subValue, bitmask, customizer, subValue, value, stack));
    });
  } else if (isMap(value)) {
    value.forEach(function (subValue, key) {
      result.set(key, baseClone(subValue, bitmask, customizer, key, value, stack));
    });
  }

  var keysFunc = isFull ? isFlat ? getAllKeysIn : getAllKeys : isFlat ? keysIn : keys;
  var props = isArr ? undefined : keysFunc(value);
  arrayEach(props || value, function (subValue, key) {
    if (props) {
      key = subValue;
      subValue = value[key];
    } // Recursively populate clone (susceptible to call stack limits).


    assignValue(result, key, baseClone(subValue, bitmask, customizer, key, value, stack));
  });
  return result;
}

module.exports = baseClone;

/***/ }),

/***/ "../../../node_modules/lodash/_baseCreate.js":
/*!****************************************************************************************************!*\
  !*** /Users/diego.antonelli/Desktop/projects/widgets-resources/node_modules/lodash/_baseCreate.js ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(/*! ./isObject */ "../../../node_modules/lodash/isObject.js");
/** Built-in value references. */


var objectCreate = Object.create;
/**
 * The base implementation of `_.create` without support for assigning
 * properties to the created object.
 *
 * @private
 * @param {Object} proto The object to inherit from.
 * @returns {Object} Returns the new object.
 */

var baseCreate = function () {
  function object() {}

  return function (proto) {
    if (!isObject(proto)) {
      return {};
    }

    if (objectCreate) {
      return objectCreate(proto);
    }

    object.prototype = proto;
    var result = new object();
    object.prototype = undefined;
    return result;
  };
}();

module.exports = baseCreate;

/***/ }),

/***/ "../../../node_modules/lodash/_baseFlatten.js":
/*!*****************************************************************************************************!*\
  !*** /Users/diego.antonelli/Desktop/projects/widgets-resources/node_modules/lodash/_baseFlatten.js ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var arrayPush = __webpack_require__(/*! ./_arrayPush */ "../../../node_modules/lodash/_arrayPush.js"),
    isFlattenable = __webpack_require__(/*! ./_isFlattenable */ "../../../node_modules/lodash/_isFlattenable.js");
/**
 * The base implementation of `_.flatten` with support for restricting flattening.
 *
 * @private
 * @param {Array} array The array to flatten.
 * @param {number} depth The maximum recursion depth.
 * @param {boolean} [predicate=isFlattenable] The function invoked per iteration.
 * @param {boolean} [isStrict] Restrict to values that pass `predicate` checks.
 * @param {Array} [result=[]] The initial result value.
 * @returns {Array} Returns the new flattened array.
 */


function baseFlatten(array, depth, predicate, isStrict, result) {
  var index = -1,
      length = array.length;
  predicate || (predicate = isFlattenable);
  result || (result = []);

  while (++index < length) {
    var value = array[index];

    if (depth > 0 && predicate(value)) {
      if (depth > 1) {
        // Recursively flatten arrays (susceptible to call stack limits).
        baseFlatten(value, depth - 1, predicate, isStrict, result);
      } else {
        arrayPush(result, value);
      }
    } else if (!isStrict) {
      result[result.length] = value;
    }
  }

  return result;
}

module.exports = baseFlatten;

/***/ }),

/***/ "../../../node_modules/lodash/_baseGet.js":
/*!*************************************************************************************************!*\
  !*** /Users/diego.antonelli/Desktop/projects/widgets-resources/node_modules/lodash/_baseGet.js ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var castPath = __webpack_require__(/*! ./_castPath */ "../../../node_modules/lodash/_castPath.js"),
    toKey = __webpack_require__(/*! ./_toKey */ "../../../node_modules/lodash/_toKey.js");
/**
 * The base implementation of `_.get` without support for default values.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {Array|string} path The path of the property to get.
 * @returns {*} Returns the resolved value.
 */


function baseGet(object, path) {
  path = castPath(path, object);
  var index = 0,
      length = path.length;

  while (object != null && index < length) {
    object = object[toKey(path[index++])];
  }

  return index && index == length ? object : undefined;
}

module.exports = baseGet;

/***/ }),

/***/ "../../../node_modules/lodash/_baseGetAllKeys.js":
/*!********************************************************************************************************!*\
  !*** /Users/diego.antonelli/Desktop/projects/widgets-resources/node_modules/lodash/_baseGetAllKeys.js ***!
  \********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var arrayPush = __webpack_require__(/*! ./_arrayPush */ "../../../node_modules/lodash/_arrayPush.js"),
    isArray = __webpack_require__(/*! ./isArray */ "../../../node_modules/lodash/isArray.js");
/**
 * The base implementation of `getAllKeys` and `getAllKeysIn` which uses
 * `keysFunc` and `symbolsFunc` to get the enumerable property names and
 * symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {Function} keysFunc The function to get the keys of `object`.
 * @param {Function} symbolsFunc The function to get the symbols of `object`.
 * @returns {Array} Returns the array of property names and symbols.
 */


function baseGetAllKeys(object, keysFunc, symbolsFunc) {
  var result = keysFunc(object);
  return isArray(object) ? result : arrayPush(result, symbolsFunc(object));
}

module.exports = baseGetAllKeys;

/***/ }),

/***/ "../../../node_modules/lodash/_baseGetTag.js":
/*!****************************************************************************************************!*\
  !*** /Users/diego.antonelli/Desktop/projects/widgets-resources/node_modules/lodash/_baseGetTag.js ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _Symbol = __webpack_require__(/*! ./_Symbol */ "../../../node_modules/lodash/_Symbol.js"),
    getRawTag = __webpack_require__(/*! ./_getRawTag */ "../../../node_modules/lodash/_getRawTag.js"),
    objectToString = __webpack_require__(/*! ./_objectToString */ "../../../node_modules/lodash/_objectToString.js");
/** `Object#toString` result references. */


var nullTag = '[object Null]',
    undefinedTag = '[object Undefined]';
/** Built-in value references. */

var symToStringTag = _Symbol ? _Symbol.toStringTag : undefined;
/**
 * The base implementation of `getTag` without fallbacks for buggy environments.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */

function baseGetTag(value) {
  if (value == null) {
    return value === undefined ? undefinedTag : nullTag;
  }

  return symToStringTag && symToStringTag in Object(value) ? getRawTag(value) : objectToString(value);
}

module.exports = baseGetTag;

/***/ }),

/***/ "../../../node_modules/lodash/_baseHasIn.js":
/*!***************************************************************************************************!*\
  !*** /Users/diego.antonelli/Desktop/projects/widgets-resources/node_modules/lodash/_baseHasIn.js ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * The base implementation of `_.hasIn` without support for deep paths.
 *
 * @private
 * @param {Object} [object] The object to query.
 * @param {Array|string} key The key to check.
 * @returns {boolean} Returns `true` if `key` exists, else `false`.
 */
function baseHasIn(object, key) {
  return object != null && key in Object(object);
}

module.exports = baseHasIn;

/***/ }),

/***/ "../../../node_modules/lodash/_baseIsArguments.js":
/*!*********************************************************************************************************!*\
  !*** /Users/diego.antonelli/Desktop/projects/widgets-resources/node_modules/lodash/_baseIsArguments.js ***!
  \*********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var baseGetTag = __webpack_require__(/*! ./_baseGetTag */ "../../../node_modules/lodash/_baseGetTag.js"),
    isObjectLike = __webpack_require__(/*! ./isObjectLike */ "../../../node_modules/lodash/isObjectLike.js");
/** `Object#toString` result references. */


var argsTag = '[object Arguments]';
/**
 * The base implementation of `_.isArguments`.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
 */

function baseIsArguments(value) {
  return isObjectLike(value) && baseGetTag(value) == argsTag;
}

module.exports = baseIsArguments;

/***/ }),

/***/ "../../../node_modules/lodash/_baseIsEqual.js":
/*!*****************************************************************************************************!*\
  !*** /Users/diego.antonelli/Desktop/projects/widgets-resources/node_modules/lodash/_baseIsEqual.js ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var baseIsEqualDeep = __webpack_require__(/*! ./_baseIsEqualDeep */ "../../../node_modules/lodash/_baseIsEqualDeep.js"),
    isObjectLike = __webpack_require__(/*! ./isObjectLike */ "../../../node_modules/lodash/isObjectLike.js");
/**
 * The base implementation of `_.isEqual` which supports partial comparisons
 * and tracks traversed objects.
 *
 * @private
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @param {boolean} bitmask The bitmask flags.
 *  1 - Unordered comparison
 *  2 - Partial comparison
 * @param {Function} [customizer] The function to customize comparisons.
 * @param {Object} [stack] Tracks traversed `value` and `other` objects.
 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
 */


function baseIsEqual(value, other, bitmask, customizer, stack) {
  if (value === other) {
    return true;
  }

  if (value == null || other == null || !isObjectLike(value) && !isObjectLike(other)) {
    return value !== value && other !== other;
  }

  return baseIsEqualDeep(value, other, bitmask, customizer, baseIsEqual, stack);
}

module.exports = baseIsEqual;

/***/ }),

/***/ "../../../node_modules/lodash/_baseIsEqualDeep.js":
/*!*********************************************************************************************************!*\
  !*** /Users/diego.antonelli/Desktop/projects/widgets-resources/node_modules/lodash/_baseIsEqualDeep.js ***!
  \*********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var Stack = __webpack_require__(/*! ./_Stack */ "../../../node_modules/lodash/_Stack.js"),
    equalArrays = __webpack_require__(/*! ./_equalArrays */ "../../../node_modules/lodash/_equalArrays.js"),
    equalByTag = __webpack_require__(/*! ./_equalByTag */ "../../../node_modules/lodash/_equalByTag.js"),
    equalObjects = __webpack_require__(/*! ./_equalObjects */ "../../../node_modules/lodash/_equalObjects.js"),
    getTag = __webpack_require__(/*! ./_getTag */ "../../../node_modules/lodash/_getTag.js"),
    isArray = __webpack_require__(/*! ./isArray */ "../../../node_modules/lodash/isArray.js"),
    isBuffer = __webpack_require__(/*! ./isBuffer */ "../../../node_modules/lodash/isBuffer.js"),
    isTypedArray = __webpack_require__(/*! ./isTypedArray */ "../../../node_modules/lodash/isTypedArray.js");
/** Used to compose bitmasks for value comparisons. */


var COMPARE_PARTIAL_FLAG = 1;
/** `Object#toString` result references. */

var argsTag = '[object Arguments]',
    arrayTag = '[object Array]',
    objectTag = '[object Object]';
/** Used for built-in method references. */

var objectProto = Object.prototype;
/** Used to check objects for own properties. */

var hasOwnProperty = objectProto.hasOwnProperty;
/**
 * A specialized version of `baseIsEqual` for arrays and objects which performs
 * deep comparisons and tracks traversed objects enabling objects with circular
 * references to be compared.
 *
 * @private
 * @param {Object} object The object to compare.
 * @param {Object} other The other object to compare.
 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
 * @param {Function} customizer The function to customize comparisons.
 * @param {Function} equalFunc The function to determine equivalents of values.
 * @param {Object} [stack] Tracks traversed `object` and `other` objects.
 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
 */

function baseIsEqualDeep(object, other, bitmask, customizer, equalFunc, stack) {
  var objIsArr = isArray(object),
      othIsArr = isArray(other),
      objTag = objIsArr ? arrayTag : getTag(object),
      othTag = othIsArr ? arrayTag : getTag(other);
  objTag = objTag == argsTag ? objectTag : objTag;
  othTag = othTag == argsTag ? objectTag : othTag;
  var objIsObj = objTag == objectTag,
      othIsObj = othTag == objectTag,
      isSameTag = objTag == othTag;

  if (isSameTag && isBuffer(object)) {
    if (!isBuffer(other)) {
      return false;
    }

    objIsArr = true;
    objIsObj = false;
  }

  if (isSameTag && !objIsObj) {
    stack || (stack = new Stack());
    return objIsArr || isTypedArray(object) ? equalArrays(object, other, bitmask, customizer, equalFunc, stack) : equalByTag(object, other, objTag, bitmask, customizer, equalFunc, stack);
  }

  if (!(bitmask & COMPARE_PARTIAL_FLAG)) {
    var objIsWrapped = objIsObj && hasOwnProperty.call(object, '__wrapped__'),
        othIsWrapped = othIsObj && hasOwnProperty.call(other, '__wrapped__');

    if (objIsWrapped || othIsWrapped) {
      var objUnwrapped = objIsWrapped ? object.value() : object,
          othUnwrapped = othIsWrapped ? other.value() : other;
      stack || (stack = new Stack());
      return equalFunc(objUnwrapped, othUnwrapped, bitmask, customizer, stack);
    }
  }

  if (!isSameTag) {
    return false;
  }

  stack || (stack = new Stack());
  return equalObjects(object, other, bitmask, customizer, equalFunc, stack);
}

module.exports = baseIsEqualDeep;

/***/ }),

/***/ "../../../node_modules/lodash/_baseIsMap.js":
/*!***************************************************************************************************!*\
  !*** /Users/diego.antonelli/Desktop/projects/widgets-resources/node_modules/lodash/_baseIsMap.js ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var getTag = __webpack_require__(/*! ./_getTag */ "../../../node_modules/lodash/_getTag.js"),
    isObjectLike = __webpack_require__(/*! ./isObjectLike */ "../../../node_modules/lodash/isObjectLike.js");
/** `Object#toString` result references. */


var mapTag = '[object Map]';
/**
 * The base implementation of `_.isMap` without Node.js optimizations.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a map, else `false`.
 */

function baseIsMap(value) {
  return isObjectLike(value) && getTag(value) == mapTag;
}

module.exports = baseIsMap;

/***/ }),

/***/ "../../../node_modules/lodash/_baseIsNative.js":
/*!******************************************************************************************************!*\
  !*** /Users/diego.antonelli/Desktop/projects/widgets-resources/node_modules/lodash/_baseIsNative.js ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isFunction = __webpack_require__(/*! ./isFunction */ "../../../node_modules/lodash/isFunction.js"),
    isMasked = __webpack_require__(/*! ./_isMasked */ "../../../node_modules/lodash/_isMasked.js"),
    isObject = __webpack_require__(/*! ./isObject */ "../../../node_modules/lodash/isObject.js"),
    toSource = __webpack_require__(/*! ./_toSource */ "../../../node_modules/lodash/_toSource.js");
/**
 * Used to match `RegExp`
 * [syntax characters](http://ecma-international.org/ecma-262/7.0/#sec-patterns).
 */


var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;
/** Used to detect host constructors (Safari). */

var reIsHostCtor = /^\[object .+?Constructor\]$/;
/** Used for built-in method references. */

var funcProto = Function.prototype,
    objectProto = Object.prototype;
/** Used to resolve the decompiled source of functions. */

var funcToString = funcProto.toString;
/** Used to check objects for own properties. */

var hasOwnProperty = objectProto.hasOwnProperty;
/** Used to detect if a method is native. */

var reIsNative = RegExp('^' + funcToString.call(hasOwnProperty).replace(reRegExpChar, '\\$&').replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$');
/**
 * The base implementation of `_.isNative` without bad shim checks.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a native function,
 *  else `false`.
 */

function baseIsNative(value) {
  if (!isObject(value) || isMasked(value)) {
    return false;
  }

  var pattern = isFunction(value) ? reIsNative : reIsHostCtor;
  return pattern.test(toSource(value));
}

module.exports = baseIsNative;

/***/ }),

/***/ "../../../node_modules/lodash/_baseIsSet.js":
/*!***************************************************************************************************!*\
  !*** /Users/diego.antonelli/Desktop/projects/widgets-resources/node_modules/lodash/_baseIsSet.js ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var getTag = __webpack_require__(/*! ./_getTag */ "../../../node_modules/lodash/_getTag.js"),
    isObjectLike = __webpack_require__(/*! ./isObjectLike */ "../../../node_modules/lodash/isObjectLike.js");
/** `Object#toString` result references. */


var setTag = '[object Set]';
/**
 * The base implementation of `_.isSet` without Node.js optimizations.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a set, else `false`.
 */

function baseIsSet(value) {
  return isObjectLike(value) && getTag(value) == setTag;
}

module.exports = baseIsSet;

/***/ }),

/***/ "../../../node_modules/lodash/_baseIsTypedArray.js":
/*!**********************************************************************************************************!*\
  !*** /Users/diego.antonelli/Desktop/projects/widgets-resources/node_modules/lodash/_baseIsTypedArray.js ***!
  \**********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var baseGetTag = __webpack_require__(/*! ./_baseGetTag */ "../../../node_modules/lodash/_baseGetTag.js"),
    isLength = __webpack_require__(/*! ./isLength */ "../../../node_modules/lodash/isLength.js"),
    isObjectLike = __webpack_require__(/*! ./isObjectLike */ "../../../node_modules/lodash/isObjectLike.js");
/** `Object#toString` result references. */


var argsTag = '[object Arguments]',
    arrayTag = '[object Array]',
    boolTag = '[object Boolean]',
    dateTag = '[object Date]',
    errorTag = '[object Error]',
    funcTag = '[object Function]',
    mapTag = '[object Map]',
    numberTag = '[object Number]',
    objectTag = '[object Object]',
    regexpTag = '[object RegExp]',
    setTag = '[object Set]',
    stringTag = '[object String]',
    weakMapTag = '[object WeakMap]';
var arrayBufferTag = '[object ArrayBuffer]',
    dataViewTag = '[object DataView]',
    float32Tag = '[object Float32Array]',
    float64Tag = '[object Float64Array]',
    int8Tag = '[object Int8Array]',
    int16Tag = '[object Int16Array]',
    int32Tag = '[object Int32Array]',
    uint8Tag = '[object Uint8Array]',
    uint8ClampedTag = '[object Uint8ClampedArray]',
    uint16Tag = '[object Uint16Array]',
    uint32Tag = '[object Uint32Array]';
/** Used to identify `toStringTag` values of typed arrays. */

var typedArrayTags = {};
typedArrayTags[float32Tag] = typedArrayTags[float64Tag] = typedArrayTags[int8Tag] = typedArrayTags[int16Tag] = typedArrayTags[int32Tag] = typedArrayTags[uint8Tag] = typedArrayTags[uint8ClampedTag] = typedArrayTags[uint16Tag] = typedArrayTags[uint32Tag] = true;
typedArrayTags[argsTag] = typedArrayTags[arrayTag] = typedArrayTags[arrayBufferTag] = typedArrayTags[boolTag] = typedArrayTags[dataViewTag] = typedArrayTags[dateTag] = typedArrayTags[errorTag] = typedArrayTags[funcTag] = typedArrayTags[mapTag] = typedArrayTags[numberTag] = typedArrayTags[objectTag] = typedArrayTags[regexpTag] = typedArrayTags[setTag] = typedArrayTags[stringTag] = typedArrayTags[weakMapTag] = false;
/**
 * The base implementation of `_.isTypedArray` without Node.js optimizations.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
 */

function baseIsTypedArray(value) {
  return isObjectLike(value) && isLength(value.length) && !!typedArrayTags[baseGetTag(value)];
}

module.exports = baseIsTypedArray;

/***/ }),

/***/ "../../../node_modules/lodash/_baseKeys.js":
/*!**************************************************************************************************!*\
  !*** /Users/diego.antonelli/Desktop/projects/widgets-resources/node_modules/lodash/_baseKeys.js ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isPrototype = __webpack_require__(/*! ./_isPrototype */ "../../../node_modules/lodash/_isPrototype.js"),
    nativeKeys = __webpack_require__(/*! ./_nativeKeys */ "../../../node_modules/lodash/_nativeKeys.js");
/** Used for built-in method references. */


var objectProto = Object.prototype;
/** Used to check objects for own properties. */

var hasOwnProperty = objectProto.hasOwnProperty;
/**
 * The base implementation of `_.keys` which doesn't treat sparse arrays as dense.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 */

function baseKeys(object) {
  if (!isPrototype(object)) {
    return nativeKeys(object);
  }

  var result = [];

  for (var key in Object(object)) {
    if (hasOwnProperty.call(object, key) && key != 'constructor') {
      result.push(key);
    }
  }

  return result;
}

module.exports = baseKeys;

/***/ }),

/***/ "../../../node_modules/lodash/_baseKeysIn.js":
/*!****************************************************************************************************!*\
  !*** /Users/diego.antonelli/Desktop/projects/widgets-resources/node_modules/lodash/_baseKeysIn.js ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(/*! ./isObject */ "../../../node_modules/lodash/isObject.js"),
    isPrototype = __webpack_require__(/*! ./_isPrototype */ "../../../node_modules/lodash/_isPrototype.js"),
    nativeKeysIn = __webpack_require__(/*! ./_nativeKeysIn */ "../../../node_modules/lodash/_nativeKeysIn.js");
/** Used for built-in method references. */


var objectProto = Object.prototype;
/** Used to check objects for own properties. */

var hasOwnProperty = objectProto.hasOwnProperty;
/**
 * The base implementation of `_.keysIn` which doesn't treat sparse arrays as dense.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 */

function baseKeysIn(object) {
  if (!isObject(object)) {
    return nativeKeysIn(object);
  }

  var isProto = isPrototype(object),
      result = [];

  for (var key in object) {
    if (!(key == 'constructor' && (isProto || !hasOwnProperty.call(object, key)))) {
      result.push(key);
    }
  }

  return result;
}

module.exports = baseKeysIn;

/***/ }),

/***/ "../../../node_modules/lodash/_basePick.js":
/*!**************************************************************************************************!*\
  !*** /Users/diego.antonelli/Desktop/projects/widgets-resources/node_modules/lodash/_basePick.js ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var basePickBy = __webpack_require__(/*! ./_basePickBy */ "../../../node_modules/lodash/_basePickBy.js"),
    hasIn = __webpack_require__(/*! ./hasIn */ "../../../node_modules/lodash/hasIn.js");
/**
 * The base implementation of `_.pick` without support for individual
 * property identifiers.
 *
 * @private
 * @param {Object} object The source object.
 * @param {string[]} paths The property paths to pick.
 * @returns {Object} Returns the new object.
 */


function basePick(object, paths) {
  return basePickBy(object, paths, function (value, path) {
    return hasIn(object, path);
  });
}

module.exports = basePick;

/***/ }),

/***/ "../../../node_modules/lodash/_basePickBy.js":
/*!****************************************************************************************************!*\
  !*** /Users/diego.antonelli/Desktop/projects/widgets-resources/node_modules/lodash/_basePickBy.js ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var baseGet = __webpack_require__(/*! ./_baseGet */ "../../../node_modules/lodash/_baseGet.js"),
    baseSet = __webpack_require__(/*! ./_baseSet */ "../../../node_modules/lodash/_baseSet.js"),
    castPath = __webpack_require__(/*! ./_castPath */ "../../../node_modules/lodash/_castPath.js");
/**
 * The base implementation of  `_.pickBy` without support for iteratee shorthands.
 *
 * @private
 * @param {Object} object The source object.
 * @param {string[]} paths The property paths to pick.
 * @param {Function} predicate The function invoked per property.
 * @returns {Object} Returns the new object.
 */


function basePickBy(object, paths, predicate) {
  var index = -1,
      length = paths.length,
      result = {};

  while (++index < length) {
    var path = paths[index],
        value = baseGet(object, path);

    if (predicate(value, path)) {
      baseSet(result, castPath(path, object), value);
    }
  }

  return result;
}

module.exports = basePickBy;

/***/ }),

/***/ "../../../node_modules/lodash/_baseSet.js":
/*!*************************************************************************************************!*\
  !*** /Users/diego.antonelli/Desktop/projects/widgets-resources/node_modules/lodash/_baseSet.js ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var assignValue = __webpack_require__(/*! ./_assignValue */ "../../../node_modules/lodash/_assignValue.js"),
    castPath = __webpack_require__(/*! ./_castPath */ "../../../node_modules/lodash/_castPath.js"),
    isIndex = __webpack_require__(/*! ./_isIndex */ "../../../node_modules/lodash/_isIndex.js"),
    isObject = __webpack_require__(/*! ./isObject */ "../../../node_modules/lodash/isObject.js"),
    toKey = __webpack_require__(/*! ./_toKey */ "../../../node_modules/lodash/_toKey.js");
/**
 * The base implementation of `_.set`.
 *
 * @private
 * @param {Object} object The object to modify.
 * @param {Array|string} path The path of the property to set.
 * @param {*} value The value to set.
 * @param {Function} [customizer] The function to customize path creation.
 * @returns {Object} Returns `object`.
 */


function baseSet(object, path, value, customizer) {
  if (!isObject(object)) {
    return object;
  }

  path = castPath(path, object);
  var index = -1,
      length = path.length,
      lastIndex = length - 1,
      nested = object;

  while (nested != null && ++index < length) {
    var key = toKey(path[index]),
        newValue = value;

    if (index != lastIndex) {
      var objValue = nested[key];
      newValue = customizer ? customizer(objValue, key, nested) : undefined;

      if (newValue === undefined) {
        newValue = isObject(objValue) ? objValue : isIndex(path[index + 1]) ? [] : {};
      }
    }

    assignValue(nested, key, newValue);
    nested = nested[key];
  }

  return object;
}

module.exports = baseSet;

/***/ }),

/***/ "../../../node_modules/lodash/_baseSetToString.js":
/*!*********************************************************************************************************!*\
  !*** /Users/diego.antonelli/Desktop/projects/widgets-resources/node_modules/lodash/_baseSetToString.js ***!
  \*********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var constant = __webpack_require__(/*! ./constant */ "../../../node_modules/lodash/constant.js"),
    defineProperty = __webpack_require__(/*! ./_defineProperty */ "../../../node_modules/lodash/_defineProperty.js"),
    identity = __webpack_require__(/*! ./identity */ "../../../node_modules/lodash/identity.js");
/**
 * The base implementation of `setToString` without support for hot loop shorting.
 *
 * @private
 * @param {Function} func The function to modify.
 * @param {Function} string The `toString` result.
 * @returns {Function} Returns `func`.
 */


var baseSetToString = !defineProperty ? identity : function (func, string) {
  return defineProperty(func, 'toString', {
    'configurable': true,
    'enumerable': false,
    'value': constant(string),
    'writable': true
  });
};
module.exports = baseSetToString;

/***/ }),

/***/ "../../../node_modules/lodash/_baseSlice.js":
/*!***************************************************************************************************!*\
  !*** /Users/diego.antonelli/Desktop/projects/widgets-resources/node_modules/lodash/_baseSlice.js ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * The base implementation of `_.slice` without an iteratee call guard.
 *
 * @private
 * @param {Array} array The array to slice.
 * @param {number} [start=0] The start position.
 * @param {number} [end=array.length] The end position.
 * @returns {Array} Returns the slice of `array`.
 */
function baseSlice(array, start, end) {
  var index = -1,
      length = array.length;

  if (start < 0) {
    start = -start > length ? 0 : length + start;
  }

  end = end > length ? length : end;

  if (end < 0) {
    end += length;
  }

  length = start > end ? 0 : end - start >>> 0;
  start >>>= 0;
  var result = Array(length);

  while (++index < length) {
    result[index] = array[index + start];
  }

  return result;
}

module.exports = baseSlice;

/***/ }),

/***/ "../../../node_modules/lodash/_baseTimes.js":
/*!***************************************************************************************************!*\
  !*** /Users/diego.antonelli/Desktop/projects/widgets-resources/node_modules/lodash/_baseTimes.js ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * The base implementation of `_.times` without support for iteratee shorthands
 * or max array length checks.
 *
 * @private
 * @param {number} n The number of times to invoke `iteratee`.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns the array of results.
 */
function baseTimes(n, iteratee) {
  var index = -1,
      result = Array(n);

  while (++index < n) {
    result[index] = iteratee(index);
  }

  return result;
}

module.exports = baseTimes;

/***/ }),

/***/ "../../../node_modules/lodash/_baseToString.js":
/*!******************************************************************************************************!*\
  !*** /Users/diego.antonelli/Desktop/projects/widgets-resources/node_modules/lodash/_baseToString.js ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _Symbol = __webpack_require__(/*! ./_Symbol */ "../../../node_modules/lodash/_Symbol.js"),
    arrayMap = __webpack_require__(/*! ./_arrayMap */ "../../../node_modules/lodash/_arrayMap.js"),
    isArray = __webpack_require__(/*! ./isArray */ "../../../node_modules/lodash/isArray.js"),
    isSymbol = __webpack_require__(/*! ./isSymbol */ "../../../node_modules/lodash/isSymbol.js");
/** Used as references for various `Number` constants. */


var INFINITY = 1 / 0;
/** Used to convert symbols to primitives and strings. */

var symbolProto = _Symbol ? _Symbol.prototype : undefined,
    symbolToString = symbolProto ? symbolProto.toString : undefined;
/**
 * The base implementation of `_.toString` which doesn't convert nullish
 * values to empty strings.
 *
 * @private
 * @param {*} value The value to process.
 * @returns {string} Returns the string.
 */

function baseToString(value) {
  // Exit early for strings to avoid a performance hit in some environments.
  if (typeof value == 'string') {
    return value;
  }

  if (isArray(value)) {
    // Recursively convert values (susceptible to call stack limits).
    return arrayMap(value, baseToString) + '';
  }

  if (isSymbol(value)) {
    return symbolToString ? symbolToString.call(value) : '';
  }

  var result = value + '';
  return result == '0' && 1 / value == -INFINITY ? '-0' : result;
}

module.exports = baseToString;

/***/ }),

/***/ "../../../node_modules/lodash/_baseUnary.js":
/*!***************************************************************************************************!*\
  !*** /Users/diego.antonelli/Desktop/projects/widgets-resources/node_modules/lodash/_baseUnary.js ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * The base implementation of `_.unary` without support for storing metadata.
 *
 * @private
 * @param {Function} func The function to cap arguments for.
 * @returns {Function} Returns the new capped function.
 */
function baseUnary(func) {
  return function (value) {
    return func(value);
  };
}

module.exports = baseUnary;

/***/ }),

/***/ "../../../node_modules/lodash/_baseUnset.js":
/*!***************************************************************************************************!*\
  !*** /Users/diego.antonelli/Desktop/projects/widgets-resources/node_modules/lodash/_baseUnset.js ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var castPath = __webpack_require__(/*! ./_castPath */ "../../../node_modules/lodash/_castPath.js"),
    last = __webpack_require__(/*! ./last */ "../../../node_modules/lodash/last.js"),
    parent = __webpack_require__(/*! ./_parent */ "../../../node_modules/lodash/_parent.js"),
    toKey = __webpack_require__(/*! ./_toKey */ "../../../node_modules/lodash/_toKey.js");
/**
 * The base implementation of `_.unset`.
 *
 * @private
 * @param {Object} object The object to modify.
 * @param {Array|string} path The property path to unset.
 * @returns {boolean} Returns `true` if the property is deleted, else `false`.
 */


function baseUnset(object, path) {
  path = castPath(path, object);
  object = parent(object, path);
  return object == null || delete object[toKey(last(path))];
}

module.exports = baseUnset;

/***/ }),

/***/ "../../../node_modules/lodash/_cacheHas.js":
/*!**************************************************************************************************!*\
  !*** /Users/diego.antonelli/Desktop/projects/widgets-resources/node_modules/lodash/_cacheHas.js ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Checks if a `cache` value for `key` exists.
 *
 * @private
 * @param {Object} cache The cache to query.
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function cacheHas(cache, key) {
  return cache.has(key);
}

module.exports = cacheHas;

/***/ }),

/***/ "../../../node_modules/lodash/_castPath.js":
/*!**************************************************************************************************!*\
  !*** /Users/diego.antonelli/Desktop/projects/widgets-resources/node_modules/lodash/_castPath.js ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isArray = __webpack_require__(/*! ./isArray */ "../../../node_modules/lodash/isArray.js"),
    isKey = __webpack_require__(/*! ./_isKey */ "../../../node_modules/lodash/_isKey.js"),
    stringToPath = __webpack_require__(/*! ./_stringToPath */ "../../../node_modules/lodash/_stringToPath.js"),
    toString = __webpack_require__(/*! ./toString */ "../../../node_modules/lodash/toString.js");
/**
 * Casts `value` to a path array if it's not one.
 *
 * @private
 * @param {*} value The value to inspect.
 * @param {Object} [object] The object to query keys on.
 * @returns {Array} Returns the cast property path array.
 */


function castPath(value, object) {
  if (isArray(value)) {
    return value;
  }

  return isKey(value, object) ? [value] : stringToPath(toString(value));
}

module.exports = castPath;

/***/ }),

/***/ "../../../node_modules/lodash/_cloneArrayBuffer.js":
/*!**********************************************************************************************************!*\
  !*** /Users/diego.antonelli/Desktop/projects/widgets-resources/node_modules/lodash/_cloneArrayBuffer.js ***!
  \**********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var Uint8Array = __webpack_require__(/*! ./_Uint8Array */ "../../../node_modules/lodash/_Uint8Array.js");
/**
 * Creates a clone of `arrayBuffer`.
 *
 * @private
 * @param {ArrayBuffer} arrayBuffer The array buffer to clone.
 * @returns {ArrayBuffer} Returns the cloned array buffer.
 */


function cloneArrayBuffer(arrayBuffer) {
  var result = new arrayBuffer.constructor(arrayBuffer.byteLength);
  new Uint8Array(result).set(new Uint8Array(arrayBuffer));
  return result;
}

module.exports = cloneArrayBuffer;

/***/ }),

/***/ "../../../node_modules/lodash/_cloneBuffer.js":
/*!*****************************************************************************************************!*\
  !*** /Users/diego.antonelli/Desktop/projects/widgets-resources/node_modules/lodash/_cloneBuffer.js ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {function _typeof(obj) {
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

var root = __webpack_require__(/*! ./_root */ "../../../node_modules/lodash/_root.js");
/** Detect free variable `exports`. */


var freeExports = ( false ? undefined : _typeof(exports)) == 'object' && exports && !exports.nodeType && exports;
/** Detect free variable `module`. */

var freeModule = freeExports && ( false ? undefined : _typeof(module)) == 'object' && module && !module.nodeType && module;
/** Detect the popular CommonJS extension `module.exports`. */

var moduleExports = freeModule && freeModule.exports === freeExports;
/** Built-in value references. */

var Buffer = moduleExports ? root.Buffer : undefined,
    allocUnsafe = Buffer ? Buffer.allocUnsafe : undefined;
/**
 * Creates a clone of  `buffer`.
 *
 * @private
 * @param {Buffer} buffer The buffer to clone.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @returns {Buffer} Returns the cloned buffer.
 */

function cloneBuffer(buffer, isDeep) {
  if (isDeep) {
    return buffer.slice();
  }

  var length = buffer.length,
      result = allocUnsafe ? allocUnsafe(length) : new buffer.constructor(length);
  buffer.copy(result);
  return result;
}

module.exports = cloneBuffer;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../webpack/buildin/module.js */ "../../../node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "../../../node_modules/lodash/_cloneDataView.js":
/*!*******************************************************************************************************!*\
  !*** /Users/diego.antonelli/Desktop/projects/widgets-resources/node_modules/lodash/_cloneDataView.js ***!
  \*******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var cloneArrayBuffer = __webpack_require__(/*! ./_cloneArrayBuffer */ "../../../node_modules/lodash/_cloneArrayBuffer.js");
/**
 * Creates a clone of `dataView`.
 *
 * @private
 * @param {Object} dataView The data view to clone.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @returns {Object} Returns the cloned data view.
 */


function cloneDataView(dataView, isDeep) {
  var buffer = isDeep ? cloneArrayBuffer(dataView.buffer) : dataView.buffer;
  return new dataView.constructor(buffer, dataView.byteOffset, dataView.byteLength);
}

module.exports = cloneDataView;

/***/ }),

/***/ "../../../node_modules/lodash/_cloneRegExp.js":
/*!*****************************************************************************************************!*\
  !*** /Users/diego.antonelli/Desktop/projects/widgets-resources/node_modules/lodash/_cloneRegExp.js ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/** Used to match `RegExp` flags from their coerced string values. */
var reFlags = /\w*$/;
/**
 * Creates a clone of `regexp`.
 *
 * @private
 * @param {Object} regexp The regexp to clone.
 * @returns {Object} Returns the cloned regexp.
 */

function cloneRegExp(regexp) {
  var result = new regexp.constructor(regexp.source, reFlags.exec(regexp));
  result.lastIndex = regexp.lastIndex;
  return result;
}

module.exports = cloneRegExp;

/***/ }),

/***/ "../../../node_modules/lodash/_cloneSymbol.js":
/*!*****************************************************************************************************!*\
  !*** /Users/diego.antonelli/Desktop/projects/widgets-resources/node_modules/lodash/_cloneSymbol.js ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _Symbol = __webpack_require__(/*! ./_Symbol */ "../../../node_modules/lodash/_Symbol.js");
/** Used to convert symbols to primitives and strings. */


var symbolProto = _Symbol ? _Symbol.prototype : undefined,
    symbolValueOf = symbolProto ? symbolProto.valueOf : undefined;
/**
 * Creates a clone of the `symbol` object.
 *
 * @private
 * @param {Object} symbol The symbol object to clone.
 * @returns {Object} Returns the cloned symbol object.
 */

function cloneSymbol(symbol) {
  return symbolValueOf ? Object(symbolValueOf.call(symbol)) : {};
}

module.exports = cloneSymbol;

/***/ }),

/***/ "../../../node_modules/lodash/_cloneTypedArray.js":
/*!*********************************************************************************************************!*\
  !*** /Users/diego.antonelli/Desktop/projects/widgets-resources/node_modules/lodash/_cloneTypedArray.js ***!
  \*********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var cloneArrayBuffer = __webpack_require__(/*! ./_cloneArrayBuffer */ "../../../node_modules/lodash/_cloneArrayBuffer.js");
/**
 * Creates a clone of `typedArray`.
 *
 * @private
 * @param {Object} typedArray The typed array to clone.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @returns {Object} Returns the cloned typed array.
 */


function cloneTypedArray(typedArray, isDeep) {
  var buffer = isDeep ? cloneArrayBuffer(typedArray.buffer) : typedArray.buffer;
  return new typedArray.constructor(buffer, typedArray.byteOffset, typedArray.length);
}

module.exports = cloneTypedArray;

/***/ }),

/***/ "../../../node_modules/lodash/_copyArray.js":
/*!***************************************************************************************************!*\
  !*** /Users/diego.antonelli/Desktop/projects/widgets-resources/node_modules/lodash/_copyArray.js ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Copies the values of `source` to `array`.
 *
 * @private
 * @param {Array} source The array to copy values from.
 * @param {Array} [array=[]] The array to copy values to.
 * @returns {Array} Returns `array`.
 */
function copyArray(source, array) {
  var index = -1,
      length = source.length;
  array || (array = Array(length));

  while (++index < length) {
    array[index] = source[index];
  }

  return array;
}

module.exports = copyArray;

/***/ }),

/***/ "../../../node_modules/lodash/_copyObject.js":
/*!****************************************************************************************************!*\
  !*** /Users/diego.antonelli/Desktop/projects/widgets-resources/node_modules/lodash/_copyObject.js ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var assignValue = __webpack_require__(/*! ./_assignValue */ "../../../node_modules/lodash/_assignValue.js"),
    baseAssignValue = __webpack_require__(/*! ./_baseAssignValue */ "../../../node_modules/lodash/_baseAssignValue.js");
/**
 * Copies properties of `source` to `object`.
 *
 * @private
 * @param {Object} source The object to copy properties from.
 * @param {Array} props The property identifiers to copy.
 * @param {Object} [object={}] The object to copy properties to.
 * @param {Function} [customizer] The function to customize copied values.
 * @returns {Object} Returns `object`.
 */


function copyObject(source, props, object, customizer) {
  var isNew = !object;
  object || (object = {});
  var index = -1,
      length = props.length;

  while (++index < length) {
    var key = props[index];
    var newValue = customizer ? customizer(object[key], source[key], key, object, source) : undefined;

    if (newValue === undefined) {
      newValue = source[key];
    }

    if (isNew) {
      baseAssignValue(object, key, newValue);
    } else {
      assignValue(object, key, newValue);
    }
  }

  return object;
}

module.exports = copyObject;

/***/ }),

/***/ "../../../node_modules/lodash/_copySymbols.js":
/*!*****************************************************************************************************!*\
  !*** /Users/diego.antonelli/Desktop/projects/widgets-resources/node_modules/lodash/_copySymbols.js ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var copyObject = __webpack_require__(/*! ./_copyObject */ "../../../node_modules/lodash/_copyObject.js"),
    getSymbols = __webpack_require__(/*! ./_getSymbols */ "../../../node_modules/lodash/_getSymbols.js");
/**
 * Copies own symbols of `source` to `object`.
 *
 * @private
 * @param {Object} source The object to copy symbols from.
 * @param {Object} [object={}] The object to copy symbols to.
 * @returns {Object} Returns `object`.
 */


function copySymbols(source, object) {
  return copyObject(source, getSymbols(source), object);
}

module.exports = copySymbols;

/***/ }),

/***/ "../../../node_modules/lodash/_copySymbolsIn.js":
/*!*******************************************************************************************************!*\
  !*** /Users/diego.antonelli/Desktop/projects/widgets-resources/node_modules/lodash/_copySymbolsIn.js ***!
  \*******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var copyObject = __webpack_require__(/*! ./_copyObject */ "../../../node_modules/lodash/_copyObject.js"),
    getSymbolsIn = __webpack_require__(/*! ./_getSymbolsIn */ "../../../node_modules/lodash/_getSymbolsIn.js");
/**
 * Copies own and inherited symbols of `source` to `object`.
 *
 * @private
 * @param {Object} source The object to copy symbols from.
 * @param {Object} [object={}] The object to copy symbols to.
 * @returns {Object} Returns `object`.
 */


function copySymbolsIn(source, object) {
  return copyObject(source, getSymbolsIn(source), object);
}

module.exports = copySymbolsIn;

/***/ }),

/***/ "../../../node_modules/lodash/_coreJsData.js":
/*!****************************************************************************************************!*\
  !*** /Users/diego.antonelli/Desktop/projects/widgets-resources/node_modules/lodash/_coreJsData.js ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var root = __webpack_require__(/*! ./_root */ "../../../node_modules/lodash/_root.js");
/** Used to detect overreaching core-js shims. */


var coreJsData = root['__core-js_shared__'];
module.exports = coreJsData;

/***/ }),

/***/ "../../../node_modules/lodash/_customOmitClone.js":
/*!*********************************************************************************************************!*\
  !*** /Users/diego.antonelli/Desktop/projects/widgets-resources/node_modules/lodash/_customOmitClone.js ***!
  \*********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isPlainObject = __webpack_require__(/*! ./isPlainObject */ "../../../node_modules/lodash/isPlainObject.js");
/**
 * Used by `_.omit` to customize its `_.cloneDeep` use to only clone plain
 * objects.
 *
 * @private
 * @param {*} value The value to inspect.
 * @param {string} key The key of the property to inspect.
 * @returns {*} Returns the uncloned value or `undefined` to defer cloning to `_.cloneDeep`.
 */


function customOmitClone(value) {
  return isPlainObject(value) ? undefined : value;
}

module.exports = customOmitClone;

/***/ }),

/***/ "../../../node_modules/lodash/_defineProperty.js":
/*!********************************************************************************************************!*\
  !*** /Users/diego.antonelli/Desktop/projects/widgets-resources/node_modules/lodash/_defineProperty.js ***!
  \********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var getNative = __webpack_require__(/*! ./_getNative */ "../../../node_modules/lodash/_getNative.js");

var defineProperty = function () {
  try {
    var func = getNative(Object, 'defineProperty');
    func({}, '', {});
    return func;
  } catch (e) {}
}();

module.exports = defineProperty;

/***/ }),

/***/ "../../../node_modules/lodash/_equalArrays.js":
/*!*****************************************************************************************************!*\
  !*** /Users/diego.antonelli/Desktop/projects/widgets-resources/node_modules/lodash/_equalArrays.js ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var SetCache = __webpack_require__(/*! ./_SetCache */ "../../../node_modules/lodash/_SetCache.js"),
    arraySome = __webpack_require__(/*! ./_arraySome */ "../../../node_modules/lodash/_arraySome.js"),
    cacheHas = __webpack_require__(/*! ./_cacheHas */ "../../../node_modules/lodash/_cacheHas.js");
/** Used to compose bitmasks for value comparisons. */


var COMPARE_PARTIAL_FLAG = 1,
    COMPARE_UNORDERED_FLAG = 2;
/**
 * A specialized version of `baseIsEqualDeep` for arrays with support for
 * partial deep comparisons.
 *
 * @private
 * @param {Array} array The array to compare.
 * @param {Array} other The other array to compare.
 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
 * @param {Function} customizer The function to customize comparisons.
 * @param {Function} equalFunc The function to determine equivalents of values.
 * @param {Object} stack Tracks traversed `array` and `other` objects.
 * @returns {boolean} Returns `true` if the arrays are equivalent, else `false`.
 */

function equalArrays(array, other, bitmask, customizer, equalFunc, stack) {
  var isPartial = bitmask & COMPARE_PARTIAL_FLAG,
      arrLength = array.length,
      othLength = other.length;

  if (arrLength != othLength && !(isPartial && othLength > arrLength)) {
    return false;
  } // Assume cyclic values are equal.


  var stacked = stack.get(array);

  if (stacked && stack.get(other)) {
    return stacked == other;
  }

  var index = -1,
      result = true,
      seen = bitmask & COMPARE_UNORDERED_FLAG ? new SetCache() : undefined;
  stack.set(array, other);
  stack.set(other, array); // Ignore non-index properties.

  while (++index < arrLength) {
    var arrValue = array[index],
        othValue = other[index];

    if (customizer) {
      var compared = isPartial ? customizer(othValue, arrValue, index, other, array, stack) : customizer(arrValue, othValue, index, array, other, stack);
    }

    if (compared !== undefined) {
      if (compared) {
        continue;
      }

      result = false;
      break;
    } // Recursively compare arrays (susceptible to call stack limits).


    if (seen) {
      if (!arraySome(other, function (othValue, othIndex) {
        if (!cacheHas(seen, othIndex) && (arrValue === othValue || equalFunc(arrValue, othValue, bitmask, customizer, stack))) {
          return seen.push(othIndex);
        }
      })) {
        result = false;
        break;
      }
    } else if (!(arrValue === othValue || equalFunc(arrValue, othValue, bitmask, customizer, stack))) {
      result = false;
      break;
    }
  }

  stack['delete'](array);
  stack['delete'](other);
  return result;
}

module.exports = equalArrays;

/***/ }),

/***/ "../../../node_modules/lodash/_equalByTag.js":
/*!****************************************************************************************************!*\
  !*** /Users/diego.antonelli/Desktop/projects/widgets-resources/node_modules/lodash/_equalByTag.js ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _Symbol = __webpack_require__(/*! ./_Symbol */ "../../../node_modules/lodash/_Symbol.js"),
    Uint8Array = __webpack_require__(/*! ./_Uint8Array */ "../../../node_modules/lodash/_Uint8Array.js"),
    eq = __webpack_require__(/*! ./eq */ "../../../node_modules/lodash/eq.js"),
    equalArrays = __webpack_require__(/*! ./_equalArrays */ "../../../node_modules/lodash/_equalArrays.js"),
    mapToArray = __webpack_require__(/*! ./_mapToArray */ "../../../node_modules/lodash/_mapToArray.js"),
    setToArray = __webpack_require__(/*! ./_setToArray */ "../../../node_modules/lodash/_setToArray.js");
/** Used to compose bitmasks for value comparisons. */


var COMPARE_PARTIAL_FLAG = 1,
    COMPARE_UNORDERED_FLAG = 2;
/** `Object#toString` result references. */

var boolTag = '[object Boolean]',
    dateTag = '[object Date]',
    errorTag = '[object Error]',
    mapTag = '[object Map]',
    numberTag = '[object Number]',
    regexpTag = '[object RegExp]',
    setTag = '[object Set]',
    stringTag = '[object String]',
    symbolTag = '[object Symbol]';
var arrayBufferTag = '[object ArrayBuffer]',
    dataViewTag = '[object DataView]';
/** Used to convert symbols to primitives and strings. */

var symbolProto = _Symbol ? _Symbol.prototype : undefined,
    symbolValueOf = symbolProto ? symbolProto.valueOf : undefined;
/**
 * A specialized version of `baseIsEqualDeep` for comparing objects of
 * the same `toStringTag`.
 *
 * **Note:** This function only supports comparing values with tags of
 * `Boolean`, `Date`, `Error`, `Number`, `RegExp`, or `String`.
 *
 * @private
 * @param {Object} object The object to compare.
 * @param {Object} other The other object to compare.
 * @param {string} tag The `toStringTag` of the objects to compare.
 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
 * @param {Function} customizer The function to customize comparisons.
 * @param {Function} equalFunc The function to determine equivalents of values.
 * @param {Object} stack Tracks traversed `object` and `other` objects.
 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
 */

function equalByTag(object, other, tag, bitmask, customizer, equalFunc, stack) {
  switch (tag) {
    case dataViewTag:
      if (object.byteLength != other.byteLength || object.byteOffset != other.byteOffset) {
        return false;
      }

      object = object.buffer;
      other = other.buffer;

    case arrayBufferTag:
      if (object.byteLength != other.byteLength || !equalFunc(new Uint8Array(object), new Uint8Array(other))) {
        return false;
      }

      return true;

    case boolTag:
    case dateTag:
    case numberTag:
      // Coerce booleans to `1` or `0` and dates to milliseconds.
      // Invalid dates are coerced to `NaN`.
      return eq(+object, +other);

    case errorTag:
      return object.name == other.name && object.message == other.message;

    case regexpTag:
    case stringTag:
      // Coerce regexes to strings and treat strings, primitives and objects,
      // as equal. See http://www.ecma-international.org/ecma-262/7.0/#sec-regexp.prototype.tostring
      // for more details.
      return object == other + '';

    case mapTag:
      var convert = mapToArray;

    case setTag:
      var isPartial = bitmask & COMPARE_PARTIAL_FLAG;
      convert || (convert = setToArray);

      if (object.size != other.size && !isPartial) {
        return false;
      } // Assume cyclic values are equal.


      var stacked = stack.get(object);

      if (stacked) {
        return stacked == other;
      }

      bitmask |= COMPARE_UNORDERED_FLAG; // Recursively compare objects (susceptible to call stack limits).

      stack.set(object, other);
      var result = equalArrays(convert(object), convert(other), bitmask, customizer, equalFunc, stack);
      stack['delete'](object);
      return result;

    case symbolTag:
      if (symbolValueOf) {
        return symbolValueOf.call(object) == symbolValueOf.call(other);
      }

  }

  return false;
}

module.exports = equalByTag;

/***/ }),

/***/ "../../../node_modules/lodash/_equalObjects.js":
/*!******************************************************************************************************!*\
  !*** /Users/diego.antonelli/Desktop/projects/widgets-resources/node_modules/lodash/_equalObjects.js ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var getAllKeys = __webpack_require__(/*! ./_getAllKeys */ "../../../node_modules/lodash/_getAllKeys.js");
/** Used to compose bitmasks for value comparisons. */


var COMPARE_PARTIAL_FLAG = 1;
/** Used for built-in method references. */

var objectProto = Object.prototype;
/** Used to check objects for own properties. */

var hasOwnProperty = objectProto.hasOwnProperty;
/**
 * A specialized version of `baseIsEqualDeep` for objects with support for
 * partial deep comparisons.
 *
 * @private
 * @param {Object} object The object to compare.
 * @param {Object} other The other object to compare.
 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
 * @param {Function} customizer The function to customize comparisons.
 * @param {Function} equalFunc The function to determine equivalents of values.
 * @param {Object} stack Tracks traversed `object` and `other` objects.
 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
 */

function equalObjects(object, other, bitmask, customizer, equalFunc, stack) {
  var isPartial = bitmask & COMPARE_PARTIAL_FLAG,
      objProps = getAllKeys(object),
      objLength = objProps.length,
      othProps = getAllKeys(other),
      othLength = othProps.length;

  if (objLength != othLength && !isPartial) {
    return false;
  }

  var index = objLength;

  while (index--) {
    var key = objProps[index];

    if (!(isPartial ? key in other : hasOwnProperty.call(other, key))) {
      return false;
    }
  } // Assume cyclic values are equal.


  var stacked = stack.get(object);

  if (stacked && stack.get(other)) {
    return stacked == other;
  }

  var result = true;
  stack.set(object, other);
  stack.set(other, object);
  var skipCtor = isPartial;

  while (++index < objLength) {
    key = objProps[index];
    var objValue = object[key],
        othValue = other[key];

    if (customizer) {
      var compared = isPartial ? customizer(othValue, objValue, key, other, object, stack) : customizer(objValue, othValue, key, object, other, stack);
    } // Recursively compare objects (susceptible to call stack limits).


    if (!(compared === undefined ? objValue === othValue || equalFunc(objValue, othValue, bitmask, customizer, stack) : compared)) {
      result = false;
      break;
    }

    skipCtor || (skipCtor = key == 'constructor');
  }

  if (result && !skipCtor) {
    var objCtor = object.constructor,
        othCtor = other.constructor; // Non `Object` object instances with different constructors are not equal.

    if (objCtor != othCtor && 'constructor' in object && 'constructor' in other && !(typeof objCtor == 'function' && objCtor instanceof objCtor && typeof othCtor == 'function' && othCtor instanceof othCtor)) {
      result = false;
    }
  }

  stack['delete'](object);
  stack['delete'](other);
  return result;
}

module.exports = equalObjects;

/***/ }),

/***/ "../../../node_modules/lodash/_flatRest.js":
/*!**************************************************************************************************!*\
  !*** /Users/diego.antonelli/Desktop/projects/widgets-resources/node_modules/lodash/_flatRest.js ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var flatten = __webpack_require__(/*! ./flatten */ "../../../node_modules/lodash/flatten.js"),
    overRest = __webpack_require__(/*! ./_overRest */ "../../../node_modules/lodash/_overRest.js"),
    setToString = __webpack_require__(/*! ./_setToString */ "../../../node_modules/lodash/_setToString.js");
/**
 * A specialized version of `baseRest` which flattens the rest array.
 *
 * @private
 * @param {Function} func The function to apply a rest parameter to.
 * @returns {Function} Returns the new function.
 */


function flatRest(func) {
  return setToString(overRest(func, undefined, flatten), func + '');
}

module.exports = flatRest;

/***/ }),

/***/ "../../../node_modules/lodash/_freeGlobal.js":
/*!****************************************************************************************************!*\
  !*** /Users/diego.antonelli/Desktop/projects/widgets-resources/node_modules/lodash/_freeGlobal.js ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {function _typeof(obj) {
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
/** Detect free variable `global` from Node.js. */


var freeGlobal = (typeof global === "undefined" ? "undefined" : _typeof(global)) == 'object' && global && global.Object === Object && global;
module.exports = freeGlobal;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../webpack/buildin/global.js */ "../../../node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "../../../node_modules/lodash/_getAllKeys.js":
/*!****************************************************************************************************!*\
  !*** /Users/diego.antonelli/Desktop/projects/widgets-resources/node_modules/lodash/_getAllKeys.js ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var baseGetAllKeys = __webpack_require__(/*! ./_baseGetAllKeys */ "../../../node_modules/lodash/_baseGetAllKeys.js"),
    getSymbols = __webpack_require__(/*! ./_getSymbols */ "../../../node_modules/lodash/_getSymbols.js"),
    keys = __webpack_require__(/*! ./keys */ "../../../node_modules/lodash/keys.js");
/**
 * Creates an array of own enumerable property names and symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names and symbols.
 */


function getAllKeys(object) {
  return baseGetAllKeys(object, keys, getSymbols);
}

module.exports = getAllKeys;

/***/ }),

/***/ "../../../node_modules/lodash/_getAllKeysIn.js":
/*!******************************************************************************************************!*\
  !*** /Users/diego.antonelli/Desktop/projects/widgets-resources/node_modules/lodash/_getAllKeysIn.js ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var baseGetAllKeys = __webpack_require__(/*! ./_baseGetAllKeys */ "../../../node_modules/lodash/_baseGetAllKeys.js"),
    getSymbolsIn = __webpack_require__(/*! ./_getSymbolsIn */ "../../../node_modules/lodash/_getSymbolsIn.js"),
    keysIn = __webpack_require__(/*! ./keysIn */ "../../../node_modules/lodash/keysIn.js");
/**
 * Creates an array of own and inherited enumerable property names and
 * symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names and symbols.
 */


function getAllKeysIn(object) {
  return baseGetAllKeys(object, keysIn, getSymbolsIn);
}

module.exports = getAllKeysIn;

/***/ }),

/***/ "../../../node_modules/lodash/_getMapData.js":
/*!****************************************************************************************************!*\
  !*** /Users/diego.antonelli/Desktop/projects/widgets-resources/node_modules/lodash/_getMapData.js ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isKeyable = __webpack_require__(/*! ./_isKeyable */ "../../../node_modules/lodash/_isKeyable.js");
/**
 * Gets the data for `map`.
 *
 * @private
 * @param {Object} map The map to query.
 * @param {string} key The reference key.
 * @returns {*} Returns the map data.
 */


function getMapData(map, key) {
  var data = map.__data__;
  return isKeyable(key) ? data[typeof key == 'string' ? 'string' : 'hash'] : data.map;
}

module.exports = getMapData;

/***/ }),

/***/ "../../../node_modules/lodash/_getNative.js":
/*!***************************************************************************************************!*\
  !*** /Users/diego.antonelli/Desktop/projects/widgets-resources/node_modules/lodash/_getNative.js ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var baseIsNative = __webpack_require__(/*! ./_baseIsNative */ "../../../node_modules/lodash/_baseIsNative.js"),
    getValue = __webpack_require__(/*! ./_getValue */ "../../../node_modules/lodash/_getValue.js");
/**
 * Gets the native function at `key` of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {string} key The key of the method to get.
 * @returns {*} Returns the function if it's native, else `undefined`.
 */


function getNative(object, key) {
  var value = getValue(object, key);
  return baseIsNative(value) ? value : undefined;
}

module.exports = getNative;

/***/ }),

/***/ "../../../node_modules/lodash/_getPrototype.js":
/*!******************************************************************************************************!*\
  !*** /Users/diego.antonelli/Desktop/projects/widgets-resources/node_modules/lodash/_getPrototype.js ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var overArg = __webpack_require__(/*! ./_overArg */ "../../../node_modules/lodash/_overArg.js");
/** Built-in value references. */


var getPrototype = overArg(Object.getPrototypeOf, Object);
module.exports = getPrototype;

/***/ }),

/***/ "../../../node_modules/lodash/_getRawTag.js":
/*!***************************************************************************************************!*\
  !*** /Users/diego.antonelli/Desktop/projects/widgets-resources/node_modules/lodash/_getRawTag.js ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _Symbol = __webpack_require__(/*! ./_Symbol */ "../../../node_modules/lodash/_Symbol.js");
/** Used for built-in method references. */


var objectProto = Object.prototype;
/** Used to check objects for own properties. */

var hasOwnProperty = objectProto.hasOwnProperty;
/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */

var nativeObjectToString = objectProto.toString;
/** Built-in value references. */

var symToStringTag = _Symbol ? _Symbol.toStringTag : undefined;
/**
 * A specialized version of `baseGetTag` which ignores `Symbol.toStringTag` values.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the raw `toStringTag`.
 */

function getRawTag(value) {
  var isOwn = hasOwnProperty.call(value, symToStringTag),
      tag = value[symToStringTag];

  try {
    value[symToStringTag] = undefined;
    var unmasked = true;
  } catch (e) {}

  var result = nativeObjectToString.call(value);

  if (unmasked) {
    if (isOwn) {
      value[symToStringTag] = tag;
    } else {
      delete value[symToStringTag];
    }
  }

  return result;
}

module.exports = getRawTag;

/***/ }),

/***/ "../../../node_modules/lodash/_getSymbols.js":
/*!****************************************************************************************************!*\
  !*** /Users/diego.antonelli/Desktop/projects/widgets-resources/node_modules/lodash/_getSymbols.js ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var arrayFilter = __webpack_require__(/*! ./_arrayFilter */ "../../../node_modules/lodash/_arrayFilter.js"),
    stubArray = __webpack_require__(/*! ./stubArray */ "../../../node_modules/lodash/stubArray.js");
/** Used for built-in method references. */


var objectProto = Object.prototype;
/** Built-in value references. */

var propertyIsEnumerable = objectProto.propertyIsEnumerable;
/* Built-in method references for those with the same name as other `lodash` methods. */

var nativeGetSymbols = Object.getOwnPropertySymbols;
/**
 * Creates an array of the own enumerable symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of symbols.
 */

var getSymbols = !nativeGetSymbols ? stubArray : function (object) {
  if (object == null) {
    return [];
  }

  object = Object(object);
  return arrayFilter(nativeGetSymbols(object), function (symbol) {
    return propertyIsEnumerable.call(object, symbol);
  });
};
module.exports = getSymbols;

/***/ }),

/***/ "../../../node_modules/lodash/_getSymbolsIn.js":
/*!******************************************************************************************************!*\
  !*** /Users/diego.antonelli/Desktop/projects/widgets-resources/node_modules/lodash/_getSymbolsIn.js ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var arrayPush = __webpack_require__(/*! ./_arrayPush */ "../../../node_modules/lodash/_arrayPush.js"),
    getPrototype = __webpack_require__(/*! ./_getPrototype */ "../../../node_modules/lodash/_getPrototype.js"),
    getSymbols = __webpack_require__(/*! ./_getSymbols */ "../../../node_modules/lodash/_getSymbols.js"),
    stubArray = __webpack_require__(/*! ./stubArray */ "../../../node_modules/lodash/stubArray.js");
/* Built-in method references for those with the same name as other `lodash` methods. */


var nativeGetSymbols = Object.getOwnPropertySymbols;
/**
 * Creates an array of the own and inherited enumerable symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of symbols.
 */

var getSymbolsIn = !nativeGetSymbols ? stubArray : function (object) {
  var result = [];

  while (object) {
    arrayPush(result, getSymbols(object));
    object = getPrototype(object);
  }

  return result;
};
module.exports = getSymbolsIn;

/***/ }),

/***/ "../../../node_modules/lodash/_getTag.js":
/*!************************************************************************************************!*\
  !*** /Users/diego.antonelli/Desktop/projects/widgets-resources/node_modules/lodash/_getTag.js ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var DataView = __webpack_require__(/*! ./_DataView */ "../../../node_modules/lodash/_DataView.js"),
    Map = __webpack_require__(/*! ./_Map */ "../../../node_modules/lodash/_Map.js"),
    Promise = __webpack_require__(/*! ./_Promise */ "../../../node_modules/lodash/_Promise.js"),
    Set = __webpack_require__(/*! ./_Set */ "../../../node_modules/lodash/_Set.js"),
    WeakMap = __webpack_require__(/*! ./_WeakMap */ "../../../node_modules/lodash/_WeakMap.js"),
    baseGetTag = __webpack_require__(/*! ./_baseGetTag */ "../../../node_modules/lodash/_baseGetTag.js"),
    toSource = __webpack_require__(/*! ./_toSource */ "../../../node_modules/lodash/_toSource.js");
/** `Object#toString` result references. */


var mapTag = '[object Map]',
    objectTag = '[object Object]',
    promiseTag = '[object Promise]',
    setTag = '[object Set]',
    weakMapTag = '[object WeakMap]';
var dataViewTag = '[object DataView]';
/** Used to detect maps, sets, and weakmaps. */

var dataViewCtorString = toSource(DataView),
    mapCtorString = toSource(Map),
    promiseCtorString = toSource(Promise),
    setCtorString = toSource(Set),
    weakMapCtorString = toSource(WeakMap);
/**
 * Gets the `toStringTag` of `value`.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */

var getTag = baseGetTag; // Fallback for data views, maps, sets, and weak maps in IE 11 and promises in Node.js < 6.

if (DataView && getTag(new DataView(new ArrayBuffer(1))) != dataViewTag || Map && getTag(new Map()) != mapTag || Promise && getTag(Promise.resolve()) != promiseTag || Set && getTag(new Set()) != setTag || WeakMap && getTag(new WeakMap()) != weakMapTag) {
  getTag = function getTag(value) {
    var result = baseGetTag(value),
        Ctor = result == objectTag ? value.constructor : undefined,
        ctorString = Ctor ? toSource(Ctor) : '';

    if (ctorString) {
      switch (ctorString) {
        case dataViewCtorString:
          return dataViewTag;

        case mapCtorString:
          return mapTag;

        case promiseCtorString:
          return promiseTag;

        case setCtorString:
          return setTag;

        case weakMapCtorString:
          return weakMapTag;
      }
    }

    return result;
  };
}

module.exports = getTag;

/***/ }),

/***/ "../../../node_modules/lodash/_getValue.js":
/*!**************************************************************************************************!*\
  !*** /Users/diego.antonelli/Desktop/projects/widgets-resources/node_modules/lodash/_getValue.js ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Gets the value at `key` of `object`.
 *
 * @private
 * @param {Object} [object] The object to query.
 * @param {string} key The key of the property to get.
 * @returns {*} Returns the property value.
 */
function getValue(object, key) {
  return object == null ? undefined : object[key];
}

module.exports = getValue;

/***/ }),

/***/ "../../../node_modules/lodash/_hasPath.js":
/*!*************************************************************************************************!*\
  !*** /Users/diego.antonelli/Desktop/projects/widgets-resources/node_modules/lodash/_hasPath.js ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var castPath = __webpack_require__(/*! ./_castPath */ "../../../node_modules/lodash/_castPath.js"),
    isArguments = __webpack_require__(/*! ./isArguments */ "../../../node_modules/lodash/isArguments.js"),
    isArray = __webpack_require__(/*! ./isArray */ "../../../node_modules/lodash/isArray.js"),
    isIndex = __webpack_require__(/*! ./_isIndex */ "../../../node_modules/lodash/_isIndex.js"),
    isLength = __webpack_require__(/*! ./isLength */ "../../../node_modules/lodash/isLength.js"),
    toKey = __webpack_require__(/*! ./_toKey */ "../../../node_modules/lodash/_toKey.js");
/**
 * Checks if `path` exists on `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {Array|string} path The path to check.
 * @param {Function} hasFunc The function to check properties.
 * @returns {boolean} Returns `true` if `path` exists, else `false`.
 */


function hasPath(object, path, hasFunc) {
  path = castPath(path, object);
  var index = -1,
      length = path.length,
      result = false;

  while (++index < length) {
    var key = toKey(path[index]);

    if (!(result = object != null && hasFunc(object, key))) {
      break;
    }

    object = object[key];
  }

  if (result || ++index != length) {
    return result;
  }

  length = object == null ? 0 : object.length;
  return !!length && isLength(length) && isIndex(key, length) && (isArray(object) || isArguments(object));
}

module.exports = hasPath;

/***/ }),

/***/ "../../../node_modules/lodash/_hashClear.js":
/*!***************************************************************************************************!*\
  !*** /Users/diego.antonelli/Desktop/projects/widgets-resources/node_modules/lodash/_hashClear.js ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var nativeCreate = __webpack_require__(/*! ./_nativeCreate */ "../../../node_modules/lodash/_nativeCreate.js");
/**
 * Removes all key-value entries from the hash.
 *
 * @private
 * @name clear
 * @memberOf Hash
 */


function hashClear() {
  this.__data__ = nativeCreate ? nativeCreate(null) : {};
  this.size = 0;
}

module.exports = hashClear;

/***/ }),

/***/ "../../../node_modules/lodash/_hashDelete.js":
/*!****************************************************************************************************!*\
  !*** /Users/diego.antonelli/Desktop/projects/widgets-resources/node_modules/lodash/_hashDelete.js ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Removes `key` and its value from the hash.
 *
 * @private
 * @name delete
 * @memberOf Hash
 * @param {Object} hash The hash to modify.
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function hashDelete(key) {
  var result = this.has(key) && delete this.__data__[key];
  this.size -= result ? 1 : 0;
  return result;
}

module.exports = hashDelete;

/***/ }),

/***/ "../../../node_modules/lodash/_hashGet.js":
/*!*************************************************************************************************!*\
  !*** /Users/diego.antonelli/Desktop/projects/widgets-resources/node_modules/lodash/_hashGet.js ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var nativeCreate = __webpack_require__(/*! ./_nativeCreate */ "../../../node_modules/lodash/_nativeCreate.js");
/** Used to stand-in for `undefined` hash values. */


var HASH_UNDEFINED = '__lodash_hash_undefined__';
/** Used for built-in method references. */

var objectProto = Object.prototype;
/** Used to check objects for own properties. */

var hasOwnProperty = objectProto.hasOwnProperty;
/**
 * Gets the hash value for `key`.
 *
 * @private
 * @name get
 * @memberOf Hash
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */

function hashGet(key) {
  var data = this.__data__;

  if (nativeCreate) {
    var result = data[key];
    return result === HASH_UNDEFINED ? undefined : result;
  }

  return hasOwnProperty.call(data, key) ? data[key] : undefined;
}

module.exports = hashGet;

/***/ }),

/***/ "../../../node_modules/lodash/_hashHas.js":
/*!*************************************************************************************************!*\
  !*** /Users/diego.antonelli/Desktop/projects/widgets-resources/node_modules/lodash/_hashHas.js ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var nativeCreate = __webpack_require__(/*! ./_nativeCreate */ "../../../node_modules/lodash/_nativeCreate.js");
/** Used for built-in method references. */


var objectProto = Object.prototype;
/** Used to check objects for own properties. */

var hasOwnProperty = objectProto.hasOwnProperty;
/**
 * Checks if a hash value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf Hash
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */

function hashHas(key) {
  var data = this.__data__;
  return nativeCreate ? data[key] !== undefined : hasOwnProperty.call(data, key);
}

module.exports = hashHas;

/***/ }),

/***/ "../../../node_modules/lodash/_hashSet.js":
/*!*************************************************************************************************!*\
  !*** /Users/diego.antonelli/Desktop/projects/widgets-resources/node_modules/lodash/_hashSet.js ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var nativeCreate = __webpack_require__(/*! ./_nativeCreate */ "../../../node_modules/lodash/_nativeCreate.js");
/** Used to stand-in for `undefined` hash values. */


var HASH_UNDEFINED = '__lodash_hash_undefined__';
/**
 * Sets the hash `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf Hash
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the hash instance.
 */

function hashSet(key, value) {
  var data = this.__data__;
  this.size += this.has(key) ? 0 : 1;
  data[key] = nativeCreate && value === undefined ? HASH_UNDEFINED : value;
  return this;
}

module.exports = hashSet;

/***/ }),

/***/ "../../../node_modules/lodash/_initCloneArray.js":
/*!********************************************************************************************************!*\
  !*** /Users/diego.antonelli/Desktop/projects/widgets-resources/node_modules/lodash/_initCloneArray.js ***!
  \********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/** Used for built-in method references. */
var objectProto = Object.prototype;
/** Used to check objects for own properties. */

var hasOwnProperty = objectProto.hasOwnProperty;
/**
 * Initializes an array clone.
 *
 * @private
 * @param {Array} array The array to clone.
 * @returns {Array} Returns the initialized clone.
 */

function initCloneArray(array) {
  var length = array.length,
      result = new array.constructor(length); // Add properties assigned by `RegExp#exec`.

  if (length && typeof array[0] == 'string' && hasOwnProperty.call(array, 'index')) {
    result.index = array.index;
    result.input = array.input;
  }

  return result;
}

module.exports = initCloneArray;

/***/ }),

/***/ "../../../node_modules/lodash/_initCloneByTag.js":
/*!********************************************************************************************************!*\
  !*** /Users/diego.antonelli/Desktop/projects/widgets-resources/node_modules/lodash/_initCloneByTag.js ***!
  \********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var cloneArrayBuffer = __webpack_require__(/*! ./_cloneArrayBuffer */ "../../../node_modules/lodash/_cloneArrayBuffer.js"),
    cloneDataView = __webpack_require__(/*! ./_cloneDataView */ "../../../node_modules/lodash/_cloneDataView.js"),
    cloneRegExp = __webpack_require__(/*! ./_cloneRegExp */ "../../../node_modules/lodash/_cloneRegExp.js"),
    cloneSymbol = __webpack_require__(/*! ./_cloneSymbol */ "../../../node_modules/lodash/_cloneSymbol.js"),
    cloneTypedArray = __webpack_require__(/*! ./_cloneTypedArray */ "../../../node_modules/lodash/_cloneTypedArray.js");
/** `Object#toString` result references. */


var boolTag = '[object Boolean]',
    dateTag = '[object Date]',
    mapTag = '[object Map]',
    numberTag = '[object Number]',
    regexpTag = '[object RegExp]',
    setTag = '[object Set]',
    stringTag = '[object String]',
    symbolTag = '[object Symbol]';
var arrayBufferTag = '[object ArrayBuffer]',
    dataViewTag = '[object DataView]',
    float32Tag = '[object Float32Array]',
    float64Tag = '[object Float64Array]',
    int8Tag = '[object Int8Array]',
    int16Tag = '[object Int16Array]',
    int32Tag = '[object Int32Array]',
    uint8Tag = '[object Uint8Array]',
    uint8ClampedTag = '[object Uint8ClampedArray]',
    uint16Tag = '[object Uint16Array]',
    uint32Tag = '[object Uint32Array]';
/**
 * Initializes an object clone based on its `toStringTag`.
 *
 * **Note:** This function only supports cloning values with tags of
 * `Boolean`, `Date`, `Error`, `Map`, `Number`, `RegExp`, `Set`, or `String`.
 *
 * @private
 * @param {Object} object The object to clone.
 * @param {string} tag The `toStringTag` of the object to clone.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @returns {Object} Returns the initialized clone.
 */

function initCloneByTag(object, tag, isDeep) {
  var Ctor = object.constructor;

  switch (tag) {
    case arrayBufferTag:
      return cloneArrayBuffer(object);

    case boolTag:
    case dateTag:
      return new Ctor(+object);

    case dataViewTag:
      return cloneDataView(object, isDeep);

    case float32Tag:
    case float64Tag:
    case int8Tag:
    case int16Tag:
    case int32Tag:
    case uint8Tag:
    case uint8ClampedTag:
    case uint16Tag:
    case uint32Tag:
      return cloneTypedArray(object, isDeep);

    case mapTag:
      return new Ctor();

    case numberTag:
    case stringTag:
      return new Ctor(object);

    case regexpTag:
      return cloneRegExp(object);

    case setTag:
      return new Ctor();

    case symbolTag:
      return cloneSymbol(object);
  }
}

module.exports = initCloneByTag;

/***/ }),

/***/ "../../../node_modules/lodash/_initCloneObject.js":
/*!*********************************************************************************************************!*\
  !*** /Users/diego.antonelli/Desktop/projects/widgets-resources/node_modules/lodash/_initCloneObject.js ***!
  \*********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var baseCreate = __webpack_require__(/*! ./_baseCreate */ "../../../node_modules/lodash/_baseCreate.js"),
    getPrototype = __webpack_require__(/*! ./_getPrototype */ "../../../node_modules/lodash/_getPrototype.js"),
    isPrototype = __webpack_require__(/*! ./_isPrototype */ "../../../node_modules/lodash/_isPrototype.js");
/**
 * Initializes an object clone.
 *
 * @private
 * @param {Object} object The object to clone.
 * @returns {Object} Returns the initialized clone.
 */


function initCloneObject(object) {
  return typeof object.constructor == 'function' && !isPrototype(object) ? baseCreate(getPrototype(object)) : {};
}

module.exports = initCloneObject;

/***/ }),

/***/ "../../../node_modules/lodash/_isFlattenable.js":
/*!*******************************************************************************************************!*\
  !*** /Users/diego.antonelli/Desktop/projects/widgets-resources/node_modules/lodash/_isFlattenable.js ***!
  \*******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _Symbol = __webpack_require__(/*! ./_Symbol */ "../../../node_modules/lodash/_Symbol.js"),
    isArguments = __webpack_require__(/*! ./isArguments */ "../../../node_modules/lodash/isArguments.js"),
    isArray = __webpack_require__(/*! ./isArray */ "../../../node_modules/lodash/isArray.js");
/** Built-in value references. */


var spreadableSymbol = _Symbol ? _Symbol.isConcatSpreadable : undefined;
/**
 * Checks if `value` is a flattenable `arguments` object or array.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is flattenable, else `false`.
 */

function isFlattenable(value) {
  return isArray(value) || isArguments(value) || !!(spreadableSymbol && value && value[spreadableSymbol]);
}

module.exports = isFlattenable;

/***/ }),

/***/ "../../../node_modules/lodash/_isIndex.js":
/*!*************************************************************************************************!*\
  !*** /Users/diego.antonelli/Desktop/projects/widgets-resources/node_modules/lodash/_isIndex.js ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

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
/** Used as references for various `Number` constants. */


var MAX_SAFE_INTEGER = 9007199254740991;
/** Used to detect unsigned integer values. */

var reIsUint = /^(?:0|[1-9]\d*)$/;
/**
 * Checks if `value` is a valid array-like index.
 *
 * @private
 * @param {*} value The value to check.
 * @param {number} [length=MAX_SAFE_INTEGER] The upper bounds of a valid index.
 * @returns {boolean} Returns `true` if `value` is a valid index, else `false`.
 */

function isIndex(value, length) {
  var type = _typeof(value);

  length = length == null ? MAX_SAFE_INTEGER : length;
  return !!length && (type == 'number' || type != 'symbol' && reIsUint.test(value)) && value > -1 && value % 1 == 0 && value < length;
}

module.exports = isIndex;

/***/ }),

/***/ "../../../node_modules/lodash/_isKey.js":
/*!***********************************************************************************************!*\
  !*** /Users/diego.antonelli/Desktop/projects/widgets-resources/node_modules/lodash/_isKey.js ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

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

var isArray = __webpack_require__(/*! ./isArray */ "../../../node_modules/lodash/isArray.js"),
    isSymbol = __webpack_require__(/*! ./isSymbol */ "../../../node_modules/lodash/isSymbol.js");
/** Used to match property names within property paths. */


var reIsDeepProp = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
    reIsPlainProp = /^\w*$/;
/**
 * Checks if `value` is a property name and not a property path.
 *
 * @private
 * @param {*} value The value to check.
 * @param {Object} [object] The object to query keys on.
 * @returns {boolean} Returns `true` if `value` is a property name, else `false`.
 */

function isKey(value, object) {
  if (isArray(value)) {
    return false;
  }

  var type = _typeof(value);

  if (type == 'number' || type == 'symbol' || type == 'boolean' || value == null || isSymbol(value)) {
    return true;
  }

  return reIsPlainProp.test(value) || !reIsDeepProp.test(value) || object != null && value in Object(object);
}

module.exports = isKey;

/***/ }),

/***/ "../../../node_modules/lodash/_isKeyable.js":
/*!***************************************************************************************************!*\
  !*** /Users/diego.antonelli/Desktop/projects/widgets-resources/node_modules/lodash/_isKeyable.js ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

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
/**
 * Checks if `value` is suitable for use as unique object key.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is suitable, else `false`.
 */


function isKeyable(value) {
  var type = _typeof(value);

  return type == 'string' || type == 'number' || type == 'symbol' || type == 'boolean' ? value !== '__proto__' : value === null;
}

module.exports = isKeyable;

/***/ }),

/***/ "../../../node_modules/lodash/_isMasked.js":
/*!**************************************************************************************************!*\
  !*** /Users/diego.antonelli/Desktop/projects/widgets-resources/node_modules/lodash/_isMasked.js ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var coreJsData = __webpack_require__(/*! ./_coreJsData */ "../../../node_modules/lodash/_coreJsData.js");
/** Used to detect methods masquerading as native. */


var maskSrcKey = function () {
  var uid = /[^.]+$/.exec(coreJsData && coreJsData.keys && coreJsData.keys.IE_PROTO || '');
  return uid ? 'Symbol(src)_1.' + uid : '';
}();
/**
 * Checks if `func` has its source masked.
 *
 * @private
 * @param {Function} func The function to check.
 * @returns {boolean} Returns `true` if `func` is masked, else `false`.
 */


function isMasked(func) {
  return !!maskSrcKey && maskSrcKey in func;
}

module.exports = isMasked;

/***/ }),

/***/ "../../../node_modules/lodash/_isPrototype.js":
/*!*****************************************************************************************************!*\
  !*** /Users/diego.antonelli/Desktop/projects/widgets-resources/node_modules/lodash/_isPrototype.js ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/** Used for built-in method references. */
var objectProto = Object.prototype;
/**
 * Checks if `value` is likely a prototype object.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a prototype, else `false`.
 */

function isPrototype(value) {
  var Ctor = value && value.constructor,
      proto = typeof Ctor == 'function' && Ctor.prototype || objectProto;
  return value === proto;
}

module.exports = isPrototype;

/***/ }),

/***/ "../../../node_modules/lodash/_listCacheClear.js":
/*!********************************************************************************************************!*\
  !*** /Users/diego.antonelli/Desktop/projects/widgets-resources/node_modules/lodash/_listCacheClear.js ***!
  \********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Removes all key-value entries from the list cache.
 *
 * @private
 * @name clear
 * @memberOf ListCache
 */
function listCacheClear() {
  this.__data__ = [];
  this.size = 0;
}

module.exports = listCacheClear;

/***/ }),

/***/ "../../../node_modules/lodash/_listCacheDelete.js":
/*!*********************************************************************************************************!*\
  !*** /Users/diego.antonelli/Desktop/projects/widgets-resources/node_modules/lodash/_listCacheDelete.js ***!
  \*********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var assocIndexOf = __webpack_require__(/*! ./_assocIndexOf */ "../../../node_modules/lodash/_assocIndexOf.js");
/** Used for built-in method references. */


var arrayProto = Array.prototype;
/** Built-in value references. */

var splice = arrayProto.splice;
/**
 * Removes `key` and its value from the list cache.
 *
 * @private
 * @name delete
 * @memberOf ListCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */

function listCacheDelete(key) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  if (index < 0) {
    return false;
  }

  var lastIndex = data.length - 1;

  if (index == lastIndex) {
    data.pop();
  } else {
    splice.call(data, index, 1);
  }

  --this.size;
  return true;
}

module.exports = listCacheDelete;

/***/ }),

/***/ "../../../node_modules/lodash/_listCacheGet.js":
/*!******************************************************************************************************!*\
  !*** /Users/diego.antonelli/Desktop/projects/widgets-resources/node_modules/lodash/_listCacheGet.js ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var assocIndexOf = __webpack_require__(/*! ./_assocIndexOf */ "../../../node_modules/lodash/_assocIndexOf.js");
/**
 * Gets the list cache value for `key`.
 *
 * @private
 * @name get
 * @memberOf ListCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */


function listCacheGet(key) {
  var data = this.__data__,
      index = assocIndexOf(data, key);
  return index < 0 ? undefined : data[index][1];
}

module.exports = listCacheGet;

/***/ }),

/***/ "../../../node_modules/lodash/_listCacheHas.js":
/*!******************************************************************************************************!*\
  !*** /Users/diego.antonelli/Desktop/projects/widgets-resources/node_modules/lodash/_listCacheHas.js ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var assocIndexOf = __webpack_require__(/*! ./_assocIndexOf */ "../../../node_modules/lodash/_assocIndexOf.js");
/**
 * Checks if a list cache value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf ListCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */


function listCacheHas(key) {
  return assocIndexOf(this.__data__, key) > -1;
}

module.exports = listCacheHas;

/***/ }),

/***/ "../../../node_modules/lodash/_listCacheSet.js":
/*!******************************************************************************************************!*\
  !*** /Users/diego.antonelli/Desktop/projects/widgets-resources/node_modules/lodash/_listCacheSet.js ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var assocIndexOf = __webpack_require__(/*! ./_assocIndexOf */ "../../../node_modules/lodash/_assocIndexOf.js");
/**
 * Sets the list cache `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf ListCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the list cache instance.
 */


function listCacheSet(key, value) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  if (index < 0) {
    ++this.size;
    data.push([key, value]);
  } else {
    data[index][1] = value;
  }

  return this;
}

module.exports = listCacheSet;

/***/ }),

/***/ "../../../node_modules/lodash/_mapCacheClear.js":
/*!*******************************************************************************************************!*\
  !*** /Users/diego.antonelli/Desktop/projects/widgets-resources/node_modules/lodash/_mapCacheClear.js ***!
  \*******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var Hash = __webpack_require__(/*! ./_Hash */ "../../../node_modules/lodash/_Hash.js"),
    ListCache = __webpack_require__(/*! ./_ListCache */ "../../../node_modules/lodash/_ListCache.js"),
    Map = __webpack_require__(/*! ./_Map */ "../../../node_modules/lodash/_Map.js");
/**
 * Removes all key-value entries from the map.
 *
 * @private
 * @name clear
 * @memberOf MapCache
 */


function mapCacheClear() {
  this.size = 0;
  this.__data__ = {
    'hash': new Hash(),
    'map': new (Map || ListCache)(),
    'string': new Hash()
  };
}

module.exports = mapCacheClear;

/***/ }),

/***/ "../../../node_modules/lodash/_mapCacheDelete.js":
/*!********************************************************************************************************!*\
  !*** /Users/diego.antonelli/Desktop/projects/widgets-resources/node_modules/lodash/_mapCacheDelete.js ***!
  \********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var getMapData = __webpack_require__(/*! ./_getMapData */ "../../../node_modules/lodash/_getMapData.js");
/**
 * Removes `key` and its value from the map.
 *
 * @private
 * @name delete
 * @memberOf MapCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */


function mapCacheDelete(key) {
  var result = getMapData(this, key)['delete'](key);
  this.size -= result ? 1 : 0;
  return result;
}

module.exports = mapCacheDelete;

/***/ }),

/***/ "../../../node_modules/lodash/_mapCacheGet.js":
/*!*****************************************************************************************************!*\
  !*** /Users/diego.antonelli/Desktop/projects/widgets-resources/node_modules/lodash/_mapCacheGet.js ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var getMapData = __webpack_require__(/*! ./_getMapData */ "../../../node_modules/lodash/_getMapData.js");
/**
 * Gets the map value for `key`.
 *
 * @private
 * @name get
 * @memberOf MapCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */


function mapCacheGet(key) {
  return getMapData(this, key).get(key);
}

module.exports = mapCacheGet;

/***/ }),

/***/ "../../../node_modules/lodash/_mapCacheHas.js":
/*!*****************************************************************************************************!*\
  !*** /Users/diego.antonelli/Desktop/projects/widgets-resources/node_modules/lodash/_mapCacheHas.js ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var getMapData = __webpack_require__(/*! ./_getMapData */ "../../../node_modules/lodash/_getMapData.js");
/**
 * Checks if a map value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf MapCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */


function mapCacheHas(key) {
  return getMapData(this, key).has(key);
}

module.exports = mapCacheHas;

/***/ }),

/***/ "../../../node_modules/lodash/_mapCacheSet.js":
/*!*****************************************************************************************************!*\
  !*** /Users/diego.antonelli/Desktop/projects/widgets-resources/node_modules/lodash/_mapCacheSet.js ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var getMapData = __webpack_require__(/*! ./_getMapData */ "../../../node_modules/lodash/_getMapData.js");
/**
 * Sets the map `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf MapCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the map cache instance.
 */


function mapCacheSet(key, value) {
  var data = getMapData(this, key),
      size = data.size;
  data.set(key, value);
  this.size += data.size == size ? 0 : 1;
  return this;
}

module.exports = mapCacheSet;

/***/ }),

/***/ "../../../node_modules/lodash/_mapToArray.js":
/*!****************************************************************************************************!*\
  !*** /Users/diego.antonelli/Desktop/projects/widgets-resources/node_modules/lodash/_mapToArray.js ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Converts `map` to its key-value pairs.
 *
 * @private
 * @param {Object} map The map to convert.
 * @returns {Array} Returns the key-value pairs.
 */
function mapToArray(map) {
  var index = -1,
      result = Array(map.size);
  map.forEach(function (value, key) {
    result[++index] = [key, value];
  });
  return result;
}

module.exports = mapToArray;

/***/ }),

/***/ "../../../node_modules/lodash/_memoizeCapped.js":
/*!*******************************************************************************************************!*\
  !*** /Users/diego.antonelli/Desktop/projects/widgets-resources/node_modules/lodash/_memoizeCapped.js ***!
  \*******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var memoize = __webpack_require__(/*! ./memoize */ "../../../node_modules/lodash/memoize.js");
/** Used as the maximum memoize cache size. */


var MAX_MEMOIZE_SIZE = 500;
/**
 * A specialized version of `_.memoize` which clears the memoized function's
 * cache when it exceeds `MAX_MEMOIZE_SIZE`.
 *
 * @private
 * @param {Function} func The function to have its output memoized.
 * @returns {Function} Returns the new memoized function.
 */

function memoizeCapped(func) {
  var result = memoize(func, function (key) {
    if (cache.size === MAX_MEMOIZE_SIZE) {
      cache.clear();
    }

    return key;
  });
  var cache = result.cache;
  return result;
}

module.exports = memoizeCapped;

/***/ }),

/***/ "../../../node_modules/lodash/_nativeCreate.js":
/*!******************************************************************************************************!*\
  !*** /Users/diego.antonelli/Desktop/projects/widgets-resources/node_modules/lodash/_nativeCreate.js ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var getNative = __webpack_require__(/*! ./_getNative */ "../../../node_modules/lodash/_getNative.js");
/* Built-in method references that are verified to be native. */


var nativeCreate = getNative(Object, 'create');
module.exports = nativeCreate;

/***/ }),

/***/ "../../../node_modules/lodash/_nativeKeys.js":
/*!****************************************************************************************************!*\
  !*** /Users/diego.antonelli/Desktop/projects/widgets-resources/node_modules/lodash/_nativeKeys.js ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var overArg = __webpack_require__(/*! ./_overArg */ "../../../node_modules/lodash/_overArg.js");
/* Built-in method references for those with the same name as other `lodash` methods. */


var nativeKeys = overArg(Object.keys, Object);
module.exports = nativeKeys;

/***/ }),

/***/ "../../../node_modules/lodash/_nativeKeysIn.js":
/*!******************************************************************************************************!*\
  !*** /Users/diego.antonelli/Desktop/projects/widgets-resources/node_modules/lodash/_nativeKeysIn.js ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * This function is like
 * [`Object.keys`](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
 * except that it includes inherited enumerable properties.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 */
function nativeKeysIn(object) {
  var result = [];

  if (object != null) {
    for (var key in Object(object)) {
      result.push(key);
    }
  }

  return result;
}

module.exports = nativeKeysIn;

/***/ }),

/***/ "../../../node_modules/lodash/_nodeUtil.js":
/*!**************************************************************************************************!*\
  !*** /Users/diego.antonelli/Desktop/projects/widgets-resources/node_modules/lodash/_nodeUtil.js ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {function _typeof(obj) {
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

var freeGlobal = __webpack_require__(/*! ./_freeGlobal */ "../../../node_modules/lodash/_freeGlobal.js");
/** Detect free variable `exports`. */


var freeExports = ( false ? undefined : _typeof(exports)) == 'object' && exports && !exports.nodeType && exports;
/** Detect free variable `module`. */

var freeModule = freeExports && ( false ? undefined : _typeof(module)) == 'object' && module && !module.nodeType && module;
/** Detect the popular CommonJS extension `module.exports`. */

var moduleExports = freeModule && freeModule.exports === freeExports;
/** Detect free variable `process` from Node.js. */

var freeProcess = moduleExports && freeGlobal.process;
/** Used to access faster Node.js helpers. */

var nodeUtil = function () {
  try {
    // Use `util.types` for Node.js 10+.
    var types = freeModule && freeModule.require && freeModule.require('util').types;

    if (types) {
      return types;
    } // Legacy `process.binding('util')` for Node.js < 10.


    return freeProcess && freeProcess.binding && freeProcess.binding('util');
  } catch (e) {}
}();

module.exports = nodeUtil;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../webpack/buildin/module.js */ "../../../node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "../../../node_modules/lodash/_objectToString.js":
/*!********************************************************************************************************!*\
  !*** /Users/diego.antonelli/Desktop/projects/widgets-resources/node_modules/lodash/_objectToString.js ***!
  \********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/** Used for built-in method references. */
var objectProto = Object.prototype;
/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */

var nativeObjectToString = objectProto.toString;
/**
 * Converts `value` to a string using `Object.prototype.toString`.
 *
 * @private
 * @param {*} value The value to convert.
 * @returns {string} Returns the converted string.
 */

function objectToString(value) {
  return nativeObjectToString.call(value);
}

module.exports = objectToString;

/***/ }),

/***/ "../../../node_modules/lodash/_overArg.js":
/*!*************************************************************************************************!*\
  !*** /Users/diego.antonelli/Desktop/projects/widgets-resources/node_modules/lodash/_overArg.js ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Creates a unary function that invokes `func` with its argument transformed.
 *
 * @private
 * @param {Function} func The function to wrap.
 * @param {Function} transform The argument transform.
 * @returns {Function} Returns the new function.
 */
function overArg(func, transform) {
  return function (arg) {
    return func(transform(arg));
  };
}

module.exports = overArg;

/***/ }),

/***/ "../../../node_modules/lodash/_overRest.js":
/*!**************************************************************************************************!*\
  !*** /Users/diego.antonelli/Desktop/projects/widgets-resources/node_modules/lodash/_overRest.js ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var apply = __webpack_require__(/*! ./_apply */ "../../../node_modules/lodash/_apply.js");
/* Built-in method references for those with the same name as other `lodash` methods. */


var nativeMax = Math.max;
/**
 * A specialized version of `baseRest` which transforms the rest array.
 *
 * @private
 * @param {Function} func The function to apply a rest parameter to.
 * @param {number} [start=func.length-1] The start position of the rest parameter.
 * @param {Function} transform The rest array transform.
 * @returns {Function} Returns the new function.
 */

function overRest(func, start, transform) {
  start = nativeMax(start === undefined ? func.length - 1 : start, 0);
  return function () {
    var args = arguments,
        index = -1,
        length = nativeMax(args.length - start, 0),
        array = Array(length);

    while (++index < length) {
      array[index] = args[start + index];
    }

    index = -1;
    var otherArgs = Array(start + 1);

    while (++index < start) {
      otherArgs[index] = args[index];
    }

    otherArgs[start] = transform(array);
    return apply(func, this, otherArgs);
  };
}

module.exports = overRest;

/***/ }),

/***/ "../../../node_modules/lodash/_parent.js":
/*!************************************************************************************************!*\
  !*** /Users/diego.antonelli/Desktop/projects/widgets-resources/node_modules/lodash/_parent.js ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var baseGet = __webpack_require__(/*! ./_baseGet */ "../../../node_modules/lodash/_baseGet.js"),
    baseSlice = __webpack_require__(/*! ./_baseSlice */ "../../../node_modules/lodash/_baseSlice.js");
/**
 * Gets the parent value at `path` of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {Array} path The path to get the parent value of.
 * @returns {*} Returns the parent value.
 */


function parent(object, path) {
  return path.length < 2 ? object : baseGet(object, baseSlice(path, 0, -1));
}

module.exports = parent;

/***/ }),

/***/ "../../../node_modules/lodash/_root.js":
/*!**********************************************************************************************!*\
  !*** /Users/diego.antonelli/Desktop/projects/widgets-resources/node_modules/lodash/_root.js ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

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

var freeGlobal = __webpack_require__(/*! ./_freeGlobal */ "../../../node_modules/lodash/_freeGlobal.js");
/** Detect free variable `self`. */


var freeSelf = (typeof self === "undefined" ? "undefined" : _typeof(self)) == 'object' && self && self.Object === Object && self;
/** Used as a reference to the global object. */

var root = freeGlobal || freeSelf || Function('return this')();
module.exports = root;

/***/ }),

/***/ "../../../node_modules/lodash/_setCacheAdd.js":
/*!*****************************************************************************************************!*\
  !*** /Users/diego.antonelli/Desktop/projects/widgets-resources/node_modules/lodash/_setCacheAdd.js ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/** Used to stand-in for `undefined` hash values. */
var HASH_UNDEFINED = '__lodash_hash_undefined__';
/**
 * Adds `value` to the array cache.
 *
 * @private
 * @name add
 * @memberOf SetCache
 * @alias push
 * @param {*} value The value to cache.
 * @returns {Object} Returns the cache instance.
 */

function setCacheAdd(value) {
  this.__data__.set(value, HASH_UNDEFINED);

  return this;
}

module.exports = setCacheAdd;

/***/ }),

/***/ "../../../node_modules/lodash/_setCacheHas.js":
/*!*****************************************************************************************************!*\
  !*** /Users/diego.antonelli/Desktop/projects/widgets-resources/node_modules/lodash/_setCacheHas.js ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Checks if `value` is in the array cache.
 *
 * @private
 * @name has
 * @memberOf SetCache
 * @param {*} value The value to search for.
 * @returns {number} Returns `true` if `value` is found, else `false`.
 */
function setCacheHas(value) {
  return this.__data__.has(value);
}

module.exports = setCacheHas;

/***/ }),

/***/ "../../../node_modules/lodash/_setToArray.js":
/*!****************************************************************************************************!*\
  !*** /Users/diego.antonelli/Desktop/projects/widgets-resources/node_modules/lodash/_setToArray.js ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Converts `set` to an array of its values.
 *
 * @private
 * @param {Object} set The set to convert.
 * @returns {Array} Returns the values.
 */
function setToArray(set) {
  var index = -1,
      result = Array(set.size);
  set.forEach(function (value) {
    result[++index] = value;
  });
  return result;
}

module.exports = setToArray;

/***/ }),

/***/ "../../../node_modules/lodash/_setToString.js":
/*!*****************************************************************************************************!*\
  !*** /Users/diego.antonelli/Desktop/projects/widgets-resources/node_modules/lodash/_setToString.js ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var baseSetToString = __webpack_require__(/*! ./_baseSetToString */ "../../../node_modules/lodash/_baseSetToString.js"),
    shortOut = __webpack_require__(/*! ./_shortOut */ "../../../node_modules/lodash/_shortOut.js");
/**
 * Sets the `toString` method of `func` to return `string`.
 *
 * @private
 * @param {Function} func The function to modify.
 * @param {Function} string The `toString` result.
 * @returns {Function} Returns `func`.
 */


var setToString = shortOut(baseSetToString);
module.exports = setToString;

/***/ }),

/***/ "../../../node_modules/lodash/_shortOut.js":
/*!**************************************************************************************************!*\
  !*** /Users/diego.antonelli/Desktop/projects/widgets-resources/node_modules/lodash/_shortOut.js ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/** Used to detect hot functions by number of calls within a span of milliseconds. */
var HOT_COUNT = 800,
    HOT_SPAN = 16;
/* Built-in method references for those with the same name as other `lodash` methods. */

var nativeNow = Date.now;
/**
 * Creates a function that'll short out and invoke `identity` instead
 * of `func` when it's called `HOT_COUNT` or more times in `HOT_SPAN`
 * milliseconds.
 *
 * @private
 * @param {Function} func The function to restrict.
 * @returns {Function} Returns the new shortable function.
 */

function shortOut(func) {
  var count = 0,
      lastCalled = 0;
  return function () {
    var stamp = nativeNow(),
        remaining = HOT_SPAN - (stamp - lastCalled);
    lastCalled = stamp;

    if (remaining > 0) {
      if (++count >= HOT_COUNT) {
        return arguments[0];
      }
    } else {
      count = 0;
    }

    return func.apply(undefined, arguments);
  };
}

module.exports = shortOut;

/***/ }),

/***/ "../../../node_modules/lodash/_stackClear.js":
/*!****************************************************************************************************!*\
  !*** /Users/diego.antonelli/Desktop/projects/widgets-resources/node_modules/lodash/_stackClear.js ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var ListCache = __webpack_require__(/*! ./_ListCache */ "../../../node_modules/lodash/_ListCache.js");
/**
 * Removes all key-value entries from the stack.
 *
 * @private
 * @name clear
 * @memberOf Stack
 */


function stackClear() {
  this.__data__ = new ListCache();
  this.size = 0;
}

module.exports = stackClear;

/***/ }),

/***/ "../../../node_modules/lodash/_stackDelete.js":
/*!*****************************************************************************************************!*\
  !*** /Users/diego.antonelli/Desktop/projects/widgets-resources/node_modules/lodash/_stackDelete.js ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Removes `key` and its value from the stack.
 *
 * @private
 * @name delete
 * @memberOf Stack
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function stackDelete(key) {
  var data = this.__data__,
      result = data['delete'](key);
  this.size = data.size;
  return result;
}

module.exports = stackDelete;

/***/ }),

/***/ "../../../node_modules/lodash/_stackGet.js":
/*!**************************************************************************************************!*\
  !*** /Users/diego.antonelli/Desktop/projects/widgets-resources/node_modules/lodash/_stackGet.js ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Gets the stack value for `key`.
 *
 * @private
 * @name get
 * @memberOf Stack
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function stackGet(key) {
  return this.__data__.get(key);
}

module.exports = stackGet;

/***/ }),

/***/ "../../../node_modules/lodash/_stackHas.js":
/*!**************************************************************************************************!*\
  !*** /Users/diego.antonelli/Desktop/projects/widgets-resources/node_modules/lodash/_stackHas.js ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Checks if a stack value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf Stack
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function stackHas(key) {
  return this.__data__.has(key);
}

module.exports = stackHas;

/***/ }),

/***/ "../../../node_modules/lodash/_stackSet.js":
/*!**************************************************************************************************!*\
  !*** /Users/diego.antonelli/Desktop/projects/widgets-resources/node_modules/lodash/_stackSet.js ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var ListCache = __webpack_require__(/*! ./_ListCache */ "../../../node_modules/lodash/_ListCache.js"),
    Map = __webpack_require__(/*! ./_Map */ "../../../node_modules/lodash/_Map.js"),
    MapCache = __webpack_require__(/*! ./_MapCache */ "../../../node_modules/lodash/_MapCache.js");
/** Used as the size to enable large array optimizations. */


var LARGE_ARRAY_SIZE = 200;
/**
 * Sets the stack `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf Stack
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the stack cache instance.
 */

function stackSet(key, value) {
  var data = this.__data__;

  if (data instanceof ListCache) {
    var pairs = data.__data__;

    if (!Map || pairs.length < LARGE_ARRAY_SIZE - 1) {
      pairs.push([key, value]);
      this.size = ++data.size;
      return this;
    }

    data = this.__data__ = new MapCache(pairs);
  }

  data.set(key, value);
  this.size = data.size;
  return this;
}

module.exports = stackSet;

/***/ }),

/***/ "../../../node_modules/lodash/_stringToPath.js":
/*!******************************************************************************************************!*\
  !*** /Users/diego.antonelli/Desktop/projects/widgets-resources/node_modules/lodash/_stringToPath.js ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var memoizeCapped = __webpack_require__(/*! ./_memoizeCapped */ "../../../node_modules/lodash/_memoizeCapped.js");
/** Used to match property names within property paths. */


var rePropName = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g;
/** Used to match backslashes in property paths. */

var reEscapeChar = /\\(\\)?/g;
/**
 * Converts `string` to a property path array.
 *
 * @private
 * @param {string} string The string to convert.
 * @returns {Array} Returns the property path array.
 */

var stringToPath = memoizeCapped(function (string) {
  var result = [];

  if (string.charCodeAt(0) === 46
  /* . */
  ) {
      result.push('');
    }

  string.replace(rePropName, function (match, number, quote, subString) {
    result.push(quote ? subString.replace(reEscapeChar, '$1') : number || match);
  });
  return result;
});
module.exports = stringToPath;

/***/ }),

/***/ "../../../node_modules/lodash/_toKey.js":
/*!***********************************************************************************************!*\
  !*** /Users/diego.antonelli/Desktop/projects/widgets-resources/node_modules/lodash/_toKey.js ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isSymbol = __webpack_require__(/*! ./isSymbol */ "../../../node_modules/lodash/isSymbol.js");
/** Used as references for various `Number` constants. */


var INFINITY = 1 / 0;
/**
 * Converts `value` to a string key if it's not a string or symbol.
 *
 * @private
 * @param {*} value The value to inspect.
 * @returns {string|symbol} Returns the key.
 */

function toKey(value) {
  if (typeof value == 'string' || isSymbol(value)) {
    return value;
  }

  var result = value + '';
  return result == '0' && 1 / value == -INFINITY ? '-0' : result;
}

module.exports = toKey;

/***/ }),

/***/ "../../../node_modules/lodash/_toSource.js":
/*!**************************************************************************************************!*\
  !*** /Users/diego.antonelli/Desktop/projects/widgets-resources/node_modules/lodash/_toSource.js ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/** Used for built-in method references. */
var funcProto = Function.prototype;
/** Used to resolve the decompiled source of functions. */

var funcToString = funcProto.toString;
/**
 * Converts `func` to its source code.
 *
 * @private
 * @param {Function} func The function to convert.
 * @returns {string} Returns the source code.
 */

function toSource(func) {
  if (func != null) {
    try {
      return funcToString.call(func);
    } catch (e) {}

    try {
      return func + '';
    } catch (e) {}
  }

  return '';
}

module.exports = toSource;

/***/ }),

/***/ "../../../node_modules/lodash/constant.js":
/*!*************************************************************************************************!*\
  !*** /Users/diego.antonelli/Desktop/projects/widgets-resources/node_modules/lodash/constant.js ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Creates a function that returns `value`.
 *
 * @static
 * @memberOf _
 * @since 2.4.0
 * @category Util
 * @param {*} value The value to return from the new function.
 * @returns {Function} Returns the new constant function.
 * @example
 *
 * var objects = _.times(2, _.constant({ 'a': 1 }));
 *
 * console.log(objects);
 * // => [{ 'a': 1 }, { 'a': 1 }]
 *
 * console.log(objects[0] === objects[1]);
 * // => true
 */
function constant(value) {
  return function () {
    return value;
  };
}

module.exports = constant;

/***/ }),

/***/ "../../../node_modules/lodash/eq.js":
/*!*******************************************************************************************!*\
  !*** /Users/diego.antonelli/Desktop/projects/widgets-resources/node_modules/lodash/eq.js ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Performs a
 * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * comparison between two values to determine if they are equivalent.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
 * @example
 *
 * var object = { 'a': 1 };
 * var other = { 'a': 1 };
 *
 * _.eq(object, object);
 * // => true
 *
 * _.eq(object, other);
 * // => false
 *
 * _.eq('a', 'a');
 * // => true
 *
 * _.eq('a', Object('a'));
 * // => false
 *
 * _.eq(NaN, NaN);
 * // => true
 */
function eq(value, other) {
  return value === other || value !== value && other !== other;
}

module.exports = eq;

/***/ }),

/***/ "../../../node_modules/lodash/flatten.js":
/*!************************************************************************************************!*\
  !*** /Users/diego.antonelli/Desktop/projects/widgets-resources/node_modules/lodash/flatten.js ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var baseFlatten = __webpack_require__(/*! ./_baseFlatten */ "../../../node_modules/lodash/_baseFlatten.js");
/**
 * Flattens `array` a single level deep.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Array
 * @param {Array} array The array to flatten.
 * @returns {Array} Returns the new flattened array.
 * @example
 *
 * _.flatten([1, [2, [3, [4]], 5]]);
 * // => [1, 2, [3, [4]], 5]
 */


function flatten(array) {
  var length = array == null ? 0 : array.length;
  return length ? baseFlatten(array, 1) : [];
}

module.exports = flatten;

/***/ }),

/***/ "../../../node_modules/lodash/hasIn.js":
/*!**********************************************************************************************!*\
  !*** /Users/diego.antonelli/Desktop/projects/widgets-resources/node_modules/lodash/hasIn.js ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var baseHasIn = __webpack_require__(/*! ./_baseHasIn */ "../../../node_modules/lodash/_baseHasIn.js"),
    hasPath = __webpack_require__(/*! ./_hasPath */ "../../../node_modules/lodash/_hasPath.js");
/**
 * Checks if `path` is a direct or inherited property of `object`.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Object
 * @param {Object} object The object to query.
 * @param {Array|string} path The path to check.
 * @returns {boolean} Returns `true` if `path` exists, else `false`.
 * @example
 *
 * var object = _.create({ 'a': _.create({ 'b': 2 }) });
 *
 * _.hasIn(object, 'a');
 * // => true
 *
 * _.hasIn(object, 'a.b');
 * // => true
 *
 * _.hasIn(object, ['a', 'b']);
 * // => true
 *
 * _.hasIn(object, 'b');
 * // => false
 */


function hasIn(object, path) {
  return object != null && hasPath(object, path, baseHasIn);
}

module.exports = hasIn;

/***/ }),

/***/ "../../../node_modules/lodash/identity.js":
/*!*************************************************************************************************!*\
  !*** /Users/diego.antonelli/Desktop/projects/widgets-resources/node_modules/lodash/identity.js ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * This method returns the first argument it receives.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Util
 * @param {*} value Any value.
 * @returns {*} Returns `value`.
 * @example
 *
 * var object = { 'a': 1 };
 *
 * console.log(_.identity(object) === object);
 * // => true
 */
function identity(value) {
  return value;
}

module.exports = identity;

/***/ }),

/***/ "../../../node_modules/lodash/isArguments.js":
/*!****************************************************************************************************!*\
  !*** /Users/diego.antonelli/Desktop/projects/widgets-resources/node_modules/lodash/isArguments.js ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var baseIsArguments = __webpack_require__(/*! ./_baseIsArguments */ "../../../node_modules/lodash/_baseIsArguments.js"),
    isObjectLike = __webpack_require__(/*! ./isObjectLike */ "../../../node_modules/lodash/isObjectLike.js");
/** Used for built-in method references. */


var objectProto = Object.prototype;
/** Used to check objects for own properties. */

var hasOwnProperty = objectProto.hasOwnProperty;
/** Built-in value references. */

var propertyIsEnumerable = objectProto.propertyIsEnumerable;
/**
 * Checks if `value` is likely an `arguments` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
 *  else `false`.
 * @example
 *
 * _.isArguments(function() { return arguments; }());
 * // => true
 *
 * _.isArguments([1, 2, 3]);
 * // => false
 */

var isArguments = baseIsArguments(function () {
  return arguments;
}()) ? baseIsArguments : function (value) {
  return isObjectLike(value) && hasOwnProperty.call(value, 'callee') && !propertyIsEnumerable.call(value, 'callee');
};
module.exports = isArguments;

/***/ }),

/***/ "../../../node_modules/lodash/isArray.js":
/*!************************************************************************************************!*\
  !*** /Users/diego.antonelli/Desktop/projects/widgets-resources/node_modules/lodash/isArray.js ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Checks if `value` is classified as an `Array` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an array, else `false`.
 * @example
 *
 * _.isArray([1, 2, 3]);
 * // => true
 *
 * _.isArray(document.body.children);
 * // => false
 *
 * _.isArray('abc');
 * // => false
 *
 * _.isArray(_.noop);
 * // => false
 */
var isArray = Array.isArray;
module.exports = isArray;

/***/ }),

/***/ "../../../node_modules/lodash/isArrayLike.js":
/*!****************************************************************************************************!*\
  !*** /Users/diego.antonelli/Desktop/projects/widgets-resources/node_modules/lodash/isArrayLike.js ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isFunction = __webpack_require__(/*! ./isFunction */ "../../../node_modules/lodash/isFunction.js"),
    isLength = __webpack_require__(/*! ./isLength */ "../../../node_modules/lodash/isLength.js");
/**
 * Checks if `value` is array-like. A value is considered array-like if it's
 * not a function and has a `value.length` that's an integer greater than or
 * equal to `0` and less than or equal to `Number.MAX_SAFE_INTEGER`.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is array-like, else `false`.
 * @example
 *
 * _.isArrayLike([1, 2, 3]);
 * // => true
 *
 * _.isArrayLike(document.body.children);
 * // => true
 *
 * _.isArrayLike('abc');
 * // => true
 *
 * _.isArrayLike(_.noop);
 * // => false
 */


function isArrayLike(value) {
  return value != null && isLength(value.length) && !isFunction(value);
}

module.exports = isArrayLike;

/***/ }),

/***/ "../../../node_modules/lodash/isBuffer.js":
/*!*************************************************************************************************!*\
  !*** /Users/diego.antonelli/Desktop/projects/widgets-resources/node_modules/lodash/isBuffer.js ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {function _typeof(obj) {
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

var root = __webpack_require__(/*! ./_root */ "../../../node_modules/lodash/_root.js"),
    stubFalse = __webpack_require__(/*! ./stubFalse */ "../../../node_modules/lodash/stubFalse.js");
/** Detect free variable `exports`. */


var freeExports = ( false ? undefined : _typeof(exports)) == 'object' && exports && !exports.nodeType && exports;
/** Detect free variable `module`. */

var freeModule = freeExports && ( false ? undefined : _typeof(module)) == 'object' && module && !module.nodeType && module;
/** Detect the popular CommonJS extension `module.exports`. */

var moduleExports = freeModule && freeModule.exports === freeExports;
/** Built-in value references. */

var Buffer = moduleExports ? root.Buffer : undefined;
/* Built-in method references for those with the same name as other `lodash` methods. */

var nativeIsBuffer = Buffer ? Buffer.isBuffer : undefined;
/**
 * Checks if `value` is a buffer.
 *
 * @static
 * @memberOf _
 * @since 4.3.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a buffer, else `false`.
 * @example
 *
 * _.isBuffer(new Buffer(2));
 * // => true
 *
 * _.isBuffer(new Uint8Array(2));
 * // => false
 */

var isBuffer = nativeIsBuffer || stubFalse;
module.exports = isBuffer;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../webpack/buildin/module.js */ "../../../node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "../../../node_modules/lodash/isEqual.js":
/*!************************************************************************************************!*\
  !*** /Users/diego.antonelli/Desktop/projects/widgets-resources/node_modules/lodash/isEqual.js ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var baseIsEqual = __webpack_require__(/*! ./_baseIsEqual */ "../../../node_modules/lodash/_baseIsEqual.js");
/**
 * Performs a deep comparison between two values to determine if they are
 * equivalent.
 *
 * **Note:** This method supports comparing arrays, array buffers, booleans,
 * date objects, error objects, maps, numbers, `Object` objects, regexes,
 * sets, strings, symbols, and typed arrays. `Object` objects are compared
 * by their own, not inherited, enumerable properties. Functions and DOM
 * nodes are compared by strict equality, i.e. `===`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
 * @example
 *
 * var object = { 'a': 1 };
 * var other = { 'a': 1 };
 *
 * _.isEqual(object, other);
 * // => true
 *
 * object === other;
 * // => false
 */


function isEqual(value, other) {
  return baseIsEqual(value, other);
}

module.exports = isEqual;

/***/ }),

/***/ "../../../node_modules/lodash/isFunction.js":
/*!***************************************************************************************************!*\
  !*** /Users/diego.antonelli/Desktop/projects/widgets-resources/node_modules/lodash/isFunction.js ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var baseGetTag = __webpack_require__(/*! ./_baseGetTag */ "../../../node_modules/lodash/_baseGetTag.js"),
    isObject = __webpack_require__(/*! ./isObject */ "../../../node_modules/lodash/isObject.js");
/** `Object#toString` result references. */


var asyncTag = '[object AsyncFunction]',
    funcTag = '[object Function]',
    genTag = '[object GeneratorFunction]',
    proxyTag = '[object Proxy]';
/**
 * Checks if `value` is classified as a `Function` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a function, else `false`.
 * @example
 *
 * _.isFunction(_);
 * // => true
 *
 * _.isFunction(/abc/);
 * // => false
 */

function isFunction(value) {
  if (!isObject(value)) {
    return false;
  } // The use of `Object#toString` avoids issues with the `typeof` operator
  // in Safari 9 which returns 'object' for typed arrays and other constructors.


  var tag = baseGetTag(value);
  return tag == funcTag || tag == genTag || tag == asyncTag || tag == proxyTag;
}

module.exports = isFunction;

/***/ }),

/***/ "../../../node_modules/lodash/isLength.js":
/*!*************************************************************************************************!*\
  !*** /Users/diego.antonelli/Desktop/projects/widgets-resources/node_modules/lodash/isLength.js ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/** Used as references for various `Number` constants. */
var MAX_SAFE_INTEGER = 9007199254740991;
/**
 * Checks if `value` is a valid array-like length.
 *
 * **Note:** This method is loosely based on
 * [`ToLength`](http://ecma-international.org/ecma-262/7.0/#sec-tolength).
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.
 * @example
 *
 * _.isLength(3);
 * // => true
 *
 * _.isLength(Number.MIN_VALUE);
 * // => false
 *
 * _.isLength(Infinity);
 * // => false
 *
 * _.isLength('3');
 * // => false
 */

function isLength(value) {
  return typeof value == 'number' && value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
}

module.exports = isLength;

/***/ }),

/***/ "../../../node_modules/lodash/isMap.js":
/*!**********************************************************************************************!*\
  !*** /Users/diego.antonelli/Desktop/projects/widgets-resources/node_modules/lodash/isMap.js ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var baseIsMap = __webpack_require__(/*! ./_baseIsMap */ "../../../node_modules/lodash/_baseIsMap.js"),
    baseUnary = __webpack_require__(/*! ./_baseUnary */ "../../../node_modules/lodash/_baseUnary.js"),
    nodeUtil = __webpack_require__(/*! ./_nodeUtil */ "../../../node_modules/lodash/_nodeUtil.js");
/* Node.js helper references. */


var nodeIsMap = nodeUtil && nodeUtil.isMap;
/**
 * Checks if `value` is classified as a `Map` object.
 *
 * @static
 * @memberOf _
 * @since 4.3.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a map, else `false`.
 * @example
 *
 * _.isMap(new Map);
 * // => true
 *
 * _.isMap(new WeakMap);
 * // => false
 */

var isMap = nodeIsMap ? baseUnary(nodeIsMap) : baseIsMap;
module.exports = isMap;

/***/ }),

/***/ "../../../node_modules/lodash/isObject.js":
/*!*************************************************************************************************!*\
  !*** /Users/diego.antonelli/Desktop/projects/widgets-resources/node_modules/lodash/isObject.js ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

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
/**
 * Checks if `value` is the
 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(_.noop);
 * // => true
 *
 * _.isObject(null);
 * // => false
 */


function isObject(value) {
  var type = _typeof(value);

  return value != null && (type == 'object' || type == 'function');
}

module.exports = isObject;

/***/ }),

/***/ "../../../node_modules/lodash/isObjectLike.js":
/*!*****************************************************************************************************!*\
  !*** /Users/diego.antonelli/Desktop/projects/widgets-resources/node_modules/lodash/isObjectLike.js ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

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
/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */


function isObjectLike(value) {
  return value != null && _typeof(value) == 'object';
}

module.exports = isObjectLike;

/***/ }),

/***/ "../../../node_modules/lodash/isPlainObject.js":
/*!******************************************************************************************************!*\
  !*** /Users/diego.antonelli/Desktop/projects/widgets-resources/node_modules/lodash/isPlainObject.js ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var baseGetTag = __webpack_require__(/*! ./_baseGetTag */ "../../../node_modules/lodash/_baseGetTag.js"),
    getPrototype = __webpack_require__(/*! ./_getPrototype */ "../../../node_modules/lodash/_getPrototype.js"),
    isObjectLike = __webpack_require__(/*! ./isObjectLike */ "../../../node_modules/lodash/isObjectLike.js");
/** `Object#toString` result references. */


var objectTag = '[object Object]';
/** Used for built-in method references. */

var funcProto = Function.prototype,
    objectProto = Object.prototype;
/** Used to resolve the decompiled source of functions. */

var funcToString = funcProto.toString;
/** Used to check objects for own properties. */

var hasOwnProperty = objectProto.hasOwnProperty;
/** Used to infer the `Object` constructor. */

var objectCtorString = funcToString.call(Object);
/**
 * Checks if `value` is a plain object, that is, an object created by the
 * `Object` constructor or one with a `[[Prototype]]` of `null`.
 *
 * @static
 * @memberOf _
 * @since 0.8.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a plain object, else `false`.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 * }
 *
 * _.isPlainObject(new Foo);
 * // => false
 *
 * _.isPlainObject([1, 2, 3]);
 * // => false
 *
 * _.isPlainObject({ 'x': 0, 'y': 0 });
 * // => true
 *
 * _.isPlainObject(Object.create(null));
 * // => true
 */

function isPlainObject(value) {
  if (!isObjectLike(value) || baseGetTag(value) != objectTag) {
    return false;
  }

  var proto = getPrototype(value);

  if (proto === null) {
    return true;
  }

  var Ctor = hasOwnProperty.call(proto, 'constructor') && proto.constructor;
  return typeof Ctor == 'function' && Ctor instanceof Ctor && funcToString.call(Ctor) == objectCtorString;
}

module.exports = isPlainObject;

/***/ }),

/***/ "../../../node_modules/lodash/isSet.js":
/*!**********************************************************************************************!*\
  !*** /Users/diego.antonelli/Desktop/projects/widgets-resources/node_modules/lodash/isSet.js ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var baseIsSet = __webpack_require__(/*! ./_baseIsSet */ "../../../node_modules/lodash/_baseIsSet.js"),
    baseUnary = __webpack_require__(/*! ./_baseUnary */ "../../../node_modules/lodash/_baseUnary.js"),
    nodeUtil = __webpack_require__(/*! ./_nodeUtil */ "../../../node_modules/lodash/_nodeUtil.js");
/* Node.js helper references. */


var nodeIsSet = nodeUtil && nodeUtil.isSet;
/**
 * Checks if `value` is classified as a `Set` object.
 *
 * @static
 * @memberOf _
 * @since 4.3.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a set, else `false`.
 * @example
 *
 * _.isSet(new Set);
 * // => true
 *
 * _.isSet(new WeakSet);
 * // => false
 */

var isSet = nodeIsSet ? baseUnary(nodeIsSet) : baseIsSet;
module.exports = isSet;

/***/ }),

/***/ "../../../node_modules/lodash/isString.js":
/*!*************************************************************************************************!*\
  !*** /Users/diego.antonelli/Desktop/projects/widgets-resources/node_modules/lodash/isString.js ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var baseGetTag = __webpack_require__(/*! ./_baseGetTag */ "../../../node_modules/lodash/_baseGetTag.js"),
    isArray = __webpack_require__(/*! ./isArray */ "../../../node_modules/lodash/isArray.js"),
    isObjectLike = __webpack_require__(/*! ./isObjectLike */ "../../../node_modules/lodash/isObjectLike.js");
/** `Object#toString` result references. */


var stringTag = '[object String]';
/**
 * Checks if `value` is classified as a `String` primitive or object.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a string, else `false`.
 * @example
 *
 * _.isString('abc');
 * // => true
 *
 * _.isString(1);
 * // => false
 */

function isString(value) {
  return typeof value == 'string' || !isArray(value) && isObjectLike(value) && baseGetTag(value) == stringTag;
}

module.exports = isString;

/***/ }),

/***/ "../../../node_modules/lodash/isSymbol.js":
/*!*************************************************************************************************!*\
  !*** /Users/diego.antonelli/Desktop/projects/widgets-resources/node_modules/lodash/isSymbol.js ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

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

var baseGetTag = __webpack_require__(/*! ./_baseGetTag */ "../../../node_modules/lodash/_baseGetTag.js"),
    isObjectLike = __webpack_require__(/*! ./isObjectLike */ "../../../node_modules/lodash/isObjectLike.js");
/** `Object#toString` result references. */


var symbolTag = '[object Symbol]';
/**
 * Checks if `value` is classified as a `Symbol` primitive or object.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.
 * @example
 *
 * _.isSymbol(Symbol.iterator);
 * // => true
 *
 * _.isSymbol('abc');
 * // => false
 */

function isSymbol(value) {
  return _typeof(value) == 'symbol' || isObjectLike(value) && baseGetTag(value) == symbolTag;
}

module.exports = isSymbol;

/***/ }),

/***/ "../../../node_modules/lodash/isTypedArray.js":
/*!*****************************************************************************************************!*\
  !*** /Users/diego.antonelli/Desktop/projects/widgets-resources/node_modules/lodash/isTypedArray.js ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var baseIsTypedArray = __webpack_require__(/*! ./_baseIsTypedArray */ "../../../node_modules/lodash/_baseIsTypedArray.js"),
    baseUnary = __webpack_require__(/*! ./_baseUnary */ "../../../node_modules/lodash/_baseUnary.js"),
    nodeUtil = __webpack_require__(/*! ./_nodeUtil */ "../../../node_modules/lodash/_nodeUtil.js");
/* Node.js helper references. */


var nodeIsTypedArray = nodeUtil && nodeUtil.isTypedArray;
/**
 * Checks if `value` is classified as a typed array.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
 * @example
 *
 * _.isTypedArray(new Uint8Array);
 * // => true
 *
 * _.isTypedArray([]);
 * // => false
 */

var isTypedArray = nodeIsTypedArray ? baseUnary(nodeIsTypedArray) : baseIsTypedArray;
module.exports = isTypedArray;

/***/ }),

/***/ "../../../node_modules/lodash/keys.js":
/*!*********************************************************************************************!*\
  !*** /Users/diego.antonelli/Desktop/projects/widgets-resources/node_modules/lodash/keys.js ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var arrayLikeKeys = __webpack_require__(/*! ./_arrayLikeKeys */ "../../../node_modules/lodash/_arrayLikeKeys.js"),
    baseKeys = __webpack_require__(/*! ./_baseKeys */ "../../../node_modules/lodash/_baseKeys.js"),
    isArrayLike = __webpack_require__(/*! ./isArrayLike */ "../../../node_modules/lodash/isArrayLike.js");
/**
 * Creates an array of the own enumerable property names of `object`.
 *
 * **Note:** Non-object values are coerced to objects. See the
 * [ES spec](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
 * for more details.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Object
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 *   this.b = 2;
 * }
 *
 * Foo.prototype.c = 3;
 *
 * _.keys(new Foo);
 * // => ['a', 'b'] (iteration order is not guaranteed)
 *
 * _.keys('hi');
 * // => ['0', '1']
 */


function keys(object) {
  return isArrayLike(object) ? arrayLikeKeys(object) : baseKeys(object);
}

module.exports = keys;

/***/ }),

/***/ "../../../node_modules/lodash/keysIn.js":
/*!***********************************************************************************************!*\
  !*** /Users/diego.antonelli/Desktop/projects/widgets-resources/node_modules/lodash/keysIn.js ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var arrayLikeKeys = __webpack_require__(/*! ./_arrayLikeKeys */ "../../../node_modules/lodash/_arrayLikeKeys.js"),
    baseKeysIn = __webpack_require__(/*! ./_baseKeysIn */ "../../../node_modules/lodash/_baseKeysIn.js"),
    isArrayLike = __webpack_require__(/*! ./isArrayLike */ "../../../node_modules/lodash/isArrayLike.js");
/**
 * Creates an array of the own and inherited enumerable property names of `object`.
 *
 * **Note:** Non-object values are coerced to objects.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category Object
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 *   this.b = 2;
 * }
 *
 * Foo.prototype.c = 3;
 *
 * _.keysIn(new Foo);
 * // => ['a', 'b', 'c'] (iteration order is not guaranteed)
 */


function keysIn(object) {
  return isArrayLike(object) ? arrayLikeKeys(object, true) : baseKeysIn(object);
}

module.exports = keysIn;

/***/ }),

/***/ "../../../node_modules/lodash/last.js":
/*!*********************************************************************************************!*\
  !*** /Users/diego.antonelli/Desktop/projects/widgets-resources/node_modules/lodash/last.js ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Gets the last element of `array`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Array
 * @param {Array} array The array to query.
 * @returns {*} Returns the last element of `array`.
 * @example
 *
 * _.last([1, 2, 3]);
 * // => 3
 */
function last(array) {
  var length = array == null ? 0 : array.length;
  return length ? array[length - 1] : undefined;
}

module.exports = last;

/***/ }),

/***/ "../../../node_modules/lodash/memoize.js":
/*!************************************************************************************************!*\
  !*** /Users/diego.antonelli/Desktop/projects/widgets-resources/node_modules/lodash/memoize.js ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var MapCache = __webpack_require__(/*! ./_MapCache */ "../../../node_modules/lodash/_MapCache.js");
/** Error message constants. */


var FUNC_ERROR_TEXT = 'Expected a function';
/**
 * Creates a function that memoizes the result of `func`. If `resolver` is
 * provided, it determines the cache key for storing the result based on the
 * arguments provided to the memoized function. By default, the first argument
 * provided to the memoized function is used as the map cache key. The `func`
 * is invoked with the `this` binding of the memoized function.
 *
 * **Note:** The cache is exposed as the `cache` property on the memoized
 * function. Its creation may be customized by replacing the `_.memoize.Cache`
 * constructor with one whose instances implement the
 * [`Map`](http://ecma-international.org/ecma-262/7.0/#sec-properties-of-the-map-prototype-object)
 * method interface of `clear`, `delete`, `get`, `has`, and `set`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Function
 * @param {Function} func The function to have its output memoized.
 * @param {Function} [resolver] The function to resolve the cache key.
 * @returns {Function} Returns the new memoized function.
 * @example
 *
 * var object = { 'a': 1, 'b': 2 };
 * var other = { 'c': 3, 'd': 4 };
 *
 * var values = _.memoize(_.values);
 * values(object);
 * // => [1, 2]
 *
 * values(other);
 * // => [3, 4]
 *
 * object.a = 2;
 * values(object);
 * // => [1, 2]
 *
 * // Modify the result cache.
 * values.cache.set(object, ['a', 'b']);
 * values(object);
 * // => ['a', 'b']
 *
 * // Replace `_.memoize.Cache`.
 * _.memoize.Cache = WeakMap;
 */

function memoize(func, resolver) {
  if (typeof func != 'function' || resolver != null && typeof resolver != 'function') {
    throw new TypeError(FUNC_ERROR_TEXT);
  }

  var memoized = function memoized() {
    var args = arguments,
        key = resolver ? resolver.apply(this, args) : args[0],
        cache = memoized.cache;

    if (cache.has(key)) {
      return cache.get(key);
    }

    var result = func.apply(this, args);
    memoized.cache = cache.set(key, result) || cache;
    return result;
  };

  memoized.cache = new (memoize.Cache || MapCache)();
  return memoized;
} // Expose `MapCache`.


memoize.Cache = MapCache;
module.exports = memoize;

/***/ }),

/***/ "../../../node_modules/lodash/omit.js":
/*!*********************************************************************************************!*\
  !*** /Users/diego.antonelli/Desktop/projects/widgets-resources/node_modules/lodash/omit.js ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var arrayMap = __webpack_require__(/*! ./_arrayMap */ "../../../node_modules/lodash/_arrayMap.js"),
    baseClone = __webpack_require__(/*! ./_baseClone */ "../../../node_modules/lodash/_baseClone.js"),
    baseUnset = __webpack_require__(/*! ./_baseUnset */ "../../../node_modules/lodash/_baseUnset.js"),
    castPath = __webpack_require__(/*! ./_castPath */ "../../../node_modules/lodash/_castPath.js"),
    copyObject = __webpack_require__(/*! ./_copyObject */ "../../../node_modules/lodash/_copyObject.js"),
    customOmitClone = __webpack_require__(/*! ./_customOmitClone */ "../../../node_modules/lodash/_customOmitClone.js"),
    flatRest = __webpack_require__(/*! ./_flatRest */ "../../../node_modules/lodash/_flatRest.js"),
    getAllKeysIn = __webpack_require__(/*! ./_getAllKeysIn */ "../../../node_modules/lodash/_getAllKeysIn.js");
/** Used to compose bitmasks for cloning. */


var CLONE_DEEP_FLAG = 1,
    CLONE_FLAT_FLAG = 2,
    CLONE_SYMBOLS_FLAG = 4;
/**
 * The opposite of `_.pick`; this method creates an object composed of the
 * own and inherited enumerable property paths of `object` that are not omitted.
 *
 * **Note:** This method is considerably slower than `_.pick`.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Object
 * @param {Object} object The source object.
 * @param {...(string|string[])} [paths] The property paths to omit.
 * @returns {Object} Returns the new object.
 * @example
 *
 * var object = { 'a': 1, 'b': '2', 'c': 3 };
 *
 * _.omit(object, ['a', 'c']);
 * // => { 'b': '2' }
 */

var omit = flatRest(function (object, paths) {
  var result = {};

  if (object == null) {
    return result;
  }

  var isDeep = false;
  paths = arrayMap(paths, function (path) {
    path = castPath(path, object);
    isDeep || (isDeep = path.length > 1);
    return path;
  });
  copyObject(object, getAllKeysIn(object), result);

  if (isDeep) {
    result = baseClone(result, CLONE_DEEP_FLAG | CLONE_FLAT_FLAG | CLONE_SYMBOLS_FLAG, customOmitClone);
  }

  var length = paths.length;

  while (length--) {
    baseUnset(result, paths[length]);
  }

  return result;
});
module.exports = omit;

/***/ }),

/***/ "../../../node_modules/lodash/pick.js":
/*!*********************************************************************************************!*\
  !*** /Users/diego.antonelli/Desktop/projects/widgets-resources/node_modules/lodash/pick.js ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var basePick = __webpack_require__(/*! ./_basePick */ "../../../node_modules/lodash/_basePick.js"),
    flatRest = __webpack_require__(/*! ./_flatRest */ "../../../node_modules/lodash/_flatRest.js");
/**
 * Creates an object composed of the picked `object` properties.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Object
 * @param {Object} object The source object.
 * @param {...(string|string[])} [paths] The property paths to pick.
 * @returns {Object} Returns the new object.
 * @example
 *
 * var object = { 'a': 1, 'b': '2', 'c': 3 };
 *
 * _.pick(object, ['a', 'c']);
 * // => { 'a': 1, 'c': 3 }
 */


var pick = flatRest(function (object, paths) {
  return object == null ? {} : basePick(object, paths);
});
module.exports = pick;

/***/ }),

/***/ "../../../node_modules/lodash/stubArray.js":
/*!**************************************************************************************************!*\
  !*** /Users/diego.antonelli/Desktop/projects/widgets-resources/node_modules/lodash/stubArray.js ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * This method returns a new empty array.
 *
 * @static
 * @memberOf _
 * @since 4.13.0
 * @category Util
 * @returns {Array} Returns the new empty array.
 * @example
 *
 * var arrays = _.times(2, _.stubArray);
 *
 * console.log(arrays);
 * // => [[], []]
 *
 * console.log(arrays[0] === arrays[1]);
 * // => false
 */
function stubArray() {
  return [];
}

module.exports = stubArray;

/***/ }),

/***/ "../../../node_modules/lodash/stubFalse.js":
/*!**************************************************************************************************!*\
  !*** /Users/diego.antonelli/Desktop/projects/widgets-resources/node_modules/lodash/stubFalse.js ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * This method returns `false`.
 *
 * @static
 * @memberOf _
 * @since 4.13.0
 * @category Util
 * @returns {boolean} Returns `false`.
 * @example
 *
 * _.times(2, _.stubFalse);
 * // => [false, false]
 */
function stubFalse() {
  return false;
}

module.exports = stubFalse;

/***/ }),

/***/ "../../../node_modules/lodash/toString.js":
/*!*************************************************************************************************!*\
  !*** /Users/diego.antonelli/Desktop/projects/widgets-resources/node_modules/lodash/toString.js ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var baseToString = __webpack_require__(/*! ./_baseToString */ "../../../node_modules/lodash/_baseToString.js");
/**
 * Converts `value` to a string. An empty string is returned for `null`
 * and `undefined` values. The sign of `-0` is preserved.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to convert.
 * @returns {string} Returns the converted string.
 * @example
 *
 * _.toString(null);
 * // => ''
 *
 * _.toString(-0);
 * // => '-0'
 *
 * _.toString([1, 2, 3]);
 * // => '1,2,3'
 */


function toString(value) {
  return value == null ? '' : baseToString(value);
}

module.exports = toString;

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
} // These styles need to be nested in a transform array


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

/***/ "../../../node_modules/react-native-button/Button.js":
/*!************************************************************************************************************!*\
  !*** /Users/diego.antonelli/Desktop/projects/widgets-resources/node_modules/react-native-button/Button.js ***!
  \************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Button; });
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! prop-types */ "../../../node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_native__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-native */ "react-native");
/* harmony import */ var react_native__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_native__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _coalesceNonElementChildren__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./coalesceNonElementChildren */ "../../../node_modules/react-native-button/coalesceNonElementChildren.js");
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





var systemButtonOpacity = 0.2;

var Button = /*#__PURE__*/function (_Component) {
  _inherits(Button, _Component);

  var _super = _createSuper(Button);

  function Button() {
    _classCallCheck(this, Button);

    return _super.apply(this, arguments);
  }

  _createClass(Button, [{
    key: "render",
    value: function render() {
      var touchableProps = {
        activeOpacity: this._computeActiveOpacity()
      };
      var containerStyle = [this.props.containerStyle, this.props.disabled ? this.props.disabledContainerStyle : null];

      if (!this.props.disabled) {
        touchableProps.onPress = this.props.onPress;
        touchableProps.onPressIn = this.props.onPressIn;
        touchableProps.onPressOut = this.props.onPressOut;
        touchableProps.onLongPress = this.props.onLongPress;
        touchableProps.delayPressIn = this.props.delayPressIn;
        touchableProps.delayPressOut = this.props.delayPressOut;
        touchableProps.delayLongPress = this.props.delayLongPress;
      }

      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_native__WEBPACK_IMPORTED_MODULE_2__["TouchableOpacity"], _extends({}, touchableProps, {
        testID: this.props.testID,
        style: containerStyle,
        accessibilityLabel: this.props.accessibilityLabel,
        accessibilityRole: "button"
      }), this._renderGroupedChildren());
    }
  }, {
    key: "_renderGroupedChildren",
    value: function _renderGroupedChildren() {
      var _this = this;

      var disabled = this.props.disabled;
      var style = [styles.text, disabled ? styles.disabledText : null, this.props.style, disabled ? this.props.styleDisabled : null];
      var childGroupStyle = [styles.group, this.props.childGroupStyle];
      var children = Object(_coalesceNonElementChildren__WEBPACK_IMPORTED_MODULE_3__["default"])(this.props.children, function (children, index) {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_native__WEBPACK_IMPORTED_MODULE_2__["Text"], {
          key: index,
          style: style,
          allowFontScaling: _this.props.allowFontScaling
        }, children);
      });

      switch (children.length) {
        case 0:
          return null;

        case 1:
          return children[0];

        default:
          return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_native__WEBPACK_IMPORTED_MODULE_2__["View"], {
            style: childGroupStyle
          }, children);
      }
    }
  }, {
    key: "_computeActiveOpacity",
    value: function _computeActiveOpacity() {
      if (this.props.disabled) {
        return 1;
      }

      return this.props.activeOpacity != null ? this.props.activeOpacity : systemButtonOpacity;
    }
  }]);

  return Button;
}(react__WEBPACK_IMPORTED_MODULE_1__["Component"]);

Button.propTypes = _objectSpread(_objectSpread({}, react_native__WEBPACK_IMPORTED_MODULE_2__["TouchableOpacity"].propTypes), {}, {
  accessibilityLabel: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string,
  allowFontScaling: react_native__WEBPACK_IMPORTED_MODULE_2__["Text"].propTypes.allowFontScaling,
  containerStyle: react_native__WEBPACK_IMPORTED_MODULE_2__["ViewPropTypes"].style,
  disabledContainerStyle: react_native__WEBPACK_IMPORTED_MODULE_2__["ViewPropTypes"].style,
  disabled: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.bool,
  style: react_native__WEBPACK_IMPORTED_MODULE_2__["Text"].propTypes.style,
  styleDisabled: react_native__WEBPACK_IMPORTED_MODULE_2__["Text"].propTypes.style,
  childGroupStyle: react_native__WEBPACK_IMPORTED_MODULE_2__["ViewPropTypes"].style
});

;
var styles = react_native__WEBPACK_IMPORTED_MODULE_2__["StyleSheet"].create({
  text: {
    color: '#007aff',
    fontSize: 17,
    fontWeight: '500',
    textAlign: 'center'
  },
  disabledText: {
    color: '#dcdcdc'
  },
  group: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  }
});

/***/ }),

/***/ "../../../node_modules/react-native-button/coalesceNonElementChildren.js":
/*!********************************************************************************************************************************!*\
  !*** /Users/diego.antonelli/Desktop/projects/widgets-resources/node_modules/react-native-button/coalesceNonElementChildren.js ***!
  \********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return coalesceNonElementChildren; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

function coalesceNonElementChildren(children, coalesceNodes) {
  var coalescedChildren = [];
  var contiguousNonElements = [];
  react__WEBPACK_IMPORTED_MODULE_0__["Children"].forEach(children, function (child) {
    if (!react__WEBPACK_IMPORTED_MODULE_0___default.a.isValidElement(child)) {
      contiguousNonElements.push(child);
      return;
    }

    if (contiguousNonElements.length) {
      coalescedChildren.push(coalesceNodes(contiguousNonElements, coalescedChildren.length));
      contiguousNonElements = [];
    }

    coalescedChildren.push(child);
  });

  if (contiguousNonElements.length) {
    coalescedChildren.push(coalesceNodes(contiguousNonElements, coalescedChildren.length));
  }

  return coalescedChildren;
}

/***/ }),

/***/ "../../../node_modules/react-native-star-rating/StarButton.js":
/*!*********************************************************************************************************************!*\
  !*** /Users/diego.antonelli/Desktop/projects/widgets-resources/node_modules/react-native-star-rating/StarButton.js ***!
  \*********************************************************************************************************************/
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
/* harmony import */ var react_native_vector_icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-native-vector-icons */ "react-native-vector-icons");
/* harmony import */ var react_native_vector_icons__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_native_vector_icons__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_native_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-native-button */ "../../../node_modules/react-native-button/Button.js");
/* harmony import */ var react_native_vector_icons_Entypo__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-native-vector-icons/Entypo */ "../../../node_modules/react-native-vector-icons/Entypo.js");
/* harmony import */ var react_native_vector_icons_EvilIcons__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-native-vector-icons/EvilIcons */ "../../../node_modules/react-native-vector-icons/EvilIcons.js");
/* harmony import */ var react_native_vector_icons_Feather__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-native-vector-icons/Feather */ "../../../node_modules/react-native-vector-icons/Feather.js");
/* harmony import */ var react_native_vector_icons_FontAwesome__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-native-vector-icons/FontAwesome */ "../../../node_modules/react-native-vector-icons/FontAwesome.js");
/* harmony import */ var react_native_vector_icons_Foundation__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-native-vector-icons/Foundation */ "../../../node_modules/react-native-vector-icons/Foundation.js");
/* harmony import */ var react_native_vector_icons_Ionicons__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-native-vector-icons/Ionicons */ "../../../node_modules/react-native-vector-icons/Ionicons.js");
/* harmony import */ var react_native_vector_icons_MaterialIcons__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react-native-vector-icons/MaterialIcons */ "../../../node_modules/react-native-vector-icons/MaterialIcons.js");
/* harmony import */ var react_native_vector_icons_MaterialCommunityIcons__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! react-native-vector-icons/MaterialCommunityIcons */ "../../../node_modules/react-native-vector-icons/MaterialCommunityIcons.js");
/* harmony import */ var react_native_vector_icons_Octicons__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! react-native-vector-icons/Octicons */ "../../../node_modules/react-native-vector-icons/Octicons.js");
/* harmony import */ var react_native_vector_icons_Zocial__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! react-native-vector-icons/Zocial */ "../../../node_modules/react-native-vector-icons/Zocial.js");
/* harmony import */ var react_native_vector_icons_SimpleLineIcons__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! react-native-vector-icons/SimpleLineIcons */ "../../../node_modules/react-native-vector-icons/SimpleLineIcons.js");
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
} // React and react native imports





 // Third party imports













var iconSets = {
  Entypo: react_native_vector_icons_Entypo__WEBPACK_IMPORTED_MODULE_5__["default"],
  EvilIcons: react_native_vector_icons_EvilIcons__WEBPACK_IMPORTED_MODULE_6__["default"],
  Feather: react_native_vector_icons_Feather__WEBPACK_IMPORTED_MODULE_7__["default"],
  FontAwesome: react_native_vector_icons_FontAwesome__WEBPACK_IMPORTED_MODULE_8__["default"],
  Foundation: react_native_vector_icons_Foundation__WEBPACK_IMPORTED_MODULE_9__["default"],
  Ionicons: react_native_vector_icons_Ionicons__WEBPACK_IMPORTED_MODULE_10__["default"],
  MaterialIcons: react_native_vector_icons_MaterialIcons__WEBPACK_IMPORTED_MODULE_11__["default"],
  MaterialCommunityIcons: react_native_vector_icons_MaterialCommunityIcons__WEBPACK_IMPORTED_MODULE_12__["default"],
  Octicons: react_native_vector_icons_Octicons__WEBPACK_IMPORTED_MODULE_13__["default"],
  Zocial: react_native_vector_icons_Zocial__WEBPACK_IMPORTED_MODULE_14__["default"],
  SimpleLineIcons: react_native_vector_icons_SimpleLineIcons__WEBPACK_IMPORTED_MODULE_15__["default"]
};
var propTypes = {
  buttonStyle: react_native__WEBPACK_IMPORTED_MODULE_1__["ViewPropTypes"].style,
  disabled: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool.isRequired,
  halfStarEnabled: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool.isRequired,
  icoMoonJson: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,
  iconSet: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string.isRequired,
  rating: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.number.isRequired,
  reversed: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool.isRequired,
  starColor: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string.isRequired,
  starIconName: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object, prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.number]).isRequired,
  starSize: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.number.isRequired,
  activeOpacity: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.number.isRequired,
  starStyle: react_native__WEBPACK_IMPORTED_MODULE_1__["ViewPropTypes"].style,
  onStarButtonPress: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func.isRequired
};
var defaultProps = {
  buttonStyle: {},
  icoMoonJson: undefined,
  starStyle: {}
};

var StarButton = /*#__PURE__*/function (_Component) {
  _inherits(StarButton, _Component);

  var _super = _createSuper(StarButton);

  function StarButton(props) {
    var _this;

    _classCallCheck(this, StarButton);

    _this = _super.call(this, props);
    _this.onButtonPress = _this.onButtonPress.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(StarButton, [{
    key: "onButtonPress",
    value: function onButtonPress(event) {
      var _this$props = this.props,
          halfStarEnabled = _this$props.halfStarEnabled,
          starSize = _this$props.starSize,
          rating = _this$props.rating,
          onStarButtonPress = _this$props.onStarButtonPress;
      var addition = 0;

      if (halfStarEnabled) {
        var isHalfSelected = event.nativeEvent.locationX < starSize / 2;
        addition = isHalfSelected ? -0.5 : 0;
      }

      onStarButtonPress(rating + addition);
    }
  }, {
    key: "iconSetFromProps",
    value: function iconSetFromProps() {
      var _this$props2 = this.props,
          icoMoonJson = _this$props2.icoMoonJson,
          iconSet = _this$props2.iconSet;

      if (icoMoonJson) {
        return Object(react_native_vector_icons__WEBPACK_IMPORTED_MODULE_3__["createIconSetFromIcoMoon"])(icoMoonJson);
      }

      return iconSets[iconSet];
    }
  }, {
    key: "renderIcon",
    value: function renderIcon() {
      var _this$props3 = this.props,
          reversed = _this$props3.reversed,
          starColor = _this$props3.starColor,
          starIconName = _this$props3.starIconName,
          starSize = _this$props3.starSize,
          starStyle = _this$props3.starStyle;
      var Icon = this.iconSetFromProps();
      var iconElement;

      var newStarStyle = _objectSpread({
        transform: [{
          scaleX: reversed ? -1 : 1
        }]
      }, react_native__WEBPACK_IMPORTED_MODULE_1__["StyleSheet"].flatten(starStyle));

      if (typeof starIconName === 'string') {
        iconElement = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Icon, {
          name: starIconName,
          size: starSize,
          color: starColor,
          style: newStarStyle
        });
      } else {
        var imageStyle = {
          width: starSize,
          height: starSize,
          resizeMode: 'contain'
        };
        var iconStyles = [imageStyle, newStarStyle];
        iconElement = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_native__WEBPACK_IMPORTED_MODULE_1__["Image"], {
          source: starIconName,
          style: iconStyles
        });
      }

      return iconElement;
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props4 = this.props,
          activeOpacity = _this$props4.activeOpacity,
          buttonStyle = _this$props4.buttonStyle,
          disabled = _this$props4.disabled;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_native_button__WEBPACK_IMPORTED_MODULE_4__["default"], {
        activeOpacity: activeOpacity,
        disabled: disabled,
        containerStyle: buttonStyle,
        onPress: this.onButtonPress
      }, this.renderIcon());
    }
  }]);

  return StarButton;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

StarButton.propTypes = propTypes;
StarButton.defaultProps = defaultProps;
/* harmony default export */ __webpack_exports__["default"] = (StarButton);

/***/ }),

/***/ "../../../node_modules/react-native-star-rating/StarRating.js":
/*!*********************************************************************************************************************!*\
  !*** /Users/diego.antonelli/Desktop/projects/widgets-resources/node_modules/react-native-star-rating/StarRating.js ***!
  \*********************************************************************************************************************/
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
/* harmony import */ var react_native_animatable__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-native-animatable */ "../../../node_modules/react-native-animatable/index.js");
/* harmony import */ var _StarButton__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./StarButton */ "../../../node_modules/react-native-star-rating/StarButton.js");
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
} // React and react native imports





 // Local file imports


var ANIMATION_TYPES = ['bounce', 'flash', 'jello', 'pulse', 'rotate', 'rubberBand', 'shake', 'swing', 'tada', 'wobble'];
var propTypes = {
  activeOpacity: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.number,
  animation: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.oneOf(ANIMATION_TYPES),
  buttonStyle: react_native__WEBPACK_IMPORTED_MODULE_1__["ViewPropTypes"].style,
  containerStyle: react_native__WEBPACK_IMPORTED_MODULE_1__["ViewPropTypes"].style,
  disabled: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool,
  emptyStar: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object, prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.number]),
  emptyStarColor: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,
  fullStar: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object, prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.number]),
  fullStarColor: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,
  halfStar: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object, prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.number]),
  halfStarColor: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,
  halfStarEnabled: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool,
  // eslint-disable-next-line react/forbid-prop-types
  icoMoonJson: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object,
  iconSet: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,
  maxStars: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.number,
  rating: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.number,
  reversed: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool,
  starSize: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.number,
  starStyle: react_native__WEBPACK_IMPORTED_MODULE_1__["ViewPropTypes"].style,
  selectedStar: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func
};
var defaultProps = {
  activeOpacity: 0.2,
  animation: undefined,
  buttonStyle: {},
  containerStyle: {},
  disabled: false,
  emptyStar: 'star-o',
  emptyStarColor: 'gray',
  fullStar: 'star',
  fullStarColor: 'black',
  halfStar: 'star-half-o',
  halfStarColor: undefined,
  halfStarEnabled: false,
  icoMoonJson: undefined,
  iconSet: 'FontAwesome',
  maxStars: 5,
  rating: 0,
  reversed: false,
  starSize: 40,
  starStyle: {},
  selectedStar: function selectedStar() {}
};

var StarRating = /*#__PURE__*/function (_Component) {
  _inherits(StarRating, _Component);

  var _super = _createSuper(StarRating);

  function StarRating(props) {
    var _this;

    _classCallCheck(this, StarRating);

    _this = _super.call(this, props);
    _this.starRef = [];
    _this.onStarButtonPress = _this.onStarButtonPress.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(StarRating, [{
    key: "onStarButtonPress",
    value: function onStarButtonPress(rating) {
      var selectedStar = this.props.selectedStar;
      selectedStar(rating);
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props = this.props,
          activeOpacity = _this$props.activeOpacity,
          animation = _this$props.animation,
          buttonStyle = _this$props.buttonStyle,
          containerStyle = _this$props.containerStyle,
          disabled = _this$props.disabled,
          emptyStar = _this$props.emptyStar,
          emptyStarColor = _this$props.emptyStarColor,
          fullStar = _this$props.fullStar,
          fullStarColor = _this$props.fullStarColor,
          halfStar = _this$props.halfStar,
          halfStarColor = _this$props.halfStarColor,
          halfStarEnabled = _this$props.halfStarEnabled,
          icoMoonJson = _this$props.icoMoonJson,
          iconSet = _this$props.iconSet,
          maxStars = _this$props.maxStars,
          rating = _this$props.rating,
          reversed = _this$props.reversed,
          starSize = _this$props.starSize,
          starStyle = _this$props.starStyle;

      var newContainerStyle = _objectSpread({
        flexDirection: reversed ? 'row-reverse' : 'row',
        justifyContent: 'space-between'
      }, react_native__WEBPACK_IMPORTED_MODULE_1__["StyleSheet"].flatten(containerStyle)); // Round rating down to nearest .5 star


      var starsLeft = Math.round(rating * 2) / 2;
      var starButtons = [];

      var _loop = function _loop(i) {
        var starIconName = emptyStar;
        var finalStarColor = emptyStarColor;

        if (starsLeft >= 1) {
          starIconName = fullStar;
          finalStarColor = fullStarColor;
        } else if (starsLeft === 0.5) {
          starIconName = halfStar;

          if (halfStarColor) {
            finalStarColor = halfStarColor;
          } else {
            finalStarColor = fullStarColor;
          }
        }

        var starButtonElement = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_native_animatable__WEBPACK_IMPORTED_MODULE_3__["View"], {
          key: i,
          ref: function ref(node) {
            _this2.starRef.push(node);
          }
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_StarButton__WEBPACK_IMPORTED_MODULE_4__["default"], {
          activeOpacity: activeOpacity,
          buttonStyle: buttonStyle,
          disabled: disabled,
          halfStarEnabled: halfStarEnabled,
          icoMoonJson: icoMoonJson,
          iconSet: iconSet,
          onStarButtonPress: function onStarButtonPress(event) {
            if (animation && ANIMATION_TYPES.includes(animation)) {
              for (var s = 0; s <= i; s++) {
                _this2.starRef[s][animation](1000 + s * 200);
              }
            }

            _this2.onStarButtonPress(event);
          },
          rating: i + 1,
          reversed: reversed,
          starColor: finalStarColor,
          starIconName: starIconName,
          starSize: starSize,
          starStyle: starStyle
        }));
        starButtons.push(starButtonElement);
        starsLeft -= 1;
      };

      for (var i = 0; i < maxStars; i++) {
        _loop(i);
      }

      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_native__WEBPACK_IMPORTED_MODULE_1__["View"], {
        style: newContainerStyle,
        pointerEvents: disabled ? 'none' : 'auto'
      }, starButtons);
    }
  }]);

  return StarRating;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

StarRating.propTypes = propTypes;
StarRating.defaultProps = defaultProps;
/* harmony default export */ __webpack_exports__["default"] = (StarRating);

/***/ }),

/***/ "../../../node_modules/react-native-star-rating/index.js":
/*!****************************************************************************************************************!*\
  !*** /Users/diego.antonelli/Desktop/projects/widgets-resources/node_modules/react-native-star-rating/index.js ***!
  \****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _StarRating__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./StarRating */ "../../../node_modules/react-native-star-rating/StarRating.js");
// Local file imports

/* harmony default export */ __webpack_exports__["default"] = (_StarRating__WEBPACK_IMPORTED_MODULE_0__["default"]);

/***/ }),

/***/ "../../../node_modules/react-native-vector-icons/Entypo.js":
/*!******************************************************************************************************************!*\
  !*** /Users/diego.antonelli/Desktop/projects/widgets-resources/node_modules/react-native-vector-icons/Entypo.js ***!
  \******************************************************************************************************************/
/*! exports provided: default, Button, TabBarItem, TabBarItemIOS, ToolbarAndroid, getImageSource */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Button", function() { return Button; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TabBarItem", function() { return TabBarItem; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TabBarItemIOS", function() { return TabBarItemIOS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ToolbarAndroid", function() { return ToolbarAndroid; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getImageSource", function() { return getImageSource; });
/* harmony import */ var _lib_create_icon_set__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lib/create-icon-set */ "../../../node_modules/react-native-vector-icons/lib/create-icon-set.js");
/* harmony import */ var _glyphmaps_Entypo_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./glyphmaps/Entypo.json */ "../../../node_modules/react-native-vector-icons/glyphmaps/Entypo.json");
var _glyphmaps_Entypo_json__WEBPACK_IMPORTED_MODULE_1___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./glyphmaps/Entypo.json */ "../../../node_modules/react-native-vector-icons/glyphmaps/Entypo.json", 1);
/**
 * Entypo icon set component.
 * Usage: <Entypo name="icon-name" size={20} color="#4F8EF7" />
 */


var iconSet = Object(_lib_create_icon_set__WEBPACK_IMPORTED_MODULE_0__["default"])(_glyphmaps_Entypo_json__WEBPACK_IMPORTED_MODULE_1__, 'Entypo', 'Entypo.ttf');
/* harmony default export */ __webpack_exports__["default"] = (iconSet);
var Button = iconSet.Button;
var TabBarItem = iconSet.TabBarItem;
var TabBarItemIOS = iconSet.TabBarItemIOS;
var ToolbarAndroid = iconSet.ToolbarAndroid;
var getImageSource = iconSet.getImageSource;

/***/ }),

/***/ "../../../node_modules/react-native-vector-icons/EvilIcons.js":
/*!*********************************************************************************************************************!*\
  !*** /Users/diego.antonelli/Desktop/projects/widgets-resources/node_modules/react-native-vector-icons/EvilIcons.js ***!
  \*********************************************************************************************************************/
/*! exports provided: default, Button, TabBarItem, TabBarItemIOS, ToolbarAndroid, getImageSource */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Button", function() { return Button; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TabBarItem", function() { return TabBarItem; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TabBarItemIOS", function() { return TabBarItemIOS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ToolbarAndroid", function() { return ToolbarAndroid; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getImageSource", function() { return getImageSource; });
/* harmony import */ var _lib_create_icon_set__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lib/create-icon-set */ "../../../node_modules/react-native-vector-icons/lib/create-icon-set.js");
/* harmony import */ var _glyphmaps_EvilIcons_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./glyphmaps/EvilIcons.json */ "../../../node_modules/react-native-vector-icons/glyphmaps/EvilIcons.json");
var _glyphmaps_EvilIcons_json__WEBPACK_IMPORTED_MODULE_1___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./glyphmaps/EvilIcons.json */ "../../../node_modules/react-native-vector-icons/glyphmaps/EvilIcons.json", 1);
/**
 * EvilIcons icon set component.
 * Usage: <EvilIcons name="icon-name" size={20} color="#4F8EF7" />
 */


var iconSet = Object(_lib_create_icon_set__WEBPACK_IMPORTED_MODULE_0__["default"])(_glyphmaps_EvilIcons_json__WEBPACK_IMPORTED_MODULE_1__, 'EvilIcons', 'EvilIcons.ttf');
/* harmony default export */ __webpack_exports__["default"] = (iconSet);
var Button = iconSet.Button;
var TabBarItem = iconSet.TabBarItem;
var TabBarItemIOS = iconSet.TabBarItemIOS;
var ToolbarAndroid = iconSet.ToolbarAndroid;
var getImageSource = iconSet.getImageSource;

/***/ }),

/***/ "../../../node_modules/react-native-vector-icons/Feather.js":
/*!*******************************************************************************************************************!*\
  !*** /Users/diego.antonelli/Desktop/projects/widgets-resources/node_modules/react-native-vector-icons/Feather.js ***!
  \*******************************************************************************************************************/
/*! exports provided: default, Button, TabBarItem, TabBarItemIOS, ToolbarAndroid, getImageSource */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Button", function() { return Button; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TabBarItem", function() { return TabBarItem; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TabBarItemIOS", function() { return TabBarItemIOS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ToolbarAndroid", function() { return ToolbarAndroid; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getImageSource", function() { return getImageSource; });
/* harmony import */ var _lib_create_icon_set__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lib/create-icon-set */ "../../../node_modules/react-native-vector-icons/lib/create-icon-set.js");
/* harmony import */ var _glyphmaps_Feather_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./glyphmaps/Feather.json */ "../../../node_modules/react-native-vector-icons/glyphmaps/Feather.json");
var _glyphmaps_Feather_json__WEBPACK_IMPORTED_MODULE_1___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./glyphmaps/Feather.json */ "../../../node_modules/react-native-vector-icons/glyphmaps/Feather.json", 1);
/**
 * Feather icon set component.
 * Usage: <Feather name="icon-name" size={20} color="#4F8EF7" />
 */


var iconSet = Object(_lib_create_icon_set__WEBPACK_IMPORTED_MODULE_0__["default"])(_glyphmaps_Feather_json__WEBPACK_IMPORTED_MODULE_1__, 'Feather', 'Feather.ttf');
/* harmony default export */ __webpack_exports__["default"] = (iconSet);
var Button = iconSet.Button;
var TabBarItem = iconSet.TabBarItem;
var TabBarItemIOS = iconSet.TabBarItemIOS;
var ToolbarAndroid = iconSet.ToolbarAndroid;
var getImageSource = iconSet.getImageSource;

/***/ }),

/***/ "../../../node_modules/react-native-vector-icons/FontAwesome.js":
/*!***********************************************************************************************************************!*\
  !*** /Users/diego.antonelli/Desktop/projects/widgets-resources/node_modules/react-native-vector-icons/FontAwesome.js ***!
  \***********************************************************************************************************************/
/*! exports provided: default, Button, TabBarItem, TabBarItemIOS, ToolbarAndroid, getImageSource */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Button", function() { return Button; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TabBarItem", function() { return TabBarItem; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TabBarItemIOS", function() { return TabBarItemIOS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ToolbarAndroid", function() { return ToolbarAndroid; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getImageSource", function() { return getImageSource; });
/* harmony import */ var _lib_create_icon_set__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lib/create-icon-set */ "../../../node_modules/react-native-vector-icons/lib/create-icon-set.js");
/* harmony import */ var _glyphmaps_FontAwesome_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./glyphmaps/FontAwesome.json */ "../../../node_modules/react-native-vector-icons/glyphmaps/FontAwesome.json");
var _glyphmaps_FontAwesome_json__WEBPACK_IMPORTED_MODULE_1___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./glyphmaps/FontAwesome.json */ "../../../node_modules/react-native-vector-icons/glyphmaps/FontAwesome.json", 1);
/**
 * FontAwesome icon set component.
 * Usage: <FontAwesome name="icon-name" size={20} color="#4F8EF7" />
 */


var iconSet = Object(_lib_create_icon_set__WEBPACK_IMPORTED_MODULE_0__["default"])(_glyphmaps_FontAwesome_json__WEBPACK_IMPORTED_MODULE_1__, 'FontAwesome', 'FontAwesome.ttf');
/* harmony default export */ __webpack_exports__["default"] = (iconSet);
var Button = iconSet.Button;
var TabBarItem = iconSet.TabBarItem;
var TabBarItemIOS = iconSet.TabBarItemIOS;
var ToolbarAndroid = iconSet.ToolbarAndroid;
var getImageSource = iconSet.getImageSource;

/***/ }),

/***/ "../../../node_modules/react-native-vector-icons/Foundation.js":
/*!**********************************************************************************************************************!*\
  !*** /Users/diego.antonelli/Desktop/projects/widgets-resources/node_modules/react-native-vector-icons/Foundation.js ***!
  \**********************************************************************************************************************/
/*! exports provided: default, Button, TabBarItem, TabBarItemIOS, ToolbarAndroid, getImageSource */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Button", function() { return Button; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TabBarItem", function() { return TabBarItem; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TabBarItemIOS", function() { return TabBarItemIOS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ToolbarAndroid", function() { return ToolbarAndroid; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getImageSource", function() { return getImageSource; });
/* harmony import */ var _lib_create_icon_set__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lib/create-icon-set */ "../../../node_modules/react-native-vector-icons/lib/create-icon-set.js");
/* harmony import */ var _glyphmaps_Foundation_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./glyphmaps/Foundation.json */ "../../../node_modules/react-native-vector-icons/glyphmaps/Foundation.json");
var _glyphmaps_Foundation_json__WEBPACK_IMPORTED_MODULE_1___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./glyphmaps/Foundation.json */ "../../../node_modules/react-native-vector-icons/glyphmaps/Foundation.json", 1);
/**
 * Foundation icon set component.
 * Usage: <Foundation name="icon-name" size={20} color="#4F8EF7" />
 */


var iconSet = Object(_lib_create_icon_set__WEBPACK_IMPORTED_MODULE_0__["default"])(_glyphmaps_Foundation_json__WEBPACK_IMPORTED_MODULE_1__, 'fontcustom', 'Foundation.ttf');
/* harmony default export */ __webpack_exports__["default"] = (iconSet);
var Button = iconSet.Button;
var TabBarItem = iconSet.TabBarItem;
var TabBarItemIOS = iconSet.TabBarItemIOS;
var ToolbarAndroid = iconSet.ToolbarAndroid;
var getImageSource = iconSet.getImageSource;

/***/ }),

/***/ "../../../node_modules/react-native-vector-icons/Ionicons.js":
/*!********************************************************************************************************************!*\
  !*** /Users/diego.antonelli/Desktop/projects/widgets-resources/node_modules/react-native-vector-icons/Ionicons.js ***!
  \********************************************************************************************************************/
/*! exports provided: default, Button, TabBarItem, TabBarItemIOS, ToolbarAndroid, getImageSource */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Button", function() { return Button; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TabBarItem", function() { return TabBarItem; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TabBarItemIOS", function() { return TabBarItemIOS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ToolbarAndroid", function() { return ToolbarAndroid; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getImageSource", function() { return getImageSource; });
/* harmony import */ var _lib_create_icon_set__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lib/create-icon-set */ "../../../node_modules/react-native-vector-icons/lib/create-icon-set.js");
/* harmony import */ var _glyphmaps_Ionicons_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./glyphmaps/Ionicons.json */ "../../../node_modules/react-native-vector-icons/glyphmaps/Ionicons.json");
var _glyphmaps_Ionicons_json__WEBPACK_IMPORTED_MODULE_1___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./glyphmaps/Ionicons.json */ "../../../node_modules/react-native-vector-icons/glyphmaps/Ionicons.json", 1);
/**
 * Ionicons icon set component.
 * Usage: <Ionicons name="icon-name" size={20} color="#4F8EF7" />
 */


var iconSet = Object(_lib_create_icon_set__WEBPACK_IMPORTED_MODULE_0__["default"])(_glyphmaps_Ionicons_json__WEBPACK_IMPORTED_MODULE_1__, 'Ionicons', 'Ionicons.ttf');
/* harmony default export */ __webpack_exports__["default"] = (iconSet);
var Button = iconSet.Button;
var TabBarItem = iconSet.TabBarItem;
var TabBarItemIOS = iconSet.TabBarItemIOS;
var ToolbarAndroid = iconSet.ToolbarAndroid;
var getImageSource = iconSet.getImageSource;

/***/ }),

/***/ "../../../node_modules/react-native-vector-icons/MaterialCommunityIcons.js":
/*!**********************************************************************************************************************************!*\
  !*** /Users/diego.antonelli/Desktop/projects/widgets-resources/node_modules/react-native-vector-icons/MaterialCommunityIcons.js ***!
  \**********************************************************************************************************************************/
/*! exports provided: default, Button, TabBarItem, TabBarItemIOS, ToolbarAndroid, getImageSource */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Button", function() { return Button; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TabBarItem", function() { return TabBarItem; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TabBarItemIOS", function() { return TabBarItemIOS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ToolbarAndroid", function() { return ToolbarAndroid; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getImageSource", function() { return getImageSource; });
/* harmony import */ var _lib_create_icon_set__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lib/create-icon-set */ "../../../node_modules/react-native-vector-icons/lib/create-icon-set.js");
/* harmony import */ var _glyphmaps_MaterialCommunityIcons_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./glyphmaps/MaterialCommunityIcons.json */ "../../../node_modules/react-native-vector-icons/glyphmaps/MaterialCommunityIcons.json");
var _glyphmaps_MaterialCommunityIcons_json__WEBPACK_IMPORTED_MODULE_1___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./glyphmaps/MaterialCommunityIcons.json */ "../../../node_modules/react-native-vector-icons/glyphmaps/MaterialCommunityIcons.json", 1);
/**
 * MaterialCommunityIcons icon set component.
 * Usage: <MaterialCommunityIcons name="icon-name" size={20} color="#4F8EF7" />
 */


var iconSet = Object(_lib_create_icon_set__WEBPACK_IMPORTED_MODULE_0__["default"])(_glyphmaps_MaterialCommunityIcons_json__WEBPACK_IMPORTED_MODULE_1__, 'Material Design Icons', 'MaterialCommunityIcons.ttf');
/* harmony default export */ __webpack_exports__["default"] = (iconSet);
var Button = iconSet.Button;
var TabBarItem = iconSet.TabBarItem;
var TabBarItemIOS = iconSet.TabBarItemIOS;
var ToolbarAndroid = iconSet.ToolbarAndroid;
var getImageSource = iconSet.getImageSource;

/***/ }),

/***/ "../../../node_modules/react-native-vector-icons/MaterialIcons.js":
/*!*************************************************************************************************************************!*\
  !*** /Users/diego.antonelli/Desktop/projects/widgets-resources/node_modules/react-native-vector-icons/MaterialIcons.js ***!
  \*************************************************************************************************************************/
/*! exports provided: default, Button, TabBarItem, TabBarItemIOS, ToolbarAndroid, getImageSource */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Button", function() { return Button; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TabBarItem", function() { return TabBarItem; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TabBarItemIOS", function() { return TabBarItemIOS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ToolbarAndroid", function() { return ToolbarAndroid; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getImageSource", function() { return getImageSource; });
/* harmony import */ var _lib_create_icon_set__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lib/create-icon-set */ "../../../node_modules/react-native-vector-icons/lib/create-icon-set.js");
/* harmony import */ var _glyphmaps_MaterialIcons_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./glyphmaps/MaterialIcons.json */ "../../../node_modules/react-native-vector-icons/glyphmaps/MaterialIcons.json");
var _glyphmaps_MaterialIcons_json__WEBPACK_IMPORTED_MODULE_1___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./glyphmaps/MaterialIcons.json */ "../../../node_modules/react-native-vector-icons/glyphmaps/MaterialIcons.json", 1);
/**
 * MaterialIcons icon set component.
 * Usage: <MaterialIcons name="icon-name" size={20} color="#4F8EF7" />
 */


var iconSet = Object(_lib_create_icon_set__WEBPACK_IMPORTED_MODULE_0__["default"])(_glyphmaps_MaterialIcons_json__WEBPACK_IMPORTED_MODULE_1__, 'Material Icons', 'MaterialIcons.ttf');
/* harmony default export */ __webpack_exports__["default"] = (iconSet);
var Button = iconSet.Button;
var TabBarItem = iconSet.TabBarItem;
var TabBarItemIOS = iconSet.TabBarItemIOS;
var ToolbarAndroid = iconSet.ToolbarAndroid;
var getImageSource = iconSet.getImageSource;

/***/ }),

/***/ "../../../node_modules/react-native-vector-icons/Octicons.js":
/*!********************************************************************************************************************!*\
  !*** /Users/diego.antonelli/Desktop/projects/widgets-resources/node_modules/react-native-vector-icons/Octicons.js ***!
  \********************************************************************************************************************/
/*! exports provided: default, Button, TabBarItem, TabBarItemIOS, ToolbarAndroid, getImageSource */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Button", function() { return Button; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TabBarItem", function() { return TabBarItem; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TabBarItemIOS", function() { return TabBarItemIOS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ToolbarAndroid", function() { return ToolbarAndroid; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getImageSource", function() { return getImageSource; });
/* harmony import */ var _lib_create_icon_set__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lib/create-icon-set */ "../../../node_modules/react-native-vector-icons/lib/create-icon-set.js");
/* harmony import */ var _glyphmaps_Octicons_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./glyphmaps/Octicons.json */ "../../../node_modules/react-native-vector-icons/glyphmaps/Octicons.json");
var _glyphmaps_Octicons_json__WEBPACK_IMPORTED_MODULE_1___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./glyphmaps/Octicons.json */ "../../../node_modules/react-native-vector-icons/glyphmaps/Octicons.json", 1);
/**
 * Octicons icon set component.
 * Usage: <Octicons name="icon-name" size={20} color="#4F8EF7" />
 */


var iconSet = Object(_lib_create_icon_set__WEBPACK_IMPORTED_MODULE_0__["default"])(_glyphmaps_Octicons_json__WEBPACK_IMPORTED_MODULE_1__, 'Octicons', 'Octicons.ttf');
/* harmony default export */ __webpack_exports__["default"] = (iconSet);
var Button = iconSet.Button;
var TabBarItem = iconSet.TabBarItem;
var TabBarItemIOS = iconSet.TabBarItemIOS;
var ToolbarAndroid = iconSet.ToolbarAndroid;
var getImageSource = iconSet.getImageSource;

/***/ }),

/***/ "../../../node_modules/react-native-vector-icons/SimpleLineIcons.js":
/*!***************************************************************************************************************************!*\
  !*** /Users/diego.antonelli/Desktop/projects/widgets-resources/node_modules/react-native-vector-icons/SimpleLineIcons.js ***!
  \***************************************************************************************************************************/
/*! exports provided: default, Button, TabBarItem, TabBarItemIOS, ToolbarAndroid, getImageSource */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Button", function() { return Button; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TabBarItem", function() { return TabBarItem; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TabBarItemIOS", function() { return TabBarItemIOS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ToolbarAndroid", function() { return ToolbarAndroid; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getImageSource", function() { return getImageSource; });
/* harmony import */ var _lib_create_icon_set__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lib/create-icon-set */ "../../../node_modules/react-native-vector-icons/lib/create-icon-set.js");
/* harmony import */ var _glyphmaps_SimpleLineIcons_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./glyphmaps/SimpleLineIcons.json */ "../../../node_modules/react-native-vector-icons/glyphmaps/SimpleLineIcons.json");
var _glyphmaps_SimpleLineIcons_json__WEBPACK_IMPORTED_MODULE_1___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./glyphmaps/SimpleLineIcons.json */ "../../../node_modules/react-native-vector-icons/glyphmaps/SimpleLineIcons.json", 1);
/**
 * SimpleLineIcons icon set component.
 * Usage: <SimpleLineIcons name="icon-name" size={20} color="#4F8EF7" />
 */


var iconSet = Object(_lib_create_icon_set__WEBPACK_IMPORTED_MODULE_0__["default"])(_glyphmaps_SimpleLineIcons_json__WEBPACK_IMPORTED_MODULE_1__, 'simple-line-icons', 'SimpleLineIcons.ttf');
/* harmony default export */ __webpack_exports__["default"] = (iconSet);
var Button = iconSet.Button;
var TabBarItem = iconSet.TabBarItem;
var TabBarItemIOS = iconSet.TabBarItemIOS;
var ToolbarAndroid = iconSet.ToolbarAndroid;
var getImageSource = iconSet.getImageSource;

/***/ }),

/***/ "../../../node_modules/react-native-vector-icons/Zocial.js":
/*!******************************************************************************************************************!*\
  !*** /Users/diego.antonelli/Desktop/projects/widgets-resources/node_modules/react-native-vector-icons/Zocial.js ***!
  \******************************************************************************************************************/
/*! exports provided: default, Button, TabBarItem, TabBarItemIOS, ToolbarAndroid, getImageSource */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Button", function() { return Button; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TabBarItem", function() { return TabBarItem; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TabBarItemIOS", function() { return TabBarItemIOS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ToolbarAndroid", function() { return ToolbarAndroid; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getImageSource", function() { return getImageSource; });
/* harmony import */ var _lib_create_icon_set__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lib/create-icon-set */ "../../../node_modules/react-native-vector-icons/lib/create-icon-set.js");
/* harmony import */ var _glyphmaps_Zocial_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./glyphmaps/Zocial.json */ "../../../node_modules/react-native-vector-icons/glyphmaps/Zocial.json");
var _glyphmaps_Zocial_json__WEBPACK_IMPORTED_MODULE_1___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./glyphmaps/Zocial.json */ "../../../node_modules/react-native-vector-icons/glyphmaps/Zocial.json", 1);
/**
 * Zocial icon set component.
 * Usage: <Zocial name="icon-name" size={20} color="#4F8EF7" />
 */


var iconSet = Object(_lib_create_icon_set__WEBPACK_IMPORTED_MODULE_0__["default"])(_glyphmaps_Zocial_json__WEBPACK_IMPORTED_MODULE_1__, 'zocial', 'Zocial.ttf');
/* harmony default export */ __webpack_exports__["default"] = (iconSet);
var Button = iconSet.Button;
var TabBarItem = iconSet.TabBarItem;
var TabBarItemIOS = iconSet.TabBarItemIOS;
var ToolbarAndroid = iconSet.ToolbarAndroid;
var getImageSource = iconSet.getImageSource;

/***/ }),

/***/ "../../../node_modules/react-native-vector-icons/glyphmaps/Entypo.json":
/*!******************************************************************************************************************************!*\
  !*** /Users/diego.antonelli/Desktop/projects/widgets-resources/node_modules/react-native-vector-icons/glyphmaps/Entypo.json ***!
  \******************************************************************************************************************************/
/*! exports provided: 500px, 500px-with-circle, add-to-list, add-user, address, adjust, air, aircraft, aircraft-landing, aircraft-take-off, align-bottom, align-horizontal-middle, align-left, align-right, align-top, align-vertical-middle, app-store, archive, area-graph, arrow-bold-down, arrow-bold-left, arrow-bold-right, arrow-bold-up, arrow-down, arrow-left, arrow-long-down, arrow-long-left, arrow-long-right, arrow-long-up, arrow-right, arrow-up, arrow-with-circle-down, arrow-with-circle-left, arrow-with-circle-right, arrow-with-circle-up, attachment, awareness-ribbon, back, back-in-time, baidu, bar-graph, basecamp, battery, beamed-note, behance, bell, blackboard, block, book, bookmark, bookmarks, bowl, box, briefcase, browser, brush, bucket, bug, cake, calculator, calendar, camera, ccw, chat, check, chevron-down, chevron-left, chevron-right, chevron-small-down, chevron-small-left, chevron-small-right, chevron-small-up, chevron-thin-down, chevron-thin-left, chevron-thin-right, chevron-thin-up, chevron-up, chevron-with-circle-down, chevron-with-circle-left, chevron-with-circle-right, chevron-with-circle-up, circle, circle-with-cross, circle-with-minus, circle-with-plus, circular-graph, clapperboard, classic-computer, clipboard, clock, cloud, code, cog, colours, compass, controller-fast-backward, controller-fast-forward, controller-jump-to-start, controller-next, controller-paus, controller-play, controller-record, controller-stop, controller-volume, copy, creative-cloud, creative-commons, creative-commons-attribution, creative-commons-noderivs, creative-commons-noncommercial-eu, creative-commons-noncommercial-us, creative-commons-public-domain, creative-commons-remix, creative-commons-share, creative-commons-sharealike, credit, credit-card, crop, cross, cup, cw, cycle, database, dial-pad, direction, document, document-landscape, documents, dot-single, dots-three-horizontal, dots-three-vertical, dots-two-horizontal, dots-two-vertical, download, dribbble, dribbble-with-circle, drink, drive, drop, dropbox, edit, email, emoji-flirt, emoji-happy, emoji-neutral, emoji-sad, erase, eraser, evernote, export, eye, eye-with-line, facebook, facebook-with-circle, feather, fingerprint, flag, flash, flashlight, flat-brush, flattr, flickr, flickr-with-circle, flow-branch, flow-cascade, flow-line, flow-parallel, flow-tree, flower, folder, folder-images, folder-music, folder-video, forward, foursquare, funnel, game-controller, gauge, github, github-with-circle, globe, google-, google--with-circle, google-drive, google-hangouts, google-play, graduation-cap, grid, grooveshark, hair-cross, hand, heart, heart-outlined, help, help-with-circle, home, hour-glass, houzz, icloud, image, image-inverted, images, inbox, infinity, info, info-with-circle, instagram, instagram-with-circle, install, key, keyboard, lab-flask, landline, language, laptop, lastfm, lastfm-with-circle, layers, leaf, level-down, level-up, lifebuoy, light-bulb, light-down, light-up, line-graph, link, linkedin, linkedin-with-circle, list, location, location-pin, lock, lock-open, log-out, login, loop, magnet, magnifying-glass, mail, mail-with-circle, man, map, mask, medal, medium, medium-with-circle, megaphone, menu, merge, message, mic, minus, mixi, mobile, modern-mic, moon, mouse, mouse-pointer, music, network, new, new-message, news, newsletter, note, notification, notifications-off, old-mobile, old-phone, onedrive, open-book, palette, paper-plane, paypal, pencil, phone, picasa, pie-chart, pin, pinterest, pinterest-with-circle, plus, popup, power-plug, price-ribbon, price-tag, print, progress-empty, progress-full, progress-one, progress-two, publish, qq, qq-with-circle, quote, radio, raft, raft-with-circle, rainbow, rdio, rdio-with-circle, remove-user, renren, reply, reply-all, resize-100-, resize-full-screen, retweet, rocket, round-brush, rss, ruler, save, scissors, scribd, select-arrows, share, share-alternative, shareable, shield, shop, shopping-bag, shopping-basket, shopping-cart, shuffle, signal, sina-weibo, skype, skype-with-circle, slideshare, smashing, sound, sound-mix, sound-mute, soundcloud, sports-club, spotify, spotify-with-circle, spreadsheet, squared-cross, squared-minus, squared-plus, star, star-outlined, stopwatch, stumbleupon, stumbleupon-with-circle, suitcase, swap, swarm, sweden, switch, tablet, tablet-mobile-combo, tag, text, text-document, text-document-inverted, thermometer, thumbs-down, thumbs-up, thunder-cloud, ticket, time-slot, tools, traffic-cone, trash, tree, triangle-down, triangle-left, triangle-right, triangle-up, tripadvisor, trophy, tumblr, tumblr-with-circle, tv, twitter, twitter-with-circle, typing, uninstall, unread, untag, upload, upload-to-cloud, user, users, v-card, video, video-camera, vimeo, vimeo-with-circle, vine, vine-with-circle, vinyl, vk, vk-alternitive, vk-with-circle, voicemail, wallet, warning, water, windows-store, xing, xing-with-circle, yelp, youko, youko-with-circle, youtube, youtube-with-circle, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"500px\":61696,\"500px-with-circle\":61697,\"add-to-list\":61698,\"add-user\":61699,\"address\":61700,\"adjust\":61701,\"air\":61702,\"aircraft\":61703,\"aircraft-landing\":61704,\"aircraft-take-off\":61705,\"align-bottom\":61706,\"align-horizontal-middle\":61707,\"align-left\":61708,\"align-right\":61709,\"align-top\":61710,\"align-vertical-middle\":61711,\"app-store\":61712,\"archive\":61713,\"area-graph\":61714,\"arrow-bold-down\":61715,\"arrow-bold-left\":61716,\"arrow-bold-right\":61717,\"arrow-bold-up\":61718,\"arrow-down\":61719,\"arrow-left\":61720,\"arrow-long-down\":61721,\"arrow-long-left\":61722,\"arrow-long-right\":61723,\"arrow-long-up\":61724,\"arrow-right\":61725,\"arrow-up\":61726,\"arrow-with-circle-down\":61727,\"arrow-with-circle-left\":61728,\"arrow-with-circle-right\":61729,\"arrow-with-circle-up\":61730,\"attachment\":61731,\"awareness-ribbon\":61732,\"back\":61733,\"back-in-time\":61734,\"baidu\":61735,\"bar-graph\":61736,\"basecamp\":61737,\"battery\":61738,\"beamed-note\":61739,\"behance\":61740,\"bell\":61741,\"blackboard\":61742,\"block\":61743,\"book\":61744,\"bookmark\":61745,\"bookmarks\":61746,\"bowl\":61747,\"box\":61748,\"briefcase\":61749,\"browser\":61750,\"brush\":61751,\"bucket\":61752,\"bug\":61753,\"cake\":61754,\"calculator\":61755,\"calendar\":61756,\"camera\":61757,\"ccw\":61758,\"chat\":61759,\"check\":61760,\"chevron-down\":61761,\"chevron-left\":61762,\"chevron-right\":61763,\"chevron-small-down\":61764,\"chevron-small-left\":61765,\"chevron-small-right\":61766,\"chevron-small-up\":61767,\"chevron-thin-down\":61768,\"chevron-thin-left\":61769,\"chevron-thin-right\":61770,\"chevron-thin-up\":61771,\"chevron-up\":61772,\"chevron-with-circle-down\":61773,\"chevron-with-circle-left\":61774,\"chevron-with-circle-right\":61775,\"chevron-with-circle-up\":61776,\"circle\":61777,\"circle-with-cross\":61778,\"circle-with-minus\":61779,\"circle-with-plus\":61780,\"circular-graph\":61781,\"clapperboard\":61782,\"classic-computer\":61783,\"clipboard\":61784,\"clock\":61785,\"cloud\":61786,\"code\":61787,\"cog\":61788,\"colours\":61789,\"compass\":61790,\"controller-fast-backward\":61791,\"controller-fast-forward\":61792,\"controller-jump-to-start\":61793,\"controller-next\":61794,\"controller-paus\":61795,\"controller-play\":61796,\"controller-record\":61797,\"controller-stop\":61798,\"controller-volume\":61799,\"copy\":61800,\"creative-cloud\":61801,\"creative-commons\":61802,\"creative-commons-attribution\":61803,\"creative-commons-noderivs\":61804,\"creative-commons-noncommercial-eu\":61805,\"creative-commons-noncommercial-us\":61806,\"creative-commons-public-domain\":61807,\"creative-commons-remix\":61808,\"creative-commons-share\":61809,\"creative-commons-sharealike\":61810,\"credit\":61811,\"credit-card\":61812,\"crop\":61813,\"cross\":61814,\"cup\":61815,\"cw\":61816,\"cycle\":61817,\"database\":61818,\"dial-pad\":61819,\"direction\":61820,\"document\":61821,\"document-landscape\":61822,\"documents\":61823,\"dot-single\":61824,\"dots-three-horizontal\":61825,\"dots-three-vertical\":61826,\"dots-two-horizontal\":61827,\"dots-two-vertical\":61828,\"download\":61829,\"dribbble\":61830,\"dribbble-with-circle\":61831,\"drink\":61832,\"drive\":61833,\"drop\":61834,\"dropbox\":61835,\"edit\":61836,\"email\":61837,\"emoji-flirt\":61838,\"emoji-happy\":61839,\"emoji-neutral\":61840,\"emoji-sad\":61841,\"erase\":61842,\"eraser\":61843,\"evernote\":61844,\"export\":61845,\"eye\":61846,\"eye-with-line\":61847,\"facebook\":61848,\"facebook-with-circle\":61849,\"feather\":61850,\"fingerprint\":61851,\"flag\":61852,\"flash\":61853,\"flashlight\":61854,\"flat-brush\":61855,\"flattr\":61856,\"flickr\":61857,\"flickr-with-circle\":61858,\"flow-branch\":61859,\"flow-cascade\":61860,\"flow-line\":61861,\"flow-parallel\":61862,\"flow-tree\":61863,\"flower\":61864,\"folder\":61865,\"folder-images\":61866,\"folder-music\":61867,\"folder-video\":61868,\"forward\":61869,\"foursquare\":61870,\"funnel\":61871,\"game-controller\":61872,\"gauge\":61873,\"github\":61874,\"github-with-circle\":61875,\"globe\":61876,\"google-\":61877,\"google--with-circle\":61878,\"google-drive\":61879,\"google-hangouts\":61880,\"google-play\":61881,\"graduation-cap\":61882,\"grid\":61883,\"grooveshark\":61884,\"hair-cross\":61885,\"hand\":61886,\"heart\":61887,\"heart-outlined\":61888,\"help\":61889,\"help-with-circle\":61890,\"home\":61891,\"hour-glass\":61892,\"houzz\":61893,\"icloud\":61894,\"image\":61895,\"image-inverted\":61896,\"images\":61897,\"inbox\":61898,\"infinity\":61899,\"info\":61900,\"info-with-circle\":61901,\"instagram\":61902,\"instagram-with-circle\":61903,\"install\":61904,\"key\":61905,\"keyboard\":61906,\"lab-flask\":61907,\"landline\":61908,\"language\":61909,\"laptop\":61910,\"lastfm\":61911,\"lastfm-with-circle\":61912,\"layers\":61913,\"leaf\":61914,\"level-down\":61915,\"level-up\":61916,\"lifebuoy\":61917,\"light-bulb\":61918,\"light-down\":61919,\"light-up\":61920,\"line-graph\":61921,\"link\":61922,\"linkedin\":61923,\"linkedin-with-circle\":61924,\"list\":61925,\"location\":61926,\"location-pin\":61927,\"lock\":61928,\"lock-open\":61929,\"log-out\":61930,\"login\":61931,\"loop\":61932,\"magnet\":61933,\"magnifying-glass\":61934,\"mail\":61935,\"mail-with-circle\":61936,\"man\":61937,\"map\":61938,\"mask\":61939,\"medal\":61940,\"medium\":61941,\"medium-with-circle\":61942,\"megaphone\":61943,\"menu\":61944,\"merge\":61945,\"message\":61946,\"mic\":61947,\"minus\":61948,\"mixi\":61949,\"mobile\":61950,\"modern-mic\":61951,\"moon\":61952,\"mouse\":61953,\"mouse-pointer\":61954,\"music\":61955,\"network\":61956,\"new\":61957,\"new-message\":61958,\"news\":61959,\"newsletter\":61960,\"note\":61961,\"notification\":61962,\"notifications-off\":61963,\"old-mobile\":61964,\"old-phone\":61965,\"onedrive\":61966,\"open-book\":61967,\"palette\":61968,\"paper-plane\":61969,\"paypal\":61970,\"pencil\":61971,\"phone\":61972,\"picasa\":61973,\"pie-chart\":61974,\"pin\":61975,\"pinterest\":61976,\"pinterest-with-circle\":61977,\"plus\":61978,\"popup\":61979,\"power-plug\":61980,\"price-ribbon\":61981,\"price-tag\":61982,\"print\":61983,\"progress-empty\":61984,\"progress-full\":61985,\"progress-one\":61986,\"progress-two\":61987,\"publish\":61988,\"qq\":61989,\"qq-with-circle\":61990,\"quote\":61991,\"radio\":61992,\"raft\":61993,\"raft-with-circle\":61994,\"rainbow\":61995,\"rdio\":61996,\"rdio-with-circle\":61997,\"remove-user\":61998,\"renren\":61999,\"reply\":62000,\"reply-all\":62001,\"resize-100-\":62002,\"resize-full-screen\":62003,\"retweet\":62004,\"rocket\":62005,\"round-brush\":62006,\"rss\":62007,\"ruler\":62008,\"save\":62009,\"scissors\":62010,\"scribd\":62011,\"select-arrows\":62012,\"share\":62013,\"share-alternative\":62014,\"shareable\":62015,\"shield\":62016,\"shop\":62017,\"shopping-bag\":62018,\"shopping-basket\":62019,\"shopping-cart\":62020,\"shuffle\":62021,\"signal\":62022,\"sina-weibo\":62023,\"skype\":62024,\"skype-with-circle\":62025,\"slideshare\":62026,\"smashing\":62027,\"sound\":62028,\"sound-mix\":62029,\"sound-mute\":62030,\"soundcloud\":62031,\"sports-club\":62032,\"spotify\":62033,\"spotify-with-circle\":62034,\"spreadsheet\":62035,\"squared-cross\":62036,\"squared-minus\":62037,\"squared-plus\":62038,\"star\":62039,\"star-outlined\":62040,\"stopwatch\":62041,\"stumbleupon\":62042,\"stumbleupon-with-circle\":62043,\"suitcase\":62044,\"swap\":62045,\"swarm\":62046,\"sweden\":62047,\"switch\":62048,\"tablet\":62049,\"tablet-mobile-combo\":62050,\"tag\":62051,\"text\":62052,\"text-document\":62053,\"text-document-inverted\":62054,\"thermometer\":62055,\"thumbs-down\":62056,\"thumbs-up\":62057,\"thunder-cloud\":62058,\"ticket\":62059,\"time-slot\":62060,\"tools\":62061,\"traffic-cone\":62062,\"trash\":62063,\"tree\":62064,\"triangle-down\":62065,\"triangle-left\":62066,\"triangle-right\":62067,\"triangle-up\":62068,\"tripadvisor\":62069,\"trophy\":62070,\"tumblr\":62071,\"tumblr-with-circle\":62072,\"tv\":62073,\"twitter\":62074,\"twitter-with-circle\":62075,\"typing\":62076,\"uninstall\":62077,\"unread\":62078,\"untag\":62079,\"upload\":62080,\"upload-to-cloud\":62081,\"user\":62082,\"users\":62083,\"v-card\":62084,\"video\":62085,\"video-camera\":62086,\"vimeo\":62087,\"vimeo-with-circle\":62088,\"vine\":62089,\"vine-with-circle\":62090,\"vinyl\":62091,\"vk\":62092,\"vk-alternitive\":62093,\"vk-with-circle\":62094,\"voicemail\":62095,\"wallet\":62096,\"warning\":62097,\"water\":62098,\"windows-store\":62099,\"xing\":62100,\"xing-with-circle\":62101,\"yelp\":62102,\"youko\":62103,\"youko-with-circle\":62104,\"youtube\":62105,\"youtube-with-circle\":62106}");

/***/ }),

/***/ "../../../node_modules/react-native-vector-icons/glyphmaps/EvilIcons.json":
/*!*********************************************************************************************************************************!*\
  !*** /Users/diego.antonelli/Desktop/projects/widgets-resources/node_modules/react-native-vector-icons/glyphmaps/EvilIcons.json ***!
  \*********************************************************************************************************************************/
/*! exports provided: archive, arrow-down, arrow-left, arrow-right, arrow-up, bell, calendar, camera, cart, chart, check, chevron-down, chevron-left, chevron-right, chevron-up, clock, close, close-o, comment, credit-card, envelope, exclamation, external-link, eye, gear, heart, image, like, link, location, lock, minus, navicon, paperclip, pencil, play, plus, pointer, question, redo, refresh, retweet, sc-facebook, sc-github, sc-google-plus, sc-instagram, sc-linkedin, sc-odnoklassniki, sc-pinterest, sc-skype, sc-soundcloud, sc-telegram, sc-tumblr, sc-twitter, sc-vimeo, sc-vk, sc-youtube, search, share-apple, share-google, spinner, spinner-2, spinner-3, star, tag, trash, trophy, undo, unlock, user, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"archive\":61696,\"arrow-down\":61697,\"arrow-left\":61698,\"arrow-right\":61699,\"arrow-up\":61700,\"bell\":61701,\"calendar\":61702,\"camera\":61703,\"cart\":61704,\"chart\":61705,\"check\":61706,\"chevron-down\":61707,\"chevron-left\":61708,\"chevron-right\":61709,\"chevron-up\":61710,\"clock\":61711,\"close\":61712,\"close-o\":61713,\"comment\":61714,\"credit-card\":61715,\"envelope\":61716,\"exclamation\":61717,\"external-link\":61718,\"eye\":61719,\"gear\":61720,\"heart\":61721,\"image\":61722,\"like\":61723,\"link\":61724,\"location\":61725,\"lock\":61726,\"minus\":61727,\"navicon\":61728,\"paperclip\":61729,\"pencil\":61730,\"play\":61731,\"plus\":61732,\"pointer\":61733,\"question\":61734,\"redo\":61735,\"refresh\":61736,\"retweet\":61737,\"sc-facebook\":61738,\"sc-github\":61739,\"sc-google-plus\":61740,\"sc-instagram\":61741,\"sc-linkedin\":61742,\"sc-odnoklassniki\":61743,\"sc-pinterest\":61744,\"sc-skype\":61745,\"sc-soundcloud\":61746,\"sc-telegram\":61747,\"sc-tumblr\":61748,\"sc-twitter\":61749,\"sc-vimeo\":61750,\"sc-vk\":61751,\"sc-youtube\":61752,\"search\":61753,\"share-apple\":61754,\"share-google\":61755,\"spinner\":61756,\"spinner-2\":61757,\"spinner-3\":61758,\"star\":61759,\"tag\":61760,\"trash\":61761,\"trophy\":61762,\"undo\":61763,\"unlock\":61764,\"user\":61765}");

/***/ }),

/***/ "../../../node_modules/react-native-vector-icons/glyphmaps/Feather.json":
/*!*******************************************************************************************************************************!*\
  !*** /Users/diego.antonelli/Desktop/projects/widgets-resources/node_modules/react-native-vector-icons/glyphmaps/Feather.json ***!
  \*******************************************************************************************************************************/
/*! exports provided: activity, airplay, alert-circle, alert-octagon, alert-triangle, align-center, align-justify, align-left, align-right, anchor, aperture, arrow-down, arrow-down-left, arrow-down-right, arrow-left, arrow-right, arrow-up, arrow-up-left, arrow-up-right, at-sign, award, bar-chart, bar-chart-2, battery, battery-charging, bell, bell-off, bluetooth, bold, book, bookmark, box, briefcase, calendar, camera, camera-off, cast, check, check-circle, check-square, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, chrome, circle, clipboard, clock, cloud, cloud-drizzle, cloud-lightning, cloud-off, cloud-rain, cloud-snow, codepen, command, compass, copy, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, cpu, credit-card, crop, crosshair, delete, disc, download, download-cloud, droplet, edit, edit-2, edit-3, external-link, eye, eye-off, facebook, fast-forward, feather, file, file-minus, file-plus, file-text, film, filter, flag, folder, github, gitlab, globe, grid, hash, headphones, heart, help-circle, home, image, inbox, info, instagram, italic, layers, layout, life-buoy, link, link-2, list, loader, lock, log-in, log-out, mail, map, map-pin, maximize, maximize-2, menu, message-circle, message-square, mic, mic-off, minimize, minimize-2, minus, minus-circle, minus-square, monitor, moon, more-horizontal, more-vertical, move, music, navigation, navigation-2, octagon, package, paperclip, pause, pause-circle, percent, phone, phone-call, phone-forwarded, phone-incoming, phone-missed, phone-off, phone-outgoing, pie-chart, play, play-circle, plus, plus-circle, plus-square, pocket, power, printer, radio, refresh-ccw, refresh-cw, repeat, rewind, rotate-ccw, rotate-cw, save, scissors, search, server, settings, share, share-2, shield, shopping-cart, shuffle, sidebar, skip-back, skip-forward, slack, slash, sliders, smartphone, speaker, square, star, stop-circle, sun, sunrise, sunset, tablet, tag, target, thermometer, thumbs-down, thumbs-up, toggle-left, toggle-right, trash, trash-2, trending-down, trending-up, triangle, tv, twitter, type, umbrella, underline, unlock, upload, upload-cloud, user, user-check, user-minus, user-plus, user-x, users, video, video-off, voicemail, volume, volume-1, volume-2, volume-x, watch, wifi, wifi-off, wind, x, x-circle, x-square, zap, zoom-in, zoom-out, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"activity\":59648,\"airplay\":59649,\"alert-circle\":59650,\"alert-octagon\":59651,\"alert-triangle\":59652,\"align-center\":59653,\"align-justify\":59654,\"align-left\":59655,\"align-right\":59656,\"anchor\":59657,\"aperture\":59658,\"arrow-down\":59659,\"arrow-down-left\":59660,\"arrow-down-right\":59661,\"arrow-left\":59662,\"arrow-right\":59663,\"arrow-up\":59664,\"arrow-up-left\":59665,\"arrow-up-right\":59666,\"at-sign\":59667,\"award\":59668,\"bar-chart\":59669,\"bar-chart-2\":59670,\"battery\":59671,\"battery-charging\":59672,\"bell\":59673,\"bell-off\":59674,\"bluetooth\":59675,\"bold\":59676,\"book\":59677,\"bookmark\":59678,\"box\":59679,\"briefcase\":59680,\"calendar\":59681,\"camera\":59682,\"camera-off\":59683,\"cast\":59684,\"check\":59685,\"check-circle\":59686,\"check-square\":59687,\"chevron-down\":59688,\"chevron-left\":59689,\"chevron-right\":59690,\"chevron-up\":59691,\"chevrons-down\":59692,\"chevrons-left\":59693,\"chevrons-right\":59694,\"chevrons-up\":59695,\"chrome\":59696,\"circle\":59697,\"clipboard\":59698,\"clock\":59699,\"cloud\":59700,\"cloud-drizzle\":59701,\"cloud-lightning\":59702,\"cloud-off\":59703,\"cloud-rain\":59704,\"cloud-snow\":59705,\"codepen\":59706,\"command\":59707,\"compass\":59708,\"copy\":59709,\"corner-down-left\":59710,\"corner-down-right\":59711,\"corner-left-down\":59712,\"corner-left-up\":59713,\"corner-right-down\":59714,\"corner-right-up\":59715,\"corner-up-left\":59716,\"corner-up-right\":59717,\"cpu\":59718,\"credit-card\":59719,\"crop\":59720,\"crosshair\":59721,\"delete\":59722,\"disc\":59723,\"download\":59724,\"download-cloud\":59725,\"droplet\":59726,\"edit\":59727,\"edit-2\":59728,\"edit-3\":59729,\"external-link\":59730,\"eye\":59731,\"eye-off\":59732,\"facebook\":59733,\"fast-forward\":59734,\"feather\":59735,\"file\":59736,\"file-minus\":59737,\"file-plus\":59738,\"file-text\":59739,\"film\":59740,\"filter\":59741,\"flag\":59742,\"folder\":59743,\"github\":59744,\"gitlab\":59745,\"globe\":59746,\"grid\":59747,\"hash\":59748,\"headphones\":59749,\"heart\":59750,\"help-circle\":59751,\"home\":59752,\"image\":59753,\"inbox\":59754,\"info\":59755,\"instagram\":59756,\"italic\":59757,\"layers\":59758,\"layout\":59759,\"life-buoy\":59760,\"link\":59761,\"link-2\":59762,\"list\":59763,\"loader\":59764,\"lock\":59765,\"log-in\":59766,\"log-out\":59767,\"mail\":59768,\"map\":59769,\"map-pin\":59770,\"maximize\":59771,\"maximize-2\":59772,\"menu\":59773,\"message-circle\":59774,\"message-square\":59775,\"mic\":59776,\"mic-off\":59777,\"minimize\":59778,\"minimize-2\":59779,\"minus\":59780,\"minus-circle\":59781,\"minus-square\":59782,\"monitor\":59783,\"moon\":59784,\"more-horizontal\":59785,\"more-vertical\":59786,\"move\":59787,\"music\":59788,\"navigation\":59789,\"navigation-2\":59790,\"octagon\":59791,\"package\":59792,\"paperclip\":59793,\"pause\":59794,\"pause-circle\":59795,\"percent\":59796,\"phone\":59797,\"phone-call\":59798,\"phone-forwarded\":59799,\"phone-incoming\":59800,\"phone-missed\":59801,\"phone-off\":59802,\"phone-outgoing\":59803,\"pie-chart\":59804,\"play\":59805,\"play-circle\":59806,\"plus\":59807,\"plus-circle\":59808,\"plus-square\":59809,\"pocket\":59810,\"power\":59811,\"printer\":59812,\"radio\":59813,\"refresh-ccw\":59814,\"refresh-cw\":59815,\"repeat\":59816,\"rewind\":59817,\"rotate-ccw\":59818,\"rotate-cw\":59819,\"save\":59820,\"scissors\":59821,\"search\":59822,\"server\":59823,\"settings\":59824,\"share\":59825,\"share-2\":59826,\"shield\":59827,\"shopping-cart\":59828,\"shuffle\":59829,\"sidebar\":59830,\"skip-back\":59831,\"skip-forward\":59832,\"slack\":59833,\"slash\":59834,\"sliders\":59835,\"smartphone\":59836,\"speaker\":59837,\"square\":59838,\"star\":59839,\"stop-circle\":59840,\"sun\":59841,\"sunrise\":59842,\"sunset\":59843,\"tablet\":59844,\"tag\":59845,\"target\":59846,\"thermometer\":59847,\"thumbs-down\":59848,\"thumbs-up\":59849,\"toggle-left\":59850,\"toggle-right\":59851,\"trash\":59852,\"trash-2\":59853,\"trending-down\":59854,\"trending-up\":59855,\"triangle\":59856,\"tv\":59857,\"twitter\":59858,\"type\":59859,\"umbrella\":59860,\"underline\":59861,\"unlock\":59862,\"upload\":59863,\"upload-cloud\":59864,\"user\":59865,\"user-check\":59866,\"user-minus\":59867,\"user-plus\":59868,\"user-x\":59869,\"users\":59870,\"video\":59871,\"video-off\":59872,\"voicemail\":59873,\"volume\":59874,\"volume-1\":59875,\"volume-2\":59876,\"volume-x\":59877,\"watch\":59878,\"wifi\":59879,\"wifi-off\":59880,\"wind\":59881,\"x\":59882,\"x-circle\":59883,\"x-square\":59884,\"zap\":59885,\"zoom-in\":59886,\"zoom-out\":59887}");

/***/ }),

/***/ "../../../node_modules/react-native-vector-icons/glyphmaps/FontAwesome.json":
/*!***********************************************************************************************************************************!*\
  !*** /Users/diego.antonelli/Desktop/projects/widgets-resources/node_modules/react-native-vector-icons/glyphmaps/FontAwesome.json ***!
  \***********************************************************************************************************************************/
/*! exports provided: glass, music, search, envelope-o, heart, star, star-o, user, film, th-large, th, th-list, check, remove, close, times, search-plus, search-minus, power-off, signal, gear, cog, trash-o, home, file-o, clock-o, road, download, arrow-circle-o-down, arrow-circle-o-up, inbox, play-circle-o, rotate-right, repeat, refresh, list-alt, lock, flag, headphones, volume-off, volume-down, volume-up, qrcode, barcode, tag, tags, book, bookmark, print, camera, font, bold, italic, text-height, text-width, align-left, align-center, align-right, align-justify, list, dedent, outdent, indent, video-camera, photo, image, picture-o, pencil, map-marker, adjust, tint, edit, pencil-square-o, share-square-o, check-square-o, arrows, step-backward, fast-backward, backward, play, pause, stop, forward, fast-forward, step-forward, eject, chevron-left, chevron-right, plus-circle, minus-circle, times-circle, check-circle, question-circle, info-circle, crosshairs, times-circle-o, check-circle-o, ban, arrow-left, arrow-right, arrow-up, arrow-down, mail-forward, share, expand, compress, plus, minus, asterisk, exclamation-circle, gift, leaf, fire, eye, eye-slash, warning, exclamation-triangle, plane, calendar, random, comment, magnet, chevron-up, chevron-down, retweet, shopping-cart, folder, folder-open, arrows-v, arrows-h, bar-chart-o, bar-chart, twitter-square, facebook-square, camera-retro, key, gears, cogs, comments, thumbs-o-up, thumbs-o-down, star-half, heart-o, sign-out, linkedin-square, thumb-tack, external-link, sign-in, trophy, github-square, upload, lemon-o, phone, square-o, bookmark-o, phone-square, twitter, facebook-f, facebook, github, unlock, credit-card, feed, rss, hdd-o, bullhorn, bell, certificate, hand-o-right, hand-o-left, hand-o-up, hand-o-down, arrow-circle-left, arrow-circle-right, arrow-circle-up, arrow-circle-down, globe, wrench, tasks, filter, briefcase, arrows-alt, group, users, chain, link, cloud, flask, cut, scissors, copy, files-o, paperclip, save, floppy-o, square, navicon, reorder, bars, list-ul, list-ol, strikethrough, underline, table, magic, truck, pinterest, pinterest-square, google-plus-square, google-plus, money, caret-down, caret-up, caret-left, caret-right, columns, unsorted, sort, sort-down, sort-desc, sort-up, sort-asc, envelope, linkedin, rotate-left, undo, legal, gavel, dashboard, tachometer, comment-o, comments-o, flash, bolt, sitemap, umbrella, paste, clipboard, lightbulb-o, exchange, cloud-download, cloud-upload, user-md, stethoscope, suitcase, bell-o, coffee, cutlery, file-text-o, building-o, hospital-o, ambulance, medkit, fighter-jet, beer, h-square, plus-square, angle-double-left, angle-double-right, angle-double-up, angle-double-down, angle-left, angle-right, angle-up, angle-down, desktop, laptop, tablet, mobile-phone, mobile, circle-o, quote-left, quote-right, spinner, circle, mail-reply, reply, github-alt, folder-o, folder-open-o, smile-o, frown-o, meh-o, gamepad, keyboard-o, flag-o, flag-checkered, terminal, code, mail-reply-all, reply-all, star-half-empty, star-half-full, star-half-o, location-arrow, crop, code-fork, unlink, chain-broken, question, info, exclamation, superscript, subscript, eraser, puzzle-piece, microphone, microphone-slash, shield, calendar-o, fire-extinguisher, rocket, maxcdn, chevron-circle-left, chevron-circle-right, chevron-circle-up, chevron-circle-down, html5, css3, anchor, unlock-alt, bullseye, ellipsis-h, ellipsis-v, rss-square, play-circle, ticket, minus-square, minus-square-o, level-up, level-down, check-square, pencil-square, external-link-square, share-square, compass, toggle-down, caret-square-o-down, toggle-up, caret-square-o-up, toggle-right, caret-square-o-right, euro, eur, gbp, dollar, usd, rupee, inr, cny, rmb, yen, jpy, ruble, rouble, rub, won, krw, bitcoin, btc, file, file-text, sort-alpha-asc, sort-alpha-desc, sort-amount-asc, sort-amount-desc, sort-numeric-asc, sort-numeric-desc, thumbs-up, thumbs-down, youtube-square, youtube, xing, xing-square, youtube-play, dropbox, stack-overflow, instagram, flickr, adn, bitbucket, bitbucket-square, tumblr, tumblr-square, long-arrow-down, long-arrow-up, long-arrow-left, long-arrow-right, apple, windows, android, linux, dribbble, skype, foursquare, trello, female, male, gittip, gratipay, sun-o, moon-o, archive, bug, vk, weibo, renren, pagelines, stack-exchange, arrow-circle-o-right, arrow-circle-o-left, toggle-left, caret-square-o-left, dot-circle-o, wheelchair, vimeo-square, turkish-lira, try, plus-square-o, space-shuttle, slack, envelope-square, wordpress, openid, institution, bank, university, mortar-board, graduation-cap, yahoo, google, reddit, reddit-square, stumbleupon-circle, stumbleupon, delicious, digg, pied-piper-pp, pied-piper-alt, drupal, joomla, language, fax, building, child, paw, spoon, cube, cubes, behance, behance-square, steam, steam-square, recycle, automobile, car, cab, taxi, tree, spotify, deviantart, soundcloud, database, file-pdf-o, file-word-o, file-excel-o, file-powerpoint-o, file-photo-o, file-picture-o, file-image-o, file-zip-o, file-archive-o, file-sound-o, file-audio-o, file-movie-o, file-video-o, file-code-o, vine, codepen, jsfiddle, life-bouy, life-buoy, life-saver, support, life-ring, circle-o-notch, ra, resistance, rebel, ge, empire, git-square, git, y-combinator-square, yc-square, hacker-news, tencent-weibo, qq, wechat, weixin, send, paper-plane, send-o, paper-plane-o, history, circle-thin, header, paragraph, sliders, share-alt, share-alt-square, bomb, soccer-ball-o, futbol-o, tty, binoculars, plug, slideshare, twitch, yelp, newspaper-o, wifi, calculator, paypal, google-wallet, cc-visa, cc-mastercard, cc-discover, cc-amex, cc-paypal, cc-stripe, bell-slash, bell-slash-o, trash, copyright, at, eyedropper, paint-brush, birthday-cake, area-chart, pie-chart, line-chart, lastfm, lastfm-square, toggle-off, toggle-on, bicycle, bus, ioxhost, angellist, cc, shekel, sheqel, ils, meanpath, buysellads, connectdevelop, dashcube, forumbee, leanpub, sellsy, shirtsinbulk, simplybuilt, skyatlas, cart-plus, cart-arrow-down, diamond, ship, user-secret, motorcycle, street-view, heartbeat, venus, mars, mercury, intersex, transgender, transgender-alt, venus-double, mars-double, venus-mars, mars-stroke, mars-stroke-v, mars-stroke-h, neuter, genderless, facebook-official, pinterest-p, whatsapp, server, user-plus, user-times, hotel, bed, viacoin, train, subway, medium, yc, y-combinator, optin-monster, opencart, expeditedssl, battery-4, battery, battery-full, battery-3, battery-three-quarters, battery-2, battery-half, battery-1, battery-quarter, battery-0, battery-empty, mouse-pointer, i-cursor, object-group, object-ungroup, sticky-note, sticky-note-o, cc-jcb, cc-diners-club, clone, balance-scale, hourglass-o, hourglass-1, hourglass-start, hourglass-2, hourglass-half, hourglass-3, hourglass-end, hourglass, hand-grab-o, hand-rock-o, hand-stop-o, hand-paper-o, hand-scissors-o, hand-lizard-o, hand-spock-o, hand-pointer-o, hand-peace-o, trademark, registered, creative-commons, gg, gg-circle, tripadvisor, odnoklassniki, odnoklassniki-square, get-pocket, wikipedia-w, safari, chrome, firefox, opera, internet-explorer, tv, television, contao, 500px, amazon, calendar-plus-o, calendar-minus-o, calendar-times-o, calendar-check-o, industry, map-pin, map-signs, map-o, map, commenting, commenting-o, houzz, vimeo, black-tie, fonticons, reddit-alien, edge, credit-card-alt, codiepie, modx, fort-awesome, usb, product-hunt, mixcloud, scribd, pause-circle, pause-circle-o, stop-circle, stop-circle-o, shopping-bag, shopping-basket, hashtag, bluetooth, bluetooth-b, percent, gitlab, wpbeginner, wpforms, envira, universal-access, wheelchair-alt, question-circle-o, blind, audio-description, volume-control-phone, braille, assistive-listening-systems, asl-interpreting, american-sign-language-interpreting, deafness, hard-of-hearing, deaf, glide, glide-g, signing, sign-language, low-vision, viadeo, viadeo-square, snapchat, snapchat-ghost, snapchat-square, pied-piper, first-order, yoast, themeisle, google-plus-circle, google-plus-official, fa, font-awesome, handshake-o, envelope-open, envelope-open-o, linode, address-book, address-book-o, vcard, address-card, vcard-o, address-card-o, user-circle, user-circle-o, user-o, id-badge, drivers-license, id-card, drivers-license-o, id-card-o, quora, free-code-camp, telegram, thermometer-4, thermometer, thermometer-full, thermometer-3, thermometer-three-quarters, thermometer-2, thermometer-half, thermometer-1, thermometer-quarter, thermometer-0, thermometer-empty, shower, bathtub, s15, bath, podcast, window-maximize, window-minimize, window-restore, times-rectangle, window-close, times-rectangle-o, window-close-o, bandcamp, grav, etsy, imdb, ravelry, eercast, microchip, snowflake-o, superpowers, wpexplorer, meetup, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"glass\":61440,\"music\":61441,\"search\":61442,\"envelope-o\":61443,\"heart\":61444,\"star\":61445,\"star-o\":61446,\"user\":61447,\"film\":61448,\"th-large\":61449,\"th\":61450,\"th-list\":61451,\"check\":61452,\"remove\":61453,\"close\":61453,\"times\":61453,\"search-plus\":61454,\"search-minus\":61456,\"power-off\":61457,\"signal\":61458,\"gear\":61459,\"cog\":61459,\"trash-o\":61460,\"home\":61461,\"file-o\":61462,\"clock-o\":61463,\"road\":61464,\"download\":61465,\"arrow-circle-o-down\":61466,\"arrow-circle-o-up\":61467,\"inbox\":61468,\"play-circle-o\":61469,\"rotate-right\":61470,\"repeat\":61470,\"refresh\":61473,\"list-alt\":61474,\"lock\":61475,\"flag\":61476,\"headphones\":61477,\"volume-off\":61478,\"volume-down\":61479,\"volume-up\":61480,\"qrcode\":61481,\"barcode\":61482,\"tag\":61483,\"tags\":61484,\"book\":61485,\"bookmark\":61486,\"print\":61487,\"camera\":61488,\"font\":61489,\"bold\":61490,\"italic\":61491,\"text-height\":61492,\"text-width\":61493,\"align-left\":61494,\"align-center\":61495,\"align-right\":61496,\"align-justify\":61497,\"list\":61498,\"dedent\":61499,\"outdent\":61499,\"indent\":61500,\"video-camera\":61501,\"photo\":61502,\"image\":61502,\"picture-o\":61502,\"pencil\":61504,\"map-marker\":61505,\"adjust\":61506,\"tint\":61507,\"edit\":61508,\"pencil-square-o\":61508,\"share-square-o\":61509,\"check-square-o\":61510,\"arrows\":61511,\"step-backward\":61512,\"fast-backward\":61513,\"backward\":61514,\"play\":61515,\"pause\":61516,\"stop\":61517,\"forward\":61518,\"fast-forward\":61520,\"step-forward\":61521,\"eject\":61522,\"chevron-left\":61523,\"chevron-right\":61524,\"plus-circle\":61525,\"minus-circle\":61526,\"times-circle\":61527,\"check-circle\":61528,\"question-circle\":61529,\"info-circle\":61530,\"crosshairs\":61531,\"times-circle-o\":61532,\"check-circle-o\":61533,\"ban\":61534,\"arrow-left\":61536,\"arrow-right\":61537,\"arrow-up\":61538,\"arrow-down\":61539,\"mail-forward\":61540,\"share\":61540,\"expand\":61541,\"compress\":61542,\"plus\":61543,\"minus\":61544,\"asterisk\":61545,\"exclamation-circle\":61546,\"gift\":61547,\"leaf\":61548,\"fire\":61549,\"eye\":61550,\"eye-slash\":61552,\"warning\":61553,\"exclamation-triangle\":61553,\"plane\":61554,\"calendar\":61555,\"random\":61556,\"comment\":61557,\"magnet\":61558,\"chevron-up\":61559,\"chevron-down\":61560,\"retweet\":61561,\"shopping-cart\":61562,\"folder\":61563,\"folder-open\":61564,\"arrows-v\":61565,\"arrows-h\":61566,\"bar-chart-o\":61568,\"bar-chart\":61568,\"twitter-square\":61569,\"facebook-square\":61570,\"camera-retro\":61571,\"key\":61572,\"gears\":61573,\"cogs\":61573,\"comments\":61574,\"thumbs-o-up\":61575,\"thumbs-o-down\":61576,\"star-half\":61577,\"heart-o\":61578,\"sign-out\":61579,\"linkedin-square\":61580,\"thumb-tack\":61581,\"external-link\":61582,\"sign-in\":61584,\"trophy\":61585,\"github-square\":61586,\"upload\":61587,\"lemon-o\":61588,\"phone\":61589,\"square-o\":61590,\"bookmark-o\":61591,\"phone-square\":61592,\"twitter\":61593,\"facebook-f\":61594,\"facebook\":61594,\"github\":61595,\"unlock\":61596,\"credit-card\":61597,\"feed\":61598,\"rss\":61598,\"hdd-o\":61600,\"bullhorn\":61601,\"bell\":61683,\"certificate\":61603,\"hand-o-right\":61604,\"hand-o-left\":61605,\"hand-o-up\":61606,\"hand-o-down\":61607,\"arrow-circle-left\":61608,\"arrow-circle-right\":61609,\"arrow-circle-up\":61610,\"arrow-circle-down\":61611,\"globe\":61612,\"wrench\":61613,\"tasks\":61614,\"filter\":61616,\"briefcase\":61617,\"arrows-alt\":61618,\"group\":61632,\"users\":61632,\"chain\":61633,\"link\":61633,\"cloud\":61634,\"flask\":61635,\"cut\":61636,\"scissors\":61636,\"copy\":61637,\"files-o\":61637,\"paperclip\":61638,\"save\":61639,\"floppy-o\":61639,\"square\":61640,\"navicon\":61641,\"reorder\":61641,\"bars\":61641,\"list-ul\":61642,\"list-ol\":61643,\"strikethrough\":61644,\"underline\":61645,\"table\":61646,\"magic\":61648,\"truck\":61649,\"pinterest\":61650,\"pinterest-square\":61651,\"google-plus-square\":61652,\"google-plus\":61653,\"money\":61654,\"caret-down\":61655,\"caret-up\":61656,\"caret-left\":61657,\"caret-right\":61658,\"columns\":61659,\"unsorted\":61660,\"sort\":61660,\"sort-down\":61661,\"sort-desc\":61661,\"sort-up\":61662,\"sort-asc\":61662,\"envelope\":61664,\"linkedin\":61665,\"rotate-left\":61666,\"undo\":61666,\"legal\":61667,\"gavel\":61667,\"dashboard\":61668,\"tachometer\":61668,\"comment-o\":61669,\"comments-o\":61670,\"flash\":61671,\"bolt\":61671,\"sitemap\":61672,\"umbrella\":61673,\"paste\":61674,\"clipboard\":61674,\"lightbulb-o\":61675,\"exchange\":61676,\"cloud-download\":61677,\"cloud-upload\":61678,\"user-md\":61680,\"stethoscope\":61681,\"suitcase\":61682,\"bell-o\":61602,\"coffee\":61684,\"cutlery\":61685,\"file-text-o\":61686,\"building-o\":61687,\"hospital-o\":61688,\"ambulance\":61689,\"medkit\":61690,\"fighter-jet\":61691,\"beer\":61692,\"h-square\":61693,\"plus-square\":61694,\"angle-double-left\":61696,\"angle-double-right\":61697,\"angle-double-up\":61698,\"angle-double-down\":61699,\"angle-left\":61700,\"angle-right\":61701,\"angle-up\":61702,\"angle-down\":61703,\"desktop\":61704,\"laptop\":61705,\"tablet\":61706,\"mobile-phone\":61707,\"mobile\":61707,\"circle-o\":61708,\"quote-left\":61709,\"quote-right\":61710,\"spinner\":61712,\"circle\":61713,\"mail-reply\":61714,\"reply\":61714,\"github-alt\":61715,\"folder-o\":61716,\"folder-open-o\":61717,\"smile-o\":61720,\"frown-o\":61721,\"meh-o\":61722,\"gamepad\":61723,\"keyboard-o\":61724,\"flag-o\":61725,\"flag-checkered\":61726,\"terminal\":61728,\"code\":61729,\"mail-reply-all\":61730,\"reply-all\":61730,\"star-half-empty\":61731,\"star-half-full\":61731,\"star-half-o\":61731,\"location-arrow\":61732,\"crop\":61733,\"code-fork\":61734,\"unlink\":61735,\"chain-broken\":61735,\"question\":61736,\"info\":61737,\"exclamation\":61738,\"superscript\":61739,\"subscript\":61740,\"eraser\":61741,\"puzzle-piece\":61742,\"microphone\":61744,\"microphone-slash\":61745,\"shield\":61746,\"calendar-o\":61747,\"fire-extinguisher\":61748,\"rocket\":61749,\"maxcdn\":61750,\"chevron-circle-left\":61751,\"chevron-circle-right\":61752,\"chevron-circle-up\":61753,\"chevron-circle-down\":61754,\"html5\":61755,\"css3\":61756,\"anchor\":61757,\"unlock-alt\":61758,\"bullseye\":61760,\"ellipsis-h\":61761,\"ellipsis-v\":61762,\"rss-square\":61763,\"play-circle\":61764,\"ticket\":61765,\"minus-square\":61766,\"minus-square-o\":61767,\"level-up\":61768,\"level-down\":61769,\"check-square\":61770,\"pencil-square\":61771,\"external-link-square\":61772,\"share-square\":61773,\"compass\":61774,\"toggle-down\":61776,\"caret-square-o-down\":61776,\"toggle-up\":61777,\"caret-square-o-up\":61777,\"toggle-right\":61778,\"caret-square-o-right\":61778,\"euro\":61779,\"eur\":61779,\"gbp\":61780,\"dollar\":61781,\"usd\":61781,\"rupee\":61782,\"inr\":61782,\"cny\":61783,\"rmb\":61783,\"yen\":61783,\"jpy\":61783,\"ruble\":61784,\"rouble\":61784,\"rub\":61784,\"won\":61785,\"krw\":61785,\"bitcoin\":61786,\"btc\":61786,\"file\":61787,\"file-text\":61788,\"sort-alpha-asc\":61789,\"sort-alpha-desc\":61790,\"sort-amount-asc\":61792,\"sort-amount-desc\":61793,\"sort-numeric-asc\":61794,\"sort-numeric-desc\":61795,\"thumbs-up\":61796,\"thumbs-down\":61797,\"youtube-square\":61798,\"youtube\":61799,\"xing\":61800,\"xing-square\":61801,\"youtube-play\":61802,\"dropbox\":61803,\"stack-overflow\":61804,\"instagram\":61805,\"flickr\":61806,\"adn\":61808,\"bitbucket\":61809,\"bitbucket-square\":61810,\"tumblr\":61811,\"tumblr-square\":61812,\"long-arrow-down\":61813,\"long-arrow-up\":61814,\"long-arrow-left\":61815,\"long-arrow-right\":61816,\"apple\":61817,\"windows\":61818,\"android\":61819,\"linux\":61820,\"dribbble\":61821,\"skype\":61822,\"foursquare\":61824,\"trello\":61825,\"female\":61826,\"male\":61827,\"gittip\":61828,\"gratipay\":61828,\"sun-o\":61829,\"moon-o\":61830,\"archive\":61831,\"bug\":61832,\"vk\":61833,\"weibo\":61834,\"renren\":61835,\"pagelines\":61836,\"stack-exchange\":61837,\"arrow-circle-o-right\":61838,\"arrow-circle-o-left\":61840,\"toggle-left\":61841,\"caret-square-o-left\":61841,\"dot-circle-o\":61842,\"wheelchair\":61843,\"vimeo-square\":61844,\"turkish-lira\":61845,\"try\":61845,\"plus-square-o\":61846,\"space-shuttle\":61847,\"slack\":61848,\"envelope-square\":61849,\"wordpress\":61850,\"openid\":61851,\"institution\":61852,\"bank\":61852,\"university\":61852,\"mortar-board\":61853,\"graduation-cap\":61853,\"yahoo\":61854,\"google\":61856,\"reddit\":61857,\"reddit-square\":61858,\"stumbleupon-circle\":61859,\"stumbleupon\":61860,\"delicious\":61861,\"digg\":61862,\"pied-piper-pp\":61863,\"pied-piper-alt\":61864,\"drupal\":61865,\"joomla\":61866,\"language\":61867,\"fax\":61868,\"building\":61869,\"child\":61870,\"paw\":61872,\"spoon\":61873,\"cube\":61874,\"cubes\":61875,\"behance\":61876,\"behance-square\":61877,\"steam\":61878,\"steam-square\":61879,\"recycle\":61880,\"automobile\":61881,\"car\":61881,\"cab\":61882,\"taxi\":61882,\"tree\":61883,\"spotify\":61884,\"deviantart\":61885,\"soundcloud\":61886,\"database\":61888,\"file-pdf-o\":61889,\"file-word-o\":61890,\"file-excel-o\":61891,\"file-powerpoint-o\":61892,\"file-photo-o\":61893,\"file-picture-o\":61893,\"file-image-o\":61893,\"file-zip-o\":61894,\"file-archive-o\":61894,\"file-sound-o\":61895,\"file-audio-o\":61895,\"file-movie-o\":61896,\"file-video-o\":61896,\"file-code-o\":61897,\"vine\":61898,\"codepen\":61899,\"jsfiddle\":61900,\"life-bouy\":61901,\"life-buoy\":61901,\"life-saver\":61901,\"support\":61901,\"life-ring\":61901,\"circle-o-notch\":61902,\"ra\":61904,\"resistance\":61904,\"rebel\":61904,\"ge\":61905,\"empire\":61905,\"git-square\":61906,\"git\":61907,\"y-combinator-square\":61908,\"yc-square\":61908,\"hacker-news\":61908,\"tencent-weibo\":61909,\"qq\":61910,\"wechat\":61911,\"weixin\":61911,\"send\":61912,\"paper-plane\":61912,\"send-o\":61913,\"paper-plane-o\":61913,\"history\":61914,\"circle-thin\":61915,\"header\":61916,\"paragraph\":61917,\"sliders\":61918,\"share-alt\":61920,\"share-alt-square\":61921,\"bomb\":61922,\"soccer-ball-o\":61923,\"futbol-o\":61923,\"tty\":61924,\"binoculars\":61925,\"plug\":61926,\"slideshare\":61927,\"twitch\":61928,\"yelp\":61929,\"newspaper-o\":61930,\"wifi\":61931,\"calculator\":61932,\"paypal\":61933,\"google-wallet\":61934,\"cc-visa\":61936,\"cc-mastercard\":61937,\"cc-discover\":61938,\"cc-amex\":61939,\"cc-paypal\":61940,\"cc-stripe\":61941,\"bell-slash\":61942,\"bell-slash-o\":61943,\"trash\":61944,\"copyright\":61945,\"at\":61946,\"eyedropper\":61947,\"paint-brush\":61948,\"birthday-cake\":61949,\"area-chart\":61950,\"pie-chart\":61952,\"line-chart\":61953,\"lastfm\":61954,\"lastfm-square\":61955,\"toggle-off\":61956,\"toggle-on\":61957,\"bicycle\":61958,\"bus\":61959,\"ioxhost\":61960,\"angellist\":61961,\"cc\":61962,\"shekel\":61963,\"sheqel\":61963,\"ils\":61963,\"meanpath\":61964,\"buysellads\":61965,\"connectdevelop\":61966,\"dashcube\":61968,\"forumbee\":61969,\"leanpub\":61970,\"sellsy\":61971,\"shirtsinbulk\":61972,\"simplybuilt\":61973,\"skyatlas\":61974,\"cart-plus\":61975,\"cart-arrow-down\":61976,\"diamond\":61977,\"ship\":61978,\"user-secret\":61979,\"motorcycle\":61980,\"street-view\":61981,\"heartbeat\":61982,\"venus\":61985,\"mars\":61986,\"mercury\":61987,\"intersex\":61988,\"transgender\":61988,\"transgender-alt\":61989,\"venus-double\":61990,\"mars-double\":61991,\"venus-mars\":61992,\"mars-stroke\":61993,\"mars-stroke-v\":61994,\"mars-stroke-h\":61995,\"neuter\":61996,\"genderless\":61997,\"facebook-official\":62000,\"pinterest-p\":62001,\"whatsapp\":62002,\"server\":62003,\"user-plus\":62004,\"user-times\":62005,\"hotel\":62006,\"bed\":62006,\"viacoin\":62007,\"train\":62008,\"subway\":62009,\"medium\":62010,\"yc\":62011,\"y-combinator\":62011,\"optin-monster\":62012,\"opencart\":62013,\"expeditedssl\":62014,\"battery-4\":62016,\"battery\":62016,\"battery-full\":62016,\"battery-3\":62017,\"battery-three-quarters\":62017,\"battery-2\":62018,\"battery-half\":62018,\"battery-1\":62019,\"battery-quarter\":62019,\"battery-0\":62020,\"battery-empty\":62020,\"mouse-pointer\":62021,\"i-cursor\":62022,\"object-group\":62023,\"object-ungroup\":62024,\"sticky-note\":62025,\"sticky-note-o\":62026,\"cc-jcb\":62027,\"cc-diners-club\":62028,\"clone\":62029,\"balance-scale\":62030,\"hourglass-o\":62032,\"hourglass-1\":62033,\"hourglass-start\":62033,\"hourglass-2\":62034,\"hourglass-half\":62034,\"hourglass-3\":62035,\"hourglass-end\":62035,\"hourglass\":62036,\"hand-grab-o\":62037,\"hand-rock-o\":62037,\"hand-stop-o\":62038,\"hand-paper-o\":62038,\"hand-scissors-o\":62039,\"hand-lizard-o\":62040,\"hand-spock-o\":62041,\"hand-pointer-o\":62042,\"hand-peace-o\":62043,\"trademark\":62044,\"registered\":62045,\"creative-commons\":62046,\"gg\":62048,\"gg-circle\":62049,\"tripadvisor\":62050,\"odnoklassniki\":62051,\"odnoklassniki-square\":62052,\"get-pocket\":62053,\"wikipedia-w\":62054,\"safari\":62055,\"chrome\":62056,\"firefox\":62057,\"opera\":62058,\"internet-explorer\":62059,\"tv\":62060,\"television\":62060,\"contao\":62061,\"500px\":62062,\"amazon\":62064,\"calendar-plus-o\":62065,\"calendar-minus-o\":62066,\"calendar-times-o\":62067,\"calendar-check-o\":62068,\"industry\":62069,\"map-pin\":62070,\"map-signs\":62071,\"map-o\":62072,\"map\":62073,\"commenting\":62074,\"commenting-o\":62075,\"houzz\":62076,\"vimeo\":62077,\"black-tie\":62078,\"fonticons\":62080,\"reddit-alien\":62081,\"edge\":62082,\"credit-card-alt\":62083,\"codiepie\":62084,\"modx\":62085,\"fort-awesome\":62086,\"usb\":62087,\"product-hunt\":62088,\"mixcloud\":62089,\"scribd\":62090,\"pause-circle\":62091,\"pause-circle-o\":62092,\"stop-circle\":62093,\"stop-circle-o\":62094,\"shopping-bag\":62096,\"shopping-basket\":62097,\"hashtag\":62098,\"bluetooth\":62099,\"bluetooth-b\":62100,\"percent\":62101,\"gitlab\":62102,\"wpbeginner\":62103,\"wpforms\":62104,\"envira\":62105,\"universal-access\":62106,\"wheelchair-alt\":62107,\"question-circle-o\":62108,\"blind\":62109,\"audio-description\":62110,\"volume-control-phone\":62112,\"braille\":62113,\"assistive-listening-systems\":62114,\"asl-interpreting\":62115,\"american-sign-language-interpreting\":62115,\"deafness\":62116,\"hard-of-hearing\":62116,\"deaf\":62116,\"glide\":62117,\"glide-g\":62118,\"signing\":62119,\"sign-language\":62119,\"low-vision\":62120,\"viadeo\":62121,\"viadeo-square\":62122,\"snapchat\":62123,\"snapchat-ghost\":62124,\"snapchat-square\":62125,\"pied-piper\":62126,\"first-order\":62128,\"yoast\":62129,\"themeisle\":62130,\"google-plus-circle\":62131,\"google-plus-official\":62131,\"fa\":62132,\"font-awesome\":62132,\"handshake-o\":62133,\"envelope-open\":62134,\"envelope-open-o\":62135,\"linode\":62136,\"address-book\":62137,\"address-book-o\":62138,\"vcard\":62139,\"address-card\":62139,\"vcard-o\":62140,\"address-card-o\":62140,\"user-circle\":62141,\"user-circle-o\":62142,\"user-o\":62144,\"id-badge\":62145,\"drivers-license\":62146,\"id-card\":62146,\"drivers-license-o\":62147,\"id-card-o\":62147,\"quora\":62148,\"free-code-camp\":62149,\"telegram\":62150,\"thermometer-4\":62151,\"thermometer\":62151,\"thermometer-full\":62151,\"thermometer-3\":62152,\"thermometer-three-quarters\":62152,\"thermometer-2\":62153,\"thermometer-half\":62153,\"thermometer-1\":62154,\"thermometer-quarter\":62154,\"thermometer-0\":62155,\"thermometer-empty\":62155,\"shower\":62156,\"bathtub\":62157,\"s15\":62157,\"bath\":62157,\"podcast\":62158,\"window-maximize\":62160,\"window-minimize\":62161,\"window-restore\":62162,\"times-rectangle\":62163,\"window-close\":62163,\"times-rectangle-o\":62164,\"window-close-o\":62164,\"bandcamp\":62165,\"grav\":62166,\"etsy\":62167,\"imdb\":62168,\"ravelry\":62169,\"eercast\":62170,\"microchip\":62171,\"snowflake-o\":62172,\"superpowers\":62173,\"wpexplorer\":62174,\"meetup\":62176}");

/***/ }),

/***/ "../../../node_modules/react-native-vector-icons/glyphmaps/Foundation.json":
/*!**********************************************************************************************************************************!*\
  !*** /Users/diego.antonelli/Desktop/projects/widgets-resources/node_modules/react-native-vector-icons/glyphmaps/Foundation.json ***!
  \**********************************************************************************************************************************/
/*! exports provided: address-book, alert, align-center, align-justify, align-left, align-right, anchor, annotate, archive, arrow-down, arrow-left, arrow-right, arrow-up, arrows-compress, arrows-expand, arrows-in, arrows-out, asl, asterisk, at-sign, background-color, battery-empty, battery-full, battery-half, bitcoin-circle, bitcoin, blind, bluetooth, bold, book-bookmark, book, bookmark, braille, burst-new, burst-sale, burst, calendar, camera, check, checkbox, clipboard-notes, clipboard-pencil, clipboard, clock, closed-caption, cloud, comment-minus, comment-quotes, comment-video, comment, comments, compass, contrast, credit-card, crop, crown, css3, database, die-five, die-four, die-one, die-six, die-three, die-two, dislike, dollar-bill, dollar, download, eject, elevator, euro, eye, fast-forward, female-symbol, female, filter, first-aid, flag, folder-add, folder-lock, folder, foot, foundation, graph-bar, graph-horizontal, graph-pie, graph-trend, guide-dog, hearing-aid, heart, home, html5, indent-less, indent-more, info, italic, key, laptop, layout, lightbulb, like, link, list-bullet, list-number, list-thumbnails, list, lock, loop, magnifying-glass, mail, male-female, male-symbol, male, map, marker, megaphone, microphone, minus-circle, minus, mobile-signal, mobile, monitor, mountains, music, next, no-dogs, no-smoking, page-add, page-copy, page-csv, page-delete, page-doc, page-edit, page-export-csv, page-export-doc, page-export-pdf, page-export, page-filled, page-multiple, page-pdf, page-remove, page-search, page, paint-bucket, paperclip, pause, paw, paypal, pencil, photo, play-circle, play-video, play, plus, pound, power, previous, price-tag, pricetag-multiple, print, prohibited, projection-screen, puzzle, quote, record, refresh, results-demographics, results, rewind-ten, rewind, rss, safety-cone, save, share, sheriff-badge, shield, shopping-bag, shopping-cart, shuffle, skull, social-500px, social-adobe, social-amazon, social-android, social-apple, social-behance, social-bing, social-blogger, social-delicious, social-designer-news, social-deviant-art, social-digg, social-dribbble, social-drive, social-dropbox, social-evernote, social-facebook, social-flickr, social-forrst, social-foursquare, social-game-center, social-github, social-google-plus, social-hacker-news, social-hi5, social-instagram, social-joomla, social-lastfm, social-linkedin, social-medium, social-myspace, social-orkut, social-path, social-picasa, social-pinterest, social-rdio, social-reddit, social-skillshare, social-skype, social-smashing-mag, social-snapchat, social-spotify, social-squidoo, social-stack-overflow, social-steam, social-stumbleupon, social-treehouse, social-tumblr, social-twitter, social-vimeo, social-windows, social-xbox, social-yahoo, social-yelp, social-youtube, social-zerply, social-zurb, sound, star, stop, strikethrough, subscript, superscript, tablet-landscape, tablet-portrait, target-two, target, telephone-accessible, telephone, text-color, thumbnails, ticket, torso-business, torso-female, torso, torsos-all-female, torsos-all, torsos-female-male, torsos-male-female, torsos, trash, trees, trophy, underline, universal-access, unlink, unlock, upload-cloud, upload, usb, video, volume-none, volume-strike, volume, web, wheelchair, widget, wrench, x-circle, x, yen, zoom-in, zoom-out, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"address-book\":61696,\"alert\":61697,\"align-center\":61698,\"align-justify\":61699,\"align-left\":61700,\"align-right\":61701,\"anchor\":61702,\"annotate\":61703,\"archive\":61704,\"arrow-down\":61705,\"arrow-left\":61706,\"arrow-right\":61707,\"arrow-up\":61708,\"arrows-compress\":61709,\"arrows-expand\":61710,\"arrows-in\":61711,\"arrows-out\":61712,\"asl\":61713,\"asterisk\":61714,\"at-sign\":61715,\"background-color\":61716,\"battery-empty\":61717,\"battery-full\":61718,\"battery-half\":61719,\"bitcoin-circle\":61720,\"bitcoin\":61721,\"blind\":61722,\"bluetooth\":61723,\"bold\":61724,\"book-bookmark\":61725,\"book\":61726,\"bookmark\":61727,\"braille\":61728,\"burst-new\":61729,\"burst-sale\":61730,\"burst\":61731,\"calendar\":61732,\"camera\":61733,\"check\":61734,\"checkbox\":61735,\"clipboard-notes\":61736,\"clipboard-pencil\":61737,\"clipboard\":61738,\"clock\":61739,\"closed-caption\":61740,\"cloud\":61741,\"comment-minus\":61742,\"comment-quotes\":61743,\"comment-video\":61744,\"comment\":61745,\"comments\":61746,\"compass\":61747,\"contrast\":61748,\"credit-card\":61749,\"crop\":61750,\"crown\":61751,\"css3\":61752,\"database\":61753,\"die-five\":61754,\"die-four\":61755,\"die-one\":61756,\"die-six\":61757,\"die-three\":61758,\"die-two\":61759,\"dislike\":61760,\"dollar-bill\":61761,\"dollar\":61762,\"download\":61763,\"eject\":61764,\"elevator\":61765,\"euro\":61766,\"eye\":61767,\"fast-forward\":61768,\"female-symbol\":61769,\"female\":61770,\"filter\":61771,\"first-aid\":61772,\"flag\":61773,\"folder-add\":61774,\"folder-lock\":61775,\"folder\":61776,\"foot\":61777,\"foundation\":61778,\"graph-bar\":61779,\"graph-horizontal\":61780,\"graph-pie\":61781,\"graph-trend\":61782,\"guide-dog\":61783,\"hearing-aid\":61784,\"heart\":61785,\"home\":61786,\"html5\":61787,\"indent-less\":61788,\"indent-more\":61789,\"info\":61790,\"italic\":61791,\"key\":61792,\"laptop\":61793,\"layout\":61794,\"lightbulb\":61795,\"like\":61796,\"link\":61797,\"list-bullet\":61798,\"list-number\":61799,\"list-thumbnails\":61800,\"list\":61801,\"lock\":61802,\"loop\":61803,\"magnifying-glass\":61804,\"mail\":61805,\"male-female\":61806,\"male-symbol\":61807,\"male\":61808,\"map\":61809,\"marker\":61810,\"megaphone\":61811,\"microphone\":61812,\"minus-circle\":61813,\"minus\":61814,\"mobile-signal\":61815,\"mobile\":61816,\"monitor\":61817,\"mountains\":61818,\"music\":61819,\"next\":61820,\"no-dogs\":61821,\"no-smoking\":61822,\"page-add\":61823,\"page-copy\":61824,\"page-csv\":61825,\"page-delete\":61826,\"page-doc\":61827,\"page-edit\":61828,\"page-export-csv\":61829,\"page-export-doc\":61830,\"page-export-pdf\":61831,\"page-export\":61832,\"page-filled\":61833,\"page-multiple\":61834,\"page-pdf\":61835,\"page-remove\":61836,\"page-search\":61837,\"page\":61838,\"paint-bucket\":61839,\"paperclip\":61840,\"pause\":61841,\"paw\":61842,\"paypal\":61843,\"pencil\":61844,\"photo\":61845,\"play-circle\":61846,\"play-video\":61847,\"play\":61848,\"plus\":61849,\"pound\":61850,\"power\":61851,\"previous\":61852,\"price-tag\":61853,\"pricetag-multiple\":61854,\"print\":61855,\"prohibited\":61856,\"projection-screen\":61857,\"puzzle\":61858,\"quote\":61859,\"record\":61860,\"refresh\":61861,\"results-demographics\":61862,\"results\":61863,\"rewind-ten\":61864,\"rewind\":61865,\"rss\":61866,\"safety-cone\":61867,\"save\":61868,\"share\":61869,\"sheriff-badge\":61870,\"shield\":61871,\"shopping-bag\":61872,\"shopping-cart\":61873,\"shuffle\":61874,\"skull\":61875,\"social-500px\":61876,\"social-adobe\":61877,\"social-amazon\":61878,\"social-android\":61879,\"social-apple\":61880,\"social-behance\":61881,\"social-bing\":61882,\"social-blogger\":61883,\"social-delicious\":61884,\"social-designer-news\":61885,\"social-deviant-art\":61886,\"social-digg\":61887,\"social-dribbble\":61888,\"social-drive\":61889,\"social-dropbox\":61890,\"social-evernote\":61891,\"social-facebook\":61892,\"social-flickr\":61893,\"social-forrst\":61894,\"social-foursquare\":61895,\"social-game-center\":61896,\"social-github\":61897,\"social-google-plus\":61898,\"social-hacker-news\":61899,\"social-hi5\":61900,\"social-instagram\":61901,\"social-joomla\":61902,\"social-lastfm\":61903,\"social-linkedin\":61904,\"social-medium\":61905,\"social-myspace\":61906,\"social-orkut\":61907,\"social-path\":61908,\"social-picasa\":61909,\"social-pinterest\":61910,\"social-rdio\":61911,\"social-reddit\":61912,\"social-skillshare\":61913,\"social-skype\":61914,\"social-smashing-mag\":61915,\"social-snapchat\":61916,\"social-spotify\":61917,\"social-squidoo\":61918,\"social-stack-overflow\":61919,\"social-steam\":61920,\"social-stumbleupon\":61921,\"social-treehouse\":61922,\"social-tumblr\":61923,\"social-twitter\":61924,\"social-vimeo\":61925,\"social-windows\":61926,\"social-xbox\":61927,\"social-yahoo\":61928,\"social-yelp\":61929,\"social-youtube\":61930,\"social-zerply\":61931,\"social-zurb\":61932,\"sound\":61933,\"star\":61934,\"stop\":61935,\"strikethrough\":61936,\"subscript\":61937,\"superscript\":61938,\"tablet-landscape\":61939,\"tablet-portrait\":61940,\"target-two\":61941,\"target\":61942,\"telephone-accessible\":61943,\"telephone\":61944,\"text-color\":61945,\"thumbnails\":61946,\"ticket\":61947,\"torso-business\":61948,\"torso-female\":61949,\"torso\":61950,\"torsos-all-female\":61951,\"torsos-all\":61952,\"torsos-female-male\":61953,\"torsos-male-female\":61954,\"torsos\":61955,\"trash\":61956,\"trees\":61957,\"trophy\":61958,\"underline\":61959,\"universal-access\":61960,\"unlink\":61961,\"unlock\":61962,\"upload-cloud\":61963,\"upload\":61964,\"usb\":61965,\"video\":61966,\"volume-none\":61967,\"volume-strike\":61968,\"volume\":61969,\"web\":61970,\"wheelchair\":61971,\"widget\":61972,\"wrench\":61973,\"x-circle\":61974,\"x\":61975,\"yen\":61976,\"zoom-in\":61977,\"zoom-out\":61978}");

/***/ }),

/***/ "../../../node_modules/react-native-vector-icons/glyphmaps/Ionicons.json":
/*!********************************************************************************************************************************!*\
  !*** /Users/diego.antonelli/Desktop/projects/widgets-resources/node_modules/react-native-vector-icons/glyphmaps/Ionicons.json ***!
  \********************************************************************************************************************************/
/*! exports provided: ios-add, ios-add-circle, ios-add-circle-outline, ios-add-outline, ios-alarm, ios-alarm-outline, ios-albums, ios-albums-outline, ios-alert, ios-alert-outline, ios-american-football, ios-american-football-outline, ios-analytics, ios-analytics-outline, ios-aperture, ios-aperture-outline, ios-apps, ios-apps-outline, ios-appstore, ios-appstore-outline, ios-archive, ios-archive-outline, ios-arrow-back, ios-arrow-back-outline, ios-arrow-down, ios-arrow-down-outline, ios-arrow-dropdown, ios-arrow-dropdown-circle, ios-arrow-dropdown-circle-outline, ios-arrow-dropdown-outline, ios-arrow-dropleft, ios-arrow-dropleft-circle, ios-arrow-dropleft-circle-outline, ios-arrow-dropleft-outline, ios-arrow-dropright, ios-arrow-dropright-circle, ios-arrow-dropright-circle-outline, ios-arrow-dropright-outline, ios-arrow-dropup, ios-arrow-dropup-circle, ios-arrow-dropup-circle-outline, ios-arrow-dropup-outline, ios-arrow-forward, ios-arrow-forward-outline, ios-arrow-round-back, ios-arrow-round-back-outline, ios-arrow-round-down, ios-arrow-round-down-outline, ios-arrow-round-forward, ios-arrow-round-forward-outline, ios-arrow-round-up, ios-arrow-round-up-outline, ios-arrow-up, ios-arrow-up-outline, ios-at, ios-at-outline, ios-attach, ios-attach-outline, ios-backspace, ios-backspace-outline, ios-barcode, ios-barcode-outline, ios-baseball, ios-baseball-outline, ios-basket, ios-basket-outline, ios-basketball, ios-basketball-outline, ios-battery-charging, ios-battery-charging-outline, ios-battery-dead, ios-battery-dead-outline, ios-battery-full, ios-battery-full-outline, ios-beaker, ios-beaker-outline, ios-beer, ios-beer-outline, ios-bicycle, ios-bicycle-outline, ios-bluetooth, ios-bluetooth-outline, ios-boat, ios-boat-outline, ios-body, ios-body-outline, ios-bonfire, ios-bonfire-outline, ios-book, ios-book-outline, ios-bookmark, ios-bookmark-outline, ios-bookmarks, ios-bookmarks-outline, ios-bowtie, ios-bowtie-outline, ios-briefcase, ios-briefcase-outline, ios-browsers, ios-browsers-outline, ios-brush, ios-brush-outline, ios-bug, ios-bug-outline, ios-build, ios-build-outline, ios-bulb, ios-bulb-outline, ios-bus, ios-bus-outline, ios-cafe, ios-cafe-outline, ios-calculator, ios-calculator-outline, ios-calendar, ios-calendar-outline, ios-call, ios-call-outline, ios-camera, ios-camera-outline, ios-car, ios-car-outline, ios-card, ios-card-outline, ios-cart, ios-cart-outline, ios-cash, ios-cash-outline, ios-chatboxes, ios-chatboxes-outline, ios-chatbubbles, ios-chatbubbles-outline, ios-checkbox, ios-checkbox-outline, ios-checkmark, ios-checkmark-circle, ios-checkmark-circle-outline, ios-checkmark-outline, ios-clipboard, ios-clipboard-outline, ios-clock, ios-clock-outline, ios-close, ios-close-circle, ios-close-circle-outline, ios-close-outline, ios-closed-captioning, ios-closed-captioning-outline, ios-cloud, ios-cloud-circle, ios-cloud-circle-outline, ios-cloud-done, ios-cloud-done-outline, ios-cloud-download, ios-cloud-download-outline, ios-cloud-outline, ios-cloud-upload, ios-cloud-upload-outline, ios-cloudy, ios-cloudy-night, ios-cloudy-night-outline, ios-cloudy-outline, ios-code, ios-code-download, ios-code-download-outline, ios-code-outline, ios-code-working, ios-code-working-outline, ios-cog, ios-cog-outline, ios-color-fill, ios-color-fill-outline, ios-color-filter, ios-color-filter-outline, ios-color-palette, ios-color-palette-outline, ios-color-wand, ios-color-wand-outline, ios-compass, ios-compass-outline, ios-construct, ios-construct-outline, ios-contact, ios-contact-outline, ios-contacts, ios-contacts-outline, ios-contract, ios-contract-outline, ios-contrast, ios-contrast-outline, ios-copy, ios-copy-outline, ios-create, ios-create-outline, ios-crop, ios-crop-outline, ios-cube, ios-cube-outline, ios-cut, ios-cut-outline, ios-desktop, ios-desktop-outline, ios-disc, ios-disc-outline, ios-document, ios-document-outline, ios-done-all, ios-done-all-outline, ios-download, ios-download-outline, ios-easel, ios-easel-outline, ios-egg, ios-egg-outline, ios-exit, ios-exit-outline, ios-expand, ios-expand-outline, ios-eye, ios-eye-off, ios-eye-off-outline, ios-eye-outline, ios-fastforward, ios-fastforward-outline, ios-female, ios-female-outline, ios-filing, ios-filing-outline, ios-film, ios-film-outline, ios-finger-print, ios-finger-print-outline, ios-flag, ios-flag-outline, ios-flame, ios-flame-outline, ios-flash, ios-flash-outline, ios-flask, ios-flask-outline, ios-flower, ios-flower-outline, ios-folder, ios-folder-open, ios-folder-open-outline, ios-folder-outline, ios-football, ios-football-outline, ios-funnel, ios-funnel-outline, ios-game-controller-a, ios-game-controller-a-outline, ios-game-controller-b, ios-game-controller-b-outline, ios-git-branch, ios-git-branch-outline, ios-git-commit, ios-git-commit-outline, ios-git-compare, ios-git-compare-outline, ios-git-merge, ios-git-merge-outline, ios-git-network, ios-git-network-outline, ios-git-pull-request, ios-git-pull-request-outline, ios-glasses, ios-glasses-outline, ios-globe, ios-globe-outline, ios-grid, ios-grid-outline, ios-hammer, ios-hammer-outline, ios-hand, ios-hand-outline, ios-happy, ios-happy-outline, ios-headset, ios-headset-outline, ios-heart, ios-heart-outline, ios-help, ios-help-buoy, ios-help-buoy-outline, ios-help-circle, ios-help-circle-outline, ios-help-outline, ios-home, ios-home-outline, ios-ice-cream, ios-ice-cream-outline, ios-image, ios-image-outline, ios-images, ios-images-outline, ios-infinite, ios-infinite-outline, ios-information, ios-information-circle, ios-information-circle-outline, ios-information-outline, ios-ionic, ios-ionic-outline, ios-ionitron, ios-ionitron-outline, ios-jet, ios-jet-outline, ios-key, ios-key-outline, ios-keypad, ios-keypad-outline, ios-laptop, ios-laptop-outline, ios-leaf, ios-leaf-outline, ios-link, ios-link-outline, ios-list, ios-list-box, ios-list-box-outline, ios-list-outline, ios-locate, ios-locate-outline, ios-lock, ios-lock-outline, ios-log-in, ios-log-in-outline, ios-log-out, ios-log-out-outline, ios-magnet, ios-magnet-outline, ios-mail, ios-mail-open, ios-mail-open-outline, ios-mail-outline, ios-male, ios-male-outline, ios-man, ios-man-outline, ios-map, ios-map-outline, ios-medal, ios-medal-outline, ios-medical, ios-medical-outline, ios-medkit, ios-medkit-outline, ios-megaphone, ios-megaphone-outline, ios-menu, ios-menu-outline, ios-mic, ios-mic-off, ios-mic-off-outline, ios-mic-outline, ios-microphone, ios-microphone-outline, ios-moon, ios-moon-outline, ios-more, ios-more-outline, ios-move, ios-move-outline, ios-musical-note, ios-musical-note-outline, ios-musical-notes, ios-musical-notes-outline, ios-navigate, ios-navigate-outline, ios-no-smoking, ios-no-smoking-outline, ios-notifications, ios-notifications-off, ios-notifications-off-outline, ios-notifications-outline, ios-nuclear, ios-nuclear-outline, ios-nutrition, ios-nutrition-outline, ios-open, ios-open-outline, ios-options, ios-options-outline, ios-outlet, ios-outlet-outline, ios-paper, ios-paper-outline, ios-paper-plane, ios-paper-plane-outline, ios-partly-sunny, ios-partly-sunny-outline, ios-pause, ios-pause-outline, ios-paw, ios-paw-outline, ios-people, ios-people-outline, ios-person, ios-person-add, ios-person-add-outline, ios-person-outline, ios-phone-landscape, ios-phone-landscape-outline, ios-phone-portrait, ios-phone-portrait-outline, ios-photos, ios-photos-outline, ios-pie, ios-pie-outline, ios-pin, ios-pin-outline, ios-pint, ios-pint-outline, ios-pizza, ios-pizza-outline, ios-plane, ios-plane-outline, ios-planet, ios-planet-outline, ios-play, ios-play-outline, ios-podium, ios-podium-outline, ios-power, ios-power-outline, ios-pricetag, ios-pricetag-outline, ios-pricetags, ios-pricetags-outline, ios-print, ios-print-outline, ios-pulse, ios-pulse-outline, ios-qr-scanner, ios-qr-scanner-outline, ios-quote, ios-quote-outline, ios-radio, ios-radio-button-off, ios-radio-button-off-outline, ios-radio-button-on, ios-radio-button-on-outline, ios-radio-outline, ios-rainy, ios-rainy-outline, ios-recording, ios-recording-outline, ios-redo, ios-redo-outline, ios-refresh, ios-refresh-circle, ios-refresh-circle-outline, ios-refresh-outline, ios-remove, ios-remove-circle, ios-remove-circle-outline, ios-remove-outline, ios-reorder, ios-reorder-outline, ios-repeat, ios-repeat-outline, ios-resize, ios-resize-outline, ios-restaurant, ios-restaurant-outline, ios-return-left, ios-return-left-outline, ios-return-right, ios-return-right-outline, ios-reverse-camera, ios-reverse-camera-outline, ios-rewind, ios-rewind-outline, ios-ribbon, ios-ribbon-outline, ios-rose, ios-rose-outline, ios-sad, ios-sad-outline, ios-school, ios-school-outline, ios-search, ios-search-outline, ios-send, ios-send-outline, ios-settings, ios-settings-outline, ios-share, ios-share-alt, ios-share-alt-outline, ios-share-outline, ios-shirt, ios-shirt-outline, ios-shuffle, ios-shuffle-outline, ios-skip-backward, ios-skip-backward-outline, ios-skip-forward, ios-skip-forward-outline, ios-snow, ios-snow-outline, ios-speedometer, ios-speedometer-outline, ios-square, ios-square-outline, ios-star, ios-star-half, ios-star-half-outline, ios-star-outline, ios-stats, ios-stats-outline, ios-stopwatch, ios-stopwatch-outline, ios-subway, ios-subway-outline, ios-sunny, ios-sunny-outline, ios-swap, ios-swap-outline, ios-switch, ios-switch-outline, ios-sync, ios-sync-outline, ios-tablet-landscape, ios-tablet-landscape-outline, ios-tablet-portrait, ios-tablet-portrait-outline, ios-tennisball, ios-tennisball-outline, ios-text, ios-text-outline, ios-thermometer, ios-thermometer-outline, ios-thumbs-down, ios-thumbs-down-outline, ios-thumbs-up, ios-thumbs-up-outline, ios-thunderstorm, ios-thunderstorm-outline, ios-time, ios-time-outline, ios-timer, ios-timer-outline, ios-train, ios-train-outline, ios-transgender, ios-transgender-outline, ios-trash, ios-trash-outline, ios-trending-down, ios-trending-down-outline, ios-trending-up, ios-trending-up-outline, ios-trophy, ios-trophy-outline, ios-umbrella, ios-umbrella-outline, ios-undo, ios-undo-outline, ios-unlock, ios-unlock-outline, ios-videocam, ios-videocam-outline, ios-volume-down, ios-volume-down-outline, ios-volume-mute, ios-volume-mute-outline, ios-volume-off, ios-volume-off-outline, ios-volume-up, ios-volume-up-outline, ios-walk, ios-walk-outline, ios-warning, ios-warning-outline, ios-watch, ios-watch-outline, ios-water, ios-water-outline, ios-wifi, ios-wifi-outline, ios-wine, ios-wine-outline, ios-woman, ios-woman-outline, logo-android, logo-angular, logo-apple, logo-bitcoin, logo-buffer, logo-chrome, logo-codepen, logo-css3, logo-designernews, logo-dribbble, logo-dropbox, logo-euro, logo-facebook, logo-foursquare, logo-freebsd-devil, logo-github, logo-google, logo-googleplus, logo-hackernews, logo-html5, logo-instagram, logo-javascript, logo-linkedin, logo-markdown, logo-nodejs, logo-octocat, logo-pinterest, logo-playstation, logo-python, logo-reddit, logo-rss, logo-sass, logo-skype, logo-snapchat, logo-steam, logo-tumblr, logo-tux, logo-twitch, logo-twitter, logo-usd, logo-vimeo, logo-whatsapp, logo-windows, logo-wordpress, logo-xbox, logo-yahoo, logo-yen, logo-youtube, md-add, md-add-circle, md-alarm, md-albums, md-alert, md-american-football, md-analytics, md-aperture, md-apps, md-appstore, md-archive, md-arrow-back, md-arrow-down, md-arrow-dropdown, md-arrow-dropdown-circle, md-arrow-dropleft, md-arrow-dropleft-circle, md-arrow-dropright, md-arrow-dropright-circle, md-arrow-dropup, md-arrow-dropup-circle, md-arrow-forward, md-arrow-round-back, md-arrow-round-down, md-arrow-round-forward, md-arrow-round-up, md-arrow-up, md-at, md-attach, md-backspace, md-barcode, md-baseball, md-basket, md-basketball, md-battery-charging, md-battery-dead, md-battery-full, md-beaker, md-beer, md-bicycle, md-bluetooth, md-boat, md-body, md-bonfire, md-book, md-bookmark, md-bookmarks, md-bowtie, md-briefcase, md-browsers, md-brush, md-bug, md-build, md-bulb, md-bus, md-cafe, md-calculator, md-calendar, md-call, md-camera, md-car, md-card, md-cart, md-cash, md-chatboxes, md-chatbubbles, md-checkbox, md-checkbox-outline, md-checkmark, md-checkmark-circle, md-checkmark-circle-outline, md-clipboard, md-clock, md-close, md-close-circle, md-closed-captioning, md-cloud, md-cloud-circle, md-cloud-done, md-cloud-download, md-cloud-outline, md-cloud-upload, md-cloudy, md-cloudy-night, md-code, md-code-download, md-code-working, md-cog, md-color-fill, md-color-filter, md-color-palette, md-color-wand, md-compass, md-construct, md-contact, md-contacts, md-contract, md-contrast, md-copy, md-create, md-crop, md-cube, md-cut, md-desktop, md-disc, md-document, md-done-all, md-download, md-easel, md-egg, md-exit, md-expand, md-eye, md-eye-off, md-fastforward, md-female, md-filing, md-film, md-finger-print, md-flag, md-flame, md-flash, md-flask, md-flower, md-folder, md-folder-open, md-football, md-funnel, md-game-controller-a, md-game-controller-b, md-git-branch, md-git-commit, md-git-compare, md-git-merge, md-git-network, md-git-pull-request, md-glasses, md-globe, md-grid, md-hammer, md-hand, md-happy, md-headset, md-heart, md-heart-outline, md-help, md-help-buoy, md-help-circle, md-home, md-ice-cream, md-image, md-images, md-infinite, md-information, md-information-circle, md-ionic, md-ionitron, md-jet, md-key, md-keypad, md-laptop, md-leaf, md-link, md-list, md-list-box, md-locate, md-lock, md-log-in, md-log-out, md-magnet, md-mail, md-mail-open, md-male, md-man, md-map, md-medal, md-medical, md-medkit, md-megaphone, md-menu, md-mic, md-mic-off, md-microphone, md-moon, md-more, md-move, md-musical-note, md-musical-notes, md-navigate, md-no-smoking, md-notifications, md-notifications-off, md-notifications-outline, md-nuclear, md-nutrition, md-open, md-options, md-outlet, md-paper, md-paper-plane, md-partly-sunny, md-pause, md-paw, md-people, md-person, md-person-add, md-phone-landscape, md-phone-portrait, md-photos, md-pie, md-pin, md-pint, md-pizza, md-plane, md-planet, md-play, md-podium, md-power, md-pricetag, md-pricetags, md-print, md-pulse, md-qr-scanner, md-quote, md-radio, md-radio-button-off, md-radio-button-on, md-rainy, md-recording, md-redo, md-refresh, md-refresh-circle, md-remove, md-remove-circle, md-reorder, md-repeat, md-resize, md-restaurant, md-return-left, md-return-right, md-reverse-camera, md-rewind, md-ribbon, md-rose, md-sad, md-school, md-search, md-send, md-settings, md-share, md-share-alt, md-shirt, md-shuffle, md-skip-backward, md-skip-forward, md-snow, md-speedometer, md-square, md-square-outline, md-star, md-star-half, md-star-outline, md-stats, md-stopwatch, md-subway, md-sunny, md-swap, md-switch, md-sync, md-tablet-landscape, md-tablet-portrait, md-tennisball, md-text, md-thermometer, md-thumbs-down, md-thumbs-up, md-thunderstorm, md-time, md-timer, md-train, md-transgender, md-trash, md-trending-down, md-trending-up, md-trophy, md-umbrella, md-undo, md-unlock, md-videocam, md-volume-down, md-volume-mute, md-volume-off, md-volume-up, md-walk, md-warning, md-watch, md-water, md-wifi, md-wine, md-woman, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"ios-add\":61698,\"ios-add-circle\":61697,\"ios-add-circle-outline\":61696,\"ios-add-outline\":61698,\"ios-alarm\":62408,\"ios-alarm-outline\":62407,\"ios-albums\":62410,\"ios-albums-outline\":62409,\"ios-alert\":61700,\"ios-alert-outline\":61699,\"ios-american-football\":61702,\"ios-american-football-outline\":61701,\"ios-analytics\":62414,\"ios-analytics-outline\":62413,\"ios-aperture\":61704,\"ios-aperture-outline\":61703,\"ios-apps\":61706,\"ios-apps-outline\":61705,\"ios-appstore\":61708,\"ios-appstore-outline\":61707,\"ios-archive\":61710,\"ios-archive-outline\":61709,\"ios-arrow-back\":62415,\"ios-arrow-back-outline\":62415,\"ios-arrow-down\":62416,\"ios-arrow-down-outline\":62416,\"ios-arrow-dropdown\":61712,\"ios-arrow-dropdown-circle\":61711,\"ios-arrow-dropdown-circle-outline\":61711,\"ios-arrow-dropdown-outline\":61712,\"ios-arrow-dropleft\":61714,\"ios-arrow-dropleft-circle\":61713,\"ios-arrow-dropleft-circle-outline\":61713,\"ios-arrow-dropleft-outline\":61714,\"ios-arrow-dropright\":61716,\"ios-arrow-dropright-circle\":61715,\"ios-arrow-dropright-circle-outline\":61715,\"ios-arrow-dropright-outline\":61716,\"ios-arrow-dropup\":61718,\"ios-arrow-dropup-circle\":61717,\"ios-arrow-dropup-circle-outline\":61717,\"ios-arrow-dropup-outline\":61718,\"ios-arrow-forward\":62417,\"ios-arrow-forward-outline\":62417,\"ios-arrow-round-back\":61719,\"ios-arrow-round-back-outline\":61719,\"ios-arrow-round-down\":61720,\"ios-arrow-round-down-outline\":61720,\"ios-arrow-round-forward\":61721,\"ios-arrow-round-forward-outline\":61721,\"ios-arrow-round-up\":61722,\"ios-arrow-round-up-outline\":61722,\"ios-arrow-up\":62424,\"ios-arrow-up-outline\":62424,\"ios-at\":62426,\"ios-at-outline\":62425,\"ios-attach\":61723,\"ios-attach-outline\":61723,\"ios-backspace\":61725,\"ios-backspace-outline\":61724,\"ios-barcode\":62428,\"ios-barcode-outline\":62427,\"ios-baseball\":62430,\"ios-baseball-outline\":62429,\"ios-basket\":61727,\"ios-basket-outline\":61726,\"ios-basketball\":62432,\"ios-basketball-outline\":62431,\"ios-battery-charging\":61728,\"ios-battery-charging-outline\":61728,\"ios-battery-dead\":61729,\"ios-battery-dead-outline\":61729,\"ios-battery-full\":61730,\"ios-battery-full-outline\":61730,\"ios-beaker\":61732,\"ios-beaker-outline\":61731,\"ios-beer\":61734,\"ios-beer-outline\":61733,\"ios-bicycle\":61735,\"ios-bicycle-outline\":61735,\"ios-bluetooth\":61736,\"ios-bluetooth-outline\":61736,\"ios-boat\":61738,\"ios-boat-outline\":61737,\"ios-body\":62436,\"ios-body-outline\":62435,\"ios-bonfire\":61740,\"ios-bonfire-outline\":61739,\"ios-book\":62440,\"ios-book-outline\":62439,\"ios-bookmark\":61742,\"ios-bookmark-outline\":61741,\"ios-bookmarks\":62442,\"ios-bookmarks-outline\":62441,\"ios-bowtie\":61744,\"ios-bowtie-outline\":61743,\"ios-briefcase\":62446,\"ios-briefcase-outline\":62445,\"ios-browsers\":62448,\"ios-browsers-outline\":62447,\"ios-brush\":61746,\"ios-brush-outline\":61745,\"ios-bug\":61748,\"ios-bug-outline\":61747,\"ios-build\":61750,\"ios-build-outline\":61749,\"ios-bulb\":61752,\"ios-bulb-outline\":61751,\"ios-bus\":61754,\"ios-bus-outline\":61753,\"ios-cafe\":61756,\"ios-cafe-outline\":61755,\"ios-calculator\":62450,\"ios-calculator-outline\":62449,\"ios-calendar\":62452,\"ios-calendar-outline\":62451,\"ios-call\":61758,\"ios-call-outline\":61757,\"ios-camera\":62454,\"ios-camera-outline\":62453,\"ios-car\":61760,\"ios-car-outline\":61759,\"ios-card\":61762,\"ios-card-outline\":61761,\"ios-cart\":62456,\"ios-cart-outline\":62455,\"ios-cash\":61764,\"ios-cash-outline\":61763,\"ios-chatboxes\":62458,\"ios-chatboxes-outline\":62457,\"ios-chatbubbles\":61766,\"ios-chatbubbles-outline\":61765,\"ios-checkbox\":61768,\"ios-checkbox-outline\":61767,\"ios-checkmark\":62463,\"ios-checkmark-circle\":61770,\"ios-checkmark-circle-outline\":61769,\"ios-checkmark-outline\":62463,\"ios-clipboard\":61772,\"ios-clipboard-outline\":61771,\"ios-clock\":62467,\"ios-clock-outline\":62466,\"ios-close\":62470,\"ios-close-circle\":61774,\"ios-close-circle-outline\":61773,\"ios-close-outline\":62470,\"ios-closed-captioning\":61776,\"ios-closed-captioning-outline\":61775,\"ios-cloud\":62476,\"ios-cloud-circle\":61778,\"ios-cloud-circle-outline\":61777,\"ios-cloud-done\":61780,\"ios-cloud-done-outline\":61779,\"ios-cloud-download\":62472,\"ios-cloud-download-outline\":62471,\"ios-cloud-outline\":62473,\"ios-cloud-upload\":62475,\"ios-cloud-upload-outline\":62474,\"ios-cloudy\":62480,\"ios-cloudy-night\":62478,\"ios-cloudy-night-outline\":62477,\"ios-cloudy-outline\":62479,\"ios-code\":61783,\"ios-code-download\":61781,\"ios-code-download-outline\":61781,\"ios-code-outline\":61783,\"ios-code-working\":61782,\"ios-code-working-outline\":61782,\"ios-cog\":62482,\"ios-cog-outline\":62481,\"ios-color-fill\":61785,\"ios-color-fill-outline\":61784,\"ios-color-filter\":62484,\"ios-color-filter-outline\":62483,\"ios-color-palette\":61787,\"ios-color-palette-outline\":61786,\"ios-color-wand\":62486,\"ios-color-wand-outline\":62485,\"ios-compass\":61789,\"ios-compass-outline\":61788,\"ios-construct\":61791,\"ios-construct-outline\":61790,\"ios-contact\":62490,\"ios-contact-outline\":62489,\"ios-contacts\":61793,\"ios-contacts-outline\":61792,\"ios-contract\":61794,\"ios-contract-outline\":61794,\"ios-contrast\":61795,\"ios-contrast-outline\":61795,\"ios-copy\":62492,\"ios-copy-outline\":62491,\"ios-create\":61797,\"ios-create-outline\":61796,\"ios-crop\":62494,\"ios-crop-outline\":61798,\"ios-cube\":61800,\"ios-cube-outline\":61799,\"ios-cut\":61802,\"ios-cut-outline\":61801,\"ios-desktop\":61804,\"ios-desktop-outline\":61803,\"ios-disc\":61806,\"ios-disc-outline\":61805,\"ios-document\":61808,\"ios-document-outline\":61807,\"ios-done-all\":61809,\"ios-done-all-outline\":61809,\"ios-download\":62496,\"ios-download-outline\":62495,\"ios-easel\":61811,\"ios-easel-outline\":61810,\"ios-egg\":61813,\"ios-egg-outline\":61812,\"ios-exit\":61815,\"ios-exit-outline\":61814,\"ios-expand\":61816,\"ios-expand-outline\":61816,\"ios-eye\":62501,\"ios-eye-off\":61818,\"ios-eye-off-outline\":61817,\"ios-eye-outline\":62500,\"ios-fastforward\":62503,\"ios-fastforward-outline\":62502,\"ios-female\":61819,\"ios-female-outline\":61819,\"ios-filing\":62505,\"ios-filing-outline\":62504,\"ios-film\":62507,\"ios-film-outline\":62506,\"ios-finger-print\":61820,\"ios-finger-print-outline\":61820,\"ios-flag\":62509,\"ios-flag-outline\":62508,\"ios-flame\":62511,\"ios-flame-outline\":62510,\"ios-flash\":61822,\"ios-flash-outline\":61821,\"ios-flask\":62513,\"ios-flask-outline\":62512,\"ios-flower\":62515,\"ios-flower-outline\":62514,\"ios-folder\":62517,\"ios-folder-open\":61824,\"ios-folder-open-outline\":61823,\"ios-folder-outline\":62516,\"ios-football\":62519,\"ios-football-outline\":62518,\"ios-funnel\":61826,\"ios-funnel-outline\":61825,\"ios-game-controller-a\":62521,\"ios-game-controller-a-outline\":62520,\"ios-game-controller-b\":62523,\"ios-game-controller-b-outline\":62522,\"ios-git-branch\":61827,\"ios-git-branch-outline\":61827,\"ios-git-commit\":61828,\"ios-git-commit-outline\":61828,\"ios-git-compare\":61829,\"ios-git-compare-outline\":61829,\"ios-git-merge\":61830,\"ios-git-merge-outline\":61830,\"ios-git-network\":61831,\"ios-git-network-outline\":61831,\"ios-git-pull-request\":61832,\"ios-git-pull-request-outline\":61832,\"ios-glasses\":62527,\"ios-glasses-outline\":62526,\"ios-globe\":61834,\"ios-globe-outline\":61833,\"ios-grid\":61836,\"ios-grid-outline\":61835,\"ios-hammer\":61838,\"ios-hammer-outline\":61837,\"ios-hand\":61840,\"ios-hand-outline\":61839,\"ios-happy\":61842,\"ios-happy-outline\":61841,\"ios-headset\":61844,\"ios-headset-outline\":61843,\"ios-heart\":62531,\"ios-heart-outline\":62530,\"ios-help\":62534,\"ios-help-buoy\":61846,\"ios-help-buoy-outline\":61845,\"ios-help-circle\":61848,\"ios-help-circle-outline\":61847,\"ios-help-outline\":62534,\"ios-home\":62536,\"ios-home-outline\":62535,\"ios-ice-cream\":61850,\"ios-ice-cream-outline\":61849,\"ios-image\":61852,\"ios-image-outline\":61851,\"ios-images\":61854,\"ios-images-outline\":61853,\"ios-infinite\":62538,\"ios-infinite-outline\":62537,\"ios-information\":62541,\"ios-information-circle\":61856,\"ios-information-circle-outline\":61855,\"ios-information-outline\":62541,\"ios-ionic\":61857,\"ios-ionic-outline\":62542,\"ios-ionitron\":61859,\"ios-ionitron-outline\":61858,\"ios-jet\":61861,\"ios-jet-outline\":61860,\"ios-key\":61863,\"ios-key-outline\":61862,\"ios-keypad\":62544,\"ios-keypad-outline\":62543,\"ios-laptop\":61864,\"ios-laptop-outline\":61864,\"ios-leaf\":61866,\"ios-leaf-outline\":61865,\"ios-link\":61994,\"ios-link-outline\":61898,\"ios-list\":62548,\"ios-list-box\":61868,\"ios-list-box-outline\":61867,\"ios-list-outline\":62548,\"ios-locate\":61870,\"ios-locate-outline\":61869,\"ios-lock\":61872,\"ios-lock-outline\":61871,\"ios-log-in\":61873,\"ios-log-in-outline\":61873,\"ios-log-out\":61874,\"ios-log-out-outline\":61874,\"ios-magnet\":61876,\"ios-magnet-outline\":61875,\"ios-mail\":61880,\"ios-mail-open\":61878,\"ios-mail-open-outline\":61877,\"ios-mail-outline\":61879,\"ios-male\":61881,\"ios-male-outline\":61881,\"ios-man\":61883,\"ios-man-outline\":61882,\"ios-map\":61885,\"ios-map-outline\":61884,\"ios-medal\":61887,\"ios-medal-outline\":61886,\"ios-medical\":62556,\"ios-medical-outline\":62555,\"ios-medkit\":62558,\"ios-medkit-outline\":62557,\"ios-megaphone\":61889,\"ios-megaphone-outline\":61888,\"ios-menu\":61891,\"ios-menu-outline\":61890,\"ios-mic\":62561,\"ios-mic-off\":62559,\"ios-mic-off-outline\":61892,\"ios-mic-outline\":62560,\"ios-microphone\":61894,\"ios-microphone-outline\":61893,\"ios-moon\":62568,\"ios-moon-outline\":62567,\"ios-more\":61896,\"ios-more-outline\":61895,\"ios-move\":61899,\"ios-move-outline\":61899,\"ios-musical-note\":62571,\"ios-musical-note-outline\":61900,\"ios-musical-notes\":62572,\"ios-musical-notes-outline\":61901,\"ios-navigate\":62574,\"ios-navigate-outline\":62573,\"ios-no-smoking\":61903,\"ios-no-smoking-outline\":61902,\"ios-notifications\":61907,\"ios-notifications-off\":61905,\"ios-notifications-off-outline\":61904,\"ios-notifications-outline\":61906,\"ios-nuclear\":61909,\"ios-nuclear-outline\":61908,\"ios-nutrition\":62576,\"ios-nutrition-outline\":62575,\"ios-open\":61911,\"ios-open-outline\":61910,\"ios-options\":61913,\"ios-options-outline\":61912,\"ios-outlet\":61915,\"ios-outlet-outline\":61914,\"ios-paper\":62578,\"ios-paper-outline\":62577,\"ios-paper-plane\":61917,\"ios-paper-plane-outline\":61916,\"ios-partly-sunny\":61919,\"ios-partly-sunny-outline\":61918,\"ios-pause\":62584,\"ios-pause-outline\":62583,\"ios-paw\":62586,\"ios-paw-outline\":62585,\"ios-people\":62588,\"ios-people-outline\":62587,\"ios-person\":62590,\"ios-person-add\":61921,\"ios-person-add-outline\":61920,\"ios-person-outline\":62589,\"ios-phone-landscape\":61922,\"ios-phone-landscape-outline\":61922,\"ios-phone-portrait\":61923,\"ios-phone-portrait-outline\":61923,\"ios-photos\":62594,\"ios-photos-outline\":62593,\"ios-pie\":62596,\"ios-pie-outline\":62595,\"ios-pin\":61925,\"ios-pin-outline\":61924,\"ios-pint\":62598,\"ios-pint-outline\":62597,\"ios-pizza\":61927,\"ios-pizza-outline\":61926,\"ios-plane\":61929,\"ios-plane-outline\":61928,\"ios-planet\":61931,\"ios-planet-outline\":61930,\"ios-play\":62600,\"ios-play-outline\":62599,\"ios-podium\":61933,\"ios-podium-outline\":61932,\"ios-power\":61935,\"ios-power-outline\":61934,\"ios-pricetag\":62605,\"ios-pricetag-outline\":62604,\"ios-pricetags\":62607,\"ios-pricetags-outline\":62606,\"ios-print\":61937,\"ios-print-outline\":61936,\"ios-pulse\":62611,\"ios-pulse-outline\":61938,\"ios-qr-scanner\":61939,\"ios-qr-scanner-outline\":61939,\"ios-quote\":61941,\"ios-quote-outline\":61940,\"ios-radio\":61945,\"ios-radio-button-off\":61942,\"ios-radio-button-off-outline\":61942,\"ios-radio-button-on\":61943,\"ios-radio-button-on-outline\":61943,\"ios-radio-outline\":61944,\"ios-rainy\":62613,\"ios-rainy-outline\":62612,\"ios-recording\":62615,\"ios-recording-outline\":62614,\"ios-redo\":62617,\"ios-redo-outline\":62616,\"ios-refresh\":62620,\"ios-refresh-circle\":61990,\"ios-refresh-circle-outline\":61988,\"ios-refresh-outline\":62620,\"ios-remove\":61948,\"ios-remove-circle\":61947,\"ios-remove-circle-outline\":61946,\"ios-remove-outline\":61948,\"ios-reorder\":61949,\"ios-reorder-outline\":61949,\"ios-repeat\":61950,\"ios-repeat-outline\":61950,\"ios-resize\":61951,\"ios-resize-outline\":61951,\"ios-restaurant\":61953,\"ios-restaurant-outline\":61952,\"ios-return-left\":61954,\"ios-return-left-outline\":61954,\"ios-return-right\":61955,\"ios-return-right-outline\":61955,\"ios-reverse-camera\":62623,\"ios-reverse-camera-outline\":62622,\"ios-rewind\":62625,\"ios-rewind-outline\":62624,\"ios-ribbon\":61957,\"ios-ribbon-outline\":61956,\"ios-rose\":62627,\"ios-rose-outline\":62626,\"ios-sad\":61959,\"ios-sad-outline\":61958,\"ios-school\":61961,\"ios-school-outline\":61960,\"ios-search\":62629,\"ios-search-outline\":61962,\"ios-send\":61964,\"ios-send-outline\":61963,\"ios-settings\":62631,\"ios-settings-outline\":61965,\"ios-share\":61969,\"ios-share-alt\":61967,\"ios-share-alt-outline\":61966,\"ios-share-outline\":61968,\"ios-shirt\":61971,\"ios-shirt-outline\":61970,\"ios-shuffle\":62633,\"ios-shuffle-outline\":62633,\"ios-skip-backward\":61973,\"ios-skip-backward-outline\":61972,\"ios-skip-forward\":61975,\"ios-skip-forward-outline\":61974,\"ios-snow\":61976,\"ios-snow-outline\":61996,\"ios-speedometer\":62640,\"ios-speedometer-outline\":62639,\"ios-square\":61978,\"ios-square-outline\":61977,\"ios-star\":62643,\"ios-star-half\":62641,\"ios-star-half-outline\":62641,\"ios-star-outline\":62642,\"ios-stats\":61980,\"ios-stats-outline\":61979,\"ios-stopwatch\":62645,\"ios-stopwatch-outline\":62644,\"ios-subway\":61982,\"ios-subway-outline\":61981,\"ios-sunny\":62647,\"ios-sunny-outline\":62646,\"ios-swap\":61983,\"ios-swap-outline\":61983,\"ios-switch\":61985,\"ios-switch-outline\":61984,\"ios-sync\":61986,\"ios-sync-outline\":61986,\"ios-tablet-landscape\":61987,\"ios-tablet-landscape-outline\":61987,\"ios-tablet-portrait\":62030,\"ios-tablet-portrait-outline\":62030,\"ios-tennisball\":62651,\"ios-tennisball-outline\":62650,\"ios-text\":62032,\"ios-text-outline\":62031,\"ios-thermometer\":62034,\"ios-thermometer-outline\":62033,\"ios-thumbs-down\":62036,\"ios-thumbs-down-outline\":62035,\"ios-thumbs-up\":62038,\"ios-thumbs-up-outline\":62037,\"ios-thunderstorm\":62653,\"ios-thunderstorm-outline\":62652,\"ios-time\":62655,\"ios-time-outline\":62654,\"ios-timer\":62657,\"ios-timer-outline\":62656,\"ios-train\":62040,\"ios-train-outline\":62039,\"ios-transgender\":62041,\"ios-transgender-outline\":62041,\"ios-trash\":62661,\"ios-trash-outline\":62660,\"ios-trending-down\":62042,\"ios-trending-down-outline\":62042,\"ios-trending-up\":62043,\"ios-trending-up-outline\":62043,\"ios-trophy\":62045,\"ios-trophy-outline\":62044,\"ios-umbrella\":62047,\"ios-umbrella-outline\":62046,\"ios-undo\":62663,\"ios-undo-outline\":62662,\"ios-unlock\":62049,\"ios-unlock-outline\":62048,\"ios-videocam\":62669,\"ios-videocam-outline\":62668,\"ios-volume-down\":62050,\"ios-volume-down-outline\":62050,\"ios-volume-mute\":62051,\"ios-volume-mute-outline\":62051,\"ios-volume-off\":62052,\"ios-volume-off-outline\":62052,\"ios-volume-up\":62053,\"ios-volume-up-outline\":62053,\"ios-walk\":62054,\"ios-walk-outline\":62054,\"ios-warning\":62056,\"ios-warning-outline\":62055,\"ios-watch\":62057,\"ios-watch-outline\":62057,\"ios-water\":62059,\"ios-water-outline\":62058,\"ios-wifi\":62061,\"ios-wifi-outline\":62060,\"ios-wine\":62063,\"ios-wine-outline\":62062,\"ios-woman\":62065,\"ios-woman-outline\":62064,\"logo-android\":61989,\"logo-angular\":61991,\"logo-apple\":61993,\"logo-bitcoin\":61995,\"logo-buffer\":61997,\"logo-chrome\":61999,\"logo-codepen\":62000,\"logo-css3\":62001,\"logo-designernews\":62002,\"logo-dribbble\":62003,\"logo-dropbox\":62004,\"logo-euro\":62005,\"logo-facebook\":62006,\"logo-foursquare\":62007,\"logo-freebsd-devil\":62008,\"logo-github\":62009,\"logo-google\":62010,\"logo-googleplus\":62011,\"logo-hackernews\":62012,\"logo-html5\":62013,\"logo-instagram\":62014,\"logo-javascript\":62015,\"logo-linkedin\":62016,\"logo-markdown\":62017,\"logo-nodejs\":62018,\"logo-octocat\":62019,\"logo-pinterest\":62020,\"logo-playstation\":62021,\"logo-python\":62022,\"logo-reddit\":62023,\"logo-rss\":62024,\"logo-sass\":62025,\"logo-skype\":62026,\"logo-snapchat\":62027,\"logo-steam\":62028,\"logo-tumblr\":62029,\"logo-tux\":62126,\"logo-twitch\":62127,\"logo-twitter\":62128,\"logo-usd\":62129,\"logo-vimeo\":62148,\"logo-whatsapp\":62149,\"logo-windows\":62255,\"logo-wordpress\":62256,\"logo-xbox\":62284,\"logo-yahoo\":62285,\"logo-yen\":62286,\"logo-youtube\":62287,\"md-add\":62067,\"md-add-circle\":62066,\"md-alarm\":62068,\"md-albums\":62069,\"md-alert\":62070,\"md-american-football\":62071,\"md-analytics\":62072,\"md-aperture\":62073,\"md-apps\":62074,\"md-appstore\":62075,\"md-archive\":62076,\"md-arrow-back\":62077,\"md-arrow-down\":62078,\"md-arrow-dropdown\":62080,\"md-arrow-dropdown-circle\":62079,\"md-arrow-dropleft\":62082,\"md-arrow-dropleft-circle\":62081,\"md-arrow-dropright\":62084,\"md-arrow-dropright-circle\":62083,\"md-arrow-dropup\":62086,\"md-arrow-dropup-circle\":62085,\"md-arrow-forward\":62087,\"md-arrow-round-back\":62088,\"md-arrow-round-down\":62089,\"md-arrow-round-forward\":62090,\"md-arrow-round-up\":62091,\"md-arrow-up\":62092,\"md-at\":62093,\"md-attach\":62094,\"md-backspace\":62095,\"md-barcode\":62096,\"md-baseball\":62097,\"md-basket\":62098,\"md-basketball\":62099,\"md-battery-charging\":62100,\"md-battery-dead\":62101,\"md-battery-full\":62102,\"md-beaker\":62103,\"md-beer\":62104,\"md-bicycle\":62105,\"md-bluetooth\":62106,\"md-boat\":62107,\"md-body\":62108,\"md-bonfire\":62109,\"md-book\":62110,\"md-bookmark\":62111,\"md-bookmarks\":62112,\"md-bowtie\":62113,\"md-briefcase\":62114,\"md-browsers\":62115,\"md-brush\":62116,\"md-bug\":62117,\"md-build\":62118,\"md-bulb\":62119,\"md-bus\":62120,\"md-cafe\":62121,\"md-calculator\":62122,\"md-calendar\":62123,\"md-call\":62124,\"md-camera\":62125,\"md-car\":62130,\"md-card\":62131,\"md-cart\":62132,\"md-cash\":62133,\"md-chatboxes\":62134,\"md-chatbubbles\":62135,\"md-checkbox\":62137,\"md-checkbox-outline\":62136,\"md-checkmark\":62140,\"md-checkmark-circle\":62139,\"md-checkmark-circle-outline\":62138,\"md-clipboard\":62141,\"md-clock\":62142,\"md-close\":62144,\"md-close-circle\":62143,\"md-closed-captioning\":62145,\"md-cloud\":62153,\"md-cloud-circle\":62146,\"md-cloud-done\":62147,\"md-cloud-download\":62150,\"md-cloud-outline\":62151,\"md-cloud-upload\":62152,\"md-cloudy\":62155,\"md-cloudy-night\":62154,\"md-code\":62158,\"md-code-download\":62156,\"md-code-working\":62157,\"md-cog\":62159,\"md-color-fill\":62160,\"md-color-filter\":62161,\"md-color-palette\":62162,\"md-color-wand\":62163,\"md-compass\":62164,\"md-construct\":62165,\"md-contact\":62166,\"md-contacts\":62167,\"md-contract\":62168,\"md-contrast\":62169,\"md-copy\":62170,\"md-create\":62171,\"md-crop\":62172,\"md-cube\":62173,\"md-cut\":62174,\"md-desktop\":62175,\"md-disc\":62176,\"md-document\":62177,\"md-done-all\":62178,\"md-download\":62179,\"md-easel\":62180,\"md-egg\":62181,\"md-exit\":62182,\"md-expand\":62183,\"md-eye\":62185,\"md-eye-off\":62184,\"md-fastforward\":62186,\"md-female\":62187,\"md-filing\":62188,\"md-film\":62189,\"md-finger-print\":62190,\"md-flag\":62191,\"md-flame\":62192,\"md-flash\":62193,\"md-flask\":62194,\"md-flower\":62195,\"md-folder\":62197,\"md-folder-open\":62196,\"md-football\":62198,\"md-funnel\":62199,\"md-game-controller-a\":62200,\"md-game-controller-b\":62201,\"md-git-branch\":62202,\"md-git-commit\":62203,\"md-git-compare\":62204,\"md-git-merge\":62205,\"md-git-network\":62206,\"md-git-pull-request\":62207,\"md-glasses\":62208,\"md-globe\":62209,\"md-grid\":62210,\"md-hammer\":62211,\"md-hand\":62212,\"md-happy\":62213,\"md-headset\":62214,\"md-heart\":62216,\"md-heart-outline\":62215,\"md-help\":62219,\"md-help-buoy\":62217,\"md-help-circle\":62218,\"md-home\":62220,\"md-ice-cream\":62221,\"md-image\":62222,\"md-images\":62223,\"md-infinite\":62224,\"md-information\":62226,\"md-information-circle\":62225,\"md-ionic\":62227,\"md-ionitron\":62228,\"md-jet\":62229,\"md-key\":62230,\"md-keypad\":62231,\"md-laptop\":62232,\"md-leaf\":62233,\"md-link\":61998,\"md-list\":62235,\"md-list-box\":62234,\"md-locate\":62236,\"md-lock\":62237,\"md-log-in\":62238,\"md-log-out\":62239,\"md-magnet\":62240,\"md-mail\":62242,\"md-mail-open\":62241,\"md-male\":62243,\"md-man\":62244,\"md-map\":62245,\"md-medal\":62246,\"md-medical\":62247,\"md-medkit\":62248,\"md-megaphone\":62249,\"md-menu\":62250,\"md-mic\":62252,\"md-mic-off\":62251,\"md-microphone\":62253,\"md-moon\":62254,\"md-more\":61897,\"md-move\":62257,\"md-musical-note\":62258,\"md-musical-notes\":62259,\"md-navigate\":62260,\"md-no-smoking\":62261,\"md-notifications\":62264,\"md-notifications-off\":62262,\"md-notifications-outline\":62263,\"md-nuclear\":62265,\"md-nutrition\":62266,\"md-open\":62267,\"md-options\":62268,\"md-outlet\":62269,\"md-paper\":62271,\"md-paper-plane\":62270,\"md-partly-sunny\":62272,\"md-pause\":62273,\"md-paw\":62274,\"md-people\":62275,\"md-person\":62277,\"md-person-add\":62276,\"md-phone-landscape\":62278,\"md-phone-portrait\":62279,\"md-photos\":62280,\"md-pie\":62281,\"md-pin\":62282,\"md-pint\":62283,\"md-pizza\":62292,\"md-plane\":62293,\"md-planet\":62294,\"md-play\":62295,\"md-podium\":62296,\"md-power\":62297,\"md-pricetag\":62298,\"md-pricetags\":62299,\"md-print\":62300,\"md-pulse\":62301,\"md-qr-scanner\":62302,\"md-quote\":62303,\"md-radio\":62306,\"md-radio-button-off\":62304,\"md-radio-button-on\":62305,\"md-rainy\":62307,\"md-recording\":62308,\"md-redo\":62309,\"md-refresh\":62310,\"md-refresh-circle\":61992,\"md-remove\":62312,\"md-remove-circle\":62311,\"md-reorder\":62313,\"md-repeat\":62314,\"md-resize\":62315,\"md-restaurant\":62316,\"md-return-left\":62317,\"md-return-right\":62318,\"md-reverse-camera\":62319,\"md-rewind\":62320,\"md-ribbon\":62321,\"md-rose\":62322,\"md-sad\":62323,\"md-school\":62324,\"md-search\":62325,\"md-send\":62326,\"md-settings\":62327,\"md-share\":62329,\"md-share-alt\":62328,\"md-shirt\":62330,\"md-shuffle\":62331,\"md-skip-backward\":62332,\"md-skip-forward\":62333,\"md-snow\":62334,\"md-speedometer\":62335,\"md-square\":62337,\"md-square-outline\":62336,\"md-star\":62340,\"md-star-half\":62338,\"md-star-outline\":62339,\"md-stats\":62341,\"md-stopwatch\":62342,\"md-subway\":62343,\"md-sunny\":62344,\"md-swap\":62345,\"md-switch\":62346,\"md-sync\":62347,\"md-tablet-landscape\":62348,\"md-tablet-portrait\":62349,\"md-tennisball\":62350,\"md-text\":62351,\"md-thermometer\":62352,\"md-thumbs-down\":62353,\"md-thumbs-up\":62354,\"md-thunderstorm\":62355,\"md-time\":62356,\"md-timer\":62357,\"md-train\":62358,\"md-transgender\":62359,\"md-trash\":62360,\"md-trending-down\":62361,\"md-trending-up\":62362,\"md-trophy\":62363,\"md-umbrella\":62364,\"md-undo\":62365,\"md-unlock\":62366,\"md-videocam\":62367,\"md-volume-down\":62368,\"md-volume-mute\":62369,\"md-volume-off\":62370,\"md-volume-up\":62371,\"md-walk\":62372,\"md-warning\":62373,\"md-watch\":62374,\"md-water\":62375,\"md-wifi\":62376,\"md-wine\":62377,\"md-woman\":62378}");

/***/ }),

/***/ "../../../node_modules/react-native-vector-icons/glyphmaps/MaterialCommunityIcons.json":
/*!**********************************************************************************************************************************************!*\
  !*** /Users/diego.antonelli/Desktop/projects/widgets-resources/node_modules/react-native-vector-icons/glyphmaps/MaterialCommunityIcons.json ***!
  \**********************************************************************************************************************************************/
/*! exports provided: access-point, access-point-network, account, account-alert, account-box, account-box-outline, account-card-details, account-check, account-circle, account-convert, account-edit, account-group, account-heart, account-key, account-location, account-minus, account-multiple, account-multiple-minus, account-multiple-outline, account-multiple-plus, account-multiple-plus-outline, account-network, account-off, account-outline, account-plus, account-plus-outline, account-remove, account-search, account-settings, account-settings-variant, account-star, account-switch, accusoft, adjust, air-conditioner, airballoon, airplane, airplane-landing, airplane-off, airplane-takeoff, airplay, airport, alarm, alarm-bell, alarm-check, alarm-light, alarm-multiple, alarm-off, alarm-plus, alarm-snooze, album, alert, alert-box, alert-circle, alert-circle-outline, alert-decagram, alert-octagon, alert-octagram, alert-outline, alien, all-inclusive, allo, alpha, alphabetical, altimeter, amazon, amazon-clouddrive, ambulance, amplifier, anchor, android, android-debug-bridge, android-head, android-studio, angular, angularjs, animation, anvil, apple, apple-finder, apple-ios, apple-keyboard-caps, apple-keyboard-command, apple-keyboard-control, apple-keyboard-option, apple-keyboard-shift, apple-mobileme, apple-safari, application, approval, apps, archive, arrange-bring-forward, arrange-bring-to-front, arrange-send-backward, arrange-send-to-back, arrow-all, arrow-bottom-left, arrow-bottom-right, arrow-collapse, arrow-collapse-all, arrow-collapse-down, arrow-collapse-horizontal, arrow-collapse-left, arrow-collapse-right, arrow-collapse-up, arrow-collapse-vertical, arrow-down, arrow-down-bold, arrow-down-bold-box, arrow-down-bold-box-outline, arrow-down-bold-circle, arrow-down-bold-circle-outline, arrow-down-bold-hexagon-outline, arrow-down-box, arrow-down-drop-circle, arrow-down-drop-circle-outline, arrow-down-thick, arrow-expand, arrow-expand-all, arrow-expand-down, arrow-expand-horizontal, arrow-expand-left, arrow-expand-right, arrow-expand-up, arrow-expand-vertical, arrow-left, arrow-left-bold, arrow-left-bold-box, arrow-left-bold-box-outline, arrow-left-bold-circle, arrow-left-bold-circle-outline, arrow-left-bold-hexagon-outline, arrow-left-box, arrow-left-drop-circle, arrow-left-drop-circle-outline, arrow-left-thick, arrow-right, arrow-right-bold, arrow-right-bold-box, arrow-right-bold-box-outline, arrow-right-bold-circle, arrow-right-bold-circle-outline, arrow-right-bold-hexagon-outline, arrow-right-box, arrow-right-drop-circle, arrow-right-drop-circle-outline, arrow-right-thick, arrow-top-left, arrow-top-right, arrow-up, arrow-up-bold, arrow-up-bold-box, arrow-up-bold-box-outline, arrow-up-bold-circle, arrow-up-bold-circle-outline, arrow-up-bold-hexagon-outline, arrow-up-box, arrow-up-drop-circle, arrow-up-drop-circle-outline, arrow-up-thick, artist, assistant, asterisk, at, atlassian, atom, attachment, audiobook, augmented-reality, auto-fix, auto-upload, autorenew, av-timer, azure, baby, baby-buggy, backburger, backspace, backup-restore, badminton, bandcamp, bank, barcode, barcode-scan, barley, barrel, baseball, baseball-bat, basecamp, basket, basket-fill, basket-unfill, basketball, battery, battery-10, battery-20, battery-30, battery-40, battery-50, battery-60, battery-70, battery-80, battery-90, battery-alert, battery-charging, battery-charging-10, battery-charging-100, battery-charging-20, battery-charging-30, battery-charging-40, battery-charging-50, battery-charging-60, battery-charging-70, battery-charging-80, battery-charging-90, battery-charging-outline, battery-charging-wireless, battery-charging-wireless-10, battery-charging-wireless-20, battery-charging-wireless-30, battery-charging-wireless-40, battery-charging-wireless-50, battery-charging-wireless-60, battery-charging-wireless-70, battery-charging-wireless-80, battery-charging-wireless-90, battery-charging-wireless-alert, battery-charging-wireless-outline, battery-minus, battery-negative, battery-outline, battery-plus, battery-positive, battery-unknown, beach, beaker, beats, bed-empty, beer, behance, bell, bell-off, bell-outline, bell-plus, bell-ring, bell-ring-outline, bell-sleep, beta, bible, bike, bing, binoculars, bio, biohazard, bitbucket, bitcoin, black-mesa, blackberry, blender, blinds, block-helper, blogger, bluetooth, bluetooth-audio, bluetooth-connect, bluetooth-off, bluetooth-settings, bluetooth-transfer, blur, blur-linear, blur-off, blur-radial, bomb, bomb-off, bone, book, book-minus, book-multiple, book-multiple-variant, book-open, book-open-page-variant, book-open-variant, book-plus, book-secure, book-unsecure, book-variant, bookmark, bookmark-check, bookmark-music, bookmark-outline, bookmark-plus, bookmark-plus-outline, bookmark-remove, boombox, bootstrap, border-all, border-all-variant, border-bottom, border-bottom-variant, border-color, border-horizontal, border-inside, border-left, border-left-variant, border-none, border-none-variant, border-outside, border-right, border-right-variant, border-style, border-top, border-top-variant, border-vertical, bottle-wine, bow-tie, bowl, bowling, box, box-cutter, box-shadow, bridge, briefcase, briefcase-check, briefcase-download, briefcase-outline, briefcase-upload, brightness-1, brightness-2, brightness-3, brightness-4, brightness-5, brightness-6, brightness-7, brightness-auto, broom, brush, buffer, bug, bulletin-board, bullhorn, bullseye, bus, bus-articulated-end, bus-articulated-front, bus-double-decker, bus-school, bus-side, cached, cake, cake-layered, cake-variant, calculator, calendar, calendar-blank, calendar-check, calendar-clock, calendar-edit, calendar-multiple, calendar-multiple-check, calendar-plus, calendar-question, calendar-range, calendar-remove, calendar-text, calendar-today, call-made, call-merge, call-missed, call-received, call-split, camcorder, camcorder-box, camcorder-box-off, camcorder-off, camera, camera-burst, camera-enhance, camera-front, camera-front-variant, camera-gopro, camera-iris, camera-metering-center, camera-metering-matrix, camera-metering-partial, camera-metering-spot, camera-off, camera-party-mode, camera-rear, camera-rear-variant, camera-switch, camera-timer, cancel, candle, candycane, cannabis, car, car-battery, car-connected, car-convertible, car-estate, car-hatchback, car-pickup, car-side, car-sports, car-wash, caravan, cards, cards-outline, cards-playing-outline, cards-variant, carrot, cart, cart-off, cart-outline, cart-plus, case-sensitive-alt, cash, cash-100, cash-multiple, cash-usd, cast, cast-connected, cast-off, castle, cat, cctv, ceiling-light, cellphone, cellphone-android, cellphone-basic, cellphone-dock, cellphone-iphone, cellphone-link, cellphone-link-off, cellphone-settings, cellphone-wireless, certificate, chair-school, chart-arc, chart-areaspline, chart-bar, chart-bar-stacked, chart-bubble, chart-donut, chart-donut-variant, chart-gantt, chart-histogram, chart-line, chart-line-stacked, chart-line-variant, chart-pie, chart-scatterplot-hexbin, chart-timeline, check, check-all, check-circle, check-circle-outline, check-outline, checkbox-blank, checkbox-blank-circle, checkbox-blank-circle-outline, checkbox-blank-outline, checkbox-intermediate, checkbox-marked, checkbox-marked-circle, checkbox-marked-circle-outline, checkbox-marked-outline, checkbox-multiple-blank, checkbox-multiple-blank-circle, checkbox-multiple-blank-circle-outline, checkbox-multiple-blank-outline, checkbox-multiple-marked, checkbox-multiple-marked-circle, checkbox-multiple-marked-circle-outline, checkbox-multiple-marked-outline, checkerboard, chemical-weapon, chess-bishop, chess-king, chess-knight, chess-pawn, chess-queen, chess-rook, chevron-double-down, chevron-double-left, chevron-double-right, chevron-double-up, chevron-down, chevron-left, chevron-right, chevron-up, chili-hot, chili-medium, chili-mild, chip, church, circle, circle-outline, cisco-webex, city, clipboard, clipboard-account, clipboard-alert, clipboard-arrow-down, clipboard-arrow-left, clipboard-check, clipboard-check-outline, clipboard-flow, clipboard-outline, clipboard-plus, clipboard-pulse, clipboard-pulse-outline, clipboard-text, clippy, clock, clock-alert, clock-end, clock-fast, clock-in, clock-out, clock-start, close, close-box, close-box-outline, close-circle, close-circle-outline, close-network, close-octagon, close-octagon-outline, close-outline, closed-caption, cloud, cloud-braces, cloud-check, cloud-circle, cloud-download, cloud-off-outline, cloud-outline, cloud-print, cloud-print-outline, cloud-sync, cloud-tags, cloud-upload, clover, code-array, code-braces, code-brackets, code-equal, code-greater-than, code-greater-than-or-equal, code-less-than, code-less-than-or-equal, code-not-equal, code-not-equal-variant, code-parentheses, code-string, code-tags, code-tags-check, codepen, coffee, coffee-outline, coffee-to-go, coin, coins, collage, color-helper, comment, comment-account, comment-account-outline, comment-alert, comment-alert-outline, comment-check, comment-check-outline, comment-multiple, comment-multiple-outline, comment-outline, comment-plus-outline, comment-processing, comment-processing-outline, comment-question, comment-question-outline, comment-remove, comment-remove-outline, comment-text, comment-text-multiple, comment-text-multiple-outline, comment-text-outline, compare, compass, compass-outline, console, console-line, console-network, contact-mail, contacts, content-copy, content-cut, content-duplicate, content-paste, content-save, content-save-all, content-save-outline, content-save-settings, contrast, contrast-box, contrast-circle, cookie, copyright, corn, counter, cow, crane, creation, credit-card, credit-card-multiple, credit-card-off, credit-card-plus, credit-card-scan, crop, crop-free, crop-landscape, crop-portrait, crop-rotate, crop-square, crosshairs, crosshairs-gps, crown, cube, cube-outline, cube-send, cube-unfolded, cup, cup-off, cup-water, curling, currency-bdt, currency-btc, currency-chf, currency-cny, currency-eth, currency-eur, currency-gbp, currency-inr, currency-jpy, currency-krw, currency-kzt, currency-ngn, currency-rub, currency-sign, currency-try, currency-twd, currency-usd, currency-usd-off, cursor-default, cursor-default-outline, cursor-move, cursor-pointer, cursor-text, database, database-minus, database-plus, database-search, debug-step-into, debug-step-out, debug-step-over, decagram, decagram-outline, decimal-decrease, decimal-increase, delete, delete-circle, delete-empty, delete-forever, delete-restore, delete-sweep, delete-variant, delta, deskphone, desktop-classic, desktop-mac, desktop-tower, details, developer-board, deviantart, dialpad, diamond, dice-1, dice-2, dice-3, dice-4, dice-5, dice-6, dice-d10, dice-d12, dice-d20, dice-d4, dice-d6, dice-d8, dice-multiple, dictionary, dip-switch, directions, directions-fork, discord, disk, disk-alert, disqus, disqus-outline, division, division-box, dna, dns, do-not-disturb, do-not-disturb-off, docker, dolby, domain, donkey, door, door-closed, door-open, doorbell-video, dots-horizontal, dots-horizontal-circle, dots-vertical, dots-vertical-circle, douban, download, download-network, drag, drag-horizontal, drag-vertical, drawing, drawing-box, dribbble, dribbble-box, drone, dropbox, drupal, duck, dumbbell, ear-hearing, earth, earth-box, earth-box-off, earth-off, edge, eject, elephant, elevation-decline, elevation-rise, elevator, email, email-alert, email-open, email-open-outline, email-outline, email-secure, email-variant, emby, emoticon, emoticon-cool, emoticon-dead, emoticon-devil, emoticon-excited, emoticon-happy, emoticon-neutral, emoticon-poop, emoticon-sad, emoticon-tongue, engine, engine-outline, equal, equal-box, eraser, eraser-variant, escalator, ethereum, ethernet, ethernet-cable, ethernet-cable-off, etsy, ev-station, eventbrite, evernote, exclamation, exit-to-app, export, eye, eye-off, eye-off-outline, eye-outline, eye-plus, eye-plus-outline, eye-settings, eye-settings-outline, eyedropper, eyedropper-variant, face, face-profile, facebook, facebook-box, facebook-messenger, factory, fan, fan-off, fast-forward, fast-forward-outline, fax, feather, ferry, file, file-account, file-chart, file-check, file-cloud, file-compare, file-delimited, file-document, file-document-box, file-excel, file-excel-box, file-export, file-find, file-hidden, file-image, file-import, file-lock, file-multiple, file-music, file-outline, file-pdf, file-pdf-box, file-percent, file-plus, file-powerpoint, file-powerpoint-box, file-presentation-box, file-question, file-restore, file-send, file-tree, file-video, file-word, file-word-box, file-xml, film, filmstrip, filmstrip-off, filter, filter-outline, filter-remove, filter-remove-outline, filter-variant, finance, find-replace, fingerprint, fire, fire-truck, firefox, fish, flag, flag-checkered, flag-outline, flag-triangle, flag-variant, flag-variant-outline, flash, flash-auto, flash-circle, flash-off, flash-outline, flash-red-eye, flashlight, flashlight-off, flask, flask-empty, flask-empty-outline, flask-outline, flattr, flip-to-back, flip-to-front, floor-plan, floppy, flower, folder, folder-account, folder-download, folder-google-drive, folder-image, folder-key, folder-key-network, folder-lock, folder-lock-open, folder-move, folder-multiple, folder-multiple-image, folder-multiple-outline, folder-network, folder-open, folder-outline, folder-plus, folder-remove, folder-star, folder-upload, font-awesome, food, food-apple, food-croissant, food-fork-drink, food-off, food-variant, football, football-australian, football-helmet, forklift, format-align-bottom, format-align-center, format-align-justify, format-align-left, format-align-middle, format-align-right, format-align-top, format-annotation-plus, format-bold, format-clear, format-color-fill, format-color-text, format-float-center, format-float-left, format-float-none, format-float-right, format-font, format-header-1, format-header-2, format-header-3, format-header-4, format-header-5, format-header-6, format-header-decrease, format-header-equal, format-header-increase, format-header-pound, format-horizontal-align-center, format-horizontal-align-left, format-horizontal-align-right, format-indent-decrease, format-indent-increase, format-italic, format-line-spacing, format-line-style, format-line-weight, format-list-bulleted, format-list-bulleted-type, format-list-checks, format-list-numbers, format-page-break, format-paint, format-paragraph, format-pilcrow, format-quote-close, format-quote-open, format-rotate-90, format-section, format-size, format-strikethrough, format-strikethrough-variant, format-subscript, format-superscript, format-text, format-textdirection-l-to-r, format-textdirection-r-to-l, format-title, format-underline, format-vertical-align-bottom, format-vertical-align-center, format-vertical-align-top, format-wrap-inline, format-wrap-square, format-wrap-tight, format-wrap-top-bottom, forum, forum-outline, forward, foursquare, fridge, fridge-filled, fridge-filled-bottom, fridge-filled-top, fuel, fullscreen, fullscreen-exit, function, function-variant, gamepad, gamepad-variant, garage, garage-alert, garage-open, gas-cylinder, gas-station, gate, gauge, gauge-empty, gauge-full, gauge-low, gavel, gender-female, gender-male, gender-male-female, gender-transgender, gesture, gesture-double-tap, gesture-swipe-down, gesture-swipe-left, gesture-swipe-right, gesture-swipe-up, gesture-tap, gesture-two-double-tap, gesture-two-tap, ghost, gift, git, github-box, github-circle, github-face, glass-cocktail, glass-flute, glass-mug, glass-stange, glass-tulip, glass-wine, glassdoor, glasses, gmail, gnome, golf, gondola, google, google-analytics, google-assistant, google-cardboard, google-chrome, google-circles, google-circles-communities, google-circles-extended, google-circles-group, google-controller, google-controller-off, google-drive, google-earth, google-glass, google-home, google-keep, google-maps, google-nearby, google-pages, google-photos, google-physical-web, google-play, google-plus, google-plus-box, google-translate, google-wallet, gpu, gradient, graphql, grease-pencil, grid, grid-large, grid-off, group, guitar-acoustic, guitar-electric, guitar-pick, guitar-pick-outline, guy-fawkes-mask, hackernews, hamburger, hand-pointing-right, hanger, hangouts, harddisk, headphones, headphones-box, headphones-off, headphones-settings, headset, headset-dock, headset-off, heart, heart-box, heart-box-outline, heart-broken, heart-half, heart-half-full, heart-half-outline, heart-off, heart-outline, heart-pulse, help, help-box, help-circle, help-circle-outline, help-network, hexagon, hexagon-multiple, hexagon-outline, high-definition, high-definition-box, highway, history, hockey-puck, hockey-sticks, hololens, home, home-account, home-alert, home-assistant, home-automation, home-circle, home-currency-usd, home-heart, home-map-marker, home-modern, home-outline, home-variant, hook, hook-off, hops, hospital, hospital-building, hospital-marker, hot-tub, hotel, houzz, houzz-box, hulu, human, human-child, human-female, human-greeting, human-handsdown, human-handsup, human-male, human-male-female, human-pregnant, humble-bundle, ice-cream, image, image-album, image-area, image-area-close, image-broken, image-broken-variant, image-filter, image-filter-black-white, image-filter-center-focus, image-filter-center-focus-weak, image-filter-drama, image-filter-frames, image-filter-hdr, image-filter-none, image-filter-tilt-shift, image-filter-vintage, image-multiple, image-off, image-plus, import, inbox, inbox-arrow-down, inbox-arrow-up, inbox-multiple, incognito, infinity, information, information-outline, information-variant, instagram, instapaper, internet-explorer, invert-colors, itunes, jeepney, jira, jquery, jsfiddle, json, karate, keg, kettle, key, key-change, key-minus, key-plus, key-remove, key-variant, keyboard, keyboard-backspace, keyboard-caps, keyboard-close, keyboard-off, keyboard-return, keyboard-tab, keyboard-variant, kickstarter, kodi, label, label-outline, ladybug, lambda, lamp, lan, lan-connect, lan-disconnect, lan-pending, language-c, language-cpp, language-csharp, language-css3, language-go, language-html5, language-javascript, language-lua, language-php, language-python, language-python-text, language-r, language-swift, language-typescript, laptop, laptop-chromebook, laptop-mac, laptop-off, laptop-windows, lastfm, lastpass, launch, lava-lamp, layers, layers-off, lead-pencil, leaf, led-off, led-on, led-outline, led-strip, led-variant-off, led-variant-on, led-variant-outline, library, library-books, library-music, library-plus, lifebuoy, lightbulb, lightbulb-on, lightbulb-on-outline, lightbulb-outline, link, link-off, link-variant, link-variant-off, linkedin, linkedin-box, linux, loading, lock, lock-open, lock-open-outline, lock-outline, lock-pattern, lock-plus, lock-reset, lock-smart, locker, locker-multiple, login, login-variant, logout, logout-variant, looks, loop, loupe, lumx, magnet, magnet-on, magnify, magnify-minus, magnify-minus-outline, magnify-plus, magnify-plus-outline, mail-ru, mailbox, map, map-marker, map-marker-circle, map-marker-minus, map-marker-multiple, map-marker-off, map-marker-outline, map-marker-plus, map-marker-radius, margin, markdown, marker, marker-check, material-ui, math-compass, matrix, maxcdn, medical-bag, medium, memory, menu, menu-down, menu-down-outline, menu-left, menu-right, menu-up, menu-up-outline, message, message-alert, message-bulleted, message-bulleted-off, message-draw, message-image, message-outline, message-plus, message-processing, message-reply, message-reply-text, message-settings, message-settings-variant, message-text, message-text-outline, message-video, meteor, metronome, metronome-tick, micro-sd, microphone, microphone-minus, microphone-off, microphone-outline, microphone-plus, microphone-settings, microphone-variant, microphone-variant-off, microscope, microsoft, minecraft, minus, minus-box, minus-box-outline, minus-circle, minus-circle-outline, minus-network, mixcloud, mixed-reality, mixer, monitor, monitor-multiple, more, motorbike, mouse, mouse-off, mouse-variant, mouse-variant-off, move-resize, move-resize-variant, movie, movie-roll, multiplication, multiplication-box, mushroom, mushroom-outline, music, music-box, music-box-outline, music-circle, music-note, music-note-bluetooth, music-note-bluetooth-off, music-note-eighth, music-note-half, music-note-off, music-note-quarter, music-note-sixteenth, music-note-whole, music-off, nativescript, nature, nature-people, navigation, near-me, needle, nest-protect, nest-thermostat, netflix, network, new-box, newspaper, nfc, nfc-tap, nfc-variant, ninja, nintendo-switch, nodejs, note, note-multiple, note-multiple-outline, note-outline, note-plus, note-plus-outline, note-text, notebook, notification-clear-all, npm, nuke, null, numeric, numeric-0-box, numeric-0-box-multiple-outline, numeric-0-box-outline, numeric-1-box, numeric-1-box-multiple-outline, numeric-1-box-outline, numeric-2-box, numeric-2-box-multiple-outline, numeric-2-box-outline, numeric-3-box, numeric-3-box-multiple-outline, numeric-3-box-outline, numeric-4-box, numeric-4-box-multiple-outline, numeric-4-box-outline, numeric-5-box, numeric-5-box-multiple-outline, numeric-5-box-outline, numeric-6-box, numeric-6-box-multiple-outline, numeric-6-box-outline, numeric-7-box, numeric-7-box-multiple-outline, numeric-7-box-outline, numeric-8-box, numeric-8-box-multiple-outline, numeric-8-box-outline, numeric-9-box, numeric-9-box-multiple-outline, numeric-9-box-outline, numeric-9-plus-box, numeric-9-plus-box-multiple-outline, numeric-9-plus-box-outline, nut, nutrition, oar, octagon, octagon-outline, octagram, octagram-outline, odnoklassniki, office, oil, oil-temperature, omega, onedrive, onenote, onepassword, opacity, open-in-app, open-in-new, openid, opera, orbit, ornament, ornament-variant, owl, package, package-down, package-up, package-variant, package-variant-closed, page-first, page-last, page-layout-body, page-layout-footer, page-layout-header, page-layout-sidebar-left, page-layout-sidebar-right, palette, palette-advanced, palette-swatch, panda, pandora, panorama, panorama-fisheye, panorama-horizontal, panorama-vertical, panorama-wide-angle, paper-cut-vertical, paperclip, parking, passport, patreon, pause, pause-circle, pause-circle-outline, pause-octagon, pause-octagon-outline, paw, paw-off, paypal, peace, pen, pencil, pencil-box, pencil-box-outline, pencil-circle, pencil-circle-outline, pencil-lock, pencil-off, pentagon, pentagon-outline, percent, periodic-table, periodic-table-co2, periscope, pharmacy, phone, phone-bluetooth, phone-classic, phone-forward, phone-hangup, phone-in-talk, phone-incoming, phone-locked, phone-log, phone-minus, phone-missed, phone-outgoing, phone-paused, phone-plus, phone-return, phone-rotate-landscape, phone-rotate-portrait, phone-settings, phone-voip, pi, pi-box, piano, pickaxe, pier, pier-crane, pig, pill, pillar, pin, pin-off, pine-tree, pine-tree-box, pinterest, pinterest-box, pipe, pipe-disconnected, pipe-leak, pistol, piston, pizza, plane-shield, play, play-box-outline, play-circle, play-circle-outline, play-network, play-pause, play-protected-content, playlist-check, playlist-minus, playlist-play, playlist-plus, playlist-remove, playstation, plex, plus, plus-box, plus-box-outline, plus-circle, plus-circle-multiple-outline, plus-circle-outline, plus-network, plus-one, plus-outline, pocket, pokeball, poker-chip, polaroid, poll, poll-box, polymer, pool, popcorn, pot, pot-mix, pound, pound-box, power, power-plug, power-plug-off, power-settings, power-socket, power-socket-eu, power-socket-uk, power-socket-us, prescription, presentation, presentation-play, printer, printer-3d, printer-alert, printer-settings, priority-high, priority-low, professional-hexagon, projector, projector-screen, publish, pulse, puzzle, qqchat, qrcode, qrcode-edit, qrcode-scan, quadcopter, quality-high, quicktime, radar, radiator, radio, radio-handheld, radio-tower, radioactive, radiobox-blank, radiobox-marked, raspberrypi, ray-end, ray-end-arrow, ray-start, ray-start-arrow, ray-start-end, ray-vertex, react, read, receipt, record, record-rec, recycle, reddit, redo, redo-variant, refresh, regex, relative-scale, reload, reminder, remote, remote-desktop, rename-box, reorder-horizontal, reorder-vertical, repeat, repeat-off, repeat-once, replay, reply, reply-all, reproduction, resize-bottom-right, responsive, restart, restore, rewind, rewind-outline, rhombus, rhombus-outline, ribbon, rice, ring, road, road-variant, robot, rocket, room-service, roomba, rotate-3d, rotate-left, rotate-left-variant, rotate-right, rotate-right-variant, rounded-corner, router-wireless, routes, rowing, rss, rss-box, ruler, run, run-fast, sale, salesforce, sass, satellite, satellite-variant, sausage, saxophone, scale, scale-balance, scale-bathroom, scanner, school, screen-rotation, screen-rotation-lock, screwdriver, script, sd, seal, search-web, seat-flat, seat-flat-angled, seat-individual-suite, seat-legroom-extra, seat-legroom-normal, seat-legroom-reduced, seat-recline-extra, seat-recline-normal, security, security-account, security-home, security-network, select, select-all, select-inverse, select-off, selection, selection-off, send, send-secure, serial-port, server, server-minus, server-network, server-network-off, server-off, server-plus, server-remove, server-security, set-all, set-center, set-center-right, set-left, set-left-center, set-left-right, set-none, set-right, settings, settings-box, settings-outline, shape, shape-circle-plus, shape-outline, shape-plus, shape-polygon-plus, shape-rectangle-plus, shape-square-plus, share, share-variant, shield, shield-half-full, shield-outline, ship-wheel, shopping, shopping-music, shovel, shovel-off, shredder, shuffle, shuffle-disabled, shuffle-variant, sigma, sigma-lower, sign-caution, sign-direction, sign-text, signal, signal-2g, signal-3g, signal-4g, signal-cellular-1, signal-cellular-2, signal-cellular-3, signal-cellular-outline, signal-hspa, signal-hspa-plus, signal-off, signal-variant, silverware, silverware-fork, silverware-spoon, silverware-variant, sim, sim-alert, sim-off, sitemap, skip-backward, skip-forward, skip-next, skip-next-circle, skip-next-circle-outline, skip-previous, skip-previous-circle, skip-previous-circle-outline, skull, skype, skype-business, slack, sleep, sleep-off, smoking, smoking-off, snapchat, snowflake, snowman, soccer, soccer-field, sofa, solid, sort, sort-alphabetical, sort-ascending, sort-descending, sort-numeric, sort-variant, soundcloud, source-branch, source-commit, source-commit-end, source-commit-end-local, source-commit-local, source-commit-next-local, source-commit-start, source-commit-start-next-local, source-fork, source-merge, source-pull, soy-sauce, speaker, speaker-off, speaker-wireless, speedometer, spellcheck, spotify, spotlight, spotlight-beam, spray, square, square-inc, square-inc-cash, square-outline, square-root, ssh, stack-overflow, stackexchange, stadium, stairs, standard-definition, star, star-circle, star-half, star-off, star-outline, steam, steering, step-backward, step-backward-2, step-forward, step-forward-2, stethoscope, sticker, sticker-emoji, stocking, stop, stop-circle, stop-circle-outline, store, store-24-hour, stove, subdirectory-arrow-left, subdirectory-arrow-right, subway, subway-variant, summit, sunglasses, surround-sound, surround-sound-2-0, surround-sound-3-1, surround-sound-5-1, surround-sound-7-1, svg, swap-horizontal, swap-horizontal-variant, swap-vertical, swap-vertical-variant, swim, switch, sword, sword-cross, sync, sync-alert, sync-off, tab, tab-plus, tab-unselected, table, table-column, table-column-plus-after, table-column-plus-before, table-column-remove, table-column-width, table-edit, table-large, table-of-contents, table-row, table-row-height, table-row-plus-after, table-row-plus-before, table-row-remove, table-settings, tablet, tablet-android, tablet-ipad, taco, tag, tag-faces, tag-heart, tag-multiple, tag-outline, tag-plus, tag-remove, tag-text-outline, target, taxi, teach, teamviewer, telegram, television, television-box, television-classic, television-classic-off, television-guide, television-off, temperature-celsius, temperature-fahrenheit, temperature-kelvin, tennis, tent, terrain, test-tube, text-shadow, text-to-speech, text-to-speech-off, textbox, textbox-password, texture, theater, theme-light-dark, thermometer, thermometer-lines, thermostat-box, thought-bubble, thought-bubble-outline, thumb-down, thumb-down-outline, thumb-up, thumb-up-outline, thumbs-up-down, ticket, ticket-account, ticket-confirmation, ticket-percent, tie, tilde, timelapse, timer, timer-10, timer-3, timer-off, timer-sand, timer-sand-empty, timer-sand-full, timetable, toggle-switch, toggle-switch-off, tooltip, tooltip-edit, tooltip-image, tooltip-outline, tooltip-outline-plus, tooltip-text, tooth, tooth-outline, tor, tower-beach, tower-fire, towing, trackpad, tractor, traffic-light, train, train-variant, tram, transcribe, transcribe-close, transfer, transit-transfer, translate, treasure-chest, tree, trello, trending-down, trending-neutral, trending-up, triangle, triangle-outline, trophy, trophy-award, trophy-outline, trophy-variant, trophy-variant-outline, truck, truck-delivery, truck-fast, truck-trailer, tshirt-crew, tshirt-v, tumblr, tumblr-reblog, tune, tune-vertical, twitch, twitter, twitter-box, twitter-circle, twitter-retweet, uber, ubuntu, ultra-high-definition, umbraco, umbrella, umbrella-outline, undo, undo-variant, unfold-less-horizontal, unfold-less-vertical, unfold-more-horizontal, unfold-more-vertical, ungroup, unity, untappd, update, upload, upload-multiple, upload-network, usb, van-passenger, van-utility, vanish, vector-arrange-above, vector-arrange-below, vector-circle, vector-circle-variant, vector-combine, vector-curve, vector-difference, vector-difference-ab, vector-difference-ba, vector-ellipse, vector-intersection, vector-line, vector-point, vector-polygon, vector-polyline, vector-radius, vector-rectangle, vector-selection, vector-square, vector-triangle, vector-union, venmo, verified, vibrate, video, video-3d, video-4k-box, video-input-antenna, video-input-component, video-input-hdmi, video-input-svideo, video-off, video-switch, view-agenda, view-array, view-carousel, view-column, view-dashboard, view-dashboard-variant, view-day, view-grid, view-headline, view-list, view-module, view-parallel, view-quilt, view-sequential, view-stream, view-week, vimeo, violin, virtual-reality, visualstudio, vk, vk-box, vk-circle, vlc, voice, voicemail, volume-high, volume-low, volume-medium, volume-minus, volume-mute, volume-off, volume-plus, vpn, vuejs, walk, wall, wallet, wallet-giftcard, wallet-membership, wallet-travel, wan, washing-machine, watch, watch-export, watch-export-variant, watch-import, watch-import-variant, watch-variant, watch-vibrate, water, water-off, water-percent, water-pump, watermark, waves, weather-cloudy, weather-fog, weather-hail, weather-hurricane, weather-lightning, weather-lightning-rainy, weather-night, weather-partlycloudy, weather-pouring, weather-rainy, weather-snowy, weather-snowy-rainy, weather-sunny, weather-sunset, weather-sunset-down, weather-sunset-up, weather-windy, weather-windy-variant, web, webcam, webhook, webpack, wechat, weight, weight-kilogram, whatsapp, wheelchair-accessibility, white-balance-auto, white-balance-incandescent, white-balance-iridescent, white-balance-sunny, widgets, wifi, wifi-off, wii, wiiu, wikipedia, window-close, window-closed, window-maximize, window-minimize, window-open, window-restore, windows, wordpress, worker, wrap, wrench, wunderlist, xamarin, xamarin-outline, xaml, xbox, xbox-controller, xbox-controller-battery-alert, xbox-controller-battery-empty, xbox-controller-battery-full, xbox-controller-battery-low, xbox-controller-battery-medium, xbox-controller-battery-unknown, xbox-controller-off, xda, xing, xing-box, xing-circle, xml, xmpp, yammer, yeast, yelp, yin-yang, youtube-creator-studio, youtube-gaming, youtube-play, youtube-tv, zip-box, blank, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"access-point\":61442,\"access-point-network\":61443,\"account\":61444,\"account-alert\":61445,\"account-box\":61446,\"account-box-outline\":61447,\"account-card-details\":62930,\"account-check\":61448,\"account-circle\":61449,\"account-convert\":61450,\"account-edit\":63163,\"account-group\":63560,\"account-heart\":63640,\"account-key\":61451,\"account-location\":61452,\"account-minus\":61453,\"account-multiple\":61454,\"account-multiple-minus\":62931,\"account-multiple-outline\":61455,\"account-multiple-plus\":61456,\"account-multiple-plus-outline\":63487,\"account-network\":61457,\"account-off\":61458,\"account-outline\":61459,\"account-plus\":61460,\"account-plus-outline\":63488,\"account-remove\":61461,\"account-search\":61462,\"account-settings\":63024,\"account-settings-variant\":63025,\"account-star\":61463,\"account-switch\":61465,\"accusoft\":63561,\"adjust\":61466,\"air-conditioner\":61467,\"airballoon\":61468,\"airplane\":61469,\"airplane-landing\":62932,\"airplane-off\":61470,\"airplane-takeoff\":62933,\"airplay\":61471,\"airport\":63562,\"alarm\":61472,\"alarm-bell\":63373,\"alarm-check\":61473,\"alarm-light\":63374,\"alarm-multiple\":61474,\"alarm-off\":61475,\"alarm-plus\":61476,\"alarm-snooze\":63117,\"album\":61477,\"alert\":61478,\"alert-box\":61479,\"alert-circle\":61480,\"alert-circle-outline\":62934,\"alert-decagram\":63164,\"alert-octagon\":61481,\"alert-octagram\":63334,\"alert-outline\":61482,\"alien\":63641,\"all-inclusive\":63165,\"allo\":63489,\"alpha\":61483,\"alphabetical\":61484,\"altimeter\":62935,\"amazon\":61485,\"amazon-clouddrive\":61486,\"ambulance\":61487,\"amplifier\":61488,\"anchor\":61489,\"android\":61490,\"android-debug-bridge\":61491,\"android-head\":63375,\"android-studio\":61492,\"angular\":63153,\"angularjs\":63166,\"animation\":62936,\"anvil\":63642,\"apple\":61493,\"apple-finder\":61494,\"apple-ios\":61495,\"apple-keyboard-caps\":63026,\"apple-keyboard-command\":63027,\"apple-keyboard-control\":63028,\"apple-keyboard-option\":63029,\"apple-keyboard-shift\":63030,\"apple-mobileme\":61496,\"apple-safari\":61497,\"application\":62996,\"approval\":63376,\"apps\":61499,\"archive\":61500,\"arrange-bring-forward\":61501,\"arrange-bring-to-front\":61502,\"arrange-send-backward\":61503,\"arrange-send-to-back\":61504,\"arrow-all\":61505,\"arrow-bottom-left\":61506,\"arrow-bottom-right\":61507,\"arrow-collapse\":62997,\"arrow-collapse-all\":61508,\"arrow-collapse-down\":63377,\"arrow-collapse-horizontal\":63563,\"arrow-collapse-left\":63378,\"arrow-collapse-right\":63379,\"arrow-collapse-up\":63380,\"arrow-collapse-vertical\":63564,\"arrow-down\":61509,\"arrow-down-bold\":63277,\"arrow-down-bold-box\":63278,\"arrow-down-bold-box-outline\":63279,\"arrow-down-bold-circle\":61511,\"arrow-down-bold-circle-outline\":61512,\"arrow-down-bold-hexagon-outline\":61513,\"arrow-down-box\":63167,\"arrow-down-drop-circle\":61514,\"arrow-down-drop-circle-outline\":61515,\"arrow-down-thick\":61510,\"arrow-expand\":62998,\"arrow-expand-all\":61516,\"arrow-expand-down\":63381,\"arrow-expand-horizontal\":63565,\"arrow-expand-left\":63382,\"arrow-expand-right\":63383,\"arrow-expand-up\":63384,\"arrow-expand-vertical\":63566,\"arrow-left\":61517,\"arrow-left-bold\":63280,\"arrow-left-bold-box\":63281,\"arrow-left-bold-box-outline\":63282,\"arrow-left-bold-circle\":61519,\"arrow-left-bold-circle-outline\":61520,\"arrow-left-bold-hexagon-outline\":61521,\"arrow-left-box\":63168,\"arrow-left-drop-circle\":61522,\"arrow-left-drop-circle-outline\":61523,\"arrow-left-thick\":61518,\"arrow-right\":61524,\"arrow-right-bold\":63283,\"arrow-right-bold-box\":63284,\"arrow-right-bold-box-outline\":63285,\"arrow-right-bold-circle\":61526,\"arrow-right-bold-circle-outline\":61527,\"arrow-right-bold-hexagon-outline\":61528,\"arrow-right-box\":63169,\"arrow-right-drop-circle\":61529,\"arrow-right-drop-circle-outline\":61530,\"arrow-right-thick\":61525,\"arrow-top-left\":61531,\"arrow-top-right\":61532,\"arrow-up\":61533,\"arrow-up-bold\":63286,\"arrow-up-bold-box\":63287,\"arrow-up-bold-box-outline\":63288,\"arrow-up-bold-circle\":61535,\"arrow-up-bold-circle-outline\":61536,\"arrow-up-bold-hexagon-outline\":61537,\"arrow-up-box\":63170,\"arrow-up-drop-circle\":61538,\"arrow-up-drop-circle-outline\":61539,\"arrow-up-thick\":61534,\"artist\":63490,\"assistant\":61540,\"asterisk\":63171,\"at\":61541,\"atlassian\":63491,\"atom\":63335,\"attachment\":61542,\"audiobook\":61543,\"augmented-reality\":63567,\"auto-fix\":61544,\"auto-upload\":61545,\"autorenew\":61546,\"av-timer\":61547,\"azure\":63492,\"baby\":61548,\"baby-buggy\":63118,\"backburger\":61549,\"backspace\":61550,\"backup-restore\":61551,\"badminton\":63568,\"bandcamp\":63092,\"bank\":61552,\"barcode\":61553,\"barcode-scan\":61554,\"barley\":61555,\"barrel\":61556,\"baseball\":63569,\"baseball-bat\":63570,\"basecamp\":61557,\"basket\":61558,\"basket-fill\":61559,\"basket-unfill\":61560,\"basketball\":63493,\"battery\":61561,\"battery-10\":61562,\"battery-20\":61563,\"battery-30\":61564,\"battery-40\":61565,\"battery-50\":61566,\"battery-60\":61567,\"battery-70\":61568,\"battery-80\":61569,\"battery-90\":61570,\"battery-alert\":61571,\"battery-charging\":61572,\"battery-charging-10\":63643,\"battery-charging-100\":61573,\"battery-charging-20\":61574,\"battery-charging-30\":61575,\"battery-charging-40\":61576,\"battery-charging-50\":63644,\"battery-charging-60\":61577,\"battery-charging-70\":63645,\"battery-charging-80\":61578,\"battery-charging-90\":61579,\"battery-charging-outline\":63646,\"battery-charging-wireless\":63494,\"battery-charging-wireless-10\":63495,\"battery-charging-wireless-20\":63496,\"battery-charging-wireless-30\":63497,\"battery-charging-wireless-40\":63498,\"battery-charging-wireless-50\":63499,\"battery-charging-wireless-60\":63500,\"battery-charging-wireless-70\":63501,\"battery-charging-wireless-80\":63502,\"battery-charging-wireless-90\":63503,\"battery-charging-wireless-alert\":63504,\"battery-charging-wireless-outline\":63505,\"battery-minus\":61580,\"battery-negative\":61581,\"battery-outline\":61582,\"battery-plus\":61583,\"battery-positive\":61584,\"battery-unknown\":61585,\"beach\":61586,\"beaker\":63119,\"beats\":61591,\"bed-empty\":63647,\"beer\":61592,\"behance\":61593,\"bell\":61594,\"bell-off\":61595,\"bell-outline\":61596,\"bell-plus\":61597,\"bell-ring\":61598,\"bell-ring-outline\":61599,\"bell-sleep\":61600,\"beta\":61601,\"bible\":61602,\"bike\":61603,\"bing\":61604,\"binoculars\":61605,\"bio\":61606,\"biohazard\":61607,\"bitbucket\":61608,\"bitcoin\":63506,\"black-mesa\":61609,\"blackberry\":61610,\"blender\":61611,\"blinds\":61612,\"block-helper\":61613,\"blogger\":61614,\"bluetooth\":61615,\"bluetooth-audio\":61616,\"bluetooth-connect\":61617,\"bluetooth-off\":61618,\"bluetooth-settings\":61619,\"bluetooth-transfer\":61620,\"blur\":61621,\"blur-linear\":61622,\"blur-off\":61623,\"blur-radial\":61624,\"bomb\":63120,\"bomb-off\":63172,\"bone\":61625,\"book\":61626,\"book-minus\":62937,\"book-multiple\":61627,\"book-multiple-variant\":61628,\"book-open\":61629,\"book-open-page-variant\":62938,\"book-open-variant\":61630,\"book-plus\":62939,\"book-secure\":63385,\"book-unsecure\":63386,\"book-variant\":61631,\"bookmark\":61632,\"bookmark-check\":61633,\"bookmark-music\":61634,\"bookmark-outline\":61635,\"bookmark-plus\":61637,\"bookmark-plus-outline\":61636,\"bookmark-remove\":61638,\"boombox\":62940,\"bootstrap\":63173,\"border-all\":61639,\"border-all-variant\":63648,\"border-bottom\":61640,\"border-bottom-variant\":63649,\"border-color\":61641,\"border-horizontal\":61642,\"border-inside\":61643,\"border-left\":61644,\"border-left-variant\":63650,\"border-none\":61645,\"border-none-variant\":63651,\"border-outside\":61646,\"border-right\":61647,\"border-right-variant\":63652,\"border-style\":61648,\"border-top\":61649,\"border-top-variant\":63653,\"border-vertical\":61650,\"bottle-wine\":63571,\"bow-tie\":63095,\"bowl\":62999,\"bowling\":61651,\"box\":61652,\"box-cutter\":61653,\"box-shadow\":63031,\"bridge\":63000,\"briefcase\":61654,\"briefcase-check\":61655,\"briefcase-download\":61656,\"briefcase-outline\":63507,\"briefcase-upload\":61657,\"brightness-1\":61658,\"brightness-2\":61659,\"brightness-3\":61660,\"brightness-4\":61661,\"brightness-5\":61662,\"brightness-6\":61663,\"brightness-7\":61664,\"brightness-auto\":61665,\"broom\":61666,\"brush\":61667,\"buffer\":63001,\"bug\":61668,\"bulletin-board\":61669,\"bullhorn\":61670,\"bullseye\":62941,\"bus\":61671,\"bus-articulated-end\":63387,\"bus-articulated-front\":63388,\"bus-double-decker\":63389,\"bus-school\":63390,\"bus-side\":63391,\"cached\":61672,\"cake\":61673,\"cake-layered\":61674,\"cake-variant\":61675,\"calculator\":61676,\"calendar\":61677,\"calendar-blank\":61678,\"calendar-check\":61679,\"calendar-clock\":61680,\"calendar-edit\":63654,\"calendar-multiple\":61681,\"calendar-multiple-check\":61682,\"calendar-plus\":61683,\"calendar-question\":63121,\"calendar-range\":63096,\"calendar-remove\":61684,\"calendar-text\":61685,\"calendar-today\":61686,\"call-made\":61687,\"call-merge\":61688,\"call-missed\":61689,\"call-received\":61690,\"call-split\":61691,\"camcorder\":61692,\"camcorder-box\":61693,\"camcorder-box-off\":61694,\"camcorder-off\":61695,\"camera\":61696,\"camera-burst\":63122,\"camera-enhance\":61697,\"camera-front\":61698,\"camera-front-variant\":61699,\"camera-gopro\":63392,\"camera-iris\":61700,\"camera-metering-center\":63393,\"camera-metering-matrix\":63394,\"camera-metering-partial\":63395,\"camera-metering-spot\":63396,\"camera-off\":62943,\"camera-party-mode\":61701,\"camera-rear\":61702,\"camera-rear-variant\":61703,\"camera-switch\":61704,\"camera-timer\":61705,\"cancel\":63289,\"candle\":62946,\"candycane\":61706,\"cannabis\":63397,\"car\":61707,\"car-battery\":61708,\"car-connected\":61709,\"car-convertible\":63398,\"car-estate\":63399,\"car-hatchback\":63400,\"car-pickup\":63401,\"car-side\":63402,\"car-sports\":63403,\"car-wash\":61710,\"caravan\":63404,\"cards\":63032,\"cards-outline\":63033,\"cards-playing-outline\":63034,\"cards-variant\":63174,\"carrot\":61711,\"cart\":61712,\"cart-off\":63083,\"cart-outline\":61713,\"cart-plus\":61714,\"case-sensitive-alt\":61715,\"cash\":61716,\"cash-100\":61717,\"cash-multiple\":61718,\"cash-usd\":61719,\"cast\":61720,\"cast-connected\":61721,\"cast-off\":63369,\"castle\":61722,\"cat\":61723,\"cctv\":63405,\"ceiling-light\":63336,\"cellphone\":61724,\"cellphone-android\":61725,\"cellphone-basic\":61726,\"cellphone-dock\":61727,\"cellphone-iphone\":61728,\"cellphone-link\":61729,\"cellphone-link-off\":61730,\"cellphone-settings\":61731,\"cellphone-wireless\":63508,\"certificate\":61732,\"chair-school\":61733,\"chart-arc\":61734,\"chart-areaspline\":61735,\"chart-bar\":61736,\"chart-bar-stacked\":63337,\"chart-bubble\":62947,\"chart-donut\":63406,\"chart-donut-variant\":63407,\"chart-gantt\":63084,\"chart-histogram\":61737,\"chart-line\":61738,\"chart-line-stacked\":63338,\"chart-line-variant\":63408,\"chart-pie\":61739,\"chart-scatterplot-hexbin\":63085,\"chart-timeline\":63086,\"check\":61740,\"check-all\":61741,\"check-circle\":62944,\"check-circle-outline\":62945,\"check-outline\":63572,\"checkbox-blank\":61742,\"checkbox-blank-circle\":61743,\"checkbox-blank-circle-outline\":61744,\"checkbox-blank-outline\":61745,\"checkbox-intermediate\":63573,\"checkbox-marked\":61746,\"checkbox-marked-circle\":61747,\"checkbox-marked-circle-outline\":61748,\"checkbox-marked-outline\":61749,\"checkbox-multiple-blank\":61750,\"checkbox-multiple-blank-circle\":63035,\"checkbox-multiple-blank-circle-outline\":63036,\"checkbox-multiple-blank-outline\":61751,\"checkbox-multiple-marked\":61752,\"checkbox-multiple-marked-circle\":63037,\"checkbox-multiple-marked-circle-outline\":63038,\"checkbox-multiple-marked-outline\":61753,\"checkerboard\":61754,\"chemical-weapon\":61755,\"chess-bishop\":63579,\"chess-king\":63574,\"chess-knight\":63575,\"chess-pawn\":63576,\"chess-queen\":63577,\"chess-rook\":63578,\"chevron-double-down\":61756,\"chevron-double-left\":61757,\"chevron-double-right\":61758,\"chevron-double-up\":61759,\"chevron-down\":61760,\"chevron-left\":61761,\"chevron-right\":61762,\"chevron-up\":61763,\"chili-hot\":63409,\"chili-medium\":63410,\"chili-mild\":63411,\"chip\":63002,\"church\":61764,\"circle\":63332,\"circle-outline\":63333,\"cisco-webex\":61765,\"city\":61766,\"clipboard\":61767,\"clipboard-account\":61768,\"clipboard-alert\":61769,\"clipboard-arrow-down\":61770,\"clipboard-arrow-left\":61771,\"clipboard-check\":61772,\"clipboard-check-outline\":63655,\"clipboard-flow\":63175,\"clipboard-outline\":61773,\"clipboard-plus\":63312,\"clipboard-pulse\":63580,\"clipboard-pulse-outline\":63581,\"clipboard-text\":61774,\"clippy\":61775,\"clock\":61776,\"clock-alert\":62926,\"clock-end\":61777,\"clock-fast\":61778,\"clock-in\":61779,\"clock-out\":61780,\"clock-start\":61781,\"close\":61782,\"close-box\":61783,\"close-box-outline\":61784,\"close-circle\":61785,\"close-circle-outline\":61786,\"close-network\":61787,\"close-octagon\":61788,\"close-octagon-outline\":61789,\"close-outline\":63176,\"closed-caption\":61790,\"cloud\":61791,\"cloud-braces\":63412,\"cloud-check\":61792,\"cloud-circle\":61793,\"cloud-download\":61794,\"cloud-off-outline\":61796,\"cloud-outline\":61795,\"cloud-print\":61797,\"cloud-print-outline\":61798,\"cloud-sync\":63039,\"cloud-tags\":63413,\"cloud-upload\":61799,\"clover\":63509,\"code-array\":61800,\"code-braces\":61801,\"code-brackets\":61802,\"code-equal\":61803,\"code-greater-than\":61804,\"code-greater-than-or-equal\":61805,\"code-less-than\":61806,\"code-less-than-or-equal\":61807,\"code-not-equal\":61808,\"code-not-equal-variant\":61809,\"code-parentheses\":61810,\"code-string\":61811,\"code-tags\":61812,\"code-tags-check\":63123,\"codepen\":61813,\"coffee\":61814,\"coffee-outline\":63177,\"coffee-to-go\":61815,\"coin\":61816,\"coins\":63124,\"collage\":63040,\"color-helper\":61817,\"comment\":61818,\"comment-account\":61819,\"comment-account-outline\":61820,\"comment-alert\":61821,\"comment-alert-outline\":61822,\"comment-check\":61823,\"comment-check-outline\":61824,\"comment-multiple\":63582,\"comment-multiple-outline\":61825,\"comment-outline\":61826,\"comment-plus-outline\":61827,\"comment-processing\":61828,\"comment-processing-outline\":61829,\"comment-question\":63510,\"comment-question-outline\":61830,\"comment-remove\":62942,\"comment-remove-outline\":61831,\"comment-text\":61832,\"comment-text-multiple\":63583,\"comment-text-multiple-outline\":63584,\"comment-text-outline\":61833,\"compare\":61834,\"compass\":61835,\"compass-outline\":61836,\"console\":61837,\"console-line\":63414,\"console-network\":63656,\"contact-mail\":61838,\"contacts\":63178,\"content-copy\":61839,\"content-cut\":61840,\"content-duplicate\":61841,\"content-paste\":61842,\"content-save\":61843,\"content-save-all\":61844,\"content-save-outline\":63511,\"content-save-settings\":63003,\"contrast\":61845,\"contrast-box\":61846,\"contrast-circle\":61847,\"cookie\":61848,\"copyright\":62950,\"corn\":63415,\"counter\":61849,\"cow\":61850,\"crane\":63585,\"creation\":61897,\"credit-card\":61851,\"credit-card-multiple\":61852,\"credit-card-off\":62948,\"credit-card-plus\":63093,\"credit-card-scan\":61853,\"crop\":61854,\"crop-free\":61855,\"crop-landscape\":61856,\"crop-portrait\":61857,\"crop-rotate\":63125,\"crop-square\":61858,\"crosshairs\":61859,\"crosshairs-gps\":61860,\"crown\":61861,\"cube\":61862,\"cube-outline\":61863,\"cube-send\":61864,\"cube-unfolded\":61865,\"cup\":61866,\"cup-off\":62949,\"cup-water\":61867,\"curling\":63586,\"currency-bdt\":63587,\"currency-btc\":61868,\"currency-chf\":63416,\"currency-cny\":63417,\"currency-eth\":63418,\"currency-eur\":61869,\"currency-gbp\":61870,\"currency-inr\":61871,\"currency-jpy\":63419,\"currency-krw\":63420,\"currency-kzt\":63588,\"currency-ngn\":61872,\"currency-rub\":61873,\"currency-sign\":63421,\"currency-try\":61874,\"currency-twd\":63422,\"currency-usd\":61875,\"currency-usd-off\":63097,\"cursor-default\":61876,\"cursor-default-outline\":61877,\"cursor-move\":61878,\"cursor-pointer\":61879,\"cursor-text\":62951,\"database\":61880,\"database-minus\":61881,\"database-plus\":61882,\"database-search\":63589,\"debug-step-into\":61883,\"debug-step-out\":61884,\"debug-step-over\":61885,\"decagram\":63339,\"decagram-outline\":63340,\"decimal-decrease\":61886,\"decimal-increase\":61887,\"delete\":61888,\"delete-circle\":63106,\"delete-empty\":63179,\"delete-forever\":62952,\"delete-restore\":63512,\"delete-sweep\":62953,\"delete-variant\":61889,\"delta\":61890,\"deskphone\":61891,\"desktop-classic\":63423,\"desktop-mac\":61892,\"desktop-tower\":61893,\"details\":61894,\"developer-board\":63126,\"deviantart\":61895,\"dialpad\":63004,\"diamond\":61896,\"dice-1\":61898,\"dice-2\":61899,\"dice-3\":61900,\"dice-4\":61901,\"dice-5\":61902,\"dice-6\":61903,\"dice-d10\":63342,\"dice-d12\":63590,\"dice-d20\":62954,\"dice-d4\":62955,\"dice-d6\":62956,\"dice-d8\":62957,\"dice-multiple\":63341,\"dictionary\":63005,\"dip-switch\":63424,\"directions\":61904,\"directions-fork\":63041,\"discord\":63087,\"disk\":62958,\"disk-alert\":61905,\"disqus\":61906,\"disqus-outline\":61907,\"division\":61908,\"division-box\":61909,\"dna\":63107,\"dns\":61910,\"do-not-disturb\":63127,\"do-not-disturb-off\":63128,\"docker\":63591,\"dolby\":63154,\"domain\":61911,\"donkey\":63425,\"door\":63513,\"door-closed\":63514,\"door-open\":63515,\"doorbell-video\":63592,\"dots-horizontal\":61912,\"dots-horizontal-circle\":63426,\"dots-vertical\":61913,\"dots-vertical-circle\":63427,\"douban\":63129,\"download\":61914,\"download-network\":63219,\"drag\":61915,\"drag-horizontal\":61916,\"drag-vertical\":61917,\"drawing\":61918,\"drawing-box\":61919,\"dribbble\":61920,\"dribbble-box\":61921,\"drone\":61922,\"dropbox\":61923,\"drupal\":61924,\"duck\":61925,\"dumbbell\":61926,\"ear-hearing\":63428,\"earth\":61927,\"earth-box\":63180,\"earth-box-off\":63181,\"earth-off\":61928,\"edge\":61929,\"eject\":61930,\"elephant\":63429,\"elevation-decline\":61931,\"elevation-rise\":61932,\"elevator\":61933,\"email\":61934,\"email-alert\":63182,\"email-open\":61935,\"email-open-outline\":62959,\"email-outline\":61936,\"email-secure\":61937,\"email-variant\":62960,\"emby\":63155,\"emoticon\":61938,\"emoticon-cool\":61939,\"emoticon-dead\":63130,\"emoticon-devil\":61940,\"emoticon-excited\":63131,\"emoticon-happy\":61941,\"emoticon-neutral\":61942,\"emoticon-poop\":61943,\"emoticon-sad\":61944,\"emoticon-tongue\":61945,\"engine\":61946,\"engine-outline\":61947,\"equal\":61948,\"equal-box\":61949,\"eraser\":61950,\"eraser-variant\":63042,\"escalator\":61951,\"ethereum\":63593,\"ethernet\":61952,\"ethernet-cable\":61953,\"ethernet-cable-off\":61954,\"etsy\":61955,\"ev-station\":62961,\"eventbrite\":63430,\"evernote\":61956,\"exclamation\":61957,\"exit-to-app\":61958,\"export\":61959,\"eye\":61960,\"eye-off\":61961,\"eye-off-outline\":63184,\"eye-outline\":63183,\"eye-plus\":63594,\"eye-plus-outline\":63595,\"eye-settings\":63596,\"eye-settings-outline\":63597,\"eyedropper\":61962,\"eyedropper-variant\":61963,\"face\":63043,\"face-profile\":63044,\"facebook\":61964,\"facebook-box\":61965,\"facebook-messenger\":61966,\"factory\":61967,\"fan\":61968,\"fan-off\":63516,\"fast-forward\":61969,\"fast-forward-outline\":63185,\"fax\":61970,\"feather\":63186,\"ferry\":61971,\"file\":61972,\"file-account\":63290,\"file-chart\":61973,\"file-check\":61974,\"file-cloud\":61975,\"file-compare\":63657,\"file-delimited\":61976,\"file-document\":61977,\"file-document-box\":61978,\"file-excel\":61979,\"file-excel-box\":61980,\"file-export\":61981,\"file-find\":61982,\"file-hidden\":62995,\"file-image\":61983,\"file-import\":61984,\"file-lock\":61985,\"file-multiple\":61986,\"file-music\":61987,\"file-outline\":61988,\"file-pdf\":61989,\"file-pdf-box\":61990,\"file-percent\":63517,\"file-plus\":63313,\"file-powerpoint\":61991,\"file-powerpoint-box\":61992,\"file-presentation-box\":61993,\"file-question\":63598,\"file-restore\":63088,\"file-send\":61994,\"file-tree\":63045,\"file-video\":61995,\"file-word\":61996,\"file-word-box\":61997,\"file-xml\":61998,\"film\":61999,\"filmstrip\":62000,\"filmstrip-off\":62001,\"filter\":62002,\"filter-outline\":62003,\"filter-remove\":62004,\"filter-remove-outline\":62005,\"filter-variant\":62006,\"finance\":63518,\"find-replace\":63187,\"fingerprint\":62007,\"fire\":62008,\"fire-truck\":63658,\"firefox\":62009,\"fish\":62010,\"flag\":62011,\"flag-checkered\":62012,\"flag-outline\":62013,\"flag-triangle\":62015,\"flag-variant\":62016,\"flag-variant-outline\":62014,\"flash\":62017,\"flash-auto\":62018,\"flash-circle\":63519,\"flash-off\":62019,\"flash-outline\":63188,\"flash-red-eye\":63098,\"flashlight\":62020,\"flashlight-off\":62021,\"flask\":61587,\"flask-empty\":61588,\"flask-empty-outline\":61589,\"flask-outline\":61590,\"flattr\":62022,\"flip-to-back\":62023,\"flip-to-front\":62024,\"floor-plan\":63520,\"floppy\":62025,\"flower\":62026,\"folder\":62027,\"folder-account\":62028,\"folder-download\":62029,\"folder-google-drive\":62030,\"folder-image\":62031,\"folder-key\":63659,\"folder-key-network\":63660,\"folder-lock\":62032,\"folder-lock-open\":62033,\"folder-move\":62034,\"folder-multiple\":62035,\"folder-multiple-image\":62036,\"folder-multiple-outline\":62037,\"folder-network\":63599,\"folder-open\":63343,\"folder-outline\":62038,\"folder-plus\":62039,\"folder-remove\":62040,\"folder-star\":63132,\"folder-upload\":62041,\"font-awesome\":61498,\"food\":62042,\"food-apple\":62043,\"food-croissant\":63431,\"food-fork-drink\":62962,\"food-off\":62963,\"food-variant\":62044,\"football\":62045,\"football-australian\":62046,\"football-helmet\":62047,\"forklift\":63432,\"format-align-bottom\":63314,\"format-align-center\":62048,\"format-align-justify\":62049,\"format-align-left\":62050,\"format-align-middle\":63315,\"format-align-right\":62051,\"format-align-top\":63316,\"format-annotation-plus\":63046,\"format-bold\":62052,\"format-clear\":62053,\"format-color-fill\":62054,\"format-color-text\":63133,\"format-float-center\":62055,\"format-float-left\":62056,\"format-float-none\":62057,\"format-float-right\":62058,\"format-font\":63189,\"format-header-1\":62059,\"format-header-2\":62060,\"format-header-3\":62061,\"format-header-4\":62062,\"format-header-5\":62063,\"format-header-6\":62064,\"format-header-decrease\":62065,\"format-header-equal\":62066,\"format-header-increase\":62067,\"format-header-pound\":62068,\"format-horizontal-align-center\":63006,\"format-horizontal-align-left\":63007,\"format-horizontal-align-right\":63008,\"format-indent-decrease\":62069,\"format-indent-increase\":62070,\"format-italic\":62071,\"format-line-spacing\":62072,\"format-line-style\":62920,\"format-line-weight\":62921,\"format-list-bulleted\":62073,\"format-list-bulleted-type\":62074,\"format-list-checks\":63317,\"format-list-numbers\":62075,\"format-page-break\":63190,\"format-paint\":62076,\"format-paragraph\":62077,\"format-pilcrow\":63191,\"format-quote-close\":62078,\"format-quote-open\":63318,\"format-rotate-90\":63145,\"format-section\":63134,\"format-size\":62079,\"format-strikethrough\":62080,\"format-strikethrough-variant\":62081,\"format-subscript\":62082,\"format-superscript\":62083,\"format-text\":62084,\"format-textdirection-l-to-r\":62085,\"format-textdirection-r-to-l\":62086,\"format-title\":62964,\"format-underline\":62087,\"format-vertical-align-bottom\":63009,\"format-vertical-align-center\":63010,\"format-vertical-align-top\":63011,\"format-wrap-inline\":62088,\"format-wrap-square\":62089,\"format-wrap-tight\":62090,\"format-wrap-top-bottom\":62091,\"forum\":62092,\"forum-outline\":63521,\"forward\":62093,\"foursquare\":62094,\"fridge\":62095,\"fridge-filled\":62096,\"fridge-filled-bottom\":62097,\"fridge-filled-top\":62098,\"fuel\":63433,\"fullscreen\":62099,\"fullscreen-exit\":62100,\"function\":62101,\"function-variant\":63600,\"gamepad\":62102,\"gamepad-variant\":62103,\"garage\":63192,\"garage-alert\":63601,\"garage-open\":63193,\"gas-cylinder\":63047,\"gas-station\":62104,\"gate\":62105,\"gauge\":62106,\"gauge-empty\":63602,\"gauge-full\":63603,\"gauge-low\":63604,\"gavel\":62107,\"gender-female\":62108,\"gender-male\":62109,\"gender-male-female\":62110,\"gender-transgender\":62111,\"gesture\":63434,\"gesture-double-tap\":63291,\"gesture-swipe-down\":63292,\"gesture-swipe-left\":63293,\"gesture-swipe-right\":63294,\"gesture-swipe-up\":63295,\"gesture-tap\":63296,\"gesture-two-double-tap\":63297,\"gesture-two-tap\":63298,\"ghost\":62112,\"gift\":62113,\"git\":62114,\"github-box\":62115,\"github-circle\":62116,\"github-face\":63194,\"glass-cocktail\":62294,\"glass-flute\":62117,\"glass-mug\":62118,\"glass-stange\":62119,\"glass-tulip\":62120,\"glass-wine\":63605,\"glassdoor\":62121,\"glasses\":62122,\"gmail\":62123,\"gnome\":62124,\"golf\":63522,\"gondola\":63109,\"google\":62125,\"google-analytics\":63435,\"google-assistant\":63436,\"google-cardboard\":62126,\"google-chrome\":62127,\"google-circles\":62128,\"google-circles-communities\":62129,\"google-circles-extended\":62130,\"google-circles-group\":62131,\"google-controller\":62132,\"google-controller-off\":62133,\"google-drive\":62134,\"google-earth\":62135,\"google-glass\":62136,\"google-home\":63523,\"google-keep\":63195,\"google-maps\":62965,\"google-nearby\":62137,\"google-pages\":62138,\"google-photos\":63196,\"google-physical-web\":62139,\"google-play\":62140,\"google-plus\":62141,\"google-plus-box\":62142,\"google-translate\":62143,\"google-wallet\":62144,\"gpu\":63661,\"gradient\":63135,\"graphql\":63606,\"grease-pencil\":63048,\"grid\":62145,\"grid-large\":63319,\"grid-off\":62146,\"group\":62147,\"guitar-acoustic\":63344,\"guitar-electric\":62148,\"guitar-pick\":62149,\"guitar-pick-outline\":62150,\"guy-fawkes-mask\":63524,\"hackernews\":63012,\"hamburger\":63108,\"hand-pointing-right\":62151,\"hanger\":62152,\"hangouts\":62153,\"harddisk\":62154,\"headphones\":62155,\"headphones-box\":62156,\"headphones-off\":63437,\"headphones-settings\":62157,\"headset\":62158,\"headset-dock\":62159,\"headset-off\":62160,\"heart\":62161,\"heart-box\":62162,\"heart-box-outline\":62163,\"heart-broken\":62164,\"heart-half\":63198,\"heart-half-full\":63197,\"heart-half-outline\":63199,\"heart-off\":63320,\"heart-outline\":62165,\"heart-pulse\":62966,\"help\":62166,\"help-box\":63370,\"help-circle\":62167,\"help-circle-outline\":63013,\"help-network\":63220,\"hexagon\":62168,\"hexagon-multiple\":63200,\"hexagon-outline\":62169,\"high-definition\":63438,\"high-definition-box\":63607,\"highway\":62967,\"history\":62170,\"hockey-puck\":63608,\"hockey-sticks\":63609,\"hololens\":62171,\"home\":62172,\"home-account\":63525,\"home-alert\":63610,\"home-assistant\":63439,\"home-automation\":63440,\"home-circle\":63441,\"home-currency-usd\":63662,\"home-heart\":63526,\"home-map-marker\":62968,\"home-modern\":62173,\"home-outline\":63136,\"home-variant\":62174,\"hook\":63201,\"hook-off\":63202,\"hops\":62175,\"hospital\":62176,\"hospital-building\":62177,\"hospital-marker\":62178,\"hot-tub\":63527,\"hotel\":62179,\"houzz\":62180,\"houzz-box\":62181,\"hulu\":63528,\"human\":62182,\"human-child\":62183,\"human-female\":63049,\"human-greeting\":63050,\"human-handsdown\":63051,\"human-handsup\":63052,\"human-male\":63053,\"human-male-female\":62184,\"human-pregnant\":62927,\"humble-bundle\":63299,\"ice-cream\":63529,\"image\":62185,\"image-album\":62186,\"image-area\":62187,\"image-area-close\":62188,\"image-broken\":62189,\"image-broken-variant\":62190,\"image-filter\":62191,\"image-filter-black-white\":62192,\"image-filter-center-focus\":62193,\"image-filter-center-focus-weak\":62194,\"image-filter-drama\":62195,\"image-filter-frames\":62196,\"image-filter-hdr\":62197,\"image-filter-none\":62198,\"image-filter-tilt-shift\":62199,\"image-filter-vintage\":62200,\"image-multiple\":62201,\"image-off\":63530,\"image-plus\":63611,\"import\":62202,\"inbox\":63110,\"inbox-arrow-down\":62203,\"inbox-arrow-up\":62417,\"inbox-multiple\":63663,\"incognito\":62969,\"infinity\":63203,\"information\":62204,\"information-outline\":62205,\"information-variant\":63054,\"instagram\":62206,\"instapaper\":62207,\"internet-explorer\":62208,\"invert-colors\":62209,\"itunes\":63094,\"jeepney\":62210,\"jira\":62211,\"jquery\":63612,\"jsfiddle\":62212,\"json\":63014,\"karate\":63531,\"keg\":62213,\"kettle\":62970,\"key\":62214,\"key-change\":62215,\"key-minus\":62216,\"key-plus\":62217,\"key-remove\":62218,\"key-variant\":62219,\"keyboard\":62220,\"keyboard-backspace\":62221,\"keyboard-caps\":62222,\"keyboard-close\":62223,\"keyboard-off\":62224,\"keyboard-return\":62225,\"keyboard-tab\":62226,\"keyboard-variant\":62227,\"kickstarter\":63300,\"kodi\":62228,\"label\":62229,\"label-outline\":62230,\"ladybug\":63532,\"lambda\":63015,\"lamp\":63156,\"lan\":62231,\"lan-connect\":62232,\"lan-disconnect\":62233,\"lan-pending\":62234,\"language-c\":63089,\"language-cpp\":63090,\"language-csharp\":62235,\"language-css3\":62236,\"language-go\":63442,\"language-html5\":62237,\"language-javascript\":62238,\"language-lua\":63664,\"language-php\":62239,\"language-python\":62240,\"language-python-text\":62241,\"language-r\":63443,\"language-swift\":63204,\"language-typescript\":63205,\"laptop\":62242,\"laptop-chromebook\":62243,\"laptop-mac\":62244,\"laptop-off\":63206,\"laptop-windows\":62245,\"lastfm\":62246,\"lastpass\":62534,\"launch\":62247,\"lava-lamp\":63444,\"layers\":62248,\"layers-off\":62249,\"lead-pencil\":63055,\"leaf\":62250,\"led-off\":62251,\"led-on\":62252,\"led-outline\":62253,\"led-strip\":63445,\"led-variant-off\":62254,\"led-variant-on\":62255,\"led-variant-outline\":62256,\"library\":62257,\"library-books\":62258,\"library-music\":62259,\"library-plus\":62260,\"lifebuoy\":63613,\"lightbulb\":62261,\"lightbulb-on\":63207,\"lightbulb-on-outline\":63208,\"lightbulb-outline\":62262,\"link\":62263,\"link-off\":62264,\"link-variant\":62265,\"link-variant-off\":62266,\"linkedin\":62267,\"linkedin-box\":62268,\"linux\":62269,\"loading\":63345,\"lock\":62270,\"lock-open\":62271,\"lock-open-outline\":62272,\"lock-outline\":62273,\"lock-pattern\":63209,\"lock-plus\":62971,\"lock-reset\":63346,\"lock-smart\":63665,\"locker\":63446,\"locker-multiple\":63447,\"login\":62274,\"login-variant\":62972,\"logout\":62275,\"logout-variant\":62973,\"looks\":62276,\"loop\":63210,\"loupe\":62277,\"lumx\":62278,\"magnet\":62279,\"magnet-on\":62280,\"magnify\":62281,\"magnify-minus\":62282,\"magnify-minus-outline\":63211,\"magnify-plus\":62283,\"magnify-plus-outline\":63212,\"mail-ru\":62284,\"mailbox\":63213,\"map\":62285,\"map-marker\":62286,\"map-marker-circle\":62287,\"map-marker-minus\":63056,\"map-marker-multiple\":62288,\"map-marker-off\":62289,\"map-marker-outline\":63448,\"map-marker-plus\":63057,\"map-marker-radius\":62290,\"margin\":62291,\"markdown\":62292,\"marker\":63058,\"marker-check\":62293,\"material-ui\":62295,\"math-compass\":62296,\"matrix\":63016,\"maxcdn\":62297,\"medical-bag\":63214,\"medium\":62298,\"memory\":62299,\"menu\":62300,\"menu-down\":62301,\"menu-down-outline\":63157,\"menu-left\":62302,\"menu-right\":62303,\"menu-up\":62304,\"menu-up-outline\":63158,\"message\":62305,\"message-alert\":62306,\"message-bulleted\":63137,\"message-bulleted-off\":63138,\"message-draw\":62307,\"message-image\":62308,\"message-outline\":62309,\"message-plus\":63059,\"message-processing\":62310,\"message-reply\":62311,\"message-reply-text\":62312,\"message-settings\":63215,\"message-settings-variant\":63216,\"message-text\":62313,\"message-text-outline\":62314,\"message-video\":62315,\"meteor\":63017,\"metronome\":63449,\"metronome-tick\":63450,\"micro-sd\":63451,\"microphone\":62316,\"microphone-minus\":63666,\"microphone-off\":62317,\"microphone-outline\":62318,\"microphone-plus\":63667,\"microphone-settings\":62319,\"microphone-variant\":62320,\"microphone-variant-off\":62321,\"microscope\":63060,\"microsoft\":62322,\"minecraft\":62323,\"minus\":62324,\"minus-box\":62325,\"minus-box-outline\":63217,\"minus-circle\":62326,\"minus-circle-outline\":62327,\"minus-network\":62328,\"mixcloud\":63018,\"mixed-reality\":63614,\"mixer\":63452,\"monitor\":62329,\"monitor-multiple\":62330,\"more\":62331,\"motorbike\":62332,\"mouse\":62333,\"mouse-off\":62334,\"mouse-variant\":62335,\"mouse-variant-off\":62336,\"move-resize\":63061,\"move-resize-variant\":63062,\"movie\":62337,\"movie-roll\":63453,\"multiplication\":62338,\"multiplication-box\":62339,\"mushroom\":63454,\"mushroom-outline\":63455,\"music\":63321,\"music-box\":62340,\"music-box-outline\":62341,\"music-circle\":62342,\"music-note\":62343,\"music-note-bluetooth\":62974,\"music-note-bluetooth-off\":62975,\"music-note-eighth\":62344,\"music-note-half\":62345,\"music-note-off\":62346,\"music-note-quarter\":62347,\"music-note-sixteenth\":62348,\"music-note-whole\":62349,\"music-off\":63322,\"nativescript\":63615,\"nature\":62350,\"nature-people\":62351,\"navigation\":62352,\"near-me\":62925,\"needle\":62353,\"nest-protect\":62354,\"nest-thermostat\":62355,\"netflix\":63301,\"network\":63218,\"new-box\":62356,\"newspaper\":62357,\"nfc\":62358,\"nfc-tap\":62359,\"nfc-variant\":62360,\"ninja\":63347,\"nintendo-switch\":63456,\"nodejs\":62361,\"note\":62362,\"note-multiple\":63159,\"note-multiple-outline\":63160,\"note-outline\":62363,\"note-plus\":62364,\"note-plus-outline\":62365,\"note-text\":62366,\"notebook\":63533,\"notification-clear-all\":62367,\"npm\":63222,\"nuke\":63139,\"null\":63457,\"numeric\":62368,\"numeric-0-box\":62369,\"numeric-0-box-multiple-outline\":62370,\"numeric-0-box-outline\":62371,\"numeric-1-box\":62372,\"numeric-1-box-multiple-outline\":62373,\"numeric-1-box-outline\":62374,\"numeric-2-box\":62375,\"numeric-2-box-multiple-outline\":62376,\"numeric-2-box-outline\":62377,\"numeric-3-box\":62378,\"numeric-3-box-multiple-outline\":62379,\"numeric-3-box-outline\":62380,\"numeric-4-box\":62381,\"numeric-4-box-multiple-outline\":62382,\"numeric-4-box-outline\":62383,\"numeric-5-box\":62384,\"numeric-5-box-multiple-outline\":62385,\"numeric-5-box-outline\":62386,\"numeric-6-box\":62387,\"numeric-6-box-multiple-outline\":62388,\"numeric-6-box-outline\":62389,\"numeric-7-box\":62390,\"numeric-7-box-multiple-outline\":62391,\"numeric-7-box-outline\":62392,\"numeric-8-box\":62393,\"numeric-8-box-multiple-outline\":62394,\"numeric-8-box-outline\":62395,\"numeric-9-box\":62396,\"numeric-9-box-multiple-outline\":62397,\"numeric-9-box-outline\":62398,\"numeric-9-plus-box\":62399,\"numeric-9-plus-box-multiple-outline\":62400,\"numeric-9-plus-box-outline\":62401,\"nut\":63223,\"nutrition\":62402,\"oar\":63099,\"octagon\":62403,\"octagon-outline\":62404,\"octagram\":63224,\"octagram-outline\":63348,\"odnoklassniki\":62405,\"office\":62406,\"oil\":62407,\"oil-temperature\":62408,\"omega\":62409,\"onedrive\":62410,\"onenote\":63302,\"onepassword\":63616,\"opacity\":62924,\"open-in-app\":62411,\"open-in-new\":62412,\"openid\":62413,\"opera\":62414,\"orbit\":61464,\"ornament\":62415,\"ornament-variant\":62416,\"owl\":62418,\"package\":62419,\"package-down\":62420,\"package-up\":62421,\"package-variant\":62422,\"package-variant-closed\":62423,\"page-first\":62976,\"page-last\":62977,\"page-layout-body\":63225,\"page-layout-footer\":63226,\"page-layout-header\":63227,\"page-layout-sidebar-left\":63228,\"page-layout-sidebar-right\":63229,\"palette\":62424,\"palette-advanced\":62425,\"palette-swatch\":63668,\"panda\":62426,\"pandora\":62427,\"panorama\":62428,\"panorama-fisheye\":62429,\"panorama-horizontal\":62430,\"panorama-vertical\":62431,\"panorama-wide-angle\":62432,\"paper-cut-vertical\":62433,\"paperclip\":62434,\"parking\":62435,\"passport\":63458,\"patreon\":63617,\"pause\":62436,\"pause-circle\":62437,\"pause-circle-outline\":62438,\"pause-octagon\":62439,\"pause-octagon-outline\":62440,\"paw\":62441,\"paw-off\":63063,\"paypal\":63618,\"peace\":63619,\"pen\":62442,\"pencil\":62443,\"pencil-box\":62444,\"pencil-box-outline\":62445,\"pencil-circle\":63230,\"pencil-circle-outline\":63349,\"pencil-lock\":62446,\"pencil-off\":62447,\"pentagon\":63231,\"pentagon-outline\":63232,\"percent\":62448,\"periodic-table\":63669,\"periodic-table-co2\":63459,\"periscope\":63303,\"pharmacy\":62449,\"phone\":62450,\"phone-bluetooth\":62451,\"phone-classic\":62978,\"phone-forward\":62452,\"phone-hangup\":62453,\"phone-in-talk\":62454,\"phone-incoming\":62455,\"phone-locked\":62456,\"phone-log\":62457,\"phone-minus\":63064,\"phone-missed\":62458,\"phone-outgoing\":62459,\"phone-paused\":62460,\"phone-plus\":63065,\"phone-return\":63534,\"phone-rotate-landscape\":63620,\"phone-rotate-portrait\":63621,\"phone-settings\":62461,\"phone-voip\":62462,\"pi\":62463,\"pi-box\":62464,\"piano\":63100,\"pickaxe\":63670,\"pier\":63622,\"pier-crane\":63623,\"pig\":62465,\"pill\":62466,\"pillar\":63233,\"pin\":62467,\"pin-off\":62468,\"pine-tree\":62469,\"pine-tree-box\":62470,\"pinterest\":62471,\"pinterest-box\":62472,\"pipe\":63460,\"pipe-disconnected\":63461,\"pipe-leak\":63624,\"pistol\":63234,\"piston\":63625,\"pizza\":62473,\"plane-shield\":63162,\"play\":62474,\"play-box-outline\":62475,\"play-circle\":62476,\"play-circle-outline\":62477,\"play-network\":63626,\"play-pause\":62478,\"play-protected-content\":62479,\"playlist-check\":62919,\"playlist-minus\":62480,\"playlist-play\":62481,\"playlist-plus\":62482,\"playlist-remove\":62483,\"playstation\":62484,\"plex\":63161,\"plus\":62485,\"plus-box\":62486,\"plus-box-outline\":63235,\"plus-circle\":62487,\"plus-circle-multiple-outline\":62488,\"plus-circle-outline\":62489,\"plus-network\":62490,\"plus-one\":62491,\"plus-outline\":63236,\"pocket\":62492,\"pokeball\":62493,\"poker-chip\":63535,\"polaroid\":62494,\"poll\":62495,\"poll-box\":62496,\"polymer\":62497,\"pool\":62982,\"popcorn\":62498,\"pot\":63066,\"pot-mix\":63067,\"pound\":62499,\"pound-box\":62500,\"power\":62501,\"power-plug\":63140,\"power-plug-off\":63141,\"power-settings\":62502,\"power-socket\":62503,\"power-socket-eu\":63462,\"power-socket-uk\":63463,\"power-socket-us\":63464,\"prescription\":63237,\"presentation\":62504,\"presentation-play\":62505,\"printer\":62506,\"printer-3d\":62507,\"printer-alert\":62508,\"printer-settings\":63238,\"priority-high\":62979,\"priority-low\":62980,\"professional-hexagon\":62509,\"projector\":62510,\"projector-screen\":62511,\"publish\":63142,\"pulse\":62512,\"puzzle\":62513,\"qqchat\":62981,\"qrcode\":62514,\"qrcode-edit\":63671,\"qrcode-scan\":62515,\"quadcopter\":62516,\"quality-high\":62517,\"quicktime\":62518,\"radar\":62519,\"radiator\":62520,\"radio\":62521,\"radio-handheld\":62522,\"radio-tower\":62523,\"radioactive\":62524,\"radiobox-blank\":62525,\"radiobox-marked\":62526,\"raspberrypi\":62527,\"ray-end\":62528,\"ray-end-arrow\":62529,\"ray-start\":62530,\"ray-start-arrow\":62531,\"ray-start-end\":62532,\"ray-vertex\":62533,\"react\":63239,\"read\":62535,\"receipt\":62537,\"record\":62538,\"record-rec\":62539,\"recycle\":62540,\"reddit\":62541,\"redo\":62542,\"redo-variant\":62543,\"refresh\":62544,\"regex\":62545,\"relative-scale\":62546,\"reload\":62547,\"reminder\":63627,\"remote\":62548,\"remote-desktop\":63672,\"rename-box\":62549,\"reorder-horizontal\":63111,\"reorder-vertical\":63112,\"repeat\":62550,\"repeat-off\":62551,\"repeat-once\":62552,\"replay\":62553,\"reply\":62554,\"reply-all\":62555,\"reproduction\":62556,\"resize-bottom-right\":62557,\"responsive\":62558,\"restart\":63240,\"restore\":63143,\"rewind\":62559,\"rewind-outline\":63241,\"rhombus\":63242,\"rhombus-outline\":63243,\"ribbon\":62560,\"rice\":63465,\"ring\":63466,\"road\":62561,\"road-variant\":62562,\"robot\":63144,\"rocket\":62563,\"room-service\":63628,\"roomba\":63244,\"rotate-3d\":62564,\"rotate-left\":62565,\"rotate-left-variant\":62566,\"rotate-right\":62567,\"rotate-right-variant\":62568,\"rounded-corner\":62983,\"router-wireless\":62569,\"routes\":62570,\"rowing\":62984,\"rss\":62571,\"rss-box\":62572,\"ruler\":62573,\"run\":63245,\"run-fast\":62574,\"sale\":62575,\"salesforce\":63629,\"sass\":63467,\"satellite\":62576,\"satellite-variant\":62577,\"sausage\":63673,\"saxophone\":62985,\"scale\":62578,\"scale-balance\":62929,\"scale-bathroom\":62579,\"scanner\":63146,\"school\":62580,\"screen-rotation\":62581,\"screen-rotation-lock\":62582,\"screwdriver\":62583,\"script\":62584,\"sd\":62585,\"seal\":62586,\"search-web\":63246,\"seat-flat\":62587,\"seat-flat-angled\":62588,\"seat-individual-suite\":62589,\"seat-legroom-extra\":62590,\"seat-legroom-normal\":62591,\"seat-legroom-reduced\":62592,\"seat-recline-extra\":62593,\"seat-recline-normal\":62594,\"security\":62595,\"security-account\":63630,\"security-home\":63113,\"security-network\":62596,\"select\":62597,\"select-all\":62598,\"select-inverse\":62599,\"select-off\":62600,\"selection\":62601,\"selection-off\":63350,\"send\":62602,\"send-secure\":63468,\"serial-port\":63068,\"server\":62603,\"server-minus\":62604,\"server-network\":62605,\"server-network-off\":62606,\"server-off\":62607,\"server-plus\":62608,\"server-remove\":62609,\"server-security\":62610,\"set-all\":63351,\"set-center\":63352,\"set-center-right\":63353,\"set-left\":63354,\"set-left-center\":63355,\"set-left-right\":63356,\"set-none\":63357,\"set-right\":63358,\"settings\":62611,\"settings-box\":62612,\"settings-outline\":63674,\"shape\":63536,\"shape-circle-plus\":63069,\"shape-outline\":63537,\"shape-plus\":62613,\"shape-polygon-plus\":63070,\"shape-rectangle-plus\":63071,\"shape-square-plus\":63072,\"share\":62614,\"share-variant\":62615,\"shield\":62616,\"shield-half-full\":63359,\"shield-outline\":62617,\"ship-wheel\":63538,\"shopping\":62618,\"shopping-music\":62619,\"shovel\":63247,\"shovel-off\":63248,\"shredder\":62620,\"shuffle\":62621,\"shuffle-disabled\":62622,\"shuffle-variant\":62623,\"sigma\":62624,\"sigma-lower\":63019,\"sign-caution\":62625,\"sign-direction\":63360,\"sign-text\":63361,\"signal\":62626,\"signal-2g\":63249,\"signal-3g\":63250,\"signal-4g\":63251,\"signal-cellular-1\":63675,\"signal-cellular-2\":63676,\"signal-cellular-3\":63677,\"signal-cellular-outline\":63678,\"signal-hspa\":63252,\"signal-hspa-plus\":63253,\"signal-off\":63362,\"signal-variant\":62986,\"silverware\":62627,\"silverware-fork\":62628,\"silverware-spoon\":62629,\"silverware-variant\":62630,\"sim\":62631,\"sim-alert\":62632,\"sim-off\":62633,\"sitemap\":62634,\"skip-backward\":62635,\"skip-forward\":62636,\"skip-next\":62637,\"skip-next-circle\":63073,\"skip-next-circle-outline\":63074,\"skip-previous\":62638,\"skip-previous-circle\":63075,\"skip-previous-circle-outline\":63076,\"skull\":63115,\"skype\":62639,\"skype-business\":62640,\"slack\":62641,\"sleep\":62642,\"sleep-off\":62643,\"smoking\":62644,\"smoking-off\":62645,\"snapchat\":62646,\"snowflake\":63254,\"snowman\":62647,\"soccer\":62648,\"soccer-field\":63539,\"sofa\":62649,\"solid\":63116,\"sort\":62650,\"sort-alphabetical\":62651,\"sort-ascending\":62652,\"sort-descending\":62653,\"sort-numeric\":62654,\"sort-variant\":62655,\"soundcloud\":62656,\"source-branch\":63020,\"source-commit\":63255,\"source-commit-end\":63256,\"source-commit-end-local\":63257,\"source-commit-local\":63258,\"source-commit-next-local\":63259,\"source-commit-start\":63260,\"source-commit-start-next-local\":63261,\"source-fork\":62657,\"source-merge\":63021,\"source-pull\":62658,\"soy-sauce\":63469,\"speaker\":62659,\"speaker-off\":62660,\"speaker-wireless\":63262,\"speedometer\":62661,\"spellcheck\":62662,\"spotify\":62663,\"spotlight\":62664,\"spotlight-beam\":62665,\"spray\":63077,\"square\":63331,\"square-inc\":62666,\"square-inc-cash\":62667,\"square-outline\":63330,\"square-root\":63363,\"ssh\":63679,\"stack-overflow\":62668,\"stackexchange\":62987,\"stadium\":63263,\"stairs\":62669,\"standard-definition\":63470,\"star\":62670,\"star-circle\":62671,\"star-half\":62672,\"star-off\":62673,\"star-outline\":62674,\"steam\":62675,\"steering\":62676,\"step-backward\":62677,\"step-backward-2\":62678,\"step-forward\":62679,\"step-forward-2\":62680,\"stethoscope\":62681,\"sticker\":62928,\"sticker-emoji\":63364,\"stocking\":62682,\"stop\":62683,\"stop-circle\":63078,\"stop-circle-outline\":63079,\"store\":62684,\"store-24-hour\":62685,\"stove\":62686,\"subdirectory-arrow-left\":62988,\"subdirectory-arrow-right\":62989,\"subway\":63147,\"subway-variant\":62687,\"summit\":63365,\"sunglasses\":62688,\"surround-sound\":62917,\"surround-sound-2-0\":63471,\"surround-sound-3-1\":63472,\"surround-sound-5-1\":63473,\"surround-sound-7-1\":63474,\"svg\":63264,\"swap-horizontal\":62689,\"swap-horizontal-variant\":63680,\"swap-vertical\":62690,\"swap-vertical-variant\":63681,\"swim\":62691,\"switch\":62692,\"sword\":62693,\"sword-cross\":63366,\"sync\":62694,\"sync-alert\":62695,\"sync-off\":62696,\"tab\":62697,\"tab-plus\":63323,\"tab-unselected\":62698,\"table\":62699,\"table-column\":63540,\"table-column-plus-after\":62700,\"table-column-plus-before\":62701,\"table-column-remove\":62702,\"table-column-width\":62703,\"table-edit\":62704,\"table-large\":62705,\"table-of-contents\":63541,\"table-row\":63542,\"table-row-height\":62706,\"table-row-plus-after\":62707,\"table-row-plus-before\":62708,\"table-row-remove\":62709,\"table-settings\":63543,\"tablet\":62710,\"tablet-android\":62711,\"tablet-ipad\":62712,\"taco\":63329,\"tag\":62713,\"tag-faces\":62714,\"tag-heart\":63114,\"tag-multiple\":62715,\"tag-outline\":62716,\"tag-plus\":63265,\"tag-remove\":63266,\"tag-text-outline\":62717,\"target\":62718,\"taxi\":62719,\"teach\":63631,\"teamviewer\":62720,\"telegram\":62721,\"television\":62722,\"television-box\":63544,\"television-classic\":63475,\"television-classic-off\":63545,\"television-guide\":62723,\"television-off\":63546,\"temperature-celsius\":62724,\"temperature-fahrenheit\":62725,\"temperature-kelvin\":62726,\"tennis\":62727,\"tent\":62728,\"terrain\":62729,\"test-tube\":63080,\"text-shadow\":63081,\"text-to-speech\":62730,\"text-to-speech-off\":62731,\"textbox\":62990,\"textbox-password\":63476,\"texture\":62732,\"theater\":62733,\"theme-light-dark\":62734,\"thermometer\":62735,\"thermometer-lines\":62736,\"thermostat-box\":63632,\"thought-bubble\":63477,\"thought-bubble-outline\":63478,\"thumb-down\":62737,\"thumb-down-outline\":62738,\"thumb-up\":62739,\"thumb-up-outline\":62740,\"thumbs-up-down\":62741,\"ticket\":62742,\"ticket-account\":62743,\"ticket-confirmation\":62744,\"ticket-percent\":63267,\"tie\":62745,\"tilde\":63268,\"timelapse\":62746,\"timer\":62747,\"timer-10\":62748,\"timer-3\":62749,\"timer-off\":62750,\"timer-sand\":62751,\"timer-sand-empty\":63148,\"timer-sand-full\":63371,\"timetable\":62752,\"toggle-switch\":62753,\"toggle-switch-off\":62754,\"tooltip\":62755,\"tooltip-edit\":62756,\"tooltip-image\":62757,\"tooltip-outline\":62758,\"tooltip-outline-plus\":62759,\"tooltip-text\":62760,\"tooth\":63682,\"tooth-outline\":62761,\"tor\":62762,\"tower-beach\":63104,\"tower-fire\":63105,\"towing\":63547,\"trackpad\":63479,\"tractor\":63633,\"traffic-light\":62763,\"train\":62764,\"train-variant\":63683,\"tram\":62765,\"transcribe\":62766,\"transcribe-close\":62767,\"transfer\":62768,\"transit-transfer\":63149,\"translate\":62922,\"treasure-chest\":63269,\"tree\":62769,\"trello\":62770,\"trending-down\":62771,\"trending-neutral\":62772,\"trending-up\":62773,\"triangle\":62774,\"triangle-outline\":62775,\"trophy\":62776,\"trophy-award\":62777,\"trophy-outline\":62778,\"trophy-variant\":62779,\"trophy-variant-outline\":62780,\"truck\":62781,\"truck-delivery\":62782,\"truck-fast\":63367,\"truck-trailer\":63270,\"tshirt-crew\":62783,\"tshirt-v\":62784,\"tumblr\":62785,\"tumblr-reblog\":62786,\"tune\":63022,\"tune-vertical\":63082,\"twitch\":62787,\"twitter\":62788,\"twitter-box\":62789,\"twitter-circle\":62790,\"twitter-retweet\":62791,\"uber\":63304,\"ubuntu\":62792,\"ultra-high-definition\":63480,\"umbraco\":62793,\"umbrella\":62794,\"umbrella-outline\":62795,\"undo\":62796,\"undo-variant\":62797,\"unfold-less-horizontal\":62798,\"unfold-less-vertical\":63327,\"unfold-more-horizontal\":62799,\"unfold-more-vertical\":63328,\"ungroup\":62800,\"unity\":63150,\"untappd\":62801,\"update\":63151,\"upload\":62802,\"upload-multiple\":63548,\"upload-network\":63221,\"usb\":62803,\"van-passenger\":63481,\"van-utility\":63482,\"vanish\":63483,\"vector-arrange-above\":62804,\"vector-arrange-below\":62805,\"vector-circle\":62806,\"vector-circle-variant\":62807,\"vector-combine\":62808,\"vector-curve\":62809,\"vector-difference\":62810,\"vector-difference-ab\":62811,\"vector-difference-ba\":62812,\"vector-ellipse\":63634,\"vector-intersection\":62813,\"vector-line\":62814,\"vector-point\":62815,\"vector-polygon\":62816,\"vector-polyline\":62817,\"vector-radius\":63305,\"vector-rectangle\":62918,\"vector-selection\":62818,\"vector-square\":61441,\"vector-triangle\":62819,\"vector-union\":62820,\"venmo\":62840,\"verified\":62821,\"vibrate\":62822,\"video\":62823,\"video-3d\":63484,\"video-4k-box\":63549,\"video-input-antenna\":63550,\"video-input-component\":63551,\"video-input-hdmi\":63552,\"video-input-svideo\":63553,\"video-off\":62824,\"video-switch\":62825,\"view-agenda\":62826,\"view-array\":62827,\"view-carousel\":62828,\"view-column\":62829,\"view-dashboard\":62830,\"view-dashboard-variant\":63554,\"view-day\":62831,\"view-grid\":62832,\"view-headline\":62833,\"view-list\":62834,\"view-module\":62835,\"view-parallel\":63271,\"view-quilt\":62836,\"view-sequential\":63272,\"view-stream\":62837,\"view-week\":62838,\"vimeo\":62839,\"violin\":62991,\"virtual-reality\":63635,\"visualstudio\":62992,\"vk\":62841,\"vk-box\":62842,\"vk-circle\":62843,\"vlc\":62844,\"voice\":62923,\"voicemail\":62845,\"volume-high\":62846,\"volume-low\":62847,\"volume-medium\":62848,\"volume-minus\":63325,\"volume-mute\":63326,\"volume-off\":62849,\"volume-plus\":63324,\"vpn\":62850,\"vuejs\":63555,\"walk\":62851,\"wall\":63485,\"wallet\":62852,\"wallet-giftcard\":62853,\"wallet-membership\":62854,\"wallet-travel\":62855,\"wan\":62856,\"washing-machine\":63273,\"watch\":62857,\"watch-export\":62858,\"watch-export-variant\":63636,\"watch-import\":62859,\"watch-import-variant\":63637,\"watch-variant\":63638,\"watch-vibrate\":63152,\"water\":62860,\"water-off\":62861,\"water-percent\":62862,\"water-pump\":62863,\"watermark\":62994,\"waves\":63372,\"weather-cloudy\":62864,\"weather-fog\":62865,\"weather-hail\":62866,\"weather-hurricane\":63639,\"weather-lightning\":62867,\"weather-lightning-rainy\":63101,\"weather-night\":62868,\"weather-partlycloudy\":62869,\"weather-pouring\":62870,\"weather-rainy\":62871,\"weather-snowy\":62872,\"weather-snowy-rainy\":63102,\"weather-sunny\":62873,\"weather-sunset\":62874,\"weather-sunset-down\":62875,\"weather-sunset-up\":62876,\"weather-windy\":62877,\"weather-windy-variant\":62878,\"web\":62879,\"webcam\":62880,\"webhook\":63023,\"webpack\":63274,\"wechat\":62993,\"weight\":62881,\"weight-kilogram\":62882,\"whatsapp\":62883,\"wheelchair-accessibility\":62884,\"white-balance-auto\":62885,\"white-balance-incandescent\":62886,\"white-balance-iridescent\":62887,\"white-balance-sunny\":62888,\"widgets\":63275,\"wifi\":62889,\"wifi-off\":62890,\"wii\":62891,\"wiiu\":63276,\"wikipedia\":62892,\"window-close\":62893,\"window-closed\":62894,\"window-maximize\":62895,\"window-minimize\":62896,\"window-open\":62897,\"window-restore\":62898,\"windows\":62899,\"wordpress\":62900,\"worker\":62901,\"wrap\":62902,\"wrench\":62903,\"wunderlist\":62904,\"xamarin\":63556,\"xamarin-outline\":63557,\"xaml\":63091,\"xbox\":62905,\"xbox-controller\":62906,\"xbox-controller-battery-alert\":63306,\"xbox-controller-battery-empty\":63307,\"xbox-controller-battery-full\":63308,\"xbox-controller-battery-low\":63309,\"xbox-controller-battery-medium\":63310,\"xbox-controller-battery-unknown\":63311,\"xbox-controller-off\":62907,\"xda\":62908,\"xing\":62909,\"xing-box\":62910,\"xing-circle\":62911,\"xml\":62912,\"xmpp\":63486,\"yammer\":63368,\"yeast\":62913,\"yelp\":62914,\"yin-yang\":63103,\"youtube-creator-studio\":63558,\"youtube-gaming\":63559,\"youtube-play\":62915,\"youtube-tv\":62536,\"zip-box\":62916,\"blank\":63116}");

/***/ }),

/***/ "../../../node_modules/react-native-vector-icons/glyphmaps/MaterialIcons.json":
/*!*************************************************************************************************************************************!*\
  !*** /Users/diego.antonelli/Desktop/projects/widgets-resources/node_modules/react-native-vector-icons/glyphmaps/MaterialIcons.json ***!
  \*************************************************************************************************************************************/
/*! exports provided: 3d-rotation, ac-unit, access-alarm, access-alarms, access-time, accessibility, accessible, account-balance, account-balance-wallet, account-box, account-circle, adb, add, add-a-photo, add-alarm, add-alert, add-box, add-circle, add-circle-outline, add-location, add-shopping-cart, add-to-photos, add-to-queue, adjust, airline-seat-flat, airline-seat-flat-angled, airline-seat-individual-suite, airline-seat-legroom-extra, airline-seat-legroom-normal, airline-seat-legroom-reduced, airline-seat-recline-extra, airline-seat-recline-normal, airplanemode-active, airplanemode-inactive, airplay, airport-shuttle, alarm, alarm-add, alarm-off, alarm-on, album, all-inclusive, all-out, android, announcement, apps, archive, arrow-back, arrow-downward, arrow-drop-down, arrow-drop-down-circle, arrow-drop-up, arrow-forward, arrow-upward, art-track, aspect-ratio, assessment, assignment, assignment-ind, assignment-late, assignment-return, assignment-returned, assignment-turned-in, assistant, assistant-photo, attach-file, attach-money, attachment, audiotrack, autorenew, av-timer, backspace, backup, battery-alert, battery-charging-full, battery-full, battery-std, battery-unknown, beach-access, beenhere, block, bluetooth, bluetooth-audio, bluetooth-connected, bluetooth-disabled, bluetooth-searching, blur-circular, blur-linear, blur-off, blur-on, book, bookmark, bookmark-border, border-all, border-bottom, border-clear, border-color, border-horizontal, border-inner, border-left, border-outer, border-right, border-style, border-top, border-vertical, branding-watermark, brightness-1, brightness-2, brightness-3, brightness-4, brightness-5, brightness-6, brightness-7, brightness-auto, brightness-high, brightness-low, brightness-medium, broken-image, brush, bubble-chart, bug-report, build, burst-mode, business, business-center, cached, cake, call, call-end, call-made, call-merge, call-missed, call-missed-outgoing, call-received, call-split, call-to-action, camera, camera-alt, camera-enhance, camera-front, camera-rear, camera-roll, cancel, card-giftcard, card-membership, card-travel, casino, cast, cast-connected, center-focus-strong, center-focus-weak, change-history, chat, chat-bubble, chat-bubble-outline, check, check-box, check-box-outline-blank, check-circle, chevron-left, chevron-right, child-care, child-friendly, chrome-reader-mode, class, clear, clear-all, close, closed-caption, cloud, cloud-circle, cloud-done, cloud-download, cloud-off, cloud-queue, cloud-upload, code, collections, collections-bookmark, color-lens, colorize, comment, compare, compare-arrows, computer, confirmation-number, contact-mail, contact-phone, contacts, content-copy, content-cut, content-paste, control-point, control-point-duplicate, copyright, create, create-new-folder, credit-card, crop, crop-16-9, crop-3-2, crop-5-4, crop-7-5, crop-din, crop-free, crop-landscape, crop-original, crop-portrait, crop-rotate, crop-square, dashboard, data-usage, date-range, dehaze, delete, delete-forever, delete-sweep, description, desktop-mac, desktop-windows, details, developer-board, developer-mode, device-hub, devices, devices-other, dialer-sip, dialpad, directions, directions-bike, directions-boat, directions-bus, directions-car, directions-railway, directions-run, directions-subway, directions-transit, directions-walk, disc-full, dns, do-not-disturb, do-not-disturb-alt, do-not-disturb-off, do-not-disturb-on, dock, domain, done, done-all, donut-large, donut-small, drafts, drag-handle, drive-eta, dvr, edit, edit-location, eject, email, enhanced-encryption, equalizer, error, error-outline, euro-symbol, ev-station, event, event-available, event-busy, event-note, event-seat, exit-to-app, expand-less, expand-more, explicit, explore, exposure, exposure-neg-1, exposure-neg-2, exposure-plus-1, exposure-plus-2, exposure-zero, extension, face, fast-forward, fast-rewind, favorite, favorite-border, featured-play-list, featured-video, feedback, fiber-dvr, fiber-manual-record, fiber-new, fiber-pin, fiber-smart-record, file-download, file-upload, filter, filter-1, filter-2, filter-3, filter-4, filter-5, filter-6, filter-7, filter-8, filter-9, filter-9-plus, filter-b-and-w, filter-center-focus, filter-drama, filter-frames, filter-hdr, filter-list, filter-none, filter-tilt-shift, filter-vintage, find-in-page, find-replace, fingerprint, first-page, fitness-center, flag, flare, flash-auto, flash-off, flash-on, flight, flight-land, flight-takeoff, flip, flip-to-back, flip-to-front, folder, folder-open, folder-shared, folder-special, font-download, format-align-center, format-align-justify, format-align-left, format-align-right, format-bold, format-clear, format-color-fill, format-color-reset, format-color-text, format-indent-decrease, format-indent-increase, format-italic, format-line-spacing, format-list-bulleted, format-list-numbered, format-paint, format-quote, format-shapes, format-size, format-strikethrough, format-textdirection-l-to-r, format-textdirection-r-to-l, format-underlined, forum, forward, forward-10, forward-30, forward-5, free-breakfast, fullscreen, fullscreen-exit, functions, g-translate, gamepad, games, gavel, gesture, get-app, gif, golf-course, gps-fixed, gps-not-fixed, gps-off, grade, gradient, grain, graphic-eq, grid-off, grid-on, group, group-add, group-work, hd, hdr-off, hdr-on, hdr-strong, hdr-weak, headset, headset-mic, healing, hearing, help, help-outline, high-quality, highlight, highlight-off, history, home, hot-tub, hotel, hourglass-empty, hourglass-full, http, https, image, image-aspect-ratio, import-contacts, import-export, important-devices, inbox, indeterminate-check-box, info, info-outline, input, insert-chart, insert-comment, insert-drive-file, insert-emoticon, insert-invitation, insert-link, insert-photo, invert-colors, invert-colors-off, iso, keyboard, keyboard-arrow-down, keyboard-arrow-left, keyboard-arrow-right, keyboard-arrow-up, keyboard-backspace, keyboard-capslock, keyboard-hide, keyboard-return, keyboard-tab, keyboard-voice, kitchen, label, label-outline, landscape, language, laptop, laptop-chromebook, laptop-mac, laptop-windows, last-page, launch, layers, layers-clear, leak-add, leak-remove, lens, library-add, library-books, library-music, lightbulb-outline, line-style, line-weight, linear-scale, link, linked-camera, list, live-help, live-tv, local-activity, local-airport, local-atm, local-bar, local-cafe, local-car-wash, local-convenience-store, local-dining, local-drink, local-florist, local-gas-station, local-grocery-store, local-hospital, local-hotel, local-laundry-service, local-library, local-mall, local-movies, local-offer, local-parking, local-pharmacy, local-phone, local-pizza, local-play, local-post-office, local-printshop, local-see, local-shipping, local-taxi, location-city, location-disabled, location-off, location-on, location-searching, lock, lock-open, lock-outline, looks, looks-3, looks-4, looks-5, looks-6, looks-one, looks-two, loop, loupe, low-priority, loyalty, mail, mail-outline, map, markunread, markunread-mailbox, memory, menu, merge-type, message, mic, mic-none, mic-off, mms, mode-comment, mode-edit, monetization-on, money-off, monochrome-photos, mood, mood-bad, more, more-horiz, more-vert, motorcycle, mouse, move-to-inbox, movie, movie-creation, movie-filter, multiline-chart, music-note, music-video, my-location, nature, nature-people, navigate-before, navigate-next, navigation, near-me, network-cell, network-check, network-locked, network-wifi, new-releases, next-week, nfc, no-encryption, no-sim, not-interested, note, note-add, notifications, notifications-active, notifications-none, notifications-off, notifications-paused, offline-pin, ondemand-video, opacity, open-in-browser, open-in-new, open-with, pages, pageview, palette, pan-tool, panorama, panorama-fish-eye, panorama-horizontal, panorama-vertical, panorama-wide-angle, party-mode, pause, pause-circle-filled, pause-circle-outline, payment, people, people-outline, perm-camera-mic, perm-contact-calendar, perm-data-setting, perm-device-information, perm-identity, perm-media, perm-phone-msg, perm-scan-wifi, person, person-add, person-outline, person-pin, person-pin-circle, personal-video, pets, phone, phone-android, phone-bluetooth-speaker, phone-forwarded, phone-in-talk, phone-iphone, phone-locked, phone-missed, phone-paused, phonelink, phonelink-erase, phonelink-lock, phonelink-off, phonelink-ring, phonelink-setup, photo, photo-album, photo-camera, photo-filter, photo-library, photo-size-select-actual, photo-size-select-large, photo-size-select-small, picture-as-pdf, picture-in-picture, picture-in-picture-alt, pie-chart, pie-chart-outlined, pin-drop, place, play-arrow, play-circle-filled, play-circle-outline, play-for-work, playlist-add, playlist-add-check, playlist-play, plus-one, poll, polymer, pool, portable-wifi-off, portrait, power, power-input, power-settings-new, pregnant-woman, present-to-all, print, priority-high, public, publish, query-builder, question-answer, queue, queue-music, queue-play-next, radio, radio-button-checked, radio-button-unchecked, rate-review, receipt, recent-actors, record-voice-over, redeem, redo, refresh, remove, remove-circle, remove-circle-outline, remove-from-queue, remove-red-eye, remove-shopping-cart, reorder, repeat, repeat-one, replay, replay-10, replay-30, replay-5, reply, reply-all, report, report-problem, restaurant, restaurant-menu, restore, restore-page, ring-volume, room, room-service, rotate-90-degrees-ccw, rotate-left, rotate-right, rounded-corner, router, rowing, rss-feed, rv-hookup, satellite, save, scanner, schedule, school, screen-lock-landscape, screen-lock-portrait, screen-lock-rotation, screen-rotation, screen-share, sd-card, sd-storage, search, security, select-all, send, sentiment-dissatisfied, sentiment-neutral, sentiment-satisfied, sentiment-very-dissatisfied, sentiment-very-satisfied, settings, settings-applications, settings-backup-restore, settings-bluetooth, settings-brightness, settings-cell, settings-ethernet, settings-input-antenna, settings-input-component, settings-input-composite, settings-input-hdmi, settings-input-svideo, settings-overscan, settings-phone, settings-power, settings-remote, settings-system-daydream, settings-voice, share, shop, shop-two, shopping-basket, shopping-cart, short-text, show-chart, shuffle, signal-cellular-4-bar, signal-cellular-connected-no-internet-4-bar, signal-cellular-no-sim, signal-cellular-null, signal-cellular-off, signal-wifi-4-bar, signal-wifi-4-bar-lock, signal-wifi-off, sim-card, sim-card-alert, skip-next, skip-previous, slideshow, slow-motion-video, smartphone, smoke-free, smoking-rooms, sms, sms-failed, snooze, sort, sort-by-alpha, spa, space-bar, speaker, speaker-group, speaker-notes, speaker-notes-off, speaker-phone, spellcheck, star, star-border, star-half, stars, stay-current-landscape, stay-current-portrait, stay-primary-landscape, stay-primary-portrait, stop, stop-screen-share, storage, store, store-mall-directory, straighten, streetview, strikethrough-s, style, subdirectory-arrow-left, subdirectory-arrow-right, subject, subscriptions, subtitles, subway, supervisor-account, surround-sound, swap-calls, swap-horiz, swap-vert, swap-vertical-circle, switch-camera, switch-video, sync, sync-disabled, sync-problem, system-update, system-update-alt, tab, tab-unselected, tablet, tablet-android, tablet-mac, tag-faces, tap-and-play, terrain, text-fields, text-format, textsms, texture, theaters, thumb-down, thumb-up, thumbs-up-down, time-to-leave, timelapse, timeline, timer, timer-10, timer-3, timer-off, title, toc, today, toll, tonality, touch-app, toys, track-changes, traffic, train, tram, transfer-within-a-station, transform, translate, trending-down, trending-flat, trending-up, tune, turned-in, turned-in-not, tv, unarchive, undo, unfold-less, unfold-more, update, usb, verified-user, vertical-align-bottom, vertical-align-center, vertical-align-top, vibration, video-call, video-label, video-library, videocam, videocam-off, videogame-asset, view-agenda, view-array, view-carousel, view-column, view-comfy, view-compact, view-day, view-headline, view-list, view-module, view-quilt, view-stream, view-week, vignette, visibility, visibility-off, voice-chat, voicemail, volume-down, volume-mute, volume-off, volume-up, vpn-key, vpn-lock, wallpaper, warning, watch, watch-later, wb-auto, wb-cloudy, wb-incandescent, wb-iridescent, wb-sunny, wc, web, web-asset, weekend, whatshot, widgets, wifi, wifi-lock, wifi-tethering, work, wrap-text, youtube-searched-for, zoom-in, zoom-out, zoom-out-map, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"3d-rotation\":59469,\"ac-unit\":60219,\"access-alarm\":57744,\"access-alarms\":57745,\"access-time\":57746,\"accessibility\":59470,\"accessible\":59668,\"account-balance\":59471,\"account-balance-wallet\":59472,\"account-box\":59473,\"account-circle\":59475,\"adb\":58894,\"add\":57669,\"add-a-photo\":58425,\"add-alarm\":57747,\"add-alert\":57347,\"add-box\":57670,\"add-circle\":57671,\"add-circle-outline\":57672,\"add-location\":58727,\"add-shopping-cart\":59476,\"add-to-photos\":58269,\"add-to-queue\":57436,\"adjust\":58270,\"airline-seat-flat\":58928,\"airline-seat-flat-angled\":58929,\"airline-seat-individual-suite\":58930,\"airline-seat-legroom-extra\":58931,\"airline-seat-legroom-normal\":58932,\"airline-seat-legroom-reduced\":58933,\"airline-seat-recline-extra\":58934,\"airline-seat-recline-normal\":58935,\"airplanemode-active\":57749,\"airplanemode-inactive\":57748,\"airplay\":57429,\"airport-shuttle\":60220,\"alarm\":59477,\"alarm-add\":59478,\"alarm-off\":59479,\"alarm-on\":59480,\"album\":57369,\"all-inclusive\":60221,\"all-out\":59659,\"android\":59481,\"announcement\":59482,\"apps\":58819,\"archive\":57673,\"arrow-back\":58820,\"arrow-downward\":58843,\"arrow-drop-down\":58821,\"arrow-drop-down-circle\":58822,\"arrow-drop-up\":58823,\"arrow-forward\":58824,\"arrow-upward\":58840,\"art-track\":57440,\"aspect-ratio\":59483,\"assessment\":59484,\"assignment\":59485,\"assignment-ind\":59486,\"assignment-late\":59487,\"assignment-return\":59488,\"assignment-returned\":59489,\"assignment-turned-in\":59490,\"assistant\":58271,\"assistant-photo\":58272,\"attach-file\":57894,\"attach-money\":57895,\"attachment\":58044,\"audiotrack\":58273,\"autorenew\":59491,\"av-timer\":57371,\"backspace\":57674,\"backup\":59492,\"battery-alert\":57756,\"battery-charging-full\":57763,\"battery-full\":57764,\"battery-std\":57765,\"battery-unknown\":57766,\"beach-access\":60222,\"beenhere\":58669,\"block\":57675,\"bluetooth\":57767,\"bluetooth-audio\":58895,\"bluetooth-connected\":57768,\"bluetooth-disabled\":57769,\"bluetooth-searching\":57770,\"blur-circular\":58274,\"blur-linear\":58275,\"blur-off\":58276,\"blur-on\":58277,\"book\":59493,\"bookmark\":59494,\"bookmark-border\":59495,\"border-all\":57896,\"border-bottom\":57897,\"border-clear\":57898,\"border-color\":57899,\"border-horizontal\":57900,\"border-inner\":57901,\"border-left\":57902,\"border-outer\":57903,\"border-right\":57904,\"border-style\":57905,\"border-top\":57906,\"border-vertical\":57907,\"branding-watermark\":57451,\"brightness-1\":58278,\"brightness-2\":58279,\"brightness-3\":58280,\"brightness-4\":58281,\"brightness-5\":58282,\"brightness-6\":58283,\"brightness-7\":58284,\"brightness-auto\":57771,\"brightness-high\":57772,\"brightness-low\":57773,\"brightness-medium\":57774,\"broken-image\":58285,\"brush\":58286,\"bubble-chart\":59101,\"bug-report\":59496,\"build\":59497,\"burst-mode\":58428,\"business\":57519,\"business-center\":60223,\"cached\":59498,\"cake\":59369,\"call\":57520,\"call-end\":57521,\"call-made\":57522,\"call-merge\":57523,\"call-missed\":57524,\"call-missed-outgoing\":57572,\"call-received\":57525,\"call-split\":57526,\"call-to-action\":57452,\"camera\":58287,\"camera-alt\":58288,\"camera-enhance\":59644,\"camera-front\":58289,\"camera-rear\":58290,\"camera-roll\":58291,\"cancel\":58825,\"card-giftcard\":59638,\"card-membership\":59639,\"card-travel\":59640,\"casino\":60224,\"cast\":58119,\"cast-connected\":58120,\"center-focus-strong\":58292,\"center-focus-weak\":58293,\"change-history\":59499,\"chat\":57527,\"chat-bubble\":57546,\"chat-bubble-outline\":57547,\"check\":58826,\"check-box\":59444,\"check-box-outline-blank\":59445,\"check-circle\":59500,\"chevron-left\":58827,\"chevron-right\":58828,\"child-care\":60225,\"child-friendly\":60226,\"chrome-reader-mode\":59501,\"class\":59502,\"clear\":57676,\"clear-all\":57528,\"close\":58829,\"closed-caption\":57372,\"cloud\":58045,\"cloud-circle\":58046,\"cloud-done\":58047,\"cloud-download\":58048,\"cloud-off\":58049,\"cloud-queue\":58050,\"cloud-upload\":58051,\"code\":59503,\"collections\":58294,\"collections-bookmark\":58417,\"color-lens\":58295,\"colorize\":58296,\"comment\":57529,\"compare\":58297,\"compare-arrows\":59669,\"computer\":58122,\"confirmation-number\":58936,\"contact-mail\":57552,\"contact-phone\":57551,\"contacts\":57530,\"content-copy\":57677,\"content-cut\":57678,\"content-paste\":57679,\"control-point\":58298,\"control-point-duplicate\":58299,\"copyright\":59660,\"create\":57680,\"create-new-folder\":58060,\"credit-card\":59504,\"crop\":58302,\"crop-16-9\":58300,\"crop-3-2\":58301,\"crop-5-4\":58303,\"crop-7-5\":58304,\"crop-din\":58305,\"crop-free\":58306,\"crop-landscape\":58307,\"crop-original\":58308,\"crop-portrait\":58309,\"crop-rotate\":58423,\"crop-square\":58310,\"dashboard\":59505,\"data-usage\":57775,\"date-range\":59670,\"dehaze\":58311,\"delete\":59506,\"delete-forever\":59691,\"delete-sweep\":57708,\"description\":59507,\"desktop-mac\":58123,\"desktop-windows\":58124,\"details\":58312,\"developer-board\":58125,\"developer-mode\":57776,\"device-hub\":58165,\"devices\":57777,\"devices-other\":58167,\"dialer-sip\":57531,\"dialpad\":57532,\"directions\":58670,\"directions-bike\":58671,\"directions-boat\":58674,\"directions-bus\":58672,\"directions-car\":58673,\"directions-railway\":58676,\"directions-run\":58726,\"directions-subway\":58675,\"directions-transit\":58677,\"directions-walk\":58678,\"disc-full\":58896,\"dns\":59509,\"do-not-disturb\":58898,\"do-not-disturb-alt\":58897,\"do-not-disturb-off\":58947,\"do-not-disturb-on\":58948,\"dock\":58126,\"domain\":59374,\"done\":59510,\"done-all\":59511,\"donut-large\":59671,\"donut-small\":59672,\"drafts\":57681,\"drag-handle\":57949,\"drive-eta\":58899,\"dvr\":57778,\"edit\":58313,\"edit-location\":58728,\"eject\":59643,\"email\":57534,\"enhanced-encryption\":58943,\"equalizer\":57373,\"error\":57344,\"error-outline\":57345,\"euro-symbol\":59686,\"ev-station\":58733,\"event\":59512,\"event-available\":58900,\"event-busy\":58901,\"event-note\":58902,\"event-seat\":59651,\"exit-to-app\":59513,\"expand-less\":58830,\"expand-more\":58831,\"explicit\":57374,\"explore\":59514,\"exposure\":58314,\"exposure-neg-1\":58315,\"exposure-neg-2\":58316,\"exposure-plus-1\":58317,\"exposure-plus-2\":58318,\"exposure-zero\":58319,\"extension\":59515,\"face\":59516,\"fast-forward\":57375,\"fast-rewind\":57376,\"favorite\":59517,\"favorite-border\":59518,\"featured-play-list\":57453,\"featured-video\":57454,\"feedback\":59519,\"fiber-dvr\":57437,\"fiber-manual-record\":57441,\"fiber-new\":57438,\"fiber-pin\":57450,\"fiber-smart-record\":57442,\"file-download\":58052,\"file-upload\":58054,\"filter\":58323,\"filter-1\":58320,\"filter-2\":58321,\"filter-3\":58322,\"filter-4\":58324,\"filter-5\":58325,\"filter-6\":58326,\"filter-7\":58327,\"filter-8\":58328,\"filter-9\":58329,\"filter-9-plus\":58330,\"filter-b-and-w\":58331,\"filter-center-focus\":58332,\"filter-drama\":58333,\"filter-frames\":58334,\"filter-hdr\":58335,\"filter-list\":57682,\"filter-none\":58336,\"filter-tilt-shift\":58338,\"filter-vintage\":58339,\"find-in-page\":59520,\"find-replace\":59521,\"fingerprint\":59661,\"first-page\":58844,\"fitness-center\":60227,\"flag\":57683,\"flare\":58340,\"flash-auto\":58341,\"flash-off\":58342,\"flash-on\":58343,\"flight\":58681,\"flight-land\":59652,\"flight-takeoff\":59653,\"flip\":58344,\"flip-to-back\":59522,\"flip-to-front\":59523,\"folder\":58055,\"folder-open\":58056,\"folder-shared\":58057,\"folder-special\":58903,\"font-download\":57703,\"format-align-center\":57908,\"format-align-justify\":57909,\"format-align-left\":57910,\"format-align-right\":57911,\"format-bold\":57912,\"format-clear\":57913,\"format-color-fill\":57914,\"format-color-reset\":57915,\"format-color-text\":57916,\"format-indent-decrease\":57917,\"format-indent-increase\":57918,\"format-italic\":57919,\"format-line-spacing\":57920,\"format-list-bulleted\":57921,\"format-list-numbered\":57922,\"format-paint\":57923,\"format-quote\":57924,\"format-shapes\":57950,\"format-size\":57925,\"format-strikethrough\":57926,\"format-textdirection-l-to-r\":57927,\"format-textdirection-r-to-l\":57928,\"format-underlined\":57929,\"forum\":57535,\"forward\":57684,\"forward-10\":57430,\"forward-30\":57431,\"forward-5\":57432,\"free-breakfast\":60228,\"fullscreen\":58832,\"fullscreen-exit\":58833,\"functions\":57930,\"g-translate\":59687,\"gamepad\":58127,\"games\":57377,\"gavel\":59662,\"gesture\":57685,\"get-app\":59524,\"gif\":59656,\"golf-course\":60229,\"gps-fixed\":57779,\"gps-not-fixed\":57780,\"gps-off\":57781,\"grade\":59525,\"gradient\":58345,\"grain\":58346,\"graphic-eq\":57784,\"grid-off\":58347,\"grid-on\":58348,\"group\":59375,\"group-add\":59376,\"group-work\":59526,\"hd\":57426,\"hdr-off\":58349,\"hdr-on\":58350,\"hdr-strong\":58353,\"hdr-weak\":58354,\"headset\":58128,\"headset-mic\":58129,\"healing\":58355,\"hearing\":57379,\"help\":59527,\"help-outline\":59645,\"high-quality\":57380,\"highlight\":57951,\"highlight-off\":59528,\"history\":59529,\"home\":59530,\"hot-tub\":60230,\"hotel\":58682,\"hourglass-empty\":59531,\"hourglass-full\":59532,\"http\":59650,\"https\":59533,\"image\":58356,\"image-aspect-ratio\":58357,\"import-contacts\":57568,\"import-export\":57539,\"important-devices\":59666,\"inbox\":57686,\"indeterminate-check-box\":59657,\"info\":59534,\"info-outline\":59535,\"input\":59536,\"insert-chart\":57931,\"insert-comment\":57932,\"insert-drive-file\":57933,\"insert-emoticon\":57934,\"insert-invitation\":57935,\"insert-link\":57936,\"insert-photo\":57937,\"invert-colors\":59537,\"invert-colors-off\":57540,\"iso\":58358,\"keyboard\":58130,\"keyboard-arrow-down\":58131,\"keyboard-arrow-left\":58132,\"keyboard-arrow-right\":58133,\"keyboard-arrow-up\":58134,\"keyboard-backspace\":58135,\"keyboard-capslock\":58136,\"keyboard-hide\":58138,\"keyboard-return\":58139,\"keyboard-tab\":58140,\"keyboard-voice\":58141,\"kitchen\":60231,\"label\":59538,\"label-outline\":59539,\"landscape\":58359,\"language\":59540,\"laptop\":58142,\"laptop-chromebook\":58143,\"laptop-mac\":58144,\"laptop-windows\":58145,\"last-page\":58845,\"launch\":59541,\"layers\":58683,\"layers-clear\":58684,\"leak-add\":58360,\"leak-remove\":58361,\"lens\":58362,\"library-add\":57390,\"library-books\":57391,\"library-music\":57392,\"lightbulb-outline\":59663,\"line-style\":59673,\"line-weight\":59674,\"linear-scale\":57952,\"link\":57687,\"linked-camera\":58424,\"list\":59542,\"live-help\":57542,\"live-tv\":58937,\"local-activity\":58687,\"local-airport\":58685,\"local-atm\":58686,\"local-bar\":58688,\"local-cafe\":58689,\"local-car-wash\":58690,\"local-convenience-store\":58691,\"local-dining\":58710,\"local-drink\":58692,\"local-florist\":58693,\"local-gas-station\":58694,\"local-grocery-store\":58695,\"local-hospital\":58696,\"local-hotel\":58697,\"local-laundry-service\":58698,\"local-library\":58699,\"local-mall\":58700,\"local-movies\":58701,\"local-offer\":58702,\"local-parking\":58703,\"local-pharmacy\":58704,\"local-phone\":58705,\"local-pizza\":58706,\"local-play\":58707,\"local-post-office\":58708,\"local-printshop\":58709,\"local-see\":58711,\"local-shipping\":58712,\"local-taxi\":58713,\"location-city\":59377,\"location-disabled\":57782,\"location-off\":57543,\"location-on\":57544,\"location-searching\":57783,\"lock\":59543,\"lock-open\":59544,\"lock-outline\":59545,\"looks\":58364,\"looks-3\":58363,\"looks-4\":58365,\"looks-5\":58366,\"looks-6\":58367,\"looks-one\":58368,\"looks-two\":58369,\"loop\":57384,\"loupe\":58370,\"low-priority\":57709,\"loyalty\":59546,\"mail\":57688,\"mail-outline\":57569,\"map\":58715,\"markunread\":57689,\"markunread-mailbox\":59547,\"memory\":58146,\"menu\":58834,\"merge-type\":57938,\"message\":57545,\"mic\":57385,\"mic-none\":57386,\"mic-off\":57387,\"mms\":58904,\"mode-comment\":57939,\"mode-edit\":57940,\"monetization-on\":57955,\"money-off\":57948,\"monochrome-photos\":58371,\"mood\":59378,\"mood-bad\":59379,\"more\":58905,\"more-horiz\":58835,\"more-vert\":58836,\"motorcycle\":59675,\"mouse\":58147,\"move-to-inbox\":57704,\"movie\":57388,\"movie-creation\":58372,\"movie-filter\":58426,\"multiline-chart\":59103,\"music-note\":58373,\"music-video\":57443,\"my-location\":58716,\"nature\":58374,\"nature-people\":58375,\"navigate-before\":58376,\"navigate-next\":58377,\"navigation\":58717,\"near-me\":58729,\"network-cell\":57785,\"network-check\":58944,\"network-locked\":58906,\"network-wifi\":57786,\"new-releases\":57393,\"next-week\":57706,\"nfc\":57787,\"no-encryption\":58945,\"no-sim\":57548,\"not-interested\":57395,\"note\":57455,\"note-add\":59548,\"notifications\":59380,\"notifications-active\":59383,\"notifications-none\":59381,\"notifications-off\":59382,\"notifications-paused\":59384,\"offline-pin\":59658,\"ondemand-video\":58938,\"opacity\":59676,\"open-in-browser\":59549,\"open-in-new\":59550,\"open-with\":59551,\"pages\":59385,\"pageview\":59552,\"palette\":58378,\"pan-tool\":59685,\"panorama\":58379,\"panorama-fish-eye\":58380,\"panorama-horizontal\":58381,\"panorama-vertical\":58382,\"panorama-wide-angle\":58383,\"party-mode\":59386,\"pause\":57396,\"pause-circle-filled\":57397,\"pause-circle-outline\":57398,\"payment\":59553,\"people\":59387,\"people-outline\":59388,\"perm-camera-mic\":59554,\"perm-contact-calendar\":59555,\"perm-data-setting\":59556,\"perm-device-information\":59557,\"perm-identity\":59558,\"perm-media\":59559,\"perm-phone-msg\":59560,\"perm-scan-wifi\":59561,\"person\":59389,\"person-add\":59390,\"person-outline\":59391,\"person-pin\":58714,\"person-pin-circle\":58730,\"personal-video\":58939,\"pets\":59677,\"phone\":57549,\"phone-android\":58148,\"phone-bluetooth-speaker\":58907,\"phone-forwarded\":58908,\"phone-in-talk\":58909,\"phone-iphone\":58149,\"phone-locked\":58910,\"phone-missed\":58911,\"phone-paused\":58912,\"phonelink\":58150,\"phonelink-erase\":57563,\"phonelink-lock\":57564,\"phonelink-off\":58151,\"phonelink-ring\":57565,\"phonelink-setup\":57566,\"photo\":58384,\"photo-album\":58385,\"photo-camera\":58386,\"photo-filter\":58427,\"photo-library\":58387,\"photo-size-select-actual\":58418,\"photo-size-select-large\":58419,\"photo-size-select-small\":58420,\"picture-as-pdf\":58389,\"picture-in-picture\":59562,\"picture-in-picture-alt\":59665,\"pie-chart\":59076,\"pie-chart-outlined\":59077,\"pin-drop\":58718,\"place\":58719,\"play-arrow\":57399,\"play-circle-filled\":57400,\"play-circle-outline\":57401,\"play-for-work\":59654,\"playlist-add\":57403,\"playlist-add-check\":57445,\"playlist-play\":57439,\"plus-one\":59392,\"poll\":59393,\"polymer\":59563,\"pool\":60232,\"portable-wifi-off\":57550,\"portrait\":58390,\"power\":58940,\"power-input\":58166,\"power-settings-new\":59564,\"pregnant-woman\":59678,\"present-to-all\":57567,\"print\":59565,\"priority-high\":58949,\"public\":59403,\"publish\":57941,\"query-builder\":59566,\"question-answer\":59567,\"queue\":57404,\"queue-music\":57405,\"queue-play-next\":57446,\"radio\":57406,\"radio-button-checked\":59447,\"radio-button-unchecked\":59446,\"rate-review\":58720,\"receipt\":59568,\"recent-actors\":57407,\"record-voice-over\":59679,\"redeem\":59569,\"redo\":57690,\"refresh\":58837,\"remove\":57691,\"remove-circle\":57692,\"remove-circle-outline\":57693,\"remove-from-queue\":57447,\"remove-red-eye\":58391,\"remove-shopping-cart\":59688,\"reorder\":59646,\"repeat\":57408,\"repeat-one\":57409,\"replay\":57410,\"replay-10\":57433,\"replay-30\":57434,\"replay-5\":57435,\"reply\":57694,\"reply-all\":57695,\"report\":57696,\"report-problem\":59570,\"restaurant\":58732,\"restaurant-menu\":58721,\"restore\":59571,\"restore-page\":59689,\"ring-volume\":57553,\"room\":59572,\"room-service\":60233,\"rotate-90-degrees-ccw\":58392,\"rotate-left\":58393,\"rotate-right\":58394,\"rounded-corner\":59680,\"router\":58152,\"rowing\":59681,\"rss-feed\":57573,\"rv-hookup\":58946,\"satellite\":58722,\"save\":57697,\"scanner\":58153,\"schedule\":59573,\"school\":59404,\"screen-lock-landscape\":57790,\"screen-lock-portrait\":57791,\"screen-lock-rotation\":57792,\"screen-rotation\":57793,\"screen-share\":57570,\"sd-card\":58915,\"sd-storage\":57794,\"search\":59574,\"security\":58154,\"select-all\":57698,\"send\":57699,\"sentiment-dissatisfied\":59409,\"sentiment-neutral\":59410,\"sentiment-satisfied\":59411,\"sentiment-very-dissatisfied\":59412,\"sentiment-very-satisfied\":59413,\"settings\":59576,\"settings-applications\":59577,\"settings-backup-restore\":59578,\"settings-bluetooth\":59579,\"settings-brightness\":59581,\"settings-cell\":59580,\"settings-ethernet\":59582,\"settings-input-antenna\":59583,\"settings-input-component\":59584,\"settings-input-composite\":59585,\"settings-input-hdmi\":59586,\"settings-input-svideo\":59587,\"settings-overscan\":59588,\"settings-phone\":59589,\"settings-power\":59590,\"settings-remote\":59591,\"settings-system-daydream\":57795,\"settings-voice\":59592,\"share\":59405,\"shop\":59593,\"shop-two\":59594,\"shopping-basket\":59595,\"shopping-cart\":59596,\"short-text\":57953,\"show-chart\":59105,\"shuffle\":57411,\"signal-cellular-4-bar\":57800,\"signal-cellular-connected-no-internet-4-bar\":57805,\"signal-cellular-no-sim\":57806,\"signal-cellular-null\":57807,\"signal-cellular-off\":57808,\"signal-wifi-4-bar\":57816,\"signal-wifi-4-bar-lock\":57817,\"signal-wifi-off\":57818,\"sim-card\":58155,\"sim-card-alert\":58916,\"skip-next\":57412,\"skip-previous\":57413,\"slideshow\":58395,\"slow-motion-video\":57448,\"smartphone\":58156,\"smoke-free\":60234,\"smoking-rooms\":60235,\"sms\":58917,\"sms-failed\":58918,\"snooze\":57414,\"sort\":57700,\"sort-by-alpha\":57427,\"spa\":60236,\"space-bar\":57942,\"speaker\":58157,\"speaker-group\":58158,\"speaker-notes\":59597,\"speaker-notes-off\":59690,\"speaker-phone\":57554,\"spellcheck\":59598,\"star\":59448,\"star-border\":59450,\"star-half\":59449,\"stars\":59600,\"stay-current-landscape\":57555,\"stay-current-portrait\":57556,\"stay-primary-landscape\":57557,\"stay-primary-portrait\":57558,\"stop\":57415,\"stop-screen-share\":57571,\"storage\":57819,\"store\":59601,\"store-mall-directory\":58723,\"straighten\":58396,\"streetview\":58734,\"strikethrough-s\":57943,\"style\":58397,\"subdirectory-arrow-left\":58841,\"subdirectory-arrow-right\":58842,\"subject\":59602,\"subscriptions\":57444,\"subtitles\":57416,\"subway\":58735,\"supervisor-account\":59603,\"surround-sound\":57417,\"swap-calls\":57559,\"swap-horiz\":59604,\"swap-vert\":59605,\"swap-vertical-circle\":59606,\"switch-camera\":58398,\"switch-video\":58399,\"sync\":58919,\"sync-disabled\":58920,\"sync-problem\":58921,\"system-update\":58922,\"system-update-alt\":59607,\"tab\":59608,\"tab-unselected\":59609,\"tablet\":58159,\"tablet-android\":58160,\"tablet-mac\":58161,\"tag-faces\":58400,\"tap-and-play\":58923,\"terrain\":58724,\"text-fields\":57954,\"text-format\":57701,\"textsms\":57560,\"texture\":58401,\"theaters\":59610,\"thumb-down\":59611,\"thumb-up\":59612,\"thumbs-up-down\":59613,\"time-to-leave\":58924,\"timelapse\":58402,\"timeline\":59682,\"timer\":58405,\"timer-10\":58403,\"timer-3\":58404,\"timer-off\":58406,\"title\":57956,\"toc\":59614,\"today\":59615,\"toll\":59616,\"tonality\":58407,\"touch-app\":59667,\"toys\":58162,\"track-changes\":59617,\"traffic\":58725,\"train\":58736,\"tram\":58737,\"transfer-within-a-station\":58738,\"transform\":58408,\"translate\":59618,\"trending-down\":59619,\"trending-flat\":59620,\"trending-up\":59621,\"tune\":58409,\"turned-in\":59622,\"turned-in-not\":59623,\"tv\":58163,\"unarchive\":57705,\"undo\":57702,\"unfold-less\":58838,\"unfold-more\":58839,\"update\":59683,\"usb\":57824,\"verified-user\":59624,\"vertical-align-bottom\":57944,\"vertical-align-center\":57945,\"vertical-align-top\":57946,\"vibration\":58925,\"video-call\":57456,\"video-label\":57457,\"video-library\":57418,\"videocam\":57419,\"videocam-off\":57420,\"videogame-asset\":58168,\"view-agenda\":59625,\"view-array\":59626,\"view-carousel\":59627,\"view-column\":59628,\"view-comfy\":58410,\"view-compact\":58411,\"view-day\":59629,\"view-headline\":59630,\"view-list\":59631,\"view-module\":59632,\"view-quilt\":59633,\"view-stream\":59634,\"view-week\":59635,\"vignette\":58421,\"visibility\":59636,\"visibility-off\":59637,\"voice-chat\":58926,\"voicemail\":57561,\"volume-down\":57421,\"volume-mute\":57422,\"volume-off\":57423,\"volume-up\":57424,\"vpn-key\":57562,\"vpn-lock\":58927,\"wallpaper\":57788,\"warning\":57346,\"watch\":58164,\"watch-later\":59684,\"wb-auto\":58412,\"wb-cloudy\":58413,\"wb-incandescent\":58414,\"wb-iridescent\":58422,\"wb-sunny\":58416,\"wc\":58941,\"web\":57425,\"web-asset\":57449,\"weekend\":57707,\"whatshot\":59406,\"widgets\":57789,\"wifi\":58942,\"wifi-lock\":57825,\"wifi-tethering\":57826,\"work\":59641,\"wrap-text\":57947,\"youtube-searched-for\":59642,\"zoom-in\":59647,\"zoom-out\":59648,\"zoom-out-map\":58731}");

/***/ }),

/***/ "../../../node_modules/react-native-vector-icons/glyphmaps/Octicons.json":
/*!********************************************************************************************************************************!*\
  !*** /Users/diego.antonelli/Desktop/projects/widgets-resources/node_modules/react-native-vector-icons/glyphmaps/Octicons.json ***!
  \********************************************************************************************************************************/
/*! exports provided: alert, arrow-down, arrow-left, arrow-right, arrow-small-down, arrow-small-left, arrow-small-right, arrow-small-up, arrow-up, beaker, bell, bold, book, bookmark, briefcase, broadcast, browser, bug, calendar, check, checklist, chevron-down, chevron-left, chevron-right, chevron-up, circle-slash, circuit-board, clippy, clock, cloud-download, cloud-upload, code, comment, comment-discussion, credit-card, dash, dashboard, database, desktop-download, device-camera, device-camera-video, device-desktop, device-mobile, diff, diff-added, diff-ignored, diff-modified, diff-removed, diff-renamed, ellipsis, eye, file, file-binary, file-code, file-directory, file-media, file-pdf, file-submodule, file-symlink-directory, file-symlink-file, file-zip, flame, fold, gear, gift, gist, gist-secret, git-branch, git-commit, git-compare, git-merge, git-pull-request, globe, grabber, graph, heart, history, home, horizontal-rule, hubot, inbox, info, issue-closed, issue-opened, issue-reopened, italic, jersey, kebab-horizontal, kebab-vertical, key, keyboard, law, light-bulb, link, link-external, list-ordered, list-unordered, location, lock, logo-gist, logo-github, mail, mail-read, mark-github, markdown, megaphone, mention, milestone, mirror, mortar-board, mute, no-newline, note, octoface, organization, package, paintcan, pencil, person, pin, plug, plus, plus-small, primitive-dot, primitive-square, project, pulse, question, quote, radio-tower, reply, repo, repo-clone, repo-force-push, repo-forked, repo-pull, repo-push, report, rocket, rss, ruby, screen-full, screen-normal, search, server, settings, shield, sign-in, sign-out, smiley, squirrel, star, stop, sync, tag, tasklist, telescope, terminal, text-size, three-bars, thumbsdown, thumbsup, tools, trashcan, triangle-down, triangle-left, triangle-right, triangle-up, unfold, unmute, unverified, verified, versions, watch, x, zap, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"alert\":61696,\"arrow-down\":61697,\"arrow-left\":61698,\"arrow-right\":61699,\"arrow-small-down\":61700,\"arrow-small-left\":61701,\"arrow-small-right\":61702,\"arrow-small-up\":61703,\"arrow-up\":61704,\"beaker\":61705,\"bell\":61706,\"bold\":61707,\"book\":61708,\"bookmark\":61709,\"briefcase\":61710,\"broadcast\":61711,\"browser\":61712,\"bug\":61713,\"calendar\":61714,\"check\":61715,\"checklist\":61716,\"chevron-down\":61717,\"chevron-left\":61718,\"chevron-right\":61719,\"chevron-up\":61720,\"circle-slash\":61721,\"circuit-board\":61722,\"clippy\":61723,\"clock\":61724,\"cloud-download\":61725,\"cloud-upload\":61726,\"code\":61727,\"comment\":61728,\"comment-discussion\":61729,\"credit-card\":61730,\"dash\":61731,\"dashboard\":61732,\"database\":61733,\"desktop-download\":61734,\"device-camera\":61735,\"device-camera-video\":61736,\"device-desktop\":61737,\"device-mobile\":61738,\"diff\":61739,\"diff-added\":61740,\"diff-ignored\":61741,\"diff-modified\":61742,\"diff-removed\":61743,\"diff-renamed\":61744,\"ellipsis\":61745,\"eye\":61746,\"file\":61747,\"file-binary\":61748,\"file-code\":61749,\"file-directory\":61750,\"file-media\":61751,\"file-pdf\":61752,\"file-submodule\":61753,\"file-symlink-directory\":61754,\"file-symlink-file\":61755,\"file-zip\":61756,\"flame\":61757,\"fold\":61758,\"gear\":61759,\"gift\":61760,\"gist\":61761,\"gist-secret\":61762,\"git-branch\":61763,\"git-commit\":61764,\"git-compare\":61765,\"git-merge\":61766,\"git-pull-request\":61767,\"globe\":61768,\"grabber\":61769,\"graph\":61770,\"heart\":61771,\"history\":61772,\"home\":61773,\"horizontal-rule\":61774,\"hubot\":61775,\"inbox\":61776,\"info\":61777,\"issue-closed\":61778,\"issue-opened\":61779,\"issue-reopened\":61780,\"italic\":61781,\"jersey\":61782,\"kebab-horizontal\":61783,\"kebab-vertical\":61784,\"key\":61785,\"keyboard\":61786,\"law\":61787,\"light-bulb\":61788,\"link\":61789,\"link-external\":61790,\"list-ordered\":61791,\"list-unordered\":61792,\"location\":61793,\"lock\":61794,\"logo-gist\":61795,\"logo-github\":61796,\"mail\":61797,\"mail-read\":61798,\"mark-github\":61799,\"markdown\":61800,\"megaphone\":61801,\"mention\":61802,\"milestone\":61803,\"mirror\":61804,\"mortar-board\":61805,\"mute\":61806,\"no-newline\":61807,\"note\":61808,\"octoface\":61809,\"organization\":61810,\"package\":61811,\"paintcan\":61812,\"pencil\":61813,\"person\":61814,\"pin\":61815,\"plug\":61816,\"plus\":61817,\"plus-small\":61818,\"primitive-dot\":61819,\"primitive-square\":61820,\"project\":61821,\"pulse\":61822,\"question\":61823,\"quote\":61824,\"radio-tower\":61825,\"reply\":61826,\"repo\":61827,\"repo-clone\":61828,\"repo-force-push\":61829,\"repo-forked\":61830,\"repo-pull\":61831,\"repo-push\":61832,\"report\":61833,\"rocket\":61834,\"rss\":61835,\"ruby\":61836,\"screen-full\":61837,\"screen-normal\":61838,\"search\":61839,\"server\":61840,\"settings\":61841,\"shield\":61842,\"sign-in\":61843,\"sign-out\":61844,\"smiley\":61845,\"squirrel\":61846,\"star\":61847,\"stop\":61848,\"sync\":61849,\"tag\":61850,\"tasklist\":61851,\"telescope\":61852,\"terminal\":61853,\"text-size\":61854,\"three-bars\":61855,\"thumbsdown\":61856,\"thumbsup\":61857,\"tools\":61858,\"trashcan\":61859,\"triangle-down\":61860,\"triangle-left\":61861,\"triangle-right\":61862,\"triangle-up\":61863,\"unfold\":61864,\"unmute\":61865,\"unverified\":61866,\"verified\":61867,\"versions\":61868,\"watch\":61869,\"x\":61870,\"zap\":61871}");

/***/ }),

/***/ "../../../node_modules/react-native-vector-icons/glyphmaps/SimpleLineIcons.json":
/*!***************************************************************************************************************************************!*\
  !*** /Users/diego.antonelli/Desktop/projects/widgets-resources/node_modules/react-native-vector-icons/glyphmaps/SimpleLineIcons.json ***!
  \***************************************************************************************************************************************/
/*! exports provided: user, people, user-female, user-follow, user-following, user-unfollow, login, logout, emotsmile, phone, call-end, call-in, call-out, map, location-pin, direction, directions, compass, layers, menu, list, options-vertical, options, arrow-down, arrow-left, arrow-right, arrow-up, arrow-up-circle, arrow-left-circle, arrow-right-circle, arrow-down-circle, check, clock, plus, minus, close, event, exclamation, organization, trophy, screen-smartphone, screen-desktop, plane, notebook, mustache, mouse, magnet, energy, disc, cursor, cursor-move, crop, chemistry, speedometer, shield, screen-tablet, magic-wand, hourglass, graduation, ghost, game-controller, fire, eyeglass, envelope-open, envelope-letter, bell, badge, anchor, wallet, vector, speech, puzzle, printer, present, playlist, pin, picture, handbag, globe-alt, globe, folder-alt, folder, film, feed, drop, drawer, docs, doc, diamond, cup, calculator, bubbles, briefcase, book-open, basket-loaded, basket, bag, action-undo, action-redo, wrench, umbrella, trash, tag, support, frame, size-fullscreen, size-actual, shuffle, share-alt, share, rocket, question, pie-chart, pencil, note, loop, home, grid, graph, microphone, music-tone-alt, music-tone, earphones-alt, earphones, equalizer, like, dislike, control-start, control-rewind, control-play, control-pause, control-forward, control-end, volume-1, volume-2, volume-off, calendar, bulb, chart, ban, bubble, camrecorder, camera, cloud-download, cloud-upload, envelope, eye, flag, heart, info, key, link, lock, lock-open, magnifier, magnifier-add, magnifier-remove, paper-clip, paper-plane, power, refresh, reload, settings, star, symbol-female, symbol-male, target, credit-card, paypal, social-tumblr, social-twitter, social-facebook, social-instagram, social-linkedin, social-pinterest, social-github, social-google, social-reddit, social-skype, social-dribbble, social-behance, social-foursqare, social-soundcloud, social-spotify, social-stumbleupon, social-youtube, social-dropbox, social-vkontakte, social-steam, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"user\":57349,\"people\":57345,\"user-female\":57344,\"user-follow\":57346,\"user-following\":57347,\"user-unfollow\":57348,\"login\":57446,\"logout\":57445,\"emotsmile\":57377,\"phone\":58880,\"call-end\":57416,\"call-in\":57415,\"call-out\":57414,\"map\":57395,\"location-pin\":57494,\"direction\":57410,\"directions\":57409,\"compass\":57413,\"layers\":57396,\"menu\":58881,\"list\":57447,\"options-vertical\":58882,\"options\":58883,\"arrow-down\":58884,\"arrow-left\":58885,\"arrow-right\":58886,\"arrow-up\":58887,\"arrow-up-circle\":57464,\"arrow-left-circle\":57466,\"arrow-right-circle\":57465,\"arrow-down-circle\":57467,\"check\":57472,\"clock\":57473,\"plus\":57493,\"minus\":58901,\"close\":57474,\"event\":58905,\"exclamation\":58903,\"organization\":58902,\"trophy\":57350,\"screen-smartphone\":57360,\"screen-desktop\":57361,\"plane\":57362,\"notebook\":57363,\"mustache\":57364,\"mouse\":57365,\"magnet\":57366,\"energy\":57376,\"disc\":57378,\"cursor\":57454,\"cursor-move\":57379,\"crop\":57380,\"chemistry\":57382,\"speedometer\":57351,\"shield\":57358,\"screen-tablet\":57359,\"magic-wand\":57367,\"hourglass\":57368,\"graduation\":57369,\"ghost\":57370,\"game-controller\":57371,\"fire\":57372,\"eyeglass\":57373,\"envelope-open\":57374,\"envelope-letter\":57375,\"bell\":57383,\"badge\":57384,\"anchor\":57385,\"wallet\":57386,\"vector\":57387,\"speech\":57388,\"puzzle\":57389,\"printer\":57390,\"present\":57391,\"playlist\":57392,\"pin\":57393,\"picture\":57394,\"handbag\":57397,\"globe-alt\":57398,\"globe\":57399,\"folder-alt\":57401,\"folder\":57481,\"film\":57402,\"feed\":57403,\"drop\":57406,\"drawer\":57407,\"docs\":57408,\"doc\":57477,\"diamond\":57411,\"cup\":57412,\"calculator\":57417,\"bubbles\":57418,\"briefcase\":57419,\"book-open\":57420,\"basket-loaded\":57421,\"basket\":57422,\"bag\":57423,\"action-undo\":57424,\"action-redo\":57425,\"wrench\":57426,\"umbrella\":57427,\"trash\":57428,\"tag\":57429,\"support\":57430,\"frame\":57400,\"size-fullscreen\":57431,\"size-actual\":57432,\"shuffle\":57433,\"share-alt\":57434,\"share\":57435,\"rocket\":57436,\"question\":57437,\"pie-chart\":57438,\"pencil\":57439,\"note\":57440,\"loop\":57444,\"home\":57449,\"grid\":57450,\"graph\":57451,\"microphone\":57443,\"music-tone-alt\":57441,\"music-tone\":57442,\"earphones-alt\":57404,\"earphones\":57405,\"equalizer\":57452,\"like\":57448,\"dislike\":57453,\"control-start\":57455,\"control-rewind\":57456,\"control-play\":57457,\"control-pause\":57458,\"control-forward\":57459,\"control-end\":57460,\"volume-1\":57503,\"volume-2\":57504,\"volume-off\":57505,\"calendar\":57461,\"bulb\":57462,\"chart\":57463,\"ban\":57468,\"bubble\":57469,\"camrecorder\":57470,\"camera\":57471,\"cloud-download\":57475,\"cloud-upload\":57476,\"envelope\":57478,\"eye\":57479,\"flag\":57480,\"heart\":57482,\"info\":57483,\"key\":57484,\"link\":57485,\"lock\":57486,\"lock-open\":57487,\"magnifier\":57488,\"magnifier-add\":57489,\"magnifier-remove\":57490,\"paper-clip\":57491,\"paper-plane\":57492,\"power\":57495,\"refresh\":57496,\"reload\":57497,\"settings\":57498,\"star\":57499,\"symbol-female\":57500,\"symbol-male\":57501,\"target\":57502,\"credit-card\":57381,\"paypal\":58888,\"social-tumblr\":57354,\"social-twitter\":57353,\"social-facebook\":57355,\"social-instagram\":58889,\"social-linkedin\":58890,\"social-pinterest\":58891,\"social-github\":58892,\"social-google\":58893,\"social-reddit\":58894,\"social-skype\":58895,\"social-dribbble\":57357,\"social-behance\":58896,\"social-foursqare\":58897,\"social-soundcloud\":58898,\"social-spotify\":58899,\"social-stumbleupon\":58900,\"social-youtube\":57352,\"social-dropbox\":57356,\"social-vkontakte\":58904,\"social-steam\":58912}");

/***/ }),

/***/ "../../../node_modules/react-native-vector-icons/glyphmaps/Zocial.json":
/*!******************************************************************************************************************************!*\
  !*** /Users/diego.antonelli/Desktop/projects/widgets-resources/node_modules/react-native-vector-icons/glyphmaps/Zocial.json ***!
  \******************************************************************************************************************************/
/*! exports provided: acrobat, amazon, android, angellist, aol, appnet, appstore, bitbucket, bitcoin, blogger, buffer, cal, call, cart, chrome, cloudapp, creativecommons, delicious, digg, disqus, dribbble, dropbox, drupal, dwolla, email, eventasaurus, eventbrite, eventful, evernote, facebook, fivehundredpx, flattr, flickr, forrst, foursquare, github, gmail, google, googleplay, googleplus, gowalla, grooveshark, guest, html5, ie, instagram, instapaper, intensedebate, itunes, klout, lanyrd, lastfm, lego, linkedin, lkdto, logmein, macstore, meetup, myspace, ninetyninedesigns, openid, opentable, paypal, persona, pinboard, pinterest, plancast, plurk, pocket, podcast, posterous, print, quora, reddit, rss, scribd, skype, smashing, songkick, soundcloud, spotify, stackoverflow, statusnet, steam, stripe, stumbleupon, tumblr, twitter, viadeo, vimeo, vk, weibo, wikipedia, windows, wordpress, xing, yahoo, ycombinator, yelp, youtube, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"acrobat\":61696,\"amazon\":61697,\"android\":61698,\"angellist\":61699,\"aol\":61700,\"appnet\":61701,\"appstore\":61702,\"bitbucket\":61703,\"bitcoin\":61704,\"blogger\":61705,\"buffer\":61706,\"cal\":61707,\"call\":61708,\"cart\":61709,\"chrome\":61710,\"cloudapp\":61711,\"creativecommons\":61712,\"delicious\":61713,\"digg\":61714,\"disqus\":61715,\"dribbble\":61716,\"dropbox\":61717,\"drupal\":61718,\"dwolla\":61720,\"email\":61721,\"eventasaurus\":61722,\"eventbrite\":61723,\"eventful\":61724,\"evernote\":61725,\"facebook\":61726,\"fivehundredpx\":61727,\"flattr\":61728,\"flickr\":61729,\"forrst\":61730,\"foursquare\":61731,\"github\":61732,\"gmail\":61733,\"google\":61734,\"googleplay\":61735,\"googleplus\":61736,\"gowalla\":61737,\"grooveshark\":61738,\"guest\":61739,\"html5\":61740,\"ie\":61741,\"instagram\":61742,\"instapaper\":61743,\"intensedebate\":61744,\"itunes\":61745,\"klout\":61746,\"lanyrd\":61747,\"lastfm\":61748,\"lego\":61749,\"linkedin\":61750,\"lkdto\":61751,\"logmein\":61752,\"macstore\":61753,\"meetup\":61754,\"myspace\":61755,\"ninetyninedesigns\":61756,\"openid\":61757,\"opentable\":61758,\"paypal\":61759,\"persona\":61796,\"pinboard\":61760,\"pinterest\":61761,\"plancast\":61762,\"plurk\":61763,\"pocket\":61764,\"podcast\":61765,\"posterous\":61766,\"print\":61767,\"quora\":61768,\"reddit\":61769,\"rss\":61770,\"scribd\":61771,\"skype\":61772,\"smashing\":61773,\"songkick\":61774,\"soundcloud\":61775,\"spotify\":61776,\"stackoverflow\":61777,\"statusnet\":61778,\"steam\":61779,\"stripe\":61780,\"stumbleupon\":61781,\"tumblr\":61782,\"twitter\":61783,\"viadeo\":61784,\"vimeo\":61785,\"vk\":61786,\"weibo\":61787,\"wikipedia\":61788,\"windows\":61789,\"wordpress\":61790,\"xing\":61791,\"yahoo\":61792,\"ycombinator\":61793,\"yelp\":61794,\"youtube\":61795}");

/***/ }),

/***/ "../../../node_modules/react-native-vector-icons/lib/create-icon-set.js":
/*!*******************************************************************************************************************************!*\
  !*** /Users/diego.antonelli/Desktop/projects/widgets-resources/node_modules/react-native-vector-icons/lib/create-icon-set.js ***!
  \*******************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return createIconSet; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "../../../node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _react_native__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./react-native */ "../../../node_modules/react-native-vector-icons/lib/react-native.js");
/* harmony import */ var _icon_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./icon-button */ "../../../node_modules/react-native-vector-icons/lib/icon-button.js");
/* harmony import */ var _tab_bar_item_ios__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./tab-bar-item-ios */ "../../../node_modules/react-native-vector-icons/lib/tab-bar-item-ios.js");
/* harmony import */ var _toolbar_android__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./toolbar-android */ "../../../node_modules/react-native-vector-icons/lib/toolbar-android.js");
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







var NativeIconAPI = _react_native__WEBPACK_IMPORTED_MODULE_2__["NativeModules"].RNVectorIconsManager || _react_native__WEBPACK_IMPORTED_MODULE_2__["NativeModules"].RNVectorIconsModule;
var DEFAULT_ICON_SIZE = 12;
var DEFAULT_ICON_COLOR = 'black';
function createIconSet(glyphMap, fontFamily, fontFile) {
  var fontReference = fontFamily; // Android doesn't care about actual fontFamily name, it will only look in fonts folder.

  if (_react_native__WEBPACK_IMPORTED_MODULE_2__["Platform"].OS === 'android' && fontFile) {
    fontReference = fontFile.replace(/\.(otf|ttf)$/, '');
  }

  if (_react_native__WEBPACK_IMPORTED_MODULE_2__["Platform"].OS === 'windows' && fontFile) {
    fontReference = "Assets/".concat(fontFile, "#").concat(fontFamily);
  }

  var IconNamePropType = prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOf(Object.keys(glyphMap));

  var Icon = /*#__PURE__*/function (_PureComponent) {
    _inherits(Icon, _PureComponent);

    var _super = _createSuper(Icon);

    function Icon() {
      var _this;

      _classCallCheck(this, Icon);

      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      _this = _super.call.apply(_super, [this].concat(args));
      _this.root = null;

      _this.handleRef = function (ref) {
        _this.root = ref;
      };

      return _this;
    }

    _createClass(Icon, [{
      key: "setNativeProps",
      value: function setNativeProps(nativeProps) {
        if (this.root) {
          this.root.setNativeProps(nativeProps);
        }
      }
    }, {
      key: "render",
      value: function render() {
        var _this$props = this.props,
            name = _this$props.name,
            size = _this$props.size,
            color = _this$props.color,
            style = _this$props.style,
            props = _objectWithoutProperties(_this$props, ["name", "size", "color", "style"]);

        var glyph = name ? glyphMap[name] || '?' : '';

        if (typeof glyph === 'number') {
          glyph = String.fromCharCode(glyph);
        }

        var styleDefaults = {
          fontSize: size,
          color: color
        };
        var styleOverrides = {
          fontFamily: fontReference,
          fontWeight: 'normal',
          fontStyle: 'normal'
        };
        props.style = [styleDefaults, style, styleOverrides];
        props.ref = this.handleRef;
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_react_native__WEBPACK_IMPORTED_MODULE_2__["Text"], props, glyph, this.props.children);
      }
    }]);

    return Icon;
  }(react__WEBPACK_IMPORTED_MODULE_0__["PureComponent"]);

  Icon.propTypes = {
    name: IconNamePropType,
    size: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number,
    color: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number]),
    children: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.node,
    style: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.any // eslint-disable-line react/forbid-prop-types

  };
  Icon.defaultProps = {
    size: DEFAULT_ICON_SIZE,
    allowFontScaling: false
  };
  var imageSourceCache = {};

  function ensureNativeModuleAvailable() {
    if (!NativeIconAPI) {
      if (_react_native__WEBPACK_IMPORTED_MODULE_2__["Platform"].OS === 'android') {
        throw new Error('RNVectorIconsModule not available, did you properly integrate the module? Try running `react-native link react-native-vector-icons` and recompiling.');
      }

      throw new Error('RNVectorIconsManager not available, did you add the library to your project and link with libRNVectorIcons.a? Try running `react-native link react-native-vector-icons` and recompiling.');
    }
  }

  function getImageSource(name) {
    var size = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : DEFAULT_ICON_SIZE;
    var color = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : DEFAULT_ICON_COLOR;
    ensureNativeModuleAvailable();
    var glyph = glyphMap[name] || '?';

    if (typeof glyph === 'number') {
      glyph = String.fromCharCode(glyph);
    }

    var processedColor = Object(_react_native__WEBPACK_IMPORTED_MODULE_2__["processColor"])(color);
    var cacheKey = "".concat(glyph, ":").concat(size, ":").concat(processedColor);
    var scale = _react_native__WEBPACK_IMPORTED_MODULE_2__["PixelRatio"].get();
    return new Promise(function (resolve, reject) {
      var cached = imageSourceCache[cacheKey];

      if (typeof cached !== 'undefined') {
        if (!cached || cached instanceof Error) {
          reject(cached);
        } else {
          resolve({
            uri: cached,
            scale: scale
          });
        }
      } else {
        NativeIconAPI.getImageForFont(fontReference, glyph, size, processedColor, function (err, image) {
          var error = typeof err === 'string' ? new Error(err) : err;
          imageSourceCache[cacheKey] = image || error || false;

          if (!error && image) {
            resolve({
              uri: image,
              scale: scale
            });
          } else {
            reject(error);
          }
        });
      }
    });
  }

  function loadFont() {
    var file = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : fontFile;

    if (_react_native__WEBPACK_IMPORTED_MODULE_2__["Platform"].OS === 'ios') {
      ensureNativeModuleAvailable();

      if (!file) {
        return Promise.reject(new Error('Unable to load font, because no file was specified. '));
      }

      return NativeIconAPI.loadFontWithFileName.apply(NativeIconAPI, _toConsumableArray(file.split('.')));
    }

    return Promise.resolve();
  }

  function hasIcon(name) {
    return Object.prototype.hasOwnProperty.call(glyphMap, name);
  }

  Icon.Button = Object(_icon_button__WEBPACK_IMPORTED_MODULE_3__["default"])(Icon);
  Icon.TabBarItem = Object(_tab_bar_item_ios__WEBPACK_IMPORTED_MODULE_4__["default"])(IconNamePropType, getImageSource);
  Icon.TabBarItemIOS = Icon.TabBarItem;
  Icon.ToolbarAndroid = Object(_toolbar_android__WEBPACK_IMPORTED_MODULE_5__["default"])(IconNamePropType, getImageSource);
  Icon.getImageSource = getImageSource;
  Icon.loadFont = loadFont;
  Icon.hasIcon = hasIcon;
  return Icon;
}

/***/ }),

/***/ "../../../node_modules/react-native-vector-icons/lib/icon-button.js":
/*!***************************************************************************************************************************!*\
  !*** /Users/diego.antonelli/Desktop/projects/widgets-resources/node_modules/react-native-vector-icons/lib/icon-button.js ***!
  \***************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return createIconButtonComponent; });
/* harmony import */ var lodash_isString__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash/isString */ "../../../node_modules/lodash/isString.js");
/* harmony import */ var lodash_isString__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash_isString__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash_omit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash/omit */ "../../../node_modules/lodash/omit.js");
/* harmony import */ var lodash_omit__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash_omit__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var lodash_pick__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash/pick */ "../../../node_modules/lodash/pick.js");
/* harmony import */ var lodash_pick__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash_pick__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! prop-types */ "../../../node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _react_native__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./react-native */ "../../../node_modules/react-native-vector-icons/lib/react-native.js");
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







var styles = _react_native__WEBPACK_IMPORTED_MODULE_5__["StyleSheet"].create({
  container: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    padding: 8
  },
  touchable: {
    overflow: 'hidden'
  },
  icon: {
    marginRight: 10
  },
  text: {
    fontWeight: '600',
    backgroundColor: 'transparent'
  }
});
var IOS7_BLUE = '#007AFF';
function createIconButtonComponent(Icon) {
  var _class, _temp;

  return _temp = _class = /*#__PURE__*/function (_PureComponent) {
    _inherits(IconButton, _PureComponent);

    var _super = _createSuper(IconButton);

    function IconButton() {
      _classCallCheck(this, IconButton);

      return _super.apply(this, arguments);
    }

    _createClass(IconButton, [{
      key: "render",
      value: function render() {
        var _this$props = this.props,
            style = _this$props.style,
            iconStyle = _this$props.iconStyle,
            children = _this$props.children,
            restProps = _objectWithoutProperties(_this$props, ["style", "iconStyle", "children"]);

        var iconProps = lodash_pick__WEBPACK_IMPORTED_MODULE_2___default()(restProps, Object.keys(_react_native__WEBPACK_IMPORTED_MODULE_5__["Text"].propTypes), 'style', 'name', 'size', 'color');
        var touchableProps = lodash_pick__WEBPACK_IMPORTED_MODULE_2___default()(restProps, Object.keys(_react_native__WEBPACK_IMPORTED_MODULE_5__["TouchableHighlight"].propTypes));
        var props = lodash_omit__WEBPACK_IMPORTED_MODULE_1___default()(restProps, Object.keys(iconProps), Object.keys(touchableProps), 'iconStyle', 'borderRadius', 'backgroundColor');
        iconProps.style = iconStyle ? [styles.icon, iconStyle] : styles.icon;
        var colorStyle = lodash_pick__WEBPACK_IMPORTED_MODULE_2___default()(this.props, 'color');
        var blockStyle = lodash_pick__WEBPACK_IMPORTED_MODULE_2___default()(this.props, 'backgroundColor', 'borderRadius');
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_react_native__WEBPACK_IMPORTED_MODULE_5__["TouchableHighlight"], _extends({
          style: [styles.touchable, blockStyle]
        }, touchableProps), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_react_native__WEBPACK_IMPORTED_MODULE_5__["View"], _extends({
          style: [styles.container, blockStyle, style]
        }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(Icon, iconProps), lodash_isString__WEBPACK_IMPORTED_MODULE_0___default()(children) ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_react_native__WEBPACK_IMPORTED_MODULE_5__["Text"], {
          style: [styles.text, colorStyle]
        }, children) : children));
      }
    }]);

    return IconButton;
  }(react__WEBPACK_IMPORTED_MODULE_3__["PureComponent"]), _class.propTypes = {
    backgroundColor: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.number]),
    borderRadius: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.number,
    color: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.number]),
    size: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.number,
    iconStyle: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.any,
    // eslint-disable-line react/forbid-prop-types
    style: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.any,
    // eslint-disable-line react/forbid-prop-types
    children: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.node
  }, _class.defaultProps = {
    backgroundColor: IOS7_BLUE,
    borderRadius: 5,
    color: 'white',
    size: 20
  }, _temp;
}

/***/ }),

/***/ "../../../node_modules/react-native-vector-icons/lib/react-native.js":
/*!****************************************************************************************************************************!*\
  !*** /Users/diego.antonelli/Desktop/projects/widgets-resources/node_modules/react-native-vector-icons/lib/react-native.js ***!
  \****************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_native__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-native */ "react-native");
/* harmony import */ var react_native__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_native__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in react_native__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return react_native__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "../../../node_modules/react-native-vector-icons/lib/tab-bar-item-ios.js":
/*!********************************************************************************************************************************!*\
  !*** /Users/diego.antonelli/Desktop/projects/widgets-resources/node_modules/react-native-vector-icons/lib/tab-bar-item-ios.js ***!
  \********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return createTabBarItemIOSComponent; });
/* harmony import */ var lodash_isEqual__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash/isEqual */ "../../../node_modules/lodash/isEqual.js");
/* harmony import */ var lodash_isEqual__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash_isEqual__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash_pick__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash/pick */ "../../../node_modules/lodash/pick.js");
/* harmony import */ var lodash_pick__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash_pick__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "../../../node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _react_native__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./react-native */ "../../../node_modules/react-native-vector-icons/lib/react-native.js");
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
/* eslint-disable react/no-unused-prop-types */







function createTabBarItemIOSComponent(IconNamePropType, getImageSource) {
  var _class, _temp;

  return _temp = _class = /*#__PURE__*/function (_PureComponent) {
    _inherits(TabBarItemIOS, _PureComponent);

    var _super = _createSuper(TabBarItemIOS);

    function TabBarItemIOS() {
      _classCallCheck(this, TabBarItemIOS);

      return _super.apply(this, arguments);
    }

    _createClass(TabBarItemIOS, [{
      key: "componentWillMount",
      value: function componentWillMount() {
        this.updateIconSources(this.props);
      }
    }, {
      key: "componentWillReceiveProps",
      value: function componentWillReceiveProps(nextProps) {
        var keys = Object.keys(TabBarItemIOS.propTypes);

        if (!lodash_isEqual__WEBPACK_IMPORTED_MODULE_0___default()(lodash_pick__WEBPACK_IMPORTED_MODULE_1___default()(nextProps, keys), lodash_pick__WEBPACK_IMPORTED_MODULE_1___default()(this.props, keys))) {
          this.updateIconSources(nextProps);
        }
      }
    }, {
      key: "updateIconSources",
      value: function updateIconSources(props) {
        var _this = this;

        if (props.iconName) {
          getImageSource(props.iconName, props.iconSize, props.iconColor).then(function (icon) {
            return _this.setState({
              icon: icon
            });
          });
        }

        if (props.selectedIconName || props.selectedIconColor) {
          var selectedIconName = props.selectedIconName || props.iconName;
          var selectedIconColor = props.selectedIconColor || props.iconColor;
          getImageSource(selectedIconName, props.iconSize, selectedIconColor).then(function (selectedIcon) {
            return _this.setState({
              selectedIcon: selectedIcon
            });
          });
        }
      }
    }, {
      key: "render",
      value: function render() {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_react_native__WEBPACK_IMPORTED_MODULE_4__["TabBarIOS"].Item, _extends({}, this.props, this.state));
      }
    }]);

    return TabBarItemIOS;
  }(react__WEBPACK_IMPORTED_MODULE_2__["PureComponent"]), _class.propTypes = {
    iconName: IconNamePropType.isRequired,
    selectedIconName: IconNamePropType,
    iconSize: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.number,
    iconColor: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.number]),
    selectedIconColor: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.number])
  }, _class.defaultProps = {
    iconSize: 30
  }, _temp;
}

/***/ }),

/***/ "../../../node_modules/react-native-vector-icons/lib/toolbar-android.js":
/*!*******************************************************************************************************************************!*\
  !*** /Users/diego.antonelli/Desktop/projects/widgets-resources/node_modules/react-native-vector-icons/lib/toolbar-android.js ***!
  \*******************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return createToolbarAndroidComponent; });
/* harmony import */ var lodash_isEqual__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash/isEqual */ "../../../node_modules/lodash/isEqual.js");
/* harmony import */ var lodash_isEqual__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash_isEqual__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash_pick__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash/pick */ "../../../node_modules/lodash/pick.js");
/* harmony import */ var lodash_pick__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash_pick__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "../../../node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _react_native__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./react-native */ "../../../node_modules/react-native-vector-icons/lib/react-native.js");
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
/* eslint-disable react/no-unused-prop-types */







function createToolbarAndroidComponent(IconNamePropType, getImageSource) {
  var _class, _temp;

  return _temp = _class = /*#__PURE__*/function (_PureComponent) {
    _inherits(IconToolbarAndroid, _PureComponent);

    var _super = _createSuper(IconToolbarAndroid);

    function IconToolbarAndroid() {
      _classCallCheck(this, IconToolbarAndroid);

      return _super.apply(this, arguments);
    }

    _createClass(IconToolbarAndroid, [{
      key: "componentWillMount",
      value: function componentWillMount() {
        this.updateIconSources(this.props);
      }
    }, {
      key: "componentWillReceiveProps",
      value: function componentWillReceiveProps(nextProps) {
        var _this = this;

        var keys = Object.keys(IconToolbarAndroid.propTypes);

        if (!lodash_isEqual__WEBPACK_IMPORTED_MODULE_0___default()(lodash_pick__WEBPACK_IMPORTED_MODULE_1___default()(nextProps, keys), lodash_pick__WEBPACK_IMPORTED_MODULE_1___default()(this.props, keys))) {
          var stateToEvict = {};

          if (!nextProps.logoName) {
            stateToEvict.logo = undefined;
          }

          if (!nextProps.navIconName) {
            stateToEvict.navIcon = undefined;
          }

          if (!nextProps.overflowIconName) {
            stateToEvict.overflowIcon = undefined;
          }

          if (this.state && Object.keys(stateToEvict).length) {
            this.setState(stateToEvict, function () {
              return _this.updateIconSources(nextProps);
            });
          } else {
            this.updateIconSources(nextProps);
          }
        }
      }
    }, {
      key: "updateIconSources",
      value: function updateIconSources(props) {
        var _this2 = this;

        var size = props.iconSize;
        var color = props.iconColor || props.titleColor;

        if (props.logoName) {
          getImageSource(props.logoName, size, color).then(function (logo) {
            return _this2.setState({
              logo: logo
            });
          });
        }

        if (props.navIconName) {
          getImageSource(props.navIconName, size, color).then(function (navIcon) {
            return _this2.setState({
              navIcon: navIcon
            });
          });
        }

        if (props.overflowIconName) {
          getImageSource(props.overflowIconName, size, color).then(function (overflowIcon) {
            return _this2.setState({
              overflowIcon: overflowIcon
            });
          });
        }

        Promise.all((props.actions || []).map(function (action) {
          if (action.iconName) {
            return getImageSource(action.iconName, action.iconSize || size, action.iconColor || color).then(function (icon) {
              return _objectSpread(_objectSpread({}, action), {}, {
                icon: icon
              });
            });
          }

          return Promise.resolve(action);
        })).then(function (actions) {
          return _this2.setState({
            actions: actions
          });
        });
      }
    }, {
      key: "render",
      value: function render() {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_react_native__WEBPACK_IMPORTED_MODULE_4__["ToolbarAndroid"], _extends({}, this.props, this.state));
      }
    }]);

    return IconToolbarAndroid;
  }(react__WEBPACK_IMPORTED_MODULE_2__["PureComponent"]), _class.propTypes = {
    logoName: IconNamePropType,
    navIconName: IconNamePropType,
    overflowIconName: IconNamePropType,
    actions: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.shape({
      title: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string.isRequired,
      iconName: IconNamePropType,
      iconSize: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.number,
      iconColor: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.number]),
      show: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOf(['always', 'ifRoom', 'never']),
      showWithText: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.bool
    })),
    iconSize: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.number,
    iconColor: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.number])
  }, _class.defaultProps = {
    iconSize: 24
  }, _temp;
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

/***/ "../../../node_modules/webpack/buildin/global.js":
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

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

var g; // This works in non-strict mode

g = function () {
  return this;
}();

try {
  // This works if eval is allowed (see CSP)
  g = g || new Function("return this")();
} catch (e) {
  // This works if the window reference is available
  if ((typeof window === "undefined" ? "undefined" : _typeof(window)) === "object") g = window;
} // g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}


module.exports = g;

/***/ }),

/***/ "../../../node_modules/webpack/buildin/module.js":
/*!***********************************!*\
  !*** (webpack)/buildin/module.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (module) {
  if (!module.webpackPolyfill) {
    module.deprecate = function () {};

    module.paths = []; // module.parent = undefined by default

    if (!module.children) module.children = [];
    Object.defineProperty(module, "loaded", {
      enumerable: true,
      get: function get() {
        return module.l;
      }
    });
    Object.defineProperty(module, "id", {
      enumerable: true,
      get: function get() {
        return module.i;
      }
    });
    module.webpackPolyfill = 1;
  }

  return module;
};

/***/ }),

/***/ "../../../packages-native/rating/src/Rating.tsx":
/*!*******************************************************************************************************!*\
  !*** /Users/diego.antonelli/Desktop/projects/widgets-resources/packages-native/rating/src/Rating.tsx ***!
  \*******************************************************************************************************/
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
!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(/*! @native-mobile-resources/util-widgets */ "../../../packages-native/util-widgets/dist/index.js"), __webpack_require__(/*! @widgets-resources/piw-utils */ "../../piw-utils/dist/index.js"), __webpack_require__(/*! react */ "react"), __webpack_require__(/*! react-native-star-rating */ "../../../node_modules/react-native-star-rating/index.js"), __webpack_require__(/*! big.js */ "big.js"), __webpack_require__(/*! ./ui/Styles */ "../../../packages-native/rating/src/ui/Styles.ts"), __webpack_require__(/*! ./utils/fonts/font */ "../../../packages-native/rating/src/utils/fonts/font.ts")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, util_widgets_1, piw_utils_1, react_1, react_native_star_rating_1, big_js_1, Styles_1, font_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    react_native_star_rating_1 = __importDefault(react_native_star_rating_1);
    var fullIcon = "glyphicon-star";
    var emptyIcon = "glyphicon-star-empty";
    var Rating = (function (_super) {
        __extends(Rating, _super);
        function Rating(props) {
            var _this = _super.call(this, props) || this;
            _this.state = {};
            _this.onChangeHandler = _this.onChange.bind(_this);
            _this.styles = util_widgets_1.flattenStyles(Styles_1.defaultRatingStyle, _this.props.style);
            var _a = processStyles(_this.styles), color = _a.color, selectedColor = _a.selectedColor, size = _a.size, iconStyle = _a.iconStyle;
            var iconConfigurations = [
                { name: fullIcon, size: size, color: selectedColor },
                { name: emptyIcon, size: size, color: color }
            ];
            _this.iconStyle = iconStyle;
            _this.usesGlyphicons = !props.icon || !props.icon.value || !props.emptyIcon || !props.emptyIcon.value;
            if (_this.usesGlyphicons) {
                font_1.preloadIcons(iconConfigurations).then(function (imageSourceCache) { return _this.setState({ imageSourceCache: imageSourceCache }); });
            }
            return _this;
        }
        Rating.prototype.render = function () {
            if (!this.state.imageSourceCache && this.usesGlyphicons) {
                return null;
            }
            var ratingProps = __assign({ activeOpacity: 1 }, (this.props.animation !== "none" ? { animation: this.props.animation } : {}));
            var disabled = this.props.editable === "never" || this.props.ratingAttribute.readOnly;
            var containerStyle = disabled
                ? [this.styles.container, this.styles.containerDisabled]
                : this.styles.container;
            return (react_1.createElement(react_native_star_rating_1.default, __assign({ maxStars: this.props.maximumValue, rating: Math.round(Number(this.props.ratingAttribute.value)), disabled: disabled, selectedStar: this.onChangeHandler, halfStarEnabled: false, iconSet: undefined, containerStyle: containerStyle, starStyle: this.iconStyle, fullStar: this.props.icon ? this.props.icon.value : this.state.imageSourceCache[fullIcon], emptyStar: this.props.emptyIcon ? this.props.emptyIcon.value : this.state.imageSourceCache[emptyIcon] }, ratingProps)));
        };
        Rating.prototype.onChange = function (rating) {
            if (this.props.ratingAttribute.status === "available") {
                this.props.ratingAttribute.setValue(new big_js_1.Big(rating));
                piw_utils_1.executeAction(this.props.onChange);
            }
        };
        return Rating;
    }(react_1.Component));
    exports.Rating = Rating;
    function processStyles(styles) {
        var keys = ["color", "selectedColor", "size"];
        var _a = styles.icon, selectedColor = _a.selectedColor, color = _a.color, size = _a.size;
        var iconStyle = __assign(__assign({}, styles.icon), { width: size, height: size });
        keys.forEach(function (key) { return delete iconStyle[key]; });
        return {
            color: color,
            selectedColor: selectedColor,
            size: size,
            iconStyle: iconStyle
        };
    }
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),

/***/ "../../../packages-native/rating/src/ui/Styles.ts":
/*!*********************************************************************************************************!*\
  !*** /Users/diego.antonelli/Desktop/projects/widgets-resources/packages-native/rating/src/ui/Styles.ts ***!
  \*********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.defaultRatingStyle = {
        container: {},
        containerDisabled: {
            opacity: 0.5
        },
        icon: {
            size: 40,
            color: "#cccccc",
            selectedColor: "#ffa611"
        }
    };
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),

/***/ "../../../packages-native/rating/src/utils/fonts/Halflings.ts":
/*!*********************************************************************************************************************!*\
  !*** /Users/diego.antonelli/Desktop/projects/widgets-resources/packages-native/rating/src/utils/fonts/Halflings.ts ***!
  \*********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.glyphMap = {
        "glyphicon-star": 57350,
        "glyphicon-star-empty": 57351
    };
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),

/***/ "../../../packages-native/rating/src/utils/fonts/font.ts":
/*!****************************************************************************************************************!*\
  !*** /Users/diego.antonelli/Desktop/projects/widgets-resources/packages-native/rating/src/utils/fonts/font.ts ***!
  \****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(/*! react-native-vector-icons */ "react-native-vector-icons"), __webpack_require__(/*! ./Halflings */ "../../../packages-native/rating/src/utils/fonts/Halflings.ts")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, react_native_vector_icons_1, Halflings_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.GlyphIcon = react_native_vector_icons_1.createIconSet(Halflings_1.glyphMap, "GLYPHICONS Halflings", "glyphicons-halflings-regular.ttf");
    exports.getIcon = function (iconName, size, color) { return __awaiter(void 0, void 0, void 0, function () { return __generator(this, function (_a) {
        return [2, exports.GlyphIcon.getImageSource(iconName, size, color)];
    }); }); };
    exports.preloadIcons = function (icons) { return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_a) {
            return [2, Promise.all(icons.map(function (icon) { return exports.getIcon(icon.name, icon.size, icon.color); })).then(function (imageSources) {
                    return icons.reduce(buildImageCache(imageSources), {});
                })];
        });
    }); };
    var buildImageCache = function (imageSources) { return function (imageSourcesCache, iconConfiguration, index) {
        imageSourcesCache[iconConfiguration.name] = imageSources[index];
        return imageSourcesCache;
    }; };
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

/***/ "big.js":
/*!*************************!*\
  !*** external "big.js" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("big.js");

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

/***/ "react-native-vector-icons":
/*!********************************************!*\
  !*** external "react-native-vector-icons" ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-native-vector-icons");

/***/ })

/******/ });
//# sourceMappingURL=Rating.js.map