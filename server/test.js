// app.test.js

// Import the function to be tested
const { sum } = require('server/function.js');

// Sample test cases
test('adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3);
});

test('adds 3 + 5 to equal 8', () => {
  expect(sum(3, 5)).toBe(8);
});
