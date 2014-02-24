(function(){

  'use strict';

  $(document).ready(initialize);

  function initialize(){
    $(document).foundation();
    $('#one').click(one);
    $('#two').click(two);
    $('#add').click(add);
    $('#candrink').click(candrink);
    $('#product-button').click(product);
    $('#calc').click(calc);
  }

  function one(){
    var url = window.location.origin.replace(/([\d]){4}/g, '4000');
    url += '/name?callback=?';
    $.getJSON(url, function(data){
      console.log(data);
    });
  }

  function two(){
    var url = window.location.origin.replace(/([\d]){4}/g, '4000');
    url += '/favcolor?callback=?';
    $.getJSON(url, function(data){
      console.log(data);
    });
  }
  
  function add(){
    var url = window.location.origin.replace(/([\d]){4}/g, '4000');
    var a = $('#inputone').val();
    var b = $('#inputtwo').val();

    url += '/sum/'+a+'/'+b+'?callback=?';
    $.getJSON(url, function(data){
      $('#sum').text(data.sum);
    });
  }

  function candrink(){
    var url = window.location.origin.replace(/([\d]){4}/g, '4000');
    var name = $('#name').val();
    var age = $('#age').val();

    url += '/candrink/'+name+'/'+age+'?callback=?';
    $.getJSON(url, function(data){
      $('#result').text(data.result);
    });
  }

  function product(){
    var numbers = $('#numbers').val();
    var url = window.location.origin.replace(/([\d]){4}/g, '4000');

    url += '/product?numbers='+numbers+'&callback=?';
    $.getJSON(url, function(data){
      console.log(data.product);
    });
  }

  function calc(){
    var names = $('#names').val().split(', ');
    var url = window.location.origin.replace(/([\d]){4}/g,'4000');

    url += '/names?x=';

    for(var i=0; i<names.length; i++){
      if(i===names.length-1){
        url += names[i];
      } else {
        url += (names[i] + ',');
      }
    }

    url += '&callback=?';

    console.log(names);
    console.log(url);

    $.getJSON(url, function(data){
      console.log(data);
    });
  }
})();

