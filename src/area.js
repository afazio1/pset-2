
const readlineSync = require("readline-sync");

const INCHES_TO_MILLIMETERS = 25.4;
let widthInches = Number(readlineSync.question("\nWidth: "));
let lengthInches = Number(readlineSync.question("Length: "));

let widthMillimeters = widthInches * INCHES_TO_MILLIMETERS;
let lengthMillimeters = lengthInches * INCHES_TO_MILLIMETERS;
let areaMillimeters = widthMillimeters * lengthMillimeters;
areaMillimeters = areaMillimeters.toLocaleString("en", {maximumFractionDigits: 2, minimumFractionDigits: 2});

console.log("\nA(n) " + widthInches + "-by-" + lengthInches + "-inch sheet of paper has an area of " + areaMillimeters + " square millimeter(s).\n" );
