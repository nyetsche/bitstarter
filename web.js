var fs = require('fs');
var buf = require('buffer');

var express = require('express');

var app = express.createServer(express.logger());

app.get('/', function(request, response) {
    var mybuf = fs.readFileSync('index.html');
    var mystring = mybuf.toString();
    response.send(mystring);

});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
