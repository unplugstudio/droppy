# Droppy

Simple, accessible, nested dropdow menus. Inspired by Bootstrap dropdowns.

Supports TAB navigation, Space/Enter to toggle the dropdowns, Esc to close, and up/down arrow keys. All positioning is done via CSS, so it can easily be converted to accordions / drawers for mobile users.

*No dependencies. Less than 5 KB minified, less than 2 KB gzipped.*

Open `demo.html` for a complete demo.

## Installation

You can include Droppy directly in your document:

```html
<script src="lib/droppy.min.js">
<script>
  droppy.Droppy(...)
  droppy.init(...)
<script>
```

You can also install from git and consume as a ES6 module:

```bash
npm install git+https://gitlab.com/jerivas/droppy.git
```

```javascript
import Droppy, { init } from 'droppy'
```

## Required markup

```html
<div>
  <button data-toggle="dropdown">Dropdown</button>
  <ul role="menu">
    <li><a href="#">Item 1</a></li>
    <li><a href="#">Item 2</a></li>
    <li><a href="#">Item 3</a></li>
  </ul>
</div>

<script>
  // Single element
  var btn = document.querySelector('[data-toggle="dropdown"]')
  var myDroppy = new droppy.Droppy(btn)

  // OR: All elements with [data-toggle="dropdown"] in one go
  droppy.init()
</script>
```

- Wrap the `button` and `ul` with a `div` (or any other element)
- Add `data-toggle="dropdown"` to the `button`
- Add `role="menu"` to the `ul`
- Initialize Droppy on the `button`
- When the dropdown is toggled, the class `open` will be added to the parent `div` (you can pass a custom class to `init` and `Droppy` as the second argument)
- Optional: Attach event listeners to the parent `div` and listen for:
  - `show.droppy`
  - `shown.droppy`
  - `hide.droppy`
  - `hidden.droppy`