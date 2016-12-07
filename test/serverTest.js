
var express = require('express');
var router = require('../App/Server/router.js');

var app = express();
var PORT = process.env.PORT || 4321;
require('../App/Server/middleware.js')(app, express);

app.use('/', router);

describe('Server Connection', function(done) {
  it('Should connect successfully to server', function() {
    app.listen(PORT, function() {
      console.log('Express listening on port', PORT);
      done(); 
    });
  });
});