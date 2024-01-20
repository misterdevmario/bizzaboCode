const arr = [
  [1, 2, 3], 
  [4, 5, 6], 
  [9, 8, 9]
];

function diagonalDifference(arr) {
let secDiagArr = [...arr].reverse()
  let firstDiag = 0;
  let secondDiag = 0;
  //First diagonal
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if(i == j)firstDiag += arr[i][j]
    }
  }
  //Second diagonal
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if(i == j)secondDiag += secDiagArr[i][j]
    }
  }
  return Math.abs(firstDiag-secondDiag)
}

diagonalDifference(arr);
