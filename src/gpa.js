const readlineSync = require("readline-sync");
const grade = Number(readlineSync.question("Enter a letter grade: "));
if(grade == "a"){
  console.log("Your GPA is 4.00");
}
//
