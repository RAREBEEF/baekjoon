// 10905
console.time("실행시간");

const input = require("fs")
  .readFileSync("../input.txt")
  .toString()
  .split("\n")
  .map((strs) => strs.split(" ").map((str) => parseInt(str)));

const sum = (caseCount, cases) => {
  for (let i = 0; i < caseCount; i++) {
    console.log(cases[i].reduce((acc, cur) => acc + cur, 0));
  }
};

sum(input.shift()[0], input);

console.timeEnd("실행시간");
