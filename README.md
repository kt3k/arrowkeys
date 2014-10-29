# arrowkeys v0.1.0

> events for arrow keys (→←↑↓). depends on jquery.

## Usage

Load script:

```html
<script src="path/to/arrowkeys.js"></script>
```

To bind arrowkey events:

```
$(document).arrowkeys();
```

Handle each key event:
```
$(document)
    .on('upkey', function () {})
    .on('downkey', function () {})
    .on('leftkey', function () {})
    .on('rightkey', function () {});
```

To unbind the events:

```
$(document).arrowkeysUnbind();
```
