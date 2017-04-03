const SHOW_EVENT = 'show.dropdown';
const SHOWN_EVENT = 'shown.dropdown';
const HIDE_EVENT = 'hide.dropdown';
const HIDDEN_EVENT = 'hidden.dropdown';

const SHOW_CLASS = 'show';

/* Instantiate and dispatch a custom event
 * @private
 * @param  {String} name Name of the custom event
 * @param  {Element} target DOM element that will be available as event.target
 * @param  {Object} detail Object that will be available as event.detail
 */
function dispatchEvent(name, target, detail) {
	// IE doesn't support CustomEvent
	if (typeof window.CustomEvent !== 'function') return;
	const event = new CustomEvent(name, {
		detail,
		bubbles: true,
		cancelable: true,
	});
	target.dispatchEvent(event);
}

export default class Droppy {
	/**
	 * Initialize the Droppy instance.
	 * Will attach a `Droppy` property to the `element`.
	 * @param  {HTMLElement} element Node that will act as dropdown toggle
	 * @param  {String} [showClass]  Classname assigned to the parent on show
	 * @return {Object}              The new Droppy instance
	 */
	constructor(element, showClass = SHOW_CLASS) {
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
	keyHandler = (event) => {
		// Define a list of keys and nodes we want to listen to
		const isValidKey = event.key.match('Escape|ArrowUp|ArrowDown');
		const isValidNode = !event.target.nodeName.match('INPUT|TEXTAREA');
		if (!(isValidKey && isValidNode)) return;

		event.preventDefault();

		// Esc key (closes dropdown)
		const hasOpenSubmenus = this.menu.querySelector('[aria-expanded="true"]');
		if (event.key === 'Escape' && this.isOpen && !hasOpenSubmenus) {
			this.relatedTarget = null;
			this.hide();
			this.element.focus();
			return;
		}

		// Up / down arrows (behaves as Shift + TAB / TAB)
		const items = [...this.menu.querySelectorAll('a, button, input, textarea')];
		if (!items.length) return;
		let index = items.indexOf(event.target);

		if (event.key === 'ArrowUp' && index > 0) index--;
		if (event.key === 'ArrowDown' && index < items.length - 1) index++;
		if (index < 0) index = 0;
		items[index].focus();
	};

	/**
	 * Handles clicks on the entire document to open / close the dropdowns.
	 * Clicks outside the dropdown will close it.
	 * Clicks on the dropdown toggle element will toggle it.
	 * @param  {MouseEvent} event
	 */
	clickHandler = (event) => {
		if (event.button !== 0) return; // Bail on anything that isn't a left-click

		const { element, isOpen, menu } = this;
		const target = event.target;

		// Handle clicks inside toggle element
		if (target === element) {
			event.preventDefault();
			this.relatedTarget = element;
			this.toggle();

		// Handle clicks elsewhere in the page when the dropdown is open
		// (except when clicking nested dropdowns or form inputs)
		} else if (isOpen) {
			const targetIsToggle = target.dataset.toggle === 'dropdown';
			const targetIsInput = target.nodeName.match('INPUT|TEXTAREA');
			if ((targetIsToggle || targetIsInput) && menu.contains(target)) return;

			this.relatedTarget = null;
			this.hide();
		}
	};

	/**
	 * Show the dropdown menu.
	 * Toggles classNames, dispatches events, and sets up keypress handlers.
	 */
	show = () => {
		const { keyHandler, menu, showClass, parent, relatedTarget } = this;
		dispatchEvent(SHOW_EVENT, parent, { relatedTarget });
		parent.classList.add(showClass);
		menu.setAttribute('aria-expanded', true);
		dispatchEvent(SHOWN_EVENT, parent, { relatedTarget });
		document.addEventListener('keydown', keyHandler);
		this.isOpen = true;
	};

	/**
	 * Hide the dropdown menu.
	 * Toggles classNames, dispatches events, and removes keypress handlers.
	 */
	hide = () => {
		const { keyHandler, menu, showClass, parent, relatedTarget } = this;
		dispatchEvent(HIDE_EVENT, parent, { relatedTarget });
		parent.classList.remove(showClass);
		menu.setAttribute('aria-expanded', false);
		dispatchEvent(HIDDEN_EVENT, parent, { relatedTarget });
		document.removeEventListener('keydown', keyHandler);
		this.isOpen = false;
	};

	/**
	 * Toggle the dropdown menu.
	 * Will decide if the menu should be shown or hidden depending on current state.
	 */
	toggle = () => {
		if (this.parent.classList.contains(this.showClass) && this.isOpen) {
			this.hide();
		} else {
			this.show();
		}
	};
}

/**
 * Initialize dropdowns on the document
 * @param  {String} [showClass]   Passed directly to the Droppy constructor
 * @see Droppy
 */
export function init(showClass = SHOW_CLASS) {
	const elements = document.querySelectorAll('[data-toggle="dropdown"]');
	[...elements].forEach(element => new Droppy(element, showClass));
}
