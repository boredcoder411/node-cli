const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout,
});

console.clear()

readline.question(`> `, command => {
  commandex(command)
});

function commandex(command) {
    if (command == "cd") {
      console.log("ok")
    } else {
      console.log("not ok");
    }
    readline.question(`> `, command => {
        commandex(command)
      });
}
