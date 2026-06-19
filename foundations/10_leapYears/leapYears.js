const leapYears = function(years) {
    if ((years%4 === 0 && years%100 != 0 || years%400 === 0)){
        return true;
    }else {return false;}
};

leapYears(2000); // is a leap year: returns true
leapYears(1985); // is not a leap year: returns false

// Do not edit below this line
module.exports = leapYears;
