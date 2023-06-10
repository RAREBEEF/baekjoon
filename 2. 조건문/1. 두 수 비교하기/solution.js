// url: https://www.acmicpc.net/problem/1330
//
// step: 1
//
// id: 1330
//
// title: 두 수 비교하기
//
// description:
// 두 정수 A와 B가 주어졌을 때, A와 B를 비교하는 프로그램을 작성하시오.
//
// input:
//
// 					첫째 줄에 A와 B가 주어진다. A와 B는 공백 한 칸으로 구분되어져 있다.
//
//
//
// output:
//
// 					첫째 줄에 다음 세 가지 중 하나를 출력한다.
//
//
// 	A가 B보다 큰 경우에는 '>'를 출력한다.
// 	A가 B보다 작은 경우에는 '<'를 출력한다.
// 	A와 B가 같은 경우에는 '=='를 출력한다.
//
//
//
//
// sample input / output: 경로 내 txt 확인
//
// 이미지 여부: false
//
//

const [A, B] = require("fs")
  .readFileSync("../input.txt")
  .toString()
  .split(" ")
  .map((num) => parseInt(num));

console.log(A > B ? ">" : A < B ? "<" : "==");
