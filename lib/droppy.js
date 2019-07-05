(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("droppy", [], factory);
	else if(typeof exports === 'object')
		exports["droppy"] = factory();
	else
		root["droppy"] = factory();
})(typeof self !== 'undefined' ? self : this, function() {
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.init = init;
exports.default = void 0;

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var SHOW_EVENT = 'show.droppy';
var SHOWN_EVENT = 'shown.droppy';
var HIDE_EVENT = 'hide.droppy';
var HIDDEN_EVENT = 'hidden.droppy';
var SHOW_CLASS = 'open';
/* Instantiate and dispatch a custom event
 * @private
 * @param  {String} name Name of the custom event
 * @param  {Element} target DOM element that will be available as event.target
 * @param  {Object} detail Object that will be available as event.detail
 */

function dispatchEvent(name, target, detail) {
  // IE doesn't support CustomEvent
  if (typeof window.CustomEvent !== 'function') return;
  var event = new CustomEvent(name, {
    detail: detail,
    bubbles: true,
    cancelable: true
  });
  target.dispatchEvent(event);
}

var Droppy =
/**
 * Initialize the Droppy instance.
 * Will attach a `Droppy` property to the `element`.
 * @param  {HTMLElement} element Node that will act as dropdown toggle
 * @param  {String} [showClass]  Class name assigned to the dropdown on show
 * @return {Object}              The new Droppy instance
 */
function Droppy(_element) {
  var _this = this;

  var _showClass = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : SHOW_CLASS;

  _classCallCheck(this, Droppy);

  _defineProperty(this, "keyHandler", function (event) {
    // Define a list of keys and nodes we want to listen to
    var isValidKey = event.key.match('Escape|ArrowUp|ArrowDown');
    var isValidNode = !event.target.nodeName.match('INPUT|TEXTAREA');
    if (!(isValidKey && isValidNode)) return;
    event.preventDefault(); // Esc key (closes dropdown)

    if (event.key === 'Escape' && _this.isOpen) {
      _this.relatedTarget = null;

      _this.hide();

      _this.element.focus();
    }
  });

  _defineProperty(this, "clickHandler", function (event) {
    if (event.button !== 0) return; // Bail on anything that isn't a left-click

    var element = _this.element,
        isOpen = _this.isOpen,
        dropdown = _this.dropdown;
    var target = event.target; // Handle clicks inside toggle element

    if (target === element) {
      event.preventDefault();
      _this.relatedTarget = element;

      _this.toggle(); // Handle clicks elsewhere in the page when the dropdown is open
      // (except when clicking nested dropdowns or form inputs)

    } else if (isOpen) {
      var isDroppy = target.droppy;
      var isInput = target.nodeName.match('INPUT|TEXTAREA');
      if ((isDroppy || isInput) && dropdown.contains(target)) return;
      _this.relatedTarget = null;

      _this.hide();
    }
  });

  _defineProperty(this, "show", function () {
    var keyHandler = _this.keyHandler,
        element = _this.element,
        dropdown = _this.dropdown,
        showClass = _this.showClass,
        relatedTarget = _this.relatedTarget;
    dispatchEvent(SHOW_EVENT, dropdown, {
      relatedTarget: relatedTarget
    });
    dropdown.classList.add(showClass);
    element.setAttribute('aria-expanded', true);
    dispatchEvent(SHOWN_EVENT, dropdown, {
      relatedTarget: relatedTarget
    });
    document.addEventListener('keydown', keyHandler);
    _this.isOpen = true;
  });

  _defineProperty(this, "hide", function () {
    var keyHandler = _this.keyHandler,
        element = _this.element,
        dropdown = _this.dropdown,
        showClass = _this.showClass,
        relatedTarget = _this.relatedTarget;
    dispatchEvent(HIDE_EVENT, dropdown, {
      relatedTarget: relatedTarget
    });
    dropdown.classList.remove(showClass);
    element.setAttribute('aria-expanded', false);
    dispatchEvent(HIDDEN_EVENT, dropdown, {
      relatedTarget: relatedTarget
    });
    document.removeEventListener('keydown', keyHandler);
    _this.isOpen = false;
  });

  _defineProperty(this, "toggle", function () {
    _this.isOpen ? _this.hide() : _this.show();
  });

  this.element = _element;
  this.showClass = _showClass;
  this.dropdown = document.getElementById(_element.getAttribute('aria-controls'));
  this.relatedTarget = null;
  this.isOpen = false;

  if (!this.dropdown) {
    console.error("Could not find related dropdown for ".concat(_element.textContent, ". Make sure the aria-controls attribute is set."));
  }

  if (!('droppy' in _element)) {
    document.addEventListener('click', this.clickHandler);
  }

  this.element.setAttribute('aria-expanded', false);
  _element.droppy = this;
  return this;
}
/**
 * Handle keyboard input for enhanced dropdown navigation.
 * @param  {KeyboardEvent} event
 */
;
/**
 * Initialize dropdowns on the document
 * @param  {String} [showClass]   Passed directly to the Droppy constructor
 * @see Droppy
 */


exports.default = Droppy;

function init() {
  var showClass = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : SHOW_CLASS;
  var elements = document.querySelectorAll('[data-toggle="dropdown"]');
  [].concat(_toConsumableArray(elements)).forEach(function (element) {
    return new Droppy(element, showClass);
  });
}

/***/ })

/******/ });
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9kcm9wcHkvd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovL2Ryb3BweS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9kcm9wcHkvLi9zcmMvaW5kZXguanMiXSwibmFtZXMiOlsiU0hPV19FVkVOVCIsIlNIT1dOX0VWRU5UIiwiSElERV9FVkVOVCIsIkhJRERFTl9FVkVOVCIsIlNIT1dfQ0xBU1MiLCJkaXNwYXRjaEV2ZW50IiwibmFtZSIsInRhcmdldCIsImRldGFpbCIsIndpbmRvdyIsIkN1c3RvbUV2ZW50IiwiZXZlbnQiLCJidWJibGVzIiwiY2FuY2VsYWJsZSIsIkRyb3BweSIsImVsZW1lbnQiLCJzaG93Q2xhc3MiLCJpc1ZhbGlkS2V5Iiwia2V5IiwibWF0Y2giLCJpc1ZhbGlkTm9kZSIsIm5vZGVOYW1lIiwicHJldmVudERlZmF1bHQiLCJpc09wZW4iLCJyZWxhdGVkVGFyZ2V0IiwiaGlkZSIsImZvY3VzIiwiYnV0dG9uIiwiZHJvcGRvd24iLCJ0b2dnbGUiLCJpc0Ryb3BweSIsImRyb3BweSIsImlzSW5wdXQiLCJjb250YWlucyIsImtleUhhbmRsZXIiLCJjbGFzc0xpc3QiLCJhZGQiLCJzZXRBdHRyaWJ1dGUiLCJkb2N1bWVudCIsImFkZEV2ZW50TGlzdGVuZXIiLCJyZW1vdmUiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwic2hvdyIsImdldEVsZW1lbnRCeUlkIiwiZ2V0QXR0cmlidXRlIiwiY29uc29sZSIsImVycm9yIiwidGV4dENvbnRlbnQiLCJjbGlja0hhbmRsZXIiLCJpbml0IiwiZWxlbWVudHMiLCJxdWVyeVNlbGVjdG9yQWxsIiwiZm9yRWFjaCJdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNELE87QUNWQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FB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RUkvQixRQUFPLENBQUNnQyxXQUZaO0FBS0Q7O0FBRUQsTUFBSSxFQUFFLFlBQVloQyxRQUFkLENBQUosRUFBNEI7QUFDMUJ1QixZQUFRLENBQUNDLGdCQUFULENBQTBCLE9BQTFCLEVBQW1DLEtBQUtTLFlBQXhDO0FBQ0Q7O0FBRUQsT0FBS2pDLE9BQUwsQ0FBYXNCLFlBQWIsQ0FBMEIsZUFBMUIsRUFBMkMsS0FBM0M7QUFDQXRCLFVBQU8sQ0FBQ2dCLE1BQVIsR0FBaUIsSUFBakI7QUFDQSxTQUFPLElBQVA7QUFDRDtBQUVEOzs7OztBQXVGRjs7Ozs7Ozs7O0FBS08sU0FBU2tCLElBQVQsR0FBc0M7QUFBQSxNQUF4QmpDLFNBQXdCLHVFQUFaWixVQUFZO0FBQzNDLE1BQU04QyxRQUFRLEdBQUdaLFFBQVEsQ0FBQ2EsZ0JBQVQsQ0FBMEIsMEJBQTFCLENBQWpCO0FBQ0MsK0JBQUlELFFBQUosR0FBY0UsT0FBZCxDQUFzQixVQUFBckMsT0FBTztBQUFBLFdBQUksSUFBSUQsTUFBSixDQUFXQyxPQUFYLEVBQW9CQyxTQUFwQixDQUFKO0FBQUEsR0FBN0I7QUFDRixDIiwiZmlsZSI6ImRyb3BweS5qcyIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiB3ZWJwYWNrVW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbihyb290LCBmYWN0b3J5KSB7XG5cdGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlID09PSAnb2JqZWN0Jylcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkoKTtcblx0ZWxzZSBpZih0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpXG5cdFx0ZGVmaW5lKFwiZHJvcHB5XCIsIFtdLCBmYWN0b3J5KTtcblx0ZWxzZSBpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcpXG5cdFx0ZXhwb3J0c1tcImRyb3BweVwiXSA9IGZhY3RvcnkoKTtcblx0ZWxzZVxuXHRcdHJvb3RbXCJkcm9wcHlcIl0gPSBmYWN0b3J5KCk7XG59KSh0eXBlb2Ygc2VsZiAhPT0gJ3VuZGVmaW5lZCcgPyBzZWxmIDogdGhpcywgZnVuY3Rpb24oKSB7XG5yZXR1cm4gIiwiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvaW5kZXguanNcIik7XG4iLCJjb25zdCBTSE9XX0VWRU5UID0gJ3Nob3cuZHJvcHB5J1xuY29uc3QgU0hPV05fRVZFTlQgPSAnc2hvd24uZHJvcHB5J1xuY29uc3QgSElERV9FVkVOVCA9ICdoaWRlLmRyb3BweSdcbmNvbnN0IEhJRERFTl9FVkVOVCA9ICdoaWRkZW4uZHJvcHB5J1xuXG5jb25zdCBTSE9XX0NMQVNTID0gJ29wZW4nXG5cbi8qIEluc3RhbnRpYXRlIGFuZCBkaXNwYXRjaCBhIGN1c3RvbSBldmVudFxuICogQHByaXZhdGVcbiAqIEBwYXJhbSAge1N0cmluZ30gbmFtZSBOYW1lIG9mIHRoZSBjdXN0b20gZXZlbnRcbiAqIEBwYXJhbSAge0VsZW1lbnR9IHRhcmdldCBET00gZWxlbWVudCB0aGF0IHdpbGwgYmUgYXZhaWxhYmxlIGFzIGV2ZW50LnRhcmdldFxuICogQHBhcmFtICB7T2JqZWN0fSBkZXRhaWwgT2JqZWN0IHRoYXQgd2lsbCBiZSBhdmFpbGFibGUgYXMgZXZlbnQuZGV0YWlsXG4gKi9cbmZ1bmN0aW9uIGRpc3BhdGNoRXZlbnQobmFtZSwgdGFyZ2V0LCBkZXRhaWwpIHtcbiAgLy8gSUUgZG9lc24ndCBzdXBwb3J0IEN1c3RvbUV2ZW50XG4gIGlmICh0eXBlb2Ygd2luZG93LkN1c3RvbUV2ZW50ICE9PSAnZnVuY3Rpb24nKSByZXR1cm5cbiAgY29uc3QgZXZlbnQgPSBuZXcgQ3VzdG9tRXZlbnQobmFtZSwge1xuICAgIGRldGFpbCxcbiAgICBidWJibGVzOiB0cnVlLFxuICAgIGNhbmNlbGFibGU6IHRydWVcbiAgfSlcbiAgdGFyZ2V0LmRpc3BhdGNoRXZlbnQoZXZlbnQpXG59XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIERyb3BweSB7XG4gIC8qKlxuICAgKiBJbml0aWFsaXplIHRoZSBEcm9wcHkgaW5zdGFuY2UuXG4gICAqIFdpbGwgYXR0YWNoIGEgYERyb3BweWAgcHJvcGVydHkgdG8gdGhlIGBlbGVtZW50YC5cbiAgICogQHBhcmFtICB7SFRNTEVsZW1lbnR9IGVsZW1lbnQgTm9kZSB0aGF0IHdpbGwgYWN0IGFzIGRyb3Bkb3duIHRvZ2dsZVxuICAgKiBAcGFyYW0gIHtTdHJpbmd9IFtzaG93Q2xhc3NdICBDbGFzcyBuYW1lIGFzc2lnbmVkIHRvIHRoZSBkcm9wZG93biBvbiBzaG93XG4gICAqIEByZXR1cm4ge09iamVjdH0gICAgICAgICAgICAgIFRoZSBuZXcgRHJvcHB5IGluc3RhbmNlXG4gICAqL1xuICBjb25zdHJ1Y3RvcihlbGVtZW50LCBzaG93Q2xhc3MgPSBTSE9XX0NMQVNTKSB7XG4gICAgdGhpcy5lbGVtZW50ID0gZWxlbWVudFxuICAgIHRoaXMuc2hvd0NsYXNzID0gc2hvd0NsYXNzXG4gICAgdGhpcy5kcm9wZG93biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFxuICAgICAgZWxlbWVudC5nZXRBdHRyaWJ1dGUoJ2FyaWEtY29udHJvbHMnKVxuICAgIClcbiAgICB0aGlzLnJlbGF0ZWRUYXJnZXQgPSBudWxsXG4gICAgdGhpcy5pc09wZW4gPSBmYWxzZVxuXG4gICAgaWYgKCF0aGlzLmRyb3Bkb3duKSB7XG4gICAgICBjb25zb2xlLmVycm9yKFxuICAgICAgICBgQ291bGQgbm90IGZpbmQgcmVsYXRlZCBkcm9wZG93biBmb3IgJHtcbiAgICAgICAgICBlbGVtZW50LnRleHRDb250ZW50XG4gICAgICAgIH0uIE1ha2Ugc3VyZSB0aGUgYXJpYS1jb250cm9scyBhdHRyaWJ1dGUgaXMgc2V0LmBcbiAgICAgIClcbiAgICB9XG5cbiAgICBpZiAoISgnZHJvcHB5JyBpbiBlbGVtZW50KSkge1xuICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLmNsaWNrSGFuZGxlcilcbiAgICB9XG5cbiAgICB0aGlzLmVsZW1lbnQuc2V0QXR0cmlidXRlKCdhcmlhLWV4cGFuZGVkJywgZmFsc2UpXG4gICAgZWxlbWVudC5kcm9wcHkgPSB0aGlzXG4gICAgcmV0dXJuIHRoaXNcbiAgfVxuXG4gIC8qKlxuICAgKiBIYW5kbGUga2V5Ym9hcmQgaW5wdXQgZm9yIGVuaGFuY2VkIGRyb3Bkb3duIG5hdmlnYXRpb24uXG4gICAqIEBwYXJhbSAge0tleWJvYXJkRXZlbnR9IGV2ZW50XG4gICAqL1xuICBrZXlIYW5kbGVyID0gZXZlbnQgPT4ge1xuICAgIC8vIERlZmluZSBhIGxpc3Qgb2Yga2V5cyBhbmQgbm9kZXMgd2Ugd2FudCB0byBsaXN0ZW4gdG9cbiAgICBjb25zdCBpc1ZhbGlkS2V5ID0gZXZlbnQua2V5Lm1hdGNoKCdFc2NhcGV8QXJyb3dVcHxBcnJvd0Rvd24nKVxuICAgIGNvbnN0IGlzVmFsaWROb2RlID0gIWV2ZW50LnRhcmdldC5ub2RlTmFtZS5tYXRjaCgnSU5QVVR8VEVYVEFSRUEnKVxuICAgIGlmICghKGlzVmFsaWRLZXkgJiYgaXNWYWxpZE5vZGUpKSByZXR1cm5cblxuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KClcblxuICAgIC8vIEVzYyBrZXkgKGNsb3NlcyBkcm9wZG93bilcbiAgICBpZiAoZXZlbnQua2V5ID09PSAnRXNjYXBlJyAmJiB0aGlzLmlzT3Blbikge1xuICAgICAgdGhpcy5yZWxhdGVkVGFyZ2V0ID0gbnVsbFxuICAgICAgdGhpcy5oaWRlKClcbiAgICAgIHRoaXMuZWxlbWVudC5mb2N1cygpXG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIEhhbmRsZXMgY2xpY2tzIG9uIHRoZSBlbnRpcmUgZG9jdW1lbnQgdG8gb3BlbiAvIGNsb3NlIHRoZSBkcm9wZG93bnMuXG4gICAqIENsaWNrcyBvdXRzaWRlIHRoZSBkcm9wZG93biB3aWxsIGNsb3NlIGl0LlxuICAgKiBDbGlja3Mgb24gdGhlIGRyb3Bkb3duIHRvZ2dsZSBlbGVtZW50IHdpbGwgdG9nZ2xlIGl0LlxuICAgKiBAcGFyYW0gIHtNb3VzZUV2ZW50fSBldmVudFxuICAgKi9cbiAgY2xpY2tIYW5kbGVyID0gZXZlbnQgPT4ge1xuICAgIGlmIChldmVudC5idXR0b24gIT09IDApIHJldHVybiAvLyBCYWlsIG9uIGFueXRoaW5nIHRoYXQgaXNuJ3QgYSBsZWZ0LWNsaWNrXG5cbiAgICBjb25zdCB7IGVsZW1lbnQsIGlzT3BlbiwgZHJvcGRvd24gfSA9IHRoaXNcbiAgICBjb25zdCB7IHRhcmdldCB9ID0gZXZlbnRcblxuICAgIC8vIEhhbmRsZSBjbGlja3MgaW5zaWRlIHRvZ2dsZSBlbGVtZW50XG4gICAgaWYgKHRhcmdldCA9PT0gZWxlbWVudCkge1xuICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKVxuICAgICAgdGhpcy5yZWxhdGVkVGFyZ2V0ID0gZWxlbWVudFxuICAgICAgdGhpcy50b2dnbGUoKVxuXG4gICAgICAvLyBIYW5kbGUgY2xpY2tzIGVsc2V3aGVyZSBpbiB0aGUgcGFnZSB3aGVuIHRoZSBkcm9wZG93biBpcyBvcGVuXG4gICAgICAvLyAoZXhjZXB0IHdoZW4gY2xpY2tpbmcgbmVzdGVkIGRyb3Bkb3ducyBvciBmb3JtIGlucHV0cylcbiAgICB9IGVsc2UgaWYgKGlzT3Blbikge1xuICAgICAgY29uc3QgaXNEcm9wcHkgPSB0YXJnZXQuZHJvcHB5XG4gICAgICBjb25zdCBpc0lucHV0ID0gdGFyZ2V0Lm5vZGVOYW1lLm1hdGNoKCdJTlBVVHxURVhUQVJFQScpXG4gICAgICBpZiAoKGlzRHJvcHB5IHx8IGlzSW5wdXQpICYmIGRyb3Bkb3duLmNvbnRhaW5zKHRhcmdldCkpIHJldHVyblxuXG4gICAgICB0aGlzLnJlbGF0ZWRUYXJnZXQgPSBudWxsXG4gICAgICB0aGlzLmhpZGUoKVxuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBTaG93IHRoZSBkcm9wZG93biBtZW51LlxuICAgKiBUb2dnbGVzIGNsYXNzTmFtZXMsIGRpc3BhdGNoZXMgZXZlbnRzLCBhbmQgc2V0cyB1cCBrZXlwcmVzcyBoYW5kbGVycy5cbiAgICovXG4gIHNob3cgPSAoKSA9PiB7XG4gICAgY29uc3QgeyBrZXlIYW5kbGVyLCBlbGVtZW50LCBkcm9wZG93biwgc2hvd0NsYXNzLCByZWxhdGVkVGFyZ2V0IH0gPSB0aGlzXG4gICAgZGlzcGF0Y2hFdmVudChTSE9XX0VWRU5ULCBkcm9wZG93biwgeyByZWxhdGVkVGFyZ2V0IH0pXG4gICAgZHJvcGRvd24uY2xhc3NMaXN0LmFkZChzaG93Q2xhc3MpXG4gICAgZWxlbWVudC5zZXRBdHRyaWJ1dGUoJ2FyaWEtZXhwYW5kZWQnLCB0cnVlKVxuICAgIGRpc3BhdGNoRXZlbnQoU0hPV05fRVZFTlQsIGRyb3Bkb3duLCB7IHJlbGF0ZWRUYXJnZXQgfSlcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywga2V5SGFuZGxlcilcbiAgICB0aGlzLmlzT3BlbiA9IHRydWVcbiAgfVxuXG4gIC8qKlxuICAgKiBIaWRlIHRoZSBkcm9wZG93biBtZW51LlxuICAgKiBUb2dnbGVzIGNsYXNzTmFtZXMsIGRpc3BhdGNoZXMgZXZlbnRzLCBhbmQgcmVtb3ZlcyBrZXlwcmVzcyBoYW5kbGVycy5cbiAgICovXG4gIGhpZGUgPSAoKSA9PiB7XG4gICAgY29uc3QgeyBrZXlIYW5kbGVyLCBlbGVtZW50LCBkcm9wZG93biwgc2hvd0NsYXNzLCByZWxhdGVkVGFyZ2V0IH0gPSB0aGlzXG4gICAgZGlzcGF0Y2hFdmVudChISURFX0VWRU5ULCBkcm9wZG93biwgeyByZWxhdGVkVGFyZ2V0IH0pXG4gICAgZHJvcGRvd24uY2xhc3NMaXN0LnJlbW92ZShzaG93Q2xhc3MpXG4gICAgZWxlbWVudC5zZXRBdHRyaWJ1dGUoJ2FyaWEtZXhwYW5kZWQnLCBmYWxzZSlcbiAgICBkaXNwYXRjaEV2ZW50KEhJRERFTl9FVkVOVCwgZHJvcGRvd24sIHsgcmVsYXRlZFRhcmdldCB9KVxuICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCBrZXlIYW5kbGVyKVxuICAgIHRoaXMuaXNPcGVuID0gZmFsc2VcbiAgfVxuXG4gIC8qKlxuICAgKiBUb2dnbGUgdGhlIGRyb3Bkb3duIG1lbnUuXG4gICAqIFdpbGwgZGVjaWRlIGlmIHRoZSBtZW51IHNob3VsZCBiZSBzaG93biBvciBoaWRkZW4gZGVwZW5kaW5nIG9uIGN1cnJlbnQgc3RhdGUuXG4gICAqL1xuICB0b2dnbGUgPSAoKSA9PiB7XG4gICAgdGhpcy5pc09wZW4gPyB0aGlzLmhpZGUoKSA6IHRoaXMuc2hvdygpXG4gIH1cbn1cblxuLyoqXG4gKiBJbml0aWFsaXplIGRyb3Bkb3ducyBvbiB0aGUgZG9jdW1lbnRcbiAqIEBwYXJhbSAge1N0cmluZ30gW3Nob3dDbGFzc10gICBQYXNzZWQgZGlyZWN0bHkgdG8gdGhlIERyb3BweSBjb25zdHJ1Y3RvclxuICogQHNlZSBEcm9wcHlcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGluaXQoc2hvd0NsYXNzID0gU0hPV19DTEFTUykge1xuICBjb25zdCBlbGVtZW50cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ1tkYXRhLXRvZ2dsZT1cImRyb3Bkb3duXCJdJylcbiAgO1suLi5lbGVtZW50c10uZm9yRWFjaChlbGVtZW50ID0+IG5ldyBEcm9wcHkoZWxlbWVudCwgc2hvd0NsYXNzKSlcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=