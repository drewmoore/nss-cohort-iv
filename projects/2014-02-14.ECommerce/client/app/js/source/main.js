(function(){

  'use strict';

  $(document).ready(initialize);

  var usersOnPage = [];
  var gadgetsOnPage = [];

  function initialize(){
    $(document).foundation();
    $('#create-user').click(createUser);
    $('#create-gadget').click(createGadget);
    $('#finalize-purchase').click(finalizePurchase);

    getUsers();
    getGadgets();
  }

  function getUsers(){
    var url = window.location.origin.replace(/[0-9]{4}/, '4000') + '/users';
    $.getJSON(url, displayUsers);
  }

  function displayUsers(data){
    $('#user-info > tbody').empty();

    for(var i=0; i<data.users.length; i++){
      var userData = _.map(data.users[i]);
      var $tr = $('<tr>');
      var $option = $('<option>');

      for(var x=0; x<userData.length; x++){
        var $td = $('<td>');

        if(x < userData.length - 1){
          $td.text(userData[x]);
          $tr.append($td);
        }
      }
      $tr.addClass('users-displayed');
      $('#user-info > tbody').append($tr);
      $('#user-info > tbody > tr')[i].userid = data.users[i]._id;

      $option.text(data.users[i].name);
      $('#user-menu').append($option);
      $('#user-menu > option')[i].userid = data.users[i]._id;

      usersOnPage.push(data.users[i]);
    }
  }

  function getGadgets(){
    var url = window.location.origin.replace(/[0-9]{4}/, '4000') + '/gadgets';
    $.getJSON(url, displayGadgets);
  }

  function displayGadgets(data){
    var dataNames = _.uniq(_.map(data.gadgets, function(oneGadget){return oneGadget.name;}));
    var dataPrices = [];
    _.each(dataNames, function(oneName){
      dataPrices.push((_.find(data.gadgets, function(oneGadget){return oneGadget.name === oneName;}).price));
    });
    var dataQuantities = _.map(_.map(dataNames, function(name){return _.filter(data.gadgets, function(gadget){if(gadget.name === name){return gadget;}});}), function(array){return array.length;});

    $('#gadget-info > tbody').empty();

    for(var i=0; i<dataNames.length; i++){
      var $tr = $('<tr>');
      var $td = $('<td>');
      var $td2 = $('<td>');
      var $td3 = $('<td>');
      var $td4 = $('<td>');

      $td.css('background-image', 'url(/media/cart.png)');
      $td.css('background-repeat', 'no-repeat');
      $td.css('background-size', 'contain');
      $td2.text(dataNames[i]);
      $td3.text(dataPrices[i]);

      $td4.text(dataQuantities[i]);
      $td4.addClass('quantityBox');

      $tr.append($td);
      $tr.append($td2);
      $tr.append($td3);
      $tr.append($td4);
      $tr.addClass('gadgets-displayed');
      $('#gadget-info > tbody').append($tr);
      $('#gadget-info > tbody > tr')[i].name = dataNames[i];
      gadgetsOnPage.push(dataNames[i]);
    }
    $('.gadgets-displayed').on('click', gadgetClicked);
  }

  function createUser(event){
    var username = $('#username-input').val();
    var deposit = $('#deposit-input').val();
    var url = window.location.origin.replace(/[0-9]{4}/, '4000') + '/users';
    var type = 'POST';
    var success = newUser;
    var data = {username: username, deposit: deposit};

    $.ajax({url: url, type: type, data: data, success: success});

    event.preventDefault();
  }

  function createGadget(event){
    var gadgetname = $('#gadgetname-input').val();
    var price = $('#gadgetprice-input').val();
    var quantity = $('#gadgetquantity-input').val();
    var url = window.location.origin.replace(/[0-9]{4}/, '4000') + '/gadgets';
    var type = 'POST';
    var success = newGadget;
    var data = {name: gadgetname, price: price, quantity: quantity};

    $.ajax({url: url, type: type, data: data, success: success});

    event.preventDefault();
  }


  function newUser(data){
    var userData = _.map(data);
    var $tr = $('<tr>');
    var $option = $('<option>');

    for(var i=0; i<userData.length; i++){

      var $td = $('<td>');

      if(i < userData.length - 1){
        $td.text(userData[i]);
        $tr.append($td);
      }
    }
    $('#user-info > tbody').prepend($tr);
    $('#user-info > tbody > tr')[0].userid = data._id;

    $option.text(data.name);
    $('#user-menu').prepend($option);
    $('#user-menu > option')[0].userid = data._id;
    usersOnPage.push(data);
  }

  function newGadget(data){
    var alreadyThere = false;
    for(var i=0; i<gadgetsOnPage.length; i++){
      if(data.name === gadgetsOnPage[i]){
        alreadyThere = true;
      }
    }

    if(alreadyThere !== true){
      var $tr = $('<tr>');
      var $td = $('<td>');
      var $td2 = $('<td>');
      var $td3 = $('<td>');
      var $td4 = $('<td>');


      $td.css('background-image', 'url(/media/cart.png)');
      $td.css('background-repeat', 'no-repeat');
      $td.css('background-size', 'contain');
      $td2.text(data.name);
      $td3.text(data.price);

      $td4.addClass('quantityBox');

      $tr.append($td);
      $tr.append($td2);
      $tr.append($td3);
      $tr.append($td4);
      $tr.addClass('gadgets-displayed');
      $('#gadget-info > tbody').prepend($tr);
      //$('#gadget-info > tbody > tr')[0].gadgetid = data._id;
      $('#gadget-info > tbody > tr')[0].gadgetname = data.name;
      gadgetsOnPage.unshift(data.name);

      callQuantity(data.name);
    } else {
      callQuantity(data.name);
    }
    $('.gadgets-displayed').on('click', gadgetClicked);
  }

  function callQuantity(name){
    findQuantity(name, function(obj){
      var tr = _.find($('.gadgets-displayed'), function(tr){
        return tr.gadgetname === name;
      });
      var target = _.find($(tr).find('td'), function(aTd){return $(aTd).hasClass('quantityBox');});
      $(target).text(obj.length);
    });
  }

  function findQuantity(name, callback){
    var url = window.location.origin.replace(/[0-9]{4}/, '4000') + '/quantity/' + name;
    $.getJSON(url, callback);
  }

  function gadgetClicked(){
    var toPurchase = this;
    var name = $(toPurchase).find('td:nth-child(2)').text();
    var price = $(toPurchase).find('td:nth-child(3)').text();
    var quantity = $(toPurchase).find('td:nth-child(4)').text();

    $('#thing-to-buy').empty();
    $('#thing-to-buy').empty();
    $('#quantity-menu').empty();

    $('#thing-to-buy').val(name);
    $('#thing-to-buy').data('price', price);

    for(var i=1; i<=quantity; i++){
      var $option = $('<option>');
      $option.text(i);
      $('#quantity-menu').append($option);
    }
  }

  function finalizePurchase(){
    var gadget = $('#thing-to-buy').val();
    var user = ($('#user-menu').find(':selected')[0].userid).toString();
    var quantity = $('#quantity-menu').val();
    var type = 'PUT';
    var url = window.location.origin.replace(/[0-9]{4}/, '4000') + '/order';
    var success = reflectPurchase;
    var data = {gadget: gadget, user: user, quantity: quantity};

    $.ajax({url: url, type: type, data: data, success: success});
  }

  function reflectPurchase(data){
    var errorDiv = $('#error');

    if(data.gadget === 'error'){
      if(errorDiv.hasClass('hide')){
        errorDiv.removeClass('hide');
        errorDiv.addClass('visible');
      }
    } else {
      if(errorDiv.hasClass('visible')){
        errorDiv.removeClass('visible');
        errorDiv.addClass('hide');
      }

      //object returned should have gadget, user id, new customer balance, new array of purchases


    }

    callQuantity(data.gadget);

    console.log('reflectPurchase:', data);
  }

})();

