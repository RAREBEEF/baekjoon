// url: https://www.acmicpc.net/problem/1193
//
// step: 6
//
// id: 1193
//
// title: 분수찾기
//
// description:
// 무한히 큰 배열에 다음과 같이 분수들이 적혀있다.
//
//
//
//
// 			1/1
// 			1/2
// 			1/3
// 			1/4
// 			1/5
// 			…
//
//
// 			2/1
// 			2/2
// 			2/3
// 			2/4
// 			…
// 			…
//
//
// 			3/1
// 			3/2
// 			3/3
// 			…
// 			…
// 			…
//
//
// 			4/1
// 			4/2
// 			…
// 			…
// 			…
// 			…
//
//
// 			5/1
// 			…
// 			…
// 			…
// 			…
// 			…
//
//
// 			…
// 			…
// 			…
// 			…
// 			…
// 			…
//
//
//
//
// 이와 같이 나열된 분수들을 1/1 → 1/2 → 2/1 → 3/1 → 2/2 → … 과 같은 지그재그 순서로 차례대로 1번, 2번, 3번, 4번, 5번, … 분수라고 하자.
//
// X가 주어졌을 때, X번째 분수를 구하는 프로그램을 작성하시오.
//
// input:
//
// 					첫째 줄에 X(1 ≤ X ≤ 10,000,000)가 주어진다.
//
//
//
// output:
//
// 					첫째 줄에 분수를 출력한다.
//
//
//
// sample input / output: 경로 내 txt 확인
//
// 이미지 여부: false
//
//

const input = parseInt(require("fs").readFileSync("./input10.txt"));

const solution = (n) => {
  let line = 1;
  let roomCount = 1;

  while (roomCount < n) {
    line += 1;
    roomCount += line;
  }

  let startAtTop = line % 2 === 0 ? true : false;
  const index = n - (roomCount - line);
  const result = [index, line - index + 1];

  return startAtTop ? result.join("/") : result.reverse().join("/");
};

console.log(solution(input));
