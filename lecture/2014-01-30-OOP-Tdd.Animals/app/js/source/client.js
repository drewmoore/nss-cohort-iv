/* jshint unused:false */

var Client = (function(){

  'use strict';

  function Client(name, animal){
    this.name = name;
    this.animals = [];

    Client.prototype.adopt = function(animal){
      this.animals.push(animal);
    
    
    };
   
    

    
  
  
  }




  return Client;
})();
