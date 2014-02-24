'use strict';

module.exports = function(gadget){
  this.name = gadget.name;
  this.price = gadget.price;


  /*
  var db = global.mdb;
  var gadgets = db.collection('gadgets');

  gadgets.find({name:gadget.name}).toArray(function(err, records){
    doesItExist(records);
  });

  function doesItExist(records){
    if(records.length === 0){
      gadget.price = gadget.price;
    } else {
      gadget.price = records[0].price;
    }
  }
  */

};
