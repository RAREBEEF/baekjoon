// url: https://www.acmicpc.net/problem/11653
//
// step: 6
//
// id: 11653
//
// title: 소인수분해
//
// description:
// 정수 N이 주어졌을 때, 소인수분해하는 프로그램을 작성하시오.
//
// input:
//
// 					첫째 줄에 정수 N (1 ≤ N ≤ 10,000,000)이 주어진다.
//
//
//
// output:
//
// 					N의 소인수분해 결과를 한 줄에 하나씩 오름차순으로 출력한다. N이 1인 경우 아무것도 출력하지 않는다.
//
//
//
// sample input / output: 경로 내 txt 확인
//
// 이미지 여부: false
//
//

const input = parseInt(require("fs").readFileSync("./input1.txt"));

const solution = (n) => {
  if (n === 1) return "";

  const primeFactors = [];
  let i = 2;

  while (n > 1) {
    if (n % i === 0) {
      primeFactors.push(i);
      n /= i;
      i = 2;
    } else {
      i += 1;
    }
  }

  return primeFactors.join("\n");
};

console.log(solution(input));
