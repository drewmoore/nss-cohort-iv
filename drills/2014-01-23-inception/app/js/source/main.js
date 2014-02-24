/* jshint camelcase:false */

(function(){
  'use strict';

  $(document).ready(init);

  function init(){
    $('#add-divs').click(addDivs);
  }

  function addDivs(){
    var numberToCreate = $('#text-box').val();
    var count = 0;
    var $originalDiv = $('#stage');
    //var $allDivs = $('div');

    while(count < numberToCreate){
      var $newDiv = $('<div>');
      var r = Math.floor(Math.random() * 256);
      var g = Math.floor(Math.random() * 256);
      var b = Math.floor(Math.random() * 256);

      $newDiv.css('border-color', 'rgb('+r+', '+g+', '+b+')');

      $originalDiv[count].append($newDiv);

      count++;

    }
    
  }

})();
