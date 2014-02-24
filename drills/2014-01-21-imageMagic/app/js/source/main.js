(function(){
  'use strict';

  $(document).ready(initialize);

  function initialize(){
    $('#addImgButton').click(grabUrl);

  }

  function grabUrl(){
    var urlToGrab = $('#enterImgLink').val();
    var $newDiv = $('<div></div>');

    $('#imgContainer').prepend($newDiv);
    $newDiv.addClass('newImageDiv');
    $newDiv.css('background-image', 'url(' + urlToGrab + ')');
  
  }

})();
