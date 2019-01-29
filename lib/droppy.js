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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9kcm9wcHkvd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovL2Ryb3BweS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9kcm9wcHkvLi9zcmMvaW5kZXguanMiXSwibmFtZXMiOlsiU0hPV19FVkVOVCIsIlNIT1dOX0VWRU5UIiwiSElERV9FVkVOVCIsIkhJRERFTl9FVkVOVCIsIlNIT1dfQ0xBU1MiLCJkaXNwYXRjaEV2ZW50IiwibmFtZSIsInRhcmdldCIsImRldGFpbCIsIndpbmRvdyIsIkN1c3RvbUV2ZW50IiwiZXZlbnQiLCJidWJibGVzIiwiY2FuY2VsYWJsZSIsIkRyb3BweSIsImVsZW1lbnQiLCJzaG93Q2xhc3MiLCJpc1ZhbGlkS2V5Iiwia2V5IiwibWF0Y2giLCJpc1ZhbGlkTm9kZSIsIm5vZGVOYW1lIiwicHJldmVudERlZmF1bHQiLCJoYXNPcGVuU3VibWVudXMiLCJtZW51IiwicXVlcnlTZWxlY3RvciIsImlzT3BlbiIsInJlbGF0ZWRUYXJnZXQiLCJoaWRlIiwiZm9jdXMiLCJpdGVtcyIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJsZW5ndGgiLCJpbmRleCIsImluZGV4T2YiLCJidXR0b24iLCJ0b2dnbGUiLCJ0YXJnZXRJc1RvZ2dsZSIsImRhdGFzZXQiLCJ0YXJnZXRJc0lucHV0IiwiY29udGFpbnMiLCJrZXlIYW5kbGVyIiwicGFyZW50IiwiY2xhc3NMaXN0IiwiYWRkIiwic2V0QXR0cmlidXRlIiwiZG9jdW1lbnQiLCJhZGRFdmVudExpc3RlbmVyIiwicmVtb3ZlIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsInNob3ciLCJwYXJlbnROb2RlIiwiY2xpY2tIYW5kbGVyIiwiaW5pdCIsImVsZW1lbnRzIiwiZm9yRWFjaCJdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNELE87QUNWQTtBQUNBOztBQUVBO0FB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QUFRLEdBQUdSLFFBQVEsQ0FBQ2YsZ0JBQVQsQ0FBMEIsMEJBQTFCLENBQWpCO0FBQ0EsK0JBQUl1QixRQUFKLEdBQWNDLE9BQWQsQ0FBc0IsVUFBQXhDLE9BQU87QUFBQSxXQUFJLElBQUlELE1BQUosQ0FBV0MsT0FBWCxFQUFvQkMsU0FBcEIsQ0FBSjtBQUFBLEdBQTdCO0FBQ0EsQyIsImZpbGUiOiJkcm9wcHkuanMiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gd2VicGFja1VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24ocm9vdCwgZmFjdG9yeSkge1xuXHRpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcpXG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KCk7XG5cdGVsc2UgaWYodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKVxuXHRcdGRlZmluZShcImRyb3BweVwiLCBbXSwgZmFjdG9yeSk7XG5cdGVsc2UgaWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnKVxuXHRcdGV4cG9ydHNbXCJkcm9wcHlcIl0gPSBmYWN0b3J5KCk7XG5cdGVsc2Vcblx0XHRyb290W1wiZHJvcHB5XCJdID0gZmFjdG9yeSgpO1xufSkodHlwZW9mIHNlbGYgIT09ICd1bmRlZmluZWQnID8gc2VsZiA6IHRoaXMsIGZ1bmN0aW9uKCkge1xucmV0dXJuICIsIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2luZGV4LmpzXCIpO1xuIiwiY29uc3QgU0hPV19FVkVOVCA9ICdzaG93LmRyb3BweSc7XG5jb25zdCBTSE9XTl9FVkVOVCA9ICdzaG93bi5kcm9wcHknO1xuY29uc3QgSElERV9FVkVOVCA9ICdoaWRlLmRyb3BweSc7XG5jb25zdCBISURERU5fRVZFTlQgPSAnaGlkZGVuLmRyb3BweSc7XG5cbmNvbnN0IFNIT1dfQ0xBU1MgPSAnc2hvdyc7XG5cbi8qIEluc3RhbnRpYXRlIGFuZCBkaXNwYXRjaCBhIGN1c3RvbSBldmVudFxuICogQHByaXZhdGVcbiAqIEBwYXJhbSAge1N0cmluZ30gbmFtZSBOYW1lIG9mIHRoZSBjdXN0b20gZXZlbnRcbiAqIEBwYXJhbSAge0VsZW1lbnR9IHRhcmdldCBET00gZWxlbWVudCB0aGF0IHdpbGwgYmUgYXZhaWxhYmxlIGFzIGV2ZW50LnRhcmdldFxuICogQHBhcmFtICB7T2JqZWN0fSBkZXRhaWwgT2JqZWN0IHRoYXQgd2lsbCBiZSBhdmFpbGFibGUgYXMgZXZlbnQuZGV0YWlsXG4gKi9cbmZ1bmN0aW9uIGRpc3BhdGNoRXZlbnQobmFtZSwgdGFyZ2V0LCBkZXRhaWwpIHtcblx0Ly8gSUUgZG9lc24ndCBzdXBwb3J0IEN1c3RvbUV2ZW50XG5cdGlmICh0eXBlb2Ygd2luZG93LkN1c3RvbUV2ZW50ICE9PSAnZnVuY3Rpb24nKSByZXR1cm47XG5cdGNvbnN0IGV2ZW50ID0gbmV3IEN1c3RvbUV2ZW50KG5hbWUsIHtcblx0XHRkZXRhaWwsXG5cdFx0YnViYmxlczogdHJ1ZSxcblx0XHRjYW5jZWxhYmxlOiB0cnVlLFxuXHR9KTtcblx0dGFyZ2V0LmRpc3BhdGNoRXZlbnQoZXZlbnQpO1xufVxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBEcm9wcHkge1xuXHQvKipcblx0ICogSW5pdGlhbGl6ZSB0aGUgRHJvcHB5IGluc3RhbmNlLlxuXHQgKiBXaWxsIGF0dGFjaCBhIGBEcm9wcHlgIHByb3BlcnR5IHRvIHRoZSBgZWxlbWVudGAuXG5cdCAqIEBwYXJhbSAge0hUTUxFbGVtZW50fSBlbGVtZW50IE5vZGUgdGhhdCB3aWxsIGFjdCBhcyBkcm9wZG93biB0b2dnbGVcblx0ICogQHBhcmFtICB7U3RyaW5nfSBbc2hvd0NsYXNzXSAgQ2xhc3NuYW1lIGFzc2lnbmVkIHRvIHRoZSBwYXJlbnQgb24gc2hvd1xuXHQgKiBAcmV0dXJuIHtPYmplY3R9ICAgICAgICAgICAgICBUaGUgbmV3IERyb3BweSBpbnN0YW5jZVxuXHQgKi9cblx0Y29uc3RydWN0b3IoZWxlbWVudCwgc2hvd0NsYXNzID0gU0hPV19DTEFTUykge1xuXHRcdHRoaXMuZWxlbWVudCA9IGVsZW1lbnQ7XG5cdFx0dGhpcy5zaG93Q2xhc3MgPSBzaG93Q2xhc3M7XG5cdFx0dGhpcy5wYXJlbnQgPSBlbGVtZW50LnBhcmVudE5vZGU7XG5cdFx0dGhpcy5tZW51ID0gdGhpcy5wYXJlbnQucXVlcnlTZWxlY3RvcignW3JvbGU9XCJtZW51XCJdJyk7XG5cdFx0dGhpcy5yZWxhdGVkVGFyZ2V0ID0gbnVsbDtcblx0XHR0aGlzLmlzT3BlbiA9IGZhbHNlO1xuXG5cdFx0aWYgKCEoJ0Ryb3BweScgaW4gZWxlbWVudCkpIHtcblx0XHRcdGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5jbGlja0hhbmRsZXIpO1xuXHRcdH1cblx0XHRlbGVtZW50LkRyb3BweSA9IHRoaXM7XG5cdFx0cmV0dXJuIHRoaXM7XG5cdH1cblxuXHQvKipcblx0ICogSGFuZGxlIGtleWJvYXJkIGlucHV0IGZvciBlbmhhbmNlZCBkcm9wZG93biBuYXZpZ2F0aW9uLlxuXHQgKiBBbGxvd3MgdXNpbmcgJ0VzYycgdG8gY2xvc2UgdGhlIGRyb3Bkb3duLCBhbmQgdGhlIHVwL2Rvd24gYXJyb3cga2V5cyB0byBtb3ZlLlxuXHQgKiBAcGFyYW0gIHtLZXlib2FyZEV2ZW50fSBldmVudFxuXHQgKi9cblx0a2V5SGFuZGxlciA9IChldmVudCkgPT4ge1xuXHRcdC8vIERlZmluZSBhIGxpc3Qgb2Yga2V5cyBhbmQgbm9kZXMgd2Ugd2FudCB0byBsaXN0ZW4gdG9cblx0XHRjb25zdCBpc1ZhbGlkS2V5ID0gZXZlbnQua2V5Lm1hdGNoKCdFc2NhcGV8QXJyb3dVcHxBcnJvd0Rvd24nKTtcblx0XHRjb25zdCBpc1ZhbGlkTm9kZSA9ICFldmVudC50YXJnZXQubm9kZU5hbWUubWF0Y2goJ0lOUFVUfFRFWFRBUkVBJyk7XG5cdFx0aWYgKCEoaXNWYWxpZEtleSAmJiBpc1ZhbGlkTm9kZSkpIHJldHVybjtcblxuXHRcdGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cblx0XHQvLyBFc2Mga2V5IChjbG9zZXMgZHJvcGRvd24pXG5cdFx0Y29uc3QgaGFzT3BlblN1Ym1lbnVzID0gdGhpcy5tZW51LnF1ZXJ5U2VsZWN0b3IoJ1thcmlhLWV4cGFuZGVkPVwidHJ1ZVwiXScpO1xuXHRcdGlmIChldmVudC5rZXkgPT09ICdFc2NhcGUnICYmIHRoaXMuaXNPcGVuICYmICFoYXNPcGVuU3VibWVudXMpIHtcblx0XHRcdHRoaXMucmVsYXRlZFRhcmdldCA9IG51bGw7XG5cdFx0XHR0aGlzLmhpZGUoKTtcblx0XHRcdHRoaXMuZWxlbWVudC5mb2N1cygpO1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblxuXHRcdC8vIFVwIC8gZG93biBhcnJvd3MgKGJlaGF2ZXMgYXMgU2hpZnQgKyBUQUIgLyBUQUIpXG5cdFx0Y29uc3QgaXRlbXMgPSBbLi4udGhpcy5tZW51LnF1ZXJ5U2VsZWN0b3JBbGwoJ2EsIGJ1dHRvbiwgaW5wdXQsIHRleHRhcmVhJyldO1xuXHRcdGlmICghaXRlbXMubGVuZ3RoKSByZXR1cm47XG5cdFx0bGV0IGluZGV4ID0gaXRlbXMuaW5kZXhPZihldmVudC50YXJnZXQpO1xuXG5cdFx0aWYgKGV2ZW50LmtleSA9PT0gJ0Fycm93VXAnICYmIGluZGV4ID4gMCkgaW5kZXgtLTtcblx0XHRpZiAoZXZlbnQua2V5ID09PSAnQXJyb3dEb3duJyAmJiBpbmRleCA8IGl0ZW1zLmxlbmd0aCAtIDEpIGluZGV4Kys7XG5cdFx0aWYgKGluZGV4IDwgMCkgaW5kZXggPSAwO1xuXHRcdGl0ZW1zW2luZGV4XS5mb2N1cygpO1xuXHR9O1xuXG5cdC8qKlxuXHQgKiBIYW5kbGVzIGNsaWNrcyBvbiB0aGUgZW50aXJlIGRvY3VtZW50IHRvIG9wZW4gLyBjbG9zZSB0aGUgZHJvcGRvd25zLlxuXHQgKiBDbGlja3Mgb3V0c2lkZSB0aGUgZHJvcGRvd24gd2lsbCBjbG9zZSBpdC5cblx0ICogQ2xpY2tzIG9uIHRoZSBkcm9wZG93biB0b2dnbGUgZWxlbWVudCB3aWxsIHRvZ2dsZSBpdC5cblx0ICogQHBhcmFtICB7TW91c2VFdmVudH0gZXZlbnRcblx0ICovXG5cdGNsaWNrSGFuZGxlciA9IChldmVudCkgPT4ge1xuXHRcdGlmIChldmVudC5idXR0b24gIT09IDApIHJldHVybjsgLy8gQmFpbCBvbiBhbnl0aGluZyB0aGF0IGlzbid0IGEgbGVmdC1jbGlja1xuXG5cdFx0Y29uc3QgeyBlbGVtZW50LCBpc09wZW4sIG1lbnUgfSA9IHRoaXM7XG5cdFx0Y29uc3QgdGFyZ2V0ID0gZXZlbnQudGFyZ2V0O1xuXG5cdFx0Ly8gSGFuZGxlIGNsaWNrcyBpbnNpZGUgdG9nZ2xlIGVsZW1lbnRcblx0XHRpZiAodGFyZ2V0ID09PSBlbGVtZW50KSB7XG5cdFx0XHRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXHRcdFx0dGhpcy5yZWxhdGVkVGFyZ2V0ID0gZWxlbWVudDtcblx0XHRcdHRoaXMudG9nZ2xlKCk7XG5cblx0XHQvLyBIYW5kbGUgY2xpY2tzIGVsc2V3aGVyZSBpbiB0aGUgcGFnZSB3aGVuIHRoZSBkcm9wZG93biBpcyBvcGVuXG5cdFx0Ly8gKGV4Y2VwdCB3aGVuIGNsaWNraW5nIG5lc3RlZCBkcm9wZG93bnMgb3IgZm9ybSBpbnB1dHMpXG5cdFx0fSBlbHNlIGlmIChpc09wZW4pIHtcblx0XHRcdGNvbnN0IHRhcmdldElzVG9nZ2xlID0gdGFyZ2V0LmRhdGFzZXQudG9nZ2xlID09PSAnZHJvcGRvd24nO1xuXHRcdFx0Y29uc3QgdGFyZ2V0SXNJbnB1dCA9IHRhcmdldC5ub2RlTmFtZS5tYXRjaCgnSU5QVVR8VEVYVEFSRUEnKTtcblx0XHRcdGlmICgodGFyZ2V0SXNUb2dnbGUgfHwgdGFyZ2V0SXNJbnB1dCkgJiYgbWVudS5jb250YWlucyh0YXJnZXQpKSByZXR1cm47XG5cblx0XHRcdHRoaXMucmVsYXRlZFRhcmdldCA9IG51bGw7XG5cdFx0XHR0aGlzLmhpZGUoKTtcblx0XHR9XG5cdH07XG5cblx0LyoqXG5cdCAqIFNob3cgdGhlIGRyb3Bkb3duIG1lbnUuXG5cdCAqIFRvZ2dsZXMgY2xhc3NOYW1lcywgZGlzcGF0Y2hlcyBldmVudHMsIGFuZCBzZXRzIHVwIGtleXByZXNzIGhhbmRsZXJzLlxuXHQgKi9cblx0c2hvdyA9ICgpID0+IHtcblx0XHRjb25zdCB7IGtleUhhbmRsZXIsIG1lbnUsIHNob3dDbGFzcywgcGFyZW50LCByZWxhdGVkVGFyZ2V0IH0gPSB0aGlzO1xuXHRcdGRpc3BhdGNoRXZlbnQoU0hPV19FVkVOVCwgcGFyZW50LCB7IHJlbGF0ZWRUYXJnZXQgfSk7XG5cdFx0cGFyZW50LmNsYXNzTGlzdC5hZGQoc2hvd0NsYXNzKTtcblx0XHRtZW51LnNldEF0dHJpYnV0ZSgnYXJpYS1leHBhbmRlZCcsIHRydWUpO1xuXHRcdGRpc3BhdGNoRXZlbnQoU0hPV05fRVZFTlQsIHBhcmVudCwgeyByZWxhdGVkVGFyZ2V0IH0pO1xuXHRcdGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCBrZXlIYW5kbGVyKTtcblx0XHR0aGlzLmlzT3BlbiA9IHRydWU7XG5cdH07XG5cblx0LyoqXG5cdCAqIEhpZGUgdGhlIGRyb3Bkb3duIG1lbnUuXG5cdCAqIFRvZ2dsZXMgY2xhc3NOYW1lcywgZGlzcGF0Y2hlcyBldmVudHMsIGFuZCByZW1vdmVzIGtleXByZXNzIGhhbmRsZXJzLlxuXHQgKi9cblx0aGlkZSA9ICgpID0+IHtcblx0XHRjb25zdCB7IGtleUhhbmRsZXIsIG1lbnUsIHNob3dDbGFzcywgcGFyZW50LCByZWxhdGVkVGFyZ2V0IH0gPSB0aGlzO1xuXHRcdGRpc3BhdGNoRXZlbnQoSElERV9FVkVOVCwgcGFyZW50LCB7IHJlbGF0ZWRUYXJnZXQgfSk7XG5cdFx0cGFyZW50LmNsYXNzTGlzdC5yZW1vdmUoc2hvd0NsYXNzKTtcblx0XHRtZW51LnNldEF0dHJpYnV0ZSgnYXJpYS1leHBhbmRlZCcsIGZhbHNlKTtcblx0XHRkaXNwYXRjaEV2ZW50KEhJRERFTl9FVkVOVCwgcGFyZW50LCB7IHJlbGF0ZWRUYXJnZXQgfSk7XG5cdFx0ZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIGtleUhhbmRsZXIpO1xuXHRcdHRoaXMuaXNPcGVuID0gZmFsc2U7XG5cdH07XG5cblx0LyoqXG5cdCAqIFRvZ2dsZSB0aGUgZHJvcGRvd24gbWVudS5cblx0ICogV2lsbCBkZWNpZGUgaWYgdGhlIG1lbnUgc2hvdWxkIGJlIHNob3duIG9yIGhpZGRlbiBkZXBlbmRpbmcgb24gY3VycmVudCBzdGF0ZS5cblx0ICovXG5cdHRvZ2dsZSA9ICgpID0+IHtcblx0XHRpZiAodGhpcy5wYXJlbnQuY2xhc3NMaXN0LmNvbnRhaW5zKHRoaXMuc2hvd0NsYXNzKSAmJiB0aGlzLmlzT3Blbikge1xuXHRcdFx0dGhpcy5oaWRlKCk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHRoaXMuc2hvdygpO1xuXHRcdH1cblx0fTtcbn1cblxuLyoqXG4gKiBJbml0aWFsaXplIGRyb3Bkb3ducyBvbiB0aGUgZG9jdW1lbnRcbiAqIEBwYXJhbSAge1N0cmluZ30gW3Nob3dDbGFzc10gICBQYXNzZWQgZGlyZWN0bHkgdG8gdGhlIERyb3BweSBjb25zdHJ1Y3RvclxuICogQHNlZSBEcm9wcHlcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGluaXQoc2hvd0NsYXNzID0gU0hPV19DTEFTUykge1xuXHRjb25zdCBlbGVtZW50cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ1tkYXRhLXRvZ2dsZT1cImRyb3Bkb3duXCJdJyk7XG5cdFsuLi5lbGVtZW50c10uZm9yRWFjaChlbGVtZW50ID0+IG5ldyBEcm9wcHkoZWxlbWVudCwgc2hvd0NsYXNzKSk7XG59XG4iXSwic291cmNlUm9vdCI6IiJ9