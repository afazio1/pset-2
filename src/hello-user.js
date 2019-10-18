
const readlineSync = require("readline-sync");

const USER_NAME = readlineSync.question("Hi! What's your name?\n");
console.log("\nHello, " + USER_NAME + "!");
