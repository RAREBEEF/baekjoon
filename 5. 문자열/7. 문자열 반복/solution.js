// url: https://www.acmicpc.net/problem/2675
//
// step: 7
//
// id: 2675
//
// title: 문자열 반복
//
// description:
// 문자열 S를 입력받은 후에, 각 문자를 R번 반복해 새 문자열 P를 만든 후 출력하는 프로그램을 작성하시오. 즉, 첫 번째 문자를 R번 반복하고, 두 번째 문자를 R번 반복하는 식으로 P를 만들면 된다. S에는 QR Code "alphanumeric" 문자만 들어있다.
//
// QR Code "alphanumeric" 문자는 0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ\$%*+-./: 이다.
//
// input:
//
// 					첫째 줄에 테스트 케이스의 개수 T(1 ≤ T ≤ 1,000)가 주어진다. 각 테스트 케이스는 반복 횟수 R(1 ≤ R ≤ 8), 문자열 S가 공백으로 구분되어 주어진다. S의 길이는 적어도 1이며, 20글자를 넘지 않는다.
//
//
//
// output:
//
// 					각 테스트 케이스에 대해 P를 출력한다.
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
  const answer = [];
  for (let i = 1; i <= input[0]; i++) {
    const [repeat, str] = input[i].split(" ");

    answer.push([...str].map((char) => char.repeat(parseInt(repeat))).join(""));
  }

  return answer.join("\n");
};

console.log(solution(input));
