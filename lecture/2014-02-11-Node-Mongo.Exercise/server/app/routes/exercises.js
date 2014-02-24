'use strict';

var MongoClient = require('mongodb').MongoClient;
var Exercise = require('../models/exercise');

exports.create = function(req, res){
  MongoClient.connect('mongodb://localhost/gym', function(err, db){
    if(err){throw err;}
    console.log('Connected to Database, yo!');
    var exercise = new Exercise(req.body.name, parseInt(req.body.time), parseInt(req.body.calories), req.body.date);
    
    db.collection('exercises').insert(exercise, function(err, exercises){
      res.send(exercises[0]);
    });
  });
};

