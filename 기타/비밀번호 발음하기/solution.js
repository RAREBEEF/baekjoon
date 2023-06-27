const solution = (passwords) => {
  const result = [];

  for (pw of passwords) {
    if (
      !/[aeiou]/.test(pw) ||
      /[aeiou]{3,}|[^aeiou]{3,}|([^eo])\1{1,}/.test(pw)
    ) {
      result.push(`<${pw}> is not acceptable.`);
    } else {
      result.push(`<${pw}> is acceptable.`);
    }
  }

  return result;
};

const input = require("fs")
  .readFileSync("./input1.txt")
  .toString()
  .trim()
  .split("\n");

input.pop();

console.log(solution(input).join("\n"));
