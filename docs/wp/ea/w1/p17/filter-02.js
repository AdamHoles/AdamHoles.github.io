#!/usr/local/bin/node

const result = wpResults
	.filter(student => 5 === student.grade)
	.map(student => student.name);

console.log(result);
