(function(){

  'use strict';

  $(document).ready(initialize);

  var nameClicked;
  var flagClicked;
  var lastClick;
  var timer;
  var maxTime = 20000;
  var timeCount = 0;
  var interval;

  function initialize(){
    $(document).foundation();

    getInterval();
    $('#sand').css('height', '550');
    $('.name-square').click(clickName);
    $('.flag-square').click(clickFlag);

    clearInterval(timer);
    timer = setInterval(timerFunction, interval);
  }

  function getInterval(){
    var totalHeight = $('#hourglass').css('height').split('p')[0] * 1;
    interval = parseInt(maxTime / totalHeight);
    console.log('get interval: ', interval);
    return interval;
  }

  function timerFunction(){
    var height = $('#hourglass').css('height').split('p')[0] * 1;
    var toSub = height - (timeCount / interval);
    timeCount += interval;
    $('#sand').css('height', toSub);

    console.log('timerFunction: ', timeCount, height, toSub);
    if(timeCount >=  maxTime){
      gameOver();
    }
  }

  function clickName(){
    $(this.parentElement).find('.gameboard-square').removeClass('clicked');
    $(this).addClass('clicked');
    nameClicked = this.textContent;
    if(lastClick === 'flag'){
      sendAnswers();
    } else {
      lastClick = 'name';
    }
  }

  function clickFlag(){
    $(this.parentElement).find('.gameboard-square').removeClass('clicked');
    $(this).addClass('clicked');
    flagClicked = $(this).find('p').attr('class').split('-')[1];
    if(lastClick === 'name'){
      sendAnswers();
    } else {
      lastClick = 'flag';
    }
  }

  function sendAnswers(){
    var url = '/match/' + nameClicked + '/' + flagClicked;
    $.getJSON(url, getResult);
    lastClick = '';
  }

  function getResult(data){
    $('#gameboard > div > div').removeClass('clicked');
    if(data.matched === 1){
      rightAnswer();
    } else {
      wrongAnswer();
    }
  }

  function rightAnswer(){
    var $div = $('<div>');
    var $div2 = $('<div>');
    var $div3 = $('<div>');
    var $div4 = $('<div>');
    var $p = $('<p>');
    var $p2 = $('<p>');

    _.each($('#gameboard-names > div > p'), function(p){
      if(p.textContent === nameClicked){
        $(p.parentElement).remove();
      }
    });

    _.each($('#gameboard-flags > div > p'), function(p){
      if($(p).attr('class').split('-')[1] === flagClicked){
        $(p.parentElement).remove();
      }
    });

    $p.text(nameClicked);
    $p.addClass('name');
    $p2.addClass('flag flag-'+flagClicked);
    $div.append($p);
    $div2.append($p2);
    $div.addClass('gameboard-square');
    $div2.addClass('gameboard-square');
    $('#winning-names').prepend($div);
    $('#winning-flags').prepend($div2);

    if($('#gameboard-names > div').length === 0){
      clearInterval(timer);
      $('#gameboard-names').append($div3);
      $('#gameboard-flags').append($div4);
      $('h1').text('You Win!');
      $('h5').text('Refresh your browser and play again.');
    }

  }

  function wrongAnswer(){
  }

  function gameOver(){
    clearInterval(timer);
    $('.name-square').unbind('click');
    $('.flag-square').unbind('click');
    $('h1').text('You Suck!');
    $('h5').text('Go back to school. Play again.');
  }
})();

