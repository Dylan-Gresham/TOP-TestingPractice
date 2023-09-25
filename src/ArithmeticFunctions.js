module.exports = class Calculator {

    constructor() {}

    add = (a, b) => {
        if(typeof a !== 'number') {
            return;
        } else if(typeof b !== 'number') {
            return;
        }

        return a + b;
    };

    subtract = (a, b) => {
        if(typeof a !== 'number') {
            return;
        } else if(typeof b !== 'number') {
            return;
        }

        return a - b;
    };

    divide = (a, b) => {
        if(typeof a !== 'number') {
            return;
        } else if(typeof b !== 'number') {
            return;
        }

        return a / b;
    };

    multiply = (a, b) => {
        if(typeof a !== 'number') {
            return;
        } else if(typeof b !== 'number') {
            return;
        }

        return a * b;
    };
}
