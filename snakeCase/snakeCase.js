const snakeCase = function(str) {

    let filteredStr;
    let separators = /[ -.?]/.test(str);

    if(!separators){

        //in which Caps used as separator
        filteredStr = str.replace(/[A-Z]/g, ' $&');

    }else{

        filteredStr = str.replace(/[A-Z]/g, '$&');

    }
      filteredStr = filteredStr.replace(/[,? -\.]+/g, "_")

      let lastUnderscore = /[_]$/;

    if(lastUnderscore.test(filteredStr)){

        filteredStr = filteredStr.replace(/_$/, "");

    }
     return filteredStr.toLowerCase();
};

// Do not edit below this line
module.exports = snakeCase;
