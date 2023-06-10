// 11021
console.time("실행시간");

const input = require("fs")
  .readFileSync("../input.txt")
  .toString()
  .trim()
  .split("\n")
  .map((strs) => strs.split(" ").map((str) => parseInt(str)));

const sum = (cases) => {
  return cases.map((nums, i) => `Case #${i + 1}: ${nums[0] + nums[1]}`);
};

console.log(sum(input.splice(1)).join("\n"));

console.timeEnd("실행시간");
