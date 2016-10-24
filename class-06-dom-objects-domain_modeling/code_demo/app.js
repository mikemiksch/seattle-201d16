'use strict';

var car = {};
car.wheels = 4;
car.inMotion = false;
car.drive = function(){
  this.inMotion = true;
};

var car = {
  wheels: 4,
  inMotion: false,
  drive: function(){
    this.inMotion = true;
  }
};

// to update the property
car.wheels = 5;

var Car = function(){
  this.wheels = 4;
};

// THIS SECTION IS FOR DOM MANIPULATION!!!

var link = document.getElementsByTagName('a')[0];
var theURL = link.getAttribute('href');

// set a new URL on the same anchor tag
link.setAttribute('href', 'http://www.facebook.com');

// I WANT TO ADD A NEW LIST ITEM
// STEP 1: Create the List Item
var newItem = document.createElement('li');
newItem.className = 'cold meat';

// STEP 2: Add content to the list item
newItem.innerText = 'chicken';

// STEP 3: Access the unordered list I want to add to
var ul = document.getElementsByTagName('ul')[0];

// STEP 4: Append new item to the list
ul.appendChild(newItem);
setTimeout(function(){ // setTimeout runs a function after some time
  ul.removeChild(newItem);
}, 5000);
