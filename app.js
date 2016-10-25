'use strict';

// located here as a global value that can be used for all locations
var hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];
//functions: cookiesPerHour, predictedCustomers, renderHTMLSales
function Location(storeName, minCust , maxCust, avgCookieSales){
  this.storeName = storeName;
  this.minCust = minCust;
  this.maxCust = maxCust;
  this.avgCookieSales = avgCookieSales;
  this.dailyCookieSalesPerHour = [];
  this.randomCustPerHour = function() {
    return Math.floor(Math.random() * (this.maxCust - this.minCust) + this.minCust);
  };
  //build table within this function
  this.forEachHour = function forEachHour (){
    for (var i = 0; i < hours.length; i++) {
      console.log(hours[i] + this.dailyCookieSalesPerHour[i]);
    }
  };
//generate randomCookiesSalesPerHour
  this.randomCookieSalesPerHour = function (){
    for (var i = 0; i < hours.length; i++){
      this.dailyCookieSalesPerHour.push(Math.floor(this.randomCustPerHour() * this.avgCookieSales));
      // console.log(hours[i] + this.dailyCookieSalesPerHour[i]);
    }
  };
};

var allLocations = [
  new Location('Sea Tac', 23, 59, 4),
  new Location('Pike', 34, 87, 9),
];

function forEachLocation() {
  for (var i = 0; i < allLocations.length; i++){
    console.log(allLocations[i]);
    allLocations[i].randomCookieSalesPerHour();
    allLocations[i].forEachHour();
  }
}
forEachLocation();

// forEachHour();
// Other way to do the same thing:
// var location1 = new Location();
// var location2 = new Location();
// var allLocations = [
//   location1,
//   location2
// ];

console.log('allLocations: ', allLocations);

for (var i = 0; i < hours.length; i++){
  console.log('this: ');
  console.log('hours[i]: ', hours[i]);
  console.log('this.dailyCookieSalesPerHour: ', this.dailyCookieSalesPerHour);
  console.log('this.dailyCookieSalesPerHour[i]: ', this.dailyCookieSalesPerHour[i]);
  // (hours[i] + this.dailyCookieSalesPerHour[i]);
  // hours[i].cookiesPerHour();
  // hours[i].randomCookieSalesPerHour();
}

// var allMeals = [
//   new Meal(['eggs', 'bacon', 'bacon', 'bacon', 'bacon', 'bacon', 'pancakes'], 'Breakfast'),
//   new Meal(['rice noodles', 'chicken', 'onions', 'hoisin sauce', 'hot sauce'], 'Pho'),
//   new Meal(['steak', 'potatoes', 'sweet corn', 'broccoli', 'carrots'], 'Steak and Potatoes')
// ];
//
// for (var i = 0; i < allMeals.length; i++) {
//   allMeals[i].renderMeal();
//   allMeals[i].renderCalories();
// }
