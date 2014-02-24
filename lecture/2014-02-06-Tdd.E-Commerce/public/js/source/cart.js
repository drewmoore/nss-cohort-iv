/* exported Cart */

var Cart = (function(){

  'use strict';

  function Cart(){
    this.products = [];
  }

  Cart.prototype.add = function(product, amount){
    for(var i=0; i<amount; i++){
      this.products.push(product);
    }
  };

  Cart.prototype.remove = function(product, amount){
    var self = this;

    for(var i=0; i<amount; i++){
      deleteStuff();
    }

    function deleteStuff(){
      var toDelete = _.findIndex(self.products, function(input){
        return input === product;
      });
      self.products.splice(toDelete, 1);
    }
  };

  Object.defineProperty(Cart.prototype, 'total', {
    get: function(){
      var self = this;
      var sum = _.reduce(self.products, function(accumulator, product){
        return accumulator + product.price;
      }, 0);

      return Math.round(sum) || 0;
    }
  });

  return Cart;
})();
