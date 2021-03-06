'use strict';

var d = require('../lib/request-debug');
var initialized = false;

module.exports = function(req, res, next){
  if(!initialized){
    initialized = true;
    load(req.app, next);
  }else{
    next();
  }
};

function load(app, fn){
  var home = require('../routes/home');

  app.get('/', d, home.index);
  app.get('/calc', d, home.calc);
  app.get('/calc/add', d, home.add);
  app.get('/calc/multiply', d, home.multiply);
  console.log('Routes Loaded');
  fn();
}

