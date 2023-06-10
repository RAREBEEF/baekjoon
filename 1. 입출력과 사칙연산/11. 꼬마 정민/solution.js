// url: https://www.acmicpc.net/problem/11382
//
// step: 11
//
// id: 11382
//
// title: 꼬마 정민
//
// description:
// 꼬마 정민이는 이제 A + B 정도는 쉽게 계산할 수 있다. 이제 A + B + C를 계산할 차례이다!
//
// input:
//
// 					첫 번째 줄에 A, B, C (1 ≤ A, B, C ≤ 1012)이 공백을 사이에 두고 주어진다.
//
//
//
// output:
//
// 					A+B+C의 값을 출력한다.
//
//
//
// sample input / output: 경로 내 txt 확인
//
// 이미지 여부: false
//
//

console.log(
  require("fs")
    .readFileSync("../input.txt")
    .toString()
    .split(" ")
    .map((num) => parseInt(num))
    .reduce((acc, cur) => acc + cur, 0)
);
