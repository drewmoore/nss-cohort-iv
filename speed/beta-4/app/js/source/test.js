/* global test:false, ok:false, nearHundred:false */

'use strict';

test('near Hundred', function(){
  ok( nearHundred(89) === false, 'near Hundred should work');
  ok( nearHundred(90) === true, 'near Hundred should work');
  ok( nearHundred(99) === true, 'near Hundred should work');
  ok( nearHundred(109) === true, 'near Hundred should work');
  ok( nearHundred(110) === true, 'near Hundred should work');
  ok( nearHundred(111) === false, 'near Hundred should work');
  ok( nearHundred(190) === true, 'near Hundred should work');
  ok( nearHundred(189) === false, 'near Hundred should work');
  ok( nearHundred(210) === true, 'near Hundred should work');

});

