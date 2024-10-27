export const declareWinner = (arr, winnerText, player1, player2) => {
  let a = arr.map((elem) => {
    return elem.textContent;
  });
  let resultArray = [];
  if (a[0].length != 0 && a[0] == a[1] && a[0] == a[2]) {
    resultArray.push(arr[0], arr[1], arr[2]);
    arr.forEach((elem) => (elem.style.pointerEvents = "none"));
  } else if (a[3].length != 0 && a[3] == a[4] && a[3] == a[5]) {
    arr.forEach((elem) => (elem.style.pointerEvents = "none"));
    resultArray.push(arr[3], arr[4], arr[5]);
  } else if (a[6].length != 0 && a[6] == a[7] && a[6] == a[8]) {
    arr.forEach((elem) => (elem.style.pointerEvents = "none"));
    resultArray.push(arr[6], arr[7], arr[8]);
  } else if (a[0].length != 0 && a[0] == a[3] && a[0] == a[6]) {
    arr.forEach((elem) => (elem.style.pointerEvents = "none"));
    resultArray.push(arr[0], arr[3], arr[6]);
  } else if (a[1].length != 0 && a[1] == a[4] && a[1] == a[7]) {
    arr.forEach((elem) => (elem.style.pointerEvents = "none"));
    resultArray.push(arr[1], arr[4], arr[7]);
  } else if (a[2].length != 0 && a[2] == a[5] && a[2] == a[8]) {
    arr.forEach((elem) => (elem.style.pointerEvents = "none"));
    resultArray.push(arr[5], arr[2], arr[8]);
  } else if (a[0].length != 0 && a[0] == a[4] && a[0] == a[8]) {
    arr.forEach((elem) => (elem.style.pointerEvents = "none"));
    resultArray.push(arr[0], arr[4], arr[8]);
  } else if (a[2].length != 0 && a[2] == a[4] && a[2] == a[6]) {
    arr.forEach((elem) => (elem.style.pointerEvents = "none"));
    resultArray.push(arr[2], arr[4], arr[6]);
  }

  if (resultArray.some((elem) => elem.textContent == "X")) {
    winnerText.textContent = `${player1.getName()} wins!`;
    player1.increaseScore();
  } else if (resultArray.some((elem) => elem.textContent == "O")) {
    winnerText.textContent = `${player2.getName()} wins!`;
    player2.increaseScore();
  } else if (arr.every((elem) => elem.textContent.length != 0)) {
    winnerText.textContent = "DRAW!";
  }
  const change = () => {
    resultArray.forEach((elem) => {
      elem.style.border = "3px solid yellow";
    });
  };
  change();
  scoreBoard(resultArray, player1, player2);
};

const scoreBoard = (arr, player1, player2) => {
  const scoreBoardPlayerOne = document.querySelector(".player1_result");
  const scoreBoardPlayerTwo = document.querySelector(".player2_result");
  if (arr.length == 3) {
    scoreBoardPlayerOne.style.display = "grid";
    scoreBoardPlayerTwo.style.display = "grid";
    scoreBoardPlayerOne.textContent = `${player1.getName()}'s score  ${player1.getScore()}`;
    scoreBoardPlayerTwo.textContent = `${player2.getName()}'s score  ${player2.getScore()}`;
  }
};
