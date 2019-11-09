const readlineSync = require("readline-sync");
const grade = Number(readlineSync.question("\nEnter a grade: "));
const MIN = 0;
const MAX = 100;
let a = grade >= "90"&& grade <="100";
let b = grade >= "80"&& grade <="89";
let c = grade >= "70"&& grade <="79"
let d = grade >= "60"&& grade <="69";
let f = grade >= "0"&& grade <="59"

if(Number.isNaN(grade)){
  console.log("\nInvalid.\n");
}else if(a){
  console.log("\nYou recieved an A.\n");
}else if(b){
  console.log("\nYou recieved a B.\n");
}else if(c){
  console.log("\nYou recieved a C.\n");
}else if(d){
  console.log("\nYou recieved a D.\n");
}else if(f){
  console.log("\nYou recieved a F.\n");
}
if(grade < MIN || grade > MAX) {
    console.log("\nInvalid. \n");
}
