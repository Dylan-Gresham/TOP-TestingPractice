function caesarCipher(string, shiftFactor) {
    if(string === undefined || shiftFactor === undefined) {
        return;
    } else if(typeof string !== 'string') {
        return;
    } else if(typeof shiftFactor !== 'number') {
        return;
    }

    let allLetters = /[a-zA-z]/;
    let encoded = '';
    for(let i = 0; i < string.length; i++) {
        let currChar = string.charAt(i);
        if(allLetters.test(currChar)) {
            encoded.concat(String.fromCharCode((currChar.charCodeAt(0) - 97 + shiftFactor) % 26 + 97));
        } else {
            encoded.concat(currChar);
        }
    }

    return encoded;
}

module.exports = caesarCipher;