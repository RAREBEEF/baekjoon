// 3052
const input = require("fs")
  .readFileSync("../input.txt")
  .toString()
  .trim()
  .split("\n")
  .map((str) => parseInt(str));

const remainder = (nums) => new Set(nums.map((num) => num % 42)).size;

console.log(remainder(input));
