#!/usr/bin/node
//#!/usr/local/bin/node

const array = [3, 5, 12, -8, 4, 1];

const countEven = array.reduce((accumulator, currentValue) => accumulator + (0 === currentValue % 2 ? 1 : 0), 0);
console.log(`Even numbers: ${countEven}.`);
console.log("// → 3");
