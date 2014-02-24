(function(){

  'use strict';

  $(document).ready(initialize);

  var timer;
  var timeCount = 0;
  var randomWords = getWords();

  function initialize(){
    $('#go').click(go);
  }

  function go(){

    clearInterval(timer);
    timeCount = 0;
    timer = setInterval(eachSecond,1000);
  
  }

  function eachSecond(){
    var pickedWord = randomWords[timeCount];

    evenOrOdd(pickedWord);
    timeCount++;
  }

  function getWords(){
    var fullText;
    var wordsArray = [];

    fullText = $('p', '#preamble').text();
    for(var i=0; i<fullText.length; i++){
      fullText = fullText.replace(',','');
      fullText = fullText.replace('.','');
    }
    wordsArray = (_.shuffle(fullText.split(' '))).filter(function(x){return x!==' ';});
    return wordsArray;
  }

  function evenOrOdd(pickedWord){
    if(pickedWord.length %2 === 0){
      even(pickedWord);
    }
    else {
      odd(pickedWord);
    }
  }

  function even(pickedWord){
    var evenWordMod;

    evenWordMod = pigLatin(pickedWord).toLowerCase();
    placeEvenWord(evenWordMod, pickedWord);
  }

  function odd(pickedWord){
    var oddWordMod;

    oddWordMod = (noVowel(pickedWord)).toUpperCase();
    placeOddWord(oddWordMod, pickedWord);
  }

  function pigLatin(pickedWord){
    var latinized;
    var firstLetter;
    var wordRemainder;

    firstLetter = pickedWord[0];
    wordRemainder = pickedWord.slice(1);
    latinized = (wordRemainder + firstLetter + 'a');
  
    return latinized;
  }

  function noVowel(pickedWord){
    var vowels = ['a', 'e', 'i', 'o', 'u'];
    var newWord = pickedWord;

    for(var i=0; i<pickedWord.length; i++){
      for(var x=0; x<vowels.length; x++){
        if(pickedWord[i] === vowels[x]){
          newWord = pickedWord.slice(i+1);
        }
      }
    }
    return newWord;
  }

  function placeEvenWord(incomingWord, pickedWord){
    var $wrapper = $('<div>');
    var $a = $('<a>');
    var $divWord = $('<div>');
    var $divMath = $('<div>');

    $divWord.text(incomingWord);
    $divMath.text(sigma(incomingWord));
    $a.attr('href', 'https://www.google.com/search?q='+pickedWord+'&oq='+pickedWord+'&aqs=chrome..69i57j0l3.1777j0j4&sourceid=chrome&ie=UTF-8');


    $divWord.css('background-color', 'rgba(100,100,50,.8)');
    $divMath.css('background-color', 'rgba(100,200,80,.6)');

    $a.append($divWord);
    $a.append($divMath);
    $wrapper.append($a);
    

    $('#evens').append($wrapper);
  
  }

  function placeOddWord(incomingWord, pickedWord){
    var $wrapper = $('<div>');
    var $a = $('<a>');
    var $divWord = $('<div>');
    var $divMath = $('<div>');

    if(incomingWord.length < 1){
      return;
    }
    else{
      $divWord.text(incomingWord);
      $divMath.text(factorial(incomingWord));
      $a.attr('href', 'https://www.google.com/search?q='+pickedWord+'&oq='+pickedWord+'&aqs=chrome..69i57j0l3.1777j0j4&sourceid=chrome&ie=UTF-8');

      $divWord.css('background-color', 'rgba(200,100,50,.8)');
      $divMath.css('background-color', 'rgba(100,200,250,.5)');

      $a.append($divWord);
      $a.append($divMath);
      $wrapper.append($a);
      

      $('#odds').append($wrapper);
    }
  }

  function sigma(incomingWord){
    var result = 0;

    for(var i =0; i<incomingWord.length; i++){
      result += (incomingWord.length - i);
    
    }

  
    return result;
  }

  function factorial(incomingWord){
    var result = 1;

    for(var i =0; i<incomingWord.length; i++){
      if (incomingWord.length - i === 0){
        return;
      }
      else{
        result *= (incomingWord.length - i);
      }
    }

  
    return result;
  }

  


})();

