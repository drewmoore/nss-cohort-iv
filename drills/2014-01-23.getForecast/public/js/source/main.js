/* jshint camelcase:false */

(function(){
  'use strict';

  $(document).ready(init);

  function init(){
    $('#add-zip').click(addZip);
    $('#get-button').click(getForecast);
  }


  function getForecast(){
    var url = 'http://api.wunderground.com/api/ef6ce3145fc3a464/forecast/q/' + $('#choose-zip').val() + '.json?callBack=?';
    $.getJSON(url, receive);
    
    
  }
  
  function receive(data){
    debugger;
    console.log(data);
  
  }
  
  function addZip(){
    var zipToAdd = $('#text-box').val();
    var $newZip = $('<option>');
    $newZip.text(zipToAdd);
    $('#choose-zip').append($newZip);
  }
  


})();
