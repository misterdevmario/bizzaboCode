candles = [4, 4, 1, 3];

function birthdayCakeCandles(candles) {
  // Write your code here
  let count = Math.max(...candles);
  let max = [];
  for (let i = 0; i < candles.length; i++) {
    if (candles[i] >= count) max.push(candles[i]);
  }
  console.log(max.length);
  return max.length;
}

birthdayCakeCandles(candles);
