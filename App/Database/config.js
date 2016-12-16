var mongoose = require('mongoose');

mongoURI = 'mongodb://localhost/users';
mongoose.connect(mongoURI);

var db = mongoose.connection; 

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('Mongodb connection open');
  // db.dropDatabase(function(err) {
  // 	if(err) {
  // 		console.log('Error Dropping DB');
  // 	}
  // 	console.log('DB Dropped')
  // });
}); 

module.exports = db;