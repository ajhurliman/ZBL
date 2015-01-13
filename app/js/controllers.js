'use strict';

/* Controllers */

module.exports = function(controllers) {
  controllers.controller('AddQueryController', ['$scope', '$http', function($scope, $http) {

    $scope.addQuery = function() {
      var newQuery = {apiUrl: $scope.newApiUrl, name: $scope.newName};
      $http.post('/api/newQuerySet', newQuery)
      .success(function(data, status, headers, config) {
        console.log('success: ' + data);
      })
      .error(function(data, status, headers, config) {
        console.log('fail: ' + data);
      });
      $scope.newApiUrl = '';
      $scope.newName = '';
    };
  }]);

  controllers.controller('ManageQueryController', ['$scope', '$http', '$route', '$location', 'ViewFactory', function($scope, $http, $route, $location, ViewFactory) {
    $http.get('/api/querySets')
    .success(function(data, status, headers, config) {
      $scope.queries = data;
    });

    $scope.deleteQuery = function(id) {
      $http.delete('/api/querySets/' + id)
      .success(function(data, status, headers, config) {
        console.log('successful deletion!');
      })
      .error(function(data, status, headers, config) {
        console.log('failed to delete!');
      });

      $route.reload();
    };

    $scope.viewQuery = function(id) {
      $http.get('/api/queryPoints/' + id)
      .success(function(data, status, headers, config) {
        ViewFactory.setQueryPoints(data);
      });
      return $location.path('/preview');
    }

    $scope.addPoint = function(querySet) {
      var newPoint = {
        querySetId: querySet._id
      }
      $http.get(querySet.apiUrl)
      .success(function(data, status, headers, config) {
        console.log('return data');
        console.dir(data);
        for (var prop in data) {
          newPoint[prop] = data[prop];
        }
      });

      $http.post('/api/newQueryPoint', newPoint)
      .success(function(data, status, headers, config) {
        console.log('success: ' + data);
      })
      .error(function(data, status, headers, config) {
        console.log('fail: ' + data);
      });
    }

    }]);

  controllers.controller('ManageAcctController', function() {
    //manage acct contents
  });

  controllers.controller('PreviewController', ['$scope', 'ViewFactory', function($scope, ViewFactory) {
    //manage preview
    $scope.queryPoints = ViewFactory.getQueryPoints();
  }]);
};
