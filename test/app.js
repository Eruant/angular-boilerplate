
describe('app', function () {

  beforeEach(angular.mock.module('app'));

  it('should exist', function () {
    expect(app).toBeDefined();
  });

  inject(function ($route) {
    
    it('should redirect you to "/" when no other routes are set', function () {
      expect($route.routes[null].redirectTo).toEqual('/');
    });

    it('should set the root controller', function () {
      expect($route.routes['/'].controller).toBe('HomeCtrl');
    });


  });

});
