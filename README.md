# arrowkeys v0.2.1

> Events for arrow keys (→←↑↓). Depends on jquery.

## Usage

Load script:

```html
<script src="path/to/jquery.js"></script>
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

# License

MIT
