
const readlineSync = require("readline-sync");

const INCHES_TO_MM = 25.4;
let width_in = Number(readlineSync.question("\nWidth: "));
let length_in = Number(readlineSync.question("Length: "));

let width_mm = width_in * INCHES_TO_MM;
let length_mm = length_in * INCHES_TO_MM;
let area = width_mm * length_mm;
area = area.toFixed(2);
area = area.toLocaleString();

console.log("\nA(n) " + width_in + "-by-" + length_in + "-inch sheet of paper has an area of " + area + " square millimeter(s).\n" );

