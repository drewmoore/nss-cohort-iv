/* jshint camelcase:false  */
(function(){
  'use strict';

  $(document).ready(init);

  function init(){
    $('#get-weather').click(getWeather);
  
  }

  function getWeather(){
    var url = 'http://api.wunderground.com/api/ef6ce3145fc3a464/conditions/q/TN/Nashville.json?callback=?';
    $.getJSON(url, receive);
  
  }

  function receive(data){
    var description = data.current_observation.wind_string;
    var direction = data.current_observation.wind_dir;
    var degrees = data.current_observation.windchill_string;
    var speed = data.current_observation.wind_mph;
    var gust = data.current_observation.wind_gust_mph;

    var windInfo = [description, direction, degrees, speed, gust];

    for(var i = 0; i < windInfo.length; i++){
      var $newDiv = $('<div>');
      $newDiv.text(windInfo[i]);
      $('#weather').append($newDiv);
      
    
    }
  
  }

})();
