#!/usr/local/bin/node


const filterGrade5 = students => {
	const result = [];
	for (const student of students)
		if (5 === student.grade)
			result.push(student.name);
	return result;
};

console.log( filterGrade5(wpResults) );
