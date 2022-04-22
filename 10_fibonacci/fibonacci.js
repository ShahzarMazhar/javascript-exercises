const fibonacci = function(int) {

    let result = 1;
    if (int > 0){
        let pre1 = 1;
        let pre2 = 0;

        for(i=0; i < int; i++){
            result = pre1 + pre2;
            pre1 = pre2;
            pre2 = result;
        }
    }else if(int < 0){
        result = "OOPS";
    }

    

    return result;
};

// Do not edit below this line
module.exports = fibonacci;
