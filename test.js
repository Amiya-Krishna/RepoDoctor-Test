import assert from "node:assert/strict";
import { add, subtract, multiply, divide } from "./src/utils.js";

assert.equal(add(2, 3), 5, "add(2, 3) should equal 5");
assert.equal(add(-1, 1), 0, "add(-1, 1) should equal 0");

assert.equal(subtract(5, 2), 3, "subtract(5, 2) should equal 3");
assert.equal(subtract(0, 4), -4, "subtract(0, 4) should equal -4");

assert.equal(multiply(4, 3), 12, "multiply(4, 3) should equal 12");
assert.equal(multiply(7, 0), 0, "multiply(7, 0) should equal 0");

assert.equal(divide(10, 2), 5, "divide(10, 2) should equal 5");
assert.throws(() => divide(10, 0), /Division by zero/, "divide(10, 0) should throw");

console.log("All RepoDoctor-Test checks passed.");