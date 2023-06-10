// 10818
const input = require("fs")
  .readFileSync("../input.txt")
  .toString()
  .trim()
  .split("\n")
  .map((strs) => strs.split(" ").map((str) => parseInt(str)));

const minMax = (nums) => {
  return [Math.min(...nums), Math.max(...nums)];
};

console.log(minMax(input[1]).join(" "));
