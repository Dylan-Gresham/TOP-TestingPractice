module.exports = class Calculator {

    constructor() {}

    add(a, b) {
        if(arguments.length < 2) {
            throw new Error('Error: Not Enough Parameters. Functions needs 2 parameters');
        } else if(arguments.length > 2) {
            throw new Error('Error: Too Many Parameters. Function needs 2 parameters');
        } else if(typeof a !== 'number' || isNaN(a)) {
            return undefined;
        } else if(typeof b !== 'number' || isNaN(b)) {
            return undefined;
        }

        return a + b;
    };

    subtract(a, b) {
        if(arguments.length < 2) {
            throw new Error('Error: Not Enough Parameters. Functions needs 2 parameters');
        } else if(arguments.length > 2) {
            throw new Error('Error: Too Many Parameters. Function needs 2 parameters');
        } else if(typeof a !== 'number' || isNaN(a)) {
            return undefined;
        } else if(typeof b !== 'number' || isNaN(b)) {
            return undefined;
        }

        return a - b;
    };

    divide(a, b) {
        if(arguments.length < 2) {
            throw new Error('Error: Not Enough Parameters. Functions needs 2 parameters');
        } else if(arguments.length > 2) {
            throw new Error('Error: Too Many Parameters. Function needs 2 parameters');
        } else if(typeof a !== 'number' || isNaN(a)) {
            return undefined;
        } else if(typeof b !== 'number' || isNaN(b)) {
            return undefined;
        }

        return a / b;
    };

    multiply(a, b) {
        if(arguments.length < 2) {
            throw new Error('Error: Not Enough Parameters. Functions needs 2 parameters');
        } else if(arguments.length > 2) {
            throw new Error('Error: Too Many Parameters. Function needs 2 parameters');
        } else if(typeof a !== 'number' || isNaN(a)) {
            return undefined;
        } else if(typeof b !== 'number' || isNaN(b)) {
            return undefined;
        }

        return a * b;
    };
}
