const Player = function(name){
  this.name = name;
  this.cards = [];
}



module.exports = Player;

Player.prototype.selectCard = function (){
  game.activeHands.push(player.cards.pop());
}

Player.prototype.getAttributeValue = function (attribute, index) {
  return game.activeHands[index][attribute]
};
