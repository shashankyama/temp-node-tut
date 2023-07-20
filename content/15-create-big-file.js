const { writeFileSync } = require("fs");
console.log("start");

for (let i = 0; i < 1000; i++) {
  writeFileSync("./content/big.txt", `Here is the result : ${i}\n`, {
    flag: "a",
  });
}
