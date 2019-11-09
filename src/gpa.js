const readlineSync = require("readline-sync");
let letterGrade = String(readlineSync.question("\nEnter a letter grade: "));
letterGrade = letterGrade.toUpperCase();

if(letterGrade == "A"){
  console.log("\nYour GPA is 4.00.\n");
}else if(letterGrade == "A-"){
  console.log("\nYour GPA is 3.67.\n");
}else if(letterGrade == "A+"){
  console.log("\nYour GPA is 4.33.\n");
}

else if(letterGrade == "B"){
  console.log("\nYour GPA is 3.00.\n");
}else if(letterGrade == "B-"){
  console.log("\nYour GPA is 2.67.\n");
}else if(letterGrade == "B+"){
  console.log("\nYour GPA is 3.33.\n");
}

else if(letterGrade == "C"){
  console.log("\nYour GPA is 2.00.\n");
}else if(letterGrade == "C-"){
    console.log("\nYour GPA is 1.67.\n");
}else if(letterGrade == "C+"){
    console.log("\nYour GPA is 2.33.\n");
}

else if(letterGrade == "D"){
    console.log("\nYour GPA is 1.00.\n");
}else if(letterGrade == "D-"){
    console.log("\nYour GPA is 0.67.\n");
}else if(letterGrade == "D+"){
    console.log("\nYour GPA is 1.33.\n");
}

else if(letterGrade == "F"){
    console.log("\nYour GPA is 0.00.\n");
}

else{
    console.log("\nInvalid.\n");
}
