'use strict';

var Person = require('../models/person');

exports.create = function(req, res){
  var p1 = new Person(req.body);
  //var canDrink = p1.canDrink();

  p1.save(function(record){
    res.send(record);
  });

  //res.send({name: p1.name, canDrink: canDrink});
};

exports.find = function(req, res){
  var db = global.mdb;
  var people = db.collection('people');

  console.log(req.body);

  people.find({name: req.body.name}).toArray(function(err, records){
    console.log(records);
    
    res.send(records);
  });
};

exports.update = function(req, res){
  var db = global.mdb;
  var people = db.collection('people');

  console.log('exports.update body name', req.body.age);

  people.findAndModify({name: req.params.name}, {$set: {age: req.body.age}}, function(err, object){
    res.send(object);
  });

};

exports.delete = function(req, res){
  var db = global.mdb;
  var people = db.collection('people');

  console.log(req.body);

  people.findAndRemove({name: req.body.name}, function(err, record){
    res.send(record);
  });
};
