'use strict';

var chai = require('chai');
var chaiHttp = require('chai-http');
var mongoose = require('mongoose');
var expect = chai.expect;
var url = 'http://localhost:3000';
var testQuerySetId;

chai.use(chaiHttp);

require('../../server');

describe('query sets', function() {
  before(function() {

    // mongoose.connection.collections.querySets.drop(function(err) {
    //   if (err) {console.log(err)}
    // });
    // mongoose.connection.collections.queryPoints.drop(function(err) {
    //   if (err) {console.log(err)}
    // });
  });

  it('should create a new query set', function(done) {
    var querySetObj = {apiUrl: "www.example.com", name:"new query"}
    chai.request(url)
    .post('/api/newQuerySet')
    .send(querySetObj)
    .end(function(err, res) {
      testQuerySetId = res.body._id;
      expect(err).to.be.null;
      expect(res.body.name).to.eql('new query');
      done();
    });
  });

  it('should create a new query point', function(done) {
    var queryPointObj = {
      querySetId: testQuerySetId,
      creation: new Date(),
      salesRank: 1,
      category: 'test category',
      qtyInStock: 2,
      numReviews: 3,
      reviewScore: 4,
      isPrime: 'prime'
    };
    chai.request(url)
    .post('/api/newQueryPoint')
    .send(queryPointObj)
    .end(function(err, res) {
      expect(err).to.be.null;
      expect(res.body.salesRank).to.eql(1);
      done();
    });
  });

  it('should get a list of all query sets', function(done) {
    chai.request(url)
    .get('/api/querySets')
    .end(function(err, res) {
      expect(err).to.be.null;
      expect(Array.isArray(res.body)).to.eql(true);
      done();
    });
  });

  it('should get all the query points from a set', function(done) {
    chai.request(url)
    .get('/api/queryPoints/' + testQuerySetId)
    .end(function(err, res) {
      expect(err).to.be.null;
      expect(Array.isArray(res.body)).to.eql(true);
      console.dir(res.body);
      done();
    });
  });

});
