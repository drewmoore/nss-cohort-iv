'use strict';

var d = require('../lib/request-debug');
var albums = require('../routes/albums');
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
  app.get('/albums/new', d, albums.new);
  app.post('/albums', d, albums.create);
  console.log('Routes Loaded');
  fn();
}
