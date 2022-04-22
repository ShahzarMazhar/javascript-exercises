const caesar = function(str, num) {
    let strArray = str.split("");
    let result = [];

    strArray.forEach(e => result.push(e.replace(e, function (){
        
        let oldCharCode = e.codePointAt(0);
        let newCharCode = oldCharCode + num;

        // if(oldCharCode >= 65 && oldCharCode <= 90){ 
        if(e.match(/[A-Z]/)){

            newCharCode = betweenMinMax(65, 90, newCharCode);

        // }else if(oldCharCode >= 97 && oldCharCode <= 122){ 
        }else if(e.match(/[a-z]/)){
            
            newCharCode = betweenMinMax(97, 122, newCharCode);

        }else{ // /[A-Za-z]^/
            newCharCode = oldCharCode;
        }

        return String.fromCharCode(newCharCode)
    }
    )));

    return result.join("");
};

function betweenMinMax(min, max, charCode){

    while(charCode < min || charCode > max){
        if(charCode < min){
            charCode += 26; 
        
        }else{
            charCode -= 26; 
        }
    }
   return charCode;
}


// Do not edit below this line
module.exports = caesar;
