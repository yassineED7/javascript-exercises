const repeatString = function(str, num) {

    if (num < 0){return 'ERROR'}
    result = '';
    for (let i = 0; i < num; i++){
        result += str;
    }
    return result;
};

repeatString('hey', 3)
// console.log(repeatString('hey', 3))


// Do not edit below this line
module.exports = repeatString;
