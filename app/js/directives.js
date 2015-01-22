'use strict';

module.exports = function(directives) {
  directives.directive('manageQueryDirective', function() {
    return {
      restrict: 'EAC',
      templateUrl: 'partials/manage-query-directive.html'
    };
  });
};
