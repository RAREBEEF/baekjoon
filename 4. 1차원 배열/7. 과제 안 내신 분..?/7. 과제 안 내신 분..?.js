// 5597
const input = require("fs")
  .readFileSync("../input.txt")
  .toString()
  .trim()
  .split("\n")
  .map((str) => parseInt(str));

const findNoSubmission = (numbers) => {
  const noSubmissions = [];
  numbers.sort((a, b) => (a > b ? 1 : a < b ? -1 : 0));
  numbers.unshift(0);

  for (let i = 0; i <= numbers.length; i++) {
    const curNum = numbers[i];

    switch (i === curNum) {
      case true:
        continue;
      case false:
        noSubmissions.push(i);
        break;
    }

    if (noSubmissions.length !== 2) {
      numbers.unshift(0);
    } else {
      break;
    }
  }

  return noSubmissions;
};

console.log(findNoSubmission(input).join("\n"));
