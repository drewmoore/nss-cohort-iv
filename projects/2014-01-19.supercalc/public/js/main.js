$(document).ready(initialize);

function initialize(){
  $('#answer').text('0');
  $('.numbers').click(displayNumber);
  $('#plusMinus').click(changeSign);
  $('#push').click(pushToQueue);
  $('.operator').click(compute);
  
}

function compute(){
  var operator = this.id;                 // what's coming in from the operator buttons
  var $lis = $('#queue li');

  // can redo a lot of this shit through our new parseTags function, as found in logic.js
  var a = parseFloat($lis[0].textContent);
  var b = parseFloat($lis[1].textContent);

  switch(operator){
    case 'add':
      var numbers = parseTags($lis);
      var sum = numbers[0] + numbers[1];
      $('#answer').text(sum);
      $('#queue').empty();

      break;
    case 'sub':
      var minus = b - a;
      $('#answer').text(minus);
      $('#queue').empty();
      //some stuff
      break;
    case 'mul':
      var product = a * b;
      $('#answer').text(product);
      $('#queue').empty();
      //some stuff
      break;
    case 'div':
      var dividend = b / a;
      $('#answer').text(dividend);
      $('#queue').empty();
      //some stuff
      break;
    case 'pow':
      var exponential = Math.pow(a, b);
      $('#answer').text(exponential);
      $('#queue').empty();
      //some stuff
      break;
    case 'sum':
      var stuffToSum = parseFloat($lis.textContent);
      var grandTotal = 0;
      for(i=0; i<stuffToSum.length; i++){
        grandTotal += stuffToSum[i];
      
      }
      $('#answer').text(grandTotal);
      $('#queue').empty();
      
      
      // $stuffToSum.each(function(index){
      //
      // });


      //some stuff
  
  }

}

function pushToQueue(){
  var display = $('#answer').text();
  $('#answer').text('0');
  var $li = $('<li>');
  $li.text(display);
  $('#queue').prepend($li);

}

function displayNumber(){
  var display = $('#answer').text(); // what's already there in the #answer box
  var current = this.value; // the value of 'this' which should be coming in from the clicked button
  var output;  // new stuff going into the #answer box

  if(current === '.' && containsChar(display, '.')) return;  // saying if there's already a '.', then ignore the '.' button

  if(display === '0' && current !== '.') //saying that if user hits '.' button first, just leave the zero in #answer
    output = current;                   
  else
    output = display + current;         //saying that if they press anything else first, add what's there to what's coming in

  $('#answer').text(output);            //send 'output' to #answer box

  
  
  /*
  if (display ==="0" && current==="."){
    output = display;
  }
  if(display === "0"){
    if (current==="."){
      output = display;
    }
    else {
      if(needsZero = 1){
        output = "0." + output;
      }
      else {

      output = current;
      } 
    }
  else {
    if(current === "." && display.indexOf('.') !== -1){
      output = display;
    }
    else {
    output = display + current;
    }
  }
*/
  $('#answer').text(output);
}

function changeSign(){
  var number = $('#answer').text();
  number *= -1;
  $('#answer').text(number);
}


