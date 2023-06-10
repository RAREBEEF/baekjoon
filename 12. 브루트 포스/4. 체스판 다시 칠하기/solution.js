// url: https://www.acmicpc.net/problem/1018
//
// step: 4
//
// id: 1018
//
// title: 체스판 다시 칠하기
//
// description:
// 지민이는 자신의 저택에서 MN개의 단위 정사각형으로 나누어져 있는 M×N 크기의 보드를 찾았다. 어떤 정사각형은 검은색으로 칠해져 있고, 나머지는 흰색으로 칠해져 있다. 지민이는 이 보드를 잘라서 8×8 크기의 체스판으로 만들려고 한다.
//
// 체스판은 검은색과 흰색이 번갈아서 칠해져 있어야 한다. 구체적으로, 각 칸이 검은색과 흰색 중 하나로 색칠되어 있고, 변을 공유하는 두 개의 사각형은 다른 색으로 칠해져 있어야 한다. 따라서 이 정의를 따르면 체스판을 색칠하는 경우는 두 가지뿐이다. 하나는 맨 왼쪽 위 칸이 흰색인 경우, 하나는 검은색인 경우이다.
//
// 보드가 체스판처럼 칠해져 있다는 보장이 없어서, 지민이는 8×8 크기의 체스판으로 잘라낸 후에 몇 개의 정사각형을 다시 칠해야겠다고 생각했다. 당연히 8*8 크기는 아무데서나 골라도 된다. 지민이가 다시 칠해야 하는 정사각형의 최소 개수를 구하는 프로그램을 작성하시오.
//
// input:
//
// 					첫째 줄에 N과 M이 주어진다. N과 M은 8보다 크거나 같고, 50보다 작거나 같은 자연수이다. 둘째 줄부터 N개의 줄에는 보드의 각 행의 상태가 주어진다. B는 검은색이며, W는 흰색이다.
//
//
//
// output:
//
// 					첫째 줄에 지민이가 다시 칠해야 하는 정사각형 개수의 최솟값을 출력한다.
//
//
//
// sample input / output: 경로 내 txt 확인
//
// 이미지 여부: false
//
//

const input = require("fs")
  .readFileSync("./input7.txt")
  .toString()
  .trim()
  .split("\n");

const solution = (input) => {
  const boardOriginSize = input
    .shift()
    .split(" ")
    .map((str) => parseInt(str)); // 원본 보드 사이즈
  const boardOrigin = input.map((strs) => strs.split("")); // 원본 보드

  // 가능한 모든 보드 생성
  const boards = createValidBoards(boardOrigin, boardOriginSize);

  // 페인팅 횟수의 최소값 반환
  return Math.min(...boards.map((board) => painting(board)));
};

/**
 * 원본 보드를 8*8로 자를 수 있는 모든 경우의 수 반환
 */
const createValidBoards = (boardOrigin, boardOriginSize) => {
  const boards = [];

  for (let i = 0; i <= boardOriginSize[1] - 8; i++) {
    for (let j = 0; j <= boardOriginSize[0] - 8; j++) {
      const newBoard = [];

      for (let k = 0; k < 8; k++) {
        newBoard[k] = boardOrigin[j + k].slice(i, i + 8);
      }

      boards.push(newBoard);
    }
  }

  return boards;
};

/**
 * 인자로 받은 보드의 시작 색상에 따른 페인팅 횟수 중 최소값을 반환
 * */
const painting = (board) => {
  let paintingCount = 0;

  for (let i = 0; i < 8; i++) {
    const lineStartBlack = (i + 1) % 2 !== 0;

    for (let j = 0; j < 8; j++) {
      const cur = board[i][j];
      const isOdd = (j + 1) % 2 !== 0;

      // 라인이 블랙으로 시작
      if (lineStartBlack) {
        // 칸이 홀수
        if (isOdd) {
          if (cur !== "B") paintingCount += 1;
          // 칸이 짝수
        } else {
          if (cur !== "W") paintingCount += 1;
        }
        // 라인이 화이트로 시작
      } else {
        // 칸이 홀수
        if (isOdd) {
          if (cur !== "W") paintingCount += 1;
          // 칸이 짝수
        } else {
          if (cur !== "B") paintingCount += 1;
        }
      }
    }
  }

  // 두 경우의 수(시작 색상) 중 페인팅 최소값 반환
  return Math.min(paintingCount, 64 - paintingCount);
};

console.table(solution(input));
