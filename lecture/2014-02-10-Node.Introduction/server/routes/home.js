'use strict';

exports.index = function(req, res){
  res.jsonp({ok:true});
};

exports.name = function(req, res){
  res.jsonp({name:'my name is node'});
};

exports.favcolor = function(req, res){
  res.jsonp({color:'pastel black'});
};

exports.sum = function(req, res){
  var total = parseFloat(req.params.a) + parseFloat(req.params.b);
  res.jsonp({sum:total});
};

exports.candrink = function(req, res){
  var result = '';

  if(parseFloat(req.params.age) <= 17){
    result = req.params.name + ' can not drink.';
  }
  
  if(parseFloat(req.params.age) > 17 && parseFloat(req.params.age) <= 20){
    result = 'Maybe ' + req.params.name + ' can drink.';
  }

  if(parseFloat(req.params.age) >= 21){
    result = req.params.name + ' can definitely drink.';
  }


  res.jsonp({result:result});
};
