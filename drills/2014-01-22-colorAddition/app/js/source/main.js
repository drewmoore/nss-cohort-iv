(function(){
  'use strict';

  $(document).ready(initialize);

  function initialize(){
    $('#colorButton').click(addColor);
  
  }

  function addColor(){
    var colorsToAdd = $('#colorRequest').val();
    colorsToAdd = colorsToAdd.split(', '); // makes colorsToAdd into an array

    for(var i = 0; i < colorsToAdd.length; i++){
      var $div = $('<div>'); //brackets around 'div' indicates that an object is being created, not referring to all divs on page.
      $finalColor.text(i + 1);
      $finalColor.css('background-color', colorsToAdd[i]);
      $('#colorsContainer').append($div);

    }

    createSumColor(colorsToAdd);

  }

  function createSumColor(colors){
    var sum = 0;
    for(var i = 0; i < colors.length; i++){
      sum += (i + 1);
    }

    var red = Math.floor(Math.random() * 256);
    var grn = Math.floor(Math.random() * 256);
    var blu = Math.floor(Math.random() * 256);

    var random = 'rgb(' + red + ',' + grn + ',' + blu + ')';

    var $div = $('<div>');
    $div.text(sum);
    $div.css('background-color', random);
    $('#container').append($div);
      
  }

})();


