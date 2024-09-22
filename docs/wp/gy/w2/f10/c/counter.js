// a) variable declarations
let num = 0;
const text = document.getElementById("num");
const addBtn = document.getElementById("add");
const subtractBtn = document.getElementById("subtract");

// b) variable declarations
min = -50;
max = 50;

// c) variable declarations
const delay = 800;
const rate = 100;
let delayTimer;
let rateTimer;

// c)
const killTimers = () => {
	clearTimeout(delayTimer);
	clearTimeout(rateTimer);
};

// b)
updateDisable = () => {
	addBtn.disabled = (max === num);
	subtractBtn.disabled = (min === num);

	//c)
	if ((min === num) || (max === num))
		killTimers()
};
updateDisable();

// a)
const add = () => {
	text.value = ++num;
	// b)
	updateDisable();
};

// a)
const subtract = () => {
	text.value = --num;
	// b)
	updateDisable();
};

// a)
addBtn.addEventListener("click", add);
subtractBtn.addEventListener("click", subtract);

// c)
addBtn.addEventListener("mousedown", () => {
	delayTimer = setTimeout (() => {
		rateTimer = setInterval(add, rate);
	}, delay);
});
addBtn.addEventListener("mouseup", killTimers);

subtractBtn.addEventListener("mousedown", () => {
	delayTimer = setTimeout (() => {
		rateTimer = setInterval(subtract, rate);
	}, delay);
});
subtractBtn.addEventListener("mouseup", killTimers);
