// 1011

const solution = (cases) =>
    cases.map(([x, y]) => {
      const diff = y - x,
        diffSqrt = Math.sqrt(diff),
        diffSqrtRound = Math.round(diffSqrt);

      return diffSqrt % 1 === 0
        ? diffSqrt * 2 - 1
        : diffSqrtRound * 2 + (diffSqrtRound >= diffSqrt && -1);
    }),
  input = require("fs")
    .readFileSync("./input1.txt")
    .toString()
    .trim()
    .split("\n")
    .map((strs) => strs.split(" ").map((str) => parseInt(str)))
    .slice(1);

console.log(solution(input).join("\n"));
