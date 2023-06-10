// 1330
console.time("실행시간");

const [A, B] = require("fs")
  .readFileSync("../input.txt")
  .toString()
  .split(" ")
  .map((num) => parseInt(num));

console.log(A > B ? ">" : A < B ? "<" : "==");

console.timeEnd("실행시간");
