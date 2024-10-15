// functions.test.js
const { add, subtract, multiply } = require('../math.js');

test('add(1, 2) should return 3', () => {
  expect(add(1, 2)).toBe(3);
});

test('subtract(5, 3) should return 2', () => {
  expect(subtract(5, 3)).toBe(2);
});

test('add should handle negative numbers', () => {
  expect(add(-1, -1)).toBe(-2);
});

test('subtract should return a negative result when second number is larger', () => {
  expect(subtract(3, 5)).toBe(-2);
});

test('multiply should return a result', () => {
    expect(multiply(3, 5)).toBe(15);
  });
