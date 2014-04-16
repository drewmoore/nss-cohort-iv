'use strict';

module.exports = Album;

var fs = require('fs');
var path = require('path');
var albums = global.nss.db.collection('albums');
var Mongo = require('mongodb');
//var _ = require('lodash');

function Album(album){
  this.title = album.title;
  this._id = album._id;
  this.cover = album.cover;
  this.taken = new Date(album.taken);
  var difference = this.taken.getTimezoneOffset();
  this.taken.setMinutes(difference);
  this.photos = album.photos || [];
}

Album.prototype.addCover = function(oldpath){
  var dirname = this.title.replace(/\s/g, '').toLowerCase();
  var abspath = __dirname + '/../static';
  var relpath = '/img/' + dirname;
  fs.mkdirSync(abspath + relpath);

  var extension = path.extname(oldpath);
  relpath += '/cover' + extension;
  fs.renameSync(oldpath, abspath + relpath);

  this.cover = relpath;
};

Album.prototype.insert = function(callback){
  albums.insert(this, function(err, records){
    callback(records[0]);
  });
};

Album.prototype.addPhoto = function(oldpath, filename){
  oldpath = path.normalize(oldpath);
  var dirname = this.title.replace(/\s/g, '').toLowerCase();
  var abspath = __dirname + '/../static';
  var relpath = '/img/' + dirname +'/' + filename;

  fs.renameSync(oldpath, abspath + relpath);
  this.photos.push(relpath);
};

Album.prototype.update = function(callback){
  albums.save(this, function(err, recordCount){
    callback(recordCount);
  });
};

Album.findAll = function(callback){
  albums.find().toArray(function(err, records){
    callback(records);
  });
};

Album.findById = function(id, callback){
  var newId = new Mongo.ObjectID(id);
  albums.findOne({_id: newId}, function(err, record){
    callback(record);
  });
};

