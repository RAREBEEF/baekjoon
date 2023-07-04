// prettier-ignore

const solution = (input) => {
  const n = input.shift()[0],
    faces = input.shift(),
    [a, b, c, d, e, f] = faces;

  if (n === 1) {
    return faces.reduce((acc, cur) => acc + cur, 0) - Math.max(...faces);
  }

  const oneFace = (n - 2) ** 2 * 5 + (n - 2) * 4,
    twoFace = (n - 2) * 8 + 4,
    threeFace = 4,
    edges = [ 
      a + b, /**/ a + c, /**/ a + d, 
      a + e, /**/ b + c, /**/ b + d,
      b + f, /**/ f + c, /**/ f + d, 
      f + e, /**/ e + c, /**/ e + d,
    ],
    vertex = [
      a + b + c, /**/ a + b + d, 
      a + d + e, /**/ a + c + e, 
      f + b + c, /**/ f + b + d,
      f + d + e, /**/ f + c + e,
    ],
    minOne = Math.min(...faces),
    minTwo = Math.min(...edges),
    minThree = Math.min(...vertex);

  return minOne * oneFace + minTwo * twoFace + minThree * threeFace;
};

const input = require("fs")
  .readFileSync("./input1.txt")
  .toString()
  .trim()
  .split("\n")
  .map((strs) => strs.split(" ").map((str) => parseInt(str)));

console.log(solution(input));
