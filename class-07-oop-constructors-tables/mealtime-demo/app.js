'use strict';

var ingredientCalories = {
  eggs: 78,
  bacon: 43,
  pancakes: 64,
  apple: 95,
  cheese: 113,
  'rice noodles': 192,
  chicken: 231,
  onions: 44,
  'hoisin sauce': 35,
  'hot sauce': 5,
  steak: 679,
  'potatoes': 161,
  'sweet corn': 77,
  broccoli: 70,
  carrots: 57
};

// Make an object that takes ingredients and makes a meal
// Have the option to render my meal ingredients to HTML
// Have the option to total my calories for each meal and render to the page

var Meal = function(ingredients, mealName){
  this.mealName = mealName;
  this.ingredients = ingredients;
  this.calories = 0;
  this.calcCalories = function(){
    this.calories = 0;
    for (var i = 0; i < this.ingredients.length; i++) {
      this.calories += ingredientCalories[this.ingredients[i]];
    }
  };
  this.renderMeal = function(){
    var main = document.getElementById('content');
    var newSection = document.createElement('section');
    newSection.id = this.mealName.toLowerCase().split(' ').join('-'); // takes a meal name, removes spaces, replaces those spaces with dashes, and makes it all lower case
    main.appendChild(newSection);

    var h2 = document.createElement('h2');
    h2.innerText = this.mealName;
    newSection.appendChild(h2);

    var ul = document.createElement('ul');
    newSection.appendChild(ul);
    for (var i = 0; i < this.ingredients.length; i++) {
      var li = document.createElement('li');
      li.innerText = this.ingredients[i];
      ul.appendChild(li);
    }
  };
  this.renderCalories = function(multiplier){
    if (!multiplier) {
      multiplier = 1;
    }
    this.calcCalories();
    var sectionID = this.mealName.toLowerCase().split(' ').join('-');
    var theSection = document.getElementById(sectionID);
    var pTag = document.createElement('p');
    pTag.innerText = (multiplier * this.calories) + ' calories';
    theSection.appendChild(pTag);
  };
};

// THE OLD WAY
// var breakfast = new Meal(['eggs', 'bacon', 'bacon', 'bacon', 'bacon', 'bacon', 'pancakes'], 'Breakfast');
// breakfast.renderMeal();
// breakfast.renderCalories();
//
// var lunch = new Meal(['rice noodles', 'chicken', 'onions', 'hoisin sauce', 'hot sauce'], 'Pho');
// lunch.renderMeal();
// lunch.renderCalories();
//
// var dinner = new Meal(['steak', 'potatoes', 'sweet corn', 'broccoli', 'carrots'], 'Steak and Potatoes');
// dinner.renderMeal();
// dinner.renderCalories();

var allMeals = [
  new Meal(['eggs', 'bacon', 'bacon', 'bacon', 'bacon', 'bacon', 'pancakes'], 'Breakfast'),
  new Meal(['rice noodles', 'chicken', 'onions', 'hoisin sauce', 'hot sauce'], 'Pho'),
  new Meal(['steak', 'potatoes', 'sweet corn', 'broccoli', 'carrots'], 'Steak and Potatoes')
];

for (var i = 0; i < allMeals.length; i++) {
  allMeals[i].renderMeal();
  allMeals[i].renderCalories();
}
