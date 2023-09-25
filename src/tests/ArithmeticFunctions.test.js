const Calculator = require('./../ArithmeticFunctions.js');

describe("Calculator", () => {
    const testCalc = new Calculator();

    test('Test Constructor', () => {
        expect(typeof testCalc.add).toBe('function');
        expect(typeof testCalc.subtract).toBe('function');
        expect(typeof testCalc.multiply).toBe('function');
        expect(typeof testCalc.divide).toBe('function');
    });
});
