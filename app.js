'use strict';

// located here as a global value that can be used for all locations
var hours = ['6am' ,'6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];
//functions: cookiesPerHour, predictedCustomers, renderHTMLSales
var cookiesPerHour = function (minCust , maxCust, avgCookieSales){
  this.storeName = 'first-and-pike',
  this.minCust = 23,
  this.maxCust = 65,
  this.avgCookieSales = 6.3,
  this.dailyCookieSalesPerHour = [];
  this.randomCustPerHour = function() {
    return Math.floor(Math.random() * (this.maxCust - this.minCust) + this.minCust);
  };

//generate
var randomCookieSalesPerHour = function (){
  for (var i = 0; i < hours.length; i++){
    this.dailyCookieSalesPerHour.push(Math.floor(this.randomCustPerHour() * this.avgCookieSales));
    console.log(hours[i] + this.dailyCookieSalesPerHour[i]);
  }
}
};
cookiesPerHour();

  //  li.innerText = hours[i] + ': ' + this.dailySales[i] + ' cookies';
