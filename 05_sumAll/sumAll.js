const sumAll = function(num1, num2) {
    if (num1 < 0 || num2 < 0 || Number.isInteger(num1) == false || Number.isInteger(num2) == false) {
        return 'ERROR';
    }
    if (num1 > num2) {
        max = num1;
        min = num2;
    }
    else {
        min = num1;
        max = num2;
    }
    var sum = 0;
    for (let i = min; i < max + 1; i++) {
        sum += i;
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
