(function(){

  'use strict';

  $(document).ready(initialize);

  var moviesOnPage = [];
  console.log(moviesOnPage);

  function initialize(){
    $(document).foundation();
    $('#save-movie').click(submitMovie);
    $('#submit-edits').hide();
    $('#submit-edits').click(submitEdits);
    $('#toggle-form').click(toggleForm);
    $('#movies').on('click', '.studio', filterStudio);
    $('#movies').on('click', '.delete', deleteMovie);
    $('#movies').on('click', '.edit', editMovie);
    getMovies();
  }

  function filterStudio(){
    var studio = this.textContent;
    var url = window.location.origin.replace(/[0-9]{4}/, '4000') + '/movies/query?studio=' + studio;
    $.getJSON(url, displayMovies);
  }

  function getMovies(){
    var url = window.location.origin.replace(/[0-9]{4}/, '4000') + '/movies';
    $.getJSON(url, displayMovies);
  }

  function displayMovies(data){
    $('#movies').empty();

    for(var i = 0; i < data.movies.length; i++){
      displayMovie(data.movies[i]);
      moviesOnPage.push(data.movies[i]);
      console.log('moviesOnPage: ', moviesOnPage);
        
    }
  }

  function displayMovie(movie){
    var $poster = $('<div>');
    var $title = $('<div>');
    var $description = $('<div>');
    var $footer = $('<div>');
    var $deleteButton = $('<input type="button" class="delete" value="Delete">');
    var $editButton = $('<input type="button" class="edit" value="Edit">');


    $poster.addClass('poster');
    var url = 'url("'+movie.poster+'")';
    $poster.css('background-image', url);
    $poster.attr('data-id', movie._id);

    $title.addClass('title');
    $title.text(movie.name);

    var about = 'A film by <span class="studio">'+movie.studio+'</span> staring <span class="actors">'+movie.actors.join(', ')+'</span>';
    $description.addClass('description');
    $description.append(about);

    $footer.addClass('footer');
    $footer.text(movie.director + ' ' + movie.year + ' ' + movie.rating + ' ' + movie.length);

    $poster.append($title, $description, $footer, $editButton, $deleteButton);
    $('#movies').prepend($poster);
  }

  function toggleForm(){
    $('#movie').toggle();
  }

  function submitMovie(event){
    var data = $(this).closest('form').serialize();
    var url = window.location.origin.replace(/[0-9]{4}/, '4000') + '/movies';
    var type = 'POST';
    var success = newMovie;

    $.ajax({url:url, type:type, data:data, success:success});

    toggleForm();

    event.preventDefault();
  }

  function submitEdits(event){
    var data = $(this).closest('form').serialize();
    var id = $('input[name="id"]').val();
    var url = window.location.origin.replace(/[0-9]{4}/, '4000') + '/movies/' + id;
    var type = 'PUT';
    var success = editsSubmitted;

    $.ajax({url:url, type:type, data:data, success:success});

    console.log('submitEdits called');
    console.log(url);
    console.log(data);


    event.preventDefault();
  }

  function editsSubmitted(movie){
    if(movie.count === 1){
      $('#movie input').val('');
      toggleForm();
      $('#submit-edits').hide();
      $('#save-movie').show();

      _.remove(moviesOnPage, function(oneMovie){return oneMovie._id === movie.id;});
      movie.movie._id = movie.id;
      moviesOnPage.push(movie);

      editDom(movie);

    }
  }

  function editDom(movie){
    var toEdit = $(_.find($('#movies > div'), function(movieDiv){
      return $(movieDiv).attr('data-id') === movie.id;
    }));
    var footer = (movie.movie.director + ' : ' + movie.movie.year + ' : ' + movie.movie.rating + ' : ' + movie.movie.length);
    //$footer.text(movie.director + ' ' + movie.year + ' ' + movie.rating + ' ' + movie.length);


    toEdit.css('background-image', movie.movie.poster);
    toEdit.find('.title').text(movie.movie.name);
    toEdit.find('.studio').text(movie.movie.studio);
    toEdit.find('.actors').text(movie.movie.actors);
    toEdit.find('.footer').text(footer);

  }

  function newMovie(movie){
    $('#movie input').val('');
    displayMovie(movie);
  }

  function deleteMovie(){
    var movieId = $(this.parentElement).attr('data-id');
    var url = window.location.origin.replace(/[0-9]{4}/, '4000') + '/movies/' + movieId;
    var type = 'DELETE';
    var success = removeDom;

    $.ajax({url:url, type:type, success:success});

    event.preventDefault();
  }

  function editMovie(){
    var movieId = $(this.parentElement).attr('data-id');
    var url = window.location.origin.replace(/[0-9]{4}/, '4000') + '/movies/' + movieId;

    $('#save-movie').hide();
    $('#submit-edits').show();
    $.getJSON(url, fillForms);

    event.preventDefault();
  
  }

  function fillForms(movie){
    $('#movie').show();
    var payload = movie.movies[0];

    $('input[name="name"]').val(payload.name);
    $('input[name="rating"]').val(payload.rating);
    $('input[name="length"]').val(payload.length);
    $('input[name="year"]').val(payload.year);
    $('input[name="studio"]').val(payload.studio);
    $('input[name="director"]').val(payload.director);
    $('input[name="poster"]').val(payload.poster);
    $('input[name="actors"]').val(payload.actors);
    $('input[name="id"]').val(payload._id);


    console.log('payload id', $('input[name="id"]').val(payload._id));



    console.log('fillForms called', payload);
  
  }

  function removeDom(data){
    console.log('success: removeDom called ' + data);
    if(data.deleted === 1){
      $('.poster[data-id="'+data.id+'"]').remove();
    }
  }

})();
