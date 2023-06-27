// 21921

const solution = (input) => {
  const [fromStarted, period] = input.shift(),
    visitors = input.shift();

  if (Math.max(...visitors) === 0) return ["SAD"];

  let curVisitor = visitors.slice(0, period).reduce((acc, cur) => acc + cur, 0),
    maxVisitor = curVisitor,
    count = 1;

  for (let i = 1; i <= fromStarted - period; i++) {
    curVisitor = curVisitor - visitors[i - 1] + visitors[i + period - 1];

    if (maxVisitor > curVisitor) {
      continue;
    } else if (maxVisitor < curVisitor) {
      maxVisitor = curVisitor;
      count = 1;
    } else {
      count += 1;
    }
  }

  return [maxVisitor, count];
};

const input = require("fs")
  .readFileSync("./input1.txt")
  .toString()
  .trim()
  .split("\n")
  .map((strs) => strs.split(" ").map((str) => parseInt(str)));

console.log(solution(input).join("\n"));
