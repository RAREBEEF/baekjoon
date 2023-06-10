// 8393
console.time("실행시간");

const input = parseInt(require("fs").readFileSync("../input.txt"));

const factorial = (n, sum = 0) => {
  if (n > 1) {
    return factorial(n - 1, sum + n);
  } else {
    return sum + n;
  }
};

console.log(factorial(input));

console.timeEnd("실행시간");
