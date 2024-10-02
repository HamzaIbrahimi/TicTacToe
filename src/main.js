import { GameBoard } from "./Gameboard.js";
import { Player } from "./Player.js";

const gameBoard = new GameBoard();
gameBoard.createBoard();
const player = new Player("Tom", "X");
console.log(player.getPlayerSymbol());

console.log(gameBoard.getGameBoardArray());
