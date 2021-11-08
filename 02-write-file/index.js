const fs = require("fs").promises;
const path = require("path");
const process = require("process");
const readline = require("readline");

let filePath = path.resolve(__dirname, "result.txt");

async function writeFile() {
  let file = await fs.open(filePath, "a+");
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });
  console.log("Введите текст:");
  for await (const line of rl) {
    if (line == "exit") {
      break;
    }
    await file.write(`${line}\n`);
  }
  await file.close();
  console.log("Ввод заввершен");
}

writeFile();
