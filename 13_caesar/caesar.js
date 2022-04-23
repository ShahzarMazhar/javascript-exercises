const caesar = function(str, num) {
    let strArray = str.split("");
    let result = [];

    strArray.forEach(e => result.push(e.replace(e, function (){
        
        let oldCharCode = e.codePointAt(0);
        let newCharCode = oldCharCode + num;

        if(e.match(/[a-z]/i)){
            let offset = (e.match(/[a-z]/)) ? 97 : 65;

            newCharCode = ((newCharCode - offset) % 26 + 26) % 26 + offset;

        }else{
            newCharCode = oldCharCode;
        }
        return String.fromCharCode(newCharCode)
    }
    )));

    return result.join("");
};

// Do not edit below this line
module.exports = caesar;
