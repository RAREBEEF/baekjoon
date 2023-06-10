// url: https://www.acmicpc.net/problem/10430
//
// step: 9
//
// id: 10430
//
// title: 나머지
//
// description:
// (A+B)%C는 ((A%C) + (B%C))%C 와 같을까?
//
// (A×B)%C는 ((A%C) × (B%C))%C 와 같을까?
//
// 세 수 A, B, C가 주어졌을 때, 위의 네 가지 값을 구하는 프로그램을 작성하시오.
//
// input:
//
// 					첫째 줄에 A, B, C가 순서대로 주어진다. (2 ≤ A, B, C ≤ 10000)
//
//
//
// output:
//
// 					첫째 줄에 (A+B)%C, 둘째 줄에 ((A%C) + (B%C))%C, 셋째 줄에 (A×B)%C, 넷째 줄에 ((A%C) × (B%C))%C를 출력한다.
//
//
//
// sample input / output: 경로 내 txt 확인
//
// 이미지 여부: false
//
//

const [A, B, C] = require("fs")
  .readFileSync("../input.txt")
  .toString()
  .split(" ")
  .map((num) => parseInt(num));

console.log(
  `${(A + B) % C}\n${((A % C) + (B % C)) % C}\n${(A * B) % C}\n${
    ((A % C) * (B % C)) % C
  }`
);
