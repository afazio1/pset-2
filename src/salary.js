//this needs revision
//something with 401k pre-tax

const readlineSync = require("readline-sync");

const PRETAX = 0.07;
const FEDERAL_INCOME_TAX = 0.157;
const STATE_INCOME_TAX = 0.0447;
const SOCIAL_SECURITY_TAX = 0.062;
const MEDICARE_TAX = 0.0145;
const PAY_PERIODS_PER_YEAR = 24;


let userAnnualSalary = Number(readlineSync.question("\nAnnual Salary: "));
//let userPeriodicSalary = userAnnualSalary / PAY_PERIODS_PER_YEAR;

let preTaxSalary = userAnnualSalary - (userAnnualSalary * PRETAX);
console.log(preTaxSalary);
let totalDeductionPercentage = FEDERAL_INCOME_TAX + STATE_INCOME_TAX + SOCIAL_SECURITY_TAX + MEDICARE_TAX;
console.log(totalDeductionPercentage);
takeHomePay = (preTaxSalary - (preTaxSalary * totalDeductionPercentage)) / PAY_PERIODS_PER_YEAR;
console.log(takeHomePay);
takeHomePay = takeHomePay.toLocaleString("en", { style: "currency", currency: "USD" });


console.log("\nYour take-home pay each check will be " + takeHomePay + ".");
