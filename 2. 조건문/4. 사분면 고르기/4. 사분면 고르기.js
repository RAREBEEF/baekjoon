// 14681
const rl = require("readline");

const readMultipleLines = rl.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const input = [];

readMultipleLines
  .on("line", function (line) {
    input.push(line);
  })
  .on("close", function () {
    const [x, y] = input;
    findQuandrant(x, y);
    process.exit();
  });

const isPositive = (num) => num > 0;

const findQuandrant = (x, y) => {
  if (isPositive(x)) {
    console.log(isPositive(y) ? 1 : 4);
  } else {
    console.log(isPositive(y) ? 2 : 3);
  }
};
