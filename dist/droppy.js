(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["droppy"] = factory();
	else
		root["droppy"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (immutable) */ __webpack_exports__["init"] = init;
function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

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
function Droppy(element) {
	var showClass = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : SHOW_CLASS;

	_classCallCheck(this, Droppy);

	_initialiseProps.call(this);

	this.element = element;
	this.showClass = showClass;
	this.parent = element.parentNode;
	this.menu = this.parent.querySelector('[role="menu"]');
	this.relatedTarget = null;
	this.isOpen = false;

	if (!('Droppy' in element)) {
		document.addEventListener('click', this.clickHandler);
	}
	element.Droppy = this;
	return this;
}

/**
 * Handle keyboard input for enhanced dropdown navigation.
 * Allows using 'Esc' to close the dropdown, and the up/down arrow keys to move.
 * @param  {KeyboardEvent} event
 */


/**
 * Handles clicks on the entire document to open / close the dropdowns.
 * Clicks outside the dropdown will close it.
 * Clicks on the dropdown toggle element will toggle it.
 * @param  {MouseEvent} event
 */


/**
 * Show the dropdown menu.
 * Toggles classNames, dispatches events, and sets up keypress handlers.
 */


/**
 * Hide the dropdown menu.
 * Toggles classNames, dispatches events, and removes keypress handlers.
 */


/**
 * Toggle the dropdown menu.
 * Will decide if the menu should be shown or hidden depending on current state.
 */
;

/**
 * Initialize dropdowns on the document
 * @param  {String} [showClass]   Passed directly to the Droppy constructor
 * @see Droppy
 */


var _initialiseProps = function _initialiseProps() {
	var _this = this;

	this.keyHandler = function (event) {
		// Define a list of keys and nodes we want to listen to
		var isValidKey = event.key.match('Escape|ArrowUp|ArrowDown');
		var isValidNode = !event.target.nodeName.match('INPUT|TEXTAREA');
		if (!(isValidKey && isValidNode)) return;

		event.preventDefault();

		// Esc key (closes dropdown)
		var hasOpenSubmenus = _this.menu.querySelector('[aria-expanded="true"]');
		if (event.key === 'Escape' && _this.isOpen && !hasOpenSubmenus) {
			_this.relatedTarget = null;
			_this.hide();
			_this.element.focus();
			return;
		}

		// Up / down arrows (behaves as Shift + TAB / TAB)
		var items = [].concat(_toConsumableArray(_this.menu.querySelectorAll('a, button, input, textarea')));
		if (!items.length) return;
		var index = items.indexOf(event.target);

		if (event.key === 'ArrowUp' && index > 0) index--;
		if (event.key === 'ArrowDown' && index < items.length - 1) index++;
		if (index < 0) index = 0;
		items[index].focus();
	};

	this.clickHandler = function (event) {
		if (event.button !== 0) return; // Bail on anything that isn't a left-click

		var element = _this.element,
		    isOpen = _this.isOpen,
		    menu = _this.menu;

		var target = event.target;

		// Handle clicks inside toggle element
		if (target === element) {
			event.preventDefault();
			_this.relatedTarget = element;
			_this.toggle();

			// Handle clicks elsewhere in the page when the dropdown is open
			// (except when clicking nested dropdowns or form inputs)
		} else if (isOpen) {
			var targetIsToggle = target.dataset.toggle === 'dropdown';
			var targetIsInput = target.nodeName.match('INPUT|TEXTAREA');
			if ((targetIsToggle || targetIsInput) && menu.contains(target)) return;

			_this.relatedTarget = null;
			_this.hide();
		}
	};

	this.show = function () {
		var keyHandler = _this.keyHandler,
		    menu = _this.menu,
		    showClass = _this.showClass,
		    parent = _this.parent,
		    relatedTarget = _this.relatedTarget;

		dispatchEvent(SHOW_EVENT, parent, { relatedTarget: relatedTarget });
		parent.classList.add(showClass);
		menu.setAttribute('aria-expanded', true);
		dispatchEvent(SHOWN_EVENT, parent, { relatedTarget: relatedTarget });
		document.addEventListener('keydown', keyHandler);
		_this.isOpen = true;
	};

	this.hide = function () {
		var keyHandler = _this.keyHandler,
		    menu = _this.menu,
		    showClass = _this.showClass,
		    parent = _this.parent,
		    relatedTarget = _this.relatedTarget;

		dispatchEvent(HIDE_EVENT, parent, { relatedTarget: relatedTarget });
		parent.classList.remove(showClass);
		menu.setAttribute('aria-expanded', false);
		dispatchEvent(HIDDEN_EVENT, parent, { relatedTarget: relatedTarget });
		document.removeEventListener('keydown', keyHandler);
		_this.isOpen = false;
	};

	this.toggle = function () {
		if (_this.parent.classList.contains(_this.showClass) && _this.isOpen) {
			_this.hide();
		} else {
			_this.show();
		}
	};
};

/* harmony default export */ __webpack_exports__["default"] = (Droppy);
function init() {
	var showClass = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : SHOW_CLASS;

	var elements = document.querySelectorAll('[data-toggle="dropdown"]');
	[].concat(_toConsumableArray(elements)).forEach(function (element) {
		return new Droppy(element, showClass);
	});
}

/***/ })
/******/ ]);
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCA4MjcyMjU3ZDExYTdlNDg5YzU5OCIsIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXguanMiXSwibmFtZXMiOlsiU0hPV19FVkVOVCIsIlNIT1dOX0VWRU5UIiwiSElERV9FVkVOVCIsIkhJRERFTl9FVkVOVCIsIlNIT1dfQ0xBU1MiLCJkaXNwYXRjaEV2ZW50IiwibmFtZSIsInRhcmdldCIsImRldGFpbCIsIndpbmRvdyIsIkN1c3RvbUV2ZW50IiwiZXZlbnQiLCJidWJibGVzIiwiY2FuY2VsYWJsZSIsIkRyb3BweSIsImVsZW1lbnQiLCJzaG93Q2xhc3MiLCJwYXJlbnQiLCJwYXJlbnROb2RlIiwibWVudSIsInF1ZXJ5U2VsZWN0b3IiLCJyZWxhdGVkVGFyZ2V0IiwiaXNPcGVuIiwiZG9jdW1lbnQiLCJhZGRFdmVudExpc3RlbmVyIiwiY2xpY2tIYW5kbGVyIiwia2V5SGFuZGxlciIsImlzVmFsaWRLZXkiLCJrZXkiLCJtYXRjaCIsImlzVmFsaWROb2RlIiwibm9kZU5hbWUiLCJwcmV2ZW50RGVmYXVsdCIsImhhc09wZW5TdWJtZW51cyIsImhpZGUiLCJmb2N1cyIsIml0ZW1zIiwicXVlcnlTZWxlY3RvckFsbCIsImxlbmd0aCIsImluZGV4IiwiaW5kZXhPZiIsImJ1dHRvbiIsInRvZ2dsZSIsInRhcmdldElzVG9nZ2xlIiwiZGF0YXNldCIsInRhcmdldElzSW5wdXQiLCJjb250YWlucyIsInNob3ciLCJjbGFzc0xpc3QiLCJhZGQiLCJzZXRBdHRyaWJ1dGUiLCJyZW1vdmUiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwiaW5pdCIsImVsZW1lbnRzIiwiZm9yRWFjaCJdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNELE87QUNWQTtBQUNBOztBQUVB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QWtELE1BQUtNLE1BQTNELEVBQW1FO0FBQ2xFLFNBQUtZLElBQUw7QUFDQSxHQUZELE1BRU87QUFDTixTQUFLYSxJQUFMO0FBQ0E7QUFDRCxFOzs7K0RBNUhtQmpDLE07QUFvSWQsU0FBU3VDLElBQVQsR0FBc0M7QUFBQSxLQUF4QnJDLFNBQXdCLHVFQUFaWixVQUFZOztBQUM1QyxLQUFNa0QsV0FBVy9CLFNBQVNjLGdCQUFULENBQTBCLDBCQUExQixDQUFqQjtBQUNBLDhCQUFJaUIsUUFBSixHQUFjQyxPQUFkLENBQXNCO0FBQUEsU0FBVyxJQUFJekMsTUFBSixDQUFXQyxPQUFYLEVBQW9CQyxTQUFwQixDQUFYO0FBQUEsRUFBdEI7QUFDQSxDIiwiZmlsZSI6ImRyb3BweS5qcyIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiB3ZWJwYWNrVW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbihyb290LCBmYWN0b3J5KSB7XG5cdGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlID09PSAnb2JqZWN0Jylcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkoKTtcblx0ZWxzZSBpZih0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpXG5cdFx0ZGVmaW5lKFtdLCBmYWN0b3J5KTtcblx0ZWxzZSBpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcpXG5cdFx0ZXhwb3J0c1tcImRyb3BweVwiXSA9IGZhY3RvcnkoKTtcblx0ZWxzZVxuXHRcdHJvb3RbXCJkcm9wcHlcIl0gPSBmYWN0b3J5KCk7XG59KSh0aGlzLCBmdW5jdGlvbigpIHtcbnJldHVybiBcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pXG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG5cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGlkZW50aXR5IGZ1bmN0aW9uIGZvciBjYWxsaW5nIGhhcm1vbnkgaW1wb3J0cyB3aXRoIHRoZSBjb3JyZWN0IGNvbnRleHRcbiBcdF9fd2VicGFja19yZXF1aXJlX18uaSA9IGZ1bmN0aW9uKHZhbHVlKSB7IHJldHVybiB2YWx1ZTsgfTtcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7XG4gXHRcdFx0XHRjb25maWd1cmFibGU6IGZhbHNlLFxuIFx0XHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcbiBcdFx0XHRcdGdldDogZ2V0dGVyXG4gXHRcdFx0fSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMCk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay9ib290c3RyYXAgODI3MjI1N2QxMWE3ZTQ4OWM1OTgiLCJjb25zdCBTSE9XX0VWRU5UID0gJ3Nob3cuZHJvcHB5JztcbmNvbnN0IFNIT1dOX0VWRU5UID0gJ3Nob3duLmRyb3BweSc7XG5jb25zdCBISURFX0VWRU5UID0gJ2hpZGUuZHJvcHB5JztcbmNvbnN0IEhJRERFTl9FVkVOVCA9ICdoaWRkZW4uZHJvcHB5JztcblxuY29uc3QgU0hPV19DTEFTUyA9ICdzaG93JztcblxuLyogSW5zdGFudGlhdGUgYW5kIGRpc3BhdGNoIGEgY3VzdG9tIGV2ZW50XG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtICB7U3RyaW5nfSBuYW1lIE5hbWUgb2YgdGhlIGN1c3RvbSBldmVudFxuICogQHBhcmFtICB7RWxlbWVudH0gdGFyZ2V0IERPTSBlbGVtZW50IHRoYXQgd2lsbCBiZSBhdmFpbGFibGUgYXMgZXZlbnQudGFyZ2V0XG4gKiBAcGFyYW0gIHtPYmplY3R9IGRldGFpbCBPYmplY3QgdGhhdCB3aWxsIGJlIGF2YWlsYWJsZSBhcyBldmVudC5kZXRhaWxcbiAqL1xuZnVuY3Rpb24gZGlzcGF0Y2hFdmVudChuYW1lLCB0YXJnZXQsIGRldGFpbCkge1xuXHQvLyBJRSBkb2Vzbid0IHN1cHBvcnQgQ3VzdG9tRXZlbnRcblx0aWYgKHR5cGVvZiB3aW5kb3cuQ3VzdG9tRXZlbnQgIT09ICdmdW5jdGlvbicpIHJldHVybjtcblx0Y29uc3QgZXZlbnQgPSBuZXcgQ3VzdG9tRXZlbnQobmFtZSwge1xuXHRcdGRldGFpbCxcblx0XHRidWJibGVzOiB0cnVlLFxuXHRcdGNhbmNlbGFibGU6IHRydWUsXG5cdH0pO1xuXHR0YXJnZXQuZGlzcGF0Y2hFdmVudChldmVudCk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIERyb3BweSB7XG5cdC8qKlxuXHQgKiBJbml0aWFsaXplIHRoZSBEcm9wcHkgaW5zdGFuY2UuXG5cdCAqIFdpbGwgYXR0YWNoIGEgYERyb3BweWAgcHJvcGVydHkgdG8gdGhlIGBlbGVtZW50YC5cblx0ICogQHBhcmFtICB7SFRNTEVsZW1lbnR9IGVsZW1lbnQgTm9kZSB0aGF0IHdpbGwgYWN0IGFzIGRyb3Bkb3duIHRvZ2dsZVxuXHQgKiBAcGFyYW0gIHtTdHJpbmd9IFtzaG93Q2xhc3NdICBDbGFzc25hbWUgYXNzaWduZWQgdG8gdGhlIHBhcmVudCBvbiBzaG93XG5cdCAqIEByZXR1cm4ge09iamVjdH0gICAgICAgICAgICAgIFRoZSBuZXcgRHJvcHB5IGluc3RhbmNlXG5cdCAqL1xuXHRjb25zdHJ1Y3RvcihlbGVtZW50LCBzaG93Q2xhc3MgPSBTSE9XX0NMQVNTKSB7XG5cdFx0dGhpcy5lbGVtZW50ID0gZWxlbWVudDtcblx0XHR0aGlzLnNob3dDbGFzcyA9IHNob3dDbGFzcztcblx0XHR0aGlzLnBhcmVudCA9IGVsZW1lbnQucGFyZW50Tm9kZTtcblx0XHR0aGlzLm1lbnUgPSB0aGlzLnBhcmVudC5xdWVyeVNlbGVjdG9yKCdbcm9sZT1cIm1lbnVcIl0nKTtcblx0XHR0aGlzLnJlbGF0ZWRUYXJnZXQgPSBudWxsO1xuXHRcdHRoaXMuaXNPcGVuID0gZmFsc2U7XG5cblx0XHRpZiAoISgnRHJvcHB5JyBpbiBlbGVtZW50KSkge1xuXHRcdFx0ZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLmNsaWNrSGFuZGxlcik7XG5cdFx0fVxuXHRcdGVsZW1lbnQuRHJvcHB5ID0gdGhpcztcblx0XHRyZXR1cm4gdGhpcztcblx0fVxuXG5cdC8qKlxuXHQgKiBIYW5kbGUga2V5Ym9hcmQgaW5wdXQgZm9yIGVuaGFuY2VkIGRyb3Bkb3duIG5hdmlnYXRpb24uXG5cdCAqIEFsbG93cyB1c2luZyAnRXNjJyB0byBjbG9zZSB0aGUgZHJvcGRvd24sIGFuZCB0aGUgdXAvZG93biBhcnJvdyBrZXlzIHRvIG1vdmUuXG5cdCAqIEBwYXJhbSAge0tleWJvYXJkRXZlbnR9IGV2ZW50XG5cdCAqL1xuXHRrZXlIYW5kbGVyID0gKGV2ZW50KSA9PiB7XG5cdFx0Ly8gRGVmaW5lIGEgbGlzdCBvZiBrZXlzIGFuZCBub2RlcyB3ZSB3YW50IHRvIGxpc3RlbiB0b1xuXHRcdGNvbnN0IGlzVmFsaWRLZXkgPSBldmVudC5rZXkubWF0Y2goJ0VzY2FwZXxBcnJvd1VwfEFycm93RG93bicpO1xuXHRcdGNvbnN0IGlzVmFsaWROb2RlID0gIWV2ZW50LnRhcmdldC5ub2RlTmFtZS5tYXRjaCgnSU5QVVR8VEVYVEFSRUEnKTtcblx0XHRpZiAoIShpc1ZhbGlkS2V5ICYmIGlzVmFsaWROb2RlKSkgcmV0dXJuO1xuXG5cdFx0ZXZlbnQucHJldmVudERlZmF1bHQoKTtcblxuXHRcdC8vIEVzYyBrZXkgKGNsb3NlcyBkcm9wZG93bilcblx0XHRjb25zdCBoYXNPcGVuU3VibWVudXMgPSB0aGlzLm1lbnUucXVlcnlTZWxlY3RvcignW2FyaWEtZXhwYW5kZWQ9XCJ0cnVlXCJdJyk7XG5cdFx0aWYgKGV2ZW50LmtleSA9PT0gJ0VzY2FwZScgJiYgdGhpcy5pc09wZW4gJiYgIWhhc09wZW5TdWJtZW51cykge1xuXHRcdFx0dGhpcy5yZWxhdGVkVGFyZ2V0ID0gbnVsbDtcblx0XHRcdHRoaXMuaGlkZSgpO1xuXHRcdFx0dGhpcy5lbGVtZW50LmZvY3VzKCk7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXG5cdFx0Ly8gVXAgLyBkb3duIGFycm93cyAoYmVoYXZlcyBhcyBTaGlmdCArIFRBQiAvIFRBQilcblx0XHRjb25zdCBpdGVtcyA9IFsuLi50aGlzLm1lbnUucXVlcnlTZWxlY3RvckFsbCgnYSwgYnV0dG9uLCBpbnB1dCwgdGV4dGFyZWEnKV07XG5cdFx0aWYgKCFpdGVtcy5sZW5ndGgpIHJldHVybjtcblx0XHRsZXQgaW5kZXggPSBpdGVtcy5pbmRleE9mKGV2ZW50LnRhcmdldCk7XG5cblx0XHRpZiAoZXZlbnQua2V5ID09PSAnQXJyb3dVcCcgJiYgaW5kZXggPiAwKSBpbmRleC0tO1xuXHRcdGlmIChldmVudC5rZXkgPT09ICdBcnJvd0Rvd24nICYmIGluZGV4IDwgaXRlbXMubGVuZ3RoIC0gMSkgaW5kZXgrKztcblx0XHRpZiAoaW5kZXggPCAwKSBpbmRleCA9IDA7XG5cdFx0aXRlbXNbaW5kZXhdLmZvY3VzKCk7XG5cdH07XG5cblx0LyoqXG5cdCAqIEhhbmRsZXMgY2xpY2tzIG9uIHRoZSBlbnRpcmUgZG9jdW1lbnQgdG8gb3BlbiAvIGNsb3NlIHRoZSBkcm9wZG93bnMuXG5cdCAqIENsaWNrcyBvdXRzaWRlIHRoZSBkcm9wZG93biB3aWxsIGNsb3NlIGl0LlxuXHQgKiBDbGlja3Mgb24gdGhlIGRyb3Bkb3duIHRvZ2dsZSBlbGVtZW50IHdpbGwgdG9nZ2xlIGl0LlxuXHQgKiBAcGFyYW0gIHtNb3VzZUV2ZW50fSBldmVudFxuXHQgKi9cblx0Y2xpY2tIYW5kbGVyID0gKGV2ZW50KSA9PiB7XG5cdFx0aWYgKGV2ZW50LmJ1dHRvbiAhPT0gMCkgcmV0dXJuOyAvLyBCYWlsIG9uIGFueXRoaW5nIHRoYXQgaXNuJ3QgYSBsZWZ0LWNsaWNrXG5cblx0XHRjb25zdCB7IGVsZW1lbnQsIGlzT3BlbiwgbWVudSB9ID0gdGhpcztcblx0XHRjb25zdCB0YXJnZXQgPSBldmVudC50YXJnZXQ7XG5cblx0XHQvLyBIYW5kbGUgY2xpY2tzIGluc2lkZSB0b2dnbGUgZWxlbWVudFxuXHRcdGlmICh0YXJnZXQgPT09IGVsZW1lbnQpIHtcblx0XHRcdGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cdFx0XHR0aGlzLnJlbGF0ZWRUYXJnZXQgPSBlbGVtZW50O1xuXHRcdFx0dGhpcy50b2dnbGUoKTtcblxuXHRcdC8vIEhhbmRsZSBjbGlja3MgZWxzZXdoZXJlIGluIHRoZSBwYWdlIHdoZW4gdGhlIGRyb3Bkb3duIGlzIG9wZW5cblx0XHQvLyAoZXhjZXB0IHdoZW4gY2xpY2tpbmcgbmVzdGVkIGRyb3Bkb3ducyBvciBmb3JtIGlucHV0cylcblx0XHR9IGVsc2UgaWYgKGlzT3Blbikge1xuXHRcdFx0Y29uc3QgdGFyZ2V0SXNUb2dnbGUgPSB0YXJnZXQuZGF0YXNldC50b2dnbGUgPT09ICdkcm9wZG93bic7XG5cdFx0XHRjb25zdCB0YXJnZXRJc0lucHV0ID0gdGFyZ2V0Lm5vZGVOYW1lLm1hdGNoKCdJTlBVVHxURVhUQVJFQScpO1xuXHRcdFx0aWYgKCh0YXJnZXRJc1RvZ2dsZSB8fCB0YXJnZXRJc0lucHV0KSAmJiBtZW51LmNvbnRhaW5zKHRhcmdldCkpIHJldHVybjtcblxuXHRcdFx0dGhpcy5yZWxhdGVkVGFyZ2V0ID0gbnVsbDtcblx0XHRcdHRoaXMuaGlkZSgpO1xuXHRcdH1cblx0fTtcblxuXHQvKipcblx0ICogU2hvdyB0aGUgZHJvcGRvd24gbWVudS5cblx0ICogVG9nZ2xlcyBjbGFzc05hbWVzLCBkaXNwYXRjaGVzIGV2ZW50cywgYW5kIHNldHMgdXAga2V5cHJlc3MgaGFuZGxlcnMuXG5cdCAqL1xuXHRzaG93ID0gKCkgPT4ge1xuXHRcdGNvbnN0IHsga2V5SGFuZGxlciwgbWVudSwgc2hvd0NsYXNzLCBwYXJlbnQsIHJlbGF0ZWRUYXJnZXQgfSA9IHRoaXM7XG5cdFx0ZGlzcGF0Y2hFdmVudChTSE9XX0VWRU5ULCBwYXJlbnQsIHsgcmVsYXRlZFRhcmdldCB9KTtcblx0XHRwYXJlbnQuY2xhc3NMaXN0LmFkZChzaG93Q2xhc3MpO1xuXHRcdG1lbnUuc2V0QXR0cmlidXRlKCdhcmlhLWV4cGFuZGVkJywgdHJ1ZSk7XG5cdFx0ZGlzcGF0Y2hFdmVudChTSE9XTl9FVkVOVCwgcGFyZW50LCB7IHJlbGF0ZWRUYXJnZXQgfSk7XG5cdFx0ZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIGtleUhhbmRsZXIpO1xuXHRcdHRoaXMuaXNPcGVuID0gdHJ1ZTtcblx0fTtcblxuXHQvKipcblx0ICogSGlkZSB0aGUgZHJvcGRvd24gbWVudS5cblx0ICogVG9nZ2xlcyBjbGFzc05hbWVzLCBkaXNwYXRjaGVzIGV2ZW50cywgYW5kIHJlbW92ZXMga2V5cHJlc3MgaGFuZGxlcnMuXG5cdCAqL1xuXHRoaWRlID0gKCkgPT4ge1xuXHRcdGNvbnN0IHsga2V5SGFuZGxlciwgbWVudSwgc2hvd0NsYXNzLCBwYXJlbnQsIHJlbGF0ZWRUYXJnZXQgfSA9IHRoaXM7XG5cdFx0ZGlzcGF0Y2hFdmVudChISURFX0VWRU5ULCBwYXJlbnQsIHsgcmVsYXRlZFRhcmdldCB9KTtcblx0XHRwYXJlbnQuY2xhc3NMaXN0LnJlbW92ZShzaG93Q2xhc3MpO1xuXHRcdG1lbnUuc2V0QXR0cmlidXRlKCdhcmlhLWV4cGFuZGVkJywgZmFsc2UpO1xuXHRcdGRpc3BhdGNoRXZlbnQoSElEREVOX0VWRU5ULCBwYXJlbnQsIHsgcmVsYXRlZFRhcmdldCB9KTtcblx0XHRkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdrZXlkb3duJywga2V5SGFuZGxlcik7XG5cdFx0dGhpcy5pc09wZW4gPSBmYWxzZTtcblx0fTtcblxuXHQvKipcblx0ICogVG9nZ2xlIHRoZSBkcm9wZG93biBtZW51LlxuXHQgKiBXaWxsIGRlY2lkZSBpZiB0aGUgbWVudSBzaG91bGQgYmUgc2hvd24gb3IgaGlkZGVuIGRlcGVuZGluZyBvbiBjdXJyZW50IHN0YXRlLlxuXHQgKi9cblx0dG9nZ2xlID0gKCkgPT4ge1xuXHRcdGlmICh0aGlzLnBhcmVudC5jbGFzc0xpc3QuY29udGFpbnModGhpcy5zaG93Q2xhc3MpICYmIHRoaXMuaXNPcGVuKSB7XG5cdFx0XHR0aGlzLmhpZGUoKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0dGhpcy5zaG93KCk7XG5cdFx0fVxuXHR9O1xufVxuXG4vKipcbiAqIEluaXRpYWxpemUgZHJvcGRvd25zIG9uIHRoZSBkb2N1bWVudFxuICogQHBhcmFtICB7U3RyaW5nfSBbc2hvd0NsYXNzXSAgIFBhc3NlZCBkaXJlY3RseSB0byB0aGUgRHJvcHB5IGNvbnN0cnVjdG9yXG4gKiBAc2VlIERyb3BweVxuICovXG5leHBvcnQgZnVuY3Rpb24gaW5pdChzaG93Q2xhc3MgPSBTSE9XX0NMQVNTKSB7XG5cdGNvbnN0IGVsZW1lbnRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnW2RhdGEtdG9nZ2xlPVwiZHJvcGRvd25cIl0nKTtcblx0Wy4uLmVsZW1lbnRzXS5mb3JFYWNoKGVsZW1lbnQgPT4gbmV3IERyb3BweShlbGVtZW50LCBzaG93Q2xhc3MpKTtcbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VSb290IjoiIn0=