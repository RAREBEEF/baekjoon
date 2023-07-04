const solution = (input) => {
  const len = input.shift(),
    nums = input,
    numCounting = new Array(Math.max(...nums) + 1).fill(0),
    result = [];

  // nums[i]가 nums에 몇 번 등장하는지 측정하여 numCounting[nums[i]]에 저장
  // 즉, 임의의 수 x는 nums에 numCounting[x]번 등장한다.
  for (let i = 0; i < len; i++) numCounting[nums[i]] += 1;

  for (let i = 0; i < len; i++) {
    const n = nums[i];
    let tokCount = -1;

    // j가 n의 약수일 경우 numCounting[j]를 카운트에 더함
    // n / j의 몫이 j와 다를 경우 numCounting[n / j]도 카운트에 더함
    for (let j = 1; j <= Math.sqrt(n); j++)
      n % j === 0 &&
        (tokCount +=
          j !== n / j ? numCounting[n / j] + numCounting[j] : numCounting[j]);

    result.push(tokCount);
  }

  return result;
};

const input = require("fs")
  .readFileSync("./input1.txt")
  .toString()
  .trim()
  .split("\n")
  .map((str) => parseInt(str));

console.log(solution(input).join("\n"));
