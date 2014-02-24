'use strict';

var mongodb = require('mongodb');

var Song = function(song){
  this.name = song.name;
  this.artist = song.artist;
};

Song.index = function(callback){
  var db = global.mdb;
  var songs = db.collection('songs');

  songs.find().toArray(function(err, records){
    callback(records);
  });
};

Song.findByName = function(artist, callback){
  var db = global.mdb;
  var songs = db.collection('songs');

  songs.find({artist: artist}).toArray(function(err, records){
    callback(records);
  });
};

Song.edit = function(songId, newInfo, callback){
  var db = global.mdb;
  var songs = db.collection('songs');
  var id = mongodb.ObjectID(songId);

  console.log('Song.edit: id, newInfo: ', id, newInfo);

  songs.save({_id: id, name: newInfo.name, artist: newInfo.artist}, function(err, record){
    console.log('songs.save: record: ', record);
    callback(record);
  });
};

Song.prototype.save = function(callback){
  var db = global.mdb;
  var songs = db.collection('songs');

  songs.insert(this, function(err, records){
    callback(records[0]);
  });

};

Song.remove = function(songId, callback){
  var db = global.mdb;
  var songs = db.collection('songs');
  var id = mongodb.ObjectID(songId);

  songs.remove({_id: id}, function(err, record){
    console.log('songs.remove callback record: ', id, record);

    callback(record);
  });
};

module.exports = Song;
