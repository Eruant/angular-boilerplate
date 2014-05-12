angular.module('app', [
  'ngRoute',
  'Home'
])

  .config(['$routeProvider', function ($routeProvider) {

    $routeProvider.otherwise({
      redirectTo: '/'
    });

  }]);
