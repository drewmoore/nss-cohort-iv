'use strict';

var Gadget = require('../models/gadget');

exports.create = function(req, res){
  var db = global.mdb;
  var gadgets = db.collection('gadgets');
  var info = req.body;

  gadgets.find({name:req.body.name}).toArray(function(err, records){
    doesItExist(records);
  });

  function doesItExist(records){
    if(records.length === 0){
      for(var i=0; i<info.quantity; i++){
        var gadget = new Gadget(info);

        gadgets.insert(gadget, function(err, records){
          res.send(records[0]);
        });
      }

      console.log('record not there', records);
    } else {
      info.price = records[0].price;
      for(var i=0; i<info.quantity; i++){
        var gadget = new Gadget(info);

        gadgets.insert(gadget, function(err, records){
          res.send(records[0]);
        });
      }
    }
  }
};

exports.index = function(req, res){
  var db = global.mdb;
  var gadgets = db.collection('gadgets');

  gadgets.find().toArray(function(err, records){
    res.send({gadgets:records});
  });
};

exports.quantity = function(req, res){
  var db = global.mdb;
  var gadgets = db.collection('gadgets');

  gadgets.find({name:req.params.name}).toArray(function(err, records){
    res.send(records);
  });
};
