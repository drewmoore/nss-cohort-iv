/* exported Person */

var Person = (function(){

  'use strict';

  function Person(name, cash){
    this.name = name;
    this.cash = cash;
  
  }

  Person.prototype.addCart = function(cart){
    this.cart = cart;
  };

  Person.prototype.checkOut = function(){
    var receipt;

    if((this.cash - this.cart.total) >= 0){
      receipt = _.map(this.cart.products, function(product){
        return product.name;
      });
      receipt = receipt.join(', ');
      this.cash -= this.cart.total;
      this.cart.products = [];
    }
    return receipt;
  };

  return Person;
})();
