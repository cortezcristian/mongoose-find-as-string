# mongoose-find-as-string

> `mongoose-find-as-string` is a [Mongoose][mongoose] plugin that enables you to search on every property as string, that means it searches on non-text field types as Dates, Booleans, etc.

[![Build Status](https://travis-ci.org/cortezcristian/mongoose-find-as-string.svg?branch=master)](https://travis-ci.org/cortezcristian/mongoose-find-as-string)
[![npm version](https://badge.fury.io/js/mongoose-find-as-string.svg)](https://badge.fury.io/js/mongoose-find-as-string)
[![Dependency Status](https://gemnasium.com/badges/github.com/cortezcristian/mongoose-find-as-string.svg)](https://gemnasium.com/github.com/cortezcristian/mongoose-find-as-string)


Motivation:

- Date Use Case: let's say a user enters `2017` one option is to start searching the Date field using `$gt` and `$lt` for that period. But what happens when a user searches for `20` that can match years, months, days, hours, etc.
- Number Use Case: a user wants to search all numeric fields as string, in example `20` shuould match 200, 320, etc.
- Boolean Use Case: a user wants to search `tr` and is trying to match `true`.


If text indexes, virtual props and extensive aggreate pipelines are giving you a headhache: this plugin is just for you.

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

const mongoosefindAsString = require('mongoose-find-as-string');

sampleSchema.plugin(mongoosefindAsString);

```

`SampleModel` will have a new function called `findAsString` (e.g. `SampleModel.findAsString()`).

### Finding

Let's say we have the following schema definition:

```js
const mongoose = require('mongoose');
const mongoosefindAsString = require('mongoose-find-as-string');
const Schema = mongoose.Schema;

const sampleSchema = new Schema({
  name          : String,
  qty           : { type: Number, default: 100 },
  live          : { type: Boolean, default: true },
  startDate     : Date,
});

// Add the plugin
sampleSchema.plugin(mongooseFindAsString);

// Export module
const SampleModel = mongoose.model('Sample', sampleSchema);

// Create a sample document and persist it
mongoose.connect('mongodb://localhost/sample-test');

const sample = new SampleModel({
  name: 'John Doe',
  qty: 55,
  startDate: new Date(2017, 4, 20),
  live: false,
});

sample.save();

```

You can find number as string:

```js
SampleModel.findAsString({
  name: 'doe',
  qty: '5',
  startDate: '2017',
  live: 'fals',
}).exec((err, docs) => {
  // docs:
  // [ { _id: 59cdcf3528426e6b4e64e345,
  //    name: 'John Doe',
  //    startDate: 2017-05-20T03:00:00.000Z,
  //    live: false,
  //    __v: 0 } ]
});
```


## License
[MIT][license-url]

[mongoose]: http://mongoosejs.com
[license-url]: LICENSE
