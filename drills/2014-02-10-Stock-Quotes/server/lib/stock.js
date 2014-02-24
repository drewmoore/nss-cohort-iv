function Stock(symbol){
  this.symbol = symbol;
  this.price = (200*Math.rand())+50;

}

module.exports = Stock;
