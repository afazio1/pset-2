
const readlineSync = require("readline-sync");

const userName = readlineSync.question("\nHi! What's your name?\n");
console.log(`\nHello, ${userName}!\n`);
