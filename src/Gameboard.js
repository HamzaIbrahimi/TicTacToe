export class GameBoard {
  constructor() {
    this.body = document.body;
    this.gameContainer = document.querySelector("#game_container");
    this.gameBoardArray = [];
  }

  createBoard() {
    for (let i = 0; i < 9; i++) {
      const div = document.createElement("div");
      div.className = `square_${i + 1} square_box`;
      this.gameContainer.appendChild(div);
      this.gameBoardArray.push(div);
    }
  }

  getGameBoardArray() {
    return this.gameBoardArray;
  }
}
