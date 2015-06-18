# meterstoyards.js

JavaScript conversion of meters to yards.

[![Build Status](https://travis-ci.org/joshause/meterstoyards.svg?branch=master)](https://travis-ci.org/joshause/meterstoyards)
[![MIT license](http://img.shields.io/badge/license-MIT-brightgreen.svg)](http://opensource.org/licenses/MIT)

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
