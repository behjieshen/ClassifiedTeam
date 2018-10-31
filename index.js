var express = require('express');
var path = require('path');
var app = express();
var fs = require('fs');

var port = process.env.PORT || 8080;

// app.set('views', path.join(__dirname, '/build'));
app.use(express.static(path.join(__dirname, '/build')));

var index = express.Router();

app.get('/', function(req, res) {
  res.sendFile('index.html');
});

app.listen(port);
console.log('Server started on port ' + port);
