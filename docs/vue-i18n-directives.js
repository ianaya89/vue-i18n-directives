(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("VueI18nDirectives", [], factory);
	else if(typeof exports === 'object')
		exports["VueI18nDirectives"] = factory();
	else
		root["VueI18nDirectives"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
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
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 6);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
function translate(el, binding, vnode) {
  var vm = vnode.context;
  if (vm.i18n === false) {
    return binding.value;
  }

  var text = vm.$t ? vm.$t(binding.value) : binding.value;
  el.innerText = text;
}

exports.default = {
  bind: translate,
  update: translate
};

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
function translateAppend(el, binding, vnode) {
  var vm = vnode.context;

  var text = vm.i18n && vm.$t ? vm.$t(binding.value) : binding.value;
  el.innerHTML += text;
}

exports.default = {
  bind: translateAppend,
  update: translateAppend
};

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
function translateCapitalize(el, binding, vnode) {
  var vm = vnode.context;
  if (vm.i18n === false) {
    return binding.value;
  }

  var text = vm.$t ? vm.$t(binding.value) : binding.value;

  if (text) {
    text = text.replace(/\w\S*/g, function (txt) {
      return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
    });
  }

  el.innerText = text;
}

exports.default = {
  bind: translateCapitalize,
  update: translateCapitalize
};

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
function translateLower(el, binding, vnode) {
  var vm = vnode.context;
  if (vm.i18n === false) {
    return binding.value;
  }

  var text = vm.$t ? vm.$t(binding.value) : binding.value;
  el.innerText = text.toLowerCase();
}

exports.default = {
  bind: translateLower,
  update: translateLower
};

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
function translatePlaceholder(el, binding, vnode) {
  var vm = vnode.context;
  if (vm.i18n === false) {
    return binding.value;
  }

  var placeholder = vm.$t ? vm.$t(binding.value) : binding.value;
  el.placeholder = placeholder;
}

exports.default = {
  bind: translatePlaceholder,
  update: translatePlaceholder
};

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
function translateUpper(el, binding, vnode) {
  var vm = vnode.context;
  if (vm.i18n === false) {
    return binding.value;
  }

  var text = vm.$t ? vm.$t(binding.value) : binding.value;
  el.innerText = text.toUpperCase();
}

exports.default = {
  bind: translateUpper,
  update: translateUpper
};

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.translateAppend = exports.translateLower = exports.translateUpper = exports.translateCapitalize = exports.translatePlaceholder = exports.translate = undefined;

var _tDirective = __webpack_require__(0);

var _tDirective2 = _interopRequireDefault(_tDirective);

var _tuDirective = __webpack_require__(5);

var _tuDirective2 = _interopRequireDefault(_tuDirective);

var _tlDirective = __webpack_require__(3);

var _tlDirective2 = _interopRequireDefault(_tlDirective);

var _taDirective = __webpack_require__(1);

var _taDirective2 = _interopRequireDefault(_taDirective);

var _tpDirective = __webpack_require__(4);

var _tpDirective2 = _interopRequireDefault(_tpDirective);

var _tcDirective = __webpack_require__(2);

var _tcDirective2 = _interopRequireDefault(_tcDirective);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.translate = _tDirective2.default;
exports.translatePlaceholder = _tpDirective2.default;
exports.translateCapitalize = _tcDirective2.default;
exports.translateUpper = _tuDirective2.default;
exports.translateLower = _tlDirective2.default;
exports.translateAppend = _taDirective2.default;


var VueI18nDirectives = {
  install: function install(Vue) {
    Vue.directive('t', _tDirective2.default);
    Vue.directive('tu', _tuDirective2.default);
    Vue.directive('tl', _tlDirective2.default);
    Vue.directive('tr', _taDirective2.default);
    Vue.directive('tc', _tcDirective2.default);
    Vue.directive('tp', _tpDirective2.default);
  }
};

exports.default = VueI18nDirectives;

/***/ })
/******/ ]);
});