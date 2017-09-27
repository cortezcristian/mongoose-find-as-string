# mongoose-find-as-string

> `mongoose-find-as-string` is a [Mongoose][mongoose] plugin that enables you to search on every property as string, that means it searches on non-text field types as Dates, Booleans, etc.

Motivation: let's say a user enters `2017` one option is to start searching the Date field using `$gt` and `$lt` for that period. But what happens when a user searches for `20` that can match years, months, days, hours, etc. If text indexes, virtual props and extensive aggreate pipelines are giving you a headhache: this plugin is just for you.

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

[mongoose]: http://mongoosejs.com
[license-url]: LICENSE
