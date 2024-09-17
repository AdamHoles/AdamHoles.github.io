#!/usr/bin/node

const triangle = (a, b, c) => a < b + c && b < a + c && c < a + b;
a = parseInt(prompt("a"));
b = parseInt(prompt("b"));
c = parseInt(prompt("c"));
if (triangle(a, b, c))
	console.log("Can make triangle.");
else
	console.log("Can't make triangle.");
