// calculator.test.js

const { add, subtract } = require("./calculator");
test("first test", () => {
  expect(add(1, 2)).toBe(3);
  expect(add(3, 2)).toBe(5);
  expect(subtract(10, 5)).toBe(5);
  expect(subtract(12, 10)).toBe(2);
});
