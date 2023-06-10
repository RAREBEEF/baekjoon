// url: https://www.acmicpc.net/problem/27323
//
// step: 1
//
// id: 27323
//
// title: 직사각형
//
// description:
// 정수 A, B 가 주어진다. 세로 길이가 A cm, 가로 길이가 B cm 인 아래와 같은 직사각형의 넓이를 cm2 단위로 구하시오.
//
// input:
//
// 					표준 입력에 다음과 같은 형태로 입력이 주어진다.
//
// A
// B
//
//
//
// output:
//
// 					세로 길이가 A cm, 가로 길이가 B cm인 직사각형의 넓이를 cm2 단위로 구하고, 단위 (cm2)를 생략하여 출력한다.
//
//
//
// sample input / output: 경로 내 txt 확인
//
// 이미지 여부: true
//
// 원본 이미지 0: https://upload.acmicpc.net/4709c305-92ed-40a0-ab2e-3ade81daed95/-/preview/

const input = require("fs")
  .readFileSync("./input1.txt")
  .toString()
  .trim()
  .split("\n")
  .map((str) => parseInt(str));

const solution = (input) => {
  return input[0] * input[1];
};

console.log(solution(input));
