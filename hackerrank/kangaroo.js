let x1 = 2
let v1 = 1
let x2 = 1
let v2 = 2


function kangaroo(x1, v1, x2, v2) {
    // Write your code here
for (let i = 0; i < 10000; i++) {
    x1 += v1
    x2 += v2
    if (x1 === x2) {
        console.log("YES")
        return "YES"
    }
}
console.log("NO")
return "NO"
}

kangaroo(x1, v1, x2, v2);