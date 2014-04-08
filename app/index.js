angular.module('boilerplate', [
    'boilerplate.home',
    'ngRoute'
  ])
  .config(['$routeProvider', function ($routeProvider) {

    $routeProvider
      .when('/', {
        redirectTo: '/home'
      })
      .when('/home', {
        templateUrl: 'home/home.html',
        controller: 'HomeCtrl'
      })
      .otherwise({
        redirectTo: '/home'
      });

  }]);
