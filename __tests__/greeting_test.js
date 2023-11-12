const greet = require('../greeting');

test('greet', () => {
    expect(greet('Bob')).toBe('Hello, Bob.')
  })

  test('returns: Hello, my friend given: null', () => {
    expect(helloWorld(null)).toMatch("Hello, my friend.");
  })
