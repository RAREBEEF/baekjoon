// url: https://www.acmicpc.net/problem/11718
//
// step: 11
//
// id: 11718
//
// title: 그대로 출력하기
//
// description:
// 입력 받은 대로 출력하는 프로그램을 작성하시오.
//
// input:
//
// 					입력이 주어진다. 입력은 최대 100줄로 이루어져 있고, 알파벳 소문자, 대문자, 공백, 숫자로만 이루어져 있다. 각 줄은 100글자를 넘지 않으며, 빈 줄은 주어지지 않는다. 또, 각 줄은 공백으로 시작하지 않고, 공백으로 끝나지 않는다.
//
//
//
// output:
//
// 					입력받은 그대로 출력한다.
//
//
//
// sample input / output: 경로 내 txt 확인
//
// 이미지 여부: false
//
//

const input = require("fs").readFileSync("./input1.txt").toString().trim();

const solution = (input) => {
  console.log(input);
};

solution(input);
