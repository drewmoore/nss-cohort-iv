(function(){

  'use strict';

  $(document).ready(initialize);

  function initialize(){
    $(document).foundation();
    $('#add-song').click(addSong);

    getSongs();

  }

  function getSongs(){
    var url = window.location.origin.replace(/[0-9]{4}/, '4000') + '/index';

    $.getJSON(url, fillTable);
  }

  function fillTable(songs){
    console.log(songs);

    for(var i=0; i<songs.length; i++){
      var $tr = $('<tr>');
      var $td = $('<td>');
      var $td2 = $('<td>');
      var $td3 = $('<td>');

      $td.text(songs[i].name);
      $td2.text(songs[i].artist);
      $tr.append($td);
      $tr.append($td2);
      $tr.append($td3);
      $('#song-table > tbody').append($tr);
    }
  }

  function addSong(event){
    var data = $('#song-form').serialize();
    var type = 'POST';
    var success = songReturned;
    var url = window.location.origin.replace(/[0-9]{4}/, '4000') + '/songs';

    $.ajax({url: url, data: data, type: type, success: success});

    event.preventDefault();
  }

  function songReturned(song){
    var $tr = $('<tr>');
    var $td = $('<td>');
    var $td2 = $('<td>');
    var $td3 = $('<td>');

    $td.text(song.name);
    $td2.text(song.artist);
    $tr.append($td);
    $tr.append($td2);
    $tr.append($td3);
    $('#song-table > tbody').append($tr);

    debugger;
    console.log(song);
  }

})();

