'use strict';

var _ = require('lodash');

exports.product = function(req, res){
  var numbers = req.query.numbers.split(', ');
  var prod = _.reduce(numbers, function(acc, num){return acc*num;}, 1);
  res.jsonp({product:prod});
};

exports.names = function(req, res){
  var namesIn = req.query.x.split(',');

  res.jsonp({namesIn:namesIn});
};
