const reverseString = function (word) {
    return word
            .split('')
            .reverse()
            .join('')
};

reverseString('hello there') // returns 'ereht olleh'

// Do not edit below this line
module.exports = reverseString;
