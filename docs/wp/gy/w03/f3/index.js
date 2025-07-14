const ul = document.getElementById("fruits");

let x = false;
let prev
const onClick = e => {
	if (e.target.matches("#fruits > li")) {
		if (!x) {
			prev = e.target;
			x = true;
		} else {
			let temp = prev.innerText;
			prev.innerText = e.target.innerText;
			e.target.innerText = temp;
			// [prev.innerText, e.target.innertText] = [e.target.innerText, prev.innerText];
			x = false;
		}
	}
};

ul.addEventListener("click", onClick);
