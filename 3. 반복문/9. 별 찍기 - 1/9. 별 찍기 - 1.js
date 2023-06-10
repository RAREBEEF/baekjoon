// 2438
console.time("실행시간");

const input = parseInt(require("fs").readFileSync("../input.txt"));

const stars = (lineCount) => {
  const starsArr = [];
  for (let i = 1; i <= lineCount; i++) {
    starsArr.push("*".repeat(i));
  }
  return starsArr;
};

console.log(stars(input).join("\n"));

console.timeEnd("실행시간");
