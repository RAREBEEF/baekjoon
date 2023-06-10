// 10811
const input = require("fs")
  .readFileSync("../input.txt")
  .toString()
  .trim()
  .split("\n")
  .map((strs) => strs.split(" ").map((str) => parseInt(str)));

const reverseBasket = (actions) => {
  const basketCount = actions.shift()[0];
  const baskets = [...Array(basketCount).keys()].map((num) => num + 1);

  actions.forEach((action) => {
    const [from, to] = action;
    const target = baskets.splice(from - 1, to - from + 1);
    baskets.splice(from - 1, 0, ...target.reverse());
  });

  return baskets;
};

console.log(reverseBasket(input).join(" "));
