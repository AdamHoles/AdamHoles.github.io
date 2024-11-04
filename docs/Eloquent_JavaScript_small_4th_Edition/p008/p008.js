#!/usr/bin/node

const range = (from, to) => {
	const retVal = [];
	for (let i = from; i <= to; ++i)
		retVal.push(i);
	return retVal;
}

const sum = arr => arr.reduce((accumulator, currentValue) => accumulator + currentValue, 0);

console.log(sum(range(1, 10)));
console.log("// → 55");
