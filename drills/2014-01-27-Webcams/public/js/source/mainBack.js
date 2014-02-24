(function(){
  
  'use strict';

  $(document).ready(init);

  function init(){
    $('#add-zip').click(addZip);
    $('#get-webcam').click(getWebcam);
    $('#clear').click(clear);
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

    console.log(url);
    $.getJSON(url, receive);

  
  }

  function receive(data){
    var payload = [];

    for(var i = 0; i < (data.webcams.length - 1); i++){
      var $newDiv = $('<div>');
      payload = data.webcams[i].WIDGETCURRENTIMAGEURL;
      console.log(payload);
      $newDiv.css('background-image', 'url('+payload+')');
      $('#display').prepend($newDiv);
    }


  }

  function clear(){
    $('#display').empty();
  }
})();
