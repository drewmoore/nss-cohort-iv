'use strict';

var Song = require('../models/song');

exports.create = function(req, res){
  var s1 = new Song(req.body);

  s1.save(function(record){
    res.send(record);
  });
};

exports.index = function(req, res){
  Song.index(function(songs){
    res.send(songs);
  });
};

exports.edit = function(req, res){
  Song.edit(req.params.songId, req.body, function(num){
    res.send({numberChanged: num});
  });
};

exports.remove = function(req, res){
  Song.remove(req.params.songId, function(record){
    res.send({count: record});
  });
};

exports.findByName = function(req, res){
  console.log('exports.findByName called. req.query: ', req.query);
  Song.findByName(req.query.artist, function(records){
    res.send(records);
  });
};

