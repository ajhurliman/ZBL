'use strict';

var mongoose = require('mongoose');

var queryPointSchema = mongoose.Schema({
  querySetId: mongoose.Schema.Types.ObjectId,
  creation: Date,
  salesRank: Number,
  category: String,
  qtyInStock: Number,
  numReviews: Number,
  reviewScore: Number,
  isPrime: String
});

module.exports = mongoose.model('QueryPoint', queryPointSchema);
