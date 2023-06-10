// 2480
console.time("실행시간");

const input = require("fs")
  .readFileSync("../input.txt")
  .toString()
  .split(" ")
  .map((num) => parseInt(num));

const reward = (dices) => {
  const unique = new Set(dices);

  if (unique.size === 1) {
    console.log(10000 + dices[0] * 1000);
  } else if (unique.size === 2) {
    const uniqueArr = Array.from(unique);
    const same =
      dices.indexOf(uniqueArr[0]) !== dices.lastIndexOf(uniqueArr[0])
        ? uniqueArr[0]
        : uniqueArr[1];
    console.log(1000 + same * 100);
  } else if (unique.size === 3) {
    console.log(Math.max(...dices) * 100);
  }
};

reward(input);

console.timeEnd("실행시간");
