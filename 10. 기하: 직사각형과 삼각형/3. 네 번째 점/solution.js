// url: https://www.acmicpc.net/problem/3009
//
// step: 3
//
// id: 3009
//
// title: 네 번째 점
//
// description:
// 세 점이 주어졌을 때, 축에 평행한 직사각형을 만들기 위해서 필요한 네 번째 점을 찾는 프로그램을 작성하시오.
//
// input:
//
// 					세 점의 좌표가 한 줄에 하나씩 주어진다. 좌표는 1보다 크거나 같고, 1000보다 작거나 같은 정수이다.
//
//
//
// output:
//
// 					직사각형의 네 번째 점의 좌표를 출력한다.
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
  const x = input.map((arr) => arr[0]);
  const y = input.map((arr) => arr[1]);
  let a = x.find((el) => x.indexOf(el) === x.lastIndexOf(el)) || x[0];
  let b = y.find((el) => y.indexOf(el) === y.lastIndexOf(el)) || y[0];

  return `${a} ${b}`;
};

console.log(solution(input));
