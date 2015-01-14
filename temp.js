var $ = require('jquery');
var newQueryPoint = {};
var apiData = {
  "qty": "In Stock.",
  "rating": "4.3 out of 5 stars",
  "title": "The ZappBug Heater - Kills 100% of Bed Bugs with Heat",
  "seller rank": {
    "href": "http://www.amazon.com/gp/bestsellers/hi/ref=pd_dp_ts_hi_1",
    "text": "#30,500 in Home Improvement (See top 100)"
  }
};

traverse(apiData);
console.dir(newQueryPoint);

function traverse(jsonObj) {
  if( typeof jsonObj == "object" ) {
    $.each(jsonObj, function(k,v) {
        // k is either an array index or object key
        traverse(v);
    });
  }
  else {
    // jsonOb is a number or string
    newQueryPoint[k] = v;
  }
}

