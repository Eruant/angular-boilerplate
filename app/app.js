angular.module('app', [
  'ngRoute',
  'Home'
])

  .value('version', '0.1')

  .config(['$routeProvider', function ($routeProvider) {

    $routeProvider.when('/', {
      templateUrl: './home/home.html',
      controller: 'HomeCtrl'
    });

    $routeProvider.otherwise({
      redirectTo: '/'
    });

  }]);
