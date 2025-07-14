const num = document.getElementById("num");
const btn = document.getElementById("btn");
const table = document.querySelector("tbody");

const generateTable = () => {
	const n = num.value;
	let row = table.insertRow();
	row.insertCell();
	for (let i = 1; i <= n; ++i)
		row.insertCell().textContent = i;
	for (let i = 1; i <= n; ++i) {
		row = table.insertRow();
		row.insertCell().textContent = i;
		for (j = 1; j <= n; ++j)
			row.insertCell().textContent = i * j;
	}
}

btn.addEventListener("click", generateTable);
