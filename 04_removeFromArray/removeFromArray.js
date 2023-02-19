const removeFromArray = function(...args) {
    const array = args[0];
    const newArray = [];

    array.forEach((ele) => {
        if (!args.includes(ele)) {
            newArray.push(ele);
        }
    });

    return newArray;
}

// Do not edit below this line
module.exports = removeFromArray;
