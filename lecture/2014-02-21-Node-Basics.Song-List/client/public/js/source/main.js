(function(){

  'use strict';

  $(document).ready(initialize);

  function initialize(){
    $(document).foundation();
    $('#add-song').click(addSong);
    $('#search-song').click(searchSong);
    $('#cancel-edits').click(cancelEdits);
    $('#submit-edits').click(submitEdits);
    $('#cancel-delete').click(cancelDelete);
    $('#submit-delete').click(submitDelete);

    getSongs();

  }

  function getSongs(){
    var url = window.location.origin.replace(/[0-9]{4}/, '4000') + '/index';

    $.getJSON(url, fillTable);
  }

  function fillTable(songs){

    for(var i=0; i<songs.length; i++){
      var $tr = $('<tr>');
      var $td = $('<td>');
      var $td2 = $('<td>');
      var $td3 = $('<td>');
      var $div = $('<div>');
      var $div2 = $('<div>');

      $tr.attr('data-id', songs[i]._id);
      $td.text(songs[i].name);
      $td.addClass('title-td');
      $td2.text(songs[i].artist);
      $td2.addClass('artist-td');

      $div.addClass('icons');
      $div.addClass('edit');
      $div.css('background-image', 'url(/media/edit.png)');
      $div2.addClass('icons');
      $div2.addClass('delete');
      $div2.css('background-image', 'url(/media/delete.png)');


      $td3.append($div);
      $td3.append($div2);
      $tr.append($td);
      $tr.append($td2);
      $tr.append($td3);
      $('#song-table > tbody').append($tr);
    }

    $('.icons').on('click', clickIcon);
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
    var songs = [];
    songs.push(song);
    fillTable(songs);
  }

  function searchSong(event){
    var searchString = $('#search-form').find('input[name=search]').val();
    var url = window.location.origin.replace(/[0-9]{4}/, '4000') + '/songs/search?artist=' + searchString;

    $.getJSON(url, searchReturned);

    event.preventDefault();
    console.log('searchSong called. searchString: ', searchString, url);
  }

  function searchReturned(data){
    $('#song-table > tbody').empty();
    fillTable(data);
    console.log(data);
  }

  function clickIcon(event){
    var self = this;
    if($(this).hasClass('edit')){
      editSong(self);
    }
    if($(this).hasClass('delete')){
      deleteSong(self);
    }
    event.preventDefault();
  }

  function editSong(toEdit){
    var id = $(toEdit).closest('tr').attr('data-id');
    var name = $(toEdit).closest('tr').find('.title-td').text();
    var artist = $(toEdit).closest('tr').find('.artist-td').text();

    if($('#edit-form').hasClass('hide')){
      $('#edit-form').removeClass('hide');
      $('#edit-form').addClass('visible');
    }

    $('#edit-form').find('input[name=name]').attr('data-id', id);
    $('#edit-form').find('input[name=name]').val(name);
    $('#edit-form').find('input[name=artist]').val(artist);
  }

  function cancelEdits(event){
    $('#edit-form').removeClass('visible');
    $('#edit-form').addClass('hide');

    event.preventDefault();
  }

  function submitEdits(event){
    var id = $('#edit-form').find('input[name=name]').attr('data-id');
    var type = 'PUT';
    var success = receiveEdits;
    var data = $('#edit-form').serialize();
    var url = window.location.origin.replace(/[0-9]{4}/, '4000') + '/songs/' + id;

    $.ajax({type: type, url: url, success: success, data: data});

    event.preventDefault();
  }

  function receiveEdits(data){
    var id = $('#edit-form').find('input[name=name]').attr('data-id');
    var name = $('#edit-form').find('input[name=name]').val();
    var artist = $('#edit-form').find('input[name=artist]').val();
    var $titleTd = $('tbody').find('tr[data-id='+id+']').find('.title-td');
    var $artistTd = $('tbody').find('tr[data-id='+id+']').find('.artist-td');

    if(data.numberChanged === 1){
      $('#edit-form').removeClass('visible');
      $('#edit-form').addClass('hide');

      $titleTd.text(name);
      $artistTd.text(artist);
    } else {
      console.log('Database Error');
    }
  }

  function deleteSong(toDelete){
    var id = $(toDelete).closest('tr').attr('data-id');
    if($('#delete-form').hasClass('hide')){
      $('#delete-form').removeClass('hide');
      $('#delete-form').addClass('visible');
    }
    $('#delete-message').attr('data-id', id);
    console.log('deleteSong called, toDelete: ', toDelete, id);
  }

  function cancelDelete(event){
    $('#delete-form').removeClass('visible');
    $('#delete-form').addClass('hide');
    event.preventDefault();
  }

  function submitDelete(event){
    var id = $('#delete-message').attr('data-id');
    var url = window.location.origin.replace(/[0-9]{4}/, '4000') + '/songs/' + id;

    $.ajax({url: url, type: 'DELETE', success: receiveDelete});
    event.preventDefault();

    console.log('submitDelete: ', id);
  }

  function receiveDelete(data){
    if(data.count === 1){
      var id = $('#delete-message').attr('data-id');
      var $tr = $('tbody').find('tr[data-id=' + id + ']');
    
      $tr.remove();
      $('#delete-form').removeClass('visible');
      $('#delete-form').addClass('hide');
      console.log('receiveDelete: ', data.count, id, $tr);
    }
  }
})();

