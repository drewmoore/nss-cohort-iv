/* exported average, variance */

'use strict';

function average(x){
  var total = 0;

  for(var i=0; i<x.length; i++){
    total += x[i];
  }

  return Math.round(total / x.length);

}

function variance(x){
  var total = 0;

  for(var i =0; i<x.length; i++){
    total += Math.pow((x[i] - average(x)) ,2);
  }

  return total;

}
