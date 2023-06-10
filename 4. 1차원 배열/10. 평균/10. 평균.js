// 1546
const input = require("fs")
  .readFileSync("../input.txt")
  .toString()
  .trim()
  .split("\n")
  .map((strs) => strs.split(" ").map((str) => parseInt(str)));

const cheatingAvg = (report) => {
  const [[subjectCount], scores] = report;
  const maxScore = Math.max(...scores);
  const newScores = scores.map((score) => (score / maxScore) * 100);

  return newScores.reduce((acc, cur) => acc + cur, 0) / subjectCount;
};

console.log(cheatingAvg(input));
