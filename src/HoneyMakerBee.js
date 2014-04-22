var HoneyMakerBee = function() {
  /* START SOLUTION */
  Bee.call(this);  

  this.age = 10;
  this.job = 'make honey';
  this.honeyPot = 0;
  /* END SOLUTION */
};
/* START SOLUTION */
HoneyMakerBee.prototype = Object.create(Bee.prototype);
HoneyMakerBee.prototype.constructor = HoneyMakerBee;

HoneyMakerBee.prototype.makeHoney = function() {
  this.honeyPot++;
};

HoneyMakerBee.prototype.giveHoney = function() {
  this.honeyPot--;
};
/* END SOLUTION */