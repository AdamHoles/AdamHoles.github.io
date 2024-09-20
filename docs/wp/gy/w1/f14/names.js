#!/usr/local/bin/node

const array = ["Kovács János", "Nagy István", "Kis Lajos", "Tóth Péter"]

console.log(array.filter(s => s.includes("er")));

console.log(array.filter(s => s.startsWith("K")));
