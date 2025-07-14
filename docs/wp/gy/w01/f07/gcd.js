#!/usr/bin/node

const gcd = (a, b) => {
	if (a < b)
		[a, b] = [b, a];
	let remainder = a % b;
	while (remainder > 0) {
		a = b;
		b = remainder;
		remainder = a % b;
	}
	return b;
}

console.log(`gcd(12, 38): ${gcd(12, 38)}`);
console.log("// → 2");
