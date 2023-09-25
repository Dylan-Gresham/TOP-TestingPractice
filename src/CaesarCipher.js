function caesarCipher(string, shiftFactor) {
    if(string === undefined || shiftFactor === undefined) {
        return undefined;
    } else if(typeof string !== 'string') {
        return undefined;
    } else if(typeof shiftFactor !== 'number') {
        return undefined;
    }

    while(shiftFactor < 0) {
        shiftFactor += 26;
    }

    let allLetters = /[a-zA-z]/;
    let encoded = '';
    for(let i = 0; i < string.length; i++) {
        let currChar = string.charAt(i);
        if(allLetters.test(currChar)) {
            const currCharCode = currChar.charCodeAt(0);
            if(currCharCode >= 65 && currCharCode <= 90) {
                encoded += String.fromCharCode((currCharCode - 65 + shiftFactor) % 26 + 65);
            } else {
                encoded += String.fromCharCode((currCharCode - 97 + shiftFactor) % 26 + 97);
            }
        } else {
            encoded += currChar;
        }
    }

    return encoded;
}

module.exports = caesarCipher;