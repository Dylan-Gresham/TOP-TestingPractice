function capitalize(str) {
    if(typeof str !== 'string') {
        return;
    }

    let firstChar = str.slice(0, 1);
    let restOfStr = str.slice(1, str.length);

    return firstChar.toUpperCase().concat(restOfStr);
}

function reverseString(str) {
    if(typeof str !== 'string') {
        return;
    }

    // Split converts to an array of chars, reverse reverses the entire array
    // Join combines the array into a single string.
    return str.split('').reverse().join('');
}

module.exports = {
    capitalize,
    reverseString
};
