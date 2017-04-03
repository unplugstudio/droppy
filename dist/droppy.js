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

var SHOW_EVENT = 'show.dropdown';
var SHOWN_EVENT = 'shown.dropdown';
var HIDE_EVENT = 'hide.dropdown';
var HIDDEN_EVENT = 'hidden.dropdown';

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCA5MGU0MjE1ODc1MTNkNDZhNzI3ZSIsIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXguanMiXSwibmFtZXMiOlsiU0hPV19FVkVOVCIsIlNIT1dOX0VWRU5UIiwiSElERV9FVkVOVCIsIkhJRERFTl9FVkVOVCIsIlNIT1dfQ0xBU1MiLCJkaXNwYXRjaEV2ZW50IiwibmFtZSIsInRhcmdldCIsImRldGFpbCIsIndpbmRvdyIsIkN1c3RvbUV2ZW50IiwiZXZlbnQiLCJidWJibGVzIiwiY2FuY2VsYWJsZSIsIkRyb3BweSIsImVsZW1lbnQiLCJzaG93Q2xhc3MiLCJwYXJlbnQiLCJwYXJlbnROb2RlIiwibWVudSIsInF1ZXJ5U2VsZWN0b3IiLCJyZWxhdGVkVGFyZ2V0IiwiaXNPcGVuIiwiZG9jdW1lbnQiLCJhZGRFdmVudExpc3RlbmVyIiwiY2xpY2tIYW5kbGVyIiwia2V5SGFuZGxlciIsImlzVmFsaWRLZXkiLCJrZXkiLCJtYXRjaCIsImlzVmFsaWROb2RlIiwibm9kZU5hbWUiLCJwcmV2ZW50RGVmYXVsdCIsImhhc09wZW5TdWJtZW51cyIsImhpZGUiLCJmb2N1cyIsIml0ZW1zIiwicXVlcnlTZWxlY3RvckFsbCIsImxlbmd0aCIsImluZGV4IiwiaW5kZXhPZiIsImJ1dHRvbiIsInRvZ2dsZSIsInRhcmdldElzVG9nZ2xlIiwiZGF0YXNldCIsInRhcmdldElzSW5wdXQiLCJjb250YWlucyIsInNob3ciLCJjbGFzc0xpc3QiLCJhZGQiLCJzZXRBdHRyaWJ1dGUiLCJyZW1vdmUiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwiaW5pdCIsImVsZW1lbnRzIiwiZm9yRWFjaCJdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNELE87QUNWQTtBQUNBOztBQUVB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M0QsRUFBbUU7QUFDbEUsU0FBS1ksSUFBTDtBQUNBLEdBRkQsTUFFTztBQUNOLFNBQUthLElBQUw7QUFDQTtBQUNELEU7OzsrREEzSG1CakMsTTtBQW1JZCxTQUFTdUMsSUFBVCxHQUFzQztBQUFBLEtBQXhCckMsU0FBd0IsdUVBQVpaLFVBQVk7O0FBQzVDLEtBQU1rRCxXQUFXL0IsU0FBU2MsZ0JBQVQsQ0FBMEIsMEJBQTFCLENBQWpCO0FBQ0EsOEJBQUlpQixRQUFKLEdBQWNDLE9BQWQsQ0FBc0I7QUFBQSxTQUFXLElBQUl6QyxNQUFKLENBQVdDLE9BQVgsRUFBb0JDLFNBQXBCLENBQVg7QUFBQSxFQUF0QjtBQUNBLEMiLCJmaWxlIjoiZHJvcHB5LmpzIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIHdlYnBhY2tVbml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uKHJvb3QsIGZhY3RvcnkpIHtcblx0aWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnKVxuXHRcdG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeSgpO1xuXHRlbHNlIGlmKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZClcblx0XHRkZWZpbmUoW10sIGZhY3RvcnkpO1xuXHRlbHNlIGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0Jylcblx0XHRleHBvcnRzW1wiZHJvcHB5XCJdID0gZmFjdG9yeSgpO1xuXHRlbHNlXG5cdFx0cm9vdFtcImRyb3BweVwiXSA9IGZhY3RvcnkoKTtcbn0pKHRoaXMsIGZ1bmN0aW9uKCkge1xucmV0dXJuIFxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL3VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24iLCIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSlcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcblxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gaWRlbnRpdHkgZnVuY3Rpb24gZm9yIGNhbGxpbmcgaGFybW9ueSBpbXBvcnRzIHdpdGggdGhlIGNvcnJlY3QgY29udGV4dFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5pID0gZnVuY3Rpb24odmFsdWUpIHsgcmV0dXJuIHZhbHVlOyB9O1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHtcbiBcdFx0XHRcdGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4gXHRcdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuIFx0XHRcdFx0Z2V0OiBnZXR0ZXJcbiBcdFx0XHR9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAwKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL2Jvb3RzdHJhcCA5MGU0MjE1ODc1MTNkNDZhNzI3ZSIsImNvbnN0IFNIT1dfRVZFTlQgPSAnc2hvdy5kcm9wZG93bic7XG5jb25zdCBTSE9XTl9FVkVOVCA9ICdzaG93bi5kcm9wZG93bic7XG5jb25zdCBISURFX0VWRU5UID0gJ2hpZGUuZHJvcGRvd24nO1xuY29uc3QgSElEREVOX0VWRU5UID0gJ2hpZGRlbi5kcm9wZG93bic7XG5cbmNvbnN0IFNIT1dfQ0xBU1MgPSAnc2hvdyc7XG5cbi8qIEluc3RhbnRpYXRlIGFuZCBkaXNwYXRjaCBhIGN1c3RvbSBldmVudFxuICogQHByaXZhdGVcbiAqIEBwYXJhbSAge1N0cmluZ30gbmFtZSBOYW1lIG9mIHRoZSBjdXN0b20gZXZlbnRcbiAqIEBwYXJhbSAge0VsZW1lbnR9IHRhcmdldCBET00gZWxlbWVudCB0aGF0IHdpbGwgYmUgYXZhaWxhYmxlIGFzIGV2ZW50LnRhcmdldFxuICogQHBhcmFtICB7T2JqZWN0fSBkZXRhaWwgT2JqZWN0IHRoYXQgd2lsbCBiZSBhdmFpbGFibGUgYXMgZXZlbnQuZGV0YWlsXG4gKi9cbmZ1bmN0aW9uIGRpc3BhdGNoRXZlbnQobmFtZSwgdGFyZ2V0LCBkZXRhaWwpIHtcblx0Ly8gSUUgZG9lc24ndCBzdXBwb3J0IEN1c3RvbUV2ZW50XG5cdGlmICh0eXBlb2Ygd2luZG93LkN1c3RvbUV2ZW50ICE9PSAnZnVuY3Rpb24nKSByZXR1cm47XG5cdGNvbnN0IGV2ZW50ID0gbmV3IEN1c3RvbUV2ZW50KG5hbWUsIHtcblx0XHRkZXRhaWwsXG5cdFx0YnViYmxlczogdHJ1ZSxcblx0XHRjYW5jZWxhYmxlOiB0cnVlLFxuXHR9KTtcblx0dGFyZ2V0LmRpc3BhdGNoRXZlbnQoZXZlbnQpO1xufVxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBEcm9wcHkge1xuXHQvKipcblx0ICogSW5pdGlhbGl6ZSB0aGUgRHJvcHB5IGluc3RhbmNlLlxuXHQgKiBXaWxsIGF0dGFjaCBhIGBEcm9wcHlgIHByb3BlcnR5IHRvIHRoZSBgZWxlbWVudGAuXG5cdCAqIEBwYXJhbSAge0hUTUxFbGVtZW50fSBlbGVtZW50IE5vZGUgdGhhdCB3aWxsIGFjdCBhcyBkcm9wZG93biB0b2dnbGVcblx0ICogQHBhcmFtICB7U3RyaW5nfSBbc2hvd0NsYXNzXSAgQ2xhc3NuYW1lIGFzc2lnbmVkIHRvIHRoZSBwYXJlbnQgb24gc2hvd1xuXHQgKiBAcmV0dXJuIHtPYmplY3R9ICAgICAgICAgICAgICBUaGUgbmV3IERyb3BweSBpbnN0YW5jZVxuXHQgKi9cblx0Y29uc3RydWN0b3IoZWxlbWVudCwgc2hvd0NsYXNzID0gU0hPV19DTEFTUykge1xuXHRcdHRoaXMuZWxlbWVudCA9IGVsZW1lbnQ7XG5cdFx0dGhpcy5zaG93Q2xhc3MgPSBzaG93Q2xhc3M7XG5cdFx0dGhpcy5wYXJlbnQgPSBlbGVtZW50LnBhcmVudE5vZGU7XG5cdFx0dGhpcy5tZW51ID0gdGhpcy5wYXJlbnQucXVlcnlTZWxlY3RvcignW3JvbGU9XCJtZW51XCJdJyk7XG5cdFx0dGhpcy5yZWxhdGVkVGFyZ2V0ID0gbnVsbDtcblx0XHR0aGlzLmlzT3BlbiA9IGZhbHNlO1xuXG5cdFx0aWYgKCEoJ0Ryb3BweScgaW4gZWxlbWVudCkpIHtcblx0XHRcdGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5jbGlja0hhbmRsZXIpO1xuXHRcdH1cblx0XHRlbGVtZW50LkRyb3BweSA9IHRoaXM7XG5cdH1cblxuXHQvKipcblx0ICogSGFuZGxlIGtleWJvYXJkIGlucHV0IGZvciBlbmhhbmNlZCBkcm9wZG93biBuYXZpZ2F0aW9uLlxuXHQgKiBBbGxvd3MgdXNpbmcgJ0VzYycgdG8gY2xvc2UgdGhlIGRyb3Bkb3duLCBhbmQgdGhlIHVwL2Rvd24gYXJyb3cga2V5cyB0byBtb3ZlLlxuXHQgKiBAcGFyYW0gIHtLZXlib2FyZEV2ZW50fSBldmVudFxuXHQgKi9cblx0a2V5SGFuZGxlciA9IChldmVudCkgPT4ge1xuXHRcdC8vIERlZmluZSBhIGxpc3Qgb2Yga2V5cyBhbmQgbm9kZXMgd2Ugd2FudCB0byBsaXN0ZW4gdG9cblx0XHRjb25zdCBpc1ZhbGlkS2V5ID0gZXZlbnQua2V5Lm1hdGNoKCdFc2NhcGV8QXJyb3dVcHxBcnJvd0Rvd24nKTtcblx0XHRjb25zdCBpc1ZhbGlkTm9kZSA9ICFldmVudC50YXJnZXQubm9kZU5hbWUubWF0Y2goJ0lOUFVUfFRFWFRBUkVBJyk7XG5cdFx0aWYgKCEoaXNWYWxpZEtleSAmJiBpc1ZhbGlkTm9kZSkpIHJldHVybjtcblxuXHRcdGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cblx0XHQvLyBFc2Mga2V5IChjbG9zZXMgZHJvcGRvd24pXG5cdFx0Y29uc3QgaGFzT3BlblN1Ym1lbnVzID0gdGhpcy5tZW51LnF1ZXJ5U2VsZWN0b3IoJ1thcmlhLWV4cGFuZGVkPVwidHJ1ZVwiXScpO1xuXHRcdGlmIChldmVudC5rZXkgPT09ICdFc2NhcGUnICYmIHRoaXMuaXNPcGVuICYmICFoYXNPcGVuU3VibWVudXMpIHtcblx0XHRcdHRoaXMucmVsYXRlZFRhcmdldCA9IG51bGw7XG5cdFx0XHR0aGlzLmhpZGUoKTtcblx0XHRcdHRoaXMuZWxlbWVudC5mb2N1cygpO1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblxuXHRcdC8vIFVwIC8gZG93biBhcnJvd3MgKGJlaGF2ZXMgYXMgU2hpZnQgKyBUQUIgLyBUQUIpXG5cdFx0Y29uc3QgaXRlbXMgPSBbLi4udGhpcy5tZW51LnF1ZXJ5U2VsZWN0b3JBbGwoJ2EsIGJ1dHRvbiwgaW5wdXQsIHRleHRhcmVhJyldO1xuXHRcdGlmICghaXRlbXMubGVuZ3RoKSByZXR1cm47XG5cdFx0bGV0IGluZGV4ID0gaXRlbXMuaW5kZXhPZihldmVudC50YXJnZXQpO1xuXG5cdFx0aWYgKGV2ZW50LmtleSA9PT0gJ0Fycm93VXAnICYmIGluZGV4ID4gMCkgaW5kZXgtLTtcblx0XHRpZiAoZXZlbnQua2V5ID09PSAnQXJyb3dEb3duJyAmJiBpbmRleCA8IGl0ZW1zLmxlbmd0aCAtIDEpIGluZGV4Kys7XG5cdFx0aWYgKGluZGV4IDwgMCkgaW5kZXggPSAwO1xuXHRcdGl0ZW1zW2luZGV4XS5mb2N1cygpO1xuXHR9O1xuXG5cdC8qKlxuXHQgKiBIYW5kbGVzIGNsaWNrcyBvbiB0aGUgZW50aXJlIGRvY3VtZW50IHRvIG9wZW4gLyBjbG9zZSB0aGUgZHJvcGRvd25zLlxuXHQgKiBDbGlja3Mgb3V0c2lkZSB0aGUgZHJvcGRvd24gd2lsbCBjbG9zZSBpdC5cblx0ICogQ2xpY2tzIG9uIHRoZSBkcm9wZG93biB0b2dnbGUgZWxlbWVudCB3aWxsIHRvZ2dsZSBpdC5cblx0ICogQHBhcmFtICB7TW91c2VFdmVudH0gZXZlbnRcblx0ICovXG5cdGNsaWNrSGFuZGxlciA9IChldmVudCkgPT4ge1xuXHRcdGlmIChldmVudC5idXR0b24gIT09IDApIHJldHVybjsgLy8gQmFpbCBvbiBhbnl0aGluZyB0aGF0IGlzbid0IGEgbGVmdC1jbGlja1xuXG5cdFx0Y29uc3QgeyBlbGVtZW50LCBpc09wZW4sIG1lbnUgfSA9IHRoaXM7XG5cdFx0Y29uc3QgdGFyZ2V0ID0gZXZlbnQudGFyZ2V0O1xuXG5cdFx0Ly8gSGFuZGxlIGNsaWNrcyBpbnNpZGUgdG9nZ2xlIGVsZW1lbnRcblx0XHRpZiAodGFyZ2V0ID09PSBlbGVtZW50KSB7XG5cdFx0XHRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXHRcdFx0dGhpcy5yZWxhdGVkVGFyZ2V0ID0gZWxlbWVudDtcblx0XHRcdHRoaXMudG9nZ2xlKCk7XG5cblx0XHQvLyBIYW5kbGUgY2xpY2tzIGVsc2V3aGVyZSBpbiB0aGUgcGFnZSB3aGVuIHRoZSBkcm9wZG93biBpcyBvcGVuXG5cdFx0Ly8gKGV4Y2VwdCB3aGVuIGNsaWNraW5nIG5lc3RlZCBkcm9wZG93bnMgb3IgZm9ybSBpbnB1dHMpXG5cdFx0fSBlbHNlIGlmIChpc09wZW4pIHtcblx0XHRcdGNvbnN0IHRhcmdldElzVG9nZ2xlID0gdGFyZ2V0LmRhdGFzZXQudG9nZ2xlID09PSAnZHJvcGRvd24nO1xuXHRcdFx0Y29uc3QgdGFyZ2V0SXNJbnB1dCA9IHRhcmdldC5ub2RlTmFtZS5tYXRjaCgnSU5QVVR8VEVYVEFSRUEnKTtcblx0XHRcdGlmICgodGFyZ2V0SXNUb2dnbGUgfHwgdGFyZ2V0SXNJbnB1dCkgJiYgbWVudS5jb250YWlucyh0YXJnZXQpKSByZXR1cm47XG5cblx0XHRcdHRoaXMucmVsYXRlZFRhcmdldCA9IG51bGw7XG5cdFx0XHR0aGlzLmhpZGUoKTtcblx0XHR9XG5cdH07XG5cblx0LyoqXG5cdCAqIFNob3cgdGhlIGRyb3Bkb3duIG1lbnUuXG5cdCAqIFRvZ2dsZXMgY2xhc3NOYW1lcywgZGlzcGF0Y2hlcyBldmVudHMsIGFuZCBzZXRzIHVwIGtleXByZXNzIGhhbmRsZXJzLlxuXHQgKi9cblx0c2hvdyA9ICgpID0+IHtcblx0XHRjb25zdCB7IGtleUhhbmRsZXIsIG1lbnUsIHNob3dDbGFzcywgcGFyZW50LCByZWxhdGVkVGFyZ2V0IH0gPSB0aGlzO1xuXHRcdGRpc3BhdGNoRXZlbnQoU0hPV19FVkVOVCwgcGFyZW50LCB7IHJlbGF0ZWRUYXJnZXQgfSk7XG5cdFx0cGFyZW50LmNsYXNzTGlzdC5hZGQoc2hvd0NsYXNzKTtcblx0XHRtZW51LnNldEF0dHJpYnV0ZSgnYXJpYS1leHBhbmRlZCcsIHRydWUpO1xuXHRcdGRpc3BhdGNoRXZlbnQoU0hPV05fRVZFTlQsIHBhcmVudCwgeyByZWxhdGVkVGFyZ2V0IH0pO1xuXHRcdGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCBrZXlIYW5kbGVyKTtcblx0XHR0aGlzLmlzT3BlbiA9IHRydWU7XG5cdH07XG5cblx0LyoqXG5cdCAqIEhpZGUgdGhlIGRyb3Bkb3duIG1lbnUuXG5cdCAqIFRvZ2dsZXMgY2xhc3NOYW1lcywgZGlzcGF0Y2hlcyBldmVudHMsIGFuZCByZW1vdmVzIGtleXByZXNzIGhhbmRsZXJzLlxuXHQgKi9cblx0aGlkZSA9ICgpID0+IHtcblx0XHRjb25zdCB7IGtleUhhbmRsZXIsIG1lbnUsIHNob3dDbGFzcywgcGFyZW50LCByZWxhdGVkVGFyZ2V0IH0gPSB0aGlzO1xuXHRcdGRpc3BhdGNoRXZlbnQoSElERV9FVkVOVCwgcGFyZW50LCB7IHJlbGF0ZWRUYXJnZXQgfSk7XG5cdFx0cGFyZW50LmNsYXNzTGlzdC5yZW1vdmUoc2hvd0NsYXNzKTtcblx0XHRtZW51LnNldEF0dHJpYnV0ZSgnYXJpYS1leHBhbmRlZCcsIGZhbHNlKTtcblx0XHRkaXNwYXRjaEV2ZW50KEhJRERFTl9FVkVOVCwgcGFyZW50LCB7IHJlbGF0ZWRUYXJnZXQgfSk7XG5cdFx0ZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIGtleUhhbmRsZXIpO1xuXHRcdHRoaXMuaXNPcGVuID0gZmFsc2U7XG5cdH07XG5cblx0LyoqXG5cdCAqIFRvZ2dsZSB0aGUgZHJvcGRvd24gbWVudS5cblx0ICogV2lsbCBkZWNpZGUgaWYgdGhlIG1lbnUgc2hvdWxkIGJlIHNob3duIG9yIGhpZGRlbiBkZXBlbmRpbmcgb24gY3VycmVudCBzdGF0ZS5cblx0ICovXG5cdHRvZ2dsZSA9ICgpID0+IHtcblx0XHRpZiAodGhpcy5wYXJlbnQuY2xhc3NMaXN0LmNvbnRhaW5zKHRoaXMuc2hvd0NsYXNzKSAmJiB0aGlzLmlzT3Blbikge1xuXHRcdFx0dGhpcy5oaWRlKCk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHRoaXMuc2hvdygpO1xuXHRcdH1cblx0fTtcbn1cblxuLyoqXG4gKiBJbml0aWFsaXplIGRyb3Bkb3ducyBvbiB0aGUgZG9jdW1lbnRcbiAqIEBwYXJhbSAge1N0cmluZ30gW3Nob3dDbGFzc10gICBQYXNzZWQgZGlyZWN0bHkgdG8gdGhlIERyb3BweSBjb25zdHJ1Y3RvclxuICogQHNlZSBEcm9wcHlcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGluaXQoc2hvd0NsYXNzID0gU0hPV19DTEFTUykge1xuXHRjb25zdCBlbGVtZW50cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ1tkYXRhLXRvZ2dsZT1cImRyb3Bkb3duXCJdJyk7XG5cdFsuLi5lbGVtZW50c10uZm9yRWFjaChlbGVtZW50ID0+IG5ldyBEcm9wcHkoZWxlbWVudCwgc2hvd0NsYXNzKSk7XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvaW5kZXguanMiXSwic291cmNlUm9vdCI6IiJ9