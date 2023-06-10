// url: https://www.acmicpc.net/problem/1008
//
// step: 5
//
// id: 1008
//
// title: AdivideB
//
// description:
// 두 정수 A와 B를 입력받은 다음, A/B를 출력하는 프로그램을 작성하시오.
//
// input:
//
// 					첫째 줄에 A와 B가 주어진다. (0 < A, B < 10)
//
//
//
// output:
//
// 					첫째 줄에 A/B를 출력한다. 실제 정답과 출력값의 절대오차 또는 상대오차가 10-9 이하이면 정답이다.
//
//
//
// sample input / output: 경로 내 txt 확인
//
// 이미지 여부: false
//
//

const fs = require("fs");

const singleLine = fs.readFileSync("../input.txt").toString().split(" ");

console.log(parseInt(singleLine[0]) / parseInt(singleLine[1]));
