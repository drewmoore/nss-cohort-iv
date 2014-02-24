/* exported Person */

var Person = (function(){

  'use strict';

  function Person(name, gender, age, weight){
    this.name = name;
    this.gender = gender;
    this.age = age;
    this.weight = weight;
    this.foods = [];
  }

  Object.defineProperty(Person.prototype, 'crazyString', {
    get: function(){
      var newArray = [];
      newArray = _.uniq(this.foods);
      newArray = newArray.reverse();
      _.each(newArray, function(food){
        if(food.length%2===0){
          food = food.toLowerCase();
        } else {
          food = food.toUpperCase();
        }
      });
      
      return newArray.join('---');
    }
  });

  Person.prototype.eat = function(food, servings){
    this.foods.push(food);
    this.weight += Math.round((servings * food.caloriesPerServing)/3500);
  };

  Person.prototype.exercise = function(name, minutes){
    var caloriesBurned;

    if(this.gender === 'Male'){
      switch(name){
        case 'Run':
          caloriesBurned = (minutes/60)*700;
          break;
        case 'Swim':
          caloriesBurned = (minutes/60)*900;
          break;
      }
    } else {
      switch(name){
        case 'Run':
          caloriesBurned = (minutes/60)*500;
          break;
        case 'Swim':
          caloriesBurned = (minutes/60)*700;
          break;
      }
    }

    this.weight -= Math.round(caloriesBurned/3500);

  };

  return Person;
})();
