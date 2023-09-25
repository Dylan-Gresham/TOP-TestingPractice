function analyzeArray(array) {
    if(array === undefined || array === null 
	   || Array.isArray(array) === false) {
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
    let sum = 0;
    array.forEach(num => {
        sum += num;
    });

    return sum / array.length;
}

function min(array) {
    return Math.min(array);
}

function max(array) {
    return Math.max(array);
}

function getArrayLength(array) {
    return array.length;
}

module.exports = analyzeArray;
