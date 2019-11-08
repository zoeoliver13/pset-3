const readlineSync= require("readline-sync");
const year = Number(readlineSync.question("\nEnter a year: "));

if( year > Number.MAX_SAFE_INTEGER) {
    console.log("\nInvalid.\n");
  }
else if ((year % 4 == 0 && year % 100 != 0) || year % 400 == 0){
  console.log("\n"+year + " is a leap year.\n");
}
else if(Number.isNaN(year)){
  console.log("\nInvalid.\n");
}
else {
  console.log("\n"+year + " is not a leap year.\n");
}
