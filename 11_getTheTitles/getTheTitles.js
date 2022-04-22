const getTheTitles = function(e) {

    let result = [];

    e.forEach(e => result.push(e.title));
    
    return result;
    
};

// Do not edit below this line
module.exports = getTheTitles;
