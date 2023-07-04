// 1669

const solution = (input) => {
  const diff = input[1] - input[0],
    diffSqrt = Math.sqrt(diff),
    diffSqrtRound = Math.round(diffSqrt);

  return Math.max(
    0,
    diffSqrt % 1 === 0
      ? diffSqrt * 2 - 1
      : diffSqrtRound * 2 + (diffSqrtRound >= diffSqrt && -1)
  );
};

const input = require("fs")
  .readFileSync("./input3.txt")
  .toString()
  .trim()
  .split(" ")
  .map((str) => parseInt(str));

console.log(solution(input));
