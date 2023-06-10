// 27866
const input = require("fs")
  .readFileSync("../input.txt")
  .toString()
  .trim()
  .split("\n");

const strIndex = (str, i) => {
  return str[i];
};

console.log(strIndex(input[0], parseInt(input[1]) - 1));
