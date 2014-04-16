'use strict';

var _ = require('lodash');

exports.index = function(req, res){
  //var random = _.random(2, 4);
  var flags = _.sample(global.flags, 18);
  var countries = _.shuffle(flags);
  res.render('home/index', {flags:flags, countries:countries, title: 'Flags of the World'});
};

exports.match = function(req, res){
  var matched = 0;
  _.each(global.flags, function(oneFlag){
    if(req.params.name === oneFlag.country && req.params.flag === oneFlag.flag){
      matched = 1;
    }
    //console.log('each flag: ', oneFlag.country, oneFlag.flag, matched);
  });
  console.log('exports.match: ', req.params, global.flags, matched);
  res.send({matched:matched});
};

