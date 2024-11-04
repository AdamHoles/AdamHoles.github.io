#!/usr/bin/node

const factorial = n => 0 === n ? 1 : factorial(n - 1) * n;
console.log(factorial(8));
console.log("// → 40320");
