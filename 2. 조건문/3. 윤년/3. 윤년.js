// 2753
console.time("실행시간");

const year = parseInt(require("fs").readFileSync("../input.txt"));

const isLeapYear = (year) => {
  if (year % 4 !== 0 || (year % 100 === 0 && year % 400 !== 0)) {
    return 0;
  } else {
    return 1;
  }
};

console.log(isLeapYear(year));

console.timeEnd("실행시간");
