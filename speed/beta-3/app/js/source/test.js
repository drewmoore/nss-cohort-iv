/* global test:false, ok:false, interest:false */

'use strict';

test('interest', function(){
  ok(interest(890, 12.5, 261) === Math.round(79.55), 'interest should equal 79.55');
});

