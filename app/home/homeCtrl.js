(function () {
  'use strict';

  angular.module('boilerplate.home').controller('HomeCtrl', ['$scope', function ($scope) {
    console.log('HERE');
    $scope.test = 'a test';
  }]);

}());
