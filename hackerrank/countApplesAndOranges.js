const apples = [2, 3, -4];
const oranges = [3, -2, -4];
const s = 7;
const t = 10;
const a = 4;
const b = 12;

function countApplesAndOranges(s, t, a, b, apples, oranges) {
  // Write your code here
  let countA = 0;
  let countB = 0;
  apples.map((apple) => {
    if (apple + a >= s && apple + a <= t) countA += 1;
  });
  oranges.map((orange) => {
    if (orange + b >= s && orange + b <= t) countB += 1;
  });
  console.log(countA);
  console.log(countB);
}

countApplesAndOranges(s, t, a, b, apples, oranges);
