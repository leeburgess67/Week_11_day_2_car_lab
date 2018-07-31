const Player = function(name){
  this.name = name;
  this.cards = [];
}

Player.prototype.choose = function (attribute) {
  return this.cards[0][attribute]
};

module.exports = Player;
