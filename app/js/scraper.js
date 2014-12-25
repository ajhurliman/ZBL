var $ = require('jquery');
var jQuery = $;
var request = require('request');
var cheerio = require('cheerio');
var fs = require('fs');

var url = 'http://www.amazon.com/The-ZappBug-Heater-Kills-100%25/dp/B00F6EV306/';

request(url, function(err, resp, body) {
  if (err)
    throw err;
  resultsDom = cheerio.load(body, {
    normalizeWhitespace: true
  }); //setup the DOM

  fs.writeFile('body.txt', resultsDom('body').text(), function (err) {
    if (err) throw err;
    console.log('It\'s saved!');
  });

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
  var qty = resultsDom('.a-color-success').text();
  // qty.replace(/\s/g, '');
  console.log('"' + qty + '"');

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

