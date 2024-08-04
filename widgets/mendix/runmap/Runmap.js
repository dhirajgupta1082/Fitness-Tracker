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
/******/ 	return __webpack_require__(__webpack_require__.s = "../../../../src/Runmap.tsx");
/******/ })
/************************************************************************/
/******/ ({

/***/ "../../../../src/Runmap.tsx":
/*!********************************************************************************************************************************!*\
  !*** C:/Users/Alistair.Crawford/Dropbox (Mendix)/Windows/Documents/Mendix/WidgetTest-main/CustomWidgets/runmap/src/Runmap.tsx ***!
  \********************************************************************************************************************************/
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
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(/*! react */ "react"), __webpack_require__(/*! react-native */ "react-native"), __webpack_require__(/*! react-native-maps */ "react-native-maps")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, react_1, react_native_1, react_native_maps_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    react_native_maps_1 = __importStar(react_native_maps_1);
    var Runmap = (function (_super) {
        __extends(Runmap, _super);
        function Runmap() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.state = {};
            return _this;
        }
        Runmap.prototype.getInitialPoints = function (points) {
            if (points && points.length > 0) {
                var minX_1, maxX_1, minY_1, maxY_1;
                (function (point) {
                    minX_1 = point.latitude;
                    maxX_1 = point.latitude;
                    minY_1 = point.longitude;
                    maxY_1 = point.longitude;
                })(points[0]);
                points.map(function (point) {
                    minX_1 = Math.min(minX_1, point.latitude);
                    maxX_1 = Math.max(maxX_1, point.latitude);
                    minY_1 = Math.min(minY_1, point.longitude);
                    maxY_1 = Math.max(maxY_1, point.longitude);
                });
                var buffer = 15.00;
                var midX = (minX_1 + maxX_1) / 2;
                var midY = (minY_1 + maxY_1) / 2;
                var deltaX = (maxX_1 - minX_1) * ((buffer + 100) / 100);
                var deltaY = (maxY_1 - minY_1) * ((buffer + 100) / 100);
                return {
                    latitude: midX,
                    longitude: midY,
                    latitudeDelta: deltaX,
                    longitudeDelta: deltaY
                };
            }
        };
        Runmap.prototype.render = function () {
            var _a = react_native_1.Dimensions.get('window'), height = _a.height, width = _a.width;
            var points = [];
            if (this.props.locations && this.props.locations.value) {
                var locations = JSON.parse(this.props.locations.value);
                locations.forEach(function (location) {
                    points.push({ latitude: location.latitude, longitude: location.longitude });
                });
            }
            var initialMarkerRegion = this.getInitialPoints(points);
            return (react_1.createElement(react_native_1.View, null,
                react_1.createElement(react_native_maps_1.default, { provider: react_native_maps_1.PROVIDER_GOOGLE, style: { width: width, height: height }, initialRegion: initialMarkerRegion },
                    points.map(function (point, idx) { return (react_1.createElement(react_native_maps_1.Marker, { key: idx, coordinate: { latitude: point.latitude, longitude: point.longitude }, opacity: (idx == 0 || idx == (points.length - 1)) ? 1.1 : 0.0, pinColor: (idx == 0) ? "#40a832" : "#a83232" })); }),
                    react_1.createElement(react_native_maps_1.Polyline, { key: 0, coordinates: points, strokeColor: "#000", strokeWidth: 2 }))));
        };
        return Runmap;
    }(react_1.Component));
    exports.Runmap = Runmap;
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

/***/ }),

/***/ "react-native-maps":
/*!************************************!*\
  !*** external "react-native-maps" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-native-maps");

/***/ })

/******/ });
//# sourceMappingURL=Runmap.js.map