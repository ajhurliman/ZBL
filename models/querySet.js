'use strict';

var mongoose = require('mongoose');

var querySetSchema = mongoose.Schema({
  asin: String,
  durationInDays: Number,
  frequencyInHrs: Number
});
