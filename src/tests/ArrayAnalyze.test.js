const analyzeArray = require('../ArrayAnalyze.js');

test('No parameter', () => {
    expect(analyzeArray()).toBe(undefined);
});

test('Wrong parameter', () => {
	expect(analyzeArray(1)).toBe(undefined);
});

