$(document).ready(initialize);

function initialize(){
  $('#answer').text('0');
  $('.numbers').click(displayNumber);
  var needsZero = 0;
  
}

function displayNumber(){
  var display = $('#answer').text(); // what's already there in the #answer box
  var current = this.value; // the value of 'this' which should be coming in from the clicked button
  var output;  // new stuff going into the #answer box

  if(current === '.' && display.indexOf('.') !== -1) return;  // saying if there's already a '.', then ignore the '.' button

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



