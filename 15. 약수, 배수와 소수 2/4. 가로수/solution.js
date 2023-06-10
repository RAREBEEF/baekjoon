// url: https://www.acmicpc.net/problem/2485
//
// step: 4
//
// id: 2485
//
// title: 가로수
//
// description:
// 직선으로 되어있는 도로의 한 편에 가로수가 임의의 간격으로 심어져있다. KOI 시에서는 가로수들이 모두 같은 간격이 되도록 가로수를 추가로 심는 사업을 추진하고 있다. KOI 시에서는 예산문제로 가능한 한 가장 적은 수의 나무를 심고 싶다.
//
// 편의상 가로수의 위치는 기준점으로 부터 떨어져 있는 거리로 표현되며, 가로수의 위치는 모두 양의 정수이다.
//
// 예를 들어, 가로수가 (1, 3, 7, 13)의 위치에 있다면 (5, 9, 11)의 위치에 가로수를 더 심으면 모든 가로수들의 간격이 같게 된다. 또한, 가로수가 (2, 6, 12, 18)에 있다면 (4, 8, 10, 14, 16)에 가로수를 더 심어야 한다.
//
// 심어져 있는 가로수의 위치가 주어질 때, 모든 가로수가 같은 간격이 되도록 새로 심어야 하는 가로수의 최소수를 구하는 프로그램을 작성하라. 단, 추가되는 나무는 기존의 나무들 사이에만 심을 수 있다.
//
// input:
//
// 					첫째 줄에는 이미 심어져 있는 가로수의 수를 나타내는 하나의 정수 N이 주어진다(3 ≤ N ≤ 100,000). 둘째 줄부터 N개의 줄에는 각 줄마다 심어져 있는 가로수의 위치가 양의 정수로 주어지며, 가로수의 위치를 나타내는 정수는 1,000,000,000 이하이다. 가로수의 위치를 나타내는 정수는 모두 다르다.
//
//
//
// output:
//
// 					모든 가로수가 같은 간격이 되도록 새로 심어야 하는 가로수의 최소수를 첫 번째 줄에 출력한다.
//
//
//
// sample input / output: 경로 내 txt 확인
//
// 이미지 여부: false
//
//

const input = require("fs")
  .readFileSync("./input2.txt")
  .toString()
  .trim()
  .split("\n")
  .map((str) => parseInt(str))
  .slice(1);

const solution = (trees) => {
  const allIntervals = [];
  for (let i = 1; i < trees.length; i++) {
    allIntervals.push(trees[i] - trees[i - 1]);
  }

  const commonInterval = getCommonInterval(allIntervals)[0];

  let newTree = 0;
  for (let i = 0; i < trees.length - 1; i++) {
    const curTree = trees[i];
    const nextPos = curTree + commonInterval;

    if (trees[i + 1] !== nextPos) {
      newTree += (trees[i + 1] - trees[i]) / commonInterval - 1;
    }
  }

  return newTree;
};

const getCommonInterval = (nums) => {
  if (nums.length < 2) {
    return nums;
  }

  const center = Math.round(nums.length / 2),
    left = getCommonInterval(nums.slice(0, center)),
    right = getCommonInterval(nums.slice(center));

  let a = Math.max(left[0], right[0]),
    b = Math.min(left[0], right[0]);

  if (b === 0) {
    return getCommonInterval([a]);
  } else {
    return getCommonInterval([b, a % b]);
  }
};

console.log(solution(input));
