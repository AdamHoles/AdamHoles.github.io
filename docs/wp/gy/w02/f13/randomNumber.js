const rand = Math.floor(Math.random() * 100) + 1;
const guess = document.getElementById("num");
const guessBtn = document.getElementById("guess");
const output = document.querySelector("output");
guessBtn.addEventListener("click", () => output.innerText = guess.value < rand ? "Guess is smaller." : guess.value > rand ? "Guess is bigger." : "Match.");
