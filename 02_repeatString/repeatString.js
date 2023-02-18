const repeatString = function(str, num) {

    newStr = "";

    if (num < 0) {
        return "ERROR";
    }
    else {

        count = 0;
        while(count < num) {
            newStr += str;
            count++;
        }
        return newStr;
    }
};



// Do not edit below this line
module.exports = repeatString;
