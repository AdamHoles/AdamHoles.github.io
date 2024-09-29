const p = document.querySelector("p");

const onClick = e => {
	// a)
	console.log(this);
	// b)
	console.log(e.type);
	// c)
	console.log(e.button);
	// d)
	console.log(`${e.screenX}, ${e.screenY}`);
	// e)
	console.log(e.target);
	// f)
	if (e.target.matches("p span"))
		console.log(e.target.innerText);
	// g)
	if (e.target.matches("p a"))
		if ("libero" === e.target.innerText)
			e.preventDefault();
};

p.addEventListener("click", onClick);
