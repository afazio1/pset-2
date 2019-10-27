const readlineSync = require("readline-sync");

//Tax percentages
const CONTRIBUTION_401K = 0.07;
const FEDERAL_INCOME_TAX = 0.157;
const STATE_INCOME_TAX = 0.0447;
const SOCIAL_SECURITY_TAX = 0.062;
const MEDICARE_TAX = 0.0145;
const PAY_PERIODS_PER_YEAR = 24;

//User inputs their annual salary
const userAnnualSalary = Number(readlineSync.question("\nAnnual Salary: "));

//The annual salary after 401k contribution(pretax) is applied
const preTaxSalary = userAnnualSalary - (userAnnualSalary * CONTRIBUTION_401K);

//Total percentage of tax that will be applied to the pretax salary
const totalDeductionPercentage = FEDERAL_INCOME_TAX + STATE_INCOME_TAX + SOCIAL_SECURITY_TAX + MEDICARE_TAX;

//take home pay calculation
let takeHomePay = (preTaxSalary - (preTaxSalary * totalDeductionPercentage)) / PAY_PERIODS_PER_YEAR;
takeHomePay = takeHomePay.toLocaleString("en", { style: "currency", currency: "USD" });

console.log(`\nYour take-home pay each check will be ${takeHomePay}.\n`);
