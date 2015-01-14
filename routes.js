'use strict';

var QuerySet = require('./models/querySet.js');
var QueryPoint = require('./models/queryPoint.js');
var async = require('async');

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
    var newQueryPoint = new QueryPoint();
    var returnData;
    async.series([
      function writeReq() {
        console.log(req.body);
      },
      function assignProps() {
        traverse(req.body);
        function traverse(jsonObj) {
          if( typeof jsonObj == "object" ) {
            $.each(jsonObj, function(k,v) {
                // k is either an array index or object key
                traverse(v);
            });
          }
          else {
            // jsonOb is a number or string
            newQueryPoint[k] = v;
          }
        }
      },
      function writePoint() {
        console.dir(newQueryPoint);
      },
      function saveItem() {
        newQueryPoint.save(function(err, data) {
          if (err) return res.status(500).send('error saving query point to database');
          returnData = data;
        });
      }
    ]);
    return res.json(returnData);
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
