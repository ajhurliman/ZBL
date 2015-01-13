'use strict';

var mongoose = require('mongoose');

var querySetSchema = mongoose.Schema({
  apiUrl: String,
  name: String
});

module.exports = mongoose.model('QuerySet', querySetSchema);
