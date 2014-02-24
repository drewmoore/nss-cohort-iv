(function(){

  'use strict';

  $(document).ready(initialize);

  function initialize(){
    $(document).foundation();
    $('#input-panel').hide();
    $('#create-exercise').click(createExercise);
    $('#expand').click(expand);
    $('#search').click(search);
    $('#unique').click(unique);
    getExercises();
  }

  function createExercise(){
    var name = $('#name').val();
    var time = $('#time').val();
    var cals = $('#cals').val();
    var date = $('#date').val();
    var url = window.location.origin.replace(/3000/,'4000');
    url += '/exercises';
    var options = {};
    options.url = url;
    options.type = 'POST';
    options.data = {name:name, time:time, calories:cals, date:date};
    options.success = exerciseCreated;

    $.ajax(options);
  }

  function exerciseCreated(){
    //$('#exercises > tbody').empty();
    getExercises();
  }

  function getExercises(){
    var url = window.location.origin.replace(/3000/,'4000');
    url += '/exercises';
    console.log(url);
    $.getJSON(url, displayExercises);
  }

  function expand(){
    $('#input-panel').toggle();
  }


  function displayExercises(data){
    for(var i=0; i<data.exercises.length; i++){
      var $name = $('<td>');
      var $time = $('<td>');
      var $cals = $('<td>');
      var $date = $('<td>');

      $name.text(data.exercises[i].name);
      $time.text(data.exercises[i].time);
      $cals.text(data.exercises[i].calories);
      $date.text(data.exercises[i].date);

      var $row = $('<tr>');

      $row.append($name, $time, $cals, $date);
      $('#exercises > tbody').prepend($row);
    }

  }

  function search(){
    $('#search-results').empty();
    var input = $('#query').val();
    var url = window.location.origin.replace(/3000/,'4000');
    url += ('/exercises/'+input);
    $.getJSON(url, displaySearch);
    console.log(url);
  }

  function unique(){
    $('#unique-results').empty();
    var newStuff = _.uniq(_.map($('tr:nth-child(n+2)'), function(tr){
      return _.map(tr.cells, function(td){
        return td.textContent;
      }).join(', ');
    }));

    displayUnique(newStuff);
  }

  function displayUnique(data){
    var result = '';
    for(var i=0; i<data.length; i++){
      result += (data[i] + '. ' + '\n');
    }

    console.log(data);


    $('#unique-results').val(result);

  }

  function displaySearch(data){
    var result = '';
    for(var i=0; i<data.exercises.length; i++){
      var incoming = data.exercises[i];
      result += (incoming.name +', '+ incoming.time +', '+ incoming.calories +', '+ incoming.date +'.');
      if(i !== data.exercises.length - 1){
        result += '\n';
      }
    
    }
    $('#search-results').val(result);
  }

})();

