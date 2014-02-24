'use strict';

var User = require('../models/user');
//var mongodb = require('mongodb');

console.log('users called');

exports.create = function(req, res){
  var db = global.mdb;
  var users = db.collection('users');
  var user = new User(req.body);


  users.insert(user, function(err, records){
    res.send(records[0]);
  });
};

exports.purchase = function(req, res){
  var db = global.mdb;
  var users = db.collection('users');

  users.findOne({_id: req._id}, function(err, user){

    users.update({_id:user._id}, {$push: {purchases: req.purchase}}, function(err, records){

      users.findOne({_id: req._id}, function(err, user){
        console.log('users.findOne purchase array:', user.purchases);

        var newBalance = user.balance - req.purchase.price;
        console.log('new balance:', newBalance);

        res.send(user);

        /*
        users.update({_id: user._id}, {balance: newBalance}, function(err, user){
       //change user balance 
        });
        */

      });


    });

  });

};

exports.index = function(req, res){
  var db = global.mdb;
  var users = db.collection('users');

  users.find().toArray(function(err, records){
    res.send({users:records});
  });
};

