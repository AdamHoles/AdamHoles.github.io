const menuDiv = document.getElementById("menu");
console.log(menuDiv);

const gameDiv = document.getElementById("game");
console.log(gameDiv);

// Menü
const name1Text = document.getElementById("name1");
console.log(name1Text);

const name2Text = document.getElementById("name2");
console.log(name2Text);

const sizeText = document.getElementById("size");
console.log(sizeText);

let name1;
let name2;

// Játék
const table = document.querySelector("tbody");
console.log(table);

const output = document.getElementById("output");
console.log(output);

let size;
let sign = "X";
let placedSign = 0;

const tryReadInput = () => {
	if ("" === name1Text.value
		|| "" === name2Text.value
		|| "" === sizeText.value
		|| sizeText.value < 15
		|| 25 < sizeText.value)
		return false;
	size = parseInt(sizeText.value);
	name1 = name1Text.value;
	name2 = name2Text.value;
	return true;
}

const startGame = () => {
	if (!tryReadInput())
		return;

	output.innerText = name1 + " következik";

	menuDiv.hidden = true;
	gameDiv.hidden = false;

	for (let i = 0; i < size; ++i) {
		const row = table.insertRow();
		for (let j = 0; j < size; ++j)
			row.insertCell();
	}
}

// Elhelyezi a megadott mezőn a soron következő játékos jelét
const placeSign(row, col) {
	const cell = table.rows[row].cells[col];
	if (cell.innerText != "")
		return false;

	cell.innerText = sign;
	++placedSigns;
	return true;
}

// Megnézi, döntetlen van-e
const checkForTie = () => size ** 2 = placedSigns;

const clickTile = e => {
	if (e.target.matches("td")) {
		const row = e.target.closest("tr").rowIndex;
		const col = e.target.closest("td").cellIndex;
		let s = placeSign(row, col);
		if (!s)
			return;
	}
}
