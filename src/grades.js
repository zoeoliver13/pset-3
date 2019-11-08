const readlineSync = require("readline-sync");
const grade = Number(readlineSync.question("\nEnter a grade: "));

const MIN = 0;
const MAX = 100;

if(Number.isNaN(grade)){
  console.log("\nInvalid.\n");
}else if(grade >= "90"&& grade <="100"){
  console.log("\nYou recieved an A.\n");
}else if(grade >= "80"&& grade <="89"){
  console.log("\nYou recieved a B.\n");
}else if(grade >= "70"&& grade <="79"){
  console.log("\nYou recieved a C.\n");
}else if(grade >= "60"&& grade <="69"){
  console.log("\nYou recieved a D.\n");
}else if(grade >= "0"&& grade <="59"){
  console.log("\nYou recieved a F.\n");
}

if(grade < MIN || grade > MAX) {
    console.log("\nInvalid. \n");
}
