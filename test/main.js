require('should');
const mongoose = require('mongoose');
const mongooseFindAsString = require('../');

mongoose.connect('mongodb://localhost/sample-test');

// Sample Model
// -----------------------------

// Modules Dependencies:
//  - Mongoose (http://mongoosejs.com/docs/guide.html)
//
const Schema = mongoose.Schema;

const sampleSchema = new Schema({
  name          : String,
  template      : { type: String },
  live          : { type: Boolean, default: true },
  startDate     : Date,
});

// ### Hooks
// #### Pre-Save
sampleSchema.pre("save", function(next) {
  if(!this.startDate) {
    this.startDate = new Date();
  }
  next();
});

// ### Method:
sampleSchema.method("instanceMethod", function(cb) {
    const sample = this;
    this.save(cb);
});

// ### Static:
sampleSchema.statics.customMethod = function (paramid, cb) {
  const Sample = this;
  Sample.findOne({ _id: paramid}, function(err, sample){
    cb(err, sample);
  });
}

// Add the plugin
sampleSchema.plugin(mongooseFindAsString);

// Export module
const SampleModel = mongoose.model('Sample', sampleSchema);

describe('Monggose#findAsString tests', function () {

  it('should return an object', function(done) {
    const result = SampleModel.findAsString();
    result.should.be.an.Object();
    result.should.be.empty();
    done();
  });
});
