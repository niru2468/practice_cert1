const addFive = require('./addFive');
test('should return the number added with 5', () => {
    expect(addFive(5)).toBe(10);
});
