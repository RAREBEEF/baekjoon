// 25304
console.time("실행시간");

const input = require("fs")
  .readFileSync("../input.txt")
  .toString()
  .trim()
  .split("\n")
  .map((strs) => strs.split(" ").map((str) => parseInt(str)));

const checkBill = (amount, bill) => {
  return amount === bill.reduce((acc, cur) => cur[0] * cur[1] + acc, 0);
};

console.log(checkBill(input[0][0], input.splice(2)) ? "Yes" : "No");

console.timeEnd("실행시간");
