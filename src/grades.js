const readlineSync = require("readline-sync");

const HOMEWORK_WEIGHT = 0.15;
const QUIZ_WEIGHT = 0.35;
const TEST_WEIGHT = 0.5;

//homework grades
let hwGrade1 = Number(readlineSync.question("\nEnter three homework grades.\n"));
let hwGradeTwo = Number(readlineSync.question(""));
let hwGradeThree = Number(readlineSync.question(""));

//quiz grades
let quizGradeOne = Number(readlineSync.question("\nEnter three quiz grades.\n"));
let quizGradeTwo = Number(readlineSync.question(""));
let quizGradeThree = Number(readlineSync.question(""));

//test grades
let testGradeOne = Number(readlineSync.question("\nEnter three test grades.\n"));
let testGradeTwo = Number(readlineSync.question(""));
let testGradeThree = Number(readlineSync.question(""));

//weigth calculations
let finalHwGrade = ((hwGradeOne + hwGradeTwo + hwGradeThree) / 3) * HOMEWORK_WEIGHT;
let finalQuizGrade = ((quizGradeOne + quizGradeTwo + quizGradeThree) / 3) * QUIZ_WEIGHT;
let finalTestGrade = ((testGradeOne + testGradeTwo + testGradeThree) / 3) * TEST_WEIGHT;

//marking period grade calculation
let markingPeriodGrade = (finalHwGrade + finalQuizGrade + finalTestGrade);
markingPeriodGrade = markingPeriodGrade.toFixed(2);


console.log("\nYour marking period grade is " + markingPeriodGrade + "%.\n")



