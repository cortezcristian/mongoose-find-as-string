# mongoose-find-as-string

> `mongoose-find-as-string` is a [Mongoose][mongoose] that enable you to search on every property as string, they plugin searches on non-text field types as Dates, Booleans, etc.

Mongoose Find As String

## Index
* [Install](#install)
* [Usage](#usage)
* [License](#license)

## Install

```bash
npm install mongoose-find-as-string --save
```

## Usage

This plugin must first be added to a schema:

```js

var mongooseAggregatePaginate = require('mongoose-find-as-string');

sampleSchema.plugin(mongooseAggregatePaginate);

```

`SampleModel` will have a new function called `findAsString` (e.g. `SampleModel.findAsString()`).

## License
[MIT][license-url]
