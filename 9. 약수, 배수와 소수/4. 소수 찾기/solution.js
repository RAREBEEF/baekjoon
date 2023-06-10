// url: https://www.acmicpc.net/problem/1978
//
// step: 4
//
// id: 1978
//
// title: 소수 찾기
//
// description:
// 주어진 수 N개 중에서 소수가 몇 개인지 찾아서 출력하는 프로그램을 작성하시오.
//
// input:
//
// 					첫 줄에 수의 개수 N이 주어진다. N은 100이하이다. 다음으로 N개의 수가 주어지는데 수는 1,000 이하의 자연수이다.
//
//
//
// output:
//
// 					주어진 수들 중 소수의 개수를 출력한다.
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
  .map((strs) => strs.split(" ").map((str) => parseInt(str)));

const solution = (input) => {
  const [caseCount, cases] = input;
  let numOfPrime = 0;

  caseLoop: for (let i = 0; i < caseCount; i++) {
    const n = cases.shift();
    if (n === 1) continue;

    for (let j = 2; j <= Math.sqrt(n); j++) {
      if (n % j === 0) {
        continue caseLoop;
      }
    }
    numOfPrime += 1;
  }

  return numOfPrime;
};

console.log(solution(input));
