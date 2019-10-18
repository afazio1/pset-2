
const readlineSync = require("readline-sync");

const IN_TO_MM = 25.4;
let width_in = Number(readlineSync.question("Width: "));
let length_in = Number(readlineSync.question("Length: "));

let width_mm = width_in * IN_TO_MM;
let length_mm = length_in * IN_TO_MM;
let area = width_mm * length_mm;

width_in = String(width_in);
length_in = String(length_in);

console.log("\nA(n) " + width_in + "-by-" + length_in + "-inch sheet of paper has an area of " + area + " square millimeter(s)." );
