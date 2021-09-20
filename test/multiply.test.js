const multiply = require('../src/operations/multiply');

test('adds 1 * 2 to equal 2', () => {
    expect(multiply.multiply(1, 2)).toBe(2);
});