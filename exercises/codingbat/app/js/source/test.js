/* global test:false, ok:false, deepEqual:false, monkeyTrouble:false, cigarParty:false, dateFashion:false, squirrelPlay:false, makeBricks:false, loneSum:false */

'use strict';

console.log(ok);

test('monkey trouble', function(){
  deepEqual(monkeyTrouble(true, true), true, 'monkey trouble should work.');
  deepEqual(monkeyTrouble(false, false), true, 'monkey trouble should work.');
  deepEqual(monkeyTrouble(true, false), false, 'monkey trouble should work.');
  deepEqual(monkeyTrouble(false, true), false, 'monkey trouble should work.');

});

test('cigar party', function(){
  deepEqual(cigarParty(30, false), false, 'should be false.');
  deepEqual(cigarParty(50, false), true, 'should be true.');
  deepEqual(cigarParty(70, true), true, 'should be true.');
});

test('date fashion', function(){
  deepEqual(dateFashion(5, 10), 2,'should be 2');
  deepEqual(dateFashion(5, 2), 0,'should be 0');
  deepEqual(dateFashion(5, 5), 1,'should be 1');
});

test('squirrel play', function(){
  deepEqual(squirrelPlay(70, false), true,'should be true');
  deepEqual(squirrelPlay(95, false), false,'should be false');
  deepEqual(squirrelPlay(95, true), true,'should be true');
});

test('make bricks', function(){
  deepEqual(makeBricks(3, 1, 8), true,'should be true');
  deepEqual(makeBricks(3, 1, 9), false,'should be false');
  deepEqual(makeBricks(3, 2, 10), true,'should be true');
});

test('lone Sum', function(){
  deepEqual(loneSum(1, 2, 3), 6,'1, 2, 3');
  deepEqual(loneSum(3, 2, 3), 2,'3, 2, 3');
  deepEqual(loneSum(3, 3, 3), 0,'3, 3, 3');
});
