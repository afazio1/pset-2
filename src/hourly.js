const readlineSync = require("readline-sync");

const HOURLY_WAGE = Number(readlineSync.question("\nHourly wage: "));

//user's work hours for each day of the week
let mondayHours = Number(readlineSync.question("\nMonday: "));
let tuesdayHours = Number(readlineSync.question("Tuesday: "));
let wednesdayHours = Number(readlineSync.question("Wednesday: "));
let thursdayHours = Number(readlineSync.question("Thursday: "));
let fridayHours = Number(readlineSync.question("Friday: "));
let saturdayHours = Number(readlineSync.question("Saturday: "));
let sundayHours = Number(readlineSync.question("Sunday: "));

//the money the user makes each day based on their hours and hourly wage
let mondayEarnings = mondayHours * HOURLY_WAGE;
let tuesdayEarnings = tuesdayHours * HOURLY_WAGE;
let wednesdayEarnings = wednesdayHours * HOURLY_WAGE;
let thursdauEarnings = thursdayHours * HOURLY_WAGE;
let fridayEarnings = fridayHours * HOURLY_WAGE;
let saturdayEarnings = saturdayHours * HOURLY_WAGE;
let sundayEarnings = sundayHours * HOURLY_WAGE;

//the total money the user earns, which is the sum of their daily earnings
let totalWeekSalary = mondayEarnings + tuesdayEarnings + wednesdayEarnings + thursdayEarnings + fridayEarnings + saturdayEarnings + sundayEarnings;
totalWeekSalary = totalWeekSalary.toLocaleString({maxiumFractionDigits: 2, minimumFractionDigits: 2});

console.log("\nYou'll make " + "$" + totalWeekSalary + " this week.");
