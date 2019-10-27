const readlineSync = require("readline-sync");

//User inputs length and width
const width = Number(readlineSync.question("\nWidth: "));
const length = Number(readlineSync.question("Length: "));

//Calculates the hypotenuse which is the diagonal
let diagonal = Math.hypot(width, length);
diagonal = diagonal.toLocaleString("en", {maximumFractionDigits: 2, minimumFractionDigits: 2});

console.log("\nA(n) " + width + "-by-" + length + "-inch sheet of paper has a diagonal of " + diagonal + " inch(es).\n" );
