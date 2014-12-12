'use strict';

var moment = require('moment');
var sha256 = require('js-sha256');
var jquery = require('jquery');

//set variables
//var authToken = process.env.AUTH_TOKEN ||
var accessKey = process.env.ACCESS_KEY || 'AKIAIECD26LOT4AZEBUQ';

//make request date
var timeNow = moment().format();
var timeCanonical = timeNow.replace(/:/g, "%3A");
console.log(timeCanonical);

var newSig = makeSignature('B002KT3XQM', 'GetMatchingProductForASIN')
//var results = makeRequest('B002KT3XQM', 'GetMatchingProductForASIN', newSig);

function makeRequest(asin, action, signature) {
  // jquery.ajax({
  //   type: "POST",
  //   url: "mws.amazonservices.com/",
  //   data: { ASIN: asin,
  //    AWSAccessKeyId: "AKIAIECD26LOT4AZEBUQ",
  //    Action: action,
  //    //MWSAuthToken: authToken,
  //    MarketplaceId: "ATVPDKIKX0DER",
  //    SellerId: "AY3Y67GVNGKA6",
  //    SignatureMethod: "HmacSHA256",
  //    SignatureVersion: "2",
  //    Timestamp: timeCanonical,
  //    Version: "2011-10-01",
  //    Signature: signature
  //   }
  // })
  //   .done(function( msg ) {
  //     alert( "Data Saved: " + msg );
  //   });
}

//module.exports = function() {
  function makeSignature(asin, action) {
    if (action === "GetMatchingProductForASIN") {
      //make canonical request string
      var canonical = "ASIN=" +
      asin +
      "&AWSAccessKeyId=" +
      process.env.ACCESS_KEY +
      "&Action=" +
      action +
      //"MWSAuthToken=" +
      //authToken +
      "&MarketplaceId=ATVPDKIKX0DER" +
      "SellerId=AY3Y67GVNGKA6" +
      "&SignatureMethod=HmacSHA256" +
      "&SignatureVersion=2" +
      "&Timestamp=" +
      timeCanonical +
      "&Version=2011-10-01";

      //encode canonical request string in SHA256, then conver to base64 to make signature
      var signature = sha256(canonical);
      var signature64 = new Buffer(signature).toString('base64');
      console.log("signature64: " + signature64);
      return (canonical + "&Signature=" + signature64);
    } else {
      //TODO: make signature for other action
    }
  }
//}
