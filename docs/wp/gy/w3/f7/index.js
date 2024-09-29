let x = true;
const onClick = e => {
	if ("" === e.target.innerText) {
		e.target.innerText = x ? "X" : "O";
		x = !x;
	}
};
document.querySelector("tbody").addEventListener("click", onClick);
