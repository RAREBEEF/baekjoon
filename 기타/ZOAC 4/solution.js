// 23971

const solution = ([H, W, N, M]) =>
  Math.ceil(W / (M + 1)) * Math.ceil(H / (N + 1));

const input = require("fs")
  .readFileSync("./input1.txt")
  .toString()
  .trim()
  .split(" ")
  .map((str) => parseInt(str));

console.log(solution(input));
