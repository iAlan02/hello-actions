const sub = require('../src/operations/subtract');

test('adds 3 - 2 to equal 1', () => {
    expect(sub.sub(3, 2)).toBe(1);
});