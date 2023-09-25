const Calculator = require('./../ArithmeticFunctions.js');

describe("Calculator", () => {
    const testCalc = new Calculator();

    test('Test Constructor', () => {
        expect(typeof testCalc.add).toBe('function');
        expect(typeof testCalc.subtract).toBe('function');
        expect(typeof testCalc.multiply).toBe('function');
        expect(typeof testCalc.divide).toBe('function');
    });

    // Add Tests

    test('Add 1 + 1', () => {
       expect(testCalc.add(1, 1)).toBe(2);
    });

    test('Add 1 + (-1)', () => {
       expect(testCalc.add(1, -1)).toBe(0);
       expect(testCalc.add(-1, 1)).toBe(0);
    });

    test('Add Big Numbers', () => {
        expect(testCalc.add(4000, 69)).toBe(4000 + 69);
        expect(testCalc.add(98032745, 743560)).toBe(98032745 + 743560);
    });

    test('Add with 1 wrong type', () => {
       expect(testCalc.add(1, 'one')).toBe(undefined);
       expect(testCalc.add('one', 1)).toBe(undefined);
    });

    test('Add with not enough parameters', () => {
       expect(() => testCalc.add(1)).toThrow(Error);
       expect(() => testCalc.add('one')).toThrow(Error);
       expect(() => testCalc.add(undefined)).toThrow(Error);
       expect(() => testCalc.add(null)).toThrow(Error);
       expect(() => testCalc.add(() => {})).toThrow(Error);
    });

    test('Add with too many parameters', () => {
        expect(() => testCalc.add(1, 2, 3)).toThrow(Error);
        expect(() => testCalc.add(1, 2, 'three')).toThrow(Error);
        expect(() => testCalc.add(1, 2, undefined)).toThrow(Error);
        expect(() => testCalc.add(1, 2, null)).toThrow(Error);
        expect(() => testCalc.add(1, 2, () => {})).toThrow(Error);
    });

    test('Add with NaN', () => {
        expect(testCalc.add(NaN, NaN)).toBe(undefined);
        expect(testCalc.add(1, NaN)).toBe(undefined);
        expect(testCalc.add(NaN, 1)).toBe(undefined);
    });

    // Subtract Tests

    test('Subtract 1 - 1', () => {
        expect(testCalc.subtract(1, 1)).toBe(0);
    });

    test('Subtract 1 - (-1)', () => {
        expect(testCalc.subtract(1, -1)).toBe(2);
        expect(testCalc.subtract(-1, 1)).toBe(-2);
    });

    test('Subtract Big Numbers', () => {
        expect(testCalc.subtract(4000, 69)).toBe(4000 - 69);
        expect(testCalc.subtract(98032745, 743560)).toBe(98032745 - 743560);
    });

    test('Subtract with 1 wrong type', () => {
        expect(testCalc.subtract(1, 'one')).toBe(undefined);
        expect(testCalc.subtract('one', 1)).toBe(undefined);
    });

    test('Subtract with not enough parameters', () => {
        expect(() => testCalc.subtract(1)).toThrow(Error);
        expect(() => testCalc.subtract('one')).toThrow(Error);
        expect(() => testCalc.subtract(undefined)).toThrow(Error);
        expect(() => testCalc.subtract(null)).toThrow(Error);
        expect(() => testCalc.subtract(() => {})).toThrow(Error);
    });

    test('Subtract with too many parameters', () => {
        expect(() => testCalc.subtract(1, 2, 3)).toThrow(Error);
        expect(() => testCalc.subtract(1, 2, 'three')).toThrow(Error);
        expect(() => testCalc.subtract(1, 2, undefined)).toThrow(Error);
        expect(() => testCalc.subtract(1, 2, null)).toThrow(Error);
        expect(() => testCalc.subtract(1, 2, () => {})).toThrow(Error);
    });

    test('Subtract with NaN', () => {
        expect(testCalc.subtract(NaN, NaN)).toBe(undefined);
        expect(testCalc.subtract(1, NaN)).toBe(undefined);
        expect(testCalc.subtract(NaN, 1)).toBe(undefined);
    });

    // Divide Tests

    test('Divide 1 / 1', () => {
        expect(testCalc.divide(1, 1)).toBe(1);
    });

    test('Divide 1 / -1', () => {
        expect(testCalc.divide(1, -1)).toBe(-1);
        expect(testCalc.divide(-1, 1)).toBe(-1);
    });

    test('Divide Big Numbers', () => {
        expect(testCalc.divide(4000, 69)).toBe(4000 / 69);
        expect(testCalc.divide(98032745, 743560)).toBe(98032745 / 743560);
    });

    test('Divide with 1 wrong type', () => {
        expect(testCalc.divide(1, 'one')).toBe(undefined);
        expect(testCalc.divide('one', 1)).toBe(undefined);
    });

    test('Divide with not enough parameters', () => {
        expect(() => testCalc.divide(1)).toThrow(Error);
        expect(() => testCalc.divide('one')).toThrow(Error);
        expect(() => testCalc.divide(undefined)).toThrow(Error);
        expect(() => testCalc.divide(null)).toThrow(Error);
        expect(() => testCalc.divide(() => {})).toThrow(Error);
    });

    test('Divide with too many parameters', () => {
        expect(() => testCalc.divide(1, 2, 3)).toThrow(Error);
        expect(() => testCalc.divide(1, 2, 'three')).toThrow(Error);
        expect(() => testCalc.divide(1, 2, undefined)).toThrow(Error);
        expect(() => testCalc.divide(1, 2, null)).toThrow(Error);
        expect(() => testCalc.divide(1, 2, () => {})).toThrow(Error);
    });

    test('Divide with NaN', () => {
        expect(testCalc.divide(NaN, NaN)).toBe(undefined);
        expect(testCalc.divide(1, NaN)).toBe(undefined);
        expect(testCalc.divide(NaN, 1)).toBe(undefined);
    });

    // Multiply Tests

    test('Multiply 1 / 1', () => {
        expect(testCalc.multiply(1, 1)).toBe(1);
    });

    test('Multiply 1 / -1', () => {
        expect(testCalc.multiply(1, -1)).toBe(-1);
        expect(testCalc.multiply(-1, 1)).toBe(-1);
    });

    test('Multiply Big Numbers', () => {
       expect(testCalc.multiply(4000, 69)).toBe(4000 * 69);
       expect(testCalc.multiply(98032745, 743560)).toBe(98032745 * 743560);
    });

    test('Multiply with 1 wrong type', () => {
        expect(testCalc.multiply(1, 'one')).toBe(undefined);
        expect(testCalc.multiply('one', 1)).toBe(undefined);
    });

    test('Multiply with not enough parameters', () => {
        expect(() => testCalc.multiply(1)).toThrow(Error);
        expect(() => testCalc.multiply('one')).toThrow(Error);
        expect(() => testCalc.multiply(undefined)).toThrow(Error);
        expect(() => testCalc.multiply(null)).toThrow(Error);
        expect(() => testCalc.multiply(() => {})).toThrow(Error);
    });

    test('Multiply with too many parameters', () => {
        expect(() => testCalc.multiply(1, 2, 3)).toThrow(Error);
        expect(() => testCalc.multiply(1, 2, 'three')).toThrow(Error);
        expect(() => testCalc.multiply(1, 2, undefined)).toThrow(Error);
        expect(() => testCalc.multiply(1, 2, null)).toThrow(Error);
        expect(() => testCalc.multiply(1, 2, () => {})).toThrow(Error);
    });

    test('Multiply with NaN', () => {
        expect(testCalc.multiply(NaN, NaN)).toBe(undefined);
        expect(testCalc.multiply(1, NaN)).toBe(undefined);
        expect(testCalc.multiply(NaN, 1)).toBe(undefined);
    });
});
