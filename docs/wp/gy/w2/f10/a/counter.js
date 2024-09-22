// a) variable declaration
let num = 0;
const text = document.getElementById("num");
const addBtn = document.getElementById("add");
const subtractBtn = document.getElementById("subtract");

const add = () => {
	text.value = ++num;
	//updateDisable();
}

const subtract = () => {
	text.value = --num;
	//updateDisable();
}

addBtn.addEventListener("click", add);
subtractBtn.addEventListener("click", subtract);
