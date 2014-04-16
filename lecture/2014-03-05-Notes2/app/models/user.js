'use strict';

module.exports = User;
var bcrypt = require('bcrypt');
var users = global.nss.db.collection('users');
var Mongo = require('mongodb');

function User(user){
  this.email = user.email;
  this.password = user.password;
}

User.prototype.hashPassword = function(fn){
  var self = this;

  bcrypt.hash(self.password, 8, function(err, hash){
    self.password = hash;
    fn(err);
  });
};

User.prototype.insert = function(fn){
  var self = this;

  users.findOne({email:self.email}, function(err, record){
    console.log('USERS FINDONE: ', record);
    if(!record){
      users.insert(self, function(err, records){
        fn(records[0]);
      });
    } else {
      fn(err);
    }
  });
};

User.findById = function(id, fn){
  users.findOne({_id: id}, function(record){
    fn(record);
  });
};

User.findByEmailAndPassword = function(email, password, fn){
  users.findOne({email:email, password:password}, function(record){
    fn(record);
  });
});
