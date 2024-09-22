const textField = document.getElementById("text");
const button = document.getElementById("btn");
const img = document.querySelector("img");
const loadImg = () => {
	img.src = textField.value
}
button.addEventListener("click", loadImg);
