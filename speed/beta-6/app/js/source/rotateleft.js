/* exported rotateLeft, sumMultiple, sumFibb, mix, sortIt */

'use strict';

function rotateLeft(x){

  var y = x.shift();
  x.push(y);

  return x;
}

function sumMultiple(x){
  var total = 0;

  for(var i=0; i<x; i++){
    if(i % 3 === 0 || i % 5 === 0){
      total += i;
    }
  }
  return total;
}

function sumFibb(x){
  var numbers = [1];
  var numbersTotal = 0;

  for(var i=1; i<=x; i++){
    if(i===1){
      numbers.push(i);
    
    } else {
      numbers.push(numbers[i-1] + numbers[i-2]);
    }
  }
  for(var y=0; y<numbers.length; y++){
    numbersTotal += numbers[y];
  }
  return numbersTotal;
}

/*
function sumPrime(toFactor){
  var numbers = [];
  var nextNumber = toFactor;

  for(var i=2; i<toFactor; i++){
    if(nextNumber % i === 0){
      nextNumber = nextNumber / i;
      numbers.push(i);
    
    }

  }

}

*/

function mix(letters, numbers){
  var newArray = [];

  for(var i=0; i<letters.length; i++){
    newArray.push(letters[i]);
    newArray.push(numbers[i]);
  }

  return newArray;
}


/*
function replaceZero(array){
  var newArray = [];
  var highest;

  for(var i=0; i<array.length; i++){
    if(array[i]===0){
      for(var x=i+2; x<array.length; x++){
        if(array[x] > array[i+1]){
          highest = array[x];
        }
      }
      newArray[i] = highest;
    } else {
      newArray[i] = array[i];
    }
  }

  return newArray;
}

*/

function sortIt(oldArray){
  var evens = [];
  var odds = [];
  var replace;
  //var leastEven;
  //var leastOdd;
  var newArray = [];

  for(var i=0; i<oldArray.length; i++){
    if(oldArray[i] % 2 === 0){
      evens.push(oldArray[i]);
    } else {
      odds.push(oldArray[i]);
    }
  }

  for(var x=0; x<evens.length; x++){
    if(evens[x] > evens[x+1]){
      replace = evens.splice(evens[x], 1);
      evens.push(replace);
    }

  }
  
  for(var y=0; y<odds.length; y++){
    if(odds[y] > odds[y+1]){
      replace = odds.splice(odds[y], 1);
      odds.push(replace);
    }
  }
  
  newArray = evens.concat(odds);

  return newArray;

}



