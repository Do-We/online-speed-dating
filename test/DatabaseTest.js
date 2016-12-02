var mongoose = require('mongoose');
var expected = require('expected').error;

describe('Database Connection', function(done) {
  it('Should connect successfully to database', function() {
    mongoose.connect('mongodb://localhost/speeddatingdb');
    var db = mongoose.connection;
    db.on('error', function(err) {
      expected(err).to.not.exist;
      done();
    });
  });
});