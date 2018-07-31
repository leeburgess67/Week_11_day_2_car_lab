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

Game.prototype.decideWinner = function (player) {
this.activeHands.push(chosenCard)
}


Game.prototype.playGame = function (player1, p1Choice, player2){
  // 3 cards dealt to each
  this.deal();
  // Pop 1 card into activehands array for each player
  player1.selectCard()
  player2.selectCard()

  if (getAttributeValue(p1Choice, 0) > getAttributeValue(p1Choice, 1)) {console.log("Player one wins");
  player1.push(activeHands.pop());
  player1.push(activeHands.pop());
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
