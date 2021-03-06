/* global test:false, deepEqual:false, asyncTest:false, ok:false, start:false, stop:false, Stock:false, Portfolio:false, Client:false */

'use strict';

test('Stock#new', function() {
  var s1 = new Stock('AAPL', 50, 25);

  ok(s1 instanceof Stock, 's1 should be an instance of Stock');
  deepEqual(s1.symbol, 'AAPL', 's1 sould be AAPL');
  deepEqual(s1.shares, 50, 's1 should have 50 shares');
  deepEqual(s1.purchaseAmount, 25, 's1 was purchased at $25');

});

asyncTest('Stock#value', function(){
  var s1 = new Stock('AAPL', 50, 25);
  s1.value(function(val){
    ok(val > 0, 'The value of the stock should at least exist.');
    start();
  });
});

test('Portfolio#new', function(){
  var p1 = new Portfolio('Tech Stocks');

  ok(p1 instanceof Portfolio);
  deepEqual(p1.name, 'Tech Stocks', 'p1 should have the name Tech Stocks');
  deepEqual(p1.stockCount, 0, 'p1 should not have any stocks yet.');
});

test('Portfolio#addStocks', function(){
  var p1 = new Portfolio('Tech Stocks');
  var s1 = new Stock('AAPL', 200, 50);
  var s2 = new Stock('AMZN', 350, 100);
  var s3 = new Stock('GOOG', 250, 120);
  var s4 = new Stock('MSFT', 150, 30);

  p1.addStock(s1);
  p1.addStock(s2);
  p1.addStock([s3, s4]);

  deepEqual(p1.stockCount, 4, 'p1 should have 4 stocks.');

});

test('Portfolio#getStock', function(){
  var p1 = new Portfolio('Tech Stocks');
  var s1 = new Stock('AAPL', 200, 50);
  var s2 = new Stock('AMZN', 350, 100);
  var s3 = new Stock('GOOG', 250, 120);
  var s4 = new Stock('MSFT', 150, 30);

  p1.addStock(s1);
  p1.addStock(s2);
  p1.addStock([s3, s4]);

  var s5 = p1.getStock('AAPL');
  var s6 = p1.getStock('ZZZ');
  var stocks = p1.getStock(['AMZN', 'GOOG']);

  deepEqual(s5.symbol, 'AAPL', 'should find aapl');
  ok(!s6, 'should not find zzzz');
  deepEqual(stocks.length, 2, 'should find 2 stocks');
  deepEqual(stocks[0].symbol, 'AMZN', 'should get amzn');
  deepEqual(stocks[1].symbol, 'GOOG', 'should get goog');
});

test('Portfolio#delStock', function() {
  var p1 = new Portfolio('Tech Stocks');
  var s1 = new Stock('AAPL', 50, 20);
  var s2 = new Stock('AMZN', 150, 25);
  var s3 = new Stock('GOOG', 250, 30);
  var s4 = new Stock('MSFT', 350, 35);

  p1.addStock(s1);
  p1.addStock(s2);
  p1.addStock([s3, s4]);

  var s5 = p1.delStock('AAPL');
  var s6 = p1.delStock('ZZZZ');
  var stocks = p1.delStock(['AMZN', 'GOOG']);

  deepEqual(p1.stockCount, 1, 'should have 1 remaining stock');
  deepEqual(s5.symbol, 'AAPL', 'should find aapl');
  ok(!s6, 'should not find zzzz');
  deepEqual(stocks.length, 2, 'should remove 2 stocks');
  deepEqual(stocks[0].symbol, 'AMZN', 'should get amzn');
  deepEqual(stocks[1].symbol, 'GOOG', 'should get goog');
});


test('Client#new', function() {
  var c1 = new Client('Bob Smith');

  ok(c1 instanceof Client, 'c1 should be an instance of Client');
  deepEqual(c1.name, 'Bob Smith', 'c1 should have a name');
  deepEqual(c1.portfolioCount, 0, 'c1 should have no portfolios');
});

test('Client#addPortfolio', function() {
  var c1 = new Client('Bob Smith');
  var p1 = new Portfolio('Tech Stocks');
  var p2 = new Portfolio('Health Stocks');
  var p3 = new Portfolio('Energy Stocks');
  var s1 = new Stock('AAPL', 50, 20);
  var s2 = new Stock('AMZN', 150, 25);
  var s3 = new Stock('GOOG', 250, 30);
  var s4 = new Stock('MSFT', 350, 35);
  var s5 = new Stock('AET', 10, 50);

  p1.addStock(s1);
  p1.addStock(s2);
  p1.addStock([s3, s4]);
  p2.addStock(s5);
  c1.addPortfolio(p1);
  c1.addPortfolio([p2, p3]);

  deepEqual(c1.portfolioCount, 3, 'should have 3 portfolios');
});


test('Client#getPortfolio', function() {
  var c1 = new Client('Bob Smith');
  var p1 = new Portfolio('Tech Stocks');
  var p2 = new Portfolio('Health Stocks');
  var p3 = new Portfolio('Energy Stocks');
  var s1 = new Stock('AAPL', 50, 20);
  var s2 = new Stock('AMZN', 150, 25);
  var s3 = new Stock('GOOG', 250, 30);
  var s4 = new Stock('MSFT', 350, 35);
  var s5 = new Stock('AET', 10, 50);

  p1.addStock(s1);
  p1.addStock(s2);
  p1.addStock([s3, s4]);
  p2.addStock(s5);
  c1.addPortfolio(p1);
  c1.addPortfolio([p2, p3]);

  var px = c1.getPortfolio('Tech Stocks');
  var py = c1.getPortfolio('Does Not Exist');
  var pz = c1.getPortfolio(['Health Stocks', 'Energy Stocks']);

  deepEqual(px.name, 'Tech Stocks', 'should find tech portfolio');
  ok(!py, 'should not find bad portfolio');
  deepEqual(pz.length, 2, 'should find 2 portfolios');
  deepEqual(pz[0].name, 'Health Stocks', 'should get health portfolio');
  deepEqual(pz[1].name, 'Energy Stocks', 'should get energy portfolio');
});

test('Client#delPortfolio', function() {
  var c1 = new Client('Bob Smith');
  var p1 = new Portfolio('Tech Stocks');
  var p2 = new Portfolio('Health Stocks');
  var p3 = new Portfolio('Energy Stocks');
  var p4 = new Portfolio('Space Stocks');
  var s1 = new Stock('AAPL', 50, 20);
  var s2 = new Stock('AMZN', 150, 25);
  var s3 = new Stock('GOOG', 250, 30);
  var s4 = new Stock('MSFT', 350, 35);
  var s5 = new Stock('AET', 10, 50);

  p1.addStock(s1);
  p1.addStock(s2);
  p1.addStock([s3, s4]);
  p2.addStock(s5);
  c1.addPortfolio(p1);
  c1.addPortfolio([p2, p3, p4]);

  var px = c1.delPortfolio('Tech Stocks');
  var py = c1.delPortfolio('Does Not Exist');
  var pz = c1.delPortfolio(['Health Stocks', 'Energy Stocks']);

  deepEqual(c1.portfolioCount, 1, 'should have 1 remaining portfolio');
  deepEqual(px.name, 'Tech Stocks', 'should find tech portfolio');
  ok(!py, 'should not find bad portfolio');
  deepEqual(pz.length, 2, 'should find 2 portfolios');
  deepEqual(pz[0].name, 'Health Stocks', 'should get health portfolio');
  deepEqual(pz[1].name, 'Energy Stocks', 'should get energy portfolio');
});

asyncTest('Client#purchaseStock', function() {
  stop();
  var c1 = new Client('Bob Smith', 100000);
  c1.purchaseStock('AAPL', 50, function(stock){
    ok(stock instanceof Stock, 'should be a stock');
    deepEqual(stock.shares, 50, 'should be 50 shares');
    deepEqual(stock.symbol, 'AAPL', 'should be aapl');
    ok(c1.cash < 100000, 'should have less than $100k');
    start();
  });

  var c2 = new Client('Bob Smith', 100000);
  c2.purchaseStock('AAPL', 25000, function(stock){
    ok(!stock, 'should not be a stock');
    deepEqual(c2.cash, 100000, 'should have $100k');
    start();
  });
});

asyncTest('Client#sellStock', function() {
  var c1 = new Client('Bob Smith', 100000);
  var s1 = new Stock('AAPL', 50, 250);
  c1.sellStock(s1, 10, function(stock){
    ok(stock instanceof Stock, 'should be a stock');
    deepEqual(stock.shares, 40, 'should be 40 shares');
    deepEqual(stock.symbol, 'AAPL', 'should be aapl');
    ok(c1.cash > 100000, 'should have less than $100k');
    start();
  });
});
