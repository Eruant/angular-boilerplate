angular.module('Home', function () {})

  .controller('HomeCtrl', ['$scope', function ($scope) {
    console.log('Loaded home controller');
    $scope.test = 'a test';
  }]);
