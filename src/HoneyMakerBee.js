var HoneyMakerBee = function() {
  this = new Bee();
  this.age = 10;
  this.job = 'make honey';
  this.honeyPot = 0;
};

var HoneyMakerBee.prototype.makeHoney = function() {
  this.honeyPot++;
};

var HoneyMakerBee.prototype.giveHoney = function() {
  this.honeyPot--;
};

