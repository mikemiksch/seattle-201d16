'use strict';

var cars = [];

function Car(wheels){
  this.wheels = wheels;
  cars.push(this); // everytime I make a new instance, it pushes that instance to the cars array
};

new Car(4); // has no method called "drive"

// add a method onto any instance, existing or new, that will modify that instance.
Car.prototype.drive = function(){
  this.status = 'driving';
};

cars[0].drive(); // somehow, this car instance has access to the method, which does a thing.

new Car(2);
cars[1].drive(); // also has the method

// AN ENTIRELY SEPARATE THING!
// I want the total of all stores across all hours
// And add it to the total row as the last td element

var totalRow = document.getElementById('total-row');
var totalSales = 0;
for (var i = 1; i < totalRow.children.length; i++){
  var td = totalRow.children[i];
  var number = parseInt(td.innerText);
  totalSales += number;
}
var td = document.createElement('td');
td.innerText = totalSales;
totalRow.appendChild(td);
