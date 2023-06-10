// url: https://www.acmicpc.net/problem/2581
//
// step: 5
//
// id: 2581
//
// title: 소수
//
// description:
// 자연수 M과 N이 주어질 때 M이상 N이하의 자연수 중 소수인 것을 모두 골라 이들 소수의 합과 최솟값을 찾는 프로그램을 작성하시오.
//
// 예를 들어 M=60, N=100인 경우 60이상 100이하의 자연수 중 소수는 61, 67, 71, 73, 79, 83, 89, 97 총 8개가 있으므로, 이들 소수의 합은 620이고, 최솟값은 61이 된다.
//
// input:
//
// 					입력의 첫째 줄에 M이, 둘째 줄에 N이 주어진다.
//
// M과 N은 10,000이하의 자연수이며, M은 N보다 작거나 같다.
//
//
//
// output:
//
// 					M이상 N이하의 자연수 중 소수인 것을 모두 찾아 첫째 줄에 그 합을, 둘째 줄에 그 중 최솟값을 출력한다.
//
// 단, M이상 N이하의 자연수 중 소수가 없을 경우는 첫째 줄에 -1을 출력한다.
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
  .map((str) => parseInt(str));

const solution = (input) => {
  const [from, to] = input;
  const primeNums = [];
  let sum = 0;

  fromTo: for (let n = from; n <= to; n++) {
    if (n === 1) continue;

    factorCheck: for (let i = 2; i <= Math.sqrt(n); i++) {
      if (n % i === 0) {
        continue fromTo;
      } else {
        continue factorCheck;
      }
    }

    sum += n;
    primeNums.push(n);
  }

  return sum ? `${sum}\n${primeNums[0]}` : -1;
};

console.log(solution(input));
