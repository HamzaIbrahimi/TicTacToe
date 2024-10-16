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
      elem.addEventListener(
        "click",
        (e) => {
          let index = e.currentTarget.className.split(" ")[0].at(-1);
          this.gameBoard.addSymbolToSquare(index, player.getSymbol());
        },
        { once: true }
      );
    });
  }
}
const player1 = new Player("Tom", "X");
const player2 = new Player("Bob", "O");

const game = new GameFlow();

game.array.forEach((elem) => {
  elem.addEventListener(
    "click",
    (e) => {
      let place = e.currentTarget.className.split(" ")[0].at(-1);
      if (place % 2 == 0) {
        game.playTurn(player2);
        console.log(place);
      } else {
        console.log(place);
        game.playTurn(player1);
      }
    },
    { once: true }
  );
});
// game.gameBoard.clearGameBoardArray();
