
const readlineSync = require("readline-sync");

const INCHES_TO_MILLIMETERS = 25.4;

//User inputs width in inches
const widthInches = Number(readlineSync.question("\nWidth: "));
const lengthInches = Number(readlineSync.question("Length: "));

//Calculations to convert length and width to millimeters
const widthMillimeters = widthInches * INCHES_TO_MILLIMETERS;
const lengthMillimeters = lengthInches * INCHES_TO_MILLIMETERS;

//Calculation of area in millimeters
let areaMillimeters = widthMillimeters * lengthMillimeters;
areaMillimeters = areaMillimeters.toLocaleString("en", {maximumFractionDigits: 2, minimumFractionDigits: 2});

console.log(`\nA(n) ${widthInches}-by-${lengthInches}-inch sheet of paper has an area of ${areaMillimeters} square millimeter(s).\n`);
