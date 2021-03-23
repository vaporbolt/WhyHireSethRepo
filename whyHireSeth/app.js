'use strict'
var audio = new Audio('please_hire_me.mp3');

function play() {
    var audio = document.getElementById("audio");
    audio.play();
    console.log('playing')
  }