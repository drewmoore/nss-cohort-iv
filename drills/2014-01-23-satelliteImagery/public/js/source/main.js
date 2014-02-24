/* jshint camelcase:false */

(function(){
  'use strict';

  $(document).ready(init);

  function init(){
    $('#add-zip').click(getImages);
  }

  function getImages(){
    var zip = $('#text-box').val();
    var url = 'http://api.wunderground.com/api/ef6ce3145fc3a464/satellite/q/'+zip+'.json?callback=?';
    $.getJSON(url, receive);
  
  }

  function receive(data){
    var url = data.satellite.image_url;
    var $newImageDiv = $('<div>');

    $newImageDiv.addClass('new-image-div');


    $('#images-div').append($newImageDiv);

    $newImageDiv.css('background-image', 'url('+url+')');
  
  
  }


})();
