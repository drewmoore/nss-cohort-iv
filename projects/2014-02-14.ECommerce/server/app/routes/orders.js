'use strict';

var Order = require('../models/order');
var mongodb = require('mongodb');

//var gadgets = require('gadgets');
var usersClass = require('./users');

/*
var db = global.mdb;
var gadgets = db.collection('gadgets');
var users = db.collection('users');
*/

exports.create = function(req, res){
  var db = global.mdb;
  var orders = db.collection('orders');
  var gadgets = db.collection('gadgets');
  var order = new Order(req.body);
  var users = db.collection('users');

  var gadget = req.body.gadget || 0;
  var user = mongodb.ObjectID(req.body.user || '');
  var quantity = req.body.quantity || 0;
  var totalPrice = 0;
  var quantityAvailable = 0;
  var customerBalance = 0;

  gadgets.find({name:gadget}).toArray(function(err, records){
    console.log('gadgets.find, records', gadget);
    totalPrice = quantity * parseFloat(records[0].price);
    quantityAvailable = records.length;

    users.find({_id:user}).toArray(function(err, records){
      customerBalance = parseFloat(records[0].balance);

      if((quantity <= quantityAvailable) && (customerBalance >= totalPrice)){

        for(var i=0; i<quantity; i++){
          gadgets.findAndRemove({name:gadget}, function(err, gadgetRemoved){
            usersClass.purchase({_id: user, purchase: gadgetRemoved}, function(err, record){
              console.log('users.purchase callback:', record);
            });




            console.log('orders.remove callback', gadget, gadgetRemoved);


          });
        }



        //change customer balance: return new balance
        //
        //add to customer purchases: send objects removed, return array of purchases


        //create object to return to client: gadget, user id, new customer balance, array of purchases



        orders.insert(order, function(err, records){
          res.send(records[0]);
        });
      } else {
        res.send({gadget:'error'});
      }
    });

  });
};

