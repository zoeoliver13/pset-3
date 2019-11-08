const readlineSync = require("readline-sync");

let cards = readlineSync.question("\nEnter a playing card: \n");
const nameOfCard = cards.toUpperCase();

if (nameOfCard == "AS") {
  console.log("\nAce of Spades.\n");
}else if (nameOfCard == "AC") {
  console.log("\nAce of Clubs.\n");
}else if (nameOfCard == "AH") {
  console.log("\nAce of Hearts.\n");
}

else if (nameOfCard == "KD") {
  console.log("\nKing of Diamonds.\n");
}else if (nameOfCard == "KS") {
  console.log("\nKing of Spades.\n");
}else if (nameOfCard == "KH") {
  console.log("\nKing of Hearts.\n");
}else if (nameOfCard == "KC") {
  console.log("\nKing of Clubs.\n");
}

else if (nameOfCard == "QD") {
  console.log("\nQueen of Diamonds.\n");
}else if (nameOfCard == "QS") {
  console.log("\nQueen of Spades.\n");
}else if (nameOfCard == "QH") {
  console.log("\nQueen of Hearts\n");
}else if (nameOfCard == "QC") {
  console.log("\nQueen of Clubs.\n");
}

else if (nameOfCard == "JS") {
  console.log("\nJack of Spades.\n");
}else if (nameOfCard == "JD") {
  console.log("\nJack of Diamonds.\n");
}else if (nameOfCard == "JH") {
  console.log("\nJack of Hearts.\n");
}else if (nameOfCard == "JC") {
  console.log("\nJack of Clubs.\n");
}

else if (nameOfCard == "TS") {
  console.log("\nTen of Spades.\n");
}else if (nameOfCard == "TD") {
  console.log("\nTen of Diamonds.\n");
}else if (nameOfCard == "TH") {
  console.log("\nTen of Hearts.\n");
}else if (nameOfCard == "TC") {
  console.log("\nTen of Clubs.\n");
}

else if (nameOfCard == "9S") {
  console.log("\nNine of Spades.\n");
}else if (nameOfCard == "9D") {
  console.log("\nNine of Diamonds.\n");
}else if (nameOfCard == "9H") {
  console.log("\nNine of Hearts.\n");
}else if (nameOfCard == "9C") {
  console.log("\nNine of Clubs.\n");
}

else if (nameOfCard == "8S") {
  console.log("\nEight of Spades.\n");
}else if (nameOfCard == "8D") {
  console.log("\nEight of Diamonds.\n");
}else if (nameOfCard == "8H") {
  console.log("\nEight of Hearts.\n");
}else if (nameOfCard == "8C") {
  console.log("\nEight of Clubs.\n");
}

else if (nameOfCard == "7S") {
  console.log("\nSeven of Spades.\n");
}else if (nameOfCard == "7D") {
  console.log("\nSeven of Diamonds.\n");
}else if (nameOfCard == "7H") {
  console.log("\nSeven of Hearts.\n");
}else if (nameOfCard == "7C") {
  console.log("\nSeven of Clubs.\n");
}

else if (nameOfCard == "6S") {
  console.log("\nSix of Spades.\n");
}else if (nameOfCard == "6D") {
  console.log("\nSix of Diamonds.\n");
}else if (nameOfCard == "6H") {
  console.log("\nSix of Hearts.\n");
}else if (nameOfCard == "6C") {
  console.log("\nSix of Clubs.\n");
}

else if (nameOfCard == "5S") {
  console.log("\nFive of Spades.\n");
}else if (nameOfCard == "5D") {
  console.log("\nFive of Diamonds.\n");
}else if (nameOfCard == "5H") {
  console.log("\nFive of Hearts.\n");
}else if (nameOfCard == "5C") {
  console.log("\nFive of Clubs.\n");
}

else if (nameOfCard == "4S") {
  console.log("\nFour of Spades.\n");
}else if (nameOfCard == "4D") {
  console.log("\nFour of Diamonds.\n");
}else if (nameOfCard == "4H") {
  console.log("\nFour of Hearts.\n");
}else if (nameOfCard == "4C") {
  console.log("\nFour of Clubs.\n");
}

else if (nameOfCard == "3S") {
  console.log("\nThree of Spades.\n");
}else if (nameOfCard == "3D") {
  console.log("\nThree of Diamonds.\n");
}else if (nameOfCard == "3H") {
  console.log("\nThree of Hearts.\n");
}else if (nameOfCard == "3C") {
  console.log("\nThree of Clubs.\n");
}

else if (nameOfCard == "2S") {
  console.log("\nTwo of Spades.\n");
}else if (nameOfCard == "2D") {
  console.log("\nTwo of Diamonds.\n");
}else if (nameOfCard == "2H") {
  console.log("\nTwo of Hearts.\n");
}else if (nameOfCard == "2C") {
  console.log("\nTwo of Clubs.\n");
}

else {
  console.log("\nInvalid\n");
}
