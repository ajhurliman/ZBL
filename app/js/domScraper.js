var request = require('request');
var select = require('soupselect');
var htmlparser = require("htmlparser2");
//var testUrl = 'http://www.amazon.com/The-ZappBug-Heater-Kills-100%25/dp/B00F6EV306/';
var testUrl = 'http://www.urbandictionary.com';
var isPrime;

request(testUrl, function(err, res, body) {
  if (err) {
    return;
  }

  var handler = new htmlparser.DomHandler(function (error, dom) {
    console.log(dom);
  });
  var parser = new htmlparser.Parser(handler);
  parser.write();
  parser.done();

  //body.select('')
  //parser.write(body);
  //parser.end();
});


