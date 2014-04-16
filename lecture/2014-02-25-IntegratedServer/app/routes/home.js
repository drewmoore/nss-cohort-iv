'use strict';

var _ = require('lodash');

exports.index = function(req, res){
  res.render('home/index', {title: 'Express Template'});
};

exports.calc = function(req, res){
  res.render('home/calc', {title: 'Calculator'});
};

exports.add = function(req, res){
  var sum = parseFloat(req.query.x) + parseFloat(req.query.y);
  console.log('exports.add', req.query, sum);
  res.send({sum: sum});
};

exports.multiply = function(req, res){
  var numbers = req.query.numbers.split(',');
  var product = _.reduce(numbers, function(acc, x){return acc * x;}, 1);
  console.log('exports.multiply: ', numbers, product);
  res.send({product:product});

};
