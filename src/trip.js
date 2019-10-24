const readlineSync = require("readline-sync");

const NUMBER_OF_STUDENTS = Number(readlineSync.question("\nStudents: "));
const NUMBER_OF_TEACHERS = Number(readlineSync.question("Teachers: "));
const BUS_CAPACITY = Number(readlineSync.question("Bus capacity: "));

let totalPeople = NUMBER_OF_TEACHERS + NUMBER_OF_STUDENTS;
let totalBuses = Math.ceil(totalPeople / BUS_CAPACITY);
let peopleOnLastBus = totalPeople % BUS_CAPACITY;

console.log("\n" + totalBuses + " bus(es) is (are) needed, with " + peopleOnLastBus + " passenger(s) on the last bus.\n");
