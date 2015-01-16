'use strict';

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
}
