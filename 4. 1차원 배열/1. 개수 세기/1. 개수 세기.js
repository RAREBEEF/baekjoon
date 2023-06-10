// 10807
console.time("실행시간");

const input = require("fs")
  .readFileSync("../input.txt")
  .toString()
  .trim()
  .split("\n")
  .map((strs) => strs.split(" ").map((str) => parseInt(str)));

const countV = (input) => {
  return input[1].filter((num) => num === input[2][0]).length;
};

console.log(countV(input));

console.timeEnd("실행시간");
