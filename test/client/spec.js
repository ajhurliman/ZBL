var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/zblDev');
mongoose.connection.collections['querysets'].drop(function(err) {
  if (err) throw err;
  console.log('collection dropped');
});

describe('angularjs test', function() {
  var apiUrlInput = element(by.model('newApiUrl'));
  var newNameInput = element(by.model('newName'));
  var addQueryBtn = element(by.id('addQueryBtn'));
  var manageQueriesBtn = element(by.buttonText('Manage Queries'));
  // var latestResult = element(by.binding('latest'));
  // var history = element.all(by.repeater('result in memory'));

  function addQuery(a, b) {
    apiUrlInput.sendKeys('https://www.kimonolabs.com/api/asmpbme8?apikey=WsyckNRjMTAqCPdYCkxImCwX2jSN0sk8&kimseries=1');
    newNameInput.sendKeys('sample api');
    addQueryBtn.click();
  }

  beforeEach(function() {
    browser.get('http://www.sandbox.com');
  });

  it('should have a title', function() {
    expect(browser.getTitle()).toEqual('Zapp Bug Logger');
  });

  it('should add a query', function() {

  });

  // it('should have a history', function() {
  //   add(1, 2);
  //   add(3, 4);

  //   expect(history.count()).toEqual(2);

  //   add(5, 6);

  //   expect(history.count()).toEqual(3);
  // });



  // it('should add one and two', function() {
  //   add(1, 2);

  //   expect(latestResult.getText()).toEqual('3');
  // });

  // it('should add 4 and 6', function() {
  //   add(4, 6);

  //   expect(latestResult.getText()).toEqual('10');
  // });
});
