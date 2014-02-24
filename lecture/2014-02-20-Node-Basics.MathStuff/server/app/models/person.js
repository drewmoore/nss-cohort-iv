'use strict';

var Person = function(person){
  this.name = person.name;
  this.age = person.age;
  this.gender = person.gender;
};

Person.prototype.save = function(fn){
  var db = global.mdb;
  var people = db.collection('people');

  people.insert(this, function(err, records){
    fn(records[0]);
  });
};

Person.prototype.canDrink = function(person){
  if(this.age < 18){
    return 'No';
  }
  if(this.age >= 21){
    return 'Hell yeah';
  } else {
    return 'Maybe...';
  }
};

module.exports = Person;
