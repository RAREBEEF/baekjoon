// url: https://www.acmicpc.net/problem/2231
//
// step: 2
//
// id: 2231
//
// title: 분해합
//
// description:
// 어떤 자연수 N이 있을 때, 그 자연수 N의 분해합은 N과 N을 이루는 각 자리수의 합을 의미한다. 어떤 자연수 M의 분해합이 N인 경우, M을 N의 생성자라 한다. 예를 들어, 245의 분해합은 256(=245+2+4+5)이 된다. 따라서 245는 256의 생성자가 된다. 물론, 어떤 자연수의 경우에는 생성자가 없을 수도 있다. 반대로, 생성자가 여러 개인 자연수도 있을 수 있다.
//
// 자연수 N이 주어졌을 때, N의 가장 작은 생성자를 구해내는 프로그램을 작성하시오.
//
// input:
//
// 					첫째 줄에 자연수 N(1 ≤ N ≤ 1,000,000)이 주어진다.
//
//
//
// output:
//
// 					첫째 줄에 답을 출력한다. 생성자가 없는 경우에는 0을 출력한다.
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
  let minConstructor = 0;

  for (let i = n - 1; i !== 0; i--) {
    const digits = [...i.toString()].map((str) => parseInt(str));
    const sum = i + digits.reduce((acc, cur) => acc + cur, 0);

    if (sum === n) {
      minConstructor = i;
    } else if (i + digits[0] + (digits.length - 1) * 9 < n) {
      break;
    }
  }

  return minConstructor;
};

console.log(solution(input));
