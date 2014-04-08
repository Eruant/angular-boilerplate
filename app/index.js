angular.module('boilerplate', [
    'boilerplate.home',
    'ngRoute'
  ])
  .config(['$routeProvider', function ($routeProvider) {

    $routeProvider
      .when('/home', {
        templateUrl: '../home/home.html',
        controller: 'homeCtrl'
      })
      .otherwise({
        redirectTo: '/home'
      });

  }]);
