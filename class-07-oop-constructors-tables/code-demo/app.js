var hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];

var pike = {
  name: '1st and Pike',
  maxCust: 65,
  minCust: 23,
  avgCookies: 6.3,
  dailySales: [],
  randomNumCust: function(){
    return Math.floor(Math.random() * (this.maxCust - this.minCust) + this.minCust);
  },
  calcCookieSales: function(){
    for (var i = 0; i < hours.length; i++) {
      this.dailySales.push(Math.floor(this.randomNumCust() * this.avgCookies));
    }
  },
  renderHTMLSales: function(){
    // Calculate all the cookie sales
    this.calcCookieSales();

    // Attaching the store name as an h2
    var h2 = document.createElement('h2');
    h2.innerText = this.name;
    var main = document.getElementsByTagName('main')[0];
    main.appendChild(h2);

    // Attaching list items with cookie sales per hour
    var ul = document.createElement('ul');
    for (var i = 0; i < hours.length; i++) {
      var li = document.createElement('li');
      li.innerText = hours[i] + ': ' + this.dailySales[i] + ' cookies';
      ul.appendChild(li);
    }

    // Calculating and attaching total cookie sales
    var totalSales = 0;
    for (var i = 0; i < this.dailySales.length; i++){
      totalSales += this.dailySales[i];
    }
    var li = document.createElement('li');
    li.innerText = 'Total Sales: ' + totalSales + ' cookies';
    ul.appendChild(li);

    // Append ul to the DOM
    main.appendChild(ul);
  }
};

var h1 = document.createElement('h1');
h1.innerText = 'All Cookie Stores';
var main = document.getElementsByTagName('main')[0];
main.appendChild(h1);

pike.renderHTMLSales();
