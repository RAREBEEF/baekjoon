const solution = (input) => {
  const [tableLength, distance] = input
      .shift()
      .split(" ")
      .map((str) => parseInt(str)),
    table = input[0].split("");

  let eat = 0;

  TABLE_LOOP: for (let i = 0; i < tableLength; i++) {
    if (table[i] !== "P") continue;

    // 왼쪽에서 햄버거 찾기
    for (let j = Math.max(0, i - distance); j <= i - 1; j++) {
      if (table[j] === "H") {
        eat += 1;
        table[j] = null;
        continue TABLE_LOOP;
      }
    }
    // 오른쪽에서 햄버거 찾기
    for (let j = i + 1; j <= i + distance && j <= tableLength; j++) {
      if (table[j] === "H") {
        eat += 1;
        table[j] = null;
        continue TABLE_LOOP;
      }
    }
  }

  return eat;
};

const input = require("fs")
  .readFileSync("./input1.txt")
  .toString()
  .trim()
  .split("\n");

console.log(solution(input));
