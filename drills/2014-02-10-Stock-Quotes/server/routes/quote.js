'use strict';

var Stock = require('../lib/stock');

exports.create = function(req, res){
  var quote;

  quote = new Stock(req.query.symbol);


  res.jsonp({quote:quote});

};
