const readlineSync = require("readline-sync");

const INCHES_TO_CENTIMETERS = 2.54;

//User inputs width and length in inches
const widthInches = Number(readlineSync.question("\nWidth: "));
const lengthInches = Number(readlineSync.question("Length: "));

//Calculations to convert width and length to centimeters
const widthCentimeters = widthInches * INCHES_TO_CENTIMETERS;
const lengthCentimeters = lengthInches * INCHES_TO_CENTIMETERS;

//Calculation of perimeter in centimeters
let perimeter = (2 * lengthCentimeters) + (2 * widthCentimeters);
perimeter = perimeter.toLocaleString("en", {maxiumFractionDigits: 2, minimumFractionDigits: 2});

console.log("\nA(n) " + widthInches + "-by-" + lengthInches + "-inch sheet of paper has a perimeter of " + perimeter + " centimeter(s).\n" );
