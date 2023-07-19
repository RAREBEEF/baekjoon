// url: https://www.acmicpc.net/problem/1684
//
// id: 1684
//
// title: 같은 나머지
//
// description:
// 정수 N을 정수 D로 나눴을 때의 몫을 Q, 나머지를 R이라고 하면 항등식 R = N - Q×D가 성립한다.
//
// n개의 정수로 된 수열이 있을 때, 모든 정수를 한 정수 D로 나눴을 때 나머지가 같아지는 경우가 있다. 그리고 수열에 따라서는 이러한 정수 D가 여러 개 존재할 수 있다.
//
// n개의 정수로 된 수열이 주어졌을 때, 가장 큰 D를 구하는 프로그램을 작성하시오.
//
// input:
//
// 					첫째 줄에 n(1 ≤ n ≤ 1,000)이 주어진다. 다음 줄에는 절댓값이 1,000,000을 넘지 않는 n개의 정수들이 주어진다.
//
//
//
// output:
//
// 					첫째 줄에 가장 큰 D를 출력한다. 항상 가장 큰 D가 존재하는 경우만 입력으로 주어진다.
//
//
//
// sample input / output: 경로 내 txt 확인
//
// 이미지 여부: false
//
//

const solution = (input) => {
  const count = input.shift()[0],
    nums = input.shift(),
    min = Math.min(...nums),
    diff = [];

  for (let i = 0; i < count; i++) if (nums[i] !== min) diff.push(nums[i] - min);

  let curGcd = diff[0];
  for (let i = 1; i < diff.length; i++)
    curGcd = getGcd(Math.max(curGcd, diff[i]), Math.min(curGcd, diff[i]));

  return curGcd;
};

const getGcd = (a, b) => (a % b === 0 ? b : getGcd(b, a % b));

const input = require("fs")
  .readFileSync("./input1.txt")
  .toString()
  .trim()
  .split("\n")
  .map((strs) => strs.split(" ").map((str) => parseInt(str)));

console.log(solution(input));
