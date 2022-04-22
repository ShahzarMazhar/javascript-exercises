const removeFromArray = function(...args) {
    let argsArray = args;
    
    let mainArray = argsArray.filter(extractArray)[0];
    let remainingArg = argsArray.filter(extractNonArray);

    let result = mainArray.filter(removeNonArray);


    function extractArray(value){
        return Array.isArray(value);
    }

    function extractNonArray(value){
            if(Array.isArray(value)){
                return false;
            }
        return true;
    }

    function removeNonArray(value){
        if(remainingArg.includes(value)){
            return false;
        }
        return true
    }

    return result;

};
    
// Do not edit below this line
module.exports = removeFromArray;
