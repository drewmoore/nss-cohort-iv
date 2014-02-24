/* jshint camelcase:false */
(function(){
  'use strict';

  $(document).ready(init);
  var count = 0;

  function init(){
    
    $('#add-select').click(doStuff);

  }

  function doStuff(){
    var colorInput = $('#text-box').val();
    var $newOption = $('<option>');
    $newOption.val(count);

    //$newOption.val($('select').length);

    $newOption.text(colorInput);

    $('select').append($newOption);
    
    console.log($newOption.val());

    count++;

  }

     
  
})();

