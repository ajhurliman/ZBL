'use strict';
var sellerId = 'AY3Y67GVNGKA6';
var secretAccessKey = 'eSwyykzGJ9teb5ZBp+wwX1EWDDi1tqdY9X4Ev9mW';
var marketplaceId = 'ATVPDKIKX0DER';
var accessKeyId = 'AKIAIECD26LOT4AZEBUQ';
var sampleAsin = 'B00FOSEE2I';
var QuerySet = require('../models/querySet');
var QueryPoint = require('../models/queryPoint');
var mws = require('mws');
var client = new AmazonMwsClient('accessKeyId', 'secretAccessKey', 'merchantId', {});
client.invoke(new mws.sellers.requests.GetServiceStatus(), console.log);

module.exports = function(app, mongoose) {
  //initiate querySet
  /*app.post('/api/querySet', function(req, res) {
    //save querySet to db
    var newSet = new QuerySet();
    newSet.asin = req.body.asin;
    newSet.durationInDays = req.body.duration;
    newSet.frequencyInHrs = req.body.freq;

    //tell heroku to start the set
    //...code to initiate set goes here
  });*/

  app.get('/api/queryPoint', function(req, res) {
    var newPoint = new QueryPoint();

    var listOrders = new mws.orders.requests.ListOrders();
    listOrders.set('MarketplaceId', 'marketplaceId')
        .set('CreatedAfter', new Date(2,14,2012));
    client.invoke(listOrders, function(results) {
        console.log(results);
    });

    //create request URLs
    /*var salesRankUrl =
    var categoryUrl =
    var qtyInStockUrl =
    var numReviewsUrl =
    var reviewScoreUrl =
    var isPrimeUrl =*/

    //request data from MWS with superagent
    /*request.post(salesRankUrl)*/

    //parse response data from MWS

    //assign data to queryPoint
    /*newPoint.querySetId = req.user._id;
    newPoint.salesRank =
    newPoint.category =
    newPoint.qtyInStock =
    newPoint.numReviews =
    newPoint.reviewScore =
    newPoint.isPrime =
    newPoint.queryTime = new Date();*/

    //save to db
    /*newPoint.save(function(err, data) {
      if (err) return res.status(500).send('save error');
      return res.json(data);
    });*/
  });
};
