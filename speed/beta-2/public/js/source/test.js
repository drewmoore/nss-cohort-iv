/* global test:false, ok:false, average:false, variance:false */

'use strict';

test('template test', function(){
  ok(1 === 1, 'test');
  ok(average([2,3,2]) === 2, 'average');
  ok(variance([2,3,2]) === 1, 'variance');

});

