class Calculator {
    constructor() {
        const add = (a, b) => {
            if(typeof a !== 'number') {
                return;
            } else if(typeof b !== 'number') {
                return;
            }

            return a + b;
        };

        const subtract = (a, b) => {
            if(typeof a !== 'number') {
                return;
            } else if(typeof b !== 'number') {
                return;
            }

            return a - b;
        };

        const divide = (a, b) => {
            if(typeof a !== 'number') {
                return;
            } else if(typeof b !== 'number') {
                return;
            }

            return a / b;
        };

        const multiply = (a, b) => {
            if(typeof a !== 'number') {
                return;
            } else if(typeof b !== 'number') {
                return;
            }

            return a * b;
        };
    }
}

module.exports = Calculator;
