// url: https://www.acmicpc.net/problem/2743
//
// step: 2
//
// id: 2743
//
// title: 단어 길이 재기
//
// description:
// 알파벳으로만 이루어진 단어를 입력받아, 그 길이를 출력하는 프로그램을 작성하시오.
//
// input:
//
// 					첫째 줄에 영어 소문자와 대문자로만 이루어진 단어가 주어진다. 단어의 길이는 최대 100이다.
//
//
//
// output:
//
// 					첫째 줄에 입력으로 주어진 단어의 길이를 출력한다.
//
//
//
// sample input / output: 경로 내 txt 확인
//
// 이미지 여부: false
//
//

const input = require("fs").readFileSync("../input.txt").toString().trim();

const strLength = (str) => str.length;

console.log(strLength(input));
