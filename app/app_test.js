describe('app', function () {

  beforeEach(module('app'));

  it('should redirect you to "/" when no other routes are set', inject(function ($route) {
    expect($route.routes[null].redirectTo).toEqual('/');
  }));

  it('should set the root controller', inject(function ($route) {
    expect($route.routes['/'].controller).toBe('HomeCtrl');
  }));

});
