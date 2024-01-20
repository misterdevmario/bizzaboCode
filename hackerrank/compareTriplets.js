let a = [5, 6, 7];
let b = [10, 6, 10];

function compareTriplets(a, b) {
  let result = [0, 0];
  for (let i = 0; i < a.length; i++) {
    if (a[i] > b[i]) result[0] = result[0] + 1;
    if (a[i] < b[i]) result[1] = result[1] + 1;
    console.log(result);
}
return result;
}

compareTriplets(a, b);
