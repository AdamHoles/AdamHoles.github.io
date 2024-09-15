#!/usr/local/bin/node

const wpResults = [
	{
		name: "Henry Edwards",
		grade: 3
	},
	{
		name: "John Young",
		grade: 2
	},
	{
		name: "Noah Williams",
		grade: 4
	},
	{
		name: "Julie Moore",
		grade: 5
	},
	{
		name: "Jeffrey Roberts",
		grade: 5
	},
	{
		name: "Brandon Turner",
		grade: 3
	},
	{
		name: "Mia Wright",
		grade: 5
	},
	{
		name: "Catherine Mitchell",
		grade: 4
	},
	{
		name: "Kevin Johnson",
		grade: 4
	},
	{
		name: "Thomas James",
		grade: 5
	}
];
console.table(wpResults);

const result = wpResults
	.filter(student => 5 === student.grade)
	.map(student => student.name);

console.log(result);
