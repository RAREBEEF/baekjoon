// 2739
console.time("실행시간");

const input = parseInt(require("fs").readFileSync("../input.txt"));

const multiple = (num) => {
  for (let i = 1; i <= 9; i++) {
    console.log(`${num} * ${i} = ${num * i}`);
  }
};

multiple(input);

console.timeEnd("실행시간");
