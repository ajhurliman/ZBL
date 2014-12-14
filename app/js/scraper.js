var $ = require('jquery');
var jQuery = $;
var request = require('request');
var cheerio = require('cheerio');

var url = 'http://www.amazon.com/The-ZappBug-Heater-Kills-100%25/dp/B00F6EV306/';

request(url, function(err, resp, body) {
  if (err)
    throw err;
  resultsDom = cheerio.load(body); //setup the DOM

  var rating = resultsDom('#averageCustomerReviewRating').text().split(' ');
  rating = rating[0];
  console.log('Rating: ' + rating);

  var salesRank = resultsDom('#SalesRank .value').text().replace(/\n/g, '').replace(/,/g, '');
  salesRank = salesRank.slice(1);
  salesRank = salesRank.split(' ');
  salesRank = salesRank[0];
  console.log("Sales Rank: " + salesRank);

  var category = resultsDom('#SalesRank .value').text().replace(/\n/g, '').slice(1).replace(/,/g, '').replace(/\d/g, '').replace(' in ', '').trim().split(' ');
  for (var i = 0; i < 3; i++) {
    category.pop();
  }
  category = category.join(' ');
  console.log("Category: " + category);

  //TODO: fix this feature
  // var qty = resultsDom('.a-color-success').text();
  // console.log("qty: " + qty);

  var numReviews = resultsDom('#averageCustomerReviewCount a').text().split(' ');
  numReviews = numReviews.shift();
  console.log('Number of Reviews: ' + numReviews);

  //TODO: fix this feature
  // var isPrime = resultsDom('#primenote').text();
  // console.log('Prime Status: ' + isPrime);

  var queryTime = new Date;
  queryTime.toDateString();

  console.log('Time: ' + queryTime);
});

