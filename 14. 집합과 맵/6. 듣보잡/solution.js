// url: https://www.acmicpc.net/problem/1764
//
// step: 6
//
// id: 1764
//
// title: 듣보잡
//
// description:
// 김진영이 듣도 못한 사람의 명단과, 보도 못한 사람의 명단이 주어질 때, 듣도 보도 못한 사람의 명단을 구하는 프로그램을 작성하시오.
//
// input:
//
// 					첫째 줄에 듣도 못한 사람의 수 N, 보도 못한 사람의 수 M이 주어진다. 이어서 둘째 줄부터 N개의 줄에 걸쳐 듣도 못한 사람의 이름과, N+2째 줄부터 보도 못한 사람의 이름이 순서대로 주어진다. 이름은 띄어쓰기 없이 알파벳 소문자로만 이루어지며, 그 길이는 20 이하이다. N, M은 500,000 이하의 자연수이다.
//
// 듣도 못한 사람의 명단에는 중복되는 이름이 없으며, 보도 못한 사람의 명단도 마찬가지이다.
//
//
//
// output:
//
// 					듣보잡의 수와 그 명단을 사전순으로 출력한다.
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
  .split("\n");

const solution = (input) => {
  const [notHeardYetCount] = input
      .shift()
      .split(" ")
      .map((str) => parseInt(str)),
    notHeardYet = new Set(input.slice(0, notHeardYetCount)),
    notSeenYet = new Set(input.slice(notHeardYetCount)),
    whoRU = [];

  for (name of notSeenYet.values()) notHeardYet.has(name) && whoRU.push(name);

  return [whoRU.length, ...whoRU.sort()];
};

console.log(solution(input).join("\n"));
