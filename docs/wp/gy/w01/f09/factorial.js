#!/usr/bin/node

const factorial = n => 0 === n ? 1 : factorial(n - 1) * n;

console.log( factorial(7) );
console.log("// → 5040");
