arrowkeys.js
============

*arrowkeys.js* is abstraction of event binding to arrow keys (→←↑↓).

Usage
-----

To load script:

```html
<script src="path/to/arrowkeys.js"></script>
```

To bind events:

```
arrowkeys({
    up: upHandler,
    down: downHandler,
    left: leftHandler,
    right: rightHandler
});
```

To unbind events:

```
arrowkeys.remove();
```
