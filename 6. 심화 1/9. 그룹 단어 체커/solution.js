// url: https://www.acmicpc.net/problem/1316
//
// step: 9
//
// id: 1316
//
// title: 그룹 단어 체커
//
// description:
// 그룹 단어란 단어에 존재하는 모든 문자에 대해서, 각 문자가 연속해서 나타나는 경우만을 말한다. 예를 들면, ccazzzzbb는 c, a, z, b가 모두 연속해서 나타나고, kin도 k, i, n이 연속해서 나타나기 때문에 그룹 단어이지만, aabbbccb는 b가 떨어져서 나타나기 때문에 그룹 단어가 아니다.
//
// 단어 N개를 입력으로 받아 그룹 단어의 개수를 출력하는 프로그램을 작성하시오.
//
// input:
//
// 					첫째 줄에 단어의 개수 N이 들어온다. N은 100보다 작거나 같은 자연수이다. 둘째 줄부터 N개의 줄에 단어가 들어온다. 단어는 알파벳 소문자로만 되어있고 중복되지 않으며, 길이는 최대 100이다.
//
//
//
// output:
//
// 					첫째 줄에 그룹 단어의 개수를 출력한다.
//
//
//
// sample input / output: 경로 내 txt 확인
//
// 이미지 여부: false
//
//

const input = require("fs")
  .readFileSync("./input6.txt")
  .toString()
  .trim()
  .split("\n");

const solution = (strs) => {
  const count = strs.shift();
  let groupWord = count;

  for (let i = 0; i < count; i++) {
    const str = strs[i];

    for (let char of [...str]) {
      const regexp = new RegExp(`${char}{1,}`, "g");
      if (str.match(regexp).length === 1) {
        continue;
      } else {
        groupWord -= 1;
        break;
      }
    }
  }

  return groupWord;
};

console.log(solution(input));
