// 2525
console.time("실행시간");

const input = require("fs").readFileSync("../input.txt").toString().split("\n");

const minutesToHours = (minutes_M) => {
  if (minutes_M > 60) {
    return [Math.floor(minutes_M / 60), minutes_M % 60];
  } else if (minutes_M < 60) {
    return [0, minutes_M];
  } else {
    return [1, 0];
  }
};

const aiOven = (input) => {
  const startTime_HM = input[0].split(" ").map((num) => parseInt(num));
  const cookingTime_HM = minutesToHours(parseInt(input[1]));
  const sumMinutes_HM = minutesToHours(startTime_HM[1] + cookingTime_HM[1]);
  const sumHoursRemainder_H =
    (startTime_HM[0] + cookingTime_HM[0] + sumMinutes_HM[0]) % 24;

  console.log(sumHoursRemainder_H, sumMinutes_HM[1]);
};

aiOven(input);

console.timeEnd("실행시간");
