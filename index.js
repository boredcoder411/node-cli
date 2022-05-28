const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout,
});
const fs = require("fs");
require('child_process').execSync("cls", {stdio: 'inherit'});
console.log("nodecli ALPHA please visit documentation before use: [insert link here]");

function usrcmd() {
  readline.question(`> `, command => {
    commandex(command);
  });
}

var currentPath = "C:/Users/Theo/Desktop";

usrcmd();

function commandex(command) {
  switch (command) {
    case 'exit':
      console.log("Exiting nodecli...");
      process.exit(22);
    case 'dir':
      fs.readdirSync(currentPath).forEach(file => {
      console.log(file);
    });
    break;
    default:
      console.log(`Sorry, command "${command}" not found.`);
  }
    usrcmd();
}
