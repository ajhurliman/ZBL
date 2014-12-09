'use strict';

var mongoose = require('mongoose');

var queryPointSchema = mongoose.Schema({
  querySetId: {type: mongoose.Schema.Types.ObjectId, ref: 'QuerySet'},
  salesRank: Number,
  category: String,
  qtyInStock: Number,
  numReviews: Number,
  reviewScore: Number,
  isPrime: Boolean,
  queryTime: Date,
});

module.exports = mongoose.model('QueryPoint', queryPointSchema);
