## strip-units
> A module to strip units.

## Installation

```sh
$ [sudo] npm install --save strip-units
```

## Usage

```js
var stripUnits = require('strip-units');

console.log(stripUnits('-0.667em')); // -0.667
```

## API

### `stripUnits([value])`

Type: `number` or `null`

Returns a number without unit.

#### `value`

Type: `string`  
Default: `''`

Value with unit.

## License

MIT © [Cícero Pablo](http://ciceropablo.github.io)
