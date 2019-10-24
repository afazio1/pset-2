const LENGTH = 48;
const WIDTH = 24;
const DIAMETER = 6;
//l*w - pir^2

let boardArea = LENGTH * WIDTH;
let radius = DIAMETER / 2;
let circleArea = Math.PI * (radius ** 2);

let cornholeSurfaceArea = boardArea - circleArea;
cornholeSurfaceArea = cornholeSurfaceArea.toLocaleString("en", {maximumFractionDigits: 2, minimumFractionDigits: 2});
console.log("The surface area of a standard Cornhole board is " + cornholeSurfaceArea + " square inch(es).");
