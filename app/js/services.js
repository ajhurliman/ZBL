'use strict';
var json2csv = require('json2csv');

module.exports = function(services) {
  services.factory('ViewFactory', function() {
    var queryPoints = {
      value: {}
    }

    return {
      getQueryPoints: function() {
        return queryPoints.value;
      },

      setQueryPoints: function(data) {
        queryPoints.value = data;
      }
    }
  });

  services.factory('FormatFactory', 'ngCsv', function(ngCsv) {
    //take kimono json data, return flat object
    return {
      processObject: function(kimObj) {


      }
    }
  });

}
