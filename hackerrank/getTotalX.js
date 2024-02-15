const a = [2, 6];
const b = [24, 36];

function getTotalX(a, b) {
  const factorA = [];
  const factorB = [];
  const factors = [];

  // Write your code here
  for (let i = 0; i < 10; i++) {
    for (let j = 1; j < 100; j++) {
      if (a[i] !== undefined && a[i] % j == 0) factorA.push(j);
      if (b[i] !== undefined && b[i] % j == 0) factorB.push(j);
    }
  }
  const arrAB = [...a, ...b];
  const commonFactors = Array.from(new Set([...factorA, ...factorB]));

console.log(arrAB, commonFactors)
}

getTotalX(a, b);
