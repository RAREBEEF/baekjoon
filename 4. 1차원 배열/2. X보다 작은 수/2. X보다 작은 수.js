// 10871
const input = require("fs")
  .readFileSync("../input.txt")
  .toString()
  .trim()
  .split("\n")
  .map((strs) => strs.split(" ").map((str) => parseInt(str)));

const compare = (input) => {
  return input[1].filter((num) => num < input[0][1]);
};

console.log(compare(input).join(" "));
