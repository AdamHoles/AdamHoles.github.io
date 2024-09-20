const output = document.querySelector("output");
const numField = document.getElementById("num");
const button = document.getElementById("btn");
const szia = () => {
	for (let i = 0; i < numField.value; ++i) {
		const p = document.createElement("p");
		p.textContent = "Szia, Világ!";
		p.style.fontSize = 12 + i + "px";
		output.appendChild(p);
	}
};
button.addEventListener("click", szia);
