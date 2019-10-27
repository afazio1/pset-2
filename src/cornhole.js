//Given dimensions
const LENGTH = 48;
const WIDTH = 24;
const DIAMETER = 6;

//Calculations for board area and hole area
const boardArea = LENGTH * WIDTH;
const radius = DIAMETER / 2;
const holeArea = Math.PI * (radius ** 2);

//Calculations for cornhole board surface area
let cornholeSurfaceArea = boardArea - holeArea;
cornholeSurfaceArea = cornholeSurfaceArea.toLocaleString("en", {maximumFractionDigits: 2, minimumFractionDigits: 2});
console.log("\nThe surface area of a standard Cornhole board is " + cornholeSurfaceArea + " square inch(es).\n");
