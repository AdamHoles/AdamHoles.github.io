let num = 0;
const text = document.getElementById("num");
const addBtn = document.getElementById("add");
const subtractBtn = document.getElementById("subtract");

const min = 0;
const max = 500;

const delay = 800;
const rate = 100;
let delayTimer;
let rateTimer;

const killTimers = () => {
	clearTimeout(delayTimer);
	clearTimeout(rateTimer);
}

updateDisable = () => {
	addBtn.disabled = (max === num);
	subtractBtn.disabled = (min === num);

	if (min === num || max === num)
		killTimers()
}

const add = () => {
	textValue = ++num;
	updateDisable();
}

const subtract = () => {
	textValue = --num;
	updateDisable();
}

addBtn.addEventListener("click", add);
subtractBtn.addEventListener("click", subtract);
