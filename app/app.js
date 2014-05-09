var app = angular.module('app', [
  'ngRoute',
  'Home'
]);

app.config(['$routeProvider', function ($routeProvider) {

  $routeProvider.when('/', {
    templateUrl: './home/home.html',
    controller: 'HomeCtrl'
  });

  $routeProvider.otherwise({
    redirectTo: '/'
  });

}]);
