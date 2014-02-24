/* jshint unused:false */

var Shelter = (function(){
  
  'use strict';

  var hours;
  var animals = [];

  function Shelter(name){
    this.name = name;
    this.location = 'Not Defined';
    this.capacity = 0;

    /*  this.setHours = function(hours){
      this.hours = '';
      for(var i=0; i<hours.length; i++){
        this.hours += hours[i].day;
        this.hours += ' ';
        this.hours += hours[i].open;
        this.hours += '-';
        this.hours += hours[i].close;
        if(i === hours.length -1){
          return;
        }
        else {
          this.hours += ', ';
        }
      }
    };  */
  }

  Shelter.prototype.setHours = function(times){
    var tmpHours = _.map(times, function(time){
      return time.day+' '+time.open+'-'+time.close;
    
    });
    hours = tmpHours.join(', ');
  };

  Shelter.prototype.getHours = function(){
    return this.hours;
  
  };

  Shelter.prototype.addAnimal = function(animal){
    animals.push(animal);

  };
  
  Shelter.prototype.placeAnimal = function(name){
    var tmpAnimals = _.remove(animals, function(animal){
        return animal.name === name;
      });

    return tmpAnimals[0];
  };

  Shelter.prototype.animalCount = function(){
    return animals.length;
  
  
  };

  return Shelter;
})();


