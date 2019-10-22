const readlineSync = require("readline-sync");

const HOMEWORK_WEIGHT = 0.15;
const QUIZ_WEIGHT = 0.35;
const TEST_WEIGHT = 0.5;
const NUMBER_OF_ASSIGNMENTS = 3;

//user's homework grades
let hwGrade1 = Number(readlineSync.question("\nEnter three homework grades.\n"));
let hwGradeTwo = Number(readlineSync.question(""));
let hwGradeThree = Number(readlineSync.question(""));

//user's quiz grades
let quizGradeOne = Number(readlineSync.question("\nEnter three quiz grades.\n"));
let quizGradeTwo = Number(readlineSync.question(""));
let quizGradeThree = Number(readlineSync.question(""));

//user's test grades
let testGradeOne = Number(readlineSync.question("\nEnter three test grades.\n"));
let testGradeTwo = Number(readlineSync.question(""));
let testGradeThree = Number(readlineSync.question(""));

//weigth calculations
let finalHwGrade = ((hwGradeOne + hwGradeTwo + hwGradeThree) / NUMBER_OF_ASSIGNMENTS) * HOMEWORK_WEIGHT;
let finalQuizGrade = ((quizGradeOne + quizGradeTwo + quizGradeThree) / NUMBER_OF_ASSIGNMENTS) * QUIZ_WEIGHT;
let finalTestGrade = ((testGradeOne + testGradeTwo + testGradeThree) / NUMBER_OF_ASSIGNMENTS) * TEST_WEIGHT;

//marking period grade calculation
let markingPeriodGrade = (finalHwGrade + finalQuizGrade + finalTestGrade);
markingPeriodGrade = markingPeriodGrade.toFixed(2);


console.log("\nYour marking period grade is " + markingPeriodGrade + "%.\n")
