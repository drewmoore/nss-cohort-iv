(function(){

  'use strict';

  $(document).ready(initialize);

  function initialize(){
    $(document).foundation();
    $('#add').click(add);
    $('#multiply').click(multiply);
  }

  function add(){
    var x = $('#a').val();
    var y = $('#b').val();
    var url = '/calc/add?x=' + x + '&y=' + y;
    $.getJSON(url, function(data){
      $('#sum').text(data.sum);
      console.log(data);
    });
  }

  function multiply(){
    var numbers = $('#numbers-area').val();
    var url = '/calc/multiply?numbers=' + numbers;

    $.getJSON(url, function(data){
      $('#product').text(data.product);
    });

    console.log(numbers);
  }

})();

