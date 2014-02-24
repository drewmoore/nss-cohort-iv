(function(){
  'use strict';

  $(document).ready(init);
    
  // sets up the array that will identify every clickable element on the game board. 
  var assignedNumbers = [];
  // sets up images array
  var images = ['bieber.jpg', 'Billie.jpg', 'bonham.jpg', 'cash.jpg', 'duke.jpg', 'elvis.jpg', 'hendrix.jpg',
    'kurt.jpg', 'miles.jpg', 'tupac.jpg'];
  //keep track of clicks 
  var clickCount = 0;
  var lastClick = 0;
  var beforeLastClick = 0;


  function init(){
    $('#play').click(play);
    $('#reset').click(reset);
  }

  function play(){
    // setup the playing board. Make sure there's not already a table before creating one to avoid duplicates.
    if($('#playingboard td').length <  1){
      setupBoard();
    }
    else {
      return;
    }
  }

  function reset(){
    $('#playingboard').empty();
    $('strong', '#scoreboard').text('0 / 0');
    assignedNumbers = [];
    clickCount = 0;
    lastClick = 0;
  }

  function clickSquare(){
    var guessRight = false;
    console.log(assignedNumbers);


    clickCount++;

    if(clickCount % 2 !== 0 && clickCount > 1){
      if(lastClick.assigned !== -1){
        $(lastClick).css('background-image', 'url(/img/question.png');
      }
      if(beforeLastClick.assigned !== -2){
        $(beforeLastClick).css('background-image', 'url(/img/question.png');
      }
    
    }


    $(this).css('background-image', 'url(/img/'+images[adjust(this.assigned)]+')');

    if(this.assigned === lastClick.assigned && clickCount % 2 === 0){
      return;
    }

    if(clickCount % 2 === 0 && clickCount > 0){
      if(adjust(this.assigned) === adjust(lastClick.assigned)){
        guessRight = true;
        this.assigned = -1;
        lastClick.assigned = -2;
        $(this).removeClass('square');
        $(lastClick).removeClass('square');


      }
      
      changeScore(guessRight);
      
      
    }

    beforeLastClick = lastClick;
    lastClick = this;
  }

  function changeScore(guessRight){
    // grab the current score. Change it to an array.
    var scoreNumbers = $('#scoreboard').text().split(' ');
    var newScore;
        
    // add one to the bottom number automatically. This counts the number of total clicks.
    scoreNumbers[2]++;
    
    // add one to the top number if the user guesses right. Otherwise, number stays the same.
    if(guessRight){
      scoreNumbers[0]++;
    }

    // turn the score array back into a string. Put it in the scoreboard. New score is displayed.
    newScore = scoreNumbers.join(' ');
    $('strong', '#scoreboard').text(newScore);
  
  }

  function setupBoard(){
    // lays out the trs, tds, and divs on the table. Assigns each div a unique number and the class 'square'.

    for(var count=0; count<4; count++){
      var $newTr = $('<tr>');
      $('#playingboard').append($newTr);

      for(var i=0; i<5; i++){
        var $newTd = $('<td>');

        $newTd.assigned = randomize();
        //$newTd.text($newTd.assigned);
        $newTd.addClass('square');
        $newTd.css('backgroundImage', 'url:(img/question.png)');
        $newTr.append($newTd);
        $('td')[$('td').length -1].assigned = $newTd.assigned;
        assignedNumbers.push($newTd.assigned);
      }
    
    }
    // click handler for dynamically-created class of 'square'.
    $('.square').on('click', clickSquare);
  }

  function randomize(){
    // generate random numbers 0 - 19.
    var newRandom = Math.floor(Math.random() * 20);

    // make sure that there are no duplicates 
    while(assignedNumbers.indexOf(newRandom) > -1){
      newRandom = Math.floor(Math.random() * 20);
    }

    return newRandom;
  }

  function adjust(number){
    // compensates for the need to generate 20 unique random numbers. This function
    // allows there to be matching pairs while still being unique.
    if(number > 9){
      number -= 10;
    }
    return number;
  }
  

})();
