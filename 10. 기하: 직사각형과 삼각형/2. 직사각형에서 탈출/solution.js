// url: https://www.acmicpc.net/problem/1085
//
// step: 2
//
// id: 1085
//
// title: 직사각형에서 탈출
//
// description:
// 한수는 지금 (x, y)에 있다. 직사각형은 각 변이 좌표축에 평행하고, 왼쪽 아래 꼭짓점은 (0, 0), 오른쪽 위 꼭짓점은 (w, h)에 있다. 직사각형의 경계선까지 가는 거리의 최솟값을 구하는 프로그램을 작성하시오.
//
// input:
//
// 					첫째 줄에 x, y, w, h가 주어진다.
//
//
//
// output:
//
// 					첫째 줄에 문제의 정답을 출력한다.
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
  .split(" ")
  .map((str) => parseInt(str));

const solution = ([myX, myY, endPointX, endPointY]) =>
  Math.min(myX, myY, endPointX - myX, endPointY - myY);

console.log(solution(input));
