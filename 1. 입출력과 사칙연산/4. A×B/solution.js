// url: https://www.acmicpc.net/problem/10998
//
// step: 4
//
// id: 10998
//
// title: A×B
//
// description:
// 두 정수 A와 B를 입력받은 다음, A×B를 출력하는 프로그램을 작성하시오.
//
// input:
//
// 					첫째 줄에 A와 B가 주어진다. (0 < A, B < 10)
//
//
//
// output:
//
// 					첫째 줄에 A×B를 출력한다.
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
console.log(parseInt(singleLine[0]) * parseInt(singleLine[1]));
