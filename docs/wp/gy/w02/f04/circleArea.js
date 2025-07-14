const output = document.querySelector("output");
const numField = document.getElementById("num");
const button = document.getElementById("btn");
const circleArea = () => {
	const r = numField.value;
	output.innerText = `Circle area: ${r ** 2 * Math.PI}`;
};
button.addEventListener("click", circleArea);
