import {
  add,
  subtract,
  multiply,
  divide,
} from "./src/calculator.js";

function assertEqual(actual, expected, message) {
  if (actual !== expected) {
    throw new Error(
      `${message}: expected ${expected}, got ${actual}`,
    );
  }
}

assertEqual(
  add(2, 3),
  5,
  "Addition failed",
);

assertEqual(
  subtract(5, 2),
  3,
  "Subtraction failed",
);

assertEqual(
  multiply(4, 3),
  12,
  "Multiplication failed",
);

assertEqual(
  divide(10, 2),
  5,
  "Division failed",
);

console.log(
  "All calculator tests passed.",
);