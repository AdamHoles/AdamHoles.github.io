#!/usr/local/bin/node

//function declaration
const add = (a, b = 3) => a + b;

//function call
console.log( add(40, 2) );
console.log("// → 42");
console.log( add(10) );
console.log("// → 13");
console.log( add(50, 20, 10) );
console.log("// → 70");
console.log( add() );
console.log("// → NaN");
