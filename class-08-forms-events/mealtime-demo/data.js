'use strict';

var ingredientCalories = {
  eggs: 78, bacon: 43, pancakes: 64, apple: 95, 'cheddar cheese': 113,
  'rice noodles': 192, chicken: 231, onions: 44, 'hoisin sauce': 35,
  steak: 679, 'potatoes': 161, 'sweet corn': 77, broccoli: 70, carrots: 57,
  rice: 206, spaghetti: 221, 'tomato sauce': 92, gnocci: 250, beets: 59,
  salmon: 412, tilapia: 112, bread: 66, bagel: 289, banana: 105,
  'green beans': 40, oatmeal: 147, 'pork chop': 221, 'lamb chop': 250,
  shrimp: 84, tuna: 100, 'chicken wing': 43, grits: 143, lobster: 129,
  pear: 102, waffle: 82, 'maple syrup': 52, quinoa: 222, 'potato salad': 357,
  'french fries': 365, 'sweet potato fries': 390, sausage: 229, beer: 153,
  wine: 123, 'ice cream': 137, gumbo: 136, salsa: 35, maduros: 218,
  'fried plantains': 164, yucca: 101, spinach: 7, 'collard greens': 11,
  coleslaw: 291, sushi: 304, 'chili with beans': 287, 'hot sauce': 5
};

function makeFoodTable(){
  var main = document.getElementById('table-goes-here');
  var table = document.createElement('table');
  table.id = 'ingredients-table';
  main.appendChild(table);

  var tHead = document.createElement('thead');
  table.appendChild(tHead);

  var headRow = document.createElement('tr');
  tHead.appendChild(headRow);

  var tableTitle = document.createElement('td');
  tableTitle.innerText = 'Ingredients and Calories';
  tableTitle.setAttribute('colspan', 20);
  headRow.appendChild(tableTitle);

  var tBody = document.createElement('tbody');
  table.appendChild(tBody);

  var everyIngredient = Object.keys(ingredientCalories);

  for (var i = 0; i < everyIngredient.length; i++) {
    if (i % 10 === 0) {
      var newTr = document.createElement('tr');
      tBody.appendChild(newTr);
    }
    var foodTd = document.createElement('td');
    foodTd.innerText = everyIngredient[i];
    foodTd.className = 'food';

    var calTd = document.createElement('td');
    calTd.innerText = ingredientCalories[everyIngredient[i]];
    calTd.className = 'data';

    newTr.appendChild(foodTd);
    newTr.appendChild(calTd);
  }
};

makeFoodTable();

// make form to collect ingredients and make a meal
// on submission, form displays meal on the page with name, ingredients and total calories.
