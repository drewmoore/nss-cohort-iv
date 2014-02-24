/* exported Client */
/* global Stock:false */

var Client = (function(){

  'use strict';

  function Client(name, cash){
    this._name = name;
    this._portfolios = [];
    this.cash = cash;
  }

  Object.defineProperty(Client.prototype, 'name', {
    get: function(){return this._name;}
  });

  Object.defineProperty(Client.prototype, 'portfolioCount', {
    get: function(){return this._portfolios.length;}
  });

  Client.prototype.addPortfolio = function(input){
    this._portfolios = this._portfolios.concat(input);
  };

  Client.prototype.getPortfolio = function(input){
    var output;

    if(typeof input === 'string'){
      output = findPortfolio(input, this._portfolios);
    } else {
      output = _.map(input, function(portfolio){
        return findPortfolio(portfolio, this._portfolios);
      }, this);
    }

    return output;
  };

  Client.prototype.delPortfolio = function(input){
    var portfolios = [].concat(input);
    var output = _.remove(this._portfolios, function(portfolio){
      return _.contains(portfolios, portfolio.name);
    });

    if(typeof input === 'string'){
      output = output[0];
    }

    return output;

  };

  function findPortfolio(input, portfolios){
    return _.find(portfolios, function(portfolio){
      return portfolio.name === input;
    });
  }

  Client.prototype.purchaseStock = function(symbol, amount, fn){
    var self = this;
    var url = 'http://dev.markitondemand.com/Api/v2/Quote/jsonp?symbol='+symbol+'&callback=?';

    $.getJSON(url, function(quote){
      var stock;
      var total = amount * quote.LastPrice;

      if(self.cash - total >= 0){
        stock = new Stock(symbol, amount, quote.LastPrice);
        self.cash -= total;
      }
      fn(stock);
    });
  };

  Client.prototype.sellStock = function(stock, amount, fn){
    var self = this;
    var url = 'http://dev.markitondemand.com/Api/v2/Quote/jsonp?symbol='+stock.symbol+'&callback=?';

    $.getJSON(url, function(quote){
      if(amount <= stock._shares){
        var total = amount * quote.LastPrice;
        self.cash += total;
        stock._shares -= amount;
      }

      fn(stock);
    });
  };

  return Client;

})();
