/* global test:false, ok:false, deepEqual:false, Product:false, Person:false, Cart:false */

'use strict';

test('Product#basics', function(){
  var p1 = new Product('CD player', 30);

  ok(p1 instanceof Product, '1 should equal 1');
  deepEqual(p1.name, 'CD player', 'p1 should have the name CD player.');
  deepEqual(p1.price, 30, 'p1 should have the price 30.');

});

test('Person#basics', function(){
  var r1 = new Person('Bob', 500);

  ok(r1 instanceof Person, 'person r1 should exist');
  deepEqual(r1.name, 'Bob', 'r1 should have the name Bob.');
  deepEqual(r1.cash, 500, 'r1 should have 500 in cash.');
});

test('Cart#basics', function(){
  var c1 = new Cart();

  ok(c1 instanceof Cart, 'c1 should exist.');
});

test('Person#addCart', function(){
  var r1 = new Person('Bob', 500);
  var c1 = new Cart();

  r1.addCart(c1);

  deepEqual(r1.cart, c1, 'r1 should have a shopping cart that is c1');
});

test('Cart#add', function(){
  var c1 = new Cart();
  var p1 = new Product('CD player', 30);
  var p2 = new Product('something', 13);
  var r1 = new Person('Bob', 500);

  r1.addCart(c1);
  c1.add(p1, 5);
  c1.add(p2, 1);

  var numberCdPlayers = _.filter(r1.cart.products, function(product){
    return product.name === 'CD player';
  });

  deepEqual(r1.cart.products.length, 6, 'the cart should have 6 products inside');
  deepEqual(r1.cart.products[0].name, 'CD player', 'the product in the persons cart should be a cd player');
  deepEqual(numberCdPlayers.length, 5, 'there should be 5 cd players in the cart');
});

test('Cart#remove', function(){
  var c1 = new Cart();
  var p1 = new Product('CD player', 30);
  var p2 = new Product('something', 13);
  var r1 = new Person('Bob', 500);

  r1.addCart(c1);
  c1.add(p1, 5);
  c1.add(p2, 1);

  r1.cart.remove(p1, 2);

  var numberCdPlayers = _.filter(r1.cart.products, function(product){
    return product.name === 'CD player';
  });

  deepEqual(r1.cart.products.length, 4, 'the cart should have 4 products remaining inside');
  deepEqual(numberCdPlayers.length, 3, 'there should be 3 cd players remaining in the cart');
});

test('Cart#total', function(){
  var c1 = new Cart();
  var p1 = new Product('CD player', 30);
  var p2 = new Product('something', 13);
  var r1 = new Person('Bob', 500);

  r1.addCart(c1);
  r1.cart.add(p1, 1);
  r1.cart.add(p2, 1);

  deepEqual(r1.cart.products.length, 2, 'the cart should have 2 products');
  deepEqual(r1.cart.total, 43, 'the products in the cart should together cost 43');
});

test('Person#checkOut', function(){
  var r1 = new Person('Bob', 500);
  var p1 = new Product('Banana', 5.50);
  var p2 = new Product('Tomato', 3.30);
  var c1 = new Cart();

  r1.addCart(c1);
  r1.cart.add(p1, 2);
  r1.cart.add(p2, 3);
  var receipt = r1.checkOut();

  deepEqual(r1.cash, 479, 'less cash');
  deepEqual(r1.cart.total, 0, 'nothing in cart');
  deepEqual(receipt, 'Banana, Banana, Tomato, Tomato, Tomato', 'my receipt');
});
