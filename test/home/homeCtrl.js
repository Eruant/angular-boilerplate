/*globals Home*/

describe('HomeCtrl', function () {

  beforeEach(module('Home'));

  it('should create a value of "test" in the scope', inject(function ($controller) {
    var scope = {},
      ctrl = $controller('HomeCtrl', {
        $scope: scope
      });

    expect(scope.test).toBeDefined();
  }));

});
