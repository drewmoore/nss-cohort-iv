(function(){
  'use strict';
  function initialize(){
    $('#addcolor').click(coloradd);
  
  }
  function coloradd(){
    var $colortext = $('#color').val();
    var $colorsquare = $('<div>');
    $colorsquare.addClass('coloroption');
    $colorsquare.css('background-color', $colortext);
    $('#colorbox').prepend($colorsquare);
  
  }
  $(document).ready(initialize);
})();
