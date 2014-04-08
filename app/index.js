angular.module('boilerplate', [
    'boilerplate.overview'
  ])
  .config(['$httpProvider', '$routeProvider'], function ($httpProvider, $routeProvider) {

    $httpProvider.defaults.useXDomain = true;
    $httpProvider.defaults.headers.put['Content-Type'] = 'application/x-www-form-urlencoded';
    $httpProvider.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
    delete $httpProvider.defaults.headers.common['X-Requested-With'];

    $routeProvider
      .when('/overview', {
        templateUrl: 'overview/overview.html',
        controller: 'overview/overview.ctrl.js'
      })
      .otherwise({
        redirectTo: '/overview'
      });

  });
