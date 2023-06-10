// url: https://www.acmicpc.net/problem/1735
//
// step: 3
//
// id: 1735
//
// title: 분수 합
//
// description:
// 분수 A/B는 분자가 A, 분모가 B인 분수를 의미한다. A와 B는 모두 자연수라고 하자.
// 두 분수의 합 또한 분수로 표현할 수 있다. 두 분수가 주어졌을 때, 그 합을 기약분수의 형태로 구하는 프로그램을 작성하시오. 기약분수란 더 이상 약분되지 않는 분수를 의미한다.
//
// input:
//
// 					첫째 줄과 둘째 줄에, 각 분수의 분자와 분모를 뜻하는 두 개의 자연수가 순서대로 주어진다. 입력되는 네 자연수는 모두 30,000 이하이다.
//
//
// output:
//
// 					첫째 줄에 구하고자 하는 기약분수의 분자와 분모를 뜻하는 두 개의 자연수를 빈 칸을 사이에 두고 순서대로 출력한다.
//
//
// sample input / output: 경로 내 txt 확인
//
// 이미지 여부: false
//
//

const input = require("fs")
  .readFileSync("./input1.txt")
  .toString()
  .trim()
  .split("\n")
  .map((strs) => strs.split(" ").map((str) => parseInt(str)));

const solution = (input) => {
  let [[a, b], [c, d]] = input;

  const denominatorLCM = (b * d) / getGCD([Math.max(b, d), Math.min(b, d)]);
  [a, b] = [a * (denominatorLCM / b), b * (denominatorLCM / b)];
  [c, d] = [c * (denominatorLCM / d), d * (denominatorLCM / d)];

  const [e, f] = [a + c, b];
  const fractionGCD = getGCD([Math.max(e, f), Math.min(e, f)]);

  return [e / fractionGCD, f / fractionGCD];
};

const getGCD = (nums) => {
  const [m, n] = nums;

  if (n === 0) {
    return m;
  } else {
    return getGCD([n, m % n]);
  }
};

console.log(solution(input).join(" "));
