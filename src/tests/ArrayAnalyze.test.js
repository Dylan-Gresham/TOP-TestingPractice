const analyzeArray = require('../ArrayAnalyze.js');

describe('Analyze Array Function', () => {
    test('No parameter', () => {
        expect(analyzeArray()).toBe(undefined);
    });

    test('Wrong parameter', () => {
        expect(analyzeArray(1)).toBe(undefined);
    });

    test('1 element array', () => {
        expect(analyzeArray([1])).toEqual({
            average: 1,
            min: 1,
            max: 1,
            length: 1
        });
    });

    test('2 element array', () => {
        expect(analyzeArray([1, 2])).toEqual({
            average: 1.5,
            min: 1,
            max: 2,
            length: 2
        });
    });

    test('3 element array', () => {
        expect(analyzeArray([1, 2, 3])).toEqual({
            average: 2,
            min: 1,
            max: 3,
            length: 3
        });
    });

    test('100 element array', () => {
        const testArray = [];
        for(let i = 1; i <= 100; i++) {
            testArray.push(i);
        }
        let expectedAvg, expectedMin, expectedMax, expectedLength = 100;
        expectedAvg = testArray.reduce( (partialSum, currNum) => partialSum + currNum, 0) / testArray.length;
        expectedMin = 1;
        expectedMax = 100;

        expect(analyzeArray(testArray)).toEqual({
            average: expectedAvg,
            min: expectedMin,
            max: expectedMax,
            length: expectedLength
        });
    });

    test('400 element RANDOM array', () => {
        const testArray = [];
        const MAX_NUM = 10000; // 10,000
        for(let i = 0; i < 400; i++) {
            testArray.push(Math.floor(Math.random() * MAX_NUM));
        }
        let expectedAvg, expectedMin, expectedMax, expectedLength;
        expectedAvg = testArray.reduce( (partialSum, currNum) => partialSum + currNum, 0) / testArray.length;
        expectedMin = Math.min(...testArray);
        expectedMax = Math.max(...testArray);
        expectedLength = 400;

        expect(analyzeArray(testArray)).toEqual({
            average: expectedAvg,
            min: expectedMin,
            max: expectedMax,
            length: expectedLength
        });
    });

    test('10 element WRONG-TYPE array', () => {
        const testArray = ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten'];

        expect(analyzeArray(testArray)).toBe(undefined);
    });

    test('10 element 1-WRONG-TYPE array', () => {
        const testArray = [];
        for(let i = 0; i < 10; i++) {
            if(i !== 5) {
                testArray.push(i);
            } else {
                testArray.push('five');
            }
        }

        expect(analyzeArray(testArray)).toBe(undefined);
    });
});
