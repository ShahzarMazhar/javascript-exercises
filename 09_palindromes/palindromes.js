const palindromes = function (str) {

    str = str.replace(/[^\w]/gi, '').toLowerCase();

    let strArray = str.split("");

    let reverseStr = [];

    strArray.forEach(e => reverseStr.unshift(e));

    return reverseStr.join('') == str;
};

// Do not edit below this line
module.exports = palindromes;
