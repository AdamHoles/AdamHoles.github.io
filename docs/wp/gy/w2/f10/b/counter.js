// a) variable declaration
let num = 0;
const text = document.getElementById("num");
const addBtn = document.getElementById("add");
const subtractBtn = document.getElementById("subtract");

// b) variable declaration
min = -5;
max = 5;

// b)
updateDisable = () => {
	addBtn.disabled = (max === num);
	subtractBtn.disabled = (min === num);
}

// a)
const add = () => {
	text.value = ++num;
	// b)
	updateDisable();
}

// a)
const subtract = () => {
	text.value = --num;
	// b)
	updateDisable();
}

// a)
addBtn.addEventListener("click", add);
subtractBtn.addEventListener("click", subtract);
