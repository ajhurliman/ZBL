'use strict';

/* Controllers */

module.exports = function(controllers) {
  controllers.controller('AddQueryController', ['$scope', '$firebase', function($scope, $firebase) {
    var queryRef = new Firebase('https://zblapp.firebaseio.com');
    $scope.queries = $firebase(queryRef);

    $scope.newAsin = '';
    $scope.saveProduct = function() {
      //TODO: get categories from MWS API, then make a new query for each & add to firebase
      //
      var newQuery = {asin: $scope.newAsin, title: 'new title', paused: false};
      $scope.queries.$push(newQuery);
      $scope.newAsin = '';
    };
  }]);

  controllers.controller('ManageQueryController', ['$scope', '$firebase', function($scope, $firebase) {
    //3-way binding for list of queries (model + view + firebase)
    var ref = new Firebase('https://zblapp.firebaseio.com');
    var sync = $firebase(ref);
    var syncObject = sync.$asObject();
    syncObject.$bindTo($scope, 'queries');

    $scope.queries = $firebase(ref);
    $scope.deleteQuery = function(id) {
      $scope.queries.remove(id);
    };

    }]);

  controllers.controller('ManageAcctController', function() {
    //manage acct contents
  });
};
