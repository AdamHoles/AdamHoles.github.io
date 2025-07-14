const texts = document.querySelectorAll(".text");
const addBtn = document.getElementById("addrow");
const table = document.querySelector("tbody");

const addRow = () => {
	let row = table.insertRow();
	texts.forEach(text => row.insertCell().textContent = text.value);
};

addBtn.addEventListener("click", addRow);
