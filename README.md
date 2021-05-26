# CKEditor SMethods Plugin

Additional methods for [CKEditor plugins](https://github.com/search?q=topic%3Ackeditor-plugin+org%3ASestolab).

## Requirements

* [CKEditor](https://ckeditor.com/ckeditor-4) version 4.11.3 or greater

## Browser Compatibility

SMethods has [the same browser compatibility as CKEditor](https://docs.ckeditor.com/ckeditor4/latest/guide/dev_browsers.html).

## Installation

1. Put the plugin into the CKEditor `plugins` folder.
2. Require **smethods** in `plugin.js` where you want to use its functionality:

```js
requires: 'smethods';
```

## Methods

### array

#### `without(array, ...values) -> Array`

Returns a copy of the `array` with all instances of the `values` removed.

##### Arguments

* **array (Array)**: The original array.
* **values (...&#42;)**: The values that should be removed.

##### Returns

* **(Array)**: The new array.

### dialog

#### `getCurrentPageId() -> String`

Gets the current page id.

##### Returns

* **(String)**: The current page id.

### editor

#### `addCommands(definitions)`

Adds one or more commands from the specified definition object to the editor instance.

##### Arguments

* **definitions (Object)**: Object where keys are used as `commandName` and corresponding values as the definition for an [addCommand](https://ckeditor.com/docs/ckeditor4/latest/api/CKEDITOR_editor.html#method-addCommand) call.

### element

#### `matchClass(regexp) -> Array | Boolean`

Gets the element class names that match a regular expression.

##### Arguments

* **regexp (RegExp)**

##### Returns

* **(Array|Boolean)**

#### `rmClass(remove) -> element`

Removes a CSS class name from the element classes. Other classes remain untouched.

##### Arguments

* **remove (RegExp|Array)**

##### Returns

* **[element](https://ckeditor.com/docs/ckeditor4/latest/api/CKEDITOR_dom_element.html)**: this.

#### `toggleClass(name, remove) -> element`

Adds a CSS class to the element or removes it if it exists.

##### Arguments

* **name (String)**: The class name.
* **remove (RegExp|Array)**: The regular expression or array of the class names that should be removed.

##### Returns

* **[element](https://ckeditor.com/docs/ckeditor4/latest/api/CKEDITOR_dom_element.html)**: this.

#### `toggleAttribute(name, value) -> element`

Adds an attribute to the element or removes it if it exists.

##### Arguments

* **name (String)**: The name of the attribute.
* **value (String)**: The value of the attribute.

##### Returns

* **[element](https://ckeditor.com/docs/ckeditor4/latest/api/CKEDITOR_dom_element.html)**: this.

#### `matchAttribute(regexp) -> Array`

Gets the element attribute name(s) that matches a regular expression.

##### Arguments

* **regexp (RegExp)**: The regular expression.

##### Returns

* **(Array)**

#### `realName() -> String`

Gets the element's real name (real tag name).

##### Returns

* **(String)**: The element's real name.

#### `isReal(name) -> Boolean`

Checks if the element's real name matches the specified criteria.

##### Arguments

* **name (...String)**: One or more names to be checked.

##### Returns

* **(Boolean)**

#### `findParent(selector) -> element`

Returns the first parent element of this element that matches the specified `selector`.

##### Arguments

* **selector (String)**: A valid [CSS selector](https://developer.mozilla.org/docs/Web/CSS/CSS_Selectors).

##### Returns

* **[element](https://ckeditor.com/docs/ckeditor4/latest/api/CKEDITOR_dom_element.html)**

### ui

#### `addMenuButton(name, definition)`

Adds a menu button definition to the UI elements list.

##### Arguments

* **name (String)**: The menu button name.
* **definition (Object)**: The menu button definition.

### uiElement

#### `getValues() -> Array`

Gets all values of this dialog UI object.

##### Returns

* **(Array)**

#### `hasFocus() -> Boolean`

Determines whether a UI element is focused or not.

##### Returns

* **(Boolean)**

#### `toggleState()`

Toggle **disable**/**enable** UI element.

#### `isOnCurrentPage() -> Boolean`

Determines whether a UI element is on the current tab or not.

##### Returns

* **(Boolean)**

