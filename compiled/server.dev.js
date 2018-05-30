require("source-map-support").install();
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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
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
/******/ 	__webpack_require__.p = "/assets/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "../config/app.js":
/*!************************!*\
  !*** ../config/app.js ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var isProduction = exports.isProduction = "development" === 'production';
var isDebug = exports.isDebug = "development" === 'development';
var isClient = exports.isClient = typeof window !== 'undefined';
var GOOGLE_ANALYTICS_ID = exports.GOOGLE_ANALYTICS_ID = process.env.GOOGLE_ANALYTICS_ID || null;
var apiEndpoint = exports.apiEndpoint = isDebug ? 'http://localhost:3001' : 'http://localhost:3001';

/***/ }),

/***/ "../config/secret.js":
/*!***************************!*\
  !*** ../config/secret.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var sessionSecret = exports.sessionSecret = process.env.SESSION_SECRET || 'Your Session Secret goes here';
var sessionId = exports.sessionId = 'sid';

/***/ }),

/***/ "../node_modules/babel-runtime/core-js/array/from.js":
/*!***********************************************************!*\
  !*** ../node_modules/babel-runtime/core-js/array/from.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(/*! core-js/library/fn/array/from */ "../node_modules/core-js/library/fn/array/from.js"), __esModule: true };

/***/ }),

/***/ "../node_modules/babel-runtime/core-js/json/stringify.js":
/*!***************************************************************!*\
  !*** ../node_modules/babel-runtime/core-js/json/stringify.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(/*! core-js/library/fn/json/stringify */ "../node_modules/core-js/library/fn/json/stringify.js"), __esModule: true };

/***/ }),

/***/ "../node_modules/babel-runtime/core-js/object/assign.js":
/*!**************************************************************!*\
  !*** ../node_modules/babel-runtime/core-js/object/assign.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(/*! core-js/library/fn/object/assign */ "../node_modules/core-js/library/fn/object/assign.js"), __esModule: true };

/***/ }),

/***/ "../node_modules/babel-runtime/core-js/object/define-property.js":
/*!***********************************************************************!*\
  !*** ../node_modules/babel-runtime/core-js/object/define-property.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(/*! core-js/library/fn/object/define-property */ "../node_modules/core-js/library/fn/object/define-property.js"), __esModule: true };

/***/ }),

/***/ "../node_modules/babel-runtime/core-js/promise.js":
/*!********************************************************!*\
  !*** ../node_modules/babel-runtime/core-js/promise.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(/*! core-js/library/fn/promise */ "../node_modules/core-js/library/fn/promise.js"), __esModule: true };

/***/ }),

/***/ "../node_modules/babel-runtime/helpers/asyncToGenerator.js":
/*!*****************************************************************!*\
  !*** ../node_modules/babel-runtime/helpers/asyncToGenerator.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _promise = __webpack_require__(/*! ../core-js/promise */ "../node_modules/babel-runtime/core-js/promise.js");

var _promise2 = _interopRequireDefault(_promise);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (fn) {
  return function () {
    var gen = fn.apply(this, arguments);
    return new _promise2.default(function (resolve, reject) {
      function step(key, arg) {
        try {
          var info = gen[key](arg);
          var value = info.value;
        } catch (error) {
          reject(error);
          return;
        }

        if (info.done) {
          resolve(value);
        } else {
          return _promise2.default.resolve(value).then(function (value) {
            step("next", value);
          }, function (err) {
            step("throw", err);
          });
        }
      }

      return step("next");
    });
  };
};

/***/ }),

/***/ "../node_modules/babel-runtime/helpers/defineProperty.js":
/*!***************************************************************!*\
  !*** ../node_modules/babel-runtime/helpers/defineProperty.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _defineProperty = __webpack_require__(/*! ../core-js/object/define-property */ "../node_modules/babel-runtime/core-js/object/define-property.js");

var _defineProperty2 = _interopRequireDefault(_defineProperty);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (obj, key, value) {
  if (key in obj) {
    (0, _defineProperty2.default)(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
};

/***/ }),

/***/ "../node_modules/babel-runtime/helpers/toConsumableArray.js":
/*!******************************************************************!*\
  !*** ../node_modules/babel-runtime/helpers/toConsumableArray.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _from = __webpack_require__(/*! ../core-js/array/from */ "../node_modules/babel-runtime/core-js/array/from.js");

var _from2 = _interopRequireDefault(_from);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (arr) {
  if (Array.isArray(arr)) {
    for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) {
      arr2[i] = arr[i];
    }

    return arr2;
  } else {
    return (0, _from2.default)(arr);
  }
};

/***/ }),

/***/ "../node_modules/babel-runtime/regenerator/index.js":
/*!**********************************************************!*\
  !*** ../node_modules/babel-runtime/regenerator/index.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! regenerator-runtime */ "regenerator-runtime");


/***/ }),

/***/ "../node_modules/core-js/library/fn/array/from.js":
/*!********************************************************!*\
  !*** ../node_modules/core-js/library/fn/array/from.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ../../modules/es6.string.iterator */ "../node_modules/core-js/library/modules/es6.string.iterator.js");
__webpack_require__(/*! ../../modules/es6.array.from */ "../node_modules/core-js/library/modules/es6.array.from.js");
module.exports = __webpack_require__(/*! ../../modules/_core */ "../node_modules/core-js/library/modules/_core.js").Array.from;


/***/ }),

/***/ "../node_modules/core-js/library/fn/json/stringify.js":
/*!************************************************************!*\
  !*** ../node_modules/core-js/library/fn/json/stringify.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var core = __webpack_require__(/*! ../../modules/_core */ "../node_modules/core-js/library/modules/_core.js");
var $JSON = core.JSON || (core.JSON = { stringify: JSON.stringify });
module.exports = function stringify(it) { // eslint-disable-line no-unused-vars
  return $JSON.stringify.apply($JSON, arguments);
};


/***/ }),

/***/ "../node_modules/core-js/library/fn/object/assign.js":
/*!***********************************************************!*\
  !*** ../node_modules/core-js/library/fn/object/assign.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ../../modules/es6.object.assign */ "../node_modules/core-js/library/modules/es6.object.assign.js");
module.exports = __webpack_require__(/*! ../../modules/_core */ "../node_modules/core-js/library/modules/_core.js").Object.assign;


/***/ }),

/***/ "../node_modules/core-js/library/fn/object/define-property.js":
/*!********************************************************************!*\
  !*** ../node_modules/core-js/library/fn/object/define-property.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ../../modules/es6.object.define-property */ "../node_modules/core-js/library/modules/es6.object.define-property.js");
var $Object = __webpack_require__(/*! ../../modules/_core */ "../node_modules/core-js/library/modules/_core.js").Object;
module.exports = function defineProperty(it, key, desc) {
  return $Object.defineProperty(it, key, desc);
};


/***/ }),

/***/ "../node_modules/core-js/library/fn/promise.js":
/*!*****************************************************!*\
  !*** ../node_modules/core-js/library/fn/promise.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ../modules/es6.object.to-string */ "../node_modules/core-js/library/modules/es6.object.to-string.js");
__webpack_require__(/*! ../modules/es6.string.iterator */ "../node_modules/core-js/library/modules/es6.string.iterator.js");
__webpack_require__(/*! ../modules/web.dom.iterable */ "../node_modules/core-js/library/modules/web.dom.iterable.js");
__webpack_require__(/*! ../modules/es6.promise */ "../node_modules/core-js/library/modules/es6.promise.js");
__webpack_require__(/*! ../modules/es7.promise.finally */ "../node_modules/core-js/library/modules/es7.promise.finally.js");
__webpack_require__(/*! ../modules/es7.promise.try */ "../node_modules/core-js/library/modules/es7.promise.try.js");
module.exports = __webpack_require__(/*! ../modules/_core */ "../node_modules/core-js/library/modules/_core.js").Promise;


/***/ }),

/***/ "../node_modules/core-js/library/modules/_a-function.js":
/*!**************************************************************!*\
  !*** ../node_modules/core-js/library/modules/_a-function.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (it) {
  if (typeof it != 'function') throw TypeError(it + ' is not a function!');
  return it;
};


/***/ }),

/***/ "../node_modules/core-js/library/modules/_add-to-unscopables.js":
/*!**********************************************************************!*\
  !*** ../node_modules/core-js/library/modules/_add-to-unscopables.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function () { /* empty */ };


/***/ }),

/***/ "../node_modules/core-js/library/modules/_an-instance.js":
/*!***************************************************************!*\
  !*** ../node_modules/core-js/library/modules/_an-instance.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (it, Constructor, name, forbiddenField) {
  if (!(it instanceof Constructor) || (forbiddenField !== undefined && forbiddenField in it)) {
    throw TypeError(name + ': incorrect invocation!');
  } return it;
};


/***/ }),

/***/ "../node_modules/core-js/library/modules/_an-object.js":
/*!*************************************************************!*\
  !*** ../node_modules/core-js/library/modules/_an-object.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(/*! ./_is-object */ "../node_modules/core-js/library/modules/_is-object.js");
module.exports = function (it) {
  if (!isObject(it)) throw TypeError(it + ' is not an object!');
  return it;
};


/***/ }),

/***/ "../node_modules/core-js/library/modules/_array-includes.js":
/*!******************************************************************!*\
  !*** ../node_modules/core-js/library/modules/_array-includes.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// false -> Array#indexOf
// true  -> Array#includes
var toIObject = __webpack_require__(/*! ./_to-iobject */ "../node_modules/core-js/library/modules/_to-iobject.js");
var toLength = __webpack_require__(/*! ./_to-length */ "../node_modules/core-js/library/modules/_to-length.js");
var toAbsoluteIndex = __webpack_require__(/*! ./_to-absolute-index */ "../node_modules/core-js/library/modules/_to-absolute-index.js");
module.exports = function (IS_INCLUDES) {
  return function ($this, el, fromIndex) {
    var O = toIObject($this);
    var length = toLength(O.length);
    var index = toAbsoluteIndex(fromIndex, length);
    var value;
    // Array#includes uses SameValueZero equality algorithm
    // eslint-disable-next-line no-self-compare
    if (IS_INCLUDES && el != el) while (length > index) {
      value = O[index++];
      // eslint-disable-next-line no-self-compare
      if (value != value) return true;
    // Array#indexOf ignores holes, Array#includes - not
    } else for (;length > index; index++) if (IS_INCLUDES || index in O) {
      if (O[index] === el) return IS_INCLUDES || index || 0;
    } return !IS_INCLUDES && -1;
  };
};


/***/ }),

/***/ "../node_modules/core-js/library/modules/_classof.js":
/*!***********************************************************!*\
  !*** ../node_modules/core-js/library/modules/_classof.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// getting tag from 19.1.3.6 Object.prototype.toString()
var cof = __webpack_require__(/*! ./_cof */ "../node_modules/core-js/library/modules/_cof.js");
var TAG = __webpack_require__(/*! ./_wks */ "../node_modules/core-js/library/modules/_wks.js")('toStringTag');
// ES3 wrong here
var ARG = cof(function () { return arguments; }()) == 'Arguments';

// fallback for IE11 Script Access Denied error
var tryGet = function (it, key) {
  try {
    return it[key];
  } catch (e) { /* empty */ }
};

module.exports = function (it) {
  var O, T, B;
  return it === undefined ? 'Undefined' : it === null ? 'Null'
    // @@toStringTag case
    : typeof (T = tryGet(O = Object(it), TAG)) == 'string' ? T
    // builtinTag case
    : ARG ? cof(O)
    // ES3 arguments fallback
    : (B = cof(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : B;
};


/***/ }),

/***/ "../node_modules/core-js/library/modules/_cof.js":
/*!*******************************************************!*\
  !*** ../node_modules/core-js/library/modules/_cof.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var toString = {}.toString;

module.exports = function (it) {
  return toString.call(it).slice(8, -1);
};


/***/ }),

/***/ "../node_modules/core-js/library/modules/_core.js":
/*!********************************************************!*\
  !*** ../node_modules/core-js/library/modules/_core.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var core = module.exports = { version: '2.5.6' };
if (typeof __e == 'number') __e = core; // eslint-disable-line no-undef


/***/ }),

/***/ "../node_modules/core-js/library/modules/_create-property.js":
/*!*******************************************************************!*\
  !*** ../node_modules/core-js/library/modules/_create-property.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $defineProperty = __webpack_require__(/*! ./_object-dp */ "../node_modules/core-js/library/modules/_object-dp.js");
var createDesc = __webpack_require__(/*! ./_property-desc */ "../node_modules/core-js/library/modules/_property-desc.js");

module.exports = function (object, index, value) {
  if (index in object) $defineProperty.f(object, index, createDesc(0, value));
  else object[index] = value;
};


/***/ }),

/***/ "../node_modules/core-js/library/modules/_ctx.js":
/*!*******************************************************!*\
  !*** ../node_modules/core-js/library/modules/_ctx.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// optional / simple context binding
var aFunction = __webpack_require__(/*! ./_a-function */ "../node_modules/core-js/library/modules/_a-function.js");
module.exports = function (fn, that, length) {
  aFunction(fn);
  if (that === undefined) return fn;
  switch (length) {
    case 1: return function (a) {
      return fn.call(that, a);
    };
    case 2: return function (a, b) {
      return fn.call(that, a, b);
    };
    case 3: return function (a, b, c) {
      return fn.call(that, a, b, c);
    };
  }
  return function (/* ...args */) {
    return fn.apply(that, arguments);
  };
};


/***/ }),

/***/ "../node_modules/core-js/library/modules/_defined.js":
/*!***********************************************************!*\
  !*** ../node_modules/core-js/library/modules/_defined.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// 7.2.1 RequireObjectCoercible(argument)
module.exports = function (it) {
  if (it == undefined) throw TypeError("Can't call method on  " + it);
  return it;
};


/***/ }),

/***/ "../node_modules/core-js/library/modules/_descriptors.js":
/*!***************************************************************!*\
  !*** ../node_modules/core-js/library/modules/_descriptors.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Thank's IE8 for his funny defineProperty
module.exports = !__webpack_require__(/*! ./_fails */ "../node_modules/core-js/library/modules/_fails.js")(function () {
  return Object.defineProperty({}, 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),

/***/ "../node_modules/core-js/library/modules/_dom-create.js":
/*!**************************************************************!*\
  !*** ../node_modules/core-js/library/modules/_dom-create.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(/*! ./_is-object */ "../node_modules/core-js/library/modules/_is-object.js");
var document = __webpack_require__(/*! ./_global */ "../node_modules/core-js/library/modules/_global.js").document;
// typeof document.createElement is 'object' in old IE
var is = isObject(document) && isObject(document.createElement);
module.exports = function (it) {
  return is ? document.createElement(it) : {};
};


/***/ }),

/***/ "../node_modules/core-js/library/modules/_enum-bug-keys.js":
/*!*****************************************************************!*\
  !*** ../node_modules/core-js/library/modules/_enum-bug-keys.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// IE 8- don't enum bug keys
module.exports = (
  'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
).split(',');


/***/ }),

/***/ "../node_modules/core-js/library/modules/_export.js":
/*!**********************************************************!*\
  !*** ../node_modules/core-js/library/modules/_export.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ./_global */ "../node_modules/core-js/library/modules/_global.js");
var core = __webpack_require__(/*! ./_core */ "../node_modules/core-js/library/modules/_core.js");
var ctx = __webpack_require__(/*! ./_ctx */ "../node_modules/core-js/library/modules/_ctx.js");
var hide = __webpack_require__(/*! ./_hide */ "../node_modules/core-js/library/modules/_hide.js");
var has = __webpack_require__(/*! ./_has */ "../node_modules/core-js/library/modules/_has.js");
var PROTOTYPE = 'prototype';

var $export = function (type, name, source) {
  var IS_FORCED = type & $export.F;
  var IS_GLOBAL = type & $export.G;
  var IS_STATIC = type & $export.S;
  var IS_PROTO = type & $export.P;
  var IS_BIND = type & $export.B;
  var IS_WRAP = type & $export.W;
  var exports = IS_GLOBAL ? core : core[name] || (core[name] = {});
  var expProto = exports[PROTOTYPE];
  var target = IS_GLOBAL ? global : IS_STATIC ? global[name] : (global[name] || {})[PROTOTYPE];
  var key, own, out;
  if (IS_GLOBAL) source = name;
  for (key in source) {
    // contains in native
    own = !IS_FORCED && target && target[key] !== undefined;
    if (own && has(exports, key)) continue;
    // export native or passed
    out = own ? target[key] : source[key];
    // prevent global pollution for namespaces
    exports[key] = IS_GLOBAL && typeof target[key] != 'function' ? source[key]
    // bind timers to global for call from export context
    : IS_BIND && own ? ctx(out, global)
    // wrap global constructors for prevent change them in library
    : IS_WRAP && target[key] == out ? (function (C) {
      var F = function (a, b, c) {
        if (this instanceof C) {
          switch (arguments.length) {
            case 0: return new C();
            case 1: return new C(a);
            case 2: return new C(a, b);
          } return new C(a, b, c);
        } return C.apply(this, arguments);
      };
      F[PROTOTYPE] = C[PROTOTYPE];
      return F;
    // make static versions for prototype methods
    })(out) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
    // export proto methods to core.%CONSTRUCTOR%.methods.%NAME%
    if (IS_PROTO) {
      (exports.virtual || (exports.virtual = {}))[key] = out;
      // export proto methods to core.%CONSTRUCTOR%.prototype.%NAME%
      if (type & $export.R && expProto && !expProto[key]) hide(expProto, key, out);
    }
  }
};
// type bitmap
$export.F = 1;   // forced
$export.G = 2;   // global
$export.S = 4;   // static
$export.P = 8;   // proto
$export.B = 16;  // bind
$export.W = 32;  // wrap
$export.U = 64;  // safe
$export.R = 128; // real proto method for `library`
module.exports = $export;


/***/ }),

/***/ "../node_modules/core-js/library/modules/_fails.js":
/*!*********************************************************!*\
  !*** ../node_modules/core-js/library/modules/_fails.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (exec) {
  try {
    return !!exec();
  } catch (e) {
    return true;
  }
};


/***/ }),

/***/ "../node_modules/core-js/library/modules/_for-of.js":
/*!**********************************************************!*\
  !*** ../node_modules/core-js/library/modules/_for-of.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var ctx = __webpack_require__(/*! ./_ctx */ "../node_modules/core-js/library/modules/_ctx.js");
var call = __webpack_require__(/*! ./_iter-call */ "../node_modules/core-js/library/modules/_iter-call.js");
var isArrayIter = __webpack_require__(/*! ./_is-array-iter */ "../node_modules/core-js/library/modules/_is-array-iter.js");
var anObject = __webpack_require__(/*! ./_an-object */ "../node_modules/core-js/library/modules/_an-object.js");
var toLength = __webpack_require__(/*! ./_to-length */ "../node_modules/core-js/library/modules/_to-length.js");
var getIterFn = __webpack_require__(/*! ./core.get-iterator-method */ "../node_modules/core-js/library/modules/core.get-iterator-method.js");
var BREAK = {};
var RETURN = {};
var exports = module.exports = function (iterable, entries, fn, that, ITERATOR) {
  var iterFn = ITERATOR ? function () { return iterable; } : getIterFn(iterable);
  var f = ctx(fn, that, entries ? 2 : 1);
  var index = 0;
  var length, step, iterator, result;
  if (typeof iterFn != 'function') throw TypeError(iterable + ' is not iterable!');
  // fast case for arrays with default iterator
  if (isArrayIter(iterFn)) for (length = toLength(iterable.length); length > index; index++) {
    result = entries ? f(anObject(step = iterable[index])[0], step[1]) : f(iterable[index]);
    if (result === BREAK || result === RETURN) return result;
  } else for (iterator = iterFn.call(iterable); !(step = iterator.next()).done;) {
    result = call(iterator, f, step.value, entries);
    if (result === BREAK || result === RETURN) return result;
  }
};
exports.BREAK = BREAK;
exports.RETURN = RETURN;


/***/ }),

/***/ "../node_modules/core-js/library/modules/_global.js":
/*!**********************************************************!*\
  !*** ../node_modules/core-js/library/modules/_global.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
var global = module.exports = typeof window != 'undefined' && window.Math == Math
  ? window : typeof self != 'undefined' && self.Math == Math ? self
  // eslint-disable-next-line no-new-func
  : Function('return this')();
if (typeof __g == 'number') __g = global; // eslint-disable-line no-undef


/***/ }),

/***/ "../node_modules/core-js/library/modules/_has.js":
/*!*******************************************************!*\
  !*** ../node_modules/core-js/library/modules/_has.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var hasOwnProperty = {}.hasOwnProperty;
module.exports = function (it, key) {
  return hasOwnProperty.call(it, key);
};


/***/ }),

/***/ "../node_modules/core-js/library/modules/_hide.js":
/*!********************************************************!*\
  !*** ../node_modules/core-js/library/modules/_hide.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__(/*! ./_object-dp */ "../node_modules/core-js/library/modules/_object-dp.js");
var createDesc = __webpack_require__(/*! ./_property-desc */ "../node_modules/core-js/library/modules/_property-desc.js");
module.exports = __webpack_require__(/*! ./_descriptors */ "../node_modules/core-js/library/modules/_descriptors.js") ? function (object, key, value) {
  return dP.f(object, key, createDesc(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};


/***/ }),

/***/ "../node_modules/core-js/library/modules/_html.js":
/*!********************************************************!*\
  !*** ../node_modules/core-js/library/modules/_html.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var document = __webpack_require__(/*! ./_global */ "../node_modules/core-js/library/modules/_global.js").document;
module.exports = document && document.documentElement;


/***/ }),

/***/ "../node_modules/core-js/library/modules/_ie8-dom-define.js":
/*!******************************************************************!*\
  !*** ../node_modules/core-js/library/modules/_ie8-dom-define.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = !__webpack_require__(/*! ./_descriptors */ "../node_modules/core-js/library/modules/_descriptors.js") && !__webpack_require__(/*! ./_fails */ "../node_modules/core-js/library/modules/_fails.js")(function () {
  return Object.defineProperty(__webpack_require__(/*! ./_dom-create */ "../node_modules/core-js/library/modules/_dom-create.js")('div'), 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),

/***/ "../node_modules/core-js/library/modules/_invoke.js":
/*!**********************************************************!*\
  !*** ../node_modules/core-js/library/modules/_invoke.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// fast apply, http://jsperf.lnkit.com/fast-apply/5
module.exports = function (fn, args, that) {
  var un = that === undefined;
  switch (args.length) {
    case 0: return un ? fn()
                      : fn.call(that);
    case 1: return un ? fn(args[0])
                      : fn.call(that, args[0]);
    case 2: return un ? fn(args[0], args[1])
                      : fn.call(that, args[0], args[1]);
    case 3: return un ? fn(args[0], args[1], args[2])
                      : fn.call(that, args[0], args[1], args[2]);
    case 4: return un ? fn(args[0], args[1], args[2], args[3])
                      : fn.call(that, args[0], args[1], args[2], args[3]);
  } return fn.apply(that, args);
};


/***/ }),

/***/ "../node_modules/core-js/library/modules/_iobject.js":
/*!***********************************************************!*\
  !*** ../node_modules/core-js/library/modules/_iobject.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// fallback for non-array-like ES3 and non-enumerable old V8 strings
var cof = __webpack_require__(/*! ./_cof */ "../node_modules/core-js/library/modules/_cof.js");
// eslint-disable-next-line no-prototype-builtins
module.exports = Object('z').propertyIsEnumerable(0) ? Object : function (it) {
  return cof(it) == 'String' ? it.split('') : Object(it);
};


/***/ }),

/***/ "../node_modules/core-js/library/modules/_is-array-iter.js":
/*!*****************************************************************!*\
  !*** ../node_modules/core-js/library/modules/_is-array-iter.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// check on default Array iterator
var Iterators = __webpack_require__(/*! ./_iterators */ "../node_modules/core-js/library/modules/_iterators.js");
var ITERATOR = __webpack_require__(/*! ./_wks */ "../node_modules/core-js/library/modules/_wks.js")('iterator');
var ArrayProto = Array.prototype;

module.exports = function (it) {
  return it !== undefined && (Iterators.Array === it || ArrayProto[ITERATOR] === it);
};


/***/ }),

/***/ "../node_modules/core-js/library/modules/_is-object.js":
/*!*************************************************************!*\
  !*** ../node_modules/core-js/library/modules/_is-object.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (it) {
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};


/***/ }),

/***/ "../node_modules/core-js/library/modules/_iter-call.js":
/*!*************************************************************!*\
  !*** ../node_modules/core-js/library/modules/_iter-call.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// call something on iterator step with safe closing on error
var anObject = __webpack_require__(/*! ./_an-object */ "../node_modules/core-js/library/modules/_an-object.js");
module.exports = function (iterator, fn, value, entries) {
  try {
    return entries ? fn(anObject(value)[0], value[1]) : fn(value);
  // 7.4.6 IteratorClose(iterator, completion)
  } catch (e) {
    var ret = iterator['return'];
    if (ret !== undefined) anObject(ret.call(iterator));
    throw e;
  }
};


/***/ }),

/***/ "../node_modules/core-js/library/modules/_iter-create.js":
/*!***************************************************************!*\
  !*** ../node_modules/core-js/library/modules/_iter-create.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var create = __webpack_require__(/*! ./_object-create */ "../node_modules/core-js/library/modules/_object-create.js");
var descriptor = __webpack_require__(/*! ./_property-desc */ "../node_modules/core-js/library/modules/_property-desc.js");
var setToStringTag = __webpack_require__(/*! ./_set-to-string-tag */ "../node_modules/core-js/library/modules/_set-to-string-tag.js");
var IteratorPrototype = {};

// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
__webpack_require__(/*! ./_hide */ "../node_modules/core-js/library/modules/_hide.js")(IteratorPrototype, __webpack_require__(/*! ./_wks */ "../node_modules/core-js/library/modules/_wks.js")('iterator'), function () { return this; });

module.exports = function (Constructor, NAME, next) {
  Constructor.prototype = create(IteratorPrototype, { next: descriptor(1, next) });
  setToStringTag(Constructor, NAME + ' Iterator');
};


/***/ }),

/***/ "../node_modules/core-js/library/modules/_iter-define.js":
/*!***************************************************************!*\
  !*** ../node_modules/core-js/library/modules/_iter-define.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var LIBRARY = __webpack_require__(/*! ./_library */ "../node_modules/core-js/library/modules/_library.js");
var $export = __webpack_require__(/*! ./_export */ "../node_modules/core-js/library/modules/_export.js");
var redefine = __webpack_require__(/*! ./_redefine */ "../node_modules/core-js/library/modules/_redefine.js");
var hide = __webpack_require__(/*! ./_hide */ "../node_modules/core-js/library/modules/_hide.js");
var Iterators = __webpack_require__(/*! ./_iterators */ "../node_modules/core-js/library/modules/_iterators.js");
var $iterCreate = __webpack_require__(/*! ./_iter-create */ "../node_modules/core-js/library/modules/_iter-create.js");
var setToStringTag = __webpack_require__(/*! ./_set-to-string-tag */ "../node_modules/core-js/library/modules/_set-to-string-tag.js");
var getPrototypeOf = __webpack_require__(/*! ./_object-gpo */ "../node_modules/core-js/library/modules/_object-gpo.js");
var ITERATOR = __webpack_require__(/*! ./_wks */ "../node_modules/core-js/library/modules/_wks.js")('iterator');
var BUGGY = !([].keys && 'next' in [].keys()); // Safari has buggy iterators w/o `next`
var FF_ITERATOR = '@@iterator';
var KEYS = 'keys';
var VALUES = 'values';

var returnThis = function () { return this; };

module.exports = function (Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED) {
  $iterCreate(Constructor, NAME, next);
  var getMethod = function (kind) {
    if (!BUGGY && kind in proto) return proto[kind];
    switch (kind) {
      case KEYS: return function keys() { return new Constructor(this, kind); };
      case VALUES: return function values() { return new Constructor(this, kind); };
    } return function entries() { return new Constructor(this, kind); };
  };
  var TAG = NAME + ' Iterator';
  var DEF_VALUES = DEFAULT == VALUES;
  var VALUES_BUG = false;
  var proto = Base.prototype;
  var $native = proto[ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT];
  var $default = $native || getMethod(DEFAULT);
  var $entries = DEFAULT ? !DEF_VALUES ? $default : getMethod('entries') : undefined;
  var $anyNative = NAME == 'Array' ? proto.entries || $native : $native;
  var methods, key, IteratorPrototype;
  // Fix native
  if ($anyNative) {
    IteratorPrototype = getPrototypeOf($anyNative.call(new Base()));
    if (IteratorPrototype !== Object.prototype && IteratorPrototype.next) {
      // Set @@toStringTag to native iterators
      setToStringTag(IteratorPrototype, TAG, true);
      // fix for some old engines
      if (!LIBRARY && typeof IteratorPrototype[ITERATOR] != 'function') hide(IteratorPrototype, ITERATOR, returnThis);
    }
  }
  // fix Array#{values, @@iterator}.name in V8 / FF
  if (DEF_VALUES && $native && $native.name !== VALUES) {
    VALUES_BUG = true;
    $default = function values() { return $native.call(this); };
  }
  // Define iterator
  if ((!LIBRARY || FORCED) && (BUGGY || VALUES_BUG || !proto[ITERATOR])) {
    hide(proto, ITERATOR, $default);
  }
  // Plug for library
  Iterators[NAME] = $default;
  Iterators[TAG] = returnThis;
  if (DEFAULT) {
    methods = {
      values: DEF_VALUES ? $default : getMethod(VALUES),
      keys: IS_SET ? $default : getMethod(KEYS),
      entries: $entries
    };
    if (FORCED) for (key in methods) {
      if (!(key in proto)) redefine(proto, key, methods[key]);
    } else $export($export.P + $export.F * (BUGGY || VALUES_BUG), NAME, methods);
  }
  return methods;
};


/***/ }),

/***/ "../node_modules/core-js/library/modules/_iter-detect.js":
/*!***************************************************************!*\
  !*** ../node_modules/core-js/library/modules/_iter-detect.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var ITERATOR = __webpack_require__(/*! ./_wks */ "../node_modules/core-js/library/modules/_wks.js")('iterator');
var SAFE_CLOSING = false;

try {
  var riter = [7][ITERATOR]();
  riter['return'] = function () { SAFE_CLOSING = true; };
  // eslint-disable-next-line no-throw-literal
  Array.from(riter, function () { throw 2; });
} catch (e) { /* empty */ }

module.exports = function (exec, skipClosing) {
  if (!skipClosing && !SAFE_CLOSING) return false;
  var safe = false;
  try {
    var arr = [7];
    var iter = arr[ITERATOR]();
    iter.next = function () { return { done: safe = true }; };
    arr[ITERATOR] = function () { return iter; };
    exec(arr);
  } catch (e) { /* empty */ }
  return safe;
};


/***/ }),

/***/ "../node_modules/core-js/library/modules/_iter-step.js":
/*!*************************************************************!*\
  !*** ../node_modules/core-js/library/modules/_iter-step.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (done, value) {
  return { value: value, done: !!done };
};


/***/ }),

/***/ "../node_modules/core-js/library/modules/_iterators.js":
/*!*************************************************************!*\
  !*** ../node_modules/core-js/library/modules/_iterators.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {};


/***/ }),

/***/ "../node_modules/core-js/library/modules/_library.js":
/*!***********************************************************!*\
  !*** ../node_modules/core-js/library/modules/_library.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = true;


/***/ }),

/***/ "../node_modules/core-js/library/modules/_microtask.js":
/*!*************************************************************!*\
  !*** ../node_modules/core-js/library/modules/_microtask.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ./_global */ "../node_modules/core-js/library/modules/_global.js");
var macrotask = __webpack_require__(/*! ./_task */ "../node_modules/core-js/library/modules/_task.js").set;
var Observer = global.MutationObserver || global.WebKitMutationObserver;
var process = global.process;
var Promise = global.Promise;
var isNode = __webpack_require__(/*! ./_cof */ "../node_modules/core-js/library/modules/_cof.js")(process) == 'process';

module.exports = function () {
  var head, last, notify;

  var flush = function () {
    var parent, fn;
    if (isNode && (parent = process.domain)) parent.exit();
    while (head) {
      fn = head.fn;
      head = head.next;
      try {
        fn();
      } catch (e) {
        if (head) notify();
        else last = undefined;
        throw e;
      }
    } last = undefined;
    if (parent) parent.enter();
  };

  // Node.js
  if (isNode) {
    notify = function () {
      process.nextTick(flush);
    };
  // browsers with MutationObserver, except iOS Safari - https://github.com/zloirock/core-js/issues/339
  } else if (Observer && !(global.navigator && global.navigator.standalone)) {
    var toggle = true;
    var node = document.createTextNode('');
    new Observer(flush).observe(node, { characterData: true }); // eslint-disable-line no-new
    notify = function () {
      node.data = toggle = !toggle;
    };
  // environments with maybe non-completely correct, but existent Promise
  } else if (Promise && Promise.resolve) {
    // Promise.resolve without an argument throws an error in LG WebOS 2
    var promise = Promise.resolve(undefined);
    notify = function () {
      promise.then(flush);
    };
  // for other environments - macrotask based on:
  // - setImmediate
  // - MessageChannel
  // - window.postMessag
  // - onreadystatechange
  // - setTimeout
  } else {
    notify = function () {
      // strange IE + webpack dev server bug - use .call(global)
      macrotask.call(global, flush);
    };
  }

  return function (fn) {
    var task = { fn: fn, next: undefined };
    if (last) last.next = task;
    if (!head) {
      head = task;
      notify();
    } last = task;
  };
};


/***/ }),

/***/ "../node_modules/core-js/library/modules/_new-promise-capability.js":
/*!**************************************************************************!*\
  !*** ../node_modules/core-js/library/modules/_new-promise-capability.js ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// 25.4.1.5 NewPromiseCapability(C)
var aFunction = __webpack_require__(/*! ./_a-function */ "../node_modules/core-js/library/modules/_a-function.js");

function PromiseCapability(C) {
  var resolve, reject;
  this.promise = new C(function ($$resolve, $$reject) {
    if (resolve !== undefined || reject !== undefined) throw TypeError('Bad Promise constructor');
    resolve = $$resolve;
    reject = $$reject;
  });
  this.resolve = aFunction(resolve);
  this.reject = aFunction(reject);
}

module.exports.f = function (C) {
  return new PromiseCapability(C);
};


/***/ }),

/***/ "../node_modules/core-js/library/modules/_object-assign.js":
/*!*****************************************************************!*\
  !*** ../node_modules/core-js/library/modules/_object-assign.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// 19.1.2.1 Object.assign(target, source, ...)
var getKeys = __webpack_require__(/*! ./_object-keys */ "../node_modules/core-js/library/modules/_object-keys.js");
var gOPS = __webpack_require__(/*! ./_object-gops */ "../node_modules/core-js/library/modules/_object-gops.js");
var pIE = __webpack_require__(/*! ./_object-pie */ "../node_modules/core-js/library/modules/_object-pie.js");
var toObject = __webpack_require__(/*! ./_to-object */ "../node_modules/core-js/library/modules/_to-object.js");
var IObject = __webpack_require__(/*! ./_iobject */ "../node_modules/core-js/library/modules/_iobject.js");
var $assign = Object.assign;

// should work with symbols and should have deterministic property order (V8 bug)
module.exports = !$assign || __webpack_require__(/*! ./_fails */ "../node_modules/core-js/library/modules/_fails.js")(function () {
  var A = {};
  var B = {};
  // eslint-disable-next-line no-undef
  var S = Symbol();
  var K = 'abcdefghijklmnopqrst';
  A[S] = 7;
  K.split('').forEach(function (k) { B[k] = k; });
  return $assign({}, A)[S] != 7 || Object.keys($assign({}, B)).join('') != K;
}) ? function assign(target, source) { // eslint-disable-line no-unused-vars
  var T = toObject(target);
  var aLen = arguments.length;
  var index = 1;
  var getSymbols = gOPS.f;
  var isEnum = pIE.f;
  while (aLen > index) {
    var S = IObject(arguments[index++]);
    var keys = getSymbols ? getKeys(S).concat(getSymbols(S)) : getKeys(S);
    var length = keys.length;
    var j = 0;
    var key;
    while (length > j) if (isEnum.call(S, key = keys[j++])) T[key] = S[key];
  } return T;
} : $assign;


/***/ }),

/***/ "../node_modules/core-js/library/modules/_object-create.js":
/*!*****************************************************************!*\
  !*** ../node_modules/core-js/library/modules/_object-create.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
var anObject = __webpack_require__(/*! ./_an-object */ "../node_modules/core-js/library/modules/_an-object.js");
var dPs = __webpack_require__(/*! ./_object-dps */ "../node_modules/core-js/library/modules/_object-dps.js");
var enumBugKeys = __webpack_require__(/*! ./_enum-bug-keys */ "../node_modules/core-js/library/modules/_enum-bug-keys.js");
var IE_PROTO = __webpack_require__(/*! ./_shared-key */ "../node_modules/core-js/library/modules/_shared-key.js")('IE_PROTO');
var Empty = function () { /* empty */ };
var PROTOTYPE = 'prototype';

// Create object with fake `null` prototype: use iframe Object with cleared prototype
var createDict = function () {
  // Thrash, waste and sodomy: IE GC bug
  var iframe = __webpack_require__(/*! ./_dom-create */ "../node_modules/core-js/library/modules/_dom-create.js")('iframe');
  var i = enumBugKeys.length;
  var lt = '<';
  var gt = '>';
  var iframeDocument;
  iframe.style.display = 'none';
  __webpack_require__(/*! ./_html */ "../node_modules/core-js/library/modules/_html.js").appendChild(iframe);
  iframe.src = 'javascript:'; // eslint-disable-line no-script-url
  // createDict = iframe.contentWindow.Object;
  // html.removeChild(iframe);
  iframeDocument = iframe.contentWindow.document;
  iframeDocument.open();
  iframeDocument.write(lt + 'script' + gt + 'document.F=Object' + lt + '/script' + gt);
  iframeDocument.close();
  createDict = iframeDocument.F;
  while (i--) delete createDict[PROTOTYPE][enumBugKeys[i]];
  return createDict();
};

module.exports = Object.create || function create(O, Properties) {
  var result;
  if (O !== null) {
    Empty[PROTOTYPE] = anObject(O);
    result = new Empty();
    Empty[PROTOTYPE] = null;
    // add "__proto__" for Object.getPrototypeOf polyfill
    result[IE_PROTO] = O;
  } else result = createDict();
  return Properties === undefined ? result : dPs(result, Properties);
};


/***/ }),

/***/ "../node_modules/core-js/library/modules/_object-dp.js":
/*!*************************************************************!*\
  !*** ../node_modules/core-js/library/modules/_object-dp.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__(/*! ./_an-object */ "../node_modules/core-js/library/modules/_an-object.js");
var IE8_DOM_DEFINE = __webpack_require__(/*! ./_ie8-dom-define */ "../node_modules/core-js/library/modules/_ie8-dom-define.js");
var toPrimitive = __webpack_require__(/*! ./_to-primitive */ "../node_modules/core-js/library/modules/_to-primitive.js");
var dP = Object.defineProperty;

exports.f = __webpack_require__(/*! ./_descriptors */ "../node_modules/core-js/library/modules/_descriptors.js") ? Object.defineProperty : function defineProperty(O, P, Attributes) {
  anObject(O);
  P = toPrimitive(P, true);
  anObject(Attributes);
  if (IE8_DOM_DEFINE) try {
    return dP(O, P, Attributes);
  } catch (e) { /* empty */ }
  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported!');
  if ('value' in Attributes) O[P] = Attributes.value;
  return O;
};


/***/ }),

/***/ "../node_modules/core-js/library/modules/_object-dps.js":
/*!**************************************************************!*\
  !*** ../node_modules/core-js/library/modules/_object-dps.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__(/*! ./_object-dp */ "../node_modules/core-js/library/modules/_object-dp.js");
var anObject = __webpack_require__(/*! ./_an-object */ "../node_modules/core-js/library/modules/_an-object.js");
var getKeys = __webpack_require__(/*! ./_object-keys */ "../node_modules/core-js/library/modules/_object-keys.js");

module.exports = __webpack_require__(/*! ./_descriptors */ "../node_modules/core-js/library/modules/_descriptors.js") ? Object.defineProperties : function defineProperties(O, Properties) {
  anObject(O);
  var keys = getKeys(Properties);
  var length = keys.length;
  var i = 0;
  var P;
  while (length > i) dP.f(O, P = keys[i++], Properties[P]);
  return O;
};


/***/ }),

/***/ "../node_modules/core-js/library/modules/_object-gops.js":
/*!***************************************************************!*\
  !*** ../node_modules/core-js/library/modules/_object-gops.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

exports.f = Object.getOwnPropertySymbols;


/***/ }),

/***/ "../node_modules/core-js/library/modules/_object-gpo.js":
/*!**************************************************************!*\
  !*** ../node_modules/core-js/library/modules/_object-gpo.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)
var has = __webpack_require__(/*! ./_has */ "../node_modules/core-js/library/modules/_has.js");
var toObject = __webpack_require__(/*! ./_to-object */ "../node_modules/core-js/library/modules/_to-object.js");
var IE_PROTO = __webpack_require__(/*! ./_shared-key */ "../node_modules/core-js/library/modules/_shared-key.js")('IE_PROTO');
var ObjectProto = Object.prototype;

module.exports = Object.getPrototypeOf || function (O) {
  O = toObject(O);
  if (has(O, IE_PROTO)) return O[IE_PROTO];
  if (typeof O.constructor == 'function' && O instanceof O.constructor) {
    return O.constructor.prototype;
  } return O instanceof Object ? ObjectProto : null;
};


/***/ }),

/***/ "../node_modules/core-js/library/modules/_object-keys-internal.js":
/*!************************************************************************!*\
  !*** ../node_modules/core-js/library/modules/_object-keys-internal.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var has = __webpack_require__(/*! ./_has */ "../node_modules/core-js/library/modules/_has.js");
var toIObject = __webpack_require__(/*! ./_to-iobject */ "../node_modules/core-js/library/modules/_to-iobject.js");
var arrayIndexOf = __webpack_require__(/*! ./_array-includes */ "../node_modules/core-js/library/modules/_array-includes.js")(false);
var IE_PROTO = __webpack_require__(/*! ./_shared-key */ "../node_modules/core-js/library/modules/_shared-key.js")('IE_PROTO');

module.exports = function (object, names) {
  var O = toIObject(object);
  var i = 0;
  var result = [];
  var key;
  for (key in O) if (key != IE_PROTO) has(O, key) && result.push(key);
  // Don't enum bug & hidden keys
  while (names.length > i) if (has(O, key = names[i++])) {
    ~arrayIndexOf(result, key) || result.push(key);
  }
  return result;
};


/***/ }),

/***/ "../node_modules/core-js/library/modules/_object-keys.js":
/*!***************************************************************!*\
  !*** ../node_modules/core-js/library/modules/_object-keys.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.14 / 15.2.3.14 Object.keys(O)
var $keys = __webpack_require__(/*! ./_object-keys-internal */ "../node_modules/core-js/library/modules/_object-keys-internal.js");
var enumBugKeys = __webpack_require__(/*! ./_enum-bug-keys */ "../node_modules/core-js/library/modules/_enum-bug-keys.js");

module.exports = Object.keys || function keys(O) {
  return $keys(O, enumBugKeys);
};


/***/ }),

/***/ "../node_modules/core-js/library/modules/_object-pie.js":
/*!**************************************************************!*\
  !*** ../node_modules/core-js/library/modules/_object-pie.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

exports.f = {}.propertyIsEnumerable;


/***/ }),

/***/ "../node_modules/core-js/library/modules/_perform.js":
/*!***********************************************************!*\
  !*** ../node_modules/core-js/library/modules/_perform.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (exec) {
  try {
    return { e: false, v: exec() };
  } catch (e) {
    return { e: true, v: e };
  }
};


/***/ }),

/***/ "../node_modules/core-js/library/modules/_promise-resolve.js":
/*!*******************************************************************!*\
  !*** ../node_modules/core-js/library/modules/_promise-resolve.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__(/*! ./_an-object */ "../node_modules/core-js/library/modules/_an-object.js");
var isObject = __webpack_require__(/*! ./_is-object */ "../node_modules/core-js/library/modules/_is-object.js");
var newPromiseCapability = __webpack_require__(/*! ./_new-promise-capability */ "../node_modules/core-js/library/modules/_new-promise-capability.js");

module.exports = function (C, x) {
  anObject(C);
  if (isObject(x) && x.constructor === C) return x;
  var promiseCapability = newPromiseCapability.f(C);
  var resolve = promiseCapability.resolve;
  resolve(x);
  return promiseCapability.promise;
};


/***/ }),

/***/ "../node_modules/core-js/library/modules/_property-desc.js":
/*!*****************************************************************!*\
  !*** ../node_modules/core-js/library/modules/_property-desc.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (bitmap, value) {
  return {
    enumerable: !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable: !(bitmap & 4),
    value: value
  };
};


/***/ }),

/***/ "../node_modules/core-js/library/modules/_redefine-all.js":
/*!****************************************************************!*\
  !*** ../node_modules/core-js/library/modules/_redefine-all.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var hide = __webpack_require__(/*! ./_hide */ "../node_modules/core-js/library/modules/_hide.js");
module.exports = function (target, src, safe) {
  for (var key in src) {
    if (safe && target[key]) target[key] = src[key];
    else hide(target, key, src[key]);
  } return target;
};


/***/ }),

/***/ "../node_modules/core-js/library/modules/_redefine.js":
/*!************************************************************!*\
  !*** ../node_modules/core-js/library/modules/_redefine.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./_hide */ "../node_modules/core-js/library/modules/_hide.js");


/***/ }),

/***/ "../node_modules/core-js/library/modules/_set-species.js":
/*!***************************************************************!*\
  !*** ../node_modules/core-js/library/modules/_set-species.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var global = __webpack_require__(/*! ./_global */ "../node_modules/core-js/library/modules/_global.js");
var core = __webpack_require__(/*! ./_core */ "../node_modules/core-js/library/modules/_core.js");
var dP = __webpack_require__(/*! ./_object-dp */ "../node_modules/core-js/library/modules/_object-dp.js");
var DESCRIPTORS = __webpack_require__(/*! ./_descriptors */ "../node_modules/core-js/library/modules/_descriptors.js");
var SPECIES = __webpack_require__(/*! ./_wks */ "../node_modules/core-js/library/modules/_wks.js")('species');

module.exports = function (KEY) {
  var C = typeof core[KEY] == 'function' ? core[KEY] : global[KEY];
  if (DESCRIPTORS && C && !C[SPECIES]) dP.f(C, SPECIES, {
    configurable: true,
    get: function () { return this; }
  });
};


/***/ }),

/***/ "../node_modules/core-js/library/modules/_set-to-string-tag.js":
/*!*********************************************************************!*\
  !*** ../node_modules/core-js/library/modules/_set-to-string-tag.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var def = __webpack_require__(/*! ./_object-dp */ "../node_modules/core-js/library/modules/_object-dp.js").f;
var has = __webpack_require__(/*! ./_has */ "../node_modules/core-js/library/modules/_has.js");
var TAG = __webpack_require__(/*! ./_wks */ "../node_modules/core-js/library/modules/_wks.js")('toStringTag');

module.exports = function (it, tag, stat) {
  if (it && !has(it = stat ? it : it.prototype, TAG)) def(it, TAG, { configurable: true, value: tag });
};


/***/ }),

/***/ "../node_modules/core-js/library/modules/_shared-key.js":
/*!**************************************************************!*\
  !*** ../node_modules/core-js/library/modules/_shared-key.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var shared = __webpack_require__(/*! ./_shared */ "../node_modules/core-js/library/modules/_shared.js")('keys');
var uid = __webpack_require__(/*! ./_uid */ "../node_modules/core-js/library/modules/_uid.js");
module.exports = function (key) {
  return shared[key] || (shared[key] = uid(key));
};


/***/ }),

/***/ "../node_modules/core-js/library/modules/_shared.js":
/*!**********************************************************!*\
  !*** ../node_modules/core-js/library/modules/_shared.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var core = __webpack_require__(/*! ./_core */ "../node_modules/core-js/library/modules/_core.js");
var global = __webpack_require__(/*! ./_global */ "../node_modules/core-js/library/modules/_global.js");
var SHARED = '__core-js_shared__';
var store = global[SHARED] || (global[SHARED] = {});

(module.exports = function (key, value) {
  return store[key] || (store[key] = value !== undefined ? value : {});
})('versions', []).push({
  version: core.version,
  mode: __webpack_require__(/*! ./_library */ "../node_modules/core-js/library/modules/_library.js") ? 'pure' : 'global',
  copyright: '© 2018 Denis Pushkarev (zloirock.ru)'
});


/***/ }),

/***/ "../node_modules/core-js/library/modules/_species-constructor.js":
/*!***********************************************************************!*\
  !*** ../node_modules/core-js/library/modules/_species-constructor.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 7.3.20 SpeciesConstructor(O, defaultConstructor)
var anObject = __webpack_require__(/*! ./_an-object */ "../node_modules/core-js/library/modules/_an-object.js");
var aFunction = __webpack_require__(/*! ./_a-function */ "../node_modules/core-js/library/modules/_a-function.js");
var SPECIES = __webpack_require__(/*! ./_wks */ "../node_modules/core-js/library/modules/_wks.js")('species');
module.exports = function (O, D) {
  var C = anObject(O).constructor;
  var S;
  return C === undefined || (S = anObject(C)[SPECIES]) == undefined ? D : aFunction(S);
};


/***/ }),

/***/ "../node_modules/core-js/library/modules/_string-at.js":
/*!*************************************************************!*\
  !*** ../node_modules/core-js/library/modules/_string-at.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(/*! ./_to-integer */ "../node_modules/core-js/library/modules/_to-integer.js");
var defined = __webpack_require__(/*! ./_defined */ "../node_modules/core-js/library/modules/_defined.js");
// true  -> String#at
// false -> String#codePointAt
module.exports = function (TO_STRING) {
  return function (that, pos) {
    var s = String(defined(that));
    var i = toInteger(pos);
    var l = s.length;
    var a, b;
    if (i < 0 || i >= l) return TO_STRING ? '' : undefined;
    a = s.charCodeAt(i);
    return a < 0xd800 || a > 0xdbff || i + 1 === l || (b = s.charCodeAt(i + 1)) < 0xdc00 || b > 0xdfff
      ? TO_STRING ? s.charAt(i) : a
      : TO_STRING ? s.slice(i, i + 2) : (a - 0xd800 << 10) + (b - 0xdc00) + 0x10000;
  };
};


/***/ }),

/***/ "../node_modules/core-js/library/modules/_task.js":
/*!********************************************************!*\
  !*** ../node_modules/core-js/library/modules/_task.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var ctx = __webpack_require__(/*! ./_ctx */ "../node_modules/core-js/library/modules/_ctx.js");
var invoke = __webpack_require__(/*! ./_invoke */ "../node_modules/core-js/library/modules/_invoke.js");
var html = __webpack_require__(/*! ./_html */ "../node_modules/core-js/library/modules/_html.js");
var cel = __webpack_require__(/*! ./_dom-create */ "../node_modules/core-js/library/modules/_dom-create.js");
var global = __webpack_require__(/*! ./_global */ "../node_modules/core-js/library/modules/_global.js");
var process = global.process;
var setTask = global.setImmediate;
var clearTask = global.clearImmediate;
var MessageChannel = global.MessageChannel;
var Dispatch = global.Dispatch;
var counter = 0;
var queue = {};
var ONREADYSTATECHANGE = 'onreadystatechange';
var defer, channel, port;
var run = function () {
  var id = +this;
  // eslint-disable-next-line no-prototype-builtins
  if (queue.hasOwnProperty(id)) {
    var fn = queue[id];
    delete queue[id];
    fn();
  }
};
var listener = function (event) {
  run.call(event.data);
};
// Node.js 0.9+ & IE10+ has setImmediate, otherwise:
if (!setTask || !clearTask) {
  setTask = function setImmediate(fn) {
    var args = [];
    var i = 1;
    while (arguments.length > i) args.push(arguments[i++]);
    queue[++counter] = function () {
      // eslint-disable-next-line no-new-func
      invoke(typeof fn == 'function' ? fn : Function(fn), args);
    };
    defer(counter);
    return counter;
  };
  clearTask = function clearImmediate(id) {
    delete queue[id];
  };
  // Node.js 0.8-
  if (__webpack_require__(/*! ./_cof */ "../node_modules/core-js/library/modules/_cof.js")(process) == 'process') {
    defer = function (id) {
      process.nextTick(ctx(run, id, 1));
    };
  // Sphere (JS game engine) Dispatch API
  } else if (Dispatch && Dispatch.now) {
    defer = function (id) {
      Dispatch.now(ctx(run, id, 1));
    };
  // Browsers with MessageChannel, includes WebWorkers
  } else if (MessageChannel) {
    channel = new MessageChannel();
    port = channel.port2;
    channel.port1.onmessage = listener;
    defer = ctx(port.postMessage, port, 1);
  // Browsers with postMessage, skip WebWorkers
  // IE8 has postMessage, but it's sync & typeof its postMessage is 'object'
  } else if (global.addEventListener && typeof postMessage == 'function' && !global.importScripts) {
    defer = function (id) {
      global.postMessage(id + '', '*');
    };
    global.addEventListener('message', listener, false);
  // IE8-
  } else if (ONREADYSTATECHANGE in cel('script')) {
    defer = function (id) {
      html.appendChild(cel('script'))[ONREADYSTATECHANGE] = function () {
        html.removeChild(this);
        run.call(id);
      };
    };
  // Rest old browsers
  } else {
    defer = function (id) {
      setTimeout(ctx(run, id, 1), 0);
    };
  }
}
module.exports = {
  set: setTask,
  clear: clearTask
};


/***/ }),

/***/ "../node_modules/core-js/library/modules/_to-absolute-index.js":
/*!*********************************************************************!*\
  !*** ../node_modules/core-js/library/modules/_to-absolute-index.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(/*! ./_to-integer */ "../node_modules/core-js/library/modules/_to-integer.js");
var max = Math.max;
var min = Math.min;
module.exports = function (index, length) {
  index = toInteger(index);
  return index < 0 ? max(index + length, 0) : min(index, length);
};


/***/ }),

/***/ "../node_modules/core-js/library/modules/_to-integer.js":
/*!**************************************************************!*\
  !*** ../node_modules/core-js/library/modules/_to-integer.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// 7.1.4 ToInteger
var ceil = Math.ceil;
var floor = Math.floor;
module.exports = function (it) {
  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
};


/***/ }),

/***/ "../node_modules/core-js/library/modules/_to-iobject.js":
/*!**************************************************************!*\
  !*** ../node_modules/core-js/library/modules/_to-iobject.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// to indexed object, toObject with fallback for non-array-like ES3 strings
var IObject = __webpack_require__(/*! ./_iobject */ "../node_modules/core-js/library/modules/_iobject.js");
var defined = __webpack_require__(/*! ./_defined */ "../node_modules/core-js/library/modules/_defined.js");
module.exports = function (it) {
  return IObject(defined(it));
};


/***/ }),

/***/ "../node_modules/core-js/library/modules/_to-length.js":
/*!*************************************************************!*\
  !*** ../node_modules/core-js/library/modules/_to-length.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.15 ToLength
var toInteger = __webpack_require__(/*! ./_to-integer */ "../node_modules/core-js/library/modules/_to-integer.js");
var min = Math.min;
module.exports = function (it) {
  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
};


/***/ }),

/***/ "../node_modules/core-js/library/modules/_to-object.js":
/*!*************************************************************!*\
  !*** ../node_modules/core-js/library/modules/_to-object.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.13 ToObject(argument)
var defined = __webpack_require__(/*! ./_defined */ "../node_modules/core-js/library/modules/_defined.js");
module.exports = function (it) {
  return Object(defined(it));
};


/***/ }),

/***/ "../node_modules/core-js/library/modules/_to-primitive.js":
/*!****************************************************************!*\
  !*** ../node_modules/core-js/library/modules/_to-primitive.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.1 ToPrimitive(input [, PreferredType])
var isObject = __webpack_require__(/*! ./_is-object */ "../node_modules/core-js/library/modules/_is-object.js");
// instead of the ES6 spec version, we didn't implement @@toPrimitive case
// and the second argument - flag - preferred type is a string
module.exports = function (it, S) {
  if (!isObject(it)) return it;
  var fn, val;
  if (S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  if (typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it))) return val;
  if (!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  throw TypeError("Can't convert object to primitive value");
};


/***/ }),

/***/ "../node_modules/core-js/library/modules/_uid.js":
/*!*******************************************************!*\
  !*** ../node_modules/core-js/library/modules/_uid.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var id = 0;
var px = Math.random();
module.exports = function (key) {
  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
};


/***/ }),

/***/ "../node_modules/core-js/library/modules/_user-agent.js":
/*!**************************************************************!*\
  !*** ../node_modules/core-js/library/modules/_user-agent.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ./_global */ "../node_modules/core-js/library/modules/_global.js");
var navigator = global.navigator;

module.exports = navigator && navigator.userAgent || '';


/***/ }),

/***/ "../node_modules/core-js/library/modules/_wks.js":
/*!*******************************************************!*\
  !*** ../node_modules/core-js/library/modules/_wks.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var store = __webpack_require__(/*! ./_shared */ "../node_modules/core-js/library/modules/_shared.js")('wks');
var uid = __webpack_require__(/*! ./_uid */ "../node_modules/core-js/library/modules/_uid.js");
var Symbol = __webpack_require__(/*! ./_global */ "../node_modules/core-js/library/modules/_global.js").Symbol;
var USE_SYMBOL = typeof Symbol == 'function';

var $exports = module.exports = function (name) {
  return store[name] || (store[name] =
    USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : uid)('Symbol.' + name));
};

$exports.store = store;


/***/ }),

/***/ "../node_modules/core-js/library/modules/core.get-iterator-method.js":
/*!***************************************************************************!*\
  !*** ../node_modules/core-js/library/modules/core.get-iterator-method.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var classof = __webpack_require__(/*! ./_classof */ "../node_modules/core-js/library/modules/_classof.js");
var ITERATOR = __webpack_require__(/*! ./_wks */ "../node_modules/core-js/library/modules/_wks.js")('iterator');
var Iterators = __webpack_require__(/*! ./_iterators */ "../node_modules/core-js/library/modules/_iterators.js");
module.exports = __webpack_require__(/*! ./_core */ "../node_modules/core-js/library/modules/_core.js").getIteratorMethod = function (it) {
  if (it != undefined) return it[ITERATOR]
    || it['@@iterator']
    || Iterators[classof(it)];
};


/***/ }),

/***/ "../node_modules/core-js/library/modules/es6.array.from.js":
/*!*****************************************************************!*\
  !*** ../node_modules/core-js/library/modules/es6.array.from.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var ctx = __webpack_require__(/*! ./_ctx */ "../node_modules/core-js/library/modules/_ctx.js");
var $export = __webpack_require__(/*! ./_export */ "../node_modules/core-js/library/modules/_export.js");
var toObject = __webpack_require__(/*! ./_to-object */ "../node_modules/core-js/library/modules/_to-object.js");
var call = __webpack_require__(/*! ./_iter-call */ "../node_modules/core-js/library/modules/_iter-call.js");
var isArrayIter = __webpack_require__(/*! ./_is-array-iter */ "../node_modules/core-js/library/modules/_is-array-iter.js");
var toLength = __webpack_require__(/*! ./_to-length */ "../node_modules/core-js/library/modules/_to-length.js");
var createProperty = __webpack_require__(/*! ./_create-property */ "../node_modules/core-js/library/modules/_create-property.js");
var getIterFn = __webpack_require__(/*! ./core.get-iterator-method */ "../node_modules/core-js/library/modules/core.get-iterator-method.js");

$export($export.S + $export.F * !__webpack_require__(/*! ./_iter-detect */ "../node_modules/core-js/library/modules/_iter-detect.js")(function (iter) { Array.from(iter); }), 'Array', {
  // 22.1.2.1 Array.from(arrayLike, mapfn = undefined, thisArg = undefined)
  from: function from(arrayLike /* , mapfn = undefined, thisArg = undefined */) {
    var O = toObject(arrayLike);
    var C = typeof this == 'function' ? this : Array;
    var aLen = arguments.length;
    var mapfn = aLen > 1 ? arguments[1] : undefined;
    var mapping = mapfn !== undefined;
    var index = 0;
    var iterFn = getIterFn(O);
    var length, result, step, iterator;
    if (mapping) mapfn = ctx(mapfn, aLen > 2 ? arguments[2] : undefined, 2);
    // if object isn't iterable or it's array with default iterator - use simple case
    if (iterFn != undefined && !(C == Array && isArrayIter(iterFn))) {
      for (iterator = iterFn.call(O), result = new C(); !(step = iterator.next()).done; index++) {
        createProperty(result, index, mapping ? call(iterator, mapfn, [step.value, index], true) : step.value);
      }
    } else {
      length = toLength(O.length);
      for (result = new C(length); length > index; index++) {
        createProperty(result, index, mapping ? mapfn(O[index], index) : O[index]);
      }
    }
    result.length = index;
    return result;
  }
});


/***/ }),

/***/ "../node_modules/core-js/library/modules/es6.array.iterator.js":
/*!*********************************************************************!*\
  !*** ../node_modules/core-js/library/modules/es6.array.iterator.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var addToUnscopables = __webpack_require__(/*! ./_add-to-unscopables */ "../node_modules/core-js/library/modules/_add-to-unscopables.js");
var step = __webpack_require__(/*! ./_iter-step */ "../node_modules/core-js/library/modules/_iter-step.js");
var Iterators = __webpack_require__(/*! ./_iterators */ "../node_modules/core-js/library/modules/_iterators.js");
var toIObject = __webpack_require__(/*! ./_to-iobject */ "../node_modules/core-js/library/modules/_to-iobject.js");

// 22.1.3.4 Array.prototype.entries()
// 22.1.3.13 Array.prototype.keys()
// 22.1.3.29 Array.prototype.values()
// 22.1.3.30 Array.prototype[@@iterator]()
module.exports = __webpack_require__(/*! ./_iter-define */ "../node_modules/core-js/library/modules/_iter-define.js")(Array, 'Array', function (iterated, kind) {
  this._t = toIObject(iterated); // target
  this._i = 0;                   // next index
  this._k = kind;                // kind
// 22.1.5.2.1 %ArrayIteratorPrototype%.next()
}, function () {
  var O = this._t;
  var kind = this._k;
  var index = this._i++;
  if (!O || index >= O.length) {
    this._t = undefined;
    return step(1);
  }
  if (kind == 'keys') return step(0, index);
  if (kind == 'values') return step(0, O[index]);
  return step(0, [index, O[index]]);
}, 'values');

// argumentsList[@@iterator] is %ArrayProto_values% (9.4.4.6, 9.4.4.7)
Iterators.Arguments = Iterators.Array;

addToUnscopables('keys');
addToUnscopables('values');
addToUnscopables('entries');


/***/ }),

/***/ "../node_modules/core-js/library/modules/es6.object.assign.js":
/*!********************************************************************!*\
  !*** ../node_modules/core-js/library/modules/es6.object.assign.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.3.1 Object.assign(target, source)
var $export = __webpack_require__(/*! ./_export */ "../node_modules/core-js/library/modules/_export.js");

$export($export.S + $export.F, 'Object', { assign: __webpack_require__(/*! ./_object-assign */ "../node_modules/core-js/library/modules/_object-assign.js") });


/***/ }),

/***/ "../node_modules/core-js/library/modules/es6.object.define-property.js":
/*!*****************************************************************************!*\
  !*** ../node_modules/core-js/library/modules/es6.object.define-property.js ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var $export = __webpack_require__(/*! ./_export */ "../node_modules/core-js/library/modules/_export.js");
// 19.1.2.4 / 15.2.3.6 Object.defineProperty(O, P, Attributes)
$export($export.S + $export.F * !__webpack_require__(/*! ./_descriptors */ "../node_modules/core-js/library/modules/_descriptors.js"), 'Object', { defineProperty: __webpack_require__(/*! ./_object-dp */ "../node_modules/core-js/library/modules/_object-dp.js").f });


/***/ }),

/***/ "../node_modules/core-js/library/modules/es6.object.to-string.js":
/*!***********************************************************************!*\
  !*** ../node_modules/core-js/library/modules/es6.object.to-string.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "../node_modules/core-js/library/modules/es6.promise.js":
/*!**************************************************************!*\
  !*** ../node_modules/core-js/library/modules/es6.promise.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var LIBRARY = __webpack_require__(/*! ./_library */ "../node_modules/core-js/library/modules/_library.js");
var global = __webpack_require__(/*! ./_global */ "../node_modules/core-js/library/modules/_global.js");
var ctx = __webpack_require__(/*! ./_ctx */ "../node_modules/core-js/library/modules/_ctx.js");
var classof = __webpack_require__(/*! ./_classof */ "../node_modules/core-js/library/modules/_classof.js");
var $export = __webpack_require__(/*! ./_export */ "../node_modules/core-js/library/modules/_export.js");
var isObject = __webpack_require__(/*! ./_is-object */ "../node_modules/core-js/library/modules/_is-object.js");
var aFunction = __webpack_require__(/*! ./_a-function */ "../node_modules/core-js/library/modules/_a-function.js");
var anInstance = __webpack_require__(/*! ./_an-instance */ "../node_modules/core-js/library/modules/_an-instance.js");
var forOf = __webpack_require__(/*! ./_for-of */ "../node_modules/core-js/library/modules/_for-of.js");
var speciesConstructor = __webpack_require__(/*! ./_species-constructor */ "../node_modules/core-js/library/modules/_species-constructor.js");
var task = __webpack_require__(/*! ./_task */ "../node_modules/core-js/library/modules/_task.js").set;
var microtask = __webpack_require__(/*! ./_microtask */ "../node_modules/core-js/library/modules/_microtask.js")();
var newPromiseCapabilityModule = __webpack_require__(/*! ./_new-promise-capability */ "../node_modules/core-js/library/modules/_new-promise-capability.js");
var perform = __webpack_require__(/*! ./_perform */ "../node_modules/core-js/library/modules/_perform.js");
var userAgent = __webpack_require__(/*! ./_user-agent */ "../node_modules/core-js/library/modules/_user-agent.js");
var promiseResolve = __webpack_require__(/*! ./_promise-resolve */ "../node_modules/core-js/library/modules/_promise-resolve.js");
var PROMISE = 'Promise';
var TypeError = global.TypeError;
var process = global.process;
var versions = process && process.versions;
var v8 = versions && versions.v8 || '';
var $Promise = global[PROMISE];
var isNode = classof(process) == 'process';
var empty = function () { /* empty */ };
var Internal, newGenericPromiseCapability, OwnPromiseCapability, Wrapper;
var newPromiseCapability = newGenericPromiseCapability = newPromiseCapabilityModule.f;

var USE_NATIVE = !!function () {
  try {
    // correct subclassing with @@species support
    var promise = $Promise.resolve(1);
    var FakePromise = (promise.constructor = {})[__webpack_require__(/*! ./_wks */ "../node_modules/core-js/library/modules/_wks.js")('species')] = function (exec) {
      exec(empty, empty);
    };
    // unhandled rejections tracking support, NodeJS Promise without it fails @@species test
    return (isNode || typeof PromiseRejectionEvent == 'function')
      && promise.then(empty) instanceof FakePromise
      // v8 6.6 (Node 10 and Chrome 66) have a bug with resolving custom thenables
      // https://bugs.chromium.org/p/chromium/issues/detail?id=830565
      // we can't detect it synchronously, so just check versions
      && v8.indexOf('6.6') !== 0
      && userAgent.indexOf('Chrome/66') === -1;
  } catch (e) { /* empty */ }
}();

// helpers
var isThenable = function (it) {
  var then;
  return isObject(it) && typeof (then = it.then) == 'function' ? then : false;
};
var notify = function (promise, isReject) {
  if (promise._n) return;
  promise._n = true;
  var chain = promise._c;
  microtask(function () {
    var value = promise._v;
    var ok = promise._s == 1;
    var i = 0;
    var run = function (reaction) {
      var handler = ok ? reaction.ok : reaction.fail;
      var resolve = reaction.resolve;
      var reject = reaction.reject;
      var domain = reaction.domain;
      var result, then, exited;
      try {
        if (handler) {
          if (!ok) {
            if (promise._h == 2) onHandleUnhandled(promise);
            promise._h = 1;
          }
          if (handler === true) result = value;
          else {
            if (domain) domain.enter();
            result = handler(value); // may throw
            if (domain) {
              domain.exit();
              exited = true;
            }
          }
          if (result === reaction.promise) {
            reject(TypeError('Promise-chain cycle'));
          } else if (then = isThenable(result)) {
            then.call(result, resolve, reject);
          } else resolve(result);
        } else reject(value);
      } catch (e) {
        if (domain && !exited) domain.exit();
        reject(e);
      }
    };
    while (chain.length > i) run(chain[i++]); // variable length - can't use forEach
    promise._c = [];
    promise._n = false;
    if (isReject && !promise._h) onUnhandled(promise);
  });
};
var onUnhandled = function (promise) {
  task.call(global, function () {
    var value = promise._v;
    var unhandled = isUnhandled(promise);
    var result, handler, console;
    if (unhandled) {
      result = perform(function () {
        if (isNode) {
          process.emit('unhandledRejection', value, promise);
        } else if (handler = global.onunhandledrejection) {
          handler({ promise: promise, reason: value });
        } else if ((console = global.console) && console.error) {
          console.error('Unhandled promise rejection', value);
        }
      });
      // Browsers should not trigger `rejectionHandled` event if it was handled here, NodeJS - should
      promise._h = isNode || isUnhandled(promise) ? 2 : 1;
    } promise._a = undefined;
    if (unhandled && result.e) throw result.v;
  });
};
var isUnhandled = function (promise) {
  return promise._h !== 1 && (promise._a || promise._c).length === 0;
};
var onHandleUnhandled = function (promise) {
  task.call(global, function () {
    var handler;
    if (isNode) {
      process.emit('rejectionHandled', promise);
    } else if (handler = global.onrejectionhandled) {
      handler({ promise: promise, reason: promise._v });
    }
  });
};
var $reject = function (value) {
  var promise = this;
  if (promise._d) return;
  promise._d = true;
  promise = promise._w || promise; // unwrap
  promise._v = value;
  promise._s = 2;
  if (!promise._a) promise._a = promise._c.slice();
  notify(promise, true);
};
var $resolve = function (value) {
  var promise = this;
  var then;
  if (promise._d) return;
  promise._d = true;
  promise = promise._w || promise; // unwrap
  try {
    if (promise === value) throw TypeError("Promise can't be resolved itself");
    if (then = isThenable(value)) {
      microtask(function () {
        var wrapper = { _w: promise, _d: false }; // wrap
        try {
          then.call(value, ctx($resolve, wrapper, 1), ctx($reject, wrapper, 1));
        } catch (e) {
          $reject.call(wrapper, e);
        }
      });
    } else {
      promise._v = value;
      promise._s = 1;
      notify(promise, false);
    }
  } catch (e) {
    $reject.call({ _w: promise, _d: false }, e); // wrap
  }
};

// constructor polyfill
if (!USE_NATIVE) {
  // 25.4.3.1 Promise(executor)
  $Promise = function Promise(executor) {
    anInstance(this, $Promise, PROMISE, '_h');
    aFunction(executor);
    Internal.call(this);
    try {
      executor(ctx($resolve, this, 1), ctx($reject, this, 1));
    } catch (err) {
      $reject.call(this, err);
    }
  };
  // eslint-disable-next-line no-unused-vars
  Internal = function Promise(executor) {
    this._c = [];             // <- awaiting reactions
    this._a = undefined;      // <- checked in isUnhandled reactions
    this._s = 0;              // <- state
    this._d = false;          // <- done
    this._v = undefined;      // <- value
    this._h = 0;              // <- rejection state, 0 - default, 1 - handled, 2 - unhandled
    this._n = false;          // <- notify
  };
  Internal.prototype = __webpack_require__(/*! ./_redefine-all */ "../node_modules/core-js/library/modules/_redefine-all.js")($Promise.prototype, {
    // 25.4.5.3 Promise.prototype.then(onFulfilled, onRejected)
    then: function then(onFulfilled, onRejected) {
      var reaction = newPromiseCapability(speciesConstructor(this, $Promise));
      reaction.ok = typeof onFulfilled == 'function' ? onFulfilled : true;
      reaction.fail = typeof onRejected == 'function' && onRejected;
      reaction.domain = isNode ? process.domain : undefined;
      this._c.push(reaction);
      if (this._a) this._a.push(reaction);
      if (this._s) notify(this, false);
      return reaction.promise;
    },
    // 25.4.5.1 Promise.prototype.catch(onRejected)
    'catch': function (onRejected) {
      return this.then(undefined, onRejected);
    }
  });
  OwnPromiseCapability = function () {
    var promise = new Internal();
    this.promise = promise;
    this.resolve = ctx($resolve, promise, 1);
    this.reject = ctx($reject, promise, 1);
  };
  newPromiseCapabilityModule.f = newPromiseCapability = function (C) {
    return C === $Promise || C === Wrapper
      ? new OwnPromiseCapability(C)
      : newGenericPromiseCapability(C);
  };
}

$export($export.G + $export.W + $export.F * !USE_NATIVE, { Promise: $Promise });
__webpack_require__(/*! ./_set-to-string-tag */ "../node_modules/core-js/library/modules/_set-to-string-tag.js")($Promise, PROMISE);
__webpack_require__(/*! ./_set-species */ "../node_modules/core-js/library/modules/_set-species.js")(PROMISE);
Wrapper = __webpack_require__(/*! ./_core */ "../node_modules/core-js/library/modules/_core.js")[PROMISE];

// statics
$export($export.S + $export.F * !USE_NATIVE, PROMISE, {
  // 25.4.4.5 Promise.reject(r)
  reject: function reject(r) {
    var capability = newPromiseCapability(this);
    var $$reject = capability.reject;
    $$reject(r);
    return capability.promise;
  }
});
$export($export.S + $export.F * (LIBRARY || !USE_NATIVE), PROMISE, {
  // 25.4.4.6 Promise.resolve(x)
  resolve: function resolve(x) {
    return promiseResolve(LIBRARY && this === Wrapper ? $Promise : this, x);
  }
});
$export($export.S + $export.F * !(USE_NATIVE && __webpack_require__(/*! ./_iter-detect */ "../node_modules/core-js/library/modules/_iter-detect.js")(function (iter) {
  $Promise.all(iter)['catch'](empty);
})), PROMISE, {
  // 25.4.4.1 Promise.all(iterable)
  all: function all(iterable) {
    var C = this;
    var capability = newPromiseCapability(C);
    var resolve = capability.resolve;
    var reject = capability.reject;
    var result = perform(function () {
      var values = [];
      var index = 0;
      var remaining = 1;
      forOf(iterable, false, function (promise) {
        var $index = index++;
        var alreadyCalled = false;
        values.push(undefined);
        remaining++;
        C.resolve(promise).then(function (value) {
          if (alreadyCalled) return;
          alreadyCalled = true;
          values[$index] = value;
          --remaining || resolve(values);
        }, reject);
      });
      --remaining || resolve(values);
    });
    if (result.e) reject(result.v);
    return capability.promise;
  },
  // 25.4.4.4 Promise.race(iterable)
  race: function race(iterable) {
    var C = this;
    var capability = newPromiseCapability(C);
    var reject = capability.reject;
    var result = perform(function () {
      forOf(iterable, false, function (promise) {
        C.resolve(promise).then(capability.resolve, reject);
      });
    });
    if (result.e) reject(result.v);
    return capability.promise;
  }
});


/***/ }),

/***/ "../node_modules/core-js/library/modules/es6.string.iterator.js":
/*!**********************************************************************!*\
  !*** ../node_modules/core-js/library/modules/es6.string.iterator.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $at = __webpack_require__(/*! ./_string-at */ "../node_modules/core-js/library/modules/_string-at.js")(true);

// 21.1.3.27 String.prototype[@@iterator]()
__webpack_require__(/*! ./_iter-define */ "../node_modules/core-js/library/modules/_iter-define.js")(String, 'String', function (iterated) {
  this._t = String(iterated); // target
  this._i = 0;                // next index
// 21.1.5.2.1 %StringIteratorPrototype%.next()
}, function () {
  var O = this._t;
  var index = this._i;
  var point;
  if (index >= O.length) return { value: undefined, done: true };
  point = $at(O, index);
  this._i += point.length;
  return { value: point, done: false };
});


/***/ }),

/***/ "../node_modules/core-js/library/modules/es7.promise.finally.js":
/*!**********************************************************************!*\
  !*** ../node_modules/core-js/library/modules/es7.promise.finally.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// https://github.com/tc39/proposal-promise-finally

var $export = __webpack_require__(/*! ./_export */ "../node_modules/core-js/library/modules/_export.js");
var core = __webpack_require__(/*! ./_core */ "../node_modules/core-js/library/modules/_core.js");
var global = __webpack_require__(/*! ./_global */ "../node_modules/core-js/library/modules/_global.js");
var speciesConstructor = __webpack_require__(/*! ./_species-constructor */ "../node_modules/core-js/library/modules/_species-constructor.js");
var promiseResolve = __webpack_require__(/*! ./_promise-resolve */ "../node_modules/core-js/library/modules/_promise-resolve.js");

$export($export.P + $export.R, 'Promise', { 'finally': function (onFinally) {
  var C = speciesConstructor(this, core.Promise || global.Promise);
  var isFunction = typeof onFinally == 'function';
  return this.then(
    isFunction ? function (x) {
      return promiseResolve(C, onFinally()).then(function () { return x; });
    } : onFinally,
    isFunction ? function (e) {
      return promiseResolve(C, onFinally()).then(function () { throw e; });
    } : onFinally
  );
} });


/***/ }),

/***/ "../node_modules/core-js/library/modules/es7.promise.try.js":
/*!******************************************************************!*\
  !*** ../node_modules/core-js/library/modules/es7.promise.try.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// https://github.com/tc39/proposal-promise-try
var $export = __webpack_require__(/*! ./_export */ "../node_modules/core-js/library/modules/_export.js");
var newPromiseCapability = __webpack_require__(/*! ./_new-promise-capability */ "../node_modules/core-js/library/modules/_new-promise-capability.js");
var perform = __webpack_require__(/*! ./_perform */ "../node_modules/core-js/library/modules/_perform.js");

$export($export.S, 'Promise', { 'try': function (callbackfn) {
  var promiseCapability = newPromiseCapability.f(this);
  var result = perform(callbackfn);
  (result.e ? promiseCapability.reject : promiseCapability.resolve)(result.v);
  return promiseCapability.promise;
} });


/***/ }),

/***/ "../node_modules/core-js/library/modules/web.dom.iterable.js":
/*!*******************************************************************!*\
  !*** ../node_modules/core-js/library/modules/web.dom.iterable.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ./es6.array.iterator */ "../node_modules/core-js/library/modules/es6.array.iterator.js");
var global = __webpack_require__(/*! ./_global */ "../node_modules/core-js/library/modules/_global.js");
var hide = __webpack_require__(/*! ./_hide */ "../node_modules/core-js/library/modules/_hide.js");
var Iterators = __webpack_require__(/*! ./_iterators */ "../node_modules/core-js/library/modules/_iterators.js");
var TO_STRING_TAG = __webpack_require__(/*! ./_wks */ "../node_modules/core-js/library/modules/_wks.js")('toStringTag');

var DOMIterables = ('CSSRuleList,CSSStyleDeclaration,CSSValueList,ClientRectList,DOMRectList,DOMStringList,' +
  'DOMTokenList,DataTransferItemList,FileList,HTMLAllCollection,HTMLCollection,HTMLFormElement,HTMLSelectElement,' +
  'MediaList,MimeTypeArray,NamedNodeMap,NodeList,PaintRequestList,Plugin,PluginArray,SVGLengthList,SVGNumberList,' +
  'SVGPathSegList,SVGPointList,SVGStringList,SVGTransformList,SourceBufferList,StyleSheetList,TextTrackCueList,' +
  'TextTrackList,TouchList').split(',');

for (var i = 0; i < DOMIterables.length; i++) {
  var NAME = DOMIterables[i];
  var Collection = global[NAME];
  var proto = Collection && Collection.prototype;
  if (proto && !proto[TO_STRING_TAG]) hide(proto, TO_STRING_TAG, NAME);
  Iterators[NAME] = Iterators.Array;
}


/***/ }),

/***/ "../server/db/connect.js":
/*!*******************************!*\
  !*** ../server/db/connect.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _mongoose = __webpack_require__(/*! mongoose */ "mongoose");

var _mongoose2 = _interopRequireDefault(_mongoose);

var _constants = __webpack_require__(/*! ./constants */ "../server/db/constants.js");

var _models = __webpack_require__(/*! ./models */ "../server/db/models/index.js");

var _models2 = _interopRequireDefault(_models);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function () {
  // Find the appropriate database to connect to, default to localhost if not found.
  var connect = function connect() {
    _mongoose2.default.connect(_constants.db, function (err) {
      if (err) {
        console.log('===>  Error connecting to ' + _constants.db);
        console.log('Reason: ' + err);
      } else {
        console.log('===>  Succeeded in connecting to ' + _constants.db);
      }
    });
  };
  connect();

  _mongoose2.default.connection.on('error', console.log);
  _mongoose2.default.connection.on('disconnected', connect);

  (0, _models2.default)();
};

/***/ }),

/***/ "../server/db/constants.js":
/*!*********************************!*\
  !*** ../server/db/constants.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.currentUTC = exports.db = undefined;

var _moment = __webpack_require__(/*! moment */ "moment");

var _moment2 = _interopRequireDefault(_moment);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var db = exports.db = process.env.MONGOHQ_URL || process.env.MONGODB_URI || 'mongodb://Junkdog-Mongo/Products';

var currentUTC = exports.currentUTC = _moment2.default.utc().local().format('YYYY-MM-DD HH:mm:ss');

exports.default = {
  db: db,
  currentUTC: currentUTC
};

/***/ }),

/***/ "../server/db/controllers/brands.js":
/*!******************************************!*\
  !*** ../server/db/controllers/brands.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.all = all;
exports.add = add;
exports.update = update;
exports.remove = remove;

var _lodash = __webpack_require__(/*! lodash */ "lodash");

var _lodash2 = _interopRequireDefault(_lodash);

var _brands = __webpack_require__(/*! ../models/brands */ "../server/db/models/brands.js");

var _brands2 = _interopRequireDefault(_brands);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function all(req, res) {
  _brands2.default.find({}).exec(function (err, Brands) {
    if (err) {
      console.log("Can't fetch all Brands");
      return res.status(500);
    }
    return res.json(Brands);
  });
}

function add(req, res) {
  _brands2.default.create(req.body, function (err) {
    if (err) {
      console.log(err);
      res.status(400).send(err);
    }
    return res.status(200).send('OK');
  });
}

function update(req, res) {
  var query = { id: req.params.name };
  var isIncrement = req.body.isIncrement;
  var omitKeys = ['id', '_id', '_v', 'isIncrement', 'isFull'];
  var data = _lodash2.default.omit(req.body, omitKeys);
  console.log(data);
  _brands2.default.findOneAndUpdate(query, data, { new: true }, function (err) {
    if (err) {
      console.log('Error on save');
      return res.status(500);
    }

    return res.status(200).send('Updated successfully');
  });
}

function remove(req, res) {
  var query = { id: req.params.id };
  _brands2.default.findOneAndRemove(query, function (err) {
    if (err) {
      console.log('Error on delete');
      return res.status(500).send('We failed to delete for some reason');
    }
    return res.status(200).send('Removed successfully');
  });
}

exports.default = {
  all: all,
  add: add,
  update: update,
  remove: remove
};

/***/ }),

/***/ "../server/db/controllers/index.js":
/*!*****************************************!*\
  !*** ../server/db/controllers/index.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _products = __webpack_require__(/*! ./products */ "../server/db/controllers/products.js");

var _products2 = _interopRequireDefault(_products);

var _users = __webpack_require__(/*! ./users */ "../server/db/controllers/users.js");

var _users2 = _interopRequireDefault(_users);

var _brands = __webpack_require__(/*! ./brands */ "../server/db/controllers/brands.js");

var _brands2 = _interopRequireDefault(_brands);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  products: _products2.default,
  users: _users2.default,
  brands: _brands2.default
};

/***/ }),

/***/ "../server/db/controllers/products.js":
/*!********************************************!*\
  !*** ../server/db/controllers/products.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.all = all;
exports.add = add;
exports.update = update;
exports.remove = remove;

var _lodash = __webpack_require__(/*! lodash */ "lodash");

var _lodash2 = _interopRequireDefault(_lodash);

var _products = __webpack_require__(/*! ../models/products */ "../server/db/models/products.js");

var _products2 = _interopRequireDefault(_products);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function all(req, res) {
  _products2.default.find({}).exec(function (err, products) {
    if (err) {
      console.log("Can't fetch all products");
      return res.status(500);
    }
    return res.json(products);
  });
}

function add(req, res) {
  _products2.default.create(req.body, function (err) {
    if (err) {
      console.log(err);
      res.status(400).send(err);
    }
    return res.status(200).send('OK');
  });
}

function update(req, res) {
  var query = { id: req.params.id };
  var isIncrement = req.body.isIncrement;
  var omitKeys = ['id', '_id', '_v', 'isIncrement', 'isFull'];
  var data = _lodash2.default.omit(req.body, omitKeys);
  console.log(data);
  _products2.default.findOneAndUpdate(query, data, { new: true }, function (err) {
    if (err) {
      console.log('Error on save');
      return res.status(500);
    }

    return res.status(200).send('Updated successfully');
  });
}

function remove(req, res) {
  var query = { id: req.params.id };
  _products2.default.findOneAndRemove(query, function (err) {
    if (err) {
      console.log('Error on delete');
      return res.status(500).send('We failed to delete for some reason');
    }
    return res.status(200).send('Removed successfully');
  });
}

exports.default = {
  all: all,
  add: add,
  update: update,
  remove: remove
};

/***/ }),

/***/ "../server/db/controllers/users.js":
/*!*****************************************!*\
  !*** ../server/db/controllers/users.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.login = login;
exports.logout = logout;
exports.signUp = signUp;

var _passport = __webpack_require__(/*! passport */ "passport");

var _passport2 = _interopRequireDefault(_passport);

var _user = __webpack_require__(/*! ../models/user */ "../server/db/models/user.js");

var _user2 = _interopRequireDefault(_user);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * POST /login
 */
function login(req, res, next) {
  // Do email and password validation for the server
  _passport2.default.authenticate('local', function (authErr, user, info) {
    if (authErr) return next(authErr);
    if (!user) {
      return res.sendStatus(401);
    }
    // Passport exposes a login() function on req (also aliased as
    // logIn()) that can be used to establish a login session
    return req.logIn(user, function (loginErr) {
      if (loginErr) return res.sendStatus(401);
      return res.sendStatus(200);
    });
  })(req, res, next);
}

/**
 * POST /logout
 */
function logout(req, res) {
  req.logout();
  res.sendStatus(200);
}

/**
 * POST /signup
 * Create a new local account
 */
function signUp(req, res, next) {
  var user = new _user2.default({
    email: req.body.email,
    password: req.body.password
  });

  _user2.default.findOne({ email: req.body.email }, function (findErr, existingUser) {
    if (existingUser) {
      return res.sendStatus(409);
    }

    return user.save(function (saveErr) {
      if (saveErr) return next(saveErr);
      return req.logIn(user, function (loginErr) {
        if (loginErr) return res.sendStatus(401);
        return res.sendStatus(200);
      });
    });
  });
}

exports.default = {
  login: login,
  logout: logout,
  signUp: signUp
};

/***/ }),

/***/ "../server/db/index.js":
/*!*****************************!*\
  !*** ../server/db/index.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _connect = __webpack_require__(/*! ./connect */ "../server/db/connect.js");

var _connect2 = _interopRequireDefault(_connect);

var _controllers = __webpack_require__(/*! ./controllers */ "../server/db/controllers/index.js");

var _controllers2 = _interopRequireDefault(_controllers);

var _passport = __webpack_require__(/*! ./passport */ "../server/db/passport/index.js");

var _passport2 = _interopRequireDefault(_passport);

var _session = __webpack_require__(/*! ./session */ "../server/db/session.js");

var _session2 = _interopRequireDefault(_session);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  connect: _connect2.default,
  controllers: _controllers2.default,
  passport: _passport2.default,
  session: _session2.default
};

/***/ }),

/***/ "../server/db/models/attributes.js":
/*!*****************************************!*\
  !*** ../server/db/models/attributes.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _mongoose = __webpack_require__(/*! mongoose */ "mongoose");

var _mongoose2 = _interopRequireDefault(_mongoose);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var AttributeSchema = new _mongoose2.default.Schema({
  key: String,
  value: String
}, { timestamps: true });

exports.default = _mongoose2.default.model('Attributes', AttributeSchema);

/***/ }),

/***/ "../server/db/models/brands.js":
/*!*************************************!*\
  !*** ../server/db/models/brands.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _mongoose = __webpack_require__(/*! mongoose */ "mongoose");

var _mongoose2 = _interopRequireDefault(_mongoose);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var BrandSchema = new _mongoose2.default.Schema({
  name: String,
  colors: [{ type: _mongoose.Schema.ObjectId, ref: 'Colors' }]
}, { timestamps: true });

exports.default = _mongoose2.default.model('Brands', BrandSchema);

/***/ }),

/***/ "../server/db/models/category.js":
/*!***************************************!*\
  !*** ../server/db/models/category.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _mongoose = __webpack_require__(/*! mongoose */ "mongoose");

var _mongoose2 = _interopRequireDefault(_mongoose);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var CategorySchema = new _mongoose2.default.Schema({
  name: String,
  count: Number,
  slug: String,
  parentCategory: { type: _mongoose.Schema.ObjectId, refs: 'Category' },
  facets: [{ type: _mongoose.Schema.ObjectId, refs: 'Facets' }]
}, { timestamps: true });

exports.default = _mongoose2.default.model('Category', CategorySchema);

/***/ }),

/***/ "../server/db/models/colors.js":
/*!*************************************!*\
  !*** ../server/db/models/colors.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _mongoose = __webpack_require__(/*! mongoose */ "mongoose");

var _mongoose2 = _interopRequireDefault(_mongoose);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ColorSchema = new _mongoose2.default.Schema({
  name: String,
  hex: String,
  deletedAt: { type: Date },
  brand: { type: _mongoose.Schema.ObjectId, ref: 'Brands' }
}, { timestamps: true });

exports.default = _mongoose2.default.model('Colors', ColorSchema);

/***/ }),

/***/ "../server/db/models/description.js":
/*!******************************************!*\
  !*** ../server/db/models/description.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _mongoose = __webpack_require__(/*! mongoose */ "mongoose");

var _mongoose2 = _interopRequireDefault(_mongoose);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var DescriptionSchema = new _mongoose2.default.Schema({
  product: { type: _mongoose.Schema.ObjectId, ref: 'Products' },
  language: { type: String, default: 'en' },
  title: String,
  description: String,
  shortDescription: String,
  deletedAt: { type: Date }
}, { timestamps: true });

DescriptionSchema.index({ product: 1 });

exports.default = _mongoose2.default.model('Description', DescriptionSchema);

/***/ }),

/***/ "../server/db/models/facets.js":
/*!*************************************!*\
  !*** ../server/db/models/facets.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _mongoose = __webpack_require__(/*! mongoose */ "mongoose");

var _mongoose2 = _interopRequireDefault(_mongoose);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var FacetSchema = new _mongoose2.default.Schema({
  name: String,
  value: String,
  count: Number
}, { timestamps: true });

exports.default = _mongoose2.default.model('Facets', FacetSchema);

/***/ }),

/***/ "../server/db/models/index.js":
/*!************************************!*\
  !*** ../server/db/models/index.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = loadModels;
function loadModels() {
  __webpack_require__(/*! ./products */ "../server/db/models/products.js");
  __webpack_require__(/*! ./user */ "../server/db/models/user.js");
  __webpack_require__(/*! ./attributes */ "../server/db/models/attributes.js");
  __webpack_require__(/*! ./brands */ "../server/db/models/brands.js");
  __webpack_require__(/*! ./category */ "../server/db/models/category.js");
  __webpack_require__(/*! ./colors */ "../server/db/models/colors.js");
  __webpack_require__(/*! ./description */ "../server/db/models/description.js");
  __webpack_require__(/*! ./facets */ "../server/db/models/facets.js");
  __webpack_require__(/*! ./meta */ "../server/db/models/meta.js");
  __webpack_require__(/*! ./pricing */ "../server/db/models/pricing.js");
  __webpack_require__(/*! ./sizes */ "../server/db/models/sizes.js");
  __webpack_require__(/*! ./summary */ "../server/db/models/summary.js");
  __webpack_require__(/*! ./suppliers */ "../server/db/models/suppliers.js");
  __webpack_require__(/*! ./variants */ "../server/db/models/variants.js");
}

/***/ }),

/***/ "../server/db/models/meta.js":
/*!***********************************!*\
  !*** ../server/db/models/meta.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _mongoose = __webpack_require__(/*! mongoose */ "mongoose");

var _mongoose2 = _interopRequireDefault(_mongoose);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var MetaSchema = new _mongoose2.default.Schema({
  title: String,
  description: String,
  keywords: [String]
}, { timestamps: true });

exports.default = _mongoose2.default.model('Meta', MetaSchema);

/***/ }),

/***/ "../server/db/models/pricing.js":
/*!**************************************!*\
  !*** ../server/db/models/pricing.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _mongoose = __webpack_require__(/*! mongoose */ "mongoose");

var _mongoose2 = _interopRequireDefault(_mongoose);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * [PricingSchema description]
 * @id : Id of this model should be SKU_StoreId
 */
var PricingSchema = new _mongoose2.default.Schema({
  price: String,
  currency: { type: String, default: 'USD' },
  sale: {
    salePrice: String,
    saleStartDate: String,
    saleEndDate: String
  },
  deletedAt: { type: Date }
}, { timestamps: true });

PricingSchema.index({ updatedAt: 1 });

exports.default = _mongoose2.default.model('Pricing', PricingSchema);

/***/ }),

/***/ "../server/db/models/products.js":
/*!***************************************!*\
  !*** ../server/db/models/products.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _mongoose = __webpack_require__(/*! mongoose */ "mongoose");

var _mongoose2 = _interopRequireDefault(_mongoose);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * [ProductSchema description]
 * @string category: something/something/something
 * department is a top level category
 */
var ProductSchema = new _mongoose2.default.Schema({
  id: String,
  style: String,
  description: String,
  department: { type: _mongoose.Schema.ObjectId, ref: 'Category' },
  category: { type: _mongoose.Schema.ObjectId, ref: 'Category' },
  brand: { type: _mongoose.Schema.ObjectId, ref: 'Brands' },
  thumbnail: String,
  modelImage: String,
  shipping: {
    dimensions: {
      height: String,
      length: String,
      width: String
    },
    weight: String
  },
  pricing: { type: _mongoose.Schema.ObjectId, ref: 'Pricing' },
  rating: Number,
  meta: { type: _mongoose.Schema.ObjectId, ref: 'Meta' },
  attributes: [{ type: _mongoose.Schema.ObjectId, ref: 'Attributes' }],
  secondaryAttributes: [{ type: _mongoose.Schema.ObjectId, ref: 'Attributes' }],
  supplier: { type: _mongoose.Schema.ObjectId, ref: 'Suppliers' },
  variants: [{ type: _mongoose.Schema.ObjectId, ref: 'Variants' }],
  deletedAt: { type: Date }
}, { timestamps: true });

ProductSchema.index({ _id: 1, department: 1, category: 1, updatedDate: 1 });
exports.default = _mongoose2.default.model('Products', ProductSchema);

/***/ }),

/***/ "../server/db/models/sizes.js":
/*!************************************!*\
  !*** ../server/db/models/sizes.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _mongoose = __webpack_require__(/*! mongoose */ "mongoose");

var _mongoose2 = _interopRequireDefault(_mongoose);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SizeSchema = new _mongoose2.default.Schema({
  name: String,
  identifier: String,
  description: String,
  displayOrder: Number,
  deletedAt: { type: Date }
}, { timestamps: true });

exports.default = _mongoose2.default.model('Sizes', SizeSchema);

/***/ }),

/***/ "../server/db/models/summary.js":
/*!**************************************!*\
  !*** ../server/db/models/summary.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _mongoose = __webpack_require__(/*! mongoose */ "mongoose");

var _mongoose2 = _interopRequireDefault(_mongoose);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SummarySchema = new _mongoose2.default.Schema({
  style: String,
  department: String,
  category: String,
  thumbnail: String,
  price: String,
  rating: Number,
  attributes: [{ type: _mongoose.Schema.ObjectId, ref: 'Attributes' }],
  secondaryAttributes: [{ type: _mongoose.Schema.ObjectId, ref: 'Attributes' }],
  lStyle: String,
  images: [{ type: _mongoose.Schema.ObjectId, ref: 'Images' }],
  itemDescription: { type: _mongoose.Schema.ObjectId, ref: 'Description' },
  variants: [{ type: _mongoose.Schema.ObjectId, ref: 'Variants' }],
  deletedAt: { type: Date }
}, { timestamps: true });

exports.default = _mongoose2.default.model('Summary', SummarySchema);

/***/ }),

/***/ "../server/db/models/suppliers.js":
/*!****************************************!*\
  !*** ../server/db/models/suppliers.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _mongoose = __webpack_require__(/*! mongoose */ "mongoose");

var _mongoose2 = _interopRequireDefault(_mongoose);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SupplierSchema = new _mongoose2.default.Schema({
  name: String,
  description: String,
  displayOrder: Number,
  products: [{ type: _mongoose.Schema.ObjectId, ref: 'Products' }]
}, { timestamps: true });

exports.default = _mongoose2.default.model('Suppliers', SupplierSchema);

/***/ }),

/***/ "../server/db/models/user.js":
/*!***********************************!*\
  !*** ../server/db/models/user.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _bcryptNodejs = __webpack_require__(/*! bcrypt-nodejs */ "bcrypt-nodejs");

var _bcryptNodejs2 = _interopRequireDefault(_bcryptNodejs);

var _mongoose = __webpack_require__(/*! mongoose */ "mongoose");

var _mongoose2 = _interopRequireDefault(_mongoose);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var UserSchema = new _mongoose2.default.Schema({
  email: { type: String, unique: true, lowercase: true },
  password: String,
  tokens: Array,
  profile: {
    name: { type: String, default: '' },
    gender: { type: String, default: '' },
    location: { type: String, default: '' },
    website: { type: String, default: '' },
    picture: { type: String, default: '' }
  },
  resetPasswordToken: String,
  resetPasswordExpires: Date,
  google: {}
}, { timestamps: true });

var encryptPassword = function encryptPassword(next) {
  var user = undefined;
  if (!user.isModified('password')) return next();
  return _bcryptNodejs2.default.genSalt(5, function (saltErr, salt) {
    if (saltErr) return next(saltErr);
    return _bcryptNodejs2.default.hash(user.password, salt, null, function (hashErr, hash) {
      if (hashErr) return next(hashErr);
      user.password = hash;
      return next();
    });
  });
};

/**
 * Password hash middleware.
 */
UserSchema.pre('save', encryptPassword);

/*
 Defining our own custom document instance method
 */
UserSchema.methods = {
  comparePassword: function comparePassword(candidatePassword, cb) {
    _bcryptNodejs2.default.compare(candidatePassword, this.password, function (err, isMatch) {
      if (err) return cb(err);
      return cb(null, isMatch);
    });
  }
};

/**
 * Statics
 */

UserSchema.statics = {};

exports.default = _mongoose2.default.model('User', UserSchema);

/***/ }),

/***/ "../server/db/models/variants.js":
/*!***************************************!*\
  !*** ../server/db/models/variants.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _mongoose = __webpack_require__(/*! mongoose */ "mongoose");

var _mongoose2 = _interopRequireDefault(_mongoose);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Id: SKU

var VariantSchema = new _mongoose2.default.Schema({
  id: String, // Sku
  thumbnail: String,
  modelImage: String,
  product: { type: _mongoose.Schema.ObjectId, ref: 'Products' }, // Product
  size: { type: _mongoose.Schema.ObjectId, ref: 'Sizes' }, // Size
  color: { type: _mongoose.Schema.ObjectId, ref: 'Colors' }, // Color
  attributes: [{ type: _mongoose.Schema.ObjectId, ref: 'Attributes' }],
  secondaryAttributes: [{ type: _mongoose.Schema.ObjectId, ref: 'Attributes' }],
  deletedAt: { type: Date }
}, { timestamps: true });

VariantSchema.index({ product: 1, updatedDate: 1 });
exports.default = _mongoose2.default.model('Variants', VariantSchema);

/***/ }),

/***/ "../server/db/passport/deserializeUser.js":
/*!************************************************!*\
  !*** ../server/db/passport/deserializeUser.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _user = __webpack_require__(/*! ../models/user */ "../server/db/models/user.js");

var _user2 = _interopRequireDefault(_user);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (id, done) {
  _user2.default.findById(id, function (err, user) {
    done(err, user);
  });
};

/***/ }),

/***/ "../server/db/passport/index.js":
/*!**************************************!*\
  !*** ../server/db/passport/index.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _deserializeUser = __webpack_require__(/*! ./deserializeUser */ "../server/db/passport/deserializeUser.js");

var _deserializeUser2 = _interopRequireDefault(_deserializeUser);

var _local = __webpack_require__(/*! ./local */ "../server/db/passport/local.js");

var _local2 = _interopRequireDefault(_local);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  deserializeUser: _deserializeUser2.default,
  local: _local2.default
};

/***/ }),

/***/ "../server/db/passport/local.js":
/*!**************************************!*\
  !*** ../server/db/passport/local.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _user = __webpack_require__(/*! ../models/user */ "../server/db/models/user.js");

var _user2 = _interopRequireDefault(_user);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (email, password, done) {
  _user2.default.findOne({ email: email }, function (findErr, user) {
    if (!user) return done(null, false, { message: 'There is no record of the email ' + email + '.' });
    return user.comparePassword(password, function (passErr, isMatch) {
      if (isMatch) {
        return done(null, user);
      }
      return done(null, false, { message: 'Your email or password combination is not correct.' });
    });
  });
};

/***/ }),

/***/ "../server/db/session.js":
/*!*******************************!*\
  !*** ../server/db/session.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _expressSession = __webpack_require__(/*! express-session */ "express-session");

var _expressSession2 = _interopRequireDefault(_expressSession);

var _connectMongo = __webpack_require__(/*! connect-mongo */ "connect-mongo");

var _connectMongo2 = _interopRequireDefault(_connectMongo);

var _constants = __webpack_require__(/*! ./constants */ "../server/db/constants.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var MongoStore = (0, _connectMongo2.default)(_expressSession2.default);

exports.default = function () {
  return new MongoStore({
    url: _constants.db,
    autoReconnect: true
  });
};

/***/ }),

/***/ "../server/db/unsupportedMessage.js":
/*!******************************************!*\
  !*** ../server/db/unsupportedMessage.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (featureName) {
  return "Attempted to use '" + featureName + "' but Mongo doesn't support it";
};

/***/ }),

/***/ "../server/graph/queries/brands.js":
/*!*****************************************!*\
  !*** ../server/graph/queries/brands.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = __webpack_require__(/*! babel-runtime/regenerator */ "../node_modules/babel-runtime/regenerator/index.js");

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = __webpack_require__(/*! babel-runtime/helpers/asyncToGenerator */ "../node_modules/babel-runtime/helpers/asyncToGenerator.js");

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _brands = __webpack_require__(/*! ../../db/models/brands */ "../server/db/models/brands.js");

var _brands2 = _interopRequireDefault(_brands);

var _lodash = __webpack_require__(/*! lodash */ "lodash");

var _lodash2 = _interopRequireDefault(_lodash);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  Query: {
    allBrands: function () {
      var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee() {
        var brands;
        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return _brands2.default.find().populate('colors');

              case 2:
                brands = _context.sent;

                console.log(brands);
                return _context.abrupt('return', brands);

              case 5:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, undefined);
      }));

      return function allBrands() {
        return _ref.apply(this, arguments);
      };
    }(),
    aBrand: function () {
      var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2(root, _ref3) {
        var name = _ref3.name;
        var brand;
        return _regenerator2.default.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return _brands2.default.findOne({ name: name }).populate('colors');

              case 2:
                brand = _context2.sent;

                console.log(brand);
                return _context2.abrupt('return', brand);

              case 5:
              case 'end':
                return _context2.stop();
            }
          }
        }, _callee2, undefined);
      }));

      return function aBrand(_x, _x2) {
        return _ref2.apply(this, arguments);
      };
    }()
  },
  Mutation: {
    addBrand: function () {
      var _ref4 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee3(root, _ref5) {
        var brand = _ref5.brand;
        var addedBrand, populatedBrands;
        return _regenerator2.default.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.next = 2;
                return _brands2.default.create(brand);

              case 2:
                addedBrand = _context3.sent;
                _context3.next = 5;
                return _brands2.default.findById(addedBrand._id).populate('colors');

              case 5:
                populatedBrands = _context3.sent;

                console.log(populatedBrands);
                return _context3.abrupt('return', populatedBrands);

              case 8:
              case 'end':
                return _context3.stop();
            }
          }
        }, _callee3, undefined);
      }));

      return function addBrand(_x3, _x4) {
        return _ref4.apply(this, arguments);
      };
    }(),
    updateBrand: function () {
      var _ref6 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee4(root, _ref7) {
        var id = _ref7.id,
            brand = _ref7.brand;
        var updatedBrand, populatedBrands;
        return _regenerator2.default.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                _context4.next = 2;
                return _brands2.default.findByIdAndUpdate(id, brand);

              case 2:
                updatedBrand = _context4.sent;
                _context4.next = 5;
                return _brands2.default.findById(updatedBrand._id).populate('colors');

              case 5:
                populatedBrands = _context4.sent;

                console.log(populatedBrands);
                return _context4.abrupt('return', populatedBrands);

              case 8:
              case 'end':
                return _context4.stop();
            }
          }
        }, _callee4, undefined);
      }));

      return function updateBrand(_x5, _x6) {
        return _ref6.apply(this, arguments);
      };
    }(),
    removeBrand: function () {
      var _ref8 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee5(root, _ref9) {
        var id = _ref9.id;
        var rem;
        return _regenerator2.default.wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                _context5.next = 2;
                return _brands2.default.findByIdAndRemove(id);

              case 2:
                rem = _context5.sent;

                console.log(rem);
                return _context5.abrupt('return', rem);

              case 5:
              case 'end':
                return _context5.stop();
            }
          }
        }, _callee5, undefined);
      }));

      return function removeBrand(_x7, _x8) {
        return _ref8.apply(this, arguments);
      };
    }(),
    addColorToBrand: function () {
      var _ref10 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee6(root, _ref11) {
        var id = _ref11.id,
            colorId = _ref11.colorId;
        var brandModel, colors, exists, populatedBrand;
        return _regenerator2.default.wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                _context6.next = 2;
                return _brands2.default.findById(id);

              case 2:
                brandModel = _context6.sent;
                colors = brandModel.colors;
                exists = colors.indexOf(colorId);

                if (!(exists < 0)) {
                  _context6.next = 9;
                  break;
                }

                colors.push(colorId);
                _context6.next = 9;
                return brandModel.save();

              case 9:
                console.log(brandModel);
                _context6.next = 12;
                return _brands2.default.findById(id).populate('colors');

              case 12:
                populatedBrand = _context6.sent;

                console.log(populatedBrand);
                return _context6.abrupt('return', populatedBrand);

              case 15:
              case 'end':
                return _context6.stop();
            }
          }
        }, _callee6, undefined);
      }));

      return function addColorToBrand(_x9, _x10) {
        return _ref10.apply(this, arguments);
      };
    }(),
    removeColorFromBrand: function () {
      var _ref12 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee7(root, _ref13) {
        var id = _ref13.id,
            colorId = _ref13.colorId;
        var brandModel, colors, exists, populatedBrand;
        return _regenerator2.default.wrap(function _callee7$(_context7) {
          while (1) {
            switch (_context7.prev = _context7.next) {
              case 0:
                _context7.next = 2;
                return _brands2.default.findById(id);

              case 2:
                brandModel = _context7.sent;
                colors = brandModel.colors;
                exists = colors.indexOf(colorId);

                if (!(exists > -1)) {
                  _context7.next = 9;
                  break;
                }

                colors.splice(exists, 1);
                _context7.next = 9;
                return brandModel.save();

              case 9:
                _context7.next = 11;
                return _brands2.default.findById(id).populate('colors');

              case 11:
                populatedBrand = _context7.sent;

                console.log(populatedBrand);
                return _context7.abrupt('return', populatedBrand);

              case 14:
              case 'end':
                return _context7.stop();
            }
          }
        }, _callee7, undefined);
      }));

      return function removeColorFromBrand(_x11, _x12) {
        return _ref12.apply(this, arguments);
      };
    }()
  }
};

/***/ }),

/***/ "../server/graph/queries/colors.js":
/*!*****************************************!*\
  !*** ../server/graph/queries/colors.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = __webpack_require__(/*! babel-runtime/regenerator */ "../node_modules/babel-runtime/regenerator/index.js");

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = __webpack_require__(/*! babel-runtime/helpers/asyncToGenerator */ "../node_modules/babel-runtime/helpers/asyncToGenerator.js");

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _colors = __webpack_require__(/*! ../../db/models/colors */ "../server/db/models/colors.js");

var _colors2 = _interopRequireDefault(_colors);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  Query: {
    allColors: function () {
      var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee() {
        var colors;
        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return _colors2.default.find().populate('brand');

              case 2:
                colors = _context.sent;
                return _context.abrupt('return', colors);

              case 4:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, undefined);
      }));

      return function allColors() {
        return _ref.apply(this, arguments);
      };
    }(),
    aColor: function () {
      var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2(root, _ref3) {
        var name = _ref3.name;
        var color;
        return _regenerator2.default.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return _colors2.default.findOne({ name: name }).populate('brand');

              case 2:
                color = _context2.sent;
                return _context2.abrupt('return', color);

              case 4:
              case 'end':
                return _context2.stop();
            }
          }
        }, _callee2, undefined);
      }));

      return function aColor(_x, _x2) {
        return _ref2.apply(this, arguments);
      };
    }()
  },
  Mutation: {
    addColor: function () {
      var _ref4 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee3(root, _ref5) {
        var color = _ref5.color;
        var addedColor, populatedColor;
        return _regenerator2.default.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.next = 2;
                return _colors2.default.create(color);

              case 2:
                addedColor = _context3.sent;
                _context3.next = 5;
                return _colors2.default.findById(addedColor._id).populate('brand');

              case 5:
                populatedColor = _context3.sent;
                return _context3.abrupt('return', populatedColor);

              case 7:
              case 'end':
                return _context3.stop();
            }
          }
        }, _callee3, undefined);
      }));

      return function addColor(_x3, _x4) {
        return _ref4.apply(this, arguments);
      };
    }(),
    updateColor: function () {
      var _ref6 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee4(root, _ref7) {
        var id = _ref7.id,
            color = _ref7.color;
        var updatedColor, populatedColor;
        return _regenerator2.default.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                _context4.next = 2;
                return _colors2.default.findByIdAndUpdate(id, color);

              case 2:
                updatedColor = _context4.sent;
                _context4.next = 5;
                return _colors2.default.findById(updatedColor._id).populate('brand');

              case 5:
                populatedColor = _context4.sent;
                return _context4.abrupt('return', populatedColor);

              case 7:
              case 'end':
                return _context4.stop();
            }
          }
        }, _callee4, undefined);
      }));

      return function updateColor(_x5, _x6) {
        return _ref6.apply(this, arguments);
      };
    }(),
    removeColor: function () {
      var _ref8 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee5(root, _ref9) {
        var id = _ref9.id;
        return _regenerator2.default.wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                _context5.next = 2;
                return _colors2.default.findByIdAndRemove(id);

              case 2:
                return _context5.abrupt('return', _context5.sent);

              case 3:
              case 'end':
                return _context5.stop();
            }
          }
        }, _callee5, undefined);
      }));

      return function removeColor(_x7, _x8) {
        return _ref8.apply(this, arguments);
      };
    }()
  }
};

/***/ }),

/***/ "../server/graph/queries/index.js":
/*!****************************************!*\
  !*** ../server/graph/queries/index.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _mergeGraphqlSchemas = __webpack_require__(/*! merge-graphql-schemas */ "merge-graphql-schemas");

var _graphqlIsoDate = __webpack_require__(/*! graphql-iso-date */ "graphql-iso-date");

var _products = __webpack_require__(/*! ./products */ "../server/graph/queries/products.js");

var _products2 = _interopRequireDefault(_products);

var _users = __webpack_require__(/*! ./users */ "../server/graph/queries/users.js");

var _users2 = _interopRequireDefault(_users);

var _brands = __webpack_require__(/*! ./brands */ "../server/graph/queries/brands.js");

var _brands2 = _interopRequireDefault(_brands);

var _colors = __webpack_require__(/*! ./colors */ "../server/graph/queries/colors.js");

var _colors2 = _interopRequireDefault(_colors);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var DateTimeResolver = {
  Date: _graphqlIsoDate.GraphQLDate,
  Time: _graphqlIsoDate.GraphQLTime,
  DateTime: _graphqlIsoDate.GraphQLDateTime
};

var resolvers = [_products2.default, _users2.default, _brands2.default, _colors2.default];

exports.default = (0, _mergeGraphqlSchemas.mergeResolvers)(resolvers);

/***/ }),

/***/ "../server/graph/queries/products.js":
/*!*******************************************!*\
  !*** ../server/graph/queries/products.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = __webpack_require__(/*! babel-runtime/regenerator */ "../node_modules/babel-runtime/regenerator/index.js");

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = __webpack_require__(/*! babel-runtime/helpers/asyncToGenerator */ "../node_modules/babel-runtime/helpers/asyncToGenerator.js");

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _products = __webpack_require__(/*! ../../db/models/products */ "../server/db/models/products.js");

var _products2 = _interopRequireDefault(_products);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  Query: {
    allProducts: function () {
      var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee() {
        var products;
        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return _products2.default.find();

              case 2:
                products = _context.sent;

                console.log(products);
                return _context.abrupt('return', products);

              case 5:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, undefined);
      }));

      return function allProducts() {
        return _ref.apply(this, arguments);
      };
    }(),
    aProduct: function () {
      var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2(root, _ref3) {
        var id = _ref3.id;
        var product;
        return _regenerator2.default.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return _products2.default.findOne({ id: id });

              case 2:
                product = _context2.sent;

                console.log(product);
                return _context2.abrupt('return', product);

              case 5:
              case 'end':
                return _context2.stop();
            }
          }
        }, _callee2, undefined);
      }));

      return function aProduct(_x, _x2) {
        return _ref2.apply(this, arguments);
      };
    }()
  }
};

/***/ }),

/***/ "../server/graph/queries/users.js":
/*!****************************************!*\
  !*** ../server/graph/queries/users.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = __webpack_require__(/*! babel-runtime/regenerator */ "../node_modules/babel-runtime/regenerator/index.js");

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = __webpack_require__(/*! babel-runtime/helpers/asyncToGenerator */ "../node_modules/babel-runtime/helpers/asyncToGenerator.js");

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _user = __webpack_require__(/*! ../../db/models/user */ "../server/db/models/user.js");

var _user2 = _interopRequireDefault(_user);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  Query: {
    allUsers: function () {
      var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee() {
        var users;
        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return _user2.default.find();

              case 2:
                users = _context.sent;

                console.log(users);
                return _context.abrupt('return', users);

              case 5:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, undefined);
      }));

      return function allUsers() {
        return _ref.apply(this, arguments);
      };
    }(),
    aUser: function (_aUser) {
      function aUser(_x) {
        return _aUser.apply(this, arguments);
      }

      aUser.toString = function () {
        return _aUser.toString();
      };

      return aUser;
    }(function () {
      var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2(email) {
        var user;
        return _regenerator2.default.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return _user2.default.find({ email: email });

              case 2:
                user = _context2.sent;

                console.log(user);
                return _context2.abrupt('return', aUser);

              case 5:
              case 'end':
                return _context2.stop();
            }
          }
        }, _callee2, undefined);
      }));

      return function (_x2) {
        return _ref2.apply(this, arguments);
      };
    }())
  }
};

/***/ }),

/***/ "../server/graph/types/attributes.js":
/*!*******************************************!*\
  !*** ../server/graph/types/attributes.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = "\n  type Attribute {\n    key: String,\n    value: String,\n    createdAt: String,\n    updatedAt: String,\n  }\n\n  type Query {\n    allAttributes: [Attribute],\n    anAttribute(key: String!): Attribute,\n  }\n";

/***/ }),

/***/ "../server/graph/types/brands.js":
/*!***************************************!*\
  !*** ../server/graph/types/brands.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = "\n  type Brand {\n    _id: ID!,\n    name: String,\n    colors: [Color],\n    createdAt: String,\n    updatedAt: String,\n  }\n\n  type BrandFlat {\n    _id: ID!,\n    name: String,\n    colors: [ID],\n    createdAt: String,\n    updatedAt: String,\n  }\n\n  type Query {\n    allBrands: [Brand],\n    aBrand(name: String!): Brand\n  }\n\n  input BrandInput {\n    name: String,\n    colors: [ID],\n  }\n\n  type Mutation {\n    addBrand(\n      brand: BrandInput\n    ): Brand\n\n    updateBrand(\n      id: ID!\n      brand: BrandInput\n    ): Brand\n\n    removeBrand(\n      id: ID!\n    ): Brand\n\n    addColorToBrand(\n      id: ID!\n      colorId: ID!\n    ) : Brand\n\n    removeColorFromBrand(\n      id: ID!\n      colorId: ID!\n    ) : Brand\n  }\n";

/***/ }),

/***/ "../server/graph/types/categories.js":
/*!*******************************************!*\
  !*** ../server/graph/types/categories.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = "\n  type Category {\n    name: String,\n    slug: String,\n    count: Int,\n    parentCategory: Category,\n    facets: [Facet],\n    createdAt: String,\n    updatedAt: String,\n  }\n\n  type Query {\n    allCategories: [Category],\n    aCategory(name: String!): Category\n  }\n";

/***/ }),

/***/ "../server/graph/types/colors.js":
/*!***************************************!*\
  !*** ../server/graph/types/colors.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = "\n  type Color {\n    _id: ID,\n    name: String,\n    hex: String,\n    deletedAt: String,\n    brand: Brand,\n    createdAt: String,\n    updatedAt: String,\n  }\n\n  type Query {\n    allColors: [Color],\n    aColor(name: String!): Color,\n  }\n\n  input ColorInput {\n    name: String,\n    hex: String,\n    brand: ID,\n  }\n\n  type Mutation {\n    addColor(\n      color: ColorInput\n    ): Color\n\n    updateColor(\n      id: ID!\n      color: ColorInput\n    ): Color\n\n    removeColor(\n      id: ID!\n    ): Color\n  }\n";

/***/ }),

/***/ "../server/graph/types/description.js":
/*!********************************************!*\
  !*** ../server/graph/types/description.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = "\n  type Description {\n    product: Product,\n    language: String,\n    title: String,\n    description: String,\n    shortDescription: String,\n    createdAt: String,\n    updatedAt: String,\n    deletedAt: String,\n  }\n\n  type Query {\n    allDescriptions: [Description],\n    aDescription(id: String!): Description,\n  }\n";

/***/ }),

/***/ "../server/graph/types/facets.js":
/*!***************************************!*\
  !*** ../server/graph/types/facets.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = "\n  type Facet {\n    name: String,\n    value: String,\n    count: Int,\n    createdAt: String,\n    updatedAt: String,\n  }\n\n  type Query {\n    allFacets: [Facet],\n    aFacet(name: String!): Facet,\n  }\n";

/***/ }),

/***/ "../server/graph/types/index.js":
/*!**************************************!*\
  !*** ../server/graph/types/index.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _mergeGraphqlSchemas = __webpack_require__(/*! merge-graphql-schemas */ "merge-graphql-schemas");

var _products = __webpack_require__(/*! ./products */ "../server/graph/types/products.js");

var _products2 = _interopRequireDefault(_products);

var _users = __webpack_require__(/*! ./users */ "../server/graph/types/users.js");

var _users2 = _interopRequireDefault(_users);

var _attributes = __webpack_require__(/*! ./attributes */ "../server/graph/types/attributes.js");

var _attributes2 = _interopRequireDefault(_attributes);

var _brands = __webpack_require__(/*! ./brands */ "../server/graph/types/brands.js");

var _brands2 = _interopRequireDefault(_brands);

var _categories = __webpack_require__(/*! ./categories */ "../server/graph/types/categories.js");

var _categories2 = _interopRequireDefault(_categories);

var _colors = __webpack_require__(/*! ./colors */ "../server/graph/types/colors.js");

var _colors2 = _interopRequireDefault(_colors);

var _description = __webpack_require__(/*! ./description */ "../server/graph/types/description.js");

var _description2 = _interopRequireDefault(_description);

var _facets = __webpack_require__(/*! ./facets */ "../server/graph/types/facets.js");

var _facets2 = _interopRequireDefault(_facets);

var _meta = __webpack_require__(/*! ./meta */ "../server/graph/types/meta.js");

var _meta2 = _interopRequireDefault(_meta);

var _pricing = __webpack_require__(/*! ./pricing */ "../server/graph/types/pricing.js");

var _pricing2 = _interopRequireDefault(_pricing);

var _sizes = __webpack_require__(/*! ./sizes */ "../server/graph/types/sizes.js");

var _sizes2 = _interopRequireDefault(_sizes);

var _summary = __webpack_require__(/*! ./summary */ "../server/graph/types/summary.js");

var _summary2 = _interopRequireDefault(_summary);

var _suppliers = __webpack_require__(/*! ./suppliers */ "../server/graph/types/suppliers.js");

var _suppliers2 = _interopRequireDefault(_suppliers);

var _variants = __webpack_require__(/*! ./variants */ "../server/graph/types/variants.js");

var _variants2 = _interopRequireDefault(_variants);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var types = [_products2.default, _users2.default, _attributes2.default, _brands2.default, _categories2.default, _colors2.default, _description2.default, _facets2.default, _meta2.default, _pricing2.default, _sizes2.default, _summary2.default, _suppliers2.default, _variants2.default];

exports.default = (0, _mergeGraphqlSchemas.mergeTypes)(types, { all: true });

/***/ }),

/***/ "../server/graph/types/meta.js":
/*!*************************************!*\
  !*** ../server/graph/types/meta.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = "\n  type Meta {\n    title: String,\n    description: String,\n    keywords: [String],\n    createdAt: String,\n    updatedAt: String,\n  }\n\n  type Query {\n    allMeta: [Meta],\n    aMeta(title: String!): Meta,\n  }\n";

/***/ }),

/***/ "../server/graph/types/pricing.js":
/*!****************************************!*\
  !*** ../server/graph/types/pricing.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = "\n  type Pricing {\n    price: String,\n    currency: String,\n    sale: Sale,\n    createdAt: String,\n    updatedAt: String,\n    deletedAt: String\n  }\n\n  type Sale {\n    salePrice: String,\n    saleStartDate: String,\n    saleEndDate: String,\n  }\n\n  type Query {\n    allPricing: [Pricing],\n    aPricing(price: String!): Pricing\n  }\n";

/***/ }),

/***/ "../server/graph/types/products.js":
/*!*****************************************!*\
  !*** ../server/graph/types/products.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = "\n  type Product {\n    id: String,\n    style: String,\n    description: String,\n    department: Category,\n    category: Category,\n    brand: Brand,\n    thumbnail: String,\n    modelImage: String,\n    pricing: Pricing,\n    rating: Int,\n    meta: Meta,\n    attributes: [Attribute],\n    secondaryAttributes: [Attribute],\n    supplier: Supplier,\n    variants: [Variant],\n    createdAt: String,\n    updatedAt: String,\n    deletedAt: String,\n  }\n\n  type Query {\n    allProducts: [Product],\n    aProduct(id: String!): Product\n  }\n";

/***/ }),

/***/ "../server/graph/types/sizes.js":
/*!**************************************!*\
  !*** ../server/graph/types/sizes.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = "\n  type Size {\n    name: String,\n    identifier: String,\n    description: String,\n    displayOrder: Int,\n    createdAt: String,\n    updatedAt: String,\n    deletedAt: String,\n  }\n\n  type Query {\n    allSizes: [Size],\n    aSize(name: String!): Size,\n  }\n";

/***/ }),

/***/ "../server/graph/types/summary.js":
/*!****************************************!*\
  !*** ../server/graph/types/summary.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = "\n  type Summary {\n    style: String,\n    department: Category,\n    category: Category,\n    thumbnail: String,\n    price: Pricing,\n    rating: Int,\n    attributes: [Attribute],\n    secondaryAttributes: [Attribute],\n    variants: [Variant],\n    createdAt: String,\n    updatedAt: String,\n    deletedAt: String,\n  }\n\n  type Query {\n    allSummaries: [Summary],\n    aSummary(style: String!): Summary,\n  }\n";

/***/ }),

/***/ "../server/graph/types/suppliers.js":
/*!******************************************!*\
  !*** ../server/graph/types/suppliers.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = "\n  type Supplier {\n    name: String,\n    description: String,\n    displayOrder: Int,\n    products: [Product],\n    createdAt: String,\n    updatedAt: String,\n  }\n\n  type Query {\n    allSuppliers: [Supplier],\n    aSupplier(name: String!): Supplier,\n  }\n";

/***/ }),

/***/ "../server/graph/types/users.js":
/*!**************************************!*\
  !*** ../server/graph/types/users.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = "\n  type Profile {\n    name: String,\n    gender: String,\n    location: String,\n    website: String,\n    picture: String,\n  }\n\n  type User {\n    email: String,\n    password: String,\n    profile: Profile,\n    createdAt: String,\n    updatedAt: String,\n  }\n\n  type Query {\n    allUsers: [User]\n    aUser(id: ID!): User\n  }\n";

/***/ }),

/***/ "../server/graph/types/variants.js":
/*!*****************************************!*\
  !*** ../server/graph/types/variants.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = "\n  type Variant {\n    id: String,\n    thumbnail: String,\n    modelImage: String,\n    product: Product,\n    size: Size,\n    color: Color,\n    attributes: [Attribute],\n    secondaryAttributes: [Attribute],\n    createdAt: String,\n    updatedAt: String,\n    deletedAt: String,\n  }\n\n  type Query {\n    allVariants: [Variant],\n    aVariant(id: String!): Variant,\n  }\n";

/***/ }),

/***/ "../server/init/express.js":
/*!*********************************!*\
  !*** ../server/init/express.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _express = __webpack_require__(/*! express */ "express");

var _express2 = _interopRequireDefault(_express);

var _passport = __webpack_require__(/*! passport */ "passport");

var _passport2 = _interopRequireDefault(_passport);

var _dotenv = __webpack_require__(/*! dotenv */ "dotenv");

var _dotenv2 = _interopRequireDefault(_dotenv);

var _expressSession = __webpack_require__(/*! express-session */ "express-session");

var _expressSession2 = _interopRequireDefault(_expressSession);

var _bodyParser = __webpack_require__(/*! body-parser */ "body-parser");

var _bodyParser2 = _interopRequireDefault(_bodyParser);

var _cookieParser = __webpack_require__(/*! cookie-parser */ "cookie-parser");

var _cookieParser2 = _interopRequireDefault(_cookieParser);

var _path = __webpack_require__(/*! path */ "path");

var _path2 = _interopRequireDefault(_path);

var _expressFlash = __webpack_require__(/*! express-flash */ "express-flash");

var _expressFlash2 = _interopRequireDefault(_expressFlash);

var _methodOverride = __webpack_require__(/*! method-override */ "method-override");

var _methodOverride2 = _interopRequireDefault(_methodOverride);

var _compression = __webpack_require__(/*! compression */ "compression");

var _compression2 = _interopRequireDefault(_compression);

var _helmet = __webpack_require__(/*! helmet */ "helmet");

var _helmet2 = _interopRequireDefault(_helmet);

var _secret = __webpack_require__(/*! ../../config/secret */ "../config/secret.js");

var _db = __webpack_require__(/*! ../db */ "../server/db/index.js");

var _unsupportedMessage = __webpack_require__(/*! ../db/unsupportedMessage */ "../server/db/unsupportedMessage.js");

var _unsupportedMessage2 = _interopRequireDefault(_unsupportedMessage);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (app) {
  app.set('port', process.env.PORT || 3001);

  if (false) {}

  app.use(_bodyParser2.default.json());
  app.use(_bodyParser2.default.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded
  app.use((0, _methodOverride2.default)());
  app.use((0, _cookieParser2.default)());

  app.use(_express2.default.static(_path2.default.join(process.cwd(), 'public')));

  app.set('trust proxy', 'loopback');

  var sessionStore = null;
  if (!_db.session) {
    console.warn((0, _unsupportedMessage2.default)('session'));
  } else {
    sessionStore = (0, _db.session)();
  }

  var sess = {
    resave: false,
    saveUninitialized: false,
    secret: _secret.sessionSecret,
    proxy: true, // The "X-Forwarded-Proto" header will be used.
    name: _secret.sessionId,
    // Add HTTPOnly, Secure attributes on Session Cookie
    // If secure is set, and you access your site over HTTP, the cookie will not be set
    cookie: {
      httpOnly: true,
      secure: false
    },
    store: sessionStore
  };

  console.log('--------------------------');
  console.log('===> 😊  Starting Server . . .');
  console.log('===>  Environment: ' + "development");
  console.log('===>  Listening on port: ' + app.get('port'));
  console.log('===>  Using MongoDB');
  if (false) {}
  console.log('--------------------------');

  app.use((0, _expressSession2.default)(sess));

  app.use(_passport2.default.initialize());
  app.use(_passport2.default.session());

  app.use((0, _expressFlash2.default)());
};

/***/ }),

/***/ "../server/init/graphql.js":
/*!*********************************!*\
  !*** ../server/init/graphql.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _apolloServerExpress = __webpack_require__(/*! apollo-server-express */ "apollo-server-express");

var _bodyParser = __webpack_require__(/*! body-parser */ "body-parser");

var _bodyParser2 = _interopRequireDefault(_bodyParser);

var _graphql = __webpack_require__(/*! graphql */ "graphql");

var _products = __webpack_require__(/*! ../db/models/products */ "../server/db/models/products.js");

var _products2 = _interopRequireDefault(_products);

var _graphqlTools = __webpack_require__(/*! graphql-tools */ "graphql-tools");

var _types = __webpack_require__(/*! ../graph/types */ "../server/graph/types/index.js");

var _types2 = _interopRequireDefault(_types);

var _queries = __webpack_require__(/*! ../graph/queries */ "../server/graph/queries/index.js");

var _queries2 = _interopRequireDefault(_queries);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var schema = (0, _graphqlTools.makeExecutableSchema)({ typeDefs: _types2.default, resolvers: _queries2.default });

exports.default = function (app) {
  app.post('/graphql', _bodyParser2.default.json(), (0, _apolloServerExpress.graphqlExpress)(function (req) {
    return {
      schema: schema,
      context: {
        user: req.user
      }
    };
  }));
  app.use('/graphiql', (0, _apolloServerExpress.graphiqlExpress)({ endpointURL: '/graphql' }));
};

/***/ }),

/***/ "../server/init/hotLoader.js":
/*!***********************************!*\
  !*** ../server/init/hotLoader.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _webpack = __webpack_require__(/*! webpack */ "webpack");

var _webpack2 = _interopRequireDefault(_webpack);

var _webpack3 = __webpack_require__(/*! ../../webpack/webpack.config */ "../webpack/webpack.config.js");

var _webpack4 = _interopRequireDefault(_webpack3);

var _webpackDevMiddleware = __webpack_require__(/*! webpack-dev-middleware */ "webpack-dev-middleware");

var _webpackDevMiddleware2 = _interopRequireDefault(_webpackDevMiddleware);

var _webpackHotMiddleware = __webpack_require__(/*! webpack-hot-middleware */ "webpack-hot-middleware");

var _webpackHotMiddleware2 = _interopRequireDefault(_webpackHotMiddleware);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (app, isDebug) {
  if (isDebug) {
    var webpackCompiled = (0, _webpack4.default)({ browser: true });
    var compiler = (0, _webpack2.default)(webpackCompiled);

    app.use((0, _webpackDevMiddleware2.default)(compiler, {
      logLevel: 'warn',
      publicPath: webpackCompiled.output.publicPath
    }));

    app.use((0, _webpackHotMiddleware2.default)(compiler));
  }
};

/***/ }),

/***/ "../server/init/routes.js":
/*!********************************!*\
  !*** ../server/init/routes.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _path = __webpack_require__(/*! path */ "path");

var _path2 = _interopRequireDefault(_path);

var _db = __webpack_require__(/*! ../db */ "../server/db/index.js");

var _db2 = _interopRequireDefault(_db);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var controllers = _db2.default.controllers;


var usersController = controllers && controllers.users;
var productsController = controllers && controllers.products;
var brandsController = controllers && controllers.brands;

exports.default = function (app) {
  /*
  app.get('/', (req, res) => {
    res.sendfile(path.resolve('app/index.html'));
  });*/

  if (usersController) {
    app.post('/sessions', usersController.login);
    app.post('/users', usersController.signUp);
    app.delete('/sessions', usersController.logout);
  }

  if (productsController) {
    app.get('/api/products', productsController.all);
    app.post('/api/products', productsController.add);
    app.put('/api/products/:id', productsController.update);
    app.delete('/api/products', productsController.remove);
  }

  if (brandsController) {
    app.get('/api/brands', brandsController.all);
    app.post('/api/brands', brandsController.add);
    app.put('/api/brands/:id', brandsController.update);
    app.delete('/api/brands/:id', brandsController.remove);
  }
};

/***/ }),

/***/ "../server/server.js":
/*!***************************!*\
  !*** ../server/server.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _express = __webpack_require__(/*! express */ "express");

var _express2 = _interopRequireDefault(_express);

var _morgan = __webpack_require__(/*! morgan */ "morgan");

var _morgan2 = _interopRequireDefault(_morgan);

var _cors = __webpack_require__(/*! cors */ "cors");

var _cors2 = _interopRequireDefault(_cors);

var _db = __webpack_require__(/*! ./db */ "../server/db/index.js");

var _db2 = _interopRequireDefault(_db);

var _app = __webpack_require__(/*! ../config/app */ "../config/app.js");

var _hotLoader = __webpack_require__(/*! ./init/hotLoader */ "../server/init/hotLoader.js");

var _hotLoader2 = _interopRequireDefault(_hotLoader);

var _express3 = __webpack_require__(/*! ./init/express */ "../server/init/express.js");

var _express4 = _interopRequireDefault(_express3);

var _graphql = __webpack_require__(/*! ./init/graphql */ "../server/init/graphql.js");

var _graphql2 = _interopRequireDefault(_graphql);

var _routes = __webpack_require__(/*! ./init/routes */ "../server/init/routes.js");

var _routes2 = _interopRequireDefault(_routes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// import renderSSR from './render/pageRender';

var app = (0, _express2.default)();

_db2.default.connect();

app.use((0, _morgan2.default)('dev'));

app.use((0, _cors2.default)());

(0, _hotLoader2.default)(app, _app.isDebug);

(0, _express4.default)(app);

(0, _graphql2.default)(app);

(0, _routes2.default)(app);

/*app.get('*', (req, res) => {
  renderSSR(req, res);
});
*/
app.listen(app.get('port'), function () {
  //const addr = app.address();
  console.log('GraphiQL is now running on localhost:' + app.get('port') + '/graphiql');
});

/***/ }),

/***/ "../webpack/externals.js":
/*!*******************************!*\
  !*** ../webpack/externals.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _defineProperty2 = __webpack_require__(/*! babel-runtime/helpers/defineProperty */ "../node_modules/babel-runtime/helpers/defineProperty.js");

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _assign = __webpack_require__(/*! babel-runtime/core-js/object/assign */ "../node_modules/babel-runtime/core-js/object/assign.js");

var _assign2 = _interopRequireDefault(_assign);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var fs = __webpack_require__(/*! fs */ "fs");

var externalModules = fs.readdirSync('node_modules').filter(function (x) {
  return ['.bin'].indexOf(x) === -1;
}).reduce(function (acc, cur) {
  return (0, _assign2.default)(acc, (0, _defineProperty3.default)({}, cur, 'commonjs ' + cur));
}, {});

module.exports = externalModules;

/***/ }),

/***/ "../webpack/paths.js":
/*!***************************!*\
  !*** ../webpack/paths.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var path = __webpack_require__(/*! path */ "path");

var CURRENT_WORKING_DIR = process.cwd();

module.exports = {
  app: path.resolve(CURRENT_WORKING_DIR, 'app'),
  assets: path.resolve(CURRENT_WORKING_DIR, 'public', 'assets'),
  compiled: path.resolve(CURRENT_WORKING_DIR, 'compiled'),
  public: '/assets/', // use absolute path for css-loader?
  modules: path.resolve(CURRENT_WORKING_DIR, 'node_modules')
};

/***/ }),

/***/ "../webpack/plugins.js":
/*!*****************************!*\
  !*** ../webpack/plugins.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _stringify = __webpack_require__(/*! babel-runtime/core-js/json/stringify */ "../node_modules/babel-runtime/core-js/json/stringify.js");

var _stringify2 = _interopRequireDefault(_stringify);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var webpack = __webpack_require__(/*! webpack */ "webpack");
var ExtractTextPlugin = __webpack_require__(/*! extract-text-webpack-plugin */ "extract-text-webpack-plugin");
var ManifestPlugin = __webpack_require__(/*! webpack-manifest-plugin */ "webpack-manifest-plugin");

module.exports = function () {
  var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
      _ref$production = _ref.production,
      production = _ref$production === undefined ? false : _ref$production,
      _ref$browser = _ref.browser,
      browser = _ref$browser === undefined ? false : _ref$browser;

  var bannerOptions = { raw: true, banner: 'require("source-map-support").install();' };
  var compress = { warnings: false };
  var compileTimeConstantForMinification = { __PRODUCTION__: (0, _stringify2.default)(production) };

  if (!production && !browser) {
    return [new webpack.EnvironmentPlugin(['NODE_ENV']), new webpack.DefinePlugin(compileTimeConstantForMinification), new webpack.BannerPlugin(bannerOptions)];
  }
  if (!production && browser) {
    return [new webpack.EnvironmentPlugin(['NODE_ENV']), new webpack.DefinePlugin(compileTimeConstantForMinification), new webpack.HotModuleReplacementPlugin(), new webpack.NoEmitOnErrorsPlugin()];
  }
  if (production && !browser) {
    return [new webpack.EnvironmentPlugin(['NODE_ENV']), new webpack.DefinePlugin(compileTimeConstantForMinification), new webpack.BannerPlugin(bannerOptions)];
  }
  if (production && browser) {
    return [new webpack.EnvironmentPlugin(['NODE_ENV']), new webpack.DefinePlugin(compileTimeConstantForMinification), new ExtractTextPlugin({
      filename: '[hash].css',
      allChunks: true
    }), new ManifestPlugin({
      fileName: 'manifest.json'
    })];
  }
  return [];
};

/***/ }),

/***/ "../webpack/resolve.js":
/*!*****************************!*\
  !*** ../webpack/resolve.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var PATHS = __webpack_require__(/*! ./paths */ "../webpack/paths.js");

module.exports = {
  modules: [PATHS.app, PATHS.modules],
  extensions: ['.js', '.jsx', '.css']
};

/***/ }),

/***/ "../webpack/rules/css.js":
/*!*******************************!*\
  !*** ../webpack/rules/css.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _toConsumableArray2 = __webpack_require__(/*! babel-runtime/helpers/toConsumableArray */ "../node_modules/babel-runtime/helpers/toConsumableArray.js");

var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var path = __webpack_require__(/*! path */ "path");
var ExtractTextPlugin = __webpack_require__(/*! extract-text-webpack-plugin */ "extract-text-webpack-plugin");
var postcssImport = __webpack_require__(/*! postcss-import */ "postcss-import");
var postcssCssnext = __webpack_require__(/*! postcss-cssnext */ "postcss-cssnext");
var postcssReporter = __webpack_require__(/*! postcss-reporter */ "postcss-reporter");
var postcssGlobalImport = __webpack_require__(/*! postcss-global-import */ "postcss-global-import");
var PATHS = __webpack_require__(/*! ../paths */ "../webpack/paths.js");

module.exports = function () {
  var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
      _ref$production = _ref.production,
      production = _ref$production === undefined ? false : _ref$production,
      _ref$browser = _ref.browser,
      browser = _ref$browser === undefined ? false : _ref$browser;

  /*
   * modules: boolean - Enable/Disable CSS Modules
   * importLoaders: number - Number of loaders applied before CSS loader
   *
   * Read more about css-loader options
   * https://webpack.js.org/loaders/css-loader/#options
   *
   * For server-side rendering we use css-loader/locals as we do not want to
   * embed CSS. However, we still require the mappings to insert as className in
   * our views.
   *
   * Referenced from: https://github.com/webpack-contrib/css-loader#css-scope
   *
   * For prerendering with extract-text-webpack-plugin you should use
   * css-loader/locals instead of style-loader!css-loader in the prerendering bundle.
   * It doesn't embed CSS but only exports the identifier mappings.
   */
  var localIdentName = 'localIdentName=[name]__[local]___[hash:base64:5]';

  var createCssLoaders = function createCssLoaders(embedCssInBundle) {
    return [{
      loader: embedCssInBundle ? 'css-loader' : 'css-loader/locals',
      options: {
        localIdentName: localIdentName,
        sourceMap: true,
        modules: true,
        importLoaders: 1
      }
    }, {
      loader: 'postcss-loader',
      options: {
        ident: 'postcss',
        plugins: [postcssImport({ path: path.resolve(PATHS.app, './css') }), postcssCssnext({ browsers: ['> 1%', 'last 2 versions'] }), postcssReporter({ clearMessages: true }), postcssGlobalImport()]
      }
    }];
  };

  var createBrowserLoaders = function createBrowserLoaders(extractCssToFile) {
    return function (loaders) {
      if (extractCssToFile) {
        return ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: loaders
        });
      }
      return [{ loader: 'style-loader' }].concat((0, _toConsumableArray3.default)(loaders));
    };
  };

  var serverLoaders = createCssLoaders(false);
  var browserLoaders = createBrowserLoaders(production)(createCssLoaders(true));

  return {
    test: /\.css$/,
    use: browser ? browserLoaders : serverLoaders,
    include: [PATHS.app, PATHS.modules]
  };
};

/***/ }),

/***/ "../webpack/rules/image.js":
/*!*********************************!*\
  !*** ../webpack/rules/image.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var PATHS = __webpack_require__(/*! ../paths */ "../webpack/paths.js");

module.exports = function () {
  var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
      _ref$limit = _ref.limit,
      limit = _ref$limit === undefined ? 10000 : _ref$limit;

  return {
    test: /\.(png|jpg|jpeg|gif|svg|woff|woff2|ttf|eot)$/,
    loader: 'url-loader',
    options: { name: '[hash].[ext]', limit: limit },
    include: [PATHS.app, PATHS.modules]
  };
};

/***/ }),

/***/ "../webpack/rules/index.js":
/*!*********************************!*\
  !*** ../webpack/rules/index.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var image = __webpack_require__(/*! ./image */ "../webpack/rules/image.js");
var javascript = __webpack_require__(/*! ./javascript */ "../webpack/rules/javascript.js");
var css = __webpack_require__(/*! ./css */ "../webpack/rules/css.js");
var video = __webpack_require__(/*! ./video */ "../webpack/rules/video.js");

module.exports = function () {
  var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
      _ref$production = _ref.production,
      production = _ref$production === undefined ? false : _ref$production,
      _ref$browser = _ref.browser,
      browser = _ref$browser === undefined ? false : _ref$browser;

  return [javascript({ production: production, browser: browser }), css({ production: production, browser: browser }), image(), video()];
};

/***/ }),

/***/ "../webpack/rules/javascript.js":
/*!**************************************!*\
  !*** ../webpack/rules/javascript.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var PATHS = __webpack_require__(/*! ../paths */ "../webpack/paths.js");

module.exports = function () {
  var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
      _ref$production = _ref.production,
      production = _ref$production === undefined ? false : _ref$production,
      _ref$browser = _ref.browser,
      browser = _ref$browser === undefined ? false : _ref$browser;

  var enableHotModuleReplacement = !production && browser;
  var createPresets = function createPresets(enableHMR) {
    var presets = ['es2015', 'react', 'stage-0'];
    return enableHMR ? ['react-hmre'].concat(presets) : presets;
  };
  var presets = createPresets(enableHotModuleReplacement);

  var plugins = production ? ['transform-react-remove-prop-types', 'transform-react-constant-elements', 'transform-react-inline-elements'] : [];

  return {
    test: /\.js$|\.jsx$/,
    loader: 'babel-loader',
    options: {
      presets: presets,
      plugins: plugins
    },
    exclude: PATHS.modules
  };
};

/***/ }),

/***/ "../webpack/rules/video.js":
/*!*********************************!*\
  !*** ../webpack/rules/video.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var PATHS = __webpack_require__(/*! ../paths */ "../webpack/paths.js");

module.exports = function () {
  return {
    test: /\.(webm|mp4)$/,
    loader: 'file-loader',
    include: PATHS.app
  };
};

/***/ }),

/***/ "../webpack/webpack.config.js":
/*!************************************!*\
  !*** ../webpack/webpack.config.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var PATHS = __webpack_require__(/*! ./paths */ "../webpack/paths.js");
var rules = __webpack_require__(/*! ./rules */ "../webpack/rules/index.js");
var plugins = __webpack_require__(/*! ./plugins */ "../webpack/plugins.js");
var externals = __webpack_require__(/*! ./externals */ "../webpack/externals.js");
var resolve = __webpack_require__(/*! ./resolve */ "../webpack/resolve.js");

module.exports = function () {
  var env = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

  var isProduction = "development" === 'production';
  var isBrowser = env.browser;

  console.log('Running webpack in ' + "development" + ' mode on ' + (isBrowser ? 'browser' : 'server'));

  var hotMiddlewareScript = 'webpack-hot-middleware/client';
  var node = { __dirname: true, __filename: true };

  var prodServerRender = {
    mode: 'production',
    devtool: 'source-map',
    context: PATHS.app,
    entry: { server: ['../server/server', 'babel-polyfill'] },
    target: 'node',
    node: node,
    externals: externals,
    output: {
      path: PATHS.compiled,
      filename: 'server.js',
      publicPath: PATHS.public,
      libraryTarget: 'commonjs2'
    },
    module: { rules: rules({ production: true, browser: false }) },
    resolve: resolve,
    plugins: plugins({ production: true, browser: false })
  };

  var devServerRender = {
    mode: 'development',
    devtool: 'sourcemap',
    context: PATHS.app,
    entry: { server: ['../server/server', 'babel-polyfill'] },
    target: 'node',
    node: node,
    externals: externals,
    output: {
      path: PATHS.compiled,
      filename: '[name].dev.js',
      publicPath: PATHS.public,
      libraryTarget: 'commonjs2'
    },
    module: { rules: rules({ production: false, browser: false }) },
    resolve: resolve,
    plugins: plugins({ production: false, browser: false })
  };
  var prodConfig = prodServerRender;
  var devConfig = devServerRender;
  var configuration = isProduction ? prodConfig : devConfig;

  return configuration;
};

/***/ }),

/***/ 0:
/*!*********************************************!*\
  !*** multi ../server/server babel-polyfill ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ../server/server */"../server/server.js");
module.exports = __webpack_require__(/*! babel-polyfill */"babel-polyfill");


/***/ }),

/***/ "apollo-server-express":
/*!****************************************!*\
  !*** external "apollo-server-express" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("apollo-server-express");

/***/ }),

/***/ "babel-polyfill":
/*!*********************************!*\
  !*** external "babel-polyfill" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("babel-polyfill");

/***/ }),

/***/ "bcrypt-nodejs":
/*!********************************!*\
  !*** external "bcrypt-nodejs" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("bcrypt-nodejs");

/***/ }),

/***/ "body-parser":
/*!******************************!*\
  !*** external "body-parser" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("body-parser");

/***/ }),

/***/ "compression":
/*!******************************!*\
  !*** external "compression" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("compression");

/***/ }),

/***/ "connect-mongo":
/*!********************************!*\
  !*** external "connect-mongo" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("connect-mongo");

/***/ }),

/***/ "cookie-parser":
/*!********************************!*\
  !*** external "cookie-parser" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("cookie-parser");

/***/ }),

/***/ "cors":
/*!***********************!*\
  !*** external "cors" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("cors");

/***/ }),

/***/ "dotenv":
/*!*************************!*\
  !*** external "dotenv" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("dotenv");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("express");

/***/ }),

/***/ "express-flash":
/*!********************************!*\
  !*** external "express-flash" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("express-flash");

/***/ }),

/***/ "express-session":
/*!**********************************!*\
  !*** external "express-session" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("express-session");

/***/ }),

/***/ "extract-text-webpack-plugin":
/*!**********************************************!*\
  !*** external "extract-text-webpack-plugin" ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("extract-text-webpack-plugin");

/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("fs");

/***/ }),

/***/ "graphql":
/*!**************************!*\
  !*** external "graphql" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("graphql");

/***/ }),

/***/ "graphql-iso-date":
/*!***********************************!*\
  !*** external "graphql-iso-date" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("graphql-iso-date");

/***/ }),

/***/ "graphql-tools":
/*!********************************!*\
  !*** external "graphql-tools" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("graphql-tools");

/***/ }),

/***/ "helmet":
/*!*************************!*\
  !*** external "helmet" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("helmet");

/***/ }),

/***/ "lodash":
/*!*************************!*\
  !*** external "lodash" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("lodash");

/***/ }),

/***/ "merge-graphql-schemas":
/*!****************************************!*\
  !*** external "merge-graphql-schemas" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("merge-graphql-schemas");

/***/ }),

/***/ "method-override":
/*!**********************************!*\
  !*** external "method-override" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("method-override");

/***/ }),

/***/ "moment":
/*!*************************!*\
  !*** external "moment" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("moment");

/***/ }),

/***/ "mongoose":
/*!***************************!*\
  !*** external "mongoose" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("mongoose");

/***/ }),

/***/ "morgan":
/*!*************************!*\
  !*** external "morgan" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("morgan");

/***/ }),

/***/ "passport":
/*!***************************!*\
  !*** external "passport" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("passport");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("path");

/***/ }),

/***/ "postcss-cssnext":
/*!**********************************!*\
  !*** external "postcss-cssnext" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("postcss-cssnext");

/***/ }),

/***/ "postcss-global-import":
/*!****************************************!*\
  !*** external "postcss-global-import" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("postcss-global-import");

/***/ }),

/***/ "postcss-import":
/*!*********************************!*\
  !*** external "postcss-import" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("postcss-import");

/***/ }),

/***/ "postcss-reporter":
/*!***********************************!*\
  !*** external "postcss-reporter" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("postcss-reporter");

/***/ }),

/***/ "regenerator-runtime":
/*!**************************************!*\
  !*** external "regenerator-runtime" ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("regenerator-runtime");

/***/ }),

/***/ "webpack":
/*!**************************!*\
  !*** external "webpack" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("webpack");

/***/ }),

/***/ "webpack-dev-middleware":
/*!*****************************************!*\
  !*** external "webpack-dev-middleware" ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("webpack-dev-middleware");

/***/ }),

/***/ "webpack-hot-middleware":
/*!*****************************************!*\
  !*** external "webpack-hot-middleware" ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("webpack-hot-middleware");

/***/ }),

/***/ "webpack-manifest-plugin":
/*!******************************************!*\
  !*** external "webpack-manifest-plugin" ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("webpack-manifest-plugin");

/***/ })

/******/ });
//# sourceMappingURL=server.dev.js.map