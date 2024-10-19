import { GameBoard } from "./Gameboard.js";
import { Player } from "./Player.js";

class GameFlow {
  constructor() {
    this.gameBoard = new GameBoard();
    this.gameBoard.createBoard();
    this.array = this.gameBoard.getGameBoardArray();
    this.gameContainer = this.gameBoard.gameContainer;
  }

  playTurn(player, index) {
    this.gameBoard.addSymbolToSquare(index, player.getSymbol());
  }
}
const player1 = new Player("Tom", "X");
const player2 = new Player("Bob", "O");

//Issue: The turns are only taking into consideration each cell item, so the switching does
//indeed occur but we need to carry this outward to all elements of the array
const game = new GameFlow();

let turn = 0;
game.gameContainer.addEventListener("click", (e) => {
  if (e.target && e.target.className.includes("square_box")) {
    let index = e.target.className.split(" ")[0].at(-1);
    if (turn % 2 == 0 && e.target.textContent.length == 0) {
      turn++;
      game.playTurn(player1, index);
    } else if (turn % 2 != 0 && e.target.textContent.length == 0) {
      turn++;
      game.playTurn(player2, index);
    } else {
      return;
    }
  }
});
