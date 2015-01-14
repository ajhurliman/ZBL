'use strict';

var mongoose = require('mongoose');

var queryPointSchema = mongoose.Schema({
  querySetId: mongoose.Schema.Types.ObjectId,
  creation: Date,
  salesRank: Number,
  category: String,
  qty: String,
  numReviews: String,
  title: String,
  rating: String,
  isPrime: String
});

module.exports = mongoose.model('QueryPoint', queryPointSchema);
