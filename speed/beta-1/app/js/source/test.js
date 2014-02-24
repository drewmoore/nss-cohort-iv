/* global test:false, deepEqual:false, square:false, sumOfSquares:false */

'use strict';

test('beta-1', function(){
  var x = 3;

  deepEqual(square(x), 9, 'should equal 9');
  deepEqual(sumOfSquares([1,2,3]), 14, 'should equal 14');
});

