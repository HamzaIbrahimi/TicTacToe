export class GameBoard {
  constructor() {
    this.body = document.body;
    this.gameContainer = document.querySelector("#game_container");
    this.gameBoardArray = [];
  }

  createBoard() {
    for (let i = 0; i < 9; i++) {
      const div = document.createElement("div");
      div.className = `square_${i} square_box`;
      this.gameContainer.appendChild(div);
      this.gameBoardArray.push(div);
    }
  }

  addSymbolToSquare(squareNum, symbol) {
    this.gameBoardArray[squareNum].textContent = symbol;
    this.gameBoardArray[
      squareNum
    ].style.cssText = `color: yellow; font-size: 70px; display:grid; place-items: center; font-family: "Roboto", sans-serif, times-new-roman`;
  }

  clearGameBoardArray() {
    this.gameBoardArray.forEach((val) => {
      val.textContent = "";
    });
  }
}
