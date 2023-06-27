// 14500

// prettier-ignore

const solution = (input) => {
  const [n, m] = input.shift(),
    board = input,
    tetrominos = [
      [ [0, 0], [0, 1], [1, 0], [1, 1] ],
      [ [0, 0], [0, 1], [0, 2], [0, 3] ],
      [ [0, 0], [1, 0], [2, 0], [3, 0] ],
      [ [0, 0], [1, 0], [2, 0], [2, 1] ],
      [ [0, 0], [0, 1], [0, 2], [-1, 2] ],
      [ [0, 0], [0, 1], [1, 1], [2, 1] ],
      [ [0, 0], [0, 1], [0, 2], [1, 0] ],
      [ [0, 0], [1, 0], [1, 1], [1, 2] ],
      [ [0, 0], [1, 0], [2, 0], [2, -1] ],
      [ [0, 0], [0, 1], [0, 2], [1, 2] ],
      [ [0, 0], [0, 1], [1, 0], [2, 0] ],
      [ [0, 0], [1, 0], [1, 1], [2, 1] ],
      [ [1, 0], [1, 1], [0, 1], [0, 2] ],
      [ [0, 0], [1, 0], [0, 1], [-1, 1] ],
      [ [0, 0], [0, 1], [1, 1], [1, 2] ],
      [ [0, 0], [0, 1], [0, 2], [1, 1] ],
      [ [0, 0], [1, 0], [2, 0], [1, 1] ],
      [ [0, 0], [0, 1], [0, 2], [-1, 1] ],
      [ [0, 0], [-1, 1], [0, 1], [1, 1] ]
    ];

  let max = 0;

  for (i = 0; i < n; i++) {
    for (j = 0; j < m; j++) {
      for (tetromino of tetrominos) {
        let sum = 0;
        for (piece of tetromino) {
          const [y, x] = piece;
          if (0 > i + y || n <= i + y || 0 > j + x || m <= j + x) break;
          sum += board[i + y][j + x];
        }
        max < sum && (max = sum);
      }
    }
  }

  return max;
};

const input = require("fs")
  .readFileSync("./input2.txt")
  .toString()
  .trim()
  .split("\n")
  .map((strs) => strs.split(" ").map((str) => parseInt(str)));

console.log(solution(input));

// prettier-ignore
// const tetris = [
//   [[0, 0], [0, 1], [0, 2], [0, 3]],
//   [[0, 0], [1, 0], [2, 0], [3, 0]],
//   [[0, 0], [1, 0], [0, 1], [1, 1]],
//   [[0, 0], [1, 0], [2, 0], [2, 1]],
//   [[0, 1], [1, 1], [2, 1], [2, 0]],
//   [[0, 0], [0, 1], [1, 1], [2, 1]],
//   [[0, 0], [0, 1], [1, 0], [2, 0]],
//   [[0, 0], [1, 0], [1, 1], [1, 2]],
//   [[0, 2], [1, 1], [1, 2], [1, 0]],
//   [[0, 0], [0, 1], [0, 2], [1, 2]],
//   [[0, 0], [1, 0], [0, 1], [0, 2]],
//   [[0, 0], [1, 0], [1, 1], [2, 1]],
//   [[0, 1], [1, 1], [1, 0], [2, 0]],
//   [[1, 0], [1, 1], [0, 1], [0, 2]],
//   [[0, 0], [0, 1], [1, 1], [1, 2]],
//   [[0, 1], [1, 0], [1, 1], [1, 2]],
//   [[0, 0], [0, 1], [0, 2], [1, 1]],
//   [[0, 0], [1, 0], [1, 1], [2, 0]],
//   [[0, 1], [1, 1], [1, 0], [2, 1]],
// ];
// const sampleBoard = [
//   [0, 0, 0, 0, 0, 0],
//   [0, 0, 0, 0, 0, 0],
//   [0, 0, 0, 0, 0, 0],
//   [0, 0, 0, 0, 0, 0],
//   [0, 0, 0, 0, 0, 0],
//   [0, 0, 0, 0, 0, 0],
// ];
// const start = [1, 1];
// for (cur of tetrominos) {
//   const curBoard = JSON.parse(JSON.stringify(sampleBoard))
//   for (point of cur) {
//     const [y, x] = point;
//     curBoard[1 + y][1 + x] = 1;
//   }
//   console.log(curBoard);
// }
