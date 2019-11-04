const readlineSync = require("readline-sync");

const MIN = 0.01;
const MAX = 0.99;

let amount = Number(readlineSync.question("\nEnter a dollar amount: "));

if (Number.isNaN(amount)) {
    console.log("invalid");
}
else if (amount < MIN || amount > MAX) {
    console.log("invalid");
} else {
    const quarters = Math.floor(amount/.25);
    const remainderQuarters = quarters*.25;
    amount-=remainderQuarters;
    const dimes = Math.floor(amount/.1);
    const remainderDimes = dimes*.1;
    amount-=remainderDimes;
    const nickels = Math.floor(amount/.05);
    const remainderNickels = nickels*.05;
    amount -= remainderNickels;
    const pennies = Math.ceil(amount/.01);
    const remainderPennies = pennies*.01;
    amount -= remainderPennies;
    console.log("\n"+ quarters + " quarters, " + dimes + " dimes, " + nickels + " nickels, and " + pennies + " pennies.\n");
}
