(function(){
  
  'use strict';

  $(document).ready(init);

  function init(){
    $('#add-zip').click(addZip);
    $('#get-webcam').click(getWebcam);
    $('#clear').click(clear);

    getForecast();
  }

  function addZip(){
    var zip = $('#zip-box').val();
    var $newZip = $('<option>');

    $newZip.text(zip).attr('selected', true);
    $('#zip-menu').append($newZip);
    $('#zip-box').val(' ');

  
  }

  function getWebcam(){
    var zip = $('#zip-menu').val();
    var url = 'http://api.wunderground.com/api/ef6ce3145fc3a464/webcams/q/'+zip+'.json?callback=?';
    //     var url = 'http://api.wunderground.com/api/ef6ce3145fc3a464/forecast/q/' + $('#choose-zip').val() + '.json?callBack=?';
    //

    $.getJSON(url, receive);

  
  }

  function receive(data){
    var payload = [];
    var neighborhood;

    for(var i = 0; i < (data.webcams.length - 1); i++){
      var $newDiv = $('<div>');
      payload = data.webcams[i].WIDGETCURRENTIMAGEURL;
      neighborhood = data.webcams[i].neighborhood;
      
      $newDiv.text(neighborhood);
      $newDiv.css('background-image', 'url('+payload+')');
      $('#display').prepend($newDiv);
    }


  }

  function clear(){
    $('#display').empty();
  }

  function getForecast(){
    var url = 'http://api.wunderground.com/api/ef6ce3145fc3a464/forecast/q/37208.json?callback=?';

    $.getJSON(url, postForecast);
  
  }

  function postForecast(stuff){
    var forecast = [];
    forecast = [stuff.forecast.txt_forecast.forecastday[0].title+', ', stuff.forecast.txt_forecast.date+'.  ',
             stuff.forecast.txt_forecast.forecastday[0].fcttext];
    //var forecast = [stuff.forecast.text_forecast.forecastday[0].title, stuff.forecast.text_forecast.date,];

    for(var i = 0; i<forecast.length; i++){
      var $newSpan = $('<span>');

      $newSpan.text(forecast[i]);
      $('h5', '#forecast').append($newSpan);
    
    
    }

    console.log(stuff);
    console.log(forecast);
  
  }

})();
