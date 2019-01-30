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
var SHOW_CLASS = 'show';
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
 * @param  {String} [showClass]  Classname assigned to the parent on show
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

    var hasOpenSubmenus = _this.menu.querySelector('[aria-expanded="true"]');

    if (event.key === 'Escape' && _this.isOpen && !hasOpenSubmenus) {
      _this.relatedTarget = null;

      _this.hide();

      _this.element.focus();

      return;
    } // Up / down arrows (behaves as Shift + TAB / TAB)


    var items = [].concat(_toConsumableArray(_this.menu.querySelectorAll('a, button, input, textarea')));
    if (!items.length) return;
    var index = items.indexOf(event.target);
    if (event.key === 'ArrowUp' && index > 0) index--;
    if (event.key === 'ArrowDown' && index < items.length - 1) index++;
    if (index < 0) index = 0;
    items[index].focus();
  });

  _defineProperty(this, "clickHandler", function (event) {
    if (event.button !== 0) return; // Bail on anything that isn't a left-click

    var element = _this.element,
        isOpen = _this.isOpen,
        menu = _this.menu;
    var target = event.target; // Handle clicks inside toggle element

    if (target === element) {
      event.preventDefault();
      _this.relatedTarget = element;

      _this.toggle(); // Handle clicks elsewhere in the page when the dropdown is open
      // (except when clicking nested dropdowns or form inputs)

    } else if (isOpen) {
      var targetIsToggle = target.dataset.toggle === 'dropdown';
      var targetIsInput = target.nodeName.match('INPUT|TEXTAREA');
      if ((targetIsToggle || targetIsInput) && menu.contains(target)) return;
      _this.relatedTarget = null;

      _this.hide();
    }
  });

  _defineProperty(this, "show", function () {
    var keyHandler = _this.keyHandler,
        menu = _this.menu,
        showClass = _this.showClass,
        parent = _this.parent,
        relatedTarget = _this.relatedTarget;
    dispatchEvent(SHOW_EVENT, parent, {
      relatedTarget: relatedTarget
    });
    parent.classList.add(showClass);
    menu.setAttribute('aria-expanded', true);
    dispatchEvent(SHOWN_EVENT, parent, {
      relatedTarget: relatedTarget
    });
    document.addEventListener('keydown', keyHandler);
    _this.isOpen = true;
  });

  _defineProperty(this, "hide", function () {
    var keyHandler = _this.keyHandler,
        menu = _this.menu,
        showClass = _this.showClass,
        parent = _this.parent,
        relatedTarget = _this.relatedTarget;
    dispatchEvent(HIDE_EVENT, parent, {
      relatedTarget: relatedTarget
    });
    parent.classList.remove(showClass);
    menu.setAttribute('aria-expanded', false);
    dispatchEvent(HIDDEN_EVENT, parent, {
      relatedTarget: relatedTarget
    });
    document.removeEventListener('keydown', keyHandler);
    _this.isOpen = false;
  });

  _defineProperty(this, "toggle", function () {
    if (_this.parent.classList.contains(_this.showClass) && _this.isOpen) {
      _this.hide();
    } else {
      _this.show();
    }
  });

  this.element = _element;
  this.showClass = _showClass;
  this.parent = _element.parentNode;
  this.menu = this.parent.querySelector('[role="menu"]');
  this.relatedTarget = null;
  this.isOpen = false;

  if (!('Droppy' in _element)) {
    document.addEventListener('click', this.clickHandler);
  }

  _element.Droppy = this;
  return this;
}
/**
 * Handle keyboard input for enhanced dropdown navigation.
 * Allows using 'Esc' to close the dropdown, and the up/down arrow keys to move.
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9kcm9wcHkvd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovL2Ryb3BweS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9kcm9wcHkvLi9zcmMvaW5kZXguanMiXSwibmFtZXMiOlsiU0hPV19FVkVOVCIsIlNIT1dOX0VWRU5UIiwiSElERV9FVkVOVCIsIkhJRERFTl9FVkVOVCIsIlNIT1dfQ0xBU1MiLCJkaXNwYXRjaEV2ZW50IiwibmFtZSIsInRhcmdldCIsImRldGFpbCIsIndpbmRvdyIsIkN1c3RvbUV2ZW50IiwiZXZlbnQiLCJidWJibGVzIiwiY2FuY2VsYWJsZSIsIkRyb3BweSIsImVsZW1lbnQiLCJzaG93Q2xhc3MiLCJpc1ZhbGlkS2V5Iiwia2V5IiwibWF0Y2giLCJpc1ZhbGlkTm9kZSIsIm5vZGVOYW1lIiwicHJldmVudERlZmF1bHQiLCJoYXNPcGVuU3VibWVudXMiLCJtZW51IiwicXVlcnlTZWxlY3RvciIsImlzT3BlbiIsInJlbGF0ZWRUYXJnZXQiLCJoaWRlIiwiZm9jdXMiLCJpdGVtcyIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJsZW5ndGgiLCJpbmRleCIsImluZGV4T2YiLCJidXR0b24iLCJ0b2dnbGUiLCJ0YXJnZXRJc1RvZ2dsZSIsImRhdGFzZXQiLCJ0YXJnZXRJc0lucHV0IiwiY29udGFpbnMiLCJrZXlIYW5kbGVyIiwicGFyZW50IiwiY2xhc3NMaXN0IiwiYWRkIiwic2V0QXR0cmlidXRlIiwiZG9jdW1lbnQiLCJhZGRFdmVudExpc3RlbmVyIiwicmVtb3ZlIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsInNob3ciLCJwYXJlbnROb2RlIiwiY2xpY2tIYW5kbGVyIiwiaW5pdCIsImVsZW1lbnRzIiwiZm9yRWFjaCJdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNELE87QUNWQTtBQUNBOztBQUVBO0FB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R0FBR1IsUUFBUSxDQUFDZixnQkFBVCxDQUEwQiwwQkFBMUIsQ0FBakI7QUFDQywrQkFBSXVCLFFBQUosR0FBY0MsT0FBZCxDQUFzQixVQUFBeEMsT0FBTztBQUFBLFdBQUksSUFBSUQsTUFBSixDQUFXQyxPQUFYLEVBQW9CQyxTQUFwQixDQUFKO0FBQUEsR0FBN0I7QUFDRixDIiwiZmlsZSI6ImRyb3BweS5qcyIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiB3ZWJwYWNrVW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbihyb290LCBmYWN0b3J5KSB7XG5cdGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlID09PSAnb2JqZWN0Jylcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkoKTtcblx0ZWxzZSBpZih0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpXG5cdFx0ZGVmaW5lKFwiZHJvcHB5XCIsIFtdLCBmYWN0b3J5KTtcblx0ZWxzZSBpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcpXG5cdFx0ZXhwb3J0c1tcImRyb3BweVwiXSA9IGZhY3RvcnkoKTtcblx0ZWxzZVxuXHRcdHJvb3RbXCJkcm9wcHlcIl0gPSBmYWN0b3J5KCk7XG59KSh0eXBlb2Ygc2VsZiAhPT0gJ3VuZGVmaW5lZCcgPyBzZWxmIDogdGhpcywgZnVuY3Rpb24oKSB7XG5yZXR1cm4gIiwiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvaW5kZXguanNcIik7XG4iLCJjb25zdCBTSE9XX0VWRU5UID0gJ3Nob3cuZHJvcHB5J1xuY29uc3QgU0hPV05fRVZFTlQgPSAnc2hvd24uZHJvcHB5J1xuY29uc3QgSElERV9FVkVOVCA9ICdoaWRlLmRyb3BweSdcbmNvbnN0IEhJRERFTl9FVkVOVCA9ICdoaWRkZW4uZHJvcHB5J1xuXG5jb25zdCBTSE9XX0NMQVNTID0gJ3Nob3cnXG5cbi8qIEluc3RhbnRpYXRlIGFuZCBkaXNwYXRjaCBhIGN1c3RvbSBldmVudFxuICogQHByaXZhdGVcbiAqIEBwYXJhbSAge1N0cmluZ30gbmFtZSBOYW1lIG9mIHRoZSBjdXN0b20gZXZlbnRcbiAqIEBwYXJhbSAge0VsZW1lbnR9IHRhcmdldCBET00gZWxlbWVudCB0aGF0IHdpbGwgYmUgYXZhaWxhYmxlIGFzIGV2ZW50LnRhcmdldFxuICogQHBhcmFtICB7T2JqZWN0fSBkZXRhaWwgT2JqZWN0IHRoYXQgd2lsbCBiZSBhdmFpbGFibGUgYXMgZXZlbnQuZGV0YWlsXG4gKi9cbmZ1bmN0aW9uIGRpc3BhdGNoRXZlbnQobmFtZSwgdGFyZ2V0LCBkZXRhaWwpIHtcbiAgLy8gSUUgZG9lc24ndCBzdXBwb3J0IEN1c3RvbUV2ZW50XG4gIGlmICh0eXBlb2Ygd2luZG93LkN1c3RvbUV2ZW50ICE9PSAnZnVuY3Rpb24nKSByZXR1cm5cbiAgY29uc3QgZXZlbnQgPSBuZXcgQ3VzdG9tRXZlbnQobmFtZSwge1xuICAgIGRldGFpbCxcbiAgICBidWJibGVzOiB0cnVlLFxuICAgIGNhbmNlbGFibGU6IHRydWVcbiAgfSlcbiAgdGFyZ2V0LmRpc3BhdGNoRXZlbnQoZXZlbnQpXG59XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIERyb3BweSB7XG4gIC8qKlxuICAgKiBJbml0aWFsaXplIHRoZSBEcm9wcHkgaW5zdGFuY2UuXG4gICAqIFdpbGwgYXR0YWNoIGEgYERyb3BweWAgcHJvcGVydHkgdG8gdGhlIGBlbGVtZW50YC5cbiAgICogQHBhcmFtICB7SFRNTEVsZW1lbnR9IGVsZW1lbnQgTm9kZSB0aGF0IHdpbGwgYWN0IGFzIGRyb3Bkb3duIHRvZ2dsZVxuICAgKiBAcGFyYW0gIHtTdHJpbmd9IFtzaG93Q2xhc3NdICBDbGFzc25hbWUgYXNzaWduZWQgdG8gdGhlIHBhcmVudCBvbiBzaG93XG4gICAqIEByZXR1cm4ge09iamVjdH0gICAgICAgICAgICAgIFRoZSBuZXcgRHJvcHB5IGluc3RhbmNlXG4gICAqL1xuICBjb25zdHJ1Y3RvcihlbGVtZW50LCBzaG93Q2xhc3MgPSBTSE9XX0NMQVNTKSB7XG4gICAgdGhpcy5lbGVtZW50ID0gZWxlbWVudFxuICAgIHRoaXMuc2hvd0NsYXNzID0gc2hvd0NsYXNzXG4gICAgdGhpcy5wYXJlbnQgPSBlbGVtZW50LnBhcmVudE5vZGVcbiAgICB0aGlzLm1lbnUgPSB0aGlzLnBhcmVudC5xdWVyeVNlbGVjdG9yKCdbcm9sZT1cIm1lbnVcIl0nKVxuICAgIHRoaXMucmVsYXRlZFRhcmdldCA9IG51bGxcbiAgICB0aGlzLmlzT3BlbiA9IGZhbHNlXG5cbiAgICBpZiAoISgnRHJvcHB5JyBpbiBlbGVtZW50KSkge1xuICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLmNsaWNrSGFuZGxlcilcbiAgICB9XG4gICAgZWxlbWVudC5Ecm9wcHkgPSB0aGlzXG4gICAgcmV0dXJuIHRoaXNcbiAgfVxuXG4gIC8qKlxuICAgKiBIYW5kbGUga2V5Ym9hcmQgaW5wdXQgZm9yIGVuaGFuY2VkIGRyb3Bkb3duIG5hdmlnYXRpb24uXG4gICAqIEFsbG93cyB1c2luZyAnRXNjJyB0byBjbG9zZSB0aGUgZHJvcGRvd24sIGFuZCB0aGUgdXAvZG93biBhcnJvdyBrZXlzIHRvIG1vdmUuXG4gICAqIEBwYXJhbSAge0tleWJvYXJkRXZlbnR9IGV2ZW50XG4gICAqL1xuICBrZXlIYW5kbGVyID0gZXZlbnQgPT4ge1xuICAgIC8vIERlZmluZSBhIGxpc3Qgb2Yga2V5cyBhbmQgbm9kZXMgd2Ugd2FudCB0byBsaXN0ZW4gdG9cbiAgICBjb25zdCBpc1ZhbGlkS2V5ID0gZXZlbnQua2V5Lm1hdGNoKCdFc2NhcGV8QXJyb3dVcHxBcnJvd0Rvd24nKVxuICAgIGNvbnN0IGlzVmFsaWROb2RlID0gIWV2ZW50LnRhcmdldC5ub2RlTmFtZS5tYXRjaCgnSU5QVVR8VEVYVEFSRUEnKVxuICAgIGlmICghKGlzVmFsaWRLZXkgJiYgaXNWYWxpZE5vZGUpKSByZXR1cm5cblxuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KClcblxuICAgIC8vIEVzYyBrZXkgKGNsb3NlcyBkcm9wZG93bilcbiAgICBjb25zdCBoYXNPcGVuU3VibWVudXMgPSB0aGlzLm1lbnUucXVlcnlTZWxlY3RvcignW2FyaWEtZXhwYW5kZWQ9XCJ0cnVlXCJdJylcbiAgICBpZiAoZXZlbnQua2V5ID09PSAnRXNjYXBlJyAmJiB0aGlzLmlzT3BlbiAmJiAhaGFzT3BlblN1Ym1lbnVzKSB7XG4gICAgICB0aGlzLnJlbGF0ZWRUYXJnZXQgPSBudWxsXG4gICAgICB0aGlzLmhpZGUoKVxuICAgICAgdGhpcy5lbGVtZW50LmZvY3VzKClcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIC8vIFVwIC8gZG93biBhcnJvd3MgKGJlaGF2ZXMgYXMgU2hpZnQgKyBUQUIgLyBUQUIpXG4gICAgY29uc3QgaXRlbXMgPSBbLi4udGhpcy5tZW51LnF1ZXJ5U2VsZWN0b3JBbGwoJ2EsIGJ1dHRvbiwgaW5wdXQsIHRleHRhcmVhJyldXG4gICAgaWYgKCFpdGVtcy5sZW5ndGgpIHJldHVyblxuICAgIGxldCBpbmRleCA9IGl0ZW1zLmluZGV4T2YoZXZlbnQudGFyZ2V0KVxuXG4gICAgaWYgKGV2ZW50LmtleSA9PT0gJ0Fycm93VXAnICYmIGluZGV4ID4gMCkgaW5kZXgtLVxuICAgIGlmIChldmVudC5rZXkgPT09ICdBcnJvd0Rvd24nICYmIGluZGV4IDwgaXRlbXMubGVuZ3RoIC0gMSkgaW5kZXgrK1xuICAgIGlmIChpbmRleCA8IDApIGluZGV4ID0gMFxuICAgIGl0ZW1zW2luZGV4XS5mb2N1cygpXG4gIH1cblxuICAvKipcbiAgICogSGFuZGxlcyBjbGlja3Mgb24gdGhlIGVudGlyZSBkb2N1bWVudCB0byBvcGVuIC8gY2xvc2UgdGhlIGRyb3Bkb3ducy5cbiAgICogQ2xpY2tzIG91dHNpZGUgdGhlIGRyb3Bkb3duIHdpbGwgY2xvc2UgaXQuXG4gICAqIENsaWNrcyBvbiB0aGUgZHJvcGRvd24gdG9nZ2xlIGVsZW1lbnQgd2lsbCB0b2dnbGUgaXQuXG4gICAqIEBwYXJhbSAge01vdXNlRXZlbnR9IGV2ZW50XG4gICAqL1xuICBjbGlja0hhbmRsZXIgPSBldmVudCA9PiB7XG4gICAgaWYgKGV2ZW50LmJ1dHRvbiAhPT0gMCkgcmV0dXJuIC8vIEJhaWwgb24gYW55dGhpbmcgdGhhdCBpc24ndCBhIGxlZnQtY2xpY2tcblxuICAgIGNvbnN0IHsgZWxlbWVudCwgaXNPcGVuLCBtZW51IH0gPSB0aGlzXG4gICAgY29uc3QgdGFyZ2V0ID0gZXZlbnQudGFyZ2V0XG5cbiAgICAvLyBIYW5kbGUgY2xpY2tzIGluc2lkZSB0b2dnbGUgZWxlbWVudFxuICAgIGlmICh0YXJnZXQgPT09IGVsZW1lbnQpIHtcbiAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KClcbiAgICAgIHRoaXMucmVsYXRlZFRhcmdldCA9IGVsZW1lbnRcbiAgICAgIHRoaXMudG9nZ2xlKClcblxuICAgICAgLy8gSGFuZGxlIGNsaWNrcyBlbHNld2hlcmUgaW4gdGhlIHBhZ2Ugd2hlbiB0aGUgZHJvcGRvd24gaXMgb3BlblxuICAgICAgLy8gKGV4Y2VwdCB3aGVuIGNsaWNraW5nIG5lc3RlZCBkcm9wZG93bnMgb3IgZm9ybSBpbnB1dHMpXG4gICAgfSBlbHNlIGlmIChpc09wZW4pIHtcbiAgICAgIGNvbnN0IHRhcmdldElzVG9nZ2xlID0gdGFyZ2V0LmRhdGFzZXQudG9nZ2xlID09PSAnZHJvcGRvd24nXG4gICAgICBjb25zdCB0YXJnZXRJc0lucHV0ID0gdGFyZ2V0Lm5vZGVOYW1lLm1hdGNoKCdJTlBVVHxURVhUQVJFQScpXG4gICAgICBpZiAoKHRhcmdldElzVG9nZ2xlIHx8IHRhcmdldElzSW5wdXQpICYmIG1lbnUuY29udGFpbnModGFyZ2V0KSkgcmV0dXJuXG5cbiAgICAgIHRoaXMucmVsYXRlZFRhcmdldCA9IG51bGxcbiAgICAgIHRoaXMuaGlkZSgpXG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIFNob3cgdGhlIGRyb3Bkb3duIG1lbnUuXG4gICAqIFRvZ2dsZXMgY2xhc3NOYW1lcywgZGlzcGF0Y2hlcyBldmVudHMsIGFuZCBzZXRzIHVwIGtleXByZXNzIGhhbmRsZXJzLlxuICAgKi9cbiAgc2hvdyA9ICgpID0+IHtcbiAgICBjb25zdCB7IGtleUhhbmRsZXIsIG1lbnUsIHNob3dDbGFzcywgcGFyZW50LCByZWxhdGVkVGFyZ2V0IH0gPSB0aGlzXG4gICAgZGlzcGF0Y2hFdmVudChTSE9XX0VWRU5ULCBwYXJlbnQsIHsgcmVsYXRlZFRhcmdldCB9KVxuICAgIHBhcmVudC5jbGFzc0xpc3QuYWRkKHNob3dDbGFzcylcbiAgICBtZW51LnNldEF0dHJpYnV0ZSgnYXJpYS1leHBhbmRlZCcsIHRydWUpXG4gICAgZGlzcGF0Y2hFdmVudChTSE9XTl9FVkVOVCwgcGFyZW50LCB7IHJlbGF0ZWRUYXJnZXQgfSlcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywga2V5SGFuZGxlcilcbiAgICB0aGlzLmlzT3BlbiA9IHRydWVcbiAgfVxuXG4gIC8qKlxuICAgKiBIaWRlIHRoZSBkcm9wZG93biBtZW51LlxuICAgKiBUb2dnbGVzIGNsYXNzTmFtZXMsIGRpc3BhdGNoZXMgZXZlbnRzLCBhbmQgcmVtb3ZlcyBrZXlwcmVzcyBoYW5kbGVycy5cbiAgICovXG4gIGhpZGUgPSAoKSA9PiB7XG4gICAgY29uc3QgeyBrZXlIYW5kbGVyLCBtZW51LCBzaG93Q2xhc3MsIHBhcmVudCwgcmVsYXRlZFRhcmdldCB9ID0gdGhpc1xuICAgIGRpc3BhdGNoRXZlbnQoSElERV9FVkVOVCwgcGFyZW50LCB7IHJlbGF0ZWRUYXJnZXQgfSlcbiAgICBwYXJlbnQuY2xhc3NMaXN0LnJlbW92ZShzaG93Q2xhc3MpXG4gICAgbWVudS5zZXRBdHRyaWJ1dGUoJ2FyaWEtZXhwYW5kZWQnLCBmYWxzZSlcbiAgICBkaXNwYXRjaEV2ZW50KEhJRERFTl9FVkVOVCwgcGFyZW50LCB7IHJlbGF0ZWRUYXJnZXQgfSlcbiAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdrZXlkb3duJywga2V5SGFuZGxlcilcbiAgICB0aGlzLmlzT3BlbiA9IGZhbHNlXG4gIH1cblxuICAvKipcbiAgICogVG9nZ2xlIHRoZSBkcm9wZG93biBtZW51LlxuICAgKiBXaWxsIGRlY2lkZSBpZiB0aGUgbWVudSBzaG91bGQgYmUgc2hvd24gb3IgaGlkZGVuIGRlcGVuZGluZyBvbiBjdXJyZW50IHN0YXRlLlxuICAgKi9cbiAgdG9nZ2xlID0gKCkgPT4ge1xuICAgIGlmICh0aGlzLnBhcmVudC5jbGFzc0xpc3QuY29udGFpbnModGhpcy5zaG93Q2xhc3MpICYmIHRoaXMuaXNPcGVuKSB7XG4gICAgICB0aGlzLmhpZGUoKVxuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnNob3coKVxuICAgIH1cbiAgfVxufVxuXG4vKipcbiAqIEluaXRpYWxpemUgZHJvcGRvd25zIG9uIHRoZSBkb2N1bWVudFxuICogQHBhcmFtICB7U3RyaW5nfSBbc2hvd0NsYXNzXSAgIFBhc3NlZCBkaXJlY3RseSB0byB0aGUgRHJvcHB5IGNvbnN0cnVjdG9yXG4gKiBAc2VlIERyb3BweVxuICovXG5leHBvcnQgZnVuY3Rpb24gaW5pdChzaG93Q2xhc3MgPSBTSE9XX0NMQVNTKSB7XG4gIGNvbnN0IGVsZW1lbnRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnW2RhdGEtdG9nZ2xlPVwiZHJvcGRvd25cIl0nKVxuICA7Wy4uLmVsZW1lbnRzXS5mb3JFYWNoKGVsZW1lbnQgPT4gbmV3IERyb3BweShlbGVtZW50LCBzaG93Q2xhc3MpKVxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==