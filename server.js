'use strict';

var express = require('express');
var bodyparser = require('body-parser');
var mongoose = require('mongoose');
var app = express();

//initialize db
mongoose.connect(process.env.MONGOLAB_URI || 'mongodb://localhost/zblDev');

//configure server
app.set('port', process.env.PORT || 3000);
app.use(bodyparser.json());

//include the routes
require('./routes')(app);
app.use(express.static(__dirname + '/build'));

app.listen(app.get('port'), function() {
  console.log('server started on port %d', app.get('port'));
});

module.exports = app;
