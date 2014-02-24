/* exported monkeyTrouble, cigarParty, dateFashion, squirrelPlay, makeBricks, loneSum */

'use strict';

function monkeyTrouble(aSmile, bSmile){

  return (aSmile === bSmile);

  /* This is a longer version of the solution above:
  if(aSmile === true && bSmile === true){
    return true;
  }
  if(aSmile === false && bSmile === false){
    return true;
  }
  if(aSmile === true && bSmile === false){
    return false;
  }
  if(aSmile === false && bSmile === true){
    return false;
  }
  */

}

function cigarParty(cigars, isWeekend){
  if(isWeekend){
    return true;
  } else {
    return (cigars >= 40 && cigars <= 60);
  }
}

function dateFashion(you, date){
  var result = 1;
  if(you >= 8 || date >=8){
    result = 2;
  }
  if(you <= 2 || date <= 2){
    result = 0;
  }
  return result;
}

function squirrelPlay(temp, isSummer){
  var upperLimit = 90;
  if(isSummer){upperLimit = 100;}

  return (60 <= temp && temp <= upperLimit);
}

function makeBricks(small, big, goal){
  return (small + (big * 5) >= goal);
}

function loneSum(a, b, c){
  var array = [a, b, c];
  var sum = 0;

  for(var i=0; i<array.length; i++){
    if(array[i] === array[i+1]){
      array[i] = 0;
      array[i+1] = 0;
    }
    if(array[i] === array[i-1]){
      array[i] = 0;
      array[i-1] = 0;
    }
    sum += array[i];
  }
  return sum;
}
