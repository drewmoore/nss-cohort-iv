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
    var daily = data.forecast.simpleforecast.forecastday;

    for(var i; i < daily.length; i++){
      var $newForecast = $('<div>');
      var $newDay = $('<div>');
      var $newIcon = $('<div>');
      var $newCondition = $('<div>');

      $newDay.addClass('forecast-day');
      $newIcon.addClass('forecast-icon');
      $newCondition.addClass('forecast-condition');

      $newDay.text(daily[i].date.weekday);
      $newIcon.css('background-image', 'url(' + daily[i].icon_url + ')');
      $newCondition.text(daily[i].conditions);

      $newForecast.append($newDay);
      $newForecast.append($newIcon);
      $newForecast.append($newCondition);

      $('#forecast-div').append($newForecast);

    
    }
  
  }
  
  function addZip(){
    var zipToAdd = $('#text-box').val();
    var $newZip = $('<option>');
    $newZip.text(zipToAdd);
    $('#choose-zip').append($newZip);
  }
  


})();
