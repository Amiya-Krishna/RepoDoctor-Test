const { add, multiply } = require("../src/utils");

if (add(2, 3) !== 5) {
  throw new Error("add() test failed");
}

if (multiply(4, 5) !== 20) {
  throw new Error("multiply() test failed");
}

console.log("All tests passed!");