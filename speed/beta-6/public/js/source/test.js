/* global test:false, deepEqual:false, rotateLeft:false, sumMultiple:false, sumFibb:false, mix:false, sortIt:false */

'use strict';

test('rotate left', function(){
  deepEqual(rotateLeft([3,5,7]), ([5,7,3]), 'rotate left');

});

test('sum Multiple', function(){
  deepEqual(sumMultiple(1000), 233168, 'sum Multiple should work');
});

test('fibbonacci', function(){
  deepEqual(sumFibb(5), 20, 'fibbonacci should work');
});

/*
test('sum prime factors', function(){
  deepEqual(sumPrime(12), 7, 'sum prime factors should work');
});
*/

test('mix stuff', function(){
  var letters = ['A', 'B', 'C', 'D'];
  var numbers = [2, 4, 6, 8];

  deepEqual(mix(letters, numbers),['A',2, 'B', 4, 'C', 6, 'D', 8],'the stuff should be mixed');
});

/*
test('replace the zero', function(){
  var array = [0,2,3,0,5,2,0,7,9];

  deepEqual(replaceZero(array), [3,2,3,5,5,2,9,7,9], 'replace Zero should work');
});
*/

test('sortIt', function(){
  var oldArray = [7,2,6,5,4,9];

  deepEqual(sortIt(oldArray), [2,4,6,5,7,9],'sort stuff should work');
});
