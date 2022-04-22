const sumAll = function(value1, value2) {
    let result = 0;


    if(typeof(value1) == 'number' && typeof(value2) == 'number'){

        if(value1 < value2){
            for(i = value1; i <= value2; i++){
                result += i;
            }

        }else if(value1 > value2){
            for(i = value2; i <= value1; i++){
                result += i;
            }

        }
        if(result < 0){
            result = "ERROR";
        }

    }else{
        result = "ERROR";
    }

    return result;
};

// Do not edit below this line
module.exports = sumAll;
