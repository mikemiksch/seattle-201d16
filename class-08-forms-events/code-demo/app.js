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
