function analyzeArray(array) {
    function isWrongType(array) {
        for(let i = 0; i < array.length; i++) {
            if(typeof array[i] !== 'number') {
                return true;
            }
        }

        return false;
    }

    if(array === undefined || array === null  || Array.isArray(array) === false
        || isWrongType(array)) {
        return undefined;
    } else {
        return {
            average: average(array),
            min: min(array),
            max: max(array),
            length: getArrayLength(array)
        };
    }
}

function average(array) {
    let cumSum = array.reduce( (partialSum, currNum) => partialSum + currNum, 0)
    return cumSum / array.length;
}

function min(array) {
    return Math.min(...array);
}

function max(array) {
    return Math.max(...array);
}

function getArrayLength(array) {
    return array.length;
}

module.exports = analyzeArray;
