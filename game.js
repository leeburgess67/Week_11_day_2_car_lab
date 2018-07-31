const Game = function (players, deck){
  this.players = players;
  this.deck = deck;
}

Game.prototype.deal = function () {
  this.players[0].cards.push(this.deck[0]);
  this.players[1].cards.push(this.deck[1]);
  this.players[0].cards.push(this.deck[2]);
  this.players[1].cards.push(this.deck[3]);
  this.players[0].cards.push(this.deck[4]);
  this.players[1].cards.push(this.deck[5]);
};

module.exports = Game;
