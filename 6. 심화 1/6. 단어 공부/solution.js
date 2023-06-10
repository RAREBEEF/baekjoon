// url: https://www.acmicpc.net/problem/1157
//
// step: 6
//
// id: 1157
//
// title: 단어 공부
//
// description:
// 알파벳 대소문자로 된 단어가 주어지면, 이 단어에서 가장 많이 사용된 알파벳이 무엇인지 알아내는 프로그램을 작성하시오. 단, 대문자와 소문자를 구분하지 않는다.
//
// input:
//
// 					첫째 줄에 알파벳 대소문자로 이루어진 단어가 주어진다. 주어지는 단어의 길이는 1,000,000을 넘지 않는다.
//
//
//
// output:
//
// 					첫째 줄에 이 단어에서 가장 많이 사용된 알파벳을 대문자로 출력한다. 단, 가장 많이 사용된 알파벳이 여러 개 존재하는 경우에는 ?를 출력한다.
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
  if (!str) {
    return "?";
  }

  const upperStr = str.toUpperCase();
  const uniqChar = new Set([...upperStr]);
  const max = { char: null, count: 0, duplicated: false };

  for (let curChar of uniqChar) {
    const regexp = new RegExp(`${curChar}`, "g");
    const curCharCount = upperStr.match(regexp).length;

    if (curCharCount > max.count) {
      max.char = curChar;
      max.count = curCharCount;
      max.duplicated = false;
    } else if (curCharCount === max.count) {
      max.duplicated = true;
    }
  }

  return max.duplicated ? "?" : max.char.toUpperCase();
};

console.log(solution(input));
