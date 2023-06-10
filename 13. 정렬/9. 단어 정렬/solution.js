// url: https://www.acmicpc.net/problem/1181
//
// step: 9
//
// id: 1181
//
// title: 단어 정렬
//
// description:
// 알파벳 소문자로 이루어진 N개의 단어가 들어오면 아래와 같은 조건에 따라 정렬하는 프로그램을 작성하시오.
//
//
// 	길이가 짧은 것부터
// 	길이가 같으면 사전 순으로
//
//
// 단, 중복된 단어는 하나만 남기고 제거해야 한다.
//
// input:
//
// 					첫째 줄에 단어의 개수 N이 주어진다. (1 ≤ N ≤ 20,000) 둘째 줄부터 N개의 줄에 걸쳐 알파벳 소문자로 이루어진 단어가 한 줄에 하나씩 주어진다. 주어지는 문자열의 길이는 50을 넘지 않는다.
//
//
//
// output:
//
// 					조건에 따라 정렬하여 단어들을 출력한다.
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
  .split("\n")
  .slice(1);

const solution = (strs) => {
  if (strs.length < 2) {
    return strs;
  }

  const center = Math.floor(strs.length / 2),
    left = solution(strs.slice(0, center)),
    right = solution(strs.slice(center)),
    merged = [];

  let [indexL, indexR] = [0, 0];

  while (indexL < left.length && indexR < right.length) {
    const l = left[indexL],
      r = right[indexR];

    if (l === r) {
      merged.push(l);
      indexL += 1;
      indexR += 1;
    } else if (l.length < r.length) {
      merged.push(l);
      indexL += 1;
    } else if (l.length > r.length) {
      merged.push(r);
      indexR += 1;
    } else {
      for (let i = 0; i < l.length; i++) {
        if (l.charCodeAt(i) < r.charCodeAt(i)) {
          merged.push(l);
          indexL += 1;
          break;
        } else if (l.charCodeAt(i) > r.charCodeAt(i)) {
          merged.push(r);
          indexR += 1;
          break;
        } else {
          continue;
        }
      }
    }
  }

  return merged.concat(left.slice(indexL), right.slice(indexR));
};

console.log(solution(input).join("\n"));
