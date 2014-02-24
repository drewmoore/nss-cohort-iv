/* global Animal: false, animalFactory: false */

(function(){

  'use strict';

  $(document).ready(initialize);

  var animals = [];

  function initialize(){
    $('input, textarea').focusin(focusInput);
    $('input, textarea').blur(blurInput);
    $('#add-photo').click(addPhoto);
    $('#add-animal').click(addAnimal);

    animals = animalFactory();

    fillTable();
  }

  function fillTable(){


    for(var i=0; i<animals.length; i++){
      var $tr = $('<tr>');

      for(var x=0; x<Animal.length; x++){
        var $a = $('<a>');
        var $div = $('<div>');
        var $td = $('<td>');
        var animalsFields = [animals[i].name, animals[i].species,
            animals[i].age, animals[i].gender, animals[i].description, animals[i].color, animals[i].photos];
        var headerText = $('th')[x].textContent;

        $a.attr('href', '#');
        $a.attr('data-search', headerText);
        $a.attr('data-value', animalsFields[x]);
        


        if(headerText === 'Photos'){
          for(var y=0; y<animals[i].photos.length; y++){
            var $divPic = $('<div>');
            $divPic.css('background-image', animals[i].photos[y]);
            $a.append($divPic);

          }
        
        }
        else {
          $div.text(animalsFields[x]);
          $a.append($div);
          
        }
        $td.append($a);
        $tr.append($td);
      
      }

      $('tbody').append($tr);
    }
  
  
  }

  function addAnimal(event){
    event.preventDefault();
    var species = $('#species').val();
    var color = $('#color').val();
    var age = $('#age').val() * 1;
    var gender = $('#gender').val();
    var name = $('#name').val();
    var description = $('#description').val();
    var photos = getAnimalPhotos();
    var animal = new Animal(name, age, gender, photos, description, color, species);

    animals.push(animal);
    $('.formfield').val(' ');
    $('#animals-table tbody').empty();
    
    fillTable();
  }

  function getAnimalPhotos(){
    var $divs = $('#photo-container > a > div');
    return _.map($divs, function(div){
      return $(div).css('background-image');
    });
  }

  function addPhoto(){
    event.preventDefault();
    var url = $('#photo').val();
    var $newDiv = $('<div>');
    var $a = $('<a>');

    $a.attr('href', '#');
    $a.addClass('th radius');
    $newDiv.css('background-image', 'url('+url+')');
    $a.append($newDiv);
    $('#photo-container').append($a);
  }

  function focusInput(){
    $(this).css('background-color', '#ffddee');
  }

  function blurInput(){
    $(this).css('background-color', 'white');
  }

})();

