#!/usr/bin/node

const remainder = (a, b) => a < b ? a : remainder (a - b, b);

console.log( remainder(120, 24) );
console.log("// → 0");
console.log( remainder(120, 11) );
console.log("// → 10");
