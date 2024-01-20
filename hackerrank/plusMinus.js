let arr = [1, 1, 0, -1, -1];

function plusMinus(arr) {
  let positive = 0;
  let negative = 0;
  let zero = 0;
  for (let i = 0; i < arr.length; i++) {
      if(arr[i] > 0) positive += 1
      if(arr[i] < 0) negative += 1
      if(arr[i] === 0) zero += 1
  }
  //return`${(positive/arr.length).toFixed(6)}\n${(negative/arr.length).toFixed(6)}\n${(zero/arr.length).toFixed(6)}`;
  console.log((positive/arr.length).toFixed(6));
  console.log((negative/arr.length).toFixed(6));
  console.log((zero/arr.length).toFixed(6));
}
plusMinus(arr)
