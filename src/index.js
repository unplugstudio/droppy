const SHOW_EVENT = 'show.droppy'
const SHOWN_EVENT = 'shown.droppy'
const HIDE_EVENT = 'hide.droppy'
const HIDDEN_EVENT = 'hidden.droppy'

const SHOW_CLASS = 'open'

/* Instantiate and dispatch a custom event
 * @private
 * @param  {String} name Name of the custom event
 * @param  {Element} target DOM element that will be available as event.target
 * @param  {Object} detail Object that will be available as event.detail
 */
function dispatchEvent(name, target, detail) {
  // IE doesn't support CustomEvent
  if (typeof window.CustomEvent !== 'function') return
  const event = new CustomEvent(name, {
    detail,
    bubbles: true,
    cancelable: true
  })
  target.dispatchEvent(event)
}

export default class Droppy {
  /**
   * Initialize the Droppy instance.
   * Will attach a `Droppy` property to the `element`.
   * @param  {HTMLElement} element Node that will act as dropdown toggle
   * @param  {String} [showClass]  Class name assigned to the dropdown on show
   * @return {Object}              The new Droppy instance
   */
  constructor(element, showClass = SHOW_CLASS) {
    this.element = element
    this.showClass = showClass
    this.dropdown = document.getElementById(
      element.getAttribute('aria-controls')
    )
    this.relatedTarget = null
    this.isOpen = false

    if (!this.dropdown) {
      console.error(
        `Could not find related dropdown for ${
          element.textContent
        }. Make sure the aria-controls attribute is set.`
      )
    }

    if (!('droppy' in element)) {
      document.addEventListener('click', this.clickHandler)
    }

    this.element.setAttribute('aria-expanded', false)
    element.droppy = this
    return this
  }

  /**
   * Handle keyboard input for enhanced dropdown navigation.
   * @param  {KeyboardEvent} event
   */
  keyHandler = event => {
    // Define a list of keys and nodes we want to listen to
    const isValidKey = event.key.match('Escape|ArrowUp|ArrowDown')
    const isValidNode = !event.target.nodeName.match('INPUT|TEXTAREA')
    if (!(isValidKey && isValidNode)) return

    event.preventDefault()

    // Esc key (closes dropdown)
    if (event.key === 'Escape' && this.isOpen) {
      this.relatedTarget = null
      this.hide()
      this.element.focus()
    }
  }

  /**
   * Handles clicks on the entire document to open / close the dropdowns.
   * Clicks outside the dropdown will close it.
   * Clicks on the dropdown toggle element will toggle it.
   * @param  {MouseEvent} event
   */
  clickHandler = event => {
    if (event.button !== 0) return // Bail on anything that isn't a left-click

    const { element, isOpen, dropdown } = this
    const { target } = event

    // Handle clicks inside toggle element
    if (target === element) {
      event.preventDefault()
      this.relatedTarget = element
      this.toggle()

      // Handle clicks elsewhere in the page when the dropdown is open
      // (except when clicking nested dropdowns or form inputs)
    } else if (isOpen) {
      const isDroppy = target.droppy
      const isInput = target.nodeName.match('INPUT|TEXTAREA')
      if ((isDroppy || isInput) && dropdown.contains(target)) return

      this.relatedTarget = null
      this.hide()
    }
  }

  /**
   * Show the dropdown menu.
   * Toggles classNames, dispatches events, and sets up keypress handlers.
   */
  show = () => {
    const { keyHandler, element, dropdown, showClass, relatedTarget } = this
    dispatchEvent(SHOW_EVENT, dropdown, { relatedTarget })
    dropdown.classList.add(showClass)
    element.setAttribute('aria-expanded', true)
    dispatchEvent(SHOWN_EVENT, dropdown, { relatedTarget })
    document.addEventListener('keydown', keyHandler)
    this.isOpen = true
  }

  /**
   * Hide the dropdown menu.
   * Toggles classNames, dispatches events, and removes keypress handlers.
   */
  hide = () => {
    const { keyHandler, element, dropdown, showClass, relatedTarget } = this
    dispatchEvent(HIDE_EVENT, dropdown, { relatedTarget })
    dropdown.classList.remove(showClass)
    element.setAttribute('aria-expanded', false)
    dispatchEvent(HIDDEN_EVENT, dropdown, { relatedTarget })
    document.removeEventListener('keydown', keyHandler)
    this.isOpen = false
  }

  /**
   * Toggle the dropdown menu.
   * Will decide if the menu should be shown or hidden depending on current state.
   */
  toggle = () => {
    this.isOpen ? this.hide() : this.show()
  }
}

/**
 * Initialize dropdowns on the document
 * @param  {String} [showClass]   Passed directly to the Droppy constructor
 * @see Droppy
 */
export function init(showClass = SHOW_CLASS) {
  const elements = document.querySelectorAll('[data-toggle="dropdown"]')
  ;[...elements].forEach(element => new Droppy(element, showClass))
}
