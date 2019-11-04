
const readlineSync= require("readline-sync");

let integer = Number(readlineSync.question("\nEnter an integer: "));

if(integer < Number.MIN_SAFE_INTEGER || integer > Number.MAX_SAFE_INTEGER) {
    console.log("invalid");
  }
if(Number.isNaN(integer)){
  console.log("\nInvalid.\n");
}
else if (integer % 2 === 0) {
    console.log("\nEven.\n");
  }
else if (integer % 2 !== 0){
  console.log("\nOdd.\n");
}
