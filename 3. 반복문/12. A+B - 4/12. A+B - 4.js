// 10951
console.time("실행시간");

const input = require("fs")
  .readFileSync("../input.txt")
  .toString()
  .trim()
  .split("\n")
  .map((strs) => strs.split(" ").map((str) => parseInt(str)));

const sum = (cases) => {
  return cases.map(([a, b]) => a + b);
};

console.log(sum(input).join("\n"));

console.timeEnd("실행시간");
