const { encode, decode } = require('./decodeEncode.js');

it('tests if decode and encode are functions', () => {
  expect(typeof encode).toBe('function');
  expect(typeof decode).toBe('function');
});

it('tests if encode returns 1, 2, 3, 4 and 5', () => {
  expect(encode('a, e, i, o, u')).toBe('1, 2, 3, 4, 5');
});

it('tests if decode returns a, e, i, o and u', () => {
  expect(decode('1, 2, 3, 4, 5')).toBe('a, e, i, o, u');
});

it('tests if encode returns b, c, d, f and g', () => {
  expect(encode('b, c, d, f, g')).toBe('b, c, d, f, g');
});

it('tests if decode returns 6, u7, 9, 88 and 7a', () => {
  expect(decode('6, 57, 9, 88, 71')).toBe('6, u7, 9, 88, 7a');
});

it('tests if returned string has same length of the string provided', () => {
  expect(encode('a, e, i, o, u').length).toEqual(13);
});


