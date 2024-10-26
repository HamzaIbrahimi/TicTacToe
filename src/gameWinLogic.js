const declareWinner = (arr) => {
  let a = arr.map((elem) => {
    return elem.textContent;
  });
  let resultArray = [];
  if (a[0].length != 0 && a[0] == a[1] && a[0] == a[2]) {
    console.log("Winner");
    resultArray.push(arr[0], arr[1], arr[2]);
    arr.forEach((elem) => (elem.style.pointerEvents = "none"));
  } else if (a[3].length != 0 && a[3] == a[4] && a[3] == a[5]) {
    arr.forEach((elem) => (elem.style.pointerEvents = "none"));
    resultArray.push(arr[3], arr[4], arr[5]);
    console.log("Winner");
  } else if (a[6].length != 0 && a[6] == a[7] && a[6] == a[8]) {
    arr.forEach((elem) => (elem.style.pointerEvents = "none"));
    resultArray.push(arr[6], arr[7], arr[8]);
    console.log("Winner");
  } else if (a[0].length != 0 && a[0] == a[3] && a[0] == a[6]) {
    arr.forEach((elem) => (elem.style.pointerEvents = "none"));
    resultArray.push(arr[0], arr[3], arr[6]);
    console.log("Winner");
  } else if (a[1].length != 0 && a[1] == a[4] && a[1] == a[7]) {
    arr.forEach((elem) => (elem.style.pointerEvents = "none"));
    resultArray.push(arr[1], arr[4], arr[7]);
    console.log("Winner");
  } else if (a[2].length != 0 && a[2] == a[5] && a[2] == a[8]) {
    arr.forEach((elem) => (elem.style.pointerEvents = "none"));
    resultArray.push(arr[5], arr[2], arr[8]);
    console.log("Winner");
  } else if (a[0].length != 0 && a[0] == a[4] && a[0] == a[8]) {
    arr.forEach((elem) => (elem.style.pointerEvents = "none"));
    resultArray.push(arr[0], arr[4], arr[8]);
    console.log("Winner");
  } else if (a[2].length != 0 && a[2] == a[4] && a[2] == a[6]) {
    arr.forEach((elem) => (elem.style.pointerEvents = "none"));
    resultArray.push(a[2], a[4], a[6]);
    console.log("Winner");
  }
};
