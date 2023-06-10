// url: https://www.acmicpc.net/problem/10869
//
// step: 6
//
// id: 10869
//
// title: 사칙연산
//
// description:
// 두 자연수 A와 B가 주어진다. 이때, A+B, A-B, A*B, A/B(몫), A%B(나머지)를 출력하는 프로그램을 작성하시오.
//
// input:
//
// 					두 자연수 A와 B가 주어진다. (1 ≤ A, B ≤ 10,000)
//
//
//
// output:
//
// 					첫째 줄에 A+B, 둘째 줄에 A-B, 셋째 줄에 A*B, 넷째 줄에 A/B, 다섯째 줄에 A%B를 출력한다.
//
//
//
// sample input / output: 경로 내 txt 확인
//
// 이미지 여부: false
//
//

const fs = require("fs");
const [a, b] = fs
  .readFileSync("../input.txt")
  .toString()
  .split(" ")
  .map((num) => parseInt(num));
console.log(`${a + b}\n${a - b}\n${a * b}\n${Math.floor(a / b)}\n${a % b}`);
