const readlineSync = require("readline-sync");

const hourlyWage = Number(readlineSync.question("\nHourly wage: "));

//User's work hours for each day of the week
const mondayHours = Number(readlineSync.question("\nMonday: "));
const tuesdayHours = Number(readlineSync.question("Tuesday: "));
const wednesdayHours = Number(readlineSync.question("Wednesday: "));
const thursdayHours = Number(readlineSync.question("Thursday: "));
const fridayHours = Number(readlineSync.question("Friday: "));
const saturdayHours = Number(readlineSync.question("Saturday: "));
const sundayHours = Number(readlineSync.question("Sunday: "));

//The money the user makes each day based on their hours and hourly wage
const mondayEarnings = mondayHours * hourlyWage;
const tuesdayEarnings = tuesdayHours * hourlyWage;
const wednesdayEarnings = wednesdayHours * hourlyWage;
const thursdayEarnings = thursdayHours * hourlyWage;
const fridayEarnings = fridayHours * hourlyWage;
const saturdayEarnings = saturdayHours * hourlyWage;
const sundayEarnings = sundayHours * hourlyWage;

//The total money the user earns, which is the sum of their daily earnings
let totalWeekSalary = mondayEarnings + tuesdayEarnings + wednesdayEarnings + thursdayEarnings + fridayEarnings + saturdayEarnings + sundayEarnings;
totalWeekSalary = totalWeekSalary.toLocaleString("en", { style: "currency", currency: "USD" });

console.log(`\nYou'll make ${totalWeekSalary} this week.\n`);
