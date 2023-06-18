// url: https://www.acmicpc.net/problem/4134
//
// step: 5
//
// id: 4134
//
// title: 다음 소수
//
// description:
// 정수 n(0 ≤ n ≤ 4*109)가 주어졌을 때, n보다 크거나 같은 소수 중 가장 작은 소수 찾는 프로그램을 작성하시오.
//
// input:
//
//
// 	첫째 줄에 테스트 케이스의 개수가 주어진다. 각 테스트 케이스는 한 줄로 이루어져 있고, 정수 n이 주어진다.
//
//
//
// output:
//
//
// 	각각의 테스트 케이스에 대해서 n보다 크거나 같은 소수 중 가장 작은 소수를 한 줄에 하나씩 출력한다.
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
  .map((str) => parseInt(str))
  .slice(1);

const solution = (nums) => {
  const result = [];

  for (num of nums) {
    while (true) {
      if (checkPrime(num)) {
        result.push(num);
        break;
      } else {
        num += 1;
      }
    }
  }

  return result;
};

const checkPrime = (num) => {
  if (num <= 1) return false;

  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) return false;
  }

  return true;
};

console.log(solution(input).join("\n"));
