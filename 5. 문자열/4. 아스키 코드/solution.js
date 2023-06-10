// url: https://www.acmicpc.net/problem/11654
//
// step: 4
//
// id: 11654
//
// title: 아스키 코드
//
// description:
// 알파벳 소문자, 대문자, 숫자 0-9중 하나가 주어졌을 때, 주어진 글자의 아스키 코드값을 출력하는 프로그램을 작성하시오.
//
// input:
//
// 					알파벳 소문자, 대문자, 숫자 0-9 중 하나가 첫째 줄에 주어진다.
//
//
//
// output:
//
// 					입력으로 주어진 글자의 아스키 코드 값을 출력한다.
//
//
//
// sample input / output: 경로 내 txt 확인
//
// 이미지 여부: false
//
//

const input = require("fs").readFileSync("./input1.txt").toString().trim();

const solution = (str) => {
  return str.charCodeAt();
};

console.log(solution(input));
