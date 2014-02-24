/* exported sumOfSquares */
'use strict';

function square(x){
  return x * x;
}

function sumOfSquares(x){
  var total;

  for(var i=0; i<x.length; i++){
    total += square(x[i]);
  
  }

  return total;

}


