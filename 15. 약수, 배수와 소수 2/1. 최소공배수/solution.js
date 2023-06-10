// url: https://www.acmicpc.net/problem/1934
//
// step: 1
//
// id: 1934
//
// title: 최소공배수
//
// description:
// 두 자연수 A와 B에 대해서, A의 배수이면서 B의 배수인 자연수를 A와 B의 공배수라고 한다. 이런 공배수 중에서 가장 작은 수를 최소공배수라고 한다. 예를 들어, 6과 15의 공배수는 30, 60, 90등이 있으며, 최소 공배수는 30이다.
//
// 두 자연수 A와 B가 주어졌을 때, A와 B의 최소공배수를 구하는 프로그램을 작성하시오.
//
// input:
//
// 					첫째 줄에 테스트 케이스의 개수 T(1 ≤ T ≤ 1,000)가 주어진다. 둘째 줄부터 T개의 줄에 걸쳐서 A와 B가 주어진다. (1 ≤ A, B ≤ 45,000)
//
//
//
// output:
//
// 					첫째 줄부터 T개의 줄에 A와 B의 최소공배수를 입력받은 순서대로 한 줄에 하나씩 출력한다.
//
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
  .map((strs) => strs.split(" ").map((str) => parseInt(str)))
  .slice(1);

const getFactors = (n) => {
  const factors = {};
  let i = 2;

  while (n > 1) {
    if (n % i === 0) {
      factors[i] ? (factors[i] += 1) : (factors[i] = 1);
      n /= i;
      i = 2;
    } else {
      i += 1;
    }
  }

  return factors;
};

const solution = (cases) =>
  cases.map((nums) => {
    const [factorA, factorB] = nums.map((num) => getFactors(num));

    return Array.from(
      new Set([...Object.keys(factorA), ...Object.keys(factorB)]).values()
    ).reduce(
      (acc, cur) =>
        acc * parseInt(cur) ** Math.max(factorA[cur] || 0, factorB[cur] || 0),
      1
    );
  });

console.log(solution(input).join("\n"));
