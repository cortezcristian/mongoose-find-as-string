'use strict';

const findAsStringPlugin = function(schema, options) {
  console.log(schema, options);
  options = options || {};

  schema.eachPath(function(path, schemaType) {
		console.log(path, schemaType.options.customAttr1, schemaType.options.customAttr2);
	});

  schema.statics.findAsString = function(query) {
    console.log(query);
    console.log(this.aggregate);
    return this.aggregate([{$match: {}}]);
  };
}

module.exports = findAsStringPlugin;
