const num = document.getElementById("num");
const btn = document.getElementById("btn");
const table = document.querySelector("tbody");

const generateTable = () => {
	const n = num.value;
	let s = "<tr><td></td>";
	for (let i = 1; i <= n; ++i)
		s += `<td>${i}</td>`;
	s += "</tr>";
	for (let i = 1; i <= n; ++i) {
		s += "</tr>";
		s += `<td>${i}</td>`;
		for (j = 1; j <= n; ++j)
			s += `<td>${i * j}</td>`;
		s += "</tr>";
	}
	table.innerHTML += s;
}

btn.addEventListener("click", generateTable);
