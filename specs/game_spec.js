const assert = require('assert');
const Game = require('../game.js');
const Player =  require('../player.js');
const Card =  require('../card.js');

describe('game', function (){

  let game;
  let player1;
  let player2;
  let card1;
  let card2;
  let card3;
  let card4;
  let card5;
  let card6;

  beforeEach(function(){
    player1 = new Player("Bob");
    player2 = new Player("Terry");
    card1 = new Card('superman', 6, 9, 7);
    card2 = new Card('scarlet witch', 7, 10, 5);
    card3 = new Card('black widow', 8, 6, 9);
    card4 = new Card('The Flash',  7, 4, 10);
    card5 = new Card('Wonder Woman',  8, 7, 5);
    card6 = new Card('Batman',  10,  5, 6);
    game = new Game([player1, player2])
  })

  it('should have 2 players', function(){
    const result = game.players.length;
    assert.strictEqual(result, 2);
  });

});
