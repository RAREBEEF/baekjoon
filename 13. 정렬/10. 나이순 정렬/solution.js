// url: https://www.acmicpc.net/problem/10814
//
// step: 10
//
// id: 10814
//
// title: 나이순 정렬
//
// description:
// 온라인 저지에 가입한 사람들의 나이와 이름이 가입한 순서대로 주어진다. 이때, 회원들을 나이가 증가하는 순으로, 나이가 같으면 먼저 가입한 사람이 앞에 오는 순서로 정렬하는 프로그램을 작성하시오.
//
// input:
//
// 					첫째 줄에 온라인 저지 회원의 수 N이 주어진다. (1 ≤ N ≤ 100,000)
//
// 둘째 줄부터 N개의 줄에는 각 회원의 나이와 이름이 공백으로 구분되어 주어진다. 나이는 1보다 크거나 같으며, 200보다 작거나 같은 정수이고, 이름은 알파벳 대소문자로 이루어져 있고, 길이가 100보다 작거나 같은 문자열이다. 입력은 가입한 순서로 주어진다.
//
//
//
// output:
//
// 					첫째 줄부터 총 N개의 줄에 걸쳐 온라인 저지 회원을 나이 순, 나이가 같으면 가입한 순으로 한 줄에 한 명씩 나이와 이름을 공백으로 구분해 출력한다.
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
  .map((strs) => strs.split(" "))
  .slice(1);

// const insertSort = (arr) => {
//   for (let i = 1; i < arr.length; i++) {
//     let j = i;
//     while (j > 0 && parseInt(arr[j][0]) < parseInt(arr[j - 1][0])) {
//       [arr[j], arr[j - 1]] = [arr[j - 1], arr[j]];
//       j -= 1;
//     }
//   }

//   return arr;
// };

const solution = (arr) => {
  if (arr.length < 2) return arr;

  const center = Math.round(arr.length / 2),
    left = solution(arr.slice(0, center)),
    right = solution(arr.slice(center)),
    merged = [];

  let indexL = 0,
    indexR = 0;

  while (left.length > indexL && right.length > indexR) {
    switch (parseInt(left[indexL][0]) <= parseInt(right[indexR][0])) {
      case true:
        merged.push(left[indexL]);
        indexL += 1;
        break;
      default:
        merged.push(right[indexR]);
        indexR += 1;
    }
  }

  return merged.concat(left.slice(indexL), right.slice(indexR));
};

console.log(
  solution(input)
    .map((arr) => arr.join(" "))
    .join("\n")
);
