var app = angular.module('app', [
  'ngRoute',
  'Home'
]);

app.config(['$routeProvider', function ($routeProvider) {

  console.log('In the boilerplate!');

  $routeProvider.when('/', {
    templateUrl: './home/home.html',
    controller: 'HomeCtrl'
  });

  $routeProvider.otherwise({
    redirectTo: '/home'
  });

}]);
