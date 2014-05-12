angular.module('Home', [
  'ngRoute'
])

  .config(['$routeProvider', function ($routeProvider) {
    $routeProvider.when('/', {
      controller: 'HomeCtrl',
      templateUrl: 'home/home.html'
    });
  }])

  .controller('HomeCtrl', ['$scope', function ($scope) {
    $scope.test = 'a test';
  }]);
