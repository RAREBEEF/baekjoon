// url: https://www.acmicpc.net/problem/10951
//
// step: 12
//
// id: 10951
//
// title: A+B - 4
//
// description:
// 두 정수 A와 B를 입력받은 다음, A+B를 출력하는 프로그램을 작성하시오.
//
// input:
//
// 					입력은 여러 개의 테스트 케이스로 이루어져 있다.
//
// 각 테스트 케이스는 한 줄로 이루어져 있으며, 각 줄에 A와 B가 주어진다. (0 < A, B < 10)
//
//
//
// output:
//
// 					각 테스트 케이스마다 A+B를 출력한다.
//
//
//
// sample input / output: 경로 내 txt 확인
//
// 이미지 여부: false
//
//

const input = require("fs")
  .readFileSync("../input.txt")
  .toString()
  .trim()
  .split("\n")
  .map((strs) => strs.split(" ").map((str) => parseInt(str)));

const sum = (cases) => {
  return cases.map(([a, b]) => a + b);
};

console.log(sum(input).join("\n"));
