(function(){
  'use strict';
  function initialize(){
    $('#addcolor').click(coloradd);
    $('#colors').on('click', '.coloroption', selectColor);
  
  }
  function coloradd(){
    var $colortext = $('#color').val();
    var $colorsquare = $('<div>');
    $colorsquare.addClass('coloroption');
    $colorsquare.css('background-color', $colortext);
    $('#colorbox').prepend($colorsquare);
  
  }

  function selectColor(){
    if($(this).hasClass('selected')){
      $(this).removeClass('selected');
    }
    else {
      $('.coloroption').removeClass('selected');
      $(this).addClass('selected');
    }
  
  }
  $(document).ready(initialize);
})();
