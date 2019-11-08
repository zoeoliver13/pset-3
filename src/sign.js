const readlineSync= require("readline-sync");

let number = Number(readlineSync.question("\nEnter a number: "));


if(number < Number.MIN_SAFE_INTEGER || number > Number.MAX_SAFE_INTEGER) {
    console.log("\nInvalid.\n");
  }

else if(Number.isNaN(number)){
  console.log("\nInvalid.\n");
}
else if(number === 0){
  console.log("\nZero.\n");
}
else if(number>0){
  console.log("\nPositive.\n");
}
else if(number<0){
  console.log("\nNegative.\n");
}
