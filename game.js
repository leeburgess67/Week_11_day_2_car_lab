const Player = require('./player.js')
const Game = function (players, deck){
  this.players = players;
  this.deck = deck;
  this.activeHands = [];
}

Game.prototype.deal = function () {
  this.players[0].cards.push(this.deck[0]);
  this.players[1].cards.push(this.deck[1]);
  this.players[0].cards.push(this.deck[2]);
  this.players[1].cards.push(this.deck[3]);
  this.players[0].cards.push(this.deck[4]);
  this.players[1].cards.push(this.deck[5]);
};
Game.prototype.playCard = function (player){
  this.activeHands.push(player.cards.pop())
}

Game.prototype.getAttributeValue = function (attribute, index) {
  return this.activeHands[index][attribute]
};

Game.prototype.playGame = function (player1, p1Choice, player2){
  this.deal();
  this.playCard(player1);
  this.playCard(player2);

  if (this.getAttributeValue(p1Choice, 0) > this.getAttributeValue(p1Choice, 1)) {console.log("Player one wins");
  player1.cards.push(this.activeHands.pop());
  player1.cards.push(this.activeHands.pop());
  }  else if (getAttributeValue(p1Choice, 0) < getAttributeValue(p1Choice, 1))
  { console.log("Player one wins");
  player2.push(activeHands.pop());
  player2.push(activeHands.pop());
}
  else {
    player1.push(activeHands.pop());
    player1.push(activeHands.pop());

}

}


module.exports = Game;
