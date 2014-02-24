(function(){

  'use strict';

  $(document).ready(initialize);
  $('#get-quote').click(getQuote);

  function initialize(){
    $(document).foundation();
  }

  function getQuote(){
    var stock = $('#text-box').val();
    var url = window.location.origin.replace(/[0-9]{4}/g, '4000');
    url += '/quote?symbol='+stock+'&callback=?';
    $.getJSON(url, function(data){
      console.log(data);
    });

  
  }

})();

