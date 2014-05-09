/*globals describe, it, browser, expect*/

describe('Index', function () {

  it('should redirect / to /#/home', function () {
    browser().navigateTo('/');
    console.log(browser().location().url());
    expect(browser().location().url()).toBe('/home');
  });

});
