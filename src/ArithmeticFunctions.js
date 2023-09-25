module.exports = class Calculator {

    constructor() {}

    add = (a, b) => {
        if(typeof a !== 'number' || isNaN(a)) {
            return undefined;
        } else if(typeof b !== 'number' || isNaN(b)) {
            return undefined;
        }

        return a + b;
    };

    subtract = (a, b) => {
        if(typeof a !== 'number' || isNaN(a)) {
            return undefined;
        } else if(typeof b !== 'number' || isNaN(b)) {
            return undefined;
        }

        return a - b;
    };

    divide = (a, b) => {
        if(typeof a !== 'number' || isNaN(a)) {
            return undefined;
        } else if(typeof b !== 'number' || isNaN(b)) {
            return undefined;
        }

        return a / b;
    };

    multiply = (a, b) => {
        if(typeof a !== 'number' || isNaN(a)) {
            return undefined;
        } else if(typeof b !== 'number' || isNaN(b)) {
            return undefined;
        }

        return a * b;
    };
}
