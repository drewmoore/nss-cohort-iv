(function(){

  'use strict';

  $(document).ready(init);

  function init(){
    $('#add-color').click(addToMenu);

    $('#sb').change(changeColor);
  
  
  }

  function addToMenu(){
    var colorEntered = $('#text-box').val();
    var newOption = $('<option>');
    newOption.val(colorEntered.toLowerCase());
    newOption.text(colorEntered.toUpperCase());

    $('#sb').append(newOption);
  
  
  }

  
  function changeColor(){
    var colorToUse = $('#sb').val();
    $('#paint').css('background-color', colorToUse);
  
  
  }


})();
