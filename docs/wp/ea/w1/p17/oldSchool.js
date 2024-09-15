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


const filterGrade5 = students => {
	const result = [];
	for (const student of students)
		if (5 === student.grade)
			result.push(student.name);
	return result;
};

console.log( filterGrade5(wpResults) );
