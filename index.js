const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout,
});
const fs = require("fs");
require('child_process').execSync("cls", {
  stdio: 'inherit'
});
console.log("nodecli ALPHA please visit documentation before use: [insert link here]");

function usrcmd() {
  readline.question(`> `, command => {
      commandex(command);
  });
}

var currentPath = __dirname;

usrcmd();

function commandex(command) {
  switch (command.substring(0, 2)) {
      case 'ex':
          console.log("Exiting nodecli...");
          process.exit(22);
      case 'ls':
          fs.readdirSync(currentPath).forEach(file => {
              console.log(file);
          });
          break;
      case 'cf':
          fs.writeFileSync(command.split(" ").pop(), '');
          console.log(`created "${command.split(" ").pop()}"`);
          break;
      case 'rf':
          try {
              fs.unlinkSync(command.split(" ").pop());
              console.log("File is deleted.");
          } catch (error) {
              console.log(error);
          }
          break;
      case 'wp':
        console.clear();
        break;
      default:
          console.log(`Sorry, command "${command}" not found.`);
  }
  usrcmd();
}
