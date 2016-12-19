var ForagerBee = function() {
  this = new Bee();
  this.age = 10;
  this.job = 'find pollen';
  this.canFly = true;
  this.treasureChest = [];
};

var ForagerBee.prototype.forage = function(treasure) {
  this.treasureChest.push(treasure);
};


