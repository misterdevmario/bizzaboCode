let arr = [1, 2, 3, 4, 5];

function miniMaxSum(arr) {
  // Write your code here
  let count = arr.reduce((a,b)=> a+b)
  let min = count - Math.min(...arr)
  let max = count - Math.max(...arr)
  console.log(min, max);

}

miniMaxSum(arr);
