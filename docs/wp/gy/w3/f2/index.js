const px = document.querySelector("body > p:nth-of-type(1) > span");
const time = document.querySelector("body > p:nth-of-type(2) > span");

let prevX = 0;
let prevY = 0;
let distSum = 0;
let clicks = 0;

let prevT = 0;
let tSum = 0;
const calcAvgDist = e => {
	console.log(`e.screenX - prevX: ${e.screenX} - ${prevX}, e.screenY - prevY: ${e.screenY} - ${prevY}`);
	distSum += Math.sqrt((e.screenX - prevX) ** 2 + (e.screenY -prevY) ** 2);
	px.innerText = distSum / clicks;
	prevX = e.screenX
	prevY = e.screenY
};
const calcAvgTime = e => {
	if (0 === prevT)
		prevT = Date.now();
	tSum += Date.now() - prevT;
	time.innerText = tSum / clicks / 1_000;
	prevT = Date.now();
};
const onClick = e => {
	++clicks;
	calcAvgDist(e);
	calcAvgTime(e);
};
document.addEventListener("click", onClick);
