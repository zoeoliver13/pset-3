const readlineSync = require("readline-sync");
let month = String(readlineSync.question("\nEnter a month: "));
month=month.toLowerCase();
if(month=="january"|| month=="jan"){
  console.log("\n31 days.");
}else if(month=="February"&& month=="Feb"){
    console.log("\n28 or 29 days.");
}else if(month=="March"&&"Mar"){
    console.log("\n31 days.")
}else if(month=="April"&&"Apr"){
    console.log("\n30 days.")
}else if(month=="May"){
    console.log("\n31 days.")
}
