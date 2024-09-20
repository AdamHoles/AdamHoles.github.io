#!/usr/local/bin/node
//#!/usr/bin/node

const array = [3, 5, 12, -8, 4, 1]
const negativeNumber = array.find(a => a < 0);
console.log(`negative number: ${negativeNumber}`);
console.log("// → -8");
