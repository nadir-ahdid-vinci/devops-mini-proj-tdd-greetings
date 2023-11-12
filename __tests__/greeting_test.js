const greet = require('../greeting');

test('greet', () => {
  expect(greet('nadir')).toBe('Hello, nadir');
});

