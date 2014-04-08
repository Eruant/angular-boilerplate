(function () {
  'use strict';

  angular.module('boilerplate.home').controller('homeCtrl', ['$scope', function ($scope) {
    $scope.test = 'This is the home controller';
    console.log('scope test', $scope.test);
  }]);

}());
