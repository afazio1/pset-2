const readlineSync = require("readline-sync");

//User inputs number of students, teachers, and bus capacity
const numberOfStudents = Number(readlineSync.question("\nStudents: "));
const numberOfTeachers = Number(readlineSync.question("Teachers: "));
const busCapacity = Number(readlineSync.question("Bus capacity: "));

const totalPeople = numberOfStudents + numberOfTeachers;
const totalBuses = Math.ceil(totalPeople / busCapacity);
const peopleOnLastBus = totalPeople % busCapacity;

console.log(`\n${totalBuses} bus(es) is (are) needed, with ${peopleOnLastBus} passenger(s) on the last bus.\n`);

