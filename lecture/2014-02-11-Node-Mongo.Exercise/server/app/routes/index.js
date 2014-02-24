'use strict';

var MongoClient = require('mongodb').MongoClient;

exports.index = function(req, res){
  MongoClient.connect('mongodb://localhost/gym', function(err, db){
    if(err){throw err;}
    console.log('Connected to Database, yo!');
    
    db.collection('exercises').find().toArray(function(err, exercises){
      res.send({exercises:exercises});
    });
  });
};

exports.queryName = function(req, res){
  MongoClient.connect('mongodb://localhost/gym', function(err, db){
    if(err){throw err;}
    console.log('Connected to the database, yo!');
    var query = {};
    query.name = req.params.name;
    
    db.collection('exercises').find(query).toArray(function(err, exercises){
      res.send({exercises:exercises});
    });
  });


};
