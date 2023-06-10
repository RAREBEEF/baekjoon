// url: https://www.acmicpc.net/problem/2750
//
// step: 1
//
// id: 2750
//
// title: 수 정렬하기
//
// description:
// N개의 수가 주어졌을 때, 이를 오름차순으로 정렬하는 프로그램을 작성하시오.
//
// input:
//
// 					첫째 줄에 수의 개수 N(1 ≤ N ≤ 1,000)이 주어진다. 둘째 줄부터 N개의 줄에는 수가 주어진다. 이 수는 절댓값이 1,000보다 작거나 같은 정수이다. 수는 중복되지 않는다.
//
//
//
// output:
//
// 					첫째 줄부터 N개의 줄에 오름차순으로 정렬한 결과를 한 줄에 하나씩 출력한다.
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
  .map((str) => parseInt(str))
  .slice(1);

const solution = (nums) => {
  const sorted = [nums.shift()];

  outer: while (nums.length > 0) {
    const curNum = nums.shift();
    inner: for (let i = 0; i < sorted.length; i++) {
      if (sorted[i] > curNum) {
        sorted.splice(i, 0, curNum);
        continue outer;
      } else {
        continue inner;
      }
    }

    sorted.push(curNum);
  }

  return sorted.join("\n");
};

console.log(solution(input));
