'use strict';

// located here as a global value that can be used for all locations
var hours = ['6am' ,'6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];

var Pike = {
  name: 'first-and-pike',
  minCust: 23,
  maxCust: 65,
  avgCookieSales: 6.3,
  cookiesPerHour: [],
// calculate and store the avg number of customers per hour
  predictedCustomers: function() {
    return Math.Floor(Math.random() * (this.maxCust - this.minCust) + this.minCust);
    console.log('hello');
    // randomNumCust: function()
  }
// calculate and store the avg number of cookie sales per hour
  calcCookiesPerHour: function() {
    for (var i = 0; i < hours.length ; i++) {
      var cookies = Math.Floor(this.avgCookieSales * this.predictedCustomers());
      this.cookiesPerHour.push(Math.floor(this.predictedCustomers() * this.cookies));
    }
  }
};


renderHTMLSales: fucnction(){
  this.calcCookiesPerHour():
  var h2 = document.createElement('h2')
  h2.innerText = this.name;
  var ul = document.createElement('ul');
  main.appendChild(ul);
  for (var i = 0; i < hours.length; i++)
  var li = document.createElement('li');
  li.innerText = hours[i] + ': ' + this.calcCookiesPerHour[i] + 'cookies';
  ul.appendChild(li);

}

for var = 0; i < dailySales.lenth; i++){
  totalSales += this.dailySales[i];
  ul.appendChild(li);
}

function createHtml(){
  var h1 = document.createElement('h1');
  h1.innerText = "All Cookie Stores";
  main.appendChild(h1);
  var h2 = document.createElement('h2');
  h2.innerText = 'Pike';
  var main = document.getElementsByTagName('main')[0];
  main.appendChild(h2);
  var ul = document.createElement('ul');
  var hourlySales = calcCookiesPerHour();
  var li = document.createElement(hourlySales[i]);
  ;
}
pike.predictedCustomers();
pike.calcCookiesPerHour();
pike.renderHTMLSales();
