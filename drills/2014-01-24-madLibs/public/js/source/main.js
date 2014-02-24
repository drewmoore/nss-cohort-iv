/* jshint camelcase:false */

(function(){
  'use strict';

  $(document).ready(init);

  function init(){
    $('#add-words').click(addWords);
    $('#squares-div').on('mousedown', '.word-square', makeSentence);
    //$('#clear').click(clear);
  }

  function addWords(){
    var wordsToAdd = ($('#text-box').val()).split(' ');
    console.log(wordsToAdd);

    for(var i=0; i<wordsToAdd.length; i++){
      var $newDiv = $('<div>');

      $newDiv.text(wordsToAdd[i]);
      $newDiv.addClass('word-square');

      $('#squares-div').append($newDiv);
    
    }
  }

  function makeSentence(){
    alert(this.text);
    $('#words-div').append($(this).text);
    
    
  }
  
  

  /*
  function clear(){
  
  
  }
  */


})();
