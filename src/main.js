import { GameBoard } from "./Gameboard.js";
import { Player } from "./Player.js";

class GameFlow {
  constructor() {
    this.gameBoard = new GameBoard();
    this.gameBoard.createBoard();
    this.array = this.gameBoard.getGameBoardArray();
    this.player;
  }

  playTurn(player) {
    this.array.forEach((elem) => {
      elem.addEventListener("click", (e) => {
        let index = e.currentTarget.className.split(" ")[0].at(-1);
        this.gameBoard.addSymbolToSquare(index, player.getSymbol());
      });
    });
  }
}
const player1 = new Player("Tom", "X");
const player2 = new Player("Bob", "O");

const game = new GameFlow();
let turn = 1;

if (turn === 1) {
  console.log(turn);
  game.playTurn(player1);
  turn = 0;
} else if (turn === 0) {
  console.log(turn);
  game.playTurn(player2);
  turn = 1;
}

// game.gameBoard.clearGameBoardArray();
