'use strict';

var box1 = document.getElementById('box-1');
function makeBig(){
  if (this.className === 'big') {
    this.className = '';
  } else {
    this.className = 'big';
  }
}
box1.addEventListener('click', makeBig);

var box2 = document.getElementById('box-2');
box2.addEventListener('mouseover', function(){
  this.innerText = 'FLERG THAT BLERG!!!!';
});

var box3 = document.getElementById('box-3');
box3.addEventListener('click', function(){
  if (this.className === 'small') {
    this.className = '';
  } else {
    this.className = 'small';
  }
});

var box4 = document.getElementById('box-4');
box4.addEventListener('click', function(){
  this.className = 'hide-me';
});

// On mouseover it turns into a circle, and when mouseover again it turns back into a square
var box5 = document.getElementById('box-5');
box5.addEventListener('mouseover', function(){
  if (this.className === 'round'){
    this.className = '';
  } else {
    this.className = 'round';
  }
});

var box6 = document.getElementById('box-6');
box6.addEventListener('mouseover', function(){
  this.textContent = 'I am a div element! My ID attribute is ' + this.id;
});

var box7 = document.getElementById('box-7');
box7.addEventListener('mouseover', function(){
  var boxes = document.getElementsByClassName('box');
  for (var i = 0; i < boxes.length; i++) {
    boxes[i].style['background-color'] = 'black';
  }
});

var body = document.getElementsByTagName('body')[0];
body.addEventListener('mousemove', function(event){
  var box8 = document.getElementById('box-8');
  if (box8.style['background-color'] === 'black') {
    box8.style['background-color'] = 'white';
  } else {
    box8.style['background-color'] = 'black';
  }
});
