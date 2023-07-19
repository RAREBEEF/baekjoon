// url: https://www.acmicpc.net/problem/1083
//
// id: 1083
//
// title: 소트
//
// description:
// 크기가 N인 배열 A가 있다. 배열에 있는 모든 수는 서로 다르다. 이 배열을 소트할 때, 연속된 두 개의 원소만 교환할 수 있다. 그리고, 교환은 많아봐야 S번 할 수 있다. 이때, 소트한 결과가 사전순으로 가장 뒷서는 것을 출력한다.
//
// input:
//
// 					첫째 줄에 N이 주어진다. N은 50보다 작거나 같은 자연수이다. 둘째 줄에는 각 원소가 차례대로 주어진다. 이 값은 1000000보다 작거나 같은 자연수이다. 마지막 줄에는 S가 주어진다. S는 1000000보다 작거나 같은 음이 아닌 정수이다.
//
//
//
// output:
//
// 					첫째 줄에 문제의 정답을 출력한다.
//
//
//
// sample input / output: 경로 내 txt 확인
//
// 이미지 여부: false
//
//

const solution = (input) => {
  const nums = input.shift();
  let count = input.shift()[0],
    pos = 0;

  while (count > 0) {
    const range = nums.slice(pos, pos + count + 1);
    const max = Math.max(...range);
    const iOfMax = range.indexOf(max);

    if (range.length === 0) {
      break;
    } else if (iOfMax <= count) {
      range.unshift(range.splice(iOfMax, 1)[0]);
      nums.splice(pos, range.length, ...range);
    } else {
      range.splice(iOfMax - count, 0, range.splice(iOfMax, 1)[0]);
    }

    count = Math.max(count - iOfMax, 0);
    pos += 1;
  }

  return nums.join(" ");
};

const input = require("fs")
  .readFileSync("./input3.txt")
  .toString()
  .trim()
  .split("\n")
  .map((strs) => strs.split(" ").map((str) => parseInt(str)))
  .slice(1);

console.log(solution(input));
