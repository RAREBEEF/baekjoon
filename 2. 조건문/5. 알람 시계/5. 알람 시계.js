// 2884
console.time("실행시간");

const prevAlram = require("fs")
  .readFileSync("../input.txt")
  .toString()
  .split(" ")
  .map((num) => parseInt(num));

const early45M = (prevAlram) => {
  const [prevHour, prevMinutes] = prevAlram;
  let [newHour, newMinutes] = [prevHour, prevMinutes - 45];

  if (prevMinutes < 45) {
    newHour = prevHour === 0 ? 23 : prevHour - 1;
    newMinutes = 60 + (prevMinutes - 45);
  }

  console.log(`${newHour} ${newMinutes}`);
};

early45M(prevAlram);

console.timeEnd("실행시간");
