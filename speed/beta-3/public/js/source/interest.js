/* exported interest  */

'use strict';

function interest(principle, rate, time){

  return Math.round(principle * (rate/100) * (time/365));

}
