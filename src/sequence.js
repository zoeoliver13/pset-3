const readlineSync= require("readline-sync");
const firstNumber = Number(readlineSync.question("\nEnter three numbers: \n\n"));
const secondNumber = Number(readlineSync.question(""));
const thirdNumber = Number(readlineSync.question(""));
const anyNumber = firstNumber&&secondNumber&&thirdNumber;
if(anyNumber < Number.MIN_SAFE_INTEGER || anyNumber > Number.MAX_SAFE_INTEGER) {
    console.log("\nInvalid.");
  }
if(Number.isNaN(anyNumber)){
  console.log("\nInvalid.");
}
else if(firstNumber==secondNumber&& secondNumber==thirdNumber){
  console.log("\nEqual.");
}
else if(firstNumber <= secondNumber && secondNumber <= thirdNumber){
  console.log("\nIncreasing.");
}
else if(firstNumber < secondNumber && secondNumber < thirdNumber){
  console.log("\nStrictly Increasing.");
}
else if(firstNumber>= secondNumber && secondNumber >= thirdNumber){
  console.log("\nDecreasing.");
}
else if(firstNumber > secondNumber && secondNumber > thirdNumber){
  console.log("\nStrictly Decreasing.");
}
else{
  console.log("\nUnordered.");
}
