let x;
let arr = [];
let players;
const startBtn = document.getElementById("startBtn");

const steps = document.getElementById("steps");
const currentPlayer = document.getElementById("currentPlayer");

const table = document.querySelector("tbody");

let turnedUp = 0;
let prevCell;
let canPlay = true;

const onClick = e => {
	// ha cellára klikkeclünk, nem várunk és a cella üres
	if (e.target.matches("td") && canPlay && "" === e.target.innerText) {
		// cella kiszámolása
		const row = e.target.closest("tr").rowIndex;
		const col = e.target.closest("td").cellIndex;
		const cell = table.rows[row].cells[col];
		// beírjuk a cellába az értéket
		cell.innerText = arr[row * x + col];
		// felfordítottuk
		++ turnedUp;
		// Ha párosat forsdíttunk fel eddig
		if (0 === turnedUp % 2) {
			// léptünk
			++ steps.innerText;
			// a következő játékos jön
			currentPlayer.innerText = steps.innerText % players + 1;
			// ha nem ugyanolyan értékeket fordítotttunk fel
			if (cell.innerText != prevCell.innerText) {
				// várunk
				canPlay = false;
				setTimeout(() => {
					canPlay = true;
					cell.innerText = "";
					prevCell.innerText = "";
				}, 500);
				// bezár, ez nem számít helyes lépésnek, -2
				turnedUp -= 2;
			} else if (x ** 2 === turnedUp)
				// kész ha az összes fel van fordítva
				steps.innerText += " Kész";
		} else
			prevCell = cell
	}
}

const setup = () => {
	startBtn.disabled = "true";
	x = document.getElementById("size").value;
	if (0 !== x ** 2 % 2)
		return;
	players = parseInt(document.getElementById("players").value);
	table.innerHTML = "";
	for (let i = 0; i < x; ++i) {
		const row = table.insertRow();
		for (let j = 0; j < x; ++j)
			row.insertCell();
	}
	
	// tömb 0--17-ig, felhasználva a .keys(), tömb index mint érték
	arr = [...Array(x ** 2 / 2).keys()];
	// megduplázzunk a tömböt vagyis minden szám kétszer szerepel
	arr = arr.concat(arr);
	console.log(arr);

	// hátulról megyünk előre
	for (let i = x ** 2 - 1; i > 0; --i) {
		// a j egy random szám a maradék elemek közül
		let j = Math.floor(Math.random() * i + 1);
		// felcseréljük randomot meg a számot
		[arr[i], arr[j]] = [arr[j], arr[i]];
	}
	console.log(arr);
	currentPlayer.innerText = 1;
}

startBtn.addEventListener("click", setup);
table.addEventListener("click", onClick);
