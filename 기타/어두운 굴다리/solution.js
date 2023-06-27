// 17266

const solution = (input) => {
  const underpass = parseInt(input.shift()),
    lampCount = parseInt(input.shift()),
    lampPos = input
      .shift()
      .split(" ")
      .map((str) => parseInt(str));

  let maxInterval = Math.max(lampPos[0] * 2, (underpass - lampPos.at(-1)) * 2);

  for (let i = 0; i < lampCount - 2; i++) {
    maxInterval = Math.max(lampPos[i + 1] - lampPos[i], maxInterval);
  }

  return Math.ceil(maxInterval / 2);
};

const input = require("fs")
  .readFileSync("./input2.txt")
  .toString()
  .trim()
  .split("\n");

console.log(solution(input));
