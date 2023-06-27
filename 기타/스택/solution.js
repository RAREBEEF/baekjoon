// 10828

const solution = (input) => {
  const actions = input.map((strs) => strs.split(" "));
  const stackInt = [];
  const log = [];

  for (action of actions) {
    switch (action[0]) {
      case "push":
        stackInt.push(action[1]);
        break;
      case "pop":
        log.push(stackInt.pop() || -1);
        break;
      case "size":
        log.push(stackInt.length);
        break;
      case "empty":
        log.push(stackInt.length === 0 ? 1 : 0);
        break;
      case "top":
        log.push(stackInt.at(-1) || -1);
    }
  }

  return log;
};

const input = require("fs")
  .readFileSync("./input2.txt")
  .toString()
  .trim()
  .split("\n")
  .slice(1);

console.log(solution(input).join("\n"));
