const a = [2, 4];
const b = [16, 32, 96];

function getTotalX(a, b) {
  // Write your code here
  let factorA = [];
  let factorB = [];
  let factors = 0;
  for (let i = 1; i < 100; i++) {
    for (let j = 0; j < a.length; j++) {
      factorA.push(a[j] * i);
    }
    for (let k = 0; k < b.length; k++) {
      if (b[k] % i == 0) factorB.push(b[k] / i);
      
    }
  }

  let eliminateDuplicatedFactorA = new Set(factorA);
  let uniqueValuesFactorA = Array.from(eliminateDuplicatedFactorA);
  let eliminateDuplicatedFactorB = new Set(factorB);
  let uniqueValuesFactorB = Array.from(eliminateDuplicatedFactorB);
console.log(uniqueValuesFactorA)
console.log(uniqueValuesFactorB)
}

getTotalX(a, b);
