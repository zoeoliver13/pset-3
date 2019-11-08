const readlineSync = require("readline-sync");
const temperature = Number(readlineSync.question("\nEnter a temperature: "));
let scale = String(readlineSync.question("Enter a scale: "));
scale=scale.toLowerCase();
const freezingPoint_Fahrenheit = 32;
const boilingPoint_Fahrenheit = 212;
const freezingPoint_Celsius = 0;
const boilingPoint_Celsius = 100;
const freezingPoint_Kelvin = 273.2;
const boilingPoint_Kelvin = 373.15;

if(temperature < Number.MIN_SAFE_INTEGER || temperature > Number.MAX_SAFE_INTEGER) {
    console.log("\nInvalid\n");
}
else if(Number.isNaN(temperature)){
  console.log("\nInvalid.\n");
}
else if(scale == "f" && temperature > freezingPoint_Fahrenheit && temperature < boilingPoint_Fahrenheit){
  console.log("\nLiquid.\n");
}else if(scale == "f" && temperature <= freezingPoint_Fahrenheit){
  console.log("\nSolid.\n");
}else if(scale == "f" && temperature >= boilingPoint_Fahrenheit){
  console.log("\nGas.\n");
}
else if(scale == "c" && temperature > freezingPoint_Celsius && temperature < boilingPoint_Celsius){
  console.log("\nLiquid.\n");
}else if(scale == "c" && temperature <= freezingPoint_Celsius){
  console.log("\nSolid.\n");
}else if(scale == "c" && temperature >= boilingPoint_Celsius){
  console.log("\nGas.\n");
}
else if(scale == "k" && temperature > freezingPoint_Kelvin && temperature < boilingPoint_Kelvin){
  console.log("\nLiquid.\n");
}else if(scale == "k" && temperature <= freezingPoint_Kelvin){
  console.log("\nSolid.\n");
}else if(scale == "k" && temperature >= boilingPoint_Kelvin){
  console.log("\nGas.\n");
}
else{
  console.log("\nInvalid.\n")
}
