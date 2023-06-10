// 25314
console.time("실행시간");

const input = require("fs").readFileSync("../input.txt").toString().trim();

const howLong = (byte) => {
  console.log("long ".repeat(byte / 4) + "int");
};

howLong(input);

console.timeEnd("실행시간");
