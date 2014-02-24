'use strict';

module.exports = function(user){
  this.name = user.username || '';
  this.balance = parseFloat(user.deposit) || 0;
  this.purchases = [];

};
