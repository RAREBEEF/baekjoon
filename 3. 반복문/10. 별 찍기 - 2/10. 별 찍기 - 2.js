// 2439
console.time("실행시간");

const input = parseInt(require("fs").readFileSync("../input.txt"));

const starsAlignRight = (lineCount) => {
  const starsArr = [];
  for (let i = 1; i <= lineCount; i++) {
    starsArr.push("*".repeat(i).padStart(lineCount, " "));
  }
  return starsArr;
};

console.log(starsAlignRight(input).join("\n"));

console.timeEnd("실행시간");
