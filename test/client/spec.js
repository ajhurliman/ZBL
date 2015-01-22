describe('angularjs test', function() {
  beforeEach(function() {
    browser.get('http://juliemr.github.io/protractor-demo/');
  });

  it('should have a title', function() {
    expect(browser.getTitle()).toEqual('Super Calculator');
  });

  it('should add one and two', function() {
    element(by.model('first')).sendKeys(1);
    element(by.model('second')).sendKeys(2);

    element(by.id('gobutton')).click();

    expect(element(by.binding('latest')).getText()).toEqual('3');
  });

  it('should add 4 and 6', function() {
    element(by.model('first')).sendKeys(4);
    element(by.model('second')).sendKeys(6);
    element(by.id('gobutton')).click();

    expect(element(by.binding('latest')).getText()).toEqual('10');
  });
});
