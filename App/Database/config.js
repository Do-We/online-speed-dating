var mongoose = require('mongoose');
require('dotenv-safe').load();

mongoURI = process.env.MONGODB_URI;
console.log(mongoURI);
mongoose.connect(mongoURI);

var db = mongoose.connection; 

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('Mongodb connection open'); 
}); 

module.exports = db;