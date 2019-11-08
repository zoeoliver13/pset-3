const readlineSync= require("readline-sync");
const firstNumber = Number(readlineSync.question("\nEnter three numbers: \n\n"));
const secondNumber = Number(readlineSync.question(""));
const thirdNumber = Number(readlineSync.question(""));

const anyNumber = firstNumber||secondNumber||thirdNumber;
if(anyNumber < Number.MIN_SAFE_INTEGER || anyNumber > Number.MAX_SAFE_INTEGER) {
    console.log("\nInvalid.\n");
  }
if(Number.isNaN(anyNumber)){
  console.log("\nInvalid.\n");
}

else if (firstNumber == secondNumber && firstNumber == thirdNumber && secondNumber == thirdNumber) {
  console.log("\nEqual.\n");
}else if (firstNumber < secondNumber && secondNumber < thirdNumber){
  console.log("\nStrictly increasing.\n");
} else if (firstNumber > secondNumber && secondNumber > thirdNumber) {
  console.log("\nStrictly decreasing.\n");
} else if (firstNumber == secondNumber || secondNumber == thirdNumber) {
    if (firstNumber < thirdNumber)
  console.log("\nIncreasing.\n");
} else if (firstNumber == secondNumber || secondNumber == thirdNumber) {
    if (firstNumber > thirdNumber)
  console.log("\nDecreasing.\n");
}
else{
  console.log("\nUnordered.\n");
}
