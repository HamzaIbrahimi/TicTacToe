import { GameBoard } from "./Gameboard.js";
import { Player } from "./Player.js";
import { declareWinner } from "./gameWinLogic.js";

class GameFlow {
  constructor(player1, player2) {
    this.gameBoard = new GameBoard();
    this.gameBoard.createBoard();
    this.array = this.gameBoard.getGameBoardArray();
    this.gameContainer = this.gameBoard.gameContainer;
    this.player1 = player1;
    this.player2 = player2;
    this.turn = 0;
    this.whosTurn = document.querySelector("h3");
    this.whosTurn.textContent = `${player1.getName()} goes first with ${player1.getSymbol()}!`;
    this.restartButton = document.querySelector("#restart_button");
    this.form = document.querySelector("#form");
  }

  playTurn(index, player) {
    this.gameBoard.addSymbolToSquare(index, player.getSymbol());
  }

  ticTacToe = (e) => {
    if (e.target && e.target.className.includes("square_box")) {
      let index = e.target.className.split(" ")[0].at(-1);
      if (this.turn % 2 == 0 && e.target.textContent.length == 0) {
        this.whosTurn.textContent = `${this.player2.getName()}'s turn with symbol ${this.player2.getSymbol()}`;
        this.turn++;
        this.playTurn(index, this.player1);
      } else if (this.turn % 2 != 0 && e.target.textContent.length == 0) {
        this.whosTurn.textContent = `${this.player1.getName()}'s turn with symbol ${this.player1.getSymbol()}`;
        this.turn++;
        this.playTurn(index, this.player2);
      } else if (e.target.textContent.length != 0) {
        e.target.style.pointerEvents = "none";
      }
      declareWinner(this.array, this.whosTurn, this.player1, this.player2);
    }
  };

  reset = () => {
    this.gameBoard.clearGameBoardArray();
  };
}

function fullGame(e) {
  e.preventDefault();
  const one = document.querySelector("#player_1");
  const two = document.querySelector("#player_2");
  const player_1 = new Player(one.value, "X");
  const player_2 = new Player(two.value, "O");
  const game = new GameFlow(player_1, player_2);
  game.gameContainer.addEventListener("click", game.ticTacToe);
  game.form.style.display = "None";
  game.gameBoard.body.style.display = "flex";
  game.gameBoard.body.style.gap = "10px";
  game.gameBoard.body.style.justifyContent = "flex-start";
  game.gameBoard.body.style.flexDirection = "column";
  game.restartButton.style.display = "block";
  game.restartButton.addEventListener("click", () => {
    game.reset();
    game.array.forEach((elem) => {
      elem.style.pointerEvents = "";
      elem.style.border = "1px solid white";
    });
  });
}

const form_button = document.querySelector("#start_button");
form_button.addEventListener("click", fullGame);
