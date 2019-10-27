const readlineSync = require("readline-sync");

//Assignment weights
const HOMEWORK_WEIGHT = 0.15;
const QUIZ_WEIGHT = 0.35;
const TEST_WEIGHT = 0.5;
const NUMBER_OF_ASSIGNMENTS = 3;

//User's homework grades
const homeworkGradeOne = Number(readlineSync.question("\nEnter three homework grades.\n"));
const homeworkGradeTwo = Number(readlineSync.question(""));
const homeworkGradeThree = Number(readlineSync.question(""));

//User's quiz grades
const quizGradeOne = Number(readlineSync.question("\nEnter three quiz grades.\n"));
const quizGradeTwo = Number(readlineSync.question(""));
const quizGradeThree = Number(readlineSync.question(""));

//User's test grades
const testGradeOne = Number(readlineSync.question("\nEnter three test grades.\n"));
const testGradeTwo = Number(readlineSync.question(""));
const testGradeThree = Number(readlineSync.question(""));

//Weigth calculations
const finalHwGrade = ((homeworkGradeOne + homeworkGradeTwo + homeworkGradeThree) / NUMBER_OF_ASSIGNMENTS) * HOMEWORK_WEIGHT;
const finalQuizGrade = ((quizGradeOne + quizGradeTwo + quizGradeThree) / NUMBER_OF_ASSIGNMENTS) * QUIZ_WEIGHT;
const finalTestGrade = ((testGradeOne + testGradeTwo + testGradeThree) / NUMBER_OF_ASSIGNMENTS) * TEST_WEIGHT;

//Marking period grade calculation
let markingPeriodGrade = (finalHwGrade + finalQuizGrade + finalTestGrade);
markingPeriodGrade = markingPeriodGrade.toFixed(2);

console.log(`\nYour marking period grade is ${markingPeriodGrade}%.\n`)
