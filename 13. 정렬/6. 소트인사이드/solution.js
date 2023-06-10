// url: https://www.acmicpc.net/problem/1427
//
// step: 6
//
// id: 1427
//
// title: 소트인사이드
//
// description:
// 배열을 정렬하는 것은 쉽다. 수가 주어지면, 그 수의 각 자리수를 내림차순으로 정렬해보자.
//
// input:
//
// 					첫째 줄에 정렬하려고 하는 수 N이 주어진다. N은 1,000,000,000보다 작거나 같은 자연수이다.
//
//
//
// output:
//
// 					첫째 줄에 자리수를 내림차순으로 정렬한 수를 출력한다.
//
//
//
// sample input / output: 경로 내 txt 확인
//
// 이미지 여부: false
//
//

const input = require("fs")
  .readFileSync("./input4.txt")
  .toString()
  .trim()
  .split("")
  .map((str) => parseInt(str));

const solution = (arr) => {
  if (arr.length < 2) {
    return arr;
  }

  const pivot = arr[0];
  const left = [];
  const center = [];
  const right = [];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < pivot) {
      left.push(arr[i]);
    } else if (arr[i] > pivot) {
      right.push(arr[i]);
    } else {
      center.push(arr[i]);
    }
  }

  return solution(right).concat(center, solution(left));
};

console.log(solution(input).join(""));
