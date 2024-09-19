#!/usr/bin/node

const lcm = (a, b) => {
	let x = a;
	let y = b;
	while (x !== y)
		if (x < y)
			x += a;
		else
			y += b;
	return x;
};

console.log(lcm(4, 3));
console.log("// → 12");
