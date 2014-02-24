/* global Animal: false */
(function(){
  
  'use strict';

  window.animalFactory = function(){
    var animals = [];
    var animal;
    var photos;
    
    photos = [];
    photos[0] = 'url(http://upload.wikimedia.org/wikipedia/en/thumb/a/a6/Odie_the_Dog.svg/150px-Odie_the_Dog.svg.png)';
    photos[1] = 'url(http://www.toonopedia.com/garfield.jpg)';
    animal = new Animal('Fido', 3, 'male', photos, 'happy dog', 'brown', 'dog');
    animals.push(animal);

    photos = [];
    photos[0] = 'url(http://cdn-www.dailypuppy.com/media/dogs/anonymous/brogan_shepherdpit13.jpg_w450.jpg)';
    photos[1] = 'url(http://thatmutt.com/web/wp-content/uploads/2009/08/shepherd-mix1.JPG)';
    animal = new Animal('Sequoia', 4, 'female', photos, 'crazy dog', 'red', 'dog');
    animals.push(animal);


    photos = [];
    photos[0] = 'url(http://oddstuffmagazine.com/wp-content/uploads/2012/01/1320.jpg)';
    photos[1] = 'url(http://zuzutop.com/wp-content/uploads/2009/12/pet-lion-05.jpg)';
    animal = new Animal('Timba', 6, 'male', photos, 'dangerous', 'brown', 'lion');
    animals.push(animal);

    return animals;
  };

})();
