import { GameBoard } from "./Gameboard.js";
import { Player } from "./Player.js";

const gameBoard = new GameBoard();
gameBoard.createBoard();
const player = new Player("Tom", "X");
const player1 = new Player("Bob", "O");
const board = gameBoard.getGameBoardArray();
// board.forEach((b) => {
//   b.addEventListener("click", (e) => {
//     let index = e.currentTarget.className.split(" ")[0].at(-1);
//     console.log(index);
//     gameBoard.addSymbolToSquare(index, player.getPlayerSymbol());
//   });
// });
// console.log(board[0].textContent);

const form = document.querySelector("#form");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  console.log("hello");
});
