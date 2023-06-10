// url: https://www.acmicpc.net/problem/2588
//
// step: 10
//
// id: 2588
//
// title: 곱셈
//
// description:
// (세 자리 수) × (세 자리 수)는 다음과 같은 과정을 통하여 이루어진다.
//
//
//
// (1)과 (2)위치에 들어갈 세 자리 자연수가 주어질 때 (3), (4), (5), (6)위치에 들어갈 값을 구하는 프로그램을 작성하시오.
//
// input:
//
// 					첫째 줄에 (1)의 위치에 들어갈 세 자리 자연수가, 둘째 줄에 (2)의 위치에 들어갈 세자리 자연수가 주어진다.
//
//
//
// output:
//
// 					첫째 줄부터 넷째 줄까지 차례대로 (3), (4), (5), (6)에 들어갈 값을 출력한다.
//
//
//
// sample input / output: 경로 내 txt 확인
//
// 이미지 여부: true
//
// 원본 이미지 0: https://www.acmicpc.net//upload/images/f5NhGHVLM4Ix74DtJrwfC97KepPl27s%20(1).png

const [A, B] = require("fs")
  .readFileSync("../input.txt")
  .toString()
  .split("\n")
  .map((num) => parseInt(num));

console.log(
  B.toString()
    .split("")
    .map((num) => parseInt(num) * A)
    .reverse()
    .join("\n") + `\n${A * B}`
);
