(function(){
  'use strict';

  $(document).ready(init);

  var timer;

  function init(){
    $('#grow').click(makeGrow);
  
  }

  function makeGrow(){
    var delay = $('#delay-box').val() * 1000;

    clearInterval(timer);
    timer = setInterval(growth, delay);
  
  }

  function growth(){
    var exponent = ($('#exponent-box').val() * 1);
    var $newLi = $('<li>');
    var oldValue = $('li')[$('li').length - 1].innerHTML;
    var newValue;

    newValue = Math.pow(oldValue, exponent);

    $newLi.text(newValue);
    
    console.log(oldValue);

    $('#container ul').append($newLi);

  
  }




})();
