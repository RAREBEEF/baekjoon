// url: https://www.acmicpc.net/problem/1929
//
// step: 6
//
// id: 1929
//
// title: 소수 구하기
//
// description:
// M이상 N이하의 소수를 모두 출력하는 프로그램을 작성하시오.
//
// input:
//
// 					첫째 줄에 자연수 M과 N이 빈 칸을 사이에 두고 주어진다. (1 ≤ M ≤ N ≤ 1,000,000) M이상 N이하의 소수가 하나 이상 있는 입력만 주어진다.
//
//
//
// output:
//
// 					한 줄에 하나씩, 증가하는 순서대로 소수를 출력한다.
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
  .split(" ")
  .map((str) => parseInt(str));

const solution = (nums) => {
  const [start, end] = nums;
  const primeNums = [];

  for (let i = start; i <= end; i++) {
    if (checkPrime(i)) primeNums.push(i);
  }

  return primeNums;
};

const checkPrime = (num) => {
  if (num <= 1) return false;

  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) return false;
  }

  return true;
};

console.log(solution(input).join("\n"));
