'use strict';

var Dog = require('./../models/dog');

exports.create = function(req, res){
  var d1 = new Dog(req.body.name, req.body.age, req.body.gender);

  res.send(d1);
};
