var chai = require('chai');
var webdriver = require('selenium-webdriver');

describe('Test ZBL pages', function() {
  it('should load add query page', function(done) {
    var driver = new webdriver.Builder().
    withCapabilities(webdriver.Capabilities.chrome()).
    build();

    driver.get('http://www.google.com');
    var searchBox = driver.findElement(webdriver.By.name('q'))
    searchBox.sendKeys('simple programmer');
    searchBox.getAttribute('value').then(function(value) {
      expect(value).to.eql('simple programmer');
      driver.quit();
      done();
    });
    // driver.findElement(webdriver.By.name('btnG')).click();
    // driver.quit();
  });

}


