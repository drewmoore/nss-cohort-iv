(function(){

  'use strict';

  var songSelected = $('#audio-tag')[0];
  var timer;
  var songProgressTimer;

  $(document).ready(initialize);

  function initialize(){

    $('.play').on('click', play);
    $('.pause').click(pause);
    $('.stop').click(stop);

    clearInterval(timer);
    clearInterval(songProgressTimer);
  }

  function play(){
    var $playPause = $('#play-pause');
    if($playPause.hasClass('play')){
      $playPause
        .removeClass('play')
        .off('click', play)
        .addClass('pause')
        .on('click', pause)
        .text('Pause');
    }
    songSelected.play();
    clearInterval(timer);
    clearInterval(songProgressTimer);
    timer = setInterval(timerFunction, 1000);
    songProgressTimer = setInterval(timeProgressAnimation, getProgressInterval());
    $('#time-total').text(getDuration());
  }

  function pause(){
    var $playPause = $('#play-pause');
    if($playPause.hasClass('pause')){
      $playPause
        .removeClass('pause')
        .off('click', pause)
        .addClass('play')
        .on('click', play)
        .text('Play');
    }
    songSelected.pause();
    clearInterval(timer);
  }

  function stop(){
    var $playPause = $('#play-pause');
    songSelected.load();
    clearInterval(timer);
    clearInterval(songProgressTimer);
    resetTimeElapsed();
    if($playPause.hasClass('pause')){
      $playPause
        .removeClass('pause')
        .off('click', pause)
        .addClass('play')
        .on('click', play)
        .text('Play');
    }
  }

  function timerFunction(){
    var playbackStyle = $('#playback-style').val();

    if(songSelected.ended){
      if(playbackStyle === 'loop-song'){
        //stop();
        play();
        console.log('loop the song');
      } else {
        stop(songSelected);
      }
      console.log('song ended');
    }
    $('#time-elapsed').text(getTimeElapsed(songSelected));

  }

  function timeProgressAnimation(){
    var duration = songSelected.duration;
    var currentTime = songSelected.currentTime;
    var timePercentage = currentTime / duration;
    var $timeProgress = $('#time-progress');
    var $timeBar = $('#time-bar');
    var currentWidth = $timeProgress.css('width').split('p')[0] * 1;
    var totalWidth = $timeBar.css('width').split('p')[0] *1;
    var fillPercentage = totalWidth * timePercentage;
    //var currentHeight = $timeProgress.css('height').split('p')[0] * 1;
    var totalHeight = $timeBar.css('height').split('p')[0] *1;
    var heightPercentage = totalHeight * timePercentage;

    $timeProgress.css('height', heightPercentage);
    $timeProgress.css('width', fillPercentage);

    console.log('time animation thing: ', duration, currentTime, timePercentage, currentWidth, totalWidth, fillPercentage, $timeProgress.css('height'));
  }

  function getProgressInterval(){
    var duration = songSelected.duration;
    var timeBarWidth = $('#time-bar').css('width').split('p')[0] * 1;
    var interval = parseInt(timeBarWidth / duration);


    //console.log('get progress interval: ', duration, timeBarWidth, interval);
    return interval;
  }

  function getDuration(){
    var duration = songSelected.duration;
    var totalMinutes = Math.floor(duration / 60);
    var min = totalMinutes.toString();
    var totalSeconds = Math.floor(duration % 60);
    var sec = totalSeconds.toString();

    if(totalMinutes < 10){
      min = '0' + min;
    }
    if(totalSeconds < 10){
      sec = '0' + sec;
    }
    return (min + ':' + sec);
  }

  function getTimeElapsed(song){
    var currentTime = song.currentTime;
    var totalMinutes = Math.floor(currentTime / 60);
    var min = totalMinutes.toString();
    var totalSeconds = Math.floor(currentTime % 60);
    var sec = totalSeconds.toString();

    if(totalMinutes < 10){
      min = '0' + min;
    }
    if(totalSeconds < 10){
      sec = '0' + sec;
    }
    return (min + ':' + sec);
  }

  function resetTimeElapsed(){
    $('#time-elapsed').text('00:00');
  }

})();

