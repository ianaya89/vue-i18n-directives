(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("vue-i18n-directives", [], factory);
	else if(typeof exports === 'object')
		exports["vue-i18n-directives"] = factory();
	else
		root["vue-i18n-directives"] = factory();
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
exports.default = {
  update: function update(el, binding, vnode) {
    var vm = vnode.context;
    if (vm.i18n === false) {
      return binding.value;
    }

    var text = vm.$t ? vm.$t(binding.value) : binding.value;
    el.innerHTML += text;
  }
};

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  update: function update(el, binding, vnode) {
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

    el.innerHTML += text;
  }
};

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  update: function update(el, binding, vnode) {
    var vm = vnode.context;
    if (vm.i18n === false) {
      return binding.value;
    }

    var text = vm.$t ? vm.$t(binding.value) : binding.value;
    el.innerHTML += text.toLowerCase();
  }
};

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  update: function update(el, binding, vnode) {
    var vm = vnode.context;
    if (vm.i18n === false) {
      return binding.value;
    }

    var placeholder = vm.$t ? vm.$t(binding.value) : binding.value;
    el.placeholder += placeholder;
  }
};

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
function translateReset(el, binding, vnode) {
  var vm = vnode.context;

  var text = vm.i18n && vm.$t ? vm.$t(binding.value) : binding.value;
  el.innerHTML = text;
}

exports.default = {
  bind: translateReset,
  update: translateReset
};

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  update: function update(el, binding, vnode) {
    var vm = vnode.context;
    if (vm.i18n === false) {
      return binding.value;
    }

    var text = vm.$t ? vm.$t(binding.value) : binding.value;
    el.innerHTML += text.toUpperCase();
  }
};

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.translateReplace = exports.translateLower = exports.translateUpper = exports.translateCapitalize = exports.translatePlaceholder = exports.translate = undefined;

var _tDirective = __webpack_require__(0);

var _tDirective2 = _interopRequireDefault(_tDirective);

var _tpDirective = __webpack_require__(3);

var _tpDirective2 = _interopRequireDefault(_tpDirective);

var _tcDirective = __webpack_require__(1);

var _tcDirective2 = _interopRequireDefault(_tcDirective);

var _tuDirective = __webpack_require__(5);

var _tuDirective2 = _interopRequireDefault(_tuDirective);

var _tlDirective = __webpack_require__(2);

var _tlDirective2 = _interopRequireDefault(_tlDirective);

var _trDirective = __webpack_require__(4);

var _trDirective2 = _interopRequireDefault(_trDirective);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.translate = _tDirective2.default;
exports.translatePlaceholder = _tpDirective2.default;
exports.translateCapitalize = _tcDirective2.default;
exports.translateUpper = _tuDirective2.default;
exports.translateLower = _tlDirective2.default;
exports.translateReplace = _trDirective2.default;


var plugin = {
  install: function install(Vue) {
    Vue.directive('t', _tDirective2.default);
    Vue.directive('tp', _tpDirective2.default);
    Vue.directive('tc', _tcDirective2.default);
    Vue.directive('tu', _tuDirective2.default);
    Vue.directive('tl', _tlDirective2.default);
    Vue.directive('tr', _trDirective2.default);
  }
};

exports.default = plugin;

/***/ })
/******/ ]);
});