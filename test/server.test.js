const { add } = require('..');

describe('Tests Add Function', () => {
    test('should return 0 for an input of "" (empty string)', () => {
        let result = add('');
        expect(result).toBe(0);
    });
    test('should return 1 for an input of "1"', () => {
        let result = add('1');
        expect(result).toBe(1);
    })
    test('should return 6 for an input of "1,5"', () => {
        let result = add('1,5');
        expect(result).toBe(6);
    })
});
