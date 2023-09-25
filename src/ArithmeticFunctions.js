module.exports = class Calculator {

    constructor() {}

    add = (a, b) => {
        if(typeof a !== 'number') {
            return undefined;
        } else if(typeof b !== 'number') {
            return undefined;
        }

        return a + b;
    };

    subtract = (a, b) => {
        if(typeof a !== 'number') {
            return undefined;
        } else if(typeof b !== 'number') {
            return undefined;
        }

        return a - b;
    };

    divide = (a, b) => {
        if(typeof a !== 'number') {
            return undefined;
        } else if(typeof b !== 'number') {
            return undefined;
        }

        return a / b;
    };

    multiply = (a, b) => {
        if(typeof a !== 'number') {
            return undefined;
        } else if(typeof b !== 'number') {
            return undefined;
        }

        return a * b;
    };
}
