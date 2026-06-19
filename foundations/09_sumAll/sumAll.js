const sumAll = function (min, max) {
    let sum = 0;
    let cup
    if ((min >= 0 && max >= 0)
        && (Number.isInteger(min) && Number.isInteger(max))) {
        if (min > max) { cup = min; min = max; max = cup; }

        for (let i = min; i <= max; i++) {
            sum = i + sum;
        }
        return sum;
    } else { return 'ERROR'; }
};

sumAll(1, 4) // returns the sum of 1 + 2 + 3 + 4 which is 10

// Do not edit below this line
module.exports = sumAll;
