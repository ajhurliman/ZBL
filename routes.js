'use strict';

var QuerySet = require('./models/querySet.js');
var QueryPoint = require('./models/queryPoint.js');

module.exports = function(app, mongoose) {

  //initiate QuerySet
  //pre: apiUrl and name of new Query set attached to req.body
  //post: a new QuerySet is saved into db
  app.post('/api/newQuerySet', function(req, res) {
    var newQuerySet = new QuerySet();
    newQuerySet.apiUrl = req.body.apiUrl;
    newQuerySet.name = req.body.name;
    newQuerySet.save(function(err, data) {
      if (err) return res.status(500).send('error saving querySet to database');
      return res.json(data);
    });
  });

  //add new QueryPoint
  //pre: dataPoints sent in on req.body
  //post: a new QueryPoint is pushed into its respective parents' array
  app.post('/api/newQueryPoint', function(req, res) {
    //create queryPoint
    var newQueryPoint = new QueryPoint();
    for (var prop in req.body) {
      newQueryPoint[prop] = req.body[prop];
    }
    console.log('req.body: \n');
    console.dir(req.body);
    console.log('\n \n newQueryPoint: \n');
    console.dir(newQueryPoint);


    //save queryPoint to db
    newQueryPoint.save(function(err, data) {
      if (err) return res.status(500).send('error saving query point to database');
      return res.json(data);
    });
  });

  //get a list of all query sets
  app.get('/api/querySets', function(req, res) {
    QuerySet.find({}, function(err, data) {
      if (err) return res.status(500).send('error finding query sets');
      return res.json(data);
    });
  });

  app.delete('/api/querySets/:id', function(req, res) {
    QuerySet.remove({_id: req.params.id}, function(err, data) {
      if (err) return res.status(500).send('error deleting query set');
      return res.json(data);
    });
  });

  //get a list of QueryPoints from one QuerySet
  app.get('/api/queryPoints/:querySetId', function(req, res) {
    QueryPoint.find({querySetId: req.params.querySetId}, function(err, data) {
      if (err) return res.status(500).send('error finding query points');
      return res.json(data);
    });
  });


};
