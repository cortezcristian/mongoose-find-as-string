const findAsString  = require('./lib/mongoose-find-as-string')

module.exports = function (schema) {
  schema.statics.findAsString = findAsString;
};
