import { GameBoard } from "./Gameboard.js";
import { Player } from "./Player.js";

class GameFlow {
  constructor(player1, player2) {
    this.gameBoard = new GameBoard();
    this.gameBoard.createBoard();
    this.array = this.gameBoard.getGameBoardArray();
    this.gameContainer = this.gameBoard.gameContainer;
    this.player1 = player1;
    this.player2 = player2;
    this.turn = 0;
  }

  playTurn(index, player) {
    this.gameBoard.addSymbolToSquare(index, player.getSymbol());
  }

  getTurn = () => {
    return this.turn;
  };

  ticTacToe = (e) => {
    if (e.target && e.target.className.includes("square_box")) {
      let index = e.target.className.split(" ")[0].at(-1);
      if (this.turn % 2 == 0 && e.target.textContent.length == 0) {
        this.turn++;
        this.playTurn(index, this.player1);
      } else if (this.turn % 2 != 0 && e.target.textContent.length == 0) {
        this.turn++;
        this.playTurn(index, this.player2);
      } else {
        return;
      }
    }
  };
}

const form = document.querySelector("#form");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  const one = document.querySelector("#player_1");
  const two = document.querySelector("#player_2");
  const player_1 = new Player(one.value, "X");
  const player_2 = new Player(two.value, "O");
  const game = new GameFlow(player_1, player_2);
  game.gameContainer.addEventListener("click", game.ticTacToe);
  form.style.display = "None";
  game.gameBoard.body.style.justifyContent = "center";
});
