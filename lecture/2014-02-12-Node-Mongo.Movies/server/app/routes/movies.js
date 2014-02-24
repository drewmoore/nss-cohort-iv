'use strict';

var Movie = require('../models/movie');
var mongodb = require('mongodb');

exports.create = function(req, res){
  var db = req.app.locals.db;
  var movies = db.collection('movies');
  var movie = new Movie(req.body);
  movies.insert(movie, function(err, records){
    res.send(records[0]);
  });
};

exports.index = function(req, res){
  var db = req.app.locals.db;
  var movies = db.collection('movies');
  movies.find().toArray(function(err, records){
    res.send({movies:records});
  });
};

exports.query = function(req, res){
  var db = req.app.locals.db;
  var movies = db.collection('movies');
  movies.find(req.query).toArray(function(err, records){
    res.send({movies:records});
  });
};

exports.find = function(req, res){
  var db = req.app.locals.db;
  var movies = db.collection('movies');
  var id = mongodb.ObjectID(req.params.id);
  var query = {_id : id};

  console.log('find function called');
  console.log(query);

  movies.find(query).toArray(function(err, records){
    res.send({movies:records});
  });
};

exports.edit = function(req, res){
  var db = req.app.locals.db;
  var movies = db.collection('movies');
  var id = mongodb.ObjectID(req.params.id);
  var query = {_id : id};
  var movie = new Movie(req.body);

  movies.update(query, movie, function(err, count){
    res.send({id:id, count:count, movie:movie});
  });

};

exports.delete = function(req, res){
  var db = req.app.locals.db;
  var movies = db.collection('movies');
  var id = mongodb.ObjectID(req.params.id);
  var query = {_id : id};
  
  movies.remove(query, function(err, count){
    res.send({deleted:count, id:req.params.id});
  });
};

