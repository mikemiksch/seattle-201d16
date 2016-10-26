'use strict';

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
    var sectionID = 'food-section';
    var theSection = document.getElementById(sectionID);
    var pTag = document.createElement('p');
    pTag.innerText = (multiplier * this.calories) + ' calories';
    theSection.appendChild(pTag);
  };
};

// where we started

var ingredientArray = [];

var form = document.getElementById('the-form');
function harvestForm(event){
  event.preventDefault();
  var ingredient = event.target[1].value;

  if (ingredientCalories[ingredient.toLowerCase()]) {
    ingredientArray.push(ingredient.toLowerCase());
    event.target[1].value = '';
  } else {
    alert('That\'s not an ingredient!');
  }
};
form.addEventListener('submit', harvestForm);

var btn = document.getElementById('make-meal');
function makeMeal(event){
  if (ingredientArray.length !== 0) {
    var meal = new Meal(ingredientArray, 'Some Name');
    meal.renderCalories();
    ingredientArray = [];
  } else {
    alert('You have no ingredients!');
  }
};
btn.addEventListener('click', makeMeal);
