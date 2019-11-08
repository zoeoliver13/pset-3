const readlineSync = require("readline-sync");
let month = String(readlineSync.question("\nEnter a month: "));
month=month.toLowerCase();

if(month=="january" || month=="jan"){
  console.log("\n31 days.\n");
}else if(month=="february" || month=="feb"){
    console.log("\n28 or 29 days.\n");
}else if(month=="march"||month=="mar"){
    console.log("\n31 days.\n");
}else if(month=="april"||month=="apr"){
    console.log("\n30 days.\n");
}else if(month=="may"){
    console.log("\n31 days.\n");
}else if(month=="june"||month=="jun"){
  console.log("\n30 days.\n");
}else if(month=="august"||month=="aug"){
  console.log("\n31 days.\n");
}else if(month =="september"||month=="sept"){
  console.log("\n30 days.\n");
}else if(month == "october"||month=="oct"){
  console.log("\n31 days.\n");
}else if(month=="november"||month=="nov"){
  console.log("\n30 days.\n");
}else if(month == "december"||month=="dec"){
  console.log("\n31 days.\n");
}else{
  console.log("\nInvalid.\n")
}
