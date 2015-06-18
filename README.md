# meterstoyards.js

JavaScript conversion of meters to yards.

## Usage

### Node.js

```js
var MetersToYards = require("meterstoyards");
var mty = new MetersToYards();
mty.get(1);
// => 0.9144
```

### Browser

(Add necessary `<script>` tag reference to `meterstoyards.js`)

```js
// MetersToYards is autoloaded to window.MetersToYards
var mty = new MetersToYards();
mty.get(1);
// => 0.9144
```

## Tests

Jasmine

```bash
$ npm test
```

## License

MIT. By [Josh Ause](http://www.github.com/joshause).
