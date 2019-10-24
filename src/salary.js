//this needs revision
//something with 401k pre-tax

const readlineSync = require("readline-sync");

const CONTRIBUTION_401K = 0.07;
const FEDERAL_INCOME_TAX = 0.157;
const STATE_INCOME_TAX = 0.0447;
const SOCIAL_SECURITY_TAX = 0.062;
const MEDICARE_TAX = 0.0145;
const NUMBER_OF_PAY_PERIODS_PER_YEAR = 24;


let userAnnualSalary = readlineSync.question("\nAnnual Salary: ");
let totalDeductionPercentage = CONTRIBUTION_401K + FEDERAL_INCOME_TAX + STATE_INCOME_TAX + SOCIAL_SECURITY_TAX + MEDICARE_TAX;
//console.log(totalDeductionPercentage);
let takeHomePay = (userAnnualSalary - (userAnnualSalary * totalDeductionPercentage)) / NUMBER_OF_PAY_PERIODS_PER_YEAR;
takeHomePay = takeHomePay.toLocaleString({maximumFractionDigits: 2, minimumFractionDigits: 2});


console.log("\nYour take-home pay each check will be " + takeHomePay + ".");

   
