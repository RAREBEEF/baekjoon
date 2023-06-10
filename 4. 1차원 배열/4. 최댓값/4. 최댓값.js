// 2562
const input = require("fs")
  .readFileSync("../input.txt")
  .toString()
  .trim()
  .split("\n")
  .map((str) => parseInt(str));

const findMax = (nums) => {
  const max = Math.max(...nums);
  return [max, nums.indexOf(max) + 1];
};

console.log(findMax(input).join("\n"));
