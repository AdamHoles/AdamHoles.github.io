const num = document.getElementById("num");
const btn = document.getElementById("btn");
const table = document.querySelector("tbody");

const generateTable = () => {
	const n = num.value;
	let tr = document.createElement("tr");
	table.appendChild(tr);
	tr.appendChild(document.createElement("td"));
	for (let i = 1; i <= n; ++i) {
		const td = document.createElement("td");
		td.innerText = i;
		tr.appendChild(td);
	}
	for (let i = 1; i <= n; ++i) {
		tr = document.createElement("tr");
		table.appendChild(tr);
		let td = document.createElement("td");
		td.innerText = i;
		tr.appendChild(td);
		for (j = 1; j <= n; ++j) {
			td = document.createElement("td");
			td.innerText = i * j;
			tr.appendChild(td);
		}
	}
}

btn.addEventListener("click", generateTable);
