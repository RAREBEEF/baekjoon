// 9498
console.time("실행시간");

const score = parseInt(require("fs").readFileSync("../input.txt"));

const grade = (score) => {
  return score >= 90
    ? "A"
    : score >= 80
    ? "B"
    : score >= 70
    ? "C"
    : score >= 60
    ? "D"
    : "F";
};

console.log(grade(score));

console.timeEnd("실행시간");
