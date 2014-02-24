'use strict';

var _ = require('./../../node_modules/lodash/lodash');

exports.greeting = function(req, res){
  var obj = {};
  obj.greeting = 'What up, yo?';

  res.send(obj);
};

exports.add = function(req, res){
  var obj = {};
  var x = parseFloat(req.params.x);
  var y = parseFloat(req.params.y);
  var z = x + y;

  obj.sum = z;
  res.send(obj);
};

exports.volume = function(req, res){
  var obj = {};
  var x = parseFloat(req.params.x);
  var y = parseFloat(req.params.y);
  var z = parseFloat(req.params.z);
  var volume = x * y * z;

  obj.volume = volume;
  res.send(obj);
};

exports.min = function(req, res){
  var obj = {};
  var a = parseFloat(req.params.a);
  var b = parseFloat(req.params.b);
  var c = parseFloat(req.params.c);
  var d = parseFloat(req.params.d);
  var min = Math.min(a, b, c, d);

  obj.min = min;
  res.send(obj);
};

exports.max = function(req, res){
  var obj = {};
  var a = parseFloat(req.params.a);
  var b = parseFloat(req.params.b);
  var c = parseFloat(req.params.c);
  var d = parseFloat(req.params.d);
  var max = Math.max(a, b, c, d);

  obj.max = max;
  res.send(obj);
};

exports.sumArray = function(req, res){
  var obj = {};
  var x = parseFloat(req.params.x);
  var y = parseFloat(req.params.y);
  var array = _.range(x, y+1);
  var sum = 0;

  _.each(array, function(num){sum += num;});

  obj.sum = sum;
  res.send(obj);

};

exports.welcome = function(req, res){
  res.send({greeting: ('Welcome, ' + req.query.first +' '+ req.query.last)});
};

exports.createArray = function(req, res){
  var obj = {};
  var start = parseFloat(req.params.start);
  var stop = parseFloat(req.params.stop);
  var step = parseFloat(req.params.step);
  var array = _.range(start, stop + 1, step);
  var total;

  if(req.query.task === 'sum'){
    total = 0;
    _.each(array, function(num){
      total += num;
    });
  }

  if(req.query.task === 'product'){
    total = 1;
    _.each(array, function(num){
      total *= num;
    });
  }

  obj.result = total;

  res.send(obj);
};
