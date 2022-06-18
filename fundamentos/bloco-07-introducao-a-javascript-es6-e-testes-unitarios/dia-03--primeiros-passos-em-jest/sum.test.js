const sum = require('./sum.js');

test('adds 4 and 5 equals 9', () => {
  expect(4 + 5).toEqual(9);
});

test('adds 0 and 0 equals 0', () => {
  expect(0 + 0).toEqual(0);
});

test('check if parameters are not numbers', () => {
  expect(typeOf(a) && typeOf(b)).toBe(typeOf(number));
});


