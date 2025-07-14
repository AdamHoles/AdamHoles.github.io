#!/usr/bin/node

const divisible = (a, b) => 0 === a % b;
console.log(`12 is divisible by 4: ${divisible(12, 4)}`);
console.log("// → true");
console.log(`13 is divisible by 3: ${divisible(13, 3)}`);
console.log("// → false");
