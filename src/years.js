const readlineSync= require("readline-sync");
const year = Number(readlineSync.question("\nEnter a Year: "));
if( year > Number.MAX_SAFE_INTEGER) {
    console.log("\nInvalid.");
  }
if (year % 4 == 0){
  console.log("\n"+year + " is a leap year.\n");
}
else if (year % 4 !== 0){
  console.log("\n"+year + " is not a leap year.\n");
}
if(Number.isNaN(year)){
  console.log("\nInvalid\n");
}
