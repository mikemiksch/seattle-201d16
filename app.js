'use strict';
var hours = ['6am' ,'6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];

var Pike = {
  minCust: 23,
  maxCust: 65,
  avgCookieSales: 6.3,
  cookiesPerHour: [],

  predictedCustomers: function() {
    return Math.Floor(Math.random() * (this.maxCust - this.minCust) + this.minCust);
  },
  calcCookiesPerHour: function(){
    for (var i = 0; i < hours.length ; i++){
      var cookies = Math.Floor(this.avgCookieSales * this.predictedCustomers());
      this.cookiesPerHour.push(cookies);
    }
  }
};
calcCookiesPerHour();

// function createHtml(){
//   var h2 = document.createElement('h2');
//   h2.innerText = 'Pike';
//   var main = document.getElementsByTagName('main')[0];
//   main.appendChild(h2);
//   var ul = document.createElement('ul');
//   ;
// }
// createHtml();
